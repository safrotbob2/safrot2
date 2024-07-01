import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let handler = async (m, { conn }) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";

    if (!mime.startsWith('image')) {
      throw "*الرد على الصورة*";
    }

    let data = await q.download();
    let image = await uploadImage(data);



    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);

    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("استجابة واجهة برمجة التطبيقات:", result);

    if (!result || result.error || result.result.length === 0) {
      throw "*خطأ: تعذر تتبع الأنمي.*";
    }

    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";

    let message = `*انـمـي:* ${animeTitle}\n`;

    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*المرادفات:* ${anilist.synonyms.join(", ")}\n`;
    }

    message += `*تشـابـه:* ${similarity.toFixed(2)}%\n`;
    message += `*الـوقـت:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;

    if (episode) {
      message += `*حــلـقـة:* ${episode}\n`;
    }

    console.log("معلومات الانمي:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "غير متاح",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });

    // Send the video with anime information as the caption
    await conn.sendFile(m.chat, video, 'anime.mp4', message, m);
  } catch (error) {
    console.error("خطأ:", error);
    m.reply("*خطأ: تعذر تتبع الأنمي أو إرسال الفيديو.*");
  }
};

function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

handler.help = ["trace"];
handler.tags = ["anime"];
handler.command = /^trace|تعقب$/i;

export default handler;

import fetch from "node-fetch"
let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    let lister = [
        "بحث",
        "فيديو"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|")
    if (!lister.includes(feature)) return m.reply("*مثال:*\n.انمي بحث|Dragon ball \n\n*حدد نوع موجود*\n" + lister.map((v, index) => "  ○ " + v).join('\n'))

    if (lister.includes(feature)) {

        if (feature == "بحث") {
            if (!inputs) return m.reply("Input query anime")
            await m.reply(wait)
            let outs = await searchAnime(inputs)
            let teks = outs.map((anime, index) => {
                return `*[ ${index + 1} ]*
*عنوان:* ${anime.anime_name}
*بطاقة تعريف:* ${anime.id}
*سبيكة:* ${anime.slug}
*قصة:* ${anime.story}
*اسم اخر:* ${anime.other_names}
*إجمالي الحلقة:* ${anime.total_episodes}
*عمر:* ${anime.age}
*يكتب:* ${anime.type}
*حالة:* ${anime.status}
*ملصق المسار:* ${anime.poster_path}
*نشرت من قبل:* ${anime.published}
*تاريخ النشر* ${anime.published_at}
*سنة:* ${anime.year_id}
*صنع في:* ${anime.created_at}
*تحديث في:* ${anime.updated_at}
   `.trim()
            }).filter(v => v).join("\n\n________________________\n\n")
            await m.reply(teks)
        }

        if (feature == "فيديو") {
            if (!inputs) return m.reply("Input query slug")
            await m.reply(wait)
            let outs = await fetchAnime(inputs, inputs_)
            await m.reply(outs)
        }

    }
}
handler.help = ["animeiat type query"]
handler.tags = ["internet"]
handler.command = /^(anime|انمي)$/i
export default handler

async function searchAnime(query) {
    try {
        const response = await fetch(`https://api.animeiat.co/v1/anime?q=${query}`)
        const data = await response.json()
        return data.data
    } catch (error) {
        console.error('Terjadi kesalahan:', error)
        return null
    }
}

async function fetchAnime(query, episodes = 1) {
  try {
    const response = await fetch("https://api.animeiat.co/v1/anime?q=" + query);
    const sear = await response.json();
    const response1 = await fetch("https://api.animeiat.co/v1/episode/" + sear.data[0].slug + "-episode-" + episodes);
    const data = await response1.json();
    const slug = data.data.video.slug;
    const response2 = await fetch("https://api.animeiat.co/v1/video/" + slug);
    const data2 = await response2.json();
    const source = data2.data.sources;

    const teks = source.map((anime, index) => {
      return `*[ ${index + 1} ]*
*جودة:* ${anime.quality}
*ملصق:* ${anime.label}
*رابط:* ${anime.file}
   `.trim();
    }).filter(v => v).join("\n\n________________________\n\n");

    return teks;
  } catch (error) {
    console.error(error);
    return null;
  }
}

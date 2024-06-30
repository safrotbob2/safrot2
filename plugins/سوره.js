import fetch from 'node-fetch';
import { translate } from '@vitalets/google-translate-api';

let quranSurahHandler = async (m, { conn }) => {
  try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
      throw new Error(`يرجى تحديد رقم السورة\n\n  مثال سوره 1`);
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran');
    let surahList = await surahListRes.json();

    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
      throw new Error(`تعذر العثور على سورة برقم أو اسم "${surahInput}"`);
    }

    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!res.ok) {
      let error = await res.json(); 
      throw new Error(`فشل طلب واجهة برمجة التطبيقات بالحالة ${res.status} والرساله ${error.message}`);
    }

    let json = await res.json();

    // Translate tafsir from Bahasa Indonesia to Arabic
    let translatedTafsirArabic = await translate(json.data.tafsir.id, { to: 'ar', autoCorrect: true });

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true });

    let quranSurah = `
🕌 *القرآن: الكتاب المقدس*\n
📜 *سورة ${json.data.number}: ${json.data.asma.ar.long}*\n
النوع: ${json.data.type.ar}\n
عدد الآيات: ${json.data.ayahCount}\n
🔮 *التوضيح (عربي):*\n
${translatedTafsirArabic.text}`;

    m.reply(quranSurah);

    if (json.data.recitation.full) {
      conn.sendFile(m.chat, json.data.recitation.full, 'quran.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
  } catch (error) {
    console.error(error);
    m.reply(`خطأ: ${error.message}`);
  }
};

quranSurahHandler.help = ['quran [surah_number|surah_name]'];
quranSurahHandler.tags = ['quran', 'surah'];
quranSurahHandler.command = ['quran', 'سوره']

export default quranSurahHandler;

  
  
  
  

import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `*[❗] أدخل اسم البلد , مثل ${usedPrefix + command} Egypt*`;
  const res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)));
  if (!res.ok) throw await res.text();
  const json = await res.json();
  if (!json.confirmed) throw 'País?';
  if (json.confirmed) {
    m.reply(`
🌏 دولة : ${text}
✅ مؤكد : ${json.confirmed.value}
📉 علاجه : ${json.recovered.value}
☠️ حالات الوفاة : ${json.deaths.value}
💌معلومات محدثة : ${json.lastUpdate}
> 『بوت سفروت🔥📌』`.trim());
  } else throw json;
};
handler.help = ['covid'].map((v) => v + ' <país>');
handler.tags = ['info'];
handler.command = /^(corona|دوله|بلد|covid|covid19)$/i;
export default handler;

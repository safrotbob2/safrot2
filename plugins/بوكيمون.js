import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw '> يرجى تقديم اسم بوكيمون للبحث عنه.';

  const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;

  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw `حدث خطأ: ${json.error}`;
  }

  const message = `
*اسم:* ${json.name}
*بطاقة تعريف:* ${json.id}
*يكتب:* ${json.type}
*قدرات:* ${json.abilities}
*الارتفاع:* ${json.height}
*الوزن:* ${json.weight}
*الوصف:* ${json.description}
> 『سفروت الفقدان🧸🥂』`;

  conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });
};

handler.help = ['pokedex <pokemon>'];
handler.tags = ['anime'];
handler.command = /^pokedex|pokemon|بوكيمون/i;

export default handler;

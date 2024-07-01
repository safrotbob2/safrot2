import fetch from 'node-fetch';
import GIFBufferToVideoBuffer from '../lib/Gifbuffer.js';

const getBuffer = async (url) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer);
  } catch (error) {
    console.error("Failed to get buffer", error);
    throw new Error("Failed to get buffer");
  }
}

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  } else {
    who = m.chat;
  }

  if (!who) throw `✳️ *_منشن للشخص الذي تريد ان تعمل له رياكشن_*\n📌 مثال : ${usedPrefix + command} @منشن`;

  let name = conn.getName(who);
  let name2 = conn.getName(m.sender);
  m.react(rwait);

  let reaction = await fetch(`https://api.waifu.pics/sfw/${command}`);
  if (!reaction.ok) throw await reaction.text();

  let json = await reaction.json();
  let { url } = json;
  const gifBuffer = await getBuffer(url);
  const gifToVideoBuffer = await GIFBufferToVideoBuffer(gifBuffer);

  conn.sendMessage(
    m.chat,
    { video: gifToVideoBuffer, caption: `(${name2}) ${command} ${name}`, gifPlayback: true, gifAttribution: 0 },
    { quoted: m }
  );

  m.react('🪩'); 
}

handler.tags = ['reaction'];
handler.help = [
  'تنمر @منشن',
  'حضن @منشن',
  'يبكي @منشن',
  'احضن @منشن',
  'رائع @منشن',
  'قبله @منشن',
  'يلعق @منشن',
  'تربيه @منشن',
  'متعجرف @منشن',
  'ضرب @منشن',
  'يرمي بقوه @منشن',
  'مكسوف @منشن',
  'يبتسم @منشن',
  'موجه @منشن',
  'كفك @منشن',
  'كفك٢ @منشن',
  'يأكل @منشن',
  'يعض @منشن',
  'حضن2 @منشن',
  'كف @منشن',
  'قتل @منشن',
  'سعيد @منشن',
  'غمزه @منشن',
  'لمس @منشن',
  'رقص @منشن',
  'يستوعب @منشن'
];

handler.command = /^(تنمر|حضن|يبكي|احضن|رائع|قبله|يلعق|تربيه|متعجرف|ضرب|يرمي بقوه|مكسوف|يبتسم|موجه|كفك|كفك٢|يأكل|يعض|حضن2|كف|قتل|سعيد|غمزه|لمس|رقص|يستوعب)$/i;
handler.group = true;

export default handler;

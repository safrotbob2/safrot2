import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: 'رابـط الـجـروب',
      body: '『🔥┇𝚖𝚟𝚛𝚘 𝚋𝚘𝚝
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `http://wa.me/201208386317`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك(gro?up)?$/i;
handler.admin = true
handler.group = true;
handler.botAdmin = true;
export default handler;

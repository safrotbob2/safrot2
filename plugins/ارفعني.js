const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*[❗] انت ادمن اصلا يا مطوري ❤️*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*[❗] ايف مش قادر*');
  }
};
handler.command = /^autoadmin|ارفعني|adm$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;

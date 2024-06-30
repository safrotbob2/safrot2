let handler = async (m, { conn, command, text }) => {
let love = `‏

*✥━─━⌬〘𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت مارو 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘🕊◡̈⃝🥂〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه ♯ЅᗩFᏒOT꙯〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاا بالمجموعات 〙⌬*

*✥━─━⌬〘🕊◡̈⃝🥂〙⌬━─━✥*


*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/201115610053 ⊱⏣*


*✥━─━⌬〘𝙼𝚅𝚁𝙾 𝙱𝙾𝚃〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler

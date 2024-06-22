let handler = async (m, { conn, command, text }) => {
let love = `‏

*✥━─━⌬〘𝙼𝚅𝚁𝙾 𝙱𝙾𝚃〙⌬━─━✥*

*⌬〘 مرحبا بك في بوت مارو 〙⌬*

*⌬〘 اليك قائمه بسورس البوت 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*

*⌬〘 تم تطويري وبرمجتي 〙⌬*
*⌬〘 بواسطه 𝓐𝓜𝓡𝓞 𝓚𝓗𝓐𝓛𝓘𝓓〙⌬*
*⌬〘 هذا البوت يعمل بالخاص 〙⌬*
*⌬〘 ويعمل ايضاا بالمجموعات 〙⌬*

*✥━─━⌬〘🔥〙⌬━─━✥*


*⌬〘 واتساب 〙⌬*

*⏣⊰ https://wa.me/201208386317 ⊱⏣*


*✥━─━⌬〘𝙼𝚅𝚁𝙾 𝙱𝙾𝚃〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler

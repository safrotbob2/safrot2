let handler = async (m, { conn, command, text }) => {
let love = `
*لدعم البوت تستطيع ان تفعل:-*
*1_تستطيع دخول قروب دعم البوت لدعمه.↯↯*
**

*2_ لينك روم الدعم تعاله وهات حبيبك:-*
*https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY

*3_ رقمي للتواصل ولدعم:-*
*+201115618856*

*𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(الدعم|دعم)$/i
export default handler

let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*باي من غير سلام! (ᥬ🥺᭄)ゞ*') 
await conn.groupLeave(id)}
handler.tags = ['owner']
handler.command = /^(اخرج|leavegc|برا|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
export default handler

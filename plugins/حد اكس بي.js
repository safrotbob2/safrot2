let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
m.reply(`*${global.db.data.users[who].diamond} الحد المتبقي (⁠ᥬ🥺᭄)*`)

}
handler.help = ['limit [@user]']
handler.tags = ['rg']
handler.command = /^(limit|حد)$/i
export default handler

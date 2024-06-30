var handler = async (m, {conn, usedPrefix, command}) => {

if (!m.quoted) throw `*⚠️رد ع فيديو لتحويله جيفgif*` 
const q = m.quoted || m
const mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*⚠️ تشابه ${mime} غير مدعوم*` 
m.reply('*🤺🔥 تم التحويل بوساطه بوت سفروت*')
const media = await q.download()
conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*🚀🚀*'}, {quoted: m})

}
handler.help = ['togifaud']
handler.tags = ['transformador']
handler.command = ['جيف']

handler.limit = true
 
export default handler

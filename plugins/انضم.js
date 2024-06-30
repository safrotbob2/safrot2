let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw ` *أدخل رابط المجموعة.*\n*أدخل رابط المجموعة.*\n\n*مثال*\n*#انضم ${nn}*\n\n*#ادخل ${nnn}*`

if ( isMods || isOwner || m.fromMe) {
m.reply(` تم الانضم اللي المجموعه!!✅*\n*تم الانضمام بنجاح ✅*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(1 * 1000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`╭══•───────────────•══╮\n┃ 📧 *الطلب للانضمام إلى المجموعة*\n┃ 📧 *طلبات المجموعه*\n╰══•───────────────•══╯\n\n*👤 الطالب*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 لينك الجروب*\n ' + link, jid)

m.reply(`*✅ تم إرسال الرابط الخاص بك لي مطوري.*\n*تم إرسال الرابط الخاص بك إلى مطوري.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *سيتم تقييم مجموعتك وسيكون الأمر متروكًا للمالك ليقرر ما إذا كان سينضم إلى المجموعة أم لا.*\n*سيتم تقييم مجموعتك وسيكون الأمر متروكًا للمالك إذا انضم إلى المجموعة أم لا.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *قد يتم رفض طلبك للأسباب التالية::*\n*قد يتم رفض طلبك للأسباب التالية:*\n*1️⃣ البوت مشنع بجروبات كثيرا جدا.*\n*البوت مشنع بجروبات كثيرا جدا.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *تم طرد البوت مسبقاً.*\n*تم طرد البوت مسبقاً.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *المجموعه لا تلتزم بالقوانين\n*المجموعه لا تلتزم بالقوانين\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *رابط الجروب تم تعينه .*\n*رابط الجروب تم تعينه .*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5️⃣ *لم تتم إضافته إلى المجموعات بناءً على مطوري.*\n*لم تتم إضافته إلى المجموعات بواسطة مطوري*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *قد يستغرق الرد على الطلب ساعات.  يرجى التحلي بالصبر.  شكرا*\n*قد يستغرق الرد على الطلب ساعات.  يرجى التحلي بالصبر.  شكرًا لك*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|ادخل|انضم|unir|unite|unirse|entra|entrar$/i 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

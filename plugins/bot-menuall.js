import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://www.paypal.me/MOHAMEDSharkawy642')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `┓━ ╼━━━╃⌬〔🔥〕⌬╄━━━╾ ━┏
*❂┇❯ مـرحــبـا بــك یــا ${taguser}*
*✦*
*≼🔥≽ مـعـلــومـات الـبــوت╿↶*
━ ── • ⟐ • ── ━
*❂┇❯ اســم الـبــوت ❰ 🔥爪乇ᘜㄖ🔥 ❱*
*❂┇❯ وقــت الـتشـغـيــل : ⌊ ${uptime} ⌉╎🔥*
*❂┇❯ الـمـطـور : ⌊https://wa.me/201012531172⌉╎🔥*
*❂┇❯ الـمـطـور : ⌊ https://Solo.to/mego51-51 ⌉╎🔥*
*❂┇❯ الـإصـدار : ⌊v3.5⌉╎🔥*
*❂┇❯ مـنـصـة الـتشـغـيــل :  ⌊ هيروكو ⌉╎🔥*
*❂┇❯ يمكنك دعم البوت عن طريق كتابه .الدعم ⌉╎🔥*

            ━ ── • ⟐ • ── ━

*≼🏰≽ قـسـم المجموعات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .جروبي⌉*
*🔥╎❯ .معلوم_الجروب⌉*
*🔥╎❯ .دعوه⌉*
*🔥╎❯ .منشن⌉*
*🔥╎❯ .مخفي⌉*
*🔥╎❯ .طرد⌉*
*🔥╎❯ .اضافة⌉*
*🔥╎❯ .ترقيه⌉*
*🔥╎❯ .خفض⌉*
*🔥╎❯ .حذف⌉*
*🔥╎❯ .جروب⌉*
*🔥╎❯ .جروب فتح⌉*
*🔥╎❯ .جروب غلق⌉*
*🔥╎❯ .تغييرالصورة⌉*
*🔥╎❯ .طرد_رمز⌉*
*🔥╎❯ .لينك⌉*
*🔥╎❯ .رستر⌉*
*🔥╎❯ .المشرفين⌉*
*🔥╎❯ .انذار⌉*
*🔥╎❯ .الغاء_الانذار ⌉*
*🔥╎❯ .الانذارات⌉*
   ────── • ◈ • ──────
*≼📜≽ قـسـم الدين╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .ايه-الكرسي⌉*
*🔥╎❯ .الله⌉*
*🔥╎❯ .قران⌉*
*🔥╎❯ .سوره⌉*
*🔥╎❯ .سور⌉*
*🔥╎❯ .حديث⌉*
*🔥╎❯ .ذكر⌉*
   ────── • ◈ • ──────
   *≼💎≽ قـسـم البنك╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .البنك⌉*
*🔥╎❯ .راتب⌉*
*🔥╎❯ .هجوم⌉*
*🔥╎❯ .يومي⌉*
*🔥╎❯ .الماس⌉*
*🔥╎❯ .ترتيب⌉*
*🔥╎❯ .ايدي⌉*
*🔥╎❯ .لفل⌉*
*🔥╎❯ .تسجيل⌉*
*🔥╎❯ .الغاء_التسجيل⌉*
   ────── • ◈ • ──────
*≼⏬≽ قـسـم التحميل+البحث╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .فيديو⌉*
*🔥╎❯ .فيديو2⌉*
*🔥╎❯ .اغنيه⌉*
*🔥╎❯ .اغاني⌉*
*🔥╎❯ .شغل⌉*
*🔥╎❯ .شغل1⌉*
*🔥╎❯ .صورة ⌉*
*🔥╎❯ .طقم⌉*
*🔥╎❯ .طقم_اولاد⌉*
*🔥╎❯ .طقم_بنات⌉*
*🔥╎❯ .البحث⌉*
*🔥╎❯ .ويكيبيديا⌉*
*🔥╎❯ .تيك⌉*
*🔥╎❯ .تيك_صور⌉*
*🔥╎❯ .يوتيوب⌉*
*🔥╎❯ .بينترست⌉*
*🔥╎❯ .فيسبوك⌉*
*🔥╎❯ .تطبيق⌉*
*🔥╎❯ .انستا⌉*
*🔥╎❯ .خلفيه⌉*
*🔥╎❯ .ميديافاير⌉*
*🔥╎❯ .مانجا⌉*
*🔥╎❯ .فريبيك⌉*
*🔥╎❯ .جيف⌉*
*🔥╎❯ .بنت⌉*
   ────── • ◈ • ──────
*≼🕹≽ قـسـم الترفيه╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .اكس_او⌉*
*🔥╎❯ .احذف_اللعبه⌉*
*🔥╎❯ .تحدي⌉*
*🔥╎❯ .احزر⌉*
*🔥╎❯ .حظ⌉*
*🔥╎❯ .جميل⌉*
*🔥╎❯ .صفع⌉*
*🔥╎❯ .طبطبه⌉*
*🔥╎❯ .ورع⌉*
*🔥╎❯ .اهبل⌉*
*🔥╎❯ .خروف⌉*
*🔥╎❯ .انطق⌉*
*🔥╎❯ .نسبه⌉*
*🔥╎❯ .لو⌉*
*🔥╎❯ .تويت⌉*
*🔥╎❯ .تاج⌉*
*🔥╎❯ .سؤال⌉*
*🔥╎❯ .اسئلني⌉*
*🔥╎❯  كت⌉*
*🔥╎❯ .شطرنج⌉*
*🔥╎❯ .سلاحي*
*🔥╎❯ .علم⌉*
*🔥╎❯ .نصايح⌉*
*🔥╎❯ .علم⌉*
*🔥╎❯ .عكس⌉*
*🔥╎❯ .تويت⌉*
*🔥╎❯ .مراتي⌉*
*🔥╎❯ .فزوره⌉*
*🔥╎❯ .لغز⌉*
*🔥╎❯ .حروف⌉*
*🔥╎❯ .شخصيه⌉*
*🔥╎❯ .احرجني⌉*
*🔥╎❯ .خمن⌉*
*🔥╎❯ .فكك⌉*
*🔥╎❯ .المارد⌉*
*🔥╎❯ .ايمو⌉*
*🔥╎❯ .دين⌉*
   ────── • ◈ • ──────
*≼♻️≽ قـسـم التحويل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .ملصق⌉*
*🔥╎❯ .حقوق⌉*
*🔥╎❯ .لصورة⌉*
*🔥╎❯ .لفيديو⌉*
*🔥╎❯ .دائري⌉*
*🔥╎❯ .لرابط⌉*
*🔥╎❯ .لصوت⌉*
*🔥╎❯ .لريك⌉*
*🔥╎❯ .باركود⌉*
*🔥╎❯ .تيلجرام⌉*
*🔥╎❯ .تليجراف⌉*
*🔥╎❯ .حيوان⌉*
*🔥╎❯ .قط⌉*
*🔥╎❯ .كلب⌉*
*🔥╎❯ .ستك⌉*
*🔥╎❯ .مترجم⌉*
*🔥╎❯ .نرد⌉*
*🔥╎❯ .ترجمه⌉*
*🔥╎❯ .لانمي⌉*
*🔥╎❯ .ارسم⌉*
   ────── • ◈ • ──────
*≼🔊≽ قـسـم الصوتيات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .عميق⌉*
*🔥╎❯ .منفوخ⌉*
*🔥╎❯ .تخين⌉*
*🔥╎❯ .صاخب⌉*
*🔥╎❯ .سريع⌉*
*🔥╎❯ .رفيع⌉*
*🔥╎❯ .روبوت⌉*
*🔥╎❯ .بطئ⌉*
*🔥╎❯ .ناعم⌉*
*🔥╎❯ .سنجاب⌉*
*🔥╎❯ .مكس⌉*
   ────── • ◈ • ──────
*≼🧞≽ قـسـم الاعضاء╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .اختفاء⌉*
*🔥╎❯ .ابلاغ⌉*
*🔥╎❯ .تحدث⌉* 
*🔥╎❯ .بوت⌉*
*🔥╎❯ .بروفايل⌉*
*🔥╎❯ .منشن⌉*
*🔥╎❯ .سرعه⌉*
*🔥╎❯ .خط⌉*
*🔥╎❯ .دمج⌉*
*🔥╎❯ .هل⌉*
*🔥╎❯ .منشني⌉*
*🔥╎❯ .توب⌉*
*🔥╎❯ .تصاميم⌉*
*🔥╎❯ .تصميم⌉*
*🔥╎❯ .المطور⌉*
*🔥╎❯ .تسجيل⌉*
*🔥╎❯ .جوجل⌉*
*🔥╎❯ .تعليق⌉*
*🔥╎❯ .جوده⌉*
*🔥╎❯ .ايديت⌉*
*🔥╎❯ .الاستماره⌉*
*🔥╎❯ .الدعم⌉*
*🔥╎❯ .تفريغ⌉*
*🔥╎❯ .فضح⌉*
*🔥╎❯ .الطقس⌉*
*🔥╎❯ .احسب⌉*
*🔥╎❯ .بوست⌉*
*🔥╎❯ .عبارات⌉*
*🔥╎❯ .رابطي⌉*
*🔥╎❯ .تكرار⌉*
*🔥╎❯ .فحص⌉*
*🔥╎❯ .قص⌉*
*🔥╎❯ .السورس⌉*
*🔥╎❯ .قوانين⌉*
*🔥╎❯ .المعرف⌉*
*🔥╎❯ .المستخدمين⌉*
   ────── • ◈ • ──────
*≼🧧≽ قـسـم المطور╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*🔥╎❯ .بان⌉*
*🔥╎❯ .بان_فك⌉*
*🔥╎❯ .بان_شات⌉*
*🔥╎❯ .بان_شات_فك⌉*
*🔥╎❯ .حطها بروفايل⌉*
*🔥╎❯ .ضيف_الماس⌉*
*🔥╎❯ .ضيف_اكسبي⌉*
*🔥╎❯ .اعاده⌉*
*🔥╎❯ .اخرج⌉*
*🔥╎❯ .ادخل⌉*
*🔥╎❯ .تهكير⌉*
*🔥╎❯ .المده⌉*
*🔥╎❯ .حذف_المده⌉*
*🔥╎❯ .البلوكات⌉*
*🔥╎❯ .فك_البلوك⌉*
*🔥╎❯ .بلوك⌉*
*🔥╎❯ .بريم⌉*
*🔥╎❯ .حذف_بريم⌉*
*🔥╎❯ .المميزين⌉*
*🔥╎❯ .تسريع⌉*
*🔥╎❯ .نشر⌉*
*⋄━───═◞⬪قوانين⬪◟═───━⋄*
*🔥╎❯ ممنوع سب البوت لانك سبيت البوت = سبيت المطور*
*🔥╎❯ تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور*
*🔥╎❯ المطور wa.me/+201012531172*
*┛━ ╼━━━╃⌬〔🔥〕⌬╄━━━╾ ━┗*`.trim()
let buttonMessage = {
image: pp, 
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '『🔥┇mego-𝙱𝙾𝚃』', 
body: null,
thumbnail: img,
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(المهام|مهام|الاوامر|menu|أوامر|اوامر)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

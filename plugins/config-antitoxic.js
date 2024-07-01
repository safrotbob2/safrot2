const toxicRegex = /كسمك|خول|عرص|متناك|كس|fuck|قحبة|خول|mrd|يمتناك|اختك|maricon|شرموط|متناك|زبي|منيوك|شرموط|مفشوخi

export async function before(m, {isAdmin, isOwner}) {
if (m.isBaileys && m.fromMe) return !0
if (!m.isGroup) return !1
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
const isToxic = toxicRegex.exec(m.text)

if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4))
await m.reply(`${user.warn == 1 ? `لا 😠 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, قل الكلمة (${isToxic}) يحظر *${user.warn}/6* تحذير (تحذيرات)`, false, {mentions: [m.sender]})
}

if (user.warn >= 4) {
user.warn = 0;
await m.reply(`🚩 أخبرتك *@${m.sender.split`@`[0]}*, قلتلك لو اتجاوزت 6 انزارات هطردك يلا انطر برا😘, false, { mentions: [m.sender], })
user.banned = false
await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
return !1

}

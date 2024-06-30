import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => thumbnailUrl.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [nomorown, `${await conn.getName(nomorown + '@s.whatsapp.net')}`, `💌 مطور البوت `, `A ليس مشهور`, `amr846373@gmail.com`, `🇪🇬Egypt`, `📍 https://wa.me/201208386317`, `👤 Owner 𝙼𝚅𝚁𝙾 𝙱𝙾𝚃`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 Whatsapp Bot`, `📵 Dont Spam`, `Nothing`, `Egypt 🇪🇬`, `📍 https://wa.me/201208386317`, `مجرد روبوت عادي يحتوي على خطأ في بعض الأحيان ☺`]
  ], fkontak)
  await conn.reply(m.chat,`مرحبا ${m.sender.split(`@`)[0]} هذا هو المالك الخاص بي، لا ترسل بريدًا عشوائيًا وإلا سأحظرك`, sentMsg, {
                mentions: [m.sender]
            })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|المنشى|creator)$/i

export default handler

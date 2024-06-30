import * as baileys from '@adiwajshing/baileys'

let handler = async (m, { conn, text }) => {
    let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
    if (!code) throw '*⚠️ أدخل رابط المجموعة*'
    let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
        data = extractGroupMetadata(res),
        txt = Object.keys(data).map(v => `*${v}:* ${data[v]}`).join('\n'),
        pp = await conn.profilePictureUrl(data.id, 'image').catch(console.error)
    let groupinfo = `
*┏━━━━━━━━━━━━━━━┓*
*┃☂️ ⫹⫺ المعرف:* ${data.id}◞
*┃🧪 ⫹⫺ الاسم:* ${data.subject.toUpperCase()}
*┃📅 ⫹⫺ التاريخ:* ${data.creation}
*┃👑 ⫹⫺ المالك:* ${data.owner}
*┗━━━━━━━━━━━━━━━┛*
`
    await conn.reply(m.chat, groupinfo, m)
    const botones = [
        { index: 1, urlButton: { displayText: `نسخ الوصف 🍧`, url: `https://www.whatsapp.com/otp/copy/${data.desc}` } },
    ]
    await conn.sendMessage(m.chat, { text: `*┏━━━━━━━━━━━━━━┓*\n┃هل تريد نسخ الوصف ؟ •🌷\n*┗━━━━━━━━━━━━━━┛*`, templateButtons: botones, footer: wm })
}
handler.command = /^(فحص|افحص)$/i

export default handler
handler.owner = false

const extractGroupMetadata = (result) => {
    const group = result?.children.find(node => node.tag === 'group')
    const descChild = group?.children.find(node => node.tag === 'description')
    let desc
    if (descChild) desc = descChild?.children.find(node => node.tag === 'body')?.content
    const metadata = {
        id: group?.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
        subject: group?.attrs.subject,
        creation: new Date(+group?.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
        owner: group?.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group?.attrs.creator).split('@')[0] : undefined,
        desc
    }
    return metadata
}

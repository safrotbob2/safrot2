import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn}) => {
try {
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://api.waifu.pics/sfw/pat')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `+${m.sender.split('@')[0]} 𝐵𝑌:𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩 ${m.mentionedJid.map((user)=>(user === m.sender)? '𝐵𝑌:𝙼𝚅𝚁𝙾-𝙱𝙾𝚃': `+${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(ملصق-انمي)$/i
export default handler

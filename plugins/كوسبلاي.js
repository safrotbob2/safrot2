import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
        let url = 'https://kannxapi.herokuapp.com/api/randomimage/cosplay'
        conn.sendButton(m.chat, 'Watashiwa Anime Desu (🧸◡̈⃝🥂)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(cosplay|كوسبلاي)$/i
handler.tags = ['anime']
handler.help = ['cosplay']
handler.premium = false

export default handler

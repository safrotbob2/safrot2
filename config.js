import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201115618853', '🌩️ ♯̶ЅᗩFᏒOT꙯‽ 👑', true], 
 ['201115618853', '🌩️ ♯̶ЅᗩFᏒOT꙯ 👑', true],  ['201115618853'], ['20111561853'], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +201115618853
global.confirmCode = ''

global.animxscans = ['201115618853']
global.suittag = ['201115618853']
global.mods = []
global.prems = []

global.packname = '『 201115618853 』'
global.author = '『 بوت سفࢪوت🕊 』'
global.wm = '『بوت سفࢪوت🧸🥂 』'
global.wm2 = '『 سفࢪوت بوت🥷🏻🔥 』'
global.azami = '『سفروت بوت🧌🤺 』'
global.cb = '『 سفروت بوت🤺🔥 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© ♯ЅᗩFᏒOT꙯ 𝙱𝙾𝚃'
global.devnum = '201115618853'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['201208386317', '🌩️ ẉa.me/MVRO‖.peị!‽ 👑', true], 
 ['201208386317', '🌩️ ẉa.me/MVRO‖.peị!‽ 👑', true],  ['201208386317'], ['201208386317'], ['201222585154'], ['201033057971'], ['201208386317'], ['201208386317'], ['201208386317'], ['201208386317'], ['201208386317']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +201208386317
global.confirmCode = ''

global.animxscans = ['201208386317']
global.suittag = ['201208386317']
global.mods = []
global.prems = []

global.packname = '『 201208386317 』'
global.author = ''
global.wm = '『مـــاࢪو بــ🐍ـؤؤت 』'
global.wm2 = '『 مـــاࢪو بــ💎ـوت 』'
global.azami = '『مـــاࢪو بــ💀وت 』'
global.cb = '『 مـــاࢪو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© 𝙼𝚅𝚁𝙾 𝙱𝙾𝚃'
global.devnum = '201208386317'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})

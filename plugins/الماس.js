let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`╭─╮─᤻─᳒─᤻᳒「░⃟⃜🍭ꪳ۫₎۬۟〬الماسك░⃟⃜🐾⁩」
├❥ᰰຼ💎⃟ᬽ៸ *الرقم:* ${name}
├❥ᰰຼ💎⃟ᬽ៸ *الماس*: ${global.db.data.users[who].diamond} 💎
├❥ᰰຼ💎⃟ᬽ  *اكسبي:* ${global.db.data.users[who].exp}
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬🔥◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯

*╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐يستخدم*️⃟ᬽ፝֟━*
├❥ᰰຼ *يمكنك شراء الماس 💎*
├❥ᰰຼ *استخدم جميع المنتجات*
├❥ᰰຼ ❏ *${usedPrefix}شراء <كميه>*
├❥ᰰຼ ❏ *${usedPrefix} شراءالكل*
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭۫*`)
}
handler.help = ['bal']
handler.tags = ['rg']
handler.command = ['bal', 'الماس', 'diamond', 'balance'] 
export default handler

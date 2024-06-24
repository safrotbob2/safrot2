cmd({
            pattern: "play",
            react: "🎧",
            alias :["song","شغل"],
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack"); 
let textYt;        
if (text.startsWith("https://youtube.com/shorts/")) {
  const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=");
  const s2vid = svid.split("?feature")[0];
  textYt = s2vid;
} else {
  textYt = text;
}
            let search = await yts(textYt);
            let anu = search.videos[0];
                       let buttonMessaged ={
             image: {
                    url: anu.thumbnail,
               },
                caption: `
 ╼━━━━━━➢━━━━━━━━╾
      🎧𝑀𝑉𝑅𝑂 𝑌𝛩𝑈𝑇𝑈𝐵𝛯⃤🎧
 ╼━━━━━━➢━━━━━━━━╾
*🧛🏻‍♂️⃝🇪🇬الـعـنـوان🗒️┇* ${anu.title}

*🧛🏻‍♂️⃝🇪🇬لـمـده⏳┇* ${anu.timestamp}
*🧛🏻‍♂️⃝🇪🇬الـمـشـاهـدات👀┇* ${anu.views}
*🧛🏻‍♂️⃝🇪🇬الـنـشـر📤┇* ${anu.ago}
*🧛🏻‍♂️⃝🇪🇬الـقـنـاه🧑‍🎤┇* ${anu.author.name}
*🧛🏻‍♂️⃝🇪🇬الـفـيديـو⬇️┇*
 ───────➢────────
*❄️⃝🧚‍♀️الـرابـط🔗┇* ${anu.url}
`,			
                footer: tlang().footer,
                headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
            });

            
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            let infoYt = await ytdl.getInfo(anu.url);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*֎╎حـجـم الـمـقـطـع كـبـيـر جـدا*`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
 /*           citel.reply(`
╔───────────────◆
┊🧚 ${tlang().title} 
┊🚨 *Youtube Player* ✨
┊ ┉━━━━◭☬◮━━━━━┉
┊🎀 *Title:* ${anu.title}
┊🌐 *Duration:* ${anu.timestamp}
┊👀 *Viewers:* ${anu.views}
┊⬆️ *Uploaded:* ${anu.ago}
┊👽 *Author:* ${anu.author.name}
╚────────────────◆
⦿ *Url* : ${anu.url}`,)
*/
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: titleYt,
                            body: citel.pushName,
                            renderLargerThumbnail: false,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: anu.url,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: anu.url,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`*֎╎حـجـم الـمـقـطـع كـبـيـر جـدا*`);
            }
            fs.unlinkSync(`./${randomName}`);
            


        }
    )

cmd({
            pattern: "tts",
            alias :["قول","انطق"],
            react: "📼",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('*֎╎اكـتـب اي شـي وسـوف انـطـقـه*')
            let texttts = text
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "ar",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
        }

    )
    
//---------------------------------------------------------------------------    
    
    cmd({
            pattern: "gitclone",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },
        async(Void, citel, text) => {
	if (!text) return await citel.send('*Provide Repo Url, Ex:- _.gitclone https://github.com/Bladeh4x/BLADE-MD_*') 
    const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    if (!regex.test(text) ) return await citel.send('*Uhh Please, Provide Valid Repositry Url*');
    let [_, user, repo] = text.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    //citel.send(`✳️ Wait, sending repository.. \n` + filename.toString() )
	await Void.sendMessage(citel.chat , {document : { url : url }, fileName:  filename,mimetype: 'application/zip',  })

	})

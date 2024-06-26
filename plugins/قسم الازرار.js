//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/907043adb138306690d38.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `*𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩*`.trim() },  
            header: {
                title: `*┃━━━━━⬣𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃⬣━━━━━┃*\n\n*◞❐نورت يا حب بوت سفروت🤺🔥*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}\n\n*◞❐اسم البوت : بوت سفروت🧸🔥*\n\n*◞❐موقع التنصيب : heroku*\n\n*◞❐البوت يعمل في الخاص والجروبات*\n\n*◞❐يمنع شتم البوت*\n\n*┃━━━━━⬣𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃⬣━━━━━┃*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '⌝قـائـمـه الاوامـر⌞',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: 'yas',
  						  		    rows: [
  						  		    	{
  						  		    		header: '◡̈⃝˼‏👥˹ ━━|قسم الجروبات│━━˼‏👥˹◡̈⃝_',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '◡̈⃝˼‏👥˹ ━━|الجروبات│━━˼‏👥˹◡̈⃝_',
  								    		  id: '.سفروت1'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '◡̈⃝˼‏🤍˹ ━━|قسم الدين│━━˼‏📿˹◡̈⃝',
  										      title: '𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩',
  									    	  description: '◡̈⃝˼‏🤍˹ ━━|قسم الدين│━━˼‏📿˹◡̈⃝',
  								    		  id: '.سفروت2'
  						  		    	}
  						  				]
  						        	},
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '◡̈⃝˼‏👨🏼‍🎤˹ ━━|قسم الانمي│━━˼‏👩🏻‍🎤˹◡̈⃝',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '◡̈⃝˼‏👨🏼‍🎤˹ ━━|قسم الانمي│━━˼‏👩🏻‍🎤˹◡̈⃝',
  								    		  id: '.سفروت3'
  						  		    	}
  						  				]
                                    },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الترفيه≽..】',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الترفيه≽..】',
  								    		  id: '.الترفيه'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '◡̈⃝˼‏📥˹ ━━|قسم التحميل│━━˼‏📥˹◡̈⃝',
  										      title: '𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩',
  									    	  description: '◡̈⃝˼‏📥˹ ━━|قسم التحميل│━━˼‏📥˹◡̈⃝',
  								    		  id: '.سفروت5'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم التحويلات≽..】',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم التحويلات≽..】',
  								    		  id: '.التحويلات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '◡̈⃝˼‏👤˹ ━━|قسم الاديت│━━˼✨˹◡̈⃝',
  										      title: '𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩',
  									    	  description: '◡̈⃝˼‏👤˹ ━━|قسم الاديت│━━˼✨˹◡̈⃝',
  								    		  id: '.سفروت7'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '◡̈⃝˼‏🏦˹ ━━|قسم البنك│━━˼🏦˹◡̈⃝',
  										      title: '𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩',
  									    	  description: '◡̈⃝˼‏🏦˹ ━━|قسم البنك│━━˼🏦˹◡̈⃝',
  								    		  id: '.سفروت8'
  						  		    	}
  						  				]
                                        
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الدين≽..】',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الدين≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الدين≽..】',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الدين≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الدين≽..】',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الدين≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الدين≽..】',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الدين≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'yas',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الذكاء الاصطناعي≽..】',
  										      title: '𝚂𝙰𝙽𝙵𝙾𝚁-𝙱𝙾𝚃',
  									    	  description: '【..≼قــســم الذكاء الاصطناعي≽..】',
  								    		  id: '.ذكاءاصطناعي'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'منصاتي🤺🔥',
                                      url: 'https://www.atom.bio/safrotbob-376',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(noo)$/i;
export default handler;

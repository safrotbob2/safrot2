//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*'
     ]; 
     }else if (/^كسم البوت|كسم بوت$/i.test(m.text)) { 
     responses = [ 
'*كسمين امك يخول متشتمش البوت يعرص🫵🏻*'
     ]; 
     }else if (/^يجوزي|جوزي|جوزيي$/i.test(m.text)) { 
     responses = [ 
'*قلب جوزك🦦🫶🏻*'
     ]; 
     }else if (/^قلبي|يقلبي|يقلبيي$/i.test(m.text)) { 
     responses = [ 
'*قلب قلبك🌚✨*'
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
'*مظلوم اككيد😩❤‍🔥*'
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'*هتشقطينى يبت 😂😁*'
   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااه اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   }else if (/^بموتفيك|بموت فيك|بموت فيكك|بموت فيككك$/i.test(m.text)) { 
     responses = [ 
'*بـدمـنـكككك💋*'
     ]; 
   } else if (/^عيب|عيبب|عيببب|عيبببب$/i.test(m.text)) { 
     responses = [ 
'*بـرحـتـي🌚✨*'
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^بتحبني|بتحبني؟|بتحبنيي$/i.test(m.text)) { 
     responses = [ 
       '*بـعـشقـككك💋✨*',  

     ];
     }else if (/^احا|احاا|احااا|احاااا$/i.test(m.text)) { 
     responses = [ 
       '*احتين علي احتك🦦✨*',  

     ];
     }else if (/^مارو$/i.test(m.text)) { 
     responses = [ 
       '*قـلـب مـارو💋✨*',  

     ]; 
     }else if (/^هات بوسه|هات بوسة|بوسه|بوسة$/i.test(m.text)) { 
     responses = [ 
       '*مححح💋*',  

     ];
     }else if (/^انت عسل|انت عسلل|انت عسللل$/ .test(m.text)) { 
     responses = [ 
       '*وانتي قمر🦦🫶🏻*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^.menu$/i.test(m.text)) { 
     responses = [ 
       '*غلط اكتب .اوامر*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;

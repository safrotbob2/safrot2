import fetch from 'node-fetch';

let subredditHandler = async (m, { conn, text }) => {
  if (!text) throw 'يرجى تقديم اسم subreddit';

  try {
    let res = await fetch(`https://api.popcat.xyz/subreddit/${encodeURIComponent(text)}`);

    if (!res.ok) {
      throw new Error(`فشل طلب API مع الحالة ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    let subredditInfo = 
    `*مــعـلـومـات فــرعـيــة:*\n
     • *اسم:* ${json.name}\n
     • *عنوان:* ${json.title}\n
     • *المستخدمين النشطين:* ${json.active_users}\n
     • *أعضاء:* ${json.members}\n
     • *وصف:* ${json.description}\n
     • *السماح بمقاطع الفيديو:* ${json.allow_videos ? 'نعم' : 'لا'}\n
     • *السماح بالصور:* ${json.allow_images ? 'نعم' : 'لا'}\n
     • *اعلى 18:* ${json.over_18 ? 'نعم' : 'لا'}\n
     • *URL عنوان:* ${json.url}`;

    // if icon is not null or undefined, send it along with the subreddit information as caption
    // otherwise, only send the subreddit information
    if (json.icon) {
      await conn.sendFile(m.chat, json.icon, 'icon.jpg', subredditInfo, m);
    } else {
      m.reply(subredditInfo);
    }

  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

subredditHandler.help = ['subreddit'];
subredditHandler.tags = ['tools'];
subredditHandler.command = /^(subreddit|فرعيه|reddit)$/i;

export default subredditHandler;

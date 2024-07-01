import fetch from 'node-fetch';

let elementHandler = async (m, { conn, text }) => {
  if (!text) throw '> يرجى تقديم رمز العنصر أو اسمه';

  try {
    let res = await fetch(`https://api.popcat.xyz/periodic-table?element=${text}`);

    if (!res.ok) {
      throw new Error(`فشل طلب API مع الحالة ${res.status}`);
    }

    let buffer = await res.arrayBuffer();
    let json = JSON.parse(Buffer.from(buffer).toString());

    console.log('JSON response:', json);

    let elementInfo = 
    `*مــعـلومـات الــعـنـصـر:*\n
     • *اسم:* ${json.name}\n
     • *رمز:* ${json.symbol}\n
     • *العدد الذري:* ${json.atomic_number}\n
     • *الكتلة الذرية:* ${json.atomic_mass}\n
     • *فترة:* ${json.period}\n
     • *مرحله:* ${json.phase}\n
     • *اكتشاف بواسطة:* ${json.discovered_by}\n
     • *ملخص:* ${json.summary}
     > 『𝙼𝚅𝚁𝙾-𝙱𝙾𝚃』by:https://tiny.one/2e77c2bp`;

    conn.sendFile(m.chat, json.image, 'element.jpg', elementInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

elementHandler.help = ['element'];
elementHandler.tags = ['tools'];
elementHandler.command = /^(element|عنصر|ele)$/i;

export default elementHandler;

const dir = [
'https://telegra.ph/file/83f0511f997902267ef69.jpg',
'https://telegra.ph/file/7f1a6d546397773d2ed34.jpg',
'https://telegra.ph/file/b3020dedc202f0d799ca9.jpg',
'https://telegra.ph/file/8d50f7ca43b4f14346b00.jpg',
'https://telegra.ph/file/0ea1b0d291943629a6863.jpg',
'https://telegra.ph/file/2529751be1c1d0613ee0f.jpg',
'https://telegra.ph/file/3837d20c2d61bae49739c.jpg',
'https://telegra.ph/file/c104e26f031b5e4d3bb6f.jpg',
'https://telegra.ph/file/f2b51623fc1b4187cc0e9.jpg',
'https://telegra.ph/file/8143bcf157cc27b13a8d4.jpg',
'https://telegra.ph/file/95c259d3da86f4a6b5d9e.jpg',
'https://telegra.ph/file/f0725e1cdcc4bf4264244.jpg',
'https://telegra.ph/file/ba97b9074aad1936d3d7d.jpg',
'https://telegra.ph/file/235cbb149890d0b44093c.jpg', 
'https://telegra.ph/file/db153f0dc1e33f6e376da.jpg',
'https://telegra.ph/file/bffa48c91452d49b4f41a.jpg',
'https://telegra.ph/file/ca4264833a7cdf856df13.jpg',
'https://telegra.ph/file/06812868d5f53dc597988.jpg',
'https://telegra.ph/file/bbecbb8884e9b333c999c.jpg',
'https://telegra.ph/file/a770fc9986d166de8af56.jpg',
'https://telegra.ph/file/132ccbef3ec593e8e09f1.jpg',
'https://telegra.ph/file/d48cc373d27865c29c302.jpg', 
'https://telegra.ph/file/71d7225cd48890fbac2ce.jpg',
'https://telegra.ph/file/a46a681bbd48eccd9cf9e.jpg',
'https://telegra.ph/file/bda9e11e40624549b12f3.jpg',
'https://telegra.ph/file/7aeaf74c9fff0aaadde16.jpg', 
'https://telegra.ph/file/76fdcc8101f5f9072d228.jpg', 
'https://telegra.ph/file/d5255cb74bb2fc58db642.jpg', 
'https://telegra.ph/file/148ae8806d66e9b477af2.jpg', 
'https://telegra.ph/file/0a90c3c32e6b4dc89f1a9.jpg',
'https://telegra.ph/file/0f005d5dbece72b2ded59.jpg', 
'https://telegra.ph/file/2550afd47d940ab40b394.jpg', 
'https://telegra.ph/file/fd4060575e40053ebed9e.jpg', 
'https://telegra.ph/file/8e21bf582399606aa1abd.jpg', 
'https://telegra.ph/file/7b43f64d540a9e6f92a59.jpg', 
'https://telegra.ph/file/b596f20600ca2b88996a4.jpg', 
'https://telegra.ph/file/f49db4840f17855f7891e.jpg', 
'https://telegra.ph/file/46c914c9606c99a2499ef.jpg', 
'https://telegra.ph/file/b6a096f83d664b796a34b.jpg', 
'https://telegra.ph/file/8d5e925f387909b7b29cb.jpg', 
'https://telegra.ph/file/26e81f143df27c7c6c775.jpg', 
'https://telegra.ph/file/e529fde2a69721655b891.jpg', 
'https://telegra.ph/file/107f3b38fdbb47a57bd7a.jpg', 
'https://telegra.ph/file/4b2eff28a84fd519d0e3d.jpg', 
'https://telegra.ph/file/dc97719a715c457b7b322.jpg', 
'https://telegra.ph/file/fb28133c1265969b71554.jpg', 
'https://telegra.ph/file/5d51ae59ae95274d11ff4.jpg', 
'https://telegra.ph/file/c5340c299f70bd83249c5.jpg', 
'https://telegra.ph/file/b30ca8d840dfc69582d49.jpg', 
'https://telegra.ph/file/8a04daf15472cda1facba.jpg', 
'https://telegra.ph/file/6647c7b06643c17f5489d.jpg', 
'https://telegra.ph/file/ceea5e73b3412a168e4c1.jpg', 
'https://telegra.ph/file/7f10499bd9bcf5de5492e.jpg', 
'https://telegra.ph/file/e585fc3ef1246e6e74a92.jpg', 
'https://telegra.ph/file/f3d661b43dfa102be8302.jpg', 
'https://telegra.ph/file/795a97de65ddb4c5118d2.jpg', 
'https://telegra.ph/file/0e88fda1c92a867453463.jpg', 
'https://telegra.ph/file/7af80de300ff61ed08cb1.jpg', 
'https://telegra.ph/file/93a403a72bc5063793fe1.jpg', 
'https://telegra.ph/file/f5db25ddcb9e765ac8450.jpg', 
'https://telegra.ph/file/bb625d6623c11f0331aa0.jpg', 
'https://telegra.ph/file/46f19bde42ec83f492ef6.jpg', 
'https://telegra.ph/file/c99ed489eba486d9cde76.jpg', 
'https://telegra.ph/file/5cae1d6274bd00d063b64.jpg', 
'https://telegra.ph/file/a1e61a86a3625cc404bcb.jpg', 
'https://telegra.ph/file/83a9a849895887478a49e.jpg', 
'https://telegra.ph/file/0ec943f35bc6e37d2d7d7.jpg', 
'https://telegra.ph/file/f340161dd63da6686ffe9.jpg', 
'https://telegra.ph/file/91be70c4ecdfc18bb3b17.png',
'https://telegra.ph/file/206d8f17bc4de0ffc3341.png', 
'https://telegra.ph/file/2b2a2f5494a75c10a7b07.png', 
'https://telegra.ph/file/751c2b9123d03050ba149.jpg', 
'https://telegra.ph/file/cdc3fae09e898d2e72869.png', 
'https://telegra.ph/file/b6fc658d9950d8e071f62.jpg', 
'https://telegra.ph/file/8fe6a91c50b386c142836.jpg', 
'https://telegra.ph/file/385d49847da240c29505c.jpg', 
'https://telegra.ph/file/23f240fd16fea6a099c17.jpg', 
'https://telegra.ph/file/19a6528feee1974aa625c.jpg', 
'https://telegra.ph/file/7fd5d6ff36f4ede56b079.jpg'، 

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
 conn.sendButton(m.chat, 'سفروت الفقدان🧸🥂', wm, neko, [['⧉【🆕┋اضغط لارسال صورة جديدة】', `/${command}`]], null, null, m)
  m.react('🧝🏻‍♀️');
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['girl', 'بنات'] 

export default handler

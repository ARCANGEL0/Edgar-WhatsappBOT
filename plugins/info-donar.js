let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
  let user = db.data.users[m.sender]
let str = `💖 ���𝐎𝐥𝐚! 𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐨 𝐞𝐬𝐭𝐚𝐫 𝐮𝐬𝐚𝐧𝐝𝐨 𝐨 𝐦𝐞𝐮 𝐛𝐨𝐭 𝐞 𝐞𝐬𝐩𝐞𝐫𝐨 𝐪𝐮𝐞 𝐚𝐭𝐞𝐧𝐝𝐚 𝐚𝐬 𝐬𝐮𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐚𝐭𝐢𝐯𝐚𝐬. 𝐌𝐞 𝐚𝐣𝐮𝐝𝐞 𝐩𝐫𝐞𝐬𝐭𝐚𝐧𝐝𝐨 𝐬𝐮𝐩𝐨𝐫𝐭𝐞 𝐟𝐚𝐳𝐞𝐧𝐝𝐨 𝐮𝐦𝐚 𝐝𝐨𝐚𝐜𝐚𝐨 𝐞 𝐜𝐨𝐦𝐩𝐚𝐫𝐭𝐢𝐥𝐡𝐚𝐧𝐝𝐨 𝐦𝐞𝐮 𝐭𝐫𝐚𝐛𝐚𝐥𝐡𝐨.
𝐌𝐞𝐫𝐜𝐢 🐈‍⬛
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙖𝙮𝙋𝙖𝙡 - 
*https://paypal.me/henryarcangelo*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendFile(m.chat, pp, 'gata.mp4', str, fkontak)
}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^dona|doar|apoiar|paypal|donating$/i
handler.exp = 0
export default handler

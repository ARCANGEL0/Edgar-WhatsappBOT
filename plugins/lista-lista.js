let handler = async (m, { conn, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let texto = `
╭━[ 🗂️ 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 ]━━━━━━━━⬣
┃
┃ ⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦
┃ ${usedPrefix}listaadv 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦
┃ ${usedPrefix}listabloqueados 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 🚷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗔𝗡𝗜𝗗𝗢𝗦
┃ ${usedPrefix}listabanidos
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 📵 𝗖𝗛𝗔𝗧 𝗕𝗔𝗡𝗜𝗗𝗢𝗦
┃ ${usedPrefix}listabanchat 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`

await conn.sendFile(m.chat, imagen3, 'gata.mp4', texto)

}
handler.command = /^listas|lista|list?$/i
export default handler

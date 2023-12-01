let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 ' + fin,
rows: [
{title: "📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦", rowId: `${usedPrefix}listablock`, description: `Usuarios bloqueados por ligar.`},
{title: "⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦", rowId: `${usedPrefix}listadv`, description: `Usuarios bloqueados por ofensa e comportamentos tóxicos.`},
{title: "📵 𝗖𝗛𝗔𝗧 𝗕𝗔𝗡𝗜𝗗𝗢𝗦", rowId: `${usedPrefix}chatsbaneados`, description: `Chats proibidos de usar o Por`},
{title: "🚷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗔𝗡𝗜𝗗𝗢𝗦", rowId: `${usedPrefix}listbanuser`, description: `usuarios proibidos de usar o Poe`}

const listMessage = {
  text: `𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎\n`,
  footer: wm,
  title: `${htki} 𝙇𝙄𝙎𝙏𝘼 𝙑𝘼𝙍𝙄𝘼𝘿𝘼𝙎 📃`,
  buttonText: `📑 𝙑𝙀𝙍 𝙇𝙄𝙎𝙏𝘼𝙎 📑`,
}
await conn.sendMessage(m.chat, "teste de caralho", {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler

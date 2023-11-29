let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `${usuario}𝙈𝙐𝘿𝙊𝙐 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊
𝘼:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario}𝙈𝙐𝘿𝙊𝙐 𝘼 𝙁𝙊𝙏𝙊 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} 𝘼 𝙉𝙊𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝘾𝘼𝙊 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 𝙀:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝗔𝗚𝗢𝗥𝗔 *${m.messageStubParameters[0] == 'on' ? '𝗔𝗣𝗘𝗡𝗔𝗦 𝗔𝗗𝗠𝗜𝗡𝗦' : '𝙏𝙊𝘿𝙊𝙎'}* 𝗣𝗢𝗗𝗘𝗠 𝗘𝗗𝗜𝗧𝗔𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗢𝗘𝗦 𝗗𝗢 𝗚𝗥𝗨𝗣𝗢`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `𝗢 𝗚𝗥𝗨𝗣𝗢 𝗘𝗦𝗧𝗔  *${m.messageStubParameters[0] == 'on' ? '𝗙𝗘𝗖𝗛𝗔𝗗𝗢 🔒' : '𝗔𝗕𝗘𝗥𝗧𝗢 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? '𝗔𝗣𝗘𝗡𝗔𝗦 𝗔𝗗𝗠𝗜𝗡 𝗣𝗢𝗗𝗘𝗠 𝗘𝗦𝗖𝗥𝗘𝗩𝗘𝗥' : '𝗔𝗚𝗢𝗥𝗔 𝗧𝗢𝗗𝗢𝗦 𝗣𝗢𝗗𝗘𝗠 𝗘𝗦𝗖𝗥𝗘𝗩𝗘𝗥'}`, {mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]}𝗔𝗚𝗢𝗥𝗔 𝗘 𝗔𝗗𝗠𝗜𝗡 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢\n\n😼🫵𝗔𝗖𝗔𝗢 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 𝗣𝗢𝗥: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝗗𝗘𝗜𝗫𝗔 𝗗𝗘 𝗦𝗘𝗥 𝗔𝗗𝗠𝗜𝗡 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢\n\n😼🫵𝗔𝗖𝗔𝗢 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗔 𝗣𝗢𝗥:${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
await this.sendMessage(m.chat, { text: `${usuario} 𝗠𝗨𝗗𝗢𝗨 𝗔 𝗗𝗨𝗥𝗔𝗖𝗔𝗢 𝗗𝗔𝗦 𝗠𝗘𝗡𝗦𝗔𝗚𝗘𝗡𝗦 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗥𝗜𝗔𝗦 𝘼 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗢𝗨 𝗔𝗦 𝗠𝗘𝗡𝗦𝗔𝗚𝗘𝗡𝗦 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗥𝗜𝗔𝗦.`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}

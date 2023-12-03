let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//conn.sendButton(m.chat, wm, lenguajeGB.smsAdveu1() + lenGB, null, [[lenguajeGB.smsEncender(), lenGB]], fkontak, m)

let who 
let img = 'https://i.imgur.com/DvHoMc3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, lenguajeGB.smsMalused3() + `*${usedPrefix + command} @${name} ${lenguajeGB['smsAdveu2']()}*`, fkontak, m)  	
let txt = text.replace('@' + who.split`@`[0], '').trim()

try {
user.warn -= 1
await m.reply(
    `
╭━━━━━━━━━⬣

UMA ADVERTÊNCIA REMOVIDA

*@${who.split`@`[0]}*
*${lenguajeGB['smsAdveu5']()}*
⚠️ *${user.warn}/4* 
${wm} || ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`,
    null,
    { mentions: [who] });
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ${lenguajeGB['smsAdveu4']()}\n\n🫵 *${text}*`, `*${lenguajeGB['smsAdveu5']()}*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[lenguajeGB.smsToxic4(), '.ok'],
[lenguajeGB.smsAdveu6(), lenguajeGB.lenguaje() == 'en' ? usedPrefix + 'inventory' : usedPrefix + 'inventario']], false, { mentions: [who] }) //[m.sender]*/
	
return !1
} catch (e) {
await m.reply(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, m)   
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(deladv|delaviso|deleteaviso)$/i
handler.group = true
handler.admin = true
handler.botAdmin = false
export default handler

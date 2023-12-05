let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 


//conn.sendButton(m.chat, wm, lenguajeGB.smsAdveu1() + lenGB, null, [[lenguajeGB.smsEncender(), lenGB]],  m)

let who 
let img = 'https://i.imgur.com/DvHoMc3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, lenguajeGB.smsMalused3() + `*${usedPrefix + command} @${name} ${lenguajeGB['smsAdveu2']()}*`,  m)  	
let txt = text.replace('@' + who.split`@`[0], '').trim()

try {
user.warn += 1
await m.reply(
    `
╭━━━━━━━━━⬣
*@${who.split`@`[0]}*
⚠️ *${user.warn}/4* 
${wm} || ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`,
    null,
    { mentions: [who] });
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ${lenguajeGB['smsAdveu4']()}\n\n🫵 *${text}*`, `*${lenguajeGB['smsAdveu5']()}*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[lenguajeGB.smsToxic4(), '.ok'],
[lenguajeGB.smsAdveu6(), lenguajeGB.lenguaje() == 'en' ? usedPrefix + 'inventory' : usedPrefix + 'inventario']], false, { mentions: [who] }) //[m.sender]*/
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`${lenguajeGB['smsAdveu7']()}\n*@${who.split`@`[0]}* ${lenguajeGB['smsAdveu8']()}`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block') 
}	
return !1
} catch (e) {
await m.reply(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, m)   
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|Advertencias|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = false
export default handler

let handler = async (m, { conn, text, usedPrefix, command, args}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {


if (!text) return conn.reply(m.chat, "no data", null, m)               
try {
if(text) {

return conn.reply(m.chat,"foi",null ,m)
} 
  
  
  
} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, lenguajeGB.smsPropban2(bot), null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, lenguajeGB.smsPropban3(ownerNumber), null, { mentions: [aa] })
return
}}
users = global.db.data.users
if (users[user].banned === true) conn.reply(m.chat, lenguajeGB.smsPropban4(number), null, { mentions: [user] }) 
users[user].banned = true
usr = m.sender.split('@')[0]     
await conn.reply(m.chat, "tedte", null, { mentions: [user] })   
//await conn.reply(user, lenguajeGB.smsPropban6(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = /^lembrete|recado$/i
handler.rowner = false
handler.admin = true
export default handler
let handler = async (m, { conn, text, usedPrefix, command, args}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {


if (!text) return conn.reply(m.chat, "no data", null, m)               

if(text) {

return conn.reply(m.chat,args[1:],null ,m)

} 
  
  
  } catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = /^lembrete|recado$/i
handler.rowner = false
handler.admin = true
export default handler
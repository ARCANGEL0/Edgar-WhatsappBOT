let handler = async (m, { conn, text, usedPrefix, command, args}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {

const horaatual = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm')
if (!text || !args[1]) return conn.reply(m.chat, "no data", null, m)               


if(args[0] && args[1]) {
  const lembrete = args.slice(1).join(' ');
  const horario = args[0]
  const timeoutset = horaAtual.diff(horario);
  
  setTimeout(async () => {
await conn.reply(m.chat, lembrete)
}), timeoutset)



} 
  
  
  } catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = /^lembrete|recado$/i
handler.rowner = false
handler.admin = true
export default handler
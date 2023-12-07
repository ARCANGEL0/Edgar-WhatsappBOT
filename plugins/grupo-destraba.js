let handler = async (m, { conn, text, usedPrefix, command, args}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {

const horaatual = moment().tz('America/Sao_Paulo').format('HH:mm')
if (!text || !args[1]) return conn.reply(m.chat, "no data", null, m)               


if(args[0] && args[1]) {
  const lembrete = args.slice(1).join(' ');
  const horario = args[0]
 
   const currentDate = new Date();

// Set the current date to the start and end times
const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), parseInt(horaatual.split(":")[0]), parseInt(horaatual.split(":")[1]), 0);
const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), parseInt(horario.split(":")[0]), parseInt(horario.split(":")[1]), 0);

// Calculate the difference in minutes
const timeoutset = endDate - startDate;


   
   
  console.log("hora atual    "+horaatual+"\ntipo:  "+typeof horaatual)
  console.log("hora definida    "+horario+"\ntipo   "+typeof horario)
  console.log(timeoutset)
  await conn.reply(m.chat, "bilhete salvo meu patrao, nois que voa corvo bruxao 🕯️")
  setTimeout(async () => {
   
await conn.reply(m.chat, lembrete)
}, timeoutset)



} 
  
  
  } catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = /^lembrete|recado$/i
handler.rowner = false
handler.admin = true
export default handler
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
  await conn.reply(m.chat, `━━━━━━━━━⬣⬣━━━━━━━━

🌒🕯️ 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦  𝐦𝐚𝐫𝐜𝐚𝐝𝐚  𝐩𝐚𝐫𝐚 *${horario}*

 ━━━━━━━━━⬣⬣━━━━━━━━`)
  setTimeout(async () => {
   
await conn.reply(m.chat, ` ━━━━━━━━━⬣⬣━━━━━━━━

🕯️🌕 𝐋𝐚𝐮𝐫𝐚 𝐚𝐠𝐞𝐧𝐝𝐨𝐮 𝐮𝐦𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐩𝐚𝐫𝐚 𝐞𝐜𝐨𝐚𝐫 𝐞𝐧𝐭𝐫𝐞 𝐚𝐬 𝐚𝐥𝐦𝐚𝐬 𝐩𝐞𝐫𝐝𝐢𝐝𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨, 𝐦𝐚𝐫𝐜𝐚𝐧𝐝𝐨 𝐨 𝐥𝐞𝐦𝐛𝐫𝐞𝐭𝐞 𝐩𝐚𝐫𝐚 *${horario}*

📜 𝐄𝐢𝐬 𝐨 𝐚𝐧𝐮𝐧𝐜𝐢𝐚𝐝𝐨:
『${lembrete}』


 ━━━━━━━━━⬣⬣━━━━━━━━
`)
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
let handler = async (m, { conn, text, usedPrefix, command, args}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {
let user = global.db.data.users[m.sender]
  
const horaatual = moment().tz('America/Sao_Paulo').format('HH:mm')
if (!text || !args[1]) return conn.reply(m.chat, `
╭━━━━━━━━━⬣
┃
┃ ✒️📜 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐚𝐥 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 
┃ 𝐝𝐞𝐬𝐞𝐣𝐚 𝐞𝐜𝐨𝐚𝐫 𝐩𝐞𝐥𝐨𝐬 𝐜𝐚𝐧𝐭𝐨𝐬 
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨𝐬 𝐣𝐮𝐧𝐭𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐦 𝐨 
┃ 𝐡𝐨𝐫á𝐫𝐢𝐨 𝐞𝐬𝐭𝐢𝐩𝐮𝐥𝐚𝐝𝐨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} 07:35 Convocação de todas as almas para encontro matinal*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, null, m)               


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

🕯️🌕  *@${m.sender.split("@")[0]}* 𝐚𝐠𝐞𝐧𝐝𝐨𝐮 𝐮𝐦𝐚 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐩𝐚𝐫𝐚 𝐞𝐜𝐨𝐚𝐫 𝐞𝐧𝐭𝐫𝐞 𝐚𝐬 𝐚𝐥𝐦𝐚𝐬 𝐩𝐞𝐫𝐝𝐢𝐝𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨, 𝐦𝐚𝐫𝐜𝐚𝐧𝐝𝐨 𝐨 𝐥𝐞𝐦𝐛𝐫𝐞𝐭𝐞 𝐩𝐚𝐫𝐚 *${horario}*

📜 𝐄𝐢𝐬 𝐨 𝐚𝐧𝐮𝐧𝐜𝐢𝐚𝐝𝐨:
『${lembrete}』


 ━━━━━━━━━⬣⬣━━━━━━━━
`,m,{ mentions: [m.sender] })
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
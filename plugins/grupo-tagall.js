let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  
  
  
let pesan = args.join` `
let oi = `ღ ${lenguajeGB['smsAddB5']()} ${pesan}`


if(m.quoted){
  
 
  let teks = `╭━〔 *${lenguajeGB['smstagaa']()}* 〕\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃ ${wm}\n`
teks += `╰━━━━━[ *𓃠 ${vs}* ]━━━━━⬣`
/*
m.quoted.reply(teks)
*/
await m.quoted.reply(teks, {mentions: hh})
conn.sendMessage(m.chat, {text: teks, mentions: participants.map(a => a.id) },m.quoted )  
console.log(conn.sendMessage(m.chat, {text: teks, mentions: participants.map(a => a.id,quoted:m.quoted) }, )  )

}

else {
let teks = `╭━〔 *${lenguajeGB['smstagaa']()}* 〕\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃ ${wm}\n`
teks += `╰━━━━━[ *𓃠 ${vs}* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  


}
}

handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i

handler.admin = true
handler.group = true
export default handler

let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  
  
  
let pesan = args.join` `
let oi = `🌒 ${lenguajeGB['smsAddB5']()}`


if(m.quoted){
  
 
  let teks = `╭━〔 *${lenguajeGB['smstagaa']()}* 〕\n\n${oi}: ${m.quoted.text}\n\n`
for (let mem of participants) {
teks += `┃⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃ ${wm}\n`
teks += `╰━━━━━[ *𓃠 ${vs}* ]━━━━━⬣`
/*
m.quoted.reply(teks)
*/
m.quoted.reply(teks, '',{mentions:participants.map(a => a.id)})


}

else {
let teks = `╭━〔 *${lenguajeGB['smstagaa']()}* 〕\n\n${oi}: ${pesan} \n\n`
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

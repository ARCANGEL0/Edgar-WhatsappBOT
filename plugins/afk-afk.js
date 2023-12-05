let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`${lenguajeGB['smsAfkQ1'](usedPrefix, command)}`)
  
if (text.length < 10) return m.reply(`${lenguajeGB['smsAfkQ2']()}`)
user.afk = + new Date
user.afkReason = text
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*⬣━━━「 AFK ⚰️」━━━⬣*
*🕯️💀𝐍𝐚𝐨 𝐜𝐡𝐚𝐦𝐞* *@${m.sender.split("@")[0]}*  *「 𝐈𝐫𝐚 𝐬𝐞 𝐚𝐮𝐬𝐞𝐧𝐭𝐚𝐫 𝐛𝐫𝐞𝐯𝐞𝐦𝐞𝐧𝐭𝐞 𝐩𝐚𝐫𝐚 𝐟𝐢𝐧𝐬 𝐩𝐚𝐫𝐭𝐢𝐜𝐮𝐥𝐚𝐫𝐞𝐬」*
  
  *𝐂𝐚𝐮𝐬𝐚:*${text ? '\n ' + text : ''}`, m, { mentions: [m.sender] })
}

handler.command = /^afk$/i
export default handler

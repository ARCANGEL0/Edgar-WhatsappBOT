let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*\n\n𝙏𝘼𝙂 𝙎𝙊𝙈𝙀𝙊𝙉𝙀 𝙏𝙊 𝙐𝙉𝘽𝘼𝙉\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}❖─┅──┅\nMARQUE UMA PESSOA OU RESPONDA UMA MENSAGEM PARA DESBANIR \n𝙀𝙓:\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}❖─┅──┅\nDas sombras do exílio, o usuário emerge, como um corvo outrora aprisionado, liberto para vagar pelos recantos digitais. O banimento, como um manto sombrio, foi dissipado, e agora, como um conto ressurgido, ele pode novamente interagir com o bot.\n─┅──┅❖ `, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unban|desbanir$/i
handler.group = true
handler.admin = true 
export default handler

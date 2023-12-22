let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

console.log(global.db.data.users[who])
conn.reply(m.chat, "---Log enviado 🕯️---")

};
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(userdata)$/i
export default handler

let handler = async (m, { conn,text,command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if(command=="userdata"){
console.log(global.db.data.users[who])
conn.reply(m.chat, "---Log enviado 🕯️---")
}
if(command=="chdata"){
console.log(global.db.data.chats[m.chat])
conn.reply(m.chat, "---Log enviado 🕯️---")
}
};
handler.help = ['gay']
handler.tags = ['maker']
handler.command = /^(userdata|chdat)$/i
handler.owner= true
export default handler

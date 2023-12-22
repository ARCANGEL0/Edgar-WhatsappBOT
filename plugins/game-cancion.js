let handler = async (m, { conn, command, text }) => {
	

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)	
conn.getName(who)
  console.log(global.db.data.users[${text ? text : mentionedJid
  }])
conn.reply(m.chat, "---Log enviado 🕯️---") })
}
handler.help = ['userdata *<nome>*']
handler.tags = ['fun']
handler.command = /^userdata/i
handler.admin = true
export default handler

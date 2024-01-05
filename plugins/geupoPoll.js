let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
	text = text.split(`|`)
	
	await m.reply("test")
	
	 await m.sendPoll(m.chat, "enquete", ["abc","dbfh"])
}

handler.help = ['poll <desc>|opts1|opts2|etc...']
handler.tags = ['group']
handler.command = /^((create)?poll(ing)?)$/i

handler.group = true

export default handler
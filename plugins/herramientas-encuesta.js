let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
	await conn.reply(m.chat, "espera caralho ")
	try{
	  conn.sendPoll(m.chat,"pica",["4cm,6cm,8cm,10cm"])
	}
	  await conn.reply(m.chat, "foi porra ")
	  
	}
	catch(e){
	  await conn.reply(m.chat, e)
	}
}
handler.help = ['poll <Guru|piro|xd>']
handler.tags = ['group'] 
handler.command = ['enquete'] 
handler.group = true

export default handler
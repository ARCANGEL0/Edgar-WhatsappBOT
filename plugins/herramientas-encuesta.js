let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
	
	try{
	  conn.reply("porra")
	}
	catch(e){
	  console.log(e)
	}
}
handler.help = ['poll <Guru|piro|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
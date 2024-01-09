
let handler = async (m, { conn, text, usedPrefix, command, isOwner,args }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗨𝗠𝗔 𝗜𝗠𝗔𝗚𝗘𝗠'    

let audio = args[0]
			
		await fetch(`https://api.lolhuman.xyz/api/speech-to-text?apikey=${lolkeysapi}&audio=${audio}`)
		.then(response=>{
		  await m.reply("ok")
			console.log(txt.json())
		})
		.catch(e=>console.log(e))
			

}
handler.command = /^text/i
export default handler


let handler = async (m, { conn, text, usedPrefix, command, isOwner,args }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗨𝗠𝗔 𝗜𝗠𝗔𝗚𝗘𝗠'    

audio = args[0]
			
			txt = await fetch(`https://api.lolhuman.xyz/api/speech-to-text?apikey=${apikey}&audio=${audio}`)
			
			console.log(txt.json())

}
handler.command = /^text/i
export default handler

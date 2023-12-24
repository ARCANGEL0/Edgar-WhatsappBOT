import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
	
  let [txt1, txt2] = m.text.split('|').map(item => item.trim());
  
    
    let js = await fetch(`https://api.popcat.xyz/pooh?text1=${txt1}&text2=${txt2}`)
    console.log(js)
    await conn.sendFile(m.chat, js.url, "error.jpg", "")
    
}

handler.help = ['agedetect']
handler.tags = ['maker']
handler.command = /^(mkpooh|pooh)$/i
handler.limit = true

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
	console.log("-----")
    let q = m.quoted ? m.quoted : m
    let avatar= await conn.profilePictureUrl(q, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    console.log(avatar)
    
    
    let mime = (q.msg || q).mimetype || ''
    let img = await q.download?.()
    let url = await uploadImage(img)
    
    let js = await fetch(`https://api.popcat.xyz/communism?image=${encodeURIComponent(url)}`)
    console.log(js)
    await conn.sendFile(m.chat, js.url, "error.jpg", "teste")
    
}

handler.help = ['agedetect']
handler.tags = ['maker']
handler.command = /^(agedetect|usia)$/i
handler.limit = true

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

let lls = await fetch(`https://aemt.me/ttp?text=${teks}`)
console.log(lls)
let stiker = await sticker(null, lls, global.packname, global.author)
if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, 
         
         
       }}, { quoted: m })
throw stiker.toString()
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttpg$/i 
export default handler

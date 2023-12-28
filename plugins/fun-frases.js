import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗔 𝗨𝗠𝗔 𝗜𝗠𝗔𝗚𝗘𝗠'    

let docname = text ? text : m.pushName || 'documento'
conn.sendFile(m.chat, `${global.artigosLista[text]}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.command = /^coredl/i
export default handler

import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {


let docname = text ? text : m.pushName || 'documento'
conn.sendFile(m.chat, `${global.artigosLista[text]}`, docname + '.pdf', '', m, false, { asDocument: true })
}
handler.command = /^coredl|artigo/i
export default handler

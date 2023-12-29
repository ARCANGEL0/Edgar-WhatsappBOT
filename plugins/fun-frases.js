import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {



console.log(global.artigosLista[0].urls[text])
let docname = text ? text : m.pushName || 'documento'
conn.sendFile(m.chat, `${global.artigosLista[0].urls[text]}`, m.pushName + '.pdf', 'error', m, false, { asDocument: true })
}
handler.command = /^coredl|artigo/i
export default handler

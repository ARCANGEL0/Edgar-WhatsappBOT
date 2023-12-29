import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {



console.log(global.artigosLista[m.chat].urls[text])
let docname = text ? text : m.pushName || 'documento'
conn.sendFile(m.chat, `${global.artigosLista[m.chat].urls[text]}`, `${global.artigosLista[m.chat].name[text]}` + '.pdf','', m, false, { asDocument: true })
}
handler.command = /^coredl|artigo/i
export default handler

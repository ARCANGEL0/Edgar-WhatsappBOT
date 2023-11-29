let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `*MARQUE O USUARIO, ESCREVA O NUMERO OU RESPONDA UMA MENSAGEM PARA DESBANEAR*`, m)
if(isNaN(number)) return conn.reply(m.chat, `*O NÚMERO QUE DIGITOU NÃO É VÁLIDO PARA DESBANEAR*`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
global.global.db.data.users[user].banned = false
conn.reply(m.chat, `*@${number} FOI DESBANEADO(A) DA BASE DE DADOS*`, null, { mentions: [user] })
}}

handler.tags = ['owner']
handler.command = ['unmute', 'desbanearusuario', 'desbanear'] 
handler.owner = true

export default handler

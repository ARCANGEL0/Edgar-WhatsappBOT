
let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `*MARQUE O USUARIO, ESCREVA O NUMERO OU RESPONDA UMA MENSAGEM PARA DESBANIR*`, m)
if(isNaN(number)) return conn.reply(m.chat, `*O NÚMERO QUE DIGITOU NÃO É VÁLIDO PARA DESBANIR*`, m)
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
  

global.db.data.users[user].silencedChat[m.chat].silenced = false
    
console.log(global.db.data.users[m.sender].silencedChat[m.chat] )


conn.reply(m.chat, `*❖─┅──┅\nDas sombras do exílio, o usuário @${number} emerge, como um corvo outrora aprisionado, liberto para vagar pelos recantos digitais. O banimento, como um manto sombrio, foi dissipado, e agora, como um conto ressurgido, ele pode novamente interagir com o bot.\n─┅──┅❖*`, null, { mentions: [user] })
}}


handler.tags = ['owner']
handler.command = [ 'desmutar', 'darvoz'] 
handler.owner = false
handler.admin = true

export default handler
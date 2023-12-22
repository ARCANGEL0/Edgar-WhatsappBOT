let handler = async (m, { conn, text, usedPrefix, command}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = lenguajeGB.smsPropban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, lenguajeGB.smsPropban2(bot), null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, lenguajeGB.smsPropban3(ownerNumber), null, { mentions: [aa] })
return
}}

if (!global.db.data.users[m.sender]) {
    global.db.data.users[m.sender] = {};
}

// Assuming global.db.data.users[m.sender].silencedChat is defined
if (!global.db.data.users[m.sender].silencedChat) {
    global.db.data.users[m.sender].silencedChat = {};
}

// Check if the specific chat exists
const chatIdToCheck = m.chat;
if (!global.db.data.users[m.sender].silencedChat[chatIdToCheck]) {
    // Create the array if it doesn't exist
    global.db.data.users[m.sender].silencedChat[chatIdToCheck] = {
        silenced: false ,
        chat: chatIdToCheck
    };
}

users = global.db.data.users
 let person = global.db.data.users[user]
if (person.silencedChat[m.chat].silenced=== true) conn.reply(m.chat, lenguajeGB.smsPropban4(number), null, { mentions: [user] }) 

person.silencedChat[m.chat] = {
        silenced: true,
        chat: m.chat
        
    };
console.log(person.silencedChat[m.chat].silenced)
user = m.sender.split('@')[0]     
await conn.reply(m.chat, lenguajeGB.smsPropban5(), null, { mentions: [user] })   
//await conn.reply(user, lenguajeGB.smsPropban6(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, lenguajeGB.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = /^mute|silenciar|silence$/i
handler.rowner = false
handler.admin = true
export default handler
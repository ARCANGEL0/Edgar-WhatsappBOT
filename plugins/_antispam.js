const userSpamData = {}
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, isPrems}) {
const chat = global.db.data.chats[m.chat]
if (!m.isGroup) return
if (chat.modoadmin) return  
if (isOwner || isROwner || isAdmin || !isBotAdmin || isPrems) return
  
let user = global.db.data.users[m.sender]
const sender = m.sender
const currentTime = new Date().getTime()
const timeWindow = 5000 // tiempo límite 
const messageLimit = 10 // cantidad de mensajes en dicho tiempo

let time, time2, time3, mensaje, motive
time = 30000 // 30 seg
time2 = 60000 // 1 min
time3 = 120000 // 2 min

if (!(sender in userSpamData)) {
userSpamData[sender] = {
lastMessageTime: currentTime,
messageCount: 1,
antiBan: 0, 
message: 0,
message2: 0,
message3: 0,
}
} else {
const userData = userSpamData[sender]
const timeDifference = currentTime - userData.lastMessageTime

if (timeDifference <= timeWindow) {
userData.messageCount += 1

  if (userData.messageCount >= messageLimit) {
const mention = `@${sender.split("@")[0]}`
const warningMessage = `*${mention} PROIBIDO FAZER SPAM!!*`

await conn.reply(m.chat, warningMessage, m, { mentions: [m.sender] })  

if (!global.db.data.users[m.sender]) {
    global.db.data.users[m.sender] = {};
}

// Assuming global.db.data.users[m.sender].silencedChat is defined
if (!global.db.data.users[m.sender].silencedChat) {
    global.db.data.users[user].silencedChat = {};
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
 let person = global.db.data.users[m.sender]


person.silencedChat[m.chat] = {
        silenced: true,
        chat: m.chat
        
    };
// reset 
//userData.messageCount = 1
                
  
  
}
} 
// dim



else {
if (timeDifference >= 2000) {
userData.messageCount = 1
}}
userData.lastMessageTime = currentTime
}}

export default handler


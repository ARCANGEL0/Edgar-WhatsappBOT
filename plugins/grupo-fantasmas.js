//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}`, m) 
m.reply(`⚠️𝗥𝗘𝗟𝗔𝗧𝗢𝗥𝗜𝗢 𝗗𝗘 𝗜𝗡𝗔𝗧𝗜𝗩𝗜𝗗𝗔𝗗𝗘 \n\n𝙂𝙍𝙐𝙋𝙊: ${await conn.getName(m.chat)}\n*𝙈𝙀𝙈𝘽𝙍𝙊𝙎 𝘿 𝙂𝙍𝙐𝙋𝙊:* ${sum}\n\n*[ 👻 𝙇𝙄𝙎𝙏𝘼𝙎 𝘿𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝙉𝙊𝙏𝘼: *`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
        if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝙊 𝙂𝙍𝙐𝙋𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼 𝘼𝙏𝙄𝙑𝙊 𝙎𝙀𝙈 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎
        .`, m) 
       await m.reply(`⚠️𝗥𝗘𝗠𝗢𝗖𝗔𝗢 𝗗𝗘 𝗜𝗡𝗔𝗧𝗜𝗩𝗜𝗗𝗔𝗗𝗘\n\n𝙂𝙍𝙐𝙋𝙊: ${await conn.getName(m.chat)}\n𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙍𝙏𝙀: ${sum}\n\n[ 👻 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 👻 ]\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*𝗢𝗯𝘀: 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗖𝗔𝗢 𝗡𝗔𝗢 𝗘 𝟭𝟬𝟬%*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
        chat.welcome = true
       }
break            
}}
handler.command = /^(fantasmas|kickfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/



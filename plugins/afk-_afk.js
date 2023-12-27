



let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
// Initialize user object if it doesn't exist


if (!user.afkInfo) {
  user.afkInfo = {};
}

if (!user.afkInfo[m.chat]) {
  user.afkInfo[m.chat] = {
    afkTime:-2,
    number: m.sender,
    afkReason: ''
  };
}

if(!global.db.data.chats[m.chat]) {
   global.db.data.chats[m.chat] ={}
}
if(!global.db.data.chats[m.chat].afks)
{
   global.db.data.chats[m.chat].afks =[]
}



console.log("afk event")

if (user.afkInfo[m.chat].afkTime > -1) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${lenguajeGB['smsAfkM1']()}
      ${user.afkInfo[m.chat].afkReason ? `\n${lenguajeGB['smsAfkM2']()}🕯️ ` +user.afkInfo[m.chat].afkReason : ''}

      ${lenguajeGB['smsAfkM3']()}\n *${(new Date - user.afkInfo[m.chat].afkTime).toTimeString ()}*`.trim(), m, { mentions: [m.sender] });


const numero = m.sender; 
delete user.afkInfo[m.chat]
// global.db.data.chats[m.chat].chatafk = global.db.data.chats[m.chat].chatafk.filter(element => element !== numero);
  global.db.data.chats[m.chat].afks = global.db.data.chats[m.chat].afks.filter(item => item !== m.sender);


}
if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    global.db.data.chats[m.chat].afks &&
  global.db.data.chats[m.chat].afks.includes(m.mentionedJid);
    global.db.data.users[m.mentionedJid] &&
    global.db.data.users[m.mentionedJid].afkInfo &&
    global.db.data.users[m.mentionedJid].afkInfo[m.chat]
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {

  console.log(m.mentionedJid)
 
 
 const mentionedUser = m.mentionedJid // Replace this with your actual mentioned user
const afksArray = global.db.data.chats[m.chat].afks;

const isUserAFK = afksArray.includes(mentionedUser);

console.log(isUserAFK);

  
 


 let reason = global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkReason ? global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkReason : ''

let time = global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkTime

  await m.reply(`
  ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason ? `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - time).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`);
  
}
else{
  return 0
}

/*
if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    m.quoted &&
  global.db.data.chats[m.chat].chatafk.includes(m.quoted.sender))
) {
  
  
  console.log(global.db.data.chats[m.chat].chatafk)
  console.log(global.db.data.chats[m.chat].chatafk.includes(m.mentionedJid.toString()))
 


 let reason = global.db.data.users[m.quoted.sender].afkInfo[m.chat].afkReason ? global.db.data.users[m.quoted.sender].afkInfo[m.chat].afkReason : ''

let time = global.db.data.users[m.quoted.sender].afkInfo[m.chat].afkTime

  await m.reply(`
  ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason ? `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - time).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`);
  
}

*/
/*
if (user.afkInfo[m.chat].afkTime > -1 && m.quoted  .sender == user.afkInfo[m.chat].number) {
  console.log(m.quoted)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}
╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason ? `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - user.afk).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);
}

*/
// return true


}
export default handler
/*
let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
if (user.afk > -1) {await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${lenguajeGB['smsAfkM1']()}
      ${user.afkReason ? `\n${lenguajeGB['smsAfkM2']()}🕯️ ` +user.afkReason : ''}

      ${lenguajeGB['smsAfkM3']()}\n *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] });

user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afk
if (!afkTime || afkTime < 0)
continue
let reason = user.afkReason || ''
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}
╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason ? `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - user.afk).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);

}
return true
}
export default handler

*/




let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
// Initialize user object if it doesn't exist



if (user.afkInfo[m.chat]) {
    const afkTime = user.afkInfo[m.chat].afkTime;
    const afkReason = user.afkInfo[m.chat].afkReason;
    const number = user.afkInfo[m.chat].number
    // Now you can use afkTime and afkReason as needed
} else if (!user.afkInfo[m.chat]) {
    // User is not AFK in this group
    // Set AFK information for this group only if text is not empty
    return !0
}
console.log("afk event")
console.log(user.afkInfo[m.chat])
if ( user.afkInfo[m.chat].afkTime > -1){
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${lenguajeGB['smsAfkM1']()}
      ${user.afkInfo[m.chat].afkReason ? `\n${lenguajeGB['smsAfkM2']()}🕯️ ` +user.afkInfo[m.chat].afkReason : ''}

      ${lenguajeGB['smsAfkM3']()}\n *${(new Date - user.afkInfo[m.chat].afkTime).toTimeString()}*`.trim(), m, { mentions: [m.sender] });

user.afkInfo[m.chat].afkTime = -1
user.afkInfo[m.chat].afkReason = ''
}
else {
  
/* for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afkInfo[m.chat].afkTime
if (!afkTime || afkTime < 0)
continue
let reason = user.afkInfo[m.chat].afkReason || '' */
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let reason = user.afkInfo[m.chat].afkReason || ''
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}
╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason ? `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - afkTime).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m)
}
}
return true
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
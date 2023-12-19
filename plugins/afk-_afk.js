let handler = m => m;

handler.before = async function (m, { text, args, usedPrefix, command, conn }) {
  let user = global.db.data.users[m.sender];

  // Check if it's a specific chat where the AFK status needs to be checked

try {
  if (user.afk > -1) {
    await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
    *@${m.sender.split("@")[0]}*
    ${lenguajeGB['smsAfkM1']()}
    ${user.afkReason ? `\n${lenguajeGB['smsAfkM2']()}🕯️ ` + user.afkReason : ''}

    ${lenguajeGB['smsAfkM3']()}\n *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] })
    user.afk = -1;
    user.afkReason = '';
  }

  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];

  for (let jid of jids) {
    let user = global.db.data.users[jid];

    if (!user) continue;

    let afkTime = user.afk;

    if (!afkTime || afkTime < 0) continue;

    let reason = user.afkReason || '';
    
    // Check if the AFK status is set for the specific chat
    if (user.afkChat && user.afkChat !== m.chat) {
      continue; // Skip processing if AFK status is set for another chat
    }

    await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}
    ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

    🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason ? `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

    ${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - user.afk).toTimeString()}*

    ╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);
  }

  return true;
}
}
catch(e){
  console.log(e)
}
export default handler;
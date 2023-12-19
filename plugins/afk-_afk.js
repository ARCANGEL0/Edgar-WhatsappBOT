let handler = m => m;

handler.before = async function (m, { text, args, usedPrefix, command, conn }) {
  try {
    let user = global.db.data.users[m.sender];

    // Check if the user is AFK and the current chat is in the AFK chat list
    if (user.afk > 0 && Array.isArray(user.afkChat) && user.afkChat.includes(m.chat)) {
      await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${lenguajeGB['smsAfkM1']()}
      ${user.afkReason ? `\n${lenguajeGB['smsAfkM2']()}🕯️ ` + user.afkReason : ''}

      ${lenguajeGB['smsAfkM3']()}\n *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] });
      
      user.afk = -1;
      user.afkReason = '';

      if (Array.isArray(user.afkChat)) {
        user.afkChat = user.afkChat.filter(chatId => chatId !== m.chat);
      }
    }

    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];

    for (let jid of jids) {
      let user = global.db.data.users[jid];

      if (!user) continue;

      let afkTime = user.afk;

      if (!afkTime || afkTime < 0) continue;

      let reason = user.afkReason || '';

      // Check if the user is AFK for the specific chat
      if (user.afkChat && !user.afkChat.includes(m.chat)) {
        continue; // Skip processing if AFK status is set for another chat
      }

      if (global.db.data.users[m.sender].afk > -1 && global.db.data.users[m.sender].afkChat.includes(m.chat)) {
        await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}
        ╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

        🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason ? `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

        ${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - user.afk).toTimeString()}*

        ╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);
      }
    }

    return true;
  } catch (e) {
    console.log(e);
  }
}

export default handler;
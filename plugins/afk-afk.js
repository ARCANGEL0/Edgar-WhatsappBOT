let handler = async (m, { text, args, usedPrefix, command, conn }) => {
  let user = global.db.data.users[m.sender];
  let id = m.chat;
  if (!Array.isArray(user.afkChat)) {
  user.afkChat = []; // Initialize as an array if not already
}

console.log(user.afkChat)
  // Check if it's a specific chat where AFK status needs to be set


  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return m.reply(`${lenguajeGB['smsAfkQ1'](usedPrefix, command)}`);

  if (text.length < 10) return m.reply(`${lenguajeGB['smsAfkQ2']()}`);
  
  // Check if the AFK status is set for the specific chat
  if (user.afk > -1 && Array.isArray(user.afkChat) && !user.afkChat.includes(m.chat)) {
  return; // Exit function if AFK status is set for another chat
}

  user.afk = +new Date;
  user.afkReason = text;
  
user.afkChat.push(m.chat);

  await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*⬣━━━「 AFK ⚰️」━━━⬣*
    *🕯️💀𝕹𝖆𝖔 𝖕𝖊𝖗𝖙𝖚𝖗𝖇𝖊𝐞* *@${m.sender.split("@")[0]}* 
    *「 𝕴𝖗𝖆 𝖉𝖎𝖛𝖆𝖌𝖆𝖗 𝖕𝖊𝖑𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖉𝖔 𝖉𝖊𝖘𝖈𝖔𝖓𝖍𝖊𝖈𝖎𝖉𝖔, 𝖘𝖊 𝖆𝖚𝖘𝖊𝖓𝖙𝖆𝖓𝖉𝖔 𝖉𝖊𝖘𝖙𝖊 𝖛𝖆𝖑𝖊 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.」*
  
  *𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊:*${text ? '\n ' + text : ''}`, m, { mentions: [m.sender] });
};

handler.command = /^afk$/i;
export default handler;
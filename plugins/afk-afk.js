





let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1 ) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`${lenguajeGB['smsAfkQ1'](usedPrefix, command)}`)
  console.log(user)
if (text.length < 10) return m.reply(`${lenguajeGB['smsAfkQ2']()}`)
// Initialize user object if it doesn't exist
if (!user.afkInfo) {
    user.afkInfo = {};
}

// Check if user is AFK in this group
if (user.afkInfo[m.chat]) {
    const afkTime = user.afkInfo[m.chat].afkTime;
    const afkReason = user.afkInfo[m.chat].afkReason;
    
    // Now you can use afkTime and afkReason as needed
} else {
    // User is not AFK in this group
    // Set AFK information for this group
    user.afkInfo[m.chat] = {
        afkTime: +new Date(),
        afkReason: text
    };
}
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*⬣━━━「 AFK ⚰️」━━━⬣*
    *🕯️💀𝕹𝖆𝖔 𝖕𝖊𝖗𝖙𝖚𝖗𝖇𝖊𝐞* *@${m.sender.split("@")[0]}* 
    *「 𝕴𝖗𝖆 𝖉𝖎𝖛𝖆𝖌𝖆𝖗 𝖕𝖊𝖑𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖉𝖔 𝖉𝖊𝖘𝖈𝖔𝖓𝖍𝖊𝖈𝖎𝖉𝖔, 𝖘𝖊 𝖆𝖚𝖘𝖊𝖓𝖙𝖆𝖓𝖉𝖔 𝖉𝖊𝖘𝖙𝖊 𝖛𝖆𝖑𝖊 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.」*
  
  *𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊:*${text ? '\n ' + text : ''}`, m, { mentions: [m.sender] });

}

handler.command = /^afk$/i
export default handler

 /*
let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`${lenguajeGB['smsAfkQ1'](usedPrefix, command)}`)
  console.log(user)
if (text.length < 10) return m.reply(`${lenguajeGB['smsAfkQ2']()}`)
user.afk = + new Date
user.afkReason = text
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*⬣━━━「 AFK ⚰️」━━━⬣*
    *🕯️💀𝕹𝖆𝖔 𝖕𝖊𝖗𝖙𝖚𝖗𝖇𝖊𝐞* *@${m.sender.split("@")[0]}* 
    *「 𝕴𝖗𝖆 𝖉𝖎𝖛𝖆𝖌𝖆𝖗 𝖕𝖊𝖑𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖉𝖔 𝖉𝖊𝖘𝖈𝖔𝖓𝖍𝖊𝖈𝖎𝖉𝖔, 𝖘𝖊 𝖆𝖚𝖘𝖊𝖓𝖙𝖆𝖓𝖉𝖔 𝖉𝖊𝖘𝖙𝖊 𝖛𝖆𝖑𝖊 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.」*
  
  *𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊:*${text ? '\n ' + text : ''}`, m, { mentions: [m.sender] });

}

handler.command = /^afk$/i
export default handler*/
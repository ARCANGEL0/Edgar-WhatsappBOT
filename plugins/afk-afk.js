global.afks = global.afks ? global.afks : {}
let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`${lenguajeGB['smsAfkQ1'](usedPrefix, command)}`)
  
if (text.length < 3) return m.reply(`${lenguajeGB['smsAfkQ2']()}`)
// user.afk = + new Date

global.afks[m.chat] ={
  "usuario": m.sender,
  "razao" : text,
  "tempo": new Date()
}
console.log(global.afks[m.chat])
// user.afkReason = text
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}*⬣━━━「 AFK ⚰️」━━━⬣*
    *🕯️💀𝕹𝖆𝖔 𝖕𝖊𝖗𝖙𝖚𝖗𝖇𝖊𝐞* *@${m.sender.split("@")[0]}* 
    *「 𝕴𝖗𝖆 𝖉𝖎𝖛𝖆𝖌𝖆𝖗 𝖕𝖊𝖑𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖉𝖔 𝖉𝖊𝖘𝖈𝖔𝖓𝖍𝖊𝖈𝖎𝖉𝖔, 𝖘𝖊 𝖆𝖚𝖘𝖊𝖓𝖙𝖆𝖓𝖉𝖔 𝖉𝖊𝖘𝖙𝖊 𝖛𝖆𝖑𝖊 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.」*
  
  *𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊:*${text ? '\n ' + text : ''}`, m, { mentions: [m.sender] });

}

handler.command = /^afk$/i
export default handler
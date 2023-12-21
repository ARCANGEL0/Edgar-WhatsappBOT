global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
console.log("test")
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚/i.test(m.quoted.text)) return
if (!global.xppergunta) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}𝙔𝘼 𝙎𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙄𝙊 𝙀𝙎𝙏𝘼 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼\n𝙏𝙃𝙄𝙎 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙃𝘼𝙎 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘽𝙀𝙀𝙉 𝘼𝙉𝙎𝙒𝙀𝙍𝙀𝘿`, m)
console.log(" on logic js   "+global.quiz[m.chat].id)
if (m.quoted.id == global.quiz[m.chat].id) {
let result = global.quiz[id].ca 

if (m.text == result) {
 
await conn.reply(m.chat, `correto`, fkontak, m) 
global.db.data.users[m.sender].limit += global.quiz[m.chat].xp

global.xppergunta=false
delete global.quiz[m.chat]
} 
else {
 await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼!!\n𝙏𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 *${global.math[id][2]}* 𝙊𝙋𝙊𝙍𝙏𝙐𝙉𝙄𝘿𝘼𝘿𝙀𝙎 😱\n\n𝙒𝙍𝙊𝙉𝙂 𝘼𝙉𝙎𝙒𝙀𝙍!!\n𝙄𝙏 𝙁𝙄𝙏𝙎 𝙔𝙊𝙐 *${global.math[id][2]}* 𝙏𝙐𝙍𝙉𝙎 🤯`, m)
}
  
  
}
  
  
  
}



handler.customPrefix = /^[a-zA-Z]+$/
handler.command = new RegExp

export default handler
/*
global.math[id] = [
1, math, 4, math, 4,

  ]*/
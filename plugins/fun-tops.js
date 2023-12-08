import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn, text }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   if (!text) throw `${lenguajeGB['smsAvisoMG']()}
╭━━━━━━━━━⬣
┃
┃ 🪶📜 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐞 𝐩𝐫𝐨𝐩ó𝐬𝐢𝐭𝐨 
┃ 𝐝𝐞𝐬𝐭𝐢𝐧𝐚𝐝𝐨 𝐚 𝐬𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫 𝐨𝐬 
┃ 𝐩𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐢𝐬 𝐝𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐚 
┃ 𝐪𝐮𝐚𝐥 𝐥𝐡𝐞 𝐯ê𝐦 𝐚 𝐦𝐞𝐧𝐭𝐞
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command}top10 mais nilistas do gp*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`   
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
if(command == "top10") {
let top = 
`╭━━⬣[🕯️💀 *_TOP 10 ${text}_* 🐈‍⬛]⬣━━━━━━

*_1. 🕯️ ${user(a)}_*
*_2. 🕯️ ${user(b)}_* 
*_3. 🕯️ ${user(c)}_* 
*_4. 🕯️ ${user(d)}_*
*_5. 🕯️ ${user(e)}_* 
*_6. 🕯️ ${user(f)}_* 
*_7. 🕯️ ${user(g)}_* 
*_8. 🕯️ ${user(h)}_* 
*_9. 🕯️ ${user(i)}_* 
*_10. 🕯️ ${user(j)}_*

╰━━━━━[ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━⬣* `
m.reply(top, null, { mentions: conn.parseMention(top) })}

if(command == "top5") {
let top = 
`╭━━⬣[🕯️💀 *_TOP 5 ${text}_* 🐈‍⬛]⬣━━━━━━

*_1. 🕯️ ${user(a)}_*
*_2. 🕯️ ${user(b)}_* 
*_3. 🕯️ ${user(c)}_* 
*_4. 🕯️ ${user(d)}_*
*_5. 🕯️ ${user(e)}_* 

╰━━━━━[ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━⬣* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
}

handler.help = handler.command = ['top10', 'top5' ]
handler.tags = ['games']
handler.group = true
handler.admin = true
export default handler  

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

let ps = groupMetadata.participants.map(v => v.id);

if (ps.length < 5) {
    throw "༒︎ É 𝚙𝚛𝚎𝚌𝚒𝚜𝚘 𝚖𝚊𝚒𝚜 𝚍𝚎 𝟻 𝚊𝚕𝚖𝚊𝚜 𝚗𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘 𝚙𝚊𝚛𝚊 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚎 𝚛𝚎𝚌𝚞𝚛𝚜𝚘. . .");
}

// Shuffle the array
for (let i = ps.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ps[i], ps[j]] = [ps[j], ps[i]];
}

// Select the first 5 (or 10 if there are more) unique members
let a = ps[0];
let b = ps[1];
let c = ps[2];
let d = ps[3];
let e = ps[4];
let f = ps[5] || null;
let g = ps[6] || null;
let h = ps[7] || null;
let i = ps[8] || null;
let j = ps[9] || null;

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

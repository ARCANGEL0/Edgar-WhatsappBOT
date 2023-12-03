import util from 'util'
import path from 'path' 


function handler(m, { groupMetadata, command, usedPrefix, conn, text }) {
   let user = a => '@' + a.split('@')[0] //'@' + a.split('@')[0]
   
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
`╭━━━━━━━━━⬣[*🕯️💀 TOP 10 ${text} 🐈‍⬛*]⬣━━━━━━

*_1.- 🕯️ ${user(a)}_*
*_2.- 🕯️ ${user(b)}_* 
*_3.- 🕯️ ${user(c)}_* 
*_4.- 🕯️ ${user(d)}_*
*_5.- 🕯️ ${user(e)}_* 
*_6.- 🕯️ ${user(f)}_* 
*_7.- 🕯️ ${user(g)}_* 
*_8.- 🕯️ ${user(h)}_* 
*_9.- 🕯️ ${user(i)}_* 
*_10.- 🕯️ ${user(j)}_

╰━━━━━[ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━⬣* `
m.reply(top, null, { mentions: conn.parseMention(top) })}

if(command == "top5") {
let top = 
`╭━━━━━━━━━⬣[*🕯️💀 TOP 5 ${text} 🐈‍⬛*]⬣━━━━━━

*_1.- 🕯️ ${user(a)}_*
*_2.- 🕯️ ${user(b)}_* 
*_3.- 🕯️ ${user(c)}_* 
*_4.- 🕯️ ${user(d)}_*
*_5.- 🕯️ ${user(e)}_* 

╰━━━━━[ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━⬣* `
m.reply(top, null, { mentions: conn.parseMention(top) })}
}

handler.help = handler.command = ['top10', 'top5' ]
handler.tags = ['games']
handler.group = true
export default handler  

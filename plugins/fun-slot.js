/* CREDITOS: https://github.com/FG98F */

let handler = async (m, { isAdmin, isOwner, args, usedPrefix, command, conn }) => {
  
  
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
let fa = `
─┅──┅❖ ❖─┅──┅
𝘗𝘰𝘣𝘳𝘦 𝘪𝘯𝘵𝘦𝘳𝘭𝘰𝘤𝘶𝘵𝘰𝘳, 𝘲𝘶𝘦 𝘤𝘦𝘥𝘦 𝘢𝘰𝘴 𝘷𝘪𝘤𝘪𝘰𝘴 𝘥𝘢 𝘢𝘭𝘮𝘢. 
𝘜𝘴𝘦 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 *.slot || .apostar*  𝘱𝘢𝘳𝘢 𝘧𝘢𝘻𝘦𝘳 𝘢𝘱𝘰𝘴𝘵𝘢𝘴 𝘤𝘰𝘮 𝘙𝘢𝘷𝘦𝘯𝘊𝘰𝘪𝘯𝘴 
*.slotxp || .apostarxp* 𝘱𝘢𝘳𝘢 𝘢𝘱𝘰𝘴𝘵𝘢𝘳 𝘤𝘰𝘮 𝘱𝘰𝘯𝘵𝘰𝘴 𝘥𝘦 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘪𝘢

𝙀𝙓𝙀𝙈𝙋𝙇𝙊:
*${usedPrefix + command} 50*
─┅──┅❖ ❖─┅──┅`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])
if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: isAdmin,
        legendary: false
  }
}

let users = global.db.data.chats[m.chat].users[m.sender]
//let time = global.db.data.users[m.sender].lastwork + 30000
//if (new Date - users.lastwork < 30000) throw `*𝙑𝙐𝙀𝙇𝙑𝘼 𝙀𝙉 ${msToTime(time - new Date())} 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝘼𝙍 𝘼𝙋𝙊𝙎𝙏𝘼𝙉𝘿𝙊* 🎰\n\n*𝘾𝙊𝙈𝙀 𝘽𝘼𝘾𝙆 𝙄𝙉 ${msToTime(time - new Date())} 𝙏𝙊 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝙀 𝘽𝙀𝙏𝙏𝙄𝙉𝙂* 💰`

if (apuesta < 10) throw `${lenguajeGB['smsAvisoAG']()}
━━━━━━━━━⬣⋆🃜❌🃖⬣━━━━━━━━ 
⏦ 𝐀𝐩𝐨𝐬𝐭𝐚 𝐦𝐢𝐧𝐢𝐦𝐚 𝐝𝐞 𝟏𝟎
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`    


if (command == 'slotxp' || 'apostarxp') {
  if (users.exp < apuesta) {
throw `${lenguajeGB['smsAvisoFG']()}
━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ 𝙴𝚖 𝚖𝚎𝚞 𝚛𝚎𝚒𝚗𝚘 𝚊𝚕𝚐𝚘𝚛í𝚝𝚖𝚒𝚌𝚘, 𝚟𝚘𝚜𝚜𝚘 𝑥𝑝 𝚜𝚎 𝚖𝚘𝚜𝚝𝚛𝚊 𝚎𝚜𝚌𝚊𝚜𝚜𝚊.
𝙴𝚗𝚟𝚘𝚕𝚟𝚎-𝚝𝚎 𝚎𝚖 𝚖𝚊𝚒𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚘𝚎𝚜 𝚌𝚘𝚖 𝚘 𝚋𝚘𝚝 𝚎 𝚊 𝚌𝚘𝚗𝚐𝚛𝚎𝚐𝚊𝚌𝚊𝚘 𝚙𝚊𝚛𝚊 𝚊𝚗𝚐𝚊𝚛𝚒𝚊𝚛 𝚘𝚜 𝚛𝚎𝚌𝚞𝚛𝚜𝚘𝚜 𝚍𝚎𝚜𝚎𝚓𝚊𝚍𝚘𝚜,
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━ `
}

let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ Aguarde, por ${msToTime(time - new Date())}, para ressurgir na dança das apostas digitais. 🎲
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`
users.lastslot = new Date * 1
    
let emojis = ["🍒", "💎, "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*🃜 𝐺𝑎𝑛ℎ𝑎𝑠𝑡𝑒 ${apuesta + apuesta} 𝑥𝑝.  𝑇𝑢𝑎 𝑓𝑜𝑟𝑡𝑢𝑛𝑎 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑒𝑛𝑡𝑟𝑒𝑙𝑎𝑐𝑎𝑑𝑎 𝑎𝑠 𝑎𝑠𝑎𝑠 𝑛𝑒𝑔𝑟𝑎𝑠 𝑑𝑎 𝑛𝑜𝑖𝑡𝑒*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `*🂱 𝑄𝑢𝑎𝑠𝑒 𝑎𝑡𝑖𝑛𝑔𝑖𝑠𝑡𝑒 𝑎 𝑔𝑙𝑜𝑟𝑖𝑎, 𝑚𝑎𝑠 𝑎 𝑣𝑖𝑡𝑜𝑟𝑖𝑎 𝑠𝑒 𝑑𝑖𝑠𝑠𝑖𝑝𝑎, 𝑐𝑜𝑚𝑜 𝑝𝑜𝑒𝑖𝑟𝑎 𝑑𝑒 𝑠𝑜𝑛ℎ𝑜𝑠 𝑛𝑎𝑠 𝑏𝑟𝑢𝑚𝑎𝑠 𝑑𝑎 𝑡𝑒𝑛𝑡𝑎𝑡𝑖𝑣𝑎. 𝐵𝑜𝑛𝑢𝑠 𝑑𝑒 30 𝑥𝑝*`
users.exp += 30
} else {
end = `🃖 𝑃𝑒𝑟𝑑𝑒𝑠𝑡𝑒 ${apuesta} 𝑥𝑝`
users.exp -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `🎰 | *𝙎𝙇𝙊𝙏* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *𝙈𝘼𝘾𝙃𝙄𝙉𝙀*   | 🎰

${end}`
await conn.reply(m.chat, s, m)}
/*await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/



if (command == 'slot' || 'apostar') {
  
  if (users.money < apuesta)  { 
throw `${lenguajeGB['smsAvisoFG']()}
━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ 𝙴𝚖 𝚖𝚎𝚞 𝚛𝚎𝚒𝚗𝚘 𝚊𝚕𝚐𝚘𝚛í𝚝𝚖𝚒𝚌𝚘, 𝚟𝚘𝚜𝚜𝚊 𝚌𝚘𝚕𝚎𝚌𝚊𝚘 𝚍𝚎 𝚁𝚊𝚟𝚎𝚗𝙲𝚘𝚒𝚗𝚜 𝚜𝚎 𝚖𝚘𝚜𝚝𝚛𝚊 𝚎𝚜𝚌𝚊𝚜𝚜𝚊.
𝙴𝚗𝚟𝚘𝚕𝚟𝚎-𝚝𝚎 𝚎𝚖 𝚖𝚊𝚒𝚜 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚘𝚎𝚜 𝚌𝚘𝚖 𝚘 𝚋𝚘𝚝 𝚎 𝚊 𝚌𝚘𝚗𝚐𝚛𝚎𝚐𝚊𝚌𝚊𝚘 𝚙𝚊𝚛𝚊 𝚊𝚗𝚐𝚊𝚛𝚒𝚊𝚛 𝚘𝚜 𝚛𝚎𝚌𝚞𝚛𝚜𝚘𝚜 𝚍𝚎𝚜𝚎𝚓𝚊𝚍𝚘𝚜,
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`    
}
  
let time = global.db.data.users[m.sender].lastslot + 60000
if (new Date - users.lastslot < 60000) throw `━━━━━━━━━⬣⋆🃜🃚🃖⬣━━━━━━━━ 
⏦ Aguarde, por ${msToTime(time - new Date())}, para ressurgir na dança das apostas digitais. 🎲
━━━━━━━━━⬣🃁🂭🂺⬣━━━━━━━━`
users.lastslot = new Date * 1
    
let emojis = ["🎲", "🍒", "💎"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `
*🃜 𝐺𝑎𝑛ℎ𝑎𝑠𝑡𝑒 ${apuesta + apuesta} 𝑅𝑎𝑣𝑒𝑛𝐶𝑜𝑖𝑛𝑠.  𝑇𝑢𝑎 𝑓𝑜𝑟𝑡𝑢𝑛𝑎 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑒𝑛𝑡𝑟𝑒𝑙𝑎𝑐𝑎𝑑𝑎 𝑎𝑠 𝑎𝑠𝑎𝑠 𝑛𝑒𝑔𝑟𝑎𝑠 𝑑𝑎 𝑛𝑜𝑖𝑡𝑒*`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `* 🂱 𝑄𝑢𝑎𝑠𝑒 𝑎𝑡𝑖𝑛𝑔𝑖𝑠𝑡𝑒 𝑎 𝑔𝑙𝑜𝑟𝑖𝑎, 𝑚𝑎𝑠 𝑎 𝑣𝑖𝑡𝑜𝑟𝑖𝑎 𝑠𝑒 𝑑𝑖𝑠𝑠𝑖𝑝𝑎, 𝑐𝑜𝑚𝑜 𝑝𝑜𝑒𝑖𝑟𝑎 𝑑𝑒 𝑠𝑜𝑛ℎ𝑜𝑠 𝑛𝑎𝑠 𝑏𝑟𝑢𝑚𝑎𝑠 𝑑𝑎 𝑡𝑒𝑛𝑡𝑎𝑡𝑖𝑣𝑎. 𝐵𝑜𝑛𝑢𝑠 𝑑𝑒 15 𝑅𝑎𝑣𝑒𝑛𝑐𝑜𝑖𝑛𝑠*`
users.money += 15
} else {
end = `🃖 𝑃𝑒𝑟𝑑𝑒𝑠𝑡𝑒 ${apuesta} 𝑟𝑎𝑣𝑒𝑛𝑐𝑜𝑖𝑛𝑠`
users.money -= apuesta
}
//users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
🎰 | *𝙎𝙇𝙊𝙏* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *𝙈𝘼𝘾𝙃𝙄𝙉𝙀*   | 🎰\n\n${end}`
await conn.reply(m.chat, ss, m)}
/*await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot2 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

    


/*await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot3 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`]
], m,)}*/
        
    
        
    
/*await conn.sendHydrated(m.chat, `*Elija en que apostará ${apuesta}*\n\n*Choose what you will*`, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['⚡ 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🐈 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}*/

//global.db.data.users[m.sender].lastwork = new Date * 1
       
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slotxp', 'apostaxp']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}

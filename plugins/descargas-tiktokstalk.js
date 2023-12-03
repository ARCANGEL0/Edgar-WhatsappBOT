import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}

╭━━━━━━━━━⬣
┃
┃ 🥀💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐧𝐨𝐦𝐞 𝐝𝐚 𝐚𝐥𝐦𝐚 𝐪𝐮𝐞 
┃ 𝐝𝐞𝐬𝐞𝐣𝐚𝐬 𝐛𝐮𝐬𝐜𝐚𝐫 𝐬𝐚𝐛𝐞𝐫 𝐧𝐨 𝐯𝐚𝐥𝐞
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐝𝐞𝐧𝐨𝐦𝐢𝐧𝐚𝐦 
┃ 𝐓𝐢𝐤𝐓𝐨𝐤, 𝐞 𝐥𝐡𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐚𝐫𝐞𝐢 𝐨 𝐪𝐮𝐞 𝐬𝐞𝐢
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} usuario*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `
🔎🐈‍⬛ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼) 
${json.result.username}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🪦𝙉𝙊𝙈𝙀 
${json.result.nickname}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙍𝙀𝙎 
${json.result.followers}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🕯️ 𝙎𝙀𝙂𝙐𝙄𝙉𝘿𝙊
${json.result.followings}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🖤 𝙇𝙄𝙆𝙀𝙎
${json.result.likes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📜 𝙋𝙊𝙎𝙏𝙎
${json.result.video}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🪦 𝘽𝙄𝙊
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
throw `${lenguajeGB['smsAvisoFG']()}
╭━━━━━━━━━⬣
┃
┃ ❌🔎 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐛𝐮𝐬𝐜𝐚
┃𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞.
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 
┃ 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚
┃ 𝐞𝐱𝐢𝐭𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
}
/*let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)  */

}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|verttk)$/i
handler.exp = 48
export default handler

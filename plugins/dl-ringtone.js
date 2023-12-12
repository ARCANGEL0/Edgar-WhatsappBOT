/*import fetch from 'node-fetch'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙄teste`

handler.command  = /^((notifcelular|toque)ringtone)$/i
handler.money = 0
handler.level = 0
handler.register = false
export default handler
*/


import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
  
  async function ringtone(title) {
return new Promise((resolve, reject) => {
axios.get('https://meloboom.com/es/search/'+title).then((get) => {
let $ = cheerio.load(get.data)
let hasil = []
$('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
})
resolve(hasil)})})}
if (!text) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}╭━━━━━━━━━⬣
┃
┃ 🥀 𝐌𝐞 𝐝𝐢𝐠𝐚 𝐪𝐮𝐚𝐢𝐬 𝐭𝐞𝐦𝐚𝐭𝐢𝐜𝐚𝐬 
┃ 𝐛𝐮𝐬𝐜𝐚𝐬 𝐧𝐨 𝐭𝐨𝐪𝐮𝐞 𝐩𝐚𝐫𝐚 𝐬𝐞𝐮 
┃ 𝐚𝐩𝐚𝐫𝐞𝐥𝐡𝐨,𝐞 𝐛𝐮𝐬𝐜𝐚𝐫𝐞𝐢 𝐧𝐨𝐬 
┃ 𝐜𝐨𝐧𝐟𝐢𝐧𝐬 𝐝𝐨𝐬 𝐯𝐚𝐥𝐞𝐬 𝐦𝐚𝐢𝐬 
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨𝐬 𝐚 𝐩𝐫𝐨𝐜𝐮𝐫𝐚 𝐝𝐞 𝐭𝐞𝐮 𝐝𝐞𝐬𝐞𝐣𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} Toque piano gotico*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, m)
try {
  
  let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })}
catch (e) {
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
handler.help = ['toque'].map(v => v + ' <audio>')
handler.tags = ['internet']
handler.command = /^(toque|notifcelular)$/i
handler.exp = 0
export default handler

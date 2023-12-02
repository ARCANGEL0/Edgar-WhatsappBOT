import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} ❖─┅──┅𝘿𝙚𝙨𝙫𝙚𝙣𝙙𝙖-𝙢𝙚 𝙤𝙨 𝙧𝙚𝙘𝙚𝙨𝙨𝙤𝙨 𝙙𝙤 𝙖𝙗𝙨𝙪𝙧𝙙𝙤 𝙙𝙚 𝙩𝙚 𝙙𝙚𝙨𝙚𝙟𝙤 𝙚 𝙞𝙢𝙖𝙜𝙞𝙣𝙖𝙘𝙖𝙤, 𝙤𝙣𝙙𝙚 𝙨𝙤𝙢𝙗𝙧𝙖𝙨 𝙚𝙩𝙚𝙧𝙚𝙖𝙨 𝙙𝙖𝙣𝙘𝙖𝙢 𝙣𝙖 𝙛𝙧𝙖𝙜𝙞𝙡 𝙖𝙡𝙘𝙤𝙫𝙖 𝙙𝙚 𝙨𝙚𝙪𝙨 𝙫𝙞𝙨 𝙥𝙚𝙣𝙨𝙖𝙢𝙚𝙣𝙩𝙤𝙨─┅──┅❖  Exemplo:\n*${usedPrefix + command} Cat*` 


try {
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
console.log(spty)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let text = `╭━━━━[  🎶 *${spty.data.name}* 🎶 ]━━━━⬣
┃
┃ 🥀 *𝐀𝐑𝐓𝐈𝐒𝐓𝐀*:
┃ ${spty.data.artists}
┃
┃ 🪦 𝐔𝐑𝐋:
┃ ${linkDL}
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞.. 𝐪𝐮𝐞 𝐧𝐨 𝐬𝐢𝐥𝐞𝐧𝐜𝐢𝐨 𝐝𝐚 
┃ 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚, 𝐞𝐧𝐯𝐢𝐚𝐫𝐞𝐢 𝐨 𝐪𝐮𝐚𝐧𝐭𝐨
┃ 𝐚𝐧𝐭𝐞𝐬 𝐬𝐮𝐚 𝐦𝐞𝐥𝐨𝐝𝐢𝐚 𝐚𝐭𝐫𝐚𝐯𝐞𝐬
┃𝐝𝐞𝐬𝐬𝐞 𝐢𝐧𝐟𝐨𝐫𝐭𝐮𝐧𝐢𝐨 𝐝𝐨 𝐦𝐮𝐧𝐝𝐨 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 
┃ 
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣

`
let spotifyi = `TITULO:*
_}_

 *ARTISTA:*
» 

 *URL*:
» _${}_

🎶 *Enviando música...*
${wm}`
await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', text, fkontak, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)


const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: '𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨 𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚 𝐞𝐱𝐢𝐭𝐨' }})
return { data: res, audio: await spotify.downloadTrack(url) }}



/*conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)*/
}
handler.help = ['spotify <keyword>']
handler.command = /^(spotify|spotdl|music)$/i
handler.exp = 0
handler.money = 0
export default handler

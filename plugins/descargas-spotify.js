import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
import fs from 'fs'

let handler = async (m, { conn, command, usedPrefix ,text}) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)

const credentials = { clientId: 'GataDios', clientSecret: 'GataDios' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: '𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨 𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚 𝐞𝐱𝐢𝐭𝐨' }})
return { data: res, audio: await spotify.downloadTrack(url) }}


let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
 let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)

const getRandom = (ext) => {
  
return `${Math.floor(Math.random() * 10000)}${ext}`
  
}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)

let estado = `╭━━━━[ 🎶 *${spty.data.name}* 🎶 ]━━━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 🥀 *𝐀𝐑𝐓𝐈𝐒𝐓𝐀*:
┃ ➥ ${spty.data.artists}
┃
┃ 🪦 𝐔𝐑𝐋:
┃ ➥ ${linkDL}
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞.. 𝐪𝐮𝐞 𝐧𝐨 𝐬𝐢𝐥𝐞𝐧𝐜𝐢𝐨 𝐝𝐚 
┃ 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚, 𝐞𝐧𝐯𝐢𝐚𝐫𝐞𝐢 𝐨 𝐪𝐮𝐚𝐧𝐭𝐨
┃ 𝐚𝐧𝐭𝐞𝐬 𝐬𝐮𝐚 𝐦𝐞𝐥𝐨𝐝𝐢𝐚 𝐚𝐭𝐫𝐚𝐯𝐞𝐬
┃𝐝𝐞𝐬𝐬𝐞 𝐢𝐧𝐟𝐨𝐫𝐭𝐮𝐧𝐢𝐨 𝐝𝐨 𝐦𝐮𝐧𝐝𝐨 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 
┃ 
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`


await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', estado, fkontak, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    



}
handler.help = ['spotify']
handler.tags = ['internet']
handler.command = /^spotify|spotdl|music$/i
export default handler



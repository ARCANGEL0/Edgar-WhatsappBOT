import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `${lenguajeGB['smsAvisoMG']()}*╭━━━━━━━━━⬣
┃
┃ ✒️📜 𝐀𝐠𝐮𝐚𝐫𝐝𝐨 𝐚 𝐭𝐮𝐚 𝐟𝐢𝐠𝐮𝐫𝐚 𝐜𝐨𝐦𝐨 
┃ 𝐮𝐦 𝐜𝐨𝐫𝐯𝐨 𝐬𝐨𝐥𝐢𝐭á𝐫𝐢𝐨 𝐚𝐧𝐬𝐞𝐢𝐚 
┃ 𝐩𝐞𝐥𝐨 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐨 𝐝𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬, 
┃ 𝐚𝐬𝐬𝐢𝐦 𝐞𝐧𝐭ã𝐨 𝐚 𝐭𝐨𝐫𝐧𝐚𝐫𝐞𝐢 𝐮𝐦𝐚 
┃ 𝐢𝐦𝐚𝐠𝐞𝐦 𝐚 𝐬𝐞𝐮 𝐚𝐠𝐫𝐚𝐝𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['tojpg', 'jpg']
export default handler

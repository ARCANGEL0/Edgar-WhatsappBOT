import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}╭━━━━━━━━━⬣
┃
┃ 📜 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐮𝐦 𝐯í𝐝𝐞𝐨 𝐨𝐮 
┃ 𝐚𝐮𝐝𝐢𝐨 𝐩𝐚𝐫𝐚 𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐚𝐫 𝐞𝐦 
┃ 𝐦𝐞𝐧𝐬𝐚𝐠𝐞𝐦 𝐝𝐞 𝐯𝐨𝐳
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
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
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
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
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
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
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
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
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^tovn|vn|ptt$/i
export default handler

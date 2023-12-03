import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `╭━━━━━━━━━⬣
┃
┃ 🕯️🪦𝐃𝐢𝐠𝐢𝐭𝐞-𝐦𝐞 𝐨 𝐥𝐢𝐧𝐤 𝐝𝐨 𝐭𝐢𝐤𝐭𝐨𝐤
┃ 𝐪𝐮𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐡𝐚 𝐚𝐬 𝐢𝐦𝐚𝐠𝐞𝐧𝐬 𝐪𝐮𝐞 
┃ 𝐝𝐞𝐬𝐞𝐣𝐚
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`❖─┅──┅\n𝐔𝐑𝐋 𝐢𝐧𝐯𝐚𝐥𝐢𝐝𝐨, 𝐍ã𝐨 𝐬𝐞𝐣𝐚 𝐭𝐨𝐥𝐨 𝐞 𝐝𝐢𝐠𝐚-𝐦𝐞 𝐮𝐦 𝐞𝐧𝐝𝐞𝐫𝐞𝐜𝐨 𝐜𝐨𝐫𝐫𝐞𝐭𝐨. 𝐓𝐞𝐧𝐭𝐞 𝐜𝐨𝐦 𝐡𝐭𝐭𝐩𝐬:// 𝐨𝐮 𝐡𝐭𝐭𝐩://\n─┅──┅❖ `)
if (!text.includes('tiktok.com')) return m.reply(`*⚠️ URL INVALIDA.*`)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `✅ *Foi enviado 1 de ${anu.length} imagens.* ✅\n_O resto será visível no chat privado do bot_ 🐈‍⬛` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
} catch (e) {
console.log(e)
throw `*⚠️ ERROR, TENTE NOVAMENTE.*`
}}

handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((tt|tiktok)imagen)$/i

handler.premium = true
handler.limit = true

export default handler

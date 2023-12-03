import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const defaultLang = 'es'
let handler = async (m, { conn, args, usedPrefix, command }) => {

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text

let res
try { res = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) throw `${lenguajeGB['smsAvisoMG']()}╭━━━━━━━━━⬣
┃
┃ 🥀🪦 𝐌𝐞 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐞 𝐮𝐦 𝐬𝐞𝐠𝐫𝐞𝐝𝐨
┃ 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐞 𝐥𝐡𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐚𝐫𝐞𝐢
┃ 𝐚 𝐯𝐨𝐳 𝐝𝐨 𝐥𝐚𝐦𝐞𝐧𝐭𝐨 𝐧𝐚 𝐟𝐨𝐫𝐦𝐚 𝐝𝐞
┃ 𝐮𝐦 𝐚𝐮𝐝𝐢𝐨 𝐦𝐚𝐥𝐝𝐢𝐭𝐨
┃
┃ 𝙀𝙓𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} ptbr Tudo
┃ que amei, amei sozinho
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣
*`
await conn.sendPresenceUpdate('recording', m.chat)
res = await tts(text, defaultLang)
} finally {
if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
}}
handler.help = ['tts <lang> <teks>']
handler.tags = ['tools']
handler.command = /^g?tts|totts$/i
export default handler

function tts(text, lang = 'pt-br') {
console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(readFileSync(filePath))
unlinkSync(filePath)
})
} catch (e) { reject(e) }
})}

import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}❖─┅──┅𝗡𝘂𝗺 𝗿𝗲𝗶𝗻𝗼 𝗱𝗲 𝘀𝗼𝗺𝗯𝗿𝗮𝘀, 𝗼𝗻𝗱𝗲 𝗼𝘀 𝗰𝗼𝗿𝘃𝗼𝘀 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝗺 𝘀𝗲𝗴𝗿𝗲𝗱𝗼𝘀 𝗽𝗿𝗼𝗶𝗯𝗶𝗱𝗼𝘀, 𝗮𝗴𝘂𝗮𝗿𝗱𝗼 𝗻𝗮 𝗽𝗲𝗻𝘂𝗺𝗯𝗿𝗮. ─┅──┅❖ \n𝗥𝗲𝘃𝗲𝗹𝗲-𝗺𝗲 𝗼 𝗟𝗶𝗻𝗸 𝗱𝗼 𝘀𝗲𝘂 𝗱𝗲𝘀𝗲𝗷𝗼 𝗻𝗼 𝗲𝗹𝗼 𝗱𝗶𝗴𝗶𝘁𝗮𝗹 𝗾𝘂𝗲 𝘁𝗿𝗮𝗿𝗲𝗶 𝗮 𝘀𝘂𝗮 𝗯𝘂𝘀𝗰𝗮 𝗲𝗻𝘁𝗮𝗼\n𝙀𝙓:\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)

let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0];
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `${lenguajeGB['smsAvisoFG']()} ❖─┅──┅𝗤𝘂𝗲 𝗶𝗻𝗳𝗼𝗿𝘁𝘂𝗻𝗶𝗼, 𝗺𝗮𝘀 𝗿𝗲𝗰𝗲𝗶𝗼 𝗾𝘂𝗲 𝗻ã𝗼 𝘀𝗲 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮 𝗯𝘂𝘀𝗰𝗮 𝗮𝗹𝗴𝘂𝗺𝗮 𝗮𝗼 𝗻𝘂𝗺𝗲𝗿𝗼 𝗾𝘂𝗲 𝗺𝗲 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝘀.─┅──┅❖ 𝗗𝗲𝘀𝘃𝗲𝗻𝗱𝗮, 𝘀𝗼𝗺𝗯𝗿𝗮, 𝘂𝗺 𝗻𝘂𝗺𝗲𝗿𝗼 𝗱𝗲𝗻𝘁𝗿𝗲 𝗮 𝗺𝗶𝗿𝗶𝗮𝗱𝗲 𝘀𝗼𝗺𝗯𝗿𝗶𝗮, 𝗱𝗲 𝘂𝗺 𝗮
  ${matchingItem.urls.length}*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐́𝙎𝘾𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙈 𝘾𝙊𝙈𝘼𝙉𝘿𝙊  ${usedPrefix}playlist <texto>*`;
}} else {
throw `${lenguajeGB['smsAvisoMG']()} 𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘼 𝘽𝙐́𝙎𝘾𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙈 𝘾𝙊𝙈𝘼𝙉𝘿𝙊  ${usedPrefix}playlist <texto>*`;
}}}  
  
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}❖─┅──┅𝙏𝙚𝙪 𝙖𝙪𝙙𝙞𝙤 𝙧𝙚𝙨𝙨𝙤𝙖 𝙘𝙤𝙢𝙤 𝙪𝙢 𝙡𝙪𝙜𝙪𝙗𝙧𝙚 𝙨𝙪𝙨𝙨𝙪𝙧𝙧𝙤, 𝙖 𝙚𝙨𝙥𝙚𝙧𝙖 𝙙𝙚 𝙨𝙪𝙖 𝙘𝙝𝙚𝙜𝙖𝙙𝙖. ─┅──┅❖
𝘼𝙜𝙪𝙖𝙧𝙙𝙚 𝙗𝙧𝙚𝙫𝙚𝙢𝙚𝙣𝙩𝙚 𝙦𝙪𝙚 𝙤 𝙡𝙖𝙢𝙚𝙣𝙩𝙤 𝙙𝙚 𝙨𝙚𝙪 𝙖𝙪𝙙𝙞𝙤 𝙧𝙚𝙘𝙖𝙞𝙧𝙖 𝙨𝙤𝙗𝙧𝙚 𝙤 𝙘𝙝𝙖𝙩. . . 🐈‍⬛⌛
`, fkontak, m)
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch {   
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}𝗢 𝗱𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗼 𝗲 𝘂𝗺 𝗳𝗮𝗿𝗱𝗼, 𝗽𝗲𝘀𝗮𝗱𝗼 𝗲𝗺 𝗱𝗲𝗺𝗮𝘀𝗶𝗮𝗱𝗼. ❌ 𝗖𝗹𝗮𝗺𝗼 𝗽𝗼𝗿 𝘂𝗺𝗮 𝘀𝘂𝗯𝘀𝘁𝗶𝘁𝘂𝗶𝗰𝗮𝗼 𝗺𝗮𝗶𝘀 𝗹𝗲𝘃𝗲. ✍️✒️\n
𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿, 𝘁𝗲𝗻𝘁𝗲 𝗼𝘂𝘁𝗿𝗼 𝘃𝗶𝗱𝗲𝗼, 𝗺𝗲𝘂 𝗰𝗮𝗿𝗼🐈‍⬛` ,m)}
}}}
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler

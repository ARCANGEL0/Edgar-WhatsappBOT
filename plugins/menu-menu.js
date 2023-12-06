import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'br'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender1111.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', mi thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")
const lugarFecha = moment().tz('America/Sao_Paulo')  // Adjust the timezone as needed
const formatoFecha = {
  weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

}
lugarFecha.locale('pt', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [de] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())



let menubuscas = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ BUSCAS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍📜➺ _${usedPrefix}iavoz *texto*_
┃🔍📜➺ _${usedPrefix}gpt | alangpt *texto*_
┃🔍📜➺ _${usedPrefix}image *texto*_
┃🔍📜➺ _${usedPrefix}google *texto*_
┃🔍📜➺ _${usedPrefix}letra | lyrics *texto*_
┃🔍📜➺ _${usedPrefix}ytsearch | yts *texto*_
┃🔍📜➺ _${usedPrefix}wiki | wikipedia *texto*_
┃🔍📜➺ _${usedPrefix}play | spotify *texto*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

 
let menujogos = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ JOGOS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🐈‍⬛➺ _${usedPrefix}top5 *texto*_
┃🐈‍⬛➺ _${usedPrefix}personalidade *@usuario*_
┃🐈‍⬛➺ _${usedPrefix}quiz_
┃🐈‍⬛➺ _${usedPrefix}poemas_
┃🐈‍⬛➺ _${usedPrefix}culturagotica_
┃🐈‍⬛➺ _${usedPrefix}biografia_ 
┃🐈‍⬛➺ _${usedPrefix}curiosidades_ 
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menuia = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ IA ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🕷️➺ _${usedPrefix}iavoz | chatgptvoz *texto*_
┃🕷️➺ _${usedPrefix}gpt | alangpt  *texto*_
┃🕷️➺ _${usedPrefix}dalle *texto*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()


let menubaixar = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ DOWNLOADS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🕯️➺ _${usedPrefix}image *texto*_
┃🕯️➺ _${usedPrefix}pinterest  *texto*_
┃🕯️➺ _${usedPrefix}wallpaper|wp *texto*_
┃🕯️➺ _${usedPrefix}play *musica*_ 
┃🕯️➺ _${usedPrefix}ytmp3 | yta *link*_
┃🕯️➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🕯️➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃🕯️➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃🕯️➺ _${usedPrefix}facebook | fb *link*_
┃🕯️➺ _${usedPrefix}instagram | ig *link video ou imagem*_
┃🕯️➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃🕯️➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃🕯️➺ _${usedPrefix}tiktok *link*_
┃🕯️➺ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃🕯️➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃🕯️➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menucvs = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ CONVERSORES ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🥀️➺ _${usedPrefix}toimg | img | jpg *figurinha*_
┃🥀️➺ _${usedPrefix}toanime *foto*_
┃🥀️➺ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃🥀️➺ _${usedPrefix}fg *imagem pra figurinha*_
┃🥀️➺ _${usedPrefix}topdf *imagem*_
┃🥀️➺ _${usedPrefix}tovn | vn *video ou audio*_
┃🥀️➺ _${usedPrefix}tovideo *audio*_
┃🥀️➺ _${usedPrefix}tourl *video, imagem*_
┃🥀️➺ _${usedPrefix}tts *idioma* *texto*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()
let menutools = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ FERRAMENTAS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✒️️ _${usedPrefix}criador_
┃✒️️ _${usedPrefix}boost_
┃✒️️ _${usedPrefix}status_
┃✒️️ _${usedPrefix}ping_ 
┃✒️️ _${usedPrefix}speedtest_
┃✒️️ _${usedPrefix}afk *motivo*_
┃✒️️ _${usedPrefix}acortar *url*_
┃✒️️ _${usedPrefix}calc *operacao mth*_
┃✒️️ _${usedPrefix}qrcode *texto*_
┃✒️️ _${usedPrefix}styletext *texto*_
┃✒️️ _${usedPrefix}traduzir | trad *texto*_
┃✒️️ _${usedPrefix}morse codificar *texto*_
┃✒️️ _${usedPrefix}morse decodificar *morse*_
┃✒️️ _${usedPrefix}poll *Motivo*_
┃✒️️ _${usedPrefix}horario_
┃✒️️ _${usedPrefix}clima *pais cidade*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()


let menugp = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━〔 GRUPO 〕━⬣*
┃ * configurar Grupo!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪦➺ _${usedPrefix}config
┃🪦➺ _${usedPrefix}infogrupo_
┃🪦➺ _${usedPrefix}listbanchat_
┃🪦➺ _${usedPrefix}listadv_
┃🪦➺ _${usedPrefix}listbloqueados_
┃🪦➺ _${usedPrefix}listbanidos_
┃🪦➺ _${usedPrefix}settings'
┃🪦➺ _${usedPrefix}vergrupo_
*╰━━━━━━━━━━━━⬣*
*╭━[ CONFIGURAÇÃO - GRUPOS ]━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✒️📜➺ _${usedPrefix}add *numero*_
┃✒️📜➺ _${usedPrefix}ban | mute *@tag*_
┃✒️📜➺ _${usedPrefix}grupo *abrir : fechar*_
┃✒️📜➺ _${usedPrefix}daradmin | promote *@tag*_
┃✒️📜➺ _${usedPrefix}quitar | demote *@tag*_
┃✒️📜➺ _${usedPrefix}banchat_
┃✒️📜➺ _${usedPrefix}unbanchat_
┃✒️📜➺ _${usedPrefix}unmute | unban *@tag*_
┃✒️📜➺ _${usedPrefix}admins *texto*_
┃✒️📜➺ _${usedPrefix}invocar | tagall *texto*_
┃✒️📜➺ _${usedPrefix}hidetag *texto*_
┃✒️📜➺ _${usedPrefix}infogrupo | infogroup_
┃✒️📜➺ _${usedPrefix}gctime abrir | fechar *tempo*_
┃✒️📜➺ _${usedPrefix}advertencia | adv *@tag*_
┃✒️📜➺ _${usedPrefix}lembrete *horario* *mensagem*_
┃✒️📜➺ _${usedPrefix}deladvertencia | deladv *@tag*_
┃✒️📜➺ _${usedPrefix}startvoto *texto*_
┃✒️📜➺ _${usedPrefix}sivotar | upvote_
┃✒️📜➺ _${usedPrefix}novotar | devote_
┃✒️📜➺ _${usedPrefix}vervotos | cekvoto_
┃✒️📜➺ _${usedPrefix}delvoto | deletevoto_
┃✒️📜➺ _${usedPrefix}link*_
┃✒️📜➺ _${usedPrefix}setwelcome  *texto*_
┃✒️📜➺ _${usedPrefix}despedida *texto*_
┃✒️📜➺ _${usedPrefix}on_
┃✒️📜➺ _${usedPrefix}off_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menubot = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ BOT ]━━⬣*
┃┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}criador_
┃⚙️ _${usedPrefix}infobot_
┃⚙️ _${usedPrefix}doar | paypal_
┃⚙️ _${usedPrefix}boost_
┃⚙️ _${usedPrefix}status_
┃⚙️ _${usedPrefix}ping_
┃⚙️ _${usedPrefix}on *:* off *welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos*_
┃⚙️ _${usedPrefix}on *:* off *restrict*_
┃⚙️ _${usedPrefix}on *:* off | *anticall*_
┃⚙️ _${usedPrefix}on *:* off | *public*_
┃⚙️ _${usedPrefix}on *:* off *autovisto*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos*_
┃⚙️ _${usedPrefix}on *:* off *antiver*_
┃⚙️ _${usedPrefix}on *:* off *antidelete*_
┃⚙️ _${usedPrefix}on *:* off  *antifake*_
┃⚙️ _${usedPrefix}on *:* off  *antilink*_
┃⚙️ _${usedPrefix}on *:* off  *antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter*_
┃⚙️ _${usedPrefix}on *:* off *bot*_
┃⚙️ _${usedPrefix}on *:* off *gconly*_
┃⚙️ _${usedPrefix}on *:* off *pconly*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menumd = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ MIDIA ]━━⬣*
┃ * Personalização de logos
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🥀 _${usedPrefix}logos *efeito texto*_
┃🪦🕯️ _${usedPrefix}menulogos2_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Realiza modificações de audio*
┃
┃🦇 _${usedPrefix}bass_
┃🦇 _${usedPrefix}blown_
┃🦇 _${usedPrefix}deep_
┃🦇 _${usedPrefix}earrape_
┃🦇 _${usedPrefix}fast_
┃🦇 _${usedPrefix}fat_
┃🦇 _${usedPrefix}nightcore_
┃🦇 _${usedPrefix}reverse_
┃🦇 _${usedPrefix}robot_
┃🦇 _${usedPrefix}slow_
┃🦇 _${usedPrefix}smooth_
┃🦇 _${usedPrefix}tupai_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menuvoto = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ VOTAÇÃO ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ _${usedPrefix}startvote *texto*_
┃📧➺ _${usedPrefix}upvote_
┃📧➺ _${usedPrefix}devote_
┃📧➺ _${usedPrefix}vervotos_
┃📧➺ _${usedPrefix}delvoto | deletevoto_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()



let menuall = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
*╭━━[ BUSCAS ]━━⬣*
┃ *
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍📜➺ _${usedPrefix}iavoz *texto*_
┃🔍📜➺ _${usedPrefix}gpt | alangpt *texto*_
┃🔍📜➺ _${usedPrefix}image *texto*_
┃🔍📜➺ _${usedPrefix}google *texto*_
┃🔍📜➺ _${usedPrefix}letra | lyrics *texto*_
┃🔍📜➺ _${usedPrefix}ytsearch | yts *texto*_
┃🔍📜➺ _${usedPrefix}wiki | wikipedia *texto*_
┃🔍📜➺ _${usedPrefix}play | spotify *texto*_
*╰━━━━━━━━━━━━⬣*
*╭━〔 JOGOS 〕━⬣*
┃🐈‍⬛➺ _${usedPrefix}top5 *texto*_
┃🐈‍⬛➺ _${usedPrefix}personalidade *@usuario*_
┃🐈‍⬛➺ _${usedPrefix}quiz_
┃🐈‍⬛➺ _${usedPrefix}poemas_
┃🐈‍⬛➺ _${usedPrefix}culturagotica_
┃🐈‍⬛➺ _${usedPrefix}biografia_ 
┃🐈‍⬛➺ _${usedPrefix}curiosidades_ 
*╰━━━━━━━━━━━━⬣*
*╭━〔 IA 〕━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🕷️➺ _${usedPrefix}iavoz | chatgptvoz *texto*_
┃🕷️➺ _${usedPrefix}gpt | alangpt  *texto*_
┃🕷️➺ _${usedPrefix}dalle *texto*_
*╰━━━━━━━━━━━━⬣*
*╭━[ DOWNLOADS ]━⬣*
┃🕯️➺ _${usedPrefix}image *texto*_
┃🕯️➺ _${usedPrefix}pinterest  *texto*_
┃🕯️➺ _${usedPrefix}wallpaper|wp *texto*_
┃🕯️➺ _${usedPrefix}play *musica*_ 
┃🕯️➺ _${usedPrefix}ytmp3 | yta *link*_
┃🕯️➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🕯️➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃🕯️➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃🕯️➺ _${usedPrefix}facebook | fb *link*_
┃🕯️➺ _${usedPrefix}instagram | ig *link video ou imagem*_
┃🕯️➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃🕯️➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃🕯️➺ _${usedPrefix}tiktok *link*_
┃🕯️➺ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃🕯️➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃🕯️➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
*╰━━━━━━━━━━━━⬣*
*╭━[ CONVERSORES ]━⬣*
┃🥀️➺ _${usedPrefix}toimg | img | jpg *figurinha*_
┃🥀️➺ _${usedPrefix}toanime *foto*_
┃🥀️➺ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃🥀️➺ _${usedPrefix}fg *imagem pra figurinha*_
┃🥀️➺ _${usedPrefix}topdf *imagem*_
┃🥀️➺ _${usedPrefix}tovn | vn *video ou audio*_
┃🥀️➺ _${usedPrefix}tovideo *audio*_
┃🥀️➺ _${usedPrefix}tourl *video, imagem*_
┃🥀️➺ _${usedPrefix}tts *idioma* *texto*_
*╰━━━━━━━━━━━━⬣*
*╭━━[ FERRAMENTAS ]━━⬣*
┃✒️️ _${usedPrefix}criador_
┃✒️️ _${usedPrefix}boost_
┃✒️️ _${usedPrefix}status_
┃✒️️ _${usedPrefix}ping_ 
┃✒️️ _${usedPrefix}speedtest_
┃✒️️ _${usedPrefix}afk *motivo*_
┃✒️️ _${usedPrefix}acortar *url*_
┃✒️️ _${usedPrefix}calc *operacao mth*_
┃✒️️ _${usedPrefix}qrcode *texto*_
┃✒️️ _${usedPrefix}styletext *texto*_
┃✒️️ _${usedPrefix}traduzir | trad *texto*_
┃✒️️ _${usedPrefix}morse codificar *texto*_
┃✒️️ _${usedPrefix}morse decodificar *morse*_
┃✒️️ _${usedPrefix}poll *Motivo*_
┃✒️️ _${usedPrefix}horario_
┃✒️ _${usedPrefix}clima *país cidade*_
*╰━━━━━━━━━━━━⬣*
*╭━━━[ AJUSTES - CHATS ]━━━⬣*
┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┃⚙️ _${usedPrefix}criador_
┃⚙️ _${usedPrefix}infobot_
┃⚙️ _${usedPrefix}doar | paypal_
┃⚙️ _${usedPrefix}boost_
┃⚙️ _${usedPrefix}status_
┃⚙️ _${usedPrefix}ping_
┃⚙️ _${usedPrefix}on *:* off *welcome*_
┃⚙️ _${usedPrefix}on *:* off *avisos*_
┃⚙️ _${usedPrefix}on *:* off *restrict*_
┃⚙️ _${usedPrefix}on *:* off | *anticall*_
┃⚙️ _${usedPrefix}on *:* off | *public*_
┃⚙️ _${usedPrefix}on *:* off *autovisto*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos*_
┃⚙️ _${usedPrefix}on *:* off *antiver*_
┃⚙️ _${usedPrefix}on *:* off *antidelete*_
┃⚙️ _${usedPrefix}on *:* off  *antifake*_
┃⚙️ _${usedPrefix}on *:* off  *antilink*_
┃⚙️ _${usedPrefix}on *:* off  *antilink2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter*_
┃⚙️ _${usedPrefix}on *:* off *bot*_
┃⚙️ _${usedPrefix}on *:* off *gconly*_
┃⚙️ _${usedPrefix}on *:* off *pconly*_
*╰━━━━━━━━━━━━⬣*
*╭━〔 GRUPO 〕━⬣**
┃ * configurar Grupo!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪦➺ _${usedPrefix}config
┃🪦➺ _${usedPrefix}infogrupo_
┃🪦➺ _${usedPrefix}listbanchat_
┃🪦➺ _${usedPrefix}listadv_
┃🪦➺ _${usedPrefix}listbloqueados_
┃🪦➺ _${usedPrefix}listbanidos_
┃🪦➺ _${usedPrefix}settings'
┃🪦➺ _${usedPrefix}vergrupo_
*╰━━━━━━━━━━━━⬣*
*╭━[ CONFIGURAÇÃO - GRUPOS ]━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✒️📜➺ _${usedPrefix}add *numero*_
┃✒️📜➺ _${usedPrefix}ban | mute *@tag*_
┃✒️📜➺ _${usedPrefix}grupo *abrir : fechar*_
┃✒️📜➺ _${usedPrefix}daradmin | promote *@tag*_
┃✒️📜➺ _${usedPrefix}quitar | demote *@tag*_
┃✒️📜➺ _${usedPrefix}banchat_
┃✒️📜➺ _${usedPrefix}unbanchat_
┃✒️📜➺ _${usedPrefix}unmute | unban *@tag*_
┃✒️📜➺ _${usedPrefix}admins *texto*_
┃✒️📜➺ _${usedPrefix}invocar | tagall *texto*_
┃✒️📜➺ _${usedPrefix}hidetag *texto*_
┃✒️📜➺ _${usedPrefix}infogrupo | infogroup_
┃✒️📜➺ _${usedPrefix}gctime abrir | fechar *tempo*_
┃✒️📜➺ _${usedPrefix}advertencia | adv *@tag*_
┃✒️📜➺ _${usedPrefix}lembrete *horario* *mensagem*
┃✒️📜➺ _${usedPrefix}deladvertencia | deladv *@tag*_
┃✒️📜➺ _${usedPrefix}startvoto *texto*_
┃✒️📜➺ _${usedPrefix}sivotar | upvote_
┃✒️📜➺ _${usedPrefix}novotar | devote_
┃✒️📜➺ _${usedPrefix}vervotos | cekvoto_
┃✒️📜➺ _${usedPrefix}delvoto | deletevoto_
┃✒️📜➺ _${usedPrefix}link*_
┃✒️📜➺ _${usedPrefix}setwelcome  *texto*_
┃✒️📜➺ _${usedPrefix}despedida *texto*_
┃✒️📜➺ _${usedPrefix}on_
┃✒️📜➺ _${usedPrefix}off_
*╰━━━━━━━━━━━━⬣*
*╭━[ VOTAÇÃO 📧 ]━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ _${usedPrefix}startvote *texto*_
┃📧➺ _${usedPrefix}upvote_
┃📧➺ _${usedPrefix}devote_
┃📧➺ _${usedPrefix}vervotos_
┃📧➺ _${usedPrefix}delvoto | deletevoto_
*╰━━━━━━━━━━━━⬣
*╭━━━[ LOGOS ]━━⬣*
┃ * Personalização de logos
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🥀 _${usedPrefix}logos *efeito texto*_
┃🪦 _${usedPrefix}menulogos2_
*╰━━━━━━━━━━━━⬣*
*╭━[ MODIFICAR AUDIO ]━⬣*
┃ *Realiza modificações*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🦇 _${usedPrefix}bass_
┃🦇 _${usedPrefix}blown_
┃🦇 _${usedPrefix}deep_
┃🦇 _${usedPrefix}earrape_
┃🦇 _${usedPrefix}fast_
┃🦇 _${usedPrefix}fat_
┃🦇 _${usedPrefix}nightcore_
┃🦇 _${usedPrefix}reverse_
┃🦇 _${usedPrefix}robot_
┃🦇 _${usedPrefix}slow_
┃🦇 _${usedPrefix}smooth_
┃🦇 _${usedPrefix}tupai_
*╰━━━━━━━━━━━━⬣*
`.trim()

if(command=="mall")
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menuall, fkontak)

if(command=="mbuscas") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menubuscas, fkontak)

if(command=="mbot") conn.sendFile(m.chat,gataVidMenu.getRandom(), 'gata.mp4',menubot, fkontak)

if(command=="mia") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menuia, fkontak)
if(command=="mmd") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menumd, fkontak)

if(command=="mvoto") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menuvoto, fkontak)
if(command=="mbaixar") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menubaixar, fkontak)

if(command=="mgp") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menugp, fkontak)


if(command=="mtools") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menutools, fkontak)

if(command=="mjogos") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menujogos, fkontak)
if(command=="mcv") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menucvs, fkontak)


}
 catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'pt' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(mall|all|mmd|mgp|mbot|mtools|mjogos|mvoto|mia|mcv|mbaixar|mbuscas|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

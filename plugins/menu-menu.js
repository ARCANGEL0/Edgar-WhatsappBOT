import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn,isAdmin,isOwner, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
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
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
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






let menubuscas = `*╭━━[ BUSCAS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍📜➺ ${usedPrefix}imagem | img *texto*_♱ _Busca de imagem_
┃
┃🔍📜➺ ${usedPrefix}gmg *texto* ♱ _Busca de imagem no google_
┃
┃🔍📜➺ _${usedPrefix}wallpaper | wp *texto*_ ♱ _Busca de wallpapers_
┃
┃🔍📜➺ ${usedPrefix}pinterest | pin *texto* ♱ _Busca no pinterest_
┃
┃🔍📜➺ ${usedPrefix}google *texto* ♱ _busca no google_
┃
┃🔍📜➺ ${usedPrefix}letra | lyrics *texto* ♱ _pesquisa letras de musica_
┃
┃🔍📜➺ ${usedPrefix}ytsearch | yts *texto* ♱ _Busca de videos no youtube_
┃
┃🔍📜➺ _${usedPrefix}wiki | wikipedia *texto*_ ♱  _Busca na wikipedia_
┃
┃🔍📜➺ ${usedPrefix}core | pesquisar *texto* ♱  _Busca na CORE.uk por artigos e pesquisas academicas_ 
┃
┃🔍📜➺ ${usedPrefix}nasa ♱ _Retorna as noticias do dia da NASA_
┃
┃🔍📜➺ ${usedPrefix}elemento *oxigenio ou 8* ♱ _Retorna dados do elemento Químico por nome ou n° atomico_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

 
let menujogos = `*╭━━[ JOGOS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🐈‍⬛➺ ${usedPrefix}top5 | top10 *texto* 🂱 _Lista os top do grupo_ 
┃
┃🐈‍⬛➺ ${usedPrefix}personalidade *@usuario* 🂱 _Deduz a perosnalidade do @usuario_
┃
┃🐈‍⬛➺ ${usedPrefix}horoscopo  | hrp  *signo* 🂱 _Retorna o horoscopo do dia_
┃
┃🐈‍⬛➺ ${usedPrefix}slot  | apostar *valor* 🂱 _Aposta na maquina de slot com 𒄆𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜
┃
┃🐈‍⬛➺ ${usedPrefix}slotxp | apostaxp *valor* 🂱 _Aposta na maquina de slot com pontos xp_
┃
┃🐈‍⬛➺ ${usedPrefix}quiz 🂱 
┃🐈‍⬛➺ ${usedPrefix}xadrez | chess 
┃🐈‍⬛➺ ${usedPrefix}ttt | xo 🂱 _Jogo da velha_
┃🐈‍⬛➺ ${usedPrefix}delttt | xo 🂱 _Remove  partidq do jogo da velha_
┃
┃🐈‍⬛➺ ${usedPrefix}sudoku | sdk
┃🐈‍⬛➺ ${usedPrefix}poemas
┃🐈‍⬛➺ ${usedPrefix}morceguices 🂱 _Curiosidades cultura gótica_
┃
┃🐈‍⬛➺ ${usedPrefix}biografia | bio 🂱 _Biografia do Edgar allan Poe_
┃
┃🐈‍⬛➺ ${usedPrefix}curiosidades 
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menuia = `*╭━━[ IA ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🩻️➺ ${usedPrefix}iavoz | chatgptvoz *texto* 𓄿 _EdgarGPT em audio_
┃
┃🩻️➺ ${usedPrefix}gpt | alangpt  *texto* 𓄿 _EdgarGPT_
┃
┃🩻️➺ ${usedPrefix}bard  *texto* 𓄿 _IA da Google - Bard_
┃
┃🩻️➺ ${usedPrefix}gemini | ia  *texto* 𓄿 _EdgarGPT v3 com *Gemini*_
┃
┃🩻️➺ ${usedPrefix}bing | imagine  *texto* 𓄿 _Geracao de imagem com o Bing_
┃
┃🩻️➺ ${usedPrefix}dalle *texto* 𓄿 _Geracao de imagens com o DALL-E 2_
┃
┃🩻️➺ ${usedPrefix}math | calc  *operacao* 𓄿 _Calculadora avançada para Calculo_
┃
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()


let menubaixar = `*╭━━[ DOWNLOADS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┃🕯️➺ ${usedPrefix}play *musica* 𓂀 _Download de musica_
┃
┃🕯️➺ ${usedPrefix}play2 *musica* 𓂀 _Download de video_
┃
┃🕯️➺ ${usedPrefix}spotify *musica* 𓂀 _Download de musica do spotify_
┃
┃🕯️➺ ${usedPrefix}ytmp3 | yta *link* 𓂀 _Baixar mp3 de link_
┃
┃🕯️➺ ${usedPrefix}ytmp4 | ytv *link* 𓂀 _Baixar mp4 de link_
┃
┃🕯️➺ ${usedPrefix}facebook | fb *link* 𓂀 _Baixar post de facebook_
┃
┃🕯️➺ ${usedPrefix}apk *nome* 𓂀 _Baixar apk_ 
┃🕯️➺ ${usedPrefix}instagram | ig *link* 𓂀 _Baixar post de instagram_
┃
┃🕯️➺ ${usedPrefix}verig | igstalk *usuario(a)* 𓂀 _Stalkear perfil instagram_
┃
┃🕯️➺ ${usedPrefix}ighistoria | igstory *usuario(a)* 𓂀 _Baixa stories do ig_
┃
┃🕯️➺ ${usedPrefix}tiktok *link* 𓂀 _Baixar post do tiktok_
┃
┃🕯️➺ ${usedPrefix}tw *link* 𓂀 _Baixar post do twitter
┃
┃🕯️➺ ${usedPrefix}tiktokimagen | ttimagen *link*
┃🕯️➺ ${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*
┃
┃🕯️➺ ${usedPrefix}vertiktok | tiktokstalk *usuario(a)* 𓂀 _Stalkear perfil Tiktok_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menucvs = `*╭━━[ CONVERSORES ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🥀️➺ ${usedPrefix}toimg | jpg *figurinha* 𖤐 _Transforma figurinha em imagem_
┃
┃🥀️➺ ${usedPrefix}toanime *foto*
┃🥀️➺ _${usedPrefix}tomp3 | mp3 *video ou msg de voz*_
┃
┃🥀️➺ _${usedPrefix}fg *imagem pra figurinha*_
┃🥀️➺ _${usedPrefix}topdf *imagem*_
┃🥀️➺ _${usedPrefix}tovn | vn *video ou audio*_
┃
┃🥀️➺ _${usedPrefix}tovideo *audio*_
┃
┃🥀️➺ _${usedPrefix}tourl *video, imagem*_
┃
┃🥀️➺ _${usedPrefix}tts *idioma* *texto*_ ࣪𖤐 Texto para voz_
┃
┃🥀️➺ _${usedPrefix}text *audio*_ ࣪𖤐 _Voz para texto_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()
let menutools = `*╭━━[ FERRAMENTAS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✒️️ _${usedPrefix}criador_
┃✒️️ _${usedPrefix}doar_
┃✒️️ _${usedPrefix}sobre_
┃✒️️ _${usedPrefix}afk *motivo*_
┃✒️️ _${usedPrefix}acortar *url*_
┃✒️️ _${usedPrefix}calc | math *operacao matematica*_
┃✒️️ _${usedPrefix}qrcode *texto*_
┃✒️️ _${usedPrefix}styletext | style *texto*_ ϯ _Estiliza a fonte do texto_
┃
┃✒️️ _${usedPrefix}traduzir | trad *idioma desejado* *texto*_
┃
┃✒️️ _${usedPrefix}morse codificar *texto*_
┃✒️️ _${usedPrefix}morse decodificar *morse*_
┃✒️️ _${usedPrefix}horario_
┃✒️️ _${usedPrefix}clima *cidade, Distrito*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()


let menugp = `*╭━〔 GRUPO 〕━⬣*
┃ 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🪦➺ _${usedPrefix}config_
┃🪦➺ _${usedPrefix}link_
┃🪦➺ _${usedPrefix}infogrupo_
┃🪦➺ _${usedPrefix}listbanchat_
┃🪦➺ _${usedPrefix}listadv_
┃🪦➺ _${usedPrefix}listbloqueados_
┃🪦➺ _${usedPrefix}listbanidos_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃┈*[ CONFIGURAÇÃO - ADMIN ]*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✒️📜➺ _${usedPrefix}add *numero*_
┃
┃✒️📜➺ _${usedPrefix}kick | remover *usuario*_ ☥ _Remove do grupo_
┃
┃✒️📜➺ _${usedPrefix}ban | banir *@tag*_ ☥ _Proibe de usar o bot_
┃
┃✒️📜➺ _${usedPrefix}mute *@tag*_ ☥ _Silencia e impede de mandar mensagem_
┃
┃✒️📜➺ _${usedPrefix}gc *abrir : fechar* *opcional: tempo*_ ☥ _abre ou fecha grupo, com opcao pra definir temporizador_
┃
┃✒️📜➺ _${usedPrefix}daradmin | promote *@tag*_
┃✒️📜➺ _${usedPrefix}quitar | demote *@tag*_
┃✒️📜➺ _${usedPrefix}mutebot *(opcional: tempo)*☥ _Desativa o bot_
┃
┃✒️📜➺ _${usedPrefix}ativarbot_ ☥ _Ativa o bot_
┃
┃✒️📜➺ _${usedPrefix}desmutar *@tag*_ ☥ _Tira o mute do @usuario_
┃
┃✒️📜➺ _${usedPrefix}desbanir | unban *@tag*_ ☥ _Desbane usuario_
┃
┃✒️📜➺ _${usedPrefix}admins *texto*_ ☥ _Invoca somente os admins_
┃
┃✒️📜➺ _${usedPrefix}invocar | tagall *texto*_ ☥ _Invoca todos_
┃
┃✒️📜➺ _${usedPrefix}advertencia | adv *@tag*_
┃
┃✒️📜➺ _${usedPrefix}lembrete *horario* *mensagem*_
┃
┃✒️📜➺ _${usedPrefix}deladvertencia | deladv *@tag*_
┃
┃✒️📜➺ _*${usedPrefix}link*_
┃✒️📜➺ _*${usedPrefix}fantasmas*_ ☥ _Lista usuários inativos do grupo_
┃
┃✒️📜➺ _*${usedPrefix}kickfantasmas*_ ☥ _Remove usuarios inativos do grupo_
┃
┃✒️📜➺ _${usedPrefix}setwelcome  *texto*_
┃✒️📜➺ _${usedPrefix}despedida *texto*_
┃✒️📜➺ _${usedPrefix}on_
┃✒️📜➺ _${usedPrefix}off_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menubot = `*╭━━[ BOT ]━━⬣*
┃┃ *Admin!!*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃⚙️ _${usedPrefix}criador_
┃⚙️ _${usedPrefix}infobot_
┃⚙️ _${usedPrefix}doar | paypal_
┃⚙️ _${usedPrefix}boost_
┃⚙️ _${usedPrefix}status_
┃⚙️ _${usedPrefix}resetuser *user*_ ⚝ _Reseta dados de usuario_
┃
┃⚙️ _${usedPrefix}resetchat_ ⚝ _Reseta dados de chat_
┃ 
┃⚙️ _${usedPrefix}resetbot_ ⚝ _APAGA TUDO DO BOT!!_
┃⚙️ _${usedPrefix}chdat_ ⚝ _Loga dados chat_
┃⚙️ _${usedPrefix}userdata ⚝ _Loga dados user
┃⚙️ _${usedPrefix}dashboard_
┃⚙️ _${usedPrefix}speedtest_
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
┃⚙️ _${usedPrefix}on *:* off *autonivel*_
┃⚙️ _${usedPrefix}on *:* off *reaction*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *antitoxic*_
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
┃⚙️ _${usedPrefix}on *:* off *gpt*_
┃⚙️ _${usedPrefix}on *:* off *busca*_
┃⚙️ _${usedPrefix}on *:* off *midia*_
┃⚙️ _${usedPrefix}on *:* off *jogos*_
┃⚙️ _${usedPrefix}on *:* off *downloads*_
┃⚙️ _${usedPrefix}on *:* off *quizxp*_
┃⚙️ _${usedPrefix}on *:* off *xadrez*_
┃⚙️ _${usedPrefix}on *:* off *rick*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menumd = `*╭━━[ MIDIA ]━━⬣*
┃ 
┃🥀 ${usedPrefix}logos *efeito texto* ☣︎ _Gerador de banner com texto_
┃
┃🥀 ${usedPrefix}style *fonte texto* ☣︎ _Gerador de fontes pra texto_
┃
┃🥀 ${usedPrefix}comunista | ussr *usuario* ☣︎ _Filtro camarada_

┃🥀 ${usedPrefix}pixel *imagem* ☣︎ _Pixeliza uma imagem_
┃
┃🥀 ${usedPrefix}blur *imagem* ☣︎ Desfoca uma imagem
┃
┃🥀 ${usedPrefix}mkpooh *texto | texto2* ☣︎ _Gerador de meme do pooh gentleman_
┃
┃🥀 ${usedPrefix}dado | dice ☣︎ _Gira um dado_
┃
┃🥀 ${usedPrefix}fg *imagem ou texto* ☣︎ _Cria uma figurinha_
┃
┃🥀 ${usedPrefix}attp|attp1|attp2|attp3 *texto* ☣︎ _Cria figurinha con texto colorido_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Realiza modificações de audio*
┃
┃🩻 _${usedPrefix}bass_
┃🩻 _${usedPrefix}blown_
┃🩻 _${usedPrefix}deep_
┃🩻 _${usedPrefix}earrape_
┃🩻 _${usedPrefix}fast_
┃🩻 _${usedPrefix}fat_
┃🩻 _${usedPrefix}nightcore_
┃🩻 _${usedPrefix}reverse_
┃🩻 _${usedPrefix}robot_
┃🩻 _${usedPrefix}slow_
┃🩻 _${usedPrefix}smooth_
┃🩻 _${usedPrefix}tupai_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()

let menuvoto = `*╭━━[ VOTAÇÃO ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ ${usedPrefix}criarvoto *texto*
┃📧➺ ${usedPrefix}upvoto
┃📧➺ ${usedPrefix}devoto
┃📧➺ ${usedPrefix}vervotos
┃📧➺ ${usedPrefix}delvoto | deletevoto
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*`.trim()



let menuall = `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`
${menubuscas}
${menuia}
${menutools}
${menujogos}
${menucvs}
${menubaixar}
${menumd}
${menuvoto}
`.trim()


if(!text)
await conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menuall}`, fkontak)

if(text=="busca") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menubuscas}`, fkontak)

if(text=="bot" && (isAdmin || isOwner)) conn.sendFile(m.chat,gataVidMenu.getRandom(), 'gata.mp4',`💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menubot}`, fkontak)

if(text=="ia") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menuia}`, fkontak)
if(text=="midia") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menumd}`, fkontak)

if(text=="voto") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menuvoto, fkontak)
if(text=="dl") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menubaixar}`, fkontak)

if(text=="gp" && (isAdmin || isOwner)) conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menugp}`, fkontak)


if(text=="util") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menutools}`, fkontak)

if(text=="jogos") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menujogos}`, fkontak)
if(text=="conversor") conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', `💀🕯️ Olá @${username}
\`\`\`${horarioFecha}\`\`\`\n${menucvs}`, fkontak)


}
 catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'pt' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^menu$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
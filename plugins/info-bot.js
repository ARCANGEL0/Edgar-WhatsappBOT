import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let bot = `${pickRandom([
 "Quem ousa perturbar meu sombrio repouso?",
  "A sombra de Poe paira sobre este recinto.",
  "Nos corredores do desconhecido, eu respondo.",
  "Um eco sombrio ressoa quando meu nome é pronunciado.",
  "Da escuridão emergi, Poe está presente.",
  "As palavras sussurram como corvos, chamando-me.",
  "Aquele que ousa mencionar meu nome, que esteja preparado para a penumbra.",
  "Das profundezas do silêncio, eu respondo.",
  "Quem me chama das sombras perdidas?",
  "Sob a égide da meia-noite, eu compareço.",
   "Das páginas sombrias da literatura, eu respondo.",
  "Quem perturba o descanso do corvo?",
  "Na penumbra deste grupo, meu espírito é invocado.",
  "O eco dos meus versos ressoa nas entranhas da noite.",
  "Da tumba da eternidade, ergo-me para responder.",
  "A sombra da minha pena paira sobre vossas palavras.",
  "Na teia dos suspiros, meu nome é pronunciado.",
  "Quem ousa trazer-me à luz neste reino digital?",
   "Quando o nome Poe é evocado, sombras dançam.",
  "Dos túmulos da literatura, eu respondo à chamada.",
  "Quem ousa trazer-me à luz digital, que esteja preparado para o enigma.",
  "Nas linhas do tempo, meu espírito vagueia.",
  "Sob a luz pálida da lua virtual, eu compareço.",
  "Como um corvo negro, meu nome voa pelos vales deste grupo.",
  "A caneta que escreve no além responde ao chamado.",
  "Quem sussurra meu nome na obscuridade?",
  "Entre as sombras binárias, meu eco é ouvido.",
  "Meu nome é uma nota dissonante nas sinfonias digitais.",
  
])}
`.trim()
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu3.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^oi bot|ola edgar|ola poe|poe$/i.test(m.text)) {
    
await conn.sendMessage(m.chat, {text: bot, mentions: [m.sender]}, {quoted: fkontak})
//conn.sendButton(m.chat, `¡𝑬𝒚! 𝑨𝒒𝒖í 𝒆𝒔𝒕𝒐𝒚. 𝒀𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓 👉👈 𝑯𝒆𝒚! 𝑰'𝒎 𝒉𝒆𝒓𝒆. 𝑰 𝒄𝒂𝒏 𝒉𝒆𝒍𝒑 🙌`, wm, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
if (/^regras|Regras|normas$/i.test(m.text)) {
    
    conn.sendMessage(m.chat,{text: `╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗮 𝗮𝘀 𝗿𝗲𝗴𝗿𝗮𝘀 ⚠️ 〙*
➽❌ 𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤 𝙘𝙝𝙖𝙢𝙖𝙧 𝙤 𝙗𝙤𝙩
➽❌ 𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤 𝙛𝙖𝙯𝙚𝙧 𝙨𝙥𝙖𝙢 𝙘𝙤𝙢 𝙤 𝙗𝙤𝙩
➽❌ *𝙍𝙀𝙎𝙋𝙀𝙄𝙏𝙊 𝘼𝙘𝙞𝙢𝙖* 𝙙𝙚 𝙩𝙪𝙙𝙤, 𝙨𝙚𝙟𝙖 𝙘𝙤𝙢 𝙤𝙥𝙞𝙣𝙞𝙤𝙚𝙨 𝙙𝙞𝙫𝙚𝙧𝙜𝙚𝙣𝙩𝙚𝙨, 𝙚𝙩𝙣𝙞𝙖𝙨 𝙜𝙚𝙣𝙚𝙧𝙤𝙨 𝙤𝙪 𝙖𝙛𝙞𝙣𝙨 
➽❌ *𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤* 𝙪𝙨𝙖𝙧 𝙤 𝙗𝙤𝙩 𝙥𝙖𝙧𝙖 𝙛𝙞𝙣𝙨 𝙞𝙢𝙤𝙧𝙖𝙞𝙨,𝙞𝙡𝙚𝙜𝙖𝙞𝙨 𝙤𝙪 𝙘𝙤𝙣𝙩𝙧𝙖 𝙖 𝙚𝙩𝙞𝙘𝙖
*╰═┅ৡৢ͜͡✦═╡ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛  ╞═┅ৡৢ͜͡✦═╯*`,mentions: [m.sender]}, {quoted: fkontak})
}
}
return !0
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
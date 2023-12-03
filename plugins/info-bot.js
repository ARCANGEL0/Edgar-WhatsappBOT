import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let bot = `${pickRandom(["Bem-vindo à obscura morada das palavras, onde cada saudação é um eco sombrio.🕯️💀",
  "Saudações, viajante perdido nos corredores sombrios da linguagem. Como posso guiá-lo? 🕯️💀",
  "Entre, forasteiro, nesta sinfonia de saudações onde as palavras dançam no crepúsculo.✒️📜",
  "Olá, visitante da penumbra, onde as frases revelam segredos e os cumprimentos são sinistros.🥀",
  "Seja bem-vindo à encruzilhada das palavras, onde o 'oi' ecoa como um sussurro noturno.🐈‍⬛🕸️",
  "Saudações, intruso das letras, adentre este reino onde as boas-vindas são entrelaçadas com mistério🥀🪦.",
  "Oi, forasteiro das narrativas enigmáticas, que mistérios deseja desvelar hoje?📜🥀",
  "Olá, viajante das linhas sombrias, permita-me guiá-lo pelas sendas inexploradas das palavras.🦇🕸️🕸️",
  "Saudações, estranho das frases ocultas, onde as boas-vindas são escritas em tinta de enigma.🥀💀"])}
`.trim()
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: fs.readFileSync('./media/menus/Menu3.jpg'), sellerJid: '0@s.whatsapp.net'    
}}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) },
message: { 
"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}}  

if (/^bot|edgar|poe$/i.test(m.text)) {
    
await conn.sendMessage(m.chat, {text: bot, mentions: [m.sender]}, {quoted: fkontak})
//conn.sendButton(m.chat, `¡𝑬𝒚! 𝑨𝒒𝒖í 𝒆𝒔𝒕𝒐𝒚. 𝒀𝒐 𝒑𝒖𝒆𝒅𝒐 𝒂𝒚𝒖𝒅𝒂𝒓 👉👈 𝑯𝒆𝒚! 𝑰'𝒎 𝒉𝒆𝒓𝒆. 𝑰 𝒄𝒂𝒏 𝒉𝒆𝒍𝒑 🙌`, wm, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `#menu`]], 'conversation', { sendEphemeral: true, quoted: estilo })
if (/^regras|Regras|normas$/i.test(m.text)) {
    
    conn.sendMessage(m.chat,{text: `╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗮 𝗮𝘀 𝗿𝗲𝗴𝗿𝗮𝘀 ⚠️ 〙*
➽❌ 𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤 𝙘𝙝𝙖𝙢𝙖𝙧 𝙤 𝙗𝙤𝙩
➽❌ 𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤 𝙛𝙖𝙯𝙚𝙧 𝙨𝙥𝙖𝙢 𝙘𝙤𝙢 𝙤 𝙗𝙤𝙩
➽❌ *𝙍𝙀𝙎𝙋𝙀𝙄𝙏𝙊 𝘼𝙘𝙞𝙢𝙖* 𝙙𝙚 𝙩𝙪𝙙𝙤, 𝙨𝙚𝙟𝙖 𝙘𝙤𝙢 𝙤𝙥𝙞𝙣𝙞𝙤𝙚𝙨 𝙙𝙞𝙫𝙚𝙧𝙜𝙚𝙣𝙩𝙚𝙨, 𝙚𝙩𝙣𝙞𝙖𝙨 𝙜𝙚𝙣𝙚𝙧𝙤𝙨 𝙤𝙪 𝙖𝙛𝙞𝙣𝙨 
➽❌ *𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤* 𝙪𝙨𝙖𝙧 𝙤 𝙗𝙤𝙩 𝙥𝙖𝙧𝙖 𝙛𝙞𝙣𝙨 𝙞𝙢𝙤𝙧𝙖𝙞𝙨,𝙞𝙡𝙚𝙜𝙖𝙞𝙨 𝙤𝙪 𝙘𝙤𝙣𝙩𝙧𝙖 𝙖 𝙚𝙩𝙞𝙘𝙖
*╰═┅ৡৢ͜͡✦═╡ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛  ╞═┅ৡৢ͜͡✦═╯*`,, mentions: [m.sender]}, {quoted: fkontak})
}
}
return !0
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
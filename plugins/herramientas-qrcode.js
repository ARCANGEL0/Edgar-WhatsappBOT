import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `${mg}𝗘𝘀𝗰𝗿𝗲𝘃𝗮 𝘂𝗺 𝘁𝗲𝘅𝘁𝗼 𝗽𝗮𝗿𝗮 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗿 𝗲𝗺 𝗤𝗥 𝗖𝗼𝗱𝗲`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', wm, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.money = 20
export default handler

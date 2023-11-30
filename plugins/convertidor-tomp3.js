import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}❖─┅──┅─\n RESPONDA UM AUDIO OU VIDEO PARA SALVAR COMO MP3┅──┅❖ `
await conn.sendPresenceUpdate('recording', m.chat)
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}❖─┅──┅\n 🐈‍⬛ NAO FOI POSSIVEL BAIXAR O VIDEO. TENTE NOVAMENTE MAIS TARDE─┅──┅❖ `
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}❖─┅──┅\n 🐈‍⬛ NAO FOI POSSIVEL BAIXAR O AUDIO. TENTE NOVAMENTE MAIS TARDE─┅──┅❖ `
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}❖─┅──┅\n 🐈‍⬛ NAO FOI POSSIVEL BAIXAR O VIDEO. TENTE NOVAMENTE MAIS TARDE─┅──┅❖ `
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}���❖─┅──┅\n 🐈‍⬛ NAO FOI POSSIVEL BAIXAR O AUDIO. TENTE NOVAMENTE MAIS TARDE─┅──┅❖ `
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}❖─┅──┅\n 🐈‍⬛ NAO FOI POSSIVEL BAIXAR. TENTE NOVAMENTE MAIS TARDE─┅──┅❖ `
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler

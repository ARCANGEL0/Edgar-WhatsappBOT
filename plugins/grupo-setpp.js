let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw `${lenguajeGB['smsAvisoMG']()}️𝘼𝙣𝙚𝙭𝙚 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢`
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply(`${lenguajeGB['smsAvisoEG']()}𝗙𝗼𝘁𝗼 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼 𝗮𝗹𝘁𝗲𝗿𝗮𝗱𝗮 𝗰𝗼𝗺 𝘀𝘂𝗰𝗲𝘀𝘀𝗼`))
} else throw `${lenguajeGB['smsAvisoMG']()}️𝘼𝙣𝙚𝙭𝙚 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢`}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler

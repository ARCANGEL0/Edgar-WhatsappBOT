let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
  if (!text) return m.reply(`${lenguajeGB['smsAvisoMG']()}𝙄❖─┅──┅─_*MENSAGEM PARA CONVOCAR ADMINS*_┅──┅❖ `)
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${lenguajeGB.smsAddB5()} + "\n"+_${pesan}_`

let textoA = 
`*⊱ ──── 《.⋅ 🕯️💀 ⋅.》 ──── ⊰*
${lenguajeGB.smsAddB3()}
❖ ${oi}
*⊱ ──── 《.⋅ ${vs} ⋅.》 ──── \n⊰*`

let textoB = 
`${listAdmin}

⛔ ${lenguajeGB.smsAddB4()} ⛔`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
//await conn.sendButton(m.chat, textoA, textoB, pp, [[lenguajeGB.smsConMenu(), `.menu`]], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.command = /^(admins|@admins|dmins)$/i
handler.admin = true
handler.group = true
export default handler

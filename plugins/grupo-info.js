let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './media/menus/img4.jpg'
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`─┅❖ ${lenguajeGB['smsGI1']()} 

𓂀 ${lenguajeGB['smsGI2']()}
 ⏦ ${groupMetadata.id}

𓂀 ${lenguajeGB['smsGI3']()}
 ⏦ ${groupMetadata.subject}

𓂀 ${lenguajeGB['smsGI4']()}
 ⏦ ${groupMetadata.desc?.toString() || lenguajeGB['smsGI5']()}

𓂀 ${lenguajeGB['smsGI6']()}
 ⏦ ${participants.length} ${lenguajeGB['smsGI7']()}

𓂀 ${lenguajeGB['smsGI8']()}
 ⏦ @${owner.split('@')[0]}

𓂀 ${lenguajeGB['smsGI9']()}
${listAdmin}

─┅──┅❖ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣  ${vs} 𓅊 ─┅──┅
`.trim()
  
await conn.sendFile(m.chat, pp, './media/menus/Menu1.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler

const toxicRegex = /bolsomito|vadia|retardado|seu burro|sua burra|é burro|é burra|eh burro|eh burra|imbecil|sua puta|vagabunda|lugar de mulher|se mata|esquerdalha|feminazi|seu merda|merdinha|é rodada|eh rodada|pedaço de merda|seu bosta|seu lixo/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = gataImg.getRandom()	
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await m.reply(`
━━━━━━━⬣『*@${m.sender.split`@`[0]}*』⬣━━━━━━
𝐀𝐛𝐬𝐭𝐞𝐧𝐡𝐚-𝐬𝐞 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬 𝐭𝐨𝐱𝐢𝐜𝐚𝐬. 𝐌𝐚𝐧𝐭𝐞𝐧𝐡𝐚 𝐫𝐞𝐬𝐩𝐞𝐢𝐭𝐨 𝐧𝐞𝐬𝐭𝐞 𝐜𝐡𝐚𝐭.
 
   ⚠ *${user.warn}/4*
━━━━━━━⬣⚠️⬣━━━━━━

${lenguajeGB['smsToxic1']()} ${lenguajeGB['smsToxic2']()} ${lenguajeGB['smsToxic3']()} 4*\n\n${wm}`, false, { mentions: [m.sender] })}
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`} *${lenguajeGB['smsToxic1']()} (${isToxic}) ${lenguajeGB['smsToxic2']()}*`, `${lenguajeGB['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, img, [
[lenguajeGB.smsToxic4(), 'ok'],
[lenguajeGB.smsToxic5(), '.off antitoxic'],
[lenguajeGB.smsConMenu(), '/menu']], false, { mentions: [m.sender] })}*/

if (user.warn >= 4) {
user.warn = 0
await m.reply(`*${lenguajeGB['smsToxic6']()}*\n*@${m.sender.split`@`[0]} ${lenguajeGB['smsToxic7']()}*`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}

global.afks = global.afks ? global.afks : {}
let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
if(!global.afks[m.chat]) {
  return !0;
}

if (global.afks[m.chat].usuario == m.sender && global.afks[m.chat].tempo > -1 && m.quoted.sender == global.afks[m.chat].usuario) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${lenguajeGB['smsAfkM1']()}
      ${global.afks[m.chat].razao ? `\n${lenguajeGB['smsAfkM2']()}🕯️ ` + global.afks[m.chat].razao : ''}

      ${lenguajeGB['smsAfkM3']()}\n *${(new Date - global.afks[m.chat].tempo).toTimeString()}*`.trim(), m, { mentions: [m.sender] });
global.afks[m.chat].tempo = -1
global.afks[m.chat].razao = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
  console.log(jid)
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = global.afks[m.chat].tempo
if (!afkTime || afkTime < 0)
continue
let reason = global.afks[m.chat].razao || ''
await conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}
╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${lenguajeGB['smsAfkM4']()}\n${reason `${lenguajeGB['smsAfkM5']()}` + '──┅❖  ' + reason : `${lenguajeGB['smsAfkM6']()}`}

${lenguajeGB['smsAfkM3']()}\n──┅❖ *${(new Date - global.afks[m.chat].tempo).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);
}
return true
}
export default handler
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}Descreva o seu relato\n*Exemplo:*\n*${usedPrefix + command} l comando ${usedPrefix}infobot nao funciona.*\n`
if (text.length < 8) throw `${fg} ✒️*Mínimo 10 caracteres para realizar o relato*\n.*`
if (text.length > 1000) throw `${fg} ✒️ *Máximo 1000 caracteres para o Relato.*\n*`
let teks = `*╭━━[ | 𝙍𝙀𝙋𝙊𝙍𝙏 ]━━━⬣*\n*┃*\n*┃* *𝙉𝙐𝙈𝙀𝙍𝙊 *\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* 𝙈𝙎𝙂*\n*┃* ✦ ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`
//conn.reply('19393844141@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('351927285125@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`╰⊱ *𝙀́𝙓𝙄𝙏𝙊* ⊱╮\n
🐈‍⬛O informe foi despachado ao meu Criador, aguardando.. em breve, terá então uma réplica. Se falso, será soterrado no esquecimento de sua memória.
  `)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler

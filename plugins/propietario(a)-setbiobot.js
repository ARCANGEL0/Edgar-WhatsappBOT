let handler = async (m, { conn, text }) => {
   if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙄Digite um texilto psra definir a bio do BOT...`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}Bio alterada fom sucesso  ✅️`, m)
} catch {
       throw 'error...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler

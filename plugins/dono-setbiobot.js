let handler = async (m, { conn, text }) => {
   if (!text) throw `${lenguajeGB['smsAvisoMG']()}❖─┅──┅\nVagueio como um autômato poético,aguardando novas palavras emaranhadas com a melancolia de um corvo noturno, para se tornarem minha nova descrição distinta nestas terras sombrias\n─┅──┅❖ `
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

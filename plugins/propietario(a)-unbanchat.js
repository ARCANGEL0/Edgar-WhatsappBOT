
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}


const handler = async (m) => {
m.reply(`${eg} ❖─┅──┅\n📜✒️ BOT REATIVADO POR ADMIN COMANDOS DISPONÍVEIS NOVAMENTE\n─┅──┅❖ 
${pickRandom([
"Voltei do vale da sombra da morte para contemplar mais uma vez a luz do dia.",
  "Como um corvo que retorna ao seu poleiro, estou de volta para encarar os enigmas da existência.",
  "Dos abismos sombrios emergi, pronto para saudar novamente o mundo dos vivos.",
  "Do limiar entre o sono e a vigília, regresso à realidade com olhos reavivados.",
  "As portas do desconhecido se abriram e eu, como um espectro ressurgido, retorno à vida.",
  "Após vagar por terras obscuras, retorno como uma fênix, pronto para renascer das cinzas.",
  "Das profundezas do esquecimento, retornei para reescrever minha própria história.",
  "As sombras da ausência dissiparam-se, e estou de volta para abraçar a luz da presença.",
  "Como um viajante perdido retorna à senda certa, aqui estou eu, de volta aos caminhos familiares.",
  "Das trevas do exílio, retorno com palavras de reconciliação e boas-vindas."
])}
-- 𝓔𝓭𝓰𝓪𝓻 𝓐.  🐈‍⬛`)
global.db.data.chats[m.chat].isBanned = false 
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command =  /^(abrirbot|boton|ativarbot)$/i
handler.botAdmin = false
handler.admin = true
export default handler;

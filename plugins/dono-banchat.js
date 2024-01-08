

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let handler = async (m,{args}) => {
  if (args[1]) {
    let timeoutset = 86400000 * args[1] / 24 
    m.reply(timeoutset)
 
  }
  
  
  else if(!text){
  
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg} ⚠️ BOT DESATIVADO ⚠️ \n 
❖─┅──┅\n💀 COMANDOS TEMPORARIAMENTE INDISPONÍVEIS ATÉ REATIVAÇÃO POR PARTE DOS ADMINS\n─┅──┅❖ 
${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛`)
}

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^botoff|mutebot|desbott$/i
handler.botAdmin = false
handler.admin = true 
export default handler

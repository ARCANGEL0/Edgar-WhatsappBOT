/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🥳\n𝘼𝙃𝙊𝙍𝘼 𝙎𝙄 𝙀𝙎𝙏𝙊𝙔 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀.\n\n𝙏𝙃𝙄𝙎 𝘾𝙃𝘼𝙏 𝙒𝘼𝙎 𝙐𝙉𝘽𝘼𝙉 😌\n𝙉𝙊𝙒 𝙄 𝘼𝙈 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀.`)
}
handler.help = ['unbanchat2']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.exp = 50

export default handler*/

//PARA GRUPOS
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg} ⚠️ BOT DESATIVADO ⚠️ \n 
COMANDOS TEMPORARIAMENTE INDISPONÍVEIS ATÉ REATIVAÇÃO POR PARTE DOS ADMINS

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
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛
  
`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|mutebot|desativarbot$/i
handler.botAdmin = true
handler.admin = true 
export default handler

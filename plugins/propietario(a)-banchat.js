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

${pickRandom([ "Noite, noite escura! Desde as estrelas até a aurora, eu tremo e estremeço diante de tua beleza.",
  "O homem que tem muitos amigos pode vir à ruína, mas há um amigo mais chegado do que um irmão.",
  "Aquele que luta com monstros deve acautelar-se para não tornar-se também um monstro.",
  "O sono, aquele irmão da Morte.",
  "Erga-se o cortinado! — ainda ele ousa erguer-se. Eu falei em alta voz? Eu gritei?— Dizei, dizei! — Não! Eu apenas sussurrei — É esta a minha única e verdadeira maneira de agir.",
  "A verdade, no fundo, é raramente pura, e nunca simples.",
  "Eu permaneci demasiado tempo na calma do tédio; deveria ter mais medo da monotonia do que do terror.",
  "Temos o poder de sonhar a qualquer hora, de criar um mundo que nunca existiu na realidade, mas, no entanto, é mais verdadeiro do que qualquer coisa que tenhamos experimentado.",
  "É impossível dizer quão primeiro o contato com certas pessoas afeta nossos sentimentos — quais são os resultados do dia a dia do bem ou do mal.",
  "O medo do perigo é mil vezes mais aterrorizante do que o próprio perigo.", "Tudo o que vemos ou parecemos não passa de um sonho dentro de um sonho.",
  "Eu enlouqueci, com longos intervalos de horrível sanidade.",
  "Profundamente naquela escuridão espiando, por muito tempo fiquei lá, imaginando, temendo, duvidando, sonhando sonhos que nenhum mortal jamais ousou sonhar antes.",
  "As fronteiras que separam a Vida da Morte são, na melhor das hipóteses, sombrias e vagas. Quem dirá onde uma termina e a outra começa?",
  "Eu gostaria de poder escrever tão misteriosamente quanto um gato.",
  "Palavras não têm o poder de impressionar a mente sem o horror requintado de sua realidade.",
  "Aqueles que sonham de dia estão cientes de muitas coisas que escapam àqueles que sonham apenas à noite.",
  "É uma felicidade se maravilhar; é uma felicidade sonhar.",
  "Acredite apenas na metade do que você vê e nada do que ouve.",
  "Toda religião, meu amigo, é simplesmente derivada de fraude, medo, ganância, imaginação e poesia."])}
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛
  
`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|mutebot|banchat2$/i
handler.botAdmin = true
handler.admin = true 
export default handler

/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *${wm}* 〕┄⊱\n┊\nდ *"${pickRandom(global.piadaa)}"*\n┊\n*╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`)
}
handler.tags = ['frases']
handler.command = ['piadas']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piadaa =  [
    "Eu saí do meu trabalho. Não conseguiria continuar lá depois do que o meu chefe disse...\nO que ele disse?\nVocê está despedido.",
    "Por que a plantinha não foi atendida no hospital?\nPorque só tinha médico de plantão.",
    "Qual a fórmula da água benta?\nH Deus O.",
    "Por que o porco está sempre feliz?\nPorque está de bacon a vida.",
    "Qual a diferença entre o gato e coca-cola?\nO gato mia e a coca light.",
    "Por que Stalin não atendeu o telefone?\nPorque achou que era Trótski.",
    "Então, o que o pagodeiro foi fazer na igreja?\nFoi cantar Pá God.",
    "Por que as plantas pequenas não falam?\nPorque elas são mudinhas.",
    "O que um cromossomo falou pro outro?\nCromossomos bonitos!"
]
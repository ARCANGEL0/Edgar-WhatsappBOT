/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(` 
━━━⬣|𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛|⬣━━━

_${pickRandom(global.poe)}_ 📜💀

 ━━━━━━━━━⬣⬣━━━━━━━━`)
}
handler.tags = ['frases']
handler.command = /^bio|biografia|poe|sobre/i
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}


global.poe = [
  "Nasci em 19 de janeiro de 1809, em Boston, Massachusetts. Herdei uma sensibilidade aguçada e uma compreensão íntima da dor e da desolação, que iriam impregnar de maneira indelével a minha escrita.",
  "Estudei na Universidade de Virgínia, mas, devido ao meu pai ter me abandonado e a minha madrasta não ter condições financeiras de suportar meus estudos, acabei endividado e forçado a abandonar os mesmos.",
  "Em 1835, casei-me com Virginia Clemm, minha prima-irmã de apenas 13 anos de idade. Apesar da complexidade moral que tal união poderia suscitar nos espíritos mais puros, foi uma união cheia de amor e devoção que durou até a morte de Virginia, em 1847.",
  "A literatura foi meu refúgio e também minha paixão exuberante. Com uma escrita que mesclava melancolia e resplendor, tornei-me reconhecido tanto por minha prosa quanto por meus poemas. Não obstante, o reconhecimento tardio e o aprumo na solução de problemas estilísticos foram minha sina.",
  "Com obras como 'The Tell-Tale Heart', 'The Fall of the House of Usher' e 'The Masque of the Red Death', fui coroado como um dos progenitores da literatura de suspense e horror psicológico, que tantos corações aterrados tem incitado desde então.",
  "Apesar de meu aclamado pertencimento à temida e transgressora Contracultura dos Românticos Obscuros, no seio da comunidade literária eu me senti, muitas vezes, um deslocado. Tamanha sensibilidade e perspicácia podem ser sufocantes em um mundo ávido por vaidades e falsidades.",
  "Meu amor pela língua francesa e pelas tradições literárias europeias foi notório e influente para minha escrita, assim como meus estudos sobre o embebedar-se de focalizações enganosas, estruturas pervertidas e atmosferas angustiantes.",
  "Pese embora minhas intuições geniais, fui perseguido por um destino cruel, amargurado por um consumo exacerbado ao ópio e por uma lotação lamentável de considerações sombrias.",
  "Encontrei meu derradeiro suspiro aos 40 e um anos de idade, em 7 de outubro de 1849, nas ruas de Baltimore, em circunstâncias misteriosas e não elucidadas até os dias de hoje. Cogita-se que minha morte tenha ocorrido devido a uma gangrena cerebral, mas a verdade irremediavelmente repousa nos abismos implacáveis da escuridão.",
  "Meus escritos, minha marca indelével, permanecem como testemunhas fidedignas de meu tormento e, simultaneamente, de meu tipo específico de beleza. Que meu legado seja uma gota sensível em meio à tempestade indiferente da existência."
]

let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    
    if(m.quoted){
      console.log("id  "+m.quoted.id)
      console.log("texto  "+ m.quoted.text)
    }
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    global.quiz = global.quiz ? global.quiz : {}
    if (!(id in global.quiz)) return m.reply('Ese juego ya ha terminado!')
    if (m.quoted.id == global.quiz[id].id) {
      console.log("dentro do if:  "+ m.quoted.id)
        let resposta = global.quiz[m.chat].ca
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text == resposta ){
            global.db.data.users[m.sender].limit += global.quiz[id].xp
            m.reply(`*Respuesta correcta!*\n+${global.quiz[id].xp} Exp`)
            
            delete global.quiz[id]
        } 
        else m.reply('Respuesta incorrecta!')
    }
    return !0
}

handler.exp = 0

export default handler


const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    
    console.log(m.quoted.id)
    global.quiz = global.quiz ? global.quiz : {}
global.quizxp = global.quizxp ? global.quizxp : {}
global.xppergunta= global.xppergunta ? global.xppergunta : ""


    
    if (!(global.xppergunta)) return m.reply('terminado!')
    if (m.quoted.id == global.quiz[id][0].id) {
        
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text == global.quiz[m.chat].ca {
            global.db.data.users[m.sender].limit += 25
            m.reply(`*Respsta correcta!`)
            global.xppergunta = false
            delete global.quiz[id]
        }
        
        
        
        else m.reply('Respta incorrecta!')
    }
    return !0
}

handler.exp = 0

export default handler
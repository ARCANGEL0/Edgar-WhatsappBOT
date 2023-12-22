
let handler = m => m
handler.before = async function (m) {
  global.quiz = global.quiz ? global.quiz : {}
    let id = m.chat
    if(!global.quiz[m.chat]){
  global.quiz[m.chat] = {
   "id": ""
  }
}

    if(m.quoted.id == global.quiz[m.chat].id){
      console.log("id  "+m.quoted.id)
      console.log("id2  "+ global.quiz[m.chat].id)
      if(global.quizxp[m.chat].modo==false)
      {
        await m.reply(`
        apenas em modo xp
        `)
      }
      else {
        if(m.text==global.quiz[m.chat].ca){
          await m.reply(`correto`)
        }
        else {
          await m.reply(`errado`)
        }
      }
    }
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    
    if (!(id in global.quiz)) return m.reply(' terminado!')
    if (m.quoted.id == global.quiz[id].id) {
      console.log("dentro do if:  "+ m.quoted.id)
        let resposta = global.quiz[m.chat].ca
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text == resposta ){
            global.db.data.users[m.sender].limit += global.quiz[id].xp
            m.reply(`*Respesta correcta!*\n+${global.quiz[id].xp} Exp`)
            
            delete global.quiz[id]
        } 
        else m.reply('Respsta incorrecta!')
    }
    return !0
}

handler.exp = 0

export default handler
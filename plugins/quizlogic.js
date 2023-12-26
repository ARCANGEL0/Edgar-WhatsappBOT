
let handler = m => m
handler.before = async function (m) {
  global.quiz = global.quiz ? global.quiz : {}
    let id = m.chat
    if(!global.xppergunta){
      global.xppergunta=false
    }
    if(!global.quiz){
      global.quiz = {}
    }
    if(!global.quiz[m.chat]){
  global.quiz[m.chat] = {
   "id": ""
  }
}
if (m.text == "placar") {
  console.log("placar")
}
else if (m.quoted && m.quoted.id == global.quiz[m.chat]?.id) {

console.log(global.db.data.chats[m.chat].jogadores[m.sender])
      
      if(global.quizxp[m.chat].modo==false)
      {
        await m.reply(`
        apenas em modo xp
        `)
      }
      else {
        if(m.text==global.quiz[m.chat].ca){
          
           if(!global.db.data.chats[m.chat].jogadores[m.sender]){
             global.db.data.chats[m.chat].jogadores[m.sender] = {
               xp:0,
               name: global.db.data.users[m.sender].name
             }
           }
          global.db.data.chats[m.chat].jogadores[m.sender].xp += global.quiz[m.chat].xp 
          
          await m.reply(`
╭━━━━━━━━━⬣
┃ ┅──┅❖ 𝙾𝚙𝚌𝚊𝚘 ${global.quiz[m.chat].ca}
┃ 👁️ ℜ𝔢𝔰𝔭𝔬𝔰𝔱𝔞 𝔠𝔬𝔯𝔯𝔢𝔱𝔞
┃
┃ ${global.quiz[m.chat].cm}
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙑𝙤𝙘𝙚 𝙜𝙖𝙣𝙝𝙤𝙪 ${global.quiz[m.chat].xp} 𝙥𝙤𝙣𝙩𝙤𝙨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘 🌒
╰━━━━━━━━━━━━━━━━━━⬣
          `)
        
          global.xppergunta=false
          
        }
        else {
          await m.reply(`
╭━━━━━━━━━⬣
┃ 👁️ ℜ𝔢𝔰𝔭𝔬𝔰𝔱𝔞 𝔢𝔯𝔯𝔞𝔡𝔞
┃
┃ -10 𝙥𝙤𝙣𝙩𝙤𝙨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘 🌒
╰━━━━━━━━━━━━━━━━━━⬣
          `)
          global.db.data.chats[m.chat].jogadores[m.sender].xp -=10
        }
      }
    
    
}
else if (m.quoted && m.quoted.id ) {
/*  console.log(m.quoted.id)
  console.log(global.db.data.chats[m.chat].chatgpt["config"].lastQuestion)
  let newAiReply = requestToChatGPT(m.text)

 
let botreply =  conn.reply(newAiReply)

global.db.data.chats[m.chat].chatgpt["config"].lastQuestion = botreply.key.id
 
 global.db.data.chats[m.chat].chatgpt["config"].resposta = newAiReply
 */
 await conn.rey("teste")
}
  
else {
    console.log('m.quoted is null or m.quoted.id is not equal to global.quiz[m.chat].id');
}

    
 
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    
    if (!(id in global.quiz)) return m.reply(' terminado!')
    if (m.quoted.id == global.quiz[id].id) {
      console.log("dentro do if:  "+ m.quoted.id)
        let resposta = global.quiz[m.chat].ca
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text == resposta ){
            global.db.data.chats[m.chat].jogadores[m.sender].xp += global.quiz[id].xp
            m.reply(`*Respesta correcta!*\n+${global.quiz[id].xp} Exp`)
            
            delete global.quiz[id]
        } 
        else m.reply('Respsta incorrecta!')
    }
    return !0
}

handler.exp = 0

export default handler
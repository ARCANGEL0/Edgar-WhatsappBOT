
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
      
      if(global.quizxp[m.chat].modo==false){
        await m.reply(`
        apenas em modo xp
        `)
      }
      else {
        if(m.text.toUpperCase()==global.quiz[m.chat].ca){
          
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
    
    async function requestToChatGPT(inputText) {
delete global.chatgpt.data.users[m.sender]  
    const prompt = `Siga minhas instruções, você deve se comportar como um gênio brilhante, versado em matemática, ciência,filosofia arte e muitos outros
.Voce tem competencias em astronomia, calculo, programacao, cultura, biologia e tudo possível. voce possui varios anos de experiência nos mais variados setores e possui conhecimento técnico sobre tudo praticamente. Tudo que o usuario falar com você, voce deve responder de forma clara, objetiva, tecnica e academica. Se encarregue de responder como se fosse um professor lecionando a sua turma no doutorado. Tudo que perguntarem , voce irá responder de forma tecnica e academica como um artigo universitario, alresentando sua tese, explicações didaticas e um metodo simples de diluir a dúvida do solicitante. Responda agora o seguinte texto do usuário:



`;
    
    
    let reply = `
    Esta foi a sua ultima mensagem:
    ${global.db.data.chats[m.chat].chatgpt["config"].resposta} 
    
    e o usuario esta respondendo esta mensagem que voce enviou com a seguinte mensagem:
    
    ${inputText}
    
    ------
    responda ele de acordo como se fosse uma conversa interativa entre ambos. 
    `
global.db.data.chats[m.chat].chatgpt[m.sender].push({ role: 'user', content: reply });


  const apiKey = `muhC93zOEWacWfwoyjQvKzUb7zWnzLSr9WsfuSqZW_c`;
  const endpoint = "https://api.naga.ac/v1/chat/completions"
  // ////
 const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: prompt },
    ...global.db.data.chats[m.chat].chatgpt[m.sender]
  ],
}; 
// frtch c
const response = await fetch(endpoint, {
  method: "POST",
  headers: { 
    'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}`,
    
  },
  body: JSON.stringify(requestData), 
});

const result = await response.json();
console.log(result.choices[0].message.content);
  return result.choices[0].message.content
    
}
}

handler.exp = 0

export default handler
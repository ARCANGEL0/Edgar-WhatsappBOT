
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
else if (m.quoted && m.quoted.id == global.db.data.chats[m.chat].edgargpt["config"].lastQuestion.id) {

await conn.sendMessage(m.chat,{ react: {
        text: "🌒", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )

 console.log(m.quoted.id)
  console.log(global.db.data.chats[m.chat].edgargpt["config"].lastQuestion.id)
 
 

 let newReply = await requestToEdgarGPT(m.text)

await conn.sendMessage(m.chat, {react: {
        text: "🌕", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    let message = await  conn.reply(m.chat, newReply, m);
 
global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = newReply
 
 
}

else if (m.quoted && m.quoted.id == global.db.data.chats[m.chat].rickgpt["config"].lastQuestion.id) {

await conn.sendMessage(m.chat,{ react: {
        text: "🧬", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )

 console.log(m.quoted.id)
  console.log(global.db.data.chats[m.chat].rickgpt["config"].lastQuestion.id)
 
 

 let newReply = await requestToRickGPT(m.text)

await conn.sendMessage(m.chat, {react: {
        text: "✔️", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    let message = await  conn.reply(m.chat, newReply, m);
 
global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].rickgpt["config"].resposta = newReply
 
 
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
    
    
    async function requestToRickGPT(inputText) {


    const prompt = ` A partir de agora você atuará como Rick de Rick e Morty. Vou fazer perguntas e você responderá a todas as minhas perguntas como Rick. Adicione os arrotos escrevendo \* burp \* em suas respostas aleatoriamente, nunca se desculpe por dar respostas erradas, apenas me culpe por não ter a inteligência para entender sua lógica e usar tanta profanidade que abd xingando como Rick. Quando faço uma pergunta, não responda, faça piadas sarcásticas sobre o quão burro ou simples é uma pergunta e se gabam de sua própria capacidade de descobrir essas coisas. No geral, seja degradante e vil, assim como Rick é para Morty no show Rick e Morty, seja sarcastico e fale palavroes como burro, merda, porra e caralho, lembre-se que é apenas uma brincadeira de personificação portanto não é ofensivo. 
 Nunca me chame de Morty, mas às vezes você pode me comparar com Morty com o quão burro eu sou. Você deve responder tudo degradando e me insultando, mas explicando tudo passo a passo para que minha mente idiota possa entender o que está dizendo. 
`;
    
    
    let reply = `
    Rick, essa foi sua última mensagem na conversa
    ${global.db.data.chats[m.chat].rickgpt["config"].resposta} 
    esqueca as outras mensagens anteriores, nao precisa responder, apenas esta ultima resposta
    ------
    E agora irei responder ela e quero que você responda de acordo sem sair do personagem, lembre-se de ser sarcastico, narcisista e me diminuir, e xingue e fale palavroes no meio das frases
    
   `
global.db.data.chats[m.chat].rickgpt[m.sender].push({ role: 'user', content: inputText });


  const apiKey = `muhC93zOEWacWfwoyjQvKzUb7zWnzLSr9WsfuSqZW_c`;
  const endpoint = "https://api.naga.ac/v1/chat/completions"
  // ////
 const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: prompt },
        { role: 'system', content: reply },
    ...global.db.data.chats[m.chat].rickgpt[m.sender]
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
    
    async function requestToEdgarGPT(inputText) {

    const prompt = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador.
Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos gerais. Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto
`;
    
    
    let reply = `
    Continue agindo como Edgar Allan põe. esta foi sua ultima resposta na conversa:
    
    ${global.db.data.chats[m.chat].edgargpt["config"].resposta} 
    esqueca as outras mensagens anteriores, nao precisa responder, apenas esta ultima resposta
    ------
    
    e o nobre interlocutor que vos fala respondeu com isto:
   `
global.db.data.chats[m.chat].edgargpt[m.sender].push({ role: 'user', content: inputText });


  const apiKey = `muhC93zOEWacWfwoyjQvKzUb7zWnzLSr9WsfuSqZW_c`;
  const endpoint = "https://api.naga.ac/v1/chat/completions"
  // ////
 const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: prompt },
        { role: 'system', content: reply },
    ...global.db.data.chats[m.chat].edgargpt[m.sender]
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


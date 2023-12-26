//
let handler = m => m
handler.all = async function (m) {

let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^regras|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
  conn.reply(m.chat, `╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗮 𝗮𝘀 𝗿𝗲𝗴𝗿𝗮𝘀 ⚠️ 〙*
➽❌ 𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤 𝙘𝙝𝙖𝙢𝙖𝙧 𝙤 𝙗𝙤𝙩
➽❌ 𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤 𝙛𝙖𝙯𝙚𝙧 𝙨𝙥𝙖𝙢 𝙘𝙤𝙢 𝙤 𝙗𝙤𝙩
➽❌ *𝙍𝙀𝙎𝙋𝙀𝙄𝙏𝙊 𝘼𝙘𝙞𝙢𝙖* 𝙙𝙚 𝙩𝙪𝙙𝙤, 𝙨𝙚𝙟𝙖 𝙘𝙤𝙢 𝙤𝙥𝙞𝙣𝙞𝙤𝙚𝙨 𝙙𝙞𝙫𝙚𝙧𝙜𝙚𝙣𝙩𝙚𝙨, 𝙚𝙩𝙣𝙞𝙖𝙨 𝙜𝙚𝙣𝙚𝙧𝙤𝙨 𝙤𝙪 𝙖𝙛𝙞𝙣𝙨 
➽❌ *𝙋𝙧𝙤𝙞𝙗𝙞𝙙𝙤* 𝙪𝙨𝙖𝙧 𝙤 𝙗𝙤𝙩 𝙥𝙖𝙧𝙖 𝙛𝙞𝙣𝙨 𝙞𝙢𝙤𝙧𝙖𝙞𝙨,𝙞𝙡𝙚𝙜𝙖𝙞𝙨 𝙤𝙪 𝙘𝙤𝙣𝙩𝙧𝙖 𝙖 𝙚𝙩𝙞𝙘𝙖
*╰═┅ৡৢ͜͡✦═╡ 𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛  ╞═┅ৡৢ͜͡✦═╯*`,  m) //wm, null, [['Menu', '#menu']], m) botones :V

}
else if (m.quoted && m.quoted.id == global.db.data.chats[m.chat].chatgpt["config"].lastQuestion ) {
  console.log(m.quoted)
  console.log(global.db.data.chats[m.chat].chatgpt["config"])
  let newAiReply = requestToChatGPT(m.text)
global.db.data.chats[m.chat].chatgpt["config"].lastQuestion = newAiReply.key.id
 
 global.db.data.chats[m.chat].chatgpt["config"].resposta = newAiReply
 
 await m.reply(newAiReply)
}



return !0 
}

export default handler
async function requestToChatGPT(inputText) {
delete global.chatgpt.data.users[m.sender]  
    
    
    
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

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}


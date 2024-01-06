/* -------------------------------------------------------*/
/* [❗]                      [❗]                      [❗] */
/*                                                       */
/*       |- [ ⚠ ] - CREDITOS DEL CODIGO - [ ⚠ ] -|      */
/*     —◉ DESAROLLADO POR OTOSAKA:                       */
/*     ◉ Otosaka (https://github.com/6otosaka9)          */
/*                                                       */
/*     —◉ FT:                                            */
/*     ◉ BrunoSobrino (https://github.com/BrunoSobrino)  */
/*                                                       */
/* [❗]                      [❗]                      [❗] */
/* -------------------------------------------------------*/
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openai = new OpenAIApi(configuration);
const idioma = 'pt-br'
let pp = imagen6
let chgptdb = []
//const sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());

const handler = async (m, {conn, text, usedPrefix, command}) => {




if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}

if (!global.db.data.chats[m.chat].edgargpt) {
  global.db.data.chats[m.chat].edgargpt = {};
}

if (!global.db.data.chats[m.chat].edgargpt["config"]) {
  global.db.data.chats[m.chat].edgargpt["config"] = {
   lastQuestion: '',
   resposta:''
  };
}
  if (!global.db.data.chats[m.chat].edgargpt[m.sender]) {
  global.db.data.chats[m.chat].edgargpt[m.sender] = [];
}


if (!text) throw `*${lenguajeGB['smsAvisoMG']()}
╭━[𝗚𝗣𝗧]━━━━━━━⬣
🕯️💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬 𝐬𝐚𝐛𝐞𝐫, 𝐟𝐚𝐜𝐚 𝐮𝐦𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚, 𝐜𝐨𝐧𝐭𝐞 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬. 𝐄 𝐬𝐞𝐫á 𝐬𝐮𝐛𝐣𝐮𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐦𝐞𝐮 𝐯𝐚𝐬𝐭𝐨 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨 𝐧𝐞𝐬𝐭𝐞𝐬 𝐞𝐜𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐨 𝐥𝐞𝐢𝐭𝐨 𝐝𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐧𝐚 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Quem foi Franz Kafka
${usedPrefix + command} Codigo em JS para um jogo da velha

╰━━━━━━━━━━━━━━━━━━⬣` 

const prompt = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador.
Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos gerais. Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto. 

`;
if (global.xppergunta) {
  await m.reply(`
   ━━━━━━━━━⬣💀⬣━━━━━━━━ 
   🚫👁️ 𝙀𝙙𝙜𝙖𝙧 𝙂𝙋𝙏 𝙄𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙫𝙚𝙡 𝙙𝙪𝙧𝙖𝙣𝙩𝙚 𝙦𝙪𝙞𝙯 𝙘𝙤𝙢𝙥𝙚𝙩𝙞𝙩𝙞𝙫𝙤
𝘽𝙪𝙨𝙦𝙪𝙚 𝙖 𝙨𝙖𝙞𝙙𝙖 𝙙𝙚 𝙨𝙚𝙪 𝙥𝙤ç𝙤 𝙙𝙚 𝙞𝙜𝙣𝙤𝙧𝙖𝙣𝙘𝙞𝙖 𝙥𝙚𝙡𝙤𝙨 𝙢𝙚𝙩𝙤𝙙𝙤𝙨 𝙡𝙚𝙜𝙞𝙩𝙞𝙢𝙤𝙨.
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖-𝙢𝙚 𝙘𝙤𝙢 𝙖𝙨 𝙢𝙖𝙞𝙨 𝙨𝙞𝙣𝙘𝙚𝙧𝙖𝙨 𝙞𝙣𝙙𝙖𝙜𝙖𝙘𝙤𝙚𝙨 𝙙𝙚 𝙨𝙪𝙖 𝙖𝙡𝙢𝙖 𝙨𝙚𝙢 𝙩𝙚𝙧𝙘𝙚𝙞𝙧𝙤𝙨
   ━━━━━━━━━⬣ 🌒 ${vs} ⬣━━━━━━━━
  `)
  return 0
}
 


  };
  
try {
  if(!m.quoted){
    m.react("🌒")
conn.sendPresenceUpdate('typing', m.chat);

 
global.db.data.chats[m.chat].edgargpt[m.sender].push({ role: 'user', content: text });
    



  
  const endpoint = `https://vihangayt.me/tools/gemini?q=${text}`
  // ////
 
// frtch
m.react("🌒")
 
await fetch(endpoint)
.then(response=>{ return response.json()})
.then(data => {
  console.log(data)
  if(!data.status){
    
     m.reply("Seridor ocupado ")
  }
  
  let aiReply = data.text
  m.react("🌕")
 let message = await  conn.sendFile(m.chat, allan.getRandom(), 'edgae.jpg', aiReply, m)
      
      
      global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = aiReply
})
.catch(error => console.log(error))





  /*
 
 */
  
  
  
  
}
}
  catch (error) {
    console.error('Error making GPT-3 request:', error);
    // Handle error response or throw an error
    conn.reply(m.chat, 'Error processing request', m);
  }

  
}
handler.command = /^(ia|ai|gemini)$/i;
export default handler;


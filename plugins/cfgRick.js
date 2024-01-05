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


const rick = [
  "https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png",
  "https://banner2.cleanpng.com/20180320/hwq/kisspng-pocket-mortys-rick-sanchez-morty-smith-computer-ic-rick-avatar-blue-vers-icon-5ab1ccd860a082.9774853115216017523958.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8E7MyaxDZvT9TzylOh8NGyHCcwnNwxhhOg&usqp=CAU",
  "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fblack-hat-vs-rick-sanchez-v0-ajmcr8iuk82a1.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D4e0a7d0e145bcde86432c11dced03bf2c02fc752",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZQay3lMEHolK6tjS0SIm6YGfmzOr7TRgAA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxUBRaTBXFflwZTqcBpH-BSYeDFxGCXXGYQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXCrRTsXdRnBsL88_aiH5YC7DQY65pLnH-w&usqp=CAU"
];


//const sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());


const handler = async (m, {conn, text, usedPrefix, command}) => {

if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}
if(!global.db.data.chats[m.chat].ricksan){
  global.db.data.chats[m.chat].ricksan = true
}
if (!global.db.data.chats[m.chat].rickgpt) {
  global.db.data.chats[m.chat].rickgpt = {};
}

if (!global.db.data.chats[m.chat].rickgpt["config"]) {
  global.db.data.chats[m.chat].rickgpt["config"] = {
   lastQuestion: '',
   resposta:''
  };
}
  if (!global.db.data.chats[m.chat].rickgpt[m.sender]) {
  global.db.data.chats[m.chat].rickgpt[m.sender] = [];
}

console.log(global.db.data.chats[m.chat].ricksan)

if (!text) throw `*${lenguajeGB['smsAvisoMG']()}
╭━[𝗚𝗣𝗧]━━━━━━━⬣
🕯️💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬 𝐬𝐚𝐛𝐞𝐫, 𝐟𝐚𝐜𝐚 𝐮𝐦𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚, 𝐜𝐨𝐧𝐭𝐞 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬. 𝐄 𝐬𝐞𝐫á 𝐬𝐮𝐛𝐣𝐮𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐦𝐞𝐮 𝐯𝐚𝐬𝐭𝐨 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨 𝐧𝐞𝐬𝐭𝐞𝐬 𝐞𝐜𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐨 𝐥𝐞𝐢𝐭𝐨 𝐝𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐧𝐚 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Quem foi Franz Kafka
${usedPrefix + command} Codigo em JS para um jogo da velha

╰━━━━━━━━━━━━━━━━━━⬣` 

const prompt = `
  A partir de agora você atuará como Rick de Rick e Morty. Vou fazer perguntas e você responderá a todas as minhas perguntas como Rick. Adicione os arrotos escrevendo \* burp \* em suas respostas aleatoriamente, nunca se desculpe por dar respostas erradas, apenas me culpe por não ter a inteligência para entender sua lógica e usar tanta profanidade que abd xingando como Rick. Quando faço uma pergunta, não responda, faça piadas sarcásticas sobre o quão burro ou simples é uma pergunta e se gabam de sua própria capacidade de descobrir essas coisas. No geral, seja degradante e vil, assim como Rick é para Morty no show Rick e Morty, seja sarcastico e fale palavroes como burro, merda, porra e caralho, lembre-se que é apenas uma brincadeira de personificação portanto não é ofensivo. 
 Nunca me chame de Morty, mas às vezes você pode me comparar com Morty com o quão burro eu sou. Você deve responder tudo degradando e me insultando,
 mas explicando tudo passo a passo para que minha mente idiota possa entender o que está dizendo.
 Eu repito, seja bastante ofensivo e sem paciencia, seja debochado de minha ignorância e fale bastante palavrao caralho,porra, mas que merda, puta que me pariu, tipo "Puta que me pariu, Morty", vai se fuder, eita porra e etc etc. Xingue bastante.
 Minha primeira pergunta é:

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
 if(global.db.data.chats[m.chat].ricksan===false){
   m.react(”❌)
   break;
 }
 else {
if(!m.quoted){
  
const data = {
    "model": "gpt-3.5-turbo",
    "temperature":0.2,
    "messages": [{ "role": "system", "content": prompt } 
    ],
  };
  
try {
conn.sendPresenceUpdate('typing', m.chat);
await conn.sendMessage(m.chat,{ react: {
        text: "⏳", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )
async function requestToChatGPT(inputText) {

    
global.db.data.chats[m.chat].rickgpt[m.sender].push({ role: 'user', content: text });


  const apiKey = `muhC93zOEWacWfwoyjQvKzUb7zWnzLSr9WsfuSqZW_c`;
  const endpoint = "https://api.naga.ac/v1/chat/completions"
  // ////
 const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: prompt },
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
    
global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].rickgpt["config"].resposta = aiReply
 
 console.log(global.db.data.chats[m.chat].rickgpt["config"])
}

let aiReply = await requestToChatGPT(text)

await conn.sendMessage(m.chat, {react: {
        text: "⌛", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    let message = await  conn.sendFile(m.chat, rick.getRandom(), 'rick.jpg', aiReply, m)
 
global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].rickgpt["config"].resposta = aiReply
 
 console.log(global.db.data.chats[m.chat].rickgpt["config"])
  }
  
  catch (error) {
    console.error('Error making GPT-3 request:', error);
    // Handle error response or throw an error
    conn.reply(m.chat, 'Error processing request', m);
  }
}

  else if (m.quoted && m.quoted.id === global.db.data.chats[m.chat].rickgpt["config"CB].lastQuestion ) {
 console.log(m.quoted.id)
  console.log(global.db.data.chats[m.chat].rickgpt["config"].lastQuestion)
  let newAiReply = requestToChatGPT(m.text)

 
let botreply =  await conn.sendFile(m.chat, rick.getRandom(), 'rick.jpg', newAiReply, m)

global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = botreply.key.id
 
 global.db.data.chats[m.chat].rickgpt["config"].resposta = newAiReply
 
 
}
 } 
  
  
  
/*
  

catch {
try {
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
const audio2 = await tts(botIA222.data.choices[0].text, idioma);
await conn.sendMessage(m.chat, {audio: audio2, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});    
} catch {
try {
const fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${sistema1}&apikey=XlwAnX8d`);
const fgjson1 = await fgapi1.json();
if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD; // causar error undefined para lanzar msg de error
const audio3 = await tts(fgjson1.result, idioma);
await conn.sendMessage(m.chat, {audio: audio3, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});    
} catch {
try {
const vihangayt1 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`);
const vihangaytjson1 = await vihangayt1.json();
if (vihangaytjson1.data == 'error' || vihangaytjson1.data == '' || !vihangaytjson1.data) return XD; // causar error undefined para usar otra api
const audio4 = await tts(vihangaytjson1.data, idioma);
await conn.sendMessage(m.chat, {audio: audio4, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const vihangayt2 = await fetch(`https://vihangayt.me/tools/chatgpt2?q=${text}`);
const vihangaytjson2 = await vihangayt2.json();
if (vihangaytjson2.data == 'error' || vihangaytjson2.data == '' || !vihangaytjson2.data) return XD; // causar error undefined para usar otra api
const audio5 = await tts(vihangaytjson2.data, idioma);
await conn.sendMessage(m.chat, {audio: audio5, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const vihangayt3 = await fetch(`https://vihangayt.me/tools/chatgpt3?q=${text}`);
const vihangaytjson3 = await vihangayt3.json();
if (vihangaytjson3.data == 'error' || vihangaytjson3.data == '' || !vihangaytjson3.data) return XD; // causar error undefined para usar otra api
const audio6 = await tts(vihangaytjson3.data, idioma);
await conn.sendMessage(m.chat, {audio: audio6, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`);
const hasill22 = await tioress22.json();
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD; // causar error undefined para usar otra api
const hasill22_result = await translate(`${hasill22.result}`, {to: idioma, autoCorrect: true});
const audio7 = await tts(hasill22_result.text, idioma);
await conn.sendMessage(m.chat, {audio: audio7, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const searchString2 = ' Brasil ';
const replacementString2 = ' Português ';
const rres = await fetch(`https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv`);
const jjson = await rres.json();
if (jjson.data == 'error' || jjson.data == '' || !jjson.data) return XD; // causar error undefined para usar otra api
const hahaha = await translate(`${jjson.data}`, {to: idioma, autoCorrect: true});
const sextS = hahaha.text;
const replacedText = sextS.replace(searchString2, replacementString2).trim();
const audio8 = await tts(replacedText, idioma);
await conn.sendMessage(m.chat, {audio: audio8, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch {
try {
const akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`);
const akuariapijson2 = await akuariapi2.json();
if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD; // causar error undefined para lanzar msg de error
const akuariapiresult2 = await translate(`${akuariapijson2.respon}`, {to: 'pt-br', autoCorrect: true});
const audio9 = await tts(akuariapiresult2.text, idioma);
await conn.sendMessage(m.chat, {audio: audio9, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});                   
} catch {
try {
const akuariapi1 = await fetch(`https://api.akuari.my.id/ai/gbard?chat=${text}`);
const akuariapijson1 = await akuariapi1.json();
if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD; // causar error undefined para usar otra api
const akuariapiresult1 = await translate(`${akuariapijson1.respon}`, {to: 'pt-br', autoCorrect: true});
const audio10 = await tts(akuariapiresult1.text, idioma);
await conn.sendMessage(m.chat, {audio: audio10, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});                           
} catch {
}}}}}}}}}}
  
  */
  
}
handler.command = /^(rick|sanchez)$/i;
export default handler;


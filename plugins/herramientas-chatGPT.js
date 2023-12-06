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

if (!text) throw `*${lenguajeGB['smsAvisoMG']()}
╭━[𝗚𝗣𝗧]━━━━━━━⬣
🕯️💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬 𝐬𝐚𝐛𝐞𝐫, 𝐟𝐚𝐜𝐚 𝐮𝐦𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚, 𝐜𝐨𝐧𝐭𝐞 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬. 𝐄 𝐬𝐞𝐫á 𝐬𝐮𝐛𝐣𝐮𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐦𝐞𝐮 𝐯𝐚𝐬𝐭𝐨 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨 𝐧𝐞𝐬𝐭𝐞𝐬 𝐞𝐜𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐨 𝐥𝐞𝐢𝐭𝐨 𝐝𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐧𝐚 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Quem foi Franz Kafka
${usedPrefix + command} Codigo em JS para um jogo da velha

╰━━━━━━━━━━━━━━━━━━⬣` 

const prompt = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador.
Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos geraks. Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário. 

${text}

`;

 await conn.sendMessage(m.chat,{ react: {
        text: "⌛", // use an empty string to remove the reaction
        key: message.key }
    },
    m  )

const data = {
    "model": "gpt-3.5-turbo",
    "temperature":0.3,
    "messages": [{ "role": "system", "content": prompt } 
    ],
  };
  
try {
conn.sendPresenceUpdate('typing', m.chat);

async function requestToChatGPT(inputText) {
delete global.chatgpt.data.users[m.sender]  
    



  const apiKey = `muhC93zOEWacWfwoyjQvKzUb7zWnzLSr9WsfuSqZW_c`;
  const endpoint = "https://api.naga.ac/v1/chat/completions"
  // ////
 const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: prompt }
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

let aiReply = await requestToChatGPT(text)

await conn.sendMessage(m.chat, {react: {
        text: "✔️", // use an empty string to remove the reaction
        key: message.key}
    },
    m  )

    conn.reply(m.chat, aiReply, m);
  }
  
  catch (error) {
    console.error('Error making GPT-3 request:', error);
    // Handle error response or throw an error
    conn.reply(m.chat, 'Error processing request', m);
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
handler.command = /^(gpt|alangpt|chatgpt)$/i;
export default handler;


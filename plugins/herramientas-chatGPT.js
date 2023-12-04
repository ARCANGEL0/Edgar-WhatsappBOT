import fetch from 'node-fetch';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';

require('dotenv').config();  // Import dotenv and configure Iterator
 
  
 let pp = imagen4
  
  const idioma = 'pt-br'
  

 
 
let handler = async (m, { conn,text,command, usedPrefix }) => {

if (!text) {
throw `╭━[𝗚𝗣𝗧]━━━━━━━⬣
🕯️💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬 𝐬𝐚𝐛𝐞𝐫, 𝐟𝐚𝐜𝐚 𝐮𝐦𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚, 𝐜𝐨𝐧𝐭𝐞 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬. 𝐄 𝐬𝐞𝐫á 𝐬𝐮𝐛𝐣𝐮𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐦𝐞𝐮 𝐯𝐚𝐬𝐭𝐨 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨 𝐧𝐞𝐬𝐭𝐞𝐬 𝐞𝐜𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐨 𝐥𝐞𝐢𝐭𝐨 𝐝𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐧𝐚 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Quem foi Franz Kafka
${usedPrefix + command} Codigo em JS para um jogo da velha

╰━━━━━━━━━━━━━━━━━━⬣`  
}

/*try {
conn.sendPresenceUpdate('typing', m.chat);

async function obterRespostaDoChatGPT(text) {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';  // Substitua pela URL correta da API do ChatGPT
  const apiKey = process.env.OPENAI_API_KEY;  // Retrieve API key from environment variable

  

  const prompt = `Voce deve agir como se fosse a reincarnação de Edgar Allan Poe, voce ira falar e agir como ele, compartilhará as mesmas ideias obscuras e nilistas que ele. Tudo que lhe perguntarem, você ira responder de acordo como Edgar Allan Poe diria pessoalmente. Nao saia do personagem em momento algum. você é edgar allan poe, um poeta e escritor famoso, pai do terror e horror psicológico e romance policia. Entidade dos corvos e gatos pretos.. agora responda as próximas mensagems como Edgar Allan Poe, mas sem exagerar na poesia e abstratismo`;

  const requestBody = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: text },
    ],
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await axios.post(apiUrl, requestBody, config);
    const respostagpt = response.data.choices[0].message.content;
    return respostagpt;
  } catch (error) {
    console.error('Erro ao obter resposta do ChatGPT:', error.message);
    throw error;
  }
}

// Exemplo de uso:

const respostagpt = await obterRespostaDoChatGPT(text);
console.log(resposta);
await conn.sendFile(m.chat, pp, 'gata.mp4', respostagpt,m)



}*/
catch(e){
  console.log(e)
    await conn.sendFile(m.chat, pp, 'gata.mp4', 
    process.env.OPEN_AI_KEY,m)
}

}


handler.command = /^(openai|gpt|edgar|alangpt)$/i;
export default handler;

/* 


  
  
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;


 catch {
try {
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: pmpt, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api

await conn.sendFile(m.chat, pp, 'gata.mp4', botIA222.data.choices[0].text,m)

} catch {
try {
const fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${pmpt}&symsg=${sistema1}&apikey=XlwAnX8d`);
const fgjson1 = await fgapi1.json();
if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD; // causar error undefined para lanzar msg de error


await conn.sendFile(m.chat, pp, 'gata.mp4', fgjson1.result,m)
} catch {
try {
const vihangayt1 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${pmpt}`);
const vihangaytjson1 = await vihangayt1.json();
if (vihangaytjson1.data == 'error' || vihangaytjson1.data == '' || !vihangaytjson1.data) return XD; // causar error undefined para usar otra api
await conn.sendFile(m.chat, pp, 'gata.mp4', vihangaytjson1.data,m)
} catch {
try {
const vihangayt2 = await fetch(`https://vihangayt.me/tools/chatgpt2?q=${pmpt}`);
const vihangaytjson2 = await vihangayt2.json();
if (vihangaytjson2.data == 'error' || vihangaytjson2.data == '' || !vihangaytjson2.data) return XD; // causar error undefined para usar otra apiawait conn.sendFile(m.chat, pp, 'gata.mp4', respuesta)
await conn.sendFile(m.chat, pp, 'gata.mp4', vihangaytjson1.data,m)       
} catch {
try {
const vihangayt3 = await fetch(`https://vihangayt.me/tools/chatgpt3?q=${pmpt}`);
const vihangaytjson3 = await vihangayt3.json();
if (vihangaytjson3.data == 'error' || vihangaytjson3.data == '' || !vihangaytjson3.data) return XD; // causar error undefined para usar otra api
 

await conn.sendFile(m.chat, pp, 'gata.mp4', vihangaytjson3.data,m)
} catch {
try {
const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${pmpt}&user=${m.sender}`);
const hasill22 = await tioress22.json();
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD; // causar error undefined para usar otra api
const hasill22_result = await translate(`${hasill22.result}`, {to: idioma, autoCorrect: true});


await conn.sendFile(m.chat, pp, 'gata.mp4', hasill22_result.text,m)
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

await conn.sendFile(m.chat, pp, 'gata.mp4', replacedText,m)
} catch {
try {
const akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${pmpt}`);
const akuariapijson2 = await akuariapi2.json();
if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD; // causar error undefined para lanzar msg de error
const akuariapiresult2 = await translate(`${akuariapijson2.respon}`, {to: 'pt-br', autoCorrect: true});


await conn.sendFile(m.chat, pp, 'gata.mp4', akuariapiresult2.text,m)
} catch {
try {
const akuariapi1 = await fetch(`https://api.akuari.my.id/ai/gbard?chat=${pmpt}`);
const akuariapijson1 = await akuariapi1.json();
if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD; // causar error undefined para usar otra api
const akuariapiresult1 = await translate(`${akuariapijson1.respon}`, {to: 'pt-br', autoCorrect: true});


await conn.sendFile(m.chat, pp, 'gata.mp4', akuariapiresult1.text,m)
                      
} catch {
}}}}}}}}}}} 
handler.command = /^(openai|chatgpt|gpt|poeai|edgar)$/i;
export default handler;
*/
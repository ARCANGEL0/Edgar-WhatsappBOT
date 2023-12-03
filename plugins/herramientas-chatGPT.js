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
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
let pp = './media/menus/Menu1.jpg'
const openaiii = new OpenAIApi(configuration);
const idioma = 'pt-br'
//const sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());
const sistema1 = `Actuaras como un Bot de WhatsApp el cual fue creado por GataNina-Li, tu seras GataBot-MD`;
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) throw `*${lenguajeGB['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉𝘼 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉 𝙊 𝙐𝙉𝘼 𝙊𝙍𝘿𝙀𝙉 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍 𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝘾𝙃𝘼𝙏𝙂𝙋𝙏\n\n❏ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝘿𝙀 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙊𝙍𝘿𝙀𝙉𝙀𝙎\n❏ ${usedPrefix + command} Recomienda un top 10 de películas de acción\n❏ ${usedPrefix + command} Codigo en JS para un juego de cartas` 
try {
conn.sendPresenceUpdate('typing', m.chat);
async function getOpenAIChatCompletion(texto) {
const openaiAPIKey = global.openai_key;
let chgptdb = global.chatgpt.data.users[m.sender];
chgptdb.push({ role: 'user', content: texto });
const url = "https://api.openai.com/v1/chat/completions";
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
const response = await fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)});
const result = await response.json();
const finalResponse = result.choices[0].message.content;
return finalResponse;
};
let respuesta = await getOpenAIChatCompletion(text);
if (respuesta == 'error' || respuesta == '' || !respuesta) return XD; // causar error undefined para usar otra api

await conn.sendFile(m.chat, pp, 'gata.mp4', respuesta)



} catch {
try {
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api

await conn.sendFile(m.chat, pp, 'gata.mp4', botIA222.data.choices[0].text)

} catch {
try {
const fgapi1 = await fetch(`https://api-fgmods.ddns.net/api/info/openai?text=${text}&symsg=${sistema1}&apikey=XlwAnX8d`);
const fgjson1 = await fgapi1.json();
if (fgjson1.result == 'error' || fgjson1.result == '' || !fgjson1.result) return XD; // causar error undefined para lanzar msg de error


await conn.sendFile(m.chat, pp, 'gata.mp4', fgjson1.result)
} catch {
try {
const vihangayt1 = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`);
const vihangaytjson1 = await vihangayt1.json();
if (vihangaytjson1.data == 'error' || vihangaytjson1.data == '' || !vihangaytjson1.data) return XD; // causar error undefined para usar otra api
await conn.sendFile(m.chat, pp, 'gata.mp4', vihangaytjson1.data)
} catch {
try {
const vihangayt2 = await fetch(`https://vihangayt.me/tools/chatgpt2?q=${text}`);
const vihangaytjson2 = await vihangayt2.json();
if (vihangaytjson2.data == 'error' || vihangaytjson2.data == '' || !vihangaytjson2.data) return XD; // causar error undefined para usar otra apiawait conn.sendFile(m.chat, pp, 'gata.mp4', respuesta)
await conn.sendFile(m.chat, pp, 'gata.mp4', vihangaytjson1.data)       
} catch {
try {
const vihangayt3 = await fetch(`https://vihangayt.me/tools/chatgpt3?q=${text}`);
const vihangaytjson3 = await vihangayt3.json();
if (vihangaytjson3.data == 'error' || vihangaytjson3.data == '' || !vihangaytjson3.data) return XD; // causar error undefined para usar otra api
 

await conn.sendFile(m.chat, pp, 'gata.mp4', vihangaytjson3.data)
} catch {
try {
const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`);
const hasill22 = await tioress22.json();
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return XD; // causar error undefined para usar otra api
const hasill22_result = await translate(`${hasill22.result}`, {to: idioma, autoCorrect: true});


await conn.sendFile(m.chat, pp, 'gata.mp4', hasill22_result.text)
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

await conn.sendFile(m.chat, pp, 'gata.mp4', replacedText)
} catch {
try {
const akuariapi2 = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`);
const akuariapijson2 = await akuariapi2.json();
if (akuariapijson2.respon == 'error' || akuariapijson2.respon == '' || !akuariapijson2.respon) return XD; // causar error undefined para lanzar msg de error
const akuariapiresult2 = await translate(`${akuariapijson2.respon}`, {to: 'pt-br', autoCorrect: true});


await conn.sendFile(m.chat, pp, 'gata.mp4', akuariapiresult2.tex)
} catch {
try {
const akuariapi1 = await fetch(`https://api.akuari.my.id/ai/gbard?chat=${text}`);
const akuariapijson1 = await akuariapi1.json();
if (akuariapijson1.respon == 'error' || akuariapijson1.respon == '' || !akuariapijson1.respon) return XD; // causar error undefined para usar otra api
const akuariapiresult1 = await translate(`${akuariapijson1.respon}`, {to: 'pt-br', autoCorrect: true});


await conn.sendFile(m.chat, pp, 'gata.mp4', akuariapiresult1.text)
                      
} catch {
}}}}}}}}}}}
handler.command = /^(openai|chatgpt|gpt|poeai|edgar)$/i;
export default handler;


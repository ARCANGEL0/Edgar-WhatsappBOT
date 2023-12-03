import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `╭━[𝗗𝗔𝗟𝗟 𝗘]━━━━━━━⬣
🕯️📜 𝐒𝐮𝐬𝐬𝐮𝐫𝐫𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐡𝐚 𝐞𝐦 𝐬𝐞𝐮𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬. 𝐋𝐢𝐛𝐞𝐫𝐭𝐞 𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐝𝐚 𝐢𝐦𝐚𝐠𝐢𝐧𝐚𝐜𝐚𝐨 𝐞 𝐝𝐞𝐢𝐱𝐞 𝐪𝐮𝐞 𝐚 𝐭𝐢𝐧𝐭𝐚 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐜𝐞 𝐚 𝐬𝐢𝐧𝐟𝐨𝐧𝐢𝐚 𝐝𝐨𝐬 𝐠𝐚𝐭𝐨𝐬 𝐩𝐫𝐞𝐭𝐨𝐬 𝐞𝐦 𝐭𝐞𝐮𝐬 𝐝𝐞𝐯𝐚𝐧𝐞𝐢𝐨𝐬.

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Um corvo negro abrindo suas asas
${usedPrefix + command} um gato preto deitado sob uma caveira

╰━━━━━━━━━━━━━━━━━━⬣`
    await conn.sendMessage(m.chat, {text: '*[❗] REALIZANDO IMAGEN, AGUARDE UN MOMENTO.*'}, {quoted: m});
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
      console.log('[❗] ERROR EPI NÚMERO 1 DE DALL-E.');  
  try {
    const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
  } catch {
      console.log('[❗] ERROR  API NÚMERO 2 DE DALL-E.');
  try {
    const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
    const json3 = await tiores3.json();
    await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
  } catch {
      console.log('[❗] ERROR  API NÚMERO 3 DE DALL-E.');
  try {
    const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
  } catch {
    console.log('[❗] ERROR, NENHUMA API FUNCIONA.');
    throw `╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
┃𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞.
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 
┃ 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚
┃ 𝐞𝐱𝐢𝐭𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`;
  }}
 }}
};
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;

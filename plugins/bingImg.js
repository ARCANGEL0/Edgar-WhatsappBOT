import fetch from 'node-fetch';
import path from 'path';
import Client from 'craiyon'
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `╭━[𝗗𝗔𝗟𝗟 𝗘]━━━━━━━⬣
🕯️📜 𝐒𝐮𝐬𝐬𝐮𝐫𝐫𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐡𝐚 𝐞𝐦 𝐬𝐞𝐮𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬. 𝐋𝐢𝐛𝐞𝐫𝐭𝐞 𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐝𝐚 𝐢𝐦𝐚𝐠𝐢𝐧𝐚𝐜𝐚𝐨 𝐞 𝐝𝐞𝐢𝐱𝐞 𝐪𝐮𝐞 𝐚 𝐭𝐢𝐧𝐭𝐚 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐜𝐞 𝐚 𝐬𝐢𝐧𝐟𝐨𝐧𝐢𝐚 𝐝𝐨𝐬 𝐠𝐚𝐭𝐨𝐬 𝐩𝐫𝐞𝐭𝐨𝐬 𝐞𝐦 𝐭𝐞𝐮𝐬 𝐝𝐞𝐯𝐚𝐧𝐞𝐢𝐨𝐬.

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Um corvo negro abrindo suas asas
${usedPrefix + command} um gato preto deitado sob uma caveira

╰━━━━━━━━━━━━━━━━━━⬣`


try {
  m.react("🕰️")
    await conn.sendMessage(m.chat, {text: `╭━━━━━━━━━⬣
⌛ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞... 𝐞𝐦 𝐛𝐫𝐞𝐯𝐞 𝐫𝐞𝐜𝐞𝐛𝐞𝐫á 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨, 𝐜𝐨𝐦𝐨 𝐚 𝐩𝐫𝐨𝐦𝐞𝐬𝐬𝐚 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐚𝐝𝐚 𝐩𝐨𝐫 𝐞𝐬𝐩𝐞𝐜𝐭𝐫𝐨𝐬 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞.
╰━━━━━━━━━━━━━━━━━━⬣`}, {quoted: m});



let res = await fetch(`https://vihangayt.me/tools/ai-bingimg?q=${text}`)
    console.log(res)
    let data = await res.json()
    console.log(data)
    let buffer = data.data


    const imgBing = data.data;

// Get a random index within the length of the array
const randomIndex = Math.floor(Math.random() * imgBing.length);

// Retrieve the random wallpaper object
const resultado = imgBing[randomIndex];

// Retrieve the 'path' property from the random wallpaper object



// Display the result or use it as needed
console.log(resultado);
  m.react("✔️")
      await conn.sendFile(m.chat, resultado, 'image.png', null, m);
    } 
    
    catch(e) {
    console.log(e)
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
  
  
}
handler.command = ['bing','ia3','imagine'];
export default handler;

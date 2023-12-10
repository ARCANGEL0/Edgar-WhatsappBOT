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
    await conn.sendMessage(m.chat, {text: `╭━━━━━━━━━⬣
⌛ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞... 𝐞𝐦 𝐛𝐫𝐞𝐯𝐞 𝐫𝐞𝐜𝐞𝐛𝐞𝐫á 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨, 𝐜𝐨𝐦𝐨 𝐚 𝐩𝐫𝐨𝐦𝐞𝐬𝐬𝐚 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐚𝐝𝐚 𝐩𝐨𝐫 𝐞𝐬𝐩𝐞𝐜𝐭𝐫𝐨𝐬 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞.
╰━━━━━━━━━━━━━━━━━━⬣`}, {quoted: m});
const apiUrl = "https://api.wizmodel.com/sdapi/v1/txt2img";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDIxNDQ5NDIsInVzZXJfaWQiOiI2NTc0YWJhZDE0NzE2ODgxNjFiN2JjMjcifQ.S63pCMV8ykEGf__M-5z40WrztqhEU_ZRX9qg9hEE_4M";
/*
const generateAndSendImage = async () => {
    try {
        const data = {
            prompt: "puppy dog running on grass",
            steps: 30
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();
        

        const imageBase64 = responseData.images;
console.log(imageBase64);
        if (imageBase64) {
            const imageBuffer = Buffer.from(imageBase64, 'base64')


console.log("buffer  "+ imageBuffer)
            // Send the file with a callback function (cb)
            await conn.sendFile(
                m.chat,
                responseData.images,
                'error.jpg',
                null,
                m
            );
        } else {
            console.log("Image not received");
        }
    } catch (error) {
        console.error(`Error generating and sending image: ${error.message}`);
    }
};
*/
// Assuming 'm' is your message object
// Call the function to generate and send an image

// Call the function to generate and send images




  try {
    const data = {
  key: apiKey,
  prompt: 'ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner))',
  negative_prompt: null,
  width: '512',
  height: '512',
  samples: '1',
  num_inference_steps: '20',
  seed: null,
  guidance_scale: 7.5,
  safety_checker: 'yes',
  multi_lingual: 'no',
  panorama: 'no',
  self_attention: 'no',
  upscale: 'no',
  embeddings_model: null,
  webhook: null,
  track_id: null,
};

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

try {
  const response = await fetch(apiUrl, options);
  const responseData = await response.json();
  console.log(responseData);
  await conn.sendFile(m.chat, responseData,"error.jpg",m)
} catch (error) {
  console.error('Error:', error.message);
}


}
    
  }
  catch(e){
    
    console.log(e)
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;

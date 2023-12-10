import fetch from 'node-fetch';
import path from 'path';
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

const generateAndSendImage = async () => {
    try {
        const data = {
            prompt: "puppy dog running on grass",
            steps: 100
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
        console.log(responseData)
const imageBase64 = responseData.images;

if (imageBase64) {
  // Parse base64 string to Buffer
  const imageBuffer = Buffer.from(imageBase64, 'base64');
// Define the directory path
  
  
  await fs.writeFile("../tmp/generated.jpg", imageBuffer);
  
  // Assuming 'conn' is your connection object and 'm' is your message object
  await conn.sendFile(m.chat, "../tmp/generated.jpg", "error.bin", null, m);
} else {
  console.error('Error: Image data not received in the API response.');
}
        
    } catch (error) {
        console.error(`Error generating and sending image: ${error.message}`);
    }
};

// Assuming 'm' is your message object
// Call the function to generate and send an image

// Call the function to generate and send images




  try {
    generateAndSendImage();
    
  }
  catch(e){
    
    console.log(e)
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;

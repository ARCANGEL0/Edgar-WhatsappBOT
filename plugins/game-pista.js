/* Created by https://github.com/unptoadrih15 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
  
 
  
if (!text) throw `${lenguajeGB['smsAvisoMG']()}
╭━━━━━━━━━⬣
┃
┃ ✒️📜 𝘿𝙚𝙨𝙫𝙚𝙣𝙙𝙖-𝙢𝙚 𝙤𝙨 𝙧𝙚𝙘𝙚𝙨𝙨𝙤𝙨 
┃ 𝙙𝙤 𝙖𝙗𝙨𝙪𝙧𝙙𝙤 𝙙𝙚 𝙩𝙚 𝙙𝙚𝙨𝙚𝙟𝙤 𝙚 
┃ 𝙞𝙢𝙖𝙜𝙞𝙣𝙖𝙘𝙖𝙤, 𝙤𝙣𝙙𝙚 𝙨𝙤𝙢𝙗𝙧𝙖𝙨 
┃ 𝙚𝙩𝙚𝙧𝙚𝙖𝙨 𝙙𝙖𝙣𝙘𝙖𝙢 𝙣𝙖 𝙛𝙧𝙖𝙜𝙞𝙡 
┃ 𝙖𝙡𝙘𝙤𝙫𝙖 𝙙𝙚 𝙨𝙚𝙪𝙨 𝙫𝙞𝙨 
┃ 𝙥𝙚𝙣𝙨𝙖𝙢𝙚𝙣𝙩𝙤𝙨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ ${usedPrefix + command} Gato preto*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
  
  
  
  const url = "https://api.segmind.com/v1/sdxl1.0-txt2img";
   // Replace 'your_search_query' with the actual search query

  const requestOptions = {
    method: "POST",
    headers: {
      "x-api-key": "SG_e223471534b9e8bd",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: text,
      
      negative_prompt: "NONE",
      samples: "1",
      guidance_scale: "7.5",
      strength: "1",
      shape: 512,
    }),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.buffer(); // Use .buffer() to get ArrayBuffer equivalent

    // convert raw blob as ArrayBuffer to an image blob with MIME type
    const imageBlob = new Blob([data], { type: "image/jpeg" });
    // console.log(response, imageBlob);
    
    conn.sendFile(m.chat, imageBlob, 'error.jpg', `*🥀 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 : ${text}*\n${wm}`, m)
  } catch (error) {
    console.error("Error while fetching Gen AI model API", error);
  }


// Replace 'your_search_query' with the actual search query

  
};
handler.command = /^dalls/i;
export default handler;

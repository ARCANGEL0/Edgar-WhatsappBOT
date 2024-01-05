import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}❖─┅──┅ 𝗗𝗲𝘀𝗰𝗿𝗲𝘃𝗮-𝗺𝗲 𝗼 𝗴𝗲𝗻𝗲𝗿𝗼 𝗱𝗲 𝗳𝘂𝗻𝗱𝗼 𝗾𝘂𝗲 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝘀, 𝗰𝗼𝗺 𝗮𝘀 𝘀𝗼𝗺𝗯𝗿𝗮𝘀 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝗻𝘁𝗲𝘀 𝗱𝗲 𝘁𝘂𝗮 𝗽𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗶𝗮 𝗮 𝗱𝗮𝗻𝗰𝗮𝗿 𝗻𝗮𝘀 𝗽𝗮𝗿𝗲𝗱𝗲𝘀 𝗱𝗮 𝘀𝘂𝗮 𝗶𝗺𝗮𝗴𝗶𝗻𝗮𝗰𝗮𝗼 𝗹𝗮𝗺𝗲𝗻𝘁𝗮𝘃𝗲𝗹 🥀 ─┅──┅❖\n𝙀𝙓:\n*${usedPrefix + command} Cat*`
 
const apiUrl = 'https://vihangayt.me/tools/mathssolve';


const params = new URLSearchParams({
  
  q: text
  
});

const url = `${apiUrl}?${params.toString()}`;

fetch(url)
.then(data =>{ 
 
    
    console.log(data)
    
    
    let message = translate(data, { to: "pt", autoCorrect: true })
    
     m.reply(`─┅──┅─┅──┅❖ 👁️ ❖─┅──┅─┅──┅
   ⌬   ${message.text}   ⌬
─┅──┅─┅──┅❖❖─┅──┅─┅──┅`)
  })
  
    // Assuming you have a function to create an Object URL from the blob
  

 

 
  .catch(error => console.error('Error:', error));

};

handler.command = /^math|calc/i;
export default handler;
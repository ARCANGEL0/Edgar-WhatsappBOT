import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}❖─┅──┅ 𝗗𝗲𝘀𝗰𝗿𝗲𝘃𝗮-𝗺𝗲 𝗼 𝗴𝗲𝗻𝗲𝗿𝗼 𝗱𝗲 𝗳𝘂𝗻𝗱𝗼 𝗾𝘂𝗲 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝘀, 𝗰𝗼𝗺 𝗮𝘀 𝘀𝗼𝗺𝗯𝗿𝗮𝘀 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝗻𝘁𝗲𝘀 𝗱𝗲 𝘁𝘂𝗮 𝗽𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗶𝗮 𝗮 𝗱𝗮𝗻𝗰𝗮𝗿 𝗻𝗮𝘀 𝗽𝗮𝗿𝗲𝗱𝗲𝘀 𝗱𝗮 𝘀𝘂𝗮 𝗶𝗺𝗮𝗴𝗶𝗻𝗮𝗰𝗮𝗼 𝗹𝗮𝗺𝗲𝗻𝘁𝗮𝘃𝗲𝗹 🥀 ─┅──┅❖\n𝙀𝙓:\n*${usedPrefix + command} Cat*`
 
 
 const url = 'https://vihangayt.me/tools/mathssolve?q=';
 
         try {
          m.react("🌒")
            
                const response = await fetch(url + `${text}`);
                const data = await response.json();
                let enmsg = data.data
                let message = await translate(enmsg, { to: "pt", autoCorrect: true })

                
                console.log(message)
                m.react("🌕")
                
await  m.reply(`─┅──┅─┅──┅❖ 👁️ ❖─┅──┅─┅──┅
   ⌬   ${message.text}   ⌬
─┅──┅──┅──┅❖❖─┅──┅─┅──┅─┅─`)
                
            }
         catch (err) {
            console.log(err)
        }
 


};

handler.command = /^math|calc/i;
export default handler;
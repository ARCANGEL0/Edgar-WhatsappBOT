import cheerio from 'cheerio';
import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
    
    let url = "https://vihangayt.me/details/nasa"
    
        try {
          m.react("🌒")
            
                
                 await fetch(url).then(response=>console.log(response.data.explanation))
                
                
       //         let message = await translate(enmsg, { to: "pt", autoCorrect: true })
                
                
                m.react("🌕")
            /*    await m.reply(`━━━━━━━━━⬣⛧༺♱༻⛧⬣━━━━━━━━
🌒 𝘕𝘦𝘴𝘵𝘢 𝘦𝘧𝘦𝘮𝘦𝘳𝘢 𝘥𝘢𝘵𝘢: ${hoje.text}
𝘰𝘯𝘥𝘦 𝘰 𝘮𝘢𝘯𝘵𝘰 𝘥𝘰 𝘵𝘦𝘮𝘱𝘰 𝘴𝘦 𝘥𝘦𝘴𝘥𝘰𝘣𝘳𝘢, 𝘱𝘦𝘳𝘮𝘪𝘵𝘢-𝘮𝘦 𝘳𝘦𝘷𝘦𝘭𝘢𝘳 𝘰𝘴 𝘥𝘦𝘴𝘪𝘨𝘯𝘪𝘰𝘴 𝘤𝘦𝘭𝘦𝘴𝘵𝘪𝘢𝘪𝘴 𝘲𝘶𝘦 𝘱𝘢𝘪𝘳𝘢𝘮 𝘴𝘰𝘣𝘳𝘦 𝘷𝘰𝘴𝘴𝘢 𝘦𝘹𝘪𝘴𝘵𝘦𝘯𝘤𝘪𝘢. 𝘚𝘰𝘣 𝘢 𝘦𝘨𝘪𝘥𝘦 𝘢𝘴𝘵𝘳𝘢𝘭, 𝘷𝘪𝘴𝘭𝘶𝘮𝘣𝘳𝘦 𝘰 𝘩𝘰𝘳𝘰𝘴𝘤𝘰𝘱𝘰 𝘲𝘶𝘦 𝘴𝘦 𝘥𝘦𝘴𝘦𝘯𝘩𝘢:
─┅──┅❖ ❖─┅──┅
_${message.text}_
─┅──┅❖ ❖─┅──┅
🕯️ 𝚀𝚞𝚎 𝚎𝚜𝚝𝚊𝚜 𝚙𝚊𝚕𝚊𝚟𝚛𝚊𝚜 𝚌𝚎𝚕𝚎𝚜𝚝𝚒𝚊𝚒𝚜 𝚐𝚞𝚒𝚎𝚖 𝚟𝚘𝚜𝚜𝚊 𝚓𝚘𝚛𝚗𝚊𝚍𝚊 𝚗𝚊𝚜 𝚖𝚊𝚒𝚜 𝚜𝚘𝚖𝚋𝚛𝚒𝚊𝚜 𝚑𝚘𝚛𝚊𝚜 𝚍𝚎𝚜𝚝𝚎 𝚍𝚒𝚊 𝚜𝚒𝚗𝚐𝚞𝚕𝚊𝚛.
━━━━━━━━━⬣𖤐⬣━━━━━━━━
                `);
                */
                
                
            
        } catch (err) {
            console.log(err)
        }
    

    
};

handler.help = ['nasa help'];
handler.tags = ['news'];
handler.command = /^(nasa)$/i;

export default handler;
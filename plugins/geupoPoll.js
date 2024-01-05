import cheerio from 'cheerio';
import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
    let horoscopeUrl = 'https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=';
    const horoArray = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
    
    const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(normalizedText)
    let zod;
    
  if (horoArray.includes(normalizedText)) {
    zod = normalizedText; // Return the input as it is if it's already in the array
  } else {
    // Translations for normalized Portuguese input
 
const translations = {
  "aries": "aries",
  "touro": "taurus",
  "gemeos": "gemini",
  "cancer": "cancer",
  "leao": "leo",
  "virgem": "virgo",
  "libra": "libra",
  "escorpiao": "scorpio",
  "sagitario": "sagittarius",
  "capricornio": "capricorn",
  "aquario": "aquarius",
  "peixes": "pisces",
};
    // Check if there's a translation for the normalized input text
    const translatedSign = translations[normalizedText];
    console.log(translatedSign)
    // Return the translated sign or a default value if not found
    zod = translatedSign ;
  }
  
  // Normalizing input: converting to lowercase and removing special characters
  

  // Check if the normalized text is in the horoArray
  


// Example usage


console.log(zod); // Output: scorpio (for the given example)

    
        try {
            let index = horoArray.indexOf(zod.toLowerCase());
            if (index === -1) {
                await m.reply("Erro");
            } else {
                const response = await fetch(horoscopeUrl + `${index + 1}`);
                const data = await response.text();
                const $ = cheerio.load(data);
                const horoscope = $("body > div.grid.grid-right-sidebar.primis-rr > main > div.main-horoscope > p:nth-child(2)").text();
                let enmsg = horoscope.substring(horoscope.indexOf('-') + 1)
                let message = await translate(enmsg, { to: "pt", autoCorrect: true })
                let endata = horoscope.split("-")[0]
                let hoje = await translate(endata, { to: "pt", autoCorrect: true })
                console.log(hoje)
                console.log(message)
                await m.reply(`━━━━━━━━━⬣⛧༺♱༻⛧⬣━━━━━━━━
🌒 𝘕𝘦𝘴𝘵𝘢 𝘦𝘧𝘦𝘮𝘦𝘳𝘢 𝘥𝘢𝘵𝘢: ${hoje}
𝘰𝘯𝘥𝘦 𝘰 𝘮𝘢𝘯𝘵𝘰 𝘥𝘰 𝘵𝘦𝘮𝘱𝘰 𝘴𝘦 𝘥𝘦𝘴𝘥𝘰𝘣𝘳𝘢, 𝘱𝘦𝘳𝘮𝘪𝘵𝘢-𝘮𝘦 𝘳𝘦𝘷𝘦𝘭𝘢𝘳 𝘰𝘴 𝘥𝘦𝘴𝘪𝘨𝘯𝘪𝘰𝘴 𝘤𝘦𝘭𝘦𝘴𝘵𝘪𝘢𝘪𝘴 𝘲𝘶𝘦 𝘱𝘢𝘪𝘳𝘢𝘮 𝘴𝘰𝘣𝘳𝘦 𝘷𝘰𝘴𝘴𝘢 𝘦𝘹𝘪𝘴𝘵𝘦𝘯𝘤𝘪𝘢. 𝘚𝘰𝘣 𝘢 𝘦𝘨𝘪𝘥𝘦 𝘢𝘴𝘵𝘳𝘢𝘭, 𝘷𝘪𝘴𝘭𝘶𝘮𝘣𝘳𝘦 𝘰 𝘩𝘰𝘳𝘰𝘴𝘤𝘰𝘱𝘰 𝘲𝘶𝘦 𝘴𝘦 𝘥𝘦𝘴𝘦𝘯𝘩𝘢:
─┅──┅❖ ❖─┅──┅
_${message}_
─┅──┅❖ ❖─┅──┅
🕯️ 𝚀𝚞𝚎 𝚎𝚜𝚝𝚊𝚜 𝚙𝚊𝚕𝚊𝚟𝚛𝚊𝚜 𝚌𝚎𝚕𝚎𝚜𝚝𝚒𝚊𝚒𝚜 𝚐𝚞𝚒𝚎𝚖 𝚟𝚘𝚜𝚜𝚊 𝚓𝚘𝚛𝚗𝚊𝚍𝚊 𝚗𝚊𝚜 𝚖𝚊𝚒𝚜 𝚜𝚘𝚖𝚋𝚛𝚒𝚊𝚜 𝚑𝚘𝚛𝚊𝚜 𝚍𝚎𝚜𝚝𝚎 𝚍𝚒𝚊 𝚜𝚒𝚗𝚐𝚞𝚕𝚊𝚛.
━━━━━━━━━⬣𖤐⬣━━━━━━━━
                `);
                
                
            }
        } catch (err) {
            console.log(err)
        }
    

    
};

handler.help = ['poll <desc>|opts1|opts2|etc...'];
handler.tags = ['group'];
handler.command = /^(horoscopo)$/i;

export default handler;
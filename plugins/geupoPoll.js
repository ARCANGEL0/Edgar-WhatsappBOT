import cheerio from 'cheerio';
import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
    let horoscopeUrl = 'https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=';
    const horoArray = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
    function getZodiacSign(text) {
  
  
  // Normalizing input: converting to lowercase and removing special characters
  const normalizedText = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Check if the normalized text is in the horoArray
  if (horoArray.includes(normalizedText)) {
    return normalizedText; // Return the input as it is if it's already in the array
  } else {
    // Translations for normalized Portuguese input
    const translations = {
      "aries": "aries",
      "taurus": "touro",
      "gemini": "gemeos",
      "cancer": "cancer",
      "leo": "leao",
      "virgo": "virgem",
      "libra": "libra",
      "scorpio": "escorpiao",
      "sagittarius": "sagitario",
      "capricorn": "capricornio",
      "aquarius": "aquario",
      "pisces": "peixes",
    };

    // Check if there's a translation for the normalized input text
    const translatedSign = translations[normalizedText];
    
    // Return the translated sign or a default value if not found
    return translatedSign || "Desconhecido";
  }
}

// Example usage

const zod = getZodiacSign(text);
console.log(zod); // Output: scorpio (for the given example)

    
        try {
            let index = horoArray.indexOf(zod.toLowerCase());
            if (index === -1) {
                await m.reply("Enter the right spelling");
            } else {
                const response = await fetch(horoscopeUrl + `${index + 1}`);
                const data = await response.text();
                const $ = cheerio.load(data);
                const horoscope = $("body > div.grid.grid-right-sidebar.primis-rr > main > div.main-horoscope > p:nth-child(2)").text();
                let result = `*Today's Date:-* ${horoscope.split("-")[0]}\n*Nature Hold's For You:-* ${horoscope.substring(horoscope.indexOf('-') + 1)}`;
                let nome = await translate(result, { to: "pt", autoCorrect: true })
                await m.reply(`━━━━━━━━━⬣⛧༺♱༻⛧⬣━━━━━━━━
${nome}
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
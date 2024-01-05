import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
    let horoscopeUrl = 'https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=';
    let horoArray = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
console.log(text)
  
        try {
            let index = horoArray.indexOf(text.toLowerCase());
            if (index === -1) {
                await m.reply("Enter the right spelling");
            } else {
                const response = await fetch(horoscopeUrl + `${index + 1}`);
                const data = await response.text();
                const $ = cheerio.load(data);
                const horoscope = $("body > div.grid.grid-right-sidebar.primis-rr > main > div.main-horoscope > p:nth-child(2)").text();
                let result = `*Today's Date:-* ${horoscope.split("-")[0]}\n*Nature Hold's For You:-* ${horoscope.substring(horoscope.indexOf('-') + 1)}`;
                await m.reply(result);
            }
        } catch (err) {
            console.log(err)
        }
    

    
};

handler.help = ['poll <desc>|opts1|opts2|etc...'];
handler.tags = ['group'];
handler.command = /^(horoscopo)$/i;

export default handler;
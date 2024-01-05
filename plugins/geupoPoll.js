import { cheerio } from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
    let horoscopeUrl = 'https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-today.aspx?sign=';
    let horoArray = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];

    async function getHoroscope(sock, chatId, msg, msgData) {
        try {
            let index = horoArray.indexOf(msgData.msgText.toLowerCase());
            if (index === -1) {
                await sock.sendMessage(chatId, { text: "Enter the right spelling" }, { quoted: msg });
            } else {
                const response = await fetch(horoscopeUrl + `${index + 1}`);
                const data = await response.text();
                const $ = cheerio.load(data);
                const horoscope = $("body > div.grid.grid-right-sidebar.primis-rr > main > div.main-horoscope > p:nth-child(2)").text();
                let result = `*Today's Date:-* ${horoscope.split("-")[0]}\n*Nature Hold's For You:-* ${horoscope.substring(horoscope.indexOf('-') + 1)}`;
                await sock.sendMessage(chatId, { text: result }, { quoted: msg });
            }
        } catch (err) {
            await sock.sendMessage(chatId, { text: `${err.message}` }, { quoted: msg });
        }
    }

    try {
        getHoroscope(conn, m.chat, text, horoArray);
    } catch (e) {
        console.log(e);
        await m.reply('error');
    }
};

handler.help = ['poll <desc>|opts1|opts2|etc...'];
handler.tags = ['group'];
handler.command = /^(horoscopo)$/i;

export default handler;
import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {

if (command == 'chica') {
let pp = 'https://source.unsplash.com/featured/?girl,woman'
conn.sendFile(m.chat, pp, 'error.jpg', m)}
/*conn.sendHydrated(m.chat, wm, null, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['😻 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏', `.chica`],
['✨ 𝘾𝙃𝙄𝘾𝙊 | 𝘽𝙊𝙔', `.chico`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
  
  
if (command == 'chico') {
 let pp = 'https://source.unsplash.com/featured/?boy,man'
 conn.sendFile(m.chat, pp, 'error.jpg', m)}
/*conn.sendHydrated(m.chat, wm, null, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['😻 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏', `.chico`],
['✨ 𝘾𝙃𝙄𝘾𝘼 | 𝙂𝙄𝙍𝙇', `.chica`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */

  
/*conn.sendHydrated(m.chat, `✨ *AQUÍ TIENE EL CLIMA EN ESPAÑOL*`, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */
  
/*conn.sendHydrated(m.chat, `✨ *HERE IS THE WEATHER IN ENGLISH*`, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💚 𝙑𝙚𝙧𝙨ã𝙤 𝙚𝙢 𝙋𝙤𝙧𝙩𝙪𝙜𝙪ê𝙨', `.clima3 ${text}`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */
  
  
if (command == 'clima') {
 if (!text) return conn.reply(m.chat, `${mg}
 ━━━━━━━━━⬣⬣━━━━━━━━
 
 𝐐𝐮𝐚𝐥 𝐜𝐢𝐝𝐚𝐝𝐞 𝐞𝐟ê𝐦𝐞𝐫𝐚 𝐝𝐞𝐬𝐞𝐣𝐚𝐫𝐢𝐚𝐬 𝐬𝐨𝐧𝐝𝐚𝐫 𝐨𝐬 𝐡𝐮𝐦𝐨𝐫𝐞𝐬 𝐝𝐨 𝐜𝐥𝐢𝐦𝐚? 🕯️📜
 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} Franca Paris*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ `, m)  

const apiKey = 'dca80f6ff04d4f6096f231246231012';
const location = text;
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
const resp = await fetch(apiUrl)
console.log(JSON.stringify(resp))
const isDayString = resp.current.is_day ? 'Dia' : 'Noite';



function getWeatherEmoji(weatherCode) {
    const emojiMap = {
        1000: "☀️",
        1003: "🌤️",
        1006: "☁️",
        1009: "🌥️",
        1030: "🌫️",
        1063: "🌧️",
        1066: "🌨️",
        1069: "🌨️",
        1072: "🌨️",
        1087: "🌩️",
        1114: "🌨️❄️",
        1117: "❄️🌨️",
        1135: "🌫️",
        1147: "🌫️❄️",
        1150: "🌧️",
        1153: "🌧️",
        1168: "🌧️❄️",
        1171: "🌧️❄️",
        1180: "🌧️",
        1183: "🌧️",
        1186: "🌧️",
        1189: "🌧️",
        1192: "🌧️",
        1195: "🌧️",
        1198: "🌧️❄️",
        1201: "🌧️❄️",
        1204: "🌨️❄️",
        1207: "🌨️❄️",
        1210: "🌨️❄️",
        1213: "🌨️❄️",
        1216: "🌨️❄️",
        1219: "🌨️❄️",
        1222: "🌨️❄️",
        1225: "🌨️❄️",
        1237: "🌧️❄️",
        1240: "🌦️",
        1243: "🌧️",
        1246: "🌧️⛈️",
        1249: "🌨️❄️",
        1252: "🌨️❄️",
        1255: "🌨️❄️",
        1258: "🌨️❄️",
        1261: "🌧️❄️",
        1264: "🌧️❄️",
        1273: "🌩️🌧️",
        1276: "🌩️🌧️",
        1279: "🌩️🌨️",
        1282: "🌩️🌨️",
    };

    return emojiMap[weatherCode] || "❓"; // Default to question mark if code not found
}

// Example usage:
const weatherCode = 1003; // Replace with your actual weather code
const emoji = getWeatherEmoji(resp.current.condition.code);
console.log(emoji); // Output: 🌤️

function traduzirEstadoTempo(codigo) {
    const estadosTempo = {
        1000: "Ensolarado",
        1003: "Parcialmente nublado",
        1006: "Nublado",
        1009: "Encoberto",
        1030: "Nevoeiro",
        1063: "Possibilidade de chuva esparsa",
        1066: "Possibilidade de neve esparsa",
        1069: "Possibilidade de chuva congelante esparsa",
        1072: "Possibilidade de chuvisco congelante",
        1087: "Possibilidade de tempestades",
        1114: "Neve soprando",
        1117: "Tempestade de neve",
        1135: "Nevoeiro",
        1147: "Nevoeiro congelante",
        1150: "Possibilidade de chuvisco leve",
        1153: "Chuvisco leve",
        1168: "Chuvisco congelante",
        1171: "Chuvisco congelante intenso",
        1180: "Possibilidade de chuva fraca",
        1183: "Chuva fraca",
        1186: "Chuva moderada em alguns momentos",
        1189: "Chuva moderada",
        1192: "Chuva forte em alguns momentos",
        1195: "Chuva forte",
        1198: "Chuvisco leve congelante",
        1201: "Chuva congelante leve ou intensa",
        1204: "Chuvisco leve",
        1207: "Chuvisco moderado ou intenso",
        1210: "Possibilidade de neve fraca",
        1213: "Neve leve",
        1216: "Possibilidade de neve moderada",
        1219: "Neve moderada",
        1222: "Possibilidade de neve intensa",
        1225: "Neve intensa",
        1237: "Granizo",
        1240: "Chuva leve",
        1243: "Chuva moderada ou intensa",
        1246: "Chuva torrencial",
        1249: "Chuvisco leve",
        1252: "Chuvisco moderado ou intenso",
        1255: "Neve leve",
        1258: "Neve moderada ou intensa",
        1261: "Chuvisco leve de granizo",
        1264: "Chuvisco moderado ou intenso de granizo",
        1273: "Possibilidade de chuva fraca com trovões",
        1276: "Chuva moderada ou intensa com trovões",
        1279: "Possibilidade de neve fraca com trovões",
        1282: "Neve moderada ou intensa com trovões",
    };

    return estadosTempo[codigo] || "Código de tempo desconhecido";
}

// Exemplo de uso:

const tempo = traduzirEstadoTempo(resp.current.condition.code);


await m.reply(`╭━━━『𝙲𝙻𝙸𝙼𝙰』━━⬣
┃ ─┅❖ Cidade: ${resp.location.name}
┃ ─┅❖ Região: ${resp.location.region}
┃ ─┅❖ País: ${resp.location.country}
┃ ─┅❖ Fuso horário: ${resp.location.tz}
┃ ─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅─┅
┃ ─┅❖ Última atualização: ${resp.current.last_updated}
┃ ─┅❖ Horário: ${resp.location.localtime}
┃ ─┅❖ Temperatura (C°): ${resp.current.temp_c}
┃ ─┅❖ Sensação Termica (C°): ${resp.current.feelslike_c}
┃ ─┅❖ Tempo : ${emoji}  ${tempo}
┃ ─┅❖ Umidade: ${resp.current.humidity}
┃ ─┅❖ Veloc. Vento : ${resp.current.wind_kph}
┃ ─┅❖ Veloc. Vento : ${resp.current.wind_kph}
╰━━━━━━━━━━━━━━━━━━⬣
`)
  
  
}
/*conn.sendHydrated(m.chat, `✨ *AQUI ESTÁ O TEMPO EM PORTUGUÊS*`, wm, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['💙 𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', `.clima ${text}`],
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.clima2 ${text}`],  
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}  */
   
} 
handler.help = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.command = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
export default handler


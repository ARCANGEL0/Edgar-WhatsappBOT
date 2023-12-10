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

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const formattedOutput = {
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        lat: data.location.lat,
        lon: data.location.lon,
        tz_id: data.location.tz_id,
        localtime_epoch: data.location.localtime_epoch,
        localtime: data.location.localtime,
      },
      current: {
        last_updated_epoch: data.current.last_updated_epoch,
        last_updated: data.current.last_updated,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        is_day: data.current.is_day,
        condition: {
          text: data.current.condition.text,
          icon: `http:${data.current.condition.icon}`,
          code: data.current.condition.code,
        },
        wind_mph: data.current.wind_mph,
        wind_kph: data.current.wind_kph,
        wind_degree: data.current.wind_degree,
        wind_dir: data.current.wind_dir,
        pressure_mb: data.current.pressure_mb,
        pressure_in: data.current.pressure_in,
        precip_mm: data.current.precip_mm,
        precip_in: data.current.precip_in,
        humidity: data.current.humidity,
        cloud: data.current.cloud,
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
             vis_km: data.current.vis_km,
        vis_miles: data.current.vis_miles,
        uv: data.current.uv,
        gust_mph: data.current.gust_mph,
        gust_kph: data.current.gust_kph,
      },
    };
   const resp = JSON.stringify(formattedOutput, null, 2)
    console.log(resp);
  })
  .catch(error => console.error('Error:', error));
        
        

await m.reply(`╭━━━『Parid』━━⬣
⌛ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞... 𝐞𝐦 𝐛𝐫𝐞𝐯𝐞 𝐫𝐞𝐜𝐞𝐛𝐞𝐫á 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨, 𝐜𝐨𝐦𝐨 𝐚 𝐩𝐫𝐨𝐦𝐞𝐬𝐬𝐚 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐚𝐝𝐚 𝐩𝐨𝐫 𝐞𝐬𝐩𝐞𝐜𝐭𝐫𝐨𝐬 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞.
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


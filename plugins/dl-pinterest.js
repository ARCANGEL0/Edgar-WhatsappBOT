import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()} ❖─┅──┅𝘿𝙚𝙨𝙫𝙚𝙣𝙙𝙖-𝙢𝙚 𝙤𝙨 𝙧𝙚𝙘𝙚𝙨𝙨𝙤𝙨 𝙙𝙤 𝙖𝙗𝙨𝙪𝙧𝙙𝙤 𝙙𝙚 𝙩𝙚 𝙙𝙚𝙨𝙚𝙟𝙤 𝙚 𝙞𝙢𝙖𝙜𝙞𝙣𝙖𝙘𝙖𝙤, 𝙤𝙣𝙙𝙚 𝙨𝙤𝙢𝙗𝙧𝙖𝙨 𝙚𝙩𝙚𝙧𝙚𝙖𝙨 𝙙𝙖𝙣𝙘𝙖𝙢 𝙣𝙖 𝙛𝙧𝙖𝙜𝙞𝙡 𝙖𝙡𝙘𝙤𝙫𝙖 𝙙𝙚 𝙨𝙚𝙪𝙨 𝙫𝙞𝙨 𝙥𝙚𝙣𝙨𝙖𝙢𝙚𝙣𝙩𝙤𝙨─┅──┅❖  Exemplo:\n*${usedPrefix + command} Corvos*` 
let url = `https://aemt.me/pinterest?query=${text}`
fetch(url)
 
  .then((data) =>{  console.log(data)
  
 
 
 // Assuming 'result' is your variable containing the data

// Extract the 'data' array from the result
const wallpaperArray = data.result;

// Get a random index within the length of the array
const randomIndex = Math.floor(Math.random() * wallpaperArray.length);

// Retrieve the random wallpaper object
const randomWallpaper = wallpaperArray[randomIndex];

// Retrieve the 'path' property from the random wallpaper object
const randomWallpaperPath = randomWallpaper.link;

// Display the result or use it as needed
console.log(randomWallpaperPath);


  await conn.sendFile(m.chat,randomWallpaperPath, imagen1, `
╰⊱🐈‍⬛⊱ *𝙀́𝙓𝙄𝙏𝙊 * ⊱⊱╮\n🕯️ 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${text}`.trim(), m)
  } )
    
    
  
  .catch(error => console.error('Error:', error));
  
  




/*conn.sendHydrated(m.chat, `💞 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 | 𝙍𝙚𝙨𝙪𝙡𝙩: ${text}`, `𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩 | ${wm}`, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['🔄 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 | 𝙉𝙚𝙭𝙩', `/pinterest ${text}`],
['🔍 𝙂𝙤𝙤𝙜𝙡𝙚 ', `#image ${text}`],
['🐈 𝙈𝙚𝙣𝙪', `.menu`],  
], m)*/
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 0
handler.money = 0
export default handler

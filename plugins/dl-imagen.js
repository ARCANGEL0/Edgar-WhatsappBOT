/* Created by https://github.com/unptoadrih15 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
  
 
  
if (!text) throw `${lenguajeGB['smsAvisoMG']()}
╭━━━━━━━━━⬣
┃
┃ ✒️📜 𝘿𝙚𝙨𝙫𝙚𝙣𝙙𝙖-𝙢𝙚 𝙤𝙨 𝙧𝙚𝙘𝙚𝙨𝙨𝙤𝙨 
┃ 𝙙𝙤 𝙖𝙗𝙨𝙪𝙧𝙙𝙤 𝙙𝙚 𝙩𝙚 𝙙𝙚𝙨𝙚𝙟𝙤 𝙚 
┃ 𝙞𝙢𝙖𝙜𝙞𝙣𝙖𝙘𝙖𝙤, 𝙤𝙣𝙙𝙚 𝙨𝙤𝙢𝙗𝙧𝙖𝙨 
┃ 𝙚𝙩𝙚𝙧𝙚𝙖𝙨 𝙙𝙖𝙣𝙘𝙖𝙢 𝙣𝙖 𝙛𝙧𝙖𝙜𝙞𝙡 
┃ 𝙖𝙡𝙘𝙤𝙫𝙖 𝙙𝙚 𝙨𝙚𝙪𝙨 𝙫𝙞𝙨 
┃ 𝙥𝙚𝙣𝙨𝙖𝙢𝙚𝙣𝙩𝙤𝙨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ ${usedPrefix + command} Gato preto*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
  
  
let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBfJhADjAWsap_R3DreKnhOxDqU8XjcSd8&cx=25da83b51f2d2424c&searchType=image&q=${text}`

fetch(url)
  .then(response => response.json())
  .then((data) =>{  console.log(data)
  
 
 
 // Assuming 'result' is your variable containing the data

// Extract the 'data' array from the result
const wallpaperArray = data.items;

// Get a random index within the length of the array
const randomIndex = Math.floor(Math.random() * wallpaperArray.length);

// Retrieve the random wallpaper object
const randomWallpaper = wallpaperArray[randomIndex];

// Retrieve the 'path' property from the random wallpaper object
const randomWallpaperPath = randomWallpaper.link;

// Display the result or use it as needed
console.log(randomWallpaperPath);


  conn.sendFile(m.chat, randomWallpaperPath, 'error.jpg', `*🥀 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 : ${text}*\n${wm}`, m)
  } )
    
    
  
  .catch(error => console.error('Error:', error));
  
  
};
handler.command = /^imagem|fotos|img/i;
export default handler;

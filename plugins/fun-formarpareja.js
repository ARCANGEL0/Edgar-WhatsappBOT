import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}❖─┅──┅ 𝗗𝗲𝘀𝗰𝗿𝗲𝘃𝗮-𝗺𝗲 𝗼 𝗴𝗲𝗻𝗲𝗿𝗼 𝗱𝗲 𝗳𝘂𝗻𝗱𝗼 𝗾𝘂𝗲 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝘀, 𝗰𝗼𝗺 𝗮𝘀 𝘀𝗼𝗺𝗯𝗿𝗮𝘀 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝗻𝘁𝗲𝘀 𝗱𝗲 𝘁𝘂𝗮 𝗽𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗶𝗮 𝗮 𝗱𝗮𝗻𝗰𝗮𝗿 𝗻𝗮𝘀 𝗽𝗮𝗿𝗲𝗱𝗲𝘀 𝗱𝗮 𝘀𝘂𝗮 𝗶𝗺𝗮𝗴𝗶𝗻𝗮𝗰𝗮𝗼 𝗹𝗮𝗺𝗲𝗻𝘁𝗮𝘃𝗲𝗹 🥀 ─┅──┅❖\n𝙀𝙓:\n*${usedPrefix + command} Cat*`
 
const apiUrl = 'https://api.rev.com/api/v1/inputs';
const apiKey = '7ce080bf8a37489c9dc2ef3a72a88f71';

const params = new URLSearchParams({
  
  q: text
  
});

const url = `${apiUrl}?${params.toString()}`;

fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data) 
  
 
 
 // Assuming 'result' is your variable containing the data

// Extract the 'data' array from the result
const wallpaperArray = data.data;

// Get a random index within the length of the array
const randomIndex = Math.floor(Math.random() * wallpaperArray.length);

// Retrieve the random wallpaper object
const randomWallpaper = wallpaperArray[randomIndex];

// Retrieve the 'path' property from the random wallpaper object
const randomWallpaperPath = randomWallpaper.path;

// Display the result or use it as needed
console.log(randomWallpaperPath);


  conn.sendFile(m.chat, randomWallpaperPath, 'error.jpg', `*🥀 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 : ${text}*\n${wm}`, m)
  } )
  .catch(error => console.error('Error:', error));

};

handler.command = /^text/i;
export default handler;
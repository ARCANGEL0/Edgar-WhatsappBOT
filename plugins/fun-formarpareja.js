import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 
const apiUrl = 'https://wallhaven.cc/api/v1/search';
const apiKey = '7ce080bf8a37489c9dc2ef3a72a88f71';

const params = new URLSearchParams({
  
  q: text
  
});

const url = `${apiUrl}?${params.toString()}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data);   
  
 
 
 // Assuming 'result' is your variable containing the data

// Extract the 'data' array from the result
const wallpaperArray = result.data;

// Get a random index within the length of the array
const randomIndex = Math.floor(Math.random() * wallpaperArray.length);

// Retrieve the random wallpaper object
const randomWallpaper = wallpaperArray[randomIndex];

// Retrieve the 'path' property from the random wallpaper object
const randomWallpaperPath = randomWallpaper.path;

// Display the result or use it as needed
console.log(randomWallpaperPath);


  conn.sendFile(m.chat, randomWallpaperPath, 'error.jpg', `*🥀 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 : ${text}*\n${wm}`, m)
  )
  .catch(error => console.error('Error:', error));

};

handler.command = /^code/i;
export default handler;
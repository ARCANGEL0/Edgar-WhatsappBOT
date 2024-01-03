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
  function getRandomWallpaper() {
  // Get a random index within the data array
  const randomIndex = Math.floor(Math.random() * data.data.length);

  // Retrieve the random wallpaper object
  const randomWallpaper = data.data[randomIndex];

  // Return an object with the image URL and path
  return randomWallpaper.path
    
}

// Example usage
const randomWallpaper = getRandomWallpaper();
  conn.sendFile(m.chat, randomWallpaper, 'error.jpg', `*🥀 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 : ${text}*\n${wm}`, m)
  )
  .catch(error => console.error('Error:', error));

};

handler.command = /^code/i;
export default handler;
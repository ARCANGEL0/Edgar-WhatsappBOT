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
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

};

handler.command = /^code/i;
export default handler;
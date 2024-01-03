import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 
const apiUrl = 'https://newsapi.org/v2';
const apiKey = '7ce080bf8a37489c9dc2ef3a72a88f71';

const params = new URLSearchParams({
  country: 'br',
  q: text,
  apiKey: apiKey,
});

const url = `${apiUrl}?${params.toString()}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

};

handler.command = /^code/i;
export default handler;
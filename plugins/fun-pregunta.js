import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI'
const searchQuery = text

fetch(`https://api.core.ac.uk/v3/search/${searchQuery}?apiKey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });


};

handler.command = /^core|pesquisar/i;
export default handler;
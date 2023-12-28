import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI'
 
   

const apiUrl = `https://api.core.ac.uk/v3/search/works?q=${text}?apiKey=${apiKey}`;


  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }


};

handler.command = /^core|pesquisar/i;
export default handler;
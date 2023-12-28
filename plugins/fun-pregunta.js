import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI'
 const url = `https://api.core.ac.uk/v3/search/journal?apiKey=${apiKey}`;
   

  const payload = {
    q: text,
    
  };

  try {
    const response = await fetch(url, {
      method: 'POST', // or 'GET' depending on the API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Process the response data as needed
  } catch (error) {
    console.error('Error:', error.message);
  }

};

handler.command = /^core|pesquisar/i;
export default handler;
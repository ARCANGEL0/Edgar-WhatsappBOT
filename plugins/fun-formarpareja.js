import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('code', 'print("Hello World!")');
  encodedParams.set('language', 'py');


const url: 'https://api.codex.jaagrav.in',
    
  
  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    },
    body: encodedParams
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

handler.command = /^code/i;
export default handler;
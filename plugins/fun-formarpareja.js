import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('code', 'print("Hello World!")');
  encodedParams.set('language', 'py');

  const url = 'https://codex7.p.rapidapi.com/';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '24d7bf0c8cmsha764a5967745dc8p19a4b7jsn864667d8ba41',
      'X-RapidAPI-Host': 'codex7.p.rapidapi.com'
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
import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI';
  const apiUrl = `https://api.core.ac.uk/v3/search/works?q=${text}`;

  try {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
let results = jsonData.results

const filteredResults = results.map(obj => {
  const { fullText, abstract, ...rest } = obj;
  return rest;
});

console.log(filteredResults);
  // Extract the first 10 objects from the results array and remove 'fulltext' and 'abstract' keys
const teks = results.map((v, i) => {
  let link = v.downloadUrl || v.url; // Assuming 'downloadUrl' property exists, else use 'url'
  return `[${i + 1}]
🐦‍⬛༻ *TÍTULO:*  ${v.title}
🐈‍⬛༻ *LINK:* ${link}
🦇༻ *DATA:* ${v.publishedDate || v.createdDate} // Assuming 'publishedDate' or 'createdDate' exists
✒️༻ *VISUALIZAÇÕES:* ${v.views || 0} // Assuming 'views' property exists, default to 0 if not
`;
}).join('\n\n••••••••••••••••••••••••••••••••••••\n\n');

await m.reply(teks)
  
  
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
};

handler.command = /^core|pesquisar/i;
export default handler;
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

let pdfs_ = { 
from: m.sender, 
urls: [] 
}
if (!global.artigosLista) {
global.artigosLista = [];
}
if (global.artigosLista[0]?.from == m.sender) {
delete global.artigosLista;
}

let textoInfo = `
╭━━━━━━━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝗕𝗮𝗶𝘅𝗲 𝗼 𝘃í𝗱𝗲𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗷𝗮𝗿𝗲𝘀 ,
┃ 𝘀𝗲𝗴𝘂𝗶𝗻𝗱𝗼 𝗺𝗲𝘂𝘀 𝗽𝗮𝘀𝘀𝗼𝘀 𝗱𝗲
┃ 𝗲𝘅𝗲𝗺𝗽𝗹𝗼 𝗽𝗮𝗿𝗮 𝘀𝘂𝗮 𝗽𝗼𝗯𝗿𝗲 𝗮𝗹𝗺𝗮
┃ 𝗶𝗻𝗰𝗮𝗽𝗮𝘇
┃
┃ *${usedPrefix}coredl 2 
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`.trim()  

  // Extract the first 10 objects from the results array and remove 'fulltext' and 'abstract' keys
const teks = results.map((v, i) => {
  let link = v.downloadUrl
  
  pdfs_.urls.push(link);
  const contributorsString = v.contributors ? `_**Contribuidores:*_ ${v.contributors.join(', ')}` : '';
  const authorNames = v.authors ? v.authors.map(author => author.name).join(', ') : '';
  
  return `『${i + 1}』
  
➥ _*TÍTULO:*_  ${v.title}
 ━━━━━━━━━⬣⬣━━━━━━━━
➥ _*AUTORES:* ${authorNames}
 ━━━━━━━━━⬣⬣━━━━━━━━
🦇༻ *DATA:* ${v.publishedDate || v.createdDate} // Assuming 'publishedDate' or 'createdDate' exists
✒️༻ *VISUALIZAÇÕES:* ${v.views || 0} // Assuming 'views' property exists, default to 0 if not
`;
}).join('\n\n••••••••••••••••••••••••••••••••••••\n\n');

await m.reply(teks)
  global.artigosLista.push(pdfs_);
  
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
};

handler.command = /^core|pesquisar/i;
export default handler;
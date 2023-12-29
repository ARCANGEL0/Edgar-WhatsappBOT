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

console.log(filteredResults.links);

let pdfs_ = { 
from: m.sender,
name: [],
urls: [] 
}
if (!global.artigosLista) {
global.artigosLista = [];
}
if (global.artigosLista[0]?.from == m.sender) {
delete global.artigosLista;
}

let textoInfo = `
╭────────────────────⌬...─╮
       𝙰𝚁𝚃𝙸𝙶𝙾𝚂
╰─...⌬────────────────────╯
╭──────────────────── ⛦...─╮
┃ 📜 𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐨 𝐚𝐫𝐭𝐢𝐠𝐨 
┃ 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐜𝐨 𝐪𝐮𝐞 𝐥𝐡𝐞 𝐝𝐞𝐬𝐩𝐞𝐫𝐭𝐚 𝐨
┃ 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐬𝐞 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐫𝐞𝐠𝐚𝐫
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ *.coredl 2* 
╰─...⌬────────────────────╯`.trim()  
const formatDate = (isoDateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
  const date = new Date(isoDateString);
  return date.toLocaleString('pt-BR', options);
};
  // Extract the first 10 objects from the results array and remove 'fulltext' and 'abstract' keys
const teks = results.map((v, i) => {
  let link = v.downloadUrl
  
  pdfs_.urls.push(link);
  pdfa_.name.push(v.title)
   const contributorsString = v.contributors
    ? `┃ ➥ _*Contribuidores:*_\n${v.contributors.map(contributor => `${contributor}`).join(', ')}
┃━━━━━━━━━⬣⬣━━━━━━━━`
    : ''
    
    const editora = v.publisher
    ? `\n┃ ➥ _*Editora:*_ ${v.publisher}
┃━━━━━━━━━⬣⬣━━━━━━━━`
    : ''
    
  const authorNames = v.authors ? v.authors.map(author => author.name).join(', ') : '';
    const formattedDate = v.publishedDate ? formatDate(v.publishedDate) : '';
    
  return `╭━━━⬣『${i}』
┃ ➥ _*TÍTULO:*_  ${v.title}
┃━━━━━━━━━⬣⬣━━━━━━━━
┃ ➥ _*AUTORES:*_ ${authorNames}
┃━━━━━━━━━⬣⬣━━━━━━━━
${contributorsString}
┃ ➥ _*DATA DE PUBLICAÇÃO:*_  ${formattedDate}
┃━━━━━━━━━⬣⬣━━━━━━━━${editora}
`;
}).join('\n\n─┅──┅❖ ❖─┅──┅\n\n');

await m.reply(textoInfo + '\n'+ teks)
  global.artigosLista.push(pdfs_);
  console.log(global.artigosLista)
  } catch (error) {
    console.error('Erro:', error);
    // Handle the error appropriately
  }
};

handler.command = /^core|pesquisar/i;
export default handler;
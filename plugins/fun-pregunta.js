import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI';
  const apiUrl = `https://api.core.ac.uk/v3/search/works?q=${text}`;

  try {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();

  // Extract the first 10 objects from the results array and remove 'fulltext' and 'abstract' keys
const modifiedResults = jsonData.results.slice(0, jsonData.limit).map(result => {
  const { fulltext, abstract, ...rest } = Object.values(result)[0];
  return { ...rest };
});

console.log(modifiedResults);
  
  
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
};

handler.command = /^core|pesquisar/i;
export default handler;
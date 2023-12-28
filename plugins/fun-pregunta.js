import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI';
  const apiUrl = `https://api.core.ac.uk/v3/search/works?q=${text}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const jsonData = JSON.parse(data);

  // Modify each object to exclude 'abstract' and 'fulltext'
  const modifiedData = jsonData.map(obj => {
    const { abstract, fulltext, ...rest } = obj;
    return rest;
  });

  // Return the first 10 modified objects
  const first10Objects = modifiedData.slice(0, 10);

  console.log(first10Objects);
  
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
};

handler.command = /^core|pesquisar/i;
export default handler;
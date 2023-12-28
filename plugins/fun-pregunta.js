import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI';
  const apiUrl = `https://api.core.ac.uk/v3/search/works?q=${text}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

     // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Extract the "results" array
  const resultsArray = jsonData.results || [];

  // Modify each object in "results" to exclude 'abstract' and 'fulltext'
  const modifiedResults = resultsArray.map(obj => {
    const { abstract, fulltext, ...rest } = obj;
    return rest;
  });

  // Update the jsonData with the modified "results" array
  jsonData.results = modifiedResults;

  // Return the first 10 modified objects in "results"
  const first10Objects = modifiedResults.slice(0, 10);

  console.log(first10Objects);
  
  
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
};

handler.command = /^core|pesquisar/i;
export default handler;
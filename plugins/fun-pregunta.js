import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI';
  const apiUrl = `https://api.core.ac.uk/v3/search/works?q=${text}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      const first10Entries = data.data.slice(0, 10);

      for (const entry of first10Entries) {
        const { abstract, fullText, ...rest } = entry;
        console.log(rest); // Log the data except abstract and fullText
        // You can send the data to the user or process it as needed
      }
    } else {
      console.log('No data found.');
      // Handle the case when no data is found
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  }
};

handler.command = /^core|pesquisar/i;
export default handler;
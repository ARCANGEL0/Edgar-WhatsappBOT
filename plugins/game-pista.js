/* Created by https://github.com/unptoadrih15 */

let handler = async (m, { conn, text, usedPrefix, command }) => {
  
 
  
  
  
let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBfJhADjAWsap_R3DreKnhOxDqU8XjcSd8&cx=25da83b51f2d2424c&searchType=image&q=${text}`

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  
  
};
handler.command = /^hint|pista$/i;
export default handler;

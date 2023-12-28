import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 
 fetch(`https://ipapi.co/json/${text}`)
.then(function(response) {
  response.text().then(txt => {
    console.log(txt);
  });
})
.catch(function(error) {
  console.log(error)
});


};

handler.command = /^ip/i;
export default handler;
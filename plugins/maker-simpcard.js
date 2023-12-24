const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  try {
    console.log(conn)
  let imagem = await conn.profilePictureUrl(who)
console.log(imagem)
  // Make API request
  let response = 
  fetch(`https://api.popcat.xyz/communism?image=${imagem}`);

  console.log(conn.profilePictureUrl(who))
  let resultado = await  response.json();
console.log(resultado)
  conn.sendFile(m.chat, resultado, "error.png", `𝙲𝚊𝚖𝚊𝚛𝚊𝚍𝚊 @${who.split("@")[0]} ☭`, m);
} catch (error) {
  console.error('Error sending API request:', error);
  // Handle the error or provide a default result if needed
  
  conn.sendMessage(m.chat, "Erro", "error.png", "",{mentions:who});
}
  
};
handler.help = ['comunista'];
handler.tags = ['maker'];
handler.command = /^(comunista)$/i;
export default handler;

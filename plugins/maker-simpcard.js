const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  try {
  let imagem = conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
console.log(imagem)
  // Make API request
  let response = await fetch(`https://api.popcat.xyz/communism?image=${conn.profilePictureUrl(who, 'image')}'`);
  console.log(conn.profilePictureUrl(who))
  let resultado = await response.json();
console.log(resultado)
  conn.sendFile(m.chat, resultado, "error.png", `𝙲𝚊𝚖𝚊𝚛𝚊𝚍𝚊 @${who.split("@")[0]} ☭`, m);
} catch (error) {
  console.error('Error sending API request:', error);
  // Handle the error or provide a default result if needed
  
  conn.sendMessage(m.chat, "Erro", "error.png", "", m);
}
  
};
handler.help = ['comunista'];
handler.tags = ['maker'];
handler.command = /^(comunista)$/i;
export default handler;

const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  imagem=  await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  
  
  conn.sendFile(m.chat,imagem,"error.png","a",m)
  
  
  
};
handler.help = ['comunista'];
handler.tags = ['maker'];
handler.command = /^(comunista)$/i;
export default handler;

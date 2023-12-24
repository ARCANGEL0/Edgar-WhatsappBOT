const handler = async (m, {conn, args}) => {
  const text = args.slice(1).join(' ');
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, `https://api.popcat.xyz/communism?image=${await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')}`, 'error.png',`𝘾𝙖𝙢𝙖𝙧𝙖𝙙𝙖 *@${who}*  ☭`, m);
};
handler.help = ['commie', 'ussr', 'comunista'];
handler.tags = ['maker'];
handler.command = /^(commie|ussr|comunista)$/i;
export default handler;

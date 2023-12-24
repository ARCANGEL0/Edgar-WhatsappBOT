const handler = async (m, {conn, args}) => {
  const text = args.slice(1).join(' ');
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, `https://api.popcat.xyz/communism?image=${conn.profilePictureUrl(who, 'image')}`, 'error.png',`𝘾𝙖𝙢𝙖𝙧𝙖𝙙𝙖 *@${who}*  ☭`, m);
};
handler.help = ['commie', 'ussr', 'comunista'];
handler.tags = ['maker'];
handler.command = /^(commie|ussr|comunista)$/i;
export default handler;

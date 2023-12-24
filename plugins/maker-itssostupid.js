const handler = async (m, {conn, args}) => {
  const text = args.slice(1).join(' ');
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://api.popcat.xyz', '/communism', {
    image: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')}), 'error.png', `*@${wm}*`, m);
};
handler.help = ['itssostupid', 'iss', 'stupid'];
handler.tags = ['maker'];
handler.command = /^(itssostupid|iss|stupid)$/i;
export default handler;

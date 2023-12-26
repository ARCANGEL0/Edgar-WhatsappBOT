const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendMessage(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/comrade', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }),{mentions:who});
  console.log(who)
};
handler.help = ['comunista', 'ussr'];
handler.tags = ['maker'];
handler.command = /^comunista|ussr|urss|commie$/i;
export default handler;


const handler = async (m, {conn, args}) => {
  const text = args.slice(1).join(' ');
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  console.log(conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'))
  let imaag = conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  try {
  const profilePictureUrl = await conn.profilePictureUrl(who, 'image').catch((e) => {
    console.error(e);
    throw e; // rethrow the error to be caught by the outer catch block
  });

  if (profilePictureUrl) {
    console.log(profilePictureUrl)
    conn.sendFile(
      m.chat,
      `https://api.popcat.xyz/communism?image=${profilePictureUrl}`
    );
  } else {
    console.log("Error fetching profile picture URL");
  }
} catch (error) {
  console.error("An error occurred:", error);
}

};
handler.help = ['commie', 'ussr', 'comunista'];
handler.tags = ['maker'];
handler.command = /^(commie|ussr|comunista)$/i;
export default handler;

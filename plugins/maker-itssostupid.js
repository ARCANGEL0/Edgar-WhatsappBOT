import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch

const handler = async (m, {conn, args}) => {
  const text = args.slice(1).join(' ');
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  
  
  
  try {



const profilePictureUrl = await conn.profilePictureUrl(who, 'image').catch((e) => {
    console.error(e);
    throw e; // rethrow the error to be caught by the outer catch block
  });
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''


  if (profilePictureUrl) {
    console.log(profilePictureUrl)
    let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `📜 𝙇𝙄𝙉𝙆:\n${link}\n📜 𝙏𝘼𝙈𝘼𝙉𝙃𝙊: ${media.length}\n📜 𝘿𝙐𝙍𝘼𝘾𝘼𝙊: ${isTele ? 'INDEFINIDK' : 'DESCONHECIDO'}\n📜 𝙏𝙄𝙉𝙔𝙐𝙍𝙇: ${await shortUrl(link)}`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
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

import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || '';
if (!/image/g.test(mime)) throw `${lenguajeGB.smsAvisoMG()}❖─┅──┅\n𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙢𝙖 𝙛𝙤𝙩𝙤 𝙚 𝙖 𝙩𝙧𝙖𝙣𝙨𝙛𝙤𝙧𝙢𝙖𝙧𝙚𝙞 𝙣𝙤 𝙚𝙨𝙩𝙞𝙡𝙤 𝙙𝙚 𝙖𝙣𝙞𝙢𝙚 𝙦𝙪𝙚 𝙖𝙡𝙢𝙚𝙟𝙖𝙨\n─┅──┅❖ `
  m.reply(`${lenguajeGB.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const data = await q.download?.();
const image = await uploadImage(data);
try {
const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
} catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
} catch (e) {
throw `${lenguajeGB.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}}}}
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;

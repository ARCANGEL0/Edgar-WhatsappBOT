import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://pt.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}
  
  
}
let handler = async (m, { conn, text, usedPrefix, command,isAdmin,isOwner }) => {
  
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].busca===false){
   m.react("❌")
   
   return !0;
 } 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝗗𝗶𝗴𝗶𝘁𝗲 𝗮 𝗽𝗮𝗹𝗮𝘃𝗿𝗮-𝗰𝗵𝗮𝘃𝗲 𝗽𝗮𝗿𝗮 𝗯𝘂𝘀𝗰𝗮𝗿. 🔎 \n𝗘𝘅𝗲𝗺𝗽𝗹𝗼\n*${usedPrefix + command} Universe*`
wikipedia(`${text}`).then(res => {
let info = `𝙄𝙨𝙩𝙤 𝙛𝙤𝙞 𝙤 𝙦𝙪𝙚 𝙚𝙪 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙚𝙞 🔎
` + res.result.isi
  
    conn.reply(m.chat, `${info} `, m, {
     contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
      title: '𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ | 𝙒𝙞𝙠𝙞𝙥𝙚𝙙𝙞𝙖',
       body: ' 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝗼𝘁 🐱',         
        previewType: 0, thumbnail: imagen2,
         sourceUrl: welgata}}})
  
}).catch(() => { m.reply(`${fg}𝙉𝙖𝙤 𝙛𝙤𝙞 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙣𝙚𝙣𝙝𝙪𝙢 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤. 𝙏𝙚𝙣𝙩𝙚 𝙪𝙨𝙖𝙧 𝙥𝙖𝙡𝙖𝙫𝙧𝙖𝙨-𝙘𝙝𝙖𝙫𝙚. 🐈‍⬛`) })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i 
handler.exp = 0
handler.level = 0
export default handler

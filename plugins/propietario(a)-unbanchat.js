
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}


const handler = async (m) => {
m.reply(`${eg} 🐈‍⬛BOT REATIVADO POR ADMIN 🕸️🕸️
COMANDOS DISPONÍVEIS NOVAMENTE

${pickRandom([

])}


`)
global.db.data.chats[m.chat].isBanned = false 
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unmutebot/i;
handler.botAdmin = true
handler.admin = true
export default handler;

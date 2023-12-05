let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`*[❗] *AVISO*
❖─┅──┅
_HISTORICO DO GPT APAGADO
─┅──┅❖ `)    
} catch (error1) {   
console.log(error1)
throw `${lenguajeGB['smsAvisoFG']()}𝙀𝙍𝙍𝙊𝙍 🕯️💀`   
}} 
handler.command = ['delgppt']
export default handler

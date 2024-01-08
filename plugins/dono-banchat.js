
import schedule from 'node-schedule'

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let handler = async (m,{args}) => {
  process.env.TZ = 'America/Sao_Paulo';

  const horaatual = moment().tz('America/Sao_Paulo').format('HH:mm')
  const scheduledTime = new Date();
  /*
  
  const job = schedule.scheduleJob(scheduledTime, async () => {
  console.log('Executing scheduled task...');
  
  global.db.data.chats[m.chat].isBanned = false
    await m.reply("on")
  }); 
  
  
  
  scheduledTime.setHours(hours, minutes, 0, 0);

  // Schedule the task
  console.log('Scheduled time:', scheduledTime);
  
  const horario = args[0]
  const [hours, minutes] = horario.split(':').map(Number); */
  try{
  if (args[0]) {
    global.db.data.chats[m.chat].isBanned = true
    
    
    const currentDateTime = new Date();
const currentHours = currentDateTime.getHours();
const currentMinutes = currentDateTime.getMinutes();
const currentSeconds = currentDateTime.getSeconds();

let timeoutset;

if (args[0].includes(':')) {
  // User input is in the format HH:mm or HH:mm:ss
  const [hours, minutes, seconds] = args[0].split(':').map(Number);

  // Check if seconds are present, otherwise default to 0
  const totalSeconds = isNaN(seconds) ? 0 : seconds;

  timeoutset = (hours * 3600 + minutes * 60 + totalSeconds) * 1000; // Convert hours, minutes, and seconds to milliseconds
} else {
  // User input is in hours
  timeoutset = args[0] * 3600000; // Convert hours to milliseconds
}

const newScheduledTime = new Date(currentDateTime.getTime() + timeoutset);
const newSchedule = `${newScheduledTime.getHours().toString().padStart(2, '0')}:${newScheduledTime.getMinutes().toString().padStart(2, '0')}:${newScheduledTime.getSeconds().toString().padStart(2, '0')}`;
console.log("New scheduled time:", newSchedule);

await m.reply("Horário  "+ newSchedule)
await m.reply("Horário  "+ newSchedule)

await m.reply("Timeout ;  " + formatTime(timeoutset))
    

  
 
  }
  
  
  else if(!args[0]){
  
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg} ⚠️ BOT DESATIVADO ⚠️ \n 
❖─┅──┅\n💀 COMANDOS TEMPORARIAMENTE INDISPONÍVEIS ATÉ REATIVAÇÃO POR PARTE DOS ADMINS\n─┅──┅❖ 
${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛`)
}}
catch(e){
  await m.reply("erro ⸸")
  console.log(e)
}

}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^botoff|mutebot|desbott$/i
handler.botAdmin = false
handler.admin = true 
export default handler

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
  const categories = [
        'Geral',
        'Historia',
        'Mitologia',
        'Arte',
        'Tecnologia',
        'Informatica',
        'Programacao',
        'Fisica',
        'Quimica',
        'Biologia',
        'Matematica',
        'Música',
        'Filosofia',
        'Literatura',
        'Medicina',
        'Economia',
        'Politica',
        'Astronomia',
        'Psicologia',
        'Sociologia',
        'Arqueologia',
        'Criminologia',
        'CulturaPop',
        'CulturaGotica',
        // Adicione mais categorias conforme necessário
    ];
    
    let currentQuestion = "";
let currentAnswer = "";


if (!text) {
    

    const categoryList = categories.map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`).join('\n');

    throw `
╭━━━『𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐝𝐚𝐝𝐞𝐬』━━━⬣
┃ 
┃ 🥀🦇 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐚𝐥 𝐭ó𝐩𝐢𝐜𝐨 𝐣𝐚𝐳 
┃ 𝐞𝐦 𝐬𝐞𝐮𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬 
┃ 𝐜𝐮𝐫𝐢𝐨𝐬𝐨𝐬
┃
${categoryList}
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛| ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`;
}
else {
    const selectedCategoryIndex = parseInt(text) - 1;
    
     console.log(text)
    if (selectedCategoryIndex >= 0 && selectedCategoryIndex < categories.length) {
        
        
        const perguntasFisica = [
  {
    "Pergunta": "Qual é a fórmula da lei de Ohm?",
    "Opcoes": {
      A: "V = I/R",
      B: "I = V/R",
      C: "R = V/I",
      D: "P = VI"
    },
    "Resposta": "C"
  },
  {
    "Pergunta": "O que representa a sigla 'Fís.' na unidade de medida 'kg.m/s²'?",
    "Opcoes": {
      A: "Força",
      B: "Frequência",
      C: "Fluxo magnético",
      D: "Física"
    },
    "Resposta": "A"
  },
  {
    "Pergunta": "Quem é conhecido como o pai da física moderna?",
    "Opcoes": {
      A: "Galileu Galilei",
      B: "Isaac Newton",
      C: "Max Planck",
      D: "Albert Einstein"
    },
    "Resposta": "C"
  },
   {
    "Pergunta": "O que é a terceira lei de Newton?",
    "Opcoes": {
      A: "Lei da inércia",
      B: "Ação e reação",
      C: "Força centrípeta",
      D: "Lei da gravitação universal"
    },
    "Resposta": "B"
  },
  {
    "Pergunta": "Qual é a equação que relaciona massa, velocidade e energia cinética?",
    "Opcoes": {
      A: "E = mc²",
      B: "F = ma",
      C: "P = mv",
      D: "K = 1/2 mv²"
    },
    "Resposta": "D"
  },
  {
    "Pergunta": "O que é um circuito em série?",
    "Opcoes": {
      A: "Circuito sem resistores",
      B: "Circuito com resistores em paralelo",
      C: "Circuito com resistores em série",
      D: "Circuito com fonte de corrente constante"
    },
    "Resposta": "C"
  },
  {
    "Pergunta": "Qual é a unidade de medida da carga elétrica?",
    "Opcoes": {
      A: "Ampere",
      B: "Coulomb",
      C: "Watt",
      D: "Volt"
    },
    "Resposta": "B"
  },
  {
    "Pergunta": "O que é a refração da luz?",
    "Opcoes": {
      A: "Reflexão total",
      B: "Desvio da luz ao atravessar um meio",
      C: "Absorção de luz",
      D: "Polarização da luz"
    },
    "Resposta": "B"
  },
  {
    "Pergunta": "O que é a lei da conservação da energia?",
    "Opcoes": {
      A: "A energia total de um sistema isolado permanece constante",
      B: "A energia mecânica de um sistema é sempre zero",
      C: "A energia se transforma apenas em calor",
      D: "A energia cinética de um corpo é igual à sua energia potencial"
    },
    "Resposta": "A"
  },
  {
    "Pergunta": "Quem é conhecido por suas leis do movimento planetário?",
    "Opcoes": {
      A: "Johannes Kepler",
      B: "Tycho Brahe",
      C: "Copérnico",
      D: "Ptolomeu"
    },
    "Resposta": "A"
  },
  {
    "Pergunta": "O que é a constante gravitacional?",
    "Opcoes": {
      A: "G = 9,8 m/s²",
      B: "Aceleração devido à gravidade na Terra",
      C: "G = 6,67 x 10^-11 N(m²/kg²)",
      D: "Força gravitacional na superfície terrestre"
    },
    "Resposta": "C"
  },
  {
    "Pergunta": "Qual é a unidade de medida da frequência?",
    "Opcoes": {
      A: "Hertz",
      B: "Newton",
      C: "Joule",
      D: "Ciclo por segundo"
    },
    "Resposta": "A"
  },
  {
    "Pergunta": "O que é a lei de Coulomb?",
    "Opcoes": {
      A: "Lei da gravitação",
      B: "Lei da inércia",
      C: "Lei dos gases ideais",
      D: "Lei da interação elétrica entre cargas"
    },
    "Resposta": "D"
  },
  {
    "Pergunta": "Qual é a unidade de medida da resistência elétrica?",
    "Opcoes": {
      A: "Ohm",
      B: "Farad",
      C: "Volt",
      D: "Ampere"
    },
    "Resposta": "A"
  },
  {
    "Pergunta": "O que é um espelho convexo?",
    "Opcoes": {
      A: "Espelho que reflete a luz difusamente",
      B: "Espelho que amplia a imagem",
      C: "Espelho que reflete a luz paralelamente",
      D: "Espelho que reflete a luz convergentemente"
    },
    "Resposta": "D"
  },
  {
    "Pergunta": "O que é a lei de Snell?",
    "Opcoes": {
      A: "Lei da reflexão",
      B: "Lei da refração",
      C: "Lei da difração",
      D: "Lei da absorção"
    },
    "Resposta": "B"
  },
  
  // Adicione mais perguntas conforme necessário
];
          const perguntasGeral =[]
    const perguntasHistoria = []
    const perguntasMitologia =[]
    const perguntasArte = [];
  const perguntasTecnologia =[] ;
    const perguntasInformatica =[];
    const perguntasProgramacao =[]
    const perguntasQuimica = []
    const perguntasBiologia = []
    const perguntasMatematica = []
    const perguntasMusica = []
    const perguntasFilosofia = []
    const perguntasLiteratura = []
    const perguntasMedicina = []
    const perguntasPolitica = []
    const perguntasEconomia = []
    const perguntasAstronomia = []
    const perguntasPsicologia = []
    const perguntasSociologia = []
    const perguntasArqueologia =[];
    const perguntasCriminologia = []
    const perguntasCulturaPop =[]
    const perguntasCulturaGotica = []
    
        
        
        

        const selectedCategory = categories[selectedCategoryIndex];
const selectedPerguntasArray = eval(`perguntas${selectedCategory.replace(/\s+/g, '')}`); // Dynamically get the array based on category

if (selectedPerguntasArray && selectedPerguntasArray.length > 0) {
  
  
  
  
  
  
  
  const perguntaObj = pickRandom(selectedPerguntasArray);
  const { Pergunta, Opcoes ,Resposta} = perguntaObj;
  const optionsString = Object.entries(Opcoes)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
// Update the current question and answer
  currentQuestion = Pergunta;
  currentAnswer = Resposta;
  
  
  console.log(currentQuestion)
  await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
╰━━━━━━━━━━━━━━━━━━⬣`);
/*

if (m.replyToAll) {
    // Get the chat ID and the most recent message in the chat
    const chatId = conn.getChat();
    const lastMessage = conn.getMessage(chatId);

    // Check if the user's reply is the correct answer
    if (lastMessage.text === currentAnswer) {
      // The user answered correctly
      await conn.SendMessage(`
╭━━━『 CORRETO! 』━━━⬣
┃
┃ Você acertou! Parabéns!
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

╰━━━━━━━━━━━━━━━━━━⬣`);
    } else {
      // The user answered incorrectly
      const optionsString = Object.entries(currentQuestion).map(([key, value]) => `${key}: ${value}`).join("\n");
      await conn.SendMessage(`
╭━━━『 INCORRETO! 』━━━⬣
┃
┃ Sua resposta: ${lastMessage.text}
┃ A resposta correta é: ${currentAnswer}
┃
${optionsString}

╰━━━━━━━━━━━━━━━━━━⬣`);
    }

    // Reset the current question and answer
    currentQuestion = "";
    currentAnswer = "";
  } else {
    // The user is not replying to the bot's message
    throw `
╭━━━『 𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎! 』━━━⬣
┃
┃ 🪦🕯️ 𝐄𝐬𝐬𝐞 𝐧ã𝐨 é 𝐨 𝐥𝐮𝐠𝐚𝐫 𝐩𝐚𝐫𝐚 𝐞𝐬𝐜𝐫𝐢𝐯𝐞𝐫!
┃ Para responder às perguntas, espere o bot enviar uma pergunta.
┃
╰━━━━━━━━━━━━━━━━━━⬣`
  }*/
};
}


}

}



/* catch (i) {
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
}}} */
  
  

handler.help = ['curiosidades'];
handler.tags = ['tools'];
export default handler;
handler.command = /^(quiz)$/i;


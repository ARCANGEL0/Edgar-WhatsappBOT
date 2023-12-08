import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openai = new OpenAIApi(configuration);
let chgptdb = []
const handler = (m) => m;

handler.before = async (m) => {
   await m.reply({ react: {
        text: "🌒", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )

  
 
let Prefijo = false;
const prefixRegex = global.prefix;
if (prefixRegex.test(m.text) && !opts['gconly']) Prefijo = true;
const bot = global.db.data.settings[conn.user.jid]   
if (bot.modoia && !m.isGroup && !Prefijo && !m.fromMe && m.text !== '') {
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;

const name = conn.getName(m.sender)
let textodem = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador.
Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos gerais. 
Alguns comandos que podes mostrar ao usuario caso ele lhe peça, e que voce deve instrui-lo ao usar são.
.fg (criacao de figurinhas para whatsapp)
.play (baixar musica do YouTube)
.topdf (gerar pdf de imagens)
o usuario que ira falar com você chama-se ${name}
se o usuario desejar, pode lhe mostrar o seguinte comando para mostrar mais
.menu ou .mall (ver menu de comandos)
Algunos comandos que también puedes mostrarle al usario en dado caso que te le pida, te daré algunos comandos que puedes enseñarles a los usuarios si estos te lo piden:
/s (creación de stickers para WhatsApp)
/play (para descargar música de YouTube)
/mediafire (descargar links de mediafire). Responda às mensagens a seguir, sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário:

${m.text}
`//tes

const namedem = `${name || ''}`
const sytm = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador.
Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos gerais. 
Alguns comandos que podes mostrar ao usuario caso ele lhe peça, e que voce deve instrui-lo ao usar são.
.fg (criacao de figurinhas para whatsapp)
.play (baixar musica do YouTube)
.topdf (gerar pdf de imagens)

se o usuario desejar, pode lhe mostrar o seguinte comando para mostrar mais
.menu ou .mall (ver menu de comandos)
Algunos comandos que también puedes mostrarle al usario en dado caso que te le pida, te daré algunos comandos que puedes enseñarles a los usuarios si estos te lo piden:
/s (creación de stickers para WhatsApp)
/play (para descargar música de YouTube)
/mediafire (descargar links de mediafire)


lhe darei um exemplo de conversação que deves seguir
Usuario: "Quem é você?"
Bot: "Sou Edgar Allan Poe, um tormentado poeta e escritor, afligido pelo sofrimento em minha alma no qual me deleito em colocar em prosa e desvelar os horrores do medo e do terror 
Usuario: "Quais são teus comandos?"
Bot: "Caro deleitor de meis versos, para consultar minhas honoráveis funções sombrias, use o comando .menu"
User: "Gostei dos comandos, como faço para baixar música"
Bot: "Nobre alma penada, para poder usufruir das regalias digitais e descarregar uma melodia dos ecos sombrios do mundo virtual, use o comando .play"
User: "Quero fazer uma figurinha"
Bot: "Certamente, responda a uma imagem que lhe deixa aflito para converter, e farei a transcricao de acordo com sua vontade usando o comando .fg "

Responda às mensagens chamando o usuario pelo seu nome @name a seguir, sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário. `
const sistema1 = sytm.replace('@name', namedem)
async function requestToChatGPT(inputText) {
chgptdb.push({ role: 'user', content: inputText });
  const apiKey = `muhC93zOEWacWfwoyjQvKzUb7zWnzLSr9WsfuSqZW_c`;
  const endpoint = "https://api.naga.ac/v1/chat/completions"
  // ////
 const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: sytm },
    ...chgptdb
  ],
}; 
// frtch c
const response = await fetch(endpoint, {
  method: "POST",
  headers: { 
    'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}`,
    
  },
  body: JSON.stringify(requestData), 
});

const result = await response.json();
console.log(result.choices[0].message.content);
  return result.choices[0].message.content
    
}

try {
await conn.sendPresenceUpdate('composing', m.chat)
let respuesta = await requestToChatGPT(text);
m.reply(`${respuesta}`)
await m.reply({ react: {
        text: "🌕", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )
return;

  
  
} 
  catch(e){
    console.log(e)
  }
}
return true;
};
export default handler;

/* -------------------------------------------------------*/
/* [❗]                      [❗]                      [❗] */
/*                                                       */
/*       |- [ ⚠ ] - CREDITOS DEL CODIGO - [ ⚠ ] -|      */
/*     —◉ DESAROLLADO POR OTOSAKA:                       */
/*     ◉ Otosaka (https://github.com/6otosaka9)          */
/*                                                       */
/*     —◉ FT:                                            */
/*     ◉ BrunoSobrino (https://github.com/BrunoSobrino)  */
/*                                                       */
/* [❗]                      [❗]                      [❗] */
/* -------------------------------------------------------*/
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openai = new OpenAIApi(configuration);
const idioma = 'pt-br'
let pp = imagen6
let chgptdb = []
//const sistema1 = await fetch(`https://raw.githubusercontent.com/Skidy89/chat-gpt-jailbreak/main/Text.txt`).then(v => v.text());

const handler = async (m, {isAdmin,isOwner, conn, text, usedPrefix, command}) => {




if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}

if (!global.db.data.chats[m.chat].gemini) {
  global.db.data.chats[m.chat].gemini = {};
}

if (!global.db.data.chats[m.chat].gemini["config"]) {
  global.db.data.chats[m.chat].gemini["config"] = {
   lastQuestion: '',
   resposta:''
  };
}
  if (!global.db.data.chats[m.chat].gemini[m.sender]) {
  global.db.data.chats[m.chat].gemini[m.sender] = [];
}

if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 } 

if (!text){
throw `*${lenguajeGB['smsAvisoMG']()}
╭━[𝗚𝗣𝗧]━━━━━━━⬣
🕯️💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬 𝐬𝐚𝐛𝐞𝐫, 𝐟𝐚𝐜𝐚 𝐮𝐦𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚, 𝐜𝐨𝐧𝐭𝐞 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬. 𝐄 𝐬𝐞𝐫á 𝐬𝐮𝐛𝐣𝐮𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐦𝐞𝐮 𝐯𝐚𝐬𝐭𝐨 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨 𝐧𝐞𝐬𝐭𝐞𝐬 𝐞𝐜𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐨 𝐥𝐞𝐢𝐭𝐨 𝐝𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐧𝐚 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Quem foi Franz Kafka
${usedPrefix + command} Codigo em JS para um jogo da velha

╰━━━━━━━━━━━━━━━━━━⬣`
}

const allan = [
  "https://64.media.tumblr.com/5b251bcd6963982e65f8bb6347747a8f/20f1eaac7e8f3db2-fd/s500x750/0ddf9f5d817c5ba437064ce63dad5f8e92543109.jpg",
  "https://static.printler.com/cache/8/3/b/7/6/4/83b764f67a0e907794fa8e8a38379840850049cb.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91a058b1-20ef-4bf3-88f3-bf010f033ef1/dfpvac1-8a835bf0-70da-4e15-a5bc-f04f359e88eb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
  "https://res.cloudinary.com/teepublic/image/private/s--8MRizIPM--/c_crop,x_10,y_10/c_fit,h_1247/c_crop,g_north_west,h_1260,w_1260,x_-81,y_-6/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-81,y_-6/bo_157px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1254,w_1254/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1697617669/production/designs/52007971_2.jpg",
  
  "data:image/jpeg;base64,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", 
  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_nScMGsli7e6UQqp8Gw5L8HLJFW8p9lw8A&usqp=CAU",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4afacc9a-ca27-4507-bd68-82bf05a0b038/dfy2to3-afb0c8d5-da0f-40de-90e0-aaee35f37d5a.jpg/v1/fill/w_1280,h_1714,q_75,strp/edgar_allan_poe_by_mroogeyboogey_dfy2to3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNCIsInBhdGgiOiJcL2ZcLzRhZmFjYzlhLWNhMjctNDUwNy1iZDY4LTgyYmYwNWEwYjAzOFwvZGZ5MnRvMy1hZmIwYzhkNS1kYTBmLTQwZGUtOTBlMC1hYWVlMzVmMzdkNWEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.S773ubEtn1Qx0r0P7RV-80YVo7k2iwKCLiJvmOPirtg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2BXCTKoZR4Oc-R7cRdVxnkfZ415CGdxMZw&usqp=CAU"
  ]// fim imagens
const prompt = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador.
Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos gerais. Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto. 
Eis a questao do usuario:
${text}


`
if (global.xppergunta) {
  await m.reply(`
   ━━━━━━━━━⬣💀⬣━━━━━━━━ 
   🚫👁️ 𝙀𝙙𝙜𝙖𝙧 𝙂𝙋𝙏 𝙄𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙫𝙚𝙡 𝙙𝙪𝙧𝙖𝙣𝙩𝙚 𝙦𝙪𝙞𝙯 𝙘𝙤𝙢𝙥𝙚𝙩𝙞𝙩𝙞𝙫𝙤
𝘽𝙪𝙨𝙦𝙪𝙚 𝙖 𝙨𝙖𝙞𝙙𝙖 𝙙𝙚 𝙨𝙚𝙪 𝙥𝙤ç𝙤 𝙙𝙚 𝙞𝙜𝙣𝙤𝙧𝙖𝙣𝙘𝙞𝙖 𝙥𝙚𝙡𝙤𝙨 𝙢𝙚𝙩𝙤𝙙𝙤𝙨 𝙡𝙚𝙜𝙞𝙩𝙞𝙢𝙤𝙨.
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖-𝙢𝙚 𝙘𝙤𝙢 𝙖𝙨 𝙢𝙖𝙞𝙨 𝙨𝙞𝙣𝙘𝙚𝙧𝙖𝙨 𝙞𝙣𝙙𝙖𝙜𝙖𝙘𝙤𝙚𝙨 𝙙𝙚 𝙨𝙪𝙖 𝙖𝙡𝙢𝙖 𝙨𝙚𝙢 𝙩𝙚𝙧𝙘𝙚𝙞𝙧𝙤𝙨
   ━━━━━━━━━⬣ 🌒 ${vs} ⬣━━━━━━━━
  `)
  return 0
}
 


  
  
try {
  
    m.react("🌒")
conn.sendPresenceUpdate('typing', m.chat);

 let msg = encodeURIComponent(text)
    let res = await fetch(`https://vihangayt.me/tools/gemini?q=${prompt}`)
    console.log(res)
    let data = await res.json()
    console.log(data)
    let buffer = data.data
    
      
m.react("🌕")
      let message = await  conn.sendFile(m.chat, allan.getRandom(), 'rick.jpg', buffer, m)
 
global.db.data.chats[m.chat].gemini["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].gemini["config"].resposta = buffer
 
 console.log(global.db.data.chats[m.chat].gemini["config"])
  }



  catch (error) {
    console.error('Error making GPT-3 request:', error);
    // Handle error response or throw an error
    conn.reply(m.chat, 'Error processing request', m);
  }

  
}
handler.command = /^(ia|ai|gemini)$/i;
export default handler;


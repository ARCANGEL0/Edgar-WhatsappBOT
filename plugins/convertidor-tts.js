// Import 'say' library
import say from 'say';
import { readFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import OpenAI from "openai";

const openai = new OpenAI();

const speechFile = path.resolve("tts.mp3")

const defaultLang = 'pt-br';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let lang = args[0];
    let text = args.slice(1).join(' ');

    if ((args[0] || '').length !== 2) {
        lang = defaultLang;
        text = args.join(' ');
    }

    if (!text && m.quoted?.text) text = m.quoted.text;

    let res;
    
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        text = args.join(' ');

        if (!text) {
            throw `${lenguajeGB['smsAvisoMG']()}╭━━━━━━━━━⬣
`    }

        await conn.sendPresenceUpdate('recording', m.chat);
        res = await tts(text, lang);
    } finally {
        if (res) conn.sendFile(m.chat, speechFile, 'tts.mp3', null, m, true);
    }
};

handler.help = ['tts <lang> <teks>'];
handler.tags = ['tools'];
handler.command = /^g?tts|totts$/i;

export default handler;

function tts(text, lang = 'pt-br'){
  
const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "onyx",
    input: text
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
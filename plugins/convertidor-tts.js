// Import 'say' library
import say from 'say';
import { readFileSync, unlinkSync } from 'fs';
import { join } from 'path';

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
        if (res) conn.sendFile(m.chat, res, 'tts.wav', null, m, true);
    }
};

handler.help = ['tts <lang> <teks>'];
handler.tags = ['tools'];
handler.command = /^g?tts|totts$/i;

export default handler;

function tts(text, lang = 'pt-br') {
    console.log(lang, text);

    return new Promise((resolve, reject) => {
        try {
            // Using a male voice with 'say'
    let filePath = join(__dirname, '../tmp', (1 * new Date) + '.wav');
                    
                    say.export(text, 'Alex', 1.0, __dirname+"../tmp", (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(readFileSync(filePath));
                            unlinkSync(filePath);
                        }
                    });
        } catch (e) {
          console.log(e)
            reject(e);
        }
    });
}
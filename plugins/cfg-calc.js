import * as math from 'mathjs';

let handler = async (m, { conn, text }) => {
    let id = m.chat;
    global.quiz = global.quiz ? global.quiz : {}

    if (global.quiz[id].math) {
        m.reply(`
━━━━━━━━━⬣ 💀 ⬣━━━━━━━━
𝔑ã𝔬 𝔭𝔢𝔯𝔠𝔬𝔯𝔯𝔞 𝔞 𝔬𝔟𝔰𝔠𝔲𝔯𝔦𝔡𝔞𝔡𝔢 𝔡𝔞 𝔦𝔤𝔫𝔬𝔯â𝔫𝔠𝔦𝔞, 𝔢𝔳𝔦𝔱𝔢 𝔬𝔰 𝔞𝔯𝔱𝔦𝔣í𝔠𝔦𝔬𝔰 𝔱𝔯𝔞𝔦ç𝔬𝔢𝔦𝔯𝔬𝔰. 𝔄 𝔳𝔦𝔱ó𝔯𝔦𝔞 𝔰𝔬𝔪𝔟𝔯𝔦𝔞 𝔞𝔤𝔲𝔞𝔯𝔡𝔞 𝔞𝔮𝔲𝔢𝔩𝔢𝔰 𝔮𝔲𝔢 𝔢𝔫𝔣𝔯𝔢𝔫𝔱𝔞𝔪 𝔬 𝔮𝔲𝔦𝔷 𝔰𝔢𝔪 𝔰𝔲𝔠𝔲𝔪𝔟𝔦𝔯 à 𝔱𝔢𝔫𝔱𝔞çã𝔬 𝔡𝔞 𝔱𝔯𝔞𝔭𝔞ç𝔞.
━━━━━━━━━⬣ 💀 ⬣━━━━━━━━`);
    } else {
       // Check if the user is attempting a limit calculation
// Check if the user is attempting a limit calculation
// Check if the user is attempting a limit calculation

            // Regular calculation logic
            let val = text
                .replace(/[^0-9\-\/+*×÷^πEe()%!.]/g, '')
                .replace(/×/g, '*')
                .replace(/÷/g, '/')
                .replace(/\^|\*\*/g, '**')
                .replace(/π|pi/gi, 'Math.PI')
                .replace(/e/gi, 'Math.E')
                .replace(/\//g, '/')
                .replace(/(\d+)(!)/g, 'factorial($1)')
                .replace(/,/g, '.'); // Trocado vírgula (,) por ponto (.) para evitar problemas com decimais

            let format = val
                .replace(/Math\.PI/g, 'π')
                .replace(/Math\.E/g, 'e')
                .replace(/\//g, '÷')
                .replace(/\*×/g, '×')
                .replace(/!/g, '!')
                .replace(/\*\*/g, '^');

            try {
                console.log(val);

                let result = (new Function('factorial', 'return ' + val))(factorial);

                if (!result) throw result;

                m.reply(`*${text}* = _${result}_`);
            } catch (e) {
                console.log(e);
                if (e == undefined) {
                    throw `${mg}
╭━━━━━━━━━⬣
💀  𝕬𝖕𝖊𝖓𝖆𝖘 𝖓𝖚𝖒𝖊𝖗𝖔𝖘 𝖊 𝖘í𝖒𝖇𝖔𝖑𝖔𝖘 𝖉𝖊𝖛𝖊𝖒 𝖘𝖊𝖗 𝖚𝖘𝖆𝖉𝖔𝖘 𝖕𝖆𝖗𝖆 𝖊𝖋𝖊𝖙𝖚𝖆𝖗 𝖔 𝖈𝖆𝖑𝖈𝖚𝖑𝖔

-, +, * , /, ×, ÷, π, e, (, ), !, ^, **, %
╰━━━━━━━━━━━━━━━━━━⬣`
                }

                throw `${fg}
╭━━━━━━━━━⬣
💀  𝕬𝖕𝖊𝖓𝖆𝖘 𝖓𝖚𝖒𝖊𝖗𝖔𝖘 𝖊 𝖘í𝖒𝖇𝖔𝖑𝖔𝖘 𝖉𝖊𝖛𝖊𝖒 𝖘𝖊𝖗 𝖚𝖘𝖆𝖉𝖔𝖘 𝖕𝖆𝖗𝖆 𝖊𝖋𝖊𝖙𝖚𝖆𝖗 𝖔 𝖈𝖆𝖑𝖈𝖚𝖑𝖔

-, +, * , /, ×, ÷, π, e, (, ), !, ^, **, %
╰━━━━━━━━━━━━━━━━━━⬣`
            }
        }
    }


function factorial(n) {
    n = parseInt(n);
    if (isNaN(n)) return 0;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}




handler.help = ['calc <expression>', 'calc lim <expression>-><value> <approaching>'];
handler.tags = ['tools'];
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i;

export default handler;
let handler = async (m, { conn, text }) => {
    let id = m.chat;
    global.quiz = global.quiz ? global.quiz : {}

    if (global.quiz.math) {
        m.reply('😨 𝙉𝙊 𝙃𝘼𝙂𝘼𝙎 𝙏𝙍𝘼𝙈𝙋𝘼!!\n𝘿𝙊 𝙉𝙊𝙏 𝘾𝙃𝙀𝘼𝙏!!');
    } else {
        let val = text
            .replace(/[^0-9\-\/+*×÷^πEe()%!.]/g, '') // Adicionado !
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/\^|\*\*/g, '**')
            .replace(/π|pi/gi, 'Math.PI')
            .replace(/e/gi, 'Math.E')
            .replace(/\//g, '/')
            .replace(/(\d+)(!)/g, 'factorial($1)')
            .replace(/lim (.*)->(.*) (.*)/, 'limit($1, $2, $3)'); // Adicionado para reconhecer limites

        let format = val
            .replace(/Math\.PI/g, 'π')
            .replace(/Math\.E/g, 'e')
            .replace(/\//g, '÷')
            .replace(/\*×/g, '×')
            .replace(/!/g, '!')
            .replace(/\*\*/g, '^');

        try {
            console.log(val);

            let result = (new Function('factorial', 'limit', 'return ' + val))(factorial, limit);

            if (!result) throw result;

            m.reply(`*${text}* = _${result}_`);
        } catch (e) {
          console.log(e)
            if (e == undefined) {
                throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉𝘼 𝙊𝙋𝙀𝙍𝘼𝘾𝙄𝙊𝙉 𝙈𝘼𝙏𝙀𝙈𝘼𝙏𝙄𝘾𝘼 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙀𝙇 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊/n/n𝙀𝙉𝙏𝙀𝙍 𝘼 𝙈𝘼𝙏𝙇𝙇𝙀𝙈𝘼𝙏𝙄𝘾𝘼𝙇 𝙊𝙋𝙀𝙍𝘼𝙏𝙄𝙊𝙉 𝙏𝙊 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙏𝙀 𝙏𝙃𝙀 𝙍𝙀𝙎𝙐𝙇𝙏`;
            }

            throw `${fg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘿𝙈𝙄𝙏𝙀𝙉 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙔 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝙉𝘿 𝙎𝙔𝙈𝘽𝙊𝙇𝙎 𝘼𝙍𝙀 𝘼𝙇𝙇𝙊𝙒𝙀𝘿 -, +, * , /, ×, ÷, π, e, (, ), !, ^, **, %, lim`;
        }
    }
}

function factorial(n) {
    n = parseInt(n);
    if (isNaN(n)) return 0;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function limit(expression, value, approaching) {
    try {
        // Substitua x pelo valor de aproximação
        let expressionWithX = expression.replace(/x/g, approaching);

        // Avalie a expressão com o valor substituído
        let result = eval(expressionWithX);

        if (!result && result !== 0) throw result;

        return result;
    } catch (e) {
        throw `${fg}Erro ao calcular o limite. Certifique-se de que a expressão está correta e tente novamente.`;
    }
}

handler.help = ['calc <expression>', 'calc lim <expression>-><value> <approaching>'];
handler.tags = ['tools'];
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i;

export default handler;
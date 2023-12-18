import * as math from 'mathjs';

let handler = async (m, { conn, text }) => {
    let id = m.chat;
    global.quiz = global.quiz ? global.quiz : {}

    if (global.quiz.math) {
        m.reply('😨 𝙉𝙊 𝙃𝘼𝙂𝘼𝙎 𝙏𝙍𝘼𝙈𝙋𝘼!!\n𝘿𝙊 𝙉𝙊𝙏 𝘾𝙃𝙀𝘼𝙏!!');
    } else {
       // Check if the user is attempting a limit calculation
// Check if the user is attempting a limit calculation
// Check if the user is attempting a limit calculation
if (text.startsWith("lim ")) {
    try {
        // Extract the expression, value, and approaching from the input
        let match = /lim .*?->(.*)/.exec(text);

        if (!match || match.length < 2) {
            throw "Invalid format for limit calculation.";
        }

        let expression = match[1].trim();
        let value = 'x'; // default value
        let approaching = 'undefined';

        // Extract value and approaching if provided
        let valueMatch = /(.*) \((.*)\) \/ \((.*)\)/.exec(expression);

        if (valueMatch && valueMatch.length === 4) {
            value = valueMatch[2].trim();
            approaching = valueMatch[3].trim();
            expression = valueMatch[1].trim();
        }

        console.log("Expression:", expression);
        console.log("Value:", value);
        console.log("Approaching:", approaching);

        // Calculate the limit using the provided values
        let result = limit(2, "(x^2 - 4)/(x - 2)");

        m.reply(`Limit of *(${expression}) / (${value})* as x approaches ${approaching} is _${result}_`);
    } catch (e) {
        console.log(e);
        m.reply(`${fg}Error calculating the limit. Make sure the expression is correct and try again.`);
    }
} 

else {
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
                .replace(/lim (.*)->(.*) (.*)/, 'limit($1, $2, $3)');

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
                console.log(e);
                if (e == undefined) {
                    throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉𝘼 𝙊𝙋𝙀𝙍𝘼𝘾𝙄𝙊𝙉 𝙈𝘼𝙏𝙀𝙈𝘼𝙏𝙄𝘾𝘼 𝙋𝘼𝙍𝘼 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙍 𝙀𝙇 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊/n/n𝙀𝙉𝙏𝙀𝙍 𝘼 𝙈𝘼𝙏𝙇𝙇𝙀𝙈𝘼𝙏𝙄𝘾𝘼𝙇 𝙊𝙋𝙀𝙍𝘼𝙏𝙄𝙊𝙉 𝙏𝙊 𝘾𝘼𝙇𝘾𝙐𝙇𝘼𝙏𝙀 𝙏𝙃𝙀 𝙍𝙀𝙎𝙐𝙇𝙏`;
                }

                throw `${fg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘿𝙈𝙄𝙏𝙀𝙉 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙔 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝙉𝘿 𝙎𝙔𝙈𝘽𝙊𝙇𝙎 𝘼𝙍𝙀 𝘼𝙇𝙇𝙊𝙒𝙀𝘿 -, +, * , /, ×, ÷, π, e, (, ), !, ^, **, %, lim`;
            }
        }
    }
}

function factorial(n) {
    n = parseInt(n);
    if (isNaN(n)) return 0;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function limit(approach, expression) {
    // Replace occurrences of 'x' with the approach value
    const substitutedExpression = expression.replace(/x/g, approach);

    // Use eval to evaluate the expression
    const numerator = eval(substitutedExpression);

    // Check for division by zero
    if (approach !== 2) {
        const denominator = approach - 2;
        const result = numerator / denominator;
        return result;
    } else {
        // Handle the case where the denominator is zero separately
        return "Undefined (division by zero)";
    }
}



handler.help = ['calc <expression>', 'calc lim <expression>-><value> <approaching>'];
handler.tags = ['tools'];
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i;

export default handler;
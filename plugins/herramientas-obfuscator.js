import JavaScriptObfuscator from 'javascript-obfuscator'

let handler = async(m, { conn, text }) => {
if (!text) return m.reply(`*${lenguajeGB['smsAvisoMG']()}𝘿𝙞𝙜𝙞𝙩𝙚 𝙤 𝙘𝙤𝙙𝙞𝙜𝙤 𝙦𝙪𝙚 𝙫𝙖𝙞𝙨 𝙤𝙛𝙪𝙨𝙘𝙖𝙧*`) 
function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, { compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true }).getObfuscatedCode();
}
let obfuscatedCode = await obfuscateCode(text);
conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
}
handler.command = /^(ofuscar|ofuscador)$/i
export default handler

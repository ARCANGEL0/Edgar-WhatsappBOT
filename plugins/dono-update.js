import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull origin master' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)}
//} catch {
var update = execSync('git remote set-url origin https://github.com/ARCANGEL0/Edgar-WhatsappBOT.git && git pull origin master -f')
await m.reply(update.toString())
} catch {
await m.reply(`${fg}`) 
}}
handler.help = ['update']
handler.tags = ['owner']
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler 

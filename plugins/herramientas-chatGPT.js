let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'


await conn.sendFile(m.chat, picture, 'gata.mp4', "testepoha", m)

}


handler.command = /^(openai|gpt|edgar|alangpt)$/i;
export default handler;


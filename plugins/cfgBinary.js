let handler = async(m, { conn, usedPrefix, command, text }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

  

let selected = text.toLowerCase().split(" ")[0] + " "
if(selected == "code ") {
  let resposta= text.replace("code", "").trim();
  console.log(resposta)
  let res = ''
res = text.split('').map(char => {       
char.charCodeAt(0).toString(2);  
 }).join(' ')
console.log(res)
  
} 

else if(selected == "decode ")
{
  
  var newBin = text.split(" ")
var binCode = []
for (let i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
let result = binCode.join("")
  console.log(result)
} else {
return conn.reply(m.chat, `${mg}🔣 𝘾𝙊𝘿𝙄𝘾𝙊 𝙈𝙊𝙍𝙎𝙀 𝘾𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍/𝘿𝙀𝘾𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍\n\n𝙋𝘼𝙍𝘼 𝘾𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍 𝙐𝙎𝙀 *:*\n*${usedPrefix}${command} codificar Hola Gata*\n\n𝙋𝘼𝙍𝘼 𝘿𝙀𝘾𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍 𝙐𝙎𝙀 *:**${usedPrefix}${command} decodificar •••• --- •-•• •- / --• •- - •-*\n*${usedPrefix}${command} decodificar •••• • •-•• •-•• --- / --• •- - •-*`, fkontak, m)
}}

handler.help = ["binary"].map(v => v + " <encode|decode>")
handler.tags = ["tools"]

handler.command = /^(bin|binary|binario)/i
handler.money = 0

export default handler


/*
async function dBinary(str) {

}

async function eBinary(str = ''){    

}

module.exports = { dBinary, eBinary }

*/
let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
const { reaction, antifake, antiTwitter, antiInstagram, antiFacebook, antiTelegram, antiYoutube, antiTiktok, isBanned, autolevelup, antiver, antitoxic, temporal, restrict, stickers, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, afkadm, gpt, downloads, jogos, delete: del } = global.db.data.chats[m.chat]

let text = 
`╭━[ 𝘾𝙊𝙉𝙁𝙄𝙂]━⬣
┃
┃⏦𝘼𝙁𝙆 ${afkadm ? '🌕' : '🌒'}
┃⏦𝙄𝘼 ${gpt ? '🌕' : '🌒'}
┃⏦𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎 ${downloads ? '🌕' : '🌒'}
┃⏦𝙅𝙊𝙂𝙊𝙎 ${jogos ? '🌕' : '🌒'}
┃⏦𝘽𝙊𝙏 𝘼𝙏𝙄𝙑𝙊 𝙉𝙊 𝙂𝙍𝙐𝙋𝙊 ${!global.db.data.chats[m.chat].isBanned ? '🌕' : '🌒'}
┃⏦ 𝘽𝙊𝘼𝙎 𝙑𝙄𝙉𝘿𝘼𝙎${welcome ? '🌕' : '🌒'}
┃⏦ 𝘿𝙀𝙏𝙀𝘾𝙏 ${detect ? '🌕' : '🌒'} 
┃⏦𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝙍 𝘼𝘿𝙄𝘾𝙄𝙊𝙉𝘼𝙍 𝙀 𝙍𝙀𝙈𝙊𝙑𝙀𝙍 ${global.db.data.settings[conn.user.jid].restrict ? '🌕' : '🌒'}
┃⏦ 𝘽𝙊𝙏 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 ${global.db.data.settings[conn.user.jid].temporal ? '🌕' : '🌒'}
┃⏦ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 ${stickers ? '🌕' : '🌒'}
┃⏦ 𝙍𝙀𝘼𝘾𝙊𝙀𝙎 𝘿𝙊 𝘽𝙊𝙏${reaction ? '🌕' : '🌒'}
┃⏦ 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ${autosticker ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙐𝘿𝙄𝙊𝙎 ${audios ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾 ${antitoxic ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄 𝙄𝙉𝙏𝙀𝙍𝙉𝘼𝘾𝙄𝙊𝙉𝘼𝙇 ${antifake ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄 𝙑𝙀𝙍 ${antiver ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄𝘿𝙀𝙇𝙀𝙏𝙀 ${global.db.data.chats[m.chat].delete ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 ${antiLink ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 *2* ${antiLink2 ? '🌕' : '🌒'} 
┃⏦ 𝘼𝙉𝙏𝙄 𝙏𝙄𝙆𝙏𝙊𝙆 ${antiTiktok ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙔𝙊𝙐 𝙏𝙐𝘽𝙀 ${antiYoutube ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈 ${antiTelegram ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 ${antiFacebook ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 ${antiInstagram ? '🌕' : '🌒'}
┃⏦ 𝘼𝙉𝙏𝙄 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 ${antiTwitter ? '🌕' : '🌒'}
┃
╰━━━❰ *💀🐈‍⬛ ${vs}* ❱━━⬣
`.trim()

await conn.sendFile(m.chat, imagen3, 'gata.mp4', text)



 }
handler.help = ['group open / close', 'grupo abrir / fechar']
handler.tags = ['group']
handler.command = /^(gpconfig|config)$/i
handler.admin = true
handler.botAdmin = false
handler.exp = 0
export default handler

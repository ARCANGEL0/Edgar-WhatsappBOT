const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default
var handler = async(m, { conn, text, usedPrefix, command }) => {
  
 let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: 'Poe',
  address: wm,
  url: yt,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: 'funcionw caralho',
  jpegThumbnail: imagen1
}}, { quoted: m })
conn.relayMessage(m.chat, msg.message, {})

} 
handler.command = /^((bug|bugg))$/i
handler.owner = true

export default handler
  

import axios from "axios";
import cheerio from "cheerio";
import FormData from "form-data";

const split = '|';
const handler = async (m, { conn, args: [effect], : txt, usedPrefix, command, name }) => {
  if (!effect) throw `${mg}
╭━━━━━━━━━⬣
🥀 𝐍𝐨 𝐜𝐫𝐞𝐩𝐮𝐬𝐜𝐮𝐥𝐨 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞, 𝐚𝐠𝐮𝐚𝐫𝐝𝐨 𝐨 𝐬𝐞𝐮 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐯𝐞𝐥𝐚𝐫 𝐮𝐦 𝐞𝐟𝐞𝐢𝐭𝐨 𝐚 𝐚𝐩𝐥𝐢𝐜𝐚𝐫.
𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐞𝐟𝐞𝐢𝐭𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐭𝐢𝐧𝐚𝐬 𝐣𝐮𝐧𝐭𝐨 𝐜𝐨𝐦 𝐨 𝐭𝐞𝐱𝐭𝐨
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
❖─┅ ${usedPrefix + command}  magma Inferno
╰━━━━━━━━━━━━━━━━━━⬣
*🕯️𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙇𝙊𝙂𝙊𝙎*\n\n🪶📜${usedPrefix + command} ` + effects.map(v => v.title).join(`\n🪶📜 ${usedPrefix + command} `);

  if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `${mg}
   ━━━━━━━━━⬣ ⬣━━━━━━━━
  💀 𝐓𝐚𝐥 𝐞𝐟𝐞𝐢𝐭𝐨 ${effect}  é 𝐜𝐨𝐦𝐨 𝐮𝐦𝐚 𝐟𝐢𝐠𝐮𝐫𝐚 𝐬𝐨𝐦𝐛𝐫𝐢𝐚 𝐝𝐞 𝐢𝐠𝐧𝐨𝐫â𝐧𝐜𝐢𝐚 𝐞𝐦 𝐦𝐞𝐮 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨, 𝐮𝐦𝐚 𝐬𝐨𝐦𝐛𝐫𝐚 𝐪𝐮𝐞 𝐦𝐞 𝐢𝐦𝐩𝐨𝐬𝐬𝐢𝐛𝐢𝐥𝐢𝐭𝐚 𝐝𝐞𝐬𝐯𝐞𝐥𝐚𝐫. 
𝐓𝐞𝐧𝐭𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐦 𝐨𝐮𝐭𝐫𝐨 𝐞𝐟𝐞𝐢𝐭𝐨 𝐝𝐚 𝐥𝐢𝐬𝐭𝐚 𝐦𝐚𝐥𝐝𝐢𝐭𝐚
━━━━━━━━━⬣ ⬣━━━━━━━━`;

  try {
    let  = txt.replace(new RegExp(effect, 'gi'), '').trimStart();
    if (.includes(split)) {
       = .split(split).map((t) => t.trim());
    } else {
       = [.trim()];
    }
    const effectoSelect = effects.find((effectz) => new RegExp(effectz?.title, 'i').test(effect));
    const res = await maker(effectoSelect?.url, [...]).catch(_ => { throw `${mg} 
╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐟𝐚𝐥𝐡𝐨𝐮  
┃ 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞. 𝐝𝐢𝐠𝐢𝐭𝐞 𝐮𝐦 
┃ 𝐭𝐞𝐱𝐭𝐨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣
` })
    

    await conn.sendMessage(m.chat, {
      image: { url: res.image },
      caption: `\n 🌒 *EFEITO: ${effect}*\n${wm}`
    }, { quoted: m });

  } catch (e) {
    await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
    console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
    console.log(e)
  }
};
handler.help = ['logos'];
handler.tags = ['nulis'];
handler.command = /^(logo|logos|logos2)$/i;
handler.limit = 0
handler.register = false
export default handler;

var effects = [
  {
    'title': 'metalsea',
    'url': 'https://pro.me/create-3d-deep-sea-metal--effect-online-1053.html',
  },
  {
    'title': 'america3d',
    'url': 'https://pro.me/create-american-flag-3d--effect-online-1051.html',
  },
  {
    'title': '3dscifi',
    'url': 'https://pro.me/create-3d-sci-fi--effect-online-1050.html',
  },
  {
    'title': 'colorido3d',
    'url': 'https://pro.me/3d-rainbow-color-calligraphy--effect-1049.html',
  },
  {
    'title': '3dpipe',
    'url': 'https://pro.me/create-3d-water-pipe--effects-online-1048.html',
  },
  {
    'title': 'halloween1',
    'url': 'https://pro.me/create-halloween-skeleton--effect-online-1047.html',
  },
  {
    'title': 'halloween2',
    'url': 'https://pro.me/create-a-spooky-halloween--effect-online-1046.html',
  },
  {
    'title': 'cinehorror',
    'url': 'https://pro.me/create-a-cinematic-horror--effect-1045.html',
  },
  {
    'title': 'sketch',
    'url': 'https://pro.me/create-a-sketch--effect-online-1044.html',
  },
  {
    'title': 'circuit',
    'url': 'https://pro.me/create-blue-circuit-style--effect-online-1043.html',
  },
  {
    'title': 'espaco',
    'url': 'https://pro.me/create-space--effects-online-free-1042.html',
  },
  {
    'title': 'metalico',
    'url': 'https://pro.me/create-a-metallic--effect-free-online-1041.html',
  },
  {
    'title': 'metalico2',
    'url': 'https://pro.me/creat-glossy-metalic--effect-free-online-1040.html',
  },
  {
    'title': 'cptamerica',
    'url': 'https://pro.me/create-a-captain-america--effect-free-online-1039.html',
  },
  {
    'title': 'sciencefiction',
    'url': 'https://pro.me/create-science-fiction--effect-online-free-1038.html',
  },
  {
    'title': '8bit',
    'url': 'https://pro.me/video-game-classic-8-bit--effect-1037.html',
  },
  {
    'title': 'greenhorror',
    'url': 'https://pro.me/create-green-horror-style--effect-online-1036.html',
  },
  {
    'title': 'transformer',
    'url': 'https://pro.me/create-a-transformer--effect-online-1035.html',
  },
  {
    'title': 'berry',
    'url': 'https://pro.me/create-berry--effect-online-free-1033.html',
  },
  {
    'title': 'layered',
    'url': 'https://pro.me/create-layered--effects-online-free-1032.html',
  },
  {
    'title': 'thunder',
    'url': 'https://pro.me/online-thunder--effect-generator-1031.html',
  },
  {
    'title': 'magma',
    'url': 'https://pro.me/create-a-magma-hot--effect-online-1030.html',
  },
  {
    'title': '3Dstone',
    'url': 'https://pro.me/3d-stone-cracked-cool--effect-1029.html',
  },
  {
    'title': '3Dneon',
    'url': 'https://pro.me/create-3d-neon-light--effect-online-1028.html',
  },
  {
    'title': 'glitch',
    'url': 'https://pro.me/create-impressive-glitch--effects-online-1027.html',
  },
  {
    'title': 'glit2',
    'url': 'https://pro.me/create-glitch--effect-style-tik-tok-983.html',
  },
  {
    'title': 'crack',
    'url': 'https://pro.me/create-embossed--effect-on-cracked-surface-1024.html',
  },
  {
    'title': 'brokenglass',
    'url': 'https://pro.me/broken-glass--effect-free-online-1023.html',
  },
  {
    'title': 'papercut',
    'url': 'https://pro.me/create-art-paper-cut--effect-online-1022.html',
  },
  {
    'title': 'artistic',
    'url': 'https://pro.me/create-artistic-black-and-white-status-and-quote-with-your-photos-1021.html',
  },
  {
    'title': 'Online3D',
    'url': 'https://pro.me/online-3d-gradient--effect-generator-1020.html',
  },
  {
    'title': 'metalgloss',
    'url': 'https://pro.me/create-a-3d-glossy-metal--effect-1019.html',
  },
  {
    'title': '3D',
    'url': 'https://pro.me/create-3d-realistic--effect-on-the-beach-online-1018.html',
  },
  {
    'title': 'aquarela',
    'url': 'https://pro.me/create-a-free-online-watercolor--effect-1017.html',
  },
  {
    'title': '3dpapercut',
    'url': 'https://pro.me/online-multicolor-3d-paper-cut--effect-1016.html',
  },
  {
    'title': 'oemjanela',
    'url': 'https://pro.me/write--on-foggy-window-online-free-1015.html',
  },
  {
    'title': 'devil',
    'url': 'https://pro.me/create-neon-devil-wings--effect-online-free-1014.html',
  },
  {
    'title': 'sobagua',
    'url': 'https://pro.me/3d-underwater--effect-generator-online-1013.html',
  },
  {
    'title': 'bwn',
    'url': 'https://pro.me/online-black-and-white-bear-mascot-logo-creation-1012.html',
  },
  {
    'title': 'graffitiart',
    'url': 'https://pro.me/create-wonderful-graffiti-art--effect-1011.html',
  },
  {
    'title': 'grafitil',
    'url': 'https://pro.me/create-a-cool-graffiti--on-the-wall-1010.html',
  },
  {
    'title': 'wallgraffi',
    'url': 'https://pro.me/create-cool-wall-graffiti--effect-online-1009.html',
  },
  {
    'title': 'natal',
    'url': 'https://pro.me/create-a-christmas-holiday-snow--effect-1007.html',
  },
  {
    'title': 'neonlight',
    'url': 'https://pro.me/create-a-futuristic-technology-neon-light--effect-1006.html',
  },
  {
    'title': 'snow',
    'url': 'https://pro.me/create-snow--effects-for-winter-holidays-1005.html',
  },
  {
    'title': 'cloud',
    'url': 'https://pro.me/create-a-cloud--effect-on-the-sky-online-1004.html',
  },
  {
    'title': '3Dluxury',
    'url': 'https://pro.me/3d-luxury-gold--effect-online-1003.html',
  },
  {
    'title': '3Dgradient',
    'url': 'https://pro.me/3d-gradient--effect-online-free-1002.html',
  },
  {
    'title': 'blackpink',
    'url': 'https://pro.me/create-blackpink-logo-style-online-1001.html',
  },
  {
    'title': 'lightbulb',
    'url': 'https://pro.me/create-realistic-vintage-style-light-bulb-1000.html',
  },
  {
    'title': 'realisticvloud',
    'url': 'https://pro.me/create-realistic-cloud--effect-online-free-999.html',
  },
  {
    'title': 'cloud2',
    'url': 'https://pro.me/create-a-cloud--effect-in-the-sky-online-997.html',
  },
  {
    'title': 'sand1',
    'url': 'https://pro.me/write-in-sand-summer-beach-free-online-991.html',
  },
  {
    'title': 'sand2',
    'url': 'https://pro.me/sand-writing--effect-online-990.html',
  },
  {
    'title': 'sand3d',
    'url': 'https://pro.me/sand-engraved-3d--effect-989.html',
  },
  {
    'title': 'potter',
    'url': 'https://pro.me/create-harry-potter--effect-online-1025.html',
  },
  {
    'title': 'sliced',
    'url': 'https://pro.me/create-light-glow-sliced--effect-online-1068.html#google_vignette',
  },
  {
    'title': 'batman',
    'url': 'https://pro.me/make-a-batman-logo-online-free-1066.html',
  },
  {
    'title': 'space3D',
    'url': 'https://pro.me/create-space-3d--effect-online-985.html',
  },
  {
    'title': 'metalgold',
    'url': 'https://pro.me/metal-dark-gold--effect-984.html',
  },
  {
    'title': 'glitch3',
    'url': 'https://pro.me/create-glitch--effect-style-tik-tok-983.html',
  },
  {
    'title': 'stone',
    'url': 'https://pro.me/create-a-stone--effect-online-982.html',
  },
  {
    'title': 'galaxywolf',
    'url': 'https://pro.me/neon-light--effect-with-galaxy-style-981.html',
  },
  {
    'title': '1917',
    'url': 'https://pro.me/1917-style--effect-online-980.html',
  },
  {
    'title': 'retroneon',
    'url': 'https://pro.me/80-s-retro-neon--effect-online-979.html',
  },
  {
    'title': 'minion3d',
    'url': 'https://pro.me/minion--effect-3d-online-978.html',
  },
  {
    'title': 'pornhub',
    'url': 'https://pro.me/pornhub-style-logo-online-generator-free-977.html',
  },
  {
    'title': 'dbexposure',
    'url': 'https://pro.me/double-exposure--effect-black-white-976.html',
  },
  {
    'title': 'holo3d',
    'url': 'https://pro.me/holographic-3d--effect-975.html',
  },
  {
    'title': 'avengers',
    'url': 'https://pro.me/create-3d-avengers-logo-online-974.html',
  },
  {
    'title': 'purplemetal',
    'url': 'https://pro.me/metal-purple-dual-effect-973.html',
  },
  {
    'title': 'marvel',
    'url': 'https://pro.me/create-logo-style-marvel-studios-ver-metal-972.html',
  },
  {
    'title': 'marvel2',
    'url': 'https://pro.me/create-logo-style-marvel-studios-online-971.html',
  },
  {
    'title': 'silver',
    'url': 'https://pro.me/deluxe-silver--effect-970.html',
  },
  {
    'title': 'metalfull',
    'url': 'https://pro.me/color-full-luxury-metal--effect-969.html',
  },
  {
    'title': 'bluemetal',
    'url': 'https://pro.me/glossy-blue-metal--effect-967.html',
  },
  {
    'title': 'Gold',
    'url': 'https://pro.me/deluxe-gold--effect-966.html',
  },
  {
    'title': 'carbono',
    'url': 'https://pro.me/glossy-carbon--effect-965.html',
  },
  {
    'title': 'Fabric',
    'url': 'https://pro.me/fabric--effect-online-964.html',
  },
  {
    'title': 'neon',
    'url': 'https://pro.me/neon--effect-online-963.html',
  },
  {
    'title': 'newyear',
    'url': 'https://pro.me/new-year-cards-3d-by-name-960.html',
  },
  {
    'title': 'fireworks',
    'url': 'https://pro.me/happ-new-year-card-firework-gif-959.html',
  },
  {
    'title': 'balao',
    'url': 'https://pro.me/fullcolor-balloon--effect-958.html',
  },
  {
    'title': 'metal3d',
    'url': 'https://pro.me/create--logo-3d-metal-online-957.html',
  },
  {
    'title': 'avatar-gold',
    'url': 'https://pro.me/create-avatar-gold-online-956.html',
  },
  {
    'title': 'metalprata',
    'url': 'https://pro.me/-logo-3d-metal-silver-946.html',
  },
  {
    'title': 'metalrosa',
    'url': 'https://pro.me/-logo-3d-metal-rose-gold-945.html',
  },
  {
    'title': 'metalouro',
    'url': 'https://pro.me/-logo-3d-metal-gold-944.html',
  },
  {
    'title': 'metalgalaxy',
    'url': 'https://pro.me/-logo-3d-metal-galaxy-943.html',
  },
  {
    'title': 'xmas',
    'url': 'https://pro.me/xmas-cards-3d-online-942.html',
  },
  {
    'title': 'blood1',
    'url': 'https://pro.me/blood--on-the-frosted-glass-941.html',
  },
  {
    'title': 'halloweenfire',
    'url': 'https://pro.me/halloween-fire--effect-940.html',
  },
  {
    'title': 'metaldark',
    'url': 'https://pro.me/metal-dark-gold--effect-online-939.html',
  },
  {
    'title': 'logolion',
    'url': 'https://pro.me/create-lion-logo-mascot-online-938.html',
  },
  {
    'title': 'logowolf',
    'url': 'https://pro.me/create-wolf-logo-black-white-937.html',
  },
  {
    'title': 'lobogalaxia',
    'url': 'https://pro.me/create-wolf-logo-galaxy-online-936.html',
  },
  {
    'title': 'logoninja',
    'url': 'https://pro.me/create-ninja-logo-online-935.html',
  },
  {
    'title': 'logojoker',
    'url': 'https://pro.me/create-logo-joker-online-934.html',
  },
  {
    'title': 'pao',
    'url': 'https://pro.me/wicker--effect-online-932.html',
  },
  {
    'title': 'folhas',
    'url': 'https://pro.me/natural-leaves--effect-931.html',
  },
  {
    'title': 'firework2',
    'url': 'https://pro.me/firework-sparkle--effect-930.html',
  },
  {
    'title': 'Skeleton',
    'url': 'https://pro.me/skeleton--effect-online-929.html',
  },
  {
    'title': 'Steel',
    'url': 'https://pro.me/steel--effect-online-921.html',
  },
  {
    'title': 'Ultra-Gloss',
    'url': 'https://pro.me/ultra-gloss--effect-online-920.html',
  },
  {
    'title': 'Denim',
    'url': 'https://pro.me/denim--effect-online-919.html',
  },
  {
    'title': 'verde',
    'url': 'https://pro.me/decorate-green--effect-918.html',
  },
  {
    'title': 'roxo',
    'url': 'https://pro.me/decorate-purple--effect-917.html',
  },
  {
    'title': '2Stone',
    'url': 'https://pro.me/peridot-stone--effect-916.html',
  },
  {
    'title': 'Rock',
    'url': 'https://pro.me/rock--effect-online-915.html',
  },
  {
    'title': 'Lava',
    'url': 'https://pro.me/lava--effect-online-914.html',
  },
  {
    'title': 'vidroamarelo',
    'url': 'https://pro.me/yellow-glass--effect-913.html',
  },
  {
    'title': 'vidroroxo',
    'url': 'https://pro.me/purple-glass--effect-912.html',
  },
  {
    'title': 'vidrolaranja',
    'url': 'https://pro.me/orange-glass--effect-911.html',
  },
  {
    'title': 'vidroverde',
    'url': 'https://pro.me/green-glass--effect-910.html',
  },
  {
    'title': 'vidrociano',
    'url': 'https://pro.me/cyan-glass--effect-909.html',
  },
  {
    'title': 'vidroazul',
    'url': 'https://pro.me/blue-glass--effect-908.html',
  },
  {
    'title': 'vidrovermelho',
    'url': 'https://pro.me/red-glass--effect-907.html',
  },
  {
    'title': 'vidrobril',
    'url': 'https://pro.me/purple-shiny-glass--effect-906.html',
  },
  {
    'title': 'Cpamerica',
    'url': 'https://pro.me/captain-america--effect-905.html',
  },
  {
    'title': 'r2d2',
    'url': 'https://pro.me/robot-r2-d2--effect-903.html',
  },
  {
    'title': 'Rainbow',
    'url': 'https://pro.me/rainbow-equalizer--effect-902.html',
  },
  {
    'title': 'Toxic',
    'url': 'https://pro.me/toxic--effect-online-901.html',
  },

  {
    'title': 'Koi-Fish',
    'url': 'https://pro.me/koi-fish--effect-online-888.html',
  },
  {
    'title': 'Bread',
    'url': 'https://pro.me/bread--effect-online-887.html',
  },
  {
    'title': 'Matrix-Style',
    'url': 'https://pro.me/matrix-style--effect-online-884.html',
  },
  {
    'title': 'Horror-Blood',
    'url': 'https://pro.me/horror-blood--effect-online-883.html',
  },
  {
    'title': 'Neon-Light',
    'url': 'https://pro.me/neon-light--effect-online-882.html',
  },
  {
    'title': 'Thunder',
    'url': 'https://pro.me/create-thunder--effect-online-881.html',
  },
  {
    'title': '3D-Box',
    'url': 'https://pro.me/3d-box--effect-online-880.html',
  },
  {
    'title': 'Neon',
    'url': 'https://pro.me/neon--effect-online-879.html',
  },
  {
    'title': 'Road-Warning',
    'url': 'https://pro.me/road-warning--effect-878.html',
  },
  {
    'title': '3D-Steel',
    'url': 'https://pro.me/3d-steel--effect-877.html',
  },
  {
    'title': 'Bokeh',
    'url': 'https://pro.me/bokeh--effect-876.html',
  },
  {
    'title': 'Green-Neon',
    'url': 'https://pro.me/green-neon--effect-874.html',
  },
  {
    'title': 'glow2',
    'url': 'https://pro.me/free-advanced-glow--effect-873.html',
  },
  {
    'title': 'agua',
    'url': 'https://pro.me/dropwater--effect-872.html',
  },
  {
    'title': 'wall',
    'url': 'https://pro.me/break-wall--effect-871.html',
  },
  {
    'title': 'gift',
    'url': 'https://pro.me/chrismast-gift--effect-869.html',
  },
  {
    'title': 'Honey',
    'url': 'https://pro.me/honey--effect-868.html',
  },
  {
    'title': 'plastic',
    'url': 'https://pro.me/plastic-bag-drug--effect-867.html',
  },
  {
    'title': 'Horror3',
    'url': 'https://pro.me/horror-gift--effect-866.html',
  },
  {
    'title': 'Marble',
    'url': 'https://pro.me/marble-slabs--effect-864.html',
  },
  {
    'title': 'Marble2',
    'url': 'https://pro.me/marble--effect-863.html',
  },
  {
    'title': 'Icecold',
    'url': 'https://pro.me/ice-cold--effect-862.html',
  },
  {
    'title': 'Fruit',
    'url': 'https://pro.me/fruit-juice--effect-861.html',
  },
  {
    'title': 'Rusty-Metal',
    'url': 'https://pro.me/rusty-metal--effect-860.html',
  },
  {
    'title': 'Abstra-Gold',
    'url': 'https://pro.me/abstra-gold--effect-859.html',
  },
  {
    'title': 'Biscuit',
    'url': 'https://pro.me/biscuit--effect-858.html',
  },
  {
    'title': 'Bagel',
    'url': 'https://pro.me/bagel--effect-857.html',
  },
  {
    'title': 'Wood',
    'url': 'https://pro.me/wood--effect-856.html',
  },
  {
    'title': 'scifi',
    'url': 'https://pro.me/sci-fi--effect-855.html',
  },
  {
    'title': 'Metal-Rainbow',
    'url': 'https://pro.me/metal-rainbow--effect-854.html',
  },
  {
    'title': 'Purple-Gem',
    'url': 'https://pro.me/purple-gem--effect-853.html',
  },
  {
    'title': 'Shiny-Metal',
    'url': 'https://pro.me/shiny-metal--effect-852.html',
  },
  {
    'title': 'Yellow-Jewelry',
    'url': 'https://pro.me/yellow-jewelry--effect-851.html',
  },
  {
    'title': 'Silver-Jewelry',
    'url': 'https://pro.me/silver-jewelry--effect-850.html',
  },
  {
    'title': 'Red-Jewelry',
    'url': 'https://pro.me/red-jewelry--effect-849.html',
  },
  {
    'title': 'Purple-Jewelry',
    'url': 'https://pro.me/purple-jewelry--effect-848.html',
  },
  {
    'title': 'Orange-Jewelry',
    'url': 'https://pro.me/orange-jewelry--effect-847.html',
  },
  {
    'title': 'Green-Jewelry',
    'url': 'https://pro.me/green-jewelry--effect-846.html',
  },
  {
    'title': 'Cyan-Jewelry',
    'url': 'https://pro.me/cyan-jewelry--effect-845.html',
  },
  {
    'title': 'Blue-Jewelry',
    'url': 'https://pro.me/blue-jewelry--effect-844.html',
  },
  {
    'title': 'Hot-Metal',
    'url': 'https://pro.me/hot-metal--effect-843.html',
  },
  {
    'title': 'Hexa-Golden',
    'url': 'https://pro.me/hexa-golden--effect-842.html',
  },
  {
    'title': 'Blue-Glitter',
    'url': 'https://pro.me/blue-glitter--effect-841.html',
  },
  {
    'title': 'Purple-Glitter',
    'url': 'https://pro.me/purple-glitter--effect-840.html',
  },
  {
    'title': 'Pink-Glitter',
    'url': 'https://pro.me/pink-glitter--effect-839.html',
  },
  {
    'title': 'Green-Glitter',
    'url': 'https://pro.me/green-glitter--effect-838.html',
  },
  {
    'title': 'Silver-Glitter',
    'url': 'https://pro.me/silver-glitter--effect-837.html',
  },
  {
    'title': 'Gold-Glitter',
    'url': 'https://pro.me/gold-glitter--effect-836.html',
  },
  {
    'title': 'Bronze-Glitter',
    'url': 'https://pro.me/bronze-glitter--effect-835.html',
  },
  {
    'title': 'Eroded-Metal',
    'url': 'https://pro.me/eroded-metal--effect-834.html',
  },
  {
    'title': 'Carbon',
    'url': 'https://pro.me/carbon--effect-833.html',
  },
  {
    'title': 'Pink-Candy',
    'url': 'https://pro.me/pink-candy--effect-832.html',
  },
  {
    'title': 'Blue-Metal',
    'url': 'https://pro.me/blue-metal--effect-831.html',
  },
  {
    'title': 'Blue-Gem',
    'url': 'https://pro.me/blue-gem--effect-830.html',
  },
  {
    'title': 'Black-Metal',
    'url': 'https://pro.me/black-metal--effect-829.html',
  },
  {
    'title': '3D-Glowing-Metal',
    'url': 'https://pro.me/3d-glowing-metal--effect-828.html',
  },
  {
    'title': '3D-Chrome',
    'url': 'https://pro.me/3d-chrome--effect-827.html',
  },
];

async function maker(url, ) {
   if (/https?:\/\/(ephoto360|photooxy|pro)\/\.(com|me)/i.test(url)) throw new Error("URL Invalid")
   try {
      let a = await axios.get(url, {
         headers: {
            "Accept": "/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Origin": (new URL(url)).origin,
            "Referer": url,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
         }
      })
      let $ = cheerio.load(a.data)
      let server = $('#build_server').val()
      let serverId = $('#build_server_id').val()
      let token = $('#token').val()
      let submit = $('#submit').val()
      let types = [];
      $('input[name="radio0[radio]"]').each((i, elem) => {
         types.push($(elem).attr("value"));
      })
      let post;
      if (types.length != 0) {
         post = {
            'radio0[radio]': types[Math.floor(Math.random() * types.length)],
            'submit': submit,
            'token': token,
            'build_server': server,
            'build_server_id': Number(serverId)
         };
      }
      else {
         post = {
            'submit': submit,
            'token': token,
            'build_server': server,
            'build_server_id': Number(serverId)
         }
      }
      let form = new FormData()
      for (let i in post) {
         form.append(i, post[i])
      }
      if (typeof  == "string")  = []
      for (let i of ) form.append("[]", i)
      let b = await axios.post(url, form, {
         headers: {
            "Accept": "/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Origin": (new URL(url)).origin,
            "Referer": url,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188", 
            "Cookie": a.headers.get("set-cookie").join("; "),
            ...form.getHeaders()
         }
      })
      $ = cheerio.load(b.data)
      let out = ($('#form_value').first().() || $('#form_value_input').first().() || $('#form_value').first().val() || $('#form_value_input').first().val())
      let c = await axios.post((new URL(url)).origin + "/effect/create-image", JSON.parse(out), {
         headers: {
            "Accept": "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": (new URL(url)).origin,
            "Referer": url,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188",
            "Cookie": a.headers.get("set-cookie").join("; ")
         }
      })
      return {status: c.data?.success, image: server + (c.data?.fullsize_image || c.data?.image || ""), session: c.data?.session_id}
   } catch (e) {
      throw e
   }
}

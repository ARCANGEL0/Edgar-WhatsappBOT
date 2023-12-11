
import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
  const categories = [
        'Ciência',
        'História',
        'Física',
        'Arte',
        'Tecnologia',
        'Geografia',
        'Cultura Geral',
        'Curiosidades',
        'Esportes',
        'Música',
        'Biologia',
        'Filosofia',
        'Literatura',
        'Medicina',
        'Economia',
        'Política',
        'Astronomia',
        'Psicologia',
        'Matemática',
        'Química',
        'Ecologia',
        'Antropologia',
        'Sociologia',
        'Arqueologia',
        'Psicologia Social',
        'Ciências Exatas',
        'Mitologia',
        // Adicione mais categorias conforme necessário
    ];
if (!text) {
    

    const categoryList = categories.map((category, index) => `    ┃ .fatos ${index + 1} - ${category}`).join('\n');

    throw `
    ╭━━━『𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐝𝐚𝐝𝐞𝐬』━━━⬣
    ┃
${categoryList}
    ┃
    ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
    ┃ 𝓔𝓭𝓲𝓬̧𝓪̃𝓸 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
    ╰━━━━━━━━━━━━━━━━━━⬣`;
}
else {
    const selectedCategoryIndex = parseInt(text) - 1;
    
     console.log(text)
    if (selectedCategoryIndex >= 0 && selectedCategoryIndex < categories.length) {
        const curiositiesCiencia = ["Curiosidade 1", "Curiosidade 2"]; // Replace with actual curiosities
        const curiositiesHistoria = ["aa","bb"] 
        // Add more arrays for other categories

        const selectedCategory = categories[selectedCategoryIndex];
            const selectedCuriositiesArray = eval(`curiosities${selectedCategory.replace(/\s+/g, '')}`); // Dynamically get the array based on category

            if (selectedCuriositiesArray && selectedCuriositiesArray.length > 0) {
                const randomCuriosity = pickRandom(selectedCuriositiesArray);
                await m.reply(randomCuriosity);
    } 
}


/* catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
} catch (e) {
throw `${lenguajeGB.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}}} */
  
  
}
handler.help = ['curiosidades'];
handler.tags = ['tools'];
export default handler;
handler.command = /^(curiosidades|curi|fatos)$/i;

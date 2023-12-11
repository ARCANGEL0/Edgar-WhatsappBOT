
import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
  const categories = [
        'Geral',
        'História',
        'Mitologia',
        'Arte',
        'Tecnologia',
        'Informatica',
        'Programacao',
        'Fisica',
        'Quimica',
        'Biologia',
        'Matematica',
        'Música',
        'Filosofia',
        'Literatura',
        'Medicina',
        'Economia',
        'Politica',
        'Astronomia',
        'Psicologia',
        'Ecologia',
        'Antropologia',
        'Sociologia',
        'Arqueologia',
        'Criminologia',
        'CulturaPop',
        'CulturaGotica',
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
        
        
        
        
          const curiositiesGeral = ["Curiosidade Geral 1", "Curiosidade Geral 2"];
    const curiositiesHistoria = ["Curiosidade História 1", "Curiosidade História 2"];
    const curiositiesMitologia = ["Curiosidade Mitologia 1", "Curiosidade Mitologia 2"];
    const curiositiesArte = ["Curiosidade Arte 1", "Curiosidade Arte 2"];
    const curiositiesTecnologia = ["Curiosidade Tecnologia 1", "Curiosidade Tecnologia 2"];
    const curiositiesInformatica = ["Curiosidade Informática 1", "Curiosidade Informática 2"];
    const curiositiesProgramacao = ["Curiosidade Programação 1", "Curiosidade Programação 2"];
    const curiositiesFisica = ["Curiosidade Física 1", "Curiosidade Física 2"];
    const curiositiesQuimica = ["Curiosidade Química 1", "Curiosidade Química 2"];
    const curiositiesBiologia = ["Curiosidade Biologia 1", "Curiosidade Biologia 2"];
    const curiositiesMatematica = ["Curiosidade Matemática 1", "Curiosidade Matemática 2"];
    const curiositiesMusica = ["Curiosidade Música 1", "Curiosidade Música 2"];
    const curiositiesFilosofia = ["Curiosidade Filosofia 1", "Curiosidade Filosofia 2"];
    const curiositiesLiteratura = ["Curiosidade Literatura 1", "Curiosidade Literatura 2"];
    const curiositiesMedicina = ["Curiosidade Medicina 1", "Curiosidade Medicina 2"];
    const curiositiesEconomia = ["Curiosidade Economia 1", "Curiosidade Economia 2"];
    const curiositiesPolitica = ["Curiosidade Política 1", "Curiosidade Política 2"];
    const curiositiesAstronomia = ["Curiosidade Astronomia 1", "Curiosidade Astronomia 2"];
    const curiositiesPsicologia = ["Curiosidade Psicologia 1", "Curiosidade Psicologia 2"];
    const curiositiesEcologia = ["Curiosidade Ecologia 1", "Curiosidade Ecologia 2"];
    const curiositiesAntropologia = ["Curiosidade Antropologia 1", "Curiosidade Antropologia 2"];
    const curiositiesSociologia = ["Curiosidade Sociologia 1", "Curiosidade Sociologia 2"];
    const curiositiesArqueologia = ["Curiosidade Arqueologia 1", "Curiosidade Arqueologia 2"];
    const curiositiesCriminologia = ["Curiosidade Criminologia 1", "Curiosidade Criminologia 2"];
    const curiositiesCulturaPop = ["Curiosidade Cultura Pop 1", "Curiosidade Cultura Pop 2"];
    const curiositiesCulturaGotica = ["Curiosidade Cultura Gótica 1", "Curiosidade Cultura Gótica 2"];
    
        
        
        

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
  
  
}}
handler.help = ['curiosidades'];
handler.tags = ['tools'];
export default handler;
handler.command = /^(curiosidades|curi|fatos)$/i;

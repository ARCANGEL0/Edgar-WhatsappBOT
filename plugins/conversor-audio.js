let handler = async (m, { conn, text, usedPrefix, command, isOwner, args }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime || !args[0]) throw 'Por favor, responda a um Ã¡udio e forneÃ§a um caminho vÃ¡lido para o arquivo.';

    let audioPath = args[0];

    fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Replace with your API key or use your method to get the key
            'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify({
            model: 'whisper-1',
            file: `https://file.io/OASvpLuHnpIq`,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the OpenAI response here
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

handler.command = /^text/i;
export default handler;
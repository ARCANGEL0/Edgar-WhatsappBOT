let handler = async (m, { conn, text, usedPrefix, command, isOwner, args,apiKey }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    

    let audioPath = args[0];

    fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`, // Replace with your API key or use your method to get the key
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

handler.command = /^text|tx/i;
export default handler;
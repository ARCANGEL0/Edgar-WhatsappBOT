import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
 
 const url = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true&fields=*';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': '24d7bf0c8cmsha764a5967745dc8p19a4b7jsn864667d8ba41',
		'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
	},
	body: {
		language_id: 71,
		source_code: text,
		stdin: 'SnVkZ2Uw'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};

handler.command = /^code/i;
export default handler;
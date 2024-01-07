import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'

let handler = async (m, { conn, text, isAdmin, isOwner }) => {
  if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos === false) {
    m.midia("â")
    return !0;
  }

  const styleCommandRegex = /^styletext (\w+) (.+)$/i;
  const match = text.match(styleCommandRegex);

  if (match) {
    const [, style, inputText] = match;
    const stylizedText = await stylizeText(style, inputText);
    conn.reply(m.chat, stylizedText, m);
  } else if (!text) {
    const availableStyles = 'Stroked, Subscript, Superscript, ...'; // Add more styles as needed
    conn.reply(m.chat, `Available styles: ${availableStyles}\n\nUse it like: .styletext Stroked TEXTO`, m);
  } else {
    conn.reply(m.chat, 'Invalid command. Use it like: .styletext Stroked TEXTO', m);
  }
}

async function stylizeText(style, text) {
  let res = await fetch(`http://qaz.wtf/u/convert.cgi?style=${style}&text=${encodeURIComponent(text)}`);
  let html = await res.text();
  let dom = new JSDOM(html);
  let table = dom.window.document.querySelector('table').children[0].children;
  let obj = {};
  
  for (let tr of table) {
    let name = tr.querySelector('.aname').innerHTML;
    let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '');
    obj[name + (obj[name] ? ' Reversed' : '')] = content;
  }

  return Object.entries(obj).map(([name, value]) => `*${name}*\n${value}`).join('\n\n');
}

handler.help = ['styletext'].map(v => v + ' <style> <text>');
handler.tags = ['tools'];
handler.command = /^styletext/i;
handler.exp = 0;
export default handler;
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

let stylenameConversions = {};

let handler = async (m, { conn, args, isAdmin, isOwner }) => {
  if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos === false) {
    m.midia("â");
    return !0;
  }

  if (!args[0]) {
    const allStyles = await getAllStyles();
    return conn.reply(m.chat, `Available styles:\n${allStyles.join(', ')}`, m);
  }

  let stylename = args[0].toLowerCase();
  if (stylenameConversions[stylename]) {
    stylename = stylenameConversions[stylename].toLowerCase().replace(/ /g, '-');
  }

  const text = args.slice(1).join(' ');

  conn.reply(m.chat, `${await stylizeText(stylename, text)}`, m);
};

handler.help = ['styletext'].map(v => v + ' (stylename) (text)');
handler.tags = ['tools'];
handler.command = /^(styletext|style)$/i;
handler.exp = 0;

async function stylizeText(stylename, text) {
  if (!text) {
    return 'Please provide text to stylize.';
  }

  let res = await fetch(`http://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(text)}`);
  let html = await res.text();
  let dom = new JSDOM(html);
  let table = dom.window.document.querySelector('table').children[0].children;
  let obj = {};

  for (let tr of table) {
    let name = tr.querySelector('.aname').innerHTML.toLowerCase().replace(/ /g, '-');
    let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '');
    obj[name] = content;
  }

  const stylizedText = obj[stylename];

  return stylizedText || 'Invalid stylename';
}

async function getAllStyles() {
  if (Object.keys(stylenameConversions).length === 0) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=a');
    let html = await res.text();
    let dom = new JSDOM(html);
    let table = dom.window.document.querySelector('table').children[0].children;

    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML.toLowerCase().replace(/ /g, '-');
      stylenameConversions[name] = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  }

  return Object.keys(stylenameConversions);
}

export default handler;
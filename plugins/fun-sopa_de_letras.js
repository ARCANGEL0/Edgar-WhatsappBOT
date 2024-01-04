//CREADO POR @gata_diosimport translate from '@vitalets/google-translate-api'
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command}) => {
 if (!text) throw 'Please provide an element symbol or name';
let result = await translate(`${text}`, { to: "en", autoCorrect: true })
  try {
    let res = await fetch(`https://api.popcat.xyz/periodic-table?element=${result.text}`);

    if (!res.ok) {
      throw new Error(`API status ${res.status}`);
    }

    let buffer = await res.arrayBuffer();
    let json = JSON.parse(Buffer.from(buffer).toString());

    console.log('JSON response:', json);

   let elementInfo = 
    ` ━━━━━━━━━⬣📜 _*Informações do elemento*_ ⬣━━━━━━━━
     • *Nome:* ${trad(json.name)}\n
     • *Símbolo:* ${json.symbol}\n
     • *Número Atômico:* ${json.atomic_number}\n
     • *Massa Atômica:* ${json.atomic_mass}\n
     • *Período:* ${json.period}\n
     • *Fase:* ${json.phase}\n
     • *Descoberto Por:* ${json.discovered_by}\n
     • *Resumo:* ${trad(json.summary)}`;

function trad(summary) {
let txt = translate(summary, { to: "pt", autoCorrect: true })
    return txt.text;
}

    conn.sendFile(m.chat, json.image, 'element.jpg', elementInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }

}

handler.command = /^(elemento)$/i
export default handler

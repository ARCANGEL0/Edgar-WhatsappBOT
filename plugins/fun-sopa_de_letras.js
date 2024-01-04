//CREADO POR @gata_dios
 
let fila, columna, sopaNube, sopaPalabra, sopaDir, userSP, cambioLetra, diamante = null
let intentos = 0
let handler = async (m, { conn, text, usedPrefix, command}) => {
 if (!text) throw 'Please provide an element symbol or name';

  try {
    let res = await fetch(`https://api.popcat.xyz/periodic-table?element=${text}`);

    if (!res.ok) {
      throw new Error(`API status ${res.status}`);
    }

    let buffer = await res.arrayBuffer();
    let json = JSON.parse(Buffer.from(buffer).toString());

    console.log('JSON response:', json);

   let elementInfo = 
    ` ━━━━━━━━━⬣📜 _*Informações do elemento*_ ⬣━━━━━━━━
     • *Nome:* ${traduzirNome(json.name)}\n
     • *Símbolo:* ${json.symbol}\n
     • *Número Atômico:* ${json.atomic_number}\n
     • *Massa Atômica:* ${json.atomic_mass}\n
     • *Período:* ${json.period}\n
     • *Fase:* ${json.phase}\n
     • *Descoberto Por:* ${json.discovered_by}\n
     • *Resumo:* ${trad(json.summary)}`;

function trad(summary) {
    // Implemente sua lógica de tradução do resumo aqui
    return translatedSummary;
}

    conn.sendFile(m.chat, json.image, 'element.jpg', elementInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }

}

handler.command = /^(elemento)$/i
export default handler

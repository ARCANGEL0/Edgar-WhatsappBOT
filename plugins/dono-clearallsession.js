/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoAG']()}𝙐𝙏𝙄𝙇𝙄𝙕𝘼 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙄𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀 𝙀𝙉 𝙀𝙇 𝙉𝙐́𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝘿𝙀𝙇 𝘽𝙊𝙏` },
      { quoted: m }
    );
  }
 /* await conn.sendMessage(
    m.chat,
    { text: `${lenguajeGB['smsAvisoAG']()}𝙄𝙉𝙄𝘾𝙄𝘼𝙉𝘿𝙊 𝙋𝙍𝙊𝘾𝙀𝙎𝙊 𝘿𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 : ${filesDeleted} 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝘿𝙀 𝙎𝙀𝙎𝙎𝙄𝙊𝙉, 𝙀𝙓𝘾𝙀𝙋𝙏𝙊 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 *(creds.json)*` },
    { quoted: m }
  );*/
  const sessionPath = './GataBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()}*Sem sessões.*` },
        { quoted: m }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoFG']()}*_Sem arquivos na pasta*_` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeGB['smsAvisoAG']()}𝙄𝙉𝙄𝘾𝙄𝘼𝙉𝘿𝙊 : ${filesDeleted}*` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('Erro na leitura dos arquivos 🐈‍⬛:', err);
    await conn.sendMessage(
      m.chat,
      { text: `${lenguajeGB['smsAvisoFG']()}erro ao eliminar` },
      { quoted: m }
    );
  }
  await conn.sendMessage(m.chat, {text: `${lenguajeGB['smsAvisoRG']()}reset sessak`}, { quoted: m })}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|resetbot|deletegata)$/i;
handler.owner = true
export default handler;

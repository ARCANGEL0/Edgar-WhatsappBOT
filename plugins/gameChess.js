import { Chess } from 'chess.js';

const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.chess = conn.chess || {};
  let chessData = conn.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  conn.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'delete') {
    delete conn.chess[key];
    return conn.reply(m.chat, '🏳️ *Chess game stopped.*', m);
  }

  if (feature === 'create') {
    if (gameData) {
      return conn.reply(m.chat, '⚠️ *Jogo em progresso.*', m);
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return conn.reply(m.chat, '🎮 *Chess game iniciadk.*\nEsperando jogadores.', m);
  }

  if (feature === 'join') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat, '🙅‍♂️ *Voce ja entrou neste jogo.*', m);
    }
    if (!gameData || gameData.status !== 'waiting') {
      return conn.reply(m.chat, '⚠️ *Sem partidas em espera.*', m);
    }
    if (players.length >= 2) {
      return conn.reply(m.chat, '👥 *O jogo sera iniciado.', m);
    }
    players.push(senderId);
    hasJoined.push(senderId);
    if (players.length === 2) {
      gameData.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessData.currentTurn = white;
      return conn.reply(m.chat, `🙌 *Players who have joined:*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}\n\n*Black:* @${black.split('@')[0]}\n*White:* @${white.split('@')[0]}\n\nPlease use *'chess start'* to begin the game.`, m, { mentions: hasJoined });
    } else {
      return conn.reply(m.chat, '🙋‍♂️ *You have joined the chess game.*\nWaiting for other players to join.', m);
    }
  }

  if (feature === 'start') {
    if (gameData.status !== 'ready') {
      return conn.reply(m.chat, '⚠️ *Cannot start the game. Wait for two players to join.*', m);
    }
    gameData.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessData.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const turn = `🎲 *Turn:* White @${gameData.white.split('@')[0]}`;
      const flipParam = senderId === gameData.black ? '' : '&flip=true';
      const flipParam2 = senderId === gameData.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [gameData.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [gameData.black] });
      }
      return;
    } else {
      return conn.reply(m.chat, '🙋‍♂️ *You have joined the chess game.*\nWaiting for other players to join.', m);
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gameData || gameData.status !== 'playing') {
      return conn.reply(m.chat, '⚠️ *The game has not started yet.*', m);
    }
    if (currentTurn !== senderId) {
      return conn.reply(m.chat, `⏳ *It's currently ${chessData.currentTurn === gameData.white ? 'White' : 'Black'}'s turn to move.*`, m, {
        contextInfo: {
          mentionedJid: [currentTurn]
        }
      });
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      delete conn.chess[key];
      return conn.reply(m.chat, `⚠️ *Game Checkmate.*\n🏳️ *Chess game stopped.*\n*Winner:* @${m.sender.split('@')[0]}`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete conn.chess[key];
      return conn.reply(m.chat, `⚠️ *Game Draw.*\n🏳️ *Chess game stopped.*\n*Players:* ${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return conn.reply(m.chat, ` ━━━━━━━━━⬣✖️⬣━━━━━━━━
      『⚠ 𝙼𝚘𝚟𝚒𝚖𝚎𝚗𝚝𝚘 𝚒𝚗𝚟𝚊𝚕𝚒𝚍𝚘』
       ━━━━━━━━━⬣✖️⬣━━━━━━━━
      `, m);
    }
    chessData.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentTurn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessData.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gameData.white ? 'White' : 'Black';
    const turn = `🎲 *Turn:* ${currentColor} @${chessData.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gameData.black ? '' : '&flip=true';
    const flipParam2 = senderId === gameData.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [chessData.currentTurn] });
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [chessData.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'info') {
    return conn.reply(m.chat, `━━━━━━━━━⬣♟️𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂⬣━━━━━━━━

*${usedPrefix + command} novo* ➥ Cria uma partida de xadrez
*${usedPrefix + command} entrar* - ➥ Entra em uma partida em espera
*${usedPrefix + command} play* ➥ Inicia o jogo se a partida tiver 2 participantes
*${usedPrefix + command} delete* ➥ Apaga a partida existente 
*${usedPrefix + command} [posicao inicial] [posicao final]* ➥ Faz um movimento no jogo de xadrez

─┅──┅❖  _𝐄𝐱𝐞𝐦𝐩𝐥𝐨:_
*${usedPrefix + command} novo* Cria uma partida
*${usedPrefix + command} entrar* entra na partida existente
Após 2 jogadores entrarem, digite ${usedPrefix + command} play 
para movimentar peças, faça como o exemplo
${usedPrefix + command} h1 h3
 ━━━━━━━━━⬣ִ ࣪𖤐⬣━━━━━━━━
    `, m);
  }
  return conn.reply(m.chat, ` 
  ╭━━━━━━━━━⬣
┃
┃ ❌✒️𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐭𝐨! 
┃ 𝐑𝐞𝐭𝐨𝐫𝐧𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐧𝐞𝐬𝐭𝐞 
┃ 𝐯𝐚𝐥𝐞 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐝𝐞 𝐭𝐫𝐮𝐪𝐮𝐞𝐬 𝐝𝐞 
┃ 𝐥𝐨𝐠𝐢𝐜𝐚 𝐜𝐨𝐦 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 
┃ 𝐚𝐩𝐫𝐨𝐩𝐫𝐢𝐚𝐝𝐨
┃
┃ 𝐔𝐬𝐞 ${usedPrefix + command} info 𝐩𝐚𝐫𝐚 
┃ 𝐯𝐞𝐫 𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, m);
};

handler.help = ['chess [from to]', 'chess delete', 'chess join', 'chess start'];
handler.tags = ['game'];
handler.command = /^(chess|chatur|xadrez)$/i;

export default handler;
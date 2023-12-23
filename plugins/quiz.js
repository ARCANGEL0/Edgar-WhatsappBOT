global.quiz = global.quiz ? global.quiz : {}
global.quizxp = global.quizxp ? global.quizxp : {}
global.xppergunta= global.xppergunta ? global.xppergunta : ""
const handler = async (m, {conn, participants, groupMetadata,isAdmin, isOwner, text, args, usedPrefix, command, reply}) => {

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}



  const categories = [
        'Geral',
        'Historia',
        'Mitologia',
        'Arte',
        'Tecnologia',
        'Informatica',
        'Programacao',
        'Fisica',
        'Quimica',
        'Biologia',
        'Matematica',
        'Musica',
        'Filosofia',
        'Literatura',
        'Medicina',
        'Economia',
        'Politica',
        'Astronomia',
        'Psicologia',
        'Sociologia',
        'Arqueologia',
        'Criminologia',
        'Fotografia',
        'Cultura',
        'Direito'
        // Adicione mais categorias conforme necessário
    ];
    let id = m.chat;
    let currentQuestion = "";
let currentAnswer = "";




if (!text) {
    

    const categoryList = categories.map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`).join('\n');

    throw `
╭━━━『 𝐐𝐮𝐢𝐳 』━━━⬣
┃ 
┃ 🥀🦇 𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐞 𝐨 𝐧ú𝐦𝐞𝐫𝐨 𝐩𝐚𝐫𝐚 
┃ 𝐝𝐞𝐬𝐯𝐞𝐥𝐚𝐫 𝐚 𝐪𝐮𝐞𝐬𝐭ã𝐨 𝐯𝐢𝐧𝐝𝐚 
┃ 𝐝𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬,
┃ 𝐮𝐬𝐞 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .quiz r 𝐩𝐚𝐫𝐚
┃ 𝐭𝐫𝐚𝐳𝐞𝐫 𝐥𝐮𝐳 𝐚 
┃ 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚 𝐝𝐞 𝐟𝐨𝐬𝐬𝐚 𝐢𝐠𝐧𝐨𝐫𝐚𝐧𝐜𝐢𝐚
┃
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ .quiz 8 _*(Perguntas de física)*_
┃ .quiz r _*(Revela a resposta)*_
┃━━━━━━━⬣
┃
${categoryList}
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛| ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`;
}
else {
    const selectedCategoryIndex = parseInt(text) - 1;
    
     
    if (selectedCategoryIndex >= 0 && selectedCategoryIndex < categories.length) {
        
        
        const perguntasFisica = [
        { 
         "Pergunta": "Qual é a teoria que busca unificar a gravidade com outras forças fundamentais?",
    "Opcoes": {
      A: "Teoria das Cordas",
      B: "Teoria Quântica",
      C: "Teoria Eletromagnética",
      D: "Teoria da Relatividade Geral"
    },
    "Resposta": "A",
    "Motivo": "A Teoria das Cordas propõe uma compreensão unificada das forças fundamentais, incluindo a gravidade, através da descrição das partículas como minúsculos filamentos vibrantes, oferecendo uma perspectiva única na natureza da realidade."
  },
  {
    "Pergunta": "O que caracteriza um buraco negro?",
    "Opcoes": {
      A: "Região de alta densidade de matéria",
      B: "Estrela em estágio final de vida",
      C: "Ponto no espaço com gravidade zero",
      D: "Entrelaçamento quântico de partículas"
    },
    "Resposta": "A",
    "Motivo": "Um buraco negro é definido por uma região de altíssima densidade de matéria, onde a gravidade é tão intensa que nada, nem mesmo a luz, pode escapar. É o estágio final da evolução de certas estrelas, representando uma concentração extrema de massa em um espaço infinitesimal."
  },
    {
    "Pergunta": "Qual fenômeno é explicado pela equação E=mc²?",
    "Opcoes": {
      A: "Efeito Doppler",
      B: "Força Centrípeta",
      C: "Teoria da Relatividade",
      D: "Equilíbrio Dinâmico"
    },
    "Resposta": "C",
    "Motivo": "A equação E=mc² é a expressão fundamental da Teoria da Relatividade de Einstein, relacionando energia (E) e massa (m) de um objeto."
  },
  {
    "Pergunta": "O que são partículas elementares na física de partículas?",
    "Opcoes": {
      A: "Pequenos átomos",
      B: "Partículas subatômicas",
      C: "Moléculas complexas",
      D: "Átomos instáveis"
    },
    "Resposta": "B",
    "Motivo": "Partículas elementares são as unidades fundamentais da matéria, como quarks e léptons, que não possuem estrutura interna conhecida."
  },
  {
    "Pergunta": "O que é a dualidade onda-partícula na mecânica quântica?",
    "Opcoes": {
      A: "Comportamento oscilatório de partículas",
      B: "Capacidade de se dividir em duas partes",
      C: "Simultaneidade de características de onda e partícula",
      D: "Conjunto de leis da termodinâmica"
    },
    "Resposta": "C",
    "Motivo": "A dualidade onda-partícula é um princípio da mecânica quântica que descreve o comportamento de partículas subatômicas, exibindo simultaneamente características de onda e partícula dependendo das condições experimentais."
  },
  {
    "Pergunta": "O que é a constante de Planck?",
    "Opcoes": {
      A: "Velocidade da luz",
      B: "Carga do elétron",
      C: "Quantidade mínima de ação",
      D: "Força gravitacional"
    },
    "Resposta": "C",
    "Motivo": "A constante de Planck, representada por 'h', é a quantidade mínima de ação em mecânica quântica, relacionando a energia de partículas subatômicas com a frequência de suas ondas associadas."
  },
  {
    "Pergunta": "O que é a teoria das supercordas?",
    "Opcoes": {
      A: "Modelo para explicar a formação de cordas musicais",
      B: "Descrição de cordas cósmicas no universo",
      C: "Teoria que unifica todas as partículas em cordas vibracionais",
      D: "Estudo sobre a elasticidade de cordas"
    },
    "Resposta": "C",
    "Motivo": "A teoria das supercordas é uma proposta na física teórica que busca unificar todas as partículas elementares em cordas unidimensionais vibracionais, oferecendo uma abordagem mais abrangente da natureza fundamental da matéria e da energia."
  },
  {
    "Pergunta": "O que é o princípio da incerteza de Heisenberg?",
    "Opcoes": {
      A: "Impossibilidade de conhecer exatamente a posição e a velocidade de uma partícula ao mesmo tempo",
      B: "Lei que determina a temperatura mínima alcançável",
      C: "Capacidade de prever eventos futuros com precisão",
      D: "Equilíbrio de forças em um sistema isolado"
    },
    "Resposta": "A",
    "Motivo": "O princípio da incerteza de Heisenberg estabelece a impossibilidade de conhecer simultaneamente com precisão a posição e a velocidade de uma partícula subatômica."
  },
  {
    "Pergunta": "O que é a matéria escura?",
    "Opcoes": {
      A: "Matéria formada por partículas exóticas",
      B: "Matéria com alta luminosidade",
      C: "Matéria condensada em estrelas",
      D: "Matéria radioativa"
    },
    "Resposta": "A",
    "Motivo": "A matéria escura refere-se a uma forma de matéria hipotética que compõe a maior parte da massa total do universo, interagindo muito fracamente com a luz e outras formas de matéria."
  },
  {
    "Pergunta": "O que é a teoria das branas?",
    "Opcoes": {
      A: "Teoria sobre o movimento de objetos em um fluido viscoso",
      B: "Estudo sobre partículas de poeira cósmica",
      C: "Teoria que sugere a existência de membranas multidimensionais no espaço-tempo",
      D: "Modelo para explicar a formação de nuvens estelares"
    },
    "Resposta": "C",
    "Motivo": "A teoria das branas é uma proposta que sugere a existência de membranas multidimensionais no espaço-tempo, oferecendo uma perspectiva adicional na estrutura fundamental do universo."
  },
  {
    "Pergunta": "O que é o bóson de Higgs?",
    "Opcoes": {
      A: "Partícula responsável pela gravidade",
      B: "Partícula que compõe a matéria escura",
      C: "Partícula que confere massa a outras partículas elementares",
      D: "Partícula associada à energia escura"
    },
    "Resposta": "C",
    "Motivo": "O bóson de Higgs é uma partícula que desempenha um papel crucial na teoria eletrofraca, conferindo massa a outras partículas subatômicas através da interação com o campo de Higgs."
  },{
    "Pergunta": "O que é a teoria da inflação cósmica?",
    "Opcoes": {
      A: "Expansão acelerada do universo durante seus primeiros momentos",
      B: "Estudo sobre o movimento de corpos celestes",
      C: "Modelo para explicar a formação de estrelas",
      D: "Contraparte da teoria do Big Bang"
    },
    "Resposta": "A",
    "Motivo": "A teoria da inflação cósmica postula uma expansão acelerada do universo nos seus primeimos momentos, explicando a uniformidade observada na distribuição da radiação cósmica de fundo e fornecendo uma solução para algumas questões do modelo do Big Bang convencional. Essa teoria sugere uma rápida expansão do universo logo após o seu nascimento." },
    { "Pergunta": "O que são quarks?", 
    "Opcoes": { 
      A: "Partículas elementares que compõem átomos", 
      B: "Partículas carregadas negativamente",
      C: "Partículas que compõem a matéria escura", D: "Partículas que formam estrelas" }, "Resposta": "A", 
      "Motivo": "Quarks são partículas elementares que compõem hádrons, como prótons e nêutrons, que, por sua vez, constituem os átomos. Eles são fundamentais para a estrutura da matéria."
      }, 
      { "Pergunta": "O que é a teoria da relatividade restrita?", 
      "Opcoes": { 
        A: "Teoria que descreve o movimento de corpos celestes",
        B: "Modelo para explicar a formação de planetas", 
        C: "Teoria que aborda fenômenos em altas velocidades e/ou campos gravitacionais intensos", 
        D: "Contraparte da teoria da relatividade geral" }, 
        "Resposta": "C", 
        "Motivo": "A teoria da relatividade restrita, proposta por Einstein, lida com fenômenos que ocorrem em altas velocidades ou campos gravitacionais intensos, alterando nossa compreensão clássica do espaço e do tempo." }, 
        
        { "Pergunta": "O que é a entropia na física?", "Opcoes": {
          A: "Medida da desordem ou aleatoriedade em um sistema", 
          B: "Força que mantém os planetas em órbita", 
          C: "Propriedade que determina a temperatura de um objeto", 
          D: "Quantidade de matéria em um objeto" }, 
          "Resposta": "A", 
          "Motivo": "A entropia é uma medida da desordem ou aleatoriedade em um sistema físico. Ela está relacionada à quantidade de energia que não pode mais ser utilizada para realizar trabalho." }, 
          { "Pergunta": "O que é a teoria das cordas?",
          "Opcoes": {
            A: "Modelo para explicar a formação de cordas musicais", 
            B: "Descrição de cordas cósmicas no universo", 
            C: "Teoria que propõe que as partículas são cordas vibracionais", 
            D: "Estudo sobre a resistência de cordas" }, 
            "Resposta": "C",
            "Motivo": "A teoria das cordas é uma proposta que sugere que as partículas fundamentais são na verdade cordas vibracionais extremamente pequenas, oferecendo uma abordagem revolucionária na compreensão da natureza da matéria." }, { "Pergunta": "O que é a radiação cósmica de fundo?",
            "Opcoes": { 
              A: "Radiação emitida por estrelas distantes",
            B: "Emissões radioativas de planetas",
            C: "Radiação remanescente do Big Bang", 
            D: "Emissões solares" },
            "Resposta": "C", 
            "Motivo": "A radiação cósmica de fundo é uma radiação eletromagnética que preenche o universo e é remanescente do Big Bang, sendo crucial para entender a evolução e a estrutura do cosmos." },
  {
    "Pergunta": "O que é a teoria das partículas supersimétricas?",
    "Opcoes": {
      A: "Modelo para explicar a formação de partículas subatômicas",
      B: "Teoria que propõe a existência de partículas gêmeas para cada partícula conhecida",
      C: "Estudo sobre colisões de partículas em aceleradores",
      D: "Descrição da interação entre partículas e campos magnéticos"
    },
    "Resposta": "B",
    "Motivo": "A teoria das partículas supersimétricas postula a existência de partículas gêmeas (superparceiras) para cada partícula do Modelo Padrão, ampliando nossa compreensão da simetria na natureza."
  },
  {
    "Pergunta": "O que é a teoria das cordas heteróticas?",
    "Opcoes": {
      A: "Teoria sobre a vibração de cordas musicais",
      B: "Descrição de cordas cósmicas no universo",
      C: "Teoria que combina características das supercordas e das cordas bosônicas",
      D: "Estudo sobre a elasticidade de cordas"
    },
    "Resposta": "C",
    "Motivo": "A teoria das cordas heteróticas é uma abordagem que combina características das supercordas e das cordas bosônicas, buscando uma formulação unificada da física de partículas e da gravidade."
  },
  {
    "Pergunta": "O que é a teoria da informação quântica?",
    "Opcoes": {
      A: "Teoria sobre transmissão de dados em redes quânticas",
      B: "Modelo para explicar a formação de informação em partículas subatômicas",
      C: "Estudo sobre codificação de dados em computação quântica",
      D: "Descrição da velocidade de transmissão de informações em partículas elementares"
    },
    "Resposta": "C",
    "Motivo": "A teoria da informação quântica explora a codificação e transmissão de informações usando os princípios da mecânica quântica, sendo fundamental para o campo emergente da computação quântica."},
     {
    "Pergunta": "O que é a lei da reflexão da luz?",
    "Opcoes": {
      A: "A luz muda de direção ao passar de um meio para outro",
      B: "A velocidade da luz depende da frequência",
      C: "A luz é refletida em diferentes cores",
      D: "A luz não sofre reflexão"
    },
    "Resposta": "A",
    "Motivo": "A lei da reflexão da luz afirma que a luz incidente em uma superfície reflete de volta de acordo com o ângulo de incidência, onde o ângulo de reflexão é igual ao ângulo de incidência."
  },
  {
    "Pergunta": "O que é a lei da refração da luz?",
    "Opcoes": {
      A: "A luz muda de direção ao passar de um meio para outro",
      B: "A velocidade da luz depende da frequência",
      C: "A luz é refletida em diferentes cores",
      D: "A luz não sofre refração"
    },
    "Resposta": "A",
    "Motivo": "A lei da refração da luz estabelece que a luz muda de direção ao passar de um meio para outro, e essa mudança é acompanhada por uma alteração na velocidade da luz, dependendo dos índices de refração dos meios envolvidos."
  },
  {
    "Pergunta": "O que é a lei da conservação da carga elétrica?",
    "Opcoes": {
      A: "A carga elétrica é diretamente proporcional à corrente",
      B: "Para toda carga elétrica, há uma carga oposta igual",
      C: "A carga elétrica total em um sistema isolado permanece constante",
      D: "A carga elétrica é inversamente proporcional à resistência"
    },
    "Resposta": "C",
    "Motivo": "A lei da conservação da carga elétrica afirma que a carga elétrica total em um sistema isolado permanece constante ao longo do tempo. Não é possível criar ou destruir carga elétrica, apenas transferi-la."
  },
  {
    "Pergunta": "O que é a lei de Coulomb?",
    "Opcoes": {
      A: "A carga elétrica é diretamente proporcional à corrente",
      B: "Para toda carga elétrica, há uma carga oposta igual",
      C: "A carga elétrica total em um sistema isolado permanece constante",
      D: "A força entre duas cargas elétricas é diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância entre elas"
    },
    "Resposta": "D",
    "Motivo": "A lei de Coulomb descreve a força eletrostática entre duas cargas elétricas. Ela estabelece que a força é diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância entre elas."
  },
  {
    "Pergunta": "O que é a lei de Ohm?",
    "Opcoes": {
      A: "A carga elétrica é diretamente proporcional à corrente",
      B: "Para toda carga elétrica, há uma carga oposta igual",
      C: "A resistência é inversamente proporcional à corrente",
      D: "A corrente elétrica é diretamente proporcional à diferença de potencial e inversamente proporcional à resistência"
    },
    "Resposta": "D",
    "Motivo": "A lei de Ohm estabelece que a corrente elétrica em um condutor é diretamente proporcional à diferença de potencial (tensão) e inversamente proporcional à resistência do condutor."
  },
  {
    "Pergunta": "O que é a lei da conservação da energia mecânica?",
    "Opcoes": {
      A: "A energia cinética é diretamente proporcional à força aplicada",
      B: "A energia potencial é diretamente proporcional à força aplicada",
      C: "A energia total em um sistema isolado permanece constante",
      D: "A energia térmica é inversamente proporcional à velocidade"
    },
    "Resposta": "C",
    "Motivo": "A lei da conservação da energia mecânica afirma que a energia total (soma de energia cinética e potencial) em um sistema isolado permanece constante, desde que não haja trabalho externo não conservativo."
  },
  {
    "Pergunta": "O que é a teoria do caos?",
    "Opcoes": {
      A: "Modelo para explicar fenômenos aleatórios",
      B: "Estudo sobre a origem do universo",
      C: "Teoria que descreve padrões em sistemas dinâmicos sensíveis às condições iniciais",
      D: "Descrição da entropia em sistemas isolados"
    },
    "Resposta": "C",
    "Motivo": "A teoria do caos estuda sistemas dinâmicos complexos e mostra como pequenas variações nas condições iniciais podem levar a grandes diferenças nos resultados, revelando padrões aparentemente aleatórios."
  },
  {
    "Pergunta": "O que é a teoria cinética dos gases?",
    "Opcoes": {
      A: "Modelo para explicar o comportamento de partículas subatômicas",
      B: "Estudo sobre a origem do universo",
      C: "Teoria que descreve o comportamento macroscópico de gases em termos de partículas em movimento",
      D: "Descrição da relação entre pressão e temperatura"
    },
    "Resposta": "C",
    "Motivo": "A teoria cinética dos gases descreve o comportamento macroscópico de gases em termos do movimento das partículas que os compõem, incluindo conceitos como pressão, temperatura e velocidade média das partículas."
  },
  {
    "Pergunta": "O que é a dualidade onda-partícula?",
    "Opcoes": {
      A: "Teoria que unifica as forças fundamentais",
      B: "Estudo sobre a origem da luz",
      C: "Propriedade de algumas partículas que exibem características de partículas e ondas",
      D: "Descrição da entropia em sistemas isolados"
    },
    "Resposta": "C",
    "Motivo": "A dualidade onda-partícula é uma propriedade de algumas partículas, como elétrons e fótons, que podem exibir comportamentos tanto de partículas quanto de ondas, dependendo do experimento realizado."
  },
  {
    "Pergunta": "O que é a constante de Planck?",
    "Opcoes": {
      A: "Valor que define a velocidade da luz",
      B: "Estudo sobre a origem do universo",
      C: "Valor que relaciona a energia de um fóton à frequência da radiação",
      D: "Descrição da entropia em sistemas isolados"
    },
    "Resposta": "C",
    "Motivo": "A constante de Planck é um valor fundamental na física quântica que relaciona a energia de um fóton à frequência da radiação e é crucial para entender a natureza discreta da energia em nível subatômico."
  },
  {
    "Pergunta": "O que é a termodinâmica?",
    "Opcoes": {
      A: "Estudo sobre a origem do universo",
      B: "Modelo para explicar a formação de planetas",
      C: "Ramo da física que trata das relações entre calor, trabalho e energia",
      D: "Descrição da entropia em sistemas isolados"
    },
    "Resposta": "C",
    "Motivo": "A termodinâmica é o ramo da física que lida com as relações entre calor, trabalho e energia. Ela estabelece princípios fundamentais para compreender o comportamento de sistemas termodinâmicos."
  },
  {
    "Pergunta": "O que é a relatividade geral?",
    "Opcoes": {
      A: "Teoria que descreve o movimento de corpos celestes",
      B: "Estudo sobre a origem do universo",
      C: "Teoria que aborda a gravidade como uma curvatura do espaço-tempo",
      D: "Descrição da entropia em sistemas isolados"
    },
    "Resposta": "C",
    "Motivo": "A relatividade geral, proposta por Einstein, é uma teoria que descreve a gravidade como uma curvatura do espaço-tempo causada pela presença de massa e energia, oferecendo uma nova compreensão da gravidade."
  },
  {
    "Pergunta": "O que é a mecânica quântica?",
    "Opcoes": {
      A: "Teoria que descreve o movimento de partículas subatômicas",
      B: "Estudo sobre a origem da luz",
      C: "Teoria que descreve o comportamento de partículas em escala subatômica",
      D: "Descrição da relação entre pressão e temperatura"
    },
    "Resposta": "C",
    "Motivo": "A mecânica quântica é uma teoria fundamental que descreve o comportamento de partículas em escala subatômica, incluindo conceitos como superposição, entrelaçamento e indeterminação."
  },
  {
    "Pergunta": "O que é a lei da conservação da carga elétrica?",
    "Opcoes": {
      A: "A carga elétrica é diretamente proporcional à corrente",
      B: "Para toda carga elétrica, há uma carga oposta igual",
      C: "A carga elétrica total em um sistema isolado permanece constante",
      D: "A carga elétrica é inversamente proporcional à resistência"
    },
    "Resposta": "C",
    "Motivo": "A lei da conservação da carga elétrica afirma que a carga elétrica total em um sistema isolado permanece constante ao longo do tempo. Não é possível criar ou destruir carga elétrica, apenas transferi-la."
  },
  {
    "Pergunta": "O que é a lei de Snell-Descartes?",
    "Opcoes": {
      A: "A lei da reflexão da luz",
      B: "A lei da refração da luz",
      C: "A lei de Coulomb",
      D: "A lei da gravitação universal"
    },
    "Resposta": "B",
    "Motivo": "A lei de Snell-Descartes, também conhecida como a lei da refração da luz, descreve como a luz muda de direção ao passar de um meio para outro, relacionando os ângulos de incidência e refração."
  },
  {
    "Pergunta": "O que é a teoria das cordas?",
    "Opcoes": {
      A: "Modelo para explicar a formação de partículas subatômicas",
      B: "Teoria que unifica as forças fundamentais",
      C: "Estudo sobre a origem da luz",
      D: "Descrição da entropia em sistemas isolados"
    },
    "Resposta": "B",
    "Motivo": "A teoria das cordas é uma abordagem teórica que busca unificar todas as forças fundamentais da natureza, tratando partículas elementares como cordas vibrantes em vez de pontos."
  },
  {
    "Pergunta": "O que é a lei de Faraday da indução eletromagnética?",
    "Opcoes": {
      A: "A lei da reflexão da luz",
      B: "A lei da refração da luz",
      C: "A lei de Coulomb",
      D: "A variação do fluxo magnético em um circuito induz uma corrente elétrica"
    },
    "Resposta": "D",
    "Motivo": "A lei de Faraday da indução eletromagnética estabelece que a variação do fluxo magnético em um circuito induz uma força eletromotriz (f.e.m.) e, consequentemente, uma corrente elétrica."
  },
  {
    "Pergunta": "O que é a radiação ionizante?",
    "Opcoes": {
      A: "Radiação que altera a carga elétrica de átomos e moléculas",
      B: "Radiação térmica emitida por objetos aquecidos",
      C: "Radiação proveniente do sol",
      D: "Radiação refletida por superfícies metálicas"
    },
    "Resposta": "A",
    "Motivo": "A radiação ionizante é capaz de ionizar átomos e moléculas, alterando sua carga elétrica. Exemplos incluem radiações alfa, beta e raios-X."
  },
  {
    "Pergunta": "O que é a lei zero da termodinâmica?",
    "Opcoes": {
      A: "Se dois sistemas estão em equilíbrio térmico com um terceiro sistema, estão em equilíbrio térmico entre si",
      B: "A energia total em um sistema isolado permanece constante",
      C: "A entropia de um sistema tende a aumentar ao longo do tempo",
      D: "A energia não pode ser criada nem destruída, apenas transformada"
    },
    "Resposta": "A",
    "Motivo": "A lei zero da termodinâmica estabelece que se dois sistemas estão em equilíbrio térmico com um terceiro sistema, então eles estão em equilíbrio térmico entre si. Essa lei fundamenta a definição de temperatura."
  },
  {
    "Pergunta": "O que é a lei da conservação do momento angular?",
    "Opcoes": {
      A: "O momento angular é diretamente proporcional à velocidade angular",
      B: "A força aplicada a um objeto é igual à sua massa multiplicada pela aceleração angular",
      C: "A energia cinética é diretamente proporcional à força aplicada",
      D: "A energia térmica é inversamente proporcional à velocidade angular"
    },
    "Resposta": "A",
    "Motivo": "A lei da conservação do momento angular afirma que, em um sistema isolado, o momento angular total permanece constante, a menos que uma força externa atue sobre o sistema."
  },
  {
    "Pergunta": "O que é a lei de Pascal?",
    "Opcoes": {
      A: "A pressão de um gás é inversamente proporcional ao seu volume",
      B: "A pressão aplicada a um fluido é transmitida integralmente a todos os pontos do fluido",
      C: "A temperatura de um gás é diretamente proporcional à sua pressão",
      D: "A pressão de um fluido é diretamente proporcional à sua densidade"
    },
    "Resposta": "B",
    "Motivo": "A lei de Pascal estabelece que a pressão aplicada a um fluido incompressível em equilíbrio é transmitida integralmente a todos os pontos do fluido e das paredes do recipiente que o contém."
  },
  {
    "Pergunta": "O que é a lei de Ampère?",
    "Opcoes": {
      A: "A lei da reflexão da luz",
      B: "A lei da refração da luz",
      C: "A lei de Coulomb",
      D: "A corrente elétrica em um condutor é proporcional à diferença de potencial e inversamente proporcional à resistência"
    },
    "Resposta": "D",
    "Motivo": "A lei de Ampère relaciona o campo magnético ao redor de um condutor com a corrente elétrica que passa por ele, estabelecendo que a corrente é proporcional à diferença de potencial e inversamente proporcional à resistência."
  },
    {
    "Pergunta": "Qual é a fórmula da Lei de Ohm?",
    "Opcoes": {
      A: "V = I / R",
      B: "P = IV",
      C: "F = ma",
      D: "E = mc²"
    },
    "Resposta": "A",
    "Motivo": "A Lei de Ohm é expressa pela fórmula V = I * R, onde V é a diferença de potencial (tensão), I é a corrente elétrica e R é a resistência do condutor."
  },
  {
    "Pergunta": "Qual é a fórmula da energia cinética?",
    "Opcoes": {
      A: "E = mc²",
      B: "P = IV",
      C: "K = 0.5 * m * v²",
      D: "F = ma"
    },
    "Resposta": "C",
    "Motivo": "A energia cinética (K) é calculada pela fórmula K = 0.5 * m * v², onde m é a massa do objeto e v é sua velocidade."
  },
  {
    "Pergunta": "Qual é a fórmula da lei da gravitação universal?",
    "Opcoes": {
      A: "F = G * (m₁ * m₂) / r²",
      B: "P = IV",
      C: "E = mc²",
      D: "P = F * v"
    },
    "Resposta": "A",
    "Motivo": "A Lei da Gravitação Universal de Newton é representada pela fórmula F = G * (m₁ * m₂) / r², onde F é a força gravitacional, G é a constante gravitacional, m₁ e m₂ são as massas dos objetos e r é a distância entre os centros de massa."
  },
  {
    "Pergunta": "Qual é a fórmula da energia potencial gravitacional?",
    "Opcoes": {
      A: "E = mc²",
      B: "U = mgh",
      C: "F = G * (m₁ * m₂) / r²",
      D: "K = 0.5 * m * v²"
    },
    "Resposta": "B",
    "Motivo": "A energia potencial gravitacional (U) é calculada pela fórmula U = mgh, onde m é a massa do objeto, g é a aceleração devida à gravidade e h é a altura acima de um ponto de referência."
  },
  {
    "Pergunta": "Qual é a fórmula da lei da conservação da energia mecânica?",
    "Opcoes": {
      A: "P = IV",
      B: "E = mc²",
      C: "U + K = constante",
      D: "F = G * (m₁ * m₂) / r²"
    },
    "Resposta": "C",
    "Motivo": "A lei da conservação da energia mecânica é expressa pela equação U + K = constante, indicando que a soma da energia potencial e cinética em um sistema isolado permanece constante, desde que não haja trabalho externo não conservativo."
  },
  {
    "Pergunta": "Qual é a fórmula da lei de Coulomb?",
    "Opcoes": {
      A: "F = k * (q₁ * q₂) / r²",
      B: "P = IV",
      C: "E = mc²",
      D: "P = F * v"
    },
    "Resposta": "A",
    "Motivo": "A lei de Coulomb é representada pela fórmula F = k * (q₁ * q₂) / r², onde F é a força eletrostática, k é a constante eletrostática, q₁ e q₂ são as cargas das partículas e r é a distância entre elas."
  },
  {
    "Pergunta": "Qual é a fórmula da lei de Snell-Descartes?",
    "Opcoes": {
      A: "F = G * (m₁ * m₂) / r²",
      B: "n₁ * sin(θ₁) = n₂ * sin(θ₂)",
      C: "E = mc²",
      D: "P = F * v"
    },
    "Resposta": "B",
    "Motivo": "A lei de Snell-Descartes é expressa pela fórmula n₁ * sin(θ₁) = n₂ * sin(θ₂), onde n₁ e n₂ são os índices de refração dos meios e θ₁ e θ₂ são os ângulos de incidência e refração, respectivamente."
  },
  {
    "Pergunta": "Qual é a fórmula da potência elétrica?",
    "Opcoes": {
      A: "P = IV",
      B: "F = G * (m₁ * m₂) / r²",
      C: "E = mc²",
      D: "P = F * v"
    },
    "Resposta": "A",
    "Motivo": "A potência elétrica (P) é calculada pela fórmula P = IV, onde I é a corrente elétrica e V é a diferença de potencial (tensão)."
  },
  {
    "Pergunta": "Qual é a fórmula da lei de Gauss para o campo elétrico?",
    "Opcoes": {
      A: "Φ = q / ε₀",
      B: "P = IV",
      C: "E = mc²",
      D: "P = F * v"
    },
    "Resposta": "A",
    "Motivo": "A lei de Gauss para o campo elétrico é expressa pela fórmula Φ = q / ε₀, onde Φ é o fluxo elétrico, q é a carga e ε₀ é a constante elétrica no vácuo."
  },
  {
    "Pergunta": "Qual é a fórmula da segunda lei de Newton?",
    "Opcoes": {
      A: "F = ma",
      B: "P = IV",
      C: "E = mc²",
      D: "U = mgh"
    },
    "Resposta": "A",
    "Motivo": "A segunda lei de Newton é representada pela fórmula F = ma, onde F é a força aplicada a um objeto, m é sua massa e a é sua aceleração resultante."
  }
  
  // Adicione mais perguntas conforme necessário
  
  
    
          ];
          const perguntasGeral =[
             {
    "Pergunta": "Quantos elementos químicos existem na tabela periódica atualmente (até 2023)?",
    "Opcoes": {
      A: "92",
      B: "118",
      C: "109",
      D: "137"
    },
    "Resposta": "B",
    "Motivo": "Atualmente, a tabela periódica possui 118 elementos químicos reconhecidos. Os elementos vão do hidrogênio (número atômico 1) ao oganessônio (número atômico 118)."
  },
  {
    "Pergunta": "Qual é o país mais populoso do mundo?",
    "Opcoes": {
      A: "Índia",
      B: "China",
      C: "Estados Unidos",
      D: "Indonésia"
    },
    "Resposta": "B",
    "Motivo": "A China é o país mais populoso do mundo, com uma população de mais de 1,4 bilhão de habitantes."
  },
  {
    "Pergunta": "Qual é a distância média da Terra à Lua em quilômetros?",
    "Opcoes": {
      A: "384,400 km",
      B: "299,792 km",
      C: "149,597,870 km",
      D: "6371 km"
    },
    "Resposta": "A",
    "Motivo": "A distância média da Terra à Lua é de aproximadamente 384,400 quilômetros. Essa distância pode variar devido à órbita elíptica da Lua."
  },
  {
    "Pergunta": "Quem foi o primeiro cientista a formular a teoria heliocêntrica, indicando que a Terra orbita em torno do Sol?",
    "Opcoes": {
      A: "Isaac Newton",
      B: "Galileu Galilei",
      C: "Johannes Kepler",
      D: "Nicolau Copérnico"
    },
    "Resposta": "D",
    "Motivo": "Nicolau Copérnico foi o primeiro cientista a formular a teoria heliocêntrica no século XVI, desafiando a visão geocêntrica predominante da época."
  },
  {
    "Pergunta": "Qual é o maior deserto do mundo em área?",
    "Opcoes": {
      A: "Deserto do Saara",
      B: "Deserto da Arábia",
      C: "Deserto de Gobi",
      D: "Deserto de Atacama"
    },
    "Resposta": "A",
    "Motivo": "O Deserto do Saara é o maior deserto do mundo em área, cobrindo vastas regiões do norte da África."
  },
  {
    "Pergunta": "Em que ano ocorreu a Revolução Industrial?",
    "Opcoes": {
      A: "1750-1850",
      B: "1804-1815",
      C: "1905-1917",
      D: "1776-1783"
    },
    "Resposta": "A",
    "Motivo": "A Revolução Industrial teve início por volta de 1750 e estendeu-se até 1850, marcando uma transformação significativa nos processos de produção e na sociedade em geral."
  },
  {
    "Pergunta": "Qual é a maior cordilheira do mundo em extensão?",
    "Opcoes": {
      A: "Montanhas Rochosas",
      B: "Cordilheira dos Andes",
      C: "Cordilheira do Himalaia",
      D: "Cordilheira dos Alpes"
    },
    "Resposta": "B",
    "Motivo": "A Cordilheira dos Andes é a maior cordilheira do mundo em extensão, estendendo-se por aproximadamente 7.000 km ao longo da América do Sul."
  },
  {
    "Pergunta": "Qual é o menor país do mundo em área?",
    "Opcoes": {
      A: "San Marino",
      B: "Mônaco",
      C: "Vaticano",
      D: "Nauru"
    },
    "Resposta": "C",
    "Motivo": "O menor país do mundo em área é o Vaticano, uma cidade-estado independente enclavada em Roma, Itália."
  },
  {
    "Pergunta": "Quem foi o primeiro ser humano a viajar para o espaço?",
    "Opcoes": {
      A: "Neil Armstrong",
      B: "Yuri Gagarin",
      C: "Buzz Aldrin",
      D: "John Glenn"
    },
    "Resposta": "B",
    "Motivo": "Yuri Gagarin foi o primeiro ser humano a viajar para o espaço, realizando a órbita terrestre em 12 de abril de 1961."
  },
  {
    "Pergunta": "Quem foi o autor de 'O Príncipe', uma obra fundamental sobre teoria política?",
    "Opcoes": {
      A: "Thomas Hobbes",
      B: "John Locke",
      C: "Machiavelli",
      D: "Rousseau"
    },
    "Resposta": "C",
    "Motivo": "'O Príncipe' foi escrito por Niccolò Machiavelli, um filósofo político italiano do Renascimento, e é considerado uma obra-chave sobre estratégia política e liderança."
  },
  {
    "Pergunta": "Qual é o segundo planeta mais próximo do Sol no nosso sistema solar?",
    "Opcoes": {
      A: "Vênus",
      B: "Marte",
      C: "Júpiter",
      D: "Mercúrio"
    },
    "Resposta": "A",
    "Motivo": "Vênus é o segundo planeta mais próximo do Sol no nosso sistema solar, seguindo Mercúrio. É frequentemente referido como o planeta irmão da Terra devido a semelhanças em tamanho e composição."
  },
  {
    "Pergunta": "Quem foi o líder do movimento pelos direitos civis nos Estados Unidos e é conhecido por seu discurso 'Eu Tenho um Sonho'?",
    "Opcoes": {
      A: "Malcolm X",
      B: "Rosa Parks",
      C: "Martin Luther King Jr.",
      D: "Nelson Mandela"
    },
    "Resposta": "C",
    "Motivo": "Martin Luther King Jr. foi um líder proeminente do movimento pelos direitos civis nos Estados Unidos e é lembrado por seu papel inspirador e seu discurso histórico 'Eu Tenho um Sonho'."
  },
  {
    "Pergunta": "Qual é o nome do processo pelo qual as plantas convertem a luz solar em energia alimentar?",
    "Opcoes": {
      A: "Fotossíntese",
      B: "Quimiossíntese",
      C: "Respiração celular",
      D: "Transpiração"
    },
    "Resposta": "A",
    "Motivo": "A fotossíntese é o processo pelo qual as plantas, algas e algumas bactérias convertem a luz solar em energia química para sustentar suas atividades vitais."
  },
  {
    "Pergunta": "Qual é o valor aproximado da velocidade da luz no vácuo?",
    "Opcoes": {
      A: "299,792 km/s",
      B: "150,000 km/s",
      C: "447,040 km/s",
      D: "200,000 km/s"
    },
    "Resposta": "A",
    "Motivo": "A velocidade da luz no vácuo é aproximadamente 299,792 quilômetros por segundo (km/s), uma constante fundamental na física."
  },
  {
    "Pergunta": "Qual é o nome da maior parte do sistema nervoso central, incluindo o cérebro e a medula espinhal?",
    "Opcoes": {
      A: "Sistema Nervoso Autônomo",
      B: "Sistema Nervoso Somático",
      C: "Sistema Nervoso Periférico",
      D: "Sistema Nervoso Central"
    },
    "Resposta": "D",
    "Motivo": "O sistema nervoso central (SNC) é a parte do sistema nervoso que inclui o cérebro e a medula espinhal, desempenhando um papel vital no processamento de informações e no controle do corpo."
  },
  {
    "Pergunta": "Quem foi o líder militar e estrategista cartaginense que enfrentou Roma durante as Guerras Púnicas?",
    "Opcoes": {
      A: "Alexandre, o Grande",
      B: "Aníbal Barca",
      C: "Júlio César",
      D: "Alessandro Volta"
    },
    "Resposta": "B",
    "Motivo": "Aníbal Barca foi um comandante militar cartaginense que se destacou durante as Guerras Púnicas, especialmente por suas estratégias inovadoras e sua travessia dos Alpes para atacar Roma."
  },
  {
    "Pergunta": "Quem escreveu a obra 'Cem Anos de Solidão', ganhadora do Prêmio Nobel de Literatura?",
    "Opcoes": {
      A: "Gabriel García Márquez",
      B: "Isabel Allende",
      C: "Mario Vargas Llosa",
      D: "Jorge Luis Borges"
    },
    "Resposta": "A",
    "Motivo": "'Cem Anos de Solidão' foi escrito por Gabriel García Márquez, um autor colombiano laureado com o Prêmio Nobel de Literatura em 1982."
  },
  {
    "Pergunta": "Qual é o nome do primeiro ser humano a escalar o Monte Everest?",
    "Opcoes": {
      A: "Sir Edmund Hillary",
      B: "Reinhold Messner",
      C: "Tenzing Norgay",
      D: "Maurice Herzog"
    },
    "Resposta": "A",
    "Motivo": "Sir Edmund Hillary, da Nova Zelândia, e Tenzing Norgay, do Nepal, foram os primeiros a alcançar o cume do Monte Everest em 1953."
  },
  {
    "Pergunta": "Quem é conhecido como o 'pai da computação' e foi um pioneiro na ciência da computação?",
    "Opcoes": {
      A: "Alan Turing",
      B: "Bill Gates",
      C: "Steve Jobs",
      D: "Charles Babbage"
    },
    "Resposta": "A",
    "Motivo": "Alan Turing é conhecido como o 'pai da computação' e foi um matemático e cientista da computação britânico que desempenhou um papel crucial durante a Segunda Guerra Mundial e no desenvolvimento da teoria da computação."
  },
  {
    "Pergunta": "Qual é a unidade básica da estrutura do DNA?",
    "Opcoes": {
      A: "Nucleotídeo",
      B: "Aminoácido",
      C: "Fosfolipídeo",
      D: "Monossacarídeo"
    },
    "Resposta": "A",
    "Motivo": "A unidade básica da estrutura do DNA é o nucleotídeo, que consiste em uma base nitrogenada, um grupo fosfato e um açúcar."
  },
  {
    "Pergunta": "Qual é o fenômeno natural responsável por cores vibrantes em auroras polares?",
    "Opcoes": {
      A: "Ionização atmosférica",
      B: "Refração da luz solar",
      C: "Bioluminescência marinha",
      D: "Efeito Doppler"
    },
    "Resposta": "A",
    "Motivo": "As cores vibrantes em auroras polares são causadas pela ionização atmosférica, onde partículas carregadas provenientes do Sol interagem com os gases na atmosfera da Terra."
  },
  {
    "Pergunta": "Quem foi o fundador do Império Mongol e conquistador de grande parte da Ásia e Europa no século XIII?",
    "Opcoes": {
      A: "Genghis Khan",
      B: "Attila, o Huno",
      C: "Tamerlão",
      D: "Kublai Khan"
    },
    "Resposta": "A",
    "Motivo": "Genghis Khan foi o fundador do Império Mongol e conquistou extensas áreas da Ásia e Europa durante o século XIII, tornando-se um dos líderes mais influentes da história."
  },
  {
    "Pergunta": "Qual é a composição química predominante da atmosfera terrestre?",
    "Opcoes": {
      A: "Nitrogênio e Oxigênio",
      B: "Dióxido de Carbono e Metano",
      C: "Hidrogênio e Hélio",
      D: "Argônio e Neônio"
    },
    "Resposta": "A",
    "Motivo": "A atmosfera terrestre é predominantemente composta por nitrogênio (cerca de 78%) e oxigênio (cerca de 21%)."
  },
  {
    "Pergunta": "Quem foi o líder político e defensor dos direitos civis que recebeu o Prêmio Nobel da Paz em 1993?",
    "Opcoes": {
      A: "Nelson Mandela",
      B: "Mahatma Gandhi",
      C: "Martin Luther King Jr.",
      D: "Aung San Suu Kyi"
    },
    "Resposta": "A",
    "Motivo": "Nelson Mandela, ex-presidente da África do Sul, foi um líder político e defensor dos direitos civis que recebeu o Prêmio Nobel da Paz em 1993 por seu papel na luta contra o apartheid."
  },
     {
    "Pergunta": "Qual é o nome do primeiro satélite artificial lançado na órbita da Terra?",
    "Opcoes": {
      A: "Sputnik 1",
      B: "Explorer 1",
      C: "Vostok 1",
      D: "Hubble"
    },
    "Resposta": "A",
    "Motivo": "Sputnik 1 foi o primeiro satélite artificial lançado na órbita da Terra pela União Soviética em 1957, marcando o início da era espacial."
  },
  {
    "Pergunta": "Quem foi a primeira mulher a ganhar um Prêmio Nobel e ainda é a única a receber dois prêmios em categorias diferentes?",
    "Opcoes": {
      A: "Marie Curie",
      B: "Rosalind Franklin",
      C: "Dorothy Crowfoot Hodgkin",
      D: "Barbara McClintock"
    },
    "Resposta": "A",
    "Motivo": "Marie Curie foi a primeira mulher a ganhar um Prêmio Nobel e é a única a receber dois prêmios em categorias diferentes: Física em 1903 e Química em 1911."
  },
  {
    "Pergunta": "Qual é a principal causa do buraco na camada de ozônio?",
    "Opcoes": {
      A: "Clorofluorcarbonetos (CFCs)",
      B: "Dióxido de enxofre",
      C: "Óxidos de nitrogênio",
      D: "Metano"
    },
    "Resposta": "A",
    "Motivo": "A principal causa do buraco na camada de ozônio é a emissão de clorofluorcarbonetos (CFCs), substâncias químicas que eram comumente usadas em refrigeradores e aerossóis."
  },
  {
    "Pergunta": "Qual é o nome da teoria que descreve a relação entre massa e energia, expressa pela equação E=mc²?",
    "Opcoes": {
      A: "Teoria da Relatividade Geral",
      B: "Teoria da Gravidade Quântica",
      C: "Lei da Gravitação Universal",
      D: "Teoria da Mecânica Quântica"
    },
    "Resposta": "A",
    "Motivo": "A equação E=mc² faz parte da Teoria da Relatividade Geral de Albert Einstein, descrevendo a equivalência entre massa (m) e energia (E)."
  },
  {
    "Pergunta": "Quem foi o explorador português que liderou a primeira expedição a circum-navegar a Terra?",
    "Opcoes": {
      A: "Ferdinand Magellan",
      B: "Vasco da Gama",
      C: "Christopher Columbus",
      D: "James Cook"
    },
    "Resposta": "A",
    "Motivo": "Ferdinand Magellan foi o explorador português que liderou a primeira expedição a circum-navegar a Terra, embora ele mesmo não tenha completado a viagem."
  },
  {
    "Pergunta": "Qual é a unidade básica da estrutura de proteínas?",
    "Opcoes": {
      A: "Aminoácido",
      B: "Nucleotídeo",
      C: "Monossacarídeo",
      D: "Ácido graxo"
    },
    "Resposta": "A",
    "Motivo": "Aminoácidos são as unidades básicas da estrutura de proteínas. As proteínas são formadas por cadeias de aminoácidos."
  },
  {
    "Pergunta": "Qual é o nome do famoso físico teórico que desenvolveu a Teoria das Cordas?",
    "Opcoes": {
      A: "Stephen Hawking",
      B: "Brian Greene",
      C: "Michio Kaku",
      D: "Edward Witten"
    },
    "Resposta": "D",
    "Motivo": "Edward Witten é um físico teórico renomado que desempenhou um papel fundamental no desenvolvimento da Teoria das Cordas, uma abordagem unificada para entender as forças fundamentais da natureza."
  },
  {
    "Pergunta": "Quem foi a primeira mulher a ser eleita Primeira-Ministra de um país?",
    "Opcoes": {
      A: "Margaret Thatcher",
      B: "Golda Meir",
      C: "Angela Merkel",
      D: "Indira Gandhi"
    },
    "Resposta": "B",
    "Motivo": "Golda Meir foi a primeira mulher a ser eleita Primeira-Ministra de Israel, servindo de 1969 a 1974."
  },
  {
    "Pergunta": "Quem foi o filósofo grego conhecido por suas contribuições à ética e filosofia política, autor de 'Ética a Nicômaco'?",
    "Opcoes": {
      A: "Platão",
      B: "Sócrates",
      C: "Aristóteles",
      D: "Epicuro"
    },
    "Resposta": "C",
    "Motivo": "Aristóteles foi um filósofo grego cujas contribuições abrangeram diversas áreas, incluindo ética e filosofia política. 'Ética a Nicômaco' é uma de suas obras mais conhecidas nesse campo."
  },
  {
    "Pergunta": "Qual é o nome do evento em que uma estrela explode, liberando uma quantidade incrível de energia?",
    "Opcoes": {
      A: "Supernova",
      B: "Nebulosa",
      C: "Cometa",
      D: "Eclipse"
    },
    "Resposta": "A",
    "Motivo": "Uma supernova é o evento em que uma estrela explode, liberando uma quantidade extraordinária de energia. Esse fenômeno pode brilhar mais intensamente que uma galáxia inteira por um curto período."
  }
    
            ]
    const perguntasHistoria = [
       {
    "Pergunta": "Quem foi o primeiro imperador romano, conhecido por suas reformas e liderança durante a expansão do Império Romano?",
    "Opcoes": {
      A: "Julio César",
      B: "Augusto",
      C: "Nero",
      D: "Marco Aurélio"
    },
    "Resposta": "B",
    "Motivo": "Augusto, originalmente chamado de Otaviano, foi o primeiro imperador romano e governou de 27 a.C. a 14 d.C. Ele é conhecido por suas reformas políticas e sua contribuição para a Pax Romana."
  },
  {
    "Pergunta": "Qual foi a principal causa da Revolução Francesa em 1789?",
    "Opcoes": {
      A: "Desigualdade social e econômica",
      B: "Invasão estrangeira",
      C: "Reforma religiosa",
      D: "Má gestão econômica"
    },
    "Resposta": "A",
    "Motivo": "A principal causa da Revolução Francesa foi a desigualdade social e econômica na França, com a classe burguesa e o povo comum buscando mudanças no sistema monárquico absolutista."
  },
  {
    "Pergunta": "Quem foi o líder da Revolução Cubana que assumiu o poder em 1959?",
    "Opcoes": {
      A: "Fulgencio Batista",
      B: "Che Guevara",
      C: "Fidel Castro",
      D: "Camilo Cienfuegos"
    },
    "Resposta": "C",
    "Motivo": "Fidel Castro foi o líder da Revolução Cubana e assumiu o poder em 1959, estabelecendo um governo socialista em Cuba que durou por décadas."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Primeira Guerra Mundial em 1914?",
    "Opcoes": {
      A: "Assassinato do Arquiduque Francisco Ferdinando",
      B: "Bombardeio de Pearl Harbor",
      C: "Tratado de Versalhes",
      D: "Batalha de Stalingrado"
    },
    "Resposta": "A",
    "Motivo": "O assassinato do Arquiduque Francisco Ferdinando em Sarajevo, em 28 de junho de 1914, foi o evento que desencadeou o início da Primeira Guerra Mundial."
  },
  {
    "Pergunta": "Quem foi o líder da Revolução Russa de 1917, que resultou na formação do governo comunista sob o comando do Partido Bolchevique?",
    "Opcoes": {
      A: "Joseph Stalin",
      B: "Vladimir Lenin",
      C: "Nikolai Bukharin",
      D: "Leon Trotsky"
    },
    "Resposta": "B",
    "Motivo": "Vladimir Lenin foi o líder da Revolução Russa em 1917, que levou à instauração do governo comunista na Rússia. Ele se tornou o líder do Partido Bolchevique."
  },
  {
    "Pergunta": "Quem foi o líder militar e político alemão responsável pela liderança do Partido Nazista e instigador da Segunda Guerra Mundial?",
    "Opcoes": {
      A: "Benito Mussolini",
      B: "Hirohito",
      C: "Joseph Stalin",
      D: "Adolf Hitler"
    },
    "Resposta": "D",
    "Motivo": "Adolf Hitler foi o líder do Partido Nazista na Alemanha e instigador da Segunda Guerra Mundial. Seu governo implementou políticas racistas e antissemitas, resultando no Holocausto."
  },
  {
    "Pergunta": "Qual foi o período conhecido como Renascimento, marcado por um renascimento cultural, artístico e científico na Europa?",
    "Opcoes": {
      A: "Século das Luzes",
      B: "Idade Média",
      C: "Revolução Industrial",
      D: "Século XVI ao XVIII"
    },
    "Resposta": "D",
    "Motivo": "O Renascimento foi um período de renascimento cultural, artístico e científico que ocorreu na Europa durante os séculos XVI ao XVIII, marcando uma transição da Idade Média para a era moderna."},
    {
    "Pergunta": "Qual foi o movimento político e social que buscava a igualdade de direitos civis nos Estados Unidos, principalmente para a população afro-americana, durante a década de 1960?",
    "Opcoes": {
      A: "Movimento pelos Direitos Civis",
      B: "Movimento Feminista",
      C: "Movimento Hippie",
      D: "Movimento dos Panteras Negras"
    },
    "Resposta": "A",
    "Motivo": "O Movimento pelos Direitos Civis foi um esforço significativo nos Estados Unidos durante a década de 1960 para acabar com a segregação racial e garantir a igualdade de direitos civis para todos os cidadãos, especialmente para a população afro-americana."
  },
  {
    "Pergunta": "Quem foi a líder política e defensora dos direitos das mulheres na Índia, que desempenhou um papel fundamental na independência do país?",
    "Opcoes": {
      A: "Margaret Thatcher",
      B: "Indira Gandhi",
      C: "Rosa Parks",
      D: "Mahatma Gandhi"
    },
    "Resposta": "C",
    "Motivo": "Indira Gandhi foi a primeira mulher a ocupar o cargo de Primeira-Ministra da Índia e desempenhou um papel fundamental na independência do país. Ela era filha de Jawaharlal Nehru."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o fim da Guerra Fria, simbolizado pela queda do Muro de Berlim em 1989?",
    "Opcoes": {
      A: "Revolução Cubana",
      B: "Primavera de Praga",
      C: "Revolução Iraniana",
      D: "Reunificação Alemã"
    },
    "Resposta": "D",
    "Motivo": "A queda do Muro de Berlim em 1989 simbolizou o fim da Guerra Fria e levou à reunificação da Alemanha, marcando um importante momento na história contemporânea."
  },
  {
    "Pergunta": "Qual foi a batalha decisiva durante a Guerra do Pacífico na Segunda Guerra Mundial, onde as forças dos Estados Unidos e Japão se enfrentaram?",
    "Opcoes": {
      A: "Batalha de Iwo Jima",
      B: "Batalha de Midway",
      C: "Batalha de Guadalcanal",
      D: "Batalha de Okinawa"
    },
    "Resposta": "B",
    "Motivo": "A Batalha de Midway, ocorrida em junho de 1942, foi uma batalha decisiva na Guerra do Pacífico, onde as forças dos Estados Unidos conseguiram uma vitória estratégica crucial sobre as forças japonesas."
  },
  {
    "Pergunta": "Quem foi o líder sul-africano que desempenhou um papel fundamental na luta contra o apartheid e se tornou o primeiro presidente negro do país?",
    "Opcoes": {
      A: "Nelson Mandela",
      B: "Desmond Tutu",
      C: "Steve Biko",
      D: "F.W. de Klerk"
    },
    "Resposta": "A",
    "Motivo": "Nelson Mandela foi um líder sul-africano que desempenhou um papel crucial na luta contra o apartheid. Ele se tornou o primeiro presidente negro da África do Sul em 1994, após décadas de ativismo."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Revolução Industrial na Inglaterra, no final do século XVIII?",
    "Opcoes": {
      A: "Invenção da máquina a vapor",
      B: "Descobrimento da eletricidade",
      C: "Invenção do telégrafo",
      D: "Descobrimento do processo de Bessemer"
    },
    "Resposta": "A",
    "Motivo": "A invenção da máquina a vapor marcou o início da Revolução Industrial na Inglaterra, transformando os métodos de produção e dando início a um período de significativo desenvolvimento econômico e tecnológico."
  },
  {
    "Pergunta": "Quem foi o líder político indiano que conduziu o movimento de independência da Índia através da resistência não violenta?",
    "Opcoes": {
      A: "Indira Gandhi",
      B: "Jawaharlal Nehru",
      C: "Mahatma Gandhi",
      D: "Subhas Chandra Bose"
    },
    "Resposta": "C",
    "Motivo": "Mahatma Gandhi, também conhecido como Bapu, foi o líder do movimento de independência da Índia. Ele advogava pela resistência não violenta e liderou o país à independência em 1947."
  },
  
  {
    "Pergunta": "Qual foi o evento que marcou o fim da Idade Média na Europa, caracterizado pela redescoberta da cultura clássica, avanços científicos e artísticos?",
    "Opcoes": {
      A: "Renascimento",
      B: "Reforma Protestante",
      C: "Iluminismo",
      D: "Revolução Francesa"
    },
    "Resposta": "A",
    "Motivo": "O Renascimento foi o evento que marcou o fim da Idade Média na Europa, caracterizado pela redescoberta da cultura clássica, avanços científicos e artísticos. Foi um período de renovação cultural e intelectual."
  },
  {
    "Pergunta": "Qual foi o nome do evento em 1215, no qual o rei João da Inglaterra foi forçado a assinar uma carta limitando seus próprios poderes e estabelecendo princípios legais?",
    "Opcoes": {
      A: "Magna Carta",
      B: "Carta Magna",
      C: "Lei Áurea",
      D: "Declaração de Direitos"
    },
    "Resposta": "A",
    "Motivo": "A Magna Carta, assinada em 1215, foi um documento que limitava os poderes do rei João da Inglaterra e estabelecia princípios legais fundamentais. É considerada uma precursora importante dos direitos individuais e do devido processo legal."
  },
  {
    "Pergunta": "Quem foi o líder militar e estrategista francês que liderou as tropas durante a Guerra dos Cem Anos e foi canonizado posteriormente?",
    "Opcoes": {
      A: "Joana d'Arc",
      B: "Carlos Martel",
      C: "Napoleão Bonaparte",
      D: "Luís XIV"
    },
    "Resposta": "A",
    "Motivo": "Joana d'Arc foi uma líder militar e estrategista francesa que desempenhou um papel crucial durante a Guerra dos Cem Anos, sendo canonizada como santa posteriormente."
  },
  {
    "Pergunta": "Quem foi o presidente dos Estados Unidos durante a Guerra Civil Americana?",
    "Opcoes": {
      A: "Abraham Lincoln",
      B: "Andrew Johnson",
      C: "Ulysses S. Grant",
      D: "Jefferson Davis"
    },
    "Resposta": "A",
    "Motivo": "Abraham Lincoln foi o presidente dos Estados Unidos durante a Guerra Civil Americana. Ele foi um líder central na preservação da União e na abolição da escravidão."
  },
  {
    "Pergunta": "Qual foi o nome do programa espacial da União Soviética que enviou a primeira sonda espacial tripulada ao espaço, com Yuri Gagarin em 1961?",
    "Opcoes": {
      A: "Programa Apollo",
      B: "Projeto Mercury",
      C: "Sputnik",
      D: "Vostok"
    },
    "Resposta": "D",
    "Motivo": "O programa espacial da União Soviética que enviou a primeira sonda espacial tripulada ao espaço foi o Vostok, com Yuri Gagarin se tornando o primeiro humano a orbitar a Terra em 1961."
  },
  {
    "Pergunta": "Quem foi o líder militar macedônio que conquistou um vasto império, incluindo a Pérsia, Egito e partes da Índia?",
    "Opcoes": {
      A: "Júlio César",
      B: "Alexandre, o Grande",
      C: "Napoleão Bonaparte",
      D: "Genghis Khan"
    },
    "Resposta": "B",
    "Motivo": "Alexandre, o Grande, foi um líder militar macedônio que conquistou um vasto império durante o século IV a.C., estendendo-se da Grécia à Pérsia, ao Egito e até partes da Índia."
  },
  {
    "Pergunta": "Qual foi a dinastia chinesa que construiu a Grande Muralha da China durante o século III a.C.?",
    "Opcoes": {
      A: "Dinastia Tang",
      B: "Dinastia Ming",
      C: "Dinastia Qin",
      D: "Dinastia Han"
    },
    "Resposta": "C",
    "Motivo": "A Dinastia Qin, durante o governo do imperador Qin Shi Huang, foi responsável pela construção da Grande Muralha da China no século III a.C."
  },
  {
    "Pergunta": "Quem foi o líder militar cartaginense que desafiou Roma durante as Guerras Púnicas, atravessando os Alpes com elefantes?",
    "Opcoes": {
      A: "Aníbal Barca",
      B: "Cipião Africano",
      C: "Cartago Magno",
      D: "Hanibal Lecter"
    },
    "Resposta": "A",
    "Motivo": "Aníbal Barca foi o líder militar cartaginense que desafiou Roma durante as Guerras Púnicas, sendo conhecido por sua audaciosa travessia dos Alpes com elefantes."
  },
  {
    "Pergunta": "Quem foi o líder da Revolução Bolchevique na Rússia, levando à formação do governo comunista em 1917?",
    "Opcoes": {
      A: "Vladimir Putin",
      B: "Nikolai Bukharin",
      C: "Joseph Stalin",
      D: "Vladimir Lenin"
    },
    "Resposta": "D",
    "Motivo": "Vladimir Lenin foi o líder da Revolução Bolchevique na Rússia, que levou à formação do governo comunista em 1917, marcando o início do período soviético."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Reforma Protestante no século XVI, liderada por Martinho Lutero?",
    "Opcoes": {
      A: "Cisma do Oriente",
      B: "Concílio de Trento",
      C: "Diet of Worms",
      D: "As 95 Teses"
    },
    "Resposta": "D",
    "Motivo": "O evento que marcou o início da Reforma Protestante foi a publicação das 95 Teses por Martinho Lutero em 1517, criticando práticas da Igreja Católica."
  },
  {
    "Pergunta": "Quem foi o faraó egípcio mais conhecido por suas construções monumentais, incluindo a Grande Pirâmide de Gizé?",
    "Opcoes": {
      A: "Amenhotep III",
      B: "Ramsés II",
      C: "Tutancâmon",
      D: "Quéops"
    },
    "Resposta": "D",
    "Motivo": "Quéops foi o faraó do Antigo Egito mais conhecido por suas construções monumentais, incluindo a Grande Pirâmide de Gizé, uma das Sete Maravilhas do Mundo Antigo."
  },
  {
    "Pergunta": "Quem foi o explorador português que liderou a primeira expedição a circum-navegar a Terra?",
    "Opcoes": {
      A: "Ferdinand Magellan",
      B: "Vasco da Gama",
      C: "Christopher Columbus",
      D: "James Cook"
    },
    "Resposta": "A",
    "Motivo": "Ferdinand Magellan foi o explorador português que liderou a primeira expedição a circum-navegar a Terra, embora ele mesmo não tenha completado a viagem."
  },
  {
    "Pergunta": "Qual foi a batalha decisiva na Guerra Civil Americana, que resultou na vitória das forças da União?",
    "Opcoes": {
      A: "Batalha de Gettysburg",
      B: "Batalha de Antietam",
      C: "Batalha de Bull Run",
      D: "Batalha de Vicksburg"
    },
    "Resposta": "A",
    "Motivo": "A Batalha de Gettysburg foi a batalha decisiva na Guerra Civil Americana, onde as forças da União obtiveram uma vitória crucial sobre as forças confederadas."
  },
  {
    "Pergunta": "Quem foi o líder político indiano que desempenhou um papel crucial na luta pela independência da Índia, usando princípios de não violência?",
    "Opcoes": {
      A: "Jawaharlal Nehru",
      B: "Sardar Patel",
      C: "Subhas Chandra Bose",
      D: "Mahatma Gandhi"
    },
    "Resposta": "D",
    "Motivo": "Mahatma Gandhi foi o líder político indiano que desempenhou um papel crucial na luta pela independência da Índia, usando princípios de não violência e resistência civil."
  },
  {
    "Pergunta": "Quem foi o monarca francês conhecido como o 'Rei Sol', que governou durante o apogeu do absolutismo no século XVII?",
    "Opcoes": {
      A: "Henrique IV",
      B: "Luís XIV",
      C: "Luís XVI",
      D: "Napoleão Bonaparte"
    },
    "Resposta": "B",
    "Motivo": "Luís XIV, conhecido como o 'Rei Sol', foi um monarca francês que governou de 1643 a 1715, destacando-se pelo absolutismo e por sua corte em Versalhes."
  },
  {
    "Pergunta": "Quem foi o explorador português responsável pela descoberta do caminho marítimo para as Índias, contornando o Cabo da Boa Esperança em 1498?",
    "Opcoes": {
      A: "Bartolomeu Dias",
      B: "Fernão Mendes Pinto",
      C: "Vasco da Gama",
      D: "Pedro Álvares Cabral"
    },
    "Resposta": "C",
    "Motivo": "Vasco da Gama foi o explorador português que descobriu o caminho marítimo para as Índias, contornando o Cabo da Boa Esperança em 1498, estabelecendo uma rota crucial para o comércio com o Oriente."
  },
  {
    "Pergunta": "Quem foi o líder militar e político inglês que desempenhou um papel crucial durante a Segunda Guerra Mundial e é conhecido por seus discursos inspiradores?",
    "Opcoes": {
      A: "Winston Churchill",
      B: "Neville Chamberlain",
      C: "Margaret Thatcher",
      D: "Tony Blair"
    },
    "Resposta": "A",
    "Motivo": "Winston Churchill foi o líder militar e político inglês que desempenhou um papel crucial durante a Segunda Guerra Mundial, sendo conhecido por seus discursos inspiradores e determinação contra a Alemanha nazista."
  },
  {
    "Pergunta": "Quem foi o primeiro imperador do Brasil, proclamado em 1822 após a independência do país?",
    "Opcoes": {
      A: "Dom Pedro II",
      B: "Dom João VI",
      C: "Dom Pedro I",
      D: "Dom Manuel I"
    },
    "Resposta": "C",
    "Motivo": "Dom Pedro I foi o primeiro imperador do Brasil, proclamado em 1822 após a independência do país. Ele foi anteriormente o príncipe regente do Brasil e filho do rei português Dom João VI."
  },
  {
    "Pergunta": "Qual foi o evento que marcou a independência do Brasil em 1822, quando Dom Pedro I proclamou a separação de Portugal?",
    "Opcoes": {
      A: "Grito do Ipiranga",
      B: "Independência ou Morte",
      C: "Proclamação da República",
      D: "Revolução Farroupilha"
    },
    "Resposta": "B",
    "Motivo": "A independência do Brasil foi proclamada por Dom Pedro I às margens do rio Ipiranga em 7 de setembro de 1822, marcando o famoso 'Independência ou Morte'."
  },
  {
    "Pergunta": "Quem foi o navegador espanhol que liderou a primeira viagem de circum-navegação do globo, completada em 1522?",
    "Opcoes": {
      A: "Cristóvão Colombo",
      B: "Ferdinand Magellan",
      C: "Hernán Cortés",
      D: "Francisco Pizarro"
    },
    "Resposta": "B",
    "Motivo": "Ferdinand Magellan foi o navegador espanhol que liderou a primeira viagem de circum-navegação do globo, embora ele próprio não tenha completado a jornada, sendo morto nas Filipinas."
  },
  {
    "Pergunta": "Quem foi o líder da Revolução Russa em 1917 e o primeiro líder do governo comunista na Rússia?",
    "Opcoes": {
      A: "Vladimir Lenin",
      B: "Joseph Stalin",
      C: "Leon Trotsky",
      D: "Nikolai Bukharin"
    },
    "Resposta": "A",
    "Motivo": "Vladimir Lenin foi o líder da Revolução Russa em 1917 e o primeiro líder do governo comunista na Rússia, liderando o Partido Bolchevique."
  },
  {
    "Pergunta": "Quem foi o presidente do Brasil que liderou o país durante a ditadura militar, de 1964 a 1985?",
    "Opcoes": {
      A: "Juscelino Kubitschek",
      B: "Fernando Henrique Cardoso",
      C: "Getúlio Vargas",
      D: "Emílio Médici"
    },
    "Resposta": "D",
    "Motivo": "Emílio Médici foi o presidente do Brasil que liderou o país durante a ditadura militar, de 1969 a 1974, marcada por medidas autoritárias e repressão política."
  },
  {
    "Pergunta": "Quem foi o líder militar e político brasileiro que desempenhou um papel fundamental na independência do país em 1822?",
    "Opcoes": {
      A: "Dom Pedro II",
      B: "José Bonifácio",
      C: "Luís Alves de Lima e Silva",
      D: "Marechal Deodoro da Fonseca"
    },
    "Resposta": "B",
    "Motivo": "José Bonifácio foi o líder militar e político brasileiro que desempenhou um papel fundamental na independência do Brasil em 1822, sendo conhecido como o 'Patriarca da Independência'."
  },
  {
    "Pergunta": "Qual foi o sistema econômico, social e político predominante na Europa durante a Idade Média, caracterizado pela descentralização do poder e obrigações mútuas?",
    "Opcoes": {
      A: "Capitalismo",
      B: "Socialismo",
      C: "Feudalismo",
      D: "Mercantilismo"
    },
    "Resposta": "C",
    "Motivo": "O Feudalismo foi o sistema predominante na Europa durante a Idade Média, caracterizado pela descentralização do poder, com senhores feudais, vassalos e obrigações mútuas."
  },
  {
    "Pergunta": "Quem foi o líder militar franco que se tornou o primeiro rei dos francos e foi fundamental na cristianização da Europa Ocidental durante o século V?",
    "Opcoes": {
      A: "Carlos Magno",
      B: "Carlos Martel",
      C: "Clóvis I",
      D: "Luís XIV"
    },
    "Resposta": "C",
    "Motivo": "Clóvis I foi o líder militar franco que se tornou o primeiro rei dos francos. Ele desempenhou um papel crucial na cristianização da Europa Ocidental e converteu-se ao cristianismo."
  },
  {
    "Pergunta": "Qual foi o tratado que dividiu o Império Carolíngio em três partes em 843, marcando o início do sistema feudal na Europa Ocidental?",
    "Opcoes": {
      A: "Tratado de Verdun",
      B: "Tratado de Troyes",
      C: "Tratado de Westfália",
      D: "Tratado de Paris"
    },
    "Resposta": "A",
    "Motivo": "O Tratado de Verdun, assinado em 843, dividiu o Império Carolíngio em três partes, marcando o início do sistema feudal na Europa Ocidental, com as futuras nações de França, Alemanha e Itália."
  },
  {
    "Pergunta": "Quem foi o líder normando que se tornou rei da Inglaterra em 1066, após a Batalha de Hastings?",
    "Opcoes": {
      A: "Ricardo Coração de Leão",
      B: "William, o Conquistador",
      C: "Haroldo II",
      D: "Henrique II"
    },
    "Resposta": "B",
    "Motivo": "William, o Conquistador, foi o líder normando que se tornou rei da Inglaterra após a Batalha de Hastings em 1066, marcando o início da dinastia normanda."
  },
  {
    "Pergunta": "Qual foi a série de expedições militares cristãs empreendidas para recuperar a Terra Santa do controle muçulmano durante a Idade Média?",
    "Opcoes": {
      A: "Cruzadas",
      B: "Reconquista",
      C: "Inquisição",
      D: "Guerra dos Cem Anos"
    },
    "Resposta": "A",
    "Motivo": "As Cruzadas foram uma série de expedições militares cristãs durante a Idade Média, com o objetivo de recuperar a Terra Santa (Jerusalém e região circundante) do controle muçulmano."
  },
  {
    "Pergunta": "Qual foi o documento inglês de 1215 que limitou os poderes do rei e estabeleceu princípios legais fundamentais?",
    "Opcoes": {
      A: "Magna Carta",
      B: "Petição de Direitos",
      C: "Habeas Corpus",
      D: "Carta Magna"
    },
    "Resposta": "A",
    "Motivo": "A Magna Carta, assinada em 1215, foi um documento que limitou os poderes do rei inglês João Sem Terra e estabeleceu princípios legais fundamentais, influenciando o desenvolvimento do sistema legal."
  },
  {
    "Pergunta": "Quem foi a líder francesa que desempenhou um papel crucial durante a Guerra dos Cem Anos, sendo capturada pelos ingleses e posteriormente queimada na fogueira?",
    "Opcoes": {
      A: "Joana d'Arc",
      B: "Catarina de Médici",
      C: "Maria Antonieta",
      D: "Isabel de Castela"
    },
    "Resposta": "A",
    "Motivo": "Joana d'Arc foi a líder francesa que desempenhou um papel crucial durante a Guerra dos Cem Anos. Ela foi capturada pelos ingleses, julgada por heresia e queimada na fogueira em 1431."
  },
  {
    "Pergunta": "Qual foi o sistema de governo medieval baseado na relação entre senhores e servos, com terras sendo concedidas em troca de serviços e proteção?",
    "Opcoes": {
      A: "Monarquia Absoluta",
      B: "Sistema Feudal",
      C: "Teocracia",
      D: "Oligarquia"
    },
    "Resposta": "B",
    "Motivo": "O Sistema Feudal foi o sistema de governo medieval baseado na relação entre senhores e servos, com terras sendo concedidas em troca de serviços e proteção mútua."
  },
  {
    "Pergunta": "Quem foi o imperador romano-germânico coroado pelo papa em 800, marcando o início do Sacro Império Romano-Germânico?",
    "Opcoes": {
      A: "Carlos Magno",
      B: "Otto I",
      C: "Carlos V",
      D: "Frederico Barbarossa"
    },
    "Resposta": "A",
    "Motivo": "Carlos Magno foi o imperador romano-germânico coroado pelo papa em 800, marcando o início do Sacro Império Romano-Germânico, uma entidade política que abrangeu grande parte da Europa Central durante a Idade Média."
  },
  {
    "Pergunta": "Qual foi o movimento religioso que desafiou as práticas e doutrinas da Igreja Católica no século XVI, dando origem a diversas denominações protestantes?",
    "Opcoes": {
      A: "Renascimento",
      B: "Reforma Protestante",
      C: "Contrarreforma",
      D: "Grande Cisma do Ocidente"
    },
    "Resposta": "B",
    "Motivo": "A Reforma Protestante foi o movimento religioso que desafiou as práticas e doutrinas da Igreja Católica no século XVI, resultando na formação de diversas denominações protestantes e na fragmentação do cristianismo ocidental."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Revolução Científica no século XVII, desafiando as visões geocêntricas e impulsionando o método científico?",
    "Opcoes": {
      A: "Revolução Industrial",
      B: "Iluminismo",
      C: "Reforma Protestante",
      D: "Teoria Heliocêntrica"
    },
    "Resposta": "D",
    "Motivo": "A Teoria Heliocêntrica, proposta por Copérnico e desenvolvida por Galileu e Kepler, marcou o início da Revolução Científica ao desafiar as visões geocêntricas e estabelecer o Sol como o centro do sistema solar."
  },
  {
    "Pergunta": "Quem foi o rei inglês que foi deposto durante a Revolução Gloriosa em 1688, marcando a ascensão do parlamentarismo e o início da monarquia constitucional?",
    "Opcoes": {
      A: "Carlos I",
      B: "Jaime II",
      C: "Guilherme III",
      D: "Maria II"
    },
    "Resposta": "B",
    "Motivo": "Jaime II foi o rei inglês deposto durante a Revolução Gloriosa em 1688. Isso levou à ascensão de Guilherme III e Maria II ao trono, estabelecendo princípios do parlamentarismo e da monarquia constitucional."
  },
  {
    "Pergunta": "Qual foi o conflito que envolveu as colônias britânicas na América do Norte e resultou na independência dos Estados Unidos em 1783?",
    "Opcoes": {
      A: "Guerra Civil Americana",
      B: "Guerra Franco-Indígena",
      C: "Guerra Revolucionária Americana",
      D: "Guerra de Secessão"
    },
    "Resposta": "C",
    "Motivo": "A Guerra Revolucionária Americana, ocorrida entre 1775 e 1783, envolveu as colônias britânicas na América do Norte e resultou na independência dos Estados Unidos."
  },
  {
    "Pergunta": "Quem foi o líder militar e político francês que desempenhou um papel central na Revolução Francesa, liderando as forças republicanas durante a guerra?",
    "Opcoes": {
      A: "Robespierre",
      B: "Napoleão Bonaparte",
      C: "Luís XVI",
      D: "Marat"
    },
    "Resposta": "B",
    "Motivo": "Napoleão Bonaparte foi o líder militar e político francês que desempenhou um papel central na Revolução Francesa. Ele eventualmente se tornou o líder da França como cônsul e depois imperador."
  },
  {
    "Pergunta": "Qual foi o movimento intelectual e cultural que enfatizou a razão, a ciência e a liberdade individual, influenciando o surgimento de ideias democráticas e republicanas?",
    "Opcoes": {
      A: "Revolução Industrial",
      B: "Reforma Protestante",
      C: "Iluminismo",
      D: "Romantismo"
    },
    "Resposta": "C",
    "Motivo": "O Iluminismo foi o movimento intelectual e cultural que enfatizou a razão, a ciência e a liberdade individual. Influenciou o surgimento de ideias democráticas e republicanas durante os séculos XVII e XVIII."
  },
  {
    "Pergunta": "Quem foi o imperador francês que liderou campanhas militares significativas na Europa, mas foi derrotado e exilado na Ilha de Elba antes de retornar durante os Cem Dias?",
    "Opcoes": {
      A: "Napoleão Bonaparte",
      B: "Luís XIV",
      C: "Robespierre",
      D: "Carlos X"
    },
    "Resposta": "A",
    "Motivo": "Napoleão Bonaparte foi o imperador francês que liderou campanhas militares significativas na Europa. Após sua derrota, foi exilado na Ilha de Elba, mas retornou durante os Cem Dias antes de ser derrotado em Waterloo."
  },
  {
    "Pergunta": "Qual foi o conflito militar que ocorreu nos Estados Unidos entre 1861 e 1865, envolvendo estados do Norte (União) e estados do Sul (Confederação) por questões relacionadas à escravidão e autonomia estadual?",
    "Opcoes": {
      A: "Guerra Hispano-Americana",
      B: "Guerra Civil Inglesa",
      C: "Guerra Civil Americana",
      D: "Guerra Franco-Prussiana"
    },
    "Resposta": "C",
    "Motivo": "A Guerra Civil Americana foi o conflito militar nos Estados Unidos entre 1861 e 1865, envolvendo estados do Norte (União) e estados do Sul (Confederação) por questões relacionadas à escravidão e autonomia estadual."
  },
    {
    "Pergunta": "Qual foi o tratado que encerrou a Primeira Guerra Mundial em 1919, impondo pesadas penalidades à Alemanha e estabelecendo a Liga das Nações?",
    "Opcoes": {
      A: "Tratado de Versalhes",
      B: "Tratado de Tordesilhas",
      C: "Tratado de Paris",
      D: "Tratado de Brest-Litovski"
    },
    "Resposta": "A",
    "Motivo": "O Tratado de Versalhes, assinado em 1919, encerrou a Primeira Guerra Mundial e impôs pesadas penalidades à Alemanha. Também estabeleceu a Liga das Nações, uma precursora da Organização das Nações Unidas (ONU)."
  },
  {
    "Pergunta": "Quem foi o líder do movimento de independência da Índia, adotando a filosofia da não violência como meio de protesto contra o domínio britânico?",
    "Opcoes": {
      A: "Jawaharlal Nehru",
      B: "Mahatma Gandhi",
      C: "Subhas Chandra Bose",
      D: "Sardar Patel"
    },
    "Resposta": "B",
    "Motivo": "Mahatma Gandhi foi o líder do movimento de independência da Índia, conhecido por adotar a filosofia da não violência (satyagraha) como meio de protesto contra o domínio britânico."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Revolução Russa em 1917, levando à abdicação do czar Nicolau II e ao estabelecimento de um governo socialista?",
    "Opcoes": {
      A: "Revolução de Outubro",
      B: "Revolução de Fevereiro",
      C: "Guerra Civil Russa",
      D: "Levante de Kronstadt"
    },
    "Resposta": "B",
    "Motivo": "A Revolução de Fevereiro de 1917 marcou o início da Revolução Russa, levando à abdicação do czar Nicolau II e ao estabelecimento de um governo provisório, que foi posteriormente substituído pelo governo socialista bolchevique na Revolução de Outubro."
  },
  {
    "Pergunta": "Quem foi o líder político e militar alemão que liderou o Partido Nazista, implementou políticas de expansão territorial e promoveu o Holocausto durante a Segunda Guerra Mundial?",
    "Opcoes": {
      A: "Benito Mussolini",
      B: "Hirohito",
      C: "Joseph Stalin",
      D: "Adolf Hitler"
    },
    "Resposta": "D",
    "Motivo": "Adolf Hitler foi o líder político e militar alemão que liderou o Partido Nazista. Ele implementou políticas expansionistas, desencadeando a Segunda Guerra Mundial, e promoveu o Holocausto, resultando na perseguição e genocídio de milhões de judeus e outros grupos."
  },
  {
    "Pergunta": "Qual foi o plano econômico implementado pelos Estados Unidos após a Segunda Guerra Mundial para ajudar na reconstrução da Europa, visando conter a influência comunista?",
    "Opcoes": {
      A: "Plano Marshall",
      B: "Plano Dawes",
      C: "New Deal",
      D: "Plano de Cinco Anos"
    },
    "Resposta": "A",
    "Motivo": "O Plano Marshall foi um plano econômico implementado pelos Estados Unidos após a Segunda Guerra Mundial. Seu objetivo era ajudar na reconstrução da Europa, conter a influência comunista e promover a estabilidade econômica na região."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Guerra Fria, dividindo o mundo em blocos liderados pelos Estados Unidos (capitalista) e pela União Soviética (comunista)?",
    "Opcoes": {
      A: "Crise dos Mísseis Cubanos",
      B: "Bloqueio de Berlim",
      C: "Tratado de Varsóvia",
      D: "Conferência de Yalta"
    },
    "Resposta": "D",
    "Motivo": "A Conferência de Yalta, realizada em 1945, marcou o início da Guerra Fria ao dividir o mundo em blocos liderados pelos Estados Unidos e pela União Soviética. As diferenças ideológicas entre o capitalismo e o comunismo foram fundamentais nesse período de tensões."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o fim da Guerra Fria em 1989, envolvendo a queda do Muro de Berlim e a reunificação da Alemanha?",
    "Opcoes": {
      A: "Primavera de Praga",
      B: "Revolução Cultural",
      C: "Desmantelamento da URSS",
      D: "Revoluções de 1989"
    },
    "Resposta": "D",
    "Motivo": "As Revoluções de 1989 marcaram o fim da Guerra Fria. O evento mais emblemático foi a queda do Muro de Berlim, que simbolizou a reunificação da Alemanha e o declínio do comunismo na Europa Oriental."
  },
    {
    "Pergunta": "Qual foi o movimento cultural e intelectual que se destacou na Europa durante o século XVIII, enfatizando a razão, a ciência e a crítica às instituições sociais?",
    "Opcoes": {
      A: "Renascimento",
      B: "Iluminismo",
      C: "Revolução Industrial",
      D: "Reforma Protestante"
    },
    "Resposta": "B",
    "Motivo": "O Iluminismo foi o movimento cultural e intelectual que se destacou na Europa durante o século XVIII. Ele enfatizou a razão, a ciência e a crítica às instituições sociais, contribuindo para o desenvolvimento de ideias democráticas e liberais."
  },
  {
    "Pergunta": "Quem foi o monarca francês que reinou por mais tempo durante o Ancien Régime, sendo um patrono das artes e um exemplo de absolutismo?",
    "Opcoes": {
      A: "Luís XV",
      B: "Luís XVI",
      C: "Luís XIV",
      D: "Napoleão Bonaparte"
    },
    "Resposta": "C",
    "Motivo": "Luís XIV, conhecido como o Rei Sol, reinou por mais tempo durante o Ancien Régime na França. Ele foi um patrono das artes e um exemplo de absolutismo, concentrando poderes nas mãos do monarca."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Revolução Francesa em 1789, simbolizado pela tomada da Bastilha pelos revolucionários?",
    "Opcoes": {
      A: "Revolução Gloriosa",
      B: "Revolução Industrial",
      C: "Queda de Constantinopla",
      D: "Tomada da Bastilha"
    },
    "Resposta": "D",
    "Motivo": "A tomada da Bastilha em 1789 marcou o início da Revolução Francesa. Esse evento simbolizou a luta contra a monarquia absoluta e a busca por liberdade, igualdade e fraternidade."
  },
  {
    "Pergunta": "Quem foi o líder militar e político que emergiu durante as guerras de independência na América Latina, desempenhando um papel fundamental na independência de vários países, incluindo Argentina, Chile e Peru?",
    "Opcoes": {
      A: "Simón Bolívar",
      B: "José de San Martín",
      C: "Dom Pedro II",
      D: "Miguel Hidalgo"
    },
    "Resposta": "B",
    "Motivo": "José de San Martín foi o líder militar e político que emergiu durante as guerras de independência na América Latina. Ele desempenhou um papel fundamental na independência de vários países, incluindo Argentina, Chile e Peru."
  },
  {
    "Pergunta": "Qual foi o período histórico caracterizado pelo surgimento de movimentos políticos e sociais, como a Revolução Industrial, a Revolução Francesa e as lutas por independência na América Latina?",
    "Opcoes": {
      A: "Idade Moderna",
      B: "Renascimento",
      C: "Idade Contemporânea",
      D: "Era das Revoluções"
    },
    "Resposta": "D",
    "Motivo": "A Era das Revoluções é o período histórico caracterizado pelo surgimento de movimentos políticos e sociais transformadores. Inclui eventos como a Revolução Industrial, a Revolução Francesa e as lutas por independência na América Latina."
  },
  {
    "Pergunta": "Quem foi o autor da obra 'A Riqueza das Nações', considerada um dos pilares da economia clássica, defendendo a liberdade econômica e a mão invisível do mercado?",
    "Opcoes": {
      A: "Karl Marx",
      B: "Adam Smith",
      C: "John Locke",
      D: "Jean-Jacques Rousseau"
    },
    "Resposta": "B",
    "Motivo": "Adam Smith foi o autor da obra 'A Riqueza das Nações'. Ele é considerado um dos pilares da economia clássica, defendendo a liberdade econômica e introduzindo o conceito da 'mão invisível' do mercado."
  },
  {
    "Pergunta": "Qual foi o líder haitiano que desempenhou um papel crucial na independência do Haiti, tornando-se o primeiro líder negro independente da América Latina?",
    "Opcoes": {
      A: "Toussaint Louverture",
      B: "Simón Bolívar",
      C: "Miguel Hidalgo",
      D: "Dom Pedro II"
    },
    "Resposta": "A",
    "Motivo": "Toussaint Louverture foi o líder haitiano que desempenhou um papel crucial na independência do Haiti. Ele tornou-se o primeiro líder negro independente da América Latina e lutou contra a escravidão e o domínio colonial francês."
  },
  {
    "Pergunta": "Qual foi a batalha decisiva que ocorreu em 1815, marcando o fim das Guerras Napoleônicas e o exílio final de Napoleão Bonaparte?",
    "Opcoes": {
      A: "Batalha de Leipzig",
      B: "Batalha de Austerlitz",
      C: "Batalha de Waterloo",
      D: "Batalha de Jena-Auerstedt"
    },
    "Resposta": "C",
    "Motivo": "A Batalha de Waterloo, ocorrida em 1815, foi decisiva nas Guerras Napoleônicas. Ela marcou o fim do domínio de Napoleão Bonaparte e resultou em seu exílio final."
  },
  
   {
    "Pergunta": "Quem foi o líder italiano que desempenhou um papel crucial na unificação da Itália, sendo fundamental para a formação do Reino da Itália em 1861?",
    "Opcoes": {
      A: "Giuseppe Garibaldi",
      B: "Camillo Cavour",
      C: "Benito Mussolini",
      D: "Victor Emmanuel II"
    },
    "Resposta": "D",
    "Motivo": "Victor Emmanuel II foi o líder italiano que desempenhou um papel crucial na unificação da Itália. Ele foi fundamental para a formação do Reino da Itália em 1861, tornando-se o primeiro rei do país unificado."
  },
  {
    "Pergunta": "Qual foi o conflito global que ocorreu entre 1914 e 1918, envolvendo potências mundiais e resultando em significativas mudanças geopolíticas e sociais?",
    "Opcoes": {
      A: "Guerra Fria",
      B: "Segunda Guerra Mundial",
      C: "Primeira Guerra Mundial",
      D: "Guerra Franco-Prussiana"
    },
    "Resposta": "C",
    "Motivo": "A Primeira Guerra Mundial ocorreu entre 1914 e 1918, envolvendo potências mundiais. O conflito resultou em significativas mudanças geopolíticas e sociais, impactando o século XX."
  },
  {
    "Pergunta": "Quem foi o líder soviético responsável por transformar a União Soviética em uma potência industrial e militar durante a década de 1930?",
    "Opcoes": {
      A: "Leon Trotsky",
      B: "Vladimir Lenin",
      C: "Nikita Khrushchev",
      D: "Joseph Stalin"
    },
    "Resposta": "D",
    "Motivo": "Joseph Stalin foi o líder soviético responsável por transformar a União Soviética em uma potência industrial e militar durante a década de 1930. Seu governo foi marcado por políticas de industrialização forçada e coletivização agrícola."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o início da Segunda Guerra Mundial em 1939, quando a Alemanha invadiu a Polônia?",
    "Opcoes": {
      A: "Bombardeio de Pearl Harbor",
      B: "Invasão da Normandia",
      C: "Batalha de Stalingrado",
      D: "Invasão da Polônia"
    },
    "Resposta": "D",
    "Motivo": "A invasão da Polônia pela Alemanha em 1939 marcou o início da Segunda Guerra Mundial. O evento desencadeou a resposta de potências aliadas e definiu o início do conflito global."
  },
  {
    "Pergunta": "Quem foi o líder norte-americano que desempenhou um papel crucial na criação da Liga das Nações após a Primeira Guerra Mundial, embora os Estados Unidos não tenham aderido à organização?",
    "Opcoes": {
      A: "Theodore Roosevelt",
      B: "Woodrow Wilson",
      C: "Franklin D. Roosevelt",
      D: "Harry S. Truman"
    },
    "Resposta": "B",
    "Motivo": "Woodrow Wilson foi o líder norte-americano que desempenhou um papel crucial na criação da Liga das Nações após a Primeira Guerra Mundial. No entanto, os Estados Unidos não aderiram à organização, comprometendo sua eficácia."
  },
  {
    "Pergunta": "Qual foi o movimento de resistência pacífica liderado por Mahatma Gandhi na Índia, buscando a independência do domínio britânico?",
    "Opcoes": {
      A: "Movimento dos Direitos Civis",
      B: "Movimento dos Panteras Negras",
      C: "Movimento pelos Direitos das Mulheres",
      D: "Movimento pela Independência da Índia"
    },
    "Resposta": "D",
    "Motivo": "O Movimento pela Independência da Índia foi liderado por Mahatma Gandhi. Foi uma campanha de resistência pacífica que buscava a independência do domínio britânico na Índia, utilizando princípios de desobediência civil e não violência."
  },
  {
    "Pergunta": "Qual foi o evento que marcou o fim da Guerra Fria em 1989, envolvendo a queda do Muro de Berlim e a reunificação da Alemanha?",
    "Opcoes": {
      A: "Primavera de Praga",
      B: "Revolução Cultural",
      C: "Desmantelamento da URSS",
      D: "Revoluções de 1989"
    },
    "Resposta": "D",
    "Motivo": "As Revoluções de 1989 marcaram o fim da Guerra Fria. O evento mais emblemático foi a queda do Muro de Berlim, que simbolizou a reunificação da Alemanha e o declínio do comunismo na Europa Oriental."
  },
  {
    "Pergunta": "Quem foi o líder sul-africano que desempenhou um papel fundamental na luta contra o apartheid e se tornou o primeiro presidente negro do país em 1994?",
    "Opcoes": {
      A: "Nelson Mandela",
      B: "Desmond Tutu",
      C: "F.W. de Klerk",
      D: "Thabo Mbeki"
    },
    "Resposta": "A",
    "Motivo": "Nelson Mandela foi o líder sul-africano que desempenhou um papel fundamental na luta contra o apartheid. Ele se tornou o primeiro presidente negro da África do Sul em 1994, marcando uma nova era no país."
  }
  
  
    
      ]
    const perguntasMitologia =[
      
        {
    "Pergunta": "Na mitologia grega, qual deus é considerado o senhor dos mares e dos terremotos?",
    "Opcoes": {
      A: "Zeus",
      B: "Apolo",
      C: "Poseidon",
      D: "Hades"
    },
    "Resposta": "C",
    "Motivo": "Poseidon, na mitologia grega, é o deus associado ao domínio dos mares, oceanos e terremotos. Ele é frequentemente retratado segurando um tridente, símbolo de seu poder sobre as águas."
  },
  {
    "Pergunta": "Na mitologia romana, qual deus é equivalente ao deus grego Zeus, sendo o senhor dos deuses e do céu?",
    "Opcoes": {
      A: "Marte",
      B: "Júpiter",
      C: "Neptuno",
      D: "Mercúrio"
    },
    "Resposta": "B",
    "Motivo": "Júpiter, na mitologia romana, é o equivalente ao deus grego Zeus. Ele é considerado o senhor dos deuses e do céu, sendo associado ao trovão e ao raio."
  },
  {
    "Pergunta": "Qual deusa da mitologia grega é conhecida como a deusa da sabedoria, da estratégia e da guerra justa?",
    "Opcoes": {
      A: "Afrodite",
      B: "Deméter",
      C: "Atena",
      D: "Hera"
    },
    "Resposta": "C",
    "Motivo": "Atena, na mitologia grega, é a deusa associada à sabedoria, estratégia, habilidade em combate e à guerra justa. Ela é frequentemente retratada com uma coruja, símbolo da sabedoria."
  },
  {
    "Pergunta": "Quem é o deus nórdico associado ao trovão, ao relâmpago e à proteção da humanidade?",
    "Opcoes": {
      A: "Odin",
      B: "Thor",
      C: "Loki",
      D: "Freyr"
    },
    "Resposta": "B",
    "Motivo": "Thor é o deus nórdico associado ao trovão, ao relâmpago e à proteção da humanidade. Ele é frequentemente retratado com seu martelo mágico, Mjölnir, que tem o poder de controlar tempestades."
  },
  {
    "Pergunta": "Na mitologia egípcia, quem é o deus do sol e da criação, frequentemente representado como um homem com cabeça de falcão?",
    "Opcoes": {
      A: "Osíris",
      B: "Hórus",
      C: "Rá",
      D: "Anúbis"
    },
    "Resposta": "C",
    "Motivo": "Rá é o deus egípcio do sol e da criação. Ele é frequentemente representado como um homem com cabeça de falcão ou como um disco solar. Rá desempenha um papel fundamental na mitologia egípcia."
  },
  {
    "Pergunta": "Na mitologia hindu, quem é o deus da destruição e da transformação, muitas vezes retratado dançando o Tandava?",
    "Opcoes": {
      A: "Brahma",
      B: "Vishnu",
      C: "Shiva",
      D: "Ganesha"
    },
    "Resposta": "C",
    "Motivo": "Shiva é o deus hindu associado à destruição e à transformação. Ele é frequentemente retratado dançando o Tandava, uma dança cósmica que simboliza o ciclo eterno de criação, preservação e destruição."
  },
  {
    "Pergunta": "Na mitologia nórdica, qual é o lobo gigante que está destinado a engolir o deus Odin durante o Ragnarök?",
    "Opcoes": {
      A: "Fenrir",
      B: "Sleipnir",
      C: "Jormungandr",
      D: "Garmr"
    },
    "Resposta": "A",
    "Motivo": "Fenrir é o lobo gigante na mitologia nórdica. Ele é destinado a engolir o deus Odin durante o Ragnarök, o fim do mundo na cosmologia nórdica."
  },
  {
    "Pergunta": "Na mitologia grega, quem é o titã que foi condenado a segurar o céu para toda a eternidade?",
    "Opcoes": {
      A: "Prometeu",
      B: "Atlas",
      C: "Cronos",
      D: "Epimeteu"
    },
    "Resposta": "B",
    "Motivo": "Atlas é o titã na mitologia grega que foi condenado a segurar o céu para toda a eternidade como punição por sua participação na Titanomaquia, a guerra entre os titãs e os deuses olímpicos."
  },
  {
    "Pergunta": "Na mitologia romana, quem é o deus do amor e da beleza, equivalente ao deus grego Eros?",
    "Opcoes": {
      A: "Marte",
      B: "Vênus",
      C: "Apolo",
      D: "Eros"
    },
    "Resposta": "D",
    "Motivo": "Cupido é o deus romano do amor e da beleza, tambem chamado de deus Eros. Ele é frequentemente representado como um jovem alado que dispara flechas para inspirar o amor nas pessoas."
  },
  {
    "Pergunta": "Quem é o deus egípcio associado à morte, ao submundo e ao julgamento pós-morte?",
    "Opcoes": {
      A: "Anúbis",
      B: "Osíris",
      C: "Hórus",
      D: "Rá"
    },
    "Resposta": "A",
    "Motivo": "Anúbis é o deus egípcio associado à morte, ao submundo e ao julgamento pós-morte. Ele é frequentemente representado como um homem com cabeça de chacal, desempenhando um papel importante na preservação e mumificação dos corpos."
  },
  {
    "Pergunta": "Qual deusa egípcia é associada à fertilidade, à maternidade e é frequentemente representada com cabeça de leoa?",
    "Opcoes": {
      A: "Isis",
      B: "Hathor",
      C: "Sekhmet",
      D: "Néftis"
    },
    "Resposta": "C",
    "Motivo": "Sekhmet é a deusa egípcia associada à fertilidade, à maternidade e é frequentemente representada com cabeça de leoa. Ela também é associada à guerra e à cura."
  },
  {
    "Pergunta": "Quem é o deus egípcio representado como uma esfinge, com corpo de leão e cabeça humana, guardando as pirâmides de Gizé?",
    "Opcoes": {
      A: "Thoth",
      B: "Hórus",
      C: "Amon-Rá",
      D: "A esfinge não representa um deus específico"
    },
    "Resposta": "D",
    "Motivo": "A esfinge nas pirâmides de Gizé não representa um deus específico na mitologia egípcia. Sua presença está associada à proteção e ao mistério, desafiando quem se aproximasse com enigmas."
  },
  {
    "Pergunta": "Qual deus egípcio é associado ao sol e é frequentemente representado como um falcão ou com cabeça de falcão?",
    "Opcoes": {
      A: "Osíris",
      B: "Rá",
      C: "Ísis",
      D: "Anúbis"
    },
    "Resposta": "B",
    "Motivo": "Rá é o deus egípcio associado ao sol. Ele é frequentemente representado como um falcão ou com cabeça de falcão, simbolizando o sol em seu percurso diário pelo céu."
  },
  {
    "Pergunta": "Qual deusa egípcia é associada ao amor, à beleza, à música e é frequentemente representada com cabeça de íbis?",
    "Opcoes": {
      A: "Isis",
      B: "Hathor",
      C: "Maat",
      D: "Ísis"
    },
    "Resposta": "B",
    "Motivo": "Hathor é a deusa egípcia associada ao amor, à beleza, à música e à maternidade. Ela é frequentemente representada com cabeça de íbis ou com chifres e um disco solar, simbolizando sua natureza celestial."
  },
  {
    "Pergunta": "Quem é o deus egípcio associado à sabedoria, ao conhecimento e à escrita, frequentemente representado com cabeça de íbis?",
    "Opcoes": {
      A: "Hórus",
      B: "Osíris",
      C: "Thoth",
      D: "Ptah"
    },
    "Resposta": "C",
    "Motivo": "Thoth é o deus egípcio associado à sabedoria, ao conhecimento e à escrita. Ele é frequentemente representado com cabeça de íbis ou como um babuíno, sendo um escriba divino e detentor de segredos cósmicos."
  },
  {
    "Pergunta": "Quem é o deus egípcio associado à mumificação, à vida após a morte e é frequentemente representado como um homem com cabeça de chacal?",
    "Opcoes": {
      A: "Anúbis",
      B: "Osíris",
      C: "Hórus",
      D: "Rá"
    },
    "Resposta": "A",
    "Motivo": "Anúbis é o deus egípcio associado à mumificação, à vida após a morte e é frequentemente representado como um homem com cabeça de chacal. Ele desempenha um papel importante nos rituais funerários e no julgamento pós-morte."
  },
  
   {
    "Pergunta": "Qual é a deusa egípcia associada à magia, ao conhecimento e à proteção, muitas vezes retratada como uma mulher com cabeça de coruja?",
    "Opcoes": {
      A: "Ísis",
      B: "Hathor",
      C: "Maat",
      D: "Seshat"
    },
    "Resposta": "D",
    "Motivo": "Seshat é a deusa egípcia associada à magia, ao conhecimento e à proteção. Ela é frequentemente retratada como uma mulher com cabeça de coruja, símbolo da sabedoria e da escrita."
  },
  {
    "Pergunta": "Quem é o deus egípcio associado à guerra, ao deserto e ao caos, frequentemente representado como um homem com cabeça de chacal?",
    "Opcoes": {
      A: "Set",
      B: "Anúbis",
      C: "Hórus",
      D: "Osíris"
    },
    "Resposta": "A",
    "Motivo": "Set é o deus egípcio associado à guerra, ao deserto e ao caos. Ele é frequentemente representado como um homem com cabeça de chacal, sendo uma figura ambígua e desafiadora."
  },
  {
    "Pergunta": "Qual é o deus egípcio que governa o submundo e é frequentemente representado como um homem com cabeça de falcão ou como um falcão?",
    "Opcoes": {
      A: "Rá",
      B: "Hórus",
      C: "Osíris",
      D: "Anúbis"
    },
    "Resposta": "C",
    "Motivo": "Osíris é o deus egípcio que governa o submundo. Ele é frequentemente representado como um homem com cabeça de falcão ou como um falcão, associado à morte, renascimento e julgamento pós-morte."
  }
  ,
  
  {
    "Pergunta": "Na mitologia grega, qual é a deusa da sabedoria, estratégia e da guerra justa, frequentemente representada com uma coruja?",
    "Opcoes": {
      A: "Afrodite",
      B: "Deméter",
      C: "Hera",
      D: "Atena"
    },
    "Resposta": "D",
    "Motivo": "Na mitologia grega, Atena é a deusa da sabedoria, estratégia e da guerra justa. Ela é frequentemente representada com uma coruja, símbolo da sabedoria."
  },
  {
    "Pergunta": "Qual é o deus grego associado ao mar, aos terremotos e aos cavalos, frequentemente retratado com um tridente?",
    "Opcoes": {
      A: "Hades",
      B: "Poseidon",
      C: "Zeus",
      D: "Apolo"
    },
    "Resposta": "B",
    "Motivo": "Poseidon é o deus grego associado ao mar, aos terremotos e aos cavalos. Ele é frequentemente retratado com um tridente, simbolizando seu domínio sobre as águas."
  },
  {
    "Pergunta": "Na mitologia nórdica, qual é a deusa da morte, do submundo e é frequentemente associada à profecia?",
    "Opcoes": {
      A: "Frigg",
      B: "Hel",
      C: "Freya",
      D: "Skadi"
    },
    "Resposta": "B",
    "Motivo": "Na mitologia nórdica, Hel é a deusa da morte e do submundo. Ela é frequentemente associada à profecia e governa sobre os mortos que não foram para Valhalla."
  },
  {
    "Pergunta": "Qual é o deus grego associado à música, à poesia e à profecia, frequentemente retratado com uma lira?",
    "Opcoes": {
      A: "Dionísio",
      B: "Apolo",
      C: "Hermes",
      D: "Hades"
    },
    "Resposta": "B",
    "Motivo": "Na mitologia grega, Apolo é o deus associado à música, à poesia e à profecia. Ele é frequentemente retratado com uma lira, símbolo de suas habilidades artísticas e proféticas."
  },
  {
    "Pergunta": "Na mitologia nórdica, qual é o lobo monstruoso que está destinado a desencadear o Ragnarök, o fim do mundo?",
    "Opcoes": {
      A: "Fenrir",
      B: "Jormungandr",
      C: "Sleipnir",
      D: "Garmr"
    },
    "Resposta": "A",
    "Motivo": "Fenrir é o lobo monstruoso na mitologia nórdica destinado a desencadear o Ragnarök, o fim do mundo. Ele é filho de Loki e cresce em tamanho até se tornar uma ameaça aos deuses."
  },
  {
    "Pergunta": "Na mitologia grega, qual é o deus do vinho, da festa e da teatralidade, frequentemente representado com uma coroa de folhas de uva?",
    "Opcoes": {
      A: "Apolo",
      B: "Hades",
      C: "Dionísio",
      D: "Hermes"
    },
    "Resposta": "C",
    "Motivo": "Na mitologia grega, Dionísio é o deus do vinho, da festa e da teatralidade. Ele é frequentemente representado com uma coroa de folhas de uva, simbolizando a celebração e a embriaguez."
  },
  {
    "Pergunta": "Na mitologia nórdica, qual é o cavalo de oito patas associado a Odin e frequentemente usado pelos deuses?",
    "Opcoes": {
      A: "Sleipnir",
      B: "Huginn",
      C: "Gullinbursti",
      D: "Fenrir"
    },
    "Resposta": "A",
    "Motivo": "Sleipnir é o cavalo de oito patas na mitologia nórdica, associado a Odin. Ele é um dos seres mais velozes e é frequentemente usado pelos deuses para viajar entre os mundos."
  },
  {
    "Pergunta": "Qual é a deusa grega da agricultura, frequentemente associada à colheita e à fertilidade?",
    "Opcoes": {
      A: "Deméter",
      B: "Hera",
      C: "Athena",
      D: "Artemis"
    },
    "Resposta": "A",
    "Motivo": "Na mitologia grega, Deméter é a deusa da agricultura, frequentemente associada à colheita e à fertilidade. Ela é uma das principais deusas olímpicas e tem influência sobre a terra cultivada."
  },
  
  
  
  
  ]
    const perguntasArte = [
        {
    "Pergunta": "Quem foi o pintor renascentista italiano conhecido por obras como 'A Última Ceia' e 'Mona Lisa'?",
    "Opcoes": {
      A: "Vincent van Gogh",
      B: "Michelangelo",
      C: "Leonardo da Vinci",
      D: "Pablo Picasso"
    },
    "Resposta": "C",
    "Motivo": "Leonardo da Vinci foi um destacado pintor renascentista italiano conhecido por suas contribuições à arte e à ciência. 'A Última Ceia' e 'Mona Lisa' são obras-primas que refletem sua habilidade técnica, uso inovador da perspectiva e representação realista."
  },
  {
    "Pergunta": "Quem foi o escultor grego antigo que criou a estátua de 'Vênus de Milo', uma das mais famosas esculturas da antiguidade?",
    "Opcoes": {
      A: "Fídias",
      B: "Praxíteles",
      C: "Míron",
      D: "Escopas"
    },
    "Resposta": "B",
    "Motivo": "Praxíteles foi um renomado escultor grego antigo, destacando-se pela representação da beleza feminina. 'Vênus de Milo' é uma escultura icônica conhecida por sua elegância, proporções harmônicas e pela ausência dos braços, aspecto que adiciona mistério à obra."
  },
  {
    "Pergunta": "Qual movimento artístico do século XIX valorizava a expressão emocional, o uso de cores vibrantes e técnicas não convencionais, influenciando artistas como Van Gogh e Gauguin?",
    "Opcoes": {
      A: "Impressionismo",
      B: "Realismo",
      C: "Romantismo",
      D: "Barroco"
    },
    "Resposta": "A",
    "Motivo": "O Impressionismo foi um movimento artístico revolucionário que surgiu no século XIX. Valorizando a captura da luz, a expressão de emoções e o uso de pinceladas soltas, artistas impressionistas como Monet e Renoir influenciaram significativamente a arte moderna."
  },
  {
    "Pergunta": "Quem foi o arquiteto espanhol conhecido por suas obras surrealistas e orgânicas, como a Sagrada Família em Barcelona?",
    "Opcoes": {
      A: "Frank Lloyd Wright",
      B: "Le Corbusier",
      C: "Antoni Gaudí",
      D: "I. M. Pei"
    },
    "Resposta": "C",
    "Motivo": "Antoni Gaudí foi um arquiteto catalão cujo estilo único é marcado por formas orgânicas, inspiração na natureza e elementos surrealistas. A Sagrada Família, uma de suas obras mais famosas, combina arquitetura gótica com inovações modernistas, destacando-se pela exuberância e complexidade."
  },
  {
    "Pergunta": "Quem foi o pintor holandês conhecido por suas obras 'Noite Estrelada' e 'Girassóis', contribuindo significativamente para o movimento pós-impressionista?",
    "Opcoes": {
      A: "Claude Monet",
      B: "Edgar Degas",
      C: "Vincent van Gogh",
      D: "Paul Cézanne"
    },
    "Resposta": "C",
    "Motivo": "Vincent van Gogh foi um pintor pós-impressionista que trouxe uma abordagem única à pintura. Suas obras, como 'Noite Estrelada' e 'Girassóis', são caracterizadas por pinceladas intensas, cores vibrantes e expressão emocional, influenciando o desenvolvimento da arte moderna."
  },
  {
    "Pergunta": "Qual é o nome do movimento artístico que surgiu nas décadas de 1950 e 1960, caracterizado por obras de arte que desafiam as convenções tradicionais e frequentemente exploram o abstrato e o conceitual?",
    "Opcoes": {
      A: "Cubismo",
      B: "Expressionismo",
      C: "Pop Art",
      D: "Arte Conceitual"
    },
    "Resposta": "D",
    "Motivo": "A Arte Conceitual é um movimento artístico que se desenvolveu nas décadas de 1950 e 1960. Em vez de focar na produção física da obra de arte, os artistas conceituais priorizavam a ideia por trás da obra, desafiando as tradições artísticas convencionais."
  },
  {
    "Pergunta": "Quem foi a pintora mexicana conhecida por suas obras que exploram a identidade, a cultura mexicana e questões sociais, como 'As Duas Fridas' e 'Auto-Retrato com Colar de Espinhos'?",
    "Opcoes": {
      A: "Georgia O'Keeffe",
      B: "Frida Kahlo",
      C: "Tamara de Lempicka",
      D: "Dorothea Lange"
    },
    "Resposta": "B",
    "Motivo": "Frida Kahlo foi uma pintora mexicana renomada cujas obras são marcadas por uma expressão intensa de sua própria vida e emoções. 'As Duas Fridas' e 'Auto-Retrato com Colar de Espinhos' são exemplos de sua habilidade em abordar questões pessoais e sociais de maneira única."
  },
  {
    "Pergunta": "Qual é o estilo artístico caracterizado por formas geométricas, cores vibrantes e abstração, sendo influente nas artes plásticas, arquitetura e design durante o início do século XX?",
    "Opcoes": {
      A: "Art Déco",
      B: "Fauvismo",
      C: "Cubismo",
      D: "Art Nouveau"
    },
    "Resposta": "A",
    "Motivo": "O Art Déco é um estilo artístico que floresceu no início do século XX, caracterizado por formas geométricas, cores vibrantes e um design elegante. Tendo influência nas artes plásticas, arquitetura e design, o Art Déco reflete uma estética moderna e sofisticada da época."
  },
  {
    "Pergunta": "Quem foi o escultor francês conhecido por suas esculturas modernistas abstratas, como 'O Homem que Anda' e 'A Mulher de Pé'?",
    "Opcoes": {
      A: "Henry Moore",
      B: "Constantin Brancusi",
      C: "Auguste Rodin",
      D: "Barbara Hepworth"
    },
    "Resposta": "B",
    "Motivo": "Constantin Brancusi foi um escultor romeno-francês que desempenhou um papel crucial no desenvolvimento da escultura moderna. Suas obras, como 'O Homem que Anda' e 'A Mulher de Pé', refletem uma abordagem abstrata e simplificada, explorando formas essenciais e materiais puros."
  },
  {
    "Pergunta": "Qual é o movimento artístico que surgiu no início do século XX, caracterizado por formas abstratas, linhas dinâmicas e um foco na representação da velocidade e da modernidade?",
    "Opcoes": {
      A: "Dadaísmo",
      B: "Futurismo",
      C: "Surrealismo",
      D: "Suprematismo"
    },
    "Resposta": "B",
    "Motivo": "O Futurismo foi um movimento artístico que surgiu no início do século XX, enfatizando a velocidade, a modernidade e a representação dinâmica. Artistas futuristas, como Umberto Boccioni, buscavam capturar a energia da era industrial e a transformação do mundo moderno."
  },
  {
    "Pergunta": "Quem foi o artista norte-americano associado ao movimento de pintura drip, conhecido por obras como 'Nº 5, 1948', onde a tinta é gotejada ou respingada na tela?",
    "Opcoes": {
      A: "Willem de Kooning",
      B: "Jackson Pollock",
      C: "Mark Rothko",
      D: "Piet Mondrian"
    },
    "Resposta": "B",
    "Motivo": "Jackson Pollock foi um influente artista norte-americano associado ao movimento expressionista abstrato. Sua técnica de pintura drip, onde a tinta é gotejada ou respingada na tela, é evidente em obras como 'Nº 5, 1948', representando uma abordagem inovadora e gestual à arte."
  },
  {
    "Pergunta": "Qual é o nome da técnica de pintura renascentista que utiliza camadas finas e transparentes de tinta para criar uma luminosidade e profundidade intensas, como vista em obras de artistas como Leonardo da Vinci?",
    "Opcoes": {
      A: "Chiaroscuro",
      B: "Sfumato",
      C: "Tenebrismo",
      D: "Grissaille"
    },
    "Resposta": "B",
    "Motivo": "Sfumato é uma técnica de pintura renascentista caracterizada pelo uso de camadas finas e transparentes de tinta, criando uma transição suave entre as cores e proporcionando uma luminosidade intensa. Leonardo da Vinci foi mestre na aplicação do sfumato, como evidenciado em 'Mona Lisa'."
  },
  {
    "Pergunta": "Quem foi o escultor italiano do Renascimento conhecido por suas obras, incluindo 'Davi' e 'O Nascimento de Vênus', destacando-se pela representação idealizada do corpo humano?",
    "Opcoes": {
      A: "Donatello",
      B: "Michelangelo",
      C: "Gian Lorenzo Bernini",
      D: "Sandro Botticelli"
    },
    "Resposta": "D",
    "Motivo": "Sandro Botticelli foi um pintor italiano do Renascimento, conhecido por suas obras que capturam a beleza e a idealização do corpo humano. 'O Nascimento de Vênus' é um exemplo marcante de sua habilidade em representar a harmonia e a elegância na arte renascentista."
  },
  {
    "Pergunta": "Qual é o nome da técnica de escultura em que a forma é esculpida para fora de um bloco de material, frequentemente associada a Michelangelo e sua obra 'David'?",
    "Opcoes": {
      A: "Entalhe",
      B: "Modelagem",
      C: "Escultura em Relevo",
      D: "Escultura em Alto-relevo"
    },
    "Resposta": "A",
    "Motivo": "O entalhe é uma técnica de escultura em que a forma é esculpida para fora de um bloco de material, deixando uma figura tridimensional. Michelangelo utilizou essa técnica magistralmente em 'David', demonstrando sua habilidade em transformar uma pedra bruta em uma obra de arte esculpida."
  },
  {
    "Pergunta": "Qual é o nome do movimento artístico que surgiu nos anos 1960, caracterizado por obras que desafiam a concepção tradicional de arte, muitas vezes incorporando objetos do cotidiano e desafiando as fronteiras entre arte e vida?",
    "Opcoes": {
      A: "Arte Conceitual",
      B: "Arte Pop",
      C: "Minimalismo",
      D: "Expressionismo Abstrato"
    },
    "Resposta": "B",
    "Motivo": "A Arte Pop foi um movimento artístico que surgiu nos anos 1960, destacando-se pelo uso de imagens e temas populares da cultura de massa. Artistas pop, como Andy Warhol, desafiaram as concepções tradicionais de arte, incorporando objetos do cotidiano e explorando as fronteiras entre alta e baixa cultura."
  },
      
  {
    "Pergunta": "Qual é o nome do movimento artístico que surgiu na década de 1980, caracterizado por obras provocativas, muitas vezes abordando questões sociais e políticas, e utilizando diferentes meios, como fotografia e vídeo?",
    "Opcoes": {
      A: "Land Art",
      B: "Arte Contemporânea",
      C: "Graffiti",
      D: "Arte Performática"
    },
    "Resposta": "B",
    "Motivo": "A Arte Contemporânea é um movimento artístico que surgiu na década de 1980, caracterizado pela diversidade de estilos, abordando questões sociais, políticas e culturais. Os artistas contemporâneos frequentemente utilizam diferentes meios, como fotografia, vídeo, instalações e performance, para expressar suas ideias."
  },
  {
    "Pergunta": "Quem foi o pintor espanhol conhecido por seu papel no desenvolvimento do Cubismo, juntamente com Georges Braque, e por obras como 'Les Demoiselles d'Avignon'?",
    "Opcoes": {
      A: "Pablo Picasso",
      B: "Salvador Dalí",
      C: "Joan Miró",
      D: "Fernand Léger"
    },
    "Resposta": "A",
    "Motivo": "Pablo Picasso foi um pintor espanhol e uma das figuras mais influentes do Cubismo, movimento artístico que revolucionou a representação visual. 'Les Demoiselles d'Avignon' é uma obra emblemática que rompeu com as convenções artísticas da época, introduzindo formas geométricas e influências africanas."
  },
  {
    "Pergunta": "Qual é o nome da técnica de pintura que utiliza pequenos pontos coloridos para formar uma imagem, sendo um estilo associado a artistas como Georges Seurat e Paul Signac?",
    "Opcoes": {
      A: "Cubismo",
      B: "Pontilhismo",
      C: "Realismo",
      D: "Surrealismo"
    },
    "Resposta": "B",
    "Motivo": "O Pontilhismo é uma técnica de pintura que utiliza pequenos pontos coloridos, chamados de pontos, para criar uma imagem. Este estilo, associado a artistas como Georges Seurat e Paul Signac, busca criar uma mistura ótica de cores quando vistas de longe, produzindo efeitos visuais impressionantes."
  },
  {
    "Pergunta": "Quem foi a escultora e pintora franco-americana associada ao movimento modernista, conhecida por suas formas abstratas e pela obra 'Bird in Space'?",
    "Opcoes": {
      A: "Barbara Hepworth",
      B: "Georgia O'Keeffe",
      C: "Isamu Noguchi",
      D: "Constantin Brancusi"
    },
    "Resposta": "D",
    "Motivo": "Constantin Brancusi foi um escultor e pintor romeno-francês associado ao movimento modernista. Sua obra 'Bird in Space' é uma escultura abstrata que busca capturar a essência do voo, utilizando formas simplificadas e fluidas para transmitir movimento e leveza."
  },
  {
    "Pergunta": "Qual é o nome da técnica de escultura em que o escultor esculpe diretamente na pedra, sem o uso de modelos ou moldes, sendo uma abordagem intuitiva e direta?",
    "Opcoes": {
      A: "Entalhe",
      B: "Modelagem",
      C: "Cinzelagem",
      D: "Escultura Direta"
    },
    "Resposta": "D",
    "Motivo": "A Escultura Direta é uma técnica em que o escultor esculpe diretamente na pedra, sem o uso de modelos ou moldes. Essa abordagem é intuitiva e direta, permitindo que a forma evolua durante o processo de escultura, evidenciando a habilidade e sensibilidade do artista em relação ao material."
  },
  
    {
    "Pergunta": "Qual movimento artístico do século XIX é conhecido por representar cenas cotidianas com pinceladas soltas, enfatizando a luz e a atmosfera?",
    "Opcoes": {
      A: "Impressionismo",
      B: "Cubismo",
      C: "Realismo",
      D: "Romantismo"
    },
    "Resposta": "A",
    "Motivo": "O Impressionismo foi um movimento artístico do século XIX que revolucionou a representação visual. Os artistas impressionistas, como Claude Monet e Pierre-Auguste Renoir, buscavam capturar a essência das cenas por meio de pinceladas soltas, destacando a influência da luz e da atmosfera nas paisagens e nas cenas cotidianas."
  },
  {
    "Pergunta": "Quem foi o líder do movimento surrealista, conhecido por suas pinturas oníricas e simbólicas, como 'A Persistência da Memória', onde relógios derretidos são destaque?",
    "Opcoes": {
      A: "Salvador Dalí",
      B: "René Magritte",
      C: "Joan Miró",
      D: "Max Ernst"
    },
    "Resposta": "A",
    "Motivo": "Salvador Dalí foi um proeminente líder do movimento surrealista. Sua obra 'A Persistência da Memória' é um ícone do surrealismo, apresentando relógios derretidos em um cenário onírico. Dalí explorou o inconsciente e os sonhos, criando imagens vívidas e perturbadoras."
  },
  {
    "Pergunta": "Qual é o nome do movimento artístico que emergiu no início do século XX, caracterizado pela representação de objetos e pessoas de maneira não realista e frequentemente influenciado por ideias psicanalíticas?",
    "Opcoes": {
      A: "Dadaísmo",
      B: "Futurismo",
      C: "Surrealismo",
      D: "Cubismo"
    },
    "Resposta": "C",
    "Motivo": "O Surrealismo é um movimento artístico que surgiu no início do século XX, influenciado por ideias psicanalíticas de Sigmund Freud. Artistas surrealistas, como Salvador Dalí e André Breton, buscavam explorar o inconsciente, representando objetos e pessoas de maneira não realista e muitas vezes perturbadora."
  },
  {
    "Pergunta": "Quem foi um dos fundadores do Cubismo, conhecido por obras como 'Les Demoiselles d'Avignon', que rompeu com as formas tradicionais de representação visual?",
    "Opcoes": {
      A: "Henri Matisse",
      B: "Pablo Picasso",
      C: "Georges Braque",
      D: "Fernand Léger"
    },
    "Resposta": "B",
    "Motivo": "Pablo Picasso foi um dos fundadores do Cubismo, um movimento artístico que revolucionou a representação visual. 'Les Demoiselles d'Avignon' é uma obra emblemática que rompeu com as formas tradicionais, introduzindo formas geométricas e influências africanas, antecipando o desenvolvimento da arte moderna."
  },
  {
    "Pergunta": "Qual é o nome do movimento artístico que se desenvolveu na década de 1960, caracterizado por obras que desafiam as convenções tradicionais e frequentemente exploram o abstrato e o conceitual?",
    "Opcoes": {
      A: "Op Art",
      B: "Minimalismo",
      C: "Arte Conceitual",
      D: "Expressionismo Abstrato"
    },
    "Resposta": "C",
    "Motivo": "A Arte Conceitual é um movimento artístico que se desenvolveu na década de 1960. Em vez de focar na produção física da obra de arte, os artistas conceituais priorizavam a ideia por trás da obra. Isso desafiou as tradições artísticas convencionais, explorando conceitos e provocando reflexões."
  },
  {
    "Pergunta": "Qual movimento artístico do século XX enfatizava a representação da realidade de uma maneira distorcida e exagerada, frequentemente retratando a vida urbana e social?",
    "Opcoes": {
      A: "Expressionismo",
      B: "Fauvismo",
      C: "Realismo",
      D: "Simbolismo"
    },
    "Resposta": "A",
    "Motivo": "O Expressionismo foi um movimento artístico do século XX que enfatizava a representação da realidade de maneira distorcida e exagerada. Muitas vezes, artistas expressionistas, como Edvard Munch, retratavam a vida urbana e social, expressando emoções intensas e reações subjetivas à realidade."
  },
  {
    "Pergunta": "Quem foi o pintor francês associado ao movimento impressionista, conhecido por suas obras que capturam cenas da vida urbana, como 'Almoço dos Remadores' e 'Ballet Clássico'?",
    "Opcoes": {
      A: "Edgar Degas",
      B: "Claude Monet",
      C: "Pierre-Auguste Renoir",
      D: "Camille Pissarro"
    },
    "Resposta": "C",
    "Motivo": "Pierre-Auguste Renoir foi um pintor francês associado ao movimento impressionista. Suas obras, como 'Almoço dos Remadores' e 'Ballet Clássico', capturam cenas da vida urbana com pinceladas soltas e uma abordagem única à luz, cor e atmosfera, características distintivas do Impressionismo."
  },
  {
    "Pergunta": "Qual é o nome do movimento artístico que se concentrou em representar a realidade de maneira objetiva, muitas vezes destacando aspectos da vida cotidiana e do trabalho?",
    "Opcoes": {
      A: "Realismo",
      B: "Romantismo",
      C: "Barroco",
      D: "Simbolismo"
    },
    "Resposta": "A",
    "Motivo": "O Realismo foi um movimento artístico que se concentrou em representar a realidade de maneira objetiva, destacando aspectos da vida cotidiana e do trabalho. Artistas realistas, como Gustave Courbet"},
    
    {
    "Pergunta": "Qual é o nome de um movimento artístico contemporâneo que explora o estranho, o surreal e muitas vezes o bizarro, envolvendo elementos de horror e ficção científica?",
    "Opcoes": {
      A: "Weirdcore",
      B: "Arte Contemporânea",
      C: "Surrealismo Pop",
      D: "Terror Psicológico"
    },
    "Resposta": "A",
    "Motivo": "Weirdcore é um movimento artístico contemporâneo que explora o estranho, o surreal e frequentemente o bizarro. Muitas vezes, incorpora elementos de horror, ficção científica e uma estética única que desafia as normas convencionais da arte, criando experiências visuais únicas e desconcertantes."
  },
  {
    "Pergunta": "Quem é um artista contemporâneo conhecido por suas esculturas hiper-realistas de figuras humanas distorcidas e muitas vezes grotescas, explorando temas de horror e alienação?",
    "Opcoes": {
      A: "Damien Hirst",
      B: "Ron Mueck",
      C: "Takashi Murakami",
      D: "Patricia Piccinini"
    },
    "Resposta": "D",
    "Motivo": "Patricia Piccinini é uma artista contemporânea conhecida por suas esculturas hiper-realistas que exploram figuras humanas distorcidas e muitas vezes grotescas. Seu trabalho aborda temas de horror, alienação e a relação entre humanos e criaturas fictícias, estimulando reflexões sobre a natureza da humanidade."
  },
  {
    "Pergunta": "Qual é o nome de um subgênero artístico que se destaca por criar imagens surreais, muitas vezes assustadoras, que evocam sentimentos de horror e mal-estar, frequentemente associado a bandas de música e artistas visuais contemporâneos?",
    "Opcoes": {
      A: "Weirdcore",
      B: "Surrealismo Obscuro",
      C: "Estranho Realismo",
      D: "Terror Visionário"
    },
    "Resposta": "A",
    "Motivo": "Weirdcore é um subgênero artístico contemporâneo que cria imagens surreais, frequentemente assustadoras, associadas a bandas de música e artistas visuais. Essas obras evocam sentimentos de horror e mal-estar, explorando o lado estranho e obscuro da imaginação humana."
  },
  {
    "Pergunta": "Quem é um renomado cineasta e artista contemporâneo conhecido por suas obras de terror psicológico, como 'Cisne Negro' e 'Réquiem para um Sonho'?",
    "Opcoes": {
      A: "David Lynch",
      B: "Guillermo del Toro",
      C: "Darren Aronofsky",
      D: "Ari Aster"
    },
    "Resposta": "C",
    "Motivo": "Darren Aronofsky é um cineasta e artista contemporâneo reconhecido por suas obras de terror psicológico. 'Cisne Negro' e 'Réquiem para um Sonho' exploram temas intensos e perturbadores, mergulhando na psique humana e desafiando as convenções do gênero cinematográfico."
  },
  {
    "Pergunta": "Qual é o nome de um movimento artístico contemporâneo que combina elementos de horror, ficção científica e surrealismo, muitas vezes associado a músicos que exploram essas estéticas?",
    "Opcoes": {
      A: "Weird Fiction",
      B: "Surrealismo Contemporâneo",
      C: "New Horror",
      D: "Vaporwave"
    },
    "Resposta": "A",
    "Motivo": "Weird Fiction é um movimento artístico contemporâneo que combina elementos de horror, ficção científica e surrealismo. Frequentemente associado a músicos que exploram essas estéticas, o Weird Fiction busca criar experiências visuais e sonoras únicas, desafiando as expectativas e explorando o lado mais estranho e imaginativo da arte."
  },
  {
    "Pergunta": "Quem é um artista contemporâneo conhecido por suas ilustrações e pinturas que mergulham no terror psicológico, muitas vezes retratando figuras sombrias e distorcidas?",
    "Opcoes": {
      A: "H. R. Giger",
      B: "Zdzisław Beksiński",
      C: "Junji Ito",
      D: "Francis Bacon"
    },
    "Resposta": "C",
    "Motivo": "Junji Ito é um artista japonês conhecido por suas ilustrações e mangás que exploram o terror psicológico. Suas obras apresentam figuras sombrias, distorcidas e narrativas intensas, contribuindo significativamente para o gênero do horror visual e psicológico contemporâneo."
  },
  {
    "Pergunta": "Qual é o nome de uma técnica artística que envolve a manipulação digital de imagens para criar composições surreais e frequentemente perturbadoras, associadas a artistas contemporâneos?",
    "Opcoes": {
      A: "Collage Digital",
      B: "Glitch Art",
      C: "Foto Manipulação",
      D: "Surrealismo Digital"
    },
    "Resposta": "D",
    "Motivo": "O Surrealismo Digital é uma técnica artística que envolve a manipulação digital de imagens para criar composições surreais e frequentemente perturbadoras. Muitos artistas contemporâneos exploram essa técnica para desafiar a realidade visual, criar narrativas desconcertantes e mergulhar no universo do estranho e do imaginário."
  },
  
   {
    "Pergunta": "Qual artista polonês contemporâneo, conhecido por suas pinturas surreais e sombrias, retrata frequentemente mundos distópicos e figuras grotescas?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "Junji Ito",
      D: "Francis Bacon"
    },
    "Resposta": "A",
    "Motivo": "Zdzisław Beksiński foi um renomado artista polonês contemporâneo, reconhecido por suas pinturas surreais e sombrias. Suas obras frequentemente retratam mundos distópicos, figuras grotescas e uma atmosfera única que cativa a imaginação do espectador."
  },
  {
    "Pergunta": "Quem foi um artista suíço conhecido por suas criações biomecânicas, notavelmente design do Alien no filme 'Alien, o Oitavo Passageiro'?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "Junji Ito",
      D: "Francis Bacon"
    },
    "Resposta": "B",
    "Motivo": "H. R. Giger foi um artista suíço conhecido por suas criações biomecânicas. Ele ficou famoso por seu design icônico do Alien no filme 'Alien, o Oitavo Passageiro', marcando sua contribuição significativa para o gênero do horror e da ficção científica no cinema."
  },
  {
    "Pergunta": "Qual artista britânico do século XX é conhecido por suas pinturas expressionistas que exploram temas de angústia, alienação e deformidade?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "Junji Ito",
      D: "Francis Bacon"
    },
    "Resposta": "D",
    "Motivo": "Francis Bacon foi um influente artista britânico do século XX, conhecido por suas pinturas expressionistas. Suas obras exploram temas de angústia, alienação e deformidade, criando imagens poderosas que refletem as complexidades da experiência humana e emocional."
  },
  {
    "Pergunta": "Quem é um mangaká japonês famoso por suas obras de terror psicológico, como 'Uzumaki' e 'Tomie'?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "Junji Ito",
      D: "Francis Bacon"
    },
    "Resposta": "C",
    "Motivo": "Junji Ito é um mangaká japonês renomado, famoso por suas obras de terror psicológico. 'Uzumaki' e 'Tomie' são exemplos de suas narrativas envolventes e visualmente impactantes que exploram o sobrenatural, o bizarro e o horror psicológico."
  },
  {
    "Pergunta": "Quem é um pintor e escultor alemão contemporâneo associado ao movimento de arte distorcida, conhecido por suas figuras distorcidas e grotescas?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "Junji Ito",
      D: "Jonathan Meese"
    },
    "Resposta": "D",
    "Motivo": "Jonathan Meese é um pintor e escultor alemão contemporâneo associado ao movimento de arte distorcida. Suas obras apresentam figuras distorcidas e grotescas, explorando temas de mitologia, política e cultura popular de maneira provocativa e expressiva."
  },
  {
    "Pergunta": "Quem é um artista norte-americano conhecido por suas esculturas que misturam horror e humor, frequentemente apresentando criaturas grotescas e cômicas?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "Junji Ito",
      D: "Ron English"
    },
    "Resposta": "D",
    "Motivo": "Ron English é um artista norte-americano conhecido por suas esculturas que misturam horror e humor. Suas criações frequentemente apresentam criaturas grotescas e cômicas, desafiando as expectativas e explorando uma estética única que cativa e intriga o espectador."
  },
  {
    "Pergunta": "Quem foi um artista surrealista belga conhecido por suas pinturas que exploram temas do subconsciente, sonhos e a natureza misteriosa da mente humana?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "René Magritte",
      D: "Francis Bacon"
    },
    "Resposta": "C",
    "Motivo": "René Magritte foi um proeminente artista surrealista belga, conhecido por suas pinturas que exploram temas do subconsciente, sonhos e a natureza misteriosa da mente humana. Suas obras muitas vezes desafiam a lógica visual, provocando reflexões sobre a realidade e a percepção."
  },
  {
    "Pergunta": "Quem é uma artista contemporânea mexicana conhecida por suas ilustrações e pinturas que combinam elementos de horror, fantasia e surrealismo?",
    "Opcoes": {
      A: "Zdzisław Beksiński",
      B: "H. R. Giger",
      C: "Alejandro Jodorowsky",
      D: "Gris Grimly"
    },
    "Resposta": "D",
    "Motivo": "Gris Grimly é uma artista contemporânea mexicana conhecida por suas ilustrações e pinturas que combinam elementos de horror, fantasia e surrealismo. Seu estilo único cria imagens cativantes e muitas vezes perturbadoras que exploram o lado mais sombrio da imaginação humana."
  }
    
      
      
      
      ];
 const perguntasTecnologia =[
    
{
  "Pergunta": "Qual é o principal protocolo de comunicação utilizado na internet?",
  "Opcoes": {
    A: "FTP",
    B: "SMTP",
    C: "HTTP",
    D: "TCP/IP"
  },
  "Resposta": "D",
  "Motivo": "O TCP/IP (Transmission Control Protocol/Internet Protocol) é o conjunto de protocolos de comunicação fundamental para a internet, garantindo a transmissão eficiente de dados entre dispositivos."
},
{
    "Pergunta": "O que significa a sigla HTML em termos de desenvolvimento web?",
    "Opcoes": {
      A: "Hypertext Markup Language",
      B: "Hyperlink and Text Markup Language",
      C: "High-level Text Management Language",
      D: "Hypertext Management and Linking"
    },
    "Resposta": "A",
    "Motivo": "HTML significa Hypertext Markup Language, sendo a linguagem padrão para a criação e estruturação de páginas web."
  },
  {
    "Pergunta": "O que significa a sigla CSS em termos de desenvolvimento web?",
    "Opcoes": {
      A: "Cascading Style Sheet",
      B: "Computer Style Sheet",
      C: "Creative Style Sheet",
      D: "Code Style Sheet"
    },
    "Resposta": "A",
    "Motivo": "CSS significa Cascading Style Sheet, sendo uma linguagem usada para estilizar a apresentação de documentos escritos em HTML."
  },
   {
    "Pergunta": "Qual é o conceito fundamental por trás do paradigma de programação funcional?",
    "Opcoes": {
      A: "Estruturas de controle de fluxo",
      B: "Imutabilidade e funções puras",
      C: "Programação orientada a objetos",
      D: "Manipulação direta de registros de memória"
    },
    "Resposta": "B",
    "Motivo": "Na programação funcional, a imutabilidade e o uso de funções puras são centrais, permitindo um estilo de codificação mais declarativo e evitando efeitos colaterais."
  },
  {
    "Pergunta": "Em redes de computadores, o que é um 'subnet'?",
    "Opcoes": {
      A: "Um endereço IP público exclusivo",
      B: "Uma porção de uma rede IP maior dividida em sub-redes menores",
      C: "Um protocolo de roteamento avançado",
      D: "Um tipo de firewall"
    },
    "Resposta": "B",
    "Motivo": "Uma 'subnet' é uma subdivisão de uma rede IP maior para melhorar a gestão de endereços e o desempenho da rede."
  },
  {
    "Pergunta": "Qual é a diferença entre Java e JavaScript?",
    "Opcoes": {
      A: "Java é apenas para backend, enquanto JavaScript é exclusivamente para frontend",
      B: "Java é compilado e orientado a objetos, enquanto JavaScript é interpretado e baseado em protótipos",
      C: "JavaScript é uma versão simplificada de Java",
      D: "Java é usado apenas para scripts de servidor, enquanto JavaScript é para scripts de cliente"
    },
    "Resposta": "B",
    "Motivo": "Java é compilado e fortemente tipado, enquanto JavaScript é interpretado e baseado em protótipos, sendo mais flexível."
  },
  {
    "Pergunta": "O que é uma injeção de SQL?",
    "Opcoes": {
      A: "Um método de otimização de consultas em bancos de dados",
      B: "Uma técnica para injetar código malicioso em instruções SQL",
      C: "Um processo de criação dinâmica de tabelas em um banco de dados",
      D: "Um padrão de design para a criação de interfaces gráficas em SQL"
    },
    "Resposta": "B",
    "Motivo": "Injeção de SQL é uma vulnerabilidade onde um atacante pode inserir comandos SQL maliciosos em entradas de dados, comprometendo a integridade do banco de dados."
  },
  {
    "Pergunta": "O que é o conceito de 'big-O' na análise de algoritmos?",
    "Opcoes": {
      A: "Uma linguagem de programação popular",
      B: "Uma notação para descrever o desempenho ou complexidade de um algoritmo",
      C: "Um padrão de codificação para algoritmos eficientes",
      D: "Uma técnica para compressão de dados em algoritmos"
    },
    "Resposta": "B",
    "Motivo": "O 'big-O' é uma notação que descreve a complexidade assintótica de um algoritmo, indicando como o desempenho do algoritmo se comporta em relação ao tamanho da entrada."
  },
  
  {
    "Pergunta": "O que é um 'hash' em criptografia?",
    "Opcoes": {
      A: "Um algoritmo para compressão de dados",
      B: "Uma técnica de ofuscação de código-fonte",
      C: "Uma função matemática unidirecional para gerar códigos únicos",
      D: "Uma linguagem de programação segura"
    },
    "Resposta": "C",
    "Motivo": "Em criptografia, um 'hash' é uma função matemática unidirecional que gera uma sequência única de caracteres para representar dados, sendo usado para verificar a integridade e autenticidade dos mesmos."
  },
  {
    "Pergunta": "O que é o protocolo HTTPS em uma URL?",
    "Opcoes": {
      A: "Hypertext Transfer Protocol Secure",
      B: "Hypertext Transfer Protocol Standard",
      C: "Hypertext and Text Processing Service",
      D: "Hypertext and Encryption Service"
    },
    "Resposta": "A",
    "Motivo": "O HTTPS (Hypertext Transfer Protocol Secure) é a versão segura do HTTP, garantindo a transferência segura de dados entre o navegador e o servidor."
  },
  {
    "Pergunta": "O que é um 'container' na tecnologia de virtualização?",
    "Opcoes": {
      A: "Um dispositivo de armazenamento externo",
      B: "Uma unidade de processamento central em um servidor",
      C: "Uma instância isolada de um sistema operacional e aplicativos",
      D: "Uma interface gráfica para gerenciar recursos de rede"
    },
    "Resposta": "C",
    "Motivo": "Um 'container' na virtualização é uma instância isolada que inclui um sistema operacional e as dependências necessárias para executar aplicativos, proporcionando portabilidade e eficiência."
  },
  {
    "Pergunta": "Qual é a principal diferença entre linguagens de programação interpretadas e compiladas?",
    "Opcoes": {
      A: "Linguagens interpretadas são mais eficientes em termos de desempenho",
      B: "Linguagens compiladas são traduzidas para código de máquina antes da execução",
      C: "Linguagens interpretadas são traduzidas antes da execução, enquanto as compiladas são interpretadas durante a execução",
      D: "Não há diferença significativa entre ambas"
    },
    "Resposta": "B",
    "Motivo": "Linguagens compiladas são traduzidas para código de máquina antes da execução, resultando em um desempenho geralmente mais rápido do programa."
  },
  {
    "Pergunta": "O que é a arquitetura de microsserviços em desenvolvimento de software?",
    "Opcoes": {
      A: "Um padrão de design para interfaces de usuário",
      B: "Um método para compactação de código fonte",
      C: "Uma abordagem de desenvolvimento que divide um aplicativo em serviços independentes",
      D: "Uma técnica para otimização de consultas em banco de dados"
    },
    "Resposta": "C",
    "Motivo": "A arquitetura de microsserviços envolve o desenvolvimento de um aplicativo como uma coleção de serviços independentes, facilitando a escalabilidade"},
    
  {
    "Pergunta": "O que é a técnica de programação 'memoization'?",
    "Opcoes": {
      A: "Uma técnica para compressão de código fonte",
      B: "Um método para otimizar a execução de loops",
      C: "Um padrão de design para interfaces de usuário",
      D: "Uma técnica de armazenamento em cache para otimizar o desempenho de funções"
    },
    "Resposta": "D",
    "Motivo": "Memoization é uma técnica de armazenamento em cache que otimiza o desempenho de funções, memorizando resultados de chamadas anteriores para evitar recálculos."
  },
  {
    "Pergunta": "O que é a arquitetura de rede 'peer-to-peer'?",
    "Opcoes": {
      A: "Um modelo de arquitetura centralizada",
      B: "Um modelo onde os dispositivos se comunicam diretamente entre si",
      C: "Um padrão de design para sistemas distribuídos",
      D: "Uma técnica de redundância de dados"
    },
    "Resposta": "B",
    "Motivo": "Na arquitetura 'peer-to-peer', os dispositivos se comunicam diretamente entre si, sem a necessidade de um servidor central."
  },
  {
    "Pergunta": "O que é 'Machine Learning'?",
    "Opcoes": {
      A: "Um algoritmo para compressão de dados",
      B: "Um campo de estudo que envolve o desenvolvimento de algoritmos que permitem aos computadores aprenderem padrões a partir de dados",
      C: "Um método para compactação de código fonte",
      D: "Uma linguagem de programação para automação de tarefas"
    },
    "Resposta": "B",
    "Motivo": "'Machine Learning' é um campo de estudo que envolve o desenvolvimento de algoritmos que permitem aos computadores aprenderem padrões a partir de dados, sem serem explicitamente programados."
  },
  {
    "Pergunta": "O que é um 'framework' em desenvolvimento de software?",
    "Opcoes": {
      A: "Uma linguagem de programação",
      B: "Um conjunto de ferramentas e convenções que facilitam o desenvolvimento de software",
      C: "Um tipo de banco de dados",
      D: "Uma técnica de segurança cibernética"
    },
    "Resposta": "B",
    "Motivo": "Um 'framework' em desenvolvimento de software é um conjunto de ferramentas e convenções que facilitam o desenvolvimento de aplicativos, proporcionando estrutura e funcionalidades predefinidas."
  },
  {
    "Pergunta": "O que é um 'git repository'?",
    "Opcoes": {
      A: "Um repositório de dados para aprendizado de máquina",
      B: "Um repositório de código fonte versionado pelo sistema de controle de versão Git",
      C: "Uma interface gráfica para gerenciar projetos de software",
      D: "Um banco de dados relacional"
    },
    "Resposta": "B",
    "Motivo": "Um 'git repository' é um repositório de código fonte versionado pelo sistema de controle de versão Git, permitindo o acompanhamento das alterações ao longo do tempo."
  },
  {
    "Pergunta": "O que é a Lei de Amdahl em computação?",
    "Opcoes": {
      A: "Uma teoria sobre a expansão do universo",
      B: "Uma previsão de que a capacidade dos processadores aumenta exponencialmente",
      C: "Uma lei que estabelece padrões de segurança em redes",
      D: "Uma fórmula que descreve a melhoria de desempenho ao otimizar apenas parte de um sistema"
    },
    "Resposta": "D",
    "Motivo": "A Lei de Amdahl descreve a melhoria de desempenho ao otimizar apenas parte de um sistema, indicando que o ganho total é limitado pela fração não otimizada."
  },
  {
    "Pergunta": "O que é 'serverless computing'?",
    "Opcoes": {
      A: "Um modelo de cobrança baseado no tempo de uso de servidores",
      B: "Um modelo onde os servidores não são gerenciados diretamente pelo desenvolvedor",
      C: "Um padrão de design para sistemas distribuídos",
      D: "Uma técnica para otimizar consultas em banco de dados"
    },
    "Resposta": "B",
    "Motivo": "'Serverless computing' é um modelo em que os servidores são gerenciados automaticamente pela plataforma, permitindo que os desenvolvedores se concentrem apenas no código e na lógica de negócios."
  },
  {
    "Pergunta": "O que é a linguagem de programação Erlang conhecida por enfatizar?",
    "Opcoes": {
      A: "Facilidade de aprendizado",
      B: "Desempenho extremo em jogos",
      C: "Concorrência e tolerância a falhas",
      D: "Integração com sistemas mainframe"
    },
    "Resposta": "C",
    "Motivo": "Erlang é conhecida por enfatizar concorrência e tolerância a falhas, sendo projetada para sistemas de telecomunicações altamente disponíveis."
  },
  {
    "Pergunta": "O que é o método 'Cross-Origin Resource Sharing' (CORS) em desenvolvimento web?",
    "Opcoes": {
      A: "Um método de compressão de imagens para transferência eficiente",
      B: "Uma técnica para criptografar a comunicação entre cliente e servidor",
      C: "Uma política de segurança para restringir requisições HTTP entre diferentes domínios",
      D: "Uma abordagem para melhorar a velocidade de carregamento de páginas web"
    },
    "Resposta": "C",
    "Motivo": "O CORS é uma política de segurança que permite ou restringe as requisições HTTP entre diferentes domínios, protegendo contra ataques de solicitação de origem cruzada não autorizados."
  },


    
    {
    "Pergunta": "O que é a 'Lei de Moore' e como ela está relacionada à tecnologia?",
    "Opcoes": {
      A: "Uma lei que estabelece a taxa de crescimento da inteligência artificial",
      B: "Uma teoria que prevê a duplicação da capacidade dos dispositivos de armazenamento a cada dois anos",
      C: "Um princípio fundamental da teoria dos grafos",
      D: "Um conceito de segurança cibernética"
    },
    "Resposta": "B",
    "Motivo": "A 'Lei de Moore' é uma observação feita por Gordon Moore, co-fundador da Intel, que prevê que a capacidade dos dispositivos de armazenamento, como chips de computador, duplicará aproximadamente a cada dois anos. Essa observação tem sido fundamental para o desenvolvimento tecnológico e o aumento da capacidade de processamento ao longo do tempo."
  },
  {
    "Pergunta": "O que é a 'Teoria Quântica da Informação'?",
    "Opcoes": {
      A: "Uma teoria que descreve como a informação é processada em computadores quânticos",
      B: "Um modelo de algoritmo de compressão de dados",
      C: "Uma técnica de criptografia clássica",
      D: "Um método para otimização de redes neurais"
    },
    "Resposta": "A",
    "Motivo": "A 'Teoria Quântica da Informação' é uma área de estudo que descreve como a informação é processada em sistemas quânticos, incluindo computadores quânticos. Ela explora conceitos como bits quânticos (qubits), entrelaçamento quântico e algoritmos quânticos, proporcionando uma compreensão avançada da computação quântica e suas aplicações."
  },
  {
    "Pergunta": "O que é a 'Lei de Zipf' e como ela se aplica a conjuntos de dados?",
    "Opcoes": {
      A: "Uma lei que descreve a distribuição de frequência de palavras em textos longos",
      B: "Um princípio de otimização de algoritmos de compressão de imagens",
      C: "Uma regra para a codificação de áudio em alta resolução",
      D: "Um conceito de segurança de redes"
    },
    "Resposta": "A",
    "Motivo": "A 'Lei de Zipf' é uma observação estatística que descreve a distribuição de frequência de palavras em textos longos. Ela afirma que algumas palavras são usadas com muita frequência, enquanto a maioria das palavras é usada raramente. Essa lei tem aplicações em processamento de linguagem natural e análise de dados linguísticos."
  },
  {
    "Pergunta": "O que é a 'Criptografia Quântica' e como ela difere da criptografia clássica?",
    "Opcoes": {
      A: "Um método de criptografia baseado em algoritmos quânticos",
      B: "Um sistema de codificação de mensagens usando códigos de barras quânticos",
      C: "Um modelo de segurança cibernética para redes sem fio",
      D: "Uma técnica de criptografia de dados em nuvem"
    },
    "Resposta": "A",
    "Motivo": "A 'Criptografia Quântica' é um método de criptografia baseado em princípios quânticos, como entrelaçamento quântico e superposição. Ela difere da criptografia clássica por ser teoricamente invulnerável a ataques de computadores quânticos, oferecendo um nível avançado de segurança para a transmissão de dados."
  },
  {
    "Pergunta": "O que é 'Blockchain' e como funciona?",
    "Opcoes": {
      A: "Um tipo de processamento de dados em nuvem",
      B: "Uma técnica de criptografia para redes sociais",
      C: "Um sistema descentralizado de registro de transações usando blocos encadeados",
      D: "Uma versão avançada de processadores de computador"
    },
    "Resposta": "C",
    "Motivo": "Blockchain é um sistema descentralizado de registro de transações que utiliza blocos encadeados. Cada bloco contém um conjunto de transações, e a cadeia de blocos é distribuída entre vários participantes da rede. Essa tecnologia é conhecida por sua segurança e transparência, sendo amplamente utilizada em criptomoedas, contratos inteligentes e outras aplicações."
  },
  {
    "Pergunta": "O que é 'Edge Computing' e como difere do processamento em nuvem tradicional?",
    "Opcoes": {
      A: "Um modelo de otimização de algoritmos de aprendizado de máquina",
      B: "Um método de resfriamento avançado para servidores de data center",
      C: "Um modelo de processamento de dados próximo à fonte de dados, em vez de depender de um servidor centralizado",
      D: "Uma técnica de codificação de vídeos em alta definição"
    },
    "Resposta": "C",
    "Motivo": "Edge Computing é um modelo de processamento de dados que ocorre próximo à fonte de dados, em vez de depender de um servidor centralizado na nuvem. Isso reduz a latência e melhora o desempenho, sendo especialmente útil em casos de uso que exigem respostas rápidas, como internet das coisas, veículos autônomos e automação industrial."
  },
  {
    "Pergunta": "O que é 'Deepfake' e quais são suas implicações?",
    "Opcoes": {
      A: "Um modelo de aprendizado de máquina para reconhecimento de voz",
      B: "Uma técnica de edição de vídeo que usa inteligência artificial para criar vídeos falsos realistas",
      C: "Uma versão avançada de tecnologia de reconhecimento facial",
      D: "Uma técnica de otimização de algoritmos de compressão de dados"
    },
    "Resposta": "B",
    "Motivo": "Deepfake é uma técnica de edição de vídeo que utiliza inteligência artificial para criar vídeos falsos realistas, muitas vezes substituindo rostos e vozes em vídeos existentes. Isso levanta preocupações éticas, pois pode ser usado para criar conteúdo enganoso e prejudicial, destacando os desafios associados à disseminação de informações confiáveis na era digital."
  },
   {
    "Pergunta": "O que é 'IoT' (Internet das Coisas) e como ela está transformando setores diversos?",
    "Opcoes": {
      A: "Um modelo de otimização de algoritmos de aprendizado de máquina",
      B: "Uma versão avançada de processadores de computador",
      C: "Um conceito que se refere à interconexão de dispositivos físicos pela internet para coletar e trocar dados",
      D: "Um sistema de codificação de mensagens usando códigos de barras quânticos"
    },
    "Resposta": "C",
    "Motivo": "A IoT (Internet das Coisas) é um conceito que se refere à interconexão de dispositivos físicos pela internet, permitindo que eles coletem e troquem dados. Isso está transformando setores diversos, como saúde, agricultura, transporte e manufatura, ao possibilitar monitoramento remoto, automação e análise de dados em tempo real."
  },
  {
    "Pergunta": "O que são 'Algoritmos de Aprendizado Profundo' e como eles diferem de algoritmos de aprendizado de máquina convencionais?",
    "Opcoes": {
      A: "Um conjunto de técnicas de criptografia para redes sociais",
      B: "Um método de resfriamento avançado para servidores de data center",
      C: "Algoritmos que imitam o aprendizado humano, utilizando redes neurais profundas para análise de padrões complexos",
      D: "Um modelo de processamento de dados em nuvem"
    },
    "Resposta": "C",
    "Motivo": "Algoritmos de Aprendizado Profundo são algoritmos que imitam o aprendizado humano, utilizando redes neurais profundas para análise de padrões complexos. Eles diferem de algoritmos de aprendizado de máquina convencionais ao processar dados em camadas mais profundas, permitindo a extração de representações mais abstratas e sofisticadas."
  },
   {
    "Pergunta": "O que é 'Machine Learning' e como ele difere de algoritmos tradicionais?",
    "Opcoes": {
      A: "Um método de segurança cibernética para proteger sistemas, redes e dados contra ameaças",
      B: "Algoritmos baseados em regras lógicas pré-definidas",
      C: "Um modelo de processamento de dados em nuvem",
      D: "Um conjunto de técnicas que permite que os computadores aprendam com dados e melhorem suas performances ao longo do tempo"
    },
    "Resposta": "D",
    "Motivo": "Machine Learning é um conjunto de técnicas que permite que os computadores aprendam com dados e melhorem suas performances ao longo do tempo. Ao contrário de algoritmos tradicionais baseados em regras lógicas pré-definidas, o Machine Learning permite que os sistemas aprendam padrões e façam previsões ou tomem decisões sem intervenção humana constante."
  },
  {
    "Pergunta": "O que é 'Quantum Computing' e como ele se diferencia da computação clássica?",
    "Opcoes": {
      A: "Um sistema de codificação de mensagens usando códigos de barras quânticos",
      B: "Um modelo de processamento de dados que utiliza supercomputadores",
      C: "Um método de criptografia baseado em algoritmos quânticos",
      D: "Um modelo de computação baseado em princípios quânticos, como qubits e superposição"
    },
    "Resposta": "D",
    "Motivo": "Quantum Computing é um modelo de computação baseado em princípios quânticos, como qubits e superposição. Ao contrário da computação clássica, que utiliza bits clássicos que podem ser 0 ou 1, a computação quântica permite que qubits estejam em estados de superposição, proporcionando um potencial significativo para o processamento de certas tarefas complexas de forma mais eficiente."
  },
  {
    "Pergunta": "O que são 'Criptomoedas' e como funciona o processo de mineração?",
    "Opcoes": {
      A: "Um modelo de otimização de algoritmos de compressão de dados",
      B: "Uma versão avançada de processadores de computador",
      C: "Uma forma de dinheiro digital que utiliza criptografia para garantir transações e controlar a criação de novas unidades",
      D: "Um método de segurança cibernética para proteger sistemas, redes e dados contra ameaças"
    },
    "Resposta": "C",
    "Motivo": "Criptomoedas são formas de dinheiro digital que utilizam criptografia para garantir transações e controlar a criação de novas unidades. O processo de mineração envolve a validação de transações e a adição de novos blocos ao blockchain, sendo realizado por mineradores que utilizam poder computacional para resolver problemas complexos, garantindo a segurança e integridade da rede."
  },
  
   {
    "Pergunta": "Explique o princípio de funcionamento da tecnologia de armazenamento de dados em SSDs em comparação com HDDs.",
    "Opcoes": {
      A: "SSDs utilizam discos magnéticos para armazenar dados de forma mais eficiente que os HDDs.",
      B: "HDDs e SSDs armazenam dados de maneira semelhante, mas os SSDs são mais resistentes a impactos físicos.",
      C: "SSDs utilizam memória flash, não possuindo partes móveis, resultando em acesso mais rápido aos dados em comparação com os HDDs.",
      D: "HDDs usam células de memória para armazenar dados de maneira mais duradoura do que os SSDs."
    },
    "Resposta": "C",
    "Motivo": "SSDs (Solid State Drives) utilizam memória flash para armazenar dados, não possuindo partes móveis como os HDDs (Hard Disk Drives). Isso resulta em acesso mais rápido aos dados, menor consumo de energia e maior resistência a impactos físicos."
  },
  {
    "Pergunta": "Descreva o conceito de 'Redes Neurais' e como elas são aplicadas em problemas de aprendizado de máquina.",
    "Opcoes": {
      A: "Redes Neurais são sistemas de comunicação biológica em computadores, aplicadas para melhorar o desempenho de processadores.",
      B: "Redes Neurais são algoritmos de compressão de dados utilizados em redes de computadores.",
      C: "Redes Neurais são modelos computacionais inspirados no cérebro humano, aplicados em problemas de aprendizado de máquina para reconhecimento de padrões e tomada de decisões.",
      D: "Redes Neurais são métodos de criptografia avançados para proteger transmissões de dados em redes sem fio."
    },
    "Resposta": "C",
    "Motivo": "Redes Neurais são modelos computacionais inspirados no cérebro humano. Em aprendizado de máquina, elas são aplicadas para reconhecimento de padrões e tomada de decisões, utilizando camadas de neurônios artificiais para processar e aprender a partir de dados."
  },
  {
    "Pergunta": "Explique a diferença entre IPv4 e IPv6 e por que a transição para IPv6 é considerada necessária.",
    "Opcoes": {
      A: "IPv4 e IPv6 são métodos de compressão de dados, sendo IPv6 uma versão mais recente e eficiente.",
      B: "IPv4 e IPv6 são protocolos de segurança para redes, sendo IPv6 mais seguro que IPv4.",
      C: "IPv4 e IPv6 são padrões de endereçamento IP, com IPv6 trazendo um espaço de endereçamento maior para suportar o crescimento da Internet.",
      D: "IPv4 e IPv6 são técnicas de criptografia para garantir a privacidade dos dados transmitidos pela Internet."
    },
    "Resposta": "C",
    "Motivo": "IPv4 e IPv6 são padrões de endereçamento IP. A transição para IPv6 é necessária devido à escassez de endereços IPv4, oferecendo um espaço de endereçamento significativamente maior para suportar o crescente número de dispositivos conectados à Internet."
  },{
    "Pergunta": "Descreva o funcionamento da tecnologia OLED em comparação com LCD e como ela é aplicada em dispositivos eletrônicos.",
    "Opcoes": {
      A: "OLED usa cristais líquidos para exibir imagens, superando o LCD em eficiência energética e qualidade de cor.",
      B: "OLED e LCD funcionam de maneira semelhante, mas o OLED possui uma vida útil mais longa.",
      C: "OLED utiliza diodos orgânicos para emissão de luz, proporcionando maior contraste e flexibilidade em comparação com o LCD.",
      D: "OLED é uma técnica de criptografia para proteção de telas em dispositivos eletrônicos."
    },
    "Resposta": "C",
    "Motivo": "OLED utiliza diodos orgânicos para emissão de luz, eliminando a necessidade de retroiluminação como no LCD. Isso resulta em telas mais finas, maior flexibilidade e melhor contraste nas imagens."
  },
  {
    "Pergunta": "Explique o conceito de 'Internet das Coisas (IoT)' e como ela influencia o cenário tecnológico.",
    "Opcoes": {
      A: "IoT refere-se à integração de softwares em dispositivos móveis para comunicação eficiente.",
      B: "IoT é um método de compressão de dados em redes sem fio.",
      C: "IoT é a interconexão de dispositivos físicos através da internet, permitindo coleta e compartilhamento de dados para automação e análise.",
      D: "IoT é uma técnica de criptografia para proteger dispositivos eletrônicos de ataques virtuais."
    },
    "Resposta": "C",
    "Motivo": "A 'Internet das Coisas (IoT)' refere-se à interconexão de dispositivos físicos pela internet. Isso possibilita a coleta e compartilhamento de dados entre esses dispositivos, permitindo automação, análise de dados em tempo real e melhorando a eficiência em diversos setores."
  },
  {
    "Pergunta": "Como a tecnologia de carregamento sem fio funciona em dispositivos eletrônicos e quais são suas vantagens em comparação com métodos de carregamento convencionais?",
    "Opcoes": {
      A: "Carregamento sem fio utiliza campos magnéticos para transferir energia, eliminando a necessidade de cabos.",
      B: "Carregamento sem fio é um método de compressão de energia para dispositivos móveis.",
      C: "Carregamento sem fio utiliza luz solar para carregar dispositivos eletrônicos, sendo mais eficiente que métodos convencionais.",
      D: "Carregamento sem fio é uma técnica de criptografia para proteção de dados durante o carregamento."
    },
    "Resposta": "A",
    "Motivo": "O carregamento sem fio utiliza campos magnéticos para transferir energia entre uma base e um dispositivo, eliminando a necessidade de cabos. Suas vantagens incluem conveniência, menor desgaste nos conectores e maior facilidade de uso."
  },
  {
    "Pergunta": "Explique o funcionamento da tecnologia de impressão 3D e suas aplicações em diversos setores.",
    "Opcoes": {
      A: "Impressão 3D utiliza papel especial para criar objetos tridimensionais, sendo aplicada principalmente na indústria gráfica.",
      B: "Impressão 3D constrói objetos camada por camada a partir de materiais como plástico, metal e cerâmica, com aplicações em prototipagem, medicina e manufatura.",
      C: "Impressão 3D é um método de compressão de dados para criar representações físicas de modelos digitais.",
      D: "Impressão 3D utiliza realidade aumentada para criar objetos virtuais no ambiente físico."
    },
    "Resposta": "B",
    "Motivo": "A tecnologia de impressão 3D constrói objetos camada por camada a partir de materiais diversos. Suas aplicações vão desde prototipagem rápida até produção de peças personalizadas em setores como medicina, manufatura e design."
  },{
    "Pergunta": "Como funcionam os veículos elétricos em comparação com os veículos a combustão e quais são os principais desafios enfrentados pelos veículos elétricos?",
    "Opcoes": {
      A: "Veículos elétricos utilizam células de combustível, superando veículos a combustão em eficiência e autonomia.",
      B: "Veículos elétricos funcionam com baterias elétricas, proporcionando menor impacto ambiental e custos operacionais em comparação com veículos a combustão.",
      C: "Veículos elétricos usam motores a diesel para reduzir as emissões, sendo uma alternativa mais sustentável.",
      D: "Veículos elétricos são alimentados por etanol, eliminando a dependência de combustíveis fósseis."
    },
    "Resposta": "B",
    "Motivo": "Veículos elétricos funcionam com baterias elétricas, oferecendo vantagens ambientais e custos operacionais reduzidos em comparação com veículos a combustão. Os desafios incluem a autonomia limitada das baterias e a infraestrutura de recarga em desenvolvimento."
  },
  {
    "Pergunta": "Explique a importância da tecnologia 5G na evolução das comunicações móveis e suas possíveis aplicações em diversos setores.",
    "Opcoes": {
      A: "Tecnologia 5G é um método de compressão de dados em redes móveis, proporcionando maior velocidade de transmissão.",
      B: "5G é a quinta geração de comunicação móvel, oferecendo maior velocidade, menor latência e suportando aplicações como internet das coisas, realidade virtual e aumentada.",
      C: "Tecnologia 5G é uma técnica de criptografia avançada para proteção de dados em dispositivos móveis.",
      D: "5G utiliza ondas de rádio AM para comunicação, garantindo maior alcance e eficiência."
    },
    "Resposta": "B",
    "Motivo": "5G é a quinta geração de comunicação móvel, proporcionando maior velocidade, menor latência e suportando aplicações avançadas como internet das coisas (IoT), realidade virtual e aumentada, e carros autônomos."
  },
  {
    "Pergunta": "Como a tecnologia Blockchain funciona e quais são os benefícios dessa tecnologia em comparação com os métodos tradicionais de registro e transação?",
    "Opcoes": {
      A: "Blockchain utiliza redes sociais para criar registros descentralizados, garantindo maior transparência.",
      B: "Blockchain é um método de compressão de dados para transações financeiras, oferecendo eficiência e segurança.",
      C: "Blockchain é um sistema descentralizado de registros encadeados, proporcionando transparência, segurança e resistência a alterações.",
      D: "Tecnologia Blockchain é um protocolo de segurança para redes Wi-Fi, protegendo informações pessoais."
    },
    "Resposta": "C",
    "Motivo": "Blockchain é um sistema descentralizado de registros encadeados, garantindo transparência, segurança e resistência a alterações. Sua aplicação vai além de transações financeiras, sendo utilizada em contratos inteligentes, cadeias de suprimentos e autenticação de dados."
  },
  {
    "Pergunta": "Explique a tecnologia de realidade aumentada e suas aplicações em campos como educação, medicina e entretenimento.",
    "Opcoes": {
      A: "Realidade aumentada é um método de compressão de imagens para jogos em dispositivos móveis.",
      B: "Realidade aumentada combina elementos virtuais com o ambiente real, proporcionando experiências enriquecidas em campos como educação, medicina e entretenimento.",
      C: "Tecnologia de realidade aumentada utiliza hologramas para criar ambientes virtuais em dispositivos eletrônicos.",
      D: "Realidade aumentada é uma técnica de criptografia para proteger dados visuais transmitidos por dispositivos de realidade virtual."
    },
    "Resposta": "B",
    "Motivo": "Realidade aumentada combina elementos virtuais com o ambiente real, oferecendo experiências enriquecidas em educação, medicina e entretenimento. Suas aplicações incluem simulações médicas, treinamento industrial e jogos interativos."
  },
  {
    "Pergunta": "Como a nanotecnologia é aplicada em dispositivos eletrônicos e em que aspectos ela contribui para o avanço tecnológico?",
    "Opcoes": {
      A: "Nanotecnologia utiliza ímãs para criar dispositivos eletrônicos em escala nanométrica.",
      B: "Nanotecnologia é um método de compressão de dados para processadores, melhorando a eficiência.",
      C: "Nanotecnologia envolve a manipulação de materiais em nível atômico e molecular, contribuindo para o desenvolvimento de dispositivos eletrônicos menores e mais eficientes.",
      D: "Nanotecnologia é uma técnica de criptografia para proteção de informações transmitidas por redes sem fio."
    },
    "Resposta": "C",
    "Motivo": "Nanotecnologia envolve a manipulação de materiais em nível atômico e molecular. Em dispositivos eletrônicos, ela contribui para o desenvolvimento de componentes menores e mais eficientes, melhorando o desempenho e a funcionalidade."
  },{
    "Pergunta": "Como a tecnologia de edição de genes CRISPR-Cas9 funciona e quais são as implicações éticas associadas à sua utilização?",
    "Opcoes": {
      A: "CRISPR-Cas9 é um método de compressão de dados em biologia molecular, permitindo uma análise mais eficiente de sequências genéticas.",
      B: "Edição de genes CRISPR-Cas9 utiliza sequências de RNA para modificar genes de forma precisa, enfrentando implicações éticas relacionadas à edição do genoma humano.",
      C: "CRISPR-Cas9 é uma técnica de criptografia para proteção de informações genéticas.",
      D: "Edição de genes CRISPR-Cas9 é baseada em princípios da realidade virtual para manipulação de informações genéticas."
    },
    "Resposta": "B",
    "Motivo": "A edição de genes CRISPR-Cas9 utiliza sequências de RNA para modificar genes de forma precisa. Implicações éticas incluem questões sobre edição do genoma humano, potenciais riscos não intencionais e considerações morais."
  },
  {
    "Pergunta": "Explique a importância da criptografia em comunicações digitais e como os algoritmos de criptografia garantem a segurança da informação.",
    "Opcoes": {
      A: "Criptografia é um método de compressão de dados em redes de comunicação, garantindo maior eficiência.",
      B: "Algoritmos de criptografia protegem a confidencialidade e integridade dos dados através da codificação e decodificação de informações, assegurando a segurança em comunicações digitais.",
      C: "Criptografia é um protocolo de segurança para redes sociais, protegendo informações compartilhadas online.",
      D: "Algoritmos de criptografia são baseados em princípios da inteligência artificial para proteção de dados em transmissões digitais."
    },
    "Resposta": "B",
    "Motivo": "Algoritmos de criptografia protegem a confidencialidade e integridade dos dados através da codificação e decodificação, assegurando a segurança em comunicações digitais, incluindo transações online, troca de mensagens e proteção de dados sensíveis."
  }, {
  "Pergunta": "Descreva os princípios fundamentais por trás da arquitetura RISC Reduced Instruction Set Computing em processadores e como ela se diferencia da arquitetura CISC Complex Instruction Set Computing.",
    "Opcoes": {
      A: "Arquitetura RISC utiliza um conjunto reduzido de instruções, executando operações de forma mais eficiente do que a arquitetura CISC, que possui um conjunto mais complexo.",
      B: "Arquitetura RISC é baseada em linguagens de programação mais simples, enquanto a CISC utiliza linguagens de programação complexas para otimizar o desempenho.",
      C: "Arquitetura RISC é voltada para sistemas operacionais específicos, enquanto a arquitetura CISC é mais versátil e compatível com diferentes ambientes.",
      D: "Arquitetura RISC utiliza tecnologias de virtualização, enquanto a CISC prioriza a execução direta de instruções complexas."
    },
    "Resposta": "A",
    "Motivo": "A arquitetura RISC utiliza um conjunto reduzido de instruções, executando operações de forma mais eficiente em comparação com a arquitetura CISC, que possui um conjunto mais complexo. Essa abordagem favorece a simplificação e aceleração da execução de instruções."
  },
  {
    "Pergunta": "Explique o conceito de pipelining em processadores e como ele contribui para o aumento do desempenho no processamento de instruções.",
    "Opcoes": {
      A: "Pipelining é uma técnica de compressão de dados que melhora a eficiência do processamento de instruções em processadores modernos.",
      B: "Pipelining envolve o paralelismo de instruções, dividindo o processamento em estágios sequenciais para aumentar a taxa de execução de instruções em um ciclo de clock.",
      C: "Pipelining é uma abordagem de programação para otimizar a execução de instruções em ambientes de desenvolvimento de software.",
      D: "Pipelining é uma estratégia de segurança em processadores que protege contra ataques de injeção de código malicioso."
    },
    "Resposta": "B",
    "Motivo": "Pipelining envolve o paralelismo de instruções, dividindo o processamento em estágios sequenciais para aumentar a taxa de execução de instruções em um ciclo de clock. Isso contribui significativamente para o aumento do desempenho em processadores modernos."
  },
  {
    "Pergunta": "Como funciona a técnica de criptografia homomórfica e quais são os benefícios e desafios associados ao seu uso em segurança da informação?",
    "Opcoes": {
      A: "Criptografia homomórfica permite a execução de operações em dados criptografados sem a necessidade de descriptografar, oferecendo benefícios em privacidade, mas enfrentando desafios em desempenho.",
      B: "Criptografia homomórfica é uma técnica de compressão de dados que permite o armazenamento eficiente de informações criptografadas.",
      C: "Criptografia homomórfica é utilizada para proteger redes sem fio contra ataques cibernéticos.",
      D: "Técnica de criptografia homomórfica é baseada em princípios de inteligência artificial para proteção de dados sensíveis."
    },
    "Resposta": "A",
    "Motivo": "Criptografia homomórfica permite a execução de operações em dados criptografados sem a necessidade de descriptografar. Isso oferece benefícios em privacidade, permitindo processamento seguro de dados sensíveis, mas enfrenta desafios em desempenho, pois as operações sobre dados criptografados geralmente são mais intensivas computacionalmente."
  },
  {
    "Pergunta": "Descreva o funcionamento dos algoritmos de roteamento em redes de computadores e como protocolos como o OSPF (Open Shortest Path First) contribuem para a eficiência no encaminhamento de pacotes.",
    "Opcoes": {
      A: "Algoritmos de roteamento determinam o caminho mais curto para a transmissão de dados em redes, e protocolos como OSPF otimizam a escolha de rotas através de métricas como a largura de banda disponível.",
      B: "Algoritmos de roteamento são responsáveis por compactar dados antes da transmissão em redes, e protocolos como OSPF garantem a segurança durante a comunicação.",
      C: "Roteamento em redes utiliza criptografia para proteger pacotes de dados, e protocolos como OSPF são baseados em inteligência artificial para otimização.",
      D: "Algoritmos de roteamento escolhem caminhos aleatórios para a transmissão de dados em redes, e protocolos como OSPF garantem a entrega eficiente sem interferências."
    },
    "Resposta": "A",
    "Motivo": "Algoritmos de roteamento determinam o caminho mais curto para a transmissão de dados em redes, e protocolos como OSPF otimizam a escolha de rotas utilizando métricas como a largura de banda disponível. Isso contribui para a eficiência no encaminhamento"},
    
    {
    "Pergunta": "Explique o princípio de funcionamento de um transistor e como ele é amplamente utilizado em eletrônica.",
    "Opcoes": {
      A: "Transistor é um dispositivo que comprime sinais elétricos em circuitos eletrônicos.",
      B: "Transistor é um componente semicondutor que controla o fluxo de corrente em um circuito, sendo essencial em amplificadores e circuitos lógicos.",
      C: "Transistor é um tipo de bateria recarregável utilizado em dispositivos eletrônicos.",
      D: "Transistor é um sensor utilizado para medir temperatura em circuitos eletrônicos."
    },
    "Resposta": "B",
    "Motivo": "O transistor é um componente semicondutor que controla o fluxo de corrente em um circuito. Essa capacidade de amplificar e modular sinais elétricos torna o transistor essencial em amplificadores e circuitos lógicos, sendo fundamental para a eletrônica moderna."
  },
  {
    "Pergunta": "Como funcionam os painéis solares fotovoltaicos na geração de energia elétrica a partir da luz solar, e quais são os desafios associados a essa tecnologia?",
    "Opcoes": {
      A: "Painéis solares convertem luz solar em calor para gerar eletricidade, enfrentando desafios na eficiência da conversão.",
      B: "Painéis solares fotovoltaicos convertem a luz solar diretamente em eletricidade por meio do efeito fotovoltaico, enfrentando desafios na eficiência e armazenamento da energia produzida.",
      C: "Painéis solares utilizam energia térmica para gerar eletricidade em células termofotovoltaicas, eliminando desafios associados à eficiência.",
      D: "Painéis solares geram eletricidade a partir de reações químicas, enfrentando desafios na durabilidade dos materiais utilizados."
    },
    "Resposta": "B",
    "Motivo": "Painéis solares fotovoltaicos convertem a luz solar diretamente em eletricidade por meio do efeito fotovoltaico. Desafios incluem a eficiência da conversão, armazenamento da energia produzida e materiais utilizados na fabricação dos painéis."
  },
  {
    "Pergunta": "Explique o princípio por trás da ressonância magnética e como essa tecnologia é aplicada em diagnósticos médicos.",
    "Opcoes": {
      A: "Ressonância magnética utiliza ondas sonoras para criar imagens do corpo humano, sendo uma técnica de diagnóstico médico.",
      B: "Ressonância magnética aproveita o alinhamento de átomos em campos magnéticos para gerar imagens detalhadas de tecidos internos, sendo uma poderosa ferramenta de diagnóstico médico.",
      C: "Ressonância magnética utiliza radiação ionizante para obter imagens de alta resolução, sendo uma técnica de diagnóstico médico avançada.",
      D: "Ressonância magnética é baseada em princípios de inteligência artificial para interpretar imagens médicas."
    },
    "Resposta": "B",
    "Motivo": "A ressonância magnética aproveita o alinhamento de átomos em campos magnéticos para gerar imagens detalhadas de tecidos internos. Essa técnica é uma poderosa ferramenta de diagnóstico médico, proporcionando imagens de alta resolução sem o uso de radiação ionizante."
  },
  {
    "Pergunta": "Como os robôs cirúrgicos são utilizados em procedimentos médicos e quais são os benefícios associados a essa tecnologia?",
    "Opcoes": {
      A: "Robôs cirúrgicos utilizam inteligência artificial para guiar instrumentos médicos durante procedimentos, proporcionando maior precisão e controle.",
      B: "Robôs cirúrgicos são controlados remotamente por cirurgiões, eliminando a necessidade de intervenção humana durante procedimentos médicos.",
      C: "Robôs cirúrgicos são baseados em realidade aumentada para simular procedimentos antes da realização efetiva.",
      D: "Robôs cirúrgicos são equipamentos de ressonância magnética utilizados em procedimentos médicos para obtenção de imagens em tempo real."
    },
    "Resposta": "A",
    "Motivo": "Robôs cirúrgicos utilizam inteligência artificial para guiar instrumentos médicos durante procedimentos, proporcionando maior precisão e controle. Essa tecnologia permite aos cirurgiões realizar intervenções menos invasivas e mais precisas, resultando em recuperações mais rápidas para os pacientes."
  },
  
    ] ;
    const perguntasInformatica =[
      
      
      
          
{
  "Pergunta": "Qual é o principal protocolo de comunicação utilizado na internet?",
  "Opcoes": {
    A: "FTP",
    B: "SMTP",
    C: "HTTP",
    D: "TCP/IP"
  },
  "Resposta": "D",
  "Motivo": "O TCP/IP (Transmission Control Protocol/Internet Protocol) é o conjunto de protocolos de comunicação fundamental para a internet, garantindo a transmissão eficiente de dados entre dispositivos."
},
{
    "Pergunta": "O que significa a sigla HTML em termos de desenvolvimento web?",
    "Opcoes": {
      A: "Hypertext Markup Language",
      B: "Hyperlink and Text Markup Language",
      C: "High-level Text Management Language",
      D: "Hypertext Management and Linking"
    },
    "Resposta": "A",
    "Motivo": "HTML significa Hypertext Markup Language, sendo a linguagem padrão para a criação e estruturação de páginas web."
  },
  {
    "Pergunta": "O que significa a sigla CSS em termos de desenvolvimento web?",
    "Opcoes": {
      A: "Cascading Style Sheet",
      B: "Computer Style Sheet",
      C: "Creative Style Sheet",
      D: "Code Style Sheet"
    },
    "Resposta": "A",
    "Motivo": "CSS significa Cascading Style Sheet, sendo uma linguagem usada para estilizar a apresentação de documentos escritos em HTML."
  },
     {
    "Pergunta": "O que é a técnica de programação 'memoization'?",
    "Opcoes": {
      A: "Uma técnica para compressão de código fonte",
      B: "Um método para otimizar a execução de loops",
      C: "Um padrão de design para interfaces de usuário",
      D: "Uma técnica de armazenamento em cache para otimizar o desempenho de funções"
    },
    "Resposta": "D",
    "Motivo": "Memoization é uma técnica de armazenamento em cache que otimiza o desempenho de funções, memorizando resultados de chamadas anteriores para evitar recálculos."
  },
  {
    "Pergunta": "O que é a arquitetura de rede 'peer-to-peer'?",
    "Opcoes": {
      A: "Um modelo de arquitetura centralizada",
      B: "Um modelo onde os dispositivos se comunicam diretamente entre si",
      C: "Um padrão de design para sistemas distribuídos",
      D: "Uma técnica de redundância de dados"
    },
    "Resposta": "B",
    "Motivo": "Na arquitetura 'peer-to-peer', os dispositivos se comunicam diretamente entre si, sem a necessidade de um servidor central."
  },
  {
    "Pergunta": "O que é 'Machine Learning'?",
    "Opcoes": {
      A: "Um algoritmo para compressão de dados",
      B: "Um campo de estudo que envolve o desenvolvimento de algoritmos que permitem aos computadores aprenderem padrões a partir de dados",
      C: "Um método para compactação de código fonte",
      D: "Uma linguagem de programação para automação de tarefas"
    },
    "Resposta": "B",
    "Motivo": "'Machine Learning' é um campo de estudo que envolve o desenvolvimento de algoritmos que permitem aos computadores aprenderem padrões a partir de dados, sem serem explicitamente programados."
  },
  {
    "Pergunta": "O que é um 'framework' em desenvolvimento de software?",
    "Opcoes": {
      A: "Uma linguagem de programação",
      B: "Um conjunto de ferramentas e convenções que facilitam o desenvolvimento de software",
      C: "Um tipo de banco de dados",
      D: "Uma técnica de segurança cibernética"
    },
    "Resposta": "B",
    "Motivo": "Um 'framework' em desenvolvimento de software é um conjunto de ferramentas e convenções que facilitam o desenvolvimento de aplicativos, proporcionando estrutura e funcionalidades predefinidas."
  },
  {
    "Pergunta": "O que é um 'git repository'?",
    "Opcoes": {
      A: "Um repositório de dados para aprendizado de máquina",
      B: "Um repositório de código fonte versionado pelo sistema de controle de versão Git",
      C: "Uma interface gráfica para gerenciar projetos de software",
      D: "Um banco de dados relacional"
    },
    "Resposta": "B",
    "Motivo": "Um 'git repository' é um repositório de código fonte versionado pelo sistema de controle de versão Git, permitindo o acompanhamento das alterações ao longo do tempo."
  },
  {
    "Pergunta": "O que é a Lei de Amdahl em computação?",
    "Opcoes": {
      A: "Uma teoria sobre a expansão do universo",
      B: "Uma previsão de que a capacidade dos processadores aumenta exponencialmente",
      C: "Uma lei que estabelece padrões de segurança em redes",
      D: "Uma fórmula que descreve a melhoria de desempenho ao otimizar apenas parte de um sistema"
    },
    "Resposta": "D",
    "Motivo": "A Lei de Amdahl descreve a melhoria de desempenho ao otimizar apenas parte de um sistema, indicando que o ganho total é limitado pela fração não otimizada."
  },
  {
    "Pergunta": "O que é 'serverless computing'?",
    "Opcoes": {
      A: "Um modelo de cobrança baseado no tempo de uso de servidores",
      B: "Um modelo onde os servidores não são gerenciados diretamente pelo desenvolvedor",
      C: "Um padrão de design para sistemas distribuídos",
      D: "Uma técnica para otimizar consultas em banco de dados"
    },
    "Resposta": "B",
    "Motivo": "'Serverless computing' é um modelo em que os servidores são gerenciados automaticamente pela plataforma, permitindo que os desenvolvedores se concentrem apenas no código e na lógica de negócios."
  },
  {
    "Pergunta": "O que é a linguagem de programação Erlang conhecida por enfatizar?",
    "Opcoes": {
      A: "Facilidade de aprendizado",
      B: "Desempenho extremo em jogos",
      C: "Concorrência e tolerância a falhas",
      D: "Integração com sistemas mainframe"
    },
    "Resposta": "C",
    "Motivo": "Erlang é conhecida por enfatizar concorrência e tolerância a falhas, sendo projetada para sistemas de telecomunicações altamente disponíveis."
  },
  {
    "Pergunta": "O que é o método 'Cross-Origin Resource Sharing' (CORS) em desenvolvimento web?",
    "Opcoes": {
      A: "Um método de compressão de imagens para transferência eficiente",
      B: "Uma técnica para criptografar a comunicação entre cliente e servidor",
      C: "Uma política de segurança para restringir requisições HTTP entre diferentes domínios",
      D: "Uma abordagem para melhorar a velocidade de carregamento de páginas web"
    },
    "Resposta": "C",
    "Motivo": "O CORS é uma política de segurança que permite ou restringe as requisições HTTP entre diferentes domínios, protegendo contra ataques de solicitação de origem cruzada não autorizados."
  },{
    "Pergunta": "O que é um 'hash' em criptografia?",
    "Opcoes": {
      A: "Um algoritmo para compressão de dados",
      B: "Uma técnica de ofuscação de código-fonte",
      C: "Uma função matemática unidirecional para gerar códigos únicos",
      D: "Uma linguagem de programação segura"
    },
    "Resposta": "C",
    "Motivo": "Em criptografia, um 'hash' é uma função matemática unidirecional que gera uma sequência única de caracteres para representar dados, sendo usado para verificar a integridade e autenticidade dos mesmos."
  },
  {
    "Pergunta": "O que é o protocolo HTTPS em uma URL?",
    "Opcoes": {
      A: "Hypertext Transfer Protocol Secure",
      B: "Hypertext Transfer Protocol Standard",
      C: "Hypertext and Text Processing Service",
      D: "Hypertext and Encryption Service"
    },
    "Resposta": "A",
    "Motivo": "O HTTPS (Hypertext Transfer Protocol Secure) é a versão segura do HTTP, garantindo a transferência segura de dados entre o navegador e o servidor."
  },
  {
    "Pergunta": "O que é um 'container' na tecnologia de virtualização?",
    "Opcoes": {
      A: "Um dispositivo de armazenamento externo",
      B: "Uma unidade de processamento central em um servidor",
      C: "Uma instância isolada de um sistema operacional e aplicativos",
      D: "Uma interface gráfica para gerenciar recursos de rede"
    },
    "Resposta": "C",
    "Motivo": "Um 'container' na virtualização é uma instância isolada que inclui um sistema operacional e as dependências necessárias para executar aplicativos, proporcionando portabilidade e eficiência."
  },
  {
    "Pergunta": "Qual é a principal diferença entre linguagens de programação interpretadas e compiladas?",
    "Opcoes": {
      A: "Linguagens interpretadas são mais eficientes em termos de desempenho",
      B: "Linguagens compiladas são traduzidas para código de máquina antes da execução",
      C: "Linguagens interpretadas são traduzidas antes da execução, enquanto as compiladas são interpretadas durante a execução",
      D: "Não há diferença significativa entre ambas"
    },
    "Resposta": "B",
    "Motivo": "Linguagens compiladas são traduzidas para código de máquina antes da execução, resultando em um desempenho geralmente mais rápido do programa."
  },
  {
    "Pergunta": "O que é a arquitetura de microsserviços em desenvolvimento de software?",
    "Opcoes": {
      A: "Um padrão de design para interfaces de usuário",
      B: "Um método para compactação de código fonte",
      C: "Uma abordagem de desenvolvimento que divide um aplicativo em serviços independentes",
      D: "Uma técnica para otimização de consultas em banco de dados"
    },
    "Resposta": "C",
    "Motivo": "A arquitetura de microsserviços envolve o desenvolvimento de um aplicativo como uma coleção de serviços independentes, facilitando a escalabilidade "},
    
     {
    "Pergunta": "Qual é o conceito fundamental por trás do paradigma de programação funcional?",
    "Opcoes": {
      A: "Estruturas de controle de fluxo",
      B: "Imutabilidade e funções puras",
      C: "Programação orientada a objetos",
      D: "Manipulação direta de registros de memória"
    },
    "Resposta": "B",
    "Motivo": "Na programação funcional, a imutabilidade e o uso de funções puras são centrais, permitindo um estilo de codificação mais declarativo e evitando efeitos colaterais."
  },
  {
    "Pergunta": "Em redes de computadores, o que é um 'subnet'?",
    "Opcoes": {
      A: "Um endereço IP público exclusivo",
      B: "Uma porção de uma rede IP maior dividida em sub-redes menores",
      C: "Um protocolo de roteamento avançado",
      D: "Um tipo de firewall"
    },
    "Resposta": "B",
    "Motivo": "Uma 'subnet' é uma subdivisão de uma rede IP maior para melhorar a gestão de endereços e o desempenho da rede."
  },
  {
    "Pergunta": "Qual é a diferença entre Java e JavaScript?",
    "Opcoes": {
      A: "Java é apenas para backend, enquanto JavaScript é exclusivamente para frontend",
      B: "Java é compilado e orientado a objetos, enquanto JavaScript é interpretado e baseado em protótipos",
      C: "JavaScript é uma versão simplificada de Java",
      D: "Java é usado apenas para scripts de servidor, enquanto JavaScript é para scripts de cliente"
    },
    "Resposta": "B",
    "Motivo": "Java é compilado e fortemente tipado, enquanto JavaScript é interpretado e baseado em protótipos, sendo mais flexível."
  },
  {
    "Pergunta": "O que é uma injeção de SQL?",
    "Opcoes": {
      A: "Um método de otimização de consultas em bancos de dados",
      B: "Uma técnica para injetar código malicioso em instruções SQL",
      C: "Um processo de criação dinâmica de tabelas em um banco de dados",
      D: "Um padrão de design para a criação de interfaces gráficas em SQL"
    },
    "Resposta": "B",
    "Motivo": "Injeção de SQL é uma vulnerabilidade onde um atacante pode inserir comandos SQL maliciosos em entradas de dados, comprometendo a integridade do banco de dados."
  },
  {
    "Pergunta": "O que é o conceito de 'big-O' na análise de algoritmos?",
    "Opcoes": {
      A: "Uma linguagem de programação popular",
      B: "Uma notação para descrever o desempenho ou complexidade de um algoritmo",
      C: "Um padrão de codificação para algoritmos eficientes",
      D: "Uma técnica para compressão de dados em algoritmos"
    },
    "Resposta": "B",
    "Motivo": "O 'big-O' é uma notação que descreve a complexidade assintótica de um algoritmo, indicando como o desempenho do algoritmo se comporta em relação ao tamanho da entrada."
  },
  {
    "Pergunta": "O que significa a sigla CSS em termos de desenvolvimento web?",
    "Opcoes": {
      A: "Cascading Style Sheet",
      B: "Computer Style Sheet",
      C: "Creative Style Sheet",
      D: "Code Style Sheet"
    },
    "Resposta": "A",
    "Motivo": "CSS significa Cascading Style Sheet, sendo uma linguagem usada para estilizar a apresentação de documentos escritos em HTML."
  },
  {
    "Pergunta": "O que significa a sigla HTML em termos de desenvolvimento web?",
    "Opcoes": {
      A: "Hypertext Markup Language",
      B: "Hyperlink and Text Markup Language",
      C: "High-level Text Management Language",
      D: "Hypertext Management and Linking"
    },
    "Resposta": "A",
    "Motivo": "HTML significa Hypertext Markup Language, sendo a linguagem padrão para a criação e estruturação de páginas web."
  },
      
      
       {
    "Pergunta": "Explique o conceito de virtualização de servidores e como ela beneficia a eficiência e a flexibilidade em ambientes de data center.",
    "Opcoes": {
      A: "Virtualização de servidores refere-se à simulação de ambientes virtuais para jogos online.",
      B: "É uma técnica de compactação de dados em servidores para economizar espaço de armazenamento.",
      C: "Virtualização de servidores permite a criação de instâncias virtuais independentes em um único servidor físico, otimizando recursos, facilitando a escalabilidade e melhorando a utilização de hardware.",
      D: "Envolve a substituição de servidores físicos por servidores virtuais em nuvem, melhorando a confiabilidade da infraestrutura de TI."
    },
    "Resposta": "C",
    "Motivo": "A virtualização de servidores permite a criação de instâncias virtuais independentes em um único servidor físico, otimizando recursos, facilitando a escalabilidade e melhorando a utilização de hardware em ambientes de data center."
  },
  {
    "Pergunta": "Descreva a arquitetura de microsserviços e como ela se diferencia de abordagens monolíticas no desenvolvimento de software.",
    "Opcoes": {
      A: "Microsserviços são dispositivos de armazenamento em miniatura utilizados em computadores pessoais.",
      B: "Refere-se à compactação de código-fonte em pequenos módulos para facilitar a manutenção de software.",
      C: "Arquitetura de microsserviços é um modelo de desenvolvimento de software em que aplicações são construídas como conjuntos independentes de serviços, proporcionando flexibilidade, escalabilidade e facilitando atualizações contínuas.",
      D: "Envolve a utilização exclusiva de uma única aplicação monolítica para todas as funcionalidades, limitando a modularidade e a escalabilidade do sistema."
    },
    "Resposta": "C",
    "Motivo": "A arquitetura de microsserviços é um modelo de desenvolvimento de software em que aplicações são construídas como conjuntos independentes de serviços, proporcionando flexibilidade, escalabilidade e facilitando atualizações contínuas, em contraste com abordagens monolíticas."
  },
  {
    "Pergunta": "Qual o propósito da injeção SQL em segurança de banco de dados?",
    "Opcoes": {
      A: "Injeção SQL é uma técnica para compressão de dados em bancos de dados.",
      B: "Refere-se a um método de criptografia de senhas em sistemas.",
      C: "Injeção SQL é uma vulnerabilidade que permite a execução de comandos maliciosos em bancos de dados por meio da inserção de código SQL não sanitizado.",
      D: "É uma prática para melhorar a velocidade de consultas SQL em bancos de dados."
    },
    "Resposta": "C",
    "Motivo": "Injeção SQL é uma vulnerabilidade que permite a execução de comandos maliciosos em bancos de dados por meio da inserção de código SQL não sanitizado."
  },
  {
    "Pergunta": "O que é um ataque de força bruta em segurança da informação?",
    "Opcoes": {
      A: "Ataque de força bruta é um método para compactação de arquivos em servidores.",
      B: "Refere-se a uma técnica de criptografia para proteção de senhas.",
      C: "Ataque de força bruta é uma tentativa sistemática de quebrar uma senha ou descobrir uma chave por meio de tentativas repetitivas.",
      D: "É uma prática para melhorar a velocidade de acesso a redes de computadores."
    },
    "Resposta": "C",
    "Motivo": "Ataque de força bruta é uma tentativa sistemática de quebrar uma senha ou descobrir uma chave por meio de tentativas repetitivas."
  },
  {
    "Pergunta": "O que é um algoritmo de hash e qual é sua aplicação em segurança de senhas?",
    "Opcoes": {
      A: "Algoritmo de hash é um método para compressão de imagens em servidores.",
      B: "Refere-se a uma técnica de criptografia de mensagens.",
      C: "Algoritmo de hash é uma função que converte dados em uma sequência fixa de caracteres, sendo utilizado para armazenar senhas de forma segura.",
      D: "É uma prática para melhorar a velocidade de consultas em bancos de dados."
    },
    "Resposta": "C",
    "Motivo": "Algoritmo de hash é uma função que converte dados em uma sequência fixa de caracteres, sendo utilizado para armazenar senhas de forma segura."
  },
      ];
    const perguntasProgramacao =[
      
        {
    "Pergunta": "O que é um 'callback' em programação assíncrona?",
    "Opcoes": {
      A: "Um tipo de variável",
      B: "Uma função passada como argumento para outra função",
      C: "Uma estrutura de controle de fluxo",
      D: "Um operador lógico"
    },
    "Resposta": "B",
    "Motivo": "Um 'callback' em programação assíncrona é uma função que é passada como argumento para outra função, sendo chamada de volta após a conclusão de uma operação assíncrona."
  },
  {
    "Pergunta": "O que é o conceito de 'escopo' em programação?",
    "Opcoes": {
      A: "A quantidade de memória disponível para um programa",
      B: "O conjunto de regras sintáticas de uma linguagem de programação",
      C: "A área do código onde uma variável é visível",
      D: "A velocidade de execução de um programa"
    },
    "Resposta": "C",
    "Motivo": "O 'escopo' em programação se refere à área do código onde uma variável é visível e pode ser acessada, delimitando sua disponibilidade."
  },
  {
    "Pergunta": "O que é 'polimorfismo' em programação orientada a objetos?",
    "Opcoes": {
      A: "A capacidade de uma classe herdar de múltiplas classes",
      B: "A capacidade de uma função retornar vários valores",
      C: "A capacidade de uma variável armazenar diferentes tipos de dados",
      D: "A capacidade de uma classe ter múltiplos métodos com o mesmo nome"
    },
    "Resposta": "D",
    "Motivo": "O 'polimorfismo' em programação orientada a objetos refere-se à capacidade de uma classe ter múltiplos métodos com o mesmo nome, mas com comportamentos diferentes."
  },
  {
    "Pergunta": "O que é 'refatoração' em desenvolvimento de software?",
    "Opcoes": {
      A: "Um método para depurar código",
      B: "Uma técnica para otimizar o desempenho de um programa",
      C: "Um processo de reestruturação do código sem alterar seu comportamento externo",
      D: "Uma prática para adicionar novos recursos a um sistema existente"
    },
    "Resposta": "C",
    "Motivo": "'Refatoração' em desenvolvimento de software é o processo de reestruturar o código sem alterar seu comportamento externo, visando melhorar sua legibilidade, manutenibilidade e eficiência."
  },
  {
    "Pergunta": "O que é um 'ponteiro' em linguagens de programação como C e C++?",
    "Opcoes": {
      A: "Uma variável que armazena o endereço de outra variável",
      B: "Um operador lógico para comparação de valores",
      C: "Um tipo de dado para armazenar números decimais",
      D: "Um método para alocação dinâmica de memória"
    },
    "Resposta": "A",
    "Motivo": "Um 'ponteiro' em linguagens como C e C++ é uma variável que armazena o endereço de outra variável, permitindo manipular diretamente a memória."
  },
  {
    "Pergunta": "O que é o padrão de projeto 'Singleton'?",
    "Opcoes": {
      A: "Um padrão para projetar interfaces gráficas",
      B: "Um padrão que garante a existência de apenas uma instância de uma classe",
      C: "Um método para tratamento de exceções",
      D: "Um modelo para programação concorrente"
    },
    "Resposta": "B",
    "Motivo": "O padrão de projeto 'Singleton' garante a existência de apenas uma instância de uma classe, sendo útil quando é necessária uma única instância globalmente acessível."
  },
  {
    "Pergunta": "O que é 'debugging' em programação?",
    "Opcoes": {
      A: "Um método para otimização de código",
      B: "Uma prática para documentar o código-fonte",
      C: "Um processo de identificação e correção de erros em um programa",
      D: "Uma técnica para criptografar dados"
    },
    "Resposta": "C",
    "Motivo": "'Debugging' em programação é o processo de identificação e correção de erros em um programa, visando garantir seu correto funcionamento."
  },
  {
    "Pergunta": "O que é 'herança' em programação orientada a objetos?",
    "Opcoes": {
      A: "Um processo para criar cópias exatas de objetos existentes",
      B: "Um modelo para implementar interfaces gráficas",
      C: "A capacidade de uma classe adquirir propriedades e comportamentos de outra classe",
      D: "Um método para organizar variáveis em uma estrutura de dados"
    },
    "Resposta": "C",
    "Motivo": "'Herança' em programação orientada a objetos é a capacidade de uma classe adquirir propriedades e comportamentos de outra classe, facilitando a reutilização de código."
  },
  {
    "Pergunta": "O que é 'agile' em metodologias de desenvolvimento de software?",
    "Opcoes": {
      A: "Um modelo de programação para ambientes gráficos",
      B: "Uma técnica para otimização de consultas em banco de dados",
      C: "Uma abordagem iterativa e incremental para o desenvolvimento de software",
      D: "Um padrão de projeto para interfaces de usuário"
    },
    "Resposta": "C",
    "Motivo": "'Agile' em metodologias de desenvolvimento de software refere-se a uma abordagem iterativa e incremental, focada na entrega contínua de software funcional e na colaboração efetiva entre equipes."
  },
  {
    "Pergunta": "O que é um 'loop for' em linguagens de programação?",
    "Opcoes": {
      A: "Um método para tratamento de exceções",
      B: "Uma estrutura de controle de fluxo",
      C: "Uma função para ordenação de dados",
      D: "Um operador lógico para comparação de valores"
    },
    "Resposta": "B",
    "Motivo": "Um 'loop for' em linguagens de programação é uma estrutura de controle de fluxo utilizada para repetição "},
    {
    "Pergunta": "O que é um 'framework' em desenvolvimento web?",
    "Opcoes": {
      A: "Uma linguagem de programação",
      B: "Um conjunto de ferramentas e convenções que facilitam o desenvolvimento de software",
      C: "Um tipo de banco de dados",
      D: "Uma técnica de segurança cibernética"
    },
    "Resposta": "B",
    "Motivo": "Um 'framework' em desenvolvimento web é um conjunto de ferramentas e convenções que facilitam o desenvolvimento de aplicativos, proporcionando estrutura e funcionalidades predefinidas."
  },
  {
    "Pergunta": "O que é 'Git' em desenvolvimento de software?",
    "Opcoes": {
      A: "Um sistema de gerenciamento de banco de dados",
      B: "Uma linguagem de programação",
      C: "Um sistema de controle de versão distribuído",
      D: "Uma técnica de otimização de código"
    },
    "Resposta": "C",
    "Motivo": "'Git' é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software, permitindo o acompanhamento de alterações no código fonte ao longo do tempo."
  },
  {
    "Pergunta": "O que é 'API' em programação?",
    "Opcoes": {
      A: "Application Programming Interface",
      B: "Automated Program Integration",
      C: "Advanced Programming Interface",
      D: "Application Process Integration"
    },
    "Resposta": "A",
    "Motivo": "'API' significa Application Programming Interface, sendo um conjunto de regras que permite que diferentes softwares se comuniquem entre si, facilitando a integração e o desenvolvimento de aplicativos."
  },
  {
    "Pergunta": "O que é 'SQL' em bancos de dados?",
    "Opcoes": {
      A: "Structured Query Language",
      B: "Simple Query Language",
      C: "System Query Language",
      D: "Sequential Query Language"
    },
    "Resposta": "A",
    "Motivo": "'SQL' significa Structured Query Language, sendo uma linguagem de programação utilizada para gerenciar e manipular dados em bancos de dados relacionais."
  },
      {
    "Pergunta": "O que é 'HTML' em desenvolvimento web?",
    "Opcoes": {
      A: "Hypertext Markup Language",
      B: "Hyperlink and Text Management Language",
      C: "High-Level Text Modeling Language",
      D: "Home and Textual Markup Language"
    },
    "Resposta": "A",
    "Motivo": "'HTML' significa Hypertext Markup Language, sendo uma linguagem de marcação utilizada para estruturar o conteúdo de páginas web."
  },
  {
    "Pergunta": "O que é 'CSS' em desenvolvimento web?",
    "Opcoes": {
      A: "Cascading Style Sheet",
      B: "Computer Style Sheet",
      C: "Creative Style Sheet",
      D: "Code Style Sheet"
    },
    "Resposta": "A",
    "Motivo": "'CSS' significa Cascading Style Sheet, sendo uma linguagem usada para estilizar a apresentação de documentos escritos em HTML."
  },
  
  {
    "Pergunta": "O que o trecho de código em JavaScript a seguir faz?\n\njavascript\nconst array = [1, 2, 3, 4, 5];\nconst soma = array.reduce((total, num) => total + num, 0);\nconsole.log(soma);\n```",
    "Opcoes": {
      A: "Calcula a média dos elementos no array",
      B: "Concatena todos os elementos do array em uma string",
      C: "Remove elementos duplicados do array",
      D: "Calcula a soma dos elementos no array"
    },
    "Resposta": "D",
    "Motivo": "O trecho utiliza o método `reduce` para calcular a soma dos elementos no array, resultando na saída 15."
  },
  {
    "Pergunta": "O que a seguinte função em Python faz?\n\n```python\ndef square_numbers(numbers):\n  return [num ** 2 for num in numbers]\n\nresult = square_numbers([1, 2, 3, 4, 5])\nprint(result)\n```",
    "Opcoes": {
      A: "Calcula a raiz quadrada de cada número na lista",
      B: "Verifica se todos os números na lista são quadrados perfeitos",
      C: "Remove os números pares da lista",
      D: "Eleva cada número ao quadrado na lista"
    },
    "Resposta": "D",
    "Motivo": "A função utiliza uma lista de compreensão para elevar cada número ao quadrado na lista original, resultando em [1, 4, 9, 16, 25]."
  },
  {
    "Pergunta": "O que o seguinte trecho de código em Java realiza?\n\n```java\npublic static int factorial(int n) {\n  if (n == 0 || n == 1) {\n    return 1;\n  } else {\n    return n * factorial(n - 1);\n  }\n}\n```",
    "Opcoes": {
      A: "Calcula o módulo de um número",
      B: "Calcula a média de uma lista de números",
      C: "Calcula o fatorial de um número",
      D: "Ordena uma lista de números"
    },
    "Resposta": "C",
    "Motivo": "O código implementa uma função recursiva para calcular o fatorial de um número inteiro positivo."
  },
  {
    "Pergunta": "O que o trecho de código em C a seguir faz?\n\n```c\n#include <stdio.h>\n\nint main() {\n  int n = 5;\n  while (n >= 0) {\n    printf(\"%d \", n);\n    n--;\n  }\n  return 0;\n}\n```",
    "Opcoes": {
      A: "Imprime os números de 0 a 5",
      B: "Calcula a média de uma lista de números",
      C: "Inverte a ordem dos elementos em uma lista",
      D: "Multiplica cada número por 2"
    },
    "Resposta": "A",
    "Motivo": "O código utiliza um loop 'while' para imprimir os números de 5 a 0, resultando na saída '5 4 3 2 1 0'."
  },
  {
    "Pergunta": "O que faz o trecho de código em Python a seguir?\n\n```python\nnumbers = [1, 2, 3, 4, 5]\ndoubled_numbers = list(map(lambda x: x * 2, numbers))\nprint(doubled_numbers)\n```",
    "Opcoes": {
      A: "Calcula a soma dos números no array",
      B: "Filtra os números pares no array",
      C: "Duplica cada número no array",
      D: "Remove os números ímpares no array"
    },
    "Resposta": "C",
    "Motivo": "O trecho utiliza a função `map` com uma função lambda para duplicar cada número no array, resultando em [2, 4, 6, 8, 10]."
  },
  {
    "Pergunta": "O que o trecho de código em C++ a seguir realiza?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) {\n    cout << i * i << ' ';\n  }\n  return 0;\n}\n```",
    "Opcoes": {
      A: "Calcula a média dos quadrados de números",
      B: "Imprime os quadrados dos números de 0 a 4",
      C: "Inverte a ordem dos quadrados dos números",
      D: "Multiplica cada número por 2"
    },
    "Resposta": "B",
    "Motivo": "O código utiliza um loop 'for' para imprimir os quadrados dos números de 0 a 4, resultando na saída '0 1 4 9 16'."
  },
  {
    "Pergunta": "O que o trecho de código em JavaScript faz?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst filteredNumbers = numbers.filter(num => num % 2 !== 0);\nconsole.log(filteredNumbers);\n```",
    "Opcoes": {
      A: "Remove os números pares do array",
      B: "Calcula a média dos números no array",
      C: "Ordena os números em ordem crescente",
      D: "Duplica cada número ímpar no array"
    },
    "Resposta": "A",
    "Motivo": "O trecho utiliza o método `filter` para criar um novo array contendo apenas os números ímpares do array original."
  },
  
  {
    "Pergunta": "O que o trecho de código em JavaScript a seguir faz?\n\n```javascript\nconst array = [1, 2, 3, 4, 5];\nconst soma = array.reduce((total, num) => total + num, 0);\nconsole.log(soma);\n```",
    "Opcoes": {
      A: "Calcula a média dos elementos no array",
      B: "Concatena todos os elementos do array em uma string",
      C: "Remove elementos duplicados do array",
      D: "Calcula a soma dos elementos no array"
    },
    "Resposta": "D",
    "Motivo": "O trecho utiliza o método `reduce` para calcular a soma dos elementos no array, resultando na saída 15."
  },
  {
    "Pergunta": "O que a seguinte função em Python faz?\n\n```python\ndef square_numbers(numbers):\n  return [num ** 2 for num in numbers]\n\nresult = square_numbers([1, 2, 3, 4, 5])\nprint(result)\n```",
    "Opcoes": {
      A: "Calcula a raiz quadrada de cada número na lista",
      B: "Verifica se todos os números na lista são quadrados perfeitos",
      C: "Remove os números pares da lista",
      D: "Eleva cada número ao quadrado na lista"
    },
    "Resposta": "D",
    "Motivo": "A função utiliza uma lista de compreensão para elevar cada número ao quadrado na lista original, resultando em [1, 4, 9, 16, 25]."
  },
  {
    "Pergunta": "O que o seguinte trecho de código em Java realiza?\n\n```java\npublic static int factorial(int n) {\n  if (n == 0 || n == 1) {\n    return 1;\n  } else {\n    return n * factorial(n - 1);\n  }\n}\n```",
    "Opcoes": {
      A: "Calcula o módulo de um número",
      B: "Calcula a média de uma lista de números",
      C: "Calcula o fatorial de um número",
      D: "Ordena uma lista de números"
    },
    "Resposta": "C",
    "Motivo": "O código implementa uma função recursiva para calcular o fatorial de um número inteiro positivo."
  },
  {
    "Pergunta": "O que o trecho de código em C a seguir faz?\n\n```c\n#include <stdio.h>\n\nint main() {\n  int n = 5;\n  while (n >= 0) {\n    printf(\"%d \", n);\n    n--;\n  }\n  return 0;\n}\n```",
    "Opcoes": {
      A: "Imprime os números de 0 a 5",
      B: "Calcula a média de uma lista de números",
      C: "Inverte a ordem dos elementos em uma lista",
      D: "Multiplica cada número por 2"
    },
    "Resposta": "A",
    "Motivo": "O código utiliza um loop 'while' para imprimir os números de 5 a 0, resultando na saída '5 4 3 2 1 0'."
  },
  {
    "Pergunta": "O que faz o trecho de código em Python a seguir?\n\n```python\nnumbers = [1, 2, 3, 4, 5]\ndoubled_numbers = list(map(lambda x: x * 2, numbers))\nprint(doubled_numbers)\n```",
    "Opcoes": {
      A: "Calcula a soma dos números no array",
      B: "Filtra os números pares no array",
      C: "Duplica cada número no array",
      D: "Remove os números ímpares no array"
    },
    "Resposta": "C",
    "Motivo": "O trecho utiliza a função `map` com uma função lambda para duplicar cada número no array, resultando em [2, 4, 6, 8, 10]."
  },
  {
    "Pergunta": "O que o trecho de código em C++ a seguir realiza?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) {\n    cout << i * i << ' ';\n  }\n  return 0;\n}\n```",
    "Opcoes": {
      A: "Calcula a média dos quadrados de números",
      B: "Imprime os quadrados dos números de 0 a 4",
      C: "Inverte a ordem dos quadrados dos números",
      D: "Multiplica cada número por 2"
    },
    "Resposta": "B",
    "Motivo": "O código utiliza um loop 'for' para imprimir os quadrados dos números de 0 a 4, resultando na saída '0 1 4 9 16'."
  },
  {
    "Pergunta": "O que o trecho de código em JavaScript faz?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst filteredNumbers = numbers.filter(num => num % 2 !== 0);\nconsole.log(filteredNumbers);\n```",
    "Opcoes": {
      A: "Remove os números pares do array",
      B: "Calcula a média dos números no array",
      C: "Ordena os números em ordem crescente",
      D: "Duplica cada número ímpar no array"
    },
    "Resposta": "A",
    "Motivo": "O trecho utiliza o método `filter` para criar um novo array contendo apenas os números ímpares do array original."
  },
  {
    "Pergunta": "O que realiza a seguinte função em Python?\n\n```python\ndef count_vowels(word):\n  return sum(1 for char in word if char.lower() in 'aeiou')\n\nresult = count_vowels('Hello World')\nprint(result)\n```",
    "Opcoes": {
      A: "Conta o número total de caracteres na palavra",
      B: "Calcula a média dos caracteres na palavra",
      C: "Remove as vogais da palavra",
      D: "Conta o número de vogais na palavra"
    },
    "Resposta": "D",
    "Motivo": "A função utiliza uma expressão geradora para contar o número de vogais na palavra 'Hello World', resultando em 3."
  },
  
  {
    "Pergunta": "Qual é a saída esperada para o seguinte trecho de código em JavaScript?\n\n```javascript\nconsole.log(3 + '2');\n```",
    "Opcoes": {
      A: "'32'",
      B: "5",
      C: "NaN",
      D: "Erro de compilação"
    },
    "Resposta": "A",
    "Motivo": "A operação de adição entre um número e uma string em JavaScript resulta na concatenação da string, então a saída seria '32'."
  },
  {
    "Pergunta": "O que faz o código em Python a seguir?\n\n```python\n  def fibonacci(n):\n    if n <= 1:\n      return n\n    else:\n      return fibonacci(n-1) + fibonacci(n-2)\n\n  print(fibonacci(5))\n```",
    "Opcoes": {
      A: "Calcula o fatorial de um número",
      B: "Ordena uma lista de números",
      C: "Gera a sequência de Fibonacci até o quinto termo",
      D: "Verifica se um número é primo"
    },
    "Resposta": "C",
    "Motivo": "O código implementa a função recursiva de Fibonacci e imprime o quinto termo da sequência, que é 5."
  },
  {
    "Pergunta": "O que representa o seguinte trecho de código em Java?\n\n```java\npublic class Car {\n  private String model;\n\n  public Car(String model) {\n    this.model = model;\n  }\n\n  public String getModel() {\n    return model;\n  }\n}\n```",
    "Opcoes": {
      A: "Um programa que simula a condução de um carro",
      B: "Uma classe que representa um carro com um modelo",
      C: "Um código para ordenar carros por modelo",
      D: "Um script para imprimir modelos de carros"
    },
    "Resposta": "B",
    "Motivo": "Este trecho de código em Java define uma classe 'Car' com um atributo 'model' e métodos para obter e configurar esse modelo."
  },
  {
    "Pergunta": "O que a seguinte função em JavaScript realiza?\n\n```javascript\nfunction reverseString(str) {\n  return str.split('').reverse().join('');\n}\n\nconsole.log(reverseString('hello'));\n```",
    "Opcoes": {
      A: "Conta o número de caracteres em uma string",
      B: "Converte uma string para minúsculas",
      C: "Inverte os caracteres de uma string",
      D: "Remove espaços em branco de uma string"
    },
    "Resposta": "C",
    "Motivo": "A função 'reverseString' em JavaScript inverte os caracteres de uma string, então a saída seria 'olleh' para o exemplo dado."
  },
  {
    "Pergunta": "O que o código em C++ a seguir faz?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int numbers[] = {1, 2, 3, 4, 5};\n\n  for (int i = 0; i < 5; i++) {\n    cout << numbers[i] << ' ';\n  }\n\n  return 0;\n}\n```",
    "Opcoes": {
      A: "Calcula a média de uma lista de números",
      B: "Imprime os números de 1 a 5",
      C: "Inverte a ordem dos elementos em uma lista",
      D: "Multiplica cada número por 2"
    },
    "Resposta": "B",
    "Motivo": "Este código em C++ declara um array de números e utiliza um loop 'for' para imprimir cada elemento, resultando em '1 2 3 4 5'."
  },
  {
    "Pergunta": "O que realiza a seguinte função em Python?\n\n```python\ndef filter_even(numbers):\n  return list(filter(lambda x: x % 2 == 0, numbers))\n\nresult = filter_even([1, 2, 3, 4, 5])\nprint(result)\n```",
    "Opcoes": {
      A: "Calcula a soma dos números pares em uma lista",
      B: "Ordena os números em ordem crescente",
      C: "Filtra os números pares de uma lista",
      D: "Inverte a ordem dos elementos em uma lista"
    },
    "Resposta": "C",
    "Motivo": "O trecho de código em Python utiliza a função `filter` para criar uma lista contendo apenas os números pares da lista original."
  },
  {
    "Pergunta": "Considere a seguinte classe em Java. O que representa essa classe e como ela poderia ser utilizada?\n\n```java\npublic class DatabaseConnector {\n  private Connection connection;\n\n  public DatabaseConnector(String url, String username, String password) {\n    // Implementação do construtor\n  }\n\n  public void connect() {\n    // Implementação para conectar ao banco de dados\n  }\n\n  public void disconnect() {\n    // Implementação para desconectar do banco de dados\n  }\n\n  public ResultSet executeQuery(String query) {\n    // Implementação para executar uma consulta SQL\n    return null;\n  }\n}\n```",
    "Opcoes": {
      A: "Uma classe para realizar operações aritméticas em um banco de dados",
      B: "Uma classe para manipular imagens em um banco de dados",
      C: "Uma classe para conectar e executar consultas em um banco de dados",
      D: "Uma classe para gerenciar a interface gráfica de um aplicativo"
    },
    "Resposta": "C",
    "Motivo": "Essa classe representa um conector de banco de dados em Java, permitindo a conexão, desconexão e execução de consultas SQL."
  },
  {
    "Pergunta": "Considere a seguinte função em Python que utiliza o módulo `requests` para fazer uma requisição HTTP. O que essa função faz?\n\n```python\nimport requests\n\ndef fetch_data(url):\n    response = requests.get(url)\n    if response.status_code == 200:\n        return response.json()\n    else:\n        return None\n```\n",
    "Opcoes": {
      A: "Calcula a média de uma lista de números",
      B: "Faz uma requisição HTTP e retorna os dados em JSON se a resposta for bem-sucedida",
      C: "Ordena uma lista de strings em ordem alfabética",
      D: "Converte uma string para minúsculas"
    },
    "Resposta": "B",
    "Motivo": "A função `fetch_data` utiliza o módulo `requests` para fazer uma requisição HTTP e retorna os dados em formato JSON se a resposta for bem-sucedida."
  },
  {
    "Pergunta": "Dado o trecho de código em JavaScript abaixo, o que ele faz?\n\n```javascript\nasync function fetchData(url) {\n  const response = await fetch(url);\n  const data = await response.json();\n  return data;\n}\n```",
    "Opcoes": {
      A: "Faz uma requisição HTTP e retorna os dados em formato JSON de forma assíncrona",
      B: "Calcula a média de uma lista de números",
      C: "Ordena uma lista de strings em ordem alfabética de forma assíncrona",
      D: "Converte uma string para minúsculas de forma assíncrona"
    },
    "Resposta": "A",
    "Motivo": "A função `fetchData` utiliza o conceito de async/await para fazer uma requisição HTTP de forma assíncrona e retorna os dados em formato JSON."
  },
  {
    "Pergunta": "Considere o seguinte trecho de código em Python que utiliza a biblioteca `numpy`. O que esse código faz?\n\n```python\nimport numpy as np\n\narray = np.array([1, 2, 3, 4, 5])\nmean = np.mean(array)\nresult = array - mean\n```",
    "Opcoes": {
      A: "Calcula a média de uma lista de números",
      B: "Remove os elementos duplicados de uma lista",
      C: "Calcula a diferença entre cada elemento da lista e a média",
      D: "Ordena uma lista de números"
    },
    "Resposta": "C",
    "Motivo": "O código utiliza a biblioteca `numpy` para calcular a média do array e, em seguida, calcula a diferença entre cada elemento do array e a média."
  },
  {
    "Pergunta": "Dada a classe em C# abaixo, o que ela representa e como poderia ser utilizada?\n\n```csharp\npublic class Logger\n{\n    private static Logger instance;\n    private List<string> logMessages;\n\n    private Logger()\n    {\n        logMessages = new List<string>();\n    }\n\n    public static Logger Instance\n    {\n        get\n        {\n            if (instance == null)\n            {\n                instance = new Logger();\n            }\n            return instance;\n        }\n    }\n\n    public void LogMessage(string message)\n    {\n        logMessages.Add(message);\n    }\n\n    public List<string> GetLogMessages()\n    {\n        return logMessages;\n    }\n}\n```",
    "Opcoes": {
      A: "Uma classe para manipular imagens em um banco de dados",
      B: "Uma classe para representar um registro de log em uma aplicação",
      C: "Uma classe para realizar operações aritméticas em um banco de dados",
      D: "Uma classe para gerenciar a interface gráfica de um aplicativo"
    },
    "Resposta": "B",
    "Motivo": "Essa classe em C# representa um padrão de design Singleton para um logger, permitindo o registro de mensagens de log em uma aplicação."
  },
  {
    "Pergunta": "O que o trecho de código em JavaScript a seguir faz?\n\n```javascript\nconst array = [1, 2, 3, 4, 5];\nconst soma = array.reduce((total, num) => total + num, 0);\nconsole.log(soma);\n```",
    "Opcoes": {
      A: "Calcula a média dos elementos no array",
      B: "Concatena todos os elementos do array em uma string",
      C: "Remove elementos duplicados do array",
      D: "Calcula a soma dos elementos no array"
    },
    "Resposta": "D",
    "Motivo": "O trecho utiliza o método `reduce` para calcular a soma dos elementos no array, resultando na saída 15."
  },
  {
    "Pergunta": "O que a seguinte função em Python faz?\n\n```python\ndef square_numbers(numbers):\n  return [num ** 2 for num in numbers]\n\nresult = square_numbers([1, 2, 3, 4, 5])\nprint(result)\n```",
    "Opcoes": {
      A: "Calcula a raiz quadrada de cada número na lista",
      B: "Verifica se todos os números na lista são quadrados perfeitos",
      C: "Remove os números pares da lista",
      D: "Eleva cada número ao quadrado na lista"
    },
    "Resposta": "D",
    "Motivo": "A função utiliza uma lista de compreensão para elevar cada número ao quadrado na lista original, resultando em [1, 4, 9, 16, 25]."
  },
  {
    "Pergunta": "O que o seguinte trecho de código em Java realiza?\n\n```java\npublic static int factorial(int n) {\n  if (n == 0 || n == 1) {\n    return 1;\n  } else {\n    return n * factorial(n - 1);\n  }\n}\n```",
    "Opcoes": {
      A: "Calcula o módulo de um número",
      B: "Calcula a média de uma lista de números",
      C: "Calcula o fatorial de um número",
      D: "Ordena uma lista de números"
    },
    "Resposta": "C",
    "Motivo": "O código implementa uma função recursiva para calcular o fatorial de um número inteiro positivo."
  },
  {
    "Pergunta": "O que o trecho de código em C a seguir faz?\n\n```c\n#include <stdio.h>\n\nint main() {\n  int n = 5;\n  while (n >= 0) {\n    printf(\"%d \", n);\n    n--;\n  }\n  return 0;\n}\n```",
    "Opcoes": {
      A: "Imprime os números de 0 a 5",
      B: "Calcula a média de uma lista de números",
      C: "Inverte a ordem dos elementos em uma lista",
      D: "Multiplica cada número por 2"
    },
    "Resposta": "A",
    "Motivo": "O código utiliza um loop 'while' para imprimir os números de 5 a 0, resultando na saída '5 4 3 2 1 0'."
  },
  {
    "Pergunta": "O que faz o trecho de código em Python a seguir?\n\n```python\nnumbers = [1, 2, 3, 4, 5]\ndoubled_numbers = list(map(lambda x: x * 2, numbers))\nprint(doubled_numbers)\n```",
    "Opcoes": {
      A: "Calcula a soma dos números no array",
      B: "Filtra os números pares no array",
      C: "Duplica cada número no array",
      D: "Remove os números ímpares no array"
    },
    "Resposta": "C",
    "Motivo": "O trecho utiliza a função `map` com uma função lambda para duplicar cada número no array, resultando em [2, 4, 6, 8, 10]."
  },
  {
    "Pergunta": "O que o trecho de código em C++ a seguir realiza?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) {\n    cout << i * i << ' ';\n  }\n  return 0;\n}\n```",
    "Opcoes": {
      A: "Calcula a média dos quadrados de números",
      B: "Imprime os quadrados dos números de 0 a 4",
      C: "Inverte a ordem dos quadrados dos números",
      D: "Multiplica cada número por 2"
    },
    "Resposta": "B",
    "Motivo": "O código utiliza um loop 'for' para imprimir os quadrados dos números de 0 a 4, resultando na saída '0 1 4 9 16'."
  },
  {
    "Pergunta": "O que o trecho de código em JavaScript faz?\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst filteredNumbers = numbers.filter(num => num % 2 !== 0);\nconsole.log(filteredNumbers);\n```",
    "Opcoes": {
      A: "Remove os números pares do array",
      B: "Calcula a média dos números no array",
      C: "Ordena os números em ordem crescente",
      D: "Duplica cada número ímpar no array"
    },
    "Resposta": "A",
    "Motivo": "O trecho utiliza o método `filter` para criar um novo array contendo apenas os números ímpares do array original."
  },
  
    {
    "Pergunta": `O que o seguinte componente funcional em React faz?\n\n
  import React, { useState } from 'react';
const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <p>This content is visible.</p>}
    </div>
  );
};
`,
    "Opcoes": {
      A: "Renderiza uma lista de elementos filtrados",
      B: "Exibe um botão que alterna a visibilidade de um conteúdo",
      C: "Define um formulário de entrada de dados",
      D: "Cria uma tabela de dados"
    },
    "Resposta": "B",
    "Motivo": "O componente ToggleComponent exibe um botão que alterna a visibilidade de um conteúdo condicionalmente, dependendo do estado do isVisible."
  },
  {
    "Pergunta": `Dado o seguinte componente funcional em React, o que ele faz?\n\n
import React, { useState, useEffect } from 'react';

cnst DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulação de uma requisição assíncrona
    setTimeout(() => {
      setData("Dados recuperados com sucesso!");
    }, 2000);
  }, []);

  return (
    <div>
      {data ? <p>{data}</p> : <p>Carregando dados...</p>}
    </div>
  );
};
`,
    "Opcoes": {
      A: "Renderiza uma galeria de imagens",
      B: "Exibe uma mensagem de confirmação de formulário",
      C: "Realiza uma requisição assíncrona e exibe os dados recuperados",
      D: "Define um cronômetro interativo"
    },
    "Resposta": "C",
    "Motivo": "O componente `DataFetchingComponent` realiza uma simulação de requisição assíncrona e exibe os dados recuperados ou uma mensagem de carregamento."
  },
  {
    "Pergunta": `O que o seguinte componente funcional em React faz?\n\n
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <p>This component is themed!</p>
    </div>
  );
};
`,
    "Opcoes": {
      A: "Renderiza uma lista de elementos filtrados",
      B: "Exibe uma mensagem de erro em caso de falha na requisição",
      C: "Renderiza um componente com base no contexto do tema",
      D: "Cria um formulário de entrada de dados"
    },
    "Resposta": "C",
    "Motivo": "O componente ThemedComponent renderiza um componente com base no contexto do tema, utilizando o hook useContext para acessar as informações do tema."
  },  {
    "Pergunta": `Considere o seguinte componente funcional em React. O que esse componente faz?\n\n
import React from 'react';

const Greeting = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

export default Greeting;
`,
    "Opcoes": {
      A: "Renderiza um botão interativo",
      B: "Exibe uma mensagem de saudação com o nome fornecido",
      C: "Cria uma lista ordenada de elementos",
      D: "Define um formulário de entrada de dados"
    },
    "Resposta": "B",
    "Motivo": "O componente  Greeting renderiza uma mensagem de saudação com o nome fornecido como propriedade."
  },
  {
    "Pergunta": `Dado o seguinte componente em React, qual é a principal característica que o torna um componente funcional?\n\n
import React from 'react';

const Counter = ({ count }) => {
  return <p>Count: {count}</p>;
};
`,
    "Opcoes": {
      A: "Utiliza um estado local",
      B: "Aceita propriedades (props) como parâmetros",
      C: "Define métodos de ciclo de vida",
      D: "Renderiza uma lista de elementos"
    },
    "Resposta": "B",
    "Motivo": "A principal característica que torna o componente Counter funcional é que ele aceita propriedades (props) como parâmetros."
  },
  {
    "Pergunta": `O que o seguinte componente funcional em React faz?\n\n
import React, { useState } from 'react';

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);

  const handleButtonClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <p>Clicks: {clicks}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
};
`,
    "Opcoes": {
      A: "Renderiza uma tabela de dados",
      B: "Exibe a contagem de cliques e permite incrementá-la",
      C: "Define um formulário de entrada de dados",
      D: "Cria um menu de navegação"
    },
    "Resposta": "B",
    "Motivo": "O componente ClickCounter renderiza a contagem de cliques e permite incrementá-la quando o botão é clicado, utilizando o estado local com useState."
  },
  {
    "Pergunta": `O que o seguinte componente funcional em React faz?\n\n
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return <p>Elapsed Time: {seconds} seconds</p>;
};`,
    "Opcoes": {
      A: "Renderiza um calendário interativo",
      B: "Exibe um temporizador que incrementa a cada segundo",
      C: "Define uma barra de progresso animada",
      D: "Cria uma galeria de imagens"
    },
    "Resposta": "B",
    "Motivo": "O componente Timer exibe um temporizador que incrementa a cada segundo, utilizando o hook useEffect para gerenciar o ciclo de vida."
  },
  {
    "Pergunta": `No contexto do PHP, o que o seguinte trecho de código faz?\n\n
<?php
  $numbers = [1, 2, 3, 4, 5];
  $squaredNumbers = array_map(function($num) {
    return $num ** 2;
  }, $numbers);
  print_r($squaredNumbers);
`,
    "Opcoes": {
      A: "Calcula a média dos números no array",
      B: "Remove os elementos duplicados do array",
      C: "Calcula o quadrado de cada número no array",
      D: "Ordena os números em ordem crescente"
    },
    "Resposta": "C",
    "Motivo": "O trecho de código utiliza a função array_map para calcular o quadrado de cada número no array, resultando em [1, 4, 9, 16, 25]."
  },
  {
    "Pergunta": `No contexto do Laravel, o que o seguinte trecho de código em um controlador faz?\n\n
public function show($id)
{
    $post = Post::find($id);
    return view('posts.show', ['post' => $post]);
}
`,
    "Opcoes": {
      A: "Exibe uma lista de posts",
      B: "Atualiza um post no banco de dados",
      C: "Deleta um post no banco de dados",
      D: "Mostra os detalhes de um post específico"
    },
    "Resposta": "D",
    "Motivo": "O método `show` em um controlador do Laravel busca um post específico no banco de dados com base no ID e exibe os detalhes desse post."
  },
  {
    "Pergunta": `No contexto do PHP e Laravel, o que o seguinte trecho de código faz?\n\n
<?php
  $name = "John";
  $greeting = "Hello, $name!";
  echo $greeting;
`,
    "Opcoes": {
      A: "Cria um array associativo",
      B: "Manipula uma string",
      C: "Declara uma classe",
      D: "Realiza uma consulta SQL"
    },
    "Resposta": "B",
    "Motivo": "O trecho de código manipula uma string, utilizando a interpolação de variáveis para criar a saudação 'Hello, John!'."
  },
  {
    "Pergunta": `No contexto do Laravel, o que o seguinte trecho de código em uma rota faz?\n\n
Route::get('/users', 'UserController@index');
`,
    "Opcoes": {
      A: "Define uma rota para exibir a lista de usuários",
      B: "Atualiza um usuário no banco de dados",
      C: "Deleta um usuário no banco de dados",
      D: "Mostra os detalhes de um usuário específico"
    },
    "Resposta": "A",
    "Motivo": "O trecho de código em uma rota do Laravel define que a URL '/users' será associada ao método 'index' do controlador 'UserController', que geralmente exibe a lista de usuários."
  },
  
      
  {
    "Pergunta": `No contexto do Laravel, o que o seguinte trecho de código em um controlador faz?\n\n
public function store(Request $request)
{
    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
    ]);

    $post = Post::create($validatedData);

    return redirect('/posts/' . $post->id);
}
`,
    "Opcoes": {
      A: "Exibe uma lista de posts",
      B: "Atualiza um post no banco de dados",
      C: "Cria um novo post no banco de dados",
      D: "Mostra os detalhes de um post específico"
    },
    "Resposta": "C",
    "Motivo": "O método `store` em um controlador do Laravel valida os dados recebidos do formulário, cria um novo post no banco de dados e redireciona para a página de detalhes desse post."
  },
  {
    "Pergunta": `No contexto do PHP e Laravel, o que o seguinte trecho de código faz?\n\n
<?php
  $numbers = [2, 4, 6, 8, 10];
  $filteredNumbers = array_filter($numbers, function($num) {
    return $num > 5;
  });
  print_r($filteredNumbers);
`,
    "Opcoes": {
      A: "Calcula a média dos números no array",
      B: "Remove os elementos duplicados do array",
      C: "Filtra os números maiores que 5 no array",
      D: "Ordena os números em ordem crescente"
    },
    "Resposta": "C",
    "Motivo": "O trecho de código utiliza a função `array_filter` para filtrar os números maiores que 5 no array, resultando em [6, 8, 10]."
  },
  {
    "Pergunta": `No contexto do Laravel, o que o seguinte trecho de código em uma rota faz?\n\n
Route::get('/posts', 'PostController@index');
`,
    "Opcoes": {
      A: "Define uma rota para exibir a lista de posts",
      B: "Atualiza um post no banco de dados",
      C: "Deleta um post no banco de dados",
      D: "Mostra os detalhes de um post específico"
    },
    "Resposta": "A",
    "Motivo": "O trecho de código em uma rota do Laravel define que a URL '/posts' será associada ao método 'index' do controlador 'PostController', que geralmente exibe a lista de posts."
  },
  
  {
    "Pergunta": `No contexto do Java, o que o seguinte trecho de código faz?\n\n
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class PrimeNumbers {
    public static void main(String[] args) {
        int upperLimit = 50;

        String primeNumbers = IntStream.rangeClosed(2, upperLimit)
            .filter(PrimeNumbers::isPrime)
            .mapToObj(Integer::toString)
            .collect(Collectors.joining(", "));

        System.out.println("Prime Numbers up to " + upperLimit + ": " + primeNumbers);
    }

    private static boolean isPrime(int number) {
        return IntStream.rangeClosed(2, (int) Math.sqrt(number))
            .noneMatch(i -> number % i == 0);
    }
}
`,
    "Opcoes": {
      A: "Calcula a média de uma lista de números",
      B: "Faz uma requisição HTTP e retorna os dados em formato JSON",
      C: "Identifica e lista os números primos até um limite superior",
      D: "Ordena uma lista de strings em ordem alfabética"
    },
    "Resposta": "C",
    "Motivo": "O trecho de código em Java identifica e lista os números primos até um limite superior, utilizando a função isPrime para verificar se um número é primo."
  },
  {
    "Pergunta": `No contexto do Java, o que o seguinte trecho de código faz?\n\n
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public static List<Person> sortByName(List<Person> people) {
        return people.stream()
            .sorted(Comparator.comparing(Person::getName))
            .collect(Collectors.toList());
    }
}
`,
    "Opcoes": {
      A: "Define uma classe para manipular imagens",
      B: "Realiza uma requisição HTTP e retorna os dados em formato JSON",
      C: "Ordena uma lista de objetos Person pelo nome",
      D: "Calcula a soma dos números de 1 a 5"
    },
    "Resposta": "C",
    "Motivo": "O trecho de código em Java define uma classe Person com um método estático sortByName que ordena uma lista de objetos Person pelo nome utilizando a API Stream."
  },
  {
    "Pergunta": `No contexto do Java, o que o seguinte trecho de código faz?\n\n
import java.util.function.Predicate;
import java.util.stream.Stream;

public class StreamOperations {
    public static void main(String[] args) {
        Stream<Integer> numbers = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        Predicate<Integer> isEven = num -> num % 2 == 0;

        long countEvenNumbers = numbers.filter(isEven).count();

        System.out.println("Count of even numbers: " + countEvenNumbers);
    }
}
`,
    "Opcoes": {
      A: "Calcula a média de uma lista de números",
      B: "Filtra os números pares em uma lista e calcula a média",
      C: "Ordena uma lista de strings em ordem alfabética",
      D: "Conta o número de números pares em um stream"
    },
    "Resposta": "D",
    "Motivo": "O trecho de código em Java utiliza a API Stream para contar o número de números pares em um stream, utilizando a operação filter e o método count."
  },
  {
    "Pergunta": `No contexto do Java, o que o seguinte trecho de código faz?\n\n
import java.util.HashMap;
import java.util.Map;

public class WordFrequencyCounter {
    public static void main(String[] args) {
        String sentence = "This is a sample sentence. This sentence is a test.";

        Map<String, Integer> wordFrequency = new HashMap<>();

        String[] words = sentence.split("\\s+");

        for (String word : words) {
            wordFrequency.put(word, wordFrequency.getOrDefault(word, 0) + 1);
        }

        System.out.println("Word Frequency: " + wordFrequency);
    }
}
`,
    "Opcoes": {
      A: "Calcula a média de uma lista de números",
      B: "Conta a frequência de cada palavra em uma frase",
      C: "Ordena uma lista de strings em ordem alfabética",
      D: "Remove os elementos duplicados de uma lista"
    },
    "Resposta": "B",
    "Motivo": "O trecho de código em Java conta a frequência de cada palavra em uma frase, utilizando um Map para armazenar a contagem de cada palavra."
  }
  
      ]
    const perguntasQuimica = [
      {
    "Pergunta": "Qual é o número atômico do hidrogênio?",
    "Opcoes": {
      A: "1",
      B: "2",
      C: "3",
      D: "4"
    },
    "Resposta": "A",
    "Motivo": "O hidrogênio possui número atômico 1, o que significa que tem um próton em seu núcleo."
  },
  {
    "Pergunta": "O que representa a sigla pH?",
    "Opcoes": {
      A: "Peso Hidrogeniônico",
      B: "Potencial Hidrogeniônico",
      C: "Pressão Hidrogeniônica",
      D: "Perfil Hidrogeniônico"
    },
    "Resposta": "B",
    "Motivo": "O pH representa o Potencial Hidrogeniônico, uma medida que indica a acidez ou basicidade de uma solução."
  },
  {
    "Pergunta": "Qual é a fórmula química da água?",
    "Opcoes": {
      A: "CO2",
      B: "H2O",
      C: "O2",
      D: "CH4"
    },
    "Resposta": "B",
    "Motivo": "A fórmula química da água é H2O, indicando que uma molécula de água é composta por dois átomos de hidrogênio e um átomo de oxigênio."
  },
  {
    "Pergunta": "O que é um íon?",
    "Opcoes": {
      A: "Um átomo neutro",
      B: "Um átomo com carga elétrica positiva",
      C: "Um átomo com carga elétrica negativa",
      D: "Uma molécula formada por dois átomos"
    },
    "Resposta": "C",
    "Motivo": "Um íon é um átomo que ganhou ou perdeu elétrons, resultando em uma carga elétrica positiva (cátion) ou negativa (ânion)."
  },
  {
    "Pergunta": "Qual é o símbolo químico do ouro?",
    "Opcoes": {
      A: "Ag",
      B: "Fe",
      C: "Au",
      D: "Cu"
    },
    "Resposta": "C",
    "Motivo": "O símbolo químico do ouro é Au, derivado do termo latino 'aurum'."
  },
  {
    "Pergunta": "O que é uma reação de oxirredução?",
    "Opcoes": {
      A: "Uma reação que libera luz",
      B: "Uma reação que envolve oxigênio",
      C: "Uma reação que envolve transferência de elétrons",
      D: "Uma reação que produz ácido"
    },
    "Resposta": "C",
    "Motivo": "Uma reação de oxirredução envolve a transferência de elétrons entre substâncias químicas, resultando em mudanças no estado de oxidação."
  },
  {
    "Pergunta": "Qual é o componente principal do gás metano?",
    "Opcoes": {
      A: "Hidrogênio",
      B: "Oxigênio",
      C: "Carbono",
      D: "Nitrogênio"
    },
    "Resposta": "C",
    "Motivo": "O componente principal do gás metano (CH4) é o carbono."
  },
  {
    "Pergunta": "O que é um composto iônico?",
    "Opcoes": {
      A: "Uma substância formada por átomos de um único elemento",
      B: "Uma substância formada por moléculas",
      C: "Uma substância formada por átomos de diferentes elementos ligados por ligações covalentes",
      D: "Uma substância formada por íons positivos e negativos ligados por ligações iônicas"
    },
    "Resposta": "D",
    "Motivo": "Um composto iônico é uma substância formada por íons positivos (cátions) e negativos (ânions) ligados por ligações iônicas."
  },
  {
    "Pergunta": "O que é um isótopo?",
    "Opcoes": {
      A: "Um átomo com carga elétrica",
      B: "Um átomo com o mesmo número de prótons, mas diferente número de nêutrons",
      C: "Um átomo com o mesmo número de elétrons, mas diferente número de prótons",
      D: "Uma molécula formada por dois átomos"
    },
    "Resposta": "B",
    "Motivo": "Um isótopo é um átomo que tem o mesmo número de prótons, mas um diferente número de nêutrons em seu núcleo."
  },
  {
    "Pergunta": "Qual é a principal função dos catalisadores em uma reação química?",
    "Opcoes": {
      A: "Aumentar a temperatura da reação",
      B: "Reduzir a velocidade da reação",
      C: "Alterar o equilíbrio químico",
      D: "Acelerar a reação sem ser consumido"
    },
    "Resposta": "D",
    "Motivo": "Os catalisadores aceleram reações químicas ao fornecer uma rota de reação alternativa, reduzindo a energia de ativação necessária sem serem consumidos na reação."
  },
  
  {
    "Pergunta": "O que é um polímero?",
    "Opcoes": {
      A: "Uma substância formada por átomos de um único elemento",
      B: "Uma substância formada por moléculas",
      C: "Uma substância formada por átomos de diferentes elementos ligados por ligações covalentes",
      D: "Uma substância formada por macromoléculas compostas por unidades repetitivas"
    },
    "Resposta": "D",
    "Motivo": "Um polímero é uma substância formada por macromoléculas, que são compostas por unidades repetitivas chamadas monômeros."
  },
  {
    "Pergunta": "O que é a Lei da Conservação da Massa?",
    "Opcoes": {
      A: "A massa de um átomo é sempre constante",
      B: "A massa total de um sistema isolado permanece constante durante uma reação química",
      C: "A massa de uma substância é diretamente proporcional ao seu volume",
      D: "A massa de um gás é inversamente proporcional à sua pressão"
    },
    "Resposta": "B",
    "Motivo": "A Lei da Conservação da Massa afirma que a massa total de um sistema isolado permanece constante durante uma reação química, indicando que a massa não é criada nem destruída, apenas transformada."
  },
  {
    "Pergunta": "O que é a Tabela Periódica?",
    "Opcoes": {
      A: "Uma lista de elementos químicos organizados por ordem de descoberta",
      B: "Uma lista de elementos químicos organizados por ordem alfabética",
      C: "Uma lista de compostos químicos",
      D: "Uma lista de moléculas orgânicas"
    },
    "Resposta": "A",
    "Motivo": "A Tabela Periódica é uma lista de elementos químicos organizados por ordem crescente de número atômico, facilitando a compreensão das propriedades e relações entre os elementos."
  },
  {
    "Pergunta": "O que é a eletronegatividade?",
    "Opcoes": {
      A: "A tendência de um átomo ganhar elétrons",
      B: "A tendência de um átomo perder elétrons",
      C: "A tendência de um átomo atrair elétrons em uma ligação química",
      D: "A tendência de um átomo formar íons positivos"
    },
    "Resposta": "C",
    "Motivo": "A eletronegatividade é a medida da tendência de um átomo atrair elétrons em uma ligação química. Quanto maior a eletronegatividade, maior a capacidade do átomo de atrair elétrons."
  },
  
  {
    "Pergunta": "O que é um composto covalente?",
    "Opcoes": {
      A: "Uma substância formada por átomos de um único elemento",
      B: "Uma substância formada por moléculas",
      C: "Uma substância formada por átomos de diferentes elementos ligados por ligações iônicas",
      D: "Uma substância formada por átomos que compartilham elétrons"
    },
    "Resposta": "D",
    "Motivo": "Um composto covalente é uma substância formada por átomos que compartilham elétrons na formação de ligações covalentes."
  },
  {
    "Pergunta": "O que é a Teoria da Ligação de Valência?",
    "Opcoes": {
      A: "Uma teoria que descreve a formação de íons",
      B: "Uma teoria que descreve a formação de ligações iônicas",
      C: "Uma teoria que descreve a formação de ligações covalentes",
      D: "Uma teoria que descreve a distribuição de elétrons nas camadas eletrônicas"
    },
    "Resposta": "C",
    "Motivo": "A Teoria da Ligação de Valência descreve a formação de ligações covalentes, enfatizando o compartilhamento de elétrons entre átomos para alcançar estabilidade."
  },
  {
    "Pergunta": "O que é um ácido conforme a Teoria de Arrhenius?",
    "Opcoes": {
      A: "Uma substância que libera íons hidroxila (OH-) em solução aquosa",
      B: "Uma substância que libera íons hidrogênio (H+) em solução aquosa",
      C: "Uma substância que libera íons positivos em solução aquosa",
      D: "Uma substância que libera íons negativos em solução aquosa"
    },
    "Resposta": "B",
    "Motivo": "Conforme a Teoria de Arrhenius, um ácido é uma substância que libera íons hidrogênio (H+) em solução aquosa."
  },
  {
    "Pergunta": "O que é uma base conforme a Teoria de Arrhenius?",
    "Opcoes": {
      A: "Uma substância que libera íons hidroxila (OH-) em solução aquosa",
      B: "Uma substância que libera íons hidrogênio (H+) em solução aquosa",
      C: "Uma substância que libera íons positivos em solução aquosa",
      D: "Uma substância que libera íons negativos em solução aquosa"
    },
    "Resposta": "A",
    "Motivo": "Conforme a Teoria de Arrhenius, uma base é uma substância que libera íons hidroxila (OH-) em solução aquosa."
  },
  {
    "Pergunta": "O que é um ácido conforme a Teoria de Brønsted-Lowry?",
    "Opcoes": {
      A: "Uma substância que aceita prótons em uma reação química",
      B: "Uma substância que doa prótons em uma reação química",
      C: "Uma substância que libera íons hidrogênio (H+) em solução aquosa",
      D: "Uma substância que libera íons hidroxila (OH-) em solução aquosa"
    },
    "Resposta": "B",
    "Motivo": "Conforme a Teoria de Brønsted-Lowry, um ácido é uma substância que doa prótons em uma reação química."
  },
  {
    "Pergunta": "O que é uma base conforme a Teoria de Brønsted-Lowry?",
    "Opcoes": {
      A: "Uma substância que aceita prótons em uma reação química",
      B: "Uma substância que doa prótons em uma reação química",
      C: "Uma substância que libera íons hidrogênio (H+) em solução aquosa",
      D: "Uma substância que libera íons hidroxila (OH-) em solução aquosa"
    },
    "Resposta": "A",
    "Motivo": "Conforme a Teoria de Brønsted-Lowry, uma base é uma substância que aceita prótons em uma reação química."
  },
  {
    "Pergunta": "O que é um ácido no contexto da química?",
    "Opcoes": {
      A: "Uma substância que libera íons hidróxido (OH-) em solução aquosa",
      B: "Uma substância que libera prótons (H+) em solução aquosa",
      C: "Uma substância que possui pH maior que 7",
      D: "Uma substância que é uma base forte"
    },
    "Resposta": "B",
    "Motivo": "No contexto da química, um ácido é uma substância que libera prótons (íons H+) em solução aquosa, contribuindo para a acidez da solução."
  },
  {
    "Pergunta": "O que é uma base no contexto da química?",
    "Opcoes": {
      A: "Uma substância que libera íons hidróxido (OH-) em solução aquosa",
      B: "Uma substância que libera prótons (H+) em solução aquosa",
      C: "Uma substância que possui pH menor que 7",
      D: "Uma substância que é um ácido fraco"
    },
    "Resposta": "A",
    "Motivo": "No contexto da química, uma base é uma substância que libera íons hidróxido (OH-) em solução aquosa, contribuindo para a alcalinidade da solução."
  },
  {
    "Pergunta": "O que é um poluente orgânico persistente (POP)?",
    "Opcoes": {
      A: "Um composto químico inofensivo",
      B: "Um composto químico que se degrada rapidamente no ambiente",
      C: "Um composto químico que contém apenas carbono e hidrogênio",
      D: "Um composto químico resistente à degradação ambiental e capaz de se acumular nos organismos vivos"
    },
    "Resposta": "D",
    "Motivo": "Poluentes orgânicos persistentes (POPs) são compostos químicos que são resistentes à degradação ambiental e têm a capacidade de se acumular nos organismos vivos, representando riscos ambientais e para a saúde."
  },
  {
    "Pergunta": "O que é a radioatividade?",
    "Opcoes": {
      A: "A capacidade de um átomo perder elétrons",
      B: "A emissão de partículas subatômicas de um núcleo instável",
      C: "A formação de íons em uma reação química",
      D: "A tendência de um átomo atrair elétrons"
    },
    "Resposta": "B",
    "Motivo": "A radioatividade é a emissão de partículas subatômicas de um núcleo instável, resultando na busca por estabilidade nuclear."
  },
  {
    "Pergunta": "O que é um isômero no contexto químico?",
    "Opcoes": {
      A: "Um átomo com o mesmo número de prótons, mas diferente número de nêutrons",
      B: "Duas substâncias com a mesma fórmula molecular, mas diferentes arranjos de átomos",
      C: "Um composto covalente",
      D: "Uma substância formada por átomos de um único elemento"
    },
    "Resposta": "B",
    "Motivo": "No contexto químico, isômeros são duas ou mais substâncias que possuem a mesma fórmula molecular, mas diferentes arranjos de átomos, resultando em propriedades químicas e físicas distintas."
  },
  {
    "Pergunta": "O que é a entalpia em uma reação química?",
    "Opcoes": {
      A: "A quantidade total de energia do sistema",
      B: "A energia transferida na forma de calor durante uma reação química",
      C: "A capacidade de um átomo ganhar elétrons",
      D: "A energia associada à posição dos elétrons em um átomo"
    },
    "Resposta": "B",
    "Motivo": "Em uma reação química, a entalpia é a energia transferida na forma de calor entre o sistema e o ambiente, refletindo a quantidade de energia envolvida na reação."
  },
  {
    "Pergunta": "O que é a lei de Boyle no contexto da físico-química?",
    "Opcoes": {
      A: "A pressão de um gás é inversamente proporcional ao seu volume, mantendo a temperatura constante",
      B: "A energia total de um sistema isolado permanece constante",
      C: "A quantidade de gás dissolvida em um líquido é diretamente proporcional à pressão do gás",
      D: "A taxa de uma reação química é diretamente proporcional à concentração dos reagentes"
    },
    "Resposta": "A",
    "Motivo": "A lei de Boyle afirma que, mantendo a temperatura constante, a pressão de um gás é inversamente proporcional ao seu volume."
  },
  
  {
    "Pergunta": "O que é a energia de ativação em uma reação química?",
    "Opcoes": {
      A: "A energia liberada durante uma reação química",
      B: "A energia total de um sistema isolado",
      C: "A energia associada à posição dos elétrons em um átomo",
      D: "A quantidade mínima de energia necessária para iniciar uma reação química"
    },
    "Resposta": "D",
    "Motivo": "A energia de ativação em uma reação química é a quantidade mínima de energia necessária para iniciar a reação, superando a barreira de energia."
  },
  {
    "Pergunta": "O que é entropia na termodinâmica?",
    "Opcoes": {
      A: "A quantidade total de energia do sistema",
      B: "A medida da desordem ou aleatoriedade em um sistema",
      C: "A quantidade de calor transferida durante uma reação química",
      D: "A capacidade de um átomo ganhar elétrons"
    },
    "Resposta": "B",
    "Motivo": "Na termodinâmica, entropia é a medida da desordem ou aleatoriedade em um sistema. Sistemas naturais tendem a aumentar sua entropia ao longo do tempo."
  },
  {
    "Pergunta": "O que é um agente redutor em uma reação de oxirredução?",
    "Opcoes": {
      A: "Uma substância que ganha elétrons e é oxidada",
      B: "Uma substância que perde elétrons e é oxidada",
      C: "Uma substância que ganha elétrons e é reduzida",
      D: "Uma substância que perde elétrons e é reduzida"
    },
    "Resposta": "A",
    "Motivo": "Um agente redutor em uma reação de oxirredução é uma substância que ganha elétrons e, portanto, é oxidada, facilitando a redução de outra substância na reação."
  },
  {
    "Pergunta": "O que é um agente oxidante em uma reação de oxirredução?",
    "Opcoes": {
      A: "Uma substância que ganha elétrons e é oxidada",
      B: "Uma substância que perde elétrons e é oxidada",
      C: "Uma substância que ganha elétrons e é reduzida",
      D: "Uma substância que perde elétrons e é reduzida"
    },
    "Resposta": "B",
    "Motivo": "Um agente oxidante em uma reação de oxirredução é uma substância que perde elétrons e, portanto, é reduzida, facilitando a oxidação de outra substância na reação."
  },
  {
    "Pergunta": "O que é a Lei Zero da Termodinâmica?",
    "Opcoes": {
      A: "Se dois sistemas estão em equilíbrio térmico com um terceiro sistema, estão em equilíbrio térmico entre si",
      B: "A energia total de um sistema isolado permanece constante",
      C: "A quantidade de gás dissolvida em um líquido é diretamente proporcional à pressão do gás",
      D: "A taxa de uma reação química é diretamente proporcional à concentração dos reagentes"
    },
    "Resposta": "A",
    "Motivo": "A Lei Zero da Termodinâmica afirma que se dois sistemas estão em equilíbrio térmico com um terceiro sistema, então estão em equilíbrio térmico entre si."
  },
  {
    "Pergunta": "O que é a Lei de Hess?",
    "Opcoes": {
      A: "A pressão de um gás é inversamente proporcional ao seu volume, mantendo a temperatura constante",
      B: "A energia transferida na forma de calor durante uma reação química",
      C: "A quantidade de gás dissolvida em um líquido é diretamente proporcional à pressão do gás",
      D: "A variação total de entalpia em uma reação química é a mesma, independentemente do número de etapas"
    },
    "Resposta": "D",
    "Motivo": "A Lei de Hess afirma que a variação total de entalpia em uma reação química é a mesma, independentemente do número de etapas ou caminho da reação."
  },
  {
    "Pergunta": "O que é a constante de Avogadro?",
    "Opcoes": {
      A: "O número de átomos em 1 mol de carbono-12",
      B: "A quantidade de gás dissolvida em um líquido",
      C: "A quantidade total de energia do sistema",
      D: "A energia associada à posição dos elétrons em um átomo"
    },
    "Resposta": "A",
    "Motivo": "A constante de Avogadro é o número de átomos, íons ou moléculas em 1 mol de substância e é aproximadamente igual a 6,022 x 10^23 mol^-1."
  },
  {
    "Pergunta": "O que é um sistema fechado na termodinâmica?",
    "Opcoes": {
      A: "Um sistema que troca matéria e energia com o ambiente",
      B: "Um sistema que troca apenas energia com o ambiente",
      C: "Um sistema que não troca matéria nem energia com o ambiente",
      D: "Um sistema que está em equilíbrio térmico com outro sistema"
    },
    "Resposta": "C",
    "Motivo": "Um sistema fechado na termodinâmica é um sistema que não troca matéria nem energia com o ambiente externo."
  }
  
  ,
  {
    "Pergunta": "O que é a constante de Boltzmann?",
    "Opcoes": {
      A: "A medida da desordem ou aleatoriedade em um sistema",
      B: "A energia transferida na forma de calor durante uma reação química",
      C: "A constante que relaciona a energia cinética média das partículas em um gás com a temperatura absoluta",
      D: "A medida da tendência de um átomo atrair elétrons"
    },
    "Resposta": "C",
    "Motivo": "A constante de Boltzmann (k) relaciona a energia cinética média das partículas em um gás com a temperatura absoluta, sendo parte da equação dos gases ideais."
  },
  {
    "Pergunta": "O que é uma célula eletroquímica?",
    "Opcoes": {
      A: "Um dispositivo que converte energia química em energia térmica",
      B: "Um dispositivo que converte energia térmica em energia elétrica",
      C: "Um dispositivo que converte energia luminosa em energia elétrica",
      D: "Um dispositivo que utiliza reações químicas para produzir eletricidade"
    },
    "Resposta": "D",
    "Motivo": "Uma célula eletroquímica é um dispositivo que utiliza reações químicas para produzir eletricidade, geralmente consistindo em dois eletrodos imersos em uma solução eletrolítica."
  },
  {
    "Pergunta": "O que é uma reação exotérmica?",
    "Opcoes": {
      A: "Uma reação que libera energia para o ambiente",
      B: "Uma reação que absorve energia do ambiente",
      C: "Uma reação que ocorre na presença de luz",
      D: "Uma reação que ocorre em alta pressão"
    },
    "Resposta": "A",
    "Motivo": "Uma reação exotérmica é uma reação que libera energia para o ambiente na forma de calor, muitas vezes resultando em um aumento da temperatura do sistema."
  },
  {
    "Pergunta": "O que é a entalpia padrão de formação?",
    "Opcoes": {
      A: "A energia liberada durante uma reação química",
      B: "A energia total de um sistema isolado",
      C: "A quantidade de calor transferida durante uma reação química",
      D: "A entalpia de uma reação que forma um mol de um composto a partir de seus elementos constituintes no estado padrão"
    },
    "Resposta": "D",
    "Motivo": "A entalpia padrão de formação é a entalpia de uma reação que forma um mol de um composto a partir de seus elementos constituintes no estado padrão, comumente utilizada para calcular a entalpia de reações químicas."
  },
  {
    "Pergunta": "O que é a regra do octeto?",
    "Opcoes": {
      A: "Um princípio que afirma que átomos tendem a ganhar elétrons para atingir uma configuração eletrônica de 8 elétrons na camada de valência",
      B: "Um princípio que afirma que átomos tendem a perder elétrons para atingir uma configuração eletrônica de 8 elétrons na camada de valência",
      C: "Um princípio que afirma que átomos tendem a compartilhar elétrons para atingir uma configuração eletrônica de 4 elétrons na camada de valência",
      D: "Um princípio que afirma que átomos não seguem padrões específicos de distribuição eletrônica"
    },
    "Resposta": "A",
    "Motivo": "A regra do octeto é um princípio que afirma que átomos tendem a ganhar, perder ou compartilhar elétrons para atingir uma configuração eletrônica de 8 elétrons na camada de valência, buscando estabilidade."
  },
  {
    "Pergunta": "O que é um sistema endotérmico?",
    "Opcoes": {
      A: "Um sistema que libera calor para o ambiente",
      B: "Um sistema que absorve calor do ambiente",
      C: "Um sistema que ocorre em alta pressão",
      D: "Um sistema que ocorre na ausência de luz"
    },
    "Resposta": "B",
    "Motivo": "Um sistema endotérmico é um sistema que absorve calor do ambiente durante uma reação, muitas vezes resultando em uma diminuição da temperatura do sistema."
  },
  {
    "Pergunta": "O que é um reator nuclear?",
    "Opcoes": {
      A: "Um dispositivo que converte energia química em energia térmica",
      B: "Um dispositivo que converte energia térmica em energia elétrica",
      C: "Um dispositivo que utiliza reações químicas para produzir eletricidade",
      D: "Um dispositivo que utiliza reações nucleares para produzir eletricidade"
    },
    "Resposta": "D",
    "Motivo": "Um reator nuclear é um dispositivo que utiliza reações nucleares para produzir eletricidade, geralmente envolvendo fissão nuclear ou fusão nuclear controlada."
  },
  
  {
    "Pergunta": "O que é um hidrocarboneto?",
    "Opcoes": {
      A: "Um composto que contém apenas átomos de hidrogênio",
      B: "Um composto que contém apenas átomos de carbono",
      C: "Um composto que contém átomos de hidrogênio e oxigênio",
      D: "Um composto que contém átomos de hidrogênio, carbono e nitrogênio"
    },
    "Resposta": "B",
    "Motivo": "Um hidrocarboneto é um composto que contém apenas átomos de carbono e hidrogênio, sendo a classe principal de compostos na química orgânica."
  },
  {
    "Pergunta": "O que é um grupo funcional na química orgânica?",
    "Opcoes": {
      A: "Um conjunto de átomos ligados por ligações iônicas",
      B: "Um conjunto de átomos ligados por ligações covalentes",
      C: "Um átomo isolado em uma molécula",
      D: "Um conjunto de moléculas ligadas por pontes de hidrogênio"
    },
    "Resposta": "B",
    "Motivo": "Um grupo funcional na química orgânica é um conjunto de átomos ligados por ligações covalentes que confere propriedades específicas a uma molécula e determina suas reações químicas."
  },
  {
    "Pergunta": "O que é isomeria na química orgânica?",
    "Opcoes": {
      A: "Duas substâncias com a mesma fórmula molecular, mas diferentes arranjos de átomos",
      B: "Um composto que contém apenas átomos de carbono",
      C: "A capacidade de um átomo ganhar elétrons",
      D: "A medida da tendência de um átomo atrair elétrons"
    },
    "Resposta": "A",
    "Motivo": "Na química orgânica, isomeria refere-se à existência de duas ou mais substâncias com a mesma fórmula molecular, mas diferentes arranjos de átomos, resultando em propriedades químicas e físicas distintas."
  },
  {
    "Pergunta": "O que é um composto aromático?",
    "Opcoes": {
      A: "Um composto com um odor forte",
      B: "Um composto que contém apenas átomos de carbono",
      C: "Um composto que possui uma estrutura de anel conjugado e é estável",
      D: "Um composto que reage rapidamente com ácidos"
    },
    "Resposta": "C",
    "Motivo": "Um composto aromático é um composto que possui uma estrutura de anel conjugado e é especialmente estável, muitas vezes exibindo propriedades aromáticas ou um odor característico."
  },
  {
    "Pergunta": "O que é um éster na química orgânica?",
    "Opcoes": {
      A: "Um composto que contém apenas átomos de carbono",
      B: "Um composto que contém uma ligação tripla entre átomos de carbono",
      C: "Um composto que possui uma estrutura de anel conjugado e é estável",
      D: "Um composto derivado da reação entre um ácido e um álcool"
    },
    "Resposta": "D",
    "Motivo": "Um éster na química orgânica é um composto derivado da reação entre um ácido e um álcool, resultando na formação de uma ligação éster."
  },
  {
    "Pergunta": "O que é a polimerização na química orgânica?",
    "Opcoes": {
      A: "Um processo de quebra de polímeros em monômeros",
      B: "Um processo de formação de polímeros a partir de monômeros",
      C: "A capacidade de um átomo ganhar elétrons",
      D: "Um processo de conversão de átomos isolados em moléculas"
    },
    "Resposta": "B",
    "Motivo": "A polimerização na química orgânica é o processo de formação de polímeros a partir de monômeros, onde moléculas menores se combinam para formar uma molécula maior e mais complexa."
  },
  {
    "Pergunta": "O que é a reação de esterificação na química orgânica?",
    "Opcoes": {
      A: "Uma reação entre um ácido e uma base",
      B: "Uma reação entre um ácido e um álcool",
      C: "Uma reação entre um alceno e um alcino",
      D: "Uma reação entre um hidrocarboneto e oxigênio"
    },
    "Resposta": "B",
    "Motivo": "A reação de esterificação na química orgânica é uma reação entre um ácido e um álcool, resultando na formação de um éster e água."
  },
  {
    "Pergunta": "O que é um radical na química orgânica?",
    "Opcoes": {
      A: "Um átomo com carga elétrica",
      B: "Um átomo isolado em uma molécula",
      C: "Um átomo com elétrons desemparelhados",
      D: "Um átomo com o mesmo número de prótons e elétrons"
    },
    "Resposta": "C",
    "Motivo": "Na química orgânica, um radical é um átomo ou grupo de átomos que possui elétrons desemparelhados, tornando-o altamente reativo."
  },
  {
    "Pergunta": "O que é um polímero na química orgânica?",
    "Opcoes": {
      A: "Um composto que contém apenas átomos de carbono",
      B: "Uma molécula composta por cadeias lineares de átomos",
      C: "Um composto que contém apenas átomos de hidrogênio",
      D: "Uma macromolécula formada por unidades repetitivas chamadas monômeros"
    },
    "Resposta": "D",
    "Motivo": "Um polímero na química orgânica é uma macromolécula formada por unidades repetitivas chamadas monômeros, sendo comum em plásticos, borrachas e materiais sintéticos."
  },
  {
    "Pergunta": "O que é um enol na química orgânica?",
    "Opcoes": {
      A: "Uma molécula com uma ligação dupla entre átomos de carbono",
      B: "Uma molécula com uma ligação tripla entre átomos de carbono",
      C: "Uma molécula com uma ligação dupla e uma hidroxila (-OH)",
      D: "Uma molécula com uma hidroxila (-OH) e uma amina"
    },
    "Resposta": "C",
    "Motivo": "Um enol na química orgânica é uma molécula que possui uma ligação dupla (ene) e uma hidroxila (-ol), caracterizando-se pela presença desses grupos funcionais."
  },
  {
    "Pergunta": "O que é uma reação de oxidação na química orgânica?",
    "Opcoes": {
      A: "Uma reação em que um átomo ganha elétrons",
      B: "Uma reação em que um átomo perde elétrons",
      C: "Uma reação que envolve a quebra de uma ligação",
      D: "Uma reação que envolve a formação de uma ligação"
    },
    "Resposta": "B",
    "Motivo": "Uma reação de oxidação na química orgânica é aquela em que um átomo ou íon perde elétrons, resultando em um aumento de seu estado de oxidação."
  },
  {
    "Pergunta": "O que é uma reação de redução na química orgânica?",
    "Opcoes": {
      A: "Uma reação em que um átomo ganha elétrons",
      B: "Uma reação em que um átomo perde elétrons",
      C: "Uma reação que envolve a quebra de uma ligação",
      D: "Uma reação que envolve a formação de uma ligação"
    },
    "Resposta": "A",
    "Motivo": "Uma reação de redução na química orgânica é aquela em que um átomo ou íon ganha elétrons, resultando em uma diminuição de seu estado de oxidação."
  },
  {
    "Pergunta": "O que são isômeros constitucionais na química orgânica?",
    "Opcoes": {
      A: "Duas substâncias com a mesma fórmula molecular, mas diferentes arranjos de átomos",
      B: "Duas substâncias que possuem a mesma orientação relativa de grupos em torno de uma ligação dupla ou anel",
      C: "Duas substâncias que possuem a mesma estrutura espacial tridimensional",
      D: "Duas substâncias que possuem a mesma orientação relativa de grupos em torno de um átomo"
    },
    "Resposta": "A",
    "Motivo": "Isômeros constitucionais na química orgânica são duas ou mais substâncias que possuem a mesma fórmula molecular, mas diferentes arranjos de átomos, resultando em diferentes estruturas químicas."
  },
  {
    "Pergunta": "O que são grupos amino na química orgânica?",
    "Opcoes": {
      A: "Grupos funcionais que contêm nitrogênio e dois átomos de hidrogênio",
      B: "Grupos funcionais que contêm oxigênio e dois átomos de hidrogênio",
      C: "Grupos funcionais que contêm enxofre e dois átomos de hidrogênio",
      D: "Grupos funcionais que contêm carbono e três átomos de hidrogênio"
    },
    "Resposta": "A",
    "Motivo": "Grupos amino na química orgânica são grupos funcionais que contêm nitrogênio e dois átomos de hidrogênio, sendo característicos em aminas e aminoácidos."
  }, 
  
  {
    "Pergunta": "O que é o composto CH3OH?",
    "Opcoes": {
      A: "Metanol",
      B: "Etanol",
      C: "Propanol",
      D: "Butanol"
    },
    "Resposta": "A",
    "Motivo": "O composto CH3OH é conhecido como metanol, um álcool utilizado, por exemplo, como combustível e solvente."
  },
  {
    "Pergunta": "O que é o composto C2H5OH?",
    "Opcoes": {
      A: "Metanol",
      B: "Etanol",
      C: "Propanol",
      D: "Butanol"
    },
    "Resposta": "B",
    "Motivo": "O composto C2H5OH é conhecido como etanol, um álcool comum em bebidas alcoólicas e utilizado também como biocombustível."
  },
  {
    "Pergunta": "O que é o composto C4H9OH?",
    "Opcoes": {
      A: "Metanol",
      B: "Etanol",
      C: "Propanol",
      D: "Butanol"
    },
    "Resposta": "D",
    "Motivo": "O composto C4H9OH é conhecido como butanol, um álcool utilizado em solventes, produtos de limpeza e até mesmo como biocombustível."
  },
  {
    "Pergunta": "O que é o composto C2H5OC2H5?",
    "Opcoes": {
      A: "Éter etílico",
      B: "Metanol",
      C: "Propanol",
      D: "Butanol"
    },
    "Resposta": "A",
    "Motivo": "O composto C2H5OC2H5 é conhecido como éter etílico, uma substância utilizada como solvente e na produção de anestésicos."
  },
  {
    "Pergunta": "O que é o composto CH3OCH3?",
    "Opcoes": {
      A: "Metanol",
      B: "Etanol",
      C: "Metilamina",
      D: "Dimetil éter"
    },
    "Resposta": "D",
    "Motivo": "O composto CH3OCH3 é conhecido como dimetil éter, uma substância utilizada como solvente e em processos industriais."
  },
  {
    "Pergunta": "O que é o composto C2H5OC2H5?",
    "Opcoes": {
      A: "Éter etílico",
      B: "Metanol",
      C: "Propanol",
      D: "Butanol"
    },
    "Resposta": "A",
    "Motivo": "O composto C2H5OC2H5 é conhecido como éter etílico, uma substância utilizada como solvente e na produção de anestésicos."
  },
  {
    "Pergunta": "O que é o composto CH3CHOHCH3?",
    "Opcoes": {
      A: "Propanal",
      B: "Propanona",
      C: "Butanal",
      D: "Butanona"
    },
    "Resposta": "A",
    "Motivo": "O composto CH3CHOHCH3 é conhecido como propanal, um aldeído utilizado na produção de resinas e plásticos."
  },
  {
    "Pergunta": "O que é o composto CH3COCH3?",
    "Opcoes": {
      A: "Propanal",
      B: "Propanona",
      C: "Butanal",
      D: "Butanona"
    },
    "Resposta": "B",
    "Motivo": "O composto CH3COCH3 é conhecido como propanona, uma cetona amplamente utilizada como solvente e na indústria química."
  },
  {
    "Pergunta": "O que é o composto CH3(CH2)4CH2OH?",
    "Opcoes": {
      A: "Hexanol",
      B: "Heptanol",
      C: "Octanol",
      D: "Nonanol"
    },
    "Resposta": "A",
    "Motivo": "O composto CH3(CH2)4CH2OH é conhecido como hexanol, um álcool utilizado em fragrâncias e na indústria química."
  },
  {
    "Pergunta": "O que é o composto CH3(CH2)6CH3?",
    "Opcoes": {
      A: "Hexano",
      B: "Heptano",
      C: "Octano",
      D: "Nonano"
    },
    "Resposta": "A",
    "Motivo": "O composto CH3(CH2)6CH3 é conhecido como hexano, um hidrocarboneto alifático utilizado como solvente e na indústria petroquímica."
  }
  ,
  
  {
    "Pergunta": "Identifique o composto CH3CH2OH.",
    "Opcoes": {
      A: "Álcool",
      B: "Éter",
      C: "Éster",
      D: "Hidrocarboneto"
    },
    "Resposta": "A",
    "Motivo": "O composto CH3CH2OH é conhecido como etanol, classificado como um álcool devido à presença do grupo hidroxila (-OH)."
  },
  {
    "Pergunta": "Identifique o composto CH3OCH3.",
    "Opcoes": {
      A: "Álcool",
      B: "Éter",
      C: "Éster",
      D: "Hidrocarboneto"
    },
    "Resposta": "B",
    "Motivo": "O composto CH3OCH3 é conhecido como éter dimetílico, sendo classificado como éter devido à presença da ligação oxigênio-carbono."
  },
  {
    "Pergunta": "Identifique o composto CH3COOH.",
    "Opcoes": {
      A: "Álcool",
      B: "Éter",
      C: "Ácido Carboxílico",
      D: "Hidrocarboneto"
    },
    "Resposta": "C",
    "Motivo": "O composto CH3COOH é conhecido como ácido acético, classificado como ácido carboxílico devido à presença do grupo funcional carboxila (-COOH)."
  },
  {
    "Pergunta": "Identifique o composto CH3COOCH2CH3.",
    "Opcoes": {
      A: "Álcool",
      B: "Éter",
      C: "Éster",
      D: "Aldeído"
    },
    "Resposta": "C",
    "Motivo": "O composto CH3COOCH2CH3 é conhecido como etanoato de metila e classificado como éster devido à presença do grupo funcional éster."
  },
  {
    "Pergunta": "Identifique o composto C6H6.",
    "Opcoes": {
      A: "Álcool",
      B: "Éter",
      C: "Hidrocarboneto Aromático",
      D: "Aldeído"
    },
    "Resposta": "C",
    "Motivo": "O composto C6H6 é conhecido como benzeno, classificado como hidrocarboneto aromático devido à presença do anel benzênico."
  },
  {
    "Pergunta": "Identifique o composto CH3CHO.",
    "Opcoes": {
      A: "Álcool",
      B: "Éter",
      C: "Éster",
      D: "Aldeído"
    },
    "Resposta": "D",
    "Motivo": "O composto CH3CHO é conhecido como propanal, classificado como aldeído devido à presença do grupo funcional aldeído."
  }
  ,
  
  {
    "Pergunta": "Balanceie a equação química: H2 + O2 → H2O",
    "Opcoes": {
      A: "2H2 + O2 → H2O",
      B: "H2 + 2O2 → H2O",
      C: "2H2 + 2O2 → 2H2O",
      D: "H2 + O2 → 2H2O"
    },
    "Resposta": "C",
    "Motivo": "A equação balanceada é 2H2 + 2O2 → 2H2O, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: CH4 + O2 → CO2 + H2O",
    "Opcoes": {
      A: "CH4 + 2O2 → CO2 + H2O",
      B: "CH4 + O2 → CO2 + 2H2O",
      C: "2CH4 + O2 → CO2 + 2H2O",
      D: "CH4 + 2O2 → CO2 + 2H2O"
    },
    "Resposta": "D",
    "Motivo": "A equação balanceada é CH4 + 2O2 → CO2 + 2H2O, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: Fe2O3 + CO → Fe + CO2",
    "Opcoes": {
      A: "Fe2O3 + CO → 2Fe + CO2",
      B: "2Fe2O3 + CO → 3Fe + CO2",
      C: "Fe2O3 + 3CO → 2Fe + 3CO2",
      D: "Fe2O3 + 2CO → 2Fe + 2CO2"
    },
    "Resposta": "A",
    "Motivo": "A equação balanceada é Fe2O3 + 3CO → 2Fe + 3CO2, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: C4H10 + O2 → CO2 + H2O",
    "Opcoes": {
      A: "C4H10 + 6O2 → 4CO2 + 5H2O",
      B: "2C4H10 + 13O2 → 8CO2 + 10H2O",
      C: "C4H10 + 5O2 → 4CO2 + 5H2O",
      D: "2C4H10 + 9O2 → 8CO2 + 10H2O"
    },
    "Resposta": "B",
    "Motivo": "A equação balanceada é 2C4H10 + 13O2 → 8CO2 + 10H2O, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: N2 + H2 → NH3",
    "Opcoes": {
      A: "N2 + 2H2 → NH3",
      B: "2N2 + 3H2 → 2NH3",
      C: "3N2 + H2 → 2NH3",
      D: "N2 + 3H2 → NH3"
    },
    "Resposta": "A",
    "Motivo": "A equação balanceada é N2 + 3H2 → 2NH3, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: C6H12O6 + O2 → CO2 + H2O",
    "Opcoes": {
      A: "C6H12O6 + 6O2 → 6CO2 + 6H2O",
      B: "C6H12O6 + O2 → CO2 + H2O",
      C: "2C6H12O6 + O2 → 2CO2 + 2H2O",
      D: "C6H12O6 + 2O2 → 2CO2 + 2H2O"
    },
    "Resposta": "A",
    "Motivo": "A equação balanceada é C6H12O6 + 6O2 → 6CO2 + 6H2O, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: KClO3 → KCl + O2",
    "Opcoes": {
      A: "2KClO3 → 2KCl + 3O2",
      B: "KClO3 → KCl + 2O2",
      C: "KClO3 → 2KCl + O2",
      D: "3KClO3 → 3KCl + O2"
    },
    "Resposta": "A",
    "Motivo": "A equação balanceada é 2KClO3 → 2KCl + 3O2, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: P4 + O2 → P2O5",
    "Opcoes": {
      A: "P4 + 5O2 → 2P2O5",
      B: "P4 + O2 → 2P2O5",
      C: "2P4 + 5O2 → 4P2O5",
      D: "P4 + 2O2 → P2O5"
    },
    "Resposta": "C",
    "Motivo": "A equação balanceada é 2P4 + 5O2 → 4P2O5, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: SO2 + O2 → SO3",
    "Opcoes": {
      A: "2SO2 + O2 → 2SO3",
      B: "SO2 + 2O2 → SO3",
      C: "SO2 + O2 → 2SO3",
      D: "2SO2 + 2O2 → 2SO3"
    },
    "Resposta": "C",
    "Motivo": "A equação balanceada é 2SO2 + O2 → 2SO3, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  },
  {
    "Pergunta": "Balanceie a equação química: HCl + NaOH → NaCl + H2O",
    "Opcoes": {
      A: "HCl + NaOH → NaCl + H2O",
      B: "2HCl + 2NaOH → 2NaCl + 2H2O",
      C: "HCl + NaOH → NaCl + 2H2O",
      D: "2HCl + NaOH → NaCl + H2O"
    },
    "Resposta": "A",
    "Motivo": "A equação balanceada é HCl + NaOH → NaCl + H2O, garantindo que a quantidade de átomos de cada elemento seja a mesma nos reagentes e nos produtos."
  }
  
  
  
  
      ]
    const perguntasBiologia = [
      
      {
    "Pergunta": "O que é mitose?",
    "Opcoes": {
      A: "Processo de divisão celular que resulta em células haploides",
      B: "Processo de divisão celular que resulta em células diploides",
      C: "Processo de reprodução assexuada",
      D: "Processo de reprodução sexuada"
    },
    "Resposta": "B",
    "Motivo": "A mitose é um processo de divisão celular que resulta em células filhas geneticamente idênticas à célula-mãe, mantendo o número de cromossomos (células diploides)."
  },
  {
    "Pergunta": "O que é a fotossíntese?",
    "Opcoes": {
      A: "Processo de respiração celular",
      B: "Processo de produção de proteínas",
      C: "Processo de obtenção de energia a partir de alimentos",
      D: "Processo de conversão de luz solar em energia química"
    },
    "Resposta": "D",
    "Motivo": "A fotossíntese é o processo pelo qual os organismos autotróficos convertem a luz solar em energia química para produção de alimentos, liberando oxigênio como subproduto."
  },
  {
    "Pergunta": "O que são os ribossomos?",
    "Opcoes": {
      A: "Organelas responsáveis pela síntese de lipídios",
      B: "Organelas envolvidas na respiração celular",
      C: "Organelas responsáveis pela síntese de proteínas",
      D: "Organelas de armazenamento de nutrientes"
    },
    "Resposta": "C",
    "Motivo": "Os ribossomos são organelas celulares responsáveis pela síntese de proteínas durante o processo de tradução do RNA mensageiro."
  },
  {
    "Pergunta": "O que é a meiose?",
    "Opcoes": {
      A: "Processo de divisão celular que resulta em células diploides",
      B: "Processo de reprodução assexuada",
      C: "Processo de reprodução sexuada",
      D: "Processo de formação de gametas"
    },
    "Resposta": "C",
    "Motivo": "A meiose é um processo de divisão celular que resulta na formação de células haploides e é fundamental para a reprodução sexuada, pois produz gametas."
  },
  {
    "Pergunta": "O que é a teoria da evolução por seleção natural?",
    "Opcoes": {
      A: "Ideia de que os organismos evoluem para se tornarem maiores",
      B: "Ideia de que os organismos evoluem para se tornarem mais complexos",
      C: "Ideia de que os organismos evoluem para se adaptarem ao ambiente por meio de mudanças genéticas",
      D: "Ideia de que os organismos evoluem para se tornarem mais simples"
    },
    "Resposta": "C",
    "Motivo": "A teoria da evolução por seleção natural propõe que os organismos evoluem ao longo do tempo para se adaptarem ao ambiente por meio de mudanças genéticas favoráveis que são selecionadas pela natureza."
  },
  {
    "Pergunta": "O que são os ecossistemas?",
    "Opcoes": {
      A: "Grupos de organismos da mesma espécie",
      B: "Conjunto de órgãos em um organismo",
      C: "Ambientes com fatores bióticos e abióticos interagindo",
      D: "Sistemas de transporte em organismos"
    },
    "Resposta": "C",
    "Motivo": "Ecossistemas são conjuntos complexos de organismos interagindo entre si e com os fatores abióticos em um determinado ambiente, formando uma unidade funcional."
  },
  
  {
    "Pergunta": "O que é a replicação do DNA?",
    "Opcoes": {
      A: "Processo de divisão celular",
      B: "Processo de síntese de proteínas",
      C: "Processo de duplicação do material genético",
      D: "Processo de produção de energia"
    },
    "Resposta": "C",
    "Motivo": "A replicação do DNA é o processo no qual a molécula de DNA é copiada, resultando em duas moléculas idênticas, cada uma contendo uma cadeia original e uma recém-sintetizada."
  },
  {
    "Pergunta": "O que são os cromossomos?",
    "Opcoes": {
      A: "Estruturas responsáveis pela síntese de proteínas",
      B: "Estruturas de armazenamento de nutrientes",
      C: "Estruturas que compõem a membrana plasmática",
      D: "Estruturas que contêm material genético"
    },
    "Resposta": "D",
    "Motivo": "Os cromossomos são estruturas celulares que contêm o material genético (DNA) e são essenciais para a transmissão da informação genética durante a divisão celular."
  },
  {
    "Pergunta": "O que são os leucócitos?",
    "Opcoes": {
      A: "Células sanguíneas responsáveis pela coagulação",
      B: "Células musculares estriadas",
      C: "Células responsáveis pela produção de insulina",
      D: "Células sanguíneas envolvidas na defesa imunológica"
    },
    "Resposta": "D",
    "Motivo": "Os leucócitos são células sanguíneas envolvidas na defesa imunológica, desempenhando um papel crucial no sistema imunológico ao combaterem patógenos e agentes invasores."
  },
  {
    "Pergunta": "O que é a homeostase?",
    "Opcoes": {
      A: "Processo de reprodução celular",
      B: "Mecanismo de equilíbrio interno no organismo",
      C: "Processo de síntese de lipídios",
      D: "Mecanismo de regulação da temperatura corporal"
    },
    "Resposta": "B",
    "Motivo": "A homeostase é o mecanismo de equilíbrio interno no organismo, permitindo a regulação de variáveis fisiológicas, como temperatura, pH e concentração de substâncias, para manter condições ideais para a vida."
  },
  {
    "Pergunta": "O que são os neurônios?",
    "Opcoes": {
      A: "Células do sistema digestório",
      B: "Células do sistema muscular",
      C: "Células do sistema nervoso",
      D: "Células do sistema circulatório"
    },
    "Resposta": "C",
    "Motivo": "Os neurônios são células do sistema nervoso responsáveis pela transmissão de sinais elétricos e químicos, permitindo a comunicação entre diferentes partes do corpo e a resposta a estímulos."
  },
  {
    "Pergunta": "O que é a clonagem?",
    "Opcoes": {
      A: "Processo de reprodução sexuada",
      B: "Processo de reprodução assexuada",
      C: "Processo de manipulação genética para criar organismos geneticamente idênticos",
      D: "Processo de reprodução de células somáticas"
    },
    "Resposta": "C",
    "Motivo": "A clonagem é o processo de criar organismos geneticamente idênticos, seja por reprodução assexuada natural ou por técnicas de manipulação genética em laboratório."
  },

    
     {
    "Pergunta": "O que é a mutação genética?",
    "Opcoes": {
      A: "Processo de duplicação de genes",
      B: "Processo de recombinação de cromossomos",
      C: "Alteração no material genético que pode ser herdada",
      D: "Processo de eliminação de genes"
    },
    "Resposta": "C",
    "Motivo": "A mutação genética é uma alteração no material genético de um organismo que pode ser herdada e resulta em variações nas características hereditárias."
  },
  {
    "Pergunta": "O que é a biodiversidade?",
    "Opcoes": {
      A: "Número total de seres humanos em um ecossistema",
      B: "Variedade de vida em todas as formas, níveis e combinações",
      C: "Número total de espécies em um ecossistema",
      D: "Variedade de plantas em um determinado ambiente"
    },
    "Resposta": "B",
    "Motivo": "A biodiversidade refere-se à variedade de vida em todas as formas, níveis e combinações, incluindo diversidade genética, de espécies e de ecossistemas."
  },
  {
    "Pergunta": "O que são os ecossistemas aquáticos?",
    "Opcoes": {
      A: "Ambientes terrestres com plantas e animais",
      B: "Ambientes com água salgada",
      C: "Ambientes com água doce",
      D: "Ambientes com ar e solo"
    },
    "Resposta": "C",
    "Motivo": "Os ecossistemas aquáticos são ambientes que incluem corpos d'água como rios, lagos e oceanos, sendo classificados como ecossistemas de água doce ou ecossistemas marinhos."
  },
  {
    "Pergunta": "O que são os ecossistemas terrestres?",
    "Opcoes": {
      A: "Ambientes com água doce",
      B: "Ambientes com água salgada",
      C: "Ambientes com ar e solo",
      D: "Ambientes com plantas e animais aquáticos"
    },
    "Resposta": "C",
    "Motivo": "Os ecossistemas terrestres são ambientes que incluem áreas de solo e atmosfera, onde plantas e animais terrestres interagem entre si e com o ambiente físico."
  },
  {
    "Pergunta": "O que são os decompositores em um ecossistema?",
    "Opcoes": {
      A: "Organismos que produzem alimentos por meio da fotossíntese",
      B: "Organismos que se alimentam de outros organismos",
      C: "Organismos que quebram matéria orgânica em substâncias mais simples",
      D: "Organismos que competem por recursos naturais"
    },
    "Resposta": "C",
    "Motivo": "Os decompositores são organismos que desempenham o papel crucial de quebrar matéria orgânica em substâncias mais simples, facilitando a reciclagem de nutrientes em um ecossistema."
  },
  {
    "Pergunta": "O que é a teoria celular?",
    "Opcoes": {
      A: "Idea de que todos os seres vivos são formados por células",
      B: "Idea de que os seres vivos não são compostos por células",
      C: "Idea de que apenas animais são formados por células",
      D: "Idea de que apenas plantas são formadas por células"
    },
    "Resposta": "A",
    "Motivo": "A teoria celular é a ideia fundamental de que todos os seres vivos são formados por células, sendo a célula a unidade básica da vida."
  },
  {
    "Pergunta": "O que são as enzimas?",
    "Opcoes": {
      A: "Moléculas que produzem energia",
      B: "Moléculas que compõem a estrutura celular",
      C: "Moléculas que aceleram reações químicas",
      D: "Moléculas que transportam oxigênio"
    },
    "Resposta": "C",
    "Motivo": "As enzimas são moléculas que atuam como catalisadores, acelerando reações químicas em organismos vivos sem serem consumidas durante o processo."
  },
  


    {
    "Pergunta": "Explique o processo de transcrição do DNA.",
    "Opcoes": {
      A: "Síntese de proteínas a partir do RNA mensageiro",
      B: "Síntese de RNA a partir do DNA",
      C: "Quebra do RNA em aminoácidos",
      D: "Replicação do DNA"
    },
    "Resposta": "B",
    "Motivo": "A transcrição é o processo no qual a informação genética contida no DNA é transcrita para formar uma molécula de RNA mensageiro (mRNA), que servirá como molde para a síntese de proteínas."
  },
  {
    "Pergunta": "Qual é o papel dos ribossomos na síntese de proteínas?",
    "Opcoes": {
      A: "Transporte de aminoácidos até o local de síntese",
      B: "Quebra das moléculas de RNA",
      C: "Síntese de aminoácidos",
      D: "Leitura do código genético do mRNA"
    },
    "Resposta": "D",
    "Motivo": "Os ribossomos têm o papel crucial de ler o código genético presente no mRNA durante o processo de tradução, facilitando a síntese de proteínas com base nesse código."
  },
  {
    "Pergunta": "Explique o ciclo celular e suas principais fases.",
    "Opcoes": {
      A: "Processo de divisão celular que resulta em células haploides",
      B: "Processo de divisão celular que resulta em células diploides",
      C: "Processo de reprodução assexuada",
      D: "Processo de reprodução sexuada"
    },
    "Resposta": "B",
    "Motivo": "O ciclo celular é o conjunto de eventos que ocorre desde a formação de uma célula até sua divisão. As principais fases são a interfase (G1, S e G2) e a mitose (ou meiose em células germinativas), onde ocorre a divisão celular propriamente dita."
  },
  {
    "Pergunta": "Como ocorre a regulação da expressão gênica em um organismo?",
    "Opcoes": {
      A: "Pela síntese de proteínas reguladoras",
      B: "Por meio da replicação do DNA",
      C: "Pela ação de enzimas digestivas",
      D: "Por processos de transcrição e tradução"
    },
    "Resposta": "A",
    "Motivo": "A regulação da expressão gênica envolve a síntese de proteínas reguladoras que controlam os processos de transcrição e tradução, determinando quais genes serão ativados e expressos em determinado momento."
  },
  {
    "Pergunta": "O que são células-tronco e qual é o seu potencial terapêutico?",
    "Opcoes": {
      A: "Células especializadas do sistema nervoso",
      B: "Células com capacidade de se diferenciar em diversos tipos celulares",
      C: "Células do sistema imunológico",
      D: "Células reprodutivas"
    },
    "Resposta": "B",
 
    "Motivo": "Células-tronco são células com potencial de se diferenciar em diversos tipos celulares. Seu potencial terapêutico reside na capacidade de regenerar tecidos danificados ou substituir células perdidas devido a lesões ou doenças."},
    
  {
    "Pergunta": "Descreva o processo de osmose em uma célula.",
    "Opcoes": {
      A: "Movimento de moléculas de soluto de uma área de alta concentração para uma área de baixa concentração",
      B: "Passagem de água do meio hipotônico para o meio hipertônico",
      C: "Transporte ativo de íons através da membrana celular",
      D: "Fagocitose de partículas sólidas pela célula"
    },
    "Resposta": "B",
    "Motivo": "O processo de osmose em uma célula refere-se à passagem de água do meio com menor concentração de solutos (hipotônico) para o meio com maior concentração (hipertônico), buscando igualar as concentrações de solutos nos dois lados da membrana celular."
  },
  {
    "Pergunta": "Como ocorre a herança genética ligada ao cromossomo X?",
    "Opcoes": {
      A: "Apenas passa do pai para o filho",
      B: "Afeta apenas os descendentes do sexo masculino",
      C: "Afeta apenas os descendentes do sexo feminino",
      D: "Pode ser transmitida tanto pelo pai quanto pela mãe, mas se expressa mais frequentemente em um sexo"
    },
    "Resposta": "D",
    "Motivo": "A herança genética ligada ao cromossomo X pode ser transmitida por ambos os pais, mas sua expressão é mais frequente em um dos sexos. Exemplos incluem a daltonismo e a hemofilia."
  },
  {
    "Pergunta": "Explique os diferentes tipos de seleção natural.",
    "Opcoes": {
      A: "Seleção natural direcional, estabilizadora e disruptiva",
      B: "Seleção artificial, seleção sexual e seleção temporal",
      C: "Seleção positiva e seleção negativa",
      D: "Seleção natural e seleção artificial"
    },
    "Resposta": "A",
    "Motivo": "Os diferentes tipos de seleção natural incluem a direcional (favorecendo um extremo do fenótipo), estabilizadora (favorecendo o fenótipo intermediário) e disruptiva (favorecendo extremos diferentes). Cada tipo atua de maneira específica sobre a variabilidade genética de uma população."
  },
  {
    "Pergunta": "Como a mitose e a meiose diferem em termos de resultado e função?",
    "Opcoes": {
      A: "A mitose produz células haploides para a reprodução, enquanto a meiose produz células diploides para o crescimento e manutenção do organismo",
      B: "A mitose produz células diploides para o crescimento e manutenção do organismo, enquanto a meiose produz células haploides para a reprodução",
      C: "Ambas produzem células diploides para o crescimento e manutenção do organismo",
      D: "Ambas produzem células haploides para a reprodução"
    },
    "Resposta": "B",
    "Motivo": "A mitose produz células geneticamente idênticas e diploides para o crescimento, desenvolvimento e reparo de tecidos. A meiose, por sua vez, produz células haploides, os gametas, necessárias para a reprodução sexuada e a variabilidade genética."
  },
  {
    "Pergunta": "Explique como as enzimas participam de processos metabólicos.",
    "Opcoes": {
      A: "São moléculas de armazenamento de energia",
      B: "Atuam como catalisadores, acelerando reações químicas nos processos metabólicos",
      C: "Realizam a fotossíntese",
      D: "Participam da replicação do DNA"
    },
    "Resposta": "B",
    "Motivo": "As enzimas são moléculas proteicas que atuam como catalisadores, acelerando reações químicas nos processos metabólicos. Elas diminuem a energia de ativação necessária para iniciar uma reação, facilitando as transformações químicas dentro das células."
  },
  {
    "Pergunta": "Como a regulação hormonal afeta o funcionamento do corpo?",
    "Opcoes": {
      A: "Inibindo a síntese de proteínas",
      B: "Controlando o transporte de íons",
      C: "Regulando o equilíbrio ácido-base",
      D: "Coordenando e controlando diversas funções fisiológicas por meio de sinais químicos"
    },
    "Resposta": "D",
    "Motivo": "A regulação hormonal coordena e controla diversas funções fisiológicas no corpo, transmitindo sinais químicos para regular processos como crescimento, metabolismo, reprodução e resposta ao estresse."
  },
   {
    "Pergunta": "Como a variabilidade genética contribui para a evolução das espécies?",
    "Opcoes": {
      A: "Variabilidade genética não influencia a evolução",
      B: "Contribui para a adaptação das espécies a diferentes ambientes e condições, permitindo a seleção natural atuar",
      C: "Variabilidade genética leva à extinção de espécies",
      D: "A variabilidade genética é resultado apenas da manipulação humana em laboratório"
    },
    "Resposta": "B",
    "Motivo": "A variabilidade genética é fundamental para a evolução das espécies, pois proporciona a matéria-prima para a seleção natural atuar. A adaptação das espécies a diferentes ambientes ocorre através da preservação e transmissão de características vantajosas presentes na variabilidade genética."
  },

    
    {
    "Pergunta": "Descreva a estrutura do DNA e explique a importância da sua dupla hélice",
    "Opcoes": {
      A: "DNA é uma molécula única em forma de hélice, e a dupla hélice não tem relevância biológica",
      B: "DNA é composto por duas fitas antiparalelas, formando uma dupla hélice, e essa estrutura é essencial para a replicação e transmissão de informações genéticas",
      C: "DNA é uma molécula única, e a dupla hélice é uma estrutura temporária durante a replicação",
      D: "A dupla hélice do DNA é irrelevante para os processos biológicos"
    },
    "Resposta": "B",
    "Motivo": "A estrutura do DNA consiste em duas fitas antiparalelas, formando uma dupla hélice. Essa organização é essencial para processos como replicação, transcrição e tradução, permitindo a transmissão precisa das informações genéticas."
  },
  {
    "Pergunta": "Quais são os componentes fundamentais de um nucleotídeo do DNA? Descreva sua estrutura.",
    "Opcoes": {
      A: "Açúcar ribose, base nitrogenada e três grupos fosfato",
      B: "Açúcar desoxirribose, base nitrogenada e três grupos fosfato",
      C: "Açúcar desoxirribose, base nitrogenada e um grupo fosfato",
      D: "Açúcar ribose, base nitrogenada e um grupo fosfato"
    },
    "Resposta": "B",
    "Motivo": "Um nucleotídeo do DNA é composto por açúcar desoxirribose, uma base nitrogenada (adenina, timina, citosina ou guanina) e um grupo fosfato. Essa estrutura forma a unidade básica para a construção da cadeia de DNA."
  },
  {
    "Pergunta": "Explique o processo de replicação do DNA, incluindo as enzimas envolvidas e sua importância.",
    "Opcoes": {
      A: "A replicação do DNA não envolve enzimas e é um processo passivo",
      B: "Enzimas como DNA polimerase sintetizam uma nova fita de DNA complementar à fita existente, garantindo a duplicação do material genético",
      C: "RNA polimerase é a principal enzima na replicação do DNA, sintetizando uma nova fita de RNA",
      D: "A replicação do DNA ocorre apenas durante a divisão celular, não envolvendo enzimas"
    },
    "Resposta": "B",
    "Motivo": "Durante a replicação do DNA, a enzima DNA polimerase sintetiza uma nova fita complementar à fita existente. Esse processo é essencial para garantir que as células filhas recebam uma cópia precisa do material genético durante a divisão celular."
  },
  {
    "Pergunta": "O que é a transcrição do DNA e como ela está relacionada à síntese de proteínas?",
    "Opcoes": {
      A: "Transcrição é a síntese direta de proteínas a partir do DNA",
      B: "É o processo de cópia do DNA para formar uma molécula de RNA mensageiro (mRNA), que servirá como molde para a síntese de proteínas",
      C: "Transcrição não tem relação com a síntese de proteínas",
      D: "RNA mensageiro é uma cópia exata do DNA, não envolvendo processos de transcrição"
    },
    "Resposta": "B",
    "Motivo": "A transcrição é o processo no qual uma molécula de RNA mensageiro (mRNA) é sintetizada a partir do DNA. O mRNA serve como molde para a síntese de proteínas durante o processo de tradução nos ribossomos."
  },
  {
    "Pergunta": "Explique o papel dos ribossomos na tradução do código genético durante a síntese de proteínas.",
    "Opcoes": {
      A: "Ribossomos não estão envolvidos na síntese de proteínas",
      B: "São responsáveis pela transcrição do RNA mensageiro",
      C: "Atuam na síntese de aminoácidos durante a replicação do DNA",
      D: "Leem o código genético do RNA mensageiro e coordenam a síntese de proteínas"
    },
    "Resposta": "D",
    "Motivo": "Os ribossomos têm o papel crucial de ler o código genético presente no RNA mensageiro (mRNA) durante o processo de tradução. Eles coordenam a síntese de proteínas, garantindo que os aminoácidos certos sejam unidos na ordem correta para formar a cadeia polipeptídica."
  },
  {
    "Pergunta": "O que são mutações genéticas e como podem afetar os organismos?",
    "Opcoes": {
      A: "Mutação genética é um processo benéfico que melhora as características dos organismos",
      B: "São alterações no DNA que podem surgir espontaneamente ou serem induzidas, podendo ter efeitos neutros, prejudiciais ou, em alguns casos, benéficos",
      C: "Mutação genética é um termo usado apenas para descrever doenças genéticas",
      D: "Mutação genética ocorre apenas em laboratório e não afeta os organismos na natureza"
    },
    "Resposta": "B",
    "Motivo": "Mutações genéticas são alterações no DNA que podem ocorrer espontaneamente ou serem induzidas. Elas podem ter efeitos neutros, prejudiciais ou, em alguns casos raros, benéficos, afetando a variabilidade genética e, consequentemente, a evolução das espécies."
  },
  
  {
    "Pergunta": "Explique a sequência das bases do DNA e como a informação genética é codificada.",
    "Opcoes": {
      A: "Sequência de bases A-G, T-C, onde cada trinca representa um aminoácido específico",
      B: "Sequência de bases A-T, C-G, onde cada trinca representa um nucleotídeo específico",
      C: "Sequência de bases U-A, G-C, onde cada trinca representa um aminoácido específico",
      D: "Sequência de bases A-T, C-G, onde cada trinca de bases (códon) representa um aminoácido específico"
    },
    "Resposta": "D",
    "Motivo": "A sequência de bases do DNA é composta por adenina (A), timina (T), citosina (C) e guanina (G). Durante a transcrição, a sequência de bases do RNA mensageiro (mRNA) é complementar, substituindo a timina por uracila (U). Os códons, trincas de bases no mRNA, representam aminoácidos específicos durante a síntese de proteínas."
  },
  {
    "Pergunta": "O que é um barramento das bases no DNA?",
    "Opcoes": {
      A: "Estrutura que impede a replicação do DNA",
      B: "Cadeia de aminoácidos ligados por pontes de hidrogênio",
      C: "Estrutura que limita a transcrição do DNA",
      D: "Cadeia de nucleotídeos unidos por pontes de hidrogênio formando a dupla hélice"
    },
    "Resposta": "D",
    "Motivo": "O barramento das bases no DNA refere-se à cadeia de nucleotídeos unidos por pontes de hidrogênio formando a dupla hélice. As bases nitrogenadas A (adenina) se emparelham com T (timina) e C (citosina) com G (guanina), estabilizando a estrutura e permitindo a correta transmissão da informação genética durante processos como replicação e transcrição."
  },
  {
    "Pergunta": "Qual é o papel das pontes de hidrogênio na estabilidade da dupla hélice do DNA?",
    "Opcoes": {
      A: "As pontes de hidrogênio desestabilizam a dupla hélice do DNA",
      B: "Atuam como ligações covalentes na formação da dupla hélice",
      C: "As pontes de hidrogênio são irrelevantes para a estabilidade do DNA",
      D: "São ligações não covalentes que mantêm as fitas complementares unidas"
    },
    "Resposta": "D",
    "Motivo": "As pontes de hidrogênio são ligações não covalentes formadas entre as bases complementares do DNA. Essas pontes mantêm as fitas antiparalelas unidas, conferindo estabilidade à dupla hélice. A especificidade na formação dessas pontes (A-T e C-G) é crucial para a precisão na transmissão da informação genética."
  },
  {
    "Pergunta": "Explique como as sequências de bases do DNA são transcritas em moléculas de RNA mensageiro (mRNA).",
    "Opcoes": {
      A: "RNA polimerase sintetiza diretamente as bases do mRNA",
      B: "RNA polimerase forma pontes de hidrogênio entre as bases do mRNA e do DNA",
      C: "RNA polimerase lê a sequência de bases do DNA e sintetiza uma molécula complementar de RNA",
      D: "A transcrição do DNA não está relacionada à formação de mRNA"
    },
    "Resposta": "C",
    "Motivo": "Durante a transcrição, a RNA polimerase lê a sequência de bases do DNA e sintetiza uma molécula complementar de RNA mensageiro (mRNA). As bases do mRNA são determinadas pela sequência de bases do DNA, seguindo a regra de emparelhamento A-T e C-G."
  },
  {
    "Pergunta": "Como o código genético presente na sequência de bases do mRNA é traduzido em proteínas durante o processo de tradução?",
    "Opcoes": {
      A: "A sequência de bases do mRNA é diretamente convertida em proteínas",
      B: "Ribossomos reconhecem a sequência de bases do mRNA e a traduzem em uma sequência de aminoácidos",
      C: "Código genético do mRNA é irrelevante para a síntese de proteínas",
      D: "RNA polimerase atua na tradução direta do código genético"
    },
    "Resposta": "B",
    "Motivo": "Durante a tradução, os ribossomos reconhecem a sequência de bases do mRNA em conjuntos de três, chamados códons. Cada códon corresponde a um aminoácido específico, e assim, a sequência de códons é traduzida em uma sequência de aminoácidos, formando a proteína."
  },
  {
    "Pergunta": "Explique como ocorre o processo de replicação do DNA e como as enzimas estão envolvidas nesse processo.",
    "Opcoes": {
      A: "Replicação do DNA é passiva e não envolve enzimas",
      B: "Enzimas como a DNA polimerase sintetizam uma nova fita de DNA complementar à fita existente, garantindo a duplicação do material genético",
      C: "RNA polimerase é a principal enzima na replicação do DNA, sintetizando uma nova fita de RNA",
      D: "Replicação do DNA ocorre apenas durante a divisão celular, não envolvendo enzimas"
    },
    "Resposta": "B",
    "Motivo": "Enzimas, especialmente a DNA polimerase, desempenham um papel fundamental na replicação do DNA. A DNA polimerase sintetiza uma nova fita de DNA complementar à fita existente, assegurando que as células filhas recebam cópias precisas do material genético durante a divisão celular."
  },
  {
    "Pergunta": "O que são nucleotídeos e como estão envolvidos na estrutura do DNA?",
    "Opcoes": {
      A: "Nucleotídeos são proteínas que compõem a estrutura do DNA",
      B: "São as subunidades que formam as cadeias de DNA, compostos por açúcar, base nitrogenada e um grupo fosfato",
      C: "Nucleotídeos são enzimas responsáveis pela replicação do DNA",
      D: "São os códons presentes na sequência de bases do DNA"
    },
    "Resposta": "B",
    "Motivo": "Nucleotídeos são as subunidades que formam as cadeias de DNA. Cada nucleotídeo é composto por um açúcar (desoxirribose no DNA), uma base nitrogenada (adenina, timina, citosina ou guanina) e um grupo fosfato. A sequência específica desses nucleotídeos constitui a informação genética no DNA."
  },
  {
    "Pergunta": "O que são pontes de hidrogênio e qual é o papel delas na estrutura do DNA?",
    "Opcoes": {
      A: "Pontes de hidrogênio são enzimas que facilitam a replicação do DNA",
      B: "São ligações covalentes que mantêm as fitas de DNA unidas",
      C: "São ligações não covalentes que formam pares de bases complementares e conferem estabilidade à dupla hélice do DNA",
      D: "Pontes de hidrogênio são responsáveis pela transcrição do DNA"
    },
    "Resposta": "C",
    "Motivo": "Pontes de hidrogênio são ligações não covalentes que ocorrem entre as bases nitrogenadas complementares do DNA. Elas formam pares específicos (A-T e C-G), garantindo a estabilidade da dupla hélice. Essa especificidade é crucial para a transmissão precisa da informação genética."
  },
  {
    "Pergunta": "Explique como a sequência das bases do DNA é transcrita em moléculas de RNA mensageiro (mRNA).",
    "Opcoes": {
      A: "RNA polimerase lê diretamente a sequência de bases do DNA e forma o mRNA",
      B: "RNA polimerase forma pontes de hidrogênio entre as bases do mRNA e do DNA",
      C: "A sequência de bases do DNA é diretamente convertida em RNA mensageiro durante a replicação",
      D: "RNA polimerase lê a sequência de bases do DNA e sintetiza uma molécula complementar de RNA"
    },
    "Resposta": "D",
    "Motivo": "Durante a transcrição, a RNA polimerase lê a sequência de bases do DNA e sintetiza uma molécula complementar de RNA mensageiro (mRNA). A sequência de bases do mRNA é determinada pela sequência de bases do DNA, seguindo a regra de emparelhamento A-T e C-G."
  },
  {
    "Pergunta": "Explique a diferença entre genes e alelos.",
    "Opcoes": {
      A: "Genes são unidades de informação genética, enquanto alelos são variantes específicas de um gene que ocupam o mesmo loci cromossômico",
      B: "Genes e alelos são termos intercambiáveis e têm o mesmo significado",
      C: "Genes referem-se às características físicas dos organismos, e alelos são as unidades de hereditariedade",
      D: "Genes são estruturas celulares, e alelos são os blocos de construção do DNA"
    },
    "Resposta": "A",
    "Motivo": "Genes são unidades de informação genética que contêm instruções para a síntese de proteínas. Alelos são diferentes formas de um gene específico que ocupam o mesmo loci cromossômico e influenciam características hereditárias."
  },
  {
    "Pergunta": "O que é herança mendeliana e quais são as leis de Mendel?",
    "Opcoes": {
      A: "Herança mendeliana refere-se à transmissão de características genéticas, e as leis de Mendel são princípios que descrevem a segregação independente dos genes e a herança independente de características",
      B: "Herança mendeliana está relacionada apenas à herança de características físicas",
      C: "Leis de Mendel descrevem a determinação do sexo dos organismos",
      D: "Herança mendeliana é um termo ultrapassado na genética moderna"
    },
    "Resposta": "A",
    "Motivo": "Herança mendeliana é o conjunto de padrões de herança genética observados por Gregor Mendel em seus experimentos com plantas. As leis de Mendel incluem a Lei da Segregação, que descreve a segregação de alelos durante a formação de gametas, e a Lei da Distribuição Independente, que aborda a herança independente de diferentes características genéticas."
  },
  {
    "Pergunta": "O que são genótipos e fenótipos?",
    "Opcoes": {
      A: "Genótipos são características observáveis, enquanto fenótipos são as informações genéticas dos organismos",
      B: "Genótipos referem-se à composição genética de um organismo, e fenótipos são as características observáveis resultantes dessa composição",
      C: "Genótipos e fenótipos são sinônimos e podem ser usados de forma intercambiável",
      D: "Genótipos e fenótipos são termos específicos para descrever características de plantas"
    },
    "Resposta": "B",
    "Motivo": "Genótipo refere-se à composição genética de um organismo, enquanto fenótipo é a expressão observável dessa composição, ou seja, as características físicas, bioquímicas e fisiológicas do organismo resultantes de sua interação com o ambiente."
  },
  {
    "Pergunta": "Explique a diferença entre homozigoto e heterozigoto.",
    "Opcoes": {
      A: "Homozigoto é um organismo com dois alelos diferentes para um gene, enquanto heterozigoto possui dois alelos idênticos",
      B: "Homozigoto e heterozigoto são termos intercambiáveis",
      C: "Homozigoto tem apenas um alelo para um gene específico, e heterozigoto possui dois alelos diferentes",
      D: "Homozigoto é um termo obsoleto na genética moderna"
    },
    "Resposta": "A",
    "Motivo": "Homozigoto é um organismo com dois alelos idênticos para um gene específico, seja dois alelos dominantes (homozigoto dominante) ou dois alelos recessivos (homozigoto recessivo). Heterozigoto possui dois alelos diferentes para o mesmo gene."
  },
  {
    "Pergunta": "O que são alelos múltiplos e como eles influenciam a expressão de características?",
    "Opcoes": {
      A: "Alelos múltiplos referem-se a vários genes que controlam a mesma característica, aumentando a variabilidade genética",
      B: "Alelos múltiplos são formas diferentes de um mesmo gene, cada uma contribuindo de maneira distinta para a expressão de uma característica específica",
      C: "Alelos múltiplos são uma anomalia genética sem relevância",
      D: "Alelos múltiplos são exclusivos de organismos não humanos"
    },
    "Resposta": "B",
    "Motivo": "Alelos múltiplos são diferentes formas ou variantes de um mesmo gene, cada um ocupando o mesmo loci cromossômico. Eles podem influenciar a expressão de uma característica de maneira distinta, contribuindo para a diversidade genética em uma população."
  },
   {
    "Pergunta": "O que é ligação gênica e como ela afeta a segregação de genes durante a formação de gametas?",
    "Opcoes": {
      A: "Ligação gênica é a tendência de alelos diferentes para segregarem independentemente durante a formação de gametas",
      B: "Ligação gênica é a ligação física entre alelos de genes diferentes, levando à sua segregação conjunta durante a formação de gametas",
      C: "Ligação gênica não tem impacto na segregação de genes",
      D: "Ligação gênica impede a segregação de genes durante a formação de gametas"
    },
    "Resposta": "B",
    "Motivo": "Ligação gênica refere-se à proximidade física de alelos de genes diferentes em um mesmo cromossomo. Quando dois genes estão ligados, eles tendem a ser herdados juntos, afetando a segregação durante a formação de gametas. A ligação gênica pode ser quebrada por meio de eventos de recombinação genética."
  },
  {
    "Pergunta": "O que são mapas genéticos e como são construídos?",
    "Opcoes": {
      A: "Mapas genéticos são representações gráficas dos cromossomos, indicando sua morfologia",
      B: "Mapas genéticos são representações visuais da localização dos genes em um cromossomo e da distância entre eles, construídos com base na taxa de mutação",
      C: "Mapas genéticos são irrelevantes para a genética",
      D: "Mapas genéticos representam a sequência de aminoácidos em uma proteína específica"
    },
    "Resposta": "B",
    "Motivo": "Mapas genéticos são representações visuais da localização relativa dos genes em um cromossomo e da distância entre eles. Eles são construídos com base em dados sobre a frequência de recombinação genética, que ocorre durante a formação de gametas. A unidade de medida comum em mapas genéticos é o centimorgan."
  },
  {
    "Pergunta": "O que é epistasia e como ela difere da interação gênica?",
    "Opcoes": {
      A: "Epistasia é quando um gene mascara ou modifica o efeito de outro gene. A interação gênica é quando dois ou mais genes influenciam um único fenótipo",
      B: "Epistasia e interação gênica são termos intercambiáveis",
      C: "Epistasia é a expressão de um único gene. A interação gênica refere-se à influência de genes diferentes em diferentes características",
      D: "Epistasia é um conceito ultrapassado na genética"
    },
    "Resposta": "A",
    "Motivo": "Epistasia ocorre quando a expressão de um gene mascara ou modifica a expressão de outro gene. Na interação gênica, dois ou mais genes influenciam um único fenótipo. Em resumo, a epistasia envolve a relação entre genes específicos, enquanto a interação gênica refere-se à influência conjunta de genes em um fenótipo."
  },
  {
    "Pergunta": "Quais são os níveis hierárquicos usados na taxonomia para classificar os seres vivos, do mais geral ao mais específico?",
    "Opcoes": {
      A: "Reino, Filo, Classe, Ordem, Família, Gênero, Espécie",
      B: "Espécie, Gênero, Família, Ordem, Classe, Filo, Reino",
      C: "Reino, Ordem, Família, Classe, Gênero, Espécie",
      D: "Filos, Classes, Famílias, Ordens, Gêneros, Espécies, Reinos"
    },
    "Resposta": "A",
    "Motivo": "Os níveis hierárquicos usados na taxonomia para classificar os seres vivos, do mais geral ao mais específico, são: Reino, Filo, Classe, Ordem, Família, Gênero, Espécie. Essa sequência representa uma abordagem sistemática para organizar e identificar a diversidade da vida com base em características compartilhadas."
  },
  {
    "Pergunta": "O que diferencia uma célula procarionte de uma célula eucarionte?",
    "Opcoes": {
      A: "As células procariontes têm núcleo definido, enquanto as células eucariontes não têm núcleo.",
      B: "Células procariontes possuem membrana nuclear, ao contrário das células eucariontes.",
      C: "Células procariontes não possuem membrana plasmática, ao contrário das células eucariontes.",
      D: "As células procariontes não possuem núcleo definido nem organelas membranosas, ao contrário das células eucariontes."
    },
    "Resposta": "D",
    "Motivo": "A principal diferença entre células procariontes e eucariontes é que as procariontes não possuem núcleo definido nem organelas membranosas internas, como mitocôndrias ou retículo endoplasmático. Já as células eucariontes possuem um núcleo definido e diversas organelas membranosas que desempenham funções específicas dentro da célula."
  },
  {
    "Pergunta": "Qual é o papel da enzima DNA polimerase na replicação do DNA?",
    "Opcoes": {
      A: "A DNA polimerase desempenha um papel estrutural na formação do esqueleto do DNA durante a replicação.",
      B: "É responsável pela transcrição do DNA em RNA durante a replicação.",
      C: "A DNA polimerase atua na síntese de novas cadeias de DNA complementares às cadeias existentes.",
      D: "Sua função é realizar a tradução do RNA mensageiro em proteínas durante a replicação.",
    },
    "Resposta": "C",
    "Motivo": "A DNA polimerase desempenha um papel crucial na replicação do DNA, sendo responsável pela síntese de novas cadeias de DNA complementares às cadeias existentes. Ela adiciona nucleotídeos à nova cadeia em crescimento, seguindo o emparelhamento de bases específico (A-T, C-G) com a cadeia molde existente."
  },
    
    {
    "Pergunta": "Qual é o nível mais amplo de classificação utilizado na taxonomia, que engloba todos os seres vivos?",
    "Opcoes": {
      A: "Reino",
      B: "Filo",
      C: "Classe",
      D: "Ordem"
    },
    "Resposta": "A",
    "Motivo": "O nível mais amplo de classificação na taxonomia é o Reino, que engloba todos os seres vivos. É a categoria que divide a vida em grandes grupos distintos com base em características fundamentais."
  },
  {
    "Pergunta": "Quantos reinos principais são comumente reconhecidos no sistema de classificação biológica?",
    "Opcoes": {
      A: "4",
      B: "5",
      C: "8",
      D: "10"
    },
    "Resposta": "B",
    "Motivo": "Atualmente, são comumente reconhecidos seis reinos principais no sistema de classificação biológica: Monera, Protista, Fungi, Plantae e Animalia. Essa classificação reflete as relações evolutivas entre os diferentes grupos de organismos."
  },
  {
    "Pergunta": "Qual é o reino que engloba organismos multicelulares, eucariontes, autotróficos e que realizam fotossíntese?",
    "Opcoes": {
      A: "Bacteria",
      B: "Archaea",
      C: "Plantae",
      D: "Animalia"
    },
    "Resposta": "C",
    "Motivo": "O reino Plantae engloba organismos multicelulares, eucariontes, autotróficos e capazes de realizar fotossíntese. As plantas são fundamentais na produção de oxigênio e na cadeia alimentar terrestre."
  },
  {
    "Pergunta": "Quais são as características típicas dos organismos pertencentes ao reino Animalia?",
    "Opcoes": {
      A: "Autotróficos, unicelulares e com parede celular",
      B: "Heterotróficos, multicelulares e sem parede celular",
      C: "Autotróficos, multicelulares e com parede celular",
      D: "Heterotróficos, unicelulares e sem parede celular"
    },
    "Resposta": "B",
    "Motivo": "Os organismos do reino Animalia são heterotróficos (dependentes de fontes externas para obter nutrientes), multicelulares e geralmente não possuem parede celular. Essas características são fundamentais na distinção desse reino."
  },
  {
    "Pergunta": "Quais são as características dos organismos pertencentes ao reino Fungi?",
    "Opcoes": {
      A: "Heterotróficos, unicelulares e móveis",
      B: "Heterotróficos, multicelulares e com parede celular",
      C: "Autotróficos, unicelulares e sem parede celular",
      D: "Heterotróficos, multicelulares e móveis"
    },
    "Resposta": "B",
    "Motivo": "Os organismos do reino Fungi são heterotróficos, multicelulares e geralmente possuem parede celular. Eles desempenham papéis importantes na decomposição e na ciclagem de nutrientes nos ecossistemas."
  },
  {
    "Pergunta": "Quais são as características dos organismos pertencentes ao reino Protista?",
    "Opcoes": {
      A: "Heterotróficos, multicelulares e sem parede celular",
      B: "Autotróficos, unicelulares e com parede celular",
      C: "Heterotróficos, unicelulares e com parede celular",
      D: "Autotróficos, multicelulares e móveis"
    },
    "Resposta": "C",
    "Motivo": "Os organismos do reino Protista podem ser heterotróficos ou autotróficos, são frequentemente unicelulares e alguns podem possuir parede celular. Esse reino abrange uma diversidade de organismos, como protozoários e algas unicelulares."
  },
  {
    "Pergunta": "Qual reino inclui organismos procariontes, unicelulares e que podem habitar ambientes extremos?",
    "Opcoes": {
      A: "Animalia",
      B: "Plantae",
      C: "Bacteria",
      D: "Fungi"
    },
    "Resposta": "C",
    "Motivo": "O reino Bacteria inclui organismos procariontes, geralmente unicelulares, e pode abranger espécies que habitam diversos ambientes, incluindo extremos. Esses organismos desempenham papéis cruciais nos ecossistemas."
  },
  {
    "Pergunta": "Em qual reino são encontrados organismos procariontes que podem habitar ambientes extremos, como fontes termais e ambientes salinos?",
    "Opcoes": {
      A: "Bacteria",
      B: "Plantae",
      C: "Animalia",
      D: "Fungi"
    },
    "Resposta": "A",
    "Motivo": "O reino Bacteria inclui organismos procariontes, como bactérias, que podem habitar ambientes extremos, como fontes termais e ambientes salinos. Essas bactérias desempenham papéis importantes na ciclagem de nutrientes."
  },
  {
    "Pergunta": "Qual é o reino que inclui organismos unicelulares e procariontes frequentemente encontrados em ambientes extremos, como fontes hidrotermais?",
    "Opcoes": {
      A: "Bacteria",
      B: "Plantae",
      C: "Animalia",
      D: "Fungi"
    },
    "Resposta": "A",
    "Motivo": "O reino Bacteria inclui organismos unicelulares e procariontes, muitos dos quais são encontrados em ambientes extremos, como fontes hidrotermais. Esses organismos são vitais para diversos processos biológicos e ecológicos."
  },
  {
    "Pergunta": "Em qual reino são encontrados organismos unicelulares e procariontes frequentemente associados a ambientes extremos, como águas termais e vulcões submarinos?",
    "Opcoes": {
      A: "Bacteria",
      B: "Animalia",
      C: "Protista",
      D: "Fungi"
    },
    "Resposta": "C",
    "Motivo": "O reino Protista inclui uma variedade de organismos unicelulares, alguns dos quais são procariontes e frequentemente associados a ambientes extremos, como águas termais e vulcões submarinos. Esses organismos exibem uma diversidade de formas e modos de vida."
  },
  {
    "Pergunta": "Qual reino abrange organismos multicelulares, eucariontes, autotróficos e capazes de realizar fotossíntese?",
    "Opcoes": {
      A: "Plantae",
      B: "Animalia",
      C: "Fungi",
      D: "Bacteria"
    },
    "Resposta": "A",
    "Motivo": "O reino Plantae abrange organismos multicelulares, eucariontes, autotróficos e capazes de realizar fotossíntese. As plantas desempenham um papel essencial na produção de oxigênio e na sustentação de muitos ecossistemas."
  },
  {
    "Pergunta": "Quais são as características dos organismos do reino Fungi?",
    "Opcoes": {
      A: "Heterotróficos, unicelulares e com parede celular",
      B: "Heterotróficos, multicelulares e sem parede celular",
      C: "Autotróficos, unicelulares e móveis",
      D: "Heterotróficos, unicelulares e móveis"
    },
    "Resposta": "B",
    "Motivo": "Os organismos do reino Fungi são heterotróficos, multicelulares e geralmente possuem parede celular. Eles desempenham um papel importante na decomposição e na ciclagem de nutrientes nos ecossistemas."
  },
  {
    "Pergunta": "Qual é o reino que inclui organismos multicelulares, eucariontes, heterotróficos e sem capacidade de locomoção?",
    "Opcoes": {
      A: "Plantae",
      B: "Animalia",
      C: "Fungi",
      D: "Protista"
    },
    "Resposta": "B",
    "Motivo": "O reino Animalia inclui organismos multicelulares, eucariontes, heterotróficos e geralmente sem capacidade de locomoção. Animais representam uma variedade diversificada de formas de vida e ocupam diferentes nichos ecológicos."
  },
  {
    "Pergunta": "Qual reino inclui organismos unicelulares e procariontes frequentemente encontrados em ambientes extremos, como fontes termais e ambientes salinos?",
    "Opcoes": {
      A: "Bacteria",
      B: "Plantae",
      C: "Animalia",
      D: "Fungi"
    },
    "Resposta": "A",
    "Motivo": "O reino Bacteria inclui organismos unicelulares e procariontes, muitos dos quais são encontrados em ambientes extremos, como fontes termais e ambientes salinos. Esses organismos desempenham papéis importantes na ciclagem de nutrientes e em processos biológicos diversos."
  },
  {
    "Pergunta": "Em qual reino são encontrados organismos unicelulares e procariontes que podem habitar ambientes extremos, como fontes hidrotermais?",
    "Opcoes": {
      A: "Bacteria",
      B: "Animalia",
      C: "Protista",
      D: "Fungi"
    },
    "Resposta": "A",
    "Motivo": "O reino Bacteria inclui organismos unicelulares e procariontes, muitos dos quais podem habitar ambientes extremos, como fontes hidrotermais. Esses organismos são fundamentais para a manutenção de processos biológicos e ecológicos nos diferentes ecossistemas."
  },
  {
    "Pergunta": "Qual reino abrange organismos unicelulares eucariontes frequentemente associados a ambientes aquáticos e alguns capazes de realizar fotossíntese?",
    "Opcoes": {
      A: "Bacteria",
      B: "Animalia",
      C: "Protista",
      D: "Fungi"
    },
    "Resposta": "C",
    "Motivo": "O reino Protista abrange organismos unicelulares eucariontes, muitos dos quais estão associados a ambientes aquáticos. Alguns protistas são capazes de realizar fotossíntese, contribuindo para a produção primária nos ecossistemas aquáticos."
  },
  {
    "Pergunta": "Qual reino inclui organismos multicelulares, eucariontes, autotróficos e frequentemente com tecidos especializados?",
    "Opcoes": {
      A: "Plantae",
      B: "Animalia",
      C: "Fungi",
      D: "Protista"
    },
    "Resposta": "A",
    "Motivo": "O reino Plantae inclui organismos multicelulares, eucariontes, autotróficos e frequentemente com tecidos especializados. Plantas desempenham um papel vital na produção de oxigênio e na sustentação de ecossistemas terrestres."
  }
  
  
    
      ]
    const perguntasMatematica = [
      {
  "Pergunta": "Qual é o valor de lim x->0 (sin(x)/x)?",
  "Opcoes": {
    A: "0",
    B: "1",
    C: "∞",
    D: "Indeterminado"
  },
  "Resposta": "B",
  "Motivo": "Esse limite é conhecido como o limite fundamental e é igual a 1."
},
    {
        "Pergunta": "Qual é a derivada da função f(x) = e^(2x) * cos(3x)?",
        "Opcoes": {
            "A": "2e^(2x) * cos(3x) - 3e^(2x) * sen(3x)",
            "B": "2e^(2x) * sen(3x) + 3e^(2x) * cos(3x)",
            "C": "4e^(2x) * cos(3x) - 9e^(2x) * sen(3x)",
            "D": "4e^(2x) * sen(3x) + 9e^(2x) * cos(3x)"
        },
        "Resposta": "A",
        "Motivo": "Utilizando a regra do produto e a regra da cadeia, obtemos a derivada como 2e^(2x) * cos(3x) - 3e^(2x) * sen(3x)."
    },
    {
        "Pergunta": "Calcule a integral definida ∫(2x + 3)dx de 1 a 5.",
        "Opcoes": {
            "A": "26",
            "B": "32",
            "C": "42",
            "D": "36"
        },
        "Resposta": "D", 
        "Motivo":`
        ∫(2x + 3)dx = (x^2 + 3x) avaliada de 1 a 5
        Avalie no limite superior (5): (5^2 + 3 * 5) = 25 + 15 = 40
        Avalie no limite inferior (1): (1^2 + 3 * 1) = 1 + 3 = 4
        Subtraia o limite inferior do superior: 40 - 4 = 36
        Portanto, resposta D. 36`
    },
    {
        "Pergunta": "Resolva a equação diferencial dy/dx = 2x - 1.",
        "Opcoes": {
            "A": "y = x^2 - x + C",
            "B": "y = x^2 - x",
            "C": "y = x^2 + x + C",
            "D": "y = x^2 + x"
        },
        "Resposta": "A",
        "Motivo": "A solução da equação diferencial dy/dx = 2x - 1 é y = x^2 - x + C, onde C é a constante de integração."
    },
    {
        "Pergunta": "Encontre a raiz quadrada positiva da equação x^2 - 4x + 4 = 0.",
        "Opcoes": {
            "A": "2",
            "B": "4",
            "C": "6",
            "D": "8"
        },
        "Resposta": "A",
        "Motivo": "A equação é equivalente a (x - 2)^2 = 0, então a raiz quadrada positiva é x - 2 = 0, resultando em x = 2."
    },
    {
        "Pergunta": "Calcule o limite lim x->2 (x^2 - 4) / (x - 2).",
        "Opcoes": {
            "A": "2",
            "B": "4",
            "C": "6",
            "D": "8"
        },
        "Resposta": "A",
        "Motivo": "Simplificando a expressão, obtemos lim x->2 (x + 2), que resulta em 4."
    },
    {
        "Pergunta": "Dada a matriz A = [[3, 1], [2, 4]], calcule A^2.",
        "Opcoes": {
            "A": "[[11, 7], [10, 14]]",
            "B": "[[9, 5], [6, 16]]",
            "C": "[[13, 9], [8, 18]]",
            "D": "[[7, 3], [4, 12]]"
        },
        "Resposta": "B",
        "Motivo": "A multiplicação de A por ela mesma (A^2) é [[9, 5], [6, 16]]."
    },
    {
        "Pergunta": "Se log(a) = 2 e log(b) = 3, qual é o valor de log(ab)?",
        "Opcoes": {
            "A": "5",
            "B": "6",
            "C": "7",
            "D": "8"
        },
        "Resposta": "C",
        "Motivo": "Usando a propriedade dos logaritmos, log(ab) = log(a) + log(b) = 2 + 3 = 5."
    },
{
    "Pergunta": "Resolva a equação sen(2x) = cos(x) para x no intervalo [0, 2π].",
    "Opcoes": {
        "A": "π/6",
        "B": "5π/6",
        "C": "11π/6",
        "D": "7π/6"
    },
    "Resposta": "B",
    "Motivo": "Simplificando a equação, encontramos que x = π/6 ou x = 5π/6 estão no intervalo [0, 2π]."
},
      {
        "Pergunta": "Quantos anagramas diferentes podem ser formados utilizando todas as letras da palavra 'MATHEMATICA'?",
        "Opcoes": {
            "A": "3628800",
            "B": "40320",
            "C": "181440",
            "D": "1663200"
        },
        "Resposta": "D",
        "Motivo": "O número de anagramas é dado por 11! no número de letras dividido pelos indixes em repetição, Portanto, temos 11 letras, a letra A que repete-se 3x, a letra M e T que repetem-se 2x. portanto devemos dividir o fatorial total pelas repetições 11! / 3! . 2! . 2! o que resulta na letra D 1663200"
    },
    {
        "Pergunta": "De quantas maneiras diferentes é possível escolher uma equipe de 3 pessoas de um grupo de 10?",
        "Opcoes": {
            "A": "120",
            "B": "210",
            "C": "252",
            "D": "1200"
        },
        "Resposta": "C",
        "Motivo": "O número de maneiras de escolher uma equipe de 3 pessoas de um grupo de 10 é dado por C(10, 3) = 252."
    },
    {
        "Pergunta": "Quantos números de 3 algarismos distintos podem ser formados usando os dígitos 1, 2 e 3?",
        "Opcoes": {
            "A": "3",
            "B": "6",
            "C": "9",
            "D": "12"
        },
        "Resposta": "B",
        "Motivo": "Há 3 opções para o primeiro algarismo, 2 opções para o segundo e 1 opção para o terceiro, totalizando 3 * 2 * 1 = 6 números."
    },
    {
        "Pergunta": "De quantas maneiras diferentes é possível organizar 5 livros em uma prateleira?",
        "Opcoes": {
            "A": "20",
            "B": "60",
            "C": "120",
            "D": "240"
        },
        "Resposta": "C",
        "Motivo": "O número de maneiras de organizar 5 livros em uma prateleira é dado por 5!, que é igual a 120."
    },
    {
        "Pergunta": "Quantos subconjuntos diferentes podem ser formados a partir de um conjunto com 4 elementos?",
        "Opcoes": {
            "A": "8",
            "B": "12",
            "C": "16",
            "D": "24"
        },
        "Resposta": "D",
        "Motivo": "Um conjunto com n elementos tem 2^n subconjuntos, portanto, um conjunto com 4 elementos tem 2^4 = 16 subconjuntos."
    },
    {
        "Pergunta": "De quantas maneiras diferentes é possível distribuir 10 livros idênticos entre 4 alunos?",
        "Opcoes": {
            "A": "210",
            "B": "84",
            "C": "120",
            "D": "252"
        },
        "Resposta": "B",
        "Motivo": "O problema é equivalente a distribuir 10 bolas idênticas em 4 urnas, o que é representado por C(13, 3) = 84."
    },
    {
        "Pergunta": "Quantos anagramas diferentes podem ser formados utilizando as letras da palavra 'PROBABILIDADE'?",
        "Opcoes": {
            "A": "3628800",
            "B": "2540160",
            "C": "181440",
            "D": "90720"
        },
        "Resposta": "B",
        "Motivo": "O número de anagramas é dado por 13!/(2! * 2!), pois há repetições de algumas letras."
    },
    {
        "Pergunta": "De quantas maneiras diferentes é possível escolher 2 cartas distintas de um baralho de 52 cartas?",
        "Opcoes": {
            "A": "102",
            "B": "104",
            "C": "156",
            "D": "260"
        },
        "Resposta": "C",
        "Motivo": "O número de maneiras de escolher 2 cartas distintas de um baralho de 52 cartas é dado por C(52, 2) = 156."
    },
    
    {
        "Pergunta": "Resolva a equação quadrática x^2 - 4x + 4 = 0.",
        "Opcoes": {
            "A": "Solução única: x = 2",
            "B": "Solução única: x = 4",
            "C": "Duas soluções reais: x = 2",
            "D": "Duas soluções reais: x = 4"
        },
        "Resposta": "A",
        "Motivo": "A equação é equivalente a (x - 2)^2 = 0, resultando em uma solução única: x = 2."
    },
    {
        "Pergunta": "Resolva a inequação x^2 - 9 > 0.",
        "Opcoes": {
            "A": "x < -3 ou x > 3",
            "B": "-3 < x < 3",
            "C": "x < -3 e x > 3",
            "D": "Nenhuma solução real"
        },
        "Resposta": "A",
        "Motivo": "Os pontos críticos são x = -3 e x = 3. Testando intervalos, encontramos que a inequação é verdadeira para x < -3 ou x > 3."
    },
    {
        "Pergunta": "Resolva a equação log₂(x) = 3.",
        "Opcoes": {
            "A": "x = 2",
            "B": "x = 4",
            "C": "x = 6",
            "D": "x = 8"
        },
        "Resposta": "D",
        "Motivo": "A solução da equação log₂(x) = 3 é x = 2^3 = 8."
    },
    {
        "Pergunta": "Resolva a inequação 2x + 5 < 3x - 1.",
        "Opcoes": {
            "A": "x < 6",
            "B": "x > 6",
            "C": "x < 3",
            "D": "x > 3"
        },
        "Resposta": "C",
        "Motivo": "Subtraindo 2x de ambos os lados, obtemos 5 < x - 1. Adicionando 1, resulta em 6 < x, ou seja, x > 3."
    },
    {
        "Pergunta": "Resolva a equação sen(x) = 0 para 0 ≤ x ≤ 2π.",
        "Opcoes": {
            "A": "x = 0, x = π, x = 2π",
            "B": "x = π/2, x = 3π/2",
            "C": "x = π, x = 2π",
            "D": "x = π/2, x = 5π/2"
        },
        "Resposta": "C",
        "Motivo": "As soluções são x = π e x = 2π, pois sen(x) = 0 nos múltiplos de π."
    },
    {
        "Pergunta": "Resolva a inequação -2x + 7 ≥ 5x - 3.",
        "Opcoes": {
            "A": "x ≤ 2",
            "B": "x ≥ 2",
            "C": "x ≤ 5",
            "D": "x ≥ 5"
        },
        "Resposta": "B",
        "Motivo": "Adicionando 2x e subtraindo 7 de ambos os lados, obtemos 10 ≥ 7x. Dividindo por 7, resulta em x ≤ 10/7."
    },
    {
        "Pergunta": "Resolva a equação exponencial 2^x = 16.",
        "Opcoes": {
            "A": "x = 2",
            "B": "x = 3",
            "C": "x = 4",
            "D": "x = 5"
        },
        "Resposta": "C",
        "Motivo": "A solução da equação 2^x = 16 é x = 4, pois 2 elevado à potência de 4 é igual a 16."
    },
    {
        "Pergunta": "Resolva a inequação 3x - 2 < 4 e 2x + 1 > 5.",
        "Opcoes": {
            "A": "1 < x < 2",
            "B": "x < 1 ou x > 2",
            "C": "x < 1 e x > 2",
            "D": "1 ≤ x ≤ 2"
        },
        "Resposta": "A",
        "Motivo": "A solução para 3x - 2 < 4 é x < 2, e a solução para 2x + 1 > 5 é x > 2/1, portanto, 1 < x < 2."
    },
     {
        "Pergunta": "Calcule a soma dos primeiros 10 termos da sequência aritmética: 3, 7, 11, ...",
        "Opcoes": {
            "A": "140",
            "B": "150",
            "C": "160",
            "D": "170"
        },
        "Resposta": "A",
        "Motivo": "A fórmula da soma dos primeiros n termos de uma sequência aritmética é Sn = n/2 * (a₁ + an). Neste caso, Sn = 10/2 * (3 + 39) = 140."
    },
    {
        "Pergunta": "Se log₃(x) = 2, qual é o valor de x?",
        "Opcoes": {
            "A": "3",
            "B": "6",
            "C": "8",
            "D": "9"
        },
        "Resposta": "D",
        "Motivo": "A definição de logaritmo nos diz que log₃(x) = 2 significa que 3^2 = x, então x = 9."
    },
    {
        "Pergunta": "Qual é a área de um triângulo com base 6 unidades e altura 8 unidades?",
        "Opcoes": {
            "A": "24",
            "B": "32",
            "C": "36",
            "D": "48"
        },
        "Resposta": "C",
        "Motivo": "A área de um triângulo é dada por (base * altura) / 2. Neste caso, (6 * 8) / 2 = 24."
    },
    {
        "Pergunta": "Se a + b = 10 e a - b = 4, qual é o valor de a?",
        "Opcoes": {
            "A": "3",
            "B": "5",
            "C": "7",
            "D": "9"
        },
        "Resposta": "C",
        "Motivo": "Somando as duas equações, obtemos 2a = 14, então a = 7."
    },
    {
        "Pergunta": "Calcule o produto escalar entre os vetores [2, -3] e [-4, 1].",
        "Opcoes": {
            "A": "11",
            "B": "-11",
            "C": "-14",
            "D": "14"
        },
        "Resposta": "C",
        "Motivo": "O produto escalar é dado por (2 * -4) + (-3 * 1) = -8 - 3 = -11."
    },
    {
        "Pergunta": "Qual é o valor de sen(π/6)?",
        "Opcoes": {
            "A": "1/2",
            "B": "√3/2",
            "C": "√2/2",
            "D": "1"
        },
        "Resposta": "B",
        "Motivo": "Sen(π/6) é igual a 1/2, de acordo com os valores trigonométricos comuns."
    },
    
    {
        "Pergunta": "Se f(x) = 2x + 1 e g(x) = x² - 3, qual é o valor de f(g(2))?",
        "Opcoes": {
            "A": "5",
            "B": "7",
            "C": "9",
            "D": "11"
        },
        "Resposta": "A",
        "Motivo": "Primeiro, encontramos g(2): g(2) = 2² - 3 = 1. Em seguida, calculamos f(g(2)): f(1) = 2 * 1 + 1 = 3."
    },
    {
        "Pergunta": "Resolva a equação log₄(x) = 2.",
        "Opcoes": {
            "A": "x = 2",
            "B": "x = 4",
            "C": "x = 8",
            "D": "x = 16"
        },
        "Resposta": "D",
        "Motivo": "A solução da equação log₄(x) = 2 é x = 4^2 = 16."
    },
    {
        "Pergunta": "Qual é o valor da média aritmética entre 15, 20, 25 e 30?",
        "Opcoes": {
            "A": "20",
            "B": "22.5",
            "C": "25",
            "D": "27.5"
        },
        "Resposta": "C",
        "Motivo": "A média aritmética é calculada somando os números e dividindo pelo número de elementos: (15 + 20 + 25 + 30) / 4 = 25."
    },
    {
        "Pergunta": "Se log₃(y) = 1/2, qual é o valor de y?",
        "Opcoes": {
            "A": "1",
            "B": "3",
            "C": "9",
            "D": "27"
        },
        "Resposta": "C",
        "Motivo": "A definição de logaritmo nos diz que log₃(y) = 1/2 significa que 3^(1/2) = y, então y = 9."
    },
    
    {
        "Pergunta": "Qual é o valor de lim x->0 (sin(x)/x)?",
        "Opcoes": {
            "A": "0",
            "B": "1",
            "C": "∞",
            "D": "Indeterminado"
        },
        "Resposta": "B",
        "Motivo": "Esse limite é conhecido como o limite fundamental e é igual a 1."
    },
    {
        "Pergunta": "Se A é uma matriz invertível, qual é a inversa de A^T (transposta de A)?",
        "Opcoes": {
            "A": "A",
            "B": "A^(-1)",
            "C": "A^T",
            "D": "A^(-T)"
        },
        "Resposta": "B",
        "Motivo": "A inversa da transposta de uma matriz invertível é a transposta da inversa da matriz original."
    },
    {
        "Pergunta": "Qual é o teorema que relaciona derivadas parciais mistas?",
        "Opcoes": {
            "A": "Teorema de Green",
            "B": "Teorema de Stokes",
            "C": "Teorema Fundamental do Cálculo",
            "D": "Teorema de Schwarz"
        },
        "Resposta": "D",
        "Motivo": "O Teorema de Schwarz estabelece a igualdade das derivadas parciais mistas em certas condições."
    },
    {
        "Pergunta": "O que representa o Teorema de Taylor na análise matemática?",
        "Opcoes": {
            "A": "Aproximação de funções por polinômios",
            "B": "Integração de funções trigonométricas",
            "C": "Soma de séries infinitas",
            "D": "Solução de equações diferenciais"
        },
        "Resposta": "A",
        "Motivo": "O Teorema de Taylor descreve a aproximação de funções por polinômios."
    },
    {
        "Pergunta": "Qual é a integral definida de x^2 de 0 a 1?",
        "Opcoes": {
            "A": "1/3",
            "B": "1/4",
            "C": "1/6",
            "D": "1/2"
        },
        "Resposta": "A",
        "Motivo": "A integral definida de x^2 de 0 a 1 é (1/3)."
    },
    {
        "Pergunta": "Qual é a soma dos coeficientes binomiais na expansão de (a + b)^4?",
        "Opcoes": {
            "A": "16",
            "B": "32",
            "C": "8",
            "D": "1"
        },
        "Resposta": "B",
        "Motivo": "Os coeficientes binomiais na expansão de (a + b)^4 são 1, 4, 6, 4, 1, e a soma é 16."
    },
    {
        "Pergunta": "O que é a transformada de Fourier de uma função?",
        "Opcoes": {
            "A": "A derivada da função",
            "B": "A integral da função",
            "C": "A função inversa",
            "D": "A representação em termos de senos e cossenos"
        },
        "Resposta": "D",
        "Motivo": "A transformada de Fourier representa uma função como uma soma de senos e cossenos."
    },
    {
        "Pergunta": "Qual é a equação diferencial que descreve a propagação do calor em uma barra unidimensional?",
        "Opcoes": {
            "A": "Equação de onda",
            "B": "Equação de Laplace",
            "C": "Equação de Poisson",
            "D": "Equação do calor"
        },
        "Resposta": "D",
        "Motivo": "A equação do calor descreve a variação da temperatura ao longo do tempo em uma barra unidimensional."
    },
    {
        "Pergunta": "O que é a matriz Jacobiana?",
        "Opcoes": {
            "A": "Determinante de uma matriz",
            "B": "Inversa de uma matriz",
            "C": "Matriz de coeficientes em um sistema linear",
            "D": "Matriz das derivadas parciais de um vetor de funções"
        },
        "Resposta": "D",
        "Motivo": "A matriz Jacobiana contém as derivadas parciais de um vetor de funções."
    },
    
    {
  "Pergunta": "Se uma função afim g(x) tem uma inclinação de 4 e passa pelo ponto (2, 10), qual é a equação de g(x)?",
  "Opcoes": {
    A: "g(x) = 4x + 2",
    B: "g(x) = 4x - 2",
    C: "g(x) = 2x + 4",
    D: "g(x) = 2x - 4"
  },
  "Resposta": "A",
  "Motivo": "Substituindo a inclinação (m) e o ponto (2, 10) na forma y = mx + b, obtemos g(x) = 4x + 2."
}, {
  "Pergunta": "Dada a função afim k(x) = -0.8x - 6, qual é o valor de x para k(x) = 0?",
  "Opcoes": {
    A: "-7.5",
    B: "-5",
    C: "-4",
    D: "-3"
  },
  "Resposta": "B",
  "Motivo": "Para encontrar o ponto onde k(x) = 0, resolvemos a equação -0.8x - 6 = 0, resultando em x = -5."
},{
  "Pergunta": "Se i(t) é a função que representa o investimento ao longo do tempo, e i(2) = 500 e i(5) = 1200, qual é a taxa de variação média?",
  "Opcoes": {
    A: "100",
    B: "200",
    C: "300",
    D: "400"
  },
  "Resposta": "C",
  "Motivo": "A taxa de variação média é calculada como (i(5) - i(2)) / (5 - 2), resultando em 300."
},
{
  "Pergunta": "Dada a reta definida por h(x) = 0.5x - 3, qual é a ordenada na origem?",
  "Opcoes": {
    A: "2",
    B: "-3",
    C: "0.5",
    D: "-1.5"
  },
  "Resposta": "D",
  "Motivo": "A ordenada na origem é o valor de y quando x = 0. Substituindo, obtemos h(0) = -3."
},
{
  "Pergunta": "Qual é a inclinação da reta definida pela função afim g(x) = -2x + 5?",
  "Opcoes": {
    A: "2",
    B: "-2",
    C: "-5",
    D: "5"
  },
  "Resposta": "B",
  "Motivo": "Na forma y = mx + b, a inclinação é o coeficiente angular. Para g(x), a inclinação é -2."
}

      
];
    const perguntasMusica = [
      {
    "Pergunta": "Quem é o lendário guitarrista conhecido por sua habilidade única e contribuições para o blues?",
    "Opcoes": {
      A: "B.B. King",
      B: "Eric Clapton",
      C: "Stevie Ray Vaughan",
      D: "Jimi Hendrix"
    },
    "Resposta": "A",
    "Motivo": "B.B. King é o lendário guitarrista conhecido por sua habilidade única e contribuições significativas para o blues."
  },
  {
    "Pergunta": "Qual é o nome do famoso produtor musical e artista conhecido como 'Wall of Sound'?",
    "Opcoes": {
      A: "Quincy Jones",
      B: "Phil Spector",
      C: "George Martin",
      D: "Rick Rubin"
    },
    "Resposta": "B",
    "Motivo": "Phil Spector é o famoso produtor musical conhecido por sua técnica 'Wall of Sound', influenciando a produção de diversas músicas."
  },
  {
    "Pergunta": "Qual é o álbum icônico da banda Nirvana lançado em 1991?",
    "Opcoes": {
      A: "In Utero",
      B: "Nevermind",
      C: "Bleach",
      D: "MTV Unplugged in New York"
    },
    "Resposta": "B",
    "Motivo": "'Nevermind' é o álbum icônico da banda Nirvana, apresentando sucessos como 'Smells Like Teen Spirit' e 'Come as You Are'."
  },
  {
    "Pergunta": "Quem é considerado o 'Rei do Reggae'?",
    "Opcoes": {
      A: "Peter Tosh",
      B: "Jimmy Cliff",
      C: "Bob Marley",
      D: "Bunny Wailer"
    },
    "Resposta": "C",
    "Motivo": "Bob Marley é considerado o 'Rei do Reggae', sendo uma figura central na popularização e difusão do reggae pelo mundo."
  },
  {
    "Pergunta": "Qual é o nome da vocalista da banda Evanescence?",
    "Opcoes": {
      A: "Amy Lee",
      B: "Sharon den Adel",
      C: "Lzzy Hale",
      D: "Floor Jansen"
    },
    "Resposta": "A",
    "Motivo": "Amy Lee é a vocalista da banda Evanescence, conhecida por sua poderosa voz e por sucessos como 'Bring Me to Life' e 'My Immortal'."
  },
  {
    "Pergunta": "Qual é o gênero musical associado ao cantor Frank Sinatra?",
    "Opcoes": {
      A: "Jazz",
      B: "Blues",
      C: "Country",
      D: "R&B"
    },
    "Resposta": "A",
    "Motivo": "Frank Sinatra é associado ao gênero musical jazz, sendo uma das figuras mais influentes e aclamadas do século XX."
  },
  {
    "Pergunta": "Quem é a lendária cantora conhecida como 'A Rainha do Jazz'?",
    "Opcoes": {
      A: "Nina Simone",
      B: "Ella Fitzgerald",
      C: "Billie Holiday",
      D: "Diana Krall"
    },
    "Resposta": "B",
    "Motivo": "Ella Fitzgerald é conhecida como 'A Rainha do Jazz', destacando-se por sua incrível técnica vocal e interpretação única."
  },
  {
    "Pergunta": "Qual é o álbum clássico da banda Led Zeppelin lançado em 1971?",
    "Opcoes": {
      A: "Physical Graffiti",
      B: "IV",
      C: "Houses of the Holy",
      D: "Led Zeppelin I"
    },
    "Resposta": "B",
    "Motivo": "'Led Zeppelin IV', também conhecido como 'Untitled' ou 'Four Symbols', é o álbum clássico da banda Led Zeppelin, incluindo a épica 'Stairway to Heaven'."
  },
  {
    "Pergunta": "Qual é o nome do álbum conceitual da banda Pink Floyd lançado em 1979?",
    "Opcoes": {
      A: "Animals",
      B: "Wish You Were Here",
      C: "The Wall",
      D: "The Dark Side of the Moon"
    },
    "Resposta": "C",
    "Motivo": "'The Wall' é o álbum conceitual da banda Pink Floyd lançado em 1979, explorando temas como alienação e isolamento."
  },
  {
    "Pergunta": "Quem é o lendário guitarrista conhecido por sua habilidade técnica e pelo uso da técnica de tapping?",
    "Opcoes": {
      A: "Jimi Hendrix",
      B: "Eric Clapton",
      C: "Jimmy Page",
      D: "Eddie Van Halen"
    },
    "Resposta": "D",
    "Motivo": "Eddie Van Halen é o lendário guitarrista conhecido por sua habilidade técnica e por popularizar a técnica de tapping na guitarra."
  },
   {
    "Pergunta": "Nirvana corresponde a qual gênero musical?",
    "Opcoes": {
      A: "Grunge",
      B: "Post Rock",
      C: "Nu Metal",
      D: "Punk"
    },
    "Resposta": "A",
    "Motivo": "Nirvana é associado ao gênero Grunge, sendo uma das bandas mais influentes desse movimento nos anos 90."
  },
  {
    "Pergunta": "Metallica é conhecido por qual estilo musical?",
    "Opcoes": {
      A: "Heavy Metal",
      B: "Death Metal",
      C: "Metal Alternativo",
      D: "Thrash Metal"
    },
    "Resposta": "D",
    "Motivo": "Metallica é conhecido pelo estilo Thrash Metal, sendo uma das bandas mais importantes e influentes do gênero."
  },
  {
    "Pergunta": "Qual gênero musical é característico da banda Radiohead?",
    "Opcoes": {
      A: "Alternative Rock",
      B: "Post Punk",
      C: "Indie Pop",
      D: "New Wave"
    },
    "Resposta": "A",
    "Motivo": "Radiohead é característico do gênero Alternative Rock, explorando elementos experimentais em sua música."
  },
  {
    "Pergunta": "Que gênero musical é associado à banda Slipknot?",
    "Opcoes": {
      A: "Nu Metal",
      B: "Metalcore",
      C: "Gothic Metal",
      D: "Industrial Metal"
    },
    "Resposta": "A",
    "Motivo": "Slipknot é associado ao gênero Nu Metal, conhecido por sua fusão de elementos do metal, rap e música industrial."
  },
  {
    "Pergunta": "Pearl Jam é mais conhecido por qual gênero musical?",
    "Opcoes": {
      A: "Grunge",
      B: "Post Rock",
      C: "Britpop",
      D: "Emo"
    },
    "Resposta": "A",
    "Motivo": "Pearl Jam é mais conhecido pelo gênero Grunge, sendo uma das bandas pioneiras desse movimento junto com Nirvana e Soundgarden."
  },
  {
    "Pergunta": "Que estilo musical caracteriza a banda Red Hot Chili Peppers?",
    "Opcoes": {
      A: "Funk Rock",
      B: "Glam Metal",
      C: "Punk Rock",
      D: "Prog Rock"
    },
    "Resposta": "A",
    "Motivo": "Red Hot Chili Peppers é caracterizado pelo estilo Funk Rock, incorporando elementos de funk, punk e rock alternativo em sua música."
  },
  {
    "Pergunta": "A que gênero musical a banda AC/DC pertence principalmente?",
    "Opcoes": {
      A: "Hard Rock",
      B: "Thrash Metal",
      C: "Glam Metal",
      D: "Prog Metal"
    },
    "Resposta": "A",
    "Motivo": "AC/DC pertence principalmente ao gênero Hard Rock, sendo conhecidos por seus riffs de guitarra poderosos e performances enérgicas."
  },
  {
    "Pergunta": "Que estilo musical é associado à banda Green Day?",
    "Opcoes": {
      A: "Punk Rock",
      B: "Emo",
      C: "Pop Punk",
      D: "Goth Rock"
    },
    "Resposta": "C",
    "Motivo": "Green Day é associado ao estilo Pop Punk, contribuindo significativamente para a popularização desse subgênero do punk rock."
  },
  {
    "Pergunta": "A que gênero musical a banda Queen pertence principalmente?",
    "Opcoes": {
      A: "Rock",
      B: "Metal Alternativo",
      C: "Pop",
      D: "Glam Rock"
    },
    "Resposta": "A",
    "Motivo": "Queen pertence principalmente ao gênero Rock, mas sua música abrange uma variedade de estilos, incluindo elementos de glam rock e opera."
  },
  {
    "Pergunta": "Que estilo musical é característico da banda Coldplay?",
    "Opcoes": {
      A: "Pop Rock",
      B: "Indie Rock",
      C: "Post Punk",
      D: "Metal Alternativo"
    },
    "Resposta": "A",
    "Motivo": "Coldplay é característico do estilo Pop Rock, conhecido por suas melodias cativantes e letras introspectivas."
  },
  
   {
    "Pergunta": "Em que ano Les Paul anunciou sua primeira guitarra elétrica?",
    "Opcoes": {
      A: "1920",
      B: "1930",
      C: "1940",
      D: "1950"
    },
    "Resposta": "C",
    "Motivo": "Les Paul anunciou sua primeira guitarra elétrica, a Gibson Les Paul, na década de 1940, transformando a indústria da música com seu design inovador."
  },
  {
    "Pergunta": "Em que ano ocorreu o famoso festival de Woodstock, um marco na história da música?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "B",
    "Motivo": "O famoso festival de Woodstock ocorreu em 1969, tornando-se um marco na história da música e um símbolo da contracultura da década de 1970."
  },
  {
    "Pergunta": "Em que ano foi lançado o álbum 'Thriller' de Michael Jackson, um dos álbuns mais vendidos de todos os tempos?",
    "Opcoes": {
      A: "1970",
      B: "1980",
      C: "1990",
      D: "2000"
    },
    "Resposta": "B",
    "Motivo": "O álbum 'Thriller' de Michael Jackson foi lançado em 1982, tornando-se um dos álbuns mais vendidos de todos os tempos e influenciando a música pop."
  },
  {
    "Pergunta": "Em que ano o álbum 'The Dark Side of the Moon' do Pink Floyd foi lançado?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "B",
    "Motivo": "O álbum 'The Dark Side of the Moon' do Pink Floyd foi lançado em 1973, tornando-se um clássico do rock progressivo e uma das obras mais emblemáticas da banda."
  },
  {
    "Pergunta": "Em que ano ocorreu o surgimento do movimento punk, com bandas como Ramones e Sex Pistols?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "B",
    "Motivo": "O surgimento do movimento punk ocorreu na década de 1970, com bandas como Ramones e Sex Pistols, desafiando as normas da música e da sociedade."
  },
  {
    "Pergunta": "Em que ano foi lançado o álbum 'Back in Black' da banda AC/DC?",
    "Opcoes": {
      A: "1970",
      B: "1980",
      C: "1990",
      D: "2000"
    },
    "Resposta": "B",
    "Motivo": "O álbum 'Back in Black' da banda AC/DC foi lançado em 1980, tornando-se um dos álbuns mais vendidos da história e um clássico do hard rock."
  },
  {
    "Pergunta": "Em que ano ocorreu o festival de rock 'Live Aid', que arrecadou fundos para combater a fome na Etiópia?",
    "Opcoes": {
      A: "1970",
      B: "1980",
      C: "1990",
      D: "2000"
    },
    "Resposta": "B",
    "Motivo": "O festival de rock 'Live Aid' ocorreu em 1985, envolvendo apresentações simultâneas em Londres e Filadélfia, arrecadando fundos para combater a fome na Etiópia."
  },
  {
    "Pergunta": "Em que ano foi lançado o álbum 'Abbey Road' dos Beatles?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "B",
    "Motivo": "O álbum 'Abbey Road' dos Beatles foi lançado em 1969, sendo um dos últimos álbuns gravados pela banda e considerado um clássico do rock."
  },
  {
    "Pergunta": "Em que ano foi fundada a lendária banda de heavy metal Iron Maiden?",
    "Opcoes": {
      A: "1970",
      B: "1980",
      C: "1990",
      D: "2000"
    },
    "Resposta": "B",
    "Motivo": "A lendária banda de heavy metal Iron Maiden foi fundada em 1975, lançando seu álbum de estreia em 1980 e se tornando uma das principais influências do gênero."
  },
  
  {
    "Pergunta": "Em que ano foi lançado o álbum 'The Wall' do Pink Floyd, uma obra conceitual que se tornou um clássico do rock progressivo?",
    "Opcoes": {
      A: "1970",
      B: "1980",
      C: "1990",
      D: "2000"
    },
    "Resposta": "B",
    "Motivo": "O álbum 'The Wall' do Pink Floyd foi lançado em 1979, tornando-se uma obra conceitual e um clássico do rock progressivo, abordando temas como alienação e isolamento."
  },
  {
    "Pergunta": "Em que ano ocorreu a morte de Kurt Cobain, líder da banda Nirvana?",
    "Opcoes": {
      A: "1980",
      B: "1990",
      C: "2000",
      D: "2010"
    },
    "Resposta": "B",
    "Motivo": "A morte de Kurt Cobain, líder da banda Nirvana, ocorreu em 1994, marcando o fim de uma era no cenário musical e deixando um impacto duradouro."
  },
  {
    "Pergunta": "Em que ano foi lançado o álbum 'A Night at the Opera' do Queen, que inclui a icônica música 'Bohemian Rhapsody'?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "C",
    "Motivo": "O álbum 'A Night at the Opera' do Queen foi lançado em 1975, incluindo a icônica música 'Bohemian Rhapsody', que se tornou um marco na história da música."
  },
  {
    "Pergunta": "Em que ano foi lançado o álbum 'Rumours' da banda Fleetwood Mac, um dos álbuns mais vendidos de todos os tempos?",
    "Opcoes": {
      A: "1970",
      B: "1980",
      C: "1990",
      D: "2000"
    },
    "Resposta": "B",
    "Motivo": "O álbum 'Rumours' da banda Fleetwood Mac foi lançado em 1977, tornando-se um dos álbuns mais vendidos de todos os tempos e conquistando sucesso crítico e comercial."
  },
  {
    "Pergunta": "Em que ano ocorreu o lançamento da música 'Stairway to Heaven' do Led Zeppelin?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "B",
    "Motivo": "A música 'Stairway to Heaven' do Led Zeppelin foi lançada em 1971, tornando-se uma das músicas mais famosas e influentes do rock clássico."
  },
  {
    "Pergunta": "Em que ano foi lançada a música 'Imagine' de John Lennon, uma das mais conhecidas e inspiradoras de sua carreira solo?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "C",
    "Motivo": "A música 'Imagine' de John Lennon foi lançada em 1971 como parte de seu álbum solo, tornando-se uma das mais conhecidas e inspiradoras de sua carreira."
  },
  {
    "Pergunta": "Em que ano ocorreu o lançamento do álbum 'Purple Haze' de Jimi Hendrix, um dos guitarristas mais influentes da história do rock?",
    "Opcoes": {
      A: "1960",
      B: "1970",
      C: "1980",
      D: "1990"
    },
    "Resposta": "A",
    "Motivo": "O álbum 'Are You Experienced', que inclui a faixa 'Purple Haze', de Jimi Hendrix foi lançado em 1967, marcando o início da carreira do guitarrista e sua influência duradoura no rock."
  },
  {
    "Pergunta": "Em que ano foi lançada a música 'Like a Rolling Stone' de Bob Dylan, considerada uma das maiores canções de todos os tempos?",
    "Opcoes": {
      A: "1950",
      B: "1960",
      C: "1970",
      D: "1980"
    },
    "Resposta": "B",
    "Motivo": "A música 'Like a Rolling Stone' de Bob Dylan foi lançada em 1965, sendo considerada uma das maiores canções de todos os tempos e um marco na história da música."
  },
      
      {
    "Pergunta": "Quem é conhecido como 'The King of Rock and Roll'?",
    "Opcoes": {
      A: "Elvis Presley",
      B: "Chuck Berry",
      C: "Buddy Holly",
      D: "Little Richard"
    },
    "Resposta": "A",
    "Motivo": "Elvis Presley é conhecido como 'The King of Rock and Roll' devido à sua influência e sucesso no gênero musical."
  },
  {
    "Pergunta": "Qual é o instrumento principal de Charlie Parker, uma lenda do jazz?",
    "Opcoes": {
      A: "Saxofone",
      B: "Trompete",
      C: "Contrabaixo",
      D: "Bateria"
    },
    "Resposta": "A",
    "Motivo": "Charlie Parker, conhecido como 'Bird', era um virtuoso do saxofone e uma figura central no desenvolvimento do jazz moderno."
  },
  {
    "Pergunta": "Qual é o nome da vocalista da banda Paramore?",
    "Opcoes": {
      A: "Hayley Williams",
      B: "Amy Lee",
      C: "Shirley Manson",
      D: "Lzzy Hale"
    },
    "Resposta": "A",
    "Motivo": "Hayley Williams é a vocalista da banda Paramore, famosa por sucessos como 'Misery Business' e 'Ain't It Fun'."
  },
  {
    "Pergunta": "Quem é o famoso guitarrista da banda Queen?",
    "Opcoes": {
      A: "Brian May",
      B: "Jimi Hendrix",
      C: "Eric Clapton",
      D: "Jimmy Page"
    },
    "Resposta": "A",
    "Motivo": "Brian May é o famoso guitarrista da banda Queen, conhecido por suas habilidades únicas e contribuições musicais."
  },
  {
    "Pergunta": "Qual é o nome da banda de rock formada por Mick Jagger e Keith Richards?",
    "Opcoes": {
      A: "The Who",
      B: "The Rolling Stones",
      C: "Led Zeppelin",
      D: "The Beatles"
    },
    "Resposta": "B",
    "Motivo": "The Rolling Stones é a banda de rock formada por Mick Jagger e Keith Richards, sendo uma das mais duradouras e influentes da história."
  },
  {
    "Pergunta": "Quem é o lendário pianista de jazz conhecido por seu estilo inovador e virtuosismo?",
    "Opcoes": {
      A: "Oscar Peterson",
      B: "Thelonious Monk",
      C: "Duke Ellington",
      D: "Herbie Hancock"
    },
    "Resposta": "B",
    "Motivo": "Thelonious Monk é o lendário pianista de jazz conhecido por seu estilo inovador, dissonâncias e improvisações únicas."
  },
  {
    "Pergunta": "Qual é a canção de David Bowie que se tornou um hino e referência cultural?",
    "Opcoes": {
      A: "Life on Mars?",
      B: "Heroes",
      C: "Let's Dance",
      D: "Space Oddity"
    },
    "Resposta": "B",
    "Motivo": "'Heroes' de David Bowie tornou-se um hino e referência cultural, celebrando a resiliência e coragem."
  },
  {
    "Pergunta": "Qual é o gênero musical caracterizado por batidas rápidas, letras faladas e técnicas de scratch?",
    "Opcoes": {
      A: "Drum & Bass",
      B: "Hip Hop",
      C: "Rap",
      D: "Reggaton"
    },
    "Resposta": "B",
    "Motivo": "Hip Hop é o gênero musical caracterizado por batidas rápidas, letras faladas (como o subgenero rap) e técnicas de scratch, originando-se nas comunidades urbanas."
  },
  {
    "Pergunta": "Quem é conhecido como 'The Boss' e é famoso por sua energia no palco e músicas como 'Born to Run'?",
    "Opcoes": {
      A: "Bruce Springsteen",
      B: "Bob Dylan",
      C: "Tom Petty",
      D: "John Mellencamp"
    },
    "Resposta": "A",
    "Motivo": "Bruce Springsteen é conhecido como 'The Boss' e é famoso por sua energia no palco e músicas como 'Born to Run' e 'Dancing in the Dark'."
  }]
    const perguntasFilosofia = [
       {
    "Pergunta": "Quem é considerado o 'pai da filosofia' na tradição ocidental?",
    "Opcoes": {
      A: "Platão",
      B: "Aristóteles",
      C: "Sócrates",
      D: "Tales de Mileto"
    },
    "Resposta": "D",
    "Motivo": "Tales de Mileto é frequentemente considerado o 'pai da filosofia' na tradição ocidental, sendo um dos primeiros pensadores a buscar explicações racionais para o mundo natural."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por suas contribuições à ética e por ser o mestre de Platão?",
    "Opcoes": {
      A: "Sócrates",
      B: "Aristóteles",
      C: "Parmênides",
      D: "Heráclito"
    },
    "Resposta": "A",
    "Motivo": "Sócrates é conhecido por suas contribuições à ética e é considerado o mestre de Platão, influenciando significativamente o desenvolvimento da filosofia ocidental."
  },
  {
    "Pergunta": "Qual filósofo alemão é conhecido por suas obras sobre o materialismo histórico e a crítica ao capitalismo?",
    "Opcoes": {
      A: "Immanuel Kant",
      B: "Friedrich Nietzsche",
      C: "Karl Marx",
      D: "Arthur Schopenhauer"
    },
    "Resposta": "C",
    "Motivo": "Karl Marx é conhecido por suas obras sobre o materialismo histórico e a crítica ao capitalismo, sendo uma figura central no pensamento político e econômico."
  },
  {
    "Pergunta": "Qual filósofo existencialista francês é conhecido por suas reflexões sobre a liberdade e a responsabilidade individual?",
    "Opcoes": {
      A: "Albert Camus",
      B: "Jean-Paul Sartre",
      C: "Simone de Beauvoir",
      D: "Blaise Pascal"
    },
    "Resposta": "B",
    "Motivo": "Jean-Paul Sartre é conhecido por suas reflexões sobre o existencialismo, destacando a liberdade e a responsabilidade individual na construção do significado da vida."
  },
  {
    "Pergunta": "Qual filósofo chinês é considerado o fundador do taoísmo e autor do 'Tao Te Ching'?",
    "Opcoes": {
      A: "Confúcio",
      B: "Mencius",
      C: "Laozi",
      D: "Zhuangzi"
    },
    "Resposta": "C",
    "Motivo": "Laozi é considerado o fundador do taoísmo e é atribuído como autor do 'Tao Te Ching', um texto fundamental que aborda princípios do taoísmo e da filosofia chinesa."
  },
  {
    "Pergunta": "Qual filósofo medieval é conhecido por suas contribuições à filosofia escolástica e por conciliar a fé com a razão?",
    "Opcoes": {
      A: "Tomás de Aquino",
      B: "Agostinho de Hipona",
      C: "Guilherme de Ockham",
      D: "Anselmo de Cantuária"
    },
    "Resposta": "A",
    "Motivo": "Tomás de Aquino é conhecido por suas contribuições à filosofia escolástica, buscando conciliar a fé com a razão e influenciando o pensamento cristão."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por suas ideias sobre a teoria das ideias e a alegoria da caverna?",
    "Opcoes": {
      A: "Sócrates",
      B: "Aristóteles",
      C: "Platão",
      D: "Heráclito"
    },
    "Resposta": "C",
    "Motivo": "Platão é conhecido por suas ideias sobre a teoria das ideias e apresentou a alegoria da caverna para explicar a busca pelo conhecimento e a realidade além das aparências."
  },
  {
    "Pergunta": "Qual filósofo francês é conhecido por suas obras sobre a teoria do contrato social e a separação dos poderes?",
    "Opcoes": {
      A: "René Descartes",
      B: "Jean-Jacques Rousseau",
      C: "Voltaire",
      D: "Montesquieu"
    },
    "Resposta": "B",
    "Motivo": "Jean-Jacques Rousseau é conhecido por suas obras sobre a teoria do contrato social e influenciou a ideia de governança democrática e a separação dos poderes."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por sua filosofia cínica, que buscava viver de acordo com a natureza e desprezar as convenções sociais?",
    "Opcoes": {
      A: "Diógenes de Sinope",
      B: "Zenão de Cítio",
      C: "Epicuro",
      D: "Heráclito"
    },
    "Resposta": "A",
    "Motivo": "Diógenes de Sinope é conhecido por sua filosofia cínica, buscando viver de acordo com a natureza e desprezar as convenções sociais, destacando-se por seu estilo de vida simples e despojado."
  },
  {
    "Pergunta": "Qual filósofo alemão é conhecido por sua crítica à religião e à ideia de que Deus está morto?",
    "Opcoes": {
      A: "Arthur Schopenhauer",
      B: "Friedrich Nietzsche",
      C: "Karl Marx",
      D: "Immanuel Kant"
    },
    "Resposta": "B",
    "Motivo": "Friedrich Nietzsche é conhecido por sua crítica à religião e à ideia de que Deus está morto, explorando temas como a vontade de poder e o super-homem."
  },
  
  {
    "Pergunta": "Qual filósofo chinês é conhecido por suas ideias sobre a moralidade, respeito aos pais e governança benevolente?",
    "Opcoes": {
      A: "Confúcio",
      B: "Laozi",
      C: "Mencius",
      D: "Zhuangzi"
    },
    "Resposta": "A",
    "Motivo": "Confúcio é conhecido por suas ideias sobre a moralidade, respeito aos pais e governança benevolente, sendo uma figura central na filosofia confucionista."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por suas ideias sobre a felicidade e a busca pelo prazer moderado?",
    "Opcoes": {
      A: "Sócrates",
      B: "Aristóteles",
      C: "Epicuro",
      D: "Diógenes de Sinope"
    },
    "Resposta": "C",
    "Motivo": "Epicuro é conhecido por suas ideias sobre a felicidade e a busca pelo prazer moderado, destacando a importância da amizade e da simplicidade na vida."
  },
  {
    "Pergunta": "Qual filósofo alemão é considerado o fundador da fenomenologia, explorando a experiência direta e imediata da consciência?",
    "Opcoes": {
      A: "Immanuel Kant",
      B: "Friedrich Nietzsche",
      C: "Karl Marx",
      D: "Edmund Husserl"
    },
    "Resposta": "D",
    "Motivo": "Edmund Husserl é considerado o fundador da fenomenologia, uma abordagem filosófica que explora a experiência direta e imediata da consciência, influenciando muitos pensadores subsequentes."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por suas obras dialéticas e por ser o mestre de Aristóteles?",
    "Opcoes": {
      A: "Sócrates",
      B: "Platão",
      C: "Parmênides",
      D: "Heráclito"
    },
    "Resposta": "B",
    "Motivo": "Platão é conhecido por suas obras dialéticas e é considerado o mestre de Aristóteles, deixando um impacto duradouro na filosofia ocidental."
  },
  {
    "Pergunta": "Qual filósofo inglês é conhecido por suas contribuições à teoria política, especialmente sobre o contrato social e o estado de natureza?",
    "Opcoes": {
      A: "John Locke",
      B: "Thomas Hobbes",
      C: "David Hume",
      D: "Bertrand Russell"
    },
    "Resposta": "A",
    "Motivo": "John Locke é conhecido por suas contribuições à teoria política, explorando temas como o contrato social e o estado de natureza, influenciando o pensamento iluminista e democrático."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por suas reflexões sobre a busca da felicidade e a importância da virtude na vida ética?",
    "Opcoes": {
      A: "Sócrates",
      B: "Aristóteles",
      C: "Epicuro",
      D: "Diógenes de Sinope"
    },
    "Resposta": "B",
    "Motivo": "Aristóteles é conhecido por suas reflexões sobre a busca da felicidade e a importância da virtude na vida ética, desenvolvendo uma ética de virtudes que influenciou a filosofia moral ocidental."
  },
  
  
  {
    "Pergunta": "De acordo com Aristóteles, qual é a chave para alcançar a felicidade?",
    "Opcoes": {
      A: "Poder e riqueza",
      B: "Prazer imediato",
      C: "Busca pelo conhecimento e virtude",
      D: "Isolamento social"
    },
    "Resposta": "C",
    "Motivo": "Aristóteles acreditava que a chave para alcançar a felicidade era a busca pelo conhecimento (filosofia) e o cultivo de virtudes morais, encontrando o equilíbrio e a excelência no caráter."
  },
  {
    "Pergunta": "Na alegoria da caverna de Platão, o que as sombras na parede representam?",
    "Opcoes": {
      A: "As ideias perfeitas",
      B: "A realidade material",
      C: "Ilusões passageiras",
      D: "As emoções humanas"
    },
    "Resposta": "B",
    "Motivo": "Na alegoria da caverna de Platão, as sombras na parede representam a realidade material percebida pelos sentidos, que é uma mera ilusão em comparação com as ideias perfeitas."
  },
  {
    "Pergunta": "Qual filósofo grego propôs a ideia de que 'tudo flui' e que a mudança é a única constante no universo?",
    "Opcoes": {
      A: "Sócrates",
      B: "Aristóteles",
      C: "Parmênides",
      D: "Heráclito"
    },
    "Resposta": "D",
    "Motivo": "Heráclito propôs a ideia de que 'tudo flui', enfatizando a constante mudança como a única constante no universo, uma ideia oposta à de Parmênides, que defendia a imutabilidade."
  },
  {
    "Pergunta": "Como Sócrates contribuiu para a filosofia, apesar de não ter escrito suas próprias obras?",
    "Opcoes": {
      A: "Criou o método científico",
      B: "Desenvolveu a lógica formal",
      C: "Influenciou Platão, que registrou seus diálogos",
      D: "Fundou a Academia de Atenas"
    },
    "Resposta": "C",
    "Motivo": "Embora Sócrates não tenha escrito suas próprias obras, sua filosofia foi registrada por seu discípulo Platão, preservando seus diálogos e contribuições ao método socrático."
  },
  {
    "Pergunta": "Qual era a abordagem filosófica de Epicuro em relação à busca da felicidade?",
    "Opcoes": {
      A: "Buscar prazeres intensos a qualquer custo",
      B: "Evitar todos os tipos de prazer para alcançar a paz interior",
      C: "Buscar prazeres moderados e a tranquilidade da alma",
      D: "Buscar poder e domínio sobre os outros"
    },
    "Resposta": "C",
    "Motivo": "Epicuro defendia a busca de prazeres moderados e a tranquilidade da alma (ataraxia) como o caminho para alcançar a verdadeira felicidade e evitar dores excessivas."
  },
  {
    "Pergunta": "Na filosofia grega, o que significa a expressão 'gnōthi seauton' (γνῶθι σεαυτόν)?",
    "Opcoes": {
      A: "A busca pelo conhecimento divino",
      B: "Conheça a ti mesmo",
      C: "A compreensão do cosmos",
      D: "A sabedoria da natureza"
    },
    "Resposta": "B",
    "Motivo": "A expressão 'gnōthi seauton' significa 'Conheça a ti mesmo' e é associada à filosofia socrática, incentivando a autoconsciência e a reflexão sobre a própria natureza."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por sua concepção das ideias perfeitas e pela fundação da Academia de Atenas?",
    "Opcoes": {
      A: "Sócrates",
      B: "Aristóteles",
      C: "Parmênides",
      D: "Platão"
    },
    "Resposta": "D",
    "Motivo": "Platão é conhecido por suas ideias das formas ou ideias perfeitas, e fundou a Academia de Atenas, onde filósofos importantes como Aristóteles foram educados."
  },
  {
    "Pergunta": "Qual filósofo grego é conhecido por suas obras 'Ética a Nicômaco' e 'Política' e pela tutoria de Alexandre, o Grande?",
    "Opcoes": {
      A: "Sócrates",
      B: "Aristóteles",
      C: "Parmênides",
      D: "Heráclito"
    },
    "Resposta": "B",
    "Motivo": "Aristóteles é conhecido por suas obras 'Ética a Nicômaco' e 'Política', além de ser tutor de Alexandre, o Grande, influenciando a filosofia moral e política ocidental."
  },
  {
    "Pergunta": "Na ética aristotélica, como Aristóteles define a virtude?",
    "Opcoes": {
      A: "A virtude é inata, presente desde o nascimento.",
      B: "A virtude é adquirida através do conhecimento teórico.",
      C: "A virtude é a capacidade de fazer escolhas equilibradas e habituar-se a agir corretamente.",
      D: "A virtude é exclusivamente determinada pela herança genética."
    },
    "Resposta": "C",
    "Motivo": "Na ética aristotélica, Aristóteles define a virtude como a capacidade de fazer escolhas equilibradas, habituando-se a agir corretamente e alcançando o 'meio-termo' entre excessos e deficiências."
  },
  {
    "Pergunta": "De acordo com Aristóteles, o que é 'aretê'?",
    "Opcoes": {
      A: "A busca pela verdade absoluta.",
      B: "A virtude ou excelência moral.",
      C: "A abstenção de prazeres sensoriais.",
      D: "A contemplação filosófica profunda."
    },
    "Resposta": "B",
    "Motivo": "Em Aristóteles, 'aretê' refere-se à virtude ou excelência moral, representando o desenvolvimento de características positivas e a busca pela realização do potencial humano."
  },
  {
    "Pergunta": "Segundo Aristóteles, o que é necessário para alcançar a virtude?",
    "Opcoes": {
      A: "Apenas a instrução teórica é suficiente.",
      B: "A prática habitual de ações virtuosas.",
      C: "A orientação exclusiva de um mentor.",
      D: "A aceitação passiva de valores culturais."
    },
    "Resposta": "B",
    "Motivo": "Aristóteles argumenta que para alcançar a virtude, é necessário praticar habitualmente ações virtuosas, desenvolvendo hábitos que levam ao equilíbrio e à excelência moral."
  },
  {
    "Pergunta": "Qual é a relação entre a ética e a política na filosofia de Aristóteles?",
    "Opcoes": {
      A: "A ética e a política são independentes e não se relacionam.",
      B: "A ética é prioritária, enquanto a política é uma questão secundária.",
      C: "A ética e a política estão interligadas, pois ambas visam o bem comum e a felicidade da sociedade.",
      D: "A ética é exclusivamente uma questão individual, sem impacto na política."
    },
    "Resposta": "C",
    "Motivo": "Para Aristóteles, a ética e a política estão interligadas, ambas visando o bem comum e a felicidade da sociedade. A virtude individual contribui para a construção de uma comunidade justa."
  },
  {
    "Pergunta": "Qual é o termo usado por Aristóteles para descrever o processo de desenvolver virtudes por meio da prática habitual?",
    "Opcoes": {
      A: "Arete",
      B: "Phronesis",
      C: "Hexis",
      D: "Eudaimonia"
    },
    "Resposta": "C",
    "Motivo": "Aristóteles utiliza o termo 'Hexis' para descrever o processo de desenvolver virtudes por meio da prática habitual, criando disposições estáveis na característica moral de uma pessoa."
  },
  {
    "Pergunta": "De acordo com Aristóteles, o que é 'phronesis'?",
    "Opcoes": {
      A: "A coragem física em situações perigosas.",
      B: "A sabedoria prática ou a prudência.",
      C: "A busca constante por conhecimento teórico.",
      D: "A devoção religiosa e espiritual."
    },
    "Resposta": "B",
    "Motivo": "Em Aristóteles, 'phronesis' refere-se à sabedoria prática ou prudência, que envolve a capacidade de fazer julgamentos morais discernentes nas situações concretas da vida."
  },
  
  {
    "Pergunta": "Qual filósofo alemão é conhecido por sua crítica à razão pura e pela distinção entre fenômeno e nôumeno?",
    "Opcoes": {
      A: "Immanuel Kant",
      B: "Friedrich Nietzsche",
      C: "Karl Marx",
      D: "Arthur Schopenhauer"
    },
    "Resposta": "A",
    "Motivo": "Immanuel Kant é conhecido por sua crítica à razão pura e pela distinção entre fenômeno (o que aparece) e nôumeno (a realidade em si), influenciando significativamente a filosofia moderna."
  },
  {
    "Pergunta": "Qual é o princípio ético fundamental proposto por Immanuel Kant em sua ética deontológica?",
    "Opcoes": {
      A: "Utilitarismo",
      B: "Imperativo categórico",
      C: "Vontade de poder",
      D: "Vontade geral"
    },
    "Resposta": "B",
    "Motivo": "Immanuel Kant propôs o 'Imperativo Categórico' como o princípio ético fundamental em sua ética deontológica, que se baseia na obrigação moral e no respeito pelos deveres universais."
  },
  {
    "Pergunta": "Qual é o conceito-chave na filosofia de Friedrich Nietzsche, que questiona a validade dos valores tradicionais e propõe a 'vontade de poder'?",
    "Opcoes": {
      A: "Super-homem",
      B: "Eterno retorno",
      C: "Vontade de verdade",
      D: "Amor fati"
    },
    "Resposta": "C",
    "Motivo": "Friedrich Nietzsche introduziu o conceito de 'Vontade de Verdade' em sua filosofia, questionando a validade dos valores tradicionais e propondo uma abordagem mais crítica à busca pela verdade."
  },
  {
    "Pergunta": "Na filosofia de Nietzsche, o que representa o conceito de 'eterno retorno'?",
    "Opcoes": {
      A: "A repetição eterna de eventos históricos.",
      B: "A ideia de reencarnação.",
      C: "A constância das leis naturais.",
      D: "A aceitação alegre da repetição infinita da vida."
    },
    "Resposta": "D",
    "Motivo": "O conceito de 'Eterno Retorno' em Nietzsche representa a aceitação alegre da ideia de que a vida e todos os eventos se repetirão infinitamente, enfatizando uma atitude afirmativa em relação à existência."
  },
  {
    "Pergunta": "Qual filósofo alemão é conhecido por sua obra 'O Ser e a Nada', que explora a fenomenologia e a ontologia?",
    "Opcoes": {
      A: "Immanuel Kant",
      B: "Friedrich Nietzsche",
      C: "Karl Marx",
      D: "Jean-Paul Sartre"
    },
    "Resposta": "D",
    "Motivo": "Jean-Paul Sartre é conhecido por sua obra 'O Ser e a Nada', que explora a fenomenologia e a ontologia, destacando a liberdade e a responsabilidade individual na construção do significado da vida."
  },
  {
    "Pergunta": "Qual é o conceito central na filosofia existencialista de Sartre, que enfatiza a liberdade individual e a responsabilidade pela própria existência?",
    "Opcoes": {
      A: "Absurdo",
      B: "Desespero",
      C: "Vontade de poder",
      D: "Mau infinito"
    },
    "Resposta": "A",
    "Motivo": "O conceito central na filosofia existencialista de Sartre é a 'Absurdo', destacando a liberdade individual e a responsabilidade pela própria existência diante da falta de significado inerente à vida."
  },
  {
    "Pergunta": "Qual filósofo alemão é conhecido por sua crítica à razão pura e pela distinção entre fenômeno e nôumeno?",
    "Opcoes": {
      A: "Immanuel Kant",
      B: "Friedrich Nietzsche",
      C: "Karl Marx",
      D: "Arthur Schopenhauer"
    },
    "Resposta": "A",
    "Motivo": "Immanuel Kant é conhecido por sua crítica à razão pura e pela distinção entre fenômeno (o que aparece) e nôumeno (a realidade em si), influenciando significativamente a filosofia moderna."
  },
  {
    "Pergunta": "Qual é o princípio ético fundamental proposto por Immanuel Kant em sua ética deontológica?",
    "Opcoes": {
      A: "Utilitarismo",
      B: "Imperativo categórico",
      C: "Vontade de poder",
      D: "Vontade geral"
    },
    "Resposta": "B",
    "Motivo": "Immanuel Kant propôs o 'Imperativo Categórico' como o princípio ético fundamental em sua ética deontológica, que se baseia na obrigação moral e no respeito pelos deveres universais."
  },
  {
    "Pergunta": "Qual é o conceito-chave na filosofia de Friedrich Nietzsche, que questiona a validade dos valores tradicionais e propõe a 'vontade de poder'?",
    "Opcoes": {
      A: "Super-homem",
      B: "Eterno retorno",
      C: "Vontade de verdade",
      D: "Amor fati"
    },
    "Resposta": "C",
    "Motivo": "Friedrich Nietzsche introduziu o conceito de 'Vontade de Verdade' em sua filosofia, questionando a validade dos valores tradicionais e propondo uma abordagem mais crítica à busca pela verdade."
  },
  {
    "Pergunta": "Na filosofia de Nietzsche, o que representa o conceito de 'eterno retorno'?",
    "Opcoes": {
      A: "A repetição eterna de eventos históricos.",
      B: "A ideia de reencarnação.",
      C: "A constância das leis naturais.",
      D: "A aceitação alegre da repetição infinita da vida."
    },
    "Resposta": "D",
    "Motivo": "O conceito de 'Eterno Retorno' em Nietzsche representa a aceitação alegre da ideia de que a vida e todos os eventos se repetirão infinitamente, enfatizando uma atitude afirmativa em relação à existência."
  },
  {
    "Pergunta": "Qual filósofo alemão é conhecido por sua obra 'O Ser e a Nada', que explora a fenomenologia e a ontologia?",
    "Opcoes": {
      A: "Immanuel Kant",
      B: "Friedrich Nietzsche",
      C: "Karl Marx",
      D: "Jean-Paul Sartre"
    },
    "Resposta": "D",
    "Motivo": "Jean-Paul Sartre é conhecido por sua obra 'O Ser e a Nada', que explora a fenomenologia e a ontologia, destacando a liberdade e a responsabilidade individual na construção do significado da vida."
  },
  {
    "Pergunta": "Qual é o conceito central na filosofia existencialista de Sartre, que enfatiza a liberdade individual e a responsabilidade pela própria existência?",
    "Opcoes": {
      A: "Absurdo",
      B: "Desespero",
      C: "Vontade de poder",
      D: "Mau infinito"
    },
    "Resposta": "A",
    "Motivo": "O conceito central na filosofia existencialista de Sartre é a 'Absurdo', destacando a liberdade individual e a responsabilidade pela própria existência diante da falta de significado inerente à vida."
  }, {
    "Pergunta": "Qual termo Nietzsche usou para descrever a vontade fundamental de viver e prosperar?",
    "Opcoes": {
      A: "Ubermensch",
      B: "Eterno Retorno",
      C: "Vontade de Verdade",
      D: "Vontade de Poder"
    },
    "Resposta": "D",
    "Motivo": "Nietzsche usou o termo 'Vontade de Poder' para descrever a força vital fundamental que impulsiona os seres humanos a viver, prosperar e buscar a autoafirmação."
  },
  {
    "Pergunta": "O que Nietzsche quis dizer com o conceito de 'Ubermensch' ou 'Além-Humano'?",
    "Opcoes": {
      A: "Uma raça superior geneticamente modificada.",
      B: "Indivíduos que transcenderam as limitações morais e sociais.",
      C: "A ideia de reencarnação em uma forma superior.",
      D: "Uma nova forma de governo baseada na força."
    },
    "Resposta": "B",
    "Motivo": "Com 'Ubermensch' ou 'Além-Humano', Nietzsche referiu-se a indivíduos que transcenderam as limitações morais e sociais da sociedade, criando seus próprios valores e significados."
  },
  
  
  {
    "Pergunta": "Qual é a crítica fundamental de Nietzsche à moral tradicional, expressa pelo conceito de 'moral de escravos'?",
    "Opcoes": {
      A: "A moral tradicional valoriza demasiadamente a nobreza.",
      B: "A moral tradicional enfatiza demais a obediência e a submissão.",
      C: "A moral tradicional é excessivamente focada na justiça.",
      D: "A moral tradicional promove a igualdade e a fraternidade."
    },
    "Resposta": "B",
    "Motivo": "Nietzsche criticou a moral tradicional, especialmente a religiosa, por enfatizar a obediência e a submissão, considerando-a uma 'moral de escravos' que restringe o desenvolvimento pleno do indivíduo."
  },
  {
    "Pergunta": "Como Nietzsche caracteriza a relação entre o 'Apollonian' e o 'Dionysian' em sua obra 'O Nascimento da Tragédia'?",
    "Opcoes": {
      A: "Como opostos irreconciliáveis, sem interação.",
      B: "Como dois princípios equilibrados que coexistem pacificamente.",
      C: "Como forças criativas que se complementam na arte.",
      D: "Como estágios evolutivos da sociedade humana."
    },
    "Resposta": "C",
    "Motivo": "Nietzsche caracteriza a relação entre o 'Apollonian' e o 'Dionysian' como forças criativas que se complementam na arte. Apollonian representa a ordem e a clareza, enquanto Dionysian representa o caos e a emoção."
  },
  {
    "Pergunta": "Qual é a crítica de Nietzsche ao conceito de 'verdade' na filosofia tradicional?",
    "Opcoes": {
      A: "A verdade é inatingível e inexistente.",
      B: "A verdade é relativa e subjetiva.",
      C: "A verdade é uma construção cultural e social.",
      D: "A verdade é frequentemente usada como um instrumento de poder."
    },
    "Resposta": "D",
    "Motivo": "Nietzsche criticou a ideia tradicional de 'verdade' como frequentemente sendo usada como um instrumento de poder, uma ferramenta para impor valores e perspectivas particulares."
  },
  {
    "Pergunta": "Como Nietzsche se refere ao conceito de 'eterno retorno' em sua obra?",
    "Opcoes": {
      A: "Como uma ideia absurda e ilógica.",
      B: "Como uma possibilidade futura a ser alcançada.",
      C: "Como uma afirmação alegre da existência.",
      D: "Como um ciclo inevitável de decadência."
    },
    "Resposta": "C",
    "Motivo": "Nietzsche se refere ao 'eterno retorno' como uma afirmação alegre da existência, sugerindo uma atitude positiva em relação à repetição infinita da vida e dos eventos."
  },
  {
    "Pergunta": "Qual é a crítica de Nietzsche ao conceito de 'bem e mal' na moral tradicional?",
    "Opcoes": {
      A: "A moral tradicional valoriza demais o bem.",
      B: "A moral tradicional é excessivamente centrada na justiça.",
      C: "A moral tradicional promove uma moralidade de rebanho.",
      D: "A moral tradicional enfatiza demais a compaixão."
    },
    "Resposta": "C",
    "Motivo": "Nietzsche criticou o conceito de 'bem e mal' na moral tradicional, considerando-a uma moralidade de rebanho que enfraquece a vitalidade e a criatividade individuais em prol da conformidade e da obediência."
  },
  {
    "Pergunta": "Como Nietzsche caracteriza a 'vontade de verdade'?",
    "Opcoes": {
      A: "Uma busca constante por verdades universais.",
      B: "Uma manifestação da fraqueza humana.",
      C: "Uma expressão da vontade de poder.",
      D: "Um conceito irrelevante na filosofia."
    },
    "Resposta": "C",
    "Motivo": "Nietzsche caracteriza a 'vontade de verdade' como uma expressão da 'vontade de poder', sugerindo que a busca pela verdade está intrinsecamente relacionada ao desejo de exercer influência e controle sobre o mundo."
  },
  {
    "Pergunta": "Quais eram as principais ideias políticas proclamadas por Maquiavel em sua obra 'O Príncipe'?",
    "Opcoes": {
      A: "A importância da virtude moral na liderança.",
      B: "A defesa do governo democrático.",
      C: "A necessidade de um líder ser temido do que amado.",
      D: "A promoção da igualdade social."
    },
    "Resposta": "C",
    "Motivo": "Maquiavel, em 'O Príncipe', proclamou a ideia de que um líder deve ser temido em vez de amado, destacando a importância da astúcia e pragmatismo na política."
  },
  {
    "Pergunta": "Quais eram as principais contribuições de John Locke à teoria política e à filosofia?",
    "Opcoes": {
      A: "A defesa do absolutismo e da monarquia divina.",
      B: "A teoria da mente tabula rasa e a ênfase nos direitos naturais.",
      C: "A promoção da teoria do contrato social e da soberania absoluta.",
      D: "A crítica à separação de poderes e à liberdade individual."
    },
    "Resposta": "B",
    "Motivo": "John Locke contribuiu com a teoria da mente tabula rasa e enfatizou os direitos naturais, além de ter influenciado a teoria do contrato social e a democracia moderna."
  },
  {
    "Pergunta": "Quais eram as principais ideias políticas proclamadas por Jean-Jacques Rousseau em 'O Contrato Social'?",
    "Opcoes": {
      A: "A defesa da monarquia absoluta.",
      B: "A ênfase na aristocracia como forma ideal de governo.",
      C: "A importância da vontade geral e do contrato social.",
      D: "A promoção da desigualdade como base da sociedade."
    },
    "Resposta": "C",
    "Motivo": "Rousseau, em 'O Contrato Social', proclamou a importância da vontade geral e do contrato social como base da autoridade política legítima, influenciando o pensamento democrático."
  },
  {
    "Pergunta": "Quais eram as principais ideias de Montesquieu sobre a organização política em 'O Espírito das Leis'?",
    "Opcoes": {
      A: "A defesa da monarquia absoluta e da centralização do poder.",
      B: "A promoção da teocracia como forma ideal de governo.",
      C: "A ênfase na separação de poderes e no sistema de checks and balances.",
      D: "A importância da aristocracia hereditária na estrutura política."
    },
    "Resposta": "C",
    "Motivo": "Montesquieu, em 'O Espírito das Leis', propôs a ideia da separação de poderes e do sistema de checks and balances para evitar o abuso de autoridade, influenciando a organização política moderna."
  },
  {
    "Pergunta": "Quais eram as principais críticas de Voltaire à sociedade e à religião?",
    "Opcoes": {
      A: "A defesa da intolerância religiosa e da monarquia absoluta.",
      B: "A promoção da censura e da repressão política.",
      C: "A ênfase na importância da teocracia.",
      D: "A crítica à intolerância religiosa, à injustiça social e à superstição."
    },
    "Resposta": "D",
    "Motivo": "Voltaire criticou a intolerância religiosa, a injustiça social e a superstição, defendendo a liberdade de pensamento e expressão como meio de progresso social."
  },

    {
    "Pergunta": "Em 'Crime e Castigo' de Dostoiévski, qual é a teoria ética que Raskólnikov utiliza para justificar seu assassinato?",
    "Opcoes": {
      A: "Utilitarismo",
      B: "Deontologia",
      C: "Existencialismo",
      D: "Niilismo"
    },
    "Resposta": "A",
    "Motivo": "Raskólnikov em 'Crime e Castigo' justifica seu assassinato usando uma versão distorcida do utilitarismo, acreditando que poderia sacrificar uma vida pelo bem da humanidade."
  },
  {
    "Pergunta": "Qual é a obra mais conhecida de Dostoiévski que explora questões éticas, religiosas e psicológicas em meio à Rússia do século XIX?",
    "Opcoes": {
      A: "Irmãos Karamázov",
      B: "Crime e Castigo",
      C: "O Idiota",
      D: "O Jogador"
    },
    "Resposta": "A",
    "Motivo": "A obra mais conhecida de Dostoiévski que explora questões éticas, religiosas e psicológicas é 'Irmãos Karamázov'. A obra aborda temas como a fé, moralidade e o conflito entre razão e fé."
  },
  {
    "Pergunta": "Como Dostoiévski aborda o conceito de sofrimento em suas obras?",
    "Opcoes": {
      A: "O sofrimento é inevitável e inescapável.",
      B: "O sofrimento é uma ilusão a ser superada.",
      C: "O sofrimento é uma consequência da falta de virtude.",
      D: "O sofrimento é uma ferramenta para alcançar a sabedoria."
    },
    "Resposta": "A",
    "Motivo": "Dostoiévski aborda o sofrimento em suas obras como inevitável e inescapável, explorando como os personagens lidam com o sofrimento existencial, moral e psicológico."
  },
  {
    "Pergunta": "Na obra 'Os Irmãos Karamázov', qual personagem expressa a ideia de que 'se Deus não existe, tudo é permitido'?",
    "Opcoes": {
      A: "Dmitri Karamázov",
      B: "Ivan Karamázov",
      C: "Alyosha Karamázov",
      D: "Fyodor Pavlovich Karamázov"
    },
    "Resposta": "B",
    "Motivo": "Ivan Karamázov expressa a ideia de que 'se Deus não existe, tudo é permitido' na obra 'Os Irmãos Karamázov', questionando a base moral sem a existência de um ser divino."
  },
  {
    "Pergunta": "Na filosofia, qual é o termo usado para descrever a visão de Dostoiévski sobre a redenção através do sofrimento e da aceitação?",
    "Opcoes": {
      A: "Utopia",
      B: "Niilismo",
      C: "Resiliência",
      D: "Soteriologia"
    },
    "Resposta": "D",
    "Motivo": "O termo usado para descrever a visão de Dostoiévski sobre a redenção através do sofrimento e da aceitação é 'Soteriologia', que se refere à teoria da salvação ou redenção."
  },
  {
    "Pergunta": "Qual filósofo existencialista francês é conhecido por sua obra 'O Estrangeiro', que explora a indiferença e a alienação humana?",
    "Opcoes": {
      A: "Jean-Paul Sartre",
      B: "Albert Camus",
      C: "Simone de Beauvoir",
      D: "Gabriel Marcel"
    },
    "Resposta": "B",
    "Motivo": "Albert Camus, um filósofo existencialista francês, é conhecido por sua obra 'O Estrangeiro', que explora a indiferença e a alienação humana diante de um mundo aparentemente absurdo."
  },
  {
    "Pergunta": "Qual é o conceito central na filosofia existencialista de Jean-Paul Sartre?",
    "Opcoes": {
      A: "Absurdo",
      B: "Desespero",
      C: "Mau Infinito",
      D: "Liberdade"
    },
    "Resposta": "D",
    "Motivo": "O conceito central na filosofia existencialista de Jean-Paul Sartre é 'Liberdade'. Sartre enfatiza a liberdade absoluta do indivíduo para escolher e criar significado em um universo aparentemente sem sentido."
  },
  {
    "Pergunta": "Qual filósofo alemão é conhecido por sua crítica à religião, especialmente em 'O Anticristo' e 'Assim Falou Zaratustra'?",
    "Opcoes": {
      A: "Immanuel Kant",
      B: "Friedrich Nietzsche",
      C: "Arthur Schopenhauer",
      D: "Karl Marx"
    },
    "Resposta": "B",
    "Motivo": "Friedrich Nietzsche, o filósofo alemão, é conhecido por sua crítica à religião, especialmente em obras como 'O Anticristo' e 'Assim Falou Zaratustra', questionando valores religiosos tradicionais."
  },
  {
    "Pergunta": "Na filosofia de Jean-Paul Sartre, qual é o conceito que significa 'ser para si' e refere-se à consciência e liberdade humanas?",
    "Opcoes": {
      A: "Ser-para-a-morte",
      B: "Ser-em-si",
      C: "Ser-para-outro",
      D: "Ser-para-si"
    },
    "Resposta": "D",
    "Motivo": "Na filosofia de Jean-Paul Sartre, 'Ser-para-si' significa 'ser para si', representando a consciência e liberdade humanas, contrastando com 'Ser-em-si', que refere-se a objetos inanimados."
  },  {
    "Pergunta": "Em 'O Príncipe', Maquiavel aborda a moralidade na política. Qual é a visão de Maquiavel sobre a relação entre moralidade e governança?",
    "Opcoes": {
      A: "A moralidade deve guiar todas as ações políticas.",
      B: "A moralidade é irrelevante na política.",
      C: "A moralidade deve ser adaptada às circunstâncias.",
      D: "A moralidade deve ser imposta pela força."
    },
    "Resposta": "C",
    "Motivo": "Maquiavel argumenta que a moralidade política deve ser adaptada às circunstâncias, sugerindo uma abordagem pragmática e flexível para alcançar o sucesso na governança."
  },
  {
    "Pergunta": "John Locke introduziu o conceito de 'propriedade' em suas obras. Como Locke via a aquisição legítima de propriedade?",
    "Opcoes": {
      A: "Através da conquista militar.",
      B: "Por herança apenas.",
      C: "Pelo trabalho e mistura com o trabalho próprio.",
      D: "Por meio de negociações políticas."
    },
    "Resposta": "C",
    "Motivo": "Locke via a aquisição legítima de propriedade como resultado do trabalho e mistura com o trabalho próprio, destacando a importância do trabalho na justificação da posse."
  },
  {
    "Pergunta": "Em 'O Contrato Social', Rousseau discute a 'vontade geral'. O que Rousseau entende por 'vontade geral' e como ela se relaciona à soberania?",
    "Opcoes": {
      A: "A vontade geral é a vontade da maioria e não está ligada à soberania.",
      B: "A vontade geral é a soma das vontades individuais e determina a soberania.",
      C: "A vontade geral é a vontade do governante, garantindo a soberania absoluta.",
      D: "A vontade geral é irrelevante para a teoria política de Rousseau."
    },
    "Resposta": "B",
    "Motivo": "Para Rousseau, a vontade geral é a soma das vontades individuais, e sua determinação é crucial para estabelecer a soberania legítima em um Estado."
  },
  {
    "Pergunta": "Montesquieu defendeu a separação de poderes em 'O Espírito das Leis'. Como ele acreditava que essa separação beneficiaria a sociedade?",
    "Opcoes": {
      A: "A separação de poderes leva à concentração de poder nas mãos do executivo.",
      B: "A separação de poderes impede qualquer forma de governo.",
      C: "A separação de poderes evita o abuso de autoridade ao distribuir funções distintas.",
      D: "Montesquieu não via benefícios na separação de poderes."
    },
    "Resposta": "C",
    "Motivo": "Montesquieu via a separação de poderes como uma forma de evitar o abuso de autoridade, distribuindo funções distintas entre legislativo, executivo e judiciário para garantir equilíbrio."
  },
  {
    "Pergunta": "Voltaire, em suas críticas à sociedade, abordou temas como liberdade de expressão. Como Voltaire via a relação entre liberdade de expressão e progresso social?",
    "Opcoes": {
      A: "Liberdade de expressão não é importante para o progresso social.",
      B: "A censura é necessária para manter a ordem social.",
      C: "Liberdade de expressão é essencial para o progresso social.",
      D: "A liberdade de expressão deve ser restrita apenas aos filósofos."
    },
    "Resposta": "C",
    "Motivo": "Voltaire defendia que a liberdade de expressão era essencial para o progresso social, acreditando que o livre debate de ideias contribuiria para a evolução da sociedade."
  },
  {
    "Pergunta": "Rousseau criticou a propriedade privada em suas obras. Qual era a crítica principal de Rousseau em relação à propriedade privada?",
    "Opcoes": {
      A: "A propriedade privada é a base da sociedade justa.",
      B: "A propriedade privada é um direito natural inalienável.",
      C: "A propriedade privada gera desigualdade social e corrompe a sociedade.",
      D: "A propriedade privada deve ser controlada pelo Estado."
    },
    "Resposta": "C",
    "Motivo": "Rousseau criticava a propriedade privada, argumentando que ela gerava desigualdade social e corrompia a sociedade, defendendo a importância da propriedade comum."
  }
  ,
  
  
      ]
    const perguntasLiteratura = [
      
      {
    "Pergunta": "Quem é o autor da obra 'Dom Casmurro', um romance realista que explora ciúmes e traição?",
    "Opcoes": {
      A: "Machado de Assis",
      B: "Eça de Queirós",
      C: "José Saramago",
      D: "Gabriel García Márquez"
    },
    "Resposta": "A",
    "Motivo": "'Dom Casmurro' é uma obra de Machado de Assis, um dos principais escritores brasileiros do realismo, que aborda temas como ciúmes e traição."
  },
  {
    "Pergunta": "Qual é o título da obra de George Orwell que critica regimes totalitários e introduz termos como 'Big Brother'?",
    "Opcoes": {
      A: "1984",
      B: "A Revolução dos Bichos",
      C: "A Nuvem",
      D: "O Senhor dos Anéis"
    },
    "Resposta": "A",
    "Motivo": "'1984' é a obra de George Orwell que critica regimes totalitários, introduzindo conceitos como 'Big Brother' e explorando questões de controle governamental."
  },
  {
    "Pergunta": "Quem é o autor do poema épico 'Os Lusíadas', que narra as viagens dos navegadores portugueses?",
    "Opcoes": {
      A: "Camões",
      B: "Fernando Pessoa",
      C: "Gil Vicente",
      D: "Saramago"
    },
    "Resposta": "A",
    "Motivo": "Luis de Camões é o autor de 'Os Lusíadas', poema épico que narra as viagens dos navegadores portugueses e é uma das obras mais importantes da literatura portuguesa."
  },
  {
    "Pergunta": "Qual é o título da obra de Gabriel García Márquez que conta a história de amor entre Florentino Ariza e Fermina Daza?",
    "Opcoes": {
      A: "Cem Anos de Solidão",
      B: "O Outono do Patriarca",
      C: "O Amor nos Tempos do Cólera",
      D: "Crônica de uma Morte Anunciada"
    },
    "Resposta": "C",
    "Motivo": "'O Amor nos Tempos do Cólera' é a obra de Gabriel García Márquez que conta a história de amor entre Florentino Ariza e Fermina Daza, explorando temas como tempo e paixão."
  },
  {
    "Pergunta": "Quem é a autora de 'Orgulho e Preconceito', uma obra clássica que aborda questões sociais e românticas na Inglaterra do século XIX?",
    "Opcoes": {
      A: "Charlotte Brontë",
      B: "Jane Austen",
      C: "Emily Brontë",
      D: "Charles Dickens"
    },
    "Resposta": "B",
    "Motivo": "Jane Austen é a autora de 'Orgulho e Preconceito', uma obra clássica que aborda questões sociais e românticas na Inglaterra do século XIX, destacando a ironia e a crítica social."
  },
  {
    "Pergunta": "Qual é o título da obra de Franz Kafka que conta a história de Josef K., um homem processado sem saber o motivo?",
    "Opcoes": {
      A: "A Metamorfose",
      B: "O Processo",
      C: "O Castelo",
      D: "América"
    },
    "Resposta": "B",
    "Motivo": "'O Processo' é a obra de Franz Kafka que conta a história de Josef K., um homem processado sem saber o motivo, explorando temas como a burocracia e o absurdo."
  },
  {
    "Pergunta": "Quem é o autor de 'O Pequeno Príncipe', uma obra que aborda temas filosóficos por meio das aventuras do Pequeno Príncipe?",
    "Opcoes": {
      A: "Antoine de Saint-Exupéry",
      B: "Jules Verne",
      C: "Victor Hugo",
      D: "Gustave Flaubert"
    },
    "Resposta": "A",
    "Motivo": "Antoine de Saint-Exupéry é o autor de 'O Pequeno Príncipe', uma obra que aborda temas filosóficos por meio das aventuras do Pequeno Príncipe e sua relação com outros planetas."
  },
  {
    "Pergunta": "Qual é o autor de 'Crime e Castigo', uma obra que explora a psique de um estudante atormentado por um assassinato?",
    "Opcoes": {
      A: "Fiódor Dostoiévski",
      B: "Lev Tolstói",
      C: "Anton Tchekhov",
      D: "Ivan Turguêniev"
    },
    "Resposta": "A",
    "Motivo": "Fiódor Dostoiévski é o autor de 'Crime e Castigo', uma obra que explora a psique de um estudante atormentado por um assassinato, sendo uma das principais obras do existencialismo literário."
  },
  {
    "Pergunta": "Qual é o autor do romance 'Moby Dick', uma obra que narra a obsessão do capitão Ahab por um grande cachalote branco?",
    "Opcoes": {
      A: "Herman Melville",
      B: "Mark Twain",
      C: "Nathaniel Hawthorne",
      D: "Edgar Allan Poe"
    },
    "Resposta": "A",
    "Motivo": "'Moby Dick' é um romance escrito por Herman Melville, explorando a obsessão do capitão Ahab pelo grande cachalote branco e abordando temas como vingança e natureza."
  },
  {
    "Pergunta": "Quem é o autor de 'A Moreninha', uma das primeiras obras do romantismo brasileiro?",
    "Opcoes": {
      A: "Álvares de Azevedo",
      B: "José de Alencar",
      C: "Machado de Assis",
      D: "Bernardo Guimarães"
    },
    "Resposta": "D",
    "Motivo": "'A Moreninha' é uma obra do escritor brasileiro Bernardo Guimarães, considerada uma das primeiras do romantismo brasileiro, abordando temas românticos e sociais."
  },
  {
    "Pergunta": "Qual é o título da obra de Clarice Lispector que explora a interioridade feminina por meio da protagonista anônima?",
    "Opcoes": {
      A: "A Hora da Estrela",
      B: "Perto do Coração Selvagem",
      C: "Laços de Família",
      D: "Água Viva"
    },
    "Resposta": "A",
    "Motivo": "'A Hora da Estrela' é uma obra de Clarice Lispector que explora a interioridade feminina por meio da protagonista anônima, discutindo questões existenciais e sociais."
  },
  {
    "Pergunta": "Quem é o autor de 'A Divina Comédia', uma obra épica que narra a jornada de Dante pelo Inferno, Purgatório e Paraíso?",
    "Opcoes": {
      A: "Dante Alighieri",
      B: "Petrarca",
      C: "Boccaccio",
      D: "Miguel de Cervantes"
    },
    "Resposta": "A",
    "Motivo": "'A Divina Comédia' é uma obra do poeta italiano Dante Alighieri, narrando sua jornada pelo Inferno, Purgatório e Paraíso, sendo uma das obras-primas da literatura mundial."
  },
  {
    "Pergunta": "Edgar Allan Poe é conhecido como mestre do gênero do terror e suspense. Qual é uma de suas obras mais famosas?",
    "Opcoes": {
      A: "Cem Anos de Solidão",
      B: "O Corvo",
      C: "Crime e Castigo",
      D: "Orgulho e Preconceito"
    },
    "Resposta": "B",
    "Motivo": "'O Corvo' é uma das obras mais famosas de Edgar Allan Poe, um poema narrativo que incorpora elementos de terror e melancolia, marcando seu legado no gênero."
  },
  {
    "Pergunta": "Agatha Christie é reconhecida como 'Rainha do Crime'. Qual é um de seus detetives mais famosos, conhecido por sua sagacidade na resolução de casos?",
    "Opcoes": {
      A: "Hercule Poirot",
      B: "Sherlock Holmes",
      C: "Miss Marple",
      D: "Sam Spade"
    },
    "Resposta": "A",
    "Motivo": "Hercule Poirot é um dos detetives mais famosos de Agatha Christie, conhecido por sua sagacidade e métodos meticulosos na resolução de casos, tornando-se uma figura icônica da literatura policial."
  },
  {
    "Pergunta": "Sir Arthur Conan Doyle criou um dos mais famosos detetives da literatura. Qual é o nome deste detetive?",
    "Opcoes": {
      A: "Hercule Poirot",
      B: "Sherlock Holmes",
      C: "Philip Marlowe",
      D: "Nero Wolfe"
    },
    "Resposta": "B",
    "Motivo": "Sherlock Holmes é o famoso detetive criado por Sir Arthur Conan Doyle, conhecido por sua astúcia, raciocínio lógico e habilidades dedutivas na resolução de mistérios."
  },
  {
    "Pergunta": "Machado de Assis foi um influente escritor brasileiro. Qual é uma de suas obras mais conhecidas que explora temas como a loucura e a hipocrisia social?",
    "Opcoes": {
      A: "Dom Casmurro",
      B: "Memórias Póstumas de Brás Cubas",
      C: "Quincas Borba",
      D: "Senhora"
    },
    "Resposta": "B",
    "Motivo": "'Memórias Póstumas de Brás Cubas' é uma obra de Machado de Assis que explora temas como a loucura e a hipocrisia social, sendo considerada uma das grandes obras da literatura brasileira."
  },
  {
    "Pergunta": "Agatha Christie é conhecida por seus finais surpreendentes. Qual é o termo frequentemente usado para descrever a reviravolta inesperada em suas histórias?",
    "Opcoes": {
      A: "Twist de Agatha",
      B: "Reviravolta Quotidiana",
      C: "Surpresa Literária",
      D: "Clímax Intrigante"
    },
    "Resposta": "A",
    "Motivo": "O termo frequentemente usado para descrever a reviravolta inesperada nas histórias de Agatha Christie é 'Twist de Agatha', destacando sua habilidade em surpreender os leitores."
  },
  {
    "Pergunta": "Sir Arthur Conan Doyle escreveu diversas histórias sobre Sherlock Holmes. Qual é o título de uma das coleções de contos protagonizados por Holmes e Watson?",
    "Opcoes": {
      A: "A Máscara da Morte Rubra",
      B: "O Vale do Medo",
      C: "As Aventuras de Sherlock Holmes",
      D: "O Cão dos Baskervilles"
    },
    "Resposta": "C",
    "Motivo": "'As Aventuras de Sherlock Holmes' é uma coleção de contos escrita por Sir Arthur Conan Doyle, apresentando casos intrigantes protagonizados pelo famoso detetive e seu parceiro, Dr. Watson."
  }
  
 
  ,
   {
    "Pergunta": "Em qual cidade Edgar Allan Poe nasceu?",
    "Opcoes": {
      A: "Boston",
      B: "Nova Iorque",
      C: "Baltimore",
      D: "Filadélfia"
    },
    "Resposta": "D",
    "Motivo": "Edgar Allan Poe nasceu em Boston, Massachusetts, EUA."
  },
  {
    "Pergunta": "Qual é o título da obra de Poe que descreve a história de um homem que é obcecado por olhos de uma velha e acaba cometendo um assassinato?",
    "Opcoes": {
      A: "O Corvo",
      B: "A Queda da Casa de Usher",
      C: "O Gato Preto",
      D: "O Barril de Amontillado"
    },
    "Resposta": "C",
    "Motivo": "'O Gato Preto' é a obra de Poe que descreve a obsessão de um homem por olhos de uma velha e os eventos que levam a um assassinato."
  },
  {
    "Pergunta": "Qual é o título da poesia de Edgar Allan Poe que apresenta um corvo como um visitante misterioso e repetitivo?",
    "Opcoes": {
      A: "O Gato Preto",
      B: "Annabel Lee",
      C: "O Corvo",
      D: "Lenore"
    },
    "Resposta": "C",
    "Motivo": "'O Corvo' é a poesia de Edgar Allan Poe que apresenta um corvo como um visitante misterioso e repetitivo, explorando temas de luto e melancolia."
  },
  {
    "Pergunta": "Em 'A Máscara da Morte Rubra', qual é o objeto usado para simbolizar a presença da morte na festa?",
    "Opcoes": {
      A: "Uma caveira",
      B: "Uma máscara",
      C: "Um relógio",
      D: "Um espelho"
    },
    "Resposta": "B",
    "Motivo": "Em 'A Máscara da Morte Rubra', Poe usa uma máscara como símbolo da presença da morte durante a festa, destacando o tema da inevitabilidade da morte."
  },
  {
    "Pergunta": "Edgar Allan Poe é considerado um dos precursores do gênero policial. Qual é a obra em que o detetive C. Auguste Dupin faz sua primeira aparição?",
    "Opcoes": {
      A: "A Queda da Casa de Usher",
      B: "O Assassinato da Rua Morgue",
      C: "O Barril de Amontillado",
      D: "O Gato Preto"
    },
    "Resposta": "B",
    "Motivo": "'O Assassinato da Rua Morgue' é a obra em que o detetive C. Auguste Dupin faz sua primeira aparição, sendo considerado um dos primeiros contos de detetive da literatura."
  },
  {
    "Pergunta": "Em 'O Gato Preto', qual é o nome do gato de estimação do protagonista que desempenha um papel significativo na história?",
    "Opcoes": {
      A: "Pluto",
      B: "Cerberus",
      C: "Hades",
      D: "Perseu"
    },
    "Resposta": "A",
    "Motivo": "Em 'O Gato Preto', o nome do gato de estimação do protagonista é Pluto, desempenhando um papel simbólico e crucial na narrativa."
  },
  {
    "Pergunta": "Qual é o conto de Edgar Allan Poe que envolve um homem enterrado vivo nas catacumbas de sua casa?",
    "Opcoes": {
      A: "O Gato Preto",
      B: "A Máscara da Morte Rubra",
      C: "O Barril de Amontillado",
      D: "O Enterro Prematuro"
    },
    "Resposta": "D",
    "Motivo": "'O Enterro Prematuro' é o conto de Poe que envolve um homem sendo enterrado vivo nas catacumbas de sua casa, explorando o medo do sepultamento prematuro."
  },
  {
    "Pergunta": "Em 'A Máscara da Morte Rubra', qual é a cor da última sala que representa a morte?",
    "Opcoes": {
      A: "Preto",
      B: "Vermelho",
      C: "Branco",
      D: "Verde"
    },
    "Resposta": "B",
    "Motivo": "Em 'A Máscara da Morte Rubra', a última sala que representa a morte é vermelha, simbolizando a inevitabilidade e a presença da morte."
  },
  {
    "Pergunta": "Qual é o título da obra de Poe que conta a história de um homem que confessa ter enterrado sua esposa viva?",
    "Opcoes": {
      A: "O Gato Preto",
      B: "A Queda da Casa de Usher",
      C: "Berenice",
      D: "O Barril de Amontillado"
    },
    "Resposta": "C",
    "Motivo": "'Berenice' é a obra de Poe que conta a história de um homem que confessa ter enterrado sua esposa viva, explorando temas de morbidez e insanidade."
  },
  {
    "Pergunta": "Edgar Allan Poe também escreveu poesias românticas. Qual é a poesia que descreve a beleza e a tristeza da morte de uma mulher jovem?",
    "Opcoes": {
      A: "Annabel Lee",
      B: "Lenore",
      C: "O Corvo",
      D: "Ulalume"
    },
    "Resposta": "A",
    "Motivo": "'Annabel Lee' é a poesia romântica de Poe que descreve a beleza e a tristeza da morte de uma mulher jovem, destacando o tema do amor e da perda."
  },
  {
    "Pergunta": "Qual é o nome do narrador em primeira pessoa que narra a história em 'O Corvo', uma das obras mais conhecidas de Poe?",
    "Opcoes": {
      A: "Roderick Usher",
      B: "Montresor",
      C: "Pym",
      D: "Desconhecido"
    },
    "Resposta": "D",
    "Motivo": "O narrador em primeira pessoa que narra a história em 'O Corvo' é desconhecido, contribuindo para o mistério e a atmosfera sombria do poema."
  },
  
   {
    "Pergunta": "Qual é o título da obra de William Shakespeare que conta a história de Romeu e Julieta, dois jovens amantes de famílias inimigas?",
    "Opcoes": {
      A: "Otelo",
      B: "Hamlet",
      C: "Romeu e Julieta",
      D: "Macbeth"
    },
    "Resposta": "C",
    "Motivo": "'Romeu e Julieta' é a obra de Shakespeare que conta a trágica história de amor entre dois jovens de famílias inimigas, sendo uma das mais conhecidas da literatura mundial."
  },
  {
    "Pergunta": "Quem é o autor da obra 'Dom Quixote', um romance que satiriza as novelas de cavalaria e é considerado um dos maiores trabalhos da literatura?",
    "Opcoes": {
      A: "Miguel de Cervantes",
      B: "Fernando Pessoa",
      C: "García Márquez",
      D: "Lope de Vega"
    },
    "Resposta": "A",
    "Motivo": "Miguel de Cervantes é o autor de 'Dom Quixote', um romance que satiriza as novelas de cavalaria, sendo considerado um dos maiores trabalhos da literatura mundial."
  },
  {
    "Pergunta": "Qual é o título da obra de Jane Austen que narra o romance de Elizabeth Bennet e Mr. Darcy?",
    "Opcoes": {
      A: "Emma",
      B: "Persuasão",
      C: "Orgulho e Preconceito",
      D: "Razão e Sensibilidade"
    },
    "Resposta": "C",
    "Motivo": "'Orgulho e Preconceito' é a obra de Jane Austen que narra o romance de Elizabeth Bennet e Mr. Darcy, abordando questões sociais e românticas na Inglaterra do século XIX."
  },
  {
    "Pergunta": "Quem é o autor da obra 'Os Miseráveis', um romance que segue a vida de Jean Valjean e outros personagens durante a Revolução Francesa?",
    "Opcoes": {
      A: "Victor Hugo",
      B: "Gustave Flaubert",
      C: "Émile Zola",
      D: "Stendhal"
    },
    "Resposta": "A",
    "Motivo": "Victor Hugo é o autor de 'Os Miseráveis', um romance que segue a vida de Jean Valjean e outros personagens durante a Revolução Francesa, explorando temas de justiça e redenção."
  },
  {
    "Pergunta": "Qual é o título da obra de Fiódor Dostoiévski que aborda temas como a alienação e a busca por sentido na vida?",
    "Opcoes": {
      A: "Crime e Castigo",
      B: "Os Demônios",
      C: "O Idiota",
      D: "Os Irmãos Karamázov"
    },
    "Resposta": "C",
    "Motivo": "'O Idiota' é a obra de Dostoiévski que aborda temas como a alienação e a busca por sentido na vida, centrando-se na figura do Príncipe Míchkin."
  },
  {
    "Pergunta": "Quem é a autora da obra 'Frankenstein', que explora questões éticas relacionadas à criação e responsabilidade?",
    "Opcoes": {
      A: "Jane Austen",
      B: "Emily Brontë",
      C: "Mary Shelley",
      D: "Charlotte Brontë"
    },
    "Resposta": "C",
    "Motivo": "Mary Shelley é a autora de 'Frankenstein', obra que explora questões éticas relacionadas à criação e responsabilidade, sendo considerada uma das precursoras da ficção científica."
  },
  {
    "Pergunta": "Qual foi a inspiração principal de Mary Shelley para escrever 'Frankenstein'?",
    "Opcoes": {
      A: "Um sonho",
      B: "Uma experiência científica",
      C: "Uma lenda urbana",
      D: "Um conto folclórico"
    },
    "Resposta": "A",
    "Motivo": "Mary Shelley teve a inspiração principal para 'Frankenstein' em um sonho que teve durante uma estadia no Lago Genebra, influenciada pelas discussões científicas da época."
  },
  {
    "Pergunta": "Qual é o nome completo do cientista que cria a criatura em 'Frankenstein', de Mary Shelley?",
    "Opcoes": {
      A: "Victor Frankenstein",
      B: "Henry Clerval",
      C: "Robert Walton",
      D: "Alphonse Frankenstein"
    },
    "Resposta": "A",
    "Motivo": "O nome completo do cientista que cria a criatura em 'Frankenstein' é Victor Frankenstein, um personagem central na obra de Mary Shelley."
  },
  {
    "Pergunta": "Como é frequentemente chamada a criatura criada por Victor Frankenstein em 'Frankenstein'?",
    "Opcoes": {
      A: "O Homem Inacabado",
      B: "O Abandonado",
      C: "O Monstro",
      D: "O Desconhecido"
    },
    "Resposta": "C",
    "Motivo": "A criatura criada por Victor Frankenstein em 'Frankenstein' é frequentemente chamada de 'O Monstro', refletindo a rejeição e o isolamento que ela enfrenta na história."
  },
  {
    "Pergunta": "Qual é o destino final de Victor Frankenstein em 'Frankenstein', de Mary Shelley?",
    "Opcoes": {
      A: "Casamento feliz",
      B: "Morte na fogueira",
      C: "Solidão eterna",
      D: "Sucesso científico"
    },
    "Resposta": "C",
    "Motivo": "O destino final de Victor Frankenstein em 'Frankenstein' é a solidão eterna, devido às consequências de suas escolhas e a perseguição implacável da criatura que ele criou."
  },
  {
    "Pergunta": "Qual é o papel de Elizabeth Lavenza na história de 'Frankenstein'?",
    "Opcoes": {
      A: "Criadora da criatura",
      B: "Noiva de Victor Frankenstein",
      C: "Rival de Victor",
      D: "Cientista assistente"
    },
    "Resposta": "B",
    "Motivo": "Elizabeth Lavenza desempenha o papel de noiva de Victor Frankenstein em 'Frankenstein', sendo um personagem significativo na vida do protagonista."
  },
  {
    "Pergunta": "Em 'Frankenstein', qual é a principal razão pela qual a criatura se volta contra Victor Frankenstein?",
    "Opcoes": {
      A: "Rejeição e abandono",
      B: "Ciúmes de outros humanos",
      C: "Instruções de outros cientistas",
      D: "Amor por Elizabeth"
    },
    "Resposta": "A",
    "Motivo": "A principal razão pela qual a criatura se volta contra Victor Frankenstein em 'Frankenstein' é a rejeição e o abandono que ela sofre, levando-a a buscar vingança."
  },
  
  {
    "Pergunta": "Em 'Frankenstein', de Mary Shelley, como a criatura se sente inicialmente em relação a si mesma e ao mundo ao seu redor?",
    "Opcoes": {
      A: "Confusa e assustada",
      B: "Orgulhosa e vingativa",
      C: "Feliz e aceita",
      D: "Curiosa e exploradora"
    },
    "Resposta": "A",
    "Motivo": "Inicialmente, a criatura em 'Frankenstein' se sente confusa e assustada em relação a si mesma e ao mundo ao seu redor, pois é confrontada com uma realidade desconhecida."
  },
  {
    "Pergunta": "Qual é a resposta da sociedade à aparência da criatura em 'Frankenstein'?",
    "Opcoes": {
      A: "Aceitação imediata",
      B: "Admiração e respeito",
      C: "Medo e repulsa",
      D: "Indiferença total"
    },
    "Resposta": "C",
    "Motivo": "Na obra 'Frankenstein', a sociedade reage com medo e repulsa à aparência da criatura, destacando o tema da intolerância e do preconceito baseado na aparência."
  },
  {
    "Pergunta": "Como Victor Frankenstein justifica sua busca pela criação de vida em 'Frankenstein'?",
    "Opcoes": {
      A: "Busca pela imortalidade",
      B: "Cura para doenças",
      C: "Avanço científico",
      D: "Sede de poder"
    },
    "Resposta": "C",
    "Motivo": "Victor Frankenstein justifica sua busca pela criação de vida em 'Frankenstein' como um avanço científico, buscando ultrapassar as limitações da vida humana."
  },
  {
    "Pergunta": "Quais são as consequências da recusa de Victor Frankenstein em criar uma companheira para a criatura em 'Frankenstein'?",
    "Opcoes": {
      A: "Felicidade eterna",
      B: "Morte de Elizabeth",
      C: "Criação da companheira",
      D: "Redenção de Victor"
    },
    "Resposta": "B",
    "Motivo": "A recusa de Victor Frankenstein em criar uma companheira para a criatura resulta na morte de Elizabeth, demonstrando as graves consequências de suas decisões."
  },
  {
    "Pergunta": "Qual é o destino final da criatura no final de 'Frankenstein'?",
    "Opcoes": {
      A: "Casamento feliz",
      B: "Morte na fogueira",
      C: "Solidão eterna",
      D: "Sucesso científico"
    },
    "Resposta": "C",
    "Motivo": "O destino final da criatura em 'Frankenstein' é a solidão eterna, pois ela percebe a impossibilidade de encontrar aceitação na sociedade devido à sua aparência única."
  },
  {
    "Pergunta": "Quem narra a maior parte da história em 'Frankenstein', fornecendo sua perspectiva sobre os eventos?",
    "Opcoes": {
      A: "Victor Frankenstein",
      B: "Elizabeth Lavenza",
      C: "A criatura",
      D: "Robert Walton"
    },
    "Resposta": "D",
    "Motivo": "A maior parte da história em 'Frankenstein' é narrada por Robert Walton, que ouve a história de Victor Frankenstein enquanto busca o Polo Norte."
  }
  
,

 {
    "Pergunta": "Qual é o título da obra de Charles Dickens que apresenta o protagonista órfão que pede mais comida em um orfanato?",
    "Opcoes": {
      A: "David Copperfield",
      B: "Grandes Esperanças",
      C: "Oliver Twist",
      D: "A Tale of Two Cities"
    },
    "Resposta": "C",
    "Motivo": "'Oliver Twist' é a obra de Charles Dickens que apresenta o protagonista órfão que pede mais comida em um orfanato, abordando temas de pobreza e injustiça social."
  },
  {
    "Pergunta": "Quem é o autor da obra 'O Morro dos Ventos Uivantes', um romance gótico que narra a tumultuada relação entre Heathcliff e Catherine Earnshaw?",
    "Opcoes": {
      A: "Jane Austen",
      B: "Emily Brontë",
      C: "Charlotte Brontë",
      D: "George Eliot"
    },
    "Resposta": "B",
    "Motivo": "Emily Brontë é a autora de 'O Morro dos Ventos Uivantes', um romance gótico que narra a tumultuada relação entre Heathcliff e Catherine Earnshaw nas charnecas inglesas."
  },
  
  {
    "Pergunta": "Quem é o autor da obra 'Dom Quixote', um romance que satiriza as novelas de cavalaria?",
    "Opcoes": {
      A: "Miguel de Cervantes",
      B: "García Márquez",
      C: "Jorge Luis Borges",
      D: "Gabriel García Lorca"
    },
    "Resposta": "A",
    "Motivo": "Miguel de Cervantes é o autor de 'Dom Quixote', um romance que satiriza as novelas de cavalaria e é considerado uma das obras mais importantes da literatura mundial."
  },
  {
    "Pergunta": "Quem é conhecido como o 'Bardo de Avon' e é considerado um dos maiores dramaturgos da literatura mundial?",
    "Opcoes": {
      A: "William Shakespeare",
      B: "John Milton",
      C: "Christopher Marlowe",
      D: "Ben Jonson"
    },
    "Resposta": "A",
    "Motivo": "William Shakespeare, conhecido como o 'Bardo de Avon', é considerado um dos maiores dramaturgos da literatura mundial, autor de peças como 'Romeu e Julieta' e 'Hamlet'."
  },
  {
    "Pergunta": "Quem é o autor da obra 'Cem Anos de Solidão', um dos principais representantes do realismo mágico?",
    "Opcoes": {
      A: "Gabriel García Márquez",
      B: "Isabel Allende",
      C: "Mario Vargas Llosa",
      D: "Jorge Luis Borges"
    },
    "Resposta": "A",
    "Motivo": "Gabriel García Márquez é o autor de 'Cem Anos de Solidão', uma obra-prima do realismo mágico que explora a história da família Buendía em Macondo."
  },
  {
    "Pergunta": "Quem é o autor da obra 'Romeu e Julieta', um dos maiores clássicos do teatro e da literatura?",
    "Opcoes": {
      A: "William Shakespeare",
      B: "Jane Austen",
      C: "Leo Tolstoy",
      D: "Fyodor Dostoevsky"
    },
    "Resposta": "A",
    "Motivo": "William Shakespeare é o autor de 'Romeu e Julieta', uma tragédia romântica que se tornou um dos maiores clássicos do teatro e da literatura mundial."
  },
  {
    "Pergunta": "Quem é conhecido por escrever 'O Processo' e 'A Metamorfose', obras que exploram temas do absurdo e da alienação?",
    "Opcoes": {
      A: "Franz Kafka",
      B: "Hermann Hesse",
      C: "Thomas Mann",
      D: "Albert Camus"
    },
    "Resposta": "A",
    "Motivo": "Franz Kafka é conhecido por escrever 'O Processo' e 'A Metamorfose', obras que exploram temas do absurdo, da alienação e da burocracia."
  },
  {
    "Pergunta": "Quem é o autor da obra 'O Retrato de Dorian Gray', que aborda temas como a decadência moral e a busca pela eterna juventude?",
    "Opcoes": {
      A: "Oscar Wilde",
      B: "James Joyce",
      C: "Virginia Woolf",
      D: "D.H. Lawrence"
    },
    "Resposta": "A",
    "Motivo": "Oscar Wilde é o autor de 'O Retrato de Dorian Gray', uma obra que aborda temas como a decadência moral e a busca pela eterna juventude através do retrato do protagonista."
  },
  
  {
    "Pergunta": "Quem é o autor da obra 'Dom Quixote', considerada uma das maiores obras da literatura mundial?",
    "Opcoes": {
      A: "Miguel de Cervantes",
      B: "William Shakespeare",
      C: "Jorge Luis Borges",
      D: "Gabriel García Márquez"
    },
    "Resposta": "A",
    "Motivo": "'Dom Quixote' foi escrito por Miguel de Cervantes e é considerada uma das maiores obras da literatura mundial, sendo uma sátira às novelas de cavalaria."
  },
  {
    "Pergunta": "Qual é o nome do personagem principal de 'Dom Quixote', que enlouquece ao ler muitos livros de cavalaria?",
    "Opcoes": {
      A: "Alonso Quixano",
      B: "Sancho Panza",
      C: "Dulcinea del Toboso",
      D: "Rocinante"
    },
    "Resposta": "A",
    "Motivo": "O personagem principal de 'Dom Quixote' é Alonso Quixano, que enlouquece ao ler muitos livros de cavalaria e assume a identidade de Dom Quixote, o cavaleiro andante."
  },
  {
    "Pergunta": "Qual é o nome do fiel escudeiro de Dom Quixote, conhecido por sua simplicidade e lealdade?",
    "Opcoes": {
      A: "Sancho Panza",
      B: "Dulcinea del Toboso",
      C: "Rocinante",
      D: "Aldonza Lorenzo"
    },
    "Resposta": "A",
    "Motivo": "O fiel escudeiro de Dom Quixote é chamado Sancho Panza. Sua simplicidade e lealdade são características marcantes na obra."
  },
  {
    "Pergunta": "Qual é o nome da dama idealizada por Dom Quixote, por quem ele se apaixona e dedica suas aventuras?",
    "Opcoes": {
      A: "Dulcinea del Toboso",
      B: "Rocinante",
      C: "Aldonza Lorenzo",
      D: "Marcela"
    },
    "Resposta": "A",
    "Motivo": "A dama idealizada por Dom Quixote, por quem ele se apaixona e dedica suas aventuras, é chamada Dulcinea del Toboso."
  },
  {
    "Pergunta": "Em 'Dom Quixote', que objeto é frequentemente confundido por Dom Quixote como um elmo mágico?",
    "Opcoes": {
      A: "Bacia de lavar",
      B: "Moinho de vento",
      C: "Baú de tesouro",
      D: "Escudo de cavaleiro"
    },
    "Resposta": "B",
    "Motivo": "Em 'Dom Quixote', Dom Quixote confunde moinhos de vento com gigantes e acredita que um deles é um elmo mágico, resultando em uma das cenas mais famosas da obra."
  },
  {
    "Pergunta": "Qual é o gênero literário de 'Dom Quixote', que combina elementos de sátira, paródia e novela de cavalaria?",
    "Opcoes": {
      A: "Romance de cavalaria",
      B: "Novela picaresca",
      C: "Romance realista",
      D: "Novela de amor cortês"
    },
    "Resposta": "A",
    "Motivo": "'Dom Quixote' pertence ao gênero literário do romance de cavalaria, mas é conhecido por combinar elementos de sátira, paródia e crítica social."
  },
  
  {
    "Pergunta": "Qual é o título da obra de Franz Kafka que aborda a alienação e a burocracia, seguindo o protagonista Josef K. em sua luta contra um sistema opressivo?",
    "Opcoes": {
      A: "O Processo",
      B: "A Metamorfose",
      C: "O Castelo",
      D: "América"
    },
    "Resposta": "A",
    "Motivo": "'O Processo' é a obra de Franz Kafka que aborda a alienação e a burocracia, explorando a jornada do protagonista Josef K. contra um sistema opressivo e impessoal."
  },
  {
    "Pergunta": "Em 'A Metamorfose', de Franz Kafka, qual é a condição peculiar que o protagonista Gregor Samsa desperta ao se transformar durante a noite?",
    "Opcoes": {
      A: "Inseto gigante",
      B: "Rato",
      C: "Ave migratória",
      D: "Serpente venenosa"
    },
    "Resposta": "A",
    "Motivo": "Em 'A Metamorfose', Gregor Samsa desperta transformado em um inseto gigante, lançando luz sobre temas de isolamento e estranhamento social."
  },
  {
    "Pergunta": "Qual é o tema central da obra 'O Castelo', de Franz Kafka, que segue o protagonista K. em sua busca por reconhecimento e aceitação em uma misteriosa aldeia?",
    "Opcoes": {
      A: "Exploração espacial",
      B: "Amor proibido",
      C: "Burocracia e alienação",
      D: "Vingança e traição"
    },
    "Resposta": "C",
    "Motivo": "'O Castelo', de Franz Kafka, explora o tema central da burocracia e alienação, seguindo o protagonista K. em sua busca por reconhecimento em uma aldeia misteriosa dominada por um castelo inacessível."
  },
  {
    "Pergunta": "Em 'América', de Franz Kafka, qual é a jornada do protagonista Karl Roßmann após ser enviado para os Estados Unidos por sua família?",
    "Opcoes": {
      A: "Busca por vingança",
      B: "Revolução política",
      C: "Procura por identidade",
      D: "Viagem ao espaço sideral"
    },
    "Resposta": "C",
    "Motivo": "'América', de Franz Kafka, segue a jornada de Karl Roßmann nos Estados Unidos, explorando temas de busca por identidade e pertencimento em um ambiente desconhecido."
  },
  {
    "Pergunta": "Qual é o termo frequentemente associado ao estilo literário de Franz Kafka, que envolve narrativas absurdas e situações inusitadas?",
    "Opcoes": {
      A: "Realismo mágico",
      B: "Romance gótico",
      C: "Expressionismo",
      D: "Kafkiano"
    },
    "Resposta": "D",
    "Motivo": "O estilo literário de Franz Kafka é frequentemente associado ao termo 'Kafkiano', que descreve narrativas absurdas, situações inusitadas e uma atmosfera de alienação e perplexidade."
  },
  {
    "Pergunta": "Na obra 'A Metamorfose' de Franz Kafka, qual é a transformação surpreendente que o protagonista Gregor Samsa sofre?",
    "Opcoes": {
      A: "Envelhecimento acelerado",
      B: "Invisibilidade",
      C: "Transformação em inseto",
      D: "Viagem no tempo"
    },
    "Resposta": "C",
    "Motivo": "Em 'A Metamorfose', Gregor Samsa sofre a transformação surpreendente de se tornar um inseto gigante, lançando as bases para a reflexão sobre a alienação e o estranhamento."
  },
  {
    "Pergunta": "Como a família de Gregor Samsa reage à sua metamorfose em 'A Metamorfose'?",
    "Opcoes": {
      A: "Aceitação imediata",
      B: "Choque e repulsa",
      C: "Alegria e comemoração",
      D: "Indiferença total"
    },
    "Resposta": "B",
    "Motivo": "Na obra 'A Metamorfose', a família de Gregor Samsa reage com choque e repulsa diante de sua metamorfose, contribuindo para o tom alienante da narrativa."
  },
  {
    "Pergunta": "Qual é o impacto da metamorfose de Gregor Samsa em sua relação com o mundo exterior e sua própria identidade?",
    "Opcoes": {
      A: "Melhoria de sua posição social",
      B: "Isolamento e alienação",
      C: "Ascensão profissional",
      D: "Ampliação de sua rede social"
    },
    "Resposta": "B",
    "Motivo": "A metamorfose de Gregor Samsa em 'A Metamorfose' resulta em isolamento e alienação, impactando negativamente sua relação com o mundo exterior e sua própria identidade."
  },
  {
    "Pergunta": "Como a sociedade retratada em 'A Metamorfose' responde à presença de Gregor Samsa como inseto?",
    "Opcoes": {
      A: "Admiração e respeito",
      B: "Integração completa",
      C: "Rejeição e desprezo",
      D: "Celebração da diferença"
    },
    "Resposta": "C",
    "Motivo": "Na obra 'A Metamorfose', a sociedade responde à presença de Gregor Samsa como inseto com rejeição e desprezo, refletindo a intolerância e a falta de compreensão em relação ao diferente."
  },
  
  {
    "Pergunta": "Qual é o subgênero literário associado à obra de H.P. Lovecraft, caracterizado por elementos de horror cósmico e entidades sobrenaturais?",
    "Opcoes": {
      A: "Romance policial",
      B: "Realismo mágico",
      C: "Horror cósmico",
      D: "Romance histórico"
    },
    "Resposta": "C",
    "Motivo": "A obra de H.P. Lovecraft é frequentemente associada ao subgênero do horror cósmico, que explora a insignificância humana diante de entidades sobrenaturais e desconhecidas."
  },
  {
    "Pergunta": "Qual é o título da obra de H.P. Lovecraft que apresenta o Necronomicon, um fictício livro de magia negra e invocações a seres cósmicos?",
    "Opcoes": {
      A: "As Montanhas da Loucura",
      B: "A Cor que Caiu do Espaço",
      C: "O Chamado de Cthulhu",
      D: "O Caso de Charles Dexter Ward"
    },
    "Resposta": "D",
    "Motivo": "'O Caso de Charles Dexter Ward' é a obra de H.P. Lovecraft que apresenta o Necronomicon, um fictício livro de magia negra que desencadeia eventos sinistros."
  },
  {
    "Pergunta": "Quem são os Antigos na mitologia criada por H.P. Lovecraft, frequentemente associados a entidades cósmicas e deidades alienígenas?",
    "Opcoes": {
      A: "Deuses gregos",
      B: "Vampiros",
      C: "Anjos caídos",
      D: "Grandes Antigos"
    },
    "Resposta": "D",
    "Motivo": "Na mitologia criada por H.P. Lovecraft, os Antigos são frequentemente associados a entidades cósmicas e deidades alienígenas, representando poderes além da compreensão humana."
  },
  {
    "Pergunta": "Qual é o nome da cidade fictícia frequentemente mencionada nas obras de H.P. Lovecraft, conhecida por ser um centro de atividade paranormal e encontros com seres sobrenaturais?",
    "Opcoes": {
      A: "Arkham",
      B: "Innsmouth",
      C: "Dunwich",
      D: "Kingsport"
    },
    "Resposta": "A",
    "Motivo": "Arkham é o nome da cidade fictícia frequentemente mencionada nas obras de H.P. Lovecraft, sendo um cenário recorrente para atividade paranormal e encontros com seres sobrenaturais."
  },
  {
    "Pergunta": "Qual é o título da obra de H.P. Lovecraft que apresenta a entidade cósmica Cthulhu, despertada de seu sono milenar para espalhar o caos?",
    "Opcoes": {
      A: "A Sombra sobre Innsmouth",
      B: "O Chamado de Cthulhu",
      C: "O Caso de Charles Dexter Ward",
      D: "Nas Montanhas da Loucura"
    },
    "Resposta": "B",
    "Motivo": "'O Chamado de Cthulhu' é a obra de H.P. Lovecraft que apresenta a entidade cósmica Cthulhu, despertada de seu sono milenar para espalhar o caos e insanidade entre os humanos."
  },
  {
    "Pergunta": "Qual é o conceito recorrente nas obras de H.P. Lovecraft que descreve a impossibilidade de compreender completamente o universo e a insanidade resultante desse conhecimento?",
    "Opcoes": {
      A: "Cosmicismo",
      B: "Realismo mágico",
      C: "Absurdismo",
      D: "Existencialismo"
    },
    "Resposta": "A",
    "Motivo": "O conceito recorrente nas obras de H.P. Lovecraft é o 'Cosmicismo', que descreve a impossibilidade de compreender completamente o universo e a insanidade resultante desse conhecimento."
  },
  {
    "Pergunta": "Em 'As Montanhas da Loucura' de H.P. Lovecraft, qual é o foco da expedição que descobre evidências de uma antiga civilização e encontros com seres cósmicos?",
    "Opcoes": {
      A: "Exploração espacial",
      B: "Escavação arqueológica",
      C: "Pesquisa oceanográfica",
      D: "Expedição polar"
    },
    "Resposta": "D",
    "Motivo": "'As Montanhas da Loucura' aborda uma expedição polar que descobre evidências de uma antiga civilização e encontros com seres cósmicos nas regiões inexploradas da Antártida."
  },
  {
    "Pergunta": "Em 'O Horror de Dunwich', de H.P. Lovecraft, qual é a ameaça sobrenatural que assola a cidade de Dunwich?",
    "Opcoes": {
      A: "Fantasmas",
      B: "Vampiros",
      C: "Zumbis",
      D: "Criatura cósmica"
    },
    "Resposta": "D",
    "Motivo": "'O Horror de Dunwich' apresenta uma ameaça sobrenatural em forma de uma criatura cósmica que assola a cidade de Dunwich, explorando os horrores do desconhecido."
  },
  {
    "Pergunta": "Qual é o tema central da obra 'Nas Montanhas da Loucura', de H.P. Lovecraft, que segue uma expedição à Antártida em busca de descobertas científicas?",
    "Opcoes": {
      A: "Descobertas arqueológicas",
      B: "Encontros amorosos",
      C: "Horrores cósmicos",
      D: "Aventuras marítimas"
    },
    "Resposta": "C",
    "Motivo": "'Nas Montanhas da Loucura' tem como tema central os horrores cósmicos descobertos durante uma expedição à Antártida, revelando segredos antigos e a presença de seres inimagináveis."
  },
  {
    "Pergunta": "Em 'O Chamado de Cthulhu', de H.P. Lovecraft, como Cthulhu é descrito em termos físicos?",
    "Opcoes": {
      A: "Dragão alado",
      B: "Polvo gigante",
      C: "Lobo lunar",
      D: "Serpente aquática"
    },
    "Resposta": "B",
    "Motivo": "Em 'O Chamado de Cthulhu', Cthulhu é descrito fisicamente como um monstro cósmico com características de polvo gigante, sendo uma das entidades mais icônicas do universo lovecraftiano."
  },
  {
    "Pergunta": "Qual é a característica comum nas histórias de H.P. Lovecraft que envolve o desaparecimento gradual do conhecimento e registros sobre seres cósmicos?",
    "Opcoes": {
      A: "Esquecimento cósmico",
      B: "Perda da razão",
      C: "Decadência cultural",
      D: "Amnésia universal"
    },
    "Resposta": "A",
    "Motivo": "Uma característica comum nas histórias de H.P. Lovecraft é o 'Esquecimento Cósmico', que envolve o desaparecimento gradual do conhecimento e registros sobre seres cósmicos, contribuindo para o horror cósmico."
  },
  {
    "Pergunta": "Em 'O Caso de Charles Dexter Ward', de H.P. Lovecraft, qual é o mistério que leva o protagonista a descobrir segredos sombrios relacionados à necromancia?",
    "Opcoes": {
      A: "Desaparecimento de pessoas",
      B: "Arte abstrata",
      C: "Relíquias antigas",
      D: "Genealogia familiar"
    },
    "Resposta": "D",
    "Motivo": "'O Caso de Charles Dexter Ward' segue o protagonista que, ao investigar sua genealogia familiar, descobre segredos sombrios relacionados à necromancia e práticas ocultas."
  }
  
  
  
  ]
    const perguntasMedicina = [
      {
    "Pergunta": "Explique o mecanismo de ação dos antibióticos beta-lactâmicos, destacando sua interação com as bactérias.",
    "Opcoes": {
      A: "Inibição da síntese de proteínas",
      B: "Bloqueio da replicação do DNA",
      C: "Inibição da parede celular",
      D: "Ativação do sistema imunológico"
    },
    "Resposta": "C",
    "Motivo": "Os antibióticos beta-lactâmicos, como a penicilina, agem inibindo a síntese da parede celular bacteriana, levando à lise celular e morte bacteriana."
  },
  {
    "Pergunta": "Como os fármacos anti-inflamatórios não esteroides (AINEs) atuam no organismo, e quais são os possíveis efeitos colaterais associados a seu uso prolongado?",
    "Opcoes": {
      A: "Inibição da enzima conversora de angiotensina",
      B: "Bloqueio de receptores de dopamina",
      C: "Inibição da síntese de prostaglandinas",
      D: "Estimulação do sistema imunológico"
    },
    "Resposta": "C",
    "Motivo": "Os AINEs atuam inibindo a síntese de prostaglandinas, substâncias que desencadeiam a inflamação. Os efeitos colaterais podem incluir danos ao trato gastrointestinal e problemas renais."
  },
  {
    "Pergunta": "Descreva o processo de potencial de ação em uma célula nervosa, incluindo os estágios de despolarização, repolarização e hiperpolarização.",
    "Opcoes": {
      A: "Despolarização: entrada de íons K+; Repolarização: saída de íons Na+; Hiperpolarização: entrada de íons Ca2+",
      B: "Despolarização: entrada de íons Na+; Repolarização: saída de íons K+; Hiperpolarização: entrada de íons Cl-",
      C: "Despolarização: entrada de íons Na+; Repolarização: saída de íons K+; Hiperpolarização: saída de íons Cl-",
      D: "Despolarização: entrada de íons K+; Repolarização: saída de íons Na+; Hiperpolarização: saída de íons Cl-"
    },
    "Resposta": "B",
    "Motivo": "No potencial de ação, a despolarização envolve a entrada rápida de íons Na+, seguida pela repolarização com saída de íons K+ e, ocasionalmente, hiperpolarização com saída de íons Cl-."
  },
  {
    "Pergunta": "Qual é a diferença entre uma enzima e um hormônio, e como cada um deles desempenha papéis distintos no corpo humano?",
    "Opcoes": {
      A: "As enzimas atuam como mensageiros químicos, e os hormônios catalisam reações bioquímicas.",
      B: "As enzimas são moléculas de sinalização, e os hormônios aceleram reações metabólicas.",
      C: "As enzimas são catalisadores biológicos, e os hormônios funcionam como mensageiros químicos.",
      D: "As enzimas regulam a homeostase, e os hormônios acionam reações enzimáticas."
    },
    "Resposta": "C",
    "Motivo": "Enzimas são catalisadores biológicos que aceleram reações químicas, enquanto hormônios são mensageiros químicos que regulam processos fisiológicos no corpo."
  },
  {
    "Pergunta": "Explique o conceito de resistência bacteriana aos antibióticos e mencione estratégias para combater esse problema crescente na prática clínica.",
    "Opcoes": {
      A: "Resistência causada por vacinação inadequada; Estratégia: aumento de doses de antibióticos.",
      B: "Resistência devido ao uso excessivo de antibióticos; Estratégia: prescrição controlada e conscientização.",
      C: "Resistência relacionada à exposição solar; Estratégia: uso de protetor solar antibacteriano.",
      D: "Resistência associada à ingestão de alimentos crus; Estratégia: cozimento em alta temperatura."
    },
    "Resposta": "B",
    "Motivo": "A resistência bacteriana aos antibióticos é frequentemente causada pelo uso excessivo ou inadequado desses medicamentos. Estratégias incluem prescrição controlada, conscientização e pesquisa de novos antibióticos."
  },
  {
    "Pergunta": "Descreva o ciclo menstrual feminino, incluindo os eventos hormonais que ocorrem nas fases folicular e lútea.",
    "Opcoes": {
      A: "Fase folicular: aumento de progesterona; Fase lútea: liberação de óvulo.",
      B: "Fase folicular: liberação de óvulo; Fase lútea: aumento de estrogênio.",
      C: "Fase folicular: aumento de estrogênio; Fase lútea: liberação de óvulo.",
      D: "Fase folicular: liberação de óvulo; Fase lútea: aumento de progesterona."
    },
    "Resposta": "C",
    "Motivo": "Na fase folicular, há aumento de estrogênio, preparando o útero. Na fase lútea, ocorre a liberação do óvulo e aumento de progesterona para manter o endométrio."
  },
  
  {
    "Pergunta": "Explique o conceito de medicina regenerativa e forneça exemplos de abordagens terapêuticas baseadas nessa abordagem inovadora.",
    "Opcoes": {
      A: "Medicina que regenera memórias; Exemplo: terapia cognitivo-comportamental.",
      B: "Medicina que restaura órgãos danificados; Exemplo: transplante de órgãos.",
      C: "Medicina que previne doenças crônicas; Exemplo: vacinação.",
      D: "Medicina que repara genes defeituosos; Exemplo: terapia gênica."
    },
    "Resposta": "D",
    "Motivo": "Medicina regenerativa visa a reparação ou substituição de tecidos danificados. A terapia gênica é um exemplo, visando corrigir ou substituir genes defeituosos para tratar doenças."
  },
  
    {
    "Pergunta": "Explique o conceito de ação dos anti-hipertensivos beta-bloqueadores e destaque sua relevância no tratamento da hipertensão arterial.",
    "Opcoes": {
      A: "Aumento da pressão arterial; Importância: estabilização do ritmo cardíaco.",
      B: "Bloqueio dos receptores de adrenalina; Importância: redução da frequência cardíaca e da pressão arterial.",
      C: "Estimulação do sistema imunológico; Importância: prevenção de infecções.",
      D: "Aumento da liberação de insulina; Importância: controle da glicose.",
    },
    "Resposta": "B",
    "Motivo": "Os beta-bloqueadores bloqueiam os receptores de adrenalina, reduzindo a frequência cardíaca e a força das contrações, resultando na diminuição da pressão arterial, sendo essenciais no tratamento da hipertensão."
  },
  {
    "Pergunta": "Descreva o mecanismo de ação dos analgésicos opioides e discuta os potenciais efeitos colaterais associados a seu uso prolongado.",
    "Opcoes": {
      A: "Estimulação do sistema nervoso central; Efeitos colaterais: hipotensão.",
      B: "Ativação de receptores opioides; Efeitos colaterais: constipação e dependência.",
      C: "Inibição da síntese de prostaglandinas; Efeitos colaterais: aumento da pressão arterial.",
      D: "Estimulação do sistema imunológico; Efeitos colaterais: insônia.",
    },
    "Resposta": "B",
    "Motivo": "Os analgésicos opioides ativam os receptores opioides no sistema nervoso, proporcionando alívio da dor. Efeitos colaterais incluem constipação e o risco de dependência com o uso prolongado."
  },
  {
    "Pergunta": "O que são os antimicrobianos de amplo espectro e qual é a sua importância no tratamento de infecções?",
    "Opcoes": {
      A: "Atuam contra vírus e fungos; Importância: tratamento de infecções virais.",
      B: "Efetivos contra diversos tipos de microrganismos; Importância: tratamento de infecções causadas por diferentes bactérias.",
      C: "Eficazes contra bactérias Gram-positivas; Importância: tratamento de infecções específicas.",
      D: "Agem exclusivamente em microrganismos resistentes; Importância: prevenção de resistência.",
    },
    "Resposta": "B",
    "Motivo": "Antimicrobianos de amplo espectro são eficazes contra diversos tipos de microrganismos, sendo essenciais para o tratamento de infecções causadas por diferentes bactérias, especialmente quando a identificação do patógeno é difícil."
  },
  {
    "Pergunta": "Explique o conceito de farmacocinética e farmacodinâmica, destacando suas diferenças e relevância no uso adequado de medicamentos.",
    "Opcoes": {
      A: "Farmacocinética: resposta do organismo ao medicamento; Farmacodinâmica: estudo da absorção.",
      B: "Farmacocinética: estudo do medicamento no corpo; Farmacodinâmica: interação do medicamento com o organismo.",
      C: "Farmacocinética: interação entre medicamentos; Farmacodinâmica: metabolismo dos medicamentos.",
      D: "Farmacocinética: escolha do medicamento; Farmacodinâmica: formulação do medicamento.",
    },
    "Resposta": "B",
    "Motivo": "Farmacocinética refere-se ao estudo da absorção, distribuição, metabolismo e excreção do medicamento no corpo. Farmacodinâmica aborda como o medicamento interage com o organismo para produzir seus efeitos, sendo cruciais para o uso adequado de medicamentos."
  },
  {
    "Pergunta": "Discuta a importância do sistema de classificação de risco fetal Apgar e como é aplicado no momento do nascimento.",
    "Opcoes": {
      A: "Avaliação da saúde materna; Aplicação: durante o pré-natal.",
      B: "Avaliação do risco de doenças genéticas; Aplicação: no primeiro trimestre gestacional.",
      C: "Avaliação do estado de saúde do recém-nascido; Aplicação: minutos após o nascimento.",
      D: "Determinação do tipo sanguíneo do feto; Aplicação: durante o parto.",
    },
    "Resposta": "C",
    "Motivo": "O sistema de classificação de risco fetal Apgar avalia o estado de saúde do recém-nascido nos primeiros minutos após o nascimento, considerando parâmetros como frequência cardíaca, respiração, reflexos, tônus muscular e cor da pele."
  },
  {
    "Pergunta": "Como a terapia de reposição hormonal é utilizada no tratamento de condições como a menopausa e quais são os riscos associados a esse tipo de intervenção?",
    "Opcoes": {
      A: "Substituição de hormônios sexuais; Riscos: aumento do risco de câncer de mama.",
      B: "Estimulação do sistema imunológico; Riscos: reações alérgicas.",
      C: "Regulação da pressão arterial; Riscos: hipotensão.",
      D: "Estabilização do humor; Riscos: aumento do risco de diabetes.",
    },
    "Resposta": "A",
    "Motivo": "A terapia de reposição hormonal envolve a substituição de hormônios sexuais, sendo utilizada no tratamento de sintomas da menopausa. No entanto, está associada ao aumento do risco de câncer de mama, entre outros riscos."
  },
{
    "Pergunta": "Um paciente apresenta cansaço extremo, falta de ar ao esforço e inchaço nas pernas. Qual diagnóstico hipotético poderia ser considerado?",
    "Opcoes": {
      A: "Anemia ferropriva",
      B: "Insuficiência cardíaca congestiva",
      C: "Pneumonia",
      D: "Diabetes mellitus"
    },
    "Resposta": "B",
    "Motivo": "Os sintomas descritos, como cansaço extremo e inchaço nas pernas, são indicativos de insuficiência cardíaca congestiva, uma condição na qual o coração não bombeia sangue de maneira eficiente."
  },
  {
    "Pergunta": "Uma paciente apresenta febre, dor abdominal no quadrante inferior direito e sensibilidade à palpação nessa região. Qual diagnóstico hipotético seria mais provável?",
    "Opcoes": {
      A: "Infecção do trato urinário",
      B: "Apendicite aguda",
      C: "Gastrite",
      D: "Doença diverticular"
    },
    "Resposta": "B",
    "Motivo": "Os sintomas descritos, incluindo dor no quadrante inferior direito, sugerem apendicite aguda, uma inflamação do apêndice que muitas vezes requer intervenção cirúrgica."
  },
  {
    "Pergunta": "Um paciente apresenta dor nas articulações, fadiga, rigidez matinal e inflamação em várias articulações. Qual diagnóstico hipotético seria mais apropriado?",
    "Opcoes": {
      A: "Artrite reumatoide",
      B: "Osteoartrite",
      C: "Gota",
      D: "Fibromialgia"
    },
    "Resposta": "A",
    "Motivo": "Os sintomas descritos são consistentes com artrite reumatoide, uma doença autoimune que afeta as articulações, causando inflamação, dor e eventual deformidade articular."
  },
  {
    "Pergunta": "Um paciente apresenta tosse persistente, perda de peso não intencional, fadiga e dor no peito. Qual diagnóstico hipotético seria mais preocupante e exigiria investigação adicional?",
    "Opcoes": {
      A: "Resfriado comum",
      B: "Pneumonia",
      C: "Câncer de pulmão",
      D: "Asma"
    },
    "Resposta": "C",
    "Motivo": "A combinação de tosse persistente, perda de peso não intencional e dor no peito levanta preocupações sobre câncer de pulmão, uma condição que geralmente requer avaliação diagnóstica urgente."
  },
  {
    "Pergunta": "Um paciente apresenta dor abdominal recorrente, diarreia, perda de peso e sangramento retal. Qual diagnóstico hipotético seria mais apropriado para essa apresentação clínica?",
    "Opcoes": {
      A: "Síndrome do intestino irritável",
      B: "Doença de Crohn",
      C: "Úlcera péptica",
      D: "Pancreatite"
    },
    "Resposta": "B",
    "Motivo": "A combinação de dor abdominal recorrente, diarreia, perda de peso e sangramento retal sugere a possibilidade de doença de Crohn, uma condição inflamatória intestinal crônica."
  },
  {
    "Pergunta": "Uma paciente apresenta dor intensa e súbita na parte inferior do abdômen, juntamente com sangramento vaginal. Qual diagnóstico hipotético seria mais provável?",
    "Opcoes": {
      A: "Endometriose",
      B: "Ruptura de cisto ovariano",
      C: "Apendicite aguda",
      D: "Gravidez ectópica"
    },
    "Resposta": "D",
    "Motivo": "A combinação de dor intensa na parte inferior do abdômen e sangramento vaginal sugere a possibilidade de gravidez ectópica, uma emergência médica."
  },
  {
    "Pergunta": "Um paciente apresenta icterícia, fezes claras e urina escura. Qual diagnóstico hipotético seria mais indicado para esses sintomas?",
    "Opcoes": {
      A: "Hepatite",
      B: "Pancreatite",
      C: "Doença renal",
      D: "Insuficiência cardíaca"
    },
    "Resposta": "A",
    "Motivo": "Icterícia, fezes claras e urina escura são características típicas de distúrbios hepáticos, como hepatite, indicando problemas no funcionamento do fígado."
  },
  
  {
    "Pergunta": "Um paciente que trabalha em um ambiente com exposição a poeira e fumaça apresenta tosse crônica, falta de ar e chiado no peito. Qual diagnóstico hipotético seria mais apropriado?",
    "Opcoes": {
      A: "Asma ocupacional",
      B: "Pneumonia",
      C: "Tuberculose",
      D: "Bronquite crônica",
    },
    "Resposta": "A",
    "Motivo": "A associação de exposição a poeira e fumaça com tosse crônica, falta de ar e chiado no peito sugere a possibilidade de asma ocupacional, uma condição respiratória relacionada ao ambiente de trabalho."
  },
  {
    "Pergunta": "Um paciente com histórico de hipertensão arterial, diabetes e tabagismo apresenta dor no peito, falta de ar e sudorese. Qual diagnóstico hipotético seria mais preocupante e exigiria avaliação urgente?",
    "Opcoes": {
      A: "Refluxo gastroesofágico",
      B: "Infarto agudo do miocárdio",
      C: "Pneumonia",
      D: "Angina estável",
    },
    "Resposta": "B",
    "Motivo": "Dor no peito, falta de ar e sudorese em um paciente com fatores de risco cardiovascular como hipertensão, diabetes e tabagismo levantam preocupações sobre infarto agudo do miocárdio, uma emergência médica."
  },
  {
    "Pergunta": "Um paciente apresenta febre alta, dor de garganta, manchas vermelhas na pele e gânglios linfáticos aumentados. Qual diagnóstico hipotético seria mais provável?",
    "Opcoes": {
      A: "Mononucleose infecciosa",
      B: "Gripe",
      C: "Catapora",
      D: "Escarlatina",
    },
    "Resposta": "D",
    "Motivo": "Os sintomas descritos, incluindo febre alta, dor de garganta, manchas vermelhas na pele e gânglios linfáticos aumentados, são característicos da escarlatina, uma infecção bacteriana."
  },
  {
    "Pergunta": "Uma paciente relata menstruações irregulares, ganho de peso, acne e crescimento de pelos faciais. Qual diagnóstico hipotético seria mais indicado?",
    "Opcoes": {
      A: "Síndrome do ovário policístico (SOP)",
      B: "Menopausa",
      C: "Endometriose",
      D: "Gravidez",
    },
    "Resposta": "A",
    "Motivo": "Os sintomas relatados, como menstruações irregulares, ganho de peso, acne e crescimento de pelos faciais, são sugestivos da síndrome do ovário policístico (SOP), um distúrbio hormonal comum em mulheres em idade fértil."
  },
  {
    "Pergunta": "Um paciente idoso apresenta perda de memória progressiva, confusão e dificuldade em realizar atividades diárias. Qual diagnóstico hipotético seria mais apropriado para essa apresentação clínica?",
    "Opcoes": {
      A: "Demência vascular",
      B: "Doença de Alzheimer",
      C: "Depressão",
      D: "Delirium",
    },
    "Resposta": "B",
    "Motivo": "A perda de memória progressiva, confusão e dificuldade em realizar atividades diárias são características típicas da doença de Alzheimer, a forma mais comum de demência em idosos."
  },
  {
    "Pergunta": "Um paciente com histórico de exposição ao amianto apresenta tosse persistente, dor no peito e perda de peso. Qual diagnóstico hipotético seria mais apropriado para essa apresentação clínica?",
    "Opcoes": {
      A: "Asbestose",
      B: "Pneumonia",
      C: "Câncer de pulmão",
      D: "Tuberculose",
    },
    "Resposta": "C",
    "Motivo": "A associação de exposição ao amianto com tosse persistente, dor no peito e perda de peso sugere a possibilidade de câncer de pulmão, sendo necessária uma avaliação médica para confirmação e manejo adequado."
  },
  
  {
    "Pergunta": "Um paciente com dor abdominal intensa e súbita, acompanhada de náuseas e vômitos, chega à emergência. Qual diagnóstico hipotético seria mais preocupante?",
    "Opcoes": {
      A: "Gastrite",
      B: "Apendicite aguda",
      C: "Colite",
      D: "Pancreatite aguda",
    },
    "Resposta": "D",
    "Motivo": "A dor abdominal intensa e súbita associada a náuseas e vômitos sugere a possibilidade de pancreatite aguda, uma condição grave que requer avaliação médica imediata."
  },
  {
    "Pergunta": "Um paciente apresenta febre, dor de garganta, gânglios linfáticos aumentados e uma erupção cutânea vermelha. Qual diagnóstico hipotético seria mais provável?",
    "Opcoes": {
      A: "Mononucleose infecciosa",
      B: "Catapora",
      C: "Sífilis",
      D: "Escabiose",
    },
    "Resposta": "A",
    "Motivo": "A combinação de febre, dor de garganta, gânglios linfáticos aumentados e erupção cutânea vermelha sugere a possibilidade de mononucleose infecciosa, uma infecção viral comum."
  },
  {
    "Pergunta": "Um paciente idoso relata dor nas articulações, rigidez matinal e inchaço nas mãos. Qual diagnóstico hipotético seria mais indicado?",
    "Opcoes": {
      A: "Osteoartrite",
      B: "Artrite reumatoide",
      C: "Gota",
      D: "Fibromialgia",
    },
    "Resposta": "B",
    "Motivo": "A dor nas articulações, rigidez matinal e inchaço nas mãos em um paciente idoso sugerem a possibilidade de artrite reumatoide, uma doença autoimune que afeta as articulações."
  },
  {
    "Pergunta": "Um paciente apresenta dor na panturrilha, inchaço, vermelhidão e calor local. Qual diagnóstico hipotético seria mais provável?",
    "Opcoes": {
      A: "Trombose venosa profunda",
      B: "Varizes",
      C: "Cãibras musculares",
      D: "Ciática",
    },
    "Resposta": "A",
    "Motivo": "A combinação de dor na panturrilha, inchaço, vermelhidão e calor local sugere a possibilidade de trombose venosa profunda, uma condição que requer avaliação médica urgente."
  },
   {
    "Pergunta": "Qual é o osso longo localizado na parte anterior da perna, conectando o joelho ao tornozelo?",
    "Opcoes": {
      A: "Fêmur",
      B: "Tíbia",
      C: "Fíbula",
      D: "Fêmur"
    },
    "Resposta": "B",
    "Motivo": "A tíbia é o osso longo localizado na parte anterior da perna, conectando o joelho ao tornozelo, enquanto a fíbula é outro osso da perna, mas geralmente menor."
  },
  {
    "Pergunta": "Quais são as principais artérias que suprem o coração?",
    "Opcoes": {
      A: "Artéria carótida",
      B: "Artéria pulmonar",
      C: "Artéria coronária",
      D: "Artéria aorta"
    },
    "Resposta": "C",
    "Motivo": "As artérias coronárias são responsáveis por fornecer sangue ao músculo cardíaco. Elas são cruciais para a função cardíaca adequada."
  },
  {
    "Pergunta": "O que é uma apendicectomia?",
    "Opcoes": {
      A: "Remoção do apêndice",
      B: "Cirurgia de coração aberto",
      C: "Transplante renal",
      D: "Cirurgia de catarata"
    },
    "Resposta": "A",
    "Motivo": "Uma apendicectomia é a remoção cirúrgica do apêndice, geralmente devido a uma inflamação aguda conhecida como apendicite."
  },
  {
    "Pergunta": "Qual é a principal função do pâncreas no sistema digestivo?",
    "Opcoes": {
      A: "Produção de bile",
      B: "Produção de insulina",
      C: "Digestão de proteínas",
      D: "Armazenamento de glicose"
    },
    "Resposta": "B",
    "Motivo": "O pâncreas desempenha um papel vital na regulação dos níveis de glicose no sangue produzindo insulina, um hormônio essencial para o metabolismo da glicose."
  },
  {
    "Pergunta": "Onde está localizado o úmero no corpo humano?",
    "Opcoes": {
      A: "Coxa",
      B: "Antebraço",
      C: "Crânio",
      D: "Braço"
    },
    "Resposta": "D",
    "Motivo": "O úmero é um osso longo localizado no braço, conectando o ombro ao cotovelo. É um dos principais ossos do membro superior."
  },
  {
    "Pergunta": "O que é a traqueia?",
    "Opcoes": {
      A: "Tubo que leva o ar para os pulmões",
      B: "Tubo digestivo",
      C: "Canal urinário",
      D: "Vaso sanguíneo"
    },
    "Resposta": "A",
    "Motivo": "A traqueia é um tubo que leva o ar inspirado para os pulmões, ramificando-se em brônquios para alcançar os pulmões direito e esquerdo."
  },
  {
    "Pergunta": "Quais são os ossos da mão?",
    "Opcoes": {
      A: "Fêmur, tíbia e fíbula",
      B: "Rádio e ulna",
      C: "Metacarpos e falanges",
      D: "Úmero e clavícula"
    },
    "Resposta": "C",
    "Motivo": "Os ossos da mão incluem os metacarpos (ossos da palma) e as falanges (ossos dos dedos)."
  },
  {
    "Pergunta": "O que é a vesícula biliar?",
    "Opcoes": {
      A: "Órgão responsável pela produção de insulina",
      B: "Saco muscular que armazena bile",
      C: "Órgão que produz células sanguíneas",
      D: "Parte do intestino delgado"
    },
    "Resposta": "B",
    "Motivo": "A vesícula biliar é um saco muscular que armazena bile, liberando-a no intestino delgado para auxiliar na digestão de gorduras."
  },
  
  {
    "Pergunta": "O que é a cavidade torácica?",
    "Opcoes": {
      A: "Espaço onde estão os órgãos abdominais",
      B: "Área do pescoço",
      C: "Região da cabeça",
      D: "Compartimento que abriga os pulmões e o coração",
    },
    "Resposta": "D",
    "Motivo": "A cavidade torácica é o compartimento que abriga os pulmões e o coração, protegendo esses órgãos vitais."
  },
  {
    "Pergunta": "O que é a glândula tireoide responsável por produzir?",
    "Opcoes": {
      A: "Insulina",
      B: "Hormônios relacionados ao crescimento",
      C: "Hormônios tireoidianos que regulam o metabolismo",
      D: "Adrenalina",
    },
    "Resposta": "C",
    "Motivo": "A glândula tireoide produz hormônios tireoidianos que desempenham um papel fundamental na regulação do metabolismo e do crescimento."
  },
  {
    "Pergunta": "Qual é a função primária do sistema cardiovascular?",
    "Opcoes": {
      A: "Digestão de alimentos",
      B: "Transporte de oxigênio para as células",
      C: "Eliminação de resíduos",
      D: "Defesa contra infecções",
    },
    "Resposta": "B",
    "Motivo": "O sistema cardiovascular é responsável pelo transporte de oxigênio, nutrientes e hormônios para as células do corpo, além de remover resíduos metabólicos."
  },
  {
    "Pergunta": "O que é o cólon?",
    "Opcoes": {
      A: "Parte superior do intestino delgado",
      B: "Última porção do intestino grosso",
      C: "Órgão responsável pela produção de bile",
      D: "Glândula endócrina",
    },
    "Resposta": "B",
    "Motivo": "O cólon é a última porção do intestino grosso, desempenhando um papel na absorção de água e na formação das fezes."
  },
  {
    "Pergunta": "O que é a medula óssea responsável por produzir?",
    "Opcoes": {
      A: "Insulina",
      B: "Células sanguíneas, incluindo glóbulos vermelhos, brancos e plaquetas",
      C: "Hormônios sexuais",
      D: "Adrenalina",
    },
    "Resposta": "B",
    "Motivo": "A medula óssea é responsável pela produção de células sanguíneas, incluindo glóbulos vermelhos, glóbulos brancos e plaquetas."
  },
  {
    "Pergunta": "Qual é o nome do osso que forma a parte superior da caixa craniana, protegendo o cérebro?",
    "Opcoes": {
      A: "Mandíbula",
      B: "Côndilo",
      C: "Escápula",
      D: "Crânio",
    },
    "Resposta": "D",
    "Motivo": "O crânio é o osso que forma a parte superior da caixa craniana, proporcionando proteção ao cérebro."
  },
  {
    "Pergunta": "Onde está localizado o apêndice?",
    "Opcoes": {
      A: "Intestino delgado",
      B: "Fígado",
      C: "Coração",
      D: "Ceco (parte inicial do intestino grosso)",
    },
    "Resposta": "D",
    "Motivo": "O apêndice está localizado no ceco, que é a parte inicial do intestino grosso, próximo ao ponto de transição para o intestino delgado."
  },
  {
    "Pergunta": "O que é o pericárdio?",
    "Opcoes": {
      A: "Membrana que reveste o pulmão",
      B: "Membrana que reveste o coração",
      C: "Osso do quadril",
      D: "Músculo respiratório",
    },
    "Resposta": "B",
    "Motivo": "O pericárdio é a membrana que reveste o coração, proporcionando proteção e facilitando os movimentos cardíacos."
  },
  
  {
    "Pergunta": "Qual é o principal papel dos linfócitos T no sistema imunológico?",
    "Opcoes": {
      A: "Produção de anticorpos",
      B: "Fagocitose de bactérias",
      C: "Ativação de outras células imunológicas",
      D: "Transporte de oxigênio",
    },
    "Resposta": "C",
    "Motivo": "Os linfócitos T desempenham um papel central na ativação de outras células imunológicas e na coordenação da resposta imunológica."
  },
  {
    "Pergunta": "Quais são os principais tipos de linfócitos no corpo humano?",
    "Opcoes": {
      A: "Linfócitos B e monócitos",
      B: "Linfócitos T e neutrófilos",
      C: "Linfócitos T e linfócitos B",
      D: "Linfócitos NK e eosinófilos",
    },
    "Resposta": "C",
    "Motivo": "Os principais tipos de linfócitos são os linfócitos T e os linfócitos B, desempenhando papéis distintos na resposta imunológica."
  },
  {
    "Pergunta": "O que são os linfócitos NK?",
    "Opcoes": {
      A: "Linfócitos responsáveis pela produção de anticorpos",
      B: "Linfócitos especializados na fagocitose de patógenos",
      C: "Linfócitos que atacam células infectadas ou cancerígenas",
      D: "Linfócitos envolvidos na coagulação sanguínea",
    },
    "Resposta": "C",
    "Motivo": "Os linfócitos NK (Natural Killer) são células do sistema imunológico que atacam células infectadas ou cancerígenas sem a necessidade de estimulação prévia."
  },
  {
    "Pergunta": "O que é a anemia falciforme?",
    "Opcoes": {
      A: "Doença genética que afeta a coagulação sanguínea",
      B: "Deficiência de ferro no organismo",
      C: "Alteração na forma das hemácias devido a uma mutação genética",
      D: "Aumento anormal do número de leucócitos",
    },
    "Resposta": "C",
    "Motivo": "A anemia falciforme é uma doença genética caracterizada pela alteração na forma das hemácias devido a uma mutação no gene da hemoglobina."
  },
  {
    "Pergunta": "O que é a trombose venosa profunda?",
    "Opcoes": {
      A: "Obstrução de artérias coronárias",
      B: "Coágulos sanguíneos em veias profundas, geralmente nas pernas",
      C: "Inflamação das veias",
      D: "Aumento da pressão arterial",
    },
    "Resposta": "B",
    "Motivo": "A trombose venosa profunda é caracterizada pela formação de coágulos sanguíneos em veias profundas, geralmente nas pernas, podendo representar um risco sério de complicações."
  },
  {
    "Pergunta": "O que é o teste de Schilling?",
    "Opcoes": {
      A: "Avaliação da função hepática",
      B: "Exame de imagem do sistema nervoso",
      C: "Avaliação da absorção de vitamina B12",
      D: "Teste de função renal",
    },
    "Resposta": "C",
    "Motivo": "O teste de Schilling é utilizado para avaliar a absorção de vitamina B12 no intestino, fornecendo informações sobre a função do trato gastrointestinal."
  },
  {
    "Pergunta": "O que caracteriza a síndrome de Stevens-Johnson?",
    "Opcoes": {
      A: "Inflamação dos pulmões",
      B: "Comprometimento dos rins devido a infecção",
      C: "Reação alérgica grave que afeta a pele e as mucosas",
      D: "Degeneração muscular progressiva",
    },
    "Resposta": "C",
    "Motivo": "A síndrome de Stevens-Johnson é uma reação alérgica grave que afeta a pele e as mucosas, podendo resultar em descamação da pele e complicações sistêmicas."
  },
  
  {
    "Pergunta": "O que é uma apendicectomia?",
    "Opcoes": {
      A: "Remoção do apêndice",
      B: "Cirurgia cardíaca para reparo de válvulas",
      C: "Extração de cálculos biliares",
      D: "Intervenção cirúrgica no estômago",
    },
    "Resposta": "A",
    "Motivo": "A apendicectomia é a cirurgia de remoção do apêndice, geralmente realizada em casos de apendicite aguda."
  },
  {
    "Pergunta": "O que é uma anastomose em cirurgia?",
    "Opcoes": {
      A: "Remoção de órgão afetado por câncer",
      B: "Ligação cirúrgica entre dois segmentos de tubo ou vasos",
      C: "Realização de biópsia em tecidos",
      D: "Transplante de órgãos",
    },
    "Resposta": "B",
    "Motivo": "Em cirurgia, a anastomose refere-se à ligação cirúrgica entre dois segmentos de tubo ou vasos sanguíneos, restabelecendo a continuidade normal."
  },
  {
    "Pergunta": "O que é uma cirurgia de bypass coronariano?",
    "Opcoes": {
      A: "Cirurgia para tratar aneurisma cerebral",
      B: "Intervenção para corrigir deformidades nas válvulas cardíacas",
      C: "Cirurgia para desobstruir artérias coronárias",
      D: "Remoção de tumores no coração",
    },
    "Resposta": "C",
    "Motivo": "A cirurgia de bypass coronariano é realizada para desobstruir as artérias coronárias, proporcionando um novo caminho para o fluxo sanguíneo ao redor das áreas bloqueadas."
  },
  {
    "Pergunta": "O que é uma ressecção hepática?",
    "Opcoes": {
      A: "Remoção de cálculos renais",
      B: "Cirurgia para tratar hérnias inguinais",
      C: "Remoção de parte do fígado",
      D: "Intervenção para corrigir deformidades na vesícula biliar",
    },
    "Resposta": "C",
    "Motivo": "A ressecção hepática é a cirurgia que envolve a remoção de parte do fígado, podendo ser realizada para tratar tumores, lesões ou outras condições hepáticas."
  },
  {
    "Pergunta": "O que é uma colostomia?",
    "Opcoes": {
      A: "Ligação cirúrgica entre dois segmentos de intestino",
      B: "Remoção do cólon",
      C: "Abertura artificial no abdômen para eliminar fezes",
      D: "Cirurgia para tratar úlceras no estômago",
    },
    "Resposta": "C",
    "Motivo": "Uma colostomia envolve a criação de uma abertura artificial no abdômen, conectando o cólon à superfície da pele para a eliminação de fezes quando o trânsito intestinal normal é interrompido."
  },
  {
    "Pergunta": "O que é uma nefrectomia?",
    "Opcoes": {
      A: "Cirurgia para tratar problemas no nervo ciático",
      B: "Remoção de parte do pulmão",
      C: "Remoção do rim",
      D: "Intervenção para corrigir deformidades na coluna vertebral",
    },
    "Resposta": "C",
    "Motivo": "A nefrectomia é a cirurgia que envolve a remoção de um ou ambos os rins, geralmente realizada em casos de tumores renais, infecções graves ou outros problemas renais."
  },
  {
    "Pergunta": "O que é uma colecistectomia?",
    "Opcoes": {
      A: "Remoção do apêndice",
      B: "Cirurgia para tratar hérnias inguinais",
      C: "Remoção da vesícula biliar",
      D: "Cirurgia para corrigir obstrução intestinal",
    },
    "Resposta": "C",
    "Motivo": "A colecistectomia é a cirurgia de remoção da vesícula biliar, geralmente realizada devido a cálculos biliares ou outras condições que afetam esse órgão."
  }
  
  
  
  ]
    const perguntasPolitica = [
      {
    "Pergunta": "O que é um sistema parlamentar de governo?",
    "Opcoes": {
      A: "Sistema em que o chefe de Estado é eleito por voto popular",
      B: "Sistema em que o chefe de governo é eleito por voto popular",
      C: "Sistema em que o chefe de Estado e o chefe de governo são cargos separados",
      D: "Sistema em que o chefe de governo é nomeado pelo chefe de Estado",
    },
    "Resposta": "D",
    "Motivo": "No sistema parlamentar, o chefe de governo (primeiro-ministro) é geralmente nomeado pelo chefe de Estado (monarca ou presidente) e não é eleito diretamente pelo voto popular."
  },
  {
    "Pergunta": "O que é uma monarquia constitucional?",
    "Opcoes": {
      A: "Forma de governo em que o poder está concentrado nas mãos de um monarca absoluto",
      B: "Sistema em que o chefe de Estado é eleito por voto popular",
      C: "Sistema em que o monarca exerce poderes limitados, sujeitos a uma constituição",
      D: "Forma de governo em que o chefe de governo é hereditário",
    },
    "Resposta": "C",
    "Motivo": "Na monarquia constitucional, o monarca exerce poderes limitados pela constituição, sendo o sistema de governo em que a monarquia coexiste com uma estrutura constitucional."
  },
  {
    "Pergunta": "O que é um sistema presidencialista?",
    "Opcoes": {
      A: "Sistema em que o chefe de governo é eleito por voto popular",
      B: "Sistema em que o chefe de Estado é nomeado pelo chefe de governo",
      C: "Sistema em que o chefe de Estado e o chefe de governo são cargos separados",
      D: "Sistema em que o chefe de governo é nomeado pelo parlamento",
    },
    "Resposta": "C",
    "Motivo": "No sistema presidencialista, o chefe de Estado (presidente) e o chefe de governo (primeiro-ministro) são cargos separados, sendo o presidente eleito diretamente pelo voto popular."
  },
  {
    "Pergunta": "O que é um regime democrático?",
    "Opcoes": {
      A: "Sistema de governo em que as decisões são tomadas por um único partido",
      B: "Sistema de governo em que o poder está concentrado em um único líder",
      C: "Sistema em que o poder é exercido pelo povo, geralmente por meio de eleições",
      D: "Forma de governo em que a sucessão é determinada por hereditariedade",
    },
    "Resposta": "C",
    "Motivo": "Um regime democrático é caracterizado pelo exercício do poder pelo povo, geralmente por meio de eleições livres e periódicas, assegurando a participação dos cidadãos nas decisões políticas."
  },
  {
    "Pergunta": "O que é uma república parlamentarista?",
    "Opcoes": {
      A: "Forma de governo em que o chefe de Estado é hereditário",
      B: "Sistema em que o chefe de governo é eleito por voto popular",
      C: "Sistema em que o chefe de Estado e o chefe de governo são cargos separados",
      D: "Forma de governo em que o chefe de Estado exerce poder absoluto",
    },
    "Resposta": "C",
    "Motivo": "Na república parlamentarista, o chefe de Estado (presidente ou monarca) e o chefe de governo (primeiro-ministro) são cargos separados, com o chefe de governo sendo geralmente eleito pelo parlamento."
  },
  {
    "Pergunta": "O que caracteriza um sistema federal?",
    "Opcoes": {
      A: "Concentração de poderes em um único órgão central",
      B: "Divisão de poderes entre um governo central e entidades subnacionais",
      C: "Sistema em que o chefe de governo é eleito por voto popular",
      D: "Forma de governo em que a sucessão é determinada por hereditariedade",
    },
    "Resposta": "B",
    "Motivo": "Um sistema federal é caracterizado pela divisão de poderes entre um governo central e entidades subnacionais (estados, províncias, etc.), cada um com sua esfera de competência definida pela constituição."
  },
  {
    "Pergunta": "O que é um sistema totalitário?",
    "Opcoes": {
      A: "Sistema em que o chefe de Estado é eleito por voto popular",
      B: "Concentração de poderes em um único órgão central",
      C: "Sistema em que o poder é compartilhado entre diversos órgãos",
      D: "Forma de governo em que o governo controla todos os aspectos da vida pública e privada",
    },
    "Resposta": "D",
    "Motivo": "Um sistema totalitário é caracterizado pelo controle absoluto do governo sobre todos os aspectos da vida pública e privada, restringindo as liberdades individuais e suprimindo a oposição política."
  },
  
   {
    "Pergunta": "Quais eventos políticos marcaram o Brasil nos últimos anos?",
    "Opcoes": {
      A: "Impeachment da presidente Dilma Rousseff",
      B: "Eleição de Jair Bolsonaro como presidente",
      C: "Operação Lava Jato e escândalos de corrupção",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "Os últimos anos no Brasil foram marcados por eventos como o impeachment da presidente Dilma Rousseff, a eleição de Jair Bolsonaro como presidente e a Operação Lava Jato, revelando escândalos de corrupção em diferentes setores."
  },
  {
    "Pergunta": "Quais foram alguns dos principais temas discutidos na política internacional recentemente?",
    "Opcoes": {
      A: "Pandemia de COVID-19 e resposta global",
      B: "Tensões comerciais entre Estados Unidos e China",
      C: "Crise migratória em diferentes regiões",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "A política internacional nos últimos anos abordou temas como a pandemia de COVID-19 e a resposta global, as tensões comerciais entre Estados Unidos e China, além de crises migratórias em diferentes partes do mundo."
  },
  {
    "Pergunta": "Como as redes sociais têm impactado a política nos últimos anos?",
    "Opcoes": {
      A: "Contribuindo para a disseminação de notícias falsas e desinformação",
      B: "Facilitando o engajamento cívico e a mobilização política",
      C: "Ampliando o diálogo democrático entre diferentes grupos",
      D: "Apenas uma ferramenta de entretenimento",
    },
    "Resposta": "A",
    "Motivo": "As redes sociais têm impactado a política recentemente, contribuindo para a disseminação de notícias falsas e desinformação, além de influenciar a opinião pública e o comportamento eleitoral."
  },
  {
    "Pergunta": "Quais são algumas das questões ambientais discutidas na política global?",
    "Opcoes": {
      A: "Mudanças climáticas e redução das emissões de carbono",
      B: "Preservação da biodiversidade e conservação de ecossistemas",
      C: "Uso sustentável dos recursos naturais",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "Na política global, questões ambientais como mudanças climáticas, redução das emissões de carbono, preservação da biodiversidade e uso sustentável dos recursos naturais têm sido temas recorrentes."
  },
  {
    "Pergunta": "Como a pandemia de COVID-19 influenciou a política mundial?",
    "Opcoes": {
      A: "Fortalecendo a cooperação internacional na busca por soluções",
      B: "Aumentando o nacionalismo e a polarização política",
      C: "Diminuindo o interesse da população em assuntos políticos",
      D: "Apenas afetando questões de saúde pública",
    },
    "Resposta": "B",
    "Motivo": "A pandemia de COVID-19 teve impactos na política mundial, aumentando o nacionalismo e a polarização política em alguns países, enquanto em outros fortaleceu a cooperação internacional na busca por soluções comuns."
  },
  {
    "Pergunta": "Quais movimentos sociais ganharam destaque nos últimos anos?",
    "Opcoes": {
      A: "Movimento Black Lives Matter",
      B: "Protestos pró-democracia em Hong Kong",
      C: "Greve Global pelo Clima",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "Nos últimos anos, movimentos sociais como o Black Lives Matter, os protestos pró-democracia em Hong Kong e a Greve Global pelo Clima ganharam destaque, abordando questões fundamentais de direitos humanos, democracia e meio ambiente."
  },
  {
    "Pergunta": "Quais foram os desdobramentos da saída do Reino Unido da União Europeia, conhecida como Brexit?",
    "Opcoes": {
      A: "Fortalecimento da integração europeia",
      B: "Impactos econômicos e comerciais",
      C: "Aumento da cooperação bilateral",
      D: "Somente uma mudança simbólica",
    },
    "Resposta": "B",
    "Motivo": "O Brexit resultou em significativos impactos econômicos e comerciais, com mudanças nas relações comerciais, políticas e sociais entre o Reino Unido e a União Europeia."
  },
  {
    "Pergunta": "Qual é o papel das organizações supranacionais, como a ONU, na condução de questões globais?",
    "Opcoes": {
      A: "Intervir militarmente em conflitos regionais",
      B: "Promover a cooperação internacional e a paz",
      C: "Definir políticas nacionais de cada país",
      D: "Atuar exclusivamente na área econômica",
    },
    "Resposta": "B",
    "Motivo": "Organizações supranacionais, como a ONU, têm como papel principal promover a cooperação internacional, a paz e a resolução de conflitos sem intervenção militar direta."
  },
  {
    "Pergunta": "Quais foram os impactos da ascensão do populismo em alguns países nos últimos anos?",
    "Opcoes": {
      A: "Fortalecimento das instituições democráticas",
      B: "Aumento da polarização política",
      C: "Promoção da diversidade e inclusão social",
      D: "Somente mudanças superficiais",
    },
    "Resposta": "B",
    "Motivo": "A ascensão do populismo em alguns países nos últimos anos tem sido associada ao aumento da polarização política, gerando debates intensos e divisões na sociedade."
  },
  {
    "Pergunta": "Como a tecnologia tem impactado a política, especialmente em relação à participação cidadã?",
    "Opcoes": {
      A: "Redução da participação cidadã devido à complexidade tecnológica",
      B: "Ampliação do acesso à informação e engajamento por meio das redes sociais",
      C: "Exclusão de determinados grupos sociais do processo político",
      D: "Apenas uma ferramenta de comunicação entre políticos",
    },
    "Resposta": "B",
    "Motivo": "A tecnologia, especialmente as redes sociais, tem ampliado o acesso à informação e proporcionado maior engajamento cívico, embora também apresente desafios relacionados à desinformação e à exclusão de alguns grupos."
  },
  {
    "Pergunta": "Como o fenômeno das fake news pode impactar processos eleitorais?",
    "Opcoes": {
      A: "Contribuindo para uma campanha eleitoral mais transparente",
      B: "Influenciando indevidamente a opinião pública",
      C: "Fortalecendo a confiança no sistema democrático",
      D: "Tendo impacto mínimo nas eleições",
    },
    "Resposta": "B",
    "Motivo": "As fake news podem influenciar indevidamente a opinião pública, distorcendo informações e prejudicando a transparência e a equidade em processos eleitorais."
  },
  {
    "Pergunta": "Quais são as implicações geopolíticas da disputa entre Estados Unidos e China?",
    "Opcoes": {
      A: "Aumento da cooperação econômica global",
      B: "Rivalidade por influência política e econômica",
      C: "Fortalecimento da União Europeia",
      D: "Apenas uma competição tecnológica",
    },
    "Resposta": "B",
    "Motivo": "A disputa entre Estados Unidos e China tem implicações geopolíticas, marcadas por uma rivalidade por influência política e econômica, abrangendo questões comerciais, tecnológicas e estratégicas."
  },
  {
    "Pergunta": "Quais são os desafios enfrentados pelos sistemas democráticos no século XXI?",
    "Opcoes": {
      A: "Consolidação plena da democracia em todo o mundo",
      B: "Riscos relacionados à desinformação e ataques cibernéticos",
      C: "Redução da participação cidadã devido à globalização",
      D: "Apenas questões econômicas",
    },
    "Resposta": "B",
    "Motivo": "Os sistemas democráticos no século XXI enfrentam desafios relacionados à desinformação, ataques cibernéticos e a necessidade de adaptação a um ambiente globalizado, buscando preservar a integridade do processo democrático."
  },
  {
    "Pergunta": "Quais foram os impactos políticos da crise financeira global de 2008?",
    "Opcoes": {
      A: "Fortalecimento das instituições financeiras internacionais",
      B: "Aumento da confiança nas políticas econômicas tradicionais",
      C: "Emergência de movimentos populistas",
      D: "Impacto mínimo na esfera política",
    },
    "Resposta": "C",
    "Motivo": "A crise financeira global de 2008 contribuiu para a emergência de movimentos populistas em diversos países, refletindo em mudanças na esfera política e econômica."
  },
  {
    "Pergunta": "Como a questão da imigração tem influenciado a política em diferentes regiões do mundo?",
    "Opcoes": {
      A: "Promoção da integração e diversidade cultural",
      B: "Fortalecimento do isolacionismo e xenofobia",
      C: "Apenas impactos econômicos isolados",
      D: "Influência mínima na agenda política",
    },
    "Resposta": "B",
    "Motivo": "A questão da imigração tem influenciado a política em diferentes regiões do mundo, provocando debates sobre integração, diversidade cultural, isolacionismo e xenofobia."
  },
  {
    "Pergunta": "Como a pandemia de COVID-19 afetou a agenda política e as relações internacionais?",
    "Opcoes": {
      A: "Reforçando a cooperação global e solidariedade entre países",
      B: "Aumentando o nacionalismo e a competição por recursos",
      C: "Reduzindo o papel das organizações internacionais",
      D: "Impacto mínimo nas relações internacionais",
    },
    "Resposta": "B",
    "Motivo": "A pandemia de COVID-19 teve impactos na agenda política e nas relações internacionais, ampliando o nacionalismo e intensificando a competição por recursos, além de desafiar a cooperação global em alguns aspectos."
  },
  {
    "Pergunta": "Quais são os principais desafios enfrentados pela democracia representativa atualmente?",
    "Opcoes": {
      A: "Fortalecimento da participação cidadã",
      B: "Desafios relacionados à representatividade e confiança",
      C: "Exclusão de minorias no processo político",
      D: "Apenas questões econômicas",
    },
    "Resposta": "B",
    "Motivo": "A democracia representativa enfrenta desafios relacionados à representatividade e à confiança, buscando superar questões como o distanciamento entre representantes e representados, bem como a representação efetiva de diversidade de perspectivas."
  },
  {
    "Pergunta": "Qual é a importância do ativismo social na influência de mudanças políticas?",
    "Opcoes": {
      A: "Impacto mínimo, com mudanças ocorrendo apenas por meio de processos institucionais",
      B: "Contribuição significativa para a promoção de mudanças políticas",
      C: "Ativismo social é exclusivamente uma expressão de protesto",
      D: "Influência restrita a questões específicas, sem impacto duradouro",
    },
    "Resposta": "B",
    "Motivo": "O ativismo social desempenha um papel significativo na promoção de mudanças políticas, influenciando agendas, sensibilizando a opinião pública e mobilizando a sociedade para questões relevantes."
  }, {
    "Pergunta": "Quais eventos políticos marcaram o Brasil nos últimos anos?",
    "Opcoes": {
      A: "Impeachment da presidente Dilma Rousseff",
      B: "Eleição de Jair Bolsonaro como presidente",
      C: "Operação Lava Jato e escândalos de corrupção",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "Os últimos anos no Brasil foram marcados por eventos como o impeachment da presidente Dilma Rousseff, a eleição de Jair Bolsonaro como presidente e a Operação Lava Jato, revelando escândalos de corrupção em diferentes setores."
  },
  {
    "Pergunta": "Quais foram alguns dos principais temas discutidos na política internacional recentemente?",
    "Opcoes": {
      A: "Pandemia de COVID-19 e resposta global",
      B: "Tensões comerciais entre Estados Unidos e China",
      C: "Crise migratória em diferentes regiões",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "A política internacional nos últimos anos abordou temas como a pandemia de COVID-19 e a resposta global, as tensões comerciais entre Estados Unidos e China, além de crises migratórias em diferentes partes do mundo."
  },
  {
    "Pergunta": "Como as redes sociais têm impactado a política nos últimos anos?",
    "Opcoes": {
      A: "Contribuindo para a disseminação de notícias falsas e desinformação",
      B: "Facilitando o engajamento cívico e a mobilização política",
      C: "Ampliando o diálogo democrático entre diferentes grupos",
      D: "Apenas uma ferramenta de entretenimento",
    },
    "Resposta": "A",
    "Motivo": "As redes sociais têm impactado a política recentemente, contribuindo para a disseminação de notícias falsas e desinformação, além de influenciar a opinião pública e o comportamento eleitoral."
  },
  {
    "Pergunta": "Quais são algumas das questões ambientais discutidas na política global?",
    "Opcoes": {
      A: "Mudanças climáticas e redução das emissões de carbono",
      B: "Preservação da biodiversidade e conservação de ecossistemas",
      C: "Uso sustentável dos recursos naturais",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "Na política global, questões ambientais como mudanças climáticas, redução das emissões de carbono, preservação da biodiversidade e uso sustentável dos recursos naturais têm sido temas recorrentes."
  },
  {
    "Pergunta": "Como a pandemia de COVID-19 influenciou a política mundial?",
    "Opcoes": {
      A: "Fortalecendo a cooperação internacional na busca por soluções",
      B: "Aumentando o nacionalismo e a polarização política",
      C: "Diminuindo o interesse da população em assuntos políticos",
      D: "Apenas afetando questões de saúde pública",
    },
    "Resposta": "B",
    "Motivo": "A pandemia de COVID-19 teve impactos na política mundial, aumentando o nacionalismo e a polarização política em alguns países, enquanto em outros fortaleceu a cooperação internacional na busca por soluções comuns."
  },
  {
    "Pergunta": "Quais movimentos sociais ganharam destaque nos últimos anos?",
    "Opcoes": {
      A: "Movimento Black Lives Matter",
      B: "Protestos pró-democracia em Hong Kong",
      C: "Greve Global pelo Clima",
      D: "Todos os anteriores",
    },
    "Resposta": "D",
    "Motivo": "Nos últimos anos, movimentos sociais como o Black Lives Matter, os protestos pró-democracia em Hong Kong e a Greve Global pelo Clima ganharam destaque, abordando questões fundamentais de direitos humanos, democracia e meio ambiente."
  }
  
  
  ]
    const perguntasEconomia = [
      {
    "Pergunta": "Quais são os principais indicadores econômicos usados para medir o desenvolvimento de um país?",
    "Opcoes": {
      A: "Taxa de natalidade e expectativa de vida",
      B: "Produto Interno Bruto (PIB) e Índice de Desenvolvimento Humano (IDH)",
      C: "Câmbio e inflação",
      D: "Apenas a balança comercial",
    },
    "Resposta": "B",
    "Motivo": "O Produto Interno Bruto (PIB) e o Índice de Desenvolvimento Humano (IDH) são indicadores econômicos fundamentais para medir o desenvolvimento de um país, abrangendo aspectos econômicos e sociais."
  },
  {
    "Pergunta": "Como a política monetária pode influenciar a economia de um país?",
    "Opcoes": {
      A: "Apenas afetando as taxas de juros",
      B: "Regulando o comércio internacional",
      C: "Controlando a quantidade de dinheiro em circulação",
      D: "Somente intervindo no mercado de ações",
    },
    "Resposta": "C",
    "Motivo": "A política monetária pode influenciar a economia de um país controlando a quantidade de dinheiro em circulação, geralmente por meio de instrumentos como taxas de juros e reservas bancárias."
  },
  {
    "Pergunta": "O que caracteriza uma recessão econômica?",
    "Opcoes": {
      A: "Crescimento sustentável do Produto Interno Bruto (PIB)",
      B: "Aumento constante do emprego e da produção",
      C: "Diminuição significativa do PIB por dois trimestres consecutivos",
      D: "Apenas a queda temporária da bolsa de valores",
    },
    "Resposta": "C",
    "Motivo": "Uma recessão econômica é caracterizada pela diminuição significativa do Produto Interno Bruto (PIB) por dois trimestres consecutivos, refletindo uma contração da atividade econômica."
  },
  {
    "Pergunta": "Qual é a diferença entre inflação e deflação?",
    "Opcoes": {
      A: "Inflação é o aumento do poder de compra da moeda; deflação é a diminuição.",
      B: "Ambos os termos se referem ao aumento dos preços de bens e serviços.",
      C: "Inflação é a queda nos preços; deflação é o aumento.",
      D: "Inflação é o aumento dos preços; deflação é a queda.",
    },
    "Resposta": "D",
    "Motivo": "Inflação é o aumento geral dos preços de bens e serviços, enquanto deflação é a queda geral dos preços. Ambos são indicadores importantes para a estabilidade econômica."
  },
  {
    "Pergunta": "Como a globalização afeta a economia de um país?",
    "Opcoes": {
      A: "Isolando a economia nacional de influências externas",
      B: "Reduzindo o comércio internacional e a interconexão",
      C: "Aumentando a interdependência econômica e o comércio global",
      D: "Restringindo o acesso a tecnologias estrangeiras",
    },
    "Resposta": "C",
    "Motivo": "A globalização afeta a economia de um país ao aumentar a interdependência econômica e o comércio global, permitindo maior movimentação de bens, serviços, capitais e tecnologias entre as nações."
  },
  {
    "Pergunta": "O que é a oferta e demanda na economia?",
    "Opcoes": {
      A: "Oferta refere-se à quantidade de dinheiro em circulação; demanda é a procura por bens e serviços.",
      B: "Oferta é a procura por bens e serviços; demanda é a quantidade disponível no mercado.",
      C: "Oferta representa a quantidade de bens e serviços disponíveis; demanda é a procura pelos mesmos.",
      D: "Ambos os termos são intercambiáveis e se referem à procura no mercado.",
    },
    "Resposta": "C",
    "Motivo": "Na economia, oferta representa a quantidade de bens e serviços disponíveis, enquanto demanda é a procura pelos mesmos. O equilíbrio entre oferta e demanda influencia os preços e a alocação de recursos."
  },
  {
    "Pergunta": "O que são medidas de austeridade econômica e em que contexto são frequentemente implementadas?",
    "Opcoes": {
      A: "Medidas para estimular o crescimento econômico; implementadas em tempos de recessão.",
      B: "Ações para controlar a inflação; aplicadas durante períodos de expansão econômica.",
      C: "Políticas para reduzir os gastos públicos; adotadas em situações de crise fiscal.",
      D: "Estratégias para aumentar o déficit orçamentário; utilizadas para fortalecer a economia.",
    },
    "Resposta": "C",
    "Motivo": "Medidas de austeridade econômica referem-se a políticas que visam reduzir os gastos públicos, geralmente em situações de crise fiscal, com o objetivo de equilibrar orçamentos e melhorar a estabilidade econômica."
  },
  {
    "Pergunta": "O que é o PIB per capita e qual a sua utilidade na análise econômica?",
    "Opcoes": {
      A: "Quantidade total de produtos fabricados por uma pessoa; não é útil na análise econômica.",
      B: "Produto Interno Bruto (PIB) médio por habitante; útil para avaliar o padrão de vida e desenvolvimento econômico.",
      C: "Índice que mede a inflação; relevante para a compreensão das condições de mercado.",
      D: "Acrônimo para o poder de compra internacional; não tem aplicação prática.",
    },
    "Resposta": "B",
    "Motivo": "O PIB per capita é o Produto Interno Bruto (PIB) médio por habitante, sendo útil para avaliar o padrão de vida e o desenvolvimento econômico de uma população, proporcionando insights sobre a distribuição de riqueza."
  },
  {
    "Pergunta": "Como a política fiscal pode ser utilizada para estimular a economia durante uma recessão?",
    "Opcoes": {
      A: "Aumentando os impostos para conter a inflação",
      B: "Reduzindo os gastos públicos para controlar o déficit orçamentário",
      C: "Elevando os gastos públicos e/ou reduzindo os impostos",
      D: "Aplicando medidas de austeridade para equilibrar as contas públicas",
    },
    "Resposta": "C",
    "Motivo": "Durante uma recessão, a política fiscal pode ser utilizada para estimular a economia por meio do aumento dos gastos públicos e/ou da redução de impostos, visando impulsionar o consumo e investimento."
  },
  {
    "Pergunta": "O que é a taxa de câmbio e como ela influencia a economia de um país?",
    "Opcoes": {
      A: "Índice que mede a variação nos preços dos produtos",
      B: "Relação entre a quantidade de moeda nacional e estrangeira",
      C: "Taxa que regula a inflação",
      D: "Valor total das exportações e importações",
    },
    "Resposta": "B",
    "Motivo": "A taxa de câmbio é a relação entre a quantidade de moeda nacional e estrangeira, influenciando a competitividade das exportações, os preços internos e o equilíbrio da balança comercial, entre outros aspectos da economia."
  },
  {
    "Pergunta": "O que caracteriza uma economia de mercado e quais são seus princípios fundamentais?",
    "Opcoes": {
      A: "Controle centralizado pelo governo; ausência de propriedade privada",
      B: "Propriedade privada dos meios de produção e tomada de decisões descentralizada",
      C: "Planejamento econômico centralizado e distribuição igualitária de recursos",
      D: "Participação exclusiva de empresas estatais na produção de bens e serviços",
    },
    "Resposta": "B",
    "Motivo": "Uma economia de mercado é caracterizada pela propriedade privada dos meios de produção e pela tomada de decisões descentralizada, baseada na oferta e demanda. Os princípios incluem livre iniciativa, concorrência e autonomia econômica."
  },
  {
    "Pergunta": "O que é a inflação e quais podem ser suas causas?",
    "Opcoes": {
      A: "Diminuição geral nos preços de bens e serviços; causada por aumento na produção",
      B: "Aumento geral nos preços de bens e serviços; causado por excesso de oferta",
      C: "Aumento geral nos preços de bens e serviços; causado por excesso de demanda",
      D: "Redução na quantidade de dinheiro em circulação; causada por medidas deflacionárias",
    },
    "Resposta": "C",
    "Motivo": "A inflação é o aumento geral nos preços de bens e serviços. Pode ser causada por excesso de demanda, quando esta ultrapassa a capacidade de produção da economia, gerando pressão sobre os preços."
  },
  {
    "Pergunta": "O que é o déficit orçamentário de um governo e quais podem ser suas consequências?",
    "Opcoes": {
      A: "Superávit nas contas públicas; aumento da dívida governamental",
      B: "Aumento dos investimentos públicos; redução da carga tributária",
      C: "Diferença negativa entre receitas e despesas; pode levar ao aumento da dívida pública",
      D: "Política de austeridade; equilíbrio nas contas do governo",
    },
    "Resposta": "C",
    "Motivo": "O déficit orçamentário de um governo ocorre quando há uma diferença negativa entre suas receitas e despesas. Pode levar ao aumento da dívida pública e requer estratégias para equilibrar as contas, como medidas de austeridade ou reformas fiscais."
  },
  {
    "Pergunta": "Como a tecnologia impacta a economia, especialmente em termos de automação e mercado de trabalho?",
    "Opcoes": {
      A: "Redução da produtividade devido à automação",
      B: "Aumento do desemprego devido à automação",
      C: "Melhoria na qualidade de vida devido ao avanço tecnológico",
      D: "Impacto mínimo na dinâmica do mercado de trabalho",
    },
    "Resposta": "C",
    "Motivo": "A tecnologia impacta a economia de diversas formas, incluindo a automação. Embora possa alterar dinâmicas do mercado de trabalho, também pode trazer melhorias na qualidade de vida, eficiência produtiva e desenvolvimento de novos setores econômicos."
  },
  {
    "Pergunta": "O que é a política de juros e qual é seu papel na economia?",
    "Opcoes": {
      A: "Controle de preços pelo governo; objetivo de conter a inflação",
      B: "Taxa que regula o câmbio internacional",
      C: "Instrumento da política monetária; influencia o consumo, investimento e inflação",
      D: "Apenas um indicador da atividade econômica; sem impacto direto nas decisões financeiras",
    },
    "Resposta": "C",
    "Motivo": "A política de juros é um instrumento da política monetária que influencia o consumo, investimento e inflação ao regular as taxas de juros. Pode ser utilizada para estimular ou conter a atividade econômica."
  },
  {
    "Pergunta": "O que são os indicadores de mercado, como o índice Dow Jones e o S&P 500?",
    "Opcoes": {
      A: "Taxas de câmbio utilizadas no comércio internacional",
      B: "Índices que medem a variação dos preços de commodities",
      C: "Indicadores de desempenho das bolsas de valores",
      D: "Taxas de juros praticadas pelos bancos centrais",
    },
    "Resposta": "C",
    "Motivo": "O índice Dow Jones e o S&P 500 são indicadores de mercado que medem o desempenho das bolsas de valores, refletindo a variação dos preços de ações de empresas listadas, sendo importantes referências para investidores e analistas financeiros."
  },
  {
    "Pergunta": "O que é a dívida pública e como ela pode afetar a estabilidade econômica de um país?",
    "Opcoes": {
      A: "Dívida contraída por empresas privadas; sem impacto nas finanças públicas",
      B: "Dívida interna de uma nação; pode gerar inflação se não for controlada",
      C: "Dívida externa; não tem relação com as políticas fiscais do governo",
      D: "Apenas um indicador econômico; sem implicações práticas",
    },
    "Resposta": "B",
    "Motivo": "A dívida pública é a dívida contraída por um governo. A dívida interna, se não controlada, pode afetar a estabilidade econômica, gerando preocupações com inflação, solvência e capacidade de pagamento."
  },
  {
    "Pergunta": "O que são os mercados emergentes e qual é o papel deles na economia global?",
    "Opcoes": {
      A: "Mercados de produtos recém-lançados; sem impacto global",
      B: "Países em desenvolvimento com economias em expansão; influenciam o comércio internacional",
      C: "Mercados voltados para produtos de luxo; impacto limitado na economia global",
      D: "Países desenvolvidos com economias consolidadas; principais atores globais",
    },
    "Resposta": "B",
    "Motivo": "Os mercados emergentes são países em desenvolvimento com economias em expansão. Têm um papel significativo na economia global, influenciando o comércio internacional, a produção e o crescimento econômico global."
  },
  {
    "Pergunta": "O que são os conceitos de oferta e demanda agregadas na macroeconomia?",
    "Opcoes": {
      A: "Variação nos preços de produtos específicos; não se aplicam à economia como um todo",
      B: "Relação entre a oferta de moeda e a demanda por investimentos",
      C: "Oferta total de bens e serviços; demanda total por esses bens e serviços",
      D: "Apenas conceitos teóricos sem aplicação prática na macroeconomia",
    },
    "Resposta": "C",
    "Motivo": "Na macroeconomia, oferta agregada refere-se à oferta total de bens e serviços, enquanto demanda agregada representa a demanda total por esses bens e serviços. Ambos influenciam o nível geral de atividade econômica."
  },
  {
    "Pergunta": "Como a globalização financeira influencia as políticas econômicas dos países?",
    "Opcoes": {
      A: "Isola as economias nacionais de influências externas",
      B: "Promove a autonomia das políticas monetárias",
      C: "Aumenta a interconexão dos mercados financeiros globais; limita a autonomia das políticas econômicas",
      D: "Reduz a volatilidade nos mercados financeiros internacionais",
    },
    "Resposta": "C",
    "Motivo": "A globalização financeira aumenta a interconexão dos mercados financeiros globais, limitando a autonomia das políticas econômicas dos países. Movimentos em um mercado podem impactar outros, exigindo coordenação e adaptação das políticas nacionais."
  },
  {
    "Pergunta": "Como os ciclos econômicos podem afetar o emprego e a produção?",
    "Opcoes": {
      A: "Ciclos econômicos não têm impacto no emprego e na produção",
      B: "Aumentam a estabilidade econômica, reduzindo flutuações no emprego e na produção",
      C: "Podem gerar períodos de expansão e recessão, influenciando o emprego e a produção",
      D: "Apenas afetam a distribuição de renda; não influenciam diretamente o emprego",
    },
    "Resposta": "C",
    "Motivo": "Os ciclos econômicos podem gerar períodos de expansão e recessão, influenciando o emprego e a produção. Durante uma expansão, o emprego tende a aumentar, enquanto durante uma recessão, pode haver redução na produção e no emprego."
  },
  {
    "Pergunta": "O que é a política de livre comércio e quais são os potenciais benefícios?",
    "Opcoes": {
      A: "Restrição ao comércio internacional para proteger a economia doméstica",
      B: "Acordos que visam eliminar barreiras comerciais entre países; pode aumentar eficiência e acesso a mercados",
      C: "Controle estatal sobre todas as transações comerciais",
      D: "Política que visa exclusivamente beneficiar grandes corporações",
    },
    "Resposta": "B",
    "Motivo": "A política de livre comércio busca eliminar barreiras comerciais entre países, facilitando o fluxo de bens e serviços. Se bem implementada, pode aumentar a eficiência econômica, promover a especialização produtiva e ampliar o acesso a mercados internacionais."
  },
  {
    "Pergunta": "O que é a taxa de desemprego e como ela é calculada?",
    "Opcoes": {
      A: "Número total de pessoas em idade de trabalhar; calculada por meio de pesquisas de opinião",
      B: "Número de pessoas desempregadas em relação à população economicamente ativa; calculada por meio de pesquisas e registros",
      C: "Número total de pessoas empregadas em relação à população total; calculada mensalmente",
      D: "Número de pessoas que recebem benefícios de desemprego; calculada pelos órgãos governamentais",
    },
    "Resposta": "B",
    "Motivo": "A taxa de desemprego é o número de pessoas desempregadas em relação à população economicamente ativa. É calculada por meio de pesquisas de opinião, entrevistas ou registros de órgãos governamentais."
  },
  {
    "Pergunta": "O que é a economia informal e qual é seu impacto na economia de um país?",
    "Opcoes": {
      A: "Setor econômico composto exclusivamente por grandes empresas",
      B: "Atividades econômicas não regulamentadas pelo governo; pode impactar a arrecadação de impostos e a proteção dos direitos trabalhistas",
      C: "Setor voltado exclusivamente para exportação de bens",
      D: "Empresas que operam apenas online",
    },
    "Resposta": "B",
    "Motivo": "A economia informal refere-se a atividades econômicas não regulamentadas pelo governo, muitas vezes sem registro formal. Seu impacto pode incluir desafios para a arrecadação de impostos, proteção dos direitos trabalhistas e monitoramento estatístico preciso da economia."
  },
  {
    "Pergunta": "O que é a teoria do keynesianismo na economia?",
    "Opcoes": {
      A: "Enfoque na livre concorrência e na não intervenção estatal na economia",
      B: "Teoria que destaca a importância da oferta na determinação dos preços",
      C: "Teoria econômica que defende a intervenção estatal para estimular a demanda agregada durante recessões",
      D: "Teoria que enfatiza o equilíbrio automático entre oferta e demanda sem intervenção governamental",
    },
    "Resposta": "C",
    "Motivo": "O keynesianismo é uma teoria econômica que destaca a importância da intervenção estatal para estimular a demanda agregada durante recessões, visando evitar ou mitigar crises econômicas e promover o pleno emprego."
  },
  {
    "Pergunta": "O que é a sustentabilidade econômica e por que é importante?",
    "Opcoes": {
      A: "Enfoque exclusivo na maximização dos lucros a curto prazo",
      B: "Desenvolvimento econômico que atende às necessidades presentes sem comprometer as gerações futuras",
      C: "Foco na produção em larga escala, mesmo que isso implique no esgotamento de recursos",
      D: "Abordagem que negligencia as questões ambientais e sociais",
    },
    "Resposta": "B",
    "Motivo": "A sustentabilidade econômica refere-se ao desenvolvimento econômico que atende às necessidades presentes sem comprometer as gerações futuras. É importante para garantir a preservação dos recursos naturais, a estabilidade social e a continuidade do progresso econômico."
  }, 
  
  {
    "Pergunta": "O que é a política de livre comércio e quais são os potenciais benefícios?",
    "Opcoes": {
      A: "Restrição ao comércio internacional para proteger a economia doméstica",
      B: "Acordos que visam eliminar barreiras comerciais entre países; pode aumentar eficiência e acesso a mercados",
      C: "Controle estatal sobre todas as transações comerciais",
      D: "Política que visa exclusivamente beneficiar grandes corporações",
    },
    "Resposta": "B",
    "Motivo": "A política de livre comércio busca eliminar barreiras comerciais entre países, facilitando o fluxo de bens e serviços. Se bem implementada, pode aumentar a eficiência econômica, promover a especialização produtiva e ampliar o acesso a mercados internacionais."
  },
  {
    "Pergunta": "O que é a taxa de desemprego e como ela é calculada?",
    "Opcoes": {
      A: "Número total de pessoas em idade de trabalhar; calculada por meio de pesquisas de opinião",
      B: "Número de pessoas desempregadas em relação à população economicamente ativa; calculada por meio de pesquisas e registros",
      C: "Número total de pessoas empregadas em relação à população total; calculada mensalmente",
      D: "Número de pessoas que recebem benefícios de desemprego; calculada pelos órgãos governamentais",
    },
    "Resposta": "B",
    "Motivo": "A taxa de desemprego é o número de pessoas desempregadas em relação à população economicamente ativa. É calculada por meio de pesquisas de opinião, entrevistas ou registros de órgãos governamentais."
  },
  {
    "Pergunta": "O que é a economia informal e qual é seu impacto na economia de um país?",
    "Opcoes": {
      A: "Setor econômico composto exclusivamente por grandes empresas",
      B: "Atividades econômicas não regulamentadas pelo governo; pode impactar a arrecadação de impostos e a proteção dos direitos trabalhistas",
      C: "Setor voltado exclusivamente para exportação de bens",
      D: "Empresas que operam apenas online",
    },
    "Resposta": "B",
    "Motivo": "A economia informal refere-se a atividades econômicas não regulamentadas pelo governo, muitas vezes sem registro formal. Seu impacto pode incluir desafios para a arrecadação de impostos, proteção dos direitos trabalhistas e monitoramento estatístico preciso da economia."
  },
  {
    "Pergunta": "O que é a teoria do keynesianismo na economia?",
    "Opcoes": {
      A: "Enfoque na livre concorrência e na não intervenção estatal na economia",
      B: "Teoria que destaca a importância da oferta na determinação dos preços",
      C: "Teoria econômica que defende a intervenção estatal para estimular a demanda agregada durante recessões",
      D: "Teoria que enfatiza o equilíbrio automático entre oferta e demanda sem intervenção governamental",
    },
    "Resposta": "C",
    "Motivo": "O keynesianismo é uma teoria econômica que destaca a importância da intervenção estatal para estimular a demanda agregada durante recessões, visando evitar ou mitigar crises econômicas e promover o pleno emprego."
  },
  {
    "Pergunta": "O que é a sustentabilidade econômica e por que é importante?",
    "Opcoes": {
      A: "Enfoque exclusivo na maximização dos lucros a curto prazo",
      B: "Desenvolvimento econômico que atende às necessidades presentes sem comprometer as gerações futuras",
      C: "Foco na produção em larga escala, mesmo que isso implique no esgotamento de recursos",
      D: "Abordagem que negligencia as questões ambientais e sociais",
    },
    "Resposta": "B",
    "Motivo": "A sustentabilidade econômica refere-se ao desenvolvimento econômico que atende às necessidades presentes sem comprometer as gerações futuras. É importante para garantir a preservação dos recursos naturais, a estabilidade social e a continuidade do progresso econômico."
  },
  {
    "Pergunta": "O que caracterizou a Crise de 1929 e quais foram suas principais consequências na economia global?",
    "Opcoes": {
      A: "Expansão econômica global; aumento do emprego e produção",
      B: "Colapso do mercado de ações em 1929; queda na produção, aumento do desemprego e aprofundamento da Grande Depressão",
      C: "Aumento do investimento estrangeiro; fortalecimento das economias nacionais",
      D: "Crescimento sustentável do PIB mundial; estabilidade econômica",
    },
    "Resposta": "B",
    "Motivo": "A Crise de 1929 foi caracterizada pelo colapso do mercado de ações em 1929, levando a uma queda na produção, aumento do desemprego e aprofundamento da Grande Depressão, impactando significativamente a economia global."
  },
  {
    "Pergunta": "Quais foram os principais fatores que contribuíram para a Crise Financeira de 2008 e como ela afetou a economia mundial?",
    "Opcoes": {
      A: "Rápido crescimento econômico; estabilidade nos mercados financeiros",
      B: "Bolha imobiliária nos Estados Unidos; colapso de instituições financeiras; recessão global",
      C: "Aumento do investimento em setores inovadores; criação de empregos",
      D: "Fortalecimento das regulamentações financeiras; prevenção de crises",
    },
    "Resposta": "B",
    "Motivo": "A Crise Financeira de 2008 foi marcada pela bolha imobiliária nos Estados Unidos, colapso de instituições financeiras e uma recessão global, impactando profundamente a economia mundial e levando a medidas para estabilização financeira."
  },
  {
    "Pergunta": "O que motivou a queima de café durante o governo de Getúlio Vargas na era Vargas?",
    "Opcoes": {
      A: "Excesso de produção de café; busca por equilíbrio no mercado internacional",
      B: "Conflitos trabalhistas no setor cafeeiro; busca por melhores condições de trabalho",
      C: "Medida para estimular a produção de café; promoção do agronegócio",
      D: "Busca por diversificação econômica; redução da dependência do café na economia brasileira",
    },
    "Resposta": "A",
    "Motivo": "A queima de café durante o governo de Getúlio Vargas ocorreu como uma medida para equilibrar o mercado internacional de café diante do excesso de produção, buscando evitar a queda dos preços e prejuízos para os produtores brasileiros."
  },
  {
    "Pergunta": "Como a política de substituição de importações impactou a economia brasileira durante o governo de Getúlio Vargas?",
    "Opcoes": {
      A: "Estímulo às importações para promover a integração global",
      B: "Promoção da exportação de produtos agrícolas",
      C: "Política voltada para a industrialização nacional; redução da dependência de bens estrangeiros",
      D: "Adoção do padrão-ouro como base econômica",
    },
    "Resposta": "C",
    "Motivo": "Durante o governo de Getúlio Vargas, a política de substituição de importações visava reduzir a dependência de bens estrangeiros, promovendo a industrialização nacional e estimulando a produção interna de bens manufaturados."
  },
  {
    "Pergunta": "Quais foram os impactos econômicos da Revolução Industrial no século XIX?",
    "Opcoes": {
      A: "Redução da produção industrial; aumento do desemprego",
      B: "Aumento da produção em larga escala; transformação nos métodos de produção; urbanização",
      C: "Declínio da urbanização; fortalecimento da agricultura tradicional",
      D: "Manutenção dos métodos artesanais; ausência de mudanças significativas",
    },
    "Resposta": "B",
    "Motivo": "A Revolução Industrial no século XIX trouxe impactos econômicos significativos, incluindo o aumento da produção em larga escala, a transformação nos métodos de produção e a urbanização, marcando uma transição importante na história econômica."
  },
  {
    "Pergunta": "Como a Primeira Guerra Mundial afetou a economia global e quais foram suas consequências?",
    "Opcoes": {
      A: "Estímulo ao crescimento econômico; aumento da produção industrial",
      B: "Recessão global; endividamento dos países envolvidos; tratado de paz promovendo a estabilidade",
      C: "Fortalecimento da cooperação internacional; promoção do livre comércio",
      D: "Isolamento econômico dos países envolvidos; ausência de impacto nas finanças globais",
    },
    "Resposta": "B",
    "Motivo": "A Primeira Guerra Mundial resultou em uma recessão global, endividamento dos países envolvidos e a assinatura de tratados de paz que, em alguns casos, contribuíram para a instabilidade econômica e social."
  }
  
      ]
    const perguntasAstronomia = [
      {
    "Pergunta": "O que é uma supernova e qual é sua importância na astronomia?",
    "Opcoes": {
      A: "Fase inicial da formação de uma estrela",
      B: "Explosão cataclísmica de uma estrela; liberação intensa de energia",
      C: "Tipo de cometa visível da Terra",
      D: "Colisão entre dois planetas",
    },
    "Resposta": "B",
    "Motivo": "Uma supernova é a explosão cataclísmica de uma estrela, resultando em uma liberação intensa de energia. Sua importância na astronomia inclui a contribuição para a formação de novos elementos químicos e a liberação de energia que pode ser observada a grandes distâncias."
  },
  {
    "Pergunta": "O que são buracos negros e como eles se formam?",
    "Opcoes": {
      A: "Regiões do espaço com alta densidade de estrelas",
      B: "Estrelas que atingiram o fim de sua vida e colapsaram sob sua própria gravidade",
      C: "Planetas com atmosferas densas",
      D: "Regiões do espaço com ausência total de matéria",
    },
    "Resposta": "B",
    "Motivo": "Buracos negros são formados pelo colapso gravitacional de estrelas massivas que atingiram o fim de sua vida. Eles possuem uma gravidade tão intensa que nada, nem mesmo a luz, consegue escapar de sua influência."
  },
  {
    "Pergunta": "O que é a Via Láctea e qual é a posição do Sistema Solar nela?",
    "Opcoes": {
      A: "Galáxia vizinha à Via Láctea; o Sistema Solar está no centro",
      B: "Conjunto de estrelas que formam o Sistema Solar",
      C: "Galáxia espiral à qual o Sistema Solar pertence; localizado em um de seus braços",
      D: "Nebulosa próxima à Terra; o Sistema Solar está na borda",
    },
    "Resposta": "C",
    "Motivo": "A Via Láctea é uma galáxia espiral à qual o Sistema Solar pertence. O Sistema Solar está localizado em um dos braços dessa galáxia, conhecido como o Braço de Órion."
  },
  {
    "Pergunta": "O que é um exoplaneta?",
    "Opcoes": {
      A: "Planeta dentro do Sistema Solar",
      B: "Planeta que orbita uma estrela fora do Sistema Solar",
      C: "Asteroide próximo à Terra",
      D: "Planeta que orbita duas estrelas simultaneamente",
    },
    "Resposta": "B",
    "Motivo": "Um exoplaneta é um planeta que orbita uma estrela fora do Sistema Solar. Esses planetas são descobertos através de observações indiretas, como variações no brilho da estrela hospedeira."
  },
  {
    "Pergunta": "O que é a expansão do universo e como ela foi descoberta?",
    "Opcoes": {
      A: "Contrair do universo; descoberta por observações de galáxias se aproximando umas das outras",
      B: "Processo de formação de novas estrelas; descoberto por telescópios espaciais",
      C: "Aumento contínuo das distâncias entre galáxias; descoberto por observações de galáxias se afastando umas das outras",
      D: "Estágio inicial do universo; descoberto por emissões de radiação cósmica",
    },
    "Resposta": "C",
    "Motivo": "A expansão do universo refere-se ao aumento contínuo das distâncias entre galáxias. Essa descoberta foi feita por observações de galáxias se afastando umas das outras, indicando que o universo está em constante expansão."
  },
  {
    "Pergunta": "O que são pulsares e como eles são formados?",
    "Opcoes": {
      A: "Estrelas em estágio inicial de formação",
      B: "Estrelas que colapsaram em buracos negros",
      C: "Estrelas de nêutrons em rotação rápida; formados a partir da explosão de supernovas",
      D: "Conjunto de estrelas em órbita próxima umas das outras",
    },
    "Resposta": "C",
    "Motivo": "Pulsares são estrelas de nêutrons em rotação rápida, formados a partir da explosão de supernovas. Sua rotação regular gera pulsos detectáveis de radiação eletromagnética, tornando-os objetos astronômicos únicos e interessantes."
  },
  {
    "Pergunta": "O que são quasares e qual é sua importância na astronomia?",
    "Opcoes": {
      A: "Galáxias pequenas; pouco relevantes para a astronomia",
      B: "Estágios finais da evolução estelar; contribuem para a formação de nebulosas",
      C: "Núcleos galácticos ativos; emitem enormes quantidades de energia; importantes para o estudo de galáxias distantes",
      D: "Sistemas planetários com múltiplos sóis",
    },
    "Resposta": "C",
    "Motivo": "Quasares são núcleos galácticos ativos que emitem enormes quantidades de energia. Sua importância na astronomia reside no fato de que são objetos extremamente luminosos e podem ser observados em distâncias cósmicas, fornecendo informações valiosas sobre o universo primordial."
  },
   {
    "Pergunta": "O que é a Lei de Kepler sobre os movimentos planetários?",
    "Opcoes": {
      A: "Aceleração constante dos planetas em suas órbitas",
      B: "Lei que descreve a trajetória elíptica dos planetas ao redor do Sol",
      C: "Relação entre a massa dos planetas e suas luas",
      D: "Padrão de rotação dos planetas em torno de seu próprio eixo",
    },
    "Resposta": "B",
    "Motivo": "A Lei de Kepler sobre os movimentos planetários estabelece que os planetas orbitam o Sol em trajetórias elípticas, sendo uma das leis fundamentais da astronomia."
  },
  {
    "Pergunta": "O que é o cinturão de Kuiper e onde ele está localizado no Sistema Solar?",
    "Opcoes": {
      A: "Região entre Marte e Júpiter; contém asteroides",
      B: "Anel de partículas ao redor de Saturno",
      C: "Cinturão de asteroides entre a Terra e Marte",
      D: "Região além da órbita de Netuno; contém corpos celestes como Plutão",
    },
    "Resposta": "D",
    "Motivo": "O cinturão de Kuiper está localizado além da órbita de Netuno no Sistema Solar e contém uma população de corpos celestes, incluindo Plutão e outros objetos transnetunianos."
  },
  {
    "Pergunta": "O que são estrelas de neutrons e como são formadas?",
    "Opcoes": {
      A: "Estágio final da evolução estelar; formadas a partir da explosão de supernovas",
      B: "Estrelas jovens em processo de formação; acumulam matéria interestelar",
      C: "Estrelas em estágio intermediário de evolução; colapsam em buracos negros",
      D: "Regiões do espaço com alta densidade de estrelas",
    },
    "Resposta": "A",
    "Motivo": "Estrelas de nêutrons são o estágio final da evolução estelar para estrelas massivas. Elas são formadas a partir da explosão de supernovas, onde o núcleo da estrela colapsa, dando origem a uma estrela extremamente densa composta principalmente por nêutrons."
  },
  {
    "Pergunta": "O que é a Teoria do Big Bang e como ela explica a origem do universo?",
    "Opcoes": {
      A: "Teoria que sugere a expansão constante do universo; origem desconhecida",
      B: "Modelo estático do universo; origem a partir de uma singularidade",
      C: "Teoria que propõe a contração do universo; origem a partir de colisões cósmicas",
      D: "Explosão inicial que deu origem ao universo; modelo aceito atualmente",
    },
    "Resposta": "D",
    "Motivo": "A Teoria do Big Bang propõe que o universo teve origem a partir de uma explosão inicial, resultando na expansão contínua do espaço-tempo. Esse modelo é amplamente aceito para explicar a origem do universo."
  },
  {
    "Pergunta": "O que são buracos de minhoca (wormholes) e como eles são teoricamente concebidos?",
    "Opcoes": {
      A: "Túneis no espaço-tempo que conectam diferentes regiões do universo; teoricamente concebidos pela teoria da relatividade",
      B: "Grupos de estrelas próximas; facilitam a comunicação interestelar",
      C: "Anomalias na órbita dos planetas; causam perturbações gravitacionais",
      D: "Depressões profundas na superfície de planetas; indicam presença de água subterrânea",
    },
    "Resposta": "A",
    "Motivo": "Buracos de minhoca são teoricamente concebidos como túneis no espaço-tempo que conectam diferentes regiões do universo. Essa concepção é derivada da teoria da relatividade."
  },
  {
    "Pergunta": "Explique o conceito de magnitude aparente e magnitude absoluta em relação às estrelas.",
    "Opcoes": {
      A: "Magnitude aparente refere-se ao brilho percebido da estrela a partir da Terra, enquanto a magnitude absoluta é o brilho real da estrela a uma distância padrão.",
      B: "Magnitude aparente e magnitude absoluta são termos intercambiáveis que descrevem o brilho de uma estrela em diferentes condições atmosféricas.",
      C: "Magnitude aparente é a medida do tamanho físico da estrela, enquanto magnitude absoluta é a medida de sua luminosidade intrínseca.",
      D: "Magnitude aparente representa o tamanho angular da estrela no céu, e magnitude absoluta refere-se à sua temperatura superficial.",
    },
    "Resposta": "A",
    "Motivo": "Magnitude aparente é o brilho percebido da estrela da Terra, enquanto magnitude absoluta é o brilho real a uma distância padrão de 10 parsecs."
  },
  {
    "Pergunta": "Descreva o conceito de redshift e blueshift, e como eles são utilizados na astronomia.",
    "Opcoes": {
      A: "Redshift ocorre quando uma estrela se aproxima da Terra, enquanto blueshift ocorre quando se afasta; são usados para medir a distância das estrelas.",
      B: "Redshift e blueshift referem-se à mudança na cor da luz de uma estrela devido ao movimento Doppler; são usados para determinar a velocidade radial e distância das estrelas.",
      C: "Redshift é associado à luz visível, e blueshift à luz ultravioleta; são usados para classificar estrelas em diferentes espectros.",
      D: "Redshift é uma ilusão de ótica causada pela atmosfera da Terra; blueshift é uma anomalia rara observada apenas em estrelas muito jovens.",
    },
    "Resposta": "B",
    "Motivo": "Redshift e blueshift referem-se à mudança na cor da luz devido ao movimento Doppler. São usados na astronomia para medir a velocidade radial e distância de objetos celestes."
  },
  {
    "Pergunta": "O que é a paralaxe estelar e como ela é utilizada para medir distâncias astronômicas?",
    "Opcoes": {
      A: "Deslocamento aparente de uma estrela no céu devido à rotação da Terra; usado para calcular a velocidade de rotação estelar.",
      B: "Variação aparente na posição de uma estrela devido à órbita da Terra; usada para medir a distância de estrelas próximas.",
      C: "Diferença entre a magnitude aparente e absoluta de uma estrela; usada para calcular seu brilho intrínseco.",
      D: "Variação na luminosidade de uma estrela ao longo de sua vida; usada para estimar sua idade.",
    },
    "Resposta": "B",
    "Motivo": "Paralaxe estelar é a variação aparente na posição de uma estrela devido à órbita da Terra. É utilizada para medir a distância de estrelas relativamente próximas."
  },
  {
    "Pergunta": "O que são buracos negros supermassivos e qual é sua relação com os centros de galáxias?",
    "Opcoes": {
      A: "Buracos negros supermassivos são buracos negros de pequena massa que se formam no centro das galáxias; sua relação com os centros galácticos é ainda desconhecida.",
      B: "Buracos negros supermassivos são buracos negros extremamente grandes encontrados nos centros de galáxias; sua presença influencia a dinâmica galáctica.",
      C: "Buracos negros supermassivos são aglomerados de estrelas no centro das galáxias; sua relação com os centros é puramente coincidência.",
      D: "Buracos negros supermassivos são encontrados na borda externa das galáxias; sua influência nas galáxias é mínima.",
    },
    "Resposta": "B",
    "Motivo": "Buracos negros supermassivos são extremamente grandes e encontrados nos centros de galáxias. Sua presença tem influência significativa na dinâmica e evolução dessas galáxias."
  },
  {
    "Pergunta": "O que é a expansão do universo e como foi evidenciada pela observação das galáxias?",
    "Opcoes": {
      A: "A expansão do universo é um mito sem evidência observacional; as galáxias estão estáticas e não se afastam umas das outras.",
      B: "É o movimento das galáxias em direção ao centro do universo; essa evidência foi obtida através da análise da radiação cósmica de fundo.",
      C: "A expansão do universo é a separação contínua entre as galáxias; a evidência foi obtida através do desvio para o vermelho (redshift) observado nas linhas espectrais das galáxias.",
      D: "Refere-se à formação de novas galáxias a partir da matéria interestelar; essa evidência foi obtida através da observação de galáxias em estágios iniciais de evolução.",
    },
    "Resposta": "C",
    "Motivo": "A expansão do universo refere-se à separação contínua entre as galáxias. A evidência foi obtida através do desvio para o vermelho (redshift) observado nas linhas espectrais das galáxias. Quanto mais distante uma galáxia, maior o redshift, indicando sua velocidade de afastamento, evidenciando a expansão do cosmos."
  },
  {
    "Pergunta": "O que são neutrinos e por que são particulas tão elusivas na detecção experimental?",
    "Opcoes": {
      A: "Partículas subatômicas com carga elétrica que interagem fortemente com a matéria; são elusivas devido à sua alta velocidade.",
      B: "Partículas com massa neutra e carga elétrica nula; são elusivas devido à sua baixa interação com a matéria, atravessando-a facilmente.",
      C: "Pequenas partículas presentes no núcleo atômico; são elusivas devido à sua instabilidade e curta vida útil.",
      D: "Partículas formadas durante a fusão nuclear em estrelas; são elusivas devido à sua propensão a se combinar com outras partículas.",
    },
    "Resposta": "B",
    "Motivo": "Neutrinos são partículas com massa neutra e carga elétrica nula. Eles são elusivos na detecção experimental devido à sua baixa interação com a matéria, o que os permite atravessar a maioria das substâncias sem interagir significativamente, tornando sua detecção um desafio."
  },
  {
    "Pergunta": "O que é o Modelo Padrão da física de partículas e quais são suas principais características?",
    "Opcoes": {
      A: "Teoria que descreve as interações gravitacionais entre partículas subatômicas; suas características incluem a unificação das forças fundamentais.",
      B: "Modelo matemático que prevê as órbitas dos elétrons nos átomos; suas características incluem a explicação da estabilidade dos átomos.",
      C: "Teoria que descreve as partículas elementares e suas interações; suas características incluem a divisão das forças fundamentais em quatro categorias distintas.",
      D: "Conjunto de equações que explicam a dinâmica dos planetas no sistema solar; suas características incluem a previsão precisa das posições planetárias ao longo do tempo.",
    },
    "Resposta": "C",
    "Motivo": "O Modelo Padrão é uma teoria que descreve as partículas elementares e suas interações fundamentais. Suas características incluem a divisão das forças fundamentais em quatro categorias distintas: força eletromagnética, força fraca, força forte e gravidade."
  },
  {
    "Pergunta": "O que são quarks e qual é seu papel na estrutura dos prótons e nêutrons?",
    "Opcoes": {
      A: "Partículas elementares com carga elétrica que compõem os elétrons; seu papel está na determinação das propriedades magnéticas dos elétrons.",
      B: "Partículas subatômicas com carga elétrica fracionária; seu papel está na composição dos prótons e nêutrons, que formam o núcleo atômico.",
      C: "Partículas presentes nos núcleos dos átomos; seu papel está na transmissão de forças nucleares fortes entre os prótons e nêutrons.",
      D: "Partículas que compõem os neutrinos; seu papel está na estabilidade dessas partículas durante as interações nucleares.",
    },
    "Resposta": "B",
    "Motivo": "Quarks são partículas subatômicas com carga elétrica fracionária. Seu papel está na composição dos prótons e nêutrons, que formam o núcleo atômico. A combinação de quarks dentro dessas partículas contribui para as propriedades e a estabilidade dos prótons e nêutrons."
  },
  {
    "Pergunta": "Como a teoria da relatividade restrita de Einstein aborda a relação entre espaço e tempo?",
    "Opcoes": {
      A: "Afirma que espaço e tempo são entidades independentes, sem relação entre si.",
      B: "Propõe que espaço e tempo são aspectos de uma única entidade chamada espaço-tempo; suas medidas dependem do observador.",
      C: "Sugere que o tempo é uma ilusão, e o espaço é a única dimensão verdadeira.",
      D: "Defende que o espaço é uma construção mental, enquanto o tempo é uma dimensão física independente.",
    },
    "Resposta": "B",
    "Motivo": "A teoria da relatividade restrita de Einstein propõe que espaço e tempo são aspectos de uma única entidade chamada espaço-tempo, e suas medidas dependem do observador, introduzindo conceitos como dilatação do tempo e contração do comprimento."
  },{
    "Pergunta": "O que é a radiação cósmica de fundo e qual é sua importância na cosmologia?",
    "Opcoes": {
      A: "Radiação emitida por estrelas recém-formadas; sua importância está na revelação de informações sobre os estágios iniciais do universo.",
      B: "Emissão de luz por galáxias distantes; sua importância está na investigação da formação de estruturas no cosmos.",
      C: "Radiação térmica remanescente do Big Bang; sua importância está na análise do universo primordial e na confirmação da teoria do Big Bang.",
      D: "Emissão de partículas subatômicas provenientes de eventos astrofísicos violentos; sua importância está na investigação de fenômenos extremos no universo.",
    },
    "Resposta": "C",
    "Motivo": "A radiação cósmica de fundo é a radiação térmica remanescente do Big Bang. Sua importância na cosmologia reside na análise do universo primordial, fornecendo informações cruciais sobre as condições iniciais e confirmando a teoria do Big Bang como o modelo predominante para a origem do universo."
  },
  {
    "Pergunta": "O que é a teoria das cordas e como ela busca unificar as forças fundamentais da natureza?",
    "Opcoes": {
      A: "Modelo que descreve a interação entre partículas subatômicas através da troca de cordas vibrantes; busca unificar as forças fundamentais ao considerar as cordas como os blocos básicos da matéria.",
      B: "Hipótese que sugere que o universo é composto por cordas invisíveis que conectam galáxias distantes; busca unificar a gravidade e o eletromagnetismo.",
      C: "Teoria que propõe a existência de cordas magnéticas no espaço; busca unificar as forças fundamentais ao integrar a magnetização como uma força universal.",
      D: "Modelo matemático que descreve as vibrações de partículas subatômicas em forma de cordas; busca unificar as forças fundamentais através da geometria diferencial.",
    },
    "Resposta": "A",
    "Motivo": "A teoria das cordas é um modelo que descreve a interação entre partículas subatômicas através da troca de cordas vibrantes. Ela busca unificar as forças fundamentais ao considerar as cordas como os blocos básicos da matéria, permitindo uma abordagem unificada das interações fundamentais da natureza."
  },
  {
    "Pergunta": "O que são buracos negros supermassivos e qual é sua influência nas galáxias?",
    "Opcoes": {
      A: "Buracos negros formados a partir da fusão de buracos negros estelares; sua influência nas galáxias é limitada à região próxima ao núcleo.",
      B: "Buracos negros com massa equivalente a milhões ou bilhões de vezes a do Sol; sua influência nas galáxias inclui a regulação do crescimento estelar e a formação de estruturas galácticas.",
      C: "Buracos negros com massa inferior à de estrelas; sua influência nas galáxias é negligenciável devido ao seu tamanho reduzido.",
      D: "Buracos negros encontrados apenas no centro de pequenas galáxias; sua influência é significativa apenas em aglomerados galácticos.",
    },
    "Resposta": "B",
    "Motivo": "Buracos negros supermassivos são buracos negros com massa equivalente a milhões ou bilhões de vezes a do Sol. Sua influência nas galáxias é significativa e inclui a regulação do crescimento estelar, a formação de estruturas galácticas e a influência na dinâmica do ambiente galáctico."
  },
  {
    "Pergunta": "O que são pulsares e por que emitem pulsos periódicos de radiação?",
    "Opcoes": {
      A: "Estrelas em estágio avançado de evolução que emitem pulsos de radiação devido à intensa atividade magnética; são observadas em diferentes regiões do espectro eletromagnético.",
      B: "Remanescentes de supernovas que emitem pulsos de radiação devido à rotação rápida e à emissão de feixes de radiação direcionados; são observados principalmente em rádio e luz visível.",
      C: "Estrelas binárias que emitem pulsos de radiação durante interações com suas companheiras; são observadas principalmente em raios X.",
      D: "Estrelas jovens que emitem pulsos de radiação devido à intensa atividade nuclear em seus núcleos; são observadas em diferentes comprimentos de onda, indicando processos estelares específicos.",
    },
    "Resposta": "B",
    "Motivo": "Pulsares são remanescentes de supernovas que emitem pulsos de radiação devido à rotação rápida e à emissão de feixes de radiação direcionados. Eles são observados principalmente em rádio e luz visível, proporcionando insights valiosos sobre as propriedades dos objetos compactos e os processos físicos em ambientes extremos."
  },
  {
    "Pergunta": "O que é um quasar e qual é a fonte de sua intensa emissão de energia?",
    "Opcoes": {
      A: "Quasares são estrelas de nêutrons em rotação rápida que emitem energia devido à compressão gravitacional; sua fonte de energia está relacionada à fusão nuclear.",
      B: "Quasares são buracos negros supermassivos no centro de galáxias ativas; sua intensa emissão de energia provém do disco de acreção de matéria em torno do buraco negro.",
      C: "Quasares são estrelas variáveis que emitem flashes de energia devido a explosões termonucleares; sua fonte de energia está associada à instabilidade estelar.",
      D: "Quasares são aglomerados de estrelas jovens; sua intensa emissão de energia é resultado da atividade magnética em sua atmosfera.",
    },
    "Resposta": "B",
    "Motivo": "Quasares são buracos negros supermassivos no centro de galáxias ativas. Sua intensa emissão de energia provém do disco de acreção de matéria em torno do buraco negro, liberando enormes quantidades de energia conforme a matéria é consumida e aquecida antes de entrar no buraco negro."
  },
  {
    "Pergunta": "Como a teoria da relatividade geral de Einstein explica a curvatura do espaço-tempo ao redor de massas elevadas, como planetas e estrelas?",
    "Opcoes": {
      A: "A relatividade geral não aborda a curvatura do espaço-tempo; essa curvatura é uma ilusão causada pela forma como percebemos o espaço.",
      B: "Afirma que a gravidade é uma força fundamental que age a distância, atraindo objetos uns em direção aos outros.",
      C: "Propõe que a curvatura do espaço-tempo é causada por partículas subatômicas presentes na vizinhança de massas elevadas.",
      D: "Postula que a presença de massa e energia no espaço-tempo causa uma curvatura nesse espaço-tempo, afetando a trajetória de objetos em sua proximidade.",
    },
    "Resposta": "D",
    "Motivo": "A teoria da relatividade geral de Einstein postula que a presença de massa e energia no espaço-tempo causa uma curvatura nesse espaço-tempo. Essa curvatura é responsável pela influência gravitacional que afeta a trajetória de objetos em sua proximidade, explicando fenômenos como a órbita dos planetas ao redor do Sol."
  },
  {
    "Pergunta": "O que são aglomerados de galáxias e qual é sua importância na cosmologia?",
    "Opcoes": {
      A: "Conjuntos de estrelas unidas por forças gravitacionais; sua importância reside na formação de estruturas estelares complexas.",
      B: "Grupos de galáxias interagindo gravitacionalmente; são importantes para entender a dinâmica do universo em larga escala e a distribuição de matéria.",
      C: "Estrelas situadas próximas umas das outras no espaço; sua importância está na formação de sistemas planetários coesos.",
      D: "Regiões do espaço onde a densidade de matéria é excepcionalmente baixa; sua importância reside na investigação de condições primordiais do universo.",
    },
    "Resposta": "B",
    "Motivo": "Aglomerados de galáxias são grupos de galáxias que interagem gravitacionalmente. Sua importância na cosmologia está em entender a dinâmica do universo em larga escala, a distribuição de matéria, e como essas estruturas evoluem ao longo do tempo cósmico."
  },
  {
    "Pergunta": "O que é a expansão do universo e como foi evidenciada pela observação das galáxias?",
    "Opcoes": {
      A: "A expansão do universo é um mito sem evidência observacional; as galáxias estão estáticas e não se afastam umas das outras.",
      B: "É o movimento das galáxias em direção ao centro do universo; essa evidência foi obtida através da análise da radiação cósmica de fundo.",
      C: "A expansão do universo é a separação contínua entre as galáxias; a evidência foi obtida através do desvio para o vermelho (redshift) observado nas linhas espectrais das galáxias.",
      D: "Refere-se à formação de novas galáxias a partir da matéria interestelar; essa evidência foi obtida através da observação de galáxias em estágios iniciais de evolução.",
    },
    "Resposta": "C",
    "Motivo": "A expansão do universo refere-se à separação contínua entre as galáxias. A evidência foi obtida através do desvio para o vermelho (redshift) observado nas linhas espectrais das galáxias. Quanto mais distante uma galáxia, maior o redshift, indicando sua velocidade de afastamento, evidenciando a expansão do cosmos."
  },
  {
    "Pergunta": "O que é a Teoria da Grande Unificação na física de partículas?",
    "Opcoes": {
      A: "Hipótese de que todas as partículas subatômicas são compostas por unidades fundamentais chamadas 'grandes unificações'; busca unificar as forças fundamentais em uma única força.",
      B: "Modelo que descreve a formação de grandes aglomerados de partículas no universo primitivo; busca explicar a origem da matéria escura.",
      C: "Conceito que propõe a existência de partículas subatômicas maiores do que os quarks; busca unificar as forças fundamentais através do aumento da complexidade das partículas.",
      D: "Teoria que busca unificar as forças fundamentais da natureza, excluindo a força gravitacional; sugere que essas forças eram uma única força durante os primeiros instantes do universo.",
    },
    "Resposta": "D",
    "Motivo": "A Teoria da Grande Unificação na física de partículas busca unificar as forças fundamentais da natureza, excluindo a força gravitacional. Sugere que essas forças eram uma única força durante os primeiros instantes do universo, antes de se separarem em forças distintas à medida que o cosmos se expandiu e esfriou."
  }
      ]
    const perguntasPsicologia = [
      {
        "Pergunta": "O que é o conceito de personalidade na psicologia?",
        "Opcoes": {
            "A": "É a mesma coisa que temperamento.",
            "B": "É a forma como uma pessoa se veste.",
            "C": "São as características psicológicas consistentes e duradouras de uma pessoa.",
            "D": "É apenas o comportamento observável de alguém."
        },
        "Resposta": "C",
        "Motivo": "A personalidade na psicologia refere-se às características psicológicas distintivas que uma pessoa exibe ao longo do tempo e em diferentes situações."
    },
    {
        "Pergunta": "O que é o condicionamento operante de acordo com a teoria comportamental?",
        "Opcoes": {
            "A": "É uma forma de aprendizagem associativa.",
            "B": "É o aprendizado através da observação de modelos.",
            "C": "É o reforço ou punição do comportamento para aumentar ou diminuir sua probabilidade de ocorrer novamente.",
            "D": "É um processo de assimilação de novas informações em estruturas cognitivas existentes."
        },
        "Resposta": "C",
        "Motivo": "O condicionamento operante é um processo no qual o comportamento é fortalecido ou enfraquecido por meio de reforço ou punição, de acordo com as consequências que se seguem ao comportamento."
    },
    {
        "Pergunta": "Qual é o principal foco da psicologia humanista?",
        "Opcoes": {
            "A": "Estudar comportamentos observáveis.",
            "B": "Explorar o inconsciente e os impulsos sexuais.",
            "C": "Entender o impacto das experiências passadas na personalidade.",
            "D": "Promover o crescimento pessoal, a autoatualização e a compreensão do potencial humano."
        },
        "Resposta": "D",
        "Motivo": "A psicologia humanista enfatiza o crescimento pessoal, a autoatualização e a compreensão do potencial humano, focando nas experiências subjetivas e na busca pelo significado da vida."
    },
    {
        "Pergunta": "O que é a teoria psicanalítica de Sigmund Freud?",
        "Opcoes": {
            "A": "Uma abordagem que destaca a importância do inconsciente e dos conflitos psíquicos.",
            "B": "Uma teoria que se concentra exclusivamente em comportamentos observáveis.",
            "C": "Uma visão que enfatiza a importância do condicionamento e da aprendizagem.",
            "D": "Uma abordagem que se concentra na observação de comportamentos manifestos."
        },
        "Resposta": "A",
        "Motivo": "A teoria psicanalítica de Freud destaca a importância do inconsciente, dos conflitos psíquicos e da influência de experiências infantis na formação da personalidade."
    },
    {
        "Pergunta": "O que é a inteligência emocional?",
        "Opcoes": {
            "A": "A habilidade de resolver problemas matemáticos complexos.",
            "B": "A capacidade de entender e gerenciar as próprias emoções e as emoções dos outros.",
            "C": "A capacidade de lembrar e recuperar informações de forma eficiente.",
            "D": "A aptidão para realizar tarefas físicas com habilidade e destreza."
        },
        "Resposta": "B",
        "Motivo": "A inteligência emocional refere-se à capacidade de entender, gerenciar e utilizar as próprias emoções de maneira eficaz, bem como reconhecer e responder às emoções dos outros."
    },
    {
        "Pergunta": "O que é a teoria da aprendizagem social de Albert Bandura?",
        "Opcoes": {
            "A": "A teoria de que o comportamento é determinado principalmente por recompensas e punições.",
            "B": "A ideia de que a personalidade é moldada pela interação entre o id, o ego e o superego.",
            "C": "A abordagem que enfatiza a importância da observação e da imitação na aprendizagem.",
            "D": "A teoria que sugere que as pessoas são motivadas por necessidades básicas, como alimentação e segurança."
        },
        "Resposta": "C",
        "Motivo": "A teoria da aprendizagem social de Bandura destaca a importância da observação e imitação de modelos na aprendizagem de comportamentos."
    },
    {
        "Pergunta": "O que é o conceito de cognição na psicologia?",
        "Opcoes": {
            "A": "É a mesma coisa que emoção.",
            "B": "São processos mentais relacionados à percepção, memória, raciocínio e resolução de problemas.",
            "C": "É o mesmo que comportamento observável.",
            "D": "São instintos inatos que guiam o comportamento humano."
        },
        "Resposta": "B",
        "Motivo": "Cognição na psicologia refere-se aos processos mentais envolvidos na percepção, memória, raciocínio e resolução de problemas, distinguindo-se do comportamento observável e das emoções."},
        { "Pergunta": "O que é um transtorno de ansiedade?",
        "Opcoes": {
          "A": "Uma resposta normal ao estresse.", "B": "Um estado temporário de preocupação moderada.", 
          "C": "Um padrão persistente e excessivo de preocupação e medo.", 
          "D": "A ausência completa de ansiedade." },
          "Resposta": "C", 
          "Motivo": "Transtornos de ansiedade envolvem um padrão persistente e excessivo de preocupação e medo, muitas vezes interferindo nas atividades diárias." },
        
        { "Pergunta": "O que é empatia?",
        "Opcoes": {
          "A": "A capacidade de prever o futuro.",
        "B": "A habilidade de entender e compartilhar os sentimentos de outra pessoa.",
        "C": "A tendência a evitar situações sociais.", 
        "D": "A capacidade de controlar as emoções dos outros." },
        "Resposta": "B",
        "Motivo": "Empatia é a habilidade de compreender e compartilhar os sentimentos de outra pessoa, mostrando compaixão e consideração." },
        
        { "Pergunta": "O que é o conceito de reforço positivo na psicologia?", "Opcoes": {
          "A": "A remoção de algo desagradável para aumentar a probabilidade de um comportamento.", 
          "B": "A apresentação de algo desagradável para aumentar a probabilidade de um comportamento.", "C": "A apresentação de algo agradável para aumentar a probabilidade de um comportamento.",
          "D": "A remoção de algo agradável para diminuir a probabilidade de um comportamento." },
        "Resposta": "C", 
        "Motivo": "Reforço positivo envolve a apresentação de algo agradável para aumentar a probabilidade de um comportamento ser repetido." },
        
        {
          "Pergunta": "O que é a teoria da gestalt na psicologia?", 
        "Opcoes": {
          "A": "A ideia de que o comportamento é determinado por instintos inatos.",
        "B": "A teoria que enfatiza a importância do inconsciente na formação da personalidade.", "C": "A abordagem que se concentra na percepção e organização de experiências sensoriais.",
        "D": "A teoria que sugere que o comportamento é moldado principalmente por recompensas e punições."
        },
        "Resposta": "C", 
        "Motivo": "A teoria da gestalt destaca a importância da percepção e organização de experiências sensoriais para compreender o comportamento humano." }, 
        { 
          "Pergunta": "O que é o conceito de estresse na psicologia?", 
          "Opcoes": { "A": "A ausência de desafios na vida.", "B": "Uma resposta adaptativa do corpo a situações ameaçadoras.",
        "C": "A falta de significado na vida.",
        "D": "Uma condição permanente de tensão extrema." }, 
        "Resposta": "B", 
        "Motivo": "Stresse na psicologia refere-se a uma resposta adaptativa do corpo a situações ameaçadoras ou desafios." },
        
        { "Pergunta": "O que é a teoria do desenvolvimento cognitivo de Jean Piaget?", 
        "Opcoes": { 
          "A": "A teoria que enfatiza a importância do inconsciente na formação da personalidade.",
        "B": "A abordagem que destaca a influência de experiências sociais na aprendizagem.", "C": "A ideia de que o desenvolvimento cognitivo ocorre em estágios sequenciais.",
        "D": "A teoria que sugere que o comportamento é determinado por instintos inatos." },
        "Resposta": "C", 
        
        "Motivo": "A teoria de Piaget postula que o desenvolvimento cognitivo ocorre em estágios sequenciais, cada um caracterizado por formas específicas de pensar." },
        
        {
        "Pergunta": "Qual parte da mente, segundo a teoria psicanalítica de Freud, age como um mediador entre os impulsos do id e os padrões morais do superego?",
        "Opcoes": {
            "A": "Id",
            "B": "Ego",
            "C": "Superego",
            "D": "Consciente"
        },
        "Resposta": "B",
        "Motivo": "O ego, na teoria psicanalítica de Freud, age como um mediador entre os impulsos do id e os padrões morais do superego."
    },
    {
        "Pergunta": "O que a técnica da associação livre, desenvolvida por Freud, visa explorar nos pacientes?",
        "Opcoes": {
            "A": "Sonhos recorrentes",
            "B": "Pensamentos conscientes",
            "C": "Material inconsciente",
            "D": "Traumas recentes"
        },
        "Resposta": "C",
        "Motivo": "A associação livre visa explorar o material inconsciente nos pacientes, permitindo que pensamentos e emoções inconscientes se manifestem livremente."
    },
    {
        "Pergunta": "Qual princípio da teoria da Gestalt sugere que a mente organiza estímulos em padrões significativos e holísticos?",
        "Opcoes": {
            "A": "Proximidade",
            "B": "Continuidade",
            "C": "Fechamento",
            "D": "Totalidade"
        },
        "Resposta": "D",
        "Motivo": "O princípio da totalidade na teoria da Gestalt sugere que a mente organiza estímulos em padrões significativos e holísticos."
    },
    {
        "Pergunta": "De acordo com a teoria da Gestalt, qual é o termo para descrever a percepção de elementos similares agrupados visualmente?",
        "Opcoes": {
            "A": "Proximidade",
            "B": "Semelhança",
            "C": "Continuidade",
            "D": "Fechamento"
        },
        "Resposta": "B",
        "Motivo": "Na teoria da Gestalt, o princípio de semelhança refere-se à percepção de elementos similares agrupados visualmente."
    },
    {
        "Pergunta": "Em qual parte da mente, segundo Freud, estão armazenados pensamentos, desejos e memórias muitas vezes não reconhecidos?",
        "Opcoes": {
            "A": "Id",
            "B": "Ego",
            "C": "Superego",
            "D": "Inconsciente"
        },
        "Resposta": "D",
        "Motivo": "Freud postulou que pensamentos, desejos e memórias muitas vezes não reconhecidos são armazenados no inconsciente."
    },
    {
        "Pergunta": "Qual termo Freud utilizou para descrever a parte da mente que contém pensamentos ou desejos inaceitáveis, mas que são transferidos para o inconsciente?",
        "Opcoes": {
            "A": "Racionalização",
            "B": "Deslocamento",
            "C": "Repressão",
            "D": "Sublimação"
        },
        "Resposta": "C",
        "Motivo": "Repressão é o termo utilizado por Freud para descrever o processo pelo qual pensamentos ou desejos inaceitáveis são transferidos para o inconsciente."
    },
    {
        "Pergunta": "Na teoria da Gestalt, o que significa o princípio da continuidade?",
        "Opcoes": {
            "A": "Agrupar elementos semelhantes visualmente",
            "B": "Perceber elementos próximos como parte de um padrão contínuo",
            "C": "Organizar elementos em totalidades significativas",
            "D": "Fechar formas visuais incompletas"
        },
        "Resposta": "B",
        "Motivo": "O princípio da continuidade na teoria da Gestalt envolve perceber elementos próximos como parte de um padrão contínuo."
    },
    {
        "Pergunta": "Qual é o termo utilizado por Freud para descrever a fase do desenvolvimento infantil caracterizada pelo foco na região genital?",
        "Opcoes": {
            "A": "Fase Oral",
            "B": "Fase Anal",
            "C": "Fase Fálica",
            "D": "Fase Latente"
        },
        "Resposta": "C",
        "Motivo": "A fase fálica é a fase do desenvolvimento infantil, segundo Freud, caracterizada pelo foco na região genital e questões relacionadas ao complexo de Édipo."
    },
    {
        "Pergunta": "Na teoria da Gestalt, qual é o termo para descrever a percepção de formas ou padrões visuais completos, mesmo quando partes estão faltando?",
        "Opcoes": {
            "A": "Proximidade",
            "B": "Semelhança",
            "C": "Fechamento",
            "D": "Totalidade"
        },
        "Resposta": "C",
        "Motivo": "O princípio do fechamento na teoria da Gestalt refere-se à percepção de formas ou padrões visuais completos, mesmo quando partes estão faltando."
    },
    {
        "Pergunta": "De acordo com Freud, qual parte da mente opera de acordo com o princípio do prazer, buscando gratificação imediata?",
        "Opcoes": {
            "A": "Id",
            "B": "Ego",
            "C": "Superego",
            "D": "Consciente"
        },
        "Resposta": "A",
        "Motivo": "O id, segundo Freud, é a parte da mente que opera de acordo com o princípio do prazer, buscando gratificação imediata de desejos e impulsos."
    },
      
      ]
    const perguntasSociologia = [
      {
        "Pergunta": "O que é a mobilidade social?",
        "Opcoes": {
            "A": "A capacidade de mover objetos facilmente.",
            "B": "A mudança de posição social de um indivíduo ou grupo ao longo do tempo.",
            "C": "A habilidade de se comunicar eficientemente em uma sociedade.",
            "D": "A adaptação de um grupo social às mudanças ambientais."
        },
        "Resposta": "B",
        "Motivo": "A mobilidade social refere-se à mudança de posição social de um indivíduo ou grupo ao longo do tempo, geralmente em termos de classe social."
    },
    {
        "Pergunta": "Qual teoria sociológica enfatiza a importância dos símbolos e da interação simbólica na sociedade?",
        "Opcoes": {
            "A": "Funcionalismo",
            "B": "Conflito",
            "C": "Interação simbólica",
            "D": "Estruturalismo"
        },
        "Resposta": "C",
        "Motivo": "A teoria da interação simbólica enfatiza a importância dos símbolos e da comunicação simbólica na construção da realidade social."
    },
    {
        "Pergunta": "O que é a anomia, conforme proposto por Émile Durkheim?",
        "Opcoes": {
            "A": "A integração social através de rituais.",
            "B": "A solidariedade baseada em semelhanças.",
            "C": "A falta de normas sociais claras e compartilhadas.",
            "D": "A mobilidade social ascendente."
        },
        "Resposta": "C",
        "Motivo": "Anomia, segundo Durkheim, refere-se à falta de normas sociais claras e compartilhadas, levando a um estado de desintegração social."
    },
    {
        "Pergunta": "Qual é o conceito de mais-valia, associado à teoria de Karl Marx?",
        "Opcoes": {
            "A": "Lucro obtido através de investimentos financeiros.",
            "B": "O valor adicional criado pelo trabalho além do necessário para a subsistência.",
            "C": "A igualdade de oportunidades na sociedade.",
            "D": "A desigualdade social inevitável."
        },
        "Resposta": "B",
        "Motivo": "A mais-valia, em termos marxistas, refere-se ao valor adicional criado pelo trabalho além do necessário para a subsistência, que é apropriado pelos proprietários dos meios de produção."
    },
    {
        "Pergunta": "O que é a teoria da ação social proposta por Max Weber?",
        "Opcoes": {
            "A": "A ideia de que as ações humanas são determinadas apenas por fatores econômicos.",
            "B": "O estudo das estruturas sociais e suas funções.",
            "C": "A compreensão das ações humanas considerando significados e intenções.",
            "D": "A crença na inevitabilidade do conflito social."
        },
        "Resposta": "C",
        "Motivo": "A teoria da ação social de Weber enfatiza a compreensão das ações humanas considerando os significados e intenções por trás delas."
    },
    {
        "Pergunta": "O que é a teoria do conflito social, conforme proposta por Karl Marx?",
        "Opcoes": {
            "A": "A ideia de que os conflitos sociais são inevitáveis e necessários para a mudança social.",
            "B": "A crença na harmonia e estabilidade social como base da coesão social.",
            "C": "A ênfase na integração social por meio de normas compartilhadas.",
            "D": "A igualdade natural entre todas as classes sociais."
        },
        "Resposta": "A",
        "Motivo": "A teoria do conflito social de Marx sugere que os conflitos sociais são inevitáveis e necessários para a mudança social, especialmente no contexto da luta de classes."
    },
    {
        "Pergunta": "O que é o conceito de cultura, na perspectiva sociológica?",
        "Opcoes": {
            "A": "Apenas as expressões artísticas de uma sociedade.",
            "B": "Os hábitos alimentares de uma comunidade.",
            "C": "O conjunto de valores, crenças, normas e práticas compartilhadas por membros de uma sociedade.",
            "D": "Apenas a língua falada por um grupo social."
        },
        "Resposta": "C",
        "Motivo": "Cultura, na perspectiva sociológica, abrange o conjunto de valores, crenças, normas e práticas compartilhadas por membros de uma sociedade."
    },
    {
        "Pergunta": "O que é o conceito de capital cultural segundo Pierre Bourdieu?",
        "Opcoes": {
            "A": "Recursos financeiros acumulados ao longo do tempo.",
            "B": "Conjunto de conhecimentos e habilidades adquiridos por meio da educação e experiências culturais.",
            "C": "A força física e mental de um indivíduo.",
            "D": "A influência política de uma pessoa na sociedade."
        },
        "Resposta": "B",
        "Motivo": "O capital cultural, segundo Bourdieu, refere-se ao conjunto de conhecimentos e habilidades adquiridos por meio da educação e experiências culturais, contribuindo para a posição social."
    },
    {
        "Pergunta": "Na teoria funcionalista de Émile Durkheim, o que é a solidariedade mecânica?",
        "Opcoes": {
            "A": "A coesão social baseada na interdependência e especialização.",
            "B": "A coesão social baseada em semelhanças e valores compartilhados.",
            "C": "A integração social por meio de regras e normas especializadas.",
            "D": "A harmonia social alcançada pela igualdade de oportunidades."
        },
        "Resposta": "B",
        "Motivo": "A solidariedade mecânica, na teoria funcionalista de Durkheim, refere-se à coesão social baseada em semelhanças e valores compartilhados, com pouca especialização."
    },
    {
        "Pergunta": "O que é a socialização?",
        "Opcoes": {
            "A": "Apenas o processo de ensino formal em instituições educacionais.",
            "B": "A influência da mídia na formação de opiniões.",
            "C": "O processo pelo qual os indivíduos aprendem e internalizam normas, valores e comportamentos de uma sociedade.",
            "D": "Apenas a interação entre pessoas em ambientes sociais."
        },
        "Resposta": "C",
        "Motivo": "Socialização refere-se ao processo pelo qual os indivíduos aprendem e internalizam normas, valores e comportamentos de uma sociedade, ocorrendo ao longo da vida."
    },
    {
        "Pergunta": "Qual teoria sociológica enfatiza a ideia de que as interações diárias e pequenos símbolos são essenciais para entender a sociedade?",
        "Opcoes": {
            "A": "Funcionalismo",
            "B": "Teoria do Conflito",
            "C": "Interacionismo Simbólico",
            "D": "Estruturalismo"
        },
        "Resposta": "C",
        "Motivo": "O Interacionismo Simbólico enfatiza as interações diárias e pequenos símbolos como essenciais para entender a sociedade."
    },
    {
        "Pergunta": "O que é a teoria da estratificação social?",
        "Opcoes": {
            "A": "A análise das mudanças sociais ao longo do tempo.",
            "B": "A investigação da formação de grupos sociais.",
            "C": "O estudo das desigualdades entre diferentes grupos na sociedade.",
            "D": "A igualdade total entre todas as classes sociais."
        },
        "Resposta": "C",
        "Motivo": "A teoria da estratificação social foca no estudo das desigualdades entre diferentes grupos na sociedade, incluindo questões de classe social."
    },
    {
        "Pergunta": "O que é a teoria da socialização secundária?",
        "Opcoes": {
            "A": "O processo de aprendizagem de normas e valores na infância.",
            "B": "A influência da mídia na formação de opiniões.",
            "C": "A adaptação contínua às normas sociais ao longo da vida.",
            "D": "A socialização ocorrida na vida adulta."
        },
        "Resposta": "D",
        "Motivo": "A socialização secundária refere-se à socialização ocorrida na vida adulta, muitas vezes em novos contextos ou papéis sociais."
    },
    {
        "Pergunta": "O que é a teoria do funcionalismo na sociologia?",
        "Opcoes": {
            "A": "A ênfase nas mudanças sociais e na evolução das sociedades.",
            "B": "A análise das desigualdades sociais e dos conflitos de classe.",
            "C": "O estudo da sociedade como um sistema interdependente.",
            "D": "A ideia de que a sociedade deve permanecer estática para ser funcional."
        },
        "Resposta": "C",
        "Motivo": "A teoria do funcionalismo na sociologia vê a sociedade como um sistema interdependente, onde cada parte contribui para a estabilidade do todo."
    },
    {
        "Pergunta": "O que é a cultura popular?",
        "Opcoes": {
            "A": "A cultura compartilhada por todas as classes sociais.",
            "B": "Os elementos culturais preferidos por intelectuais.",
            "C": "A cultura produzida e consumida pelas massas.",
            "D": "A cultura restrita a grupos de elite."
        },
        "Resposta": "C",
        "Motivo": "Cultura popular refere-se à cultura produzida e consumida pelas massas, refletindo gostos e valores predominantes na sociedade."
    },
    
    ]
    const perguntasArqueologia =[
      {
        "Pergunta": "O que é a estratigrafia na arqueologia?",
        "Opcoes": {
            "A": "O estudo das mudanças culturais ao longo do tempo.",
            "B": "A escavação de locais arqueológicos.",
            "C": "A análise da camada geológica em um sítio arqueológico.",
            "D": "O estudo das ferramentas antigas."
        },
        "Resposta": "C",
        "Motivo": "A estratigrafia na arqueologia envolve a análise das camadas geológicas em um sítio arqueológico para compreender a sequência temporal dos artefatos."
    },
    {
        "Pergunta": "O que é a datação por carbono-14?",
        "Opcoes": {
            "A": "Um método para datar materiais orgânicos com base na desintegração radioativa do carbono-14.",
            "B": "A análise da cerâmica em sítios arqueológicos.",
            "C": "A contagem de anéis de crescimento em troncos de árvores antigas.",
            "D": "A determinação da idade de fósseis."
        },
        "Resposta": "A",
        "Motivo": "A datação por carbono-14 é um método para datar materiais orgânicos usando a desintegração radioativa do carbono-14 presente nesses materiais."
    },
    {
        "Pergunta": "O que é um sítio arqueológico?",
        "Opcoes": {
            "A": "Um local onde são encontrados artefatos modernos.",
            "B": "Uma área de escavação usada por arqueólogos.",
            "C": "Um lugar onde eventos históricos significativos ocorreram.",
            "D": "Uma localização onde evidências de atividades humanas passadas são preservadas."
        },
        "Resposta": "D",
        "Motivo": "Um sítio arqueológico é uma localização onde evidências de atividades humanas passadas são preservadas e podem ser estudadas pelos arqueólogos."
    },
    {
        "Pergunta": "O que é a cerâmica arqueológica frequentemente usada para datar?",
        "Opcoes": {
            "A": "Eventos geológicos.",
            "B": "Mudanças climáticas.",
            "C": "Estruturas arquitetônicas.",
            "D": "Sequências temporais em sítios arqueológicos."
        },
        "Resposta": "D",
        "Motivo": "A cerâmica arqueológica é frequentemente usada para datar sequências temporais em sítios arqueológicos, pois os estilos e técnicas de produção podem indicar diferentes períodos."
    },
    {
        "Pergunta": "O que é um artefato na arqueologia?",
        "Opcoes": {
            "A": "Qualquer objeto feito pelo homem que é interpretado como culturalmente significativo.",
            "B": "Um item de grande valor monetário.",
            "C": "Um objeto natural que é considerado uma relíquia.",
            "D": "Uma estrutura arquitetônica antiga."
        },
        "Resposta": "A",
        "Motivo": "Na arqueologia, um artefato é qualquer objeto feito pelo homem que é interpretado como culturalmente significativo e pode fornecer insights sobre as sociedades passadas."
    },
    
    {
        "Pergunta": "O que é a dendrocronologia?",
        "Opcoes": {
            "A": "A datação por meio de análise de anéis de crescimento em troncos de árvores.",
            "B": "A análise de inscrições em monumentos antigos.",
            "C": "A pesquisa de antiguidades em locais específicos.",
            "D": "A escavação de sítios arqueológicos costeiros."
        },
        "Resposta": "A",
        "Motivo": "A dendrocronologia é o método de datação por meio da análise dos anéis de crescimento em troncos de árvores, proporcionando informações sobre o clima e a cronologia de eventos passados."
    },
    {
        "Pergunta": "O que é a arqueologia experimental?",
        "Opcoes": {
            "A": "A investigação de práticas funerárias.",
            "B": "A reconstrução de estruturas antigas.",
            "C": "A análise de cerâmica.",
            "D": "A reprodução de práticas antigas para compreender técnicas e processos."
        },
        "Resposta": "D",
        "Motivo": "A arqueologia experimental envolve a reprodução de práticas antigas para compreender técnicas e processos, permitindo experimentação prática para insights arqueológicos."
    },
    {
        "Pergunta": "O que são petróglifos?",
        "Opcoes": {
            "A": "Artefatos cerâmicos decorativos.",
            "B": "Desenhos ou gravuras em rochas.",
            "C": "Ferramentas líticas.",
            "D": "Restos de construções antigas."
        },
        "Resposta": "B",
        "Motivo": "Petróglifos são desenhos ou gravuras em rochas, muitas vezes criados por povos indígenas como forma de expressão artística ou comunicação."
    },
    {
        "Pergunta": "O que é a arqueologia subaquática?",
        "Opcoes": {
            "A": "A análise de sítios arqueológicos nas montanhas.",
            "B": "A escavação de locais arqueológicos subterrâneos.",
            "C": "A pesquisa de antiguidades em regiões desérticas.",
            "D": "O estudo de sítios arqueológicos submersos em corpos d'água."
        },
        "Resposta": "D",
        "Motivo": "A arqueologia subaquática envolve o estudo de sítios arqueológicos submersos em corpos d'água, como oceanos, lagos e rios."
    },
    {
        "Pergunta": "O que são sambaquis?",
        "Opcoes": {
            "A": "Montanhas artificiais feitas de terra.",
            "B": "Construções arquitetônicas antigas.",
            "C": "Sítios arqueológicos subaquáticos.",
            "D": "Montículos de conchas e restos alimentares."
        },
        "Resposta": "D",
        "Motivo": "Sambaquis são montículos de conchas e restos alimentares, muitas vezes utilizados por povos pré-históricos, encontrados em regiões costeiras."
    },
     {
        "Pergunta": "O que são petroformas?",
        "Opcoes": {
            "A": "Ferramentas líticas antigas.",
            "B": "Construções de pedra em locais arqueológicos.",
            "C": "Desenhos ou padrões feitos com pedras no solo.",
            "D": "Instrumentos musicais antigos."
        },
        "Resposta": "C",
        "Motivo": "Petroformas são desenhos ou padrões feitos com pedras no solo, muitas vezes associados a práticas rituais ou culturais de povos indígenas."
    },
    {
        "Pergunta": "O que é a arqueologia cognitiva?",
        "Opcoes": {
            "A": "A escavação de estruturas religiosas antigas.",
            "B": "Uma abordagem que estuda como as sociedades passadas pensavam e processavam informações.",
            "C": "A análise de registros escritos antigos.",
            "D": "A pesquisa de restos humanos mumificados."
        },
        "Resposta": "B",
        "Motivo": "A arqueologia cognitiva é uma abordagem que estuda como as sociedades passadas pensavam, processavam informações e expressavam suas ideias."
    },
    {
        "Pergunta": "O que são mamoas?",
        "Opcoes": {
            "A": "Montanhas artificiais feitas de terra.",
            "B": "Estruturas cerimoniais antigas.",
            "C": "Sítios arqueológicos subaquáticos.",
            "D": "Montículos funerários construídos com pedras e terra."
        },
        "Resposta": "D",
        "Motivo": "Mamoas são montículos funerários construídos com pedras e terra, comumente encontrados em contextos funerários pré-históricos."
    },
    {
        "Pergunta": "O que é um kiva?",
        "Opcoes": {
            "A": "Uma escavação arqueológica profunda.",
            "B": "Uma câmara funerária.",
            "C": "Uma estrutura cerimonial subterrânea utilizada por povos indígenas americanos.",
            "D": "Uma escultura pré-histórica."
        },
        "Resposta": "C",
        "Motivo": "Um kiva é uma estrutura cerimonial subterrânea utilizada por povos indígenas americanos para rituais e encontros comunitários."
    },
    {
        "Pergunta": "O que é o método de escavação em testemunha na arqueologia?",
        "Opcoes": {
            "A": "A escavação de sítios arqueológicos subaquáticos.",
            "B": "A análise de artefatos em laboratório.",
            "C": "A escavação em pequenas áreas para investigar estruturas específicas.",
            "D": "A reprodução de práticas antigas para compreender técnicas e processos."
        },
        "Resposta": "C",
        "Motivo": "O método de escavação em testemunha na arqueologia envolve a escavação em pequenas áreas para investigar estruturas específicas sem impactar todo o sítio."
    },  {
        "Pergunta": "O que é o método de escavação em área aberta na arqueologia?",
        "Opcoes": {
            "A": "A escavação de locais arqueológicos subterrâneos.",
            "B": "A análise de registros escritos antigos.",
            "C": "A escavação em grandes áreas para revelar padrões de assentamento.",
            "D": "A investigação de práticas funerárias."
        },
        "Resposta": "C",
        "Motivo": "O método de escavação em área aberta na arqueologia envolve a escavação em grandes áreas para revelar padrões de assentamento e relacionamentos entre diferentes estruturas."
    },
    {
        "Pergunta": "O que é a arqueologia de contrato?",
        "Opcoes": {
            "A": "A escavação de sítios arqueológicos por interesse acadêmico.",
            "B": "A análise de artefatos em museus.",
            "C": "A prática de conduzir pesquisas arqueológicas como parte de projetos de construção.",
            "D": "A pesquisa de antiguidades em regiões montanhosas."
        },
        "Resposta": "C",
        "Motivo": "A arqueologia de contrato refere-se à prática de conduzir pesquisas arqueológicas como parte de projetos de construção, muitas vezes para cumprir regulamentações de preservação cultural."
    },
    {
        "Pergunta": "O que é uma estela na arqueologia?",
        "Opcoes": {
            "A": "Uma antiga ferramenta agrícola.",
            "B": "Uma pedra vertical inscrita ou esculpida.",
            "C": "Um tipo de cerâmica antiga.",
            "D": "Uma estrutura arquitetônica subterrânea."
        },
        "Resposta": "B",
        "Motivo": "Uma estela na arqueologia é uma pedra vertical inscrita ou esculpida, muitas vezes usada para marcar eventos importantes ou homenagear pessoas."
    },
    {
        "Pergunta": "O que é a arqueologia pós-processual?",
        "Opcoes": {
            "A": "Uma técnica de escavação.",
            "B": "Uma abordagem crítica que se concentra na interpretação subjetiva e nas relações de poder.",
            "C": "A pesquisa de fósseis em sítios arqueológicos.",
            "D": "A reconstrução de estruturas antigas em parques temáticos."
        },
        "Resposta": "B",
        "Motivo": "A arqueologia pós-processual é uma abordagem crítica que se concentra na interpretação subjetiva e nas relações de poder nas sociedades passadas."
    },
    {
        "Pergunta": "O que é um ecofato na arqueologia?",
        "Opcoes": {
            "A": "Um tipo de cerâmica antiga.",
            "B": "Um objeto de culto religioso.",
            "C": "Um elemento ambiental não modificado usado como evidência arqueológica.",
            "D": "Uma estrutura arquitetônica antiga."
        },
        "Resposta": "C",
        "Motivo": "Um ecofato na arqueologia refere-se a um elemento ambiental não modificado usado como evidência arqueológica, como restos de plantas ou animais."
    },  {
        "Pergunta": "O que é a tecnologia LiDAR e como ela é usada na arqueologia?",
        "Opcoes": {
            "A": "Uma técnica de escavação.",
            "B": "Um método de datação de artefatos.",
            "C": "Um sistema de imagem por satélite.",
            "D": "Uma tecnologia de mapeamento aéreo que usa laser para revelar características do solo."
        },
        "Resposta": "D",
        "Motivo": "A tecnologia LiDAR é um método de mapeamento aéreo que utiliza laser para escanear o solo, revelando características e estruturas que podem não ser visíveis na superfície."
    },
    {
        "Pergunta": "O que é arqueobotânica?",
        "Opcoes": {
            "A": "O estudo de ossos de animais em sítios arqueológicos.",
            "B": "A análise de sementes e plantas antigas em contextos arqueológicos.",
            "C": "A pesquisa de restos humanos mumificados.",
            "D": "A escavação de fósseis vegetais em cavernas."
        },
        "Resposta": "B",
        "Motivo": "Arqueobotânica é o estudo de sementes, plantas e restos vegetais antigos encontrados em sítios arqueológicos, fornecendo informações sobre a dieta e o ambiente."
    },
    {
        "Pergunta": "O que é uma cista na arqueologia?",
        "Opcoes": {
            "A": "Uma ferramenta de escavação.",
            "B": "Uma câmara funerária de pedra ou madeira.",
            "C": "Um tipo de cerâmica antiga.",
            "D": "Um sistema de transporte de água em antigas civilizações."
        },
        "Resposta": "B",
        "Motivo": "Uma cista na arqueologia refere-se a uma câmara funerária, muitas vezes construída com pedra ou madeira, usada para enterrar os mortos."
    },
    {
        "Pergunta": "O que são geofísicas aplicadas à arqueologia?",
        "Opcoes": {
            "A": "A interpretação de inscrições antigas.",
            "B": "A análise de fósseis em sítios arqueológicos.",
            "C": "Métodos de prospecção não invasivos, como radar de penetração no solo, para mapear características arqueológicas.",
            "D": "A análise de registros escritos antigos."
        },
        "Resposta": "C",
        "Motivo": "Geofísica aplicada à arqueologia envolve métodos de prospecção não invasivos, como radar de penetração no solo, para mapear características arqueológicas sem escavação direta."
    },
    {
        "Pergunta": "O que são artefatos culturais?",
        "Opcoes": {
            "A": "Objetos feitos pelo homem que têm significado cultural.",
            "B": "Objetos raros de alto valor monetário.",
            "C": "Instrumentos musicais antigos.",
            "D": "Estruturas arquitetônicas antigas."
        },
        "Resposta": "A",
        "Motivo": "Artefatos culturais são objetos feitos pelo homem que têm significado cultural, frequentemente utilizados para compreender as práticas e crenças de sociedades passadas."
    },{
        "Pergunta": "O que é a dendrocronologia?",
        "Opcoes": {
            "A": "A datação por meio de análise de anéis de crescimento em troncos de árvores.",
            "B": "A análise de inscrições em monumentos antigos.",
            "C": "A pesquisa de antiguidades em locais específicos.",
            "D": "A escavação de sítios arqueológicos costeiros."
        },
        "Resposta": "A",
        "Motivo": "A dendrocronologia é o método de datação por meio da análise dos anéis de crescimento em troncos de árvores, proporcionando informações sobre o clima e a cronologia de eventos passados."
    },
    {
        "Pergunta": "O que é a arqueologia experimental?",
        "Opcoes": {
            "A": "A investigação de práticas funerárias.",
            "B": "A reconstrução de estruturas antigas.",
            "C": "A análise de cerâmica.",
            "D": "A reprodução de práticas antigas para compreender técnicas e processos."
        },
        "Resposta": "D",
        "Motivo": "A arqueologia experimental envolve a reprodução de práticas antigas para compreender técnicas e processos, permitindo experimentação prática para insights arqueológicos."
    },
    {
        "Pergunta": "O que são petróglifos?",
        "Opcoes": {
            "A": "Artefatos cerâmicos decorativos.",
            "B": "Desenhos ou gravuras em rochas.",
            "C": "Ferramentas líticas.",
            "D": "Restos de construções antigas."
        },
        "Resposta": "B",
        "Motivo": "Petróglifos são desenhos ou gravuras em rochas, muitas vezes criados por povos indígenas como forma de expressão artística ou comunicação."
    },
    {
        "Pergunta": "O que é a arqueologia subaquática?",
        "Opcoes": {
            "A": "A análise de sítios arqueológicos nas montanhas.",
            "B": "A escavação de locais arqueológicos subterrâneos.",
            "C": "A pesquisa de antiguidades em regiões desérticas.",
            "D": "O estudo de sítios arqueológicos submersos em corpos d'água."
        },
        "Resposta": "D",
        "Motivo": "A arqueologia subaquática envolve o estudo de sítios arqueológicos submersos em corpos d'água, como oceanos, lagos e rios."
    },
    {
        "Pergunta": "O que são sambaquis?",
        "Opcoes": {
            "A": "Montanhas artificiais feitas de terra.",
            "B": "Construções arquitetônicas antigas.",
            "C": "Sítios arqueológicos subaquáticos.",
            "D": "Montículos de conchas e restos alimentares."
        },
        "Resposta": "D",
        "Motivo": "Sambaquis são montículos de conchas e restos alimentares, muitas vezes utilizados por povos pré-históricos, encontrados em regiões costeiras."
    },
    {
        "Pergunta": "O que são geoglifos de Nasca?",
        "Opcoes": {
            "A": "Desenhos ou padrões feitos com pedras no solo.",
            "B": "Construções de pedra usadas como túmulos.",
            "C": "Ferramentas líticas usadas por povos antigos.",
            "D": "Esculturas de argila em sítios arqueológicos."
        },
        "Resposta": "A",
        "Motivo": "Os geoglifos de Nasca são desenhos ou padrões feitos com pedras no solo do deserto de Nasca, no Peru, notáveis por sua escala e complexidade."
    },
    {
        "Pergunta": "O que é o método de datação por termoluminescência?",
        "Opcoes": {
            "A": "A análise de registros escritos antigos.",
            "B": "Uma técnica de escavação profunda.",
            "C": "Um método de datação que utiliza a emissão de luz por minerais aquecidos.",
            "D": "A escavação de sítios arqueológicos subterrâneos."
        },
        "Resposta": "C",
        "Motivo": "A termoluminescência é um método de datação que utiliza a emissão de luz por minerais aquecidos, permitindo a determinação da última vez que o material foi aquecido ou exposto à luz."
    },
    {
        "Pergunta": "O que é a arqueologia do período clássico?",
        "Opcoes": {
            "A": "A escavação de estruturas religiosas antigas.",
            "B": "O estudo de sítios arqueológicos com menos de 100 anos.",
            "C": "A pesquisa de fósseis em sítios arqueológicos.",
            "D": "A reconstrução de eventos históricos usando evidências arqueológicas."
        },
        "Resposta": "D",
        "Motivo": "A arqueologia do período clássico concentra-se na reconstrução de eventos históricos durante períodos clássicos de civilizações antigas, como Grécia e Roma."
    },
    {
        "Pergunta": "O que são os petróglifos do Vale do Côa?",
        "Opcoes": {
            "A": "Desenhos ou padrões feitos com pedras no solo.",
            "B": "Gravuras rupestres em Portugal.",
            "C": "Estruturas cerimoniais subterrâneas.",
            "D": "Monumentos megalíticos na França."
        },
        "Resposta": "B",
        "Motivo": "Os petróglifos do Vale do Côa são gravuras rupestres encontradas em Portugal, representando animais, figuras humanas e outros símbolos."
    },
    {
        "Pergunta": "O que é uma oferenda funerária na arqueologia?",
        "Opcoes": {
            "A": "Um tipo de cerâmica antiga.",
            "B": "Um objeto de culto religioso.",
            "C": "Um depósito de bens colocados no túmulo de um falecido.",
            "D": "Uma estrutura arquitetônica pré-histórica."
        },
        "Resposta": "C",
        "Motivo": "Uma oferenda funerária na arqueologia refere-se a um depósito de bens, muitas vezes rituais, colocados no túmulo de um falecido como parte dos rituais funerários."
    },
    
      ];
    const perguntasCriminologia = [
      
      {
        "Pergunta": "Qual serial killer era conhecido como 'O Estrangulador de Boston'?",
        "Opcoes": {
            "A": "Ed Gein",
            "B": "Albert DeSalvo",
            "C": "Jeffrey Dahmer",
            "D": "Aileen Wuornos"
        },
        "Resposta": "B",
        "Motivo": "O 'Estrangulador de Boston' foi identificado como Albert DeSalvo, que confessou ser o responsável por uma série de assassinatos de mulheres na década de 1960."
    },
    {
        "Pergunta": "Quem era conhecido como o 'Assassino do Cinto de Couro'?",
        "Opcoes": {
            "A": "Ted Bundy",
            "B": "David Berkowitz",
            "C": "Dennis Rader",
            "D": "Amaro Batista"
        },
        "Resposta": "C",
        "Motivo": "O 'Assassino do Cinto de Couro' foi identificado como Dennis Rader, também conhecido como BTK (Bind, Torture, Kill), responsável por uma série de assassinatos em Kansas entre 1970 e 2004."
    },
    {
        "Pergunta": "Quem era conhecido como o 'Canibal de Milwaukee'?",
        "Opcoes": {
            "A": "John Wayne Gacy",
            "B": "Ed Gein",
            "C": "Jeffrey Dahmer",
            "D": "Richard Ramirez"
        },
        "Resposta": "C",
        "Motivo": "O 'Canibal de Milwaukee' era Jeffrey Dahmer, um serial killer que cometeu assassinatos e mutilações em Milwaukee, Wisconsin, entre 1978 e 1991."
    },
    {
        "Pergunta": "Qual era o modus operandi de Ted Bundy?",
        "Opcoes": {
            "A": "Estrangulamento",
            "B": "Envenenamento",
            "C": "Atropelamento",
            "D": "Esfaqueamento"
        },
        "Resposta": "A",
        "Motivo": "Ted Bundy era conhecido por estrangular suas vítimas. Ele era um assassino em série ativo nas décadas de 1970 e 1980, envolvido em uma série de crimes nos Estados Unidos."
    },
    {
        "Pergunta": "O que caracterizou os crimes de John Wayne Gacy?",
        "Opcoes": {
            "A": "Assassinato de prostitutas",
            "B": "Assassinato de crianças",
            "C": "Assassinato de idosos",
            "D": "Assassinato de políticos"
        },
        "Resposta": "B",
        "Motivo": "John Wayne Gacy, conhecido como o 'Palhaço Assassino', cometeu seus crimes principalmente contra jovens do sexo masculino, muitos dos quais eram adolescentes."
    },
    {
        "Pergunta": "Quem foi conhecido como o 'Assassino do Sonâmbulo'?",
        "Opcoes": {
            "A": "Ricardo Ramirez",
            "B": "David Berkowitz",
            "C": "Jack the Ripper",
            "D": "Richard Chase"
        },
        "Resposta": "D",
        "Motivo": "O 'Assassino do Sonâmbulo' foi Richard Chase, que cometeu uma série de assassinatos em Sacramento, Califórnia, durante os anos 1970, envolvendo canibalismo e mutilação."
    },
    {
        "Pergunta": "Quem foi conhecido como o 'Assassino do Vale da Morte'?",
        "Opcoes": {
            "A": "Ted Bundy",
            "B": "Zodiac Killer",
            "C": "Richard Ramirez",
            "D": "David Berkowitz"
        },
        "Resposta": "C",
        "Motivo": "Richard Ramirez, conhecido como o 'Assassino do Vale da Morte', cometeu uma série de assassinatos e estupros na Califórnia durante a década de 1980."
    },
    {
        "Pergunta": "Quem foi conhecido como o 'Estripador de Yorkshire'?",
        "Opcoes": {
            "A": "Ted Bundy",
            "B": "David Berkowitz",
            "C": "Peter Sutcliffe",
            "D": "Aileen Wuornos"
        },
        "Resposta": "C",
        "Motivo": "Peter Sutcliffe, conhecido como o 'Estripador de Yorkshire', foi um serial killer britânico que cometeu uma série de assassinatos na década de 1970."
    },
    {
        "Pergunta": "Quem foi o 'Estrangulador de Hillside'?",
        "Opcoes": {
            "A": "Richard Ramirez",
            "B": "John Wayne Gacy",
            "C": "Albert DeSalvo",
            "D": "Kenneth Bianchi e Angelo Buono"
        },
        "Resposta": "D",
        "Motivo": "Kenneth Bianchi e Angelo Buono, conhecidos como o 'Estrangulador de Hillside', foram responsáveis por uma série de assassinatos em Los Angeles na década de 1970."
    },
    {
        "Pergunta": "Quem foi conhecido como o 'Vampiro de Düsseldorf'?",
        "Opcoes": {
            "A": "Peter Kürten",
            "B": "Ed Gein",
            "C": "Richard Ramirez",
            "D": "Ted Bundy"
        },
        "Resposta": "A",
        "Motivo": "Peter Kürten, conhecido como o 'Vampiro de Düsseldorf', foi um serial killer alemão que cometeu uma série de assassinatos e crimes sexuais na década de 1920."
    },
    {
        "Pergunta": "O que é o perfil criminal e como a psicologia contribui para sua elaboração?",
        "Opcoes": {
            "A": "Análise de textos literários",
            "B": "Estudo do comportamento criminoso",
            "C": "Estudo de movimentos artísticos",
            "D": "Análise de dados financeiros"
        },
        "Resposta": "B",
        "Motivo": "O perfil criminal envolve a análise do comportamento criminoso para criar um perfil psicológico do suspeito, contribuindo para investigações criminais."
    },
    {
        "Pergunta": "Explique o conceito de modus operandi e como ele é relevante na análise psicológica de crimes.",
        "Opcoes": {
            "A": "Estudo de línguas estrangeiras",
            "B": "Método de operação de criminosos",
            "C": "Análise de fenômenos meteorológicos",
            "D": "Estudo de processos químicos"
        },
        "Resposta": "B",
        "Motivo": "O modus operandi refere-se ao método de operação específico usado por um criminoso, sendo crucial na análise psicológica para identificar padrões e características individuais."
    },
    {
        "Pergunta": "Como a psicologia forense difere da psicologia clínica tradicional?",
        "Opcoes": {
            "A": "Análise de obras de arte",
            "B": "Análise de evidências criminais",
            "C": "Estudo de manifestações culturais",
            "D": "Interpretação de peças musicais"
        },
        "Resposta": "B",
        "Motivo": "A psicologia forense concentra-se na aplicação de princípios psicológicos para entender comportamentos criminosos e contribuir para investigações, enquanto a psicologia clínica trata de questões de saúde mental em um contexto mais amplo."
    },
    {
        "Pergunta": "Quais são as principais técnicas psicológicas utilizadas em interrogatórios e como elas podem afetar a obtenção de confissões?",
        "Opcoes": {
            "A": "Análise de movimentos sociais",
            "B": "Técnicas de sugestão",
            "C": "Estudo de fenômenos geológicos",
            "D": "Interpretação de documentos históricos"
        },
        "Resposta": "B",
        "Motivo": "Técnicas psicológicas em interrogatórios incluem sugestão, empatia e manipulação emocional, afetando a obtenção de confissões por meio da influência sobre o comportamento do suspeito."
    },
    {
        "Pergunta": "Explique a importância da psicologia na análise de testemunhas oculares em investigações criminais.",
        "Opcoes": {
            "A": "Estudo de civilizações antigas",
            "B": "Uso de técnicas de observação",
            "C": "Análise de fenômenos astronômicos",
            "D": "Estudo de plantas medicinais"
        },
        "Resposta": "B",
        "Motivo": "A psicologia é crucial na análise de testemunhas oculares, ajudando a compreender como fatores psicológicos, como estresse e memória, podem impactar a precisão dos relatos em investigações criminais."
    },

    {
        "Pergunta": "Qual é o papel da psicologia na análise de perfis de vítimas em casos criminais?",
        "Opcoes": {
            "A": "Análise de obras de arte",
            "B": "Entendimento de vulnerabilidades",
            "C": "Estudo de manifestações culturais",
            "D": "Interpretação de peças musicais"
        },
        "Resposta": "B",
        "Motivo": "A psicologia desempenha um papel importante na análise de perfis de vítimas, ajudando a compreender as vulnerabilidades e características individuais que podem influenciar a escolha de alvos por parte de criminosos."
    },
    {
        "Pergunta": "Como as teorias psicológicas explicam o comportamento de serial killers e assassinos em série?",
        "Opcoes": {

            "A": "Estudo de padrões comportamentais",
          
"B": "Uso de técnicas de DNA para identificar perfis genéticos, para uma melhor compreensão dos padrões comportamentais e de risco" ,
"C": "Estudos dos fatores ambientais e sociais que podem contribuir para a violência",
"D": "Uma combinação de fatores biológicos e ambientais, para entender as complexas origens e motivações desses tipos de crime."
        },
        "Resposta": "A",
        "Motivo": "Teorias psicológicas buscam explicar o comportamento de serial killers através do estudo de padrões comportamentais, fatores de risco e possíveis motivações, contribuindo para a identificação e compreensão desses criminosos."
    },
    {
        "Pergunta": "Na necropsia, qual é o objetivo principal da análise toxicológica?",
        "Opcoes": {
            "A": "Identificar a presença de drogas no corpo",
            "B": "Determinar o tipo sanguíneo da vítima",
            "C": "Avaliar a composição genética do indivíduo",
            "D": "Analisar o conteúdo estomacal da vítima"
        },
        "Resposta": "A",
        "Motivo": "A análise toxicológica na necropsia visa identificar a presença de substâncias tóxicas, como drogas, no corpo da vítima."
    },
    {
        "Pergunta": "Qual técnica é utilizada para análise de resíduos de disparos em uma cena de crime?",
        "Opcoes": {
            "A": "Espectroscopia de Massas",
            "B": "Cromatografia Líquida",
            "C": "Espectroscopia de Ressonância Magnética",
            "D": "Espectrometria de Absorção Atômica"
        },
        "Resposta": "A",
        "Motivo": "A análise de resíduos de disparos é comumente realizada por Espectroscopia de Massas, identificando padrões de projéteis e resíduos."
    },
    {
        "Pergunta": "Em que consiste a técnica de papiloscopia?",
        "Opcoes": {
            "A": "Identificação por íris",
            "B": "Análise de padrões de veias",
            "C": "Comparação de impressões digitais",
            "D": "Avaliação de microexpressões faciais"
        },
        "Resposta": "C",
        "Motivo": "A papiloscopia consiste na análise e comparação de impressões digitais, sendo uma técnica crucial para a identificação individual."
    },
    
      {
        "Pergunta": "Quem foi o serial killer conhecido como 'Estrangulador de Boston'?",
        "Opcoes": {
            "A": "Albert Fish",
            "B": "Richard Angelo",
            "C": "BTK (Dennis Rader)",
            "D": "Albert DeSalvo"
        },
        "Resposta": "D",
        "Motivo": "Albert DeSalvo, também conhecido como o Estrangulador de Boston, confessou ser o responsável por uma série de assassinatos na região de Boston na década de 1960."
    },
    {
        "Pergunta": "Qual serial killer foi retratado no filme 'O Silêncio dos Inocentes'?",
        "Opcoes": {
            "A": "John Wayne Gacy",
            "B": "Ted Bundy",
            "C": "Ed Gein",
            "D": "Hannibal Lecter"
        },
        "Resposta": "D",
        "Motivo": "Hannibal Lecter, embora fictício, é um personagem conhecido por ser um canibalisticamente inteligente e astuto serial killer, retratado no filme 'O Silêncio dos Inocentes'."
    },
    
    {
        "Pergunta": "Quais são os passos iniciais ao chegar em uma cena de crime para garantir a preservação das evidências?",
        "Opcoes": {
            "A": "Coletar imediatamente todas as evidências visíveis",
            "B": "Entrevistar testemunhas antes de qualquer intervenção",
            "C": "Isolar a área e garantir a segurança, evitando contaminação das evidências",
            "D": "Iniciar a análise forense imediatamente"
        },
        "Resposta": "C",
        "Motivo": "Os passos iniciais ao chegar em uma cena de crime incluem isolar a área para garantir a segurança e evitar a contaminação das evidências antes de qualquer intervenção."
    },
    {
        "Pergunta": "O que é o princípio de Locard na perícia criminal?",
        "Opcoes": {
            "A": "Todo criminoso deixa vestígios na cena do crime, e todo crime é uma troca",
            "B": "A importância da observação direta na coleta de evidências",
            "C": "A confiança na intuição do perito",
            "D": "A preservação de evidências apenas em crimes de grande magnitude"
        },
        "Resposta": "A",
        "Motivo": "O princípio de Locard afirma que todo criminoso deixa vestígios na cena do crime, e toda interação é uma troca, sendo crucial para a coleta de evidências."
    },
    {
        "Pergunta": "Qual é a finalidade da fotografia forense em uma cena de crime?",
        "Opcoes": {
            "A": "Registrar detalhes da cena para análise posterior",
            "B": "Substituir a coleta física de evidências",
            "C": "Criar reconstruções 3D imediatas",
            "D": "Identificar criminosos pela imagem"
        },
        "Resposta": "A",
        "Motivo": "A fotografia forense tem como finalidade registrar detalhes da cena para análise posterior, auxiliando na reconstrução e preservação da informação."
    },
    {
        "Pergunta": "Quais são os métodos comuns de coleta de evidências biológicas em uma cena de crime?",
        "Opcoes": {
            "A": "Uso exclusivo de fotografia",
            "B": "Swabs e coleta de amostras de sangue",
            "C": "Interrogação de suspeitos",
            "D": "Depoimentos de testemunhas"
        },
        "Resposta": "B",
        "Motivo": "Os métodos comuns de coleta de evidências biológicas incluem o uso de swabs e a coleta de amostras de sangue para análises laboratoriais."
    },
     {
        "Pergunta": "Quais são os cuidados necessários ao manipular uma arma de fogo encontrada em uma cena de crime?",
        "Opcoes": {
            "A": "Desmontar imediatamente para análise detalhada",
            "B": "Manusear com luvas, preservando as impressões digitais",
            "C": "Testar sua funcionalidade no local",
            "D": "Limpar para remover resíduos e preservar a evidência"
        },
        "Resposta": "B",
        "Motivo": "Ao manipular uma arma de fogo encontrada em uma cena de crime, é crucial manuseá-la com luvas para preservar as impressões digitais e evitar contaminação."
    },
    {
        "Pergunta": "O que é a análise de padrões de sangue em uma cena de crime?",
        "Opcoes": {
            "A": "Identificação de grupos sanguíneos",
            "B": "Avaliação da quantidade de sangue derramado",
            "C": "Estudo da forma como o sangue foi depositado",
            "D": "Análise da composição química do sangue"
        },
        "Resposta": "C",
        "Motivo": "A análise de padrões de sangue em uma cena de crime envolve o estudo da forma como o sangue foi depositado, fornecendo informações sobre os eventos que ocorreram."
    },
    {
        "Pergunta": "Qual é a importância da análise de fibras em perícia criminal?",
        "Opcoes": {
            "A": "Identificar marcas de veículos",
            "B": "Estabelecer a cronologia dos eventos",
            "C": "Determinar a presença de substâncias tóxicas",
            "D": "Associar suspeitos à cena do crime"
        },
        "Resposta": "D",
        "Motivo": "A análise de fibras é importante na perícia criminal para associar suspeitos à cena do crime, identificando se há correspondência entre as fibras encontradas no local e as associadas a um indivíduo."
    },
    {
        "Pergunta": "O que é o registro balístico nacional e como ele contribui para investigações?",
        "Opcoes": {
            "A": "Cadastro de armas de fogo",
            "B": "Banco de dados de projéteis",
            "C": "Identificação de veículos",
            "D": "Registro de substâncias químicas"
        },
        "Resposta": "B",
        "Motivo": "O registro balístico nacional é um banco de dados de projéteis e cartuchos, permitindo a identificação de armas de fogo utilizadas em crimes e contribuindo para investigações."
    },
    
      {
        "Pergunta": "Qual é a importância da cadeia de custódia na perícia forense?",
        "Opcoes": {
            "A": "Identificar a vítima",
            "B": "Preservar as evidências e garantir sua integridade",
            "C": "Realizar testes de DNA",
            "D": "Reconstituir a cena do crime"
        },
        "Resposta": "B",
        "Motivo": "A cadeia de custódia é crucial na perícia forense para preservar as evidências e garantir sua integridade ao longo do processo investigativo."
    },
    {
        "Pergunta": "O que é a análise de entomologia forense e como ela contribui para a investigação?",
        "Opcoes": {
            "A": "Análise de padrões de veias",
            "B": "Estudo de insetos para estimar o tempo desde a morte",
            "C": "Análise de resíduos de disparos",
            "D": "Identificação de drogas na cena do crime"
        },
        "Resposta": "B",
        "Motivo": "A análise de entomologia forense envolve o estudo de insetos para estimar o tempo desde a morte, contribuindo para a determinação do intervalo pós-morte."
    },
    {
        "Pergunta": "Como a perícia utiliza a espectroscopia de massas em investigações criminais?",
        "Opcoes": {
            "A": "Análise de padrões de veias",
            "B": "Identificação de drogas",
            "C": "Estudo de fenômenos geológicos",
            "D": "Análise de resíduos de disparos"
        },
        "Resposta": "B",
        "Motivo": "A espectroscopia de massas é utilizada na perícia para identificar substâncias, incluindo drogas, contribuindo para análises químicas em investigações criminais."
    },
    {
        "Pergunta": "Qual é o papel da balística na perícia criminal?",
        "Opcoes": {
            "A": "Identificação de padrões de veias",
            "B": "Determinação do tempo desde a morte",
            "C": "Estudo de resíduos de disparos",
            "D": "Análise de fibras"
        },
        "Resposta": "C",
        "Motivo": "A balística na perícia criminal envolve o estudo de resíduos de disparos para identificar armas de fogo utilizadas em crimes e auxiliar em investigações."
    },
    
    
    ]
    const perguntasCultura =[
      {
        "Pergunta": "Qual é o planeta natal do personagem Superman?",
        "Opcoes": {
            "A": "Krypton",
            "B": "Tatooine",
            "C": "Alderaan",
            "D": "Mars"
        },
        "Resposta": "A",
        "Motivo": "Krypton é o planeta natal do Superman, antes de ser destruído, forçando-o a ser enviado para a Terra."
    },
    {
        "Pergunta": "Quem é o criador do universo de 'Star Wars'?",
        "Opcoes": {
            "A": "J.K. Rowling",
            "B": "George Lucas",
            "C": "J.R.R. Tolkien",
            "D": "Stan Lee"
        },
        "Resposta": "B",
        "Motivo": "George Lucas é o criador do universo de 'Star Wars', uma saga de ficção científica que se tornou um fenômeno cultural."
    },
    {
        "Pergunta": "Qual é o nome do famoso feiticeiro da série de livros 'Harry Potter'?",
        "Opcoes": {
            "A": "Gandalf",
            "B": "Merlin",
            "C": "Dumbledore",
            "D": "Saruman"
        },
        "Resposta": "C",
        "Motivo": "Albus Dumbledore é o famoso feiticeiro da série de livros 'Harry Potter', escrito por J.K. Rowling."
    },
    {
        "Pergunta": "Em 'The Legend of Zelda', qual é o nome do protagonista principal que resgata a Princesa Zelda?",
        "Opcoes": {
            "A": "Link",
            "B": "Mario",
            "C": "Luigi",
            "D": "Ganondorf"
        },
        "Resposta": "A",
        "Motivo": "Link é o protagonista principal da série de jogos 'The Legend of Zelda', conhecido por resgatar a Princesa Zelda e combater o mal."
    },
      {
        "Pergunta": "Em 'Doctor Who', qual é o nome da nave espacial/temporal do Doutor?",
        "Opcoes": {
            "A": "TARDIS",
            "B": "Falcon",
            "C": "Millennium Falcon",
            "D": "Serenity"
        },
        "Resposta": "A",
        "Motivo": "TARDIS é o nome da nave espacial/temporal do Doutor na série 'Doctor Who'."
    },
    
    {
        "Pergunta": "Em 'The Witcher', qual é o nome do protagonista que é um caçador de monstros conhecido como Witcher?",
        "Opcoes": {
            "A": "Geralt of Rivia",
            "B": "Ezio Auditore",
            "C": "Arthas Menethil",
            "D": "Joel Miller"
        },
        "Resposta": "A",
        "Motivo": "O protagonista de 'The Witcher' é Geralt of Rivia, um caçador de monstros conhecido como Witcher."
    },
    
    {
        "Pergunta": "Em 'The Matrix', qual é o nome do personagem interpretado por Keanu Reeves?",
        "Opcoes": {
            "A": "Trinity",
            "B": "Morpheus",
            "C": "Neo",
            "D": "Agent Smith"
        },
        "Resposta": "C",
        "Motivo": "O personagem interpretado por Keanu Reeves em 'The Matrix' é Neo, o Escolhido."
    },
    
    {
        "Pergunta": "Qual é o nome do criador da série de animação 'Os Simpsons'?",
        "Opcoes": {
            "A": "Seth MacFarlane",
            "B": "Matt Groening",
            "C": "Mike Judge",
            "D": "Trey Parker"
        },
        "Resposta": "B",
        "Motivo": "Matt Groening é o criador da série de animação 'Os Simpsons', que se tornou uma das mais longas da história da televisão."
    },
    {
        "Pergunta": "Em que ano foi lançado o primeiro filme da saga 'Jurassic Park'?",
        "Opcoes": {
            "A": "1989",
            "B": "1993",
            "C": "2001",
            "D": "2010"
        },
        "Resposta": "B",
        "Motivo": "O primeiro filme da saga 'Jurassic Park' foi lançado em 1993, dirigido por Steven Spielberg."
    },
    {
        "Pergunta": "Quem é o protagonista da série de TV 'Breaking Bad', que se transforma de um professor de química em um traficante de drogas?",
        "Opcoes": {
            "A": "Jesse Pinkman",
            "B": "Walter White",
            "C": "Saul Goodman",
            "D": "Gus Fring"
        },
        "Resposta": "B",
        "Motivo": "Walter White é o protagonista de 'Breaking Bad', interpretado por Bryan Cranston, que se transforma de um professor de química em um traficante de drogas."
    },
     {
        "Pergunta": "Qual é o nome do movimento artístico que surgiu no início do século XX e é caracterizado por formas geométricas abstratas?",
        "Opcoes": {
            "A": "Impressionismo",
            "B": "Renascimento",
            "C": "Cubismo",
            "D": "Barroco"
        },
        "Resposta": "C",
        "Motivo": "O Cubismo é um movimento artístico que surgiu no início do século XX, caracterizado por formas geométricas abstratas e representações fragmentadas."
    },
    {
        "Pergunta": "Quem é o autor da obra literária 'Dom Quixote', considerada uma das maiores obras da literatura espanhola?",
        "Opcoes": {
            "A": "Miguel de Cervantes",
            "B": "Fernando Pessoa",
            "C": "Gabriel García Márquez",
            "D": "William Shakespeare"
        },
        "Resposta": "A",
        "Motivo": "Miguel de Cervantes é o autor da obra literária 'Dom Quixote', publicada no início do século XVII."
    },
    {
        "Pergunta": "Qual é o nome da primeira mulher a ganhar dois prêmios Nobel, um em Física e outro em Química?",
        "Opcoes": {
            "A": "Marie Curie",
            "B": "Rosalind Franklin",
            "C": "Dorothy Crowfoot Hodgkin",
            "D": "Irene Joliot-Curie"
        },
        "Resposta": "A",
        "Motivo": "Marie Curie foi a primeira mulher a ganhar dois prêmios Nobel, em Física em 1903 e em Química em 1911."
    },
    {
        "Pergunta": "Qual é o nome do quadro mais famoso de Leonardo da Vinci, retratando uma mulher com um sorriso enigmático?",
        "Opcoes": {
            "A": "A Última Ceia",
            "B": "Mona Lisa",
            "C": "A Natividade",
            "D": "A Dama com Arminho"
        },
        "Resposta": "B",
        "Motivo": "Mona Lisa é o quadro mais famoso de Leonardo da Vinci, retratando uma mulher com um sorriso enigmático."
    },
    {
        "Pergunta": "Quem é o autor da escultura 'O Pensador', uma das obras mais conhecidas do movimento artístico conhecido como 'Rodinismo'?",
        "Opcoes": {
            "A": "Michelangelo",
            "B": "Auguste Rodin",
            "C": "Donatello",
            "D": "Pablo Picasso"
        },
        "Resposta": "B",
        "Motivo": "O Pensador é uma escultura do artista francês Auguste Rodin, considerada uma das obras mais conhecidas do movimento artístico conhecido como 'Rodinismo'."
    },
       {
        "Pergunta": "Qual é o nome do movimento cultural e artístico que emergiu nos Estados Unidos nas décadas de 1950 e 1960, envolvendo música, moda e comportamento?",
        "Opcoes": {
            "A": "Beat Generation",
            "B": "Hippie",
            "C": "Swinging Sixties",
            "D": "Roaring Twenties"
        },
        "Resposta": "B",
        "Motivo": "O movimento cultural e artístico dos anos 1960, envolvendo música, moda e comportamento, é conhecido como a cultura Hippie."
    },
    {
        "Pergunta": "Qual é o nome do quadro icônico de Grant Wood retratando um casal de agricultores com expressões sérias?",
        "Opcoes": {
            "A": "American Gothic",
            "B": "Starry Night",
            "C": "Guernica",
            "D": "The Persistence of Memory"
        },
        "Resposta": "A",
        "Motivo": "'American Gothic' é o nome do quadro icônico de Grant Wood, retratando um casal de agricultores com expressões sérias."
    },
    
     {
        "Pergunta": "Qual é o nome da banda virtual criada pelos músicos Damon Albarn e Jamie Hewlett, conhecida por sucessos como 'Feel Good Inc.' e 'Clint Eastwood'?",
        "Opcoes": {
            "A": "Radiohead",
            "B": "Gorillaz",
            "C": "Arctic Monkeys",
            "D": "Coldplay"
        },
        "Resposta": "B",
        "Motivo": "Gorillaz é a banda virtual criada pelos músicos Damon Albarn e Jamie Hewlett, conhecida por sucessos como 'Feel Good Inc.' e 'Clint Eastwood'."
    },
    {
        "Pergunta": "Qual é o nome do filme de animação que segue as aventuras de um ratinho chef em Paris, lançado pela Pixar em 2007?",
        "Opcoes": {
            "A": "Moana",
            "B": "Up - Altas Aventuras",
            "C": "Ratatouille",
            "D": "Zootopia"
        },
        "Resposta": "C",
        "Motivo": "'Ratatouille' é o filme de animação da Pixar que segue as aventuras de um ratinho chef em Paris."
    },
    {
        "Pergunta": "Qual é o nome da série de TV que segue as desventuras de um cientista idoso e seu neto, envolvendo viagens interdimensionais e humor peculiar?",
        "Opcoes": {
            "A": "The Simpsons",
            "B": "Futurama",
            "C": "Rick and Morty",
            "D": "South Park"
        },
        "Resposta": "C",
        "Motivo": "'Rick and Morty' é a série de TV que segue as desventuras de um cientista idoso e seu neto, envolvendo viagens interdimensionais e humor peculiar."
    },
    {
        "Pergunta": "Qual é o nome da atriz que interpreta Hermione Granger na série de filmes 'Harry Potter'?",
        "Opcoes": {
            "A": "Emma Watson",
            "B": "Emma Stone",
            "C": "Emma Roberts",
            "D": "Emma Thompson"
        },
        "Resposta": "A",
        "Motivo": "Emma Watson é a atriz que interpreta Hermione Granger na série de filmes 'Harry Potter'."
    },
    {
        "Pergunta": "Qual é o nome da personagem principal da série de jogos de videogame 'Tomb Raider', conhecida por suas aventuras arqueológicas?",
        "Opcoes": {
            "A": "Lara Croft",
            "B": "Joanna Dark",
            "C": "Aloy",
            "D": "Chell"
        },
        "Resposta": "A",
        "Motivo": "Lara Croft é a personagem principal da série de jogos de videogame 'Tomb Raider', conhecida por suas aventuras arqueológicas."
    },
    {
        "Pergunta": "Qual é o nome da série de TV que apresenta um grupo de sobreviventes enfrentando zumbis em um mundo pós-apocalíptico?",
        "Opcoes": {
            "A": "Breaking Bad",
            "B": "Stranger Things",
            "C": "The Walking Dead",
            "D": "Westworld"
        },
        "Resposta": "C",
        "Motivo": "'The Walking Dead' é a série de TV que apresenta um grupo de sobreviventes enfrentando zumbis em um mundo pós-apocalíptico."
    },
      ]
    const perguntasFotografia =[
      
        {
        "Pergunta": "Qual é a função do diafragma em uma câmera fotográfica?",
        "Opcoes": {
            "A": "Controlar a exposição",
            "B": "Focar a imagem",
            "C": "Armazenar fotos",
            "D": "Transmitir dados para o computador"
        },
        "Resposta": "A",
        "Motivo": "O diafragma controla a quantidade de luz que entra na câmera, influenciando a exposição da fotografia."
    },
    {
        "Pergunta": "O que é o ISO em fotografia?",
        "Opcoes": {
            "A": "Índice de Saturação de Ordem",
            "B": "International Standard Organization",
            "C": "Infrared Sensitivity Operation",
            "D": "Internal Shutter Optics"
        },
        "Resposta": "B",
        "Motivo": "ISO significa International Standard Organization e representa a sensibilidade do sensor à luz."
    },
    {
        "Pergunta": "O que é o obturador em uma câmera?",
        "Opcoes": {
            "A": "Lente responsável pela nitidez",
            "B": "Dispositivo que controla a exposição",
            "C": "Material sensível à luz",
            "D": "Cobertura que protege a lente"
        },
        "Resposta": "B",
        "Motivo": "O obturador é um dispositivo que controla o tempo durante o qual a luz atinge o sensor, influenciando a exposição da imagem."
    },
    {
        "Pergunta": "Qual é a principal diferença entre uma câmera DSLR e uma câmera mirrorless?",
        "Opcoes": {
            "A": "Peso",
            "B": "Tamanho do sensor",
            "C": "Tipo de lente",
            "D": "Visor óptico"
        },
        "Resposta": "D",
        "Motivo": "A principal diferença está no visor: as DSLRs usam um visor óptico, enquanto as mirrorless têm um visor eletrônico ou nenhum visor."
    },
    {
        "Pergunta": "O que é o balanço de branco em fotografia?",
        "Opcoes": {
            "A": "Ajuste da nitidez",
            "B": "Correção de distorção",
            "C": "Ajuste da temperatura de cor",
            "D": "Modo de foco"
        },
        "Resposta": "C",
        "Motivo": "O balanço de branco ajusta a temperatura de cor da imagem para garantir que as cores sejam reproduzidas de maneira precisa."
    },  {
        "Pergunta": "O que é um histograma em fotografia?",
        "Opcoes": {
            "A": "Um gráfico que mostra a distribuição de elementos em uma foto",
            "B": "Um tipo de filtro de lente",
            "C": "Um dispositivo para medir a intensidade da luz",
            "D": "Um tipo de tripé para câmeras profissionais"
        },
        "Resposta": "A",
        "Motivo": "Um histograma em fotografia é um gráfico que mostra a distribuição de elementos tonais em uma imagem, ajudando na análise da exposição."
    },
    {
        "Pergunta": "O que é a profundidade de campo em fotografia?",
        "Opcoes": {
            "A": "A distância entre a câmera e o objeto",
            "B": "A área nítida em uma foto",
            "C": "O tempo de exposição da imagem",
            "D": "A intensidade da luz ambiente"
        },
        "Resposta": "B",
        "Motivo": "A profundidade de campo refere-se à área em uma foto que aparece nítida. Uma profundidade de campo estreita significa que apenas uma pequena parte da imagem está nítida."
    },
    {
        "Pergunta": "O que é a técnica de light painting?",
        "Opcoes": {
            "A": "Técnica para medir a luz ambiente",
            "B": "Manipulação digital de luz na pós-produção",
            "C": "Utilização de luzes para criar desenhos durante uma exposição longa",
            "D": "Técnica de iluminação de estúdio"
        },
        "Resposta": "C",
        "Motivo": "Light painting é uma técnica que envolve o uso de fontes de luz durante uma exposição longa para criar desenhos ou padrões na imagem final."
    },
    {
        "Pergunta": "O que é o formato de arquivo RAW em fotografia?",
        "Opcoes": {
            "A": "Um tipo de lente",
            "B": "Um formato de compressão de imagem",
            "C": "Um arquivo de imagem não processado",
            "D": "Um modo de disparo automático"
        },
        "Resposta": "C",
        "Motivo": "O formato de arquivo RAW é um tipo de arquivo de imagem não processado que preserva todos os dados capturados pelo sensor da câmera."
    },
    {
        "Pergunta": "O que é a regra dos terços em composição fotográfica?",
        "Opcoes": {
            "A": "Um método de organização de equipamentos fotográficos",
            "B": "Uma técnica de pós-produção",
            "C": "Uma abordagem para escolher as configurações da câmera",
            "D": "Um guia para posicionar elementos chave na imagem"
        },
        "Resposta": "D",
        "Motivo": "A regra dos terços é um guia de composição que sugere posicionar elementos chave em pontos de interseção imaginários que dividem a imagem em terços."
    },
    
       {
        "Pergunta": "O que é o bokeh em fotografia?",
        "Opcoes": {
            "A": "Uma técnica de iluminação de estúdio",
            "B": "Um tipo de tripé para câmeras profissionais",
            "C": "A área nítida em uma foto",
            "D": "A qualidade estética do desfoque de fundo"
        },
        "Resposta": "D",
        "Motivo": "Bokeh refere-se à qualidade estética do desfoque de fundo em uma imagem, muitas vezes usado para criar um efeito artístico."
    },
    {
        "Pergunta": "O que é a distância focal em uma lente de câmera?",
        "Opcoes": {
            "A": "A distância entre a câmera e o objeto",
            "B": "A capacidade da lente para focar",
            "C": "O comprimento da lente",
            "D": "A intensidade da luz ambiente"
        },
        "Resposta": "C",
        "Motivo": "A distância focal em uma lente de câmera é o comprimento óptico da lente, afetando a perspectiva e o campo de visão da imagem."
    },
    {
        "Pergunta": "O que é o modo bulb em fotografia?",
        "Opcoes": {
            "A": "Um modo de disparo automático",
            "B": "Uma técnica de iluminação de estúdio",
            "C": "Um modo de exposição",
            "D": "Um modo que permite exposições longas"
        },
        "Resposta": "D",
        "Motivo": "O modo bulb em fotografia permite exposições longas, onde o obturador permanece aberto enquanto o botão do obturador é mantido pressionado."
    },
    {
        "Pergunta": "O que é um filtro polarizador em fotografia?",
        "Opcoes": {
            "A": "Um filtro para proteção da lente",
            "B": "Um dispositivo para medir a intensidade da luz",
            "C": "Um filtro para correção de cores",
            "D": "Um filtro para reduzir reflexos e aumentar contraste"
        },
        "Resposta": "D",
        "Motivo": "Um filtro polarizador em fotografia é usado para reduzir reflexos em superfícies não metálicas e aumentar o contraste na imagem."
    },
    {
        "Pergunta": "O que é o modo manual em uma câmera?",
        "Opcoes": {
            "A": "Um modo de disparo automático",
            "B": "Um modo que ajusta automaticamente todas as configurações",
            "C": "Um modo que permite ao fotógrafo ajustar manualmente as configurações",
            "D": "Um modo específico para retratos"
        },
        "Resposta": "C",
        "Motivo": "O modo manual em uma câmera permite ao fotógrafo ajustar manualmente configurações como abertura, velocidade do obturador e ISO."
    },
    
    
    ]
const perguntasDireito = [
      
       {
        "Pergunta": "Qual é o princípio que estabelece que ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei?",
        "Opcoes": {
            "A": "Princípio da Legalidade",
            "B": "Princípio da Igualdade",
            "C": "Princípio da Fraternidade",
            "D": "Princípio da Impessoalidade"
        },
        "Resposta": "A",
        "Motivo": "O Princípio da Legalidade estabelece que ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei."
    },
    {
        "Pergunta": "O que é habeas corpus?",
        "Opcoes": {
            "A": "Ação que visa proteger o direito à liberdade de locomoção",
            "B": "Ação de indenização por danos morais",
            "C": "Ação de divórcio",
            "D": "Ação de despejo"
        },
        "Resposta": "A",
        "Motivo": "Habeas corpus é uma ação que visa proteger o direito à liberdade de locomoção, assegurando o direito de ir e vir."
    },
    {
        "Pergunta": "O que significa 'in dubio pro reo'?",
        "Opcoes": {
            "A": "A favor do réu",
            "B": "A favor do autor",
            "C": "Em dúvida a favor da vítima",
            "D": "Em dúvida a favor do juiz"
        },
        "Resposta": "A",
        "Motivo": "'In dubio pro reo' significa que, em caso de dúvida, a decisão deve ser a favor do réu, presumindo-se sua inocência."
    },
    {
        "Pergunta": "O que é a presunção de inocência?",
        "Opcoes": {
            "A": "Princípio que presume a culpa do acusado",
            "B": "Princípio que presume a inocência do acusado",
            "C": "Princípio que concede direitos apenas aos inocentes",
            "D": "Princípio que valida a inversão do ônus da prova"
        },
        "Resposta": "B",
        "Motivo": "A presunção de inocência é um princípio que presume a inocência do acusado até que sua culpa seja comprovada."
    },
    {
        "Pergunta": "O que é um habeas data?",
        "Opcoes": {
            "A": "Ação que assegura o acesso a informações pessoais",
            "B": "Ação de reparação por danos morais",
            "C": "Ação de execução de alimentos",
            "D": "Ação de divórcio"
        },
        "Resposta": "A",
        "Motivo": "Habeas data é uma ação que assegura o acesso a informações pessoais constantes em registros ou bancos de dados de entidades governamentais ou de caráter público."
    },{
        "Pergunta": "O que é o princípio da presunção de veracidade?",
        "Opcoes": {
            "A": "Presume-se que as alegações da parte sejam verdadeiras",
            "B": "Presume-se a veracidade das provas apresentadas",
            "C": "Presume-se a culpa do acusado",
            "D": "Presume-se a inconstitucionalidade de uma lei"
        },
        "Resposta": "A",
        "Motivo": "O princípio da presunção de veracidade estabelece que se presume verdadeiras as alegações da parte, até prova em contrário."
    },
    {
        "Pergunta": "O que é o habeas data ambiental?",
        "Opcoes": {
            "A": "Ação que assegura o acesso a informações ambientais",
            "B": "Ação de indenização por dano ambiental",
            "C": "Ação de despejo por dano ambiental",
            "D": "Ação de divórcio por dano ambiental"
        },
        "Resposta": "A",
        "Motivo": "O habeas data ambiental é uma ação que assegura o acesso a informações ambientais, buscando a transparência e proteção do meio ambiente."
    },
    {
        "Pergunta": "O que é a coisa julgada?",
        "Opcoes": {
            "A": "Decisão transitada em julgado",
            "B": "Sentença de primeiro grau",
            "C": "Recurso em segunda instância",
            "D": "Decisão liminar"
        },
        "Resposta": "A",
        "Motivo": "Coisa julgada é a qualidade da decisão judicial que não pode mais ser modificada, pois transitou em julgado e tornou-se definitiva."
    },
    {
        "Pergunta": "O que é o foro privilegiado?",
        "Opcoes": {
            "A": "Privilégio concedido a advogados",
            "B": "Privilégio concedido a políticos e autoridades",
            "C": "Privilégio concedido a réus primários",
            "D": "Privilégio concedido a vítimas de crimes graves"
        },
        "Resposta": "B",
        "Motivo": "O foro privilegiado é um privilégio concedido a políticos e autoridades, garantindo que sejam julgados por instâncias superiores."
    },
    {
        "Pergunta": "O que é o princípio do contraditório?",
        "Opcoes": {
            "A": "Princípio que estabelece que todos são iguais perante a lei",
            "B": "Princípio que garante o direito ao silêncio",
            "C": "Princípio que assegura o direito de defesa e contestação",
            "D": "Princípio que estabelece a presunção de inocência"
        },
        "Resposta": "C",
        "Motivo": "O princípio do contraditório assegura o direito das partes de serem ouvidas e de contestar as alegações apresentadas no processo."
    },{
        "Pergunta": "Qual é o prazo prescricional para a propositura da ação de reparação de danos em caso de responsabilidade civil contratual?",
        "Opcoes": {
            "A": "1 ano",
            "B": "3 anos",
            "C": "5 anos",
            "D": "10 anos"
        },
        "Resposta": "B",
        "Motivo": "A ação de reparação de danos em caso de responsabilidade civil contratual possui prazo prescricional de 3 anos, conforme o artigo 206, § 3º, V, do Código Civil."
    },
    {
        "Pergunta": "Nos crimes contra a Administração Pública, qual é o prazo prescricional para a ação penal, de acordo com a legislação brasileira?",
        "Opcoes": {
            "A": "2 anos",
            "B": "3 anos",
            "C": "5 anos",
            "D": "8 anos"
        },
        "Resposta": "C",
        "Motivo": "Nos crimes contra a Administração Pública, o prazo prescricional para a ação penal é de 5 anos, conforme o artigo 109, IV, do Código Penal."
    },
    {
        "Pergunta": "Em um contrato de compra e venda, qual é o princípio que permite ao comprador exigir a entrega da coisa, e ao vendedor, o recebimento do preço?",
        "Opcoes": {
            "A": "Princípio da Boa-fé Objetiva",
            "B": "Princípio da Consensualidade",
            "C": "Princípio da Função Social do Contrato",
            "D": "Princípio da Autonomia da Vontade"
        },
        "Resposta": "D",
        "Motivo": "No contrato de compra e venda, vigora o Princípio da Autonomia da Vontade, que permite ao comprador exigir a entrega da coisa e ao vendedor, o recebimento do preço."
    },
    {
        "Pergunta": "Quando é cabível a prisão preventiva, de acordo com o Código de Processo Penal brasileiro?",
        "Opcoes": {
            "A": "Sempre que houver indícios de autoria e materialidade do crime",
            "B": "Quando presentes os requisitos da prisão temporária",
            "C": "Somente em crimes hediondos",
            "D": "Diante da demonstração de perigo gerado pela liberdade do acusado"
        },
        "Resposta": "D",
        "Motivo": "A prisão preventiva é cabível quando demonstrada a necessidade da medida para a garantia da ordem pública, ordem econômica, conveniência da instrução criminal ou para assegurar a aplicação da lei penal, nos termos do artigo 312 do CPP."
    },
    {
        "Pergunta": "Qual é o recurso cabível contra decisão interlocutória que resolve mérito do processo?",
        "Opcoes": {
            "A": "Agravo de Instrumento",
            "B": "Apelação",
            "C": "Recurso Especial",
            "D": "Embargos de Declaração"
        },
        "Resposta": "B",
        "Motivo": "Contra decisão interlocutória que resolve mérito do processo, cabe o recurso de apelação, conforme previsto no artigo 1.009 do Código de Processo Civil."
    },
    
    {
        "Pergunta": "Na ação de mandado de segurança, em que situação é cabível a impetração coletiva?",
        "Opcoes": {
            "A": "Somente quando a violação atingir direitos individuais",
            "B": "Quando houver ameaça a direito líquido e certo de grupo, categoria ou classe",
            "C": "Exclusivamente para proteção de direitos políticos",
            "D": "Em casos de prisão ilegal"
        },
        "Resposta": "B",
        "Motivo": "A impetração coletiva de mandado de segurança é cabível quando houver ameaça a direito líquido e certo de grupo, categoria ou classe, conforme o artigo 21 da Lei 12.016/2009."
    },
    {
        "Pergunta": "O que caracteriza a chamada Súmula Vinculante no ordenamento jurídico brasileiro?",
        "Opcoes": {
            "A": "Decisão proferida pelo Superior Tribunal de Justiça (STJ)",
            "B": "Entendimento consolidado em súmulas do Supremo Tribunal Federal (STF)",
            "C": "Norma infraconstitucional de caráter geral",
            "D": "Precedente obrigatório para todos os órgãos do Poder Judiciário"
        },
        "Resposta": "D",
        "Motivo": "A Súmula Vinculante, prevista no artigo 103-A da Constituição Federal, é um entendimento consolidado em súmulas do Supremo Tribunal Federal (STF) que se torna precedente obrigatório para todos os órgãos do Poder Judiciário."
    },
    {
        "Pergunta": "No Direito Tributário, o que caracteriza a denúncia espontânea?",
        "Opcoes": {
            "A": "Pagamento do tributo antes do início de fiscalização",
            "B": "Pagamento do tributo após a notificação fiscal",
            "C": "Confissão de débito após a instauração de processo administrativo",
            "D": "Parcelamento do débito tributário"
        },
        "Resposta": "A",
        "Motivo": "A denúncia espontânea ocorre quando o contribuinte, antes de qualquer procedimento administrativo ou fiscalização, efetua o pagamento do tributo devido."
    },
    {
        "Pergunta": "Em que consiste a tutela inibitória no Direito do Consumidor?",
        "Opcoes": {
            "A": "Reparação por danos morais",
            "B": "Proibição da prática de ato ilícito",
            "C": "Compensação financeira",
            "D": "Anulação de contrato"
        },
        "Resposta": "B",
        "Motivo": "A tutela inibitória no Direito do Consumidor consiste na proibição da prática de ato ilícito, visando evitar a continuidade de condutas prejudiciais aos consumidores."
    },
    {
        "Pergunta": "O que é o instituto da Repercussão Geral no Supremo Tribunal Federal?",
        "Opcoes": {
            "A": "Possibilidade de recurso especial",
            "B": "Requisito para a concessão de medida liminar",
            "C": "Critério para a escolha de relator",
            "D": "Instrumento de seleção de processos de relevância jurídica e social"
        },
        "Resposta": "D",
        "Motivo": "A Repercussão Geral é um instituto do Supremo Tribunal Federal que serve como instrumento de seleção de processos de relevância jurídica e social, permitindo a apreciação de casos que tenham grande impacto."
    },{
        "Pergunta": "Na responsabilidade civil extracontratual, qual é a diferença entre culpa exclusiva da vítima e culpa concorrente?",
        "Opcoes": {
            "A": "Não há diferença; os termos são sinônimos",
            "B": "Culpa exclusiva da vítima significa que ela contribuiu totalmente para o dano, enquanto culpa concorrente indica contribuição parcial da vítima",
            "C": "Culpa exclusiva da vítima é quando ela age com dolo, enquanto culpa concorrente refere-se a atos negligentes",
            "D": "Culpa exclusiva da vítima é uma modalidade de dolo"
        },
        "Resposta": "B",
        "Motivo": "Na culpa exclusiva da vítima, ela contribui totalmente para o dano, enquanto na culpa concorrente há contribuição parcial tanto do agente quanto da vítima."
    },
    {
        "Pergunta": "Qual é a diferença entre concessão de anistia e indulto?",
        "Opcoes": {
            "A": "Ambos os termos são sinônimos",
            "B": "Anistia perdoa o crime, enquanto indulto extingue a pena",
            "C": "Anistia é aplicada somente a crimes políticos, enquanto indulto é para crimes comuns",
            "D": "Indulto é concedido exclusivamente pelo Poder Legislativo"
        },
        "Resposta": "B",
        "Motivo": "A anistia perdoa o crime, eliminando suas consequências penais, enquanto o indulto extingue a pena imposta ao condenado."
    },
    {
        "Pergunta": "O que caracteriza a teoria finalista da ação penal?",
        "Opcoes": {
            "A": "Ação penal é a busca da verdade real",
            "B": "Ação penal é um direito subjetivo do Estado",
            "C": "Ação penal é a pretensão punitiva do Estado",
            "D": "Ação penal é o exercício do direito de punir"
        },
        "Resposta": "C",
        "Motivo": "A teoria finalista da ação penal destaca que a ação penal é a pretensão punitiva do Estado, voltada para a aplicação da pena."
    },
    {
        "Pergunta": "Qual é a diferença entre inquérito policial e ação penal?",
        "Opcoes": {
            "A": "Inquérito policial é fase preparatória da ação penal, que é a fase judicial",
            "B": "Inquérito policial é ato unilateral do Ministério Público, enquanto ação penal é ato bilateral",
            "C": "Inquérito policial é ato judicial, enquanto ação penal é ato extrajudicial",
            "D": "Inquérito policial é realizado pelo juiz, enquanto ação penal é conduzida pela autoridade policial"
        },
        "Resposta": "A",
        "Motivo": "O inquérito policial é a fase preparatória da ação penal, que é a fase judicial do processo criminal."
    },
    {
        "Pergunta": "O que é o princípio da insignificância no Direito Penal?",
        "Opcoes": {
            "A": "Crimes de pouca relevância não são punidos",
            "B": "Todos os crimes são puníveis, independentemente de sua gravidade",
            "C": "Princípio aplicado apenas em crimes contra o patrimônio",
            "D": "Crimes cometidos por pessoas influentes são considerados insignificantes"
        },
        "Resposta": "A",
        "Motivo": "O princípio da insignificância estabelece que crimes de pouca relevância, que não causam lesão significativa, não são punidos, visando a racionalidade e economia do sistema penal."
    },
    ]
    
        
   // Assuming you have these variables defined somewhere in your script
if(!global.quizxp[m.chat]){
  global.quizxp[m.chat] = {
    "modo": false
  }
}

// Your existing code...

const selectedCategory = categories[selectedCategoryIndex];
const selectedPerguntasArray = eval(`perguntas${selectedCategory.replace(/\s+/g, '')}`); // Dynamically get the array based on category

const delayBetweenQuestions = 45000; // 45 seconds


if (selectedPerguntasArray && selectedPerguntasArray.length > 0) {
  const currentTime = new Date().getTime() ; // Current time in seconds
  if(global.quizxp[m.chat].modo==false){
  if(global.quiz[m.chat] != null) {
  console.log("Current Time: " + currentTime);
  console.log("Last Question Time: " + global.quiz[m.chat].time);

  const timeDifference = currentTime - global.quiz[m.chat].time;
  console.log("Time Difference: " + timeDifference);
  console.log("Delay: " + delayBetweenQuestions);

  if (timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    
    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);
await m.reply(` ━━━━━━━━━⬣ 💀 ⬣━━━━━━━━

🕰️🕯️ 𝓐𝓰𝓾𝓪𝓻𝓭𝓪 𝓹𝓸𝓻 𝓮𝓽𝓮𝓻𝓷𝓸𝓼 ${remainingTimeInSeconds} 𝓼𝓮𝓰𝓾𝓷𝓭𝓸𝓼, 𝓪𝓷𝓽𝓮𝓼 𝓺𝓾𝓮 𝓽𝓾𝓪 𝓹𝓻𝓸𝔁𝓲𝓶𝓪 𝓹𝓮𝓻𝓰𝓾𝓷𝓽𝓪 𝓸𝓾𝓼𝓮 𝓹𝓮𝓻𝓽𝓾𝓻𝓫𝓪𝓻 𝓸 𝓻𝓮𝓹𝓸𝓾𝓼𝓸 𝓶𝓪𝓬𝓪𝓫𝓻𝓸 𝓭𝓮𝓼𝓽𝓮 𝓭𝓲𝓪𝓵𝓸𝓰𝓸.


 ━━━━━━━━━⬣ ${vs} ⬣━━━━━━━━`);
  } 
  else {
    const perguntaObj = pickRandom(selectedPerguntasArray);
    const { Pergunta, Opcoes, Resposta, Motivo } = perguntaObj;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

 // Update the current question and answer
    global.quiz[m.chat] = {
      math: false,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime()
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
      global.quiz[id].math = true;
    } else {
      global.quiz[id].math = false;
    }
    // Send the question
    await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.quizxp[m.chat].modo== true ? "╰━━━━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}`);

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
  }
  else {
    const perguntaObj = pickRandom(selectedPerguntasArray);
    const { Pergunta, Opcoes, Resposta, Motivo } = perguntaObj;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

 // Update the current question and answer
    global.quiz[m.chat] = {
      math: false,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime()
    };
    console.log("test" + global.quizxp[m.chat].modo)
    // Send the question
    await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.quizxp[m.chat].modo== true ? "╰━━━━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}
      `);

    // Updte the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
  }
  else if(global.quizxp[m.chat].modo==true){
  
  if (global.xppergunta==true) {
    await m.reply(`
     ━━━━━━━━━⬣ 💀 𝔔𝔲𝔦𝔷 💀 ⬣━━━━━━━━ 
 
 🪶📜    ℜ𝔢𝔰𝔭𝔬𝔫𝔡𝔞-𝔪𝔢 𝔞 𝔦𝔫𝔡𝔞𝔤𝔞𝔠𝔞𝔬 𝔞𝔫𝔱𝔢𝔯𝔦𝔬𝔯, 𝔡𝔢 𝔪𝔬𝔡𝔬 𝔞 𝔭𝔯𝔬𝔰𝔰𝔢𝔤𝔲𝔦𝔯 𝔞 𝔱𝔯𝔦𝔩𝔥𝔞 𝔫𝔢𝔰𝔱𝔢 𝔳𝔞𝔩𝔢 𝔡𝔢 𝔰𝔬𝔪𝔟𝔯𝔞𝔰 𝔡𝔬 𝔠𝔬𝔫𝔥𝔢𝔠𝔦𝔪𝔢𝔫𝔱𝔬
     
     ━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━
    `)
  }
  else{  
    if(global.quiz[m.chat] != null) {
 
 
    const perguntaObj = pickRandom(selectedPerguntasArray);
    const { Pergunta, Opcoes, Resposta, Motivo } = perguntaObj;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    global.xppergunta = true
    let qid = await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.quizxp[m.chat].modo== true ? "╰━━━━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}`);

 // Update the current question and answer
    global.quiz[m.chat] = {
      math: false,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "xp": 25,
      "id": qid.id,
      "time": new Date().getTime()
    };
    console.log("on quiz  "+ global.quiz[m.chat].id)
    // Send the question
    

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  
  }
  else {
    const perguntaObj = pickRandom(selectedPerguntasArray);
    const { Pergunta, Opcoes, Resposta, Motivo} = perguntaObj;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    global.xppergunta= true
 // Update the current question and answer
    
    console.log("test" + global.quizxp[m.chat].modo)
    // Send the question
   let qid = await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.quizxp[m.chat].modo== true ? "╰━━━━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}
      `);

global.quiz[m.chat] = {
      math: false,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "xp": 25,
      "id": qid.id,
      "time": new Date().getTime()
    };
    console.log("on quiz  "+ global.quiz[m.chat].id)
    // Updte the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
  } //fim estado pergunta
  } // fim elseif if competitivo
  
}

}
    else if(text === "r"){
      if(global.xppergunta==true){
        global.xppergunta=false
      }
      if(global.quizxp&& global.xppergunta){
        await m.reply(`
       
╭━━━━━━━━━⬣
💀 𝔈𝔰𝔱𝔢 𝔧𝔬𝔤𝔬 𝔧á 𝔣𝔬𝔦 𝔢𝔫𝔠𝔢𝔯𝔯𝔞𝔡𝔬
┃ ─┅──┅❖ 
╰━━━━━━━━━━━━━━━━━━⬣
        `)
      }
      await m.reply(`
╭━━━━━━━━━⬣
💀 𝐑𝐞𝐬𝐩𝐨𝐬𝐭𝐚: ${global.quiz[m.chat].ca}
┃ ─┅──┅❖ 

${global.quiz[m.chat].cm}

╰━━━━━━━━━━━━━━━━━━⬣
      `)
    }
    else if(text.includes("xp") ){
      const matches = m.text.match(/\.quiz xp (on|off)/);

if (matches) {
  const status = matches[1]; // "on" or "off"
  // Now you can use the 'status' variable as needed
  if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false

} 
else {
  if(status=="on"){
    global.quizxp[m.chat] = {
      "modo":true
    }
    await m.reply(`
━━━━━━━━━⬣ 💀 ⬣━━━━━━━━ 
🕯️ 𝙈𝙊𝘿𝙊 𝘾𝙊𝙈𝙋𝙀𝙏𝙄𝙏𝙄𝙑𝙊 𝙇𝙄𝙂𝘼𝘿𝙊

🌒 𝔇𝔢𝔰𝔣𝔯𝔲𝔱𝔢𝔪 𝔡𝔞 𝔳𝔢𝔯𝔞𝔠𝔦𝔡𝔞𝔡𝔢 𝔢 𝔠𝔬𝔪𝔭𝔢𝔱𝔦𝔠𝔞𝔬 𝔢𝔫𝔱𝔯𝔢 𝔰𝔦 𝔫𝔞𝔰 𝔦𝔫𝔡𝔞𝔤𝔞𝔠𝔬𝔢𝔰 𝔞 𝔰𝔢𝔤𝔲𝔦𝔯
    
━━━━━━━━━⬣🐈‍⬛ ${vs} ━━━━━━━━` )
  }
  
 else if (status=="off"){
   global.quizxp[m.chat]= {
     "modo":false
   }
   global.xppergunta=false
   await m.reply(`
━━━━━━━━━⬣ 💀 ⬣━━━━━━━━ 
🕯️ 𝙈𝙊𝘿𝙊 𝘾𝙊𝙈𝙋𝙀𝙏𝙄𝙏𝙄𝙑𝙊 𝘿𝙀𝙎𝙇𝙄𝙂𝘼𝘿𝙊
  
🌒 𝔇𝔦𝔰𝔣𝔯𝔲𝔱𝔢𝔪 𝔡𝔢 𝔣𝔬𝔯𝔪𝔞 𝔱𝔢𝔫𝔞𝔷 𝔢 𝔭𝔞𝔠𝔦𝔢𝔫𝔱𝔢, 𝔞𝔭𝔯𝔢𝔫𝔡𝔞𝔪 𝔠𝔬𝔪 𝔬𝔰 𝔠𝔬𝔫𝔥𝔢𝔠𝔦𝔪𝔢𝔫𝔱𝔬𝔰 𝔮𝔲𝔢 𝔳𝔬𝔰 𝔱𝔯𝔞𝔤𝔬. 

━━━━━━━━⬣ 🐈‍⬛ ${vs} ⬣━━━━━━━━
   `)
 }
  
}


    }
    else {
  // Handle the case when the pattern is not found
  await m.reply(`
   ━━━━━━━━━⬣ 💀 ⬣━━━━━━━━ 
   
   ✖️ ℭ𝔬𝔪𝔞𝔫𝔡𝔬 𝔦𝔫𝔳𝔞𝔩𝔦𝔡𝔬, 𝔭𝔬𝔟𝔯𝔢 𝔞𝔩𝔪𝔞
𝔄𝔤𝔲𝔞𝔯𝔡𝔬 𝔬 𝔠𝔬𝔪𝔞𝔫𝔡𝔬 𝔠𝔬𝔯𝔯𝔢𝔱𝔬 𝔞 𝔰𝔢𝔯 𝔡𝔢𝔠𝔦𝔣𝔯𝔞𝔡𝔬 𝔫𝔞𝔰 𝔰𝔬𝔪𝔟𝔯𝔞𝔰 𝔡𝔢𝔰𝔱𝔢 𝔮𝔲𝔢𝔰𝔱𝔦𝔬𝔫𝔞𝔯𝔦𝔬. 
𝔖𝔲𝔰𝔰𝔲𝔯𝔯𝔢-𝔪𝔢 _*on*_ 𝔬𝔲 _*off*_ 𝔭𝔞𝔯𝔞 𝔥𝔞𝔟𝔦𝔩𝔦𝔱𝔞𝔯 𝔪𝔬𝔡𝔬 𝔠𝔬𝔪𝔭𝔢𝔱𝔦𝔱𝔦𝔳𝔬 𝔡𝔬 𝔮𝔲𝔦𝔷
   
   ━━━━━━━━━⬣ 🐈‍⬛ ${vs} ⬣━━━━━━━━`);
}
    
    }  
   else if (text.includes("placar")) {
      if(sortedPlayers){
  delete sortedPlayers
}
if(mentionIds)
{
  delete mentionIds
}
  if (!global.topjogadores) {
    global.topjogadores = {};
  }
  global.topjogadores[m.chat] = {};

let mentionIds = [];

let sortedPlayers
const users = participants.map((u) => conn.decodeJid(u.id));
  console.log(global.db.data.users[m.sender]);
  for (const user of users) {
    if(!global.db.data.users[user]){
      global.db.data.users[user] = {
        limit:0,
      }
    }
    global.topjogadores[m.chat][user] = {
      xp: global.db.data.users[user].limit
    };
  }
  console.log(topjogadores);
  console.log("acima e topjogadores")
  let formattedMessage = `
━━━━━━━━━⬣📜 𝔓𝔩𝔞𝔠𝔞𝔯 ⬣━━━━━━━━ 
`;

  

Object.entries(topjogadores[m.chat]).forEach(([group, players]) => {
  sortedPlayers = Object.entries(players)
    .sort(([, a], [, b]) => b.xp - a.xp) // Sort by XP level in descending order
    .slice(0, 5) // Take only the first 10 players
    .map(
      ([number, { xp }]) => {
        const userId = number.split('@')[0];
        mentionIds.push(number); // Add each number to the mentionIds array
        return `
🪦 @${userId}
🪶 ${xp} _Pontos_
   ─┅──┅❖ ❖─┅──┅`;
      }
    )
    .join('\n');
});

// Use mentionIds array as needed
console.log(mentionIds);

    formattedMessage += `
${sortedPlayers}
━━━━━━━━━⬣ 🌒 ${vs} ⬣━━━━━━━━ 
`;

  
  
  
    conn.sendMessage(m.chat, { text: formattedMessage, mentions: mentionIds });
    

  }

    
 
 
else {
  const categoryList = categories
    .map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`)
    .join('\n');

  throw `
╭━━━『𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐝𝐚𝐝𝐞𝐬』━━━⬣
┃ 
┃ 🥀🦇 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐚𝐥 𝐭ó𝐩𝐢𝐜𝐨 𝐣𝐚𝐳 
┃ 𝐞𝐦 𝐬𝐞𝐮𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬 
┃ 𝐜𝐮𝐫𝐢𝐨𝐬𝐨𝐬
┃
${categoryList}
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛| ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`;
}
}
}

  
  

handler.help = ['curiosidades'];
handler.tags = ['tools'];
export default handler;
handler.command = /^(quiz)$/i;
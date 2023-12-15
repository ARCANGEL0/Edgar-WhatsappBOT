global.quiz = global.quiz ? global.quiz : {}

const handler = async (m, {conn, text, args, usedPrefix, command, reply}) => {

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
        'Música',
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
        'CulturaPop',
        'CulturaGotica',
        // Adicione mais categorias conforme necessário
    ];
    
    let currentQuestion = "";
let currentAnswer = "";




if (!text) {
    

    const categoryList = categories.map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`).join('\n');

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
  }, 
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
    "Pergunta": "O que o seguinte componente funcional em React faz?\n\n
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
",
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
    "Pergunta": "Dado o seguinte componente funcional em React, o que ele faz?\n\n
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
",
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
    "Pergunta": "O que o seguinte componente funcional em React faz?\n\njsx
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
",
    "Opcoes": {
      A: "Renderiza uma lista de elementos filtrados",
      B: "Exibe uma mensagem de erro em caso de falha na requisição",
      C: "Renderiza um componente com base no contexto do tema",
      D: "Cria um formulário de entrada de dados"
    },
    "Resposta": "C",
    "Motivo": "O componente ThemedComponent renderiza um componente com base no contexto do tema, utilizando o hook useContext para acessar as informações do tema."
  }  {
    "Pergunta": "Considere o seguinte componente funcional em React. O que esse componente faz?\n\n
import React from 'react';

const Greeting = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

export default Greeting;
",
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
    "Pergunta": "Dado o seguinte componente em React, qual é a principal característica que o torna um componente funcional?\n\n
import React from 'react';

const Counter = ({ count }) => {
  return <p>Count: {count}</p>;
};
",
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
    "Pergunta": "O que o seguinte componente funcional em React faz?\n\n
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
",
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
    "Pergunta": "O que o seguinte componente funcional em React faz?\n\n
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
};",
    "Opcoes": {
      A: "Renderiza um calendário interativo",
      B: "Exibe um temporizador que incrementa a cada segundo",
      C: "Define uma barra de progresso animada",
      D: "Cria uma galeria de imagens"
    },
    "Resposta": "B",
    "Motivo": "O componente Timer exibe um temporizador que incrementa a cada segundo, utilizando o hook useEffect para gerenciar o ciclo de vida."
  },
  
  
      
      ]
    const perguntasQuimica = []
    const perguntasBiologia = []
    const perguntasMatematica = []
    const perguntasMusica = []
    const perguntasFilosofia = []
    const perguntasLiteratura = []
    const perguntasMedicina = []
    const perguntasPolitica = []
    const perguntasEconomia = []
    const perguntasAstronomia = []
    const perguntasPsicologia = []
    const perguntasSociologia = []
    const perguntasArqueologia =[];
    const perguntasCriminologia = []
    const perguntasCulturaPop =[]
    const perguntasCulturaGotica = []
    
        
        
        

        const selectedCategory = categories[selectedCategoryIndex];
const selectedPerguntasArray = eval(`perguntas${selectedCategory.replace(/\s+/g, '')}`); // Dynamically get the array based on category

if (selectedPerguntasArray && selectedPerguntasArray.length > 0) {
  
  
  const perguntaObj = pickRandom(selectedPerguntasArray);
    const { Pergunta, Opcoes, Resposta , Motivo} = perguntaObj;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    // Update the current question and answer
    
global.quiz = {
  "cp": Pergunta,
  "ca": Resposta,
  "cm": Motivo
}


console.log('pergunta   '  + Resposta)



      // Add a callback event to the message
      

    // Add a callback event to the message
    
    await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
╰━━━━━━━━━━━━━━━━━━⬣`)
  
  


};
}
    else if(text === "r"){
      await m.reply(`
╭━━━━━━━━━⬣
💀 𝐑𝐞𝐬𝐩𝐨𝐬𝐭𝐚: ${global.quiz.ca}
┃ ─┅──┅❖ 

${global.quiz.cm}

╰━━━━━━━━━━━━━━━━━━⬣
      `)
    }
    else {
      
      const categoryList = categories.map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`).join('\n');

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
/* catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
} catch (e) {
throw `${lenguajeGB.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}}} */
  
  

handler.help = ['curiosidades'];
handler.tags = ['tools'];
export default handler;
handler.command = /^(quiz)$/i;


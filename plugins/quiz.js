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
    const perguntasArte = [];
  const perguntasTecnologia =[] ;
    const perguntasInformatica =[];
    const perguntasProgramacao =[]
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


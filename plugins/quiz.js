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
            "Motivo": "A radiação cósmica de fundo é uma radiação eletromagnética que preenche o universo e é remanescente do Big Bang, sendo crucial para entender a evolução e a estrutura do cosmos." }
    ,{
       "Pergunta": "O que é a teoria da gravidade quântica de loop?",
    "Opcoes": {
      A: "Teoria sobre a interação entre partículas carregadas",
      B: "Modelo que descreve a gravidade como uma força quântica",
      C: "Estudo sobre órbitas de corpos celestes",
      D: "Descrição da expansão do universo"
    },
    "Resposta": "B",
    "Motivo": "A teoria da gravidade quântica de loop é uma abordagem que busca unificar a gravidade com os princípios da mecânica quântica, descrevendo a gravidade como uma força quântica em nível fundamental."
  },
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
    const perguntasHistoria = []
    const perguntasMitologia =[]
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


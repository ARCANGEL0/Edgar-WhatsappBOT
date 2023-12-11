
import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {

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
if (!text) {
    

    const categoryList = categories.map((category, index) => `    ┃ .fatos ${index + 1} - ${category}`).join('\n');

    throw `
    ╭━━━『𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐝𝐚𝐝𝐞𝐬』━━━⬣
    ┃
${categoryList}
    ┃
    ┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
    ┃ 𝓔𝓭𝓲𝓬̧𝓪̃𝓸 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
    ╰━━━━━━━━━━━━━━━━━━⬣`;
}
else {
    const selectedCategoryIndex = parseInt(text) - 1;
    
     console.log(text)
    if (selectedCategoryIndex >= 0 && selectedCategoryIndex < categories.length) {
        
        
        
        
          const curiositiesGeral = ["Curiosidade Geral 1", "Curiosidade Geral 2"];
    const curiositiesHistoria = ["Curiosidade História 1", "Curiosidade História 2"];
    const curiositiesMitologia = ["Curiosidade Mitologia 1", "Curiosidade Mitologia 2"];
    const curiositiesArte = ["Curiosidade Arte 1", "Curiosidade Arte 2"];
    const curiositiesTecnologia = ["Curiosidade Tecnologia 1", "Curiosidade Tecnologia 2"];
    const curiositiesInformatica = ["Curiosidade Informática 1", "Curiosidade Informática 2"];
    const curiositiesProgramacao = ["Curiosidade Programação 1", "Curiosidade Programação 2"];
    const curiositiesFisica = ["Curiosidade Física 1", "Curiosidade Física 2"];
    const curiositiesQuimica = ["Curiosidade Química 1", "Curiosidade Química 2"];
    const curiositiesBiologia = ["Curiosidade Biologia 1", "Curiosidade Biologia 2"];
    const curiositiesMatematica = ["Curiosidade Matemática 1", "Curiosidade Matemática 2"];
    const curiositiesMusica = ["Curiosidade Música 1", "Curiosidade Música 2"];
    const curiositiesFilosofia = ["Curiosidade Filosofia 1", "Curiosidade Filosofia 2"];
    const curiositiesLiteratura = ["Curiosidade Literatura 1", "Curiosidade Literatura 2"];
    const curiositiesMedicina = ["Curiosidade Medicina 1", "Curiosidade Medicina 2"];
    const curiositiesEconomia = ["Curiosidade Economia 1", "Curiosidade Economia 2"];
    const curiositiesPolitica = ["Curiosidade Política 1", "Curiosidade Política 2"];
    const curiositiesAstronomia = ["Curiosidade Astronomia 1", "Curiosidade Astronomia 2"];
    const curiositiesPsicologia = ["Curiosidade Psicologia 1", "Curiosidade Psicologia 2"];
    const curiositiesSociologia = [
      "A teoria do construtivismo social destaca como a realidade social é construída através da interação e interpretação coletiva.",
  "A sociologia do envelhecimento examina questões relacionadas ao envelhecimento da população, cuidados aos idosos e estereótipos associados à velhice.",
  "A teoria da socialização explora como os indivíduos aprendem normas e valores sociais ao longo de suas vidas.",
  "A sociologia da religião estuda as interações entre as crenças religiosas e as estruturas sociais.",
  "A teoria do feminismo marxista destaca as interseções entre gênero, classe e raça na análise da opressão.",
  "A sociologia da cidade analisa o desenvolvimento urbano, comunidades urbanas e impactos sociais da vida na cidade.",
  "A teoria da modernização propõe que as sociedades passam por estágios previsíveis de desenvolvimento em direção à modernidade.",
  "A sociologia do trabalho explora as relações entre trabalho, emprego e estrutura social.",
  "A teoria do conflito de gênero destaca as desigualdades sociais baseadas no gênero e os sistemas patriarcais.",
  "A sociologia do conhecimento investiga como as condições sociais influenciam a produção e disseminação do conhecimento.",
  "A teoria da aculturação analisa o processo pelo qual grupos culturais diferentes entram em contato e suas culturas se modificam.",
  "A sociologia da música explora como a música reflete e molda a sociedade, identidade cultural e movimentos sociais.",
  "A teoria da modernidade tardia, também conhecida como pós-modernidade, destaca a complexidade e fragmentação nas sociedades contemporâneas.",
  "A sociologia da arte investiga como a produção artística e as instituições artísticas são influenciadas pelo contexto social.",
  "A teoria da mudança social propõe modelos explicativos para entender como e por que as sociedades mudam ao longo do tempo.",
  "A sociologia do esporte estuda as relações entre esporte, sociedade, cultura e identidade.",
  "A teoria da escolha racional na sociologia econômica destaca como os indivíduos tomam decisões baseadas em maximizar seus interesses.",
  "A sociologia da moda analisa como as tendências e práticas de moda refletem valores culturais e sociais.",
  "A teoria do empoderamento examina como grupos marginalizados buscam adquirir poder e controle sobre suas vidas.",
  "A sociologia da violência explora causas, padrões e impactos de comportamentos violentos na sociedade.",
  "A teoria da dependência destaca as relações de poder desiguais entre nações desenvolvidas e em desenvolvimento.",
  "A sociologia do consumo investiga padrões de compra, publicidade e o papel do consumo na identidade social.",
  "A teoria do habitus, proposta por Pierre Bourdieu, destaca como as disposições internalizadas influenciam comportamentos e escolhas.",
  "A sociologia da sexualidade estuda as normas, práticas e identidades sexuais em diferentes culturas e sociedades.",
  "A teoria do discurso, na sociologia da linguagem, explora como o discurso molda e é moldado por estruturas sociais.",
  "A sociologia do riso examina como o humor reflete e influencia as dinâmicas sociais.",
  "A teoria da modernidade reflexiva destaca a reflexividade nas sociedades contemporâneas, onde as pessoas refletem sobre suas próprias ações.",
  "A sociologia da educação física investiga o papel do esporte e atividade física nas instituições educacionais.",
  "A teoria do contato, na sociologia intergrupal, explora como interações positivas entre grupos podem reduzir preconceitos.",
  "A sociologia da emoção estuda como as emoções são socialmente construídas e expressas.",
  "A teoria do ciclo de vida familiar destaca as mudanças na estrutura familiar ao longo das diferentes fases da vida.",
  "A sociologia da comunicação examina como as interações comunicativas moldam as relações sociais e a cultura.",
  "A teoria da ação coletiva explora como os indivíduos agem em conjunto para alcançar objetivos compartilhados.",
  "A sociologia da alimentação investiga padrões alimentares, cultura alimentar e o papel da alimentação na identidade social.",
  "A teoria da modernização propõe que as sociedades passam por estágios previsíveis de desenvolvimento em direção à modernidade.",
  "A sociologia da religião explora como as crenças religiosas influenciam as estruturas sociais e a cultura.",
  "A teoria da dominação e resistência destaca como os grupos marginalizados resistem à opressão em sociedades hierárquicas.",
  "A sociologia da cidade analisa o desenvolvimento urbano, comunidades urbanas e impactos sociais da vida na cidade.",
  "A teoria do construtivismo social destaca como a realidade social é construída através da interação e interpretação coletiva.",
  "A sociologia do envelhecimento examina questões relacionadas ao envelhecimento da população, cuidados aos idosos e estereótipos associados à velhice.",
  "A teoria da socialização explora como os indivíduos aprendem normas e valores sociais ao longo de suas vidas.",
  "A sociologia da religião estuda as interações entre as crenças religiosas e as estruturas sociais.",
  "A teoria do feminismo marxista destaca as interseções entre gênero, classe e raça na análise da opressão.",
  "A sociologia da cidade analisa o desenvolvimento urbano, comunidades urbanas e impactos sociais da vida na cidade.",
  "A teoria da modernização propõe que as sociedades passam por estágios previsíveis de desenvolvimento em direção à modernidade.",
  "A sociologia do trabalho explora as relações entre trabalho, emprego e estrutura social.",
  "A teoria do conflito de gênero destaca as desigualdades sociais baseadas no gênero e os sistemas patriarcais.",
      ];
    const curiositiesArqueologia = [
      
      "A arqueologia é a disciplina que estuda vestígios materiais da atividade humana no passado, como artefatos, estruturas e restos humanos.",
  "A descoberta da tumba do faraó Tutancâmon, por Howard Carter em 1922, foi um dos achados arqueológicos mais significativos do século XX.",
  "A datação por radiocarbono é uma técnica comumente usada para determinar a idade de materiais orgânicos antigos, baseada na taxa de decaimento do carbono-14.",
  "A cidade perdida de Machu Picchu, redescoberta por Hiram Bingham em 1911, é uma das maravilhas arqueológicas dos Andes.",
  "O sítio arqueológico de Pompeia, enterrado pela erupção do Monte Vesúvio em 79 d.C., proporcionou uma visão única da vida romana antiga.",
  "A arqueologia subaquática explora sítios afundados, como naufrágios, revelando informações sobre comércio marítimo e culturas costeiras.",
  "A descoberta da antiga cidade suméria de Ur, por Leonard Woolley na década de 1920, trouxe à luz a civilização mesopotâmica.",
  "A técnica de LiDAR é usada na arqueologia para mapear o terreno e identificar características arqueológicas abaixo da vegetação.",
  "O Códice Maia de Dresden é um manuscrito maia que contém informações sobre astronomia, matemática e rituais religiosos.",
  "A arqueologia experimental envolve recriar condições históricas para entender o funcionamento de ferramentas, técnicas e construções antigas.",
  "O sítio de Göbekli Tepe, na Turquia, é um complexo arqueológico com pilares de pedra esculpidos, sugerindo atividades ritualísticas pré-históricas.",
  "O navio viking de Oseberg, descoberto na Noruega, é famoso por suas esculturas intrincadas e bem preservadas.",
  "A descoberta da antiga cidade de Troia, por Heinrich Schliemann em 1870, contribuiu para validar a existência do épico de Homero, a Ilíada.",
  "A Grande Pirâmide de Gizé, construída durante a Quarta Dinastia do Antigo Egito, é uma das Sete Maravilhas do Mundo Antigo.",
  "O estudo de microfósseis, como pólen e esporos, permite aos arqueólogos reconstruir ambientes antigos e padrões de ocupação humana.",
  "A Caverna de Altamira, na Espanha, contém pinturas rupestres paleolíticas notáveis, representando animais e cenas de caça.",
  "A descoberta do sítio de Stonehenge, na Inglaterra, revelou um complexo neolítico associado a práticas rituais e astronômicas.",
  "A análise de isótopos estáveis em ossos antigos ajuda a rastrear padrões de dieta e mobilidade de populações antigas.",
  "Os geoglifos de Nasca, no Peru, são enormes desenhos no solo, alguns com vários quilômetros de extensão, criados pela remoção de pedras para revelar o solo mais claro.",
  "A tumba de Qin Shi Huang, o primeiro imperador da China, contém o famoso Exército de Terracota, com milhares de soldados e cavalos esculpidos em argila.",
  "O Método Harris, uma técnica de escavação estratigráfica, é amplamente utilizado na arqueologia para entender a sequência temporal de camadas de solo.",
  "A roseta de Roseta, encontrada no Egito, foi crucial para decifrar os hieróglifos egípcios, fornecendo a chave para a tradução.",
  "A arqueologia forense aplica técnicas arqueológicas na resolução de crimes, incluindo a busca por evidências em locais de sepultamento clandestino.",
  "O sítio de Çatalhöyük, na Turquia, é uma antiga cidade neolítica com casas construídas lado a lado, sem ruas visíveis.",
  "A descoberta da cidade de Mohenjo-daro, no Vale do Indo, revelou uma sofisticada civilização urbana com sistemas de drenagem e escrita.",
  "A arqueologia histórica estuda períodos mais recentes, usando documentos escritos, mapas e evidências materiais para reconstruir o passado.",
  "A técnica de datação por termoluminescência é usada para determinar a data da última exposição de materiais cerâmicos à luz ou calor.",
  "Os petroglifos, gravuras em rochas, são encontrados em várias partes do mundo e muitas vezes representam símbolos religiosos, cenas de caça e rituais.",
  "O sítio de Catal Huyuk, na Turquia, é uma das primeiras comunidades urbanas conhecidas, datando do período Neolítico.",
  "A arqueologia urbana estuda restos arqueológicos em ambientes urbanos modernos, revelando camadas históricas abaixo da superfície da cidade.",
  "O tesouro de Sutton Hoo, no Reino Unido, inclui um impressionante capacete e outros objetos enterrados em um navio funerário anglo-saxão.",
  ];
    const curiositiesCriminologia = [
      "A criminologia é o estudo científico do crime, comportamento criminoso, vítimas e controle social.",
  "Cesare Lombroso, considerado o pai da criminologia, propôs teorias sobre a relação entre características físicas e predisposição para o crime.",
  "A teoria da rotulação (labeling theory) destaca como as etiquetas sociais influenciam o comportamento criminoso e a identidade do criminoso.",
  "O teste de polígrafo (detector de mentiras) é usado em investigações criminais, embora sua precisão e confiabilidade sejam controversas.",
  "A criminologia ambiental explora como o ambiente físico e social pode influenciar as taxas de criminalidade em determinadas áreas.",
  "A teoria da subcultura delinquente sugere que certos grupos sociais desenvolvem valores e normas que favorecem o comportamento criminoso.",
  "A criminologia feminista critica abordagens tradicionais, destacando a necessidade de considerar gênero e feminismo nas análises criminais.",
  "O criminoso em série Ted Bundy era conhecido por sua aparência carismática, o que desafiou estereótipos sobre como os assassinos em série parecem.",
  "A Lei de Três Greves, em alguns sistemas jurídicos, impõe penas mais severas a indivíduos condenados por crimes graves após terem cumprido duas penas anteriores.",
  "O crime organizado envolve atividades criminosas coordenadas por grupos estruturados, como máfias e cartéis.",
  "O Banco de Dados Nacional de Impressões Digitais (NDDB) nos Estados Unidos é uma ferramenta crucial na resolução de crimes através da identificação de suspeitos.",
  "A teoria do controle social destaca a importância das conexões sociais e relações familiares na prevenção do comportamento criminoso.",
  "A vitimologia estuda o papel da vítima no crime, incluindo como fatores individuais podem aumentar a vulnerabilidade.",
  "O conceito de 'crimes de colarinho branco' foi cunhado por Edwin Sutherland para descrever delitos cometidos por pessoas de status social elevado no contexto de seus empregos.",
  "A criminologia biossocial explora a interação entre fatores genéticos e ambientais na predisposição para o comportamento criminoso.",
  "O Modelo de Análise Ambiental (MAE) é usado para avaliar riscos e vulnerabilidades em uma área específica em relação à criminalidade.",
  "A criminologia crítica examina as estruturas sociais que contribuem para o crime e questiona o papel das instituições na criação de desigualdades.",
  "O criminoso Al Capone, um dos gangsters mais famosos da história, foi condenado por evasão fiscal, não por suas atividades criminosas mais notórias.",
  "A pena de morte, embora ainda seja aplicada em alguns lugares, é amplamente debatida devido a questões éticas e possíveis erros judiciais.",
  "A criminologia é uma disciplina interdisciplinar, incorporando elementos da sociologia, psicologia, ciência forense e direito.",
   "A teoria do rótulo social destaca como a sociedade rotula certos comportamentos como criminosos, afetando a identidade do indivíduo rotulado.",
  "A criminologia é fundamental para o sistema de justiça criminal, ajudando a entender padrões criminais, motivos e prevenção.",
  "O crime de colarinho branco pode envolver fraudes financeiras, corrupção corporativa e outras atividades ilegais relacionadas a negócios.",
  "O estudo da 'Zona de Desconforto' explora como fatores ambientais desconfortáveis podem influenciar comportamentos antissociais.",
  "A teoria do controle diferencial argumenta que as pessoas pesam os custos e benefícios antes de decidirem cometer um crime.",
  "O método de Identificação por Impressões Digitais foi pioneiramente introduzido por Sir Francis Galton no final do século XIX.",
  "A criminologia verde foca em crimes ambientais, incluindo poluição, desmatamento ilegal e tráfico de animais.",
  "A vitimologia de estilo de vida estuda como o estilo de vida de uma pessoa pode aumentar ou diminuir sua probabilidade de ser vítima de crime.",
  "A 'Escola de Chicago' foi pioneira na aplicação de teorias sociológicas para entender padrões criminais em áreas urbanas.",
  "O Teste de Personalidade Psicopática (PCL-R) é frequentemente usado para avaliar a psicopatia em indivíduos, incluindo criminosos.",
  "A teoria da anomia, desenvolvida por Émile Durkheim, sugere que o crime pode ocorrer quando as normas sociais são enfraquecidas.",
  "O Código de Hammurabi, uma das primeiras codificações legais conhecidas, datado de cerca de 1754 a.C., incluía punições para crimes específicos.",
  "O conceito de justiça restaurativa enfatiza a reparação do dano causado pela criminalidade, envolvendo tanto vítimas quanto infratores.",
  "A teoria do controle social sugere que os laços sociais e o apoio comunitário são fundamentais para prevenir comportamentos criminosos.",
  "A análise de perfis criminais, popularizada pelo FBI, envolve a identificação de características psicológicas de criminosos com base em padrões de crime.",
  "O Criminogenic Effect é um conceito que destaca como certas condições podem aumentar a probabilidade de comportamento criminoso.",
  "A criminologia feminista critica a tradicional marginalização de mulheres nos estudos criminais, buscando uma perspectiva mais inclusiva.",
  "A pena de prisão perpétua é uma alternativa à pena de morte em alguns sistemas jurídicos, mantendo o criminoso na prisão pelo resto da vida.",
  "O Movimento da Reforma Penal do século XIX buscou humanizar o sistema penitenciário, enfocando reabilitação em vez de punição.",
  "A criminologia pós-moderna critica as narrativas 'grandes' e busca entender a multiplicidade de perspectivas no estudo do crime.",
  "O termo 'crimigração' refere-se à interseção entre políticas de imigração e questões criminais, destacando a criminalização de imigrantes.",
  "A teoria do rótulo social destaca como ser rotulado como criminoso pode levar à autoperpetuação do comportamento criminoso.",
  "O 'Efeito CSI' refere-se à influência da representação de investigações criminais em programas de televisão na percepção pública do sistema judicial.",
  "A teoria da escolha racional sugere que os criminosos pesam os custos e benefícios antes de cometerem um crime, agindo de forma racional.",
  "O 'efeito espetáculo' ocorre quando crimes e julgamentos são amplamente cobertos pela mídia, afetando a percepção pública e o sistema judicial.",
  "A criminologia cultural examina como os elementos culturais e subculturais podem influenciar a criminalidade e as respostas sociais.",
  "A Lei RICO (Racketeer Influenced and Corrupt Organizations Act) nos EUA visa combater organizações criminosas por meio de acusações financeiras.",
  "A teoria do controle social de Hirschi argumenta que os laços sociais, comprometimento, envolvimento, crença e afeto, são cruciais para prevenir o crime.",
  "A violência simbólica, conforme explorada pela criminologia crítica, destaca como certas estruturas sociais perpetuam a violência de maneiras sutis.",
  "O 'Efeito de Novidade' pode influenciar a percepção do risco criminoso, destacando a importância da atenção da mídia em certos eventos.",
  "A análise situacional é uma abordagem criminológica que se concentra em circunstâncias específicas de um crime para informar estratégias de prevenção.",
  "O conceito de 'crimes sem vítimas' refere-se a comportamentos que violam a lei, mas não causam danos diretos a outra pessoa.",
  "A teoria do conflito destaca como o conflito social e a desigualdade podem levar a comportamentos criminosos como uma forma de protesto ou resistência.",
  "A vitimologia radical explora como as estruturas sociais, incluindo o patriarcado e o racismo, contribuem para a vitimização.",
  "A criminologia positivista busca entender cientificamente os fatores que contribuem para o comportamento criminoso, incluindo influências biológicas e psicológicas.",
  "O conceito de 'bairros desorganizados' destaca como a falta de coesão social pode contribuir para taxas mais altas de criminalidade em determinadas áreas.",
  "O termo 'criminologia global' refere-se ao estudo da criminalidade em escala global, considerando fatores como globalização, migração e comércio ilegal.",
  "O Princípio da Proporcionalidade, aplicado no sistema legal, destaca a importância de que a punição seja proporcional à gravidade do crime.",
  "A teoria do labelling sugere que rotular alguém como criminoso pode resultar na internalização dessa identidade, influenciando comportamentos futuros."
      ];



    const curiositiesCulturaPop = [
        "A expressão 'cultura pop' refere-se à cultura popular, abrangendo elementos como música, cinema, moda, televisão, quadrinhos e muito mais.",
  "O termo 'cultura pop' ganhou destaque na década de 1950, mas suas raízes remontam à ascensão da cultura de massa no século XIX.",
  "Os Beatles, uma das bandas mais icônicas da história da música pop, têm mais de um bilhão de singles vendidos.",
  "O primeiro filme a usar a palavra 'nerd' foi 'A Vingança dos Nerds', lançado em 1984, contribuindo para popularizar o termo.",
  "O Super Mario, ícone dos videogames, foi criado por Shigeru Miyamoto e fez sua estreia em 1985 no jogo 'Super Mario Bros'.",
  "O Festival de Woodstock, realizado em 1969, é um marco na cultura pop, simbolizando a contracultura e a música da época.",
  "Os Simpsons, uma série de animação que estreou em 1989, é a série de maior duração na história da televisão norte-americana.",
  "A cultura pop influencia a moda de maneira significativa, com artistas e personagens populares muitas vezes ditando tendências.",
  "Michael Jackson, conhecido como o 'Rei do Pop', é um dos artistas musicais mais vendidos e influentes da história.",
  "A franquia Star Wars, criada por George Lucas, começou em 1977 e se tornou uma das sagas cinematográficas mais populares e influentes.",
  "Os quadrinhos da Marvel e DC, com personagens como Homem-Aranha e Batman, desempenham um papel fundamental na cultura pop e inspiraram inúmeras adaptações.",
  "A popularidade dos memes na internet é um fenômeno da cultura pop contemporânea, refletindo o humor e a comunicação online.",
  "O termo 'fanboy' ou 'fangirl' é usado para descrever entusiastas excessivamente dedicados a uma determinada franquia ou artista da cultura pop.",
  "O videogame Pac-Man, lançado em 1980, é um dos jogos mais reconhecíveis e bem-sucedidos da história dos arcades.",
  "O movimento cosplay, em que as pessoas se vestem como seus personagens favoritos da cultura pop, tornou-se uma parte integrante de eventos geek e convenções.",
  "O primeiro filme em 3D foi 'O Homem da Máscara de Ferro', lançado em 1953, marcando um avanço tecnológico na indústria cinematográfica.",
  "O termo 'geek' evoluiu de uma conotação negativa para representar orgulhosamente entusiastas de tecnologia, ficção científica e cultura pop.",
  "O álbum 'Thriller' de Michael Jackson, lançado em 1982, é o álbum mais vendido de todos os tempos.",
  "A série de livros 'Harry Potter', escrita por J.K. Rowling, tornou-se um fenômeno global, impactando tanto a literatura quanto o cinema.",
  "Os emojis, agora uma parte integrante da comunicação online, surgiram nos anos 1990 e são derivados da cultura pop japonesa.",
  "O icônico logotipo da Coca-Cola foi criado em 1886 e se tornou um dos símbolos mais reconhecidos na cultura pop.",
  "O videoclipe de 'Thriller' de Michael Jackson, lançado em 1983, é considerado um dos vídeos musicais mais influentes da história.",
  "Os Beatles são os únicos artistas a terem simultaneamente as cinco principais músicas nos EUA.",
  "Os emojis foram adicionados ao Unicode em 2010, facilitando sua inclusão em mensagens digitais em todo o mundo.",
  "A cultura pop influencia o design de produtos, desde roupas e acessórios até eletrônicos e itens de decoração.",
  "O movimento punk, surgido nos anos 70, teve um impacto significativo na música e na moda da cultura pop.",
  "O primeiro videoclipe da MTV foi 'Video Killed the Radio Star' da banda The Buggles, lançado em 1981.",
  "O criador do Facebook, Mark Zuckerberg, é conhecido por ser fã da série de ficção científica 'Star Trek'.",
  "A palavra 'meme' foi cunhada por Richard Dawkins em seu livro 'O Gene Egoísta', mas ganhou novo significado na cultura pop online.",
  "O termo 'jump the shark' originou-se de um episódio de 'Happy Days', indicando o declínio de uma série de TV.",
  "O videogame Pong, lançado em 1972, é frequentemente considerado o primeiro videogame comercialmente bem-sucedido.",
  "O fenômeno de séries 'binge-watch' tornou-se popular com o advento de serviços de streaming como Netflix.",
  "A série de desenhos animados 'Os Flintstones', estreando em 1960, foi a primeira série animada a ser exibida durante o horário nobre.",
  "O termo 'fan service' refere-se a elementos adicionados a uma obra para agradar aos fãs, muitas vezes na forma de referências ou momentos emocionantes.",
  "O filme 'Matrix', lançado em 1999, impactou significativamente a cultura pop, especialmente no que diz respeito à ficção científica e efeitos visuais.",
  "O primeiro videoclipe a ser exibido na MTV Europe foi 'Money for Nothing' da banda Dire Straits.",
  "O personagem Mario da Nintendo apareceu pela primeira vez em 1981 no jogo 'Donkey Kong'.",
  "O Batman é um dos personagens de quadrinhos mais adaptados, aparecendo em várias séries de TV, filmes e jogos.",
  "A série de TV 'Friends' permanece popular mesmo após seu término em 2004, continuando a conquistar novas gerações de fãs.",
  "O emoji mais usado globalmente em 2021 foi o rosto sorridente com lágrimas de alegria.",
  "A série 'Game of Thrones' é baseada na série de livros 'As Crônicas de Gelo e Fogo' de George R.R. Martin.",
  "O emoji de coração vermelho é amplamente utilizado como símbolo de amor e carinho nas redes sociais.",
  "O álbum 'The Dark Side of the Moon' da banda Pink Floyd é famoso por permanecer 741 semanas consecutivas nas paradas da Billboard.",
  "O termo 'mashup' refere-se à combinação de elementos de diferentes músicas para criar uma nova peça musical.",
  "O jogo de tabuleiro 'Monopoly' foi criado nos anos 1930 e continua sendo um dos jogos mais populares do mundo.",
  "O designer de moda Karl Lagerfeld era conhecido por seu amor por gatos e tinha uma gata chamada Choupette.",
  "O meme 'Distracted Boyfriend' tornou-se viral na internet, sendo usado para representar infidelidade e distração.",
  "A franquia Pokémon, criada por Satoshi Tajiri, inclui jogos, desenhos animados, filmes e uma grande variedade de produtos.",
  "O termo 'shipping' na cultura pop refere-se ao apoio ou desejo de que dois personagens fictícios formem um relacionamento.",
  "A música 'Gangnam Style' de PSY se tornou um fenômeno global e é o primeiro vídeo do YouTube a atingir 1 bilhão de visualizações.",
  "Os filmes da Marvel têm uma prática de incluir cenas pós-créditos, muitas vezes revelando pistas sobre futuras produções.",
  "O Festival de Cinema de Cannes, realizado na França, é um dos eventos cinematográficos mais prestigiados do mundo.",
  "O romance 'Orgulho e Preconceito', de Jane Austen, influenciou inúmeras adaptações cinematográficas e séries de TV.",
  "O videoclipe de 'Gangnam Style' quebrou o contador de visualizações do YouTube, levando à atualização da plataforma.",
  "O autor de ficção científica Philip K. Dick teve várias de suas obras adaptadas para o cinema, incluindo 'Blade Runner' e 'Minority Report'.",
  "A série 'Stranger Things' homenageia e faz referências a várias obras dos anos 80, desde filmes a jogos de tabuleiro.",
  "O emoji de palmas é comumente usado online para expressar aprovação ou reconhecimento.",
  "O videogame 'Tetris' foi criado por Alexey Pajitnov e tornou-se um dos jogos mais vendidos de todos os tempos.",
  "A série 'The Twilight Zone', criada por Rod Serling, é conhecida por suas histórias de ficção científica e reviravoltas surpreendentes.",
  "O termo 'nerdvana' é usado para descrever um estado de grande felicidade alcançado por meio de interesses nerds, como filmes, jogos e quadrinhos."
  
  ];
  
  
  
  
    const curiositiesCulturaGotica = [
      "A cultura gótica, originada nos anos 80, é um movimento subcultural que se estende além da música para influenciar moda, arte e estilo de vida.",
  "O movimento arquitetônico gótico medieval, caracterizado por arcos pontiagudos e vitrais, inspirou a estética da cultura gótica.",
  "O Dia das Bruxas (Halloween) tem ligações com a cultura gótica, compartilhando elementos macabros e uma apreciação pela estética sombria.",
  "O romance gótico, surgido no século XVIII com obras como 'O Castelo de Otranto', de Horace Walpole, é um subgênero literário associado à cultura gótica.",
  "A música gótica abrange diversos estilos, incluindo deathrock, darkwave e post-punk, e é marcada por letras introspectivas e atmosferas melancólicas.",
  "Bauhaus, Siouxsie and the Banshees e The Cure são bandas-chave que moldaram a cena musical gótica, cada uma contribuindo com uma abordagem única.",
  "O estilo de moda gótica incorpora peças escuras, couro, rendas e acessórios distintos, refletindo uma expressão individual e autêntica.",
  "A estética gótica nas artes visuais valoriza elementos macabros, como esqueletos, corvos e símbolos associados à morte, explorando a beleza na escuridão.",
  "Festivais góticos, como o Wave-Gotik-Treffen, reúnem entusiastas globalmente, proporcionando uma celebração da diversidade dentro da comunidade gótica.",
  "O romantismo sombrio é uma característica proeminente na literatura e na arte gótica, explorando temas de melancolia, amor e a transitoriedade da vida.",
  "O Vampirismo é um tema recorrente, influenciando obras literárias como 'Drácula', de Bram Stoker, e contribuindo para a mitologia gótica.",
  "A cultura gótica é caracterizada pela rejeição de estereótipos, incentivando a autenticidade e a valorização da individualidade dentro da comunidade.",
  "O símbolo da cruz invertida, associado à estética gótica, muitas vezes representa uma inversão de valores tradicionais e uma crítica à normatividade.",
  "A série de quadrinhos 'The Sandman', de Neil Gaiman, explora elementos góticos e mitológicos, incorporando narrativas complexas e personagens cativantes.",
  "O filme 'O Corvo' (The Crow), baseado na história em quadrinhos de James O'Barr, tornou-se um ícone gótico do cinema, destacando elementos de tragédia e redenção.",
  "O minimalismo na moda gótica, conhecido como 'bats and crosses', simplifica a estética, destacando símbolos como morcegos e cruzes.",
  "A cultura gótica, globalmente difundida, manifesta-se em diversas formas de arte e mídia, influenciando subculturas contemporâneas em todo o mundo.",
  "O movimento gótico é caracterizado por uma apreciação pela estética sombria, o sublime e uma sensibilidade artística única.",
  "A poesia gótica, muitas vezes expressando emoções intensas, explora temas como amor proibido, desespero e a efemeridade da vida.",
  "A comunidade gótica online é ativa em plataformas como Tumblr, Instagram e Reddit, proporcionando um espaço para compartilhamento de arte, ideias e apoio mútuo.",
  "A influência da cultura gótica transcende suas origens, sendo visível em diversas subculturas contemporâneas que incorporam elementos de sua estética e atitude.",
  "A cultura gótica abraça a nostalgia, muitas vezes apreciando elementos do passado, como a era vitoriana e a literatura gótica clássica.",
  "A expressão artística na cultura gótica muitas vezes explora temas existenciais, ocultismo, simbolismo e uma profunda conexão com a natureza.",
  "A cultura gótica tem uma relação complexa com a religião, muitas vezes desafiando normas religiosas enquanto incorpora simbolismos religiosos em sua estética.",
  "O termo 'gótico' originalmente referia-se a tribos germânicas, e seu uso para descrever a subcultura gótica começou como uma ironia, mas foi adotado pelos próprios adeptos.",
  "O gótico é muitas vezes visto como uma subcultura intelectual, valorizando a literatura, a arte e a música de maneira aprofundada e crítica.",
  "A cultura gótica tem conexões com o movimento romântico, compartilhando uma apreciação pela individualidade e uma fascinação pelo sublime.",
  "As convenções e festivais góticos são oportunidades para a comunidade compartilhar interesses, exibir criações artísticas e fortalecer laços sociais.",
  "A estética gótica pode ser encontrada em várias formas de entretenimento, incluindo videogames, onde influencia ambientes, enredos e personagens.",
  "A cultura gótica possui uma forte comunidade online, com blogs, fóruns e grupos dedicados a compartilhar informações, arte e experiências.",
  "Muitos artistas contemporâneos incorporam elementos da cultura gótica em sua obra, contribuindo para sua presença contínua na cena artística.",
  "O minimalismo na moda gótica é muitas vezes uma declaração contra o consumismo, enfatizando qualidade sobre quantidade e a singularidade das peças.",
  "A literatura gótica moderna, como os trabalhos de Neil Gaiman e Anne Rice, continua a expandir os temas e elementos da cultura gótica.",
  "A subcultura gótica desafia padrões de gênero, encorajando a expressão pessoal e a quebra de estereótipos ligados à aparência e comportamento.",
  "A cultura gótica tem influência em estilos de dança, como o vogue, e expressões artísticas que desafiam as convenções do movimento do corpo.",
  "O gótico é muitas vezes associado a uma apreciação pela beleza na decadência, explorando a estética do envelhecimento e da transitoriedade.",
  "Os eventos góticos frequentemente apresentam feiras de arte e artesanato, incentivando a produção e a valorização de itens únicos e artesanais.",
  "O DIY (faça você mesmo) é um valor central na cultura gótica, encorajando a criação de roupas, acessórios e arte personalizados.",
  "O filme expressionista alemão 'Nosferatu' é um marco influente na cultura gótica cinematográfica, contribuindo para a representação estética dos vampiros.",
  "A cultura gótica é dinâmica e evolui constantemente, incorporando novas influências e mantendo uma abordagem crítica em relação ao mundo."
  
      ];
    
        
        
        

        const selectedCategory = categories[selectedCategoryIndex];
            const selectedCuriositiesArray = eval(`curiosities${selectedCategory.replace(/\s+/g, '')}`); // Dynamically get the array based on category

            if (selectedCuriositiesArray && selectedCuriositiesArray.length > 0) {
                const randomCuriosity = pickRandom(selectedCuriositiesArray);
                await m.reply(randomCuriosity);
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
  
  
}}
handler.help = ['curiosidades'];
handler.tags = ['tools'];
export default handler;
handler.command = /^(curiosidades|curi|fatos)$/i;

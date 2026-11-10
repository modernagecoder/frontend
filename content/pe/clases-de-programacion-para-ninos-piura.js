// SHIP: market (city, es) | Piura: programación para niños de 6 a 12, en vivo y en inglés, desde casa | a polygon must close: Pythagoras for each side, shoelace for the area
'use strict';
// Clases de programación para niños en Piura (ag- Spanish city door, Peru cluster row PE132, P6; alloc: cities, pnp, #A02D47).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// USD only, through the template's data-price anchors. Formal "usted" throughout. Kids 6 to 12 only.
// Queries (KEYWORDS.md, autocomplete gl=pe): "clases de programación para niños piura peru", "curso de programación piura
// peru", "clases particulares piura ingles", "colegio bilingüe piura"; Piura ranks 5th of Peruvian places (32 suggestions).
// Spine: how many Piura children there are (INEI 2025, by district across the river); what English level and home
// computers look like in Piura, honestly (EF EPI 2025 low band, INEI Compendio 2026); why a live class at home instead of
// crossing the city to an academy; robotics or coding; one original geometry project on a fossil-site boundary published
// by the Ministerio de Cultura; Peru to India clock conversions.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-piura/,
// fetched 2026-11-10 with curl -sL -A "Mozilla/5.0"; national facts from pe/facts-school and pe/facts-market raw files):
//  - INEI, Censos Nacionales 2025, tabulados/20/poblacion/Indicadores_demograficos.xlsx (inei-ind-20.xlsx), Cuadro 1
//    (población total): "PIURA 2115215"; "PROVINCIA PIURA 935084"; "DISTRITO PIURA 155566"; "DISTRITO CASTILLA 193614";
//    "DISTRITO VEINTISÉIS DE OCTUBRE 206998"; "PROVINCIA PAITA 153649"; "DISTRITO LA HUACA 14545". Cuadro 3 (población
//    censada by age group): "PROVINCIA PIURA 923948 81066 100527 ..." where column 3 is "De 6 a 11 años" = 100527.
//    Census reference day 15 September 2025. Never summed.
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Piura city 473,025 (2017 census).
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): cityScore {"slug":"piura","proficiencySlug":"low","score":484};
//    Lima 555 high; thresholds: high from 550, moderate from 500, low from 450 (MARKET.md 1.3).
//  - INEI Compendio Estadístico Perú 2026, tomo 1 (src/inei/pub/compendio2026-tomo1.txt), cuadro 11.5 (households with
//    at least one computer, %, 2015 to 2025): "Piura 22,4 ... 26,2 22,3", "Total 32,6 ... 34,1 33,9"; cuadro 11.6 (households
//    with internet): "Piura 13,3 ... 43,2 41,2", "Total 23,2 ... 55,5 56,8".
//  - INEI Boletín TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el uso de Internet fue menor entre los
//    niños de 6 a 11 años (68,2%)"; "el 36,4% de los hogares del país disponía de al menos una computadora. Este porcentaje
//    alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y 8,9% en el área rural."
//  - CNEB Tabla N.° 6 (FACTS 57) primaria hours, no computing area; competency 28 transversal (FACTS 32, 33). MINEDU
//    Edades normativas (FACTS 13, 14). MINEDU DITE robotics paper (FACTS 52): "la robótica en educación no es el objetivo,
//    es el medio." RM 501-2025-MINEDU (FACTS 21): school year 16 March to 18 December 2026.
//  - Time: tzdata America/Lima UTC-5 (no DST since 1994), Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv).
//  - Data: Ministerio de Cultura (MINCUL), "Coordenadas del Sitio Paleontológico Pampa Rampal – Piura", Plataforma Nacional
//    de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/coordenadas-del-sitio-paleontol%C3%B3gico-pampa-rampal-%E2%80%93-piura,
//    licence "Open Data Commons Attribution License" (ODC-By). Page text: "Contiene las coordenadas de los vértices que
//    delimitan el Sitio Paleontológico Pampa Rampal, ubicado en el distrito de La Huaca, provincia de Paita, departamento
//    de Piura, en el sistema de coordenadas UTM, Datum WGS84, Zona 17." File "Coordenadas del SCP Pampa Rampal Piura.csv",
//    2,554 bytes, sha256 d34250c4694db172c1e08458bb8c02e0534f2cb49267cadd92afe3bd6dfd2e3f, 24 vertices,
//    FECHA_CORTE 20230612, FECHA_DECLARATORIA 20101115 (dictionary: "Fecha de declaratoria como Patrimonio Cultural del
//    Sitio Paleontológico"); YWGS/XWGS "Distancia expresada en metros". Vertex 22 reads "9452099.254|" (stray bar).
// Our own runs (scratchpad pe/c4/piura, python3 -I on the downloaded file), exact output:
//  v0 (float without cleaning) stops with: ValueError: could not convert string to float: '9452099.254|'
//  v1 prints: Corners: 24 / Walked: 4521 metres
//  v2 prints: Fence: 4738 metres / Area: 1197012 square metres / Hectares: 119.7 / Football pitches: 168
//  The missing closing side (vertex 24 back to vertex 1) is 4738 - 4521 = 217 m (our subtraction of printed values).
//  Football pitch = 105 m by 68 m = 7,140 m2: our assumption, stated on the page.
// Lesson family: a polygon must close. Walk each side with Pythagoras, add the side from the last corner back to the first
// (index modulo n), then measure the area with the shoelace formula.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'points = []',
  'with open("Coordenadas del SCP Pampa Rampal Piura.csv") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        east = float(row["XWGS"])',
  '        north = float(row["YWGS"].strip("|"))',
  '        points.append((east, north))',
  '',
  'walk = 0',
  'for i in range(len(points) - 1):',
  '    (x1, y1), (x2, y2) = points[i], points[i + 1]',
  '    walk += ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5',
  '',
  'print("Corners:", len(points))',
  'print("Walked:", round(walk), "metres")'
].join('\n');

const V2 = [
  'import csv',
  '',
  'points = []',
  'with open("Coordenadas del SCP Pampa Rampal Piura.csv") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        east = float(row["XWGS"])',
  '        north = float(row["YWGS"].strip("|"))',
  '        points.append((east, north))',
  '',
  'n = len(points)',
  'walk = 0',
  'area = 0',
  'for i in range(n):',
  '    (x1, y1), (x2, y2) = points[i], points[(i + 1) % n]',
  '    walk += ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5',
  '    area += x1 * y2 - x2 * y1',
  '',
  'area = abs(area) / 2',
  'print("Fence:", round(walk), "metres")',
  'print("Area:", round(area), "square metres")',
  'print("Hectares:", round(area / 10000, 1))',
  'print("Football pitches:", round(area / (105 * 68)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Piura: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-piura',
  code: 'pnp',
  accent: '#A02D47',
  accentRationale: 'Clases de programación para niños en Piura: a deep carob-pod red #A02D47 allocated to this row in alloc.tsv, warm like the dry forest of the Piura coast; contrast 5.76 on the paper #FBF8F2 and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Piura',
  title: 'Clases de programación para niños en Piura, en inglés',
  description: 'Clases de programación para niños de 6 a 12 años en Piura, en vivo, en línea y en inglés: Scratch y Python desde casa, en grupo o individuales y a cualquier hora.',
  ogDescription: 'Programación para niños piuranos de 6 a 12 años, en vivo y en inglés desde casa: cifras del INEI, una nota franca sobre inglés y computadoras, robótica o programación, y un proyecto con datos de Pampa Rampal.',
  twitterDescription: 'Clases de programación para niños en Piura, en vivo y en inglés, a cualquier hora y sin salir de casa.',
  pageName: 'Clases de programación para niños en Piura',
  webPageDescription: 'Guía para madres y padres de Piura sobre clases de programación para niños de 6 a 12 años dictadas en vivo y en inglés: población infantil según los Censos Nacionales 2025 del INEI, inglés según el EF EPI 2025, computadoras en el hogar según el Compendio Estadístico 2026, robótica o programación, y un proyecto de Python escrito por nosotros con las coordenadas del Sitio Paleontológico Pampa Rampal (Ministerio de Cultura, ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años en Piura, dictadas solo en inglés: Scratch, Python y matemática con código, en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Piura',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#piura', label: 'Piura en cifras' },
    { href: '#ingles', label: 'Inglés' },
    { href: '#casa', label: 'Desde casa' },
    { href: '#rampal', label: 'Proyecto' },
    { href: '#hora', label: 'Horario' }
  ],
  eyebrow: 'Piura &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Piura',
  lede: 'Piura tiene más de cien mil niños de 6 a 11 años solo en su provincia, y el plan de estudios de primaria no les reserva ni una hora de programación. Esta página explica cómo funcionan nuestras clases en vivo y en inglés para niños piuranos, qué tan listo debe estar su hijo en inglés y en computadora, por qué conviene aprender desde casa, qué responder cuando el niño pide robótica, y le muestra un proyecto real: medir con Python el sitio de fósiles de Pampa Rampal.',
  secondaryCta: { href: '#rampal', label: 'Ver el proyecto de Pampa Rampal' },
  wa: 'Hola Modern Age Coders, somos de Piura y buscamos clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un mentor fijo que habla un inglés claro y pausado',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Lenguajes', 'Scratch al inicio, Python desde los 9 años'],
    ['Formato', 'Grupo de quince a veinte niños, o clases individuales'],
    ['Horario', 'El día y la hora que su familia elija'],
    ['Profesores', 'Mentores desde la India, por videollamada'],
    ['Clase de prueba', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Sí hay clases de programación para niños en Piura sin salir de casa: Modern Age Coders enseña a niños piuranos de 6 a 12 años en vivo, por videollamada y en inglés, con un mentor desde la India que pronuncia con calma y respeta el paso de cada niño. A los 6, 7 u 8 años se arranca arrastrando bloques en Scratch; hacia los 9 llega Python escrito. Su familia decide entre un grupo o un mentor solo para su hijo, y también el día y la hora. La clase de prueba no cuesta nada.',

  picks: {
    eyebrow: 'Para empezar en Piura',
    h2: '¿Por cuál curso arranca un niño de Piura?',
    lede: 'Uno corto para probar si la programación le gusta, uno para el niño que ya teclea con soltura y uno para el que disfruta los números tanto como los juegos.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PIU / 01', title: 'Scratch para niños', alt: 'Imagen del curso de Scratch para niños', note: 'De 6 a 12 años, de tres a cuatro meses. De cero a juegos completos con bloques: la forma más corta de saber si a su hijo le engancha programar.' },
      { course: 'python-ai-kids-masterclass', code: 'PIU / 02', title: 'Python con inteligencia artificial', alt: 'Imagen del curso de Python e IA para niños', note: 'Pensado para chicos de 9 a 12, dura de ocho a diez meses y parte de cero. Código escrito desde la primera semana: dibujos, juegos y pequeños proyectos con datos reales, como el de Pampa Rampal.' },
      { course: 'maths-through-coding', code: 'PIU / 03', title: 'Matemática con código', alt: 'Imagen del curso de matemática a través de la programación', note: 'Desde los 10 años. La matemática del colegio, como áreas, fracciones y patrones, explorada con Python: el puente natural entre las tareas de la tarde y la programación.' }
    ]
  },

  sections: [
    {
      id: 'piura',
      eyebrow: 'Piura en cifras',
      h2: '¿Cuántos niños hay en Piura y dónde viven?',
      lede: 'Muchos. El censo de 2025 contó 100,527 niños de 6 a 11 años en la provincia de Piura, la edad de la primaria. Están repartidos a ambos lados del río Piura, en distritos distintos, y eso pesa más de lo que parece cuando se busca una clase por las tardes.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Piura según el INEI: cada fila es una unidad distinta y no se suman', head: ['Unidad', 'Población', 'Fuente y año'], rows: [
          ['Departamento de Piura (8 provincias)', '2,115,215', 'Censos Nacionales 2025, población total'],
          ['Provincia de Piura', '935,084', 'Censos Nacionales 2025, población total'],
          ['Niños de 6 a 11 años en la provincia de Piura', '100,527', 'Censos Nacionales 2025, población censada, Cuadro 3'],
          ['Distrito de Veintiséis de Octubre', '206,998', 'Censos Nacionales 2025, población total'],
          ['Distrito de Castilla', '193,614', 'Censos Nacionales 2025, población total'],
          ['Distrito de Piura', '155,566', 'Censos Nacionales 2025, población total'],
          ['Ciudad de Piura (área urbana)', '473,025', 'Censo de 2017, población censada']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, Censos Nacionales 2025, tabulado "Indicadores demográficos" del departamento de Piura, Cuadro 1 (población total, censada más omitida; día del censo, 15 de septiembre de 2025) y Cuadro 3 (población censada por grupo de edad); INEI, Perú: Perfil Sociodemográfico 2017, Cuadro N° 1.9 (22 de octubre de 2017). El INEI no había publicado una cifra 2025 de ciudades cuando revisamos, en noviembre de 2026, por eso la fila de la ciudad queda en 2017. Las filas se superponen y nunca las sumamos.' },
        { kind: 'two', mt: true,
          leftH3: 'Una ciudad en tres distritos',
          left: [
            'Lo que todos llaman Piura no es un solo distrito. El distrito de Piura, el del centro, tiene 155,566 habitantes; al otro lado del río está Castilla, con 193,614, y al oeste Veintiséis de Octubre, el más poblado de los tres, con 206,998. Por eso nunca damos un único número de "Piura" sin decir de qué unidad se habla.',
            'Para una familia que busca una academia de programación, esa geografía significa cruzar puentes y avenidas en la tarde, esperar una hora y volver. Con una clase en línea, un niño de Castilla y una niña de Veintiséis de Octubre entran a la misma hora desde su propia casa.'
          ],
          rightH3: 'Cien mil niños en edad de primaria',
          right: [
            'El Cuadro 3 del censo cuenta 100,527 niños de 6 a 11 años en la provincia de Piura en 2025. Es la edad en que un niño pasa de 1° a 6° de primaria y en que aprende a ordenar ideas paso a paso, que es exactamente lo que pide la programación.',
            'En todo el país el MINEDU abrió el año escolar 2026 con 6,225,000 estudiantes en 53,631 colegios. En la tabla de horas de primaria del Currículo Nacional no hay un área de computación ni de programación: lo digital es una competencia transversal que cada docente trabaja dentro de otras áreas.'
          ] }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Las clases son en español o en inglés?',
      lede: 'En inglés, siempre, y lo avisamos desde el primer mensaje. Cada sesión ocurre en vivo, por internet y exclusivamente en ese idioma. Hay familias piuranas que nos eligen justo por eso: su hijo programa y, al mismo tiempo, escucha y habla inglés con un propósito.',
      body: [
        { kind: 'table', numCols: [1], caption: 'El inglés en Piura y en Lima según el EF EPI 2025', head: ['Medición', 'Puntaje', 'Nivel de EF'], rows: [
          ['Piura, ciudad', '484', 'Bajo (de 450 a 499)'],
          ['Perú, puntaje nacional', '519', 'Moderado (de 500 a 549); puesto 52 de 123'],
          ['Lima, ciudad', '555', 'Alto (desde 550)']
        ] },
        { kind: 'source', html: 'Fuente: índice EF EPI 2025 de EF Education First; los puntajes por ciudad están en la ficha peruana del índice, que revisamos en noviembre de 2026. Lo elaboran con adultos que rindieron la prueba de EF, no con escolares: retrata el entorno de la ciudad, no el nivel de un niño en particular.' },
        { kind: 'two', mt: true,
          leftH3: 'Una nota franca para Piura',
          left: [
            'El EF EPI 2025 ubica a la ciudad de Piura en 484 puntos, dentro de su nivel bajo, mientras Lima llega a 555, en el nivel alto. No lo ocultamos: para muchos niños piuranos el inglés de la clase será un reto real las primeras semanas, y para algunos padres también.',
            'Por eso la clase gratis sirve para dos cosas: ver cómo piensa su hijo frente a un problema y ver cómo sigue al mentor en inglés. Si el niño no entiende casi nada y se frustra, se lo decimos con claridad y le sugerimos empezar más tarde o con otro formato, no le vendemos un curso que no va a aprovechar.'
          ],
          rightH3: 'Cómo lo hacemos más fácil',
          right: [
            'Con los más pequeños, el inglés entra por los bloques de Scratch y por palabras cortas que se repiten en cada clase: <em>move</em>, <em>repeat</em>, <em>if</em>, <em>score</em>. El mentor señala en la pantalla lo que dice, y el niño responde como pueda; si contesta en castellano, el mentor toma esa idea, la repite en inglés y le pide que la diga con él.',
            'Si el inglés es lo que más preocupa, las clases individuales ayudan: el mentor baja la velocidad todo lo necesario sin hacer esperar a un grupo. Y como Python se escribe con palabras inglesas, cada <code>print</code> y cada <code>for</code> es vocabulario que su hijo usa de verdad.'
          ] }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde casa',
      h2: '¿Clases online en casa o una academia presencial en Piura?',
      lede: 'Para la programación, la clase en vivo desde casa funciona igual de bien que un aula, siempre que el niño tenga su propia computadora con teclado durante la clase. La condición es el equipo, no la distancia.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Hogares con computadora y con internet, en porcentaje (INEI, Compendio Estadístico Perú 2026)', head: ['Ámbito', 'Hogares con al menos una computadora, 2025', 'Hogares con internet, 2025'], rows: [
          ['Departamento de Piura', '22,3', '41,2'],
          ['Perú, total', '33,9', '56,8'],
          ['Lima Metropolitana', '47,3', '76,5']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Compendio Estadístico Perú 2026, tomo 1, cuadros 11.5 y 11.6, con datos de la Encuesta Nacional de Hogares (ENAHO). Son porcentajes anuales de 2025. Otras publicaciones trimestrales del INEI miden otro periodo y dan cifras algo distintas; aquí usamos una sola serie para comparar.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dicen las cifras, sin adornos',
          left: [
            'Según el INEI, en 2025 solo el 22,3 % de los hogares del departamento de Piura tenía al menos una computadora, por debajo del 33,9 % del país. Esa cifra incluye zonas rurales, donde el acceso es mucho menor, así que en la ciudad la proporción probablemente es más alta, pero el INEI no la publica para la ciudad sola y no inventamos una.',
            'Lo honesto es esto: si en su casa no hay una computadora o una laptop que el niño pueda usar durante la clase, todavía no es el momento de empezar con nosotros. Con un celular no se programa con comodidad y el niño se frustra.'
          ],
          rightH3: 'Lo que gana una familia al estudiar en casa',
          right: [
            'No hay traslado. El tiempo que se iría en ir y volver de una academia se convierte en tiempo de práctica, y nadie tiene que salir del trabajo para recoger al niño.',
            'El mentor es el mismo durante todo el curso, conoce al niño por su nombre y sabe en qué se trabó la semana pasada. Y como la clase no depende de un local, sigue en vacaciones útiles, en feriados o si la familia viaja a la sierra de Piura o a la playa, con la misma laptop.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Revise el equipo.</strong> Hace falta una máquina con teclado de verdad (de escritorio o portátil), cámara y micro, y un internet que no se corte. Si la máquina es de toda la familia, esa hora es del niño.',
          '<strong>Pruebe el audio.</strong> Con audífonos el niño distingue con más claridad cada palabra en inglés, sobre todo si en casa suena la tele o la calle.',
          '<strong>Elija la hora según el turno.</strong> Si su hijo estudia en el turno tarde, la mañana es ideal; si estudia temprano, media tarde, cuando ya comió y terminó los deberes.',
          '<strong>Haga la clase gratis.</strong> Ahí el mentor ve el equipo, el inglés y la forma de pensar del niño, y le recomienda un curso o le dice con franqueza que esperen.',
          '<strong>Pida que le muestre.</strong> Al terminar cada semana, que su hijo le enseñe lo que hizo y se lo explique en sus palabras.'
        ] },
        { kind: 'p', mt: true, html: 'Si prefiere comparar formatos con calma, nuestra página sobre <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online en Perú</a> explica cómo es una clase virtual por dentro, y la guía de <a class="ag-inline-link" href="/cuanto-cuestan-clases-de-programacion-para-ninos-peru">cuánto cuestan las clases de programación para niños</a> explica qué hace variar el precio sin escribir cifras inventadas.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Robótica para niños en Piura o programación primero?',
      lede: 'Programación primero. Un robot educativo solo hace lo que dice su programa, y escribir ese programa es lo que se aprende en nuestras clases. No vendemos, no usamos y no enviamos kits de robótica.',
      body: [
        { kind: 'p', html: 'Muchos padres piuranos buscan "robótica para niños" porque es la palabra que conocen para la tecnología infantil. El Ministerio de Educación, en el texto que su Dirección de Innovación Tecnológica dedica al tema, lo resume en una frase: "la robótica en educación no es el objetivo, es el medio". El medio sirve para aprender a pensar en pasos, repeticiones y decisiones, y eso mismo es la programación.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo que el niño aprende igual', p: 'Ordenar instrucciones, repetir con un bucle, decidir con un "si pasa esto, haz aquello" y encontrar el error cuando algo no funciona. Da igual que se mueva un personaje en pantalla o un motor.' },
          { h3: 'Lo que cambia', p: 'La robótica suma piezas, cables y un kit que se queda en la academia o hay que comprar. La programación solo pide una computadora, y lo aprendido se lleva a juegos, webs, datos e inteligencia artificial.' },
          { h3: 'Un robot sin robot', p: 'En nuestras clases los niños programan un personaje que sigue una línea, esquiva paredes y cuenta sus pasos. Es la misma lógica de un robot seguidor de línea, sin nada que se rompa ni se pierda.' }
        ] },
        { kind: 'p', mt: true, html: 'Si a su hijo le encanta armar cosas, un kit de robótica a los 11 o 12 años, después de un año de Scratch o Python, le va a rendir mucho más que a los 7. Llegará sabiendo por qué el robot hace lo que hace, y podrá cambiarlo.' }
      ]
    },
    {
      id: 'rampal',
      tint: 'tint',
      eyebrow: 'Un proyecto con datos de Piura',
      h2: '¿Cuánto mide el sitio de fósiles de Pampa Rampal?',
      lede: 'El Ministerio de Cultura publica como dato abierto los 24 vértices que delimitan el Sitio Paleontológico Pampa Rampal, en La Huaca, provincia de Paita. Con esos puntos nuestros alumnos de 10 a 12 años aprenden algo que sirve en cualquier programa de mapas: un borde hay que cerrarlo.',
      body: [
        { kind: 'two',
          leftH3: 'Los datos',
          left: [
            'El conjunto de datos reúne las coordenadas del Sitio Paleontológico Pampa Rampal, en Piura; lo publica el Ministerio de Cultura en la Plataforma Nacional de Datos Abiertos bajo la licencia Open Data Commons Attribution (ODC-By), y lo descargamos el 10 de noviembre de 2026. El archivo trae 24 filas, una por vértice, en coordenadas UTM de la zona 17, donde cada número es una distancia en metros.',
            'El diccionario de datos dice que la columna FECHA_DECLARATORIA es la fecha en que el sitio fue declarado Patrimonio Cultural: en el archivo figura 20101115, es decir, el 15 de noviembre de 2010.'
          ],
          rightH3: 'La pregunta para la clase',
          right: [
            'Si alguien tuviera que caminar todo el borde del sitio, ¿cuántos metros recorrería? ¿Y cuánto terreno hay dentro? Los niños de Piura conocen bien las distancias de su ciudad, así que primero adivinan: ¿un kilómetro? ¿diez?',
            'Para responder, el programa trata cada par de vértices como los extremos de un lado, mide ese lado con el teorema de Pitágoras y suma todos los lados. Luego calcula el área con la fórmula del cordón de zapato, que multiplica en cruz las coordenadas de cada esquina con la siguiente.'
          ] },
        { kind: 'p', mt: true, html: 'Antes de medir nada, el archivo da su primera sorpresa. Si el programa convierte cada número tal como viene, se detiene en el vértice 22 con este mensaje: <code>ValueError: could not convert string to float: \'9452099.254|\'</code>. Alguien escribió una barra vertical pegada al número. El mensaje está en inglés y dice exactamente qué pasó; aprender a leerlo es parte de la clase. La versión 1 quita esa barra con <code>strip("|")</code> y sigue.' },
        { kind: 'code', label: 'Versión 1: caminar de esquina en esquina', lang: 'Python', code: V1, note: 'Imprime: <code>Corners: 24</code> y <code>Walked: 4521 metres</code>.' },
        { kind: 'p', mt: true, html: 'El resultado parece razonable, pero tiene un error que casi nadie ve a la primera. El bucle va del vértice 1 al 2, del 2 al 3 y así hasta el 24, y ahí se detiene. Falta el último lado: el que vuelve del vértice 24 al vértice 1. Un cerco con un lado sin construir no es un cerco. En la clase el mentor pregunta en inglés "Where does the fence end?", y el niño dibuja los puntos en papel cuadriculado hasta encontrar el hueco.' },
        { kind: 'code', label: 'Versión 2: cerrar el borde y medir el área', lang: 'Python', code: V2, note: 'Imprime: <code>Fence: 4738 metres</code>, <code>Area: 1197012 square metres</code>, <code>Hectares: 119.7</code> y <code>Football pitches: 168</code>.' },
        { kind: 'p', mt: true, html: 'El cambio es pequeño y enorme a la vez: <code>points[(i + 1) % n]</code>. El operador <code>%</code> da el resto de una división, así que cuando <code>i</code> llega al último vértice, <code>(i + 1) % n</code> vale cero y el programa vuelve al primero. Con eso el cerco mide 4,738 metros, 217 más que en la versión 1, y el mismo bucle sirve para el área.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Lo que calculan las dos versiones (cálculos nuestros con el archivo del Ministerio de Cultura)', head: ['Medida', 'Resultado', 'Cómo se obtiene'], rows: [
          ['Vértices en el archivo', '24', 'Una fila por vértice'],
          ['Borde sin cerrar (versión 1)', '4,521 m', 'Suma de 23 lados'],
          ['Borde cerrado (versión 2)', '4,738 m', 'Suma de 24 lados, el último vuelve al inicio'],
          ['Lado que faltaba', '217 m', 'Diferencia entre las dos versiones'],
          ['Área', '1,197,012 m²', 'Fórmula del cordón de zapato'],
          ['Área en hectáreas', '119,7 ha', 'Una hectárea son 10,000 m²'],
          ['Canchas de fútbol', 'unas 168', 'Suponiendo canchas de 105 por 68 metros']
        ] },
        { kind: 'source', html: 'Datos: Ministerio de Cultura, coordenadas del Sitio Paleontológico Pampa Rampal (Piura), Plataforma Nacional de Datos Abiertos, licencia Open Data Commons Attribution License (ODC-By), corte del 12 de junio de 2023. Los cálculos, la medida de cancha de 105 por 68 metros y la redacción son nuestros. El archivo no describe los fósiles del sitio, así que tampoco lo hacemos aquí.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Con 6 a 8 años, en papel.</strong> Dibujar cinco puntos en una hoja cuadriculada, unirlos en orden y contar los cuadraditos de cada lado. ¿Quedó cerrada la figura? Si no, ¿qué lado falta?',
          '<strong>Con 8 a 10 años, en Scratch.</strong> Hacer que un personaje recorra un cuadrado con un bucle "repetir 4 veces" y luego un triángulo. ¿Qué pasa si el bucle repite una vez menos?',
          '<strong>Con 10 a 12 años, en Python.</strong> Ejecutar la versión 1, explicar con palabras propias por qué le faltan 217 metros y escribir la corrección antes de mirar la nuestra.',
          '<strong>Un reto extra.</strong> Probar el programa con un rectángulo inventado de 100 por 50 metros. Si da 300 metros de cerco y 5,000 metros cuadrados, el programa merece confianza.'
        ] }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horario',
      h2: '¿Qué horario conviene a una familia de Piura?',
      lede: 'A la hora que usted elija. Piura usa la misma hora que todo el Perú, y la diferencia con los mentores en la India es fija durante todo el año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Seis equivalencias de reloj entre Piura y la India, solo como ejemplo (no son horarios fijos)', head: ['Reloj en Piura (hora de Perú)', 'Reloj del mentor (hora de la India)', 'Fecha en la India'], rows: [
          ['7:30 a. m.', '6:00 p. m.', 'Misma fecha'],
          ['9:30 a. m.', '8:00 p. m.', 'Misma fecha'],
          ['11:30 a. m.', '10:00 p. m.', 'Misma fecha'],
          ['2:30 p. m.', '1:00 a. m.', 'Fecha siguiente'],
          ['4:30 p. m.', '3:00 a. m.', 'Fecha siguiente'],
          ['6:30 p. m.', '5:00 a. m.', 'Fecha siguiente']
        ] },
        { kind: 'source', html: 'Cómo lo calculamos: el reloj oficial peruano está cinco horas detrás del tiempo universal (UTC-5) en enero y en julio, sin cambio de verano desde 1994, según la zona America/Lima de la base tzdata; el INACAL difunde esa hora oficial. El de la India está cinco horas y media delante (UTC+5:30). La distancia entre ambos queda fija en diez horas y media.' },
        { kind: 'p', mt: true, html: 'Como ninguno de los dos países adelanta ni atrasa el reloj, la hora que acuerde en marzo será la misma en diciembre. Al reservar, usted marca la hora en su reloj de Piura y el sistema se la muestra al mentor en el suyo. Las vacaciones escolares de verano, de enero a marzo, son un buen momento para empezar: el año escolar 2026 fue del 16 de marzo al 18 de diciembre de 2026 según la RM 501-2025-MINEDU, y muchas familias mantienen la misma hora cuando vuelve el colegio.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Qué sabe hacer su hijo en cada etapa?',
    lede: 'Cinco etapas nuestras, pensadas para niños de primaria. Sirven para ubicar a su hijo en el grupo correcto y para que usted vea el avance en cosas concretas.',
    table: { caption: 'Del primer bloque al primer archivo de datos: cinco etapas que definimos nosotros', head: ['Etapa', 'Edad habitual', 'Lo que el niño logra'], rows: [
      ['1. Seguir un camino', '6 a 7 años', 'mover un personaje paso a paso hasta una meta y decir en inglés hacia dónde va'],
      ['2. Repetir sin copiar', '7 a 9 años', 'cambiar diez bloques iguales por un solo bucle y explicar qué se gana con eso'],
      ['3. Decidir', '8 a 10 años', 'usar condiciones para que el juego reaccione a una tecla, un choque o un puntaje'],
      ['4. Escribir', '9 a 11 años', 'escribir en Python un programa corto con bucles y listas, y predecir lo que imprime'],
      ['5. Medir con datos', '10 a 12 años', 'leer un archivo real, como el de Pampa Rampal, y comprobar que el resultado tiene sentido']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'La etapa 5 es la del proyecto de esta página. No se trata de saber geometría avanzada, sino de aprender a desconfiar un poco de la primera respuesta y comprobarla.',
      'Le contamos el avance con lo que su hijo construye y explica, no con horas frente a la pantalla.'
    ] },
    right: { h3: 'Una regla para la mesa de estudio', ps: [
      'Si la figura no cierra, el dibujo no está mal: falta un lado, y encontrarlo es la tarea.',
      'Primero se adivina el resultado; recién después se ejecuta y se compara.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: '¿Qué otros cursos puede tomar un niño piurano?',
    lede: 'Nueve opciones más, de la más temprana a la más avanzada. En cada una hay un mentor real al otro lado de la cámara, se habla en inglés y se elige entre grupo o clases a solas.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 9 años', courses: [
        { code: 'PIU / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques de colores', blurb: 'Un año largo de Scratch, juegos y primeras apps, en grupos que separan a los de 6 de los de 12.' },
        { code: 'PIU / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar antes de programar', blurb: 'Rompecabezas, secuencias y lógica para chicos de 6 a 9, sin pantalla de código todavía.' },
        { code: 'PIU / BASE / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco y cálculo mental', blurb: 'Las cuentas del ábaco para entender el valor posicional, de 5 a 10.' }
      ] },
      { num: 'II', h3: 'Juegos y creación', sub: 'De 7 a 12 años', courses: [
        { code: 'PIU / JUEGO / 01', slug: 'minecraft-coding-for-kids-course', title: 'Código dentro de Minecraft', blurb: 'Cuatro meses automatizando construcciones en el juego que ya conocen, de 7 a 12.' },
        { code: 'PIU / JUEGO / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio con Luau', blurb: 'Su propio juego de obstáculos, con reglas escritas por el niño, de 8 a 14.' },
        { code: 'PIU / JUEGO / 03', slug: 'block-coding-app-development-masterclass', title: 'Su primera app', blurb: 'Pantallas, botones y lógica de bloques para una aplicación de celular, de 8 a 12.' }
      ] },
      { num: 'III', h3: 'Código escrito e IA', sub: 'De 8 a 14 años', courses: [
        { code: 'PIU / CODIGO / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ desde pequeños', blurb: 'Seis meses de código escrito con retos y juegos de consola, de 9 a 12.' },
        { code: 'PIU / CODIGO / 02', slug: 'kids-ai-web-development-course', title: 'Webs hechas por niños', blurb: 'Etiquetas, estilos y una página publicada con su nombre, de 9 a 12.' },
        { code: 'PIU / CODIGO / 03', slug: 'ai-literacy-for-kids-course', title: 'La IA por dentro', blurb: 'Dieciséis semanas para descubrir de dónde saca sus respuestas una IA y por qué falla, de 8 a 14.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una semana de clases desde Piura?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañanas', l: 'Para quien va al colegio en el turno tarde, o en vacaciones útiles.' },
      { time: 'Tardes', l: 'Para quien sale del colegio al mediodía y ya hizo los deberes.' },
      { time: 'Individual', l: 'Un horario propio acordado con el mentor, los días que usted diga.' }
    ],
    cells: [
      { h3: 'Mentor de siempre', p: 'Una sola persona acompaña todo el curso y aprende las mañas de su hijo.' },
      { h3: 'Inglés pausado', p: 'Frases cortas, la pantalla como apoyo y tiempo para responder.' },
      { h3: 'Teclado propio', p: 'Quien teclea es el niño; el mentor pregunta y orienta, nunca le dicta la solución.' },
      { h3: 'Grupos por edad', p: 'Un niño de 1° de primaria nunca comparte clase con uno de 6°.' },
      { h3: 'Noticias para la familia', p: 'Un resumen corto de lo trabajado y del siguiente paso.' },
      { h3: 'Grupo o a solas', p: 'Un grupo de quince a veinte chicos contemporáneos, o su hijo frente a su mentor.' }
    ]
  },

  projectsH2: '¿Hasta dónde llegan los que siguen programando?',
  projectsLede: 'Los niños que siguen programando terminan publicando herramientas de verdad. Aquí hay algunas, y en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés) hay muchas más.',
  reviewsLede: 'Lo que familias y alumnos escribieron en Google, sin retoques y en inglés.',

  fees: {
    h2: 'Precios para familias de Piura',
    lede: 'El pago es mensual. El monto se fija en dólares estadounidenses y se cobra con tarjeta en dólares; su banco lo convierte a su moneda con su propio tipo de cambio, por eso el cargo final puede variar un poco de un mes a otro.',
    free: ['Una sesión de prueba en vivo', 'Un reto corto para ver cómo piensa su hijo', 'No se pide tarjeta'],
    group: ['Quince a veinte compañeros de su misma edad', 'Un mentor fijo semana tras semana', 'Dos sesiones en vivo cada semana', 'Mes a mes, sin permanencia'],
    one: ['Su hijo y el mentor, nadie más', 'Ritmo y proyectos a su medida', 'Días y horas que usted elige']
  },

  faq: {
    eyebrow: 'Preguntas de familias piuranas',
    h2: 'Clases de programación para niños en Piura: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, y lo decimos de entrada: cada sesión es en vivo, por internet y solo en inglés. Lo que muchas familias piuranas valoran es el dos por uno: una hora de programación es también una hora escuchando y hablando inglés con un fin concreto. El mentor baja el ritmo, cambia una palabra difícil por otra sencilla y espera la respuesta. Según el EF EPI 2025, Lima alcanza el nivel alto de inglés y Piura está en el bajo, así que la sesión de prueba también mide si su hijo sigue al mentor.' },
      { q: '¿Hay clases de programación para niños en Piura?', a: 'Sí, por internet y con un mentor en vivo. Un niño de Castilla, otro del centro y otra de Veintiséis de Octubre pueden compartir el mismo grupo sin moverse de su casa. Se empieza a los 6 años con Scratch y hacia los 9 se pasa a Python.' },
      { q: '¿Hace falta que mi hijo ya hable inglés?', a: 'No tiene que hablarlo todavía. Con que reconozca saludos y palabras básicas, alcanza para la primera semana. Si la sesión de prueba muestra que el idioma lo agobia, se lo diremos sin rodeos y le sugeriremos esperar unos meses o tomar clases individuales, donde el mentor puede ir tan lento como haga falta.' },
      { q: '¿Qué equipo hace falta en casa?', a: 'Un equipo con teclado físico, cámara, micro y audífonos, conectado a un internet estable. En un celular programar se vuelve incómodo. El Compendio Estadístico 2026 del INEI registra que en 2025 solo el 22,3 % de los hogares del departamento de Piura tenía computadora; si la suya no tiene una, conviene esperar antes de inscribirse.' },
      { q: '¿Desde qué edad puede empezar?', a: 'Desde los 6, que es la edad con la que el MINEDU ubica a un niño en 1° de primaria. Los menores de 9 trabajan con bloques, personajes y sonidos; casi todos los de 9 en adelante ya escriben Python. Nunca mezclamos en un grupo a un niño de 6 con uno de 12.' },
      { q: '¿Enseñan robótica en Piura?', a: 'Enseñamos la programación que mueve a un robot, sin piezas ni kits: no los vendemos ni los usamos. El documento de robótica educativa del MINEDU presenta al robot como un medio para aprender y no como la meta. Los bucles y condiciones que su hijo practique con nosotros le servirán tal cual si después entra a un taller de robótica.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. El reloj de la India marca diez horas y media más que el de Piura durante todo el año, así que las 9:30 a. m. en Piura son las 8:00 p. m. para el mentor.' },
      { q: '¿Qué construye un niño en estas clases?', a: 'Los menores arman historias animadas y juegos en Scratch. Desde los 9 escriben programas en Python, y entre los 10 y los 12 ya trabajan con archivos de datos públicos, como el de esta página, que mide el cerco y la superficie del Sitio Paleontológico Pampa Rampal.' },
      { q: '¿En qué moneda se paga?', a: 'La mensualidad está en dólares estadounidenses y se carga a una tarjeta. La conversión la hace su banco. Para la sesión de prueba no pedimos ningún dato de pago.' },
      { q: '¿Estas clases valen para el colegio?', a: 'No. Somos independientes del MINEDU, de la UGEL y de cualquier colegio piurano, y no ponemos notas ni sustituimos ningún curso escolar. Quien completa un curso recibe un certificado de finalización emitido por Modern Age Coders, y nada más.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Lecturas que suelen pedir las familias piuranas con hijos en primaria.',
    items: [
      { href: '/online-coding-and-ai-classes-piura-region-peru', label: 'Piura region: coding and AI classes', p: 'La región de Piura completa, para todas las edades (en inglés).' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué enseña el colegio en primaria y cómo es una clase en inglés.' },
      { href: '/curso-de-python-para-ninos-peru', label: 'Curso de Python para niños', p: 'Cuando los bloques quedan chicos: Python para primaria alta.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes for kids', p: 'El arranque habitual de los más pequeños (en inglés).' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Qué herramientas de IA corresponden a cada edad (en inglés).' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Paso a paso, lo que ocurre en una sesión con un mentor (en inglés).' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis desde Piura',
    lede: 'Durante la sesión de prueba el mentor conversa con su hijo en un inglés muy simple, le propone un desafío de cinco minutos y mira dos cosas: cómo razona y cuánto le entiende. Al final usted recibe una recomendación concreta de curso y formato, o un consejo franco de esperar.',
    readFirst: '¿Prefiere leer primero? El método está explicado en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y el catálogo entero está en <a class="ag-inline-link" href="/courses">All courses</a>; las dos están en inglés.',
    note: 'Los mentores enseñan desde la India, en vivo y únicamente en inglés. Si escribe por WhatsApp, puede hacerlo en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin obligación de seguir.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/maths-through-coding', label: 'Matemática con código' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/ai-classes-for-kids', label: 'IA para niños' },
        { href: '/python-for-10-year-olds', label: 'Python a los 10 años' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Un borde solo mide bien cuando se cierra'
  },

  personalityCss: `
.ag-root.ag-pnp .ag-hero h1 { letter-spacing: -0.011em; max-width: 21ch; }
.ag-root.ag-pnp .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-pnp .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-pnp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pnp .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (tabulado Indicadores demográficos del departamento de Piura, Cuadros 1 and 3) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); INEI Compendio Estadístico Perú 2026 (cuadros 11.5 and 11.6, ENAHO 2025); EF EPI 2025 Peru page; MINEDU CNEB, Edades normativas, DITE robotics paper, RM 501-2025-MINEDU; tzdata America/Lima. Data: Ministerio de Cultura, Coordenadas del Sitio Paleontológico Pampa Rampal (Piura), ODC-By. Example code and the stage table are our own.',
    localProject: 'How long is the boundary of the Pampa Rampal fossil site, and how much land is inside? An original Python project on the Ministerio de Cultura vertex file (ODC-By, 24 UTM vertices in La Huaca, Paita): a stray bar in vertex 22 stops float(); Version 1 walks 23 sides (4,521 m); Version 2 closes the polygon with (i + 1) % n (4,738 m) and measures 1,197,012 square metres with the shoelace formula (119.7 ha, about 168 pitches of 105 by 68 m). Lesson family: a polygon must close.',
    requiredMentions: ['Walked: 4521 metres', 'Fence: 4738 metres', 'Area: 1197012 square metres', '9452099.254|', '100,527', '206,998', 'Piura, ciudad', 'Un borde solo mide bien cuando se cierra', 'solo el 22,3 % de los hogares del departamento de Piura'],
    sources: [
      { claim: 'Department, province and district populations of Piura and children aged 6 to 11 in the province, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/20/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Piura city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Households with a computer and with internet by department, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EF EPI 2025 scores for Piura, Peru and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Pampa Rampal vertex coordinates, declaration date and ODC-By licence.', url: 'https://www.datosabiertos.gob.pe/dataset/coordenadas-del-sitio-paleontol%C3%B3gico-pampa-rampal-%E2%80%93-piura' },
      { claim: 'Robotics as a means, not the goal.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Primaria weekly hours with no computing area; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A household-computer share for Piura city alone: INEI publishes the department figure only, so the page says the city is probably higher and prints no number.',
      'What fossils Pampa Rampal holds, and how far it is from Piura city: not in the dataset, not printed.',
      'A combined Piura population made by adding city, province or district rows: never summed.',
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any robot kit or hardware: none; we teach programming only.',
      'Any connection with MINEDU, the UGEL, the Ministerio de Cultura or any Piura school: none.',
      'Typed fees or a soles conversion: refused; fees render from the template in USD.'
    ]
  }
};

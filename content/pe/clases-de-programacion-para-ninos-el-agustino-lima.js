// SHIP: district (kids, year-round) | El Agustino: coding at home that trains the logic its school contests reward | nested lists: a tres en raya checker that misses a diagonal until all 8 lines are tested
'use strict';
// Clases de programación para niños en El Agustino, Lima (ag- Spanish district door, Peru cluster row PE210, P6,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in El Agustino who wants a year-round activity for a child of 6 to 12 that sharpens reasoning, the
// same reasoning the district's own maths and communication contest rewards. Spine: the 2025 census by age group next to
// Lima Metropolitana; what the municipality published about student achievement (contest awards, MuniBecas); does coding
// help with maths (our view, no promises); English-medium classes and error messages; children's internet use (INEI) and
// why a computer at home beats the phone; grade-by-grade path with a note for adolescentes; one original Python lesson
// (tres en raya, rows, columns and diagonals); clock conversions. No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// el-agustino-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx, 856800 bytes,
//    "actualizado al 15 de julio del año 2026"). CUADRO Nº 1: "DISTRITO EL AGUSTINO | 231452 | 114527 | 116925 | 210467 |
//    ... | 20985". CUADRO Nº 3: "DISTRITO EL AGUSTINO | 210467 | 13046 | 18963 | 19581 | 41543 | 52156 | 36084 | 29094";
//    "LIMA METROPOLITANA | 9600043 | 555239 | 818096 | 867253 | 1800348 | 2322499 | 1744864 | 1491744". CUADRO Nº 2:
//    6 años 2687, 7 años 2927, 8 años 3156, 9 años 3406, 10 años 3379, 11 años 3408, 12 años 3405; rural 0.
//  Municipalidad Distrital de El Agustino on gob.pe (institucion/munielagustino):
//    n-1276606 (29 Oct 2025): "premiación del Concurso de Matemática y Comunicación, donde se reconoció el esfuerzo y
//    talento de los estudiantes de El Agustino". Winning schools named in the note are left out (no school as context needed).
//    n-1276613 (29 Oct 2025): "Programa MuniBecas"; "15 estudiantes agustinianos lograron alcanzar una de las metas más
//    importantes de sus vidas: ingresar a la UNMSM". Student names, officials and the partner academy left out on purpose.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el uso de Internet fue menor
//    entre los niños de 6 a 11 años (68,2%)"; "el de 12 a 18 años con un 92,5%"; via mobile phone "entre los niños de 6 a 11
//    años con un 48,5%"; "el mayor nivel de uso de Internet se registró en Lima Metropolitana, con un 92,4%"; "apenas el
//    12,1% redactó programas informáticos utilizando lenguajes de programación especializados" (population 15 and over).
//  CNEB (FACTS 57, 39): primaria Matemática "5 5 4 4 4 4"; secundaria "Matemática 4 4 4 4 4"; no computing area.
//  EF EPI 2025 (MARKET 1.3): Lima 555, high from 550; "Speaking score: 480" for Peru.
//  Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 18963 / 210467 = 9.0 %; 19581 / 210467 = 9.3 %; 13046 / 210467 = 6.2 %;
//    231452 / 10141775 = 2.3 %; 20985 / 231452 = 9.1 % omitted; 18963 / 818096 = 2.3 % of Lima's 6 to 11;
//    2687+2927+3156+3406+3379+3408+3405 = 22368 children aged 6 to 12.
// Our own example (tres_en_raya.py in the src-pages folder), run with python3 -I, exact output:
//    Rows only: nobody / Rows and columns: nobody / All 8 lines: X
// Neighbouring districts named in plain text only (San Juan de Lurigancho, Ate, Santa Anita, San Luis, La Victoria,
// Cercado de Lima).
// Lesson family: nested lists as a 3 by 3 grid; collect rows, columns and diagonals, and a check that misses a line.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'board = [',
  "    ['X', 'O', 'X'],",
  "    ['O', 'X', 'O'],",
  "    ['O', 'X', 'X'],",
  ']',
  '',
  'def check(lines):',
  '    for line in lines:',
  '        if line[0] == line[1] == line[2]:',
  '            return line[0]',
  "    return 'nobody'",
  '',
  'rows = board',
  'columns = []',
  'for c in range(3):',
  '    columns.append([board[0][c], board[1][c], board[2][c]])',
  'diagonals = [[board[0][0], board[1][1], board[2][2]],',
  '             [board[0][2], board[1][1], board[2][0]]]',
  '',
  "print('Rows only:', check(rows))",
  "print('Rows and columns:', check(rows + columns))",
  "print('All 8 lines:', check(rows + columns + diagonals))"
].join('\n');

const OUT = [
  'Rows only: nobody',
  'Rows and columns: nobody',
  'All 8 lines: X'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en El Agustino' },
  slug: 'clases-de-programacion-para-ninos-el-agustino-lima',
  code: 'prag',
  accent: '#0B764D',
  accentRationale: 'El Agustino: a clear board-game green #0B764D, like the felt of a table where a child plays tres en raya, kept apart from the olive tones of the other Lima district doors; allocated in alloc.tsv (contrast 4.59 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en El Agustino',
  title: 'Clases de programación para niños en El Agustino, Lima',
  description: 'Programación para niños de 6 a 12 años en El Agustino: clases en vivo y en inglés por videollamada, todo el año, en grupo o individuales y en el horario que elija.',
  ogDescription: 'Programación para niños de El Agustino desde casa: el censo 2025 del distrito por edades, si programar ayuda en matemática y un tres en raya en Python que se le escapa una diagonal.',
  twitterDescription: 'Clases de programación para niños de El Agustino, en vivo y en inglés, sin salir de casa y a la hora que usted decida.',
  pageName: 'Clases de programación para niños en El Agustino',
  webPageDescription: 'Guía para familias de El Agustino que buscan clases de programación para niños de 6 a 12 años durante todo el año: población por grupos de edad según los Censos Nacionales 2025 del INEI, lo que la municipalidad publicó sobre concursos y becas de sus estudiantes, el uso de internet de los niños según el INEI, el recorrido por grados y un ejercicio de Python de tres en raya escrito por nosotros.',
  courseDescription: 'Clases en vivo y por videollamada de programación para niños de 6 a 12 años de El Agustino, dictadas solo en inglés: Scratch, Python, juegos y proyectos de IA, en grupo o individuales, desde cualquier semana del año y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, El Agustino',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#poblacion', label: 'Población' },
    { href: '#logica', label: 'Lógica y matemática' },
    { href: '#tres-en-raya', label: 'Tres en raya' },
    { href: '#pantalla', label: 'Computadora o celular' },
    { href: '#relojes', label: 'Horarios' }
  ],
  eyebrow: 'Lima &middot; El Agustino &middot; Niños de 6 a 12 años',
  h1: 'Clases de programación para niños en El Agustino',
  lede: 'Programar es, sobre todo, razonar paso a paso y comprobar. Si vive en El Agustino y busca para su hijo o hija una actividad de todo el año que ejercite justamente eso, esta página reúne lo que dice el censo de 2025 sobre los niños del distrito, cómo se relaciona la programación con la matemática, cómo es aprender con un mentor que habla inglés y un juego de tres en raya escrito en Python.',
  secondaryCta: { href: '#tres-en-raya', label: 'Ver el tres en raya en Python' },
  wa: 'Hola Modern Age Coders, vivimos en El Agustino y buscamos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 alumnos en el mundo &middot; un mentor fijo, siempre hablando en inglés',
  spec: [
    ['Edades', 'De 6 a 12 años; grupos aparte para adolescentes'],
    ['Lugar', 'Su propia casa en El Agustino, por videollamada'],
    ['Temporada', 'Todo el año, también en vacaciones'],
    ['Idioma', 'Inglés en todas las clases'],
    ['Modalidad', 'Grupo de quince a veinte, o uno a uno'],
    ['Para empezar', 'Una clase gratis, sin datos de tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Sí, su hijo puede aprender a programar sin salir de El Agustino. En Modern Age Coders los niños de 6 a 12 años toman clases en vivo y en inglés por videollamada, durante todo el año, con un mentor desde la India que pronuncia con claridad y avanza al paso del niño. Empiezan con Scratch y bloques, siguen con Python, juegos y proyectos de IA, y en cada clase se practica lo mismo: pensar antes de ejecutar y revisar después. Hay grupos y clases individuales, a cualquier hora, y la primera es gratis.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: '¿Qué curso de programación conviene a un niño de El Agustino?',
    lede: 'Depende sobre todo de la edad y de cómo lee. Estos tres cubren casi todos los casos: razonamiento sin pantalla para los más pequeños, bloques para quien quiere crear juegos y Python para quien ya maneja bien el teclado.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PRAG / 01', title: 'Resolver problemas como programador', alt: 'Imagen del curso de resolución de problemas y pensamiento computacional para niños', note: 'De 6 a 10 años. Acertijos, patrones y secuencias que entrenan a partir un problema grande en pasos pequeños, la base de todo lo que viene después.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PRAG / 02', title: 'Programar con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años, en grupos por edad. Juegos, animaciones y pequeñas apps armadas con bloques que el niño entiende y puede explicar.' },
      { course: 'python-ai-kids-masterclass', code: 'PRAG / 03', title: 'Python con IA', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años. Código escrito de verdad, con listas, condiciones y juegos como el tres en raya de esta página, más primeros proyectos de inteligencia artificial.' }
    ]
  },

  sections: [
    {
      id: 'poblacion',
      eyebrow: 'Censo 2025',
      h2: '¿Cuántos niños y adolescentes viven en El Agustino?',
      lede: 'El censo de 2025 encontró en El Agustino a 18,963 niños de 6 a 11 años y a 19,581 adolescentes de 12 a 17. En total, el INEI estima 231,452 habitantes en el distrito.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'El Agustino y Lima Metropolitana por grupos de edad (población censada, 2025)', head: ['Grupo de edad', 'El Agustino', 'Lima Metropolitana'], rows: [
          ['De 0 a 5 años', '13,046', '555,239'],
          ['De 6 a 11 años', '18,963', '818,096'],
          ['De 12 a 17 años', '19,581', '867,253'],
          ['De 18 a 29 años', '41,543', '1,800,348'],
          ['Todas las edades (censados)', '210,467', '9,600,043']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, cuadro 3 de los indicadores demográficos de Lima Metropolitana, en la versión que el INEI puso al día el 15 de julio de 2026. A los 210,467 censados el INEI suma 20,985 personas omitidas para llegar a 231,452 (cuadro 1); las omitidas no tienen edad publicada, por eso la tabla no las incluye.' },
        { kind: 'two', mt: true,
          leftH3: 'Año por año, de 6 a 12',
          left: [
            'El cuadro 2 del mismo censo da las edades una por una. En El Agustino se censaron 2,687 niños de 6 años, 2,927 de 7, 3,156 de 8, 3,406 de 9, 3,379 de 10, 3,408 de 11 y 3,405 de 12. Sumadas, son 22,368 chicos en la edad de nuestras clases para niños (suma nuestra).',
            'Desde los 9 años cada edad pasa de los tres mil. Es la etapa en que la mayoría ya puede escribir código con el teclado.'
          ],
          rightH3: 'El distrito dentro de Lima',
          right: [
            'El Agustino reúne el 2,3 % de la población de Lima Metropolitana y el 2,3 % de sus niños censados de 6 a 11 años (cálculos nuestros). Los de 6 a 11 son el 9,0 % de sus censados; los de 12 a 17, el 9,3 %.',
            'Para el INEI todos viven en área urbana: el cuadro 2 no registra población rural en el distrito. Las cifras cuentan personas por edad y nada más; no las usamos para suponer nada sobre las familias.'
          ] },
        { kind: 'p', mt: true, html: 'El Agustino limita con San Juan de Lurigancho al otro lado del río Rímac, y con Ate, Santa Anita, San Luis, La Victoria y el Cercado de Lima. Si su familia se mueve entre varios de esos distritos, una clase en línea tiene una ventaja sencilla: no importa dónde esté su hijo ese día, mientras tenga la computadora a mano.' }
      ]
    },
    {
      id: 'logica',
      eyebrow: 'Lógica y matemática',
      h2: '¿Programar ayuda a un niño en matemática?',
      lede: 'Ayuda a pensar con orden, que es buena parte de lo que pide la matemática del colegio. No reemplaza las clases de Matemática ni promete subir las notas, pero obliga a hacer lo mismo que un buen problema: entender, planear, probar y revisar.',
      body: [
        { kind: 'p', html: 'En El Agustino el razonamiento tiene su propio escenario. El 29 de octubre de 2025 la municipalidad publicó en gob.pe la premiación del Concurso de Matemática y Comunicación, "donde se reconoció el esfuerzo y talento de los estudiantes de El Agustino", y el mismo día informó que, con su programa MuniBecas, 15 estudiantes del distrito lograron ingresar a la UNMSM. Son logros de esos estudiantes y de sus colegios; los citamos como contexto del distrito, sin ningún vínculo con nosotros.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Descomponer', p: 'Un programa grande no se escribe de un tirón. El niño aprende a partirlo: primero el tablero, luego las filas, luego quién gana. Es el mismo gesto que separar los datos de un problema de matemática.' },
          { h3: 'Generalizar', p: 'Cuando el niño se da cuenta de que revisar una fila, una columna o una diagonal es la misma operación, escribe una sola función para las tres. Encontrar el patrón común es pensar como en matemática.' },
          { h3: 'Comprobar', p: 'La computadora no deja pasar un descuido. Si el programa dice "nobody" cuando alguien ganó, hay un error, y el niño tiene que encontrarlo. Esa costumbre de verificar es la que se lleva al examen.' }
        ] },
        { kind: 'p', mt: true, html: 'El plan de estudios del CNEB dedica a Matemática cinco horas pedagógicas semanales en 1° y 2° de primaria y cuatro en los grados siguientes, y no tiene un área de programación. Nuestras clases no pretenden ocupar ese espacio: se suman al colegio, en otro horario, y si su hijo disfruta de los acertijos tenemos también una guía de <a class="ag-inline-link" href="/razonamiento-matematico-clases-online-peru">razonamiento matemático en línea</a> y otra sobre la <a class="ag-inline-link" href="/olimpiada-de-matematica-onem-preparacion">Olimpiada de Matemática ONEM</a>.' },
        { kind: 'p', html: 'Una advertencia honesta: ninguna clase convierte a un niño en ganador de un concurso en pocas semanas, y no lo ofrecemos. Lo que sí vemos con frecuencia es a niños que antes se rendían ante un problema largo y ahora lo parten en trozos sin que nadie se lo pida.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Las clases en inglés',
      h2: '¿Y si mi hijo no entiende inglés todavía?',
      lede: 'Puede empezar igual. Las clases son siempre en inglés, pero el mentor parte de lo que el niño entiende y sube poco a poco; la mayoría se acostumbra al acento y al ritmo en las primeras semanas.',
      body: [
        { kind: 'two',
          leftH3: 'El idioma de los errores',
          left: [
            'Cuando un programa en Python falla, el mensaje aparece en inglés: <code>NameError</code>, <code>IndexError</code>, "list index out of range". Un niño que aprende con un mentor de habla inglesa se acostumbra a leer esos avisos como pistas y no como castigos.',
            'En la clase el mentor lee el error en voz alta, lo traduce a una idea sencilla y pregunta: "Which line is the problem?". Con el tiempo el niño hace solo ese recorrido.'
          ],
          rightH3: 'Hablar, no solo escuchar',
          right: [
            'El EF EPI 2025 da al Perú 480 puntos en expresión oral, su habilidad más baja, mientras Lima en conjunto alcanza 555 puntos, en el nivel que EF considera alto. La práctica de hablar es la que más escasea.',
            'En nuestras clases su hijo tiene que decir qué quiere que haga el programa, preguntar cuando se traba y contar qué cambió. Son frases cortas, pero son suyas y las dice cada semana.'
          ] },
        { kind: 'p', mt: true, html: 'Si su hijo responde en castellano, no pasa nada. El mentor toma la idea, la repite en inglés y espera a que el niño la diga con él. La corrección nunca se hace delante del grupo para avergonzar; se hace devolviendo la frase bien dicha. Más detalles en nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'tres-en-raya',
      tint: 'tint',
      eyebrow: 'Ejemplo en Python',
      h2: '¿Cómo sabe una computadora quién ganó al tres en raya?',
      lede: 'Revisando las ocho líneas posibles: tres filas, tres columnas y dos diagonales. El ejercicio es nuestro y está pensado para niños de 10 a 12 años; tiene una trampa a propósito, porque el primer intento solo mira las filas.',
      body: [
        { kind: 'code', label: 'Tres en raya: quién ganó', lang: 'Python', code: PY, note: 'El tablero es una lista de tres listas. <code>board[1][2]</code> se lee "fila 1, columna 2", y se cuenta desde cero.' },
        { kind: 'code', label: 'Resultado al ejecutarlo', lang: 'Salida', code: OUT, note: 'Lo corrimos nosotros con Python 3 y copiamos la salida tal cual. X ganó por la diagonal que baja de izquierda a derecha.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Jugar en papel.</strong> El niño dibuja el tablero y marca quién ganó. Lo ve enseguida: tres X en diagonal.',
          '<strong>Revisar solo filas.</strong> El programa dice <code>Rows only: nobody</code>. El mentor pregunta en inglés: "Is the computer right?". No lo está, y el niño tiene que explicar por qué.',
          '<strong>Sumar columnas.</strong> Con filas y columnas el resultado sigue siendo <code>nobody</code>. Faltan líneas por mirar.',
          '<strong>Las ocho líneas.</strong> Al sumar las dos diagonales aparece <code>All 8 lines: X</code>. La función <code>check</code> no cambió: solo recibió todas las líneas que debía revisar.',
          '<strong>Cambiar el tablero.</strong> El reto es armar un tablero donde gane O por una columna y predecir qué imprimirá cada una de las tres líneas antes de ejecutar.'
        ] },
        { kind: 'p', mt: true, html: 'La lección de fondo sirve para cualquier materia: un programa que "funciona" con los casos que uno probó puede estar equivocado con los que no probó. Contar todos los casos posibles, ocho en este juego, es una forma de pensar que no se copia de ninguna respuesta hecha, ni de una persona ni de una herramienta de IA.' }
      ]
    },
    {
      id: 'pantalla',
      eyebrow: 'Computadora o celular',
      h2: '¿Basta un celular para que un niño aprenda a programar en línea?',
      lede: 'Para mirar una clase, quizá; para programar, no. Escribir código pide teclado y una pantalla donde quepan el programa y su resultado. Por eso pedimos una computadora, aunque sea compartida con el resto de la casa.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Uso de internet por edad en el Perú, abril a junio de 2026 (INEI)', head: ['Medición', 'Porcentaje'], rows: [
          ['Niños de 6 a 11 años que usaron internet', '68,2 %'],
          ['Adolescentes de 12 a 18 años que usaron internet', '92,5 %'],
          ['Niños de 6 a 11 años que entraron a internet por el celular', '48,5 %'],
          ['Personas de 6 años a más que usaron internet en Lima Metropolitana', '92,4 %'],
          ['Personas de 15 años a más que escribieron programas en un lenguaje de programación', '12,1 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín sobre tecnologías de información y comunicación en los hogares del segundo trimestre de 2026, cifras preliminares de la Encuesta Nacional de Hogares. Las cuatro primeras filas son del boletín sobre uso de internet; la última, de su apartado de competencias informáticas. Solo la cuarta fila es de Lima Metropolitana (que para el INEI incluye el Callao); las demás son nacionales.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dice la tabla',
          left: [
            'A nivel nacional, los niños de 6 a 11 años usan internet bastante menos que los adolescentes, y casi la mitad lo hace desde un celular. Para muchos chicos, la pantalla del teléfono es su única relación con la tecnología.',
            'La última fila es la que más nos importa: solo el 12,1 % de las personas de 15 años a más dice haber escrito programas. Programar sigue siendo una habilidad poco común, y aprenderla de niño marca diferencia.'
          ],
          rightH3: 'Lo que pedimos en casa',
          right: [
            'Una computadora de escritorio o una laptop, con cámara y micrófono, y audífonos para que el inglés del mentor se escuche limpio. Si la computadora es de toda la familia, basta con apartarla para la hora de la clase.',
            'Scratch y Python corren en el navegador o con programas gratuitos que el mentor ayuda a instalar en la primera sesión. No hay que comprar ningún kit ni ningún programa.'
          ] },
        { kind: 'p', mt: true, html: 'La otra ventaja de la clase en línea es el tiempo. Su hijo no sale de casa, no hay trayecto de ida ni de vuelta, y la clase cabe entre la tarea y la cena. Durante el año escolar eso marca la diferencia entre una actividad que se sostiene y una que se abandona en el segundo mes.' }
      ]
    },
    {
      id: 'grados',
      eyebrow: 'Grado por grado',
      h2: '¿Qué aprende a programar un niño en cada grado de primaria?',
      lede: 'Cada tramo de primaria tiene su herramienta. El cambio grande llega entre 3° y 4°, cuando el niño deja los bloques y empieza a escribir.',
      body: [
        { kind: 'table', numCols: [], caption: 'Recorrido sugerido por tramos de primaria (nuestro)', head: ['Tramo', 'Edad normativa', 'Qué hace en clase'], rows: [
          ['1° y 2° de primaria', '6 y 7 años', 'Ordena bloques, cuenta historias animadas y descubre la repetición'],
          ['3° y 4° de primaria', '8 y 9 años', 'Arma juegos completos en Scratch y escribe sus primeras líneas de Python'],
          ['5° y 6° de primaria', '10 y 11 años', 'Usa listas y funciones en Python, crea juegos en Roblox y revisa casos como en el tres en raya'],
          ['1° de secundaria', '12 años', 'Planea un proyecto propio: una web, un juego con niveles o un modelo de IA sencillo']
        ] },
        { kind: 'source', html: 'La edad normativa de cada grado es la que fija el MINEDU al 31 de marzo de cada año. La tercera columna es nuestra recomendación; en la clase gratis el mentor ubica a su hijo según lo que ve, no solo según el grado.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo tiene 8 años',
          left: [
            'A los 8 años, en 3° de primaria, Scratch da para mucho: puntajes, niveles y personajes que reaccionan. Es la edad ideal para entender bucles y condiciones sin pelear con el teclado.',
            'Lo explicamos en nuestra guía de <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">programación para niños de 8 años</a>.'
          ],
          rightH3: 'Si ya está en secundaria',
          right: [
            'Para chicos de 13 años en adelante abrimos grupos propios, con Python, Java, desarrollo web e IA, porque el ritmo y los proyectos cambian. El CNEB de secundaria tampoco tiene un área de computación en su tabla de horas.',
            'Desde los 12 años un niño puede seguir en el grupo de niños o pasar al de adolescentes; lo decidimos con la familia después de la clase gratis.'
          ] }
      ]
    },
    {
      id: 'relojes',
      eyebrow: 'Horarios',
      h2: '¿Qué hora es en la India cuando en El Agustino es de tarde?',
      lede: 'Ya es de madrugada del día siguiente. La India va 10 horas y media por delante del Perú en cualquier mes del año, así que nuestros mentores trabajan en turnos que cubren las mañanas y las tardes de Lima.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplos de conversión entre relojes (no es un horario de clases)', head: ['El Agustino', 'India', 'Fecha en la India'], rows: [
          ['6:30 a. m.', '5:00 p. m.', 'Misma fecha'],
          ['8:30 a. m.', '7:00 p. m.', 'Misma fecha'],
          ['10:30 a. m.', '9:00 p. m.', 'Misma fecha'],
          ['1:30 p. m.', 'Medianoche', 'Empieza el día siguiente'],
          ['3:30 p. m.', '2:00 a. m.', 'Día siguiente'],
          ['5:30 p. m.', '4:00 a. m.', 'Día siguiente']
        ] },
        { kind: 'source', html: 'El Perú está en UTC-5 durante todo el año y no cambia la hora desde 1994, según la base tzdata (America/Lima) y la hora oficial del INACAL. La India está en UTC+5:30 sin horario de verano (Asia/Kolkata).' },
        { kind: 'p', mt: true, html: 'Para reservar no hace falta hacer cuentas: usted elige la hora de Lima y el sistema se la traduce al mentor. Lo que sí conviene es mirar el horario del colegio. Si su hijo estudia por la mañana, una clase a media tarde le deja almorzar y descansar; si estudia por la tarde, la mañana temprano funciona bien.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿En qué se nota que su hijo razona con más orden al programar?',
    lede: 'Cinco escalones propios que usamos para describirle a la familia el avance, sin notas ni rankings.',
    table: { caption: 'Cinco escalones de razonamiento al programar (nuestros)', head: ['Escalón', 'Edad aproximada', 'Lo que su hijo logra'], rows: [
      ['1. Sigue pasos', '6 a 7 años', 'ejecuta en orden una secuencia de bloques y la cuenta en voz alta'],
      ['2. Encuentra el patrón', '7 a 9 años', 'reemplaza pasos repetidos por un bucle'],
      ['3. Prevé', '9 a 10 años', 'dice qué imprimirá su programa antes de correrlo'],
      ['4. Cuenta los casos', '10 a 11 años', 'revisa todas las posibilidades, como las ocho líneas del tres en raya'],
      ['5. Defiende su solución', '11 a 12 años', 'explica en inglés por qué su programa es correcto y qué casos probó']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pregúntele qué caso no había probado al principio. Si sabe responder, aprendió algo más que sintaxis.',
      'Es normal que se frustre cuando el programa falla. La frustración que termina en una corrección propia vale más que un programa que salió bien a la primera.'
    ] },
    right: { h3: 'Para su hijo', ps: [
      'Cuente los casos antes de escribir: ¿cuántas formas hay de ganar?',
      'Cuando el resultado le sorprenda, busque el caso que olvidó.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Nueve cursos más para niños de primaria',
    lede: 'Mismo formato en todos: un mentor estable, clases en vivo y en inglés, y la opción de grupo o de clases a solas.',
    bands: [
      { num: 'I', h3: 'Para empezar con calma', sub: 'De 6 a 9 años', courses: [
        { code: 'PRAG / INI / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Del primer personaje a juegos con niveles y puntaje.' },
        { code: 'PRAG / INI / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonar antes de programar', blurb: 'Patrones, orden y lógica para los más pequeños.' },
        { code: 'PRAG / INI / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Estrategias para operar rápido y con seguridad.' }
      ] },
      { num: 'II', h3: 'Juegos y creaciones', sub: 'De 8 a 12 años', courses: [
        { code: 'PRAG / JUE / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Obstáculos, monedas y tiendas programados línea a línea.' },
        { code: 'PRAG / JUE / 02', slug: 'game-development-masterclass-for-kids', title: 'Taller de videojuegos', blurb: 'Varias plataformas de juego en un solo recorrido.' },
        { code: 'PRAG / JUE / 03', slug: 'kids-ai-web-development-course', title: 'Mi primera web', blurb: 'HTML y CSS para publicar algo propio en internet.' }
      ] },
      { num: 'III', h3: 'Números con código', sub: 'De 8 a 12 años', courses: [
        { code: 'PRAG / NUM / 01', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Patrones, fracciones y figuras resueltos programando.' },
        { code: 'PRAG / NUM / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria', blurb: 'Refuerzo ordenado de los temas del colegio, en inglés.' },
        { code: 'PRAG / NUM / 03', slug: 'ai-literacy-for-kids-course', title: 'Inteligencia artificial explicada', blurb: 'Qué hace una IA, en qué falla y cómo revisarla.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo se organizan las clases en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes de salir al colegio del turno tarde.' },
      { time: 'A media tarde', l: 'Después de almorzar, para quien estudia en la mañana.' },
      { time: 'Cuando usted diga', l: 'En clases individuales, el día que acomode a la casa.' }
    ],
    cells: [
      { h3: 'Un solo mentor', p: 'Acompaña a su hijo todo el curso y aprende cómo razona.' },
      { h3: 'Inglés con paciencia', p: 'Frases breves, ejemplos en pantalla y tiempo para responder.' },
      { h3: 'El niño teclea', p: 'Escribe y corrige su propio código; nadie lo hace por él.' },
      { h3: 'Retos por tramo', p: 'Cada etapa cierra con un proyecto que puede mostrar en casa.' },
      { h3: 'Aviso a la familia', p: 'Un comentario breve sobre lo trabajado y lo que sigue.' },
      { h3: 'Grupo o uno a uno', p: 'Quince a veinte compañeros de edad cercana, o el niño solo con el mentor.' }
    ]
  },

  projectsH2: 'Lo que han creado nuestros alumnos',
  projectsLede: 'Lo que empieza con bloques puede terminar, años después, en aplicaciones publicadas. Estos son algunos proyectos de alumnos mayores; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas reales de Google escritas por padres y alumnos, en inglés, sin editar.',

  fees: {
    h2: 'Precios para familias de El Agustino',
    lede: 'La mensualidad se publica en dólares de Estados Unidos y se paga con tarjeta. El banco de su tarjeta convierte el monto, y por eso la cifra exacta que verá en su estado de cuenta varía un poco con el cambio del día.',
    free: ['Una clase de prueba con un mentor', 'Un reto corto para ubicar a su hijo', 'Ningún dato de tarjeta'],
    group: ['Quince a veinte niños de edad cercana', 'El mismo mentor todo el curso', 'Dos clases en vivo a la semana', 'Pago mes a mes, sin contrato largo'],
    one: ['Su hijo y su mentor, nadie más', 'Temas y ritmo a su medida', 'Día y hora que usted fije']
  },

  faq: {
    eyebrow: 'Dudas frecuentes',
    h2: 'Programación para niños en El Agustino: dudas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, son solo en inglés, en vivo y por videollamada. Eso es parte del valor: su hijo practica lógica y programación mientras escucha y habla inglés con su mentor. La expresión oral es la habilidad más baja del Perú en el EF EPI 2025, con 480 puntos, aunque Lima en conjunto llega al nivel alto, y una clase hablada cada semana trabaja justo esa parte.' },
      { q: '¿Programar mejora las notas de matemática?', a: 'No prometemos notas. Programar entrena a descomponer un problema, buscar patrones y comprobar resultados, que son hábitos útiles en Matemática. Las notas dependen del colegio y del esfuerzo del niño.' },
      { q: '¿Cuántos niños hay en El Agustino?', a: 'El censo de 2025 del INEI registró 18,963 niños de 6 a 11 años y 19,581 adolescentes de 12 a 17 entre los censados del distrito. Sumando edades simples, hay 22,368 niños de 6 a 12 años (suma nuestra).' },
      { q: '¿Mi hijo puede programar desde el celular?', a: 'Puede seguir la clase, pero no programar con comodidad. Pedimos una computadora o laptop con teclado, cámara y micrófono. Según el INEI, el 48,5 % de los niños de 6 a 11 años del país entra a internet por el celular, y por eso conviene aclararlo desde el inicio.' },
      { q: '¿Desde qué edad aceptan niños?', a: 'Desde los 6 años, con bloques y juegos. Entre los 9 y los 10 años la mayoría pasa a escribir Python.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Si en El Agustino son las 8:30 a. m., en la India son las 7:00 p. m. del mismo día.' },
      { q: '¿Tienen clases para adolescentes?', a: 'Sí. Desde los 13 años hay grupos aparte con Python, Java, desarrollo web e inteligencia artificial, a otro ritmo y con otros proyectos.' },
      { q: '¿Las clases sirven para el colegio o la UGEL?', a: 'No tienen validez escolar. No estamos vinculados al MINEDU, a la UGEL, a la Municipalidad de El Agustino ni a ningún colegio. Al cerrar un curso, su hijo recibe un certificado de finalización nuestro, no un documento oficial.' },
      { q: '¿Hay que comprar algún programa o kit?', a: 'No. Scratch y Python son gratuitos y no usamos kits de robótica: enseñamos programación, no hardware.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares estadounidenses; su banco convierte el cargo. La clase de prueba es gratis y no pide tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Otras guías',
    h2: 'Para leer después',
    lede: 'Páginas relacionadas, la mayoría en castellano.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía nacional para familias con hijos en primaria.' },
      { href: '/programacion-para-ninos-de-8-anos', label: 'Programación para niños de 8 años', p: 'Por qué los 8 años son buena edad para Scratch.' },
      { href: '/razonamiento-matematico-clases-online-peru', label: 'Razonamiento matemático en línea', p: 'Clases de lógica y problemas, también en inglés.' },
      { href: '/olimpiada-de-matematica-onem-preparacion', label: 'Olimpiada ONEM', p: 'Qué evalúa la olimpiada y cómo practicar con problemas propios.' },
      { href: '/vacaciones-utiles-de-programacion-san-juan-de-lurigancho-lima', label: 'Vacaciones útiles en San Juan de Lurigancho', p: 'La guía de verano del distrito vecino.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos publicados por alumnos (en inglés).' }
    ]
  },

  start: {
    h2: 'Agende una clase gratis desde El Agustino',
    lede: 'El mentor conversa unos minutos con su hijo en un inglés sencillo, le plantea un pequeño acertijo con bloques o con Python y mira cómo lo encara. Al final le decimos qué curso y qué modalidad le recomendamos; usted decide si sigue.',
    readFirst: 'Antes de agendar puede ver <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, con nuestra manera de dar clase, y <a class="ag-inline-link" href="/courses">All courses</a>, con todo el catálogo (en inglés).',
    note: 'Damos clases en vivo y en línea desde la India, únicamente en inglés. Si nos escribe por WhatsApp, puede hacerlo en castellano.',
    formNote: 'Gratis y sin compromiso; no pedimos tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos', links: [
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Resolver problemas' },
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses', label: 'Catálogo completo' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/razonamiento-matematico-clases-online-peru', label: 'Razonamiento matemático' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos de alumnos' }
      ] }
    ],
    bottomRight: 'Ocho líneas, ninguna sin revisar'
  },

  personalityCss: `
.ag-root.ag-prag .ag-hero h1 { max-width: 21ch; letter-spacing: -0.008em; }
.ag-root.ag-prag .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-prag .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-prag .ag-table caption { text-align: left; }
.ag-root.ag-prag .ag-steps li { line-height: 1.58; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook, cuadros 1, 2 and 3, updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026; Municipalidad Distrital de El Agustino notes on gob.pe (29 October 2025, two notes); MINEDU CNEB weekly hours and edades normativas; EF EPI 2025 Peru page; tzdata and INACAL. Read 8 to 10 November 2026. The grade path, the reasoning steps and the Python exercise are our own.',
    localProject: 'A tres en raya winner check for a 10 to 12 year old in El Agustino: the board is a list of three lists, check() looks for three equal marks in a line, and testing rows only, then rows and columns, prints nobody both times until the two diagonals are added and it prints X; the child then builds a board where O wins by a column and predicts all three lines. Lesson family: nested lists as a 3 by 3 grid; rows, columns and diagonals, and a check that misses a line.',
    requiredMentions: ['Rows only: nobody', 'All 8 lines: X', 'Concurso de Matemática y Comunicación', 'con su programa MuniBecas, 15 estudiantes del distrito lograron ingresar a la UNMSM', '22,368 chicos en la edad de nuestras clases', 'Niños de 6 a 11 años que entraron a internet por el celular', 'Ocho líneas, ninguna sin revisar', 'el cuadro 2 no registra población rural en el distrito'],
    sources: [
      { claim: 'El Agustino 231,452 total, 210,467 censused, 20,985 omitted; age groups 0 to 5, 6 to 11, 12 to 17, 18 to 29; single ages 6 to 12; all urban; Lima Metropolitana totals.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Award ceremony of the Concurso de Matemática y Comunicación for El Agustino students (29 October 2025).', url: 'https://www.gob.pe/institucion/munielagustino/noticias/1276606-orgullosos-de-nuestros-ninos-y-jovenes' },
      { claim: 'MuniBecas: 15 students from El Agustino entered UNMSM (29 October 2025).', url: 'https://www.gob.pe/institucion/munielagustino/noticias/1276613-de-el-agustino-a-la-decana-de-america' },
      { claim: 'Internet use: children 6 to 11 68.2%, ages 12 to 18 92.5%, children 6 to 11 via mobile 48.5%, Lima Metropolitana 92.4%; 12.1% of people 15+ wrote programs.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Primaria Matemática 5 hours in 1° and 2°, 4 after; no computing area; normative age at 31 March.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Peru speaking 480, Lima 555 (high).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That coding raises maths grades or helps win contests: refused; the page says we promise no grades or results.',
      'Naming the schools that won the municipal contest, the MuniBecas students, the partner academy or any official: left out.',
      'Any reading of income or living conditions from the census: refused; the page says the rows only count people by age.',
      'A district figure for internet or computers: none exists in the INEI bulletin; national and Lima Metropolitana rows are labelled as such.',
      'Spanish-language teaching, robot kits, or any MINEDU, UGEL, municipal or school link: refused.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: district kids door (ES) | Cieneguilla, valle del Lurín: distrito joven, señal móvil, UGEL 06 | a list of lists as a 3 by 3 board: rows, columns and both diagonals
'use strict';
// Clases de programación para niños en Cieneguilla (ag- Spanish-language district door, Peru cluster row PE230, hubGroup lima;
// alloc: prci, #48531C). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Cieneguilla parent in the eastern valley of Lima Metropolitana, where homes connect mostly by mobile data and a
// class in another district means a long trip. Spine: a young district (more children than older adults, census); how
// homes connect (household census: mobile internet far ahead of fixed); what a class needs; the school context (UGEL 06,
// CNEB, the municipality's vocational fair for 4° and 5° de secundaria, its library); an original tic-tac-toe lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-cieneguilla-lima/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana (tabulados/27/poblacion):
//    Cuadro N° 1 "DISTRITO CIENEGUILLA 50369" total, censada 45735, omitida 4634. Rank 35 of 43 (our ordering).
//    Cuadro N° 3 "DISTRITO CIENEGUILLA 45735 3698 5001 5073 8388 11386 7605 4584"; URBANA 45467, RURAL 268.
//    Cuadro N° 2 single ages: 6 años 784, 7 años 801, 8 años 856, 9 años 835, 10 años 873, 11 años 852, 12 años 933.
//    Neighbours, Cuadro N° 1: LA MOLINA 151360, ATE 702531, PACHACÁMAC 141622.
//  INEI, Censos Nacionales 2025, Equipamiento_del_hogar.xlsx (tabulados/27/hogar), DISTRITO CIENEGUILLA, Hogares 14312:
//    Computadora 2093, Laptop 3446, Tableta 1101; celular 14208, internet fijo 5004, internet móvil 10689.
//  Municipalidad de Cieneguilla, gob.pe notes:
//    8 March 2024 (n-923221): "La UGEL 06 organizó una caravana por el “Buen Inicio del Año Escolar 2024” en todos los
//      distritos que comprende su jurisdicción"; Cieneguilla took part (names of officials left out).
//    4 June 2024 (n-969460): "Feria vocacional para alumnos de 4to y 5to de secundaria"; feria "“Conoce tu Propósito”";
//      "organizada por la MML en coordinación con la Municipalidad de Cieneguilla"; "visitaron todas las Instituciones
//      Educativas del distrito".
//    24 October 2023 (n-856047): "Ecotrueque Lector en la Biblioteca Municipal ¨César Vallejo¨".
//  National: MINEDU Edades normativas; CNEB (no computing area, competency 28 transversal); EF EPI 2025 Lima city 555;
//    tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 5001 / 45735 = 10.9 %, 5073 / 45735 = 11.1 %;
//    5001 + 5073 = 10074 against 4584 aged 60+; internet móvil 10689 / 14312 = 74.7 %, fijo 35.0 %, laptop 24.1 %,
//    computadora 14.6 %, tableta 7.7 %.
// Our own example, run with python3 -I (cieneguilla.py in the src-pages folder), exact output:
//    Rows only, X: no line / Every line, X: diagonal / Every line, O: no line
// Lesson family: a list of lists as a 3 by 3 board; checking only rows misses a win; columns with an index, both diagonals.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'board = [',
  "    ['X', 'O', 'O'],",
  "    ['O', 'X', 'O'],",
  "    ['X', 'O', 'X'],",
  ']',
  '',
  'def rows_only(b, mark):',
  '    for row in b:',
  '        if row == [mark, mark, mark]:',
  "            return 'row'",
  "    return 'no line'",
  '',
  'def every_line(b, mark):',
  '    for row in b:',
  '        if row == [mark, mark, mark]:',
  "            return 'row'",
  '    for c in range(3):',
  '        if b[0][c] == mark and b[1][c] == mark and b[2][c] == mark:',
  "            return 'column ' + str(c)",
  '    if b[0][0] == mark and b[1][1] == mark and b[2][2] == mark:',
  "        return 'diagonal'",
  '    if b[0][2] == mark and b[1][1] == mark and b[2][0] == mark:',
  "        return 'other diagonal'",
  "    return 'no line'",
  '',
  "print('Rows only, X:', rows_only(board, 'X'))",
  "print('Every line, X:', every_line(board, 'X'))",
  "print('Every line, O:', every_line(board, 'O'))"
].join('\n');

const OUT = [
  'Rows only, X: no line',
  'Every line, X: diagonal',
  'Every line, O: no line'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Cieneguilla' },
  slug: 'clases-de-programacion-para-ninos-cieneguilla-lima',
  code: 'prci',
  accent: '#48531C',
  accentRationale: 'Clases de programación para niños en Cieneguilla: a dry olive-brown green #48531C for the valley of the Lurín river and its hills, darker and more earthen than the greens of the coastal districts; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Cieneguilla',
  title: 'Clases de programación para niños en Cieneguilla, Lima',
  description: 'Programación para niños de Cieneguilla, en el valle del Lurín: clases en vivo y en inglés desde casa, con Scratch, juegos y Python, en grupo o a solas, todo el año.',
  ogDescription: 'En Cieneguilla hay más niños que adultos mayores y casi todos los hogares se conectan por datos. Qué necesita su hijo para programar y un tres en raya en Python.',
  twitterDescription: 'Clases de programación para niños de Cieneguilla, en vivo y en inglés, sin bajar a la ciudad.',
  pageName: 'Clases de programación para niños en Cieneguilla',
  webPageDescription: 'Guía para familias de Cieneguilla, en el este de Lima Metropolitana, que buscan clases de programación para niños de 6 a 12 años: los niños del distrito por edad según los Censos Nacionales 2025, cómo se conectan los hogares, qué equipo hace falta, el contexto escolar (UGEL 06, CNEB, la feria vocacional municipal) y una lección de Python escrita por nosotros.',
  courseDescription: 'Clases de programación en directo por videollamada para niños de 6 a 12 años de Cieneguilla, dictadas solo en inglés: Scratch, diseño de juegos, matemática con código y Python, en clase grupal o individual, durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Cieneguilla',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#valle', label: 'Desde el valle' },
    { href: '#chicos', label: 'Chicos' },
    { href: '#senal', label: 'Conexión' },
    { href: '#tres-en-raya', label: 'Ejemplo' },
    { href: '#reloj', label: 'Reloj' }
  ],
  eyebrow: 'Lima Este &middot; Cieneguilla &middot; Niños de 6 a 12',
  h1: 'Clases de programación para niños en Cieneguilla, en inglés',
  lede: 'Cieneguilla es el distrito del valle del Lurín, con cerros, casas de campo y una población joven. Para un chico de aquí, una academia de programación casi siempre queda lejos. Aquí explicamos cómo puede aprender desde casa, con un mentor que enseña en directo y en inglés, qué dice el censo de 2025 sobre los niños y la conexión del distrito, y un juego de tres en raya escrito en Python.',
  secondaryCta: { href: '#senal', label: '¿Alcanza la conexión de casa?' },
  wa: 'Hola Modern Age Coders, vivimos en Cieneguilla y buscamos clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; del valle del Lurín a la India, por videollamada',
  spec: [
    ['Distrito', 'Cieneguilla, Lima Metropolitana'],
    ['Edades', 'Niños de 6 a 12; adolescentes aparte'],
    ['Cómo', 'En directo por videollamada, en inglés'],
    ['Grupo', 'Quince a veinte, o sesiones individuales'],
    ['Necesita', 'Laptop o PC y una señal estable'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta',
  capsule: 'Sí: los chicos de Cieneguilla pueden aprender a programar sin bajar a la ciudad. Modern Age Coders da clases en vivo y en inglés por videollamada para niños de 6 a 12 años, todo el año. Con una laptop o PC en casa y una señal estable, su hijo trabaja con un mentor desde la India que va a su ritmo: Scratch y juegos primero, después Python. Puede elegir un grupo o sesiones individuales, a la hora que más le acomode, y probar gratis la primera.',

  picks: {
    eyebrow: 'Primeros cursos',
    h2: 'Tres cursos para los chicos de Cieneguilla',
    lede: 'Uno para aprender la lógica jugando, uno para diseñar juegos completos y uno para quien disfruta los números.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRCI / 01', title: 'Scratch paso a paso', alt: 'Imagen del curso completo de programación con Scratch', note: 'El primer curso para la mayoría de chicos de primaria. Personajes que se mueven, chocan, cuentan puntos y deciden, armados con bloques que llevan nombres en inglés.' },
      { course: 'game-development-masterclass-for-kids', code: 'PRCI / 02', title: 'Crear videojuegos', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'Para chicos de 8 a 12 que pasan horas jugando. Aprenden a diseñar reglas, tableros y niveles, como el tres en raya de esta página, y a programarlos.' },
      { course: 'maths-through-coding', code: 'PRCI / 03', title: 'Matemática con código', alt: 'Imagen del curso de matemática a través de la programación', note: 'De 10 a 15 años. Tablas, coordenadas y patrones del colegio comprobados con programas cortos en Python, para entender la matemática desde otro lado.' }
    ]
  },

  sections: [
    {
      id: 'valle',
      eyebrow: 'Desde el valle',
      h2: '¿Se puede aprender a programar viviendo en Cieneguilla?',
      lede: 'Sí, y sin salir del distrito. Cada sesión ocurre en directo a través de la pantalla: su hijo escribe sus programas en casa y un mentor que vive en la India lo orienta, siempre en inglés. Lo único que viaja es la señal.',
      body: [
        { kind: 'p', html: 'Cieneguilla está en el extremo este de Lima Metropolitana, subiendo por el valle del río Lurín. Limita, entre otros, con La Molina, Ate y Pachacámac, y hacia el este con la provincia de Huarochirí. Los Censos Nacionales 2025 del INEI le asignan 50,369 habitantes, el puesto 35 entre los 43 distritos de la capital (puesto calculado por nosotros con el Cuadro N.° 1). El mismo censo registra 268 personas en su área rural, algo poco común dentro de Lima.' },
        { kind: 'p', html: 'Las academias de programación de Lima suelen estar en los distritos del centro y del sur. Para una familia de Cieneguilla, ir a una de ellas dos veces por semana significa bajar por la carretera y volver, con un niño cansado después del colegio. No damos tiempos de viaje porque no los medimos, pero ese recorrido es justo lo que una clase en casa elimina.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ningún viaje', p: 'El niño entra a la sesión desde su cuarto o la sala. Si llueve en invierno o la carretera está cargada, la clase igual empieza a su hora.' },
          { h3: 'El mismo trato', p: 'Un chico de Cieneguilla tiene el mismo mentor, el mismo curso y la misma atención que uno de cualquier otro distrito o país.' },
          { h3: 'Inglés con propósito', p: 'Las palabras de Python y la conversación con el mentor van en inglés. El niño lo usa para lograr algo, no para llenar una ficha.' }
        ] },
        { kind: 'p', mt: true, html: 'Si quiere comparar el formato con otras opciones, la página <a class="ag-inline-link" href="/clases-particulares-de-programacion-online-peru">clases particulares de programación online</a> explica cómo funcionan las sesiones individuales, y para el verano tenemos una guía del distrito vecino: <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-la-molina-lima">vacaciones útiles de programación en La Molina</a>.' }
      ]
    },
    {
      id: 'chicos',
      eyebrow: 'Un distrito joven',
      h2: '¿Cuántos niños hay en Cieneguilla?',
      lede: 'Unos ochocientos por cada año de edad. Los Censos Nacionales 2025 cuentan en Cieneguilla 5,001 niños censados de 6 a 11 años y 5,073 adolescentes de 12 a 17, el 10.9 % y el 11.1 % de la población censada (cálculo nuestro).',
      body: [
        { kind: 'table', numCols: [1], caption: 'Niñas y niños de Cieneguilla por edad, según los Censos Nacionales 2025, y el grado que les corresponde', head: ['Edad', 'Censados en Cieneguilla', 'Grado por edad normativa', 'Cómo empezaría, según nosotros'], rows: [
          ['6 años', '784', '1° de primaria', 'Bloques grandes y un personaje que camina'],
          ['7 años', '801', '2° de primaria', 'Scratch con eventos y sonidos'],
          ['8 años', '856', '3° de primaria', 'Un juego con reglas y puntaje'],
          ['9 años', '835', '4° de primaria', 'Primeros programas en Python'],
          ['10 años', '873', '5° de primaria', 'Listas en Python: un tablero de juego'],
          ['11 años', '852', '6° de primaria', 'Un juego completo diseñado por él'],
          ['12 años', '933', '1° de secundaria', 'Python para adolescentes']
        ] },
        { kind: 'source', html: 'Tomado del Cuadro N.° 2 (edades simples) que el INEI difundió para Lima Metropolitana con el censo levantado el 15 de septiembre de 2025. Para pasar de edad a grado usamos la norma del MINEDU sobre edades normativas, con corte al 31 de marzo. Las ideas para empezar las propone Modern Age Coders.' },
        { kind: 'two', mt: true,
          leftH3: 'Más chicos que abuelos',
          left: [
            'El Cuadro N.° 3 del censo muestra un rasgo de Cieneguilla: los niños y adolescentes de 6 a 17 años suman 10,074, más del doble de las 4,584 personas censadas de 60 años o más (cálculo nuestro). En los distritos del centro de Lima suele pasar lo contrario.',
            'Eso significa muchas familias con hijos en edad escolar, y muchos chicos que vuelven del colegio con la tarde por delante.'
          ],
          rightH3: 'Y los adolescentes',
          right: [
            'Desde 1° de secundaria hablamos de adolescentes. Los 5,073 de Cieneguilla tienen cursos propios: Python completo, desarrollo de juegos y una introducción seria a la inteligencia artificial.',
            'Un adolescente que empieza de cero puede ir directo a escribir código. La página <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5to de secundaria</a> explica qué conviene en el último año del colegio.'
          ] }
      ]
    },
    {
      id: 'senal',
      eyebrow: 'Conexión y equipo',
      h2: '¿Alcanza la conexión de una casa de Cieneguilla para una clase en vivo?',
      lede: 'En muchas casas, sí, pero conviene probarla. Según el censo de 2025, tres de cada cuatro hogares del distrito tienen internet móvil y uno de cada tres internet fijo. Una videollamada de una hora funciona con datos si la señal es estable.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Cómo se conectan y qué equipos tienen los hogares de Cieneguilla, Censos Nacionales 2025 (porcentajes calculados por nosotros)', head: ['Equipo o servicio', 'Hogares de Cieneguilla (de 14,312)', 'Lima Metropolitana'], rows: [
          ['Teléfono celular', '14,208 (99.3 %)', '99.4 %'],
          ['Internet móvil', '10,689 (74.7 %)', '76.5 %'],
          ['Internet fijo', '5,004 (35.0 %)', '58.3 %'],
          ['Laptop', '3,446 (24.1 %)', '41.5 %'],
          ['Computadora de escritorio', '2,093 (14.6 %)', '28.6 %'],
          ['Tableta', '1,101 (7.7 %)', '19.3 %']
        ] },
        { kind: 'source', html: 'El INEI publica estos conteos en su archivo de equipamiento de los hogares (censo 2025, Lima Metropolitana): equipos en el Cuadro N.° 1, servicios en el N.° 2, renglón de Cieneguilla. Una casa con laptop, celular e internet aparece en tres filas, de modo que las filas no se suman.' },
        { kind: 'two', mt: true,
          leftH3: 'Si en casa se conectan con datos',
          left: [
            'Funciona, siempre que la señal no se caiga. Haga la prueba: una videollamada de media hora en el mismo rincón donde su hijo va a estudiar. Si se congela a menudo, busque otro lugar de la casa o un horario con menos uso.',
            'La cámara puede apagarse un momento si la conexión flaquea; lo importante es que el audio y la pantalla compartida se mantengan.'
          ],
          rightH3: 'Si en casa no hay computadora',
          right: [
            'Se lo decimos con franqueza: para programar hace falta una laptop o PC con teclado. Desde un celular se puede mirar, pero no escribir código con comodidad durante una hora.',
            'Si la laptop es de un adulto o la comparten varios hermanos, basta con reservarla para la hora de la sesión. Scratch y Python no cuestan nada.'
          ] },
        { kind: 'p', mt: true, html: 'Mostramos estos números del censo solo para responder si una clase en línea es realista en el distrito, no para decir nada de las familias. En la sesión gratis revisamos su conexión y su equipo antes de recomendar nada; si no alcanza, se lo decimos antes de que pague.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'El contexto escolar',
      h2: '¿Qué enseña el colegio y qué hace el distrito por los estudiantes?',
      lede: 'El colegio no tiene un curso de programación: el CNEB no le da horas propias a la computación. El distrito, por su parte, depende de la UGEL 06 y su municipalidad organiza actividades para escolares, como una feria vocacional.',
      body: [
        { kind: 'p', html: 'En marzo de 2024, la Municipalidad de Cieneguilla informó que "La UGEL 06 organizó una caravana por el “Buen Inicio del Año Escolar 2024” en todos los distritos que comprende su jurisdicción", y que el distrito participó con sus colegios. En junio de 2024 anunció la "Feria vocacional para alumnos de 4to y 5to de secundaria" llamada "Conoce tu Propósito", "organizada por la MML en coordinación con la Municipalidad de Cieneguilla", para la que el personal "visitaron todas las Instituciones Educativas del distrito".' },
        { kind: 'p', html: 'La municipalidad también tiene una Biblioteca Municipal "César Vallejo", donde en octubre de 2023 organizó un ecotrueque lector: libros a cambio de botellas de plástico. Citamos estas notas solo para describir el distrito con sus propias palabras; no tenemos ninguna relación con la municipalidad, con la UGEL 06 ni con el MINEDU.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que no da el horario escolar',
          left: [
            'El Currículo Nacional reparte las horas de primaria y secundaria entre áreas como Matemática, Comunicación, Inglés y Ciencia y tecnología. No hay un área de computación ni de programación; la competencia digital del CNEB se trabaja de forma transversal, dentro de otras áreas.',
            'En la práctica, cada colegio decide cuánto uso de la computadora hay. Por eso dos chicos del mismo grado pueden llegar con experiencias muy distintas.'
          ],
          rightH3: 'Lo que suma una clase de programación',
          right: [
            'Lógica, constancia y la costumbre de comprobar las cosas. Nuestras clases acompañan al colegio en otro horario; no lo reemplazan ni dan notas escolares.',
            'Para un adolescente que ya está pensando en qué estudiar, como los de la feria vocacional, programar unos meses es una buena forma de saber si la carrera tecnológica le gusta de verdad.'
          ] }
      ]
    },
    {
      id: 'tres-en-raya',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se programa un tres en raya en Python?',
      lede: 'Con una lista de listas, que es un tablero de 3 por 3. Lo diseñamos nosotros para alumnos de 5° y 6° grado: dos funciones que deciden si alguien ganó, una que solo mira las filas y otra que mira todas las líneas.',
      body: [
        { kind: 'code', label: 'Un tablero y dos maneras de revisarlo', lang: 'Python', code: PY, note: '<code>board[1][2]</code> es la casilla de la fila 1, columna 2, contando desde 0. La diagonal principal es <code>[0][0]</code>, <code>[1][1]</code>, <code>[2][2]</code>; la otra, <code>[0][2]</code>, <code>[1][1]</code>, <code>[2][0]</code>.' },
        { kind: 'code', label: 'Lo que imprimió', lang: 'Salida', code: OUT, note: 'Estas tres líneas son la salida real del archivo, ejecutado por nosotros con Python 3. X ganó por la diagonal, pero la primera función no lo ve porque solo revisa las filas.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Jugar en papel primero.</strong> El mentor dibuja el tablero y pregunta en inglés: "Who won?" Los niños ven enseguida la diagonal de X.',
          '<strong>Predecir.</strong> ¿Qué dirá <code>rows_only</code>? Muchos creen que "X gana". La pantalla dice <code>no line</code>: la función no mira donde tiene que mirar.',
          '<strong>Nombrar las líneas.</strong> En un tres en raya hay ocho líneas ganadoras: tres filas, tres columnas y dos diagonales. El niño las cuenta en inglés: "three rows, three columns, two diagonals".',
          '<strong>Completar la función.</strong> Con <code>every_line</code> el programa revisa las ocho y responde <code>diagonal</code>. Para O sigue diciendo <code>no line</code>, y el niño comprueba en el tablero que es cierto.',
          '<strong>Su propio tablero.</strong> El reto final es armar un tablero donde O gane por una columna y comprobar que el programa diga <code>column</code> con el número correcto.'
        ] },
        { kind: 'p', mt: true, html: 'Lo importante no es el juego. Es aprender a preguntarse "¿estoy revisando todos los casos?", una pregunta que sirve en matemática, en ciencias y en la vida. Un programa que funciona con el primer ejemplo no está terminado; hay que buscar el caso que lo rompe. Esa forma de pensar no se aprende copiando una respuesta, venga de donde venga.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Idioma y horario',
      h2: '¿Cuándo se conectan los chicos y cómo es el inglés del mentor?',
      lede: 'En inglés, a la hora que su familia defina. El mentor vive en la India, que va diez horas y media por delante de Perú en todos los meses del año. Aquí tiene algunas equivalencias.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hora de Cieneguilla y hora del mentor en la India (equivalencias de ejemplo; no son horarios fijos)', head: ['Cieneguilla (hora de Perú)', 'India (hora del mentor)', 'Día allá'], rows: [
          ['8:00 a. m.', '6:30 p. m.', 'Mismo día'],
          ['10:00 a. m.', '8:30 p. m.', 'Mismo día'],
          ['3:30 p. m.', '2:00 a. m.', 'Día siguiente'],
          ['5:00 p. m.', '3:30 a. m.', 'Día siguiente'],
          ['7:00 p. m.', '5:30 a. m.', 'Día siguiente']
        ] },
        { kind: 'source', html: 'Ningún cambio de estación mueve estos relojes: el Perú se queda en UTC-5 (lo publica el INACAL; la base tzdata lo registra en America/Lima) y la India en UTC+5:30. La equivalencia de la tabla vale en enero igual que en julio.' },
        { kind: 'two', mt: true,
          leftH3: 'El inglés, sin miedo',
          left: [
            'Su hijo no necesita hablar inglés para empezar. El mentor usa frases cortas, señala en la pantalla y repite de otra forma. Las primeras dos o tres semanas son de acostumbrarse al acento, de los dos lados.',
            'Lima ciudad obtuvo 555 puntos, banda alta, en el EF EPI 2025. Ese ranking mide a adultos, pero confirma que el inglés ya circula por la capital.'
          ],
          rightH3: 'Cuándo suelen conectarse',
          right: [
            'Quien va al colegio temprano suele elegir media tarde; quien entra al mediodía, la mañana. Si en su casa la señal anda más firme a ciertas horas, conviene tenerlo en cuenta.',
            'Al reservar, el sistema le muestra los horarios ya en hora de Perú.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota el progreso de su hijo?',
    lede: 'Cinco pasos propios nos permiten contarle a la familia dónde está su hijo. No son notas, ni se parecen a las del colegio.',
    table: { caption: 'Los cinco pasos que usamos para seguir a cada alumno (escala propia)', head: ['Paso', 'Edad típica', 'Su hijo puede'], rows: [
      ['1. Mueve', '6 a 7 años', 'llevar un personaje de un lado a otro con bloques en orden'],
      ['2. Decide', '7 a 9 años', 'usar un bloque "si" para que el juego reaccione a algo'],
      ['3. Guarda', '9 a 10 años', 'usar una lista en Python para recordar varias cosas a la vez'],
      ['4. Revisa todo', '10 a 11 años', 'buscar el caso que su programa no contempla, como la diagonal'],
      ['5. Diseña', '11 a 12 años', 'inventar un juego con sus reglas, programarlo y explicarlo en inglés']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pregunte "¿probaste todos los casos?". Si su hijo sabe qué casos probó, va bien encaminado.',
      'Un juego terminado vale más que diez empezados. Ayúdelo a cerrar lo que comienza.'
    ] },
    right: { h3: 'Para su hijo', ps: [
      'Antes de decir que funciona, busque una forma de romperlo.',
      'Dibuje el tablero en papel cuando el código se complique.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para seguir en Cieneguilla',
    lede: 'Siguen el mismo formato: sesiones en directo, en inglés, con un mentor que no cambia durante el curso.',
    bands: [
      { num: 'I', h3: 'Los primeros meses', sub: 'Primaria baja', courses: [
        { code: 'PRCI / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para empezar', blurb: 'Programación sin teclear: piezas de colores que se encajan.' },
        { code: 'PRCI / BASE / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Construcciones automáticas en un mundo de bloques.' },
        { code: 'PRCI / BASE / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sumas y restas rápidas con estrategias que se entienden.' }
      ] },
      { num: 'II', h3: 'Código escrito', sub: 'Primaria alta', courses: [
        { code: 'PRCI / CODIGO / 01', slug: 'python-ai-kids-masterclass', title: 'Python y algo de IA', blurb: 'Pasar de los bloques al texto, con proyectos cortos de IA.' },
        { code: 'PRCI / CODIGO / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Programar mundos y reglas dentro de Roblox Studio.' },
        { code: 'PRCI / CODIGO / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Un proyecto de hackatón', blurb: 'Idear, construir y presentar un proyecto en equipo.' }
      ] },
      { num: 'III', h3: 'Adolescentes', sub: 'Secundaria', courses: [
        { code: 'PRCI / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python de verdad', blurb: 'Del primer script a proyectos completos, de 13 a 18 años.' },
        { code: 'PRCI / SEC / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Desarrollo de juegos', blurb: 'Física, niveles y personajes para juegos más ambiciosos.' },
        { code: 'PRCI / SEC / 03', slug: 'ai-ml-masterclass-teens', title: 'IA y aprendizaje automático', blurb: 'Modelos que aprenden de datos, entendidos por dentro.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una semana de sesiones?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Por la mañana', l: 'Antes del colegio, si su hijo entra en el turno tarde.' },
      { time: 'Por la tarde', l: 'Ya en casa, con las tareas avanzadas.' },
      { time: 'A su medida', l: 'Sesiones individuales en el horario que acuerde.' }
    ],
    cells: [
      { h3: 'Siempre el mismo mentor', p: 'Conoce a su hijo y lo acompaña todo el curso.' },
      { h3: 'Inglés claro', p: 'Frases sencillas, con la pantalla como apoyo.' },
      { h3: 'Escribe su hijo', p: 'El mentor pregunta y guía; el niño teclea.' },
      { h3: 'Cierre con proyecto', p: 'Cada etapa termina con algo que se puede jugar o mostrar.' },
      { h3: 'Noticias para la familia', p: 'Un mensaje breve sobre el avance y lo siguiente.' },
      { h3: 'Aula o sesión privada', p: 'Un aula virtual de quince a veinte, o el mentor solo para su hijo.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Un tres en raya en Python es el comienzo; con tiempo, algunos alumnos llegan a publicar juegos y apps completos. Aquí verá varios, y en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés) muchos más.',
  reviewsLede: 'Reseñas que familias y estudiantes de otros países dejaron en Google, tal cual, en inglés.',

  fees: {
    h2: 'Precios para familias de Cieneguilla',
    lede: 'El precio de cada mes figura en dólares de EE. UU. y se carga a su tarjeta; el banco lo convierte ese mismo día. Por el tipo de cambio, lo que aparezca en su estado de cuenta puede diferir en algunos céntimos.',
    free: ['Primera sesión gratuita, en directo', 'Prueba de su conexión y su equipo', 'Sin tarjeta y sin compromiso'],
    group: ['Quince a veinte chicos de edad similar', 'Un solo mentor durante el curso', 'Dos sesiones en directo por semana', 'Pago mensual, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'El ritmo que su hijo necesita', 'El horario que la familia elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Cieneguilla: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: enseñamos solo en inglés, y en directo. Para un chico del valle eso vale doble, porque practica el idioma mientras programa y no necesita otra academia. Cuando algo no queda claro, el mentor lo dice de otro modo y lo dibuja en la pantalla compartida. Con 555 puntos en el EF EPI 2025, Lima ciudad está en la banda alta, y esa base se pone a trabajar.' },
      { q: '¿Hay que bajar a otro distrito?', a: 'No. No tenemos locales en Cieneguilla ni en el resto de Lima. Su hijo se conecta desde casa por videollamada, sin viajes por la carretera.' },
      { q: '¿Funciona con internet móvil?', a: 'Sí, si la señal es estable durante una hora. En Cieneguilla el 74.7 % de los hogares tiene internet móvil y el 35.0 % internet fijo, según el censo de 2025. Recomendamos probar antes una videollamada larga en el lugar donde su hijo va a estudiar.' },
      { q: '¿Qué computadora hace falta?', a: 'Cualquier laptop o computadora de escritorio que tenga teclado, cámara y micrófono. El celular no sirve para teclear código una hora. En el censo de 2025, el 24.1 % de los hogares de Cieneguilla declaró tener laptop.' },
      { q: '¿Cuántos niños hay en Cieneguilla?', a: 'El INEI registró en los Censos Nacionales 2025 a 5,001 chicos censados con 6 a 11 años y 5,073 con 12 a 17; el distrito tiene 50,369 habitantes.' },
      { q: '¿Mi hijo de 7 años es muy pequeño?', a: 'No. Aceptamos chicos desde 1° de primaria. A los 7 se programa con bloques y personajes; el teclado y Python llegan más adelante, cuando lee y escribe con soltura.' },
      { q: '¿Hay horarios fijos?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. El mentor trabaja con el reloj indio, adelantado diez horas y media: si su hijo se conecta a las 10:00 a. m. en Cieneguilla, allá son las 8:30 p. m.' },
      { q: '¿Qué medios de pago aceptan?', a: 'Tarjeta, mes a mes, con el precio en dólares de EE. UU.; la conversión corre por cuenta de su banco. Reservar la sesión de prueba no requiere tarjeta.' },
      { q: '¿Tienen relación con la UGEL 06 o la municipalidad?', a: 'Ninguna. Trabajamos por nuestra cuenta, sin convenio con la UGEL 06, la Municipalidad de Cieneguilla ni el MINEDU, y lo que se aprende aquí no se convierte en nota del colegio. El único documento que entregamos es nuestro certificado de finalización, al cerrar un curso.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir leyendo',
    h2: 'Más páginas para familias de Cieneguilla',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/clases-particulares-de-programacion-online-peru', label: 'Clases particulares online', p: 'Cómo son las sesiones individuales por videollamada.' },
      { href: '/vacaciones-utiles-de-programacion-la-molina-lima', label: 'Vacaciones útiles en La Molina', p: 'Un verano de código para el distrito vecino.' },
      { href: '/programacion-para-5to-de-secundaria', label: 'Programación en 5to de secundaria', p: 'Qué aprender en el último año del colegio.' },
      { href: '/programacion-roblox-para-ninos-en-ingles', label: 'Roblox para niños, en inglés', p: 'Programar juegos en Roblox con un mentor.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos en el país, resumido en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo enseñamos, explicado en inglés.' }
    ]
  },

  start: {
    h2: 'Pruebe una sesión gratis desde Cieneguilla',
    lede: 'Primero comprobamos que la conexión y el equipo de su casa funcionen. Luego el mentor conversa un poco con su hijo, en inglés sencillo, le propone un juego corto con bloques o con Python y mira cómo lo resuelve. Con eso le sugerimos un curso, sin compromiso.',
    readFirst: 'Si quiere leer antes de reservar, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> sobre el método y <a class="ag-inline-link" href="/courses">All courses</a> con todos los programas.',
    note: 'Las sesiones son en directo y únicamente en inglés, con mentores en la India. Por WhatsApp le respondemos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Primeros cursos', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch paso a paso' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Crear videojuegos' },
        { href: '/courses/maths-through-coding', label: 'Matemática con código' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/clases-particulares-de-programacion-online-peru', label: 'Clases particulares online' },
        { href: '/programacion-para-5to-de-secundaria', label: 'Programación en 5to de secundaria' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Ocho líneas, no solo tres'
  },

  personalityCss: `
.ag-root.ag-prci .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-prci .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-prci .ag-table caption { font-style: italic; }
.ag-root.ag-prci .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-prci .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de Lima Metropolitana (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for Cieneguilla; Municipalidad de Cieneguilla notes on gob.pe of 24 October 2023, 8 March 2024 and 4 June 2024; MINEDU Edades normativas and CNEB; EF EPI 2025; tzdata and INACAL. The tic-tac-toe example, the starting suggestions and the steps are our own.',
    localProject: 'A tic-tac-toe checker for a child of 10 to 12 in Cieneguilla: a list of lists as a 3 by 3 board where X wins on the main diagonal; rows_only prints Rows only, X: no line, every_line prints Every line, X: diagonal and Every line, O: no line. Run with python3 -I. Lesson family: a list of lists as a board; checking only rows misses a win; columns and both diagonals.',
    requiredMentions: ['Every line, X: diagonal', 'three rows, three columns, two diagonals', 'en todos los distritos que comprende su jurisdicción', 'Feria vocacional para alumnos de 4to y 5to de secundaria', '10,689 (74.7 %)', 'suman 10,074, más del doble de las 4,584 personas censadas de 60 años o más', 'Censados en Cieneguilla', 'Ocho líneas, no solo tres', 'registra 268 personas en su área rural'],
    sources: [
      { claim: 'Cieneguilla 50,369 inhabitants, censada 45,735 (268 rural), 5,001 aged 6 to 11, 5,073 aged 12 to 17, 4,584 aged 60+, single ages 6 to 12; neighbours La Molina, Ate, Pachacámac.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Cieneguilla households 14,312: mobile internet 10,689, fixed internet 5,004, laptop 3,446, computer 2,093, tablet 1,101, phone 14,208.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'UGEL 06 caravan for the start of the 2024 school year across its districts, including Cieneguilla (8 March 2024).', url: 'https://www.gob.pe/institucion/municieneguilla/noticias/923221' },
      { claim: 'Vocational fair Conoce tu Propósito for 4to and 5to de secundaria, organised by the MML with the municipality (4 June 2024).', url: 'https://www.gob.pe/institucion/municieneguilla/noticias/969460' },
      { claim: 'Ecotrueque lector at the Biblioteca Municipal César Vallejo (24 October 2023).', url: 'https://www.gob.pe/institucion/municieneguilla/noticias/856047' },
      { claim: 'CNEB: no computing area; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima city 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Officials and councillors named in the municipal notes: left out on purpose.',
      'Travel times from Cieneguilla to central Lima: no figure used.',
      'Income, class or strata readings of the household equipment table: refused; shown only to answer whether a class at home is realistic.',
      'A neighbour list beyond La Molina, Ate, Pachacámac and Huarochirí: not asserted.',
      'Any link with UGEL 06, the municipality, the MML or the vocational fair: refused; the page says we have none.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};

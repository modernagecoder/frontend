// SHIP: district | Villa María del Triunfo: live code at home, after the library's crosswords and word searches | 2D lists: a noughts-and-crosses board, rows, columns and both diagonals
'use strict';
// Clases de programación para niños en Villa María del Triunfo (ag- Spanish district door, Peru cluster row PE201, P6,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Villa María del Triunfo (VMT) who searches "clases de programación para niños Villa María del
// Triunfo" during the school year. Spine: VMT's age profile in the 2025 census (one quotable table); the municipal library
// and the district's teaching fair (gob.pe); grids as a bridge from the library's word searches to code; a noughts-and-
// crosses checker in Python; starting age; why a class at home from Lima Sur (no traffic figures); Lima connectivity
// (INEI); English; adolescentes; Peru to India clock. No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// villa-maria-del-triunfo-lima/, fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from saved raw files;
// quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx), CUADRO N°1:
//    "DISTRITO VILLA MARÍA DEL TRIUNFO | 485531 | 240683 | 244848 | 454209 | 224701 | 229508 | 31322"; CUADRO N°3:
//    "DISTRITO VILLA MARÍA DEL TRIUNFO | 454209 | 28611 | 43185 | 46391 | 86140 | 104670 | 84503 | 60709"; CUADRO N°2
//    single ages: 6 años 6183, 7 años 6744, 8 años 7253, 9 años 7415, 10 años 7758, 11 años 7832, 12 años 7794.
//  INEI national workbook (ind_00) CUADRO N° 1: our sort of 1,893 districts puts VMT (485531) sixth in Peru, after SJL, SMP,
//    Ate, Comas and the district of Callao (487920); fifth inside the province of Lima Metropolitana.
//  Municipalidad Distrital de Villa María del Triunfo on gob.pe:
//    noticias/1403538 (7 June 2026): "La Biblioteca Municipal José Carlos Mariátegui de Villa María del Triunfo continúa
//    promoviendo el acceso a la educación"; "vecinos de las siete zonas del distrito"; "Historia, Literatura Universal,
//    Poesía y textos preuniversitarios"; "la sala de lectura es utilizada por escolares para realizar investigaciones y
//    tareas académicas"; "crucigramas, pupiletras y el pintado de mandalas"; "de lunes a viernes, de 11:00 a. m. a 7:00 p. m."
//    noticias/1298189 (22 November 2025): "Estudiantes de seis instituciones educativas"; "II Feria Pedagógica de Buenas
//    Prácticas “Intercambiando saberes, transformando aprendizajes”"; "el último 21 de noviembre en la plaza Mayor del
//    distrito"; organised by "UGEL 01" and the municipal Subgerencia de Educación, Cultura, Deporte y Juventud. School names
//    left out on purpose.
//  INEI, TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 84,7% de los hogares disponía del servicio";
//    "el mayor crecimiento se registró en Lima Metropolitana, con un aumento de 4,3 puntos porcentuales"; "alcanzó el 53,3%
//    en Lima Metropolitana"; "en Lima Metropolitana, con un 92,4%".
//  MINEDU Edades normativas (as in the pilot): edad normativa al 31 de marzo.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, high band from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): shares of VMT's censused population: 0 to 5 6.3 %, 6 to 11 9.5 %, 12 to 17 10.2 %,
//    18 to 29 19.0 %, 60 and over 13.4 %; 31322 / 485531 = 6.5 % omitted; 485531 / 10141775 = 4.8 % of Lima Metropolitana;
//    43185 / 818096 = 5.3 % of Lima's censused 6 to 11.
// Our own example (vmt_grid.py in the src-pages folder), run with python3 -I, exact output: Lines checked: 8 / Winner: X
//    (X wins on the main diagonal; without the two diagonal lines the same loop would print Winner: nobody).
// Neighbouring districts named in plain text only (San Juan de Miraflores, Villa El Salvador, La Molina, Pachacámac).
// Lesson family: two-dimensional lists (a list of rows); building rows, columns and both diagonals, then a count() check.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'board = [',
  "    ['X', 'O', 'X'],",
  "    ['O', 'X', 'O'],",
  "    ['O', 'X', 'X'],",
  ']',
  '',
  'lines = []',
  'for r in range(3):',
  '    lines.append(board[r])',
  'for c in range(3):',
  '    lines.append([board[r][c] for r in range(3)])',
  'lines.append([board[i][i] for i in range(3)])',
  'lines.append([board[i][2 - i] for i in range(3)])',
  '',
  "print('Lines checked:', len(lines))",
  "winner = 'nobody'",
  'for line in lines:',
  '    if line.count(line[0]) == 3:',
  '        winner = line[0]',
  "print('Winner:', winner)"
].join('\n');

const OUT = [
  'Lines checked: 8',
  'Winner: X'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Villa María del Triunfo' },
  slug: 'clases-de-programacion-para-ninos-villa-maria-del-triunfo-lima',
  code: 'pnv',
  accent: '#1A763F',
  accentRationale: 'Villa María del Triunfo: a lomas green #1A763F, the brighter green the hills of Lima Sur take in the misty season, the lightest of the Lima district greens; allocated in alloc.tsv (contrast 4.60 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Villa María del Triunfo',
  title: 'Programación para niños en Villa María del Triunfo',
  description: 'Clases de programación para niños de Villa María del Triunfo, de 6 a 12 años: en vivo, en línea y en inglés, desde casa, en grupo o individuales, a toda hora.',
  ogDescription: 'Programación para niños de Villa María del Triunfo sin salir de casa: el censo 2025 del distrito por edades, su biblioteca municipal y un tablero de tres en raya en Python.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Villa María del Triunfo, en el horario que usted escoja.',
  pageName: 'Clases de programación para niños en Villa María del Triunfo',
  webPageDescription: 'Guía para familias de Villa María del Triunfo que buscan clases de programación para niños durante el año: estructura de edades del distrito según los Censos Nacionales 2025 del INEI, la biblioteca municipal y la feria pedagógica que publica la municipalidad, el acceso a internet en Lima según el INEI y un ejercicio de Python con un tablero, escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Villa María del Triunfo, con cursos aparte para adolescentes, dictadas solo en inglés: Scratch, Python, juegos, web y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Villa María del Triunfo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#poblacion', label: 'Censo' },
    { href: '#biblioteca', label: 'Biblioteca' },
    { href: '#tablero', label: 'El tablero' },
    { href: '#edad', label: 'Edad' },
    { href: '#zona-horaria', label: 'Hora' }
  ],
  eyebrow: 'Lima Sur &middot; Villa María del Triunfo &middot; Niños de 6 a 12',
  h1: 'Clases de programación para niños en Villa María del Triunfo',
  lede: 'Villa María del Triunfo es uno de los distritos más poblados de Lima Sur, con familias repartidas en siete zonas, de José Carlos Mariátegui a Tablada de Lurín. Esta guía es para el padre o la madre que quiere que su hijo aprenda a programar con un profesor en vivo, sin bajar ni subir cerros para llegar a una academia: qué cuenta el censo, qué ofrece el distrito y cómo es una clase dictada en inglés.',
  secondaryCta: { href: '#tablero', label: 'Ver el ejercicio del tablero' },
  wa: 'Hola Modern Age Coders, vivimos en Villa María del Triunfo y buscamos clases de programación para nuestro hijo o hija. ¿Se puede reservar la clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos en el mundo &middot; un mentor que acompaña a su hijo en inglés durante todo el curso',
  spec: [
    ['Edad', 'De 6 a 12 años, y cursos de secundaria'],
    ['Lugar', 'Desde casa, en cualquiera de las siete zonas'],
    ['Qué aprende', 'Scratch, Python, juegos, web e IA'],
    ['Modalidad', 'Aula de quince a veinte, o individual'],
    ['Idioma de la clase', 'Inglés claro y paciente'],
    ['Para conocernos', 'Clase gratis, sin tarjeta']
  ],
  capsuleQ: 'En breve',
  capsule: 'Sí, un niño de Villa María del Triunfo puede aprender a programar desde casa con un profesor en vivo. Modern Age Coders le ofrece clases en vivo, en línea y en inglés pensadas para primaria, de los 6 a los 12 años, además de cursos propios para adolescentes. El mentor se conecta desde la India por videollamada, mira la pantalla del alumno, le explica con calma y se acomoda a su ritmo. Primero bloques en Scratch, luego Python, juegos, páginas web e IA. La familia decide grupo o clase individual, día y hora, y la primera sesión es gratis.',

  picks: {
    eyebrow: 'Para comenzar',
    h2: '¿Qué curso conviene a un niño de Villa María del Triunfo que nunca programó?',
    lede: 'Tres caminos de entrada, de menor a mayor edad.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'PNV / 01', title: 'Pensar antes de teclear', alt: 'Imagen del curso de razonamiento para niños pequeños', note: 'De 6 a 9 años. Patrones, secuencias y acertijos de lógica, como los que traen los pupiletras y crucigramas, para preparar la cabeza antes de programar.' },
      { course: 'scratch-programming-complete-course', code: 'PNV / 02', title: 'Scratch para crear juegos', alt: 'Imagen del curso de Scratch para niños', note: 'De 7 a 11 años. Juegos completos con escenarios, puntaje y reglas, hechos con bloques que el niño entiende y puede cambiar.' },
      { course: 'python-ai-kids-masterclass', code: 'PNV / 03', title: 'Python con proyectos', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años. El primer lenguaje escrito, con tableros, preguntas y pequeños programas que usan inteligencia artificial.' }
    ]
  },

  sections: [
    {
      id: 'poblacion',
      eyebrow: 'Lo que dice el censo',
      h2: '¿Qué dice el censo 2025 sobre los niños de Villa María del Triunfo?',
      lede: 'Que hay muchísimos chicos y que la población del distrito es joven. Villa María del Triunfo suma 485,531 habitantes, y entre las 454,209 personas censadas hay 43,185 niños de 6 a 11 años y 46,391 adolescentes de 12 a 17.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Villa María del Triunfo: personas censadas por tramo de edad y su peso en el distrito (2025)', head: ['Tramo de edad', 'Personas censadas', 'De cada 100 censados (cálculo nuestro)'], rows: [
          ['Menores de 6 años', '28,611', '6,3'],
          ['6 a 11 años (primaria)', '43,185', '9,5'],
          ['12 a 17 años (secundaria)', '46,391', '10,2'],
          ['18 a 29 años', '86,140', '19,0'],
          ['60 años y más', '60,709', '13,4']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, cuadro 3 del archivo de indicadores demográficos de Lima Metropolitana (resultados definitivos ajustados a los límites vigentes al 15 de julio de 2026), revisado por nosotros el 10 de noviembre de 2026. Omitimos los tramos de 30 a 59 años para que la tabla se lea rápido; la tercera columna es una división nuestra sobre los 454,209 censados.' },
        { kind: 'two', mt: true,
          leftH3: 'Sexto del país',
          left: [
            'Al ordenar los 1,893 distritos del cuadro nacional, Villa María del Triunfo queda sexto en población, detrás de San Juan de Lurigancho, San Martín de Porres, Ate, Comas y el distrito del Callao; dentro de la provincia de Lima es el quinto (orden nuestro con datos del INEI).',
            'Según nuestras cuentas, el distrito reúne el 4,8 % de la gente de Lima Metropolitana y el 5,3 % de sus niños censados de 6 a 11 años.'
          ],
          rightH3: 'Una pirámide, no un juicio',
          right: [
            'Uno de cada diez censados del distrito está en edad de secundaria, y casi otro tanto en edad de primaria. Eso describe edades y nada más: no nos dice cómo vive cada hogar y no lo usamos para deducirlo.',
            'El INEI estimó además 31,322 personas que no pudieron ser censadas, el 6,5 % del total según nuestro cálculo; no figuran en la tabla porque el instituto no las reparte por edad.'
          ] }
      ]
    },
    {
      id: 'biblioteca',
      eyebrow: 'Recursos del distrito',
      h2: '¿Dónde leen y hacen sus tareas los escolares de Villa María del Triunfo?',
      lede: 'Uno de esos lugares es la Biblioteca Municipal José Carlos Mariátegui. Según la municipalidad, en junio de 2026 su sala de lectura la usaban escolares para investigar y hacer tareas, y abría de lunes a viernes de 11:00 a. m. a 7:00 p. m.',
      body: [
        { kind: 'p', html: 'La nota municipal publicada en gob.pe el 7 de junio de 2026 cuenta que la biblioteca, ubicada en la zona José Carlos Mariátegui, presta libros de historia, literatura universal, poesía y textos preuniversitarios, y que recibe a vecinos de las siete zonas del distrito. Además del préstamo, organiza actividades como crucigramas, pupiletras y pintado de mandalas.' },
        { kind: 'p', html: 'En noviembre de 2025 la municipalidad informó de otra actividad escolar: la II Feria Pedagógica de Buenas Prácticas "Intercambiando saberes, transformando aprendizajes", el 21 de noviembre en la plaza Mayor del distrito, con estudiantes de seis colegios que presentaron proyectos de investigación, organizada junto con la UGEL 01. Son actividades que ocurren en pleno año escolar, no solo en vacaciones.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Del pupiletras al código', p: 'Un pupiletras es una cuadrícula de letras en filas y columnas. Buscar una palabra en horizontal, vertical o diagonal es exactamente lo que hace el programa del tablero que verá más abajo.' },
          { h3: 'Presentar un proyecto', p: 'En una feria pedagógica los chicos explican lo que investigaron. En nuestras clases, cada etapa termina igual: el niño presenta su proyecto, en inglés, ante el mentor y su familia.' },
          { h3: 'Independientes', p: 'Modern Age Coders no tiene vínculo con la Municipalidad de Villa María del Triunfo, su biblioteca, la UGEL ni ningún colegio. Mencionamos estas actividades porque son públicas y útiles.' }
        ] }
      ]
    },
    {
      id: 'tablero',
      tint: 'tint',
      eyebrow: 'Ejemplo de clase',
      h2: '¿Cómo revisa un tablero con Python un alumno de 6° de primaria?',
      lede: 'Con un juego que ya conoce: el tres en raya. El ejercicio es nuestro. El tablero se guarda como una lista de tres filas, y el programa arma las ocho líneas donde se puede ganar para ver si alguna tiene tres símbolos iguales.',
      body: [
        { kind: 'code', label: 'Un tablero de tres en raya', lang: 'Python', code: PY, note: 'El mentor muestra el tablero en pantalla y pregunta antes de ejecutar: "Who won this game, and where?" La mayoría de niños tarda un poco en ver la diagonal.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Resultado copiado tal como apareció cuando ejecutamos el archivo con Python 3. Ocho líneas revisadas: tres filas, tres columnas y dos diagonales.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Una lista de listas.</strong> <code>board[1]</code> es la fila del medio y <code>board[1][2]</code> es la casilla de la derecha en esa fila. El niño practica señalando casillas en voz alta: "row one, column two".',
          '<strong>Las columnas se construyen.</strong> El tablero no guarda columnas, así que el programa las arma tomando la misma posición de cada fila: <code>[board[r][c] for r in range(3)]</code>.',
          '<strong>Las diagonales tienen un truco.</strong> En la principal, fila y columna son iguales: <code>board[i][i]</code>. En la otra, suman 2: <code>board[i][2 - i]</code>. El niño lo descubre dibujando el tablero con los números de cada casilla.',
          '<strong>Comprobar lo que falta.</strong> El reto: borrar las dos líneas de las diagonales y volver a ejecutar. Ahora el programa dice <code>Winner: nobody</code>, aunque X ganó. Un programa que no revisa todo da respuestas equivocadas con total seguridad.',
          '<strong>Explicarlo en voz alta.</strong> El mentor pide la idea en inglés: "There are eight ways to win: three rows, three columns and two diagonals." Su hijo la repite y la cuenta con los dedos.'
        ] },
        { kind: 'p', mt: true, html: 'Este ejercicio entrena algo que va más allá del juego: preguntarse si se revisaron todos los casos. Un niño que aprende a hacerse esa pregunta la usa luego en Matemática, en un examen o cuando una página web o una herramienta de IA le da una respuesta que parece completa y no lo es.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'La edad',
      h2: '¿Es muy pronto programar a los 6 años, o muy tarde a los 12?',
      lede: 'Ni lo uno ni lo otro. A los 6 años se programa con bloques y personajes; a los 12 se puede empezar directamente con código escrito. Lo que cambia es la herramienta, no la posibilidad.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Villa María del Triunfo: censados de 6 a 12 años y cómo suele ser su clase', head: ['Años', 'Censados en el distrito', 'Grado orientativo', 'Cómo suele ser la clase (nuestro)'], rows: [
          ['6', '6,183', '1° de primaria', 'Mucho dibujo y movimiento, casi sin leer'],
          ['7', '6,744', '2° de primaria', 'Bloques que se repiten y personajes que hablan'],
          ['8', '7,253', '3° de primaria', 'Un juego con reglas y puntaje en Scratch'],
          ['9', '7,415', '4° de primaria', 'Primeros programas escritos en Python'],
          ['10', '7,758', '5° de primaria', 'Listas, bucles y juegos de preguntas'],
          ['11', '7,832', '6° de primaria', 'Tableros y cuadrículas, como el tres en raya'],
          ['12', '7,794', '1° de secundaria', 'Un proyecto propio, de la idea a la presentación']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, población censada por edades simples (cuadro 2) del archivo de Lima Metropolitana de los Censos Nacionales 2025; MINEDU, guía de "Edades normativas" para la matrícula, que mide la edad al 31 de marzo. La edad del censo es la del día de la entrevista, así que el grado se indica solo como orientación. La última columna es nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Con 12 años, sin experiencia',
          left: [
            'Un chico que llega a 1° de secundaria sin haber programado no tiene que empezar con los bloques de los pequeños. Tras una o dos clases de base, pasa a Python escrito y a proyectos que le interesen. Nuestra página de <a class="ag-inline-link" href="/programacion-para-ninos-de-12-anos">programación para niños de 12 años</a> explica ese punto de partida.',
            'A esa edad suelen avanzar rápido porque ya leen con soltura y tienen paciencia para corregir errores.'
          ],
          rightH3: 'Con 6 años, sin leer bien',
          right: [
            'Para los más pequeños la clase es casi toda visual: flechas, colores, sonidos. Las pocas palabras en inglés que aparecen van pegadas a una acción, <em>go</em>, <em>stop</em>, <em>jump</em>, y se aprenden jugando.',
            'Sugerimos que un adulto esté en la misma habitación las primeras veces; no para ayudar con el código, sino para dar tranquilidad.'
          ] }
      ]
    },
    {
      id: 'desde-casa',
      eyebrow: 'Sin traslados',
      h2: '¿Qué se gana tomando la clase desde casa en Villa María del Triunfo?',
      lede: 'Tiempo y tranquilidad. Una clase en línea no pide subir ni bajar del cerro, cruzar la Panamericana Sur ni esperar transporte: su hijo programa desde la mesa de siempre.',
      body: [
        { kind: 'p', html: 'Villa María del Triunfo limita con San Juan de Miraflores, Villa El Salvador, La Molina y Pachacámac, y muchas de sus zonas están en ladera. Los minutos de recorrido los conocen de sobra las familias del distrito, y aquí no los adivinamos. Nuestro punto es simple: la clase empieza cuando su hijo se sienta frente a la computadora, sin depender de quién pueda acompañarlo ese día.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'La capital conectada: cuatro datos de la encuesta de hogares del INEI (segundo trimestre de 2026)', head: ['Indicador', 'Lima Metropolitana', 'Comentario'], rows: [
          ['Hogares con internet', '84,7 %', 'Más de ocho de cada diez'],
          ['Crecimiento frente a un año antes', '4,3 puntos', 'El mayor aumento entre las áreas que mide el INEI'],
          ['Hogares con computadora', '53,3 %', 'Un equipo compartido es suficiente'],
          ['Residentes desde los 6 años que navegan en internet', '92,4 %', 'Casi toda la población']
        ] },
        { kind: 'source', html: 'Fuente: INEI, informe trimestral "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", abril a junio de 2026, con datos preliminares de la Encuesta Nacional de Hogares; consultado por nosotros en noviembre de 2026. En esta encuesta el Callao forma parte de Lima Metropolitana, y el INEI no baja al nivel de distrito. Los comentarios son nuestros.' },
        { kind: 'two', mt: true,
          leftH3: 'El equipo justo',
          left: [
            'Una laptop o una PC con teclado, cámara, micrófono y audífonos. No hace falta una máquina nueva ni potente: Scratch y Python corren en equipos sencillos, y el mentor ayuda a instalarlos en la primera clase.',
            'Si la computadora de la casa la usan varios, la clase se agenda a la hora en que esté libre.'
          ],
          rightH3: 'El lugar de la clase',
          right: [
            'Una mesa estable, buena luz y poco ruido de fondo. Con audífonos, el niño capta con más claridad el inglés del mentor y el mentor lo escucha a él con claridad.',
            'El celular no sirve para programar, pero sí para que usted reciba el resumen por WhatsApp.'
          ] },
        { kind: 'p', mt: true, html: 'Si su casa queda hacia el lado de La Molina, puede que le sirva leer cómo planteamos el verano en <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-la-molina-lima">esa guía de vacaciones útiles</a>; es el mismo tipo de clase y continúa sin cambios cuando vuelve el colegio.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'El idioma',
      h2: '¿Qué nivel de inglés necesita un niño para empezar?',
      lede: 'Ninguno en especial. Basta con que quiera escuchar e intentar. El mentor habla en frases cortas, usa la pantalla para mostrar cada palabra y repite de otro modo cuando el niño se queda callado.',
      body: [
        { kind: 'p', html: 'Durante las primeras semanas el niño escucha más de lo que habla, y eso está bien. Poco a poco empieza a responder con palabras sueltas, <em>yes</em>, <em>here</em>, <em>row two</em>, y luego con frases. En programación, cada palabra en inglés tiene un efecto en la pantalla, y por eso se aprende rápido: el niño ve lo que significa.' },
        { kind: 'p', html: 'El EF EPI 2025 de EF Education First, el índice anual de dominio del inglés, asigna a Lima 555 puntos, dentro de la franja alta que empieza en 550, mientras el Perú en conjunto se queda en moderado. Quienes alimentan ese índice son adultos que eligen rendir el test de EF, no escolares. Lo mencionamos porque muestra que en la ciudad el inglés hablado ya es útil, y practicarlo desde primaria es una ventaja real.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Adolescentes',
      h2: '¿Qué opciones hay para los adolescentes de 12 a 17 años del distrito?',
      lede: 'Cursos con otro ritmo. El censo encontró en Villa María del Triunfo 46,391 adolescentes de 12 a 17 años, y para ellos el camino no pasa por bloques sino por código escrito y proyectos con propósito.',
      body: [
        { kind: 'p', html: 'En secundaria las opciones se abren: Python en serio, juegos y sitios con JavaScript, Java, análisis de datos o un hackatón para el que se entrena en equipo. El mentor deja de llevarlo de la mano y empieza a discutir decisiones con él, y el inglés de esas conversaciones sube de nivel. Si quiere ver la oferta para esa edad, nuestra página de <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> la ordena por intereses.' },
        { kind: 'p', html: 'Sobre inteligencia artificial: varias herramientas tienen una edad mínima o piden el permiso de un padre o madre antes de los 18 años. Con alumnos menores usamos únicamente lo que corresponde a su edad, y siempre como apoyo para razonar, no como atajo para entregar trabajos.' }
      ]
    },
    {
      id: 'zona-horaria',
      eyebrow: 'Horario',
      h2: '¿Qué hora es en la India cuando en Villa María del Triunfo es de tarde?',
      lede: 'Ya de madrugada. Entre Lima y la India hay diez horas y treinta minutos de distancia que no varían en enero ni en julio, porque allá y acá el reloj se queda quieto todo el año.',
      body: [
        { kind: 'p', html: 'El Perú se mantiene en UTC-5, sin adelantar el reloj desde 1994; la India, en UTC+5:30. Por ejemplo, si su hijo se conecta a las 2:00 de la tarde en Villa María del Triunfo, para el mentor son las 12:30 de la madrugada del día siguiente; si se conecta a las 8:00 de la mañana, allá son las 6:30 de la tarde del mismo día. Son ejemplos de cálculo, no turnos programados.' },
        { kind: 'p', html: 'La conversión no la tiene que hacer usted: el formulario de la clase gratis presenta las opciones en hora de Perú y el mentor las recibe en la suya. La elección suele depender del turno escolar del niño y de los horarios de trabajo de la familia.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se ve el avance de un niño en programación?',
    lede: 'Cinco pasos nuestros, del primer bloque al primer proyecto completo.',
    table: { caption: 'Cinco pasos de avance para niños de primaria (nuestros)', head: ['Paso', 'En la clase', 'En la casa'], rows: [
      ['1. Mueve', 'Lleva un personaje de un punto a otro', 'Le enseña cómo se mueve su personaje'],
      ['2. Repite', 'Usa un bucle en vez de copiar bloques', 'Le muestra un dibujo hecho con pocas órdenes'],
      ['3. Ubica', 'Señala casillas por fila y columna, como en el tablero', 'Le explica dónde está cada cosa'],
      ['4. Revisa todo', 'Comprueba todos los casos antes de dar una respuesta', 'Le cuenta qué caso casi se le escapa'],
      ['5. Presenta', 'Termina un proyecto y lo explica en inglés', 'Se lo explica a usted']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Un mes con poco avance visible no es un mal mes: muchas veces el niño está entendiendo algo que luego aparece de golpe.',
      'Pídale que le enseñe lo que hizo; enseñar es la prueba más clara de que entendió.'
    ] },
    right: { h3: 'Para los chicos', ps: [
      'Antes de decir "ya está", pregúntese si revisó todos los casos.',
      'Dibuje en papel lo que quiere programar; el código sale más fácil después.'
    ] }
  },

  catalogue: {
    eyebrow: 'Otros cursos',
    h2: '¿Qué más pueden aprender los chicos de Villa María del Triunfo?',
    lede: 'Otros nueve programas, dictados igual que los anteriores: en vivo, hablados en inglés, para un aula pequeña o para un solo alumno.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 9 años', courses: [
        { code: 'PNV / INI / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques, juegos y apps', blurb: 'La base con bloques, de las animaciones a una app.' },
        { code: 'PNV / INI / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programado', blurb: 'Construir y automatizar dentro de su juego favorito.' },
        { code: 'PNV / INI / 03', slug: 'mental-maths-mastery-kids', title: 'Matemática mental', blurb: 'Sentido del número para primaria, sin memorizar trucos.' }
      ] },
      { num: 'II', h3: 'Crear con código', sub: 'De 8 a 12 años', courses: [
        { code: 'PNV / CODIGO / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos de Roblox', blurb: 'Mundos con reglas propias escritas en Luau.' },
        { code: 'PNV / CODIGO / 02', slug: 'kids-ai-web-development-course', title: 'Una página web propia', blurb: 'HTML y CSS para publicar algo hecho por el niño.' },
        { code: 'PNV / CODIGO / 03', slug: 'ai-literacy-for-kids-course', title: 'Inteligencia artificial explicada', blurb: 'Qué hace una IA por dentro y cuándo dudar de ella.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PNV / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'Funciones, archivos y proyectos de verdad.' },
        { code: 'PNV / SEC / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Preparación para hackatón', blurb: 'Doce semanas para construir y presentar en equipo.' },
        { code: 'PNV / SEC / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java desde cero', blurb: 'Objetos, clases y programas de buen tamaño.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Así trabajamos',
    h2: '¿Cómo se organizan las clases para una familia de Lima Sur?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'De mañana', l: 'Si el colegio de su hijo funciona en la tarde.' },
      { time: 'Media tarde', l: 'Cuando ya volvió, comió y terminó la tarea.' },
      { time: 'Sábado', l: 'Para quien tiene la semana muy cargada.' }
    ],
    cells: [
      { h3: 'Un mentor de confianza', p: 'Acompaña a su hijo de la primera a la última clase del curso.' },
      { h3: 'Manos en el teclado', p: 'Es el niño quien escribe; el mentor guía con preguntas.' },
      { h3: 'Práctica entre clases', p: 'Un reto pequeño para pensar, imposible de copiar.' },
      { h3: 'Aviso a la familia', p: 'Unas líneas con lo aprendido y lo que sigue.' },
      { h3: 'Sin atarse', p: 'Mensualidad sin contrato: se pausa cuando lo necesite.' },
      { h3: 'Grupo o solo', p: 'Un aula de quince a veinte niños parecidos en edad, o su hijo solo.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos que siguieron aprendiendo',
  projectsLede: 'Lo que aparece abajo lo hicieron estudiantes con más tiempo de clases; es una idea de hasta dónde se puede llegar. Más ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas que familias y alumnos escribieron en Google, conservadas en inglés, su idioma original.',

  fees: {
    h2: '¿Qué cuesta la mensualidad para una familia de Villa María del Triunfo?',
    lede: 'El precio de cada plan aparece abajo en dólares estadounidenses. El pago es con tarjeta y la conversión a su moneda corre por cuenta de su banco, con el tipo de cambio de ese día, así que el cargo final puede variar algo.',
    free: ['Primera clase sin costo', 'Recomendación del punto de partida', 'Sin pedir tarjeta'],
    group: ['Quince a veinte niños de edad parecida', 'El mismo mentor todo el curso', 'Dos clases en vivo a la semana', 'Se paga mes a mes'],
    one: ['Clases solo para su hijo', 'Contenido a su medida', 'Horario elegido por usted']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en Villa María del Triunfo: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Son en inglés de principio a fin, en vivo y por internet, y esa es la ventaja que buscan muchas familias de Villa María del Triunfo: su hijo programa y, en la misma hora, se anima a hablar otro idioma. El mentor habla despacio y se ajusta al ritmo del niño. El EF EPI 2025 ubica a Lima en nivel alto de inglés, con 555 puntos.' },
      { q: '¿Tienen local en Villa María del Triunfo?', a: 'No. No tenemos locales en el Perú: la clase se toma desde casa y el mentor participa por videollamada desde la India, así que ningún miembro de la familia tiene que salir.' },
      { q: '¿Cuántos niños hay en Villa María del Triunfo según el censo?', a: 'Los Censos Nacionales 2025 del INEI registraron 43,185 niños de 6 a 11 años y 46,391 adolescentes de 12 a 17 entre los censados del distrito, que en total tiene 485,531 habitantes.' },
      { q: '¿Desde qué edad se puede empezar?', a: 'Desde los 6 años, edad de ingreso a 1° de primaria según el MINEDU. Los más pequeños trabajan con bloques y dibujos; alrededor de los 9 años pasan a escribir en Python.' },
      { q: '¿Mi hijo necesita hablar inglés?', a: 'No. El mentor usa frases sencillas, muestra todo en pantalla y repite lo necesario. Con unas semanas de práctica el niño sigue la clase sin problema.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India va diez horas y media adelante de Perú: las 8:00 a. m. en Lima son las 6:30 p. m. para el mentor.' },
      { q: '¿Qué computadora hace falta?', a: 'Una laptop o PC sencilla con teclado, cámara y micrófono, más audífonos e internet estable. No hace falta un equipo potente; el celular no sirve para programar.' },
      { q: '¿Están vinculados a la municipalidad o a la UGEL?', a: 'No. Somos una academia independiente, sin relación con la Municipalidad de Villa María del Triunfo, su biblioteca, la UGEL 01 ni ningún colegio. Citamos lo que la municipalidad publicó en gob.pe como información para las familias.' },
      { q: '¿Cómo se paga?', a: 'Una vez al mes, con tarjeta y en dólares estadounidenses; su banco hace la conversión. La clase de prueba es gratis y no pide datos de pago.' },
      { q: '¿Entregan certificado?', a: 'Al terminar cada curso entregamos un certificado de finalización propio de Modern Age Coders. No es un documento oficial del MINEDU ni cuenta como nota escolar.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más para leer',
    h2: 'Otras páginas para familias de Lima Sur',
    lede: 'Las páginas con título en inglés están escritas en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos en el Perú, de primaria a adultos.' },
      { href: '/robotica-o-programacion-para-ninos', label: 'Robótica o programación para niños', p: 'Qué conviene aprender primero y por qué.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Las edades mínimas de las herramientas de IA.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase en vivo, paso a paso.' },
      { href: '/courses', label: 'All courses', p: 'Todos nuestros cursos en un solo lugar.' }
    ]
  },

  start: {
    h2: 'Reserve la primera clase desde Villa María del Triunfo',
    lede: 'Elija fecha y hora según el reloj de Perú. En esa sesión el mentor conocerá a su hijo, le propondrá un reto a su medida y luego le dirá a usted qué curso y qué modalidad le recomendamos.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre cómo enseñamos, y <a class="ag-inline-link" href="/courses">All courses</a>, con todos los cursos; las dos páginas están en inglés.',
    note: 'Clases en vivo, en línea y en inglés, con mentores que viven en la India. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Primeros cursos', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Pensar antes de teclear' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con proyectos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/ai-tools-age-guide', label: 'IA y edades' },
        { href: '/student-labs', label: 'Proyectos de alumnos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'Tres filas, tres columnas, dos diagonales'
  },

  personalityCss: `
.ag-root.ag-pnv .ag-hero h1 { max-width: 21ch; letter-spacing: -0.01em; }
.ag-root.ag-pnv .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-pnv .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-pnv .ag-table th { text-transform: none; }
.ag-root.ag-pnv .ag-steps li { margin-bottom: 0.35rem; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de Villa María del Triunfo notes on gob.pe (7 June 2026 library note, 22 November 2025 teaching fair note), EF EPI 2025, tzdata. Read 10 November 2026. Example code, class descriptions and steps are our own.',
    localProject: 'A noughts-and-crosses checker in Python for an 11-year-old: the board is a list of three rows, the program builds three rows, three columns and two diagonals and prints Lines checked: 8 and Winner: X (main diagonal); removing the diagonals makes it print Winner: nobody. Run with python3 -I. Lesson family: two-dimensional lists, rows, columns and diagonals.',
    requiredMentions: ['Lines checked: 8', 'Winner: X', 'There are eight ways to win', 'Biblioteca Municipal José Carlos Mariátegui', '43,185 niños de 6 a 11 años', '46,391 adolescentes de 12 a 17', 'De cada 100 censados', 'Tres filas, tres columnas, dos diagonales', 'Intercambiando saberes, transformando aprendizajes'],
    sources: [
      { claim: 'VMT population 485,531 (censada 454,209, omitida 31,322); age groups; single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Biblioteca Municipal José Carlos Mariátegui: reading room used by schoolchildren, Monday to Friday 11 a. m. to 7 p. m., seven zones (7 June 2026).', url: 'https://www.gob.pe/institucion/munivillamariadeltriunfo/noticias/1403538-biblioteca-municipal-jose-carlos-mariategui-promueve-la-lectura-y-el-aprendizaje-en-vmt' },
      { claim: 'II Feria Pedagógica de Buenas Prácticas, 21 November 2025, plaza Mayor, students of six schools, with UGEL 01.', url: 'https://www.gob.pe/institucion/munivillamariadeltriunfo/noticias/1298189-vmt-impulsa-la-creatividad-escolar-en-la-ii-feria-pedagogica-de-buenas-practicas' },
      { claim: 'Lima households with internet 84.7% (+4.3 points), with a computer 53.3%; internet use 92.4% (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band; Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any link with the Municipalidad de Villa María del Triunfo, its library, UGEL 01 or any school: none; school names left out.',
      'Travel times on hillside routes or the Panamericana Sur: refused; no primary source.',
      'Income or class statements about the district or any zone: refused; only census ages and counts.',
      'Adding the age bands into a school-age total: refused (published parts printed separately).',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

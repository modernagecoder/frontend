// SHIP: district (kids, year-round) | Lurigancho-Chosica: kids' coding all year at home, no trip into central Lima | binary: bin(), zfill and int(text, 2); five fingers count to 31, a sixth for 32
'use strict';
// Clases de programación para niños en Lurigancho (Chosica), Lima (ag- Spanish district door, Peru cluster row PE209, P6,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Lurigancho, the district everyone calls Chosica (not San Juan de Lurigancho), who searches for
// year-round coding classes for a child of 6 to 12. Spine: Lurigancho is Chosica and its valley localities, not SJL
// (INEI rows side by side); how many children of each primaria age the 2025 census counted; what the municipality itself
// publishes through the year (book fair, Cajamarquilla, workshops); English-medium classes; why a class at home suits a
// long valley district (no invented travel figures); where to start by age, with a note for adolescentes; one original
// Python lesson on binary numbers with five fingers; Peru to India clock conversions. No income or class assumptions.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// lurigancho-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-
//    metropolitana.xlsx, the copy saved for the SJL page, 856800 bytes). Nota: "Los datos censales se han actualizado al 15
//    de julio del año 2026". CUADRO Nº 1: "DISTRITO LURIGANCHO | 308611 | 153970 | 154641 | 290674 | ... | 17937";
//    "DISTRITO SAN JUAN DE LURIGANCHO | 1176422"; "LIMA METROPOLITANA | 10141775". CUADRO Nº 3: "DISTRITO LURIGANCHO |
//    290674 | 20601 | 28562 | 29799 | 55114 | 70477 | 50668 | 35453" (0 a 5, 6 a 11, 12 a 17, 18 a 29, 30 a 44, 45 a 59, 60
//    y más). CUADRO Nº 2 (edades simples, total = urbana, rural 0): 6 años 4097, 7 años 4515, 8 años 4789, 9 años 5028,
//    10 años 5151, 11 años 4982, 12 años 5099; district row "290674 ... 290674 ... 0 0 0" (all urban).
//  Municipalidad Distrital de Lurigancho on gob.pe (institucion/munilurigancho), its own notes:
//    n-1426878 (7 Aug 2026): "Tercera Feria del Libro Internacional en Chosica desde el 09 al 18 de octubre en La Plaza de
//    las Banderas"; "Argentina, quien es su país invitado de honor"; "10 días intensos de cultura".
//    n-1351632 (11 Feb 2026): "25° aniversario de la Declaratoria como Patrimonio Cultural de la Nación del Sitio
//    Arqueológico de Cajamarquilla"; "más de 3,000 visitantes"; "más de 65 niños del Taller de Verano Arqueológico".
//    n-1331907 (12 Jan 2026): "se han inscrito a más de 700 niños y adolescentes de Chosica"; "más de 800 niños se han sumado
//    a los talleres en Huampaní, Ñaña, Carapongo, Huachipa, Nievería, Cajamarquilla y Cerro Camote"; disciplines "fútbol,
//    vóleibol, básquetbol, dibujo, pintura, natación". Names of officials and guests left out on purpose.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7%
//    de los hogares disponía del servicio"; "Este porcentaje alcanzó el 53,3% en Lima Metropolitana"; "el mayor nivel de uso
//    de Internet se registró en Lima Metropolitana, con un 92,4%"; "el 74,3% cuenta con una sola unidad"; "1/ Lima
//    Metropolitana incluye la Provincia Constitucional del Callao".
//  CNEB (FACTS 39, 40): secundaria "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3"; "Educación para el trabajo
//    2 2 2 2 2"; no computing area in the table. Edades normativas (FACTS 13): "Se considera la edad normativa al 31 de marzo".
//  EF EPI 2025 Peru page (MARKET 1.3): "Lima 555", band high from 550; Peru 519.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 308611 / 1176422 = 0.26 (SJL has about 3.8 times the population); 308611 / 10141775 =
//    3.0 % of Lima Metropolitana; 28562 / 290674 = 9.8 %; 29799 / 290674 = 10.3 %; 17937 / 308611 = 5.8 % omitted;
//    4097+4515+4789+5028+5151+4982+5099 = 33661 children aged 6 to 12; 700 + 800 = 1,500 matches the note's own total.
// Our own example (dedos.py in the src-pages folder), run with python3 -I, exact output:
//    3 -> 00011 / 10 -> 01010 / 19 -> 10011 / 31 -> 11111 / All five fingers up: 31 / 32 needs a sixth finger: 100000
// Neighbouring places named in plain text only (San Juan de Lurigancho, Ate, Chaclacayo).
// Lesson family: binary numbers; bin() and zfill(5) turn a number into five fingers, int(text, 2) reads them back.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'for number in [3, 10, 19, 31]:',
  '    fingers = bin(number)[2:].zfill(5)',
  "    print(number, '->', fingers)",
  '',
  "print('All five fingers up:', int('11111', 2))",
  "print('32 needs a sixth finger:', bin(32)[2:])"
].join('\n');

const OUT = [
  '3 -> 00011',
  '10 -> 01010',
  '19 -> 10011',
  '31 -> 11111',
  'All five fingers up: 31',
  '32 needs a sixth finger: 100000'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Lurigancho (Chosica)' },
  slug: 'clases-de-programacion-para-ninos-lurigancho-lima',
  code: 'pnl',
  accent: '#434D1E',
  accentRationale: 'Lurigancho (Chosica): a deep valley olive #434D1E, the colour of the dry slopes above the Rímac river at Chosica, set apart from the brighter greens of the other Lima district doors; allocated in alloc.tsv (contrast 7.35 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Lurigancho (Chosica)',
  title: 'Clases de programación para niños en Lurigancho, Chosica',
  description: 'Clases de programación para niños de 6 a 12 años en Lurigancho-Chosica: en vivo, en línea y en inglés, todo el año, en grupo o individuales y desde casa.',
  ogDescription: 'Programación para niños de Chosica, Ñaña, Huachipa o Carapongo sin bajar a Lima: el censo 2025 del distrito, por dónde empezar según la edad y un reto en Python con los dedos de la mano.',
  twitterDescription: 'Clases de programación para niños de Lurigancho-Chosica, en vivo y en inglés, desde casa y a la hora que elija.',
  pageName: 'Clases de programación para niños en Lurigancho (Chosica)',
  webPageDescription: 'Guía para familias de Lurigancho-Chosica que buscan clases de programación para niños de 6 a 12 años durante todo el año: la diferencia con San Juan de Lurigancho, los niños por edad según los Censos Nacionales 2025 del INEI, lo que publica la municipalidad, el acceso a internet en Lima Metropolitana según el INEI, por dónde empezar según la edad y un ejercicio de Python sobre números binarios escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Lurigancho-Chosica, dictadas solo en inglés: Scratch, Python, Roblox y proyectos de IA, en clase grupal o individual, cualquier semana del año y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Lurigancho',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#chosica', label: 'Chosica' },
    { href: '#censo', label: 'Censo 2025' },
    { href: '#casa', label: 'Desde casa' },
    { href: '#binario', label: 'Reto en Python' },
    { href: '#hora', label: 'Horario' }
  ],
  eyebrow: 'Lima &middot; Lurigancho-Chosica &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Lurigancho (Chosica)',
  lede: 'Lurigancho es el distrito de Chosica, Ñaña, Huachipa, Carapongo y Cajamarquilla, valle arriba por el río Rímac. Si busca clases de programación para su hijo o hija que duren todo el año escolar y no obliguen a nadie a bajar a Lima, aquí encontrará qué dice el censo de 2025 sobre los niños del distrito, cómo es una clase en inglés, por dónde empezar según la edad y un primer reto en Python.',
  secondaryCta: { href: '#binario', label: 'Ver el reto de los cinco dedos' },
  wa: 'Hola Modern Age Coders, somos de Lurigancho-Chosica y buscamos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; el mismo mentor todo el curso, hablando en inglés claro',
  spec: [
    ['Para quién', 'Niños de 6 a 12 años, de 1° a 6° de primaria; adolescentes en otro grupo'],
    ['Dónde', 'En su casa, en cualquier zona de Lurigancho-Chosica'],
    ['Cuándo', 'Todo el año, en época de clases y en vacaciones'],
    ['Idioma', 'Siempre en inglés, con un mentor paciente'],
    ['Formato', 'Grupo de quince a veinte niños o clases individuales'],
    ['Primera clase', 'Gratis, sin tarjeta y sin compromiso']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí. Modern Age Coders enseña a programar a chicos de 6 a 12 años que viven en Lurigancho-Chosica, con clases en vivo, en línea y en inglés durante todo el año. Su hijo programa desde la computadora de su casa con un mentor que vive en la India, habla despacio y espera a que el niño entienda. Los más chicos arrancan con Scratch y bloques; desde los 9 años se escribe Python, se crean juegos en Roblox y pequeños proyectos de IA. La familia decide entre grupo o clases a solas, el día y la hora, y la sesión de prueba es gratuita.',

  picks: {
    eyebrow: 'Cursos para empezar',
    h2: '¿Qué curso le conviene a un niño de Chosica que empieza de cero?',
    lede: 'Tres puertas de entrada según la edad y lo que a su hijo ya le gusta: bloques para los más pequeños, Python para el que ya teclea rápido y videojuegos para quien llega por Roblox.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PNL / 01', title: 'Scratch desde el primer bloque', alt: 'Imagen del curso completo de Scratch para niños', note: 'De 6 a 10 años. Historias animadas, juegos de atrapar y laberintos hechos con bloques de colores. Su hijo aprende qué es una secuencia, una repetición y una condición antes de escribir una sola línea.' },
      { course: 'python-ai-kids-masterclass', code: 'PNL / 02', title: 'Python e inteligencia artificial para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'Desde los 9 años. El primer código escrito con el teclado: números, palabras, preguntas y pequeños proyectos con IA, como el reto de los cinco dedos que verá más abajo.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PNL / 03', title: 'Crear juegos en Roblox', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Desde los 8 años. En Roblox Studio su hijo programa puertas que se abren, monedas que suman puntos y trampas que reinician el nivel, y entiende cada línea que escribe.' }
    ]
  },

  sections: [
    {
      id: 'chosica',
      eyebrow: 'Primero, el nombre',
      h2: '¿Lurigancho y San Juan de Lurigancho son el mismo distrito?',
      lede: 'No. Son dos distritos distintos de Lima Metropolitana, uno al lado del otro. Lurigancho es el que la gente llama Chosica; San Juan de Lurigancho es otro distrito, con su propia municipalidad, y en el censo de 2025 tiene casi cuatro veces más habitantes.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Lurigancho y San Juan de Lurigancho en el censo de 2025', head: ['Dato del INEI', 'Lurigancho (Chosica)', 'San Juan de Lurigancho'], rows: [
          ['Población total, con la omitida', '308,611', '1,176,422'],
          ['Población censada', '290,674', '1,124,772'],
          ['Población omitida por el censo', '17,937', '51,650'],
          ['Censados con 6 a 11 años (edad de primaria)', '28,562', '107,050'],
          ['Censados con 12 a 17 años (edad de secundaria)', '29,799', '110,134']
        ] },
        { kind: 'source', html: 'Fuente: Censos Nacionales 2025 del INEI, cuadros 1 y 3 del archivo Excel para Lima Metropolitana (cifras puestas al día por el INEI el 15 de julio de 2026). Lo bajamos y lo revisamos nosotros; las filas de edad solo incluyen a quien efectivamente fue censado.' },
        { kind: 'p', mt: true, html: 'La confusión es frecuente en los buscadores: muchas familias escriben "Lurigancho" y reciben resultados de San Juan de Lurigancho, y al revés. En esta página hablamos solo del distrito de Lurigancho, cuya municipalidad firma sus notas en gob.pe como Municipalidad de Lurigancho-Chosica. Si usted vive en San Juan de Lurigancho, tenemos una guía aparte sobre <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-juan-de-lurigancho-lima">vacaciones útiles de programación en San Juan de Lurigancho</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Un distrito de muchos centros',
          left: [
            'En su nota del 12 de enero de 2026 sobre los talleres de verano, la municipalidad separa a los niños del casco urbano de Chosica de los que se inscribieron en Huampaní, Ñaña, Carapongo, Huachipa, Nievería, Cajamarquilla y Cerro Camote. Es su propia forma de describir el distrito: un casco urbano y varias zonas a lo largo del valle.',
            'Por eso, cuando una familia de Huachipa y otra de Chosica buscan lo mismo, no buscan lo mismo cerca. Una clase en línea borra esa diferencia: el mentor está a la misma distancia de todas las casas del distrito.'
          ],
          rightH3: 'Todo el distrito es urbano para el INEI',
          right: [
            'En el cuadro 2 del censo, que separa a la población urbana de la rural, Lurigancho tiene sus 290,674 personas censadas en el área urbana y cero en el área rural.',
            'El dato no habla de distancias ni de la situación de ningún hogar, y no lo usamos para eso. Solo confirma que, para el INEI, Chosica y las demás zonas del valle forman un mismo distrito urbano dentro de Lima Metropolitana, vecino de San Juan de Lurigancho, Ate y Chaclacayo.'
          ] }
      ]
    },
    {
      id: 'censo',
      eyebrow: 'Censo 2025',
      h2: '¿Cuántos niños en edad de primaria viven en Lurigancho?',
      lede: 'El censo de 2025 contó 33,661 niños de 6 a 12 años en el distrito, sumando las edades simples que publica el INEI (suma nuestra). Es la edad de nuestras clases para niños, de 1° a 6° de primaria y el primer año de secundaria.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Niños censados en Lurigancho por edad simple, de 6 a 12 años (Censos Nacionales 2025)', head: ['Edad', 'Niños censados', 'Grado habitual a esa edad'], rows: [
          ['6 años', '4,097', '1° de primaria'],
          ['7 años', '4,515', '2° de primaria'],
          ['8 años', '4,789', '3° de primaria'],
          ['9 años', '5,028', '4° de primaria'],
          ['10 años', '5,151', '5° de primaria'],
          ['11 años', '4,982', '6° de primaria'],
          ['12 años', '5,099', '1° de secundaria'],
          ['Total de 6 a 12 años', '33,661', 'Suma nuestra de las filas']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, cuadro 2 del libro de indicadores demográficos de Lima Metropolitana (población censada por edades simples), actualizado al 15 de julio de 2026. La tercera columna sigue la edad normativa del MINEDU, que "se considera al 31 de marzo de cada año"; un niño que cumple años después de esa fecha puede estar un grado atrás. El total es nuestro.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que muestran las cifras',
          left: [
            'Casi uno de cada diez censados del distrito tiene entre 6 y 11 años (9,8 %), y otro tanto, un poco más, entre 12 y 17 (10,3 %), según nuestros cálculos con el cuadro 3. Lurigancho reúne el 3,0 % de toda la población de Lima Metropolitana.',
            'Cada edad tiene entre cuatro mil y cinco mil niños. La edad con más niños censados es la de 10 años, con 5,151: justo la edad en que muchos pasan de los bloques al código escrito.'
          ],
          rightH3: 'Lo que no muestran',
          right: [
            'El censo dice cuántos niños hay y de qué edad. No dice en qué colegio estudian, cuánto saben de computadoras ni qué les gusta, y nosotros no deducimos nada de eso.',
            'El INEI también estima que 17,937 personas del distrito no fueron censadas, el 5,8 % del total según nuestro cálculo. Por eso las edades se leen como un piso, no como un conteo exacto de todos los niños del valle.'
          ] }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Idioma de las clases',
      h2: '¿Cómo aprende a programar en inglés un niño que todavía no habla inglés?',
      lede: 'Con frases cortas, pantalla compartida y mucha repetición. Todas nuestras clases son en vivo y en inglés, y el mentor está acostumbrado a niños peruanos que llegan entendiendo poco y se van, al cabo de unas semanas, explicando su propio juego.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ver antes que oír', p: 'El mentor no describe el código en el aire: lo muestra. Señala el bloque o la línea en la pantalla, la ejecuta y deja que el niño vea qué cambió. La palabra en inglés llega pegada a una imagen.' },
          { h3: 'Pocas palabras, muchas veces', p: 'En las primeras clases se repiten siempre las mismas: <em>run</em>, <em>stop</em>, <em>move</em>, <em>repeat</em>, <em>if</em>. Cuando el niño ya las reconoce, el mentor suma otras. Nadie le pide memorizar una lista.' },
          { h3: 'Responder como pueda', p: 'Si su hijo contesta con una sola palabra, con un gesto o en castellano, la respuesta vale. El mentor la devuelve completa en inglés y sigue. Con el tiempo, el niño empieza a contestar con frases enteras.' }
        ] },
        { kind: 'p', mt: true, html: 'El inglés no es un obstáculo inventado por nosotros: viene dentro del propio código. Los lenguajes que enseñamos están escritos con palabras inglesas como <code>print</code>, <code>while</code> o <code>return</code>. Cuando su hijo escucha esas palabras dichas en voz alta, dentro de una conversación real, comprende más rápido por qué la máquina responde como responde.' },
        { kind: 'p', html: 'En el índice EF EPI 2025, armado con los resultados de mayores de edad que hicieron el test en línea de EF, Lima obtuvo 555 puntos, dentro del nivel que EF llama alto (desde 550), mientras el Perú en conjunto tuvo 519. El dato no describe a los niños, pero sí al entorno: en Lima hay muchas personas que leen y escuchan inglés, y la práctica oral desde pequeños es la que más cuesta conseguir fuera de una clase hablada.' }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'Vida del distrito',
      h2: '¿Qué actividades publica la Municipalidad de Lurigancho-Chosica para niños?',
      lede: 'En sus notas de gob.pe de 2026 aparecen tres tipos de actividad: talleres deportivos y artísticos en verano, cultura e historia en Cajamarquilla y una feria del libro en octubre. Ninguna de ellas es una clase de programación, y nuestras clases no compiten con ellas.',
      body: [
        { kind: 'table', numCols: [], caption: 'Actividades descritas por la propia municipalidad en gob.pe (2026)', head: ['Fecha de la nota', 'Actividad', 'Lo que dice la nota'], rows: [
          ['12 de enero de 2026', 'Talleres Municipales de Verano 2026', 'Más de 700 niños y adolescentes inscritos en Chosica y más de 800 en Huampaní, Ñaña, Carapongo, Huachipa, Nievería, Cajamarquilla y Cerro Camote'],
          ['11 de febrero de 2026', 'Cajamarquilla Vive 2026', '25° aniversario de la declaratoria del sitio arqueológico como Patrimonio Cultural de la Nación; más de 3,000 visitantes y más de 65 niños del Taller de Verano Arqueológico'],
          ['7 de agosto de 2026', 'Tercera Feria del Libro Internacional en Chosica', 'Del 9 al 18 de octubre de 2026 en la Plaza de las Banderas, con Argentina como país invitado de honor']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Lurigancho, notas publicadas en gob.pe/institucion/munilurigancho el 12 de enero, el 11 de febrero y el 7 de agosto de 2026, leídas por nosotros el 10 de noviembre de 2026. Omitimos a propósito los nombres de autoridades e invitados.' },
        { kind: 'p', mt: true, html: 'Los talleres de la nota de enero son fútbol, vóleibol, básquetbol, dibujo, pintura y natación, entre otros: actividades presenciales, de equipo y al aire libre, que un niño necesita tanto como cualquier clase. La feria del libro y el taller arqueológico de Cajamarquilla van por el lado de la lectura y la historia del propio valle.' },
        { kind: 'p', html: 'La programación cabe al lado de todo eso, porque no exige trasladarse ni reservar un local. Hay familias que reparten así la semana: deporte o arte en el barrio y, aparte, dos sesiones de programación por videollamada, en el horario que les quede libre. Entre Modern Age Coders y la Municipalidad de Lurigancho-Chosica no existe relación alguna; sus notas aparecen aquí solo para describir el distrito.' },
        { kind: 'p', html: 'Una idea para los niños de Chosica: después de la feria del libro de octubre, convertir el libro favorito en un juego de preguntas en Scratch o en Python. Es un proyecto nuestro, pensado para practicar listas y condiciones con algo que el niño ya conoce bien.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde casa',
      h2: '¿Conviene una clase por internet si uno vive en Chosica?',
      lede: 'Porque lo difícil de una clase semanal no suele ser la clase, sino llegar a ella. Con una clase en vivo por videollamada, su hijo programa en su propia mesa, sea en Chosica, en Ñaña o en Huachipa, y la semana no depende de quién puede llevarlo.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Cómo se conectan las casas de Lima Metropolitana según la ENAHO (abril a junio de 2026)', head: ['Medición del INEI', 'Porcentaje'], rows: [
          ['Hogares conectados a internet', '84,7 %'],
          ['Hogares que tienen computadora, una o más', '53,3 %'],
          ['Uso de internet, personas desde los 6 años', '92,4 %'],
          ['Entre los hogares del país con computadora, los que tienen solo una', '74,3 %']
        ] },
        { kind: 'source', html: 'Fuente: boletín trimestral del INEI sobre tecnologías de la información en los hogares, segundo trimestre de 2026, con datos preliminares de la ENAHO. Para el INEI, Lima Metropolitana incluye la Provincia Constitucional del Callao. No hay cifras por distrito en este boletín, así que no las inventamos para Lurigancho.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que pide una clase en línea',
          left: [
            'Hace falta poco: una máquina con teclado de verdad, cámara, micrófono y audífonos, conectada a un internet que no se caiga a cada rato. Según el INEI, en Lima Metropolitana más de la mitad de los hogares tiene computadora y casi todos usan internet.',
            'Si en su casa hay una sola computadora, como en tres de cada cuatro hogares con computadora del país, basta con reservarla para la hora de clase. Un celular sirve para mirar, no para programar.'
          ],
          rightH3: 'Lo que se ahorra',
          right: [
            'No hay que calcular el trayecto ni esperar a nadie a la salida. Ese tiempo se queda en casa: para la tarea del colegio, para jugar o para descansar.',
            'Tampoco depende del clima ni de un local que cierra en feriado. Si la familia viaja, la clase se toma desde donde esté, con la misma computadora y el mismo mentor.'
          ] },
        { kind: 'p', mt: true, html: 'Nuestras clases no reemplazan nada de lo que su hijo hace en persona. Pero una actividad que se toma desde casa, todas las semanas del año, es más fácil de sostener que una que exige organizar traslados. La constancia, más que la intensidad, es lo que hace que un niño termine sabiendo programar.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'Por edades',
      h2: '¿Por dónde empieza a programar un niño de 6, 9 o 12 años?',
      lede: 'Por lo que su mano y su lectura ya le permiten. A los 6 años se programa arrastrando bloques; a los 9 la mayoría ya escribe en el teclado; a los 12 ya puede idear, armar y terminar un proyecto que sea solo suyo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Punto de partida según la edad (nuestra recomendación)', head: ['Edad', 'Herramienta', 'Primer proyecto típico'], rows: [
          ['6 y 7 años', 'Bloques grandes y Scratch Junior o Scratch', 'Un personaje que camina, salta y dice una frase en inglés'],
          ['8 años', 'Scratch completo, primeros pasos en Roblox', 'Un juego de atrapar objetos con puntaje'],
          ['9 y 10 años', 'Python con dibujos y preguntas', 'Un cuestionario que cuenta respuestas correctas'],
          ['11 y 12 años', 'Python, Luau para Roblox o una web sencilla', 'Un juego propio con niveles, o una página web personal']
        ] },
        { kind: 'source', html: 'La tabla es nuestra y sirve de orientación. En la clase gratis el mentor mira lo que su hijo ya hace y puede proponer empezar un paso antes o después.' },
        { kind: 'two', mt: true,
          leftH3: 'Si tiene un hijo adolescente',
          left: [
            'De los 13 años en adelante preparamos grupos aparte, con cursos de Python, Java, desarrollo web e IA a otro ritmo. En el plan de estudios de secundaria del CNEB no hay un área de computación: la tabla de horas reparte Matemática 4, Comunicación 4, Inglés 3 y Educación para el trabajo 2 horas por grado, sin programación.',
            'Para ellos tenemos una guía específica de <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes en Perú</a>.'
          ],
          rightH3: 'Si su hijo tiene 10 años',
          right: [
            'Es la edad con más niños censados en el distrito y también la que más preguntan los padres. Suele ser el momento de dejar los bloques y escribir las primeras líneas de Python.',
            'Lo contamos con detalle en nuestra página sobre <a class="ag-inline-link" href="/programacion-para-ninos-de-10-anos">programación para niños de 10 años</a>.'
          ] }
      ]
    },
    {
      id: 'binario',
      tint: 'tint',
      eyebrow: 'Un reto en Python',
      h2: '¿Cómo se cuenta hasta 31 con los dedos de una mano?',
      lede: 'Con números binarios, la forma en que cuentan las computadoras. Cada dedo es un 0 (abajo) o un 1 (arriba), y con cinco dedos se llega hasta 31. El ejercicio es nuestro, para niños de 10 a 12 años, y se hace con la mano y con Python a la vez.',
      body: [
        { kind: 'code', label: 'Los cinco dedos en Python', lang: 'Python', code: PY, note: 'bin(3) devuelve el texto 0b11. Con [2:] quitamos el 0b, y zfill(5) rellena con ceros a la izquierda hasta tener cinco cifras, una por dedo.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Pegamos aquí, sin tocar, el resultado que nos dio Python 3 al correr dedos.py. El 1 de más a la izquierda vale 16, después 8, 4, 2 y 1.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Primero con la mano.</strong> El mentor dice en inglés "thumb is one, index is two, middle is four, ring is eight, little finger is sixteen". El niño levanta dedos para formar el 3: pulgar e índice, 1 + 2.',
          '<strong>Predecir.</strong> Antes de ejecutar, el niño escribe en su cuaderno qué dedos irán arriba para el 10 y el 19. Después compara con la pantalla: 01010 es 8 + 2, y 10011 es 16 + 2 + 1.',
          '<strong>El número más grande.</strong> Con todos los dedos arriba, <code>int(\'11111\', 2)</code> da 31. Es el límite de una mano: 16 + 8 + 4 + 2 + 1.',
          '<strong>Cuando no alcanza.</strong> La última línea muestra que 32 necesita seis cifras, 100000. Hace falta un sexto dedo, igual que una computadora necesita un bit más para guardar números más grandes.',
          '<strong>Su propio reto.</strong> El niño agrega su edad a la lista y la muestra con la mano a alguien de la familia. Si tiene 11 años: 01011, índice, pulgar y anular arriba.'
        ] },
        { kind: 'p', mt: true, html: 'El ejercicio enseña algo que ninguna herramienta que da respuestas hechas enseña: a comprobar. El niño no confía en el resultado porque lo dice la pantalla; lo confirma sumando con sus dedos. Pensar primero, ejecutar después y revisar al final es el hábito que trabajamos en todas las clases.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horario',
      h2: '¿A qué hora son las clases desde Lurigancho?',
      lede: 'A la que usted elija. El mentor vive en la India, que va 10 horas y 30 minutos adelante del Perú durante todo el año; la tabla solo traduce horas de un reloj al otro, no es un horario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hora de Perú y hora de la India (ejemplos de conversión)', head: ['Si en Chosica son las', 'En la India son las', '¿Cae en la misma fecha?'], rows: [
          ['7:30 a. m.', '6:00 p. m.', 'Sí'],
          ['9:00 a. m.', '7:30 p. m.', 'Sí'],
          ['11:30 a. m.', '10:00 p. m.', 'Sí'],
          ['2:30 p. m.', '1:00 a. m.', 'No, ya es mañana allá'],
          ['4:30 p. m.', '3:00 a. m.', 'No, ya es mañana allá'],
          ['6:30 p. m.', '5:00 a. m.', 'No, ya es mañana allá']
        ] },
        { kind: 'source', html: 'Perú: UTC-5 todo el año, sin cambio de hora desde 1994 (tzdata, zona America/Lima; hora oficial del INACAL). India: UTC+5:30 todo el año (zona Asia/Kolkata). Como ninguno de los dos cambia la hora, la diferencia es la misma en enero y en julio.' },
        { kind: 'p', mt: true, html: 'Al reservar, usted marca la hora en el reloj de Perú y el sistema se la muestra al mentor en el suyo. Las familias de Chosica cuyos hijos estudian en el turno tarde suelen preferir la mañana; las del turno mañana, la tarde, después del almuerzo. En vacaciones de verano se puede mover la clase sin cambiar de mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota que un niño está aprendiendo a programar?',
    lede: 'Tenemos cinco señales propias, de la más sencilla a la más completa, y con ellas le explicamos a la familia por dónde va su hijo.',
    table: { caption: 'Cinco señales de avance en programación (nuestras)', head: ['Señal', 'Edad en que suele aparecer', 'Lo que su hijo hace'], rows: [
      ['1. Ordena', '6 a 7 años', 'pone bloques en el orden correcto para que un personaje llegue a la meta'],
      ['2. Repite', '7 a 9 años', 'usa un bloque de repetición en lugar de copiar el mismo bloque diez veces'],
      ['3. Decide', '8 a 10 años', 'escribe una condición: si toca la pared, rebota'],
      ['4. Escribe', '9 a 11 años', 'teclea un programa corto en Python y predice qué va a imprimir'],
      ['5. Comprueba', '10 a 12 años', 'verifica un resultado por su cuenta, como los dedos del reto binario, y encuentra su propio error']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pregúntele a su hijo qué hizo en la clase y pídale que se lo muestre. Si lo explica, aunque mezcle castellano e inglés, lo entendió.',
      'Las semanas en que parece no avanzar suelen ser las del paso de bloques a texto. Es normal y pasa.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Diga en voz alta qué espera ver antes de apretar el botón de ejecutar.',
      'Si aparece otra cosa, no borre nada: recorra el código de arriba abajo hasta encontrar dónde se torció la idea.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos para niños de 6 a 12 años',
    lede: 'Cada uno se dicta en vivo, en inglés, con un mentor fijo de principio a fin, en grupo o a solas.',
    bands: [
      { num: 'I', h3: 'Los primeros pasos', sub: 'De 6 a 9 años', courses: [
        { code: 'PNL / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Bloques de colores para crear animaciones y juegos, con grupos separados por edad.' },
        { code: 'PNL / BASE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Acertijos y patrones para aprender a partir un problema en pasos pequeños.' },
        { code: 'PNL / BASE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Programación en Minecraft', blurb: 'Bloques, comandos y pequeñas máquinas dentro del juego favorito de muchos.' }
      ] },
      { num: 'II', h3: 'Crear cosas propias', sub: 'De 8 a 12 años', courses: [
        { code: 'PNL / CREA / 01', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos para niños', blurb: 'Scratch, Roblox y Minecraft en un mismo recorrido de proyectos.' },
        { code: 'PNL / CREA / 02', slug: 'kids-ai-web-development-course', title: 'Una web propia', blurb: 'HTML y CSS para publicar una página personal hecha por el niño.' },
        { code: 'PNL / CREA / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps para el celular', blurb: 'Pantallas, botones y datos sencillos para una app hecha por el propio niño.' }
      ] },
      { num: 'III', h3: 'Números y razonamiento', sub: 'De 8 a 12 años', courses: [
        { code: 'PNL / NUM / 01', slug: 'maths-through-coding', title: 'Matemáticas programando', blurb: 'Fracciones, patrones y geometría resueltos con código propio.' },
        { code: 'PNL / NUM / 02', slug: 'ai-literacy-for-kids-course', title: 'La IA por dentro', blurb: 'Qué hace un modelo cuando adivina, por qué falla y cómo comprobar lo que dice.' },
        { code: 'PNL / NUM / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ desde pequeños', blurb: 'Un lenguaje escrito más estricto, practicado con juegos y retos cortos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una semana de clases en línea?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del turno tarde', l: 'Para quienes van al colegio después del almuerzo.' },
      { time: 'Después del turno mañana', l: 'Con la tarea hecha y el almuerzo tomado.' },
      { time: 'En vacaciones', l: 'La misma clase, movida a la hora que acomode a la casa.' }
    ],
    cells: [
      { h3: 'Mentor de siempre', p: 'La misma persona durante el curso, que conoce el ritmo de su hijo.' },
      { h3: 'Inglés pausado', p: 'Frases cortas, ejemplos en pantalla y tiempo para responder.' },
      { h3: 'Teclado propio', p: 'El niño escribe su código; el mentor orienta y no lo hace por él.' },
      { h3: 'Un logro visible', p: 'Cada tramo termina con algo que su hijo puede enseñar en casa.' },
      { h3: 'Noticias a la familia', p: 'Un resumen corto de lo practicado y de lo que viene.' },
      { h3: 'Grupo o a solas', p: 'Entre quince y veinte chicos de edades cercanas, o su hijo frente a su mentor.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Quien hoy arrastra bloques puede, con los años, terminar publicando proyectos de verdad. Abajo hay algunos de estudiantes mayores, y más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (página en inglés).',
  reviewsLede: 'Lo que familias y alumnos dejaron escrito en Google, sin retoques y en el inglés original.',

  fees: {
    h2: 'Precios para familias de Lurigancho',
    lede: 'Las tarifas se muestran en dólares estadounidenses y se cobran con tarjeta. Es su banco el que pasa el cargo a su moneda, de modo que el monto que aparece en su estado de cuenta depende del tipo de cambio que aplique ese día.',
    free: ['Una clase gratis con un mentor', 'Un reto corto para ver el punto de partida', 'Sin tarjeta y sin compromiso'],
    group: ['Entre quince y veinte chicos de edades cercanas', 'El mismo mentor de principio a fin', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'El ritmo y los temas que él necesita', 'El día y la hora que usted escoja']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Lurigancho: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Enseñamos únicamente en inglés, siempre en vivo y por internet. Para muchas familias de Chosica esa es la gracia: el niño programa y, en la misma hora, conversa en inglés con su mentor, que habla pausado y repite lo necesario. Lima obtuvo 555 puntos en el EF EPI 2025, dentro del nivel alto de esa medición, y hablar desde chico es lo que más ayuda a llegar ahí.' },
      { q: '¿Lurigancho es lo mismo que San Juan de Lurigancho?', a: 'No. Lurigancho es el distrito de Chosica, Ñaña, Huachipa, Carapongo y Cajamarquilla, con 308,611 habitantes en el censo de 2025. San Juan de Lurigancho es otro distrito, con 1,176,422 habitantes según el mismo censo del INEI.' },
      { q: '¿Desde qué edad puede empezar mi hijo?', a: 'A los 6 años, cuando entra a 1° de primaria según la edad normativa del MINEDU, ya puede programar con bloques y personajes. El código escrito en Python suele llegar entre los 9 y los 10.' },
      { q: '¿Cuántos niños hay en Lurigancho?', a: 'Según el cuadro 2 de los Censos Nacionales 2025 del INEI, en el distrito se censaron 33,661 niños de 6 a 12 años (suma nuestra de las edades simples). La edad con más niños fue la de 10 años, con 5,151.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como la India está 10 horas y media por delante durante los doce meses, una clase a las 9:00 a. m. de Chosica es a las 7:30 p. m. para el mentor.' },
      { q: '¿Las clases siguen durante el año escolar o solo en vacaciones?', a: 'Durante todo el año. Su hijo puede empezar en cualquier semana, seguir mientras va al colegio y mover la hora en vacaciones sin cambiar de mentor.' },
      { q: '¿Qué computadora hace falta para las clases?', a: 'Un equipo con teclado, sea de escritorio o portátil, con cámara y micrófono, más audífonos y una conexión que no se corte. En la pantalla de un celular se puede seguir la clase, pero escribir código ahí resulta incómodo.' },
      { q: '¿Hay clases para adolescentes de Chosica?', a: 'Sí, en grupos aparte desde los 13 años, con Python, Java, desarrollo web e inteligencia artificial. El plan de estudios de secundaria del CNEB no tiene un área de computación, así que estas clases complementan al colegio.' },
      { q: '¿Tienen relación con la Municipalidad de Lurigancho-Chosica o con algún colegio?', a: 'No. No estamos vinculados a la municipalidad, al MINEDU, a la UGEL ni a ningún colegio. Nuestras clases no ponen notas del colegio; quien termina un curso recibe un certificado de finalización emitido por Modern Age Coders, y nada más.' },
      { q: '¿En qué moneda se paga?', a: 'Cobramos en dólares de Estados Unidos con tarjeta, y el banco de la familia convierte el cargo. La sesión gratuita de prueba no requiere ningún dato de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras guías que pueden servirle, en castellano y en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía general para familias de todo el Perú con hijos en primaria.' },
      { href: '/programacion-para-ninos-de-10-anos', label: 'Programación para niños de 10 años', p: 'Qué se puede aprender a esa edad y cómo pasar de bloques a código.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Cursos y grupos para chicos y chicas de secundaria.' },
      { href: '/vacaciones-utiles-de-programacion-san-juan-de-lurigancho-lima', label: 'Vacaciones útiles en San Juan de Lurigancho', p: 'La guía del distrito vecino, centrada en el verano.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra forma de enseñar, explicada paso a paso (en inglés).' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, ordenados por edad y por tema (en inglés).' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis desde Lurigancho',
    lede: 'En la primera clase el mentor saluda a su hijo en un inglés sencillo, le propone un reto corto con bloques o con Python y observa cómo piensa. Con eso le sugerimos un curso y una modalidad, y la decisión queda en sus manos.',
    readFirst: 'Antes de reservar puede revisar <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre la forma en que enseñamos, y <a class="ag-inline-link" href="/courses">All courses</a>, con la lista de programas (las dos en inglés).',
    note: 'Enseñamos por videollamada, en vivo, desde la India y solo en inglés. Para consultas por WhatsApp, escríbanos en castellano sin problema.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Juegos en Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías para familias', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/programacion-para-ninos-de-10-anos', label: 'Niños de 10 años' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Cinco dedos, treinta y un números'
  },

  personalityCss: `
.ag-root.ag-pnl .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-pnl .ag-capsule { border-left-width: 6px; }
.ag-root.ag-pnl .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-pnl .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnl .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook, cuadros 1, 2 and 3, updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026; Municipalidad Distrital de Lurigancho notes on gob.pe (12 Jan, 11 Feb and 7 Aug 2026); MINEDU CNEB secundaria hours and edades normativas; EF EPI 2025 Peru page; tzdata and INACAL for time. Read 8 to 10 November 2026. The age-to-tool table, the progress signals and the Python exercise are our own.',
    localProject: 'Counting to 31 on one hand in binary, for a 10 to 12 year old in Lurigancho-Chosica: bin(number)[2:].zfill(5) prints 3, 10, 19 and 31 as five fingers (00011, 01010, 10011, 11111), int(\'11111\', 2) reads 31 back and 32 needs a sixth finger (100000); the child checks each line by adding finger values 16, 8, 4, 2 and 1, then shows their own age. Lesson family: binary numbers with bin(), zfill and int(text, 2).',
    requiredMentions: ['32 needs a sixth finger: 100000', 'All five fingers up: 31', '33,661 niños de 6 a 12 años', 'Tercera Feria del Libro Internacional en Chosica', 'Huampaní, Ñaña, Carapongo, Huachipa, Nievería, Cajamarquilla y Cerro Camote', 'sus 290,674 personas censadas en el área urbana y cero en el área rural', 'Cinco dedos, treinta y un números', '25° aniversario de la declaratoria del sitio arqueológico'],
    sources: [
      { claim: 'Lurigancho 308,611 total, 290,674 censused, 17,937 omitted; SJL 1,176,422; ages 6 to 12 by single year; 6 to 11 and 12 to 17 groups; all urban.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Talleres Municipales de Verano 2026: over 700 children in Chosica and over 800 in seven other localities.', url: 'https://www.gob.pe/institucion/munilurigancho/noticias/1331907-inauguracion-de-talleres-municipales-de-verano-2026' },
      { claim: 'Cajamarquilla Vive 2026: 25th anniversary of the heritage declaration, over 3,000 visitors, over 65 children in the archaeology workshop.', url: 'https://www.gob.pe/institucion/munilurigancho/noticias/1351632-cajamarquilla-vive-2026-asi-se-celebro-el-25-aniversario-de-declaratoria-como-patrimonio-cultural' },
      { claim: 'Third International Book Fair in Chosica, 9 to 18 October 2026, Plaza de las Banderas, Argentina as guest country.', url: 'https://www.gob.pe/institucion/munilurigancho/noticias/1426878-muy-pronto-se-realizara-la-tercera-feria-del-libro-internacional-en-chosica' },
      { claim: 'Lima Metropolitana households with internet 84.7%, with a computer 53.3%; internet use 92.4%; 74.3% of households with a computer have one.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Secundaria weekly hours with no computing area; normative age at 31 March.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high), Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Treating Lurigancho and San Juan de Lurigancho as one place: refused; the page separates them with both INEI rows.',
      'Travel times or traffic figures between Chosica and central Lima: none sourced, none printed.',
      'Any income, class or school-quality reading of the census rows: refused; the page says the figures only count people by age.',
      'Names of the mayor, officials or guests from the municipal notes: left out (no political names).',
      'Spanish-language teaching or any municipal, MINEDU or school link: refused; classes are in English only and we are not connected.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

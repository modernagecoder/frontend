// SHIP: market | Miraflores by age: Python and AI or own course, 4 to 5 a week, teens too | logic: a range check needs and, not or (chained comparison)
'use strict';
// Vacaciones útiles de programación en Miraflores (ag- Spanish district door, Peru cluster row PE220, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "Vacaciones útiles pages", district pages). Owner 2026-11-09: "make sure all our classes are live online in
// english"; 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine: matching a summer activity to the child's age. The Miraflores council's own summer announcements give an age band
// for every workshop; the bands it published run from 3 to 12 and from 18 to 29, so a 13 to 17 year old is left out of
// that list. The page maps ages to activities, plans a balanced week (park in the morning, code in the afternoon), and
// teaches the age check itself in Python.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-miraflores-lima/):
//  - Municipalidad de Miraflores, 5 Jan 2026 (eco-kids-2026.html, datePublished 2026-01-05): "Miraflores lanza ECO KIDS,
//    vacaciones útiles ambientales para niñas y niños del distrito"; "Programa gratuito está dirigido a menores de 6 a 12
//    años y se desarrollará en parques del distrito"; "durante 7 semanas, a partir del martes 13 de enero, con sesiones
//    semanales de dos horas"; "gestión de residuos", "biohuertos", "observación de aves", "insectos benéficos"; "a cargo de
//    la subgerencia de Sostenibilidad Ambiental y su programa EDUCCA"; "que se encuentran en receso en el colegio".
//  - Municipalidad de Miraflores, 8 Jan 2025 (talleres-verano-2025.html, datePublished 2025-01-08): "durante las
//    vacaciones útiles del inicio de año"; Nido Municipal "niños de 3 a 6 años", "inician el 13 de enero y concluyen el 21
//    de febrero"; Demuna "talleres gratuitos para niños de 8 a 12 años con el programa «Juguemos»"; "Pequeños Líderes
//    presenta talleres para niños de 6 a 12 años"; Programa Jóvenes "personas de 18 a 29 años". Prices, addresses and
//    phone numbers in the notes are not repeated; no political names. The council's own search for "vacaciones utiles"
//    (site-search-vacaciones.html) lists these and older notes; no 2027 summer note when checked (9 Nov 2026).
//  - INEI Censos Nacionales 2025, Lima Metropolitana (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO MIRAFLORES 126049 58214
//    67835 121203 55860 65343 4846 2354 2492"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO MIRAFLORES 121203 4906 6204 6575
//    15698 31906 26014 29900".
//  - RM 501-2025-MINEDU Tabla 1 (rm501-2025-pdf/page11-checked-by-eye.png): "Del 19 octubre a 18 de diciembre"; first
//    teaching block from 16 March 2026. No 2027 norm on gob.pe as of 2026-11-08 (facts-school BLOCKED.md).
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el uso de Internet fue menor entre los niños de 6 a 11 años
//    (68,2%)"; Lima Metropolitana households with internet "84,7%".
//  - EF EPI 2025 (ef_peru.txt): Lima 555, high from 550; Peru speaking 480.
//  - Time (timezone.tsv): Peru UTC-5, India UTC+5:30.
//  - Neighbouring districts in plain text: San Isidro, Surquillo, Santiago de Surco, Barranco; the Pacific coast.
// Summer offer (owner 2026-11-10, brief section "Summer offer"): Summer Python and AI (python-ai-kids-masterclass 9 to 12;
//   python-complete-masterclass-teens then ai-ml-masterclass-teens 13 to 17) or any catalogue course (games, Roblox, Scratch,
//   web, apps, DSA, Java, vibe coding, maths and more) at 4 to 5 live classes a week, group or one to one, flexible hours;
//   summer pace and fee agreed with the mentor first; first class free; no price typed. Lengths from
//   content/courses/data/*.json meta.duration (vibe coding kids 3 months, Scratch 3-4 months, game dev kids 6-8 months).
// Our own calculations (python3 -I): 29900 / 121203 = 24.67% (60 and over); 6204 / 121203 = 5.12% (6 to 11);
//   6575 / 121203 = 5.42% (12 to 17). Summer tally (ours, an illustration, 2027 return date unknown): January 4 weeks
//   (16 at 4 a week, 20 at 5), February 4 weeks (16, 20), early March about 2 weeks (8, 10); 10 weeks = 40 to 50 classes.
// Our own example (vami_v1.py, vami_v2.py), exact output:
//   v1 (or): all five lines "... fits age 10", including "Nido Municipal 2025 fits age 10" and
//   "Programa Jovenes 2025 fits age 10"; v2 (minimo <= edad <= maximo): "Age 10" / "Juguemos 2025" / "Pequenos Lideres
//   2025" / "ECO KIDS 2026" / "Age 6" / "Nido Municipal 2025" / "Pequenos Lideres 2025" / "ECO KIDS 2026".
// Lesson family: boolean logic in a range check (or is always true here; and, or Python's chained comparison), and
// inclusive edges tested with the youngest age.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const DATA = [
  'talleres = [',
  "    ('Nido Municipal 2025', 3, 6),",
  "    ('Juguemos 2025', 8, 12),",
  "    ('Pequenos Lideres 2025', 6, 12),",
  "    ('Programa Jovenes 2025', 18, 29),",
  "    ('ECO KIDS 2026', 6, 12),",
  ']'
].join('\n');

const V1 = [
  DATA,
  '',
  'edad = 10',
  'for nombre, minimo, maximo in talleres:',
  '    if edad >= minimo or edad <= maximo:',
  "        print(nombre, 'fits age', edad)"
].join('\n');

const OUT1 = [
  'Nido Municipal 2025 fits age 10',
  'Juguemos 2025 fits age 10',
  'Pequenos Lideres 2025 fits age 10',
  'Programa Jovenes 2025 fits age 10',
  'ECO KIDS 2026 fits age 10'
].join('\n');

const V2 = [
  '# la misma lista talleres de arriba',
  '',
  'for edad in [10, 6]:',
  "    print('Age', edad)",
  '    for nombre, minimo, maximo in talleres:',
  '        if minimo <= edad <= maximo:',
  "            print('  ', nombre)"
].join('\n');

const OUT2 = [
  'Age 10',
  '   Juguemos 2025',
  '   Pequenos Lideres 2025',
  '   ECO KIDS 2026',
  'Age 6',
  '   Nido Municipal 2025',
  '   Pequenos Lideres 2025',
  '   ECO KIDS 2026'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Miraflores' },
  slug: 'vacaciones-utiles-de-programacion-miraflores-lima',
  code: 'vami',
  accent: '#384213',
  accentRationale: 'Vacaciones útiles en Miraflores: a dark moss green #384213, the colour of the clifftop parks along the Malecón where the council runs its summer programmes, deeper and more olive than the Surco and La Molina greens; contrast 8.71 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Miraflores',
  title: 'Vacaciones útiles de programación en Miraflores, en vivo',
  description: 'Verano de programación en Miraflores de 6 a 17 años: Python e IA o el curso que su hijo elija, con 4 a 5 clases en vivo por semana, en inglés y desde casa.',
  ogDescription: 'Python e IA o un curso a elección, de 4 a 5 clases por semana: qué camino toca a cada edad, el hueco municipal de los 13 a 17 años y una semana de verano con parque y código.',
  twitterDescription: 'Un verano de código en Miraflores, de 6 a 17 años: 4 a 5 clases en vivo por semana, en inglés y a la hora que usted elija.',
  pageName: 'Vacaciones útiles de programación en Miraflores',
  webPageDescription: 'Guía para familias de Miraflores que buscan vacaciones útiles de programación, con clases en vivo, en línea y en inglés: nuestro verano de Python e IA o de un curso a elección, con 4 a 5 clases por semana y un camino para cada edad, los programas de verano que anunció la municipalidad y sus edades, los datos del distrito en los Censos Nacionales 2025 del INEI, una semana de verano equilibrada y una clase de ejemplo en Python, escrita por nosotros, que decide qué taller corresponde a cada edad.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años y adolescentes de 13 a 17 de Miraflores, dictadas solo en inglés, con 4 a 5 clases por semana en vacaciones: Python e IA, o un curso a elección como videojuegos, Roblox, JavaScript, apps o DSA, en una clase grupal de quince a veinte o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en Miraflores',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#verano', label: 'Plan de verano' },
    { href: '#por-edad', label: 'Por edad' },
    { href: '#adolescentes', label: 'De 13 a 17' },
    { href: '#rango', label: 'Ejemplo' },
    { href: '#en-ingles', label: 'En inglés' }
  ],
  eyebrow: 'Miraflores &middot; Vacaciones útiles &middot; De 6 a 17 años',
  h1: 'Vacaciones útiles de programación en Miraflores',
  lede: 'Cada enero, la Municipalidad de Miraflores anuncia talleres de verano con una edad indicada: tantos años como mínimo, tantos como máximo. Si su hijo está dentro del rango, perfecto; si tiene 14 años, quizá no encuentre nada pensado para él. Nuestro verano no tiene ese corte: de los 6 a los 17 años, su hijo sigue el camino de Python e IA o el curso que él escoja, con 4 a 5 clases en vivo por semana. Aquí verá qué camino toca a cada edad, la oferta municipal ordenada por años, una semana que combina parque y computadora, y el mismo filtro por edad escrito en Python.',
  secondaryCta: { href: '#verano', label: 'El camino para cada edad' },
  wa: 'Hola Modern Age Coders, vivimos en Miraflores y queremos que nuestro hijo aprenda programación en inglés en estas vacaciones. ¿Podemos reservar una clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; las clases se dictan siempre en inglés',
  spec: [
    ['Distrito', 'Miraflores, Lima Metropolitana'],
    ['Edades', 'De 6 a 12 años y de 13 a 17 años'],
    ['Dos caminos', 'Python e IA, o el curso que su hijo escoja'],
    ['Ritmo de verano', 'De 4 a 5 clases en vivo por semana'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Para empezar', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'En las vacaciones de Miraflores, Modern Age Coders ofrece un verano de programación con clases en vivo, en línea y en inglés para niños de 6 a 12 años y, algo poco común en el distrito, para adolescentes de 13 a 17. Su hijo toma 4 a 5 clases a la semana desde casa y escoge entre dos caminos: Python con IA, o un curso a su gusto, sea de videojuegos, Roblox, desarrollo web, apps o DSA, entre otros. El mentor enseña desde la India y pronuncia con claridad; usted decide entre grupo o individual y la hora, y no paga la clase de prueba.',

  picks: {
    eyebrow: 'Primeros cursos',
    h2: 'Tres cursos para tres edades del verano miraflorino',
    lede: 'Python e IA para primaria alta, Python para el adolescente que la oferta del distrito deja fuera, y un curso de videojuegos para quien prefiere el segundo camino.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'VAMI / 01', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'De 9 a 12 años. El camino de Python e IA en su versión infantil: tortuga, juegos con Pygame y proyectos de IA pensados para niños. A 4 o 5 clases por semana, el verano cubre más de la mitad del curso.' },
      { course: 'python-complete-masterclass-teens', code: 'VAMI / 02', title: 'Python para adolescentes de 13 a 17', alt: 'Imagen del curso completo de Python para adolescentes', note: 'Para la edad que no aparece en los anuncios municipales. Primer tramo del camino de Python e IA; después llega IA y machine learning. Es un curso largo: en vacaciones se hace cerca de la mitad.' },
      { course: 'game-development-masterclass-for-kids', code: 'VAMI / 03', title: 'Creación de videojuegos para niños', alt: 'Imagen del curso de desarrollo de videojuegos para niños con Scratch, Roblox y Minecraft', note: 'De 8 a 12 años, por el camino a elección. Scratch, Roblox y Minecraft en un solo recorrido, del juego que se consume al juego que se diseña.' }
    ]
  },

  sections: [
    {
      id: 'verano',
      eyebrow: 'Nuestro verano',
      h2: '¿Qué verano de programación ofrecen para cada edad en Miraflores?',
      lede: 'El mismo esquema de los 6 a los 17 años, sin cortes por edad: dos caminos, 4 a 5 clases en vivo por semana y un inicio en la semana de enero, febrero o marzo que usted escoja.',
      body: [
        { kind: 'two',
          leftH3: 'Python e IA de verano',
          left: [
            'Nuestra apuesta principal para estas vacaciones. Su hijo aprende Python con un mentor y, con esa base, pasa a proyectos de inteligencia artificial que corresponden a sus años: un niño de 10 entrena un clasificador sencillo; uno de 16 trabaja con datos y modelos de machine learning.',
            'Entre los 9 y los 12 años va con el curso infantil de Python e IA; entre los 13 y los 17, con Python completo seguido de IA y machine learning. Las herramientas de IA que entran a clase respetan la edad mínima que fija cada empresa.'
          ],
          rightH3: 'El curso que su hijo prefiera',
          right: [
            'También puede elegir cualquier curso del catálogo y avanzarlo al ritmo de verano: videojuegos con Scratch o Roblox, Unity, JavaScript, desarrollo web, apps para el celular, DSA, Java, C++, vibe coding, matemáticas, entre otros.',
            'Es el camino para el niño que llega con una idea fija (quiero hacer mi juego) o para el adolescente que ya sabe qué carrera le llama. El mentor arma el avance alrededor de ese interés.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué camino corresponde a cada edad (orientación nuestra)', head: ['Edad', 'Python e IA de verano', 'Curso a elección, por ejemplo'], rows: [
          ['6 a 8 años', 'Antes, razonamiento y bloques', 'Programación con bloques, Minecraft programado, Scratch'],
          ['9 a 12 años', 'Python e IA para niños', 'Videojuegos para niños, Roblox con Luau, vibe coding para niños'],
          ['13 a 17 años', 'Python para adolescentes, luego IA y machine learning', 'JavaScript, apps con React Native, Unity, DSA']
        ] },
        { kind: 'source', html: 'Las bandas siguen las edades que figuran en cada curso; en la clase gratis el mentor confirma si su hijo encaja o si conviene adelantarlo.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Cuántas clases suma un verano mes a mes (ejemplo nuestro)', head: ['Tramo del verano', 'Con 4 clases semanales', 'Con 5 clases semanales'], rows: [
          ['Enero, 4 semanas', '16', '20'],
          ['Febrero, 4 semanas', '16', '20'],
          ['Inicio de marzo, unas 2 semanas', '8', '10'],
          ['Diez semanas en total', '40', '50']
        ] },
        { kind: 'source', html: 'Cuenta nuestra y solo ilustrativa: la fecha de regreso a clases de 2027 aún no se conoce, así que el tramo de marzo puede ser más corto o más largo. En el año escolar el ritmo es de dos clases por semana. Con 40 a 50 clases, un curso de tres o cuatro meses, como Scratch o vibe coding para niños, se termina en el verano; uno de 10 a 12 meses, que a ritmo normal son unas 80 a 100 clases, queda a la mitad más o menos y sigue en marzo. No prometemos acabar un curso largo en vacaciones.' },
        { kind: 'p', mt: true, html: 'Cuatro o cinco clases, grupo o individual, y lo que eso cuesta al mes, se hablan con el mentor antes del arranque del verano. La primera clase, la de prueba, no se cobra.' }
      ]
    },
    {
      id: 'por-edad',
      eyebrow: 'La oferta municipal',
      h2: '¿Qué vacaciones útiles hay en Miraflores para cada edad?',
      lede: 'Según las notas de la propia Municipalidad de Miraflores, sus programas de verano más recientes fueron ECO KIDS en 2026 y un paquete de talleres en 2025, cada uno con una edad indicada.',
      body: [
        { kind: 'table', numCols: [], caption: 'Programas de verano anunciados por la Municipalidad de Miraflores, con la edad que indicó', head: ['Programa', 'Año', 'Edad indicada', 'Qué anunció la municipalidad'], rows: [
          ['ECO KIDS', '2026', '6 a 12 años', 'Gratuito, en parques del distrito, 7 semanas desde el martes 13 de enero, una sesión semanal de dos horas'],
          ['Nido Municipal', '2025', '3 a 6 años', 'Reciclaje, mini chef, pequeños científicos y otros, del 13 de enero al 21 de febrero'],
          ['Juguemos (Demuna)', '2025', '8 a 12 años', 'Talleres gratuitos sobre respeto y autoevaluación a través del juego'],
          ['Pequeños Líderes', '2025', '6 a 12 años', 'Dibujo, juegos sociales y habilidades de liderazgo'],
          ['Programa Jóvenes', '2025', '18 a 29 años', 'Teatro, oratoria, liderazgo y otros talleres gratuitos']
        ] },
        { kind: 'source', html: 'Fuentes: Municipalidad de Miraflores, "Miraflores lanza ECO KIDS, vacaciones útiles ambientales para niñas y niños del distrito", 5 de enero de 2026, y la nota sobre sus talleres de verano 2025, del 8 de enero de 2025, ambas en miraflores.gob.pe y leídas el 9 de noviembre de 2026. La oferta del verano 2027 no estaba publicada cuando la revisamos. Modern Age Coders no tiene relación con la municipalidad.' },
        { kind: 'two', mt: true,
          leftH3: 'ECO KIDS, en detalle',
          left: [
            'La nota de 2026 describe ECO KIDS como una propuesta de vacaciones útiles enfocada en la sostenibilidad ambiental, a cargo de la subgerencia de Sostenibilidad Ambiental y su programa EDUCCA. Los niños aprendían gestión de residuos, cuidado de los recursos, biohuertos, observación de aves e insectos benéficos.',
            'La propia municipalidad explicaba el sentido del programa: que los niños, "que se encuentran en receso en el colegio", aprovecharan el tiempo libre en actividades recreativas y educativas al aire libre.'
          ],
          rightH3: 'Lo que la tabla deja ver',
          right: [
            'Todos los programas con edad indicada en estas dos notas son para niños de hasta 12 años o para jóvenes desde los 18. Ninguno de los cinco se anuncia para adolescentes de 13 a 17 años.',
            'Tampoco aparece la programación. La oferta municipal se concentra, con razón, en ambiente, juego, arte y liderazgo: actividades presenciales que una clase en línea no reemplaza, pero que sí puede completar.'
          ] }
      ]
    },
    {
      id: 'adolescentes',
      eyebrow: 'De 13 a 17 años',
      h2: '¿Qué puede hacer un adolescente de Miraflores en vacaciones?',
      lede: 'Aprender a programar encaja muy bien, precisamente porque a esa edad ya puede crear algo propio y útil. Con 4 a 5 clases por semana, un adolescente de 13 a 17 años arranca con Python o JavaScript y cierra el verano con un proyecto que puede mostrar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Una web o un juego propio', p: 'Con JavaScript, el adolescente construye páginas que reaccionan a lo que hace el usuario y pequeños juegos que corren en el navegador. Ve el resultado de inmediato y lo comparte con sus amigos.' },
          { h3: 'Datos y lógica con Python', p: 'Con Python trabaja listas, decisiones y archivos, y resuelve problemas con datos reales, como los rangos de edad del ejemplo de esta página. Es el idioma más usado para ciencia de datos e IA.' },
          { h3: 'IA con criterio', p: 'Primero piensa el estudiante; la IA llega después, y solo la que corresponde a su edad. Un menor de 18 necesita autorización de sus padres para ChatGPT, y Claude está reservado a mayores de edad.' }
        ] },
        { kind: 'p', mt: true, html: 'Hay pocos chicos de esta edad en el distrito y por eso es fácil que queden fuera de la oferta pensada para niños. En los Censos Nacionales 2025, el INEI contó en Miraflores 6 575 adolescentes de 12 a 17 años en la población censada, y 6 204 niños de 6 a 11. Para un adolescente de 14 o 15 años, la clase grupal en línea reúne a chicos de su misma edad de distintos lugares, algo difícil de juntar en un solo barrio.' },
        { kind: 'p', html: 'El colegio tampoco cubre este terreno: en el plan de estudios nacional del MINEDU, el CNEB, no existe un área de computación ni de programación, y trata lo digital como una competencia transversal. Un verano de código es, para muchos adolescentes, el primer contacto serio con algo que podrían estudiar después.' }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'El distrito',
      h2: '¿Cuántas personas viven en Miraflores y cuántas son niños?',
      lede: 'Miraflores tiene 126 049 habitantes según los Censos Nacionales 2025 del INEI. Es un distrito con relativamente pocos niños y muchas personas mayores, un dato que cambia cómo se organiza un verano en familia.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Miraflores en los Censos Nacionales 2025 (INEI)', head: ['Indicador', 'Personas'], rows: [
          ['Población total', '126 049'],
          ['Población censada', '121 203'],
          ['Población omitida', '4 846'],
          ['Mujeres (población total)', '67 835'],
          ['Hombres (población total)', '58 214'],
          ['De 6 a 11 años (censo)', '6 204'],
          ['De 12 a 17 años (censo)', '6 575'],
          ['De 60 años a más (censo)', '29 900']
        ] },
        { kind: 'source', html: 'Cifras tomadas del INEI (Censos Nacionales 2025, indicadores demográficos de Lima Metropolitana). Las filas de población y sexo vienen del Cuadro N.° 1; las de edad, del Cuadro N.° 3, que solo cuenta a la población censada. El censo tomó como fecha de referencia el 15 de septiembre de 2025, y bajamos el archivo el 8 de noviembre de 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Una lectura de las cifras',
          left: [
            'Hicimos la cuenta: casi uno de cada cuatro miraflorinos censados tiene 60 años o más (un 24,7 % aproximado), y apenas un 5,1 % tiene entre 6 y 11 años.',
            'En muchas familias miraflorinas, los abuelos acompañan a los nietos en verano. Una clase en casa, en vivo, es fácil de supervisar para un abuelo: basta con abrir el enlace y dejar al niño frente a la computadora con su mentor.'
          ],
          rightH3: 'Dónde está Miraflores',
          right: [
            'El distrito mira al océano Pacífico desde sus acantilados. Por tierra colinda con San Isidro, Surquillo, Santiago de Surco y Barranco.',
            'Sus parques del malecón son el escenario natural de programas como ECO KIDS. Las academias y talleres privados, en cambio, a menudo están en otros distritos, y llegar a ellos en hora punta es otra historia.'
          ] }
      ]
    },
    {
      id: 'semana',
      eyebrow: 'Una semana de verano',
      h2: '¿Cómo combinar parque y programación en una misma semana?',
      lede: 'Con la mañana al aire libre y la tarde en casa, aun con el ritmo de verano de 4 a 5 clases. Esta es una semana de ejemplo para un niño de 9 años, pensada por nosotros; los talleres municipales que menciona dependen de lo que la municipalidad anuncie para 2027.',
      body: [
        { kind: 'table', numCols: [], caption: 'Una semana de verano de ejemplo para un niño de 9 años (plan nuestro)', head: ['Día', 'Mañana', 'Tarde'], rows: [
          ['Lunes', 'Playa o parque con la familia', 'Clase de programación en vivo, una hora'],
          ['Martes', 'Taller municipal al aire libre, si hay uno para su edad', 'Clase de programación en vivo, una hora'],
          ['Miércoles', 'Deporte', 'Libre, o una quinta clase si eligieron ese ritmo'],
          ['Jueves', 'Lectura y juegos de mesa', 'Clase de programación en vivo, una hora'],
          ['Viernes', 'Salida familiar', 'Clase en vivo y, al final, le muestra a alguien de casa lo que construyó'],
          ['Fin de semana', 'Descanso', 'Descanso']
        ] },
        { kind: 'source', html: 'Plan elaborado por nuestros mentores como ejemplo. Los días y horas de las clases los elige la familia; nada queda establecido de antemano.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Una hora por tarde, no más.</strong> Con cuatro o cinco sesiones de una hora el niño avanza rápido sin pasarse el día frente a la pantalla, y las mañanas siguen siendo del verano de siempre.',
          '<strong>Un día libre a mitad de semana.</strong> Si eligen cuatro clases, el miércoles sin clase sirve para jugar con lo que construyó; repasar por gusto fija más que una sesión larga el domingo.',
          '<strong>Pantalla después de moverse.</strong> Una mañana de parque o de playa hace que la tarde frente a la computadora se aproveche más.',
          '<strong>Mostrar el viernes.</strong> Explicar su juego a un adulto obliga al niño a ordenar lo que entendió, y a la familia le permite ver el avance.'
        ] }
      ]
    },
    {
      id: 'rango',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se programa un filtro por edad en Python?',
      lede: 'Con una condición que tiene dos lados. Este ejercicio es nuestro y lo usamos con niños de 10 a 13 años: los datos son los cinco programas de la tabla de arriba, con su edad mínima y máxima, y la pregunta es cuáles le sirven a un niño de 10 años.',
      body: [
        { kind: 'code', label: 'Versión 1: un filtro que deja pasar todo', lang: 'Python', code: V1, note: 'Antes de correrlo, el mentor pregunta en inglés: "How many workshops will the program print?" La respuesta esperada, mirando la tabla, es tres.' },
        { kind: 'code', label: 'Resultado de la versión 1', lang: 'Salida', code: OUT1, note: 'Salida literal, obtenida al ejecutar el programa nosotros mismos en Python 3. Imprime los cinco, incluso el Nido de 3 a 6 años y el Programa Jóvenes de 18 a 29.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer la condición en voz alta.</strong> "Age is at least the minimum, or age is at most the maximum." Con 10 años y el Programa Jóvenes: ¿10 es mayor o igual que 18? No. ¿10 es menor o igual que 29? Sí. Con <code>or</code> basta que una parte sea cierta.',
          '<strong>Ver que siempre se cumple.</strong> Cualquier edad es mayor que el mínimo o menor que el máximo de casi cualquier rango. Una condición que siempre es verdadera no filtra nada.',
          '<strong>Pedir los dos lados.</strong> El niño necesita tener al menos el mínimo <em>y</em> como mucho el máximo. En Python eso se escribe <code>edad &gt;= minimo and edad &lt;= maximo</code>, o de forma más corta, <code>minimo &lt;= edad &lt;= maximo</code>.',
          '<strong>Probar el borde.</strong> Un buen filtro se prueba con una edad de la frontera. Con 6 años el Nido (3 a 6) debe aparecer, porque el rango incluye el 6.'
        ] },
        { kind: 'code', label: 'Versión 2: un rango con dos lados', lang: 'Python', code: V2, note: 'La comparación encadenada <code>minimo &lt;= edad &lt;= maximo</code> se lee igual que en matemática y equivale a unir dos condiciones con <code>and</code>.' },
        { kind: 'code', label: 'Resultado de la versión 2', lang: 'Salida', code: OUT2, note: 'Copiada sin cambios de nuestra prueba. A los 10 años quedan tres programas; a los 6, el Nido aparece porque el borde está incluido.' },
        { kind: 'p', mt: true, html: 'El reto final es agregar a la lista una clase de programación para 13 a 17 años y probar el filtro con 14: es el único programa que aparece, y el niño acaba de demostrar con código el hueco que vimos en la tabla. Esa costumbre es la que cultivamos en cada clase, con o sin herramientas de IA: predecir, ejecutar, comparar con lo esperado y explicar la diferencia en palabras propias.' }
      ]
    },
    {
      id: 'sin-traslados',
      eyebrow: 'Desde casa',
      h2: '¿Por qué tomar las vacaciones útiles en línea si vivimos en Miraflores?',
      lede: 'Porque la parte presencial del verano ya la tiene cerca, en el parque o en la playa, y la programación no necesita un aula. Una clase en vivo por videollamada evita llevar al niño a otro distrito a la hora en que media Lima está en movimiento.',
      body: [
        { kind: 'two',
          leftH3: 'La logística de la familia',
          left: [
            'Muchas academias de verano están lejos del distrito y obligan a alguien a manejar, esperar y volver. Con la clase en casa, ese tiempo se queda en la familia; no hace falta ninguna cifra de tráfico para saber cuánto vale una tarde en Lima.',
            'También simplifica el cuidado. Un abuelo, una niñera o un hermano mayor pueden acompañar la clase desde la sala, sin tener que salir con el niño.'
          ],
          rightH3: 'Lo que hace falta',
          right: [
            'Basta un equipo con teclado, cámara y micrófono, más una conexión que no se corte. Internet ya no suele ser el problema: en el segundo trimestre de 2026, el INEI contó con servicio a 84,7 de cada 100 hogares de Lima Metropolitana.',
            'El mismo boletín del INEI muestra que los niños de 6 a 11 años son quienes menos usan internet en el país (68,2 %). Para varios de ellos, la clase será su primera experiencia guiada con una computadora, y empezamos con calma.'
          ] },
        { kind: 'p', mt: true, html: 'Que la clase sea en vivo cambia todo: su hijo comparte su pantalla, el mentor sigue cada línea que escribe, le hace predecir el resultado y busca con él la falla apenas aparece. No es un video grabado, y por eso funciona igual en un departamento frente al malecón que en cualquier otra ciudad del país; nuestra página de <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">programación e IA en el Perú</a> lo muestra para todas las edades.' }
      ]
    },
    {
      id: 'en-ingles',
      eyebrow: 'Idioma',
      h2: '¿En qué idioma se dictan las clases?',
      lede: 'En inglés, y solo en inglés. Todas nuestras clases son en vivo y en línea con mentores en la India, y no dictamos clases en español. Para un niño de Miraflores eso significa dos aprendizajes en una sola hora: código e inglés hablado.',
      body: [
        { kind: 'two',
          leftH3: 'Cómo lo vive un niño',
          left: [
            'Las explicaciones llegan en oraciones breves y siempre con un apoyo visual. Cuando un niño responde en castellano, no pasa nada: el mentor aprovecha lo que quiso decir y le ofrece la frase equivalente en inglés.',
            'Al principio cuesta un poco seguir la pronunciación del mentor. En vacaciones eso pesa menos, porque el niño no tiene tareas ni exámenes que compitan con la clase.'
          ],
          rightH3: 'El contexto de Lima',
          right: [
            'En la edición 2025 del EF EPI, Lima aparece en el nivel "Alto" con 555 puntos (el nivel empieza en 550), la única ciudad peruana en esa banda. Para el país, la habilidad más baja es la oral, con 480.',
            'El índice mide a adultos y no a niños. Aun así, sugiere que en Lima mucha gente entiende el inglés escrito con más facilidad de la que tiene para hablarlo, y una clase donde hay que explicar, preguntar y contar qué cambió es práctica oral con propósito.'
          ] },
        { kind: 'p', mt: true, html: '¿Colegio bilingüe, Cambridge o IB? Para esas familias está la página de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">programación en inglés para familias de Lima</a> explica cómo acompañamos esos colegios. Para dudas sobre la edad de inicio en primaria, vea <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'empezar',
      eyebrow: 'Fechas y horas',
      h2: '¿Cuándo y a qué hora puede empezar mi hijo?',
      lede: 'Cuando termine el colegio y a la hora que usted elija. La RM 501-2025 del MINEDU cerró las clases de 2026 con un cuarto bloque que terminó el viernes 18 de diciembre de 2026; a partir de ahí, su hijo tiene el verano por delante.',
      body: [
        { kind: 'ol', items: [
          '<strong>En diciembre, la clase gratis.</strong> Reserve una sesión de prueba antes de las fiestas. El mentor conoce a su hijo, le plantea un reto pequeño y propone por dónde empezar.',
          '<strong>Elija las horas mirando su reloj.</strong> Con Perú fijo en UTC-5 y la India fija en UTC+5:30, el reloj indio va siempre 10 horas y 30 minutos por delante. Por ejemplo, las 10:00 a. m. en Miraflores son las 8:30 p. m. en la India, y las 4:00 p. m. en Miraflores son las 2:30 a. m. del día siguiente allá.',
          '<strong>Empiece la semana que quiera.</strong> No hay fecha de inicio común: su hijo puede entrar en enero, en febrero o en marzo y arrancar el camino de Python e IA o el curso elegido, con 4 a 5 clases por semana.',
          '<strong>Decida en marzo.</strong> Todavía no sabemos qué día vuelven los colegios en 2027: cuando revisamos gob.pe, el 8 de noviembre de 2026, la norma de ese año escolar no estaba publicada. Cuando se conozca, usted elige si su hijo baja a dos clases por semana para seguir, o hace una pausa.'
        ] },
        { kind: 'source', html: 'Las fechas escolares provienen de la Tabla 1 de la RM 501-2025-MINEDU, leída directamente en la página escaneada el 9 de noviembre de 2026. La diferencia horaria proviene de tzdata, que registra America/Lima en UTC-5 sin cambios estacionales desde 1994 y Asia/Kolkata en UTC+5:30, y del reloj del INACAL.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota el avance de un verano?',
    lede: 'Ubicamos a cada estudiante en cinco niveles propios. Tras un primer verano, lo habitual es subir uno o dos.',
    table: { caption: 'Cinco niveles de programación que usamos con las familias de Miraflores (nuestros)', head: ['Nivel', 'Edad habitual', 'Qué logra'], rows: [
      ['1. Seguir pasos', '6 a 8 años', 'Ordena instrucciones para que un personaje llegue a su meta'],
      ['2. Decidir', '7 a 10 años', 'Usa condiciones sencillas: si ocurre algo, el programa responde de cierta forma'],
      ['3. Filtrar', '9 a 12 años', 'Escribe una condición con dos lados, como el filtro por edad'],
      ['4. Probar bordes', '11 a 15 años', 'Comprueba sus programas con los casos límite, no solo con el del medio'],
      ['5. Construir', '13 a 17 años', 'Termina un proyecto propio y lo presenta en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'No mida el verano por horas frente a la pantalla, sino por lo que su hijo puede explicarle. Un niño que le cuenta por qué su filtro fallaba entendió algo importante.',
      'Si su hijo tiene 13 años o más y nunca programó, empieza en el nivel 2 o 3: a esa edad se avanza rápido.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Pruebe su programa con la edad más chica y la más grande del rango, no solo con una del medio.',
      'Si una condición deja pasar todo, léala en voz alta: suele sobrar un or.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos, ordenados por edad',
    lede: 'Opciones para el camino a elección, en vivo y en inglés con un mentor que no cambia, a 4 o 5 clases semanales en verano, en un grupo de edad parecida o a solas.',
    bands: [
      { num: 'I', h3: 'Primeros grados', sub: 'De 6 a 9 años', courses: [
        { code: 'VAMI / INI / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Bloques que se leen como frases, para los que recién empiezan.' },
        { code: 'VAMI / INI / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programado', blurb: 'Construir y automatizar en un mundo que ya les encanta.' },
        { code: 'VAMI / INI / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para pequeños', blurb: 'Patrones, orden y acertijos antes del primer bloque.' }
      ] },
      { num: 'II', h3: 'Primaria alta', sub: 'De 9 a 12 años', courses: [
        { code: 'VAMI / PRI / 01', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding para niños', blurb: 'Tres meses de curso que caben enteros en un verano intensivo.' },
        { code: 'VAMI / PRI / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Obbys, marcadores y tiendas que funcionan de verdad.' },
        { code: 'VAMI / PRI / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Rumbo a un hackatón', blurb: 'Idear, construir y presentar un proyecto en equipo.' }
      ] },
      { num: 'III', h3: 'Adolescentes', sub: 'De 13 a 17 años', courses: [
        { code: 'VAMI / ADO / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'Apps para adolescentes', blurb: 'Aplicaciones para el celular con React Native.' },
        { code: 'VAMI / ADO / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Videojuegos con Unity', blurb: 'C# y Unity para publicar un juego terminado.' },
        { code: 'VAMI / ADO / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript para adolescentes', blurb: 'Páginas interactivas y juegos que corren en el navegador.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases en vivo durante las vacaciones?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después del parque', l: 'Al volver de la mañana al aire libre, ya descansado.' },
      { time: 'Al caer la tarde', l: 'Cuando baja el sol y la familia está en casa.' },
      { time: 'A la carta', l: 'Sesiones individuales cuando a la familia le acomode.' }
    ],
    cells: [
      { h3: 'Un mentor fijo', p: 'Conoce a su hijo y sigue su progreso clase a clase.' },
      { h3: 'Inglés con calma', p: 'Explicaciones cortas, siempre acompañadas en pantalla.' },
      { h3: 'Manos en el código', p: 'Su hijo escribe y prueba; el mentor pregunta y orienta.' },
      { h3: 'Ritmo intensivo', p: 'En verano, de 4 a 5 clases; programas probados con casos límite.' },
      { h3: 'Aviso a la familia', p: 'Después de las clases, una nota con lo hecho y lo que sigue.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte chicos de edad parecida, o solo con su mentor.' }
    ]
  },

  projectsH2: 'A dónde puede llevar un verano de código',
  projectsLede: 'Algunos de nuestros estudiantes mayores ya publican aplicaciones completas; aquí hay una muestra, y la página <a class="ag-inline-link" href="/student-labs">Student labs</a> tiene muchas más, presentadas en inglés.',
  reviewsLede: 'Lo que escriben en Google madres, padres y estudiantes, citado sin cambios y en inglés.',

  fees: {
    h2: 'Precios para familias de Miraflores',
    lede: 'Las tarifas de estas tarjetas son las del año escolar, con ocho clases al mes, y aparecen en dólares estadounidenses; se cargan a su tarjeta y el banco emisor las pasa a soles con su cotización. El verano va más rápido, con 4 a 5 clases por semana, así que ese ritmo y su mensualidad se definen con el mentor antes de comenzar. La sesión de prueba es gratis.',
    free: ['Una sesión de prueba sin costo', 'Una propuesta de curso según la edad', 'No se pide tarjeta'],
    group: ['Grupo de quince a veinte chicos de edad similar', 'El mismo mentor de principio a fin', 'Dos clases semanales en el año; en verano, 4 o 5 a definir', 'Pago mes a mes, sin permanencia'],
    one: ['Solo su hijo y su mentor', 'Ritmo y proyectos a su medida', 'Días y horas que decide la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Miraflores: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. El idioma de todas nuestras clases es el inglés, sin excepción, y muchas familias de Miraflores nos eligen por eso: su hijo programa y, a la vez, practica el inglés hablado. El mentor ajusta la velocidad al niño. Según el EF EPI 2025, Lima está en el nivel alto de inglés, y una clase así ayuda sobre todo a soltarse al hablar.' },
      { q: '¿Tienen clases para adolescentes de 13 a 17 años?', a: 'Sí. En los anuncios municipales que revisamos casi no hay opciones para esa edad. Los adolescentes pueden seguir el camino de Python e IA o elegir un curso como JavaScript, apps, videojuegos con Unity o DSA, siempre con 4 a 5 clases semanales en verano.' },
      { q: '¿Las clases son en algún local de Miraflores?', a: 'No tenemos locales. Todo ocurre por videollamada, en directo, y el mentor está en la India; su hijo participa desde su propia casa.' },
      { q: '¿Se puede combinar con ECO KIDS u otro taller municipal?', a: 'Sí, si la municipalidad vuelve a ofrecer un programa así en 2027. Cada sesión dura alrededor de una hora y usted decide cuándo van las 4 o 5 de la semana, así que la mañana queda libre para un taller en el parque. La municipalidad y nosotros no tenemos ninguna relación.' },
      { q: '¿A partir de qué edad?', a: 'Desde los 6 años, con razonamiento y bloques. Desde los 9 la mayoría puede escribir Python; a partir de los 13 se puede empezar directo con JavaScript o Python.' },
      { q: '¿Cuál es el horario?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India lleva 10 horas y 30 minutos de adelanto: las 10:00 a. m. en Miraflores son las 8:30 p. m. allá.' },
      { q: '¿Cuántas clases hay por semana en el verano?', a: 'De 4 a 5, en vivo, de una hora más o menos cada una. Es el doble o algo más que el ritmo del año escolar, que es de dos por semana.' },
      { q: '¿Cuánto dura el verano y qué se alcanza a terminar?', a: 'Va desde la semana en que su hijo empiece, entre enero y marzo, hasta que vuelva el colegio. Según nuestra cuenta, diez semanas a 4 o 5 clases dan 40 a 50 clases: alcanzan para cerrar un curso corto, como vibe coding para niños, y para hacer más o menos la mitad de uno largo, que continúa en marzo.' },
      { q: '¿Necesita mi hijo saber inglés?', a: 'No hace falta que lo hable con fluidez. Con entender saludos e instrucciones simples puede empezar; el resto lo va ganando en las clases, y en pocas semanas la pronunciación del mentor le resulta familiar.' },
            { q: '¿Cuánto cuesta el verano?', a: 'La tarifa publicada es la mensual de ocho clases. La del verano, con 4 o 5 clases por semana, la define el mentor con usted antes de arrancar, según el formato. Se cobra a una tarjeta en dólares de Estados Unidos y el banco la pasa a soles; la sesión de prueba no pide medio de pago. Somos independientes del MINEDU y de los colegios: no damos notas, solo un certificado de finalización propio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Siga explorando',
    lede: 'Páginas del sitio para preparar el verano de su hijo, escritas en su mayoría en inglés.',
    items: [
      { href: '/summer-coding-camp-kids', label: 'Summer coding for kids', p: 'Cómo arrancar a programar en unas vacaciones.' },
      { href: '/summer-coding-camp-teens', label: 'Summer coding for teens', p: 'Ideas de proyectos de verano para adolescentes.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'Más sobre el primer lenguaje de bloques.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Qué herramienta de IA corresponde a cada edad.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Por qué enseñamos a razonar antes que a usar atajos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una clase nuestra, contada paso a paso.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis antes de las vacaciones',
    lede: 'En la clase de prueba, el mentor conoce a su hijo hablando despacio en inglés, le propone un pequeño reto acorde a su edad y ve cómo razona. Luego le sugerimos el camino que encaja con su edad (Python e IA o un curso a elección), si van cuatro o cinco clases por semana, el formato y unas horas que no choquen con el parque; con eso queda acordada la mensualidad del verano.',
    readFirst: 'Si quiere informarse antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cuenta cómo es una clase y <a class="ag-inline-link" href="/courses">All courses</a> muestra todos los temarios (las dos páginas están en inglés).',
    note: 'Enseñamos en directo por videollamada, en inglés y desde la India. WhatsApp es la forma más rápida de hablar con nosotros, y puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos por edad', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'De 9 a 12: Python e IA' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'De 8 a 12: videojuegos' },
        { href: '/courses/python-complete-masterclass-teens', label: 'De 13 a 17: Python' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para la familia', links: [
        { href: '/summer-coding-camp-kids', label: 'Verano para niños' },
        { href: '/summer-coding-camp-teens', label: 'Verano para adolescentes' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Un rango tiene dos lados'
  },

  personalityCss: `
.ag-root.ag-vami .ag-hero h1 { letter-spacing: -0.006em; max-width: 20ch; }
.ag-root.ag-vami .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-vami .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-vami .ag-table caption { text-align: left; text-transform: none; }
.ag-root.ag-vami .ag-steps li { line-height: 1.7; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad de Miraflores notes of 5 January 2026 (ECO KIDS) and 8 January 2025 (talleres de verano 2025), miraflores.gob.pe; INEI Censos Nacionales 2025 (Lima Metropolitana, Cuadros N.° 1 and 3); MINEDU RM 501-2025 Tabla 1 and CNEB; INEI TIC en los Hogares II Trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 8 and 9 November 2026. The two summer tracks, the age table, the monthly class tally, the weekly plan, levels and Python lesson are our own.',
    localProject: 'Which summer programme fits a 10-year-old? An original Python lesson on the five Miraflores council programmes and their published age bands: Version 1 uses or and prints all five, including "Programa Jovenes 2025 fits age 10"; Version 2 uses the chained comparison minimo <= edad <= maximo and prints three for age 10 and, testing the edge, the Nido for age 6; the closing challenge adds a 13 to 17 coding class and shows the teen gap. Lesson family: boolean logic in a two-sided range check, with inclusive edges.',
    requiredMentions: ['Programa Jovenes 2025 fits age 10', 'Nido Municipal 2025 fits age 10', 'minimo &lt;= edad &lt;= maximo', 'Ninguno de los cinco se anuncia para adolescentes de 13 a 17 años', '6 575 adolescentes de 12 a 17 años', 'Un rango tiene dos lados', 'Una semana de verano de ejemplo para un niño de 9 años', '7 semanas desde el martes 13 de enero', 'suele sobrar un or', 'Cuántas clases suma un verano mes a mes'],
    sources: [
      { claim: 'ECO KIDS 2026: free, ages 6 to 12, district parks, seven weeks from Tuesday 13 January, weekly two-hour sessions, EDUCCA.', url: 'https://www.miraflores.gob.pe/miraflores-lanza-eco-kids-vacaciones-utiles-ambientales-para-ninas-y-ninos-del-distrito/' },
      { claim: 'Talleres de verano 2025: Nido 3 to 6 (13 January to 21 February), Juguemos 8 to 12, Pequeños Líderes 6 to 12, Programa Jóvenes 18 to 29.', url: 'https://www.miraflores.gob.pe/las-mejores-opciones-para-talleres-de-verano-2025-estan-en-miraflores/' },
      { claim: 'Miraflores 126,049 total, 121,203 censada, 4,846 omitida, 67,835 women, 58,214 men; censada 6 to 11 6,204, 12 to 17 6,575, 60+ 29,900.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Fourth teaching block 19 October to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Lima Metropolitana 84.7% of households with internet; internet use 68.2% among children 6 to 11 (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 High; Peru speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A summer price, a fixed 2027 end date or a long course finished in the summer: refused; the 4 to 5 a week pace and its fee are agreed with the mentor, and the monthly tally is labelled illustrative.',
      'That Miraflores offers nothing at all for teenagers: not said; the page says only that none of the five programmes with a stated age band in these two notes is announced for 13 to 17.',
      'Council workshop prices, addresses, schedules and phone numbers: in the notes, not repeated.',
      'A 2027 ECO KIDS or other 2027 council programme: not announced when checked; the page makes combining conditional on the council repeating it.',
      'Traffic or commute figures: none; the page says only that classes at home need no travel.',
      'INEI planos estratificados income strata for Miraflores: not used.',
      'Affiliation with the Municipalidad de Miraflores, MINEDU, a UGEL or a school; Spanish-language teaching; robot kits: none, and the page says so.'
    ]
  }
};

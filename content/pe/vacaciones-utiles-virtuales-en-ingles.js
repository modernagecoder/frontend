// SHIP: market | Vacaciones útiles virtuales en inglés: 4 o 5 clases semanales de código en inglés | string indexing and an if/else rule (a or an), then a dictionary of exceptions
'use strict';
// Vacaciones útiles virtuales en inglés (ag- Spanish-language door, Peru cluster row PE109, P2 summer season, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Owner 2026-11-10 (brief, "Summer offer"): "summer page sells summer coding of python and ai or custom choose your courses
// regular class weekly 4 to 5 classes to complete the courses DSA web dev app dev and many more make nice summer pages".
// Revised 2026-11-10: two routes (Summer Python and AI, or any catalogue course) at 4 to 5 live classes a week, group or
// one to one, flexible hours, summer pace and fee agreed with the mentor before the first summer class, first class free.
// The page's own angle on the offer: how many classes in English a summer adds up to, by the number of weeks used.
// Formal "usted" throughout. Fees render in USD from the template only (standard eight-class monthly fee); no summer price.
// Course lengths quoted (duration field of content/courses/data/<file>.json, corrected 2026-11-10): html-css-beginners.json
// "4 months (16 weeks)"; python-ai-kids.json "8-10 months (32-40 weeks)" (64 to 80 classes at two a week). Our arithmetic (scratchpad summer_math.py): "6 weeks: 24 to 30 classes; months of regular
// pace (8/month): 3.0 to 3.75"; "8 weeks: 32 to 40 ... 4.0 to 5.0"; "10 weeks: 40 to 50 ... 5.0 to 6.25".
// Angle: the bilingual or English-curious Peruvian family that types "vacaciones útiles virtuales en inglés": they want the
// summer to keep (or build) English, at home, live. Spine: what "virtual" and "in English" mean with us (live, never
// recorded; English for the whole hour); which families it suits (bilingual, Cambridge and IB schools as context: COAR's
// Cambridge certificates and IB Diplomas from MINEDU); how much school English stops in January and February (CNEB hours,
// our calculation); whether virtual classes work in Peruvian homes (INEI ENAHO 2026 by area and device); our eight-week
// plan where the English grows with the code; one original Python lesson on the English article rule (a or an); clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-virtuales-en-ingles/;
// FACTS = facts-school/FACTS.md, MARKET = facts-market/MARKET.md):
//  CNEB (FACTS 57, 39, 41): primaria "Inglés 2 2 3 3 3 3"; secundaria JER "Inglés 3 3 3 3 3"; JEC "Inglés 5 5 5 5 5";
//    "horas pedagógicas (45 minutos)" (FACTS 44).
//  INEI, Boletín TIC II trimestre 2026 (MARKET 1.4): "el 64,5% de los hogares del país contaba con servicio de Internet. Por
//    área de residencia, en Lima Metropolitana, el 84,7% de los hogares disponía del servicio; en el resto urbano, el 66,2%;
//    mientras que, en el área rural solo el 27,1% tenía acceso."; "el 36,4% de los hogares del país disponía de al menos una
//    computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y 8,9% en el área
//    rural."; "el 84,2% de la población de 6 y más años"; "Lima Metropolitana, con un 92,4%; seguido del resto urbano con 86,1%;
//    y del área rural, con un 63,7%."; "el 90,2% de la población usuaria de Internet de 6 y más años usó Internet a través de
//    un teléfono celular ... laptop (18,9%), computadora (14,0%)"; "el 94,1% de los usuarios de Internet de 6 y más años de
//    edad utilizó Internet al menos una vez al día"; "los niños de 6 a 11 años (68,2%)"; "1/ Lima Metropolitana incluye la
//    Provincia Constitucional del Callao."
//  EF EPI 2025, Peru page (MARKET 1.3): "EF EPI score" "519"; "Global ranking:" "#52"; "Listening score:" 499; "Speaking
//    score:" 480; "Cities Lima 555"; band thresholds in page data: high from 550, moderate from 500.
//  MINEDU press note 17 April 2026 (FACTS 91, 93): "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del
//    Bachillerato Internacional. De este total, los estudiantes de los COAR representan el 47 % del total nacional"; "515
//    estudiantes de quinto de secundaria de los COAR obtuvieron certificaciones internacionales del idioma inglés Cambridge".
//  RM 501-2025-MINEDU Tabla 1 (FACTS 23; page image checked by eye 2026-11-09): last teaching block "Del 19 octubre a 18 de
//    diciembre" 2026.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I): school English minutes a week = hours x 45: 2 x 45 = 90, 3 x 45 = 135, 5 x 45 = 225;
//    over the eight weeks of January and February 2027 (59 days): 90 x 8 / 60 = 12.0 h, 135 x 8 / 60 = 18.0 h,
//    225 x 8 / 60 = 30.0 h of school English that are not taught in the break.
// Our own example, run with python3 -I (articulo.py, reto.py and arreglo.py in the src-pages folder), exact output:
//    articulo.py: an alpaca / a condor / an iguana / a llama / an otter / a vicuna / an eagle / a hummingbird
//    reto.py (same rule): a hour / an umbrella / an university / a honest / an uniform / an orange
//    arreglo.py (dictionary of exceptions): an hour / an umbrella / a university / an honest / a uniform / an orange
// Lesson family: string indexing (palabra[0]) and the in operator in an if/else rule, testing the rule on hard words, then a
// dictionary of exceptions checked before the general rule (if, elif, else order).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "animales = ['alpaca', 'condor', 'iguana', 'llama', 'otter', 'vicuna', 'eagle', 'hummingbird']",
  '',
  'for animal in animales:',
  "    if animal[0] in 'aeiou':",
  "        articulo = 'an'",
  '    else:',
  "        articulo = 'a'",
  '    print(articulo, animal)'
].join('\n');

const OUT = [
  'an alpaca',
  'a condor',
  'an iguana',
  'a llama',
  'an otter',
  'a vicuna',
  'an eagle',
  'a hummingbird'
].join('\n');

const FIX = [
  "palabras = ['hour', 'umbrella', 'university', 'honest', 'uniform', 'orange']",
  "excepciones = {'hour': 'an', 'honest': 'an', 'university': 'a', 'uniform': 'a'}",
  '',
  'for palabra in palabras:',
  '    if palabra in excepciones:',
  '        articulo = excepciones[palabra]',
  "    elif palabra[0] in 'aeiou':",
  "        articulo = 'an'",
  '    else:',
  "        articulo = 'a'",
  '    print(articulo, palabra)'
].join('\n');

const FIXOUT = [
  'an hour',
  'an umbrella',
  'a university',
  'an honest',
  'a uniform',
  'an orange'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Vacaciones útiles virtuales en inglés' },
  slug: 'vacaciones-utiles-virtuales-en-ingles',
  code: 'vuv',
  accent: '#750B00',
  accentRationale: 'Vacaciones útiles virtuales en inglés: a deep cochineal red #750B00, the carmine Peru has dyed with since long before screens, for a page about the language of the classes; darker and redder than the terracotta and cacao summer pages; contrast 9.45 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles virtuales en inglés',
  title: 'Vacaciones útiles virtuales en inglés: programación en vivo',
  description: 'Vacaciones útiles virtuales en inglés en Perú: Python e IA o el curso que elija, de 4 a 5 clases en vivo por semana, todo en inglés, en grupo o individual.',
  ogDescription: 'Un verano virtual y en inglés para escolares en Perú: cuántas clases en inglés suma un verano a 4 o 5 por semana, cuánto inglés escolar se pausa y una lección de Python sobre a y an.',
  twitterDescription: 'Vacaciones útiles virtuales en inglés para escolares en Perú: de 4 a 5 clases de programación por semana, en vivo y todo en inglés.',
  pageName: 'Vacaciones útiles virtuales en inglés',
  webPageDescription: 'Guía para familias en Perú que buscan vacaciones útiles virtuales en inglés: las dos rutas de verano a 4 o 5 clases por semana y cuántas clases en inglés suman, qué significa una clase virtual y en inglés con nosotros, para qué familias tiene sentido, cuántas horas de inglés escolar se detienen en el verano según el CNEB, qué dicen el INEI y el EF EPI sobre internet e inglés en el Perú, un plan de verano propio y una lección de Python sobre los artículos a y an.',
  courseDescription: 'Clases en vivo y en línea de programación para niños y adolescentes de 6 a 17 años en todo el Perú, dictadas de principio a fin en inglés, a 4 o 5 clases por semana en las vacaciones de verano 2027: la ruta Python e IA o un curso a elección (web, videojuegos, Java, DSA y más), en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles virtuales en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#verano-en-ingles', label: 'Las dos rutas' },
    { href: '#virtual', label: 'Virtual y en inglés' },
    { href: '#familias', label: 'Para quién' },
    { href: '#ingles-escolar', label: 'Inglés en verano' },
    { href: '#ejemplo', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Verano 2027 &middot; Virtual y todo en inglés',
  h1: 'Vacaciones útiles virtuales en inglés, con programación en vivo',
  lede: 'Hay familias que quieren que el verano sirva para algo más que descansar, y que además no se pierda el inglés ganado durante el año. Para ellas proponemos un verano de programación dictado íntegramente en inglés, en vivo desde casa, a 4 o 5 clases por semana: casi una conversación diaria con el mismo mentor. Aquí explicamos cómo funciona, para quién tiene sentido y cuántas clases suma.',
  secondaryCta: { href: '#verano-en-ingles', label: 'Ver las dos rutas de verano' },
  wa: 'Hola Modern Age Coders, buscamos vacaciones útiles virtuales en inglés para nuestro hijo o hija en Perú, con clases de programación en vivo. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; de 4 a 5 clases por semana, sin traducción',
  spec: [
    ['Idioma de la clase', 'Inglés de principio a fin, sin pasar al castellano'],
    ['Modalidad', 'Virtual y en vivo, nunca videos grabados'],
    ['Rutas', 'Python e IA, o el curso que elija'],
    ['Ritmo de verano', 'De 4 a 5 clases en vivo por semana'],
    ['Formato', 'Clase grupal de quince a veinte, o individual'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí hay vacaciones útiles virtuales en inglés: Modern Age Coders enseña programación a escolares peruanos de 6 a 17 años en clases en vivo, en línea y en inglés; durante el verano 2027 el ritmo es de 4 a 5 clases a la semana. Virtual quiere decir una videollamada en tiempo real con un mentor desde la India, no un curso grabado; en inglés quiere decir toda la clase, sin traducción. Puede seguir la ruta Python e IA o el curso que prefiera, solo o en grupo, a la hora que usted escoja.',

  picks: {
    eyebrow: 'Para el verano en inglés',
    h2: 'Tres cursos que hacen hablar inglés a ritmo de verano',
    lede: 'Uno de la ruta Python e IA y dos de la ruta a elección. Los elegimos porque obligan a conversar: un modelo que hay que defender, un juego que hay que explicar y un lenguaje profesional que se aprende con su vocabulario original.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'VUV / 01', title: 'Ruta 2: videojuegos para niños', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'De 8 a 12 años. Scratch, Roblox y Minecraft en un mismo recorrido; en cada clase el niño cuenta en inglés qué hace su personaje y por qué.' },
      { course: 'python-ai-kids-masterclass', code: 'VUV / 02', title: 'Ruta 1: Python con proyectos de IA', alt: 'Imagen del curso de Python con proyectos de IA', note: 'De 9 a 12 años. Cada programa que adivina o clasifica se equivoca alguna vez, y explicar por qué, en inglés, es la mitad de la clase. El verano cubre entre la mitad y tres cuartas partes del curso.' },
      { course: 'java-programming-masterclass-for-teens', code: 'VUV / 03', title: 'Ruta 2: Java para adolescentes', alt: 'Imagen del curso de Java para adolescentes', note: 'Para secundaria. El lenguaje que piden muchas carreras de ingeniería, aprendido con su terminología en inglés desde la primera clase.' }
    ]
  },

  sections: [
    {
      id: 'verano-en-ingles',
      eyebrow: 'Verano 2027 en inglés',
      h2: '¿Qué incluyen nuestras vacaciones útiles virtuales en inglés?',
      lede: 'Un verano entero hablando inglés mientras se programa. Su hijo elige entre la ruta Python e inteligencia artificial o el curso que más le guste del catálogo, y en cualquiera de las dos tiene de 4 a 5 clases en vivo por semana con un mentor que solo le habla en inglés.',
      body: [
        { kind: 'two',
          leftH3: 'Ruta 1: Python e IA, en inglés',
          left: [
            'Python primero y, sobre él, proyectos de inteligencia artificial adecuados a su edad: programas que adivinan, clasifican o aprenden de ejemplos. Es la ruta que más conversación genera, porque cada modelo se equivoca en algo y hay que explicar por qué, en inglés.',
            'Entre los 9 y los 12 años se trabaja con el curso de Python e IA para niños. Los adolescentes empiezan con Python desde cero y pasan a datos o a aprendizaje automático cuando el lenguaje ya les resulta cómodo.'
          ],
          rightH3: 'Ruta 2: el curso que elija, también en inglés',
          right: [
            'Videojuegos, una página web con HTML y CSS, apps, Java, C++, estructuras de datos y algoritmos, Roblox, Scratch, vibe coding o matemática: cualquiera se lleva a ritmo de verano.',
            'Para las familias de colegios bilingües, la ruta 2 también puede ser matemática IGCSE o IB en inglés. El idioma de la clase es el mismo en todos los cursos: inglés de principio a fin.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Clases en inglés que suma un verano según cuántas semanas use (cálculo nuestro)', head: ['Semanas de verano que aproveche', 'A 4 clases por semana', 'A 5 clases por semana', 'Equivale a este tiempo de nuestro ritmo normal'], rows: [
          ['6 semanas, si empieza a mediados de enero de 2027', '24', '30', 'De 3 a casi 4 meses'],
          ['8 semanas, enero y febrero de 2027', '32', '40', 'De 4 a 5 meses'],
          ['10 semanas, si empieza a fines de diciembre de 2026', '40', '50', 'De 5 a algo más de 6 meses']
        ] },
        { kind: 'source', html: 'Cuentas hechas por Modern Age Coders. La última columna toma las clases de verano y las divide entre ocho, el número de clases mensuales que su hijo tendría con nuestro ritmo de marzo a diciembre (dos por semana). Cada una de esas clases es una conversación en vivo y en inglés con el mismo mentor.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué ruta conviene según la edad y qué inglés se practica más en cada una (propuesta nuestra)', head: ['Edad', 'Ruta 1: Python e IA', 'Ruta 2: algunos cursos a elección', 'El inglés que más se ejercita'], rows: [
          ['6 a 8 años', 'Todavía con bloques: juegos y animaciones', 'Scratch, Minecraft, apps con bloques', 'Escuchar instrucciones y nombrar lo que se ve en pantalla'],
          ['9 a 12 años', 'Python con proyectos de IA', 'Videojuegos, web para niños, C++', 'Anunciar en voz alta qué hará el programa'],
          ['13 a 17 años', 'Python completo, luego ciencia de datos o IA', 'Java, DSA, HTML y CSS, React, matemática IGCSE o IB', 'Justificar decisiones técnicas y presentar un proyecto']
        ] },
        { kind: 'p', mt: true, html: 'Sobre la duración, con números nuestros: HTML y CSS figura en su página con 4 meses, unas 32 clases a ritmo normal, así que cabe dentro de un verano intensivo. El de Python e IA para niños, en cambio, publica entre 8 y 10 meses; un verano intensivo recorre entre la mitad y tres cuartas partes, y la otra parte queda para el año escolar si la familia lo desea. Ningún curso largo se termina a la fuerza; lo que sí crece de forma visible en diez semanas es la soltura para hablar.' }
      ]
    },
    {
      id: 'virtual',
      eyebrow: 'Virtual y en inglés',
      h2: '¿Qué significa que las vacaciones útiles sean virtuales y en inglés?',
      lede: 'Dos cosas concretas. Virtual: su hijo se conecta desde casa a una videollamada en tiempo real con un mentor que lo ve, lo escucha y le responde. En inglés: el mentor habla en inglés toda la clase, y el niño aprende a responder en inglés también.',
      body: [
        { kind: 'three', cells: [
          { h3: 'En vivo, no grabado', p: 'No enviamos videos para ver a solas. Cada sesión ocurre en tiempo real: el mentor comparte pantalla, el niño comparte la suya y los dos trabajan sobre el mismo código mientras conversan.' },
          { h3: 'Inglés toda la hora', p: 'El mentor no cambia al castellano para explicar. Cuando algo no se entiende, lo dice de otra manera, más lento, o lo muestra en pantalla. Así el niño aprende a sostener una conversación sin traducir mentalmente.' },
          { h3: 'Un mentor que se adapta', p: 'Nuestros mentores viven en la India y hablan con claridad, ajustando el ritmo y el acento a cada estudiante. Con los más pequeños usan frases cortas; con adolescentes, el vocabulario técnico completo.' }
        ] },
        { kind: 'p', mt: true, html: 'No hay fecha de inauguración: su hijo empieza la semana que usted elija entre diciembre de 2026 y marzo de 2027, a 4 o 5 clases por semana, y si le funciona sigue durante el año escolar a dos por semana. La RM 501-2025-MINEDU sugiere que el último bloque lectivo de 2026 termine el 18 de diciembre de 2026, con margen para que cada DRE o UGEL lo ajuste; la fecha de regreso a clases de 2027 aún no se conocía en noviembre de 2026.' },
        { kind: 'p', html: 'Si busca algo distinto, por ejemplo un enfoque general de programación para primaria explicado paso a paso, la página <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> lo detalla. Esta página se concentra en la otra mitad: el idioma.' }
      ]
    },
    {
      id: 'familias',
      eyebrow: 'Para quién',
      h2: '¿Para qué familias tienen sentido unas vacaciones útiles en inglés?',
      lede: 'Para tres tipos de familia, sobre todo. En las tres, el inglés no es un obstáculo sino parte de lo que buscan.',
      body: [
        { kind: 'ol', items: [
          '<strong>Familias de colegios bilingües o internacionales.</strong> Su hijo estudia buena parte del día en inglés y en enero y febrero deja de usarlo. Una clase semanal en inglés mantiene el oído y la soltura sin que parezca tarea.',
          '<strong>Familias que se preparan para un programa exigente en inglés.</strong> El Bachillerato Internacional, los exámenes de Cambridge o una universidad con cursos en inglés. Programar y explicar el código en inglés es práctica real para esas metas.',
          '<strong>Familias que quieren dar el salto.</strong> Su hijo sabe algo de inglés del colegio pero nunca lo ha usado para hacer algo. Aquí lo usa para construir un juego o una web, que es una razón mucho más poderosa para hablar que un ejercicio de gramática.'
        ] },
        { kind: 'p', mt: true, html: 'El interés por certificar el inglés no es exclusivo de los colegios privados. Según una nota del MINEDU del 17 de abril de 2026, 515 estudiantes de quinto de secundaria de los Colegios de Alto Rendimiento (COAR) obtuvieron en 2025 certificaciones internacionales de inglés de Cambridge, y de los 2502 estudiantes que obtuvieron el Diploma del Bachillerato Internacional en todo el país en 2025, los de los COAR fueron el 47 %. Lo citamos como contexto: no tenemos relación con los COAR ni con ningún colegio, y nuestras clases no preparan para un examen de idioma.' },
        { kind: 'p', html: 'Para familias de colegios bilingües, Cambridge o IB en Lima que prefieren leer en inglés, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> recoge los cursos que más eligen sus hijos, incluidos los de matemática e informática del IB y de IGCSE.' }
      ]
    },
    {
      id: 'ingles-escolar',
      eyebrow: 'El inglés en verano',
      h2: '¿Cuántas horas de inglés del colegio se pausan en las vacaciones?',
      lede: 'Depende del grado y del tipo de jornada, pero en todos los casos son horas reales. Este es el inglés semanal que fija el CNEB y lo que esas horas suman en un verano de ocho semanas.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Inglés en el plan de estudios del CNEB y lo que representan ocho semanas sin clases', head: ['Nivel y jornada', 'Horas pedagógicas de Inglés por semana', 'Minutos por semana', 'En ocho semanas de verano'], rows: [
          ['Primaria, 1° y 2°', '2', '90', '12 horas'],
          ['Primaria, 3° a 6°', '3', '135', '18 horas'],
          ['Secundaria, jornada escolar regular', '3', '135', '18 horas'],
          ['Secundaria, jornada escolar completa', '5', '225', '30 horas']
        ] },
        { kind: 'source', html: 'Fuente de las dos primeras columnas: MINEDU, Currículo Nacional de la Educación Básica, planes de estudio de primaria y de secundaria en jornada escolar regular y completa; el CNEB cuenta en horas pedagógicas de 45 minutos. Las dos últimas columnas son cálculo nuestro: horas por 45 minutos, y luego por las ocho semanas de enero y febrero de 2027. Los horarios concretos los arma cada institución, así que el colegio de su hijo puede tener más horas de inglés.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que mide el EF EPI',
          left: [
            'El EF English Proficiency Index (EF EPI), en su edición 2025, ubica al Perú en el puesto 52 con 519 puntos, en el nivel moderado, mientras que la ciudad de Lima llega a 555 y entra en el nivel alto, que EF fija desde 550.',
            'Dentro del puntaje del país, la comprensión auditiva marca 499 y la expresión oral 480, las dos habilidades más bajas. Son justamente las que se practican en una clase en vivo: escuchar a alguien que no habla castellano y responderle.'
          ],
          rightH3: 'Por qué la programación ayuda',
          right: [
            'En una clase de idiomas se habla para practicar. En una clase de programación en inglés se habla porque hace falta: para pedir ayuda con un error, para explicar qué hace un bucle o para proponer una idea.',
            'Además, el código ya está escrito en inglés. Palabras como <code>print</code>, <code>while</code>, <code>return</code> o <code>true</code> se vuelven familiares sin esfuerzo, y el niño las asocia con algo que hizo, no con una lista para memorizar.'
          ] },
        { kind: 'p', mt: true, html: 'Una advertencia honesta: el EF EPI se calcula con adultos que rinden el examen de EF, no con escolares, así que no describe el inglés de su hijo. Lo usamos porque muestra un patrón del país: en el Perú la lectura en inglés va por delante de la escucha y del habla. Un verano de clases habladas va directo a esa brecha. Y la escala cambia: frente a las 12 a 30 horas de inglés escolar que se pausan en enero y febrero, un verano con nosotros en esas mismas ocho semanas suma de 32 a 40 clases en vivo, todas en inglés (cálculo nuestro).' }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Internet en casa',
      h2: '¿Funcionan las clases virtuales desde casa en Perú?',
      lede: 'En la mayoría de hogares urbanos, sí: la conexión ya está. Lo que más falta no es internet sino una computadora, y para programar la computadora es indispensable.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Internet y computadora en los hogares del Perú, segundo trimestre de 2026, según el INEI', head: ['Indicador', 'Total país', 'Lima Metropolitana', 'Resto urbano', 'Área rural'], rows: [
          ['Hogares con servicio de internet', '64,5 %', '84,7 %', '66,2 %', '27,1 %'],
          ['Hogares con al menos una computadora', '36,4 %', '53,3 %', '41,3 %', '8,9 %'],
          ['Personas de 6 años a más que usan internet', '84,2 %', '92,4 %', '86,1 %', '63,7 %']
        ] },
        { kind: 'source', html: 'Fuente: Instituto Nacional de Estadística e Informática (INEI), "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", informe técnico N.° 03, setiembre de 2026, con datos de la Encuesta Nacional de Hogares del segundo trimestre de 2026. En el INEI, Lima Metropolitana incluye la Provincia Constitucional del Callao.' },
        { kind: 'two', mt: true,
          leftH3: 'El celular no alcanza',
          left: [
            'El mismo informe muestra que el 90,2 % de quienes usan internet se conectan por el celular, frente al 18,9 % que usa laptop y el 14,0 % que usa una computadora de escritorio. Para escuchar una clase basta el celular; para escribir código, no.',
            'Por eso, antes de la primera clase le preguntamos qué equipo tiene su hijo. Una laptop sencilla o una PC de la casa, con cámara y audífonos, es suficiente.'
          ],
          rightH3: 'Los niños, los que menos se conectan',
          right: [
            'El INEI registra que el uso de internet fue menor entre los niños de 6 a 11 años, con 68,2 %, mientras que el 94,1 % de los usuarios de 6 años a más se conecta al menos una vez al día.',
            'Para un niño pequeño, la clase virtual puede ser su primera experiencia seria frente a una computadora. Los mentores lo saben y dedican los primeros minutos a que se sienta cómodo: dónde está el micrófono, cómo se comparte la pantalla, cómo se levanta la mano.'
          ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Inglés y código',
      h2: '¿Cómo avanza el inglés en un verano de clases virtuales casi diarias?',
      lede: 'Le sugerimos un plan propio en el que el código y el inglés crecen juntos, pensado para 4 o 5 clases por semana. No tiene fechas: su hijo empieza la semana que usted decida y, en marzo, sigue o se detiene.',
      body: [
        { kind: 'table', numCols: [], caption: 'Un verano en inglés: programación y habla en paralelo, por quincenas (plan nuestro, no oficial)', head: ['Quincena', 'Lo que programa', 'Lo que practica en inglés'], rows: [
          ['1.ª', 'Primeros programas: mensajes, colores, movimientos', 'Escuchar y seguir instrucciones: "click", "drag", "run it again"'],
          ['2.ª', 'Decisiones con if y else, como la lección de abajo', 'Decir qué hará el programa: "I think it will print..."'],
          ['3.ª', 'Repeticiones y listas; corregir errores', 'Pedir ayuda y describir un problema: "It says error on line 4"'],
          ['4.ª', 'Un proyecto propio: juego, web o programa útil', 'Explicar el proyecto completo en tres o cuatro frases'],
          ['Cierre', 'Mostrar el proyecto a la familia', 'Presentarlo en inglés y responder una pregunta']
        ] },
        { kind: 'source', html: 'Propuesta de Modern Age Coders para enero y febrero de 2027, a 4 o 5 clases en vivo por semana. En clases individuales el mentor ajusta el ritmo; en grupo, cada niño presenta su propio avance. Los ejemplos de frases son nuestros, y en la ruta 2 el código cambia según el curso, pero las frases se practican igual.' },
        { kind: 'p', mt: true, html: 'Con clases casi diarias, el inglés no tiene tiempo de enfriarse entre una sesión y otra, y eso se nota hacia la segunda quincena. La meta no es hablar perfecto al final del verano. Es que su hijo pierda el miedo a hablar en inglés con alguien que no le entiende el castellano, y que lo haga sobre algo que le importa: su propio programa.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Qué aprende su hijo en una clase de programación que también enseña inglés?',
      lede: 'Esta lección es nuestra y sirve para niños de 10 a 12 años o para adolescentes que recién empiezan. Une una regla de gramática inglesa, cuándo se dice "a" y cuándo "an", con una regla de programación: if y else.',
      body: [
        { kind: 'code', label: 'Versión 1: la regla de la vocal', lang: 'Python', code: PY, note: '<code>animal[0]</code> es la primera letra de la palabra. Si está entre las vocales <code>\'aeiou\'</code>, el programa escribe "an"; si no, "a".' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT, note: 'Copiado tal cual de la pantalla después de ejecutar el programa con Python 3. Con estos animales, varios de ellos andinos o amazónicos, la regla funciona en los ocho casos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>En voz alta.</strong> Su hijo pronuncia cada resultado: "an alpaca", "a condor". El mentor le pide notar cómo suena: "an" separa dos vocales que chocarían.',
          '<strong>Poner a prueba la regla.</strong> El reto es cambiar la lista por <code>hour</code>, <code>umbrella</code>, <code>university</code>, <code>honest</code>, <code>uniform</code> y <code>orange</code>. El mismo programa imprime <code>a hour</code>, <code>an university</code>, <code>a honest</code> y <code>an uniform</code>: cuatro errores de seis.',
          '<strong>Entender por qué.</strong> En inglés la regla depende del sonido, no de la letra. "Hour" empieza con sonido de vocal porque la h no suena; "university" empieza con un sonido parecido a "yu". El programa mira letras, no sonidos.',
          '<strong>Arreglarlo.</strong> Se agrega un diccionario de excepciones que se revisa antes que la regla general, como en la versión 2 de abajo.',
          '<strong>Explicar el orden.</strong> ¿Qué pasaría si el <code>elif</code> de las vocales fuera primero? "Hour" nunca llegaría a la excepción. El niño lo explica en inglés: "the exception must be checked first".'
        ] },
        { kind: 'code', label: 'Versión 2: excepciones primero', lang: 'Python', code: FIX, note: 'El diccionario <code>excepciones</code> guarda las palabras que rompen la regla y el artículo correcto para cada una.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: FIXOUT, note: 'Salida real, sin editar. Ahora las seis palabras llevan el artículo correcto.' },
        { kind: 'p', mt: true, html: 'Una sola lección deja dos ideas que sirven para siempre. En inglés, las reglas tienen excepciones y hay que escuchar, no solo leer. En programación, una regla que funciona con ocho ejemplos puede fallar con el noveno, y el orden en que se revisan los casos cambia el resultado. Probar con casos difíciles en vez de confiar en el primer resultado es la costumbre que enseñamos en todas las clases.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿Cómo se coordina la hora con un mentor en la India?',
      lede: 'Usted elige la hora en el reloj de Perú y el mentor la ve convertida en el suyo. La diferencia es de 10 horas y 30 minutos y no cambia en ningún mes, porque ni Perú ni la India adelantan la hora en verano.',
      body: [
        { kind: 'p', html: 'Algunas equivalencias calculadas por nosotros, solo como referencia y no como horario de clases: las 7:00 a. m. en Perú son las 5:30 p. m. en la India; las 9:30 a. m., las 8:00 p. m.; el mediodía, las 10:30 p. m.; y las 4:00 p. m. en Perú son las 2:30 a. m. del día siguiente en la India. Perú se rige por UTC-5 durante los doce meses (zona America/Lima de la base tzdata) y la India por UTC+5:30.' },
        { kind: 'p', html: 'En vacaciones conviene aprovechar la mañana peruana, que coincide con la tarde y la noche en la India. Si su familia viaja en enero o febrero dentro del Perú, la hora no cambia; si viaja fuera, avísenos y la clase se reprograma, sobre todo en el formato individual.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso en inglés',
    h2: '¿Cómo saber si su hijo está ganando soltura en inglés?',
    lede: 'Cinco escalones propios que observamos en clase, sin exámenes de idioma: solo lo que su hijo es capaz de hacer en inglés mientras programa.',
    table: { caption: 'Cinco escalones de inglés en una clase de programación (nuestros)', head: ['Escalón', 'Cuándo suele llegar', 'Su hijo ya puede'], rows: [
      ['1. Seguir', 'Primeras clases', 'hacer lo que el mentor pide sin que nadie le traduzca'],
      ['2. Nombrar', 'Segunda semana', 'decir en inglés el nombre de lo que usa: loop, variable, sprite, error'],
      ['3. Predecir', 'Semana 3', 'anunciar qué hará el programa con una frase completa'],
      ['4. Preguntar', 'Semanas 4 y 5', 'describir un error y pedir ayuda sin pasar al castellano'],
      ['5. Presentar', 'Cierre del verano', 'explicar su proyecto de principio a fin y responder una pregunta']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No le pida a su hijo que traduzca lo que aprendió. Pídale que se lo muestre y se lo explique en inglés, aunque usted no entienda todo. Lo que importa es que se anime.',
      'Si la primera semana su hijo habla poco, es normal. El oído se acostumbra primero; la voz llega después.'
    ] },
    right: { h3: 'Para los estudiantes', ps: [
      'Cuando no sepa una palabra en inglés, descríbala con otras. El mentor lo entenderá.',
      'Diga en voz alta lo que va a hacer antes de hacerlo: practica inglés y piensa con más orden.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos en inglés',
    h2: 'Nueve cursos más para un verano en inglés',
    lede: 'Todos se pueden elegir en la ruta 2 y llevar a 4 o 5 clases por semana, con mentor en vivo y en inglés, en grupo o individual. Incluimos matemática en inglés para las familias de colegios bilingües.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 12 años', courses: [
        { code: 'VUV / PRIM / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'De 7 a 12 años: comandos y bloques dentro de un mundo que su hijo ya conoce.' },
        { code: 'VUV / PRIM / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ desde primaria', blurb: 'De 9 a 12 años: un lenguaje escrito exigente, con juegos y acertijos.' },
        { code: 'VUV / PRIM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria en inglés', blurb: 'Para 1° a 5° grado: la matemática del colegio explicada con el vocabulario en inglés.' }
      ] },
      { num: 'II', h3: 'Programas internacionales', sub: 'Secundaria', courses: [
        { code: 'VUV / INT / 01', slug: 'igcse-mathematics-mastery', title: 'Matemática IGCSE', blurb: 'Core y Extended, para estudiantes de colegios con programa Cambridge.' },
        { code: 'VUV / INT / 02', slug: 'igcse-computer-science-0478-course', title: 'Informática IGCSE 0478', blurb: 'El programa completo de Computer Science de Cambridge, con práctica de examen.' },
        { code: 'VUV / INT / 03', slug: 'ib-diploma-computer-science-course', title: 'Informática del Diploma IB', blurb: 'La nueva guía de IB Computer Science, cuya primera evaluación es en 2027.' }
      ] },
      { num: 'III', h3: 'Desarrollo web y trabajo en equipo', sub: 'De 13 a 18 años', courses: [
        { code: 'VUV / WEB / 01', slug: 'react-for-teens-complete-masterclass', title: 'React para adolescentes', blurb: 'De JavaScript a aplicaciones web reales con React.' },
        { code: 'VUV / WEB / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git y GitHub', blurb: 'Control de versiones y colaboración, como en un equipo de software de verdad.' },
        { code: 'VUV / WEB / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML y CSS: una web real', blurb: 'Una web propia con textos escritos por su hijo en inglés; a ritmo de verano cabe entera.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organiza una clase virtual en inglés?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana peruana', l: 'La hora más tranquila del verano para concentrarse.' },
      { time: 'Al final del día', l: 'Para familias que quieren escuchar la clase de cerca.' },
      { time: 'Individual', l: 'Un horario propio que se ajusta a viajes y actividades.' }
    ],
    cells: [
      { h3: 'Solo inglés', p: 'El mentor reformula, muestra y repite, pero no traduce.' },
      { h3: 'Cámara y pantalla', p: 'El mentor ve el código del niño en tiempo real y lo guía.' },
      { h3: 'El niño escribe', p: 'Cada línea la teclea su hijo; nadie programa por él.' },
      { h3: 'Mentor fijo', p: 'La misma voz y el mismo acento semana tras semana.' },
      { h3: 'Casi a diario', p: 'De 4 a 5 sesiones por semana en verano, para que el oído no se enfríe.' },
      { h3: 'Grupo o uno a uno', p: 'Quince a veinte de edades cercanas, o solo su hijo.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Trabajos de estudiantes que aprendieron, como su hijo, a programar en inglés. Puede ver otros en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de Google escritas por familias y estudiantes, que dejamos en el inglés original.',

  fees: {
    h2: 'Precios para familias en Perú',
    lede: 'Lo que indican las tarjetas es el precio de un mes normal con nosotros, ocho clases, expresado en dólares estadounidenses y pagado con tarjeta; la conversión a su moneda la hace su banco el día del pago. Un verano de cuatro o cinco sesiones semanales tiene otro precio, que usted conversa y deja fijado con el mentor antes de empezar. La primera clase va por nuestra cuenta.',
    free: ['Primera clase sin costo, en inglés', 'Un vistazo al nivel de inglés y de programación', 'Sin tarjeta'],
    group: ['De quince a veinte estudiantes de edad cercana', 'Ocho clases al mes durante el año escolar', 'En verano, de 4 a 5 por semana, con precio fijado antes', 'Mes a mes, sin permanencia'],
    one: ['Solo su hijo con el mentor', 'Ritmo de inglés a su medida', 'Horario que usted decide']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles virtuales en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, y en esta página esa es precisamente la idea: se enseña únicamente en inglés, siempre en vivo y por internet. Su hijo aprende programación y, en la misma hora, practica escuchar y hablar con un mentor que ajusta el ritmo y repite cuando hace falta. El EF EPI 2025 pone a Lima en el nivel alto de inglés y señala la expresión oral como la habilidad más baja del país, la que más crece con una clase hablada.' },
      { q: '¿Qué significa "virtual" en sus vacaciones útiles?', a: 'Una videollamada en tiempo real con un mentor, nunca un curso grabado. El mentor ve la pantalla de su hijo, le responde al momento y corrige con él lo que no funciona.' },
      { q: '¿Qué nivel de inglés necesita mi hijo?', a: 'El que ya tiene. Es suficiente con que capte frases sencillas. El mentor adapta el vocabulario a cada edad, y al comienzo el oído necesita unas semanas para hacerse al acento del mentor.' },
      { q: '¿El mentor traduce al castellano si mi hijo no entiende?', a: 'No. Reformula con palabras más simples, muestra en pantalla o da un ejemplo, pero mantiene el inglés. Cuando su hijo contesta en castellano, el mentor toma lo que quiso decir y lo repite en inglés para que lo intente de nuevo.' },
      { q: '¿Cuántas clases en inglés tendría mi hijo en el verano?', a: 'De 4 a 5 por semana, siempre en vivo. Según cuántas semanas aproveche, eso suma de 24 a 50 clases en inglés (cálculo nuestro: seis semanas a 4 por semana dan 24; diez semanas a 5 dan 50).' },
      { q: '¿Cuándo pueden empezar y cuánto dura el verano?', a: 'Cualquier semana del verano, sin fecha común. Usted elige cuántas semanas usar; en marzo su hijo puede continuar durante el año escolar 2027 a dos clases por semana o detenerse. Los cursos cortos caben enteros en el verano; los largos avanzan la mitad o algo más.' },
      { q: '¿En qué horario se dictan?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre Lima y la India hay diez horas y media de diferencia, fija en cualquier mes.' },
      { q: '¿Sirven para preparar un examen de inglés como Cambridge?', a: 'No son clases de idioma ni preparan para un examen de inglés. Son clases de programación dictadas en inglés, que dan mucha práctica real de escuchar y hablar. Para la certificación, lo indicado es un curso de idioma.' },
      { q: '¿Hay clases de matemática en inglés también?', a: 'Sí. Para familias de colegios bilingües ofrecemos matemática de primaria y secundaria, IGCSE e IB, todas en vivo y en inglés, con la misma flexibilidad de horario.' },
      { q: '¿Cuánto cuesta y cómo se paga?', a: 'Se paga por tarjeta, en dólares estadounidenses, y el banco convierte el cargo. Los precios que ve en esta página corresponden a un mes normal de ocho clases; el del verano, con cuatro o cinco clases semanales, lo deja fijado con el mentor antes de empezar. La clase inicial no se cobra.' },
      { q: '¿Las clases tienen validez en el colegio?', a: 'Ninguna validez escolar: somos una academia independiente, sin vínculo con el MINEDU ni con colegios, y lo que su hijo recibe al completar un curso es una constancia emitida por Modern Age Coders, nada más.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas, varias pensadas para familias bilingües y escritas en inglés.',
    items: [
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para familias de colegios bilingües, Cambridge e IB en Lima.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El resumen de todo lo que ofrecemos en el Perú.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía en castellano para familias con niños de primaria.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'La versión para la Ciudad Blanca, escrita en inglés.' },
      { href: '/online-coding-summer-camp', label: 'Online coding summer camp', p: 'Cómo planteamos el verano en otros países donde enseñamos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase en vivo por dentro.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase en inglés, gratis, y elija su ruta',
    lede: 'La primera clase ya es en inglés, así su hijo y usted pueden ver cómo se siente. El mentor le habla con calma y le propone un pequeño reto de programación; al final le sugerimos una ruta, Python e IA o un curso a elección, y acordamos con usted el formato, las 4 o 5 clases semanales del verano y su precio.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestras clases y <a class="ag-inline-link" href="/courses">All courses</a> reúne el catálogo; ambas están escritas en inglés, una buena primera práctica de lectura.',
    note: 'Recuerde que enseñamos solo en inglés, siempre en vivo y por internet, desde la India. Para consultas rápidas use WhatsApp, donde le atendemos en castellano sin problema.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos en inglés', links: [
        { href: '/courses/game-development-masterclass-for-kids', label: 'Videojuegos para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/english-medium-coding-classes-lima', label: 'Colegios bilingües en Lima' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños, en inglés' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'An hour, a university: probar antes de confiar'
  },

  personalityCss: `
.ag-root.ag-vuv .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-vuv .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-vuv .ag-table th { text-transform: none; letter-spacing: 0; }
.ag-root.ag-vuv .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-vuv .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: CNEB primaria and secundaria (JER and JEC) weekly hours for Inglés and the 45-minute teaching hour; course durations from our course pages; press note of 17 April 2026 on COAR (Cambridge English certificates and IB Diplomas, 2025); RM 501-2025-MINEDU Tabla 1. INEI Boletín TIC II trimestre 2026 (informe técnico N.° 03, setiembre 2026). EF EPI 2025 Peru page. tzdata for time. The summer-hours column, the summer class counts, the two routes, the fortnight plan, the English ladder and the Python lessons are our own.',
    localProject: 'An English grammar rule as a Python lesson for children of 10 to 12: version 1 picks "a" or "an" from the first letter (animal[0] in \'aeiou\') and gets all eight Peruvian and other animals right (an alpaca, a condor, a vicuna); the same rule on hour, umbrella, university, honest, uniform and orange prints four mistakes (a hour, an university, a honest, an uniform); version 2 checks a dictionary of exceptions first and prints all six correctly. Lesson family: string indexing, in, if/else, then if/elif/else order with a dictionary of exceptions.',
    requiredMentions: ['an alpaca', 'an university', 'a uniform', 'the exception must be checked first', '30 horas', 'Clases en inglés que suma un verano según cuántas semanas use', 'Hogares con al menos una computadora', 'el 90,2 % de quienes usan internet se conectan por el celular', '515 estudiantes de quinto de secundaria', 'la expresión oral 480', 'An hour, a university: probar antes de confiar'],
    sources: [
      { claim: 'Weekly Inglés hours: primaria 2/2/3/3/3/3; secundaria JER 3, JEC 5; teaching hour of 45 minutes.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Households with internet and with a computer, internet users by area, devices, daily use, children 6 to 11 (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, rank 52, listening 499, speaking 480, Lima 555; High band from 550.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: '515 COAR 5° secundaria students with Cambridge English certificates; 2,502 IB Diplomas in Peru in 2025, 47% COAR (note of 17 April 2026).', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'Last 2026 teaching block ends 18 December 2026; DRE/UGEL may vary.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' },
      { claim: 'Course durations: HTML and CSS 4 months (16 weeks); Python and AI for Kids 8-10 months (32-40 weeks).', url: 'https://learn.modernagecoders.com/courses/html-css-course-for-beginners-build-real-websites' }
    ],
    rejectedClaims: [
      'Spanish-language teaching or translation in class: refused; the page says the whole hour is in English and the mentor never switches.',
      'English-exam preparation or a language certificate: refused; the page says these are programming classes taught in English, not language classes.',
      'A "summer slide" percentage for English: refused; no Peruvian primary source; only the CNEB hours and our labelled calculation are used.',
      'EF EPI as a measure of children: refused; the page says the index is built from adult test takers.',
      'Any link to COAR, Cambridge or the IB: none; schools are context only, and the page says we are not connected.',
      'A typed summer price or a camp with fixed dates: refused; the owner\'s offer (2026-11-10) is 4 to 5 classes a week with the price agreed with the mentor, and the template shows only the standard eight-class monthly fee.',
      'Hours of English per summer: refused; class length is not a brand fact, so the page counts classes, not hours.'
    ]
  }
};

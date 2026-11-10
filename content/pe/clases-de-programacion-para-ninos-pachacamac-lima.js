// SHIP: district (kids, year-round) | Pachacámac and Manchay: a young district, coding at home next to its school games | random.seed: the same seed gives the same "random" team, a new seed a new one
'use strict';
// Clases de programación para niños en Pachacámac, Lima (ag- Spanish district door, Peru cluster row PE217, P6, hubGroup
// lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Pachacámac (Manchay, Las Palmas, Cardal and the old town) looking for a year-round coding class a
// child can take at home. Spine: Pachacámac has a younger age profile than Lima as a whole (census shares, ours); single
// ages and the district's small rural count; what the municipality publishes for students (school olympics, the PEC
// school programme); internet by area of residence (INEI) and why a home connection matters; what happens when parents do
// not speak English; one original Python lesson on random.seed to draw teams; age path with adolescentes; clocks.
// No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// pachacamac-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx, 856800 bytes,
//    updated "al 15 de julio del año 2026"). CUADRO Nº 1: "DISTRITO PACHACÁMAC | 141622 | 70333 | 71289 | 130016 | ... |
//    11606". CUADRO Nº 3: "DISTRITO PACHACÁMAC | 130016 | 10129 | 14015 | 14298 | 25851 | 32188 | 22118 | 11417";
//    "LIMA METROPOLITANA | 9600043 | 555239 | 818096 | 867253 | 1800348 | 2322499 | 1744864 | 1491744". CUADRO Nº 2:
//    district row "130016 ... 129918 ... 98 54 44" (urban 129918, rural 98); 6 años 2136, 7 años 2186, 8 años 2354,
//    9 años 2392, 10 años 2435, 11 años 2512, 12 años 2488.
//  Municipalidad Distrital de Pachacámac on gob.pe (institucion/munipachacamac):
//    n-1443261 (11 Sep 2026): "Cerca de 5 mil escolares de educación primaria y secundaria, pertenecientes a 40 instituciones
//    educativas públicas y privadas del distrito, participan con entusiasmo en la IV Edición de las Olimpiadas Escolares
//    2026"; "vóley, fútbol y atletismo"; "Estadio de la B en Manchay y el campo deportivo Los Eucaliptos".
//    n-1230419 (20 Aug 2025): programme "Pachacámac Educa y Construye" - PEC; "Ya van 15 instituciones educativas las
//    beneficiadas"; a school laboratory equipped "con cinco microscopios, dos computadoras, un proyector multimedia". The
//    investment figure in soles and the school names are left out on purpose; officials' names too.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7%
//    de los hogares disponía del servicio; en el resto urbano, el 66,2%; mientras que, en el área rural solo el 27,1%";
//    "Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y 8,9% en el área rural";
//    "Lima Metropolitana incluye la Provincia Constitucional del Callao".
//  EF EPI 2025 (MARKET 1.3): Lima 555 (high from 550).
//  CNEB (FACTS 39): secundaria with no computing area. Edades normativas (FACTS 13).
//  Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): shares of censused, Pachacámac vs Lima Metropolitana: 0-5 7.8 % vs 5.8 %; 6-11 10.8 %
//    vs 8.5 %; 12-17 11.0 % vs 9.0 %; 60+ 8.8 % vs 15.5 %; 141622 / 10141775 = 1.4 %; 14015 / 818096 = 1.7 %; 11606 /
//    141622 = 8.2 % omitted; 2136+2186+2354+2392+2435+2512+2488 = 16503 children aged 6 to 12.
// Our own example (equipos.py in the src-pages folder), run with python3 -I (Python 3.14), exact output:
//    Seed 7: ['Rosa', 'Luis', 'Diego'] / Seed 7 again: ['Rosa', 'Luis', 'Diego'] / Seed 5: ['Elena', 'Rosa', 'Hugo'] /
//    Same team twice? True
// Neighbouring districts named in plain text only (Lurín, Villa María del Triunfo, Villa El Salvador, La Molina,
// Cieneguilla).
// Lesson family: pseudo-random numbers; random.seed makes random.sample repeatable, a new seed gives a new draw.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'import random',
  '',
  "players = ['Ana', 'Luis', 'Rosa', 'Diego', 'Elena', 'Hugo']",
  '',
  'random.seed(7)',
  'first = random.sample(players, 3)',
  'random.seed(7)',
  'second = random.sample(players, 3)',
  'random.seed(5)',
  'third = random.sample(players, 3)',
  '',
  "print('Seed 7:', first)",
  "print('Seed 7 again:', second)",
  "print('Seed 5:', third)",
  "print('Same team twice?', first == second)"
].join('\n');

const OUT = [
  "Seed 7: ['Rosa', 'Luis', 'Diego']",
  "Seed 7 again: ['Rosa', 'Luis', 'Diego']",
  "Seed 5: ['Elena', 'Rosa', 'Hugo']",
  'Same team twice? True'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Pachacámac' },
  slug: 'clases-de-programacion-para-ninos-pachacamac-lima',
  code: 'prpa',
  accent: '#2E7065',
  accentRationale: 'Pachacámac: a lomas teal #2E7065, the grey-green of the hills above Manchay in the winter mist, the only blue-leaning green among the Lima district doors; allocated in alloc.tsv (contrast 4.71 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Pachacámac',
  title: 'Clases de programación para niños en Pachacámac y Manchay',
  description: 'Clases de programación para niños de 6 a 12 años en Pachacámac y Manchay: en vivo y en inglés por videollamada, todo el año, en grupo o a solas y a su hora.',
  ogDescription: 'Programación para niños de Pachacámac, Manchay y Cardal desde casa: un distrito más joven que Lima según el censo 2025, internet en el hogar y un sorteo de equipos en Python que siempre repite.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Pachacámac y Manchay, desde casa, cuando la familia decida.',
  pageName: 'Clases de programación para niños en Pachacámac',
  webPageDescription: 'Guía para familias de Pachacámac y Manchay que buscan clases de programación para niños de 6 a 12 años todo el año: el perfil por edades del distrito en los Censos Nacionales 2025 del INEI, las olimpiadas escolares y el programa PEC de la municipalidad, el internet en los hogares por área según el INEI, qué hacer si en casa no se habla inglés y un ejercicio de Python con random.seed escrito por nosotros.',
  courseDescription: 'Clases en vivo de programación para niños de 6 a 12 años de Pachacámac y Manchay, dictadas solo en inglés por videollamada: Scratch, Python, juegos y proyectos de IA, en grupo o individuales, durante todo el año y en el horario que la familia prefiera.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Pachacámac',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#joven', label: 'Un distrito joven' },
    { href: '#escolares', label: 'Escolares' },
    { href: '#conexion', label: 'Internet en casa' },
    { href: '#sorteo', label: 'Reto en Python' },
    { href: '#padres', label: 'Si no habla inglés' }
  ],
  eyebrow: 'Lima Sur &middot; Pachacámac y Manchay &middot; Primaria',
  h1: 'Clases de programación para niños en Pachacámac',
  lede: 'Pachacámac, con Manchay, Las Palmas, Cardal y el pueblo de Pachacámac, es uno de los distritos de Lima con más niños en proporción a su población. Si quiere que su hijo o hija programe todo el año sin salir de casa, aquí encontrará el perfil por edades del distrito, qué conexión hace falta, qué pasa con el idioma cuando en casa no se habla inglés y un sorteo de equipos en Python.',
  secondaryCta: { href: '#sorteo', label: 'Ver el sorteo de equipos en Python' },
  wa: 'Hola Modern Age Coders, vivimos en Pachacámac y buscamos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos en distintos países &middot; mentores que acompañan en inglés',
  spec: [
    ['Niños', 'De 6 a 12 años; adolescentes en grupos propios'],
    ['Zonas', 'Manchay, Las Palmas, Cardal, el pueblo y todo el distrito'],
    ['Época', 'Todo el año'],
    ['Idioma de clase', 'Inglés'],
    ['Formato', 'Grupo de quince a veinte o individual'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'En resumen',
  capsule: 'Sí. Un niño de 6 a 12 años que vive en Pachacámac o en Manchay puede aprender a programar desde casa con Modern Age Coders, en sesiones en vivo y en inglés por videollamada que no se detienen en ninguna época del año. Su mentor vive en la India, habla claro y sin apuro y adapta la clase al ritmo de cada niño. Primero vienen los bloques y Scratch; luego Python, juegos y proyectos de IA. La familia elige clase grupal o individual, el día y la hora, y la primera sesión es gratuita.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: '¿Cuál es el primer curso para un niño de Pachacámac?',
    lede: 'Tres cursos cubren a casi todos los niños que empiezan: uno sin pantalla complicada para los más pequeños, uno de Python para los mayores y uno de juegos para quienes llegan por Minecraft.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'PRPA / 01', title: 'Razonar antes de programar', alt: 'Imagen del curso de razonamiento para pequeños pensadores', note: 'Para chicos de 6 a 9. Patrones, orden y acertijos que preparan la cabeza para programar, con muy poco texto y mucho juego.' },
      { course: 'python-ai-kids-masterclass', code: 'PRPA / 02', title: 'Python e IA', alt: 'Imagen del curso de Python e IA para niños', note: 'A partir de los 9. Variables, listas, bucles y la librería <code>random</code> del sorteo que verá abajo; al final, algún proyecto sencillo de IA.' },
      { course: 'minecraft-coding-for-kids-course', code: 'PRPA / 03', title: 'Minecraft programado', alt: 'Imagen del curso de programación en Minecraft para niños', note: 'De 7 a 12 años. Para el niño que ya construye en Minecraft y quiere que el juego haga cosas solo: comandos, repeticiones y construcciones automáticas.' }
    ]
  },

  sections: [
    {
      id: 'joven',
      eyebrow: 'Censo 2025',
      h2: '¿Pachacámac tiene más niños que el resto de Lima?',
      lede: 'En proporción, sí. En el censo de 2025, el 10,8 % de los censados de Pachacámac tenía entre 6 y 11 años, frente al 8,5 % en el conjunto de Lima Metropolitana (cálculos nuestros). En números: 14,015 niños de 6 a 11 años y 14,298 adolescentes de 12 a 17.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Peso de cada grupo de edad entre los censados, Pachacámac y Lima Metropolitana (2025)', head: ['Grupo de edad', 'Personas en Pachacámac', 'Pachacámac', 'Lima Metropolitana'], rows: [
          ['0 a 5 años', '10,129', '7,8 %', '5,8 %'],
          ['6 a 11 años', '14,015', '10,8 %', '8,5 %'],
          ['12 a 17 años', '14,298', '11,0 %', '9,0 %'],
          ['60 años a más', '11,417', '8,8 %', '15,5 %']
        ] },
        { kind: 'source', html: 'Fuente: tabla de población censada por grupos de edad (cuadro 3) que el INEI publicó para Lima Metropolitana con los Censos Nacionales 2025, puesta al día el 15 de julio de 2026. Los porcentajes son nuestros: cada grupo dividido entre los 130,016 censados del distrito o los 9,600,043 de Lima Metropolitana.' },
        { kind: 'two', mt: true,
          leftH3: 'Qué significa',
          left: [
            'Pachacámac tiene una población más joven que la de Lima en conjunto: más niños y adolescentes, y proporcionalmente menos personas mayores. Con 141,622 habitantes, Pachacámac aporta el 1,4 % de los vecinos de la capital, pero reúne el 1,7 % de sus niños de 6 a 11 años.',
            'Es un dato de edades. No dice nada de los ingresos ni de las condiciones de vida de las familias, y aquí no lo usamos para eso.'
          ],
          rightH3: 'Año por año',
          right: [
            'Mirando edad por edad (cuadro 2): 2,136 niños de 6 años, 2,186 de 7, 2,354 de 8, 2,392 de 9, 2,435 de 10, 2,512 de 11 y 2,488 de 12. De 6 a 12 años son 16,503 en total, según nuestra suma.',
            'El INEI estima además 11,606 personas omitidas, el 8,2 % del total, cuya edad no se publica.'
          ] },
        { kind: 'p', mt: true, html: 'Un detalle del mismo cuadro: de los 130,016 censados de Pachacámac, 98 figuran en área rural y el resto en área urbana. Es una cifra pequeña, pero muestra que el distrito se extiende más allá de lo urbano, hacia Lurín, Cieneguilla, La Molina, Villa María del Triunfo y Villa El Salvador.' }
      ]
    },
    {
      id: 'escolares',
      eyebrow: 'Los escolares del distrito',
      h2: '¿Qué hace la Municipalidad de Pachacámac con los escolares?',
      lede: 'En sus notas de gob.pe aparecen dos líneas de trabajo: unas olimpiadas escolares deportivas que en 2026 reunieron a cerca de 5 mil estudiantes, y el programa Pachacámac Educa y Construye, que mejora infraestructura y equipos de colegios públicos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dos notas de la Municipalidad de Pachacámac sobre escolares', head: ['Fecha', 'Iniciativa', 'Qué publicó'], rows: [
          ['20 de agosto de 2025', 'Pachacámac Educa y Construye (PEC)', 'Quince instituciones educativas beneficiadas hasta esa fecha; un laboratorio escolar equipado con cinco microscopios, dos computadoras y un proyector'],
          ['11 de setiembre de 2026', 'Olimpiadas Escolares 2026, IV edición', 'Cerca de 5 mil escolares de primaria y secundaria de 40 colegios públicos y privados, en vóley, fútbol y atletismo, con sedes en el Estadio de la B en Manchay y el campo Los Eucaliptos']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Pachacámac, notas de prensa en gob.pe/institucion/munipachacamac, leídas el 10 de noviembre de 2026. Omitimos los nombres de autoridades y de colegios, y la cifra de inversión de la nota de 2025.' },
        { kind: 'p', mt: true, html: 'Las olimpiadas son una competencia deportiva en equipo, y el laboratorio del PEC muestra que la computadora ya está entrando a las aulas del distrito, aunque sea de a pocas. No tenemos relación con ninguna de las dos iniciativas. Las citamos porque dibujan un distrito con muchos escolares y un interés claro por la educación.' },
        { kind: 'p', html: 'La programación juega en otra cancha, pero comparte cosas con el deporte: se practica, se mejora con constancia y se aprende mucho de los errores. Y también se hace en equipo. El reto en Python de esta página, de hecho, sortea equipos.' }
      ]
    },
    {
      id: 'conexion',
      eyebrow: 'Internet en casa',
      h2: '¿Qué conexión necesita un niño de Manchay para una clase en línea?',
      lede: 'Una conexión estable a internet en casa, una computadora con teclado y unos audífonos. Pachacámac está dentro de Lima Metropolitana, donde el INEI registra la mayor proporción de hogares conectados del país.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Hogares con internet y con computadora por área de residencia, II trimestre de 2026', head: ['Área', 'Con internet', 'Con computadora'], rows: [
          ['Lima Metropolitana (incluye el Callao)', '84,7 %', '53,3 %'],
          ['Resto urbano del país', '66,2 %', '41,3 %'],
          ['Área rural', '27,1 %', '8,9 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Estadísticas de las TIC en los Hogares, segundo trimestre de 2026, con datos preliminares de la ENAHO. El INEI no publica cifras para Pachacámac por separado; el distrito forma parte de Lima Metropolitana en esta encuesta.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que hace falta',
          left: [
            'Un equipo de mesa o portátil que tenga cámara y micrófono. Para Scratch alcanza el navegador, y Python se deja instalado, sin pagar nada, durante la primera sesión.',
            'Audífonos con micrófono: ayudan a entender bien el inglés y evitan el eco. Y un lugar de la casa donde el niño pueda concentrarse una hora.'
          ],
          rightH3: 'Lo que se evita',
          right: [
            'Con la clase en casa no hay que salir, ni esperar movilidad, ni volver de noche. Esa hora de viaje se queda para descansar o hacer la tarea.',
            'Si la conexión falla un día, la clase se reprograma. En clases individuales usted decide la nueva hora.'
          ] },
        { kind: 'p', mt: true, html: 'Si en su casa la computadora es compartida, no es problema. Basta con apartarla a la hora de clase. Lo que no recomendamos es tomar la clase desde un celular: sirve para ver, pero escribir código en una pantalla tan pequeña frustra a cualquier niño.' }
      ]
    },
    {
      id: 'padres',
      eyebrow: 'Si en casa no se habla inglés',
      h2: '¿Mi hijo puede tomar clases en inglés si en casa nadie habla inglés?',
      lede: 'Sí. El idioma de la clase es el inglés, pero no le pedimos a la familia que lo hable. El mentor trabaja directamente con el niño, con la pantalla compartida y frases cortas, y a usted le escribimos por WhatsApp en castellano.',
      body: [
        { kind: 'three', cells: [
          { h3: 'El papel del mentor', p: 'Habla despacio, muestra todo en la pantalla, repite con otras palabras y espera la respuesta. Si el niño contesta en castellano, el mentor recoge la idea y la devuelve en inglés.' },
          { h3: 'El papel de la familia', p: 'Asegurar que la computadora esté lista, que el niño llegue a la hora y que tenga un lugar tranquilo. No hace falta ayudar con el código ni con el idioma.' },
          { h3: 'El papel del niño', p: 'Escuchar, intentar y preguntar. En las primeras semanas responde con gestos o palabras sueltas; con el tiempo, con frases completas sobre lo que programó.' }
        ] },
        { kind: 'p', mt: true, html: 'Una forma sencilla de acompañar sin saber inglés: al final de la clase, pídale a su hijo que le explique en castellano qué hizo. Si puede contarlo, lo entendió, aunque la clase haya sido en otro idioma. Y si usa alguna palabra en inglés que usted no conoce, pídale que se la traduzca: así repasa.' },
        { kind: 'p', html: 'Lima sacó 555 puntos en el EF EPI 2025, la medición anual de EF Education First, y quedó en su banda alta. Para los niños de Pachacámac, que son parte de Lima, practicar inglés hablado desde primaria con un propósito concreto es una ventaja que se nota con los años. Si le interesa esa combinación, lea <a class="ag-inline-link" href="/clases-de-ingles-y-programacion-ninos">inglés y programación para niños</a>.' }
      ]
    },
    {
      id: 'sorteo',
      tint: 'tint',
      eyebrow: 'Reto en Python',
      h2: '¿Puede una computadora sortear equipos de forma justa y repetible?',
      lede: 'Sí, y la clave es la "semilla". Python elige al azar a partir de un número inicial; si se usa la misma semilla, sale el mismo resultado. Lo escribimos nosotros para chicos de quinto y sexto de primaria, y usa un sorteo de equipos como los de unas olimpiadas escolares.',
      body: [
        { kind: 'code', label: 'Sorteo de equipos con semilla', lang: 'Python', code: PY, note: '<code>random.sample(players, 3)</code> elige tres jugadores distintos de la lista. <code>random.seed</code> fija el punto de partida del azar.' },
        { kind: 'code', label: 'Salida', lang: 'Salida', code: OUT, note: 'Lo que imprimió equipos.py al correrlo nosotros con Python 3.14, copiado tal cual. Con otra versión de Python la elección podría variar, pero la misma semilla siempre repite dentro de una misma versión.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir.</strong> El mentor pregunta en inglés: "If we draw twice, will we get the same team?". La mayoría de niños dice que no, porque "es al azar".',
          '<strong>La sorpresa.</strong> Con la semilla 7, los dos sorteos dan exactamente el mismo equipo: Rosa, Luis y Diego. La última línea lo confirma: <code>Same team twice? True</code>.',
          '<strong>Cambiar la semilla.</strong> Con la semilla 5 sale otro equipo: Elena, Rosa y Hugo. El azar de la computadora es un cálculo que parte de un número.',
          '<strong>Para qué sirve.</strong> Si el profesor de Educación Física quiere demostrar que el sorteo no fue arreglado, puede anunciar la semilla antes: cualquiera que corra el programa obtendrá el mismo equipo.',
          '<strong>Su propio sorteo.</strong> El niño escribe los nombres de su familia o de sus amigos, elige una semilla y le pide a otra persona que adivine el resultado antes de ejecutar.'
        ] },
        { kind: 'p', mt: true, html: 'La idea de fondo es poderosa para un niño: lo que parece magia o casualidad en la computadora tiene una regla, y esa regla se puede entender y comprobar. Es la misma actitud que buscamos frente a cualquier respuesta, venga de un compañero, de internet o de una herramienta de IA: preguntar de dónde sale y probarla.' }
      ]
    },
    {
      id: 'ruta',
      eyebrow: 'Por edades',
      h2: '¿Cómo avanza un niño de Pachacámac de los 6 a los 12 años?',
      lede: 'A los 6 años se programa con bloques; entre los 9 y los 10 se pasa a escribir código; y desde los 13 hay grupos aparte para adolescentes. La tabla resume el camino que solemos seguir.',
      body: [
        { kind: 'table', numCols: [], caption: 'Camino de aprendizaje sugerido (nuestro)', head: ['Edad', 'Grado habitual', 'Qué aprende'], rows: [
          ['6 y 7 años', '1° y 2° de primaria', 'Secuencias y repeticiones con bloques grandes'],
          ['8 años', '3° de primaria', 'Juegos con puntaje y condiciones en Scratch'],
          ['9 y 10 años', '4° y 5° de primaria', 'Primer código escrito en Python'],
          ['11 y 12 años', '6° de primaria y 1° de secundaria', 'Listas, funciones, azar y proyectos propios']
        ] },
        { kind: 'source', html: 'Los grados siguen las edades normativas del MINEDU, medidas al 31 de marzo. La tercera columna es nuestra; en la clase gratis el mentor ajusta el punto de partida.' },
        { kind: 'two', mt: true,
          leftH3: 'Adolescentes de Pachacámac',
          left: [
            'El distrito tiene 14,298 adolescentes censados de 12 a 17 años. Quienes ya cumplieron 13 pasan a grupos de secundaria, donde se trabaja con IA, webs, Java y Python.',
            'Como el colegio no tiene horas de computación en secundaria según el CNEB, estas clases cubren algo que el horario escolar deja fuera. Vea <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a>.'
          ],
          rightH3: 'Con 8 años',
          right: [
            'Es buena edad para Scratch: ya lee lo suficiente para seguir instrucciones y todavía disfruta de los personajes y los colores.',
            'Lo explicamos en <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">programación para niños de 8 años</a>.'
          ] }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora puede conectarse un niño de Pachacámac con un mentor en la India?',
      lede: 'A la hora que usted elija. La India va 10 horas y 30 minutos por delante de Lima durante todo el año. Estos son ejemplos de conversión, no un horario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplos de conversión entre Pachacámac y la India', head: ['Pachacámac', 'India', 'Fecha en la India'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'La misma'],
          ['8:45 a. m.', '7:15 p. m.', 'La misma'],
          ['12:30 p. m.', '11:00 p. m.', 'La misma'],
          ['2:15 p. m.', '12:45 a. m.', 'La siguiente'],
          ['4:45 p. m.', '3:15 a. m.', 'La siguiente'],
          ['6:45 p. m.', '5:15 a. m.', 'La siguiente']
        ] },
        { kind: 'source', html: 'Referencias: tzdata fija Lima (America/Lima) en UTC-5 sin cambios desde 1994, con la hora oficial a cargo del INACAL; Kolkata (Asia/Kolkata) en UTC+5:30, sin horario de verano. La diferencia no varía con las estaciones.' },
        { kind: 'p', mt: true, html: 'Usted reserva con su reloj y el sistema muestra al mentor la hora equivalente. Si su hijo estudia en la mañana, la clase puede ir a media tarde; si estudia en la tarde, temprano por la mañana. Durante las olimpiadas escolares o los exámenes, la clase se puede mover sin perder al mentor.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si su hijo avanza en programación?',
    lede: 'Cinco señales propias que usamos para contar el progreso a la familia, sin notas ni competencias.',
    table: { caption: 'Cinco señales de avance (nuestras)', head: ['Señal', 'Edad aproximada', 'Lo que se ve'], rows: [
      ['1. Arma una secuencia', '6 a 7 años', 'ordena bloques para que un personaje llegue a su meta'],
      ['2. Usa la repetición', '7 a 9 años', 'cambia pasos repetidos por un bucle'],
      ['3. Escribe código', '9 a 10 años', 'teclea un programa corto en Python y lo ejecuta'],
      ['4. Explica el azar', '10 a 11 años', 'entiende por qué la misma semilla repite el sorteo'],
      ['5. Crea su proyecto', '11 a 12 años', 'diseña un juego o una herramienta y lo explica en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pídale a su hijo que le cuente en castellano lo que hizo en la clase. Si lo explica, lo entendió.',
      'Las semanas de adaptación al inglés son normales. Después de las primeras dos o tres, la mayoría sigue la clase con soltura.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Antes de correr el programa, anote qué cree que va a salir.',
      'Si algo parece al azar, busque la regla que hay detrás.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Otros cursos para niños de Pachacámac',
    lede: 'Clases en vivo y en inglés, con un mentor asignado durante el curso y la opción de grupo o individual.',
    bands: [
      { num: 'I', h3: 'Empezar', sub: 'De 6 a 9 años', courses: [
        { code: 'PRPA / INI / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Historias, laberintos y juegos con bloques.' },
        { code: 'PRPA / INI / 02', slug: 'kids-coding-blocks-masterclass', title: 'Bloques por edades', blurb: 'Grupos separados para que cada niño avance a su paso.' },
        { code: 'PRPA / INI / 03', slug: 'early-math-foundations', title: 'Primeros números', blurb: 'Conteo, formas y operaciones con ejemplos cotidianos.' }
      ] },
      { num: 'II', h3: 'Jugar creando', sub: 'De 8 a 12 años', courses: [
        { code: 'PRPA / JUEGO / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Mapas y reglas escritos por el propio niño.' },
        { code: 'PRPA / JUEGO / 02', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos de principio a fin', blurb: 'Diseñar, programar y probar juegos completos.' },
        { code: 'PRPA / JUEGO / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps sencillas', blurb: 'Una aplicación para el teléfono hecha con bloques.' }
      ] },
      { num: 'III', h3: 'Pensar con datos', sub: 'De 9 a 12 años', courses: [
        { code: 'PRPA / DATOS / 01', slug: 'maths-through-coding', title: 'Probabilidad y patrones', blurb: 'Dados, sorteos y secuencias resueltos con Python.' },
        { code: 'PRPA / DATOS / 02', slug: 'ai-literacy-for-kids-course', title: 'IA para niños', blurb: 'Lo que una IA hace bien, lo que inventa y cómo notarlo.' },
        { code: 'PRPA / DATOS / 03', slug: 'kids-ai-web-development-course', title: 'Webs para niños', blurb: 'Una página propia con HTML y CSS.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo encaja la clase en la semana de su hijo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Para quienes van al colegio por la tarde.' },
      { time: 'Media tarde', l: 'Para quienes salen del colegio al mediodía.' },
      { time: 'Como usted diga', l: 'En clases individuales, el horario lo pone la familia.' }
    ],
    cells: [
      { h3: 'Mismo mentor', p: 'Acompaña a su hijo de inicio a fin.' },
      { h3: 'Inglés a su ritmo', p: 'Se avanza cuando el niño entendió, no antes.' },
      { h3: 'El niño programa', p: 'Él escribe; el mentor pregunta y guía.' },
      { h3: 'Proyecto por etapa', p: 'Cada tramo deja algo terminado.' },
      { h3: 'Mensajes en castellano', p: 'A la familia le escribimos en su idioma.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte niños o solo su hijo.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros alumnos',
  projectsLede: 'Del primer bloque a una aplicación publicada hay varios años de práctica. Estos son algunos trabajos de alumnos mayores; otros en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de Google escritas por familias y alumnos, en inglés y tal cual.',

  fees: {
    h2: 'Precios para familias de Pachacámac',
    lede: 'Cobramos en dólares estadounidenses mediante tarjeta. Su banco convierte el monto a su moneda, de modo que el cargo final se mueve un poco según la cotización del día.',
    free: ['Primera clase sin costo', 'Un reto corto para conocer a su hijo', 'Sin pedir tarjeta'],
    group: ['De quince a veinte niños de edad parecida', 'El mismo mentor', 'Dos clases en vivo por semana', 'Pago mensual, sin contrato'],
    one: ['Solo su hijo y el mentor', 'Plan a su medida', 'Horario elegido por la familia']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en Pachacámac: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las damos en inglés, siempre en vivo, también para los niños de Pachacámac. Muchas familias lo valoran porque el niño programa y practica inglés en la misma hora, sin sumar otra actividad. El mentor habla pausado y repite. El EF EPI 2025 pone el inglés de Lima en su banda alta, y empezar a hablarlo en primaria ayuda mucho.' },
      { q: '¿Y si en casa nadie habla inglés?', a: 'No es necesario. El mentor trabaja en inglés con el niño y a la familia le escribimos en castellano por WhatsApp. Usted solo necesita que su hijo tenga la computadora lista a la hora.' },
      { q: '¿Atienden en Manchay?', a: 'Sí. Las clases son en línea, así que llegan igual a Manchay, Las Palmas, Cardal o cualquier zona del distrito con internet.' },
      { q: '¿Cuántos niños hay en Pachacámac?', a: 'El censo de 2025 del INEI registró 14,015 niños de 6 a 11 años y 14,298 adolescentes de 12 a 17 entre los censados. En proporción, el distrito tiene más niños que Lima Metropolitana en conjunto.' },
      { q: '¿A qué edad puede empezar?', a: 'Con 6 años ya puede, usando bloques. El código escrito suele llegar entre los 9 y los 10.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. A las 8:45 a. m. de Pachacámac, en la India son las 7:15 p. m.' },
      { q: '¿Qué pasa si se corta el internet durante la clase?', a: 'Se retoma en cuanto vuelva la conexión, o se reprograma. En clases individuales usted elige la nueva hora.' },
      { q: '¿Mi hijo mayor, de secundaria, también puede?', a: 'Sí. Desde los 13 tenemos grupos distintos de los de primaria, con proyectos de IA, de páginas web y en lenguajes como Java o Python.' },
      { q: '¿Tienen relación con la municipalidad o los colegios?', a: 'No. No estamos vinculados a la Municipalidad de Pachacámac, al MINEDU, a la UGEL ni a ningún colegio, y no participamos en sus olimpiadas ni programas. Las clases no dan notas; lo que entregamos al terminar es una constancia propia de que el curso se completó.' },
      { q: '¿En qué moneda se paga?', a: 'En dólares de EE. UU., cargados a una tarjeta; la conversión corre por cuenta del banco. Probar una clase no cuesta nada ni exige registrar un medio de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más guías',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas para familias de Lima Sur.',
    items: [
      { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación para niños', p: 'Por qué las dos cosas se aprenden bien juntas.' },
      { href: '/programacion-para-ninos-de-8-anos', label: 'Programación para niños de 8 años', p: 'Scratch y los primeros juegos.' },
      { href: '/programacion-minecraft-para-ninos-peru', label: 'Minecraft para niños', p: 'Aprender a programar dentro del juego.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Cursos para secundaria.' },
      { href: '/vacaciones-utiles-de-programacion-chorrillos-lima', label: 'Vacaciones útiles en Chorrillos', p: 'Ideas de verano en otro distrito del sur de Lima.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo enseñamos (en inglés).' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis desde Pachacámac',
    lede: 'Su hijo se conecta desde casa, saluda al mentor y resuelve un pequeño reto según su edad, con bloques o con Python. A partir de esa observación le sugerimos curso y modalidad, y la decisión queda en la familia.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y revisar <a class="ag-inline-link" href="/courses">All courses</a> (en inglés).',
    note: 'Clases en vivo por internet con mentores que enseñan desde la India, en inglés. A la familia le respondemos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Razonamiento' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Minecraft' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación' },
        { href: '/programacion-minecraft-para-ninos-peru', label: 'Minecraft para niños' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Misma semilla, mismo equipo'
  },

  personalityCss: `
.ag-root.ag-prpa .ag-hero h1 { max-width: 20ch; letter-spacing: -0.009em; }
.ag-root.ag-prpa .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-prpa .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-prpa .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prpa .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3, updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026; Municipalidad Distrital de Pachacámac notes on gob.pe (20 August 2025, 11 September 2026); MINEDU CNEB and edades normativas; EF EPI 2025; tzdata and INACAL. Read 8 to 10 November 2026. The age-share comparison, roles table, learning path and Python exercise are our own.',
    localProject: 'A repeatable team draw for a 10 to 12 year old in Pachacámac, themed on the district\'s school olympics: random.seed(7) then random.sample of three players gives Rosa, Luis and Diego twice in a row (Same team twice? True), seed 5 gives Elena, Rosa and Hugo; the child learns that computer randomness starts from a number and can be checked by announcing the seed. Lesson family: pseudo-random numbers and random.seed.',
    requiredMentions: ['Same team twice? True', "Seed 5: ['Elena', 'Rosa', 'Hugo']", 'Olimpiadas Escolares 2026, IV edición', 'Cerca de 5 mil escolares de primaria y secundaria de 40 colegios públicos y privados', 'Pachacámac Educa y Construye (PEC)', '98 figuran en área rural', 'Misma semilla, mismo equipo', 'frente al 8,5 % en el conjunto de Lima Metropolitana'],
    sources: [
      { claim: 'Pachacámac 141,622 total, 130,016 censused, 11,606 omitted; age groups; single ages 6 to 12; 98 rural; Lima Metropolitana age groups.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Olimpiadas Escolares 2026, 4th edition: about 5,000 students from 40 schools; venues in Manchay and Los Eucaliptos (11 September 2026).', url: 'https://www.gob.pe/institucion/munipachacamac/noticias/1443261-con-exito-se-realizan-las-olimpiadas-escolares-2026-en-pachacamac' },
      { claim: 'Pachacámac Educa y Construye: 15 schools benefited; laboratory with microscopes, two computers and a projector (20 August 2025).', url: 'https://www.gob.pe/institucion/munipachacamac/noticias/1230419-municipalidad-sigue-fortaleciendo-los-colegios-publicos-a-traves-del-programa-pec' },
      { claim: 'Households with internet and computer by area: Lima Metropolitana 84.7% and 53.3%, rest urban 66.2% and 41.3%, rural 27.1% and 8.9%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Secundaria without a computing area; normative age.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'The PEC investment figure in soles and the school names in the municipal notes: left out (no typed soles, schools not needed).',
      'Any reading of income or living conditions from the younger age profile or the 98 rural residents: refused.',
      'A district internet figure: INEI does not publish one; the page uses Lima Metropolitana and labels it.',
      'Participation in the municipal olympics or PEC: refused; the page says we are not connected.',
      'That random.sample gives the same team on every Python version: not claimed; the note says the result is from Python 3.14.',
      'Spanish-language teaching, grades, official certificates or typed fees: refused.'
    ]
  }
};

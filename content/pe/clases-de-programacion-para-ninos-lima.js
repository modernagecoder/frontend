// SHIP: market (es city door) | Lima kids 6 to 12: census, home vs academy, Metro Línea 1 data | list positions: index() counts from 0, rides vs stations (fencepost), abs()
'use strict';
// Clases de programación para niños en Lima (ag- Spanish city door, Peru cluster row PE128, P6, hubGroup cities;
// alloc: code pac, accent #6E172C). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Formal "usted". Fees only through the template (USD anchors).
// Angle: the Lima parent of a child of 6 to 12 who typed "clases de programación para niños lima" (KEYWORDS.md section 4:
// Lima ranks first, 140 place suggestions, but the exact phrase is thin) or "robótica para niños" plus a district. Spine:
// how many primaria-age children Lima has (INEI 2025, Cuadro 3), whether to cross the city to an academy or learn at home
// (INEI TIC 2026: Lima homes with internet and a computer), whether a Lima child can follow a class in English (EF EPI
// 2025), one original project on the Metro de Lima Línea 1 station list, district summer pages, robotics, clock.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-lima/
// and the research folders named; every quote string-matched in the raw text):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana workbook (tabulados/27, data/ind_27.xlsx),
//    Cuadro 1: LIMA METROPOLITANA total 10,141,775 (places.tsv); Cuadro 3 (población censada por grupo de edad):
//    "LIMA METROPOLITANA 9600043 555239 818096 867253 ..." (Total, De 0 a 5, De 6 a 11, De 12 a 17). District LIMA 314,840
//    (places.tsv, Cuadro 1). Census reference day 15 September 2025.
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (image, src/inei/cuadro-1-9-capital-cities-2017.png):
//    "Lima y Prov. Const. del Callao 1/ Lima Metropolitana 8 472 092 9 562 280 1 090 188 12.9 1.2"; footnote "1/ Comprende
//    la provincia de Lima y la Provincia Constitucional del Callao." Never added to the 2025 figures.
//  - INEI, Tecnologías de Información y Comunicación en los Hogares, II trimestre 2026 (inei_tic_iit2026.txt): "en Lima
//    Metropolitana, el 84,7% de los hogares disponía del servicio"; "el 36,4% de los hogares del país disponía de al menos
//    una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana"; "el mayor nivel de uso de Internet se
//    registró en Lima Metropolitana, con un 92,4%"; "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)";
//    footnote "1/ Lima Metropolitana incluye la Provincia Constitucional del Callao."
//  - EF EPI 2025, Peru page (ef_peru.raw): cities "Lima 555 Cusco 520 Trujillo 519 Arequipa 512"; Peru 519; bands: high
//    from 550, moderate from 500 (MARKET.md 1.3).
//  - MINEDU DITE robotics paper (FACTS 52): "la robótica en educación no es el objetivo, es el medio."
//  - RM 501-2025-MINEDU, Tabla 1, checked by eye on the signed page 7 (image saved by a sibling,
//    src-pages/clases-de-programacion-para-ninos-online-peru/rm501-page11-checked-by-eye.png): teaching from 16 March to
//    18 December 2026; management (no pupils) weeks 27 July to 7 August 2026.
//  - Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
//  - Data: Ministerio de Transportes y Comunicaciones (MTC), "MTC - AATE ESTACIONES DE METRO DE LIMA - LINEA 1",
//    Plataforma Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/mtc-aate-estaciones-de-metro-de-lima-linea-1,
//    licence "Open Data Commons Attribution License" (page and package_show odc-by), author MTC - AATE, modified 2026-10-09.
//    File estaciones2018.xlsx, 17,663 bytes, sha256 6fa135af569f152c..., 26 station rows (ESTACIÓN, DISTRITO, UBICACIÓN,
//    latitud y Longitud), Villa El Salvador first, Bayóvar last. Stations per DISTRITO as written in the file: San Juan de
//    Lurigancho 8, VM del Triunfo 3, Santiago de Surco 3, San Borja 3, Villa El Salvador 2, SJ de Miraflores 2, La Victoria 2,
//    El Agustino 2, Cercado de Lima 1.
// Our own calculations (python3 -I): 818,096 / 9,600,043 = 8.5% of the people counted are 6 to 11.
// Our own example, run with python3 -I (data/v1.py, data/v2.py), exact output:
//  v1: Stations on Line 1: 26 / Atocongo is number 6 / Gamarra is number 14 / Stops from Atocongo to Gamarra: 8 /
//      Stops from Bayóvar to Grau: -10
//  v2: Atocongo for people is station 7 / Atocongo -> Gamarra | rides between stations: 8 | stations you see: 9 /
//      Bayóvar -> Grau | rides between stations: 10 | stations you see: 11 / Angamos -> Angamos | rides between stations: 0 |
//      stations you see: 1
// Lesson family: positions in a list with index(): counting from zero, the fencepost (rides between stations against
// stations seen) and abs() so the direction of travel does not matter.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const LISTA = [
  "estaciones = ['Villa El Salvador', 'Parque Industrial', 'Pumacahua', 'Villa María',",
  "              'María Auxiliadora', 'San Juan', 'Atocongo', 'Jorge Chávez', 'Ayacucho',",
  "              'Cabitos', 'Angamos', 'San Borja Sur', 'La Cultura', 'Arriola', 'Gamarra',",
  "              'Grau', 'El Ángel', 'Presbítero Maestro', 'Caja de Agua', 'Pirámides del Sol',",
  "              'Los Jardines', 'Los Postes', 'San Carlos', 'San Martín', 'Santa Rosa', 'Bayóvar']"
];

const V1 = LISTA.concat([
  '',
  "print('Stations on Line 1:', len(estaciones))",
  "subo = estaciones.index('Atocongo')",
  "bajo = estaciones.index('Gamarra')",
  "print('Atocongo is number', subo)",
  "print('Gamarra is number', bajo)",
  "print('Stops from Atocongo to Gamarra:', bajo - subo)",
  "print('Stops from Bayóvar to Grau:', estaciones.index('Grau') - estaciones.index('Bayóvar'))"
]).join('\n');

const OUT1 = [
  'Stations on Line 1: 26',
  'Atocongo is number 6',
  'Gamarra is number 14',
  'Stops from Atocongo to Gamarra: 8',
  'Stops from Bayóvar to Grau: -10'
].join('\n');

const V2 = LISTA.concat([
  '',
  'def viaje(desde, hasta):',
  '    a = estaciones.index(desde)',
  '    b = estaciones.index(hasta)',
  '    tramos = abs(b - a)',
  '    return tramos, tramos + 1',
  '',
  "print('Atocongo for people is station', estaciones.index('Atocongo') + 1)",
  "for desde, hasta in [('Atocongo', 'Gamarra'), ('Bayóvar', 'Grau'), ('Angamos', 'Angamos')]:",
  '    tramos, vistas = viaje(desde, hasta)',
  "    print(desde, '->', hasta, '| rides between stations:', tramos, '| stations you see:', vistas)"
]).join('\n');

const OUT2 = [
  'Atocongo for people is station 7',
  'Atocongo -> Gamarra | rides between stations: 8 | stations you see: 9',
  'Bayóvar -> Grau | rides between stations: 10 | stations you see: 11',
  'Angamos -> Angamos | rides between stations: 0 | stations you see: 1'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Lima: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-lima',
  code: 'pac',
  accent: '#6E172C',
  accentRationale: 'Clases de programación para niños en Lima: the allocated deep wine #6E172C (alloc.tsv), the dark red of a Lima balcony against the pale paper; far above 4.5 contrast on #FBF8F2 and on both paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Lima',
  title: 'Clases de programación para niños en Lima, en vivo y en inglés',
  description: 'Clases de programación para niños de 6 a 12 años en Lima, en vivo, en línea y en inglés desde su casa: Scratch y Python, en grupo o individuales, a cualquier hora.',
  ogDescription: 'Programación para niños de primaria en Lima, en vivo y en inglés: cuántos niños hay según el censo 2025, academia o clases desde casa, y un proyecto con las estaciones de la Línea 1 del Metro.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de 6 a 12 años en Lima, sin salir de casa y a la hora que elija la familia.',
  pageName: 'Clases de programación para niños en Lima',
  webPageDescription: 'Guía para familias de Lima Metropolitana sobre clases de programación para niños de 6 a 12 años dictadas en vivo, en línea y en inglés: población infantil según los Censos Nacionales 2025 del INEI, internet y computadoras en los hogares limeños según el INEI (2026), el nivel de inglés de Lima en el EF EPI 2025 y un proyecto propio en Python con la lista oficial de estaciones de la Línea 1 del Metro de Lima (MTC, licencia ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años que viven en Lima Metropolitana, dictadas solo en inglés: Scratch, pensamiento computacional, Python e IA, en clase grupal o en clases individuales, el día y a la hora que elija la familia.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Lima',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#lima', label: 'Lima en cifras' },
    { href: '#casa', label: 'Academia o casa' },
    { href: '#metro', label: 'Proyecto Metro' },
    { href: '#distritos', label: 'Distritos' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'Lima &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Lima',
  lede: 'En Lima casi todo se mide en tiempo de viaje: al colegio, al trabajo, a la academia. Esta página es para madres y padres limeños que buscan programación para un hijo o hija de primaria y se preguntan si vale la pena cruzar la ciudad para un taller o si una clase en vivo desde casa da lo mismo o más. Respondemos con cifras del INEI, explicamos cómo es aprender con un mentor que habla en inglés y mostramos un ejercicio real con las estaciones de la Línea 1 del Metro.',
  secondaryCta: { href: '#metro', label: 'Ver el proyecto del Metro' },
  wa: 'Hola Modern Age Coders, vivimos en Lima y buscamos clases de programación en inglés para nuestro hijo o hija de primaria. ¿Podemos agendar la clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un mentor que adapta su inglés a cada niño',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Dónde', 'En su casa, en cualquier distrito de Lima o el Callao'],
    ['Herramientas', 'Scratch, bloques, Python y proyectos de IA'],
    ['Formato', 'Grupo de quince a veinte niños, o clases individuales'],
    ['Idioma', 'Siempre en inglés, con un mentor que habla claro y despacio'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Sí: en Modern Age Coders enseñamos a programar a chicos limeños de entre seis y doce años con clases en vivo por internet, siempre en inglés, y su hijo las sigue sin moverse de su casa ni cruzar la ciudad. Los menores empiezan armando juegos en Scratch; hacia los nueve pasan a escribir Python y a hacer proyectos sencillos de IA. El mentor, que vive en la India, aparece por videollamada, habla pausado y respeta el ritmo de cada chico. Puede ser en grupo o a solas con el mentor, cualquier día y a la hora que su familia prefiera, y la clase de prueba no cuesta nada.',

  picks: {
    eyebrow: 'Para empezar en Lima',
    h2: 'Por dónde suelen empezar los chicos de Lima',
    lede: 'Uno corto para probar si la programación le gusta, uno para entrenar la lógica antes del código y uno para el niño que ya teclea con soltura.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PAC / 01', title: 'Scratch para niños', alt: 'Imagen del curso de Scratch para niños', note: 'De 6 a 12 años, de tres a cuatro meses. Más de treinta proyectos en Scratch, desde el primer bloque hasta juegos y animaciones completas. Una forma corta de saber si a su hijo le engancha programar.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PAC / 02', title: 'Resolver problemas y pensamiento computacional', alt: 'Imagen del curso de pensamiento computacional para niños', note: 'De 7 a 12 años, de seis a ocho meses. Acertijos, patrones y retos de la vida diaria que enseñan a partir un problema grande en pasos pequeños, que es lo primero que pide cualquier programa.' },
      { course: 'python-ai-kids-masterclass', code: 'PAC / 03', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'Pensado para quien ya cumplió nueve y aún no pasa de doce; dura de ocho a diez meses y no pide experiencia. Se escribe Python desde la primera semana: dibujos con la tortuga, juegos y pequeños proyectos con datos reales, como el del Metro más abajo.' }
    ]
  },

  sections: [
    {
      id: 'lima',
      eyebrow: 'Lima en cifras',
      h2: '¿Cuántos niños en edad de primaria viven en Lima?',
      lede: 'Muchos más de los que caben en cualquier academia. En los Censos Nacionales 2025 el INEI contó en Lima Metropolitana a 818,096 chicos y chicas que tenían entre seis y once años, justo la edad de la primaria.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Lima Metropolitana según el INEI: población total, población censada y niños de 6 a 11 años', head: ['Unidad y medición', 'Personas', 'Censo'], rows: [
          ['Lima Metropolitana (provincia de Lima, 43 distritos), población total', '10,141,775', 'Censos Nacionales 2025'],
          ['Lima Metropolitana, población censada', '9,600,043', 'Censos Nacionales 2025'],
          ['Lima Metropolitana, censados en el grupo De 6 a 11 años', '818,096', 'Censos Nacionales 2025'],
          ['Lima Metropolitana, censados en el grupo De 12 a 17 años', '867,253', 'Censos Nacionales 2025'],
          ['Distrito de Lima (Cercado)', '314,840', 'Censos Nacionales 2025'],
          ['Ciudad de Lima Metropolitana, con el Callao', '9,562,280', 'Censos Nacionales 2017']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, Censos Nacionales 2025, tabulado de indicadores demográficos de Lima Metropolitana, cuadro 1 (población total, que suma la censada y la omitida) y cuadro 3 (población censada por grupo de edad), día de referencia 15 de septiembre de 2025; INEI, Perú: Perfil Sociodemográfico 2017, Cuadro N° 1.9, cuya nota dice que la ciudad "comprende la provincia de Lima y la Provincia Constitucional del Callao". Cada fila mide algo distinto y ninguna se suma con otra.' },
        { kind: 'two', mt: true,
          leftH3: 'Qué nos dicen estos números',
          left: [
            'Ese grupo de edad equivale al 8.5 % de las personas censadas en Lima Metropolitana en 2025 (cálculo nuestro: 818,096 entre 9,600,043). Es una ciudad entera de escolares de primaria repartida en 43 distritos, de Ancón a Pucusana.',
            'El INEI no había publicado todavía en noviembre de 2026 una cifra de 2025 para la ciudad como conglomerado, así que la última es la de 2017: 9,562,280 personas, contando el Callao. En el mismo cuadro, la ciudad aparece con 8,472,092 habitantes en 2007, un crecimiento de 12.9 % en diez años según el propio INEI.'
          ],
          rightH3: 'Por qué importa para una clase',
          right: [
            'Con tantas familias en tantos distritos, la oferta presencial se concentra donde hay más demanda con poder de pago, y muchos niños quedan lejos de cualquier taller de programación. Una clase en vivo por internet no depende del distrito: llega igual a Comas que a Miraflores.',
            'También explica por qué agrupamos a los niños por edad y no por barrio. En un grupo de quince a veinte pueden coincidir una niña de Ate, un niño de San Miguel y otro de Villa El Salvador, todos de la misma edad y con el mismo punto de partida.'
          ] },
        { kind: 'p', mt: true, html: 'Si su hijo tiene entre 6 y 12 años y vive en cualquier distrito de Lima o del Callao, el punto de partida es el mismo: una clase gratis en la que el mentor ve qué sabe hacer y le propone el curso que le conviene. La edad orienta, pero lo que decide es lo que el niño ya puede hacer frente a la pantalla.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Academia o casa',
      h2: '¿Conviene una academia de programación en Lima o clases online desde casa?',
      lede: 'Para la mayoría de familias limeñas con niños de primaria, la clase en vivo desde casa resuelve lo que más pesa: el traslado. Su hijo programa en su propio escritorio y usted no tiene que llevarlo ni esperarlo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Academia presencial y clase en vivo desde casa, comparadas (nuestra comparación)', head: ['', 'Academia en otro distrito', 'Clase en vivo desde casa'], rows: [
          ['El viaje', 'Ida y vuelta, casi siempre con un adulto', 'Ninguno: la clase empieza en su sala'],
          ['La hora', 'La fija la academia para todo el grupo', 'Usted la elige, en grupo o individual'],
          ['El equipo', 'Las computadoras del local', 'La computadora de la casa, la misma de las tareas'],
          ['El idioma', 'Por lo general, castellano', 'Inglés, con un mentor que va despacio'],
          ['Si su hijo falta', 'Pierde la sesión', 'Se reprograma con el mismo mentor']
        ] },
        { kind: 'p', mt: true, html: 'No damos cifras de minutos de tráfico porque no hay una que valga para toda Lima: depende del distrito, de la hora y del día. Lo que sí sabe cada familia es cuánto le cuesta llegar a un taller un martes a las cuatro de la tarde, y ese tiempo, multiplicado por dos clases a la semana, es el que la clase en casa le devuelve.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dice el INEI sobre los hogares de Lima',
          left: [
            'En el informe trimestral de TIC que el INEI publicó para abril a junio de 2026, el 84,7 % de los hogares de Lima Metropolitana tenía servicio de internet, frente al 64,5 % del país. En la misma medición, el 53,3 % de los hogares limeños tenía al menos una computadora, contra el 36,4 % nacional.',
            'El INEI aclara en sus notas que "Lima Metropolitana incluye la Provincia Constitucional del Callao", así que estas cifras valen también para las familias chalacas.'
          ],
          rightH3: 'Y sobre los niños',
          right: [
            'El mismo boletín registra que en Lima Metropolitana el 92,4 % de las personas de 6 años a más usó internet, el nivel más alto del país. Mirando todo el Perú, el grupo de edad que menos se conecta es el de los escolares de seis a once años: 68,2 %.',
            'Dicho de otro modo: en Lima la conexión casi nunca es el problema; lo que suele faltar es que el niño use la computadora para crear algo, no solo para mirar videos. Eso es lo que cambia una clase de programación.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Revise la computadora.</strong> Laptop o de escritorio, pero con cámara, micrófono y un teclado de verdad. Si es la que usa toda la familia, reserve esa hora para el niño.',
          '<strong>Pruebe la conexión a la hora de la clase.</strong> En muchos edificios de Lima la señal baja en la noche, cuando todos se conectan. Una prueba de cinco minutos el día anterior evita sorpresas.',
          '<strong>Busque un rincón sin ruido de calle.</strong> Los audífonos con micrófono ayudan a que su hijo entienda el inglés del mentor aunque afuera pase el tráfico.',
          '<strong>Use el tiempo ganado.</strong> Los minutos que no van al traslado pueden ir a las tareas del colegio, al juego o a descansar antes de la clase.'
        ] }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Un chico limeño entiende a un mentor que solo le habla en inglés?',
      lede: 'Sí, si el mentor sabe enseñar en inglés a niños que lo están aprendiendo. Lima, además, parte con ventaja: el EF EPI 2025 le da 555 puntos, el nivel más alto entre las ciudades peruanas que mide.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Puntaje de inglés de cuatro ciudades peruanas en el EF EPI 2025', head: ['Ciudad', 'Puntaje EF EPI 2025', 'Banda de EF'], rows: [
          ['Lima', '555', 'Alta (desde 550)'],
          ['Cusco', '520', 'Moderada (de 500 a 549)'],
          ['Trujillo', '519', 'Moderada'],
          ['Arequipa', '512', 'Moderada'],
          ['Perú, todo el país', '519', 'Moderada; puesto 52 de 123 países']
        ] },
        { kind: 'source', html: 'Datos tomados del índice EF EPI 2025 de EF Education First, ficha de Perú, consultada en noviembre de 2026. El índice se construye con adultos que rinden la prueba de EF, no con niños, y EF fija sus bandas así: alta desde 550 puntos, moderada desde 500. Lo usamos como señal del inglés que un niño oye en su entorno, no como nota de su hijo.' },
        { kind: 'p', mt: true, html: 'Ese entorno ayuda, pero no es requisito. En la clase el mentor usa frases cortas, señala en la pantalla compartida lo que nombra y repite con otras palabras cuando ve dudas. Si su hijo responde en castellano, el mentor toma la idea y se la devuelve en inglés para que la repita. Al principio el niño entiende más de lo que dice; a las pocas semanas empieza a explicar su propio código con frases como <em>this block makes the cat jump</em>.' },
        { kind: 'p', html: 'Para muchas familias limeñas, sobre todo las que pagan clases de inglés aparte, ese es el valor doble de la clase: dos horas a la semana en las que el inglés se usa para hacer algo, no para llenar una ficha. Las familias de colegios bilingües, británicos o del IB encontrarán más detalle en la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, escrita en inglés para ellas.' }
      ]
    },
    {
      id: 'metro',
      tint: 'tint',
      eyebrow: 'Un proyecto limeño',
      h2: '¿Cuántas paradas hay de Atocongo a Gamarra? Un proyecto de Python con el Metro de Lima',
      lede: 'Este ejercicio es nuestro y está pensado para niños de 9 a 12 años. Usa la lista oficial de las 26 estaciones de la Línea 1 del Metro de Lima, publicada por el Ministerio de Transportes y Comunicaciones con la Autoridad Autónoma del Tren Eléctrico (AATE) en la Plataforma Nacional de Datos Abiertos, bajo la licencia Open Data Commons Attribution (ODC-By).',
      body: [
        { kind: 'table', numCols: [1], caption: 'Estaciones de la Línea 1 por distrito, tal como las lista el archivo del MTC y la AATE', head: ['Distrito (como figura en el archivo)', 'Estaciones'], rows: [
          ['San Juan de Lurigancho', '8'],
          ['VM del Triunfo', '3'],
          ['Santiago de Surco', '3'],
          ['San Borja', '3'],
          ['Villa El Salvador', '2'],
          ['SJ de Miraflores', '2'],
          ['La Victoria', '2'],
          ['El Agustino', '2'],
          ['Cercado de Lima', '1']
        ] },
        { kind: 'source', html: 'Fuente: MTC, conjunto de datos "MTC - AATE Estaciones de Metro de Lima - Línea 1" (archivo estaciones2018.xlsx, columnas ESTACIÓN, DISTRITO, UBICACIÓN y latitud y longitud), Plataforma Nacional de Datos Abiertos, licencia Open Data Commons Attribution License, ficha modificada el 9 de octubre de 2026; descargado por nosotros el 10 de noviembre de 2026. Conteo por distrito hecho por nosotros sobre las 26 filas del archivo.' },
        { kind: 'p', mt: true, html: 'Cualquier niño limeño que haya subido al tren tiene una intuición del problema: entre dos estaciones hay "varias paradas". Pasarlo a Python obliga a ser exacto, y en esa exactitud aparecen tres trampas clásicas de la programación. Copiamos las estaciones en el mismo orden del archivo, de Villa El Salvador a Bayóvar, y le pedimos al programa que cuente.' },
        { kind: 'code', label: 'Versión 1: contar paradas con la posición en la lista', lang: 'Python', code: V1, note: 'Sin correr nada todavía, el mentor lanza la pregunta: "Which number is Atocongo?" Casi todos los chicos dicen 7, porque es la séptima estación desde Villa El Salvador.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Salida exacta, copiada al ejecutar el programa nosotros mismos con python3 -I. Tres cosas no cuadran con lo que el niño esperaba.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Python cuenta desde cero.</strong> La primera estación, Villa El Salvador, es la número 0 para <code>index()</code>, así que Atocongo sale 6 aunque para una persona sea la séptima. No es un error del programa: es una regla que hay que conocer.',
          '<strong>Tramos o estaciones.</strong> De Atocongo a Gamarra el tren hace 8 tramos, pero el niño ve 9 estaciones, porque cuenta la de subida y la de bajada. Es el problema de los postes de una cerca: con 9 postes hay 8 espacios entre ellos.',
          '<strong>El sentido del viaje.</strong> De Bayóvar a Grau el programa dice -10. Como Grau está antes que Bayóvar en la lista, la resta da negativa. Nadie viaja menos diez paradas.'
        ] },
        { kind: 'code', label: 'Versión 2: una función que cuenta bien en los dos sentidos', lang: 'Python', code: V2, note: '<code>abs()</code> quita el signo, la función devuelve los tramos y las estaciones vistas por separado, y sumar 1 a la posición da el número que usaría una persona.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3 -I. El caso de Angamos a Angamos sirve de prueba: si no viaja, son 0 tramos y 1 estación vista, la suya.' },
        { kind: 'p', mt: true, html: 'Lo valioso no es el Metro, es el hábito de dudar del primer resultado. En la versión 1 el programa "funciona", no da ningún error, y aun así responde mal tres veces. En clase el mentor no corrige el código por el niño: le pide que diga en inglés qué esperaba ver y qué vio, y que busque la línea responsable. El reto siguiente es usar la columna DISTRITO del archivo para contar cuántas estaciones tiene cada distrito, y comparar su respuesta con la tabla de arriba.' }
      ]
    },
    {
      id: 'distritos',
      eyebrow: 'Por distrito',
      h2: '¿Hay algo para nuestro distrito, sobre todo en vacaciones útiles?',
      lede: 'Sí. Para los distritos más buscados de Lima tenemos páginas propias sobre las vacaciones útiles de enero a marzo, con datos de cada municipalidad y un plan de verano nuestro.',
      body: [
        { kind: 'p', html: 'Si la Línea 1 pasa cerca de su casa, quizá le sirva empezar por <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-juan-de-lurigancho-lima">vacaciones útiles de programación en San Juan de Lurigancho</a>, el distrito con más estaciones del archivo, o por las páginas de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-surco-lima">Santiago de Surco</a> y <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-borja-lima">San Borja</a>. Cada una explica qué ofrece su municipalidad en el verano y cómo encaja una clase en vivo con esas actividades.' },
        { kind: 'two', mt: true,
          leftH3: 'Durante el año escolar',
          left: [
            'La RM 501-2025-MINEDU puso las clases escolares de 2026 entre el lunes 16 de marzo y el viernes 18 de diciembre. En esos meses la mayoría de familias pone la programación después del colegio y de las tareas, dos veces por semana.',
            'Entre el 27 de julio y el 7 de agosto de 2026 la misma norma fijó semanas de gestión, sin clases para los alumnos. Son buenas semanas para que su hijo termine un proyecto o pruebe un curso nuevo.'
          ],
          rightH3: 'En el verano',
          right: [
            'De enero a marzo, sin colegio, muchos niños pueden tomar la clase por la mañana, cuando el calor todavía no aprieta y la casa está más tranquila.',
            'No tenemos un programa de verano con fechas fijas: su hijo empieza el curso normal, en grupo o individual, el día que usted decida, y sigue en marzo si le gustó.'
          ] },
        { kind: 'p', mt: true, html: 'Si prefiere leer primero lo general, la <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">guía de programación en inglés para primaria</a> explica qué enseña la primaria peruana y a qué edad conviene empezar, y la de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases virtuales para chicos de primaria</a> se detiene en cómo se vive una clase virtual en casa.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Robótica para niños en Lima o programación: por dónde empezar?',
      lede: 'Por la programación. Un robot educativo no hace nada que no le diga un programa, y los talleres de robótica de Lima dedican buena parte del tiempo a armar piezas antes de llegar a esa parte.',
      body: [
        { kind: 'p', html: 'El propio Ministerio de Educación, cuando escribe sobre robótica en las aulas, la presenta como un medio para aprender y no como una meta en sí. Lo que un niño se lleva de un taller de robótica es, sobre todo, la lógica de ordenar instrucciones, repetir y decidir. Esa lógica es la que enseñamos, sin piezas ni kits, con Scratch y con Python.' },
        { kind: 'p', html: 'Si su hijo ya asiste a robótica en su colegio o en la municipalidad de su distrito, nuestras clases no compiten con él: lo refuerzan. Un niño que entiende bien un bucle y una condición en la pantalla programa su robot con más soltura. Y si nunca tuvo un robot cerca, no le falta nada para empezar: con una computadora basta.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'La hora',
      h2: '¿A qué hora son las clases desde Lima?',
      lede: 'A la que usted elija. Los mentores trabajan desde la India, que va 10 horas y 30 minutos por delante de Lima durante todo el año; esta tabla traduce algunas horas limeñas al reloj del mentor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Seis horas limeñas leídas en el reloj de un mentor en la India (solo conversiones; las clases van a la hora que usted escoja)', head: ['En Lima', 'En la India', '¿Qué fecha marca allá?'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'La misma'],
          ['9:30 a. m.', '8:00 p. m.', 'La misma'],
          ['11:00 a. m.', '9:30 p. m.', 'La misma'],
          ['1:00 p. m.', '11:30 p. m.', 'La misma'],
          ['4:00 p. m.', '2:30 a. m.', 'Un día después'],
          ['6:30 p. m.', '5:00 a. m.', 'Un día después']
        ] },
        { kind: 'source', html: 'El reloj peruano marca UTC-5 los doce meses y no adelanta ni atrasa la hora desde 1994, según la base de husos tzdata (America/Lima) y la hora oficial que publica el INACAL, revisada por nosotros en noviembre de 2026. En la India rige UTC+5:30, también sin cambios de verano. Por eso la diferencia de 10 horas y 30 minutos es la misma en enero, en julio y en cualquier mes.' },
        { kind: 'p', mt: true, html: 'Al reservar, usted ve los horarios en la hora de Lima y el mentor en la suya. Los niños de colegios con turno mañana suelen tomar la clase a media tarde, después de almorzar; los de turno tarde, a primera hora de la mañana. En vacaciones, cualquier hora vale.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota que su hijo avanza en programación?',
    lede: 'Cinco escalones propios, con un ejemplo limeño en cada uno, para que usted sepa dónde está su hijo y qué viene después.',
    table: { caption: 'Cinco escalones de programación para niños (nuestros)', head: ['Escalón', 'Edad frecuente', 'Lo que su hijo logra'], rows: [
      ['1. Dar órdenes en secuencia', '6 a 7 años', 'llevar a un personaje de una estación a otra con bloques de avanzar y girar'],
      ['2. Repetir sin copiar', '7 a 9 años', 'usar un bucle en vez de poner el mismo bloque diez veces'],
      ['3. Elegir con condiciones', '8 a 10 años', 'hacer que el juego reaccione distinto según lo que pase en la pantalla'],
      ['4. Escribir y guardar datos', '9 a 11 años', 'escribir en Python una lista, como la de estaciones, y buscar posiciones en ella'],
      ['5. Probar y corregir', '10 a 12 años', 'encontrar por qué un programa sin errores da una respuesta equivocada']
    ] },
    left: { h3: 'Para la familia', ps: [
      'No mida el avance por la cantidad de líneas de código. Mídalo por las preguntas: un niño que pregunta "¿y si viajo al revés?" está pensando como programador.',
      'Pídale que le enseñe a usted lo que hizo en la clase. Si puede explicarlo, aunque mezcle castellano e inglés, lo entendió.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Diga qué espera antes de ejecutar. Después compare con lo que salió.',
      'Si el resultado es raro, pruebe un caso pequeño que pueda contar con los dedos.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos para niños de Lima',
    lede: 'Cada uno se dicta en vivo y en inglés, con el mismo mentor de principio a fin, y se puede tomar en grupo o a solas.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 12 años', courses: [
        { code: 'PAC / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación para niños, curso completo', blurb: 'Un año entero que va de Scratch a juegos, apps y la IA, para chicos de seis a doce.' },
        { code: 'PAC / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para los más pequeños', blurb: 'Patrones, secuencias y lógica para los que tienen entre seis y nueve.' },
        { code: 'PAC / BASE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Para chicos de siete a doce: granjas automáticas y construcciones que obedecen a su código.' }
      ] },
      { num: 'II', h3: 'Juegos y apps', sub: 'De 8 a 14 años', courses: [
        { code: 'PAC / JUEGO / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio con Luau', blurb: 'Obstáculos, puntajes y tiendas en su propio mundo de Roblox, desde los ocho.' },
        { code: 'PAC / JUEGO / 02', slug: 'block-coding-app-development-masterclass', title: 'Su primera app', blurb: 'Una aplicación que funciona en el celular de la familia, hecha con bloques.' },
        { code: 'PAC / JUEGO / 03', slug: 'game-development-masterclass-for-kids', title: 'Taller de videojuegos', blurb: 'Tres motores de juego, uno tras otro, para quien ya cumplió ocho.' }
      ] },
      { num: 'III', h3: 'Código escrito e IA', sub: 'De 8 a 14 años', courses: [
        { code: 'PAC / TEXTO / 01', slug: 'kids-ai-web-development-course', title: 'Su propia web', blurb: 'HTML y CSS hasta tener una página publicada con su nombre.' },
        { code: 'PAC / TEXTO / 02', slug: 'cpp-programming-for-kids-course', title: 'Primeros pasos en C++', blurb: 'Un lenguaje exigente, enseñado con retos cortos a partir de los nueve.' },
        { code: 'PAC / TEXTO / 03', slug: 'ai-literacy-for-kids-course', title: 'Qué hay dentro de la IA', blurb: 'Para curiosos de ocho a catorce que quieren saber por qué la máquina acierta o falla.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una semana de clases en vivo desde Lima?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Turno mañana en el colegio', l: 'La clase va a media tarde, con el almuerzo y la tarea ya hechos.' },
      { time: 'Turno tarde en el colegio', l: 'La clase va temprano, antes de salir hacia el colegio.' },
      { time: 'Clases individuales', l: 'El día y la hora los pone usted, semana a semana si hace falta.' }
    ],
    cells: [
      { h3: 'Mismo mentor', p: 'Una sola persona todo el curso, que conoce el ritmo de su hijo.' },
      { h3: 'Pantalla compartida', p: 'El mentor ve el código del niño en vivo y lo guía a encontrar el error.' },
      { h3: 'Inglés paso a paso', p: 'Frases cortas, palabras repetidas y tiempo para responder.' },
      { h3: 'Sin traslado', p: 'Desde cualquier distrito de Lima o el Callao, sin salir de casa.' },
      { h3: 'Nota para la familia', p: 'Un resumen breve de lo trabajado y del siguiente reto.' },
      { h3: 'Con otros o a solas', p: 'Entre quince y veinte chicos de su edad, o su hijo como único alumno del mentor.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Así se ve el trabajo de quienes siguieron programando después de la primaria. Hay muchos más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, la galería de proyectos (en inglés).',
  reviewsLede: 'Opiniones de Google escritas por madres, padres y estudiantes, copiadas tal cual, en inglés.',

  fees: {
    h2: 'Precios para familias de Lima',
    lede: 'Las mensualidades se muestran en dólares estadounidenses y se cobran con tarjeta. El banco emisor pasa el cargo a su moneda con la cotización que aplique ese día, por lo que el monto en su estado de cuenta puede moverse un poco de un mes a otro.',
    free: ['Clase de prueba gratis con un mentor', 'Recomendación del curso según lo que su hijo ya sabe', 'Sin tarjeta y sin compromiso'],
    group: ['Entre quince y veinte chicos de su misma edad', 'Un mentor fijo todo el curso', 'Dos clases en vivo por semana', 'Pago mes a mes, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'Ritmo y temas a su medida', 'Día y hora que elija la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Lo que más nos preguntan las familias de Lima',
    items: [
      { q: '¿Las clases son en español?', a: 'No: se dictan únicamente en inglés, siempre en vivo y por internet. Muchas familias limeñas nos eligen justo por eso, porque su hijo aprende a programar y suelta el inglés al mismo tiempo, con un mentor que habla claro y espera sus respuestas. Lima ayuda: el EF EPI 2025 la coloca en la banda alta, con 555 puntos.' },
      { q: '¿Se puede aprender a programar en Lima sin ir a un local?', a: 'Sí. Nuestras clases son en vivo por videollamada, con un mentor real que ve la pantalla de su hijo. No hay que ir a ningún local: el niño se conecta desde su casa, en cualquier distrito de Lima o el Callao.' },
      { q: '¿Desde qué edad puede empezar mi hijo?', a: 'A los seis ya se puede, con Scratch y bloques de colores. Hacia los nueve casi todos están listos para escribir Python. La clase gratis sirve para ver en qué punto está su hijo y recomendarle el curso.' },
      { q: '¿Cuántos niños de primaria hay en Lima?', a: 'El INEI contó en Lima Metropolitana, en los Censos Nacionales 2025, a 818,096 chicos y chicas de entre seis y once años, sobre 9,600,043 personas censadas. Es el 8.5 % de la población censada, según nuestro cálculo.' },
      { q: '¿En qué horario se puede conectar mi hijo?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como la India está 10 horas y 30 minutos más adelante que Lima en cualquier mes, una clase a las 9:30 a. m. limeñas es a las 8:00 p. m. para el mentor.' },
      { q: '¿Qué proyecto hace un niño de 10 años en la clase?', a: 'Por ejemplo, el de esta página: con la lista oficial de las 26 estaciones de la Línea 1 del Metro, escribe en Python un programa que cuenta las paradas entre dos estaciones y descubre por qué la primera versión da -10 al viajar de Bayóvar a Grau.' },
      { q: '¿Necesito tener una computadora en casa?', a: 'Sí, una laptop o una computadora de escritorio con cámara, micrófono e internet estable. Con el celular no se programa con comodidad. Según el INEI, en el segundo trimestre de 2026 el 53,3 % de los hogares de Lima Metropolitana tenía al menos una computadora.' },
      { q: '¿Enseñan robótica?', a: 'Enseñamos programación, que es la parte de la robótica que hace pensar al robot. No vendemos ni usamos kits. Lo que su hijo aprenda con nosotros le servirá en cualquier taller de robótica del colegio o del distrito.' },
      { q: '¿Cómo se paga la mensualidad?', a: 'Con tarjeta y en dólares estadounidenses; el banco que emitió la tarjeta la convierte a su moneda. Para la clase de prueba no le pedimos ningún dato de pago.' },
      { q: '¿Las clases cuentan para el colegio?', a: 'No. No tenemos relación con el MINEDU, con la UGEL ni con ningún colegio, y no ponemos notas. Lo único que entregamos al cerrar un curso es un certificado de finalización de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más para leer',
    h2: 'Otras páginas para familias limeñas',
    lede: 'Páginas generales del sitio, casi todas en inglés, que completan esta guía.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos en Perú, por edad y por tema, en una sola página.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Por dentro de una clase en vivo: el mentor, la pantalla y el ritmo.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Cómo explicamos la IA a chicos de primaria, sin misterio.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Desde qué edad permite cada herramienta de IA que un niño la use.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos reales publicados por nuestros estudiantes.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, de la primaria a la vida adulta.' }
    ]
  },

  start: {
    h2: 'Agende la clase gratis desde Lima',
    lede: 'En la clase de prueba el mentor saluda a su hijo en un inglés sencillo, le pide resolver un reto corto en Scratch o en Python y se fija en cómo piensa, no en si acierta a la primera. Después le decimos qué curso y qué formato le convienen.',
    readFirst: 'Antes de agendar puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre nuestras clases en vivo, o revisar <a class="ag-inline-link" href="/courses">All courses</a>, el catálogo completo (las dos en inglés).',
    note: 'Toda clase se dicta en inglés y en vivo, por mentores que viven en la India. Si nos escribe por WhatsApp, hágalo tranquilo en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch para niños' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Pensamiento computacional' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'En Lima y en Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
        { href: '/english-medium-coding-classes-lima', label: 'Lima, en inglés' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'De Villa El Salvador a Bayóvar, contando bien'
  },

  personalityCss: `
.ag-root.ag-pac .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-pac .ag-capsule { border-left-width: 6px; }
.ag-root.ag-pac .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-pac .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pac .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'INEI: Censos Nacionales 2025, indicadores demográficos de Lima Metropolitana (cuadros 1 y 3), Perfil Sociodemográfico 2017 Cuadro N° 1.9, boletín TIC II trimestre 2026; EF EPI 2025 Peru page; MINEDU DITE robotics paper; RM 501-2025-MINEDU Tabla 1 (checked by eye); tzdata and INACAL for time; MTC and AATE Línea 1 station list on the Plataforma Nacional de Datos Abiertos (ODC-By). Comparisons, the escalones and the Metro lesson are our own.',
    localProject: 'How many stops from Atocongo to Gamarra? An original Python lesson for children of 9 to 12 on the official list of the 26 Metro de Lima Línea 1 stations (MTC and AATE, Plataforma Nacional de Datos Abiertos, ODC-By): version 1 prints Atocongo is number 6, Stops from Atocongo to Gamarra: 8 and Stops from Bayóvar to Grau: -10; version 2 adds a function with abs() and returns rides and stations seen, printing rides between stations: 8 | stations you see: 9 and rides between stations: 10 | stations you see: 11. Lesson family: positions in a list with index(), counting from zero, the fencepost and abs() for direction.',
    requiredMentions: ['Stops from Bayóvar to Grau: -10', 'rides between stations: 8 | stations you see: 9', 'Atocongo for people is station 7', 'censados en el grupo De 6 a 11 años', 'contó en Lima Metropolitana a 818,096 chicos y chicas', 'el 53,3 % de los hogares limeños tenía al menos una computadora', 'MTC - AATE Estaciones de Metro de Lima - Línea 1', 'Es el problema de los postes de una cerca', 'De Villa El Salvador a Bayóvar, contando bien', 'el 84,7 % de los hogares de Lima Metropolitana tenía servicio de internet'],
    sources: [
      { claim: 'Lima Metropolitana 2025: total 10,141,775 (Cuadro 1); censada 9,600,043 and 818,096 aged 6 to 11, 867,253 aged 12 to 17 (Cuadro 3); district of Lima 314,840.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Lima Metropolitana city with Callao: 8,472,092 in 2007 and 9,562,280 in 2017, growth 12.9% (Cuadro N° 1.9).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'II trimestre 2026: internet in 84.7% of Lima Metropolitana homes (64.5% national); computer in 53.3% (36.4% national); internet use 92.4% of people 6+ in Lima; 68.2% of children 6 to 11 nationally; Lima Metropolitana includes Callao.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, Cusco 520, Trujillo 519, Arequipa 512; Peru 519, rank 52 of 123.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Metro de Lima Línea 1: 26 stations with district, location and coordinates; ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/mtc-aate-estaciones-de-metro-de-lima-linea-1' },
      { claim: 'Robotics is the means, not the goal (MINEDU DITE).', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: '2026 school calendar: teaching 16 March to 18 December; management weeks 27 July to 7 August.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English, said in the capsule and in an FAQ.',
      'Commute minutes or traffic figures for Lima: none published that hold city-wide; the page compares the trip only in words.',
      'A 2025 population for Lima city: INEI has not published one; the 2017 conglomerate figure is shown with its year and never added to 2025 rows.',
      'Any MINEDU, UGEL, municipal or school link, or an official certificate: none; the page says so.',
      'Robot kits or hardware: none; we teach programming only.',
      'Soles prices, competitor prices or a typed fee: refused; fees render from the template in USD.',
      'Crime, health or disaster data: not used; the local dataset is the Metro station list.'
    ]
  }
};

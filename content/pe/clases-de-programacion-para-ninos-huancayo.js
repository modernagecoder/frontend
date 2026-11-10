// SHIP: market (city, es) | Huancayo: programación para niños en vivo y en inglés, del Tambo a Chilca, desde casa | greedy nearest-next versus trying every order (permutations), and n! growth
'use strict';
// Clases de programación para niños en Huancayo (ag- Spanish city door, Peru cluster row PE134, P6; alloc: cities, prhu, #8F3736).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// USD only, through the template's data-price anchors. Formal "usted" throughout. Kids 6 to 12 only.
// Queries (KEYWORDS.md, autocomplete gl=pe): "clases de programación para niños huancayo peru", "curso de programación
// huancayo peru", "curso de python huancayo peru", "clases particulares huancayo", "colegio bilingüe huancayo";
// Huancayo ranks 7th of Peruvian places (30 suggestions).
// Spine: children of primary age by district (INEI 2025, El Tambo, Huancayo, Chilca); English one point under EF's
// moderate band (EF EPI 2025: 499) and home computers below the national share in Junín (INEI Compendio 2026), stated
// honestly; what a live lesson looks like from home; robotics or coding; one original project that plans a Sunday outing
// from the Plaza de la Constitución with MINCETUR's national tourist inventory; clock conversions.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-huancayo/,
// fetched 2026-11-10 with curl -sL -A "Mozilla/5.0"; national facts from pe/facts-school and pe/facts-market raw files):
//  - INEI, Censos Nacionales 2025, tabulados/12/poblacion/Indicadores_demograficos.xlsx (inei-ind-12.xlsx), Cuadro 1
//    (población total): "JUNÍN 1422780"; "PROVINCIA HUANCAYO 626199"; "DISTRITO HUANCAYO 124447"; "DISTRITO CHILCA 101215";
//    "DISTRITO EL TAMBO 175527". Cuadro 3 (población censada by age, "De 6 a 11 años" is the third figure):
//    "PROVINCIA HUANCAYO 597638 43909 57585"; "DISTRITO HUANCAYO 118552 7651 10402"; "DISTRITO CHILCA 97620 7898 9868";
//    "DISTRITO EL TAMBO 165953 10377 14295". Census reference day 15 September 2025. Never summed.
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Huancayo city 456,250 (2017 census).
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): {"slug":"huancayo","proficiencySlug":"low","score":499};
//    Lima 555 high; moderate band from 500.
//  - INEI Compendio Estadístico Perú 2026, tomo 1, cuadro 11.5: "Junín 26,1 ... 29,2 31,9", "Total ... 34,1 33,9";
//    cuadro 11.6: "Junín 15,4 ... 44,7 49,6", "Total ... 55,5 56,8".
//  - INEI Boletín TIC II trimestre 2026: "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)".
//  - MINEDU DITE robotics paper (FACTS 52): "la robótica en educación no es el objetivo, es el medio."
//  - MINEDU Edades normativas (FACTS 13, 14); CNEB competency 28 transversal, Tabla N.° 6 (FACTS 32, 33, 57).
//  - Time: tzdata America/Lima UTC-5 (no DST since 1994), Asia/Kolkata UTC+5:30.
//  - Data: Ministerio de Comercio Exterior y Turismo (MINCETUR), "Inventario Nacional de Recursos Turísticos", Plataforma
//    Nacional de Datos Abiertos, https://www.datosabiertos.gob.pe/dataset/inventario-nacional-de-recursos-tur%C3%ADsticos,
//    licence "Open Data Commons Attribution License" (ODC-By); resource https://www.mincetur.gob.pe/Datos_abiertos/DGET/Inventario_recursos_turisticos.csv,
//    1,537,406 bytes, sha256 a44fbf6206f3bca49969dce9440d728ca494b7a22a00bf563111e3c8d29dd38c, 6,333 rows, semicolon,
//    Latin-1, FECHA_DE_CORTE 20261108. Province Huancayo: 111 rows; categories 44 "2. MANIFESTACIONES CULTURALES", 34
//    "1. SITIOS NATURALES", 20 "3. FOLCLORE", 10 "5. ACONTECIMIENTOS PROGRAMADOS", 3 "4. REALIZACIONES ...". In all 111 Huancayo
//    rows the column headed LATITUD holds a value near -75 (a longitude) and LONGITUD one near -12 (a latitude); e.g.
//    "Plaza De La Constitución;...;-75.21;-12.06805556".
// Our own runs (scratchpad pe/c4/huancayo, python3 -I on the downloaded file), exact output:
//  v1 prints: go to Parque De La Identidad Wanka / go to Formaciones Geológicas De Torre Torre / go to Santuario Arqueológico
//    De Wariwillka / go to Bosque Dorado De Paccha / Nearest-first trip: 34.9 km
//  v2 prints: Orders tried: 24 / Shortest order: ('Santuario Arqueológico De Wariwillka', 'Formaciones Geológicas De Torre Torre',
//    'Bosque Dorado De Paccha', 'Parque De La Identidad Wanka') / Shortest trip: 29.9 km
//  legs.py: nearest-first legs 2.5, 2.1, 6.9, 14.4, 9.0 km; best legs 5.5, 6.9, 8.2, 6.8, 2.5 km (straight lines, our flat
//  approximation: 111.32 km per degree, longitude scaled by cos(latitude)). math.factorial: 5 -> 120, 8 -> 40320,
//  10 -> 3628800, 15 -> 1307674368000.
// Lesson family: the nearest next stop is not always the shortest trip; try every order with itertools.permutations,
// keep the shortest, and see why the number of orders (n!) explodes.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  'import math',
  '',
  'START = "Plaza De La Constitución"',
  'STOPS = ["Parque De La Identidad Wanka", "Formaciones Geológicas De Torre Torre",',
  '         "Santuario Arqueológico De Wariwillka", "Bosque Dorado De Paccha"]',
  '',
  'where = {}',
  'with open("Inventario_recursos_turisticos.csv", encoding="latin-1") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["PROVINCIA"] == "Huancayo":',
  '            # in this file LATITUD holds the longitude and LONGITUD the latitude',
  '            where[row["NOMBRE DEL RECURSO"].strip()] = (float(row["LONGITUD"]), float(row["LATITUD"]))',
  '',
  'def km(a, b):',
  '    (lat1, lon1), (lat2, lon2) = where[a], where[b]',
  '    north = (lat2 - lat1) * 111.32',
  '    east = (lon2 - lon1) * 111.32 * math.cos(math.radians(lat1))',
  '    return math.hypot(north, east)',
  '',
  'here, left, trip = START, STOPS[:], 0',
  'while left:',
  '    nearest = min(left, key=lambda p: km(here, p))',
  '    trip += km(here, nearest)',
  '    print("go to", nearest)',
  '    here = nearest',
  '    left.remove(nearest)',
  'trip += km(here, START)',
  'print("Nearest-first trip:", round(trip, 1), "km")'
].join('\n');

const V2 = [
  'from itertools import permutations',
  '',
  '# same START, STOPS, where and km() as in version 1',
  '',
  'def trip(order):',
  '    path = [START] + list(order) + [START]',
  '    return sum(km(path[i], path[i + 1]) for i in range(len(path) - 1))',
  '',
  'orders = list(permutations(STOPS))',
  'shortest = min(orders, key=trip)',
  'print("Orders tried:", len(orders))',
  'print("Shortest order:", shortest)',
  'print("Shortest trip:", round(trip(shortest), 1), "km")'
].join('\n');

const OUT1 = [
  'go to Parque De La Identidad Wanka',
  'go to Formaciones Geológicas De Torre Torre',
  'go to Santuario Arqueológico De Wariwillka',
  'go to Bosque Dorado De Paccha',
  'Nearest-first trip: 34.9 km'
].join('\n');

const OUT2 = [
  'Orders tried: 24',
  "Shortest order: ('Santuario Arqueológico De Wariwillka', 'Formaciones Geológicas De Torre Torre', 'Bosque Dorado De Paccha', 'Parque De La Identidad Wanka')",
  'Shortest trip: 29.9 km'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Huancayo: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-huancayo',
  code: 'prhu',
  accent: '#8F3736',
  accentRationale: 'Clases de programación para niños en Huancayo: a dark rust red #8F3736 allocated to this row in alloc.tsv, close to the eroded clay of the Torre Torre formations above the city; contrast 6.16 on the paper #FBF8F2 and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Huancayo',
  title: 'Clases de programación para niños en Huancayo, en inglés',
  description: 'Clases de programación para niños de 6 a 12 años en Huancayo: en vivo, en línea y en inglés, de Scratch a Python, en grupo o uno a uno y en el horario que elija.',
  ogDescription: 'Programación para niños huancaínos de 6 a 12 años, en vivo y en inglés desde casa: niños por distrito según el INEI, una nota franca sobre inglés y computadoras, y un proyecto que planea un paseo de domingo con datos del MINCETUR.',
  twitterDescription: 'Clases de programación para niños en Huancayo, en vivo y en inglés, sin salir de casa y a la hora que le acomode.',
  pageName: 'Clases de programación para niños en Huancayo',
  webPageDescription: 'Guía para familias de Huancayo sobre clases de programación para niños de 6 a 12 años dictadas en vivo y en inglés: niños de primaria por distrito según los Censos Nacionales 2025, el inglés de la ciudad según el EF EPI 2025, computadoras e internet en Junín según el Compendio Estadístico 2026, robótica o programación, y un proyecto de Python escrito por nosotros con el Inventario Nacional de Recursos Turísticos del MINCETUR (ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años en Huancayo, dictadas solo en inglés: resolución de problemas, Python, Minecraft y más, en grupo o uno a uno, en el horario que elija la familia.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Huancayo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distritos', label: 'Distritos' },
    { href: '#nivel', label: 'Nivel de inglés' },
    { href: '#en-casa', label: 'En casa' },
    { href: '#paseo', label: 'Proyecto' },
    { href: '#horas', label: 'Horas' }
  ],
  eyebrow: 'Huancayo &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Huancayo',
  lede: 'La provincia de Huancayo suma más de cincuenta y siete mil chicos que cursan primaria, y buena parte de ellos vive en tres distritos que forman una sola ciudad: El Tambo, Huancayo y Chilca. Esta página le cuenta cómo aprenden a programar desde casa con nosotros, en vivo y en inglés, qué tan preparado debe estar su hijo, qué contestar cuando pida un robot, y un proyecto armado con datos reales: planear con Python el paseo de domingo más corto desde la Plaza de la Constitución.',
  secondaryCta: { href: '#paseo', label: 'Ver el proyecto del paseo' },
  wa: 'Hola Modern Age Coders, somos una familia de Huancayo. Nos interesan clases de programación en inglés para nuestro hijo o hija. ¿Podemos probar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en distintos países &middot; un mentor que adapta su inglés al niño',
  spec: [
    ['Edad', 'De 6 a 12 años, toda la primaria'],
    ['Qué aprenden', 'Lógica, Scratch, Python y Minecraft'],
    ['Cómo', 'Grupo de quince a veinte, o uno a uno'],
    ['Cuándo', 'Cualquier día, a la hora de su elección'],
    ['Desde dónde', 'Mentores en la India, en vivo por video'],
    ['Para probar', 'Una clase gratuita, sin tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Modern Age Coders ofrece a familias de Huancayo clases de programación para niños de 6 a 12 años en vivo, en línea y en inglés. Cada grupo o cada alumno tiene un mentor desde la India que habla con calma, repite cuando hace falta y adapta su inglés al niño. Los más pequeños resuelven acertijos y mueven personajes con bloques; desde los 9 años escriben Python. La familia elige entre clases grupales o uno a uno, y fija el día y la hora. Probar no cuesta: la primera clase es gratis.',

  picks: {
    eyebrow: 'Primer curso',
    h2: '¿Con qué curso conviene empezar en Huancayo?',
    lede: 'Uno para el niño que disfruta los acertijos, uno para el que ya quiere escribir código de verdad y uno para el que vive pegado a Minecraft.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'HYO / 01', title: 'Resolver problemas paso a paso', alt: 'Imagen del curso de resolución de problemas y pensamiento computacional para niños', note: 'De 7 a 12 años, de seis a ocho meses, sin experiencia. Partir un problema en piezas, ordenar los pasos y comprobar la respuesta: la base del proyecto del paseo de esta página.' },
      { course: 'python-ai-kids-masterclass', code: 'HYO / 02', title: 'Python con proyectos de IA', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años, de ocho a diez meses, desde cero. Dibujos con la tortuga, juegos de preguntas y ejercicios de IA que el niño teclea línea por línea.' },
      { course: 'minecraft-coding-for-kids-course', code: 'HYO / 03', title: 'Programar en Minecraft', alt: 'Imagen del curso de programación con Minecraft para niños', note: 'De 7 a 12 años, cuatro meses. Del bloque al código dentro del juego que ya conocen, construyendo y automatizando con lógica propia.' }
    ]
  },

  sections: [
    {
      id: 'distritos',
      eyebrow: 'Huancayo por distritos',
      h2: '¿Cuántos chicos en edad escolar de primaria tiene Huancayo?',
      lede: 'El censo de 2025 contó 57,585 niños de 6 a 11 años en la provincia de Huancayo. Muchos viven en los tres distritos que forman la ciudad, y el que más niños tiene no es el que lleva el nombre de Huancayo sino El Tambo.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Población total y niños de 6 a 11 años en la provincia de Huancayo y sus distritos urbanos (INEI, 2025)', head: ['Ámbito', 'Población total 2025', 'Niños de 6 a 11 años censados en 2025'], rows: [
          ['Provincia de Huancayo', '626,199', '57,585'],
          ['Distrito de El Tambo', '175,527', '14,295'],
          ['Distrito de Huancayo', '124,447', '10,402'],
          ['Distrito de Chilca', '101,215', '9,868']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, tabulado de indicadores demográficos del departamento de Junín. La columna de población total viene del Cuadro 1, que suma censados y omitidos; la de niños viene del Cuadro 3, que solo reparte por edad a los censados, por eso no se deben dividir una entre otra. Para comparar: el departamento de Junín tiene 1,422,780 habitantes en 2025, y la ciudad de Huancayo tenía 456,250 en el censo de 2017 (Perfil Sociodemográfico, Cuadro N° 1.9). Ninguna fila se suma con otra.' },
        { kind: 'two', mt: true,
          leftH3: 'Tres distritos, una sola ciudad',
          left: [
            'Para quien vive en Huancayo, cruzar de El Tambo al centro o del centro a Chilca es parte del día. El Tambo tiene 14,295 niños censados de 6 a 11 años, el distrito de Huancayo 10,402 y Chilca 9,868, y cada familia tiene su propio colegio, su propio turno y sus propias tardes.',
            'Una clase en vivo por internet borra esas distancias: un niño de El Tambo y una niña de Chilca comparten grupo sin que nadie tenga que llevarlos a ningún lado.'
          ],
          rightH3: 'Lo que el colegio cubre y lo que no',
          right: [
            'El Currículo Nacional trata lo digital como una competencia transversal, la número 28, "Se desenvuelve en entornos virtuales generados por las TIC", que se trabaja dentro de otras áreas. En el reparto semanal de horas de primaria no aparece un curso de computación ni de programación.',
            'Eso no quiere decir que su hijo no use computadoras en el colegio. Quiere decir que escribir un programa, entender por qué falla y arreglarlo no está garantizado en ningún grado, y ahí es donde entramos nosotros, siempre como complemento del colegio y no como reemplazo.'
          ] }
      ]
    },
    {
      id: 'nivel',
      eyebrow: 'El idioma',
      h2: '¿Qué nivel de inglés necesita un niño de Huancayo para estas clases?',
      lede: 'Menos del que se suele pensar. Todas las clases son en inglés, en vivo y por internet, sin versión en castellano, pero un niño de primaria no necesita hablarlo para empezar: necesita entender palabras sencillas y tener ganas de intentar.',
      body: [
        { kind: 'two',
          leftH3: 'Huancayo, a un punto de la banda moderada',
          left: [
            'El EF EPI 2025, el índice de dominio del inglés de EF Education First, da a la ciudad de Huancayo 499 puntos. EF empieza su banda moderada en 500, así que Huancayo queda en la banda baja por un solo punto. Lima obtiene 555, en la banda alta, y el Perú en conjunto, 519.',
            'El índice se arma con adultos que dieron la prueba de EF, no con niños. Lo usamos como una pista del ambiente: en Huancayo, muchos niños escuchan poco inglés fuera del aula, y las primeras clases pueden costarles.'
          ],
          rightH3: 'Nuestra recomendación según el caso',
          right: [
            'Si su hijo tiene de 6 a 8 años, el idioma casi no es un obstáculo: trabaja con bloques, colores y personajes, y aprende las palabras escuchándolas mientras ve lo que pasa. Si tiene de 9 a 12 y nunca ha oído una clase en inglés, la sesión de prueba nos dirá si conviene un grupo o el formato uno a uno.',
            'Cuando un niño no capta casi ninguna frase y se angustia, se lo comunicamos tal cual. A veces lo sensato es dejar pasar unos meses, y preferimos eso a inscribirlo para que sufra.'
          ] },
        { kind: 'p', mt: true, html: 'Muchas familias huancaínas, incluidas las que buscan un colegio bilingüe, ven el idioma como la segunda ganancia de la clase: una hora de programación también es una hora de escuchar instrucciones, hacer preguntas y explicar ideas en inglés. Si le interesa ese ángulo, la página <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> muestra cómo se ve una clase de Python en 5° de primaria.' }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Desde la casa',
      h2: '¿Puede un niño de Huancayo aprender a programar desde su casa?',
      lede: 'Sí, siempre que tenga una computadora con teclado durante la clase. En Junín ese es el punto a revisar primero: según el INEI, la proporción de hogares con computadora está por debajo del promedio del país.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Hogares con computadora y con internet, 2025 (porcentaje del total de hogares)', head: ['Ámbito', 'Con al menos una computadora', 'Con acceso a internet'], rows: [
          ['Junín', '31,9', '49,6'],
          ['Perú', '33,9', '56,8']
        ] },
        { kind: 'source', html: 'Fuente: cuadros 11.5 y 11.6 del primer tomo del Compendio Estadístico que el INEI publicó en 2026, calculados con la ENAHO de 2025. La cifra abarca todo Junín, campo incluido; el INEI no la publica para la ciudad de Huancayo por separado.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dicen los números',
          left: [
            'En 2025, el 31,9 % de los hogares de Junín tenía al menos una computadora; en el conjunto del país, el 33,9 %; y el 49,6 % tenía internet, frente al 56,8 %. Es probable que en la ciudad las cifras sean más altas que en el campo, pero el INEI no da el dato urbano por separado y no lo vamos a inventar.',
            'El boletín del INEI del segundo trimestre de 2026 añade otro dato: el uso de internet es más bajo entre los niños de 6 a 11 años, con 68,2 %, que en cualquier otro grupo de edad salvo los mayores de 60.'
          ],
          rightH3: 'Lo que necesita su hijo',
          right: [
            'Una computadora de escritorio o portátil con teclado, una cámara, un micrófono, audífonos y un internet que aguante una videollamada. Puede ser la computadora de la familia; basta con que esa hora sea del niño.',
            'Si en casa solo hay celulares, preferimos ser francos: todavía no es el momento. Programar en una pantalla pequeña y sin teclado desanima a cualquier niño, y no queremos que su primera experiencia con el código sea esa.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Entrar.</strong> El niño abre el enlace unos minutos antes y saluda al mentor, que le pregunta en inglés qué hizo en la semana.',
          '<strong>Recordar.</strong> Se repasa lo de la clase anterior con una pregunta: "What did our loop do last time?"',
          '<strong>Mirar.</strong> El mentor comparte su pantalla y muestra la idea nueva con un ejemplo corto.',
          '<strong>Hacer.</strong> El niño toma el control de su propio programa y lo construye; el mentor pregunta y orienta, sin escribir por él.',
          '<strong>Romper y arreglar.</strong> Siempre algo falla. Encontrar el error, leer el mensaje y corregirlo es parte de la clase, no un accidente.',
          '<strong>Contar.</strong> Al final, el niño explica en una o dos frases en inglés lo que construyó, y usted recibe un resumen corto.'
        ] },
        { kind: 'p', mt: true, html: 'Comparada con una academia presencial, la clase en casa le ahorra el viaje de ida y vuelta entre distritos y la espera, y sigue igual en vacaciones o si la familia viaja por el valle del Mantaro un fin de semana. Los factores que mueven el precio de una clase así, sin cifras inventadas, están en nuestra <a class="ag-inline-link" href="/cuanto-cuestan-clases-de-programacion-para-ninos-peru">guía de precios para familias</a>.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Robótica o programación para un niño de Huancayo?',
      lede: 'Programación, para empezar. La robótica es programación aplicada a un aparato, y el aparato solo hace lo que el código le dice. Nosotros enseñamos el código; no trabajamos con kits ni con piezas, y tampoco los vendemos.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Lo dice el MINEDU', p: 'En su texto sobre robótica educativa, el Ministerio de Educación presenta al robot como un medio y no como la meta. Es una excusa para aprender a pensar en orden.' },
          { h3: 'La misma lógica', p: 'Avanzar, repetir y decidir: esas tres ideas mueven a un robot seguidor de línea y a un personaje de Scratch. El niño que las domina en pantalla las reconoce en cualquier kit.' },
          { h3: 'Un orden que funciona', p: 'Un año de programación primero y, si el interés sigue, un taller de robótica hacia el final de la primaria. Así el robot deja de ser una caja que obedece instrucciones impresas.' }
        ] },
        { kind: 'p', mt: true, html: 'Para los que aman Minecraft, existe un punto intermedio: en nuestro curso de <a class="ag-inline-link" href="/programacion-minecraft-para-ninos-peru">programación con Minecraft para niños</a> el niño programa a un pequeño ayudante dentro del juego que construye y recorre caminos, muy parecido a un robot, sin nada que comprar ni armar.' }
      ]
    },
    {
      id: 'paseo',
      tint: 'tint',
      eyebrow: 'Proyecto con datos de Huancayo',
      h2: '¿Cuál es el paseo de domingo más corto desde la Plaza de la Constitución?',
      lede: 'El MINCETUR publica como dato abierto el Inventario Nacional de Recursos Turísticos, con las coordenadas de cada lugar. Con él, los niños de 10 a 12 años planean un paseo por cuatro lugares de Huancayo y descubren algo que sorprende a los adultos: ir siempre al lugar más cercano no da el camino más corto.',
      body: [
        { kind: 'two',
          leftH3: 'Los datos',
          left: [
            'El Inventario Nacional de Recursos Turísticos es un archivo del Ministerio de Comercio Exterior y Turismo, enlazado desde datosabiertos.gob.pe con la licencia ODC-By (Open Data Commons Attribution). Lo bajamos el 10 de noviembre de 2026; trae 6,333 filas de todo el país y una fecha de corte del 8 de noviembre de 2026.',
            'La provincia de Huancayo tiene 111 filas: 44 manifestaciones culturales, 34 sitios naturales, 20 de folclore, 10 acontecimientos programados y 3 realizaciones contemporáneas. Aparecen la Feria Dominical, el Parque de la Identidad Wanka, el Cerrito de la Libertad, las formaciones de Torre Torre y los pueblos artesanales de Cochas.'
          ],
          rightH3: 'Una sorpresa en las columnas',
          right: [
            'Antes de calcular nada, el niño mira una fila. La Plaza de la Constitución dice LATITUD -75.21 y LONGITUD -12.06805556. Pero el Perú está entre el ecuador y unos 18 grados al sur: una latitud de -75 caería en plena Antártida. En este archivo, las dos columnas tienen los nombres cruzados, y así ocurre en las 111 filas de Huancayo.',
            'El programa lo resuelve leyendo cada columna por lo que contiene y no por su título, y lo deja escrito en un comentario. Revisar una fila a mano antes de programar es un hábito que vale para toda la vida.'
          ] },
        { kind: 'p', mt: true, html: 'La pregunta es esta: salir de la Plaza de la Constitución, visitar el Parque de la Identidad Wanka, las formaciones de Torre Torre, el Santuario Arqueológico de Wariwillka y el Bosque Dorado de Paccha, y volver a la plaza. ¿En qué orden se recorre menos? Casi todos los niños proponen lo mismo: ir siempre al lugar más cercano que falte. La versión 1 hace exactamente eso. Las distancias son en línea recta, con una aproximación nuestra, no por calles.' },
        { kind: 'code', label: 'Versión 1: ir siempre al más cercano', lang: 'Python', code: V1, note: 'La función <code>km</code> convierte grados en kilómetros: 111.32 km por grado hacia el norte, y algo menos hacia el este, según el coseno de la latitud. Es una aproximación nuestra, buena para distancias cortas.' },
        { kind: 'code', label: 'Salida de la versión 1', lang: 'Salida', code: OUT1, note: 'Salida exacta, ejecutada por nosotros con Python 3 sobre el archivo descargado.' },
        { kind: 'p', mt: true, html: 'Parece sensato: primero lo que está cerca, después lo que está lejos. El problema aparece al final. Wariwillka queda al sur de la ciudad y Paccha al norte, así que el recorrido termina cruzando todo Huancayo en un solo tramo de 14.4 km, y después vuelve 9 km a la plaza. La versión 2 no adivina: prueba todos los órdenes posibles, que con cuatro lugares son 4 × 3 × 2 × 1 = 24, y se queda con el más corto.' },
        { kind: 'code', label: 'Versión 2: probar los 24 órdenes', lang: 'Python', code: V2, note: '<code>permutations</code> genera cada orden posible de la lista; <code>min</code> con <code>key=trip</code> se queda con el que da el viaje más corto.' },
        { kind: 'code', label: 'Salida de la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta. El mismo recorrido al revés mide lo mismo; Python muestra el primero que encuentra.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Los dos recorridos, tramo por tramo (kilómetros en línea recta, cálculos nuestros)', head: ['Tramo', 'Ir al más cercano', 'Orden más corto de los 24'], rows: [
          ['Primer tramo, desde la plaza', '2.5 (a Identidad Wanka)', '5.5 (a Wariwillka)'],
          ['Segundo tramo', '2.1 (a Torre Torre)', '6.9 (a Torre Torre)'],
          ['Tercer tramo', '6.9 (a Wariwillka)', '8.2 (a Paccha)'],
          ['Cuarto tramo', '14.4 (a Paccha)', '6.8 (a Identidad Wanka)'],
          ['Regreso a la plaza', '9.0', '2.5'],
          ['Total', '34.9', '29.9']
        ] },
        { kind: 'source', html: 'Origen: Inventario_recursos_turisticos.csv, del MINCETUR, al que enlaza datosabiertos.gob.pe bajo licencia ODC-By; fecha de corte: 8 de noviembre de 2026. La elección de los lugares, la fórmula de distancia y la redacción son nuestras. No es una ruta para caminar ni para manejar: las calles, los cerros y el tráfico cambian todo.' },
        { kind: 'p', mt: true, html: 'La lección tiene una segunda parte, la que más impresiona a los niños. Con 5 lugares hay 120 órdenes; con 8 hay 40,320; con 10 hay 3,628,800; con 15 hay más de un billón: 1,307,674,368,000. Probarlos todos deja de ser posible muy rápido, y por eso existen los algoritmos que buscan "buenos" caminos sin revisarlos todos. Cuando un niño entiende por qué, entiende algo que usan los mapas de su celular.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Entre 6 y 8, en el piso.</strong> Poner cuatro juguetes en el suelo de la sala y una caja como "plaza". Medir con pasos dos caminos distintos que pasen por todos. ¿Cuál fue más corto?',
          '<strong>Entre 8 y 10, con Scratch.</strong> Hacer que un personaje visite tres puntos del escenario en dos órdenes distintos y contar sus pasos con una variable.',
          '<strong>De 10 a 12 años, en Python.</strong> Ejecutar la versión 1, encontrar el tramo que arruina el recorrido y explicar por qué; luego escribir la versión 2.',
          '<strong>Un reto más.</strong> Cambiar los lugares por la Feria Dominical, el Cerrito de la Libertad y los pueblos de Cochas Chico y Cochas Grande, y ver si ir al más cercano vuelve a fallar.'
        ] }
      ]
    },
    {
      id: 'horas',
      eyebrow: 'Diferencia horaria',
      h2: '¿A qué hora de Huancayo puede ser la clase?',
      lede: 'A cualquiera que usted prefiera. Huancayo comparte la hora de todo el Perú, y la diferencia con la India no cambia en ningún mes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias de ejemplo entre Huancayo y la India (solo conversiones, no turnos de clase)', head: ['Huancayo, hora de Perú', 'Mentor, hora de la India', '¿Mismo día?'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'Sí'],
          ['9:00 a. m.', '7:30 p. m.', 'Sí'],
          ['11:00 a. m.', '9:30 p. m.', 'Sí'],
          ['3:00 p. m.', '1:30 a. m.', 'No, el siguiente'],
          ['5:00 p. m.', '3:30 a. m.', 'No, el siguiente'],
          ['7:00 p. m.', '5:30 a. m.', 'No, el siguiente']
        ] },
        { kind: 'source', html: 'Método: según tzdata (zona America/Lima), el Perú va cinco horas por detrás del tiempo universal y sin horario de verano desde 1994; el INACAL es quien difunde la hora oficial. La India sigue Asia/Kolkata, cinco horas y media por delante. Entre las dos hay diez horas y media, todo el año.' },
        { kind: 'p', mt: true, html: 'Usted reserva con el reloj de su casa y el mentor recibe la hora ya convertida. Como ninguno de los dos países cambia la hora, lo que acuerde en abril seguirá igual en noviembre. Muchas familias empiezan en el verano, cuando el colegio para, y mantienen la misma hora al volver a clases.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo va a notar que su hijo progresa?',
    lede: 'Seguimos cinco pasos propios para los niños de primaria. Le dicen a usted qué puede hacer hoy su hijo, sin depender de notas ni de horas conectado.',
    table: { caption: 'Cinco pasos que usamos con niños de 6 a 12 años (nuestros)', head: ['Paso', 'Edad frecuente', 'Lo que el niño ya hace solo'], rows: [
      ['1. Ordenar', '6 a 7 años', 'pone en el orden correcto los bloques para que un personaje llegue a su meta'],
      ['2. Repetir', '7 a 9 años', 'usa un bucle en lugar de copiar el mismo bloque muchas veces'],
      ['3. Elegir', '8 a 10 años', 'hace que su programa tome decisiones con "si pasa esto, entonces"'],
      ['4. Teclear Python', '9 a 11 años', 'teclea un programa corto en Python y dice qué va a imprimir antes de correrlo'],
      ['5. Comparar caminos', '10 a 12 años', 'prueba varias soluciones, como en el proyecto del paseo, y demuestra cuál es la más corta']
    ] },
    left: { h3: 'Para la familia', ps: [
      'El paso 5 no es saber muchas fórmulas. Es no conformarse con la primera solución que parece razonable.',
      'Le contamos los avances con lo que su hijo construyó y es capaz de explicar.'
    ] },
    right: { h3: 'Una idea para la casa', ps: [
      'El domingo, antes de salir, que el niño proponga el orden del paseo y lo defienda.',
      'Al volver, que cuente qué orden habría sido más corto y por qué.'
    ] }
  },

  catalogue: {
    eyebrow: 'Otros cursos',
    h2: '¿Qué más puede aprender un niño huancaíno con nosotros?',
    lede: 'Otros nueve cursos, en tres grupos de edad. Todos se dictan en vivo, en inglés, con un mentor fijo, y se pueden tomar en grupo o uno a uno.',
    bands: [
      { num: 'I', h3: 'Para empezar', sub: 'De 6 a 12 años', courses: [
        { code: 'HYO / I / 01', slug: 'kids-coding-blocks-masterclass', title: 'Todo con bloques', blurb: 'Diez a doce meses de Scratch, juegos y apps, con grupos por edad.' },
        { code: 'HYO / I / 02', slug: 'scratch-programming-complete-course', title: 'Scratch en tres meses', blurb: 'Un curso corto para probar si la programación engancha.' },
        { code: 'HYO / I / 03', slug: 'mental-maths-mastery-kids', title: 'Matemática mental', blurb: 'Para chicos de 5 a 10: sentido numérico de verdad.' }
      ] },
      { num: 'II', h3: 'Crear y jugar', sub: 'De 8 a 14 años', courses: [
        { code: 'HYO / II / 01', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos de cero', blurb: 'Scratch, Roblox y Minecraft en un solo recorrido, de 8 a 12.' },
        { code: 'HYO / II / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con código', blurb: 'Para chicos de 8 a 14: seis meses escribiendo Luau para un juego propio.' },
        { code: 'HYO / II / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps para el celular', blurb: 'Diseñar y programar una app con bloques, de 8 a 12.' }
      ] },
      { num: 'III', h3: 'Más allá de los bloques', sub: 'De 8 a 14 años', courses: [
        { code: 'HYO / III / 01', slug: 'cpp-programming-for-kids-course', title: 'Primeros pasos en C++', blurb: 'Código tecleado con acertijos y juegos de texto, de 9 a 12.' },
        { code: 'HYO / III / 02', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA', blurb: 'Para chicos de 8 a 14: cómo aprende y en qué se equivoca una máquina.' },
        { code: 'HYO / III / 03', slug: 'maths-through-coding', title: 'Matemática programada', blurb: 'Temas del colegio explorados con Python, desde los 10.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo trabajamos',
    h2: '¿Cómo funcionan las clases para una familia de Huancayo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del colegio', l: 'Para los que estudian en la tarde, o en vacaciones.' },
      { time: 'Después del colegio', l: 'Cuando el niño ya descansó y terminó sus tareas.' },
      { time: 'Uno a uno', l: 'Días y hora pactados directamente con el mentor.' }
    ],
    cells: [
      { h3: 'Mentor estable', p: 'El mismo de la primera a la última clase del curso.' },
      { h3: 'Inglés claro', p: 'Frases cortas, ejemplos en pantalla y paciencia para esperar.' },
      { h3: 'El niño programa', p: 'Las manos en el teclado son las de su hijo, no las del mentor.' },
      { h3: 'Por edades', p: 'Niños de 6 y de 12 años nunca comparten grupo.' },
      { h3: 'Usted informado', p: 'Un resumen breve de cada etapa y de lo que viene.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte compañeros, o su hijo solo.' }
    ]
  },

  projectsH2: '¿Qué hacen nuestros alumnos cuando crecen?',
  projectsLede: 'Los que siguen programando terminan publicando herramientas reales. Abajo hay unas cuantas; en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés) están las demás.',
  reviewsLede: 'Reseñas publicadas en Google por madres, padres y alumnos, tal como las escribieron, en inglés.',

  fees: {
    h2: 'Precios para familias de Huancayo',
    lede: 'La mensualidad figura en dólares de Estados Unidos y en esa moneda se carga a la tarjeta. El paso a su moneda corre por cuenta de su banco, con la tasa que aplique ese día; por eso el cargo final cambia ligeramente cada vez.',
    free: ['Clase de prueba en vivo', 'Un reto corto para conocer a su hijo', 'Sin pedir tarjeta'],
    group: ['Quince a veinte niños de edad similar', 'El mismo mentor todo el curso', 'Dos clases por semana', 'Mes a mes, sin atarse'],
    one: ['Su hijo solo con el mentor', 'Ritmo y temas a su medida', 'El horario lo decide usted']
  },

  faq: {
    eyebrow: 'Preguntas desde Huancayo',
    h2: 'Clases de programación para niños en Huancayo: dudas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las damos solo en inglés, en vivo y por internet. Lejos de ser un problema, para muchas familias es la razón para elegirnos: su hijo programa y, al mismo tiempo, practica el idioma hablando de lo que construye. El mentor va despacio y repite con otras palabras. El EF EPI 2025 pone el inglés de Lima en la banda alta y el de Huancayo un punto debajo de la moderada, por eso revisamos el idioma en la clase de prueba.' },
      { q: '¿Hay clases de programación para niños en Huancayo?', a: 'Sí, por internet. Un niño de El Tambo, del centro o de Chilca entra a la videollamada desde su sala, siempre con su mentor de turno fijo y en el horario que la familia escogió. No hay local al que ir.' },
      { q: '¿Desde qué edad pueden empezar?', a: 'A partir de los 6, que según el MINEDU es la edad normativa para entrar a 1° de primaria. Hasta los 8 se trabaja con bloques y acertijos; desde los 9 casi todos escriben Python.' },
      { q: '¿Mi hijo tiene que hablar inglés?', a: 'No. Le basta con entender palabras sencillas. Si en la clase de prueba vemos que el idioma lo supera, se lo diremos con claridad y le propondremos esperar o el formato uno a uno, que deja al mentor ir al ritmo exacto del niño.' },
      { q: '¿Qué computadora hace falta?', a: 'Una de escritorio o portátil con teclado y cámara, más micro, audífonos y una conexión capaz de sostener una videollamada. Según el INEI, en 2025 el 31,9 % de los hogares de Junín tenía computadora. Con un celular no se puede programar con comodidad.' },
      { q: '¿Enseñan robótica?', a: 'Enseñamos la programación con la que funciona cualquier robot, pero sin kits ni piezas; no los usamos ni los vendemos. El MINEDU describe la robótica escolar como un medio para aprender. Lo que su hijo aprenda aquí le servirá igual en un taller de robótica.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India lleva diez horas y media de ventaja sobre Huancayo todo el año: las 9:00 a. m. de Huancayo son las 7:30 p. m. del mentor.' },
      { q: '¿Qué proyectos hacen los niños?', a: 'Los pequeños hacen historias y juegos con bloques. Los mayores escriben Python y llegan a trabajar con datos públicos del Perú, como el proyecto de esta página, que calcula el paseo más corto entre cuatro lugares de Huancayo.' },
      { q: '¿En qué moneda se cobra?', a: 'En dólares de Estados Unidos, cada mes, con tarjeta; su banco se encarga de convertirlo. Para la clase de prueba no se paga nada ni se registra tarjeta.' },
      { q: '¿Tienen relación con algún colegio o con el MINEDU?', a: 'Ninguna. Modern Age Coders no depende del MINEDU, de la UGEL, del MINCETUR ni de los colegios de Huancayo, y no pone notas escolares. Al terminar un curso, su hijo recibe nuestro propio certificado de finalización.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras páginas para familias de Huancayo',
    lede: 'Lecturas útiles antes de inscribir a su hijo.',
    items: [
      { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'Inteligencia artificial para niños', p: 'Qué puede aprender un niño peruano sobre la IA, y a qué edad.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas nuestras páginas para el Perú (en inglés).' },
      { href: '/online-coding-and-ai-classes-junin-region-peru', label: 'Junín region: coding and AI classes', p: 'Toda la región de Junín, del valle a la selva central, para todas las edades (en inglés).' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Antes de abrirle una cuenta de IA a su hijo, revise la edad mínima (en inglés).' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos publicados por nuestros alumnos (en inglés).' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método de clase, explicado (en inglés).' }
    ]
  },

  start: {
    h2: 'Pruebe una clase gratis desde Huancayo',
    lede: 'Con frases muy simples en inglés, el mentor da la bienvenida a su hijo, le propone un acertijo o un pequeño reto en la pantalla y observa cómo lo encara. Después le recomendamos un curso y un formato, o le aconsejamos con franqueza esperar un tiempo.',
    readFirst: 'Si quiere conocernos un poco más, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cuenta nuestro método y <a class="ag-inline-link" href="/courses">All courses</a> lista cada curso con su temario.',
    note: 'Nuestros mentores trabajan desde la India y enseñan siempre en vivo, por internet y en inglés. En WhatsApp contestamos también en castellano.',
    formNote: 'Sin costo y sin compromiso. No pedimos tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Resolver problemas' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Minecraft con código' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/ai-classes-for-kids', label: 'IA para niños' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch' },
        { href: '/ai-projects-for-kids', label: 'Proyectos de IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'El más cercano primero no siempre es el camino más corto'
  },

  personalityCss: `
.ag-root.ag-prhu .ag-hero h1 { letter-spacing: -0.012em; max-width: 23ch; }
.ag-root.ag-prhu .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-prhu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-prhu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-prhu .ag-steps li { line-height: 1.58; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (tabulado Indicadores demográficos de Junín, Cuadros 1 and 3) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); INEI Compendio Estadístico Perú 2026 (cuadros 11.5 and 11.6) and Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; MINEDU CNEB competency 28, Edades normativas, DITE robotics paper; tzdata America/Lima. Data: MINCETUR, Inventario Nacional de Recursos Turísticos, ODC-By. Example code, distance approximation, lesson steps and stage table are our own.',
    localProject: 'What is the shortest Sunday outing from the Plaza de la Constitución? An original Python project on MINCETUR\'s Inventario Nacional de Recursos Turísticos (ODC-By; 111 Huancayo rows, LATITUD and LONGITUD headers swapped): Version 1 goes to the nearest remaining place each time (34.9 km, with a 14.4 km leg across the city); Version 2 tries all 24 orders with itertools.permutations and keeps the shortest (29.9 km). Then n! growth: 10 places give 3,628,800 orders. Lesson family: greedy nearest-next versus trying every order.',
    requiredMentions: ['Nearest-first trip: 34.9 km', 'Shortest trip: 29.9 km', 'Orders tried: 24', 'Inventario_recursos_turisticos.csv', '57,585', 'El Tambo tiene 14,295 niños censados', 'da a la ciudad de Huancayo 499 puntos', 'el 31,9 % de los hogares de Junín', 'El más cercano primero no siempre es el camino más corto'],
    sources: [
      { claim: 'Junín, Huancayo province and district populations, and children aged 6 to 11 by district, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/12/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Huancayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Households with a computer and with internet in Junín and Peru, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'Internet use among children aged 6 to 11, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025 scores for Huancayo, Peru and Lima.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'National tourist resource inventory with coordinates, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/inventario-nacional-de-recursos-tur%C3%ADsticos' },
      { claim: 'Robotics as a means, not the goal.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Road or walking distances between the four places: not in the data; the page gives straight-line figures from our own approximation and says so.',
      'A household-computer share for Huancayo city alone: INEI publishes the department only.',
      'A ratio of children to total population by district: the two columns come from different census tables (censada versus total), so the page warns against dividing them.',
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Robot kits or hardware: none.',
      'Any connection with MINEDU, the UGEL, MINCETUR or any Huancayo school: none.'
    ]
  }
};

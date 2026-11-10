// SHIP: market (city, es) | Chiclayo: programación para niños, en vivo y en inglés; el inglés pesa más que el equipo | compare like with like: same months before saying a number fell
'use strict';
// Clases de programación para niños en Chiclayo (ag- Spanish city door, Peru cluster row PE133, P6; alloc: cities, prch, #903906).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; owner 2026-11-08: timing flexible at any hour;
// USD only, through the template's data-price anchors. Formal "usted" throughout. Kids 6 to 12 only.
// Queries (KEYWORDS.md, autocomplete gl=pe): "clases de programación para niños chiclayo peru", "robótica para niños chiclayo
// peru", "robotica para niños.en.chiclayo", "curso de programación chiclayo peru", "colegio bilingüe chiclayo",
// "clases particulares chiclayo ingles"; Chiclayo ranks 8th of Peruvian places (29 suggestions).
// Spine: Chiclayo's children by district (INEI 2025); English is the harder hurdle here (EF EPI 2025: Chiclayo 474, the
// lowest Peruvian city EF lists) while home computers and internet in Lambayeque sit above the national share (INEI
// Compendio 2026); a first month planned at home instead of an academy run; robotics or coding; one original project on
// the Ministerio de Cultura free-first-Sunday museum visitor file for the six Lambayeque museums; clock conversions.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-chiclayo/,
// fetched 2026-11-10 with curl -sL -A "Mozilla/5.0"; national facts from pe/facts-school and pe/facts-market raw files):
//  - INEI, Censos Nacionales 2025, tabulados/14/poblacion/Indicadores_demograficos.xlsx (inei-ind-14.xlsx), Cuadro 1
//    (población total): "LAMBAYEQUE 1404633"; "PROVINCIA CHICLAYO 894229"; "DISTRITO CHICLAYO 270739"; "DISTRITO JOSÉ
//    LEONARDO ORTÍZ 168297"; "DISTRITO LA VICTORIA 106971"; "DISTRITO PIMENTEL 62015"; "DISTRITO LAMBAYEQUE 91102".
//    Cuadro 3 (población censada by age): "PROVINCIA CHICLAYO 866765 62965 83375 ..." where "De 6 a 11 años" = 83375.
//    Census reference day 15 September 2025. Never summed.
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (places.tsv): Chiclayo city 552,508 (2017 census).
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw) cityScore: lima 555 high, cusco 520, trujillo 519, arequipa 512
//    moderate, huancayo 499 low, piura 484 low, chiclayo 474 low, ica 467 low; Peru 519, rank 52 of 123.
//  - INEI Compendio Estadístico Perú 2026, tomo 1, cuadro 11.5: "Lambayeque 33,1 ... 33,1 36,1", "Total ... 34,1 33,9";
//    cuadro 11.6: "Lambayeque 24,7 ... 58,7 58,8", "Total ... 55,5 56,8".
//  - MINEDU DITE robotics paper (FACTS 52, 54): robotics since 1996 (Infoescuela); "en los años 2009 y 2010, el MINEDU dota
//    de Kits LEGO Wedo a casi el 100% de Instituciones Educativas de Gestión Pública de Educación Primaria".
//  - MINEDU Edades normativas (FACTS 13, 14); CNEB Tabla N.° 6 (FACTS 57); RM 501-2025-MINEDU (FACTS 21).
//  - Time: tzdata America/Lima UTC-5 (no DST since 1994), Asia/Kolkata UTC+5:30.
//  - Data: Ministerio de Cultura (MINCUL), "Visitantes a museos (Ley N° 30599)", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/visitantes-museos-ley-n%C2%B0-30599, licence "Open Data Commons Attribution
//    License" (ODC-By). Page text: "Proporciona información sobre el acceso gratuito para los ciudadanos peruanos a diversos
//    museos y salas de exposición administrados por el Ministerio de Cultura a nivel nacional, el primer domingo de cada mes,
//    según la Ley N° 30599." File "Base mua_13.csv", 395,766 bytes, sha256 68e5016d0f0375823032d22592430bc7a43e66d9b231d948c5b0466512a004c6,
//    3,153 rows, Latin-1, FECHA_CORTE 20260915, January 2022 to September 2026. Dictionary: VNINO "TOTAL DE VISITANTES NIÑOS".
//    Lambayeque rows: 342 for six museums (Tumbas Reales de Sipán and Brüning in Lambayeque district; Sicán in Ferreñafe;
//    Túcume; Huaca Rajada - Sipán, province Chiclayo, district Saña as written; Huaca Chotuna - Chornancap, San José).
//    June 2026 is 0 for all six; Sicán September 2024 has blank cells (int('') raises
//    "ValueError: invalid literal for int() with base 10: ''").
// Our own runs (scratchpad pe/c4/chiclayo, python3 -I on the downloaded file), exact output:
//  v1 prints: 2022 4711 / 2023 10051 / 2024 9037 / 2025 9863 / 2026 4907
//  v2 prints: 2022 3301 / 2023 5302 / 2024 5605 / 2025 6683 / 2026 4907 / 2026 vs 2025: 73 %
//  2025 per museum (total visitors, children, children share, our calc): Tumbas Reales 32078, 9863, 30.7; Túcume 12608,
//  3579, 28.4; Brüning 10726, 2969, 27.7; Sicán 5304, 1808, 34.1; Huaca Rajada 3941, 1397, 35.4; Chotuna 854, 284, 33.3.
// Lesson family: compare like with like. A year that is not finished, or a month that is zero for every museum, cannot be
// set against a full year; filter both years to the same months first, then compare.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'kids = {}',
  'with open("Base mua_13.csv", encoding="latin-1") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["nombmuseo"] == "Museo Tumbas Reales de Sipán":',
  '            year = row["anio"]',
  '            kids[year] = kids.get(year, 0) + int(row["vnino"])',
  '',
  'for year in sorted(kids):',
  '    print(year, kids[year])'
].join('\n');

const V2 = [
  'import csv',
  '',
  'SAME = [1, 2, 3, 4, 5, 7, 8, 9]   # 2026 so far, June left out (0)',
  '',
  'kids = {}',
  'with open("Base mua_13.csv", encoding="latin-1") as f:',
  '    for row in csv.DictReader(f, delimiter=";"):',
  '        if row["nombmuseo"] == "Museo Tumbas Reales de Sipán":',
  '            if int(row["idmes"]) in SAME:',
  '                year = row["anio"]',
  '                kids[year] = kids.get(year, 0) + int(row["vnino"])',
  '',
  'for year in sorted(kids):',
  '    print(year, kids[year])',
  'print("2026 vs 2025:", round(100 * kids["2026"] / kids["2025"]), "%")'
].join('\n');

const OUT1 = ['2022 4711', '2023 10051', '2024 9037', '2025 9863', '2026 4907'].join('\n');
const OUT2 = ['2022 3301', '2023 5302', '2024 5605', '2025 6683', '2026 4907', '2026 vs 2025: 73 %'].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Chiclayo: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-chiclayo',
  code: 'prch',
  accent: '#903906',
  accentRationale: 'Clases de programación para niños en Chiclayo: a burnt-clay brown #903906 allocated to this row in alloc.tsv, the colour of adobe pyramids on the Lambayeque plain; contrast 6.14 on the paper #FBF8F2 and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Chiclayo',
  title: 'Clases de programación para niños en Chiclayo, en inglés',
  description: 'Programación para niños de 6 a 12 años en Chiclayo: clases en vivo, en línea y en inglés, Scratch y Python, en grupo o con un mentor solo para su hijo, a toda hora.',
  ogDescription: 'Clases de programación en vivo y en inglés para niños chiclayanos: datos del INEI y del EF EPI 2025, robótica o programación, y un proyecto con las visitas gratuitas a los museos de Lambayeque.',
  twitterDescription: 'Programación para niños en Chiclayo, en vivo y en inglés, desde casa y a la hora que su familia elija.',
  pageName: 'Clases de programación para niños en Chiclayo',
  webPageDescription: 'Guía para familias de Chiclayo sobre clases de programación para niños de 6 a 12 años dictadas en vivo y en inglés: niños por distrito según los Censos Nacionales 2025, el inglés de la ciudad según el EF EPI 2025, computadoras e internet en Lambayeque según el Compendio Estadístico 2026, robótica o programación, y un proyecto de Python escrito por nosotros con las visitas del primer domingo a los museos de Lambayeque (Ministerio de Cultura, ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años en Chiclayo, dictadas solo en inglés: bloques, videojuegos, Python e inteligencia artificial explicada para niños, en grupo o individuales, a la hora que la familia elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Chiclayo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#chiclayo', label: 'Chiclayo' },
    { href: '#idioma', label: 'El inglés' },
    { href: '#robots', label: 'Robótica' },
    { href: '#museos', label: 'Proyecto' },
    { href: '#reloj', label: 'Horario' }
  ],
  eyebrow: 'Chiclayo &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Chiclayo',
  lede: 'En Chiclayo lo que más frena a una familia no suele ser la computadora sino el inglés, y preferimos decirlo de entrada. Aquí encontrará cuántos niños de primaria hay en la provincia, qué dicen los datos sobre el inglés y el equipo en casa, cómo organizar el primer mes desde su hogar, qué responder cuando su hijo pide robótica, y un proyecto de Python con las visitas gratuitas de los niños a los museos de Sipán, T&uacute;cume y Sicán.',
  secondaryCta: { href: '#museos', label: 'Ver el proyecto de los museos' },
  wa: 'Hola Modern Age Coders, escribimos desde Chiclayo. Queremos clases de programación en inglés para nuestro hijo o hija. ¿Podemos agendar la clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 alumnos en el mundo &middot; 4.9 de 5 en unas 547 reseñas de Google',
  spec: [
    ['Para quién', 'Niños de 6 a 12 años, de 1° a 6° de primaria'],
    ['Herramientas', 'Scratch, Python y motores de videojuegos'],
    ['Modalidad', 'Grupo de quince a veinte, o uno a uno'],
    ['Cuándo', 'Días y horas a elección de la familia'],
    ['Quién enseña', 'Mentores en la India, por video en vivo'],
    ['Primera sesión', 'Gratis, sin datos de pago']
  ],
  capsuleQ: 'Respuesta directa',
  capsule: 'Modern Age Coders da clases de programación a niños de Chiclayo de 6 a 12 años en vivo, en línea y en inglés: un mentor desde la India les enseña por videollamada, con frases claras y sin apuro. Los menores construyen juegos con bloques de Scratch y, alrededor de los 9 años, pasan a escribir Python. Puede elegir un grupo de niños de su misma edad o clases solo para su hijo, el día y a la hora que más le acomode a su casa. La sesión de prueba es gratuita.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: '¿Qué curso le conviene primero a un niño chiclayano?',
    lede: 'Uno amplio que sirve desde los 6 años, uno para el niño que solo piensa en videojuegos y uno corto para el que pregunta cómo funciona la inteligencia artificial.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CIX / 01', title: 'Programación con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años, con grupos separados por edad, de diez a doce meses. Scratch al principio, después juegos, apps sencillas y un primer contacto con la IA.' },
      { course: 'game-development-masterclass-for-kids', code: 'CIX / 02', title: 'Crear videojuegos', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'De 8 a 12 años, de seis a ocho meses, desde cero. Scratch, Roblox y Minecraft en un mismo recorrido, para el niño que quiere hacer juegos y no solo jugarlos.' },
      { course: 'ai-literacy-for-kids-course', code: 'CIX / 03', title: 'Entender la inteligencia artificial', alt: 'Imagen del curso de alfabetización en IA para niños', note: 'De 8 a 14 años, dieciséis semanas, sin programación previa. Cómo aprende una máquina, en qué se equivoca y por qué no hay que creerle todo.' }
    ]
  },

  sections: [
    {
      id: 'chiclayo',
      eyebrow: 'Chiclayo en números',
      h2: '¿Cuántos niños de primaria viven en la provincia de Chiclayo?',
      lede: 'El censo de 2025 contó 83,375 niños de 6 a 11 años en la provincia de Chiclayo. Viven repartidos entre el distrito de Chiclayo y distritos vecinos muy poblados, como José Leonardo Ortiz y La Victoria, que forman con él una sola ciudad.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Chiclayo y Lambayeque según el INEI (unidades distintas, que no se suman entre sí)', head: ['Ámbito', 'Personas', 'Qué cuenta el INEI'], rows: [
          ['Lambayeque, el departamento', '1,404,633', 'Total 2025, con omitidos'],
          ['Chiclayo, la provincia', '894,229', 'Total 2025, con omitidos'],
          ['Chiclayo, la provincia: chicos de 6 a 11', '83,375', 'Censados en 2025, por edad'],
          ['Chiclayo, el distrito', '270,739', 'Total 2025, con omitidos'],
          ['José Leonardo Ortiz, el distrito', '168,297', 'Total 2025, con omitidos'],
          ['La Victoria, el distrito', '106,971', 'Total 2025, con omitidos'],
          ['Chiclayo, la ciudad', '552,508', 'Censados en 2017']
        ] },
        { kind: 'source', html: 'De dónde salen: el INEI publicó para Lambayeque un tabulado de los Censos Nacionales 2025 (referencia: 15 de septiembre de 2025) cuyo primer cuadro da la población total, con las personas omitidas incluidas, y cuyo tercer cuadro reparte por edades a las personas censadas. La cifra de la ciudad viene del cuadro 1.9 del perfil que el INEI armó con el censo de 2017, porque a noviembre de 2026 no existía una versión 2025 para ciudades. Las filas se pisan unas con otras; jamás las sumamos.' },
        { kind: 'two', mt: true,
          leftH3: 'Una ciudad que cruza límites',
          left: [
            'Quien vive en Chiclayo sabe que la ciudad no termina donde termina el distrito. El distrito de Chiclayo tiene 270,739 habitantes; José Leonardo Ortiz, al norte, suma 168,297, y La Victoria, al sur, 106,971. Pimentel, en la costa, tiene 62,015. Son municipios distintos dentro de una misma mancha urbana.',
            'Esa geografía decide muchas tardes. Una academia en el centro significa, para una familia de José Leonardo Ortiz o de La Victoria, un viaje de ida, una hora de espera y otro de vuelta. Una clase por videollamada empieza en la sala de la casa.'
          ],
          rightH3: 'La edad de la primaria',
          right: [
            'Los 83,375 niños de 6 a 11 años que contó el censo en la provincia son, según las edades normativas del MINEDU, los que cursan de 1° a 6° de primaria. Es la etapa en que se aprende a seguir y a dar instrucciones ordenadas, la base de cualquier programa.',
            'El plan de estudios de primaria del Currículo Nacional no reserva horas para computación ni para programación. Lo digital aparece como una competencia transversal que cada docente incorpora dentro de otras áreas, y algunos colegios usan sus horas de libre disponibilidad para un taller.'
          ] }
      ]
    },
    {
      id: 'idioma',
      eyebrow: 'Clases en inglés',
      h2: '¿Un niño de Chiclayo puede seguir una clase de programación en inglés?',
      lede: 'Sí, si empieza por el nivel adecuado y tiene paciencia las primeras semanas. Sin excepción, cada sesión se dicta en inglés, en directo y a través de internet, y el dato que sigue explica por qué en Chiclayo nos tomamos en serio la sesión de prueba.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Ciudades peruanas en el EF EPI 2025, de mayor a menor puntaje', head: ['Ciudad', 'Puntaje', 'Banda de EF'], rows: [
          ['Lima', '555', 'Alta'],
          ['Cusco', '520', 'Moderada'],
          ['Trujillo', '519', 'Moderada'],
          ['Arequipa', '512', 'Moderada'],
          ['Huancayo', '499', 'Baja'],
          ['Piura', '484', 'Baja'],
          ['Chiclayo', '474', 'Baja'],
          ['Ica', '467', 'Baja']
        ] },
        { kind: 'source', html: 'Fuente: EF Education First, índice EF EPI 2025, sección de Perú, puntajes por ciudad tomados de los datos de la página en noviembre de 2026; Perú en conjunto obtiene 519 y ocupa el puesto 52 de 123 países. El índice mide a adultos que hicieron la prueba de EF, así que habla del entorno de la ciudad y no del nivel de cada niño. EF ubica la banda alta desde 550 y la moderada desde 500.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que el dato nos dice',
          left: [
            'Chiclayo aparece con 474 puntos, el segundo más bajo entre las ciudades peruanas del índice, solo por encima de Ica. En términos prácticos, es probable que su hijo no escuche mucho inglés fuera del colegio, y que las primeras clases le cuesten.',
            'No lo escondemos ni lo maquillamos. Si en la sesión de prueba el mentor ve que el niño no logra seguir casi nada, se lo diremos y le sugeriremos esperar, empezar con bloques o tomar clases individuales, donde el ritmo lo marca su hijo.'
          ],
          rightH3: 'Lo que sí ayuda desde la primera semana',
          right: [
            'La programación tiene una ventaja sobre otras materias: casi todo se ve en la pantalla. Cuando el mentor dice "move ten steps" y el gato de Scratch avanza, el niño entiende la frase sin traducirla. El inglés de la clase está pegado a lo que pasa frente a sus ojos.',
            'Para las familias de colegios bilingües de Chiclayo, la clase es simplemente una hora más en el idioma de sus cursos. Para las de colegios en castellano, es práctica oral real cada semana, sin agregar una academia de idiomas al calendario.'
          ] },
        { kind: 'p', mt: true, html: 'Si quiere ver con más detalle cómo combinamos idioma y código con los más chicos, la página <a class="ag-inline-link" href="/clases-de-ingles-y-programacion-ninos">clases de inglés y programación para niños</a> lo explica clase por clase.' }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'En casa',
      h2: '¿Alcanza con la computadora de la casa, o hay que ir a una academia?',
      lede: 'En Lambayeque, la computadora suele ser un obstáculo menor que el inglés: según el INEI, la parte de los hogares que tiene una, y la que tiene conexión, es mayor en el departamento que en el promedio del país. Si en su casa hay un equipo con teclado, la clase en vivo puede empezar ahí.',
      body: [
        { kind: 'two',
          leftH3: 'Las cifras del INEI para Lambayeque',
          left: [
            'El Compendio Estadístico Perú 2026 del INEI, basado en la ENAHO, registra que en 2025 el 36,1 % de los hogares de Lambayeque tenía al menos una computadora, frente al 33,9 % del total nacional. En internet, Lambayeque llega al 58,8 % de los hogares y el país al 56,8 %.',
            'Son cifras del departamento entero, que incluye zonas rurales; el INEI no publica el dato solo para la ciudad de Chiclayo, y nosotros no lo inventamos. Aun así, indican que en muchas casas chiclayanas el equipo ya existe.'
          ],
          rightH3: 'Si en casa no hay computadora',
          right: [
            'Entonces conviene esperar. Programar desde un celular es incómodo y frustra a cualquier niño; una tablet solo sirve un tiempo para los más pequeños con bloques. Lo que necesita es una máquina con teclado, cámara, micrófono y un internet que no se corte a media clase.',
            'Una computadora compartida por la familia es suficiente, siempre que en la hora de la clase sea del niño y esté en un lugar tranquilo.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Semana 1, la prueba.</strong> El mentor conoce a su hijo, revisa cámara y audio, y le pone un reto de cinco minutos. Usted recibe una recomendación de curso y formato.',
          '<strong>Semana 2, la rutina.</strong> Se fijan los días y la hora. Elija un rincón de la casa que se use siempre para la clase, con la computadora lista diez minutos antes.',
          '<strong>Semana 3, las palabras.</strong> El niño empieza un cuaderno con las palabras en inglés que aparecen en su código, cada una con un dibujito de lo que hace.',
          '<strong>Semana 4, la primera muestra.</strong> Su hijo le presenta a la familia su primer juego o animación y explica cómo funciona. Si lo puede explicar, lo aprendió.'
        ] },
        { kind: 'p', mt: true, html: 'Frente a una academia presencial, lo que gana su familia es tiempo: no hay traslados entre distritos, nadie espera en una puerta, y la clase sigue igual en vacaciones o si viajan a Pimentel un fin de semana. Lo que exige es disciplina en casa, y para eso sirve la rutina de arriba. Para comparar opciones con más calma, nuestra guía de <a class="ag-inline-link" href="/mejores-clases-de-programacion-para-ninos-peru">cómo elegir clases de programación para niños en Perú</a> propone preguntas concretas para cualquier academia, incluida la nuestra.' }
      ]
    },
    {
      id: 'robots',
      eyebrow: 'Robótica',
      h2: '¿Hay robótica para niños en Chiclayo, o conviene más la programación?',
      lede: 'En Chiclayo se busca mucho "robótica para niños", y la pregunta es buena. Nuestra respuesta: la programación primero, porque es lo que hace pensar a un robot. Kits y piezas no forman parte de nuestras clases: ni los vendemos ni los mandamos a casa.',
      body: [
        { kind: 'two',
          leftH3: 'Los robots ya estuvieron en los colegios',
          left: [
            'El Ministerio de Educación trabaja con robótica educativa desde 1996, con el proyecto Infoescuela, según su propio documento sobre el tema. En los años 2009 y 2010, ese mismo documento dice que el MINEDU entregó kits LEGO WeDo a casi todos los colegios públicos de primaria del país.',
            'El mismo texto aclara que el robot es una herramienta para aprender y no el fin de la clase. Lo que perdura de un taller de robótica no son las piezas, que se quedan en el aula, sino la lógica para darle órdenes.'
          ],
          rightH3: 'Por qué empezar por el código',
          right: [
            'Un robot educativo sigue un programa: avanza, repite, y si su sensor detecta algo, gira. Esas tres ideas, secuencia, bucle y condición, son lo primero que aprende un niño en Scratch, y valen igual para un personaje en pantalla que para un motor.',
            'Un niño que programa puede entender cualquier kit que le pongan delante más adelante. Uno que solo ha armado piezas siguiendo instrucciones, muchas veces no sabe todavía cómo cambiar lo que hace el robot.'
          ] },
        { kind: 'p', mt: true, html: 'Si a su hijo le apasiona construir, una buena secuencia es un año de programación y, después, a los 11 o 12 años, un taller de robótica. Llegará sabiendo escribir las instrucciones, y el robot dejará de ser una caja misteriosa.' }
      ]
    },
    {
      id: 'museos',
      tint: 'tint',
      eyebrow: 'Proyecto con datos de Lambayeque',
      h2: '¿Cuántos niños visitan gratis el Museo Tumbas Reales de Sipán?',
      lede: 'Por ley, el primer domingo de cada mes los peruanos entran gratis a los museos del Ministerio de Cultura, y el ministerio publica cuántas personas, y cuántos niños, entraron ese día a cada museo. Con ese archivo los chicos de 10 a 12 descubren por qué no conviene sacar conclusiones con dos números que no se pueden comparar.',
      body: [
        { kind: 'two',
          leftH3: 'Los datos',
          left: [
            'El conjunto "Visitantes a museos (Ley N° 30599)" es del Ministerio de Cultura y está en datosabiertos.gob.pe bajo la licencia ODC-By, es decir, Open Data Commons Attribution. Según su ficha, informa sobre el acceso gratuito de los ciudadanos peruanos a museos del ministerio "el primer domingo de cada mes, según la Ley N° 30599".',
            'Descargamos el archivo el 10 de noviembre de 2026: Base mua_13.csv, con fecha de corte del 15 de septiembre de 2026 y datos de enero de 2022 a septiembre de 2026. Hay una fila por museo y por mes, con columnas para adultos, estudiantes, niños, adultos mayores y otros visitantes.'
          ],
          rightH3: 'La pregunta para la clase',
          right: [
            'Lambayeque tiene seis museos en el archivo: Tumbas Reales de Sipán y Brüning, en el distrito de Lambayeque; Sicán, en Ferreñafe; T&uacute;cume; Huaca Rajada, en la provincia de Chiclayo; y Huaca Chotuna y Chornancap, en San José.',
            'Nos concentramos en el más visitado, Tumbas Reales de Sipán, y en la columna de niños. La pregunta es simple: ¿en 2026 fueron menos niños que en 2025? El primer programa suma los niños de cada año.'
          ] },
        { kind: 'code', label: 'Versión 1: sumar los niños de cada año', lang: 'Python', code: V1, note: 'Ejecutado por nosotros con Python 3. La salida aparece en el bloque siguiente.' },
        { kind: 'code', label: 'Salida de la versión 1', lang: 'Salida', code: OUT1, note: 'Salida exacta: 4,907 niños en 2026 contra 9,863 en 2025.' },
        { kind: 'p', mt: true, html: 'A primera vista, en 2026 fue la mitad de niños. Un titular diría "se desploma la visita infantil a Sipán". Pero hay dos trampas. La primera: el archivo termina en septiembre de 2026, así que 2026 tiene nueve meses y 2025 tiene doce. La segunda: en junio de 2026 los seis museos de Lambayeque figuran con cero visitantes, y el archivo no explica por qué. Comparar un año completo con uno a medias es como comparar un partido entero con su primer tiempo.' },
        { kind: 'code', label: 'Versión 2: comparar solo los mismos meses', lang: 'Python', code: V2, note: 'Misma pregunta, pero cada año suma solo enero a mayo y julio a septiembre: ocho primeros domingos en todos los casos.' },
        { kind: 'code', label: 'Salida de la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta, ejecutada por nosotros. Ahora 2026 queda en el 73 % de 2025, no en la mitad.' },
        { kind: 'p', mt: true, html: 'La conclusión honesta cambia: en los mismos ocho domingos, 2026 tuvo 4,907 niños y 2025 tuvo 6,683. Hubo menos, sí, alrededor de una cuarta parte menos, pero no la mitad. Y el programa no dice por qué; para eso hacen falta otras fuentes. La lección para un niño de 11 años es la misma que para un periodista: antes de decir que algo bajó, asegúrese de que está comparando lo mismo con lo mismo.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Primeros domingos de 2025 en los seis museos de Lambayeque (sumas y porcentajes hechos por nosotros)', head: ['Museo', 'Visitantes en 2025', 'Niños en 2025', 'Proporción de niños'], rows: [
          ['Museo Tumbas Reales de Sipán', '32,078', '9,863', '30,7 %'],
          ['Museo de Sitio T&uacute;cume', '12,608', '3,579', '28,4 %'],
          ['Museo Arqueológico Nacional Brüning', '10,726', '2,969', '27,7 %'],
          ['Museo Nacional de Sicán', '5,304', '1,808', '34,1 %'],
          ['Museo de Sitio Huaca Rajada, Sipán', '3,941', '1,397', '35,4 %'],
          ['Museo de Sitio Huaca Chotuna, Chornancap', '854', '284', '33,3 %']
        ] },
        { kind: 'source', html: 'Archivo: Base mua_13.csv, del Ministerio de Cultura, publicado en datosabiertos.gob.pe con licencia ODC-By y cortado al 15 de septiembre de 2026. Las sumas, las proporciones y la redacción son nuestras. El diccionario del archivo define la columna de niños como "TOTAL DE VISITANTES NIÑOS" sin indicar un rango de edad, así que no le ponemos uno. No sumamos los seis museos en un total regional.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Entre 6 y 8, sin pantalla.</strong> Contar los caramelos de una bolsa en una semana completa y los de otra bolsa en solo tres días. ¿Cuál "tenía más"? ¿Es justa la comparación?',
          '<strong>Entre 8 y 10, con Scratch.</strong> Guardar en una lista los niños de cada mes de 2025 en Sipán y hacer que un personaje diga el mes con más visitas.',
          '<strong>Entre 10 y 12, con Python.</strong> Correr la versión 1, explicar en una oración por qué engaña y escribir una versión 2 propia sin espiar la nuestra.',
          '<strong>Un reto para los que van más rápido.</strong> Cambiar el museo por el de Sicán y ver qué pasa en septiembre de 2024: el programa se detiene con <code>ValueError: invalid literal for int() with base 10: \'\'</code>, porque esa fila tiene las celdas vacías. ¿Cómo debería tratar el programa una celda vacía?'
        ] }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario',
      h2: '¿Cuál es la diferencia de hora entre Chiclayo y los mentores?',
      lede: 'Diez horas y media, siempre. Chiclayo usa la hora de Perú y la India no cambia su reloj, así que cualquier hora que elija se mantiene todo el año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cómo se traduce una hora de Chiclayo al reloj del mentor (ejemplos, no un calendario)', head: ['En Chiclayo, hora de Perú', 'Para el mentor, hora de la India', 'Observación'], rows: [
          ['6:30 a. m.', '5:00 p. m.', 'Antes del colegio, para madrugadores'],
          ['8:00 a. m.', '6:30 p. m.', 'Mañana libre del turno tarde'],
          ['10:30 a. m.', '9:00 p. m.', 'Vacaciones o fines de semana'],
          ['1:30 p. m.', 'medianoche', 'En la India ya es el día siguiente'],
          ['4:00 p. m.', '2:30 a. m.', 'En la India ya es el día siguiente'],
          ['6:00 p. m.', '4:30 a. m.', 'En la India ya es el día siguiente']
        ] },
        { kind: 'source', html: 'Base del cálculo: la zona America/Lima de tzdata fija para todo el Perú UTC menos 5 horas, sin horario de verano desde 1994, y el INACAL difunde la hora oficial; la zona Asia/Kolkata fija UTC más 5 horas y 30 minutos. La resta da diez horas y media, la misma en cualquier mes.' },
        { kind: 'p', mt: true, html: 'Al reservar, usted marca la hora en el reloj de Chiclayo y el mentor la recibe convertida. El verano escolar, de enero a marzo, es buena época para arrancar sin la presión de las tareas: la RM 501-2025-MINEDU fijó el año escolar 2026 entre el 16 de marzo y el 18 de diciembre, y la misma hora puede mantenerse cuando vuelven las clases del colegio.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se nota que un niño avanza en programación?',
    lede: 'Usamos cinco niveles propios. No son grados del colegio: son cosas que su hijo hace con sus manos y explica con sus palabras.',
    table: { caption: 'Cinco niveles de programación para primaria, definidos por nosotros', head: ['Nivel', 'Suele llegar a los', 'Lo que su hijo demuestra'], rows: [
      ['1. Dar órdenes', '6 o 7 años', 'arma una secuencia de bloques para que un personaje cruce la pantalla'],
      ['2. Ahorrar bloques', '7 a 9 años', 'reemplaza pasos repetidos por un bucle y lo cuenta en inglés sencillo'],
      ['3. Reaccionar', '8 a 10 años', 'hace que su juego responda a teclas, choques y puntajes'],
      ['4. Teclear', '9 a 11 años', 'escribe en Python un programa con listas o diccionarios y anticipa la salida'],
      ['5. Comparar con cuidado', '10 a 12 años', 'usa datos reales, como los del museo de Sipán, y comprueba que compara lo mismo con lo mismo']
    ] },
    left: { h3: 'Para la familia', ps: [
      'El nivel 5 es el del proyecto de los museos. No pide matemática avanzada; pide no creerle al primer número que sale.',
      'Le contamos cómo va mostrando lo que su hijo hizo y puede explicar; las horas conectado no prueban nada.'
    ] },
    right: { h3: 'Una pregunta para la cena', ps: [
      '¿Qué hiciste hoy en la clase y qué pasó cuando lo ejecutaste? Que la respuesta sea en inglés, si se anima.',
      '¿Hubo algún error? Contar un error y cómo se arregló vale más que contar un acierto.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: 'Otros nueve cursos para niños de Chiclayo',
    lede: 'Agrupados de los más chicos a los más grandes. En todos hay un mentor en vivo que habla en inglés, y en todos se puede elegir grupo o clases individuales.',
    bands: [
      { num: 'I', h3: 'Para los más chicos', sub: 'De 5 a 10 años', courses: [
        { code: 'CIX / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch de cero a juegos', blurb: 'Para 6 a 12 años: tres o cuatro meses del primer bloque a un juego terminado.' },
        { code: 'CIX / A / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Lógica antes del código', blurb: 'Para 6 a 9 años, en dos grupos por edad: secuencias, patrones y acertijos.' },
        { code: 'CIX / A / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental con sentido', blurb: 'Para 5 a 10 años: números entendidos, no trucos memorizados.' }
      ] },
      { num: 'II', h3: 'Juegos que se programan', sub: 'De 7 a 14 años', courses: [
        { code: 'CIX / B / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Para 7 a 12 años: dieciséis semanas para que el mundo de bloques trabaje solo.' },
        { code: 'CIX / B / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Programar en Roblox', blurb: 'Para 8 a 14 años: Luau dentro de Roblox Studio y un juego con sus propias reglas.' },
        { code: 'CIX / B / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Juegos con ayuda de la IA', blurb: 'Para 8 a 12 años: doce semanas de Scratch con una IA de asistente, revisando cada paso.' }
      ] },
      { num: 'III', h3: 'Código escrito', sub: 'De 7 a 12 años', courses: [
        { code: 'CIX / C / 01', slug: 'python-ai-kids-masterclass', title: 'Python para niños', blurb: 'Para 9 a 12 años: el primer lenguaje tecleado, con dibujos, juegos y datos.' },
        { code: 'CIX / C / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Para 7 a 12 años: partir un problema grande en pasos pequeños.' },
        { code: 'CIX / C / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Rumbo a un hackatón', blurb: 'Para 8 a 12 años: doce semanas para idear, construir y presentar un proyecto.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo se organizan las clases desde Chiclayo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes del turno tarde, o en las semanas de vacaciones.' },
      { time: 'Media tarde', l: 'Cuando el niño ya almorzó y terminó lo del colegio.' },
      { time: 'Uno a uno', l: 'Un horario a medida pactado con el mentor.' }
    ],
    cells: [
      { h3: 'Un mismo mentor', p: 'No cambia a mitad de curso; conoce los tropiezos y los logros de su hijo.' },
      { h3: 'Inglés sin prisa', p: 'Oraciones cortas, todo mostrado en pantalla, tiempo para contestar.' },
      { h3: 'Él maneja el teclado', p: 'El niño escribe cada línea; el mentor pregunta en lugar de dictar.' },
      { h3: 'Compañeros de su edad', p: 'Los grupos se arman por edad, nunca mezclando 1° con 6°.' },
      { h3: 'Familia al tanto', p: 'Un aviso breve con lo trabajado y lo que sigue.' },
      { h3: 'Dos formatos', p: 'Grupo de quince a veinte, o su hijo solo con el mentor.' }
    ]
  },

  projectsH2: '¿Qué llegan a construir los alumnos que siguen?',
  projectsLede: 'Con los años, los que empiezan en primaria publican herramientas propias. Aquí van algunas; muchas más están en <a class="ag-inline-link" href="/student-labs">Student labs</a> (página en inglés).',
  reviewsLede: 'Reseñas de Google de padres y alumnos, sin editar y en inglés.',

  fees: {
    h2: 'Cuánto cuesta para una familia de Chiclayo',
    lede: 'La cuota es mensual y se fija en moneda de Estados Unidos. Se carga a su tarjeta en esa moneda, y el cambio a la suya lo calcula el emisor de la tarjeta según su propia tasa del día; de ahí que el cargo final varíe levemente.',
    free: ['Sesión de prueba en vivo', 'Un desafío corto para conocer a su hijo', 'Sin tarjeta'],
    group: ['Quince a veinte niños de edad cercana', 'Mentor fijo todo el curso', 'Dos sesiones por semana', 'Pago mensual, sin contrato largo'],
    one: ['Solo su hijo y el mentor', 'Ritmo y proyectos a medida', 'Horario que usted decide']
  },

  faq: {
    eyebrow: 'Preguntas de familias de Chiclayo',
    h2: 'Programación para niños en Chiclayo: preguntas y respuestas',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las dictamos únicamente en inglés, en vivo y por internet, y no hay grupos en castellano. Para muchas familias eso es el atractivo: su hijo programa y, en la misma hora, oye y usa el inglés con un motivo real. El mentor habla pausado y repite con palabras más simples. El EF EPI 2025 coloca el inglés de Lima en la banda alta; Chiclayo aparece en la baja, por eso revisamos el idioma en la sesión de prueba.' },
      { q: '¿Dónde hay clases de programación para niños en Chiclayo?', a: 'Las nuestras no tienen local: son en vivo por videollamada, así que un niño del cercado, de José Leonardo Ortiz, de La Victoria o de Pimentel se conecta igual desde su casa, con el mismo mentor y a la hora acordada.' },
      { q: '¿Tienen robótica para niños en Chiclayo?', a: 'Enseñamos la programación que controla a un robot, pero no trabajamos con kits ni piezas, y no los vendemos. Según el propio MINEDU, la robótica en el colegio es un medio para aprender. Los bucles y condiciones que domine aquí son los mismos que pedirá cualquier taller de robótica después.' },
      { q: '¿Y si mi hijo casi no entiende inglés?', a: 'Lo veremos en la sesión de prueba. Muchos niños se adaptan en dos o tres semanas, sobre todo si empiezan con bloques. Cuando el idioma pesa demasiado, lo advertimos con honestidad: a veces conviene esperar unos meses, y otras veces basta pasar al formato uno a uno, con un mentor que va al paso del niño.' },
      { q: '¿Sirve para un niño de colegio bilingüe?', a: 'Sí, y suele avanzar más rápido en las primeras semanas porque el idioma no le es nuevo. Para él la clase es otra hora en inglés, esta vez creando juegos y programas.' },
      { q: '¿Qué edad debe tener?', a: 'Desde los 6 años, la edad de 1° de primaria según las edades normativas del MINEDU. Con menos de 9 años se trabaja con bloques; desde los 9 casi todos ya escriben Python.' },
      { q: '¿En qué horario se puede tomar la clase?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. El reloj del mentor va diez horas y media adelante del de Chiclayo, así que las 8:00 a. m. de Chiclayo son las 6:30 p. m. para él.' },
      { q: '¿Qué equipo necesita?', a: 'Una computadora o laptop con teclado, cámara y micrófono, audífonos y un internet estable. El INEI registra que en 2025 el 36,1 % de los hogares de Lambayeque tenía computadora. Un celular no basta para programar.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, una vez al mes, en dólares estadounidenses. Su banco hace la conversión. La sesión de prueba no pide datos de pago.' },
      { q: '¿Las clases tienen validez oficial?', a: 'No. No tenemos relación con el MINEDU, la UGEL, el Ministerio de Cultura ni con ningún colegio de Chiclayo, y no damos notas escolares. Al completar un curso, su hijo recibe solo nuestro certificado de finalización.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras páginas para familias de Chiclayo',
    lede: 'Para seguir informándose antes de decidir.',
    items: [
      { href: '/online-coding-and-ai-classes-lambayeque-region-peru', label: 'Lambayeque region: coding and AI classes', p: 'Toda la región, de los niños a los adultos (en inglés).' },
      { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación para niños', p: 'Cómo avanzan juntos el idioma y el código.' },
      { href: '/mejores-clases-de-programacion-para-ninos-peru', label: 'Elegir clases de programación', p: 'Preguntas para comparar cualquier academia.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Inteligencia artificial explicada para primaria (en inglés).' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Proyectos de IA que un niño puede hacer sin crear cuentas (en inglés).' },
      { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds', p: 'Qué puede programar un niño de ocho años (en inglés).' }
    ]
  },

  start: {
    h2: 'Agende la sesión de prueba desde Chiclayo',
    lede: 'En la sesión de prueba el mentor saluda a su hijo, le hace un par de preguntas sencillas en inglés y le propone un reto pequeño en la pantalla. Usted verá cómo responde, y al final le diremos qué curso y qué formato le convienen, o si conviene esperar.',
    readFirst: 'Dos lecturas en inglés antes de agendar: <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre el método, y <a class="ag-inline-link" href="/courses">All courses</a>, con cada temario.',
    note: 'Todas las sesiones son en vivo, por internet y en inglés, con mentores que viven en la India. Por WhatsApp atendemos también en castellano.',
    formNote: 'Gratis, sin datos de pago, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos destacados', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Crear videojuegos' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'Entender la IA' },
        { href: '/courses', label: 'Catálogo completo' }
      ] },
      { h4: 'Para leer', links: [
        { href: '/ai-tools-age-guide', label: 'IA según la edad' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch para niños' },
        { href: '/student-labs', label: 'Proyectos de alumnos' },
        { href: '/how-we-teach', label: 'Nuestro método' }
      ] }
    ],
    bottomRight: 'Antes de decir que bajó, compare lo mismo con lo mismo'
  },

  personalityCss: `
.ag-root.ag-prch .ag-hero h1 { letter-spacing: -0.013em; max-width: 22ch; }
.ag-root.ag-prch .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-prch .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-prch .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-prch .ag-code-head b { letter-spacing: 0.03em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (tabulado Indicadores demográficos de Lambayeque, Cuadros 1 and 3) and Perfil Sociodemográfico 2017 (Cuadro N° 1.9); INEI Compendio Estadístico Perú 2026 (cuadros 11.5 and 11.6, ENAHO 2025); EF EPI 2025 Peru page; MINEDU Edades normativas, CNEB, DITE robotics paper, RM 501-2025-MINEDU; tzdata America/Lima. Data: Ministerio de Cultura, Visitantes a museos (Ley N° 30599), ODC-By. Example code, the four-week plan and the level table are our own.',
    localProject: 'Did half as many children visit the Museo Tumbas Reales de Sipán on free first Sundays in 2026? An original Python project on the Ministerio de Cultura file Visitantes a museos (Ley N° 30599), ODC-By: Version 1 sums the VNINO column by year (2025: 9,863; 2026: 4,907, but 2026 stops in September and June is zero for all six Lambayeque museums); Version 2 keeps the same eight months in every year (2025: 6,683; 2026: 4,907; 73 %). Lesson family: compare like with like.',
    requiredMentions: ['Base mua_13.csv', '2026 vs 2025: 73 %', '2025 6683', '2026 4907', '83,375', '168,297', 'Chiclayo aparece con 474 puntos', 'el 36,1 % de los hogares de Lambayeque', 'Antes de decir que bajó, compare lo mismo con lo mismo'],
    sources: [
      { claim: 'Lambayeque, Chiclayo province and district populations, and children aged 6 to 11 in the province, 2025.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/14/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Chiclayo city population, 2017 census.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'Households with a computer and with internet in Lambayeque and Peru, 2025.', url: 'https://cdn.www.gob.pe/uploads/document/file/10884842/8776138-tomo-1-peru-compendio-estadistico-2026%282%29.pdf' },
      { claim: 'EF EPI 2025 city scores for Peru.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Free first-Sunday museum visitors by museum and month, ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/visitantes-museos-ley-n%C2%B0-30599' },
      { claim: 'Robotics since 1996; WeDo kits 2009 to 2010; robotics as a means.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Normative ages by grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Why June 2026 is zero at all six Lambayeque museums: the file does not say, so the page gives no reason.',
      'An age range for the VNINO column: the dictionary gives none, so the page prints none.',
      'A regional total made by adding the six museums, or a Chiclayo total made by adding districts: never summed.',
      'A household-computer share for Chiclayo city alone: INEI publishes the department only.',
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Robot kits or hardware: none.',
      'Any connection with MINEDU, the UGEL, the Ministerio de Cultura or any Chiclayo school: none.'
    ]
  }
};

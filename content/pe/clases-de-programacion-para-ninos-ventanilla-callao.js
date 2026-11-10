// SHIP: district kids door (ES) | Ventanilla, Callao: el distrito con más niños de mis filas, datos móviles | a search loop that says "not found" too early, fixed with a flag
'use strict';
// Clases de programación para niños en Ventanilla (ag- Spanish-language district door, Peru cluster row PE232, hubGroup lima;
// alloc: prve, #3D650E). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Ventanilla parent (Provincia Constitucional del Callao, not Lima) who types "clases de programación para niños
// ventanilla". Spine: Ventanilla belongs to Callao, is its second district by population and has tens of thousands of
// children; how its homes connect (household census: mobile data first); what the municipality already offers (school
// year, itinerant library in Pachacútec, free live courses for adults including AI); an original search-loop lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-ventanilla-callao/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Callao (tabulados/07/poblacion):
//    Cuadro N° 1 "DISTRITO VENTANILLA 355722" total, censada 345962, omitida 9760; "PROV. CONSTITUCIONAL DEL CALLAO 1094209";
//    DISTRITO CALLAO 487920. Rank 2 of 7 Callao districts (our ordering).
//    Cuadro N° 3 "DISTRITO VENTANILLA 345962 25851 38109 40514 68962 79570 56612 36344"; all URBANA. Callao province
//    6 a 11 "96501", 12 a 17 "105284".
//    Cuadro N° 2 single ages: 6 años 5439, 7 años 5995, 8 años 6408, 9 años 6732, 10 años 6774, 11 años 6761, 12 años 7077.
//    Lima neighbours (tabulados/27): SANTA ROSA 37680, PUENTE PIEDRA 398960, SAN MARTÍN DE PORRES 764012.
//  INEI, Censos Nacionales 2025, Equipamiento_del_hogar.xlsx (tabulados/07/hogar), DISTRITO VENTANILLA, Hogares 96623:
//    Computadora 14133, Laptop 20514, Tableta 7047; celular 95915, internet fijo 41390, internet móvil 65010.
//    Prov. Constitucional del Callao, Hogares 295824: computadora 23.2 %, laptop 33.2 %, internet fijo 54.8 %, móvil 74.0 %.
//  Municipalidad Distrital de Ventanilla, gob.pe notes:
//    16 March 2026 (n-1401097): "miles de estudiantes de los colegios públicos de Ventanilla regresaron hoy a las aulas para
//      dar inicio al año escolar 2026".
//    13 May 2024 (n-954623): "'Biblioteca y teatro itinerantes'"; event at an I.E.I. in "Pachacútec" (school name left out).
//    27 September 2026 (n-1454695): "Las clases son en vivo y la certificación es opcional"; "Podrás capacitarte en
//      educación, administración, gestión pública, ofimática, Power BI, primeros auxilios, inteligencia artificial".
//    13 July 2022 (n-649191): "Parque Zonal Cultural Bicentenario"; "con un área de más de 116 mil metros cuadrados".
//    Officials' names and the investment figure in soles left out.
//  EF EPI 2025 Peru page: region "callao" score 518, "moderate"; Lima city 555 high.
//  National: MINEDU Edades normativas; CNEB; tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 38109 / 345962 = 11.0 %, 40514 / 345962 = 11.7 %;
//    internet móvil 65010 / 96623 = 67.3 %, fijo 42.8 %, laptop 21.2 %, computadora 14.6 %, tableta 7.3 %, celular 99.3 %.
// Our own example, run with python3 -I (ventanilla.py in the src-pages folder), exact output:
//    Version 1 / Not found / Not found / Found Rosa / Not found / Version 2 / Found Rosa
// Lesson family: a search loop that reports "not found" inside the loop (once per item); a boolean flag checked after the
//    loop.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "team = ['Ana', 'Luis', 'Rosa', 'Teo']",
  "wanted = 'Rosa'",
  '',
  "print('Version 1')",
  'for name in team:',
  '    if name == wanted:',
  "        print('Found', wanted)",
  '    else:',
  "        print('Not found')",
  '',
  "print('Version 2')",
  'found = False',
  'for name in team:',
  '    if name == wanted:',
  '        found = True',
  'if found:',
  "    print('Found', wanted)",
  'else:',
  "    print('Not found')"
].join('\n');

const OUT = [
  'Version 1',
  'Not found',
  'Not found',
  'Found Rosa',
  'Not found',
  'Version 2',
  'Found Rosa'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Ventanilla (Callao)' },
  slug: 'clases-de-programacion-para-ninos-ventanilla-callao',
  code: 'prve',
  accent: '#3D650E',
  accentRationale: 'Clases de programación para niños en Ventanilla: a grass green #3D650E for the large parks and open sandy ground of the northern Callao district, warmer than the sea-greens of the other Callao pages; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Ventanilla',
  title: 'Clases de programación para niños en Ventanilla, Callao',
  description: 'Programación para niños de Ventanilla, en el Callao: clases en vivo y en inglés desde casa para chicos de 6 a 12 años, en grupo o a solas, al horario que elija.',
  ogDescription: 'Ventanilla tiene decenas de miles de niños y muchas casas conectadas por datos. Qué necesita su hijo para programar y un error de búsqueda que enseñamos en Python.',
  twitterDescription: 'Clases de programación para niños de Ventanilla (Callao), en vivo y en inglés, sin salir de casa.',
  pageName: 'Clases de programación para niños en Ventanilla',
  webPageDescription: 'Guía para familias de Ventanilla, en la Provincia Constitucional del Callao, que buscan clases de programación para niños de 6 a 12 años: cuántos niños de cada edad registraron los Censos Nacionales 2025, cómo se conectan los hogares del distrito, qué ofrece ya la municipalidad y una lección de Python escrita por nosotros.',
  courseDescription: 'Clases en directo por videollamada de programación para niños de 6 a 12 años de Ventanilla (Callao), dictadas solo en inglés: bloques, Python, juegos y creación con IA, en clase grupal o individual, durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Ventanilla',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#callao', label: 'Callao' },
    { href: '#edades', label: 'Edades' },
    { href: '#datos', label: 'Conexión' },
    { href: '#busqueda', label: 'Ejemplo' },
    { href: '#hora-peru', label: 'Hora' }
  ],
  eyebrow: 'Callao &middot; Ventanilla &middot; Niños de 6 a 12',
  h1: 'Clases de programación para niños en Ventanilla, en inglés',
  lede: 'Ventanilla es el distrito del norte del Callao, de Pachacútec a la Costa Azul, con más niños en edad escolar que casi cualquier otro de la provincia. Esta página es para las familias que quieren que su hijo aprenda a programar durante el año sin cruzar la ciudad: cómo funciona una sesión en directo y en inglés, lo que el censo de 2025 registró sobre el distrito y sus hogares, y un ejercicio de Python completo.',
  secondaryCta: { href: '#datos', label: '¿Sirven los datos móviles?' },
  wa: 'Hola Modern Age Coders, vivimos en Ventanilla (Callao) y buscamos clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; de Ventanilla a la India, en una videollamada',
  spec: [
    ['Provincia', 'Callao, distrito de Ventanilla'],
    ['Edades', 'De 6 a 12 años; adolescentes con cursos propios'],
    ['Idioma', 'Inglés, con un mentor paciente'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Equipo', 'Laptop o PC; el celular no alcanza'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'Respuesta directa',
  capsule: 'Sí: en Ventanilla, Callao, un niño de 6 a 12 años puede aprender a programar desde casa con Modern Age Coders. Las clases son en vivo y en inglés, a través de la pantalla, de enero a diciembre: un mentor que vive en la India enseña bloques, Python, juegos y a crear con IA sin copiar, al ritmo de cada chico. Se necesita una laptop o PC con conexión estable. La familia elige un grupo o sesiones individuales, a la hora que le acomode, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Primeros cursos',
    h2: 'Tres cursos con los que suelen empezar en Ventanilla',
    lede: 'Uno sin teclado para los más chicos, uno con código escrito y uno para crear con ayuda de la IA sin dejar de pensar.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PRVE / 01', title: 'Bloques para empezar', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para primaria baja. El chico arma programas encajando piezas de colores y aprende a decir en inglés lo que hace cada una: move, turn, repeat.' },
      { course: 'python-ai-kids-masterclass', code: 'PRVE / 02', title: 'Python, primera parte', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos de 4° a 6° grado. Listas, bucles y decisiones, como la búsqueda que mostramos más abajo, más algún experimento sencillo con IA.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', code: 'PRVE / 03', title: 'Crear con IA, pensando', alt: 'Imagen del curso de vibe coding para niños', note: 'De 8 a 12 años. Juegos en Scratch con ayuda de la IA, revisando cada paso para entender qué hizo la herramienta y corregirla cuando se equivoca.' }
    ]
  },

  sections: [
    {
      id: 'callao',
      eyebrow: 'Ventanilla, Callao',
      h2: '¿Hay clases de programación para niños en Ventanilla?',
      lede: 'Sí, y su hijo puede tomarlas sin salir de Ventanilla. Nuestras sesiones son en directo por videollamada, con un mentor que enseña desde la India y habla en inglés todo el tiempo. En casa basta con una computadora y una señal capaz de sostener sesenta minutos de videollamada.',
      body: [
        { kind: 'p', html: 'Ventanilla no es parte de la provincia de Lima: pertenece a la Provincia Constitucional del Callao, que el INEI publica por separado. En los Censos Nacionales 2025 el Callao suma 1,094,209 habitantes, y Ventanilla, con 355,722, es su segundo distrito más poblado después del distrito de Callao, que tiene 487,920 (orden nuestro a partir del Cuadro N.° 1). Hacia el norte y el este limita con distritos de Lima como Santa Rosa, Puente Piedra y San Martín de Porres, y dentro de su territorio queda el distrito de Mi Perú.' },
        { kind: 'p', html: 'Para las familias de Ventanilla, casi cualquier academia de programación queda en otro distrito. Ir y volver varias veces por semana con un niño, después del colegio, consume tardes enteras. Como no hemos cronometrado esos viajes, no publicamos minutos; nos quedamos con lo evidente: con la sesión en casa, ese trayecto desaparece.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Una pantalla, no un bus', p: 'Su hijo se conecta desde la mesa de la casa. Si el día se complicó, la sesión igual empieza a la hora acordada.' },
          { h3: 'Un mentor de verdad', p: 'No es un video grabado. El mentor ve lo que su hijo programa, le pregunta y espera a que piense la respuesta.' },
          { h3: 'Todo en inglés', p: 'Desde <code>for</code> hasta el saludo inicial, la sesión ocurre en inglés. El chico practica el idioma mientras construye algo suyo.' }
        ] },
        { kind: 'p', mt: true, html: 'Si quiere una visión de toda la provincia, tenemos una página en inglés sobre el Callao: <a class="ag-inline-link" href="/online-coding-and-ai-classes-callao-region-peru">online coding and AI classes in the Callao region</a>, con datos de sus siete distritos. Y si su hijo ya juega Roblox, <a class="ag-inline-link" href="/programacion-roblox-para-ninos-en-ingles">programación en Roblox para niños en inglés</a> explica cómo convertir esa afición en código.' }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Ventanilla en el censo',
      h2: '¿Cuántos niños de cada edad viven en Ventanilla?',
      lede: 'Entre 5,400 y 7,100 chicos por edad cumplida, de los 6 a los 12. El censo de 2025 encontró en Ventanilla 38,109 personas de 6 a 11 años y 40,514 de 12 a 17, que equivalen al 11.0 % y al 11.7 % de los censados del distrito (porcentajes nuestros).',
      body: [
        { kind: 'table', numCols: [1], caption: 'Niñas y niños censados en Ventanilla por año de edad, Censos Nacionales 2025, y su grado', head: ['Edad', 'Censados en Ventanilla', 'Grado según la edad normativa', 'Por dónde empezaríamos'], rows: [
          ['6 años', '5,439', '1° de primaria', 'Secuencias con bloques y personajes'],
          ['7 años', '5,995', '2° de primaria', 'Repeticiones y eventos en Scratch'],
          ['8 años', '6,408', '3° de primaria', 'Un juego en Scratch con IA como ayudante'],
          ['9 años', '6,732', '4° de primaria', 'Primeras listas en Python'],
          ['10 años', '6,774', '5° de primaria', 'Buscar dentro de una lista, como el ejemplo'],
          ['11 años', '6,761', '6° de primaria', 'Un proyecto propio con datos'],
          ['12 años', '7,077', '1° de secundaria', 'Python para adolescentes']
        ] },
        { kind: 'source', html: 'Cifras del INEI: Censos Nacionales 2025 (referidos al 15 de septiembre de 2025), tabulado de indicadores demográficos de la Provincia Constitucional del Callao, Cuadro N.° 2 por edades simples, distrito de Ventanilla. El grado sale de las edades normativas del MINEDU con corte al 31 de marzo; la última columna la proponemos nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Un distrito con muchos chicos',
          left: [
            'Solo en Ventanilla hay más niños censados de 6 a 11 años que habitantes en muchos distritos enteros de Lima. En toda la provincia del Callao, el mismo censo cuenta 96,501 niños de esa edad y 105,284 adolescentes de 12 a 17.',
            'Al comienzo del año escolar 2026, la Municipalidad de Ventanilla informó que "miles de estudiantes de los colegios públicos de Ventanilla regresaron hoy a las aulas para dar inicio al año escolar 2026", el 16 de marzo de 2026.'
          ],
          rightH3: 'Los que ya están en secundaria',
          right: [
            'Para nosotros, desde 1° de secundaria son adolescentes. Los 40,514 de Ventanilla pueden empezar directamente con Python escrito, desarrollo web o seguridad informática para principiantes.',
            'El Currículo Nacional no reserva horas de computación en secundaria, así que quien quiere programar suele hacerlo fuera del colegio. Nuestras sesiones acompañan al colegio y no dan notas.'
          ] }
      ]
    },
    {
      id: 'datos',
      eyebrow: 'Equipo y conexión',
      h2: '¿Se puede tomar una clase de programación con datos móviles?',
      lede: 'Sí, mientras la señal no se caiga. El censo de 2025 muestra que en Ventanilla dos de cada tres hogares usan internet móvil y algo más de cuatro de cada diez tienen línea fija. Pero los datos no reemplazan a la computadora: sin teclado no se programa.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Hogares de Ventanilla con cada equipo o servicio, frente al total del Callao, Censos Nacionales 2025 (porcentajes nuestros)', head: ['Equipo o servicio', 'Ventanilla (96,623 hogares)', 'Provincia del Callao'], rows: [
          ['Teléfono celular', '95,915 (99.3 %)', '99.3 %'],
          ['Internet móvil', '65,010 (67.3 %)', '74.0 %'],
          ['Internet fijo', '41,390 (42.8 %)', '54.8 %'],
          ['Laptop', '20,514 (21.2 %)', '33.2 %'],
          ['Computadora de escritorio', '14,133 (14.6 %)', '23.2 %'],
          ['Tableta', '7,047 (7.3 %)', '14.3 %']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, tabulado "Equipamiento del hogar" de la Provincia Constitucional del Callao: Cuadro N.° 1 (equipos) y Cuadro N.° 2 (servicios), fila "Hogares" del distrito de Ventanilla y de la provincia. Son hogares en viviendas particulares con ocupantes presentes. Las filas se cruzan entre sí y no deben sumarse; los porcentajes son cálculo nuestro.' },
        { kind: 'two', mt: true,
          leftH3: 'Antes de inscribirse, una prueba',
          left: [
            'Ensaye con una videollamada de treinta minutos, en el mismo sitio y a la misma hora en que su hijo tendría la sesión. Si la imagen se congela pero el audio sigue, la sesión funciona; si se corta todo, busque otro lugar o otro horario.',
            'Unos audífonos con micrófono hacen mucha diferencia: el niño entiende el inglés del mentor con claridad y el mentor lo escucha aunque haya ruido en casa.'
          ],
          rightH3: 'Lo que no se puede evitar',
          right: [
            'Programar exige una laptop o una PC con teclado. El teléfono, presente en el 99.3 % de los hogares del distrito, es útil para hablar con nosotros por WhatsApp; para teclear código una hora seguida, no.',
            'Una laptop compartida entre hermanos funciona: solo hay que reservarla esa hora. Si en casa no hay ninguna, se lo diremos con claridad en la sesión gratis, antes de cobrar nada.'
          ] },
        { kind: 'p', mt: true, html: 'Compartimos estas cifras porque responden una pregunta práctica que nos hacen las familias del Callao: si una clase virtual es posible en su casa. No las usamos para describir a nadie. Cada hogar es distinto, y por eso la sesión de prueba empieza revisando su propio equipo.' }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'Lo que ya hay en Ventanilla',
      h2: '¿Qué ofrece la Municipalidad de Ventanilla a niños y jóvenes?',
      lede: 'Según sus propias notas en gob.pe: actividades de lectura itinerante para niños, grandes espacios públicos y, desde 2026, cursos gratuitos en vivo para adultos que incluyen inteligencia artificial.',
      body: [
        { kind: 'p', html: 'En mayo de 2024 la municipalidad llevó su iniciativa de "Biblioteca y teatro itinerantes" a un centro de educación inicial de Pachacútec, para que los niños aprendieran jugando. En julio de 2022 abrió el Parque Zonal Cultural Bicentenario de Pachacútec, que según la nota tiene "un área de más de 116 mil metros cuadrados" para deporte, recreación y cultura.' },
        { kind: 'p', html: 'El 27 de septiembre de 2026 anunció nuevos cursos gratuitos de capacitación: "Podrás capacitarte en educación, administración, gestión pública, ofimática, Power BI, primeros auxilios, inteligencia artificial y mucho más", y aclaró que "Las clases son en vivo y la certificación es opcional". Son cursos pensados para adultos que buscan trabajo o un ascenso, no para niños, pero muestran que en Ventanilla las clases en vivo por internet ya son algo conocido.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Nuestro lugar', p: 'Nosotros enseñamos programación a niños y adolescentes, en inglés. No reemplazamos ninguna actividad municipal ni competimos con ella.' },
          { h3: 'Sin convenio', p: 'No tenemos ningún vínculo con la Municipalidad de Ventanilla, con la DRE Callao ni con el MINEDU. Citamos las notas solo como fuente pública.' },
          { h3: 'Para toda la familia', p: 'Si un adulto de la casa toma los cursos municipales de IA, y el niño programa con nosotros, en casa se puede conversar de lo mismo desde dos lados.' }
        ] }
      ]
    },
    {
      id: 'busqueda',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo busca un programa un nombre en una lista?',
      lede: 'Recorriéndola de principio a fin, y esperando hasta el final para decir que no está. Este ejercicio lo escribimos nosotros para chicos de 10 a 12 años: buscar a Rosa en la lista del equipo, primero con un error muy común y luego bien.',
      body: [
        { kind: 'code', label: 'Dos versiones de la misma búsqueda', lang: 'Python', code: PY, note: 'La versión 1 decide en cada vuelta del bucle. La versión 2 usa una variable <code>found</code>, que empieza en <code>False</code> y solo cambia si aparece el nombre; la decisión se toma después del bucle.' },
        { kind: 'code', label: 'Lo que se ve en la pantalla', lang: 'Salida', code: OUT, note: 'Salida copiada sin cambios después de ejecutar el archivo con Python 3. La versión 1 dice "Not found" tres veces aunque Rosa sí está en la lista.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Buscar con el dedo.</strong> El mentor muestra la lista y pregunta: "Is Rosa on the team?" Todos dicen que sí. Luego, "How many times should the program answer?" Una sola vez.',
          '<strong>Ejecutar la versión 1.</strong> Aparecen cuatro respuestas, tres de ellas falsas. El programa dijo "Not found" ante Ana, ante Luis y ante Teo, porque decidió con cada nombre en lugar de esperar al final.',
          '<strong>Encontrar el error.</strong> El problema está en el <code>else</code> dentro del bucle. Comparar con un nombre que no es Rosa no significa que Rosa no esté; solo significa que todavía no apareció.',
          '<strong>Arreglarlo con una bandera.</strong> La variable <code>found</code> funciona como una bandera que se levanta al ver a Rosa. Después de revisar toda la lista se mira la bandera y se responde una sola vez.',
          '<strong>Probar los casos difíciles.</strong> ¿Qué pasa si se busca a "Pedro", que no está? ¿Y si la lista está vacía? El niño lo prueba y explica en inglés por qué la versión 2 responde bien.'
        ] },
        { kind: 'p', mt: true, html: 'Lo vemos una y otra vez en programas pegados desde la web o producidos por un chatbot: el código contesta algo, y si uno no lo lee con cuidado parece correcto. Enseñamos a desconfiar de la primera respuesta, a probar casos que podrían romper el programa y a explicar por qué funciona. Sobre ese enfoque escribimos en <a class="ag-inline-link" href="/programar-con-ia-sin-copiar">programar con IA sin copiar</a>.' }
      ]
    },
    {
      id: 'hora-peru',
      eyebrow: 'Horarios e idioma',
      h2: '¿A qué hora puede conectarse un niño de Ventanilla?',
      lede: 'A la que decida su familia. El mentor vive en la India, cuyo reloj va siempre diez horas y media por delante del de Perú. La tabla traduce algunas horas, solo como ejemplo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias de hora entre Ventanilla y la India (para orientarse; no es un horario de clases)', head: ['Reloj de Ventanilla (Perú)', 'Reloj del mentor (India)', '¿Qué fecha es allá?'], rows: [
          ['9:00 a. m.', '7:30 p. m.', 'El mismo'],
          ['11:30 a. m.', '10:00 p. m.', 'El mismo'],
          ['2:00 p. m.', '12:30 a. m.', 'El siguiente'],
          ['4:30 p. m.', '3:00 a. m.', 'El siguiente'],
          ['6:30 p. m.', '5:00 a. m.', 'El siguiente']
        ] },
        { kind: 'source', html: 'El Callao comparte la hora de todo el Perú: UTC-5 fijo, sin adelanto estival (hora oficial del INACAL; zona America/Lima en tzdata). Del otro lado, la India no se mueve de UTC+5:30. Así, la tabla no caduca con las estaciones.' },
        { kind: 'two', mt: true,
          leftH3: 'El inglés en el Callao',
          left: [
            'El EF EPI 2025 de EF Education First le da a la región Callao 518 puntos, en el nivel moderado, y a la ciudad de Lima 555, en el nivel alto. El índice mide a adultos que hacen su prueba, no a niños.',
            'Para su hijo, eso significa que el inglés de las sesiones puede ser un reto al comienzo. El mentor lo sabe: habla despacio, repite y se apoya en la pantalla.'
          ],
          rightH3: 'Cómo suelen organizarse',
          right: [
            'Las familias con chicos del turno mañana suelen preferir la tarde; las del turno tarde, la mañana. Si la conexión de casa anda más firme a cierta hora, conviene usarla.',
            'Al reservar la sesión gratis, el sistema muestra los horarios disponibles en hora de Perú.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo sabrá que su hijo avanza?',
    lede: 'Usamos cinco señales propias para contarle a cada familia dónde está su hijo. No reemplazan las notas del colegio ni se parecen a ellas.',
    table: { caption: 'Señales de avance en programación para chicos de primaria (definidas por nosotros)', head: ['Señal', 'Edad común', 'Lo que su hijo ya hace'], rows: [
      ['1. Ordena pasos', '6 a 7 años', 'coloca los bloques en el orden que lleva a su personaje a la meta'],
      ['2. Repite con cabeza', '7 a 9 años', 'anticipa cuántas vueltas dará un bucle antes de correrlo'],
      ['3. Recorre una lista', '9 a 10 años', 'escribe un <code>for</code> que pasa por todos los elementos de una lista'],
      ['4. Decide al final', '10 a 11 años', 'usa una bandera para responder una sola vez, después de mirar todo'],
      ['5. Prueba lo raro', '11 a 12 años', 'busca casos que podrían romper su programa y lo explica en inglés']
    ] },
    left: { h3: 'En casa', ps: [
      'Una buena pregunta a la hora de la cena: ¿qué hace el programa si el dato no aparece? Si su hijo lo sabe explicar, aprendió lo que importa.',
      'Acostumbrarse a otro acento toma unas semanas. Si al comienzo se cansa, recuérdele que a todos les pasa y que luego se vuelve natural.'
    ] },
    right: { h3: 'Para el chico', ps: [
      'No responda en voz alta antes de mirar toda la lista. Al programa le pasa lo mismo.',
      'Pruebe con un nombre que no está. Si su programa responde bien, está listo.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para chicos de Ventanilla',
    lede: 'Cada curso sigue el mismo formato: sesiones en directo, en inglés, con un mentor fijo, en grupo o individuales.',
    bands: [
      { num: 'I', h3: 'Para los más chicos', sub: 'Primaria baja', courses: [
        { code: 'PRVE / BASE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Del primer personaje a un juego con niveles.' },
        { code: 'PRVE / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Lógica para empezar', blurb: 'Patrones y orden antes de programar.' },
        { code: 'PRVE / BASE / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una aplicación sencilla para el teléfono de casa.' }
      ] },
      { num: 'II', h3: 'Para crear', sub: 'Primaria alta', courses: [
        { code: 'PRVE / CREA / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio', blurb: 'Programar pistas, marcadores y reglas con Luau.' },
        { code: 'PRVE / CREA / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Automatizar construcciones en un mundo de bloques.' },
        { code: 'PRVE / CREA / 03', slug: 'kids-ai-web-development-course', title: 'Una página web', blurb: 'HTML y CSS para publicar algo propio en internet.' }
      ] },
      { num: 'III', h3: 'Para adolescentes', sub: 'Secundaria', courses: [
        { code: 'PRVE / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'De cero a proyectos con datos y archivos.' },
        { code: 'PRVE / SEC / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Ciberseguridad defensiva', blurb: 'Cómo protegerse y proteger sistemas, de forma ética.' },
        { code: 'PRVE / SEC / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Desarrollo web', blurb: 'Páginas modernas y responsivas con HTML, CSS y JavaScript.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las sesiones?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Antes del colegio, para los chicos del turno tarde.' },
      { time: 'Tarde', l: 'Después del almuerzo y las tareas.' },
      { time: 'Individual', l: 'Con el mentor solo para su hijo, cuando la familia diga.' }
    ],
    cells: [
      { h3: 'Mentor estable', p: 'El mismo de principio a fin, que sabe cómo piensa su hijo.' },
      { h3: 'Inglés comprensible', p: 'Frases cortas, ejemplos en pantalla y tiempo para pensar.' },
      { h3: 'Su hijo programa', p: 'El código lo escribe él; el mentor solo guía con preguntas.' },
      { h3: 'Etapas con proyecto', p: 'Cada tramo cierra con algo que se puede probar en casa.' },
      { h3: 'Reportes cortos', p: 'Un resumen corto para los padres al cerrar cada etapa.' },
      { h3: 'Dos formatos', p: 'Compartir pantalla con quince a veinte chicos, o tener al mentor en exclusiva.' }
    ]
  },

  projectsH2: 'Lo que hacen nuestros estudiantes',
  projectsLede: 'Buscar un nombre en una lista es el comienzo; con constancia, algunos alumnos llegan a publicar sus propias apps. Abajo, una muestra; la galería completa vive en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Comentarios en Google de familias y alumnos de distintos países, reproducidos en su inglés original.',

  fees: {
    h2: 'Precios para familias de Ventanilla',
    lede: 'Fijamos la mensualidad en moneda estadounidense y la cobramos a su tarjeta. Cuánto termina siendo en soles lo decide el tipo de cambio que aplique su banco ese día.',
    free: ['Sesión de prueba gratuita en directo', 'Revisión de su conexión y su equipo', 'Sin tarjeta, sin compromiso'],
    group: ['Quince a veinte chicos de una edad parecida', 'Un mentor fijo todo el curso', 'Dos sesiones en directo a la semana', 'Pago por mes, sin permanencia'],
    one: ['Su hijo y el mentor, a solas', 'Contenido y ritmo a su medida', 'Horario acordado con usted']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Ventanilla: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Nuestro único idioma de enseñanza es el inglés, siempre en directo, y para un chico chalaco eso suma: cada hora de código es también una hora de conversación. Si una frase no se entiende, el mentor la cambia y la escribe en pantalla. El EF EPI 2025 da a la región Callao 518 puntos (moderado) frente a 555 de Lima ciudad (alto); hablar inglés cada semana ayuda a acortar esa brecha.' },
      { q: '¿Ventanilla es Lima o Callao?', a: 'Callao. Ventanilla es uno de los siete distritos de la Provincia Constitucional del Callao, la segunda por población después del distrito de Callao, según los Censos Nacionales 2025. Para nuestras clases da igual: se toman desde casa en cualquier distrito.' },
      { q: '¿Cuántos niños hay en Ventanilla?', a: 'El INEI contó en el censo de 2025 a 38,109 niños de 6 a 11 años y 40,514 adolescentes de 12 a 17 en Ventanilla, entre la población censada de un distrito de 355,722 habitantes.' },
      { q: '¿Puede tomar la clase con datos móviles?', a: 'Sí, siempre que la señal resista sesenta minutos. Dos tercios de los hogares de Ventanilla (67.3 %) usan internet móvil, contra un 42.8 % con conexión fija, según el censo de 2025. Conviene ensayar antes con una videollamada.' },
      { q: '¿Sirve el celular para programar?', a: 'No de forma cómoda: el código se teclea, y en una pantalla de teléfono eso agota a cualquiera. Pedimos laptop o PC con cámara y micrófono. Un 21.2 % de los hogares de Ventanilla declaró laptop en el censo de 2025.' },
      { q: '¿Qué edad mínima piden?', a: 'Seis años, o sea, 1° grado. Los más chicos programan arrastrando bloques; el salto al Python escrito suele llegar en 4° o 5°, según cómo lea y teclee cada niño.' },
      { q: '¿Qué horarios hay?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por la diferencia de diez horas y media, una sesión a las 9:00 a. m. en Ventanilla empieza a las 7:30 p. m. en la India.' },
      { q: '¿Hay matrícula o permanencia?', a: 'No. Se paga mes a mes con tarjeta, en moneda estadounidense, y puede dejarlo cuando quiera. Para reservar la sesión de prueba no se pide ningún pago.' },
      { q: '¿Tienen relación con la municipalidad o con el colegio?', a: 'No. Somos una escuela privada en línea, sin acuerdos con la Municipalidad de Ventanilla, la DRE Callao, el MINEDU o algún colegio; nada de lo que hacemos se traduce en notas. Quien cierra un curso se lleva una constancia de finalización firmada solo por Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Lecturas para familias chalacas, unas en castellano y otras en inglés.',
    items: [
      { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region (inglés)', p: 'La provincia del Callao en cifras y lo que ofrecemos allí.' },
      { href: '/programar-con-ia-sin-copiar', label: 'Programar con IA sin copiar', p: 'Cómo usar la IA para aprender, no para entregar respuestas ajenas.' },
      { href: '/programacion-roblox-para-ninos-en-ingles', label: 'Roblox en inglés', p: 'Del juego al código, para chicos de primaria.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía general para padres de primaria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra oferta para todo el país, en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método, en inglés.' }
    ]
  },

  start: {
    h2: 'Reserve una sesión gratis desde Ventanilla',
    lede: 'Empezamos por lo práctico: cámara, audio y conexión. Después el mentor charla un momento con su hijo en un inglés sencillo, le pide buscar algo en una lista o mover un personaje, y toma nota de cómo lo encara. Con eso proponemos un camino, y usted decide.',
    readFirst: 'Si prefiere informarse antes, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explica el método y <a class="ag-inline-link" href="/courses">All courses</a> lista todos los cursos.',
    note: 'Enseñamos desde la India, por videollamada y siempre en inglés. Para consultas por WhatsApp, escríbanos en castellano sin problema.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Primeros cursos', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques para empezar' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python, primera parte' },
        { href: '/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev', label: 'Crear con IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Familias del Callao', links: [
        { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region' },
        { href: '/programar-con-ia-sin-copiar', label: 'Programar con IA sin copiar' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Mirar toda la lista antes de responder'
  },

  personalityCss: `
.ag-root.ag-prve .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-prve .ag-capsule { border-left-width: 6px; }
.ag-root.ag-prve .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prve .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-prve .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de la Provincia Constitucional del Callao (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for Ventanilla; Municipalidad Distrital de Ventanilla notes on gob.pe of 13 July 2022, 13 May 2024, 16 March 2026 and 27 September 2026; EF EPI 2025 (Callao region, Lima city); MINEDU Edades normativas; tzdata and INACAL. The example, the starting suggestions and the signals are our own.',
    localProject: 'A team-list search for a child of 10 to 12 in Ventanilla: Version 1 prints Not found for every other name (Not found, Not found, Found Rosa, Not found), Version 2 sets a found flag inside the loop and answers once after it: Found Rosa. Run with python3 -I. Lesson family: a search loop that reports "not found" too early; a boolean flag checked after the loop.',
    requiredMentions: ['Is Rosa on the team?', 'Mirar toda la lista antes de responder', 'Las clases son en vivo y la certificación es opcional', 'un área de más de 116 mil metros cuadrados', '65,010 (67.3 %)', 'Censados en Ventanilla', 'es su segundo distrito más poblado después del distrito de Callao', 'la región Callao 518 puntos', 'miles de estudiantes de los colegios públicos de Ventanilla regresaron hoy a las aulas'],
    sources: [
      { claim: 'Ventanilla 355,722 inhabitants, censada 345,962, 38,109 aged 6 to 11, 40,514 aged 12 to 17, single ages 6 to 12; Callao province 1,094,209, 96,501 and 105,284; Callao district 487,920.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ventanilla households 96,623: mobile internet 65,010, fixed internet 41,390, laptop 20,514, computer 14,133, tablet 7,047, phone 95,915; Callao province shares.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'Start of the 2026 school year in Ventanilla public schools (16 March 2026).', url: 'https://www.gob.pe/institucion/muniventanilla/noticias/1401097' },
      { claim: 'Free live courses for adults including artificial intelligence, optional certification (27 September 2026).', url: 'https://www.gob.pe/institucion/muniventanilla/noticias/1454695' },
      { claim: 'Itinerant library and theatre for children in Pachacútec (13 May 2024).', url: 'https://www.gob.pe/institucion/muniventanilla/noticias/954623' },
      { claim: 'Parque Zonal Cultural Bicentenario de Pachacútec, more than 116 thousand m2 (13 July 2022).', url: 'https://www.gob.pe/institucion/muniventanilla/noticias/649191' },
      { claim: 'EF EPI 2025: Callao region 518 moderate; Lima city 555 high.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Officials named in the municipal notes, the school name in the May 2024 note and the park investment in soles: left out on purpose.',
      'That the municipal adult courses are for children or connected to us: refused; the page says they are for adults and that we have no link.',
      'Ventanilla as part of Lima province: refused; the page places it in the Provincia Constitucional del Callao.',
      'Income, class or strata readings of the household equipment table: refused.',
      'Travel times across Lima and Callao: no figure used.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};

// SHIP: district kids door (ES) | La Perla, Callao: una app municipal, casas conectadas, apps hechas por chicos | function parameters: a default value, and arguments swapped by position fixed with keyword names
'use strict';
// Clases de programación para niños en La Perla, Callao (ag- Spanish-language district door, Peru cluster row PE234,
// hubGroup lima; alloc: prpe, #334400). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the La Perla parent (Callao) who types "clases de programación para niños la perla". Spine: the municipality
// launched its own phone app in 2022, so the page asks who builds apps and shows that a child can start; the children of
// the district by age (census; the count grows from 6 to 10); homes already equipped (household census); an original
// lesson on default parameters and keyword arguments with a greeting-card maker.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-la-perla-callao/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Callao (tabulados/07/poblacion):
//    Cuadro N° 1 "DISTRITO LA PERLA 68082" total, censada 64707, omitida 3375. Rank 4 of 7 Callao districts (ours).
//    Cuadro N° 3 "DISTRITO LA PERLA 64707 2477 4281 5183 10825 13737 13085 15119"; all URBANA.
//    Cuadro N° 2 single ages: 6 años 508, 7 años 616, 8 años 704, 9 años 756, 10 años 853, 11 años 844, 12 años 825.
//    Neighbours: BELLAVISTA 80953, CALLAO 487920 (tabulados/07); SAN MIGUEL 189301 (tabulados/27).
//  INEI, Censos Nacionales 2025, Equipamiento_del_hogar.xlsx (tabulados/07/hogar), DISTRITO LA PERLA, Hogares 18661:
//    Computadora 7359, Laptop 10292, Tableta 5913; celular 18576, internet fijo 14070, internet móvil 15799.
//  Municipalidad Distrital de La Perla (munilaperla), gob.pe notes:
//    8 June 2022 (n-619166): "implementa la primera app en la provincia constitucional del callao dirigida a los vecinos
//      de la perla"; "VECINO LA PERLA es una aplicación móvil"; "Disponible en los sistemas operativos móviles más usados
//      como Android y iOS". (The "first" is the municipality's own claim, labelled as such.)
//    30 December 2021 (n-573400): "Capacitación sobre el uso de las herramientas tecnológicas dirigido a las Organizaciones
//      Sociales del Distrito de la Perla".
//  EF EPI 2025 Peru page: region callao 518 "moderate"; Lima city 555 high.
//  National: MINEDU Edades normativas; CNEB; tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 4281 / 64707 = 6.6 %, 5183 / 64707 = 8.0 %;
//    853 / 508 = 1.68 (age 10 against age 6); laptop 10292 / 18661 = 55.2 %, computadora 39.4 %, tableta 31.7 %,
//    internet fijo 75.4 %, móvil 84.7 %, celular 99.5 %.
// Our own example, run with python3 -I (laperla.py in the src-pages folder), exact output:
//    Happy birthday, Lucía! From your friend. / Well done, Diego! From your friend. /
//    Mateo, Happy new year! From your friend. / Happy new year, Mateo! From your friend. /
//    Happy birthday, Sofía! From Grandma.
// Lesson family: function parameters with default values; positional arguments in the wrong order; keyword arguments.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "def card(name, message='Happy birthday', sign='your friend'):",
  "    return message + ', ' + name + '! From ' + sign + '.'",
  '',
  "print(card('Lucía'))",
  "print(card('Diego', 'Well done'))",
  "print(card('Happy new year', 'Mateo'))",
  "print(card('Mateo', message='Happy new year'))",
  "print(card(sign='Grandma', name='Sofía'))"
].join('\n');

const OUT = [
  'Happy birthday, Lucía! From your friend.',
  'Well done, Diego! From your friend.',
  'Mateo, Happy new year! From your friend.',
  'Happy new year, Mateo! From your friend.',
  'Happy birthday, Sofía! From Grandma.'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en La Perla (Callao)' },
  slug: 'clases-de-programacion-para-ninos-la-perla-callao',
  code: 'prpe',
  accent: '#334400',
  accentRationale: 'Clases de programación para niños en La Perla, Callao: a deep olive #334400, the darkest of the Callao pages, chosen to sit apart from the teal of Bellavista and the grass green of Ventanilla; contrast well above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en La Perla',
  title: 'Clases de programación para niños en La Perla, Callao',
  description: 'Programación para niños de La Perla, Callao: sesiones en vivo con un mentor que enseña en inglés, desde casa, para chicos de 6 a 12 años que quieren crear apps.',
  ogDescription: 'La municipalidad de La Perla lanzó su propia app en 2022. ¿Quién programa las apps? Cómo empieza un chico del distrito y una función en Python que escribe tarjetas.',
  twitterDescription: 'Clases de programación para niños de La Perla (Callao), en vivo y en inglés, sin salir de casa.',
  pageName: 'Clases de programación para niños en La Perla',
  webPageDescription: 'Guía para familias de La Perla, en la Provincia Constitucional del Callao, que buscan clases de programación para niños de 6 a 12 años: la app municipal como punto de partida, los niños del distrito por edad según los Censos Nacionales 2025, el equipo de los hogares y una lección de Python escrita por nosotros.',
  courseDescription: 'Sesiones de programación en directo por videollamada para niños de 6 a 12 años de La Perla (Callao), dictadas solo en inglés: apps con bloques, páginas web y Python, en clase grupal o individual, durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en La Perla',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#apps', label: 'Apps' },
    { href: '#perlenos', label: 'Niños' },
    { href: '#hogar', label: 'Hogar' },
    { href: '#tarjetas', label: 'Ejemplo' },
    { href: '#dos-relojes', label: 'Horario' }
  ],
  eyebrow: 'Callao &middot; La Perla &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en La Perla, en inglés',
  lede: 'La Perla es el distrito del Callao que mira al mar entre Bellavista y San Miguel. En 2022 su municipalidad estrenó una aplicación para celulares. Detrás de cada app hay alguien que la programó, y un chico de primaria puede empezar ese camino hoy, desde su casa. Aquí contamos cómo son nuestras sesiones en vivo y en inglés, qué registró el censo de 2025 en el distrito y una función de Python que escribe tarjetas de saludo.',
  secondaryCta: { href: '#tarjetas', label: 'Ver la función' },
  wa: 'Hola Modern Age Coders, somos de La Perla (Callao) y nos interesan clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; frente al mar del Callao, con un mentor en la India',
  spec: [
    ['Distrito', 'La Perla, Provincia del Callao'],
    ['Edad', 'Primaria (6 a 12); secundaria aparte'],
    ['Enseñanza', 'En directo, en inglés, por cámara'],
    ['Modalidad', 'Grupo de quince a veinte, o a solas'],
    ['Meses', 'Enero a diciembre, sin calendario fijo'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Sí: Modern Age Coders enseña a programar a chicos de 6 a 12 años de La Perla, en el Callao, con sesiones en vivo dictadas en inglés que se siguen desde casa en cualquier mes del año. Un mentor desde la India acompaña a cada niño, sin prisa: primero apps y juegos con bloques, después páginas web y Python. Usted escoge grupo o sesiones individuales y la hora del día. Hace falta laptop o PC con cámara, y la primera sesión no se cobra.',

  picks: {
    eyebrow: 'Cursos de entrada',
    h2: 'Tres cursos para un chico perlano que quiere crear',
    lede: 'Uno para su primera app, uno para su primera web y uno para escribir código de verdad.',
    items: [
      { course: 'block-coding-app-development-masterclass', code: 'PRPE / 01', title: 'Apps para el celular', alt: 'Imagen del curso de desarrollo de apps con bloques', note: 'Para primaria, desde los 8 años. Con bloques, el chico diseña una app sencilla, con botones, pantallas y un contador, y la prueba en el teléfono de la familia.' },
      { course: 'kids-ai-web-development-course', code: 'PRPE / 02', title: 'Mi página web', alt: 'Imagen del curso de desarrollo web para niños', note: 'De 9 a 12 años. HTML y CSS para publicar una página propia: su equipo, su mascota, sus dibujos, escrita en un inglés sencillo.' },
      { course: 'python-ai-kids-masterclass', code: 'PRPE / 03', title: 'Primer código en Python', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos que ya teclean con soltura. Funciones con nombre y parámetros, como la que arma tarjetas en esta página, y algún proyecto pequeño de IA.' }
    ]
  },

  sections: [
    {
      id: 'apps',
      eyebrow: 'Una app en el distrito',
      h2: '¿Quién programa las aplicaciones que usamos en el celular?',
      lede: 'Personas que aprendieron a programar, muchas de ellas desde chicas. La Municipalidad de La Perla presentó su propia app en 2022; un niño perlano puede empezar a aprender cómo se construye algo así sin salir de casa.',
      body: [
        { kind: 'p', html: 'El 8 de junio de 2022, la municipalidad anunció que "implementa la primera app en la provincia constitucional del callao dirigida a los vecinos de la perla" (la afirmación de ser la primera es suya). La describió así: "VECINO LA PERLA es una aplicación móvil", "Disponible en los sistemas operativos móviles más usados como Android y iOS", pensada para consultar y pagar tributos municipales desde el teléfono. Unos meses antes, en diciembre de 2021, había convocado una capacitación "sobre el uso de las herramientas tecnológicas" para las organizaciones sociales del distrito.' },
        { kind: 'p', html: 'No tenemos ninguna relación con esa app ni con la municipalidad. La mencionamos porque es un ejemplo cercano de algo que los chicos usan todos los días sin pensar quién lo hizo. Una app es un conjunto de pantallas, botones y reglas: "si el usuario toca aquí, muestra esto". Esa lógica es exactamente la que un niño de 8 o 9 años aprende a armar en nuestras sesiones, primero con bloques y luego con código escrito.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Con bloques, a los 8', p: 'Una app con dos pantallas y un botón que cuenta. Pequeña, pero suya, y funcionando en el celular de casa.' },
          { h3: 'Con HTML, a los 10', p: 'Una página web propia, con títulos, imágenes y colores elegidos por él, publicada para que la vea la familia.' },
          { h3: 'Con Python, a los 11', p: 'Funciones que reciben datos y devuelven resultados: la base de cualquier app de verdad, también de la municipal.' }
        ] },
        { kind: 'p', mt: true, html: 'Todo esto ocurre en directo, por videollamada, con un mentor que vive en la India y enseña en inglés. Para un panorama de lo que hacemos en toda la provincia, vea <a class="ag-inline-link" href="/online-coding-and-ai-classes-callao-region-peru">online coding and AI classes in the Callao region</a> (en inglés). Si su hijo ya está en secundaria y lo que quiere es crear apps, la guía <a class="ag-inline-link" href="/crear-apps-curso-para-adolescentes-peru">crear apps: curso para adolescentes</a> es para él.' }
      ]
    },
    {
      id: 'perlenos',
      eyebrow: 'La Perla en el censo',
      h2: '¿Cuántos chicos de primaria hay en La Perla?',
      lede: 'Entre quinientos y ochocientos cincuenta por edad. El censo de 2025 registró en La Perla 4,281 personas de 6 a 11 años y 5,183 de 12 a 17, que son el 6.6 % y el 8.0 % de sus censados (porcentajes nuestros).',
      body: [
        { kind: 'table', numCols: [1], caption: 'Chicos de La Perla por año de edad cumplido, Censos Nacionales 2025, con su grado escolar', head: ['Edad', 'Censados en La Perla', 'Grado que corresponde', 'Primer proyecto sugerido (nuestro)'], rows: [
          ['6 años', '508', '1° de primaria', 'Un personaje que saluda en inglés'],
          ['7 años', '616', '2° de primaria', 'Una tarjeta animada en Scratch'],
          ['8 años', '704', '3° de primaria', 'Una app de dos pantallas con bloques'],
          ['9 años', '756', '4° de primaria', 'Una página web con su tema favorito'],
          ['10 años', '853', '5° de primaria', 'Funciones en Python que arman mensajes'],
          ['11 años', '844', '6° de primaria', 'Un juego de preguntas propio'],
          ['12 años', '825', '1° de secundaria', 'Python o apps para adolescentes']
        ] },
        { kind: 'source', html: 'Base: el Cuadro N.° 2 (población censada por edades simples) que el INEI publicó para la Provincia Constitucional del Callao con los Censos Nacionales 2025, del 15 de septiembre de 2025, distrito de La Perla. El grado sigue la edad normativa del MINEDU, contada al 31 de marzo. Los proyectos los sugerimos nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Una pirámide curiosa',
          left: [
            'En La Perla hay más chicos de 10 años (853) que de 6 (508): unos 1.68 por cada uno, según nuestra división de las cifras del INEI. Las edades de primaria alta pesan más que las de primaria baja.',
            'El distrito suma 68,082 habitantes, cuarto entre los siete del Callao (orden nuestro con el Cuadro N.° 1). Sus personas de 60 años o más, 15,119, superan a todos los chicos de 6 a 17 juntos.'
          ],
          rightH3: 'Los vecinos',
          right: [
            'La Perla limita con Bellavista, con el distrito de Callao y con San Miguel, ya en Lima, además del mar. El INEI publica cada uno por separado: Bellavista con 80,953 habitantes, Callao con 487,920 y San Miguel con 189,301.',
            'Para los adolescentes perlanos (5,183 en el censo) tenemos cursos de Python, Java y apps; desde 1° de secundaria ya no hablamos de niños.'
          ] }
      ]
    },
    {
      id: 'hogar',
      eyebrow: 'El hogar perlano',
      h2: '¿Está equipada una casa de La Perla para programar en línea?',
      lede: 'En la mayoría de los casos, sí. Más de la mitad de los hogares del distrito tiene laptop y tres de cada cuatro, internet fijo, de acuerdo con el censo de 2025. Lo confirmamos igual con su equipo en la sesión gratuita.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Lo que hay en los hogares de La Perla frente a la provincia del Callao, Censos Nacionales 2025 (porcentajes nuestros)', head: ['Equipo o servicio', 'La Perla (18,661 hogares)', 'Todo el Callao'], rows: [
          ['Teléfono celular', '18,576 (99.5 %)', '99.3 %'],
          ['Internet móvil', '15,799 (84.7 %)', '74.0 %'],
          ['Internet fijo', '14,070 (75.4 %)', '54.8 %'],
          ['Laptop', '10,292 (55.2 %)', '33.2 %'],
          ['Computadora de escritorio', '7,359 (39.4 %)', '23.2 %'],
          ['Tableta', '5,913 (31.7 %)', '14.3 %']
        ] },
        { kind: 'source', html: 'Del tabulado de equipamiento de hogares del INEI (Censos Nacionales 2025, Callao): aparatos en el Cuadro N.° 1, servicios en el N.° 2, renglón "Hogares" de La Perla y de la provincia. Un hogar con laptop y celular figura en ambas filas, de modo que no hay que sumarlas.' },
        { kind: 'two', mt: true,
          leftH3: 'Qué pedimos',
          left: [
            'Una laptop o una PC con teclado, cámara y micrófono. El celular, que tienen prácticamente todos, queda para los mensajes de WhatsApp con nosotros; con él no se teclea código una hora entera.',
            'Scratch funciona en el navegador y Python se instala gratis; el mentor guía la instalación el primer día.'
          ],
          rightH3: 'Qué ayuda',
          right: [
            'Un sitio fijo de la casa, sin televisión cerca, y unos audífonos con micrófono para que el inglés del mentor se escuche limpio.',
            'Abrir el enlace unos minutos antes. Los chicos que empiezan puntuales aprovechan más la hora.'
          ] },
        { kind: 'p', mt: true, html: 'Las cifras del censo aparecen aquí solo para contestar si una sesión virtual es viable en una casa típica del distrito, no para describir a sus familias.' }
      ]
    },
    {
      id: 'tarjetas',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Qué es un parámetro y para qué sirve un valor por defecto?',
      lede: 'Es lo que hace que una misma función sirva para muchos casos. Este ejercicio es de nuestra autoría, para chicos de 10 a 12 años: una función que arma tarjetas de saludo en inglés, con un mensaje y una firma que se pueden cambiar o dejar como vienen.',
      body: [
        { kind: 'code', label: 'Una función que escribe tarjetas', lang: 'Python', code: PY, note: '<code>name</code> es obligatorio. <code>message</code> y <code>sign</code> traen un valor por defecto: si no se indican, la tarjeta dice "Happy birthday" y la firma "your friend".' },
        { kind: 'code', label: 'Las cinco tarjetas', lang: 'Salida', code: OUT, note: 'Así salieron, sin retoques, al ejecutar el archivo con Python 3. Fíjese en la tercera: "Mateo, Happy new year!" está al revés.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer la primera línea.</strong> El mentor pregunta: "What does the card say if we only give a name?" Los chicos descubren el valor por defecto: "Happy birthday" y "your friend".',
          '<strong>Cambiar solo el mensaje.</strong> <code>card(\'Diego\', \'Well done\')</code> reemplaza el mensaje y deja la firma como estaba. Una función, dos tarjetas distintas.',
          '<strong>La tarjeta al revés.</strong> En <code>card(\'Happy new year\', \'Mateo\')</code> los datos están en el orden equivocado: Python pone el saludo donde va el nombre. No da error, solo una tarjeta rara. "Is the program wrong, or are we?"',
          '<strong>Arreglarlo con nombres.</strong> Escribiendo <code>message=\'Happy new year\'</code>, el orden ya no importa. La última llamada lo demuestra: <code>sign=</code> va primero y la tarjeta sale perfecta, firmada por la abuela.',
          '<strong>Su propia tarjeta.</strong> El chico agrega un parámetro nuevo, por ejemplo un emoticono de texto o la fecha, con su propio valor por defecto, y escribe tres tarjetas para su familia.'
        ] },
        { kind: 'p', mt: true, html: 'La tarjeta al revés enseña algo importante: que un programa no se queje no quiere decir que esté bien. Hay que leer el resultado como lo leería otra persona. Quien copia código ajeno o lo pide a una IA rara vez revisa así lo que obtiene; nosotros enseñamos a hacerlo siempre. Para los más pequeños, <a class="ag-inline-link" href="/scratch-para-ninos-en-ingles">Scratch para niños en inglés</a> muestra cómo empieza este camino.' }
      ]
    },
    {
      id: 'dos-relojes',
      eyebrow: 'Inglés y horario',
      h2: '¿Cómo es el inglés de la sesión y en qué horario se conectan?',
      lede: 'Un inglés pausado, adaptado al chico, y el horario que la familia proponga. Como el mentor vive en la India, su reloj marca diez horas con treinta minutos más que el de La Perla todo el año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplos de equivalencia entre la hora de La Perla y la de la India (no son horarios de clase)', head: ['La Perla (hora peruana)', 'Mentor (hora india)', 'Allá es'], rows: [
          ['7:30 a. m.', '6:00 p. m.', 'El mismo día'],
          ['9:00 a. m.', '7:30 p. m.', 'El mismo día'],
          ['12:30 p. m.', '11:00 p. m.', 'El mismo día'],
          ['3:30 p. m.', '2:00 a. m.', 'Ya es el día siguiente'],
          ['5:30 p. m.', '4:00 a. m.', 'Ya es el día siguiente']
        ] },
        { kind: 'source', html: 'La hora peruana es UTC-5 los doce meses, sin cambios de verano (hora oficial del INACAL; zona America/Lima de tzdata), y la de la India UTC+5:30 también todo el año: por eso estas equivalencias no caducan.' },
        { kind: 'two', mt: true,
          leftH3: 'El inglés, paso a paso',
          left: [
            'Frases cortas, ejemplos visibles en la pantalla compartida y silencio para que el niño piense. Si contesta en castellano, el mentor le ofrece la frase en inglés para que la pruebe.',
            'Según el índice EF EPI 2025, la región Callao tiene 518 puntos (nivel moderado) y Lima ciudad 555 (nivel alto). Conversar en inglés cada semana con un objetivo concreto, como terminar una app, ayuda más que repetir listas.'
          ],
          rightH3: 'Las horas que suelen elegir',
          right: [
            'Después del colegio, cuando el chico ya almorzó, o temprano por la mañana si estudia en el turno tarde.',
            'El sistema de reservas muestra cada opción en hora peruana, sin cálculos.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si su hijo aprende de verdad?',
    lede: 'Cinco logros, definidos por nosotros, sirven de mapa para la familia. No equivalen a notas del colegio.',
    table: { caption: 'Mapa de logros para chicos que programan (de Modern Age Coders)', head: ['Logro', 'Edad habitual', 'Lo que su hijo demuestra'], rows: [
      ['1. Da órdenes', '6 a 7 años', 'hace que un personaje salude y se mueva con bloques'],
      ['2. Construye pantallas', '7 a 9 años', 'arma una app o una animación con botones que responden'],
      ['3. Publica', '9 a 10 años', 'crea una página web y explica cada etiqueta en inglés'],
      ['4. Reutiliza', '10 a 11 años', 'escribe una función con parámetros y valores por defecto'],
      ['5. Revisa como usuario', '11 a 12 años', 'prueba su programa pensando en quién lo va a usar y corrige lo raro']
    ] },
    left: { h3: 'En familia', ps: [
      'Pídale a su hijo una tarjeta o una pantalla hecha por él. Si puede cambiarla delante de usted, la entiende.',
      'Elogie las preguntas, no solo los resultados: preguntar es la mitad de programar.'
    ] },
    right: { h3: 'Para el chico', ps: [
      'Lea en voz alta lo que su programa escribe. ¿Lo entendería otra persona?',
      'Si un dato sale en un lugar raro, revise el orden en que lo pasó.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para chicos de La Perla',
    lede: 'Siempre en directo y en inglés, con un mentor que no cambia a mitad de curso, en grupo o de a uno.',
    bands: [
      { num: 'I', h3: 'Arrancar', sub: 'Primeros grados', courses: [
        { code: 'PRPE / INICIO / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para todos', blurb: 'Piezas de colores que se encajan para dar órdenes.' },
        { code: 'PRPE / INICIO / 02', slug: 'scratch-programming-complete-course', title: 'Scratch, de inicio a fin', blurb: 'Historias, animaciones y juegos con niveles.' },
        { code: 'PRPE / INICIO / 03', slug: 'microsoft-office-kids-mastery', title: 'Herramientas de oficina', blurb: 'Documentos, presentaciones y hojas de cálculo para el colegio.' }
      ] },
      { num: 'II', h3: 'Crear', sub: 'Primaria alta', courses: [
        { code: 'PRPE / CREA / 01', slug: 'game-development-masterclass-for-kids', title: 'Hacer videojuegos', blurb: 'Diseñar reglas y niveles, y programarlos.' },
        { code: 'PRPE / CREA / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Crear con IA', blurb: 'Usar la IA como ayudante, revisando todo lo que propone.' },
        { code: 'PRPE / CREA / 03', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA', blurb: 'Cómo funciona un asistente y cuándo se equivoca.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'Adolescentes', courses: [
        { code: 'PRPE / SEC / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'Apps completas', blurb: 'Diseñar, programar y probar una app de verdad.' },
        { code: 'PRPE / SEC / 02', slug: 'python-complete-masterclass-teens', title: 'Python avanzado', blurb: 'Funciones, archivos y datos en proyectos propios.' },
        { code: 'PRPE / SEC / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript', blurb: 'Páginas que reaccionan a lo que hace el usuario.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo transcurre una semana de sesiones?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del mediodía', l: 'Para quien entra al colegio por la tarde.' },
      { time: 'Al volver a casa', l: 'Con el almuerzo hecho y la mochila guardada.' },
      { time: 'Sesión privada', l: 'Un horario pactado solo para su hijo.' }
    ],
    cells: [
      { h3: 'El mismo mentor', p: 'Una sola persona acompaña todo el curso.' },
      { h3: 'Inglés amable', p: 'Pausas, repeticiones y apoyo visual constante.' },
      { h3: 'Teclea el chico', p: 'El código sale de sus manos; el mentor orienta.' },
      { h3: 'Algo terminado', p: 'Cada etapa deja una app, una web o un programa listo.' },
      { h3: 'Novedades para usted', p: 'Un breve parte del avance al cerrar cada etapa.' },
      { h3: 'Aula o privado', p: 'De quince a veinte compañeros, o el mentor para él solo.' }
    ]
  },

  projectsH2: 'Creaciones de nuestros estudiantes',
  projectsLede: 'Una función que escribe tarjetas es el inicio; varios alumnos han terminado publicando apps y webs propias. Aquí hay algunas, y en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés) se ven más.',
  reviewsLede: 'Opiniones que familias y estudiantes de varios países publicaron en Google, sin traducir.',

  fees: {
    h2: 'Precios para familias de La Perla',
    lede: 'La tarifa mensual figura en dólares estadounidenses y se abona con tarjeta. El paso a soles lo hace su banco con el tipo de cambio de la fecha del cargo; de ahí que el importe pueda variar un poco de un mes a otro.',
    free: ['Una sesión de prueba gratis', 'Chequeo de cámara, audio y conexión', 'Sin tarjeta ni compromiso'],
    group: ['De quince a veinte chicos de una misma etapa', 'Un mentor estable todo el curso', 'Dos sesiones semanales en directo', 'Cuota mensual, sin permanencia'],
    one: ['Atención solo para su hijo', 'Ritmo y contenidos a su medida', 'Horario pactado con la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en La Perla: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Enseñamos exclusivamente en inglés y siempre en directo, y eso le conviene a su hijo: crea apps y practica el idioma en una misma sesión. El mentor habla sin apuro, busca otra forma de decirlo si hace falta y lo enseña en la pantalla. La región Callao obtiene 518 puntos en el EF EPI 2025, nivel moderado; una hora semanal de inglés con un objetivo real ayuda a mejorarlo.' },
      { q: '¿Mi hijo puede hacer una app como la de la municipalidad?', a: 'Una app así la hace un equipo de profesionales. Lo que sí puede un chico de 8 o 9 años es crear su primera app sencilla con bloques, con botones y pantallas, y entender cómo funcionan. No tenemos relación con la app ni con la Municipalidad de La Perla.' },
      { q: '¿Cuántos chicos viven en La Perla?', a: 'El censo de 2025 del INEI cuenta en La Perla 4,281 personas de 6 a 11 años y 5,183 de 12 a 17, dentro de 68,082 habitantes.' },
      { q: '¿Qué necesito en casa?', a: 'Una laptop o PC con teclado, cámara y micrófono, y una conexión que no se corte. El censo encontró laptop en el 55.2 % de los hogares de La Perla e internet fijo en el 75.4 %. El celular no basta para programar.' },
      { q: '¿Hay una edad mínima?', a: 'Seis años, es decir, 1° grado de primaria. Los primeros proyectos son con bloques; hacia los 9 o 10 años la mayoría pasa a HTML o Python.' },
      { q: '¿Cuándo se conecta mi hijo?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Con las diez horas y media de diferencia, una sesión a las 9:00 a. m. en La Perla es a las 7:30 p. m. en la India.' },
      { q: '¿Se paga por adelantado?', a: 'Se paga cada mes con tarjeta, con la tarifa en moneda estadounidense; su banco hace la conversión. Para la sesión de prueba no pedimos datos de pago.' },
      { q: '¿Lo que aprende cuenta para el colegio?', a: 'No como nota. Trabajamos sin convenio con la Municipalidad de La Perla, la DRE Callao, el MINEDU o los colegios. Al terminar un curso, su hijo recibe una constancia de finalización emitida solo por Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Seguir leyendo',
    h2: 'Más páginas para familias de La Perla',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region (en inglés)', p: 'Los siete distritos del Callao y nuestra oferta allí.' },
      { href: '/crear-apps-curso-para-adolescentes-peru', label: 'Crear apps (adolescentes)', p: 'Para chicos de secundaria que quieren hacer sus propias apps.' },
      { href: '/scratch-para-ninos-en-ingles', label: 'Scratch en inglés', p: 'El primer paso de los más pequeños.' },
      { href: '/programacion-para-ninos-de-8-anos', label: 'Programación a los 8 años', p: 'Qué puede crear un chico de 3° de primaria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra oferta para el país, en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo preparamos cada sesión, en inglés.' }
    ]
  },

  start: {
    h2: 'Pida una sesión de prueba desde La Perla',
    lede: 'La sesión gratuita empieza revisando cámara, audio y conexión. Luego el mentor le pide a su hijo que cambie una tarjeta o una pantalla sencilla, en un inglés fácil, y observa cómo piensa. Con eso le proponemos un curso; usted decide.',
    readFirst: 'Antes de reservar puede revisar, en inglés, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y el catálogo de <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Las sesiones van en directo y en inglés, con mentores radicados en la India. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de entrada', links: [
        { href: '/courses/block-coding-app-development-masterclass', label: 'Apps para el celular' },
        { href: '/courses/kids-ai-web-development-course', label: 'Mi página web' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Primer código en Python' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region' },
        { href: '/scratch-para-ninos-en-ingles', label: 'Scratch en inglés' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Con nombre, el orden no importa'
  },

  personalityCss: `
.ag-root.ag-prpe .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-prpe .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-prpe .ag-table caption { text-align: left; }
.ag-root.ag-prpe .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-prpe .ag-steps li { line-height: 1.61; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de la Provincia Constitucional del Callao (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for La Perla; Municipalidad Distrital de La Perla notes on gob.pe of 30 December 2021 and 8 June 2022; MINEDU Edades normativas; EF EPI 2025; tzdata and INACAL. The card example, the suggested projects and the milestones are our own.',
    localProject: 'A greeting-card maker for a child of 10 to 12 in La Perla, whose municipality launched its own app: card(name, message=Happy birthday, sign=your friend); passing arguments in the wrong order prints Mateo, Happy new year! From your friend.; keyword arguments fix it, and card(sign=Grandma, name=Sofía) prints Happy birthday, Sofía! From Grandma. Run with python3 -I. Lesson family: default parameters and keyword arguments.',
    requiredMentions: ['Mateo, Happy new year! From your friend.', 'Is the program wrong, or are we?', 'implementa la primera app en la provincia constitucional del callao dirigida a los vecinos de la perla', 'VECINO LA PERLA es una aplicación móvil', 'Censados en La Perla', '10,292 (55.2 %)', 'unos 1.68 por cada uno', 'Con nombre, el orden no importa', '¿Quién programa las aplicaciones que usamos en el celular?'],
    sources: [
      { claim: 'La Perla 68,082 inhabitants, censada 64,707, 4,281 aged 6 to 11, 5,183 aged 12 to 17, 15,119 aged 60+, single ages 6 to 12; neighbours Bellavista and Callao.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'La Perla households 18,661: laptop 10,292, computer 7,359, tablet 5,913, fixed internet 14,070, mobile internet 15,799, phone 18,576; Callao province shares.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'VECINO LA PERLA municipal app, Android and iOS, described by the municipality as the first in Callao (8 June 2022).', url: 'https://www.gob.pe/institucion/munilaperla/noticias/619166' },
      { claim: 'Training on technological tools for the social organisations of the district (30 December 2021).', url: 'https://www.gob.pe/institucion/munilaperla/noticias/573400' },
      { claim: 'San Miguel 189,301 inhabitants (neighbour in Lima).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'EF EPI 2025: Callao region 518 moderate; Lima city 555 high.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That the municipal app is the first in Callao as our claim: refused; quoted and labelled as the municipality\'s own claim.',
      'Any link between us and the app or the municipality: refused; the page says we have none.',
      'That a child will build an app like the municipal one: refused; the FAQ says a professional team builds that, and a child starts with a simple app.',
      'Phone numbers printed in the municipal note: left out.',
      'Income, class or strata readings of the household figures: refused.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};

// SHIP: vacaciones útiles district (ES) | Magdalena del Mar: Python con IA o a la carta, 4-5 clases/semana, casa lista | nested loops drawing waves, and the off-by-one in range()
'use strict';
// Vacaciones útiles de programación en Magdalena del Mar (ag- Spanish-language district door, Peru cluster row PE225, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Summer offer (brief section "Summer offer (owner 2026-11-10)"), reworked 10 November 2026: two paths, both live, online and
// in English: "Camino guiado" = Summer Python and AI (python-ai-kids-masterclass; teens python-complete-masterclass-teens,
// ai-ml-masterclass-teens, data-science from 14) and "A la carta" = any catalogue course (web, apps, DSA, Java, C++, games,
// Roblox, Scratch, vibe coding, maths), at 4 to 5 live classes a week, group or one to one, flexible hours; the fee for that
// pace is agreed with the mentor before starting, first class free, no summer price typed. All verified facts, sources and
// the waves lesson are kept. Our arithmetic: 10 weeks x 4 to 5 = 40 to 50 classes; 4 weeks x 4 to 5 = 16 to 20; a long
// course of 10 to 12 months at 2 a week is about 80 to 100 classes, so the summer covers about half.
// Angle: the Magdalena del Mar parent who types "vacaciones útiles magdalena del mar 2026", "talleres de verano magdalena"
// (KEYWORDS.md, autocomplete) and wonders whether an online summer works at home. Spine: is the house ready (INEI ENAHO TIC
// bulletin, II trimestre 2026: internet, computers, devices); what each age can learn in a summer; what the Municipalidad
// de Magdalena del Mar announced for its summer workshops (8 January 2024, gob.pe); who lives in the district (INEI Censos
// 2025) and why online saves the trips; an original nested-loop lesson that draws sea waves.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-magdalena-del-mar-lima/,
// quotes grepped in the raw text):
//  INEI, Boletín "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", II Trimestre 2026
//    (inei_tic_iit2026.txt): "el 64,5% de los hogares del país contaba con servicio de Internet"; "en Lima Metropolitana, el
//    84,7% de los hogares disponía del servicio"; "el 36,4% de los hogares del país disponía de al menos una computadora. Este
//    porcentaje alcanzó el 53,3% en Lima Metropolitana"; "el 84,2% de la población de 6 y más años de edad en el país hizo uso
//    de Internet"; "Lima Metropolitana, con un 92,4%"; "el de 12 a 18 años con un 92,5%"; "niños de 6 a 11 años (68,2%)"; "el
//    74,3% cuenta con una sola unidad"; "el 90,2% de la población usuaria de Internet de 6 y más años usó Internet a través de
//    un teléfono celular"; "laptop (18,9%), computadora (14,0%)".
//  mm-893023.html, Municipalidad Distrital de Magdalena del Mar, Nota de prensa "8 de enero de 2024 - 4:37 p. m.", "Con gran
//    acogida iniciamos los talleres de verano": "Época de vacaciones escolares, periodo de incertidumbre para muchos padres de
//    familia."; "talleres de kung fu, cricket, fútbol, vóley, básquet, muay thai, ajedrez, jiu-jitsu No Gi y taekwondo";
//    "talleres culturales de aprestamiento básico, danza afroperuana, pintura y reciclaje, arte y pintura, guitarra, teatro,
//    marinera, magia, kpop dance y psicomotricidad"; venues "Auditorio del Coliseo Aldo Chamochumbi, la Biblioteca Municipal
//    (parque Leoncio Prado), el Malecón Grau, Local Yungay, Complejo Deportivo Municipal (Circuitos de Playas) y Club social
//    Magdalena del mar". (The person named in the note is left out on purpose.) No newer summer note from this municipality
//    turned up in gob.pe searches on 2026-11-09.
//  INEI Censos Nacionales 2025, Lima Metropolitana tabulado (tabulados/27/poblacion): Cuadro N° 1 "DISTRITO MAGDALENA DEL MAR
//    82146" total, 79482 censada; Cuadro N° 3 "DISTRITO MAGDALENA DEL MAR 79482 3403 4725 5089 ...". Rank 30 of 43 = our ordering.
//  RM 501-2025-MINEDU Tabla 1 (checked by eye): last teaching day 18 December 2026; 2026 classes began 16 March 2026.
//    gob.pe search 2026-11-09: no 2027 norm found.
//  EF EPI 2025: Lima 555, high. Time: tzdata America/Lima UTC-5 no DST; Asia/Kolkata UTC+5:30.
// Our own calculations (python3 -I): 4725 / 79482 = 5.9 %, 5089 / 79482 = 6.4 %.
// Our own example, run with python3 -I (olas_v1.py, olas_v2.py in the src-pages folder), exact output:
//    v1 (range(alto)): "............" / "~...~...~..." / "~~..~~..~~.." / "~~~.~~~.~~~."
//    v2 (range(1, alto + 1)): "~...~...~..." / "~~..~~..~~.." / "~~~.~~~.~~~." / "~~~~~~~~~~~~"
// Lesson family: three nested loops (row, wave, step) that build a picture character by character, and the off-by-one
//    error of range() starting at 0.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const OLAS1 = [
  'alto = 4',
  'olas = 3',
  'for fila in range(alto):',
  "    linea = ''",
  '    for ola in range(olas):',
  '        for paso in range(alto):',
  '            if paso < fila:',
  "                linea = linea + '~'",
  '            else:',
  "                linea = linea + '.'",
  '    print(linea)'
].join('\n');

const SAL1 = [
  '............',
  '~...~...~...',
  '~~..~~..~~..',
  '~~~.~~~.~~~.'
].join('\n');

const OLAS2 = 'for fila in range(1, alto + 1):';

const SAL2 = [
  '~...~...~...',
  '~~..~~..~~..',
  '~~~.~~~.~~~.',
  '~~~~~~~~~~~~'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Magdalena del Mar' },
  slug: 'vacaciones-utiles-de-programacion-magdalena-del-mar-lima',
  code: 'vama',
  accent: '#0C665A',
  accentRationale: 'Vacaciones útiles de programación en Magdalena del Mar: a sea-green #0C665A for the district on the Costa Verde cliffs, bluer than the Pueblo Libre vine green and lighter than the Jesús María lawn; contrast 5.56 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Magdalena del Mar',
  title: 'Vacaciones útiles de programación en Magdalena del Mar',
  description: 'Vacaciones útiles de programación en Magdalena del Mar: Python con IA o el curso que elija, de 4 a 5 clases por semana, en vivo y en inglés, desde casa.',
  ogDescription: 'Un verano de programación en casa para Magdalena del Mar: dos caminos, cuatro o cinco clases por semana, lo que dice el INEI sobre computadoras en Lima y unas olas dibujadas con Python.',
  twitterDescription: 'Magdalena del Mar: verano de Python con IA o del curso que elija, de 4 a 5 clases por semana, en vivo y en inglés.',
  pageName: 'Vacaciones útiles de programación en Magdalena del Mar',
  webPageDescription: 'Guía para familias de Magdalena del Mar que piensan en unas vacaciones útiles de programación en línea: los dos caminos de verano (Python con IA o un curso a la carta) a cuatro o cinco clases por semana, qué equipo hace falta en casa según el boletín TIC del INEI de 2026, qué puede aprender cada edad en un verano, qué talleres de verano anunció la municipalidad, la población del distrito según los Censos Nacionales 2025 y un ejercicio de bucles anidados escrito por nosotros.',
  courseDescription: 'Verano de programación para niños de 6 a 12 años y adolescentes de Magdalena del Mar, en vivo, en línea y solo en inglés: Python con proyectos de IA o cualquier curso del catálogo, de 4 a 5 clases por semana, en grupo o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en Magdalena del Mar',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#verano', label: 'Dos caminos' },
    { href: '#casa', label: 'En casa' },
    { href: '#edades', label: 'Edades' },
    { href: '#olas', label: 'Ejemplo' },
    { href: '#empezar', label: 'Empezar' }
  ],
  eyebrow: 'Costa Verde &middot; Magdalena del Mar &middot; Verano en casa',
  h1: 'Vacaciones útiles de programación en Magdalena del Mar',
  lede: '"Época de vacaciones escolares, periodo de incertidumbre para muchos padres de familia." Así empezaba la Municipalidad de Magdalena del Mar su nota de verano de enero de 2024. Si en su casa esa duda tiene que ver con cómo aprovechar enero y febrero sin salir del distrito, aquí hay una respuesta concreta: dos caminos de programación, cuatro o cinco clases por semana con un mentor en vivo y en inglés, y lo práctico revisado (equipo, edad y conexión).',
  secondaryCta: { href: '#verano', label: 'Ver los dos caminos' },
  wa: 'Hola Modern Age Coders, vivimos en Magdalena del Mar y queremos que nuestro hijo programe este verano desde casa. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; el mar a la vista y el código en la pantalla',
  spec: [
    ['Alumnos', 'Desde los 6 años hasta el final de la secundaria'],
    ['Ritmo', 'De 4 a 5 clases por semana durante las vacaciones'],
    ['Requisito', 'Una computadora con cámara y buena conexión'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Caminos', 'Python con IA, o cualquier curso del catálogo'],
    ['Primer paso', 'Clase gratis, sin tarjeta']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Para Magdalena del Mar, Modern Age Coders propone un verano de programación en casa con dos caminos: Python con inteligencia artificial, el que sugerimos para empezar, o el curso que su hijo prefiera del catálogo, como desarrollo web, apps o algoritmos. Todo es en vivo, en línea y en inglés por videollamada, de 4 a 5 clases por semana, para chicos de 1° de primaria a 5° de secundaria. Basta una computadora con cámara y buena conexión. Grupo o individual y horario libre; la tarifa de ese ritmo se conversa con el mentor y la primera clase es gratis.',

  picks: {
    eyebrow: 'Para elegir camino',
    h2: '¿Qué curso conviene para un verano de programación en Magdalena del Mar?',
    lede: 'El primero es el camino guiado de Python con IA. Los otros dos son ideas a la carta para chicos de primaria que quieren algo que se pueda mostrar en marzo: una página web o una app.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'VAMA / 01', title: 'Camino guiado: Python con IA', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años. Programas que dibujan, como las olas de esta página, juegos de preguntas y, al final, proyectos con inteligencia artificial. Es un curso largo: el verano intensivo cubre la mitad o un poco más.' },
      { course: 'kids-ai-web-development-course', code: 'VAMA / 02', title: 'A la carta: su primera web', alt: 'Imagen del curso de desarrollo web para niños', note: 'Para primaria alta. Su hijo diseña un sitio sobre su tema favorito, lo escribe y lo publica en internet, aprendiendo qué hace cada etiqueta.' },
      { course: 'block-coding-app-development-masterclass', code: 'VAMA / 03', title: 'A la carta: apps con bloques', alt: 'Imagen del curso de creación de apps con bloques para niños', note: 'De 8 a 12 años. Una app que funciona en el celular de la familia, armada con bloques: botones, pantallas y datos que se guardan.' }
    ]
  },

  sections: [
    {
      id: 'verano',
      eyebrow: 'Dos caminos para el verano',
      h2: '¿Qué puede estudiar su hijo este verano desde Magdalena del Mar?',
      lede: 'Un camino guiado y uno a la carta. Los dos van a cuatro o cinco clases por semana, el doble o más que durante el colegio, y se toman en la misma mesa donde su hijo hace las tareas.',
      body: [
        { kind: 'two',
          leftH3: 'Camino guiado: Python con IA',
          left: [
            'Empieza con Python escrito a mano, lo justo para que su hijo sepa qué hace cada línea, y luego lo pone a trabajar en proyectos de inteligencia artificial: un programa que adivina, otro que ordena datos, otro que aprende de ejemplos.',
            'Los niños de primaria lo siguen en <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python e IA para niños</a>; los adolescentes, en Python para secundaria y luego en IA y aprendizaje automático, o en ciencia de datos desde los 14. Las herramientas de IA que usamos son siempre las permitidas para la edad del alumno.'
          ],
          rightH3: 'A la carta: cualquier curso',
          right: [
            'Si su hijo ya sabe qué quiere, lo toma al ritmo de verano: una web propia, una app con bloques o con React Native, algoritmos y estructuras de datos, Java, C++, videojuegos, Roblox, Scratch, vibe coding o matemáticas.',
            'En la clase gratis el mentor comprueba que el curso escogido sea realista para su nivel. Si no lo es, le sugiere uno previo y se lo explica a usted con franqueza.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué cabe en diez semanas de vacaciones según el tamaño del curso (estimación nuestra)', head: ['Tipo de curso', 'Clases que suele pedir', 'Qué ocurre en el verano, a 4 o 5 clases semanales'], rows: [
          ['Breve: Scratch, HTML y CSS, vibe coding de tres meses, preparación del PCEP, Orange', 'Caben dentro de 40 a 50 clases', 'Se puede terminar antes de volver al colegio'],
          ['Extenso: diseñado para 10 a 12 meses a dos clases semanales', 'Del orden de 80 a 100', 'Avanza cerca de la mitad; lo demás sigue desde marzo'],
          ['Un mes cualquiera del verano', '16 a 20 sesiones en cuatro semanas', 'El doble o más que las ocho de un mes escolar']
        ] },
        { kind: 'source', html: 'Estimación nuestra, no un calendario: diez semanas por cuatro o cinco clases dan 40 a 50; un curso de 10 a 12 meses con dos clases a la semana reúne unas 80 a 100. No prometemos terminar un curso extenso en vacaciones.' },
        { kind: 'p', mt: true, html: 'Sobre el costo: antes de empezar, el mentor le indica la tarifa del ritmo que elijan, cuatro o cinco clases semanales, y usted decide con esa cifra en la mano. Lo que verá publicado en esta página es la mensualidad estándar de ocho clases al mes. La primera clase no se cobra en ninguno de los dos caminos.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Antes de empezar',
      h2: '¿Está lista su casa para un verano de clases de programación en línea?',
      lede: 'Casi seguro que sí, si hay una computadora. El INEI midió en el segundo trimestre de 2026 que, en Lima Metropolitana, 84,7 % de hogares contaba con internet y el 53,3 % disponía de al menos una computadora. El celular, que es como se conecta la mayoría, no alcanza para programar.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Internet y computadoras en los hogares, segundo trimestre de 2026', head: ['Indicador del INEI', 'Porcentaje', 'Ámbito'], rows: [
          ['Hogares con servicio de internet', '84,7 %', 'Lima Metropolitana'],
          ['Hogares con servicio de internet', '64,5 %', 'Todo el país'],
          ['Hogares con al menos una computadora', '53,3 %', 'Lima Metropolitana'],
          ['Hogares con al menos una computadora', '36,4 %', 'Todo el país'],
          ['Hogares con computadora que tienen una sola', '74,3 %', 'Todo el país'],
          ['Personas de 6 años o más que usan internet', '92,4 %', 'Lima Metropolitana'],
          ['Niños de 6 a 11 años que usan internet', '68,2 %', 'Todo el país'],
          ['Adolescentes de 12 a 18 años que usan internet', '92,5 %', 'Todo el país'],
          ['Usuarios de internet que se conectan por celular', '90,2 %', 'Todo el país'],
          ['Usuarios de internet que se conectan por laptop', '18,9 %', 'Todo el país']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín técnico "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", II Trimestre 2026, con datos de la Encuesta Nacional de Hogares (ENAHO). Los porcentajes se copian tal como los publica el INEI, con coma decimal. Los de dispositivos se refieren a la población usuaria de internet de 6 años o más, y una persona puede usar más de un dispositivo.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que estos datos le dicen a una familia',
          left: [
            'Que en Lima conectarse ya no es el problema: la mayoría de hogares tiene internet. Lo que falta más a menudo es la computadora, y en tres de cada cuatro hogares que tienen una, es la única de la casa (74,3 % a nivel nacional, según el mismo boletín).',
            'Que los niños de 6 a 11 años usan internet bastante menos que los adolescentes. Para muchos chicos de primaria, su primera clase de programación será también la primera vez que usan una computadora con un propósito serio, y eso el mentor lo sabe.'
          ],
          rightH3: 'Si en casa hay una sola computadora',
          right: [
            'Alcanza. Las clases duran un rato fijo y a una hora acordada, así que se puede reservar ese momento para su hijo y el resto del día la usa quien la necesite.',
            'Si hay dos hermanos que quieren programar, conviene que tomen la clase en horas distintas, o que uno vaya en grupo y el otro con clases individuales en otro momento del día.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Una computadora o laptop con teclado.</strong> No tiene que ser nueva; basta con que abra el navegador sin trabarse. El teléfono sirve para ver un video, no para teclear un programa.',
          '<strong>Cámara y micrófono.</strong> El mentor necesita ver y oír a su hijo para saber si entendió, sobre todo porque la clase es en inglés.',
          '<strong>Audífonos.</strong> Aíslan el ruido de la casa y ayudan a captar cada palabra del mentor.',
          '<strong>Una conexión que aguante una videollamada.</strong> Si el internet se corta a menudo, acerque la computadora al router o pruebe antes con una llamada de prueba.',
          '<strong>Un rincón fijo.</strong> La misma mesa cada clase, lejos del televisor, con la ventana a la espalda para que la cámara no quede a contraluz.'
        ] }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Por edades',
      h2: '¿Qué puede aprender un niño de 6, de 10 o de 14 años en un verano?',
      lede: 'Cosas distintas, y todas útiles. La edad cambia la herramienta y el tamaño del proyecto, no la idea de fondo: pensar los pasos antes de pedirle algo a la computadora.',
      body: [
        { kind: 'three', cells: [
          { h3: 'De 6 a 8 años', p: 'Bloques de colores, personajes y sonidos. En un verano un niño de esta edad puede armar un cuento animado de varias escenas o un juego de laberinto sencillo. El inglés llega poco a poco, con palabras cortas que se repiten en cada clase.' },
          { h3: 'De 9 a 12 años', p: 'El salto a Python. Su hijo escribe sus primeras líneas, dibuja patrones como las olas del ejemplo de esta página y hace juegos de preguntas. Al final del verano puede explicar qué hace un bucle y por qué un programa falló.' },
          { h3: 'De 13 a 17 años', p: 'Un lenguaje completo, Python, JavaScript o Java, y un proyecto propio: una web, una pequeña app o un programa que resuelve algo de su vida diaria. Algunos adolescentes aprovechan el verano para empezar algoritmos o desarrollo web.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué camino de verano encaja con cada edad (orientación nuestra)', head: ['Edad', 'Camino guiado', 'A la carta, por ejemplo'], rows: [
          ['De 6 a 8 años', 'Bloques y Scratch como paso previo; Python llega hacia los 8 o 9', 'Apps con bloques, razonamiento, la computadora para niños'],
          ['De 9 a 12 años', 'Python e IA para niños, con dibujos, juegos y proyectos de IA', 'Su primera web, videojuegos, Roblox, vibe coding para niños'],
          ['De 13 a 17 años', 'Python para secundaria y luego IA o ciencia de datos', 'Algoritmos (DSA), web completa con React y Node, apps con React Native, Java']
        ] },
        { kind: 'p', mt: true, html: 'En la clase gratis el mentor no mira solo la edad: pide a su hijo una tarea pequeña y ve cómo la enfrenta. Un chico de 9 años que ya domina Scratch puede pasar directo a Python; uno de 12 que nunca programó puede necesitar dos o tres semanas de bloques antes. Para los detalles de cómo empezar en primaria, vea <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">nuestra página de programación para niños, en castellano</a>.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo es muy pequeño',
          left: [
            'Con 6 o 7 años, la primera semana es para acostumbrarse a la pantalla, al mentor y al inglés. Ayuda que un adulto esté cerca, no para resolver, sino para dar seguridad.',
            'A esta edad conviene que las clases no se alarguen y que el verano tenga también juego al aire libre. Una clase de programación no reemplaza una tarde en el parque.'
          ],
          rightH3: 'Si su hijo es adolescente',
          right: [
            'Puede elegir más: un curso de Python completo, de desarrollo web o de algoritmos. El verano es buen momento porque el horario escolar de secundaria no incluye un área de programación.',
            'Con los adolescentes trabajamos herramientas de IA permitidas para su edad y siempre con criterio: entender el código, no copiarlo. Para saber qué herramienta permite cada edad, vea <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> (en inglés).'
          ] }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'Magdalena del Mar',
      h2: '¿Qué talleres de verano anunció la Municipalidad de Magdalena del Mar?',
      lede: 'Talleres deportivos y culturales repartidos por el distrito. En su nota del 8 de enero de 2024, la municipalidad mencionó entre los deportivos "kung fu, cricket, fútbol, vóley, básquet, muay thai, ajedrez, jiu-jitsu No Gi y taekwondo", y entre los culturales aprestamiento básico, danza afroperuana, pintura, guitarra, teatro, marinera, magia, kpop dance y psicomotricidad.',
      body: [
        { kind: 'two',
          leftH3: 'Dónde se dictaban',
          left: [
            'La nota de 2024 los ubica en varios puntos del distrito: el Auditorio del Coliseo Aldo Chamochumbi, la Biblioteca Municipal en el parque Leoncio Prado, el Malecón Grau, el Local Yungay, el Complejo Deportivo Municipal en el Circuito de Playas y el Club social Magdalena del Mar.',
            'Es la nota de verano más reciente de esta municipalidad que encontramos en gob.pe. Para el verano 2027, los horarios, cupos y condiciones hay que consultarlos directamente con la municipalidad.'
          ],
          rightH3: 'Dónde encaja la programación',
          right: [
            'En esa lista no figura ningún taller de programación. Un chico de Magdalena puede ir por la mañana a su taller de vóley o de guitarra y, por la tarde, programar en casa.',
            'Modern Age Coders es ajena a la Municipalidad de Magdalena del Mar y a sus talleres. Ofrecemos clases en línea que se suman a lo que su hijo ya hace en el distrito.'
          ] },
        { kind: 'source', html: 'Fuente: nota de prensa "Con gran acogida iniciamos los talleres de verano" del 8 de enero de 2024, publicada por la propia Municipalidad Distrital de Magdalena del Mar en gob.pe/munimagdalena-lima y guardada por nosotros el 9 de noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Según los Censos Nacionales 2025 del INEI, Magdalena del Mar tiene 82,146 habitantes. Entre sus 79,482 personas censadas hay 4,725 niños de 6 a 11 años y 5,089 adolescentes de 12 a 17, es decir, el 5.9 % y el 6.4 % de los censados (cálculo nuestro con el Cuadro N.° 3). Por número de habitantes ocupa el lugar 30 entre los 43 distritos de Lima Metropolitana; ese orden lo armamos nosotros con el Cuadro N.° 1.' },
        { kind: 'p', html: 'Magdalena del Mar está entre San Miguel, Pueblo Libre, Jesús María y San Isidro, frente al mar. Aun en un distrito compacto, cualquier actividad fuera de casa pide ir, volver y que alguien acompañe a los más pequeños. Una clase en línea se toma en el mismo cuarto donde su hijo hace las tareas, y el tiempo que no se gasta en traslados queda para el taller, la playa o el descanso.' }
      ]
    },
    {
      id: 'olas',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo dibuja un niño el mar con Python?',
      lede: 'Con bucles dentro de bucles. Este ejercicio es nuestro, para chicos de 9 a 12 años: un programa que dibuja olas con el símbolo <code>~</code>, fila por fila, como si la marea subiera. Y que en su primera versión tiene un error escondido.',
      body: [
        { kind: 'code', label: 'Versión 1: las olas', lang: 'Python', code: OLAS1, note: 'Tres bucles, uno dentro de otro: <code>fila</code> recorre las filas del dibujo, <code>ola</code> repite el mismo dibujo tres veces a lo ancho y <code>paso</code> decide, carácter por carácter, si va agua (<code>~</code>) o aire (<code>.</code>).' },
        { kind: 'code', label: 'Lo que dibuja la versión 1', lang: 'Salida', code: SAL1, note: 'Copiado sin cambios de la pantalla después de correr el programa en Python 3. La primera fila no tiene ni una gota de agua y la última nunca se llena.' },
        { kind: 'code', label: 'Versión 2: un solo cambio', lang: 'Python', code: OLAS2, note: 'Cambia solo la línea del primer bucle. <code>range(alto)</code> cuenta 0, 1, 2, 3; <code>range(1, alto + 1)</code> cuenta 1, 2, 3, 4.' },
        { kind: 'code', label: 'Lo que dibuja la versión 2', lang: 'Salida', code: SAL2, note: 'La misma ejecución con el cambio: ahora la marea empieza con una gota por ola y termina con el mar lleno.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Dibujar en papel cuadriculado.</strong> Antes de programar, el chico pinta las olas a mano, fila por fila, y cuenta cuántas tildes van en cada una. Así sabe qué debería salir.',
          '<strong>Predecir.</strong> El mentor pregunta en inglés: "How many tildes in the first row?" Casi todos dicen una, porque es lo que dibujaron. El programa dice cero.',
          '<strong>Encontrar la causa.</strong> El chico imprime el valor de <code>fila</code> en cada vuelta y descubre que empieza en 0. Es el error más común en programación: contar desde cero cuando se quería contar desde uno.',
          '<strong>Corregir con un solo cambio.</strong> Escribe <code>range(1, alto + 1)</code> y comprueba que la última fila queda llena: <code>~~~~~~~~~~~~</code>.',
          '<strong>Hacer su propio mar.</strong> El reto es cambiar <code>alto</code> y <code>olas</code> para un mar más grande, o cambiar los símbolos para dibujar otra cosa: un edificio, una escalera, una ola que baja.'
        ] },
        { kind: 'p', mt: true, html: 'El dibujo es lo de menos. Lo que el chico se lleva es una costumbre: decir qué espera ver antes de ejecutar, comparar con lo que salió y buscar la causa en lugar de cambiar cosas al azar. Esa costumbre es la que enseñamos en cada clase, y es justo lo que no aprende quien pega una respuesta sin entenderla, aunque se la haya dado una herramienta de inteligencia artificial.' }
      ]
    },
    {
      id: 'empezar',
      eyebrow: 'Cómo empezar',
      h2: '¿Cómo se empieza un verano de programación desde Magdalena del Mar?',
      lede: 'Con una clase gratis y sin fecha de inicio obligada: su hijo empieza la semana que usted decida, en el camino que elija, y el ritmo de cuatro o cinco clases semanales se acuerda en ese momento.',
      body: [
        { kind: 'ol', items: [
          '<strong>Revise el equipo.</strong> Con la lista de más arriba, asegúrese de que la computadora, la cámara y la conexión funcionan.',
          '<strong>Elija un momento del día.</strong> Uno en que su hijo esté descansado y la casa tranquila. Si va a un taller del distrito, que no choquen.',
          '<strong>Reserve la clase gratis.</strong> Las horas que ofrece el formulario ya están en el reloj peruano; el mentor se conecta desde la India, cuyo reloj adelanta al peruano en diez horas y media en cualquier mes.',
          '<strong>Decida camino, formato y ritmo.</strong> Tras la clase gratis le recomendamos Python con IA o un curso a la carta, grupo o individual, y cuatro o cinco clases por semana; el mentor le dice la tarifa de ese ritmo antes de empezar.',
          '<strong>Revise a mitad del verano.</strong> Pida a su hijo que le muestre su proyecto. Si puede explicarlo, va bien.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'El calendario escolar',
          left: [
            'Según la RM 501-2025-MINEDU, el último día de clases de 2026 es el viernes 18 de diciembre; ese año escolar había arrancado el lunes 16 de marzo de 2026.',
            'Al 9 de noviembre de 2026 no encontramos en gob.pe la norma del año escolar 2027. Cuando se publique, la fecha de vuelta a clases será la que fije esa norma y la que comunique su colegio.'
          ],
          rightH3: 'Las horas en dos relojes',
          right: [
            'Algunos ejemplos de conversión: las 8:00 a. m. en Magdalena son las 6:30 p. m. en la India; las 2:00 p. m., las 12:30 a. m. del día siguiente; las 6:00 p. m., las 4:30 a. m. del día siguiente.',
            'Perú usa UTC-5 y la India UTC+5:30 durante todo el año, sin horario de verano (base tzdata; hora oficial del INACAL), por eso la diferencia no cambia.'
          ] },
        { kind: 'p', mt: true, html: 'Un recordatorio sobre el idioma: enseñamos exclusivamente en inglés. El EF EPI 2025 coloca a Lima en el nivel alto, con 555 puntos, y para un chico de la ciudad un verano entero hablando inglés para programar es práctica real del idioma. Si quiere ver nuestra oferta para colegios bilingües, está en <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>; y la página nacional, <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a>, reúne lo que ofrecemos en todo el país.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Seguimiento',
    h2: '¿Cómo va avanzando su hijo durante el verano?',
    lede: 'Cinco hitos nuestros, pensados para que la familia pueda verlos sin saber programar.',
    table: { caption: 'Hitos de un verano de programación en casa (nuestros)', head: ['Hito', 'Cuándo suele llegar', 'Lo que usted puede ver'], rows: [
      ['1. Se conecta solo', 'primera o segunda semana', 'abre la clase y su proyecto sin ayuda'],
      ['2. Responde en inglés', 'tercera o cuarta semana', 'contesta al mentor con frases cortas, aunque mezcle idiomas'],
      ['3. Predice', 'hacia la mitad del verano', 'dice qué va a pasar antes de ejecutar su programa'],
      ['4. Encuentra un error', 'en la segunda mitad', 'explica por qué algo no funcionaba, como la fila vacía de las olas'],
      ['5. Presenta su proyecto', 'al final del verano', 'le muestra a la familia algo que hizo él y cómo funciona']
    ] },
    left: { h3: 'Para la familia', ps: [
      'No hace falta entender el código para acompañar. Basta con preguntar qué hizo hoy y pedirle que se lo muestre.',
      'Si una semana su hijo se frustra, es normal: suele coincidir con un concepto nuevo, como los bucles dentro de bucles. Pasa pronto.'
    ] },
    right: { h3: 'Para su hijo', ps: [
      'Antes de correr el programa, diga en voz alta qué espera ver.',
      'Si sale algo raro, no cambie todo: imprima el valor de una variable y mire qué pasa.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: 'Otros cursos para el verano en casa',
    lede: 'Más opciones para el camino a la carta, en vivo y en inglés, con mentor fijo y el mismo ritmo de verano.',
    bands: [
      { num: 'I', h3: 'Los más pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'VAMA / INICIO / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar antes de programar', blurb: 'Series, secuencias y retos de lógica antes de la primera línea de código.' },
        { code: 'VAMA / INICIO / 02', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'De mover un gato a terminar un juego con niveles.' },
        { code: 'VAMA / INICIO / 03', slug: 'microsoft-office-kids-mastery', title: 'La computadora para niños', blurb: 'Word, PowerPoint y Excel para quien recién se sienta frente a una.' }
      ] },
      { num: 'II', h3: 'Primaria alta', sub: 'De 9 a 12 años', courses: [
        { code: 'VAMA / ALTA / 01', slug: 'game-development-masterclass-for-kids', title: 'Crear videojuegos', blurb: 'Del juego que ya conoce al que él mismo diseña, en Scratch, Roblox y Minecraft.' },
        { code: 'VAMA / ALTA / 02', slug: 'ai-literacy-for-kids-course', title: 'Qué es la inteligencia artificial', blurb: 'Cómo aprende una máquina, explicado con ejemplos, desde los 8.' },
        { code: 'VAMA / ALTA / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Crear con ayuda de la IA', blurb: 'Juegos con apoyo de la IA, revisando y entendiendo cada paso.' }
      ] },
      { num: 'III', h3: 'Adolescentes', sub: 'De 13 a 17 años', courses: [
        { code: 'VAMA / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python para secundaria', blurb: 'De cero a programas propios, con proyectos en cada etapa.' },
        { code: 'VAMA / SEC / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Web completa con React y Node', blurb: 'La parte que se ve y la que no, en un mismo proyecto.' },
        { code: 'VAMA / SEC / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding para adolescentes', blurb: 'Python, web e IA, aprendiendo a revisar lo que propone la máquina.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo trabajamos',
    h2: '¿Cómo son las clases en vivo desde casa?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes de que el calor y la playa llamen.' },
      { time: 'A media tarde', l: 'Después del taller del distrito o del almuerzo.' },
      { time: 'A la hora que diga usted', l: 'En clases individuales, el horario es suyo.' }
    ],
    cells: [
      { h3: 'Mentor de cabecera', p: 'Su hijo trabaja siempre con la misma persona durante el curso.' },
      { h3: 'Inglés con apoyo visual', p: 'Lo que se dice también se ve en la pantalla compartida.' },
      { h3: 'Manos en el teclado', p: 'Escribe su hijo; el mentor pregunta y orienta.' },
      { h3: 'Pequeñas metas', p: 'Cada etapa cierra con un programa terminado.' },
      { h3: 'La familia al tanto', p: 'Un aviso breve de qué se vio y qué viene.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte alumnos de edad similar, o uno solo.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos',
  projectsLede: 'Empiezan con olas de tildes y terminan, con tiempo, en aplicaciones de verdad. Aquí hay algunos proyectos de alumnos mayores; la galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas reales de Google, escritas por familias y alumnos en inglés y mostradas sin traducir.',

  fees: {
    h2: 'El costo de un verano de programación',
    lede: 'Lo que aparece aquí es la mensualidad estándar del año escolar, calculada para ocho clases al mes. El verano va más rápido, cuatro o cinco clases por semana, y su tarifa se fija con el mentor antes de la primera clase de ese ritmo. El cobro es con tarjeta y en dólares estadounidenses; su banco hace la conversión a soles el día del cargo, así que el monto final puede variar un poco según el tipo de cambio.',
    free: ['Una clase de prueba gratis', 'Un consejo honesto sobre por dónde empezar', 'No se pide tarjeta'],
    group: ['Quince a veinte alumnos de edad similar', 'El mismo mentor hasta el final del curso', 'Mensualidad mostrada: ocho clases', 'Verano a 4 o 5 clases por semana'],
    one: ['Solo su hijo con el mentor', 'Contenido a su medida', 'Horario elegido por usted']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Magdalena del Mar: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Nuestro único idioma de enseñanza es el inglés, siempre en vivo y en línea, y eso es una ventaja para su hijo: practica el idioma hablando con un mentor mientras programa. El mentor habla pausado, muestra cada idea en la pantalla y espera la respuesta sin apurar. En el EF EPI 2025, Lima figura con 555 puntos, dentro de la franja alta.' },
      { q: '¿Necesito una computadora o sirve el celular?', a: 'Hace falta una computadora o laptop con teclado, cámara y micrófono. El celular sirve para conectarse a internet, pero no para escribir código con comodidad. Según el INEI, en el segundo trimestre de 2026 el 53,3 % de los hogares de Lima Metropolitana tenía al menos una computadora.' },
      { q: '¿Tenemos una sola computadora en casa: alcanza?', a: 'Sí. La clase dura un tiempo fijo a una hora acordada, así que basta con reservar ese momento. Si dos hermanos quieren programar, pueden tomar clases en horarios distintos.' },
      { q: '¿Qué pasa si se corta el internet durante la clase?', a: 'Su hijo vuelve a entrar al mismo enlace y el mentor retoma donde se quedaron. Si los cortes son frecuentes, conviene acercar la computadora al router o usar un cable.' },
      { q: '¿Desde qué edad pueden participar?', a: 'Desde los 6 años, con bloques. Entre los 9 y los 12 la mayoría escribe Python, y los adolescentes pueden elegir Python, web, Java o algoritmos.' },
      { q: '¿Cuál es el horario?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 8:00 a. m. en Magdalena del Mar son las 6:30 p. m. en la India.' },
      { q: '¿La municipalidad tiene talleres de programación?', a: 'En su nota de verano del 8 de enero de 2024, la Municipalidad de Magdalena del Mar anunció talleres deportivos y culturales, sin programación. Entre nosotros y la municipalidad no hay ningún vínculo; lo nuestro ocurre por internet y no compite con el taller presencial.' },
      { q: '¿Cuántas clases a la semana tiene el verano?', a: 'Entre cuatro y cinco, en vivo, durante las semanas de vacaciones que usted elija. Diez semanas así suman de 40 a 50 clases (cuenta nuestra): un curso breve como Scratch o HTML y CSS se termina, y uno extenso avanza cerca de la mitad y sigue en marzo a dos clases por semana.' },
      { q: '¿Tiene que ser Python o puede elegir otro curso?', a: 'Puede elegir. Python con IA es el camino que sugerimos, pero su hijo puede tomar a ritmo de verano cualquier curso del catálogo: desarrollo web, apps, algoritmos, Java, C++, videojuegos, Roblox, Scratch, vibe coding o matemáticas.' },
      { q: '¿Cuánto cuesta el verano y cómo se paga?', a: 'La tarifa de cuatro o cinco clases semanales se acuerda con el mentor antes de empezar; aquí solo figura la mensualidad estándar de ocho clases. Se paga con tarjeta, en dólares estadounidenses, y el cambio a soles lo aplica su banco. La clase de prueba es gratis.' },
      { q: '¿Recibe algún certificado?', a: 'Cuando completa un curso, le damos una constancia de finalización firmada por Modern Age Coders. Es nuestra, no del MINEDU; no cuenta como calificación del colegio, y ningún colegio nos tiene como socio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para leer después',
    h2: 'Más páginas para familias de Magdalena del Mar',
    lede: 'Algunas en castellano, otras en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en castellano', p: 'Nuestra guía en castellano para padres de chicos de primaria, con un juego de colores en Python.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Visión general de lo que hacemos en el Perú, en inglés.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para alumnos de colegios donde ya se estudia en inglés.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Las edades mínimas de las herramientas de IA más conocidas.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'La inteligencia artificial contada para niños.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos de alumnos de varios países.' }
    ]
  },

  start: {
    h2: 'Pida la clase gratis del verano',
    lede: 'Es una primera sesión corta y relajada: el mentor se presenta con frases fáciles en inglés, invita a su hijo a dibujar algo con código o a mover un personaje y se fija en cómo razona. Después le sugiere el camino, guiado o a la carta, el formato y el ritmo de verano con su tarifa, sin obligación de seguir.',
    readFirst: 'Lecturas en inglés por si las quiere antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> (el método) y <a class="ag-inline-link" href="/courses">All courses</a> (el catálogo).',
    note: 'Recuerde: la enseñanza es en inglés, en vivo y por internet, a cargo de mentores en la India. Para consultas por WhatsApp puede usar el castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA para primaria' },
        { href: '/courses/kids-ai-web-development-course', label: 'Mi primera web' },
        { href: '/courses/block-coding-app-development-masterclass', label: 'Apps con bloques' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/ai-tools-age-guide', label: 'Edades de la IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Contar desde uno, no desde cero'
  },

  personalityCss: `
.ag-root.ag-vama .ag-hero h1 { letter-spacing: -0.012em; max-width: 20ch; }
.ag-root.ag-vama .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-vama .ag-table td:nth-child(2) { font-weight: 600; }
.ag-root.ag-vama .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-vama .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Boletín TIC II trimestre 2026 (ENAHO); Municipalidad Distrital de Magdalena del Mar note of 8 January 2024 on gob.pe; INEI Censos Nacionales 2025 (Lima Metropolitana tabulado, Cuadros N.° 1 and 3); RM 501-2025-MINEDU Tabla 1 (checked by eye) and the gob.pe search for a 2027 norm on 9 November 2026; EF EPI 2025; tzdata and INACAL. The two summer paths as presented, the course-size table, the path-by-age table, the waves lesson, the home checklist, the age guide and the milestones are our own.',
    localProject: 'Waves drawn with three nested loops for a child of 9 to 12 in Magdalena del Mar, the seaside district: Version 1 uses range(alto) and prints an empty first row (............) and never fills the last; Version 2 uses range(1, alto + 1) and ends with a full row (~~~~~~~~~~~~). Run with python3 -I. Lesson family: nested loops building a picture character by character, and the off-by-one start of range().',
    requiredMentions: ['~~~~~~~~~~~~', 'How many tildes in the first row?', 'range(1, alto + 1)', 'el 53,3 % disponía de al menos una computadora', 'Hogares con computadora que tienen una sola', 'Época de vacaciones escolares, periodo de incertidumbre para muchos padres de familia.', 'kung fu, cricket, fútbol, vóley, básquet, muay thai, ajedrez, jiu-jitsu No Gi y taekwondo', 'ocupa el lugar 30 entre los 43 distritos', 'Contar desde uno, no desde cero', '4,725 niños de 6 a 11 años'],
    sources: [
      { claim: 'Households with internet (Lima Metropolitana 84.7 %, Peru 64.5 %) and with a computer (Lima Metropolitana 53.3 %, Peru 36.4 %), one computer only 74.3 %, internet use 92.4 % in Lima, 68.2 % of children 6 to 11, 92.5 % of 12 to 18, devices 90.2 % phone and 18.9 % laptop (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Summer workshops of 8 January 2024: sports and cultural lists, venues across the district.', url: 'https://www.gob.pe/institucion/munimagdalena-lima/noticias/893023-con-gran-acogida-iniciamos-los-talleres-de-verano' },
      { claim: 'Magdalena del Mar 82,146 total, 79,482 censada, 4,725 aged 6 to 11 and 5,089 aged 12 to 17.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: '2026 school year: teaching weeks from 16 March to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Newer municipal summer programmes (2025, 2026 or 2027): none found on gob.pe on 9 November 2026; the page cites only the 8 January 2024 note and sends families to the municipality.',
      'Naming the athlete mentioned in the municipal note: left out (a private person, not needed).',
      'The INEI split of programming skills by sex: not used.',
      'Any link with the Municipalidad de Magdalena del Mar: none; the page says so.',
      'A typed summer price, a common start date or finishing a long course in one summer: refused; the 4 to 5 classes a week fee is agreed with the mentor and the class counts are labelled ours.',
      'Traffic or commute figures: none used.',
      'Spanish-language teaching: refused; English only, in the capsule and an FAQ.'
    ]
  }
};

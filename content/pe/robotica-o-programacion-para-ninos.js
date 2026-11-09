// SHIP: market (es explainer) | ¿robótica o programación para niños? cómo decidir, qué hizo el MINEDU y qué preguntar a un taller | hysteresis: two thresholds stop a noisy light-sensor decision from flickering
'use strict';
// Robótica o programación para niños (ag- Spanish-language explainer, Peru cluster row PE160, P4, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.7: robotics pages are explainers; never imply a kit);
// writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online
// in english". Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Search (KEYWORDS.md section 2): "robótica para niños" (364 depth, the Peruvian parent's default word), "robotica y programacion
// para niños", "clases de robotica y programacion para niños", "robotica e inteligencia artificial para niños", "kit de robotica y
// programacion para niños", "robotica para niños lima / arequipa / los olivos"; PAA "¿Robótica o programación, qué es mejor?".
// Angle (deeper than the live siblings, which give robotics one paragraph): a decision guide. What each discipline is (sense,
// decide, act); MINEDU's own robotics record in one dated table; a decision table by child profile; six questions to ask any
// robotics workshop; the part of robotics that is pure programming, shown with noisy sensor data; robotics and AI (Hackathon 2025,
// COAR Lima 2023); what we teach and what we never sell.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/robotica-o-programacion-para-ninos/):
//  MINEDU DITE, "Robótica Educativa" PDF (FACTS 52 to 54; minedu-robotica-pdf/text.txt; undated, mentions plans "para el 2025"):
//    "la robótica en educación no es el objetivo, es el medio."; "desarrollar competencias del currículo de educación básica de forma
//    transversal, mediante el desarrollo de proyectos tecnológicos de enfoque STEAM"; "desde el año 1996 con el proyecto Infoescuela,
//    que llegó a más de 25 Instituciones Educativas a nivel nacional"; "en los años 2009 y 2010, el MINEDU dota de Kits LEGO Wedo a casi
//    el 100% de Instituciones Educativas de Gestión Pública de Educación Primaria"; "En el año 2022 se desarrolló un curso virtual
//    autoinstructivo de robótica educativa"; participants "4,574" and "3,711", "Total 8,285" (MINEDU's own total); "para el 2025 se
//    tiene previsto un curso virtual de robótica educativa con IA"; "desde el año 2022 organiza la Hackathon en “Robótica Educativa y
//    Tecnologías Digitales”"; "la C es para 34 equipos de estudiantes de todo el país, donde diseñan, construyen y programan diversos
//    prototipos robóticos".
//  MINEDU press note, Hackathon 2025 (FACTS 48, 49; n-hackathon2025): "proyectos de IA y robótica"; "entre 2023 y 2025, la presencia
//    de estudiantes mujeres creció en 28 %".
//  MINEDU press note, 2 October 2023 (FACTS 123; n-coar-robotica): COAR Lima 4° grado team, first place national category
//    "Futuros Innovadores-Senior", "WAI-FLY, un dron impreso en 3D equipado con una inteligencia artificial que evita la congestión
//    marítima mediante la detección y el conteo de barcos"; World Robot Olympiad 2023 in Panamá. (Student names not printed.)
//  CNEB (FACTS 32, 33, 38): competency 28 transversal; Ciencia y Tecnología "Diseña y construye soluciones tecnológicas para resolver
//    problemas".
//  MINEDU Edades normativas (FACTS 14, 15). INEI TIC II Trimestre 2026 (MARKET 1.4): 36.4% of homes with a computer.
//  EF EPI 2025 (MARKET 1.3): Lima 555 high. Time: tzdata (facts-geo/timezone.tsv).
// Our own example, run with python3 -I (sensor.py in the src-pages folder; the readings are invented by us):
//    one threshold at 50: 11
//    two thresholds, 40 and 55: 3
// Lesson family: hysteresis. A noisy sensor, one threshold that flips the decision eleven times, and a dead band between two
// thresholds that leaves three decisions (the first one is the start).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Our invented light-sensor readings (0 = black tape, 100 = white floor), one every tenth of a second.',
  'readings = [62, 47, 53, 49, 51, 46, 54, 31, 28, 44, 30, 27, 58, 61, 43, 66]',
  '',
  'def one_threshold(values, limit):',
  '    state = None',
  '    switches = 0',
  '    for v in values:',
  "        new = 'dark' if v < limit else 'light'",
  '        if new != state:',
  '            switches = switches + 1',
  '            state = new',
  '    return switches',
  '',
  'def two_thresholds(values, low, high):',
  "    state = 'light'",
  '    switches = 1',
  '    for v in values:',
  "        if state == 'light' and v < low:",
  "            state = 'dark'",
  '            switches = switches + 1',
  "        elif state == 'dark' and v > high:",
  "            state = 'light'",
  '            switches = switches + 1',
  '    return switches',
  '',
  "print('one threshold at 50:', one_threshold(readings, 50))",
  "print('two thresholds, 40 and 55:', two_thresholds(readings, 40, 55))"
].join('\n');

const OUT = [
  'one threshold at 50: 11',
  'two thresholds, 40 and 55: 3'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: '¿Robótica o programación para niños?' },
  slug: 'robotica-o-programacion-para-ninos',
  code: 'rop',
  accent: '#894C06',
  accentRationale: 'Robótica o programación para niños: a burnt copper #894C06, the colour of motor windings and circuit traces, warm enough for a parents\' guide and far from the greens and teals of the game pages; contrast 5.50 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: '¿Robótica o programación para niños?',
  title: '¿Robótica o programación para niños? Guía para padres en Perú',
  description: 'Robótica o programación para niños en Perú: en qué se diferencian, qué hizo el MINEDU desde 1996 y cómo decidir. Enseñamos programación, en vivo y en inglés.',
  ogDescription: 'Un robot sin programa no hace nada. Qué aporta cada camino, el historial de robótica educativa del MINEDU, seis preguntas para un taller y un sensor que no deja de dudar.',
  twitterDescription: 'Robótica o programación: una guía honesta para familias peruanas. Nosotros enseñamos programación, sin kits, en vivo y en inglés.',
  pageName: '¿Robótica o programación para niños? Guía para Perú',
  webPageDescription: 'Guía para madres y padres en Perú que dudan entre robótica y programación para sus hijos: qué enseña cada una, qué dice y qué hizo el MINEDU con la robótica educativa desde 1996, cómo decidir según el niño, seis preguntas para hacer a un taller de robótica, la parte de la robótica que es pura programación explicada con un sensor de luz, y robótica con inteligencia artificial.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años en todo el Perú, dictadas solo en inglés por mentores desde la India: la lógica que mueve a cualquier robot (sensores, decisiones, bucles y estados) programada en la computadora, sin hardware ni kits, en grupo o en clases individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Robótica o programación',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#diferencia', label: 'Diferencia' },
    { href: '#minedu', label: 'MINEDU' },
    { href: '#decidir', label: 'Cómo decidir' },
    { href: '#preguntas', label: 'Preguntas al taller' },
    { href: '#ejemplo', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Guía para padres &middot; Robótica y programación',
  h1: '¿Robótica o programación para niños? Cómo decidir en Perú',
  lede: 'En el Perú, cuando una familia piensa en tecnología para sus hijos, la primera palabra que escribe suele ser "robótica". Tiene sentido: un robot se toca, se mueve y se puede mostrar a los abuelos. Pero un robot sin programa es un juguete quieto. Esta guía le ayuda a decidir qué conviene a su hijo, y le dice con franqueza qué hacemos nosotros y qué no.',
  secondaryCta: { href: '#decidir', label: 'Ir a la tabla para decidir' },
  wa: 'Hola Modern Age Coders, dudamos entre robótica y programación para nuestro hijo o hija. ¿Podemos reservar una clase de prueba de programación en inglés, gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; programación, sin venta de kits',
  spec: [
    ['Qué enseñamos', 'Programación: la lógica que mueve a cualquier robot'],
    ['Qué no hacemos', 'No vendemos ni enviamos robots ni piezas'],
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Equipo', 'Una computadora con internet, nada más'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés claro, con mentor en vivo desde la India']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'La robótica une tres cosas: armar una máquina, ponerle sensores y motores, y programarla. La programación es solo la tercera, pero es la que decide lo que el robot hace. Modern Age Coders enseña programación, no robótica con piezas: clases en vivo, por videollamada y en inglés, con mentores desde la India, para niños de 6 a 12 años. Su hijo aprende la lógica de cualquier robot (leer un sensor, decidir, repetir) en la computadora de casa, en grupo o uno a uno y a la hora que elija la familia.',

  picks: {
    eyebrow: 'Programación para niños',
    h2: 'Tres cursos para aprender la lógica que mueve a un robot',
    lede: 'Ninguno usa piezas físicas. Los tres enseñan a dar instrucciones precisas, a leer datos y a decidir, que es lo que un robot hace por dentro.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'ROP / 01', title: 'Bloques: secuencia y decisión', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años. Los mismos bloques de "repetir", "si" y "esperar" que usan muchos kits escolares, aplicados a juegos y apps en la pantalla.' },
      { course: 'python-ai-kids-masterclass', code: 'ROP / 02', title: 'Python, sensores simulados e IA', alt: 'Imagen del curso de Python con inteligencia artificial para niños', note: 'De 9 a 12 años. Programas que leen números, deciden y aprenden de ejemplos, como el sensor de luz de esta página.' },
      { course: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', code: 'ROP / 03', title: 'Inventar y presentar un proyecto', alt: 'Imagen del curso de preparación para hackathon para niños', note: 'De 8 a 12 años. Doce semanas para pasar de una idea a un proyecto de software que el niño presenta y defiende, con su propio código.' }
    ]
  },

  sections: [
    {
      id: 'diferencia',
      eyebrow: 'La diferencia',
      h2: '¿Qué diferencia hay entre robótica y programación para niños?',
      lede: 'La robótica es construir una máquina que percibe y actúa; la programación es escribir las instrucciones que le dicen qué hacer con lo que percibe. Toda la robótica necesita programación, pero la programación no necesita un robot.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Percibir', p: 'Un sensor mide algo del mundo: luz, distancia, un botón apretado. Es hardware. En robótica el niño lo conecta; en programación lo recibe como un número.' },
          { h3: 'Decidir', p: 'Un programa compara ese número con una regla y elige qué hacer. Aquí está casi toda la inteligencia del robot, y es programación pura.' },
          { h3: 'Actuar', p: 'Un motor gira, una luz se enciende. Otra vez hardware. Pero cuánto gira y cuándo se apaga lo vuelve a decidir el programa.' }
        ] },
        { kind: 'p', mt: true, html: 'Visto así, la pregunta "¿robótica o programación?" se vuelve más sencilla. Un curso de robótica enseña las tres partes, con más tiempo dedicado a armar y conectar. Un curso de programación se concentra en la del medio, la que se lleva a cualquier otro aparato: un robot, un videojuego, una app o una casa inteligente. Nosotros enseñamos esa parte del medio, y somos claros: no armamos robots, no vendemos piezas y no enviamos nada a su casa.' },
        { kind: 'p', html: 'Esto no es una crítica a la robótica. Hay niños que necesitan tocar para entender, y para ellos un buen taller presencial es una gran experiencia. Lo que queremos es que usted elija sabiendo qué compra en cada caso. Para una mirada más amplia a la programación en toda la primaria, vea nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'minedu',
      eyebrow: 'Robótica en la escuela peruana',
      h2: '¿Qué dice y qué ha hecho el MINEDU con la robótica educativa?',
      lede: 'El MINEDU usa la robótica en los colegios desde hace casi tres décadas, y su propia dirección de innovación tecnológica resume su enfoque en una frase: "la robótica en educación no es el objetivo, es el medio."',
      body: [
        { kind: 'table', numCols: [], caption: 'La robótica educativa del MINEDU, según su Dirección de Innovación Tecnológica en Educación', head: ['Año', 'Qué ocurrió', 'Cómo lo describe el MINEDU'], rows: [
          ['1996', 'Primer proyecto de robótica educativa', 'Infoescuela, "que llegó a más de 25 Instituciones Educativas a nivel nacional"'],
          ['2009 y 2010', 'Entrega de kits a colegios públicos de primaria', 'Kits LEGO WeDo a "casi el 100%" de las instituciones públicas de primaria'],
          ['Desde 2009', 'Formación de docentes', 'Diversos talleres presenciales para aprovechar esos recursos'],
          ['2022', 'Curso virtual para docentes con el kit LEGO WeDo', 'Dos grupos de 4,574 y 3,711 participantes, total 8,285'],
          ['Desde 2022', 'Hackathon de Robótica Educativa y Tecnologías Digitales', 'Categoría C para 34 equipos de estudiantes que "diseñan, construyen y programan" prototipos'],
          ['2025', 'Curso previsto para docentes', '"un curso virtual de robótica educativa con IA"']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Dirección de Innovación Tecnológica en Educación (DITE), presentación "Robótica Educativa" publicada en gob.pe; el documento no muestra fecha y habla de lo previsto "para el 2025". El total de 8,285 es el que imprime el propio MINEDU. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Dos ideas de ese documento son útiles para una familia. La primera: el MINEDU introduce la robótica para desarrollar competencias del currículo "de forma transversal, mediante el desarrollo de proyectos tecnológicos de enfoque STEAM". Es decir, el robot es una excusa para aprender ciencia, matemática y tecnología, no una materia en sí. La segunda: incluso en la categoría estudiantil de su Hackathon, el verbo que cierra la lista es "programan". Sin código, el prototipo no compite.' },
        { kind: 'p', html: 'En el Currículo Nacional (CNEB) tampoco hay un área de robótica ni de programación. Lo más cercano es la competencia de Ciencia y Tecnología "Diseña y construye soluciones tecnológicas para resolver problemas", y la competencia digital 28, que es transversal y no tiene horas propias. Por eso lo que su hijo vea de robótica en el colegio depende mucho de cada institución.' }
      ]
    },
    {
      id: 'decidir',
      eyebrow: 'Cómo decidir',
      h2: '¿Robótica o programación: qué es mejor para mi hijo?',
      lede: 'Ninguna gana en abstracto. Depende de cómo aprende su hijo, de qué tiene en casa y de qué quiere lograr. Esta tabla resume cómo lo vemos nosotros, que enseñamos programación y no robótica.',
      body: [
        { kind: 'table', numCols: [], caption: 'Robótica o programación según el perfil del niño (nuestra guía, no una norma)', head: ['Si su hijo...', 'Suele convenir', 'Por qué'], rows: [
          ['Necesita tocar y armar para concentrarse', 'Un taller de robótica presencial', 'El aprendizaje entra por las manos; la pantalla sola lo aburre'],
          ['Ya pasa horas creando en Roblox, Minecraft o Scratch', 'Programación', 'Ya tiene el interés; le falta la lógica escrita'],
          ['Vive lejos de un taller o la familia no puede llevarlo', 'Programación en línea', 'Solo hace falta la computadora de la casa'],
          ['Quiere entender cómo "piensa" una máquina', 'Programación, luego IA', 'La decisión de un robot es código, y la IA también'],
          ['Tiene 6 o 7 años y aún no lee con soltura', 'Bloques sencillos o razonamiento sin pantalla', 'Ni el robot ni el código escrito tienen prisa'],
          ['Ya programa y quiere ver su código mover algo real', 'Robótica como segundo paso', 'Llegará al taller sabiendo lo más difícil']
        ] },
        { kind: 'source', html: 'Tabla de elaboración propia de Modern Age Coders. No la propone el MINEDU ni ninguna institución, y la escribimos sabiendo que nosotros solo enseñamos programación.' },
        { kind: 'p', mt: true, html: 'Hay un argumento práctico que muchas familias pasan por alto. Un kit es un objeto: se presta, se pierde una pieza, se agotan las pilas, queda en el colegio. La lógica de programación, en cambio, se lleva a cualquier parte. Un niño que entiende sensores, condiciones y bucles puede programar el robot que le toque mañana, sea de la marca que sea. Por eso, si su hijo ya está en un taller de robótica del colegio, una clase de programación no compite con él: lo refuerza.' },
        { kind: 'p', html: 'El boletín TIC del INEI para el segundo trimestre de 2026 cuenta que algo más de un tercio de los hogares peruanos, el 36,4%, dispone de una computadora o más. Una familia dentro de ese 36,4% ya reúne todo el equipo que pedimos. Para familias de regiones donde los talleres presenciales quedan lejos, como explicamos en la página de <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a>, la clase en línea elimina el traslado.' }
      ]
    },
    {
      id: 'preguntas',
      eyebrow: 'Antes de inscribirlo',
      h2: '¿Qué preguntar antes de inscribir a un niño en un taller de robótica?',
      lede: 'Si decide que la robótica es lo suyo, estas seis preguntas le ayudan a distinguir un taller donde su hijo aprende de uno donde solo arma siguiendo un manual. Sirven también para evaluarnos a nosotros.',
      body: [
        { kind: 'ol', items: [
          '<strong>¿Quién escribe el programa?</strong> Si el robot llega con el código listo y el niño solo lo carga, aprende a armar, no a programar. Pida ver un programa hecho por un alumno.',
          '<strong>¿Con qué se programa?</strong> Bloques, Python u otro lenguaje. Los bloques están bien para empezar; lo importante es que haya un camino hacia código escrito.',
          '<strong>¿Qué pasa con el kit al terminar?</strong> Pregunte si se compra aparte, si se presta o si queda en el local, y qué ocurre si se rompe una pieza.',
          '<strong>¿Cuántos niños por kit?</strong> Si son cuatro alrededor de un robot, quizá su hijo mire más de lo que hace.',
          '<strong>¿Cómo se ve el avance?</strong> Pida un ejemplo de lo que un alumno sabe hacer al mes tres. Si la respuesta es solo "armó tres modelos", falta la parte del programa.',
          '<strong>¿Qué se lleva el niño a casa?</strong> No el robot: lo que sabe. Pregunte qué podrá programar sin el kit cuando acabe.'
        ] },
        { kind: 'p', mt: true, html: 'Nuestras respuestas, para que nos compare: el programa lo escribe siempre el niño; empezamos con bloques y pasamos a Python; no hay kit ni piezas; en grupo cada niño trabaja en su propia computadora; el avance se ve en los programas que guarda semana a semana; y lo que se lleva es la lógica, que sirve igual para un robot, un juego o una app.' },
        { kind: 'p', html: 'En Lima Norte y en distritos con mucha oferta de verano, la elección suele darse en enero. Contamos cómo lo vivimos con familias de esa zona en <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">vacaciones útiles de programación en Los Olivos</a>, y para quienes buscan robótica en verano en <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-surquillo-lima">vacaciones útiles en Surquillo</a>.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Qué parte de la robótica es pura programación? Un sensor que duda',
      lede: 'Un robot seguidor de línea mira el piso con un sensor de luz: si ve oscuro, está sobre la cinta negra; si ve claro, se salió. Suena fácil. El problema aparece cuando el sensor duda, y eso se resuelve solo con código.',
      body: [
        { kind: 'p', html: 'Los sensores reales no dan números limpios: vibran, la luz del cuarto cambia, la cinta tiene brillos. Si el programa decide con una sola frontera, por ejemplo "por debajo de 50 es oscuro", un valor que baila entre 47 y 53 hace que el robot cambie de idea a cada instante y que el motor dé tirones. En clase lo trabajamos sin robot, con una lista de lecturas inventada por nosotros y este programa en Python.' },
        { kind: 'code', label: 'Un sensor de luz con una y con dos fronteras', lang: 'Python', code: PY, note: 'Cada número de <code>readings</code> es una lectura del sensor. <code>one_threshold</code> decide con una sola frontera; <code>two_thresholds</code> solo pasa a "oscuro" por debajo de 40 y solo vuelve a "claro" por encima de 55. Entre ambas fronteras mantiene la decisión anterior.' },
        { kind: 'code', label: 'Lo que imprime al ejecutarse', lang: 'Salida', code: OUT, note: 'Salida exacta de Python 3 en nuestro equipo. Los dos conteos incluyen la primera decisión, la del arranque. Con una frontera, el robot cambia de idea diez veces tras arrancar; con dos, solo dos: una al entrar en la cinta y otra al salir.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer los datos.</strong> El niño mira la lista y marca con el dedo dónde cree que el robot está sobre la cinta. Casi siempre señala 31, 28, 44, 30 y 27.',
          '<strong>Probar una frontera.</strong> Con 50, el programa cuenta once decisiones. El mentor pregunta en inglés: "is the robot really changing its mind eleven times?". El niño ve que no: el sensor solo tiembla.',
          '<strong>Inventar la zona muerta.</strong> La idea es no cambiar de opinión por poco. Para entrar en la cinta hay que bajar de 40; para salir, superar 55. Ese hueco entre 40 y 55 se llama histéresis.',
          '<strong>Comprobar.</strong> Con dos fronteras quedan tres decisiones: arrancar en claro, entrar en la cinta en 31, salir en 58. Exactamente lo que el niño había marcado con el dedo.',
          '<strong>Preguntar qué se pierde.</strong> Si la zona muerta es muy ancha, el robot tarda en reaccionar. No hay número perfecto; hay que elegir y justificar.'
        ] },
        { kind: 'p', mt: true, html: 'Este ejercicio es robótica en el sentido que importa: datos de un sensor, una decisión y una acción. No necesita ni un tornillo. Y la misma idea aparece en un termostato, en el botón de una app que no debe reaccionar dos veces o en un juego que detecta si el jugador está en el suelo. Un niño que la entiende a los 10 años tiene una herramienta para toda la vida, tenga o no un robot cerca.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'Robótica e IA',
      h2: '¿Robótica e inteligencia artificial para niños: por dónde empezar?',
      lede: 'Por la programación. La inteligencia artificial de un robot es, al final, un programa que decide a partir de datos, y para entenderla primero hay que saber escribir decisiones sencillas como la del sensor.',
      body: [
        { kind: 'p', html: 'Los proyectos escolares peruanos ya mezclan las dos cosas. Los ganadores del Hackathon 2025 del MINEDU, su cuarta edición, sorprendieron según el ministerio con "proyectos de IA y robótica"; la misma nota de agosto de 2025 da otro dato alentador: las chicas participantes aumentaron 28% de 2023 a 2025. Y en octubre de 2023 una nota de prensa del MINEDU contó que un equipo de 4° de secundaria del COAR Lima ganó la categoría "Futuros Innovadores-Senior" de la olimpiada nacional con WAI-FLY, descrito como "un dron impreso en 3D equipado con una inteligencia artificial que evita la congestión marítima mediante la detección y el conteo de barcos". Ese equipo representó al Perú en la Olimpiada Mundial de Robótica 2023, en Panamá.' },
        { kind: 'p', html: 'Mencionamos estos casos como contexto: no tenemos ninguna relación con el MINEDU, con los COAR ni con esas competencias, y no preparamos equipos para ellas. Lo que sí muestran es el camino. Detectar y contar barcos es, en el fondo, el mismo tipo de problema que el sensor de esta página, solo que con imágenes en lugar de un número de luz.' },
        { kind: 'p', html: 'Para niños de primaria, nuestro <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">curso de inteligencia artificial para niños</a> enseña cómo una máquina aprende de ejemplos sin usar chatbots de adultos. Para adolescentes, el <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a> llega a modelos que se entrenan y se equivocan.' }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Edades',
      h2: '¿A qué edad conviene empezar con robótica o con programación?',
      lede: 'Para la programación, a los 6 años con bloques y sin teclado; para el código escrito, entre los 9 y los 10. Para la robótica con piezas, la edad la marca cada kit y cada taller, y conviene preguntarla.',
      body: [
        { kind: 'two',
          leftH3: 'De 6 a 8 años (1° a 3° de primaria)',
          left: [
            'A esta edad lo más valioso es aprender a dar instrucciones en orden y a repetir sin copiar. Con bloques en la pantalla, el niño mueve un personaje como movería un robot: avanza, gira, espera.',
            'Si prefiere un taller de robótica a esta edad, que sea uno donde el niño programe aunque sea con tres bloques, no solo donde arme.'
          ],
          rightH3: 'De 9 a 12 años (4° a 6° de primaria)',
          right: [
            'Aparecen las variables, las condiciones combinadas y los datos, como las lecturas del sensor. Es la edad ideal para pasar a Python.',
            'Un niño de 5° o 6° que ya programa aprovecha mucho más un taller de robótica: entiende por qué el robot hace lo que hace y lo corrige solo.'
          ] },
        { kind: 'p', mt: true, html: 'Las edades por grado vienen de la tabla de edades normativas del MINEDU (1° de primaria a los 6 años, 6° a los 11, con la edad cumplida al 31 de marzo). Nuestra propuesta para cada tramo es eso, una propuesta nuestra, y el mentor la ajusta a cada niño después de la clase de prueba.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Por qué aprender la lógica de los robots en inglés?',
      lede: 'Porque la programación ya se escribe en inglés: if, else, while, repeat, wait. Y porque una clase en ese idioma convierte cada sesión en práctica de conversación con un propósito.',
      body: [
        { kind: 'p', html: 'Cada clase nuestra ocurre en tiempo real, por videollamada y en inglés, y la guía un mentor radicado en la India que habla despacio. No somos una academia de idiomas y no enseñamos inglés como materia, pero el niño pasa la hora explicando en ese idioma qué hace su programa. El EF EPI 2025 coloca a Lima en la banda "High", con 555 puntos, y el colegio ya dedica horas semanales al inglés desde la primaria: muchos niños tienen más base de la que creen.' },
        { kind: 'p', html: 'No damos notas ni constancias válidas para el colegio. Al cerrar un curso entregamos un certificado de finalización propio, firmado por nosotros, que no reemplaza ningún documento escolar.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿En qué horario son las clases de programación desde la India?',
      lede: 'Usted lo fija. Entre Lima y la India hay diez horas y media de distancia, sin cambios en ninguna estación del año.',
      body: [
        { kind: 'p', html: 'Unas conversiones para orientarse, con UTC-5 en Lima y UTC+5:30 en la India: las 7:30 a. m. de un jueves limeño son las 6:00 p. m. del jueves en la India; las 10:30 a. m. de un sábado, las 9:00 p. m. de ese sábado; y las 3:30 p. m. de Lima, las 2:00 a. m. del día siguiente allá. Son ejemplos de conversión y no turnos fijos: la hora de cada clase la reserva la familia.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo sabe si su hijo ya piensa como quien programa un robot?',
    lede: 'Cinco capacidades que buscamos en clase. Las definimos nosotros y valen igual para un robot, un juego o una app.',
    table: { caption: 'Cinco capacidades de la lógica de un robot (nuestras)', head: ['Capacidad', 'Edad en que suele aparecer', 'Cómo se nota'], rows: [
      ['1. Ordenar', '6 a 7 años', 'Da instrucciones paso a paso sin saltarse ninguno'],
      ['2. Repetir', '7 a 8 años', 'Usa un bucle en vez de copiar el mismo paso'],
      ['3. Decidir', '8 a 9 años', 'Escribe "si pasa esto, haz aquello" con una condición correcta'],
      ['4. Leer datos', '9 a 10 años', 'Toma decisiones a partir de números, como un sensor'],
      ['5. Estabilizar', '10 a 12 años', 'Evita que su programa cambie de idea por ruido, como en la histéresis']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Juegue a que usted es el robot: su hijo le dicta cómo cruzar la sala con los ojos cerrados. Si los da en orden y con condiciones, ya piensa como un programador.',
      'No mida el avance por lo que se ve brillar en la pantalla, sino por lo bien que su hijo explica por qué funciona.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Un robot no adivina: hace exactamente lo que el programa dice.',
      'Si su programa cambia de idea todo el tiempo, quizá el problema no es el programa, sino el dato.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos de programación para niños curiosos por las máquinas',
    lede: 'Todos son en vivo y en inglés, con un mentor que sigue a su hijo, en grupo o uno a uno; ninguno usa ni vende hardware.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 12 años', courses: [
        { code: 'ROP / PASO / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonar antes de programar', blurb: 'Para 6 a 9 años: reglas, series y orden, sin teclado.' },
        { code: 'ROP / PASO / 02', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Personajes que se mueven y reaccionan, como un robot en la pantalla.' },
        { code: 'ROP / PASO / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Partir un reto en pasos y probar cada uno.' }
      ] },
      { num: 'II', h3: 'Mundos que obedecen', sub: 'De 7 a 14 años', courses: [
        { code: 'ROP / MUNDO / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft y su agente', blurb: 'Un robot virtual que construye lo que el niño programa.' },
        { code: 'ROP / MUNDO / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio', blurb: 'Eventos y reacciones escritos en Luau.' },
        { code: 'ROP / MUNDO / 03', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos', blurb: 'Choques, puntajes y niveles en varios motores.' }
      ] },
      { num: 'III', h3: 'Datos e inteligencia', sub: 'De 8 a 15 años', courses: [
        { code: 'ROP / DATO / 01', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA', blurb: 'Cómo aprende una máquina y cuándo creerle.' },
        { code: 'ROP / DATO / 02', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Números, gráficos y patrones en Python.' },
        { code: 'ROP / DATO / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'El lenguaje de muchas placas, aprendido en la computadora.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una clase de programación en línea con nosotros?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana temprano', l: 'Antes del colegio, para quien se concentra más de día.' },
      { time: 'Tarde libre', l: 'Cuando ya almorzó y todavía no empieza la tarea.' },
      { time: 'Agenda propia', l: 'En clases individuales, cambia con aviso.' }
    ],
    cells: [
      { h3: 'Sin piezas', p: 'Todo ocurre en la computadora: nada que comprar, prestar ni perder.' },
      { h3: 'Datos de verdad', p: 'Lecturas, listas y números que el niño aprende a interpretar.' },
      { h3: 'Código del niño', p: 'El mentor pregunta y sugiere; el niño escribe cada línea.' },
      { h3: 'Equivocarse a propósito', p: 'Cada programa se prueba hasta encontrar dónde falla.' },
      { h3: 'Mentor estable', p: 'La misma persona sigue a su hijo durante el curso.' },
      { h3: 'Formato a elección', p: 'Grupo de quince a veinte o clase uno a uno.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Trabajos de alumnos de distintas edades, todos hechos con código y sin hardware. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas en Google de familias y estudiantes, en inglés, sin cambios.',

  fees: {
    h2: 'Cuánto cuestan las clases de programación para niños',
    lede: 'Se paga una mensualidad en dólares estadounidenses, con tarjeta, y su banco hace la conversión. No hay kit que comprar ni matrícula: el monto es solo por las clases.',
    free: ['Clase de prueba gratuita', 'El mentor le dice si conviene bloques o Python', 'Sin datos de tarjeta para probar'],
    group: ['Quince a veinte niños de edad parecida', 'Dos clases en vivo a la semana', 'Mismo mentor de principio a fin', 'Mensualidad, sin permanencia mínima'],
    one: ['Su hijo y un mentor exclusivo', 'Temas y ritmo a medida', 'Hora ajustable a la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Robótica o programación para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todas son en vivo, por videollamada y en inglés, con mentores que enseñan desde la India y hablan pausado. Para muchas familias es una ganancia: el niño aprende la lógica de los robots y de los programas mientras practica el inglés del colegio con alguien que conversa con él. El EF EPI 2025 sitúa el inglés de Lima en la banda "High".' },
      { q: '¿Ustedes enseñan robótica?', a: 'No en el sentido de armar robots. Enseñamos programación, que es la parte que decide lo que hace cualquier robot. No vendemos, prestamos ni enviamos kits ni piezas.' },
      { q: '¿Qué conviene más a un niño, robótica o programación?', a: 'Depende del niño. Si necesita tocar y armar para concentrarse, un taller de robótica presencial puede ser ideal. Si ya crea en juegos como Roblox o Scratch, si vive lejos de un taller o si quiere entender cómo decide una máquina, la programación es el camino más directo.' },
      { q: '¿La programación le sirve si luego quiere hacer robótica?', a: 'Sí, y mucho. Los robots educativos se programan con bloques o con lenguajes como Python. Un niño que ya entiende condiciones, bucles y datos de sensores llega al taller sabiendo lo más difícil.' },
      { q: '¿Qué dice el MINEDU sobre la robótica educativa?', a: 'Su Dirección de Innovación Tecnológica en Educación escribe que "la robótica en educación no es el objetivo, es el medio": se usa para desarrollar competencias del currículo con proyectos STEAM. El MINEDU trabaja con robótica educativa desde 1996.' },
      { q: '¿Desde qué edad se puede aprender programación?', a: 'Desde los 6 años, con bloques y sin escribir código. Entre 4° y 5° de primaria, con 9 o 10 años, llega el paso a Python escrito.' },
      { q: '¿Qué necesita en casa?', a: 'Basta una computadora con internet estable y un navegador al día. No hay piezas, cables ni baterías; unos audífonos con micrófono hacen más cómoda la conversación.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 10:30 a. m. en Lima son las 9:00 p. m. en la India.' },
      { q: '¿Preparan para olimpiadas o concursos de robótica?', a: 'No. No tenemos relación con el MINEDU, los COAR ni con olimpiadas de robótica, y no preparamos equipos. Lo que enseñamos, la lógica de programación, sí es la base de esos proyectos.' },
      { q: '¿Tiene validez en el colegio?', a: 'No. Somos una academia en línea independiente. El certificado de finalización que damos al cerrar cada curso es nuestro y no cuenta como nota escolar.' },
      { q: '¿Cómo se paga?', a: 'Mes a mes, con tarjeta, en dólares estadounidenses; el banco convierte el monto. La clase de prueba es gratuita y no pide tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Para seguir decidiendo',
    lede: 'Algunas están escritas en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'La guía de programación para toda la primaria peruana.' },
      { href: '/vacaciones-utiles-de-programacion-los-olivos-lima', label: 'Vacaciones útiles en Los Olivos', p: 'Robótica o código en el verano de Lima Norte.' },
      { href: '/vacaciones-utiles-de-programacion-surquillo-lima', label: 'Vacaciones útiles en Surquillo', p: 'Un verano con la lógica de los robots, desde casa.' },
      { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'Curso de IA para niños', p: 'Cómo aprende una máquina, explicado para primaria.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'Clases en línea para familias del sur del Perú.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así es una clase en vivo con nuestros mentores.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de programación de prueba',
    lede: 'En la sesión gratuita el mentor le propone a su hijo, en un inglés sencillo, dictarle a un personaje cómo salir de un laberinto. Viendo cómo ordena los pasos, le recomienda empezar con bloques o con Python.',
    readFirst: 'Si quiere informarse antes, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe una sesión típica, y en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> están todas las opciones de primaria.',
    note: 'Le recordamos que enseñamos programación y no robótica con piezas, con sesiones en tiempo real y en inglés guiadas desde la India. Sus preguntas previas se las contestamos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Programación', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course', label: 'Proyecto propio' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'IA para niños' },
        { href: '/vacaciones-utiles-de-programacion-los-olivos-lima', label: 'Verano en Los Olivos' }
      ] }
    ],
    bottomRight: 'Un robot sin programa es un juguete quieto'
  },

  personalityCss: `
.ag-root.ag-rop .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-rop .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-rop .ag-table td { line-height: 1.5; }
.ag-root.ag-rop .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-rop .ag-steps li { line-height: 1.68; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU DITE "Robótica Educativa" PDF (undated, plans for 2025); MINEDU press notes on the Hackathon 2025 and on the COAR Lima team at the World Robot Olympiad 2023 (2 October 2023); CNEB Ciencia y Tecnología competency and competency 28; MINEDU Edades normativas; INEI TIC II Trimestre 2026; EF EPI 2025; tzdata. The decision table, the six workshop questions, the capability steps, the sensor readings and the Python example are our own.',
    localProject: 'A Python lesson on the programming half of robotics for children of about 10: sixteen invented light-sensor readings; a single threshold at 50 produces 11 decisions, two thresholds (enter dark below 40, return to light above 55) produce 3, the start included. Run with python3 -I. Lesson family: hysteresis, noise against a threshold and a dead band that keeps the last decision.',
    requiredMentions: ['Un sensor de luz con una y con dos fronteras', 'two thresholds, 40 and 55: 3', 'is the robot really changing its mind eleven times?', 'La robótica educativa del MINEDU, según su Dirección de Innovación Tecnológica en Educación', 'Robótica o programación según el perfil del niño (nuestra guía, no una norma)', 'Dos grupos de 4,574 y 3,711 participantes, total 8,285', 'Ese hueco entre 40 y 55 se llama histéresis.', 'Cinco capacidades de la lógica de un robot (nuestras)', 'Un robot sin programa es un juguete quieto'],
    sources: [
      { claim: 'Robotics in education is the means, not the goal; transversal STEAM projects; since 1996 (Infoescuela, 25+ schools); LEGO WeDo kits to almost 100% of public primary schools in 2009 and 2010; 2022 virtual course 8,285 participants; Hackathon since 2022, category C for 34 student teams; a 2025 course with AI planned.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Hackathon 2025 rewarded AI and robotics projects; female participation up 28% from 2023 to 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'COAR Lima team won the national category Futuros Innovadores-Senior with WAI-FLY and went to the World Robot Olympiad 2023 in Panamá.', url: 'https://www.gob.pe/institucion/minedu/noticias/843092-estudiantes-del-coar-lima-clasifican-a-olimpiada-mundial-de-robotica' },
      { claim: 'CNEB Ciencia y Tecnología: Diseña y construye soluciones tecnológicas para resolver problemas; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'INEI: 36.4% of homes with at least one computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 high.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Any robot kit, hardware or shipped parts: refused; the page says we sell, lend and send none.',
      'Preparing teams for robotics olympiads or the MINEDU Hackathon, or any MINEDU or COAR connection: refused; the page says so.',
      'Student names from the COAR press note: not printed (minors; brief rule 10).',
      'Robotics workshop prices or named local competitors: not printed.',
      'Adding MINEDU participant groups into a new total: avoided; 8,285 is the total MINEDU itself prints.'
    ]
  }
};

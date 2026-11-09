// SHIP: market | Clases de programación para niños online: cómo funciona en casa, equipo y una clase paso a paso | a list of pairs unpacked in a for loop, collecting what is missing, empty-list check
'use strict';
// Clases de programación para niños online en Perú (ag- Spanish-language door, Peru cluster row PE087, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Peruvian parent who typed "clases de programación para niños online" or "clases virtuales de programación para
// niños" (KEYWORDS.md: 3 hits each; "cerca de mí" leads but we are online only). Spine, different from the live pilot
// clases-de-programacion-para-ninos-en-ingles (which is about English and the primaria timetable): how a live virtual class
// works inside a Peruvian home. What "online" means with us; which device (INEI devices table); one computer shared by
// siblings (INEI); a class walked through step by step; online or presencial; safety at home; when to fit the class around
// the colegio (RM 501-2025 calendar, checked by eye) and the Peru to India clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-online-peru/
// and facts-market/src/inei_tic_iit2026.txt; read 2026-11-09, every quote grepped in the raw text):
//  INEI, Boletín "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", II Trimestre 2026, N° 03
//   Setiembre 2026 (https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf):
//   Cuadro 2.3 rows "16,6 16,0 14,3 14,0 -0,3" (Computadora), "18,9 18,9 18,4 18,9 0,5" (Laptop), "90,7 90,2 89,1 90,2 1,1"
//   (Celular), "2,4 2,2 1,9 2,9 1,0" (Tablet), "Otro 2/ 9,9 12,3 15,3 15,7 0,4" for 2023 2024 2025 2026; text "el 90,2% de la
//   población usuaria de Internet de 6 y más años usó Internet a través de un teléfono celular ... laptop (18,9%), computadora
//   (14,0%), tablet (2,9%)".
//   "el 36,4% de los hogares del país disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima
//   Metropolitana, el 41,3% en el resto urbano y 8,9% en el área rural."
//   "el 74,3% cuenta con una sola unidad; mientras que, el 25,7% dispone de dos o más computadoras en el hogar."
//   "el 87,4% destina su uso exclusivamente a actividades del hogar, como estudios, trabajos académicos"
//   "el 50,9% de los hogares con cuatro o más miembros contaba con al menos una computadora, frente al 23,4% de los hogares
//   conformados por tres personas."
//   "en Lima Metropolitana, el 84,7% de los hogares disponía del servicio; en el resto urbano, el 66,2%; mientras que, en el
//   área rural solo el 27,1% tenía acceso."
//   Cuadro 2.1 row 6 a 11 años "60,1 61,7 61,5 68,2 6,7" (2023 to 2026); "en los niños de 6 a 11 años, con una cobertura de
//   67,8%" (celular use); "el 94,1% de los usuarios de Internet de 6 y más años de edad utilizó Internet al menos una vez al día".
//  RM 501-2025-MINEDU, Tabla 1 (FACTS 23), signed PDF page 7 checked by eye (rm501-page11-checked-by-eye.png): "Del 18 al 22
//   de mayo", "Del 27 julio a 7 de agosto", "Del 12 al 16 de octubre" (semanas de gestión), "Del 16 marzo al 15 de mayo",
//   "Del 19 octubre a 18 de diciembre" (2026).
//  MINEDU, Edades normativas (FACTS 13): "Se considera la edad normativa al 31 de marzo de cada año."
//  CNEB (FACTS 32, 35): "28 Se desenvuelve en entornos virtuales generados por las TIC"; "Crea objetos virtuales en diversos
//   formatos: consiste en construir materiales digitales con diversos propósitos, siguiendo un proceso de mejoras sucesivas y
//   retroalimentación".
//  MINEDU press note Sept 2026 (FACTS 29): "pondrá en marcha un plan para conectar 55 000 escuelas públicas a internet satelital".
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30 (facts-geo/timezone.tsv): India 10 h 30 min ahead all year.
//  AI tool ages: content/ai-tool-age-audit.json (ChatGPT: under 18 needs a parent's permission; Claude: 18+).
// Our own calculations: none printed beyond clock conversions (10:30 added to each Peru hour).
// Our own example, run with python3 -I (lista.py, lista_reto.py, lista_ok.py in the src-pages folder), exact output:
//   [x] laptop / [x] teclado / [x] cámara / [ ] micrófono / [x] audífonos / [x] internet / Not ready yet. Missing: micrófono
//   with audífonos False too: Not ready yet. Missing: micrófono, audífonos ; with every value True: Ready for class!
// Lesson family: a list of pairs (tuples) unpacked in a for loop, a second list that collects what is missing, and a check
// for the empty list (len(faltan) == 0) before printing the verdict.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'equipo = [',
  "    ('laptop', True),",
  "    ('teclado', True),",
  "    ('cámara', True),",
  "    ('micrófono', False),",
  "    ('audífonos', True),",
  "    ('internet', True),",
  ']',
  '',
  'faltan = []',
  'for cosa, listo in equipo:',
  '    if listo:',
  "        print('[x]', cosa)",
  '    else:',
  "        print('[ ]', cosa)",
  '        faltan.append(cosa)',
  '',
  'if len(faltan) == 0:',
  "    print('Ready for class!')",
  'else:',
  "    print('Not ready yet. Missing:', ', '.join(faltan))"
].join('\n');

const OUT = [
  '[x] laptop',
  '[x] teclado',
  '[x] cámara',
  '[ ] micrófono',
  '[x] audífonos',
  '[x] internet',
  'Not ready yet. Missing: micrófono'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para niños online' },
  slug: 'clases-de-programacion-para-ninos-online-peru',
  code: 'prn',
  accent: '#004A28',
  accentRationale: 'Clases de programación para niños online: a deep forest green #004A28, darker and bluer than the leafy #2E6720 of the sibling page on English-medium classes, so the two primaria doors read as a pair without looking alike; allocated in alloc.tsv and checked by the build for at least 4.5:1 on every paper tint',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños online en Perú',
  title: 'Clases de programación para niños online en Perú, en vivo',
  description: 'Clases virtuales de programación para niños de 6 a 12 años en Perú: en vivo, desde casa y en inglés. Qué equipo hace falta y cómo es una clase online paso a paso.',
  ogDescription: 'Cómo funcionan en casa las clases de programación para niños online: la computadora, la conexión, una clase en vivo paso a paso y el horario del colegio en Perú.',
  twitterDescription: 'Programación para niños online desde Perú: clases en vivo y en inglés, con mentor, en grupo o individuales, a la hora que elija la familia.',
  pageName: 'Clases de programación para niños online en Perú',
  webPageDescription: 'Guía práctica para familias en Perú sobre las clases de programación para niños online: qué significa una clase virtual en vivo, qué dispositivo sirve según los datos del INEI de 2026, cómo compartir una sola computadora entre hermanos, cómo transcurre una clase paso a paso, cuándo encaja con el calendario escolar 2026 del MINEDU y un primer programa en Python escrito por nosotros.',
  courseDescription: 'Clases de programación en vivo y en línea para niños de 6 a 12 años en todo el Perú, dictadas en inglés por mentores desde la India: bloques y Scratch, Python, Roblox y proyectos de IA, en clase grupal o individual, el día y la hora que la familia elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños online',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#online', label: 'Online' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#clase', label: 'Una clase' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#calendario', label: 'Calendario' }
  ],
  eyebrow: 'Perú &middot; Programación online para niños &middot; Desde casa',
  h1: 'Clases de programación para niños online, en vivo desde casa',
  lede: 'Antes de inscribir a su hijo o hija en clases virtuales de programación, conviene saber cómo se ven por dentro: qué pasa en la pantalla, qué aparato necesita, qué hacer si la computadora de la casa es una sola y en qué momento de la semana conviene ponerlas. Esta página lo explica con datos del INEI y del MINEDU, y con una clase real descrita paso a paso.',
  secondaryCta: { href: '#clase', label: 'Ver una clase paso a paso' },
  wa: 'Hola Modern Age Coders, estamos en Perú y queremos clases de programación online para nuestro hijo o hija. ¿Podemos agendar la clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; 4.9 en Google con unas 547 reseñas &middot; su hijo programa en su propia pantalla, guiado en inglés',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Dónde', 'En casa, por videollamada, desde cualquier ciudad del Perú'],
    ['Qué hace falta', 'Computadora o laptop con teclado, micrófono e internet estable'],
    ['Idioma', 'Las clases se dictan en inglés, con calma'],
    ['Formato', 'Grupo de quince a veinte niños, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Las clases de programación para niños online de Modern Age Coders son en vivo, por videollamada y en inglés: su hijo de 6 a 12 años programa en su propia computadora mientras un mentor desde la India mira su pantalla compartida, le hace preguntas y lo guía sin hacerle el trabajo. No son videos grabados. Basta una laptop o computadora con teclado, micrófono e internet estable. Usted decide si prefiere un grupo o clases individuales y en qué horario; la clase de prueba no cuesta nada.',

  picks: {
    eyebrow: 'Para empezar en línea',
    h2: 'Tres cursos que funcionan muy bien a distancia',
    lede: 'Elegidos porque cada uno produce algo visible en la pantalla desde la primera semana, que es lo que mantiene atento a un niño frente a una videollamada.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRN / 01', title: 'Scratch de cero a juegos', alt: 'Imagen del curso de Scratch para niños', note: 'Para los que nunca han programado. Scratch corre en el navegador, así que no hay nada complicado que instalar: el niño abre el enlace, comparte la pantalla y empieza a mover su personaje.' },
      { course: 'python-ai-kids-masterclass', code: 'PRN / 02', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'Para niños de 9 a 12 años que ya escriben con soltura en el teclado. Cada clase termina con un programa que corre de verdad, como la lista de revisión de esta página.' },
      { course: 'minecraft-coding-for-kids-course', code: 'PRN / 03', title: 'Programación con Minecraft', alt: 'Imagen del curso de programación con Minecraft', note: 'Para el niño que ya pasa horas en Minecraft. Construye y automatiza dentro de un mundo conocido, y el mentor ve en vivo cada bloque que coloca.' }
    ]
  },

  sections: [
    {
      id: 'online',
      eyebrow: 'Qué es una clase online',
      h2: '¿Cómo son las clases de programación para niños online?',
      lede: 'Son clases en vivo por videollamada: el mentor y su hijo se ven, se escuchan y trabajan sobre la misma pantalla en el mismo momento. Nada de lo que su hijo hace en clase es un video pregrabado ni una lista de ejercicios para resolver solo.',
      body: [
        { kind: 'three', cells: [
          { h3: 'La pantalla del niño manda', p: 'Su hijo comparte su pantalla y programa con sus propias manos. El mentor ve cada bloque o cada línea en tiempo real, detecta el error al instante y le pregunta qué quiso hacer, en lugar de tomar el control del mouse.' },
          { h3: 'Una persona, no una plataforma', p: 'Detrás de la cámara hay un mentor que conoce el nombre de su hijo, recuerda en qué se quedó la semana anterior y ajusta la clase si lo ve cansado. Es lo que distingue una clase virtual de un curso grabado.' },
          { h3: 'En inglés, sin apuro', p: 'La clase se dicta en inglés. El mentor habla despacio, señala en la pantalla lo que nombra y acepta que el niño responda como pueda al principio. Las palabras del código, como <code>print</code> o <code>repeat</code>, ya son inglesas.' }
        ] },
        { kind: 'p', mt: true, html: 'Muchas familias llegan buscando "clases de programación para niños cerca de mí". Nosotros no tenemos un local en su distrito: todas nuestras clases son en línea. La ventaja es que el aula viene a su casa, sea en Lima, en Arequipa o en una ciudad donde no hay ninguna academia de programación, y su hijo no pierde una hora en el tráfico para llegar a una clase de una hora.' },
        { kind: 'p', html: 'También preguntan si "online" quiere decir que el niño aprende solo frente a la computadora. No. En las plataformas de videos el niño mira y copia; en una clase en vivo el niño escribe, se equivoca, explica en voz alta lo que pensó y vuelve a intentar con alguien que lo escucha. Ese ida y vuelta es lo que enseña a pensar, y es lo que una herramienta que entrega la respuesta hecha no puede dar.' }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'El equipo en casa',
      h2: '¿Qué necesita un niño para una clase virtual de programación: computadora, tablet o celular?',
      lede: 'Una computadora o una laptop con teclado. El celular es el aparato con el que la mayoría de peruanos entra a internet, pero para programar se queda corto: en una pantalla tan chica, y tocando letras con el dedo, un niño se cansa de escribir código en pocos minutos.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Perú: dispositivo con el que la población de 6 y más años usa internet, II trimestre (porcentaje de usuarios de internet)', head: ['Dispositivo', '2023', '2024', '2025', '2026'], rows: [
          ['Celular', '90,7', '90,2', '89,1', '90,2'],
          ['Laptop', '18,9', '18,9', '18,4', '18,9'],
          ['Computadora de escritorio', '16,6', '16,0', '14,3', '14,0'],
          ['Tablet', '2,4', '2,2', '1,9', '2,9'],
          ['Otro (Smart TV y similares)', '9,9', '12,3', '15,3', '15,7']
        ] },
        { kind: 'source', html: 'Fuente: Instituto Nacional de Estadística e Informática (INEI), "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", II Trimestre 2026, Cuadro N.° 2.3, con datos de la Encuesta Nacional de Hogares; cifras de 2026 preliminares. Una persona puede usar más de un dispositivo, por eso las columnas no suman cien. Leído el 9 de noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Según ese cuadro del INEI, en el segundo trimestre de 2026 el 90,2 % de los usuarios de internet de 6 y más años se conectó con un celular, frente al 18,9 % que usó una laptop y el 14,0 % una computadora de escritorio. Para programar, el orden tiene que ser el inverso: la laptop o la computadora primero, y el celular solo para recibir el enlace de la clase o escribirnos por WhatsApp.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que sí hace falta',
          left: [
            'Una laptop o computadora con Windows, macOS o ChromeOS, con un navegador actualizado. No necesita ser nueva: para Scratch y para los primeros meses de Python sirve casi cualquier equipo de los últimos años.',
            'Teclado y mouse, o el panel táctil de la laptop. Micrófono y cámara, aunque sean los que trae la laptop. Audífonos con micrófono ayudan mucho: el niño entiende con más claridad el inglés del mentor y la casa no escucha la clase entera.',
            'Una conexión estable. Más que la velocidad, importa que no se corte; si el wifi falla en el cuarto del niño, una mesa más cerca del router suele resolverlo.'
          ],
          rightH3: 'Lo que no hace falta',
          right: [
            'Un equipo gamer, una tarjeta gráfica ni programas pagados. Todo lo que usamos en las clases de niños es gratuito: Scratch, Python, editores en línea y Roblox Studio para quienes llegan a esa etapa.',
            'Un kit de robótica. Enseñamos programación, no armado de piezas, y no enviamos hardware a casa.',
            'Que usted sepa programar. Su papel es otro: asegurar el lugar y la hora, y preguntarle al final a su hijo qué hizo.'
          ] },
        { kind: 'p', mt: true, html: '¿Y la tablet? Sirve en las primeras semanas para un niño de 6 o 7 años que solo arrastra bloques grandes, siempre que la familia sepa que más adelante necesitará un teclado. El mismo boletín del INEI registra que apenas el 2,9 % de los usuarios de internet se conecta con una tablet en 2026, así que en la práctica casi todas las familias que nos escriben deciden entre la laptop de la casa y la computadora de escritorio.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Una computadora para todos',
      h2: '¿Qué pasa si en la casa hay una sola computadora y varios hijos?',
      lede: 'Es lo más común, y se resuelve con el horario. Como usted elige la hora de cada clase, cada hijo puede tener la suya en un momento distinto del día, sin pelear por la laptop.',
      body: [
        { kind: 'p', html: 'El INEI lo confirma con números. En el segundo trimestre de 2026, el 36,4 % de los hogares del país tenía al menos una computadora: el 53,3 % en Lima Metropolitana, el 41,3 % en el resto urbano y el 8,9 % en el área rural. De esos hogares con computadora, el 74,3 % cuenta con una sola unidad y apenas el 25,7 % tiene dos o más. El mismo boletín añade que el 87,4 % de los hogares con computadora la usa solo para actividades del hogar, como estudios y trabajos académicos.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Perú: hogares con al menos una computadora por área de residencia, II trimestre 2026 (porcentaje)', head: ['Área de residencia', 'Hogares con computadora'], rows: [
          ['Total del país', '36,4'],
          ['Lima Metropolitana (incluye el Callao)', '53,3'],
          ['Resto urbano', '41,3'],
          ['Área rural', '8,9']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín TIC II Trimestre 2026, sección 1, con datos de la Encuesta Nacional de Hogares. El INEI precisa que Lima Metropolitana incluye la Provincia Constitucional del Callao. Leído el 9 de noviembre de 2026.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Un horario por hijo.</strong> Si el mayor estudia en el turno mañana del colegio y el menor en el turno tarde, cada uno toma su clase en el hueco libre del otro. En las clases individuales usted fija la hora; en las grupales elige entre los grupos que ya existen.',
          '<strong>Un usuario por hijo.</strong> Cree una cuenta separada de la computadora para cada niño, con sus propios archivos. Así el proyecto de Scratch del menor no termina borrado por accidente.',
          '<strong>Los archivos en la nube.</strong> Scratch guarda los proyectos en línea si el niño tiene su cuenta, y en Python el mentor enseña a guardar el trabajo con un nombre claro. Si un día la laptop no está libre, el trabajo no se pierde.',
          '<strong>La laptop del trabajo, con cuidado.</strong> Muchas familias usan la laptop de la mamá o del papá. Funciona, pero conviene cerrar el correo y los programas de la empresa antes de la clase, porque el niño va a compartir la pantalla completa.',
          '<strong>Un plan B.</strong> Si la computadora se malogra, avísenos por WhatsApp. En las clases individuales se cambia la fecha; en las grupales el mentor le pasa a su hijo lo que se vio.'
        ] },
        { kind: 'p', mt: true, html: 'Otro dato del INEI ayuda a planificar: el 50,9 % de los hogares de cuatro o más miembros tenía al menos una computadora en 2026, frente al 23,4 % de los hogares de tres personas. Es decir, en las familias numerosas es más probable que haya computadora, pero también que haya más gente esperando su turno. Por eso insistimos en fijar las clases de programación a una hora estable de la semana, como cualquier otra actividad del niño.' }
      ]
    },
    {
      id: 'clase',
      eyebrow: 'Una clase por dentro',
      h2: '¿Cómo es una clase de programación online, paso a paso?',
      lede: 'Así transcurre una clase típica de Python para un niño de 10 años en Perú. La estructura es nuestra y cambia según la edad y el curso; lo que no cambia es que el niño programa y el mentor pregunta.',
      body: [
        { kind: 'ol', items: [
          '<strong>Entrar y comprobar.</strong> El niño abre el enlace de la videollamada unos minutos antes, enciende cámara y micrófono, y abre el editor de Python. El mentor saluda en inglés, pregunta cómo le fue en el colegio y verifica que se escuchan bien.',
          '<strong>Recordar la clase anterior.</strong> El mentor muestra el programa de la semana pasada y le pide que explique qué hacía una línea concreta. Si el niño lo explica, se avanza; si duda, se repasa con otro ejemplo.',
          '<strong>Un reto nuevo, dicho en una frase.</strong> Por ejemplo: "Write a program that checks if you are ready for class." El mentor no dicta el código: pregunta qué datos hacen falta y cómo los guardaríamos.',
          '<strong>Programar compartiendo pantalla.</strong> El niño escribe. Cuando aparece un error en rojo, el mentor no lo corrige por él: le pide leer el mensaje en voz alta y adivinar qué línea lo causa. Es la parte más larga de la clase y la más valiosa.',
          '<strong>Predecir y ejecutar.</strong> Antes de correr el programa, el niño dice qué cree que va a salir. Después lo ejecuta y compara. Si no coincide, ahí está la lección del día.',
          '<strong>Cambiar una cosa.</strong> El mentor propone una variación pequeña y el niño la resuelve solo, con la cámara encendida, mientras el mentor observa sin intervenir.',
          '<strong>Cerrar con palabras.</strong> El niño cuenta en una o dos frases en inglés qué aprendió. Usted recibe luego una nota breve con lo trabajado y lo que viene.'
        ] },
        { kind: 'p', mt: true, html: 'En una clase grupal de quince a veinte niños los pasos son los mismos, pero el mentor alterna: presenta el reto a todos, luego mira las pantallas por turnos y pide a distintos niños que muestren su avance. En una clase individual todo el tiempo es de su hijo, y el ritmo lo marca él.' },
        { kind: 'p', html: 'El Currículo Nacional de la Educación Básica del MINEDU describe una capacidad muy parecida a este ciclo dentro de la competencia 28, "Se desenvuelve en entornos virtuales generados por las TIC": crear objetos virtuales "siguiendo un proceso de mejoras sucesivas y retroalimentación". Esa competencia es transversal a las áreas y no tiene horas propias en el horario del colegio; en nuestras clases es exactamente lo que se practica cada semana, con código.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Un programa de ejemplo',
      h2: '¿Qué programa un niño en sus primeras clases online?',
      lede: 'Un buen primer proyecto es uno que el niño entiende porque lo vive. Este es nuestro: una lista de revisión en Python que comprueba si todo está listo antes de entrar a la clase virtual, escrita para un niño de 9 a 12 años.',
      body: [
        { kind: 'code', label: 'Lista de revisión antes de la clase', lang: 'Python', code: PY, note: 'Cada elemento de la lista <code>equipo</code> es un par: el nombre de la cosa y si está lista (<code>True</code>) o no (<code>False</code>). El bucle separa el par en dos variables, <code>cosa</code> y <code>listo</code>.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Copiamos esta salida tal cual la mostró Python 3 cuando corrimos el programa. Como el micrófono está en <code>False</code>, la lista <code>faltan</code> no queda vacía y el programa dice que todavía no está listo.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer la lista en voz alta.</strong> El mentor pide al niño que lea cada par en inglés: "laptop, true; microphone, false". Así aprende que <code>True</code> y <code>False</code> son valores, no palabras sueltas.',
          '<strong>Predecir la última línea.</strong> ¿El programa dirá "Ready for class!"? Muchos niños responden que sí porque casi todo está en <code>True</code>. Basta un <code>False</code> para que la respuesta cambie, y eso es lo primero que se descubre al ejecutar.',
          '<strong>Seguir la pista de <code>faltan</code>.</strong> La lista empieza vacía y solo crece cuando algo no está listo. Al final, <code>len(faltan) == 0</code> pregunta si sigue vacía.',
          '<strong>El reto.</strong> Cambiar también los audífonos a <code>False</code> y predecir la salida. Esta vez el programa termina con <code>Not ready yet. Missing: micrófono, audífonos</code>, porque <code>join</code> une los dos nombres con una coma.',
          '<strong>Todo en orden.</strong> Con todos los valores en <code>True</code>, el programa imprime <code>Ready for class!</code>. El niño luego agrega sus propias cosas: el agua, la libreta, el cargador.'
        ] },
        { kind: 'p', mt: true, html: 'El ejercicio parece pequeño, pero contiene tres ideas que se usan en todo programa serio: guardar datos en una lista, recorrerla con un bucle y decidir con una condición. Y además deja un hábito: antes de cada clase, su hijo puede correr su propio programa para revisar que todo funcione.' }
      ]
    },
    {
      id: 'presencial',
      eyebrow: 'Online o presencial',
      h2: '¿Clases de programación online o presenciales: qué conviene a un niño?',
      lede: 'Para aprender a programar, la clase online en vivo tiene una ventaja que suele sorprender: el mentor ve exactamente la pantalla del niño, línea por línea, algo que en un aula con veinte computadoras es difícil.',
      body: [
        { kind: 'table', numCols: [], caption: 'Clase online en vivo y clase presencial de programación, comparadas (nuestra comparación)', head: ['', 'Online en vivo (nuestras clases)', 'Presencial en una academia'], rows: [
          ['Traslado', 'Ninguno: la clase empieza en la mesa de su casa', 'Ida y vuelta al local, con el tráfico de cada ciudad'],
          ['Lo que ve el profesor', 'La pantalla compartida del niño, en tiempo real', 'Lo que alcanza a mirar caminando entre mesas'],
          ['Equipo', 'La computadora o laptop de la casa', 'La del local, que el niño no tiene en casa para practicar'],
          ['Horario', 'Cualquier día y a cualquier hora', 'El horario de apertura del local'],
          ['Contacto con otros niños', 'Compañeros de grupo por videollamada', 'Compañeros en la misma sala'],
          ['Idioma', 'Solo en inglés', 'Normalmente en castellano']
        ] },
        { kind: 'p', mt: true, html: 'La conexión, que antes era el gran obstáculo, ya no lo es para la mayoría de familias urbanas. Según el INEI, en el segundo trimestre de 2026 tenía internet el 84,7 % de los hogares de Lima Metropolitana y el 66,2 % de los hogares del resto urbano, aunque solo el 27,1 % de los hogares rurales. El uso también es diario: el 94,1 % de los usuarios de internet de 6 y más años se conectó al menos una vez al día.' },
        { kind: 'p', html: 'Lo presencial sigue siendo una buena opción si su hijo necesita salir de casa y estar con otros niños, o si en casa no hay computadora. Lo que no recomendamos es una clase grabada para un niño de primaria: sin nadie que le pregunte por qué escribió lo que escribió, la mayoría termina copiando el video sin entenderlo.' },
        { kind: 'p', html: 'Si busca otra mirada sobre el tema, nuestra página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explica qué enseña el colegio en primaria y a qué edad conviene empezar, y la guía de <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">clases de programación e IA en Perú</a> (en inglés) reúne todos los cursos por edad.' }
      ]
    },
    {
      id: 'cuidado',
      eyebrow: 'Seguridad en casa',
      h2: '¿Cómo se cuida a un niño en una clase online?',
      lede: 'Con reglas sencillas que usted puede comprobar: enlaces privados, ningún contacto fuera de los canales de la familia y ninguna cuenta de inteligencia artificial que la edad del niño no permita.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que hacemos nosotros',
          left: [
            'El enlace de cada clase es privado y se envía a la familia. El mentor se comunica con usted, el adulto responsable, por los canales que usted nos dio; no pide al niño su número ni lo agrega a redes sociales.',
            'No pedimos a los niños crear cuentas en herramientas de IA que, según las condiciones de cada empresa, exigen más edad. ChatGPT, por ejemplo, pide permiso de un padre o madre a los menores de 18 años, y Claude exige 18 años cumplidos. Nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">guía de edades de las herramientas de IA</a> (en inglés) revisa más de cien.'
          ],
          rightH3: 'Lo que le pedimos a usted',
          right: [
            'Que la computadora esté en un lugar común de la casa, no a puerta cerrada, sobre todo con los más pequeños. No hace falta que se siente al lado: basta con que pueda pasar y ver.',
            'Que en las primeras clases un adulto esté cerca para ayudar con lo técnico: el audio que no suena, la cámara que no prende. A partir de la tercera o cuarta clase la mayoría de niños entra sola sin problema.'
          ] },
        { kind: 'p', mt: true, html: 'El MINEDU también trabaja en la conexión de las escuelas: en septiembre de 2026 anunció un plan para conectar 55 000 escuelas públicas a internet satelital. Es una buena noticia para el aula, pero no reemplaza el hábito que se construye en casa, que es usar la computadora para crear y no solo para mirar.' }
      ]
    },
    {
      id: 'calendario',
      eyebrow: 'Colegio y horario',
      h2: '¿Cuándo conviene poner la clase online si el niño va al colegio?',
      lede: 'Fuera del horario del colegio y a una hora fija de la semana. Las clases online siguen durante todo el año escolar, y las semanas de gestión, cuando no hay clases lectivas, son un buen momento para un avance extra.',
      body: [
        { kind: 'table', numCols: [], caption: 'Año escolar 2026 en Perú: bloques de semanas lectivas y de gestión (Tabla 1 de la RM 501-2025-MINEDU)', head: ['Bloque', 'Duración', 'Fechas 2026'], rows: [
          ['Primer bloque lectivo', '9 semanas', 'Del 16 de marzo al 15 de mayo'],
          ['Semana de gestión', '1 semana', 'Del 18 al 22 de mayo'],
          ['Segundo bloque lectivo', '9 semanas', 'Del 25 de mayo al 24 de julio'],
          ['Semanas de gestión', '2 semanas', 'Del 27 de julio al 7 de agosto'],
          ['Tercer bloque lectivo', '9 semanas', 'Del 10 de agosto al 9 de octubre'],
          ['Semana de gestión', '1 semana', 'Del 12 al 16 de octubre'],
          ['Cuarto bloque lectivo', '9 semanas', 'Del 19 de octubre al 18 de diciembre']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Educación, Resolución Ministerial N.° 501-2025-MINEDU, Norma Técnica para el Año Escolar 2026, Tabla 1, página 7 del PDF firmado, revisada a ojo el 9 de noviembre de 2026. La norma permite que las DRE y UGEL fijen otra distribución por razones bioclimáticas o sociales, y cada colegio organiza su año en bimestres, trimestres u otra forma; confirme las fechas con el colegio de su hijo. El calendario de 2027 aún no estaba publicado en esa fecha.' },
        { kind: 'two', mt: true,
          leftH3: 'Según el turno del colegio',
          left: [
            'Si su hijo estudia en la mañana, las horas que siguen al almuerzo y a los deberes suelen funcionar: entre las 4:00 y las 6:00 p. m., hora de Perú, muchos niños todavía están despiertos y concentrados.',
            'Si estudia en la tarde, la mañana es el momento natural. Una clase a las 9:00 o 10:00 a. m. deja tiempo para alistarse y salir al colegio sin prisa.'
          ],
          rightH3: 'La hora en la India',
          right: [
            'Los mentores viven en la India, donde el reloj marca diez horas y media más que en Perú; como allá y aquí se mantiene la misma hora en invierno y en verano, esa diferencia es fija. Las 9:00 a. m. en Perú son las 7:30 p. m. en la India; las 4:00 p. m. en Perú, las 2:30 a. m. del día siguiente allá.',
            'Usted no tiene que hacer esa cuenta: al reservar, elige la hora en el reloj de Perú y el sistema la muestra así. Los ejemplos son solo conversiones, no un horario de grupos.'
          ] },
        { kind: 'p', mt: true, html: 'Para las vacaciones de verano, de enero a marzo, preparamos páginas aparte: <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> y <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">talleres de verano de programación online</a>, con planes de verano propios por edad.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Las primeras semanas',
    h2: '¿Cómo saber si las clases online le están funcionando a su hijo?',
    lede: 'Estas son las señales que nuestros mentores esperan ver en el primer mes y medio. La tabla es nuestra y orientativa: cada niño tiene su ritmo.',
    table: { caption: 'Señales de adaptación a la clase online (nuestras)', head: ['Momento', 'Semana aproximada', 'Lo que debería notar'], rows: [
      ['Primera clase', 'Semana 1', 'Su hijo termina un pequeño programa propio y quiere mostrárselo'],
      ['Se acostumbra al inglés', 'Semanas 2 y 3', 'Responde al mentor con frases cortas y entiende las instrucciones de la pantalla'],
      ['Entra solo', 'Semanas 3 y 4', 'Abre el enlace, el editor y comparte pantalla sin ayuda'],
      ['Lee sus errores', 'Semanas 4 y 5', 'Ante un mensaje en rojo, busca la línea antes de pedir ayuda'],
      ['Explica lo que hizo', 'Semana 6', 'Le cuenta a usted, con sus palabras, cómo funciona su programa']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Si después de tres semanas su hijo sigue sin entender al mentor, escríbanos: a veces basta con cambiar de grupo o pasar a clases individuales por un tiempo.',
      'No mida el avance por las horas frente a la pantalla. Mídalo por lo que su hijo puede explicarle sin mirar el código.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Si no entiende lo que dijo el mentor, dígalo: "Can you repeat, please?" es una frase perfecta.',
      'Antes de pedir ayuda con un error, lea el mensaje completo una vez. Muchas veces dice exactamente qué línea falla.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos en línea',
    h2: 'Otros nueve cursos online, de 6 a 12 años',
    lede: 'Todos se dictan en vivo, en inglés y por videollamada, en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Para los más pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'PRN / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Bloques de colores que se encajan como piezas, de Scratch a juegos sencillos.' },
        { code: 'PRN / BASE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas con lógica', blurb: 'Patrones, secuencias y acertijos que preparan la cabeza para programar.' },
        { code: 'PRN / BASE / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental con sentido', blurb: 'Entender los números en lugar de memorizar trucos, de 5 a 10 años.' }
      ] },
      { num: 'II', h3: 'Crear y publicar', sub: 'De 8 a 12 años', courses: [
        { code: 'PRN / CREA / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Luau dentro de Roblox Studio: obstáculos, puntajes y mundos propios.' },
        { code: 'PRN / CREA / 02', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una primera aplicación para el celular, armada pieza por pieza.' },
        { code: 'PRN / CREA / 03', slug: 'kids-ai-web-development-course', title: 'Mi primera web', blurb: 'HTML y CSS para publicar una página propia en internet.' }
      ] },
      { num: 'III', h3: 'Pensar con IA y código', sub: 'De 8 a 12 años', courses: [
        { code: 'PRN / IA / 01', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA, de verdad', blurb: 'Cómo aprende una máquina, en qué se equivoca y por qué hay que revisarla.' },
        { code: 'PRN / IA / 02', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos en tres mundos', blurb: 'Scratch, Roblox y Minecraft en un recorrido de creación de juegos.' },
        { code: 'PRN / IA / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ con acertijos', blurb: 'Un lenguaje escrito y exigente, presentado con juegos, de 9 a 12 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Horarios y formato',
    h2: '¿Cómo se organizan las clases en vivo desde Perú?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del colegio', l: 'Para quien estudia en el turno tarde y rinde más temprano.' },
      { time: 'Después de las tareas', l: 'Para quien sale del colegio al mediodía y descansa primero.' },
      { time: 'A su medida', l: 'Clases individuales en el día y la hora que la familia decida.' }
    ],
    cells: [
      { h3: 'Pantalla compartida', p: 'El mentor ve lo que su hijo escribe, mientras lo escribe.' },
      { h3: 'Mentor de siempre', p: 'La misma persona durante todo el curso, que conoce a su hijo.' },
      { h3: 'Inglés pausado', p: 'Frases cortas, ejemplos en pantalla y tiempo para responder.' },
      { h3: 'Nada que comprar', p: 'Herramientas gratuitas que corren en la computadora de la casa.' },
      { h3: 'Nota para la familia', p: 'Un resumen breve de lo trabajado y del siguiente paso.' },
      { h3: 'A su elección', p: 'Grupo de quince a veinte niños, o su hijo a solas con el mentor.' }
    ]
  },

  projectsH2: 'Proyectos que hacen nuestros estudiantes',
  projectsLede: 'Lo que empieza con una lista de revisión termina, años después, en aplicaciones completas. Abajo, algunos trabajos de estudiantes mayores; la galería entera está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones publicadas en Google por familias y estudiantes, copiadas tal como se escribieron, en inglés.',

  fees: {
    h2: 'Precios de las clases online para Perú',
    lede: 'Mostramos la mensualidad en dólares estadounidenses y el cobro se hace con tarjeta de crédito o débito. El banco que emitió su tarjeta convierte el importe, de modo que en su estado de cuenta puede aparecer una cifra un poco distinta según el tipo de cambio de ese día.',
    free: ['Una clase de prueba gratis, en vivo', 'El mentor revisa el equipo y la conexión con usted', 'Sin tarjeta y sin obligación de inscribirse'],
    group: ['De quince a veinte niños de edades cercanas', 'Un mismo mentor de principio a fin', 'Dos clases en vivo a la semana', 'Pago mes a mes, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'El ritmo y los temas que él necesita', 'El día y la hora que usted fije']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación para niños online: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: se dictan solo en inglés, siempre en vivo y por internet. Para muchas familias peruanas ese es el atractivo, porque su hijo suma práctica del idioma a cada sesión de código sin agregar otra actividad a la semana. El mentor pronuncia con claridad, repite cuando hace falta y espera la respuesta del niño. Según el índice EF EPI 2025, Lima tiene un dominio del inglés de nivel alto, y lo que más se fortalece en una clase conversada es la expresión oral.' },
      { q: '¿Las clases online son en vivo o grabadas?', a: 'En vivo. Su hijo y el mentor se conectan por videollamada a una hora acordada; el niño comparte su pantalla y programa mientras el mentor lo guía. No vendemos cursos grabados para niños.' },
      { q: '¿Se puede programar desde un celular o una tablet?', a: 'No lo recomendamos. Hace falta una computadora o laptop con teclado. Una tablet sirve solo en las primeras semanas para niños de 6 o 7 años que trabajan con bloques grandes.' },
      { q: '¿Qué velocidad de internet necesita mi hijo?', a: 'La de una videollamada normal, sin cortes. Importa más la estabilidad que la velocidad: si la conexión falla en un cuarto, acerque la computadora al router o use un cable de red.' },
      { q: 'Tenemos una sola computadora y dos hijos. ¿Cómo hacemos?', a: 'Ponga cada clase a una hora distinta. Como usted elige el horario, cada hijo puede tener su clase en un momento del día en que la computadora esté libre, y es útil crear un usuario separado para cada uno.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre los dos relojes hay siempre diez horas y media de diferencia, con la India por delante: si su hijo se conecta a las 5:00 p. m. en Perú, allá son las 3:30 a. m. del día siguiente. Usted reserva siempre en hora peruana.' },
      { q: '¿Desde qué edad funcionan las clases online?', a: 'Desde los 6 años, que es cuando el MINEDU ubica a un niño en 1° de primaria, trabajando con bloques grandes y muy poco texto. Con los más pequeños conviene que un adulto esté cerca en las primeras clases para ayudar con el audio y la cámara.' },
      { q: '¿Hay que instalar algo en la computadora?', a: 'Poco o nada. Scratch funciona en el navegador y Python se instala gratis; el mentor ayuda a dejarlo listo en la primera clase. Nunca pedimos programas pagados.' },
      { q: '¿Qué pasa si se corta la luz o internet durante la clase?', a: 'Avísenos por WhatsApp. En clases individuales se repone la clase en otra fecha; en clases grupales el mentor le envía a su hijo lo que se trabajó para que se ponga al día.' },
      { q: '¿Las clases dan un certificado válido para el colegio?', a: 'No. Somos una academia privada sin vínculo con el MINEDU ni con colegio alguno, así que nada de lo que su hijo haga con nosotros cuenta como nota escolar. Quien completa un curso recibe un certificado emitido por Modern Age Coders, y ese es el único documento que damos.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir leyendo',
    h2: 'Más lecturas antes de decidir',
    lede: 'Casi todas están escritas en inglés y completan lo que explica esta guía.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué enseña la primaria peruana, a qué edad empezar y una clase de colores en Python.' },
      { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027 de programación', p: 'Un plan propio para aprovechar el verano de enero a marzo desde casa.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra forma de enseñar, explicada en detalle.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Cómo explicamos la IA a un niño de primaria, sin abrir cuentas en ninguna herramienta.' },
      { href: '/student-labs', label: 'Student labs', p: 'Trabajos publicados por estudiantes de distintas edades.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, de los 6 años a la edad adulta.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase online gratis con su hijo',
    lede: 'Elija una hora en el reloj de Perú. En la clase gratis, de 30 a 45 minutos, el mentor comprueba con ustedes que la cámara, el micrófono y la conexión funcionan, le propone a su hijo un reto corto en Scratch o en Python y, al terminar, le dice qué curso y qué formato le convienen.',
    readFirst: 'Si prefiere leer primero: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestras clases y <a class="ag-inline-link" href="/courses">All courses</a> muestra cada programa (ambas en inglés).',
    note: 'Los mentores enseñan desde la India, siempre en vivo por internet y siempre en inglés. Si nos escribe por WhatsApp, hágalo en castellano sin problema.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos online para niños', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch de cero a juegos' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Programación con Minecraft' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para la familia', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas de IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos de estudiantes' }
      ] }
    ],
    bottomRight: 'Antes de la clase, correr la lista'
  },

  personalityCss: `
.ag-root.ag-prn .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-prn .ag-capsule { border-left-width: 6px; }
.ag-root.ag-prn .ag-steps li { line-height: 1.65; }
.ag-root.ag-prn .ag-table caption { text-align: left; }
.ag-root.ag-prn .ag-section-head h2 { max-width: 32ch; }
`,

  dossier: {
    curriculumAuthority: 'INEI boletín TIC II Trimestre 2026 (Cuadro 2.1, Cuadro 2.3, households with a computer by area, one computer versus two or more, home use, household size); MINEDU RM 501-2025 Tabla 1 (checked by eye), Edades normativas, CNEB competency 28 and the capacity "Crea objetos virtuales", the September 2026 satellite-internet note; tzdata for the clock; content/ai-tool-age-audit.json for AI tool ages. Read 9 November 2026. The checklist program, the step-by-step class, the comparison table and the adaptation table are our own.',
    localProject: 'A pre-class checklist in Python for a child of 9 to 12 taking virtual classes at home in Peru: equipo is a list of (thing, ready) pairs, a for loop unpacks each pair, prints [x] or [ ] and collects what is missing in faltan; run with python3 -I it prints Not ready yet. Missing: micrófono, then Missing: micrófono, audífonos when the headphones are False too, and Ready for class! when everything is True. Lesson family: a list of pairs unpacked in a for loop, collecting what is missing, an empty-list check.',
    requiredMentions: ['Not ready yet. Missing: micrófono', 'Ready for class!', 'el 74,3 % cuenta con una sola unidad', 'el 90,2 % de los usuarios de internet de 6 y más años se conectó con un celular', 'Cuadro N.° 2.3', 'Del 27 de julio al 7 de agosto', 'mejoras sucesivas y retroalimentación', '55 000 escuelas públicas', 'Antes de la clase, correr la lista', 'el 50,9 % de los hogares de cuatro o más miembros'],
    sources: [
      { claim: 'Devices used to go online (Cuadro 2.3), households with a computer by area, one computer versus two or more, home use, household size, households with internet by area, daily use; II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '2026 school calendar, Tabla 1 (teaching and management blocks), DRE/UGEL may vary it.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Normative age at 31 March.', url: 'https://www.gob.pe/institucion/minedu/informes-publicaciones/2742610-edades-normativas' },
      { claim: 'Competency 28 and the capacity of creating virtual objects through successive improvement and feedback.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Plan to connect 55,000 public schools to satellite internet (September 2026).', url: 'https://www.gob.pe/institucion/minedu/noticias/1438938-minedu-conectara-a-internet-satelital-a-55-000-escuelas-publicas' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; the capsule and an FAQ say every class is live, online and in English only.',
      'A local branch "cerca de mí": refused; we have no premises in Peru and the page says all classes are online.',
      'A minimum internet speed in Mbps: refused; the Zoom and Scratch requirement pages came back as JavaScript shells, so no figure is printed.',
      'Robot kits or hardware: none; the page says we teach programming and send nothing to the home.',
      'Any MINEDU or school endorsement, or an official certificate: none; only our own certificate of completion.',
      'A fixed group timetable: refused; Peru to India times are shown only as conversions.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: market (es subject door) | Scratch para niños en inglés: qué es, edades, en línea o descargado, y el paso siguiente | edge detection on Scratch's 480 by 360 stage: == misses the wall when the step jumps over it, >= catches it
'use strict';
// Scratch para niños en inglés (ag- Spanish-language door, Peru cluster row PE121, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Search (KEYWORDS.md, autocomplete gl=pe): "scratch para niños", "scratch para niños de primaria", "... de 6 años", "... de 7
// años", "... de 8 a 10 años", "scratch para niños online", "scratch para niños descargar", "curso de scratch para niños",
// "curso de scratch gratis", "programación para niños scratch".
// Spine: what Scratch is, from Scratch's own pages; free and online or offline, so what a paid live class adds; Scratch by grade
// (MINEDU normative ages); why use the English interface; one original lesson that is also a real Scratch bug (a sprite that never
// touches x = 240); when to leave Scratch; times.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/scratch-para-ninos-en-ingles/, read 2026-11-09):
//  Scratch Foundation, About (scratch.mit.edu/about): "Scratch was developed at the MIT Media Lab in 2007"; "In 2019, Scratch was
//    transferred from MIT to the Scratch Foundation: an independent nonprofit"; "200 million kids create on Scratch for free";
//    "created over a billion Scratch projects"; "a simple, block-based coding interface that they can drag and snap together: no
//    tricky syntax required"; "Scratch is free for everyone."; "an expert team of moderators".
//  Scratch statistics page (scratch.mit.edu/statistics/): "download the offline editor"; language menu includes "English",
//    "Español Latinoamericano", "Kichwa"; "The Scratch privacy policy has been updated, effective May 25, 2023."
//  scratch-gui source, src/lib/layout-constants.js (GitHub scratchfoundation, develop): "standardStageWidth: 480,"
//    "standardStageHeight: 360,".
//  scratch-vm source, src/blocks/scratch3_motion.js: ifOnEdgeBounce "// Measure distance to edges." ... "// Find the nearest edge."
//    ... "// Point away from the nearest edge."
//  NOT used: scratch.mit.edu/faq and scratchjr.org render client-side (no text in the raw HTML), so no Scratch age recommendation is
//    printed; our course ages only.
//  MINEDU Edades normativas (FACTS 14, 15); CNEB (FACTS 32, 33, 57): competency 28 transversal; primaria Inglés "2 2 3 3 3 3".
//  INEI TIC II Trimestre 2026 (MARKET 1.4): children 6 to 11 used the internet 68.2%; homes with a computer 36.4%.
//  EF EPI 2025 (MARKET 1.3): Lima 555 high. Time: tzdata (facts-geo/timezone.tsv).
// Our own example, run with python3 -I (borde.py in the src-pages folder):
//    frame 18 x 252 turns round
//    frame 54 x -252 turns round
//    checks with == : 0
//    checks with >= or <= : 2
// Lesson family: edge detection. Position plus step each frame, a wall test written with == that never fires because a step of 14
// jumps over 240, the same test with >= and <=, and the overshoot that Scratch's own bounce block corrects.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "# Our model of a sprite on Scratch's stage, which runs from x = -240 to x = 240.",
  'EDGE = 240',
  'x = 0',
  'step = 14',
  'equal_hits = 0',
  'bounces = 0',
  'for frame in range(1, 61):',
  '    x = x + step',
  '    if x == EDGE or x == -EDGE:',
  '        equal_hits = equal_hits + 1',
  '    if x >= EDGE or x <= -EDGE:',
  '        step = -step',
  '        bounces = bounces + 1',
  "        print('frame', frame, 'x', x, 'turns round')",
  "print('checks with == :', equal_hits)",
  "print('checks with >= or <= :', bounces)"
].join('\n');

const OUT = [
  'frame 18 x 252 turns round',
  'frame 54 x -252 turns round',
  'checks with == : 0',
  'checks with >= or <= : 2'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Scratch para niños en inglés' },
  slug: 'scratch-para-ninos-en-ingles',
  code: 'sni',
  accent: '#105E62',
  accentRationale: 'Scratch para niños en inglés: a dark stage teal #105E62, friendly without borrowing Scratch orange, and clearly apart from the greens of the Roblox and Minecraft doors; contrast 6.09 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Scratch para niños en inglés',
  title: 'Scratch para niños en inglés: clases en vivo en Perú',
  description: 'Scratch para niños de 6 a 12 años en Perú: qué es, desde qué edad, en línea o descargado y qué suma un mentor en vivo. Clases por internet y en inglés.',
  ogDescription: 'Scratch es gratis. Entonces, ¿para qué una clase? Qué dice Scratch de sí mismo, qué grado conviene, por qué usarlo en inglés y un gato que nunca toca el borde.',
  twitterDescription: 'Scratch para niños peruanos de 6 a 12 años con un mentor en vivo y en inglés, en grupo o uno a uno, en el horario que la familia escoja.',
  pageName: 'Scratch para niños en inglés, Perú',
  webPageDescription: 'Guía para familias en Perú sobre Scratch para niños: qué es según la Scratch Foundation, por qué es gratuito, si se usa en línea o descargado, qué edad y qué grado de primaria le convienen, por qué trabajar con la interfaz en inglés, una lección propia sobre detectar el borde del escenario y cuándo pasar de Scratch a Python.',
  courseDescription: 'Curso en vivo y en línea de Scratch para niños de 6 a 12 años en todo el Perú, dictado solo en inglés por mentores desde la India: personajes, movimiento, eventos, variables y juegos propios en el editor de bloques Scratch, en grupo o en clases individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Scratch para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es', label: 'Qué es Scratch' },
    { href: '#gratis', label: 'Gratis o con mentor' },
    { href: '#grados', label: 'Por grado' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#despues', label: 'Después de Scratch' }
  ],
  eyebrow: 'Perú &middot; Scratch &middot; Niños de 6 a 12 años',
  h1: 'Scratch para niños, con clases en vivo y en inglés',
  lede: 'Scratch es el lugar donde millones de niños escriben su primer programa sin teclear una sola palabra de código: encajan bloques de colores como piezas de un rompecabezas y el gato del escenario obedece. Es gratuito y cualquiera puede abrirlo hoy. Lo que una clase añade es otra cosa: alguien que pregunta por qué el gato hizo lo que hizo.',
  secondaryCta: { href: '#grados', label: 'Ver qué grado conviene' },
  wa: 'Hola Modern Age Coders, buscamos clases de Scratch en inglés para nuestro hijo o hija en Perú. ¿Podemos reservar una clase de prueba gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; Scratch con la interfaz en inglés',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Herramienta', 'Scratch, gratuito, en el navegador o descargado'],
    ['Interfaz', 'En inglés durante la clase'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés despacio, con mentor en vivo desde la India'],
    ['Prueba', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Scratch es un editor gratuito de programación por bloques, creado en el MIT Media Lab en 2007, con el que los niños arman juegos y animaciones encajando piezas. Modern Age Coders lo enseña a niños peruanos de 6 a 12 años en clases en vivo, por videollamada y en inglés, con mentores que trabajan desde la India: el niño usa Scratch con la interfaz en inglés y explica sus programas en ese idioma. Hay grupos y clases individuales, y la familia decide el día y la hora.',

  picks: {
    eyebrow: 'Cursos de Scratch',
    h2: 'Tres cursos para aprender Scratch según la edad',
    lede: 'Un curso corto solo de Scratch, uno largo que empieza en Scratch y llega más lejos, y uno para quien ya domina los bloques y quiere juegos más grandes.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'SNI / 01', title: 'Scratch de cero a juegos', alt: 'Imagen del curso completo de Scratch para niños', note: 'De 6 a 12 años, en tres o cuatro meses. Movimiento, eventos, variables y un juego terminado, todo con bloques que el niño encaja por sí mismo.' },
      { course: 'kids-coding-blocks-masterclass', code: 'SNI / 02', title: 'De Scratch a apps e IA', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años, a lo largo del año escolar. Empieza en Scratch y sigue con apps, Minecraft, Roblox y una primera probada de Python.' },
      { course: 'game-development-masterclass-for-kids', code: 'SNI / 03', title: 'Videojuegos más grandes', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'De 8 a 12 años. Para el que ya se mueve con soltura en Scratch: niveles, puntajes y luego otros motores como Roblox y Minecraft.' }
    ]
  },

  sections: [
    {
      id: 'que-es',
      eyebrow: 'Qué es Scratch',
      h2: '¿Qué es Scratch y para qué sirve en un niño?',
      lede: 'Scratch es un lenguaje y una comunidad de programación por bloques. Su propia web lo describe como una interfaz en la que los niños arrastran y encajan bloques, con una promesa clara: "no tricky syntax required".',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que Scratch dice de sí mismo, en sus propias páginas', head: ['Tema', 'Cita de la fuente', 'Qué significa para una familia peruana'], rows: [
          ['Origen', '"Scratch was developed at the MIT Media Lab in 2007"', 'Lleva casi veinte años en aulas de todo el mundo'],
          ['Quién lo mantiene', 'En 2019 pasó del MIT a la Scratch Foundation, "an independent nonprofit"', 'No es una empresa que venda cursos'],
          ['Costo', '"Scratch is free for everyone."', 'No hay que pagar nada para usarlo'],
          ['Tamaño', '"200 million kids create on Scratch for free"', 'Hay ejemplos y proyectos para remezclar sin fin'],
          ['Sin conexión', 'Su web ofrece "download the offline editor"', 'Se puede usar sin cuenta y sin publicar nada'],
          ['Idiomas', 'El menú incluye English, Español Latinoamericano y Kichwa, entre muchos', 'En clase lo dejamos en English'],
          ['Escenario', 'Código de Scratch: "standardStageWidth: 480" y "standardStageHeight: 360"', 'El mundo del gato mide 480 por 360 puntos']
        ] },
        { kind: 'source', html: 'Fuentes: scratch.mit.edu/about y scratch.mit.edu/statistics, leídas el 9 de noviembre de 2026; código abierto de Scratch en GitHub (scratch-gui, archivo layout-constants.js). Las citas están en inglés como las publica la Scratch Foundation. La tercera columna es nuestra lectura.' },
        { kind: 'p', mt: true, html: 'Para un niño de primaria, Scratch sirve para algo muy concreto: convertir una idea en algo que se mueve. Un gato que persigue al ratón, una historia con dos personajes que conversan, un juego de atrapar frutas. Para lograrlo tiene que pensar en orden, repetir lo que se repite, decidir qué pasa si algo toca otra cosa y llevar la cuenta de los puntos. Eso es programar, aunque no haya una sola línea de texto.' },
        { kind: 'p', html: 'Scratch también es una comunidad: la Scratch Foundation explica que un equipo de moderadores cuida que los proyectos y comentarios sean seguros. Aun así, compartir proyectos con desconocidos es una decisión de la familia. En nuestras clases nadie está obligado a publicar; el editor sin conexión o una cuenta que conoce un adulto bastan.' }
      ]
    },
    {
      id: 'gratis',
      eyebrow: 'Gratis o con mentor',
      h2: 'Si Scratch es gratis, ¿para qué una clase de Scratch?',
      lede: 'Porque el editor es gratuito, pero la pregunta correcta en el momento correcto no viene incluida. Muchos niños abren Scratch, copian un tutorial, el gato se mueve y ahí se quedan.',
      body: [
        { kind: 'two',
          leftH3: 'Scratch solo, en casa',
          left: [
            'Es perfecto para explorar. Un niño curioso puede pasar horas probando bloques y viendo qué hacen, y eso tiene mucho valor.',
            'El límite aparece con el primer error que no entiende. Sin nadie que le pregunte qué esperaba que pasara, cambia bloques al azar hasta que algo funciona, o abandona.',
            'Los videos de "curso de Scratch gratis" enseñan a repetir pasos. Rara vez enseñan a encontrar por qué un programa propio falla.'
          ],
          rightH3: 'Scratch con un mentor en vivo',
          right: [
            'El mentor ve la pantalla del niño y pregunta, en inglés: "what do you think will happen?" antes de pulsar la bandera verde.',
            'Cuando algo falla, no lo arregla: le pide al niño que lea su programa en voz alta, bloque por bloque, hasta que él mismo encuentre el problema.',
            'Cada semana hay un proyecto propio, no una copia. Al final del curso el niño tiene juegos que diseñó él y sabe explicarlos.'
          ] },
        { kind: 'p', mt: true, html: 'Esa es la diferencia que más nos importa: enseñar a pensar y a resolver, no a copiar respuestas. Con Scratch es especialmente fácil copiar, porque cualquier proyecto se puede remezclar con un clic. Remezclar está bien para aprender, siempre que el niño pueda explicar después cada bloque que dejó.' },
        { kind: 'p', html: 'Si busca algo para el verano, los <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">talleres de verano de programación para niños</a> ordenan este mismo contenido por edades para enero, febrero y marzo.' }
      ]
    },
    {
      id: 'grados',
      eyebrow: 'Por grado',
      h2: '¿Scratch para niños de 6, 7 u 8 a 10 años? Qué cambia en cada grado',
      lede: 'Scratch funciona en toda la primaria, pero no de la misma forma. Un niño de 1° grado todavía está aprendiendo a leer; uno de 5° puede construir un juego con niveles y puntajes.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Scratch a lo largo de la primaria peruana: edad normativa por grado y lo que proponemos', head: ['Grado', 'Edad normativa', 'Scratch en ese grado (nuestra propuesta)'], rows: [
          ['1° de primaria', '6 años', 'Mover un personaje con pocas piezas, con apoyo de un adulto cerca'],
          ['2° de primaria', '7 años', 'Historias cortas: dos personajes que hablan por turnos'],
          ['3° de primaria', '8 años', 'Repeticiones y eventos: si toco la tecla, el gato salta'],
          ['4° de primaria', '9 años', 'Variables: puntos, vidas y un cronómetro'],
          ['5° de primaria', '10 años', 'Condiciones combinadas y el borde del escenario, como el ejemplo de esta página'],
          ['6° de primaria', '11 años', 'Un juego completo con niveles, y la pregunta de pasar a Python']
        ] },
        { kind: 'source', html: 'La edad de cada grado viene del cuadro de edades normativas del MINEDU para la Educación Básica Regular, con la edad cumplida al 31 de marzo. La tercera columna la escribimos nosotros; ni el MINEDU ni la Scratch Foundation la proponen. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Las búsquedas de los padres peruanos reflejan esa variedad: "Scratch para niños de 6 años", "de 7 años", "de 8 a 10 años". La respuesta corta es que sí a todas, cambiando el tipo de proyecto. Con 6 años preferimos grupos pequeños de la misma edad o una clase individual, sesiones más cortas y un adulto a la vista, porque leer las etiquetas de los bloques todavía cuesta.' },
        { kind: 'p', html: 'En el colegio no hay un área de programación: el CNEB trata la competencia digital, la 28, como transversal, sin horas propias. En cambio, el inglés sí tiene horas: dos por semana en 1° y 2° de primaria y tres de 3° a 6°, según el plan de estudios. Scratch en inglés une las dos cosas.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Interfaz en inglés',
      h2: '¿Por qué usar Scratch en inglés si existe en español?',
      lede: 'Scratch se puede poner en Español Latinoamericano, y para un niño que estudia solo eso está bien. En nuestras clases lo usamos en inglés porque la clase es en inglés y porque el siguiente lenguaje que aprenda también lo será.',
      body: [
        { kind: 'p', html: 'Los bloques de Scratch en inglés dicen cosas como "when green flag clicked", "move 10 steps", "forever", "if on edge, bounce" o "change score by 1". Son frases cortas, muy repetidas y siempre ligadas a algo que el niño ve suceder. Pocas formas de practicar un idioma son tan concretas: la palabra "forever" deja de ser vocabulario y pasa a ser el gato dando vueltas sin parar.' },
        { kind: 'three', cells: [
          { h3: 'Vocabulario con sentido', p: 'Move, turn, repeat, wait, if, else: palabras que el niño usa veinte veces por clase y nunca olvida.' },
          { h3: 'Hablar del programa', p: 'El mentor le pide explicar su proyecto en inglés. Primero con dos palabras; semanas después, con frases completas.' },
          { h3: 'Puente a Python', p: 'Cuando llegue a Python, "if", "else", "while" y "for" ya le resultarán familiares.' }
        ] },
        { kind: 'p', mt: true, html: 'No enseñamos inglés como materia ni somos una academia de idiomas; el mentor habla claro, despacio y repite, porque la meta es programar. El EF EPI 2025 coloca a Lima en la banda "High", con 555 puntos, mientras que el Perú en conjunto queda en "Moderate". Si a su familia le interesa sobre todo el lado del idioma, la página de <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> lo trata con más detalle.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se aprende a pensar con Scratch? Un ejemplo de clase',
      lede: 'Un clásico de 5° de primaria: el gato debe cruzar el escenario de lado a lado y dar media vuelta al llegar al borde. Muchos niños escriben "si x es igual a 240, gira". Y el gato se escapa de la pantalla.',
      body: [
        { kind: 'p', html: 'El escenario de Scratch mide 480 puntos de ancho, según su código fuente, así que va de x igual a -240 a x igual a 240. Para que el niño entienda por qué su gato se escapa, el mentor reproduce el problema en un modelo de Python escrito por nosotros: la posición avanza 14 puntos en cada cuadro y se comprueba el borde de dos maneras distintas.' },
        { kind: 'code', label: 'El gato que nunca toca el borde', lang: 'Python', code: PY, note: '<code>step</code> es cuánto avanza el gato en cada cuadro de animación. La primera prueba exige que <code>x</code> sea exactamente 240; la segunda acepta 240 o más. El modelo trata al gato como un punto, sin ancho.' },
        { kind: 'code', label: 'Lo que muestra Python', lang: 'Salida', code: OUT, note: 'Salida literal de Python 3 en nuestra computadora. La prueba con <code>==</code> nunca se cumple: el gato pasa de 238 a 252 sin pisar el 240. La prueba con <code>&gt;=</code> lo detecta dos veces, una en cada borde.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ver el fallo en Scratch.</strong> El niño arma "move 14 steps" dentro de un "forever" y un "if x position = 240". El gato sale de la pantalla y no vuelve. Primera pregunta: ¿por qué?',
          '<strong>Contar en voz alta.</strong> 14, 28, 42... El mentor pide seguir la cuenta. Al llegar a 238, el siguiente número es 252. El 240 nunca aparece en la lista.',
          '<strong>Cambiar la pregunta.</strong> En vez de "¿es igual a 240?", preguntar "¿llegó a 240 o lo pasó?". En Scratch eso se arma con el bloque "greater than" y un "or".',
          '<strong>Notar el exceso.</strong> Incluso con la prueba buena, el gato queda en 252, doce puntos fuera. La solución de Scratch, el bloque "if on edge, bounce", mide la distancia a cada borde, busca el más cercano y apunta al gato hacia adentro, como se lee en su código.',
          '<strong>Probar con otro paso.</strong> El reto final: con un paso de 12 sí se pisa el 240. ¿Por qué? Porque 240 dividido entre 12 da exacto. El niño descubre que su programa "funcionaba" por casualidad.'
        ] },
        { kind: 'p', mt: true, html: 'Ese último punto es la lección más útil de la clase: un programa que funciona con unos números puede fallar con otros. Comparar con "igual" cuando las cosas avanzan a saltos es un error que aparece en videojuegos, en apps y en cualquier programa con movimiento. El niño que lo descubre a los 10 años con un gato no lo olvida.' }
      ]
    },
    {
      id: 'despues',
      eyebrow: 'Después de Scratch',
      h2: '¿Cuándo debe un niño pasar de Scratch a otro lenguaje?',
      lede: 'Cuando Scratch empieza a quedarle chico, no cuando cumple cierta edad. Hay tres señales claras, y suelen aparecer entre 5° y 6° de primaria.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Pide escribir', p: 'Dice que arrastrar bloques es lento o pregunta cómo se hacen "los programas de verdad". Es el momento de Python.' },
          { h3: 'Sus proyectos crecen', p: 'Tiene decenas de bloques en un solo personaje y le cuesta encontrar dónde está cada cosa. Necesita funciones y archivos.' },
          { h3: 'Quiere mundos en 3D', p: 'Ya no le basta el escenario plano. Roblox o Minecraft le dan un mundo nuevo con la misma lógica.' }
        ] },
        { kind: 'p', mt: true, html: 'Nada de lo aprendido se pierde. Un bucle "repeat 10" de Scratch es un <code>for</code> de Python; un "if" sigue siendo un <code>if</code>; una variable de puntos es una variable. Para el niño curioso por la inteligencia artificial, el <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">curso de inteligencia artificial para niños</a> es otra salida natural después de Scratch.' },
        { kind: 'p', html: 'Si quiere ver todas las opciones de la primaria en un solo lugar, nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> las ordena por grado. Recuerde que no damos notas ni constancias para el colegio y que no tenemos relación con el MINEDU ni con la Scratch Foundation: al terminar, el niño recibe un certificado de finalización emitido por nosotros.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora puede mi hijo tomar clases de Scratch con un mentor en la India?',
      lede: 'A la hora que usted escoja. Todo el año la India va diez horas y media por delante del Perú, porque ningún país cambia la hora.',
      body: [
        { kind: 'p', html: 'Para ubicarse, con UTC-5 para Lima y UTC+5:30 para la India: un martes a las 7:00 a. m. en Lima, en la India son las 5:30 p. m. del martes. Las 9:30 a. m. de un sábado limeño equivalen a las 8:00 p. m. de ese sábado en la India. Y las 5:00 p. m. de Lima son las 3:30 a. m. del día siguiente allá. Ninguna de estas horas es un turno: son solo conversiones, y la sesión se agenda donde le acomode a la familia.' },
        { kind: 'p', html: 'Con niños de 6 y 7 años sugerimos sesiones de unos 40 minutos y, si se puede, a la misma hora cada semana, porque la rutina los ayuda. Desde 3° de primaria una hora completa rinde bien.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si mi hijo avanza en Scratch?',
    lede: 'Cinco niveles que nuestros mentores usan para describir el progreso en Scratch. Los definimos nosotros; no son una escala de la Scratch Foundation ni del colegio.',
    table: { caption: 'Cinco niveles de dominio de Scratch (nuestros)', head: ['Nivel', 'Grado frecuente', 'Lo que logra sin ayuda'], rows: [
      ['1. Mueve', '1° y 2°', 'Hace que un personaje camine y diga algo'],
      ['2. Repite', '3°', 'Usa repeticiones en vez de copiar el mismo bloque'],
      ['3. Cuenta', '4°', 'Lleva puntos y vidas en variables'],
      ['4. Detecta', '5°', 'Resuelve choques y bordes con condiciones correctas'],
      ['5. Diseña', '6°', 'Planifica un juego con niveles antes de programarlo']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pídale que le muestre un proyecto y le explique un solo bloque difícil. Esa explicación vale más que el juego entero.',
      'Si su hijo remezcló un proyecto ajeno, pregúntele qué cambió él. Si no lo sabe, todavía no es suyo.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Antes de pulsar la bandera verde, adivine qué va a pasar.',
      'Si el gato se escapa de la pantalla, cuente sus pasos uno por uno.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para antes, durante y después de Scratch',
    lede: 'Todos en directo y en inglés, con un mentor que conoce a su hijo, en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Junto a Scratch', sub: 'De 6 a 12 años', courses: [
        { code: 'SNI / JUNTO / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonar para pequeños', blurb: 'Para 6 a 9 años: series, figuras y reglas escondidas.' },
        { code: 'SNI / JUNTO / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Dividir un problema y probar cada parte.' },
        { code: 'SNI / JUNTO / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Scratch con ayuda de IA', blurb: 'Para 8 a 12 años, con la regla de entender cada bloque.' }
      ] },
      { num: 'II', h3: 'Mundos de juego', sub: 'De 7 a 14 años', courses: [
        { code: 'SNI / MUNDO / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft', blurb: 'Bloques que construyen en tres dimensiones.' },
        { code: 'SNI / MUNDO / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox', blurb: 'El primer lenguaje escrito, dentro de Roblox Studio.' },
        { code: 'SNI / MUNDO / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una aplicación propia para el celular de la familia.' }
      ] },
      { num: 'III', h3: 'Código escrito', sub: 'De 9 a 15 años', courses: [
        { code: 'SNI / CODIGO / 01', slug: 'python-ai-kids-masterclass', title: 'Python con IA', blurb: 'El salto natural desde Scratch, con proyectos.' },
        { code: 'SNI / CODIGO / 02', slug: 'kids-ai-web-development-course', title: 'Páginas web', blurb: 'HTML y diseño para una web propia.' },
        { code: 'SNI / CODIGO / 03', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Para 10 a 15 años: números y gráficos en Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una clase de Scratch por internet?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes del colegio, para los que madrugan.' },
      { time: 'Fin de semana', l: 'Cuando hay tiempo para un proyecto largo.' },
      { time: 'Variable', l: 'En clases individuales, se ajusta a la semana.' }
    ],
    cells: [
      { h3: 'Pantalla a la vista', p: 'El mentor ve el Scratch del niño y comenta cada cambio.' },
      { h3: 'Adivinar antes', p: 'Antes de cada prueba, el niño dice qué espera ver.' },
      { h3: 'Sin publicar a la fuerza', p: 'Compartir en la comunidad es opcional y lo decide la familia.' },
      { h3: 'Proyecto propio', p: 'Cada semana, algo que el niño inventó, no una copia.' },
      { h3: 'Mentor fijo', p: 'La misma persona sigue los proyectos de su hijo.' },
      { h3: 'Dos formatos', p: 'Grupo de quince a veinte o clase uno a uno.' }
    ]
  },

  projectsH2: 'Algunos proyectos de nuestros alumnos',
  projectsLede: 'Trabajos de estudiantes de distintas edades, muchos empezados en Scratch. En <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés, verá más.',
  reviewsLede: 'Reseñas de familias y alumnos en Google, en inglés y sin editar.',

  fees: {
    h2: 'Cuánto cuestan las clases de Scratch con mentor',
    lede: 'El precio mensual se publica en dólares estadounidenses y se cobra con tarjeta; la conversión la calcula su banco. Scratch en sí es gratuito: lo que se paga es el tiempo del mentor.',
    free: ['Primera clase sin costo', 'El mentor sugiere el curso según la edad', 'Ningún dato de tarjeta para probar'],
    group: ['Quince a veinte niños de edad parecida', 'Dos clases en directo por semana', 'Un mentor estable', 'Pago mensual, sin contrato de permanencia'],
    one: ['Su hijo y su mentor, nadie más', 'Ritmo y proyectos a su medida', 'Hora que se puede cambiar']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Scratch para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se dictan en inglés, en directo y por videollamada, con un mentor desde la India que habla despacio y repite lo necesario, y Scratch se usa con la interfaz en inglés. Muchas familias lo ven como una ventaja: el niño programa y, a la vez, practica el inglés que lleva en el colegio con frases que ve funcionar en la pantalla. El EF EPI 2025 ubica a Lima en la banda "High".' },
      { q: '¿Qué es Scratch?', a: 'Un editor gratuito de programación por bloques creado en el MIT Media Lab en 2007 y mantenido desde 2019 por la Scratch Foundation, una organización sin fines de lucro. Los niños encajan bloques para crear juegos, historias y animaciones.' },
      { q: '¿Scratch es gratis?', a: 'Sí. La Scratch Foundation dice en su web que Scratch es gratuito para todos. Nuestras clases tienen costo porque incluyen un mentor en vivo que guía a su hijo; el programa en sí no se paga.' },
      { q: '¿Se usa en línea o hay que descargarlo?', a: 'Las dos formas existen: Scratch funciona en el navegador y su web ofrece también un editor sin conexión para descargar. En clase usamos la opción que funcione bien en su computadora.' },
      { q: '¿Desde qué edad puede un niño aprender Scratch?', a: 'Nuestro curso de Scratch recibe niños de 6 a 12 años. Con 6 años, en 1° de primaria, los proyectos son cortos y sencillos; de 8 a 10 años el niño ya maneja variables y condiciones.' },
      { q: '¿Mi hijo tiene que publicar sus proyectos en internet?', a: 'No. Publicar en la comunidad de Scratch es opcional y lo decide la familia. Se puede trabajar con el editor sin conexión o con una cuenta que maneje un adulto.' },
      { q: '¿Qué computadora necesita?', a: 'Una laptop o computadora de escritorio con navegador actualizado y conexión estable. Con 6 o 7 años, un mouse ayuda mucho a arrastrar bloques. Audífonos con micrófono facilitan conversar con el mentor.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Un ejemplo: las 7:00 a. m. de Lima son las 5:30 p. m. en la India.' },
      { q: '¿Después de Scratch qué sigue?', a: 'Normalmente Python, porque el niño ya conoce bucles, condiciones y variables. Otros prefieren seguir con juegos en Roblox o Minecraft.' },
      { q: '¿Recibe certificado?', a: 'Sí, un certificado de finalización emitido por Modern Age Coders al terminar el curso. No es un documento del colegio ni del MINEDU, y no tenemos relación con la Scratch Foundation.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, cada mes, en dólares estadounidenses; su banco aplica el tipo de cambio. La clase de prueba es gratis y sin tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Lecturas para seguir con Scratch',
    lede: 'Varias páginas están en inglés, como las clases.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes for kids', p: 'Nuestro curso de Scratch explicado para familias de cualquier país.' },
      { href: '/scratch-not-working-help', label: 'Scratch not working help', p: 'Qué hacer cuando Scratch no carga o un proyecto no responde.' },
      { href: '/how-to-make-a-video-game-for-kids', label: 'How to make a video game for kids', p: 'Los pasos para el primer videojuego de un niño.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'Todas las opciones de primaria, grado por grado.' },
      { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano de programación', p: 'Ideas para empezar en el verano peruano.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Lo que pasa en una sesión con nuestros mentores.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de Scratch de prueba',
    lede: 'En la clase gratuita el mentor saluda a su hijo en un inglés muy sencillo, le pide mover al gato con tres bloques y le hace dos o tres preguntas. Con lo que observa, le sugiere el curso y el ritmo adecuados.',
    readFirst: 'Si prefiere leer primero, en <a class="ag-inline-link" href="/scratch-coding-classes-for-kids">Scratch coding classes for kids</a> está el detalle del curso y en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> nuestro método. Ambas en inglés.',
    note: 'Todo el curso ocurre en línea, en tiempo real y en inglés, con un mentor que enseña desde la India. Cualquier consulta previa se la respondemos por WhatsApp en castellano.',
    formNote: 'Sin costo y sin compromiso; no pedimos tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Scratch', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Curso de Scratch' },
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques, apps e IA' },
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Verano en inglés' }
      ] }
    ],
    bottomRight: 'Si el gato se escapa, cuente sus pasos'
  },

  personalityCss: `
.ag-root.ag-sni .ag-hero h1 { letter-spacing: -0.005em; max-width: 18ch; }
.ag-root.ag-sni .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-sni .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-sni .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-sni .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Scratch Foundation pages About and Statistics (read 2026-11-09); Scratch open-source code on GitHub (scratch-gui layout-constants.js, scratch-vm scratch3_motion.js); MINEDU Edades normativas; CNEB competency 28 and primaria Inglés hours; EF EPI 2025; tzdata. Scratch FAQ and ScratchJr pages render client-side, so no Scratch age recommendation is printed. The grade column, the mastery levels, the sprite model and its numbers are our own.',
    localProject: 'A Python model of a Scratch sprite for children of about 10: x moves 14 per frame on a stage from -240 to 240; a wall test with == never fires (the sprite jumps from 238 to 252), the same test with >= and <= fires twice (frames 18 and 54, x = 252 and -252). Run with python3 -I. Lesson family: edge detection, equality against a stepped value, and the overshoot Scratch corrects in ifOnEdgeBounce.',
    requiredMentions: ['El gato que nunca toca el borde', 'frame 54 x -252 turns round', 'what do you think will happen?', 'Lo que Scratch dice de sí mismo, en sus propias páginas', 'Scratch a lo largo de la primaria peruana: edad normativa por grado y lo que proponemos', 'Al llegar a 238, el siguiente número es 252.', 'Cinco niveles de dominio de Scratch (nuestros)', 'Si el gato se escapa, cuente sus pasos'],
    sources: [
      { claim: 'Scratch developed at the MIT Media Lab in 2007; transferred in 2019 to the Scratch Foundation; free for everyone; 200 million kids; block-based, no tricky syntax.', url: 'https://scratch.mit.edu/about' },
      { claim: 'Offline editor download; interface languages include English, Español Latinoamericano and Kichwa.', url: 'https://scratch.mit.edu/statistics/' },
      { claim: 'Standard stage 480 by 360.', url: 'https://raw.githubusercontent.com/scratchfoundation/scratch-gui/develop/src/lib/layout-constants.js' },
      { claim: 'ifOnEdgeBounce measures the distance to each edge, finds the nearest and points away from it.', url: 'https://raw.githubusercontent.com/scratchfoundation/scratch-vm/develop/src/blocks/scratch3_motion.js' },
      { claim: 'Normative ages by grade.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'CNEB competency 28 transversal; primaria English hours 2 2 3 3 3 3.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555 high, Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'A Scratch-recommended age range: not printed; the FAQ is rendered client-side and could not be read raw.',
      'Scratch statistics from the stats JSON: not used; its timestamp is July 2024 and the page could not confirm it.',
      'Any Scratch Foundation, MIT, MINEDU or school connection: none; the page says so.',
      'Real Scratch blocks run by us: the worked example is a Python model labelled ours; Scratch behaviour is quoted from its source code.',
      'Teaching English as a subject: refused; the page says we are not a language academy.'
    ]
  }
};

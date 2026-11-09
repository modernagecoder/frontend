// SHIP: market | 8 años, 3° de primaria: Scratch de verdad, Roblox o robótica, y la ENLA de 4° | a variable must be reset at the start: the score that never goes back to zero
'use strict';
// Programación para niños de 8 años (ag- Spanish-language door, Peru cluster row PE123, P4, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Search: "programación para niños de 7 años", "de 8 años", "robótica para niños de 7 a 11 años" (KEYWORDS.md section 1).
// Angle: the parent of a child in 3° de primaria (edad normativa 8 at 31 March) who has outgrown "moving the cat" and asks
// whether Scratch, Minecraft, Roblox or a robotics workshop comes next. Spine: what changes in 3° (CNEB Tabla N.° 6: Inglés
// 2 to 3, Matemática 5 to 4, libre disponibilidad 3 to 2; ciclo IV; competency 28 level 4; Ciencia y tecnología competency
// "Diseña y construye soluciones tecnológicas"); what an 8-year-old really builds in Scratch; Roblox and Minecraft; robotics
// (MINEDU DITE paper: Infoescuela 1996, LEGO WeDo 2009 to 2010); ENLA in 4° (2024 census, 2025 edition, 2026 revoked); a
// class built for 8; siblings sharing one computer (INEI 2026).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programacion-para-ninos-de-8-anos/,
// fetched 2026-11-08, quotes grepped in the raw text):
//  MINEDU Edades normativas (FACTS 13 to 15): "Se considera la edad normativa al 31 de marzo de cada año."; "IV 3er grado
//    4to grado".
//  CNEB (cneb/text.txt), Tabla N.° 6: "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3", "Personal social
//    3 3 4 4 4 4", "Ciencia y tecnología 3 3 4 4 4 4", "Horas de libre disponibilidad 3 3 2 2 2 2"; competency "Diseña y
//    construye soluciones tecnológicas para resolver problemas" (FACTS 38); competency 28 level 4 (PDF page 155 checked by
//    eye, image in src-pages): "comprende los procedimientos e intercambios que realiza para elegir y aplicar estrategias,
//    participar en actividades colaborativas, así como para representar experiencias y conceptos a través de objetos
//    virtuales."; "Nivel 4 Nivel esperado al final del ciclo IV".
//  MINEDU DITE robotics paper (FACTS 52 to 54): "desde el año 1996 con el proyecto Infoescuela, que llegó a más de 25
//    Instituciones Educativas a nivel nacional"; "en los años 2009 y 2010, el MINEDU dota de Kits LEGO Wedo a casi el 100% de
//    Instituciones Educativas de Gestión Pública de Educación Primaria"; "la robótica en educación no es el objetivo, es el medio."
//  ENLA: 2024 note (FACTS 63) "532 000 escolares de 4.º grado de primaria de 18 112 instituciones educativas"; 2025 note
//    (FACTS 58, 59) "entre el 11 y el 13 de noviembre", "más de 200 mil estudiantes de 8700 instituciones", "4.° grado de
//    primaria en Lectura y Matemática"; UMC homepage (FACTS 65) "Dejan sin efecto la R.M. Nº 285-2026-MINEDU, que dispuso la
//    implementación y ejecución de la ENLA 2026".
//  INEI Boletín TIC II trimestre 2026: "el 36,4% de los hogares del país disponía de al menos una computadora"; "el 74,3%
//    cuenta con una sola unidad"; "el 50,9% de los hogares con cuatro o más miembros contaba con al menos una computadora".
//  Time: tzdata America/Lima UTC-5 no DST; Asia/Kolkata UTC+5:30.
// Our own calculations (python3 -I): 3 x 45 = 135 minutes of Inglés a week in 3° against 2 x 45 = 90 in 2°; 4 x 45 = 180 of
//    Ciencia y tecnología; 2 x 45 = 90 of libre disponibilidad.
// Our own example (puntos1.py and puntos2.py in the scratchpad, run with python3 -I), exact output:
//    v1: "Partida con 3 manzanas -> puntos: 3" / "Partida con 4 manzanas -> puntos: 7"
//    v2 (puntos = 0 moved inside the loop): "... -> puntos: 3" / "Partida con 4 manzanas -> puntos: 4"
// Lesson family: a variable keeps its value until someone resets it; initialise it at the start of every run (the score bug).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY1 = [
  'puntos = 0',
  'for manzanas in [3, 4]:',
  '    for manzana in range(manzanas):',
  '        puntos = puntos + 1',
  "    print('Partida con', manzanas, 'manzanas -> puntos:', puntos)"
].join('\n');

const OUT1 = [
  'Partida con 3 manzanas -> puntos: 3',
  'Partida con 4 manzanas -> puntos: 7'
].join('\n');

const PY2 = [
  'for manzanas in [3, 4]:',
  '    puntos = 0',
  '    for manzana in range(manzanas):',
  '        puntos = puntos + 1',
  "    print('Partida con', manzanas, 'manzanas -> puntos:', puntos)"
].join('\n');

const OUT2 = [
  'Partida con 3 manzanas -> puntos: 3',
  'Partida con 4 manzanas -> puntos: 4'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para niños de 8 años' },
  slug: 'programacion-para-ninos-de-8-anos',
  code: 'pran',
  accent: '#656902',
  accentRationale: 'Programación para niños de 8 años: an olive-gold #656902, between the seedling green of the 6-year page and the darker olive of the 10-year page, so the age pages read as one family that ripens; contrast 4.77 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programación para niños de 8 años',
  title: 'Programación para niños de 8 años: Scratch y Roblox en inglés',
  description: 'Programación para niños de 8 años en Perú: juegos en Scratch, Roblox o robótica en 3° de primaria, con clases en vivo y en inglés, en grupo o individuales.',
  ogDescription: 'Qué construye en Scratch un niño de 8 años, qué cambia en 3° de primaria, si conviene Roblox o robótica y el error del puntaje que no vuelve a cero.',
  twitterDescription: 'Programación para niños de 8 años en Perú, en vivo y en inglés: Scratch, Minecraft y Roblox para 3° de primaria.',
  pageName: 'Programación para niños de 8 años',
  webPageDescription: 'Guía para familias en Perú con un hijo o hija de 8 años, en 3° de primaria: qué cambia en ese grado según el CNEB, qué puede construir en Scratch, Minecraft o Roblox, qué dice el MINEDU sobre la robótica educativa, cuándo llega la ENLA de 4°, cómo es una clase en vivo y en inglés pensada para esa edad y una lección propia sobre variables.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 8 años en Perú, solo en inglés: juegos en Scratch con puntaje y niveles, Minecraft y Roblox Studio, en clase grupal o individual, a la hora que la familia elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños de 8 años',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#ocho', label: 'A los 8' },
    { href: '#tercero', label: '3° de primaria' },
    { href: '#roblox', label: 'Roblox' },
    { href: '#robotica', label: 'Robótica' },
    { href: '#puntaje', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Programación por edades &middot; 8 años',
  h1: 'Programación para niños de 8 años: de Scratch a Roblox, en inglés',
  lede: 'A los 8 años muchos niños ya se aburrieron de mover un gatito y piden hacer "un juego de verdad". Es buena señal. Esta página explica qué puede construir un niño de 3° de primaria, qué le da el colegio ese año, cuándo tiene sentido Roblox o la robótica y cómo trabajamos con él en una clase en vivo, en inglés.',
  secondaryCta: { href: '#puntaje', label: 'Ver la lección del puntaje' },
  wa: 'Hola Modern Age Coders, nuestro hijo o hija tiene 8 años y está en 3° de primaria en Perú. Queremos probar una clase de programación en inglés, ¿es posible?',
  heroNote: 'Desde 2020 en vivo &middot; más de 10,000 estudiantes en el mundo &middot; a los 8, juegos con puntaje, niveles y un poco de inglés técnico',
  spec: [
    ['Edad', '8 años, 3° de primaria'],
    ['Herramientas', 'Scratch, Minecraft y Roblox Studio'],
    ['Qué construye', 'Juegos con puntaje, niveles y diálogos'],
    ['Formato', 'Grupo de quince a veinte o clases individuales'],
    ['Horario', 'Flexible, a pedido de la familia'],
    ['Primera clase', 'Gratis; no se pide tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'A los 8 años, en 3° de primaria, un niño ya puede programar juegos completos en Scratch con puntaje, niveles y diálogos, y dar sus primeros pasos en Minecraft o Roblox Studio. Modern Age Coders le enseña con clases en vivo, en línea y en inglés; desde la India, un mentor paciente y claro guía cada sesión por videollamada mientras su hijo programa en su propia computadora. Hay clase grupal y clases individuales, y el horario lo pone la familia, cualquier día. La robótica puede esperar: lo que mueve a cualquier robot es la lógica que se aprende programando.',

  picks: {
    eyebrow: 'Cursos para 3° de primaria',
    h2: 'Tres cursos que encajan a los 8 años',
    lede: 'Uno para dominar Scratch a fondo, uno para el niño que vive dentro de Minecraft y uno para el que solo piensa en Roblox.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRAN / 01', title: 'Scratch de cero a juegos', alt: 'Imagen del curso de Scratch para niños', note: 'Tres meses para pasar de las primeras animaciones a un juego terminado, con variables, niveles y sonido. Es el curso más natural para un niño de 8 años que empieza.' },
      { course: 'minecraft-coding-for-kids-course', code: 'PRAN / 02', title: 'Programar en Minecraft', alt: 'Imagen del curso de programación en Minecraft', note: 'De 7 a 12 años. Bloques de código que construyen, repiten y automatizan dentro de un mundo que su hijo ya conoce de memoria.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PRAN / 03', title: 'Juegos en Roblox', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'De 8 a 14 años. Para el fan de Roblox: diseña obstáculos y puntajes en Roblox Studio y empieza a leer sus primeras líneas de Luau.' }
    ]
  },

  sections: [
    {
      id: 'ocho',
      eyebrow: 'A los 8 años',
      h2: '¿Qué puede programar un niño de 8 años?',
      lede: 'Bastante más de lo que imaginan muchos padres. A los 8 años un niño lee instrucciones cortas, cuenta con soltura y aguanta un problema varios minutos sin soltarlo. Eso alcanza para hacer juegos de verdad en Scratch.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Juegos con reglas', p: 'Un personaje que atrapa manzanas, esquiva piedras y gana un punto por cada acierto. Para hacerlo hay que pensar en qué pasa cuando dos cosas se tocan, que es la primera condición "si... entonces" que su hijo escribe por su cuenta.' },
          { h3: 'Una variable', p: 'El puntaje es un número que cambia mientras se juega. Entender que ese número vive guardado en una cajita con nombre, y que alguien tiene que ponerlo en cero al empezar, es el gran descubrimiento de esta edad.' },
          { h3: 'Varios personajes a la vez', p: 'A los 6 se programa un personaje; a los 8 ya se coordinan varios, que se avisan entre ellos con mensajes. Es la primera idea de que un programa puede tener partes que trabajan en paralelo.' }
        ] },
        { kind: 'p', mt: true, html: 'Lo que todavía no conviene a esta edad es pasar a un lenguaje escrito como Python, salvo algunos niños que leen y teclean muy rápido. La mayoría disfruta más y aprende con más solidez exprimiendo Scratch durante este año: cada bloque que domina ahora será una línea de código que entenderá sin esfuerzo a los 9 o 10. Si su hijo ya hizo un taller de bloques en el colegio, en la clase gratis el mentor lo nota enseguida y lo ubica más adelante.' },
        { kind: 'p', html: 'Tampoco hace falta que su hijo sepa inglés para empezar. A los 8 años la mayoría reconoce palabras sueltas de las clases del colegio, y en Scratch las va a ver escritas en los bloques una y otra vez: <em>when</em>, <em>if</em>, <em>forever</em>, <em>score</em>. En pocas semanas las usa al hablar con el mentor, sin que nadie le haya pedido memorizarlas.' }
      ]
    },
    {
      id: 'tercero',
      eyebrow: 'El colegio en 3°',
      h2: '¿Qué cambia en 3° de primaria y dónde queda la computación?',
      lede: 'En 3° de primaria el niño entra al ciclo IV del CNEB y su semana se reorganiza: sube el Inglés, bajan Matemática y Comunicación, y crecen Ciencia y tecnología y Personal social. Lo que no aparece, en ningún grado, es un área de computación.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Horas pedagógicas semanales de 2° a 4° de primaria en las áreas que cambian al pasar a 3° (CNEB, Tabla N.° 6)', head: ['Área', '2°', '3°', '4°'], rows: [
          ['Matemática', '5', '4', '4'],
          ['Comunicación', '5', '4', '4'],
          ['Inglés', '2', '3', '3'],
          ['Personal social', '3', '4', '4'],
          ['Ciencia y tecnología', '3', '4', '4'],
          ['Horas de libre disponibilidad', '3', '2', '2'],
          ['Total de la semana', '30', '30', '30']
        ] },
        { kind: 'source', html: 'Fuente: Currículo Nacional de la Educación Básica del MINEDU, Tabla N.° 6, la de la semana de primaria, contada en horas pedagógicas de 45 minutos. Arte y cultura, Educación física, Educación religiosa y Tutoría no cambian entre 2° y 4° y no se muestran. El grado y la edad, del documento del MINEDU sobre edades normativas (3° de primaria, 8 años cumplidos al 31 de marzo; 3° y 4° forman el ciclo IV). Revisado el 8 de noviembre de 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Más inglés, menos libre disponibilidad',
          left: [
            'Con horas de 45 minutos, el Inglés pasa de 90 minutos semanales en 2° a 135 en 3° (cuenta nuestra). Es una buena noticia para un niño que además programa en inglés: lo que oye en una clase refuerza la otra.',
            'Las horas de libre disponibilidad bajan de tres a dos. Son las horas con las que algunos colegios arman talleres propios, así que en 3° queda menos espacio dentro del horario escolar para armar un taller tecnológico.'
          ],
          rightH3: 'Lo que el CNEB espera en el ciclo IV',
          right: [
            'En la competencia 28, la de los entornos virtuales, el nivel esperado al final del ciclo IV es que el estudiante "comprende los procedimientos e intercambios que realiza para elegir y aplicar estrategias, participar en actividades colaborativas, así como para representar experiencias y conceptos a través de objetos virtuales".',
            'Y en Ciencia y tecnología, que en 3° sube a cuatro horas, una de las competencias es "Diseña y construye soluciones tecnológicas para resolver problemas". Ninguna de las dos menciona programar, pero un juego de Scratch hecho para resolver algo concreto encaja en ambas.'
          ] },
        { kind: 'p', mt: true, html: 'Dicho de otra forma: el colegio le pide a su hijo que use la tecnología con criterio y que diseñe soluciones, pero no le da horas para aprender a programar. Ese hueco es el que llenamos, fuera del horario escolar y sin pretender reemplazar nada. No tenemos vínculo con el MINEDU ni con ningún colegio, y lo que su hijo haga con nosotros no se convierte en notas; al cerrar cada curso le damos una constancia nuestra de que lo completó.' }
      ]
    },
    {
      id: 'roblox',
      eyebrow: 'Scratch, Minecraft o Roblox',
      h2: '¿Scratch, Minecraft o Roblox a los 8 años?',
      lede: 'Las tres sirven, y la respuesta depende menos de la herramienta que de lo que motiva a su hijo. Lo que sí importa es el orden: Scratch primero enseña la lógica limpia; Minecraft y Roblox la ponen dentro de un mundo que el niño ya ama.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tres puertas de entrada a la programación a los 8 años (comparación nuestra)', head: ['', 'Scratch', 'Minecraft', 'Roblox Studio'], rows: [
          ['Cómo se programa', 'Bloques de colores', 'Bloques dentro del juego', 'Piezas y, poco a poco, código Luau'],
          ['Qué tan rápido se ve el resultado', 'Al instante', 'Al instante', 'Algo más lento al principio'],
          ['Qué se aprende sobre todo', 'Lógica, variables, eventos', 'Repetición y construcción en 3D', 'Diseño de juegos y primeras líneas escritas'],
          ['Cuenta y supervisión', 'Se puede usar sin cuenta', 'Licencia del juego, manejada por un adulto', 'Cuenta creada y supervisada por un adulto'],
          ['Nuestro curso', 'Desde los 6, ideal a los 8', 'De 7 a 12 años', 'De 8 a 14 años']
        ] },
        { kind: 'source', html: 'Comparación y edades de nuestros cursos, de Modern Age Coders. En Minecraft y Roblox recomendamos que la cuenta la cree y la revise una persona adulta de la familia.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo solo habla de Roblox',
          left: [
            'Aprovéchelo. Pasar horas jugando no es lo mismo que crear, pero el entusiasmo es un motor enorme. En nuestro curso de Roblox el niño deja de ser jugador y se convierte en diseñador: construye una pista de obstáculos, decide cuántos puntos da cada moneda y prueba si su juego es demasiado difícil.',
            'A los 8 años trabaja casi todo con las herramientas visuales de Roblox Studio y lee pequeños fragmentos de Luau que el mentor le explica. La escritura de código propio llega con los meses.'
          ],
          rightH3: 'Si todavía no sabe qué le gusta',
          right: [
            'Empiece por Scratch. Es gratis, funciona en el navegador, no exige cuenta y enseña las ideas sin distracciones. Después de unos meses, su hijo podrá elegir con conocimiento de causa si quiere seguir con juegos, pasar a Minecraft o probar Roblox.',
            'Muchos niños hacen los tres en orden: Scratch a los 8, Minecraft o Roblox a los 9, y Python a los 10. Nuestra página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación en inglés para niños de primaria</a> muestra ese recorrido completo.'
          ] }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Robótica para niños de 7 a 11 años o programación?',
      lede: 'En Perú "robótica" es la palabra que muchos padres usan para todo lo tecnológico, y es comprensible: el Estado lleva casi tres décadas llevando robots educativos a los colegios. Pero lo que hace funcionar a un robot es un programa, y ese programa se aprende igual sin robot.',
      body: [
        { kind: 'p', html: 'Un documento de la dirección de innovación tecnológica del MINEDU sobre robótica educativa cuenta que el ministerio usa la robótica "desde el año 1996 con el proyecto Infoescuela, que llegó a más de 25 Instituciones Educativas a nivel nacional", y que en 2009 y 2010 entregó kits LEGO WeDo a casi todos los colegios públicos de primaria del país. Es probable que su hijo haya visto uno de esos kits en su colegio, o que lo vea pronto.' },
        { kind: 'p', html: 'Ese mismo documento resume la idea en una frase que suscribimos: en educación, la robótica "no es el objetivo, es el medio". Un kit con motores y sensores sirve para ver la programación moverse en el mundo real, pero el aprendizaje de fondo está en las instrucciones: qué hacer primero, qué repetir, qué pasa si el sensor detecta algo. Un niño de 8 años que domina eso en Scratch llega al taller de robótica con ventaja.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que nosotros hacemos',
          left: [
            'Lo nuestro es el código: no trabajamos con piezas físicas y no mandamos kits a casa. Todo lo que su hijo necesita es una computadora con conexión.',
            'Cuando un niño pide robots, usamos personajes de Scratch o de Minecraft que se comportan como robots: avanzan, giran, detectan una pared y deciden. Es la misma lógica, sin piezas que se pierden debajo del sillón.'
          ],
          rightH3: 'Cuándo sí sumar un taller de robótica',
          right: [
            'Si el colegio o la municipalidad ofrecen un taller presencial con kits, es un buen complemento, sobre todo en vacaciones. Los bucles y condiciones que domine en nuestras clases son los mismos que pedirá ese robot.',
            'Si su hijo disfruta armar cosas con las manos tanto como programar, la robótica le dará satisfacciones. Pero conviene que la parte de la programación no se quede en copiar los pasos del manual.'
          ] }
      ]
    },
    {
      id: 'puntaje',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Por qué el puntaje no vuelve a cero? Una lección para 8 años',
      lede: 'Esta lección es nuestra y sale de un error que casi todos los niños cometen la primera vez que usan una variable. Se trabaja en Scratch, y al final mostramos la misma idea en Python para los adultos curiosos.',
      body: [
        { kind: 'ol', items: [
          '<strong>El juego.</strong> Un personaje atrapa manzanas que caen. Cada vez que toca una, el bloque <em>change score by 1</em> suma un punto. El niño juega una partida, atrapa 3 manzanas y el marcador dice 3. Perfecto.',
          '<strong>La sorpresa.</strong> Vuelve a apretar la bandera verde y atrapa 4 manzanas. El marcador dice 7. "That is not fair!", protesta. ¿De dónde salieron esos tres puntos de más?',
          '<strong>Investigar.</strong> El mentor pregunta en inglés: "What was the score when the new game started?" El niño mira con calma y descubre que el puntaje nunca volvió a cero: la variable recordaba la partida anterior.',
          '<strong>Arreglar.</strong> Falta un bloque al comienzo: <em>when green flag clicked</em>, luego <em>set score to 0</em>. El niño lo agrega, juega dos partidas y ahora ve 3 y 4.',
          '<strong>Explicarlo con sus palabras.</strong> Se le pide una frase: "The score remembers until I say zero." Puede decirla en castellano primero; el mentor le ayuda a pasarla al inglés.',
          '<strong>Buscar el mismo error en otro lado.</strong> ¿Qué otras cosas tendrían que reiniciarse al empezar? La posición del personaje, las vidas, el tiempo. El niño las revisa una por una.'
        ] },
        { kind: 'code', label: 'Versión 1 en Python: falta reiniciar', lang: 'Python', code: PY1, note: 'Un niño de 8 años no escribe esto todavía. Lo mostramos para que usted vea que el error de Scratch es el mismo error en cualquier lenguaje.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Copiado tal cual de la consola al correrlo nosotros con Python 3. La segunda partida arrastra los 3 puntos de la primera.' },
        { kind: 'code', label: 'Versión 2: el puntaje se reinicia al empezar cada partida', lang: 'Python', code: PY2, note: 'El único cambio es dónde está <code>puntos = 0</code>: ahora va dentro del bucle de partidas, igual que <em>set score to 0</em> va debajo de la bandera verde.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'También copiado de la consola, sin cambios. Cada partida empieza en cero.' },
        { kind: 'p', mt: true, html: 'Lo que su hijo aprende aquí va más allá de Scratch: una variable guarda lo último que se le dijo y no se borra sola. Esa idea aparece en todos los lenguajes, en una hoja de cálculo y hasta en la vida diaria (el contador de vueltas en la piscina, la alcancía). Y aprende algo igual de importante: cuando un resultado es raro, no se borra todo, se busca la causa. La frase en inglés que se lleva, "the score remembers until I say zero", la va a repetir en casa.' }
      ]
    },
    {
      id: 'enla',
      eyebrow: 'La ENLA',
      h2: '¿Qué es la ENLA y le tocará a mi hijo en 4° de primaria?',
      lede: 'La ENLA es la Evaluación Nacional de Logros de Aprendizaje del MINEDU. En sus últimas ediciones evaluó a los niños de 4° de primaria en lectura y matemática, que es justo el grado que viene después de los 8 años.',
      body: [
        { kind: 'table', numCols: [], caption: 'La ENLA en 4° de primaria, edición por edición', head: ['Edición', 'Qué se sabe', 'Fuente del MINEDU'], rows: [
          ['ENLA 2024', 'Prueba censal a 532,000 escolares de 4° de primaria de 18,112 colegios públicos y privados', 'Nota de prensa sobre los resultados'],
          ['ENLA 2025', 'Aplicada del 11 al 13 de noviembre de 2025 a más de 200 mil estudiantes de 8,700 colegios; en 4° de primaria, Lectura y Matemática', 'Nota de prensa previa a la aplicación'],
          ['ENLA 2026', 'Dejada sin efecto: la UMC anuncia que se anuló la resolución que la había dispuesto', 'Página de inicio de la UMC']
        ] },
        { kind: 'source', html: 'Fuentes: notas de prensa del MINEDU en gob.pe sobre la ENLA 2024 y la ENLA 2025, y la página de inicio de la Oficina de Medición de la Calidad de los Aprendizajes (UMC), que dice: "Dejan sin efecto la R.M. Nº 285-2026-MINEDU, que dispuso la implementación y ejecución de la ENLA 2026". Revisadas el 8 de noviembre de 2026. Qué pasará con una ENLA 2027 no está publicado.' },
        { kind: 'p', mt: true, html: 'No preparamos para la ENLA ni para ninguna prueba del MINEDU, y no tendría sentido hacerlo: es una medición del sistema, no un examen que el niño apruebe o desapruebe. Pero hay una relación indirecta. Programar en Scratch obliga a leer con atención (qué dice exactamente cada bloque), a contar y comparar números (el puntaje, las vidas, el tiempo) y a perseverar cuando algo no sale. Son hábitos que sirven en cualquier prueba de lectura o matemática, sin que nadie esté entrenando para ella.' }
      ]
    },
    {
      id: 'clase',
      eyebrow: 'La clase',
      h2: '¿Qué pasa en una sesión en inglés con un niño de 8 años?',
      lede: 'Más larga en cada tramo que la de los 6 años y con más protagonismo del niño. A los 8 ya puede trabajar varios minutos seguidos en un problema y, sobre todo, explicar lo que hizo.',
      body: [
        { kind: 'ol', items: [
          '<strong>Repaso con una pregunta.</strong> El mentor abre el proyecto de la clase anterior y pregunta: "What does this block do?" El niño lo explica con sus palabras. Así se nota qué quedó claro y qué no.',
          '<strong>Un reto nuevo.</strong> Se agrega una regla al juego: que las manzanas caigan más rápido, que aparezca una piedra que quita puntos. El mentor plantea el reto, no la solución.',
          '<strong>Tiempo para intentar.</strong> El niño trabaja solo, con la pantalla compartida. El mentor observa y solo interviene con preguntas cuando lo ve atascado.',
          '<strong>Probar con otro.</strong> En la clase grupal, dos niños prueban el juego del otro y dicen qué les pareció difícil. Escuchar a un compañero es la mitad del diseño de juegos.',
          '<strong>Cerrar con palabras.</strong> Cada niño cuenta en una o dos frases en inglés qué agregó hoy. El mentor anota las palabras nuevas para la nota a la familia.'
        ] },
        { kind: 'source', html: 'Estructura de clase propia de Modern Age Coders; el mentor la adapta al grupo y a cada niño.' },
        { kind: 'p', mt: true, html: 'En la clase grupal su hijo comparte sesión con niños de edad parecida, entre quince y veinte. Funciona muy bien a los 8 años porque a esta edad los niños se motivan viendo los juegos de los demás. Las clases individuales sirven al niño que avanza mucho más rápido o mucho más despacio que su grupo, o a la familia cuyo horario cambia cada semana. En ambos casos el mentor es el mismo durante todo el curso, y eso pesa: conoce cómo piensa su hijo y recuerda en qué se trabó la vez anterior.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Hermanos y computadora',
      h2: '¿Se puede programar en casa si hay una sola computadora para todos?',
      lede: 'Sí, y es lo más común en Perú. El reto no es tener muchos equipos, sino organizar el uso del que hay.',
      body: [
        { kind: 'p', html: 'El boletín de tecnologías de la información del INEI para el segundo trimestre de 2026 da tres datos que lo muestran. Solo un 36,4 % de las viviendas peruanas tiene al menos una computadora. De esos hogares, el 74,3 % tiene una sola. Y entre los hogares de cuatro o más personas, que son los que suelen tener niños, el 50,9 % cuenta con al menos una computadora. Es decir, en muchas casas una computadora la comparten padres e hijos, y a veces varios hermanos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Separar los horarios de los hermanos.</strong> Como las clases se acuerdan a cualquier hora, dos hermanos pueden tener sus sesiones en días distintos, o uno por la mañana y otro por la tarde.',
          '<strong>Una cuenta o carpeta por niño.</strong> Cada uno guarda sus proyectos de Scratch en su propio espacio, para que nadie borre el juego del otro.',
          '<strong>Audífonos propios.</strong> Si el hermano menor está jugando cerca, los audífonos ayudan a que el mentor se entienda bien.',
          '<strong>Practicar sin computadora.</strong> Entre clase y clase, su hijo puede dibujar en papel el siguiente nivel de su juego y anotar qué bloques va a necesitar. Llega a la clase con el plan hecho.'
        ] },
        { kind: 'p', mt: true, html: 'Si en su familia hay un niño de 8 y otro de 11 o 12, puede revisar la guía de <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">talleres de verano de programación por edades</a>, que propone un camino por grado; y si lo que preocupa es que el inglés no se pierda en las vacaciones, la página de <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> está pensada para eso. Entre Perú y la India hay diez horas y media de diferencia todo el año (Perú en UTC-5 sin cambio de hora; la India en UTC+5:30): por ejemplo, las 10:30 a. m. de Lima son las 9:00 p. m. en la India, y usted siempre ve la hora en su propio reloj al reservar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se nota que un niño de 8 años avanza en programación?',
    lede: 'Usamos cinco hitos propios para el año de 3° de primaria. No hay que cumplirlos en orden estricto, pero suelen llegar así.',
    table: { caption: 'Cinco hitos para un niño de 8 años (nuestros)', head: ['Hito', 'Qué logra', 'Cómo lo ve usted en casa'], rows: [
      ['1. Juego con regla', 'un personaje que gana o pierde según lo que toca', 'le pide que pruebe su juego'],
      ['2. Puntaje que funciona', 'una variable que empieza en cero y suma bien', 'le explica por qué el marcador marca lo que marca'],
      ['3. Niveles', 'el juego cambia de escenario al llegar a cierto puntaje', 'quiere que usted llegue al nivel 2'],
      ['4. Personajes que se avisan', 'mensajes entre personajes para coordinar acciones', 'habla de "cuando este le avisa a este otro"'],
      ['5. Un juego para otro', 'diseña pensando en quién lo va a jugar', 'le pregunta si fue muy fácil o muy difícil']
    ] },
    left: { h3: 'Para la familia', ps: [
      'A los 8 años el avance se ve sobre todo en la forma de hablar del juego: de "no sale" a "falta reiniciar el puntaje". Cuando su hijo nombra la causa de un error, está programando de verdad.',
      'Jugar el juego de su hijo y decirle con sinceridad qué le pareció es el apoyo más valioso que puede darle desde casa.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Al empezar el juego, revise qué cosas tienen que volver a su lugar: el puntaje, las vidas, el personaje.',
      'Si el resultado es raro, no borre todo. Busque el bloque que causa la sorpresa.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más alrededor de los 8 años',
    lede: 'Se dictan en inglés y en vivo, y sirven tanto para empezar como para el niño que ya hizo algo de bloques en el colegio.',
    bands: [
      { num: 'I', h3: 'Juegos y creación', sub: 'De 8 a 12 años', courses: [
        { code: 'PRAN / JUEGO / 01', slug: 'game-development-masterclass-for-kids', title: 'Creación de videojuegos', blurb: 'Un recorrido por Scratch, Roblox y Minecraft para quien quiere hacer juegos.' },
        { code: 'PRAN / JUEGO / 02', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Bloques de Scratch hasta apps sencillas y proyectos de IA, con grupos por edad.' },
        { code: 'PRAN / JUEGO / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una aplicación de verdad para el celular, armada sin escribir código.' }
      ] },
      { num: 'II', h3: 'Lógica y números', sub: 'De 6 a 10 años', courses: [
        { code: 'PRAN / LOGICA / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensar como programador', blurb: 'Descomponer problemas grandes en pasos pequeños, con y sin pantalla.' },
        { code: 'PRAN / LOGICA / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento', blurb: 'Patrones, acertijos y orden lógico para niños de 6 a 9 años.' },
        { code: 'PRAN / LOGICA / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido numérico de verdad, sin trucos, de 5 a 10 años.' }
      ] },
      { num: 'III', h3: 'Mirando a los 9 y 10', sub: 'El siguiente paso', courses: [
        { code: 'PRAN / LUEGO / 01', slug: 'python-ai-kids-masterclass', title: 'Python e IA para niños', blurb: 'El primer lenguaje escrito, con dibujos de tortuga y juegos de preguntas.' },
        { code: 'PRAN / LUEGO / 02', slug: 'ai-literacy-for-kids-course', title: 'Cómo funciona la IA', blurb: 'Para niños desde los 8: qué hace una máquina que "aprende" y dónde falla.' },
        { code: 'PRAN / LUEGO / 03', slug: 'kids-ai-web-development-course', title: 'Una web propia', blurb: 'HTML y CSS para publicar su primera página, de 9 a 12 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases para un niño de 8 años?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del colegio', l: 'Si su hijo va al colegio por la tarde.' },
      { time: 'Después de las tareas', l: 'Para quien estudia en el turno mañana.' },
      { time: 'Sábado o domingo', l: 'Con clases individuales, cuando la familia lo prefiera.' }
    ],
    cells: [
      { h3: 'Reto, no receta', p: 'El mentor plantea el problema y deja que el niño lo resuelva.' },
      { h3: 'Pantalla compartida', p: 'El mentor ve dónde se traba su hijo y pregunta justo ahí.' },
      { h3: 'Inglés en contexto', p: 'Las palabras nuevas salen de los bloques que el niño usa.' },
      { h3: 'Juegos que se prueban', p: 'Otros niños juegan lo que su hijo hizo y opinan.' },
      { h3: 'Mentor estable', p: 'Una sola persona acompaña al niño todo el curso.' },
      { h3: 'Nota semanal', p: 'Qué se hizo, qué palabras aparecieron y qué viene.' }
    ]
  },

  projectsH2: 'Lo que hacen unos años después',
  projectsLede: 'Del juego de manzanas de los 8 años a proyectos como estos, hechos por estudiantes mayores. Más en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Opiniones dejadas en Google por madres, padres y estudiantes, en el inglés original.',

  fees: {
    h2: 'Costo de las clases para un niño de 8 años en Perú',
    lede: 'La mensualidad figura en dólares estadounidenses y se carga a una tarjeta; la conversión a su moneda la hace su banco, así que el monto exacto en su estado de cuenta depende del cambio de ese día. Probar la primera clase no cuesta nada.',
    free: ['Una clase de prueba sin costo', 'El mentor ubica a su hijo según lo que ya sabe', 'Ningún dato de tarjeta'],
    group: ['Niños de edad parecida, de quince a veinte', 'Un mismo mentor hasta terminar el curso', 'Dos sesiones en vivo cada semana', 'Pago mes a mes, sin permanencia'],
    one: ['Su hijo y el mentor, sin nadie más', 'Avanza a su propio ritmo', 'Sesiones cuando a la familia le acomode']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños de 8 años: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan en inglés, en vivo y en línea, con un mentor desde la India. Lejos de ser un obstáculo, es lo que buscan muchas familias peruanas: su hijo programa y practica inglés en la misma sesión, y en 3° de primaria, cuando el colegio sube el Inglés a tres horas semanales, las dos cosas se refuerzan. Lima tiene nivel alto en el EF EPI 2025, y hablar es lo que más mejora con una clase así.' },
      { q: '¿Qué puede programar un niño de 8 años?', a: 'Juegos completos en Scratch con puntaje, niveles, vidas y varios personajes que se coordinan. También puede empezar en Minecraft o Roblox Studio con herramientas visuales. El código escrito, como Python, suele llegar a los 9 o 10 años.' },
      { q: '¿En qué grado está un niño de 8 años en Perú?', a: 'En 3° de primaria, según las edades normativas del MINEDU, que se cuentan al 31 de marzo. Con 3° empieza el ciclo IV del CNEB, que sigue en 4°.' },
      { q: '¿Scratch, Minecraft o Roblox: con cuál empezar a los 8 años?', a: 'Si su hijo no tiene una preferencia clara, Scratch: es gratis, no pide cuenta y enseña la lógica sin distracciones. Si vive pensando en Minecraft o en Roblox, empezar por ahí aprovecha su entusiasmo; nuestro curso de Minecraft es de 7 a 12 años y el de Roblox de 8 a 14.' },
      { q: '¿Conviene más la robótica para un niño de 7 a 11 años?', a: 'La robótica es una forma de ver la programación en un objeto físico. El MINEDU la presenta como un medio y no como un fin. Nuestras clases trabajan la programación sin kits, y esa lógica se traslada tal cual a cualquier robot educativo.' },
      { q: '¿Mi hijo tiene que hablar inglés antes de la primera clase?', a: 'No. Con las palabras que ve en el colegio basta para arrancar. En Scratch los bloques repiten las mismas palabras en inglés y el mentor habla despacio, así que en pocas semanas su hijo las usa con naturalidad.' },
      { q: '¿Las clases preparan para la ENLA?', a: 'No. La ENLA es una evaluación del MINEDU al sistema educativo, que en 2024 y 2025 se aplicó en 4° de primaria, y la de 2026 fue dejada sin efecto. Programar sí desarrolla hábitos útiles para cualquier prueba: leer con atención, comparar números y no rendirse.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre Perú y la India hay diez horas y media de diferencia todo el año; usted siempre elige la hora en hora de Perú.' },
      { q: '¿Sirve si en casa hay una sola computadora?', a: 'Sí. Es lo más común: según el INEI, en el segundo trimestre de 2026 el 74,3 % de los hogares peruanos con computadora tenía solo una. Como las clases se programan a cualquier hora, los hermanos pueden turnarse sin problema.' },
      { q: '¿Dan algún certificado?', a: 'Al terminar un curso entregamos una constancia propia de Modern Age Coders. No es un documento del MINEDU ni de ningún colegio, porque no tenemos vínculo con ellos y no ponemos notas escolares.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas; las de Perú están en castellano y las generales en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú', p: 'La página principal para familias peruanas, de primaria a la universidad.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños de 6 a 12 años', p: 'Qué enseña el colegio en primaria y cómo es aprender a programar en inglés.' },
      { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano', p: 'Cinco talleres en línea ordenados por grado, para enero a marzo.' },
      { href: '/coding-for-8-year-olds', label: 'Coding for 8 year olds', p: 'Nuestra guía general sobre programación a los 8 años, en inglés.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Desde qué edad permite cada herramienta de IA que la use un niño.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así trabajan nuestros mentores en cada clase en vivo.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase gratis con su hijo de 8 años',
    lede: 'Durante la clase de prueba el mentor habla con su hijo en un inglés fácil, le pide hacer un pequeño juego en Scratch y mira cómo razona cuando algo no funciona. Con eso le sugerimos el curso y el formato, y usted decide sin presión.',
    readFirst: 'Si prefiere informarse antes, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestra forma de enseñar y <a class="ag-inline-link" href="/courses">All courses</a> reúne el catálogo (ambas en inglés).',
    note: 'Las clases se dictan en vivo, por internet y únicamente en inglés, con mentores que viven en la India. Para preguntas rápidas, escríbanos por WhatsApp en castellano.',
    formNote: 'Gratis y sin compromiso; no pedimos tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para los 8 años', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch de cero a juegos' },
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Programar en Minecraft' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Juegos en Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Primaria en inglés' },
        { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones en inglés' }
      ] }
    ],
    bottomRight: 'The score remembers until I say zero'
  },

  personalityCss: `
.ag-root.ag-pran .ag-hero h1 { letter-spacing: -0.008em; max-width: 24ch; }
.ag-root.ag-pran .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-pran .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pran .ag-steps li { line-height: 1.6; padding-bottom: 4px; }
.ag-root.ag-pran .ag-table caption { text-align: left; font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Edades normativas (31 March; 3° de primaria = 8 años, ciclo IV), CNEB Tabla N.° 6 (2° to 4° columns), competency 28 level 4 (PDF page 155 checked by eye) and the Ciencia y tecnología competency "Diseña y construye soluciones tecnológicas", DITE robotics paper (Infoescuela 1996, LEGO WeDo 2009 to 2010), ENLA 2024 and 2025 notes, UMC homepage on ENLA 2026; INEI Boletín TIC II trimestre 2026; tzdata for time. All read 8 November 2026. The comparison table, class structure, milestones and example are our own.',
    localProject: 'A score that never resets, for an 8-year-old in 3° de primaria: in a Scratch apple-catching game the second round shows 7 instead of 4 because set score to 0 is missing under the green flag. The Python mirror, run with python3 -I, prints "Partida con 4 manzanas -> puntos: 7" (version 1) and "Partida con 4 manzanas -> puntos: 4" once puntos = 0 moves inside the loop. Lesson family: a variable keeps its value until reset; initialise at the start of every run.',
    requiredMentions: ['Partida con 4 manzanas -&gt; puntos: 7', 'Partida con 4 manzanas -&gt; puntos: 4', 'set score to 0', 'the score remembers until I say zero', 'comprende los procedimientos e intercambios que realiza para elegir y aplicar estrategias', 'desde el año 1996 con el proyecto Infoescuela', 'Dejan sin efecto la R.M. Nº 285-2026-MINEDU', 'el 74,3 % tiene una sola', 'el 50,9 % cuenta con al menos una computadora', 'Tres puertas de entrada a la programación a los 8 años'],
    sources: [
      { claim: 'Normative age at 31 March; 3er and 4to grado form ciclo IV.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Tabla N.° 6 primaria hours (2° to 4°), competency 28 level 4, Ciencia y tecnología competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Robotics since 1996 (Infoescuela), LEGO WeDo kits 2009 to 2010, robotics as the means.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'ENLA 2024 census of 532,000 pupils in 4° de primaria in 18,112 schools.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'ENLA 2025 applied 11 to 13 November 2025 to 200,000+ students in 8,700 schools; 4° primaria in reading and maths.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'ENLA 2026 resolution revoked (UMC homepage).', url: 'http://umc.minedu.gob.pe/' },
      { claim: 'Households with a computer 36.4%, 74.3% with only one, 50.9% of households of four or more, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'ENLA preparation or any link between our classes and ENLA results: refused; the page says we do not prepare for it.',
      'Roblox or Minecraft minimum ages from the platforms: not quoted (not fetched); the page gives only our course ages and recommends an adult-run account.',
      'Robot kits or hardware: none; the page says we teach programming only.',
      'Spanish-language teaching: refused; capsule and FAQ say every class is live, online and in English.',
      'MINEDU or school endorsement, official certificate or school grades: none; only our own certificate of completion.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

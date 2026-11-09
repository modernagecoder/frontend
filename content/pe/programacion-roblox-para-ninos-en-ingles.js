// SHIP: market (es subject door) | programar en Roblox Studio para niños, en inglés: Luau, cuenta con adulto y colegio | debounce: a Touched event that fires several times, and a cooldown that counts it once
'use strict';
// Programación en Roblox para niños, en inglés (ag- Spanish-language door, Peru cluster row PE119, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Search (KEYWORDS.md section 2, games-led): "clases de programacion para niños roblox", "programar en roblox para niños",
// "aprender a programar en roblox studio", "curso programación roblox niños", "lenguaje programación roblox", "programar en
// roblox con ia". Roblox beats Minecraft in Peru (opposite of Germany).
// Spine: playing Roblox is not programming it (Studio + Luau); which age and grade suits which step; what Roblox itself lets a
// parent control (adult-managed account; no platform minimum age printed because the help centre refused us); why Roblox in
// English makes sense; where Roblox meets the CNEB; one original lesson (a lava trap whose Touched event fires several times).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programacion-roblox-para-ninos-en-ingles/):
//  Roblox Creator Hub, Luau (create.roblox.com/docs/luau, fetched 2026-11-09): "Luau is the scripting language creators use in
//    Roblox Studio."; "derived from Lua 5.1".
//  Roblox Creator Hub, Studio setup (create.roblox.com/docs/studio/setup): "a free application available on Windows and Mac";
//    minimum "Windows 10 macOS 10.14", "Memory (RAM) 3 GB 8 GB" (minimum, recommended), "Resolution 1600×900 or higher";
//    "Sign in to Studio with your Roblox account".
//  Roblox Creator Hub, Debounce patterns (create.roblox.com/docs/scripting/debounce): "the Touched event fires multiple times in
//    quick succession based on subtle physical collisions"; "A debounce pattern is a coding technique that prevents a function
//    from running too many times".
//  Roblox parents page (corp.roblox.com/parents, fetched 2026-11-09): "Parents can choose the maximum rating for games their child
//    can play."; "Voice chat with friends is OFF for all users under 13."; "The Chat Tab is only available for users 9+.";
//    "If your child is under 13 years old, trusted friends can only be added with your permission."; "Parents can set monthly
//    spending limits"; "Screen time limits allow you to restrict the amount of time that your child is permitted to spend on
//    Roblox each day."
//  BLOCKED: en.help.roblox.com and www.roblox.com/info/terms returned 403 on 2026-11-09; not retried. So the page states no
//    Roblox minimum age: it gives our course ages and recommends an account managed by an adult.
//  MINEDU Edades normativas (FACTS 14, 15): 3° primaria 8 años ... 6° primaria 11; 1° secundaria 12, 2° 13, 3° 14.
//  CNEB (FACTS 32, 33, 38, 39, 41, 57): competency 28 transversal; "Diseña y construye soluciones tecnológicas para resolver
//    problemas"; primaria Inglés "2 2 3 3 3 3"; secundaria JER Inglés "3 3 3 3 3", JEC "5 5 5 5 5".
//  EF EPI 2025 Peru page (MARKET 1.3, ef_peru.txt): Lima 555 "high"; Peru 519 "moderate".
//  INEI TIC II Trimestre 2026 (MARKET 1.4): 36.4% of homes have a computer.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30 (facts-geo/timezone.tsv).
// Our own example, run with python3 -I (trap.py in the src-pages folder; the touch log is invented by us):
//    no debounce: 30
//    with debounce: (70, [0.0, 1.4, 2.9])
//    cooldown 2.0: (80, [0.0, 2.9])
// Lesson family: debounce. An event that fires several times for one real touch, a "ready at" time that ignores repeats, and how
// the length of the cooldown changes the result.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Our invented log: the seconds at which the game reported a Touched event on a lava trap.',
  'touches = [0.00, 0.03, 0.07, 0.12, 1.40, 1.45, 2.90]',
  'COOLDOWN = 1.0',
  '',
  'def no_debounce(times):',
  '    health = 100',
  '    for t in times:',
  '        health = health - 10',
  '    return health',
  '',
  'def with_debounce(times, wait):',
  '    health = 100',
  '    ready_at = 0.0',
  '    hits = []',
  '    for t in times:',
  '        if t >= ready_at:',
  '            health = health - 10',
  '            ready_at = t + wait',
  '            hits.append(t)',
  '    return health, hits',
  '',
  "print('no debounce:', no_debounce(touches))",
  "print('with debounce:', with_debounce(touches, COOLDOWN))",
  "print('cooldown 2.0:', with_debounce(touches, 2.0))"
].join('\n');

const OUT = [
  'no debounce: 30',
  'with debounce: (70, [0.0, 1.4, 2.9])',
  'cooldown 2.0: (80, [0.0, 2.9])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Programación en Roblox para niños' },
  slug: 'programacion-roblox-para-ninos-en-ingles',
  code: 'prni',
  accent: '#007047',
  accentRationale: 'Programación en Roblox para niños: a deep build-plate green #007047, the colour of a fresh baseplate in Studio, kept dark enough for body links; contrast 5.00 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programación en Roblox para niños',
  title: 'Programación en Roblox para niños, en vivo y en inglés',
  description: 'Clases de programación en Roblox Studio para niños de 8 a 14 años en Perú: Luau, juegos propios y una cuenta que controla un adulto. En vivo y en inglés.',
  ogDescription: 'Jugar Roblox no es programarlo. Qué aprende un niño en Roblox Studio, a qué edad, qué controles da Roblox a los padres y una trampa de lava que cuenta mal los toques.',
  twitterDescription: 'Programación en Roblox para niños peruanos de 8 a 14 años, con mentor en vivo y en inglés, en grupo o uno a uno, a la hora que elija su familia.',
  pageName: 'Programación en Roblox para niños en Perú',
  webPageDescription: 'Guía para familias en Perú sobre las clases de programación en Roblox para niños: la diferencia entre jugar y crear en Roblox Studio, el lenguaje Luau, la edad y el grado escolar de cada etapa, los controles parentales que publica Roblox, por qué conviene aprender Roblox en inglés, qué competencias del CNEB toca y una lección propia sobre el patrón debounce.',
  courseDescription: 'Curso en vivo y en línea de programación de videojuegos en Roblox Studio para niños de 8 a 14 años en todo el Perú, dictado solo en inglés por mentores desde la India: partes, scripts en Luau, eventos, puntajes y un juego publicado para amigos, con una cuenta de Roblox gestionada por un adulto, en grupo o en clases individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Roblox para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#crear', label: 'Jugar o crear' },
    { href: '#edad', label: 'Edades' },
    { href: '#cuenta', label: 'Cuenta y control' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#ingles', label: 'Por qué en inglés' }
  ],
  eyebrow: 'Perú &middot; Roblox Studio &middot; Niños de 8 a 14 años',
  h1: 'Programación en Roblox para niños, con clases en vivo en inglés',
  lede: 'Su hijo ya conoce Roblox como jugador. Lo que todavía no ha visto es el otro lado: la ventana de Roblox Studio donde alguien colocó cada pieza y escribió cada regla. En nuestras clases cruza ese lado. Deja de esperar a que otro invente el juego y empieza a escribir el suyo, línea por línea, con un mentor que le pregunta por qué.',
  secondaryCta: { href: '#edad', label: 'Ver qué etapa le toca' },
  wa: 'Hola Modern Age Coders, a nuestro hijo o hija le encanta Roblox y queremos que aprenda a programar sus propios juegos, en inglés. ¿Podemos reservar una clase de prueba gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; juegos propios en Roblox Studio',
  spec: [
    ['Edades', 'De 8 a 14 años, de 3° de primaria a 3° de secundaria'],
    ['Herramienta', 'Roblox Studio, gratuito, en Windows o Mac'],
    ['Lenguaje', 'Luau, el que usa Roblox para sus scripts'],
    ['Cuenta', 'Creada y supervisada por un adulto'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés claro, con mentor en vivo desde la India']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Modern Age Coders enseña a niños peruanos de 8 a 14 años a programar en Roblox, en vivo y en inglés: cada sesión es una videollamada con un mentor que trabaja desde la India. El niño no juega: construye en Roblox Studio y escribe scripts en Luau, el lenguaje de Roblox, hasta publicar un juego propio para sus amigos. La cuenta de Roblox la crea y la vigila un adulto de la familia. Hay grupos y clases uno a uno, y la familia fija el día y la hora.',

  picks: {
    eyebrow: 'Cursos de Roblox',
    h2: 'Tres cursos para llegar a programar en Roblox',
    lede: 'Uno es el curso de Roblox propiamente dicho; los otros dos son las puertas de entrada para quien aún es pequeño o quiere probar varios motores de juego.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PRNI / 01', title: 'Roblox Studio y Luau', alt: 'Imagen del curso de programación de juegos en Roblox para niños', note: 'De 8 a 14 años. Desde la primera pieza en el mapa hasta un juego con puntajes, trampas y niveles que sus amigos pueden visitar. Todo el código lo escribe el niño.' },
      { course: 'game-development-masterclass-for-kids', code: 'PRNI / 02', title: 'Videojuegos: Scratch, Roblox y Minecraft', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'De 8 a 12 años. Un recorrido por tres mundos de juego, ideal si su hijo todavía no decide cuál le gusta más o si llega sin experiencia previa.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PRNI / 03', title: 'Bloques antes de Roblox', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años. Para los que aún no leen con soltura o tienen 6 o 7 años: secuencias, repeticiones y condiciones con bloques, la misma lógica que después pedirá Luau.' }
    ]
  },

  sections: [
    {
      id: 'crear',
      eyebrow: 'Jugar o crear',
      h2: '¿Se puede aprender a programar con Roblox?',
      lede: 'Sí, pero no jugando. Programar en Roblox ocurre en Roblox Studio, una aplicación distinta del juego, donde el niño arma el mundo y le escribe instrucciones en un lenguaje llamado Luau.',
      body: [
        { kind: 'p', html: 'La documentación oficial para creadores lo dice en una línea: "Luau is the scripting language creators use in Roblox Studio". La misma página explica que Luau deriva de Lua 5.1, un lenguaje pequeño y rápido que existe fuera de Roblox desde hace décadas. Para un padre, eso significa algo concreto: lo que su hijo aprende no es un truco de un videojuego, sino variables, funciones, condiciones y eventos, las mismas piezas que encontrará luego en Python o en JavaScript.' },
        { kind: 'three', cells: [
          { h3: 'El jugador', p: 'Entra a experiencias que hicieron otros, compra objetos, conversa. Puede pasar cientos de horas sin escribir una sola línea. Así conocen Roblox casi todos los niños que llegan a nuestra clase.' },
          { h3: 'El constructor', p: 'Abre Roblox Studio, coloca bloques, cambia colores y tamaños. Ya diseña, pero el mundo todavía no reacciona: una puerta no se abre sola y una trampa no hace daño.' },
          { h3: 'El programador', p: 'Escribe scripts en Luau para que el mundo responda: que la lava reste vida, que una moneda sume puntos, que una puerta pida una llave. Este es el paso que enseñamos.' }
        ] },
        { kind: 'p', mt: true, html: 'Roblox Studio es gratuito y funciona en Windows y en Mac, según su página de instalación. Para entrar pide una cuenta de Roblox, y ese detalle es el que más conviene conversar en casa antes de la primera clase; lo explicamos más abajo, en la sección sobre la cuenta.' },
        { kind: 'p', html: 'Mucha gente busca "programar en Roblox con IA". Nuestra postura es sencilla: en estas clases el niño escribe su propio código, porque el objetivo es que entienda por qué funciona. Si más adelante usa ayudas automáticas, sabrá leer lo que le proponen y detectar cuándo está mal. Esa es la diferencia entre aprender a pensar y aprender a copiar.' },
        { kind: 'p', html: 'Si su hijo todavía no decide entre Roblox y otros caminos, nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> compara las opciones para toda la primaria y describe paso a paso una primera clase.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'Edades y grados',
      h2: '¿Desde qué edad puede un niño programar en Roblox Studio?',
      lede: 'Nuestro curso de Roblox empieza a los 8 años, que en el Perú corresponde por lo general a 3° de primaria. Antes de esa edad recomendamos bloques; después, el mismo curso se adapta hasta los 14.',
      body: [
        { kind: 'p', html: 'La razón de empezar a los 8 no es una norma de Roblox: es práctica. Para escribir Luau el niño tiene que leer instrucciones en inglés, teclear con algo de soltura y aceptar que una coma fuera de lugar detiene todo el programa. A los 6 o 7 años eso frustra; a los 8 o 9 se vuelve un reto divertido.' },
        { kind: 'table', numCols: [1], caption: 'Edad normativa por grado escolar en el Perú y la etapa de Roblox que proponemos para cada una', head: ['Grado escolar', 'Edad normativa', 'Etapa de Roblox (nuestra propuesta)'], rows: [
          ['1° y 2° de primaria', '6 y 7 años', 'Todavía no: bloques y juegos de lógica'],
          ['3° de primaria', '8 años', 'Mover piezas en Studio y primeros scripts cortos'],
          ['4° de primaria', '9 años', 'Eventos: algo pasa cuando el jugador toca una pieza'],
          ['5° de primaria', '10 años', 'Variables y puntajes que sobreviven entre rondas'],
          ['6° de primaria', '11 años', 'Funciones propias y un juego con varios niveles'],
          ['1° y 2° de secundaria', '12 y 13 años', 'Tablas de Luau, tiempos de espera y un juego publicado'],
          ['3° de secundaria', '14 años', 'Organizar un proyecto grande o dar el salto a otro lenguaje']
        ] },
        { kind: 'source', html: 'Las dos primeras columnas vienen del cuadro del MINEDU que fija qué edad corresponde a cada grado, contada al 31 de marzo. La tercera columna es nuestra forma de ordenar el curso de Roblox, no una indicación del MINEDU ni de Roblox. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'En la práctica, el grado importa menos que dos señales: si su hijo lee frases cortas en inglés y si tolera equivocarse. Un niño de 3° de primaria que se ríe cuando su personaje cae al vacío por un error de código avanza rápido. Uno de 6° que se enoja ante el primer mensaje de error necesita que el mentor baje el ritmo, y lo hacemos.' },
        { kind: 'p', html: 'Para los adolescentes que ya dominan Roblox y quieren más, el siguiente paso natural es un motor profesional o un lenguaje general. Nuestro <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a> es otra salida frecuente: muchos chicos que aprendieron eventos y variables en Luau descubren que entrenar un modelo usa la misma lógica.' }
      ]
    },
    {
      id: 'cuenta',
      eyebrow: 'Cuenta y control parental',
      h2: '¿Qué cuenta de Roblox necesita mi hijo y qué puede controlar la familia?',
      lede: 'Roblox Studio pide iniciar sesión con una cuenta de Roblox. Nuestra recomendación es que la cree y la supervise un adulto de la familia, con los controles parentales que la propia empresa ofrece.',
      body: [
        { kind: 'p', html: 'Intentamos leer las condiciones de uso de Roblox en su centro de ayuda y en su web principal, pero el 9 de noviembre de 2026 los dos servidores rechazaron nuestra consulta automática. Por eso en esta página no le indicamos una edad mínima de Roblox: le damos la edad de nuestro curso y le aconsejamos leer las condiciones vigentes en roblox.com antes de registrar a su hijo. Lo que sí pudimos leer, palabra por palabra, es la página oficial de Roblox para padres.' },
        { kind: 'table', numCols: [], caption: 'Algunos controles que Roblox describe en su página para padres', head: ['Tema', 'Lo que publica Roblox', 'Cómo lo aplicamos en clase'], rows: [
          ['Contenido', '"Parents can choose the maximum rating for games their child can play."', 'Trabajamos dentro de Studio, en el proyecto del niño'],
          ['Voz', '"Voice chat with friends is OFF for all users under 13."', 'La conversación es con el mentor, por la videollamada de la clase'],
          ['Chat', '"The Chat Tab is only available for users 9+."', 'No usamos el chat de Roblox durante la clase'],
          ['Amigos', 'Para menores de 13, los amigos de confianza se agregan solo con permiso de los padres', 'Las pruebas de juego se hacen con el mentor o con la familia'],
          ['Gasto', '"Parents can set monthly spending limits"', 'Ninguna compra es necesaria para el curso'],
          ['Tiempo', 'Límites diarios de tiempo de pantalla en Roblox', 'La clase dura lo que usted reserve, nada más']
        ] },
        { kind: 'source', html: 'Fuente: Roblox, página "Parents" en corp.roblox.com, leída el 9 de noviembre de 2026. Las citas están en inglés porque así las publica la empresa. La última columna es nuestra práctica, no una regla de Roblox. Roblox cambia estas opciones con frecuencia: revise la página vigente.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Cree la cuenta usted.</strong> Con la fecha de nacimiento real de su hijo, para que Roblox aplique las opciones de su edad.',
          '<strong>Vincule una cuenta de padre.</strong> Roblox explica que así se gestionan los ajustes del niño desde el dispositivo del adulto.',
          '<strong>Revise chat, gasto y tiempo.</strong> Antes de la primera clase, deje cada opción como su familia prefiera.',
          '<strong>Instale Studio en la computadora.</strong> No en el celular: Studio es una aplicación de escritorio para Windows o Mac.',
          '<strong>Converse las reglas.</strong> Qué se publica, con quién se comparte y qué se hace si alguien desconocido escribe.'
        ] },
        { kind: 'p', mt: true, html: 'El tratamiento de datos de menores de catorce años en servicios digitales requiere en el Perú el consentimiento de quien ejerce la patria potestad (DS 016-2024-JUS, artículo 25.3). Lo citamos como contexto y no como consejo legal. Por eso coordinamos cada inscripción con un adulto responsable, y ningún niño abre cuentas solo por indicación nuestra.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de programación en Roblox, paso a paso?',
      lede: 'Le mostramos un problema real que todo creador de Roblox encuentra: una trampa de lava que quita vida de más. La documentación oficial le pone nombre a la solución, debounce, y el niño la descubre antes de leer ese nombre.',
      body: [
        { kind: 'p', html: 'El punto de partida está en la guía de Roblox para creadores: al tocar una pieza, el evento <code>Touched</code> "fires multiple times in quick succession", es decir, se dispara varias veces seguidas por pequeños choques físicos. Si cada disparo resta 10 de vida, un solo pisotón le quita al jugador mucho más de lo que el creador quería. Para que el niño lo vea con números antes de abrir Studio, escribimos en clase este modelo en Python con un registro de toques inventado por nosotros.' },
        { kind: 'code', label: 'Una trampa de lava, con y sin debounce', lang: 'Python', code: PY, note: 'Cada número de la lista <code>touches</code> es el segundo en que el juego avisó de un toque. Los cuatro primeros son un solo pisotón; los dos siguientes, un segundo pisotón; el último, un tercero. <code>ready_at</code> guarda desde qué momento la trampa vuelve a estar lista.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Salida exacta de Python 3 en nuestro equipo, sin retoques. Sin debounce, siete avisos restan 70 puntos de vida. Con una espera de un segundo, solo cuentan los tres pisotones de verdad.' },
        { kind: 'ol', mt: true, items: [
          '<strong>La sorpresa.</strong> El mentor pide predecir cuánta vida queda tras tres pisotones. Casi todos responden 70. El programa sin debounce dice 30, y la clase entera pregunta por qué.',
          '<strong>Leer el registro.</strong> El niño mira la lista y descubre que 0.00, 0.03, 0.07 y 0.12 están demasiado juntos para ser cuatro pisotones. Son uno, contado cuatro veces.',
          '<strong>La idea de esperar.</strong> Se propone una regla en inglés, dicha en voz alta: "after a hit, the trap rests for one second". Esa frase se convierte en <code>ready_at = t + wait</code>.',
          '<strong>Probar otra espera.</strong> Con dos segundos, el pisotón de 1.40 queda dentro del descanso y no cuenta. El resultado pasa a 80: una espera demasiado larga también se equivoca, ahora a favor del jugador.',
          '<strong>Llevarlo a Roblox.</strong> En Studio el niño aplica la misma idea con el patrón que muestra la documentación de Roblox: marcar la pieza como ocupada, restar la vida, esperar y liberarla. Ya no copia un ejemplo: sabe por qué existe.'
        ] },
        { kind: 'p', mt: true, html: 'Este ejercicio enseña algo que va más allá de Roblox. Un programa recibe el mundo como una lista de avisos, y no todos los avisos significan lo que parecen. El mismo problema aparece cuando un botón de una app se pulsa dos veces o cuando un sensor manda lecturas repetidas. El niño que entendió la trampa de lava ya tiene una herramienta para todos esos casos.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Por qué en inglés',
      h2: '¿Por qué aprender a programar en Roblox en inglés?',
      lede: 'Porque Roblox ya está en inglés por dentro. Las palabras de Luau, los nombres de las piezas y los eventos, los mensajes de error y casi toda la documentación para creadores están escritos en ese idioma.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que el niño lee cada día en Studio',
          left: [
            'Un script de Roblox se escribe con palabras como <code>local</code>, <code>function</code>, <code>if</code>, <code>then</code> y <code>end</code>. Las piezas tienen propiedades como <code>Anchored</code> o <code>Transparency</code>, y los eventos se llaman <code>Touched</code> o <code>Activated</code>. Quien entiende esas palabras, entiende la mitad del programa antes de ejecutarlo.',
            'Cuando algo falla, la ventana de salida de Studio explica el error en inglés. Un niño que puede leer esa línea sin miedo resuelve solo lo que otro tendría que preguntar.'
          ],
          rightH3: 'Lo que ya trae del colegio',
          right: [
            'Según el plan de estudios del CNEB, desde 3° de primaria el colegio dedica tres horas semanales al inglés; en secundaria son tres en la jornada regular y cinco en la jornada escolar completa. Nuestra clase no reemplaza esas horas, pero les da un uso inmediato.',
            'El EF EPI 2025 ubica el inglés de Lima en la banda "High", con 555 puntos, mientras que el promedio del Perú queda en "Moderate". Muchos niños limeños ya entienden más de lo que creen sus padres.'
          ] },
        { kind: 'p', mt: true, html: 'Somos claros en un punto: no somos una academia de inglés y no enseñamos el idioma como materia. El mentor habla despacio, repite cuando hace falta y usa frases cortas, porque la meta es que su hijo programe. La práctica de inglés llega sola, como en cualquier taller donde se trabaja en otro idioma. Si le interesa más ese lado, nuestra página de <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> lo desarrolla para el verano.' },
        { kind: 'p', html: 'Para las familias de colegios bilingües de Lima, el inglés deja de ser un obstáculo y pasa a ser una ventaja directa; para ellas escribimos la guía de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, en inglés.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Roblox y el colegio',
      h2: '¿Programar en Roblox sirve para el colegio?',
      lede: 'No como curso con nota, porque el colegio peruano no tiene un área de programación. Pero lo que el niño practica en Roblox toca competencias que el CNEB sí pide.',
      body: [
        { kind: 'p', html: 'El Currículo Nacional reparte la tecnología entre varias áreas. La competencia 28, sobre desenvolverse en entornos virtuales, es transversal: no tiene horas propias. En Ciencia y Tecnología aparece "Diseña y construye soluciones tecnológicas para resolver problemas", y en Matemática, la competencia de resolver problemas de forma, movimiento y localización. Un juego de Roblox exige justamente eso: posiciones en tres ejes, distancias, giros y una solución que se prueba hasta que funciona.' },
        { kind: 'three', cells: [
          { h3: 'Coordenadas de verdad', p: 'Cada pieza de Roblox tiene una posición con tres números. Mover una plataforma dos unidades hacia arriba es geometría aplicada, no un ejercicio del libro.' },
          { h3: 'Diseñar y probar', p: 'El niño propone una trampa, la prueba, ve que falla y la corrige. Es el ciclo que el CNEB describe para las soluciones tecnológicas.' },
          { h3: 'Explicar lo que hizo', p: 'Al final de la clase, el niño cuenta en inglés qué cambió y por qué. Esa explicación es la prueba más clara de que entendió.' }
        ] },
        { kind: 'p', mt: true, html: 'No damos notas, constancias para el colegio ni créditos escolares, y no tenemos relación con el MINEDU ni con ningún colegio. Quien completa el curso se lleva un certificado de finalización firmado por nosotros, y nada más que eso. Lo que más valoran los padres, sin embargo, suele ser otra cosa: ver que el niño que antes pedía más tiempo de juego ahora pide más tiempo para terminar su propio juego.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora son las clases de Roblox desde la India?',
      lede: 'A la hora que su familia elija. La India está diez horas y treinta minutos por delante del Perú durante todo el año, porque ninguno de los dos países cambia la hora en verano.',
      body: [
        { kind: 'p', html: 'Perú vive en UTC-5 y la India en UTC+5:30, así que basta sumar diez horas y media. Si su hijo se conecta un sábado a las 8:00 a. m. limeñas, su mentor lo saluda a las 6:30 p. m. de ese sábado. Las 10:00 a. m. limeñas equivalen a las 8:30 p. m. indias, y las 6:00 p. m. de Lima, a las 4:30 a. m. del día siguiente en la India. Los damos solo para entender la diferencia; ninguna de esas horas es un turno fijo.' },
        { kind: 'p', html: 'Con Roblox recomendamos bloques de 60 minutos, porque abrir Studio, cargar el proyecto y probar el juego toma unos minutos. Muchas familias escogen la tarde, cuando ya terminó el colegio, o el sábado temprano, cuando nadie más ocupa la computadora.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿En qué se diferencia un niño que programa Roblox de uno que solo lo juega?',
    lede: 'Cinco señales con las que nuestros mentores cuentan a la familia en qué punto está el chico dentro de Studio. Las inventamos nosotros; ninguna escala oficial las incluye.',
    table: { caption: 'Cinco señales de avance en Roblox Studio (nuestras)', head: ['Señal', 'Suele aparecer a los', 'Qué se ve en su pantalla'], rows: [
      ['1. Construye', '8 años', 'Coloca, ancla y nombra piezas con orden'],
      ['2. Reacciona', '9 años', 'Escribe un script que responde cuando el jugador toca algo'],
      ['3. Recuerda', '10 años', 'Guarda puntajes y vidas en variables que cambian'],
      ['4. Controla', '11 a 12 años', 'Usa esperas y debounce para que el juego no cuente de más'],
      ['5. Publica', '12 a 14 años', 'Termina un juego con niveles y lo comparte de forma privada']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Siéntese a su lado y deje que le explique un script suyo, línea por línea. Si lo logra, ya programa.',
      'Pregunte qué error encontró esta semana y cómo lo resolvió. La respuesta dice más que el juego terminado.'
    ] },
    right: { h3: 'Para los chicos', ps: [
      'Antes de copiar un script de internet, lea cada línea y diga qué hace. Si no puede, todavía no es suyo.',
      'Una trampa que quita demasiada vida no está rota: le está enseñando algo.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve caminos para chicos que crean juegos',
    lede: 'Todos se dictan en inglés y en directo, con un mentor que sigue al mismo estudiante, en grupo o de manera individual.',
    bands: [
      { num: 'I', h3: 'Antes o junto a Roblox', sub: 'De 6 a 12 años', courses: [
        { code: 'PRNI / INICIO / 01', slug: 'scratch-programming-complete-course', title: 'Scratch desde cero', blurb: 'Juegos con bloques en tres o cuatro meses, sin teclear código.' },
        { code: 'PRNI / INICIO / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con MakeCode', blurb: 'Bloques que levantan casas y granjas dentro de Minecraft.' },
        { code: 'PRNI / INICIO / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensar paso a paso', blurb: 'Dividir un problema en partes antes de escribir una sola línea.' }
      ] },
      { num: 'II', h3: 'Otro lenguaje después de Luau', sub: 'De 9 a 17 años', courses: [
        { code: 'PRNI / SALTO / 01', slug: 'python-ai-kids-masterclass', title: 'Python con proyectos', blurb: 'El lenguaje general más usado, con juegos e inteligencia artificial.' },
        { code: 'PRNI / SALTO / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Juegos con Godot', blurb: 'Un motor abierto y gratuito para quien quiere 2D y 3D fuera de Roblox.' },
        { code: 'PRNI / SALTO / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Para el que disfruta las reglas estrictas y los errores precisos.' }
      ] },
      { num: 'III', h3: 'Para adolescentes que van en serio', sub: 'De 13 a 17 años', courses: [
        { code: 'PRNI / SERIO / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Desarrollo de juegos para adolescentes', blurb: 'Unity y C#, con juegos terminados y publicados.' },
        { code: 'PRNI / SERIO / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript y juegos web', blurb: 'Juegos que corren en el navegador y se comparten con un enlace.' },
        { code: 'PRNI / SERIO / 03', slug: 'python-complete-masterclass-teens', title: 'Python completo', blurb: 'De principiante a avanzado, con proyectos de verdad.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué pasa durante una sesión de Roblox con mentor?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Tarde de semana', l: 'Después del colegio, con la tarea ya hecha.' },
      { time: 'Mañana de sábado', l: 'Cuando la computadora de la casa está libre.' },
      { time: 'Hora que cambia', l: 'En clases individuales, se reprograma con aviso.' }
    ],
    cells: [
      { h3: 'Studio compartido', p: 'El niño comparte su pantalla de Roblox Studio y el mentor sigue cada cambio.' },
      { h3: 'Código propio', p: 'El mentor sugiere y pregunta; el teclado lo usa siempre el niño.' },
      { h3: 'Pruebas en vivo', p: 'Cada script se ejecuta en la clase para ver si el juego responde.' },
      { h3: 'Cuenta vigilada', p: 'Sin chat con desconocidos y sin compras durante las sesiones.' },
      { h3: 'Mismo mentor', p: 'Una persona que conoce el proyecto y el inglés de su hijo.' },
      { h3: 'Notas para casa', p: 'Un resumen breve de lo logrado y del reto de la semana.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Trabajos de estudiantes de varias edades, juegos incluidos, para que vea adónde llega un niño que empieza hoy en Roblox. En <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés, hay más.',
  reviewsLede: 'Opiniones que familias y estudiantes publicaron en Google, sin cambiar una palabra, en inglés.',

  fees: {
    h2: 'Cuánto cuestan las clases de programación en Roblox',
    lede: 'La tarifa aparece en dólares estadounidenses y se paga con tarjeta; el banco que emitió su tarjeta convierte el monto al tipo de cambio del día. No cobramos matrícula ni pedimos comprar nada dentro de Roblox.',
    free: ['Primera clase gratis', 'El mentor revisa si su hijo está listo para Luau', 'Sin pedir datos de pago'],
    group: ['De quince a veinte chicos de edad cercana', 'Dos clases en vivo por semana', 'Un mentor fijo durante el curso', 'Mensualidad que puede cancelar cuando quiera'],
    one: ['Su hijo solo con su mentor', 'El juego y el ritmo los decide él', 'Horario que se mueve si la familia lo pide']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación en Roblox para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Cada sesión se da en directo por videollamada y en inglés, con un mentor desde la India que habla pausado. Para muchas familias es una ventaja doble: el niño aprende a programar su juego y practica a la vez el inglés del colegio, que además es el idioma de Roblox Studio, de Luau y de sus mensajes de error. El EF EPI 2025 sitúa el inglés de Lima en la banda "High".' },
      { q: '¿Qué lenguaje se usa para programar en Roblox?', a: 'Luau. Roblox lo describe como el lenguaje de scripts que usan los creadores en Roblox Studio y explica que deriva de Lua 5.1. Se escribe con palabras en inglés como local, function, if y end.' },
      { q: '¿Desde qué edad puede mi hijo tomar el curso de Roblox?', a: 'El curso de Roblox recibe chicos desde los 8 hasta los 14, es decir, más o menos de 3° de primaria a 3° de secundaria. Con 6 o 7 años recomendamos empezar con bloques y pasar a Roblox después.' },
      { q: '¿Qué edad mínima pide Roblox para tener una cuenta?', a: 'No lo indicamos aquí porque no pudimos leer sus condiciones de uso directamente: el 9 de noviembre de 2026 el servidor de Roblox rechazó nuestra consulta. Consulte las condiciones vigentes en roblox.com. Nuestra recomendación es que un adulto cree la cuenta y active los controles parentales que Roblox ofrece.' },
      { q: '¿Mi hijo va a chatear con desconocidos en clase?', a: 'No. En clase la conversación es con el mentor por videollamada y no usamos el chat de Roblox. Roblox, por su parte, indica que el chat de voz con amigos está desactivado para todos los menores de 13 años.' },
      { q: '¿Hay que comprar Robux o algo dentro del juego?', a: 'No. Roblox Studio es gratuito y el curso no requiere ninguna compra. Roblox permite a los padres fijar un límite mensual de gasto, una opción que conviene activar igual.' },
      { q: '¿Qué computadora necesita?', a: 'Una laptop o una computadora de escritorio con Windows o Mac. Roblox indica como mínimo Windows 10 o macOS 10.14, 3 GB de memoria RAM y una pantalla de 1600 por 900 o más, y recomienda 8 GB. Un celular o una tablet no sirven para Studio.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Para ubicarse: cuando en Lima son las 8:00 a. m., en la India ya son las 6:30 p. m.' },
      { q: '¿Programar en Roblox le sirve para aprender otros lenguajes?', a: 'Sí. Variables, funciones, condiciones y eventos funcionan igual en Python o JavaScript. Muchos de nuestros estudiantes pasan de Luau a Python sin empezar de cero.' },
      { q: '¿Recibe algún certificado?', a: 'Sí, un certificado de finalización que firmamos nosotros. No vale como nota ni como crédito escolar: no estamos vinculados al MINEDU, a ningún colegio ni a la empresa Roblox.' },
      { q: '¿Cómo se paga?', a: 'Se cobra una vez al mes con tarjeta, en dólares estadounidenses, y la conversión corre por cuenta de su banco. Para la clase de prueba no le pedimos tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Para seguir leyendo sobre Roblox y programación',
    lede: 'Varias están en inglés, que es también el idioma de las clases.',
    items: [
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Una guía paso a paso para crear un primer juego en Studio.' },
      { href: '/roblox-studio-errors-fixed', label: 'Roblox Studio errors fixed', p: 'Los errores más comunes de Studio y cómo leerlos sin asustarse.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes for kids', p: 'Nuestro curso de Roblox explicado para familias de todo el mundo.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'La guía general para toda la primaria peruana.' },
      { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano de programación', p: 'Cómo aprovechar enero, febrero y marzo para empezar.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué ocurre en una clase en vivo con nuestros mentores.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de Roblox de prueba',
    lede: 'Durante la sesión gratuita el mentor charla un rato en inglés sencillo con el chico, le pide describir su juego favorito de Roblox y le propone un primer cambio en Studio. Con eso sabe si conviene empezar por Luau o por bloques.',
    readFirst: 'Si prefiere leer antes de reservar, en <a class="ag-inline-link" href="/how-to-make-a-roblox-game">How to make a Roblox game</a> verá qué se construye en las primeras semanas, y en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cómo trabajamos. Ambas páginas están en inglés.',
    note: 'Un recordatorio: el curso entero ocurre en línea, en tiempo real y en inglés, guiado desde la India. Si antes quiere preguntarnos algo por WhatsApp, le contestamos en castellano sin problema.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Roblox', links: [
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Curso de Roblox y Luau' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Videojuegos para niños' },
        { href: '/how-to-make-a-roblox-game', label: 'Crear un juego en Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Verano en inglés' }
      ] }
    ],
    bottomRight: 'Una trampa que quita demasiada vida también enseña'
  },

  personalityCss: `
.ag-root.ag-prni .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-prni .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-prni .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-prni .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-prni .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'Roblox Creator Hub pages Luau, Studio setup and Debounce patterns; Roblox parents page (corp.roblox.com/parents), all read 2026-11-09 (en.help.roblox.com and www.roblox.com refused with 403, so no platform minimum age is printed); MINEDU Edades normativas table; CNEB competency 28, Ciencia y Tecnología and Matemática competencies, Inglés weekly hours; EF EPI 2025 Peru page; DS 016-2024-JUS art. 25.3; tzdata. The Roblox stage column, the progress signals, the touch log and the Python model are our own.',
    localProject: 'A Python model of a Roblox lava trap for children of 8 to 14: an invented log of seven Touched times for three real stomps; without debounce health falls from 100 to 30, with a one-second cooldown to 70 (hits at 0.0, 1.4 and 2.9), with a two-second cooldown to 80. Run with python3 -I. Lesson family: debounce, an event that fires several times for one touch and a ready-at time that ignores repeats.',
    requiredMentions: ['Una trampa de lava, con y sin debounce', 'with debounce: (70, [0.0, 1.4, 2.9])', 'after a hit, the trap rests for one second', 'Voice chat with friends is OFF for all users under 13.', 'Algunos controles que Roblox describe en su página para padres', 'Edad normativa por grado escolar en el Perú y la etapa de Roblox que proponemos para cada una', 'los dos servidores rechazaron nuestra consulta automática', 'Cinco señales de avance en Roblox Studio (nuestras)', 'Una trampa que quita demasiada vida también enseña'],
    sources: [
      { claim: 'Luau is the scripting language creators use in Roblox Studio, derived from Lua 5.1.', url: 'https://create.roblox.com/docs/luau' },
      { claim: 'Roblox Studio is free on Windows and Mac; minimum Windows 10 / macOS 10.14, 3 GB RAM (8 GB recommended), 1600x900; sign in with a Roblox account.', url: 'https://create.roblox.com/docs/studio/setup' },
      { claim: 'The Touched event fires multiple times in quick succession; debounce prevents a function from running too many times.', url: 'https://create.roblox.com/docs/scripting/debounce' },
      { claim: 'Parental controls: maximum content rating, voice chat off under 13, Chat Tab 9+, trusted friends under 13 with permission, spending limits, screen time.', url: 'https://corp.roblox.com/parents' },
      { claim: 'Normative ages by grade.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'CNEB competencies and weekly English hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555 high, Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'A Roblox minimum age: not printed; the terms pages refused our fetch (403) and the page says so.',
      'Robux or any purchase as part of the course: refused; the course needs none.',
      'Any Roblox, MINEDU or school partnership, or school credit: none; the page says so.',
      'Real Luau code run by us: not shown, because no Luau runtime was available to verify it; the worked example is a Python model labelled ours.',
      'Teaching English as a subject: refused; the page says we are not an English academy.'
    ]
  }
};

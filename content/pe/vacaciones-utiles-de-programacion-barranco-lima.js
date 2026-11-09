// SHIP: market (es district, vacaciones útiles) | creative coding for an arts district: patterns, animation, first web | modulo as a repeating index: one formula, many patterns
'use strict';
// Vacaciones útiles de programación en Barranco, Lima (ag- Spanish door, Peru cluster row PE231, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted". Fees render in USD from the template only; no soles, no typed figure, no camp length or start date.
// Angle: the Barranco parent of a child of 8 to 14 who likes drawing, music or design and types "vacaciones útiles Barranco".
// Spine: what the Municipalidad de Barranco itself published about its vacaciones útiles (2023 notes: robotics kids and
// junior, recreational maths, reading, sport and dance, two venues, almost two months); creative coding as the missing
// piece; robotics or code; what the CNEB gives art (three hours) and digital creation (transversal); an original lesson that
// draws woven patterns with the modulo operator; projects by age; why from home in a small district; Peru to India clock.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-barranco-lima/;
// gob.pe notes fetched 2026-11-09, the rest 2026-11-08 by the research run; quotes string-matched in the raw):
//  Municipalidad Distrital de Barranco: www.munibarranco.gob.pe redirects (meta refresh) to https://www.gob.pe/munibarranco,
//    so gob.pe is the municipality's own site. Note "Vacaciones Útiles Divertidas", 13 January 2023 (bar-vu-2023-ene.html):
//    "Entre las novedades de este ciclo de talleres de verano se han implementado cursos de robótica kids y junior,
//    escultura de plastilina, matemáticas recreativas, comprensión lectora."; "vóley, básquet, taekwondo, fútbol, karate,
//    atletismo, ajedrez, actividades artísticas y danzas"; "cursos para adultos y adultos mayores en las dos sedes: Estadio
//    “Luis Gálvez Chipoco” y Centro Cultural Malambo." Note "Clausura Vacaciones Útiles", 6 March 2023
//    (bar-vu-2023-clausura.html): "aprendieron en estos casi dos meses que duraron las clases". gob.pe search for the
//    institution (term "vacaciones útiles", news, sorted recent) returned no later vacaciones útiles note; the page says the
//    2023 notes are the most recent we found and names no officials.
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv): BARRANCO 42986 (rank 37 of the 43
//    Lima Metropolitana districts in places.tsv, our ordering of INEI figures); MIRAFLORES 126049; SANTIAGO DE SURCO 402074;
//    CHORRILLOS 377080.
//  CNEB (cneb/text.txt): primaria Tabla N.° 6 "Arte y cultura 3 3 3 3 3 3"; secundaria JER "Arte y cultura 3 3 3 3 3";
//    competency 28 capacity "Crea objetos virtuales en diversos formatos: consiste en construir materiales digitales con
//    diversos propósitos, siguiendo un proceso de" successive improvement and feedback (paraphrased on the page);
//    transversal; no computing area.
//  INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el 84,2% de la población de 6 y más años de edad en el país
//    hizo uso de Internet"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  EF EPI 2025 Peru page (ef_peru.txt): "Lima 555" high; listening 499.
//  RM 501-2025-MINEDU Tabla 1 (rm501-2025-pdf/page11-checked-by-eye.png): last 2026 teaching block ends 18 December 2026.
//  Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: 3 x 45 = 135 minutes of Arte y cultura a week.
// Our own example (barranco1.py, barranco2.py, barranco3.py), python3 -I, exact output:
//    v1 (col + row): #+-.#+-.#+-.#+-.#+-. / +-.#+-.#+-.#+-.#+-.# / -.#+-.#+-.#+-.#+-.#+ / .#+-.#+-.#+-.#+-.#+- / #+-.#+-.#+-.#+-.#+-.
//    v2 (col - row): #+-.#+-.#+-.#+-.#+-. / .#+-.#+-.#+-.#+-.#+- / -.#+-.#+-.#+-.#+-.#+ / +-.#+-.#+-.#+-.#+-.# / #+-.#+-.#+-.#+-.#+-.
//    v3 (col * row): #################### / #+-.#+-.#+-.#+-.#+-. / #-#-#-#-#-#-#-#-#-#- / #.-+#.-+#.-+#.-+#.-+ / ####################
// Lesson family: the remainder (modulo) as a repeating index into a string of symbols; change one operator and predict the
// new pattern before running it.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  "symbols = '#+-.'",
  'width = 20',
  'height = 5',
  '',
  'for row in range(height):',
  "    line = ''",
  '    for col in range(width):',
  '        index = (col + row) % len(symbols)',
  '        line = line + symbols[index]',
  '    print(line)'
].join('\n');

const O1 = [
  '#+-.#+-.#+-.#+-.#+-.',
  '+-.#+-.#+-.#+-.#+-.#',
  '-.#+-.#+-.#+-.#+-.#+',
  '.#+-.#+-.#+-.#+-.#+-',
  '#+-.#+-.#+-.#+-.#+-.'
].join('\n');

const O2 = [
  '#+-.#+-.#+-.#+-.#+-.',
  '.#+-.#+-.#+-.#+-.#+-',
  '-.#+-.#+-.#+-.#+-.#+',
  '+-.#+-.#+-.#+-.#+-.#',
  '#+-.#+-.#+-.#+-.#+-.'
].join('\n');

const O3 = [
  '####################',
  '#+-.#+-.#+-.#+-.#+-.',
  '#-#-#-#-#-#-#-#-#-#-',
  '#.-+#.-+#.-+#.-+#.-+',
  '####################'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Barranco' },
  slug: 'vacaciones-utiles-de-programacion-barranco-lima',
  code: 'vupb',
  accent: '#5B6C00',
  accentRationale: 'Vacaciones útiles de programación en Barranco: a moss and bougainvillea-leaf olive #5B6C00, the green that climbs the old casonas and the walls by the Bajada de Baños, warmer and brighter than the other Lima summer accents; contrast 4.75 at its lowest across the three paper tints (alloc.tsv), above 4.5, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Barranco',
  title: 'Vacaciones útiles de programación creativa en Barranco',
  description: 'Vacaciones útiles de programación creativa en Barranco: patrones, animación y webs, con clases en vivo y en inglés desde casa, para chicos y chicas de 8 a 14 años.',
  ogDescription: 'Programación creativa para niños de Barranco en el verano: dibujar con código, animar y crear una web, en vivo y en inglés, con un ejemplo que teje patrones.',
  twitterDescription: 'Un verano de programación creativa para Barranco: arte con código, en vivo y en inglés, desde casa y a cualquier hora.',
  pageName: 'Vacaciones útiles de programación en Barranco',
  webPageDescription: 'Guía para familias de Barranco, Lima, que buscan unas vacaciones útiles de programación creativa para hijos de 8 a 14 años: lo que la Municipalidad de Barranco publicó sobre sus vacaciones útiles de 2023, la población del distrito y sus vecinos según el INEI (Censos 2025), lo que el CNEB da a arte y a la creación digital, robótica o programación, y una clase de ejemplo en Python, escrita por nosotros, que dibuja patrones con el operador módulo.',
  courseDescription: 'Clases en vivo de programación creativa para niños y adolescentes de 8 a 14 años en Barranco y todo Lima, dictadas solo en inglés: Scratch, patrones y animación con código, diseño de páginas web y primeros juegos, en grupo o individuales, desde el verano y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en Barranco',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#municipio', label: 'En el distrito' },
    { href: '#creativa', label: 'Creativa' },
    { href: '#patrones', label: 'Ejemplo' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#reloj', label: 'Hora' }
  ],
  eyebrow: 'Barranco, Lima &middot; Vacaciones útiles &middot; Programación creativa',
  h1: 'Vacaciones útiles de programación creativa en Barranco',
  lede: 'Barranco tiene fama de distrito de pintores, músicos y fotógrafos, y muchos niños de aquí crecen dibujando. La programación también puede ser eso: patrones, colores, animaciones y páginas web hechas a mano, línea por línea. Esta página explica cómo convertir el verano en un taller de arte con código, en vivo y en inglés, sin salir de casa.',
  secondaryCta: { href: '#patrones', label: 'Ver un patrón hecho con código' },
  wa: 'Hola Modern Age Coders, somos de Barranco y nos interesa la programación creativa para nuestro hijo o hija este verano. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos en el mundo &middot; mentores que enseñan en un inglés claro',
  spec: [
    ['Edades', 'De 8 a 14 años'],
    ['Qué crean', 'Patrones, animaciones, juegos y webs'],
    ['Herramientas', 'Scratch, Python, HTML, CSS y p5.js'],
    ['Formato', 'Grupo o clases individuales, en vivo'],
    ['Idioma', 'Siempre en inglés'],
    ['Primera clase', 'Gratis']
  ],
  capsuleQ: 'Para empezar',
  capsule: 'Si busca vacaciones útiles en Barranco con algo distinto al deporte, la programación creativa encaja: su hijo dibuja patrones, anima personajes y diseña una página web escribiendo código. Modern Age Coders la enseña a niños y adolescentes de 8 a 14 años en clases en vivo por videollamada, dictadas en inglés por mentores que trabajan desde la India, pronuncian con cuidado y no apuran a nadie. Puede elegir grupo o clases individuales, el día y la hora que quiera, y la primera clase no tiene costo.',

  picks: {
    eyebrow: 'Cursos para un verano creativo',
    h2: 'Tres cursos para crear con código',
    lede: 'Uno para los más pequeños, uno para quien quiere su propia página web y uno para adolescentes que ya piensan como diseñadores.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'VUPB / 01', title: 'Scratch, de cero a juegos', alt: 'Imagen del curso de Scratch para niños', note: 'Se puede empezar con 6 años. Escenarios, personajes que se mueven, música y cuentos animados, armados con bloques que luego se convierten en código.' },
      { course: 'kids-ai-web-development-course', code: 'VUPB / 02', title: 'Desarrollo web para niños', alt: 'Imagen del curso de desarrollo web para niños', note: 'De 9 a 12 años. HTML para la estructura, CSS para colores y tipografías, y una web propia publicada al final, con sus dibujos o fotos.' },
      { course: 'creative-coding-animation-mastery', code: 'VUPB / 03', title: 'Programación creativa y animación', alt: 'Imagen del curso de programación creativa y animación', note: 'Desde los 13 años. Movimiento, video y arte generativo con p5.js: el código como pincel, para adolescentes con alma de artista.' }
    ]
  },

  sections: [
    {
      id: 'municipio',
      eyebrow: 'El verano en Barranco',
      h2: '¿Qué vacaciones útiles ha ofrecido la Municipalidad de Barranco?',
      lede: 'Según sus propias notas de 2023, las más recientes sobre vacaciones útiles que encontramos en su página institucional, la municipalidad ofreció deporte, danza, arte, ajedrez y también cursos de robótica, matemáticas recreativas y comprensión lectora, en dos sedes y durante casi dos meses.',
      body: [
        { kind: 'table', numCols: [], caption: 'Talleres de las vacaciones útiles 2023 de la Municipalidad de Barranco, según sus notas de enero y marzo de 2023', head: ['Tipo de taller', 'Lo que menciona la municipalidad'], rows: [
          ['Novedades del ciclo', 'Robótica kids y junior, escultura de plastilina, matemáticas recreativas, comprensión lectora'],
          ['Deporte', 'Vóley, básquet, taekwondo, fútbol, karate, atletismo'],
          ['Arte y movimiento', 'Ajedrez, actividades artísticas y danzas, entre ellas marinera norteña, baile moderno y hip hop'],
          ['Sedes', 'Estadio "Luis Gálvez Chipoco" y Centro Cultural Malambo'],
          ['Duración', '"Casi dos meses", según la nota de clausura del 6 de marzo de 2023']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Barranco, notas "Vacaciones Útiles Divertidas" (13 de enero de 2023) y "Clausura Vacaciones Útiles" (6 de marzo de 2023), en gob.pe/munibarranco, la dirección a la que remite su propio sitio web. Consultadas el 9 de noviembre de 2026. No encontramos notas posteriores sobre vacaciones útiles; lo que la municipalidad ofrezca en 2027 lo anunciará ella.' },
        { kind: 'p', mt: true, html: 'Barranco tiene 42,986 habitantes: es la cifra del INEI en los Censos Nacionales 2025. Es uno de los distritos menos poblados de Lima Metropolitana: ordenando las cifras del INEI, ocupa el puesto 37 entre los 43 distritos de la provincia de Lima (cálculo nuestro). Limita con Miraflores, Santiago de Surco y Chorrillos, que tienen 126,049, 402,074 y 377,080 habitantes respectivamente según el mismo censo, y con el mar.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que ya cubre el distrito',
          left: [
            'Movimiento, arte manual, música y, en 2023, un primer acercamiento a la robótica. Son talleres presenciales, con horarios del local y grupos del barrio.',
            'Para muchas familias es la base del verano, y no hay razón para dejarla.'
          ],
          rightH3: 'Lo que suma la programación creativa',
          right: [
            'Arte que se hace con lógica: un patrón que se repite porque una fórmula lo dice, una animación que se mueve porque un bucle la empuja, una web que se ve bien porque alguien eligió cada color.',
            'Ojo: Modern Age Coders es ajena a la Municipalidad de Barranco y a su programa. Damos clases por internet, con mentores en la India, y todas en inglés.'
          ] }
      ]
    },
    {
      id: 'creativa',
      eyebrow: 'Arte y código',
      h2: '¿Qué es la programación creativa y para qué sirve?',
      lede: 'Es programar para crear algo que se ve o se escucha: dibujos, animaciones, música, juegos o páginas web. Sirve para lo mismo que cualquier programación, pensar con orden, pero con un resultado que un niño quiere mostrar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Patrones', p: 'Rejillas, tejidos, mosaicos y espirales dibujados con bucles. El niño descubre que una sola regla, repetida, produce figuras que parecen hechas a mano.' },
          { h3: 'Animación', p: 'Personajes que caminan, rebotan o cambian de color. Cada movimiento es una variable que cambia un poco en cada paso.' },
          { h3: 'Diseño web', p: 'Una página propia con sus fotos, sus dibujos y sus colores. HTML ordena, CSS decora, y el niño decide cada detalle.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Lo que da el colegio en arte',
          left: [
            'El Currículo Nacional asigna a Arte y cultura 3 horas pedagógicas por semana en los seis grados de primaria y en los cinco de secundaria con jornada regular. Multiplicando por 45 minutos cada hora, salen 135 minutos a la semana (operación nuestra).',
            'En esas tablas no hay un área de computación ni de programación.'
          ],
          rightH3: 'Y en creación digital',
          right: [
            'La competencia digital del CNEB incluye una capacidad llamada "Crea objetos virtuales en diversos formatos", que el currículo describe como construir materiales digitales con distintos fines, a base de ajustes sucesivos y retroalimentación.',
            'Es justo cómo trabaja un programador creativo: prueba, mira el resultado, cambia un número y vuelve a probar. Pero esa capacidad es transversal, sin horas propias, y cada colegio decide cuánto la trabaja.'
          ] },
        { kind: 'p', mt: true, html: 'Nuestras clases no sustituyen al colegio ni ponen notas. No estamos relacionados con el MINEDU ni con ningún colegio; al terminar un curso, el alumno recibe un certificado de culminación que emite Modern Age Coders y nadie más.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica o código',
      h2: '¿Robótica o programación creativa para el verano?',
      lede: 'Depende de lo que su hijo disfrute, pero las dos comparten el mismo corazón: la lógica del programa. Nosotros enseñamos esa lógica en la pantalla, sin piezas ni kits.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dos formas de pasar el verano programando (nuestra comparación)', head: ['', 'Robótica en un taller presencial', 'Programación creativa en línea'], rows: [
          ['Qué produce', 'Un robot que se mueve o reacciona', 'Un dibujo, una animación, un juego o una web'],
          ['Qué hace falta', 'Ir al local y usar sus piezas', 'Una computadora en casa'],
          ['Qué se aprende de fondo', 'Secuencias, bucles, sensores', 'Secuencias, bucles, variables, diseño'],
          ['Qué queda al final', 'Lo que se aprendió; el kit suele quedarse en el taller', 'Archivos propios que se pueden seguir cambiando']
        ] },
        { kind: 'source', html: 'Comparación nuestra. En 2023 la Municipalidad de Barranco ofreció robótica kids y junior en sus vacaciones útiles; nosotros no vendemos ni usamos robots ni kits.' },
        { kind: 'p', mt: true, html: 'Si su hijo ya hizo robótica, lo que aprenda con nosotros sobre bucles y variables le servirá allí también. Si nunca programó y le atrae más dibujar que armar, la programación creativa suele engancharlo antes: el resultado aparece en la pantalla en segundos y se puede cambiar sin desarmar nada.' }
      ]
    },
    {
      id: 'patrones',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se dibuja un patrón con código?',
      lede: 'Con dos bucles y una operación que casi nadie conoce en primaria: el resto de una división, que en Python se escribe con <code>%</code>. El ejercicio es nuestro, para niños de 10 a 13 años, y se parece a diseñar la trama de un tejido.',
      body: [
        { kind: 'code', label: 'Versión 1: una diagonal', lang: 'Python', code: V1, note: 'El mentor pregunta en inglés antes de correrlo: "The string has four symbols. What will the second row start with?"' },
        { kind: 'code', label: 'Lo que dibuja la versión 1', lang: 'Salida', code: O1, note: 'Lo que mostró Python 3 al ejecutar el archivo en nuestra computadora, sin tocar. Cada fila empieza un símbolo más adelante, y la quinta vuelve a ser igual a la primera.' },
        { kind: 'p', mt: true, html: 'La clave es <code>(col + row) % len(symbols)</code>. El símbolo que toca es el resto de dividir la suma de columna y fila entre 4, la cantidad de símbolos. Como el resto solo puede ser 0, 1, 2 o 3, el patrón se repite cada cuatro pasos, en las dos direcciones. Ahí aparece la diagonal.' },
        { kind: 'code', mt: true, label: 'Lo que dibuja la versión 2, con (col - row)', lang: 'Salida', code: O2, note: 'Mismo programa, cambiando solo el signo + por el signo menos. Salida exacta de nuestra ejecución: la diagonal ahora cae hacia el otro lado.' },
        { kind: 'code', label: 'Lo que dibuja la versión 3, con (col * row)', lang: 'Salida', code: O3, note: 'Cambiando el signo por una multiplicación. Salida exacta de nuestra ejecución: la primera y la última fila quedan llenas de #, y la del medio alterna solo dos símbolos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir la segunda fila.</strong> El alumno escribe en un papel cómo cree que empezará. Si dice "+", entendió que todo se corre un lugar.',
          '<strong>Cambiar un signo.</strong> Antes de probar con el menos, dibuja a mano hacia dónde cree que caerá la diagonal.',
          '<strong>Explicar la sorpresa.</strong> En la versión 3, la fila 0 y la fila 4 salen llenas de #. ¿Por qué? Porque 0 por cualquier número es 0, y 4 por cualquier número da resto 0 al dividir entre 4.',
          '<strong>Explicar la fila del medio.</strong> En la fila 2 los productos son siempre pares, así que el resto solo puede ser 0 o 2: por eso alternan # y -.',
          '<strong>Diseñar su propia trama.</strong> El alumno cambia los símbolos, el ancho o la fórmula, por ejemplo <code>(col * col + row) % 4</code>, y presenta su patrón explicando en inglés qué regla lo produce.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que buscamos no es que su hijo memorice el operador <code>%</code>. Es que aprenda a adivinar lo que va a pasar antes de ejecutar, y a explicar después por qué pasó. Un generador de imágenes con IA puede dar un patrón bonito en un segundo, pero no le enseña a su hijo por qué la fila del medio alterna dos símbolos; eso lo descubre él mirando los restos.' }
      ]
    },
    {
      id: 'proyectos',
      eyebrow: 'Por edad',
      h2: '¿Qué obra puede terminar un niño de Barranco antes de marzo?',
      lede: 'Una obra terminada, que se pueda mostrar. Estas son nuestras propuestas por edad; el mentor las adapta a los gustos de cada alumno.',
      body: [
        { kind: 'two',
          leftH3: 'De 8 a 10 años',
          left: [
            '<strong>Un cuento animado en Scratch.</strong> Tres escenas, dos personajes y diálogos en inglés sencillo. Aprende eventos, secuencias y cómo se cambia de escena.',
            '<strong>Un mosaico de colores.</strong> Con bloques de lápiz, un patrón que se repite como una mayólica. Aprende bucles anidados sin saber todavía que se llaman así.'
          ],
          rightH3: 'De 10 a 12 años',
          right: [
            '<strong>Un tejido en Python</strong> como el del ejemplo, ampliado con colores en la pantalla. Aprende el resto de la división y las coordenadas.',
            '<strong>Una web hecha por él</strong> con HTML y CSS: una galería de sus dibujos o de las fotos de su barrio, publicada al terminar.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'De 12 a 14 años',
          left: [
            '<strong>Arte generativo con p5.js</strong>, para quienes tienen 13 o más: formas que se mueven con el ratón, colores que cambian con el tiempo. Aprende variables, funciones y algo de trigonometría sin darse cuenta.',
            '<strong>Una web interactiva con JavaScript</strong>: un botón que cambia la paleta, una galería que se ordena sola.'
          ],
          rightH3: 'Para cualquier edad',
          right: [
            'Un cierre del verano en el que el alumno presenta su obra al mentor y a su familia, en inglés, durante cinco minutos. Explicar lo que hizo cuenta tanto como haberlo hecho.',
            'Los proyectos y las edades son propuesta nuestra. No hay fecha de cierre ni paquete de verano: son las clases normales, que pueden seguir después de marzo.'
          ] },
        { kind: 'p', mt: true, html: 'Para los más pequeños, nuestra guía sobre <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> explica qué se aprende en primaria y a qué edad conviene cada herramienta. Si sus hijos estudian en un colegio bilingüe o internacional, la página en inglés sobre <a class="ag-inline-link" href="/english-medium-coding-classes-lima">clases para colegios bilingües de Lima</a> le será útil.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde casa',
      h2: '¿Tiene sentido estudiar programación por internet viviendo en Barranco?',
      lede: 'Porque Barranco es pequeño y muchas de las actividades del verano quedan fuera de él. Una clase en línea no suma un viaje a Miraflores, a Surco o a Chorrillos.',
      body: [
        { kind: 'p', html: 'No le daremos cifras del tránsito; ningún dato oficial que hayamos leído las mide para su calle. Lo que sí podemos decir es que la clase empieza cuando su hijo abre la computadora, termina cuando la cierra, y en medio no hay que buscar estacionamiento ni esperar a nadie. En el verano, cuando la familia reparte el día entre playa, talleres y visitas, eso pesa.' },
        { kind: 'two', mt: true,
          leftH3: 'El equipo que hace falta',
          left: [
            'Un equipo con teclado y ratón, sea laptop o de escritorio, además de cámara, micrófono y audífonos. Para dibujar con código, un ratón ayuda más que el panel táctil.',
            'Los datos del INEI para abril a junio de 2026 lo muestran: solo el 36,4 % de los hogares peruanos tenía una computadora o más, pero el 84,2 % de la población desde los 6 años navegó por internet. Es decir, la conexión suele estar; la computadora, no siempre.'
          ],
          rightH3: 'El inglés no es una barrera',
          right: [
            'Todas las clases son en vivo y en inglés. En el EF EPI 2025, Lima alcanza 555 puntos, nivel alto, y la comprensión auditiva del país marca 499; la clase está pensada para subir justamente esa: escuchar y entender.',
            'El mentor escribe cada palabra nueva, usa el dibujo en pantalla para explicar y acepta que el niño mezcle castellano e inglés al principio.'
          ] }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Dos zonas horarias',
      h2: '¿A qué hora puede ser la clase desde Barranco?',
      lede: 'A la que usted escoja. Nuestro equipo de mentores vive en la India, y su reloj marca siempre 10 horas y 30 minutos más que el de Barranco. Abajo, algunas conversiones de muestra.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuatro horas de Barranco y su equivalente indio (muestras de conversión, no un calendario de clases)', head: ['Barranco', 'India', 'Comentario'], rows: [
          ['8:15 a. m.', '6:45 p. m.', 'Antes de bajar a la playa'],
          ['10:45 a. m.', '9:15 p. m.', 'Media mañana'],
          ['12:30 p. m.', '11:00 p. m.', 'Antes del almuerzo'],
          ['5:45 p. m.', '4:15 a. m. del día siguiente', 'Al caer la tarde']
        ] },
        { kind: 'source', html: 'Base: Perú está en UTC-5 y no ha cambiado la hora por estación desde 1994 (tzdata, zona America/Lima, coincidente con la hora oficial del INACAL); la India está en UTC+5:30 y tampoco cambia. Regla práctica: a la hora de Barranco se le suman 10 horas y 30 minutos.' },
        { kind: 'p', mt: true, html: 'La RM 501-2025-MINEDU fijó el 18 de diciembre de 2026 como último día lectivo del año, y cuando revisamos gob.pe el 9 de noviembre de 2026 no figuraba la norma con el calendario 2027. No importa: su hijo puede empezar en cualquier semana del verano y seguir en otro horario cuando vuelva el colegio.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se ve el progreso en programación creativa?',
    lede: 'Cuatro niveles propios, como los de un taller de arte.',
    table: { caption: 'Cuatro niveles de programación creativa (nuestros)', head: ['Nivel', 'Lo que su hijo hace', 'Cómo se nota'], rows: [
      ['Copia con intención', 'reproduce un patrón y cambia un color o un símbolo', 'predice el resultado antes de ejecutar'],
      ['Varía', 'modifica una fórmula y obtiene un diseño nuevo', 'explica qué número cambió y por qué'],
      ['Compone', 'combina patrón, color y movimiento en una obra', 'planifica antes de escribir'],
      ['Firma', 'crea una pieza propia y la presenta en inglés', 'responde preguntas sobre su código']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pida a su hijo que le muestre una obra y le cuente qué regla la produce. Si lo explica, lo aprendió.',
      'Después de las clases el mentor envía una nota corta. Por WhatsApp puede respondernos en castellano.'
    ] },
    right: { h3: 'Para el alumno', ps: [
      'Cambie un solo número a la vez y mire qué pasa.',
      'Guarde cada versión: a veces el error más feo es el punto de partida de la obra más interesante.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos para crear',
    lede: 'Cualquiera de ellos se toma en directo y en inglés, solo o con un grupo, y se puede comenzar en enero.',
    bands: [
      { num: 'I', h3: 'Primeros pasos creativos', sub: 'De 6 a 12 años', courses: [
        { code: 'VUPB / CREA / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Animaciones, juegos y apps sencillas con bloques.' },
        { code: 'VUPB / CREA / 02', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una app para el celular, diseñada por el propio niño.' },
        { code: 'VUPB / CREA / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding para niños', blurb: 'Juegos con ayuda de IA, revisando y entendiendo cada paso.' }
      ] },
      { num: 'II', h3: 'Web y diseño', sub: 'Desde los 10 años', courses: [
        { code: 'VUPB / WEB / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML y CSS desde cero', blurb: 'Webs que se adaptan a cualquier pantalla, desde los 10 años.' },
        { code: 'VUPB / WEB / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript para adolescentes', blurb: 'Páginas interactivas y juegos de navegador, de 13 a 18 años.' },
        { code: 'VUPB / WEB / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Diseño de interfaces', blurb: 'CSS cuidado hasta interfaces en React, de 13 a 18 años.' }
      ] },
      { num: 'III', h3: 'Juegos e imagen', sub: 'Para quien quiere más', courses: [
        { code: 'VUPB / IMG / 01', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Juegos con Godot', blurb: 'Arte, escenas y código en 2D y 3D, de 10 a 17 años.' },
        { code: 'VUPB / IMG / 02', slug: 'creative-media-design-masterclass-teens', title: 'Medios creativos para adolescentes', blurb: 'Foto, video y diseño, de 13 a 18 años.' },
        { code: 'VUPB / IMG / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Videojuegos con Unity', blurb: 'C# y juegos publicados, para adolescentes.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una clase de programación creativa en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana temprano', l: 'Antes de la playa, con la luz y la cabeza frescas.' },
      { time: 'Tarde', l: 'Al volver del taller o del mar, después de descansar.' },
      { time: 'A su medida', l: 'Clases individuales en el horario que usted fije.' }
    ],
    cells: [
      { h3: 'Pantalla compartida', p: 'El mentor ve el lienzo del alumno y lo guía en directo.' },
      { h3: 'Inglés con imágenes', p: 'Cada palabra nueva va acompañada de lo que se ve en pantalla.' },
      { h3: 'La obra es suya', p: 'El alumno escribe su código; el mentor sugiere, no dibuja por él.' },
      { h3: 'Mentor de siempre', p: 'La misma persona todo el curso, que conoce su estilo.' },
      { h3: 'Muestra al final', p: 'Cada tramo cierra con una obra que se presenta.' },
      { h3: 'Solo o acompañado', p: 'Clases individuales, o un grupo de quince a veinte chicos.' }
    ]
  },

  projectsH2: 'Obras de nuestros estudiantes',
  projectsLede: 'Así se ven los proyectos cuando el código se convierte en oficio. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Así nos calificaron familias y alumnos en Google; reproducimos sus palabras como las dejaron, en inglés.',

  fees: {
    h2: 'Precios para familias de Barranco',
    lede: 'Mostramos la cuota mensual en dólares estadounidenses y se paga con tarjeta. Su banco hace el cambio a su moneda; según la cotización del día, el monto cobrado puede variar algo.',
    free: ['Una clase de prueba gratuita', 'Un pequeño reto creativo para conocer a su hijo', 'Sin tarjeta, sin compromiso'],
    group: ['Quince a veinte alumnos de edad parecida', 'El mismo mentor durante el curso', 'Clases en vivo cada semana', 'Pago mensual, se puede dejar cuando quiera'],
    one: ['Solo su hijo y el mentor', 'Los proyectos que a él le inspiren', 'El horario que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Barranco: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, son en inglés, en vivo, y eso juega a favor: su hijo crea con código y entrena el oído en inglés durante toda la clase. El mentor habla claro y despacio. El EF EPI 2025 da a Lima 555 puntos, lo que la ubica en la franja alta.' },
      { q: '¿Qué es la programación creativa?', a: 'Programar para crear algo visual o sonoro: patrones, animaciones, música, juegos o páginas web. Se aprenden los mismos conceptos que en cualquier curso de programación, con un resultado que el niño quiere mostrar.' },
      { q: '¿La Municipalidad de Barranco tiene talleres de programación?', a: 'En sus notas de 2023, las últimas sobre vacaciones útiles que encontramos, menciona robótica kids y junior, matemáticas recreativas, comprensión lectora, deporte y danza, pero no programación. Somos una academia independiente de la municipalidad.' },
      { q: '¿Necesita mi hijo saber dibujar?', a: 'No. En programación creativa el dibujo lo hace el código. Lo que ayuda es la curiosidad por ver qué pasa si se cambia un número.' },
      { q: '¿Desde qué edad?', a: 'Esta página está pensada para 8 a 14 años. Scratch se puede empezar desde los 6, y el curso de p5.js es para 13 años en adelante.' },
      { q: '¿Usan robots o kits?', a: 'No. Enseñamos programación, no hardware, y no enviamos ningún kit. Lo que su hijo aprenda sobre bucles y variables le servirá también si luego hace robótica.' },
      { q: '¿A qué hora pueden ser las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Las 10:45 a. m. en Barranco son las 9:15 p. m. en la India.' },
      { q: '¿Hasta cuándo van las clases de verano?', a: 'Hasta cuando usted quiera; no hay semanas contadas. Son nuestras clases mensuales, que se empiezan en vacaciones y continúan si su hijo quiere seguir creando.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, mes a mes, en dólares estadounidenses; el banco convierte el monto. La clase de prueba es gratuita.' },
      { q: '¿Recibe algún certificado?', a: 'Sí: cuando completa un curso le damos un certificado de culminación firmado por nuestra academia. No es un documento oficial ni da notas escolares, y no estamos vinculados al MINEDU ni a ningún colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir explorando',
    lede: 'Lecturas para familias con hijos creativos.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía para primaria: edades, colegio y una clase de ejemplo.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Programación e IA en Perú', p: 'La visión de conjunto para todo el país.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Una página en inglés para quienes vienen de colegios IB o Cambridge.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Diez ideas con IA para niños, explicadas paso a paso.' },
      { href: '/student-labs', label: 'Student labs', p: 'Obras y proyectos publicados por nuestros alumnos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo trabaja un mentor durante una clase.' }
    ]
  },

  start: {
    h2: 'Reserve una clase creativa de prueba',
    lede: 'Durante la prueba, el mentor conversa con su hijo con palabras simples en inglés, le pide que cambie un patrón o un personaje y observa su manera de resolverlo. Con eso le sugerimos un curso, un formato y un primer proyecto, sin ningún compromiso.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> o <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
    note: 'El inglés es el idioma de todas las clases, que son en directo y con mentores en la India; en WhatsApp le respondemos en castellano.',
    formNote: 'Sin costo, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos creativos', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch de cero a juegos' },
        { href: '/courses/kids-ai-web-development-course', label: 'Desarrollo web para niños' },
        { href: '/courses/creative-coding-animation-mastery', label: 'Programación creativa' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía para Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/english-medium-coding-classes-lima', label: 'Clases en inglés en Lima' },
        { href: '/student-labs', label: 'Obras de alumnos' }
      ] }
    ],
    bottomRight: 'Un resto, mil patrones'
  },

  personalityCss: `
.ag-root.ag-vupb .ag-hero h1 { max-width: 18ch; letter-spacing: -0.02em; }
.ag-root.ag-vupb .ag-capsule { border-left-width: 3px; border-radius: 0; }
.ag-root.ag-vupb .ag-code pre { letter-spacing: 0.12em; line-height: 1.4; }
.ag-root.ag-vupb .ag-grid-3 h3 { font-style: italic; }
.ag-root.ag-vupb .ag-table caption { text-align: left; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Distrital de Barranco (gob.pe/munibarranco, the address its own site redirects to): notes of 13 January 2023 and 6 March 2023 on vacaciones útiles; INEI Censos Nacionales 2025 (district populations) and Boletín TIC II trimestre 2026; MINEDU CNEB (Arte y cultura hours, competency 28 capacity Crea objetos virtuales) and RM 501-2025-MINEDU Tabla 1; EF EPI 2025; tzdata and INACAL. Read 8 and 9 November 2026. The robotics comparison, projects by age, levels and the example are ours.',
    localProject: 'Woven patterns in Python for a Barranco child of 10 to 13: two loops pick a symbol from #+-. with (col + row) % 4 and draw a diagonal that repeats every four rows; (col - row) turns it the other way; (col * row) leaves rows 0 and 4 full of # and row 2 alternating #-. Lesson family: the remainder as a repeating index into a string; change one operator and predict the new pattern before running it.',
    requiredMentions: ['#-#-#-#-#-#-#-#-#-#-', '#.-+#.-+#.-+#.-+#.-+', '(col + row) % len(symbols)', 'Barranco tiene 42,986 habitantes', 'Centro Cultural Malambo', 'robótica kids y junior', 'ocupa el puesto 37 entre los 43 distritos', 'la comprensión auditiva del país marca 499', 'Un resto, mil patrones'],
    sources: [
      { claim: 'Barranco vacaciones útiles 2023: robotics kids and junior, plasticine sculpture, recreational maths, reading comprehension, sports and dance, two venues.', url: 'https://www.gob.pe/institucion/munibarranco/noticias/688270-vacaciones-utiles-divertidas' },
      { claim: 'Closing of the 2023 vacaciones útiles after almost two months of classes.', url: 'https://www.gob.pe/institucion/munibarranco/noticias/720822-clausura-vacaciones-utiles' },
      { claim: 'Barranco 42,986; Miraflores 126,049; Santiago de Surco 402,074; Chorrillos 377,080 (Censos Nacionales 2025).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Arte y cultura 3 weekly hours in primaria and secundaria JER; competency 28 capacity Crea objetos virtuales; 45-minute teaching hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '84.2% of people 6+ used internet; 36.4% of households had a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high); Peru listening 499.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: '2026 school year last teaching day 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Peru UTC-5, India UTC+5:30, no DST in either.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Barranco vacaciones útiles 2024 to 2027: not found on gob.pe/munibarranco; the page says the 2023 notes are the latest we found.',
      'Names of municipal officials in the 2023 closing note: left out (no political names).',
      'Robot kits or hardware: none; the page says we teach programming only.',
      'Any affiliation with the Municipalidad de Barranco: refused.',
      'Traffic figures: refused; none sourced.',
      'A camp length, start date or summer price: refused; the municipal "casi dos meses" is quoted as theirs, not ours.',
      'Spanish-language teaching, MINEDU or school endorsement, official certificate: refused.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

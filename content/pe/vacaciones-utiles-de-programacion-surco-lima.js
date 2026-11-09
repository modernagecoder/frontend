// SHIP: market | Surco summer for families with two or more children: one plan per child | lists: alias versus copy (two names, one list)
'use strict';
// Vacaciones útiles de programación en Santiago de Surco (ag- Spanish district door, Peru cluster row PE205, P2,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "Vacaciones útiles pages", district pages).
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no camp length.
// Spine: Surco is the largest of the three districts we cover and the one with the most school-age children; the page is
// for the family organising a summer for two or more children of different ages (hermanos), with one plan per child,
// one shared computer and no trips across Lima.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-surco-lima/):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SANTIAGO DE SURCO
//    402074 188658 213416 386432 180941 205491 15642 7717 7925" (total, hombres, mujeres; censada; omitida); "LIMA
//    METROPOLITANA 10141775". (inei/sheet4_CUADRO_N_3.tsv, población censada por grupo de edad): "DISTRITO SANTIAGO DE
//    SURCO 386432 15690 24155 28204 66470 85158 80647 86108" (0 a 5, 6 a 11, 12 a 17, 18 a 29, 30 a 44, 45 a 59, 60 y más).
//  - Municipalidad de Santiago de Surco, 6 January 2026 (talleres-verano-2026.html, datePublished 2026-01-06):
//    "DivertiSurco: Disfruta tu verano 2026"; "durante los meses de enero y febrero"; "dirigidos a niños y adolescentes del
//    distrito y de Lima en general"; "arte vivo, liderazgo y habilidades sociales, dibujo, ciencia y robótica"; "los
//    diferentes Clubes del Vecino"; "Los cupos son limitados". The council's own site search for "vacaciones utiles"
//    returned "Nothing Found" (site-search-vacaciones.html); the 2027 summer offer was not published when checked
//    (9 Nov 2026). Prices and phone numbers in the note are not repeated.
//  - RM 501-2025-MINEDU Tabla 1 (rm501-2025-pdf/page11-checked-by-eye.png): fourth teaching block "Del 19 octubre a 18 de
//    diciembre"; first "Del 16 marzo al 15 de mayo". No 2027 norm on gob.pe as of 2026-11-08 (facts-school BLOCKED.md).
//  - INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7% de los hogares disponía del
//    servicio"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  - EF EPI 2025 Peru page (ef_peru.txt): Lima 555, high band from 550; Peru speaking 480.
//  - Time (timezone.tsv): America/Lima UTC-5 all year; India UTC+5:30; 10 h 30 min.
//  - Neighbouring districts named in plain text (general geography of Lima), no figures attached.
// Our own calculations (python3 -I): 24155 / 386432 = 6.25% (6 to 11), 28204 / 386432 = 7.30% (12 to 17);
//   printed on the page rounded, labelled ours.
// Our own example (vau_v1.py, vau_v2.py in the src-pages folder), exact output:
//   v1: "Valeria: ['Scratch: maze', 'Python: turtle', 'Roblox: obby']" / "Mateo:   ['Scratch: maze', 'Python: turtle',
//   'Roblox: obby']" / "Same list? True"; v2 with .copy(): "Valeria: ['Scratch: maze', 'Python: turtle']" / "Mateo:
//   ['Scratch: maze', 'Python: turtle', 'Roblox: obby']" / "Same list? False".
// Lesson family: a list has one identity; "=" gives it a second name, .copy() makes a second list (alias versus copy).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  "plan_base = ['Scratch: maze', 'Python: turtle']",
  '',
  'plan_valeria = plan_base',
  'plan_mateo = plan_base',
  '',
  "plan_mateo.append('Roblox: obby')",
  '',
  "print('Valeria:', plan_valeria)",
  "print('Mateo:  ', plan_mateo)",
  "print('Same list?', plan_valeria is plan_mateo)"
].join('\n');

const OUT1 = [
  "Valeria: ['Scratch: maze', 'Python: turtle', 'Roblox: obby']",
  "Mateo:   ['Scratch: maze', 'Python: turtle', 'Roblox: obby']",
  'Same list? True'
].join('\n');

const V2 = [
  "plan_base = ['Scratch: maze', 'Python: turtle']",
  '',
  'plan_valeria = plan_base.copy()',
  'plan_mateo = plan_base.copy()',
  '',
  "plan_mateo.append('Roblox: obby')",
  '',
  "print('Valeria:', plan_valeria)",
  "print('Mateo:  ', plan_mateo)",
  "print('Same list?', plan_valeria is plan_mateo)"
].join('\n');

const OUT2 = [
  "Valeria: ['Scratch: maze', 'Python: turtle']",
  "Mateo:   ['Scratch: maze', 'Python: turtle', 'Roblox: obby']",
  'Same list? False'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Surco' },
  slug: 'vacaciones-utiles-de-programacion-surco-lima',
  code: 'vau',
  accent: '#00493C',
  accentRationale: 'Vacaciones útiles en Santiago de Surco: a deep park green #00493C, for the tree-lined parks and Clubes del Vecino where Surco families spend the summer, darker than the leafy green of the primaria page; contrast 8.44 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Surco',
  title: 'Vacaciones útiles de programación en Surco, en vivo en inglés',
  description: 'Vacaciones útiles de programación para niños y adolescentes de Santiago de Surco: clases en vivo, en línea y en inglés, desde casa, en grupo o individuales.',
  ogDescription: 'Un verano de programación para sus hijos en Surco sin salir de casa: qué ofreció la municipalidad en 2026, cuántos niños tiene el distrito según el INEI y un plan propio para cada hermano.',
  twitterDescription: 'Programación en vivo y en inglés para las vacaciones útiles en Surco, desde casa y a cualquier hora.',
  pageName: 'Vacaciones útiles de programación en Surco',
  webPageDescription: 'Guía para familias de Santiago de Surco que quieren dedicar las vacaciones escolares a la programación, con clases en vivo, en línea y en inglés: datos del distrito según los Censos Nacionales 2025 del INEI, el programa municipal DivertiSurco 2026, el calendario escolar 2026 del MINEDU, cómo organizar el verano de dos o más hijos y una clase de ejemplo en Python escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños y adolescentes de Santiago de Surco, dictadas solo en inglés, para empezar en las vacaciones de verano: Scratch, Python, Roblox, web e IA, en una clase grupal de quince a veinte o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en Surco',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distrito', label: 'Surco' },
    { href: '#hermanos', label: 'Hermanos' },
    { href: '#desde-casa', label: 'Desde casa' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#ingles', label: 'En inglés' }
  ],
  eyebrow: 'Santiago de Surco &middot; Vacaciones útiles &middot; De 6 a 17 años',
  h1: 'Vacaciones útiles de programación en Surco, desde casa',
  lede: 'Cuando termina el colegio, muchas familias surcanas organizan el verano de dos o tres hijos a la vez: uno quiere fútbol, otra quiere dibujar, y alguno pregunta si puede aprender a hacer videojuegos. Esta página es para usted si busca que la programación sea parte de ese verano sin sumar más trayectos por Lima: qué ofreció la municipalidad en 2026, cuántos niños y adolescentes viven en el distrito, cómo armar un plan distinto para cada hijo y cómo es una clase real.',
  secondaryCta: { href: '#hermanos', label: 'Un plan para cada hijo' },
  wa: 'Hola Modern Age Coders, vivimos en Santiago de Surco y queremos clases de programación en inglés para nuestros hijos en las vacaciones. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un mentor propio para cada hijo, siempre en inglés',
  spec: [
    ['Distrito', 'Santiago de Surco, Lima Metropolitana'],
    ['Edades', 'Niños de 6 a 12 y adolescentes de 13 a 17'],
    ['Cuándo', 'Desde que termina el año escolar en diciembre'],
    ['Dónde', 'En casa, por videollamada, sin traslados'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí: sus hijos pueden pasar las vacaciones útiles en Surco aprendiendo programación sin salir de casa. Modern Age Coders enseña a niños de 6 a 12 años y a adolescentes de 13 a 17 con clases en vivo, en línea y en inglés, con mentores desde la India que hablan claro y se adaptan al ritmo de cada uno. No es un campamento con fecha fija: cada hijo empieza nuestro curso normal cuando acaba el colegio, en una clase grupal o individual, en los días y horas que su familia prefiera, y puede seguir en marzo.',

  picks: {
    eyebrow: 'Cursos para empezar',
    h2: 'Tres cursos para hermanos de distintas edades',
    lede: 'Si en casa hay un niño pequeño, uno de primaria alta y un adolescente, cada uno tiene aquí su punto de partida.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'VAU / 01', title: 'Scratch para niños', alt: 'Imagen del curso de Scratch para niños', note: 'Para los menores, desde los 6 años. Historias, animaciones y juegos con bloques, sin necesidad de escribir con rapidez en el teclado.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'VAU / 02', title: 'Programar juegos en Roblox', alt: 'Imagen del curso de programación de juegos en Roblox con Luau', note: 'Desde los 8 años. Para el hijo que ya juega Roblox y quiere saber cómo se construye por dentro un obby, un marcador o una tienda.' },
      { course: 'python-complete-masterclass-teens', code: 'VAU / 03', title: 'Python para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'De 13 a 17 años. De la primera variable a archivos, funciones y pequeñas aplicaciones, con proyectos que el adolescente elige.' }
    ]
  },

  sections: [
    {
      id: 'distrito',
      eyebrow: 'El distrito',
      h2: '¿Cuántos escolares tiene Santiago de Surco según el censo de 2025?',
      lede: 'Muchos. Según los Censos Nacionales 2025 del INEI, Santiago de Surco tiene 402 074 habitantes, y entre la población censada hay 24 155 niños de 6 a 11 años y 28 204 adolescentes de 12 a 17. Es decir, decenas de miles de escolares que en enero se quedan sin colegio al mismo tiempo.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Santiago de Surco y Lima Metropolitana en los Censos Nacionales 2025 (INEI)', head: ['Indicador', 'Santiago de Surco', 'Lima Metropolitana'], rows: [
          ['Población total (censada más omitida)', '402 074', '10 141 775'],
          ['Población censada', '386 432', '9 600 043'],
          ['Censados de 0 a 5 años', '15 690', '555 239'],
          ['Censados de 6 a 11 años', '24 155', '818 096'],
          ['Censados de 12 a 17 años', '28 204', '867 253'],
          ['Censados de 60 años y más', '86 108', '1 491 744']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, tabulados de Lima Metropolitana, Cuadro N.° 1 (población total, censada y omitida) y Cuadro N.° 3 (población censada por grupo de edad), descargados el 8 de noviembre de 2026. El día de referencia del censo fue el 15 de septiembre de 2025. Los grupos de edad son los que publica el INEI; no los sumamos entre sí.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dicen las cifras',
          left: [
            'Con nuestro propio cálculo, los niños de 6 a 11 años son alrededor del 6,3 % de la población censada de Surco y los adolescentes de 12 a 17, alrededor del 7,3 %. Las personas de 60 años y más son muchas más: 86 108. Surco es un distrito con abuelos cerca, algo que pesa cuando se piensa quién acompaña a los niños en verano.',
            'El INEI también registra 213 416 mujeres y 188 658 hombres en la población total del distrito. Son datos del censo, no de nuestras clases: no publicamos cuántos alumnos tenemos en Surco ni en ningún distrito.'
          ],
          rightH3: 'Dónde queda Surco',
          right: [
            'Santiago de Surco es uno de los 43 distritos de Lima Metropolitana. Limita, entre otros, con San Borja, Surquillo, Miraflores, Barranco, Chorrillos, San Juan de Miraflores, Villa María del Triunfo, La Molina y Ate.',
            'Es un distrito extenso, con zonas tan distintas como Higuereta, Chacarilla, Loma Amarilla o Sagitario, nombres que la propia municipalidad usa para sus complejos deportivos. Esa extensión es justamente la que hace que, para muchas familias, cualquier actividad de verano implique auto, taxi o micro.'
          ] }
      ]
    },
    {
      id: 'municipalidad',
      eyebrow: 'El verano municipal',
      h2: '¿Qué vacaciones útiles ofreció la Municipalidad de Surco en 2026?',
      lede: 'La municipalidad organizó "DivertiSurco: Disfruta tu verano 2026", talleres durante los meses de enero y febrero dirigidos a niños y adolescentes del distrito y de Lima en general, con una oferta grande de deporte, arte y algo de ciencia.',
      body: [
        { kind: 'p', html: 'Según la nota que la Municipalidad de Santiago de Surco publicó en su web el 6 de enero de 2026, la oferta incluyó talleres educativos como arte vivo, liderazgo y habilidades sociales, dibujo, ciencia y robótica, en diversas sedes de la comuna; teatro y marinera norteña en el Teatro Municipal; música en Surco Studio; danza, oratoria, fotografía y robótica en los diferentes Clubes del Vecino; y una lista larga de deportes en el coliseo, el estadio y los complejos deportivos del distrito. La propia nota advertía: "Los cupos son limitados".' },
        { kind: 'source', html: 'Fuente: Municipalidad de Santiago de Surco, "Surco abre talleres educativos, culturales y deportivos para un verano 2026 útil y divertido", munisurco.gob.pe, 6 de enero de 2026, leída el 9 de noviembre de 2026. Cuando la consultamos, la municipalidad aún no había anunciado su oferta para el verano 2027. No estamos vinculados con la Municipalidad de Surco.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo bueno del taller municipal', p: 'Los niños salen de casa, conocen a otros vecinos y hacen deporte o arte con un profesor presencial. Para muchas familias es la base del verano, y nosotros no buscamos reemplazarlo.' },
          { h3: 'Dónde aparece la tecnología', p: 'En la nota de 2026, la tecnología aparece como robótica y ciencia. Es un buen primer contacto. Lo que un taller corto no suele dar es tiempo para escribir programas propios y entender la lógica detrás del robot.' },
          { h3: 'Cómo se combinan', p: 'Nuestra clase dura alrededor de una hora, dos veces por semana, a la hora que usted escoja. Así, la natación o el vóley pueden ir por la mañana y la programación por la tarde, sin chocar.' }
        ] }
      ]
    },
    {
      id: 'hermanos',
      eyebrow: 'Hermanos',
      h2: '¿Cómo organizar las vacaciones útiles de dos o más hijos a la vez?',
      lede: 'Con un plan propio para cada hijo, aunque compartan la misma computadora. El error más común es inscribir a todos en lo mismo porque es más fácil de coordinar; un niño de 7 años y uno de 12 aprenden programación de formas muy distintas.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplo de verano para tres hermanos (plan nuestro, ilustrativo)', head: ['Etapa del verano', 'Valeria, 7 años', 'Mateo, 11 años', 'Lucía, 15 años'], rows: [
          ['Primeras clases', 'Mover y hacer hablar a un personaje en Scratch', 'Un juego en Scratch con puntaje', 'Python desde cero: variables y decisiones'],
          ['Segunda etapa', 'Un cuento animado con repeticiones', 'Primeras líneas de Python con la tortuga', 'Listas y bucles: un registro de lecturas'],
          ['Tercera etapa', 'Un juego de atrapar objetos', 'Un obby en Roblox con Luau', 'Un programa que lee un archivo de datos'],
          ['Cierre del verano', 'Mostrar el juego a la familia', 'Explicar su obby en inglés', 'Publicar una pequeña web o app']
        ] },
        { kind: 'source', html: 'Plan escrito por nuestros mentores para esta página; los nombres son inventados. Cada hijo se ubica después de su propia clase gratis, así que el punto de partida puede cambiar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Una clase gratis por hijo.</strong> Cada niño conoce a su mentor por separado. Así nadie se esconde detrás del hermano mayor y el mentor ve cómo piensa cada uno.',
          '<strong>Horas que no se crucen.</strong> Si en casa hay una sola computadora, ponga las clases en horas distintas: por ejemplo, la menor a media mañana y el mayor después del almuerzo. Como usted elige la hora, eso se arregla al reservar.',
          '<strong>Grupo o individual según la edad.</strong> Los más pequeños suelen avanzar con más soltura en clases individuales al principio; un adolescente con algo de experiencia aprovecha mucho un grupo de su edad.',
          '<strong>Proyectos que no compiten.</strong> Que cada hijo tenga su propio proyecto evita comparaciones. Al final del verano, cada uno presenta el suyo a la familia.',
          '<strong>Una revisión a fines de febrero.</strong> Con lo que vio en las notas del mentor, decida para cada hijo si sigue en marzo, baja a una clase por semana o hace una pausa.'
        ] },
        { kind: 'p', mt: true, html: 'A cada hijo lo acompaña un mismo mentor de principio a fin, que aprende cómo piensa y le escribe a usted, después de las clases, qué trabajaron y qué sigue. Si dos hermanos de edad parecida quieren estar juntos, pueden compartir clase grupal; lo decidimos con usted después de las clases gratis.' }
      ]
    },
    {
      id: 'desde-casa',
      eyebrow: 'Sin traslados',
      h2: '¿Por qué hacer las vacaciones útiles en línea desde casa?',
      lede: 'Porque el verano de una familia en Surco suele llenarse de trayectos: a la piscina, al club, a la casa de los abuelos, al taller de la tarde. Una clase en vivo por videollamada no suma ninguno.',
      body: [
        { kind: 'two',
          leftH3: 'El tiempo que no se pierde',
          left: [
            'Quien vive en Lima conoce el problema sin necesidad de cifras: cruzar la ciudad para una actividad de una hora puede consumir la tarde. Con una clase en línea, el niño se sienta frente a la computadora cinco minutos antes y a la hora exacta ya está con su mentor.',
            'Eso cambia la logística de toda la familia. Nadie tiene que esperar afuera de una academia, ni salir antes del trabajo para recoger a un hijo en otro distrito.'
          ],
          rightH3: 'Lo que dice el INEI sobre los hogares',
          right: [
            'Entre abril y junio de 2026, el 84,7 % de los hogares de Lima Metropolitana tenía internet, de acuerdo con la encuesta trimestral de tecnologías en el hogar del INEI, que cuenta al Callao dentro de Lima Metropolitana. A escala nacional, el 36,4 % de los hogares tenía por lo menos una computadora.',
            'Para una clase de programación basta una laptop o computadora de escritorio con cámara y micrófono, aunque sea compartida, y una conexión estable. Un celular sirve para mirar, pero no para escribir código con comodidad.'
          ] },
        { kind: 'p', mt: true, html: 'Una clase en línea en vivo no es un video grabado. El mentor ve en la pantalla compartida lo que su hijo escribe, le pregunta qué espera que pase y lo ayuda a encontrar el error en ese momento. Por eso funciona igual en Higuereta que en Arequipa o en Cusco: nuestra página de <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">clases de programación e IA en Perú</a> reúne todo lo que enseñamos en el país.' }
      ]
    },
    {
      id: 'calendario',
      eyebrow: 'Fechas',
      h2: '¿Cuándo terminan las clases escolares y cuándo vuelven?',
      lede: 'Para 2026, la norma técnica del MINEDU (RM 501-2025) fijó el cuarto bloque de semanas lectivas del 19 de octubre al 18 de diciembre de 2026. Ese viernes 18 de diciembre es, para la mayoría de colegios, el último día de clases del año.',
      body: [
        { kind: 'p', html: 'El año escolar 2026 había empezado con los estudiantes el 16 de marzo de 2026, después de dos semanas de gestión del 2 al 13 de marzo, de modo que el verano escolar de los niños va, aproximadamente, desde fines de diciembre hasta la segunda mitad de marzo. Para 2027 todavía no hay fecha: al 8 de noviembre de 2026 no encontramos en gob.pe la norma del MINEDU para el año escolar 2027. Los colegios privados, además, organizan su propia calendarización dentro de la norma, así que conviene revisar la que mande el colegio de sus hijos.' },
        { kind: 'source', html: 'Fuente: Resolución Ministerial N.° 501-2025-MINEDU, "Norma Técnica para el Año Escolar 2026", Tabla 1, página 7 del PDF firmado, revisada a simple vista el 9 de noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Por eso no le vendemos un programa de verano con fecha de inicio y de fin. Cada hijo puede tomar su sesión gratuita en diciembre, empezar el curso apenas termine el colegio y seguir el tiempo que la familia decida; si el colegio vuelve en marzo, la clase cambia de hora y continúa.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Qué aprende un niño de 11 años en una clase de verano?',
      lede: 'Este ejercicio lo usan nuestros mentores con niños de 10 a 12 años que ya escriben algo de Python. Es nuestro y viene, como no podía ser de otra forma, de un verano con hermanos: dos niños parten del mismo plan y uno le agrega un proyecto.',
      body: [
        { kind: 'code', label: 'Versión 1: dos planes que parecen distintos', lang: 'Python', code: V1, note: 'Sin correr nada todavía, el mentor lanza la pregunta en inglés: "Which plan will change when Mateo adds Roblox?" Casi todos responden que solo el de Mateo.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Es el resultado literal que obtuvimos al correr este código en Python 3. El proyecto de Roblox que agregó Mateo se coló también en la lista de Valeria.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Describir la sorpresa.</strong> El niño dice en voz alta qué esperaba y qué salió: "I expected Valeria to have two projects, but she has three." Es una oración completa en inglés con un propósito real.',
          '<strong>Leer la última línea.</strong> <code>Same list? True</code> es la pista. El operador <code>is</code> pregunta si dos nombres señalan el mismo objeto, no si se parecen.',
          '<strong>Entender el signo igual.</strong> <code>plan_mateo = plan_base</code> no copia la lista: le pone un nombre más a la misma lista. Valeria, Mateo y el plan base son tres etiquetas pegadas en una sola caja.',
          '<strong>Corregir con una copia.</strong> Con <code>.copy()</code> cada hermano recibe su propia caja con el mismo contenido inicial, y lo que agregue uno ya no le llega al otro.'
        ] },
        { kind: 'code', label: 'Versión 2: una lista para cada hermano', lang: 'Python', code: V2, note: 'Solo cambian dos líneas: <code>plan_base.copy()</code> en lugar de <code>plan_base</code>.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'También es el resultado literal de nuestra prueba. Valeria mantiene sus dos proyectos y <code>Same list?</code> ahora dice <code>False</code>.' },
        { kind: 'p', mt: true, html: 'El reto final es predecir qué pasa si Valeria también agrega algo, por ejemplo <code>plan_valeria.append(\'Scratch: story\')</code>, en cada versión. Quien lo explica sin ejecutar el código entendió la diferencia entre un nombre y una copia, una idea que aparece después en cualquier lenguaje. Ese es el hábito que enseñamos: pensar antes de ejecutar, y buscar la causa de una sorpresa en lugar de pedirle a una herramienta que la tape.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Idioma',
      h2: '¿Las clases de programación son en español?',
      lede: 'No. En verano, igual que el resto del año, enseñamos solamente en inglés, en directo y por internet. Para muchas familias de Surco esa es justamente la ventaja: sus hijos programan y practican inglés hablado en la misma hora.',
      body: [
        { kind: 'two',
          leftH3: 'Cómo se entiende el mentor',
          left: [
            'Nuestros mentores están en la India. Hablan despacio, con frases cortas, muestran en la pantalla todo lo que dicen y repiten con otras palabras. Si un niño responde en castellano, el mentor toma la idea y se la devuelve en inglés, sin corregirlo delante de nadie.',
            'Las dos o tres primeras semanas sirven para acostumbrarse al acento, y el verano es un momento ideal para eso: no hay tareas del colegio ni exámenes compitiendo por la atención del niño.'
          ],
          rightH3: 'El inglés de Lima según el EF EPI 2025',
          right: [
            'El EF EPI 2025, el ranking anual de inglés de la empresa EF, da a Lima 555 puntos, dentro del nivel "Alto", que EF fija desde 550; es la única ciudad peruana en ese nivel. Ese mismo informe le da a Perú su nota más baja en hablar: 480 puntos.',
            'El EF EPI mide a personas adultas que rinden su examen, no a niños, pero muestra hacia dónde apunta una clase hablada: a soltar el inglés que muchos ya leen.'
          ] },
        { kind: 'p', mt: true, html: 'No hace falta que sus hijos lleguen hablando inglés. Basta con que entiendan saludos e instrucciones sencillas; el resto llega con el código, que ya está escrito con palabras inglesas. Si sus hijos estudian en un colegio bilingüe, Cambridge o IB, nuestra página sobre <a class="ag-inline-link" href="/english-medium-coding-classes-lima">clases de programación en inglés en Lima</a> explica cómo acompañamos ese tipo de colegio, y la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> responde las dudas sobre primaria.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horario',
      h2: '¿A qué hora serían las clases desde Surco?',
      lede: 'A la que usted elija, cualquier día. Perú se mantiene en UTC-5 los doce meses y la India en UTC+5:30, de modo que entre ambos relojes hay siempre una diferencia de 10 horas y 30 minutos.',
      body: [
        { kind: 'p', html: 'Unos ejemplos para ubicarse, no un horario de clases: las 9:00 a. m. en Surco son las 7:30 p. m. en la India; las 11:30 a. m. son las 10:00 p. m.; las 3:00 p. m. son la 1:30 a. m. del día siguiente en la India, y las 7:00 p. m. son las 5:30 a. m. del día siguiente. Al reservar, usted escoge la hora mirando el reloj de su casa y el sistema se la muestra al mentor convertida a la hora de la India.' },
        { kind: 'source', html: 'Fuente: tzdata, el registro público de zonas horarias (America/Lima en UTC-5, sin cambio de hora estacional desde 1994; Asia/Kolkata en UTC+5:30), y el reloj oficial del INACAL, que el 8 de noviembre de 2026 marcaba UTC-5.' },
        { kind: 'p', mt: true, html: 'En verano, muchas familias con varios hijos reparten así el día: el menor a media mañana, cuando todavía está fresco; el mayor después del almuerzo o al caer la tarde, cuando vuelve de la playa o del taller municipal. Con clases individuales, cada hijo puede tener una hora distinta cada semana si así le acomoda a la familia.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si cada hijo aprovechó el verano?',
    lede: 'Usamos cinco niveles propios. Lo normal es que en un primer verano un niño suba uno o dos.',
    table: { caption: 'Cinco niveles de programación que usamos con las familias (nuestros)', head: ['Nivel', 'Edad habitual', 'Su hijo o hija puede'], rows: [
      ['1. Ordenar', '6 a 8 años', 'poner pasos en orden para que un personaje cumpla una tarea'],
      ['2. Repetir', '7 a 10 años', 'combinar repeticiones y condiciones y contar en voz alta para qué sirven'],
      ['3. Escribir', '9 a 12 años', 'teclear unas líneas de Python y adivinar su resultado antes de correrlas'],
      ['4. Organizar datos', '11 a 15 años', 'guardar información en listas y saber cuándo copiarlas'],
      ['5. Crear', '13 a 17 años', 'idear un proyecto suyo, construirlo y defenderlo ante otros']
    ] },
    left: { h3: 'Si usted es la mamá o el papá', ps: [
      'Compare a cada hijo consigo mismo, no con su hermano. Un niño de 7 años que pasa del nivel 1 al 2 avanzó tanto como uno de 12 que llega al 4.',
      'Pídale a cada uno que le muestre su proyecto y se lo explique. Si lo explica, aunque mezcle castellano e inglés, lo entendió.'
    ] },
    right: { h3: 'Para los estudiantes', ps: [
      'Antes de ejecutar, diga qué espera ver. Después compruébelo.',
      'Si algo cambia donde no debía, pregúntese si dos nombres apuntan a lo mismo.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para el verano en Surco',
    lede: 'Otras opciones para el verano, con clases en tiempo real en inglés y un mentor estable, grupales o individuales.',
    bands: [
      { num: 'I', h3: 'Para los más pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'VAU / PEQ / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Acertijos y patrones que preparan la cabeza para programar.' },
        { code: 'VAU / PEQ / 02', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Diseñar una app de teléfono juntando bloques, sin teclear.' },
        { code: 'VAU / PEQ / 03', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos para niños', blurb: 'Scratch, Roblox y Minecraft en un mismo recorrido.' }
      ] },
      { num: 'II', h3: 'Primaria alta', sub: 'De 9 a 12 años', courses: [
        { code: 'VAU / PRI / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Primer código escrito con acertijos y juegos sencillos.' },
        { code: 'VAU / PRI / 02', slug: 'kids-ai-web-development-course', title: 'Webs para niños', blurb: 'Su propia web en internet, hecha con HTML y CSS.' },
        { code: 'VAU / PRI / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding para niños', blurb: 'La IA sugiere, el niño decide y comprueba cada cambio.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 17 años', courses: [
        { code: 'VAU / SEC / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Programación orientada a objetos desde cero, con proyectos.' },
        { code: 'VAU / SEC / 02', slug: 'ai-ml-masterclass-teens', title: 'IA y machine learning', blurb: 'De Python a modelos que aprenden de datos reales.' },
        { code: 'VAU / SEC / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git y GitHub', blurb: 'Guardar versiones del código y trabajar en equipo.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases en vivo durante el verano?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Media mañana', l: 'Buena hora para los menores, antes de que apriete el calor.' },
      { time: 'Después del almuerzo', l: 'Para el hijo que vuelve de la piscina o del club.' },
      { time: 'Hora propia', l: 'Clases individuales en el día y la hora que usted fije.' }
    ],
    cells: [
      { h3: 'Mentor por hijo', p: 'Cada hijo trabaja con su propio mentor todo el curso.' },
      { h3: 'Inglés pausado', p: 'El mentor dice poco a la vez y lo muestra todo en pantalla.' },
      { h3: 'Teclado propio', p: 'Cada hijo teclea su programa y busca sus errores, con guía.' },
      { h3: 'Proyecto por etapa', p: 'Cada tramo del verano termina en algo que se puede mostrar.' },
      { h3: 'Nota a la familia', p: 'Un resumen corto de lo practicado y del paso siguiente.' },
      { h3: 'Grupo o solo', p: 'De quince a veinte de edad parecida, o uno con su mentor.' }
    ]
  },

  projectsH2: 'Hasta dónde puede llegar un primer verano',
  projectsLede: 'Lo que empieza en vacaciones puede terminar en aplicaciones de verdad. Estos son proyectos de estudiantes mayores; la página <a class="ag-inline-link" href="/student-labs">Student labs</a> reúne muchos otros, explicados en inglés.',
  reviewsLede: 'Reseñas de Google escritas por madres, padres y estudiantes, copiadas tal cual, en inglés.',

  fees: {
    h2: 'Precios para familias de Surco',
    lede: 'La mensualidad se muestra en dólares estadounidenses y se cobra a una tarjeta. Es su banco el que la convierte a soles con su propio tipo de cambio, y por eso el cargo final cambia ligeramente según el mes.',
    free: ['Una clase gratis por cada hijo', 'Un punto de partida para el verano', 'Sin tarjeta'],
    group: ['De quince a veinte estudiantes de edad parecida', 'El mismo mentor todo el verano', 'Dos clases en vivo por semana', 'Pago mensual; puede dejarlo al terminar cualquier mes'],
    one: ['Su hijo o hija y un mentor, nadie más', 'Proyectos elegidos a su medida', 'Los días y horas que usted decida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Surco: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan únicamente en inglés, siempre en vivo y en línea. Lejos de ser un obstáculo, muchas familias surcanas lo buscan: una sola hora sirve para programar y para soltar el inglés oral. El mentor ajusta su velocidad a cada niño. Lima obtuvo 555 puntos en el EF EPI 2025, nivel alto, así que en muchas casas el idioma ya está presente; lo que más se gana en clase es hablarlo.' },
      { q: '¿Las clases son presenciales en Surco?', a: 'No. Son clases en línea, en vivo por videollamada, con mentores desde la India. Sus hijos se conectan desde casa en Surco, sin trasladarse a ningún local.' },
      { q: '¿Pueden dos hermanos tomar clases a la vez?', a: 'Sí. Cada hijo tiene su propia clase gratis, su propio mentor y su propio plan. Si comparten computadora, basta con elegir horas distintas al reservar; si tienen edad parecida, pueden ir a la misma clase grupal.' },
      { q: '¿Cuánto dura el programa de verano?', a: 'No tiene una duración fija. Sus hijos empiezan nuestro curso normal cuando termina el colegio y siguen el tiempo que la familia decida; pueden continuar en marzo, bajar el ritmo o detenerse al terminar cualquier mes.' },
      { q: '¿En qué horario pueden conectarse mis hijos?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, cuando en Surco son las 9:00 a. m., en la India ya son las 7:30 p. m.' },
      { q: '¿Desde qué edad pueden empezar?', a: 'Desde los 6 años. A esa edad se trabaja con bloques de colores; hacia los 9 o 10 años casi todos están listos para teclear Python, y un adolescente de secundaria puede arrancar directamente con Python, Java o un proyecto de IA.' },
      { q: '¿Se puede combinar con DivertiSurco u otro taller municipal?', a: 'Sí. Nuestra clase dura alrededor de una hora, dos veces por semana, a la hora que usted elija, así que encaja junto a un taller deportivo o artístico. No estamos vinculados con la Municipalidad de Surco.' },
      { q: '¿Enseñan robótica?', a: 'Lo nuestro es el código, no las piezas: no trabajamos con hardware ni mandamos kits a casa. Aun así, quien aprende bucles y condiciones con nosotros entiende con mucha más facilidad al robot del taller, porque ese robot obedece justamente esas instrucciones.' },
      { q: '¿Qué necesitan mis hijos en casa?', a: 'Un equipo con teclado, sea laptop o de escritorio, que tenga cámara y micrófono, más una buena conexión; unos auriculares ayudan a oír con claridad al mentor. Si varios hijos comparten ese equipo, se reparten las horas de clase.' },
      { q: '¿Este curso le sirve como nota en el colegio?', a: 'No. Somos una escuela en línea independiente, sin relación con el MINEDU, las UGEL ni los colegios de Surco, y no ponemos calificaciones escolares. Quien completa un curso obtiene un certificado de finalización emitido por Modern Age Coders, y nada más.' },
      { q: '¿Cómo se paga?', a: 'Mes a mes, con tarjeta y en dólares estadounidenses; el cambio a soles lo aplica su banco. Para la clase de prueba no pedimos ningún dato de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Lecturas para planear el verano',
    lede: 'Páginas nuestras que ayudan a decidir, casi todas escritas en inglés.',
    items: [
      { href: '/summer-coding-camp-kids', label: 'Summer coding for kids', p: 'Nuestra guía general sobre empezar a programar en vacaciones.' },
      { href: '/summer-coding-camp-teens', label: 'Summer coding for teens', p: 'Lo que un adolescente puede construir en un verano.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Más sobre programar dentro de Roblox Studio.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Qué herramientas de IA corresponden a cada edad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una clase en vivo contada de principio a fin.' },
      { href: '/courses', label: 'All courses', p: 'Todos los programas, con su temario y edades.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis para cada hijo',
    lede: 'Durante la sesión de prueba, el mentor saluda a cada niño con frases simples, le plantea un desafío corto y mira cómo razona. A partir de eso le recomendamos, hijo por hijo, la etapa del verano por la que conviene empezar, el formato y una hora que no choque con la de sus hermanos.',
    readFirst: 'Si prefiere leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> muestra cómo es una clase y <a class="ag-inline-link" href="/courses">All courses</a> reúne cada programa (ambas páginas en inglés).',
    note: 'Recuerde: cada sesión ocurre en tiempo real por videollamada y se dicta en inglés, desde la India. Si prefiere escribirnos, WhatsApp es la vía más rápida y acepta mensajes en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de verano', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch para niños' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Juegos en Roblox' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/summer-coding-camp-kids', label: 'Verano para niños' },
        { href: '/ai-tools-age-guide', label: 'Edades de la IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Un nombre no es una copia'
  },

  personalityCss: `
.ag-root.ag-vau .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-vau .ag-capsule { border-left-width: 7px; border-radius: 0; }
.ag-root.ag-vau .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-vau .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-vau .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana, Cuadros N.° 1 and 3); Municipalidad de Santiago de Surco, DivertiSurco 2026 note (6 January 2026); MINEDU RM 501-2025 Tabla 1; INEI TIC en los Hogares II Trimestre 2026; EF EPI 2025 Peru page; tzdata and INACAL. Read 8 and 9 November 2026. The siblings plan, levels and Python lesson are our own.',
    localProject: 'Two siblings, one list: an original Python lesson for 10 to 12 year olds in a Surco family summer. Version 1 sets plan_valeria = plan_base and plan_mateo = plan_base, appends Roblox to Mateo and prints the same three projects for both, with "Same list? True"; Version 2 uses .copy() and prints Valeria with two projects and "Same list? False". Lesson family: alias versus copy, the identity of a list.',
    requiredMentions: ['Same list? True', 'Same list? False', 'tres etiquetas pegadas en una sola caja', 'DivertiSurco: Disfruta tu verano 2026', '24 155 niños de 6 a 11 años', '28 204 adolescentes de 12 a 17', 'Un nombre no es una copia', 'el 84,7 % de los hogares de Lima Metropolitana tenía internet', 'Ejemplo de verano para tres hermanos'],
    sources: [
      { claim: 'Santiago de Surco population 402,074 (total), 386,432 censada, 213,416 women and 188,658 men; Lima Metropolitana 10,141,775 (Cuadro N.° 1).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Surco censada by age group: 0 to 5 15,690; 6 to 11 24,155; 12 to 17 28,204; 60+ 86,108 (Cuadro N.° 3).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'DivertiSurco 2026: January and February, children and teenagers of the district and Lima, science and robotics, Clubes del Vecino, limited places.', url: 'https://www.munisurco.gob.pe/surco-abre-talleres-educativos-culturales-y-deportivos-para-un-verano-2026-util-y-divertido/' },
      { claim: '2026 school year blocks: 16 March to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Lima Metropolitana 84.7% of households with internet; 36.4% with a computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 High; Peru speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A summer programme length, start date or price: none defined; the page sells normal classes started in the break.',
      'Traffic or commute times in Lima: no figures; the page says only that classes at home need no travel.',
      'DivertiSurco workshop prices and the council phone numbers: published in the note but not repeated.',
      'INEI planos estratificados income strata for Surco: available in research, not used (no income profiling of families).',
      'Adding the published age groups into one total: refused; groups printed separately as INEI publishes them.',
      'Any affiliation with the Municipalidad de Surco, MINEDU or a school; Spanish-language teaching; robot kits: none, and the page says so.'
    ]
  }
};

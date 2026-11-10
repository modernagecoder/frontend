// SHIP: district | Villa El Salvador: year-round workshops at the Palacio de la Juventud, code at home | a queue with deque: first in, first out, against a stack that serves the last one
'use strict';
// Clases de programación para niños en Villa El Salvador (ag- Spanish district door, Peru cluster row PE202, P6, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Villa El Salvador (VES) searching "clases de programación para niños Villa El Salvador" at any time
// of year. Spine: the 2025 census for VES (key figures and single ages); the municipality's own note that its workshops for
// children, including computación, run "sea verano o invierno" at the Gran Palacio de la Juventud (gob.pe, June 2024); a
// Python lesson about taking turns on the one family computer (queue vs stack); starting age; why a class at home
// instead of crossing Lima Sur (no traffic figures); INEI household computer data; English; adolescentes; clock.
// No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// villa-el-salvador-lima/, fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from saved raw files; quotes
// grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx), CUADRO N°1:
//    "DISTRITO VILLA EL SALVADOR | 451546 | 224557 | 226989 | 432599 | 214695 | 217904 | 18947"; CUADRO N°3: "DISTRITO VILLA
//    EL SALVADOR | 432599 | 26677 | 40052 | 42772 | 84436 | 101864 | 79871 | 56927"; CUADRO N°2 single ages: 6 años 5756,
//    7 años 6266, 8 años 6664, 9 años 6836, 10 años 7249, 11 años 7281, 12 años 7291.
//  INEI national workbook (ind_00) CUADRO N° 1: our sort of 1,893 districts puts VES (451546) seventh in Peru (sixth inside
//    the province of Lima, as the district of Callao is fifth nationally).
//  Municipalidad Distrital de Villa El Salvador on gob.pe, noticias/978342 (25 June 2024), "Talleres deportivos y artísticos
//    todo el año en Villa El Salvador": "Sea verano o invierno el Gran Palacio de la Juventud de Villa El Salvador se
//    encuentra operativo con actividades artísticas y deportivas"; "ubicado en el Sector 3 Grupo 8 - Av. Bolívar con Av.
//    Central"; "cuenta con más de 20 talleres deportivos y artísticos para niños, adolescentes y jóvenes"; list "BALLET,
//    MARINERA, MÚSICA, CANTO, BAILE MODERNO, CAPOEIRA, KARATE, COMPUTACIÓN, TEATRO - CLOWN, DIBUJO Y PINTURA, BOX, LUCHA
//    LIBRE, CAPOEIRA, FÚTBOL, VÓLEY, BASQUET, AJEDREZ Y MÁS." Official's name left out on purpose.
//  INEI, TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 74,3% cuenta con una sola unidad"; "el 25,7%
//    dispone de dos o más computadoras"; "alcanzó el 53,3% en Lima Metropolitana"; "el 84,7% de los hogares disponía del
//    servicio"; national "niños de 6 a 11 años (68,2%)".
//  MINEDU Edades normativas (as in the pilot): edad normativa al 31 de marzo.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, high band from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 451546 / 10141775 = 4.5 % of Lima Metropolitana; 40052 / 818096 = 4.9 % of Lima's
//    censused 6 to 11; 40052 / 432599 = 9.3 %; 42772 / 432599 = 9.9 %; 18947 / 451546 = 4.2 % omitted.
// Our own example (ves_queue.py in the src-pages folder), run with python3 -I, exact output:
//    Plays first: Ana / Plays next: Luis / Still waiting: ['Rosa', 'Pedro'] / With a stack, out first: Pedro
// Neighbouring districts named in plain text only (Chorrillos, San Juan de Miraflores, Villa María del Triunfo, Lurín).
// Lesson family: a queue (collections.deque, append and popleft: first in, first out) against a stack (list.pop: last in,
// first out).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'from collections import deque',
  '',
  "turns = deque(['Ana', 'Luis', 'Rosa'])",
  "turns.append('Pedro')",
  "print('Plays first:', turns.popleft())",
  "print('Plays next:', turns.popleft())",
  "print('Still waiting:', list(turns))",
  '',
  "pile = ['Ana', 'Luis', 'Rosa', 'Pedro']",
  "print('With a stack, out first:', pile.pop())"
].join('\n');

const OUT = [
  'Plays first: Ana',
  'Plays next: Luis',
  "Still waiting: ['Rosa', 'Pedro']",
  'With a stack, out first: Pedro'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Villa El Salvador' },
  slug: 'clases-de-programacion-para-ninos-villa-el-salvador-lima',
  code: 'pnvs',
  accent: '#424E08',
  accentRationale: 'Villa El Salvador: a dark olive #424E08, the colour of the sand-and-scrub edge where the district meets the coastal desert, set apart from the bright greens of the other Lima doors; allocated in alloc.tsv (contrast 7.33 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Villa El Salvador',
  title: 'Clases de programación para niños en Villa El Salvador',
  description: 'Clases de programación para niños de 6 a 12 años en Villa El Salvador, Lima Sur: en vivo, en línea y en inglés, desde casa, grupales o individuales, a su hora.',
  ogDescription: 'Programación para niños de Villa El Salvador sin moverse de casa: el censo 2025 del distrito, sus talleres de todo el año y un reto de Python sobre turnos en la computadora.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Villa El Salvador, desde casa y a la hora que usted elija.',
  pageName: 'Clases de programación para niños en Villa El Salvador',
  webPageDescription: 'Guía para familias de Villa El Salvador que buscan clases de programación para sus hijos durante el año: cifras del distrito por edad según los Censos Nacionales 2025 del INEI, los talleres municipales del Gran Palacio de la Juventud, los datos del INEI sobre computadoras en los hogares y un ejercicio de Python sobre turnos, escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Villa El Salvador, con cursos propios para adolescentes, dictadas solo en inglés: Scratch, Python, Roblox, web y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Villa El Salvador',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#ves', label: 'El distrito' },
    { href: '#palacio', label: 'Talleres' },
    { href: '#turnos', label: 'Reto de turnos' },
    { href: '#edades', label: 'Edades' },
    { href: '#reloj', label: 'Reloj' }
  ],
  eyebrow: 'Lima Sur &middot; Villa El Salvador &middot; Primaria y secundaria',
  h1: 'Clases de programación para niños en Villa El Salvador',
  lede: 'Villa El Salvador está entre los distritos más poblados del país, y su municipio mantiene talleres para chicos durante todo el año. Si a su hijo le gusta la computadora y usted quiere que pase de usarla a crear con ella, esta guía le cuenta lo que dice el censo, cómo encaja una clase de programación junto a los talleres del distrito y cómo trabaja un mentor que enseña en inglés.',
  secondaryCta: { href: '#turnos', label: 'Ver el reto de los turnos' },
  wa: 'Hola Modern Age Coders, somos de Villa El Salvador y nos interesan las clases de programación para nuestro hijo o hija. ¿Podemos agendar la clase gratis?',
  heroNote: 'Desde 2020 enseñando en vivo &middot; más de 10,000 alumnos de distintos países &middot; un mentor estable que trabaja con su hijo en inglés',
  spec: [
    ['A quién', 'Chicos de 6 a 12 años; secundaria aparte'],
    ['Desde dónde', 'Cualquier sector de Villa El Salvador'],
    ['Contenidos', 'Scratch, Python, Roblox, web e IA'],
    ['Formato', 'Aula de quince a veinte o clase individual'],
    ['Lengua', 'Inglés sencillo, con apoyo en pantalla'],
    ['Primera sesión', 'Sin costo y sin tarjeta']
  ],
  capsuleQ: 'Respuesta rápida',
  capsule: 'Sí. Su hijo puede aprender a programar desde casa en Villa El Salvador: las clases de Modern Age Coders son en vivo, en línea y en inglés, para primaria de 6 a 12 años, con cursos aparte para la secundaria. El mentor trabaja desde la India por videollamada, sigue lo que el niño escribe en su pantalla, explica con frases sencillas y avanza a su ritmo. Arranca con Scratch y sigue con Python, Roblox, la web y la IA. Usted define si prefiere aula compartida o clase a solas, además de cuándo, y la primera sesión no se cobra.',

  picks: {
    eyebrow: 'Cursos de entrada',
    h2: '¿Por cuál curso empieza un niño de Villa El Salvador?',
    lede: 'Elegimos según la edad y según el tipo de chico: el que dibuja, el que juega o el que pregunta por qué funcionan las cosas.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNVS / 01', title: 'Primeros programas con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 9 años. Animaciones, juegos y una app sencilla, armados con bloques de colores que casi no exigen leer.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PNVS / 02', title: 'Programar dentro de Roblox', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Desde los 8 años. Para quien ya juega Roblox y quiere fabricar su propio nivel: plataformas que se mueven, monedas que se suman y puertas que se abren con código Luau.' },
      { course: 'python-ai-kids-masterclass', code: 'PNVS / 03', title: 'Python y primeros proyectos de IA', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años. Código escrito, juegos de turnos como el de esta página y pequeños proyectos que usan inteligencia artificial.' }
    ]
  },

  sections: [
    {
      id: 'ves',
      eyebrow: 'El censo 2025',
      h2: '¿Cuántos escolares hay en Villa El Salvador según el censo?',
      lede: 'Entre las 432,599 personas censadas en Villa El Salvador en 2025 hay 40,052 niños de 6 a 11 años y 42,772 adolescentes de 12 a 17. Con la población que el INEI estima omitida, el distrito llega a 451,546 habitantes.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Villa El Salvador en cinco cifras de los Censos Nacionales 2025', head: ['Qué se cuenta', 'Villa El Salvador'], rows: [
          ['Habitantes en total, incluida la población omitida', '451,546'],
          ['Personas efectivamente censadas', '432,599'],
          ['Personas que el INEI estima omitidas', '18,947'],
          ['Censados en edad de primaria (6 a 11 años)', '40,052'],
          ['Censados en edad de secundaria (12 a 17 años)', '42,772']
        ] },
        { kind: 'source', html: 'Fuente: INEI, archivo Excel de indicadores demográficos por distrito de Lima Metropolitana, Censos Nacionales 2025, cuadros 1 y 3; trae límites territoriales actualizados al 15 de julio de 2026 y copia guardada por nosotros en noviembre de 2026. Las filas por edad solo abarcan a quienes sí fueron censados.' },
        { kind: 'two', mt: true,
          leftH3: 'Séptimo en el país',
          left: [
            'Si se ordenan los 1,893 distritos del cuadro nacional del INEI por habitantes, Villa El Salvador aparece séptimo; dentro de la provincia de Lima, sexto, porque uno de los que lo superan es el distrito del Callao (orden nuestro).',
            'Hechas las divisiones, a Villa El Salvador le corresponde un 4,5 % de los habitantes de la capital y un 4,9 % de los chicos censados en edad de primaria (cálculo nuestro).'
          ],
          rightH3: 'Una foto de edades',
          right: [
            'En Villa El Salvador, de cada cien personas censadas, algo más de nueve tienen entre 6 y 11 años y casi diez entre 12 y 17 (9,3 % y 9,9 %, cálculo nuestro).',
            'Esas proporciones no hablan de ingresos ni de cómo vive una familia, y no las leemos así. Nos sirven para algo más simple: saber que en el distrito hay decenas de miles de chicos con tardes por llenar.'
          ] }
      ]
    },
    {
      id: 'palacio',
      eyebrow: 'Talleres del distrito',
      h2: '¿Qué talleres para niños ofrece Villa El Salvador durante todo el año?',
      lede: 'Según su municipalidad, "sea verano o invierno" el Gran Palacio de la Juventud funciona con más de 20 talleres deportivos y artísticos para niños, adolescentes y jóvenes, y uno de ellos es computación.',
      body: [
        { kind: 'p', html: 'La nota que la Municipalidad de Villa El Salvador publicó en gob.pe el 25 de junio de 2024 sitúa el Gran Palacio de la Juventud en el Sector 3, Grupo 8, en la avenida Bolívar con la avenida Central, y enumera talleres de ballet, marinera, música, canto, baile moderno, capoeira, karate, computación, teatro y clown, dibujo y pintura, box, lucha libre, fútbol, vóley, básquet y ajedrez, entre otros. La idea que repite es que no son solo de vacaciones: funcionan a lo largo del año.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Movimiento y grupo', p: 'El fútbol, la marinera o el karate se aprenden con el cuerpo y en compañía. Ninguna pantalla los reemplaza, y no pretendemos hacerlo.' },
          { h3: 'Computación y programación', p: 'Un taller de computación suele enseñar a usar programas. Programar es otra cosa: escribir las instrucciones que hacen funcionar un juego o una app. Una cosa prepara para la otra.' },
          { h3: 'Sin relación con el municipio', p: 'Modern Age Coders no forma parte del Gran Palacio de la Juventud ni de la municipalidad. Si la mencionamos es porque la nota es pública y les sirve a los vecinos.' }
        ] },
        { kind: 'p', mt: true, html: 'Muchas familias combinan las dos cosas sin problema: el niño va a su taller presencial y, en otro momento de la semana, programa en casa con su mentor. Como nuestras clases se fijan a la hora que usted escoja, se acomodan alrededor del horario del taller y no al revés.' }
      ]
    },
    {
      id: 'turnos',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se reparten los turnos de una sola computadora? Un reto de Python',
      lede: 'Con una cola. En muchos hogares hay una sola computadora y varios hermanos que quieren usarla. El ejercicio es nuestro: el programa guarda los turnos en orden de llegada, atiende siempre al primero de la fila y después compara con una pila, donde sale el último que llegó.',
      body: [
        { kind: 'code', label: 'Turnos para la computadora', lang: 'Python', code: PY, note: 'Antes de correrlo, el mentor pregunta: "Pedro arrived last. Will he play first or last?" Con la cola la respuesta es una; con la pila, otra.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Esto devolvió Python 3 cuando ejecutamos el archivo en nuestra computadora; no editamos nada. Los nombres son inventados.' },
        { kind: 'ol', mt: true, items: [
          '<strong>La fila.</strong> <code>deque</code> es una estructura de Python pensada para filas. <code>append</code> agrega al final, como quien llega y se forma; <code>popleft</code> saca al que está adelante.',
          '<strong>Primero en llegar, primero en jugar.</strong> Ana llegó primero y juega primero; luego Luis. Rosa y Pedro siguen esperando en el mismo orden en que llegaron. Así funcionan la cola del banco y la impresora de la oficina.',
          '<strong>La pila, al revés.</strong> En una lista común, <code>pop()</code> saca el último elemento. Si los turnos se guardaran así, Pedro, que llegó al final, jugaría primero. Es lo que pasa con una pila de platos: se toma el de arriba.',
          '<strong>La regla, en voz alta.</strong> Toca formularla en inglés, en una sola oración: "A queue serves the first one in; a stack serves the last one in." El niño la arma con sus palabras y la repite señalando la pantalla.',
          '<strong>Su propia fila.</strong> El reto para la semana: agregar a un primo que llega tarde, decidir si debe ir a la cola o a la pila para que sea justo, y explicar por qué.'
        ] },
        { kind: 'p', mt: true, html: 'La lección de fondo no es la palabra <code>deque</code>. Es que la forma de guardar los datos decide el resultado: los mismos cuatro nombres dan un orden justo o injusto según la estructura. Pensar así, antes de escribir, es lo que separa a quien entiende un programa de quien copia uno de internet o lo pide a una herramienta de IA.' }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Por edad',
      h2: '¿Desde qué edad puede empezar un niño de Villa El Salvador?',
      lede: 'Desde 1° de primaria, a los 6 años. El censo cuenta en el distrito varios miles de niños en cada edad de primaria, y para cada edad hay una manera adecuada de empezar.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Villa El Salvador: chicos censados por edad cumplida y el primer proyecto que suele funcionar', head: ['Edad', 'Censados en Villa El Salvador', 'Grado de referencia', 'Primer proyecto típico (nuestro)'], rows: [
          ['6 años', '5,756', '1° de primaria', 'Un personaje que camina y saluda'],
          ['7 años', '6,266', '2° de primaria', 'Una tarjeta animada para la familia'],
          ['8 años', '6,664', '3° de primaria', 'Un juego de esquivar con vidas'],
          ['9 años', '6,836', '4° de primaria', 'Un programa que pregunta y responde'],
          ['10 años', '7,249', '5° de primaria', 'Una lista de tareas que se ordena'],
          ['11 años', '7,281', '6° de primaria', 'Una fila de turnos con deque'],
          ['12 años', '7,291', '1° de secundaria', 'Un juego propio en Python o Roblox']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, cuadro de población censada por edades simples (cuadro 2) para Lima Metropolitana, Censos Nacionales 2025; MINEDU, "Edades normativas", donde la edad de cada grado se cuenta al 31 de marzo. Como el censo registra la edad de la fecha de la visita, el grado es solo de referencia. Los proyectos son nuestra propuesta.' },
        { kind: 'two', mt: true,
          leftH3: 'A los 6, jugando',
          left: [
            'A los 6 años un niño todavía está aprendiendo a leer, por eso la clase se apoya en imágenes, flechas y sonidos. Nuestra página sobre <a class="ag-inline-link" href="/programacion-para-ninos-de-6-anos">programación para niños de 6 años</a> explica cómo se trabaja a esa edad.',
            'Conviene que un adulto esté cerca las primeras veces, solo para acompañar.'
          ],
          rightH3: 'A los 10 u 11, escribiendo',
          right: [
            'En 5° y 6° de primaria la mayoría ya escribe Python con comodidad. Es la edad de las primeras estructuras de datos, listas, diccionarios, colas, y de los primeros errores que el niño aprende a leer solo.',
            'También es cuando más se nota el inglés: los mensajes de error están en ese idioma y se vuelven parte del vocabulario.'
          ] }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde la casa',
      h2: '¿Por qué estudiar programación desde casa viviendo en Villa El Salvador?',
      lede: 'Para que todo el tiempo de la clase sea tiempo de aprender. Sin trayecto de ida y vuelta, la sesión empieza a la hora exacta y termina con el niño ya en casa.',
      body: [
        { kind: 'p', html: 'Villa El Salvador limita con Chorrillos, San Juan de Miraflores, Villa María del Triunfo y Lurín. Una academia en otro distrito de Lima implica organizar quién lleva y quién recoge al niño, dos veces por semana, durante meses. No damos tiempos de viaje porque no tenemos de dónde sacarlos con seriedad. Sí sabemos que con una clase en línea esa logística desaparece.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Computadoras e internet en los hogares: lo que midió el INEI entre abril y junio de 2026', head: ['Dato', 'Porcentaje', 'Alcance'], rows: [
          ['Hogares con computadora que tienen una sola', '74,3 %', 'Nacional'],
          ['Hogares con computadora que tienen dos o más', '25,7 %', 'Nacional'],
          ['Hogares limeños con por lo menos un equipo', '53,3 %', 'Lima Metropolitana'],
          ['Hogares con internet', '84,7 %', 'Lima Metropolitana'],
          ['Niños de 6 a 11 años que usaron internet', '68,2 %', 'Nacional']
        ] },
        { kind: 'source', html: 'Fuente: INEI, informe técnico trimestral sobre el acceso de los hogares a internet, computadoras y teléfonos, abril a junio de 2026, con resultados preliminares de la ENAHO; revisión propia de noviembre de 2026. El INEI agrupa al Callao con Lima Metropolitana y no publica estos datos distrito por distrito.' },
        { kind: 'two', mt: true,
          leftH3: 'Una máquina, varios hermanos',
          left: [
            'Según el INEI, tres de cada cuatro hogares con computadora en el país tienen solo una. Por eso el reto de esta página no es un invento: en muchas casas la computadora se reparte por turnos.',
            'Nuestras clases se agendan a la hora en que la máquina está libre, y cada hermano puede tener su propio horario.'
          ],
          rightH3: 'Lo mínimo para la clase',
          right: [
            'Una laptop o PC, aunque no sea nueva, con cámara, micrófono y teclado; unos audífonos; e internet que aguante una videollamada. Los programas que usamos son gratuitos.',
            'Una tablet sirve solo al inicio con los más pequeños; un celular no alcanza para escribir código.'
          ] },
        { kind: 'p', mt: true, html: '¿Su casa queda del lado de Chorrillos? Allí planteamos el verano en una <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-chorrillos-lima">guía de vacaciones útiles para Chorrillos</a>, con las mismas clases que se describen aquí.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Idioma',
      h2: '¿Cómo se apoya a un niño que entiende poco inglés?',
      lede: 'Con paciencia y con la pantalla. El mentor escribe lo que dice, señala lo que nombra y repite con otras palabras, y en pocas semanas el niño empieza a seguir la clase sin traducir en su cabeza.',
      body: [
        { kind: 'p', html: 'Nadie le exige a su hijo hablar bien desde el primer día. Al principio responde con un <em>yes</em> o con un gesto, y está bien. Lo que ayuda es que en programación cada palabra hace algo visible: si escribe <code>append</code>, alguien se suma a la fila; si escribe <code>pop</code>, alguien sale. El significado se ve, y por eso se recuerda.' },
        { kind: 'p', html: 'Para darle contexto: el EF EPI 2025, índice anual de EF Education First, le asigna a Lima 555 puntos, en la franja que EF llama alta, mientras el Perú en promedio queda en moderada. La muestra son adultos que hacen el test de EF por su cuenta, no escolares. Aun así, el dato indica que en la ciudad el inglés hablado ya tiene uso diario en muchos trabajos, y que empezar de niño ayuda.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Secundaria',
      h2: '¿Qué pueden aprender los adolescentes de Villa El Salvador?',
      lede: 'Programación con todas las letras. A los 42,772 chicos y chicas de 12 a 17 años que el censo halló en el distrito no les hace falta pasar por bloques: empiezan escribiendo código.',
      body: [
        { kind: 'p', html: 'Un adolescente puede ir directo a Python, aprender a construir sitios con HTML, CSS y JavaScript, empezar con Java o C++, o trabajar con datos y modelos sencillos de inteligencia artificial. Suelen avanzar más rápido cuando tienen un proyecto propio: un juego para sus amigos, una página para su equipo o una herramienta para el colegio. Los caminos que proponemos para esa edad están reunidos en <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">otra guía, dedicada a la secundaria</a>.' },
        { kind: 'p', html: 'Sobre la IA: ciertos servicios fijan una edad mínima en sus condiciones, y algunos piden autorización de un adulto responsable. Respetamos esas reglas en cada clase con menores, y usamos la IA para discutir ideas y revisar código, no para producir tareas que el alumno no pueda defender.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario',
      h2: '¿Cómo se calcula la hora de la clase con un mentor en la India?',
      lede: 'Sumando diez horas y media a la hora de Perú. Esa diferencia no cambia en ninguna época del año, porque ni el Perú ni la India usan horario de verano.',
      body: [
        { kind: 'p', html: 'Perú funciona con UTC-5 y no cambia el reloj desde 1994; la India, con UTC+5:30. Dos ejemplos de cálculo: si su hijo se conecta a las 11:00 de la mañana en Villa El Salvador, para el mentor son las 9:30 de la noche; si se conecta a las 7:30 de la noche, en la India ya son las 6:00 de la mañana del día siguiente. Ninguna de esas horas está fija: usted elige.' },
        { kind: 'p', html: 'El formulario de la clase gratis muestra los horarios disponibles en hora de Perú, de modo que no necesita hacer la cuenta. Muchas familias escogen la clase según el turno del colegio y los horarios del taller del distrito, si el niño asiste a alguno.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Qué indica que su hijo de verdad está aprendiendo?',
    lede: 'Cuatro señales nuestras, que el mentor le comenta a la familia a medida que aparecen.',
    table: { caption: 'Cuatro señales de aprendizaje real (nuestras)', head: ['Señal', 'Lo que hace el niño', 'Lo que usted puede ver'], rows: [
      ['1. Anticipa', 'Dice qué va a pasar antes de ejecutar', 'Le explica su programa sin abrirlo'],
      ['2. Elige cómo guardar', 'Decide entre lista, cola o diccionario, como en el reto de turnos', 'Le cuenta por qué eligió esa forma'],
      ['3. Arregla solo', 'Lee el error y prueba un cambio a la vez', 'Le muestra un fallo que resolvió'],
      ['4. Termina y presenta', 'Cierra un proyecto y lo cuenta en inglés', 'Usted ve la demostración en casa']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Preguntar "¿qué hiciste hoy?" dice más que mirar cuántas horas pasó conectado.',
      'Las primeras semanas cuestan: acento nuevo, herramientas nuevas, errores. Es normal.'
    ] },
    right: { h3: 'Para el alumno', ps: [
      'Antes de escribir, piense cómo va a guardar los datos.',
      'Si algo falla, cambie una sola cosa y vuelva a probar.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: '¿Qué otros cursos pueden tomar los chicos del distrito?',
    lede: 'Otros nueve, con el mismo formato: mentor en vivo, clase en inglés, en aula o individual.',
    bands: [
      { num: 'I', h3: 'Los más pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'PNVS / PEQ / 01', slug: 'scratch-programming-complete-course', title: 'Scratch paso a paso', blurb: 'Del gato que camina al juego con niveles.' },
        { code: 'PNVS / PEQ / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonar con orden', blurb: 'Secuencias, patrones y acertijos antes del código.' },
        { code: 'PNVS / PEQ / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco', blurb: 'Cálculo con cuentas y luego de memoria.' }
      ] },
      { num: 'II', h3: 'Hacer y entender', sub: 'De 8 a 12 años', courses: [
        { code: 'PNVS / HACER / 01', slug: 'game-development-masterclass-for-kids', title: 'Taller de videojuegos', blurb: 'Tres plataformas de juego, un mismo hilo de diseño.' },
        { code: 'PNVS / HACER / 02', slug: 'kids-ai-web-development-course', title: 'Mi página en internet', blurb: 'HTML y CSS para publicar algo propio.' },
        { code: 'PNVS / HACER / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para primaria', blurb: 'Un lenguaje serio enseñado con juegos.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PNVS / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python completo', blurb: 'De variables a proyectos con archivos.' },
        { code: 'PNVS / SEC / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript', blurb: 'Páginas que responden y juegos en el navegador.' },
        { code: 'PNVS / SEC / 03', slug: 'ai-ml-masterclass-teens', title: 'IA y aprendizaje automático', blurb: 'Entrenar modelos sencillos y medir cuándo fallan.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo encajan las clases con la semana de una familia de Villa El Salvador?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del taller', l: 'Si su hijo va al Palacio de la Juventud por la tarde.' },
      { time: 'Después del colegio', l: 'Con la tarea hecha y la computadora libre.' },
      { time: 'Domingo', l: 'Cuando entre semana no hay espacio.' }
    ],
    cells: [
      { h3: 'Mentor de cabecera', p: 'Conoce a su hijo y lo sigue durante todo el curso.' },
      { h3: 'Teclea el alumno', p: 'El mentor guía con preguntas; no escribe por él.' },
      { h3: 'Un reto corto', p: 'Práctica entre clases que se piensa, no se copia.' },
      { h3: 'Resumen por mensaje', p: 'Qué se trabajó y qué viene, en pocas líneas.' },
      { h3: 'Pago mensual', p: 'Sin contrato largo; se pausa cuando la familia decida.' },
      { h3: 'Dos formatos', p: 'Un aula de quince a veinte chicos parecidos o una clase privada.' }
    ]
  },

  projectsH2: 'Hasta dónde llegan los alumnos constantes',
  projectsLede: 'Estos trabajos son de estudiantes con más recorrido; muestran lo que viene después de los primeros meses. Más proyectos en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas reales de Google escritas por familias y alumnos, que dejamos en inglés tal como se publicaron.',

  fees: {
    h2: '¿Cuánto se paga al mes desde Villa El Salvador?',
    lede: 'Aquí abajo aparece la mensualidad de cada plan en dólares estadounidenses. Se carga a una tarjeta y la entidad que la emitió lo pasa a soles al tipo vigente, así que el monto exacto puede diferir ligeramente.',
    free: ['Una sesión gratuita completa', 'Consejo sobre el curso de inicio', 'Sin datos de pago'],
    group: ['Quince a veinte niños de edad parecida', 'El mismo mentor de inicio a fin', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'El ritmo que él necesita', 'Días y horas que usted define']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Villa El Salvador: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se dictan solo en inglés, en vivo y por videollamada, y para muchas familias de Villa El Salvador ese es el atractivo: en la misma hora su hijo programa y practica un idioma muy valorado en Lima, que según el EF EPI 2025 tiene un nivel alto de inglés, 555 puntos. El mentor ajusta su velocidad y su pronunciación al niño.' },
      { q: '¿Las clases son en algún local del distrito?', a: 'No. No tenemos locales en ningún lugar del Perú. El niño se conecta desde su casa y el mentor desde la India; nadie tiene que trasladarse.' },
      { q: '¿Cuántos niños y adolescentes hay en Villa El Salvador?', a: 'De acuerdo con los Censos Nacionales 2025, el distrito tiene 451,546 habitantes; entre quienes fueron censados figuran 40,052 niños de 6 a 11 años y 42,772 chicos de 12 a 17.' },
      { q: '¿Mi hijo de 6 años ya puede empezar?', a: 'Sí: es la edad de 1° de primaria según el MINEDU, y a esa edad se trabaja con bloques e imágenes. El cambio a Python llega normalmente en 4° o 5° grado.' },
      { q: '¿Y si mi hijo casi no entiende inglés?', a: 'Puede empezar igual. El mentor escribe en pantalla lo importante, habla con frases cortas y repite cuanto haga falta. En unas semanas el niño se acostumbra al ritmo.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre Perú y la India hay diez horas y media: las 11:00 a. m. en Villa El Salvador son las 9:30 p. m. para el mentor.' },
      { q: '¿Se puede combinar con un taller del Palacio de la Juventud?', a: 'Sí. Como usted elige el horario, la clase se pone en otro momento de la semana. Muchos niños hacen deporte o arte en persona y programan en casa.' },
      { q: '¿Tienen convenio con la Municipalidad de Villa El Salvador?', a: 'No. No tenemos convenio ni relación con la municipalidad, el Gran Palacio de la Juventud ni ningún colegio. Citamos la nota municipal de gob.pe solo para orientar a las familias.' },
      { q: '¿Cómo se paga?', a: 'Mensualmente, con tarjeta y en dólares estadounidenses, con la conversión a cargo de su banco. Para la clase de prueba no se piden datos de pago.' },
      { q: '¿Recibe certificado?', a: 'Sí: cada curso completado viene con una constancia propia de la academia. No la emite el MINEDU ni sirve como calificación escolar, porque no pertenecemos al sistema educativo peruano.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Lecturas',
    h2: 'Para seguir informándose',
    lede: 'Los enlaces con nombre en inglés llevan a textos en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El mapa completo de nuestras clases en el Perú.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Grado por grado, qué conviene aprender en primaria.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Edad mínima de las herramientas de IA conocidas.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método de clase en vivo.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, por edad y tema.' }
    ]
  },

  start: {
    h2: 'Agende una clase de prueba desde Villa El Salvador',
    lede: 'Marque fecha y horario según la hora peruana. En esa clase el mentor saluda a su hijo, le propone un desafío corto según su edad y, al final, le explica a usted por dónde le conviene empezar.',
    readFirst: 'Para leer antes de decidir: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cuenta cómo enseñamos y <a class="ag-inline-link" href="/courses">All courses</a> lista los cursos (ambas en inglés).',
    note: 'Cada clase es en vivo, por internet y en inglés, con un mentor que enseña desde la India. Si prefiere, escríbanos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de entrada', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Información', links: [
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/ai-tools-age-guide', label: 'IA por edades' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'Primero en llegar, primero en jugar'
  },

  personalityCss: `
.ag-root.ag-pnvs .ag-hero h1 { max-width: 20ch; letter-spacing: -0.014em; }
.ag-root.ag-pnvs .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-pnvs .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pnvs .ag-table td:last-child { font-style: italic; }
.ag-root.ag-pnvs .ag-steps li { padding-left: 0.2rem; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de Villa El Salvador note of 25 June 2024 on gob.pe, EF EPI 2025, tzdata. Read 10 November 2026. Example code, first projects and signals are our own.',
    localProject: 'Turns on the one family computer as a queue in Python: collections.deque with append and popleft prints Plays first: Ana, Plays next: Luis, Still waiting: Rosa and Pedro, then a list used as a stack prints With a stack, out first: Pedro. Run with python3 -I. Lesson family: a queue (first in, first out) against a stack (last in, first out).',
    requiredMentions: ['Plays first: Ana', 'With a stack, out first: Pedro', 'A queue serves the first one in; a stack serves the last one in', 'Gran Palacio de la Juventud', '40,052 niños de 6 a 11 años', '42,772 adolescentes de 12 a 17', 'Censados en Villa El Salvador', 'Primero en llegar, primero en jugar', 'Séptimo en el país'],
    sources: [
      { claim: 'VES population 451,546 (censada 432,599, omitida 18,947); ages 6 to 11 and 12 to 17; single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Gran Palacio de la Juventud open summer or winter, Sector 3 Grupo 8, more than 20 workshops including computación (25 June 2024).', url: 'https://www.gob.pe/institucion/munivillaelsalvador/noticias/978342-talleres-deportivos-y-artisticos-todo-el-ano-en-villa-el-salvador' },
      { claim: 'One computer only in 74.3% of households with a computer, two or more in 25.7% (Peru); computer 53.3% and internet 84.7% (Lima); internet use 68.2% at ages 6 to 11 (Peru), II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band; Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any agreement with the Municipalidad de Villa El Salvador or the Gran Palacio de la Juventud: none; the page says so.',
      'Equating the municipal computación workshop with our classes: refused; the page explains the difference without judging it.',
      'Travel times across Lima Sur: refused; no primary source.',
      'Income or class statements about the district or its sectors: refused; only census ages and counts.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

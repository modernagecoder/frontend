// SHIP: district kids door (ES) | Ancón, extremo norte de Lima: distancia, equipo en casa, inglés | range() with a negative step: a countdown, where it stops, and an empty range
'use strict';
// Clases de programación para niños en Ancón (ag- Spanish-language district door, Peru cluster row PE226, hubGroup lima;
// alloc: pae, #04693D). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Ancón parent at the northern edge of Lima Metropolitana, far from where most academies are, who types
// "clases de programación para niños ancón". Spine: distance and why a class at home helps; what the household census says
// about computers and internet in Ancón, said honestly (a computer is needed; a phone is not enough); how many children of
// each age the census counted; what the municipality and UGEL 04 have done (their own notes); an original countdown lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-ancon-lima/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana (tabulados/27/poblacion):
//    Cuadro N° 1 "DISTRITO ANCÓN 78256" total, censada 74099, omitida 4157. Rank 31 of 43 (our ordering).
//    Cuadro N° 3 "DISTRITO ANCÓN 74099 5326 7573 7579 13343 19206 12547 8525"; URBANA 74088, RURAL 11.
//    Cuadro N° 2 single ages: 6 años 992, 7 años 1174, 8 años 1281, 9 años 1395, 10 años 1335, 11 años 1396, 12 años 1325.
//    Neighbours, Cuadro N° 1: SANTA ROSA 37680, PUENTE PIEDRA 398960, CARABAYLLO 430806.
//  INEI, Censos Nacionales 2025, Equipamiento_del_hogar.xlsx (tabulados/27/hogar), DISTRITO ANCÓN, Hogares 22388:
//    Computadora 2976, Laptop 4775, Tableta 1454; Teléfono celular 22166, internet fijo 8537, internet móvil 15191.
//    Lima Metropolitana: computadora 28.6 %, laptop 41.5 %, internet fijo 58.3 %, móvil 76.5 % (our percentages).
//  Municipalidad de Ancón, gob.pe note 16 August 2021 (n-562113): "UGEL 04 y Municipalidad de Ancón inauguran punto de
//    encuentro para recuperación de clases virtuales"; "Casa de la Juventud del Km. 39"; "se encuentran desconectados de las
//    clases virtuales"; "Esta estrategia correspondiente a la UGEL 04". Director's name left out.
//  Municipalidad de Ancón, gob.pe note 16 January 2019 (n-80866): "#VacacionesÚtiles2019 el taller de inglés, que se dicta
//    en la Biblioteca Municipal".
//  Municipalidad de Ancón, gob.pe note 29 October 2019 (n-81063): "SESIÓN SOLEMNE POR EL 145 ANIVERSARIO DE ANCÓN"; "acta de
//    creación política de nuestro distrito".
//  National: MINEDU Edades normativas; CNEB; EF EPI 2025 Lima city 555 (high band); tzdata America/Lima -5:00, Asia/Kolkata
//    +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 7573 / 74099 = 10.2 % and 7579 / 74099 = 10.2 %;
//    laptop 4775 / 22388 = 21.3 %, computadora 13.3 %, tableta 6.5 %, internet fijo 38.1 %, móvil 67.9 %, celular 99.0 %.
// Our own example, run with python3 -I (ancon.py in the src-pages folder), exact output:
//    10 9 8 7 6 5 4 3 2 1 All aboard! / 10 8 6 4 2 <- by twos, no zero / 10 8 6 4 2 0 <- now zero is in /
//    [] <- wrong direction: empty
// Lesson family: range() with a negative step; the stop value is never reached; a step in the wrong direction gives an
//    empty range.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'for n in range(10, 0, -1):',
  "    print(n, end=' ')",
  "print('All aboard!')",
  '',
  'for n in range(10, 0, -2):',
  "    print(n, end=' ')",
  "print('<- by twos, no zero')",
  '',
  'for n in range(10, -1, -2):',
  "    print(n, end=' ')",
  "print('<- now zero is in')",
  '',
  "print(list(range(0, 10, -1)), '<- wrong direction: empty')"
].join('\n');

const OUT = [
  '10 9 8 7 6 5 4 3 2 1 All aboard!',
  '10 8 6 4 2 <- by twos, no zero',
  '10 8 6 4 2 0 <- now zero is in',
  '[] <- wrong direction: empty'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Ancón' },
  slug: 'clases-de-programacion-para-ninos-ancon-lima',
  code: 'pae',
  accent: '#04693D',
  accentRationale: 'Clases de programación para niños en Ancón: a deep sea-green #04693D for the bay at the northern edge of Lima, distinct from the moss of Breña and the olive of Los Olivos; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Ancón',
  title: 'Clases de programación para niños en Ancón, en inglés',
  description: 'Programación para niños de Ancón, al norte de Lima: clases en vivo y en inglés por videollamada, sin viajar al centro, en grupo o individuales y a la hora elegida.',
  ogDescription: 'Ancón queda lejos de casi todo; la clase de programación, no. Qué equipo hace falta, cuántos niños registró el censo y una cuenta regresiva escrita en Python.',
  twitterDescription: 'Clases de programación para niños de Ancón, en vivo y en inglés, desde casa y sin viajes.',
  pageName: 'Clases de programación para niños en Ancón',
  webPageDescription: 'Guía para familias de Ancón, en el extremo norte de Lima Metropolitana, que buscan clases de programación para niños de 6 a 12 años durante todo el año: por qué una clase en casa evita viajes largos, qué equipo y conexión registran los hogares del distrito en los Censos Nacionales 2025, cuántos niños hay por edad, lo que hicieron la municipalidad y la UGEL 04, y una lección de Python escrita por nosotros.',
  courseDescription: 'Clases en vivo por videollamada de programación para niños de 6 a 12 años de Ancón, dictadas solo en inglés: bloques, lógica, Python y juegos, en clase grupal o individual, durante todo el año y a la hora que la familia elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Ancón',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distancia', label: 'Sin viajar' },
    { href: '#en-casa', label: 'En casa' },
    { href: '#ninos', label: 'Niños' },
    { href: '#cuenta-regresiva', label: 'Ejemplo' },
    { href: '#reloj', label: 'Reloj' }
  ],
  eyebrow: 'Lima Norte &middot; Ancón &middot; Niños de 6 a 12',
  h1: 'Clases de programación para niños en Ancón, en inglés',
  lede: 'Ancón está en el borde norte de Lima Metropolitana, entre el mar y los cerros, y para muchas familias una actividad en otro distrito significa un viaje largo. Aquí explicamos cómo funciona una clase de programación que llega a la casa por internet, qué necesita su hijo para tomarla, qué dice el censo de 2025 sobre los niños y los hogares de Ancón, y un ejercicio completo de Python.',
  secondaryCta: { href: '#en-casa', label: '¿Qué equipo hace falta?' },
  wa: 'Hola Modern Age Coders, somos de Ancón y nos interesan clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; la clase llega a Ancón sin pasar por la Panamericana',
  spec: [
    ['Edades', 'Niños de 6 a 12 años, y adolescentes'],
    ['Dónde', 'En su casa, en Ancón, por videollamada'],
    ['Idioma', 'Inglés claro, adaptado al ritmo del niño'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Equipo', 'Laptop o computadora con teclado y cámara'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'En dos líneas',
  capsule: 'Sí: un niño de Ancón puede aprender a programar sin viajar. Modern Age Coders ofrece clases en vivo y en inglés por videollamada para chicos de 6 a 12 años, durante todo el año. Su hijo se sienta frente a una laptop o computadora en casa y un mentor desde la India le enseña bloques, lógica, Python y juegos, a su paso. Puede ser en un grupo o en sesiones individuales, a la hora que su familia decida, y la primera sesión no cuesta nada.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Tres cursos para un niño de Ancón que empieza de cero',
    lede: 'Elegidos para que el primer mes sea con bloques y lógica, y para que el juego llegue pronto.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PAE / 01', title: 'Programar con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para chicos de primaria que nunca programaron. Bloques de colores que se encajan como piezas, con nombres en inglés que el niño aprende a decir en voz alta.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PAE / 02', title: 'Pensar como programador', alt: 'Imagen del curso de resolución de problemas y pensamiento computacional para niños', note: 'Secuencias, patrones, cuentas regresivas y decisiones, entrenados con retos en pantalla. La base que después sostiene cualquier lenguaje.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PAE / 03', title: 'Crear en Roblox Studio', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Desde los 8 años. En lugar de solo jugar, su hijo programa un recorrido con obstáculos, un marcador y un reloj que cuenta hacia atrás.' }
    ]
  },

  sections: [
    {
      id: 'distancia',
      eyebrow: 'Sin viajar',
      h2: '¿Dónde puede aprender a programar un niño de Ancón?',
      lede: 'En su propia casa. Nuestras sesiones son por videollamada y en directo, así que la distancia entre Ancón y el resto de Lima deja de importar. El mentor enseña desde la India y todo ocurre en inglés.',
      body: [
        { kind: 'p', html: 'Ancón es el distrito más al norte de Lima Metropolitana sobre la costa. Limita con Santa Rosa al sur, con Puente Piedra y Carabayllo hacia el este, y por el norte con la provincia de Huaral. Los Censos Nacionales 2025 del INEI le cuentan 78,256 habitantes, el puesto 31 entre los 43 distritos de la capital (puesto calculado por nosotros con el Cuadro N.° 1 del INEI). Casi toda su población es urbana: el censo registra apenas 11 personas en el área rural.' },
        { kind: 'p', html: 'Para una familia de Ancón, una academia en otro distrito no es una salida corta. Hay que contar el viaje de ida, la espera y la vuelta, varias veces por semana, y alguien tiene que acompañar a los más chicos. No damos cifras de tráfico porque no las medimos, pero cualquier padre del distrito sabe lo que cuesta cruzar hacia el centro en la tarde.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'La clase viaja, el niño no', p: 'Su hijo abre el enlace de la sesión desde la mesa de siempre. Si el colegio terminó tarde o el día fue largo, no hay que salir otra vez de casa.' },
          { h3: 'El mismo nivel que en cualquier sitio', p: 'Un chico de Ancón recibe exactamente el mismo mentor, el mismo programa y la misma atención que uno de cualquier otro lugar. La dirección de su casa no cambia nada.' },
          { h3: 'Inglés en cada sesión', p: 'Las órdenes de Python son palabras inglesas y la conversación con el mentor también. Para muchos niños es la primera vez que usan el inglés para hacer algo, no solo para repetirlo.' }
        ] },
        { kind: 'p', mt: true, html: 'Si viven más hacia el centro de Lima Norte, también tenemos una página pensada para el verano en <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">vacaciones útiles de programación en Los Olivos</a>. Para comparar con calma el formato virtual con otros, la guía <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online en Perú</a> responde las dudas más comunes.' }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Equipo y conexión',
      h2: '¿Qué necesita un niño de Ancón para una clase virtual?',
      lede: 'Una laptop o una computadora con teclado, cámara y micrófono, y una conexión que aguante una hora de video. El censo de 2025 muestra que en Ancón la conexión móvil es más común que la fija y que la laptop está en uno de cada cinco hogares, así que conviene revisar ambas cosas antes de empezar.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Equipos y conexión en los hogares de Ancón comparados con Lima Metropolitana, Censos Nacionales 2025 (porcentajes nuestros)', head: ['El hogar cuenta con', 'Ancón (22,388 hogares)', 'Lima Metropolitana'], rows: [
          ['Teléfono celular', '22,166 (99.0 %)', '99.4 %'],
          ['Conexión a internet móvil', '15,191 (67.9 %)', '76.5 %'],
          ['Conexión a internet fijo', '8,537 (38.1 %)', '58.3 %'],
          ['Laptop', '4,775 (21.3 %)', '41.5 %'],
          ['Computadora de escritorio', '2,976 (13.3 %)', '28.6 %'],
          ['Tableta', '1,454 (6.5 %)', '19.3 %']
        ] },
        { kind: 'source', html: 'Datos del INEI: archivo "Equipamiento del hogar" de los Censos Nacionales 2025 para Lima Metropolitana, Cuadros N.° 1 y N.° 2, renglón "Hogares" del distrito de Ancón (cuenta los hogares de viviendas particulares con ocupantes presentes). Como un mismo hogar aparece en varias filas, las cifras no deben sumarse. Porcentajes: cálculo propio.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo honesto sobre el equipo',
          left: [
            'Para programar de verdad hace falta un teclado y una pantalla de computadora. El celular, que está en casi todos los hogares del distrito, sirve para hablar con nosotros por WhatsApp, pero no para escribir código durante una hora.',
            'Si en casa hay una sola laptop y la usan varios, alcanza: la sesión dura una hora y se puede acordar quién la usa en ese rato. Si no hay ninguna computadora, preferimos decírselo claro antes de que pague nada: la clase no va a funcionar bien desde un teléfono.'
          ],
          rightH3: 'Lo práctico sobre la conexión',
          right: [
            'Muchas casas de Ancón se conectan con datos móviles. Funciona si la señal es estable: pruebe antes una videollamada de media hora en el mismo lugar donde su hijo se va a sentar.',
            'Cerca de una ventana la señal suele llegar con más fuerza. Unos audífonos con micrófono ayudan a que su hijo entienda bien el inglés del mentor aunque en casa haya ruido.'
          ] },
        { kind: 'p', mt: true, html: 'En la sesión de prueba revisamos juntos que todo funcione: la cámara, el audio, el navegador y, si hace falta, la instalación de Python. Si algo falla, lo resolvemos ahí o le decimos con franqueza que hace falta otro equipo. Mostramos estas cifras del censo solo para responder esa pregunta práctica, no para opinar sobre las familias del distrito.' }
      ]
    },
    {
      id: 'ninos',
      eyebrow: 'Ancón en el censo',
      h2: '¿Cuántos niños de primaria viven en Ancón?',
      lede: 'Pasan de mil en cada edad entre los 7 y los 12 años. Los Censos Nacionales 2025 cuentan en Ancón 7,573 niños censados de 6 a 11 años y 7,579 adolescentes de 12 a 17: cada grupo es el 10.2 % de la población censada del distrito (cálculo nuestro).',
      body: [
        { kind: 'table', numCols: [1], caption: 'Niños censados en Ancón por edad simple y el grado que les toca, Censos Nacionales 2025', head: ['Edad', 'Niños censados en Ancón', 'Grado por edad normativa', 'Nuestra sugerencia para empezar'], rows: [
          ['6 años', '992', '1° de primaria', 'Mover un personaje paso a paso'],
          ['7 años', '1,174', '2° de primaria', 'Repetir con bucles en Scratch'],
          ['8 años', '1,281', '3° de primaria', 'Juegos con reglas y puntaje'],
          ['9 años', '1,395', '4° de primaria', 'Primeras líneas en Python'],
          ['10 años', '1,335', '5° de primaria', 'Bucles con <code>range()</code>, como el ejemplo'],
          ['11 años', '1,396', '6° de primaria', 'Un proyecto propio en Python o Roblox'],
          ['12 años', '1,325', '1° de secundaria', 'Python para adolescentes']
        ] },
        { kind: 'source', html: 'Las cifras salen de los Cuadros N.° 2 y N.° 3 del archivo "Indicadores demográficos" que el INEI publicó para Lima Metropolitana con los Censos Nacionales 2025, levantados el 15 de septiembre de 2025. El grado se lee con la regla del MINEDU sobre edades normativas, cuyo corte es el 31 de marzo. La columna de sugerencias es nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Un distrito joven',
          left: [
            'En Ancón, uno de cada diez habitantes censados tiene entre 6 y 11 años, y otro tanto entre 12 y 17. En los distritos del centro de Lima esa proporción suele ser bastante menor; en Breña, por ejemplo, el mismo cuadro da 6.8 % para los de 6 a 11.',
            'Los vecinos del distrito se publican cada uno por separado: Santa Rosa con 37,680 habitantes, Puente Piedra con 398,960 y Carabayllo con 430,806, según el Cuadro N.° 1. No los sumamos; cada uno es su propio distrito.'
          ],
          rightH3: 'Y los adolescentes',
          right: [
            'A partir de 1° de secundaria hablamos de adolescentes, y los 7,579 de Ancón tienen sus propios cursos: Python escrito desde el primer día, JavaScript para la web y creación de apps.',
            'Un adolescente que empieza de cero no necesita pasar por los bloques. En la sesión de prueba el mentor ve qué sabe y le propone el punto de partida. La guía <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">programación para adolescentes en Perú</a> cuenta el camino por grados.'
          ] }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'Lo que ya pasó en Ancón',
      h2: '¿Qué hicieron la municipalidad y la UGEL 04 por la educación en Ancón?',
      lede: 'Según las notas de la Municipalidad de Ancón en gob.pe, hubo un taller municipal de inglés para niños en 2019 y, en 2021, un punto de encuentro de la UGEL 04 para estudiantes que se habían quedado sin clases virtuales.',
      body: [
        { kind: 'p', html: 'El 16 de agosto de 2021, en plena educación a distancia, la municipalidad informó que la UGEL 04 y el municipio inauguraron en la "Casa de la Juventud del Km. 39" un punto de encuentro para estudiantes que "se encuentran desconectados de las clases virtuales". La nota explica que es una "estrategia correspondiente a la UGEL 04", con especialistas y voluntarios que daban sesiones de aprendizaje y orientación a padres e hijos.' },
        { kind: 'p', html: 'Esa experiencia dice algo que conviene recordar al elegir una clase en línea: lo virtual solo funciona si hay equipo y conexión, y si alguien acompaña al chico. Por eso en esta página no le prometemos que cualquier casa sirve; le mostramos los datos del censo y le pedimos probar la conexión en la sesión gratis.' },
        { kind: 'p', html: 'Antes, en enero de 2019, la municipalidad anunció en sus #VacacionesÚtiles2019 "el taller de inglés, que se dicta en la Biblioteca Municipal", para niños del distrito. Y en octubre de 2019 celebró con una sesión solemne el 145 aniversario de Ancón, con la lectura del "acta de creación política" del distrito.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo que tomamos de ahí', p: 'Que en Ancón ya hay interés de las familias por el inglés para los niños. Nuestras sesiones de programación lo practican sin sumar otra actividad.' },
          { h3: 'Lo que no decimos', p: 'No sabemos si esos programas siguen hoy. Citamos solo lo que publicaron las notas con su fecha, sin suponer nada más.' },
          { h3: 'Nuestra posición', p: 'No tenemos vínculo con la Municipalidad de Ancón, con la UGEL 04 ni con el MINEDU. Somos una escuela privada de programación en línea.' }
        ] }
      ]
    },
    {
      id: 'cuenta-regresiva',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se programa una cuenta regresiva en Python?',
      lede: 'Por ejemplo, a contar hacia atrás. Este ejercicio es nuestro y lo usamos con niños de 10 a 12 años: una cuenta regresiva antes de que zarpe un barco, escrita con <code>range()</code> y un paso negativo.',
      body: [
        { kind: 'code', label: 'Cuatro cuentas regresivas con range()', lang: 'Python', code: PY, note: '<code>range(inicio, fin, paso)</code> empieza en el primer número, avanza de a <code>paso</code> y se detiene antes de llegar al segundo. Con un paso negativo, cuenta hacia atrás.' },
        { kind: 'code', label: 'Lo que aparece en pantalla', lang: 'Salida', code: OUT, note: 'Es la salida que obtuvimos al ejecutar el programa con Python 3, copiada tal cual. La última línea es una lista vacía: <code>range(0, 10, -1)</code> no produce ningún número.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar en voz alta, en inglés.</strong> Antes de tocar el teclado, el grupo cuenta de diez a uno: "ten, nine, eight". El mentor pregunta: "Does the program say zero?"',
          '<strong>Predecir y comprobar.</strong> Casi todos dicen que sí. Al ejecutar, la primera línea termina en 1 y luego "All aboard!". El número final de <code>range()</code> nunca se incluye.',
          '<strong>Saltar de dos en dos.</strong> Con <code>range(10, 0, -2)</code> salen 10, 8, 6, 4 y 2. Para que aparezca el 0 hay que poner como final un número más allá: <code>-1</code>.',
          '<strong>El error a propósito.</strong> <code>range(0, 10, -1)</code> pide ir de 0 a 10 restando. Es imposible, así que Python no da error: da una lista vacía. El niño aprende que un programa sin errores también puede estar mal.',
          '<strong>Su propio reto.</strong> Escribir una cuenta regresiva de 20 a 0 de cinco en cinco, decirla en inglés y comprobar que la última cifra sea 0.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que buscamos con un ejercicio así no es que el niño memorice <code>range()</code>. Es que se acostumbre a adivinar primero, mirar con atención después y explicar la diferencia con sus propias palabras. Ese hábito no se forma copiando código ajeno, y es el que lo acompaña en cualquier materia del colegio.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'El idioma',
      h2: '¿Y si mi hijo casi no habla inglés?',
      lede: 'Puede empezar igual. El mentor adapta su manera de hablar a cada niño, usa la pantalla para mostrar lo que dice y espera con paciencia. Lo que pedimos es constancia en las primeras semanas, mientras el oído se acostumbra.',
      body: [
        { kind: 'two',
          leftH3: 'Cómo se aprende el inglés en la clase',
          left: [
            'Con palabras que tienen un uso inmediato: <em>start</em>, <em>stop</em>, <em>repeat</em>, <em>count</em>, <em>wrong</em>, <em>try again</em>. Cada vez que el niño las dice, pasa algo en su programa, y eso las fija con más firmeza que una lista para memorizar.',
            'Si su hijo responde en castellano, el mentor recoge la idea y le devuelve la frase en inglés para que la repita, sin corregirlo delante de los demás.'
          ],
          rightH3: 'Lo que dice EF sobre Lima',
          right: [
            'El índice EF EPI 2025 le da a Lima ciudad 555 puntos, banda alta, y al país completo 519. Ese índice mide a adultos que hacen el examen de EF, no a niños.',
            'Lo citamos porque muestra que el inglés es una habilidad que muchas familias limeñas ya valoran. Una clase de programación es una forma de practicarlo con un propósito concreto.'
          ] }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿En qué horario puede programar un niño de Ancón?',
      lede: 'En el que su familia escoja. Los mentores están en la India, cuyo reloj le lleva a Perú diez horas y treinta minutos durante todo el año. La tabla convierte algunas horas para que se haga una idea.',
      body: [
        { kind: 'table', numCols: [], caption: 'Horas de Ancón traducidas a la hora del mentor (ejemplos de conversión; no es un horario)', head: ['En Ancón (hora de Perú)', 'Para el mentor (hora de la India)', '¿Qué día es allá?'], rows: [
          ['8:30 a. m.', '7:00 p. m.', 'El mismo'],
          ['10:30 a. m.', '9:00 p. m.', 'El mismo'],
          ['2:30 p. m.', '1:00 a. m.', 'El siguiente'],
          ['5:30 p. m.', '4:00 a. m.', 'El siguiente'],
          ['7:30 p. m.', '6:00 a. m.', 'El siguiente']
        ] },
        { kind: 'source', html: 'Perú se rige todo el año por UTC-5, sin adelanto de verano: así lo muestran la hora oficial que difunde el INACAL y la zona America/Lima de la base tzdata. La India se mantiene en UTC+5:30. Como ninguno cambia su reloj, la brecha es idéntica en febrero y en agosto.' },
        { kind: 'p', mt: true, html: 'Muchos chicos de Ancón vuelven del colegio a media tarde y prefieren conectarse ya con la casa tranquila; otros eligen la mañana si estudian en el turno tarde. Cuando reserve la sesión gratis, verá las horas disponibles ya convertidas a la hora de Perú, sin hacer cuentas.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo va a saber si su hijo progresa?',
    lede: 'Cinco etapas propias nos sirven para contarle a la familia en qué punto está su hijo. Son nuestras, y no tienen nada que ver con las notas del colegio.',
    table: { caption: 'Etapas de programación para niños de primaria (escala de Modern Age Coders)', head: ['Etapa', 'Edad frecuente', 'Lo que su hijo logra'], rows: [
      ['1. Sigue pasos', '6 a 7 años', 'llevar a su personaje a una meta ordenando los bloques uno tras otro'],
      ['2. Usa bucles', '7 a 9 años', 'reemplazar una fila de bloques repetidos por una sola repetición'],
      ['3. Cuenta con código', '9 a 10 años', 'hacer una cuenta regresiva con <code>range()</code> y explicar dónde termina'],
      ['4. Detecta lo raro', '10 a 11 años', 'notar que un programa sin mensaje de error también puede estar mal'],
      ['5. Construye', '11 a 12 años', 'diseñar un juego o proyecto propio y presentarlo en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pregúntele a su hijo qué esperaba que hiciera su programa y qué hizo en realidad. Si sabe contestar las dos cosas, está aprendiendo.',
      'Las primeras semanas con el inglés del mentor son las más exigentes. Después de eso, la mayoría de niños se suelta.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Diga el último número antes de ejecutar. ¿Aparece o no aparece?',
      'Si la pantalla queda vacía, no es que la computadora falló: revise el paso.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más, de primaria a secundaria',
    lede: 'Los mismos mentores, las mismas sesiones en directo y en inglés, para seguir creciendo después del primer curso.',
    bands: [
      { num: 'I', h3: 'Los primeros meses', sub: 'Primaria, primeros grados', courses: [
        { code: 'PAE / BASE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'De un gato que camina a un juego con niveles, todo en Scratch.' },
        { code: 'PAE / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Lógica para los más chicos', blurb: 'Rompecabezas, series y orden antes del primer programa.' },
        { code: 'PAE / BASE / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Contar, sumar y restar de memoria con trucos que se entienden.' }
      ] },
      { num: 'II', h3: 'Código escrito y juegos', sub: 'Primaria, últimos grados', courses: [
        { code: 'PAE / CODIGO / 01', slug: 'python-ai-kids-masterclass', title: 'Python con proyectos de IA', blurb: 'El salto de los bloques al texto, con proyectos pequeños de IA.' },
        { code: 'PAE / CODIGO / 02', slug: 'game-development-masterclass-for-kids', title: 'Hacer videojuegos', blurb: 'Reglas, niveles y puntajes: diseñar juegos, no solo jugarlos.' },
        { code: 'PAE / CODIGO / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Juegos en Godot', blurb: 'Un motor de juegos gratuito para crear escenas y personajes propios.' }
      ] },
      { num: 'III', h3: 'Para adolescentes', sub: 'Desde 1° de secundaria', courses: [
        { code: 'PAE / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'De variables a proyectos completos, con buenas costumbres desde el inicio.' },
        { code: 'PAE / SEC / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript desde cero', blurb: 'Páginas web que responden a lo que hace el usuario.' },
        { code: 'PAE / SEC / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'Crear apps', blurb: 'Una aplicación para el celular, diseñada y programada de principio a fin.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una semana de clases desde Ancón?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Si su hijo estudia en el turno tarde.' },
      { time: 'Media tarde', l: 'Al volver del colegio, con el almuerzo hecho.' },
      { time: 'A medida', l: 'Sesiones individuales en el momento que usted proponga.' }
    ],
    cells: [
      { h3: 'Mentor fijo', p: 'Quien empieza con su hijo es quien termina el curso con él.' },
      { h3: 'Inglés paciente', p: 'Frases simples, señalando en pantalla, sin apurar las respuestas.' },
      { h3: 'Teclea el niño', p: 'El mentor guía con preguntas; el código lo escribe su hijo.' },
      { h3: 'Un logro por etapa', p: 'Al cerrar cada tramo hay algo que enseñar en casa.' },
      { h3: 'Aviso a la familia', p: 'Un mensaje breve sobre lo practicado y lo próximo.' },
      { h3: 'En grupo o solo', p: 'Un aula virtual de quince a veinte chicos, o su hijo con el mentor.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Una cuenta regresiva es el primer escalón; con meses de práctica, algunos alumnos terminan publicando apps y juegos completos. Aquí hay varios de esos trabajos, y en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés) hay más.',
  reviewsLede: 'Comentarios de familias y estudiantes de distintos países en Google, en el inglés en que los escribieron.',

  fees: {
    h2: 'Cuánto cuestan las clases para una familia de Ancón',
    lede: 'El precio mensual aparece en dólares de Estados Unidos y se cobra a una tarjeta. Es su banco el que pasa el importe a su moneda, con el tipo de cambio del día en que se hace el cargo.',
    free: ['Primera sesión gratis y en vivo', 'Prueba de cámara, audio y conexión', 'Sin tarjeta ni compromiso'],
    group: ['De quince a veinte chicos de una etapa parecida', 'Un mismo mentor durante el curso', 'Dos sesiones en directo cada semana', 'Pago mensual; puede parar cuando quiera'],
    one: ['Su hijo y el mentor, nadie más', 'Avance al ritmo de su hijo', 'Días y horas que decida la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Ancón: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Cada sesión es en directo y en inglés, sin excepción, y eso tiene una ventaja clara: su hijo aprende a programar mientras escucha y habla otro idioma. El mentor cambia las palabras si algo no se entiende y apoya todo con la pantalla. Según el EF EPI 2025, la ciudad de Lima está en la banda alta de inglés con 555 puntos, y las clases convierten esa base en conversación real.' },
      { q: '¿Hay que ir a algún local?', a: 'No. No tenemos locales en Ancón ni en Lima. Su hijo se conecta desde casa por videollamada, así que la familia se ahorra los viajes hacia otros distritos.' },
      { q: '¿Se puede tomar la clase desde el celular?', a: 'Para conversar con nosotros, sí; para programar, no. Hace falta una laptop o una computadora con teclado. Según el censo de 2025, el 21.3 % de los hogares de Ancón tiene laptop y el 13.3 % computadora de escritorio.' },
      { q: '¿Funciona con internet móvil?', a: 'Sí, si la señal es estable durante una hora de video. En Ancón el 67.9 % de los hogares tiene internet móvil y el 38.1 % internet fijo, según el censo de 2025. Pruebe una videollamada larga antes de la sesión gratis.' },
      { q: '¿Cuántos niños hay en Ancón?', a: 'Los Censos Nacionales 2025 del INEI cuentan 7,573 niños censados de 6 a 11 años y 7,579 adolescentes de 12 a 17 en Ancón, sobre 78,256 habitantes del distrito.' },
      { q: '¿A partir de qué edad?', a: 'Desde los 6 años, cuando el niño entra a 1° de primaria. Los primeros meses son con bloques; el paso a Python suele darse entre 4° y 5° grado.' },
      { q: '¿A qué hora se conecta?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. El reloj de la India va diez horas y media por delante del peruano todo el año: una sesión a las 10:30 a. m. en Ancón es a las 9:00 p. m. para el mentor.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, mes a mes, en dólares de Estados Unidos; el banco convierte el importe. La sesión de prueba no pide datos de pago.' },
      { q: '¿Tienen convenio con la municipalidad, la UGEL o el MINEDU?', a: 'No. Somos independientes de la Municipalidad de Ancón, de la UGEL 04 y del MINEDU, y nuestras sesiones no dan notas escolares. Al completar un curso entregamos un certificado de finalización propio de Modern Age Coders, sin valor oficial en el sistema educativo.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo desde Ancón',
    lede: 'Páginas en castellano y en inglés para seguir decidiendo.',
    items: [
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Clases de programación online', p: 'Cómo funciona aprender a programar por videollamada, explicado para padres.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'El camino desde 1° hasta 5° de secundaria.' },
      { href: '/vacaciones-utiles-de-programacion-los-olivos-lima', label: 'Vacaciones útiles en Los Olivos', p: 'Un plan de verano para familias de Lima Norte.' },
      { href: '/robotica-o-programacion-para-ninos', label: 'Robótica o programación', p: 'Qué conviene aprender primero y por qué no hace falta un kit.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La página nacional, en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'El método de nuestras sesiones, en inglés.' }
    ]
  },

  start: {
    h2: 'Pruebe una sesión gratis desde Ancón',
    lede: 'En la sesión de prueba revisamos primero que la cámara, el audio y la conexión funcionen. Después el mentor conversa un poco en inglés fácil con su hijo y le propone un reto corto para ver cómo razona. Al final le sugerimos curso y formato, sin compromiso.',
    readFirst: 'Antes de reservar puede leer, en inglés, cómo enseñamos en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y todos los programas en <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Enseñamos en directo y solo en inglés, con mentores que viven en la India. Por WhatsApp atendemos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programar con bloques' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Pensar como programador' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Crear en Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Familias de Lima Norte', links: [
        { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación online para niños' },
        { href: '/vacaciones-utiles-de-programacion-los-olivos-lima', label: 'Verano en Los Olivos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'El último número no se cuenta'
  },

  personalityCss: `
.ag-root.ag-pae .ag-hero h1 { letter-spacing: -0.009em; max-width: 20ch; }
.ag-root.ag-pae .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-pae .ag-table caption { text-align: left; }
.ag-root.ag-pae .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-pae .ag-steps li { line-height: 1.58; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de Lima Metropolitana (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for Ancón; Municipalidad de Ancón notes on gob.pe of 16 January 2019, 29 October 2019 and 16 August 2021; MINEDU Edades normativas; EF EPI 2025; tzdata and INACAL. The countdown example, the starting suggestions and the stages are our own.',
    localProject: 'A ship countdown for a child of 10 to 12 in Ancón, on the bay: range(10, 0, -1) prints 10 down to 1 and All aboard!, range(10, 0, -2) stops at 2, range(10, -1, -2) reaches 0, and range(0, 10, -1) is empty. Run with python3 -I. Lesson family: range() with a negative step; the stop value is never reached; a step in the wrong direction gives an empty range.',
    requiredMentions: ['now zero is in', 'Does the program say zero?', 'se encuentran desconectados de las clases virtuales', 'Casa de la Juventud del Km. 39', '4,775 (21.3 %)', 'el puesto 31 entre los 43 distritos de la capital', 'Niños censados en Ancón', 'El último número no se cuenta', 'el censo registra apenas 11 personas en el área rural'],
    sources: [
      { claim: 'Ancón 78,256 inhabitants, censada 74,099 (11 rural), 7,573 aged 6 to 11, 7,579 aged 12 to 17, single ages 6 to 12; neighbours Santa Rosa, Puente Piedra, Carabayllo.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ancón households 22,388: laptop 4,775, computer 2,976, tablet 1,454, fixed internet 8,537, mobile internet 15,191, phone 22,166; Lima Metropolitana shares.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'UGEL 04 and the municipality open a meeting point at the Casa de la Juventud del Km. 39 for pupils disconnected from virtual classes (16 August 2021).', url: 'https://www.gob.pe/institucion/muniancon/noticias/562113' },
      { claim: 'Municipal English workshop for children in the Biblioteca Municipal, Vacaciones Útiles 2019 (16 January 2019).', url: 'https://www.gob.pe/institucion/muniancon/noticias/80866' },
      { claim: '145th anniversary of Ancón, reading of the act of political creation (29 October 2019).', url: 'https://www.gob.pe/institucion/muniancon/noticias/81063' },
      { claim: 'Normative age at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima city 555, high band; Peru 519.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Officials named in the municipal and UGEL notes: left out on purpose.',
      'That the 2019 English workshop or the 2021 meeting point still run: not claimed; only what the dated notes say.',
      'The census row for viviendas colectivas in Ancón: not used or explained.',
      'Income, class or strata readings of the household equipment table: refused; shown only to answer what a home needs for a class.',
      'Traffic or commute times to central Lima: no figure used.',
      'Sums of neighbouring district populations: refused; each district shown as INEI publishes it.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};

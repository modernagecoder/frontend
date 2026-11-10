// SHIP: district kids door (ES) | San Luis, Lima: lectura y código, niños por edad, sin trasladarse | print versus return: a helper that prints its answer hands back None
'use strict';
// Clases de programación para niños en San Luis (ag- Spanish-language district door, Peru cluster row PE229, hubGroup lima;
// alloc: pnsl, #004E44). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the San Luis (Lima) parent, not San Luis de Cañete, who types "clases de programación para niños san luis". Spine:
// a district whose municipality puts reading first (its library notes), so the page ties reading to programming; how many
// children of each age the census counted, and what "población omitida" means; what a home needs (household census);
// why online when San Borja and La Victoria are next door; an original lesson on print versus return.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-san-luis-lima/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana (tabulados/27/poblacion):
//    Cuadro N° 1 "DISTRITO SAN LUIS 61773" total, censada 55447, omitida 6326. Rank 34 of 43 (our ordering).
//    Cuadro N° 3 "DISTRITO SAN LUIS 55447 2501 3863 4333 11222 13327 10609 9592"; all URBANA.
//    Cuadro N° 2 single ages: 6 años 554, 7 años 588, 8 años 671, 9 años 680, 10 años 674, 11 años 696, 12 años 704.
//    Neighbours, Cuadro N° 1: LA VICTORIA 192325, SAN BORJA 126125, ATE 702531, EL AGUSTINO 231452.
//    places.tsv homonyms: dist SAN LUIS also in Carlos Fermín Fitzcarrald (Áncash), San Pablo (Cajamarca), Cañete (Región Lima).
//  INEI, Censos Nacionales 2025, Equipamiento_del_hogar.xlsx (tabulados/27/hogar), DISTRITO SAN LUIS, Hogares 16762:
//    Computadora 5826, Laptop 8732, Tableta 4235; celular 16682, internet fijo 10693, internet móvil 13433.
//  Municipalidad Distrital de San Luis - Lima (munisanluis-lima), gob.pe notes:
//    19 June 2024 (n-974675): "BIBLIOTECA MUNICIPAL “CIRO ALEGRÍA”"; "ubicada en el jirón La Capea N° 180 de la urbanización
//      Villa Jardín; en el horario de atención de lunes a viernes de 8 AM a 5 PM".
//    1 April 2024 (n-971277): "Biblioteca itinerante en los parques de San Luis"; "con el propósito de incentivar la lectura
//      en las niñas y niños del distrito".
//    28 April 2025 (n-1163499): "Biblioteca Itinerante y Show de Títeres"; "fomentar la lectura entre los infantes para
//      mejorar sus habilidades, comprensión lectora"; "#RumboAlos57Aniversario".
//    School names in the notes are left out on purpose.
//  National: MINEDU Edades normativas; CNEB; EF EPI 2025 Lima city 555 (high band); tzdata America/Lima -5:00, Asia/Kolkata
//    +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 3863 / 55447 = 7.0 %, 4333 / 55447 = 7.8 %; omitida
//    6326 / 61773 = 10.2 %; laptop 8732 / 16762 = 52.1 %, computadora 34.8 %, tableta 25.3 %, internet fijo 63.8 %,
//    móvil 80.1 %.
// Our own example, run with python3 -I (sanluis.py in the src-pages folder), exact output:
//    75 / a is None / b is 75 / Pages left this week: 75
// Lesson family: print versus return; a function that only prints hands back None, so its answer cannot be added or reused.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def pages_left_print(total, read):',
  '    print(total - read)',
  '',
  'def pages_left(total, read):',
  '    return total - read',
  '',
  'a = pages_left_print(120, 45)',
  "print('a is', a)",
  '',
  'b = pages_left(120, 45)',
  "print('b is', b)",
  '',
  'week = pages_left(120, 45) + pages_left(80, 80)',
  "print('Pages left this week:', week)"
].join('\n');

const OUT = [
  '75',
  'a is None',
  'b is 75',
  'Pages left this week: 75'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en San Luis' },
  slug: 'clases-de-programacion-para-ninos-san-luis-lima',
  code: 'pnsl',
  accent: '#004E44',
  accentRationale: 'Clases de programación para niños en San Luis: a dark library-shelf teal #004E44, set apart from the greens of Breña and Ancón; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en San Luis',
  title: 'Clases de programación para niños en San Luis, Lima',
  description: 'Clases de programación para niños de San Luis, en Lima: en vivo y en inglés por videollamada, para chicos de 6 a 12 años, en grupo o individual, todo el año.',
  ogDescription: 'San Luis lee; ahora también puede programar. Niños por edad según el censo, el equipo de los hogares y una lección de Python sobre print y return.',
  twitterDescription: 'Programación para niños de San Luis (Lima), en vivo y en inglés, desde casa y sin trasladarse.',
  pageName: 'Clases de programación para niños en San Luis',
  webPageDescription: 'Guía para familias del distrito de San Luis, en Lima Metropolitana, que buscan clases de programación para niños de 6 a 12 años: la relación entre leer y programar, los niños del distrito por edad y la población omitida según los Censos Nacionales 2025 del INEI, el equipo de los hogares, por qué conviene la clase en casa aunque San Borja esté al lado, y una lección de Python escrita por nosotros.',
  courseDescription: 'Clases en directo por videollamada de programación para niños de 6 a 12 años de San Luis (Lima), dictadas solo en inglés: bloques, apps, Python e inteligencia artificial explicada, en clase grupal o individual, durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en San Luis',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#leer', label: 'Leer y programar' },
    { href: '#censo', label: 'Censo' },
    { href: '#casa', label: 'En casa' },
    { href: '#funcion', label: 'Ejemplo' },
    { href: '#horas', label: 'Horas' }
  ],
  eyebrow: 'Lima &middot; San Luis &middot; Programación para niños',
  h1: 'Clases de programación para niños en San Luis, en inglés',
  lede: 'San Luis, el distrito de Lima entre La Victoria, San Borja, Ate y El Agustino, tiene una municipalidad que habla mucho de lectura. Nosotros proponemos otra lectura: la del código. En esta página contamos cómo es aprender a programar en directo y en inglés desde casa, cuántos niños registró el censo en el distrito, qué equipo hace falta y un ejercicio completo de Python.',
  secondaryCta: { href: '#leer', label: '¿Qué tiene que ver leer con programar?' },
  wa: 'Hola Modern Age Coders, vivimos en San Luis (Lima) y buscamos clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; de Villa Jardín a la India, sin salir de casa',
  spec: [
    ['Distrito', 'San Luis, Lima Metropolitana'],
    ['Edades', 'De 6 a 12 años; adolescentes aparte'],
    ['Modalidad', 'En directo, por videollamada, en inglés'],
    ['Grupo', 'Quince a veinte chicos, o individual'],
    ['Calendario', 'Todo el año, a la hora que usted fije'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Sí. Modern Age Coders enseña programación a chicos de San Luis, en Lima, de 6 a 12 años, con clases en vivo y en inglés por videollamada que se toman desde casa todo el año. Un mentor desde la India acompaña a cada niño a su ritmo: bloques y apps al comienzo, luego Python y nociones de inteligencia artificial. La familia elige entre un grupo pequeño de edad parecida o sesiones individuales, y la hora. La sesión de prueba es gratuita.',

  picks: {
    eyebrow: 'Cursos para empezar',
    h2: 'Tres cursos con los que arrancan los chicos de San Luis',
    lede: 'Uno para crear algo útil con bloques, uno para leer y escribir código de verdad y uno para entender qué hay detrás de la IA.',
    items: [
      { course: 'block-coding-app-development-masterclass', code: 'PNSL / 01', title: 'Mi primera app', alt: 'Imagen del curso de desarrollo de apps con bloques', note: 'Para chicos de primaria que quieren hacer algo que se use. Con bloques arman una app para el celular de la familia: un contador de páginas leídas, un juego de preguntas o un recordatorio.' },
      { course: 'python-ai-kids-masterclass', code: 'PNSL / 02', title: 'Python con IA para chicos', alt: 'Imagen del curso de Python e IA para niños', note: 'Para cuando su hijo ya lee y teclea con soltura. Funciones que calculan y devuelven resultados, como la del ejemplo de esta página, y proyectos pequeños de IA.' },
      { course: 'ai-literacy-for-kids-course', code: 'PNSL / 03', title: 'La IA explicada a los chicos', alt: 'Imagen del curso de alfabetización en inteligencia artificial para niños', note: 'Desde los 8 años. Qué hace un asistente de IA, de dónde saca sus respuestas y por qué hay que leerlas con atención antes de creerlas.' }
    ]
  },

  sections: [
    {
      id: 'leer',
      eyebrow: 'Leer y programar',
      h2: '¿Qué tiene que ver la lectura con aprender a programar?',
      lede: 'Mucho. Un programa se lee línea por línea, de arriba hacia abajo, y quien lo escribe tiene que entender cada palabra. Un chico que lee con atención encuentra los errores antes; y al revés, programar entrena una lectura muy cuidadosa.',
      body: [
        { kind: 'p', html: 'La Municipalidad de San Luis viene publicando en gob.pe notas sobre su biblioteca. En junio de 2024 presentó la Biblioteca Municipal "Ciro Alegría", "ubicada en el jirón La Capea N° 180 de la urbanización Villa Jardín", con atención "de lunes a viernes de 8 AM a 5 PM". En abril de 2024 llevó una biblioteca itinerante a los parques del distrito "con el propósito de incentivar la lectura en las niñas y niños", y en abril de 2025 repitió la idea con un show de títeres para "fomentar la lectura entre los infantes".' },
        { kind: 'p', html: 'No tenemos ninguna relación con esas actividades ni con la municipalidad. Las citamos porque dicen algo del distrito: que en San Luis la lectura de los niños es un tema público. Y porque leer bien es exactamente lo que pide la programación. Cuando un niño escribe <code>return</code> en vez de <code>print</code>, el programa hace algo distinto; solo lo nota quien lee con cuidado.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Leer código en voz alta', p: 'En nuestras sesiones el niño lee su programa en inglés, línea por línea, antes de ejecutarlo. Así entrena la comprensión y el vocabulario a la vez.' },
          { h3: 'Predecir lo que va a pasar', p: 'Antes de apretar el botón, el mentor pide adivinar el resultado. Es la misma habilidad que adivinar cómo sigue un cuento: entender lo leído.' },
          { h3: 'Explicar con palabras propias', p: 'Al final, el niño cuenta qué hizo su programa y por qué. Si puede explicarlo, lo entendió; si no, todavía falta leerlo otra vez.' }
        ] },
        { kind: 'p', mt: true, html: 'Todo esto ocurre en inglés, y por videollamada. El niño programa en la computadora de su casa y un mentor desde la India lo guía en directo, con un inglés claro y pausado. Para muchas familias peruanas la combinación es lo atractivo: programación y práctica del idioma en la misma hora. Lo explicamos con más detalle en <a class="ag-inline-link" href="/clases-de-ingles-y-programacion-ninos">clases de inglés y programación para niños</a>.' }
      ]
    },
    {
      id: 'censo',
      eyebrow: 'San Luis en el censo',
      h2: '¿Cuántos niños viven en el distrito de San Luis?',
      lede: 'Entre 554 y 704 por cada año de edad, de los 6 a los 12. Los Censos Nacionales 2025 del INEI cuentan en San Luis 3,863 niños censados de 6 a 11 años y 4,333 adolescentes de 12 a 17, en un distrito de 61,773 habitantes.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Personas censadas en San Luis (Lima) de 6 a 12 años, edad por edad, con su grado escolar', head: ['Edad cumplida', 'Censados en San Luis', 'Grado (edad normativa)', 'Un buen punto de partida, según nosotros'], rows: [
          ['6', '554', '1° de primaria', 'Bloques con dibujos y sonidos'],
          ['7', '588', '2° de primaria', 'Historias animadas en Scratch'],
          ['8', '671', '3° de primaria', 'Una app sencilla con bloques'],
          ['9', '680', '4° de primaria', 'Python: imprimir, sumar, preguntar'],
          ['10', '674', '5° de primaria', 'Funciones que devuelven un valor'],
          ['11', '696', '6° de primaria', 'Un proyecto con datos propios'],
          ['12', '704', '1° de secundaria', 'Python para adolescentes, o Java']
        ] },
        { kind: 'source', html: 'Datos: INEI, Censos Nacionales 2025 (día del censo: 15 de septiembre de 2025), archivo "Indicadores demográficos" de Lima Metropolitana, Cuadro N.° 2, edades simples del distrito de San Luis. El grado se asigna con la regla de edades normativas del MINEDU (edad cumplida al 31 de marzo). La cuarta columna es una sugerencia nuestra, no del INEI.' },
        { kind: 'two', mt: true,
          leftH3: 'Censados y omitidos',
          left: [
            'El INEI separa a la población en censada (la que fue entrevistada) y omitida (la que estima que no se alcanzó a censar). En San Luis, de 61,773 habitantes, 55,447 fueron censados y 6,326 figuran como omitidos, el 10.2 % del total (cálculo nuestro con el Cuadro N.° 1).',
            'Por eso las cifras por edad de la tabla, que solo existen para la población censada, se quedan un poco cortas frente al total real. No las corregimos ni las inflamos: las mostramos tal como las publica el INEI.'
          ],
          rightH3: 'Qué peso tienen los niños',
          right: [
            'Los de 6 a 11 años son el 7.0 % de la población censada del distrito y los de 12 a 17, el 7.8 % (cálculo nuestro). San Luis ocupa el puesto 34 de 43 entre los distritos de Lima Metropolitana por número de habitantes.',
            'Ojo con el nombre: en el Perú hay otros distritos llamados San Luis, por ejemplo en Cañete, en Áncash y en Cajamarca. Esta página habla del San Luis de Lima Metropolitana; si usted vive en otro, las clases son las mismas, pero las cifras no.'
          ] }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'El equipo de casa',
      h2: '¿Qué computadora necesita mi hijo para las clases?',
      lede: 'Una laptop o una PC de escritorio, con cámara y micrófono. En San Luis, según el censo de 2025, el 52.1 % de los hogares tiene laptop y el 34.8 % computadora de escritorio, así que en muchas casas el equipo ya está.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice el censo del distrito',
          left: [
            'De los 16,762 hogares que el INEI registró en San Luis, 8,732 tienen laptop, 5,826 computadora de escritorio y 4,235 tableta. En conexión, 10,693 hogares tienen internet fijo (63.8 %) y 13,433 internet móvil (80.1 %). Los porcentajes son nuestros; un hogar puede tener varias cosas a la vez, por eso no se suman.',
            'Fuente: INEI, Censos Nacionales 2025, archivo "Equipamiento del hogar" de Lima Metropolitana, Cuadros N.° 1 y N.° 2, fila de hogares del distrito.'
          ],
          rightH3: 'Lo que de verdad hace falta',
          right: [
            'Teclado, porque el niño va a escribir código desde los 9 o 10 años. Cámara y micrófono, porque la sesión es una conversación. Y una conexión que no se corte durante una hora.',
            'El teléfono no reemplaza a la computadora para programar. La tableta puede servir solo en las primeras semanas con bloques. Todo el software que usamos es gratuito, y la sesión de prueba incluye revisar que funcione.'
          ] },
        { kind: 'p', mt: true, html: 'Compartimos estos datos para responder una pregunta concreta, si una casa típica del distrito puede tomar una clase en línea, y no para describir a las familias de San Luis. Cada hogar es distinto; en la sesión gratis lo comprobamos con su propio equipo.' }
      ]
    },
    {
      id: 'vecinos',
      eyebrow: 'Por qué en línea',
      h2: '¿Para qué una clase en línea si San Borja está al lado?',
      lede: 'Porque la cercanía no elimina el traslado. Aunque una academia quede en el distrito vecino, alguien tiene que llevar y recoger al niño varias veces por semana. Con la clase en casa, ese tiempo vuelve a la familia.',
      body: [
        { kind: 'p', html: 'San Luis limita con La Victoria, San Borja, Ate y El Agustino, cuatro distritos que el INEI publica por separado: La Victoria con 192,325 habitantes, San Borja con 126,125, Ate con 702,531 y El Agustino con 231,452, según el Cuadro N.° 1 de los Censos Nacionales 2025. Son vecinos grandes, con mucha oferta de todo tipo, y también con calles que se llenan a la hora de salida de los colegios.' },
        { kind: 'p', html: 'No tenemos cifras de tráfico y no las inventamos. Lo que sí sabemos es lo que nos dicen las familias: lo difícil no es la clase, es el camino de ida y vuelta, sobre todo con hermanos menores en casa o con los padres trabajando. Por videollamada, el niño se sienta a la hora acordada y, cuando termina, ya está en casa.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Mismo mentor siempre', p: 'Su hijo no cambia de profesor cada semana. Quien empieza el curso lo termina, y conoce sus fortalezas y sus dudas.' },
          { h3: 'Compañeros de otros lugares', p: 'En un grupo, su hijo trabaja con chicos de su edad de otras ciudades. El inglés se vuelve la forma natural de entenderse.' },
          { h3: 'Sin presión de notas', p: 'No damos notas escolares. Medimos el avance por lo que su hijo puede construir y explicar, y se lo contamos a usted.' }
        ] },
        { kind: 'p', mt: true, html: 'Si su familia se mueve también por San Borja, tenemos una página sobre el verano allí: <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-borja-lima">vacaciones útiles de programación en San Borja</a>.' }
      ]
    },
    {
      id: 'funcion',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se aprende la diferencia entre print y return?',
      lede: 'Con un problema de lectura. Este ejercicio es nuestro y lo usamos con chicos de 10 a 12 años: dos funciones que calculan cuántas páginas le faltan a un libro, una que imprime el resultado y otra que lo devuelve.',
      body: [
        { kind: 'code', label: 'Dos funciones que parecen iguales', lang: 'Python', code: PY, note: 'Las dos calculan <code>total - read</code>. La primera lo muestra en pantalla con <code>print</code>; la segunda lo entrega con <code>return</code> a quien la llamó.' },
        { kind: 'code', label: 'Salida del programa', lang: 'Salida', code: OUT, note: 'Copiamos estas cuatro líneas exactamente como salieron al ejecutar el archivo con Python 3. El primer <code>75</code> lo imprime la función por su cuenta; <code>a</code> se queda con <code>None</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer las dos funciones en voz alta.</strong> "pages left print: print total minus read". "pages left: return total minus read". El mentor pregunta: "What is the difference?" La mayoría dice que ninguna.',
          '<strong>Predecir.</strong> ¿Qué guarda <code>a</code>? Casi todos responden 75. La pantalla dice <code>a is None</code>: la función mostró el número, pero no lo entregó.',
          '<strong>La pregunta clave.</strong> "Who gets the answer?" Con <code>print</code>, la respuesta va a la pantalla y se pierde para el programa. Con <code>return</code>, vuelve a quien la pidió y se puede guardar o sumar.',
          '<strong>Usar el resultado.</strong> Solo la versión con <code>return</code> permite sumar dos libros: 75 páginas de uno y 0 del otro dan <code>Pages left this week: 75</code>. Con la versión que imprime, la suma ni siquiera funcionaría.',
          '<strong>Llevarlo a su biblioteca.</strong> El reto: una función que devuelva cuántos días tardará en terminar un libro leyendo cierta cantidad de páginas por día, y que el niño la explique en inglés.'
        ] },
        { kind: 'p', mt: true, html: 'Este error, mostrar en vez de devolver, aparece muchísimo en código copiado de internet o generado por una herramienta de IA: el programa parece funcionar porque el número sale en pantalla, pero no sirve para nada más. Solo lo detecta quien lee con atención y se pregunta adónde va cada valor. Esa costumbre es la que enseñamos, más que cualquier comando.' }
      ]
    },
    {
      id: 'horas',
      eyebrow: 'Idioma y horario',
      h2: '¿En qué idioma y a qué hora son las clases?',
      lede: 'En inglés, a la hora que usted elija. Los mentores viven en la India, cuyo reloj adelanta al peruano en diez horas y treinta minutos todo el año; abajo, algunas conversiones para orientarse.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias entre la hora de San Luis y la hora de la India (no es un horario de clases)', head: ['San Luis (hora de Perú)', 'Mentor (hora de la India)', 'Fecha en la India'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'Igual que en Perú'],
          ['11:00 a. m.', '9:30 p. m.', 'Igual que en Perú'],
          ['3:00 p. m.', '1:30 a. m.', 'Un día después'],
          ['5:00 p. m.', '3:30 a. m.', 'Un día después'],
          ['8:00 p. m.', '6:30 a. m.', 'Un día después']
        ] },
        { kind: 'source', html: 'Perú no adelanta ni atrasa el reloj: usa UTC-5 en todos los meses, según la hora oficial del INACAL y la zona America/Lima de tzdata. La India usa UTC+5:30 sin cambios estacionales. Por eso la tabla sirve igual en cualquier época del año.' },
        { kind: 'two', mt: true,
          leftH3: 'El inglés del mentor',
          left: [
            'Claro, pausado y apoyado en la pantalla. El mentor repite de otra forma lo que no se entendió y deja que el niño responda sin apuro. Si responde en castellano, recibe la frase en inglés para intentarla.',
            'Según el EF EPI 2025, la ciudad de Lima suma 555 puntos y está en la banda alta del índice de EF. Muchos chicos de San Luis tienen una base de inglés del colegio que aquí se usa para algo concreto.'
          ],
          rightH3: 'Cuándo se conectan las familias',
          right: [
            'Los chicos que estudian en el turno mañana suelen elegir la tarde, con las tareas listas. Los del turno tarde prefieren la mañana temprano. Los sábados también son una opción.',
            'Al reservar la sesión gratis, las horas aparecen ya en hora de Perú: no hace falta convertir nada.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si su hijo está aprendiendo?',
    lede: 'Seguimos a cada niño con cinco hitos propios. Le sirven a usted para preguntarle a su hijo lo correcto, y no tienen relación con las notas escolares.',
    table: { caption: 'Cinco hitos de un niño que aprende a programar (escala propia)', head: ['Hito', 'Edad aproximada', 'Señal de que lo logró'], rows: [
      ['1. Lee una secuencia', '6 a 7 años', 'sigue con el dedo los bloques de su programa y dice qué hará cada uno'],
      ['2. Repite sin copiar', '7 a 9 años', 'usa un bucle en lugar de duplicar bloques'],
      ['3. Escribe una función', '9 a 10 años', 'define una función con un nombre que explica lo que hace'],
      ['4. Devuelve resultados', '10 a 11 años', 'sabe cuándo usar <code>return</code> y cuándo basta <code>print</code>'],
      ['5. Arma un proyecto', '11 a 12 años', 'combina funciones en un programa propio y lo presenta en inglés']
    ] },
    left: { h3: 'Para usted', ps: [
      'Pídale a su hijo que le lea su programa como si fuera un cuento. Si se detiene en una línea que no sabe explicar, ahí está lo que falta practicar.',
      'No espere velocidad al comienzo. Un niño que lee despacio su código y lo entiende avanza más que uno que teclea rápido y copia.'
    ] },
    right: { h3: 'Para su hijo', ps: [
      'Pregúntese siempre: ¿adónde va este número? ¿A la pantalla o de vuelta al programa?',
      'Si ve <code>None</code>, no se asuste: alguna función olvidó devolver algo.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para los chicos de San Luis',
    lede: 'Enseñados en directo y en inglés, con un mismo mentor por curso, en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Para empezar', sub: 'Primaria baja', courses: [
        { code: 'PNSL / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques de colores', blurb: 'El primer contacto con la programación, encajando piezas.' },
        { code: 'PNSL / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar antes de programar', blurb: 'Patrones, series y lógica para los más pequeños.' },
        { code: 'PNSL / BASE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Código en Minecraft', blurb: 'Automatizar construcciones dentro de un mundo conocido.' }
      ] },
      { num: 'II', h3: 'Para crear', sub: 'Primaria alta', courses: [
        { code: 'PNSL / CREA / 01', slug: 'game-development-masterclass-for-kids', title: 'Diseño de videojuegos', blurb: 'Personajes, niveles y reglas, del papel a la pantalla.' },
        { code: 'PNSL / CREA / 02', slug: 'kids-ai-web-development-course', title: 'Una web propia', blurb: 'HTML y CSS para publicar una página sobre lo que le gusta.' },
        { code: 'PNSL / CREA / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para chicos', blurb: 'Un lenguaje exigente, aprendido con problemas cortos.' }
      ] },
      { num: 'III', h3: 'Para adolescentes', sub: 'Secundaria', courses: [
        { code: 'PNSL / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python completo', blurb: 'Funciones, archivos y proyectos, para chicos de 13 a 18.' },
        { code: 'PNSL / SEC / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java desde cero', blurb: 'Objetos y clases explicados paso a paso.' },
        { code: 'PNSL / SEC / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos y lógica', blurb: 'Resolver problemas difíciles con estructuras de datos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo funcionan las clases en directo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañanas', l: 'Para chicos del turno tarde, antes de ir al colegio.' },
      { time: 'Tardes', l: 'Cuando las tareas del día ya están hechas.' },
      { time: 'Sesiones individuales', l: 'Fijadas con la familia, el día que más le acomode.' }
    ],
    cells: [
      { h3: 'Un solo mentor', p: 'Acompaña a su hijo del inicio al final del curso.' },
      { h3: 'Inglés con pausas', p: 'Frases claras y tiempo para que el niño responda.' },
      { h3: 'El niño escribe', p: 'El mentor pregunta; el código lo teclea su hijo.' },
      { h3: 'Proyectos por etapa', p: 'Cada tramo termina con algo que mostrar en casa.' },
      { h3: 'Informes breves', p: 'Unas líneas para usted sobre lo hecho y lo que viene.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte chicos de edad similar, o su hijo a solas.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'De una función que cuenta páginas a una aplicación completa hay un camino largo, y algunos alumnos ya lo recorrieron. Estos son algunos de sus trabajos; en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés, hay más.',
  reviewsLede: 'Lo que familias y alumnos de varios países escribieron en Google, sin traducir del inglés.',

  fees: {
    h2: 'Precios para familias de San Luis',
    lede: 'Mostramos la cuota mensual en dólares estadounidenses y la cobramos con tarjeta. Su banco convierte el monto el día del cargo; por eso lo que vea en su estado de cuenta puede variar ligeramente según el tipo de cambio.',
    free: ['Sesión de prueba gratuita y en directo', 'El mentor sugiere el punto de partida', 'Sin tarjeta, sin compromiso'],
    group: ['Quince a veinte chicos de edad parecida', 'Un mismo mentor durante el curso', 'Dos sesiones en directo por semana', 'Pago mensual, sin permanencia'],
    one: ['Solo su hijo y su mentor', 'Temas y ritmo a medida', 'Horario acordado con la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en San Luis: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Enseñamos en inglés, en directo, en todas las sesiones, y lo planteamos como una ventaja: su hijo programa y practica el idioma al mismo tiempo, sin sumar otra actividad. El mentor habla con calma, reformula lo que no se entiende y usa la pantalla para mostrarlo. La ciudad de Lima tiene 555 puntos en el EF EPI 2025, en la banda alta, y esa base se aprovecha en cada clase.' },
      { q: '¿Esta página es para San Luis de Lima o de Cañete?', a: 'Para el distrito de San Luis en Lima Metropolitana, que limita con La Victoria, San Borja, Ate y El Agustino. Las clases son las mismas en cualquier lugar del Perú, pero las cifras del censo que mostramos aquí son solo del San Luis limeño.' },
      { q: '¿Cuántos niños viven en San Luis?', a: 'Los Censos Nacionales 2025 del INEI registran en San Luis 3,863 niños censados de 6 a 11 años y 4,333 adolescentes de 12 a 17, sobre 61,773 habitantes. Edad por edad, entre los 6 y los 12 años hay entre 554 y 704 niños.' },
      { q: '¿Desde qué edad puede empezar?', a: 'Desde los 6 años, en 1° de primaria. Empezamos con bloques e historias animadas; hacia 4° o 5° grado la mayoría ya puede escribir Python.' },
      { q: '¿Qué equipo necesitamos en casa?', a: 'Una laptop o PC con teclado, cámara y micrófono, y una conexión estable. En San Luis el 52.1 % de los hogares tiene laptop y el 63.8 % internet fijo, según el censo de 2025. Un celular no alcanza para programar.' },
      { q: '¿A qué hora se conecta mi hijo?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como en la India son diez horas y media más que en Perú todo el año, una sesión a las 11:00 a. m. en San Luis es a las 9:30 p. m. para el mentor.' },
      { q: '¿Las clases ayudan con la lectura?', a: 'Indirectamente, sí. Para programar hay que leer cada línea con cuidado y explicar lo que hace. No somos un taller de lectura ni de comprensión lectora, pero el hábito de leer con atención se entrena en cada sesión.' },
      { q: '¿Cómo se paga?', a: 'Mes a mes, con tarjeta y en dólares estadounidenses; el banco hace la conversión. La sesión de prueba es gratis y no pide datos de pago.' },
      { q: '¿Tienen relación con la municipalidad o con el colegio?', a: 'No. No estamos vinculados a la Municipalidad de San Luis, a la UGEL, al MINEDU ni a ningún colegio, y no damos notas escolares. Al completar un curso, su hijo recibe un certificado de finalización de Modern Age Coders, el único que entregamos.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más para leer',
    h2: 'Otras páginas para familias de San Luis',
    lede: 'En castellano y en inglés, para comparar y decidir con calma.',
    items: [
      { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación', p: 'Por qué aprender a programar en inglés también es practicar el idioma.' },
      { href: '/vacaciones-utiles-de-programacion-san-borja-lima', label: 'Vacaciones útiles en San Borja', p: 'Un plan de verano para el distrito vecino.' },
      { href: '/programacion-para-ninos-de-10-anos', label: 'Programación a los 10 años', p: 'Qué puede aprender un chico de 5° de primaria.' },
      { href: '/inteligencia-artificial-para-ninos-de-primaria', label: 'IA para niños de primaria', p: 'Inteligencia artificial explicada con cuidado para chicos.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página nacional, en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'El método, sesión por sesión, en inglés.' }
    ]
  },

  start: {
    h2: 'Reserve una sesión gratis desde San Luis',
    lede: 'La sesión de prueba dura lo que una clase normal. El mentor saluda en un inglés fácil, le pide a su hijo leer y cambiar un programa corto, y observa cómo razona. Con eso le sugerimos un curso y un formato, sin compromiso.',
    readFirst: 'Si quiere informarse antes, en inglés: el método en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y todo el catálogo en <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Las sesiones son siempre en directo y en inglés, con mentores que viven en la India. Para escribirnos por WhatsApp puede usar el castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/block-coding-app-development-masterclass', label: 'Mi primera app' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'La IA explicada' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación' },
        { href: '/programacion-para-ninos-de-10-anos', label: 'Programación a los 10 años' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Devolver, no solo mostrar'
  },

  personalityCss: `
.ag-root.ag-pnsl .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-pnsl .ag-capsule { border-left-width: 5px; }
.ag-root.ag-pnsl .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnsl .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pnsl .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de Lima Metropolitana (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for San Luis; Municipalidad Distrital de San Luis - Lima notes on gob.pe of 1 April 2024, 19 June 2024 and 28 April 2025; MINEDU Edades normativas; EF EPI 2025; tzdata and INACAL. The example, the starting suggestions and the milestones are our own.',
    localProject: 'A reading-themed lesson for a child of 10 to 12 in San Luis, whose municipality promotes reading: pages_left_print prints 75 and hands back None (a is None), pages_left returns 75 (b is 75), and only the returning version can be added: Pages left this week: 75. Run with python3 -I. Lesson family: print versus return.',
    requiredMentions: ['a is None', 'Who gets the answer?', 'ubicada en el jirón La Capea N° 180 de la urbanización Villa Jardín', '6,326 figuran como omitidos, el 10.2 % del total', 'Censados en San Luis', 'Devolver, no solo mostrar', '¿Para qué una clase en línea si San Borja está al lado?', '8,732 tienen laptop', 'Pages left this week: 75'],
    sources: [
      { claim: 'San Luis (Lima) 61,773 inhabitants, censada 55,447, omitida 6,326, 3,863 aged 6 to 11, 4,333 aged 12 to 17, single ages 6 to 12; neighbours La Victoria, San Borja, Ate, El Agustino.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'San Luis households 16,762: laptop 8,732, computer 5,826, tablet 4,235, fixed internet 10,693, mobile internet 13,433.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'Biblioteca Municipal Ciro Alegría, jirón La Capea 180, Villa Jardín, Monday to Friday 8 to 5 (19 June 2024).', url: 'https://www.gob.pe/institucion/munisanluis-lima/noticias/974675' },
      { claim: 'Itinerant library in the parks to encourage children to read (1 April 2024).', url: 'https://www.gob.pe/institucion/munisanluis-lima/noticias/971277' },
      { claim: 'Itinerant library and puppet show to promote reading among young children (28 April 2025).', url: 'https://www.gob.pe/institucion/munisanluis-lima/noticias/1163499' },
      { claim: 'Normative age at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima city 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'School names in the municipal library notes: left out; no school is named.',
      'Any link between our classes and the municipal library: refused; the page says we have no relation with it.',
      'Reading-comprehension or school-grade results from our classes: refused; the FAQ says we are not a reading workshop.',
      'Income, class or strata readings of the household equipment figures: refused.',
      'Traffic or commute figures to San Borja or La Victoria: none used.',
      'Correcting census age counts for the omitted population: refused; shown as INEI publishes them, with the omission explained.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};

// SHIP: district | Ate, Peru's third district: coding at home all year, after the library's computer room | run-length encoding: squeeze a pixel row, and a row the method makes longer
'use strict';
// Clases de programación para niños en Ate (ag- Spanish district door, Peru cluster row PE199, P6, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Ate (Vitarte, Salamanca, Huaycán and the rest of the district) searching "clases de programación
// para niños Ate" during the school year. Spine: Ate is the third most populous district in Peru (INEI Censos 2025); the
// census age groups and single ages; what the municipality says about its public libraries and their computer room
// (gob.pe); choosing a first language by age; academy across the Carretera Central or a class at home (no traffic
// figures); Lima connectivity and children's internet use (INEI ENAHO II trimestre 2026); one original Python lesson;
// adolescentes; Peru to India clock in prose. No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-ate-lima/,
// fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from saved raw files; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx), CUADRO N°1:
//    "DISTRITO ATE | 702531 | 347024 | 355507 | 668628 | 329585 | 339043 | 33903"; "LIMA METROPOLITANA | 10141775"; CUADRO
//    N°3: "DISTRITO ATE | 668628 | 44022 | 62963 | 64910 | 132959 | 169433 | 114498 | 79843", "LIMA METROPOLITANA | 9600043
//    | 555239 | 818096 | 867253 | 1800348"; CUADRO N°2 single ages for Ate: 6 años 9140, 7 años 9833, 8 años 10690, 9 años
//    10972, 10 años 11261, 11 años 11067, 12 años 11185.
//  INEI national workbook (ind_00) CUADRO N° 1: 1,893 district rows; our sort puts Ate (702531) third, after San Juan de
//    Lurigancho (1176422) and San Martín de Porres (764012).
//  Municipalidad Distrital de Ate on gob.pe (officials' and guests' names left out on purpose):
//    noticias/834977 (15 September 2023): "con el área de Bibliotecas Públicas Municipales, realizan la Tercera Feria del
//    Libro"; "Participan más de 20 librerías, grupos editoriales, en su mayoría de Ate"; "del el 15 al el 24 de setiembre";
//    "alberga aproximadamente un promedio de 1,000 beneficiarios por mes, quienes en su mayoría son estudiantes de los niveles
//    pre escolar, primaria, secundaria"; "servicio de sala de lectura, material bibliográfico y sala de cómputo".
//    noticias/1290626 (22 October 2025): "un módulo bibliotecario"; "un plan para fomentar el deporte y la recreación en los
//    colegios públicos" (school names left out: never name a school as a source of students).
//  INEI, TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el mayor nivel de uso de Internet se registró en Lima
//    Metropolitana, con un 92,4%"; "en Lima Metropolitana, con un aumento de 4,6 puntos porcentuales"; "en Lima
//    Metropolitana, el 84,7% de los hogares disponía del servicio"; "el uso de Internet fue menor entre los niños de 6 a 11
//    años (68,2%)"; "el de 12 a 18 años con un 92,5%"; national figures labelled national.
//  MINEDU Edades normativas (as in the pilot): edad normativa al 31 de marzo.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, high band from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 702531 / 10141775 = 6.9 %; 62963 / 818096 = 7.7 % of Lima's censused 6 to 11;
//    64910 / 867253 = 7.5 % of Lima's censused 12 to 17; 62963 / 668628 = 9.4 %; 33903 / 702531 = 4.8 % omitted.
// Our own example (ate_rle.py in the src-pages folder), run with python3 -I, exact output:
//    WWWWBBBW -> 4W3B1W | 8 letters become 6 / BBBBBBBB -> 8B | 8 letters become 2 / WBWBWB -> 1W1B1W1B1W1B | 6 letters become 12
// Neighbouring districts named in plain text only (Santa Anita, El Agustino, La Molina, Lurigancho, Chaclacayo).
// Lesson family: run-length encoding; a loop that counts repeats, and the input where "compressing" doubles the length.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def squeeze(row):',
  "    out = ''",
  '    count = 1',
  '    for i in range(1, len(row) + 1):',
  '        if i < len(row) and row[i] == row[i - 1]:',
  '            count = count + 1',
  '        else:',
  '            out = out + str(count) + row[i - 1]',
  '            count = 1',
  '    return out',
  '',
  "for row in ['WWWWBBBW', 'BBBBBBBB', 'WBWBWB']:",
  '    short = squeeze(row)',
  "    print(row, '->', short, '|', len(row), 'letters become', len(short))"
].join('\n');

const OUT = [
  'WWWWBBBW -> 4W3B1W | 8 letters become 6',
  'BBBBBBBB -> 8B | 8 letters become 2',
  'WBWBWB -> 1W1B1W1B1W1B | 6 letters become 12'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Ate' },
  slug: 'clases-de-programacion-para-ninos-ate-lima',
  code: 'prat',
  accent: '#0C665A',
  accentRationale: 'Ate: a teal green #0C665A, cooler than the other Lima district greens, a nod to the river valley that runs east from the district toward Chaclacayo; allocated in alloc.tsv (contrast 5.56 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Ate',
  title: 'Clases de programación para niños en Ate, Lima',
  description: 'Clases de programación para niños de 6 a 12 años en Ate, Lima: en vivo, en línea y en inglés, desde casa, en grupo o a solas con un mentor y en su horario.',
  ogDescription: 'Programación para niños de Ate sin cruzar la Carretera Central: el censo 2025 del distrito por edades, sus bibliotecas municipales y un reto de Python con píxeles.',
  twitterDescription: 'Clases de programación para niños de Ate, en vivo y en inglés, sin salir de casa y a cualquier hora.',
  pageName: 'Clases de programación para niños en Ate',
  webPageDescription: 'Guía para familias de Ate que buscan clases de programación para sus hijos durante el año escolar: población del distrito por grupos de edad y por edad simple según los Censos Nacionales 2025 del INEI, lo que la municipalidad publicó sobre sus bibliotecas públicas, el uso de internet en Lima según el INEI y un ejercicio de Python escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Ate, con cursos propios para adolescentes, dictadas solo en inglés: Scratch, Python, juegos y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Ate',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#cifras', label: 'Cifras' },
    { href: '#biblioteca', label: 'Bibliotecas' },
    { href: '#empezar', label: 'Primer lenguaje' },
    { href: '#pixeles', label: 'Reto' },
    { href: '#reloj', label: 'Reloj' }
  ],
  eyebrow: 'Lima Este &middot; Ate &middot; Primaria y secundaria',
  h1: 'Clases de programación para niños en Ate',
  lede: 'En Ate vive más gente que en casi cualquier distrito del Perú, desde Salamanca hasta Huaycán. Para las familias que quieren que su hijo aprenda a programar sin sumar viajes por la Carretera Central, esta guía reúne lo que dice el censo, lo que ofrece el municipio, cómo elegir el primer lenguaje y qué pasa dentro de una clase en vivo con un mentor que enseña en inglés.',
  secondaryCta: { href: '#pixeles', label: 'Ver el reto de los píxeles' },
  wa: 'Hola Modern Age Coders, somos una familia de Ate y queremos clases de programación para nuestro hijo o hija. ¿Podemos reservar la clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 alumnos en distintos países &middot; un mentor fijo que conversa en inglés con su hijo',
  spec: [
    ['Para quién', 'Niños de 6 a 12 años y adolescentes de secundaria'],
    ['Desde dónde', 'Cualquier zona de Ate, por videollamada'],
    ['Lenguajes', 'Scratch, Python, Luau (Roblox) y web'],
    ['Formato', 'Aula de quince a veinte, o una clase individual'],
    ['Idioma', 'Inglés, despacio y con apoyo visual'],
    ['Prueba', 'Una clase sin costo ni tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Sí, hay clases de programación para niños de Ate que no exigen salir del distrito: Modern Age Coders las dicta en vivo, en línea y en inglés para chicos de 6 a 12 años, y tiene cursos aparte para adolescentes. Su hijo trabaja en su propia computadora mientras un mentor desde la India lo guía por videollamada, con frases claras y a su paso. Scratch para empezar, luego Python, Roblox y proyectos de IA. La familia decide si es en grupo o individual, qué día y a qué hora, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Tres comienzos',
    h2: '¿Con qué curso arranca un niño de Ate?',
    lede: 'Según la edad y según lo que más lo entusiasma: dibujar, escribir o construir dentro de un videojuego.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PRAT / 01', title: 'Bloques para los más chicos', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para 1° a 3° de primaria. Historias animadas, juegos sencillos y una primera app armadas con bloques de colores, con muy poco texto que leer.' },
      { course: 'python-ai-kids-masterclass', code: 'PRAT / 02', title: 'Primer código escrito', alt: 'Imagen del curso de Python e IA para niños', note: 'Para quienes ya pasaron 3° de primaria. Python con dibujos, pequeños juegos de adivinanzas y ejercicios como el de los píxeles de esta página.' },
      { course: 'game-development-masterclass-for-kids', code: 'PRAT / 03', title: 'Crear videojuegos', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'Para el niño que pasa horas jugando y quiere estar del otro lado. Scratch, Roblox y Minecraft en un solo recorrido, siempre construyendo.' }
    ]
  },

  sections: [
    {
      id: 'cifras',
      eyebrow: 'Ate en números',
      h2: '¿Cuántos niños y adolescentes registra el censo en Ate?',
      lede: 'Los Censos Nacionales 2025 le dan a Ate 702,531 habitantes, el tercer distrito más poblado del país. Entre la gente censada hay 62,963 niños de 6 a 11 años y 64,910 chicos y chicas de 12 a 17.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Ate por grupos de edad frente a Lima Metropolitana (población censada, 2025)', head: ['Grupo de edad', 'Ate', 'Lima Metropolitana', 'Parte de Ate (cálculo nuestro)'], rows: [
          ['0 a 5 años', '44,022', '555,239', '7,9 %'],
          ['6 a 11 años', '62,963', '818,096', '7,7 %'],
          ['12 a 17 años', '64,910', '867,253', '7,5 %'],
          ['18 a 29 años', '132,959', '1,800,348', '7,4 %'],
          ['Todas las edades', '668,628', '9,600,043', '7,0 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, indicadores demográficos por distrito para Lima Metropolitana, cuadro 3 (población censada por grupo de edad); archivo oficial bajado el 10 de noviembre de 2026. La última columna la calculamos nosotros dividiendo la cifra de Ate entre la de Lima.' },
        { kind: 'two', mt: true,
          leftH3: 'Tercero entre 1,893 distritos',
          left: [
            'El total de 702,531 suma a los 668,628 censados y a 33,903 personas que el INEI estimó como omitidas. En el cuadro nacional, ordenado por nosotros, solo San Juan de Lurigancho y San Martín de Porres tienen más habitantes.',
            'Ate concentra el 6,9 % de la población de Lima Metropolitana según nuestra cuenta, pero su parte de niños de 6 a 11 años es algo mayor, el 7,7 %.'
          ],
          rightH3: 'Edades, no suposiciones',
          right: [
            'Que Ate tenga una parte de niños un poco más alta que su parte de población solo describe su pirámide de edades. No dice cómo vive nadie ni qué puede o no puede pagar una familia, y no lo usamos para eso.',
            'Lo útil para usted es otra cosa: con tantos chicos en edad escolar, los cupos presenciales cerca de casa se llenan, y una clase en línea no tiene ese límite.'
          ] }
      ]
    },
    {
      id: 'biblioteca',
      eyebrow: 'Lo que ofrece el municipio',
      h2: '¿Qué ofrecen las bibliotecas municipales de Ate a los escolares?',
      lede: 'Según la Municipalidad de Ate, su área de Bibliotecas Públicas Municipales atendía en 2023 a un promedio de alrededor de 1,000 personas al mes, en su mayoría estudiantes, con sala de lectura, material bibliográfico y sala de cómputo.',
      body: [
        { kind: 'p', html: 'El dato aparece en una nota que la municipalidad publicó en gob.pe el 15 de septiembre de 2023, al inaugurar la Tercera Feria del Libro organizada por esa misma área de bibliotecas, con más de 20 librerías y grupos editoriales, la mayoría del propio distrito, y actividades culturales del 15 al 24 de septiembre. La nota describe a los usuarios de las bibliotecas como estudiantes de inicial, primaria, secundaria, academias preuniversitarias, universidades e institutos, además de profesionales.' },
        { kind: 'p', html: 'En octubre de 2025 la municipalidad informó en la misma plataforma que entregó un módulo bibliotecario a un colegio del distrito y que tiene un plan para fomentar el deporte y la recreación en los colegios públicos. Son noticias de todo el año escolar, no solo del verano, y muestran que en Ate la lectura y el estudio tienen un lugar propio fuera del aula.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'La sala de cómputo', p: 'Sirve para hacer tareas, buscar información y practicar con el teclado. Es un buen primer contacto con una computadora para un niño que no tiene una en casa.' },
          { h3: 'La clase en vivo', p: 'Necesita otra cosa: cámara, micrófono, audífonos y un lugar tranquilo para hablar con el mentor durante una hora. Por eso la recomendamos desde la casa.' },
          { h3: 'Ningún vínculo', p: 'No tenemos relación con la Municipalidad de Ate ni con sus bibliotecas. Las citamos porque son un recurso público del distrito que vale la pena aprovechar.' }
        ] },
        { kind: 'p', mt: true, html: 'Una combinación que funciona: el niño programa dos veces por semana desde casa y, cuando visita la biblioteca, busca un libro sobre el tema de su proyecto. Un chico que está armando un juego de naves va a leer con otros ojos un libro sobre el espacio.' }
      ]
    },
    {
      id: 'empezar',
      eyebrow: 'Primer lenguaje',
      h2: '¿Con qué lenguaje debería empezar un niño de Ate?',
      lede: 'Depende de la edad más que del talento. A los 6 o 7 años, bloques; entre los 8 y los 9, el paso a escribir; desde los 10, Python con estructuras de datos. El censo muestra cuántos niños hay en cada uno de esos escalones en Ate.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Niños censados en Ate por edad simple y la herramienta con la que solemos empezar', head: ['Edad', 'Niños censados en Ate', 'Grado aproximado', 'Herramienta inicial (nuestra)'], rows: [
          ['6', '9,140', '1° de primaria', 'Bloques grandes y personajes'],
          ['7', '9,833', '2° de primaria', 'Scratch con eventos y sonidos'],
          ['8', '10,690', '3° de primaria', 'Scratch con variables y puntaje'],
          ['9', '10,972', '4° de primaria', 'Python: imprimir, preguntar, decidir'],
          ['10', '11,261', '5° de primaria', 'Python con bucles y cadenas de texto'],
          ['11', '11,067', '6° de primaria', 'Python con funciones, como el reto de píxeles'],
          ['12', '11,185', '1° de secundaria', 'Python, web o Roblox con proyectos propios']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, Censos Nacionales 2025, cuadro 2 (edades simples) del libro de Lima Metropolitana; MINEDU, "Edades normativas", que fija la edad de cada grado al 31 de marzo. Como el censo registra la edad del día de la visita, el grado es una aproximación. La cuarta columna es nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Si su hijo tiene 10 años',
          left: [
            'Es la edad con más niños censados en Ate, 11,261, y también la edad que más nos consultan. A los 10 casi todos leen con fluidez y pueden escribir líneas de código sin frustrarse, así que no hace falta pasar meses con bloques.',
            'Nuestra guía de <a class="ag-inline-link" href="/programacion-para-ninos-de-10-anos">programación para niños de 10 años</a> explica ese momento con más detalle, con su propio ejercicio.'
          ],
          rightH3: 'Si su hijo tiene 6 u 7',
          right: [
            'Primero se aprende a dar órdenes en secuencia: mover un gato tres pasos, girar, saltar. Las palabras en inglés llegan pegadas a una acción en la pantalla, y así se recuerdan solas.',
            'No se preocupe si al principio solo quiere cambiar colores y sonidos: también es programar, y el mentor va subiendo la dificultad de a poco.'
          ] }
      ]
    },
    {
      id: 'traslado',
      eyebrow: 'Academia o casa',
      h2: '¿Conviene más una academia presencial o una clase desde casa?',
      lede: 'Para un niño de primaria en Ate, la clase desde casa suele ganar por una razón simple: no hay trayecto. La hora de clase es hora de programar, no de esperar transporte.',
      body: [
        { kind: 'p', html: 'Ate limita con Santa Anita, El Agustino, La Molina, Lurigancho y Chaclacayo, y buena parte de su gente se mueve por la Carretera Central o por la avenida Javier Prado. No publicamos tiempos de viaje porque no tenemos una fuente que los respalde; el recorrido lo conoce usted de memoria. Lo que sí podemos afirmar es que la clase en línea no depende de la hora punta ni de quién pueda acompañar al niño ese día.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Internet en la capital y por edades, según el INEI (abril a junio de 2026)', head: ['Indicador', 'Valor', 'Ámbito'], rows: [
          ['Personas de 6 años o más que usaron internet', '92,4 %', 'Lima Metropolitana'],
          ['Aumento de ese uso frente a 2025', '4,6 puntos', 'Lima Metropolitana'],
          ['Hogares con servicio de internet', '84,7 %', 'Lima Metropolitana'],
          ['Niños de 6 a 11 años que usaron internet', '68,2 %', 'Todo el país'],
          ['Chicos de 12 a 18 años que usaron internet', '92,5 %', 'Todo el país']
        ] },
        { kind: 'source', html: 'Fuente: INEI, informe técnico de tecnologías de la información en los hogares del segundo trimestre de 2026 (ENAHO, cifras preliminares), consultado el 10 de noviembre de 2026. Lima Metropolitana incluye al Callao. El INEI no desagrega por distrito ni publica el dato por edades solo para Lima.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dicen los porcentajes',
          left: [
            'En todo el país, menos de siete de cada diez niños de 6 a 11 años usaron internet en ese trimestre, frente a más de nueve de cada diez adolescentes. Para muchos chicos de primaria, una clase de programación es la primera vez que usan la computadora para crear y no solo para mirar.',
            'En Lima el acceso es más alto: el 84,7 % de los hogares tiene el servicio contratado.'
          ],
          rightH3: 'Lo que pide la clase',
          right: [
            'Un equipo con teclado, una cámara que funcione y un micrófono, más audífonos para escuchar bien al mentor. Los programas son gratuitos y se instalan juntos en la primera sesión.',
            'Si hay hermanos, cada uno puede tener su clase a una hora distinta con la misma máquina.'
          ] },
        { kind: 'p', mt: true, html: 'Si su familia está cerca del límite con La Molina, también le puede servir nuestra página de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-la-molina-lima">vacaciones útiles de programación en La Molina</a>, pensada para el verano; las clases son las mismas y continúan sin cambio en marzo.' }
      ]
    },
    {
      id: 'pixeles',
      tint: 'tint',
      eyebrow: 'Una clase por dentro',
      h2: '¿Qué aprende un niño de 11 años en una clase real de Python?',
      lede: 'Por ejemplo, a guardar una imagen con menos letras. El ejercicio es nuestro: una fila de píxeles de un personaje se escribe con W para blanco y B para negro, y la función cuenta cuántas veces seguidas se repite cada color para resumirla.',
      body: [
        { kind: 'code', label: 'Resumir una fila de píxeles', lang: 'Python', code: PY, note: 'Antes de correrlo, el mentor tapa la salida y pregunta: "How many letters will WBWBWB need after we squeeze it?" Casi todos responden que menos de seis.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Así salió al ejecutar el archivo en nuestra máquina con Python 3, sin editar nada. La última fila sorprende: el resumen ocupa el doble.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar lo que se repite.</strong> El bucle recorre la fila y suma 1 a <code>count</code> mientras el color de ahora sea igual al anterior. Cuando cambia, anota el número y la letra, y vuelve a contar desde 1.',
          '<strong>Un caso que sale bien.</strong> <code>BBBBBBBB</code>, ocho píxeles negros, se resume en <code>8B</code>: dos letras en vez de ocho. Así guardan algunas imágenes los formatos sencillos de computadora.',
          '<strong>Un caso que sale mal.</strong> En <code>WBWBWB</code> ningún color se repite, así que cada píxel se convierte en dos caracteres: <code>1W1B1W1B1W1B</code>, doce en total. Comprimir no siempre achica.',
          '<strong>Decirlo en inglés.</strong> El mentor pide una frase entera: "Squeezing works when colours repeat, and it fails when they keep changing." El niño la arma a su manera.',
          '<strong>Su propio dibujo.</strong> El reto para la semana: diseñar en papel una fila de un personaje propio, predecir cuántas letras tendrá el resumen y comprobarlo cambiando la lista.'
        ] },
        { kind: 'p', mt: true, html: 'El aprendizaje real no es la compresión. Es entender que un método que funciona en un ejemplo puede fallar en otro, y que la forma de saberlo es buscar a propósito el caso incómodo. Un niño con ese hábito no acepta sin revisar lo que le responde un buscador o una herramienta de IA.' }
      ]
    },
    {
      id: 'idioma',
      eyebrow: 'En inglés',
      h2: '¿Cómo sigue un niño de Ate una clase dictada en inglés?',
      lede: 'Con apoyo constante. Nadie le pide a su hijo que llegue hablando: el mentor muestra en la pantalla lo que dice, usa frases cortas y celebra cada intento de responder en inglés, aunque venga mezclado con castellano.',
      body: [
        { kind: 'p', html: 'La programación ayuda a que el idioma entre más fácil, porque cada palabra nueva tiene un efecto visible. Si el niño escribe <code>print</code>, algo aparece; si escribe <code>repeat</code> en Scratch, algo se repite. Después de unas semanas, muchas familias notan que su hijo usa en casa frases de la clase sin darse cuenta.' },
        { kind: 'p', html: 'El EF EPI 2025, el índice anual de inglés de EF Education First, ubica a Lima en el nivel alto con 555 puntos, mientras el Perú en conjunto queda en nivel moderado. Ese índice se construye con adultos que rinden la prueba de EF, no con niños; lo citamos porque muestra que en la capital el inglés ya pesa en estudios y trabajos, y que empezar a hablarlo de niño es una ventaja concreta.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Adolescentes',
      h2: '¿Qué pueden aprender los adolescentes de Ate?',
      lede: 'Mucho más que bloques. El censo registró en Ate 64,910 adolescentes de 12 a 17 años, la edad de la secundaria, y para ellos tenemos cursos con otro ritmo y otros proyectos.',
      body: [
        { kind: 'p', html: 'Un chico de 2° o 3° de secundaria puede aprender Python a fondo, construir páginas web con JavaScript, empezar con Java o trabajar con datos y modelos de inteligencia artificial. El mentor lo trata como a alguien capaz de planificar su propio proyecto, y la conversación en inglés sube de nivel con él.' },
        { kind: 'p', html: 'Algunas herramientas de IA piden una edad mínima o el permiso de los padres para menores de 18. En nuestras clases respetamos esas condiciones y usamos la IA para pensar el problema con más claridad, nunca para que el chico entregue algo que no entiende. Si quiere ver la oferta completa en un solo lugar, las <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online en Perú</a> reúnen el camino de primaria a secundaria.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario',
      h2: '¿A qué hora se conecta un niño de Ate si el mentor está en la India?',
      lede: 'A la que la familia escoja. La India tiene diez horas y media de ventaja sobre Perú en cualquier mes, porque ninguno de los dos países adelanta o atrasa el reloj.',
      body: [
        { kind: 'p', html: 'Perú se rige por UTC-5 sin horario de verano desde 1994, y la India por UTC+5:30. Para que vea cómo funciona la cuenta: una clase a las 7:00 de la mañana en Ate corresponde a las 5:30 de la tarde para el mentor; una a las 6:30 de la tarde en Ate cae a las 5:00 de la madrugada siguiente en la India. Ninguna de esas horas está reservada de antemano; son ejemplos de conversión.' },
        { kind: 'p', html: 'Cuando reserve la clase gratis, el sistema le mostrará los horarios en la hora de Perú. Muchas familias de Ate eligen según el turno del colegio: quien estudia en la tarde aprovecha la mañana, y quien estudia en la mañana programa al caer la tarde o los fines de semana.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Qué señales muestran que su hijo progresa?',
    lede: 'Cuatro etapas nuestras, de la primera clase al primer proyecto propio.',
    table: { caption: 'Cuatro etapas de un niño que aprende a programar (nuestras)', head: ['Etapa', 'Qué hace en clase', 'Qué le puede mostrar en casa'], rows: [
      ['1. Da órdenes', 'Arma secuencias para que un personaje llegue a una meta', 'Un personaje que se mueve como él quiere'],
      ['2. Encuentra patrones', 'Usa bucles cuando algo se repite, como en el reto de píxeles', 'Un dibujo o un juego más corto de escribir'],
      ['3. Prueba lo raro', 'Busca el caso que rompe su programa antes de darlo por terminado', 'Un error que descubrió y arregló'],
      ['4. Construye y explica', 'Termina un proyecto y lo presenta en inglés', 'La presentación, repetida para la familia']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pregunte a su hijo qué hizo, no cuánto tiempo estuvo conectado. Si sabe contarlo, aprendió.',
      'Las semanas de bloqueo son parte del proceso, sobre todo al pasar de bloques a escribir.'
    ] },
    right: { h3: 'Para el alumno', ps: [
      'Busque siempre un caso que pueda fallar: ahí está lo interesante.',
      'Cuando el programa haga algo raro, lea la línea donde se detuvo antes de cambiar nada.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: '¿Qué más pueden estudiar los chicos de Ate con nosotros?',
    lede: 'Nueve cursos más, todos en vivo y en inglés, en grupo o en clase individual.',
    bands: [
      { num: 'I', h3: 'Primeros años', sub: 'De 6 a 9 años', courses: [
        { code: 'PRAT / INI / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Tres meses para pasar de cero a juegos terminados.' },
        { code: 'PRAT / INI / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco y cálculo mental', blurb: 'Cuentas rápidas con cuentas de verdad, paso a paso.' },
        { code: 'PRAT / INI / 03', slug: 'minecraft-coding-for-kids-course', title: 'Código en Minecraft', blurb: 'Automatizar construcciones en un mundo que ya conocen.' }
      ] },
      { num: 'II', h3: 'Crear y entender', sub: 'De 8 a 12 años', courses: [
        { code: 'PRAT / CREAR / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Juegos propios publicados dentro de Roblox Studio.' },
        { code: 'PRAT / CREAR / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ para chicos', blurb: 'Un lenguaje exigente, enseñado con acertijos y juegos.' },
        { code: 'PRAT / CREAR / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Crear con ayuda de IA', blurb: 'Juegos hechos con IA, revisando cada paso que propone.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PRAT / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python a fondo', blurb: 'Funciones, archivos y proyectos de tamaño real.' },
        { code: 'PRAT / SEC / 02', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Tablas, gráficos y un primer modelo que aprende.' },
        { code: 'PRAT / SEC / 03', slug: 'frontend-development-masterclass-for-teens', title: 'Diseño de páginas web', blurb: 'De CSS bien hecho a interfaces en React.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'La clase',
    h2: '¿Cómo funcionan las clases en vivo para familias de Ate?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes de salir al colegio del turno tarde.' },
      { time: 'Al volver a casa', l: 'Con el almuerzo hecho y la mochila ya guardada.' },
      { time: 'Sábado o domingo', l: 'Cuando la semana no deja espacio libre.' }
    ],
    cells: [
      { h3: 'Mentor estable', p: 'No cambia de profesor a mitad de curso; lo conoce y lo sigue.' },
      { h3: 'Código propio', p: 'El niño teclea y corrige; el mentor pregunta y sugiere.' },
      { h3: 'Tarea pensada', p: 'Un ejercicio breve entre clases que no se resuelve copiando.' },
      { h3: 'Noticias a casa', p: 'Un mensaje corto con lo trabajado y el próximo paso.' },
      { h3: 'Mes a mes', p: 'Sin contrato anual: continúa o se detiene cuando ustedes decidan.' },
      { h3: 'Dos modalidades', p: 'Aula con quince a veinte compañeros de su edad, o clase a solas.' }
    ]
  },

  projectsH2: 'Trabajos de alumnos que empezaron desde cero',
  projectsLede: 'Lo que construye un niño los primeros meses es el comienzo; estos proyectos muestran hacia dónde puede crecer. Más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Opiniones de familias y alumnos publicadas en Google, en el inglés en que las escribieron.',

  fees: {
    h2: '¿Cuánto pagaría una familia de Ate?',
    lede: 'Debajo verá la mensualidad expresada en dólares de Estados Unidos. Se cobra con tarjeta, y es el banco que la emitió el que hace el cambio a su moneda, por lo que el cargo final puede variar unos céntimos según el día.',
    free: ['Una sesión de prueba entera', 'Recomendación del punto de partida', 'Sin datos de tarjeta'],
    group: ['Quince a veinte niños de edad similar', 'Un mentor de inicio a fin', 'Dos clases en vivo a la semana', 'Pago mensual que se puede suspender'],
    one: ['Solo su hijo con el mentor', 'Contenidos según lo que necesita', 'Días y horas que fija la familia']
  },

  faq: {
    eyebrow: 'Dudas frecuentes',
    h2: 'Programación para niños en Ate: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Cada clase se da en inglés, en vivo y por videollamada, y eso es lo que muchas familias de Ate están buscando: una hora en la que su hijo aprende a programar mientras practica un idioma que le abrirá puertas. El mentor habla despacio y se adapta al paso del niño. Según el EF EPI 2025, Lima ya tiene un inglés de nivel alto, con 555 puntos.' },
      { q: '¿Hay que viajar a algún local?', a: 'No. Modern Age Coders no tiene sede en Ate ni en el resto del Perú: su hijo se conecta desde casa y el mentor lo acompaña desde la India por videollamada.' },
      { q: '¿Cuántos niños de primaria hay en Ate?', a: 'El censo de 2025 del INEI encontró en Ate 62,963 niños de 6 a 11 años entre la población censada, y 64,910 adolescentes de 12 a 17. El distrito tiene 702,531 habitantes en total.' },
      { q: '¿Qué lenguaje aprende primero un niño de 7 años?', a: 'Scratch, con bloques que se encajan para mover personajes y crear historias. Hacia los 9 o 10 años la mayoría puede pasar a escribir Python.' },
      { q: '¿Mi hijo necesita hablar inglés?', a: 'No. Alcanza con que entienda palabras sencillas y tenga ganas de intentarlo. El mentor escribe en pantalla lo importante y vuelve a explicar las veces que haga falta; en pocas semanas el niño sigue el ritmo.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India va diez horas y media adelante de Perú: las 7:00 a. m. en Ate son las 5:30 p. m. para el mentor.' },
      { q: '¿Puede tomar la clase desde una biblioteca?', a: 'No lo recomendamos. La clase pide cámara, micrófono y poder hablar en voz alta durante una hora, y eso se logra con comodidad en casa. La biblioteca sí es un buen lugar para leer sobre el tema del proyecto.' },
      { q: '¿Tienen relación con la Municipalidad de Ate?', a: 'Ninguna. Somos una academia independiente; mencionamos las bibliotecas municipales solo porque la propia municipalidad las describe en gob.pe y son útiles para las familias.' },
      { q: '¿Cómo es el pago?', a: 'Mensual, con tarjeta y en dólares estadounidenses; su banco convierte el importe. La clase de prueba es gratuita y no pide tarjeta.' },
      { q: '¿Recibe un certificado?', a: 'Al completar un curso recibe un certificado de finalización de Modern Age Coders. No es un documento del MINEDU ni vale como nota escolar: no estamos vinculados a ningún colegio ni al sistema educativo.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras guías que le pueden servir',
    lede: 'Algunas están escritas en inglés, como indica su título.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página central para el Perú, con todos los caminos por edad.' },
      { href: '/curso-de-python-para-ninos-peru', label: 'Curso de Python para niños', p: 'Qué se aprende en Python entre los 9 y los 12 años.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Edades mínimas de las herramientas de IA más usadas.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'El método detrás de cada clase en vivo.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, de los 6 años en adelante.' }
    ]
  },

  start: {
    h2: 'Agende la clase gratis desde Ate',
    lede: 'Escoja fecha y hora en el reloj de Perú. El mentor conocerá a su hijo, le pondrá un pequeño desafío de programación y, al terminar, le propondrá a usted el curso y la modalidad que encajan con él.',
    readFirst: 'Antes de decidir puede revisar <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre nuestro método, y <a class="ag-inline-link" href="/courses">All courses</a>, con el catálogo; ambas páginas están en inglés.',
    note: 'Clases en vivo, en línea y en inglés, con mentores que enseñan desde la India. Por WhatsApp atendemos también en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Videojuegos' },
        { href: '/courses', label: 'Catálogo completo' }
      ] },
      { h4: 'Para la familia', links: [
        { href: '/how-we-teach', label: 'Nuestro método' },
        { href: '/ai-tools-age-guide', label: 'IA y edades' },
        { href: '/student-labs', label: 'Proyectos de alumnos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'Busque el caso que rompe el programa'
  },

  personalityCss: `
.ag-root.ag-prat .ag-hero h1 { max-width: 18ch; letter-spacing: -0.015em; }
.ag-root.ag-prat .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-prat .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-prat .ag-table td { padding-top: 0.5rem; }
.ag-root.ag-prat .ag-steps li strong { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de Ate pages on gob.pe (notes of 15 September 2023 and 22 October 2025), EF EPI 2025, tzdata. Read 10 November 2026. Example code, tool-by-age column and stages are our own.',
    localProject: 'Run-length encoding of pixel rows in Python for an 11-year-old: squeeze turns WWWWBBBW into 4W3B1W (8 letters become 6) and BBBBBBBB into 8B, but WBWBWB becomes 1W1B1W1B1W1B (6 letters become 12). Run with python3 -I. Lesson family: run-length encoding, counting repeats in a loop, and the input that makes the "compressed" version longer.',
    requiredMentions: ['8 letters become 6', '6 letters become 12', 'Squeezing works when colours repeat', 'alrededor de 1,000 personas al mes', '62,963 niños de 6 a 11 años', '64,910 adolescentes de 12 a 17', 'Niños censados en Ate', 'Busque el caso que rompe el programa', 'Tercero entre 1,893 distritos'],
    sources: [
      { claim: 'Ate population 702,531 (censada 668,628, omitida 33,903); age groups; single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Ate public libraries: about 1,000 users a month, reading room and computer room; Tercera Feria del Libro 15 to 24 September 2023 with more than 20 booksellers.', url: 'https://www.gob.pe/institucion/muniate/noticias/834977-inauguran-tercera-feria-del-libro-en-real-plaza-puruchuco-para-fomentar-la-lectura-en-nuestra-sociedad' },
      { claim: 'Library module for a school and a plan for sport in public schools (October 2025).', url: 'https://www.gob.pe/institucion/muniate/noticias/1290626-municipio-entrtega-modulo-para-biblioteca-en-colegio-john-f-kennedy-y-losas-renovadas-en-mariscal-toribio-de-luzuriaga-de-salamanca' },
      { claim: 'Internet use 92.4% in Lima (+4.6 points), households with internet 84.7%; national internet use 68.2% at ages 6 to 11 and 92.5% at 12 to 18 (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band; Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any link with the Municipalidad de Ate or its libraries: none; the page says so.',
      'Travel times on the Carretera Central or Javier Prado: refused; no primary source.',
      'Income or class statements about Ate or any of its zones: refused; only census ages and counts.',
      'Naming the schools in the municipal notes: refused (never name a school as a source of students).',
      'Recommending the library computer room for the live class: refused; the class needs camera, microphone and a quiet room.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

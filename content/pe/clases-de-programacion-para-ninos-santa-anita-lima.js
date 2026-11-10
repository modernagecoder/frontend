// SHIP: district (kids, year-round) | Santa Anita: a weekly coding habit at home that runs through every season of the year | functions: print versus return; a function that only prints hands back None
'use strict';
// Clases de programación para niños en Santa Anita, Lima (ag- Spanish district door, Peru cluster row PE212, P6,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Santa Anita whose district runs workshops by season (summer, autumn) and who wants something that
// does not stop when a season ends: one coding class a week at home, all year. Spine: the 2025 census and the district's
// weight in Lima; what the municipality publishes through the year (autumn workshops, primary reinforcement classes, school
// library week, a vocational agreement); why a home class keeps the habit (INEI connectivity, no invented travel figures);
// the first English words a child learns by coding; one original Python lesson on print versus return; age guide with a
// note for adolescentes; clock conversions. No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// santa-anita-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx, 856800 bytes,
//    updated "al 15 de julio del año 2026"). CUADRO Nº 1: "DISTRITO SANTA ANITA | 224675 | 110968 | 113707 | 210411 | ... |
//    14264". CUADRO Nº 3: "DISTRITO SANTA ANITA | 210411 | 12116 | 17635 | 18673 | 42895 | 54002 | 37398 | 27692".
//    CUADRO Nº 2: 6 años 2521, 7 años 2709, 8 años 2990, 9 años 3088, 10 años 3192, 11 años 3135, 12 años 3168; rural 0.
//    Lima Metropolitana: "10141775"; 6 a 11 "818096"; 12 a 17 "867253".
//  Municipalidad Distrital de Santa Anita on gob.pe (institucion/munisantanita):
//    n-923060 (20 Mar 2024): "¡TALLERES OTOÑO 2024!"; "talleres culturales y deportivos"; "Inicio: lunes 25 de marzo del 2024".
//    n-942628 (23 Apr 2024): "clases de reforzamiento matemático y comunicación para estudiantes de primaria"; "inscripciones
//    gratuitas" (styled letters in the raw); "Lugar: Centro Cultural".
//    n-1292624 (17 Nov 2025): "Semana de la Biblioteca Escolar"; "talleres de acrósticos, cuentacuentos, lecturas
//    dramatizadas, truequetón de libros".
//    n-1027489 (24 Sep 2024): agreement with TECSUP to "promover talleres gratuitos de orientación vocacional, charlas
//    informativas, becas y medias becas a jóvenes que destacan en sus estudios". Signatories' names left out.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7%
//    de los hogares disponía del servicio"; "Este porcentaje alcanzó el 53,3% en Lima Metropolitana"; mobile "la mayor
//    incidencia se observó en Lima Metropolitana con 98,1%"; children's mobile use "los niños de 6 a 11 años, con una
//    cobertura de 67,8%" (national).
//  CNEB (FACTS 57, 39): primaria Inglés "2 2 3 3 3 3"; secundaria Inglés "3 3 3 3 3"; no computing area. Edades normativas.
//  EF EPI 2025 (MARKET 1.3): Lima 555 (high from 550).
//  Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 224675 / 10141775 = 2.2 %; 17635 / 818096 = 2.2 %; 18673 / 867253 = 2.2 %;
//    17635 / 210411 = 8.4 %; 18673 / 210411 = 8.9 %; 14264 / 224675 = 6.3 % omitted;
//    2521+2709+2990+3088+3192+3135+3168 = 20803 children aged 6 to 12; 52 weeks x 1 class = 52 classes a year (ours).
// Our own example (devolver.py in the src-pages folder), run with python3 -I, exact output:
//    8 / a is None / b is 8 / b + 1 = 9
// Neighbouring districts named in plain text only (Ate, El Agustino, San Luis).
// Lesson family: functions; print shows a value, return hands it back; a function without return gives None.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def double_print(n):',
  '    print(n * 2)',
  '',
  'def double_return(n):',
  '    return n * 2',
  '',
  'a = double_print(4)',
  'b = double_return(4)',
  "print('a is', a)",
  "print('b is', b)",
  "print('b + 1 =', b + 1)"
].join('\n');

const OUT = [
  '8',
  'a is None',
  'b is 8',
  'b + 1 = 9'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Santa Anita' },
  slug: 'clases-de-programacion-para-ninos-santa-anita-lima',
  code: 'pnsa',
  accent: '#036A34',
  accentRationale: 'Santa Anita: a fresh market-stall green #036A34, the colour of the produce crates that give the district its name in Lima, set apart from the olive and moss tones of the other district doors; allocated in alloc.tsv (contrast 5.47 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Santa Anita',
  title: 'Clases de programación para niños en Santa Anita, Lima',
  description: 'Programación para niños de 6 a 12 años en Santa Anita: clases en vivo y en inglés desde casa, una o dos veces por semana, todo el año y en el horario que usted fije.',
  ogDescription: 'Una clase de programación por semana, desde casa y todo el año, para niños de Santa Anita: el censo 2025 del distrito, las primeras palabras en inglés del código y un reto con funciones en Python.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Santa Anita, desde casa y en cualquier estación del año.',
  pageName: 'Clases de programación para niños en Santa Anita',
  webPageDescription: 'Guía para familias de Santa Anita que buscan clases de programación para niños de 6 a 12 años durante todo el año: el distrito en los Censos Nacionales 2025 del INEI, lo que la municipalidad publica por temporadas, la conectividad de los hogares de Lima según el INEI, el vocabulario en inglés que se aprende programando y un ejercicio de Python con funciones escrito por nosotros.',
  courseDescription: 'Clases de programación en vivo para niños de 6 a 12 años de Santa Anita, dictadas solo en inglés por videollamada: Scratch, Python, juegos y proyectos de IA, en grupo o individuales, sin pausa entre temporadas y a la hora que elija la familia.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Santa Anita',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distrito', label: 'El distrito' },
    { href: '#temporadas', label: 'Todo el año' },
    { href: '#vocabulario', label: 'Palabras en inglés' },
    { href: '#funciones', label: 'Reto en Python' },
    { href: '#hora', label: 'Horario' }
  ],
  eyebrow: 'Lima Este &middot; Santa Anita &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Santa Anita',
  lede: 'En Santa Anita los talleres llegan por temporadas: los de verano, los de otoño, la semana de la biblioteca escolar. La programación funciona distinto: se aprende con una o dos clases por semana sostenidas en el tiempo. Esta guía explica cómo lograr eso desde casa, cuántos chicos de cada edad registró el censo de 2025 en el distrito y de qué manera se aprende con un mentor que solo habla inglés.',
  secondaryCta: { href: '#funciones', label: 'Ver el reto con funciones' },
  wa: 'Hola Modern Age Coders, vivimos en Santa Anita y nos interesan clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos de varios países &middot; el mismo mentor todo el curso, siempre en inglés',
  spec: [
    ['Edad', 'De 6 a 12 años; adolescentes en otro grupo'],
    ['Lugar', 'Desde su casa en Santa Anita'],
    ['Ritmo', 'Una o dos clases por semana, sin cortes de temporada'],
    ['Idioma', 'Inglés en todas las clases'],
    ['Modalidad', 'Grupo de quince a veinte o individual'],
    ['Inicio', 'Clase gratis, sin tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Sí: con Modern Age Coders un niño de Santa Anita de 6 a 12 años aprende a programar desde casa, con clases en vivo y en inglés que siguen durante todo el año, sin cortes entre temporadas. El mentor enseña desde la India por videollamada, habla claro y despacio, y respeta el ritmo de cada niño. Primero vienen Scratch y los bloques; después, Python, juegos y proyectos de IA. Usted elige grupo o clases individuales, el día y la hora, y puede empezar con una clase gratis.',

  picks: {
    eyebrow: 'Cursos para empezar',
    h2: '¿Con qué curso empieza un niño de Santa Anita?',
    lede: 'Elegimos tres según la edad y el gusto del niño: bloques para los menores, Python para quien ya escribe con facilidad y juegos para quien quiere crear su propio mundo.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNSA / 01', title: 'Programación con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para chicos de 6 a 12, repartidos por edades. Se arman animaciones, juegos y apps sencillas encajando piezas de colores, cada una con su nombre en inglés.' },
      { course: 'python-ai-kids-masterclass', code: 'PNSA / 02', title: 'Python con IA, nivel inicial', alt: 'Imagen del curso de Python e IA para niños', note: 'Pensado para chicos que ya cumplieron 9. Variables, listas y funciones, como las del reto de esta página, y primeros proyectos con inteligencia artificial.' },
      { course: 'game-development-masterclass-for-kids', code: 'PNSA / 03', title: 'Taller de videojuegos', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'Desde los 8. Pasa por tres plataformas de juego distintas, para el niño que ya pasa horas jugando y quiere saber cómo se construye un juego por dentro.' }
    ]
  },

  sections: [
    {
      id: 'distrito',
      eyebrow: 'Censo 2025',
      h2: '¿Cuántos niños viven en Santa Anita según el censo de 2025?',
      lede: 'El INEI censó en Santa Anita a 17,635 niños de 6 a 11 años y a 18,673 adolescentes de 12 a 17. El distrito tiene 224,675 habitantes en total y pesa lo mismo en casi todas las cifras: alrededor del 2,2 % de Lima Metropolitana.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Santa Anita frente a Lima Metropolitana en los Censos Nacionales 2025', head: ['Dato', 'Santa Anita', 'Parte de Lima Metropolitana (cálculo nuestro)'], rows: [
          ['Población total (censada y omitida)', '224,675', '2,2 %'],
          ['Niños censados de 6 a 11 años', '17,635', '2,2 %'],
          ['Adolescentes censados de 12 a 17 años', '18,673', '2,2 %'],
          ['Niños censados de 0 a 5 años', '12,116', 'n. d.'],
          ['Personas omitidas por el censo', '14,264', 'n. d.']
        ] },
        { kind: 'source', html: 'Fuente: cuadros 1 y 3 de los resultados de los Censos Nacionales 2025 que el INEI publica para Lima Metropolitana (revisión del 15 de julio de 2026). La tercera columna divide cada cifra del distrito entre la de Lima Metropolitana (10,141,775 habitantes; 818,096 niños de 6 a 11; 867,253 de 12 a 17). "n. d." significa que no hicimos ese cálculo.' },
        { kind: 'two', mt: true,
          leftH3: 'Las edades de primaria',
          left: [
            'El cuadro 2 del censo cuenta a los niños año por año: 2,521 de 6 años, 2,709 de 7, 2,990 de 8, 3,088 de 9, 3,192 de 10, 3,135 de 11 y 3,168 de 12. En total, 20,803 niños de 6 a 12 años (suma nuestra).',
            'Dentro del distrito, los de 6 a 11 son el 8,4 % de los censados y los de 12 a 17 el 8,9 % (cálculos nuestros).'
          ],
          rightH3: 'Cómo leer estos números',
          right: [
            'El INEI estima 14,264 personas que el censo no llegó a registrar, el 6,3 % de la población total, y no les asigna edad. Por eso las cifras por edad son un mínimo.',
            'Todo Santa Anita es área urbana para el INEI. Lo que hay en estas filas es gente contada según su edad; no hablan de ingresos ni de la vida de cada familia, y aquí no las usamos para eso.'
          ] },
        { kind: 'p', mt: true, html: 'Santa Anita está en Lima Este, junto a Ate, El Agustino y San Luis. Para una clase en línea la ubicación no cambia nada: el mentor se conecta igual con una casa de Santa Anita que con una de cualquier otro distrito.' }
      ]
    },
    {
      id: 'temporadas',
      eyebrow: 'Todo el año',
      h2: '¿Qué actividades para niños organiza Santa Anita durante el año?',
      lede: 'Según sus propias notas en gob.pe, la municipalidad organiza talleres por temporada, clases de reforzamiento para primaria y actividades en su biblioteca. Son propuestas presenciales y valiosas; ninguna es de programación.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que publicó la Municipalidad de Santa Anita en gob.pe (selección nuestra)', head: ['Fecha', 'Actividad', 'Detalle publicado'], rows: [
          ['20 de marzo de 2024', 'Talleres de Otoño 2024', 'Talleres culturales y deportivos con inicio el lunes 25 de marzo de 2024'],
          ['23 de abril de 2024', 'Reforzamiento para primaria', 'Clases de reforzamiento de matemática y comunicación, con inscripciones gratuitas, en el Centro Cultural'],
          ['24 de setiembre de 2024', 'Convenio con TECSUP', 'Talleres gratuitos de orientación vocacional, charlas, becas y medias becas para jóvenes'],
          ['17 de noviembre de 2025', 'Semana de la Biblioteca Escolar', 'Acrósticos, cuentacuentos, lecturas dramatizadas y truequetón de libros en la Biblioteca Municipal']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Santa Anita, notas en gob.pe/institucion/munisantanita con las fechas indicadas, leídas el 10 de noviembre de 2026. Omitimos nombres de autoridades y firmantes. Modern Age Coders no tiene relación con la municipalidad ni con TECSUP.' },
        { kind: 'p', mt: true, html: 'El calendario de la municipalidad muestra algo útil: las actividades para niños cambian con las estaciones y con el año escolar. Hay talleres que empiezan en marzo, otros en verano, una semana dedicada a los libros en noviembre. Una familia puede aprovechar todo eso y, en paralelo, mantener una actividad que no se interrumpe: una clase de programación a la semana desde casa.' },
        { kind: 'two', mt: true,
          leftH3: 'Por qué la constancia pesa tanto',
          left: [
            'Programar se parece a aprender un instrumento: lo que se practica cada semana se queda, y lo que se deja tres meses se olvida en buena parte. Un niño que toma una clase semanal durante todo el año suma 52 sesiones, según nuestra cuenta, sin depender de que se abra una nueva convocatoria.',
            'Por eso nuestras clases no tienen fecha de cierre por temporada. Se pausan solo cuando la familia lo pide.'
          ],
          rightH3: 'Cómo encaja con lo demás',
          right: [
            'El reforzamiento de matemática y comunicación y la biblioteca trabajan habilidades que también usa la programación: leer con cuidado, seguir instrucciones, razonar con números.',
            'Un niño que en noviembre escribe acrósticos en la biblioteca puede, esa misma semana, programar un generador de acrósticos en Python. Es una idea de proyecto nuestra, de las que proponemos en clase.'
          ] }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Clases en línea',
      h2: '¿Una clase de programación en línea funciona igual que una presencial?',
      lede: 'Para programar, en muchos sentidos funciona incluso más directo: el mentor ve en su pantalla exactamente lo que su hijo está escribiendo, y su hijo practica en la misma computadora donde después seguirá creando solo.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Hogares y tecnología en Lima Metropolitana y en el país, II trimestre de 2026', head: ['Lo que midió la ENAHO', 'Resultado'], rows: [
          ['Hogares de Lima Metropolitana con internet', '84,7 %'],
          ['Hogares de Lima Metropolitana con computadora', '53,3 %'],
          ['Hogares de Lima Metropolitana con teléfono celular', '98,1 %'],
          ['Niños de 6 a 11 años del país que usan celular', '67,8 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Estadísticas de las TIC en los Hogares del segundo trimestre de 2026 (ENAHO, datos preliminares). El INEI incluye al Callao dentro de Lima Metropolitana y no publica cifras por distrito; la última fila es nacional.' },
        { kind: 'two', mt: true,
          leftH3: 'Celular sí, pero no para programar',
          left: [
            'Casi todos los hogares de Lima tienen celular, y dos de cada tres niños de 6 a 11 años del país lo usan, según el INEI. Pero el código se escribe con teclado y se revisa en una pantalla amplia.',
            'Por eso la clase se toma frente a una computadora, de mesa o portátil, que tenga cámara y micrófono; en Lima Metropolitana la tienen algo más de la mitad de los hogares.'
          ],
          rightH3: 'Sin trayectos',
          right: [
            'La clase empieza cuando su hijo abre el enlace. No hay que salir antes, esperar a la salida ni volver de noche. Ese tiempo se queda en casa.',
            'Si un día su hijo está resfriado o llueve, la clase sigue. Si la familia sale de Lima, también, desde donde haya conexión.'
          ] },
        { kind: 'p', mt: true, html: 'Lo que la clase en línea no reemplaza es el juego con otros niños, el deporte o la biblioteca. No intentamos competir con eso. Nuestra propuesta es más modesta y más concreta: una hora bien aprovechada, una o dos veces por semana, frente a la computadora de la casa.' }
      ]
    },
    {
      id: 'vocabulario',
      eyebrow: 'Inglés programando',
      h2: '¿Qué palabras en inglés aprende un niño cuando programa?',
      lede: 'Muchas más de las que parece, y con un uso concreto. Todas nuestras clases son en inglés, y el código mismo está hecho de palabras inglesas que su hijo usa, oye y dice en cada sesión.',
      body: [
        { kind: 'table', numCols: [], caption: 'Diez palabras que su hijo usará en sus primeras clases (selección nuestra)', head: ['Palabra', 'Qué significa', 'Dónde aparece'], rows: [
          ['print', 'imprimir, mostrar', 'Python: muestra un mensaje en la pantalla'],
          ['return', 'devolver', 'Python: una función entrega su resultado'],
          ['repeat', 'repetir', 'Scratch: el bloque que repite acciones'],
          ['if / else', 'si / si no', 'Scratch y Python: decisiones'],
          ['forever', 'para siempre', 'Scratch: un bucle que no termina'],
          ['define', 'definir', 'Scratch y Python (def): crear un bloque o una función propia'],
          ['list', 'lista', 'Python: varios valores guardados juntos'],
          ['error', 'error', 'El aviso de que algo falló, siempre en inglés'],
          ['run', 'ejecutar', 'Lo que dice el mentor antes de probar el programa'],
          ['debug', 'depurar', 'Buscar y arreglar un error']
        ] },
        { kind: 'source', html: 'La selección es nuestra. Las palabras salen de Scratch y de Python, que son las herramientas de las primeras etapas.' },
        { kind: 'p', mt: true, html: 'En la tabla de horas del CNEB, Inglés recibe dos horas pedagógicas por semana en los dos primeros grados de primaria y tres en los cuatro siguientes, cada una de 45 minutos. Una clase de programación en inglés no reemplaza esas horas: les da uso. Su hijo no repite una lista de vocabulario, sino que necesita la palabra <em>return</em> para que su programa funcione. En el EF EPI 2025, Lima alcanzó 555 puntos, en el nivel que EF llama alto; esa ciudad bilingüe empieza, para muchos chicos, con palabras como estas.' },
        { kind: 'p', html: 'Si su hijo no sabe inglés, no es un problema. El mentor explica con la pantalla, repite con calma y acepta respuestas en castellano mientras el niño gana confianza. Lo contamos con más detalle en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'funciones',
      tint: 'tint',
      eyebrow: 'Reto en Python',
      h2: '¿Qué diferencia hay entre print y return en Python?',
      lede: '<code>print</code> muestra un valor en la pantalla; <code>return</code> se lo entrega al resto del programa para que lo siga usando. Parecen iguales hasta que uno intenta usar el resultado. Escribimos este ejercicio para chicos de entre 10 y 12 que ya saben definir una función sencilla.',
      body: [
        { kind: 'code', label: 'Dos funciones que parecen iguales', lang: 'Python', code: PY, note: 'Las dos funciones calculan el doble de 4. La diferencia está en la última línea de cada una.' },
        { kind: 'code', label: 'Lo que sale en pantalla', lang: 'Salida', code: OUT, note: 'Corrimos devolver.py con Python 3 y pegamos aquí la salida sin cambiar nada. El primer 8 lo imprime <code>double_print</code> por dentro.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir.</strong> Antes de correr el programa, la pregunta del mentor es "What do you think a is?". Casi todos los niños dicen 8.',
          '<strong>La sorpresa.</strong> La pantalla dice <code>a is None</code>. La función mostró el 8, pero no lo devolvió; <code>None</code> es la forma que tiene Python de decir "no hay nada aquí".',
          '<strong>Comparar.</strong> <code>double_return</code> entrega el 8, se guarda en <code>b</code> y se puede seguir usando: <code>b + 1 = 9</code>.',
          '<strong>Provocar el error.</strong> El reto es escribir <code>print(a + 1)</code> y leer el mensaje: <code>TypeError</code>, porque no se puede sumar 1 a <code>None</code>. El niño explica en inglés, con sus palabras, qué falta en la primera función.',
          '<strong>Arreglarlo.</strong> Cambia <code>print(n * 2)</code> por <code>return n * 2</code> en la primera función y comprueba que ahora las dos se comportan igual.'
        ] },
        { kind: 'p', mt: true, html: 'Es un error frecuente incluso en programadores adultos, y también en código generado por herramientas de IA que "parece" funcionar porque el número aparece en pantalla. Aprender a preguntarse "¿este valor se muestra o se entrega?" es aprender a revisar en lugar de confiar. Eso es lo que buscamos en cada clase: que su hijo piense y compruebe, no que copie.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'La edad para empezar',
      h2: '¿Es muy temprano a los 6 años, o muy tarde a los 12?',
      lede: 'Ni lo uno ni lo otro. Un niño de 6 puede programar con bloques y personajes, sin necesidad de leer con fluidez; a los 12 se puede avanzar rápido hacia Python y proyectos propios. Lo que cambia es la herramienta, no la posibilidad.',
      body: [
        { kind: 'table', numCols: [], caption: 'Qué esperar según la edad de inicio (nuestra guía)', head: ['Empieza con', 'Primeros meses', 'Al cabo de un año, con constancia'], rows: [
          ['6 o 7 años', 'Bloques, secuencias y animaciones cortas', 'Juegos sencillos en Scratch con puntaje'],
          ['8 o 9 años', 'Scratch completo con condiciones y variables', 'Primeros programas escritos en Python'],
          ['10 u 11 años', 'Unas semanas de bloques y paso a Python', 'Funciones, listas y un juego propio'],
          ['12 años', 'Python desde el inicio, o Luau en Roblox', 'Un proyecto con varias partes, presentado en inglés']
        ] },
        { kind: 'source', html: 'La tabla es nuestra y orientativa. Cada niño avanza a su ritmo; en la clase gratis el mentor propone el punto de partida.' },
        { kind: 'two', mt: true,
          leftH3: 'Para los más pequeños',
          left: [
            'Con 6 años, la edad con que el MINEDU ubica a un niño en el primer grado, todavía se está aprendiendo a leer. Por eso las primeras clases usan colores, sonidos y personajes, y casi nada de texto.',
            'Ayuda que una persona adulta esté cerca las primeras veces, solo para acompañar. La guía de <a class="ag-inline-link" href="/scratch-para-ninos-en-ingles">Scratch para niños en inglés</a> cuenta cómo son esas clases.'
          ],
          rightH3: 'Para los de 12 y más',
          right: [
            'Desde los 13 años abrimos grupos para adolescentes, con Python, Java, desarrollo web e IA. En secundaria la computación tampoco figura como curso en la tabla de horas del CNEB, y estos grupos cubren ese hueco fuera del colegio.',
            'Más información en <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">programación para adolescentes en Perú</a>.'
          ] }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Diferencia horaria',
      h2: '¿A qué hora puede tomar clases un niño de Santa Anita?',
      lede: 'A la hora que usted reserve. Los mentores viven en la India, 10 horas y 30 minutos por delante de Lima en cualquier época del año, y organizan su jornada para atender a familias peruanas de mañana y de tarde. La tabla solo convierte relojes.',
      body: [
        { kind: 'table', numCols: [], caption: 'De la hora de Santa Anita a la hora de la India (conversión, no horario)', head: ['Santa Anita', 'India', 'Para el mentor es'], rows: [
          ['8:15 a. m.', '6:45 p. m.', 'Tarde del mismo día'],
          ['10:45 a. m.', '9:15 p. m.', 'Noche del mismo día'],
          ['11:15 a. m.', '9:45 p. m.', 'Noche del mismo día'],
          ['2:45 p. m.', '1:15 a. m.', 'Madrugada siguiente'],
          ['4:15 p. m.', '2:45 a. m.', 'Madrugada siguiente'],
          ['6:15 p. m.', '4:45 a. m.', 'Madrugada siguiente']
        ] },
        { kind: 'source', html: 'El reloj peruano marca UTC-5 y no adelanta ni atrasa la hora desde 1994 (zona America/Lima de tzdata; el INACAL mantiene la hora oficial). El de la India marca UTC+5:30 sin cambios estacionales (Asia/Kolkata). La brecha es la misma los doce meses.' },
        { kind: 'p', mt: true, html: 'Usted reserva con la hora de Santa Anita y el mentor ve la suya automáticamente. Para quien estudia en el turno mañana suele funcionar media tarde; para quien va en el turno tarde, las primeras horas del día. En enero y febrero, cuando no hay colegio, la clase puede moverse sin cambiar de mentor ni de grupo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Qué logra un niño después de varios meses programando?',
    lede: 'Cinco etapas propias con las que describimos el avance a las familias, sin notas ni comparaciones con otros niños.',
    table: { caption: 'Cinco etapas de un año de programación (nuestras)', head: ['Etapa', 'Edad usual', 'Su hijo ya puede'], rows: [
      ['1. Crear una escena', '6 a 7 años', 'mover un personaje, cambiar el fondo y agregar un sonido'],
      ['2. Repetir con sentido', '7 a 9 años', 'usar <em>repeat</em> y <em>forever</em> y decir para qué sirve cada uno'],
      ['3. Escribir instrucciones', '9 a 10 años', 'teclear en Python unas líneas que hacen una pregunta y contestan según la respuesta'],
      ['4. Definir funciones', '10 a 11 años', 'crear funciones propias y elegir entre <em>print</em> y <em>return</em>'],
      ['5. Sostener un proyecto', '11 a 12 años', 'trabajar varias semanas en un juego o una web y explicarlo en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'La constancia importa más que la velocidad. Un niño que no falta a sus clases avanza más que uno que hace mucho un mes y nada el siguiente.',
      'Pídale que le enseñe una palabra en inglés que aprendió programando. Es una forma rápida de ver qué está haciendo.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Pregúntese siempre si su función muestra el resultado o lo entrega.',
      'Cuando algo salga raro, lea el mensaje de error completo antes de cambiar nada.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para elegir',
    lede: 'Cualquiera de ellos se toma en vivo y solo en inglés, acompañado por la misma persona, sea en grupo o a solas, en cualquier mes.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 9 años', courses: [
        { code: 'PNSA / BASE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch de principio a fin', blurb: 'Personajes, escenarios y juegos completos con bloques.' },
        { code: 'PNSA / BASE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensar en pasos', blurb: 'Acertijos que enseñan a dividir un problema grande.' },
        { code: 'PNSA / BASE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Comandos y construcciones automáticas dentro del juego.' }
      ] },
      { num: 'II', h3: 'Crear y publicar', sub: 'De 8 a 12 años', courses: [
        { code: 'PNSA / CREAR / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio', blurb: 'Niveles, monedas y puertas que se programan en Luau.' },
        { code: 'PNSA / CREAR / 02', slug: 'kids-ai-web-development-course', title: 'Diseño web para niños', blurb: 'Una página propia con HTML y CSS.' },
        { code: 'PNSA / CREAR / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Crear con ayuda de la IA', blurb: 'Juegos hechos con IA, revisando cada paso con criterio.' }
      ] },
      { num: 'III', h3: 'Razonar con números', sub: 'De 8 a 12 años', courses: [
        { code: 'PNSA / NUM / 01', slug: 'maths-through-coding', title: 'Matemática programando', blurb: 'Patrones y operaciones resueltos con código.' },
        { code: 'PNSA / NUM / 02', slug: 'mental-maths-mastery-kids', title: 'Números de cabeza', blurb: 'Trucos para sumar, restar y multiplicar sin papel.' },
        { code: 'PNSA / NUM / 03', slug: 'ai-literacy-for-kids-course', title: 'Cómo piensa una IA', blurb: 'Qué hace un modelo, cuándo falla y cómo comprobarlo.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo se organiza una semana de clases?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Durante el año escolar', l: 'En el turno contrario al del colegio.' },
      { time: 'En enero y febrero', l: 'La misma clase en el horario que acomode a las vacaciones.' },
      { time: 'Individual', l: 'Día y hora fijados por usted.' }
    ],
    cells: [
      { h3: 'Mismo mentor', p: 'Una sola persona de inicio a fin del curso.' },
      { h3: 'Inglés con calma', p: 'Frases cortas y la pantalla como apoyo.' },
      { h3: 'Práctica real', p: 'Su hijo escribe; el mentor guía con preguntas.' },
      { h3: 'Algo para mostrar', p: 'Cada etapa termina en un proyecto visible.' },
      { h3: 'Contacto con usted', p: 'Breves notas sobre el progreso.' },
      { h3: 'Dos formatos', p: 'Grupo de quince a veinte o clase para su hijo solo.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros alumnos',
  projectsLede: 'Clase a clase, los proyectos crecen: de animaciones a aplicaciones completas. Aquí hay algunos de alumnos mayores; más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones dejadas en Google por madres, padres y alumnos, tal cual, en inglés.',

  fees: {
    h2: 'Precios para familias de Santa Anita',
    lede: 'Publicamos las tarifas en dólares de Estados Unidos y cobramos con tarjeta. Su banco convierte el cargo a la moneda de su cuenta, y el importe final varía con la cotización del día en que se cobra.',
    free: ['Primera clase sin costo', 'Un reto para conocer a su hijo', 'No pedimos tarjeta'],
    group: ['Quince a veinte niños de edad cercana', 'Un mentor fijo', 'Dos clases semanales en vivo', 'Mensualidad sin contrato largo'],
    one: ['Clases solo para su hijo', 'Contenido y ritmo a medida', 'El horario que usted decida']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en Santa Anita: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las clases son en inglés de principio a fin, en vivo y por videollamada. Lejos de ser un obstáculo, es una ventaja: en una sola hora su hijo programa y usa el idioma, guiado por un mentor que habla despacio y vuelve a explicar cuando hace falta. Según el EF EPI 2025, el inglés de Lima ya está en la franja alta del índice, y conversar desde chico prepara para eso.' },
      { q: '¿Las clases paran en vacaciones?', a: 'No, a menos que usted lo pida. Siguen durante todo el año; en enero y febrero puede cambiar la hora para adaptarla a las vacaciones.' },
      { q: '¿Cuántos niños hay en Santa Anita?', a: 'El censo de 2025 del INEI registró 17,635 niños de 6 a 11 años y 18,673 adolescentes de 12 a 17 entre los censados. Sumando edades simples de 6 a 12 años, son 20,803 (cálculo nuestro).' },
      { q: '¿A qué edad puede empezar mi hijo?', a: 'Con 6 años ya puede, usando bloques y personajes. El salto a escribir Python llega normalmente al acercarse a los 10.' },
      { q: '¿Mi hijo necesita saber inglés?', a: 'No. Basta con que entienda palabras sencillas. El mentor usa la pantalla para explicar y acepta respuestas en castellano al principio.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Si en Santa Anita son las 10:00 a. m., en la India son las 8:30 p. m.' },
      { q: '¿Necesito una computadora nueva?', a: 'No. Alcanza con cualquier equipo que funcione bien y tenga teclado, además de cámara y micrófono. El celular no alcanza para escribir código cómodamente.' },
      { q: '¿Tienen clases para adolescentes?', a: 'Sí. Quienes ya cumplieron 13 entran a grupos propios, donde se trabaja inteligencia artificial, webs, Java y Python.' },
      { q: '¿Están vinculados a la municipalidad o a algún colegio?', a: 'No. No tenemos relación con la Municipalidad de Santa Anita, el MINEDU, la UGEL ni ningún colegio. Las clases no otorgan notas; al terminar un curso entregamos un certificado de finalización propio de Modern Age Coders.' },
      { q: '¿En qué moneda se paga?', a: 'La tarifa está en dólares estadounidenses y se carga a una tarjeta, que convierte el monto por su cuenta. Para la clase inicial no pedimos medio de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más guías',
    h2: 'Otras páginas para su familia',
    lede: 'Guías relacionadas, en castellano y en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Respuestas para cualquier familia peruana con hijos en primaria.' },
      { href: '/scratch-para-ninos-en-ingles', label: 'Scratch para niños en inglés', p: 'Cómo son las primeras clases con bloques.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Grupos y cursos para secundaria.' },
      { href: '/vacaciones-utiles-de-programacion-la-molina-lima', label: 'Vacaciones útiles en La Molina', p: 'Ideas para el verano en otro distrito de Lima Este.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo enseñamos, en detalle (en inglés).' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos disponibles (en inglés).' }
    ]
  },

  start: {
    h2: 'Pida una clase gratis para su hijo',
    lede: 'Durante la sesión de prueba su hijo charla un rato con el mentor, enfrenta un desafío pequeño adecuado a su edad y muestra cómo razona. Luego le escribimos qué curso y qué formato vemos adecuados, y usted decide sin apuro.',
    readFirst: 'Si quiere saber más de nosotros antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a> (ambas en inglés).',
    note: 'Las clases son en vivo por internet, con mentores que enseñan desde la India y solo en inglés. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Videojuegos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/scratch-para-ninos-en-ingles', label: 'Scratch en inglés' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Mostrar no es devolver'
  },

  personalityCss: `
.ag-root.ag-pnsa .ag-hero h1 { max-width: 20ch; letter-spacing: -0.012em; }
.ag-root.ag-pnsa .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-pnsa .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pnsa .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pnsa .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3, updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026; Municipalidad Distrital de Santa Anita notes on gob.pe (20 March 2024, 23 April 2024, 24 September 2024, 17 November 2025); MINEDU CNEB hours and edades normativas; EF EPI 2025; tzdata and INACAL. Read 8 to 10 November 2026. The vocabulary table, age guide, stages and Python exercise are our own.',
    localProject: 'Print versus return for a 10 to 12 year old in Santa Anita: double_print(4) shows 8 but hands back None, double_return(4) hands back 8 so b + 1 = 9 works; the child provokes the TypeError of None + 1, explains it in English and fixes the first function. Lesson family: functions; print shows, return hands back; no return gives None.',
    requiredMentions: ['a is None', 'b + 1 = 9', 'Talleres de Otoño 2024', 'Semana de la Biblioteca Escolar', 'Clases de reforzamiento de matemática y comunicación, con inscripciones gratuitas', '20,803 niños de 6 a 12 años', 'Mostrar no es devolver', 'Niños de 6 a 11 años del país que usan celular'],
    sources: [
      { claim: 'Santa Anita 224,675 total, 210,411 censused, 14,264 omitted; age groups; single ages 6 to 12; all urban; Lima Metropolitana totals.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Talleres de Otoño 2024 starting 25 March 2024.', url: 'https://www.gob.pe/institucion/munisantanita/noticias/923060-talleres-de-otono-2024' },
      { claim: 'Free maths and communication reinforcement classes for primaria at the Centro Cultural (23 April 2024).', url: 'https://www.gob.pe/institucion/munisantanita/noticias/942628-te-ofrecemos-clases-de-reforzamiento-matematico-y-comunicacion-para-estudiantes-de-primaria' },
      { claim: 'Semana de la Biblioteca Escolar activities (17 November 2025).', url: 'https://www.gob.pe/institucion/munisantanita/noticias/1292624-semana-de-la-biblioteca-escolar-en-santa-anita' },
      { claim: 'Agreement with TECSUP: free vocational workshops, talks, scholarships (24 September 2024).', url: 'https://www.gob.pe/institucion/munisantanita/noticias/1027489-tecsup-y-municipalidad-apuestan-por-los-jovenes' },
      { claim: 'Lima Metropolitana households with internet 84.7%, computer 53.3%, mobile 98.1%; children 6 to 11 using a mobile 67.8% (national).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Primaria English 2 and 3 hours; secundaria without a computing area; normative age.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any link with the municipality or TECSUP: refused; the page says we are not connected to either.',
      'District-level internet or computer figures: not published by INEI; Lima Metropolitana and national rows are labelled.',
      'Any income or class reading of the census: refused.',
      'Officials\' and signatories\' names from the municipal notes: left out.',
      'Spanish-language teaching, robot kits, grades or official certificates: refused.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: market | Colegio bilingüe en Lima: reforzamiento de programación en inglés, IB, IGCSE y COAR | reading an English TypeError: str + int, int / str, and '3' * 2 that silently gives '33'
'use strict';
// Colegio bilingüe: refuerzo de programación (ag- Spanish-language door, Peru cluster row PE154, P4 explainer, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. Schools are context only: no school is named, and no
// school is a source of students (bilingual/international school counts in Lima are not verified from a primary source).
// Angle: families who type "colegio bilingüe en lima" (KEYWORDS.md, IB / bilingual / international cluster: "colegio bilingüe en
// lima / los olivos / san miguel; colegios bilingües en lima precios / norte / sur") whose child takes computing, IGCSE Computer
// Science or IB Computer Science in English and needs reforzamiento in the same language.
// Spine: why a student at a bilingual school struggles in computing (the subject plus the language of the error messages); what
// the national plan requires and what schools may add (no computing area; horas de libre disposición; English hours); IB in Peru
// (2,502 Diplomas in 2025, 47% COAR; COAR 1,179; 515 Cambridge English certificates) and what universities do with the Diploma
// (PUCP, U de Lima); one worked example reading English TypeErrors; how reforzamiento works with us; timing.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/colegio-bilingue-refuerzo-programacion/;
// FACTS = facts-school/FACTS.md, MARKET = facts-market/MARKET.md):
//  CNEB (FACTS 39, 41, 43, 44, 57): primaria "Inglés 2 2 3 3 3 3"; secundaria JER "Inglés 3 3 3 3 3", JEC "Inglés 5 5 5 5 5";
//    free-disposal hours "Desarrollar talleres o áreas que complementen el logro de determinados aprendizajes considerados
//    prioritarios para la realidad local o para las necesidades de los estudiantes."; "horas pedagógicas (45 minutos)"; no computing
//    area in either secundaria table.
//  MINEDU press note on COAR and IB (FACTS 91 to 93): "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del
//    Bachillerato Internacional. De este total, los estudiantes de los COAR representan el 47 % del total nacional"; "1179 estudiantes
//    de los 25 Colegios de Alto Rendimiento (COAR)"; "515 estudiantes de quinto de secundaria de los COAR obtuvieron certificaciones
//    internacionales del idioma inglés Cambridge".
//  MINEDU COAR admission note (FACTS 94, 95): 2,650 places for public-school students who finished 2° secundaria; COAR students can
//    take the IB Diploma Programme.
//  PUCP guía del postulante (FACTS 81, 82): Diploma de Bachillerato route, interviews "Hasta el 28 de enero de 2027"; courses
//    recognised "hasta un máximo de 23 créditos".
//  U de Lima guía 2027-1(A) (FACTS 89): IB Diploma holders admitted "en un plazo no mayor de tres años".
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, High. INEI ENAHO TIC II Trimestre 2026 (MARKET 1.4): 12 to 18 year olds 92,5%.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (cbrp.py in the scratchpad):
//    TypeError: can only concatenate str (not "int") to str / TypeError: unsupported operand type(s) for /: 'int' and 'str' /
//    Score: 17 / Average: 5.67 / Repeat: 33 | as a number: 6
// Lesson family: reading Python's English error messages word by word (concatenate, operand, unsupported), the str/int mismatch in
// + and /, the f-string and int() fixes, and the silent case where '3' * 2 gives '33' with no error at all.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'points = 17',
  "attempts = '3'",
  '',
  'try:',
  "    print('Score: ' + points)",
  'except TypeError as error:',
  "    print('TypeError:', error)",
  '',
  'try:',
  "    print('Average:', points / attempts)",
  'except TypeError as error:',
  "    print('TypeError:', error)",
  '',
  "print(f'Score: {points}')",
  "print('Average:', round(points / int(attempts), 2))",
  "print('Repeat:', attempts * 2, '| as a number:', int(attempts) * 2)"
].join('\n');

const OUT = [
  'TypeError: can only concatenate str (not "int") to str',
  "TypeError: unsupported operand type(s) for /: 'int' and 'str'",
  'Score: 17',
  'Average: 5.67',
  'Repeat: 33 | as a number: 6'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Colegio bilingüe: refuerzo de programación' },
  slug: 'colegio-bilingue-refuerzo-programacion',
  code: 'cbrp',
  accent: '#553600',
  accentRationale: 'Colegio bilingüe, refuerzo de programación: a dark bronze #553600, the colour of an old school crest rather than a bright brand, for families at Lima\'s bilingual schools; contrast 8.91 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Colegio bilingüe: refuerzo de programación en inglés',
  title: 'Colegio bilingüe en Lima: refuerzo de programación en inglés',
  description: 'Refuerzo de programación en inglés para alumnos de colegios bilingües de Lima: computación, IGCSE e IB Computer Science, en vivo y en grupo o 1 a 1.',
  ogDescription: 'Para familias de colegios bilingües y del Bachillerato Internacional en Perú: por qué cuesta la programación en inglés, qué pide el plan nacional, el IB en cifras del MINEDU y un error de Python leído palabra por palabra.',
  twitterDescription: 'Reforzamiento de programación en el mismo idioma del colegio: inglés. Clases en vivo, grupales o individuales, para primaria, secundaria, IGCSE e IB.',
  pageName: 'Colegio bilingüe en Lima: refuerzo de programación en inglés',
  webPageDescription: 'Página para familias de colegios bilingües, británicos, americanos y del Bachillerato Internacional en Lima y el resto del Perú cuyos hijos llevan computación o Computer Science en inglés: por qué cuesta, qué exige el plan nacional y qué agrega cada colegio, el IB en Perú según el MINEDU, cómo lo usan PUCP y la Universidad de Lima, un error de Python en inglés leído paso a paso y cómo funciona nuestro reforzamiento.',
  courseDescription: 'Reforzamiento en vivo y en línea de programación y ciencias de la computación para alumnos de colegios bilingües en Perú, dictado solo en inglés por mentores desde la India: Scratch, Python, Java, IGCSE Computer Science e IB Computer Science, alineado con lo que el estudiante ve en su colegio, en grupo o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Colegio bilingüe: refuerzo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#por-que', label: 'Por qué cuesta' },
    { href: '#plan', label: 'Plan nacional' },
    { href: '#ib', label: 'IB en Perú' },
    { href: '#error', label: 'Un error en inglés' },
    { href: '#refuerzo', label: 'El refuerzo' }
  ],
  eyebrow: 'Lima y todo el Perú &middot; Colegios bilingües &middot; Refuerzo en inglés',
  h1: 'Colegio bilingüe en Lima: refuerzo de programación en inglés',
  lede: 'En un colegio bilingüe la computación suele dictarse en inglés, y los mensajes de error de cualquier lenguaje de programación también están en inglés. Un estudiante puede entender la lógica y aun así perderse en las palabras. El reforzamiento que ayuda de verdad es el que se da en el mismo idioma de la clase, con alguien que explica despacio lo que el colegio explica rápido.',
  secondaryCta: { href: '#error', label: 'Ver un error leído en inglés' },
  wa: 'Hola Modern Age Coders, nuestro hijo estudia en un colegio bilingüe y necesita reforzamiento de programación en inglés. ¿Podemos agendar una clase de prueba gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; reforzamiento en el idioma del colegio',
  spec: [
    ['Para quién', 'Alumnos de colegios bilingües, de primaria a 5° de secundaria'],
    ['Materias', 'Computación, IGCSE e IB Computer Science'],
    ['Lenguajes', 'Scratch, Python, Java y pseudocódigo'],
    ['Idioma', 'Inglés, el mismo de la clase del colegio'],
    ['Modalidad', 'Grupo de quince a veinte, o individual'],
    ['Horario', 'El que la familia elija, sin recargo por hora']
  ],
  capsuleQ: 'Lo principal',
  capsule: 'Para alumnos de colegios bilingües en Lima y el resto del Perú que llevan computación, IGCSE Computer Science o IB Computer Science en inglés, Modern Age Coders da reforzamiento de programación en vivo, por internet y en inglés, con mentores desde la India. Trabajamos lo que el estudiante ve en su colegio, Scratch, Python, Java o pseudocódigo, y le enseñamos a leer los errores y a explicar su código en el idioma en que lo evalúan. Hay clases grupales o individuales, en el horario que la familia prefiera.',

  picks: {
    eyebrow: 'Refuerzo por nivel',
    h2: 'Tres cursos de refuerzo, según la etapa del colegio',
    lede: 'Los programas internacionales más comunes en los colegios bilingües piden cosas distintas en cada etapa. Estos tres cubren la mayoría de los casos.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'CBRP / 01', title: 'Python en inglés para secundaria', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 1° a 4° de secundaria. La base que casi todos los colegios bilingües usan en sus clases de computación, con énfasis en leer errores y explicar soluciones.' },
      { course: 'igcse-computer-science-0478-course', code: 'CBRP / 02', title: 'IGCSE Computer Science', alt: 'Imagen del curso de IGCSE Computer Science 0478', note: 'Para colegios con programa Cambridge: programación, pseudocódigo, algoritmos y la parte teórica, con práctica de preguntas escritas en inglés.' },
      { course: 'ib-diploma-computer-science-course', code: 'CBRP / 03', title: 'IB Computer Science', alt: 'Imagen del curso de IB Diploma Computer Science', note: 'Para 4° y 5° de secundaria en el Diploma del IB: programación orientada a objetos, teoría y acompañamiento en la evaluación interna, sin hacer el trabajo por el estudiante.' }
    ]
  },

  sections: [
    {
      id: 'por-que',
      eyebrow: 'Por qué cuesta',
      h2: '¿Por qué un alumno de colegio bilingüe necesita refuerzo de programación?',
      lede: 'Porque se juntan dos dificultades en la misma hora: una materia nueva, que exige pensar paso a paso, y un idioma que no siempre es el de casa. Cuando el estudiante se traba, rara vez sabe cuál de las dos lo detuvo.',
      body: [
        { kind: 'three', cells: [
          { h3: 'La lógica', p: 'Bucles, condiciones y variables piden imaginar lo que hará la máquina. Algunos estudiantes lo ven de inmediato; otros necesitan rastrear el programa a mano varias veces antes de verlo.' },
          { h3: 'El vocabulario', p: 'Palabras como concatenate, operand, iterate o index no aparecen en la clase de inglés general. Un estudiante con buen inglés de conversación puede no reconocerlas en un mensaje de error.' },
          { h3: 'El ritmo', p: 'En un aula de treinta, el profesor no puede detenerse en cada error. Si el estudiante no pregunta a tiempo, la siguiente unidad se construye sobre una base que no entendió.' }
        ] },
        { kind: 'p', mt: true, html: 'El reforzamiento en castellano ayuda con la lógica, pero deja intacto el segundo problema: el examen, el profesor y los mensajes de error seguirán en inglés. Por eso nuestro refuerzo se da en inglés. El mentor habla despacio, comprueba que se entendió y, sobre todo, enseña a leer lo que la máquina dice, palabra por palabra.' },
        { kind: 'p', html: 'No reemplazamos al colegio ni a su profesor de computación. Enseñamos en paralelo, siguiendo lo que el estudiante está viendo, y las notas las sigue poniendo el colegio. Para familias que prefieren leer en inglés, la guía <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> cuenta lo mismo desde el punto de vista de los colegios internacionales.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Plan nacional',
      h2: '¿Los colegios peruanos tienen un curso de computación obligatorio?',
      lede: 'No en el plan nacional. El Currículo Nacional no tiene un área de computación ni de programación en secundaria; los colegios que la dictan la suman por su cuenta, por ejemplo con las horas que el propio plan deja a su libre disposición.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Horas semanales de inglés y espacio para computación en el plan de estudios nacional', head: ['Nivel y jornada', 'Horas de inglés por semana', '¿Hay un área de computación?'], rows: [
          ['Primaria, 1° y 2° grado', '2', 'No'],
          ['Primaria, de 3° a 6° grado', '3', 'No'],
          ['Secundaria, jornada regular', '3', 'No'],
          ['Secundaria, jornada completa', '5', 'No']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Currículo Nacional de la Educación Básica, planes de estudio de primaria y secundaria; una hora pedagógica equivale a 45 minutos. Es el mínimo nacional: un colegio bilingüe suele dar muchas más horas de inglés y, a veces, computación como taller propio. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'El mismo currículo permite a cada colegio usar sus horas de libre disposición para "desarrollar talleres o áreas que complementen el logro de determinados aprendizajes considerados prioritarios para la realidad local o para las necesidades de los estudiantes". Es la vía por la que muchos colegios privados agregan computación, robótica o un programa internacional. Por eso dos colegios bilingües de Lima pueden enseñar cosas muy distintas bajo el mismo nombre de curso.' },
        { kind: 'p', html: 'De ahí sale nuestra primera pregunta en la clase de prueba: qué ve el estudiante exactamente. Puede ser Scratch en primaria, Python en los primeros años de secundaria, el programa de Cambridge o el Diploma del IB. El refuerzo se arma sobre eso, con su cuaderno, sus ejercicios y el vocabulario de su profesor.' }
      ]
    },
    {
      id: 'ib',
      eyebrow: 'IB en Perú',
      h2: '¿Cuántos estudiantes obtienen el Bachillerato Internacional en Perú?',
      lede: 'En 2025 fueron 2502, según el MINEDU, y casi la mitad estudiaba en los COAR, los colegios públicos de alto rendimiento. El resto se reparte entre colegios privados, muchos de ellos bilingües.',
      body: [
        { kind: 'table', numCols: [1], caption: 'El Bachillerato Internacional en Perú, según el MINEDU (cifras de 2025)', head: ['Dato', 'Cifra', 'Detalle'], rows: [
          ['Diplomas del IB obtenidos en todo el país', '2502', 'Año 2025'],
          ['Proporción de esos diplomas que corresponde a los COAR', '47%', 'Colegios públicos de alto rendimiento'],
          ['Estudiantes de los 25 COAR con el Diploma del IB', '1179', 'Año 2025'],
          ['Estudiantes de 5° de secundaria de los COAR con certificación Cambridge de inglés', '515', 'Año 2025']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, nota de prensa sobre los resultados del Bachillerato Internacional en los COAR, publicada en gob.pe. Las cifras se reproducen tal como las publica el ministerio, sin sumarlas ni combinarlas. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'El dato del 47% dice algo útil a las familias de colegios privados: el IB no es solo cosa de colegios caros, y la competencia por un buen resultado es amplia. Para el Diploma, Computer Science es una asignatura exigente, con programación orientada a objetos y una evaluación interna en la que el estudiante resuelve un problema real. Nuestro curso de IB Computer Science acompaña ese proceso sin escribir el trabajo por el estudiante, porque el IB exige que sea suyo.' },
        { kind: 'p', html: 'El Diploma también cuenta en la admisión universitaria peruana. La guía del postulante de la PUCP tiene una modalidad para quienes tienen un Diploma de Bachillerato, con entrevistas hasta el 28 de enero de 2027, y puede reconocer cursos aprobados hasta un máximo de 23 créditos. La Universidad de Lima admite a quienes obtuvieron el Diploma del IB si postulan en un plazo no mayor de tres años. Las decisiones son de cada universidad; nosotros no intervenimos en ellas. Para matemáticas del IB tenemos una página aparte: <a class="ag-inline-link" href="/tutor-ib-matematicas-en-ingles-peru">tutor de matemáticas IB en inglés</a>, y para la asignatura de computación, <a class="ag-inline-link" href="/bachillerato-internacional-ciencias-de-la-computacion-tutor">tutor de ciencias de la computación del IB</a>.' }
      ]
    },
    {
      id: 'error',
      tint: 'tint',
      eyebrow: 'Clase de muestra',
      h2: '¿Cómo se lee un mensaje de error de Python en inglés?',
      lede: 'Palabra por palabra, y sin miedo. Este ejercicio es de los primeros que hacemos con alumnos de colegios bilingües. Mezcla, a propósito, un número y un texto que parece número, y deja que Python se queje en inglés.',
      body: [
        { kind: 'code', label: 'Un número, un texto y dos quejas de Python', lang: 'Python', code: PY, note: 'La variable points es un número entero. La variable attempts parece un número, pero está entre comillas: es texto. Las dos primeras operaciones están dentro de try para que el programa muestre el error y siga.' },
        { kind: 'code', label: 'Lo que responde Python', lang: 'Salida', code: OUT, note: 'Salida obtenida al correr el archivo con Python 3 en nuestra computadora, sin cambiar una coma.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer el tipo de error.</strong> TypeError significa que se mezclaron tipos de datos que no combinan. Antes de leer el resto, el estudiante ya sabe a qué familia de problema se enfrenta.',
          '<strong>Traducir la primera queja.</strong> "can only concatenate str (not "int") to str": solo se puede concatenar, es decir unir, texto con texto, no un entero. El signo + entre un texto y un número no sabe qué hacer.',
          '<strong>Traducir la segunda.</strong> "unsupported operand type(s) for /": los operandos, lo que va a cada lado del signo de dividir, son de tipos que la división no admite, un int y un str.',
          '<strong>Corregir con intención.</strong> Para mostrar el puntaje, una f-string convierte el número en texto sin pelearse con el +. Para dividir, int(attempts) convierte el texto "3" en el número 3, y el promedio sale 5.67.',
          '<strong>El caso que no se queja.</strong> attempts * 2 no da error: repite el texto y devuelve 33. Python solo protesta cuando no tiene ninguna interpretación posible; cuando tiene una equivocada, la usa en silencio. Ese es el error que más cuesta en un examen.'
        ] },
        { kind: 'p', mt: true, html: 'Al final el estudiante arma su propio glosario: concatenate, operand, unsupported, type, integer, string. Son palabras que reaparecen en cualquier curso de computación en inglés, desde la primaria hasta el IB. Aprenderlas leyendo errores reales es mucho más eficaz que memorizarlas de una lista, y es exactamente lo que no da un reforzamiento en castellano.' }
      ]
    },
    {
      id: 'refuerzo',
      eyebrow: 'El refuerzo',
      h2: '¿Cómo funciona un reforzamiento de programación en inglés con nosotros?',
      lede: 'Empieza por lo que el colegio está enseñando y termina cuando el estudiante puede resolver solo lo que antes lo trababa. En el medio, clases en vivo con el mismo mentor.',
      body: [
        { kind: 'ol', items: [
          '<strong>Diagnóstico.</strong> En la clase de prueba el mentor pide ver un ejercicio reciente del colegio y le plantea al estudiante un problema parecido. Así distingue si la dificultad es la lógica, el idioma o ambas.',
          '<strong>Plan con la unidad del colegio.</strong> El refuerzo sigue el orden del curso del colegio, no uno nuestro. Si la próxima unidad es listas, practicamos listas antes de que lleguen.',
          '<strong>Clases en inglés pausado.</strong> El mentor explica, pregunta y espera. El estudiante escribe el código y lo explica en voz alta, en inglés, como tendrá que hacerlo en clase.',
          '<strong>Glosario propio.</strong> Cada palabra técnica nueva va a un glosario que el estudiante arma con sus propias definiciones.',
          '<strong>Práctica de examen sin trampas.</strong> Preguntas al estilo de las evaluaciones del colegio, escritas por nosotros. Nunca resolvemos tareas calificadas ni trabajos internos por el estudiante.',
          '<strong>Salida.</strong> Cuando el estudiante resuelve solo dos unidades seguidas, proponemos espaciar las clases o pasar de refuerzo a un curso de profundización.'
        ] },
        { kind: 'p', mt: true, html: 'Muchos adolescentes de colegios bilingües pasan después del refuerzo a cursos propios: <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> o, en el último año, la ruta de <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5to de secundaria</a>. El paso no es obligatorio; depende de si la programación le gustó o solo necesitaba aprobarla.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora puede tomar las clases un alumno con jornada larga?',
      lede: 'A la hora que la familia elija, también tarde o temprano. La India marca diez horas y media más que Lima, sin cambios en todo el año.',
      body: [
        { kind: 'p', html: 'Unas conversiones hechas por nosotros (Perú UTC-5, India UTC+5:30): un alumno que sale del colegio a las 4:00 p. m. puede tener clase a las 5:30 p. m. de Lima, que son las 4:00 a. m. del día siguiente en la India; las 7:00 a. m. de un sábado en Lima son las 5:30 p. m. del sábado allá; y las 8:30 p. m. limeñas equivalen a las 7:00 a. m. siguientes. Son ejemplos para entender la diferencia, no un horario de clases.' },
        { kind: 'p', html: 'Los adolescentes peruanos ya viven conectados: según el INEI, el 92,5% de los jóvenes de 12 a 18 años usó internet en el segundo trimestre de 2026. Para una clase en vivo basta con una laptop, auriculares y un lugar tranquilo de la casa. En temporada de exámenes del colegio, las clases individuales se pueden concentrar en la semana anterior y espaciar después.' },
        { kind: 'p', html: 'Sobre el idioma, una nota tranquilizadora para las familias: en Lima, según el EF EPI 2025, el inglés de los adultos está en la banda "High", con 555 puntos. En un hogar con hijos en colegio bilingüe es frecuente que alguien en casa pueda acompañar la primera clase.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se sabe que el refuerzo está funcionando?',
    lede: 'Cinco señales que usamos para decidir con la familia si seguir, espaciar o terminar el reforzamiento. La escala es nuestra, no del colegio.',
    table: { caption: 'Cinco señales de avance en el reforzamiento de programación en inglés (nuestras)', head: ['Señal', 'Lo que se observa', 'Lo que significa'], rows: [
      ['1. Lee el error', 'Dice en voz alta qué tipo de error apareció', 'El idioma ya no lo bloquea'],
      ['2. Lo traduce', 'Explica con sus palabras qué pide el mensaje', 'Entiende el vocabulario técnico'],
      ['3. Lo corrige solo', 'Arregla el programa sin pedir la respuesta', 'La lógica está en su lugar'],
      ['4. Lo explica en inglés', 'Cuenta su solución al mentor sin pasar al castellano', 'Está listo para la clase del colegio'],
      ['5. Se adelanta', 'Llega a la unidad nueva habiendo practicado', 'El refuerzo puede espaciarse']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pregunte a su hijo qué palabra nueva de programación aprendió esta semana. Si la sabe explicar, avanza.',
      'Mire las notas del colegio, pero también si deja de evitar la tarea de computación.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Un mensaje de error no es un reto personal: es una pista escrita en inglés.',
      'Si Python no se queja, todavía no está demostrado que su programa esté bien.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para alumnos de colegios bilingües',
    lede: 'Cada uno se enseña en vivo y en inglés; la familia escoge la modalidad grupal o individual.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'Antes del primer lenguaje escrito', courses: [
        { code: 'CBRP / PRIM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Lo que muchos colegios bilingües usan en primaria, con práctica extra.' },
        { code: 'CBRP / PRIM / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Patrones y secuencias que preparan para la computación en inglés.' },
        { code: 'CBRP / PRIM / 03', slug: 'microsoft-office-kids-mastery', title: 'Office para niños', blurb: 'Word, PowerPoint y Excel para tareas y exposiciones del colegio.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Programas internacionales', courses: [
        { code: 'CBRP / SEC / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java', blurb: 'El lenguaje de varios cursos de computación de secundaria.' },
        { code: 'CBRP / SEC / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'La matemática del programa Cambridge, en el mismo idioma.' },
        { code: 'CBRP / SEC / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Mathematics AA y AI', blurb: 'Para el Diploma del IB, con apoyo en la exploración matemática.' }
      ] },
      { num: 'III', h3: 'Para ir más allá', sub: 'Después del refuerzo', courses: [
        { code: 'CBRP / MAS / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos', blurb: 'Para quien quiere competir o ir a ingeniería.' },
        { code: 'CBRP / MAS / 02', slug: 'pcep-pcap-python-certification-course', title: 'Certificación PCEP', blurb: 'Una certificación de Python con validez internacional.' },
        { code: 'CBRP / MAS / 03', slug: 'ai-ml-masterclass-teens', title: 'Inteligencia artificial', blurb: 'Modelos propios en Python, con las reglas de edad de cada herramienta.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Clases',
    h2: '¿Cómo son las clases de refuerzo en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Al salir del colegio', l: 'Después de la jornada larga de los colegios privados.' },
      { time: 'Sábado temprano', l: 'Con la cabeza fresca, lejos de las tareas de la semana.' },
      { time: 'Antes de un examen', l: 'Sesiones individuales concentradas en la unidad que viene.' }
    ],
    cells: [
      { h3: 'Material del colegio', p: 'Trabajamos sobre los ejercicios que el estudiante trae.' },
      { h3: 'Inglés sin apuro', p: 'El mentor explica despacio y verifica cada idea.' },
      { h3: 'Glosario técnico', p: 'Cada palabra nueva queda definida por el estudiante.' },
      { h3: 'Sin tareas resueltas', p: 'Nunca hacemos trabajos calificados por el alumno.' },
      { h3: 'Mentor fijo', p: 'La misma persona sigue el curso del colegio con él.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte estudiantes, o uno a uno.' }
    ]
  },

  projectsH2: 'Trabajos de estudiantes',
  projectsLede: 'Proyectos de alumnos de varias edades, todos en inglés. La galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Comentarios de familias en Google, copiados tal como fueron escritos.',

  fees: {
    h2: '¿Cuánto cuesta el reforzamiento de programación?',
    lede: 'La cuota mensual figura en dólares estadounidenses y se carga a una tarjeta; el banco de la familia la convierte. No cobramos más por clases tarde, temprano o en fin de semana.',
    free: ['Clase de prueba sin costo', 'Diagnóstico con un ejercicio del colegio', 'Sin datos de tarjeta'],
    group: ['De quince a veinte estudiantes de edad parecida', 'Dos clases en vivo cada semana', 'Mentor fijo', 'Se paga mes a mes'],
    one: ['Clases solo para su hijo', 'Ritmo del curso de su colegio', 'Más sesiones antes de exámenes']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Refuerzo de programación para colegios bilingües: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Son en vivo, por internet y en inglés, con mentores desde la India que hablan pausado y claro. Para un alumno de colegio bilingüe es justamente lo útil: refuerza la programación en el mismo idioma en que la evalúan, y practica el vocabulario técnico. Lima tiene inglés "High" en el EF EPI 2025. La coordinación con la familia puede ser en castellano por WhatsApp.' },
      { q: '¿Trabajan con el programa de mi colegio?', a: 'Sí. En la clase de prueba vemos qué usa el colegio, Scratch, Python, Java, pseudocódigo de Cambridge o el temario del IB, y el refuerzo sigue ese orden.' },
      { q: '¿Tienen convenio con colegios bilingües de Lima?', a: 'No. No tenemos relación con ningún colegio, ni con el MINEDU, el IB o Cambridge. Somos un apoyo externo que la familia contrata.' },
      { q: '¿Hacen las tareas o la evaluación interna del IB?', a: 'No. Explicamos, practicamos con ejercicios propios y revisamos lo que el estudiante escribió, pero el trabajo calificado es suyo. El IB y los colegios lo exigen, y es la única forma de que aprenda.' },
      { q: '¿Desde qué grado?', a: 'Desde 1° de primaria, unos 6 años según las edades normativas del MINEDU, hasta 5° de secundaria. También enseñamos a universitarios y adultos.' },
      { q: '¿Sirve para entrar a la universidad?', a: 'Puede ayudar a un buen resultado en Computer Science o en matemáticas del IB, que algunas universidades consideran, como la PUCP y la Universidad de Lima en sus modalidades para el Diploma. La decisión es de cada universidad y no prometemos ingresos.' },
      { q: '¿Y si mi hijo no entiende bien el inglés del mentor?', a: 'El mentor baja el ritmo, repite con otras palabras y comprueba que se entendió. Si aun así el idioma fuera una barrera, se lo diremos con franqueza tras la clase de prueba.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, las 7:00 a. m. de un sábado en Lima son las 5:30 p. m. en la India.' },
      { q: '¿Las notas del colegio cuentan con ustedes?', a: 'Las notas las pone el colegio. Nosotros entregamos un certificado de finalización propio al terminar un curso, sin valor oficial.' },
      { q: '¿Cómo se paga?', a: 'Mensualmente, con tarjeta y en dólares estadounidenses; la conversión la hace su banco. La clase de prueba es gratuita y no pide datos de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Otras páginas para familias de colegios bilingües',
    lede: 'En castellano y en inglés, según la materia.',
    items: [
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'La versión en inglés, pensada para colegios internacionales.' },
      { href: '/bachillerato-internacional-ciencias-de-la-computacion-tutor', label: 'Tutor de Computer Science del IB', p: 'La asignatura del Diploma, con su evaluación interna.' },
      { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Tutor de matemáticas IB en inglés', p: 'Matemáticas AA y AI para el Diploma.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Cursos propios después del refuerzo.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo enseñamos, en inglés.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página central para Perú.' }
    ]
  },

  start: {
    h2: 'Pida una clase de prueba con un ejercicio del colegio',
    lede: 'Traiga a la clase de prueba un ejercicio reciente de computación de su hijo. El mentor lo revisa con él en inglés, le plantea un problema parecido y le explica a la familia qué conviene reforzar primero.',
    readFirst: 'Si quiere ver antes cómo trabajamos los errores en inglés, revise el <a class="ag-inline-link" href="#error">ejemplo del TypeError</a> de esta página.',
    note: 'Las clases son en directo, por internet y en inglés, con mentores desde la India. La coordinación puede hacerse en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Refuerzo', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python, secundaria' },
        { href: '/courses/igcse-computer-science-0478-course', label: 'IGCSE Computer Science' },
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/english-medium-coding-classes-lima', label: 'Colegios internacionales' },
        { href: '/tutor-ib-matematicas-en-ingles-peru', label: 'Matemáticas IB' },
        { href: '/programacion-para-5to-de-secundaria', label: '5to de secundaria' }
      ] }
    ],
    bottomRight: 'Un error en inglés es una pista, no un castigo'
  },

  personalityCss: `
.ag-root.ag-cbrp .ag-hero h1 { max-width: 19ch; letter-spacing: -0.01em; }
.ag-root.ag-cbrp .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-cbrp .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-cbrp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cbrp .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB plans de estudio (English hours, no computing area, free-disposal hours, 45-minute hour); MINEDU press notes on COAR IB results (2,502 Diplomas in 2025, 47% COAR, 1,179 COAR, 515 Cambridge English certificates) and COAR admission; PUCP guía del postulante (Diploma de Bachillerato route, 23 credits); Universidad de Lima guía 2027-1(A) (IB route within three years); EF EPI 2025; INEI ENAHO TIC bulletin, II Trimestre 2026; tzdata. The reforzamiento steps, the progress signals and the TypeError example are our own. No school is named.',
    localProject: 'A Python lesson for students at bilingual schools: an int (points = 17) and a text that looks like a number (attempts = \'3\') produce two English TypeErrors, "can only concatenate str (not "int") to str" and "unsupported operand type(s) for /: \'int\' and \'str\'"; the learner translates them word by word, fixes them with an f-string and int(), and meets the silent case attempts * 2 = 33. Run with python3 -I; output pasted unedited.',
    requiredMentions: ['Repeat: 33 | as a number: 6', 'Un número, un texto y dos quejas de Python', 'Horas semanales de inglés y espacio para computación en el plan de estudios nacional', 'El Bachillerato Internacional en Perú, según el MINEDU (cifras de 2025)', 'Estudiantes de 5° de secundaria de los COAR con certificación Cambridge de inglés', 'Es la vía por la que muchos colegios privados agregan computación', 'puede reconocer cursos aprobados hasta un máximo de 23 créditos', 'Cinco señales de avance en el reforzamiento de programación en inglés (nuestras)', 'Un error en inglés es una pista, no un castigo'],
    sources: [
      { claim: 'English hours and no computing area in primaria and secundaria plans; free-disposal hours; 45-minute teaching hour.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2,502 IB Diplomas in Peru in 2025, 47% COAR; 1,179 COAR students; 515 Cambridge English certificates.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'COAR students can take the IB Diploma Programme.', url: 'https://www.gob.pe/institucion/minedu/noticias/1331404-minedu-pone-en-marcha-proceso-de-admision-a-los-colegios-de-alto-rendimiento' },
      { claim: 'PUCP Diploma de Bachillerato route: interviews until 28 January 2027; up to 23 credits.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'U de Lima admits IB Diploma holders within three years.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'EF EPI 2025: Lima 555, High.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use 92.5% among 12 to 18 year olds (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'Naming any bilingual, British, American or IB school in Lima, or a count of them: refused; no primary directory was fetched and schools are context only.',
      'Any partnership with a school, the IB, Cambridge or MINEDU: none; the FAQ says so.',
      'Doing graded work or the IB internal assessment for the student: refused; the page says so twice.',
      'An admission promise from the PUCP or U de Lima IB routes: refused; the universities decide.',
      'Summing the IB figures (for example COAR plus non-COAR): refused; printed as published.'
    ]
  }
};

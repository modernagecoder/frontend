// SHIP: market | Curso de Python en inglés desde cero: certificado propio vs PCEP, Python en Perú | list slicing: the stop index is left out; negative indices and steps
'use strict';
// Curso de Python en inglés (ag- Spanish-language door, Peru cluster row PE091, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: an adolescent from 13, a university student or an adult in Peru who typed "curso de python", "curso de python
// con certificado", "curso de python desde cero" or "clases de python peru" (KEYWORDS.md section 1, Python row: "con
// certificado" and "desde cero" are the two buying modifiers). Spine: why learn Python in English (EF EPI 2025 by job
// function and age); what "con certificado" can honestly mean (our certificate of completion versus the Python
// Institute's PCEP-30-03 exam, which we prepare for and never award); where Python appears in Peruvian school (Fábrica de
// Programadores, OPI rules) and where it does not (CNEB); how long "desde cero" takes; which Python version to learn
// (PEP 745); a computer, not a phone (INEI TIC II trimestre 2026); one original slicing lesson; Peru to India clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-python-en-ingles-peru/ and
// src-pages/_w2c/, fetched 2026-11-09 with curl; facts-school and facts-market raw copies fetched 2026-11-08; every quote
// grepped in the raw text):
//  Python Institute, PCEP page (pythoninstitute.org/pcep, _w2c/pcep.html): "PCEP-30-03 Exam code Entry Certification level
//    35 Exam questions 50 min Exam duration 70% Passing score 5 years Credential validity"; "Section 01 Computer
//    Programming and Python Fundamentals 17% 6 questions"; "Section 02 Control Flow: Conditional Blocks and Loops 23% 8
//    questions"; "Section 03 Data Collections: Lists, Tuples, Sets, Dictionaries, and Strings 26% 9 questions";
//    "Section 04 Functions and Exceptions 20% 7 questions"; "Section 05 File Handling and Module Imports 14% 5 questions";
//    "Indexing, slicing, membership, and nested structures"; "Purchase a PCEP-30-03 voucher".
//  Python Institute, PCAP page (_w2c/pcap.html): "PCAP-31-04 Exam code Associate Certification level 42 Exam questions 65
//    min Exam duration 72% Passing score 5 years Credential validity".
//  MINEDU press note 24 July 2025 (FACTS 45-47, facts-school/src/n-fabrica-prog/): "beneficiará a 1000 escolares de 4.º y
//    5.º de secundaria de Lima Norte con formación en programación Python y certificación internacional"; "seleccionados
//    mediante una prueba de lógica"; "El programa incluye un curso presencial de iniciación en la Universidad Nacional de
//    Ingeniería (UNI) y una formación especializada online dictada por la Universidad Privada del Norte (UPN)"; "Los
//    participantes que concluyan ambas etapas podrán rendir el examen PCEP, con validez global."; "Esta experiencia piloto
//    busca validar el modelo pedagógico y replicarlo en el ámbito nacional". (A politician is named in the note; not used.)
//  OPI, Reglamento OPI 2025 (FACTS 116, 118; facts-school/src/opi-reglamento-2025/): "Se podr´a usar solo C++." (Fase 2);
//    Fase 1 allows C++ or Python; "Queda prohibido el uso de IA generativa para la resoluci´on de problemas."
//  OPI home (FACTS 111): "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  CNEB (FACTS 33, 39): competency 28 is transversal; secundaria JER table "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4
//    Inglés 3 3 3 3 3" with no computing area.
//  PEP 745, Python 3.14 release schedule (_w2c/pep745.html): "3.14.0 final: Tuesday, 2025-10-07"; "Python 3.14 will
//    receive bugfix updates approximately every two months for approximately 24 months"; "Provided irregularly on an
//    as-needed basis until October 2030."
//  Python tutorial, "Whetting Your Appetite" (_w2c/pytut.html): "the language is named after the BBC show “Monty Python’s
//    Flying Circus” and has nothing to do with reptiles."
//  EF EPI 2025 Peru page (facts-market/src/ef_peru.txt and .raw): "EF EPI score" 519; "IT : 522"; "Student : 482";
//    cities "Lima 555"; "ageGroup1Score":469 (18-20, low), "ageGroup3Score":559 (26-30, high); "Speaking score: 480".
//  INEI Boletín TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el 90,2% de la población usuaria de
//    Internet de 6 y más años usó Internet a través de un teléfono celular"; "laptop (18,9%), computadora (14,0%)";
//    "el 36,4% de los hogares del país disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima
//    Metropolitana"; "el 97,3% de la población de 19 a 24 años utilizó Internet".
//  Course facts (content/courses/data): pcep-pcap-python-certification-course "5 months (20 weeks) for PCEP then PCAP,
//    joinable any month", "We do not sell exam vouchers and take no commission on them; you book directly with the Python
//    Institute", "We do not guarantee a pass"; python-complete-masterclass-teens "10-12 months (40-48 weeks)", ages 13 to
//    18; python-programming-masterclass-zero-to-advanced-college "9-11 months (36-44 weeks)", 18+; every course
//    "Certificate from Modern Age Coders, awarded on passing the final exam".
//  Time: tzdata Zone America/Lima -5:00 (no DST), Asia/Kolkata +5:30 (facts-geo/timezone.tsv): India 10 h 30 min ahead.
// Our own calculations (python3 -I): 6+8+9+7+5 = 35 questions; 70% of 35 = 24.5, so at least 25 correct answers if every
//    question weighs the same (our reading; the Python Institute publishes a percentage, not a count).
// Our own example, run with python3 -I (meses.py in the src-pages folder), exact output:
//    Mistake: ['February', 'March'] / A: ['January', 'February', 'March'] / B: ['March', 'April', ... 'December'] /
//    C: December / D: ['January', 'April', 'July', 'October'] / E: ['April', 'March', 'February'] / F: 10 months
// Lesson family: list slicing; the stop index is left out, negative indices count from the end, a step skips or reverses.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "months = ['January', 'February', 'March', 'April', 'May', 'June',",
  "          'July', 'August', 'September', 'October', 'November', 'December']",
  '',
  "print('Mistake:', months[1:3])",
  "print('A:', months[0:3])",
  "print('B:', months[2:12])",
  "print('C:', months[-1])",
  "print('D:', months[::3])",
  "print('E:', months[3:0:-1])",
  "print('F:', len(months[2:12]), 'months')"
].join('\n');

const OUT = [
  "Mistake: ['February', 'March']",
  "A: ['January', 'February', 'March']",
  "B: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']",
  'C: December',
  "D: ['January', 'April', 'July', 'October']",
  "E: ['April', 'March', 'February']",
  'F: 10 months'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Curso de Python en inglés' },
  slug: 'curso-de-python-en-ingles-peru',
  code: 'pyi',
  accent: '#006567',
  accentRationale: 'Curso de Python en inglés: a deep sea teal #006567, the colour of the Pacific off the Lima coast on a grey winter morning, kept apart from the greens of the children\'s pages; contrast 5.57 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de Python en inglés',
  title: 'Curso de Python en inglés desde cero, en vivo, Perú',
  description: 'Curso de Python en vivo, en línea y en inglés para adolescentes y adultos en Perú: desde cero, con nuestro certificado y preparación para el examen PCEP.',
  ogDescription: 'Python desde cero y en inglés para Perú: qué significa un curso con certificado, qué evalúa el PCEP, cuánto tiempo toma y una lección propia con listas.',
  twitterDescription: 'Python en vivo y en inglés desde Perú, para adolescentes y adultos: desde cero, en grupo o individual y a la hora que usted elija.',
  pageName: 'Curso de Python en inglés',
  webPageDescription: 'Guía para quien busca un curso de Python en Perú dictado en vivo y en inglés: qué certificado entrega un curso y qué es el examen PCEP del Python Institute, dónde aparece Python en el sistema escolar peruano (Fábrica de Programadores, Olimpiada Peruana de Informática), cuánto toma aprender desde cero, qué versión de Python aprender y una lección propia sobre cortes de listas.',
  courseDescription: 'Clases en vivo y en línea de Python para adolescentes desde los 13 años, universitarios y adultos en todo el Perú, dictadas solo en inglés: desde cero hasta proyectos propios, con preparación opcional para el examen PCEP, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Curso de Python en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#ingles', label: 'En inglés' },
    { href: '#certificado', label: 'Certificado' },
    { href: '#peru', label: 'Python en Perú' },
    { href: '#desde-cero', label: 'Desde cero' },
    { href: '#leccion', label: 'Lección' }
  ],
  eyebrow: 'Perú &middot; Curso de Python &middot; Desde los 13 años',
  h1: 'Curso de Python en inglés, desde cero y en vivo',
  lede: 'Esta página es para quien escribió "curso de Python con certificado" o "Python desde cero" y quiere, además, estudiar en inglés: un estudiante de secundaria, alguien que está en la universidad o una persona que trabaja y quiere cambiar de rumbo. Explicamos qué certificado entregamos y cuál no, qué evalúa el examen PCEP, cuánto toma empezar de cero y cómo es una clase por dentro.',
  secondaryCta: { href: '#certificado', label: '¿Qué certificado obtengo?' },
  wa: 'Hola Modern Age Coders, quiero llevar un curso de Python en inglés desde Perú. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; Python explicado en inglés claro, sin videos grabados',
  spec: [
    ['Para quién', 'Adolescentes desde 13 años, universitarios y adultos'],
    ['Nivel', 'Desde cero; también para quien ya escribió algo de código'],
    ['Idioma', 'Solo inglés, con un mentor que se adapta a su ritmo'],
    ['Formato', 'Grupo de quince a veinte estudiantes, o individual'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Certificado', 'El nuestro al aprobar; el PCEP se rinde aparte']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Modern Age Coders dicta un curso de Python en vivo, en línea y en inglés para estudiantes en todo el Perú: adolescentes desde los 13 años, universitarios y adultos que empiezan desde cero. Las clases las da por videollamada un mentor que vive en la India, con pantalla compartida y a un ritmo que se ajusta a usted. Al aprobar el examen final del curso recibe nuestro propio certificado de finalización; si además quiere el PCEP del Python Institute, lo preparamos y usted lo rinde directamente con ellos. Elija una clase grupal o clases individuales, cualquier día y a cualquier hora. La primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres caminos para aprender Python en inglés',
    lede: 'Elegimos el curso según la edad y la meta: aprender de verdad desde la base, llegar a nivel profesional o prepararse para un examen internacional.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PYI / 01', title: 'Python para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'De 13 a 18 años, sin experiencia previa. De la primera variable a juegos, automatizaciones y un proyecto final propio, en diez a doce meses.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PYI / 02', title: 'Python de cero a avanzado', alt: 'Imagen del curso de Python de cero a avanzado', note: 'Desde los 18 años, para universitarios y profesionales. Python a fondo, pruebas, Git y APIs, con una mirada a la web, los datos y la IA.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PYI / 03', title: 'Preparación PCEP y PCAP', alt: 'Imagen del curso de preparación para las certificaciones PCEP y PCAP', note: 'Desde unos 13 años. Prepara los dos exámenes del Python Institute, primero el PCEP y luego el PCAP, en unas veinte semanas.' }
    ]
  },

  sections: [
    {
      id: 'ingles',
      eyebrow: 'Python en inglés',
      h2: '¿Por qué estudiar Python en inglés si vivo en Perú?',
      lede: 'Porque Python ya está escrito en inglés. Las palabras clave, los mensajes de error, la documentación oficial y casi todas las preguntas y respuestas que encontrará en internet están en ese idioma. Estudiarlo en inglés desde el principio le ahorra una traducción mental en cada línea.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Los errores hablan inglés', p: 'Cuando un programa falla, Python responde con frases como <code>IndexError: list index out of range</code> o <code>NameError: name \'total\' is not defined</code>. Quien entiende la frase entiende el problema; quien no, copia el mensaje en un buscador y espera.' },
          { h3: 'La documentación también', p: 'El tutorial oficial de python.org, las bibliotecas que usará después (para datos, web o IA) y sus guías se publican primero en inglés. Leerlas sin traductor es una ventaja que se nota a partir del segundo mes.' },
          { h3: 'Se practica hablando', p: 'En una clase en vivo usted explica en voz alta qué hace su código y por qué falló. Es práctica oral real, con vocabulario técnico, que ningún curso grabado le pide.' }
        ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'Puntajes del EF EPI 2025 para Perú, por grupo (índice de dominio del inglés de EF)', head: ['Grupo', 'Puntaje', 'Lectura del dato'], rows: [
          ['Perú, promedio nacional', '519', 'Nivel moderado'],
          ['Lima, ciudad', '555', 'Nivel alto (EF lo fija desde 550)'],
          ['Personas que trabajan en TI', '522', 'Apenas sobre el promedio del país'],
          ['Estudiantes', '482', 'Por debajo del promedio del país'],
          ['De 18 a 20 años', '469', 'Nivel bajo'],
          ['De 26 a 30 años', '559', 'Nivel alto'],
          ['Expresión oral, todo el país', '480', 'La habilidad más débil']
        ] },
        { kind: 'source', html: 'Fuente: ficha del Perú del EF EPI 2025 en el sitio de EF Education First, consultada en noviembre de 2026; allí mismo aparecen los puntajes por edad y por función laboral. El EF EPI mide a personas que rinden el examen de EF, desde los 18 años, y no es una muestra de toda la población.' },
        { kind: 'p', mt: true, html: 'Lo que dice la tabla es útil para decidir. En el EF EPI 2025, quienes trabajan en tecnologías de la información en Perú tienen 522 puntos, casi lo mismo que el país, y el grupo de 18 a 20 años marca 469, el nivel bajo. Es decir, muchos estudiantes peruanos llegan a la universidad leyendo inglés técnico con esfuerzo, justo cuando más lo necesitan. Un curso de Python dictado en inglés ataca las dos cosas a la vez: el lenguaje de programación y el idioma en que está escrito.' },
        { kind: 'p', html: 'No necesita un inglés avanzado para empezar. Basta con poder seguir una explicación sencilla con apoyo de la pantalla. El mentor habla con frases cortas, escribe lo que dice y repite con otras palabras cuando hace falta; usted puede preguntar como le salga, y con las semanas notará que ya no traduce, sino que piensa la instrucción directamente. Si prefiere ver antes cómo trabajamos con estudiantes de colegios bilingües en Lima, la página de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">clases de programación en inglés en Lima</a> lo explica con detalle.' }
      ]
    },
    {
      id: 'certificado',
      eyebrow: 'Con certificado',
      h2: '¿Un curso de Python con certificado vale la pena?',
      lede: 'Depende de qué certificado. Conviene separar dos cosas que en los anuncios aparecen mezcladas: el certificado que entrega quien dicta el curso, y una certificación que se obtiene rindiendo un examen externo e independiente.',
      body: [
        { kind: 'two',
          leftH3: 'Nuestro certificado de finalización',
          left: [
            'Al terminar cualquiera de nuestros cursos y aprobar su examen final, usted recibe un certificado de Modern Age Coders. Dice qué curso llevó y que lo aprobó. Es nuestro: no es un título, no tiene carácter oficial y no vale como acreditación ante el MINEDU, la SUNEDU ni ninguna universidad.',
            'Su valor real está en lo que lo respalda: los proyectos que usted construyó durante el curso y que puede mostrar en una entrevista, en GitHub o en su postulación a unas prácticas.'
          ],
          rightH3: 'La certificación PCEP del Python Institute',
          right: [
            'El PCEP (Certified Entry-Level Python Programmer) es un examen del OpenEDG Python Institute, una organización que no tiene relación con nosotros. Lo rinde usted por su cuenta, en línea, comprando el voucher directamente al Python Institute.',
            'Nosotros preparamos para ese examen; no lo otorgamos, no vendemos vouchers ni cobramos comisión por ellos, y no garantizamos que se apruebe, porque nadie puede garantizarlo honestamente.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Qué evalúa el examen PCEP-30-03, según el Python Institute', head: ['Sección del examen', 'Peso', 'Preguntas'], rows: [
          ['1. Fundamentos de programación y de Python', '17%', '6'],
          ['2. Control de flujo: condicionales y bucles', '23%', '8'],
          ['3. Colecciones: listas, tuplas, conjuntos, diccionarios y cadenas', '26%', '9'],
          ['4. Funciones y excepciones', '20%', '7'],
          ['5. Archivos e importación de módulos', '14%', '5'],
          ['Total', '100%', '35']
        ] },
        { kind: 'source', html: 'Fuente: OpenEDG Python Institute, página "PCEP&trade; Certified Entry-Level Python Programmer" (pythoninstitute.org/pcep), leída el 9 de noviembre de 2026. La misma página indica 50 minutos de examen, 70% para aprobar y una validez de 5 años. Los nombres de las secciones son nuestra traducción. El siguiente nivel, el PCAP-31-04, tiene 42 preguntas, 65 minutos y 72% para aprobar, según su propia página.' },
        { kind: 'p', mt: true, html: 'Haga la cuenta con nosotros: 70% de 35 preguntas son 24,5, así que, si todas pesaran igual, harían falta al menos 25 respuestas correctas (cálculo nuestro; el Python Institute publica un porcentaje, no un número de respuestas). La sección más pesada es la de colecciones, con 9 preguntas, y es la que más trampas tiene: índices, cortes de listas y métodos de cadenas. Por eso la lección de ejemplo de esta página trata justamente de cortes de listas.' },
        { kind: 'p', html: '¿Vale la pena? Para un estudiante de secundaria o de los primeros ciclos de la universidad, el PCEP es una forma ordenada de demostrar que domina lo básico, y obliga a estudiar los detalles que un curso apurado se salta. Para alguien que ya programa en su trabajo, un portafolio con dos o tres proyectos suele decir más. Nuestra recomendación es estudiar Python para entenderlo, y decidir el examen cuando las preguntas de práctica ya no le parezcan difíciles.' }
      ]
    },
    {
      id: 'peru',
      eyebrow: 'Python en el sistema escolar',
      h2: '¿Se enseña Python en los colegios del Perú?',
      lede: 'En general, no como curso. El Currículo Nacional (CNEB) no tiene un área de computación o programación en secundaria, aunque el MINEDU sí ha probado programas piloto con Python, y las olimpiadas de informática del país lo aceptan en su primera fase.',
      body: [
        { kind: 'two',
          leftH3: 'Fábrica de Programadores',
          left: [
            'El 24 de julio de 2025 el MINEDU anunció la estrategia Fábrica de Programadores: en su primera etapa, 1000 escolares de 4° y 5° de secundaria de Lima Norte, "seleccionados mediante una prueba de lógica", recibirían formación en Python con certificación internacional, en alianza con Cisco Networking Academy.',
            'Según la misma nota, el programa combina un curso presencial de iniciación en la Universidad Nacional de Ingeniería (UNI) y una formación en línea de la Universidad Privada del Norte (UPN), y quienes concluyan ambas etapas "podrán rendir el examen PCEP". El MINEDU lo describe como una experiencia piloto que busca replicarse en el ámbito nacional.'
          ],
          rightH3: 'Olimpiada Peruana de Informática',
          right: [
            'La Universidad de Ingeniería y Tecnología (UTEC) organiza la Olimpiada Peruana de Informática (OPI), abierta y gratuita para todos los estudiantes de secundaria del país. Su reglamento 2025 permite C++ o Python en la Fase 1, pero en la Fase 2, la final presencial, "se podrá usar solo C++".',
            'El mismo reglamento prohíbe el uso de IA generativa para resolver los problemas. Si un adolescente apunta a la OPI, Python es una buena puerta de entrada, y después conviene sumar C++. No estamos vinculados a la UTEC ni a la OPI.'
          ] },
        { kind: 'p', mt: true, html: 'Fuera de esos programas, la competencia digital del CNEB, "Se desenvuelve en entornos virtuales generados por las TIC", es transversal: se trabaja dentro de otras áreas y no tiene horas propias. En la jornada escolar regular de secundaria, la tabla de horas del CNEB da 4 horas semanales a Matemática y 3 a Inglés, y ninguna a programación. Un estudiante que quiere aprender Python lo hace casi siempre fuera del horario del colegio, que es justamente donde encajan nuestras clases.' },
        { kind: 'p', html: 'Dos aclaraciones para no confundir. Primera: la Fábrica de Programadores es un programa del Estado con sus propios requisitos y su propia convocatoria, y nosotros no participamos en él. Segunda: nuestro curso no reemplaza ningún curso del colegio ni otorga notas; acompaña al colegio. Si usted es madre o padre de un niño de primaria, la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> está pensada para esa edad.' }
      ]
    },
    {
      id: 'desde-cero',
      eyebrow: 'Desde cero',
      h2: '¿Cuánto tiempo toma aprender Python desde cero?',
      lede: 'Lo básico, en unas semanas; usarlo con soltura en proyectos propios, varios meses. Con dos clases en vivo por semana y práctica entre clases, la mayoría escribe programas útiles al tercer mes y termina un proyecto completo antes del año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Duración de nuestros cursos de Python, según la ficha de cada curso', head: ['Curso', 'Para quién', 'Duración'], rows: [
          ['Python para adolescentes', 'De 13 a 18 años, sin experiencia', 'De 10 a 12 meses (40 a 48 semanas)'],
          ['Python de cero a avanzado', 'Desde los 18 años, sin experiencia', 'De 9 a 11 meses (36 a 44 semanas)'],
          ['Preparación PCEP y PCAP', 'Desde unos 13 años; el tramo PCEP no pide experiencia', 'Unos 5 meses (20 semanas), se empieza cualquier mes'],
          ['Preparación PCAP', 'Con Python básico, nivel PCEP o equivalente', 'Unos 4 meses (16 semanas)']
        ] },
        { kind: 'source', html: 'Fuente: fichas de los cursos en modernagecoders.com/courses, revisadas el 9 de noviembre de 2026. Todas las fichas indican dos clases en vivo por semana más práctica personal.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Semanas 1 a 4: hablar con la computadora.</strong> Variables, tipos de datos, <code>input</code> y <code>print</code>, operadores. Se aprende a leer los mensajes de error en vez de temerles.',
          '<strong>Semanas 5 a 10: decidir y repetir.</strong> Condicionales con <code>if</code>, <code>elif</code> y <code>else</code>, bucles <code>for</code> y <code>while</code>, y los primeros programas que resuelven algo pequeño, como un conversor de unidades.',
          '<strong>Semanas 11 a 18: guardar y ordenar datos.</strong> Listas, tuplas, diccionarios y cadenas, con sus índices y cortes. Es el tramo que más pesa en el PCEP y el que más se nota en la práctica.',
          '<strong>Semanas 19 a 26: funciones y errores.</strong> Dividir un programa en funciones, manejar excepciones con <code>try</code> y <code>except</code>, leer y escribir archivos.',
          '<strong>Desde el sexto mes: un proyecto propio.</strong> Una herramienta para su trabajo, un pequeño análisis de datos, un bot o un juego. Aquí el curso se ramifica según su meta: web, datos, automatización o IA.'
        ] },
        { kind: 'p', mt: true, html: 'Este plan de semanas es nuestro y orientativo; el mentor lo ajusta a su ritmo. Lo que alarga el camino no suele ser la dificultad de Python, sino las semanas sin practicar. Por eso las clases son en vivo: hay una hora fija que usted eligió, alguien que espera ver su avance y un ejercicio pendiente para la próxima vez.' }
      ]
    },
    {
      id: 'version',
      eyebrow: 'Qué Python aprender',
      h2: '¿Qué versión de Python conviene aprender en 2026?',
      lede: 'Python 3, en su versión estable más reciente. Las diferencias entre versiones cercanas son pequeñas para quien empieza; lo importante es no aprender con materiales de Python 2, que ya no se usa.',
      body: [
        { kind: 'p', html: 'El calendario oficial de Python 3.14, publicado como PEP 745 en peps.python.org, registra que la versión final salió el martes 7 de octubre de 2025, que recibirá correcciones aproximadamente cada dos meses durante unos 24 meses, y que después tendrá solo parches de seguridad hasta octubre de 2030. En nuestras clases usamos esa línea 3.14; los ejemplos de esta página se ejecutaron con Python 3.14.8.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que necesita en su computadora',
          left: [
            'Python se instala gratis desde python.org en Windows, macOS o Linux. En la primera clase el mentor lo acompaña en la instalación y en la de un editor de código, y prueba con usted que todo funcione.',
            'Una laptop o una computadora de escritorio sencilla basta. No hace falta una máquina potente para aprender; sí hace falta un teclado.'
          ],
          rightH3: 'Por qué no alcanza el celular',
          right: [
            'El INEI, en su boletín de TIC en los hogares del segundo trimestre de 2026, reporta que el 90,2% de quienes usan internet en el país lo hacen desde un celular, frente a un 18,9% que entra desde una laptop y un 14,0% desde una computadora de escritorio.',
            'Ese boletín registra al menos una computadora en el 36,4% de los hogares peruanos, cifra que sube al 53,3% en Lima Metropolitana. Para programar en serio hace falta una, aunque la comparta con la familia.'
          ] },
        { kind: 'p', mt: true, html: 'Un dato curioso que los mentores cuentan en la primera clase: el tutorial oficial de Python explica que el lenguaje se llama así por el programa de la BBC "Monty Python\'s Flying Circus" y no por la serpiente. Es un buen primer párrafo para leer en inglés, porque es corto, es gracioso y ya usa vocabulario que volverá a ver.' }
      ]
    },
    {
      id: 'leccion',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo es una clase de Python en inglés por dentro?',
      lede: 'Este es un ejercicio real de nuestras clases, escrito por nosotros: una lista con los doce meses en inglés y varios cortes. Sirve para practicar índices y cortes, el tema que más se repite en el PCEP, y de paso repasa el calendario peruano.',
      body: [
        { kind: 'code', label: 'Cortes de una lista en Python', lang: 'Python', code: PY, note: 'Antes de ejecutarlo, el mentor pregunta: "Which months will each line print?" Usted escribe su predicción para cada línea y recién entonces ejecuta.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Resultado copiado tal cual de la terminal, tras correr el programa con Python 3.14.8.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El error de la primera línea.</strong> Queríamos los meses de vacaciones escolares, de enero a marzo, y escribimos <code>months[1:3]</code>. Salió <code>[\'February\', \'March\']</code>: en Python el primer elemento es el índice 0, no el 1. Enero es <code>months[0]</code>.',
          '<strong>El final no se incluye.</strong> En <code>months[0:3]</code> el corte se detiene antes del índice 3, que es abril. Por eso salen tres meses exactos. La regla en inglés que repetimos en clase: "start is included, stop is not".',
          '<strong>Los meses de colegio.</strong> El año escolar 2026 fue del 16 de marzo al 18 de diciembre de 2026 según la RM 501-2025-MINEDU. Con <code>months[2:12]</code> salen de marzo a diciembre, y la línea F confirma que son 10 meses con <code>len</code>.',
          '<strong>Contar desde el final.</strong> <code>months[-1]</code> es el último elemento, diciembre, sin necesidad de saber cuántos hay. El índice negativo es una de las preguntas favoritas de los exámenes de práctica.',
          '<strong>Saltar y retroceder.</strong> Con un tercer número, el paso, <code>months[::3]</code> toma un mes de cada tres: el primero de cada trimestre. Y <code>months[3:0:-1]</code> camina hacia atrás desde abril y se detiene antes de enero. Reto para la casa: ¿qué corte da los tres meses de verano en orden inverso, de marzo a enero?'
        ] },
        { kind: 'p', mt: true, html: 'Lo que enseña este ejercicio no es un truco de sintaxis: es el hábito de predecir antes de ejecutar y de explicar con palabras propias por qué el resultado fue otro. Si alguien le da la respuesta del reto, o se la da una herramienta de IA, usted sabrá el corte pero no sabrá por qué funciona, y en el examen o en el trabajo la pregunta siguiente será distinta. En la clase el mentor no le dicta la solución; le hace la pregunta que lo lleva a encontrarla.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puedo tomar clases de Python desde Perú?',
      lede: 'A la hora que usted elija. Los mentores están en la India, así que esta tabla convierte algunas horas de Perú a la hora de la India para que vea cómo se cruzan los dos relojes. Son ejemplos de conversión, no un horario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'Algunas horas de Perú y su equivalente en la India', head: ['En Perú', 'En la India', '¿Qué día es allá?'], rows: [
          ['6:00 a. m.', '4:30 p. m.', 'El mismo día'],
          ['7:30 a. m.', '6:00 p. m.', 'El mismo día'],
          ['9:00 a. m.', '7:30 p. m.', 'El mismo día'],
          ['1:00 p. m.', '11:30 p. m.', 'El mismo día'],
          ['8:00 p. m.', '6:30 a. m.', 'El día siguiente'],
          ['10:00 p. m.', '8:30 a. m.', 'El día siguiente']
        ] },
        { kind: 'source', html: 'La hora oficial peruana es UTC-5 los doce meses, sin adelantos de verano (base de datos tzdata, zona America/Lima; hora oficial del INACAL). En la India rige UTC+5:30, también sin cambios estacionales. La diferencia, por lo tanto, es fija: allá son 10 horas y 30 minutos más, en enero igual que en julio.' },
        { kind: 'p', mt: true, html: 'Las filas de la mañana temprano y de la noche suelen ser las que eligen quienes trabajan o estudian en la universidad: una clase antes de salir de casa o al volver. Los adolescentes de colegio suelen preferir la tarde. Cuando reserve la clase gratis, el calendario le mostrará las horas ya convertidas a la hora peruana, así que no tendrá que calcular nada. Si piensa empezar en enero, aprovechando las vacaciones, la página de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación online</a> propone un plan de verano.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo sé que estoy avanzando en Python?',
    lede: 'Usamos cinco niveles propios para ubicarlo al inicio y medir su avance. No son niveles oficiales; son la forma en que el mentor le cuenta dónde está.',
    table: { caption: 'Cinco niveles de Python (nuestros)', head: ['Nivel', 'Tiempo habitual', 'Usted puede'], rows: [
      ['1. Leer código', 'Primer mes', 'leer un programa corto y decir qué imprimirá antes de ejecutarlo'],
      ['2. Escribir lógica', 'Meses 2 y 3', 'resolver un problema pequeño con condicionales y bucles sin copiar un modelo'],
      ['3. Manejar datos', 'Meses 3 a 5', 'usar listas, diccionarios y cortes sin perderse en los índices'],
      ['4. Estructurar', 'Meses 5 a 7', 'dividir un programa en funciones, manejar errores y leer archivos'],
      ['5. Construir', 'Desde el mes 7', 'planificar, programar y explicar en inglés un proyecto completo']
    ] },
    left: { h3: 'Si estudia por su cuenta además', ps: [
      'Lea el código de otros antes de escribir el suyo. Un programa ajeno bien leído enseña más que tres tutoriales en video.',
      'Lleve un cuaderno de errores: el mensaje exacto, lo que lo causó y cómo lo arregló. A los dos meses verá que se repiten pocos.'
    ] },
    right: { h3: 'Si piensa rendir el PCEP', ps: [
      'Cuando el nivel 3 le resulte cómodo, empiece con preguntas de práctica cronometradas: 35 preguntas en 50 minutos dejan menos de un minuto y medio por pregunta.',
      'Revise cada respuesta equivocada hasta poder explicarla en una frase. Ese es el momento de decidir si compra el voucher.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más después de Python',
    lede: 'Python abre muchas puertas. Estos cursos siguen el camino según lo que usted quiera construir, todos en vivo y en inglés.',
    bands: [
      { num: 'I', h3: 'Python aplicado', sub: 'Desde los 18 años', courses: [
        { code: 'PYI / APLICADO / 01', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python', blurb: 'Scripts, extracción de datos de la web e IA aplicada a tareas reales.' },
        { code: 'PYI / APLICADO / 02', slug: 'python-web-development-django-flask-course', title: 'Web con Django y Flask', blurb: 'Aplicaciones web completas para quien ya domina lo básico de Python.' },
        { code: 'PYI / APLICADO / 03', slug: 'pcap-python-certification-prep-course', title: 'Preparación PCAP', blurb: 'El segundo examen del Python Institute, con programación orientada a objetos.' }
      ] },
      { num: 'II', h3: 'Datos e inteligencia artificial', sub: 'Adolescentes y adultos', courses: [
        { code: 'PYI / DATOS / 01', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos para adolescentes', blurb: 'De 14 a 18 años, con Python básico: datos reales y primeros modelos.' },
        { code: 'PYI / DATOS / 02', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos', blurb: 'Excel, SQL, Python y tableros, desde cero y desde los 18 años.' },
        { code: 'PYI / DATOS / 03', slug: 'ai-ml-masterclass-teens', title: 'IA y machine learning para adolescentes', blurb: 'De 13 a 18 años, de Python a modelos que aprenden de datos.' }
      ] },
      { num: 'III', h3: 'Pensar como programador', sub: 'Algoritmos y proyectos', courses: [
        { code: 'PYI / LOGICA / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolución de problemas para adolescentes', blurb: 'Lógica, estructuras de datos y algoritmos, de 13 a 18 años.' },
        { code: 'PYI / LOGICA / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'La base de las entrevistas técnicas, desde los 18 años.' },
        { code: 'PYI / LOGICA / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe coding con criterio', blurb: 'Programar con ayuda de IA revisando cada línea, desde los 18 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases de Python?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes de trabajar', l: 'Una hora temprano, cuando la mente está fresca.' },
      { time: 'Después de clases', l: 'Para escolares y universitarios, por la tarde.' },
      { time: 'Individual', l: 'El día y la hora que usted fije con su mentor.' }
    ],
    cells: [
      { h3: 'Pantalla compartida', p: 'Usted escribe en su editor y el mentor ve cada línea en el momento.' },
      { h3: 'Inglés a su ritmo', p: 'Frases cortas, palabras escritas en pantalla y tiempo para preguntar.' },
      { h3: 'Ejercicios propios', p: 'Problemas escritos por nosotros, no copiados de un banco de exámenes.' },
      { h3: 'Un proyecto por tramo', p: 'Cada etapa cierra con un programa que usted puede mostrar.' },
      { h3: 'Mismo mentor', p: 'La persona que conoce sus errores frecuentes y su forma de pensar.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte estudiantes de nivel parecido, o usted solo.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Así se ve el trabajo de estudiantes que empezaron, como usted, sin saber programar. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones publicadas en Google por estudiantes y familias, sin editar y en inglés, el idioma de las clases.',

  fees: {
    h2: 'Cuánto cuesta el curso de Python desde Perú',
    lede: 'El precio mensual se muestra en dólares estadounidenses y se cobra con tarjeta de crédito o débito. La conversión a su moneda la hace su banco, de modo que el cargo puede variar un poco con el tipo de cambio de ese día.',
    free: ['Una clase de prueba sin costo', 'Una conversación sobre su meta y su nivel', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte estudiantes de nivel parecido', 'Un mentor fijo durante el curso', 'Dos clases en vivo a la semana', 'Pago mes a mes, sin permanencia'],
    one: ['Usted y su mentor, sin nadie más', 'Su propio ritmo, su propia meta', 'El horario que usted decida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Curso de Python en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan solo en inglés, siempre en vivo y por internet, y para quien estudia Python eso suma: aprende el lenguaje en el idioma en que está escrito y gana vocabulario técnico en cada sesión. El mentor habla claro y espera sus preguntas. El EF EPI 2025 coloca a Lima en la banda alta de inglés; lo que más se resiste a los peruanos es hablarlo, y eso se entrena conversando.' },
      { q: '¿El curso de Python tiene certificado?', a: 'Sí, el nuestro: al aprobar el examen final del curso recibe un certificado de finalización de Modern Age Coders. No tiene carácter oficial ni validez ante el MINEDU, la SUNEDU o una universidad. Si quiere una certificación externa, preparamos el examen PCEP del Python Institute, que usted rinde directamente con ellos.' },
      { q: '¿Qué es el PCEP y cuántas preguntas tiene?', a: 'Es la certificación de nivel inicial del OpenEDG Python Institute. Según su página, el examen PCEP-30-03 tiene 35 preguntas, dura 50 minutos, pide 70% para aprobar y la credencial tiene una validez de 5 años. Evalúa fundamentos, control de flujo, colecciones, funciones y excepciones, y archivos.' },
      { q: '¿Puedo aprender Python desde cero sin saber programar?', a: 'Sí. Nuestros cursos de Python para adolescentes y de cero a avanzado no piden experiencia previa. Lo que sí ayuda es practicar entre clases: con dos clases por semana, la mayoría escribe programas útiles hacia el tercer mes.' },
      { q: '¿Cuánto tiempo toma aprender Python?', a: 'Lo básico, unas semanas. Según la ficha de cada curso, el de adolescentes dura de 10 a 12 meses y el de cero a avanzado de 9 a 11; la preparación para PCEP y PCAP, unos 5 meses. El ritmo final depende de cuánto practique usted.' },
      { q: '¿Desde qué edad se puede llevar este curso?', a: 'Desde los 13 años, en secundaria, y sin límite de edad. Para niños de 9 a 12 años tenemos un curso de Python e IA para niños, con otro ritmo y otros proyectos.' },
      { q: '¿Se enseña Python en los colegios del Perú?', a: 'No como área del currículo: el CNEB no tiene un área de programación en secundaria. El MINEDU anunció en julio de 2025 la Fábrica de Programadores, un piloto de Python con examen PCEP para 1000 escolares de 4° y 5° de secundaria de Lima Norte. No estamos vinculados a ese programa.' },
      { q: '¿En qué horario puedo llevar el curso?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre los dos países hay diez horas y media de diferencia, siempre a favor de la India: si usted fija su clase a las 7:30 a. m. de Lima, para su mentor son las 6:00 p. m.' },
      { q: '¿Necesito una computadora o me basta el celular?', a: 'Necesita una laptop o PC con teclado, cámara web y micrófono. Con un celular se puede ver la clase, pero no se puede programar con comodidad. Python se instala gratis y el mentor lo ayuda en la primera clase.' },
      { q: '¿En qué moneda pago?', a: 'El cobro es en dólares de Estados Unidos, con tarjeta, y la conversión la hace el banco emisor. Para la clase de prueba no se pide ningún pago ni datos de tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo sobre Python',
    lede: 'Páginas de nuestro sitio que amplían lo que vio aquí, en inglés salvo la primera.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos para estudiantes en Perú, por edad y por tema.' },
      { href: '/python-certification-pcep-pcap-course', label: 'PCEP and PCAP course', p: 'La preparación para las dos certificaciones del Python Institute, en detalle.' },
      { href: '/python-indentation-error-explained', label: 'Python indentation error', p: 'El error más común de las primeras semanas, explicado paso a paso.' },
      { href: '/python-for-data-science', label: 'Python for data science', p: 'Qué se necesita saber de Python antes de trabajar con datos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase en vivo con un mentor, por dentro.' },
      { href: '/courses', label: 'All courses', p: 'Cada curso que dictamos, ordenado por edad y por tema.' }
    ]
  },

  start: {
    h2: 'Reserve su primera clase de Python',
    lede: 'En la clase gratis el mentor le pregunta qué quiere lograr con Python, le propone un ejercicio corto en inglés sencillo y observa cómo razona. A partir de eso le sugiere un curso y una modalidad, y usted decide con calma.',
    readFirst: 'Antes de reservar puede revisar <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre la dinámica de cada sesión, y <a class="ag-inline-link" href="/python-certification-pcep-pcap-course">PCEP and PCAP course</a>, sobre el examen; ambas páginas están en inglés.',
    note: 'Las clases se dictan en vivo y en línea desde la India, solo en inglés. Por WhatsApp puede escribirnos en castellano y le respondemos lo antes posible.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de Python', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python de cero a avanzado' },
        { href: '/courses/pcep-pcap-python-certification-course', label: 'Preparación PCEP y PCAP' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para leer', links: [
        { href: '/python-certification-pcep-pcap-course', label: 'Certificación PCEP' },
        { href: '/python-for-data-science', label: 'Python para datos' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Start is included, stop is not'
  },

  personalityCss: `
.ag-root.ag-pyi .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-pyi .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-pyi .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-pyi .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pyi .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'OpenEDG Python Institute (PCEP-30-03 and PCAP-31-04 pages, read 9 Nov 2026); MINEDU press note of 24 July 2025 on Fábrica de Programadores; UTEC OPI home and Reglamento OPI 2025; MINEDU CNEB (competency 28, secundaria hour table); PEP 745 and the python.org tutorial; EF EPI 2025 Peru page; INEI Boletín TIC II trimestre 2026; RM 501-2025-MINEDU for the 2026 school year; tzdata and INACAL for time. Course durations from our own course data. Example code, the week plan and the five levels are our own.',
    localProject: 'Slicing the twelve months in Python, in English, with the Peruvian calendar: months[1:3] wrongly gives February and March for the January to March school holidays; months[0:3] fixes it because the stop index is left out; months[2:12] gives the ten school months of 2026 (RM 501-2025-MINEDU, 16 March to 18 December); months[-1], months[::3] and months[3:0:-1] show negative indices and steps. Run with python3 -I, output pasted exactly. Lesson family: list slicing; the stop index is left out, negative indices count from the end, a step skips or reverses.',
    requiredMentions: ["Mistake: ['February', 'March']", 'E: [\'April\', \'March\', \'February\']', 'Start is included, stop is not', '70% de 35 preguntas son 24,5', 'Qué evalúa el examen PCEP-30-03', 'el 90,2% de quienes usan internet en el país lo hacen desde un celular', 'Personas que trabajan en TI', 'seleccionados mediante una prueba de lógica', 'el martes 7 de octubre de 2025', 'se podrá usar solo C++'],
    sources: [
      { claim: 'PCEP-30-03: 35 questions, 50 minutes, 70% pass, 5-year validity; five sections with weights and question counts.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'PCAP-31-04: 42 questions, 65 minutes, 72% pass.', url: 'https://pythoninstitute.org/pcap' },
      { claim: 'Fábrica de Programadores: 1000 students of 4° and 5° secundaria in Lima Norte, logic test, UNI and UPN stages, PCEP exam, pilot.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI free for all secondary students; Fase 2 only C++; generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'CNEB: competency 28 transversal; secundaria hour table without a computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Python 3.14.0 final on 2025-10-07, bugfixes for about 24 months, security fixes until October 2030.', url: 'https://peps.python.org/pep-0745/' },
      { claim: 'Python is named after Monty Python\'s Flying Circus.', url: 'https://docs.python.org/3/tutorial/appetite.html' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555, IT 522, Student 482, 18 to 20 at 469, 26 to 30 at 559, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet by phone 90.2%, laptop 18.9%, computer 14.0%; 36.4% of households with a computer, 53.3% in Lima Metropolitana (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Awarding, selling or guaranteeing the PCEP: refused; the Python Institute awards it, the learner buys the voucher from them, we prepare only (course data says we sell no vouchers and guarantee no pass).',
      'An official certificate or MINEDU, SUNEDU or university recognition: none; our certificate of completion only.',
      'Any link with Fábrica de Programadores, UNI, UPN, UTEC or OPI: none; the page says so.',
      'Typed fees, soles figures or the UNI admission fees in FACTS.md: refused; fees render from the template in USD.',
      'A count of correct answers as an official PCEP rule: refused; 25 of 35 is labelled our own reading of the 70% threshold.'
    ]
  }
};

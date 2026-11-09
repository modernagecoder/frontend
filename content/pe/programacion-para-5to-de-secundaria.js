// SHIP: market | 5to de secundaria: Python con PCEP como en la Fábrica de Programadores, junto a la admisión | evaluate expressions exactly: //, % with negatives, ** right to left, / gives float, truthiness
'use strict';
// Programación para 5to de secundaria (ag- Spanish-language door, Peru cluster row PE126, P4, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout (parents and the student). Fees render in USD from the template only; no soles, no typed figure.
// Search: "5to de secundaria" (KEYWORDS.md: "13 a 15 años" returns nothing, Peruvians name the grade), "programación para
// adolescentes", "curso de python con certificado". Angle: the student in 5° de secundaria (edad normativa 16 at 31 March),
// the last school year, and the parent, who weigh programming against the examen de admisión. Spine: what 5° gives (ciclo
// VII, competency 28 level 7; ENLA 2025 in 5°); MINEDU's Fábrica de Programadores (Python + PCEP for 4° and 5°, 2025 pilot)
// and what PCEP is (OpenEDG Python Institute page); the admission calendar around 5° (PUCP La Primera Opción, ULima Examen de
// Escolares, UNI three papers; Ley 30220 via PUCP) with a plain statement that exams are in Spanish and we promise nothing;
// how to fit code in a heavy year; OPI and ONEM Nivel 3; AI tools at 16; an original PCEP-style practice set.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programacion-para-5to-de-secundaria/,
// fetched 2026-11-08 (PCEP page 2026-11-09), quotes grepped in the raw text):
//  MINEDU Edades normativas (FACTS 14): table ages "... 15 años 16 años" against "VII 3er grado 4to grado 5to grado".
//  Ley 28044 (FACTS 6): "dura cinco años".
//  CNEB: Tabla N.° 8 "Total de horas 35 35 35 35 35", Tabla N.° 9 "Total de horas 45 45 45 45 45"; competency 28 level 7 (PDF
//    page 155 checked by eye): "interactúa en diversos espacios (como portales educativos, foros, redes sociales, entre otros) de
//    manera consciente y sistemática administrando información y creando materiales digitales en interacción con sus pares de
//    distintos contextos socioculturales expresando su identidad personal."; "Nivel 7 Nivel esperado al final del ciclo VII".
//  Fábrica de Programadores, MINEDU note 24 July 2025 (FACTS 45 to 47): "beneficiará a 1000 escolares de 4.º y 5.º de
//    secundaria de Lima Norte con formación en programación Python y certificación internacional."; "desarrollada en alianza con
//    Cisco Networking Academy"; "seleccionados mediante una prueba de lógica"; "Los Olivos, Rímac, San Martín de Porres, Comas,
//    Carabayllo, Puente Piedra, Santa Rosa y Ancón"; "un curso presencial de iniciación en la Universidad Nacional de Ingeniería
//    (UNI) y una formación especializada online dictada por la Universidad Privada del Norte (UPN)"; "podrán rendir el examen
//    PCEP, con validez global."; "Esta experiencia piloto busca validar el modelo pedagógico y replicarlo en el ámbito nacional".
//  OpenEDG Python Institute, pythoninstitute.org/pcep (fetched 2026-11-09): "Exam code PCEP-30-03", "Prerequisites None Number
//    of questions 35 Exam duration 50 minutes Passing score 70%", "Credential validity 5 years".
//  ENLA 2025 (FACTS 59): "5.° grado de secundaria en Lectura, Matemática, Ciencia y Tecnología, y Desarrollo Personal, Ciudadanía
//    y Cívica."
//  PUCP guía del postulante (FACTS 66, 77, 78, 79, 80): Ley 30220 "La admisión a la universidad se realiza mediante concurso
//    público, previa definición de plazas y máximo una vez por ciclo."; "Si estás cursando 5.° año de secundaria LA PRIMERA
//    OPCIÓN® ... EVALUACIÓN ACADÉMICA: 29 de noviembre" (cycle 2027-1, so 2026); "Si has finalizado 5.° de secundaria EVALUACIÓN
//    DEL TALENTO ... EVALUACIÓN ACADÉMICA: 21 de febrero" (2027); "con especial énfasis en las áreas de comprensión lectora y
//    matemáticas."
//  Universidad de Lima guía 2027-1(A) (FACTS 84 to 88): "exclusivo para alumnos de quinto año de secundaria"; "domingo 15 de
//    noviembre de 2026"; "INICIO DE CLASES Lunes 29 de marzo de 2027"; "El examen de escolares es una prueba única de aptitud
//    académica y de conocimientos"; "asignando un puntaje por cada respuesta correcta y restándolo por cada respuesta equivocada."
//  UNI admisión 2026-2 (FACTS 67 to 69, 75): "consiste en tres pruebas tomadas en tres días (lunes, miércoles y viernes)";
//    "1. Primera prueba: - APTITUD ACADÉMICA - HUMANIDADES 2. Segunda prueba: - MATEMÁTICA 3. Tercera prueba: - Física - Química";
//    "Lunes 10, miércoles 12 y viernes 14 de agosto de 2026"; requirement "haber culminado tus estudios secundarios".
//  ONEM 2026 (FACTS 100): "NIVEL 3: 5° grado de educación secundaria".
//  OPI reglamento 2025 (FACTS 115, 116, 118): "Tener como máximo 20 años de edad al día 1 de Julio de 2025."; "Se podrá usar C++
//    o Python" (Fase 1); "Se podrá usar solo C++." (Fase 2); "Queda prohibido el uso de IA generativa para la resolución de
//    problemas." (accents restored from the LaTeX extraction).
//  AI tool ages via content/ai-tool-age-audit.json (vendor quotes, audited 2026-07-15): ChatGPT 13 with parental permission
//    under 18; Claude 18.
//  Time: tzdata America/Lima UTC-5 no DST; Asia/Kolkata UTC+5:30.
// Our own calculations (python3 -I): 70% of 35 = 24.5, so at least 25 correct answers if every question weighs the same (the
//    page says the Institute publishes a percentage, not a count, and labels the 25 as our arithmetic under that assumption);
//    50 / 35 = 1.43 minutes, about 86 seconds (85.7) per question; JER 35 x 45 = 1,575 and JEC 45 x 45 = 2,025 minutes a week.
// Our own example (pcep.py and pcep2.py in the scratchpad, run with python3 -I), exact output:
//    3 -4 / 1 2 / 512 64 / 2.0 5.0 / 2 True False ; pcep2.py: True
// Lesson family: evaluating expressions exactly as the interpreter does: floor division and modulo with negatives, ** is
// right-associative, / always returns a float, operator precedence, and truthiness of strings; then the identity
// a == b * (a // b) + a % b that ties // and % together.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'print(7 // 2, -7 // 2)',
  'print(7 % 3, -7 % 3)',
  'print(2 ** 3 ** 2, (2 ** 3) ** 2)',
  'print(10 / 5, 1 + 2 * 3 - 4 / 2)',
  "print(True + True, bool('False'), bool(''))"
].join('\n');

const OUT = [
  '3 -4',
  '1 2',
  '512 64',
  '2.0 5.0',
  '2 True False'
].join('\n');

const PY2 = [
  'a = -7',
  'b = 3',
  'print(a == b * (a // b) + a % b)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Programación para 5to de secundaria' },
  slug: 'programacion-para-5to-de-secundaria',
  code: 'prse',
  accent: '#8E3A23',
  accentRationale: 'Programación para 5to de secundaria: a brick red #8E3A23, the colour of a university admission folder, setting the final school year apart from the green and olive age pages; contrast 6.13 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programación para 5to de secundaria',
  title: 'Programación para 5to de secundaria: Python y PCEP en inglés',
  description: 'Programación para 5to de secundaria en Perú: Python con el examen PCEP, como en la Fábrica de Programadores, junto a la admisión. En vivo, en inglés.',
  ogDescription: 'Qué es la Fábrica de Programadores, qué mide el PCEP, cómo encajar Python con el examen de admisión en 5to de secundaria y un set de práctica nuestro.',
  twitterDescription: 'Python y PCEP para estudiantes de 5to de secundaria en Perú, en clases en vivo y en inglés, a cualquier hora.',
  pageName: 'Programación para 5to de secundaria',
  webPageDescription: 'Guía para estudiantes de 5to de secundaria en Perú y sus familias: qué pide el CNEB en el ciclo VII, qué es la Fábrica de Programadores del MINEDU y el examen PCEP de Python, cómo convive la programación con las admisiones de la PUCP, la Universidad de Lima y la UNI, qué concursos quedan (OPI, ONEM Nivel 3), qué reglas tienen las herramientas de IA a los 16 años y un set de práctica de Python escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de Python para estudiantes de 5to de secundaria en Perú, dictadas solo en inglés: fundamentos de Python, preparación para el examen PCEP, resolución de problemas y razonamiento matemático, en grupo o individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para 5to de secundaria',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#quinto', label: '5to' },
    { href: '#fabrica', label: 'Fábrica de Programadores' },
    { href: '#pcep', label: 'PCEP' },
    { href: '#admision', label: 'Admisión' },
    { href: '#practica', label: 'Práctica' }
  ],
  eyebrow: 'Perú &middot; Último año del colegio &middot; 5to de secundaria',
  h1: 'Programación para 5to de secundaria: Python, PCEP y la admisión',
  lede: 'El último año del colegio llega con la libreta, la promoción, la academia preuniversitaria y una pregunta grande: qué estudiar después. Esta página es para el estudiante de 5to de secundaria que quiere aprender a programar en serio ese año, y para su familia: qué hace el MINEDU con Python y el PCEP, cómo encaja con la admisión y cómo es estudiar con nosotros, en vivo y en inglés.',
  secondaryCta: { href: '#practica', label: 'Probar el set de práctica' },
  wa: 'Hola Modern Age Coders, estoy en 5to de secundaria en Perú (o soy madre o padre de un estudiante de 5to) y me interesa Python con PCEP en inglés. ¿Puedo tomar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; para 5to, Python con rigor y práctica tipo PCEP, en inglés',
  spec: [
    ['Para quién', 'Estudiantes de 5to de secundaria (16 años) y egresados'],
    ['Qué se aprende', 'Python desde cero hasta nivel PCEP'],
    ['Examen', 'PCEP-30-03 del OpenEDG Python Institute (opcional)'],
    ['Formato', 'Grupo de quince a veinte o clases individuales'],
    ['Horario', 'Flexible, alrededor del colegio y la academia'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta directa',
  capsule: 'En 5to de secundaria, el último año del colegio, un estudiante puede aprender Python desde cero y llegar al nivel del PCEP, la certificación de entrada del OpenEDG Python Institute que el MINEDU eligió como meta de su piloto Fábrica de Programadores para escolares de 4° y 5°. Modern Age Coders lo enseña en vivo, en línea y en inglés, con un mentor desde la India que explica con claridad y al ritmo del estudiante, en grupo o de forma individual y a cualquier hora, para convivir con el colegio y la academia. No preparamos el examen de admisión, que es en castellano, ni prometemos ingresos.',

  picks: {
    eyebrow: 'Cursos para 5to',
    h2: 'Tres cursos que tienen sentido en el último año',
    lede: 'Uno para llegar al PCEP, uno para quien quiere Python completo sin pensar en certificaciones y uno para quien va a postular a ingeniería o ciencias y quiere afinar su razonamiento.',
    items: [
      { course: 'pcep-pcap-python-certification-course', code: 'PRSE / 01', title: 'Python con PCEP y PCAP', alt: 'Imagen del curso de certificación de Python PCEP y PCAP', note: 'Desde los 13 años, sin requisitos previos para la parte de PCEP. Recorre el temario del examen con práctica propia y simulacros escritos por nosotros.' },
      { course: 'python-complete-masterclass-teens', code: 'PRSE / 02', title: 'Python para adolescentes', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 13 a 18 años. Python de principiante a avanzado con proyectos: automatizaciones, juegos, análisis de datos y una app propia.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'PRSE / 03', title: 'Matemática de secundaria', alt: 'Imagen del curso de matemática de secundaria', note: 'Álgebra, funciones, trigonometría y cálculo inicial explicados en inglés. Ayuda a ordenar el razonamiento matemático del último año.' }
    ]
  },

  sections: [
    {
      id: 'quinto',
      eyebrow: 'El último año',
      h2: '¿Vale la pena aprender a programar en 5to de secundaria?',
      lede: 'Sí, si se hace con un plan realista. En 5to el tiempo es escaso, pero programar no compite con la admisión tanto como parece: ejercita el mismo razonamiento ordenado que piden las pruebas de matemática, y deja algo concreto que mostrar al terminar el colegio.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Una base para la carrera', p: 'Ingeniería, economía, ciencias, administración, medicina, diseño: casi cualquier carrera usa hoy algo de programación. Llegar a la universidad sabiendo Python ahorra mucho estrés en el primer ciclo.' },
          { h3: 'Algo propio que mostrar', p: 'Un proyecto terminado (una herramienta, un análisis de datos, un juego) y, si se decide, el examen PCEP aprobado. Es una prueba concreta de lo que el estudiante sabe hacer.' },
          { h3: 'Pensar con orden', p: 'Programar obliga a separar un problema en partes, prever casos y revisar cada paso. Es el mismo hábito que piden las preguntas de razonamiento de cualquier prueba de admisión.' }
        ] },
        { kind: 'p', mt: true, html: 'Según la tabla de edades normativas del MINEDU, 5to de secundaria corresponde a los 16 años cumplidos al 31 de marzo, y cierra el ciclo VII del CNEB, que empieza en 3°. Es el final de once años de educación básica: seis de primaria y cinco de secundaria, como fija la Ley General de Educación. A esa edad un estudiante aprende Python con el mismo ritmo que un adulto principiante, y con más tiempo por delante para aprovecharlo.' },
        { kind: 'p', html: 'Lo que el colegio exige ese año es mucho. La semana escolar es de 35 horas pedagógicas en jornada regular y de 45 en jornada completa (Tablas N.° 8 y N.° 9 del CNEB), que con horas de 45 minutos son 1,575 y 2,025 minutos semanales (cuenta nuestra). Muchos estudiantes suman además una academia o un centro preuniversitario. Por eso nuestra propuesta para 5to no es una carga más, sino un plan corto y flexible que se ajusta semana a semana.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Lo que pide el colegio',
      h2: '¿Qué pide el CNEB en tecnología al terminar la secundaria?',
      lede: 'El currículo nacional no incluye un curso de programación en ningún grado. En tecnología espera que, al terminar 5to, el estudiante se mueva con soltura en entornos digitales y cree materiales con otros, no que escriba código.',
      body: [
        { kind: 'two',
          leftH3: 'El nivel del ciclo VII',
          left: [
            'En la competencia 28 del CNEB, el nivel previsto para cuando se cierra el ciclo VII es que el estudiante "interactúa en diversos espacios (como portales educativos, foros, redes sociales, entre otros) de manera consciente y sistemática administrando información y creando materiales digitales en interacción con sus pares".',
            'Es un objetivo valioso, pero distinto de programar. Un estudiante puede cumplirlo plenamente sin haber escrito nunca una línea de código.'
          ],
          rightH3: 'Lo que se evalúa en 5to',
          right: [
            'La ENLA 2025 del MINEDU evaluó a los estudiantes de 5° de secundaria en Lectura, Matemática, Ciencia y Tecnología, y Desarrollo Personal, Ciudadanía y Cívica. No hubo una prueba de computación o programación.',
            'Por eso, quien quiera llegar a la universidad sabiendo programar tiene que aprenderlo fuera del horario escolar, salvo que su colegio tenga un taller propio en sus horas de libre disponibilidad.'
          ] },
        { kind: 'p', mt: true, html: 'No formamos parte del sistema escolar ni tenemos relación con el MINEDU o con colegio alguno. Lo que el estudiante aprende con nosotros no se convierte en notas ni en certificados del Estado peruano; al cerrar cada curso entregamos una constancia propia de Modern Age Coders, y el PCEP, si se decide rendirlo, lo otorga el OpenEDG Python Institute, no nosotros.' }
      ]
    },
    {
      id: 'fabrica',
      eyebrow: 'Fábrica de Programadores',
      h2: '¿Qué es la Fábrica de Programadores del MINEDU?',
      lede: 'Es un piloto del Ministerio de Educación, lanzado en julio de 2025, para formar en Python a escolares de 4° y 5° de secundaria de colegios públicos de Lima Norte, con la posibilidad de rendir el examen PCEP al final.',
      body: [
        { kind: 'table', numCols: [], caption: 'Fábrica de Programadores en los datos del propio MINEDU (nota de prensa del 24 de julio de 2025)', head: ['Aspecto', 'Lo que dice el MINEDU'], rows: [
          ['A quién beneficia', '1,000 escolares de 4° y 5° de secundaria de Lima Norte'],
          ['Qué aprenden', 'Programación en Python con certificación internacional'],
          ['Con quién', 'En alianza con Cisco Networking Academy'],
          ['Cómo se elige', 'Mediante una prueba de lógica'],
          ['De dónde son los colegios', 'Los Olivos, Rímac, San Martín de Porres, Comas, Carabayllo, Puente Piedra, Santa Rosa y Ancón'],
          ['Cómo se dicta', 'Un curso presencial de iniciación en la UNI y una formación online de la Universidad Privada del Norte'],
          ['Al final', 'Quienes concluyan ambas etapas podrán rendir el examen PCEP, "con validez global"'],
          ['Futuro', 'Piloto que "busca validar el modelo pedagógico y replicarlo en el ámbito nacional"']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, nota de prensa "Minedu impulsa iniciativa Fábrica de Programadores para formar a escolares con certificación internacional en programación", gob.pe, 24 de julio de 2025, leída el 8 de noviembre de 2026. No encontramos en gob.pe una nota posterior sobre su ampliación.' },
        { kind: 'p', mt: true, html: 'La Fábrica de Programadores es una buena noticia por dos razones. Primero, confirma algo que repetimos a las familias: un estudiante de 4° o 5° de secundaria puede aprender Python a un nivel que se puede certificar. Segundo, muestra el camino que eligió el propio Estado: Python como primer lenguaje y el PCEP como meta medible. Pero el piloto llega a mil estudiantes de ocho distritos; la mayoría de los escolares de 5to del país no tiene acceso a él.' },
        { kind: 'p', html: 'Nosotros no somos parte de la Fábrica de Programadores ni tenemos relación con el MINEDU, Cisco, la UNI o la UPN. Lo que ofrecemos es un camino parecido, abierto a cualquier estudiante de cualquier región, colegio público o privado: Python desde cero hasta el nivel PCEP, en clases en vivo y en inglés. Si vive en Lima Norte y le interesa el contexto local, nuestra página de vacaciones útiles en <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">Los Olivos</a> habla del piloto desde el distrito.' }
      ]
    },
    {
      id: 'pcep',
      eyebrow: 'El examen PCEP',
      h2: '¿Qué es el examen PCEP de Python y qué mide?',
      lede: 'PCEP es la certificación de entrada del OpenEDG Python Institute: "Certified Entry-Level Python Programmer". Mide si una persona domina los fundamentos de Python. Es opcional; se puede aprender Python sin rendirla.',
      body: [
        { kind: 'table', numCols: [], caption: 'El examen PCEP-30-03 según la página oficial del OpenEDG Python Institute', head: ['Dato', 'Valor publicado'], rows: [
          ['Código del examen', 'PCEP-30-03'],
          ['Requisitos previos', 'Ninguno'],
          ['Número de preguntas', '35'],
          ['Duración', '50 minutos'],
          ['Puntaje para aprobar', '70 %'],
          ['Vigencia de la credencial', '5 años']
        ] },
        { kind: 'source', html: 'Fuente: ficha del PCEP en la web del OpenEDG Python Institute (pythoninstitute.org/pcep), consultada el 9/11/2026. El precio del examen lo fija el Instituto y no lo reproducimos aquí; nuestra mensualidad aparece más abajo y no incluye el examen.' },
        { kind: 'two', mt: true,
          leftH3: 'Cuentas que conviene hacer',
          left: [
            'Si se dividen los 50 minutos entre las 35 preguntas, cada una dispone de unos 86 segundos (cuenta nuestra). No hay tiempo para probar cada cosa: hay que saber leer una línea de Python y predecir su resultado sin ejecutarla.',
            'El 70 % de 35 es 24,5. Bajo el supuesto, nuestro, de que cada pregunta valga igual, aprobar pediría 25 aciertos como mínimo; el Instituto solo publica el porcentaje, así que el 25 es una referencia y no una regla oficial.'
          ],
          rightH3: 'Cómo lo preparamos',
          right: [
            'Seguimos el temario del PCEP con ejercicios originales: tipos de datos, operadores, condicionales, bucles, listas, tuplas, diccionarios, funciones y excepciones. No usamos preguntas del examen real.',
            'Cada semana hay práctica de "predecir la salida", como el set de más abajo, y antes del examen hacemos simulacros cronometrados escritos por nosotros. El examen, en inglés, se rinde ante el Instituto, no con nosotros.'
          ] },
        { kind: 'p', mt: true, html: 'Sobre el idioma: el PCEP se rinde en inglés en la mayoría de los casos, y el propio Python usa palabras inglesas. Estudiar en inglés con un mentor que explica con calma no es una dificultad adicional, sino entrenamiento directo para el examen. Si busca la versión general de esta preparación, en inglés, la tenemos en <a class="ag-inline-link" href="/pcep-python-certification-prep">PCEP Python certification prep</a>.' }
      ]
    },
    {
      id: 'admision',
      eyebrow: 'Admisión a la universidad',
      h2: '¿Cómo combinar Python con el examen de admisión en 5to?',
      lede: 'Con un calendario claro. Varias universidades evalúan a estudiantes de 5to antes de que terminen el colegio, y conviene que la programación no choque con esas fechas. Las pruebas de admisión son en castellano y las organiza cada universidad: nosotros no las preparamos ni prometemos resultados.',
      body: [
        { kind: 'table', numCols: [], caption: 'Algunas fechas de admisión alrededor de 5to de secundaria, según las propias universidades', head: ['Universidad y modalidad', 'Para quién', 'Fecha publicada', 'Qué evalúa'], rows: [
          ['Universidad de Lima, Examen de Escolares 2027-1(A)', 'Exclusivo para alumnos de 5to de secundaria', 'Domingo 15 de noviembre de 2026; clases desde el 29 de marzo de 2027', 'Prueba única de aptitud académica y conocimientos; resta por respuesta equivocada'],
          ['PUCP, La Primera Opción (ciclo 2027-1)', 'Estudiantes que cursan 5to', 'Evaluación académica el 29 de noviembre de 2026', 'Énfasis en comprensión lectora y matemáticas'],
          ['PUCP, Evaluación del Talento (ciclo 2027-1)', 'Quienes ya terminaron 5to', 'Evaluación académica el 21 de febrero de 2027', 'Énfasis en comprensión lectora y matemáticas'],
          ['UNI, Examen Ordinario 2026-2', 'Egresados de secundaria', '10, 12 y 14 de agosto de 2026 (tres pruebas en tres días)', 'Aptitud académica y humanidades; matemática; física y química']
        ] },
        { kind: 'source', html: 'Fuentes: guía del postulante de la Universidad de Lima para el concurso 2027-1(A); guía del postulante de la PUCP en admision.pucp.edu.pe (las fechas sin año corresponden al ciclo 2027-1); página de admisión 2026-2 de la UNI. Leídas el 8 de noviembre de 2026. Verifique siempre en la web de cada universidad antes de inscribirse: las fechas pueden cambiar. No tenemos ninguna relación con estas universidades.' },
        { kind: 'p', mt: true, html: 'La propia PUCP cita la Ley Universitaria 30220: "La admisión a la universidad se realiza mediante concurso público, previa definición de plazas y máximo una vez por ciclo", con un examen de conocimientos como proceso principal. Cada universidad define su prueba; la UNI, por ejemplo, exige haber culminado la secundaria para el examen ordinario y lo toma en tres días, con una prueba entera de Matemática. La Universidad de Lima advierte que la nota se obtiene sumando por cada respuesta correcta y restando por cada equivocada, de modo que responder al azar puede costar puntos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Antes de una fecha de admisión, se pausa la programación.</strong> En las dos semanas previas a un examen, recomendamos reducir o suspender las clases. Como el horario es flexible, se retoman después sin perder el lugar.',
          '<strong>Después de la prueba, se aprovecha el impulso.</strong> Entre el examen de noviembre y el inicio de clases de marzo hay meses libres; es el momento ideal para avanzar fuerte en Python y, si se quiere, rendir el PCEP.',
          '<strong>La matemática en inglés, como apoyo.</strong> Podemos practicar razonamiento matemático en inglés con problemas propios. No es preparación para la admisión, que es en castellano, pero ejercita la misma forma de pensar.',
          '<strong>La academia sigue siendo la academia.</strong> Si el estudiante va a una academia preuniversitaria o al centro preuniversitario de una universidad, ese es su espacio para la admisión. Nuestras clases van en otros días.'
        ] },
        { kind: 'source', html: 'Las cuatro recomendaciones son nuestras. No damos asesoría vocacional ni sobre modalidades de admisión: para eso, la fuente es la oficina de admisión de cada universidad.' }
      ]
    },
    {
      id: 'practica',
      tint: 'tint',
      eyebrow: 'Set de práctica',
      h2: '¿Cómo son las preguntas tipo PCEP? Un set de práctica nuestro',
      lede: 'Estas cinco líneas son un ejercicio original, escrito por nosotros, del estilo "predecir la salida". No son preguntas del examen. Intente adivinar cada línea antes de mirar la respuesta: así se entrena para el PCEP.',
      body: [
        { kind: 'code', label: 'Cinco líneas para predecir', lang: 'Python', code: PY, note: 'Escriba en un papel lo que cree que imprime cada línea. Recién entonces mire la salida.' },
        { kind: 'code', label: 'Lo que imprime Python 3', lang: 'Salida', code: OUT, note: 'Esto devolvió la consola de Python 3 cuando lo ejecutamos, sin tocar nada. Cada línea esconde una regla que el PCEP pregunta.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Línea 1: <code>-7 // 2</code> da <code>-4</code>, no <code>-3</code>.</strong> La división entera de Python redondea hacia abajo (hacia menos infinito), no hacia cero. -3,5 hacia abajo es -4.',
          '<strong>Línea 2: <code>-7 % 3</code> da <code>2</code>.</strong> El resto en Python toma el signo del divisor. Es coherente con la línea 1: -7 = 3 por (-4) + 2.',
          '<strong>Línea 3: <code>2 ** 3 ** 2</code> da <code>512</code>.</strong> La potencia se agrupa de derecha a izquierda: primero 3 ** 2 = 9, luego 2 ** 9 = 512. Con paréntesis, (2 ** 3) ** 2 = 8 ** 2 = 64.',
          '<strong>Línea 4: <code>10 / 5</code> da <code>2.0</code>.</strong> El operador <code>/</code> siempre devuelve un número decimal, aunque la división sea exacta. Y en <code>1 + 2 * 3 - 4 / 2</code> se multiplica y divide primero: 1 + 6 - 2.0 = 5.0.',
          '<strong>Línea 5: <code>True + True</code> da <code>2</code>.</strong> <code>True</code> se comporta como 1 en una suma. <code>bool(\'False\')</code> es <code>True</code> porque es un texto no vacío; solo el texto vacío <code>\'\'</code> es falso.'
        ] },
        { kind: 'code', label: 'Comprobación: la regla que une // y %', lang: 'Python', code: PY2, note: 'Al ejecutarlo, la consola muestra <code>True</code>. Para cualquier entero a y cualquier b distinto de cero, Python garantiza que a == b * (a // b) + a % b. Si entiende por qué, ya no se equivoca con los negativos.' },
        { kind: 'p', mt: true, html: 'Este tipo de ejercicio entrena una habilidad que vale más que el certificado: leer código con precisión, sin ejecutarlo, y saber exactamente qué hará la máquina. Es lo contrario de copiar una respuesta de una herramienta de IA. En la Olimpiada Peruana de Informática, por ejemplo, el reglamento 2025 prohíbe usar IA generativa para resolver problemas; en el PCEP no hay a quién preguntar. En clase, el mentor le pide al estudiante que explique en inglés cada regla con sus propias palabras: si puede explicarla, la domina.' }
      ]
    },
    {
      id: 'concursos',
      eyebrow: 'Concursos',
      h2: '¿Qué concursos de programación y matemática quedan en 5to?',
      lede: 'Dos grandes, con reglas distintas. La ONEM tiene un nivel solo para 5to, y la Olimpiada Peruana de Informática admite escolares y egresados recientes.',
      body: [
        { kind: 'two',
          leftH3: 'ONEM, Nivel 3',
          left: [
            'La Olimpiada Nacional Escolar de Matemática 2026 reservó su Nivel 3 para "5° grado de educación secundaria", separado de los niveles de 1° y 2° y de 3° y 4°. La inscripción se hace a través del colegio.',
            'No reproducimos problemas de la ONEM. Si un estudiante quiere prepararse, trabajamos con problemas originales nuestros, en inglés, del mismo tipo de razonamiento.'
          ],
          rightH3: 'OPI (UTEC)',
          right: [
            'El reglamento 2025 de la OPI pedía tener como máximo 20 años al 1 de julio de 2025 y estar inscrito en un colegio peruano en 2025 o haber egresado en 2024. En la Fase 1 se podía programar en C++ o Python; en la Fase 2, solo en C++.',
            'El mismo reglamento prohibía la IA generativa para resolver problemas. Un estudiante de 5to que aprende Python ahora puede competir en la Fase 1 y, si quiere ir más lejos, sumar C++.'
          ] },
        { kind: 'source', html: 'Fuentes: el oficio de la UGEL 06 que comunicó las bases de la ONEM 2026; el reglamento OPI 2025 publicado por la UTEC en opi.utec.edu.pe. Leídos el 8 de noviembre de 2026. Las reglas pueden cambiar en cada edición: revise la convocatoria vigente. No tenemos relación con el MINEDU, la UGEL ni la UTEC.' },
        { kind: 'p', mt: true, html: 'Si el estudiante disfruta este tipo de retos, nuestra página para <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-isidro-lima">secundaria en San Isidro</a> propone un verano de programación pensado para llegar a la OPI con ventaja. Y si el estudiante viene de un colegio bilingüe y quiere llegar a la universidad con inglés técnico fluido, la página en inglés sobre <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> le interesará.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'Inteligencia artificial',
      h2: '¿Puede un estudiante de 16 años usar herramientas de IA para programar?',
      lede: 'Algunas sí, con permiso de sus padres; otras no hasta los 18. Y en ningún caso como sustituto de aprender.',
      body: [
        { kind: 'p', html: 'Las condiciones de OpenAI permiten usar ChatGPT desde los 13 años, pero exigen permiso de un padre o tutor hasta los 18. Claude, de Anthropic, pide 18 años en todo caso. Lo tomamos de nuestra guía de edades de herramientas de IA, que copia el texto publicado por cada empresa (revisión de julio de 2026). En nuestras clases para 5to no pedimos a ningún estudiante menor de 18 que use herramientas que no le corresponden por edad.' },
        { kind: 'p', html: 'Más importante que la regla es el uso. Un asistente de IA puede escribir en segundos el código de un ejercicio de PCEP, pero el examen se rinde sin él, y en la OPI está prohibido. Por eso en clase el estudiante escribe su código, lo explica y lo corrige. Cuando cumpla 18 y entre a la universidad, sabrá usar la IA como apoyo de alguien que entiende lo que hace, no como muleta. Es la diferencia entre aprender a pensar y aprender a copiar.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios',
      h2: '¿Cuándo estudiar Python en 5to si el día ya está lleno?',
      lede: 'En los huecos que el estudiante elija, que cambian de semana en semana. Por eso no damos horarios fijos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Conversión de hora de Perú a hora de la India (ejemplos, no horarios de clase)', head: ['Perú', 'India', 'Fecha en la India'], rows: [
          ['6:30 a. m.', '5:00 p. m.', 'Misma'],
          ['9:30 a. m.', '8:00 p. m.', 'Misma'],
          ['7:00 p. m.', '5:30 a. m.', 'Siguiente'],
          ['10:30 p. m.', '9:00 a. m.', 'Siguiente']
        ] },
        { kind: 'source', html: 'Perú vive todo el año en UTC-5, sin horario de verano, según la base tzdata y el INACAL; la India, en UTC+5:30. Resultado: diez horas y media de ventaja india, invariable. Tabla preparada por nosotros.' },
        { kind: 'p', mt: true, html: 'Los estudiantes de 5to suelen elegir una de tres opciones: temprano en la mañana antes del colegio (útil en jornada regular), la noche después de la academia, o los fines de semana. En vacaciones, de enero a marzo, muchos concentran el trabajo; la guía de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación</a> propone un plan de verano. Al reservar, usted ve los horarios en hora de Perú.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Ruta',
    h2: '¿Cómo es una ruta de Python hasta el PCEP en 5to?',
    lede: 'Cinco tramos propios, pensados para un año escolar con admisión de por medio. Cada uno se alarga o se acorta según la agenda del estudiante.',
    table: { caption: 'Ruta hacia el nivel PCEP para 5to de secundaria (nuestra)', head: ['Tramo', 'Contenido', 'Señal de dominio'], rows: [
      ['1. Fundamentos', 'tipos de datos, variables, entrada y salida, operadores', 'predice sin error líneas como las del set de práctica'],
      ['2. Decisiones y bucles', 'if, elif, else, while, for, break, continue', 'traza a mano cuántas vueltas da un bucle'],
      ['3. Colecciones', 'listas, tuplas, diccionarios, cadenas', 'elige la estructura adecuada y explica por qué'],
      ['4. Funciones y errores', 'parámetros, valores de retorno, alcance, excepciones', 'escribe funciones que manejan entradas inválidas'],
      ['5. Simulacros', 'pruebas cronometradas originales, revisión de errores', 'supera con margen los simulacros en el tiempo del examen']
    ] },
    left: { h3: 'Para la familia', ps: [
      'En 5to la prioridad la pone el estudiante: hay semanas de exámenes del colegio, de academia y de admisión. Un plan flexible que se pausa y se retoma rinde más que uno rígido que se abandona.',
      'Si su hijo quiere rendir el PCEP, el momento más cómodo suele ser después de las fechas de admisión, entre diciembre y marzo.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Practique leyendo código sin ejecutarlo. Escriba su predicción y después compruébela.',
      'Cuando se equivoque, anote la regla que no conocía. Esa lista es su material de repaso más útil.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para el último año y lo que sigue',
    lede: 'Cursos para 13 a 18 años, dictados en vivo y en inglés. Sirven para profundizar en 5to o para el verano antes de la universidad.',
    bands: [
      { num: 'I', h3: 'Programar más a fondo', sub: 'Para después del PCEP', courses: [
        { code: 'PRSE / FONDO / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos y estructuras de datos', blurb: 'Pilas, colas, árboles y cómo medir si un algoritmo es rápido.' },
        { code: 'PRSE / FONDO / 02', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas de concurso para quien ya escribe programas básicos.' },
        { code: 'PRSE / FONDO / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Un segundo lenguaje, muy usado en los primeros ciclos de ingeniería.' }
      ] },
      { num: 'II', h3: 'Datos e IA', sub: 'De 13 o 14 a 18 años', courses: [
        { code: 'PRSE / DATOS / 01', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Python para analizar datos y entrenar primeros modelos, desde los 14.' },
        { code: 'PRSE / DATOS / 02', slug: 'ai-ml-masterclass-teens', title: 'IA y aprendizaje automático', blurb: 'De Python a modelos reales, con la matemática del colegio como base.' },
        { code: 'PRSE / DATOS / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git y GitHub', blurb: 'Guardar versiones y publicar proyectos como lo hacen los equipos.' }
      ] },
      { num: 'III', h3: 'Matemática', sub: 'Razonamiento y competencias', courses: [
        { code: 'PRSE / MAT / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de olimpiada', blurb: 'Problemas originales de nivel olímpico, para quien disfruta los retos.' },
        { code: 'PRSE / MAT / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'La base matemática de los datos y de muchas carreras.' },
        { code: 'PRSE / MAT / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Desarrollo web completo', blurb: 'Del diseño de una web a su servidor, con un proyecto publicado.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases en 5to de secundaria?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Muy temprano', l: 'Antes del colegio, para estudiantes de jornada regular.' },
      { time: 'De noche', l: 'Después de la academia o de las tareas.' },
      { time: 'Individuales', l: 'Para pausar antes de una admisión y retomar después.' }
    ],
    cells: [
      { h3: 'Temario PCEP', p: 'La ruta sigue lo que mide el examen, con práctica propia.' },
      { h3: 'Predecir la salida', p: 'Cada clase incluye ejercicios de lectura exacta de código.' },
      { h3: 'Sin copiar', p: 'El estudiante escribe y explica cada solución.' },
      { h3: 'Pausas pactadas', p: 'Se respeta el calendario de admisión del estudiante.' },
      { h3: 'Mentor fijo', p: 'Conoce el nivel y los errores frecuentes del estudiante.' },
      { h3: 'Reporte breve', p: 'Qué se avanzó y qué falta hasta el nivel PCEP.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes de secundaria',
  projectsLede: 'Una muestra de lo que construyen estudiantes mayores con nosotros. La colección entera está en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Reseñas de Google de estudiantes y familias, en el inglés en que las escribieron.',

  fees: {
    h2: 'Precio de las clases de Python para 5to de secundaria',
    lede: 'La tarifa mensual figura en dólares estadounidenses y se carga a una tarjeta, cuyo banco la pasa a su moneda el día del cargo. El examen PCEP no está incluido: se paga aparte al Instituto, si se decide rendirlo. La clase de prueba es gratis.',
    free: ['Clase de prueba sin costo', 'Diagnóstico rápido de su nivel en Python', 'Sin tarjeta'],
    group: ['Grupo de quince a veinte estudiantes de edad similar', 'El mismo mentor todo el curso', 'Dos clases en vivo por semana', 'Mes a mes; se puede pausar en época de admisión'],
    one: ['Solo el estudiante y el mentor', 'Ritmo según el calendario de admisión', 'Horario a elección, semana a semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para 5to de secundaria: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las clases son en vivo, en línea y en inglés, con mentores desde la India. Para un estudiante de 5to eso suma dos veces: el PCEP se rinde en inglés y Python se escribe con palabras inglesas, y además practica inglés hablado justo antes de la universidad. Lima figura en la banda alta del EF EPI 2025, y explicar código en voz alta es buen ejercicio para el habla, la destreza más floja del país.' },
      { q: '¿Qué edad tiene un estudiante de 5to de secundaria en Perú?', a: '16 años, según la edad normativa del MINEDU, contada al 31 de marzo. 5to cierra el ciclo VII del CNEB y la educación básica regular.' },
      { q: '¿Qué es la Fábrica de Programadores?', a: 'Un piloto del MINEDU lanzado en julio de 2025 para 1,000 escolares de 4° y 5° de secundaria de colegios públicos de Lima Norte, con formación en Python junto a Cisco Networking Academy y la opción de rendir el examen PCEP. No tenemos relación con ese programa.' },
      { q: '¿Cómo es el examen PCEP?', a: 'El OpenEDG Python Institute lo presenta como su certificación de nivel de entrada en Python. En la versión PCEP-30-03 son 35 preguntas en 50 minutos, se necesita un 70 % para aprobar y la credencial dura 5 años; no exige requisitos previos.' },
      { q: '¿Las clases incluyen el examen PCEP?', a: 'No. Preparamos el temario con práctica y simulacros propios; el examen se paga y se rinde aparte ante el Instituto, si el estudiante decide hacerlo.' },
      { q: '¿Programar me quita tiempo para el examen de admisión?', a: 'Solo si no se planifica. Recomendamos pausar las clases en las dos semanas previas a cada fecha de admisión y avanzar fuerte después. El horario flexible lo permite.' },
      { q: '¿Preparan el examen de admisión de la UNI, la PUCP o San Marcos?', a: 'No. Esas pruebas son en castellano y las organiza cada universidad; para prepararlas están las academias y los centros preuniversitarios. Podemos practicar razonamiento matemático en inglés con problemas propios, sin prometer ningún resultado de admisión.' },
      { q: '¿Puedo usar ChatGPT o Claude en las clases?', a: 'ChatGPT exige permiso de los padres hasta los 18 años y Claude pide 18. En clase el estudiante escribe y explica su propio código; además, el PCEP se rinde sin ayuda y la OPI prohíbe la IA generativa.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 7:00 p. m. en Perú son las 5:30 a. m. del día siguiente en la India.' },
      { q: '¿Sirve para la universidad?', a: 'Sirve para llegar sabiendo programar, lo que ayuda en casi cualquier carrera. No da créditos universitarios ni tiene valor oficial: al terminar cada curso damos una constancia propia de Modern Age Coders, y el PCEP lo otorga el Instituto.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas para estudiantes de secundaria en Perú y sus familias.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú', p: 'Todos nuestros caminos para estudiantes peruanos, por edad y materia.' },
      { href: '/vacaciones-utiles-de-programacion-san-isidro-lima', label: 'Secundaria en San Isidro', p: 'Verano en línea pensado para secundaria, con la OPI en el horizonte.' },
      { href: '/vacaciones-utiles-de-programacion-los-olivos-lima', label: 'Los Olivos', p: 'Robótica o programación, y la Fábrica de Programadores vista desde Lima Norte.' },
      { href: '/pcep-python-certification-prep', label: 'PCEP Python certification prep', p: 'Nuestra guía general en inglés sobre el examen PCEP.' },
      { href: '/coding-for-16-year-olds', label: 'Coding for 16 year olds', p: 'Programación a los 16 años, en inglés.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué edad exige cada servicio de IA, citado de sus propias condiciones.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba gratis',
    lede: 'En la clase de prueba el mentor conversa en inglés con el estudiante, le propone dos o tres líneas de Python para predecir y ve cómo razona. Con eso le recomendamos si empezar desde cero o ir directo al temario del PCEP, y un plan que respete su calendario de admisión.',
    readFirst: 'Antes puede revisar <a class="ag-inline-link" href="/python-certification-pcep-pcap-course">PCEP and PCAP course</a> y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> (ambas en inglés).',
    note: 'Las clases son en vivo y en línea, con mentores en la India, únicamente en inglés. Puede escribirnos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para 5to', links: [
        { href: '/courses/pcep-pcap-python-certification-course', label: 'Python con PCEP y PCAP' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'Matemática de secundaria' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/vacaciones-utiles-de-programacion-san-isidro-lima', label: 'Secundaria en San Isidro' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/english-medium-coding-classes-lima', label: 'Lima en inglés' }
      ] }
    ],
    bottomRight: 'Leer el código antes de ejecutarlo'
  },

  personalityCss: `
.ag-root.ag-prse .ag-hero h1 { letter-spacing: -0.012em; max-width: 24ch; }
.ag-root.ag-prse .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-prse .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-prse .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-prse .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Edades normativas (5° de secundaria = 16 años, ciclo VII), Ley 28044, CNEB Tablas N.° 8 and N.° 9 totals and competency 28 level 7 (PDF page 155 checked by eye), Fábrica de Programadores note (24 July 2025), ENLA 2025 note; OpenEDG Python Institute PCEP page; PUCP, Universidad de Lima and UNI admission pages; UGEL 06 oficio on ONEM 2026; OPI 2025 rules (UTEC); vendor AI age floors via content/ai-tool-age-audit.json; tzdata for time. Read 8 and 9 November 2026. The study plan, admission advice, route and practice set are our own.',
    localProject: 'A PCEP-style "predict the output" set for a 5to de secundaria student, written by us and run with python3 -I: five lines print 3 -4, 1 2, 512 64, 2.0 5.0 and 2 True False (floor division and modulo with negatives, right-to-left **, / returns a float, precedence, truthiness of strings), and a check prints True for a == b * (a // b) + a % b with a = -7, b = 3. Lesson family: evaluating expressions exactly as the interpreter does.',
    requiredMentions: ['print(2 ** 3 ** 2, (2 ** 3) ** 2)', '-7 = 3 por (-4) + 2', 'a == b * (a // b) + a % b', 'PCEP-30-03', 'aprobar pediría 25 aciertos como mínimo', 'Los Olivos, Rímac, San Martín de Porres, Comas, Carabayllo, Puente Piedra, Santa Rosa y Ancón', 'Domingo 15 de noviembre de 2026', 'Evaluación académica el 29 de noviembre de 2026', 'administrando información y creando materiales digitales en interacción con sus pares', 'Leer el código antes de ejecutarlo'],
    sources: [
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° in Lima Norte, Python, Cisco, logic test, eight districts, UNI and UPN, PCEP, pilot to replicate (24 July 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'PCEP-30-03: no prerequisites, 35 questions, 50 minutes, 70%, valid 5 years.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'Normative age 16 for 5° de secundaria; ciclo VII.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Secundaria weekly totals (35 JER, 45 JEC) and competency 28 level 7.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2025 subjects for 5° de secundaria.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'PUCP: Ley 30220 quote, La Primera Opción 29 November, Evaluación del Talento 21 February, emphasis on reading and maths.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Universidad de Lima 2027-1(A): exclusive to 5° students, school exam 15 November 2026, classes 29 March 2027, single test, penalty for wrong answers.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'UNI 2026-2: three papers on three days, 10, 12 and 14 August 2026; completed secondary required.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'ONEM 2026 Nivel 3 for 5° de secundaria.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'OPI 2025: age limit, C++ or Python in Fase 1, only C++ in Fase 2, generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'ChatGPT 13 with parental permission under 18; Claude 18.', url: 'https://openai.com/policies/row-terms-of-use/' }
    ],
    rejectedClaims: [
      'Admission exam preparation or any admission promise: refused; the page says exams are in Spanish, run by each university, and that we promise nothing.',
      'Any link with the Fábrica de Programadores, MINEDU, Cisco, UNI, UPN, PUCP, Universidad de Lima or UTEC: none claimed; the page says so.',
      'The PCEP exam fee, UNI registration fees and any soles figure: not printed; fees render from the template in USD and the exam fee is the Institute\'s.',
      'A pass mark as a number of questions: printed only as our arithmetic under an equal-weight assumption, labelled ours.',
      'The UNI February dates with no year on the page: not printed.',
      'Reproducing PCEP, ONEM or OPI questions: refused; the practice set is original and labelled ours.',
      'Recommending Claude (18+) to under-18 students: refused.'
    ]
  }
};

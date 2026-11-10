// SHIP: market | Vacaciones útiles 2027: dos rutas a 4 o 5 clases por semana, semana a semana | lists, sum and a text bar chart: a summer practice tracker
'use strict';
// Vacaciones útiles 2027: programación online (ag- Spanish-language door, Peru cluster row PE107, P2 summer season, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Owner 2026-11-10 (brief, "Summer offer"): "summer page sells summer coding of python and ai or custom choose your courses
// regular class weekly 4 to 5 classes to complete the courses DSA web dev app dev and many more make nice summer pages".
// Revised 2026-11-10 to sell that offer: route 1 Summer Python and AI, route 2 any catalogue course, 4 to 5 live classes a
// week, group or one to one, flexible hours, summer pace and its fee agreed with the mentor before the first summer class,
// first class free. Formal "usted" throughout. Fees render in USD from the template only (standard monthly fee for eight
// classes); no soles, no typed figure, no summer price.
// Angle: the Peruvian parent who types "vacaciones útiles 2027 programación online" in December 2026 and wants the general
// summer programming answer. Spine: the two routes and a week-by-week cumulative class count at 4 or 5 a week (ours);
// which route by age; what vacaciones útiles are; when the 2027 break falls (2026 calendar from the signed RM
// 501-2025-MINEDU table, 2027 norm not yet published); what each fortnight covers on route 1 by age band; why the summer
// matters when the school timetable has no programming area (CNEB; Fábrica de Programadores as the one public pilot);
// one original Python lesson (a summer practice tracker); equipment at home (INEI); Peru to India clock conversions.
// Course lengths quoted (duration field of content/courses/data/<file>.json, corrected 2026-11-10): python-teens.json
// "10-12 months (40-48 weeks)"; python-ai-kids.json "8-10 months (32-40 weeks)"; html-css-beginners.json "4 months (16
// weeks)"; problem-solving-teens.json "10-12 months (44-52 weeks)". Our arithmetic (scratchpad summer_math.py, python3 -I):
// "10 weeks: 40 to 50 classes"; "8 weeks: 32 to 40 classes"; at 2 a week py-teens 80 to 96, py-ai-kids 64 to 80, html-css 32.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-2027-programacion-online/,
// quotes grepped in the raw text; FACTS = facts-school/FACTS.md, MARKET = facts-market/MARKET.md):
//  RM 501-2025-MINEDU, gob.pe norm page (FACTS 20): "Aprobar la norma técnica denominada "Norma Técnica para el Año Escolar
//    2026 en las Instituciones y Programas Educativos públicos y privados de la educación básica"."
//  RM 501-2025-MINEDU signed PDF, section 5.2.1 and Tabla 1 (FACTS 21 to 25; OCR text, and page 7 of the norm, raw page 11,
//    checked by eye on 2026-11-09, image copied to rm501-2025-pdf/page11-checked-by-eye.png): "El año escolar está compuesto
//    por treinta y seis (36) semanas lectivas y ocho (08) semanas de gestión"; "deben cumplirse, como minimo, ciento sesenta
//    (160) días lectivos y treinta (30) de gestión."; "Del 2 al 13 de marzo Del 16 marzo al 15 de mayo Del 18 al 22 de mayo
//    Del 25 mayo al 24 de julio Del 27 julio a 7 de agosto Del 10 agosto al 9 de octubre Del 12 al 16 de octubre Del 19 octubre
//    a 18 de diciembre"; final block "Del 21 al 31 de diciembre" (read on the image); "tienen la potestad de definir una
//    distribución de semanas lectivas y de gestión distinta a la sugerida".
//  MINEDU press note 14 October 2026 (FACTS 28): "inició hoy el despacho de 13.3 millones de unidades de materiales educativos
//    para el año escolar 2027".
//  gob.pe search, 9 November 2026 (our check, raw saved): exact phrase "Norma Técnica para el Año Escolar 2027" returned
//    "total_count":0; the same search for "...Año Escolar 2026" returned "total_count":26 (control).
//  CNEB (FACTS 39, 40, 43): "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3"; "Educación para el trabajo 2 2 2 2 2";
//    "Desarrollar talleres o áreas que complementen el logro de determinados aprendizajes considerados prioritarios para la
//    realidad local o para las necesidades de los estudiantes."
//  MINEDU, Fábrica de Programadores (FACTS 45, 46): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con
//    formación en programación Python y certificación internacional."; "podrán rendir el examen PCEP, con validez global."
//  MINEDU press note 16 March 2026 (FACTS 17): "53 631 colegios de Educación Básica Regular ... 6 225 000 estudiantes".
//  INEI, Boletín TIC II trimestre 2026 (MARKET 1.4): "el 36,4% de los hogares del país disponía de al menos una computadora.
//    Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y 8,9% en el área rural."
//  Time: tzdata America/Lima -5:00 (no DST since 1994), Asia/Kolkata +5:30 (facts-geo/timezone.tsv).
// Our own calculations (python3 -I): January 2027 + February 2027 = 31 + 28 = 59 days = 8 weeks and 3 days (2027 is not a
//    leap year). Clock rows: Peru time + 10 h 30 min = India time.
// Our own example, run with python3 -I (semana.py and reto.py in the src-pages folder), exact output:
//    lun ######## 40 / mar ##### 25 / mie  0 / jue ########## 50 / vie ###### 30 / sab  0 / dom ####### 35 /
//    Total minutes: 180 / Days practised: 5 of 7 / Minutes left to the goal: 20
//    reto (Wednesday 0 -> 20): ... Total minutes: 200 / Days practised: 6 of 7 / Goal reached!
// Lesson family: a list of numbers walked with a for loop, a running total and a counter, and a text bar chart made by
// repeating a character ('#' * n); then >= against > at the edge of a goal.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "dias = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom']",
  'minutos = [40, 25, 0, 50, 30, 0, 35]',
  'meta = 200',
  '',
  'total = 0',
  'practicados = 0',
  'for i in range(len(dias)):',
  "    barra = '#' * (minutos[i] // 5)",
  '    print(dias[i], barra, minutos[i])',
  '    total = total + minutos[i]',
  '    if minutos[i] > 0:',
  '        practicados = practicados + 1',
  '',
  "print('Total minutes:', total)",
  "print('Days practised:', practicados, 'of', len(dias))",
  'if total >= meta:',
  "    print('Goal reached!')",
  'else:',
  "    print('Minutes left to the goal:', meta - total)"
].join('\n');

const OUT = [
  'lun ######## 40',
  'mar ##### 25',
  'mie  0',
  'jue ########## 50',
  'vie ###### 30',
  'sab  0',
  'dom ####### 35',
  'Total minutes: 180',
  'Days practised: 5 of 7',
  'Minutes left to the goal: 20'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Vacaciones útiles 2027: programación online' },
  slug: 'vacaciones-utiles-2027-programacion-online',
  code: 'vup',
  accent: '#8E3A23',
  accentRationale: 'Vacaciones útiles 2027 de programación: a sun-baked terracotta #8E3A23, the colour of a clay roof in the January sun, warm enough for a summer page and apart from the greens of the primaria door; contrast 6.13 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles 2027: programación online',
  title: 'Vacaciones útiles 2027 de programación online, en inglés',
  description: 'Vacaciones útiles 2027 de programación online en Perú: Python e IA o el curso que elija, de 4 a 5 clases por semana, en vivo y en inglés, en grupo o individual.',
  ogDescription: 'Programación en vivo y en inglés para el verano 2027 en Perú: dos rutas, de 4 a 5 clases por semana, la cuenta de clases semana a semana y una clase de ejemplo en Python.',
  twitterDescription: 'Vacaciones útiles 2027 de programación en Perú: Python e IA o un curso a elección, de 4 a 5 clases en vivo por semana y en inglés, a cualquier hora.',
  pageName: 'Vacaciones útiles 2027 de programación online',
  webPageDescription: 'Guía para familias en Perú que buscan vacaciones útiles de programación para el verano 2027: las dos rutas de verano (Python e IA, o un curso a elección) a 4 o 5 clases por semana, la cuenta de clases semana a semana, qué ruta conviene a cada edad, cómo fue el calendario escolar 2026 según la RM 501-2025-MINEDU y qué se sabe del 2027, lo que el CNEB enseña y no enseña de programación, y una clase de ejemplo en Python escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños y adolescentes de 6 a 17 años en todo el Perú, dictadas solo en inglés, a un ritmo de verano de 4 a 5 clases por semana desde las vacaciones 2027: la ruta Python e IA o un curso a elección (DSA, web, apps, juegos, Java y más), en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles 2027: programación',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#verano-2027', label: 'Las dos rutas' },
    { href: '#calendario', label: 'Calendario' },
    { href: '#plan', label: 'Quincena a quincena' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#horario', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Verano 2027 &middot; Programación de 6 a 17 años',
  h1: 'Vacaciones útiles 2027 de programación online, en vivo y en inglés',
  lede: 'Enero y febrero son, para muchas familias peruanas, los meses en que por fin hay tiempo para algo distinto al colegio. Para el verano 2027 le proponemos aprovecharlos de verdad: un ritmo intensivo de 4 a 5 clases en vivo por semana, con la ruta Python e inteligencia artificial o con el curso que su hijo elija, y en marzo la opción de seguir a ritmo normal.',
  secondaryCta: { href: '#verano-2027', label: 'Ver las dos rutas de verano' },
  wa: 'Hola Modern Age Coders, queremos aprovechar las vacaciones útiles 2027 para que nuestro hijo o hija aprenda programación en inglés, a ritmo de verano. ¿Podemos reservar una clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; de 4 a 5 clases por semana en verano',
  spec: [
    ['Edades', 'De 6 a 17 años, de 1° de primaria a 5° de secundaria'],
    ['Rutas', 'Python e IA, o el curso del catálogo que elija'],
    ['Ritmo de verano', 'De 4 a 5 clases en vivo por semana'],
    ['Formato', 'Clase grupal de quince a veinte, o clases individuales'],
    ['Idioma', 'Solo inglés, con mentores en vivo desde la India'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Para las vacaciones útiles 2027, Modern Age Coders enseña programación en vivo, en línea y en inglés a niños y adolescentes de 6 a 17 años en todo el Perú, con dos rutas: Python e inteligencia artificial, o el curso que su hijo escoja, como DSA, desarrollo web, apps, juegos o Java. En verano se avanza de 4 a 5 clases a la semana, en grupo o de forma individual y a la hora que la familia decida. La primera clase es gratis y se puede empezar cualquier semana del verano.',

  picks: {
    eyebrow: 'Para el verano 2027',
    h2: 'Tres cursos que rinden mucho a 4 o 5 clases por semana',
    lede: 'Dos de la ruta Python e IA, uno para primaria alta y otro para secundaria, y uno de la ruta a elección que cabe entero en el verano: HTML y CSS para una web propia.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'VUP / 01', title: 'Ruta 1: Python con proyectos de IA', alt: 'Imagen del curso de Python con proyectos de IA', note: 'Para 4°, 5° y 6° de primaria. Dura de 8 a 10 meses a ritmo normal: en verano su hijo recorre entre la mitad y tres cuartas partes, con programas que cuentan, ordenan y grafican datos, y sigue en marzo.' },
      { course: 'python-complete-masterclass-teens', code: 'VUP / 02', title: 'Ruta 1: Python completo para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'De 13 a 18 años, desde cero. Su duración publicada es de 10 a 12 meses a dos clases semanales; con 4 o 5 por semana el verano adelanta más o menos la mitad, y el resto sigue en marzo.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'VUP / 03', title: 'Ruta 2: HTML y CSS, una web real', alt: 'Imagen del curso de HTML y CSS para principiantes', note: 'Desde los 10 años. Su duración publicada es de 4 meses, unas 32 clases a ritmo normal, así que a 4 o 5 clases por semana su hijo lo termina en el verano con una web propia.' }
    ]
  },

  sections: [
    {
      id: 'verano-2027',
      eyebrow: 'Verano 2027',
      h2: '¿Qué incluyen las vacaciones útiles 2027 de programación con nosotros?',
      lede: 'Dos rutas y un ritmo propio del verano. Su hijo toma la ruta Python e inteligencia artificial, la que recomendamos a quien no sabe por dónde empezar, o lleva a ritmo intensivo cualquier curso del catálogo que le entusiasme. En las dos, las clases son en vivo, en inglés y de 4 a 5 por semana mientras dure el descanso.',
      body: [
        { kind: 'two',
          leftH3: 'Ruta 1: Python e IA de verano',
          left: [
            'Primero Python, el lenguaje en el que hoy se escribe buena parte de la inteligencia artificial, y luego proyectos de IA pensados para la edad. En primaria alta el curso es Python con proyectos de IA; en secundaria, Python completo y después IA y aprendizaje automático o ciencia de datos.',
            'Lo que su hijo construye en enero le sirve para cualquier curso posterior, y el proyecto de cierre suele ser un programa que adivina, clasifica o dibuja un gráfico con datos que él mismo reunió.'
          ],
          rightH3: 'Ruta 2: el curso que su hijo escoja',
          right: [
            'Cualquier curso del catálogo se puede llevar a ritmo de verano: estructuras de datos y algoritmos (DSA), desarrollo web con HTML y CSS, apps para el celular, Java, C++, videojuegos, Roblox, Scratch, vibe coding o matemática.',
            'El mentor reparte el temario de ese curso en sesiones de verano y su hijo avanza de 4 a 5 veces por semana, en lugar de las dos clases semanales que tenemos durante el año escolar.'
          ] },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Clases acumuladas a ritmo de verano, semana por semana (cálculo y metas nuestras)', head: ['Semana', 'Con 4 clases por semana', 'Con 5 clases por semana', 'Meta habitual en la ruta 1'], rows: [
          ['1', '4', '5', 'Editor listo y primeros programas que saludan y preguntan'],
          ['2', '8', '10', 'Decisiones con if y else; un juego corto de preguntas'],
          ['4', '16', '20', 'Bucles y listas, como el registro de práctica de más abajo'],
          ['6', '24', '30', 'Funciones propias y un proyecto mediano a medio camino'],
          ['8', '32', '40', 'Cierre de enero y febrero de 2027: proyecto terminado y explicado'],
          ['10', '40', '50', 'Si empezó a fines de diciembre: un segundo proyecto o el módulo siguiente']
        ] },
        { kind: 'source', html: 'Cuentas y metas de Modern Age Coders. Durante el año escolar damos dos clases por semana, ocho al mes, que es lo que reflejan las tarjetas de precios de esta página. En verano el ritmo sube a 4 o 5 por semana y la cuarta columna describe la ruta Python e IA para primaria alta y secundaria; el mentor la ajusta a cada estudiante.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué ruta conviene según la edad (propuesta nuestra)', head: ['Edad y grado', 'Ruta 1: Python e IA', 'Ruta 2: ejemplos a elección', 'Lo que permite un verano'], rows: [
          ['6 a 8 años, 1° a 3° de primaria', 'Aún no: a esta edad se empieza con bloques', 'Scratch, apps con bloques, Minecraft', 'Un primer juego o una animación propia'],
          ['9 a 12 años, 4° de primaria a 1° de secundaria', 'Python con proyectos de IA', 'Web para niños, Roblox, matemática con código', 'Entre la mitad y tres cuartas partes del curso de Python e IA'],
          ['13 a 17 años, 2° a 5° de secundaria', 'Python completo, luego IA o ciencia de datos', 'DSA, desarrollo web, apps, Java, C++', 'Cerca de la mitad de Python completo; HTML y CSS, entero']
        ] },
        { kind: 'p', mt: true, html: 'Las cuentas honestas, hechas por nosotros: diez semanas a 4 o 5 clases suman de 40 a 50 clases. Un curso corto como HTML y CSS, de 4 meses en su página (unas 32 clases a nuestro ritmo normal), entra entero en el verano. Python para adolescentes figura con 10 a 12 meses, entre 80 y 96 clases: el verano cubre más o menos la mitad. Python con proyectos de IA para niños dura de 8 a 10 meses, entre 64 y 80 clases: el verano recorre entre la mitad y tres cuartas partes, y el resto sigue desde marzo a dos clases por semana. No le prometemos que un curso largo termine en febrero; le prometemos un avance grande y bien entendido.' },
        { kind: 'p', html: 'En Perú se llama vacaciones útiles a los cursos y talleres que los niños toman entre el fin de un año escolar y el inicio del siguiente, y casi siempre se venden con fecha de arranque y horas ya decididas. Aquí no hay fecha común: usted reserva la clase gratis, acuerda con el mentor el ritmo de verano y su hijo arranca en los días siguientes. Si está en primaria y quiere ver primero cómo se vive una clase en inglés, la página <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> lo cuenta con detalle.' }
      ]
    },
    {
      id: 'calendario',
      eyebrow: 'Calendario escolar',
      h2: '¿Cuándo empiezan las vacaciones útiles 2027?',
      lede: 'Empiezan cuando termina el año escolar 2026 en el colegio de su hijo y duran hasta que abra el año escolar 2027. La primera fecha está publicada; la segunda todavía no.',
      body: [
        { kind: 'table', numCols: [], caption: 'Bloques del año escolar 2026 según la Tabla 1 de la RM 501-2025-MINEDU', head: ['Bloque', 'Duración', 'Fechas 2026'], rows: [
          ['Primer bloque de semanas de gestión', '2 semanas', 'Del 2 al 13 de marzo de 2026'],
          ['Primer bloque de semanas lectivas', '9 semanas', 'Del 16 de marzo al 15 de mayo de 2026'],
          ['Segundo bloque de semanas de gestión', '1 semana', 'Del 18 al 22 de mayo de 2026'],
          ['Segundo bloque de semanas lectivas', '9 semanas', 'Del 25 de mayo al 24 de julio de 2026'],
          ['Tercer bloque de semanas de gestión', '2 semanas', 'Del 27 de julio al 7 de agosto de 2026'],
          ['Tercer bloque de semanas lectivas', '9 semanas', 'Del 10 de agosto al 9 de octubre de 2026'],
          ['Cuarto bloque de semanas de gestión', '1 semana', 'Del 12 al 16 de octubre de 2026'],
          ['Cuarto bloque de semanas lectivas', '9 semanas', 'Del 19 de octubre al 18 de diciembre de 2026'],
          ['Quinto bloque de semanas de gestión', '2 semanas', 'Del 21 al 31 de diciembre de 2026']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Educación del Perú, Resolución Ministerial N.° 501-2025-MINEDU del 7 de noviembre de 2025, "Norma Técnica para el Año Escolar 2026 en las Instituciones y Programas Educativos públicos y privados de la educación básica", numeral 5.2.1 y Tabla 1 "Distribución y fechas para la calendarización 2026". Leímos la tabla en la imagen del PDF firmado el 9 de noviembre de 2026. Las semanas de gestión son para el personal del colegio, no clases para los estudiantes.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que ya se sabe',
          left: [
            'Según la misma norma, el año escolar 2026 tiene 36 semanas lectivas y 8 semanas de gestión, y debe sumar como mínimo 160 días lectivos y 30 de gestión. El último día lectivo sugerido es el 18 de diciembre de 2026, y del 21 al 31 de diciembre de 2026 corren las semanas de gestión finales.',
            'La norma también deja margen: las DRE y UGEL "tienen la potestad de definir una distribución de semanas lectivas y de gestión distinta a la sugerida". Por eso el último día de clases puede variar según la región y el colegio. Revise la calendarización del colegio de su hijo.'
          ],
          rightH3: 'Lo que todavía no se sabe',
          right: [
            'Al 9 de noviembre de 2026, una búsqueda en gob.pe del título "Norma Técnica para el Año Escolar 2027" no devolvía ningún resultado, mientras que la misma búsqueda para 2026 devolvía 26. Es decir, la fecha de inicio del año escolar 2027 aún no estaba publicada cuando escribimos esta página.',
            'Lo que sí anunció el MINEDU el 14 de octubre de 2026 es que inició el despacho de 13.3 millones de unidades de materiales educativos para el año escolar 2027. Como referencia, el año escolar 2026 abrió el 16 de marzo de 2026; no suponemos que el 2027 repita esa fecha.'
          ] },
        { kind: 'p', mt: true, html: 'Para planificar sin depender de esa fecha, contamos con lo que no cambia: enero y febrero de 2027 suman 59 días, es decir ocho semanas y tres días (cálculo nuestro; 2027 no es año bisiesto). A 4 o 5 clases por semana, esas ocho semanas dan de 32 a 40 clases en vivo. Si su hijo empieza a fines de diciembre de 2026 llega a las diez semanas, y si empieza a mediados de enero de 2027 puede cerrar las últimas sesiones de verano con el colegio ya en marcha.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Quincena a quincena',
      h2: '¿Qué aprende un niño de programación en un verano a 4 o 5 clases por semana?',
      lede: 'Mucho más que en un taller de dos semanas: lo suficiente para terminar un proyecto propio, entender cómo funciona y empezar el siguiente. Esta es la ruta Python e IA repartida por quincenas y por edad; para los más pequeños, la versión con bloques. Es nuestra y el mentor la ajusta a cada niño en la clase gratis.',
      body: [
        { kind: 'table', numCols: [], caption: 'Verano de programación por quincenas, a ritmo intensivo (nuestra propuesta, no un programa oficial)', head: ['Quincena', 'De 6 a 8 años, con bloques', 'De 9 a 12 años, ruta Python e IA', 'Adolescentes de 13 a 17, ruta Python e IA'], rows: [
          ['1.ª', 'Secuencias y repeticiones: un personaje que camina y se anima', 'Python: print, variables, preguntas al usuario y if', 'Python: variables, tipos de datos, condiciones y bucles'],
          ['2.ª', 'Eventos y condiciones simples: chocar, ganar, perder', 'Bucles y listas; un marcador con barras de texto', 'Listas, diccionarios y funciones; un menú de opciones'],
          ['3.ª', 'Variables de puntaje y niveles en un juego propio', 'Datos propios: contar, ordenar y graficar en texto', 'Archivos y datos reales; primeras ideas de IA: patrones'],
          ['4.ª', 'Proyecto final: un juego con puntaje y tres niveles', 'Un primer proyecto de IA: un programa que adivina por parecido', 'Un modelo sencillo con datos y un informe de sus errores'],
          ['Cierre', 'Presentar el juego a la familia, en inglés', 'Explicar el código línea por línea, en inglés', 'Mostrar el proyecto y elegir el módulo siguiente']
        ] },
        { kind: 'source', html: 'Propuesta de Modern Age Coders para el verano 2027, pensada para 4 o 5 clases en vivo por semana en grupo; con clases individuales el ritmo se adapta a su hijo. En la ruta 2 el mentor reparte por quincenas el temario del curso elegido. Usted puede empezar cualquier semana y, en marzo, seguir a dos clases semanales o detenerse.' },
        { kind: 'two', mt: true,
          leftH3: 'Por qué un ritmo intensivo',
          left: [
            'Con dos clases a la semana, una idea nueva tiene tres o cuatro días para olvidarse. Con cuatro o cinco, se vuelve a usar al día siguiente, y eso es lo que la fija. El verano, sin tareas del colegio, es el único momento del año en que ese ritmo es sostenible para un escolar.',
            'Un proyecto terminado pesa más que diez ejercicios sueltos. Al final del verano su hijo tiene algo que mostrar y, sobre todo, sabe cómo lo construyó.'
          ],
          rightH3: 'Qué hacer entre clases',
          right: [
            'Con clases casi diarias, la práctica extra puede ser corta: de diez a veinte minutos en los días libres bastan. El ejemplo de más abajo es justamente un programa que lleva la cuenta de esos minutos.',
            'Ayuda mucho fijar la misma hora todos los días de clase. Aunque el horario lo decide usted, una rutina estable en casa hace que cinco sesiones semanales no se sientan como una carga.'
          ] },
        { kind: 'p', mt: true, html: 'Si su hijo ya programa, el verano cambia: en vez de empezar de cero, el mentor arma las semanas alrededor de un proyecto más grande o del curso de la ruta 2 que haya escogido, por ejemplo una web propia, una app o un juego en Roblox Studio. Y si su hijo es adolescente y está en un colegio bilingüe de Lima, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> (en inglés) describe los caminos que siguen los estudiantes de secundaria con nosotros.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Colegio y verano',
      h2: '¿Por qué aprender programación en vacaciones si el colegio no la enseña?',
      lede: 'Justamente por eso. El plan de estudios nacional no tiene un área de programación, así que el verano es el tiempo más tranquilo para empezar algo que en el año escolar casi no tendría espacio.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4, 5], caption: 'Algunas horas pedagógicas semanales de secundaria en jornada escolar regular, según el CNEB', head: ['Área curricular', '1°', '2°', '3°', '4°', '5°'], rows: [
          ['Matemática', '4', '4', '4', '4', '4'],
          ['Comunicación', '4', '4', '4', '4', '4'],
          ['Inglés', '3', '3', '3', '3', '3'],
          ['Educación para el trabajo', '2', '2', '2', '2', '2'],
          ['Programación o computación', 'no figura', 'no figura', 'no figura', 'no figura', 'no figura']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Currículo Nacional de la Educación Básica, plan de estudios de Educación Secundaria en jornada escolar regular (PDF publicado en minedu.gob.pe), consultado en noviembre de 2026. La última fila es nuestra lectura de la tabla completa, que suma 35 horas a la semana sin un área de computación ni de programación.' },
        { kind: 'p', mt: true, html: 'El CNEB sí permite a cada colegio usar sus horas de libre disponibilidad para "desarrollar talleres o áreas que complementen el logro de determinados aprendizajes considerados prioritarios", y algunos colegios montan allí un taller de computación. Pero depende de cada institución, y en primaria esas horas son apenas dos o tres por semana. En la práctica, la mayoría de los 6,225,000 estudiantes que, según el MINEDU, volvieron a clases el 16 de marzo de 2026 en 53,631 colegios de Educación Básica Regular no tiene una clase de programación en su horario.' },
        { kind: 'p', html: 'Lo más cercano a una clase de programación en el sistema público es un piloto: la estrategia Fábrica de Programadores del MINEDU, anunciada en 2025 para formar en su primera etapa a 1000 escolares de 4° y 5° de secundaria de Lima Norte en Python, cuyos participantes pueden rendir el examen PCEP. Es un buen camino para quien entra; para el resto, el verano es la oportunidad. Nuestro curso <a class="ag-inline-link" href="/courses/pcep-pcap-python-certification-course">PCEP y PCAP</a> sigue el mismo examen para adolescentes que ya saben lo básico de Python. Modern Age Coders no tiene relación con el MINEDU ni con ese piloto.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Qué se hace en una clase online de programación en verano?',
      lede: 'Así se ve una parte de una clase de la segunda quincena para niños de 9 a 12 años. El ejercicio es nuestro: un registro de cuántos minutos practicó su hijo cada día de la semana, con una barra dibujada por el propio programa y una meta de 200 minutos.',
      body: [
        { kind: 'code', label: 'Registro de práctica de una semana de verano', lang: 'Python', code: PY, note: 'Cada barra tiene un símbolo # por cada 5 minutos: <code>minutos[i] // 5</code> es la división entera. El mentor pregunta en inglés: "How many hashes will Thursday get?"' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Esto es lo que apareció en pantalla cuando corrimos el programa con Python 3, sin retoques. Con 180 minutos, a la meta le faltan 20.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer la lista.</strong> El niño lee en voz alta: "minutos is a list of seven numbers, one for each day". Una lista guarda varios valores en orden, y <code>minutos[0]</code> es el lunes.',
          '<strong>Predecir una barra.</strong> ¿Cuántos <code>#</code> tendrá el jueves? 50 entre 5 da 10. El niño lo calcula antes de ejecutar y luego lo cuenta en la pantalla.',
          '<strong>Seguir el total.</strong> Con lápiz y papel, sumar día por día igual que el programa: 40, 65, 65, 115, 145, 145, 180. Así se entiende qué hace <code>total = total + minutos[i]</code>.',
          '<strong>El reto.</strong> Cambiar el miércoles de 0 a 20 minutos. El programa imprime <code>Total minutes: 200</code>, <code>Days practised: 6 of 7</code> y <code>Goal reached!</code>, porque 200 es mayor o igual que 200.',
          '<strong>La pregunta del borde.</strong> ¿Qué pasa si se escribe <code>total &gt; meta</code> en vez de <code>&gt;=</code>? Con exactamente 200 minutos el programa diría que falta. El niño descubre que el borde de una condición es donde se esconden los errores.'
        ] },
        { kind: 'p', mt: true, html: 'Lo valioso no es la barra ni la meta. Es que su hijo aprende a predecir antes de ejecutar, a seguir el programa a mano cuando no entiende algo y a revisar justo el caso límite. Esa forma de pensar es la que enseñamos en cada clase y la que ninguna respuesta copiada de internet o de una herramienta de IA le puede dar. Y de paso, el programa le sirve para llevar la cuenta de su propio verano.' }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'En casa',
      h2: '¿Qué se necesita en casa para unas vacaciones útiles online?',
      lede: 'Una computadora con teclado, internet estable y un lugar tranquilo. No hace falta ningún programa de pago ni comprar materiales.',
      body: [
        { kind: 'two',
          leftH3: 'La computadora, el punto clave',
          left: [
            'El INEI midió en el segundo trimestre de 2026, con la Encuesta Nacional de Hogares, que solo un poco más de un tercio de los hogares peruanos tenía al menos una computadora (36,4 %). En Lima Metropolitana la cifra sube al 53,3 %; en el resto urbano es 41,3 % y en el área rural apenas 8,9 %.',
            'Para programar hace falta una computadora o laptop. Un celular sirve para unirse a la videollamada, pero no para escribir código con comodidad. Si en casa hay una sola computadora, conviene reservar la hora de la clase con anticipación.'
          ],
          rightH3: 'Todo lo demás es gratis',
          right: [
            'Scratch funciona en el navegador. Python y su editor se instalan gratis, y el mentor ayuda a hacerlo en la primera clase, compartiendo pantalla.',
            'Con audífonos y micrófono su hijo oirá al mentor sin perder palabras, algo importante en verano, cuando los hermanos también están en casa y hay más bulla.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Reserve la clase gratis.</strong> El formulario le muestra los horarios disponibles ya convertidos a la hora peruana.',
          '<strong>El mentor ubica a su hijo.</strong> Conversa con él en inglés sencillo y le propone un pequeño reto para ver por dónde empezar.',
          '<strong>Usted elige ruta y formato.</strong> Python e IA o un curso a elección; clase grupal de quince a veinte estudiantes de edad parecida, o clases individuales.',
          '<strong>Acuerdan el ritmo de verano.</strong> Antes de la primera clase de verano el mentor confirma con usted si serán 4 o 5 sesiones por semana y la tarifa de ese ritmo.',
          '<strong>En marzo decide.</strong> Seguir durante el año escolar a dos clases por semana, o detenerse. El pago es mensual.'
        ] }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios de verano',
      h2: '¿A qué hora serían las clases en enero y febrero?',
      lede: 'A la hora que usted elija. Los mentores enseñan desde la India, así que aquí tiene algunas horas peruanas de verano traducidas a su reloj.',
      body: [
        { kind: 'table', numCols: [], caption: 'Seis horas de verano en Lima y su equivalente en Nueva Delhi (solo conversiones, sin horario de clases)', head: ['En Perú', 'En la India', '¿Qué día es allá?'], rows: [
          ['7:30 a. m.', '6:00 p. m.', 'Ese mismo día'],
          ['9:00 a. m.', '7:30 p. m.', 'El mismo día'],
          ['11:30 a. m.', '10:00 p. m.', 'El mismo día'],
          ['1:00 p. m.', '11:30 p. m.', 'El mismo día'],
          ['6:00 p. m.', '4:30 a. m.', 'El día siguiente'],
          ['8:30 p. m.', '7:00 a. m.', 'El día siguiente']
        ] },
        { kind: 'source', html: 'Cálculo nuestro con los husos oficiales: Perú se mantiene en UTC-5 durante todo el verano, porque no aplica horario de verano (tzdata, zona America/Lima), y la India en UTC+5:30. La diferencia es de diez horas y media, la misma en enero que en julio.' },
        { kind: 'p', mt: true, html: 'En verano, sin colegio, muchas familias eligen la mañana: el niño está descansado, la casa está más tranquila y la tarde queda libre para la playa, la piscina o el deporte. Otras prefieren la noche, cuando los padres ya llegaron del trabajo y pueden escuchar la clase de lejos. Las dos opciones funcionan; lo importante es que la hora se mantenga de semana a semana.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance del verano',
    h2: '¿Cómo saber si el verano de programación está rindiendo?',
    lede: 'Cinco señales propias que miramos con su hijo a lo largo del verano, sin notas ni exámenes. Con 4 o 5 clases por semana suelen llegar antes que durante el año escolar.',
    table: { caption: 'Cinco señales de avance en un verano de programación (nuestras)', head: ['Señal', 'Cuándo suele aparecer', 'Lo que usted verá'], rows: [
      ['1. Llega con ganas', 'Primera semana', 'su hijo pregunta a qué hora es la clase antes de que usted se lo recuerde'],
      ['2. Predice', 'Segunda semana', 'dice qué va a hacer el programa antes de ejecutarlo, aunque a veces se equivoque'],
      ['3. Arregla solo', 'Semana 3 o 4', 'cuando algo falla, lee su código en lugar de pedir ayuda de inmediato'],
      ['4. Cambia algo', 'Semana 5', 'modifica un ejemplo de la clase para hacer otra cosa que se le ocurrió'],
      ['5. Explica', 'Al cierre del verano', 'le muestra su proyecto y le cuenta cómo funciona, mezclando inglés y castellano']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No mida el avance por cuántas horas pasa frente a la pantalla. Mídalo por cuánto puede explicarle. Un niño que explica su programa lo entendió; uno que solo lo muestra quizá lo copió.',
      'Si a mitad del verano su hijo se frustra, es buena señal: está en el punto donde se aprende de verdad. Avísele al mentor para que ajuste el ritmo.'
    ] },
    right: { h3: 'Para los estudiantes', ps: [
      'Antes de ejecutar, diga en voz alta qué espera ver. Después compare.',
      'Guarde cada versión de su proyecto con un número. Al final del verano verá cuánto cambió.'
    ] }
  },

  catalogue: {
    eyebrow: 'Ruta 2: más cursos para el verano',
    h2: 'Nueve cursos más que se pueden llevar a ritmo de verano',
    lede: 'Cualquiera de ellos se dicta con mentor en vivo, en inglés, en grupo o a solas, de 4 a 5 veces por semana durante el descanso y a dos por semana cuando vuelve el colegio.',
    bands: [
      { num: 'I', h3: 'Juegos', sub: 'De 6 a 17 años', courses: [
        { code: 'VUP / JUEGOS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch de cero a juegos reales', blurb: 'Para niños de 6 a 9 años que aún no escriben código: niveles, puntaje y sonido con bloques.' },
        { code: 'VUP / JUEGOS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio y Luau', blurb: 'De 8 a 14 años: un primer mundo jugable con reglas escritas en Luau, publicado antes de marzo.' },
        { code: 'VUP / JUEGOS / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Videojuegos con Godot', blurb: 'De 10 a 17 años: un motor de juegos libre y gratuito, en 2D y 3D, con GDScript.' }
      ] },
      { num: 'II', h3: 'Web y apps', sub: 'De 8 a 18 años', courses: [
        { code: 'VUP / WEB / 01', slug: 'block-coding-app-development-masterclass', title: 'Primera app para celular', blurb: 'De 8 a 12 años: una aplicación sencilla hecha con bloques, que la familia puede instalar y usar.' },
        { code: 'VUP / WEB / 02', slug: 'kids-ai-web-development-course', title: 'Mi primera web', blurb: 'De 9 a 12 años: una página propia sobre su deporte, su mascota o su viaje de verano.' },
        { code: 'VUP / WEB / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript para adolescentes', blurb: 'De 13 a 18 años: páginas interactivas y juegos que corren en el navegador.' }
      ] },
      { num: 'III', h3: 'Pensar antes de programar', sub: 'De 6 a 18 años', courses: [
        { code: 'VUP / LOGICA / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas como programador', blurb: 'Para niños de primaria: descomponer un problema, buscar patrones y probar soluciones.' },
        { code: 'VUP / LOGICA / 02', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'De 10 a 15 años: fracciones, patrones y geometría practicados escribiendo programas en Python.' },
        { code: 'VUP / LOGICA / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Lógica, estructuras de datos y algoritmos', blurb: 'Para secundaria: un curso largo, de 10 a 12 meses, al que el verano le da un gran adelanto.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo funcionan las clases en vivo durante el verano?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañanas de verano', l: 'Para aprovechar las horas en que el niño está más fresco.' },
      { time: 'Tarde o noche', l: 'Cuando los padres ya volvieron del trabajo y pueden acompañar.' },
      { time: 'Individual', l: 'Su hijo y el mentor, en el horario que usted fije.' }
    ],
    cells: [
      { h3: 'De 4 a 5 sesiones', p: 'El ritmo de verano se fija con el mentor antes de empezar y se mantiene semana a semana.' },
      { h3: 'Inglés hablado', p: 'El niño explica su código en voz alta, con frases cortas y sin apuro.' },
      { h3: 'Código propio', p: 'Cada línea la escribe su hijo; el mentor pregunta y orienta.' },
      { h3: 'Proyecto al final', p: 'El verano termina en algo que se puede mostrar en casa.' },
      { h3: 'Nota para la familia', p: 'Un resumen corto de lo que se practicó y lo que sigue.' },
      { h3: 'Marzo sin presión', p: 'Pago mensual: sigue a dos clases por semana solo si su hijo quiere.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Un verano bien aprovechado es el inicio de proyectos como estos, hechos por estudiantes mayores que empezaron igual que su hijo. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Lo que escriben en Google las familias y los estudiantes, sin traducir, en inglés.',

  fees: {
    h2: 'Precios para el verano 2027 en Perú',
    lede: 'Las tarjetas muestran nuestra mensualidad estándar, la de ocho clases al mes, en dólares estadounidenses; se cobra con tarjeta de crédito o débito y su banco hace la conversión al cambio del día. El ritmo de verano, de 4 a 5 clases por semana, y lo que cuesta se conversan con el mentor y quedan claros antes de la primera clase de verano. La clase de prueba no cuesta nada.',
    free: ['Una clase de prueba gratuita', 'El mentor recomienda ruta y ritmo', 'No se pide tarjeta'],
    group: ['Grupo de quince a veinte estudiantes de edad parecida', 'Ocho clases al mes durante el año escolar', 'En verano, de 4 a 5 por semana, con tarifa acordada antes', 'Puede dejarlo al terminar cualquier mes'],
    one: ['Su hijo solo con el mentor', 'La ruta 1 o el curso que elija, a su medida', 'Días y horas que usted decide']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles 2027 de programación: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan únicamente en inglés, siempre en vivo y por internet. Para muchas familias esa es la gracia del verano: su hijo avanza en programación y a la vez conversa en inglés varias horas por semana con un mentor paciente, que repite cuando hace falta y sigue su ritmo. Lima figura en el nivel alto del EF EPI 2025, y hablar con alguien en tiempo real es lo que más hace crecer esa soltura.' },
      { q: '¿Cuántas clases por semana hay en el verano?', a: 'De 4 a 5 clases en vivo por semana, frente a las dos semanales del año escolar. Usted elige el número exacto con el mentor antes de empezar, y los días y la hora los fija la familia.' },
      { q: '¿Qué rutas hay para el verano 2027?', a: 'Dos. La ruta Python e IA, que recomendamos a la mayoría, y la ruta a elección, en la que su hijo lleva a ritmo de verano cualquier curso del catálogo: DSA, desarrollo web, apps, Java, C++, juegos, Roblox, Scratch, vibe coding o matemática.' },
      { q: '¿Cuándo empiezan las vacaciones útiles 2027?', a: 'Cuando termina el año escolar 2026 en el colegio de su hijo. La RM 501-2025-MINEDU sugiere como último día lectivo el 18 de diciembre de 2026, aunque cada DRE o UGEL puede ajustar el calendario. La norma del año escolar 2027 aún no estaba publicada al 9 de noviembre de 2026. Su hijo puede empezar con nosotros cualquier semana de ese descanso.' },
      { q: '¿Se termina un curso completo en el verano?', a: 'Depende del curso. Diez semanas a 4 o 5 clases suman de 40 a 50 clases (cuenta nuestra). Un curso de 4 meses, como HTML y CSS, entra completo; uno de 10 a 12 meses, como Python para adolescentes, avanza más o menos la mitad y continúa en marzo.' },
      { q: '¿Hay un horario de verano o lo elijo yo?', a: 'Lo elige usted. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, cuando en Lima son las 9:00 a. m., en la India ya son las 7:30 p. m.' },
      { q: '¿Desde qué edad pueden participar?', a: 'Desde los 6 años, que según el MINEDU es la edad normativa para 1° de primaria, y hasta los 17. Los más pequeños usan bloques; la ruta Python e IA empieza hacia los 9 años; los adolescentes de secundaria empiezan directamente con Python.' },
      { q: '¿Mi hijo necesita saber programar o hablar inglés?', a: 'No. Basta con que quiera intentarlo y entienda saludos y frases sencillas. El mentor empieza desde cero y habla despacio; con clases casi diarias, el oído se acostumbra al acento en pocas semanas.' },
      { q: '¿Cuánto cuesta el ritmo de verano?', a: 'Las tarjetas de precios muestran la mensualidad estándar de ocho clases al mes, en dólares estadounidenses y con cobro por tarjeta. La tarifa del ritmo de 4 a 5 clases por semana se acuerda con el mentor antes de la primera clase de verano, y la clase de prueba es gratis.' },
      { q: '¿Las clases dan certificado o nota para el colegio?', a: 'Para el colegio no cuentan: no damos notas ni tenemos relación con el MINEDU, con las UGEL ni con ningún colegio. Lo único que entregamos al cerrar un curso es una constancia de Modern Age Coders que dice que su hijo lo completó.' },
      { q: '¿Qué pasa en marzo cuando vuelve el colegio?', a: 'Usted decide. Su hijo puede seguir con el mismo mentor durante el año escolar a dos clases por semana o detenerse. El pago es mensual y no hay permanencia mínima.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras páginas que ayudan a decidir el verano, varias de ellas en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La página principal para Perú: todas las edades, los cursos y los horarios.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Cómo es una clase en inglés para un niño de primaria, explicado en castellano.' },
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'Para familias de Arequipa, con un proyecto de datos de la región.' },
      { href: '/online-coding-summer-camp', label: 'Online coding summer camp', p: 'Nuestra guía general de verano de programación, en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué pasa dentro de una clase en vivo con nosotros.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, de primaria a la universidad.' }
    ]
  },

  start: {
    h2: 'Reserve la clase gratis y arme el verano 2027',
    lede: 'En esa primera sesión, que no cuesta nada, el mentor charla con su hijo, le plantea un reto corto y le recomienda una de las dos rutas. Luego acuerdan con usted si serán 4 o 5 clases por semana, en grupo o individuales, a qué hora y con qué tarifa, todo antes de la primera clase de verano y sin obligación de continuar.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre cómo damos las clases en vivo, y revisar <a class="ag-inline-link" href="/courses">All courses</a> con el catálogo completo (las dos páginas están en inglés).',
    note: 'Recuerde: todas las sesiones son en vivo, por internet y en inglés, con mentores que viven en la India. Por WhatsApp le contestamos antes, y ahí sí puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta, sin obligación.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de verano', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/html-css-course-for-beginners-build-real-websites', label: 'HTML y CSS' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños, en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Lima, colegios bilingües' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Diez semanas, de 40 a 50 clases en vivo'
  },

  personalityCss: `
.ag-root.ag-vup .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-vup .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vup .ag-table td:first-child { font-weight: 600; white-space: nowrap; }
.ag-root.ag-vup .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vup .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: RM 501-2025-MINEDU (norm page and signed PDF, Tabla 1, numeral 5.2.1, checked by eye), press notes of 16 March 2026 and 14 October 2026, CNEB secundaria plan de estudios (JER) and free-disposal hours, Fábrica de Programadores note; gob.pe search of 9 November 2026 for the 2027 norm (0 results, control 26); INEI Boletín TIC II trimestre 2026; tzdata for time; course durations from our own course pages. The two summer routes, the week-by-week class count, the fortnight plan, the signals ladder and the Python example are our own.',
    localProject: 'A summer practice tracker in Python for a child of 9 to 12 in vacaciones útiles: a list of seven daily minutes, a for loop that keeps a running total and a counter, a text bar chart made with \'#\' * (minutos[i] // 5), and a 200-minute goal; run with python3 -I it prints Total minutes: 180 and Minutes left to the goal: 20, and Goal reached! after Wednesday changes from 0 to 20, which leads into >= against > at the edge. Lesson family: list, running total, counter and string repetition as a bar chart.',
    requiredMentions: ['Minutes left to the goal: 20', 'Days practised: 6 of 7', 'enero y febrero de 2027 suman 59 días', 'Norma Técnica para el Año Escolar 2027', 'Del 19 de octubre al 18 de diciembre de 2026', '13.3 millones de unidades de materiales educativos', 'la cifra sube al 53,3 %', 'Diez semanas, de 40 a 50 clases en vivo', 'Clases acumuladas a ritmo de verano, semana por semana', 'formar en su primera etapa a 1000 escolares de 4° y 5° de secundaria de Lima Norte'],
    sources: [
      { claim: 'RM 501-2025-MINEDU approved the technical norm for the 2026 school year.', url: 'https://www.gob.pe/institucion/minedu/normas-legales/7380466-501-2025-minedu' },
      { claim: '2026 calendar Tabla 1 (blocks and dates), 36 teaching and 8 management weeks, 160 teaching days, DRE/UGEL may vary.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: '13.3 million units of materials dispatched for the 2027 school year, 14 October 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'No gob.pe result for the exact title of a 2027 school-year norm on 9 November 2026 (control search for 2026: 26 results).', url: 'https://www.gob.pe/busquedas?term=%22Norma+T%C3%A9cnica+para+el+A%C3%B1o+Escolar+2027%22' },
      { claim: 'Secundaria JER hours (Matemática 4, Comunicación 4, Inglés 3, Educación para el trabajo 2), no computing area; free-disposal hours for workshops.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: '53,631 schools and 6,225,000 students at the 2026 opening on 16 March 2026.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: 'Households with a computer: 36.4% national, 53.3% Lima Metropolitana, 41.3% rest urban, 8.9% rural (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age 6 for 1° de primaria, measured at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, in the High band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' },
      { claim: 'Course durations: Python for Teens 10-12 months (40-48 weeks); Python and AI for Kids 8-10 months (32-40 weeks); HTML and CSS 4 months (16 weeks); DSA for teens 10-12 months.', url: 'https://learn.modernagecoders.com/courses/python-complete-masterclass-teens' }
    ],
    rejectedClaims: [
      'A typed summer price or a fixed camp start date: refused; the owner\'s offer (2026-11-10) is 4 to 5 classes a week with the summer fee agreed with the mentor, and the template shows only the standard eight-class monthly fee.',
      'Promising that a long course (Python for Teens 10 to 12 months, Python and AI for Kids 8 to 10 months) is finished in the summer: refused; the page gives the share a summer covers and says the course continues in March.',
      'The start date of the 2027 school year: not printed; no 2027 norm was published on gob.pe at 9 November 2026, and the page says so.',
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any MINEDU, UGEL or school endorsement, or a link to Fábrica de Programadores: none; the page says we are not connected.',
      'Summing the 2026 blocks into a "holiday length": refused; only the calendar fact that January and February 2027 have 59 days is used, as our calculation.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

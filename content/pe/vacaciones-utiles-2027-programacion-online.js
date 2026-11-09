// SHIP: market | Vacaciones útiles 2027 de programación online: un plan de verano propio | lists, sum and a text bar chart: a summer practice tracker
'use strict';
// Vacaciones útiles 2027: programación online (ag- Spanish-language door, Peru cluster row PE107, P2 summer season, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no camp length,
// no start date and no camp price: the owner has not defined a summer package (spec section 8, question 8), so the page
// sells the normal live classes (group or one to one) as a summer start, with a holiday plan that is ours and says so.
// Angle: the Peruvian parent who types "vacaciones útiles 2027 programación online" in December 2026. Spine: what
// vacaciones útiles are and what we are (and are not) offering; when the 2027 break falls (2026 calendar from the signed
// RM 501-2025-MINEDU table, 2027 norm not yet published); our eight-week programming plan by age band; why the summer
// matters when the school timetable has no programming area (CNEB; Fábrica de Programadores as the one public pilot);
// one original Python lesson (a summer practice tracker); equipment at home (INEI); Peru to India clock conversions.
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
  description: 'Vacaciones útiles 2027 de programación online para niños y adolescentes en Perú: clases en vivo y en inglés, en grupo o individuales, con un plan de verano propio.',
  ogDescription: 'Programación en vivo y en inglés para el verano 2027 en Perú: cuándo caen las vacaciones, un plan propio de ocho semanas por edades y una clase de ejemplo en Python.',
  twitterDescription: 'Vacaciones útiles 2027 de programación, en vivo y en inglés, para niños y adolescentes en Perú, en grupo o individuales y a cualquier hora.',
  pageName: 'Vacaciones útiles 2027 de programación online',
  webPageDescription: 'Guía para familias en Perú que buscan vacaciones útiles de programación para el verano 2027: qué ofrecemos y qué no, cómo fue el calendario escolar 2026 según la RM 501-2025-MINEDU y qué se sabe del 2027, un plan de verano propio por edades, lo que el CNEB enseña y no enseña de programación, y una clase de ejemplo en Python escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños y adolescentes de 6 a 17 años en todo el Perú, dictadas solo en inglés, que pueden empezar en las vacaciones de verano 2027: Scratch, Python, juegos y web, en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles 2027: programación',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-ofrecemos', label: 'Qué ofrecemos' },
    { href: '#calendario', label: 'Calendario' },
    { href: '#plan', label: 'Plan de verano' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#horario', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Verano 2027 &middot; Programación de 6 a 17 años',
  h1: 'Vacaciones útiles 2027 de programación online, en vivo y en inglés',
  lede: 'Enero y febrero son, para muchas familias peruanas, los meses en que por fin hay tiempo para algo distinto al colegio. Esta página explica qué le proponemos para el verano 2027 si su hijo o hija quiere aprender a programar: un comienzo real con clases en vivo, un plan de ocho semanas pensado por nosotros y la libertad de seguir en marzo o de parar ahí.',
  secondaryCta: { href: '#plan', label: 'Ver el plan de verano' },
  wa: 'Hola Modern Age Coders, queremos aprovechar las vacaciones útiles 2027 para que nuestro hijo o hija aprenda programación en inglés. ¿Podemos reservar una clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un verano para empezar, no para correr',
  spec: [
    ['Edades', 'De 6 a 17 años, de 1° de primaria a 5° de secundaria'],
    ['Temas', 'Scratch, Python, juegos, páginas web y lógica'],
    ['Formato', 'Clase grupal de quince a veinte, o clases individuales'],
    ['Cuándo', 'Desde la semana que usted elija, en verano o después'],
    ['Idioma', 'Solo inglés, con mentores en vivo desde la India'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Si busca vacaciones útiles 2027 de programación online, Modern Age Coders ofrece clases en vivo, en línea y en inglés para niños y adolescentes de 6 a 17 años en todo el Perú. No es un taller con fecha fija de inicio: su hijo empieza la semana que usted elija, en una clase grupal o en clases individuales, a cualquier hora. Le sugerimos un plan propio de ocho semanas con un proyecto terminado al final, y en marzo usted decide si continúa durante el año escolar o se detiene.',

  picks: {
    eyebrow: 'Para empezar en verano',
    h2: 'Tres cursos con los que suele arrancar un verano de programación',
    lede: 'Uno por cada tramo de edad: bloques para los más pequeños, Python con proyectos de IA para primaria alta y Python completo para adolescentes de secundaria.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'VUP / 01', title: 'Scratch de cero a juegos reales', alt: 'Imagen del curso de Scratch para niños', note: 'Para niños de 6 a 9 años que todavía no escriben código. En ocho semanas de verano suelen terminar su primer juego con niveles, puntaje y sonido.' },
      { course: 'python-ai-kids-masterclass', code: 'VUP / 02', title: 'Python con proyectos de IA', alt: 'Imagen del curso de Python con proyectos de IA', note: 'Pensado para 4°, 5° y 6° de primaria. Del primer print a programas que cuentan, ordenan y grafican datos, como el registro de práctica que aparece más abajo.' },
      { course: 'python-complete-masterclass-teens', code: 'VUP / 03', title: 'Python completo para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'De 13 a 18 años, desde cero. Un verano alcanza para variables, condiciones, bucles, funciones y un primer programa propio que resuelva algo de casa.' }
    ]
  },

  sections: [
    {
      id: 'que-ofrecemos',
      eyebrow: 'Lo que ofrecemos',
      h2: '¿Qué son las vacaciones útiles de programación y qué ofrecemos nosotros?',
      lede: 'En Perú se llama vacaciones útiles a los cursos y talleres que los niños toman durante el descanso de verano, entre el fin de un año escolar y el inicio del siguiente. Los organizan municipalidades, colegios, academias e institutos, casi siempre con fecha de inicio, horario y número de semanas fijos.',
      body: [
        { kind: 'p', html: 'Nosotros funcionamos distinto, y preferimos decirlo desde el principio. No vendemos un taller de verano con fecha de arranque ni con duración cerrada. Lo que ofrecemos son nuestras clases regulares de programación, en vivo y en inglés, que su hijo puede empezar cualquier semana de diciembre de 2026, enero de 2027 o febrero de 2027. El verano es el momento de comenzar con calma; si el curso le gusta, continúa en marzo al mismo ritmo o a uno más suave cuando vuelva el colegio.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Sin fecha de inicio común', p: 'No hay que esperar a que se llene un grupo de verano. Usted reserva la clase gratis, el mentor ubica a su hijo y las clases empiezan en los días siguientes, en la franja que le acomode a la familia.' },
          { h3: 'Un plan de verano propio', p: 'Para quien quiere una meta concreta, proponemos ocho semanas con un proyecto terminado al final. Es una sugerencia nuestra, no un programa oficial: se puede acortar, estirar o cambiar de tema.' },
          { h3: 'Seguir o parar en marzo', p: 'El pago es mensual. Si en marzo de 2027 su hijo prefiere concentrarse en el colegio, lo deja sin penalidad; si quiere seguir, conserva al mismo mentor durante el año escolar.' }
        ] },
        { kind: 'p', mt: true, html: 'Las sesiones son siempre en vivo por videollamada, con un mentor que vive en la India y enseña solo en inglés. Para muchas familias eso convierte el verano en dos aprendizajes a la vez: lógica y programación, y horas de inglés hablado que el colegio no alcanza a dar. Si su hijo está en primaria y quiere saber cómo se vive una clase en inglés antes de decidir, la página <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> lo explica con detalle.' }
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
        { kind: 'p', mt: true, html: 'Para planificar sin depender de esa fecha, contamos con lo que no cambia: enero y febrero de 2027 suman 59 días, es decir ocho semanas y tres días (cálculo nuestro; 2027 no es año bisiesto). Por eso nuestro plan de verano tiene ocho semanas. Si su hijo empieza a fines de diciembre de 2026 le sobra margen, y si empieza a mediados de enero de 2027 puede terminar las últimas semanas ya con el colegio en marcha, a un ritmo más ligero.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Plan de verano',
      h2: '¿Qué puede aprender un niño de programación en un verano?',
      lede: 'Lo suficiente para terminar un proyecto propio y entender cómo funciona. Este es el plan de ocho semanas que sugerimos, con dos clases en vivo por semana, separado por edad. Es nuestro: lo ajustamos a cada niño en la clase gratis.',
      body: [
        { kind: 'table', numCols: [], caption: 'Plan de verano de programación en ocho semanas (nuestra propuesta, no un programa oficial)', head: ['Semanas', 'De 6 a 8 años', 'De 9 a 12 años', 'Adolescentes de 13 a 17'], rows: [
          ['1 y 2', 'Secuencias con bloques: mover un personaje paso a paso', 'Python: print, variables y preguntas al usuario', 'Python: variables, tipos de datos y entrada por teclado'],
          ['3 y 4', 'Repeticiones y eventos: un dibujo que se anima', 'Condiciones con if y else; un juego de adivinanzas', 'Condiciones, bucles y listas; un registro de práctica'],
          ['5 y 6', 'Condiciones simples: chocar, ganar, perder', 'Listas y bucles; un marcador con barras de texto', 'Funciones y diccionarios; un pequeño menú de opciones'],
          ['7 y 8', 'Proyecto final: un juego corto con puntaje', 'Proyecto final: un juego o un programa que use datos', 'Proyecto final: un programa útil para la casa o el barrio'],
          ['Cierre', 'Presentar el juego a la familia, en inglés', 'Explicar el código línea por línea, en inglés', 'Mostrar el proyecto y decidir el siguiente paso']
        ] },
        { kind: 'source', html: 'Plan elaborado por Modern Age Coders para el verano 2027. Supone dos clases en vivo por semana en grupo; con clases individuales el ritmo se adapta a su hijo. No es un taller con fecha de inicio ni una duración obligatoria: usted puede empezar cualquier semana y continuar o detenerse cuando quiera.' },
        { kind: 'two', mt: true,
          leftH3: 'Por qué ocho semanas',
          left: [
            'Es el tiempo que suele tomar pasar de "no sé por dónde empezar" a "terminé algo y lo puedo explicar". Menos semanas dejan el aprendizaje a medias; más semanas ya chocan con el regreso a clases.',
            'Un proyecto terminado pesa más que diez ejercicios sueltos. Al final del verano su hijo tiene algo que mostrar y, sobre todo, sabe cómo lo construyó.'
          ],
          rightH3: 'Qué hacer entre clases',
          right: [
            'Recomendamos de quince a treinta minutos de práctica en los días sin clase, nada más. El ejemplo de más abajo es precisamente un programa que lleva la cuenta de esos minutos.',
            'En verano no hay tareas del colegio compitiendo por el tiempo, así que la constancia es más fácil que en mayo. Aproveche esa ventaja con una rutina estable en casa, aunque las clases sean flexibles.'
          ] },
        { kind: 'p', mt: true, html: 'Si su hijo ya programa, el plan cambia: en vez de empezar de cero, el mentor arma ocho semanas alrededor de un proyecto más grande, por ejemplo una web propia o un juego en Roblox Studio. Y si su hijo es adolescente y está en un colegio bilingüe de Lima, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> (en inglés) describe los caminos que siguen los estudiantes de secundaria con nosotros.' }
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
      lede: 'Así se ve una parte de la clase de la semana 5 para niños de 9 a 12 años. El ejercicio es nuestro: un registro de cuántos minutos practicó su hijo cada día de la semana, con una barra dibujada por el propio programa y una meta de 200 minutos.',
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
          '<strong>Usted elige el formato.</strong> Clase grupal de quince a veinte estudiantes de edad parecida, o clases individuales.',
          '<strong>Arrancan las ocho semanas.</strong> Dos clases por semana, con una breve nota para la familia sobre lo practicado.',
          '<strong>En marzo decide.</strong> Seguir durante el año escolar, bajar el ritmo o detenerse. El pago es mensual.'
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
    lede: 'Cinco señales propias que miramos con su hijo durante las ocho semanas, sin notas ni exámenes.',
    table: { caption: 'Cinco señales de avance en un verano de programación (nuestras)', head: ['Señal', 'Cuándo suele aparecer', 'Lo que usted verá'], rows: [
      ['1. Llega con ganas', 'Semana 1 o 2', 'su hijo pregunta a qué hora es la clase antes de que usted se lo recuerde'],
      ['2. Predice', 'Semana 3', 'dice qué va a hacer el programa antes de ejecutarlo, aunque a veces se equivoque'],
      ['3. Arregla solo', 'Semana 4 o 5', 'cuando algo falla, lee su código en lugar de pedir ayuda de inmediato'],
      ['4. Cambia algo', 'Semana 6', 'modifica un ejemplo de la clase para hacer otra cosa que se le ocurrió'],
      ['5. Explica', 'Semana 8', 'le muestra su proyecto y le cuenta cómo funciona, mezclando inglés y castellano']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No mida el avance por cuántas horas pasa frente a la pantalla. Mídalo por cuánto puede explicarle. Un niño que explica su programa lo entendió; uno que solo lo muestra quizá lo copió.',
      'Si en la semana 4 su hijo se frustra, es buena señal: está en el punto donde se aprende de verdad. Avísele al mentor para que ajuste el ritmo.'
    ] },
    right: { h3: 'Para los estudiantes', ps: [
      'Antes de ejecutar, diga en voz alta qué espera ver. Después compare.',
      'Guarde cada versión de su proyecto con un número. Al final del verano verá cuánto cambió.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos para el verano',
    h2: 'Nueve cursos más para empezar en vacaciones',
    lede: 'Cada uno se dicta con mentor en vivo, en inglés, en grupo o a solas, y cualquiera puede arrancar en verano y continuar con el colegio.',
    bands: [
      { num: 'I', h3: 'Juegos', sub: 'De 7 a 17 años', courses: [
        { code: 'VUP / JUEGOS / 01', slug: 'minecraft-coding-for-kids-course', title: 'Programación con Minecraft', blurb: 'Para niños de 7 a 12 años que ya pasan horas en Minecraft y quieren automatizar sus construcciones.' },
        { code: 'VUP / JUEGOS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio y Luau', blurb: 'De 8 a 14 años: el verano alcanza para publicar un primer mundo jugable con reglas escritas en Luau.' },
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
        { code: 'VUP / LOGICA / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Lógica y algoritmos para adolescentes', blurb: 'De 13 a 18 años: estructuras de datos y algoritmos explicados desde cero.' }
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
      { h3: 'Mentor de todo el verano', p: 'El mismo mentor de la primera a la octava semana, y después si continúa.' },
      { h3: 'Inglés hablado', p: 'El niño explica su código en voz alta, con frases cortas y sin apuro.' },
      { h3: 'Código propio', p: 'Cada línea la escribe su hijo; el mentor pregunta y orienta.' },
      { h3: 'Proyecto al final', p: 'Ocho semanas que terminan en algo que se puede mostrar en casa.' },
      { h3: 'Nota para la familia', p: 'Un resumen corto de lo que se practicó y lo que sigue.' },
      { h3: 'Sin permanencia', p: 'Pago mensual: sigue en marzo solo si su hijo quiere.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Un verano bien aprovechado es el inicio de proyectos como estos, hechos por estudiantes mayores que empezaron igual que su hijo. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Lo que escriben en Google las familias y los estudiantes, sin traducir, en inglés.',

  fees: {
    h2: 'Precios para el verano 2027 en Perú',
    lede: 'La mensualidad figura en dólares estadounidenses y se cobra con tarjeta de crédito o débito; la conversión la hace su banco al cambio vigente. En verano se paga igual que el resto del año, mes a mes, sin matrícula aparte.',
    free: ['Una clase de prueba gratuita', 'El mentor ubica a su hijo en el plan', 'No se pide tarjeta'],
    group: ['Grupo de quince a veinte estudiantes de edad parecida', 'Dos clases en vivo por semana', 'El mismo mentor todo el verano', 'Puede dejarlo al terminar cualquier mes'],
    one: ['Su hijo solo con el mentor', 'El plan de ocho semanas a su medida', 'Días y horas que usted decide']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles 2027 de programación: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan únicamente en inglés, siempre en vivo y por internet. Para muchas familias esa es la gracia del verano: su hijo avanza en programación y a la vez conversa en inglés varias horas por semana con un mentor paciente, que repite cuando hace falta y sigue su ritmo. Lima figura en el nivel alto del EF EPI 2025, y hablar con alguien en tiempo real es lo que más hace crecer esa soltura.' },
      { q: '¿Cuándo empiezan las vacaciones útiles 2027?', a: 'Cuando termina el año escolar 2026 en el colegio de su hijo. La RM 501-2025-MINEDU sugiere como último día lectivo el 18 de diciembre de 2026, aunque cada DRE o UGEL puede ajustar el calendario. La norma del año escolar 2027 aún no estaba publicada al 9 de noviembre de 2026.' },
      { q: '¿Cuándo puede empezar mi hijo?', a: 'Cualquier semana. No hay una fecha de inicio común: usted reserva la clase gratis y las clases empiezan en los días siguientes, en diciembre de 2026, en enero de 2027, en febrero de 2027 o después.' },
      { q: '¿Cuántas semanas dura el programa de verano?', a: 'No hay una duración obligatoria. Sugerimos un plan propio de ocho semanas porque enero y febrero de 2027 suman 59 días y ese tiempo alcanza para terminar un proyecto. Usted puede acortarlo, alargarlo o seguir durante el año escolar.' },
      { q: '¿Hay un horario de verano o lo elijo yo?', a: 'Lo elige usted. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, cuando en Lima son las 9:00 a. m., en la India ya son las 7:30 p. m.' },
      { q: '¿Desde qué edad pueden participar?', a: 'Desde los 6 años, que según el MINEDU es la edad normativa para 1° de primaria, y hasta los 17. Los más pequeños usan bloques; desde los 9 años la mayoría pasa a Python; los adolescentes de secundaria empiezan directamente con Python.' },
      { q: '¿Mi hijo necesita saber programar o hablar inglés?', a: 'No. Basta con que quiera intentarlo y entienda saludos y frases sencillas. El mentor empieza desde cero y habla despacio; las dos o tres primeras semanas sirven para acostumbrarse al acento.' },
      { q: '¿Qué equipo hace falta en casa?', a: 'Basta con una laptop o una PC de escritorio que tenga cámara, buena conexión a internet y unos audífonos con micrófono. Los programas que usamos son gratuitos, y en la primera sesión el mentor guía la instalación paso a paso.' },
      { q: '¿Cómo se paga el verano?', a: 'Mes a mes, con tarjeta y en dólares estadounidenses; el cargo en su estado de cuenta aparece ya convertido por su banco. Para la sesión de prueba no se pide ningún dato de pago.' },
      { q: '¿Las clases dan certificado o nota para el colegio?', a: 'Para el colegio no cuentan: no damos notas ni tenemos relación con el MINEDU, con las UGEL ni con ningún colegio. Lo único que entregamos al cerrar un curso es una constancia de Modern Age Coders que dice que su hijo lo completó.' },
      { q: '¿Qué pasa en marzo cuando vuelve el colegio?', a: 'Usted decide. Su hijo puede seguir con el mismo mentor durante el año escolar, bajar a un ritmo más suave o detenerse. El pago es mensual y no hay permanencia mínima.' }
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
    h2: 'Reserve la clase gratis y planifique el verano',
    lede: 'Durante esa sesión inicial el mentor charla con su hijo, le plantea un reto corto y le dice qué tramo del plan de verano le corresponde. Usted sale con una recomendación concreta de curso y formato, sin obligación de continuar.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre cómo damos las clases en vivo, y revisar <a class="ag-inline-link" href="/courses">All courses</a> con el catálogo completo (las dos páginas están en inglés).',
    note: 'Recuerde: todas las sesiones son en vivo, por internet y en inglés, con mentores que viven en la India. Por WhatsApp le contestamos antes, y ahí sí puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta, sin obligación.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de verano', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños, en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Lima, colegios bilingües' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Ocho semanas, un proyecto propio'
  },

  personalityCss: `
.ag-root.ag-vup .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-vup .ag-capsule { border-left-width: 6px; }
.ag-root.ag-vup .ag-table td:first-child { font-weight: 600; white-space: nowrap; }
.ag-root.ag-vup .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-vup .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: RM 501-2025-MINEDU (norm page and signed PDF, Tabla 1, numeral 5.2.1, checked by eye), press notes of 16 March 2026 and 14 October 2026, CNEB secundaria plan de estudios (JER) and free-disposal hours, Fábrica de Programadores note; gob.pe search of 9 November 2026 for the 2027 norm (0 results, control 26); INEI Boletín TIC II trimestre 2026; tzdata for time. The eight-week plan, the signals ladder and the Python example are our own.',
    localProject: 'A summer practice tracker in Python for a child of 9 to 12 in vacaciones útiles: a list of seven daily minutes, a for loop that keeps a running total and a counter, a text bar chart made with \'#\' * (minutos[i] // 5), and a 200-minute goal; run with python3 -I it prints Total minutes: 180 and Minutes left to the goal: 20, and Goal reached! after Wednesday changes from 0 to 20, which leads into >= against > at the edge. Lesson family: list, running total, counter and string repetition as a bar chart.',
    requiredMentions: ['Minutes left to the goal: 20', 'Days practised: 6 of 7', 'enero y febrero de 2027 suman 59 días', 'Norma Técnica para el Año Escolar 2027', 'Del 19 de octubre al 18 de diciembre de 2026', '13.3 millones de unidades de materiales educativos', 'la cifra sube al 53,3 %', 'Ocho semanas, un proyecto propio', 'Plan de verano de programación en ocho semanas', 'formar en su primera etapa a 1000 escolares de 4° y 5° de secundaria de Lima Norte'],
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
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A summer camp with a start date, a fixed number of weeks or a one-payment price: refused; the owner has not defined a summer package, so the page sells the normal monthly classes and labels the eight-week plan as ours.',
      'The start date of the 2027 school year: not printed; no 2027 norm was published on gob.pe at 9 November 2026, and the page says so.',
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any MINEDU, UGEL or school endorsement, or a link to Fábrica de Programadores: none; the page says we are not connected.',
      'Summing the 2026 blocks into a "holiday length": refused; only the calendar fact that January and February 2027 have 59 days is used, as our calculation.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

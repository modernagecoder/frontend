// SHIP: market | Vacaciones útiles 2027 de IA: la ruta Python e IA a 4 o 5 clases, con edades | nearest-neighbour classifier by hand: training data, distance, a wrong guess
'use strict';
// Vacaciones útiles 2027: inteligencia artificial (ag- Spanish-language door, Peru cluster row PE108, P2 summer season, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Owner 2026-11-10 (brief, "Summer offer"): "summer page sells summer coding of python and ai or custom choose your courses
// regular class weekly 4 to 5 classes to complete the courses DSA web dev app dev and many more make nice summer pages".
// Revised 2026-11-10: this page leads with route 1, Summer Python and AI, at 4 to 5 live classes a week (route 2, any other
// course, as the alternative), group or one to one, flexible hours, summer pace and fee agreed with the mentor before the
// first summer class, first class free. Formal "usted" throughout. Fees render in USD from the template only (standard
// eight-class monthly fee); no summer price typed.
// Angle: the Peruvian parent who types "vacaciones útiles 2027 inteligencia artificial" or "curso de IA para niños verano".
// Spine: the AI route course by course with how much of each a summer of 40 to 50 classes covers (ours, from each course
// page's published duration) and which route and tools fit each age; what an AI summer should teach (how a machine learns,
// not which chatbot to use); which AI tools a child may use at
// each age, from the vendors' own terms, and what Peru's data-protection rule says about under-14s; what MINEDU is doing with
// AI (teachers, rural planning, Hackathon) and that the CNEB has no AI subject; our eight-week AI plan by age band; one
// original Python lesson (a nearest-neighbour classifier on invented fruit data); OPEIA, UTEC's AI olympiad for secundaria.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-2027-inteligencia-artificial/;
// FACTS = facts-school/FACTS.md, MARKET/LEGAL = facts-market/):
//  Vendor terms via content/ai-tool-age-audit.json (each floor read on the vendor's own page and quoted verbatim, audited
//    2026-07-15; copy saved): OpenAI "You must be at least 13 years old or the minimum age required in your country to consent
//    to use the Services. If you are under 18 you must have your parent or legal guardian's permission to use the Services.";
//    Anthropic "You must be at least 18 years old or the minimum age required to consent to use the Services in your location,
//    whichever is higher."; Google Gemini "You must be 13 (or the applicable age in your country) or over to use Gemini with a
//    personal or school Google Account ... You still can't access the Gemini web app with a Google Account managed by Family
//    Link."; Perplexity "You must be 13 years of age or older to use the Services. ... only permitted to use the Services if the
//    minor's parent or guardian accepts these Terms on the minor's behalf prior to use of the Services."; Canva "AI-powered
//    products are for users aged 13 years and over unless used as part of Canva Education under teach supervision.";
//    Teachable Machine: no age for the tool; Google "For all countries not listed below, 13 is the minimum age to manage your own
//    Google Account."
//  DS 016-2024-JUS, Reglamento de la Ley 29733 (LEGAL 4; El Peruano, 30 November 2024): "25.3 En el marco de la oferta de
//    servicios digitales dirigida a menores de catorce años de edad, el tratamiento de datos personales es lícito siempre que se
//    cuente con el consentimiento de aquel o aquellos que ejercen la patria potestad o tutela, según corresponda."; "25.2 En el
//    marco de la oferta de servicios digitales para mayores de catorce y menores de dieciocho años, el tratamiento de datos
//    personales es lícito cuando se haya obtenido su consentimiento."
//  MINEDU press note 9 May 2025 (FACTS 50): "más de 87 000 docentes en el territorio nacional se han inscrito en el curso
//    "Inteligencia artificial (IA) en la práctica docente"".
//  MINEDU press note 4 December 2025 (FACTS 51): "implementará el próximo año el uso de la inteligencia artificial para la
//    planificación de los aprendizajes en 205 instituciones educativas del ámbito rural"; headline "27 000 estudiantes del
//    ámbito rural".
//  MINEDU press note 4 August 2025 (FACTS 48): "la cuarta edición de la Hackathon 2025 del Ministerio de Educación (Minedu), que
//    premió a los equipos de estudiantes, docentes y especialistas, quienes sorprendieron con proyectos de IA y robótica."
//  CNEB (FACTS 32, 33): competency 28 "Se desenvuelve en entornos virtuales generados por las TIC" is transversal.
//  UTEC, opi.utec.edu.pe (FACTS 111, 113): "abiertas gratuitamente a todos los estudiantes de secundaria del país"; "Olimpiada
//    Peruana de Inteligencia Artificial (OPEIA) Inscripciones : hasta el 18 de marzo del 2026. Competencia : 19 de marzo del 2026
//    ( única fecha)"; "Estos son los estudiantes que fueron seleccionados para representar al Perú en la IOAI en el año 2025."
//  UTEC, Reglamento OPI 2025 (FACTS 118): "Queda prohibido el uso de IA generativa para la resoluci´on de problemas" (LaTeX accent).
//  RM 501-2025-MINEDU Tabla 1 (FACTS 23; page image checked by eye 2026-11-09): last teaching block "Del 19 octubre a 18 de
//    diciembre" 2026.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (frutas.py and reto.py in the src-pages folder; the fruit numbers are invented by us):
//    (9, 2) guess: lucuma distance: 1 real: lucuma / (3, 8) guess: maracuya distance: 1 real: maracuya /
//    (6, 6) guess: mango distance: 1 real: mango / (5, 7) guess: maracuya distance: 2 real: mango / Right: 3 / 4
//    reto (add (5, 6, 'mango') to the training data): (5, 7) guess: mango distance: 1 real: mango / Right: 4 / 4
// Course durations quoted (duration field of each course page, content/courses/data): AI literacy for kids "4 months (16
//    weeks)"; Python and AI for Kids "8-10 months (32-40 weeks)"; Python for Teens "10-12 months (40-48 weeks)"; Orange "24
//    classes (12 weeks · 2 classes/week)"; Data Science for Teens "6 months (24 weeks)"; AI and ML for Teens "10-12 months
//    (40-48 weeks)". Our arithmetic (scratchpad summer_math.py, python3 -I): "10 weeks: 40 to 50 classes"; at two a week
//    ai-lit 32, py-ai-kids 64 to 80, py-teens 80 to 96, ds-teens 48, ai-ml-teens 80 to 96 classes (durations corrected
//    2026-11-10 against python-teens.json and python-ai-kids.json).
// Lesson family: a one-nearest-neighbour classifier written by hand: training examples as tuples, squared distance, the
// closest example wins, a test set scored, and one more example fixing a wrong guess.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'entrenamiento = [',
  "    (8, 2, 'lucuma'), (9, 1, 'lucuma'),",
  "    (3, 9, 'maracuya'), (4, 8, 'maracuya'),",
  "    (7, 6, 'mango'), (8, 5, 'mango'),",
  ']',
  "pruebas = [(9, 2, 'lucuma'), (3, 8, 'maracuya'), (6, 6, 'mango'), (5, 7, 'mango')]",
  '',
  'def adivinar(dulzor, acidez):',
  '    menor_dist = 999',
  "    cercana = ''",
  '    for d, a, fruta in entrenamiento:',
  '        dist = (d - dulzor) ** 2 + (a - acidez) ** 2',
  '        if dist < menor_dist:',
  '            menor_dist = dist',
  '            cercana = fruta',
  '    return cercana, menor_dist',
  '',
  'aciertos = 0',
  'for dulzor, acidez, real in pruebas:',
  '    fruta, dist = adivinar(dulzor, acidez)',
  '    if fruta == real:',
  '        aciertos = aciertos + 1',
  "    print((dulzor, acidez), 'guess:', fruta, 'distance:', dist, 'real:', real)",
  "print('Right:', aciertos, '/', len(pruebas))"
].join('\n');

const OUT = [
  '(9, 2) guess: lucuma distance: 1 real: lucuma',
  '(3, 8) guess: maracuya distance: 1 real: maracuya',
  '(6, 6) guess: mango distance: 1 real: mango',
  '(5, 7) guess: maracuya distance: 2 real: mango',
  'Right: 3 / 4'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Vacaciones útiles 2027: inteligencia artificial' },
  slug: 'vacaciones-utiles-2027-inteligencia-artificial',
  code: 'vui',
  accent: '#583400',
  accentRationale: 'Vacaciones útiles 2027 de inteligencia artificial: a deep roasted-cacao brown #583400, earthy and serious for a page about thinking rather than gadgets, and darker than the terracotta of the programming summer page; contrast 8.94 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles 2027: inteligencia artificial',
  title: 'Vacaciones útiles 2027 de inteligencia artificial, en inglés',
  description: 'Vacaciones útiles 2027 de IA en Perú: la ruta Python e IA a 4 o 5 clases por semana, en vivo y en inglés, con herramientas adecuadas a la edad de su hijo.',
  ogDescription: 'Un verano de IA en vivo y en inglés para escolares en Perú: la ruta Python e IA curso por curso, cuánto avanza a 4 o 5 clases por semana, edades por herramienta y un clasificador en Python.',
  twitterDescription: 'Python e inteligencia artificial para escolares en Perú en el verano 2027: de 4 a 5 clases en vivo por semana, en inglés, en grupo o individual.',
  pageName: 'Vacaciones útiles 2027 de inteligencia artificial',
  webPageDescription: 'Guía para familias en Perú que buscan un verano de inteligencia artificial para sus hijos: la ruta de verano Python e IA a 4 o 5 clases por semana y cuánto de cada curso cubre, qué debería enseñar un curso de IA a cada edad, qué edad mínima fijan las propias empresas para ChatGPT, Claude, Gemini y otras herramientas, qué dice el reglamento peruano de datos personales sobre los menores de 14 años, qué hace el MINEDU con la IA, la olimpiada OPEIA de UTEC y un clasificador en Python escrito por nosotros.',
  courseDescription: 'Ruta de verano Python e IA, en vivo y en línea, para niños y adolescentes de 6 a 17 años en todo el Perú, dictada solo en inglés y a 4 o 5 clases por semana durante las vacaciones 2027: cómo aprende una máquina, datos, Python y proyectos de IA con herramientas adecuadas a cada edad, en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles 2027: IA',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#ruta-ia', label: 'Ruta Python e IA' },
    { href: '#herramientas', label: 'Edades y herramientas' },
    { href: '#plan-ia', label: 'Plan de verano' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#opeia', label: 'OPEIA' }
  ],
  eyebrow: 'Perú &middot; Verano 2027 &middot; Inteligencia artificial de 6 a 17 años',
  h1: 'Vacaciones útiles 2027 de inteligencia artificial, en vivo y en inglés',
  lede: 'Muchos padres nos escriben con la misma duda: su hijo ya conversa con un chatbot, pero ¿entiende qué hay detrás? Nuestra ruta de verano Python e IA responde eso con un ritmo intensivo, de 4 a 5 clases en vivo por semana: primero Python, luego modelos que su hijo programa y pone a prueba, siempre con herramientas que su edad permite.',
  secondaryCta: { href: '#ruta-ia', label: 'Ver la ruta Python e IA' },
  wa: 'Hola Modern Age Coders, nos interesa un curso de inteligencia artificial en inglés para nuestro hijo o hija durante las vacaciones útiles 2027 en Perú. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; IA a ritmo de verano, para entenderla',
  spec: [
    ['Edades', 'De 6 a 17 años, con un plan distinto para cada tramo'],
    ['Ruta de verano', 'Python primero, luego proyectos de IA'],
    ['Ritmo', 'De 4 a 5 clases en vivo por semana'],
    ['Herramientas', 'Solo las que permite la edad de su hijo'],
    ['Formato', 'Clase grupal de quince a veinte, o individual'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'En las vacaciones útiles 2027, Modern Age Coders ofrece una ruta de verano Python e IA para escolares peruanos de 6 a 17 años, con clases en vivo, en línea y en inglés, de 4 a 5 clases a la semana. Su hijo aprende Python y después cómo aprende una máquina: datos, patrones, errores y modelos sencillos que programa él mismo, solo con herramientas que su edad permite. Si prefiere otro curso, como DSA, web o apps, también va a ritmo de verano, en grupo o individual y a la hora que la familia elija. La primera clase es gratis.',

  picks: {
    eyebrow: 'Ruta Python e IA',
    h2: 'Tres cursos de la ruta de verano Python e IA, según la edad',
    lede: 'Para los menores, entender la IA sin abrir cuentas; para primaria alta, programarla en Python; para secundaria, construir modelos con datos reales. Los tres se llevan a 4 o 5 clases por semana durante el descanso.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'VUI / 01', title: 'Entender la inteligencia artificial', alt: 'Imagen del curso de alfabetización en IA para niños', note: 'De 8 a 14 años, sin saber programar. Dura 4 meses a ritmo normal, así que en verano se completa: cómo se entrena un modelo, por qué inventa respuestas y cómo comprobar lo que dice una IA.' },
      { course: 'python-ai-kids-masterclass', code: 'VUI / 02', title: 'Python y proyectos de IA para primaria', alt: 'Imagen del curso de Python con proyectos de inteligencia artificial', note: 'Para 9 a 12 años. Dura de 8 a 10 meses a ritmo normal: el verano cubre entre la mitad y tres cuartas partes, con programas que clasifican, cuentan y adivinan y modelos de imágenes entrenados en el navegador, sin crear cuentas.' },
      { course: 'ai-ml-masterclass-teens', code: 'VUI / 03', title: 'IA y aprendizaje automático para adolescentes', alt: 'Imagen del curso de inteligencia artificial y machine learning para adolescentes', note: 'De 13 a 18 años, con la matemática del colegio basta. Python, datos y modelos reales, desde una regresión sencilla hasta una red neuronal pequeña; el verano adelanta más o menos la mitad.' }
    ]
  },

  sections: [
    {
      id: 'ruta-ia',
      eyebrow: 'Verano 2027',
      h2: '¿Cómo es la ruta de verano Python e IA para niños y adolescentes?',
      lede: 'Es nuestra propuesta principal para enero y febrero de 2027: Python primero y, sobre esa base, inteligencia artificial que su hijo construye con sus propias manos. Va a un ritmo de 4 a 5 clases en vivo por semana, en grupo o individual, y si su hijo prefiere otra materia puede llevar cualquier curso del catálogo al mismo ritmo.',
      body: [
        { kind: 'two',
          leftH3: 'Ruta 1: Python e IA, la que recomendamos aquí',
          left: [
            'Para primaria alta, el curso Python con proyectos de IA: programas que adivinan, clasifican y aprenden de ejemplos, como el clasificador de frutas de esta página. Para secundaria, Python completo y después ciencia de datos, Orange o el curso de IA y aprendizaje automático.',
            'Cada tramo respeta la edad mínima que fijan las empresas de IA. Los niños programan sus propios modelos sin abrir cuentas; los adolescentes usan herramientas generativas solo cuando los términos lo permiten y la familia está de acuerdo.'
          ],
          rightH3: 'Ruta 2: otro curso, al mismo ritmo',
          right: [
            'Si a su hijo le atrae más construir que analizar datos, el verano puede dedicarse a cualquier otro curso: estructuras de datos y algoritmos (DSA), desarrollo web, apps para el celular, Java, C++, videojuegos, Roblox, Scratch, vibe coding o matemática.',
            'El mentor reparte ese temario en sesiones de verano. Lo que su hijo haya aprendido de Python e IA no se pierde: muchos estudiantes vuelven a la ruta 1 en el verano siguiente.'
          ] },
        { kind: 'table', mt: true, numCols: [3], caption: 'Cuánto de cada curso de IA cubre un verano de 40 a 50 clases (cuentas nuestras)', head: ['Curso de la ruta Python e IA', 'Duración publicada del curso', 'Clases a nuestro ritmo normal', 'Con 4 o 5 clases por semana en verano'], rows: [
          ['Entender la IA, de 8 a 14 años', '4 meses (16 semanas)', '32', 'Se completa y queda margen para un proyecto'],
          ['Python con proyectos de IA, de 9 a 12', 'De 8 a 10 meses', '64 a 80', 'Entre la mitad y tres cuartas partes; sigue en marzo'],
          ['Python para adolescentes, de 13 a 18', 'De 10 a 12 meses', '80 a 96', 'Más o menos la mitad; sigue en marzo'],
          ['Machine learning visual con Orange', '24 clases (12 semanas)', '24', 'Se completa en cinco o seis semanas'],
          ['Ciencia de datos, de 14 a 18', '6 meses (24 semanas)', '48', 'Se completa, o casi, a cinco por semana'],
          ['IA y aprendizaje automático, de 13 a 18', 'De 10 a 12 meses', '80 a 96', 'Más o menos la mitad']
        ] },
        { kind: 'source', html: 'La segunda columna es la duración que publica la página de cada curso. Las otras dos son cálculo nuestro: nuestro ritmo normal es de dos clases por semana, y un verano de diez semanas a 4 o 5 clases suma de 40 a 50 clases. Un adolescente que empieza de cero suele dedicar el verano a Python para adolescentes; si prefiere cerrar un curso entero antes de marzo, Orange enseña aprendizaje automático sin escribir código y cabe completo.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué ruta y qué herramientas según la edad (propuesta nuestra, con las edades de cada empresa)', head: ['Edad', 'Ruta 1: Python e IA', 'Herramientas de IA en clase', 'Si prefiere la ruta 2'], rows: [
          ['6 a 8 años', 'Antes de Python: razonar, agrupar y clasificar jugando', 'Teachable Machine en el navegador, sin cuenta', 'Scratch o apps con bloques'],
          ['9 a 12 años', 'Entender la IA y Python con proyectos de IA', 'Teachable Machine sin cuenta; ningún chatbot', 'Web para niños o Roblox'],
          ['13 a 15 años', 'Python completo, luego Orange o IA y aprendizaje automático', 'ChatGPT o Perplexity solo con permiso previo de la familia', 'DSA, apps o desarrollo web'],
          ['16 y 17 años', 'Python, ciencia de datos e IA y aprendizaje automático', 'Las mismas reglas; Claude queda fuera hasta los 18', 'Java, C++ o desarrollo web completo']
        ] },
        { kind: 'p', mt: true, html: 'Lo que no prometemos: que un curso de diez o doce meses termine en febrero. Diez semanas a ritmo intensivo dan para completar los cursos cortos de la tabla y adelantar cerca de la mitad de los largos; el resto continúa desde marzo a dos clases por semana, con el mismo mentor, si su hijo quiere. Lo que sí prometemos es que cada modelo que construya lo entenderá, sabrá dónde falla y podrá explicarlo en inglés.' }
      ]
    },
    {
      id: 'que-aprende',
      eyebrow: 'Qué se aprende',
      h2: '¿Qué debería aprender un niño en un curso de inteligencia artificial?',
      lede: 'Cómo funciona por dentro. Usar un chatbot se aprende solo en una tarde; entender por qué responde lo que responde, y cuándo no hay que creerle, es lo que de verdad le servirá en el colegio y después.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Datos y patrones', p: 'Toda IA aprende de ejemplos. Su hijo arma sus propios datos, como un grupo de frutas con su dulzor y su acidez, y ve cómo una máquina encuentra el patrón que separa una fruta de otra.' },
          { h3: 'Errores y límites', p: 'Un modelo se equivoca cuando sus datos son pocos o están sesgados. En clase lo provocamos a propósito: quitamos ejemplos, agregamos uno raro y observamos cómo cambian las respuestas.' },
          { h3: 'Criterio propio', p: 'Para los adolescentes que ya usan herramientas generativas, la meta es revisar, comprobar y citar. Nunca copiar una respuesta sin entenderla, ni entregar como propio un trabajo hecho por una IA.' }
        ] },
        { kind: 'p', mt: true, html: 'Un detalle práctico: la ruta no tiene día de inauguración. Su hijo arranca la semana que usted elija entre diciembre de 2026 y febrero de 2027, y en marzo puede quedarse a ritmo normal si le gusta. La mayoría de colegios termina sus clases antes de fin de año: en 2026 el último tramo lectivo sugerido por la RM 501-2025-MINEDU corre del 19 de octubre al 18 de diciembre, con margen para que cada región lo ajuste. Sobre 2027, en noviembre de 2026 el MINEDU aún no había dado a conocer su calendario.' },
        { kind: 'p', html: 'Si a su hijo le atraen más los juegos o las páginas web que la IA en sí, empiece por la guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>, que explica cómo se vive una clase con un niño de primaria. Para ver todas las edades y cursos que ofrecemos en el país, la página principal es <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'herramientas',
      eyebrow: 'Edades y herramientas',
      h2: '¿Qué herramientas de inteligencia artificial puede usar mi hijo según su edad?',
      lede: 'Las fijan las propias empresas en sus términos de uso, y varias no permiten menores de 13 o incluso de 18 años. Antes de enseñar IA a un niño hay que saberlas, porque un curso no debería pedirle que acepte términos que no le corresponden.',
      body: [
        { kind: 'table', numCols: [], caption: 'Edad mínima de algunas herramientas de IA según los términos de cada empresa', head: ['Herramienta', 'Edad mínima según sus términos', 'Cómo la tratamos en clase'], rows: [
          ['ChatGPT (OpenAI)', '13 años o la edad del país; menores de 18 solo con permiso de padre, madre o tutor', 'Solo con adolescentes y con permiso de la familia'],
          ['Claude (Anthropic)', '18 años o la edad local, la que sea mayor', 'No se usa con menores de 18'],
          ['Gemini (Google)', '13 años o la edad del país; no funciona con cuentas supervisadas por Family Link', 'No la pedimos a menores en clase'],
          ['Perplexity', '13 años; menores de edad solo si el padre o tutor acepta los términos antes', 'Solo adolescentes, con aceptación previa de la familia'],
          ['Canva, funciones de IA', '13 años; menores de 13 solo en Canva Education con supervisión docente', 'Adolescentes, para diseño'],
          ['Teachable Machine (Google)', 'Ninguna para la herramienta; una cuenta de Google solo si se quiere guardar', 'Desde los 6 años, sin crear cuenta']
        ] },
        { kind: 'source', html: 'Fuentes: términos de uso y páginas de ayuda de OpenAI, Anthropic, Google, Perplexity y Canva, leídos en la página de cada empresa y citados textualmente en nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> (revisión del 15 de julio de 2026). Por ejemplo, OpenAI escribe: "If you are under 18 you must have your parent or legal guardian\'s permission to use the Services", y Anthropic: "You must be at least 18 years old". Las empresas cambian sus términos: revise la versión vigente antes de abrir una cuenta. La tercera columna es nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dice la norma peruana',
          left: [
            'El Reglamento de la Ley de Protección de Datos Personales, aprobado por el Decreto Supremo N.° 016-2024-JUS y publicado en El Peruano el 30 de noviembre de 2024, dice en su artículo 25.3 que en los servicios digitales dirigidos a menores de catorce años el tratamiento de sus datos "es lícito siempre que se cuente con el consentimiento de aquel o aquellos que ejercen la patria potestad o tutela".',
            'Para los adolescentes de catorce a diecisiete años, el artículo 25.2 dice que el tratamiento es lícito "cuando se haya obtenido su consentimiento". Lo citamos como contexto, no como asesoría legal; ante una duda concreta, consulte a un abogado.'
          ],
          rightH3: 'Lo que hacemos nosotros',
          right: [
            'Con niños de 6 a 12 años no abrimos cuentas en chatbots. Trabajamos con herramientas que funcionan en el navegador sin registro y, sobre todo, con programas de IA que el propio niño escribe en Python, donde no hay ningún servicio externo de por medio.',
            'Con adolescentes de 13 a 17 años usamos herramientas generativas solo cuando sus términos lo permiten y la familia está de acuerdo. Claude, que exige 18 años, no entra en ninguna clase con menores. Nuestra guía completa de edades revisa más de cien herramientas.'
          ] }
      ]
    },
    {
      id: 'minedu-ia',
      eyebrow: 'IA y colegio',
      h2: '¿Se enseña inteligencia artificial en los colegios del Perú?',
      lede: 'No como curso. El Currículo Nacional de la Educación Básica no tiene un área de inteligencia artificial ni de programación; lo digital aparece como una competencia transversal. Donde el MINEDU sí está moviendo la IA es en la formación de docentes y en algunos programas puntuales.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que el MINEDU anunció sobre inteligencia artificial, según sus notas de prensa', head: ['Fecha de la nota', 'Qué anunció', 'Para quién'], rows: [
          ['9 de mayo de 2025', 'Más de 87,000 docentes inscritos en el curso virtual "Inteligencia artificial (IA) en la práctica docente"', 'Docentes de todo el país'],
          ['4 de agosto de 2025', 'Cuarta edición de la Hackathon del MINEDU, que premió proyectos de IA y robótica', 'Equipos de estudiantes, docentes y especialistas'],
          ['4 de diciembre de 2025', 'Uso de IA para planificar los aprendizajes desde el año siguiente en 205 colegios rurales', 'Unos 27,000 estudiantes de secundaria rural'],
          ['CNEB vigente', 'Competencia 28, "Se desenvuelve en entornos virtuales generados por las TIC", transversal a las áreas', 'Todos los estudiantes, sin horas propias']
        ] },
        { kind: 'source', html: 'Fuentes: notas de prensa del Ministerio de Educación en gob.pe del 9 de mayo de 2025, 4 de agosto de 2025 y 4 de diciembre de 2025; Currículo Nacional de la Educación Básica, competencias transversales. Consultadas en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'La lectura para una familia es sencilla: los docentes se están preparando en IA y el Estado la usa para planificar, pero un escolar peruano no tiene, en su horario, una hora dedicada a entender cómo funciona. La Hackathon del MINEDU muestra que hay estudiantes construyendo proyectos de IA; casi siempre son los que aprendieron por su cuenta. El verano es el momento más tranquilo para ese aprendizaje, sin competir con las tareas.' },
        { kind: 'p', html: 'Nuestras clases acompañan al colegio y no lo reemplazan. No otorgamos notas ni certificados del sistema educativo, y no tenemos relación con el MINEDU ni con sus programas. Al terminar un curso entregamos únicamente nuestro propio certificado de finalización.' }
      ]
    },
    {
      id: 'plan-ia',
      eyebrow: 'Por etapas',
      h2: '¿Qué hace un niño en cada etapa del verano de inteligencia artificial?',
      lede: 'A 4 o 5 clases por semana, la parte de IA de la ruta avanza en cinco etapas, cada una con su propio tipo de proyecto. Es una propuesta nuestra, no un programa oficial: el mentor la ajusta a su hijo en la clase gratis y la alarga o acorta según cuánto Python necesite antes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Inteligencia artificial por etapas y por edades, a ritmo de verano (plan propio de Modern Age Coders)', head: ['Etapa', 'Primaria baja (6 a 8)', 'Primaria alta (9 a 12)', 'Secundaria (13 a 17)'], rows: [
          ['1', 'Ordenar y agrupar: juegos de clasificar figuras y animales', 'Qué es un dato; tablas de ejemplos hechas por el niño', 'Python básico y listas de datos; qué es un modelo'],
          ['2', 'Enseñarle a la computadora: imágenes en Teachable Machine sin cuenta', 'Un clasificador escrito a mano en Python, como el de abajo', 'Distancias, vecinos más cercanos y medir aciertos'],
          ['3', 'Cuando la máquina se confunde: fotos parecidas, respuestas raras', 'Datos sesgados: qué pasa si faltan ejemplos de una clase', 'Una regresión sencilla con datos abiertos; error y ajuste'],
          ['4', 'Proyecto: un juego que reconoce gestos o dibujos', 'Proyecto: un modelo propio que clasifica algo de casa', 'Proyecto: un modelo con datos reales y un informe de sus límites'],
          ['Cierre', 'Mostrar el proyecto y decir en inglés qué aprendió la máquina', 'Explicar por qué el modelo falla en un caso', 'Presentar resultados, errores y siguientes pasos en inglés']
        ] },
        { kind: 'source', html: 'Propuesta nuestra para enero y febrero de 2027, con herramientas que respetan las edades de la tabla de edades y herramientas. A ritmo de verano cada etapa suele ocupar entre una semana y media y dos semanas; para un adolescente que empieza de cero, las etapas de IA llegan después de las primeras semanas de Python. El pago es mensual.' },
        { kind: 'two', mt: true,
          leftH3: 'Los más pequeños, sin pantallas de chat',
          left: [
            'Entre los 6 y los 8 años la IA se entiende jugando. Clasificar figuras por color y forma es exactamente lo que hace un modelo, y el niño lo descubre antes de tocar una herramienta.',
            'Teachable Machine entrena un modelo de imágenes en el propio navegador. Su hijo le muestra a la cámara una mano abierta y una cerrada, y en minutos la computadora las distingue. No hace falta crear ninguna cuenta.'
          ],
          rightH3: 'Los adolescentes, con datos de verdad',
          right: [
            'Desde los 13 años, con la matemática de secundaria, su hijo puede entender la idea de distancia entre dos puntos y usarla para clasificar. Es geometría del colegio convertida en inteligencia artificial.',
            'El proyecto final usa datos públicos y termina con un informe honesto: qué acierta el modelo, en qué falla y por qué.'
          ] }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo aprende una máquina? Una clase de IA en Python',
      lede: 'Así trabajamos en las semanas 3 y 4 con primaria alta. Tanto el ejercicio como los números son de nuestra autoría: inventamos el dulzor y la acidez de tres frutas peruanas, del 1 al 10, para que el programa aprenda a reconocerlas.',
      body: [
        { kind: 'code', label: 'Un clasificador de frutas escrito a mano', lang: 'Python', code: PY, note: 'Cada fruta de <code>entrenamiento</code> es un ejemplo con dos medidas y su nombre. Para adivinar, el programa busca el ejemplo más parecido: el de menor distancia.' },
        { kind: 'code', label: 'Resultado en pantalla', lang: 'Salida', code: OUT, note: 'Salida real de Python 3 en nuestra computadora, copiada sin cambios. La última fruta de prueba era un mango, pero el programa dijo maracuyá.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Los datos primero.</strong> El niño lee las seis frutas de entrenamiento en voz alta: "lucuma, sweetness 8, sourness 2". Entiende que la máquina no sabe nada de frutas; solo tiene estos números.',
          '<strong>La distancia.</strong> Para la prueba <code>(6, 6)</code>, calcula a mano la distancia al mango <code>(7, 6)</code>: 1 al cuadrado más 0 al cuadrado, es decir 1. Es la más pequeña, así que el programa dice mango.',
          '<strong>El error.</strong> Para <code>(5, 7)</code>, el ejemplo más cercano es una maracuyá <code>(4, 8)</code>, a distancia 2, y el mango más cercano está a 5. El modelo se equivoca y el programa lo reconoce: <code>Right: 3 / 4</code>.',
          '<strong>Más datos.</strong> El reto es agregar <code>(5, 6, \'mango\')</code> al entrenamiento. Al ejecutarlo otra vez, <code>(5, 7)</code> queda a distancia 1 de ese mango y el programa responde <code>Right: 4 / 4</code>.',
          '<strong>La pregunta de fondo.</strong> ¿El modelo ahora es inteligente, o solo tiene un ejemplo más? El mentor lo discute en inglés con el niño: así funciona, a gran escala, cualquier IA que aprende de datos.'
        ] },
        { kind: 'p', mt: true, html: 'Con este programa corto su hijo entiende algo que muchos adultos no: que una IA no piensa como una persona, que acierta por parecido y que sus errores dependen de los datos que le dieron. Cuando más adelante use un chatbot, sabrá por qué a veces inventa, y sabrá revisar en lugar de copiar. Ese hábito, pensar antes de confiar, es el centro de todas nuestras clases.' }
      ]
    },
    {
      id: 'opeia',
      eyebrow: 'Olimpiada de IA',
      h2: '¿Existe una olimpiada de inteligencia artificial para escolares en Perú?',
      lede: 'Sí. La Universidad de Ingeniería y Tecnología (UTEC) organiza la Olimpiada Peruana de Inteligencia Artificial (OPEIA), junto con la Olimpiada Peruana de Informática (OPI) y una de ciberseguridad.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que publica UTEC',
          left: [
            'En su página, UTEC describe estas olimpiadas como competencias "abiertas gratuitamente a todos los estudiantes de secundaria del país". Para la OPEIA 2026, las inscripciones fueron hasta el 18 de marzo de 2026 y la competencia se dio el 19 de marzo de 2026, en fecha única.',
            'La misma página presenta a los estudiantes de la delegación OPEIA 2025, seleccionados para representar al Perú en la IOAI, la olimpiada internacional de inteligencia artificial, en 2025.'
          ],
          rightH3: 'Qué significa para el verano',
          right: [
            'Las fechas de 2027 no estaban publicadas cuando escribimos. Si la próxima edición se parece a la de 2026, la inscripción llegaría poco después de las vacaciones; consulte siempre la página oficial de UTEC.',
            'Un dato útil: el reglamento de la OPI 2025 dice que "queda prohibido el uso de IA generativa" para resolver los problemas. En esta olimpiada de programación gana quien razona, no quien copia, y es lo mismo que pedimos en clase.'
          ] },
        { kind: 'p', mt: true, html: 'Nosotros no organizamos ni representamos a la OPEIA ni a la OPI, no tenemos relación con UTEC y no reproducimos sus problemas. Lo que sí hacemos es enseñar los fundamentos que una olimpiada de IA da por sabidos: Python, datos, modelos sencillos y la costumbre de medir cuánto acierta un modelo. Para un adolescente de secundaria que quiera intentarlo, un verano a 4 o 5 clases por semana es un comienzo serio.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora se dictan las clases de IA desde la India?',
      lede: 'A la hora que usted reserve. La India va diez horas y media adelante de Perú durante todo el año, porque ninguno de los dos países cambia la hora en verano.',
      body: [
        { kind: 'p', html: 'Unos ejemplos calculados por nosotros con los husos oficiales (Perú UTC-5, zona America/Lima; India UTC+5:30): una clase a las 8:00 a. m. en Lima se dicta a las 6:30 p. m. en la India; una a las 10:30 a. m. en Lima, a las 9:00 p. m. allá; y una a las 7:00 p. m. en Lima, a las 5:30 a. m. del día siguiente en la India. No son horarios de clase, solo conversiones: el día y la hora los decide usted.' },
        { kind: 'p', html: 'Para las clases de IA de los más pequeños sugerimos la mañana de verano, cuando el niño se concentra con facilidad. Los adolescentes que trabajan con datos y proyectos largos suelen preferir la tarde o la noche. Con el formato individual, el horario se puede mover de una semana a otra si la familia viaja.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si su hijo de verdad está entendiendo la IA?',
    lede: 'Cinco niveles propios que usamos para describir cuánto entiende un estudiante sobre inteligencia artificial, más allá de saber usarla.',
    table: { caption: 'Cinco niveles de comprensión de la IA (nuestros)', head: ['Nivel', 'Edad habitual', 'Su hijo puede decir'], rows: [
      ['1. Agrupar', '6 a 8 años', '"La máquina separa las cosas por cómo se parecen"'],
      ['2. Entrenar', '8 a 10 años', '"Le di ejemplos y aprendió; si le doy otros, cambia"'],
      ['3. Medir', '10 a 12 años', '"Acertó tres de cuatro, y sé cuál falló y por qué"'],
      ['4. Corregir', '12 a 14 años', '"Le faltaban datos de un tipo; agregué ejemplos y subieron los aciertos"'],
      ['5. Juzgar', '14 a 17 años', '"Este modelo sirve para esto, pero no para aquello, y aquí están sus límites"']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pregúntele a su hijo por qué se equivocó su modelo. Si sabe responder, entiende la IA de verdad, y no solo sabe mostrar lo que hace.',
      'Desconfíe de cualquier curso para niños que empiece pidiendo abrir cuentas en chatbots. La comprensión llega antes que la herramienta.'
    ] },
    right: { h3: 'Para los estudiantes', ps: [
      'Cuando una IA le responda algo, pregúntese de qué datos pudo haberlo sacado.',
      'Mida siempre: un modelo sin un número de aciertos es solo una opinión.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más alrededor de la inteligencia artificial',
    lede: 'Con mentor en vivo y en inglés, en grupo o en clases individuales, y todos con las edades mínimas de las herramientas en cuenta.',
    bands: [
      { num: 'I', h3: 'Pensar antes de la IA', sub: 'De 6 a 15 años', courses: [
        { code: 'VUI / BASE / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para los más pequeños', blurb: 'De 6 a 9 años: patrones, secuencias y acertijos, la base de toda clasificación.' },
        { code: 'VUI / BASE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Para primaria: dividir un problema y probar ideas, como hace un algoritmo.' },
        { code: 'VUI / BASE / 03', slug: 'maths-through-coding', title: 'Matemática programando', blurb: 'De 10 a 15 años: la matemática que usan los modelos, escrita en Python.' }
      ] },
      { num: 'II', h3: 'Herramientas con criterio', sub: 'Desde los 13 años', courses: [
        { code: 'VUI / USO / 01', slug: 'teens-ai-tools-mastery-course', title: 'Herramientas de IA para adolescentes', blurb: 'Desde los 13 años: instrucciones claras, verificación de respuestas y proyectos propios.' },
        { code: 'VUI / USO / 02', slug: 'canva-ai-design-masterclass', title: 'Diseño con Canva e IA', blurb: 'Desde los 13 años: diseño gráfico de verdad, con la IA como asistente y no como autora.' },
        { code: 'VUI / USO / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Ciberseguridad para adolescentes', blurb: 'De 13 a 18 años: proteger cuentas y datos, también frente a estafas hechas con IA.' }
      ] },
      { num: 'III', h3: 'Datos y modelos', sub: 'De 13 a 18 años', courses: [
        { code: 'VUI / DATOS / 01', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'De 14 a 18 años, con algo de Python: tablas, gráficos y primeros modelos.' },
        { code: 'VUI / DATOS / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Machine learning visual con Orange', blurb: 'Modelos armados con bloques visuales, para entender la idea antes que el código.' },
        { code: 'VUI / DATOS / 03', slug: 'python-complete-masterclass-teens', title: 'Python desde cero', blurb: 'De 13 a 18 años: el lenguaje en el que se escribe casi toda la IA actual.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases de IA en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para los más pequeños, cuando están más atentos.' },
      { time: 'Tarde o noche', l: 'Para adolescentes con proyectos de datos más largos.' },
      { time: 'A medida', l: 'Clases individuales que se mueven si la familia viaja.' }
    ],
    cells: [
      { h3: 'Un mentor estable', p: 'El mismo mentor durante todo el plan, que conoce cómo razona su hijo.' },
      { h3: 'Herramientas por edad', p: 'Nunca pedimos a un menor aceptar términos que no le corresponden.' },
      { h3: 'IA programada, no solo usada', p: 'Su hijo escribe sus propios modelos sencillos en Python.' },
      { h3: 'Errores a propósito', p: 'Cada proyecto incluye buscar dónde falla el modelo.' },
      { h3: 'Ritmo de verano', p: 'De 4 a 5 sesiones por semana, acordadas con el mentor antes de empezar.' },
      { h3: 'En grupo o a solas', p: 'Grupos de quince a veinte de edades cercanas, o uno a uno.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Algunos trabajos de estudiantes mayores, varios con inteligencia artificial, para que vea hacia dónde lleva este camino. Más ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Opiniones publicadas en Google por familias y estudiantes, en su idioma original, el inglés.',

  fees: {
    h2: 'Cuánto cuesta un verano de IA en Perú',
    lede: 'Lo que ve en las tarjetas es la tarifa mensual estándar, pensada para ocho clases al mes, en dólares estadounidenses y con pago por tarjeta; el banco que la emite convierte el cargo al tipo de cambio de ese día. Como en verano la ruta va a 4 o 5 clases por semana, esa tarifa de verano se acuerda con el mentor antes de la primera sesión, sin sorpresas después. Probar la primera clase es gratis.',
    free: ['Primera clase sin costo', 'El mentor recomienda en qué curso de la ruta empezar', 'Sin datos de pago'],
    group: ['Quince a veinte estudiantes de edades cercanas', 'Ocho clases al mes fuera del verano', 'De 4 a 5 por semana en verano, con tarifa acordada', 'Se paga mes a mes, sin permanencia'],
    one: ['Su hijo y el mentor, solos', 'Proyecto de IA elegido por su hijo', 'Horario que se adapta a viajes']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles 2027 de inteligencia artificial: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: cada clase es en inglés, en vivo y por internet, sin excepción. Lejos de ser un obstáculo, muchas familias lo eligen por eso, porque el verano rinde doble: entender la IA y soltarse a conversar en otro idioma con alguien que espera su respuesta. El mentor va despacio y se adapta. Según el EF EPI 2025, Lima está en el nivel alto de inglés, y una conversación semanal en vivo es lo que más lo fortalece.' },
      { q: '¿Desde qué edad puede un niño aprender inteligencia artificial?', a: 'Desde los 6 años, con juegos de clasificar y herramientas como Teachable Machine que funcionan en el navegador sin crear cuenta. Desde los 9 o 10 años puede programar un clasificador sencillo en Python, y desde los 13 trabajar con datos reales.' },
      { q: '¿Mi hijo va a usar ChatGPT en las clases?', a: 'Solo si es adolescente y la familia lo autoriza. Los términos de OpenAI piden al menos 13 años y, para menores de 18, el permiso de padre, madre o tutor. Con niños de 6 a 12 años no usamos chatbots: la IA se aprende programándola.' },
      { q: '¿Y Claude o Gemini?', a: 'Claude exige 18 años en sus términos, así que no lo usamos con ningún menor. Gemini pide 13 años o la edad del país y no funciona con cuentas supervisadas por Family Link; no se lo pedimos a menores en clase.' },
      { q: '¿Cuántas clases por semana tiene la ruta de verano Python e IA?', a: 'De 4 a 5 clases en vivo por semana, el doble o más de las dos semanales del año escolar. El número exacto se elige con el mentor antes de empezar; los días y la hora los decide la familia.' },
      { q: '¿Cuándo empieza el verano de IA?', a: 'Cuando usted lo decida. No hay una fecha de inicio común ni un taller con cupos: después de la clase de prueba, las sesiones arrancan apenas usted confirme, sea a fines de 2026 o en pleno verano de 2027.' },
      { q: '¿Mi hijo termina un curso de IA en el verano?', a: 'Los cortos, sí: Entender la IA, Orange y ciencia de datos caben en diez semanas a ritmo intensivo. Los largos, como Python para adolescentes o IA y aprendizaje automático, llegan más o menos a la mitad (Python con proyectos de IA, algo más), y la otra mitad puede completarse durante el año escolar.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 8:00 a. m. de Lima equivalen a las 6:30 p. m. en la India.' },
      { q: '¿Necesita saber programar antes?', a: 'No. Los más pequeños no escriben código, y la ruta de 9 a 12 años empieza con lo básico de Python. Los adolescentes que nunca programaron arrancan por Python antes de los modelos.' },
      { q: '¿Las clases preparan para la OPEIA?', a: 'Enseñamos los fundamentos que una olimpiada de IA supone: Python, datos y modelos sencillos. No tenemos relación con UTEC, no reproducimos sus problemas y no prometemos resultados; las bases y fechas oficiales están en la página de la olimpiada.' },
      { q: '¿Cuánto cuesta el verano de IA y cómo se paga?', a: 'La página muestra la tarifa mensual estándar de ocho clases, en dólares estadounidenses y con tarjeta; su banco hace la conversión. La tarifa del ritmo de verano, de 4 a 5 clases por semana, se acuerda con el mentor antes de la primera clase de verano. La clase de prueba no tiene costo.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Lecturas que ayudan a elegir con criterio, algunas en inglés.',
    items: [
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Más de cien herramientas de IA con la edad mínima que exige cada empresa.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Nuestro enfoque de la inteligencia artificial para primaria.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Proyectos de IA que un niño puede hacer sin abrir cuentas.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos en Perú, por edades.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para familias de colegios bilingües en Lima.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase en vivo con nosotros.' }
    ]
  },

  start: {
    h2: 'Empiece la ruta Python e IA con una clase gratis',
    lede: 'En la clase de prueba el mentor conversa con su hijo sobre lo que ya sabe de inteligencia artificial y le propone un pequeño reto de clasificar. Según cómo lo resuelve, le recomienda por qué curso de la ruta empezar y acuerda con usted el ritmo de 4 o 5 clases semanales y su tarifa. Sin compromiso.',
    readFirst: 'Si quiere informarse antes, la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> reúne las edades de cada herramienta y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestras clases (ambas páginas están en inglés).',
    note: 'Todas las clases son en vivo, en línea y en inglés, con mentores en la India. Si tiene preguntas, escríbanos por WhatsApp, también en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de IA', links: [
        { href: '/courses/ai-literacy-for-kids-course', label: 'Entender la IA' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA, primaria' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'IA para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Un modelo sin aciertos medidos es solo una opinión'
  },

  personalityCss: `
.ag-root.ag-vui .ag-hero h1 { letter-spacing: -0.008em; max-width: 20ch; }
.ag-root.ag-vui .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-vui .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-vui .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-vui .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'Vendor terms of OpenAI, Anthropic, Google (Gemini, Accounts), Perplexity and Canva, quoted in content/ai-tool-age-audit.json (audited 15 July 2026); DS 016-2024-JUS arts. 25.2 and 25.3 (El Peruano, 30 November 2024); MINEDU press notes of 9 May 2025, 4 August 2025 and 4 December 2025; CNEB competency 28; UTEC OPI/OPEIA page and Reglamento OPI 2025; RM 501-2025-MINEDU Tabla 1; tzdata; course durations from our course pages. The summer route, the coverage arithmetic, the AI stages, the comprehension levels, the fruit data and the Python example are our own.',
    localProject: 'A one-nearest-neighbour classifier written by hand in Python for children of 9 to 12: six invented training examples of Peruvian fruits (lúcuma, maracuyá, mango) with sweetness and sourness from 1 to 10, squared distance, the closest example wins; run with python3 -I it scores Right: 3 / 4 because (5, 7) is called maracuya, and adding (5, 6, \'mango\') to the training data gives Right: 4 / 4. Lesson family: training data, distance, a wrong guess and more data.',
    requiredMentions: ['Right: 3 / 4', 'Right: 4 / 4', '(5, 7) guess: maracuya distance: 2 real: mango', 'Cuánto de cada curso de IA cubre un verano de 40 a 50 clases', 'artículo 25.3', 'Más de 87,000 docentes inscritos', '205 colegios rurales', 'la competencia se dio el 19 de marzo de 2026', 'queda prohibido el uso de IA generativa', 'Un modelo sin aciertos medidos es solo una opinión'],
    sources: [
      { claim: 'ChatGPT: 13+, parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude: 18+ or the local consent age, whichever is higher.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Gemini: 13+ or the country age; not with Family Link accounts.', url: 'https://support.google.com/gemini/' },
      { claim: 'Perplexity: 13+, guardian accepts the terms before a minor uses it.', url: 'https://www.perplexity.ai/hub/legal/terms-of-service' },
      { claim: 'Canva AI: 13+, under-13 only in Canva Education with teacher supervision.', url: 'https://www.canva.com/policies/ai-safety/' },
      { claim: 'Google Account minimum age 13 in most countries (Teachable Machine needs an account only to save).', url: 'https://support.google.com/accounts/' },
      { claim: 'DS 016-2024-JUS: consent of parents for digital services aimed at under-14s (25.3), own consent 14 to 17 (25.2).', url: 'https://cdn.www.gob.pe/uploads/document/file/7568330/6426760-decreto-supremo-n-016-2024-jus-reglamento-de-la-ley-n-29733-ley-de-proteccion-de-datos-personales-publicado-nov-2024.pdf' },
      { claim: 'More than 87,000 teachers enrolled in the MINEDU AI course (9 May 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'AI for learning planning in 205 rural schools, about 27,000 students (4 December 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: 'MINEDU Hackathon 2025, fourth edition, AI and robotics projects (4 August 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'OPEIA 2026: registration to 18 March 2026, competition 19 March 2026; free for secondary students; 2025 delegation to the IOAI.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025 rules ban generative AI for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'Fourth teaching block of 2026 from 19 October to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Course durations: AI literacy 4 months; Python and AI for Kids 8-10 months; Python for Teens 10-12 months; Orange 24 classes; Data Science for Teens 6 months; AI and ML for Teens 10-12 months.', url: 'https://learn.modernagecoders.com/courses/ai-ml-masterclass-teens' }
    ],
    rejectedClaims: [
      'Recommending Claude, Gemini or any 18+ or Family-Link-blocked tool to under-18s: refused; the table states each vendor floor and the page says we do not ask minors to use them.',
      'Legal advice on DS 016-2024-JUS: refused; the articles are quoted as context and the page says to consult a lawyer.',
      'A typed summer price or a camp with fixed dates: refused; the owner\'s offer (2026-11-10) is 4 to 5 classes a week with the summer fee agreed with the mentor, and the template shows only the standard eight-class monthly fee.',
      'Finishing a 10 to 12 month AI course in one summer: refused; the coverage table says about half, continuing in March.',
      'Any connection with UTEC, OPEIA, OPI or MINEDU, or an admission or medal promise: none; the page says so.',
      'OPEIA 2027 dates: not printed; not published when the page was written.',
      'Real nutritional data for the fruits: not claimed; the sweetness and sourness numbers are invented for the lesson and labelled ours.'
    ]
  }
};

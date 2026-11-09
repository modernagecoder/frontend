// SHIP: market | IA para adolescentes de secundaria en Perú: construirla, no solo usarla, con reglas de edad | a perceptron trained by hand: weights, mistakes per epoch, and a confident wrong guess
'use strict';
// Curso de IA para adolescentes (ag- Spanish-language door, Peru cluster row PE098, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout (the page speaks to parents and to the teenager as usted). Fees render in USD from the template only.
// Angle: the parent or the 13 to 17 year old who types "ia para adolescentes", "curso de ia para adolescentes" or "programación
// python para adolescentes" (KEYWORDS.md: over 12 Peruvians write "adolescentes" or the grade, never "de 14 años").
// Spine: the difference between a teen who uses AI and one who builds it; what secundaria gives (weekly hours under JER and JEC,
// no computing area, Fábrica de Programadores); what each AI tool allows at 13 to 17 and what Peru's data rule says from 14;
// one original Python lesson (a perceptron that learns two weights, then makes a confident wrong guess); UTEC's OPEIA and OPI,
// where generative AI is banned; MINEDU Hackathon 2025.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-ia-para-adolescentes-peru/;
// FACTS = facts-school/FACTS.md, MARKET/LEGAL = facts-market/):
//  CNEB plan de estudios, secundaria (FACTS 39 to 42): JER "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3",
//    "Educación para el trabajo 2 2 2 2 2", 35 hours a week; JEC "Matemática 6 6 6 6 6 Comunicación 5 5 5 5 5 Inglés 5 5 5 5 5",
//    "Educación para el trabajo 3 3 3 3 3 ... Total de horas 45 45 45 45 45"; no separate computing area in either table.
//  MINEDU normative ages (FACTS 14): 1° secundaria = 12 ... 5° secundaria = 16 (at 31 March).
//  MINEDU press note, Fábrica de Programadores (FACTS 45 to 47): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima
//    Norte con formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global".
//  INEI TIC bulletin, II Trimestre 2026 (inei_tic_iit2026.txt): "el de 12 a 18 años con un 92,5%".
//  DS 016-2024-JUS arts. 25.2 and 25.3 (LEGAL 4): "25.2 En el marco de la oferta de servicios digitales para mayores de catorce y
//    menores de dieciocho años, el tratamiento de datos personales es lícito cuando se haya obtenido su consentimiento."
//  Vendor terms via content/ai-tool-age-audit.json (audited 2026-07-15): OpenAI 13 and parent permission under 18; Anthropic 18;
//    Gemini 13 or the country age, not with Family Link; Microsoft Copilot "You must be at least 13 years old to use Copilot, and in
//    some countries, the minimum age may be higher"; Perplexity 13 with the guardian accepting; GitHub Copilot 13; Notion AI 14.
//  UTEC, opi.utec.edu.pe and Reglamento OPI 2025 (FACTS 111 to 118): free for all secundaria students; OPEIA 2026 registration to
//    18 March 2026, competition 19 March 2026; 2025 delegation to the IOAI; OPI Fase 2 "Se podrá usar solo C++"; "Queda prohibido
//    el uso de IA generativa para la resolución de problemas".
//  MINEDU press note 4 August 2025 (FACTS 48, 49): Hackathon 2025 "proyectos de IA y robótica"; women students up 28% 2023 to 2025.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (perceptron.py in the src-pages folder; the data are invented by us):
//    epoch 1 mistakes 3 weights (-3, -6, -1) / epoch 2 mistakes 2 weights (0, -8, -1) / epoch 3 mistakes 2 weights (3, -10, -1) /
//    epoch 4 mistakes 0 weights (3, -10, -1) / (8, 2) -> 1 / (5, 1) -> 1
// Lesson family: a perceptron: weighted sum, threshold, update only on a mistake, epochs until zero mistakes, and a new point the
// model classifies with confidence although it never saw anything like it.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# (ejercicios practicados, pistas pedidas) -> 1 si resolvió el reto final sin ayuda',
  'datos = [((8, 1), 1), ((9, 0), 1), ((7, 1), 1), ((5, 3), 0), ((6, 4), 0), ((4, 2), 0)]',
  '',
  'w1, w2, b = 0, 0, 0',
  'for epoca in range(1, 11):',
  '    errores = 0',
  '    for (practica, pistas), real in datos:',
  '        prediccion = 1 if w1 * practica + w2 * pistas + b > 0 else 0',
  '        cambio = real - prediccion',
  '        if cambio != 0:',
  '            errores += 1',
  '            w1 += cambio * practica',
  '            w2 += cambio * pistas',
  '            b += cambio',
  "    print('epoch', epoca, 'mistakes', errores, 'weights', (w1, w2, b))",
  '    if errores == 0:',
  '        break',
  '',
  'for practica, pistas in [(8, 2), (5, 1)]:',
  "    print((practica, pistas), '->', 1 if w1 * practica + w2 * pistas + b > 0 else 0)"
].join('\n');

const OUT = [
  'epoch 1 mistakes 3 weights (-3, -6, -1)',
  'epoch 2 mistakes 2 weights (0, -8, -1)',
  'epoch 3 mistakes 2 weights (3, -10, -1)',
  'epoch 4 mistakes 0 weights (3, -10, -1)',
  '(8, 2) -> 1',
  '(5, 1) -> 1'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Curso de IA para adolescentes' },
  slug: 'curso-de-ia-para-adolescentes-peru',
  code: 'iaa',
  accent: '#147175',
  accentRationale: 'Curso de IA para adolescentes: a bright deep teal #147175, livelier than the darker teals of the children\'s and adult AI pages, for a teenage audience; contrast 4.67 on the paper #FBF8F2 (alloc.tsv) and at least 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de IA para adolescentes',
  title: 'Curso de IA para adolescentes en Perú, en vivo y en inglés',
  description: 'Curso de IA para adolescentes de secundaria en Perú: Python, modelos propios y herramientas permitidas a su edad. Clases en vivo y en inglés, grupales o 1 a 1.',
  ogDescription: 'Para escolares de 1° a 5° de secundaria: qué da el colegio, qué herramientas de IA permite cada empresa a los 13, 14 o 17 años, la OPEIA de UTEC y un perceptrón en Python hecho por nosotros.',
  twitterDescription: 'IA para adolescentes de 13 a 17 años en Perú: construir modelos, no solo usarlos. En vivo, en inglés, en grupo o individual, a cualquier hora.',
  pageName: 'Curso de IA para adolescentes en Perú',
  webPageDescription: 'Guía para adolescentes de secundaria en Perú y sus familias: la diferencia entre usar y construir inteligencia artificial, cuántas horas de cada área da el colegio y por qué no hay una de computación, qué herramientas de IA permite cada empresa entre los 13 y los 17 años, qué dice la norma peruana de datos desde los 14, la OPEIA y la OPI de UTEC y un perceptrón en Python escrito por nosotros.',
  courseDescription: 'Curso en vivo y en línea de inteligencia artificial para adolescentes de 13 a 17 años en todo el Perú, dictado solo en inglés por mentores desde la India: Python, datos, modelos que el estudiante entrena y evalúa, y uso crítico de herramientas generativas permitidas a su edad, en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IA para adolescentes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#usar-o-construir', label: 'Usar o construir' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#edades', label: 'Edades y reglas' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#olimpiadas', label: 'Olimpiadas' }
  ],
  eyebrow: 'Perú &middot; IA &middot; Adolescentes de 1° a 5° de secundaria',
  h1: 'Curso de IA para adolescentes, en vivo y en inglés',
  lede: 'A los catorce años casi todos los escolares ya le han pedido algo a un chatbot. Muy pocos han construido un modelo, por pequeño que sea. Ese es el salto que proponemos: pasar de pedirle respuestas a la IA a entender cómo las produce, con Python, con la matemática del colegio y con reglas claras sobre qué herramientas permite cada edad.',
  secondaryCta: { href: '#edades', label: 'Ver las reglas por edad' },
  wa: 'Hola Modern Age Coders, buscamos un curso de inteligencia artificial en inglés para un adolescente de secundaria en Perú. ¿Podemos agendar una clase de prueba gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; IA construida por el estudiante',
  spec: [
    ['Edades', 'De 13 a 17 años, de 1° a 5° de secundaria'],
    ['Base', 'Python desde cero y la matemática del colegio'],
    ['Herramientas', 'Solo las que su edad permite, con aviso a la familia'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Idioma', 'Inglés, con mentor en directo desde la India'],
    ['Prueba', 'Primera clase sin costo']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Para escolares peruanos de 13 a 17 años, de 1° a 5° de secundaria, Modern Age Coders dicta un curso de IA en vivo, por internet y en inglés, con mentores que enseñan desde la India. El estudiante aprende Python, trabaja con datos y entrena sus propios modelos, desde un perceptrón hasta una red neuronal pequeña, y usa herramientas generativas solo cuando su edad y su familia lo permiten. Hay clases grupales e individuales, cualquier día y a la hora que la familia elija.',

  picks: {
    eyebrow: 'Cursos para secundaria',
    h2: 'Tres cursos de IA para adolescentes',
    lede: 'Primero el lenguaje, luego los modelos y, en paralelo, el uso responsable de las herramientas que ya están en su celular.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'IAA / 01', title: 'Python desde la primera línea', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 13 a 18 años, sin experiencia. El lenguaje en que está escrita casi toda la IA, aprendido con problemas reales y no con ejercicios de memoria.' },
      { course: 'ai-ml-masterclass-teens', code: 'IAA / 02', title: 'Modelos de IA hechos por el estudiante', alt: 'Imagen del curso de inteligencia artificial y machine learning para adolescentes', note: 'De 13 a 18 años; basta la matemática de secundaria. Perceptrones, regresión, clasificadores y una red neuronal pequeña, entrenados y evaluados por el propio estudiante.' },
      { course: 'teens-ai-tools-mastery-course', code: 'IAA / 03', title: 'Herramientas de IA con reglas', alt: 'Imagen del curso de herramientas de inteligencia artificial para adolescentes', note: 'De 13 a 18 años. Solo herramientas que admiten su edad, con las cuentas abiertas junto a la familia cuando la empresa lo exige, y siempre verificando lo que responden.' }
    ]
  },

  sections: [
    {
      id: 'usar-o-construir',
      eyebrow: 'Usar o construir',
      h2: '¿Qué aprende un adolescente en un curso de inteligencia artificial?',
      lede: 'A construir, además de usar. Usar la IA se aprende solo y rápido; construirla exige programar, entender datos y aceptar que el modelo se equivoca. Lo segundo es lo que forma criterio, y lo que vale en la universidad.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Programar', p: 'Python desde cero: variables, listas, funciones y lectura de datos. En pocas semanas el estudiante escribe programas que procesan información real, sin copiar código que no entiende.' },
          { h3: 'Entrenar', p: 'Un modelo es una suma con pesos. Entrenarlo es ajustar esos pesos cada vez que se equivoca. Con la geometría de secundaria, rectas y planos, el estudiante ve por qué funciona.' },
          { h3: 'Desconfiar con método', p: 'Medir aciertos con datos que el modelo no vio, buscar el caso en que falla y explicar por qué. La misma actitud sirve para revisar lo que dice un chatbot antes de usarlo en una tarea.' }
        ] },
        { kind: 'p', mt: true, html: 'Somos estrictos con una cosa: la IA no hace las tareas del colegio por el estudiante. En clase, cuando un adolescente usa una herramienta generativa, tiene que poder explicar cada línea de lo que entrega. Aprender a pensar, no a copiar, es la regla de todas nuestras clases, y en IA pesa todavía más.' },
        { kind: 'p', html: 'Para hermanos menores, el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-inteligencia-artificial">vacaciones útiles 2027 de inteligencia artificial</a> propone un verano de IA por edades, y las <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> combinan programación con práctica del idioma.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Secundaria',
      h2: '¿Se enseña inteligencia artificial o programación en la secundaria peruana?',
      lede: 'No como área propia. El plan de estudios de secundaria no tiene un curso de computación ni de IA, ni en la jornada regular ni en la completa. Lo más cercano es Educación para el Trabajo, que se centra en proyectos de emprendimiento.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Horas semanales por área en secundaria, de 1° a 5° grado, según el tipo de jornada', head: ['Área del plan de estudios', 'Colegios con jornada completa (JEC)', 'Colegios con jornada regular (JER)'], rows: [
          ['Inglés', '5', '3'],
          ['Matemática', '6', '4'],
          ['Educación para el Trabajo', '3', '2'],
          ['Comunicación', '5', '4'],
          ['Computación o inteligencia artificial', 'No existe como área', 'No existe como área'],
          ['Total de horas por semana', '45', '35']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, CNEB, planes de estudio de secundaria para la Jornada Escolar Regular y la Jornada Escolar Completa; las horas son iguales en los cinco grados. Edades normativas del MINEDU: 1° de secundaria corresponde a los 12 años y 5° a los 16, con la edad cumplida al 31 de marzo. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'El MINEDU sí ha probado programación fuera del horario regular. En julio de 2025 lanzó la estrategia Fábrica de Programadores, que según su nota de prensa "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte" con clases de Python y una certificación internacional; al completar el programa, los participantes pueden presentarse al examen PCEP. Es un piloto que el ministerio quiere replicar en todo el país.' },
        { kind: 'p', html: 'Que el Estado haya elegido Python y la certificación PCEP para escolares de 4° y 5° dice mucho: es el punto de partida razonable para un adolescente que quiere llegar a la IA. Nosotros no participamos en ese programa ni tenemos relación con el MINEDU; tenemos, eso sí, un curso de preparación para PCEP que encaja con la misma ruta.' }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Reglas por edad',
      h2: '¿Qué herramientas de IA puede usar un adolescente de 13 a 17 años?',
      lede: 'Más que un niño y menos que un adulto. Casi todas las empresas abren la puerta a los 13 años, varias piden la intervención de los padres hasta los 18 y algunas no admiten menores en ningún caso.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que exige cada empresa a un usuario adolescente, según sus términos', head: ['Herramienta', 'Regla de la empresa', 'Uso en nuestras clases de secundaria'], rows: [
          ['ChatGPT', 'Desde los 13; los menores de 18 necesitan autorización de un adulto responsable', 'Solo si la familia lo autoriza por escrito'],
          ['Microsoft Copilot', 'Desde los 13; en algunos países la edad es mayor', 'Con permiso de la familia'],
          ['GitHub Copilot', 'Desde los 13', 'Para revisar código ya entendido, nunca para escribirlo por el estudiante'],
          ['Perplexity', 'Desde los 13; los términos los acepta un adulto en nombre del menor', 'Cuando la familia ya aceptó'],
          ['Notion AI', 'Desde los 14', 'Desde 3° de secundaria, si la familia está de acuerdo'],
          ['Claude', 'Solo mayores de 18', 'No se usa con ningún estudiante menor de edad']
        ] },
        { kind: 'source', html: 'Fuente: términos de uso de cada empresa, leídos en su propio sitio y reproducidos al pie de la letra en la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> (auditoría del 15 de julio de 2026). Microsoft escribe: "You must be at least 13 years old to use Copilot, and in some countries, the minimum age may be higher". La tercera columna es nuestra política. Las condiciones cambian: verifique la versión vigente.' },
        { kind: 'two', mt: true,
          leftH3: 'La regla peruana desde los 14 años',
          left: [
            'El DS 016-2024-JUS, que reglamenta la ley peruana de datos personales, separa a los menores en dos tramos. Para los servicios digitales destinados a menores de catorce años hace falta el consentimiento de los padres (artículo 25.3). Entre los catorce y los diecisiete, el artículo 25.2 considera lícito el tratamiento "cuando se haya obtenido su consentimiento", el del propio adolescente.',
            'Es información de contexto y no un consejo legal. Para una situación concreta, lo indicado es consultar con un abogado.'
          ],
          rightH3: 'Nuestra política, más estricta',
          right: [
            'Aunque un estudiante de 15 años pueda consentir por sí mismo ante la ley de datos, antes de usar cualquier herramienta externa avisamos a la familia y respetamos su decisión.',
            'En el curso, la mayor parte del trabajo con IA no necesita cuentas externas: los modelos los escribe el propio estudiante en Python, en su computadora.'
          ] },
        { kind: 'p', mt: true, html: 'Los adolescentes peruanos ya están conectados: según el INEI, el 92,5% de los jóvenes de 12 a 18 años usó internet en el segundo trimestre de 2026. La pregunta ya no es si usarán IA, sino si sabrán qué hay detrás de lo que usan.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Clase de muestra',
      h2: '¿Cómo se programa una neurona artificial? Un perceptrón en Python',
      lede: 'El perceptrón es el antepasado de las redes neuronales actuales y cabe en veinte líneas. Los datos son inventados por nosotros: seis estudiantes, cuántos ejercicios practicaron, cuántas pistas pidieron y si resolvieron solos el reto final.',
      body: [
        { kind: 'code', label: 'Un perceptrón entrenado a mano', lang: 'Python', code: PY, note: 'La neurona multiplica cada dato por un peso, suma y compara con cero. Si se equivoca, corrige los pesos en la dirección del error. Cada pasada completa por los datos es una época.' },
        { kind: 'code', label: 'Salida en pantalla', lang: 'Salida', code: OUT, note: 'Resultado real de Python 3 en nuestra máquina, sin editar. En la cuarta época ya no comete errores con los datos de entrenamiento.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Empezar en cero.</strong> Con los tres pesos en cero, la suma siempre es cero y la neurona responde 0. El primer estudiante sí resolvió el reto, así que hay error: los pesos suben a <code>(8, 1, 1)</code>.',
          '<strong>Corregir solo al fallar.</strong> El perceptrón no cambia nada cuando acierta. En la primera época falla tres veces y termina con <code>(-3, -6, -1)</code>: por ahora cree que practicar es malo.',
          '<strong>Converger.</strong> En la época 3 llega a <code>(3, -10, -1)</code> y en la 4 no comete ningún error. Leído en lenguaje humano: cada ejercicio practicado suma 3 y cada pista pedida resta 10.',
          '<strong>Una predicción razonable.</strong> Para 8 ejercicios y 2 pistas, la suma es 24 menos 20 menos 1, es decir 3, positiva: la neurona dice que lo resolverá solo.',
          '<strong>Una predicción sospechosa.</strong> Para 5 ejercicios y 1 pista dice que también. Pero en los datos nadie con tan poca práctica lo logró. El modelo nunca vio ese caso y responde con la misma seguridad. Discutimos en inglés: ¿le creería usted?'
        ] },
        { kind: 'p', mt: true, html: 'Con este ejercicio un adolescente entiende la geometría escondida en la IA: los pesos finales describen una recta que separa a quienes lo lograron de quienes no. También entiende su límite. Un modelo puede acertar todos sus ejemplos y aun así equivocarse con confianza fuera de ellos. Ningún chatbot avisa cuándo está fuera de sus datos; por eso hay que aprender a preguntarlo.' }
      ]
    },
    {
      id: 'olimpiadas',
      eyebrow: 'Olimpiadas',
      h2: '¿Hay olimpiadas de inteligencia artificial y de programación para escolares en Perú?',
      lede: 'Sí, y ambas son gratuitas. La OPI, de informática, y la OPEIA, de inteligencia artificial, las organiza UTEC, una universidad privada de Lima, y cualquier escolar de secundaria del Perú puede inscribirse.',
      body: [
        { kind: 'table', numCols: [], caption: 'Olimpiadas de computación de UTEC para secundaria, según su página y su reglamento', head: ['Olimpiada', 'Qué publica UTEC', 'Dato útil para preparar'], rows: [
          ['OPEIA (inteligencia artificial)', 'Edición 2026: inscripción abierta hasta el 18 de marzo y prueba única el 19 de marzo de 2026', 'Los seleccionados en 2025 viajaron como delegación peruana a la IOAI'],
          ['OPI (informática)', 'Edición 2026: inscripción también hasta el 18 de marzo; final presencial el 11 de abril de 2026', 'En la fase final presencial "se podrá usar solo C++"'],
          ['Una regla de la OPI', 'Reglamento 2025, sobre las herramientas permitidas', 'Prohíbe resolver los problemas con IA generativa']
        ] },
        { kind: 'source', html: 'Fuentes: página de las Olimpiadas Peruanas de Computación de UTEC (opi.utec.edu.pe) y Reglamento OPI 2025, consultados en noviembre de 2026. Al cierre de esta página, UTEC aún no anunciaba el calendario de 2027.' },
        { kind: 'p', mt: true, html: 'Que la OPI prohíba la IA generativa es una buena lección para cualquier adolescente: en una competencia de verdad, gana quien sabe razonar y programar sin ayuda. Por eso en nuestras clases el estudiante resuelve primero solo y usa la IA, si acaso, para revisar después. Aclaramos que Modern Age Coders es ajena a UTEC y a sus olimpiadas: no copiamos sus enunciados y practicamos con problemas escritos por nosotros.' },
        { kind: 'p', html: 'También el MINEDU premia proyectos de IA. En la cuarta edición de su Hackathon, en 2025, distinguió a equipos escolares y docentes que presentaron inteligencia artificial y robótica aplicadas, e informó que la participación de estudiantes mujeres creció 28% entre 2023 y 2025. Para todo lo que ofrecemos a escolares y adultos en el país, visite <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora puede un escolar tomar clases de IA con un mentor en la India?',
      lede: 'A la que encaje con el colegio. En la India el reloj marca diez horas y media más que en Lima, sin cambios en ningún mes.',
      body: [
        { kind: 'p', html: 'Unas conversiones hechas por nosotros con la hora oficial de cada país (Perú UTC-5, India UTC+5:30): las 4:00 p. m. en Lima, al volver del colegio, son las 2:30 a. m. en la India; las 7:30 p. m. limeñas son las 6:00 a. m. del día siguiente allá; y las 10:00 a. m. de un domingo en Lima son las 8:30 p. m. en la India. Solo son conversiones: la familia escoge cuándo.' },
        { kind: 'p', html: 'En época de exámenes bimestrales o de la academia preuniversitaria, las clases individuales pueden espaciarse y retomarse después. Muchos adolescentes de 5° de secundaria prefieren el fin de semana para no cruzarse con las tareas.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo avanza un adolescente en inteligencia artificial?',
    lede: 'Cinco escalones que usamos para conversar con el estudiante y su familia sobre su avance. Son nuestros, no una escala del colegio.',
    table: { caption: 'Cinco escalones de IA en secundaria (nuestros)', head: ['Escalón', 'Grado habitual', 'El estudiante ya puede'], rows: [
      ['1. Programa', '1° y 2°', 'Escribir en Python un programa que lee datos y calcula'],
      ['2. Entrena', '2° y 3°', 'Entrenar un perceptrón y explicar qué significan sus pesos'],
      ['3. Evalúa', '3° y 4°', 'Separar datos de prueba y medir aciertos honestamente'],
      ['4. Compara', '4° y 5°', 'Comparar dos modelos y justificar cuál conviene'],
      ['5. Presenta', '5°', 'Exponer en inglés un proyecto propio, sus resultados y sus límites']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pídale a su hijo que le muestre un caso en que su modelo se equivoca. Si lo encuentra solo, va por buen camino.',
      'Pregunte qué herramientas usa y con qué cuenta. Una familia informada es parte de nuestra política.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Resuelva primero sin IA. Después, si la usa, explique cada línea que le dio.',
      'Un modelo que acierta todo en entrenamiento todavía no demostró nada.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para adolescentes',
    lede: 'En directo y en inglés, en grupo o individual, todos pensados para edades de 13 a 18 años.',
    bands: [
      { num: 'I', h3: 'Datos y algoritmos', sub: 'Para quien ya programa un poco', courses: [
        { code: 'IAA / DATOS / 01', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Para quien ya sabe algo de Python, de 14 años en adelante: limpiar, graficar y modelar datos.' },
        { code: 'IAA / DATOS / 02', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Machine learning con bloques', blurb: 'Árboles de decisión y clasificadores armados en Orange, antes de escribir código.' },
        { code: 'IAA / DATOS / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos y estructuras de datos', blurb: 'La base para competir en programación y para la universidad.' }
      ] },
      { num: 'II', h3: 'Crear con IA', sub: 'Desde los 13 años', courses: [
        { code: 'IAA / CREAR / 01', slug: 'ai-agents-with-microsoft-copilot-studio-course-for-teens', title: 'Agentes de IA con Copilot Studio', blurb: 'Solo individual: agentes reales, con un padre o tutor que acepta los términos de Microsoft.' },
        { code: 'IAA / CREAR / 02', slug: 'canva-ai-design-masterclass', title: 'Diseño con Canva e IA', blurb: 'Piezas gráficas en las que la IA ayuda y el criterio lo pone el estudiante.' },
        { code: 'IAA / CREAR / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Ciberseguridad defensiva', blurb: 'Cuidar cuentas y datos, incluso frente a engaños fabricados con IA.' }
      ] },
      { num: 'III', h3: 'Retos y certificación', sub: 'De 13 a 18 años', courses: [
        { code: 'IAA / RETO / 01', slug: 'pcep-pcap-python-certification-course', title: 'Preparación para PCEP y PCAP', blurb: 'La misma certificación de Python que eligió el piloto Fábrica de Programadores.' },
        { code: 'IAA / RETO / 02', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Competencias de ciberseguridad', blurb: 'Retos tipo captura de bandera, resueltos con razonamiento y no con atajos.' },
        { code: 'IAA / RETO / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Desarrollo web completo', blurb: 'Para publicar en una página propia los proyectos de IA que construya.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Clases',
    h2: '¿Cómo son las clases de IA en vivo para adolescentes?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Al volver del colegio', l: 'La franja más pedida durante el año escolar.' },
      { time: 'Fin de semana', l: 'Para quien tiene la semana llena de tareas y academia.' },
      { time: 'Según exámenes', l: 'En individual, se espacian en bimestrales y se retoman.' }
    ],
    cells: [
      { h3: 'Un mentor fijo', p: 'La misma persona sigue el avance del estudiante todo el curso.' },
      { h3: 'Primero sin IA', p: 'Cada ejercicio se intenta solo antes de usar cualquier herramienta.' },
      { h3: 'Modelos propios', p: 'El estudiante programa sus modelos en Python, sin cuentas externas.' },
      { h3: 'Familia al tanto', p: 'Avisamos antes de usar cualquier herramienta con cuenta.' },
      { h3: 'Exposición en inglés', p: 'Cada proyecto se presenta y se defiende en voz alta.' },
      { h3: 'Grupo o individual', p: 'Grupos de quince a veinte adolescentes, o uno a uno.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes',
  projectsLede: 'Trabajos de estudiantes adolescentes y mayores, varios con IA. Más ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas reales de Google, copiadas en su idioma original.',

  fees: {
    h2: 'Cuánto cuesta el curso de IA para adolescentes',
    lede: 'Verá la mensualidad en dólares estadounidenses; el cobro va a una tarjeta y es el banco quien lo convierte. No se paga matrícula ni hay materiales extra que comprar.',
    free: ['Clase de prueba gratuita', 'El mentor sugiere el curso de inicio', 'Sin datos de tarjeta'],
    group: ['Quince a veinte adolescentes de edad cercana', 'Dos clases en vivo por semana', 'El mismo mentor todo el curso', 'Mes a mes, sin permanencia'],
    one: ['El estudiante y su mentor, solos', 'Proyecto de IA a su medida', 'Horario que se adapta a exámenes']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'IA para adolescentes: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: todo el curso se dicta en inglés, en directo y por internet, con mentores desde la India. Para un adolescente es un doble avance. Aprende IA en el idioma de su documentación y practica conversación, que es lo más difícil de conseguir en el colegio. Lima figura con inglés de nivel alto en el EF EPI 2025, y la jornada regular ya da tres horas semanales de inglés en secundaria. El mentor habla claro y se adapta.' },
      { q: '¿Desde qué edad es el curso?', a: 'Desde los 13 años, es decir, desde 1° o 2° de secundaria. Para menores de 13 tenemos cursos de IA para niños que no usan chatbots.' },
      { q: '¿Necesita saber programar?', a: 'No. El primer curso enseña Python desde cero, y quien ya programa pasa directo a los modelos si así lo sugiere el mentor.' },
      { q: '¿Va a usar ChatGPT o Claude?', a: 'Claude no, porque su empresa exige 18 años. ChatGPT solo con permiso expreso de la familia, como pide OpenAI a los menores de 18. La mayor parte del curso no necesita ninguna cuenta externa.' },
      { q: '¿La IA le hará las tareas del colegio?', a: 'Al contrario. En clase el estudiante resuelve primero sin IA y, si después la usa, debe explicar cada línea. Enseñamos a pensar, no a copiar.' },
      { q: '¿Sirve para la OPEIA o la OPI?', a: 'Trabajamos la base que piden: Python, algoritmos y modelos pequeños. Somos independientes de UTEC, practicamos con problemas propios y no garantizamos puestos. La OPI prohíbe la IA generativa durante la competencia.' },
      { q: '¿Le sirve para la universidad?', a: 'Le da una base de programación, datos y matemática aplicada que se usa en ingeniería y ciencias. No preparamos exámenes de admisión, que son en castellano, y no prometemos ingresos.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 10:00 a. m. de un domingo en Lima son las 8:30 p. m. en la India.' },
      { q: '¿Tiene valor para el colegio?', a: 'No. Las notas son del colegio, y Modern Age Coders no forma parte del MINEDU ni de ningún colegio. Lo que se entrega al final es un certificado de finalización propio.' },
      { q: '¿Cómo se paga?', a: 'Cada mes con tarjeta, en dólares estadounidenses; su banco hace el cambio. La primera clase es gratis y no pide datos de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para leer después',
    lede: 'Algunas páginas nuestras sobre IA, en castellano o en inglés.',
    items: [
      { href: '/ai-agents-for-teens', label: 'AI agents for teens', p: 'Agentes de IA explicados para escolares, con ejemplos que sí pueden armar.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Cuántos años pide cada servicio de IA, con la frase exacta de sus términos.' },
      { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Vacaciones útiles 2027 de IA', p: 'Un verano de inteligencia artificial por edades.' },
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles virtuales en inglés', p: 'Programación y práctica de inglés en el verano.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La página central de nuestras clases para el país.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método de enseñanza, contado paso a paso.' }
    ]
  },

  start: {
    h2: 'Agende una clase de IA de prueba',
    lede: 'Durante la prueba gratuita, el mentor charla en inglés con el adolescente, le pide resolver un problema corto de lógica y, según cómo lo aborda, recomienda empezar por Python o directamente por los modelos.',
    readFirst: 'Si quiere leer antes, <a class="ag-inline-link" href="/ai-agents-for-teens">AI agents for teens</a> y la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> explican en inglés qué construye un adolescente y qué herramientas permite su edad.',
    note: 'Cada sesión es en directo, a través de internet y en inglés, dictada desde la India. Las consultas por WhatsApp se pueden hacer en castellano.',
    formNote: 'Gratis, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'IA en secundaria', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'Modelos de IA' },
        { href: '/courses/teens-ai-tools-mastery-course', label: 'Herramientas de IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano de IA 2027' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones en inglés' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' }
      ] }
    ],
    bottomRight: 'Acertar en entrenamiento todavía no demuestra nada'
  },

  personalityCss: `
.ag-root.ag-iaa .ag-hero h1 { letter-spacing: -0.012em; max-width: 18ch; }
.ag-root.ag-iaa .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-iaa .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-iaa .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-iaa .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'CNEB plan de estudios de secundaria (JER and JEC weekly hours); MINEDU normative ages; MINEDU press note on Fábrica de Programadores (July 2025); INEI ENAHO TIC bulletin, II Trimestre 2026; DS 016-2024-JUS arts. 25.2 and 25.3; vendor terms in content/ai-tool-age-audit.json (audited 15 July 2026); UTEC OPI/OPEIA page and Reglamento OPI 2025; MINEDU press note of 4 August 2025 (Hackathon 2025); tzdata. The tool policy column, the AI steps, the data and the perceptron example are our own.',
    localProject: 'A perceptron trained by hand in Python for secundaria: six invented students (exercises practised, hints asked) labelled 1 if they solved the final challenge alone; weights start at zero and change only on a mistake. Run with python3 -I it makes 3, 2, 2 and 0 mistakes in epochs 1 to 4 and ends with weights (3, -10, -1); it then predicts 1 for (8, 2) and, with the same confidence, 1 for (5, 1), a case it never saw. Lesson family: weighted sum, threshold, update on error, epochs, and confident extrapolation.',
    requiredMentions: ['epoch 1 mistakes 3 weights (-3, -6, -1)', 'epoch 4 mistakes 0 weights (3, -10, -1)', 'Un perceptrón entrenado a mano', 'Horas semanales por área en secundaria, de 1° a 5° grado, según el tipo de jornada', 'Computación o inteligencia artificial', 'beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte', 'el 92,5% de los jóvenes de 12 a 18 años usó internet', 'You must be at least 13 years old to use Copilot', 'Olimpiadas de computación de UTEC para secundaria, según su página y su reglamento', 'Acertar en entrenamiento todavía no demuestra nada'],
    sources: [
      { claim: 'Secundaria weekly hours JER (Matemática 4, Comunicación 4, Inglés 3, EPT 2; 35 total) and JEC (6, 5, 5, 3; 45 total); no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP exam.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Internet use by 12 to 18 year olds 92.5% (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'DS 016-2024-JUS arts. 25.2 (own consent 14 to 17) and 25.3 (parental consent under 14).', url: 'https://cdn.www.gob.pe/uploads/document/file/7568330/6426760-decreto-supremo-n-016-2024-jus-reglamento-de-la-ley-n-29733-ley-de-proteccion-de-datos-personales-publicado-nov-2024.pdf' },
      { claim: 'OPEIA 2026 registration to 18 March and competition 19 March 2026; OPI final 11 April 2026; 2025 OPEIA delegation to the IOAI.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025: final phase C++ only; generative AI banned for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'MINEDU Hackathon 2025: AI and robotics projects; women students up 28% from 2023 to 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'Vendor floors: Microsoft Copilot 13+; Claude 18+; ChatGPT parental permission under 18.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'Recommending Claude or the Codex and Claude Code teens course (needs a Claude subscription, 18+) to under-18s: refused; Claude is listed as not used and the course is not offered here.',
      'Any connection with UTEC, OPI, OPEIA, MINEDU or Fábrica de Programadores, or a medal or admission promise: none; the page says so.',
      'Legal advice on DS 016-2024-JUS: refused; quoted as context only.',
      'Real student data in the perceptron: none; the six students are invented and labelled ours.',
      'OPEIA or OPI 2027 dates: not printed; not published when the page was written.'
    ]
  }
};

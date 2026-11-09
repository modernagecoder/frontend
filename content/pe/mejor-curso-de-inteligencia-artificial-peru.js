// SHIP: market | Mejor curso de IA en Perú: siete preguntas para separar un curso serio de uno de moda | memorisation vs generalisation: a lookup table scores 1.0 on training data and 0.0 on unseen data
'use strict';
// Mejor curso de inteligencia artificial en Perú (ag- Spanish-language door, Peru cluster row PE146, P4 best, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.9: superlative in title and meta only, plain keyword
// H1, a section that defines what "mejor" means with evidence, never rank or price a named competitor); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Searches (KEYWORDS.md sections 1, 2 and 6, AI row): "curso de inteligencia artificial peru", "curso de ia en lima peru", "curso
// de ia gratis peru", "con certificado", "mejor curso de agentes de ia"; questions "¿Dónde estudiar inteligencia artificial en
// Perú?", "¿Hay curso de IA gratis con certificado?", "Do I need coding for an AI course?".
// Spine: "mejor" defined as seven questions a buyer can put to any AI course (does it open the model, does it test on data the
// model never saw, is it live with a mentor, does it teach Python or say clearly it does not, does it respect tool age rules,
// is it honest about the certificate and jobs, is there a real trial class), each with our evidence; how AI is entering
// Peruvian education in 2025 and 2026 (MINEDU course for teachers, AI planning in 205 rural schools, Hackathon 2025, OPEIA
// 2026, OPI generative-AI ban; primary-source table); who is online (INEI); English (EF EPI 2025); one original program that
// shows memorisation against generalisation. No competitor is named, ranked or priced.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/mejor-curso-de-inteligencia-artificial-peru/,
// fetched 2026-11-08 with curl by the research pass, every quote grepped in the raw text):
//  MINEDU press note 9 May 2025 (n-ia-87000.txt): "más de 87 000 docentes en el territorio nacional se han inscrito en el curso
//    “Inteligencia artificial (IA) en la práctica docente” que el Ministerio de Educación (Minedu) imparte a través de una
//    plataforma virtual"; "desde el 2024 ... talleres presenciales y virtuales ... en las 26 regiones". (A minister is named in
//    the note; not used.)
//  MINEDU press note 4 December 2025 (n-ia-rural.txt): "implementará el próximo año el uso de la inteligencia artificial para la
//    planificación de los aprendizajes en 205 instituciones educativas del ámbito rural ... y atienden a cerca de 27 000
//    estudiantes" (the sub-model counts are not summed on the page).
//  MINEDU press note 4 August 2025 (n-hackathon2025.txt): "la cuarta edición de la Hackathon 2025 del Ministerio de Educación
//    (Minedu), que premió a los equipos de estudiantes, docentes y especialistas, quienes sorprendieron con proyectos de IA y
//    robótica"; "alcanzando un total de 27 grandes aliados"; "entre 2023 y 2025, la presencia de estudiantes mujeres creció en
//    28 %" (FACTS 49).
//  OPI / OPEIA home, UTEC (opi-home.txt): "Olimpiada Peruana de Inteligencia Artificial (OPEIA) Inscripciones : hasta el 18 de
//    marzo del 2026. Competencia : 19 de marzo del 2026 ( única fecha)."; "Estos son los estudiantes que fueron seleccionados
//    para representar al Perú en la IOAI en el año 2025."; "abiertas gratuitamente a todos los estudiantes de secundaria".
//  OPI Reglamento 2025 (opi-reglamento-2025.txt): "Queda prohibido el uso de IA generativa para la resolución de problemas."
//  INEI TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el 97,3% de la población de 19 a 24 años utilizó Internet, seguido por el
//    grupo de 25 a 40 años con un 95,2%"; "el 84,2% de la población de 6 y más años".
//  EF EPI 2025 (ef_peru.txt): Lima 555; "Reading score:" 540; "Speaking score:" 480.
//  Vendor terms via content/ai-tool-age-audit.json: Claude 18+; ChatGPT parental permission under 18.
//  Brand facts: 10,000+ students worldwide, 4.9 from 547 Google reviews, since 2020; group 15 to 20.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own program memoria.py (src-pages folder), invented data, run with python3 -I, exact output:
//    umbral aprendido: 50 / memorion entrenamiento 1.0 prueba 0.0 / regla entrenamiento 1.0 prueba 0.83
// Lesson family: memorisation against generalisation: a lookup-table "model" is perfect on its training data and useless on
// unseen data; a learned threshold generalises; why every honest AI course tests on held-out data.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Datos inventados: minutos de practica semanal y si el alumno aprobo su reto (1) o no (0)',
  'entrenamiento = [(20, 0), (35, 0), (40, 0), (55, 1), (70, 1), (90, 1), (45, 0), (65, 1)]',
  'prueba = [(30, 0), (50, 0), (60, 1), (80, 1), (38, 0), (100, 1)]',
  '',
  '# Modelo 1: memoriza la tabla tal cual',
  'memoria = dict(entrenamiento)',
  'def memorion(x):',
  '    return memoria.get(x)          # None si nunca vio ese valor',
  '',
  '# Modelo 2: aprende un umbral, el que menos errores comete en entrenamiento',
  'def errores(u, datos):',
  '    return sum((x >= u) != bool(y) for x, y in datos)',
  'umbral = min(range(0, 101, 5), key=lambda u: errores(u, entrenamiento))',
  'def regla(x):',
  '    return int(x >= umbral)',
  '',
  'def acierto(modelo, datos):',
  '    return sum(modelo(x) == y for x, y in datos) / len(datos)',
  '',
  "print('umbral aprendido:', umbral)",
  "for nombre, modelo in [('memorion', memorion), ('regla', regla)]:",
  "    print(nombre, 'entrenamiento', acierto(modelo, entrenamiento),",
  "          'prueba', round(acierto(modelo, prueba), 2))"
].join('\n');

const OUT = [
  'umbral aprendido: 50',
  'memorion entrenamiento 1.0 prueba 0.0',
  'regla entrenamiento 1.0 prueba 0.83'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Cómo elegir un curso de inteligencia artificial' },
  slug: 'mejor-curso-de-inteligencia-artificial-peru',
  code: 'mia',
  accent: '#811044',
  accentRationale: 'Mejor curso de inteligencia artificial en Perú: a dark raspberry #811044 (alloc.tsv), serious for an adult buyer\'s guide and distinct from the greens and teals of the other AI pages; contrast 9.47 on the paper #FBF8F2 and 8.15 on the darkest paper tint, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cómo elegir un curso de inteligencia artificial',
  title: 'Mejor curso de inteligencia artificial en Perú: 7 preguntas',
  description: '¿Cuál es el mejor curso de inteligencia artificial en Perú? Siete preguntas para separar un curso serio de uno de moda. Clases en vivo, en inglés, con mentor.',
  ogDescription: 'Cómo elegir un curso de IA en Perú sin rankings de marcas: abrir el modelo, probar con datos nuevos, clases en vivo, Python, edades de las herramientas y un certificado honesto.',
  twitterDescription: 'Siete preguntas para elegir un curso de inteligencia artificial en Perú y un programa que muestra la diferencia entre memorizar y aprender. En vivo y en inglés.',
  pageName: 'Cómo elegir un curso de inteligencia artificial en Perú',
  webPageDescription: 'Guía para adultos, universitarios, docentes y escolares mayores en Perú que comparan cursos de inteligencia artificial: siete preguntas que separan un curso serio de uno superficial, cómo está entrando la IA en la educación peruana según el MINEDU y la UTEC, quién estudia en línea según el INEI, el inglés según el EF EPI 2025 y un programa en Python que distingue memorizar de aprender.',
  courseDescription: 'Cursos de inteligencia artificial en vivo y en línea para adultos, universitarios y escolares desde los 13 años en todo el Perú, dictados solo en inglés por mentores desde la India: Python, datos, modelos, evaluación honesta y uso crítico de la IA generativa, en grupo de quince a veinte personas o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Elegir un curso de IA',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-significa', label: 'Qué significa' },
    { href: '#preguntas', label: 'Siete preguntas' },
    { href: '#peru', label: 'IA en el Perú' },
    { href: '#memoria', label: 'Ejemplo' },
    { href: '#gratis', label: 'Gratis' }
  ],
  eyebrow: 'Perú &middot; Inteligencia artificial &middot; Adultos y desde los 13 años',
  h1: 'Curso de inteligencia artificial en Perú: cómo elegirlo',
  lede: 'Hoy casi cualquier curso lleva "inteligencia artificial" en el nombre. Algunos enseñan qué pasa dentro de un modelo y cómo saber si funciona; otros enseñan a escribir instrucciones a un chatbot y poco más. Siete preguntas bastan para distinguirlos antes de pagar.',
  secondaryCta: { href: '#preguntas', label: 'Ver las siete preguntas' },
  wa: 'Hola Modern Age Coders, estoy comparando cursos de inteligencia artificial desde Perú. ¿Puedo reservar una clase de prueba gratuita?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; 4.9 sobre 5 en 547 reseñas de Google',
  spec: [
    ['Para quién', 'Adultos, universitarios, docentes y escolares desde 13 años'],
    ['Enfoque', 'Qué hay dentro del modelo y cómo se evalúa'],
    ['Base', 'Python desde cero, o una ruta sin código'],
    ['Formato', 'En vivo, grupo de quince a veinte o individual'],
    ['Idioma', 'Inglés, con mentor desde la India'],
    ['Primer paso', 'Clase de prueba gratuita']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Un curso de inteligencia artificial que valga la pena en Perú abre el modelo en vez de solo usarlo, evalúa con datos que el modelo nunca vio, se dicta en vivo con un mentor, enseña Python o dice con claridad que no lo hace, respeta la edad mínima de cada herramienta y no promete empleo ni títulos. Modern Age Coders enseña IA en vivo, en línea y en inglés a adultos, universitarios y escolares desde los 13 años, en grupo o individual, a cualquier hora.',

  picks: {
    eyebrow: 'Cursos de IA',
    h2: 'Tres puntos de entrada a la inteligencia artificial',
    lede: 'Uno técnico para adultos, uno sin programar para profesionales y uno para escolares de secundaria.',
    items: [
      { course: 'ai-ml-masterclass-complete-college', code: 'MIA / 01', title: 'Machine learning completo', alt: 'Imagen del curso completo de inteligencia artificial y machine learning para adultos', note: 'Desde los 18 años. Python, datos, regresión, clasificación y redes neuronales, siempre midiendo el modelo con datos que no vio al entrenar.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'MIA / 02', title: 'Datos e IA sin programar', alt: 'Imagen del curso de datos e inteligencia artificial para quienes no programan', note: 'Para quien vive entre tablas de Excel y reportes: aprende a leer lo que hace un modelo y a decidir cuándo creerle, sin una sola línea de código.' },
      { course: 'ai-ml-masterclass-teens', code: 'MIA / 03', title: 'IA y machine learning para adolescentes', alt: 'Imagen del curso de inteligencia artificial para adolescentes', note: 'Para secundaria, desde los 13. El escolar entrena sus propios modelos usando la matemática que ya ve en el colegio y solo herramientas admitidas a su edad.' }
    ]
  },

  sections: [
    {
      id: 'que-significa',
      eyebrow: 'Qué significa',
      h2: '¿Cuál es el mejor curso de inteligencia artificial en Perú?',
      lede: 'El que le enseña a entender y a juzgar la IA, no solo a usarla. Como cada persona llega con una meta distinta, no existe un ganador único; existe un estándar que cualquier curso serio debería cumplir.',
      body: [
        { kind: 'p', html: 'Usamos "mejor" en un sentido verificable. Un curso de IA cumple el estándar si responde bien las siete preguntas de la sección siguiente. Las respuestas se pueden pedir por escrito o comprobar en una clase de prueba. No dependen de la fama de la marca ni del número de alumnos que anuncia.' },
        { kind: 'three', cells: [
          { h3: 'Abrir', p: 'Un curso serio muestra qué hay dentro: datos, una fórmula con números ajustables, un error que se mide y se reduce.' },
          { h3: 'Medir', p: 'Enseña a comprobar si un modelo funciona con casos nuevos, que es donde fallan la mayoría de los proyectos reales.' },
          { h3: 'Juzgar', p: 'Enseña cuándo no usar la IA, cómo detectar una respuesta fluida pero falsa y qué límites ponen la ley y las empresas.' }
        ] },
        { kind: 'p', mt: true, html: 'Esta guía no ordena academias ni universidades, ni compara precios. En cada pregunta contamos qué hacemos nosotros y dónde está la prueba. Si otro curso responde igual de bien y le queda más cómodo, también es una buena elección.' }
      ]
    },
    {
      id: 'preguntas',
      eyebrow: 'Siete preguntas',
      h2: '¿Cómo saber si un curso de inteligencia artificial es bueno?',
      lede: 'Hágale estas siete preguntas a cualquier curso. Junto a cada una está nuestra respuesta.',
      body: [
        { kind: 'ol', items: [
          '<strong>¿Abre el modelo o solo lo usa?</strong> Si el temario es una lista de herramientas y "prompts", usted aprenderá a manejar productos que cambian cada pocos meses. Pida ver la parte del temario donde se entrena un modelo. Nosotros: en el curso técnico usted entrena modelos propios en Python, desde una recta hasta una red neuronal.',
          '<strong>¿Prueba los modelos con datos nuevos?</strong> Un modelo que acierta en los datos con que se entrenó no ha demostrado nada. Pregunte cómo evalúan. Nosotros: separamos siempre datos de entrenamiento y de prueba; el ejemplo de esta página muestra por qué.',
          '<strong>¿Es en vivo, con alguien que corrige?</strong> Los videos explican, pero no ven su error. Nosotros: cada clase es en vivo por videollamada y el mentor revisa su trabajo en la misma sesión.',
          '<strong>¿Enseña a programar o lo dice claramente?</strong> Hay buenos cursos sin código y buenos cursos con código; lo malo es no saber cuál se está comprando. Nosotros: la ruta técnica empieza con Python desde cero; la ruta para no programadores lo dice desde el título.',
          '<strong>¿Respeta la edad de las herramientas?</strong> Varias herramientas famosas son solo para adultos según sus propias condiciones. Nosotros: con menores de 18 usamos solo herramientas que su edad permite y con permiso de la familia; Claude, que exige 18 años, no se usa con adolescentes.',
          '<strong>¿Es honesto sobre el certificado y el empleo?</strong> Ningún curso corto garantiza trabajo, y un certificado de academia no es un título. Nosotros: damos una constancia de finalización propia, que no tiene valor oficial, y no ofrecemos empleos ni sueldos a nadie.',
          '<strong>¿Hay una clase de prueba real?</strong> Con código o con datos, no con diapositivas de venta. Nosotros: ofrecemos una primera sesión completa, en directo, sin costo ni datos de tarjeta.'
        ] },
        { kind: 'p', mt: true, html: 'Si un curso falla en la primera o en la segunda pregunta, lo más probable es que enseñe a usar productos, no inteligencia artificial. Eso puede servir para una tarea puntual en la oficina, pero no le dará criterio para la siguiente herramienta que aparezca.' }
      ]
    },
    {
      id: 'peru',
      eyebrow: 'IA en el Perú',
      h2: '¿Cómo está entrando la inteligencia artificial en la educación peruana?',
      lede: 'Rápido y desde varios frentes: formación de docentes, planificación en colegios rurales, concursos escolares y una olimpiada nacional de IA. Estos son los datos oficiales más recientes que encontramos.',
      body: [
        { kind: 'table', numCols: [], caption: 'La inteligencia artificial en la educación peruana, 2025 a 2026, según fuentes oficiales', head: ['Fecha', 'Qué pasó', 'Fuente'], rows: [
          ['9 de mayo de 2025', 'Más de 87 000 docentes se habían inscrito en el curso virtual "Inteligencia artificial (IA) en la práctica docente"', 'MINEDU, nota de prensa'],
          ['4 de agosto de 2025', 'Cuarta edición de la Hackathon del MINEDU, con proyectos de IA y robótica de estudiantes, docentes y especialistas', 'MINEDU, nota de prensa'],
          ['4 de diciembre de 2025', 'Anuncio del uso de IA en la planificación de los aprendizajes en 205 colegios rurales que atienden a cerca de 27 000 estudiantes, a partir del año siguiente', 'MINEDU, nota de prensa'],
          ['2025', 'Una delegación escolar peruana seleccionada por la OPEIA representó al país en la Olimpiada Internacional de IA (IOAI)', 'UTEC, sitio de las Olimpiadas Peruanas de Computación'],
          ['19 de marzo de 2026', 'Competencia de la Olimpiada Peruana de Inteligencia Artificial (OPEIA), en fecha única, con inscripciones hasta el 18 de marzo', 'UTEC, sitio de las Olimpiadas Peruanas de Computación']
        ] },
        { kind: 'source', html: 'Fuentes: notas de prensa del Ministerio de Educación en gob.pe (9 de mayo de 2025, 4 de agosto de 2025 y 4 de diciembre de 2025) y la página de las Olimpiadas Peruanas de Computación de la UTEC, opi.utec.edu.pe, consultadas en noviembre de 2026. No tenemos ninguna relación con el MINEDU, la UTEC ni sus programas.' },
        { kind: 'p', mt: true, html: 'Dos detalles de esas fuentes ayudan a elegir curso. La nota de la Hackathon 2025 informa que, entre 2023 y 2025, la presencia de estudiantes mujeres creció en 28%, y que el concurso sumó 27 aliados del sector privado: la IA ya no es un tema de nicho en los colegios peruanos. Y el reglamento de 2025 de la Olimpiada Peruana de Informática, también de la UTEC, establece: "Queda prohibido el uso de IA generativa para la resolución de problemas". Las competencias serias premian a quien entiende, no a quien delega.' },
        { kind: 'p', html: 'Si usted es docente, ese curso del MINEDU es un buen comienzo para el uso de herramientas en el aula. Un curso técnico como el nuestro va en otra dirección: explica cómo funcionan por dentro, para que usted pueda responder con propiedad cuando un alumno pregunte por qué la IA se equivocó.' }
      ]
    },
    {
      id: 'memoria',
      tint: 'tint',
      eyebrow: 'Ejemplo',
      h2: '¿Qué diferencia hay entre una IA que memoriza y una que aprende?',
      lede: 'Toda la diferencia del mundo, y se ve en veinte líneas de Python. Los datos son inventados por nosotros: minutos de práctica semanal de ocho alumnos y si aprobaron o no un reto.',
      body: [
        { kind: 'code', label: 'Memorizar contra aprender', lang: 'Python', code: PY, note: 'El primer "modelo" guarda la tabla de entrenamiento en un diccionario y responde solo si ya vio ese valor exacto. El segundo prueba umbrales de 0 a 100 de cinco en cinco y se queda con el que menos se equivoca en los datos de entrenamiento.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Así lo imprimió Python 3 al ejecutarlo en nuestro equipo, sin retoques.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Los dos son perfectos en casa.</strong> Con los datos de entrenamiento, ambos aciertan 1.0, es decir, el cien por ciento. Si el curso solo mira ese número, los dos parecen igual de buenos.',
          '<strong>El memorión fracasa afuera.</strong> Con seis casos nuevos acierta 0.0: ninguno de esos minutos estaba en su tabla, así que devuelve <code>None</code> y nunca coincide. Memorizó, no aprendió.',
          '<strong>La regla generaliza.</strong> El umbral aprendido es 50 minutos. Con los casos nuevos acierta 0.83: cinco de seis.',
          '<strong>El error que queda es honesto.</strong> El alumno de 50 minutos no aprobó, pero la regla dice que sí. Un buen curso no esconde ese fallo: lo usa para preguntar si faltan datos cerca del límite o si los minutos no bastan para predecir.',
          '<strong>Su turno.</strong> Agregue más casos a <code>entrenamiento</code> entre 45 y 55 minutos y vuelva a ejecutar. Vea si el umbral cambia y si mejora el acierto en <code>prueba</code>.'
        ] },
        { kind: 'p', mt: true, html: 'Muchos chatbots muy fluidos fallan de la misma manera cuando se los saca de lo que vieron al entrenar. Por eso la segunda pregunta de esta guía, "¿prueba los modelos con datos nuevos?", es la que más separa un curso serio de uno de moda. Si quiere ver otro modelo aprender paso a paso, nuestro <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a> muestra una recta que se ajusta corrigiendo su error.' }
      ]
    },
    {
      id: 'programar',
      eyebrow: 'Programar',
      h2: '¿Hace falta saber programar para un curso de inteligencia artificial?',
      lede: 'Para entender la IA, no. Para construirla, sí, y Python es el lenguaje que conviene aprender. Lo importante es que el curso diga desde el inicio en qué grupo está.',
      body: [
        { kind: 'two',
          leftH3: 'Ruta sin código',
          left: [
            'Pensada para gerentes, docentes, contadores o abogados que necesitan decidir sobre la IA sin construirla. Se trabaja con hojas de cálculo y herramientas visuales: qué datos alimentan un modelo, cómo se mide si acierta, qué riesgos tiene usarlo con clientes.',
            'Al terminar, usted puede conversar con un equipo técnico y hacer las preguntas correctas.'
          ],
          rightH3: 'Ruta técnica',
          right: [
            'Para quien quiere entrenar y evaluar modelos. Empieza con Python desde cero y suma la matemática de secundaria que hace falta: promedios, rectas, probabilidades.',
            'Si prefiere afianzar primero el lenguaje, existe un camino en dos pasos: un curso de Python y después el de machine learning. Para escolares de 13 a 17 años, la versión para su edad está en nuestra página de <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a>.'
          ] }
      ]
    },
    {
      id: 'gratis',
      eyebrow: 'Gratis',
      h2: '¿Hay un curso de inteligencia artificial gratis con certificado en Perú?',
      lede: 'Existen cursos gratuitos, algunos públicos, y pueden ser un buen comienzo. Conviene saber qué ofrece cada uno antes de comparar.',
      body: [
        { kind: 'p', html: 'El ejemplo más grande en el país es el curso virtual del MINEDU para docentes, con más de 87 000 inscritos al 9 de mayo de 2025. Hay también plataformas de video gratuitas con constancias automáticas. Lo que un curso gratuito rara vez incluye es una persona que revise su trabajo, le haga preguntas incómodas y no lo deje avanzar sin entender.' },
        { kind: 'p', html: 'En nuestro caso, la primera clase es gratuita y completa; el curso, no. Lo que se paga es tiempo de un mentor en vivo, en grupo o individual. Al terminar se lleva un certificado de finalización emitido por nosotros y sin carácter oficial; ante un empleador vale más ante un empleador es el portafolio de modelos que usted pueda mostrar y explicar.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés',
      h2: '¿Por qué estudiar inteligencia artificial en inglés?',
      lede: 'Porque la IA se escribe, se documenta y se discute en inglés. Estudiarla en ese idioma ahorra una traducción permanente y entrena una habilidad que el mercado peruano valora.',
      body: [
        { kind: 'p', html: 'El EF English Proficiency Index 2025 da a Lima 555 puntos, nivel alto, y al Perú una lectura de 540 frente a una expresión oral de 480. Dicho de otro modo, muchos peruanos leen inglés técnico con soltura pero lo hablan poco. En una clase en vivo hay que explicar en voz alta qué hizo el modelo y por qué, y esa práctica es la que suele faltar.' },
        { kind: 'p', html: 'Las edades que más buscan cursos de IA son también las más conectadas: en el segundo trimestre de 2026, el INEI registró uso de internet en el 97,3% de quienes tienen de 19 a 24 años y en el 95,2% de quienes tienen de 25 a 40. Estudiar en línea ya es lo normal; lo que cambia de un curso a otro es si alguien le enseña en vivo.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿Puedo estudiar IA en línea si trabajo a tiempo completo?',
      lede: 'Sí. Usted reserva la hora; nosotros nos ajustamos. La India va diez horas y treinta minutos por delante de Lima durante los doce meses.',
      body: [
        { kind: 'p', html: 'Tres equivalencias calculadas con las zonas oficiales (Perú UTC-5, India UTC+5:30): 6:00 a. m. en Lima son las 4:30 p. m. en la India; 12:30 p. m. en Lima, a la hora de almuerzo, son las 11:00 p. m. allá; 9:00 p. m. en Lima son las 7:30 a. m. del día siguiente en la India. Las damos solo para mostrar la diferencia de reloj.' },
        { kind: 'p', html: 'Para quien trabaja con turnos cambiantes, la clase individual permite mover la hora de una semana a otra. Para quien prefiere constancia, un grupo de nivel parecido ayuda a no abandonar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se avanza en un curso de inteligencia artificial?',
    lede: 'Cinco etapas que usamos para conversar con cada estudiante sobre su avance. Son una escala nuestra, no una nota oficial.',
    table: { caption: 'Cinco etapas de un estudiante de IA (escala nuestra)', head: ['Etapa', 'Momento habitual', 'Qué demuestra'], rows: [
      ['1. Describe', 'Primeras semanas', 'Explica qué datos entran y qué sale de un modelo'],
      ['2. Separa', 'Primer o segundo mes', 'Divide los datos en entrenamiento y prueba sin que se lo pidan'],
      ['3. Entrena', 'Tercer y cuarto mes', 'Ajusta un modelo y mide su acierto con casos nuevos'],
      ['4. Duda', 'Quinto y sexto mes', 'Encuentra por qué su modelo falla y propone qué dato falta'],
      ['5. Decide', 'Al cierre', 'Explica en inglés cuándo usaría ese modelo y cuándo no']
    ] },
    left: { h3: 'Para profesionales', ps: [
      'Lleve a clase un problema de su trabajo. Un caso real enseña más que diez ejemplos de libro.',
      'Antes de usar una respuesta de IA en un informe, verifíquela con una fuente propia.'
    ] },
    right: { h3: 'Para universitarios', ps: [
      'Publique cada proyecto con su evaluación en datos de prueba, no solo con el acierto en entrenamiento.',
      'Código que venga de un asistente se comenta línea por línea en sus propias palabras antes de entrar al proyecto.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para seguir con la IA',
    lede: 'Agrupados según lo que a usted le falte: la base matemática y de código, la aplicación en una oficina, o una entrada para hijos más jóvenes. Cada uno se dicta en directo y en inglés.',
    bands: [
      { num: 'I', h3: 'Base', sub: 'Programación y matemática', courses: [
        { code: 'MIA / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python de cero a avanzado', blurb: 'Para adultos que nunca escribieron código y quieren la herramienta con que se construye casi toda la IA.' },
        { code: 'MIA / BASE / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'La matemática que explica por qué un modelo acierta o falla.' },
        { code: 'MIA / BASE / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Matemática para datos', blurb: 'Álgebra lineal y estadística con la profundidad que pide el machine learning.' }
      ] },
      { num: 'II', h3: 'Aplicar', sub: 'Desde los 18 años', courses: [
        { code: 'MIA / APLICAR / 01', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa por dentro', blurb: 'Modelos de lenguaje, tokens y conexión con datos propios.' },
        { code: 'MIA / APLICAR / 02', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Agentes de programación con IA', blurb: 'Para adultos que programan y quieren delegar con control.' },
        { code: 'MIA / APLICAR / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python e IA', blurb: 'Tareas de oficina resueltas con scripts revisados por usted.' }
      ] },
      { num: 'III', h3: 'Empezar antes', sub: 'De 8 a 18 años', courses: [
        { code: 'MIA / JOVEN / 01', slug: 'ai-literacy-for-kids-course', title: 'IA explicada a los chicos', blurb: 'Para hijos de 8 a 14 años: ejemplos y juegos, nunca cuentas personales en chatbots.' },
        { code: 'MIA / JOVEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'La base para la IA, de 13 a 18 años.' },
        { code: 'MIA / JOVEN / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Machine learning visual', blurb: 'Modelos armados con bloques antes de escribir código.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Qué ocurre durante una clase de IA en directo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Madrugada limeña', l: 'Antes de entrar a trabajar.' },
      { time: 'Mediodía', l: 'En el descanso del almuerzo.' },
      { time: 'Noche', l: 'Cuando termina la jornada.' }
    ],
    cells: [
      { h3: 'Datos de prueba siempre', p: 'Ningún modelo se da por bueno sin casos nuevos.' },
      { h3: 'Pregunta antes que respuesta', p: 'El mentor le pide adivinar el resultado antes de ejecutar.' },
      { h3: 'Un modelo por módulo', p: 'Cada tramo deja un proyecto propio en su portafolio.' },
      { h3: 'IA generativa como revisora', p: 'Se usa para contrastar, nunca para entregar lo que usted no entiende.' },
      { h3: 'El mismo mentor', p: 'Conoce su nivel y su meta de principio a fin.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte personas, o usted solo con el mentor.' }
    ]
  },

  projectsH2: 'Proyectos hechos por estudiantes',
  projectsLede: 'Trabajos reales, varios con datos y modelos, publicados por sus autores; la colección completa vive en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Reseñas de Google escritas por estudiantes y familias, sin cambios.',

  fees: {
    h2: '¿Cuánto cuesta nuestro curso de inteligencia artificial?',
    lede: 'La tarifa figura en dólares estadounidenses porque en esa moneda se carga a su tarjeta cada mes; su banco la convierte el día del cobro. No hay costo de matrícula.',
    free: ['Primera clase completa y gratuita', 'Ubicación según su experiencia', 'Reserva sin tarjeta'],
    group: ['Quince a veinte estudiantes de nivel parecido', 'Mentor fijo', 'Proyecto evaluado con datos de prueba', 'Pago mensual, sin permanencia'],
    one: ['Usted y su mentor', 'Casos de su propio trabajo', 'Hora que cambia con su agenda']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Elegir un curso de inteligencia artificial: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: el curso es en vivo y en inglés, con mentores desde la India. Le conviene, porque la IA se documenta en inglés y la clase le obliga a hablarlo, justo lo que peor puntúa el Perú en el EF EPI 2025 (480 puntos). Lima ya figura en el nivel alto, con 555. Para dudas administrativas le escribimos en castellano.' },
      { q: '¿Cuál es el mejor curso de inteligencia artificial en Perú?', a: 'El que responde bien siete preguntas: abre el modelo, lo prueba con datos nuevos, es en vivo, aclara si enseña a programar, respeta la edad de las herramientas, es honesto sobre certificado y empleo, y deja probar una clase de verdad. Academias y universidades no aparecen ordenadas en ningún ranking nuestro.' },
      { q: '¿Necesito saber programar?', a: 'No. Hay una ruta sin código para entender y decidir sobre la IA, y una ruta técnica que empieza con Python desde cero.' },
      { q: '¿Desde qué edad se puede estudiar IA con ustedes?', a: 'Desde los 13 años con el curso para adolescentes. Los cursos completos de machine learning e IA generativa son para mayores de 18.' },
      { q: '¿Usan ChatGPT o Claude en clase?', a: 'Con adultos, como herramientas de contraste y con criterio. Con menores de 18, solo herramientas permitidas para su edad y con permiso familiar; Claude exige 18 años según sus condiciones y no se usa con adolescentes.' },
      { q: '¿Qué tipo de certificado entregan?', a: 'Una constancia de finalización de Modern Age Coders. No tiene valor oficial: ninguna universidad la emite y ni el MINEDU ni SUNEDU la reconocen.' },
      { q: '¿Me garantizan un trabajo en IA?', a: 'No. Nadie puede garantizarlo con honestidad. Le ayudamos a construir y explicar proyectos que pueda mostrar.' },
      { q: '¿Qué horarios hay para estudiar IA desde Lima?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia de reloj, quien estudia a las 9:00 p. m. limeñas tiene al mentor a las 7:30 a. m., ya en la jornada siguiente de la India.' },
      { q: '¿Sirve para la OPEIA?', a: 'Nuestros cursos enseñan la base de la IA que esa olimpiada valora, pero no tenemos relación con la UTEC y no preparamos con sus problemas. La inscripción y las reglas son las del organizador.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, una vez al mes, en dólares estadounidenses; la conversión la hace su banco. Puede dejar el curso al final de cualquier mes.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Páginas relacionadas',
    lede: 'Algunas están escritas en inglés; las demás, en castellano.',
    items: [
      { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de inteligencia artificial en inglés', p: 'Qué contiene nuestro curso de IA y cómo aprende un modelo paso a paso.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'Curso de IA para adolescentes', p: 'La ruta para escolares de secundaria, con herramientas de su edad.' },
      { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Vacaciones útiles 2027 de inteligencia artificial', p: 'Una forma de empezar en el verano.' },
      { href: '/ai-agents-explained', label: 'AI agents explained', p: 'Para quien oye hablar de agentes y quiere saber si son algo más que un chatbot con nombre nuevo.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Útil si en casa hay adolescentes: dice qué herramienta admite qué edad, con el texto de sus condiciones.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El índice general de lo que enseñamos a familias y adultos del Perú.' }
    ]
  },

  start: {
    h2: 'Haga las siete preguntas en una clase gratuita',
    lede: 'En la clase de prueba el mentor le muestra un modelo pequeño, le pregunta qué quiere lograr con la IA y le propone una ruta, con código o sin él. Pregúntele todo lo de esta página.',
    readFirst: 'Si prefiere leer antes, <a class="ag-inline-link" href="/ai-agents-explained">AI agents explained</a> y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> están en inglés.',
    note: 'El curso se dicta solo en inglés, en directo y por internet, con mentores que enseñan desde la India. Por WhatsApp atendemos en castellano.',
    formNote: 'No pedimos pago ni tarjeta para la clase de prueba.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de IA', links: [
        { href: '/courses/ai-ml-masterclass-complete-college', label: 'Machine learning' },
        { href: '/courses/data-and-ai-analytics-for-non-programmers-course', label: 'IA sin programar' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'IA para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de IA en inglés' },
        { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano de IA 2027' },
        { href: '/ai-tools-age-guide', label: 'Edades de la IA' }
      ] }
    ],
    bottomRight: 'Acertar con lo ya visto no prueba nada; acertar con lo nuevo, sí'
  },

  personalityCss: `
.ag-root.ag-mia .ag-hero h1 { max-width: 20ch; letter-spacing: -0.012em; }
.ag-root.ag-mia .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-mia .ag-steps li { line-height: 1.62; }
.ag-root.ag-mia .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-mia .ag-section-head h2 { max-width: 33ch; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU press notes of 9 May 2025 (AI course for teachers), 4 August 2025 (Hackathon 2025) and 4 December 2025 (AI planning in 205 rural schools); UTEC Olimpiadas Peruanas de Computación site (OPEIA 2026 dates, IOAI 2025 delegation) and Reglamento OPI 2025; INEI TIC bulletin II Trimestre 2026; EF EPI 2025 Peru page; vendor terms via content/ai-tool-age-audit.json; tzdata. The seven questions, the stages, the data and the Python example are our own.',
    localProject: 'Memorisation against generalisation in Python: eight invented training points (weekly practice minutes, pass or fail) and six invented test points; a dictionary lookup "model" scores 1.0 on training and 0.0 on test; a threshold chosen by minimum training errors (50 minutes) scores 1.0 and 0.83, with one honest miss at exactly 50 minutes. Lesson family: why an AI course must test on data the model never saw.',
    requiredMentions: ['memorion entrenamiento 1.0 prueba 0.0', 'Memorizar contra aprender', 'La inteligencia artificial en la educación peruana, 2025 a 2026, según fuentes oficiales', 'Anuncio del uso de IA en la planificación de los aprendizajes en 205 colegios rurales', 'Competencia de la Olimpiada Peruana de Inteligencia Artificial (OPEIA), en fecha única', 'la presencia de estudiantes mujeres creció en 28%', 'Cinco etapas de un estudiante de IA (escala nuestra)', 'en el 95,2% de quienes tienen de 25 a 40', 'Acertar con lo ya visto no prueba nada; acertar con lo nuevo, sí'],
    sources: [
      { claim: 'More than 87,000 teachers enrolled in the MINEDU course "Inteligencia artificial (IA) en la práctica docente" (9 May 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'AI for learning planning in 205 rural schools serving about 27,000 students, announced 4 December 2025 for the following year.', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: 'Hackathon 2025, fourth edition, AI and robotics projects; female student participation up 28% between 2023 and 2025; 27 private partners (4 August 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'OPEIA 2026 on 19 March 2026, registration until 18 March; 2025 delegation represented Peru at the IOAI.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025 rules ban generative AI for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'INEI II Trimestre 2026: internet use 97.3% (19 to 24), 95.2% (25 to 40).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, reading 540, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'A ranking of named AI courses, academies or universities, or a claim that ours is the best: refused.',
      'Competitor prices, soles or a typed fee: refused; fees render from the template.',
      'A job, salary or official-certificate promise: refused.',
      'Summing the three rural sub-model counts into a total: refused; the page prints the press note\'s own "cerca de 27 000".',
      'Any tie with MINEDU, UTEC, the OPI or the OPEIA, or use of their problems: refused.',
      'Claude or other 18+ tools for teenagers: refused.'
    ]
  }
};

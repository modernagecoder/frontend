// SHIP: market | IA para niños de primaria en Perú: qué es, a qué edad, qué pide la ley | a word-score text classifier: learned points per word, and a "not" it cannot read
'use strict';
// Curso de inteligencia artificial para niños (ag- Spanish-language door, Peru cluster row PE096, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the Peruvian parent who types "inteligencia artificial para niños de primaria", "... de 10 años" or "... de quinto
// grado" (KEYWORDS.md section 2, AI for kids: mostly informational, so the page explains first and converts second).
// Spine: AI explained in three child-sized ideas; what primaria in Peru gives (grades, normative ages, weekly Matemática and
// Inglés hours, no AI area); which age suits which kind of AI class; what the house needs (INEI: 68.2% of children 6 to 11 used
// the internet, 36.4% of homes have a computer); what Peru's 2025 AI regulation says about evaluating children; one original
// Python lesson (a classifier that learns points for words and then fails on "not bad").
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-inteligencia-artificial-para-ninos-peru/;
// FACTS = facts-school/FACTS.md, MARKET/LEGAL = facts-market/):
//  MINEDU, Edades normativas PDF (FACTS 14, 15): "6 años 7 años 8 años 9 años 10 años 11 años 12 años ..." against
//    "III 1er grado 2do grado IV 3er grado 4to grado V 5to grado 6to grado" (1° primaria = 6 ... 6° primaria = 11, at 31 March).
//  Ley General de Educación 28044 (FACTS 5): "La Educación Primaria constituye el segundo nivel de la Educación Básica Regular y
//    dura seis años."
//  CNEB plan de estudios, primaria (FACTS 57): "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3".
//  CNEB (FACTS 32, 33): "28 Se desenvuelve en entornos virtuales generados por las TIC"; "Competencias transversales a las áreas".
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (MARKET 1.4, inei_tic_iit2026.txt): "el uso de Internet fue
//    menor entre los niños de 6 a 11 años (68,2%)"; "el 36,4% de los hogares del país disponía de al menos una computadora";
//    "el mayor nivel de uso de Internet se registró en Lima Metropolitana, con un 92,4%".
//  DS 016-2024-JUS art. 25.3 (LEGAL 4; El Peruano 30 November 2024): "En el marco de la oferta de servicios digitales dirigida a
//    menores de catorce años de edad, el tratamiento de datos personales es lícito siempre que se cuente con el consentimiento de
//    aquel o aquellos que ejercen la patria potestad o tutela".
//  DS 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, 9 September 2025; ds115.txt): art. 24.1 b "Realizar evaluación en los
//    procesos de niños, niñas y adolescentes (NNA), en el sector educativo, tales como: i) acceso a un centro de educación, ii)
//    evaluación de resultados de aprendizaje ... salvo que el sistema integre una función complementaria y no reemplace la
//    evaluación pedagógica humana."
//  MINEDU press note 4 August 2025 (FACTS 48, 49): Hackathon 2025 "proyectos de IA y robótica"; "entre 2023 y 2025, la presencia
//    de estudiantes mujeres creció en 28 %".
//  Vendor terms via content/ai-tool-age-audit.json (audited 2026-07-15): OpenAI 13 and parent permission under 18; Anthropic 18;
//    Gemini 13 and not with Family Link accounts; Teachable Machine no age for the tool; Machine Learning for Kids "Students cannot
//    create their own accounts."
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (ninos.py and ninos_reto.py in the src-pages folder; the messages are invented by us):
//    thanks great drawing -> ('kind', 3) / slow game nobody -> ('unkind', -3) / see you tomorrow -> ('not sure', 0) /
//    your drawing is not bad -> ('unkind', -3)
//    reto (add 'your idea is not bad' to the kind examples): your drawing is not bad -> ('kind', 1)
// Lesson family: a word-score text classifier: points learned per word from labelled examples, a sum decides, a zero means
// "not sure", and a negation the model cannot understand.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "amables = ['you are a great friend', 'thanks for helping me', 'great game well done', 'i like your drawing']",
  "groseros = ['you are so slow', 'nobody likes your game', 'your drawing is bad', 'go away slow player']",
  '',
  'puntos = {}',
  'for frase in amables:',
  '    for palabra in frase.split():',
  '        puntos[palabra] = puntos.get(palabra, 0) + 1',
  'for frase in groseros:',
  '    for palabra in frase.split():',
  '        puntos[palabra] = puntos.get(palabra, 0) - 1',
  '',
  'def decidir(mensaje):',
  '    total = 0',
  '    for palabra in mensaje.split():',
  '        total = total + puntos.get(palabra, 0)',
  '    if total > 0:',
  "        return 'kind', total",
  '    if total < 0:',
  "        return 'unkind', total",
  "    return 'not sure', total",
  '',
  "for mensaje in ['thanks great drawing', 'slow game nobody', 'see you tomorrow', 'your drawing is not bad']:",
  "    print(mensaje, '->', decidir(mensaje))"
].join('\n');

const OUT = [
  "thanks great drawing -> ('kind', 3)",
  "slow game nobody -> ('unkind', -3)",
  "see you tomorrow -> ('not sure', 0)",
  "your drawing is not bad -> ('unkind', -3)"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Curso de inteligencia artificial para niños' },
  slug: 'curso-de-inteligencia-artificial-para-ninos-peru',
  code: 'iar',
  accent: '#005356',
  accentRationale: 'Curso de inteligencia artificial para niños: a deep lagoon teal #005356, calm and clear for a page that explains AI to primaria children without hype, and cooler than the brown of the summer AI page; contrast 7.19 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de inteligencia artificial para niños',
  title: 'Curso de inteligencia artificial para niños en Perú, en inglés',
  description: 'Inteligencia artificial para niños de primaria en Perú: qué es, desde qué edad, qué herramientas permite cada edad. Clases en vivo, en inglés, con mentor.',
  ogDescription: 'Qué es la IA explicada a un niño, qué da la primaria peruana, qué edad conviene, qué pide el reglamento de IA de 2025 y un clasificador de mensajes en Python escrito por nosotros.',
  twitterDescription: 'Un curso de inteligencia artificial para niños de 6 a 12 años en Perú, en vivo y en inglés, en grupo o individual y a la hora que elija la familia.',
  pageName: 'Curso de inteligencia artificial para niños en Perú',
  webPageDescription: 'Guía para madres y padres en Perú sobre la inteligencia artificial para niños de primaria: cómo explicarla en tres ideas, qué horas de Matemática e Inglés da el colegio en cada grado, desde qué edad tiene sentido un curso, qué herramientas permite cada edad según sus propias empresas, qué dice el reglamento peruano de IA de 2025 sobre evaluar a menores y un clasificador de mensajes en Python hecho por nosotros.',
  courseDescription: 'Curso en vivo y en línea de inteligencia artificial para niños de 6 a 12 años en todo el Perú, dictado solo en inglés por mentores desde la India: qué es la IA, cómo aprende de ejemplos, por qué se equivoca y cómo programar modelos sencillos en Python, sin cuentas de chatbots, en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IA para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es', label: 'Qué es la IA' },
    { href: '#primaria', label: 'Primaria' },
    { href: '#edad', label: 'Edades' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#reglamento', label: 'Reglamento' }
  ],
  eyebrow: 'Perú &middot; Inteligencia artificial &middot; Niños de 6 a 12 años',
  h1: 'Curso de inteligencia artificial para niños, en vivo y en inglés',
  lede: 'La pregunta que más escuchamos de padres peruanos no es cuál aplicación de IA debería usar su hijo. Es otra: ¿cómo le explico qué es? Un buen curso de inteligencia artificial para niños responde eso con las manos en el teclado. El niño entrena una máquina con ejemplos, la ve acertar, la ve fallar y aprende a preguntar por qué.',
  secondaryCta: { href: '#edad', label: 'Ver qué conviene a cada edad' },
  wa: 'Hola Modern Age Coders, buscamos un curso de inteligencia artificial en inglés para nuestro hijo o hija de primaria en Perú. ¿Podemos reservar una clase de prueba gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; IA que el niño programa, no solo usa',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Qué aprende', 'Cómo una máquina aprende de ejemplos y por qué se equivoca'],
    ['Cuentas', 'Ninguna cuenta de chatbot para menores de 13'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés claro, con mentor en vivo desde la India'],
    ['Prueba', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Modern Age Coders ofrece un curso de inteligencia artificial para niños peruanos de 6 a 12 años: clases en vivo, por internet y siempre en inglés, con mentores que enseñan desde la India. Los más pequeños descubren la IA jugando a clasificar; desde los 9 o 10 años programan en Python modelos que aprenden de ejemplos. No se abren cuentas de chatbots: cada herramienta respeta la edad que fija su empresa. Puede elegir clase grupal o individual, cualquier día y a la hora que prefiera su familia.',

  picks: {
    eyebrow: 'Cursos para primaria',
    h2: 'Tres cursos de IA según el grado de su hijo',
    lede: 'Para 1° y 2° de primaria, razonar antes de tocar una máquina; de 3° en adelante, entender la IA; desde 4° o 5°, programarla.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'IAR / 01', title: 'Razonar antes de programar', alt: 'Imagen del curso de razonamiento para niños pequeños', note: 'De 6 a 9 años. Agrupar, ordenar y encontrar la regla escondida en una serie: exactamente lo que hará después una máquina, primero hecho con la cabeza.' },
      { course: 'ai-literacy-for-kids-course', code: 'IAR / 02', title: 'Qué es la IA y cuándo creerle', alt: 'Imagen del curso de alfabetización en inteligencia artificial para niños', note: 'Para niños de 8 a 14 años que todavía no programan. Entrenar un modelo con ejemplos, descubrir por qué a veces inventa y aprender qué preguntarle a una respuesta antes de aceptarla.' },
      { course: 'python-ai-kids-masterclass', code: 'IAR / 03', title: 'Python con proyectos de IA', alt: 'Imagen del curso de Python con inteligencia artificial para niños', note: 'De 9 a 12 años. El niño escribe en Python programas que cuentan, puntúan y deciden, como el clasificador de mensajes de esta página, y los mejora con más datos.' }
    ]
  },

  sections: [
    {
      id: 'que-es',
      eyebrow: 'Qué es la IA',
      h2: '¿Qué es la inteligencia artificial explicada para niños?',
      lede: 'Es un programa que aprende a partir de ejemplos en lugar de recibir todas las reglas escritas. Esa frase, dicha así, no le dice nada a un niño de 8 años. Por eso en clase la partimos en tres ideas que sí puede ver y tocar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Aprende de ejemplos', p: 'Si le mostramos a la computadora muchos mensajes amables y muchos groseros, ella misma descubre qué palabras suelen aparecer en cada grupo. Nadie le escribió la lista; la sacó de los ejemplos.' },
          { h3: 'Decide sumando pistas', p: 'Cada palabra conocida le da puntos a favor o en contra. La máquina suma y decide. No entiende el mensaje como lo entiende una persona: solo cuenta pistas.' },
          { h3: 'Se equivoca y se corrige', p: 'Con pocos ejemplos, falla. El niño encuentra el error, agrega un ejemplo nuevo y vuelve a probar. Ese ciclo de probar, fallar y mejorar es la parte más valiosa del curso.' }
        ] },
        { kind: 'p', mt: true, html: 'Con esas tres ideas un niño de primaria ya puede explicarle a su abuela por qué el teléfono reconoce su cara o por qué el traductor a veces dice tonterías. Y puede hacerlo en inglés, porque toda la clase transcurre en ese idioma: el mentor pregunta "why did the computer get it wrong?" y el niño aprende a responder con sus propias palabras.' },
        { kind: 'p', html: '¿Su hijo prefiere crear juegos antes que entender la IA? Entonces lea primero nuestra página sobre <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a>, que cuenta paso a paso una primera clase. Si busca algo para enero y febrero, el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-inteligencia-artificial">vacaciones útiles 2027 de inteligencia artificial</a> reparte este mismo contenido en ocho semanas de verano.' }
      ]
    },
    {
      id: 'primaria',
      eyebrow: 'Primaria en el Perú',
      h2: '¿Se enseña inteligencia artificial en la primaria peruana?',
      lede: 'No como curso propio. La primaria peruana dura seis años, de 1° a 6° grado, y en su plan de estudios no figura ninguna hora de IA ni de código. Las habilidades digitales se reparten entre las otras áreas.',
      body: [
        { kind: 'table', numCols: [2, 3], caption: 'Primaria en el Perú: edad normativa y horas semanales de Matemática e Inglés por grado', head: ['Grado', 'Edad normativa', 'Matemática (horas por semana)', 'Inglés (horas por semana)', 'Qué IA le proponemos (nuestro)'], rows: [
          ['1° de primaria', '6 años', '5', '2', 'Juegos de agrupar y ordenar, sin pantalla'],
          ['2° de primaria', '7 años', '5', '2', 'Enseñar a la computadora con imágenes, sin cuenta'],
          ['3° de primaria', '8 años', '4', '3', 'Qué es un ejemplo y qué es una regla'],
          ['4° de primaria', '9 años', '4', '3', 'Primeros programas en Python que cuentan'],
          ['5° de primaria', '10 años', '4', '3', 'Un clasificador propio, como el de esta página'],
          ['6° de primaria', '11 años', '4', '3', 'Medir aciertos y explicar los errores del modelo']
        ] },
        { kind: 'source', html: 'Fuentes: MINEDU, tabla de edades normativas de la Educación Básica Regular (edad cumplida al 31 de marzo); CNEB, plan de estudios de primaria, horas semanales de Matemática "5 5 4 4 4 4" e Inglés "2 2 3 3 3 3". Ley General de Educación 28044: la primaria "dura seis años". La última columna es nuestra propuesta, no del MINEDU. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Dos datos de la tabla le interesan a una familia que busca IA en inglés. El primero: desde 3° de primaria el colegio da tres horas de inglés por semana, así que una clase en vivo en ese idioma no parte de cero, sino que pone a trabajar lo que su hijo ya estudia. El segundo: la matemática de primaria alcanza de sobra para la IA de primaria. Sumar, comparar y contar es todo lo que necesita el clasificador del ejemplo.' },
        { kind: 'p', html: 'El CNEB sí incluye una competencia digital, la 28, sobre desenvolverse en entornos virtuales, pero es transversal: no tiene horas propias y cada colegio la trabaja a su manera. Por eso dos niños de 5° grado pueden llegar a nuestra clase con experiencias muy distintas, y el mentor empieza siempre por averiguar qué sabe cada uno.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'Edades',
      h2: '¿A qué edad puede un niño empezar un curso de inteligencia artificial?',
      lede: 'A los 6 años, si el curso empieza por el razonamiento y no por la pantalla. La forma de aprender IA cambia mucho entre un niño de 1° grado y uno de 10 años, de 5° de primaria, así que la dividimos en tres tramos.',
      body: [
        { kind: 'three', cells: [
          { h3: 'De 6 a 8 años', p: 'Juegos de clasificar figuras, animales y sonidos. Luego, en el navegador y sin crear cuentas, el niño entrena un modelo de imágenes con la cámara: mano abierta, mano cerrada. Aprende la idea antes que la herramienta.' },
          { h3: 'De 9 a 10 años', p: 'Aquí entra Python. El niño escribe listas de ejemplos, cuenta palabras y hace que el programa decida. Es la edad que más buscan los padres en Perú, "inteligencia artificial para niños de 10 años", y la que más disfruta ver fallar a su propio modelo.' },
          { h3: 'De 11 a 12 años', p: 'Medir y comparar: cuántos aciertos tuvo el modelo, por qué falló con un ejemplo concreto y qué datos le faltan. Es el paso previo a la IA de secundaria, con modelos más grandes y datos reales.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué herramientas de IA admiten niños, según las condiciones que publica cada empresa', head: ['Servicio', 'Qué exige su empresa', 'En nuestras clases de primaria'], rows: [
          ['ChatGPT, de OpenAI', 'Tener 13 años como mínimo; los menores de 18 necesitan autorización de sus padres', 'No se usa'],
          ['Claude, de Anthropic', 'Ser mayor de edad: 18 años o más', 'Nunca, tampoco con adolescentes'],
          ['Gemini, de Google', 'Tener 13 años; no abre con cuentas infantiles de Family Link', 'No se usa'],
          ['Teachable Machine (Google)', 'Sin edad para la herramienta; cuenta de Google solo para guardar', 'Sí, sin abrir cuenta'],
          ['Machine Learning for Kids', 'Sin edad general; las cuentas las crea el docente, no el alumno', 'Solo con una cuenta preparada por un adulto'],
          ['Python en la computadora', 'No aplica: es un lenguaje, no un servicio', 'Sí, es la herramienta principal']
        ] },
        { kind: 'source', html: 'Fuente: las condiciones publicadas por cada empresa, que copiamos palabra por palabra en la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>, auditada el 15 de julio de 2026. Por ejemplo, Machine Learning for Kids aclara: "Students cannot create their own accounts". La última columna es decisión nuestra, y como las empresas cambian sus condiciones, conviene releerlas antes de registrarse.' },
        { kind: 'p', mt: true, html: 'La conclusión práctica es simple. Un curso de IA para niños de primaria que empiece pidiendo un correo para registrarse en un chatbot ya empezó mal. La mayoría de esas herramientas exige 13 años como mínimo, y para un niño de 9 la manera más honesta y más formativa de conocer la IA es construir una pequeña él mismo.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'En casa',
      h2: '¿Qué necesita un niño en casa para un curso de IA en línea?',
      lede: 'Una computadora, una conexión estable y un adulto que esté cerca en la primera clase. Con un celular se puede mirar un video, pero no se puede programar con comodidad.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dicen las cifras del INEI',
          left: [
            'Según la encuesta de hogares del INEI para el segundo trimestre de 2026, los niños de 6 a 11 años son el grupo en edad escolar que menos usa internet: un 68,2%, frente a un 92,5% entre los de 12 a 18 años. En Lima Metropolitana, el uso de internet de la población de 6 años a más llega al 92,4%.',
            'El mismo boletín del INEI indica que solo el 36,4% de los hogares del país tenía al menos una computadora en ese trimestre de 2026. Si su casa está en ese grupo, ya tiene lo principal; si no, una laptop sencilla basta para Python.'
          ],
          rightH3: 'Lo que sugerimos nosotros',
          right: [
            'Para 1° y 2° de primaria, la computadora en un lugar común de la casa y un adulto a la vista durante la clase. Desde 3° el niño trabaja solo, pero el mentor envía después un breve resumen a la familia.',
            'Audífonos con micrófono ayudan mucho, porque la clase es una conversación en inglés y el mentor necesita escuchar bien cómo explica el niño su razonamiento.'
          ] },
        { kind: 'p', mt: true, html: 'Sobre los datos de su hijo: para servicios digitales pensados para menores de catorce años, el artículo 25.3 del reglamento de protección de datos personales (DS 016-2024-JUS) exige el consentimiento de los padres o del tutor. Es una referencia, no un consejo legal. En la práctica, nosotros hablamos con la madre, el padre o el tutor antes de la primera clase, y no pedimos al niño crear cuentas en servicios externos.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo programa un niño su primera inteligencia artificial?',
      lede: 'Así es una clase con niños de 10 a 12 años. El ejercicio y los mensajes son nuestros: ocho frases en inglés, cuatro amables y cuatro groseras, de las que el programa aprende cuántos puntos vale cada palabra.',
      body: [
        { kind: 'code', label: 'Un detector de mensajes amables', lang: 'Python', code: PY, note: 'El diccionario <code>puntos</code> es lo que la máquina "aprende": cada palabra de un mensaje amable suma uno, cada palabra de uno grosero resta uno. Para decidir, el programa suma los puntos de las palabras del mensaje nuevo.' },
        { kind: 'code', label: 'Lo que muestra la pantalla', lang: 'Salida', code: OUT, note: 'Esto imprimió Python 3 al ejecutar el programa en nuestro equipo; no tocamos nada. El último mensaje es amable, "your drawing is not bad", pero el programa lo marcó como grosero.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer los ejemplos.</strong> El niño lee en voz alta las ocho frases. El mentor le pregunta en inglés cuáles palabras cree que delatan un mensaje grosero. Casi siempre dice "slow" y "bad", y acierta.',
          '<strong>Seguir a la máquina.</strong> Para "thanks great drawing", suma con lápiz: thanks vale 1, great vale 2 porque aparece en dos frases amables, drawing vale 0 porque aparece en una amable y en una grosera. Total 3: amable.',
          '<strong>El caso que no sabe.</strong> "see you tomorrow" tiene palabras que el programa nunca vio. Todas valen 0 y la respuesta es "not sure". Un buen modelo admite cuando no sabe; uno malo inventa.',
          '<strong>El error.</strong> "your drawing is not bad" suma menos tres: "your", "is" y "bad" restan, y "not" vale cero porque no estaba en ningún ejemplo. El programa no entiende la negación; solo cuenta palabras sueltas.',
          '<strong>Arreglarlo con datos.</strong> El reto es agregar <code>\'your idea is not bad\'</code> a la lista de mensajes amables. Al volver a ejecutar, el mismo mensaje da <code>(\'kind\', 1)</code>. Nadie le explicó a la máquina qué significa "not"; solo vio un ejemplo más.'
        ] },
        { kind: 'p', mt: true, html: 'De este ejercicio de veinte líneas el niño se lleva algo que le servirá toda la vida: una IA puede acertar sin entender, y sus errores vienen de los ejemplos que recibió. Cuando más adelante use herramientas mucho más grandes, sabrá que también suman pistas, solo que con muchísimos más datos, y que siempre conviene revisar antes de creer.' }
      ]
    },
    {
      id: 'reglamento',
      eyebrow: 'Reglamento de IA',
      h2: '¿Qué dice la ley peruana de inteligencia artificial sobre los niños?',
      lede: 'El Perú tiene una ley que promueve el uso de la IA, la Ley 31814, y desde el 9 de setiembre de 2025 un reglamento que clasifica sus usos por nivel de riesgo. Uno de los usos de riesgo alto toca directamente a los escolares.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice el reglamento',
          left: [
            'El Decreto Supremo N.° 115-2025-PCM, publicado en El Peruano el 9 de setiembre de 2025, aprueba el reglamento de la Ley 31814. Su artículo 24.1, literal b, considera de riesgo alto usar un sistema de IA para evaluar a niños, niñas y adolescentes en el sector educativo: por ejemplo, para decidir el acceso a un colegio o evaluar resultados de aprendizaje.',
            'El mismo literal hace una salvedad: deja de ser de riesgo alto cuando el sistema cumple una función complementaria y "no reemplace la evaluación pedagógica humana". Es un dato de contexto: no damos asesoría legal.'
          ],
          rightH3: 'Cómo lo aplicamos nosotros',
          right: [
            'Ninguna IA califica a su hijo en nuestras clases. El avance lo observa y lo explica el mentor, una persona, a partir de lo que el niño programa y de cómo razona en voz alta.',
            'Usamos la IA como tema de estudio, no como evaluador. El niño la construye, la prueba y la corrige; nunca es la máquina la que decide si el niño aprendió.'
          ] },
        { kind: 'p', mt: true, html: 'En el colegio también hay movimiento. En agosto de 2025 el MINEDU premió en la cuarta edición de su Hackathon a equipos de estudiantes y docentes con proyectos de IA y robótica, y señaló que entre 2023 y 2025 la presencia de estudiantes mujeres creció en 28%. Son buenas noticias para las niñas que hoy, en primaria, descubren que les gusta entrenar modelos.' },
        { kind: 'p', html: 'Este curso es un complemento del colegio. Las notas las pone el colegio; nosotros no emitimos calificaciones ni documentos válidos para el sistema escolar, y no formamos parte del MINEDU ni de sus programas. Quien termina un curso recibe un certificado de finalización emitido por Modern Age Coders, y nada más. Todas nuestras opciones para familias peruanas están reunidas en <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora son las clases de IA para niños desde la India?',
      lede: 'A la que usted elija. La India está diez horas y media por delante de Perú todo el año: ninguno de los dos países adelanta o atrasa el reloj.',
      body: [
        { kind: 'p', html: 'Hicimos unas cuentas con la hora oficial de cada país (Perú en UTC-5, India en UTC+5:30): las 9:00 a. m. de un sábado en Lima son las 7:30 p. m. del sábado en la India; las 3:00 p. m. en Lima, a la salida del colegio, equivalen a la 1:30 de la madrugada allá; y las 5:00 p. m. limeñas, a las 3:30 de la madrugada india. Son solo ejemplos de conversión, no un horario de clases: la hora la reserva usted y el mentor se adapta.' },
        { kind: 'p', html: 'Con niños de primaria sugerimos sesiones cortas, de unos 45 a 60 minutos, en un momento del día en que no estén cansados. Para muchas familias peruanas eso significa la tarde, después del almuerzo y antes de las tareas, o la mañana del fin de semana.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota que un niño entiende la inteligencia artificial?',
    lede: 'Cinco pasos que usamos para describir el avance de un niño de primaria. Son nuestros, no una escala oficial.',
    table: { caption: 'Cinco pasos de comprensión de la IA en primaria (nuestros)', head: ['Paso', 'Grado habitual', 'Lo que el niño ya puede hacer'], rows: [
      ['1. Agrupa', '1° y 2°', 'Separa objetos por una regla que él mismo descubre'],
      ['2. Enseña', '2° y 3°', 'Entrena un modelo de imágenes y ve que aprende de lo que le mostró'],
      ['3. Cuenta', '4°', 'Escribe en Python un programa que cuenta y decide'],
      ['4. Explica', '5°', 'Dice por qué su modelo se equivocó con un ejemplo concreto'],
      ['5. Corrige', '6°', 'Agrega los datos que faltaban y comprueba que el error desaparece']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pídale a su hijo que le muestre un error de su modelo. Si sabe explicarlo, entendió más que muchos adultos.',
      'No se preocupe si al principio responde al mentor con frases cortas en inglés. En pocas semanas las frases crecen junto con los programas.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Cuando la computadora acierte, pregunte por qué. Cuando falle, pregunte más todavía.',
      'Una máquina que dice "no sé" es más honesta que una que siempre responde.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para niños de primaria',
    lede: 'Cada curso se dicta en inglés con un mentor en directo, para un grupo o para un solo niño, y ninguno obliga a un menor de 13 a registrarse en un chatbot.',
    bands: [
      { num: 'I', h3: 'Pensar como programador', sub: 'De 6 a 12 años', courses: [
        { code: 'IAR / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Para los más pequeños: secuencias, repeticiones y decisiones arrastrando bloques.' },
        { code: 'IAR / BASE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas paso a paso', blurb: 'De 7 a 12 años: dividir un problema grande en pasos que se pueden resolver.' },
        { code: 'IAR / BASE / 03', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Juegos y animaciones propias, la puerta de entrada clásica a la programación.' }
      ] },
      { num: 'II', h3: 'Crear jugando', sub: 'De 7 a 14 años', courses: [
        { code: 'IAR / JUEGO / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Programar en Roblox', blurb: 'De 8 a 14 años: mundos propios en Roblox Studio con el lenguaje Lua.' },
        { code: 'IAR / JUEGO / 02', slug: 'minecraft-coding-for-kids-course', title: 'Programar en Minecraft', blurb: 'De 7 a 12 años: lógica y bucles construyendo dentro de un mundo conocido.' },
        { code: 'IAR / JUEGO / 03', slug: 'game-development-masterclass-for-kids', title: 'Crear videojuegos', blurb: 'De 8 a 12 años: personajes, puntos y niveles diseñados por el propio niño.' }
      ] },
      { num: 'III', h3: 'El paso siguiente', sub: 'De 9 a 15 años', courses: [
        { code: 'IAR / MAS / 01', slug: 'maths-through-coding', title: 'Matemática programando', blurb: 'Para 10 a 15 años: fracciones, patrones y gráficos que el niño convierte en código.' },
        { code: 'IAR / MAS / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'De 9 a 12 años: un lenguaje escrito y exigente para quien ya domina los bloques.' },
        { code: 'IAR / MAS / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Videojuegos con Godot', blurb: 'De 10 a 17 años: un motor de juegos profesional y gratuito, con código de verdad.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una clase de IA para niños en línea?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después del colegio', l: 'La franja preferida por familias con niños de primaria.' },
      { time: 'Sábado o domingo', l: 'Para quien quiere la semana libre de pantallas.' },
      { time: 'Horario variable', l: 'En clases individuales, se mueve si cambia la rutina.' }
    ],
    cells: [
      { h3: 'Mentor de siempre', p: 'Su hijo trabaja con la misma persona, que conoce su ritmo y su inglés.' },
      { h3: 'Sin cuentas de chatbot', p: 'Herramientas que no piden registro o programas escritos por el niño.' },
      { h3: 'Pantalla compartida', p: 'El mentor ve el código del niño y lo guía sin escribirlo por él.' },
      { h3: 'Errores bienvenidos', p: 'Cada modelo se pone a prueba hasta encontrar dónde falla.' },
      { h3: 'Resumen a la familia', p: 'Unas líneas tras las clases sobre lo que su hijo logró.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte niños de edad parecida, o solo su hijo con el mentor.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Proyectos de estudiantes de distintas edades, algunos con inteligencia artificial, para mostrar adónde puede llegar un niño que empieza hoy. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, página en inglés.',
  reviewsLede: 'Reseñas que familias y estudiantes dejaron en Google, tal como las escribieron, en inglés.',

  fees: {
    h2: 'Cuánto cuesta el curso de IA para niños',
    lede: 'La mensualidad se muestra en dólares estadounidenses y se cobra con tarjeta; su banco hace la conversión con el tipo de cambio del día del cobro. No hay costo de inscripción.',
    free: ['Clase de prueba gratuita', 'El mentor sugiere por qué curso empezar', 'No se piden datos de tarjeta'],
    group: ['Quince a veinte niños de edades parecidas', 'Dos clases en vivo por semana', 'Un solo mentor durante el curso', 'Pago mensual, se puede dejar cuando quiera'],
    one: ['Solo su hijo y su mentor', 'Ritmo y proyectos a su medida', 'Hora que cambia si la familia lo necesita']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Inteligencia artificial para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan en inglés de principio a fin, por internet y en directo. Los mentores enseñan desde la India, hablan pausado y repiten lo que haga falta. Muchas familias lo ven como una ganancia doble: su hijo descubre la inteligencia artificial y, de paso, pone en práctica el inglés que estudia en el colegio con una persona que conversa con él. Según el EF EPI 2025, el inglés de Lima es "High", y desde 3° de primaria el plan de estudios ya reserva tres horas semanales a ese idioma.' },
      { q: '¿Desde qué edad puede un niño aprender inteligencia artificial?', a: 'A partir de los 6 años, con juegos de clasificar y modelos de imágenes que se entrenan en el navegador. Hacia los 9 o 10 años, en 4° o 5° de primaria, ya puede programar en Python modelos pequeños que aprenden de ejemplos.' },
      { q: '¿Qué es la inteligencia artificial para un niño de 10 años?', a: 'Un programa que aprende de ejemplos en vez de recibir todas las reglas. En clase el niño lo comprueba: le da frases amables y groseras a su programa, este aprende cuánto vale cada palabra y luego intenta adivinar mensajes nuevos.' },
      { q: '¿Mi hijo va a usar ChatGPT?', a: 'No, en primaria no. OpenAI fija 13 años como edad mínima y, por debajo de los 18, pide autorización de los padres. Tampoco usamos Claude, cuya empresa exige mayoría de edad, ni Gemini. La IA del curso es la que el propio niño programa.' },
      { q: '¿Necesita saber programar?', a: 'No. Los cursos para los más pequeños no tienen código escrito, y el curso de Python con IA empieza desde la primera línea. Si su hijo ya programó en Scratch, avanzará más rápido.' },
      { q: '¿Necesita hablar bien inglés?', a: 'No hace falta un nivel alto. El mentor usa frases cortas, repite cuando hace falta y comprueba que el niño entendió. Con las semanas, su hijo pasa de responder con palabras sueltas a explicar sus programas.' },
      { q: '¿Qué computadora necesita?', a: 'Cualquier laptop o computadora de escritorio con navegador actualizado y conexión estable. Un celular no basta para programar. Audífonos con micrófono ayudan a conversar con el mentor.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 9:00 a. m. en Lima son las 7:30 p. m. en la India.' },
      { q: '¿El curso tiene validez en el colegio?', a: 'No tiene valor oficial. Somos una academia privada en línea sin vínculo con el MINEDU ni con colegios, y las notas escolares las pone únicamente el colegio. Lo que sí recibe su hijo al terminar es un certificado de finalización de Modern Age Coders.' },
      { q: '¿Una IA evalúa a mi hijo?', a: 'No. El avance lo evalúa el mentor, una persona. El reglamento peruano de IA de 2025 considera de riesgo alto evaluar a menores con IA en educación cuando la máquina reemplaza al docente, y nosotros no lo hacemos.' },
      { q: '¿Cómo se paga?', a: 'Cada mes, con tarjeta de crédito o débito, en dólares estadounidenses; la conversión la hace el banco emisor. Para la clase de prueba no le pediremos ningún dato de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras páginas que le pueden servir',
    lede: 'Algunas están en inglés, el idioma de las clases.',
    items: [
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de más de cien herramientas de IA, con la cita de cada empresa.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Cómo enseñamos inteligencia artificial a niños en todo el mundo.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Proyectos de inteligencia artificial pensados para primaria, ninguno con registro.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'Si su hijo prefiere empezar creando juegos.' },
      { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Vacaciones útiles 2027 de IA', p: 'Un plan de verano de ocho semanas de inteligencia artificial.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué pasa en una clase en vivo con nosotros.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de IA de prueba para su hijo',
    lede: 'En la clase gratis el mentor conversa con su hijo en inglés sencillo, le pide ordenar unos ejemplos y, según cómo razona, le recomienda uno de los tres cursos de arriba. Usted puede quedarse a mirar.',
    readFirst: '¿Prefiere informarse primero? En la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> están las edades que exige cada servicio de IA, y en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> contamos cómo trabajamos. Las dos están escritas en inglés.',
    note: 'Recuerde: cada clase es en directo, por internet y en inglés, con un mentor desde la India. Si quiere hacernos preguntas antes, por WhatsApp le respondemos también en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'IA para niños', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Razonar, 6 a 9 años' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'Qué es la IA' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano de IA 2027' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' }
      ] }
    ],
    bottomRight: 'Una máquina que dice no sé es más honesta que una que siempre responde'
  },

  personalityCss: `
.ag-root.ag-iar .ag-hero h1 { letter-spacing: -0.006em; max-width: 19ch; }
.ag-root.ag-iar .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-iar .ag-table caption { text-align: left; font-weight: 600; font-style: italic; }
.ag-root.ag-iar .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-iar .ag-steps li { line-height: 1.66; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU Edades normativas table; Ley 28044 (primaria lasts six years); CNEB plan de estudios (primaria Matemática 5 5 4 4 4 4, Inglés 2 2 3 3 3 3) and competency 28; INEI ENAHO TIC bulletin, II Trimestre 2026; DS 016-2024-JUS art. 25.3; DS 115-2025-PCM art. 24.1 b; MINEDU press note of 4 August 2025 (Hackathon 2025); vendor terms in content/ai-tool-age-audit.json (audited 15 July 2026); tzdata. The age bands, the AI column, the comprehension steps, the messages and the Python example are our own.',
    localProject: 'A word-score text classifier written in Python for children of 10 to 12: eight invented English messages, four kind and four unkind; each word gains +1 per kind example and -1 per unkind one; the sum decides kind, unkind or not sure. Run with python3 -I it marks "your drawing is not bad" as unkind (-3) because "not" was never seen; adding "your idea is not bad" to the kind examples makes it kind (1). Lesson family: learned word points, a zero that means "not sure", and a negation the model cannot read.',
    requiredMentions: ['pero el programa lo marcó como grosero', 'Todas valen 0 y la respuesta es', 'Un detector de mensajes amables', 'Primaria en el Perú: edad normativa y horas semanales de Matemática e Inglés por grado', 'los niños de 6 a 11 años son el grupo en edad escolar que menos usa internet: un 68,2%', 'artículo 24.1, literal b', 'no reemplace la evaluación pedagógica humana', 'Students cannot create their own accounts', 'Cinco pasos de comprensión de la IA en primaria', 'Una máquina que dice no sé es más honesta que una que siempre responde'],
    sources: [
      { claim: 'Normative ages: 1° primaria 6 years ... 6° primaria 11 years (at 31 March).', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Primaria weekly hours: Matemática 5 5 4 4 4 4; Inglés 2 2 3 3 3 3; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Internet use 6 to 11 years 68.2%, 12 to 18 years 92.5%, Lima Metropolitana 92.4%; 36.4% of homes with a computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'DS 016-2024-JUS art. 25.3: parental consent for digital services aimed at under-14s.', url: 'https://cdn.www.gob.pe/uploads/document/file/7568330/6426760-decreto-supremo-n-016-2024-jus-reglamento-de-la-ley-n-29733-ley-de-proteccion-de-datos-personales-publicado-nov-2024.pdf' },
      { claim: 'DS 115-2025-PCM (9 September 2025), art. 24.1 b: AI evaluation of children in education is high risk unless complementary to human evaluation.', url: 'https://cdn.www.gob.pe/uploads/document/file/8619777/7133522-decreto-supremo-n-115-2025-pcm.PDF?v=1757422328' },
      { claim: 'MINEDU Hackathon 2025, AI and robotics projects; female student participation up 28% from 2023 to 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'ChatGPT 13+ with parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'Recommending ChatGPT, Gemini or Claude to children of 6 to 12: refused; the table shows each vendor floor and the page says we do not use them with primaria children.',
      'Legal advice on DS 016-2024-JUS or DS 115-2025-PCM: refused; both are quoted as context with a note to consult a lawyer.',
      'Any MINEDU, school or Hackathon connection, or a grade or school credit: none; the page says so.',
      'Real survey data in the example: none; the eight messages are invented and labelled ours.',
      'Claiming the classifier understands language: refused; the page shows it fails on "not bad" and says it only counts words.'
    ]
  }
};

// SHIP: market | Alternativa en inglés a Crack The Code: qué pudimos verificar, idioma y cómo elegir | a weighted decision matrix: sorted(key=), a stable-sort tie, and one weight that flips the winner
'use strict';
// Alternativa a Crack The Code en inglés (ag- Spanish-language door, Peru cluster row PE151, P4 versus, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. No competitor prices, no disparagement, no claim that the
// other provider is worse, no third-party reviews.
// Angle: the parent who types "crack the code peru" (rows.tsv PE151; KEYWORDS.md: brand searches "crack the code peru / campus /
// iniciar sesión / colombia"; spec Appendix B prompt 30 "alternativa a Crack the Code en inglés").
// Spine: what we could and could not verify about Crack The Code (site unreachable 8 and 9 November 2026; one undated course PDF
// of theirs); the honest difference is format and language; whether English-medium suits a given child (EF EPI 2025 by city and
// skill; CNEB English hours); a how-to-choose checklist; a decision-matrix example in Python; time conversions.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/alternativa-a-crack-the-code-en-ingles/):
//  Our DNS and HTTP check (dns-check-2026-11-09.txt): crackthecode.la returned no address (dig empty; curl exit 6) on 9 November
//    2026; MARKET.md records the same on 8 November 2026. crackthecode.com is an unrelated website builder (MARKET.md).
//  Crack The Code course PDF on their own storage, undated (ctc_pdf.txt): "Academia online que empodera a niños y jóvenes a través
//    del código y la tecnología"; "Las clases son en vivo." Text in Spanish. Nothing else from it is used (no figures, no prices).
//  EF EPI 2025 Peru page (facts-market/src/ef_peru.txt and .raw): "#52"; "countryPosition":52,"totalCountries":123,
//    "countryPositionInContinent":8,"totalCountriesInContinent":20; score 519; Reading 540, Listening 499, Writing 514, Speaking 480;
//    cities Lima 555, Cusco 520, Trujillo 519, Arequipa 512, Huancayo 499; band thresholds high 550, moderate 500, low 450.
//  CNEB plan de estudios (FACTS 57, 39, 41, 44): primaria "Inglés 2 2 3 3 3 3"; secundaria JER "Inglés 3 3 3 3 3"; JEC "Inglés 5 5 5
//    5 5"; "horas pedagógicas (45 minutos)".
//  MINEDU normative ages (FACTS 14). INEI ENAHO TIC II Trimestre 2026 (MARKET 1.4): 36,4% of households with a computer.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (acci.py in the scratchpad; the family, courses and scores are invented by us):
//    familia A: [('Curso 1', 31), ('Curso 3', 31), ('Curso 2', 30)] / familia B: [('Curso 2', 40), ('Curso 3', 37), ('Curso 1', 35)] /
//    peso del idioma 1 -> Curso 1 / 2 -> Curso 2 / 3 -> Curso 2 / 4 -> Curso 2
// Lesson family: a weighted decision matrix with a dictionary comprehension, sorted(key=..., reverse=True), a tie that the stable
// sort breaks by insertion order (not by the data), and a sensitivity loop where one weight changes the winner.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Puntajes de 1 a 5 que pone una familia imaginaria a tres cursos ficticios',
  'cursos = {',
  "    'Curso 1': {'idioma': 2, 'horario': 5, 'nivel': 4, 'proyectos': 3},",
  "    'Curso 2': {'idioma': 5, 'horario': 3, 'nivel': 4, 'proyectos': 4},",
  "    'Curso 3': {'idioma': 3, 'horario': 4, 'nivel': 3, 'proyectos': 5},",
  '}',
  '',
  'def ranking(pesos):',
  '    total = {c: sum(pesos[k] * v for k, v in notas.items()) for c, notas in cursos.items()}',
  '    return sorted(total.items(), key=lambda par: par[1], reverse=True)',
  '',
  "pesos_a = {'idioma': 1, 'horario': 3, 'nivel': 2, 'proyectos': 2}",
  "pesos_b = {'idioma': 3, 'horario': 3, 'nivel': 2, 'proyectos': 2}",
  '',
  "print('familia A:', ranking(pesos_a))",
  "print('familia B:', ranking(pesos_b))",
  '',
  'for p in range(1, 5):',
  '    pesos = dict(pesos_a, idioma=p)',
  "    print('peso del idioma', p, '->', ranking(pesos)[0][0])"
].join('\n');

const OUT = [
  "familia A: [('Curso 1', 31), ('Curso 3', 31), ('Curso 2', 30)]",
  "familia B: [('Curso 2', 40), ('Curso 3', 37), ('Curso 1', 35)]",
  'peso del idioma 1 -> Curso 1',
  'peso del idioma 2 -> Curso 2',
  'peso del idioma 3 -> Curso 2',
  'peso del idioma 4 -> Curso 2'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Alternativa en inglés a Crack The Code' },
  slug: 'alternativa-a-crack-the-code-en-ingles',
  code: 'acci',
  accent: '#79395C',
  accentRationale: 'Alternativa a Crack The Code en inglés: a muted mulberry #79395C, calm and neutral rather than combative, for a fair comparison page; contrast 6.68 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Alternativa en inglés a Crack The Code',
  title: 'Crack The Code Perú: una alternativa con clases en inglés',
  description: 'Si busca Crack The Code en Perú y prefiere clases en inglés: qué pudimos verificar de esa academia, cuándo conviene el inglés y cómo elegir con calma.',
  ogDescription: 'Una comparación honesta: lo que pudimos comprobar de Crack The Code en noviembre de 2026, la diferencia real de formato e idioma, el inglés por ciudad según el EF EPI 2025 y una lista para elegir.',
  twitterDescription: 'Alternativa a Crack The Code con clases en vivo y en inglés, de 6 años a adultos, en grupo o individuales. Sin comparar precios ni hablar mal de nadie.',
  pageName: 'Alternativa en inglés a Crack The Code en Perú',
  webPageDescription: 'Página para familias peruanas que buscan Crack The Code y quieren conocer una opción con clases de programación en inglés: qué pudimos verificar de esa academia y qué no, cuál es la diferencia de formato e idioma, cuándo le conviene a un niño aprender en inglés según el EF EPI 2025 y las horas de inglés del CNEB, una lista de preguntas para elegir y un ejemplo en Python de matriz de decisión.',
  courseDescription: 'Clases en vivo y en línea de programación, inteligencia artificial y matemáticas, dictadas solo en inglés por mentores desde la India, para niños desde los 6 años, adolescentes y adultos en todo el Perú, en grupo o individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Alternativa a Crack The Code',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#verificado', label: 'Lo verificado' },
    { href: '#diferencia', label: 'La diferencia' },
    { href: '#ingles', label: '¿Inglés o español?' },
    { href: '#elegir', label: 'Cómo elegir' },
    { href: '#matriz', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Comparación honesta &middot; Clases en inglés',
  h1: 'Una alternativa en inglés a Crack The Code',
  lede: 'Crack The Code es un nombre conocido entre las familias peruanas que buscan programación para sus hijos. Si usted llegó aquí buscándolo, le debemos claridad: no somos esa academia ni tenemos relación con ella. Somos otra opción, con una diferencia concreta: todas nuestras clases son en inglés. Abajo explicamos qué pudimos comprobar, cuándo conviene el inglés y cuándo no.',
  secondaryCta: { href: '#elegir', label: 'Ver la lista para elegir' },
  wa: 'Hola Modern Age Coders, estamos comparando academias de programación para nuestro hijo y nos interesa que las clases sean en inglés. ¿Podemos agendar una clase de prueba gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; comparación sin precios ajenos',
  spec: [
    ['Idioma', 'Todas las clases en inglés'],
    ['Edades', 'Desde 6 años hasta adultos'],
    ['Formato', 'En vivo y en línea, grupal o individual'],
    ['Grupos', 'De quince a veinte, o uno a uno'],
    ['Horario', 'El que elija la familia'],
    ['Relación', 'Ninguna con Crack The Code']
  ],
  capsuleQ: 'Lo que debe saber',
  capsule: 'Si busca una alternativa a Crack The Code con clases en inglés, Modern Age Coders enseña programación, IA y matemáticas en clases en vivo y en inglés, a través de internet y guiadas por mentores desde la India, a niños desde los 6 años, adolescentes y adultos de todo el Perú, en grupo o de forma individual y a la hora que la familia prefiera. No tenemos relación con Crack The Code. Su sitio no respondía el 8 y el 9 de noviembre de 2026, así que no pudimos revisar su oferta actual; lo que sí sabemos es que su material publicado está en español.',

  picks: {
    eyebrow: 'Para empezar',
    h2: 'Tres cursos de entrada, por edad',
    lede: 'Si el inglés es lo que inclina la balanza, estos son los puntos de partida habituales para niños, adolescentes y adultos.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'ACCI / 01', title: 'Programación por bloques para niños', alt: 'Imagen del curso de programación por bloques para niños', note: 'Desde los 6 años: Scratch, juegos y primeras apps, con instrucciones en inglés sencillo y mucho apoyo visual.' },
      { course: 'python-ai-kids-masterclass', code: 'ACCI / 02', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'Hacia los 9 o 10 años, cuando el niño ya escribe con soltura. Código de verdad, juegos y proyectos pequeños de inteligencia artificial.' },
      { course: 'python-complete-masterclass-teens', code: 'ACCI / 03', title: 'Python para adolescentes', alt: 'Imagen del curso completo de Python para adolescentes', note: 'Para escolares de secundaria, desde cero. Una base que sirve para la IA, la universidad y las olimpiadas de informática.' }
    ]
  },

  sections: [
    {
      id: 'verificado',
      eyebrow: 'Lo verificado',
      h2: '¿Qué es Crack The Code y qué pudimos comprobar?',
      lede: 'Es una academia de programación para niños y jóvenes que muchas familias en Perú conocen. Quisimos describirla con sus propias palabras, desde su sitio, y no pudimos: en las dos fechas en que lo intentamos, su dominio no respondía.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que pudimos verificar sobre Crack The Code, y lo que no, en noviembre de 2026', head: ['Qué intentamos revisar', 'Resultado', 'Cómo lo comprobamos'], rows: [
          ['Su sitio web, crackthecode.la', 'No respondió el 8 ni el 9 de noviembre de 2026: el dominio no devolvió ninguna dirección', 'Consulta DNS y petición web desde nuestro equipo, ambas fechas'],
          ['Su oferta actual de cursos, edades y horarios', 'No verificada', 'Sin acceso al sitio no describimos su oferta'],
          ['Una ficha de curso en PDF en su propio almacenamiento, sin fecha', 'Se presenta como "Academia online que empodera a niños y jóvenes a través del código y la tecnología" y dice: "Las clases son en vivo."', 'Archivo descargado y leído completo; está escrito en español'],
          ['El dominio crackthecode.com', 'Corresponde a otro servicio, sin relación con la academia', 'Revisión de su página de inicio el 8 de noviembre de 2026']
        ] },
        { kind: 'source', html: 'Fuente: nuestras propias comprobaciones del 8 y el 9 de noviembre de 2026 y la ficha PDF publicada por Crack The Code, que no indica fecha. No reproducimos precios de terceros ni opiniones de otros sitios.' },
        { kind: 'p', mt: true, html: 'Un sitio caído puede deberse a muchas razones, desde un cambio de dominio hasta un problema técnico pasajero, y no sacamos ninguna conclusión de eso sobre la academia. Si usted ya es cliente o tiene un contacto suyo, lo indicado es preguntarles directamente por su oferta vigente. Esta página no intenta reemplazar esa información: solo explica en qué somos distintos y cómo comparar con criterio.' },
        { kind: 'p', html: 'Por la misma razón no afirmamos estar por encima de nadie. Cada familia valora cosas distintas, y una academia peruana que enseña en español puede ser exactamente lo que un niño necesita. Lo nuestro es otra propuesta, pensada sobre todo para quien quiere programar y usar el inglés a la vez.' }
      ]
    },
    {
      id: 'diferencia',
      eyebrow: 'La diferencia',
      h2: '¿En qué se diferencia Modern Age Coders de una academia que enseña en español?',
      lede: 'En el idioma, sobre todo. Ambas son clases en vivo por internet; la diferencia está en que nosotros enseñamos únicamente en inglés, con mentores que viven en la India, y en el rango de edades, que llega hasta adultos.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que ofrecemos',
          left: [
            'Clases en vivo, por videollamada, siempre en inglés claro y pausado. El mentor se adapta al nivel del estudiante y repite con otras palabras cuando hace falta.',
            'Edades de 6 años a adultos, con cursos de programación, inteligencia artificial y matemáticas. Una misma familia puede inscribir a un hijo de primaria y a un padre que quiere aprender Python.',
            'Grupo de quince a veinte estudiantes de edad parecida, o clases individuales para quien necesita un plan a medida. Horario libre, elegido por la familia.'
          ],
          rightH3: 'Lo que no ofrecemos',
          right: [
            'Clases en castellano. Si su hijo todavía no entiende instrucciones simples en inglés, una academia en español puede ser el paso correcto, y se lo decimos así en la clase de prueba.',
            'Robots ni kits físicos. Enseñamos a programar, no hardware: todo ocurre en la computadora.',
            'Notas, títulos oficiales o convenios con colegios o universidades peruanas. Entregamos un certificado de finalización propio.'
          ] },
        { kind: 'p', mt: true, html: 'Si su búsqueda empezó por los cursos para los más chicos, en la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> mostramos cómo es una primera clase con niños que recién empiezan con el idioma. Para familias de colegios bilingües de Lima tenemos una guía en inglés, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: '¿Inglés o español?',
      h2: '¿Le conviene a mi hijo aprender a programar en inglés?',
      lede: 'Depende de su nivel de inglés y de lo que la familia busca. Para un niño que ya sigue instrucciones sencillas, programar en inglés suma práctica oral a cada clase. Para uno que no entiende nada, primero conviene el idioma o una academia en español.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Nivel de inglés de adultos en Perú y en cinco ciudades, según el EF EPI 2025', head: ['Lugar o habilidad', 'Puntaje EF EPI 2025', 'Banda de EF'], rows: [
          ['Perú, total nacional (puesto 52 de 123 países)', '519', 'Moderada'],
          ['Lima', '555', 'Alta'],
          ['Cusco', '520', 'Moderada'],
          ['Trujillo', '519', 'Moderada'],
          ['Arequipa', '512', 'Moderada'],
          ['Huancayo', '499', 'Baja'],
          ['Perú, solo expresión oral', '480', 'Baja']
        ] },
        { kind: 'source', html: 'Fuente: índice EF EPI 2025, ficha de Perú publicada en ef.com; bandas según los umbrales de EF (alta desde 550, moderada desde 500, baja desde 450). El índice mide a adultos que rindieron la prueba de EF, no a escolares. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Dos datos de la tabla importan para elegir. El primero: Lima es la única ciudad peruana en la banda alta, así que muchas familias limeñas ya tienen en casa a alguien que puede acompañar una clase en inglés. El segundo: en expresión oral el país saca su nota más baja, 480 puntos, contra 540 en lectura. Una clase en vivo, en la que el estudiante explica su código en voz alta, entrena justo esa habilidad.' },
        { kind: 'p', html: 'El colegio da una base. Según el plan de estudios del CNEB, primaria tiene 2 horas semanales de inglés en 1° y 2° grado y 3 horas de 3° a 6°; secundaria tiene 3 horas en la jornada regular y 5 en la jornada completa, y cada hora pedagógica dura 45 minutos. Es suficiente para entender instrucciones básicas, no para conversar con fluidez. Nuestras clases no enseñan inglés como materia, pero lo usan todo el tiempo, y para muchos estudiantes ese uso real es lo que destraba el idioma.' }
      ]
    },
    {
      id: 'elegir',
      eyebrow: 'Cómo elegir',
      h2: '¿Cómo elegir una academia de programación para niños en Perú?',
      lede: 'Con preguntas concretas, hechas a cualquier academia, incluida la nuestra. Si una respuesta no es clara, esa también es una respuesta.',
      body: [
        { kind: 'ol', items: [
          '<strong>¿En qué idioma son las clases, de verdad?</strong> No en los anuncios, sino en la sala. Pida ver una clase de prueba completa en el idioma real del curso.',
          '<strong>¿Quién enseña y cuántos estudiantes hay por clase?</strong> Pregunte si el profesor es siempre el mismo y cuántos niños comparten la sesión. Con nosotros: el mismo mentor y un grupo de quince a veinte, o clase individual.',
          '<strong>¿El niño escribe su propio código?</strong> Pida que le muestren un proyecto hecho por un estudiante de la edad de su hijo, y que el profesor explique qué parte hizo el niño.',
          '<strong>¿Qué pasa con la inteligencia artificial?</strong> Pregunte qué herramientas usan y a qué edad. Ninguna academia seria debería poner a un menor de 13 años frente a un chatbot que exige esa edad.',
          '<strong>¿Qué se necesita en casa?</strong> Para programar hace falta una computadora; el INEI encontró, entre abril y junio de 2026, al menos una en apenas el 36,4% de los hogares peruanos. Pregunte si sirve una laptop compartida y qué sistema operativo piden.',
          '<strong>¿Cuál es el horario, y se puede cambiar?</strong> Las vacaciones, los exámenes bimestrales y los viajes ocurren. Pregunte cómo se recupera una clase perdida.',
          '<strong>¿Cómo se paga y cómo se cancela?</strong> Lea las condiciones antes de pagar: moneda, frecuencia del cobro y qué ocurre si deciden dejar el curso.'
        ] },
        { kind: 'p', mt: true, html: 'No hace falta que una academia gane en las siete preguntas; hace falta que gane en las que a su familia le importan. El ejemplo de la sección siguiente muestra, con un pequeño programa, por qué el orden de prioridades cambia la elección más que los puntajes.' }
      ]
    },
    {
      id: 'matriz',
      tint: 'tint',
      eyebrow: 'Ejemplo en Python',
      h2: '¿Cómo cambia la elección cuando cambian las prioridades? Una matriz de decisión',
      lede: 'Un ejercicio que también usamos en clase con adolescentes. Una familia imaginaria califica tres cursos ficticios del 1 al 5 en cuatro criterios y les da un peso a cada uno. Todos los datos son inventados por nosotros y no representan a ninguna academia real.',
      body: [
        { kind: 'code', label: 'Matriz de decisión con pesos', lang: 'Python', code: PY, note: 'Cada curso recibe la suma de sus notas multiplicadas por el peso de cada criterio. Luego se ordenan de mayor a menor con sorted y una función clave.' },
        { kind: 'code', label: 'Salida del programa', lang: 'Salida', code: OUT, note: 'Lo que imprimió Python 3 al ejecutarlo en nuestro equipo, sin editar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Un empate escondido.</strong> Para la familia A, que casi no valora el idioma, el Curso 1 y el Curso 3 suman 31 cada uno. Python pone primero al Curso 1 solo porque aparece antes en el diccionario: el orden de sorted es estable y respeta el orden original en los empates. El "ganador" no lo eligieron los datos.',
          '<strong>Un peso lo cambia todo.</strong> La familia B tiene las mismas notas y solo sube el peso del idioma de 1 a 3. El Curso 2 pasa del último lugar al primero, con 40 puntos.',
          '<strong>El punto de quiebre.</strong> El bucle final prueba pesos del idioma del 1 al 4. Con 1 gana el Curso 1; desde 2, gana el Curso 2. Basta que el idioma importe un poco para que la elección cambie.',
          '<strong>La lección para elegir.</strong> Antes de comparar academias, conviene que la familia decida qué pesa más: el idioma, el horario, el nivel o los proyectos. Comparar sin esa decisión es ordenar un empate.'
        ] },
        { kind: 'p', mt: true, html: 'En clase, este ejercicio enseña diccionarios, comprensiones, funciones con parámetros y ordenamiento, y sobre todo una idea que sirve fuera de la programación: un resultado que parece objetivo depende de supuestos que alguien eligió. Es el tipo de pensamiento que buscamos en todos nuestros cursos, en lugar de memorizar recetas.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora serían las clases desde Lima?',
      lede: 'A la que la familia elija. La India está diez horas y media por delante de Perú, sin cambio de hora en ningún país.',
      body: [
        { kind: 'p', html: 'Conversiones que calculamos nosotros (Lima en UTC-5 y la India en UTC+5:30): a las 3:30 p. m. limeñas el mentor ya está en las 2:00 a. m. de la fecha siguiente; un domingo a las 10:30 a. m. en Lima es domingo 9:00 p. m. allá; y las 7:00 p. m. de aquí corresponden a las 5:30 a. m. de mañana allá. Solo ilustran la diferencia; cada familia arma su propio calendario de clases.' },
        { kind: 'p', html: 'En el verano peruano de enero a marzo muchas familias aprovechan para empezar. Para esa temporada tenemos una página de <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> con un plan por semanas.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Antes de decidir',
    h2: '¿Qué preguntar en la clase de prueba de cualquier academia?',
    lede: 'Una pauta de cinco momentos para observar durante una clase de prueba, nuestra o de otra academia. La pauta es nuestra.',
    table: { caption: 'Pauta de observación para una clase de prueba (nuestra)', head: ['Momento', 'Qué observar', 'Buena señal'], rows: [
      ['1. Saludo', 'Si el profesor conversa con el niño antes de empezar', 'Le pregunta qué le gusta y qué sabe'],
      ['2. Idioma', 'En qué idioma se dan las instrucciones', 'El niño entiende o pide que repitan sin miedo'],
      ['3. Teclado', 'Quién escribe el código', 'El niño, con guía'],
      ['4. Error', 'Qué pasa cuando algo falla', 'El profesor pregunta en lugar de corregir'],
      ['5. Cierre', 'Qué se lleva el niño', 'Puede explicar lo que hizo con sus palabras']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Vea la prueba completa, sin intervenir. Así sabrá si su hijo sigue el ritmo solo.',
      'Pregunte después a su hijo qué entendió. Su respuesta dice más que cualquier folleto.'
    ] },
    right: { h3: 'Para el niño o adolescente', ps: [
      'No tiene que entender cada palabra en inglés. Tiene que atreverse a preguntar.',
      'Si algo no funciona, eso también es parte de la clase.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más, de primaria a adultos',
    lede: 'Se dictan en directo y en inglés; la familia escoge la modalidad, grupal o individual, y las horas.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 12 años', courses: [
        { code: 'ACCI / PRIM / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'El juego favorito de muchos niños peruanos, programado por ellos mismos.' },
        { code: 'ACCI / PRIM / 02', slug: 'minecraft-coding-for-kids-course', title: 'Programación con Minecraft', blurb: 'De bloques a código dentro de un mundo que ya conocen.' },
        { code: 'ACCI / PRIM / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido numérico en inglés, sin trucos memorizados.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 1° a 5°', courses: [
        { code: 'ACCI / SEC / 01', slug: 'ai-ml-masterclass-teens', title: 'Inteligencia artificial', blurb: 'Modelos propios en Python, con las herramientas que permite su edad.' },
        { code: 'ACCI / SEC / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'Desarrollo de apps', blurb: 'Aplicaciones móviles reales, de la idea al teléfono.' },
        { code: 'ACCI / SEC / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de olimpiada', blurb: 'Razonamiento con problemas originales, en inglés.' }
      ] },
      { num: 'III', h3: 'Universidad y adultos', sub: 'Desde los 18', courses: [
        { code: 'ACCI / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python de cero a avanzado', blurb: 'Para quien nunca programó y quiere hacerlo en inglés.' },
        { code: 'ACCI / ADULT / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java para la universidad', blurb: 'Del Java básico a Spring Boot, con proyectos.' },
        { code: 'ACCI / ADULT / 03', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos', blurb: 'Excel, SQL y Python para el trabajo.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Clases',
    h2: '¿Cómo son nuestras clases en vivo en inglés?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Media tarde', l: 'Al volver del colegio, antes de las tareas.' },
      { time: 'Domingo temprano', l: 'Para familias con semanas muy cargadas.' },
      { time: 'Noche', l: 'Para adolescentes mayores y adultos.' }
    ],
    cells: [
      { h3: 'Inglés pausado', p: 'El mentor habla despacio y comprueba que se entendió.' },
      { h3: 'Código propio', p: 'El estudiante escribe; el mentor guía con preguntas.' },
      { h3: 'Sin hardware', p: 'Todo se hace en la computadora, sin kits que comprar.' },
      { h3: 'Mismo mentor', p: 'Una persona que conoce el ritmo de su hijo.' },
      { h3: 'Familia informada', p: 'Avances y proyectos compartidos con los padres.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte estudiantes, o uno a uno.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros estudiantes',
  projectsLede: 'Trabajos reales de niños, adolescentes y adultos. En <a class="ag-inline-link" href="/student-labs">Student labs</a> hay más, todos en inglés.',
  reviewsLede: 'Reseñas que dejaron familias en nuestro perfil de Google, en su idioma original.',

  fees: {
    h2: '¿Cuánto cuestan nuestras clases?',
    lede: 'Publicamos solo nuestras propias cuotas, en dólares estadounidenses; se cobran con tarjeta y el banco de la familia convierte el monto. No comparamos con tarifas de otras academias.',
    free: ['Clase de prueba sin costo', 'Recomendación de curso al final', 'Sin datos de pago'],
    group: ['Grupo de quince a veinte de edad similar', 'Dos clases en vivo por semana', 'El mismo mentor', 'Mes a mes'],
    one: ['Clases solo para su hijo', 'Ritmo y proyectos a medida', 'Horario flexible']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Alternativa a Crack The Code: preguntas frecuentes',
    items: [
      { q: '¿Modern Age Coders es parte de Crack The Code?', a: 'No. Somos una empresa distinta y no tenemos ninguna relación con Crack The Code. Esta página existe porque muchas familias buscan su nombre y algunas prefieren clases en inglés.' },
      { q: '¿Las clases son en español?', a: 'No: enseñamos exclusivamente en inglés, siempre en directo y a través de internet, con mentores desde la India que hablan con calma y se ajustan al nivel de cada estudiante. Para muchas familias es justo el atractivo: programación y práctica de inglés en la misma clase, en una ciudad como Lima, que el EF EPI 2025 ubica en la banda alta. Puede escribirnos por WhatsApp en castellano para coordinar.' },
      { q: '¿Qué ofrece hoy Crack The Code?', a: 'No lo sabemos con certeza: su sitio no respondía el 8 y el 9 de noviembre de 2026. Una ficha de curso suya en PDF, sin fecha, la presenta como academia online para niños y jóvenes con clases en vivo, en español. Le sugerimos preguntarles directamente.' },
      { q: '¿Son más baratos o más caros que Crack The Code?', a: 'No publicamos ni comparamos precios de otras academias. Las cuotas propias aparecen más arriba, expresadas en moneda estadounidense, y la clase de prueba no se cobra.' },
      { q: '¿Desde qué edad aceptan estudiantes?', a: 'Desde los 6 años, la edad normativa de 1° de primaria según el MINEDU, y sin límite superior: también enseñamos a adolescentes y adultos.' },
      { q: '¿Mi hijo necesita saber inglés?', a: 'Necesita entender instrucciones sencillas o tener ganas de intentarlo. Durante la prueba gratuita el mentor lo comprueba y, si el idioma sería una barrera, se lo decimos con franqueza.' },
      { q: '¿Usan robots o kits?', a: 'No. Enseñamos programación en la computadora, sin hardware. Hace falta una laptop o PC con internet.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por referencia, las 10:30 a. m. de un domingo en Lima son las 9:00 p. m. en la India.' },
      { q: '¿Entregan certificado?', a: 'Sí: al cerrar cada curso, Modern Age Coders emite una constancia de finalización propia. No es un documento oficial del MINEDU ni de ninguna universidad.' },
      { q: '¿Cómo se paga?', a: 'Una vez al mes, con tarjeta, en dólares estadounidenses; la conversión la hace el banco que emitió la tarjeta. La prueba no pide datos de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Siga comparando con calma',
    lede: 'Páginas nuestras que ayudan a decidir, en castellano o en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases para niños, en inglés', p: 'Cómo es la primera clase para un niño que recién empieza con el idioma.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Guía en inglés pensada para hogares limeños con colegio bilingüe o internacional.' },
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles virtuales en inglés', p: 'Un verano de programación con práctica del idioma.' },
      { href: '/codingal-alternative', label: 'Codingal alternative', p: 'Otra comparación nuestra, en inglés, con el mismo criterio.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método, explicado paso a paso.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo nuestro para Perú en una página.' }
    ]
  },

  start: {
    h2: 'Compare con una clase de prueba gratis',
    lede: 'Nada compara tan bien como ver una clase. En la nuestra, el mentor conversa en inglés con su hijo, le propone un pequeño reto y al final le dice con franqueza si el idioma será un apoyo o una barrera.',
    readFirst: 'Antes de agendar puede revisar la <a class="ag-inline-link" href="#elegir">lista de preguntas para elegir</a> y llevarla a cualquier clase de prueba, también a la nuestra.',
    note: 'Las clases son siempre en directo, por internet y en inglés, desde la India. La coordinación por WhatsApp puede ser en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños, en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Colegios bilingües, Lima' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Verano en inglés' }
      ] }
    ],
    bottomRight: 'Decida primero qué pesa más; después compare'
  },

  personalityCss: `
.ag-root.ag-acci .ag-hero h1 { max-width: 18ch; letter-spacing: -0.01em; }
.ag-root.ag-acci .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-acci .ag-table caption { text-align: left; font-weight: 700; }
.ag-root.ag-acci .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-acci .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Our own DNS and HTTP checks of crackthecode.la (8 and 9 November 2026); Crack The Code\'s undated course PDF on its own storage; EF EPI 2025 Peru page (national score and rank, five cities, speaking and reading); CNEB plan de estudios (English hours in primaria and secundaria, JER and JEC; 45-minute teaching hour); MINEDU normative ages; INEI ENAHO TIC bulletin, II Trimestre 2026; tzdata. The checklist, the observation guide and the decision-matrix example are our own.',
    localProject: 'A Python decision matrix for choosing a course: an invented family scores three fictitious courses from 1 to 5 on language, timetable, level and projects; with language weight 1 the result is [(Curso 1, 31), (Curso 3, 31), (Curso 2, 30)], a tie broken only by insertion order because sorted is stable; with weight 3 Curso 2 wins with 40; a loop shows the winner flips from weight 2 onwards. Run with python3 -I; output pasted unedited. No real academy is scored.',
    requiredMentions: ["familia A: [('Curso 1', 31), ('Curso 3', 31), ('Curso 2', 30)]", "familia B: [('Curso 2', 40)", 'Matriz de decisión con pesos', 'Lo que pudimos verificar sobre Crack The Code, y lo que no, en noviembre de 2026', 'Academia online que empodera a niños y jóvenes a través del código y la tecnología', 'Nivel de inglés de adultos en Perú y en cinco ciudades, según el EF EPI 2025', 'Perú, solo expresión oral', 'Pauta de observación para una clase de prueba (nuestra)', 'Decida primero qué pesa más; después compare'],
    sources: [
      { claim: 'Crack The Code course sheet (undated): "Academia online que empodera a niños y jóvenes a través del código y la tecnología"; "Las clases son en vivo."', url: 'https://ctc-web-statics-prod.s3.amazonaws.com/multimedia/pdf/courses/5ff03462930046f0a0d839f48a0514c6.pdf' },
      { claim: 'crackthecode.la did not resolve on 8 and 9 November 2026 (our check).', url: 'https://crackthecode.la/' },
      { claim: 'EF EPI 2025: Peru 519, rank 52 of 123; Lima 555, Cusco 520, Trujillo 519, Arequipa 512, Huancayo 499; speaking 480, reading 540.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'CNEB weekly English hours: primaria 2 2 3 3 3 3; secundaria JER 3, JEC 5; teaching hour 45 minutes.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative age 6 for 1° primaria.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: '36.4% of households with at least one computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'Any Crack The Code price, student count, group size, kit, certificate or university link: not printed; their site was unreachable and the brief allows only the general category and their own words on format.',
      'That we are better, cheaper or more reliable than Crack The Code: refused; the page says each family weighs different things.',
      'Third-party reviews or ratings of Crack The Code: none used.',
      'A conclusion from their site being down: refused; the page says a down site can have many causes.',
      'Scoring a real academy in the decision matrix: refused; the courses and scores are fictitious.'
    ]
  }
};

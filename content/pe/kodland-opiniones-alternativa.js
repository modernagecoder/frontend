// SHIP: market | Kodland: opiniones y confianza, contado desde sus propias páginas, y una opción en inglés | round() rounds half to even: two invented review lists average 4.5 and show 4; Decimal ROUND_HALF_UP shows 5
'use strict';
// Kodland opiniones y alternativa (ag- Spanish-language door, Peru cluster row PE152, P4 versus, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. Strictly fair: Kodland is described only from its own
// pages fetched raw on 9 November 2026; no Kodland prices, no ratings, no third-party reviews, no claim that it is worse or unsafe.
// Angle: the Peruvian parent who types "kodland es confiable", "kodland opiniones" or "kodland precios" (KEYWORDS.md section 7:
// autocomplete shows "kodland latinoamerica", "es confiable", "precios", "denuncias": trust questions).
// Spine: what Kodland says about itself (ages, formats, frequency, equipment, company, legal basis, refunds); how a family can
// check any online school itself; how to read online opinions (with a rounding example); the honest difference (their Spanish
// edition, our English-only teaching, ages 6 to adult); whether English suits the child (EF EPI 2025, CNEB English hours).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/kodland-opiniones-alternativa/):
//  kodland.org/es/ (kodland-es.html, kodland-es.txt, fetched 2026-11-09): "Escuela online" "para niños" "entre 5 y 17 años" (three
//    elements); Roblox card "8–12 años", "40 clases", "1-1", "Grupos pequeños"; Python card "13+ años", "40 clases"; trial "Gratis",
//    "1-1 con tutor", "60 min"; "Edades 8 a 13" Matemáticas; "De programación por bloques a código en JavaScript o Python.";
//    tutor profiles describe themselves as from Colombia and Argentina; footer "KODLAND PTE. LTD." "SINGAPORE (049422)".
//  kodland.org/es/faq and its FAQ bundle (kodland-faq.html, kodland-faqContent.js, Spanish block "es:"): "Las clases grupales se
//    dan una vez a la semana en el horario elegido."; "Las clases se dan en una PC de escritorio o laptop, las tablets no son
//    adecuadas."; "Operamos bajo un acuerdo de oferta pública"; "Kodland opera en varios países y actualmente enseña a miles de
//    estudiantes en todo el mundo."; the refund answer says a refund is possible (not quoted: it uses "tú"); the trust answer points
//    to an independent review site and a free trial class.
//  EF EPI 2025 Peru page (facts-market/src/ef_peru.txt): Peru 519; Lima 555; speaking 480; listening 499; band thresholds.
//  CNEB (FACTS 57, 39, 41): primaria "Inglés 2 2 3 3 3 3"; secundaria JER "Inglés 3 3 3 3 3"; JEC "Inglés 5 5 5 5 5".
//  INEI ENAHO TIC II Trimestre 2026 (MARKET 1.4): 36,4% of households with at least one computer.
//  MINEDU normative ages (FACTS 14): 1° primaria 6, 5° secundaria 16.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (koa.py in the scratchpad; the star lists are invented by us):
//    lista 1 promedio 4.5 | round(): 4 | peor: 4 / lista 2 promedio 4.5 | round(): 4 | peor: 3 /
//    round de 0.5, 1.5, 2.5, 3.5, 4.5: [0, 2, 2, 4, 4] / mitad hacia arriba: [1, 2, 3, 4, 5] / lista 1 con la otra regla: 5
// Lesson family: Python's round() uses round-half-to-even (banker's rounding); Decimal with ROUND_HALF_UP gives school rounding;
// two lists with the same mean can hide different worst cases (min). Applied to reading star averages.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'from decimal import Decimal, ROUND_HALF_UP',
  '',
  '# Estrellas de dos listas de opiniones inventadas por nosotros',
  'lista_1 = [5, 4, 5, 4]',
  'lista_2 = [5, 5, 4, 3, 5, 5]',
  '',
  "for nombre, estrellas in [('lista 1', lista_1), ('lista 2', lista_2)]:",
  '    promedio = sum(estrellas) / len(estrellas)',
  "    print(nombre, 'promedio', promedio, '| round():', round(promedio), '| peor:', min(estrellas))",
  '',
  "print('round de 0.5, 1.5, 2.5, 3.5, 4.5:', [round(x) for x in [0.5, 1.5, 2.5, 3.5, 4.5]])",
  '',
  'def redondear_arriba(x):',
  "    return int(Decimal(str(x)).quantize(Decimal('1'), rounding=ROUND_HALF_UP))",
  '',
  "print('mitad hacia arriba:', [redondear_arriba(x) for x in [0.5, 1.5, 2.5, 3.5, 4.5]])",
  "print('lista 1 con la otra regla:', redondear_arriba(sum(lista_1) / len(lista_1)))"
].join('\n');

const OUT = [
  'lista 1 promedio 4.5 | round(): 4 | peor: 4',
  'lista 2 promedio 4.5 | round(): 4 | peor: 3',
  'round de 0.5, 1.5, 2.5, 3.5, 4.5: [0, 2, 2, 4, 4]',
  'mitad hacia arriba: [1, 2, 3, 4, 5]',
  'lista 1 con la otra regla: 5'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Kodland: opiniones y alternativa' },
  slug: 'kodland-opiniones-alternativa',
  code: 'koa',
  accent: '#671A48',
  accentRationale: 'Kodland opiniones y alternativa: a deep berry #671A48, steady and unshowy, for a page that weighs evidence rather than sells against anyone; contrast 9.37 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Kodland: opiniones y una alternativa en inglés',
  title: 'Kodland opiniones: ¿es confiable? Y una opción en inglés',
  description: '¿Kodland es confiable? Lo que dice Kodland de sí misma en su web, cómo verificar cualquier escuela online y cómo leer opiniones. Y una opción con clases en inglés.',
  ogDescription: 'Una página justa sobre Kodland: edades, formatos y empresa según sus propias páginas, siete comprobaciones que puede hacer cualquier familia peruana y la diferencia real con nuestras clases en inglés.',
  twitterDescription: 'Kodland, contado con sus propias palabras, y cómo elegir con criterio. Nuestra opción: clases en vivo, en inglés, de 6 años a adultos.',
  pageName: 'Kodland: opiniones, confianza y una alternativa en inglés',
  webPageDescription: 'Página para familias peruanas que se preguntan si Kodland es confiable o buscan opiniones: qué dice Kodland de sí misma en su sitio en español (edades, formatos, frecuencia, equipo necesario, empresa y condiciones), cómo comprobar por cuenta propia cualquier escuela de programación en línea, cómo leer las opiniones con criterio y en qué se diferencian nuestras clases, que son en vivo y en inglés.',
  courseDescription: 'Clases en vivo y en línea de programación, inteligencia artificial y matemáticas, dictadas solo en inglés por mentores desde la India, para niños desde los 6 años, adolescentes y adultos en todo el Perú, en grupo o individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Kodland: opiniones y alternativa',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#kodland', label: 'Qué dice Kodland' },
    { href: '#confiable', label: '¿Es confiable?' },
    { href: '#opiniones', label: 'Leer opiniones' },
    { href: '#diferencia', label: 'La diferencia' },
    { href: '#ingles', label: 'Inglés' }
  ],
  eyebrow: 'Perú &middot; Kodland &middot; Opiniones y alternativa',
  h1: 'Kodland: opiniones, confianza y una alternativa en inglés',
  lede: 'Antes de pagar una escuela en línea para un hijo, es razonable preguntarse si es seria. Esta página no responde por Kodland ni la juzga: muestra lo que Kodland publica sobre sí misma, cómo puede usted verificar eso y cualquier otra escuela, y, si le interesa, en qué se diferencian nuestras clases, que son todas en inglés.',
  secondaryCta: { href: '#confiable', label: 'Ver cómo verificar una escuela' },
  wa: 'Hola Modern Age Coders, estamos comparando escuelas de programación en línea y nos interesa una con clases en inglés. ¿Podemos agendar una clase de prueba gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; sin reseñas ajenas ni precios ajenos',
  spec: [
    ['Relación con Kodland', 'Ninguna: somos otra empresa'],
    ['Nuestro idioma', 'Solo inglés, en todas las clases'],
    ['Edades', 'De 6 años a adultos'],
    ['Formato', 'En vivo por internet, grupal o individual'],
    ['Grupos', 'Quince a veinte, o uno a uno'],
    ['Horario', 'Libre, lo elige la familia']
  ],
  capsuleQ: 'En resumen',
  capsule: 'Kodland se presenta en su sitio en español como una escuela online de programación y diseño para niños de 5 a 17 años, con grupos pequeños o clases 1-1 y una clase de prueba gratuita; su empresa figura como KODLAND PTE. LTD., en Singapur. No evaluamos su calidad. Como alternativa, Modern Age Coders ofrece clases en vivo y en inglés de código, inteligencia artificial y matemática, a través de internet y con mentores que trabajan desde la India, para personas de 6 años en adelante en cualquier lugar del Perú, en grupo o individuales y en el horario que usted elija.',

  picks: {
    eyebrow: 'Nuestros cursos',
    h2: 'Tres cursos para empezar en inglés',
    lede: 'Uno para los más chicos, uno para preadolescentes y uno para secundaria. En todos, el estudiante escribe y explica su propio código.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'KOA / 01', title: 'Scratch desde cero', alt: 'Imagen del curso de Scratch para niños', note: 'Desde los 6 años. Juegos y animaciones con bloques, explicados en inglés sencillo y con mucho apoyo visual.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'KOA / 02', title: 'Juegos en Roblox con Luau', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Para niños de primaria que ya leen con soltura. Programan las reglas de su propio juego y explican cada una.' },
      { course: 'python-complete-masterclass-teens', code: 'KOA / 03', title: 'Python en secundaria', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 1° a 5° de secundaria, sin experiencia previa. Les abre la puerta a la inteligencia artificial y a cursos universitarios de ingeniería.' }
    ]
  },

  sections: [
    {
      id: 'kodland',
      eyebrow: 'Qué dice Kodland',
      h2: '¿Qué es Kodland, según su propio sitio?',
      lede: 'Una escuela en línea de programación, diseño, dibujo y matemáticas para niños y adolescentes. Lo que sigue sale de sus páginas en español, descargadas el 9 de noviembre de 2026, y no de otras fuentes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Kodland descrita con sus propias palabras, según kodland.org/es al 9 de noviembre de 2026', head: ['Tema', 'Lo que publica Kodland', 'Dónde aparece'], rows: [
          ['Edades', '"Escuela online para niños entre 5 y 17 años"', 'Portada en español'],
          ['Formatos', '"Grupos pequeños" y "1-1"; la clase de prueba figura como "Gratis", "1-1 con tutor", "60 min"', 'Tarjetas de cursos'],
          ['Cursos de ejemplo', 'Roblox para 8 a 12 años y Python para "13+ años", con "40 clases" cada uno', 'Tarjetas de cursos'],
          ['Ruta de programación', '"De programación por bloques a código en JavaScript o Python."', 'Sección de método'],
          ['Frecuencia', '"Las clases grupales se dan una vez a la semana en el horario elegido."', 'Preguntas frecuentes'],
          ['Equipo necesario', '"Las clases se dan en una PC de escritorio o laptop, las tablets no son adecuadas."', 'Preguntas frecuentes'],
          ['Empresa', '"KODLAND PTE. LTD.", con dirección en Singapur', 'Pie de página'],
          ['Condiciones', '"Operamos bajo un acuerdo de oferta pública"; también dice que se puede pedir reembolso', 'Preguntas frecuentes']
        ] },
        { kind: 'source', html: 'Fuente: kodland.org/es y kodland.org/es/faq, descargados en bruto el 9 de noviembre de 2026; las citas son textuales. La portada reparte la primera frase en tres líneas de diseño. No incluimos precios, calificaciones ni testimonios. Kodland puede cambiar su oferta: confirme con ella antes de decidir.' },
        { kind: 'p', mt: true, html: 'Dos datos de esa tabla le sirven a cualquier familia peruana. Uno: Kodland, como nosotros, pide una computadora, no una tablet ni un celular. En Perú eso no es un detalle menor: según el boletín TIC del INEI del segundo trimestre de 2026, el 36,4% de los hogares tenía al menos una computadora. Dos: su sitio en español presenta tutores que se describen como de Colombia y de Argentina, y su ruta de programación va de bloques a JavaScript o Python. Es una propuesta pensada en castellano.' },
        { kind: 'p', html: 'Según sus preguntas frecuentes, Kodland "opera en varios países y actualmente enseña a miles de estudiantes en todo el mundo". No tenemos forma de comprobar esa cifra ni la nuestra le sirve a usted para evaluarla; por eso, en lugar de compararnos en números, la sección siguiente propone cómo verificar cualquier escuela por cuenta propia.' }
      ]
    },
    {
      id: 'confiable',
      eyebrow: '¿Es confiable?',
      h2: '¿Kodland es confiable? Cómo verificar cualquier escuela de programación en línea',
      lede: 'No nos corresponde dar un veredicto sobre otra empresa. Sí podemos sugerir siete comprobaciones que cualquier familia puede hacer, con Kodland, con nosotros o con cualquier otra escuela, antes de pagar.',
      body: [
        { kind: 'ol', items: [
          '<strong>Identifique a la empresa.</strong> Busque en el pie de página el nombre legal y la dirección. Kodland muestra los suyos; nosotros también. Desconfíe de cualquier escuela que no diga quién es.',
          '<strong>Lea las condiciones antes de pagar.</strong> Kodland dice operar bajo un acuerdo de oferta pública publicado en su sitio. Busque en cualquier caso qué se compra exactamente: cuántas clases, en qué plazo y qué pasa con las que no se usan.',
          '<strong>Pida la política de devolución por escrito.</strong> Que exista un reembolso no basta; importa en qué casos, en qué plazo y por qué medio.',
          '<strong>Tome la clase de prueba completa.</strong> Kodland la ofrece gratis y de forma individual; nosotros también ofrecemos una gratuita. Quédese toda la sesión y observe quién escribe el código, si su hijo o el tutor.',
          '<strong>Pregunte quién será el profesor.</strong> Si es la misma persona todo el curso, cuántos estudiantes tendrá el grupo y cómo se reemplaza a un tutor que se va.',
          '<strong>Revise cómo se paga.</strong> Moneda, frecuencia del cargo, si es una renovación automática y cómo se cancela. Un pago en dólares lo convierte su banco, y conviene saberlo de antemano.',
          '<strong>Pregunte qué datos guardan de su hijo.</strong> Si graban las clases, quién las ve y por cuánto tiempo. Es una pregunta legítima ante cualquier servicio en línea para menores.'
        ] },
        { kind: 'p', mt: true, html: 'Si una escuela responde con claridad a las siete, ya tiene una base razonable para decidir. Si alguna respuesta es evasiva, esa es la información que buscaba. Nada de esto supone que Kodland responda mal: es la misma lista que le sugerimos usar con nosotros.' }
      ]
    },
    {
      id: 'opiniones',
      tint: 'tint',
      eyebrow: 'Leer opiniones',
      h2: '¿Dónde leer opiniones sobre Kodland y cómo interpretarlas?',
      lede: 'En sitios de reseñas independientes, en grupos de padres y, sobre todo, en la experiencia directa de una clase de prueba. La propia página de Kodland remite a las familias a un sitio de reseñas independiente. Nosotros no reproducimos opiniones de terceros, pero sí podemos enseñar a leer un promedio de estrellas.',
      body: [
        { kind: 'code', label: 'Dos promedios iguales, dos historias distintas', lang: 'Python', code: PY, note: 'Las dos listas de estrellas son inventadas por nosotros. El programa calcula el promedio, lo redondea con round() y con la regla escolar de "la mitad hacia arriba", y muestra la peor nota de cada lista.' },
        { kind: 'code', label: 'Salida en pantalla', lang: 'Salida', code: OUT, note: 'Copiado sin tocar de lo que mostró Python 3 al ejecutar el archivo en nuestro equipo.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Un 4,5 que se muestra como 4.</strong> Ambas listas promedian 4,5, pero round() de Python devuelve 4. No es un error: Python redondea las mitades al número par más cercano, el llamado redondeo bancario, para que los redondeos no se inclinen siempre hacia arriba.',
          '<strong>La regla del colegio da otro número.</strong> Con Decimal y ROUND_HALF_UP, 4,5 se convierte en 5. La misma lista puede verse como 4 o como 5 estrellas según qué regla elija quien programa la página.',
          '<strong>El promedio esconde lo peor.</strong> La lista 2 tiene el mismo promedio que la 1, pero incluye un 3. Si a usted le preocupan las malas experiencias, lea las opiniones de menor puntaje, no el número grande.',
          '<strong>La lección para cualquier escuela.</strong> Una calificación resumida depende de decisiones técnicas que el lector no ve. Mire cuántas opiniones hay, de qué fechas son, qué critican las negativas y si la empresa responde.'
        ] },
        { kind: 'p', mt: true, html: 'En clase usamos este ejercicio con adolescentes para enseñar funciones, el módulo decimal y una idea que va más allá del código: un número publicado nunca es neutral, siempre hay una regla detrás. Preferimos que nuestros estudiantes aprendan a preguntar por esa regla antes que a creer o descartar un número por reflejo.' }
      ]
    },
    {
      id: 'diferencia',
      eyebrow: 'La diferencia',
      h2: '¿Qué cambia entre Kodland y Modern Age Coders?',
      lede: 'La diferencia principal es el idioma. Su sitio en español presenta una escuela en castellano para niños de 5 a 17 años. Nosotros enseñamos solo en inglés, y a cualquier edad desde los 6 años, sin tope.',
      body: [
        { kind: 'two',
          leftH3: 'Cómo enseñamos',
          left: [
            'Sesiones por videollamada, en tiempo real y en inglés, a cargo de mentores radicados en la India. Si el estudiante se pierde, el mentor baja la velocidad y lo dice de otra forma.',
            'Un grupo de quince a veinte chicos de edades cercanas o, si se prefiere, sesiones uno a uno. Los días y las horas los pone la familia.',
            'Código, IA y matemática, con cursos de IB e IGCSE para colegios internacionales y cursos para universitarios y adultos.'
          ],
          rightH3: 'Lo que conviene saber antes',
          right: [
            'No enseñamos en castellano. Si su hijo no sigue todavía instrucciones simples en inglés, una escuela en español puede ser la opción adecuada por ahora, y se lo diremos en la prueba.',
            'Nos concentramos en código, IA y matemáticas. Kodland, según su portada, también ofrece cursos de dibujo y diseño gráfico.',
            'No ponemos notas ni otorgamos títulos oficiales; quien completa un curso recibe nuestra constancia de finalización.'
          ] },
        { kind: 'p', mt: true, html: 'Para un niño que ya entiende algo de inglés, describimos una primera sesión típica en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños, en inglés</a>. Para adolescentes interesados en inteligencia artificial, el <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a> explica qué herramientas permite cada edad.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés',
      h2: '¿Puede un niño peruano seguir clases de programación en inglés?',
      lede: 'Muchos sí, sobre todo en Lima o si estudian en un colegio con buena carga de inglés. Para otros, el idioma sería una barrera, y conviene reconocerlo antes de inscribirse.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Horas semanales de inglés en el plan de estudios peruano, por nivel y jornada', head: ['Nivel', '1° y 2° grado', '3° grado', 'De 4° grado al último'], rows: [
          ['Primaria', '2', '3', '3'],
          ['Secundaria, jornada regular (JER)', '3', '3', '3'],
          ['Secundaria, jornada completa (JEC)', '5', '5', '5']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, planes de estudio del CNEB para primaria y secundaria, que fijan la hora pedagógica en 45 minutos. Consultado en noviembre de 2026. Los colegios privados y bilingües pueden dar más horas que este mínimo.' },
        { kind: 'p', mt: true, html: 'En adultos, el EF EPI 2025 sitúa a Perú en 519 puntos, nivel moderado, y a Lima en 555, nivel alto; la escucha del país marca 499 y la expresión oral 480. Para un niño, eso se traduce en algo práctico: si en casa alguien entiende inglés y el colegio da al menos tres horas semanales, una clase en inglés suele funcionar desde el inicio. Si no, puede funcionar con un mentor paciente, pero el primer mes será más lento.' },
        { kind: 'p', html: 'Para el verano de enero a marzo tenemos una propuesta que combina ambas cosas, programación y práctica del idioma: <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a>.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿Cómo funcionan los horarios con mentores en la India?',
      lede: 'La familia elige la hora. Entre Perú y la India hay diez horas y media de diferencia durante todo el año.',
      body: [
        { kind: 'p', html: 'Conversiones calculadas por nosotros (Perú UTC-5, India UTC+5:30): las 4:30 p. m. en Lima son las 3:00 a. m. siguientes en la India; las 9:30 a. m. de un sábado en Lima son las 8:00 p. m. de ese sábado en la India; y las 8:00 p. m. limeñas son las 6:30 a. m. del día siguiente allá. Nuestros mentores trabajan en turnos que cubren esas horas; no hay un calendario impuesto.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Primer mes',
    h2: '¿Qué debería ver una familia en el primer mes de cualquier escuela?',
    lede: 'Cinco señales que proponemos observar durante las primeras cuatro semanas, en cualquier escuela de programación. La lista es nuestra.',
    table: { caption: 'Cinco señales para el primer mes en una escuela de programación (nuestras)', head: ['Semana', 'Señal', 'Cómo comprobarla'], rows: [
      ['1', 'El niño sabe quién es su profesor', 'Pregúntele el nombre y qué le enseñó'],
      ['1 y 2', 'Escribe su propio código', 'Pídale que le muestre algo hecho por él'],
      ['2 y 3', 'Entiende sus errores', 'Pregúntele qué falló y cómo lo arregló'],
      ['3', 'La escuela informa a la familia', 'Revise si recibió algún avance o comentario'],
      ['4', 'Quiere seguir', 'Pregúntele si desea la próxima clase, sin sugerirle la respuesta']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Una buena primera clase no garantiza el curso: mire el primer mes completo.',
      'Las respuestas de su hijo valen más que cualquier calificación en estrellas.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Si no entiende algo, pregúntelo en la clase; para eso está el profesor.',
      'Un error que usted encuentra solo vale más que un ejercicio perfecto copiado.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos en inglés',
    lede: 'Organizados por etapa escolar; en directo, con la opción de grupo o de clase individual.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'Primeros pasos', courses: [
        { code: 'KOA / PRIM / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft y código', blurb: 'De bloques a código real dentro de un mundo conocido.' },
        { code: 'KOA / PRIM / 02', slug: 'kids-ai-web-development-course', title: 'Páginas web para niños', blurb: 'Su primera página publicada, hecha a mano.' },
        { code: 'KOA / PRIM / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco y cálculo mental', blurb: 'Matemática con las manos, en inglés.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Proyectos más largos', courses: [
        { code: 'KOA / SEC / 01', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Juegos con Godot', blurb: 'Videojuegos 2D y 3D con un motor libre.' },
        { code: 'KOA / SEC / 02', slug: 'mysql-mastery-for-teens', title: 'Bases de datos con SQL', blurb: 'Guardar y consultar datos como en las apps reales.' },
        { code: 'KOA / SEC / 03', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Para colegios con programa Cambridge.' }
      ] },
      { num: 'III', h3: 'Más allá del colegio', sub: 'Universidad y adultos', courses: [
        { code: 'KOA / ADULT / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java profesional', blurb: 'Orientación a objetos, colecciones y luego Spring Boot.' },
        { code: 'KOA / ADULT / 02', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'Interfaces web modernas, paso a paso.' },
        { code: 'KOA / ADULT / 03', slug: 'ai-ml-masterclass-complete-college', title: 'IA y machine learning', blurb: 'Python, aprendizaje profundo e IA generativa.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Clases',
    h2: '¿Cómo es una clase nuestra, en vivo y en inglés?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Salida del colegio', l: 'Lo que más piden las familias con hijos en primaria.' },
      { time: 'Sábado', l: 'Una opción tranquila para la mañana del fin de semana.' },
      { time: 'Después de la cena', l: 'Encaja con estudiantes de 5° de secundaria y con adultos.' }
    ],
    cells: [
      { h3: 'Inglés claro', p: 'Frases cortas, palabras técnicas explicadas y paciencia.' },
      { h3: 'El niño escribe', p: 'El teclado lo usa el estudiante, no el mentor.' },
      { h3: 'Errores trabajados', p: 'Cada fallo se rastrea hasta entender la causa.' },
      { h3: 'Un solo mentor', p: 'La misma persona durante todo el curso.' },
      { h3: 'Familia al día', p: 'Avances compartidos con los padres.' },
      { h3: 'Dos formatos', p: 'Grupo de quince a veinte o uno a uno.' }
    ]
  },

  projectsH2: 'Algunos proyectos de estudiantes',
  projectsLede: 'Hechos y explicados por sus autores, de varias edades. Más ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a>, la galería en inglés.',
  reviewsLede: 'Reseñas de nuestro propio perfil de Google, sin editar y en su idioma.',

  fees: {
    h2: '¿Cuánto cobra Modern Age Coders?',
    lede: 'Aquí solo aparecen nuestras propias tarifas, en dólares de Estados Unidos; se pagan con tarjeta y su banco hace la conversión. No mostramos ni comentamos precios de otras escuelas.',
    free: ['Clase de prueba gratuita', 'Sugerencia de curso al terminar', 'Sin datos bancarios'],
    group: ['Quince a veinte estudiantes por grupo', 'Dos clases semanales en vivo', 'El mismo mentor siempre', 'Pago mensual'],
    one: ['Solo su hijo y el mentor', 'Plan hecho a su medida', 'Horario que se puede mover']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Kodland y nuestra alternativa: preguntas frecuentes',
    items: [
      { q: '¿Modern Age Coders tiene relación con Kodland?', a: 'Ninguna, somos empresas independientes. Escribimos esta página porque en Perú se busca mucho "kodland opiniones", y parte de quienes buscan quiere justamente una opción en inglés.' },
      { q: '¿Las clases son en español?', a: 'No, las nuestras no: todas son en vivo, por internet y únicamente en inglés, guiadas por mentores en la India que pronuncian con claridad y adaptan el ritmo. Muchas familias lo eligen por eso, porque su hijo programa y practica inglés en la misma sesión; Lima, con nivel alto en el EF EPI 2025, es donde más a menudo funciona sin tropiezos. Por WhatsApp sí se puede coordinar en castellano.' },
      { q: '¿Kodland es confiable?', a: 'No damos veredictos sobre otras empresas. Kodland publica su razón social, una dirección en Singapur y sus condiciones de servicio, y ofrece una clase de prueba gratuita. Le sugerimos las siete comprobaciones de esta página, que valen igual para nosotros.' },
      { q: '¿Qué opinan las familias de Kodland?', a: 'No reproducimos opiniones de otros sitios. La propia Kodland remite a un sitio de reseñas independiente. Al leer cualquier calificación, mire las opiniones de menor puntaje y sus fechas, no solo el promedio.' },
      { q: '¿Cuánto cuesta Kodland comparado con ustedes?', a: 'Las tarifas de otras escuelas no las mostramos ni las comentamos. Las nuestras figuran en la sección de cuotas, en dólares estadounidenses.' },
      { q: '¿Desde qué edad enseñan?', a: 'A partir de los 6, que es cuando el MINEDU ubica a un niño en 1° de primaria. Sin edad máxima: tenemos cursos para adolescentes, universitarios y adultos.' },
      { q: '¿Necesito una computadora?', a: 'Sí, una laptop o PC con internet. Con un celular o una tablet no se puede programar con comodidad.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 9:30 a. m. de un sábado en Lima corresponden a las 8:00 p. m. en la India.' },
      { q: '¿Dan certificado?', a: 'Al terminar cada curso entregamos un certificado de finalización de Modern Age Coders. No es un título oficial ni lo avala ningún ministerio o universidad.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, una vez al mes, en dólares estadounidenses; el banco de su tarjeta hace la conversión. La clase de prueba es gratuita y no pide datos de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para comparar con más información',
    lede: 'Páginas nuestras que pueden ayudarle a decidir.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños que programan en inglés', p: 'Lo que vive un niño peruano en su primera sesión en inglés.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes', p: 'Un curso de IA con reglas claras por edad.' },
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Verano virtual en inglés', p: 'Programación y práctica del idioma de enero a marzo.' },
      { href: '/modern-age-coders-vs-codingal', label: 'Modern Age Coders vs Codingal', p: 'Comparación en inglés con otra escuela internacional.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es nuestro método, en detalle.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página principal para Perú.' }
    ]
  },

  start: {
    h2: 'Agende una clase de prueba y compare',
    lede: 'Nuestra prueba gratuita dura una sesión en vivo: su hijo charla en inglés con un mentor, resuelve un reto corto de código y usted recibe una opinión sincera sobre si el idioma le pesará o no.',
    readFirst: 'Puede llevar a esa clase las <a class="ag-inline-link" href="#confiable">siete comprobaciones</a> de esta página y hacérnoslas a nosotros.',
    note: 'Cada sesión ocurre en tiempo real, en línea, en inglés y con mentores que están en la India. La coordinación puede ser en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python en secundaria' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños, en inglés' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Verano en inglés' }
      ] }
    ],
    bottomRight: 'Un promedio de estrellas siempre esconde una regla'
  },

  personalityCss: `
.ag-root.ag-koa .ag-hero h1 { max-width: 19ch; letter-spacing: -0.012em; }
.ag-root.ag-koa .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-koa .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-koa .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-koa .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'Kodland\'s own Spanish pages kodland.org/es and kodland.org/es/faq (with its FAQ bundle), fetched raw on 9 November 2026; MINEDU CNEB plans de estudio (English hours in primaria and secundaria, JER and JEC; 45-minute teaching hour); EF EPI 2025 Peru page; INEI ENAHO TIC bulletin, II Trimestre 2026; MINEDU normative ages; tzdata. The seven checks, the first-month signals and the rounding example are our own.',
    localProject: 'A Python lesson on reading star ratings: two invented review lists [5, 4, 5, 4] and [5, 5, 4, 3, 5, 5] both average 4.5; round() shows 4 because Python rounds halves to the even number ([0, 2, 2, 4, 4] for 0.5 to 4.5), while Decimal with ROUND_HALF_UP gives [1, 2, 3, 4, 5] and shows 5; min() reveals that only the second list hides a 3. Run with python3 -I; output pasted unedited.',
    requiredMentions: ['lista 2 promedio 4.5 | round(): 4 | peor: 3', 'round de 0.5, 1.5, 2.5, 3.5, 4.5: [0, 2, 2, 4, 4]', 'Dos promedios iguales, dos historias distintas', 'Kodland descrita con sus propias palabras, según kodland.org/es al 9 de noviembre de 2026', 'Las clases grupales se dan una vez a la semana en el horario elegido.', 'Las clases se dan en una PC de escritorio o laptop, las tablets no son adecuadas.', 'Horas semanales de inglés en el plan de estudios peruano, por nivel y jornada', 'Cinco señales para el primer mes en una escuela de programación (nuestras)', 'Un promedio de estrellas siempre esconde una regla'],
    sources: [
      { claim: 'Kodland: online school for ages 5 to 17; small groups and 1-1; free 60-minute 1-1 trial; Roblox 8 to 12 and Python 13+ with 40 classes; blocks to JavaScript or Python; KODLAND PTE. LTD., Singapore.', url: 'https://kodland.org/es/' },
      { claim: 'Kodland FAQ: group classes once a week; desktop or laptop, not tablets; public offer agreement; refunds possible; operates in several countries.', url: 'https://kodland.org/es/faq' },
      { claim: 'CNEB weekly English hours: primaria 2 2 3 3 3 3; secundaria JER 3, JEC 5; 45-minute teaching hour.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Peru 519 moderate; Lima 555 high; listening 499; speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: '36.4% of households with at least one computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age 6 for 1° primaria.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' }
    ],
    rejectedClaims: [
      'Kodland prices, its parent rating or any third-party review: not printed (brief: no competitor prices, no third-party reviews).',
      'A verdict that Kodland is or is not trustworthy, or worse than us: refused; the page offers checks that apply to every school, including ours.',
      'Kodland\'s refund answer quoted verbatim: not quoted because it addresses the reader as "tú"; paraphrased as "a refund is possible".',
      'Kodland student or country counts: not printed as figures; only its own sentence that it operates in several countries.',
      'A claim that Kodland does not serve Peru: refused; we only say its Spanish site is aimed at Latin America in Spanish.'
    ]
  }
};

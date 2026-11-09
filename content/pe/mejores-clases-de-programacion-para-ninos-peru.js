// SHIP: market | Mejores clases de programación para niños: ocho pruebas que una familia puede hacer | weighted decision score: dict of weights, sorted(key=), and a weight change that flips the order
'use strict';
// Mejores clases de programación para niños en Perú (ag- Spanish-language door, Peru cluster row PE144, P4 best, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.9: superlative in title and meta only, plain keyword
// H1, a section that defines what "mejor" means with evidence, never rank or price a named competitor); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Searches (KEYWORDS.md sections 1, 2 and 6): "clases de programacion para niños online", "clases virtuales de programación
// para niños", "escuela de programacion para niños online"; questions "¿A qué edad puede un niño empezar a programar?", "¿Las
// clases son online o presenciales?", "¿Hay clases de programación para niños en inglés?".
// Spine: "mejor" defined as eight criteria a parent can test (live or recorded, group size, the same mentor, real projects,
// thinking not copying, AI tool age rules, an honest certificate, a free trial class), each shown on our side with template or
// brand-fact evidence only; what Peruvian primaria gives (CNEB Tabla N.° 6, competency 28 transversal); the starting age
// (MINEDU normative age); the device question (INEI TIC II trimestre 2026); English as a benefit (EF EPI 2025); one original
// weighted-score program; the Lima to India clock. No competitor is named, ranked or priced.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/mejores-clases-de-programacion-para-ninos-peru/,
// fetched 2026-11-08 with curl by the research pass, every quote grepped in the raw text):
//  CNEB, MINEDU (cneb.txt), Tabla N.° 6 "ORGANIZACIÓN Y DISTRIBUCIÓN DEL TIEMPO SEMANAL DE EDUCACIÓN PRIMARIA": "Matemática 5 5 4
//    4 4 4", "Comunicación 5 5 4 4 4 4", "Inglés 2 2 3 3 3 3", "Ciencia y tecnología 3 3 4 4 4 4", "Arte y cultura 3 3 3 3 3 3",
//    "Horas de libre disponibilidad 3 3 2 2 2 2", "Total de horas 30 30 30 30 30 30"; "Competencias transversales a las áreas:
//    Se desenvuelve en" (competency 28, FACTS 33); "horas pedagógicas (45 minutos)" (FACTS 44).
//  MINEDU, Edades normativas PDF (edades-normativas.txt, FACTS 13 to 14): ages "6 años ... 11 años" for 1° to 6° de primaria,
//    measured at 31 March.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 36,4% de los hogares del país
//    disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y
//    8,9% en el área rural"; "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)"; "el 90,2% de la población
//    usuaria de Internet de 6 y más años usó Internet a través de un teléfono celular"; "laptop (18,9%), computadora (14,0%),
//    tablet (2,9%)".
//  EF EPI 2025, Peru page (ef_peru.txt): Lima 555 (high from 550); "Speaking score:" 480; Peru 519.
//  OPI, Reglamento OPI 2025 (opi-reglamento-2025.txt, FACTS 118): "Queda prohibido el uso de IA generativa para la resolución de
//    problemas." (accents mangled in the PDF text layer as "resoluci´on").
//  Vendor terms via content/ai-tool-age-audit.json (audited 2026-07-15): ChatGPT "If you are under 18 you must have your parent
//    or legal guardian's permission"; Claude "You must be at least 18 years old"; Gemini "You still can't access the Gemini web
//    app with a Google Account managed by Family Link."
//  Brand facts (scripts/brand-facts.json): 10,000+ students worldwide, 4.9 from 547 Google reviews, teaching since 2020; group
//    15 to 20, one to one. Template: eight live classes a month on the fees cards.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30 (10 h 30 min apart, no daylight saving in either).
// Our own program balanza.py (src-pages folder), invented options and weights, run with python3 -I, exact output:
//    Familia Quispe: [('Opcion A', 85), ('Opcion C', 71), ('Opcion B', 50)]
//    Familia Rojas:  [('Opcion C', 79), ('Opcion A', 76), ('Opcion B', 65)]
// Lesson family: a weighted decision score (a dictionary of weights, a normalised sum, sorted with a key function) and how
// changing the weights changes the order.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "criterios = ['en vivo', 'grupo', 'mentor', 'proyectos', 'pensar', 'edad IA', 'certificado', 'prueba']",
  '',
  '# Cuanto pesa cada criterio para la familia Quispe (de 1 a 3)',
  "pesos = {'en vivo': 3, 'grupo': 2, 'mentor': 3, 'proyectos': 2,",
  "         'pensar': 3, 'edad IA': 2, 'certificado': 1, 'prueba': 1}",
  '',
  '# Notas de 0 a 2 tras mirar cada opcion (inventadas)',
  'opciones = {',
  "    'Opcion A': {'en vivo': 2, 'grupo': 1, 'mentor': 2, 'proyectos': 1,",
  "                 'pensar': 2, 'edad IA': 2, 'certificado': 1, 'prueba': 2},",
  "    'Opcion B': {'en vivo': 0, 'grupo': 2, 'mentor': 0, 'proyectos': 2,",
  "                 'pensar': 1, 'edad IA': 1, 'certificado': 2, 'prueba': 2},",
  "    'Opcion C': {'en vivo': 2, 'grupo': 2, 'mentor': 1, 'proyectos': 2,",
  "                 'pensar': 1, 'edad IA': 1, 'certificado': 2, 'prueba': 0},",
  '}',
  '',
  'def puntaje(notas, pesos):',
  '    logrado = sum(pesos[c] * notas[c] for c in criterios)',
  '    posible = sum(pesos[c] * 2 for c in criterios)',
  '    return round(100 * logrado / posible)',
  '',
  'def ranking(pesos):',
  '    orden = sorted(opciones, key=lambda o: puntaje(opciones[o], pesos), reverse=True)',
  '    return [(o, puntaje(opciones[o], pesos)) for o in orden]',
  '',
  "print('Familia Quispe:', ranking(pesos))",
  '',
  '# La familia Rojas valora mas el certificado y menos al mentor fijo',
  'pesos_rojas = dict(pesos)',
  "pesos_rojas['mentor'] = 1",
  "pesos_rojas['certificado'] = 3",
  "pesos_rojas['proyectos'] = 3",
  "pesos_rojas['pensar'] = 2",
  "print('Familia Rojas: ', ranking(pesos_rojas))"
].join('\n');

const OUT = [
  "Familia Quispe: [('Opcion A', 85), ('Opcion C', 71), ('Opcion B', 50)]",
  "Familia Rojas:  [('Opcion C', 79), ('Opcion A', 76), ('Opcion B', 65)]"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Cómo elegir clases de programación para niños' },
  slug: 'mejores-clases-de-programacion-para-ninos-peru',
  code: 'mpn',
  accent: '#7D3850',
  accentRationale: 'Mejores clases de programación para niños: a deep mulberry #7D3850 (alloc.tsv), warm enough for a parents\' guide and quiet enough to carry a checklist; contrast 7.76 on the paper #FBF8F2 and 6.67 on the darkest paper tint, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cómo elegir clases de programación para niños',
  title: 'Mejores clases de programación para niños en Perú: 8 pruebas',
  description: '¿Cuáles son las mejores clases de programación para niños en Perú? Ocho pruebas que usted puede hacer en una clase de prueba, con clases en vivo y en inglés.',
  ogDescription: 'Una lista de ocho criterios comprobables para elegir clases de programación para niños en Perú, sin rankings de marcas: en vivo, grupo, mentor, proyectos, IA y certificado.',
  twitterDescription: 'Ocho pruebas para elegir clases de programación para niños en Perú, y cómo las cumplimos: en vivo, en inglés, en grupo o individual, a cualquier hora.',
  pageName: 'Cómo elegir clases de programación para niños en Perú',
  webPageDescription: 'Guía para padres en Perú que comparan clases de programación para niños: qué significa que unas clases sean buenas, ocho criterios que se pueden verificar, qué da la primaria peruana en computación según el CNEB, qué equipo hace falta según el INEI, el inglés como ventaja según el EF EPI 2025 y un programa en Python que arma una tabla de decisión con pesos.',
  courseDescription: 'Clases de programación en vivo y en línea para niños de 6 a 12 años en todo el Perú, dictadas solo en inglés por mentores desde la India: bloques, juegos, Python e ideas de inteligencia artificial adecuadas a la edad, en grupo de quince a veinte niños o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Elegir clases para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-significa', label: 'Qué significa' },
    { href: '#pruebas', label: 'Ocho pruebas' },
    { href: '#colegio', label: 'Colegio' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#balanza', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Guía para padres &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Perú: cómo elegir',
  lede: 'Ninguna academia es buena para todos los niños. Lo que sí existe es una lista de cosas que usted puede comprobar antes de pagar: si la clase es en vivo, cuántos niños hay, si el profesor es siempre el mismo y si su hijo construye algo propio. Esta guía las ordena en ocho pruebas.',
  secondaryCta: { href: '#pruebas', label: 'Ver las ocho pruebas' },
  wa: 'Hola Modern Age Coders, estoy comparando clases de programación para mi hijo en Perú. ¿Puedo reservar una clase de prueba gratuita?',
  heroNote: 'Enseñamos en directo desde 2020 &middot; más de 10,000 estudiantes en distintos países &middot; 4.9 en 547 reseñas de Google',
  spec: [
    ['Edades', 'De 6 a 12 años, por nivel y no solo por edad'],
    ['Formato', 'Clase en vivo por videollamada, nunca un video grabado'],
    ['Tamaño', 'Grupo de quince a veinte niños, o individual'],
    ['Mentor', 'El mismo durante el curso'],
    ['Idioma', 'Inglés claro y pausado'],
    ['Primer paso', 'Clase de prueba gratuita']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Las clases de programación para niños que conviene elegir en Perú son las que pasan ocho pruebas sencillas: son en vivo, el grupo es razonable, el mentor no cambia, el niño hace proyectos propios, se le enseña a pensar en vez de copiar, se respetan las edades mínimas de las herramientas de IA, el certificado dice lo que es y hay una clase de prueba. Modern Age Coders enseña a niños de 6 a 12 años en vivo, en línea y en inglés, en grupo o individual, a cualquier hora.',

  picks: {
    eyebrow: 'Cursos para niños',
    h2: 'Tres cursos con los que suelen empezar los niños',
    lede: 'Uno visual para los más pequeños, uno de Python con proyectos de IA para quienes ya leen con soltura y uno de juegos en Roblox para los que aprenden jugando.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'MPN / 01', title: 'Scratch completo', alt: 'Imagen del curso completo de programación con Scratch para niños', note: 'Desde los 6 años. Bloques de colores que encajan como piezas: el niño arma animaciones y juegos y aprende secuencias, bucles y condiciones sin pelearse con el teclado.' },
      { course: 'python-ai-kids-masterclass', code: 'MPN / 02', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'Para niños de 9 a 12 años que leen bien. Primer código escrito a mano, dibujos con la tortuga de Python y pequeños proyectos que explican cómo decide una máquina.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'MPN / 03', title: 'Juegos en Roblox con Lua', alt: 'Imagen del curso de programación de juegos en Roblox con Lua para niños', note: 'El juego que muchos niños peruanos ya conocen, visto desde adentro: obstáculos, puntajes y reglas escritas en Lua por el propio niño.' }
    ]
  },

  sections: [
    {
      id: 'que-significa',
      eyebrow: 'Qué significa',
      h2: '¿Qué significa que unas clases de programación para niños sean las mejores?',
      lede: 'Significa que encajan con su hijo y que cumplen lo que prometen. Lo primero depende de su familia; lo segundo se puede verificar. Esta página se ocupa de lo verificable y no ordena academias por nombre.',
      body: [
        { kind: 'p', html: 'Cuando un padre escribe "mejores clases de programación para niños" en el buscador, recibe listas armadas por quien vende, y casi nunca dicen con qué vara se midió. Nosotros preferimos darle la vara. Si una opción pasa las ocho pruebas de la sección siguiente, es una opción seria, sea la nuestra o la de otro. Si falla en dos o tres, conviene saberlo antes de pagar el primer mes.' },
        { kind: 'three', cells: [
          { h3: 'Lo que no medimos', p: 'Publicidad, cantidad de seguidores, tamaño de la marca o cuántos certificados entrega por mes. Nada de eso le dice qué pasa dentro de una clase con su hijo.' },
          { h3: 'Lo que sí medimos', p: 'Lo que usted puede ver con sus propios ojos durante una clase de prueba o preguntar por escrito: formato, número de niños, quién enseña, qué construye el niño y cómo se usa la IA.' },
          { h3: 'Cómo lo mostramos', p: 'En cada prueba decimos qué hacemos nosotros y dónde está la evidencia en esta misma página. No citamos cifras de nadie más ni comparamos precios con otras academias.' }
        ] },
        { kind: 'p', mt: true, html: 'Una advertencia honesta: nuestras clases se dictan en inglés. Muchas familias lo ven como una ventaja doble, programación y práctica de idioma en la misma hora; para otras es un obstáculo. Lo tratamos más abajo con datos del EF EPI 2025. Si prefiere una explicación general de cómo enseñamos a los niños, la tiene en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'pruebas',
      eyebrow: 'Ocho pruebas',
      h2: '¿Cómo saber si unas clases de programación para niños son buenas?',
      lede: 'Con ocho preguntas que tienen respuesta concreta. Cada una va acompañada de lo que hacemos nosotros, para que usted pueda contrastarlo en la clase de prueba.',
      body: [
        { kind: 'ol', items: [
          '<strong>¿Es en vivo o grabada?</strong> Un video no se da cuenta de que su hijo se quedó trabado en el minuto tres. En una clase en vivo alguien lo ve, le pregunta y espera. Pida que la clase de prueba sea con el mismo formato que el curso. Nosotros: todas las clases son en vivo por videollamada; no vendemos cursos grabados para niños.',
          '<strong>¿Cuántos niños hay por clase?</strong> El número cambia la experiencia. Pregúntelo por escrito y pregunte también qué pasa si el grupo crece. Nosotros: grupos de quince a veinte niños de nivel parecido, o clases individuales para quien necesita su propio ritmo; usted elige al inscribirse y puede cambiar después.',
          '<strong>¿Enseña siempre la misma persona?</strong> Un niño confía en quien lo conoce. Si cada semana aparece un profesor distinto, nadie recuerda en qué se equivocó la vez pasada. Nosotros: un mentor fijo de principio a fin del curso, salvo que la familia pida un cambio.',
          '<strong>¿El niño construye algo propio?</strong> Copiar un juego paso a paso no es lo mismo que diseñarlo. Pida ver proyectos de estudiantes de verdad. Nosotros: cada módulo termina en un proyecto del niño; más abajo hay trabajos reales de estudiantes en la sección de proyectos.',
          '<strong>¿Le enseñan a pensar o a copiar?</strong> La señal es sencilla: antes de mostrar la solución, el profesor pregunta "¿qué va a pasar ahora?". Nosotros: el mentor pide predecir el resultado antes de ejecutar el código, y el error se trata como una pista, no como un fracaso.',
          '<strong>¿Respetan la edad mínima de las herramientas de IA?</strong> Varias herramientas famosas no admiten niños según sus propios términos. Pregunte cuáles usan en clase y desde qué edad. Nosotros: con niños de primaria no usamos chatbots de adultos; la tabla de más abajo cita las condiciones de cada empresa.',
          '<strong>¿Qué dice exactamente el certificado?</strong> Un certificado de finalización es un recuerdo valioso, no un título. Desconfíe de quien lo presente como algo oficial. Nosotros: entregamos nuestro propio certificado de finalización y decimos claramente que no lo emite ni lo reconoce ninguna entidad del Estado.',
          '<strong>¿Hay una clase de prueba de verdad?</strong> Una clase de prueba debería ser una clase, no una llamada de ventas. Nosotros: la primera clase es gratuita, en vivo, con un mentor, y no pedimos tarjeta para reservarla.'
        ] },
        { kind: 'p', mt: true, html: 'Ocho pruebas pueden parecer muchas, pero la mayoría se comprueba en una sola clase de prueba si usted se sienta al lado de su hijo los primeros diez minutos. Lleve la lista impresa y marque cada punto. Si quiere ponerle números, el programa de la sección de ejemplo hace la cuenta por usted.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'IA y edad',
      h2: '¿Pueden los niños usar ChatGPT u otras IA en clases de programación?',
      lede: 'Depende de la herramienta y de la edad, y lo decide cada empresa en sus condiciones de uso. En primaria la respuesta prudente es no usar chatbots de adultos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Edad mínima de tres herramientas de IA según sus propias condiciones de uso', head: ['Herramienta', 'Qué dicen sus condiciones (cita en inglés)', 'Qué significa para un niño de primaria'], rows: [
          ['ChatGPT (OpenAI)', '"If you are under 18 you must have your parent or legal guardian\'s permission"', 'Mínimo 13 años y permiso de los padres hasta los 18: no es para niños de primaria'],
          ['Claude (Anthropic)', '"You must be at least 18 years old"', 'Solo adultos; no se usa con menores'],
          ['Gemini (Google)', '"You still can\'t access the Gemini web app with a Google Account managed by Family Link."', 'Las cuentas infantiles supervisadas quedan fuera de la aplicación web']
        ] },
        { kind: 'source', html: 'Fuente: condiciones de uso de OpenAI, Anthropic y Google, citadas textualmente en nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> (revisión del 15 de julio de 2026). La tercera columna es nuestra lectura, no asesoría legal.' },
        { kind: 'p', mt: true, html: 'Esto no significa que los niños no puedan aprender sobre inteligencia artificial. Pueden, y mucho: cómo aprende una máquina a partir de ejemplos, por qué se equivoca, qué es un dato. Lo aprenden programando ellos mismos, no conversando con un chatbot. Para eso existe nuestra página de <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">curso de inteligencia artificial para niños</a>.' },
        { kind: 'p', html: 'Hay otra razón para no apoyarse en la IA generativa al aprender: en las competencias serias no se permite. El reglamento de la Olimpiada Peruana de Informática de 2025, organizada por la UTEC, dice: "Queda prohibido el uso de IA generativa para la resolución de problemas". Un niño que aprendió a razonar sin ayuda llega a esos retos con ventaja. No tenemos relación con la UTEC ni con la olimpiada; la citamos como ejemplo.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Colegio',
      h2: '¿Enseñan programación en la primaria peruana?',
      lede: 'No como asignatura. Lo digital aparece en el Currículo Nacional repartido entre todas las áreas, sin horas propias, y lo que cada colegio haga con eso varía mucho.',
      body: [
        { kind: 'p', html: 'El reparto semanal de primaria que fija el MINEDU suma treinta horas pedagógicas, de 45 minutos cada una, distribuidas entre Matemática, Comunicación, Inglés, Ciencia y tecnología, Personal social, Arte y cultura, Educación física, Educación religiosa y Tutoría, más unas pocas horas de libre disponibilidad. En esa lista no figura computación ni programación como área.' },
        { kind: 'p', html: 'La competencia digital existe, con el nombre "Se desenvuelve en entornos virtuales generados por las TIC", pero el Currículo la declara transversal: se trabaja dentro de las demás áreas. En la práctica, un colegio privado puede dedicar sus horas libres a un taller de computación y otro público puede no tener cómo hacerlo. Si le interesa saberlo, pregunte en el colegio de su hijo qué se hace exactamente con esas horas.' },
        { kind: 'p', html: 'Nuestras clases no compiten con el colegio ni ponen notas. Funcionan como un taller extracurricular que su familia coloca donde le queda espacio en la semana.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'Edad',
      h2: '¿Desde qué edad conviene que un niño aprenda a programar?',
      lede: 'A los 6 años, con bloques visuales. Es la edad con la que el Ministerio de Educación ubica a un niño en 1.° de primaria, y es la edad desde la que aceptamos alumnos.',
      body: [
        { kind: 'two',
          leftH3: 'Qué cambia de los 6 a los 12',
          left: [
            'Según la tabla de edades normativas del MINEDU, medidas al 31 de marzo, un niño de 6 años va a 1.° de primaria y uno de 11 a 6.°. Esa diferencia de cinco años lo cambia todo: a los 6 se programa arrastrando bloques y contando en voz alta; a los 10 u 11 ya se escribe código de verdad.',
            'No hace falta saber leer de corrido para empezar con bloques. Sí hace falta poder sentarse unos cuarenta minutos frente a la pantalla con un adulto cerca la primera semana.'
          ],
          rightH3: 'Cómo ubicamos a su hijo',
          right: [
            'En la clase de prueba el mentor propone tres pequeños retos de dificultad creciente. No miramos solo la edad: un niño de 8 años que ya armó juegos en Scratch puede empezar en un nivel más alto que uno de 10 que nunca programó.',
            'Si hay dos hermanos de edades distintas, lo habitual es que cada uno vaya a su propio grupo. Para más detalle por edad, vea <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">nuestra guía de programación para niños en inglés</a>.'
          ] }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'Equipo',
      h2: '¿Sirve un celular o una tablet para las clases de programación?',
      lede: 'Para mirar una clase, sí; para programar, no. Se necesita teclado y una pantalla donde quepan el código y la videollamada a la vez, es decir, una laptop o una computadora de escritorio.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Con qué se conectan a internet los peruanos de 6 años a más, y cuántos hogares tienen computadora (INEI, II trimestre de 2026)', head: ['Indicador', 'Porcentaje'], rows: [
          ['Usuarios de internet que se conectan con celular', '90,2%'],
          ['Usuarios de internet que se conectan con laptop', '18,9%'],
          ['Usuarios de internet que se conectan con computadora de escritorio', '14,0%'],
          ['Usuarios de internet que se conectan con tablet', '2,9%'],
          ['Hogares con al menos una computadora, todo el país', '36,4%'],
          ['Hogares con al menos una computadora, Lima Metropolitana', '53,3%'],
          ['Hogares con al menos una computadora, área rural', '8,9%'],
          ['Niños de 6 a 11 años que usaron internet', '68,2%']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026 (Encuesta Nacional de Hogares, cifras preliminares). Un usuario puede conectarse con más de un aparato, por eso las cuatro primeras filas no suman cien.' },
        { kind: 'p', mt: true, html: 'Leída de arriba abajo, la tabla cuenta una historia frecuente en Perú: el 90,2% de las personas de 6 años a más que usaron internet lo hicieron con un celular, y en muchas casas es la única pantalla. Solo el 36,4% de los hogares del país tiene una computadora; en Lima Metropolitana la cifra sube a 53,3%, en el resto urbano es 41,3% y en el campo baja a 8,9%. Además, los niños de 6 a 11 años son el grupo que menos usa internet.' },
        { kind: 'p', html: 'Nuestra recomendación práctica: una laptop sencilla compartida en la familia alcanza. No hace falta una máquina potente, porque los programas de los niños son pequeños y varios cursos funcionan en el navegador. Unos audífonos con micrófono le permiten al niño oír cada palabra del mentor sin el ruido de la casa. Si en casa solo hay celular, díganoslo antes de la clase de prueba y le diremos con franqueza qué se puede hacer y qué no.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés',
      h2: '¿Es una desventaja que las clases de programación sean en inglés?',
      lede: 'Para la mayoría de niños es lo contrario: aprenden a programar y practican el idioma en la misma hora. El inglés de la clase es sencillo, lento y está atado a lo que se ve en pantalla.',
      body: [
        { kind: 'p', html: 'El EF English Proficiency Index 2025 ubica a Lima en el nivel alto, con 555 puntos, mientras el promedio del Perú es 519, nivel moderado. Ese mismo índice muestra que la habilidad más débil del país es hablar, con 480 puntos. En la primaria pública el inglés ocupa pocas horas a la semana según el Currículo Nacional, de modo que cada rato de conversación real suma. Una clase de programación en inglés suma práctica oral real, con un propósito concreto.' },
        { kind: 'p', html: 'Los términos de programación ya están en inglés en todos los lenguajes: <code>if</code>, <code>repeat</code>, <code>print</code>. Un niño que los aprende con su significado los entiende mejor que uno que los memoriza como palabras raras. Nuestros mentores enseñan desde la India, hablan pausado, repiten con otras palabras y comprueban que el niño entendió antes de seguir.' }
      ]
    },
    {
      id: 'balanza',
      tint: 'tint',
      eyebrow: 'Ejemplo',
      h2: '¿Cómo comparar varias clases de programación con números?',
      lede: 'Con una tabla de decisión con pesos, que además es un buen primer programa para un niño de 11 o 12 años. Las opciones, las notas y las familias son inventadas por nosotros; no corresponden a ninguna academia.',
      body: [
        { kind: 'code', label: 'Una tabla de decisión con pesos', lang: 'Python', code: PY, note: 'Cada criterio recibe un peso de 1 a 3 según lo que importa a la familia, y cada opción una nota de 0 a 2 por criterio. El puntaje es lo logrado dividido entre lo máximo posible, en una escala de 0 a 100.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Copiado tal cual de Python 3 en nuestro equipo. Con los pesos de la familia Quispe gana la opción A; con los de la familia Rojas gana la C.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El diccionario de pesos.</strong> <code>pesos</code> guarda lo que la familia valora. Escribirlo obliga a decidir antes de mirar opciones, que es justo lo que evita dejarse llevar por la publicidad.',
          '<strong>La suma normalizada.</strong> <code>puntaje</code> multiplica cada nota por su peso y divide entre el máximo posible. Así dos familias con pesos distintos obtienen puntajes en la misma escala de 0 a 100.',
          '<strong>Ordenar con una clave.</strong> <code>sorted(opciones, key=...)</code> no ordena por el nombre, sino por el resultado de la función que se le pasa. Es una de las ideas más útiles de Python.',
          '<strong>Los pesos cambian el orden.</strong> La opción A gana para los Quispe con 85 frente a 71. Para los Rojas, que valoran más el certificado y los proyectos y menos al mentor fijo, la C pasa adelante con 79 frente a 76. No hay una respuesta única: hay una respuesta para cada familia.',
          '<strong>La trampa de la opción B.</strong> B no es en vivo y no tiene mentor, y aun así saca 50 y 65 puntos porque es buena en otras cosas. Si para usted lo en vivo es indispensable, no basta con darle un peso alto: hay que descartar primero a quien no lo cumple y recién después sumar.'
        ] },
        { kind: 'p', mt: true, html: 'Ese último punto es la lección que más nos gusta enseñar a los niños mayores: una fórmula hace lo que le pedimos, no lo que queríamos. Pensar qué debe ser filtro y qué debe ser peso es razonamiento, no programación, y es lo que separa a quien entiende un programa de quien lo copió.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora son las clases si el profesor está en la India?',
      lede: 'A la que usted reserve. Perú está en UTC-5 todo el año y la India en UTC+5:30, así que la India va diez horas y media adelante, sin cambios de horario en ninguno de los dos países.',
      body: [
        { kind: 'p', html: 'Tres conversiones de ejemplo, calculadas por nosotros: las 9:00 a. m. de un sábado en Lima son las 7:30 p. m. del sábado en la India; las 6:30 p. m. de un día de semana en Lima son las 5:00 a. m. del día siguiente en la India; y las 7:00 a. m. en Lima, antes del colegio, son las 5:30 p. m. en la India. Son solo conversiones de reloj; la hora la elige usted.' },
        { kind: 'p', html: 'Si su hijo tiene vacaciones de verano entre enero y marzo, puede empezar en ese tiempo libre. Lo explicamos en <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">talleres de verano de programación para niños online</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si su hijo está avanzando en programación?',
    lede: 'Cinco señales que pedimos a los mentores observar y contar a la familia. Son una escala nuestra, no una nota del colegio.',
    table: { caption: 'Cinco señales de progreso en programación para niños (escala nuestra)', head: ['Señal', 'Cuándo suele aparecer', 'Qué ve usted en casa'], rows: [
      ['1. Explica', 'Primeras semanas', 'Cuenta qué hace su programa con sus palabras'],
      ['2. Predice', 'Primer o segundo mes', 'Dice qué pasará antes de hacer clic'],
      ['3. Corrige', 'Segundo o tercer mes', 'Encuentra un error sin que nadie se lo marque'],
      ['4. Inventa', 'Tercer a quinto mes', 'Cambia un proyecto para hacer algo que no estaba en la clase'],
      ['5. Enseña', 'Cuando está listo', 'Le explica a un hermano o a usted cómo funciona']
    ] },
    left: { h3: 'Para los padres de los más pequeños', ps: [
      'Pregunte "¿qué hiciste hoy?" y pida que se lo muestre. Explicar es parte del aprendizaje.',
      'No corrija usted el código. Deje que el niño lo lleve a la siguiente clase.'
    ] },
    right: { h3: 'Para los de 10 a 12 años', ps: [
      'Anímelo a cambiar un número del programa y adivinar el efecto antes de probar.',
      'Un cuaderno donde anote errores y cómo los resolvió vale más que cualquier diploma.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para niños de primaria',
    lede: 'Ordenados por punto de partida, todos en vivo y en inglés, en grupo o individuales.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 9 años', courses: [
        { code: 'MPN / INICIO / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Secuencias, bucles y condiciones con piezas visuales antes de tocar el teclado.' },
        { code: 'MPN / INICIO / 02', slug: 'minecraft-coding-for-kids-course', title: 'Programar en Minecraft', blurb: 'Construcciones que se levantan solas con unas pocas instrucciones.' },
        { code: 'MPN / INICIO / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Rompecabezas y patrones para aprender a descomponer un problema.' }
      ] },
      { num: 'II', h3: 'Crear', sub: 'De 8 a 12 años', courses: [
        { code: 'MPN / CREAR / 01', slug: 'game-development-masterclass-for-kids', title: 'Desarrollo de juegos', blurb: 'Personajes, niveles y puntajes diseñados por el propio niño.' },
        { code: 'MPN / CREAR / 02', slug: 'kids-ai-web-development-course', title: 'Páginas web para niños', blurb: 'Su primera página publicada, con texto, colores e imágenes propias.' },
        { code: 'MPN / CREAR / 03', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Fracciones, patrones y geometría que se mueven en la pantalla.' }
      ] },
      { num: 'III', h3: 'Ir más lejos', sub: 'De 9 a 12 años', courses: [
        { code: 'MPN / LEJOS / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la IA', blurb: 'Cómo aprende una máquina, sin cuentas en chatbots de adultos.' },
        { code: 'MPN / LEJOS / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Para quien ya domina lo básico y quiere un lenguaje más exigente.' },
        { code: 'MPN / LEJOS / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Retos en equipo', blurb: 'Proyectos con fecha de entrega para niños que disfrutan competir.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo es una clase de programación en vivo para niños?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después del colegio', l: 'La tarde limeña de un día de semana.' },
      { time: 'Sábado temprano', l: 'Antes de las actividades familiares.' },
      { time: 'En vacaciones', l: 'Más clases por semana si su hijo quiere.' }
    ],
    cells: [
      { h3: 'Pantalla compartida', p: 'El niño comparte su pantalla y el mentor ve exactamente dónde se trabó.' },
      { h3: 'Predecir antes de probar', p: 'Cada cambio empieza con la pregunta de qué va a pasar.' },
      { h3: 'Un proyecto a la vez', p: 'El módulo se cierra con algo que el niño puede mostrar en casa.' },
      { h3: 'Sin chatbots de adultos', p: 'Respetamos la edad mínima que fija cada herramienta.' },
      { h3: 'Mentor fijo', p: 'La misma persona sigue a su hijo de principio a fin.' },
      { h3: 'Informe a la familia', p: 'Le contamos qué logró y qué le cuesta, en lenguaje sencillo.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Juegos y programas hechos por niños y adolescentes en sus clases, tal como los publicaron. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Opiniones de familias y estudiantes tomadas de Google, en su idioma original.',

  fees: {
    h2: '¿Cuánto cuestan nuestras clases de programación para niños?',
    lede: 'Los montos aparecen en dólares estadounidenses porque así se cobran, con tarjeta y mes a mes. Su banco hace la conversión el día del cargo. No hay matrícula ni materiales que comprar aparte.',
    free: ['Primera clase en vivo sin costo', 'Ubicación por nivel', 'Sin tarjeta para reservar'],
    group: ['Quince a veinte niños de nivel parecido', 'Mentor fijo', 'Proyecto al cierre de cada módulo', 'Puede dejarlo cualquier mes'],
    one: ['Solo su hijo y el mentor', 'Ritmo y temas a su medida', 'Hora que se adapta a la semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Elegir clases de programación para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todas nuestras clases son en vivo y en inglés, con mentores desde la India que hablan claro y despacio. Para su hijo es una ventaja: aprende programación y practica inglés al mismo tiempo, justo en la habilidad más débil del país según el EF EPI 2025, que es hablar. Lima está en el nivel alto de ese índice, con 555 puntos. Con usted podemos escribirnos en castellano por WhatsApp.' },
      { q: '¿Cuáles son las mejores clases de programación para niños en Perú?', a: 'Las que pasan las ocho pruebas de esta página: en vivo, grupo razonable, mentor fijo, proyectos propios, enseñar a pensar, respeto a las edades de las herramientas de IA, certificado honesto y clase de prueba real. No publicamos un ranking de academias; le damos la lista para que usted compruebe cualquier opción, incluida la nuestra.' },
      { q: '¿Desde qué edad aceptan niños?', a: 'Aceptamos alumnos desde los 6 años, cuando un niño peruano suele estar en 1.° de primaria. Los más pequeños trabajan con bloques visuales y sin teclado.' },
      { q: '¿Son mejores las clases online o presenciales?', a: 'Depende del niño. Lo online ahorra traslados y permite elegir horario; lo importante es que sea en vivo, con un mentor que vea la pantalla del niño. Un video grabado no reemplaza eso.' },
      { q: '¿Mi hijo puede usar ChatGPT en las clases?', a: 'No en primaria. Las condiciones de OpenAI piden 13 años como mínimo y permiso de los padres hasta los 18. En clase los niños aprenden cómo funciona la IA programando, sin chatbots de adultos.' },
      { q: '¿Necesito comprar un kit de robótica?', a: 'No. Enseñamos programación, no armado de robots, y no vendemos materiales. Basta con una laptop o computadora de escritorio y audífonos.' },
      { q: '¿El certificado es oficial?', a: 'No. Es nuestro certificado de finalización: acredita que el niño completó el curso, pero no lo emite ni lo reconoce el MINEDU ni ninguna otra entidad del Estado.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 9:00 a. m. de un sábado en Lima son las 7:30 p. m. en la India.' },
      { q: '¿Puedo ver la clase de prueba con mi hijo?', a: 'Sí, y se lo recomendamos. Siéntese a su lado los primeros minutos y marque las ocho pruebas de esta página.' },
      { q: '¿Qué pasa si a mi hijo no le gusta?', a: 'El pago es mensual y puede dejarlo al terminar cualquier mes. Antes de eso, hable con el mentor: a veces basta con cambiar de proyecto o de grupo.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras páginas que pueden servirle',
    lede: 'Algunas en castellano y otras en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'Qué aprende un niño en cada etapa y cómo se adapta el inglés de la clase.' },
      { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'Curso de inteligencia artificial para niños', p: 'La IA explicada desde adentro, sin chatbots de adultos.' },
      { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano de programación', p: 'Una forma de empezar entre enero y marzo.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas nuestras páginas para el Perú en un solo lugar.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de más de cien herramientas, con la cita de cada empresa.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo preparamos y dictamos cada clase en vivo.' }
    ]
  },

  start: {
    h2: 'Haga las ocho pruebas en una clase gratuita',
    lede: 'Reserve una clase de prueba, siéntese junto a su hijo y compruebe cada punto con sus propios ojos. El mentor le dirá al final en qué nivel empezaría y por qué.',
    readFirst: 'Si quiere conocer antes cómo pensamos la enseñanza, lea <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, en inglés.',
    note: 'Las clases son en vivo, por internet y en inglés, con mentores en la India. La coordinación con la familia puede ser en castellano.',
    formNote: 'Gratis, sin tarjeta y sin obligación de inscribirse.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano' },
        { href: '/ai-tools-age-guide', label: 'Edades de la IA' }
      ] }
    ],
    bottomRight: 'Primero decida qué es indispensable; después sume lo demás'
  },

  personalityCss: `
.ag-root.ag-mpn .ag-hero h1 { max-width: 20ch; letter-spacing: -0.012em; }
.ag-root.ag-mpn .ag-steps li { line-height: 1.6; padding-bottom: 6px; }
.ag-root.ag-mpn .ag-capsule { border-left-width: 4px; }
.ag-root.ag-mpn .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mpn .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB Tabla N.° 6 (primaria weekly hours), competency 28 as transversal, hora pedagógica of 45 minutes; MINEDU Edades normativas; INEI TIC bulletin II Trimestre 2026; EF EPI 2025 Peru page; OPI Reglamento 2025 (UTEC); vendor terms of OpenAI, Anthropic and Google via content/ai-tool-age-audit.json; tzdata. The eight criteria, the progress scale, the weights and the Python example are our own.',
    localProject: 'A weighted decision table in Python for comparing children\'s coding classes: eight criteria, weights from 1 to 3, invented scores from 0 to 2 for three invented options, a normalised score from 0 to 100 and sorted() with a key function. Family Quispe ranks A 85, C 71, B 50; family Rojas, with different weights, ranks C 79, A 76, B 65. Lesson family: weighted scores and how weights change the order; a must-have belongs in a filter, not a weight.',
    requiredMentions: ["Familia Rojas:  [('Opcion C', 79), ('Opcion A', 76), ('Opcion B', 65)]", 'Una tabla de decisión con pesos', 'Edad mínima de tres herramientas de IA según sus propias condiciones de uso', 'el 90,2% de las personas de 6 años a más que usaron internet lo hicieron con un celular', 'Con qué se conectan a internet los peruanos de 6 años a más, y cuántos hogares tienen computadora', 'en Lima Metropolitana la cifra sube a 53,3%, en el resto urbano es 41,3% y en el campo baja a 8,9%', 'Cinco señales de progreso en programación para niños (escala nuestra)', 'Primero decida qué es indispensable; después sume lo demás'],
    sources: [
      { claim: 'CNEB Tabla N.° 6: primaria weekly hours by area (Matemática 5 5 4 4 4 4, Inglés 2 2 3 3 3 3, total 30); competency 28 transversal; hora pedagógica 45 minutes.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages: 1° primaria 6, 6° primaria 11, at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'INEI II Trimestre 2026: 90.2% of internet users 6+ via mobile phone, laptop 18.9%, computer 14.0%, tablet 2.9%; homes with a computer 36.4% (Lima Metropolitana 53.3%, rest urban 41.3%, rural 8.9%); internet use ages 6 to 11 68.2%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555 (high), speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'OPI 2025 rules ban generative AI for solving problems.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'ChatGPT: parental permission under 18; Claude: 18+; Gemini web app not available to Family Link accounts.', url: 'https://openai.com/policies/row-terms-of-use/' }
    ],
    rejectedClaims: [
      'A ranking of named academies or a claim that we are the best: refused; the page defines criteria and shows our side only.',
      'Any competitor price or a soles figure: refused; fees render from the template in USD.',
      'An official or MINEDU-recognised certificate: refused; our certificate of completion is described as unofficial.',
      'Chatbots for primary-school children: refused; the vendor terms are quoted and we say we do not use adult chatbots with them.',
      'A robot kit: refused; we teach coding only.'
    ]
  }
};

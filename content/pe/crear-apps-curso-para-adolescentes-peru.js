// SHIP: market (es subject door) | crear apps para adolescentes: del celular que usan a la app que construyen | input validation: collect every error in a list instead of stopping at the first
'use strict';
// Crear apps: curso para adolescentes en Perú (ag- Spanish-language door, Peru cluster row PE102, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout (parents and teens). Fees render in USD from the template only; no soles, no typed figure.
// Searches (KEYWORDS.md): "crear apps", "crear apps con ia", "crear apps para android", "crear aplicaciones para celular",
// "crear apps con claude", "crear apps con gemini", "programación para adolescentes"; "curso de apps para niños" returned 0,
// so this page is for teens (13 to 17), never "niños".
// Angle: a Peruvian teen in secundaria who lives on the phone and wants to build an app, and the parent paying. Spine: how
// teens reach the internet (INEI 2026: 92.5% of 12 to 18 online, but only 78.1% of them by phone, against 98.0% of adults 25 to 40); what secundaria gives
// (CNEB competency 28 "Crea objetos virtuales", Educación para el Trabajo; Fábrica de Programadores); AI app builders and the
// vendors' age terms (no 18+ tool recommended); one original lesson on validating a sign-up form; what a teen needs at home
// (INEI computers 36.4%, Lima 53.3%); a 12-week plan of our own.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/crear-apps-curso-para-adolescentes-peru/,
// research fetched 2026-11-08, quotes regrepped 2026-11-09):
//  INEI, Boletín TIC II Trimestre 2026 (inei_tic_iit2026.txt). Cuadro N° 2.1 internet use by age, 2026 column: "60,1 61,7
//    61,5 68,2" (6 to 11), "89,7 91,4 90,7 92,5" (12 to 18), "95,6 96,4 96,4 97,3" (19 to 24), "25 a 40 años 90,9 92,7 93,9
//    95,2", "41 a 59 años 76,5 79,9 81,9 86,0", "60 y más 40,8 47,3 50,2 56,7". Cuadro N° 2.6 internet through a phone among
//    users, by age: "6 a 11 años 54,7 50,4 43,3 48,5", "12 a 18 años 82,6 78,7 75,4 78,1", "19 a 24 años 95,5 96,4 95,8 97,2",
//    "25 a 40 años 96,8 97,4 97,8 98,0", "41 a 59 años 98,3 98,5 98,0 98,4", "60 y más 96,3 97,6 98,6 97,7"; text: "entre los
//    adolescentes de 12 a 18 años con un 78,1%". National: "el 90,2% de la población usuaria de Internet de 6 y más años usó
//    Internet a través de un teléfono celular". Age: "el de 12 a 18 años con un 92,5%". Phones: "43 de cada 100 incluían menores de
//    16 años de edad". Computers: "el 36,4% de los hogares del país disponía de al menos una computadora. Este porcentaje
//    alcanzó el 53,3% en Lima Metropolitana"; "el 74,3% cuenta con una sola unidad".
//  CNEB (FACTS 32, 35, 37, 40, 41/42, 39): "Crea objetos virtuales en diversos formatos: consiste en construir materiales
//    digitales con diversos propósitos, siguiendo un proceso de mejoras sucesivas y retroalimentación"; "EDUCACIÓN PARA EL
//    TRABAJO Gestiona proyectos de emprendimiento económico y social"; "Educación para el trabajo 2 2 2 2 2" (JER);
//    "Educación para el trabajo 3 3 3 3 3" (JEC); no computing area in the secundaria timetable.
//  MINEDU edades normativas (FACTS 13, 14): 1° secundaria 12 años ... 5° secundaria 16 años, at 31 March.
//  MINEDU Fábrica de Programadores (FACTS 45, 46): "1000 escolares de 4.º y 5.º de secundaria de Lima Norte con formación en
//    programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global".
//  MINEDU Hackathon 2025 (FACTS 48, 49): "proyectos de IA y robótica"; "entre 2023 y 2025, la presencia de estudiantes mujeres
//    creció en 28 %".
//  Vendor age terms via content/ai-tool-age-audit.json (audited 2026-07-15): Anthropic 18+; Google Gemini "You must be 13 (or
//    the applicable age in your country) or over"; OpenAI under 18 needs permission; Replit "You must be an adult".
// Our own example (registro_v1.py, registro_v2.py in the src-pages folder), run with python3 -I, exact output:
//    v1: Write your name / This app is for ages 13 and up / Password needs 8 characters or more / OK
//    v2: ['Write your name', 'This app is for ages 13 and up', 'Password needs 8 characters or more',
//        'Add at least one number to the password'] / ['Password needs 8 characters or more', 'Add at least one number to
//        the password'] / []
// Lesson family: input validation; an if/elif chain reports only the first problem, separate ifs that append to a list report
//    them all, and an empty list means valid.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'def check(name, age, password):',
  "    if name.strip() == '':",
  "        return 'Write your name'",
  '    elif age < 13:',
  "        return 'This app is for ages 13 and up'",
  '    elif len(password) < 8:',
  "        return 'Password needs 8 characters or more'",
  "    return 'OK'",
  '',
  "print(check('', 12, 'abc'))",
  "print(check('Valeria', 12, 'abc'))",
  "print(check('Valeria', 14, 'abc'))",
  "print(check('Valeria', 14, 'quinoa2026'))"
].join('\n');

const V1_OUT = [
  'Write your name',
  'This app is for ages 13 and up',
  'Password needs 8 characters or more',
  'OK'
].join('\n');

const V2 = [
  'def check(name, age, password):',
  '    errors = []',
  "    if name.strip() == '':",
  "        errors.append('Write your name')",
  '    if age < 13:',
  "        errors.append('This app is for ages 13 and up')",
  '    if len(password) < 8:',
  "        errors.append('Password needs 8 characters or more')",
  '    if password.isalpha():',
  "        errors.append('Add at least one number to the password')",
  '    return errors',
  '',
  "print(check('', 12, 'abc'))",
  "print(check('Valeria', 14, 'quinoa'))",
  "print(check('Valeria', 14, 'quinoa2026'))"
].join('\n');

const V2_OUT = [
  "['Write your name', 'This app is for ages 13 and up', 'Password needs 8 characters or more', 'Add at least one number to the password']",
  "['Password needs 8 characters or more', 'Add at least one number to the password']",
  '[]'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Crear apps: adolescentes' },
  slug: 'crear-apps-curso-para-adolescentes-peru',
  code: 'cra',
  accent: '#007047',
  accentRationale: 'Crear apps, curso para adolescentes: a bright phone-screen green #007047, livelier than the darker greens of the adult subject doors, to read young without leaving the cluster palette; contrast 5.00 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Crear apps: curso para adolescentes',
  title: 'Crear apps: curso para adolescentes en Perú, en inglés',
  description: 'Curso para crear apps de celular para adolescentes de 13 a 17 años en Perú, en vivo y en inglés: JavaScript, React Native e IA permitida para su edad.',
  ogDescription: 'Cómo pasa un adolescente peruano de usar apps a construirlas: qué da la secundaria, qué IA permite cada edad, un plan de doce semanas y una lección de validación en Python.',
  twitterDescription: 'Crear apps para celular a los 13 a 17 años, en clases en vivo y en inglés desde Perú, a cualquier hora.',
  pageName: 'Crear apps: curso para adolescentes en Perú',
  webPageDescription: 'Guía para adolescentes de secundaria y sus familias en Perú sobre cómo aprender a crear aplicaciones para celular en clases en vivo y en inglés: cómo se conectan los peruanos según el INEI 2026, qué ofrece el CNEB en secundaria, qué herramientas de IA permite cada edad según sus proveedores, qué equipo hace falta y una lección de ejemplo escrita por nosotros.',
  courseDescription: 'Curso en vivo y en línea para adolescentes de 13 a 17 años en todo el Perú, dictado solo en inglés, para crear aplicaciones de celular con JavaScript y React Native: pantallas, formularios, datos y pruebas con la familia, con herramientas de IA que sus términos permiten a esa edad, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Crear apps: adolescentes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#celular', label: 'El celular' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#con-ia', label: 'Con IA' },
    { href: '#leccion', label: 'Lección' },
    { href: '#plan', label: 'Plan' }
  ],
  eyebrow: 'Perú &middot; Crear apps &middot; De 13 a 17 años',
  h1: 'Crear apps: curso para adolescentes, en vivo y en inglés',
  lede: 'Casi todo adolescente peruano pasa horas dentro de aplicaciones que diseñó otra persona. Este curso le da la vuelta a esa relación: su hijo o hija aprende a construir una app propia, pantalla por pantalla, entendiendo el código y sin depender de que una IA lo haga por él.',
  secondaryCta: { href: '#leccion', label: 'Ver una lección de ejemplo' },
  wa: 'Hola Modern Age Coders, mi hijo o hija adolescente quiere aprender a crear apps, en clases en inglés desde Perú. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; apps construidas línea por línea, en inglés',
  spec: [
    ['Edades', 'De 13 a 17 años, aproximadamente de 2° a 5° de secundaria'],
    ['Tecnologías', 'JavaScript, React Native y nociones de Python'],
    ['Formato', 'Clase grupal de quince a veinte adolescentes, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Mentores', 'Desde la India, en vivo por videollamada'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí hay un curso para crear apps pensado para adolescentes en Perú: Modern Age Coders enseña a chicos y chicas de 13 a 17 años a construir aplicaciones de celular con JavaScript y React Native, en clases en vivo, en línea y en inglés guiados por mentores que viven en la India. Cada estudiante escribe y entiende su propio código, y solo usa herramientas de IA que sus términos permiten a su edad. Hay grupo o clases individuales, en el horario que la familia escoja, y la sesión de prueba es gratuita.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para empezar a crear apps',
    lede: 'El primero va directo a la app de celular; el segundo arma la base de JavaScript para quien nunca programó; el tercero suma la inteligencia artificial con las reglas de edad bien puestas.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'CRA / 01', title: 'Desarrollo de apps para adolescentes', alt: 'Imagen del curso de desarrollo de apps para adolescentes', note: 'De 13 a 17 años. Apps reales con React Native: pantallas, navegación, formularios y datos guardados en el teléfono.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'CRA / 02', title: 'JavaScript desde cero', alt: 'Imagen del curso de JavaScript para adolescentes', note: 'Para quien parte de cero. El lenguaje de las apps y de la web, con juegos de navegador como primeros proyectos.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', code: 'CRA / 03', title: 'Proyectos con IA para adolescentes', alt: 'Imagen del curso de vibe coding para adolescentes', note: 'De 13 a 17 años. Usar asistentes de IA permitidos a esa edad para avanzar más rápido, revisando cada propuesta.' }
    ]
  },

  sections: [
    {
      id: 'celular',
      eyebrow: 'El celular',
      h2: '¿Por qué aprender a crear apps para celular en Perú?',
      lede: 'Porque el celular es la puerta de entrada a internet para casi todos los peruanos. Quien sabe construir para esa pantalla construye para el lugar donde ya está su público.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Uso de internet por grupo de edad en Perú, II trimestre de 2026 (porcentaje)', head: ['Grupo de edad', 'Usó internet', 'De quienes lo usaron, entró desde un celular'], rows: [
          ['6 a 11 años', '68,2', '48,5'],
          ['12 a 18 años', '92,5', '78,1'],
          ['19 a 24 años', '97,3', '97,2'],
          ['25 a 40 años', '95,2', '98,0'],
          ['41 a 59 años', '86,0', '98,4'],
          ['60 años a más', '56,7', '97,7']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Encuesta Nacional de Hogares, boletín técnico de TIC en los hogares del II Trimestre 2026 (setiembre de 2026), Cuadro N° 2.1 para la primera columna y Cuadro N° 2.6 para la segunda; cifras preliminares. La segunda columna se calcula sobre quienes usaron internet, no sobre toda la población del grupo.' },
        { kind: 'p', mt: true, html: 'La tabla trae una sorpresa para quien piensa que los adolescentes viven solo en el celular. En el segundo trimestre de 2026, el INEI registró que el 92,5 % de los peruanos de 12 a 18 años usó internet, pero entre esos adolescentes conectados el 78,1 % lo hizo desde un teléfono, muy por debajo del 98,0 % de los adultos de 25 a 40 años. Los chicos de secundaria combinan el celular con la computadora del colegio, la laptop de la casa o la de una cabina; los adultos, en cambio, casi solo entran por el teléfono. Y son muchos los hogares con adolescentes conectados: el boletín indica que en 43 de cada 100 hogares con telefonía móvil vive al menos una persona menor de 16 años.' },
        { kind: 'p', html: 'Para quien quiere crear apps, esa combinación es una buena noticia por partida doble. Por un lado, el adolescente ya sabe moverse entre una pantalla grande, donde se escribe el código, y una chica, donde se prueba. Por otro, el público adulto al que podría servir su app, sus padres, sus tíos, la bodega del barrio, entra a internet casi exclusivamente desde el celular. En el país, según el mismo boletín, el teléfono es el medio de conexión del 90,2 % de los usuarios de internet de 6 años a más. Diseñar para la pantalla chica no es una moda: es diseñar para quien la va a usar.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Pensar en pantallas', p: 'Una app es una serie de pantallas conectadas: inicio, registro, lista, detalle. Antes de programar, el estudiante las dibuja en papel y decide qué botón lleva a dónde.' },
          { h3: 'Pensar en datos', p: 'Detrás de cada pantalla hay datos: qué se guarda, dónde y qué pasa si el usuario escribe algo inesperado. Ahí está la lección de ejemplo de esta página.' },
          { h3: 'Pensar en personas', p: 'La app se prueba con la familia y los amigos. Ver a alguien atascarse con un botón enseña más diseño que cualquier explicación.' }
        ] }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Lo que da la secundaria',
      h2: '¿Se aprende a crear apps en el colegio en Perú?',
      lede: 'No como curso propio. El plan de estudios de secundaria no tiene un área de computación ni de programación, aunque el currículo nacional sí pide que los estudiantes creen objetos digitales y gestionen proyectos de emprendimiento.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice el currículo',
          left: [
            'El Currículo Nacional de la Educación Básica (CNEB) incluye la competencia transversal 28, "Se desenvuelve en entornos virtuales generados por las TIC". Una de sus capacidades es "Crea objetos virtuales en diversos formatos", que el CNEB define como construir materiales digitales "siguiendo un proceso de mejoras sucesivas y retroalimentación".',
            'Esa definición describe con bastante precisión cómo se hace una app: una primera versión, la opinión de quien la usa, una segunda versión. Lo que el CNEB no fija es un lenguaje ni unas horas para hacerlo; cada colegio decide dentro de las áreas.'
          ],
          rightH3: 'Educación para el Trabajo',
          right: [
            'En secundaria existe el área Educación para el Trabajo, con una sola competencia: "Gestiona proyectos de emprendimiento económico y social". Tiene 2 horas pedagógicas a la semana en la jornada escolar regular y 3 en la jornada escolar completa, en cada grado.',
            'Muchos estudiantes llegan a nuestras clases con un proyecto de emprendimiento del colegio que podría ser una app: un catálogo para la bodega familiar, un sistema de pedidos para la kermés. El curso les da la parte técnica que el área no alcanza a cubrir.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Grado de secundaria, edad normativa y por dónde empezar a crear apps', head: ['Grado de secundaria', 'Edad que fija el MINEDU (al 31 de marzo)', 'Primer paso que sugerimos'], rows: [
          ['1° de secundaria', '12 años', 'Apps con bloques, en el curso para niños de 8 a 12'],
          ['2° de secundaria', '13 años', 'JavaScript desde cero, con pantallas sencillas'],
          ['3° de secundaria', '14 años', 'React Native: navegación y formularios'],
          ['4° de secundaria', '15 años', 'Datos guardados, validación y una app completa'],
          ['5° de secundaria', '16 años', 'Una app propia publicada para un grupo de usuarios reales']
        ] },
        { kind: 'source', html: 'Fuentes: MINEDU, "Edades normativas" (la edad se cuenta al 31 de marzo de cada año); CNEB, Ministerio de Educación del Perú, competencia 28 y plan de estudios de secundaria. La tercera columna es nuestra; un estudiante de cualquier grado empieza donde su nivel lo indique en la clase gratis.' },
        { kind: 'p', mt: true, html: 'El propio MINEDU ha dado una señal sobre el valor de programar en secundaria: en julio de 2025 lanzó la estrategia Fábrica de Programadores, que en su primera etapa forma en Python a 1,000 escolares de 4° y 5° de secundaria de Lima Norte, con la posibilidad de rendir el examen PCEP, "con validez global". Es un piloto, no un curso del plan de estudios. Nosotros no formamos parte de él ni estamos vinculados al MINEDU; acompañamos al colegio en otro horario y no ponemos notas escolares.' }
      ]
    },
    {
      id: 'con-ia',
      eyebrow: 'Apps con IA',
      h2: '¿Un adolescente puede crear apps con IA?',
      lede: 'Puede usar asistentes de IA, pero solo los que sus términos permiten a su edad, y siempre como ayuda y no como reemplazo. Varias de las búsquedas más comunes en Perú nombran herramientas que un menor de 18 no debería usar.',
      body: [
        { kind: 'p', html: 'Entre las sugerencias de búsqueda peruanas aparecen "crear apps con ia", "crear apps con claude" y "crear apps con gemini". Antes de elegir una herramienta, conviene leer qué dicen sus dueños sobre la edad. Los resumimos tal como figuran en sus propios términos, que revisamos el 15 de julio de 2026:' },
        { kind: 'ol', items: [
          '<strong>Claude, de Anthropic:</strong> pide 18 años como mínimo, o la edad de consentimiento local si es mayor. No lo usamos con adolescentes.',
          '<strong>Gemini, de Google:</strong> exige "13 (or the applicable age in your country)" y deja fuera las cuentas supervisadas con Family Link. Como la edad aplicable cambia según el país, no la recomendamos a menores.',
          '<strong>ChatGPT, de OpenAI:</strong> permite desde los 13 años, pero quien tiene menos de 18 necesita el permiso de su madre, padre o tutor.',
          '<strong>Replit:</strong> sus términos dicen "You must be an adult to use the Service." y solo prevén permiso familiar para menores de 13, así que un adolescente queda en una zona sin cubrir. No lo usamos con ellos.',
          '<strong>GitHub Copilot:</strong> sus términos fijan 13 años. Es la opción que solemos usar en clase con adolescentes, siempre con la familia informada.'
        ] },
        { kind: 'p', mt: true, html: 'Con la herramienta correcta, el método es el mismo que con cualquier código: el estudiante escribe qué espera que pase, recibe la propuesta, la prueba en el teléfono y explica cada parte. Una app armada por una IA que nadie entiende se rompe a la primera actualización, y su autor no sabe por dónde empezar a arreglarla.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que hace bien la IA en una app',
          left: [
            'Proponer el esqueleto de una pantalla, sugerir nombres de variables, explicar un mensaje de error o mostrar tres maneras de ordenar una lista.',
            'Para un adolescente que se traba, una pista a tiempo evita que abandone. El mentor enseña a pedir pistas y no soluciones completas.'
          ],
          rightH3: 'Lo que la IA no decide',
          right: [
            'Qué datos pide la app, a quién va dirigida y qué pasa si alguien escribe algo raro en un formulario. Eso es diseño, y lo decide el estudiante.',
            'Si la app pide datos personales de otras personas. En clase la regla es pedir lo mínimo y nunca datos de compañeros sin permiso de sus familias.'
          ] },
        { kind: 'p', mt: true, html: 'La guía completa de edades, con más de cien herramientas y la cita de cada proveedor, está en nuestra página <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> (en inglés).' }
      ]
    },
    {
      id: 'leccion',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se valida el registro de una app?',
      lede: 'Casi todas las apps empiezan con un formulario: nombre, edad, contraseña. Esta lección, escrita por nosotros, enseña a revisar lo que escribe el usuario antes de aceptarlo. La escribimos en Python porque se lee como inglés; en la app se traduce a JavaScript casi línea por línea.',
      body: [
        { kind: 'code', label: 'Versión 1: se detiene en el primer problema', lang: 'Python', code: V1, note: 'La pregunta del mentor antes de correrlo: "If Valeria types nothing right, how many messages does she see?"' },
        { kind: 'code', label: 'Resultado de la versión 1', lang: 'Salida', code: V1_OUT, note: 'Es lo que imprimió el archivo cuando lo corrimos con Python 3, sin tocar nada.' },
        { kind: 'p', mt: true, html: 'La versión 1 funciona, pero trata mal al usuario. Con <code>elif</code>, la función devuelve el primer problema que encuentra y se calla el resto. Valeria tendría que corregir el nombre, enviar, leer que su edad no alcanza, corregir, enviar otra vez y recién entonces enterarse de que la contraseña es corta. Tres viajes para tres errores que el programa podía ver de una sola vez. Y hay un problema más: la versión 1 acepta <code>quinoa2026</code>, pero también aceptaría <code>quinoaaaa</code>, una contraseña sin ningún número.' },
        { kind: 'code', label: 'Versión 2: junta todos los problemas en una lista', lang: 'Python', code: V2, note: 'Cada <code>if</code> es independiente y añade su mensaje a <code>errors</code>. Una lista vacía significa que el registro es válido.' },
        { kind: 'code', label: 'Resultado de la versión 2', lang: 'Salida', code: V2_OUT, note: 'Salida tal como la produjo nuestra ejecución. La tercera línea, <code>[]</code>, es la buena noticia: ningún error.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer en voz alta.</strong> El estudiante explica en inglés la diferencia: "With elif, only the first true condition runs. With separate ifs, every check runs."',
          '<strong>Contar mensajes.</strong> Con el registro vacío, la versión 1 muestra un mensaje y la versión 2 muestra cuatro. ¿Cuál prefiere el usuario?',
          '<strong>Encontrar la regla nueva.</strong> La versión 2 añade una cuarta comprobación: <code>password.isalpha()</code> es verdadero cuando la contraseña tiene solo letras, como <code>quinoa</code>, y entonces pide un número.',
          '<strong>Buscar el caso olvidado.</strong> ¿Qué pasa si alguien escribe su nombre solo con espacios? <code>name.strip()</code> los quita antes de comparar. Sin <code>strip</code>, un nombre de tres espacios pasaría como válido.',
          '<strong>Llevarlo al celular.</strong> En React Native, la lista de errores se muestra debajo del formulario, en rojo, y el botón de enviar se desactiva mientras la lista no esté vacía.'
        ] },
        { kind: 'p', mt: true, html: 'La regla de los 13 años del ejercicio no es casual: es la misma idea que aplican los proveedores de IA de la sección anterior. Un adolescente que programa la comprobación de edad de su propia app entiende por qué existen esas reglas, y por qué en clase no usamos herramientas que piden 18.' }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'En casa',
      h2: '¿Se puede programar una app desde el celular?',
      lede: 'Probarla, sí. Escribirla con comodidad, no: para eso se necesita una pantalla grande y un teclado de verdad. El celular sirve para ver la app funcionando mientras se escribe el código en la pantalla grande.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dicen los datos del INEI',
          left: [
            'El boletín de TIC del INEI para el segundo trimestre de 2026 cuenta que algo más de un tercio de los hogares peruanos (36,4 %) tiene computadora, y que en Lima Metropolitana la proporción llega a 53,3 %. Además, tres de cada cuatro hogares con computadora (74,3 %) tienen solo una.',
            'Eso significa que en muchas casas el adolescente comparte el equipo con hermanos o con el trabajo de los padres. Por eso acordamos el horario de clase con la familia y no al revés.'
          ],
          rightH3: 'Lo que necesita su hijo o hija',
          right: [
            'Una laptop o computadora con teclado, cámara y micrófono; un celular Android o un iPhone para probar la app, aunque sea el de un familiar; y una conexión estable.',
            'No hace falta comprar nada especial ni pagar cuentas de desarrollador para aprender. Si más adelante la app se publica en una tienda, nuestra recomendación es que la cuenta la abra una persona adulta de la familia.'
          ] },
        { kind: 'p', mt: true, html: 'Si su hijo estudia en un colegio bilingüe limeño, vea <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, una página en inglés pensada para ese caso. Si en su casa hay también un hermano menor de 12 años, la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> muestra por dónde empieza esa edad.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Un trimestre',
      h2: '¿Qué app puede construir un adolescente en doce semanas?',
      lede: 'Una app pequeña, completa y propia. Este es un plan de ejemplo nuestro para quien empieza sin experiencia, con dos clases en vivo por semana.',
      body: [
        { kind: 'table', numCols: [], caption: 'Plan de doce semanas para crear una primera app (plan nuestro, se ajusta a cada estudiante)', head: ['Semanas', 'Qué aprende', 'Qué construye'], rows: [
          ['1 a 3', 'Variables, condiciones, listas y funciones en JavaScript', 'Un juego de preguntas en el navegador'],
          ['4 a 6', 'Componentes y navegación en React Native', 'Tres pantallas conectadas: inicio, lista y detalle'],
          ['7 a 9', 'Formularios, validación y datos guardados en el teléfono', 'Registro con la lista de errores de la lección'],
          ['10 a 12', 'Pruebas con usuarios, corrección de errores y presentación', 'La app terminada, probada por cinco personas de su entorno']
        ] },
        { kind: 'p', mt: true, html: 'Algunas ideas que funcionan bien con adolescentes peruanos: una agenda de tareas y exámenes del colegio, un recetario de comida de la familia con buscador, un registro de gastos de la promoción para el viaje de fin de año, una app de entrenamiento para el equipo de vóley. Lo importante es que el estudiante conozca a quien la va a usar, porque así sabe qué preguntarle.' },
        { kind: 'p', html: 'Para quien prefiere arrancar en el verano, de enero a marzo, la página de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación online</a> propone cómo repartir esas semanas, y la de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-la-molina-lima">vacaciones útiles de programación en La Molina</a> está pensada para un distrito con muchos estudiantes de secundaria.' },
        { kind: 'p', html: 'Si a su hijo o hija le atrae competir, los hackatones son una buena meta. El MINEDU realizó en 2025 la cuarta edición de su Hackathon, que premió proyectos de estudiantes y docentes en IA y robótica, y contó que de 2023 a 2025 la participación de chicas aumentó 28 %. Nuestro curso de preparación para hackatones de 13 a 17 años trabaja la idea, el prototipo y la presentación; la inscripción a cualquier concurso escolar va por el colegio.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo sabe la familia si su hijo avanza?',
    lede: 'Cinco niveles propios, cada uno con algo que el estudiante puede mostrar en el celular.',
    table: { caption: 'Cinco niveles para crear apps (nuestros)', head: ['Nivel', 'Lo que el estudiante sabe hacer', 'Lo que puede mostrar'], rows: [
      ['1. Lógica', 'usar variables, condiciones y bucles', 'un juego de preguntas que cuenta puntos'],
      ['2. Pantallas', 'armar componentes y pasar de una pantalla a otra', 'una app de tres pantallas'],
      ['3. Datos', 'guardar información y leerla al volver a abrir la app', 'una lista que no se borra al cerrar'],
      ['4. Validación', 'revisar lo que escribe el usuario y mostrar todos los errores', 'un registro como el de la lección'],
      ['5. Usuarios', 'probar con otras personas y corregir lo que les costó', 'la app terminada y una lista de cambios']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pida a su hijo que le enseñe la app en el celular y que le diga qué pasa si usted escribe mal un dato. Si sabe responder, entendió.',
      'El nivel 3 suele tomar más tiempo que los demás. Es normal: guardar datos es donde aparecen los errores más difíciles.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Dibuje las pantallas en papel antes de escribir una línea.',
      'Pruebe su app con alguien que no la conoce y quédese callado mientras la usa: lo que vea vale más que cualquier opinión.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para adolescentes',
    lede: 'Mentor fijo, sesiones en vivo y todo en inglés; se puede llevar cada uno en grupo o solo.',
    bands: [
      { num: 'I', h3: 'Lenguajes', sub: 'De 13 a 17 años', courses: [
        { code: 'CRA / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'El lenguaje de la Fábrica de Programadores, de cero a proyectos propios.' },
        { code: 'CRA / BASE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'El lenguaje clásico de Android, con programación orientada a objetos.' },
        { code: 'CRA / BASE / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git y GitHub para adolescentes', blurb: 'Guardar cada versión de la app y trabajar en equipo sin perder nada.' }
      ] },
      { num: 'II', h3: 'Diseño y web', sub: 'Lo que ve el usuario', courses: [
        { code: 'CRA / WEB / 01', slug: 'frontend-development-masterclass-for-teens', title: 'Front end para adolescentes', blurb: 'HTML, CSS y JavaScript para interfaces claras y ordenadas.' },
        { code: 'CRA / WEB / 02', slug: 'react-for-teens-complete-masterclass', title: 'React para adolescentes', blurb: 'La base de React Native, aplicada primero en la web.' },
        { code: 'CRA / WEB / 03', slug: 'creative-media-design-masterclass-teens', title: 'Diseño y medios creativos', blurb: 'Íconos, colores y pantallas que se entienden de un vistazo.' }
      ] },
      { num: 'III', h3: 'Datos y retos', sub: 'Lo que pasa por detrás', courses: [
        { code: 'CRA / MAS / 01', slug: 'mysql-mastery-for-teens', title: 'MySQL para adolescentes', blurb: 'Bases de datos y consultas SQL para apps que guardan información.' },
        { code: 'CRA / MAS / 02', slug: 'backend-coding-masterclass-for-teens', title: 'Back end para adolescentes', blurb: 'Servidores y APIs para que la app hable con internet.' },
        { code: 'CRA / MAS / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Preparación para hackatones', blurb: 'Doce semanas para idear, construir y presentar, de 13 a 17 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué pasa durante cada clase en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Turno mañana libre', l: 'Para quien estudia por la tarde en el colegio.' },
      { time: 'Después de clases', l: 'Para quien sale del colegio a mediodía y ya almorzó.' },
      { time: 'Individual', l: 'Día y hora acordados entre la familia y el mentor.' }
    ],
    cells: [
      { h3: 'Pantalla compartida', p: 'El mentor ve el código y el celular del estudiante al mismo tiempo.' },
      { h3: 'Código propio', p: 'El adolescente escribe cada línea; el mentor pregunta, no dicta.' },
      { h3: 'IA según la edad', p: 'Solo herramientas que sus términos permiten de 13 a 17 años.' },
      { h3: 'Una app por tramo', p: 'Cada etapa cierra con algo que se instala y se usa.' },
      { h3: 'Nota para la familia', p: 'Un resumen corto de lo trabajado y del paso siguiente.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte adolescentes de edad parecida, o con el mentor a solas.' }
    ]
  },

  projectsH2: 'Apps y proyectos de nuestros estudiantes',
  projectsLede: 'Una muestra de lo que construyen estudiantes de otros países con el mismo método. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de Google escritas por estudiantes y familias, reproducidas en su inglés original.',

  fees: {
    h2: 'Cuánto cuesta el curso para crear apps',
    lede: 'Mostramos la cuota mensual en dólares estadounidenses y la cobramos con tarjeta. La conversión a la moneda de su cuenta la hace el banco de la tarjeta, por eso el monto final del estado de cuenta puede moverse un poco con el tipo de cambio.',
    free: ['Una clase gratis con un mentor', 'Un primer reto de app hecho en vivo', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte adolescentes de edad parecida', 'Un solo mentor para todo el recorrido', 'Dos encuentros en vivo cada semana', 'Pago mes a mes, sin permanencia'],
    one: ['Su hijo o hija y un mentor, nadie más', 'La app que el estudiante quiera construir', 'El día y la hora que la familia elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Crear apps para adolescentes: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. El idioma de cada sesión es el inglés, y la sesión es siempre en vivo y por internet. Muchas familias nos escogen por eso mismo: su hijo construye una app y, en la misma hora, habla inglés con un mentor que lo escucha y le responde. Lima figura con nivel alto en el EF EPI 2025, y conversar sobre código es una práctica oral muy concreta.' },
      { q: '¿Desde qué edad se puede aprender a crear apps?', a: 'Este curso es para adolescentes de 13 a 17 años. Un estudiante de 12, que según el MINEDU es la edad normativa de 1° de secundaria, suele empezar con apps hechas con bloques, en nuestro curso para niños de 8 a 12.' },
      { q: '¿Mi hijo necesita saber programar antes?', a: 'No. El curso empieza con JavaScript desde cero. Lo que sí ayuda es que escriba con soltura en un teclado.' },
      { q: '¿Se puede crear una app solo con el celular?', a: 'La app se prueba en el celular, pero se escribe en una laptop o una PC con teclado. El INEI registró computadora en 36,4 % de los hogares peruanos y en 53,3 % de los de Lima Metropolitana durante el segundo trimestre de 2026.' },
      { q: '¿Usan IA para crear las apps?', a: 'Sí, con límites. Usamos con adolescentes solo herramientas cuyos términos lo permiten de 13 a 17 años, como GitHub Copilot, y la familia está informada. No usamos Claude, que pide 18 años, ni Replit, que pide ser adulto. Cada línea que entra a la app la explica el estudiante.' },
      { q: '¿La app sirve para el curso de Educación para el Trabajo?', a: 'Puede servir como idea, porque esa área del CNEB trabaja proyectos de emprendimiento. Pero la nota la pone el colegio con sus propios criterios; nuestras clases no reemplazan ningún curso escolar ni otorgan calificaciones.' },
      { q: '¿En qué horario son las sesiones?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como el reloj de la India marca 10 horas y 30 minutos más que el de Perú durante todo el año, una clase a las 8:00 a. m. en Lima empieza a las 6:30 p. m. para el mentor.' },
      { q: '¿Cómo se paga el curso?', a: 'Con tarjeta, en dólares estadounidenses; el banco convierte el monto a su moneda. La clase de prueba es gratuita y no pide datos de tarjeta.' },
      { q: '¿Publican la app en Google Play o en la App Store?', a: 'Aprender no requiere publicar. Si el estudiante quiere hacerlo al final, le enseñamos los pasos, y recomendamos que la cuenta de desarrollador la abra una persona adulta de la familia.' },
      { q: '¿El curso tiene validez para el colegio o la universidad?', a: 'No. No estamos vinculados al MINEDU, a ninguna UGEL ni a ningún colegio o universidad. Al terminar, el estudiante recibe un certificado de finalización de Modern Age Coders, que es solo nuestro.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas útiles para adolescentes y familias, la mayoría en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todos nuestros cursos para Perú, ordenados por edad.' },
      { href: '/vibe-coding-for-teens', label: 'Vibe coding for teens', p: 'Proyectos con IA para secundaria, con las reglas de edad aplicadas.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué edad pide cada herramienta de IA, con la cita del proveedor.' },
      { href: '/student-labs', label: 'Student labs', p: 'Apps y proyectos publicados por estudiantes.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo trabaja un mentor durante una sesión en vivo.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo entero, de primaria a profesionales.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis para crear su primera app',
    lede: 'En la clase gratis el mentor le pide a su hijo o hija que imagine una app, dibujan juntos dos pantallas y escriben unas líneas de código que funcionan. Con eso recomendamos el curso y el formato, sin compromiso.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cuenta cómo son nuestras sesiones y <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> reúne las edades de cada herramienta (ambas en inglés).',
    note: 'Sesiones en vivo por internet con mentores que viven en la India, siempre en inglés. Para consultas, WhatsApp es lo más rápido y puede escribir en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Crear apps', links: [
        { href: '/courses/complete-app-development-masterclass-for-teens', label: 'Apps para adolescentes' },
        { href: '/courses/javascript-course-for-teens-beginners-interactive-web', label: 'JavaScript desde cero' },
        { href: '/courses/vibe-coding-for-teens-python-web-ai-projects-course', label: 'Proyectos con IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/ai-tools-age-guide', label: 'Edades de la IA' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Una lista vacía es una buena noticia'
  },

  personalityCss: `
.ag-root.ag-cra .ag-hero h1 { letter-spacing: -0.01em; max-width: 24ch; }
.ag-root.ag-cra .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-cra .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cra .ag-steps li { line-height: 1.58; }
.ag-root.ag-cra .ag-table td:first-child { white-space: nowrap; font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI ENAHO TIC bulletin II trimestre 2026 (Cuadro 2.3 devices, internet use by age, phones and under-16s, computers); MINEDU CNEB (competency 28 and the capacity Crea objetos virtuales, Educación para el Trabajo hours), Edades normativas, Fábrica de Programadores press note, Hackathon 2025 press note; vendor terms (Anthropic, Google Gemini, OpenAI, Replit, GitHub) as quoted in content/ai-tool-age-audit.json (15 July 2026). Read 8 November 2026, regrepped 9 November 2026. The grade-to-start column, the 12-week plan, the levels and the example are our own.',
    localProject: 'A sign-up form check for a teen\'s first app, in Python as a bridge to JavaScript: version 1 uses an if/elif chain and returns only the first problem (Write your name), so a user needs three tries to learn about three errors; version 2 uses separate ifs that append to a list and adds an isalpha() rule, printing all four messages for an empty form and [] for Valeria, 14, quinoa2026. Lesson family: input validation that collects every error, and an empty list means valid.',
    requiredMentions: ['Add at least one number to the password', 'This app is for ages 13 and up', 'entre esos adolescentes conectados el 78,1 % lo hizo desde un teléfono', 'muy por debajo del 98,0 % de los adultos de 25 a 40 años', 'Crea objetos virtuales en diversos formatos', 'Gestiona proyectos de emprendimiento económico y social', 'en 43 de cada 100 hogares con telefonía móvil', 'Una lista vacía es una buena noticia', 'Tres viajes para tres errores'],
    sources: [
      { claim: 'INEI Cuadro 2.1 internet use by age and Cuadro 2.6 phone access by age (II trimestre 2026); 90.2% of users by phone; 43 of 100 mobile households with under-16s; computers 36.4% national, 53.3% Lima, 74.3% only one.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'CNEB competency 28, capacity Crea objetos virtuales; Educación para el Trabajo competency and hours (2 JER, 3 JEC).', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° de secundaria in Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Hackathon 2025 AI and robotics; female participation up 28% 2023 to 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Gemini: 13 or the applicable age in your country; Family Link excluded.', url: 'https://support.google.com/gemini/' },
      { claim: 'ChatGPT: under 18 needs parent or guardian permission.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Replit: must be an adult.', url: 'https://replit.com/terms-of-service' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only, said in the capsule and in an FAQ.',
      'Recommending Claude, Gemini or Replit to under-18s: refused; only tools whose terms allow 13 to 17.',
      'App store developer-account age rules: not fetched, so the page gives our own recommendation (an adult opens the account), labelled as ours.',
      '"Curso de apps para niños": dead search (0 suggestions) and wrong audience; the page is for 13 to 17.',
      'Any MINEDU, UGEL, school or university link, grade or official certificate: none held.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

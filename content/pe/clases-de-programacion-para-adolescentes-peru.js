// SHIP: market | Programación para adolescentes en Perú: qué estudiar en secundaria, desde cero, juegos, OPI e IA | string methods with any(): a password checker whose rules a weak password still passes
'use strict';
// Clases de programación para adolescentes en Perú (ag- Spanish-language door, Peru cluster row PE088, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout, also when the page speaks to the teenager. Fees render in USD from the template only.
// Angle: "programación para adolescentes" (10 suggestions), "cursos de programación para adolescentes perú", "programacion
// python para adolescentes", "curso de programación desde cero para adolescentes", "curso de programación de videojuegos para
// adolescentes", "ia para adolescentes" (KEYWORDS.md 1 and autocomplete_pe.tsv). Over 12 Peruvians write "adolescentes" or
// the grade, never "niños de 13 años" (13 to 15 años returned nothing). Spine: which course suits a secundaria student;
// what secundaria gives and does not (CNEB Tablas 8 and 9: no computing area); Python first, from zero; games; the state's
// own Python pilot (Fábrica de Programadores); the computing olympiads (OPI, UTEC) and ONEM as context; AI at 13 to 17
// within the vendors' age rules; one original Python lesson on passwords; the clock.
// Sources (raw copies under facts-school/src/ and ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/
// clases-de-programacion-para-adolescentes-peru/; read 2026-11-09; quotes grepped in the raw text):
//  MINEDU Edades normativas PDF (FACTS 14): "6 años 7 años 8 años 9 años 10 años 11 años 12 años 13 años 14 años 15 años
//   16 años"; read in order 1° secundaria = 12 ... 5° secundaria = 16 (at 31 March).
//  Ley 28044 (FACTS 6): "La Educación Secundaria constituye el tercer nivel de la Educación Básica Regular y dura cinco años.
//   Ofrece a los estudiantes una formación científica, humanista y técnica."
//  CNEB, TABLA N.° 8 (JER): "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3 Arte y cultura 3 3 3 3 3 Ciencias
//   sociales 3 3 3 3 3 Desarrollo personal, ciudadanía y cívica 3 3 3 3 3 Educación física 3 3 3 3 3 Educación religiosa 2 2 2
//   2 2 Ciencia y tecnología 4 4 4 4 4 Educación para el trabajo 2 2 2 2 2 Tutoría y orientación educativa 2 2 2 2 2 Horas de
//   libre disponibilidad 2 2 2 2 2 Total de horas 35 35 35 35 35"; TABLA N.° 9 (JEC): "Matemática 6 6 6 6 6 Comunicación 5 5 5
//   5 5 Inglés 5 5 5 5 5 ... Ciencias sociales 4 4 4 4 4 Desarrollo personal, ciudadanía y cívica 4 4 4 4 4 ... Ciencia y
//   tecnología 5 5 5 5 5 Educación para el trabajo 3 3 3 3 3 ... Horas de libre disponibilidad 3 3 3 3 3 Total de horas 45 45 45
//   45 45"; "EDUCACIÓN PARA EL TRABAJO Gestiona proyectos de emprendimiento económico y social" (FACTS 37); "Competencias
//   transversales a las áreas: Se desenvuelve en" (FACTS 33); "horas pedagógicas (45 minutos)".
//  MINEDU press note 24 July 2025 (FACTS 45, 46, 47): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con
//   formación en programación Python y certificación internacional"; "en alianza con Cisco Networking Academy"; "podrán rendir
//   el examen PCEP, con validez global"; "Esta experiencia piloto busca validar el modelo pedagógico y replicarlo en el ámbito
//   nacional".
//  UTEC, opi.utec.edu.pe (FACTS 111, 112, 113): "organizadas por la Universidad de Ingeniería y Tecnología (UTEC), abiertas
//   gratuitamente a todos los estudiantes de secundaria del país"; "Inscripciones : hasta el 18 de marzo del 2026 .
//   Competencia : 11 de Abril (Fase 2 - Final)"; OPEIA delegation to the IOAI 2025.
//  OPI rules 2025 PDF (FACTS 114, 116, 118): selects OII and IOI delegations; Fase 2 "Se podr´a usar solo C++."; "Queda
//   prohibido el uso de IA generativa para la resoluci´on de problemas."
//  IOI stats, Peru (FACTS 119, 120): "First participation: 2022 Years participated: 5 Contestants participated: 13"; "Gold
//   medals: 0 Silver medals: 0 Bronze medals: 1".
//  El Peruano, 11 Oct 2026 (FACTS 105): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria de todo el país."
//  MINEDU Hackathon 2025 note (FACTS 49): "entre 2023 y 2025, la presencia de estudiantes mujeres creció en 28 %".
//  INEI boletín TIC II Trimestre 2026, Cuadro 2.1, row 12 a 18 años "89,7 91,4 90,7 92,5 1,8" (2023 to 2026).
//  EF EPI 2025 Peru page (MARKET 1.3): 18 to 20 year olds 469, "ageGroup1ProficiencyBand":"low".
//  AI tool ages, content/ai-tool-age-audit.json: ChatGPT "If you are under 18 you must have your parent or legal guardian's
//   permission"; Claude "You must be at least 18 years old".
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (clave.py and clave_v2.py in the src-pages folder), exact output:
//   clave.py: machupicchu -> too short, no digit, no capital / Huascaran6768 -> OK / Machupicchu2026 -> OK
//   clave_v2.py: machupicchu -> too short, no digit, no capital, contains machupicchu / Huascaran6768 -> OK /
//   Machupicchu2026 -> contains machupicchu / tres-gatos-comen-7-panes -> no capital
// Lesson family: string methods (isdigit, isupper, lower) inside any() and a function that returns a list of problems; then
// the critical step: a rule set that a guessable password still passes and a strong passphrase still fails.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def revisar(clave):',
  '    problemas = []',
  '    if len(clave) < 12:',
  "        problemas.append('too short')",
  '    if not any(c.isdigit() for c in clave):',
  "        problemas.append('no digit')",
  '    if not any(c.isupper() for c in clave):',
  "        problemas.append('no capital')",
  '    return problemas',
  '',
  "for clave in ['machupicchu', 'Huascaran6768', 'Machupicchu2026']:",
  '    p = revisar(clave)',
  '    if p:',
  "        print(clave, '->', ', '.join(p))",
  '    else:',
  "        print(clave, '-> OK')"
].join('\n');

const OUT = [
  'machupicchu -> too short, no digit, no capital',
  'Huascaran6768 -> OK',
  'Machupicchu2026 -> OK'
].join('\n');

const PY2 = [
  "COMUNES = ['machupicchu', 'peru', 'lima', 'password', '123456']",
  '',
  '# dentro de revisar(), antes del return:',
  '    for palabra in COMUNES:',
  '        if palabra in clave.lower():',
  "            problemas.append('contains ' + palabra)",
  '',
  "# y una cuarta clave en la lista: 'tres-gatos-comen-7-panes'"
].join('\n');

const OUT2 = [
  'machupicchu -> too short, no digit, no capital, contains machupicchu',
  'Huascaran6768 -> OK',
  'Machupicchu2026 -> contains machupicchu',
  'tres-gatos-comen-7-panes -> no capital'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para adolescentes' },
  slug: 'clases-de-programacion-para-adolescentes-peru',
  code: 'pad',
  accent: '#6B5E00',
  accentRationale: 'Clases de programación para adolescentes: a dark olive #6B5E00, the colour of a well-used secundaria notebook cover, warmer than the greens of the two primaria doors so a teenager does not feel sent to the children\'s page; allocated in alloc.tsv and checked by the build for at least 4.5:1 on every paper tint',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para adolescentes en Perú',
  title: 'Clases de programación para adolescentes en Perú, en vivo',
  description: 'Cursos de programación para adolescentes de 12 a 17 años en Perú, en vivo y en inglés: Python desde cero, videojuegos, Java e IA, en grupo o uno a uno, a toda hora.',
  ogDescription: 'Programación para adolescentes en Perú: qué no enseña la secundaria, por qué empezar con Python, videojuegos, la OPI de UTEC y la IA dentro de las reglas de edad.',
  twitterDescription: 'Clases de programación para adolescentes de 1° a 5° de secundaria en Perú, en vivo y en inglés, desde cero y a la hora que elijan.',
  pageName: 'Clases de programación para adolescentes en Perú',
  webPageDescription: 'Guía para adolescentes de secundaria y sus familias en Perú sobre los cursos de programación dictados en vivo y en inglés: lo que el plan de estudios de secundaria del CNEB incluye y no incluye, cómo empezar desde cero con Python, videojuegos y Java, el piloto Fábrica de Programadores del MINEDU, las olimpiadas de computación de UTEC, el uso de la IA según la edad y una clase de ejemplo sobre contraseñas escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para adolescentes de 12 a 17 años en todo el Perú, dictadas solo en inglés: Python desde cero, desarrollo de videojuegos, Java, web, apps e inteligencia artificial, en clase grupal o individual y a la hora que decidan en casa.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para adolescentes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-curso', label: 'Qué curso' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#python', label: 'Python' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#olimpiadas', label: 'OPI y ONEM' }
  ],
  eyebrow: 'Perú &middot; Programación para adolescentes &middot; De 1° a 5° de secundaria',
  h1: 'Clases de programación para adolescentes, en vivo y en inglés',
  lede: 'Esta página está escrita para dos lectores a la vez: el adolescente de secundaria que quiere aprender a programar de verdad, sin copiar tutoriales, y la madre o el padre que necesita saber si vale el esfuerzo. Explica qué deja fuera el colegio, por dónde empezar desde cero, qué hacer con los videojuegos y la IA, y qué tienen que ver la OPI y la ONEM con todo esto.',
  secondaryCta: { href: '#que-curso', label: '¿Qué curso le conviene?' },
  wa: 'Hola Modern Age Coders, buscamos clases de programación para un adolescente de secundaria en Perú. ¿Podemos reservar la clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; código escrito por el estudiante, nunca copiado',
  spec: [
    ['Edades', 'De 12 a 17 años, de 1° a 5° de secundaria'],
    ['Lenguajes', 'Python, Java, JavaScript, C++ y C# para juegos'],
    ['Nivel', 'Desde cero, o desde donde esté el estudiante'],
    ['Formato', 'Grupo de quince a veinte adolescentes, o individual'],
    ['Horario', 'Cualquier día, a cualquier hora'],
    ['Idioma', 'Todas las clases en inglés']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Modern Age Coders ofrece cursos de programación para adolescentes de 12 a 17 años en todo el Perú, en vivo, en línea y en inglés. Se empieza desde cero con Python y luego cada estudiante elige su camino: videojuegos, Java, web, apps o inteligencia artificial usada dentro de las reglas de edad. Un mentor desde la India enseña por videollamada y exige que el adolescente escriba y explique su propio código. Hay grupos de quince a veinte o clases individuales, a la hora que decidan en casa.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Tres cursos con los que arrancan los adolescentes',
    lede: 'Uno para quien empieza de cero, uno para quien llega por los videojuegos y uno para quien ya tiene base y quiere un lenguaje exigente.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PAD / 01', title: 'Python para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'El punto de partida que recomendamos casi siempre. De las primeras variables a proyectos completos con datos, archivos y algo de IA, a lo largo de 1° a 5° de secundaria si hace falta.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'PAD / 02', title: 'Videojuegos para adolescentes', alt: 'Imagen del curso de desarrollo de videojuegos para adolescentes', note: 'Unity y C# para el estudiante que quiere crear juegos y no solo jugarlos. Física, colisiones, niveles y un juego terminado que puede compartir.' },
      { course: 'java-programming-masterclass-for-teens', code: 'PAD / 03', title: 'Java para adolescentes', alt: 'Imagen del curso de Java para adolescentes', note: 'Para quien ya domina lo básico y quiere el lenguaje que usan muchas carreras de ingeniería: clases, objetos y estructuras de datos, con paciencia y orden.' }
    ]
  },

  sections: [
    {
      id: 'que-curso',
      eyebrow: 'Elegir bien',
      h2: '¿Qué curso de programación le conviene a un adolescente?',
      lede: 'El que empiece por pensar y no por la herramienta de moda. Para casi todos los adolescentes eso significa Python primero, unas semanas de bases sólidas, y después el camino que le entusiasme: juegos, web, apps, Java o IA.',
      body: [
        { kind: 'table', numCols: [], caption: 'Qué estudiar según el punto de partida (nuestra recomendación)', head: ['Si el adolescente...', 'Le proponemos', 'Por qué'], rows: [
          ['nunca ha programado', 'Python desde cero', 'Se lee casi como inglés y da resultados desde la primera clase'],
          ['vive pegado a los videojuegos', 'Python unas semanas, luego Unity y C#', 'Sin lógica previa, el motor de juegos se vuelve copiar y pegar'],
          ['usó Scratch en primaria', 'Python directo, sin repetir bloques', 'Ya entiende bucles y condiciones; le falta escribirlos'],
          ['piensa estudiar ingeniería o sistemas', 'Python y luego Java', 'Java obliga a ordenar el código en clases y tipos'],
          ['quiere competir en la OPI', 'Python, luego C++ y problemas de algoritmos', 'La fase final de la OPI se programa solo en C++'],
          ['quiere hacer cosas con IA', 'Python y un curso de IA para su edad', 'Para entender un modelo hay que saber leer los datos que lo alimentan']
        ] },
        { kind: 'p', mt: true, html: 'Los cursos para adolescentes que ofrecemos no son versiones aguadas de los de adultos ni versiones infantiles estiradas. Están pensados para alguien de 12 a 17 años que ya razona en abstracto, que se aburre si le explican lo obvio y que se frustra si le exigen sin explicar. Por eso el mentor alterna: un concepto, un reto, una pregunta incómoda ("¿y si el usuario escribe una letra donde esperabas un número?"), y vuelta a empezar.' },
        { kind: 'p', html: 'A los padres les decimos lo mismo en la clase gratis: si su hijo o hija programa con nosotros un año entero, lo que gana no es una lista de lenguajes en el currículum, sino la costumbre de descomponer un problema en partes, probar cada parte y explicar por qué funciona. Esa costumbre sirve igual para un examen de Matemática, para un proyecto del colegio o para la universidad.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Lo que da el colegio',
      h2: '¿La secundaria peruana tiene un curso de programación?',
      lede: 'No como curso propio. Los dos planes de estudio de secundaria del Currículo Nacional, el de jornada regular y el de jornada completa, reparten las horas entre once áreas y un bloque de libre disponibilidad, y ninguna de esas áreas es computación ni programación.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Horas pedagógicas semanales en cada grado de secundaria, según el CNEB (Tablas N.° 8 y N.° 9)', head: ['Área curricular', 'Jornada Escolar Regular', 'Jornada Escolar Completa'], rows: [
          ['Matemática', '4', '6'],
          ['Comunicación', '4', '5'],
          ['Inglés', '3', '5'],
          ['Arte y cultura', '3', '3'],
          ['Ciencias sociales', '3', '4'],
          ['Desarrollo personal, ciudadanía y cívica', '3', '4'],
          ['Educación física', '3', '3'],
          ['Educación religiosa', '2', '2'],
          ['Ciencia y tecnología', '4', '5'],
          ['Educación para el trabajo', '2', '3'],
          ['Tutoría y orientación educativa', '2', '2'],
          ['Horas de libre disponibilidad', '2', '3'],
          ['Total de horas a la semana', '35', '45']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Educación, Currículo Nacional de la Educación Básica, Tabla N.° 8 (instituciones con Jornada Escolar Regular) y Tabla N.° 9 (con Jornada Escolar Completa, JEC), en minedu.gob.pe/curriculo, leído el 9 de noviembre de 2026. Las horas son las mismas de 1° a 5° de secundaria, y cada hora pedagógica dura 45 minutos.' },
        { kind: 'two', mt: true,
          leftH3: 'Dónde podría aparecer el código',
          left: [
            'Educación para el trabajo tiene dos horas semanales en jornada regular y tres en jornada completa, pero su única competencia en el CNEB trata de emprendimiento: gestionar proyectos económicos y sociales. Algunos colegios la orientan a la computación; muchos no.',
            'Ciencia y tecnología incluye la competencia de diseñar y construir soluciones tecnológicas, y la competencia digital del CNEB es transversal a todas las áreas. Ninguna de las dos exige escribir programas.'
          ],
          rightH3: 'Lo que eso significa para su hijo',
          right: [
            'Que dos adolescentes del mismo grado pueden salir del colegio con experiencias opuestas: uno que programó en un taller de libre disponibilidad y otro que solo usó la computadora para hacer presentaciones.',
            'Que, si su hijo quiere programar, casi siempre tendrá que hacerlo fuera del horario escolar. Nuestras clases acompañan al colegio en otro momento del día y no reemplazan ninguna área.'
          ] },
        { kind: 'p', mt: true, html: 'La Ley General de Educación, Ley N.° 28044, dice que la secundaria "dura cinco años" y ofrece "una formación científica, humanista y técnica". Según la tabla de edades normativas del MINEDU, que se mide al 31 de marzo, un estudiante entra a 1° de secundaria con 12 años y llega a 5° con 16. Son cinco años en los que un adolescente puede pasar de no haber escrito nunca una línea de código a construir aplicaciones completas, si dedica un par de horas a la semana con constancia.' }
      ]
    },
    {
      id: 'python',
      eyebrow: 'Python desde cero',
      h2: '¿Python es bueno para empezar a programar en la adolescencia?',
      lede: 'Sí, y no lo decimos solo nosotros: el propio Ministerio de Educación eligió Python para su piloto de programación con escolares de secundaria.',
      body: [
        { kind: 'p', html: 'Su estrategia Fábrica de Programadores, lanzada en julio de 2025 junto con Cisco Networking Academy, se propuso formar en Python, en una primera etapa, a 1000 escolares de 4° y 5° de secundaria de Lima Norte, con un examen internacional al final. La nota del ministerio añade que quienes concluyan las dos etapas "podrán rendir el examen PCEP, con validez global", y describe el programa como una "experiencia piloto" que busca replicarse en el ámbito nacional. Mil estudiantes son una fracción pequeña de la secundaria peruana, pero la elección del lenguaje es una buena señal.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Se lee como inglés', p: 'Una línea como <code>if not any(c.isdigit() for c in clave)</code> casi se entiende al leerla en voz alta: "si ningún carácter de la clave es un dígito". Para un adolescente que practica inglés, el código y el idioma se refuerzan.' },
          { h3: 'Sirve para todo después', p: 'Con Python se analizan datos, se automatizan tareas, se crean webs y se entrenan modelos de IA. Lo que su hijo aprenda en 1° de secundaria lo seguirá usando en la universidad.' },
          { h3: 'Tiene un examen reconocido', p: 'El PCEP del Python Institute es una certificación de nivel inicial que cualquier persona puede rendir. Para quien quiera una meta concreta, tenemos un curso que prepara ese examen y el siguiente nivel, el PCAP.' }
        ] },
        { kind: 'p', mt: true, html: '¿Y si su hijo empieza "desde cero"? Es lo normal. La mayoría de adolescentes que llegan a nuestra clase gratis nunca escribió un programa, o lo hizo con bloques hace años. En las primeras semanas aprenden variables, condiciones, bucles y funciones; hacia el segundo o tercer mes ya construyen proyectos que resuelven algo de su vida diaria, como el verificador de contraseñas de esta página.' }
      ]
    },
    {
      id: 'juegos',
      eyebrow: 'Videojuegos',
      h2: '¿Cómo aprende un adolescente a programar videojuegos?',
      lede: 'Primero aprendiendo a programar, después usando un motor de juegos. El orden importa: un adolescente que salta directo a Unity sin saber qué es una variable termina copiando scripts que no entiende.',
      body: [
        { kind: 'ol', items: [
          '<strong>Lógica con Python.</strong> Unas semanas para entender variables, condiciones y bucles con juegos de texto: adivinar un número, un combate por turnos, un laberinto en la consola.',
          '<strong>El bucle de un juego.</strong> Todo videojuego repite tres pasos muchas veces por segundo: leer lo que hace el jugador, actualizar el mundo y dibujarlo. Entender eso cambia la forma de mirar cualquier juego.',
          '<strong>Un motor de verdad.</strong> En el curso de desarrollo de videojuegos el adolescente pasa a Unity con C#: escenas, física, colisiones, puntajes y niveles.',
          '<strong>Un juego terminado.</strong> Pequeño, pero completo: con menú, una forma de ganar y una de perder. Terminar un juego enseña más que empezar diez.',
          '<strong>Mostrarlo.</strong> El estudiante presenta su juego en inglés al mentor y explica una decisión de diseño. Los proyectos más logrados pueden publicarse en nuestra galería de estudiantes.'
        ] },
        { kind: 'p', mt: true, html: 'Para quien prefiere Roblox, también enseñamos Luau dentro de Roblox Studio, aunque a partir de los 13 o 14 años suele convenir dar el salto a un motor general. Y para quien prefiere crear apps antes que juegos, el camino es parecido: Python primero, luego un curso de apps para adolescentes con React Native.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de programación para un adolescente de 3° de secundaria?',
      lede: 'Así se ve un fragmento real de una clase de Python. El ejercicio es nuestro: un verificador de contraseñas. Lo interesante no es escribirlo, sino descubrir que funciona y aun así se equivoca.',
      body: [
        { kind: 'code', label: 'Versión 1: tres reglas', lang: 'Python', code: PY, note: '<code>any()</code> devuelve <code>True</code> si al menos un carácter cumple la condición. La función no imprime nada: devuelve la lista de problemas, y el bucle de abajo decide qué mostrar.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT, note: 'Esta es la salida exacta que obtuvimos al correr el programa con Python 3. Las dos últimas claves pasan las tres reglas.' },
        { kind: 'p', mt: true, html: 'Aquí el mentor detiene la clase y pregunta: "Is Machupicchu2026 a good password?" La respuesta honesta es que no. Es el lugar más famoso del país seguido del año: una de las primeras cosas que probaría alguien que quiere adivinarla. El programa dice OK porque cumple las reglas, no porque sea segura. Las reglas miden lo que es fácil de medir.' },
        { kind: 'code', label: 'Versión 2: una lista de palabras comunes', lang: 'Python', code: PY2, note: 'Se agrega una regla más y una cuarta clave, una frase larga con guiones.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta de la segunda versión, también ejecutada por nosotros con Python 3.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Lo que se arregló.</strong> Ahora <code>Machupicchu2026</code> aparece como <code>contains machupicchu</code>. La regla nueva atrapa el caso que la vista humana había detectado.',
          '<strong>Lo que sigue mal.</strong> <code>Huascaran6768</code> todavía pasa: el nombre de un nevado conocido y cuatro cifras. Ninguna lista de palabras comunes será completa.',
          '<strong>Lo que salió al revés.</strong> <code>tres-gatos-comen-7-panes</code> tiene 24 caracteres y es difícil de adivinar, pero el programa la rechaza por <code>no capital</code>. Una regla pensada para proteger castiga a la clave más fuerte de la lista.',
          '<strong>La conclusión.</strong> El estudiante explica en inglés, en dos o tres frases, por qué la longitud de una clave pesa más que una mayúscula, y propone qué regla cambiaría.'
        ] },
        { kind: 'p', mt: true, html: 'Así enseñamos a pensar: el código se escribe, se prueba y después se duda de él. Un adolescente que le pide a una IA "hazme un verificador de contraseñas" obtiene en segundos algo parecido a la versión 1 y probablemente se queda ahí. El que lo construye y lo pone a prueba aprende que un programa puede estar bien escrito y aun así resolver mal el problema.' }
      ]
    },
    {
      id: 'olimpiadas',
      eyebrow: 'OPI, ONEM y concursos',
      h2: '¿Qué son la OPI y la ONEM, y sirven nuestras clases para prepararlas?',
      lede: 'La OPI es la olimpiada peruana de informática que organiza UTEC; la ONEM es la olimpiada escolar de matemática. Nuestras clases desarrollan las habilidades que esos concursos miden, pero no estamos vinculados a ninguno de los organizadores ni prometemos resultados.',
      body: [
        { kind: 'two',
          leftH3: 'Olimpiadas Peruanas de Computación',
          left: [
            'Según su sitio oficial, son competencias "organizadas por la Universidad de Ingeniería y Tecnología (UTEC), abiertas gratuitamente a todos los estudiantes de secundaria del país". En 2026 las inscripciones de la OPI cerraron el 18 de marzo y la final se jugó el 11 de abril.',
            'El reglamento de 2025 indica que la primera fase admite C++ o Python, pero la final presencial se programa solo en C++, y que está prohibido usar IA generativa para resolver los problemas. Los cuatro primeros de la final van a la Olimpiada Internacional de Informática (IOI).'
          ],
          rightH3: 'Olimpiada Nacional Escolar de Matemática',
          right: [
            'Según El Peruano, la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria de todo el país, y su etapa nacional se realizó el 11 de octubre de 2026. La inscripción se hace a través del colegio.',
            'No reproducimos problemas de la ONEM ni de la OPI. En clase usamos problemas originales, escritos por nosotros, que ejercitan el mismo tipo de razonamiento: contar con cuidado, buscar patrones y justificar cada paso.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'El Perú en la Olimpiada Internacional de Informática (IOI)', head: ['Primera participación', 'Años participados', 'Concursantes', 'Medallas'], rows: [
          ['2022', '5', '13', '1 de bronce'] ] },
        { kind: 'source', html: 'Fuente: estadísticas oficiales de la IOI, página de Perú (stats.ioinformatics.org/countries/PER), leída el 9 de noviembre de 2026. La delegación peruana la selecciona la OPI de UTEC.' },
        { kind: 'p', mt: true, html: 'Para un adolescente que apunta a la OPI, la ruta que proponemos es Python para aprender a pensar algoritmos, luego C++ y un curso de programación competitiva para adolescentes. Para quien prefiere la ONEM, nuestras clases de matemática de olimpiada también se dictan en inglés, con problemas propios. Hay más detalle sobre el verano antes de estas fechas en la página de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-isidro-lima">vacaciones útiles de programación en San Isidro</a>.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'Inteligencia artificial',
      h2: '¿Puede un adolescente aprender inteligencia artificial y usar herramientas de IA?',
      lede: 'Aprender cómo funciona la IA, sí, desde los 13 años y con código propio. Usar cada herramienta depende de lo que permita la empresa que la ofrece, y varias no aceptan menores de 18.',
      body: [
        { kind: 'p', html: 'Revisamos las condiciones de uso de cada herramienta antes de llevarla a clase. ChatGPT, por ejemplo, permite usuarios desde los 13 años, pero sus términos dicen que los menores de 18 necesitan el permiso de su madre, padre o tutor. Claude, de Anthropic, exige 18 años cumplidos sin excepción, así que no lo usamos con adolescentes. Nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">guía de edades de las herramientas de IA</a> (en inglés) recoge las reglas de más de cien herramientas, citadas de la página de cada empresa.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que hacemos en clase',
          left: [
            'Construir con Python pequeños modelos que aprenden de datos, para que el adolescente entienda por qué una IA acierta y por qué se equivoca.',
            'Usar asistentes permitidos para su edad como un compañero que se revisa, no como alguien que hace la tarea: el estudiante debe poder explicar cada línea que entregue.'
          ],
          rightH3: 'Lo que pedimos a la familia',
          right: [
            'Que sepa qué herramientas usa su hijo y con qué cuenta. Si una herramienta pide permiso de los padres, ese permiso es suyo, no nuestro.',
            'Que valore más un programa pequeño que su hijo entiende que uno grande que una IA escribió por él.'
          ] },
        { kind: 'p', mt: true, html: 'Los escolares peruanos ya se acercan a la IA por su cuenta. En la edición 2025 de su Hackathon, el MINEDU premió equipos con proyectos de IA y robótica, y según el ministerio la participación de chicas en ese concurso creció en 28 % de 2023 a 2025. Para más detalle sobre el camino de IA por edades, vea la página de <a class="ag-inline-link" href="/vacaciones-utiles-2027-inteligencia-artificial">vacaciones útiles 2027 de inteligencia artificial</a> y, en inglés, <a class="ag-inline-link" href="/ai-classes-for-teenagers">AI classes for teenagers</a>.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Un adolescente que no habla bien inglés puede seguir las clases?',
      lede: 'Sí, si entiende lo básico y tiene paciencia las primeras semanas. Para muchos adolescentes peruanos, la clase de programación termina siendo la hora de la semana en que más inglés hablan.',
      body: [
        { kind: 'p', html: 'Los datos explican por qué vale la pena. El índice EF EPI 2025 da a los peruanos de 18 a 20 años un puntaje de 469, en el nivel bajo, mientras que la ciudad de Lima en conjunto obtiene 555, en el nivel alto. La brecha entre quien acaba de salir del colegio y quien ya trabaja se cierra hablando, y una clase técnica en inglés obliga a hablar con un propósito concreto: explicar un error, defender una decisión, pedir una pista.' },
        { kind: 'p', html: 'La conexión no suele ser el problema. Según el INEI, en el segundo trimestre de 2026 el 92,5 % de los adolescentes de 12 a 18 años usó internet, frente al 89,7 % en el mismo trimestre de 2023. Lo que hace falta, además de la conexión, es una computadora con teclado y un lugar tranquilo para la hora de clase.' },
        { kind: 'p', html: 'Para estudiantes de colegios bilingües o con Bachillerato Internacional escribimos, en inglés, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>. Si está en primaria todavía, la de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> le servirá más.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo avanza un adolescente que empieza de cero?',
    lede: 'Cinco etapas propias que usamos para ubicar a cada estudiante y explicarle a la familia dónde está. El tiempo de cada una varía mucho.',
    table: { caption: 'Cinco etapas de programación para adolescentes (nuestras)', head: ['Etapa', 'Tiempo habitual', 'El estudiante puede'], rows: [
      ['1. Bases', 'Primeros 2 meses', 'usar variables, condiciones, bucles y funciones en programas cortos'],
      ['2. Datos', 'Meses 3 y 4', 'trabajar con listas, diccionarios y archivos, y probar sus funciones'],
      ['3. Proyecto guiado', 'Meses 5 y 6', 'terminar un proyecto mediano, como un juego o un analizador de datos'],
      ['4. Especialidad', 'Segundo semestre', 'avanzar en juegos, web, apps, Java o IA según su interés'],
      ['5. Proyecto propio', 'Desde el primer año', 'proponer, construir y presentar en inglés algo que nadie le encargó']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'El salto difícil es de la etapa 2 a la 3: pasar de ejercicios a un proyecto con muchas partes. Es normal que haya semanas de frustración.',
      'Pregúntele a su hijo qué error le costó más esta semana y cómo lo resolvió. Si sabe contarlo, está aprendiendo.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Escriba usted el código, aunque una IA pueda hacerlo más rápido. La velocidad llega sola; la comprensión no.',
      'Cuando un programa funcione, intente romperlo a propósito. Así se descubrieron los fallos del verificador de contraseñas.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos para secundaria',
    h2: 'Nueve cursos más para adolescentes de 12 a 17 años',
    lede: 'Todos son en vivo y en inglés, con un mentor que acompaña el curso entero, en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Algoritmos y competencias', sub: 'Para la OPI y más allá', courses: [
        { code: 'PAD / ALGO / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolver problemas y estructuras de datos', blurb: 'Lógica, estructuras de datos y algoritmos explicados para secundaria.' },
        { code: 'PAD / ALGO / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ para adolescentes', blurb: 'El lenguaje de la final de la OPI, de lo básico a la STL.' },
        { code: 'PAD / ALGO / 03', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas con límite de tiempo y la manera de pensarlos.' }
      ] },
      { num: 'II', h3: 'Web, apps y seguridad', sub: 'Para construir cosas que se usan', courses: [
        { code: 'PAD / WEB / 01', slug: 'frontend-development-masterclass-for-teens', title: 'Desarrollo web', blurb: 'HTML, CSS y JavaScript hasta interfaces con React.' },
        { code: 'PAD / WEB / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'Apps para el celular', blurb: 'Aplicaciones reales con React Native, de la idea a la pantalla.' },
        { code: 'PAD / WEB / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Ciberseguridad defensiva', blurb: 'Contraseñas, redes y ataques comunes, siempre del lado de quien protege.' }
      ] },
      { num: 'III', h3: 'Datos e inteligencia artificial', sub: 'Desde los 13 años', courses: [
        { code: 'PAD / IA / 01', slug: 'ai-ml-masterclass-teens', title: 'IA y machine learning', blurb: 'De Python a modelos reales que el estudiante entrena y evalúa.' },
        { code: 'PAD / IA / 02', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Preguntas reales respondidas con datos, tablas y gráficos.' },
        { code: 'PAD / IA / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding con criterio', blurb: 'Crear con ayuda de la IA, revisando y entendiendo cada parte, de 13 a 17 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo encajan las clases con la semana de un escolar?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Turno mañana', l: 'Clase por la tarde o al inicio de la noche, hora de Perú.' },
      { time: 'Turno tarde', l: 'Clase por la mañana, antes de salir al colegio.' },
      { time: 'Semanas cargadas', l: 'En individuales, la hora se ajusta en época de exámenes.' }
    ],
    cells: [
      { h3: 'El estudiante escribe', p: 'El mentor guía con preguntas; el teclado es del adolescente.' },
      { h3: 'Mentor estable', p: 'La misma persona todo el curso, que conoce su forma de pensar.' },
      { h3: 'Proyectos reales', p: 'Cada etapa cierra con algo que funciona y se puede mostrar.' },
      { h3: 'IA según la edad', p: 'Solo herramientas cuyas condiciones permiten su edad.' },
      { h3: 'Informe a la familia', p: 'Notas breves sobre lo trabajado y lo que sigue.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte adolescentes de edad parecida, o uno a uno.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Estos son trabajos de estudiantes mayores que empezaron como su hijo, sin saber programar. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Lo que escribieron en Google familias y estudiantes, sin editar y en el idioma original, inglés.',

  fees: {
    h2: 'Precios para adolescentes en Perú',
    lede: 'La mensualidad figura en dólares estadounidenses y se cobra a una tarjeta. Es el banco de la tarjeta el que pasa ese monto a su moneda, por lo que el cargo final puede moverse ligeramente con el tipo de cambio.',
    free: ['Una clase gratis con un mentor', 'Un reto corto para ubicar su nivel', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte adolescentes de edad parecida', 'Un mentor para todo el curso', 'Dos clases en vivo por semana', 'Mes a mes, puede dejarlo cuando quiera'],
    one: ['Solo el estudiante y el mentor', 'El temario y el ritmo que necesita', 'Horario ajustado a su colegio']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para adolescentes: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las dictamos únicamente en inglés, en vivo y por internet, y para muchos adolescentes eso suma: programan y practican el idioma en la misma sesión. El mentor habla claro, repite con otras palabras cuando hace falta y respeta el ritmo del estudiante. Lima figura con un dominio alto del idioma en el índice EF EPI 2025, y lo que una clase como la nuestra entrena sobre todo es la conversación.' },
      { q: '¿Qué curso de programación sirve para un adolescente que empieza de cero?', a: 'Python. Se lee casi como inglés, da resultados desde la primera clase y sirve después para datos, web e IA. El MINEDU eligió ese mismo lenguaje para su piloto Fábrica de Programadores con escolares de 4° y 5° de secundaria.' },
      { q: '¿A qué edad son las clases para adolescentes?', a: 'De 12 a 17 años, es decir, de 1° a 5° de secundaria según la tabla de edades normativas del MINEDU. Con 18 años o más, el estudiante pasa a nuestros cursos para universitarios y adultos.' },
      { q: '¿Mi hijo puede aprender a crear videojuegos?', a: 'Sí. Recomendamos unas semanas de Python para entender la lógica y luego el curso de desarrollo de videojuegos con Unity y C#, que termina con un juego completo. También enseñamos Roblox con Luau.' },
      { q: '¿Mi hijo verá programación en el colegio durante la secundaria?', a: 'No como área propia. Las tablas de horas del CNEB para jornada regular (35 horas) y jornada completa (45 horas) no incluyen computación ni programación; algunos colegios usan Educación para el trabajo o las horas de libre disponibilidad para talleres.' },
      { q: '¿Las clases preparan para la OPI de UTEC?', a: 'Desarrollan lo que la OPI mide: algoritmos y programación en C++. No estamos vinculados a UTEC y no garantizamos resultados. Usamos problemas originales nuestros, nunca los del concurso.' },
      { q: '¿Mi hijo puede usar ChatGPT o Claude en las clases?', a: 'Claude exige 18 años, así que no lo usamos con menores. ChatGPT acepta desde los 13 años con permiso de un padre, madre o tutor para menores de 18, y esa decisión es de la familia. En clase la IA nunca reemplaza el código que escribe el estudiante.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como la India lleva diez horas y media de adelanto a Perú, una clase a las 7:00 p. m. en Lima es a las 5:30 a. m. del día siguiente para el mentor; usted solo ve la hora peruana.' },
      { q: '¿Cuánto tiempo a la semana necesita dedicar?', a: 'Las clases en vivo más una o dos horas de práctica propia. Con esa constancia, la mayoría de estudiantes termina un proyecto mediano hacia el sexto mes.' },
      { q: '¿Las clases tienen validez oficial?', a: 'No. No tenemos ningún vínculo con el MINEDU, con UTEC ni con colegios o universidades, y no damos notas. Al completar un curso el estudiante recibe un certificado de finalización emitido por Modern Age Coders, que es nuestro y no reemplaza ningún título.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Otras páginas',
    h2: 'Más para adolescentes y sus familias',
    lede: 'Lecturas complementarias, en castellano y en inglés.',
    items: [
      { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano de programación', p: 'Cinco talleres por edad, de 1° de primaria a 5° de secundaria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El mapa completo de nuestros cursos en Perú, en inglés.' },
      { href: '/ai-agents-for-teens', label: 'AI agents for teens', p: 'Qué es un agente de IA y qué puede construir un adolescente.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de cada herramienta de IA, con la cita de su empresa.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una mirada a nuestras clases en vivo, en detalle.' },
      { href: '/courses', label: 'All courses', p: 'Todo el catálogo, ordenado por edad y tema.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis para su hijo adolescente',
    lede: 'La clase de prueba dura de 30 a 45 minutos. El mentor conversa con el estudiante en inglés sencillo, le pide resolver un reto corto en Python y le pregunta qué le interesa construir. Con eso recomendamos un curso y un formato, sin obligación de inscribirse.',
    readFirst: 'Antes de reservar puede revisar <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre nuestra manera de enseñar, y <a class="ag-inline-link" href="/courses">All courses</a> lista cada temario (las dos en inglés).',
    note: 'Enseñamos en vivo y por internet desde la India, en inglés en todas las clases. Por WhatsApp atendemos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para secundaria', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/complete-game-development-masterclass-for-teens', label: 'Videojuegos' },
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para leer', links: [
        { href: '/ai-classes-for-teenagers', label: 'IA para adolescentes' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas de IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Funciona, ahora intente romperlo'
  },

  personalityCss: `
.ag-root.ag-pad .ag-hero h1 { max-width: 21ch; letter-spacing: -0.015em; }
.ag-root.ag-pad .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-pad .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-pad .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pad .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: CNEB Tablas N.° 8 and N.° 9 (secundaria JER and JEC weekly hours), the Educación para el trabajo competency, the transversal TIC competency; Edades normativas; Ley 28044; Fábrica de Programadores note of 24 July 2025; Hackathon 2025 note. UTEC OPI site and 2025 rules; IOI statistics for Peru; El Peruano on ONEM 2026; INEI boletín TIC II Trimestre 2026 Cuadro 2.1; EF EPI 2025; content/ai-tool-age-audit.json. Read 9 November 2026. The password checker, the course-choice table and the stages are our own.',
    localProject: 'A password checker in Python for a secundaria student: revisar() returns a list of problems using len, any() with isdigit and isupper; version 1 prints Machupicchu2026 -> OK although it is the country\'s most famous site plus a year; version 2 adds a list of common words and prints Machupicchu2026 -> contains machupicchu, but still accepts Huascaran6768 and rejects the long passphrase tres-gatos-comen-7-panes for no capital. Lesson family: string methods inside any(), a function returning a list, and a rule set tested until it fails.',
    requiredMentions: ['Huascaran6768', 'contains machupicchu', 'tres-gatos-comen-7-panes', 'Tablas N.° 8 y N.° 9', '1000 escolares de 4° y 5° de secundaria de Lima Norte', 'la final presencial se programa solo en C++', 'el 92,5 % de los adolescentes de 12 a 18 años usó internet', 'Funciona, ahora intente romperlo', 'un puntaje de 469, en el nivel bajo', 'creció en 28 %'],
    sources: [
      { claim: 'Secundaria weekly hours under JER (35) and JEC (45), no computing area; Educación para el trabajo competency; transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° secundaria in Lima Norte, Python, Cisco, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI organised free by UTEC; 2026 registration and final dates.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI final in C++ only; generative AI banned; top 4 to the IOI.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'Peru at the IOI: first in 2022, 5 years, 13 contestants, 1 bronze.', url: 'https://stats.ioinformatics.org/countries/PER' },
      { claim: 'ONEM 2026: over 1.7 million secundaria students; national stage 11 October 2026.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'Hackathon 2025: female student participation up 28% from 2023 to 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'Internet use, 12 to 18 years, 89.7% (2023) to 92.5% (2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: 18 to 20 year olds 469 (low); Lima 555 (high).', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; capsule and FAQ say every class is live, online and in English only.',
      'Any affiliation with UTEC, ONEM, the MINEDU or a school, or a promise of olympiad results: none; the page says so.',
      'Reproducing OPI or ONEM problems: refused; only our own problems.',
      'Recommending Claude or any 18+ tool to under-18s: refused; ChatGPT only with the parent permission its terms require.',
      'The altitude of Huascarán: not printed (no source fetched); the example only calls it a well-known snow peak and four digits.',
      'The codex-and-claude-code teens course: left out of the catalogue because Claude Code sits on an 18+ product.',
      'Political names in the Fábrica de Programadores note: left out.',
      'Soles prices or any typed fee: refused.'
    ]
  }
};

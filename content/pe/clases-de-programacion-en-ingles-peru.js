// SHIP: market (es entry door, all ages) | clases de programación en inglés en Perú: quién, por qué en inglés, desde casa | reading Python error messages in English: NameError, TypeError, IndexError, ValueError
'use strict';
// Clases de programación en inglés en Perú (ag- Spanish-language entry door, Peru cluster row PE085, hubGroup start).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Spanish entry page for the whole offer. Someone in Peru typed "clases de programación en inglés" (or "curso de
// programación en inglés"): a parent, a secundaria student, a university student or an adult. Spine: what the classes are and
// who teaches them; why learn to code in English (the language of keywords, documentation and error messages); EF EPI 2025
// by city and by age; which stage and which Spanish page fits each learner; what school gives in English and in computing
// (CNEB secundaria timetables, JER and JEC; Fábrica de Programadores pilot); how classes work at home (INEI ENAHO 2026);
// one original lesson: reading Python error messages in English; Peru to India clock conversions.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-en-ingles-peru/,
// fetched 2026-11-08, quotes grepped in the raw text; FACTS = facts-school/FACTS.md, MARKET = facts-market/MARKET.md):
//  EF EPI 2025 Peru page (ef_peru.raw, MARKET 1.3): "EF EPI score" 519, "Global ranking: #52"; cities "Lima" 555 (high),
//    Cusco 520, Trujillo 519, Arequipa 512, "Huancayo</span><span>499" (low); ages "ageGroup1Score":469 (18-20 yrs, low),
//    "ageGroup2Score":540 (21-25), "ageGroup3Score":559 (26-30, high), "ageGroup4Score":537 (31-40), "ageGroup5Score":509 (41+);
//    "Speaking score:" 480, "Reading score: " 540.
//  CNEB (FACTS 39, 41, 44, 57): secundaria JER "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3",
//    "Educación para el trabajo 2 2 2 2 2"; JEC "Matemática 6 6 6 6 6 Comunicación 5 5 5 5 5 Inglés 5 5 5 5 5",
//    "Educación para el trabajo 3 3 3 3 3 ... Total de horas 45 45 45 45 45"; primaria "Inglés 2 2 3 3 3 3";
//    "horas pedagógicas (45 minutos)".
//  MINEDU Edades normativas (FACTS 13, 14): "Se considera la edad normativa al 31 de marzo de cada año"; 1° primaria 6,
//    1° secundaria 12, 5° secundaria 16.
//  MINEDU press note 16 March 2026 (FACTS 17): 53,631 EBR schools, 6,225,000 students.
//  MINEDU Fábrica de Programadores (FACTS 45, 46, 47): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte
//    con formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global";
//    "Esta experiencia piloto busca validar el modelo pedagógico y replicarlo en el ámbito nacional".
//  UTEC OPI (FACTS 111): "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  INEI Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el 84,2% de la población de 6 y más años"; "Lima Metropolitana,
//    con un 92,4%; seguido del resto urbano con 86,1%; y del área rural, con un 63,7%"; ages 97,3% (19 a 24), 95,2% (25 a 40),
//    92,5% (12 a 18), 68,2% (6 a 11); "el 36,4% de los hogares del país disponía de al menos una computadora".
//  Time: tzdata America/Lima -5:00 no DST; Asia/Kolkata +5:30; India 10 h 30 min ahead (facts-geo/timezone.tsv).
// Our own calculations (python3 -I): JER English 3 x 45 = 135 min a week; JEC 5 x 45 = 225 min a week.
// Our own example (errores.py, run with python3 -I, Python 3.14.8), exact output:
//    NameError: name 'name' is not defined / TypeError: can only concatenate str (not "int") to str /
//    IndexError: list index out of range / ValueError: invalid literal for int() with base 10: 'twelve'
// Lesson family: reading Python error messages in English: four bugs, the error type and its message, then the fix.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'pruebas = [',
  '    "print(name)",',
  '    "print(\'Age: \' + 12)",',
  '    "colors = [\'red\', \'blue\']\\nprint(colors[2])",',
  '    "print(int(\'twelve\'))",',
  ']',
  '',
  'for codigo in pruebas:',
  '    try:',
  '        exec(codigo)',
  '    except Exception as error:',
  "        print(type(error).__name__ + ':', error)"
].join('\n');

const OUT = [
  "NameError: name 'name' is not defined",
  'TypeError: can only concatenate str (not "int") to str',
  'IndexError: list index out of range',
  "ValueError: invalid literal for int() with base 10: 'twelve'"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'start', label: 'Programación en inglés' },
  slug: 'clases-de-programacion-en-ingles-peru',
  code: 'pri',
  accent: '#7A4848',
  accentRationale: 'Clases de programación en inglés en Perú: a muted clay red #7A4848, the colour of an adobe wall in the Andes and of the front door of the Spanish pages, away from the greens and blues of the age doors; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en inglés en Perú',
  title: 'Clases de programación en inglés en Perú, en vivo',
  description: 'Clases de programación en inglés para niños, adolescentes, universitarios y adultos en Perú: en vivo, en línea, en grupo o individuales y a la hora que usted elija.',
  ogDescription: 'Programar en inglés desde Perú, a cualquier edad: por qué en inglés, qué da el colegio, cómo son las clases desde casa y cómo leer un error de Python en inglés.',
  twitterDescription: 'Clases de programación en vivo y en inglés para todo el Perú, de los 6 años a la edad adulta, a cualquier hora.',
  pageName: 'Clases de programación en inglés en Perú',
  webPageDescription: 'Página de entrada en español a las clases de programación de Modern Age Coders en Perú, dictadas en vivo, en línea y en inglés para todas las edades: qué son, por qué aprender a programar en inglés, el nivel de inglés del país según el EF EPI 2025, las horas de inglés y de computación que da la secundaria según el CNEB, el uso de internet según el INEI y una lección propia sobre los mensajes de error de Python.',
  courseDescription: 'Clases en vivo y en línea de programación en todo el Perú, dictadas solo en inglés, para niños desde los 6 años, adolescentes de secundaria, universitarios y adultos: Scratch, Python, Java, desarrollo web e inteligencia artificial, en clase grupal o individual, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-son', label: 'Qué son' },
    { href: '#por-que', label: 'Por qué en inglés' },
    { href: '#etapas', label: 'Edades' },
    { href: '#errores', label: 'Ejemplo' },
    { href: '#reloj', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Programación en inglés &middot; De los 6 años a la edad adulta',
  h1: 'Clases de programación en inglés, en vivo desde Perú',
  lede: 'Esta es la puerta de entrada en español a todo lo que enseñamos en Perú. Aquí encontrará quién dicta las clases, por qué se dictan en inglés, qué etapa le corresponde a cada edad, cómo se toman desde casa y qué página leer después, según sea usted madre o padre de familia, estudiante de secundaria, universitario o un adulto que quiere cambiar de rumbo.',
  secondaryCta: { href: '#por-que', label: '¿Por qué programar en inglés?' },
  wa: 'Hola Modern Age Coders, escribo desde Perú. Me interesan las clases de programación en inglés. ¿Podemos coordinar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un mentor que habla claro y a su ritmo',
  spec: [
    ['Para quién', 'Niños desde 6 años, adolescentes, universitarios y adultos'],
    ['Idioma', 'Inglés, con mentores que hablan claro y despacio'],
    ['Temas', 'Scratch, Python, Java, web, apps e inteligencia artificial'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Horario', 'Flexible, cualquier día'],
    ['Primera clase', 'Gratis y sin compromiso']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Las clases de programación en inglés de Modern Age Coders son clases en vivo, en línea y en inglés para todo el Perú: mentores que viven en la India enseñan por videollamada a niños desde los 6 años, a adolescentes de secundaria, a universitarios y a adultos, con Scratch, Python, Java, desarrollo web e inteligencia artificial. El mentor habla claro y ajusta el ritmo a cada estudiante. Se puede estudiar en grupo o a solas con el mentor, en el día y la hora que la familia decida, y la sesión de prueba no cuesta nada.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Tres cursos de entrada, uno por etapa de la vida',
    lede: 'Python es el hilo común: lo aprende un niño de primaria con dibujos, un escolar de secundaria con proyectos y un adulto con datos de su trabajo. Cambia el ritmo, no el idioma.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PRI / 01', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'Pensado para 4°, 5° y 6° de primaria. La tortuga de Python traza figuras, el niño arma un concurso de preguntas y termina con un proyecto sencillo de IA, todo en un inglés pausado.' },
      { course: 'python-complete-masterclass-teens', code: 'PRI / 02', title: 'Python completo para adolescentes', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 13 a 17 años, en secundaria. Desde la primera variable hasta archivos, funciones y proyectos propios que se pueden mostrar.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PRI / 03', title: 'Python desde cero para adultos', alt: 'Imagen del curso de Python desde cero hasta nivel avanzado', note: 'Para universitarios y adultos que empiezan de cero. Automatizar tareas, trabajar con datos y llegar a proyectos de nivel profesional.' }
    ]
  },

  sections: [
    {
      id: 'que-son',
      eyebrow: 'Qué son',
      h2: '¿Qué son exactamente unas clases de programación en inglés?',
      lede: 'Son clases en directo, por videollamada, en las que un mentor y el estudiante programan juntos y conversan en inglés. No hay videos grabados que mirar a solas ni traducción simultánea: la clase entera ocurre en inglés, con calma y con la pantalla compartida.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Un mentor de verdad', p: 'Cada estudiante tiene un mentor asignado durante todo el curso. Los mentores viven en la India, enseñan programación a diario y están acostumbrados a trabajar con estudiantes cuya lengua materna no es el inglés.' },
          { h3: 'Programa el estudiante', p: 'El mentor no escribe el código por el estudiante. Le hace preguntas, le deja equivocarse y le ayuda a encontrar el error. La pantalla compartida permite ver al instante dónde se trabó y por qué.' },
          { h3: 'Un idioma, sin mezclas', p: 'La clase es en inglés de principio a fin. El estudiante puede pedir que el mentor repita, que lo diga más despacio o que lo escriba en el chat, y eso es parte normal de la clase, no una molestia.' }
        ] },
        { kind: 'p', mt: true, html: 'Hay dos formatos. En la clase grupal, el estudiante comparte la sesión con quince a veinte compañeros de edad parecida, de varios países, y el inglés es la lengua común de todos. En las clases individuales, la sesión es solo con el mentor, a la hora que usted fije, y el ritmo lo marca únicamente el estudiante. Muchas familias empiezan en grupo y pasan a clases individuales cuando el estudiante tiene un objetivo concreto, como un proyecto propio o una certificación.' },
        { kind: 'p', html: 'Lo que no somos también importa. No somos un colegio ni una academia preuniversitaria, no estamos vinculados al Ministerio de Educación ni a ninguna universidad peruana y no damos notas ni certificados del sistema educativo del Perú. Lo único que emitimos es una constancia propia, firmada por Modern Age Coders, cuando el estudiante completa un curso. Nuestras clases van junto al colegio, la universidad o el trabajo, nunca en su lugar.' }
      ]
    },
    {
      id: 'por-que',
      eyebrow: 'Por qué en inglés',
      h2: '¿Por qué aprender a programar en inglés y no en español?',
      lede: 'Porque la programación ya ocurre en inglés. Las palabras reservadas de casi todos los lenguajes, los mensajes de error, la documentación oficial y las conversaciones entre programadores de todo el mundo están en inglés. Quien aprende así no tiene que traducir dos veces.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que el estudiante encuentra en inglés',
          left: [
            'Las instrucciones del propio lenguaje: <code>print</code>, <code>return</code>, <code>while</code>, <code>import</code>, <code>class</code>. En Java y en JavaScript ocurre lo mismo. Saber que <em>while</em> significa "mientras" ayuda a leer un bucle como si fuera una frase.',
            'Los mensajes de error, que son la herramienta de trabajo diaria de quien programa. Python, Java y los navegadores los escriben en inglés, y aprender a leerlos con calma es la mitad del oficio. Más abajo hay un ejemplo completo.'
          ],
          rightH3: 'Lo que gana además',
          right: [
            'Práctica oral con un propósito. En la clase el estudiante tiene que explicar qué quiere que haga su programa, preguntar por qué falla y contar qué cambió. Es inglés usado para resolver algo, no para repetir frases.',
            'Un entorno internacional. En la clase grupal los compañeros vienen de varios países; en la universidad y en el trabajo, la mayoría de equipos de tecnología coordina en inglés. Empezar ahí desde joven quita el miedo.'
          ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'Nivel de inglés en Perú por ciudad y por edad, según el EF EPI 2025', head: ['Grupo', 'Puntaje EF EPI', 'Nivel según EF'], rows: [
          ['Perú, promedio nacional', '519', 'Moderado (puesto 52 en el mundo)'],
          ['Lima', '555', 'Alto'],
          ['Cusco', '520', 'Moderado'],
          ['Trujillo', '519', 'Moderado'],
          ['Arequipa', '512', 'Moderado'],
          ['Huancayo', '499', 'Bajo'],
          ['Personas de 18 a 20 años', '469', 'Bajo'],
          ['Personas de 26 a 30 años', '559', 'Alto']
        ] },
        { kind: 'source', html: 'Datos tomados de la ficha de Perú del índice EF EPI 2025 que publica EF Education First (ef.com, sección Latin America), consultada por nosotros en noviembre de 2026. El índice se calcula con adultos que rinden el examen de EF, no con escolares. El nivel de cada fila es el que EF asigna en esa misma página.' },
        { kind: 'p', mt: true, html: 'Dos lecturas de esa tabla nos parecen útiles para una familia peruana. La primera: según el EF EPI 2025, Lima ya está en el nivel alto, con 555 puntos, mientras que ciudades como Huancayo están en el bajo, con 499; el punto de partida cambia mucho según dónde viva el estudiante, y por eso el mentor no asume nada y empieza por conversar. La segunda: los peruanos de 18 a 20 años marcan 469 puntos, el valor más bajo de todas las edades, y los de 26 a 30 llegan a 559. Es decir, el inglés suele consolidarse después del colegio, cuando ya se usa en el trabajo. Una clase de programación en inglés adelanta ese uso real a la etapa escolar o universitaria.' },
        { kind: 'p', html: 'La misma página del EF EPI 2025 marca la expresión oral (480 puntos) como la habilidad más débil del país y la comprensión lectora (540) como la más fuerte. Es el patrón que vemos en las primeras clases con estudiantes peruanos: entienden mucho más de lo que se atreven a decir. El trabajo del mentor durante las primeras semanas es justamente que se atrevan.' }
      ]
    },
    {
      id: 'etapas',
      eyebrow: 'Cada edad, su camino',
      h2: '¿Desde qué edad se puede aprender a programar en inglés, y hasta qué edad?',
      lede: 'Se empieza a los 6 años, cuando un niño entra a 1° de primaria según la tabla de edades del MINEDU, y no hay tope: también enseñamos a personas que ya trabajan o que se jubilaron. Lo que cambia con la edad es la herramienta, la duración de la atención y el objetivo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Etapas, herramientas y páginas en español para seguir leyendo (nuestra guía)', head: ['Etapa en Perú', 'Edad habitual', 'Con qué se empieza', 'Qué leer después'], rows: [
          ['1° a 3° de primaria', '6 a 8 años', 'Bloques en Scratch, cuentos animados, secuencias', '<a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">Programación para niños en inglés</a>'],
          ['4° a 6° de primaria', '9 a 11 años', 'Python con dibujos, Roblox, primeros proyectos de IA', '<a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">Inteligencia artificial para niños</a>'],
          ['1° a 5° de secundaria', '12 a 16 años', 'Python completo, Java, web, apps, IA con criterio', '<a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">Vacaciones útiles virtuales en inglés</a>'],
          ['Universidad o instituto', '17 años en adelante', 'Python, Java, estructuras de datos, desarrollo web', '<a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> (en inglés)'],
          ['Adultos que trabajan', 'Cualquier edad', 'Python para automatizar, datos, agentes de IA', '<a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> (en inglés)']
        ] },
        { kind: 'source', html: 'Las edades de primaria y secundaria siguen la tabla de edades normativas del MINEDU, que fija la edad "al 31 de marzo de cada año": 6 años en 1° de primaria, 12 en 1° de secundaria y 16 en 5° de secundaria. Las herramientas y la columna de lecturas son nuestra recomendación.' },
        { kind: 'two', mt: true,
          leftH3: 'Si usted es madre o padre de familia',
          left: [
            'Para un niño de primaria, el inglés de la clase entra por el oído y por la pantalla: palabras cortas, repetidas, con un dibujo que se mueve cuando se dicen. No hace falta que su hijo hable inglés para empezar. Sí ayuda que tenga una computadora con teclado y un lugar tranquilo.',
            'Para un adolescente, la clase puede ser una manera de practicar el inglés que ya estudia en el colegio con un objetivo propio: un juego, una página web, un bot. Si además piensa en una carrera de ingeniería o de ciencias, llegará a la universidad leyendo documentación técnica sin miedo.'
          ],
          rightH3: 'Si usted es el estudiante',
          right: [
            'Si está en la universidad o en un instituto, puede usar estas clases para reforzar los cursos de programación de su carrera o para preparar una certificación como el PCEP de Python. Se dictan en inglés, igual que la mayoría de recursos técnicos que usará después.',
            'Si trabaja y quiere aprender desde cero, las clases individuales se acomodan a su horario. El mentor parte de lo que usted ya hace, una hoja de cálculo o un proceso repetitivo de su oficina, y lo convierte en el primer programa.'
          ] },
        { kind: 'p', mt: true, html: 'Para las familias que buscan algo para enero, febrero o marzo, hay dos páginas pensadas para el verano peruano: <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">Vacaciones útiles 2027 de programación online</a> y <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">Talleres de verano de programación para niños online</a>. Ambas explican cómo usar las clases normales como un inicio de verano, sin inventar fechas que todavía no existen.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Lo que da el colegio',
      h2: '¿Cuánto inglés y cuánta computación hay en la secundaria peruana?',
      lede: 'El plan de estudios del Currículo Nacional (CNEB) da a la secundaria tres horas pedagógicas de inglés a la semana en la jornada regular y cinco en la jornada escolar completa. No tiene un área de computación o programación: lo digital aparece como competencia transversal.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Horas pedagógicas semanales en secundaria por tipo de jornada, según el CNEB (iguales de 1° a 5°)', head: ['Área curricular', 'Jornada Escolar Regular', 'Jornada Escolar Completa'], rows: [
          ['Matemática', '4', '6'],
          ['Comunicación', '4', '5'],
          ['Inglés', '3', '5'],
          ['Educación para el trabajo', '2', '3'],
          ['Total semanal de la jornada', '35', '45']
        ] },
        { kind: 'source', html: 'Tomado de los planes de estudio de secundaria del CNEB, el PDF del currículo que el MINEDU publica en su portal, revisado por nosotros en noviembre de 2026. Las horas son "horas pedagógicas (45 minutos)". Cada colegio arma su horario dentro de este marco.' },
        { kind: 'two', mt: true,
          leftH3: 'El inglés en minutos',
          left: [
            'Con horas de 45 minutos, tres horas de inglés son 135 minutos a la semana en la jornada regular, y cinco horas son 225 minutos en la jornada completa (cálculo nuestro).',
            'En primaria la tabla del CNEB asigna dos horas de inglés en 1° y 2° y tres de 3° a 6°. La diferencia entre un colegio y otro suele estar en lo que hacen con sus horas de libre disponibilidad, no en el mínimo oficial.'
          ],
          rightH3: 'La programación, fuera del horario',
          right: [
            'Educación para el trabajo, con dos o tres horas semanales, trata de gestionar proyectos de emprendimiento; no es un curso de programación. El CNEB incluye la competencia "Se desenvuelve en entornos virtuales generados por las TIC", pero como competencia transversal, sin horas propias.',
            'Cuando el MINEDU ha enseñado programación lo ha hecho en pilotos: la estrategia Fábrica de Programadores anunció formación en Python para 1,000 escolares de 4° y 5° de secundaria de Lima Norte, con la posibilidad de rendir el examen PCEP, y la describió como una experiencia piloto para replicar en el ámbito nacional.'
          ] },
        { kind: 'p', mt: true, html: 'Ese vacío no es una crítica a los colegios, que tienen mucho que cubrir. Según el MINEDU, el 16 de marzo de 2026 iniciaron clases 53,631 colegios de Educación Básica Regular con 6,225,000 estudiantes. Para quien quiere programar en serio durante el colegio, las opciones son las olimpiadas de computación de la UTEC (la OPI y la OPEIA, que la universidad describe como "abiertas gratuitamente a todos los estudiantes de secundaria del país"), los talleres que ofrezca cada colegio y las clases particulares como las nuestras.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde casa',
      h2: '¿Funcionan las clases de programación en línea desde cualquier parte del Perú?',
      lede: 'Sí, siempre que haya una computadora con teclado y una conexión estable. La clase no depende de la ciudad: un estudiante de Puno y uno de Miraflores reciben exactamente la misma sesión, con el mismo mentor y el mismo nivel de exigencia.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Uso de internet en Perú por grupo de edad y por área, segundo trimestre de 2026 (INEI)', head: ['Grupo', 'Usó internet'], rows: [
          ['Población de 6 años y más, todo el país', '84,2 %'],
          ['Niños de 6 a 11 años', '68,2 %'],
          ['Adolescentes de 12 a 18 años', '92,5 %'],
          ['Jóvenes de 19 a 24 años', '97,3 %'],
          ['Adultos de 25 a 40 años', '95,2 %'],
          ['Lima Metropolitana', '92,4 %'],
          ['Resto urbano', '86,1 %'],
          ['Área rural', '63,7 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", informe técnico del II trimestre de 2026, con datos de la Encuesta Nacional de Hogares. Las cifras por área se refieren a la población de 6 años y más.' },
        { kind: 'p', mt: true, html: 'Ese informe del INEI registra además que solo el 36,4 % de los hogares peruanos tiene al menos una computadora. Ese dato pesa más que el de internet, porque con un celular no se programa de verdad: en una pantalla de bolsillo y sin teclado físico, cada línea de código se vuelve una pelea. Si en su casa hay una computadora, aunque sea compartida entre hermanos, alcanza. Python, Scratch y los editores que usamos son gratuitos y el mentor ayuda a instalarlos en la primera sesión.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Revise el equipo.</strong> Laptop o computadora de escritorio, cámara, micrófono y audífonos. Con audífonos, la voz del mentor llega limpia y el inglés se entiende con menos esfuerzo.',
          '<strong>Pruebe la conexión.</strong> Una videollamada estable de una hora es la referencia. Si la señal cae, el mentor retoma donde se quedó.',
          '<strong>Reserve la clase gratis.</strong> El formulario de esta página le muestra los horarios ya convertidos a la hora peruana.',
          '<strong>Converse con el mentor.</strong> En la primera sesión el mentor habla en inglés sencillo, propone un reto corto y observa cómo lo resuelve el estudiante.',
          '<strong>Reciba la recomendación.</strong> Con lo que vio, le sugerimos curso, nivel y formato. Usted decide si sigue, sin compromiso.'
        ] }
      ]
    },
    {
      id: 'errores',
      tint: 'tint',
      eyebrow: 'Un ejemplo de clase',
      h2: '¿Qué pasa si el estudiante no entiende un mensaje de error en inglés?',
      lede: 'Lo aprende a leer, y eso es una de las cosas más valiosas que se lleva de una clase en inglés. Este ejercicio es nuestro: cuatro programas de una línea con un error cada uno, y un bucle que los ejecuta y muestra el tipo de error y su mensaje tal como los escribe Python.',
      body: [
        { kind: 'code', label: 'Cuatro errores a propósito', lang: 'Python', code: PY, note: 'El mentor pregunta antes de ejecutar: "Which line will fail, and why?" El estudiante apuesta por cada caso y luego comprueba.' },
        { kind: 'code', label: 'Lo que imprime Python', lang: 'Salida', code: OUT, note: 'Pegamos aquí, sin tocar una letra, lo que devolvió Python 3.14 cuando corrimos el archivo. Cada línea tiene dos partes: el tipo de error, antes de los dos puntos, y la explicación en inglés, después.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Cómo se lee cada mensaje (nuestra guía de clase)', head: ['Tipo de error', 'Lo que dice el mensaje', 'Lo que significa', 'Cómo se arregla'], rows: [
          ['NameError', 'name \'name\' is not defined', 'Se usó un nombre que nunca recibió un valor', 'Crear antes la variable: <code>name = \'Lucía\'</code>'],
          ['TypeError', 'can only concatenate str (not "int") to str', 'Se intentó pegar texto con un número', 'Convertir el número: <code>\'Age: \' + str(12)</code>'],
          ['IndexError', 'list index out of range', 'Se pidió una posición que la lista no tiene', 'La lista tiene posiciones 0 y 1: usar <code>colors[1]</code>'],
          ['ValueError', 'invalid literal for int() with base 10: \'twelve\'', 'El texto no se puede convertir en número entero', 'Escribir el número con cifras: <code>int(\'12\')</code>']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Separar las dos partes.</strong> El estudiante aprende que la palabra antes de los dos puntos es la categoría del problema y que lo que sigue es la pista. Con cuatro categorías ya reconoce la mayoría de errores de un principiante.',
          '<strong>Traducir con sus palabras.</strong> El mentor pide que explique cada mensaje en una frase en inglés: "Python does not know the word name". No se busca una traducción perfecta, sino que la idea quede clara.',
          '<strong>Contar posiciones.</strong> El caso de <code>IndexError</code> enseña que las listas empiezan en la posición 0. La lista de dos colores tiene las posiciones 0 y 1; pedir la 2 es pedir algo que no existe.',
          '<strong>Arreglar uno por uno.</strong> El estudiante corrige cada línea, vuelve a ejecutar y comprueba que el bucle ya no imprime ese error. Cada arreglo es una línea de código y una frase en inglés.',
          '<strong>Escribir su propio error.</strong> El reto final es inventar un quinto programa que falle de una manera nueva y que su compañero, o un familiar, adivine qué tipo de error dará.'
        ] },
        { kind: 'p', mt: true, html: 'Este ejercicio funciona a cualquier edad: un niño de 11 años lo hace con dos errores, un universitario con los cuatro y con la instrucción <code>try</code> explicada a fondo. Lo que se entrena es la costumbre de leer el mensaje antes de pedir ayuda o de borrar todo, y esa costumbre es la diferencia entre copiar una solución y entenderla.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario',
      h2: '¿A qué hora son las clases si el mentor está en la India?',
      lede: 'Usted fija la hora. Entre Lima y Nueva Delhi hay diez horas y media de diferencia en cualquier mes, con la India siempre adelante; abajo van seis equivalencias de muestra, que no son turnos de clase.',
      body: [
        { kind: 'table', numCols: [], caption: 'Conversión de la hora de Perú a la hora de la India (ejemplos)', head: ['Reloj en Perú', 'Reloj en la India', 'Fecha en la India'], rows: [
          ['6:00 a. m.', '4:30 p. m.', 'Misma fecha'],
          ['9:00 a. m.', '7:30 p. m.', 'Misma fecha'],
          ['11:00 a. m.', '9:30 p. m.', 'Misma fecha'],
          ['1:00 p. m.', '11:30 p. m.', 'Misma fecha'],
          ['4:00 p. m.', '2:30 a. m.', 'Un día después'],
          ['9:00 p. m.', '7:30 a. m.', 'Un día después']
        ] },
        { kind: 'source', html: 'Base de la conversión: la zona America/Lima de tzdata y la hora oficial del INACAL fijan para Perú UTC-5 sin horario de verano; la India se rige por UTC+5:30, también fija. La resta da siempre diez horas y media.' },
        { kind: 'p', mt: true, html: 'Como ningún país cambia la hora, lo que usted acuerde en marzo sigue igual en diciembre. Un escolar del turno tarde suele preferir la mañana; uno del turno mañana, la tarde o la noche; un adulto que trabaja, muy temprano o después de cenar. Al reservar, el formulario muestra las horas en su propio reloj y el mentor las ve en el suyo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota el avance en programación y en inglés a la vez?',
    lede: 'Usamos cinco niveles propios, iguales para todas las edades, que describen lo que el estudiante hace en la clase, no lo que memoriza.',
    table: { caption: 'Cinco niveles de programación en inglés (nuestros)', head: ['Nivel', 'En programación', 'En inglés, durante la clase'], rows: [
      ['1. Seguir', 'copia y ejecuta un ejemplo que el mentor explica', 'entiende instrucciones cortas con ayuda de la pantalla'],
      ['2. Predecir', 'dice qué va a imprimir un programa antes de ejecutarlo', 'responde con frases cortas: "It prints five"'],
      ['3. Depurar', 'lee un mensaje de error y encuentra la línea culpable', 'explica el error en una oración completa'],
      ['4. Construir', 'escribe un programa propio de varias partes', 'describe su plan antes de empezar a escribir'],
      ['5. Presentar', 'termina un proyecto y lo defiende ante el grupo', 'responde preguntas de compañeros sin preparar']
    ] },
    left: { h3: 'Para las familias', ps: [
      'El paso del nivel 2 al 3 es el que más cuesta, en todas las edades: pasar de acertar a entender por qué algo falla. Es normal que tome varias semanas.',
      'Fíjese menos en la rapidez y más en si el estudiante le puede narrar, paso a paso, qué construyó y qué falló por el camino. Quien lo narra con orden, lo domina.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Antes de pedir ayuda, lea el mensaje de error completo y diga en voz alta qué cree que significa.',
      'Si no entiende al mentor, pídale "Can you say that again, more slowly?". Es la frase más útil de todo el curso.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más, de primaria a la vida profesional',
    lede: 'Todos se dictan en vivo y en inglés, en clase grupal o individual, con el mismo mentor durante todo el curso.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 12 años', courses: [
        { code: 'PRI / PRIMARIA / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Tres meses de bloques hasta terminar juegos propios, desde los 6 años.' },
        { code: 'PRI / PRIMARIA / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Luau dentro de Roblox Studio para quien llega por los videojuegos.' },
        { code: 'PRI / PRIMARIA / 03', slug: 'ai-literacy-for-kids-course', title: 'Entender la IA', blurb: 'Datos, patrones y errores de una máquina, explicados sin registrarse en nada.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 12 a 17 años', courses: [
        { code: 'PRI / SECUNDARIA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'El lenguaje de muchas carreras de ingeniería, desde la base.' },
        { code: 'PRI / SECUNDARIA / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript y web', blurb: 'Páginas interactivas y juegos que corren en el navegador.' },
        { code: 'PRI / SECUNDARIA / 03', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Python con datos reales y primeros modelos de aprendizaje automático.' }
      ] },
      { num: 'III', h3: 'Universidad y trabajo', sub: 'Desde los 17 años', courses: [
        { code: 'PRI / ADULTOS / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java completo', blurb: 'Programación orientada a objetos y proyectos para la carrera.' },
        { code: 'PRI / ADULTOS / 02', slug: 'pcep-pcap-python-certification-course', title: 'Python con PCEP y PCAP', blurb: 'Preparación para las certificaciones internacionales de Python.' },
        { code: 'PRI / ADULTOS / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Agentes de IA para programar', blurb: 'Trabajar con agentes de código sin dejar de entender cada línea.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del colegio o del trabajo', l: 'Temprano en Perú, ya tarde en la India.' },
      { time: 'Después del almuerzo', l: 'Para quien estudia en el turno mañana.' },
      { time: 'Por la noche', l: 'Clases individuales para adultos y universitarios.' }
    ],
    cells: [
      { h3: 'Mentor asignado', p: 'Una sola persona acompaña todo el curso y conoce el ritmo del estudiante.' },
      { h3: 'Inglés sin apuro', p: 'Frases claras, repetición y el chat para escribir lo que cuesta oír.' },
      { h3: 'Código propio', p: 'El estudiante escribe y corrige; nadie programa por él.' },
      { h3: 'Proyectos que se ven', p: 'Cada tramo del curso termina en algo que se puede mostrar.' },
      { h3: 'Informe breve', p: 'Las familias reciben una nota sobre lo trabajado y lo que sigue.' },
      { h3: 'Grupo o uno a uno', p: 'Quince a veinte compañeros de edad parecida, o solo el mentor.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Así terminan los cursos: con aplicaciones, juegos y análisis que funcionan. La galería <a class="ag-inline-link" href="/student-labs">Student labs</a> reúne decenas más, con su código.',
  reviewsLede: 'Reseñas de Google escritas por estudiantes y familias, tal cual, en inglés.',

  fees: {
    h2: 'Precios desde Perú',
    lede: 'Las mensualidades se muestran en dólares estadounidenses y se cobran con tarjeta. La conversión a su moneda la hace su banco, así que el cargo que vea en el estado de cuenta depende del tipo de cambio de ese día.',
    free: ['Una clase de prueba con un mentor', 'Recomendación de curso y nivel', 'Sin tarjeta y sin compromiso'],
    group: ['Quince a veinte estudiantes de edad parecida', 'El mismo mentor todo el curso', 'Dos clases en vivo por semana', 'Pago mes a mes, sin permanencia'],
    one: ['Solo el estudiante y su mentor', 'Temas y ritmo a su medida', 'Día y hora a su elección']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación en inglés en Perú: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, y lo decimos con orgullo: cada sesión se dicta en directo, por internet y solo en inglés. El estudiante programa y a la vez gana soltura oral, con un mentor que pronuncia con claridad y respeta su ritmo. Según el EF EPI 2025, Lima ya alcanza un inglés de nivel alto; hablarlo cada semana con un objetivo concreto es lo que más lo afianza.' },
      { q: '¿Hace falta hablar inglés para empezar?', a: 'No hace falta hablarlo bien. Basta con entender saludos e instrucciones sencillas; el vocabulario técnico se aprende programando. Calcule dos o tres semanas para que el oído se haga al acento indio; el mentor, por su lado, también aprende a entender el del estudiante.' },
      { q: '¿Desde qué edad se puede empezar?', a: 'Desde los 6 años, la edad normativa de 1° de primaria según el MINEDU. Los más pequeños usan bloques; desde los 9 o 10 años se pasa a Python escrito. No hay edad máxima: enseñamos también a universitarios y adultos.' },
      { q: '¿Quiénes son los profesores?', a: 'Son mentores de Modern Age Coders que viven en la India y enseñan programación en inglés a estudiantes de muchos países. Cada estudiante tiene el mismo mentor durante todo el curso.' },
      { q: '¿Qué lenguajes se enseñan?', a: 'Scratch y bloques para los más pequeños, Python para casi todas las edades, Java, JavaScript y desarrollo web para adolescentes y adultos, Luau para Roblox, y proyectos de inteligencia artificial adaptados a la edad.' },
      { q: '¿En qué horario se dictan las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, cuando en Perú son las 9:00 a. m., en la India ya son las 7:30 p. m.' },
      { q: '¿Se puede tomar las clases desde provincia?', a: 'Sí. Las clases son en línea y no dependen de la ciudad. Lo que se necesita es una computadora con teclado, audífonos con micrófono y una conexión estable para una videollamada de una hora.' },
      { q: '¿Las clases tienen validez oficial en Perú?', a: 'No. No estamos vinculados al MINEDU, a ninguna UGEL, colegio ni universidad, y nada de lo que hacemos cuenta como nota o constancia escolar en Perú. Quien completa un curso recibe un certificado emitido por Modern Age Coders, y nada más.' },
      { q: '¿En qué moneda se paga?', a: 'Cobramos en dólares de Estados Unidos mediante tarjeta, y la conversión corre por cuenta de su banco. Para la sesión de prueba no pedimos ningún dato de pago.' },
      { q: '¿Qué pasa si el estudiante no entiende algo en inglés?', a: 'Se lo dice al mentor, que lo repite más despacio, lo explica con otras palabras o lo escribe en el chat. Pedir que se repita algo es parte normal de la clase. Con el tiempo, el estudiante también aprende a leer los mensajes de error de Python, que siempre están en inglés.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Otras páginas para seguir leyendo',
    lede: 'Páginas en español para casos concretos, y algunas en inglés con más detalle.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía para familias con hijos de 6 a 12 años.' },
      { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'IA para niños en Perú', p: 'Qué es la inteligencia artificial y cómo se enseña en primaria.' },
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles virtuales en inglés', p: 'Cómo usar el verano para programar sin perder el inglés.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La guía nacional, en inglés, con todas las páginas para Perú.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué ocurre minuto a minuto en una sesión con mentor (en inglés).' },
      { href: '/courses', label: 'All courses', p: 'Todos los programas, ordenados por edad y tema (en inglés).' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba gratis',
    lede: 'En la clase de prueba el mentor conversa en inglés sencillo, propone un reto corto de programación y observa cómo lo resuelve el estudiante, tenga 7 o 47 años. Después le recomendamos un curso y un formato, sin ningún compromiso.',
    readFirst: 'Si prefiere leer antes: en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describimos nuestra manera de enseñar, y en <a class="ag-inline-link" href="/courses">All courses</a> está cada programa con su temario; las dos páginas están en inglés.',
    note: 'Recuerde que cada sesión se dicta en directo, por internet y en inglés, desde la India. Si prefiere preguntar antes por escrito, contestamos rápido por WhatsApp y su mensaje en castellano es bienvenido.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de entrada', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python desde cero' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía de Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles en inglés' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Leer el error antes de pedir ayuda'
  },

  personalityCss: `
.ag-root.ag-pri .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-pri .ag-capsule { border-left-width: 6px; }
.ag-root.ag-pri .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-pri .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pri .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Currículo Nacional de la Educación Básica (secundaria JER and JEC tables, primaria Tabla N.° 6, 45-minute hours, transversal TIC competency), Edades normativas, press note of 16 March 2026, Fábrica de Programadores note; UTEC OPI home; INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; tzdata and INACAL for time. All read 8 November 2026. The stage table, the error-reading guide and the levels are our own.',
    localProject: 'Reading Python error messages in English: four one-line programs, each with one bug (an undefined name, text plus a number, a list position that does not exist, the word twelve passed to int), run in a try and except loop that prints the error type and its English message; run with python3 -I (Python 3.14.8). Lesson family: reading error messages in English, type before the colon and clue after it, then the fix.',
    requiredMentions: ['NameError: name \'name\' is not defined', 'IndexError: list index out of range', 'Leer el error antes de pedir ayuda', 'Huancayo', 'Personas de 18 a 20 años', 'Jornada Escolar Completa', '225 minutos en la jornada completa', '1,000 escolares de 4° y 5° de secundaria de Lima Norte', 'solo el 36,4 % de los hogares peruanos tiene al menos una computadora', 'Can you say that again, more slowly?'],
    sources: [
      { claim: 'EF EPI 2025: Peru 519 (rank 52), Lima 555 high, Cusco 520, Trujillo 519, Arequipa 512, Huancayo 499 low; ages 18-20 469, 26-30 559; speaking 480, reading 540.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Secundaria weekly hours under JER and JEC (Inglés 3 and 5, Matemática 4 and 6, Educación para el trabajo 2 and 3, totals 35 and 45); primaria English 2 and 3; 45-minute hours; transversal TIC competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: '53,631 EBR schools and 6,225,000 students at the 2026 opening.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP, pilot to replicate nationally.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI and OPEIA open free to all secondary students (UTEC).', url: 'https://opi.utec.edu.pe/' },
      { claim: 'Internet use II trimestre 2026 by age and area; 36.4% of households with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any MINEDU, UGEL, school or university endorsement, or an official certificate: none; the page says we are not connected and give only our own certificate of completion.',
      'EF EPI figures applied to children: refused; the source note says the index measures adults who take the EF test.',
      'A Peru student count or a Peru-specific result: refused; brand numbers are worldwide only.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

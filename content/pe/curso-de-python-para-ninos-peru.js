// SHIP: market | Python para niños de 9 a 12 en Perú, en inglés: cuándo pasar de bloques a código | random dice: count in a list, a small sample misleads, then count every case
'use strict';
// Curso de Python para niños (ag- Spanish-language door, Peru cluster row PE092, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Peruvian parent who typed "python para niños" or "curso de python para niños" (rows.tsv PE092; KEYWORDS.md
// section 1: Python cluster 357 suggestions, "programación para niños de 10 años"). "Niños" is 6 to 12 only. Spine: is
// Python right for my child and when (signs of readiness, our table); where a primaria child meets Python in Peru (nowhere
// in the CNEB; MINEDU's Python pilot starts at 4° de secundaria; OPI is for secundaria); what home equipment the INEI data
// says families have; AI tools and age (vendor terms via content/ai-tool-age-audit.json); one original dice lesson in
// English; Peru to India clock conversions for school-day and holiday hours.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-python-para-ninos-peru/ and
// facts-*/src/, fetched 2026-11-08 and 2026-11-09 with curl; quotes grepped in the raw text):
//  INEI, Boletín TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026.txt): "el 97,3% de la población de 19 a 24 años
//    utilizó Internet, seguido por el grupo de 25 a 40 años con un 95,2% y el de 12 a 18 años con un 92,5%. En contraste, el
//    uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)"; "el 84,2% de la población de 6 y más años de edad
//    en el país hizo uso de Internet"; "el 90,2% de la población usuaria de Internet de 6 y más años usó Internet a través de
//    un teléfono celular"; "laptop (18,9%), computadora (14,0%), tablet (2,9%)"; "el 36,4% de los hogares del país disponía
//    de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y 8,9%
//    en el área rural".
//  MINEDU, Fábrica de Programadores, press note 24 July 2025 (FACTS 45, 46): "1000 escolares de 4.º y 5.º de secundaria de
//    Lima Norte con formación en programación Python"; "podrán rendir el examen PCEP".
//  MINEDU, Edades normativas (FACTS 13, 14): "Se considera la edad normativa al 31 de marzo de cada año"; 9 años = 4° de
//    primaria, 10 = 5°, 11 = 6°, 12 = 1° de secundaria.
//  CNEB (FACTS 32, 33, 57): competency 28 "Se desenvuelve en entornos virtuales generados por las TIC" is transversal; the
//    primaria hour table (Tabla N.° 6) has no computing area.
//  OPI home and Reglamento 2025 (FACTS 111, 116): OPI "abiertas gratuitamente a todos los estudiantes de secundaria del
//    país"; Fase 1 C++ or Python.
//  Vendor age terms via content/ai-tool-age-audit.json: OpenAI "You must be at least 13 years old ... If you are under 18
//    you must have your parent or legal guardian's permission"; Anthropic "You must be at least 18 years old"; Google
//    Gemini "You must be 13 (or the applicable age in your country) or over"; Teachable Machine "Trains in the browser
//    with no sign-in needed".
//  Python tutorial (src-pages/_w2c/pytut.html): the language "is named after the BBC show “Monty Python’s Flying Circus”
//    and has nothing to do with reptiles."
//  Course facts (content/courses/data): python-ai-kids-masterclass "8-10 months (32-40 weeks)", "Complete beginner, ages 9
//    to 12"; kids-coding-blocks-masterclass ages 6 to 12; ai-literacy-for-kids-course ages 8 to 14, "4 months (16 weeks)".
//  Time: tzdata America/Lima UTC-5 no DST, Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv); India 10 h 30 min ahead.
// Our own example, run with python3 -I (dados.py, dados_60000.py and formas.py in the src-pages folder), exact output:
//    600 rolls with random.seed(2027): 2 ### 17 / 3 ###### 32 / 4 ######### 47 / 5 ########## 53 / 6 ################### 96 /
//    7 ################## 92 / 8 ################# 85 / 9 ############### 77 / 10 ######### 48 / 11 ####### 39 / 12 ## 14 /
//    Most common total: 6.  60,000 rolls (bars // 500): 6 has 8305, 7 has 9920, Most common total: 7.
//    formas.py: [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
// Lesson family: random dice; count outcomes in a list used as a tally, see a small sample mislead, then count every case
//    with two nested loops to explain why 7 wins.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'import random',
  '',
  'random.seed(2027)',
  'totals = [0] * 13',
  '',
  'for roll in range(600):',
  '    die1 = random.randint(1, 6)',
  '    die2 = random.randint(1, 6)',
  '    totals[die1 + die2] = totals[die1 + die2] + 1',
  '',
  'for total in range(2, 13):',
  "    print(total, '#' * (totals[total] // 5), totals[total])",
  '',
  'winner = totals.index(max(totals))',
  "print('Most common total:', winner)"
].join('\n');

const OUT = [
  '2 ### 17',
  '3 ###### 32',
  '4 ######### 47',
  '5 ########## 53',
  '6 ################### 96',
  '7 ################## 92',
  '8 ################# 85',
  '9 ############### 77',
  '10 ######### 48',
  '11 ####### 39',
  '12 ## 14',
  'Most common total: 6'
].join('\n');

const PY2 = [
  'ways = [0] * 13',
  'for die1 in range(1, 7):',
  '    for die2 in range(1, 7):',
  '        ways[die1 + die2] = ways[die1 + die2] + 1',
  'print(ways[2:])'
].join('\n');

const OUT2 = '[1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]';

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Python para niños' },
  slug: 'curso-de-python-para-ninos-peru',
  code: 'pyni',
  accent: '#005C40',
  accentRationale: 'Curso de Python para niños: a deep jungle green #005C40, the shade of the Amazon canopy that covers most of Peru on a school map, darker than the primaria green of the sibling door; contrast 6.54 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de Python para niños',
  title: 'Curso de Python para niños en Perú, en vivo y en inglés',
  description: 'Curso de Python para niños de 9 a 12 años en Perú, en vivo, en línea y en inglés: juegos, dados y primeros proyectos de IA, en grupo o individual, a cualquier hora.',
  ogDescription: 'Python para niños en Perú, en inglés: a qué edad empezar, cuándo dejar los bloques, qué equipo hace falta y una clase de ejemplo con dados que sorprende.',
  twitterDescription: 'Python para niños de 9 a 12 años, en vivo y en inglés desde Perú: primeros programas de verdad, en grupo o individual.',
  pageName: 'Curso de Python para niños',
  webPageDescription: 'Guía para madres y padres en Perú sobre el curso de Python para niños de 9 a 12 años dictado en vivo y en inglés: señales de que un niño está listo para Python, qué ofrece el colegio y desde qué grado aparece Python en los programas del MINEDU, el equipo que hace falta según los datos del INEI, las edades mínimas de las herramientas de IA y una clase de ejemplo con dados escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de Python para niños de 9 a 12 años en todo el Perú, dictadas solo en inglés: variables, bucles, listas, juegos y pequeños proyectos de IA sin cuentas de adultos, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Python para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#listo', label: '¿Está listo?' },
    { href: '#bloques', label: 'Bloques o Python' },
    { href: '#peru', label: 'Python en Perú' },
    { href: '#dados', label: 'Clase de ejemplo' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'Perú &middot; Python para niños &middot; De 9 a 12 años',
  h1: 'Curso de Python para niños, en vivo y en inglés',
  lede: 'Python es el primer lenguaje "de verdad" que aprenden muchos niños: se escribe con el teclado, no se arrastra, y sirve igual para un juego que para un proyecto de inteligencia artificial. Aquí respondemos lo que preguntan las familias peruanas antes de inscribir a su hijo o hija: si ya está en edad, si conviene empezar por bloques, qué necesita en casa y cómo es una clase en inglés.',
  secondaryCta: { href: '#dados', label: 'Ver una clase de ejemplo' },
  wa: 'Hola Modern Age Coders, nos interesa el curso de Python para niños para nuestro hijo o hija en Perú. ¿Podemos agendar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; mentores que hablan un inglés pausado y claro',
  spec: [
    ['Edades', 'De 9 a 12 años, de 4° de primaria a 1° de secundaria'],
    ['Antes de Python', 'Bloques para quien tiene de 6 a 8 años'],
    ['Idioma', 'Inglés, con un mentor que va al ritmo del niño'],
    ['Formato', 'Grupo de quince a veinte niños, o individual'],
    ['Horario', 'Cualquier día y a cualquier hora'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí: Modern Age Coders tiene un curso de Python para niños peruanos de 9 a 12 años, en vivo, en línea y en inglés. Su hijo escribe código de verdad desde la primera semana, con juegos, dibujos y pequeños proyectos de inteligencia artificial, guiado por un mentor que vive en la India, habla despacio y repite cuando hace falta. Si su hijo tiene de 6 a 8 años, empieza con bloques y pasa a Python después. Usted elige clase grupal o individual, el día y la hora que prefiera; la clase de prueba no cuesta nada.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para un niño que va a aprender Python',
    lede: 'El primero es el curso de Python propiamente dicho; los otros dos sirven antes o al lado, según la edad y el interés de su hijo.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PYNI / 01', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'De 9 a 12 años y sin experiencia. Tortuga gráfica, juegos de adivinanzas, dados y proyectos de IA pensados para su edad, de ocho a diez meses.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PYNI / 02', title: 'Programación con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años, por grupos de edad. El paso previo para quien aún es muy pequeño para el teclado: la misma lógica, en bloques de colores.' },
      { course: 'ai-literacy-for-kids-course', code: 'PYNI / 03', title: 'Entender la inteligencia artificial', alt: 'Imagen del curso de alfabetización en IA para niños', note: 'De 8 a 14 años, unos cuatro meses. Cómo aprende una máquina, por qué se equivoca y cómo usarla con criterio, sin abrir cuentas de adultos.' }
    ]
  },

  sections: [
    {
      id: 'listo',
      eyebrow: '¿Está listo?',
      h2: '¿A qué edad puede un niño aprender Python?',
      lede: 'La mayoría está lista entre los 9 y los 10 años, es decir, en 4° o 5° de primaria según las edades normativas del MINEDU. No es una regla del calendario: depende más de cómo lee y escribe el niño que de su cumpleaños.',
      body: [
        { kind: 'table', numCols: [], caption: 'Señales de que un niño está listo para Python (nuestra guía)', head: ['Señal', 'Por qué importa', 'Si todavía no'], rows: [
          ['Lee una instrucción de dos líneas sin ayuda', 'En Python cada orden es una línea de texto que hay que leer con precisión', 'Unos meses más con bloques, donde la orden es un dibujo'],
          ['Escribe en el teclado sin buscar cada letra', 'Un programa corto tiene diez o quince líneas que hay que teclear', 'Práctica de teclado de diez minutos al día, en casa'],
          ['Tolera que algo falle y vuelve a intentar', 'Los errores de Python son frecuentes al inicio y se leen en inglés', 'Retos de lógica con bloques, que se corrigen más rápido'],
          ['Sigue una explicación de 45 a 60 minutos', 'Es lo que dura una clase en vivo', 'Clases individuales más cortas al principio'],
          ['Tiene curiosidad por cómo funcionan sus juegos', 'Es el motor que sostiene el aprendizaje los primeros meses', 'Empezar por Roblox o Minecraft y llegar a Python desde ahí']
        ] },
        { kind: 'source', html: 'Tabla nuestra, basada en lo que observan nuestros mentores en las clases gratis. Para relacionar edad y grado usamos la guía "Edades normativas" del MINEDU, que toma la edad cumplida al 31 de marzo; según esa guía, un niño de 9 años está en 4° de primaria y uno de 12, en 1° de secundaria.' },
        { kind: 'p', mt: true, html: 'Si su hijo cumple tres o cuatro de las cinco señales, puede empezar con Python. Si cumple una o dos, no es una mala noticia: le conviene un tramo con bloques, que enseña exactamente las mismas ideas (secuencias, bucles, condiciones, variables) sin la barrera de escribir. En la clase gratis el mentor lo comprueba en veinte minutos con un reto sencillo y se lo dice con franqueza.' },
        { kind: 'p', html: 'Un dato que ayuda a entender el punto de partida: entre abril y junio de 2026, solo el 68,2% de los niños peruanos de 6 a 11 años usó internet, frente al 92,5% en el grupo de 12 a 18, según el INEI. Muchos niños llegan a su primera clase de Python sin haber usado antes una computadora con teclado para algo que no sea un juego, y eso se tiene en cuenta en las primeras semanas.' }
      ]
    },
    {
      id: 'bloques',
      eyebrow: 'Bloques o Python',
      h2: '¿Scratch o Python: con cuál debe empezar un niño?',
      lede: 'Con bloques si tiene de 6 a 8 años; con Python si tiene 9 o más y cumple las señales de arriba. Lo que se aprende en bloques no se pierde: es la misma lógica, escrita de otra forma.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dan los bloques',
          left: [
            'Scratch y los entornos parecidos evitan los errores de escritura: un bloque encaja o no encaja. El niño se concentra en el orden de los pasos y ve el resultado al instante, con un personaje que se mueve.',
            'Es ideal para empezar, pero tiene un techo. Cuando el proyecto crece, los bloques ocupan toda la pantalla y cuesta seguirlos. Ese es el momento natural de cambiar.'
          ],
          rightH3: 'Lo que agrega Python',
          right: [
            'Python se escribe con palabras: <code>for</code>, <code>if</code>, <code>while</code>, <code>print</code>. Un programa de diez líneas en Python hace lo que en bloques ocuparía media pantalla, y se puede leer de corrido como un texto.',
            'Además, es el mismo lenguaje que su hijo podrá seguir usando en secundaria, en la universidad y en un trabajo. Ningún niño "termina" Python: va encontrando nuevas cosas que hacer con él.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Primera semana de Python.</strong> El niño escribe <code>print</code>, guarda su nombre en una variable y hace que la computadora lo salude. Parece poco, pero es la primera vez que escribe una orden en vez de arrastrarla.',
          '<strong>Semanas 2 a 4.</strong> Dibujos con la tortuga gráfica de Python: cuadrados, estrellas y espirales con bucles <code>for</code>. Ver el dibujo aparecer línea por línea ayuda a entender qué hace cada repetición.',
          '<strong>Semanas 5 a 10.</strong> Juegos de preguntas y adivinanzas con <code>input</code>, <code>if</code> y <code>else</code>. Aquí el niño descubre que el programa puede responder distinto según lo que escriba el jugador.',
          '<strong>Semanas 11 a 20.</strong> Listas, números al azar y conteo, como en la clase de los dados de más abajo. Los programas empiezan a guardar datos y a sacar conclusiones de ellos.',
          '<strong>Después.</strong> Proyectos propios y primeros pasos con inteligencia artificial: un programa que clasifica, una pequeña conversación, un juego que aprende. El ritmo exacto lo fija el mentor; este recorrido es nuestro y orientativo.'
        ] }
      ]
    },
    {
      id: 'peru',
      eyebrow: 'Python en Perú',
      h2: '¿En qué grado se enseña Python en el colegio en Perú?',
      lede: 'En primaria, en ninguno como curso obligatorio. El Currículo Nacional no tiene un área de programación, y el único programa del MINEDU con Python que conocemos empieza en 4° de secundaria.',
      body: [
        { kind: 'p', html: 'El Currículo Nacional de la Educación Básica (CNEB) trata lo digital como una competencia transversal, "Se desenvuelve en entornos virtuales generados por las TIC", que cada docente trabaja dentro de otras áreas. La tabla de horas de primaria no reserva tiempo para computación ni para programación. Algunos colegios ofrecen talleres en sus horas de libre disponibilidad, pero eso depende de cada institución.' },
        { kind: 'p', html: 'Python aparece en un programa del MINEDU: la Fábrica de Programadores, anunciada el 24 de julio de 2025, que en su primera etapa forma en Python a 1000 escolares de 4° y 5° de secundaria de Lima Norte, con la posibilidad de rendir después el examen PCEP. En otras palabras, el Estado empieza a enseñar Python a los 15 o 16 años, y como piloto. Un niño que aprende Python a los 10 llega a secundaria con cinco o seis años de ventaja sobre esa edad.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Uso de internet por grupo de edad en Perú, segundo trimestre de 2026 (INEI)', head: ['Grupo de edad', 'Usó internet', 'Lectura para las familias'], rows: [
          ['De 6 a 11 años', '68,2%', 'Casi un tercio de los niños aún no usa internet'],
          ['De 12 a 18 años', '92,5%', 'En secundaria, casi todos están conectados'],
          ['De 19 a 24 años', '97,3%', 'El grupo más conectado del país'],
          ['De 25 a 40 años', '95,2%', 'La edad de la mayoría de madres y padres'],
          ['Toda la población de 6 años y más', '84,2%', 'Promedio nacional']
        ] },
        { kind: 'source', html: 'Fuente: boletín técnico del INEI sobre TIC en los hogares del II Trimestre 2026, elaborado con la Encuesta Nacional de Hogares y revisado por nosotros en noviembre de 2026. La tercera columna es nuestra lectura.' },
        { kind: 'p', mt: true, html: 'Más adelante, si a su hijo le gusta programar, hay competencias escolares en el país. La Olimpiada Peruana de Informática (OPI), que organiza la UTEC, es gratuita para todos los estudiantes de secundaria y acepta Python en su primera fase. Es una meta para dentro de unos años, no para un niño de 10; la mencionamos para que sepa que el camino continúa. No tenemos relación con la UTEC ni con el MINEDU, y nuestras clases no dan notas ni reemplazan ningún curso del colegio. Para una mirada general de la programación en primaria, vea la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'En casa',
      h2: '¿Qué necesita un niño en casa para el curso de Python?',
      lede: 'Una computadora o laptop con teclado, conexión estable, audífonos con micrófono y un lugar tranquilo. Python se instala gratis; el mentor ayuda a hacerlo en la primera clase.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dicen los datos del INEI',
          left: [
            'En su boletín del segundo trimestre de 2026, el INEI registra que el 90,2% de quienes usan internet en el país se conecta por celular; solo el 18,9% usa laptop, el 14,0% una computadora de escritorio y el 2,9% una tablet.',
            'Hay computadora en el 36,4% de los hogares del país, pero la cifra cambia mucho según dónde se viva: baja del 53,3% en Lima Metropolitana al 41,3% en las demás zonas urbanas y al 8,9% en el campo.'
          ],
          rightH3: 'Qué significa para su hijo',
          right: [
            'Python se escribe, así que el celular no sirve para programar, y la tablet solo de manera muy limitada. Si en casa hay una computadora, aunque la usen varias personas, basta con reservarla para la hora de la clase.',
            'No hace falta una máquina nueva ni potente. Una laptop de varios años con un navegador actualizado y espacio para instalar Python funciona perfectamente para todo el curso de niños.'
          ] },
        { kind: 'p', mt: true, html: 'Le pedimos a la familia dos cosas más. Que alguien adulto esté en casa durante las primeras clases, sin sentarse al lado ni ayudar con el código, solo cerca. Y que, terminada cada clase, su hijo le enseñe la pantalla y le cuente con sus palabras qué programó. Ese minuto vale más que cualquier tarea: si el niño puede explicarlo, lo entendió.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'Python e IA',
      h2: '¿Los niños pueden usar ChatGPT para aprender Python?',
      lede: 'No por su cuenta. Los propios términos de uso de las herramientas fijan edades mínimas, y en nuestras clases de niños no abrimos cuentas en ellas. Lo que sí hacemos es enseñar cómo funciona la inteligencia artificial, programándola.',
      body: [
        { kind: 'table', numCols: [], caption: 'Edad mínima según los términos de cada empresa (resumen de nuestra auditoría)', head: ['Herramienta', 'Edad mínima que fija la empresa', 'En nuestras clases de 9 a 12 años'], rows: [
          ['ChatGPT (OpenAI)', '13 años, y menores de 18 con permiso de madre, padre o tutor', 'No se usa'],
          ['Gemini (Google)', '13 años o la edad que fije cada país', 'No se usa'],
          ['Claude (Anthropic)', '18 años', 'No se usa'],
          ['Teachable Machine (Google)', 'Ninguna para entrenar en el navegador sin iniciar sesión', 'Se puede usar sin cuenta']
        ] },
        { kind: 'source', html: 'Fuente: términos de uso de OpenAI, Anthropic y Google tal como los recoge nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">guía de edades de herramientas de IA</a> (en inglés), con la cita textual de cada empresa. La tercera columna es nuestra política para los cursos de niños.' },
        { kind: 'p', mt: true, html: 'Hay una razón más, además de la edad. Un niño que le pide a un chatbot "escríbeme un juego de dados en Python" recibe un programa que funciona y no aprende nada; peor, aprende que programar es pedir. En nuestras clases el niño escribe cada línea, la ejecuta, se equivoca y la arregla. La inteligencia artificial aparece como tema de estudio: su hijo programa un clasificador sencillo, entiende qué son los datos de entrenamiento y descubre por qué una máquina se equivoca. Así, cuando cumpla la edad para usar esas herramientas, sabrá revisar lo que le responden.' }
      ]
    },
    {
      id: 'dados',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de Python en inglés para un niño de 11 años?',
      lede: 'Esta es una clase nuestra, pensada para 6° de primaria: la computadora lanza dos dados cientos de veces y cuenta qué suma sale más. El resultado sorprende, y esa sorpresa es la lección.',
      body: [
        { kind: 'code', label: 'Seiscientos lanzamientos de dos dados', lang: 'Python', code: PY, note: 'Antes de ejecutar, el mentor pregunta en inglés: "Which total do you think will come up most often?" Cada niño dice un número y lo anota.' },
        { kind: 'code', label: 'Lo que imprime con 600 lanzamientos', lang: 'Salida', code: OUT, note: 'Copiado de la pantalla tras ejecutarlo con Python 3.14.8. La línea <code>random.seed(2027)</code> hace que los "dados" salgan siempre igual, para que todos en la clase vean el mismo resultado.' },
        { kind: 'p', mt: true, html: 'Ganó el 6, con 96 apariciones, por delante del 7, con 92. Muchos niños habían apostado por el 7, y algunos por el 12 "porque es el más grande". El mentor no da la respuesta: pide cambiar <code>range(600)</code> por <code>range(60000)</code> y dividir las barras entre 500 en lugar de 5. Con sesenta mil lanzamientos el 7 aparece 9920 veces, el 6 aparece 8305 y la última línea dice <code>Most common total: 7</code>. Con pocos lanzamientos, el azar puede engañar.' },
        { kind: 'code', label: 'Contar todas las formas posibles', lang: 'Python', code: PY2, note: 'Ya no hay azar: dos bucles, uno dentro del otro, recorren las 36 combinaciones de dos dados.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT2, note: 'Salida exacta con Python 3.14.8. El primer número corresponde a la suma 2 y el último a la suma 12.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Una lista que cuenta.</strong> <code>totals = [0] * 13</code> crea trece casilleros en cero. Cada vez que sale una suma, su casillero sube en uno. Es la misma idea que hacer palitos en un cuaderno, pero sin cansarse.',
          '<strong>Predecir y comparar.</strong> El niño dice en voz alta su apuesta antes de ejecutar y la compara con el resultado. Practica frases en inglés como "I thought seven, but six won".',
          '<strong>Más datos, otra respuesta.</strong> Al pasar de 600 a 60,000 lanzamientos el resultado cambia. Es la primera vez que muchos niños ven que una conclusión sacada de pocos datos puede estar equivocada.',
          '<strong>Explicar el porqué.</strong> El segundo programa muestra que el 7 se puede formar de 6 maneras (1 y 6, 2 y 5, 3 y 4, y al revés) y el 2 o el 12 de una sola. No es suerte: es conteo.',
          '<strong>Reto para la casa.</strong> ¿Qué pasa con tres dados? El niño cambia el programa y predice antes qué suma ganará. La respuesta no se la da nadie: la encuentra ejecutando.'
        ] },
        { kind: 'p', mt: true, html: 'Esta clase mezcla programación, matemática e inglés sin anunciarlo. El niño usa listas, bucles y números al azar; descubre la diferencia entre lo que pasó en un experimento y lo que pasa siempre; y lo cuenta en otro idioma. Ninguna parte se puede copiar de una respuesta hecha, porque lo que se evalúa es la explicación.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puede mi hijo tomar las clases de Python?',
      lede: 'Usted fija el día y la hora. Como el mentor está en la India, aquí verá algunas horas habituales de un niño peruano, en el colegio o de vacaciones, convertidas al reloj de la India. Son ejemplos para entender la diferencia, no un horario.',
      body: [
        { kind: 'table', numCols: [], caption: 'Horas de Perú convertidas a la hora de la India (solo ejemplos)', head: ['Hora peruana', 'Hora en la India', 'Fecha en la India'], rows: [
          ['8:30 a. m.', '7:00 p. m.', 'La misma fecha'],
          ['10:30 a. m.', '9:00 p. m.', 'La misma fecha'],
          ['11:30 a. m.', '10:00 p. m.', 'La misma fecha'],
          ['2:00 p. m.', '12:30 a. m.', 'La fecha siguiente'],
          ['4:00 p. m.', '2:30 a. m.', 'La fecha siguiente'],
          ['6:30 p. m.', '5:00 a. m.', 'La fecha siguiente']
        ] },
        { kind: 'source', html: 'Conversión hecha por nosotros con tzdata: America/Lima corresponde a UTC-5 sin cambio de verano, igual que la hora oficial que difunde el INACAL, y Asia/Kolkata a UTC+5:30. La India está 10 horas y media por delante de Perú durante todo el año.' },
        { kind: 'p', mt: true, html: 'Las horas de la mañana son las favoritas en verano y para los niños que van al colegio en el turno tarde; las de la tarde, para el turno mañana, después del almuerzo y las tareas. Si está pensando en aprovechar enero a marzo para empezar, las páginas de <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">talleres de verano de programación para niños</a> y de <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a> proponen cómo organizar el verano. Al reservar la clase gratis, el sistema le muestra las horas disponibles directamente en hora de Perú.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si mi hijo avanza en Python?',
    lede: 'Cinco escalones propios que el mentor usa para contarle a la familia en qué punto está el niño. No son grados escolares ni notas.',
    table: { caption: 'Cinco escalones de Python para niños (nuestros)', head: ['Escalón', 'Cuándo suele llegar', 'Su hijo ya puede'], rows: [
      ['1. Ordenar a la computadora', 'Primer mes', 'escribir órdenes con print y variables, y leer un error sin asustarse'],
      ['2. Repetir con sentido', 'Meses 2 y 3', 'usar un bucle for para dibujar o contar sin repetir líneas a mano'],
      ['3. Hacer que decida', 'Meses 3 a 5', 'escribir un juego de preguntas con if y else que responde distinto a cada jugador'],
      ['4. Guardar y contar', 'Meses 5 a 7', 'llevar la cuenta en una lista, como en la clase de los dados, y explicar el resultado'],
      ['5. Inventar', 'Desde el mes 7', 'proponer su propio proyecto, programarlo y presentarlo en inglés']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No mida el avance por la velocidad. Un niño que escribe despacio pero explica lo que hace avanza con más firmeza que uno que copia rápido.',
      'Si su hijo se frustra con un error, pregúntele qué dice el mensaje. Leerlo en voz alta, aunque sea en inglés a medias, suele bastar para encontrar la pista.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Antes de apretar el botón de ejecutar, diga qué cree que va a pasar.',
      'Si el resultado no es el que esperaba, no borre todo: cambie una sola cosa y vuelva a probar.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para antes, durante y después de Python',
    lede: 'Para hermanos de distintas edades o para el siguiente paso de su hijo. Todos son en vivo y en inglés.',
    bands: [
      { num: 'I', h3: 'Antes de Python', sub: 'De 6 a 9 años', courses: [
        { code: 'PYNI / ANTES / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensamiento lógico para los más pequeños', blurb: 'Acertijos y series de figuras para entrenar el orden de los pasos, de 6 a 9 años.' },
        { code: 'PYNI / ANTES / 02', slug: 'minecraft-coding-for-kids-course', title: 'Programar dentro de Minecraft', blurb: 'Bucles y condiciones usando un mundo que el niño ya conoce bien.' },
        { code: 'PYNI / ANTES / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Programar juegos en Roblox', blurb: 'Desde los 8 años, con Luau, un lenguaje escrito parecido a Python.' }
      ] },
      { num: 'II', h3: 'Al lado de Python', sub: 'De 8 a 12 años', courses: [
        { code: 'PYNI / LADO / 01', slug: 'game-development-masterclass-for-kids', title: 'Desarrollo de videojuegos', blurb: 'Un recorrido por varios motores de juego para quien sueña con crear el suyo.' },
        { code: 'PYNI / LADO / 02', slug: 'kids-ai-web-development-course', title: 'Mi primera página web', blurb: 'HTML y CSS para niños de 9 a 12 que quieren publicar algo propio.' },
        { code: 'PYNI / LADO / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Otro lenguaje escrito, útil más adelante para las olimpiadas de informática.' }
      ] },
      { num: 'III', h3: 'Después de los 12', sub: 'Adolescentes', courses: [
        { code: 'PYNI / DESPUES / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'De 13 a 18 años: Python a fondo, con proyectos más grandes.' },
        { code: 'PYNI / DESPUES / 02', slug: 'pcep-pcap-python-certification-course', title: 'Preparación para el PCEP', blurb: 'Desde unos 13 años, para quien quiere rendir el examen del Python Institute.' },
        { code: 'PYNI / DESPUES / 03', slug: 'ai-ml-masterclass-teens', title: 'IA y machine learning para adolescentes', blurb: 'Modelos que aprenden de datos, programados en Python desde cero.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es el curso de Python para niños en la práctica?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Turno tarde en el colegio', l: 'Clase por la mañana, antes de salir.' },
      { time: 'Turno mañana en el colegio', l: 'Clase por la tarde, ya almorzado.' },
      { time: 'Vacaciones', l: 'Las horas que la familia quiera fijar.' }
    ],
    cells: [
      { h3: 'El niño teclea', p: 'Cada línea la escribe él; el mentor señala, pregunta y espera.' },
      { h3: 'Un inglés sencillo', p: 'Frases cortas, la palabra escrita en pantalla y mucha paciencia.' },
      { h3: 'Juegos con sentido', p: 'Cada juego enseña una idea: contar, decidir, repetir, guardar.' },
      { h3: 'Mentor de siempre', p: 'La misma persona todo el curso, que conoce a su hijo.' },
      { h3: 'Noticias para casa', p: 'Qué se practicó hoy y qué toca la próxima vez, en pocas líneas.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte niños de edad cercana, o su hijo solo.' }
    ]
  },

  projectsH2: 'Lo que llegan a construir nuestros estudiantes',
  projectsLede: 'Los niños que empiezan con Python a los 9 o 10 años terminan, unos años después, en proyectos como estos de estudiantes mayores. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de familias y estudiantes publicadas en Google, sin cambios y en inglés, como se escribieron.',

  fees: {
    h2: '¿Cuánto cuesta el curso de Python para niños?',
    lede: 'La mensualidad se muestra en dólares de Estados Unidos y se paga con tarjeta; es su banco el que la convierte a su moneda, por eso el cargo final puede moverse un poco según el tipo de cambio.',
    free: ['Una clase de prueba gratuita', 'El mentor le dice si su hijo está listo para Python', 'Sin tarjeta ni compromiso'],
    group: ['De quince a veinte niños de edad cercana', 'El mismo mentor todo el curso', 'Dos clases en vivo por semana', 'Se paga mes a mes'],
    one: ['Su hijo solo con el mentor', 'El ritmo que su hijo necesita', 'Día y hora a elección de la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Curso de Python para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: el curso se dicta en vivo, por internet y únicamente en inglés. Para muchas familias peruanas es justo lo que buscan, porque su hijo aprende Python y suelta el inglés hablado en la misma hora. El mentor usa frases cortas y no apura. El EF EPI 2025 ubica a Lima en el nivel alto de inglés, y donde más se avanza con una clase en vivo es al hablar.' },
      { q: '¿A qué edad puede un niño empezar con Python?', a: 'La mayoría, entre los 9 y los 10 años, en 4° o 5° de primaria. Lo importante es que lea una instrucción corta sin ayuda y use el teclado con cierta soltura. Si su hijo tiene de 6 a 8 años, le conviene empezar con bloques.' },
      { q: '¿Mi hijo necesita saber inglés?', a: 'No hace falta que lo hable. Python usa pocas palabras en inglés y siempre las mismas, y el mentor las explica con la pantalla. Las primeras semanas sirven para acostumbrarse al acento; después, el niño entiende cada vez más.' },
      { q: '¿Conviene empezar con Scratch o con Python?', a: 'Depende de la edad. De 6 a 8 años, Scratch u otro entorno de bloques; desde los 9, si ya lee y teclea con soltura, Python. La lógica que se aprende en bloques sirve igual en Python.' },
      { q: '¿Se enseña Python en el colegio en Perú?', a: 'En primaria, no como curso. El Currículo Nacional no tiene un área de programación, y el programa Fábrica de Programadores del MINEDU, que enseña Python, está dirigido a 4° y 5° de secundaria y es un piloto.' },
      { q: '¿Mi hijo puede usar ChatGPT en el curso?', a: 'No. Según los términos de OpenAI, ChatGPT exige al menos 13 años y permiso de los padres hasta los 18; Claude exige 18. En el curso de niños no usamos esas herramientas: los niños programan su propio código y estudian cómo funciona la IA.' },
      { q: '¿Qué necesita en casa?', a: 'Una computadora o laptop con teclado, audífonos con micrófono e internet estable. Con un celular no se puede programar en Python con comodidad. El mentor ayuda a instalar Python gratis en la primera clase.' },
      { q: '¿Cuánto dura el curso de Python para niños?', a: 'Según la ficha del curso, Python e IA para niños dura de 8 a 10 meses (32 a 40 semanas), con dos clases en vivo por semana. Su hijo puede seguir después con cursos para adolescentes.' },
      { q: '¿En qué horario estudiaría mi hijo?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, a las 10:30 a. m. de Perú, en la India son las 9:00 p. m.; la diferencia de 10 horas y media no cambia en el año.' },
      { q: '¿El curso da un certificado válido para el colegio?', a: 'No. Al aprobar el examen final, su hijo recibe nuestro certificado de finalización de Modern Age Coders, que no tiene carácter oficial. No tenemos relación con el MINEDU ni con colegio alguno, y no ponemos notas escolares.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Más lecturas sobre Python para niños',
    lede: 'Páginas de nuestro sitio, casi todas en inglés, para profundizar con su hijo.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página principal para Perú, con todas las edades y temas.' },
      { href: '/python-for-10-year-olds', label: 'Python for 10 year olds', p: 'Qué puede aprender un niño de 10 años en Python, mes a mes.' },
      { href: '/python-games-for-kids', label: 'Python games for kids', p: 'Juegos sencillos que un niño puede programar en sus primeras semanas.' },
      { href: '/python-turtle-not-working', label: 'Python turtle not working', p: 'Qué hacer si la tortuga gráfica no abre en su computadora.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de cada herramienta de IA, con la cita de cada empresa.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Lo que pasa en una clase en vivo, minuto a minuto.' }
    ]
  },

  start: {
    h2: 'Agende una clase de Python gratis para su hijo',
    lede: 'En la clase de prueba el mentor saluda a su hijo en un inglés muy simple, le pide escribir dos o tres líneas de Python y mira cómo se las arregla. Al terminar le dice a usted si conviene empezar directo con Python o pasar antes por bloques, y qué formato le recomienda.',
    readFirst: 'Para leer antes de agendar: <a class="ag-inline-link" href="/python-for-10-year-olds">Python for 10 year olds</a> describe el primer año de Python y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> muestra una clase por dentro (las dos en inglés).',
    note: 'Todo el curso se dicta en vivo por internet, desde la India y en inglés. Si le resulta más cómodo, escríbanos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta y sin obligación de inscribirse.'
  },

  footer: {
    cols: [
      { h4: 'Python para niños', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'Entender la IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para la familia', links: [
        { href: '/python-for-10-year-olds', label: 'Python a los 10 años' },
        { href: '/python-games-for-kids', label: 'Juegos en Python' },
        { href: '/ai-tools-age-guide', label: 'Edades de la IA' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Seiscientos dados no bastan: sesenta mil, sí'
  },

  personalityCss: `
.ag-root.ag-pyni .ag-hero h1 { letter-spacing: -0.008em; max-width: 20ch; }
.ag-root.ag-pyni .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-pyni .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-pyni .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-pyni .ag-steps li { line-height: 1.7; }
`,

  dossier: {
    curriculumAuthority: 'INEI Boletín TIC II trimestre 2026 (internet use by age, devices, households with a computer); MINEDU Fábrica de Programadores press note of 24 July 2025, Edades normativas and the CNEB (competency 28, primaria hour table); UTEC OPI home; vendor age terms via content/ai-tool-age-audit.json; tzdata and INACAL for time. Course durations from our own course data. The readiness table, the week plan, the five steps and the dice lesson are our own.',
    localProject: 'Two dice in Python for a child of 11 in 6° de primaria: random.seed(2027), a list of 13 zeros used as a tally and 600 rolls print a text bar chart where 6 wins (96) over 7 (92); changing to 60,000 rolls makes 7 win (9920 against 8305 for 6); two nested loops then count the 36 combinations and print [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1], explaining why. Run with python3 -I, output pasted exactly. Lesson family: random dice; count outcomes in a list used as a tally, see a small sample mislead, then count every case with nested loops.',
    requiredMentions: ['Most common total: 6', 'Most common total: 7', '[1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]', 'I thought seven, but six won', 'Seiscientos dados no bastan: sesenta mil, sí', 'Señales de que un niño está listo para Python', 'Uso de internet por grupo de edad en Perú, segundo trimestre de 2026', 'el 2,9% una tablet', 'al 8,9% en el campo', 'el 7 aparece 9920 veces'],
    sources: [
      { claim: 'Internet use by age (6 to 11: 68.2%; 12 to 18: 92.5%; 19 to 24: 97.3%; 25 to 40: 95.2%; all 6+: 84.2%), devices (phone 90.2%, laptop 18.9%, computer 14.0%, tablet 2.9%) and households with a computer (36.4%; Lima Metropolitana 53.3%, rest urban 41.3%, rural 8.9%), II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Fábrica de Programadores: Python for 1000 students of 4° and 5° secundaria in Lima Norte, PCEP exam, pilot.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Normative age measured at 31 March; age to grade table.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'CNEB: competency 28 transversal; no computing area in the primaria hour table.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'OPI is free for all secondary students; Fase 1 accepts Python.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'ChatGPT minimum 13 with parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude minimum 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Using ChatGPT, Gemini or Claude with children of 9 to 12: refused; vendor terms set 13 or 18 as the minimum, and the page says we do not use them in the kids course.',
      'Any MINEDU, UTEC or school endorsement, school grades or an official certificate: none; our certificate of completion only.',
      'Calling the 600-roll result a fact about dice: refused; the page shows it is a small-sample accident and proves the 6 in 36 count.',
      'Typed fees or soles figures: refused; fees render from the template in USD.'
    ]
  }
};

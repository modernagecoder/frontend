'use strict';
// Clases de programación para niños en inglés (ag- Spanish-language door, Peru cluster row PE086, P1, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Peruvian parent of a child of 6 to 12 who typed "clases de programación para niños en inglés" (or "online",
// "virtuales", "de 10 años", "robótica o programación"). Spine: yes, they exist and here is what English-medium means for a
// primaria child; what the primaria timetable gives (CNEB Tabla N.° 6: no programming area, two or three hours of English);
// which grade and age to start at (MINEDU edades normativas); whether virtual classes work at home (INEI ENAHO 2026);
// robótica or programación (MINEDU DITE robotics paper); one original Python lesson that is English vocabulary and code at
// once; Peru to India clock conversions.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-en-ingles/,
// all fetched 2026-11-08, quotes grepped in the raw text; facts-school/FACTS.md and facts-market/MARKET.md numbers given):
//  Ley 28044, Ley General de Educación (FACTS 5): "La Educación Primaria constituye el segundo nivel de la Educación Básica
//    Regular y dura seis años."
//  D.S. 011-2012-ED, Art. 61 (FACTS 10, OCR text): "Atiende a niños y niñas a partir de los 6 años de edad."
//  MINEDU, Edades normativas (FACTS 13, 14): "Se considera la edad normativa al 31 de marzo de cada año."; table "6 años 7 años
//    8 años 9 años 10 años 11 años 12 años" against "1er grado ... 6to grado" (primaria) then "1er grado" (secundaria).
//  CNEB (minedu.gob.pe/curriculo), TABLA N.° 6 (FACTS 57): "Matemática 5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3
//    Personal social 3 3 4 4 4 4 Arte y cultura 3 3 3 3 3 3 Ciencia y tecnología 3 3 4 4 4 4 Educación física 3 3 3 3 3 3
//    Educación religiosa 1 1 1 1 1 1 Tutoría y orientación educativa 2 2 2 2 2 2 Horas de libre disponibilidad 3 3 2 2 2 2
//    Total de horas 30 30 30 30 30 30"; "horas pedagógicas (45 minutos)" (FACTS 44); competency 28 "Se desenvuelve en entornos
//    virtuales generados por las TIC" listed under "Competencias transversales a las áreas" (FACTS 32, 33).
//  MINEDU press note 16 March 2026 (FACTS 17, 27): "53 631 colegios de Educación Básica Regular ... 6 225 000 estudiantes".
//  MINEDU press note 14 October 2026 (FACTS 18): "2.7 millones a escolares de primaria".
//  MINEDU ENLA 2024 (FACTS 63): "532 000 escolares de 4.º grado de primaria".
//  MINEDU DITE robotics paper (FACTS 52, 54): "la robótica en educación no es el objetivo, es el medio."; "en los años 2009 y
//    2010, el MINEDU dota de Kits LEGO Wedo a casi el 100% de Instituciones Educativas de Gestión Pública de Educación Primaria".
//  INEI, Boletín TIC II trimestre 2026 (MARKET 1.4): "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)";
//    "el 36,4% de los hogares dispone de una computadora".
//  EF EPI 2025, Peru page (MARKET 1.3): "Global ranking: #52", "EF EPI score : 519", "Speaking score: 480", cities "Lima 555";
//    page data band thresholds: high from 550 (so Lima is in the High band), Peru national "moderate".
//  Time: tzdata Zone America/Lima -5:00 (no DST since 1994), Asia/Kolkata 5:30; INACAL official clock read as UTC-5 on
//    2026-11-08; INEI Compendio 2026 cuadro 1.3: Lima 12:00 M = Delhi 10:30 P.M. (facts-geo/timezone.tsv).
// Our own calculations (python3 -I): 2 x 45 = 90 and 3 x 45 = 135 minutes of English a week; over the 36 teaching weeks of
//    the 2026 school year (RM 501-2025-MINEDU, FACTS 21): 90 x 36 / 60 = 54.0 hours (1° and 2°), 135 x 36 / 60 = 81.0 hours
//    (3° to 6°).
// Our own example, run with python3 -I (colores.py and reto.py in the src-pages folder), exact output:
//    rojo -> red correct! / azul -> blue correct! / verde -> grin try again: green / amarillo -> yellow correct! / Score: 3 of 4
//    with 'morado': 'purple' added to both dictionaries: ... morado -> purple correct! / Score: 4 of 5
// Lesson family: a dictionary (key and value) used as a bilingual word list, checking answers with if and else.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "colores = {'rojo': 'red', 'azul': 'blue', 'verde': 'green', 'amarillo': 'yellow'}",
  "respuestas = {'rojo': 'red', 'azul': 'blue', 'verde': 'grin', 'amarillo': 'yellow'}",
  '',
  'puntos = 0',
  'for palabra in colores:',
  '    if respuestas[palabra] == colores[palabra]:',
  '        puntos = puntos + 1',
  "        print(palabra, '->', respuestas[palabra], 'correct!')",
  '    else:',
  "        print(palabra, '->', respuestas[palabra], 'try again:', colores[palabra])",
  '',
  "print('Score:', puntos, 'of', len(colores))"
].join('\n');

const OUT = [
  'rojo -> red correct!',
  'azul -> blue correct!',
  'verde -> grin try again: green',
  'amarillo -> yellow correct!',
  'Score: 3 of 4'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para niños en inglés' },
  slug: 'clases-de-programacion-para-ninos-en-ingles',
  code: 'pni',
  accent: '#2E6720',
  accentRationale: 'Clases de programación para niños en inglés: a leafy school-garden green #2E6720, the colour of a primaria notebook cover, away from the reds and blues of the other Peru doors; contrast 5.54 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en inglés',
  title: 'Clases de programación para niños en inglés, en vivo',
  description: 'Clases de programación para niños de 6 a 12 años en Perú, en vivo, en línea y en inglés: Scratch, Python y Roblox, en grupo o individuales y a cualquier hora.',
  ogDescription: 'Programación para niños de primaria en Perú, en vivo y en inglés: qué enseña el colegio, a qué edad empezar, robótica o programación y una clase de ejemplo en Python.',
  twitterDescription: 'Clases virtuales de programación para niños de 6 a 12 años, en vivo y en inglés, desde Perú y a cualquier hora.',
  pageName: 'Clases de programación para niños en inglés',
  webPageDescription: 'Guía para madres y padres en Perú sobre las clases de programación para niños de 6 a 12 años dictadas en vivo y en inglés: lo que el plan de estudios de primaria del CNEB incluye y no incluye, la edad normativa de cada grado según el MINEDU, el uso de internet de los niños según el INEI, robótica o programación, y una clase de ejemplo en Python escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años en todo el Perú, dictadas solo en inglés: Scratch y bloques, Python, Roblox y proyectos de IA, en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#ingles', label: 'En inglés' },
    { href: '#colegio', label: 'El colegio' },
    { href: '#edad', label: 'Edad' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#horario', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños, en vivo y en inglés',
  lede: 'Si busca clases virtuales de programación para su hijo o hija de primaria y quiere que, de paso, gane soltura en inglés, esta página responde lo que más preguntan las familias peruanas: cómo es aprender a programar con un mentor que habla en inglés, qué enseña el colegio y qué no, a qué edad conviene empezar, si la robótica es necesaria y cómo encaja la hora de Perú con la de la India.',
  secondaryCta: { href: '#ingles', label: '¿Cómo es una clase en inglés?' },
  wa: 'Hola Modern Age Coders, buscamos clases de programación en inglés para nuestro hijo o hija en Perú. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; el mismo mentor cada semana, siempre en inglés',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Lenguajes', 'Scratch, Python y Luau para Roblox'],
    ['Formato', 'Clase grupal de quince a veinte niños, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Mentores', 'Desde la India, en vivo por videollamada'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, existen: Modern Age Coders dicta clases de programación para niños de 6 a 12 años en todo el Perú, en vivo, en línea y en inglés. Un mentor desde la India enseña por videollamada, habla despacio y con claridad, y adapta su ritmo y su acento a cada niño. Los más pequeños empiezan con Scratch y bloques; desde los 9 años pasan a Python, Roblox y proyectos de IA. Usted elige una clase grupal o clases individuales, cualquier día y a cualquier hora, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos con los que empiezan los niños',
    lede: 'Uno para quien todavía no lee con fluidez, uno para quien ya escribe con soltura en el teclado y uno para quien llega a la programación por los videojuegos.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNI / 01', title: 'Programación con bloques para niños', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años, con grupos separados por edad. De Scratch a juegos, apps sencillas y primeros proyectos de IA, arrastrando bloques que se leen como frases en inglés.' },
      { course: 'python-ai-kids-masterclass', code: 'PNI / 02', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años. El primer lenguaje escrito de verdad: dibujos con la tortuga, juegos de preguntas y pequeños proyectos que usan inteligencia artificial.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PNI / 03', title: 'Juegos en Roblox con Luau', alt: 'Imagen del curso de programación de juegos en Roblox', note: 'Desde los 8 años. Su hijo diseña obstáculos, puntajes y tiendas dentro de Roblox Studio, y entiende el código que mueve cada pieza.' }
    ]
  },

  sections: [
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Hay clases de programación para niños en inglés en Perú?',
      lede: 'Sí. Todas nuestras clases son en vivo, en línea y únicamente en inglés, también para los niños de primaria que viven en Perú. No es una traducción ni un curso grabado: es un mentor real que conversa con su hijo mientras ambos programan.',
      body: [
        { kind: 'three', cells: [
          { h3: 'El código ya está en inglés', p: 'Los bloques de Scratch se pueden mostrar en castellano, pero Python, Luau y casi todos los lenguajes se escriben con palabras inglesas: <code>print</code>, <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>. Un niño que oye esas palabras en la clase entiende antes qué hace cada instrucción.' },
          { h3: 'Un mentor que habla despacio', p: 'El mentor repite con otras palabras, muestra en pantalla lo que dice y espera la respuesta del niño. Si su hijo contesta en castellano, el mentor recoge la idea y le devuelve la frase en inglés, sin corregirlo frente a los demás.' },
          { h3: 'Dos aprendizajes en una hora', p: 'Mientras arma un juego, su hijo escucha, pregunta y explica en inglés. Para muchas familias peruanas eso es la razón de elegirnos: la programación y la práctica del idioma avanzan juntas, sin sumar otra actividad a la semana.' }
        ] },
        { kind: 'table', mt: true, numCols: [1], caption: 'El inglés en Perú según el EF EPI 2025 (índice de dominio del inglés de EF)', head: ['Medición', 'Puntaje', 'Nivel o posición'], rows: [
          ['Perú, puntaje nacional', '519', 'Moderado; puesto 52 de 123 países'],
          ['Lima, ciudad', '555', 'Alto (EF fija el nivel alto desde 550)'],
          ['Perú, comprensión lectora', '540', 'La habilidad más fuerte del país'],
          ['Perú, expresión oral', '480', 'La habilidad más débil del país']
        ] },
        { kind: 'source', html: 'Fuente: EF Education First, EF EPI 2025, página de Perú (ef.com/wwen/epi/regions/latin-america/peru), leída el 8 de noviembre de 2026. El EF EPI se basa en personas que rinden el examen de EF, y la página agrupa sus resultados por edades desde los 18 años, no en niños; lo citamos porque muestra dónde está la brecha: los peruanos leen inglés con más soltura de la que muestran al hablarlo.' },
        { kind: 'p', mt: true, html: 'Ese dato del EF EPI 2025 explica por qué una clase hablada sirve tanto. En la clase de programación su hijo no memoriza listas de vocabulario: tiene que decir en voz alta qué quiere que haga su personaje, preguntar por qué su programa no corre y contar qué cambió. Es la habilidad oral, la que el índice marca como la más débil del país, practicada con un propósito concreto cada semana.' },
        { kind: 'p', html: 'No hace falta que su hijo llegue hablando inglés. Los niños de 6 a 8 años empiezan con bloques y dibujos, donde una palabra nueva por clase basta; los de 9 a 12 años ya escriben código y aprenden el inglés técnico que necesitan sobre la marcha. Lo que sí pedimos es paciencia en las primeras dos o tres semanas, que es lo que suele tardar un niño en acostumbrarse al acento del mentor y el mentor al del niño.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Lo que da el colegio',
      h2: '¿Se enseña programación en el colegio en primaria?',
      lede: 'No como curso propio. El plan de estudios de primaria del Currículo Nacional de la Educación Básica (CNEB) reparte 30 horas pedagógicas a la semana entre nueve áreas y un bloque de horas de libre disponibilidad, y ninguna de esas áreas es computación o programación.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4, 5, 6], caption: 'Horas pedagógicas semanales en primaria por grado, según el CNEB (Tabla N.° 6)', head: ['Área curricular', '1°', '2°', '3°', '4°', '5°', '6°'], rows: [
          ['Matemática', '5', '5', '4', '4', '4', '4'],
          ['Comunicación', '5', '5', '4', '4', '4', '4'],
          ['Inglés', '2', '2', '3', '3', '3', '3'],
          ['Personal social', '3', '3', '4', '4', '4', '4'],
          ['Arte y cultura', '3', '3', '3', '3', '3', '3'],
          ['Ciencia y tecnología', '3', '3', '4', '4', '4', '4'],
          ['Educación física', '3', '3', '3', '3', '3', '3'],
          ['Educación religiosa', '1', '1', '1', '1', '1', '1'],
          ['Tutoría y orientación educativa', '2', '2', '2', '2', '2', '2'],
          ['Horas de libre disponibilidad', '3', '3', '2', '2', '2', '2'],
          ['Total de horas', '30', '30', '30', '30', '30', '30']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Educación del Perú, Currículo Nacional de la Educación Básica, Tabla N.° 6 "Organización y distribución del tiempo semanal de Educación Primaria", en minedu.gob.pe/curriculo, leído el 8 de noviembre de 2026. El CNEB mide el tiempo en "horas pedagógicas (45 minutos)". Cada colegio organiza su propio horario dentro de este marco.' },
        { kind: 'two', mt: true,
          leftH3: 'Dónde aparece la tecnología',
          left: [
            'El CNEB incluye la competencia 28, "Se desenvuelve en entornos virtuales generados por las TIC", pero la ubica entre las competencias transversales a las áreas: se trabaja dentro de Comunicación, Ciencia y tecnología o Matemática, según lo que planifique cada docente, y no tiene horas propias en la tabla.',
            'Las horas de libre disponibilidad (tres en 1° y 2°, dos de 3° a 6°) son las que algunos colegios usan para un taller de computación o robótica. Depende de cada institución, por eso dos niños del mismo grado pueden tener experiencias muy distintas.'
          ],
          rightH3: 'Cuánto inglés hay en la semana',
          right: [
            'La tabla asigna dos horas pedagógicas de Inglés en 1° y 2° de primaria y tres de 3° a 6°. Con horas de 45 minutos, eso son 90 y 135 minutos a la semana (cálculo nuestro).',
            'Si se multiplican por las 36 semanas lectivas del año escolar 2026, que según la RM 501-2025-MINEDU fueron del 16 de marzo al 18 de diciembre de 2026, salen unas 54 horas de inglés al año en los primeros grados y unas 81 de 3° a 6° (cálculo nuestro, sin contar feriados ni actividades). Dos clases de programación en inglés a la semana añaden práctica oral real a ese tiempo.'
          ] },
        { kind: 'p', mt: true, html: 'Son muchos los niños en esta situación. El MINEDU informó que el 16 de marzo de 2026 abrieron sus puertas 53,631 colegios de Educación Básica Regular para 6,225,000 estudiantes, y el 14 de octubre de 2026 anunció materiales para el año escolar 2027 dirigidos a 2.7 millones de escolares de primaria. Nuestras clases no reemplazan nada de eso: acompañan al colegio, en otro horario, y no otorgan notas ni certificados del sistema educativo peruano. Al terminar un curso entregamos solo nuestro propio certificado de finalización.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'Edad y grado',
      h2: '¿A qué edad puede un niño empezar a programar?',
      lede: 'Desde los 6 años, la edad con la que se entra a 1° de primaria. Lo que cambia con la edad no es si puede programar, sino con qué herramienta y cuánto tiempo seguido puede concentrarse.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Grado de primaria, edad normativa y por dónde empezar', head: ['Grado', 'Edad normativa al 31 de marzo', 'Por dónde empezar (nuestra recomendación)'], rows: [
          ['1° de primaria', '6 años', 'Secuencias con bloques grandes, cuentos animados en Scratch'],
          ['2° de primaria', '7 años', 'Scratch con repeticiones y eventos; mundos sencillos en Minecraft'],
          ['3° de primaria', '8 años', 'Juegos completos en Scratch, primeros pasos en Roblox Studio'],
          ['4° de primaria', '9 años', 'Primer lenguaje escrito: Python con dibujos y preguntas'],
          ['5° de primaria', '10 años', 'Python con listas y diccionarios, juegos en Roblox con Luau'],
          ['6° de primaria', '11 años', 'Proyectos propios: una web, una app o un modelo de IA sencillo']
        ] },
        { kind: 'source', html: 'Fuentes: MINEDU, "Edades normativas" (gob.pe, guía del 9 de febrero de 2022): "Se considera la edad normativa al 31 de marzo de cada año"; Ley N.° 28044, Ley General de Educación: la primaria "dura seis años"; D.S. N.° 011-2012-ED, artículo 61: atiende a niños y niñas "a partir de los 6 años de edad". La tercera columna es nuestra.' },
        { kind: 'two', mt: true,
          leftH3: 'Programación para niños de 10 años',
          left: [
            'Es la edad que más consultan los padres, y con razón: a los 10 años, en 5° de primaria según la tabla del MINEDU, la mayoría de niños ya escribe con soltura en el teclado y sigue una explicación de una hora. Es buen momento para pasar de los bloques a Python.',
            'Un niño de 10 años que empieza de cero no necesita pasar meses en Scratch. Con dos o tres semanas de bloques para entender qué es un bucle y una condición, el mentor lo lleva a escribir sus primeras líneas en Python, como el ejemplo de más abajo.'
          ],
          rightH3: 'Si su hijo tiene 6 o 7 años',
          right: [
            'A esta edad todavía se está aprendiendo a leer y escribir en castellano, así que las clases usan muy poco texto: bloques de colores, personajes y sonidos. El inglés llega por el oído, con palabras cortas que el mentor repite: <em>move</em>, <em>jump</em>, <em>repeat</em>, <em>green flag</em>.',
            'Para los más pequeños recomendamos que una persona adulta esté cerca en las primeras clases, no para ayudar con el código, sino para que el niño se sienta acompañado frente a la pantalla.'
          ] },
        { kind: 'p', mt: true, html: 'Sobre el nivel del colegio en matemática y lectura, el MINEDU tomó la ENLA 2024 como prueba censal a 532,000 escolares de 4° de primaria. No usamos esos resultados para ubicar a su hijo: en la clase gratis el mentor le pide hacer algo sencillo y decide el punto de partida según lo que ve, no según el grado.' }
      ]
    },
    {
      id: 'online',
      eyebrow: 'Clases virtuales',
      h2: '¿Funcionan las clases virtuales de programación para niños?',
      lede: 'Funcionan cuando la clase es en vivo y el niño programa en su propia computadora, no cuando mira un video. La pantalla compartida permite que el mentor vea exactamente dónde se trabó su hijo y lo resuelva con él en el momento.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice el INEI sobre internet en casa',
          left: [
            'Según el boletín del INEI sobre tecnologías de la información del segundo trimestre de 2026, el 68,2 % de los niños de 6 a 11 años usó internet, muy por debajo del 92,5 % de los adolescentes de 12 a 18 años. Es decir, para una buena parte de los niños peruanos la clase virtual será también su primer uso serio de una computadora.',
            'El mismo boletín indica que el 36,4 % de los hogares del país dispone de una computadora. Si en su casa hay una, aunque sea compartida, es suficiente.'
          ],
          rightH3: 'Qué equipo necesita su hijo',
          right: [
            'Una computadora de escritorio o una laptop con teclado, cámara y micrófono, y una conexión estable. Scratch y Python funcionan en el navegador o con programas gratuitos que el mentor ayuda a instalar en la primera clase.',
            'Un celular no alcanza para programar: la pantalla es pequeña y escribir código sin teclado frustra a cualquier niño. Una tablet sirve solo para las primeras semanas con bloques en los más pequeños.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Un lugar fijo.</strong> La misma mesa cada semana, con la computadora enchufada y lejos de la televisión.',
          '<strong>Audífonos con micrófono.</strong> Ayudan mucho a entender el inglés del mentor y a que el mentor escuche bien al niño.',
          '<strong>Cinco minutos antes.</strong> Abrir el enlace de la clase y Scratch o Python antes de la hora, para no perder el inicio.',
          '<strong>Una libreta.</strong> Los niños anotan las palabras nuevas en inglés junto al dibujo de lo que hacen en el código.',
          '<strong>Preguntar al final.</strong> Pídale a su hijo que le muestre lo que hizo y que se lo explique; si lo explica, lo entendió.'
        ] },
        { kind: 'p', mt: true, html: 'Cada niño tiene su propio mentor durante el curso, que conoce su ritmo y su forma de aprender. Usted recibe un breve informe después de las clases sobre lo que se practicó y lo que viene, y puede escribirnos por WhatsApp cuando quiera.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica o programación',
      h2: '¿Robótica o programación: qué conviene para un niño?',
      lede: 'Para empezar, programación. La robótica es una forma de aplicar la programación a un objeto físico; sin saber programar, el robot solo hace lo que trae de fábrica.',
      body: [
        { kind: 'p', html: 'El propio Ministerio de Educación lo plantea así. En su documento sobre robótica educativa, la Dirección de Innovación Tecnológica en Educación escribe que "la robótica en educación no es el objetivo, es el medio", y recuerda que en los años 2009 y 2010 el MINEDU entregó kits LEGO WeDo a casi el 100 % de los colegios públicos de primaria. Es decir, muchos niños peruanos ya tuvieron un robot cerca; lo que suele faltar es la parte que hace que el robot piense: la lógica del programa.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Robótica y programación para niños, comparadas (nuestra comparación)', head: ['', 'Programación', 'Robótica'], rows: [
          ['Qué se aprende', 'Secuencias, bucles, condiciones, variables, depuración', 'Lo mismo, más motores, sensores y montaje'],
          ['Qué necesita en casa', 'Una computadora', 'Una computadora y un kit de piezas'],
          ['Dónde se aplica después', 'Juegos, webs, apps, datos, IA', 'Proyectos físicos y concursos de robótica'],
          ['Qué ofrecemos', 'Clases en vivo, en inglés', 'No vendemos ni usamos kits de robótica']
        ] },
        { kind: 'p', mt: true, html: 'Nosotros enseñamos programación, no hardware, y no enviamos ningún kit. Si su hijo ya está en un taller de robótica en el colegio, lo que aprenda con nosotros sobre bucles y condiciones le servirá allí tal cual, porque los robots educativos se programan con la misma lógica de bloques o de Python.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de programación en inglés para un niño de 10 años?',
      lede: 'Así se ve una parte de una clase real de Python para 5° de primaria. El ejercicio es nuestro: un diccionario que guarda colores en castellano y su nombre en inglés, y un programa que revisa las respuestas de un compañero. Programación e inglés en el mismo ejercicio.',
      body: [
        { kind: 'code', label: 'Un juego de colores en Python', lang: 'Python', code: PY, note: 'Antes de ejecutarlo, el mentor pregunta en inglés: "What will the program print?" El niño predice, luego lo corre y compara.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Salida exacta, copiada después de ejecutar el programa nosotros mismos con Python 3. La palabra <code>grin</code> no es <code>green</code>, así que el programa da 3 de 4.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer en voz alta.</strong> El niño lee la primera línea en inglés: "colores is a dictionary: rojo means red, azul means blue". Así aprende que un diccionario guarda pares de clave y valor.',
          '<strong>Predecir antes de ejecutar.</strong> ¿Cuántos puntos saldrán? Muchos niños dicen 4 porque no ven el error en <code>grin</code>. Ejecutar y comparar enseña a leer con cuidado, en el código y en el inglés.',
          '<strong>Explicar el error.</strong> El mentor pide la razón en una frase: "verde is green, not grin". Se practica una oración completa, no una palabra suelta.',
          '<strong>Cambiar una cosa.</strong> El reto es agregar <code>\'morado\': \'purple\'</code> a los dos diccionarios. Al ejecutarlo, la última línea pasa a ser <code>Score: 4 of 5</code>, porque <code>len(colores)</code> ahora cuenta cinco colores.',
          '<strong>Llevarlo a su mundo.</strong> El niño arma su propio diccionario con animales, comidas peruanas o personajes de su juego favorito, y lo prueba con alguien de la familia.'
        ] },
        { kind: 'p', mt: true, html: 'Lo importante del ejemplo no es Python ni los colores. Es el hábito: pensar qué va a pasar antes de apretar ejecutar, mirar el resultado con atención y explicar con palabras propias por qué salió así. Es lo que enseñamos en cada clase, a cualquier edad, y es justo lo que una herramienta que da respuestas hechas no enseña.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios',
      h2: '¿A qué hora son las clases si vivimos en Perú?',
      lede: 'Usted decide el día y la hora de cada clase. Como los mentores viven en la India, esta tabla muestra cómo se lee una misma hora en los dos relojes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Conversión de hora de Perú a hora de la India (ejemplos, no un horario de clases)', head: ['Hora de Perú', 'Hora de la India', 'Día en la India'], rows: [
          ['8:00 a. m.', '6:30 p. m.', 'El mismo día'],
          ['10:00 a. m.', '8:30 p. m.', 'El mismo día'],
          ['12:00 m.', '10:30 p. m.', 'El mismo día'],
          ['3:00 p. m.', '1:30 a. m.', 'El día siguiente'],
          ['5:00 p. m.', '3:30 a. m.', 'El día siguiente'],
          ['7:00 p. m.', '5:30 a. m.', 'El día siguiente']
        ] },
        { kind: 'source', html: 'Perú usa UTC-5 todo el año, sin horario de verano desde 1994 (base de datos de husos horarios tzdata, zona America/Lima; hora oficial del INACAL, verificada el 8 de noviembre de 2026). La India usa UTC+5:30 todo el año. La India va siempre 10 horas y 30 minutos adelante; el Compendio Estadístico Perú 2026 del INEI lo resume así: las 12:00 m. de Lima son las 10:30 p. m. en Delhi.' },
        { kind: 'p', mt: true, html: 'Como ninguno de los dos países cambia la hora en el año, la diferencia no se mueve ni en enero ni en julio. Al reservar la clase gratis usted elige la hora en su propio reloj, la hora de Perú, y el mentor la ve en la suya. Muchas familias de colegios con turno tarde prefieren la mañana; las de turno mañana suelen elegir la tarde, después del almuerzo y las tareas.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si su hijo está avanzando?',
    lede: 'Usamos cinco etapas propias para ubicar a cada niño y contarle a la familia en qué punto está.',
    table: { caption: 'Cinco etapas de programación para niños (nuestras)', head: ['Etapa', 'Edad habitual', 'Su hijo puede'], rows: [
      ['1. Ordenar pasos', '6 a 7 años', 'poner en orden las instrucciones para que un personaje llegue a su meta'],
      ['2. Repetir y decidir', '7 a 9 años', 'usar bucles y condiciones en Scratch y decir en inglés qué hace cada bloque'],
      ['3. Escribir código', '9 a 10 años', 'escribir un programa corto en Python y predecir lo que va a imprimir'],
      ['4. Guardar datos', '10 a 11 años', 'usar listas y diccionarios, como en el juego de colores, y encontrar un error'],
      ['5. Crear algo propio', '11 a 12 años', 'planificar un juego, una web o un proyecto de IA y presentarlo en inglés']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'El salto que más cuesta es de la etapa 2 a la 3: pasar de arrastrar bloques a escribir. Es normal que tome algunas semanas y que el niño se frustre un poco al principio.',
      'Una buena señal no es que su hijo programe rápido, sino que pueda contarle lo que hizo. Si le explica su juego, aunque mezcle castellano e inglés, va por buen camino.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Antes de ejecutar su programa, piense qué va a pasar. Después compruébelo.',
      'Cuando algo falle, no borre todo: lea línea por línea y busque la que no hace lo que usted esperaba.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para niños de primaria',
    lede: 'Todos en vivo y en inglés, con el mismo mentor durante el curso, en clase grupal o individual.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 9 años', courses: [
        { code: 'PNI / INICIO / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para pequeños pensadores', blurb: 'Acertijos, patrones y orden lógico antes de programar, de 6 a 9 años.' },
        { code: 'PNI / INICIO / 02', slug: 'minecraft-coding-for-kids-course', title: 'Programación con Minecraft', blurb: 'Construir y automatizar dentro de un mundo que ya conocen, de 7 a 12 años.' },
        { code: 'PNI / INICIO / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Su primera aplicación para el celular, armada con bloques, de 8 a 12 años.' }
      ] },
      { num: 'II', h3: 'Juegos y web', sub: 'De 8 a 12 años', courses: [
        { code: 'PNI / JUEGOS / 01', slug: 'game-development-masterclass-for-kids', title: 'Creación de videojuegos', blurb: 'Scratch, Roblox y Minecraft en un solo recorrido, de 8 a 12 años.' },
        { code: 'PNI / JUEGOS / 02', slug: 'kids-ai-web-development-course', title: 'Páginas web para niños', blurb: 'HTML y CSS para publicar una web propia, de 9 a 12 años.' },
        { code: 'PNI / JUEGOS / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Código escrito con juegos y acertijos, de 9 a 12 años.' }
      ] },
      { num: 'III', h3: 'Inteligencia artificial con criterio', sub: 'De 8 a 12 años', courses: [
        { code: 'PNI / IA / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la IA', blurb: 'Cómo aprende una máquina y cuándo se equivoca, desde los 8 años.' },
        { code: 'PNI / IA / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding para niños', blurb: 'Crear juegos con ayuda de la IA, revisando cada paso, de 8 a 12 años.' },
        { code: 'PNI / IA / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Preparación para un hackatón', blurb: 'Doce semanas para idear y presentar un proyecto, de 8 a 12 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Por la mañana', l: 'Útil en vacaciones o para quien estudia en el turno tarde.' },
      { time: 'Por la tarde', l: 'Después del colegio, cuando su hijo ya almorzó y descansó.' },
      { time: 'A su medida', l: 'Clases individuales el día y a la hora que usted elija.' }
    ],
    cells: [
      { h3: 'Un mentor fijo', p: 'La misma persona todo el curso, que aprende cómo piensa su hijo.' },
      { h3: 'Inglés claro', p: 'Frases cortas, pantalla compartida y paciencia para repetir.' },
      { h3: 'Programa él mismo', p: 'El niño escribe y corrige su código; el mentor guía, no copia.' },
      { h3: 'Un proyecto por etapa', p: 'Cada tramo termina en algo que su hijo puede mostrar en casa.' },
      { h3: 'Informe a la familia', p: 'Una nota breve sobre lo practicado y el siguiente paso.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte niños de edad parecida, o su hijo solo con el mentor.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros estudiantes',
  projectsLede: 'Los niños que empiezan en primaria terminan creando aplicaciones de verdad. Abajo hay algunos proyectos de estudiantes mayores, y más en la página <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de Google de madres, padres y estudiantes, tal como las escribieron, en inglés.',

  fees: {
    h2: 'Precios para familias en Perú',
    lede: 'La mensualidad aparece aquí en dólares estadounidenses y se paga con tarjeta. Su banco hace la conversión a su moneda, así que el monto final en su estado de cuenta puede variar un poco según el tipo de cambio del día.',
    free: ['Una clase gratis con un mentor', 'Una evaluación breve del punto de partida', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte niños de edad parecida', 'El mismo mentor todo el curso', 'Dos clases en vivo por semana', 'Pago mensual, puede dejarlo cuando quiera'],
    one: ['Su hijo y un mentor, nadie más', 'El ritmo y los temas que él necesita', 'El día y la hora que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación para niños en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todas las clases son en vivo, en línea y solo en inglés, y para muchas familias esa es la ventaja: su hijo aprende programación y practica inglés en la misma hora. El mentor habla despacio, repite con otras palabras y se adapta al ritmo del niño. El EF EPI 2025 ubica el inglés de Lima en el nivel alto, y la expresión oral es la habilidad que más se beneficia de una clase hablada.' },
      { q: '¿Mi hijo necesita saber inglés para empezar?', a: 'No. Basta con que entienda saludos y palabras sencillas. Los niños de 6 a 8 años trabajan con bloques y dibujos, y el inglés entra poco a poco; los de 9 a 12 aprenden el vocabulario técnico mientras programan. Las primeras dos o tres semanas sirven para acostumbrarse al acento del mentor.' },
      { q: '¿A qué edad puede un niño empezar a programar?', a: 'Desde los 6 años, que es la edad normativa de 1° de primaria según el MINEDU. A esa edad se empieza con bloques y personajes; desde los 9 o 10 años la mayoría puede pasar a Python escrito.' },
      { q: '¿Qué aprende en programación un niño de 10 años?', a: 'A los 10 años, en 5° de primaria, un niño suele estar listo para Python: variables, condiciones con if y else, bucles y estructuras como listas y diccionarios. En nuestra clase de ejemplo arma un juego de colores en inglés que revisa respuestas y cuenta puntos.' },
      { q: '¿Se enseña programación en primaria en Perú?', a: 'No como curso propio. La tabla de horas de primaria del CNEB reparte 30 horas pedagógicas semanales entre Matemática, Comunicación, Inglés y otras áreas, sin un área de computación. La competencia digital del CNEB es transversal y algunos colegios usan sus horas de libre disponibilidad para talleres.' },
      { q: '¿Robótica o programación: qué le conviene más a un niño?', a: 'Para empezar, programación, porque es lo que hace funcionar a cualquier robot. El MINEDU dice en su documento de robótica educativa que la robótica "no es el objetivo, es el medio". Nosotros enseñamos programación y no usamos kits de robótica.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India va 10 horas y 30 minutos adelante de Perú todo el año; por ejemplo, las 10:00 a. m. en Perú son las 8:30 p. m. en la India.' },
      { q: '¿Qué necesita mi hijo en casa para las clases virtuales?', a: 'Una computadora o laptop con teclado, cámara y micrófono, audífonos y una conexión estable a internet. Con un celular no se puede programar con comodidad.' },
      { q: '¿En qué moneda se paga?', a: 'En dólares estadounidenses, con tarjeta. Su banco convierte el monto a su moneda. La primera clase es gratis y no pide tarjeta.' },
      { q: '¿Las clases tienen validez para el colegio?', a: 'No. No estamos vinculados al MINEDU ni a ningún colegio, y nuestras clases no otorgan notas ni reemplazan ningún curso escolar. Al terminar un curso su hijo recibe nuestro propio certificado de finalización de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras páginas útiles para familias con niños de primaria, la mayoría en inglés.',
    items: [
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Inteligencia artificial para niños de 6 a 12 años, explicada desde cero.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Diez proyectos de IA que los niños pueden hacer sin crear cuentas.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué herramientas de IA permite usar cada una según la edad del niño.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es por dentro una clase en vivo con nosotros.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos publicados por nuestros estudiantes.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo, de primaria a la universidad.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis para su hijo',
    lede: 'En la primera clase el mentor conversa con su hijo en inglés sencillo, le propone un pequeño reto en Scratch o en Python y observa cómo lo resuelve. Con eso le recomendamos el curso y el formato que le convienen, sin compromiso.',
    readFirst: 'Si quiere leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explica nuestras clases en vivo y <a class="ag-inline-link" href="/courses">All courses</a> reúne todos los programas (ambas páginas en inglés).',
    note: 'Las clases son en vivo y en línea con mentores en la India, solo en inglés. Para escribirnos, WhatsApp es lo más rápido; puede hacerlo en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Juegos en Roblox' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/ai-classes-for-kids', label: 'IA para niños' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas de IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Primero predecir, después ejecutar'
  },

  personalityCss: `
.ag-root.ag-pni .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-pni .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-pni .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pni .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pni .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Currículo Nacional de la Educación Básica (Tabla N.° 6, competency 28, horas pedagógicas of 45 minutes), Edades normativas (9 Feb 2022), Ley 28044, D.S. 011-2012-ED, press notes of 16 March 2026 and 14 October 2026, ENLA 2024 note, DITE robotics paper; INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; tzdata and INACAL for time. All read 8 November 2026. Example code and the starting-point table are our own.',
    localProject: 'A bilingual colour dictionary in Python for a 10-year-old in 5° de primaria: colores maps rojo to red and so on, respuestas holds a classmate\'s answers with the misspelling grin, and the loop prints correct or try again; run with python3 -I it prints Score: 3 of 4, and Score: 4 of 5 after adding morado and purple. Lesson family: a dictionary (key and value) used as a bilingual word list, checking answers with if and else.',
    requiredMentions: ['Score: 3 of 4', 'Score: 4 of 5', 'verde is green, not grin', 'Tabla N.° 6', 'el 68,2 % de los niños de 6 a 11 años usó internet', 'el 36,4 % de los hogares del país dispone de una computadora', 'la robótica en educación no es el objetivo, es el medio', 'unas 54 horas de inglés al año', 'Primero predecir, después ejecutar', 'Edad normativa al 31 de marzo'],
    sources: [
      { claim: 'Primaria weekly hours per area and grade (Tabla N.° 6), 45-minute teaching hours, competency 28 as a transversal competency.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative age per grade, measured at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Primaria lasts six years.', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Primaria from age 6 (Reglamento, Art. 61).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: '53,631 schools and 6,225,000 students at the 2026 opening.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: '2.7 million primaria students for the 2027 materials.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'ENLA 2024 census of 532,000 pupils in 4° de primaria.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'Robotics is the means, not the goal; LEGO WeDo kits to almost all public primaria schools in 2009 and 2010.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Internet use of children 6 to 11 (68.2%) and households with a computer (36.4%), II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, rank 52 of 123, Lima 555, reading 540, speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, and the page says so in the capsule and in an FAQ.',
      'Any MINEDU, UGEL or school endorsement, or an official certificate: none held; the page says we are not connected and give only our own certificate of completion.',
      'Robot kits or hardware: none; the page says we teach programming only.',
      'Using ENLA results to place or grade a child: refused; the mentor places each child in the free class.',
      'Dates from RM 501-2025-MINEDU printed only after checking the signed PDF page 7 (raw page 11) by eye: 36 teaching weeks, 16 March to 18 December 2026; image saved in src-pages.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

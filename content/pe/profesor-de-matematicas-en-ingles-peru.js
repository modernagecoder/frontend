// SHIP: market (es subject door) | un profesor de matemáticas que enseña en inglés: CNEB, notación y vocabulario | from an English word problem to an equation: phrase to symbol, the "less than" trap
'use strict';
// Profesor de matemáticas en inglés (ag- Spanish-language door, Peru cluster row PE111, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only (priceSubject 'maths'); no soles, no typed figure.
// Search (KEYWORDS.md section 3, English-medium in Spanish phrasing): "profesor de matematicas en ingles".
// Angle: a family or a learner in Peru who wants maths taught in English (bilingual, Cambridge or IB school; a move abroad;
// English practice). Spine: what such a teacher does; what Peruvian school maths covers (the four CNEB competencies and the
// weekly hours in primaria, JER and JEC secundaria); what really changes in English (number notation, false friends, the
// grammar of word problems); an original practice set; where to start by grade; IB and bilingual context; Peru to India clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/profesor-de-matematicas-en-ingles-peru/,
// all fetched 2026-11-08, quotes grepped in the raw text):
//  CNEB (minedu.gob.pe/curriculo, cneb.txt): "Competencia 23: Resuelve problemas de cantidad."; competency 24 "Consiste en que
//    el estudiante logre caracterizar equivalencias y generalizar regularidades"; competency 25 "Consiste en que el estudiante
//    analice datos sobre un tema de interés"; competency 26 "Consiste en que el estudiante se oriente y describa la posición y el
//    movimiento de objetos"; competency 23 "discernir si la solución buscada requiere darse como una estimación o cálculo
//    exacto"; Tabla N.° 6 "Matemática 5 5 4 4 4 4 ... Inglés 2 2 3 3 3 3"; Tabla N.° 8 (JER) "Matemática 4 4 4 4 4 ...
//    Inglés 3 3 3 3 3 ... Total de horas 35 35 35 35 35"; Tabla N.° 9 (JEC) "Matemática 6 6 6 6 6 ... Inglés 5 5 5 5 5 ...
//    Total de horas 45 45 45 45 45"; "horas pedagógicas (45 minutos)"; on English: "la implementación de esta área será
//    progresiva dependiendo de la contratación de estos docentes".
//  MINEDU, Edades normativas PDF: "Se considera la edad normativa al 31 de marzo de cada año."; ages 6 to 16 by grade.
//  MINEDU press note 16 March 2026 (n-inicio2026.txt): "53 631 colegios de Educación Básica Regular ... 6 225 000 estudiantes"
//    (MINEDU writes thousands with a space).
//  INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el 64,5% de los hogares del país contaba con servicio de
//    Internet" (INEI writes decimals with a comma).
//  MINEDU press note 17 April 2026 (n-coar-ib-1100.txt): "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el
//    Diploma del Bachillerato Internacional. De este total, los estudiantes de los COAR representan el 47 % del total nacional".
//  EF EPI 2025 Peru page (ef_peru.txt): Peru 519, rank 52 of 123, Lima 555 (high band from 550), speaking 480, reading 540.
//  Time: tzdata Zone America/Lima -5:00 (no DST since 1994), Asia/Kolkata 5:30; INACAL feed read as UTC-5 on 2026-11-08.
// Our own calculations (python3 -I, check.py in the scratch folder): 4 x 45 = 180 min (3.0 h); 5 x 45 = 225 min (3.75 h);
//    6 x 45 = 270 min (4.5 h); over 36 teaching weeks (RM 501-2025-MINEDU): 4 h a week = 108.0 h a year, 6 h = 162.0 h.
// Our own practice set (answers checked with python3 -I, exact output): P1 9 20 / P2 400 340 / P3 20 11 / P4 20 10 40 /
//    P5 9 13 44 117 / P6 24 12 3 9 / P7 [-12, 11] / P8 1.
// Lesson family: from an English word problem to an equation: each phrase becomes a symbol, and "less than" reverses the order.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Profesor de matemáticas en inglés' },
  slug: 'profesor-de-matematicas-en-ingles-peru',
  code: 'pmi',
  accent: '#04585C',
  accentRationale: 'Profesor de matemáticas en inglés: a deep blackboard teal #04585C, the green-blue of a classroom pizarra, kept apart from the leafy green of the primaria coding door; 6.67:1 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Profesor de matemáticas en inglés',
  title: 'Profesor de matemáticas en inglés en Perú, en vivo y online',
  description: 'Profesor de matemáticas en inglés para estudiantes en Perú, de primaria a la universidad: clases en vivo y en línea, grupales o individuales, a cualquier hora.',
  ogDescription: 'Matemáticas en inglés desde Perú: qué enseña el colegio según el CNEB, qué cambia al pasar al inglés y una práctica de problemas escritos en inglés, hecha por nosotros.',
  twitterDescription: 'Un profesor de matemáticas que enseña en inglés, en vivo y en línea, para estudiantes en Perú de cualquier grado y a cualquier hora.',
  pageName: 'Profesor de matemáticas en inglés en Perú',
  webPageDescription: 'Guía para familias y estudiantes en Perú que buscan un profesor de matemáticas en inglés: las cuatro competencias de Matemática del CNEB y sus horas semanales, lo que cambia al estudiar matemáticas en inglés (notación de números, palabras engañosas y problemas escritos), una práctica original de problemas resueltos y la conversión de la hora de Perú a la de la India.',
  courseDescription: 'Clases de matemáticas en vivo y en línea, dictadas solo en inglés, para estudiantes en Perú desde 1° de primaria hasta la universidad y para personas adultas: aritmética, álgebra, geometría, estadística y programas internacionales, en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Profesor de matemáticas en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#quien', label: 'Para quién' },
    { href: '#cneb', label: 'El colegio' },
    { href: '#notacion', label: 'Notación' },
    { href: '#problemas', label: 'Problemas' },
    { href: '#horario', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Matemáticas en inglés &middot; Todas las edades',
  h1: 'Profesor de matemáticas en inglés, en vivo desde Perú',
  lede: 'Esta página es para quien en Perú busca un profesor de matemáticas que enseñe en inglés: madres y padres de colegios bilingües, estudiantes del Bachillerato Internacional o de programas Cambridge, jóvenes que piensan estudiar fuera y personas adultas que quieren retomar la matemática en otro idioma. Explicamos qué cubre la matemática escolar peruana, qué cambia de verdad al pasar al inglés y cómo trabajamos un problema escrito.',
  secondaryCta: { href: '#problemas', label: 'Ver la práctica de problemas' },
  wa: 'Hola Modern Age Coders, buscamos un profesor de matemáticas que enseñe en inglés, desde Perú. ¿Podemos agendar una clase gratis?',
  heroNote: 'Profesores en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; matemáticas explicadas en inglés claro',
  spec: [
    ['Niveles', 'Primaria, secundaria, IB, Cambridge, universidad y adultos'],
    ['Temas', 'Aritmética, álgebra, geometría, estadística y cálculo'],
    ['Idioma', 'Solo inglés, con vocabulario explicado paso a paso'],
    ['Formato', 'Clase grupal de quince a veinte, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Sí: en Modern Age Coders un profesor de matemáticas enseña en vivo y en inglés a escolares, universitarios y personas adultas que viven en Perú, siempre por videollamada, desde 1° de primaria hasta los cursos de la universidad. Cada estudiante trabaja con un mismo profesor, que vive en la India, explica sin apuro, escribe cada paso en una pizarra compartida y ajusta la velocidad y la pronunciación a quien tiene delante. Las clases pueden ser grupales o individuales, en el día y la hora que la familia decida, y la primera no se paga.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos de matemáticas, uno por etapa escolar',
    lede: 'Elegimos uno para primaria, uno para los primeros años de secundaria y uno para los últimos, porque es ahí donde las familias suelen pedir un profesor que enseñe en inglés.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'PMI / 01', title: 'Matemática de primaria en inglés', alt: 'Imagen del curso de matemática para primaria', note: 'De 1° a 5° grado. Números, operaciones, fracciones, medidas y problemas cortos, con las palabras en inglés que su hijo verá en un colegio bilingüe.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'PMI / 02', title: 'Preálgebra y geometría', alt: 'Imagen del curso de matemática para los primeros años de secundaria', note: 'Para 1° y 2° de secundaria. Razones, porcentajes, ecuaciones de primer grado, ángulos y áreas, explicados en inglés con ejemplos dibujados.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'PMI / 03', title: 'Matemática de secundaria, del álgebra al cálculo', alt: 'Imagen del curso de matemática para secundaria superior', note: 'Para 3° a 5° de secundaria. Funciones, trigonometría, estadística y una introducción al cálculo, el camino hacia el IB o una universidad en inglés.' }
    ]
  },

  sections: [
    {
      id: 'quien',
      eyebrow: 'Para quién es',
      h2: '¿Quién busca un profesor de matemáticas en inglés en Perú?',
      lede: 'Casi siempre, alguien que ya estudia o va a estudiar matemáticas en inglés en otro lugar y necesita que las clases particulares hablen el mismo idioma que el colegio, el examen o la universidad.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Colegios bilingües y Cambridge', p: 'Si en el colegio la matemática se dicta en inglés, el reforzamiento en castellano obliga a su hijo a traducir dos veces: lo que oye en casa y lo que lee en el examen. Un profesor que explica en inglés usa las mismas palabras que encontrará el lunes en la clase.' },
          { h3: 'Bachillerato Internacional', p: 'En el Programa del Diploma la matemática pide redactar razonamientos, no solo resultados. Practicar con alguien que corrige la explicación en inglés, frase por frase, prepara para eso más que una lista de fórmulas.' },
          { h3: 'Universidad y vida adulta', p: 'Quien piensa estudiar fuera, trabaja con datos o lee artículos técnicos encuentra la estadística y el álgebra escritas en inglés. Retomarlas en ese idioma ahorra la traducción mental que tanto cansa al principio.' }
        ] },
        { kind: 'p', mt: true, html: 'También vienen familias que no estudian en inglés, pero quieren que la hora de matemáticas sea además una hora de idioma. Para ellas la clase funciona como una práctica oral con propósito: el estudiante debe contar, con su propia voz, qué dato usa, por qué despeja así la ecuación y cómo sabe que el resultado tiene sentido. No existe una versión en castellano: cada clase ocurre en vivo, por internet, y se habla únicamente inglés.' },
        { kind: 'p', html: 'Si su hijo es menor de 12 años y lo que busca es sobre todo una base sólida en primaria, la página <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explica cómo trabajamos con los más pequeños en este mismo formato, y la guía de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">clases en inglés para familias de Lima</a> (en inglés) habla de los colegios bilingües y del IB con más detalle.' }
      ]
    },
    {
      id: 'cneb',
      eyebrow: 'Lo que pide el colegio',
      h2: '¿Qué matemática se enseña en los colegios del Perú?',
      lede: 'El Currículo Nacional de la Educación Básica (CNEB) organiza el área de Matemática en cuatro competencias, de 1° de primaria a 5° de secundaria. Un profesor que enseña en inglés trabaja con esas mismas cuatro, solo que con otro vocabulario.',
      body: [
        { kind: 'table', numCols: [0], caption: 'Las cuatro competencias de Matemática del CNEB y cómo se llaman los temas en inglés', head: ['N.°', 'Competencia (CNEB)', 'Qué pide, en palabras del CNEB', 'Cómo se dice en clase, en inglés'], rows: [
          ['23', 'Resuelve problemas de cantidad', '"discernir si la solución buscada requiere darse como una estimación o cálculo exacto"', 'number, operations, fractions, ratio, estimation'],
          ['24', 'Resuelve problemas de regularidad, equivalencia y cambio', '"caracterizar equivalencias y generalizar regularidades"', 'patterns, equations, inequalities, functions'],
          ['25', 'Resuelve problemas de gestión de datos e incertidumbre', '"analice datos sobre un tema de interés"', 'statistics, graphs, probability'],
          ['26', 'Resuelve problemas de forma, movimiento y localización', '"se oriente y describa la posición y el movimiento de objetos"', 'geometry, measurement, transformations']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, CNEB, área de Matemática, competencias 23, 24, 25 y 26 (PDF publicado en minedu.gob.pe/curriculo; consultado por nosotros el 8 de noviembre de 2026). La columna final la escribimos nosotros con los nombres que traen los textos y exámenes en inglés.' },
        { kind: 'p', mt: true, html: 'Lo interesante de la tabla es lo que no cambia. Un estudiante de 3° de secundaria en Arequipa y uno de Year 9 en un colegio británico trabajan, en el fondo, las mismas ideas: ecuaciones, funciones, datos y figuras. Lo que cambia es la forma de escribirlas y de leerlas, y de eso trata el resto de esta página.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Horas pedagógicas semanales de Matemática e Inglés según el plan de estudios del CNEB', head: ['Nivel y jornada', 'Matemática', 'Inglés', 'Total semanal'], rows: [
          ['Primaria, 1° y 2°', '5', '2', '30'],
          ['Primaria, 3° a 6°', '4', '3', '30'],
          ['Secundaria, Jornada Escolar Regular', '4', '3', '35'],
          ['Secundaria, Jornada Escolar Completa', '6', '5', '45']
        ] },
        { kind: 'source', html: 'Fuente: CNEB, Tabla N.° 6 para primaria, Tabla N.° 8 para secundaria con Jornada Escolar Regular y Tabla N.° 9 para la Jornada Escolar Completa. Cada hora pedagógica dura 45 minutos según el mismo documento.' },
        { kind: 'two', mt: true,
          leftH3: 'Cuánto tiempo es, en minutos',
          left: [
            'Con horas de 45 minutos, cuatro horas pedagógicas de Matemática son 180 minutos a la semana, o 3 horas de reloj; seis horas pedagógicas, en un colegio de Jornada Escolar Completa, son 270 minutos, o 4.5 horas de reloj (cálculo nuestro).',
            'A lo largo de las 36 semanas lectivas que fijó la RM 501-2025-MINEDU para el año escolar 2026, eso da unas 108 horas de reloj de Matemática al año con cuatro horas pedagógicas semanales y unas 162 con seis (cálculo nuestro, sin descontar feriados ni actividades).'
          ],
          rightH3: 'Y el inglés',
          right: [
            'El mismo CNEB reconoce que el área de Inglés necesita un docente especializado y que "la implementación de esta área será progresiva dependiendo de la contratación de estos docentes". Si no hay docente, esas horas pasan a ser de libre disponibilidad.',
            'Por eso dos estudiantes del mismo grado pueden llegar con niveles de inglés muy distintos. En la clase gratis el profesor escucha cómo lee su hijo un enunciado en inglés y decide desde ahí cuánta ayuda de vocabulario necesita.'
          ] },
        { kind: 'p', mt: true, html: 'Nada de esto reemplaza al colegio. Trabajamos a la par de lo que su hijo ve allí, fuera del horario escolar, sin poner notas ni emitir constancias del sistema educativo peruano. Quien completa un curso recibe un certificado de finalización emitido por Modern Age Coders, que no tiene valor oficial.' }
      ]
    },
    {
      id: 'notacion',
      eyebrow: 'Lo que cambia',
      h2: '¿Qué cambia al estudiar matemáticas en inglés?',
      lede: 'Menos de lo que se teme y más de lo que se cree. Las ideas son las mismas, pero la notación de los números, algunas palabras que se parecen y la gramática de los problemas escritos sí cambian, y ahí se pierden puntos.',
      body: [
        { kind: 'p', html: 'Un ejemplo sencillo, sacado de dos fuentes oficiales peruanas. El MINEDU escribió que el año escolar 2026 empezó con "6 225 000 estudiantes", separando los miles con un espacio. El INEI escribió que "el 64,5% de los hogares del país contaba con servicio de Internet", con coma decimal. En un examen en inglés esos mismos números se escriben 6,225,000 y 64.5%: la coma pasa a separar miles y el punto pasa a ser decimal. Un estudiante que no lo tiene claro puede leer 6,225 como seis enteros y algo, o escribir 3,5 y que el corrector lo lea como treinta y cinco.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Palabras y signos que confunden al pasar del castellano al inglés (nuestra lista)', head: ['En castellano', 'En inglés', 'Por qué confunde'], rows: [
          ['un billón (un millón de millones)', 'a trillion', 'En inglés, a billion es mil millones; un billón peruano es mil veces más'],
          ['mil millones', 'a billion', 'Se dice con una sola palabra en inglés'],
          ['3,5 (coma decimal)', '3.5 (decimal point)', 'La coma en inglés separa miles: 3,500 es tres mil quinientos'],
          ['MCM (mínimo común múltiplo)', 'LCM (lowest common multiple)', 'Mismo concepto, siglas en otro orden'],
          ['MCD (máximo común divisor)', 'HCF o GCD', 'Los libros británicos dicen HCF; los estadounidenses, GCD'],
          ['quebrado, fracción', 'fraction', 'Numerator y denominator suenan parecido, pero el orden de lectura cambia: three quarters es 3/4'],
          ['por ciento, tanto por ciento', 'percent, percentage', 'Percentage point no es lo mismo que percent'],
          ['raíz cuadrada', 'square root', 'Square también significa "al cuadrado": x squared es x²'],
          ['el doble de', 'twice', 'No lleva "of": twice a number es 2n'],
          ['decimal periódico', 'recurring decimal', 'Se escribe con un punto o una raya sobre la cifra que se repite']
        ] },
        { kind: 'source', html: 'Lista nuestra, armada con los errores que más vemos en estudiantes de habla castellana. Las cifras del primer párrafo son del MINEDU (nota de prensa del 16 de marzo de 2026) y del INEI (Boletín de Tecnologías de la Información, II trimestre 2026).' },
        { kind: 'two', mt: true,
          leftH3: 'La gramática de los problemas',
          left: [
            'En castellano se dice "siete menos que el triple de un número" y la mayoría lo escribe bien. En inglés, "seven less than three times a number" se escribe 3n − 7, en el orden inverso a como se lee. Es el error más común en estudiantes que recién pasan al inglés, y por eso abre la práctica de abajo.',
            'Otras frases que cambian el orden o el signo: <em>subtracted from</em>, <em>exceeds by</em>, <em>is decreased by</em>, <em>the quotient of</em>. El profesor las marca en el enunciado con colores antes de escribir una sola ecuación.'
          ],
          rightH3: 'Leer en voz alta',
          right: [
            'Pedimos que el estudiante lea la expresión en voz alta: "x squared minus four x plus three equals zero". Parece un detalle, pero obliga a reconocer cada símbolo y a saber cómo suena, que es lo que necesitará cuando tenga que explicar su respuesta.',
            'Las personas adultas que retoman la matemática suelen agradecer esta parte: muchas leían bien los libros en inglés, pero nunca habían tenido que decir una fórmula en voz alta frente a otra persona.'
          ] }
      ]
    },
    {
      id: 'problemas',
      tint: 'tint',
      eyebrow: 'Una práctica de ejemplo',
      h2: '¿Cómo se resuelve un problema de matemáticas escrito en inglés?',
      lede: 'Leyendo frase por frase y convirtiendo cada una en un símbolo antes de calcular. Esta práctica de ocho problemas es nuestra, escrita para esta página; las respuestas las comprobamos con Python.',
      body: [
        { kind: 'ol', items: [
          '<strong>Seven less than three times a number is 20.</strong> "Three times a number" es 3n; "seven less than" eso es 3n − 7, no 7 − 3n. La ecuación es 3n − 7 = 20, así que 3n = 27 y <strong>n = 9</strong>.',
          '<strong>A price is decreased by 15% and the result is 340. What was the original price?</strong> Bajar 15% es quedarse con el 85%: 0.85x = 340, con punto decimal. Entonces <strong>x = 400</strong>. El error típico es sumar 15% a 340, que da otro número.',
          '<strong>The quotient of a number and 4, increased by 6, equals 11.</strong> "The quotient of a number and 4" es n ÷ 4; luego se suma 6: n/4 + 6 = 11, n/4 = 5, <strong>n = 20</strong>.',
          '<strong>Ana is twice as old as Luis. In 5 years the sum of their ages will be 40.</strong> Si Luis tiene l años, Ana tiene 2l. En cinco años: (2l + 5) + (l + 5) = 40, o sea 3l = 30. <strong>Luis tiene 10 y Ana 20</strong>.',
          '<strong>The length of a rectangle exceeds its width by 4 cm, and its perimeter is 44 cm. Find its area.</strong> Largo w + 4; perímetro 2w + 2(w + 4) = 44, 4w = 36, w = 9, largo 13. <strong>Área: 117 cm²</strong>.',
          '<strong>Two-thirds of a class of 36 take the bus, and a quarter of the rest walk. How many do neither?</strong> Dos tercios de 36 son 24; quedan 12; un cuarto de 12 son 3 que caminan. <strong>Quedan 9</strong>. "The rest" se refiere a los 12, no a los 36.',
          '<strong>The product of two consecutive integers is 132.</strong> n(n + 1) = 132. Probando cerca de la raíz de 132, <strong>n = 11</strong>, y la pareja es 11 y 12. También funciona n = −12, con la pareja −12 y −11: "integers" incluye negativos.',
          '<strong>What is 0.4 of 2.5?</strong> "Of" significa multiplicar: 0.4 × 2.5 = <strong>1</strong>. Escrito con comas, 0,4 × 2,5, un corrector en inglés podría leer otra cosa.'
        ] },
        { kind: 'code', label: 'Lo que imprimió nuestra comprobación', lang: 'Salida', code: ['P1 9 20', 'P2 400 340', 'P3 20 11', 'P4 20 10 40', 'P5 9 13 44 117', 'P6 24 12 3 9', 'P7 [-12, 11]', 'P8 1'].join('\n'), note: 'Salida exacta de un programa nuestro en Python 3 con fracciones exactas: para cada problema imprime la respuesta y, al lado, el valor que debe recuperar la ecuación original (20, 340, 11, 40, 44). P7 lista las dos soluciones enteras.' },
        { kind: 'p', mt: true, html: 'En clase el orden es siempre el mismo. Primero el estudiante subraya las frases que llevan números; después escribe, debajo de cada una, el símbolo que le corresponde; recién entonces arma la ecuación y la resuelve. Al final reemplaza su respuesta en el enunciado original, en inglés, y comprueba que la frase sea verdad: "three times nine is twenty-seven, seven less is twenty". Ese último paso es el que más errores atrapa.' },
        { kind: 'p', html: 'No damos la respuesta antes de que el estudiante la intente, ni dejamos que la copie de una aplicación. El objetivo es que pueda leer el próximo problema solo, y eso se aprende equivocándose con alguien al lado que pregunta "why did you write seven minus three n?" hasta que la razón quede clara.' }
      ]
    },
    {
      id: 'grado',
      eyebrow: 'Por dónde empezar',
      h2: '¿Desde qué grado conviene estudiar matemáticas en inglés?',
      lede: 'Desde el grado en que el estudiante ya lee con soltura en castellano, porque leer un problema en inglés exige primero entender cómo funciona un problema. En la práctica, eso suele ser desde 3° de primaria.',
      body: [
        { kind: 'table', numCols: [], caption: 'Grado, edad normativa y qué trabajamos en inglés (recomendación nuestra)', head: ['Grado', 'Edad de referencia (MINEDU)', 'Qué trabajamos en inglés'], rows: [
          ['1° y 2° de primaria', '6 y 7 años', 'Contar, sumar y restar en voz alta; números hasta cien; formas'],
          ['3° y 4° de primaria', '8 y 9 años', 'Tablas de multiplicar, problemas de una línea, medidas'],
          ['5° y 6° de primaria', '10 y 11 años', 'Fracciones, decimales con punto, porcentajes sencillos'],
          ['1° y 2° de secundaria', '12 y 13 años', 'Ecuaciones, razones, ángulos, problemas de varias frases'],
          ['3° y 4° de secundaria', '14 y 15 años', 'Funciones, sistemas de ecuaciones, trigonometría, datos'],
          ['5° de secundaria', '16 años', 'Repaso para el IB, Cambridge o la universidad; introducción al cálculo']
        ] },
        { kind: 'source', html: 'Segunda columna: tabla de edades normativas del MINEDU (guía publicada en 2022, consultada el 8 de noviembre de 2026), que toma como referencia la edad cumplida al 31 de marzo. La tercera columna es una propuesta nuestra y cambia según lo que veamos en la clase gratis.' },
        { kind: 'two', mt: true,
          leftH3: 'Si empieza en primaria',
          left: [
            'Con los pequeños la clase usa pocas palabras y muchos objetos en pantalla: bloques, rectas numéricas, dibujos. El inglés entra por el oído, con frases cortas que el profesor repite: <em>how many</em>, <em>add</em>, <em>take away</em>, <em>equals</em>.',
            'Con menores de 12 años sugerimos que alguien de la familia ande cerca durante las primeras sesiones: no para dictar respuestas, solo para dar tranquilidad mientras el oído del niño se hace al acento del profesor.'
          ],
          rightH3: 'Si empieza en secundaria o de adulto',
          right: [
            'Aquí el reto no es la matemática, sino leer con precisión. El profesor dedica las primeras semanas a la lista de palabras engañosas y a problemas como los de arriba, y luego sigue el temario del colegio, del programa internacional o del objetivo de la persona adulta.',
            'Muchos adultos llegan por la estadística: la necesitan en el trabajo y los materiales están en inglés. Para ellos empezamos por los gráficos y las medidas de resumen, y dejamos la teoría para cuando hace falta.'
          ] }
      ]
    },
    {
      id: 'internacional',
      eyebrow: 'IB y colegios bilingües',
      h2: '¿Sirve un profesor en inglés si mi hijo está en el Bachillerato Internacional?',
      lede: 'Sí, y es el caso más claro. En el Bachillerato Internacional, si el colegio lo dicta en inglés, la matemática se estudia, se escribe y se evalúa en ese idioma, y la preparación rinde más cuando habla el mismo lenguaje.',
      body: [
        { kind: 'p', html: 'El Bachillerato Internacional ya no es un programa raro en Perú. Según el Ministerio de Educación, en una nota del 17 de abril de 2026, "en el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del Bachillerato Internacional", y los estudiantes de los Colegios de Alto Rendimiento (COAR) fueron el 47 % de ese total. El resto corresponde a los demás colegios del país que ofrecen el programa.' },
        { kind: 'p', html: 'Para la matemática del Diploma tenemos un curso propio de IB Maths, con sus dos rutas (Analysis and Approaches, y Applications and Interpretation) en nivel medio y superior. Lo explicamos con detalle, junto con las rutas de admisión de algunas universidades peruanas para quienes tienen el Diploma, en nuestras páginas sobre el IB. No estamos vinculados al IB, a ningún COAR ni a ningún colegio: el colegio y el IB fijan y califican los trabajos, y nosotros ayudamos a entenderlos y a practicar.' },
        { kind: 'two', mt: true,
          leftH3: 'Colegios bilingües y Cambridge',
          left: [
            'En muchos colegios bilingües de Lima la matemática de secundaria se dicta en inglés con textos británicos o estadounidenses. Si su hijo sigue un programa Cambridge, nuestro curso de IGCSE Maths trabaja ese temario completo.',
            'No necesitamos que nos diga el nombre del colegio. Basta con que el estudiante traiga a la clase gratis un tema que le cueste y su cuaderno, para ver cómo se lo enseñan allí.'
          ],
          rightH3: 'Lo que dice el EF EPI',
          right: [
            'El EF English Proficiency Index 2025 coloca a Perú en el puesto 52 de 123 países, con 519 puntos, nivel moderado; Lima obtiene 555, en el nivel alto, que EF fija desde 550.',
            'Por habilidades, Perú saca 540 en lectura y apenas 480 al hablar. Una clase de matemáticas donde hay que explicar cada paso en voz alta trabaja justo esa parte.'
          ] }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puede ser la clase si vivimos en Perú?',
      lede: 'A la hora que usted elija. Los profesores viven en la India, cuyo reloj marca diez horas y media más que el de Perú en cualquier fecha del año, así que conviene ver una misma hora en los dos relojes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cinco horas peruanas convertidas a la India (solo ejemplos de conversión: usted fija la hora)', head: ['En Perú', 'En la India', 'Para quién suele servir'], rows: [
          ['6:00 a. m.', '4:30 p. m. (misma fecha)', 'Personas adultas antes del trabajo'],
          ['7:30 a. m.', '6:00 p. m. (misma fecha)', 'Escolares del turno tarde'],
          ['11:00 a. m.', '9:30 p. m. (misma fecha)', 'Vacaciones de verano'],
          ['4:00 p. m.', '2:30 a. m. (fecha siguiente)', 'Escolares del turno mañana'],
          ['8:00 p. m.', '6:30 a. m. (fecha siguiente)', 'Universitarios y adultos por la noche']
        ] },
        { kind: 'source', html: 'Base: la zona America/Lima de la base tzdata (UTC-5, sin cambio de hora desde 1994) y el reloj oficial del INACAL, que comprobamos el 8 de noviembre de 2026; la zona Asia/Kolkata de la India está fija en UTC+5:30. La tercera columna es nuestra.' },
        { kind: 'p', mt: true, html: 'La diferencia no se mueve en ningún mes, porque ninguno de los dos países tiene horario de verano. Al reservar la clase gratis usted ve las opciones en hora peruana, y el sistema se las muestra al profesor convertidas a su reloj.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se nota que su hijo avanza en matemáticas en inglés?',
    lede: 'Cinco etapas que definimos nosotros sirven para ubicar a cada estudiante y explicárselo a la familia, sin importar el grado.',
    table: { caption: 'Cinco etapas de matemáticas en inglés (nuestras)', head: ['Etapa', 'Señal', 'El estudiante puede'], rows: [
      ['1. Escuchar', 'Sigue la clase', 'entender las instrucciones del profesor y responder con números y palabras sueltas'],
      ['2. Nombrar', 'Usa el vocabulario', 'decir en inglés el nombre de cada operación, figura o gráfico que usa'],
      ['3. Traducir', 'Arma ecuaciones', 'convertir un problema de una o dos frases en una ecuación correcta'],
      ['4. Explicar', 'Justifica los pasos', 'contar en voz alta por qué hizo cada paso y comprobar su resultado'],
      ['5. Redactar', 'Escribe soluciones', 'presentar una solución completa por escrito, como la piden el IB o Cambridge']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Entre la etapa 3 y la 4 hay un salto grande, porque resolver bien no es lo mismo que explicar bien. Suele tomar un par de meses.',
      'Una prueba casera: que su hijo le explique un ejercicio en inglés, aunque usted no lo hable. Si lo cuenta sin mirar el cuaderno, lo entendió.'
    ] },
    right: { h3: 'Para estudiantes', ps: [
      'Antes de calcular, escriba qué representa cada letra. Una línea como "n = the number" evita la mitad de los errores.',
      'Cuando termine, ponga su respuesta en la frase original y léala en voz alta. Si la frase no es verdad, revise la ecuación.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más de matemáticas en inglés',
    lede: 'Cada uno se dicta en vivo y en inglés, con un profesor que no cambia de una semana a otra, en grupo o uno a uno.',
    bands: [
      { num: 'I', h3: 'Base y razonamiento', sub: 'De 6 a 12 años', courses: [
        { code: 'PMI / BASE / 01', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido numérico sin trucos: estimar, descomponer y comprobar, de 5 a 10 años.' },
        { code: 'PMI / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para los más pequeños', blurb: 'Patrones, orden y lógica antes de los algoritmos escritos, para los primeros grados.' },
        { code: 'PMI / BASE / 03', slug: 'maths-through-coding', title: 'Matemática con Python', blurb: 'Fracciones, patrones y gráficos explorados con código, de 10 a 15 años.' }
      ] },
      { num: 'II', h3: 'Secundaria y programas internacionales', sub: 'De 12 a 18 años', courses: [
        { code: 'PMI / SEC / 01', slug: 'algebra-foundations-masterclass', title: 'Fundamentos de álgebra', blurb: 'Del preálgebra a las ecuaciones y funciones lineales, paso a paso.' },
        { code: 'PMI / SEC / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE Maths', blurb: 'El temario Cambridge, en sus niveles Core y Extended.' },
        { code: 'PMI / SEC / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA y AI', blurb: 'Nivel medio y superior, con práctica de exploración matemática.' }
      ] },
      { num: 'III', h3: 'Universidad y vida adulta', sub: 'Desde 17 años', courses: [
        { code: 'PMI / UNI / 01', slug: 'college-mathematics-complete-masterclass', title: 'Matemática universitaria', blurb: 'Cálculo, álgebra lineal y análisis para los primeros ciclos.' },
        { code: 'PMI / UNI / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'De los datos a la prueba de hipótesis, con ejemplos reales.' },
        { code: 'PMI / UNI / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Matemática para ciencia de datos', blurb: 'Estadística, álgebra lineal y la base de los modelos de aprendizaje automático.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases de matemáticas en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del colegio o del trabajo', l: 'Temprano en Perú, por la tarde en la India.' },
      { time: 'Después del almuerzo', l: 'Para escolares del turno mañana, con la tarea al lado.' },
      { time: 'La hora que usted fije', l: 'Clases individuales en el día y la hora que le acomoden.' }
    ],
    cells: [
      { h3: 'Pizarra compartida', p: 'Cada paso se escribe a la vista, en símbolos y en palabras.' },
      { h3: 'Vocabulario anotado', p: 'Las palabras nuevas en inglés quedan en una lista que el estudiante conserva.' },
      { h3: 'Resuelve el estudiante', p: 'El profesor pregunta y guía; la mano que escribe es la del estudiante.' },
      { h3: 'Temario del colegio', p: 'Si trae su cuaderno, la clase sigue el tema que están viendo allí.' },
      { h3: 'Nota para la familia', p: 'Un resumen corto de lo trabajado y lo que conviene practicar.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte estudiantes de nivel parecido, o uno a uno con el profesor.' }
    ]
  },

  projectsH2: 'Lo que hacen nuestros estudiantes',
  projectsLede: 'Bastantes estudiantes de matemáticas también programan con nosotros; estos son algunos de sus trabajos, y la galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>, escrita en inglés.',
  reviewsLede: 'Reseñas de Google escritas por familias y estudiantes, copiadas tal cual, en inglés.',

  fees: {
    h2: 'Precios de las clases de matemáticas para Perú',
    lede: 'Publicamos la mensualidad en dólares de Estados Unidos, y el cobro se hace a una tarjeta de crédito o débito. La conversión a soles la hace su banco con el tipo de cambio que aplique ese día, así que el cargo final cambia unos céntimos de un mes a otro.',
    free: ['Una clase gratis de matemáticas', 'Diagnóstico del nivel y del inglés', 'Sin tarjeta ni compromiso'],
    group: ['De quince a veinte estudiantes de nivel parecido', 'El mismo profesor todo el curso', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Solo el estudiante y su profesor', 'El temario del colegio o del examen que prepara', 'El día y la hora que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Profesor de matemáticas en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan únicamente en inglés, en vivo y por internet, y justamente por eso muchas familias nos eligen: una sola hora sirve para avanzar en matemáticas y para soltarse en el idioma. El profesor va despacio, deja cada paso por escrito y sigue el ritmo del estudiante. Según el EF EPI 2025, Lima ya tiene un nivel alto de inglés, y explicar un problema en voz alta es una práctica oral muy completa.' },
      { q: '¿Mi hijo necesita hablar inglés para empezar?', a: 'No hace falta que lo hable con soltura. Basta con que entienda frases sencillas; el vocabulario de matemáticas lo aprende en clase, con una lista que va creciendo. Hacia la tercera semana casi todos ya siguen sin esfuerzo el acento del profesor.' },
      { q: '¿Qué temas de matemáticas enseñan?', a: 'Los de las cuatro competencias de Matemática del CNEB (cantidad; regularidad, equivalencia y cambio; datos e incertidumbre; forma, movimiento y localización) y los temarios de IGCSE, IB y la matemática universitaria, siempre en inglés.' },
      { q: '¿Siguen el temario del colegio de mi hijo?', a: 'Sí, si usted lo prefiere. El estudiante trae a la clase el tema que ve en el colegio y el profesor lo trabaja en inglés. No tenemos relación con ningún colegio y lo que hacemos no cuenta como nota escolar.' },
      { q: '¿Por qué los números se escriben distinto en inglés?', a: 'Porque en inglés la coma separa miles y el punto separa decimales: 6,225,000 y 64.5%. En Perú el MINEDU separa miles con espacio y el INEI usa coma decimal. Además, a billion en inglés es mil millones, no un billón.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Para hacerse una idea: cuando en Lima son las 7:30 de la mañana, en la India ya son las 6:00 de la tarde, y esa distancia de diez horas y media no cambia en ningún mes.' },
      { q: '¿Ayudan con el Bachillerato Internacional?', a: 'Sí, a la par del colegio, con nuestro curso de IB Maths en sus rutas AA y AI. El colegio y el IB fijan y califican los trabajos; nosotros explicamos y practicamos. No estamos vinculados al IB ni a ningún COAR.' },
      { q: '¿También enseñan a personas adultas?', a: 'Sí. Enseñamos de los 6 a los 67 años. Muchos adultos vienen por estadística, por el álgebra que necesitan en un posgrado o simplemente para retomar la matemática en inglés.' },
      { q: '¿Cómo se paga y en qué moneda?', a: 'Con tarjeta, en dólares estadounidenses; el banco del titular convierte el monto a soles. Para la clase de prueba no pedimos ningún dato de pago.' },
      { q: '¿Entregan algún certificado?', a: 'Al terminar un curso se entrega un certificado de finalización emitido por Modern Age Coders, sin valor oficial en Perú. No tenemos ningún vínculo con el MINEDU ni con las UGEL.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas relacionadas, varias en inglés porque así son las clases.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que enseñamos en Perú, por edades, en una sola página.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Si además de matemáticas su hijo de primaria quiere programar.' },
      { href: '/ib-maths-tuition-online', label: 'IB Maths tuition', p: 'Nuestra página sobre las clases de IB Maths en línea.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE Maths tuition', p: 'El temario Cambridge de matemáticas, explicado curso por curso.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase en vivo con nosotros por dentro.' },
      { href: '/courses', label: 'All courses', p: 'Todos nuestros programas en una sola lista.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis de matemáticas en inglés',
    lede: 'En la primera clase el profesor le pide al estudiante leer en voz alta un problema corto en inglés, lo resuelve con él y observa dónde se traba: en el idioma, en la matemática o en ninguno de los dos. Con eso le proponemos un curso y un formato, sin compromiso.',
    readFirst: 'Antes de reservar puede revisar <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre el método, o <a class="ag-inline-link" href="/courses">All courses</a>, con la lista de cursos; ambas están en inglés.',
    note: 'Profesores en la India, clases por videollamada en vivo y siempre en inglés. Para consultas por WhatsApp, escriba en castellano sin problema.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Matemáticas', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primaria' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Preálgebra y geometría' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'Secundaria superior' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Programas internacionales', links: [
        { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB Maths AA y AI' },
        { href: '/courses/igcse-mathematics-mastery', label: 'IGCSE Maths' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Seven less than three times n: 3n − 7'
  },

  personalityCss: `
.ag-root.ag-pmi .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-pmi .ag-capsule { border-left-width: 6px; }
.ag-root.ag-pmi .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-pmi .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pmi .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Currículo Nacional de la Educación Básica (competencies 23 to 26, Tablas N.° 6, 8 and 9, horas pedagógicas of 45 minutes, the note on English specialist teachers), Edades normativas, press notes of 16 March 2026 and 17 April 2026; INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; tzdata and INACAL for time. All read 8 November 2026. The false-friend list, the practice set, the grade table column and the progress ladder are our own.',
    localProject: 'An original practice set of eight English word problems for a student in Peru moving to maths in English: seven less than three times a number (3n − 7 = 20, n = 9), a 15% decrease to 340 (x = 400), a quotient increased by 6, ages of Ana and Luis, a rectangle whose length exceeds its width by 4 cm (area 117 cm²), two-thirds of 36 and a quarter of the rest (9), consecutive integers with product 132 (11 or −12), and 0.4 of 2.5 (1); answers checked with python3 -I. Lesson family: from an English word problem to an equation, phrase to symbol, with the "less than" order trap.',
    requiredMentions: ['Seven less than three times a number is 20.', 'P7 [-12, 11]', 'Área: 117 cm²', 'a billion es mil millones', 'la implementación de esta área será progresiva dependiendo de la contratación de estos docentes', 'Resuelve problemas de gestión de datos e incertidumbre', 'unas 108 horas de reloj de Matemática al año', 'Secundaria, Jornada Escolar Completa', 'Seven less than three times n: 3n − 7', '2502 estudiantes obtuvieron el Diploma del Bachillerato Internacional'],
    sources: [
      { claim: 'Maths competencies 23 to 26 and their definitions; weekly hours in Tablas N.° 6, 8 and 9; 45-minute teaching hours; English area depends on hiring specialist teachers.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative age per grade, measured at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: '6 225 000 students at the 2026 opening (thousands separated by spaces).', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: '64,5% of households with internet, II trimestre 2026 (decimal comma).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '2,502 IB Diplomas in Peru in 2025, 47% at COAR.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: '36 teaching weeks in the 2026 school year.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'EF EPI 2025: Peru 519, rank 52 of 123, Lima 555, speaking 480, reading 540.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any MINEDU, UGEL, IB, COAR or school endorsement, or an official certificate: none; the page says we are not connected and give only our own certificate of completion.',
      'A price per hour or any typed fee: refused; the monthly fee renders from the template in USD (priceSubject maths).',
      'A count of bilingual or Cambridge schools or of IB schools in Peru: not verified (ibo.org blocked our fetch; no official directory); none printed.',
      'IB Maths syllabus details from ibo.org: not fetched (host blocked); the page names only the two routes our own course teaches.',
      'Naming any school as a source of our students: refused.'
    ]
  }
};

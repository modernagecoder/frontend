// SHIP: market (es subject door, primaria) | matemáticas en inglés para niños: valor posicional por ciclo del CNEB y la ENLA | place value with // and %: a number split into hundreds, tens and units, then said in English
'use strict';
// Clases de matemáticas en inglés para niños (ag- Spanish-language door, Peru cluster row PE112, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only (priceSubject 'maths'); no soles, no typed figure.
// Search (KEYWORDS.md): "clases de matematicas en ingles para niños" (2 suggestions), "clases de matemáticas para primer /
// segundo / tercer grado de primaria". Audience: parents of children of 6 to 12 in primaria.
// Spine: yes they exist; how much maths and English a primaria week holds (CNEB Tabla N.° 6); what the CNEB expects in place
// value at the end of cycles III, IV and V (two, four and six digits) and how those numbers are said in English; what ENLA
// 2024 and 2025 measured in 4° de primaria; how a child who does not speak English learns maths in English; an original
// Python program that writes numbers in English words, plus a practice set; Peru to India clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-matematicas-en-ingles-para-ninos/,
// all fetched 2026-11-08, quotes grepped in the raw text):
//  CNEB (cneb.txt), competency 23 standards: level 3 (end of ciclo III) "Expresa su comprensión del valor de posición en
//    números de dos cifras"; level 4 (end of ciclo IV) "Expresa su comprensión del valor posicional en números de hasta
//    cuatro cifras"; level 5 (end of ciclo V) "sistema de numeración decimal con números naturales hasta seis cifras";
//    level 3 also "doble y mitad" and "Explica por qué debe sumar o restar en una situación"; Tabla N.° 6 "Matemática
//    5 5 4 4 4 4 Comunicación 5 5 4 4 4 4 Inglés 2 2 3 3 3 3"; "horas pedagógicas (45 minutos)".
//  MINEDU Edades normativas PDF: "III 1er grado 2do grado IV 3er grado 4to grado V 5to grado 6to grado"; ages 6 to 11.
//  MINEDU press note 8 April 2025 (n-enla2024.txt): "ENLA 2024 es una prueba censal que el Minedu tomó a 532 000 escolares
//    de 4.º grado de primaria de 18 112 instituciones educativas públicas y privadas, así como una prueba muestral a 105 534
//    escolares de 6.º grado de primaria"; held "el 19 y 20 de noviembre"; rural pupils "de 36,8 % a 28,7 % en matemática";
//    "Tacna, Moquegua y Arequipa se mantienen como las regiones con mayores logros"; "Lambayeque, en Matemática".
//  MINEDU press note (n-enla2025-aplicacion.txt): ENLA 2025 "entre el 11 y el 13 de noviembre" to "más de 200 mil
//    estudiantes de 8700 instituciones educativas"; "4.° grado de primaria en Lectura y Matemática".
//  MINEDU press note 13 May 2026 (n-enla2025.txt): "resultados similares a los obtenidos en 2023 y 2024 en Lectura y
//    Matemática"; "Moquegua, Tacna y Arequipa continúan liderando".
//  UMC home (umc-home.txt): "Dejan sin efecto la R.M. Nº 285-2026-MINEDU, que dispuso la implementación y ejecución de la
//    ENLA 2026".
//  EF EPI 2025 (ef_peru.txt): Lima 555, high from 550; INEI TIC II 2026: children 6 to 11 internet use 68,2%.
//  Time: tzdata America/Lima -5:00 (no DST since 1994), Asia/Kolkata 5:30; INACAL feed UTC-5 on 2026-11-08.
// Our own calculations: 5 x 45 = 225 min a week (1° and 2°), 4 x 45 = 180 min (3° to 6°); x 36 weeks / 60 = 135.0 and
//    108.0 hours a year (RM 501-2025-MINEDU, 36 teaching weeks).
// Our own program numeros.py, run with python3 -I, exact output: 14 -> fourteen / 40 -> forty / 58 -> fifty-eight / 105 ->
//    one hundred five / 3070 -> three thousand seventy / 18112 -> eighteen thousand one hundred twelve / 532000 -> five
//    hundred thirty-two thousand. British variant numeros_uk.py: 105 -> one hundred and five / 3070 -> three thousand
//    seventy / 18112 -> eighteen thousand one hundred and twelve / 532000 -> five hundred and thirty-two thousand.
// Lesson family: place value with // and %: split a number into thousands, hundreds, tens and units, then say it in English.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "unidades = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',",
  "            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',",
  "            'seventeen', 'eighteen', 'nineteen']",
  "decenas = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']",
  '',
  'def hasta_999(n):',
  '    centenas = n // 100',
  '    resto = n % 100',
  '    partes = []',
  '    if centenas > 0:',
  "        partes.append(unidades[centenas] + ' hundred')",
  '    if resto >= 20:',
  '        palabra = decenas[resto // 10]',
  '        if resto % 10 > 0:',
  "            palabra = palabra + '-' + unidades[resto % 10]",
  '        partes.append(palabra)',
  '    elif resto > 0:',
  '        partes.append(unidades[resto])',
  "    return ' '.join(partes)",
  '',
  'def en_ingles(n):',
  '    if n == 0:',
  "        return 'zero'",
  '    miles = n // 1000',
  '    resto = n % 1000',
  "    texto = ''",
  '    if miles > 0:',
  "        texto = hasta_999(miles) + ' thousand'",
  '    if resto > 0:',
  "        texto = (texto + ' ' + hasta_999(resto)).strip()",
  '    return texto',
  '',
  'for numero in [14, 40, 58, 105, 3070, 18112, 532000]:',
  "    print(numero, '->', en_ingles(numero))"
].join('\n');

const OUT = [
  '14 -> fourteen',
  '40 -> forty',
  '58 -> fifty-eight',
  '105 -> one hundred five',
  '3070 -> three thousand seventy',
  '18112 -> eighteen thousand one hundred twelve',
  '532000 -> five hundred thirty-two thousand'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Matemáticas en inglés para niños' },
  slug: 'clases-de-matematicas-en-ingles-para-ninos',
  code: 'min',
  accent: '#0B764D',
  accentRationale: 'Clases de matemáticas en inglés para niños: an abacus-bead green #0B764D, brighter than the teal of the secondary maths door so the two maths pages read apart; 4.59:1 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de matemáticas en inglés para niños',
  title: 'Clases de matemáticas en inglés para niños en Perú, en vivo',
  description: 'Clases de matemáticas en inglés para niños de 6 a 12 años en Perú: en vivo y en línea, de 1° a 6° de primaria, en grupo o individuales y a cualquier hora del día.',
  ogDescription: 'Matemáticas en inglés para niños de primaria en Perú: qué pide el CNEB en cada ciclo, qué midió la ENLA y un programa nuestro en Python que dice los números en inglés.',
  twitterDescription: 'Matemáticas en inglés para niños de 6 a 12 años, en vivo y por internet desde Perú, a la hora que la familia elija.',
  pageName: 'Clases de matemáticas en inglés para niños',
  webPageDescription: 'Guía para madres y padres en Perú sobre las clases de matemáticas en inglés para niños de primaria: horas de Matemática e Inglés por grado según el CNEB, lo que se espera en valor posicional al final de los ciclos III, IV y V, lo que midieron la ENLA 2024 y 2025, y un programa en Python escrito por nosotros que convierte números en palabras inglesas.',
  courseDescription: 'Clases de matemáticas en vivo y en línea para niños de 6 a 12 años en todo el Perú, dictadas solo en inglés: números y valor posicional, cálculo mental, fracciones, medidas y problemas, en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Matemáticas en inglés para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#semana', label: 'La semana' },
    { href: '#ciclos', label: 'Ciclos' },
    { href: '#enla', label: 'ENLA' },
    { href: '#numeros', label: 'Ejemplo' },
    { href: '#reloj', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Matemáticas para niños &middot; Primaria',
  h1: 'Clases de matemáticas en inglés para niños, en vivo',
  lede: 'Hay familias peruanas que quieren que su hijo o hija de primaria tenga una base firme en matemática y, al mismo tiempo, se acostumbre a pensar en inglés. Aquí contamos qué pide el colegio en cada ciclo, qué midió el MINEDU en las últimas evaluaciones nacionales y cómo aprende números en inglés un niño que todavía no habla el idioma.',
  secondaryCta: { href: '#numeros', label: 'Ver el ejemplo de los números' },
  wa: 'Hola Modern Age Coders, nos interesan las clases de matemáticas en inglés para nuestro hijo o hija de primaria, en Perú. ¿Podemos probar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; números, cuentas y problemas, siempre en inglés',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Temas', 'Números, cálculo mental, fracciones, medidas y problemas'],
    ['Idioma', 'Solo inglés, con frases cortas y mucho apoyo visual'],
    ['Formato', 'Grupo de quince a veinte niños, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta, primero',
  capsule: 'Sí, existen: Modern Age Coders enseña matemáticas en vivo, en línea y en inglés a niñas y niños peruanos de primaria, entre los 6 y los 12 años, vivan donde vivan. Una profesora o un profesor desde la India trabaja con su hijo por videollamada, usa objetos y dibujos en la pantalla, habla con calma y espera a que el niño responda, adaptándose a su ritmo y a su acento. Los temas siguen la primaria peruana: números, cálculo, fracciones, medidas y problemas. Puede elegir una clase grupal o clases individuales, a cualquier hora, y la primera es gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos de matemáticas para niños de primaria',
    lede: 'Uno para los que recién empiezan a contar, uno para ganar rapidez con los números y uno para los mayores que disfrutan resolviendo con la computadora.',
    items: [
      { course: 'early-math-foundations', code: 'MIN / 01', title: 'Primeros números', alt: 'Imagen del curso de matemática inicial para niños pequeños', note: 'Para 1° de primaria y los que aún no cumplen 7. Contar, juntar, separar y comparar con objetos en pantalla, diciendo cada número en inglés.' },
      { course: 'mental-maths-mastery-kids', code: 'MIN / 02', title: 'Cálculo mental con sentido', alt: 'Imagen del curso de cálculo mental para niños', note: 'De 5 a 10 años. Descomponer, estimar y comprobar en voz alta, sin trucos que se olvidan: el niño entiende por qué funciona cada cuenta.' },
      { course: 'maths-through-coding', code: 'MIN / 03', title: 'Matemática con Python', alt: 'Imagen del curso de matemática con programación', note: 'Desde los 10 años. Fracciones, patrones y gráficos que el niño programa él mismo, como el ejemplo de los números en inglés de esta página.' }
    ]
  },

  sections: [
    {
      id: 'semana',
      eyebrow: 'La semana escolar',
      h2: '¿Cuánta matemática y cuánto inglés tiene un niño de primaria en Perú?',
      lede: 'Según el plan de estudios del CNEB, un niño de primaria tiene cinco horas pedagógicas de Matemática a la semana en 1° y 2° grado y cuatro de 3° a 6°, y entre dos y tres de Inglés. Las dos áreas van por separado: la matemática del colegio público se enseña en castellano.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Grado por grado: horas pedagógicas de Matemática, Comunicación e Inglés en una semana de primaria', head: ['Grado de primaria', 'Matemática', 'Comunicación', 'Inglés', 'Semana completa'], rows: [
          ['Primer grado', '5', '5', '2', '30'],
          ['Segundo grado', '5', '5', '2', '30'],
          ['Tercer grado', '4', '4', '3', '30'],
          ['Cuarto grado', '4', '4', '3', '30'],
          ['Quinto grado', '4', '4', '3', '30'],
          ['Sexto grado', '4', '4', '3', '30']
        ] },
        { kind: 'source', html: 'Datos de la tabla 6 del CNEB del MINEDU, la que reparte el tiempo semanal de la primaria (la revisamos el 8 de noviembre de 2026). Las otras áreas de la tabla (Personal social, Arte y cultura, Ciencia y tecnología, Educación física, Educación religiosa, Tutoría y horas de libre disponibilidad) completan las 30 horas.' },
        { kind: 'two', mt: true,
          leftH3: 'En horas de reloj',
          left: [
            'Cada hora pedagógica dura 45 minutos según el CNEB. Cinco a la semana son 225 minutos de Matemática en 1° y 2° grado; cuatro son 180 minutos desde tercer grado (cálculo nuestro).',
            'La RM 501-2025-MINEDU dio al año escolar 2026 un total de 36 semanas lectivas; multiplicando, salen unas 135 horas de reloj de Matemática al año en los dos primeros grados y unas 108 desde 3° (cálculo nuestro, antes de feriados y actuaciones).'
          ],
          rightH3: 'Por qué sumar inglés a la matemática',
          right: [
            'El inglés escolar trabaja saludos, colores, la familia, la rutina. Casi nunca llega a frases como <em>how many are left</em> o <em>which number is greater</em>, que son las que un niño necesita si luego estudia en un colegio bilingüe o rinde exámenes internacionales.',
            'Una clase de matemáticas en inglés no quita tiempo a la matemática: es la misma práctica de números, hecha en otro idioma. El niño suma, resta y explica, y el inglés se pega porque lo usa para algo que le importa, ganar el reto de la clase.'
          ] }
      ]
    },
    {
      id: 'ciclos',
      eyebrow: 'Lo que pide el CNEB',
      h2: '¿Qué números debe manejar un niño al terminar cada ciclo de primaria?',
      lede: 'El CNEB divide la primaria en tres ciclos de dos grados y, para la competencia "Resuelve problemas de cantidad", describe qué se espera al final de cada uno. En valor posicional el salto es claro: dos cifras, luego cuatro, luego seis.',
      body: [
        { kind: 'table', numCols: [], caption: 'Valor posicional esperado al final de cada ciclo de primaria y cómo se dice un número así en inglés', head: ['Ciclo y grados', 'Lo que dice el estándar del CNEB', 'Un número de ese tamaño', 'Dicho en inglés'], rows: [
          ['III: 1° y 2°', '"Expresa su comprensión del valor de posición en números de dos cifras"', '58', 'fifty-eight'],
          ['IV: 3° y 4°', '"Expresa su comprensión del valor posicional en números de hasta cuatro cifras"', '3070', 'three thousand seventy'],
          ['V: 5° y 6°', '"sistema de numeración decimal con números naturales hasta seis cifras"', '532000', 'five hundred thirty-two thousand']
        ] },
        { kind: 'source', html: 'Fuente: CNEB, estándares de aprendizaje de la competencia 23, "Resuelve problemas de cantidad", niveles 3, 4 y 5 (los esperados al final de los ciclos III, IV y V). La correspondencia entre ciclo y grado está en la tabla de edades normativas del MINEDU. Las dos últimas columnas son nuestras y salen del programa de más abajo.' },
        { kind: 'p', mt: true, html: 'El mismo estándar del ciclo III pide que el niño trabaje "doble y mitad" y que "explique por qué debe sumar o restar en una situación". Esa segunda parte es la que más nos interesa en una clase en inglés: no basta con que su hijo llegue al resultado, tiene que poder decir <em>I added because they joined the group</em>, aunque al principio lo diga con dos o tres palabras.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo difícil de los números en inglés',
          left: [
            'Del 13 al 19 los números terminan en <em>teen</em> y del 20 en adelante en <em>ty</em>, y suenan casi igual: <em>fourteen</em> y <em>forty</em>. Muchos niños los confunden de oído durante semanas, así que el profesor los dice despacio y pide que el niño los escriba en cifras.',
            'Además, en castellano decimos "dieciocho mil ciento doce" y en inglés <em>eighteen thousand one hundred twelve</em>: la palabra <em>hundred</em> aparece siempre, aunque sea uno solo. Es un detalle que se aprende rápido si se practica con números reales.'
          ],
          rightH3: 'Comas, puntos y espacios',
          right: [
            'El MINEDU escribe los miles con un espacio, como en "532 000 escolares". En un texto en inglés el mismo número se escribe 532,000, con coma. Y el decimal, que en Perú suele llevar coma, en inglés lleva punto.',
            'Para un niño de 4° o 5° de primaria esto no es un problema si se le dice desde el principio. Lo que sí causa errores es descubrirlo en un examen, por eso lo practicamos con números de verdad, como los de esta página.'
          ] }
      ]
    },
    {
      id: 'enla',
      eyebrow: 'Evaluaciones nacionales',
      h2: '¿Qué dicen las evaluaciones nacionales sobre la matemática en primaria?',
      lede: 'El MINEDU mide la matemática de 4° de primaria con la Evaluación Nacional de Logros de Aprendizaje (ENLA). Estas son las dos últimas ediciones con resultados, contadas con las palabras de sus notas de prensa.',
      body: [
        { kind: 'table', numCols: [], caption: 'La ENLA en primaria, ediciones 2024 y 2025, según las notas de prensa del MINEDU', head: ['Edición', 'Cuándo y a quién', 'Lo que informó el MINEDU sobre matemática'], rows: [
          ['ENLA 2024', '19 y 20 de noviembre de 2024; censo de 532,000 niños de 4° de primaria en 18,112 colegios, y una muestra de 105,534 de 6°', 'En 4° grado los resultados de matemática superaron los de 2023 y 2022; en colegios rurales el nivel más bajo bajó de 36,8 % a 28,7 %'],
          ['ENLA 2025', '11 al 13 de noviembre de 2025; más de 200 mil estudiantes de 8700 colegios, con 4° de primaria evaluado en Lectura y Matemática', 'A nivel nacional, resultados similares a los de 2023 y 2024 en Lectura y Matemática (nota del 13 de mayo de 2026)'],
          ['ENLA 2026', 'Prevista por la R.M. N.° 285-2026-MINEDU', 'La resolución que la disponía quedó sin efecto, según la página de la Oficina de Medición de la Calidad']
        ] },
        { kind: 'source', html: 'Fuentes: MINEDU, notas de prensa del 8 de abril de 2025 (ENLA 2024), del 9 de noviembre de 2025 (aplicación de la ENLA 2025) y del 13 de mayo de 2026 (resultados de la ENLA 2025); página de inicio de la Oficina de Medición de la Calidad de los Aprendizajes (UMC). Todas leídas el 8 de noviembre de 2026. No pudimos leer las tablas de resultados de la UMC, que bloquearon nuestro acceso, así que no citamos porcentajes por nivel salvo el dato de colegios rurales que trae la nota de 2024.' },
        { kind: 'p', mt: true, html: 'Dos datos regionales aparecen en ambas notas: en 2024 el MINEDU dijo que Tacna, Moquegua y Arequipa "se mantienen como las regiones con mayores logros de aprendizaje en 4.º grado de primaria", y que Lambayeque destacó en Matemática; en 2025 repitió que "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país".' },
        { kind: 'p', html: 'No usamos la ENLA para ubicar a ningún niño ni prometemos que las clases cambien su resultado en una evaluación. Lo que la ENLA deja claro es qué se mide en 4° grado: comprensión de los números y capacidad de resolver problemas. Es justo lo que trabajamos, en inglés, desde la primera clase.' }
      ]
    },
    {
      id: 'sin-ingles',
      eyebrow: 'Si su hijo no habla inglés',
      h2: '¿Puede aprender matemáticas en inglés un niño que no habla inglés?',
      lede: 'Sí, porque la matemática de primaria se ve, se toca y se cuenta antes de decirse. El profesor muestra, el niño hace, y las palabras llegan pegadas a lo que el niño ya entiende con las manos y los ojos.',
      body: [
        { kind: 'ol', items: [
          '<strong>Una rutina fija al inicio.</strong> Cada clase empieza igual: contar en inglés hasta un número que crece cada semana, primero de uno en uno y luego de dos en dos o de cinco en cinco.',
          '<strong>Objetos antes que símbolos.</strong> Bloques, monedas dibujadas, regletas en pantalla. El profesor dice <em>put three more</em> mientras mueve tres bloques; el niño lo repite moviendo los suyos.',
          '<strong>Pocas palabras, muchas veces.</strong> Al principio bastan una docena: <em>add</em>, <em>take away</em>, <em>equals</em>, <em>more</em>, <em>less</em>, <em>half</em>, <em>double</em>. Se repiten en todas las clases hasta que salen solas.',
          '<strong>Responder con el cuerpo.</strong> Para los de 6 y 7 años, levantar dedos, señalar o dibujar cuenta como respuesta. Nadie está obligado a hablar inglés la primera semana.',
          '<strong>El castellano como puente, no como idioma de la clase.</strong> Si el niño responde en castellano, el profesor le devuelve la idea en inglés, sin corregirlo frente al grupo, y le invita a repetirla.',
          '<strong>Un cierre que se cuenta en casa.</strong> Al final el niño dice en inglés lo que hizo: <em>I learned to make ten</em>. Esa frase es la que conviene que le repita a usted.'
        ] },
        { kind: 'p', mt: true, html: 'Según el EF EPI 2025, el índice de inglés de la empresa EF, Lima puntúa 555, en la franja alta que EF fija desde 550. Muchas familias limeñas ya tienen a alguien en casa que entiende inglés, y eso ayuda; pero no es un requisito. Hemos enseñado a niños que entraban sin una palabra y que a las pocas semanas ya contaban y comparaban en inglés con naturalidad.' },
        { kind: 'p', html: 'Si a su hijo, además de los números, le atrae la computadora, nuestra página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explica el mismo formato aplicado a Scratch y Python, y en verano muchas familias combinan ambas cosas con lo que contamos en <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a>.' }
      ]
    },
    {
      id: 'numeros',
      tint: 'tint',
      eyebrow: 'Un ejemplo de clase',
      h2: '¿Cómo se practica el valor posicional en inglés?',
      lede: 'Con números de verdad, separados en millares, centenas, decenas y unidades, y luego dichos en voz alta. Para los mayores de primaria lo hacemos además con un programa corto en Python, escrito por nosotros, que hace la misma separación que el niño hace en su cuaderno.',
      body: [
        { kind: 'code', label: 'Un programa que dice los números en inglés', lang: 'Python', code: PY, note: 'La clave está en dos operaciones: <code>//</code> da el cociente entero y <code>%</code> el resto. <code>n // 100</code> son las centenas, <code>n % 100</code> lo que queda; <code>n // 1000</code> son los miles. Es el valor posicional, escrito como código.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Esto imprimió el programa cuando lo corrimos en Python 3; no cambiamos ni una letra. Los números 18112 y 532000 son los de la ENLA 2024: 18,112 colegios y 532,000 escolares de 4° de primaria.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Separar en el cuaderno.</strong> Antes de mirar el programa, el niño escribe 18112 en una tabla de valor posicional: 18 millares, 1 centena, 1 decena, 2 unidades. El profesor pregunta en inglés: <em>how many thousands?</em>',
          '<strong>Predecir la salida.</strong> ¿Qué dirá el programa para 40? Muchos niños escriben <em>fourty</em>, con u. La salida muestra <em>forty</em>, y la corrección queda grabada.',
          '<strong>Encontrar el caso raro.</strong> Para 105 el programa dice <em>one hundred five</em>, como en Estados Unidos. En el Reino Unido se dice <em>one hundred and five</em>. El reto es cambiar el programa para que agregue <em>and</em>.',
          '<strong>Comprobar la solución.</strong> Con nuestra versión británica, 105 pasa a ser <code>one hundred and five</code> y 18112, <code>eighteen thousand one hundred and twelve</code>. Pero 3070 sigue saliendo <code>three thousand seventy</code>, y un británico diría <em>three thousand and seventy</em>. El cambio arregló un caso y dejó otro: hay que probar con números distintos.',
          '<strong>Números propios.</strong> El niño elige números de su vida, su año de nacimiento, el número de su casa, los goles de su equipo, y los dice primero él y después el programa.'
        ] },
        { kind: 'p', mt: true, html: 'Para los niños de 6 a 9 años hacemos lo mismo sin código: tarjetas con cifras, una tabla de valor posicional dibujada y el profesor que pregunta <em>which digit is in the tens place?</em>. El programa es para los de 10 a 12, que disfrutan viendo que la computadora sigue la misma regla que ellos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Práctica 1 (ciclo III).</strong> Write 47 in words. In 47, what is the value of the 4? <em>Respuesta: forty-seven; forty, cuatro decenas.</em>',
          '<strong>Práctica 2 (ciclo III).</strong> What is double 15? What is half of 30? <em>Respuesta: thirty; fifteen.</em>',
          '<strong>Práctica 3 (ciclo IV).</strong> Which is greater, 2,109 or 2,091? Say both in English. <em>Respuesta: 2,109, two thousand one hundred nine, es mayor que two thousand ninety-one.</em>',
          '<strong>Práctica 4 (ciclo IV).</strong> Round 3,070 to the nearest hundred. <em>Respuesta: 3,100.</em>',
          '<strong>Práctica 5 (ciclo V).</strong> In 532,000, what is the value of the 3? <em>Respuesta: 30,000, thirty thousand.</em>',
          '<strong>Práctica 6 (ciclo V).</strong> Write one hundred five thousand five hundred thirty-four in figures. <em>Respuesta: 105,534, el número de escolares de 6° que tomaron la muestra de la ENLA 2024.</em>'
        ] },
        { kind: 'p', mt: true, html: 'La práctica es nuestra y las respuestas las revisamos a mano. En clase el profesor no entrega las respuestas: pregunta, espera y deja que el niño se equivoque y lo descubra, que es como aprende a confiar en su propio razonamiento.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puede ser la clase de matemáticas de mi hijo?',
      lede: 'Usted la fija. Como el equipo de profesores vive en la India, conviene saber cómo se ve cada hora en los dos lados: allá siempre es diez horas y media más tarde que en Perú.',
      body: [
        { kind: 'table', numCols: [], caption: 'Horas de ejemplo en Perú y su equivalente en la India (solo conversiones; usted elige la hora)', head: ['En Perú', 'En la India', 'Momento típico para un niño'], rows: [
          ['9:30 a. m.', '8:00 p. m.', 'Mañana libre en vacaciones o turno tarde'],
          ['10:30 a. m.', '9:00 p. m.', 'Sábado por la mañana'],
          ['2:00 p. m.', '12:30 a. m. del día siguiente', 'Después del almuerzo, turno mañana'],
          ['5:30 p. m.', '4:00 a. m. del día siguiente', 'Tarde, con la tarea ya hecha'],
          ['6:00 p. m.', '4:30 a. m. del día siguiente', 'Antes de la cena']
        ] },
        { kind: 'source', html: 'Cálculo con las zonas horarias oficiales: America/Lima en UTC-5, sin horario de verano desde 1994 según la base tzdata y el reloj del INACAL (revisado el 8 de noviembre de 2026), y Asia/Kolkata en UTC+5:30. La tercera columna es una sugerencia nuestra.' },
        { kind: 'p', mt: true, html: 'Ni Perú ni la India adelantan o atrasan el reloj durante el año, así que la tabla vale igual en febrero que en agosto. Para los más pequeños solemos sugerir clases que no choquen con la siesta ni con la hora de dormir; para los de 5° y 6°, después de terminar la tarea del colegio, cuando la cabeza todavía está fresca.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo sabrá si su hijo avanza en matemáticas en inglés?',
    lede: 'Seguimos a cada niño con cinco etapas propias, pensadas para que la familia pueda verlas en casa sin ser profesora.',
    table: { caption: 'Cinco etapas de matemáticas en inglés para primaria (nuestras)', head: ['Etapa', 'Ciclo habitual', 'Lo que su hijo hace'], rows: [
      ['1. Cuenta en inglés', 'III', 'cuenta hasta cien y dice en inglés números de dos cifras sin mezclar teen y ty'],
      ['2. Opera en voz alta', 'III y IV', 'suma, resta, dobla y reparte diciendo add, take away, double y half'],
      ['3. Lee números grandes', 'IV', 'lee y escribe números de cuatro cifras y explica el valor de cada cifra'],
      ['4. Resuelve problemas cortos', 'IV y V', 'entiende un problema de dos frases en inglés y elige la operación'],
      ['5. Explica su razonamiento', 'V', 'cuenta en inglés cómo resolvió un problema con fracciones, decimales o números de seis cifras']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Una señal temprana y fiable: su hijo empieza a contar en inglés solo, mientras juega o sube una escalera. Quiere decir que los números ya no los traduce.',
      'No se preocupe si durante un tiempo mezcla idiomas en una misma frase. Es una etapa normal del aprendizaje y desaparece con la práctica.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Cuando un número sea largo, sepáralo en grupos de tres desde la derecha, como en 532 000, y lee cada grupo.',
      'Si no recuerda una palabra en inglés, dibuje lo que quiere decir. El profesor le ayudará a encontrarla.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más de matemáticas para niños',
    lede: 'Los dicta en inglés un profesor que acompaña al niño de principio a fin, en vivo, ya sea con un grupo o de manera individual.',
    bands: [
      { num: 'I', h3: 'Los primeros grados', sub: 'De 6 a 8 años', courses: [
        { code: 'MIN / INICIO / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento temprano', blurb: 'Patrones, secuencias y lógica con juegos, para 1° y 2° de primaria.' },
        { code: 'MIN / INICIO / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco y cálculo mental', blurb: 'De las primeras cuentas con el ábaco a operar solo con la imaginación.' },
        { code: 'MIN / INICIO / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria completa', blurb: 'Números, operaciones, fracciones y medidas, grado por grado.' }
      ] },
      { num: 'II', h3: 'Rapidez y base para secundaria', sub: 'De 9 a 12 años', courses: [
        { code: 'MIN / BASE / 01', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Matemática védica', blurb: 'Atajos de cálculo que el niño entiende y comprueba, desde los 8 años.' },
        { code: 'MIN / BASE / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Preálgebra y geometría', blurb: 'El puente entre 6° de primaria y 1° de secundaria.' },
        { code: 'MIN / BASE / 03', slug: 'algebra-foundations-masterclass', title: 'Primeros pasos en álgebra', blurb: 'Letras que representan números, explicadas sin miedo.' }
      ] },
      { num: 'III', h3: 'Retos y computadora', sub: 'De 10 a 12 años', courses: [
        { code: 'MIN / RETO / 01', slug: 'middle-school-math-competitions-course', title: 'Problemas de concurso', blurb: 'Números, conteo y geometría para niños a los que les gustan los retos.' },
        { code: 'MIN / RETO / 02', slug: 'amc-8-math-competition-prep-course', title: 'AMC 8', blurb: 'El concurso estadounidense para estudiantes de hasta 8° grado.' },
        { code: 'MIN / RETO / 03', slug: 'python-ai-kids-masterclass', title: 'Python e IA para niños', blurb: 'Para quien quiere programar sus propios juegos de números.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una clase de matemáticas en vivo para un niño?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañanas de vacaciones', l: 'Cuando el colegio para y la cabeza descansa.' },
      { time: 'Tardes de semana', l: 'Con la tarea del colegio ya terminada.' },
      { time: 'Uno a uno', l: 'Un horario propio, acordado con la familia.' }
    ],
    cells: [
      { h3: 'Objetos en pantalla', p: 'Bloques, regletas y dibujos que el niño mueve mientras cuenta.' },
      { h3: 'Rutina de conteo', p: 'Cada clase arranca contando en inglés, un poco más lejos que la anterior.' },
      { h3: 'El niño responde', p: 'El profesor pregunta y espera; no resuelve por él.' },
      { h3: 'Mismo profesor', p: 'Una persona que conoce cómo piensa su hijo y qué le cuesta.' },
      { h3: 'Mensaje para la familia', p: 'Qué se trabajó y una idea para practicar en casa.' },
      { h3: 'Dos formatos', p: 'Un grupo de quince a veinte chicos de la misma franja de edad, o su hijo a solas.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Varios niños que empiezan con números terminan programando con nosotros. Abajo hay trabajos de estudiantes mayores, y en <a class="ag-inline-link" href="/student-labs">Student labs</a> hay muchos más, todos en inglés.',
  reviewsLede: 'Opiniones de Google que dejaron familias y estudiantes, sin editar y en inglés.',

  fees: {
    h2: 'Cuánto cuestan las clases de matemáticas para niños',
    lede: 'La mensualidad aparece expresada en dólares de Estados Unidos y se paga con tarjeta. El banco de quien paga lo pasa a soles al tipo de cambio que tenga ese día, de modo que el cargo puede variar un poco entre un mes y otro.',
    free: ['Una clase de prueba sin costo', 'Una mirada a cómo cuenta y razona su hijo', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte niños de edad parecida', 'Un profesor fijo durante el curso', 'Dos clases en vivo a la semana', 'Se paga mes a mes y se puede dejar cuando quiera'],
    one: ['Su hijo y el profesor, a solas', 'El ritmo y los temas que su hijo necesita', 'El día y la hora que la familia decida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Matemáticas en inglés para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, todas son en inglés, en vivo y por internet, y para muchas familias ese es el atractivo: el niño refuerza la matemática y gana oído para el inglés en la misma hora. El profesor usa frases cortas, objetos en pantalla y mucha paciencia, y sigue el ritmo de cada niño. El EF EPI 2025 coloca a Lima en el nivel alto de inglés, y empezar de pequeño con los números es una forma natural de sumarse.' },
      { q: '¿Mi hijo necesita hablar inglés?', a: 'No. Los más chicos contestan señalando, dibujando o escribiendo la cifra, y las palabras aparecen a fuerza de repetirlas. A partir de 4° grado el vocabulario se aprende resolviendo. Hacia la tercera semana casi todos siguen la clase sin dificultad.' },
      { q: '¿Siguen lo que ven en el colegio?', a: 'Seguimos la primaria peruana: los mismos temas que el CNEB pide en cada ciclo, de números de dos cifras en 1° y 2° a números de seis cifras, fracciones y decimales en 5° y 6°. Si su hijo trae su cuaderno, el profesor trabaja el tema de esa semana en inglés.' },
      { q: '¿Desde qué edad pueden empezar?', a: 'Desde que entra a primer grado, a los 6 años según la tabla de edades del MINEDU. Los más pequeños empiezan contando y comparando con objetos en pantalla.' },
      { q: '¿Qué números debería saber leer mi hijo de 4° grado?', a: 'Según el CNEB, al terminar el ciclo IV (3° y 4° de primaria) un niño expresa su comprensión del valor posicional en números de hasta cuatro cifras. En inglés eso quiere decir leer y escribir números como 3,070, three thousand seventy.' },
      { q: '¿Las clases suben la nota de la ENLA?', a: 'No prometemos resultados en ninguna evaluación. La ENLA mide en 4° de primaria la comprensión de los números y la resolución de problemas, y eso es lo que practicamos, pero no tenemos ningún vínculo con el MINEDU ni con la UMC.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, las 9:30 de la mañana en Perú son las 8:00 de la noche en la India.' },
      { q: '¿Qué equipo hace falta?', a: 'Una computadora o laptop que tenga cámara, unos audífonos con micro y una conexión estable. Para los de 6 a 8 años, una tablet sirve durante las primeras semanas; papel y lápiz siempre a mano.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares estadounidenses; el banco convierte el cargo a soles. La clase de prueba es gratis y no pide datos de pago.' },
      { q: '¿Reciben algún certificado?', a: 'Sí, uno emitido por Modern Age Coders cuando el niño completa el curso. Es solo nuestro y no tiene valor oficial dentro del sistema escolar peruano.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Otras páginas para familias con niños',
    lede: 'Algunas en castellano y otras en inglés, como las clases.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La página de inicio de nuestras clases para Perú.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Scratch, Python y Roblox para primaria, con el mismo formato.' },
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles virtuales en inglés', p: 'Un verano de práctica en inglés sin salir de casa.' },
      { href: '/math-catch-up-program', label: 'Math catch-up program', p: 'Para niños que necesitan ponerse al día con la matemática.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo funciona por dentro una clase en vivo.' },
      { href: '/courses', label: 'All courses', p: 'Nuestros cursos, ordenados por edad.' }
    ]
  },

  start: {
    h2: 'Agende una clase de prueba para su hijo',
    lede: 'En la clase de prueba el profesor le pide a su hijo contar, comparar dos números y resolver un problema muy corto, todo en inglés sencillo y con dibujos. Así vemos desde dónde empezar y le recomendamos un curso, sin compromiso.',
    readFirst: 'Puede leer primero <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre nuestras clases en vivo, o revisar <a class="ag-inline-link" href="/courses">All courses</a>; las dos páginas están escritas en inglés.',
    note: 'Las clases se dan en vivo por internet, desde la India y en inglés. Si nos escribe por WhatsApp, puede hacerlo en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Matemáticas para niños', links: [
        { href: '/courses/early-math-foundations', label: 'Primeros números' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Cálculo mental' },
        { href: '/courses/maths-through-coding', label: 'Matemática con Python' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/math-catch-up-program', label: 'Ponerse al día' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'fourteen no es forty: n // 100 y n % 100'
  },

  personalityCss: `
.ag-root.ag-min .ag-hero h1 { letter-spacing: -0.008em; max-width: 20ch; }
.ag-root.ag-min .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-min .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-min .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-min .ag-steps li { line-height: 1.7; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Currículo Nacional de la Educación Básica (Tabla N.° 6, horas pedagógicas of 45 minutes, competency 23 standards at levels 3, 4 and 5), Edades normativas (cycles III to V by grade), ENLA press notes of 8 April 2025, November 2025 and 13 May 2026, UMC home page on ENLA 2026; EF EPI 2025 Peru page; tzdata and INACAL for time. All read 8 November 2026. The Python program, its British variant, the practice set and the progress ladder are our own.',
    localProject: 'An original Python program for children of 10 to 12 in 5° and 6° de primaria that writes numbers in English words using place value: n // 100 for hundreds, n % 100 for the rest, n // 1000 for thousands, with lists of number words. Run with python3 -I on 14, 40, 58, 105, 3070, 18112 and 532000 (the last two are the ENLA 2024 school and pupil counts) it prints forty, one hundred five and five hundred thirty-two thousand; a British variant adds "and" (one hundred and five) but still prints three thousand seventy, the edge case the class finds. Lesson family: place value with // and %, then saying the number in English.',
    requiredMentions: ['532000 -&gt; five hundred thirty-two thousand', '105 -&gt; one hundred five', 'three thousand seventy', 'Expresa su comprensión del valor posicional en números de hasta cuatro cifras', 'sistema de numeración decimal con números naturales hasta seis cifras', 'de 36,8 % a 28,7 %', 'unas 135 horas de reloj de Matemática al año', 'Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país', 'fourteen no es forty: n // 100 y n % 100'],
    sources: [
      { claim: 'Primaria weekly hours (Tabla N.° 6); 45-minute teaching hours; competency 23 standards: two digits (level 3), up to four digits (level 4), up to six digits (level 5).', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Cycles III, IV and V by grade; normative ages.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'ENLA 2024: census of 532,000 pupils in 4° in 18,112 schools, sample of 105,534 in 6°; rural lowest maths level 36.8% to 28.7%; Tacna, Moquegua and Arequipa lead; Lambayeque in maths.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: 'ENLA 2025 applied 11 to 13 November 2025 to over 200,000 pupils in 8,700 schools; 4° primaria in reading and maths.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'ENLA 2025 results similar to 2023 and 2024; Moquegua, Tacna and Arequipa lead (13 May 2026).', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'The resolution ordering ENLA 2026 was revoked.', url: 'http://umc.minedu.gob.pe/' },
      { claim: '36 teaching weeks in the 2026 school year.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band from 550.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'ENLA percentages by achievement level: not printed beyond the rural figure in the 2024 press note, because the UMC results pages blocked our fetch.',
      'Any promise that classes raise an ENLA score or a school grade: refused.',
      'Any MINEDU, UMC or school endorsement, or an official certificate: none; only our own certificate of completion.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

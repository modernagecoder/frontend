// SHIP: market (es district, vacaciones útiles) | summer reforzamiento: maths reasoning and Python together, 10 to 15 | conjecture, test, find the counterexample
'use strict';
// Vacaciones útiles de programación en San Miguel, Lima (ag- Spanish door, Peru cluster row PE215, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted". Fees render in USD from the template only; no soles, no typed figure, no camp length or start date.
// Angle: the San Miguel parent of a child of 10 to 15 (5° de primaria to 3° de secundaria) who types "vacaciones útiles San
// Miguel" (KEYWORDS.md: "vacaciones utiles municipalidad de san miguel", San Miguel 25 Spanish hits) and wants the summer to
// be reforzamiento of maths as much as a new skill. Spine: San Miguel among its neighbours (INEI 2025 table); what maths the
// CNEB asks for (four competencies, weekly hours); what ENLA 2025 said in MINEDU's own words; an original lesson where Python
// tests a conjecture and finds the counterexample; an original practice set; maths words in English; the 2027 calendar
// status; Peru to India clock. Municipality: www.munisanmiguel.gob.pe and munisanmiguel.gob.pe did not connect (curl 000,
// retried once, 2026-11-09) and gob.pe/munisanmiguel had no notes for "vacaciones útiles" or "verano" (total_count 0), so
// the page says nothing about municipal programmes.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-san-miguel-lima/,
// fetched 2026-11-08 by the research run unless noted; quotes string-matched in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv): SAN MIGUEL 189301 (ubigeo 150136); LIMA
//    314840; PUEBLO LIBRE 99937; MAGDALENA DEL MAR 82146; BELLAVISTA 80953 (Callao); LA PERLA 68082 (Callao); Lima
//    Metropolitana 10141775 (43 districts). Each printed as published, none added together.
//  CNEB (cneb/text.txt): "Competencia 23: Resuelve problemas de cantidad.", "Competencia 24: Resuelve problemas de regularidad,
//    equivalencia y cambio.", "Competencia 25: Resuelve problemas de gestión de datos e incertidumbre.", "Competencia 26:
//    Resuelve problemas de forma, movimiento y localización."; primaria "Matemática 5 5 4 4 4 4"; secundaria JER "Matemática 4
//    4 4 4 4"; JEC "Matemática 6 6 6 6 6"; "horas pedagógicas (45 minutos)".
//  MINEDU, ENLA 2025 note, 13 May 2026 (n-enla2025/text.txt): "presenta, a nivel nacional, resultados similares a los obtenidos
//    en 2023 y 2024 en Lectura y Matemática"; "En 2.º grado de secundaria, se registran avances en Matemática frente al 2023,
//    siendo este el primer año con cambios positivos tras su severa afectación por el cierre de las escuelas."
//  MINEDU, ENLA 2025 announcement (n-enla2026-200mil): "entre el 11 y el 13 de noviembre ... a más de 200 mil estudiantes de 8700
//    instituciones educativas públicas y privadas de todo el país".
//  El Peruano, 11 October 2026 (elperuano-onem2026): "Más de 1,7 millones de escolares participaron en la competencia" (ONEM
//    2026). UGEL 06 oficio múltiple 2026 (ugel06-onem-2026): "NIVEL 1: 1° y 2° grado de educación secundaria NIVEL 2: 3° y 4°
//    grado de educación secundaria NIVEL 3: 5° grado de educación secundaria".
//  RM 501-2025-MINEDU Tabla 1 (rm501-2025-pdf/page11-checked-by-eye.png): "Del 16 marzo al 15 de mayo" (2026 first block);
//    "Del 19 octubre a 18 de diciembre". MINEDU 14 Oct 2026 (n-mat2027): materials for "el año escolar 2027"; no 2027 norm found.
//  INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el de 12 a 18 años con un 92,5%" (internet use).
//  EF EPI 2025 Peru page (ef_peru.txt): Lima 555 high; "Writing" 514; reading 540.
//  Time (timezone.tsv): America/Lima UTC-5 all year; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations: JER 4 x 45 = 180 minutes of maths a week; JEC 6 x 45 = 270 minutes.
// Our own example (miguel1.py, miguel2.py), python3 -I, exact output:
//    n = 1 | add 1 | total 1 | n * n = 1 ... n = 6 | add 11 | total 36 | n * n = 36
//    Prime for n = 0 to 39 / Breaks at n = 40 -> 1681 = 41 x 41
// Our own practice set (miguel_practica.py), answers checked with python3 -I: P1 100, P2 47, P3 61, P4 6, P5 30 30.
// Lesson family: a pattern that holds for many cases is a conjecture, not a proof; use a loop to test it and to hunt for the
// first counterexample.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const P1 = [
  'total = 0',
  'for n in range(1, 7):',
  '    odd = 2 * n - 1',
  '    total = total + odd',
  "    print('n =', n, '| add', odd, '| total', total, '| n * n =', n * n)"
].join('\n');

const O1 = [
  'n = 1 | add 1 | total 1 | n * n = 1',
  'n = 2 | add 3 | total 4 | n * n = 4',
  'n = 3 | add 5 | total 9 | n * n = 9',
  'n = 4 | add 7 | total 16 | n * n = 16',
  'n = 5 | add 9 | total 25 | n * n = 25',
  'n = 6 | add 11 | total 36 | n * n = 36'
].join('\n');

const P2 = [
  'def is_prime(number):',
  '    if number < 2:',
  '        return False',
  '    divisor = 2',
  '    while divisor * divisor <= number:',
  '        if number % divisor == 0:',
  '            return False',
  '        divisor = divisor + 1',
  '    return True',
  '',
  'n = 0',
  'while is_prime(n * n + n + 41):',
  '    n = n + 1',
  '',
  'value = n * n + n + 41',
  "print('Prime for n = 0 to', n - 1)",
  "print('Breaks at n =', n, '->', value, '=', 41, 'x', value // 41)"
].join('\n');

const O2 = [
  'Prime for n = 0 to 39',
  'Breaks at n = 40 -> 1681 = 41 x 41'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en San Miguel' },
  slug: 'vacaciones-utiles-de-programacion-san-miguel-lima',
  code: 'vac',
  accent: '#11594E',
  accentRationale: 'Vacaciones útiles de programación en San Miguel: a deep sea teal #11594E, the colour of the Pacific off the Costa Verde on an overcast January morning, for a district that faces the ocean; contrast 6.65 at its lowest across the three paper tints (alloc.tsv), above 4.5, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en San Miguel',
  title: 'Vacaciones útiles de programación en San Miguel, Lima',
  description: 'Vacaciones útiles en San Miguel con programación y matemática juntas: clases en vivo y en inglés, de 10 a 15 años, en grupo o individuales y a cualquier hora.',
  ogDescription: 'Reforzamiento de matemática con Python para escolares de San Miguel: clases en vivo y en inglés, un ejemplo que busca un contraejemplo y cinco problemas.',
  twitterDescription: 'Un verano de matemática y programación para San Miguel, en vivo y en inglés, desde casa y a la hora que su familia elija.',
  pageName: 'Vacaciones útiles de programación en San Miguel',
  webPageDescription: 'Guía para familias de San Miguel, Lima, que quieren unas vacaciones útiles de matemática y programación para hijos de 10 a 15 años: población del distrito y sus vecinos según el INEI (Censos 2025), las cuatro competencias matemáticas del CNEB, lo que el MINEDU informó sobre la ENLA 2025, una clase de ejemplo en Python que prueba una conjetura hasta encontrar un contraejemplo y cinco problemas originales con respuesta.',
  courseDescription: 'Clases en vivo de matemática y programación para escolares de 10 a 15 años en San Miguel y todo Lima, dictadas solo en inglés: razonamiento, álgebra, olimpiadas y Python aplicado a la matemática, en clase grupal o individual, desde el verano y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en San Miguel',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distrito', label: 'San Miguel' },
    { href: '#repaso', label: 'Repaso' },
    { href: '#conjetura', label: 'Ejemplo' },
    { href: '#problemas', label: 'Problemas' },
    { href: '#vocabulario', label: 'En inglés' }
  ],
  eyebrow: 'San Miguel, Lima &middot; Vacaciones útiles &middot; Matemática y programación',
  h1: 'Vacaciones útiles de programación y matemática en San Miguel',
  lede: 'Muchas familias de San Miguel buscan en el verano dos cosas a la vez: que su hijo no pierda lo que aprendió en matemática y que empiece algo nuevo. Programar con Python resuelve las dos, porque cada programa obliga a razonar con números. Aquí le contamos cómo lo hacemos, en vivo y en inglés, y le dejamos un ejemplo y cinco problemas para probar en casa.',
  secondaryCta: { href: '#problemas', label: 'Ver los cinco problemas' },
  wa: 'Hola Modern Age Coders, vivimos en San Miguel y buscamos vacaciones útiles de matemática y programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Desde 2020 &middot; 4.9 sobre 5 en unas 547 reseñas de Google &middot; matemática y programación con un mismo mentor',
  spec: [
    ['Edades', 'De 10 a 15 años, de 5° de primaria a 3° de secundaria'],
    ['Qué se trabaja', 'Razonamiento matemático y Python'],
    ['Modalidad', 'En vivo por videollamada, desde casa'],
    ['Idioma', 'Inglés claro y pausado'],
    ['Grupo', 'De quince a veinte, o clases individuales'],
    ['Empezar', 'Con una clase de prueba sin costo']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Para escolares de 10 a 15 años de San Miguel, Modern Age Coders ofrece un verano que junta matemática y programación: clases en vivo, por videollamada y en inglés, en las que su hijo usa Python para comprobar patrones, resolver problemas y razonar con números. El mentor enseña desde la India, pronuncia con claridad y se ajusta al ritmo del alumno. Usted elige grupo o clases individuales, y el día y la hora que le convengan. La clase de prueba es gratis.',

  picks: {
    eyebrow: 'Cursos para el verano',
    h2: 'Tres cursos que unen números y código',
    lede: 'El primero junta las dos materias en una sola clase; el segundo refuerza la matemática del colegio; el tercero es para quien disfruta los problemas difíciles.',
    items: [
      { course: 'maths-through-coding', code: 'VAC / 01', title: 'Matemática a través de la programación', alt: 'Imagen del curso de matemática a través de la programación', note: 'De 10 a 15 años, sin experiencia previa en código. Cada tema de matemática se explora escribiendo un programa en Python, como el ejemplo de esta página.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'VAC / 02', title: 'Matemática de secundaria inicial', alt: 'Imagen del curso de matemática de secundaria inicial', note: 'Prealgebra y geometría con método: fracciones, proporciones, ecuaciones y figuras, para llegar al siguiente grado con la base firme.' },
      { course: 'middle-school-math-competitions-course', code: 'VAC / 03', title: 'Competencias de matemática', alt: 'Imagen del curso de competencias de matemática', note: 'De 10 a 14 años aproximadamente. Problemas de olimpiada originales, en inglés, para quien quiere razonar más allá del ejercicio de clase.' }
    ]
  },

  sections: [
    {
      id: 'distrito',
      eyebrow: 'San Miguel y sus vecinos',
      h2: '¿Hay vacaciones útiles de matemática y programación en San Miguel?',
      lede: 'Sí, en línea. Nuestras clases llegan a cualquier casa de San Miguel con una computadora y buena conexión, y combinan las dos materias que más piden las familias para el verano: reforzamiento de matemática y algo de tecnología.',
      body: [
        { kind: 'p', html: 'San Miguel es uno de los distritos más poblados de esta parte de Lima. Limita con el Cercado de Lima, Pueblo Libre y Magdalena del Mar, con Bellavista y La Perla del lado del Callao, y con el mar. Estas son las cifras del censo más reciente para el distrito y sus vecinos.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Población de San Miguel y de los distritos con los que limita, Censos Nacionales 2025', head: ['Distrito', 'Población total', 'Provincia'], rows: [
          ['San Miguel', '189,301', 'Lima'],
          ['Lima (Cercado)', '314,840', 'Lima'],
          ['Pueblo Libre', '99,937', 'Lima'],
          ['Magdalena del Mar', '82,146', 'Lima'],
          ['Bellavista', '80,953', 'Callao'],
          ['La Perla', '68,082', 'Callao']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, tabulado "Indicadores demográficos", Cuadro N.° 1, población total (censada más omitida), con límites al 15 de julio de 2026. Cada cifra se copia tal cual; no sumamos distritos. Lima Metropolitana, que el INEI cuenta como la provincia de Lima con sus 43 distritos, tiene 10,141,775 habitantes.' },
        { kind: 'p', mt: true, html: 'Con 189,301 habitantes, San Miguel tiene muchos escolares y muchas familias que, cada verano, buscan qué hacer con las semanas sin colegio. Nosotros no organizamos talleres en el distrito ni tenemos relación con la municipalidad: damos clases en vivo por internet, y eso permite que su hijo aprenda desde su escritorio sin salir hacia otros distritos. Todas las clases son en inglés; si busca una visión general del país, nuestra <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">guía de programación e IA en Perú</a> la resume.' }
      ]
    },
    {
      id: 'repaso',
      eyebrow: 'Reforzamiento',
      h2: '¿Qué matemática conviene reforzar en el verano?',
      lede: 'La que pide el Currículo Nacional en sus cuatro competencias matemáticas. Programar ayuda en las cuatro, pero sobre todo en la de regularidad, equivalencia y cambio: la que trata de patrones y relaciones.',
      body: [
        { kind: 'table', numCols: [], caption: 'Las cuatro competencias del área de Matemática en el CNEB y cómo las trabajamos con Python', head: ['Competencia del CNEB', 'Qué significa en casa', 'Cómo la trabajamos programando (nuestro)'], rows: [
          ['23. Resuelve problemas de cantidad', 'Operar con números, fracciones y porcentajes con sentido', 'Programas que calculan y que el alumno verifica a mano antes de creerles'],
          ['24. Resuelve problemas de regularidad, equivalencia y cambio', 'Patrones, ecuaciones y relaciones entre cantidades', 'Bucles que generan una secuencia y prueban si una fórmula la describe'],
          ['25. Resuelve problemas de gestión de datos e incertidumbre', 'Tablas, gráficos, promedios y probabilidad', 'Listas de datos reales o simulados, contadas y resumidas'],
          ['26. Resuelve problemas de forma, movimiento y localización', 'Figuras, coordenadas y medidas', 'Dibujar con coordenadas y comprobar áreas y perímetros']
        ] },
        { kind: 'source', html: 'Fuente de la primera columna: Ministerio de Educación, Currículo Nacional de la Educación Básica (minedu.gob.pe/curriculo), competencias 23 a 26, consultado el 8 de noviembre de 2026. Las otras dos columnas son nuestras.' },
        { kind: 'two', mt: true,
          leftH3: 'Cuánta matemática hay en la semana',
          left: [
            'Según las tablas del CNEB, Matemática tiene 4 horas pedagógicas por semana de 3° a 6° de primaria y en los cinco grados de secundaria con jornada escolar regular. En los colegios de jornada escolar completa sube a 6 horas.',
            'Con horas de 45 minutos son 180 minutos semanales en la jornada regular y 270 en la completa, según nuestra cuenta. En el verano esas horas desaparecen de golpe.'
          ],
          rightH3: 'Por qué el verano pesa',
          right: [
            'Varias semanas sin practicar no borran lo aprendido, pero lo oxidan, sobre todo los procedimientos de varios pasos. Al volver, el primer bimestre se va en recuperarlos.',
            'Una o dos clases a la semana bastan para mantener el hábito de razonar, y si se hacen programando, el alumno ni siquiera siente que está repasando.'
          ] }
      ]
    },
    {
      id: 'enla',
      eyebrow: 'Lo que dice el MINEDU',
      h2: '¿Cómo van los escolares peruanos en matemática según la ENLA?',
      lede: 'Estables, con un avance en 2.° de secundaria. Así lo resumió el Ministerio de Educación el 13 de mayo de 2026, al presentar los resultados de la Evaluación Nacional de Logros de Aprendizaje (ENLA) 2025.',
      body: [
        { kind: 'p', html: 'La ENLA 2025 se aplicó entre el 11 y el 13 de noviembre de 2025 a más de 200 mil estudiantes de 8700 colegios públicos y privados de todo el país, en 4.° de primaria y en 2.° y 5.° de secundaria. Según el MINEDU, a nivel nacional mostró "resultados similares a los obtenidos en 2023 y 2024 en Lectura y Matemática". En 2.° de secundaria, añadió, se registran avances en Matemática frente a 2023, el primer año con cambios positivos después del golpe que dejó el cierre de las escuelas.' },
        { kind: 'p', html: 'No usamos la ENLA para medir a su hijo, ni tenemos acceso a sus resultados individuales. La citamos para dar contexto: el país viene recuperando matemática poco a poco, y el verano es un buen momento para que cada alumno recupere la suya. En la clase de prueba, el mentor ubica a su hijo con un par de problemas propios, no con su libreta de notas.' },
        { kind: 'three', mt: true, cells: [
          { h3: '5° y 6° de primaria', p: 'Fracciones, proporciones y patrones numéricos. Aquí Python sirve para generar muchos casos y que el niño vea la regla por su cuenta.' },
          { h3: '1° y 2° de secundaria', p: 'Expresiones algebraicas y ecuaciones. El programa comprueba si una fórmula da el mismo resultado que el conteo paso a paso.' },
          { h3: '3° de secundaria', p: 'Funciones, probabilidad y primeros problemas de olimpiada. Simular mil lanzamientos de un dado enseña más que una tabla dictada.' }
        ] },
        { kind: 'p', mt: true, html: 'Para quien quiere competir: la Olimpiada Nacional Escolar de Matemática (ONEM) 2026 tuvo más de 1,7 millones de participantes según El Peruano, en tres niveles (1° y 2°, 3° y 4°, y 5° de secundaria). La inscripción se hace a través del colegio. No reproducimos problemas de la ONEM; entrenamos con problemas nuestros, como los de más abajo.' }
      ]
    },
    {
      id: 'conjetura',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Puede un programa demostrar que un patrón siempre se cumple?',
      lede: 'No, y esa es la lección. Un programa puede comprobar muchos casos y puede encontrar el que rompe la regla, pero comprobar no es demostrar. El ejercicio, escrito por nosotros, tiene dos partes: un patrón que sí es cierto y uno que parece cierto durante cuarenta casos seguidos.',
      body: [
        { kind: 'code', label: 'Parte 1: sumar números impares', lang: 'Python', code: P1, note: 'El mentor pregunta en inglés antes de correrlo: "What do you notice about the totals?"' },
        { kind: 'code', label: 'Lo que imprime la parte 1', lang: 'Salida', code: O1, note: 'Salida literal de Python 3, tal como apareció en nuestra pantalla. Cada total es un cuadrado perfecto: 1, 4, 9, 16, 25, 36.' },
        { kind: 'p', mt: true, html: 'El alumno formula la conjetura con sus palabras: "the sum of the first n odd numbers is n times n". Seis casos convencen a cualquiera. Entonces el mentor pregunta si seis casos bastan, y propone la segunda parte, un patrón famoso que engaña mucho más.' },
        { kind: 'code', mt: true, label: 'Parte 2: ¿n × n + n + 41 siempre es primo?', lang: 'Python', code: P2, note: 'El bucle <code>while</code> avanza mientras el resultado sea primo y se detiene en el primer caso que no lo es: el contraejemplo.' },
        { kind: 'code', label: 'Lo que imprime la parte 2', lang: 'Salida', code: O2, note: 'Resultado exacto de nuestra ejecución con Python 3. La fórmula da primos de n = 0 a n = 39, cuarenta casos seguidos, y falla en n = 40, porque 40 × 40 + 40 + 41 = 1681 = 41 × 41.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Observar.</strong> Con la parte 1 el alumno ve la regla de los cuadrados y la escribe como conjetura, no como verdad.',
          '<strong>Desconfiar.</strong> Antes de la parte 2, adivina hasta dónde llegará la fórmula. Casi nadie dice cuarenta.',
          '<strong>Buscar el contraejemplo.</strong> El programa no se cansa: prueba caso tras caso hasta que uno falla. Un solo caso basta para tumbar una regla.',
          '<strong>Explicar por qué falla.</strong> En n = 40, los dos primeros términos suman 40 × 41, y al sumar 41 queda 41 × 41. El alumno lo escribe en su cuaderno sin computadora.',
          '<strong>Volver a la parte 1.</strong> ¿Y la suma de impares? Ahí sí existe una demostración: un cuadrado de n por n se arma agregando una "L" de 2n menos 1 cuadraditos. El programa sugirió la idea; la demostración la hace el alumno.'
        ] },
        { kind: 'p', mt: true, html: 'Esto es lo que entendemos por enseñar a pensar. Una herramienta de IA puede dar la respuesta a "¿es primo 1681?", pero no enseña a preguntarse si una regla que funcionó cuarenta veces funcionará la vez cuarenta y uno. Ese hábito, desconfiar con método, sirve igual en un examen del colegio, en una olimpiada o en un trabajo con datos.' }
      ]
    },
    {
      id: 'problemas',
      eyebrow: 'Práctica',
      h2: '¿Qué problemas puede resolver su hijo este verano?',
      lede: 'Estos cinco son nuestros, escritos para esta página, con respuesta. Se pueden resolver a mano y luego comprobar con un programa corto, o al revés.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cinco problemas de verano para 10 a 15 años (nuestros, con respuestas comprobadas en Python)', head: ['N.°', 'Problema', 'Respuesta'], rows: [
          ['1', 'Sume los diez primeros números impares: 1 + 3 + 5 + ... + 19.', '100, que es 10 × 10'],
          ['2', '¿Cuántos números del 1 al 100 son múltiplos de 3 o de 5 (o de ambos)?', '47'],
          ['3', '¿Cuál es el menor número mayor que 1 que deja resto 1 al dividirlo entre 2, 3, 4, 5 y 6?', '61'],
          ['4', '¿En cuántos ceros termina el producto 1 × 2 × 3 × ... × 25?', '6'],
          ['5', 'Compruebe que 2 + 4 + 6 + 8 + 10 es igual a 5 × 6. ¿Qué regla sospecha para los primeros n pares?', '30 en ambos casos; la conjetura es n × (n + 1)']
        ] },
        { kind: 'source', html: 'Problemas y respuestas: nuestros. Las respuestas se comprobaron con un programa en Python 3 escrito por nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Cómo usarlos en casa',
          left: [
            'Dé un problema por día, no los cinco juntos. Pida primero un intento a mano, aunque salga mal, y después la comprobación con la computadora.',
            'Si su hijo todavía no programa, puede resolverlos con papel y lápiz y traerlos a la clase de prueba: el mentor le enseñará a comprobar uno de ellos con Python.'
          ],
          rightH3: 'Lo que buscamos que aprenda',
          right: [
            'En el problema 2, que contar dos veces los múltiplos de 15 es un error típico. En el 3, que un resto común se convierte en un mínimo común múltiplo más 1.',
            'En el 4, que los ceros dependen de cuántas veces aparece el 5 como factor. En el 5, que una sospecha se convierte en conjetura y luego hay que demostrarla.'
          ] }
      ]
    },
    {
      id: 'vocabulario',
      eyebrow: 'Matemática en inglés',
      h2: '¿Mi hijo puede aprender matemática en inglés sin perderse?',
      lede: 'Sí, si el vocabulario llega de a pocos y con ejemplos en pantalla. La matemática tiene la ventaja de que los símbolos son los mismos en cualquier idioma; lo que cambia son unas pocas palabras.',
      body: [
        { kind: 'table', numCols: [], caption: 'Diez palabras de matemática en inglés que aparecen en el primer mes (nuestra lista)', head: ['En inglés', 'En castellano', 'Dónde aparece en esta página'], rows: [
          ['odd / even', 'impar / par', 'Parte 1 del ejemplo y problema 5'],
          ['sum / total', 'suma / total', 'Parte 1 del ejemplo'],
          ['square number', 'cuadrado perfecto', 'Los totales 1, 4, 9, 16, 25, 36'],
          ['prime', 'primo', 'Parte 2 del ejemplo'],
          ['divisor / factor', 'divisor / factor', 'La función is_prime y el problema 4'],
          ['remainder', 'resto', 'Problema 3'],
          ['multiple', 'múltiplo', 'Problema 2'],
          ['pattern', 'patrón', 'Toda la clase'],
          ['conjecture', 'conjetura', 'Lo que el alumno sospecha'],
          ['counterexample', 'contraejemplo', 'n = 40 en la parte 2']
        ] },
        { kind: 'p', mt: true, html: 'Las clases son en vivo y solo en inglés, y no lo presentamos como un obstáculo: para un escolar de San Miguel, una hora a la semana razonando en voz alta en inglés es práctica que el colegio difícilmente le da. En el EF EPI 2025, Lima obtiene 555 puntos y entra en el nivel alto; el promedio peruano en escritura es 514 y en lectura 540. El mentor habla con calma, escribe cada término nuevo y acepta que el alumno piense en castellano mientras arma la frase en inglés.' },
        { kind: 'p', html: 'Si su hijo tiene hermanos menores en primaria, nuestra página sobre <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> explica por dónde empiezan los de 6 a 9 años.' }
      ]
    },
    {
      id: 'calendario',
      eyebrow: 'Calendario',
      h2: '¿Cuándo empiezan las clases del colegio en 2027?',
      lede: 'Todavía no hay fecha oficial. Al 9 de noviembre de 2026 no encontramos en gob.pe la norma del MINEDU con el calendario del año escolar 2027.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que sí está publicado',
          left: [
            'El año escolar 2026 empezó sus clases el 16 de marzo y cerró su último bloque lectivo el 18 de diciembre de 2026, según la Tabla 1 de la RM 501-2025-MINEDU. El 14 de octubre de 2026, el MINEDU anunció que ya despachaba los materiales para el año escolar 2027.',
            'Si 2027 se parece a 2026, el verano irá de fines de diciembre a mediados de marzo. Lo decimos como referencia, no como fecha: la confirmará el MINEDU.'
          ],
          rightH3: 'Lo que eso significa para usted',
          right: [
            'No hace falta esperar al calendario para empezar. Nuestras clases son mensuales: su hijo empieza en enero, o cuando usted decida, y continúa en marzo con el mismo mentor si le sirvió.',
            'Al volver al colegio la clase pasa a otra hora del día. Lo único que cambia es eso.'
          ] },
        { kind: 'p', mt: true, html: 'Tampoco hay que inscribirse en una fecha cerrada ni comprar un paquete de verano. No otorgamos notas ni certificados del sistema educativo peruano y no tenemos relación con el MINEDU ni con ningún colegio; al cerrar un curso, su hijo recibe solo un certificado de culminación emitido por Modern Age Coders.' }
      ]
    },
    {
      id: 'horas',
      eyebrow: 'Perú e India',
      h2: '¿Qué hora es en la India cuando en San Miguel es de mañana?',
      lede: 'Es de tarde o de noche. La India está 10 horas y 30 minutos por delante de Perú, y la diferencia no cambia en ningún mes porque ningún país adelanta el reloj.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuatro horas de San Miguel convertidas a la hora de la India (ejemplos, no un horario de clases)', head: ['Hora en San Miguel', 'Hora en la India', 'Fecha en la India'], rows: [
          ['7:30 a. m.', '6:00 p. m.', 'La misma'],
          ['10:30 a. m.', '9:00 p. m.', 'La misma'],
          ['1:00 p. m.', '11:30 p. m.', 'La misma'],
          ['5:30 p. m.', '4:00 a. m.', 'El día siguiente']
        ] },
        { kind: 'source', html: 'Zona horaria de Perú: UTC-5 en todo el año, sin cambio estacional desde 1994 (tzdata, America/Lima; INACAL publica la hora oficial). Zona horaria de la India: UTC+5:30, fija. Conversión: sumar 10 horas y 30 minutos a la hora peruana.' },
        { kind: 'p', mt: true, html: 'En verano, la mañana de San Miguel coincide con la tarde de los mentores. Cuando usted reserve, verá las horas en su propio reloj; el mentor las ve en el suyo. Según el INEI, el 92,5 % de los adolescentes de 12 a 18 años usó internet en el segundo trimestre de 2026, así que conectarse no suele ser el problema; tener una computadora con teclado, sí, y es lo único indispensable.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se nota que el verano sirvió?',
    lede: 'Cuatro hábitos de razonamiento, propios, que el mentor busca en cada alumno.',
    table: { caption: 'Cuatro hábitos de razonamiento matemático con programación (nuestros)', head: ['Hábito', 'Qué hace su hijo', 'Ejemplo de esta página'], rows: [
      ['Calcular con sentido', 'estima el resultado antes de calcularlo', 'sabe que el problema 1 dará cerca de 100'],
      ['Ver patrones', 'genera casos y describe la regla en una frase', 'los totales 1, 4, 9, 16 son cuadrados'],
      ['Desconfiar con método', 'busca el caso que rompe una regla', 'encuentra n = 40'],
      ['Explicar', 'justifica por qué funciona, sin computadora', 'arma el cuadrado con capas en forma de L']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pregunte "¿y cómo se comprueba que es cierto?" en lugar de "¿cuánto salió?". La primera pregunta entrena el hábito que buscamos.',
      'Recibirá notas breves del mentor después de las clases. Puede escribirnos por WhatsApp en castellano.'
    ] },
    right: { h3: 'Para el alumno', ps: [
      'Una regla que funciona muchas veces todavía puede fallar. Pruébela.',
      'Cuando encuentre un contraejemplo, celébrelo: aprendió algo que el patrón escondía.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos de matemática y programación',
    lede: 'Cada uno en vivo y en inglés, para un grupo o para un solo alumno, y todos se pueden empezar en las vacaciones.',
    bands: [
      { num: 'I', h3: 'Base numérica', sub: 'Para afirmar lo de primaria', courses: [
        { code: 'VAC / BASE / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria', blurb: 'De 1° a 5° grado, con ubicación por nivel.' },
        { code: 'VAC / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido del número antes que trucos, hasta los 10 años.' },
        { code: 'VAC / BASE / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Matemática védica', blurb: 'Cálculo rápido con sus razones, no de memoria.' }
      ] },
      { num: 'II', h3: 'Secundaria y olimpiada', sub: 'Para ir más lejos', courses: [
        { code: 'VAC / SEC / 01', slug: 'complete-high-school-mathematics-mastery', title: 'Matemática de secundaria', blurb: 'Del álgebra al cálculo, por grados.' },
        { code: 'VAC / SEC / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de olimpiada', blurb: 'Teoría de números, combinatoria y geometría con problemas originales.' },
        { code: 'VAC / SEC / 03', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'De los datos a las conclusiones, con simulaciones.' }
      ] },
      { num: 'III', h3: 'Programación', sub: 'Para escribir el código', courses: [
        { code: 'VAC / PROG / 01', slug: 'python-ai-kids-masterclass', title: 'Python e IA para niños', blurb: 'Primeros programas escritos, desde los 9 años.' },
        { code: 'VAC / PROG / 02', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'De cero a proyectos propios, desde los 13.' },
        { code: 'VAC / PROG / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Descomponer problemas en pasos, de 7 a 12 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organiza una clase de matemática con programación?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'La cabeza fresca para los problemas largos.' },
      { time: 'Mediodía', l: 'Antes del almuerzo, si la tarde es de playa o de parque.' },
      { time: 'A medida', l: 'Clases individuales a la hora que usted fije.' }
    ],
    cells: [
      { h3: 'Primero a mano', p: 'Cada problema se intenta en papel antes de abrir Python.' },
      { h3: 'Después con código', p: 'El programa comprueba, genera casos y busca contraejemplos.' },
      { h3: 'Siempre explicado', p: 'El alumno dice en inglés por qué funciona lo que hizo.' },
      { h3: 'Mentor fijo', p: 'La misma persona todo el curso, que sigue sus avances.' },
      { h3: 'Informe breve', p: 'Qué se trabajó y qué viene, después de las clases.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte alumnos de nivel parecido, o uno solo.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Proyectos de alumnos que empezaron, como su hijo, por la matemática y el código. Más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas publicadas en Google por padres y alumnos, sin cambios, en el inglés en que fueron escritas.',

  fees: {
    h2: 'Precios para familias de San Miguel',
    lede: 'Aquí verá la mensualidad en dólares estadounidenses. El pago es con tarjeta y su banco convierte el importe, de modo que el monto final depende del tipo de cambio que aplique ese día.',
    free: ['Una clase de prueba sin costo', 'Dos o tres problemas para ubicar el nivel', 'Sin tarjeta y sin obligación'],
    group: ['Quince a veinte alumnos de nivel parecido', 'Un mismo mentor durante el curso', 'Clases en vivo cada semana', 'Pago mensual, sin contrato'],
    one: ['Su hijo y el mentor, nadie más', 'El temario del colegio o de olimpiada que necesite', 'El horario que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en San Miguel: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se dictan en inglés, en vivo, y esa es una ventaja para su hijo: refuerza matemática, aprende a programar y habla inglés en la misma hora. El mentor va despacio y escribe cada palabra nueva. Lima tiene 555 puntos en el EF EPI 2025, dentro del nivel alto.' },
      { q: '¿Sirve como reforzamiento de matemática para el colegio?', a: 'Sí, como práctica de razonamiento alineada con las cuatro competencias matemáticas del CNEB. No reemplaza al colegio ni da notas; el colegio sigue siendo el que evalúa.' },
      { q: '¿Mi hijo necesita saber programar?', a: 'No. El curso de matemática a través de la programación empieza sin código. Primero se aprende lo justo de Python para comprobar un cálculo, y el resto llega con los problemas.' },
      { q: '¿Para qué edades es?', a: 'Para escolares de 10 a 15 años, de 5° de primaria a 3° de secundaria aproximadamente. Hay cursos para menores y para 4° y 5° de secundaria.' },
      { q: '¿Preparan para la ONEM?', a: 'Entrenamos razonamiento de olimpiada con problemas nuestros. La ONEM es del MINEDU, la inscripción se hace por el colegio y no reproducimos sus problemas ni prometemos resultados.' },
      { q: '¿Cuánto dura el programa de vacaciones?', a: 'Lo que usted decida. No vendemos un paquete cerrado: son nuestras clases mensuales, que se empiezan en el verano y continúan si a su hijo le sirven.' },
      { q: '¿A qué hora serían las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 10:30 a. m. en San Miguel corresponden a las 9:00 p. m. en la India.' },
      { q: '¿La Municipalidad de San Miguel organiza estas clases?', a: 'No. No tenemos relación con la municipalidad ni con el MINEDU. Somos una academia en línea con mentores en la India.' },
      { q: '¿En qué moneda se paga?', a: 'En dólares estadounidenses, con tarjeta, cada mes. El banco convierte el importe. La clase de prueba es gratis.' },
      { q: '¿Qué recibe mi hijo al terminar?', a: 'Un certificado de culminación emitido por Modern Age Coders, que no es un documento oficial del sistema educativo, y los programas y problemas que resolvió durante el curso.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Seguir leyendo',
    lede: 'Lecturas útiles para familias que combinan matemática y programación.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Programación e IA en Perú', p: 'La página general para todo el país.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La ruta para los de 6 a 12 años.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para colegios bilingües y familias que prefieren leer en inglés.' },
      { href: '/course-atlas', label: 'Course atlas', p: 'El mapa de todos nuestros cursos por edad y materia.' },
      { href: '/real-coding-classes', label: 'Real coding classes', p: 'Qué distingue una clase en vivo de un video grabado.' },
      { href: '/courses', label: 'All courses', p: 'Catálogo completo.' }
    ]
  },

  start: {
    h2: 'Reserve la clase de prueba de matemática y programación',
    lede: 'En la clase de prueba el mentor plantea a su hijo un par de problemas propios, en un inglés sencillo, y le muestra cómo comprobar uno con Python. Con lo que observe le recomendamos el curso y el formato, sin ningún compromiso.',
    readFirst: 'Si quiere leer antes: <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">la guía para Perú</a> y <a class="ag-inline-link" href="/course-atlas">Course atlas</a>, con todos los cursos (en inglés).',
    note: 'Clases solo en inglés, en tiempo real, con mentores que enseñan desde la India. Por WhatsApp puede escribir en castellano.',
    formNote: 'Gratis, sin datos de pago, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Matemática y código', links: [
        { href: '/courses/maths-through-coding', label: 'Matemática con Python' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Matemática de secundaria inicial' },
        { href: '/courses/middle-school-math-competitions-course', label: 'Competencias de matemática' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía para Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/english-medium-coding-classes-lima', label: 'Clases en inglés en Lima' },
        { href: '/course-atlas', label: 'Mapa de cursos' }
      ] }
    ],
    bottomRight: 'Cuarenta casos no son una demostración'
  },

  personalityCss: `
.ag-root.ag-vac .ag-hero h1 { max-width: 22ch; letter-spacing: -0.01em; }
.ag-root.ag-vac .ag-capsule { border-left-width: 5px; }
.ag-root.ag-vac .ag-table td:first-child { white-space: nowrap; }
.ag-root.ag-vac .ag-code pre { line-height: 1.55; }
.ag-root.ag-vac .ag-grid-3 h3 { font-size: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (district populations) and Boletín TIC II trimestre 2026; MINEDU CNEB (competencies 23 to 26, weekly maths hours), ENLA 2025 notes (announcement and 13 May 2026 results), RM 501-2025-MINEDU Tabla 1 (read by eye), materials note of 14 October 2026; El Peruano (ONEM 2026) and UGEL 06 oficio (ONEM levels); EF EPI 2025; tzdata and INACAL. Read 8 and 9 November 2026. The competency-to-code mapping, the practice set, the vocabulary list and the example are ours.',
    localProject: 'Conjecture and counterexample in Python for a San Miguel student of 10 to 15: part 1 adds odd numbers and prints totals 1, 4, 9 up to n = 6 | add 11 | total 36 | n * n = 36; part 2 tests whether n * n + n + 41 is always prime and prints Prime for n = 0 to 39 and Breaks at n = 40 -> 1681 = 41 x 41. Plus five original problems (answers 100, 47, 61, 6, 30). Lesson family: a pattern that holds for many cases is a conjecture; test it and hunt for the first counterexample.',
    requiredMentions: ['1681 = 41 x 41', 'Prime for n = 0 to 39', 'n = 6 | add 11 | total 36 | n * n = 36', 'Con 189,301 habitantes, San Miguel', 'Cómo la trabajamos programando (nuestro)', 'resultados similares a los obtenidos en 2023 y 2024 en Lectura y Matemática', 'son 180 minutos semanales en la jornada regular y 270 en la completa', 'el 92,5 % de los adolescentes de 12 a 18 años usó internet', 'Cuarenta casos no son una demostración', 'counterexample'],
    sources: [
      { claim: 'San Miguel 189,301; Lima 314,840; Pueblo Libre 99,937; Magdalena del Mar 82,146; Bellavista 80,953; La Perla 68,082; Lima Metropolitana 10,141,775 (Censos Nacionales 2025).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'CNEB maths competencies 23 to 26; Matemática weekly hours in primaria, secundaria JER and JEC; 45-minute teaching hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2025 applied 11 to 13 November 2025 to more than 200,000 students in 8,700 schools.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'ENLA 2025 results similar to 2023 and 2024; 2° secundaria maths gains over 2023.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'ONEM 2026 had more than 1.7 million participants.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'ONEM 2026 levels by secundaria grade.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: '2026 school year from 16 March to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Internet use 92.5% among 12 to 18 year olds, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high); Peru writing 514, reading 540.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5, India UTC+5:30, no DST in either.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Municipal summer programmes in San Miguel: not stated; the municipal site did not connect (retried once, 9 November 2026) and gob.pe had no San Miguel summer notes.',
      'Adding neighbouring district populations into a total: refused; each figure is printed as INEI publishes it.',
      'ENLA achievement-level percentages: not used; the MINEDU results pages were blocked, so only the gob.pe press-release wording is quoted.',
      'ONEM problems or solutions: not reproduced; the practice set is ours.',
      'A camp length, start date or summer price: refused.',
      'Spanish-language teaching, MINEDU or municipal endorsement, official certificate: refused.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

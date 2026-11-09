// SHIP: market (es subject door, maths) | razonamiento matemático: el curso del colegio y de la pre, con práctica propia en inglés | finite differences: difference rows until constant, the next term, and two rules that fit the same five numbers
'use strict';
// Razonamiento matemático clases online Perú (ag- Spanish subject door, Peru cluster row PE118, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted". Admission exams are in Spanish: the page explains them from the universities' own pages and offers maths
// reasoning practice in English; no admission promise. Not an academia preuniversitaria; not connected to any university.
// Angle: the student of secundaria (or the parent) who typed "razonamiento matemático clases", "clases de razonamiento
// matemático online", "razonamiento matemático para secundaria / para la pre". Spine: what "razonamiento matemático" is in
// Peru (a school course and a block of admission tests) and how it relates to the CNEB competencies; what the universities'
// own pages say about it (U de Lima, UNI, PUCP, Ley 30220); the families of problems (from the topic list a contest
// organiser publishes); an original 11-problem practice set with answers checked in Python; one lesson in depth: sucesiones
// by finite differences, and why five numbers do not fix a rule; how studying it in English works; a plan of our own.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/razonamiento-matematico-clases-online-peru/,
// fetched 2026-11-08; FACTS = facts-school/FACTS.md):
//  Universidad de Lima, Guía del postulante 2027-1(A) (FACTS 84-88): "El examen de escolares es una prueba única de aptitud
//    académica y de conocimientos"; objectives table "RAZONAMIENTO MATEMÁTICO ... Evaluar la capacidad y habilidad de análisis,
//    generalización y asociación, orientada al uso de estrategias y procedimientos para resolver problemas contextualizados de
//    cantidad, forma, regularidad, equivalencia, movimiento y localización."; "RAZONAMIENTO Y LECTURA"; "La calificación final
//    se obtiene asignando un puntaje por cada respuesta correcta y restándolo por cada respuesta equivocada. Las preguntas no
//    contestadas no aumentan ni restan puntos."; "Domingo 15 de noviembre de 2026, 7.00 horas"; results "a partir de las 19.00
//    horas"; calculators not allowed ("calculadoras").
//  UNI Admisión 2026-2 (FACTS 67-69): "consiste en tres pruebas tomadas en tres días (lunes, miércoles y viernes)"; "1. Primera
//    prueba: - APTITUD ACADÉMICA - HUMANIDADES 2. Segunda prueba: - MATEMÁTICA 3. Tercera prueba: - Física - Química";
//    "Lunes 10, miércoles 12 y viernes 14 de agosto de 2026".
//  CEPRE-UNI 2026-2 schedule (FACTS 73, 74): weekly graded practice on Sundays; "DOMINGO 02DE AGOSTO – EXAMEN FINAL PRESENCIAL".
//  PUCP Guía del postulante (FACTS 66, 78, 80): Ley 30220 "un examen de conocimientos como proceso obligatorio principal";
//    "con especial énfasis en las áreas de comprensión lectora y matemáticas"; La Primera Opción "EVALUACIÓN ACADÉMICA: 29 de
//    noviembre" (2026).
//  CNEB (FACTS 39, 41, 55, 57): four maths competencies; secundaria Matemática 4 (JER) and 6 (JEC) hours; primaria 5 and 4.
//  MINEDU ENLA 2025 note (FACTS 59, 61): grades tested; "En 2.º grado de secundaria, se registran avances en Matemática frente
//    al 2023".
//  Binaria binational rules 2026 (FACTS 121, raw text): topic list "Razonamiento Matemático: Secuencias gráficas y numéricas.
//    Conteo de figuras. ... Problemas de edades. Planteo de Ecuaciones. Problemas de percepción espacial." (Nivel 1);
//    "Razonamiento lógico (incluye verdades y mentiras). Problemas de objetos que se mueven a rapidez constante. Problemas que
//    involucren orden de datos." (Nivel 2); "Problemas con relojes (incluye ángulo formado por las manecillas del reloj).
//    Sumatorias básicas." (Nivel 3).
// Our own problems, checked with rm_set.py (python3 -I): 43, 162, 18, 130.0, 8, 10, 70, 2.0, Pedro, 80, 74.
// Our own example (sucesiones.py, python3 -I), exact output in OUT below.
// Lesson family: finite differences: take differences until a row is constant, rebuild the next term from the bottom up;
// the same method gives 31 for 1, 2, 4, 8, 16, so five numbers alone do not fix a rule.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def diferencias(serie):',
  '    return [b - a for a, b in zip(serie, serie[1:])]',
  '',
  'def siguiente(serie):',
  '    if len(set(serie)) == 1:',
  '        return serie[0]',
  '    return serie[-1] + siguiente(diferencias(serie))',
  '',
  'for serie in ([3, 7, 13, 21, 31], [1, 2, 4, 8, 16]):',
  '    nivel = serie',
  '    while len(nivel) > 1 and len(set(nivel)) > 1:',
  '        print(nivel)',
  '        nivel = diferencias(nivel)',
  "    print(nivel, '<- constante')",
  "    print('Siguiente termino:', siguiente(serie))",
  '    print()'
].join('\n');

const OUT = [
  '[3, 7, 13, 21, 31]',
  '[4, 6, 8, 10]',
  '[2, 2, 2] <- constante',
  'Siguiente termino: 43',
  '',
  '[1, 2, 4, 8, 16]',
  '[1, 2, 4, 8]',
  '[1, 2, 4]',
  '[1, 2]',
  '[1] <- constante',
  'Siguiente termino: 31'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Razonamiento matemático' },
  slug: 'razonamiento-matematico-clases-online-peru',
  code: 'ram',
  accent: '#76382C',
  accentRationale: 'Razonamiento matemático: a brick red-brown #76382C, the colour of a well-used practice notebook cover, between the clay of the entry page and the medal red of the ONEM page; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases online de razonamiento matemático',
  title: 'Razonamiento matemático: clases online en vivo y en inglés',
  description: 'Clases online de razonamiento matemático para escolares en Perú: sucesiones, edades, relojes y planteo de ecuaciones, en vivo, en inglés y con práctica propia.',
  ogDescription: 'Qué es el razonamiento matemático en el colegio y en los exámenes de admisión, once problemas propios con respuestas comprobadas y una lección de sucesiones en Python.',
  twitterDescription: 'Razonamiento matemático para secundaria, en clases en vivo y en inglés, con práctica original y respuestas comprobadas.',
  pageName: 'Clases online de razonamiento matemático en Perú',
  webPageDescription: 'Guía para escolares y familias en Perú sobre el razonamiento matemático: qué es como curso escolar y como parte de los exámenes de admisión según las propias universidades (Universidad de Lima, UNI, PUCP), qué familias de problemas lo forman, una práctica original de once problemas con respuestas comprobadas en Python, una lección de sucesiones por diferencias y un plan propio, con clases en vivo y en inglés.',
  courseDescription: 'Clases en vivo y en línea de razonamiento matemático para escolares de primaria y secundaria en Perú, dictadas solo en inglés: sucesiones, conteo de figuras, edades, móviles, relojes, orden de información y planteo de ecuaciones, en clase grupal o individual, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Razonamiento matemático',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es', label: 'Qué es' },
    { href: '#admision', label: 'Admisión' },
    { href: '#practica', label: 'Práctica' },
    { href: '#sucesiones', label: 'Sucesiones' },
    { href: '#plan', label: 'Plan' }
  ],
  eyebrow: 'Perú &middot; Razonamiento matemático &middot; Primaria, secundaria y 5° de secundaria',
  h1: 'Clases de razonamiento matemático online, en vivo y en inglés',
  lede: 'En Perú, razonamiento matemático es a la vez un curso del colegio y una parte de casi todos los exámenes de admisión. Esta página explica qué abarca, qué dicen las propias universidades, trae once problemas nuestros con sus respuestas y muestra cómo trabajamos una sucesión paso a paso, en clases que dictamos en inglés.',
  secondaryCta: { href: '#practica', label: 'Ir a los once problemas' },
  wa: 'Hola Modern Age Coders, busco clases online de razonamiento matemático para un escolar en Perú. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; problemas propios con la respuesta comprobada',
  spec: [
    ['Para quién', 'De 4° de primaria a 5° de secundaria'],
    ['Temas', 'Sucesiones, edades, móviles, relojes, conteo'],
    ['Enfoque', 'Entender el patrón, no memorizar trucos'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés, con los términos en español'],
    ['Admisión', 'Práctica de razonamiento, sin promesa de ingreso']
  ],
  capsuleQ: 'En resumen',
  capsule: 'El razonamiento matemático es el curso y la parte de los exámenes que mide cómo se resuelve un problema nuevo: sucesiones, conteo de figuras, edades, móviles, relojes y planteo de ecuaciones. Modern Age Coders lo enseña con clases en vivo, en línea y en inglés a escolares de primaria y secundaria en todo el Perú, con problemas escritos por nosotros y respuestas comprobadas, en clase grupal o individual y a cualquier hora. Los exámenes de admisión son en español y no prometemos ingresos.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para el razonamiento matemático, por etapa',
    lede: 'Cálculo ágil en primaria, una base algebraica firme en los primeros años de secundaria y la matemática completa para quien llega a 5°.',
    items: [
      { course: 'mental-maths-mastery-kids', code: 'RAM / 01', title: 'Cálculo mental con sentido', alt: 'Imagen del curso de cálculo mental para niños', note: 'De 5 a 10 años. Descomponer números, estimar y comprobar antes de escribir: la base de las cuatro operaciones rápidas que pide todo problema de razonamiento.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'RAM / 02', title: 'Matemática de 1° a 3° de secundaria', alt: 'Imagen del curso completo de matemática de secundaria inicial', note: 'Ecuaciones, proporciones y geometría plana con la profundidad que hace falta para plantear un problema por cuenta propia.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'RAM / 03', title: 'Matemática para 4° y 5° de secundaria', alt: 'Imagen del curso completo de matemática de secundaria superior', note: 'Funciones, sucesiones, combinatoria y probabilidad para quien se acerca al final del colegio con la universidad en mente.' }
    ]
  },

  sections: [
    {
      id: 'que-es',
      eyebrow: 'Qué es',
      h2: '¿Qué es el razonamiento matemático?',
      lede: 'Es la parte de la matemática que mide cómo se enfrenta un problema que no se parece a ningún ejercicio del cuaderno. En Perú tiene nombre propio: muchos colegios lo dictan como curso aparte y las universidades lo evalúan en sus exámenes de admisión, a veces bajo el rótulo de aptitud académica.',
      body: [
        { kind: 'p', html: 'El Currículo Nacional (CNEB) no tiene un área llamada razonamiento matemático: tiene un área de Matemática con cuatro competencias, que son resolver problemas de cantidad; de regularidad, equivalencia y cambio; de gestión de datos e incertidumbre; y de forma, movimiento y localización. El "razonamiento matemático" que los colegios y las academias enseñan es una manera de practicar esas competencias con problemas cortos, ingeniosos y cronometrados.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Familias de problemas de razonamiento matemático, según el temario que publica un organizador de concursos escolares', head: ['Familia', 'Ejemplos de temas en el temario', 'Desde qué grado aparece en ese temario'], rows: [
          ['Sucesiones', 'Secuencias gráficas y numéricas', '4° y 5° de primaria'],
          ['Conteo', 'Conteo de figuras, conteo de números', '4° y 5° de primaria'],
          ['Edades y planteo', 'Problemas de edades, planteo de ecuaciones', '4° y 5° de primaria'],
          ['Lógica', 'Razonamiento lógico, verdades y mentiras, orden de datos', '6° de primaria y 1° de secundaria'],
          ['Móviles', 'Objetos que se mueven a rapidez constante', '6° de primaria y 1° de secundaria'],
          ['Relojes y sumatorias', 'Ángulo entre las manecillas, sumatorias básicas', '2° y 3° de secundaria']
        ] },
        { kind: 'source', html: 'Fuente: temario de "Razonamiento Matemático" por niveles del reglamento de los Concursos Binacionales de Matemática 2026 de Binaria Matemática, leído el 8 de noviembre de 2026. Lo citamos porque es un temario publicado con detalle por grado; la agrupación en familias es nuestra. Cada colegio y cada academia arma su propio programa.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que no es',
          left: [
            'No es una colección de trucos para adivinar. Un truco sirve para un tipo de problema; cuando el examen cambia un detalle, el truco falla. Lo que sí dura es entender por qué funciona un método.',
            'Tampoco es solo velocidad. La rapidez llega sola cuando el estudiante reconoce la estructura de un problema; forzarla antes produce errores de lectura, que son los más caros en un examen que resta puntos.'
          ],
          rightH3: 'Por qué cuesta',
          right: [
            'Porque obliga a traducir un texto a una ecuación o a un dibujo, y esa traducción no se enseña con fórmulas. La mitad del trabajo es leer.',
            'Porque mezcla temas: un problema de edades es álgebra, uno de relojes es proporcionalidad y uno de conteo de figuras es combinatoria. Quien estudió cada tema por separado no siempre ve la conexión.'
          ] }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'En el colegio',
      h2: '¿Cuántas horas de matemática tiene un escolar peruano y dónde entra el razonamiento?',
      lede: 'Según el CNEB, la secundaria tiene cuatro horas pedagógicas semanales de Matemática en la jornada regular y seis en la jornada escolar completa; la primaria, cinco en 1° y 2° y cuatro de 3° a 6°. El razonamiento matemático suele vivir dentro de esas horas o en las horas de libre disponibilidad de cada colegio.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Horas pedagógicas semanales de Matemática según el CNEB', head: ['Nivel y jornada', 'Horas por semana', 'Minutos por semana (cálculo nuestro)'], rows: [
          ['Primaria, 1° y 2°', '5', '225'],
          ['Primaria, 3° a 6°', '4', '180'],
          ['Secundaria, jornada regular', '4', '180'],
          ['Secundaria, jornada escolar completa', '6', '270']
        ] },
        { kind: 'source', html: 'Fuente: planes de estudio de primaria y secundaria del Currículo Nacional de la Educación Básica (MINEDU), con la hora pedagógica de 45 minutos; revisados el 8 de noviembre de 2026. Los minutos son nuestra multiplicación.' },
        { kind: 'p', mt: true, html: 'La evaluación nacional confirma que vale la pena reforzar. En su nota sobre la ENLA 2025, el MINEDU informó que en 2° de secundaria "se registran avances en Matemática frente al 2023", el primer cambio positivo en ese grado desde el cierre de escuelas, y que a nivel nacional los resultados de Lectura y Matemática fueron similares a los de 2023 y 2024. Un avance, pero lento. No usamos la ENLA para ubicar a ningún estudiante: el punto de partida lo decide el mentor en la clase de prueba.' },
        { kind: 'p', html: 'Nuestras clases no reemplazan al curso del colegio ni dan notas. Acompañan: si el profesor de su hijo está viendo edades, practicamos edades; si viene un examen bimestral, lo preparamos. Lo que añadimos es tiempo para equivocarse con calma y alguien que pregunte "por qué" en cada paso.' }
      ]
    },
    {
      id: 'admision',
      eyebrow: 'Exámenes de admisión',
      h2: '¿Qué dicen las universidades sobre el razonamiento matemático en sus exámenes?',
      lede: 'Lo dicen en sus propias guías, y conviene leerlas ahí. Los exámenes de admisión se rinden en español, nosotros enseñamos en inglés y no preparamos para ningún examen concreto ni prometemos ingresos; lo que sí hacemos es entrenar el razonamiento que esas pruebas miden.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que publican tres universidades sobre la parte de razonamiento y matemática de su admisión', head: ['Universidad', 'Lo que dice su guía', 'Dato práctico'], rows: [
          ['Universidad de Lima (2027-1, examen de escolares)', 'Área de Razonamiento Matemático: evaluar análisis, generalización y asociación para resolver problemas de cantidad, forma, regularidad, equivalencia, movimiento y localización', 'Domingo 15 de noviembre de 2026, 7.00 horas; cada respuesta equivocada resta'],
          ['Universidad Nacional de Ingeniería (2026-2)', 'Tres pruebas en tres días: Aptitud Académica y Humanidades; Matemática; Física y Química', 'Lunes 10, miércoles 12 y viernes 14 de agosto de 2026'],
          ['Pontificia Universidad Católica del Perú', 'Sus exámenes evalúan lo aprendido en secundaria, con especial énfasis en comprensión lectora y matemáticas', 'La Primera Opción, para 5° de secundaria: evaluación académica el 29 de noviembre de 2026']
        ] },
        { kind: 'source', html: 'Fuentes: Universidad de Lima, Guía del postulante 2027-1(A); UNI, página de Admisión 2026-2; PUCP, Guía del postulante. Todas leídas el 8 de noviembre de 2026. La PUCP cita además la Ley Universitaria 30220: la admisión es un concurso público con "un examen de conocimientos como proceso obligatorio principal".' },
        { kind: 'p', mt: true, html: 'Fíjese en la frase de la Universidad de Lima: cantidad, forma, regularidad, equivalencia, movimiento y localización. Son, casi palabra por palabra, las competencias de Matemática del CNEB. Es decir, el razonamiento matemático de la admisión no es otra materia: es la matemática del colegio aplicada a problemas nuevos y con reloj. Y la misma guía explica que "las preguntas no contestadas no aumentan ni restan puntos", mientras que una respuesta equivocada sí resta; saber cuándo no responder es parte del razonamiento.' },
        { kind: 'p', html: 'En la UNI, el razonamiento aparece dentro de la primera prueba, Aptitud Académica, y la matemática pesada tiene su propio día. Su centro preuniversitario, CEPRE-UNI, organizó el ciclo 2026-2 con exámenes calificados los domingos y un examen final el 2 de agosto de 2026. Ese es el modelo de la "pre": mucha práctica en español, con el formato exacto del examen. Nosotros no somos una academia preuniversitaria. Si su hijo va a postular, le recomendamos combinar la preparación en español que elija con nuestras clases de razonamiento, que le dan el método.' }
      ]
    },
    {
      id: 'practica',
      tint: 'tint',
      eyebrow: 'Práctica propia',
      h2: '¿Cómo se ve una práctica de razonamiento matemático? Once problemas con respuesta',
      lede: 'Los once problemas son nuestros, escritos para clase, uno o dos por cada familia del temario. No los tomamos de ningún examen. Cada respuesta la comprobamos con un programa corto en Python antes de publicarla.',
      body: [
        { kind: 'ol', items: [
          '<strong>Sucesión.</strong> ¿Qué número sigue? 3, 7, 13, 21, 31, … <em>Respuesta: 43.</em>',
          '<strong>Sucesión.</strong> ¿Qué número sigue? 2, 6, 18, 54, … <em>Respuesta: 162.</em>',
          '<strong>Edades.</strong> Hoy Ana tiene el triple de la edad de su hermano. Dentro de 6 años tendrá el doble. ¿Cuántos años tiene Ana hoy? <em>Respuesta: 18.</em>',
          '<strong>Relojes.</strong> ¿Qué ángulo forman las manecillas de un reloj a las 3:40? <em>Respuesta: 130°.</em>',
          '<strong>Planteo.</strong> En un corral hay gallinas y conejos: 20 cabezas y 56 patas. ¿Cuántos conejos hay? <em>Respuesta: 8.</em>',
          '<strong>Conteo de figuras.</strong> Desde un vértice de un triángulo se trazan 3 segmentos hasta el lado opuesto. ¿Cuántos triángulos hay en total en la figura? <em>Respuesta: 10.</em>',
          '<strong>Tanto por ciento.</strong> Si el 30 % de un número es 42, ¿cuánto es el 50 % de ese número? <em>Respuesta: 70.</em>',
          '<strong>Móviles.</strong> Dos ciclistas salen a la vez de dos pueblos separados 90 km, uno hacia el otro, a 20 km/h y a 25 km/h. ¿En cuántas horas se encuentran? <em>Respuesta: 2.</em>',
          '<strong>Orden de información.</strong> Rosa es mayor que Juan, Juan es mayor que Pedro y Luis es menor que Pedro. ¿Quién es el segundo más joven? <em>Respuesta: Pedro.</em>',
          '<strong>Fracciones.</strong> Un tanque está lleno hasta 2/5 de su capacidad. Se sacan 12 litros y queda lleno hasta 1/4. ¿Cuál es su capacidad? <em>Respuesta: 80 litros.</em>',
          '<strong>Cuatro operaciones.</strong> Un número de dos cifras AB cumple que AB + BA = 121 y que A es 3 más que B. ¿Cuál es el número? <em>Respuesta: 74.</em>'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Cómo se resuelven (resumen nuestro)',
          left: [
            'Edades: si el hermano tiene b años, Ana tiene 3b, y en 6 años 3b + 6 = 2(b + 6), así que b = 6 y Ana tiene 18. Relojes: a las 3:40 el minutero está a 240° y el horario a 90° + 40 × 0.5 = 110°; la diferencia es 130°.',
            'Corral: si todos fueran gallinas habría 40 patas; sobran 16, y cada conejo añade 2, así que hay 8 conejos. Triángulo: la base queda con 5 puntos, y cada par de puntos con el vértice forma un triángulo: 5 × 4 ÷ 2 = 10.'
          ],
          rightH3: 'Los que más se fallan',
          right: [
            'El tanque: 2/5 menos 1/4 es 3/20 de la capacidad, y eso son los 12 litros; la capacidad es 12 ÷ 3/20 = 80. Muchos restan 2/5 − 1/4 mal porque no buscan denominador común.',
            'El número AB: AB + BA = 11 × (A + B), así que A + B = 11, y con A − B = 3 sale A = 7, B = 4. El orden de información se resuelve dibujando una línea de edades, no de memoria: Luis, Pedro, Juan, Rosa.'
          ] },
        { kind: 'p', mt: true, html: 'Los once resultados que imprimió nuestro programa de comprobación, en orden, fueron 43, 162, 18, 130.0, 8, 10, 70, 2.0, Pedro, 80 y 74. El programa no reemplaza el razonamiento: sirve para que ni nosotros ni el estudiante demos por buena una respuesta sin revisarla.' }
      ]
    },
    {
      id: 'sucesiones',
      eyebrow: 'Una lección a fondo',
      h2: '¿Cómo se encuentra el siguiente número de una sucesión?',
      lede: 'Con un método que no depende de la inspiración: el de las diferencias. Se restan los términos vecinos, se repite con las diferencias hasta que una fila queda constante, y desde abajo se reconstruye el término que falta. Así lo trabajamos en clase, primero en el cuaderno y después en Python.',
      body: [
        { kind: 'code', label: 'El método de las diferencias, en Python', lang: 'Python', code: PY, note: 'La función siguiente suma el último término de cada fila al resultado de la fila de abajo. El mentor pregunta antes de ejecutar: "How many rows until the differences stop changing?"' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Salida exacta del programa ejecutado con Python 3 por nosotros, sin retoques.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Primera sucesión.</strong> 3, 7, 13, 21, 31 tiene diferencias 4, 6, 8, 10, y estas, diferencias 2, 2, 2. La fila constante dice que la siguiente diferencia será 12, y 31 + 12 = 43.',
          '<strong>Segunda sucesión.</strong> 1, 2, 4, 8, 16 parece "cada uno es el doble del anterior", así que la respuesta esperada sería 32. Pero el método de las diferencias, aplicado igual de bien, da 31.',
          '<strong>¿Quién tiene razón?</strong> Los dos. Con cinco números se pueden construir muchas reglas distintas; la del doble da 32 y la de las diferencias da 31. Un enunciado bien hecho debe decir la regla o dar suficientes términos para que solo una encaje.',
          '<strong>Lo que se aprende.</strong> En un examen, la respuesta es la de la regla más simple que explica todos los términos; en matemática, una regla hay que justificarla. Saber esa diferencia es razonar, no adivinar.',
          '<strong>Reto para casa.</strong> El estudiante inventa una sucesión que engañe a un compañero y escribe en una frase, en inglés, cuál es su regla.'
        ] },
        { kind: 'p', mt: true, html: 'El 31 no es una curiosidad: es el número de regiones en que quedan divididos los puntos de un círculo en un problema clásico, que empieza 1, 2, 4, 8, 16 y luego se rompe. Lo contamos en clase como historia, y la conclusión queda grabada: un patrón que se cumple cinco veces todavía no es una regla. En la página <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-miguel-lima">Vacaciones útiles de programación en San Miguel</a> hay otra lección sobre conjeturas y contraejemplos, pensada para el verano.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Se puede estudiar razonamiento matemático en inglés si los exámenes son en español?',
      lede: 'Sí, porque el método no cambia de idioma, pero con una condición: el estudiante tiene que reconocer el vocabulario de los problemas en los dos idiomas. Trabajamos con una lista bilingüe abierta durante la clase.',
      body: [
        { kind: 'table', numCols: [], caption: 'Vocabulario de razonamiento matemático en los dos idiomas (nuestra lista)', head: ['En español', 'En inglés', 'Dónde aparece'], rows: [
          ['sucesión, término', 'sequence, term', 'sucesiones numéricas y gráficas'],
          ['el triple, el doble', 'three times, twice', 'problemas de edades'],
          ['dentro de 6 años, hace 6 años', 'in 6 years, 6 years ago', 'problemas de edades'],
          ['manecillas, minutero, horario', 'hands, minute hand, hour hand', 'relojes'],
          ['rapidez constante, al encuentro', 'constant speed, towards each other', 'móviles'],
          ['capacidad, se sacan', 'capacity, are taken out', 'fracciones y tanques'],
          ['es mayor que, es menor que', 'is older than, is younger than', 'orden de información']
        ] },
        { kind: 'p', mt: true, html: 'Hay un beneficio que no esperábamos al principio. Un estudiante que explica en voz alta, en inglés, por qué en el problema de edades se suma 6 a ambos lados, después escribe esa misma explicación con más orden en español. Explicar en otro idioma obliga a ir despacio, y ir despacio es lo que más falta en razonamiento matemático.' },
        { kind: 'p', html: 'Si es la primera vez que su hijo toma clases en inglés, el mentor habla despacio, repite con otras palabras y escribe las frases clave en el chat. Para niños más pequeños, la página <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">Clases de programación para niños en inglés</a> explica cómo trabajamos con primaria. Para familias de colegios bilingües de Lima, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> (en inglés) describe el formato completo.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Un plan',
      h2: '¿Cómo organizar el estudio del razonamiento matemático durante el año?',
      lede: 'Con una familia de problemas por semana, mezclándolas cada cuatro semanas y midiendo el tiempo solo cuando el método ya está claro. Este es el plan que proponemos; ajústelo al calendario de su colegio.',
      body: [
        { kind: 'table', numCols: [], caption: 'Un ciclo de ocho semanas de razonamiento matemático (propuesta nuestra)', head: ['Semana', 'Familia', 'Meta de la semana'], rows: [
          ['1', 'Sucesiones', 'Usar el método de las diferencias sin ayuda'],
          ['2', 'Edades y planteo', 'Escribir la ecuación antes de calcular'],
          ['3', 'Conteo de figuras', 'Contar por tamaños y no olvidar ninguna figura'],
          ['4', 'Repaso mezclado', 'Diez problemas de las tres familias, sin reloj'],
          ['5', 'Móviles y relojes', 'Dibujar la situación antes de usar una fórmula'],
          ['6', 'Fracciones y tanto por ciento', 'Pasar de un texto a una fracción de algo'],
          ['7', 'Orden de información y lógica', 'Representar los datos en una línea o una tabla'],
          ['8', 'Simulacro', 'Veinte problemas con reloj, y revisión de cada error']
        ] },
        { kind: 'p', mt: true, html: 'El ciclo se puede empezar en cualquier mes. En verano encaja con las clases de enero a marzo que describe <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">Vacaciones útiles 2027 de programación online</a>; durante el año escolar, una o dos sesiones a la semana alcanzan. Las clases son a cualquier hora: entre Perú y la India hay 10 horas y 30 minutos de diferencia todo el año, de modo que una sesión a las 7:00 p. m. en Lima se dicta a las 5:30 a. m. del día siguiente en la India, y hay mentores para ese horario.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se mide el avance en razonamiento matemático?',
    lede: 'No por la cantidad de problemas resueltos, sino por lo que el estudiante hace frente a uno nuevo. Usamos cinco peldaños propios.',
    table: { caption: 'Cinco peldaños de razonamiento matemático (nuestros)', head: ['Peldaño', 'Ante un problema nuevo, el estudiante', 'Señal en clase'], rows: [
      ['1. Lee', 'subraya datos y pregunta antes de calcular', 'puede decir qué se pide sin mirar el texto'],
      ['2. Representa', 'hace un dibujo, una tabla o una línea', 'el dibujo aparece antes que los números'],
      ['3. Plantea', 'escribe una ecuación o un conteo ordenado', 'nombra la incógnita con una letra y una frase'],
      ['4. Comprueba', 'verifica con un caso o con otro método', 'detecta solo un resultado imposible'],
      ['5. Explica', 'justifica por qué su método funciona', 'enseña el problema a otro en dos minutos']
    ] },
    left: { h3: 'Para las familias', ps: [
      'El paso que más tarda es el 2: muchos escolares quieren ir directo a las cuentas. Si ve dibujos en el cuaderno de su hijo, es buena señal.',
      'Pídale que le explique un problema de edades. Si le dice qué representa cada letra, está en el peldaño 3.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Antes de calcular, escriba la pregunta con sus palabras.',
      'Cuando termine, pruebe su respuesta en el enunciado: si Ana tiene 18 y su hermano 6, ¿dentro de 6 años ella tiene el doble?'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más de matemática y razonamiento',
    lede: 'En vivo y en inglés, en grupo o uno a uno, desde primaria hasta el final del colegio.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 11 años', courses: [
        { code: 'RAM / PRI / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para los más pequeños', blurb: 'Patrones, orden y lógica con material visual, de 6 a 9 años.' },
        { code: 'RAM / PRI / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria', blurb: 'Las cuatro operaciones y fracciones con problemas de verdad.' },
        { code: 'RAM / PRI / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Estrategias de pensamiento que sirven en matemática y en código.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 12 a 16 años', courses: [
        { code: 'RAM / SEC / 01', slug: 'middle-school-math-competitions-course', title: 'Matemática de competencia', blurb: 'Problemas no rutinarios con reloj, el primo hermano del razonamiento.' },
        { code: 'RAM / SEC / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'Datos, promedios y azar, la parte que más se olvida.' },
        { code: 'RAM / SEC / 03', slug: 'maths-through-coding', title: 'Matemática con Python', blurb: 'Comprobar patrones y respuestas con programas cortos.' }
      ] },
      { num: 'III', h3: 'Al final del colegio', sub: 'De 15 años en adelante', courses: [
        { code: 'RAM / FIN / 01', slug: 'sat-math-prep-course', title: 'Matemática tipo SAT', blurb: 'Razonamiento cuantitativo en inglés, útil para estudiar fuera.' },
        { code: 'RAM / FIN / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Matemáticas', blurb: 'Para quien cursa el Diploma del Bachillerato Internacional.' },
        { code: 'RAM / FIN / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olimpiada de matemática', blurb: 'Para quien quiere problemas más difíciles todavía.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases de razonamiento matemático en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después del colegio', l: 'Una familia de problemas por sesión.' },
      { time: 'Antes de un examen', l: 'Repaso mezclado y simulacro con reloj.' },
      { time: 'En verano', l: 'Un ciclo completo de ocho semanas.' }
    ],
    cells: [
      { h3: 'Problemas escritos por nosotros', p: 'Nada copiado de exámenes; cada respuesta comprobada.' },
      { h3: 'Dibujo antes que cuenta', p: 'El mentor pide representar antes de calcular.' },
      { h3: 'Pizarra compartida', p: 'Ecuaciones y diagramas a la vista de los dos.' },
      { h3: 'Términos en dos idiomas', p: 'La clase en inglés, el vocabulario también en español.' },
      { h3: 'Errores clasificados', p: 'De lectura, de planteo o de cálculo, para saber qué corregir.' },
      { h3: 'Grupo o uno a uno', p: 'Quince a veinte escolares del mismo grado, o solo el estudiante.' }
    ]
  },

  projectsH2: 'Algunos trabajos de nuestros estudiantes',
  projectsLede: 'Quien practica razonamiento con nosotros suele terminar programando también. Algunos proyectos están en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Lo que escriben familias y estudiantes en Google, sin editar y en inglés.',

  fees: {
    h2: 'Precio de las clases de razonamiento matemático',
    lede: 'Mostramos la mensualidad en dólares estadounidenses; el pago es con tarjeta y su banco hace la conversión a su moneda al tipo de cambio de ese día.',
    free: ['Una clase de prueba con problemas de su grado', 'Diagnóstico de lectura, planteo y cálculo', 'Sin tarjeta ni compromiso'],
    group: ['Quince a veinte escolares del mismo grado', 'Un mentor durante todo el curso', 'Dos sesiones en vivo por semana', 'Mes a mes, sin permanencia'],
    one: ['El estudiante y el mentor, nadie más', 'Temas al ritmo del colegio', 'Horario que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Razonamiento matemático online: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Dictamos las clases en vivo, en línea y únicamente en inglés, y eso suma: el estudiante entrena razonamiento y gana práctica oral a la vez. Cada término importante lo trabajamos también en español para que lo reconozca en su examen. El EF EPI 2025 coloca a Lima en el nivel alto de inglés.' },
      { q: '¿Qué es el razonamiento matemático?', a: 'Es la parte de la matemática que mide cómo se resuelve un problema nuevo: sucesiones, conteo de figuras, edades, móviles, relojes, fracciones y planteo de ecuaciones. En Perú se enseña como curso en muchos colegios y se evalúa en los exámenes de admisión.' },
      { q: '¿Desde qué grado conviene empezar?', a: 'Los primeros temas, como sucesiones, conteo y edades, aparecen desde 4° y 5° de primaria en temarios publicados de concursos escolares. En secundaria se suman lógica, móviles y relojes. Se puede empezar en cualquier grado.' },
      { q: '¿Preparan para el examen de admisión?', a: 'No preparamos para ningún examen concreto ni prometemos ingresos. Los exámenes de admisión son en español y tienen su propio formato. Entrenamos el razonamiento que esos exámenes miden, y recomendamos sumar la práctica en español que su hijo elija.' },
      { q: '¿Qué evalúa la Universidad de Lima en razonamiento matemático?', a: 'Según su guía del postulante 2027-1(A), el área de razonamiento matemático evalúa la capacidad de análisis, generalización y asociación para resolver problemas de cantidad, forma, regularidad, equivalencia, movimiento y localización. Cada respuesta equivocada resta puntos y las no contestadas no suman ni restan.' },
      { q: '¿Las respuestas de sus problemas son confiables?', a: 'Cada problema de nuestras prácticas lo escribimos nosotros y comprobamos la respuesta con un programa corto en Python antes de usarlo en clase o publicarlo.' },
      { q: '¿Con qué frecuencia conviene tomar clases?', a: 'Dos sesiones a la semana en el formato grupal. En clases individuales, una o dos según el tiempo libre del estudiante y la cercanía de sus exámenes del colegio.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Una clase a las 7:00 p. m. en Perú corresponde a las 5:30 a. m. del día siguiente en la India.' },
      { q: '¿Las clases valen como nota o certificado escolar?', a: 'No. No tenemos relación con el MINEDU, con colegios ni con universidades, y nuestras clases no dan notas ni constancias válidas para el sistema educativo peruano. Al completar un curso entregamos solo un certificado propio de Modern Age Coders.' },
      { q: '¿En qué moneda se paga?', a: 'En dólares estadounidenses, con tarjeta, y su banco hace la conversión. La clase de prueba es gratis y no pide datos de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras páginas sobre matemática, programación y clases en inglés desde Perú.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-san-miguel-lima', label: 'Vacaciones útiles en San Miguel', p: 'Un verano de razonamiento matemático y Python, con conjeturas.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Cómo enseñamos a niños de primaria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra guía nacional, en inglés.' },
      { href: '/courses/maths-through-coding', label: 'Maths through coding', p: 'Matemática y programación juntas, de 10 a 15 años.' },
      { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school mathematics', p: 'La base de secundaria, en detalle.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra forma de enseñar en vivo, en inglés.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba de razonamiento',
    lede: 'En la clase de prueba el mentor le plantea a su hijo cinco problemas cortos de su grado y observa en qué paso se detiene: al leer, al plantear o al calcular. Con eso le proponemos curso y frecuencia, sin compromiso.',
    readFirst: 'Puede mirar antes <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">el curso de matemática de secundaria</a> o <a class="ag-inline-link" href="/courses/mental-maths-mastery-kids">el de cálculo mental</a>; ambas fichas están en inglés.',
    note: 'Todas las clases son en vivo y por internet, en inglés, con mentores en la India. Por WhatsApp contestamos el mismo día y puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de matemática', links: [
        { href: '/courses/mental-maths-mastery-kids', label: 'Cálculo mental' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Secundaria, 1° a 3°' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'Secundaria, 4° y 5°' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía de Perú' },
        { href: '/vacaciones-utiles-de-programacion-san-miguel-lima', label: 'Verano en San Miguel' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Cinco números no hacen una regla'
  },

  personalityCss: `
.ag-root.ag-ram .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-ram .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-ram .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ram .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ram .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Universidad de Lima Guía del postulante 2027-1(A); UNI Admisión 2026-2 page; CEPRE-UNI 2026-2 schedule; PUCP Guía del postulante (with Ley 30220); MINEDU CNEB (maths competencies and weekly hours) and ENLA 2025 note; Binaria Matemática binational rules 2026 (Razonamiento Matemático topic list by level). All read 8 November 2026. Problems, the families grouping, the vocabulary, the eight-week plan and the steps are our own.',
    localProject: 'Eleven original razonamiento matemático problems (two sequences, ages, clock angle at 3:40, heads and legs, triangles from a vertex, percentages, cyclists meeting, ordering, a tank in fractions, AB + BA = 121), answers checked in Python (43, 162, 18, 130.0, 8, 10, 70, 2.0, Pedro, 80, 74), plus a finite-differences program that predicts 43 for 3, 7, 13, 21, 31 and 31 (not 32) for 1, 2, 4, 8, 16. Lesson family: finite differences, and why five numbers do not fix a rule.',
    requiredMentions: ['[2, 2, 2] &lt;- constante', 'Siguiente termino: 31', 'Cinco números no hacen una regla', 'How many rows until the differences stop changing?', 'Domingo 15 de noviembre de 2026, 7.00 horas', 'Lunes 10, miércoles 12 y viernes 14 de agosto de 2026', 'evaluación académica el 29 de noviembre de 2026', 'se registran avances en Matemática frente al 2023', '43, 162, 18, 130.0, 8, 10, 70, 2.0, Pedro, 80 y 74', 'Secundaria, jornada escolar completa'],
    sources: [
      { claim: 'Universidad de Lima 2027-1(A): Razonamiento Matemático objective, school exam on 15 November 2026 at 7.00, wrong answers penalised, unanswered neutral.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'UNI 2026-2: three papers on three days (Aptitud Académica and Humanidades; Matemática; Física and Química), 10, 12 and 14 August 2026.', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'CEPRE-UNI 2026-2: Sunday graded practice and final exam on 2 August 2026.', url: 'https://www.cepre.uni.edu.pe/assets/CRONOGRAMADEACTIVIDADESACAD%C3%89MICAS2026-2.pdf' },
      { claim: 'PUCP: emphasis on reading comprehension and maths; Ley 30220 knowledge exam; La Primera Opción evaluation 29 November 2026.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'CNEB maths competencies and weekly hours (primaria 5 and 4; secundaria 4 JER, 6 JEC; 45-minute hours).', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2025: 2° secundaria maths gains over 2023; national results similar to 2023 and 2024.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'Razonamiento Matemático topic list by level (sequences, counting figures, ages, equations, logic, moving objects, clocks).', url: 'https://www.ebinaria.com/docs/Reglamento-Concurso-Binacional-2026.pdf' }
    ],
    rejectedClaims: [
      'Admission promises or preparation for a specific admission exam: refused; exams are in Spanish and the page says we only train reasoning.',
      'Presenting ourselves as an academia preuniversitaria or as linked to any university: refused.',
      'Problems taken from admission exams or contests: refused; all eleven are ours, answers checked in Python.',
      'Using ENLA to place a student: refused.',
      'Soles fees of universities or academias: not printed.',
      'Spanish-language teaching: refused; classes are live, online and in English only.'
    ]
  }
};

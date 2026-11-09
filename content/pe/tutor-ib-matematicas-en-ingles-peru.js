// SHIP: market (es exam door, IB) | tutor de IB Matemáticas en inglés en Perú: Diploma 2025, COAR y rutas universitarias | least-squares line and Pearson r by hand (AI style), extrapolation trap; geometric series (AA style)
'use strict';
// Tutor de IB Matemáticas en inglés (ag- Spanish-language door, Peru cluster row PE114, P4, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only (priceSubject 'maths'); no soles, no typed figure.
// Searches (KEYWORDS.md): "bachillerato internacional en ingles" (2), "bachillerato internacional perú" (3), "colegios con
// bachillerato internacional en lima"; PAA "¿Qué es el Bachillerato Internacional y para qué sirve?", "Is the IB diploma
// worth it?". Never claim IB endorsement; never name a school as a source of students; no school counts (not verified).
// Spine: who takes the IB Diploma in Peru (MINEDU, 17 April 2026: 2,502 Diplomas in 2025, COAR 47%, the COAR breakdown);
// whether it can be studied in English; Maths AA and AI as our course teaches them (IB pages not verified: ibo.org blocked);
// how Universidad de Lima and PUCP treat the Diploma (their own guides); an original worked example for each route; the
// two-year plan against the November session; Peru to India clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/tutor-ib-matematicas-en-ingles-peru/,
// all fetched 2026-11-08, quotes grepped in the raw text):
//  MINEDU press note 17 April 2026 (n-coar-ib-1100.txt): "1179 estudiantes de los 25 Colegios de Alto Rendimiento (COAR)";
//    "convocatoria de noviembre de 2025"; "Del total de 2296 estudiantes de los COAR que participaron en la evaluación, 1740
//    se presentaron a la categoría Diploma y 1179 obtuvieron la certificación"; "556 estudiantes postularon a la categoría
//    Curso, y 390 alcanzaron esta certificación"; "En el año 2025, en todo el país, 2502 estudiantes obtuvieron el Diploma del
//    Bachillerato Internacional. De este total, los estudiantes de los COAR representan el 47 % del total nacional"; "10 COAR
//    que lograron que más del 70 % de estudiantes obtuvieran la certificación en la categoría Diploma"; "durante los años
//    2024 y 2025"; "515 estudiantes de quinto de secundaria de los COAR obtuvieron certificaciones internacionales del idioma
//    inglés Cambridge".
//  MINEDU press note 11 January 2026 (n-coar-admision.txt): "2650 vacantes para estudiantes de instituciones educativas públicas
//    que hayan culminado el segundo grado de secundaria"; "los estudiantes COAR tienen la oportunidad de cursar el Programa del
//    Diploma del Bachillerato Internacional".
//  Universidad de Lima, Guía del postulante 2027-1(A) (ulima-guia-20271a.txt): "Por la modalidad de Diploma de Bachillerato
//    Internacional es admitido el postulante que haya obtenido dicho diploma y postule en un plazo no mayor de tres años";
//    "Copia del récord de notas del programa de Bachillerato Internacional"; "se recomienda no inscribirse por esta modalidad
//    en el presente concurso de admisión"; "En marzo de 2027 se realizará el Concurso de Admisión 2027-1(B)"; calendar
//    "Desde el lunes 4 de mayo hasta el viernes 6 de noviembre de 2026"; "Martes 1 de diciembre de 2026, 19.00 horas";
//    "EVALUACIÓN DE INGLÉS Por confirmar"; "Lunes 29 de marzo de 2027".
//  PUCP, Guía del postulante (pucp-guia.txt): "DIPLOMA DE BACHILLERATO 2.° Convocatoria INSCRIPCIONES ABIERTAS ENTREVISTAS:
//    Hasta el 28 de enero de 2027"; "hasta un máximo de 23 créditos"; "podrá convalidar hasta 36 créditos"; "En el caso de
//    colegios con Diploma de Bachillerato Internacional, deben remitir además el documento correspondiente".
//  CNEB (cneb.txt): Tabla N.° 8 "Matemática 4 4 4 4 4"; Tabla N.° 9 "Matemática 6 6 6 6 6"; level 7 standard of competency 24
//    "progresiones geométricas, sistema de ecuaciones lineales, ecuaciones y funciones cuadráticas y exponenciales".
//  EF EPI 2025 (ef_peru.txt): Lima 555 (high from 550).
//  Time: tzdata America/Lima -5:00 (no DST since 1994), Asia/Kolkata 5:30; INACAL feed UTC-5 on 2026-11-08.
// Not verified: ibo.org returned 403 (BLOCKED.md); no IB guide, subject brief, school list or exam-language rule is quoted.
// Our own calculations (python3 -I): 1179 / 1740 = 67.8%; 390 / 556 = 70.1%; 1179 / 2502 = 47.1% (MINEDU prints 47 %).
// Our own program recta.py (invented data, labelled), exact output: mean x = 4.667, mean y = 63.167 / y = 5.414x + 37.900 /
//    r = 0.9979 / 7 hours -> 75.8 / 20 hours -> 146.2. Geometric series checks: 3(2^10 - 1) = 3069; 8 + 4 + 2 + ... = 16.
// Lesson family: least-squares line and Pearson r computed by hand from sums (AI style), the extrapolation trap; a geometric
// series derived with S - rS (AA style).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'from math import sqrt',
  '',
  'horas = [2, 3, 4, 5, 6, 8]',
  'puntaje = [48, 55, 59, 66, 70, 81]',
  'n = len(horas)',
  '',
  'mx = sum(horas) / n',
  'my = sum(puntaje) / n',
  'sxy = sum((x - mx) * (y - my) for x, y in zip(horas, puntaje))',
  'sxx = sum((x - mx) ** 2 for x in horas)',
  'syy = sum((y - my) ** 2 for y in puntaje)',
  '',
  'm = sxy / sxx',
  'b = my - m * mx',
  'r = sxy / sqrt(sxx * syy)',
  '',
  "print(f'mean x = {mx:.3f}, mean y = {my:.3f}')",
  "print(f'y = {m:.3f}x + {b:.3f}')",
  "print(f'r = {r:.4f}')",
  'for h in [7, 20]:',
  "    print(f'{h} hours -> {m * h + b:.1f}')"
].join('\n');

const OUT = [
  'mean x = 4.667, mean y = 63.167',
  'y = 5.414x + 37.900',
  'r = 0.9979',
  '7 hours -> 75.8',
  '20 hours -> 146.2'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Tutor de IB Matemáticas en inglés' },
  slug: 'tutor-ib-matematicas-en-ingles-peru',
  code: 'tim',
  accent: '#9A2B19',
  accentRationale: 'Tutor de IB Matemáticas en inglés: a brick red #9A2B19, the terracotta of an exam-hall stamp, so the IB exam door stands apart from the greens of the school maths doors; 6.23:1 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Tutor de IB Matemáticas en inglés',
  title: 'Tutor de IB Matemáticas en inglés en Perú, AA y AI, en vivo',
  description: 'Tutor de matemáticas del Bachillerato Internacional en inglés para Perú: Análisis y Enfoques o Aplicaciones, NM y NS, clases en vivo y en línea, a cualquier hora.',
  ogDescription: 'IB Matemáticas en inglés desde Perú: quién obtuvo el Diploma en 2025 según el MINEDU, cómo lo reciben la U de Lima y la PUCP, y un ejemplo nuestro para AA y para AI.',
  twitterDescription: 'Clases de IB Matemáticas AA y AI en inglés, en vivo y por internet, para estudiantes del Bachillerato Internacional en Perú.',
  pageName: 'Tutor de IB Matemáticas en inglés en Perú',
  webPageDescription: 'Guía para estudiantes y familias del Bachillerato Internacional en Perú que buscan un tutor de IB Matemáticas en inglés: los resultados del Diploma 2025 según el MINEDU, el lugar de los COAR, las rutas de admisión para el Diploma en la Universidad de Lima y la PUCP según sus guías, y un ejemplo resuelto por nosotros para cada ruta de matemáticas.',
  courseDescription: 'Clases en vivo y en línea de IB Matemáticas (Análisis y Enfoques, y Aplicaciones e Interpretación, en Nivel Medio y Nivel Superior), dictadas solo en inglés para estudiantes del Programa del Diploma en Perú, con práctica de exploración y de exámenes, individuales o en grupo, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Tutor de IB Matemáticas en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#peru', label: 'El IB en Perú' },
    { href: '#rutas', label: 'AA o AI' },
    { href: '#ejemplos', label: 'Ejemplos' },
    { href: '#universidad', label: 'Universidad' },
    { href: '#plan', label: 'Plan' }
  ],
  eyebrow: 'Perú &middot; Bachillerato Internacional &middot; Matemáticas',
  h1: 'Tutor de IB Matemáticas en inglés, en vivo desde Perú',
  lede: 'Si usted o su hijo cursa el Programa del Diploma del Bachillerato Internacional en Perú y la matemática se estudia en inglés, esta página explica qué tipo de ayuda damos, cómo se ve el IB en el país según el MINEDU, qué hacen dos universidades peruanas con el Diploma y cómo trabajamos un problema de cada una de las dos rutas de matemáticas.',
  secondaryCta: { href: '#ejemplos', label: 'Ver los ejemplos resueltos' },
  wa: 'Hola Modern Age Coders, buscamos un tutor de IB Matemáticas en inglés para un estudiante del Diploma en Perú. ¿Podemos tener una clase gratis?',
  heroNote: 'Tutores en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; IB Matemáticas explicado y escrito en inglés',
  spec: [
    ['Rutas', 'Análisis y Enfoques (AA) y Aplicaciones e Interpretación (AI)'],
    ['Niveles', 'Nivel Medio (NM) y Nivel Superior (NS)'],
    ['Idioma', 'Solo inglés'],
    ['Formato', 'Uno a uno, o un grupo de quince a veinte'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'La respuesta directa',
  capsule: 'Sí: Modern Age Coders da clases de IB Matemáticas a estudiantes del Bachillerato Internacional en Perú, en vivo, en línea y en inglés, para las rutas Análisis y Enfoques y Aplicaciones e Interpretación, en Nivel Medio y Nivel Superior. Un tutor desde la India explica los temas, practica preguntas de examen y acompaña la exploración matemática, con calma y a la velocidad del estudiante. Las clases son individuales o en grupo, a la hora que el estudiante elija, y la primera es gratis. El colegio y el IB califican; nosotros enseñamos.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para el estudiante del Diploma',
    lede: 'El curso central de IB Matemáticas, uno para quien llega al Diploma sin base sólida y uno para quien eligió la ruta de Aplicaciones, donde la estadística pesa mucho.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'TIM / 01', title: 'IB Maths AA y AI', alt: 'Imagen del curso de IB Matemáticas AA y AI', note: 'Nivel Medio y Nivel Superior, las dos rutas. Teoría en el orden del programa, técnica para cada prueba y acompañamiento honesto en la exploración.' },
      { course: 'igcse-mathematics-mastery', code: 'TIM / 02', title: 'Base antes del Diploma', alt: 'Imagen del curso de IGCSE Maths', note: 'Para 3° de secundaria o para quien entra al Diploma con huecos: álgebra, funciones y trigonometría en inglés, al nivel que el Diploma da por sabido.' },
      { course: 'statistics-probability-maths-course', code: 'TIM / 03', title: 'Estadística y probabilidad', alt: 'Imagen del curso de estadística y probabilidad', note: 'Regresión, correlación, distribuciones y pruebas de hipótesis, la columna vertebral de la ruta AI, explicadas paso a paso.' }
    ]
  },

  sections: [
    {
      id: 'peru',
      eyebrow: 'El IB en Perú',
      h2: '¿Cuántos estudiantes obtienen el Diploma del Bachillerato Internacional en Perú?',
      lede: 'En 2025 fueron 2,502, según el MINEDU, y casi la mitad estudiaba en un Colegio de Alto Rendimiento (COAR). El resto lo obtuvo en otros colegios del país que ofrecen el programa.',
      body: [
        { kind: 'table', numCols: [1], caption: 'El Diploma del Bachillerato Internacional en Perú, convocatoria de noviembre de 2025, según el MINEDU', head: ['Dato', 'Cifra', 'A qué se refiere'], rows: [
          ['Diplomas obtenidos en todo el país', '2502', 'Estudiantes en Perú que obtuvieron el Diploma en 2025'],
          ['Participación de los COAR', '47 %', 'Proporción de esos diplomas que corresponde a estudiantes COAR'],
          ['Estudiantes COAR evaluados', '2296', 'De los 25 COAR, en la convocatoria de noviembre de 2025'],
          ['Se presentaron a la categoría Diploma', '1740', 'Estudiantes COAR'],
          ['Obtuvieron el Diploma', '1179', 'Estudiantes COAR, con el resultado "satisfactoriamente"'],
          ['Se presentaron a la categoría Curso', '556', 'Estudiantes COAR que buscaban certificados por asignatura'],
          ['Obtuvieron la certificación de Curso', '390', 'Estudiantes COAR']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Educación del Perú, nota de prensa del 17 de abril de 2026, "Más de 1100 estudiantes de los COAR obtienen diploma del bachillerato internacional", leída el 8 de noviembre de 2026. Todas las cifras son las que publica el MINEDU; no las sumamos ni las combinamos.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que se lee en la tabla',
          left: [
            'De los 1,740 estudiantes COAR que se presentaron a la categoría Diploma, 1,179 la obtuvieron: un 67.8 % (cálculo nuestro). En la categoría Curso, 390 de 556, un 70.1 % (cálculo nuestro). El MINEDU destaca además que en 10 COAR más del 70 % de los estudiantes obtuvo el Diploma.',
            'La misma nota dice que esa promoción cursó el programa "durante los años 2024 y 2025", es decir, en los dos últimos años de la secundaria, y que 515 estudiantes de quinto de secundaria de los COAR obtuvieron además certificaciones de inglés de Cambridge.'
          ],
          rightH3: 'Quién entra a un COAR',
          right: [
            'Los COAR son colegios públicos. Para 2026 el MINEDU ofreció 2,650 vacantes para estudiantes de colegios públicos que hayan culminado el segundo grado de secundaria, con una inscripción virtual y gratuita del 12 al 30 de enero de 2026.',
            'Según el MINEDU, "los estudiantes COAR tienen la oportunidad de cursar el Programa del Diploma del Bachillerato Internacional". No tenemos ningún vínculo con los COAR ni con el IB, y esta página no habla en nombre de ninguno.'
          ] },
        { kind: 'p', mt: true, html: 'Lo que no podemos darle es una lista oficial de colegios con Bachillerato Internacional en Lima o en el resto del país. El buscador del IB está en ibo.org, que bloqueó nuestro acceso, y no encontramos un directorio público del MINEDU. Si busca colegio, la fuente correcta es el propio IB o cada colegio; aquí solo explicamos cómo ayudamos una vez que el estudiante ya está en el programa.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Bachillerato internacional en inglés',
      h2: '¿Se puede estudiar el Bachillerato Internacional en inglés en Perú?',
      lede: 'Depende del colegio: cada uno decide en qué idioma dicta cada asignatura del Diploma. Lo que sí podemos asegurar es que nuestras clases de IB Matemáticas son siempre en inglés.',
      body: [
        { kind: 'p', html: 'Hay estudiantes peruanos que cursan la matemática del Diploma en inglés, sobre todo en colegios bilingües de Lima, y otros que la cursan en castellano. No hemos podido verificar en las páginas del IB qué idiomas de examen se aceptan para cada asignatura, así que no lo afirmamos aquí: el coordinador del Programa del Diploma de su colegio tiene esa información.' },
        { kind: 'p', html: 'Para quien estudia la matemática del IB en inglés, una tutoría en castellano tiene un costo oculto: el estudiante entiende la explicación, pero luego tiene que redactar la respuesta del examen en otro idioma. Con nosotros la explicación, la práctica y la corrección de la redacción ocurren en inglés, el mismo idioma en que se escribe la prueba.' },
        { kind: 'p', html: 'Quien estudia la matemática del Diploma en castellano también puede tomar clases con nosotros, pero conviene saber que no traducimos: la clase entera es en inglés. Para estudiantes que quieren postular a universidades del extranjero, eso suele ser una ventaja; para quien solo necesita aprobar un tema la próxima semana, puede no serlo, y se lo diremos con franqueza en la clase de prueba.' },
        { kind: 'p', html: 'Sobre el nivel de inglés: Lima saca 555 en el EF EPI 2025, por encima del umbral de 550 con el que EF define su franja alta. En la práctica, la mayoría de estudiantes del Diploma que vemos entiende sin problema la clase; lo que cuesta es escribir una justificación matemática completa en inglés, y esa es una de las cosas que más practicamos. Si busca contexto sobre los colegios bilingües de Lima, lo explicamos en <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium classes in Lima</a>, una página escrita en inglés.' }
      ]
    },
    {
      id: 'rutas',
      eyebrow: 'Dos rutas',
      h2: '¿Qué diferencia hay entre IB Matemáticas AA y AI?',
      lede: 'Análisis y Enfoques (AA) pone el peso en el álgebra, el cálculo y la demostración; Aplicaciones e Interpretación (AI) en la modelización, la estadística y el uso de tecnología. Las dos existen en Nivel Medio y en Nivel Superior.',
      body: [
        { kind: 'table', numCols: [], caption: 'Las dos rutas de IB Matemáticas tal como las enseña nuestro curso (descripción nuestra)', head: ['', 'Análisis y Enfoques (AA)', 'Aplicaciones e Interpretación (AI)'], rows: [
          ['Para quién suele ser', 'Futuros estudiantes de ingeniería, matemática, física o economía cuantitativa', 'Futuros estudiantes de ciencias sociales, biología, negocios, diseño o carreras con datos'],
          ['Dónde está el peso', 'Manipulación algebraica, funciones, cálculo, demostraciones', 'Modelos, estadística, interpretación de resultados, calculadora gráfica'],
          ['Cómo se ve un problema', 'Probar una fórmula, derivar, integrar con exactitud', 'Ajustar un modelo a datos y decir cuánto confiar en él'],
          ['Un ejemplo en esta página', 'Suma de una serie geométrica', 'Recta de regresión y coeficiente de correlación']
        ] },
        { kind: 'source', html: 'Descripción nuestra, basada en el programa de nuestro curso de IB Matemáticas. No pudimos leer la guía oficial de la asignatura porque ibo.org rechazó nuestro acceso; para el temario exacto, la ponderación de cada prueba y el reglamento de la exploración, consulte la guía que entrega su colegio.' },
        { kind: 'p', mt: true, html: 'Muchas familias preguntan cuál es "más fácil". No hay una respuesta general: AA exige soltura algebraica y AI exige leer bien un contexto y explicar con palabras lo que dice un número. Un estudiante que disfruta despejando y demostrando suele estar cómodo en AA; uno que prefiere entender qué significa un resultado suele estarlo en AI. La elección depende también de lo que pida la carrera que piensa estudiar, y eso lo decide cada universidad.' },
        { kind: 'p', html: 'En el colegio peruano el puente es claro. El estándar de la competencia de regularidad, equivalencia y cambio al final de 5° de secundaria, según el CNEB, ya nombra las progresiones geométricas, los sistemas lineales y las funciones cuadráticas y exponenciales. El Diploma parte de ahí y sube el nivel, con un examen escrito y una exploración individual que el estudiante redacta.' }
      ]
    },
    {
      id: 'ejemplos',
      tint: 'tint',
      eyebrow: 'Dos ejemplos resueltos',
      h2: '¿Cómo se trabaja un problema de IB Matemáticas en una clase?',
      lede: 'Con un problema de cada ruta, escritos por nosotros para esta página. Los datos del primero son inventados y lo decimos así; el segundo es un ejercicio clásico de series. En los dos, lo importante no es el número final sino la redacción en inglés que lo justifica.',
      body: [
        { kind: 'p', html: '<strong>Ejemplo AI (nuestro, con datos inventados).</strong> Seis estudiantes anotan cuántas horas por semana practican y qué puntaje obtienen en un simulacro sobre 100. ¿Hay relación lineal? ¿Qué puntaje predice el modelo para 7 horas, y para 20? En clase lo hacemos primero a mano, con las sumas, y después lo comprobamos con este programa en Python que repite cada paso.' },
        { kind: 'code', label: 'Recta de mínimos cuadrados y correlación, desde las sumas', lang: 'Python', code: PY, note: 'Sin bibliotecas de estadística: la pendiente es Sxy / Sxx, el intercepto sale de las medias y r es Sxy / raíz(Sxx · Syy). Son las mismas fórmulas que el estudiante escribe en su hoja.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Salida exacta, tal como salió al ejecutar el programa en Python 3. Los datos son inventados por nosotros para enseñar, no vienen de ningún estudiante real.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Interpretar la pendiente.</strong> 5.414 significa que, en estos datos, cada hora extra de práctica semanal va con unos 5.4 puntos más. El estudiante lo escribe en inglés: <em>each additional hour is associated with an increase of about 5.4 points</em>. "Associated", no "causes".',
          '<strong>Interpretar r.</strong> r = 0.9979 indica una correlación lineal positiva muy fuerte. Con seis datos inventados que casi forman una recta, no sorprende; con datos reales rara vez es tan alto.',
          '<strong>Interpolar.</strong> Para 7 horas, dentro del rango de los datos (de 2 a 8), el modelo da 75.8. Es razonable usarlo ahí.',
          '<strong>La trampa de extrapolar.</strong> Para 20 horas da 146.2, en un simulacro sobre 100. El modelo no está equivocado en su aritmética: está fuera de los datos. Escribir esa frase en el examen, <em>20 hours is outside the range of the data, so the prediction is unreliable</em>, vale más que el número.'
        ] },
        { kind: 'p', mt: true, html: '<strong>Ejemplo AA (nuestro).</strong> En una sucesión geométrica el primer término es 3 y la razón es 2. Halle la suma de los diez primeros términos y explique la fórmula. El estudiante escribe S = 3 + 6 + 12 + ... + 3·2⁹. Multiplica todo por la razón: 2S = 6 + 12 + ... + 3·2¹⁰. Resta la primera igualdad de la segunda y casi todo se cancela: 2S − S = 3·2¹⁰ − 3, de donde <strong>S = 3(2¹⁰ − 1) = 3069</strong>. Lo comprobamos sumando los diez términos uno por uno: también 3069.' },
        { kind: 'p', html: 'La pregunta siguiente es la que separa una buena respuesta de una excelente: ¿y si la razón fuera 1/2 y el primer término 8? Con la misma resta, S = 8(1 − (1/2)ⁿ)/(1 − 1/2); cuando n crece, (1/2)ⁿ se acerca a cero y la suma se acerca a <strong>16</strong>. El estudiante tiene que decir en inglés por qué la serie converge (<em>because the common ratio is between −1 and 1</em>) y por qué la del primer caso no lo haría.' },
        { kind: 'p', html: 'Ninguno de los dos ejemplos copia preguntas de exámenes del IB: los escribimos nosotros. En clase usamos material propio y el que el colegio entrega al estudiante, y nunca escribimos ni corregimos de manera indebida la exploración matemática, que debe ser trabajo del estudiante según las reglas de su colegio.' }
      ]
    },
    {
      id: 'universidad',
      eyebrow: 'Universidades peruanas',
      h2: '¿Para qué sirve el Diploma del IB al postular a una universidad en Perú?',
      lede: 'Algunas universidades peruanas tienen una modalidad de admisión propia para quienes obtienen el Diploma. Estas son las condiciones que publican la Universidad de Lima y la PUCP en sus guías del postulante; la decisión siempre es de cada universidad.',
      body: [
        { kind: 'table', numCols: [], caption: 'El Diploma del Bachillerato Internacional en dos universidades de Lima, según sus guías del postulante', head: ['Universidad', 'Qué dice su guía', 'Fechas publicadas'], rows: [
          ['Universidad de Lima', 'Admite por la modalidad de Diploma de Bachillerato Internacional a quien "haya obtenido dicho diploma y postule en un plazo no mayor de tres años"; pide copia del diploma y del récord de notas del programa', 'Inscripción de esta modalidad del 4 de mayo al 6 de noviembre de 2026; registro de preadmitidos el 1 de diciembre de 2026; evaluación de inglés por confirmar; inicio de clases el 29 de marzo de 2027'],
          ['Universidad de Lima, si aún no tiene el Diploma', 'Recomienda no inscribirse por esta modalidad si el postulante no está seguro de obtenerlo', 'Habrá un Concurso de Admisión 2027-1(B) en marzo de 2027'],
          ['PUCP', 'Tiene una modalidad de Diploma de Bachillerato; los cursos aprobados pueden convalidarse hasta un máximo de 23 créditos, o hasta 36 con un año adicional de Bachillerato', 'Segunda convocatoria con entrevistas hasta el 28 de enero de 2027']
        ] },
        { kind: 'source', html: 'Fuentes: Universidad de Lima, Guía del postulante, Concurso de Admisión 2027-1(A), versión publicada en noviembre de 2026; Pontificia Universidad Católica del Perú, Guía del postulante, admisión 2027-1. Ambas leídas el 8 de noviembre de 2026. Las fechas pueden cambiar: revise siempre la guía vigente en la web de cada universidad.' },
        { kind: 'p', mt: true, html: 'Dos detalles que suelen pasar desapercibidos. En la PUCP, el estudiante de un colegio con Diploma, además de los documentos que acreditan sus estudios de secundaria, debe remitir el documento que certifique la obtención del Diploma. En la Universidad de Lima, el calendario de esta modalidad incluye una evaluación de inglés, todavía por confirmar al momento de nuestra lectura.' },
        { kind: 'p', html: 'No somos parte de ningún proceso de admisión, no tenemos convenio con ninguna universidad y no prometemos ingresos. Lo que hacemos es ayudar a que el estudiante llegue al examen de noviembre con la matemática del Diploma bien entendida. El resultado lo califica el IB y la admisión la decide la universidad.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Dos años',
      h2: '¿Cuándo conviene empezar las clases de IB Matemáticas?',
      lede: 'Idealmente al inicio del primer año del Diploma, o incluso antes si la base algebraica es débil. Esta es la distribución que solemos proponer para la convocatoria de noviembre, la que rinde la mayoría del hemisferio sur.',
      body: [
        { kind: 'table', numCols: [], caption: 'Un plan de dos años hacia la convocatoria de noviembre (propuesta nuestra, se ajusta a cada colegio)', head: ['Momento', 'Grado habitual en Perú', 'Qué trabajamos'], rows: [
          ['Antes del Diploma', '3° de secundaria', 'Álgebra, funciones y trigonometría en inglés; vocabulario del programa'],
          ['Primer año, de marzo a julio', '4° de secundaria', 'Temas del programa en el orden del colegio; hábito de justificar por escrito'],
          ['Primer año, de agosto a diciembre', '4° de secundaria', 'Elección del tema de la exploración; práctica de preguntas cortas'],
          ['Segundo año, de marzo a julio', '5° de secundaria', 'Temas restantes; acompañamiento de la exploración según las reglas del colegio'],
          ['Segundo año, de agosto a noviembre', '5° de secundaria', 'Simulacros cronometrados, revisión de errores y redacción en inglés']
        ] },
        { kind: 'source', html: 'Propuesta nuestra. Que la promoción COAR evaluada en noviembre de 2025 cursó el programa en 2024 y 2025 lo dice el MINEDU en su nota del 17 de abril de 2026; cada colegio organiza su propio calendario.' },
        { kind: 'p', mt: true, html: 'En los colegios con Jornada Escolar Regular, la matemática ocupa cuatro horas pedagógicas a la semana en cada grado de secundaria, y seis en los de Jornada Escolar Completa, según las Tablas N.° 8 y N.° 9 del CNEB. Los colegios con Diploma organizan su propio plan de estudios; nosotros preguntamos cuántas horas de matemática tiene el estudiante y ajustamos la frecuencia de las clases a eso.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿A qué hora serían las clases si el estudiante vive en Perú?',
      lede: 'A la que el estudiante elija. El tutor vive en la India, donde el reloj marca diez horas y treinta minutos más que en Lima, sin variación estacional.',
      body: [
        { kind: 'table', numCols: [], caption: 'Horas del estudiante en Perú y del tutor en la India (solo conversiones de ejemplo)', head: ['Hora en Perú', 'Hora en la India', 'Cuándo suele encajar'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'Antes del colegio, para repasar'],
          ['1:00 p. m.', '11:30 p. m.', 'Hora libre o vacaciones'],
          ['5:00 p. m.', '3:30 a. m. del día siguiente', 'Después de las clases del Diploma'],
          ['7:00 p. m.', '5:30 a. m. del día siguiente', 'Noche de estudio'],
          ['10:00 p. m.', '8:30 a. m. del día siguiente', 'Semanas de simulacros']
        ] },
        { kind: 'source', html: 'Perú: UTC-5 todo el año, sin cambio de hora desde 1994 (tzdata, zona America/Lima; reloj oficial del INACAL comprobado el 8 de noviembre de 2026). India: UTC+5:30 (zona Asia/Kolkata). La columna de la derecha es nuestra.' },
        { kind: 'p', mt: true, html: 'Como ningún país cambia la hora, la conversión es igual en marzo y en noviembre, incluida la semana del examen. Si una semana de simulacros pide más clases, se agregan sesiones a la hora que el estudiante necesite.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se ve el avance de un estudiante del Diploma?',
    lede: 'Cinco escalones propios, pensados para la matemática del IB escrita en inglés.',
    table: { caption: 'Cinco escalones en IB Matemáticas (nuestros)', head: ['Escalón', 'Momento típico', 'El estudiante puede'], rows: [
      ['1. Domina la base', 'Antes o al inicio del Diploma', 'manipular expresiones, resolver ecuaciones y graficar funciones sin errores de signo'],
      ['2. Lee el enunciado', 'Primer año', 'distinguir en inglés qué piden show that, hence, find y estimate'],
      ['3. Justifica', 'Primer año', 'escribir cada paso con una frase que explica por qué, como en los ejemplos'],
      ['4. Modela y critica', 'Segundo año', 'construir un modelo y decir dónde deja de ser fiable, como en la trampa de extrapolar'],
      ['5. Rinde a tiempo', 'Antes de noviembre', 'resolver un simulacro completo dentro del tiempo y revisar sus propios errores']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'El salto más grande suele estar entre los escalones 2 y 3: muchos estudiantes llegan al resultado y pierden puntos por no justificarlo.',
      'Pregunte a su hijo qué palabra de mando le costó esta semana (show that, hence). Si sabe responder, está leyendo bien los enunciados.'
    ] },
    right: { h3: 'Para estudiantes', ps: [
      'Antes de usar la calculadora gráfica, escriba qué espera ver. Si el resultado no coincide, ahí hay algo que aprender.',
      'Cuando un modelo dé un número imposible, no lo borre: escriba por qué es imposible. Esa frase suma.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para antes, durante y después del Diploma',
    lede: 'Todos en vivo y en inglés, individuales o en grupo, con un tutor fijo.',
    bands: [
      { num: 'I', h3: 'Antes del Diploma', sub: 'De 13 a 15 años', courses: [
        { code: 'TIM / ANTES / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Preálgebra y geometría', blurb: 'La base de 1° y 2° de secundaria, en inglés.' },
        { code: 'TIM / ANTES / 02', slug: 'algebra-foundations-masterclass', title: 'Fundamentos de álgebra', blurb: 'Ecuaciones y funciones lineales sin huecos.' },
        { code: 'TIM / ANTES / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Matemática de secundaria superior', blurb: 'Funciones, trigonometría e introducción al cálculo.' }
      ] },
      { num: 'II', h3: 'Junto al Diploma', sub: 'De 15 a 18 años', courses: [
        { code: 'TIM / DP / 01', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Para quien combina matemática y computación en el Diploma.' },
        { code: 'TIM / DP / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de olimpiada', blurb: 'Problemas más profundos para quien va por NS.' },
        { code: 'TIM / DP / 03', slug: 'maths-through-coding', title: 'Matemática con Python', blurb: 'Modelos y gráficos programados, útil para la ruta AI.' }
      ] },
      { num: 'III', h3: 'Después del Diploma', sub: 'Desde 17 años', courses: [
        { code: 'TIM / UNI / 01', slug: 'college-mathematics-complete-masterclass', title: 'Matemática universitaria', blurb: 'Lo que espera en el primer año de ciencias o ingeniería.' },
        { code: 'TIM / UNI / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Matemática para datos', blurb: 'Regresión, matrices y probabilidad para quien seguirá con datos.' },
        { code: 'TIM / UNI / 03', slug: 'sat-math-prep-course', title: 'SAT Math', blurb: 'Para quien además postula a universidades de Estados Unidos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases de IB Matemáticas en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Durante el año', l: 'Clases semanales que siguen el orden del colegio.' },
      { time: 'Antes de noviembre', l: 'Más sesiones para simulacros y revisión de errores.' },
      { time: 'Uno a uno', l: 'Un horario acordado con el estudiante.' }
    ],
    cells: [
      { h3: 'Orden del colegio', p: 'Los temas se ven cuando el colegio los ve, no antes ni después.' },
      { h3: 'Redacción en inglés', p: 'Cada solución se escribe con frases que justifican los pasos.' },
      { h3: 'Calculadora y papel', p: 'Se practica cuándo usar la calculadora gráfica y cuándo no.' },
      { h3: 'Exploración honesta', p: 'Orientamos; el trabajo y la redacción son del estudiante.' },
      { h3: 'Registro de errores', p: 'Una lista viva de fallos que se repasa antes de cada simulacro.' },
      { h3: 'Tutor fijo', p: 'La misma persona durante los dos años, si el estudiante quiere.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Bastantes estudiantes del Diploma programan además con nosotros; aquí van unos proyectos, y la colección sigue en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas de Google de estudiantes y familias, sin cambios y en inglés.',

  fees: {
    h2: 'Precio de las clases de IB Matemáticas',
    lede: 'La cuota mensual figura en dólares estadounidenses y se cobra con tarjeta. Su banco hace la conversión a soles al cambio que tenga ese día, así que el importe exacto puede variar levemente de un mes a otro.',
    free: ['Una clase de prueba de IB Matemáticas', 'Revisión de la ruta (AA o AI) y del nivel', 'Sin tarjeta y sin compromiso'],
    group: ['Un grupo de quince a veinte estudiantes', 'El mismo tutor todo el curso', 'Dos clases en vivo por semana', 'Mensual y sin permanencia'],
    one: ['Tutoría uno a uno', 'La ruta, el nivel y el ritmo del estudiante', 'Más sesiones antes de los simulacros si las pide']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Tutor de IB Matemáticas en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Son en vivo, en línea y solo en inglés, y para un estudiante del Diploma que rinde matemática en inglés esa es la ventaja: explicación, práctica y redacción en el idioma del examen, con un tutor que va al ritmo del estudiante. El EF EPI 2025 coloca a Lima en la franja alta de inglés, y la redacción de justificaciones es lo que más se trabaja.' },
      { q: '¿Enseñan las dos rutas, AA y AI?', a: 'Sí, Análisis y Enfoques y Aplicaciones e Interpretación, en Nivel Medio y Nivel Superior. El tutor sigue el orden en que el colegio enseña los temas.' },
      { q: '¿Cuántos estudiantes obtienen el Diploma del IB en Perú?', a: 'Según el MINEDU, 2,502 estudiantes obtuvieron el Diploma del Bachillerato Internacional en 2025, y los estudiantes de los COAR fueron el 47 % de ese total.' },
      { q: '¿Ayudan con la exploración matemática?', a: 'Orientamos en la elección del tema, la matemática que hace falta y la claridad de la redacción, dentro de las reglas del colegio. No escribimos la exploración: es trabajo del estudiante.' },
      { q: '¿El Diploma sirve para entrar a una universidad peruana?', a: 'Algunas tienen una modalidad propia. La Universidad de Lima admite a quien obtuvo el Diploma y postula dentro de los tres años siguientes; la PUCP tiene una modalidad de Diploma de Bachillerato y convalida hasta 23 créditos. La admisión la decide cada universidad.' },
      { q: '¿Están vinculados al IB o a algún COAR?', a: 'No. No tenemos ningún vínculo con la Organización del Bachillerato Internacional, con los COAR, con el MINEDU ni con ningún colegio. El IB y el colegio califican; nosotros enseñamos.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 7:00 p. m. en Perú son las 5:30 a. m. del día siguiente en la India.' },
      { q: '¿Cuándo conviene empezar?', a: 'Al inicio del primer año del Diploma, o en 3° de secundaria si la base de álgebra y funciones es débil. A pocas semanas de noviembre también ayudamos, con simulacros y revisión de errores.' },
      { q: '¿Cómo se paga?', a: 'Mensualmente con tarjeta, en dólares estadounidenses; el banco convierte el monto a soles. La clase de prueba es gratis.' },
      { q: '¿Dan algún certificado?', a: 'Solo nuestro certificado de finalización de curso, emitido por Modern Age Coders. No es un certificado del IB ni tiene valor oficial en Perú.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas sobre el IB y sobre nuestras clases en Perú, la mayoría en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que enseñamos en Perú, de primaria a la universidad.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium classes in Lima', p: 'Para familias de colegios bilingües, Cambridge e IB en Lima.' },
      { href: '/ib-maths-tuition-online', label: 'IB Maths tuition online', p: 'Nuestra página general de IB Matemáticas.' },
      { href: '/ib-maths-ia-guidance', label: 'IB Maths IA guidance', p: 'Cómo orientamos la exploración matemática.' },
      { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'IB Extended Essay mentoring', p: 'Monografía en matemática o computación.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science tuition', p: 'Para quien también cursa Computer Science.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba de IB Matemáticas',
    lede: 'En la clase de prueba el tutor pide al estudiante resolver y justificar en inglés un problema corto de su ruta, revisa cómo redacta y qué temas le preocupan, y propone una frecuencia de clases hasta noviembre. Sin compromiso.',
    readFirst: 'Si quiere leer antes, <a class="ag-inline-link" href="/ib-maths-tuition-online">IB Maths tuition online</a> describe el curso y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> nuestra forma de enseñar; las dos páginas están en inglés.',
    note: 'Clases en vivo por internet, con tutores en la India y solo en inglés. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'IB Matemáticas', links: [
        { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB Maths AA y AI' },
        { href: '/courses/igcse-mathematics-mastery', label: 'Base antes del Diploma' },
        { href: '/courses/statistics-probability-maths-course', label: 'Estadística' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más sobre el IB', links: [
        { href: '/ib-maths-ia-guidance', label: 'Exploración matemática' },
        { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: '146.2 sobre 100: fuera del rango de los datos'
  },

  personalityCss: `
.ag-root.ag-tim .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-tim .ag-capsule { border-left-width: 6px; border-radius: 1px; }
.ag-root.ag-tim .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-tim .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-tim .ag-table caption { text-align: left; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU press notes of 17 April 2026 (IB Diploma results 2025, COAR) and 11 January 2026 (COAR admission 2026); Universidad de Lima Guía del postulante 2027-1(A); PUCP Guía del postulante; CNEB (Tablas N.° 8 and 9, competency 24 level 7 standard); EF EPI 2025 Peru page; tzdata and INACAL for time. All read 8 November 2026. ibo.org was blocked, so no IB guide is quoted. The route comparison, the two worked examples, the two-year plan and the ladder are our own.',
    localProject: 'Two original worked examples for an IB Diploma maths student in Peru. AI style: a least-squares line and Pearson r computed from sums in plain Python on invented data (hours of practice 2 to 8 against mock scores out of 100): run with python3 -I it prints y = 5.414x + 37.900, r = 0.9979, 7 hours -> 75.8 and 20 hours -> 146.2, an impossible score that teaches the extrapolation trap. AA style: the sum of ten terms of a geometric sequence with first term 3 and ratio 2 derived by S - rS (3069), then convergence to 16 for 8 + 4 + 2 + .... Lesson family: regression and correlation by hand, extrapolation; geometric series.',
    requiredMentions: ['y = 5.414x + 37.900', 'r = 0.9979', '20 hours -&gt; 146.2', 'S = 3(2¹⁰ − 1) = 3069', 'Diplomas obtenidos en todo el país', 'De los 1,740 estudiantes COAR que se presentaron a la categoría Diploma, 1,179 la obtuvieron: un 67.8 %', 'haya obtenido dicho diploma y postule en un plazo no mayor de tres años', 'hasta un máximo de 23 créditos, o hasta 36 con un año adicional de Bachillerato', '146.2 sobre 100: fuera del rango de los datos'],
    sources: [
      { claim: '2,502 IB Diplomas in Peru in 2025, COAR 47%; COAR breakdown 2296, 1740, 1179, 556, 390; programme taken in 2024 and 2025; November 2025 session; 515 Cambridge English certificates.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'COAR admission 2026: 2,650 places after 2° de secundaria; COAR students can take the IB Diploma.', url: 'https://www.gob.pe/institucion/minedu/noticias/1331404-minedu-pone-en-marcha-proceso-de-admision-a-los-colegios-de-alto-rendimiento' },
      { claim: 'Universidad de Lima IB Diploma modality, documents, calendar and 2027-1(B) contest.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'PUCP Diploma de Bachillerato route, interviews until 28 January 2027, up to 23 or 36 credits.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Secundaria maths hours (Tablas N.° 8 and 9) and the level 7 standard of competency 24.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band from 550.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'IB endorsement, IB recognition or any link with COAR, MINEDU, a school or a university: none; said plainly on the page.',
      'Official IB syllabus, assessment weightings, exam languages and the list of IB schools in Peru: not verified because ibo.org returned 403; the page says so and points to the school coordinator.',
      'Writing or improperly editing a student\'s internal assessment: refused.',
      'Admission or grade promises: refused; the universities and the IB decide.',
      'Summing the COAR figures into new totals: refused; only MINEDU\'s printed numbers and labelled ratios of them.'
    ]
  }
};

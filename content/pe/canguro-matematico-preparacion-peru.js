// SHIP: market (es exam door, olympiad) | Canguro Matemático en Perú: niveles, formato de 75 minutos, fechas y práctica propia | test every alternative (A to E) against every condition; when several pass, the question decides
'use strict';
// Canguro Matemático preparación Perú (ag- Spanish exam door, Peru cluster row PE117, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted". No Canguro problem or solution is reproduced (the organiser's site carries past problems; none used).
// ebinaria.com returned 403 on 2026-11-08 and was NOT contacted again. Organiser facts come from canmatperu.com, the site the
// AKSF lists for its Peru member, and from aksf.org. The 2026 rules PDF on canmatperu.com served an HTML shell, so the rules
// (including any penalty for wrong answers) are NOT verified and the page says so.
// Angle: the parent of a child from 3° de primaria to 5° de secundaria who typed "canguro matemático perú", "canguro matemático
// 2026 resultados", "qué es el canguro matemático". Spine: what it is and who runs it in Peru; the seven levels and the format;
// 2026 dates and what is not yet known for 2027; how a child takes part (only through the school); Canguro versus ONEM; an
// original multiple-choice set and a Python lesson that tests every alternative; how to spend 75 minutes (our plan); English.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/canguro-matematico-preparacion-peru/,
// fetched 2026-11-09 unless stated; NOTES.txt there lists every grepped string):
//  canmatperu.com JS bundle (canmat_index.js): "El Canguro Matemático llegó al Perú en 2011 gracias a la iniciativa de la
//    Pontificia Universidad Católica del Perú (PUCP)"; "A partir de 2016, la Pontificia Universidad Católica del Perú cedió la
//    organización del concurso a Binaria Matemática"; "presente en más de 110 países"; "nació en Francia en 1991";
//    "Abierto a estudiantes de 3° de primaria a 5° de secundaria"; "La primera etapa del Canguro Matemático se realiza dentro
//    de cada colegio, por lo que no es posible la inscripción individual."; "75 minutos"; "Opción múltiple (5 alternativas)";
//    "18 a 30 problemas (según el nivel)"; "3, 4 o 5 puntos según dificultad"; levels Nivel 1 "Tercero de primaria" to Nivel 7
//    "Quinto de secundaria"; "No se permite el uso de calculadoras."; "36 sedes premiadas".
//  canmatperu.com/documents/fechasClave.pdf (checked by eye on the rendered image): 2026 Etapa 1 inscripciones 10/03 to 10/04,
//    prueba 16/04 al 17/04, resultados desde el 22 de abril; Etapa 2 prueba 30/05, resultados y premiación virtual 12/06.
//  aksf.org: "Peru (PE) Binaria Matemática https://canmatperu.com/" (countries); "The first Kangaroo challenge took place on
//    May 15th, 1991." (history); "Mathematical problems in multiple-choice form are offered to children of all school levels."
//    (home); participation chart charts/PE.png (read by eye, labelled as our reading).
//  Binaria binational rules 2026 (facts-school raw, FACTS 121, 122): "participó en el Canguro Matemático 2026" on
//    binariacompetencias.com; binational contests "27 y 28 de junio de 2026".
//  ONEM 2026 bases (FACTS 100-103) for the comparison table; CNEB primaria hours (FACTS 57).
// Our own calculations: 75 / 18 = 4.2 and 75 / 30 = 2.5 minutes per problem on average.
// Our own problems and checker (canguro.py, canguro_set.py, python3 -I), exact output of canguro.py:
//    A 29 92 11 descartada / B 38 83 11 descartada / C 47 74 11 descartada / D 56 65 11 cumple / E 65 56 11 descartada /
//    Pasan: ['C', 'D', 'E'] / Menor: C
// Lesson family: test every alternative (A to E) against every condition of the problem; one condition alone does not
// decide (all five have digit sum 11); when several pass, re-read what the question asks (the smallest).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def al_reves(n):',
  '    return (n % 10) * 10 + n // 10',
  '',
  '# Problema 1: sumar 9 invierte las cifras y las cifras suman 11',
  "opciones = {'A': 29, 'B': 38, 'C': 47, 'D': 56, 'E': 65}",
  'for letra, n in opciones.items():',
  '    suma_cifras = n // 10 + n % 10',
  '    cumple = (n + 9 == al_reves(n)) and (suma_cifras == 11)',
  "    print(letra, n, al_reves(n), suma_cifras, 'cumple' if cumple else 'descartada')",
  '',
  '# Problema 5: resto 1 al dividir entre 2, 3 y 4; se pide el menor',
  "opciones = {'A': 7, 'B': 11, 'C': 13, 'D': 25, 'E': 49}",
  'pasan = [letra for letra, n in opciones.items()',
  '         if n % 2 == 1 and n % 3 == 1 and n % 4 == 1]',
  "print('Pasan:', pasan)",
  "print('Menor:', min(pasan, key=opciones.get))"
].join('\n');

const OUT = [
  'A 29 92 11 descartada',
  'B 38 83 11 descartada',
  'C 47 74 11 descartada',
  'D 56 65 11 cumple',
  'E 65 56 11 descartada',
  "Pasan: ['C', 'D', 'E']",
  'Menor: C'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Canguro Matemático' },
  slug: 'canguro-matematico-preparacion-peru',
  code: 'capr',
  accent: '#7C4B02',
  accentRationale: 'Canguro Matemático en Perú: a warm kangaroo-fur brown #7C4B02, earthy and distinct from the deep red of the ONEM page beside it; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Preparación para el Canguro Matemático en Perú',
  title: 'Canguro Matemático en Perú: preparación en vivo en inglés',
  description: 'Canguro Matemático en Perú: qué es, niveles de 3° de primaria a 5° de secundaria, formato y fechas, con preparación en vivo y en inglés y problemas propios.',
  ogDescription: 'Siete niveles, 75 minutos, cinco alternativas: cómo funciona el Canguro Matemático en Perú y cómo prepararse probando cada alternativa, con clases en vivo y en inglés.',
  twitterDescription: 'El Canguro Matemático explicado para familias peruanas, con una práctica original y clases de matemática en vivo y en inglés.',
  pageName: 'Preparación para el Canguro Matemático en Perú',
  webPageDescription: 'Guía para familias en Perú sobre el Canguro Matemático: qué es, quién lo organiza en el país según su propio sitio y la asociación internacional Kangourou sans Frontières, sus siete niveles, el formato de la prueba, las fechas de 2026, cómo se participa a través del colegio, en qué se diferencia de la ONEM, una práctica original de opción múltiple y un plan propio para repartir los 75 minutos, con clases en vivo y en inglés.',
  courseDescription: 'Clases en vivo y en línea de matemática de competencia para escolares de 3° de primaria a 5° de secundaria en Perú, dictadas solo en inglés: problemas de opción múltiple no rutinarios, lógica, conteo, geometría y estrategia de tiempo, en clase grupal o individual, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Canguro Matemático',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es', label: 'Qué es' },
    { href: '#niveles', label: 'Niveles' },
    { href: '#fechas', label: 'Fechas' },
    { href: '#alternativas', label: 'Práctica' },
    { href: '#tiempo', label: '75 minutos' }
  ],
  eyebrow: 'Perú &middot; Canguro Matemático &middot; 3° de primaria a 5° de secundaria',
  h1: 'Preparación para el Canguro Matemático, en vivo y en inglés',
  lede: 'El Canguro Matemático es un concurso internacional de problemas de opción múltiple que en Perú se rinde en el colegio, desde 3° de primaria hasta 5° de secundaria. En esta página reunimos lo que el organizador publica sobre niveles, formato y fechas, decimos con claridad lo que no pudimos verificar, y mostramos cómo practicamos con problemas propios en clases dictadas en inglés.',
  secondaryCta: { href: '#alternativas', label: 'Probar la práctica' },
  wa: 'Hola Modern Age Coders, mi hijo o hija va a rendir el Canguro Matemático en Perú. ¿Podemos reservar una clase gratis de preparación?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; problemas escritos por nosotros, nunca copiados del concurso',
  spec: [
    ['Para quién', '3° de primaria a 5° de secundaria'],
    ['Formato del concurso', 'Opción múltiple, cinco alternativas'],
    ['Lo que se entrena', 'Lógica, conteo, geometría, tiempo'],
    ['Clases', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma de las clases', 'Inglés, con el vocabulario en español'],
    ['Participación', 'A través del colegio, no individual']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'El Canguro Matemático es un concurso internacional de matemática de opción múltiple que en Perú organiza Binaria Matemática, abierto de 3° de primaria a 5° de secundaria y rendido siempre a través del colegio. Para llegar con método, Modern Age Coders ofrece clases en vivo, en línea y en inglés con problemas de cinco alternativas que escribimos nosotros, un plan para usar bien los 75 minutos y mucha lectura atenta, en grupo o a solas con el mentor, a la hora que la familia prefiera. No estamos vinculados al concurso, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para entrenar al estilo Canguro',
    lede: 'Uno para primaria, uno para los primeros años de secundaria y uno para quien ya resuelve con soltura y quiere problemas más duros.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'CAPR / 01', title: 'Razonamiento para pequeños pensadores', alt: 'Imagen del curso de razonamiento para niños pequeños', note: 'De 6 a 9 años, ideal para 3° de primaria. Patrones, orden, figuras y lógica con materiales visuales, el tipo de pensamiento que piden los primeros niveles.' },
      { course: 'middle-school-math-competitions-course', code: 'CAPR / 02', title: 'Matemática de competencia', alt: 'Imagen del curso de matemática de competencia', note: 'Para 5° de primaria a 3° de secundaria. Entre sus objetivos está la preparación para el concurso Kangaroo, junto con otros concursos internacionales.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'CAPR / 03', title: 'Olimpiada de matemática', alt: 'Imagen del curso de olimpiada de matemática', note: 'Para 4° y 5° de secundaria. Problemas no rutinarios más exigentes y la costumbre de justificar cada paso.' }
    ]
  },

  sections: [
    {
      id: 'que-es',
      eyebrow: 'Qué es',
      h2: '¿Qué es el Canguro Matemático y quién lo organiza en Perú?',
      lede: 'Es un concurso internacional de problemas de matemática con respuestas de opción múltiple, pensado para escolares de todos los niveles. Lo coordina en el mundo la asociación Kangourou sans Frontières (AKSF), y en cada país lo organiza un miembro de esa asociación; en Perú, Binaria Matemática.',
      body: [
        { kind: 'table', numCols: [], caption: 'El Canguro Matemático en cinco datos, según el organizador peruano y la asociación internacional', head: ['Dato', 'Lo que publican', 'Dónde'], rows: [
          ['Origen', 'Nació en Francia; el primer concurso se tomó el 15 de mayo de 1991', 'AKSF, página de historia, y canmatperu.com'],
          ['Alcance', 'Presente en más de 110 países', 'canmatperu.com'],
          ['Llegada al Perú', 'En 2011, por iniciativa de la Pontificia Universidad Católica del Perú (PUCP)', 'canmatperu.com'],
          ['Organizador actual', 'Desde 2016, Binaria Matemática', 'canmatperu.com; AKSF, lista de países'],
          ['Tipo de problemas', 'Opción múltiple, problemas no rutinarios, para todos los niveles escolares', 'aksf.org y canmatperu.com']
        ] },
        { kind: 'source', html: 'Fuentes: sitio del Canguro Matemático Perú (canmatperu.com, el sitio que la AKSF enlaza para su miembro peruano) y sitio de la Association Kangourou sans Frontières (aksf.org), ambos leídos el 9 de noviembre de 2026. No consultamos el sitio ebinaria.com porque rechazó nuestras solicitudes el 8 de noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'La asociación internacional describe los problemas así: no son ejercicios de libro de texto y vienen de una gran variedad de temas, y además de inventiva piden imaginación, cálculo básico y pensamiento lógico. Es una buena descripción de lo que entrenamos. Un niño que domina las cuatro operaciones pero nunca vio un problema "raro" se paraliza; uno que está acostumbrado a pensar antes de calcular disfruta la prueba.' },
        { kind: 'p', html: 'Sobre la participación en Perú, la AKSF publica un gráfico por año. Nuestra lectura de ese gráfico, que no trae cifras escritas, es que las participaciones peruanas se mantuvieron por debajo de unas 6,000 al año hasta inicios de la década y subieron con fuerza desde 2023, con una barra de 2026 que supera las 40,000. El sitio peruano, por su parte, menciona "36 sedes premiadas" en la edición 2026.' }
      ]
    },
    {
      id: 'niveles',
      eyebrow: 'Niveles y formato',
      h2: '¿Qué niveles tiene el Canguro Matemático en Perú y cómo es la prueba?',
      lede: 'Siete niveles, del 1 al 7, que van de 3° de primaria a 5° de secundaria. La prueba dura 75 minutos, tiene entre 18 y 30 problemas según el nivel, cada uno con cinco alternativas, y no se permite calculadora.',
      body: [
        { kind: 'table', numCols: [], caption: 'Niveles del Canguro Matemático Perú y edad normativa de cada grado', head: ['Nivel', 'Grado escolar', 'Edad normativa al 31 de marzo'], rows: [
          ['Nivel 1', '3° de primaria', '8 años'],
          ['Nivel 2', '4° de primaria', '9 años'],
          ['Nivel 3', '5° de primaria', '10 años'],
          ['Nivel 4', '6° de primaria', '11 años'],
          ['Nivel 5', '1° y 2° de secundaria', '12 y 13 años'],
          ['Nivel 6', '3° y 4° de secundaria', '14 y 15 años'],
          ['Nivel 7', '5° de secundaria', '16 años']
        ] },
        { kind: 'source', html: 'Niveles y grados: canmatperu.com, sección de práctica y pruebas anteriores, leído el 9 de noviembre de 2026. Edades: tabla de edades normativas del MINEDU, que fija la edad de cada grado al 31 de marzo.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Formato de la prueba que publica el Canguro Matemático Perú', head: ['Aspecto', 'Lo que dice el organizador'], rows: [
          ['Duración', '75 minutos'],
          ['Tipo de pregunta', 'Opción múltiple, cinco alternativas'],
          ['Cantidad', 'De 18 a 30 problemas, según el nivel'],
          ['Dificultad', 'Problemas fáciles, intermedios y difíciles'],
          ['Puntaje', '3, 4 o 5 puntos según la dificultad'],
          ['Materiales', 'Documento de identidad, credencial, lápices, borrador y regla; sin calculadora']
        ] },
        { kind: 'source', html: 'Fuente: canmatperu.com, ficha del concurso, leída el 9 de noviembre de 2026. Lo que no pudimos verificar: el reglamento 2026 que el sitio enlaza no se descargó como documento, de modo que no confirmamos si las respuestas incorrectas restan puntos ni cuántos problemas tiene exactamente cada nivel. Pregunte esos detalles al coordinador del concurso en su colegio.' },
        { kind: 'p', mt: true, html: 'La diferencia con una prueba escolar está en el tiempo y en la forma. Con 75 minutos para 18 problemas, el promedio es de unos cuatro minutos por problema; con 30 problemas, de dos minutos y medio (cálculo nuestro). Y como cada pregunta trae cinco alternativas, a veces conviene descartar las imposibles antes de calcular nada. Esa habilidad, revisar las alternativas con método, es la que enseñamos en la práctica de más abajo.' }
      ]
    },
    {
      id: 'fechas',
      eyebrow: 'Fechas',
      h2: '¿Cuándo es el Canguro Matemático?',
      lede: 'En 2026 hubo dos etapas: la primera, en abril, en cada colegio, y la segunda a fines de mayo. Las fechas de 2027 no estaban publicadas al 9 de noviembre de 2026.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cronograma del Canguro Matemático Perú 2026', head: ['Etapa', 'Actividad', 'Fecha en 2026'], rows: [
          ['Etapa 1', 'Inscripción de colegios y estudiantes', 'Del 10 de marzo al 10 de abril de 2026'],
          ['Etapa 1', 'Aplicación de la prueba en el colegio', '16 y 17 de abril de 2026'],
          ['Etapa 1', 'Resultados en el sistema', 'Desde el 22 de abril de 2026 (fichas digitales)'],
          ['Etapa 2', 'Aplicación de la segunda prueba', '30 de mayo de 2026'],
          ['Etapa 2', 'Resultados y premiación virtual', '12 de junio de 2026']
        ] },
        { kind: 'source', html: 'Fuente: "Cronograma etapa 1" y "Cronograma etapa 2" del documento de fechas clave publicado en canmatperu.com, revisado sobre la imagen del PDF el 9 de noviembre de 2026. Las fechas de 2027 las anunciará el organizador; confírmelas con su colegio.' },
        { kind: 'p', mt: true, html: 'El patrón de 2026 sirve para planificar sin adivinar. Si se repite en 2027, la primera prueba caería unas cuatro o cinco semanas después del inicio del año escolar, que en 2026 empezó el 16 de marzo según la RM 501-2025-MINEDU. Eso deja el verano, enero a marzo, como el período natural de preparación, sin la carga de tareas del colegio. Quien quiera arrancar en enero encontrará en <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">Vacaciones útiles 2027 de programación online</a> la forma de iniciar nuestras clases durante el verano.' },
        { kind: 'p', html: 'El mismo organizador realiza otros concursos. Su reglamento de los concursos binacionales 2026, con Bolivia y con Ecuador, se tomó el 27 y 28 de junio de 2026 y menciona que los tutores que "participó en el Canguro Matemático 2026" ya tenían cuenta en su plataforma de inscripción. Son concursos distintos, con reglas propias; no mezclamos sus reglas con las del Canguro.' }
      ]
    },
    {
      id: 'inscripcion',
      eyebrow: 'Cómo se participa',
      h2: '¿Cómo se inscribe un niño en el Canguro Matemático?',
      lede: 'Por medio de su colegio. El organizador peruano lo dice de forma explícita: la primera etapa se realiza dentro de cada colegio y por eso no es posible la inscripción individual.',
      body: [
        { kind: 'ol', items: [
          '<strong>Pregunte en el colegio.</strong> Averigüe si el colegio de su hijo participa y quién coordina el concurso, normalmente un docente de Matemática.',
          '<strong>Respete el plazo.</strong> En 2026 la inscripción estuvo abierta del 10 de marzo al 10 de abril. El colegio inscribe a sus estudiantes en la plataforma del organizador.',
          '<strong>Lleve lo necesario.</strong> El día de la prueba se pide documento de identidad, credencial, lápices, borrador y regla. No se permiten calculadoras.',
          '<strong>Revise los resultados.</strong> En 2026 se publicaron en el sistema desde el 22 de abril; quienes avanzaron rindieron la segunda etapa el 30 de mayo.',
          '<strong>Si el colegio no participa.</strong> El organizador sugiere motivar a la institución para que se inscriba. Nosotros no podemos inscribir a ningún estudiante.'
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Canguro Matemático y ONEM, comparados con las fuentes de cada concurso', head: ['', 'Canguro Matemático', 'ONEM'], rows: [
          ['Quién organiza', 'Binaria Matemática, miembro peruano de la AKSF', 'Ministerio de Educación, con Aceros Arequipa'],
          ['Grados', '3° de primaria a 5° de secundaria', '1° a 5° de secundaria'],
          ['Niveles', 'Siete', 'Tres'],
          ['Tipo de pregunta', 'Opción múltiple, cinco alternativas', 'Respuesta construida (número); abierta desde la DRE'],
          ['Duración', '75 minutos', '2 horas hasta la DRE; 4 horas en la nacional'],
          ['Cómo se entra', 'A través del colegio', 'A través del colegio'],
          ['Primera prueba en 2026', '16 y 17 de abril', '8 de julio']
        ] },
        { kind: 'source', html: 'Canguro: canmatperu.com y su documento de fechas clave 2026. ONEM: sus bases de 2026, que circularon a los colegios con un oficio de la UGEL 06 fechado el 15 de junio de 2026. La comparación es nuestra.' },
        { kind: 'p', mt: true, html: 'Para muchos escolares de secundaria los dos concursos son complementarios: el Canguro en abril entrena la rapidez y la lectura de alternativas, y la ONEM en julio pide escribir el resultado sin pistas. Para un escolar que apunta a los dos, nuestra guía nacional <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a>, escrita en inglés, cuenta qué apoyo damos para la ONEM y para las olimpiadas de computación.' }
      ]
    },
    {
      id: 'alternativas',
      tint: 'tint',
      eyebrow: 'Práctica propia',
      h2: '¿Cómo se practica para el Canguro? Seis problemas nuestros de cinco alternativas',
      lede: 'Estos problemas los escribimos nosotros para clase, con el formato de cinco alternativas. No son del Canguro Matemático ni adaptaciones de sus pruebas. Los dos primeros sirven para primaria; los últimos, para secundaria.',
      body: [
        { kind: 'ol', items: [
          '<strong>Las cifras al revés.</strong> Pienso un número de dos cifras. Si le sumo 9, sus cifras quedan al revés, y sus dos cifras suman 11. ¿Qué número es? (A) 29 (B) 38 (C) 47 (D) 56 (E) 65. <em>Respuesta: D.</em>',
          '<strong>La cinta.</strong> Una cinta de un metro se corta en trozos de 15 cm. ¿Cuántos trozos completos se obtienen? (A) 5 (B) 6 (C) 7 (D) 8 (E) 10. <em>Respuesta: B.</em>',
          '<strong>La fila.</strong> En una fila de 9 niños, Lucía es la tercera contando desde la izquierda. ¿Qué lugar ocupa contando desde la derecha? (A) 5 (B) 6 (C) 7 (D) 8 (E) 9. <em>Respuesta: C.</em>',
          '<strong>El cubo pintado.</strong> Un cubo grande hecho de 27 cubitos iguales se pinta por fuera. ¿Cuántos cubitos quedan sin ninguna cara pintada? (A) 0 (B) 1 (C) 4 (D) 6 (E) 8. <em>Respuesta: B.</em>',
          '<strong>El resto uno.</strong> ¿Cuál es el menor de estos números que deja resto 1 al dividirlo entre 2, entre 3 y entre 4? (A) 7 (B) 11 (C) 13 (D) 25 (E) 49. <em>Respuesta: C.</em>',
          '<strong>Sin despejar.</strong> Si a + b = 7 y a por b es 10, ¿cuánto vale a² + b²? (A) 25 (B) 29 (C) 39 (D) 49 (E) 69. <em>Respuesta: B.</em>'
        ] },
        { kind: 'code', label: 'Probar cada alternativa contra cada condición', lang: 'Python', code: PY, note: 'El programa no resuelve el problema: revisa las cinco alternativas, una por una, contra todas las condiciones del enunciado. Es lo que el estudiante hace a mano en la prueba.' },
        { kind: 'code', label: 'Salida del programa', lang: 'Salida', code: OUT, note: 'Esto es lo que imprimió Python 3 en nuestra computadora, copiado sin cambios.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que enseña el problema 1',
          left: [
            'Las cinco alternativas tienen cifras que suman 11. Un estudiante que solo revisa esa condición no puede decidir y elige al azar. La salida lo muestra: la cuarta columna dice 11 en todas las filas.',
            'La condición que decide es la otra: 56 + 9 = 65, que es 56 con las cifras al revés. Ninguna alternativa cumple las dos condiciones salvo la D. En clase insistimos en una frase en inglés: "Check every condition, not just the first one".'
          ],
          rightH3: 'Lo que enseña el problema 5',
          right: [
            'Tres alternativas cumplen la condición del resto: 13, 25 y 49. Si el estudiante se detiene en la primera que funciona, a veces acierta por suerte; si empieza por el final, elige 49 y se equivoca.',
            'Lo que decide es una palabra del enunciado: "menor". Por eso el programa termina con <code>min</code>. Volver a leer la pregunta después de calcular evita muchos errores en un concurso de opción múltiple.'
          ] },
        { kind: 'p', mt: true, html: 'Los otros cuatro problemas se resuelven a mano y los comprobamos con otro programa corto. La cinta: 100 entre 15 da 6 trozos completos y sobran 10 cm. La fila: 9 − 3 + 1 = 7. El cubo: el único cubito sin pintar es el del centro. Y el último no necesita hallar a ni b: como (a + b)² = a² + 2ab + b², resulta 49 − 20 = 29. Son cuatro ideas distintas en cuatro minutos cada una, que es justamente el ritmo del concurso.' }
      ]
    },
    {
      id: 'tiempo',
      eyebrow: 'Estrategia',
      h2: '¿Cómo repartir los 75 minutos del Canguro?',
      lede: 'Con un plan sencillo, decidido antes del día de la prueba. El organizador dice que los problemas valen 3, 4 o 5 puntos según su dificultad; lo que sigue es nuestra propuesta para aprovechar esa escala.',
      body: [
        { kind: 'table', numCols: [], caption: 'Un plan de tres vueltas para 75 minutos (propuesta nuestra)', head: ['Vuelta', 'Minutos sugeridos', 'Qué hacer'], rows: [
          ['Primera', 'Unos 30', 'Resolver todos los problemas que salen en menos de dos minutos; marcar los demás'],
          ['Segunda', 'Unos 35', 'Volver a los marcados, empezando por los que ya se tiene una idea; descartar alternativas'],
          ['Tercera', 'Unos 10', 'Releer cada pregunta resuelta buscando palabras como "menor", "no" o "exactamente"']
        ] },
        { kind: 'p', mt: true, html: 'Dos advertencias honestas. Primero, como no pudimos verificar el reglamento 2026, no sabemos si una respuesta incorrecta resta puntos en el Canguro peruano; si resta, conviene dejar en blanco lo que no se pudo reducir a dos alternativas. Pregúntelo en el colegio antes de la prueba. Segundo, el plan es un punto de partida: un niño de 3° de primaria con 18 problemas no reparte el tiempo igual que un escolar de 5° de secundaria con 30.' },
        { kind: 'p', html: 'Practicamos este plan con simulacros propios cronometrados. Después de cada simulacro, el mentor revisa con el estudiante solo dos cosas: qué problemas dejó por falta de tiempo y cuáles falló por leer mal. Casi siempre la segunda lista es más larga que la primera, y es la más fácil de corregir.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Sirve prepararse para el Canguro en inglés?',
      lede: 'Sí. El Canguro es un concurso internacional que se rinde en más de 110 países y una enorme cantidad de material de práctica del mundo circula en inglés. La lógica de un problema no cambia de idioma; lo que hay que cuidar es reconocer los términos en español el día de la prueba.',
      body: [
        { kind: 'table', numCols: [], caption: 'Palabras que deciden un problema, en los dos idiomas (nuestra lista)', head: ['En la prueba', 'En nuestra clase', 'Por qué importa'], rows: [
          ['el menor, el mayor', 'the smallest, the largest', 'Varias alternativas pueden cumplir; solo una es la menor'],
          ['exactamente', 'exactly', '"Al menos dos" y "exactamente dos" dan respuestas distintas'],
          ['no', 'not', 'Un "no" cambia la pregunta entera'],
          ['completos', 'whole, complete', 'En la cinta, los trozos incompletos no cuentan'],
          ['contando desde', 'counting from', 'El lugar depende del lado desde el que se cuenta'],
          ['resto', 'remainder', 'La base de los problemas de divisibilidad']
        ] },
        { kind: 'p', mt: true, html: 'En la clase el estudiante lee cada problema en voz alta en inglés y después dice la palabra clave en español. Para un niño de primaria, el inglés que se usa es breve y repetido; el mentor habla despacio y comparte la pantalla. Si su hijo es pequeño, en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">Clases de programación para niños en inglés</a> contamos qué pasa en una sesión con alumnos de primaria, y <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> explica, en inglés, nuestro formato para familias de colegios bilingües.' },
        { kind: 'p', html: 'El horario lo decide usted. Entre los dos países hay diez horas y media de diferencia en cualquier mes: si su hijo estudia a las 5:00 p. m. en Perú, su mentor está en las 3:30 a. m. del día siguiente, y hay mentores que enseñan en ese horario. Usted elige la hora en su propio reloj al reservar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si su hijo mejora para el Canguro?',
    lede: 'Cinco señales propias que observamos en clase, de la más básica a la más avanzada.',
    table: { caption: 'Cinco señales de avance en problemas de opción múltiple (nuestras)', head: ['Señal', 'Lo que se ve en clase', 'Nivel típico'], rows: [
      ['1. Lee hasta el final', 'subraya la pregunta antes de mirar las alternativas', 'Niveles 1 y 2'],
      ['2. Descarta', 'elimina alternativas imposibles sin calcular', 'Niveles 2 a 4'],
      ['3. Prueba', 'reemplaza alternativas en el enunciado con orden', 'Niveles 3 a 5'],
      ['4. Elige camino', 'decide entre probar, dibujar o razonar según el problema', 'Niveles 5 y 6'],
      ['5. Administra el tiempo', 'sigue un plan de vueltas y no se queda trabado', 'Niveles 6 y 7']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No mida el avance solo por el puntaje de un simulacro. Mire si su hijo comete menos errores de lectura; ese cambio llega antes que el puntaje.',
      'Pídale que le explique un problema que falló. Si puede decir por qué la alternativa que eligió no cumplía, aprendió algo útil.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Antes de elegir, pruebe la alternativa en todas las condiciones, no solo en la primera.',
      'Cuando termine un problema, vuelva a leer la pregunta. Busque "menor", "mayor", "no" y "exactamente".'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más de matemática para concursos',
    lede: 'Todos en vivo y en inglés, en clase grupal o individual, con el mismo mentor durante el curso.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'Niveles 1 a 4', courses: [
        { code: 'CAPR / PRI / 01', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental para niños', blurb: 'Sentido numérico para ganar segundos sin calculadora.' },
        { code: 'CAPR / PRI / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria', blurb: 'La base de 1° a 5° de primaria, con problemas de verdad.' },
        { code: 'CAPR / PRI / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento para resolver problemas', blurb: 'Estrategias de descarte, orden y patrones para niños.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'Niveles 5 a 7', courses: [
        { code: 'CAPR / SEC / 01', slug: 'amc-8-math-competition-prep-course', title: 'Preparación tipo AMC 8', blurb: 'Opción múltiple con reloj, muy cercana al estilo Canguro.' },
        { code: 'CAPR / SEC / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Matemática de secundaria inicial', blurb: 'Álgebra y geometría sólidas para los niveles 5 y 6.' },
        { code: 'CAPR / SEC / 03', slug: 'amc-10-math-competition-prep-course', title: 'Preparación tipo AMC 10', blurb: 'Problemas más exigentes para 4° y 5° de secundaria.' }
      ] },
      { num: 'III', h3: 'Matemática y código', sub: 'Desde los 10 años', courses: [
        { code: 'CAPR / COD / 01', slug: 'maths-through-coding', title: 'Matemática con Python', blurb: 'Comprobar respuestas y probar casos con programas cortos.' },
        { code: 'CAPR / COD / 02', slug: 'python-ai-kids-masterclass', title: 'Python e IA para niños', blurb: 'El primer lenguaje escrito, desde 4° de primaria.' },
        { code: 'CAPR / COD / 03', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Para quien quiere pasar de la olimpiada de matemática a la de computación.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases de preparación en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Enero a marzo', l: 'El verano, antes de la primera prueba del año.' },
      { time: 'Marzo y abril', l: 'Simulacros cronometrados antes de la etapa del colegio.' },
      { time: 'Todo el año', l: 'Una sesión semanal de problemas no rutinarios.' }
    ],
    cells: [
      { h3: 'Problemas originales', p: 'Escritos por nosotros; nunca usamos pruebas del concurso.' },
      { h3: 'Cinco alternativas', p: 'Practicamos descartar y probar, no solo calcular.' },
      { h3: 'Reloj de 75 minutos', p: 'Simulacros con el plan de tres vueltas.' },
      { h3: 'Palabras clave', p: 'Cada término en inglés con su equivalente en la prueba.' },
      { h3: 'Revisión de errores', p: 'Separamos los de lectura de los de cálculo.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte del mismo nivel, o solo el estudiante.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Varios estudiantes que entrenan matemática con nosotros también programan sus propios juegos y herramientas. Algunos están publicados en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Reseñas de Google de estudiantes y familias, copiadas como las escribieron, en inglés.',

  fees: {
    h2: 'Precio de la preparación',
    lede: 'La tarifa mensual se muestra en dólares estadounidenses y se cobra con tarjeta; el banco la convierte a su moneda según el cambio vigente ese día.',
    free: ['Una sesión de prueba con problemas de su nivel', 'Sugerencia de curso y formato', 'Sin tarjeta y sin compromiso'],
    group: ['Quince a veinte escolares de nivel parecido', 'Mentor fijo durante el curso', 'Dos sesiones en vivo por semana', 'Mes a mes, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'Simulacros y ritmo a su medida', 'El horario que usted fije']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Canguro Matemático en Perú: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: cada sesión ocurre en directo, por internet y únicamente en inglés, algo que muchas familias buscan a propósito: su hijo entrena problemas de concurso y practica inglés a la vez. Trabajamos cada palabra clave también en español para que la reconozca en la prueba. El EF EPI 2025 ubica el inglés de Lima en el nivel alto.' },
      { q: '¿Qué es el Canguro Matemático?', a: 'Es un concurso internacional de matemática con problemas de opción múltiple, nacido en Francia en 1991 y presente en más de 110 países. En Perú lo organiza Binaria Matemática desde 2016, según su propio sitio.' },
      { q: '¿Quiénes pueden participar en Perú?', a: 'Escolares de 3° de primaria a 5° de secundaria, en siete niveles. La participación es a través del colegio: el organizador indica que la primera etapa se realiza dentro de cada colegio y que no hay inscripción individual.' },
      { q: '¿Cómo es la prueba?', a: 'Según el organizador peruano, dura 75 minutos, tiene de 18 a 30 problemas según el nivel, cada uno con cinco alternativas, y los problemas valen 3, 4 o 5 puntos según su dificultad. No se permite calculadora.' },
      { q: '¿Las respuestas incorrectas restan puntos?', a: 'No lo pudimos verificar. El reglamento 2026 enlazado en el sitio del organizador no se descargó como documento. Pregunte al coordinador del concurso en el colegio antes de la prueba.' },
      { q: '¿Cuándo es el Canguro Matemático 2027?', a: 'Al 9 de noviembre de 2026 no estaba publicado. En 2026 la primera prueba fue el 16 y 17 de abril y la segunda el 30 de mayo. Confirme las fechas de 2027 con su colegio.' },
      { q: '¿Usan problemas de pruebas anteriores del Canguro?', a: 'No. Cada problema que usamos, en clase y aquí, lo redactamos nosotros desde cero. El organizador publica pruebas anteriores en su propio sitio, y su hijo puede traer sus dudas a clase.' },
      { q: '¿En qué horario puede practicar mi hijo?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Las 11:00 a. m. en Perú son las 9:30 p. m. en la India.' },
      { q: '¿Garantizan una medalla?', a: 'No. Los resultados dependen de la prueba y de la corrección del organizador. Nosotros trabajamos el método: leer bien, descartar, probar alternativas y administrar el tiempo.' },
      { q: '¿Están vinculados al Canguro Matemático?', a: 'No. Somos una academia independiente que enseña por internet y no tenemos relación alguna con Binaria Matemática, la AKSF, el MINEDU ni con colegios. El único documento que emitimos es una constancia propia al completar un curso.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Más sobre concursos de matemática y clases en inglés desde Perú.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Para quien quiere sumar código a la matemática.' },
      { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027', p: 'Cómo empezar las clases en el verano, antes de abril.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos en el país, resumido en inglés.' },
      { href: '/courses/middle-school-math-competitions-course', label: 'Math competitions course', p: 'El curso que incluye preparación para Kangaroo.' },
      { href: '/courses/maths-through-coding', label: 'Maths through coding', p: 'Matemática y Python juntos, de 10 a 15 años.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una mirada por dentro a nuestras sesiones en vivo.' }
    ]
  },

  start: {
    h2: 'Reserve una sesión de prueba para el Canguro',
    lede: 'Durante la sesión gratuita, el mentor le pone a su hijo cuatro problemas originales de cinco alternativas del nivel de su hijo y observa cómo los lee, descarta y resuelve. Después le sugerimos un curso y un ritmo de trabajo.',
    readFirst: 'Puede ver antes <a class="ag-inline-link" href="/courses/middle-school-math-competitions-course">el curso de competencia</a> o <a class="ag-inline-link" href="/courses/reasoning-and-readiness-course-for-young-thinkers">el curso de razonamiento para los más pequeños</a>; sus fichas están en inglés.',
    note: 'Todas las sesiones son en directo, en línea y en inglés, con mentores en la India. Si escribe por WhatsApp, puede hacerlo en castellano y le respondemos pronto.',
    formNote: 'Gratis y sin compromiso; no pedimos tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para concursos', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Razonamiento, primaria' },
        { href: '/courses/middle-school-math-competitions-course', label: 'Competencia, secundaria' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olimpiada avanzada' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía de Perú' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Probar cada alternativa, releer la pregunta'
  },

  personalityCss: `
.ag-root.ag-capr .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-capr .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-capr .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-capr .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-capr .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'Organiser: Canguro Matemático Perú site canmatperu.com (JS bundle strings and the 2026 key-dates PDF), read 9 November 2026; Association Kangourou sans Frontières (aksf.org home, countries, history, Peru chart). Context: Binaria binational rules 2026, ONEM 2026 bases (UGEL 06 Oficio 00164-2026), MINEDU Edades normativas, RM 501-2025-MINEDU. ebinaria.com not contacted after its 403. Problems, the time plan, the vocabulary list and the signals are our own.',
    localProject: 'Six original five-option problems (digits reversed, a ribbon cut into 15 cm pieces, a queue position, a painted 3 by 3 by 3 cube, remainder 1 on division by 2, 3 and 4, a squared sum) and a Python program that tests every alternative against every condition: all five options of problem 1 have digit sum 11 and only D passes both conditions; in problem 5 C, D and E pass and the word smallest decides C. Lesson family: test every alternative against every condition, then re-read the question.',
    requiredMentions: ['D 56 65 11 cumple', 'Menor: C', 'Check every condition, not just the first one', 'Del 10 de marzo al 10 de abril de 2026', '16 y 17 de abril de 2026', '3, 4 o 5 puntos según la dificultad', 'En 2011, por iniciativa de la Pontificia Universidad Católica del Perú (PUCP)', 'Desde 2016, Binaria Matemática', '36 sedes premiadas', 'Probar cada alternativa, releer la pregunta'],
    sources: [
      { claim: 'Canguro Matemático Perú: arrived 2011 via PUCP, organised by Binaria Matemática since 2016, 110+ countries, born in France in 1991, 3° primaria to 5° secundaria, seven levels, 75 minutes, five options, 18 to 30 problems, 3/4/5 points, no calculators, school-only entry, 36 sedes premiadas in 2026.', url: 'https://canmatperu.com/' },
      { claim: '2026 key dates: registration 10 March to 10 April, test 16 and 17 April, results from 22 April, second test 30 May, results 12 June.', url: 'https://canmatperu.com/documents/fechasClave.pdf' },
      { claim: 'AKSF lists Binaria Matemática as its Peru member; first Kangaroo on 15 May 1991; multiple-choice problems for all school levels; Peru participation chart.', url: 'https://www.aksf.org/countries.xhtml' },
      { claim: 'Binaria binational contests 27 and 28 June 2026; Canguro 2026 run on the same platform.', url: 'https://www.ebinaria.com/docs/Reglamento-Concurso-Binacional-2026.pdf' },
      { claim: 'ONEM 2026 levels, paper format and IE stage date for the comparison table.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'Normative ages per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' }
    ],
    rejectedClaims: [
      'Penalty for wrong answers and exact problem count per level: not verified (rules PDF served HTML); the page says so.',
      'Reproducing Canguro problems from the organiser site: refused; every problem is ours.',
      'An exact Peru participation figure: not printed; the AKSF chart has no written values, so the page gives our reading only.',
      'Retrying ebinaria.com after its 403: refused; only the binational rules already saved on 8 November 2026 are cited.',
      'Any link with Binaria Matemática, AKSF, MINEDU or a school, or medal promises: refused.',
      'Spanish-language teaching: refused; classes are live, online and in English only.'
    ]
  }
};

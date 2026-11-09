// SHIP: market (es exam door, olympiad) | preparación para la ONEM: niveles, etapas, pruebas y práctica propia en inglés | count by reasoning, then confirm by enumerating every case in Python (one problem per CNEB competency)
'use strict';
// Olimpiada Nacional Escolar de Matemática (ONEM) preparación (ag- Spanish exam door, Peru cluster row PE116, hubGroup exams).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted". No ONEM problem or solution is reproduced: every problem on the page is ours and labelled so. Entry is
// through the school; we are not connected to MINEDU, any UGEL, DRE/GRE or Aceros Arequipa. No prize amount is typed.
// Angle: the parent or 1° to 5° de secundaria student who typed "onem 2026", "onem bases", "cómo preparar a mi hijo para la
// ONEM", "examenes pasados onem". Spine: what ONEM is and who takes part (levels and categories); the four stages and how each
// paper is built and scored; how a student gets in (through the school, quotas per level); which topics (the four CNEB maths
// competencies); an original practice set with every answer checked by enumeration in Python; why preparing in English still
// helps for a Spanish paper (vocabulary bridge); a year plan of our own, since ONEM 2027 bases are not published.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/olimpiada-de-matematica-onem-preparacion/,
// fetched 2026-11-08; FACTS = facts-school/FACTS.md):
//  UGEL 06 Oficio Múltiple N.º 00164-2026-MINEDU/VMGI-DRELM-UGEL06/DIR-AGEBRE, 15 June 2026, with the Cartilla and Anexo C
//  (bases) (FACTS 99-103): "XXII OLIMPIADA NACIONAL ESCOLAR DE MATEMÁTICA 2026"; "Miércoles 08 de julio Turno mañana: 8.00 –
//    10.00 am Turno tarde: 1.00 – 3.00 pm"; "NIVEL 1: 1° y 2° grado de educación secundaria NIVEL 2: 3° y 4° grado de educación
//    secundaria NIVEL 3: 5° grado de educación secundaria"; "ALFA: Estudiantes de IIEE públicas BETA: Estudiantes de IIEE
//    privadas"; "Mediante la Resolución Ministerial N. o 180-2004-ED ... se institucionaliza"; "La ONEM-AA se realiza en cuatro
//    etapas"; IE: "clasifican dos (2) estudiantes varones y dos (2) estudiantes mujeres que obtuvieron mayor puntaje en cada
//    nivel"; "cada I. E. conforma tres (3) equipos con un total de doce (12) estudiantes"; UGEL: "Clasifican a la etapa DRE, los
//    estudiantes que ocupen el 1.er, 2.o, 3.er y 4.° lugar"; IE and UGEL papers "Consta de diez (10) ítems de respuesta construida
//    cerrada ... dos (2) preguntas de la competencia «Resuelve problemas de cantidad» ... y dos (2) preguntas que combine varias
//    competencias ... La prueba tiene una duración de dos (2) horas"; DRE "ocho (8) ítems de respuesta construida cerrada y dos (2)
//    preguntas de respuesta abierta"; Nacional "Consta de cuatro (4) ítems abiertos para cada nivel de desarrollo y justificación
//    ... La prueba tiene una duración de cuatro (4) horas"; "El puntaje máximo de las evaluaciones, para todas las etapas y
//    niveles, es de cien (100) puntos"; "las respuestas correctas se califican con diez (10) puntos"; "el máximo puntaje para cada
//    problema es de veinticinco (25) puntos"; "A partir de la etapa DRE, las evaluaciones se ajustan progresivamente a los
//    parámetros de evaluación de los concursos internacionales"; "no podrán ser reprogramadas"; "No hay inscripción en el SICE"
//    (IE stage); "No podrán clasificar a la siguiente etapa aquellos participantes que hayan obtenido como resultado en la prueba
//    cero (0) puntos"; "son setenta y dos (72) estudiantes ganadores".
//  El Peruano, 11 October 2026 (FACTS 104-108): "la ONEM 2026 convocó a más de 1,7 millones de estudiantes de secundaria de todo
//    el país"; "La etapa nacional se desarrolló hoy, domingo, en el Centro Vacacional Huampaní y reunió a 237 estudiantes";
//    "12 medallas de oro, 24 de plata y 36 de bronce"; "alianza estratégica entre el Minedu y Aceros Arequipa".
//  GRE La Libertad (FACTS 109, 110): "177 797 estudiantes de Educación Secundaria ... pertenecientes a 936 instituciones";
//    earlier plan "del 14 al 18 de septiembre" (superseded by El Peruano).
//  CNEB (FACTS 39, 41, 55): four maths competencies; secundaria Matemática 4 hours (JER), 6 (JEC).
//  RM 501-2025-MINEDU (FACTS 21, 23): 2026 school year 16 March to 18 December 2026, 36 teaching weeks.
// Our own calculations: 10 items x 10 points = 100; 4 problems x 25 = 100; 120 minutes / 10 items = 12 minutes per item;
//    240 / 4 = 60 minutes per national problem.
// Our own problems and checker (onem.py, python3 -I), exact output:
//    P1 45 / P2 80 / P3 401 / P4 5/12 -> 17 / P5 60 = C(4,2) x C(5,2) = 60 / P6 6
// Lesson family: count by reasoning, then confirm by enumerating every case in Python (brute force as a check, not a method).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'from itertools import product',
  'from fractions import Fraction',
  'from math import comb',
  '',
  '# 1 Cantidad: numeros de tres cifras cuyas cifras suman 9',
  'p1 = sum(1 for n in range(100, 1000) if sum(map(int, str(n))) == 9)',
  '# 2 Cantidad: de 1 a 200, multiplos de 3 o de 5 pero no de 15',
  'p2 = sum(1 for n in range(1, 201) if (n % 3 == 0 or n % 5 == 0) and n % 15 != 0)',
  '# 3 Regularidad: 2, 5, 10, 17, 26, ... termino 20',
  'p3 = [n * n + 1 for n in range(1, 21)][-1]',
  '# 4 Datos e incertidumbre: dos dados, suma prima, fraccion a/b, a + b',
  'primos = {2, 3, 5, 7, 11}',
  'casos = list(product(range(1, 7), repeat=2))',
  'f = Fraction(sum(1 for a, b in casos if a + b in primos), len(casos))',
  'p4 = f.numerator + f.denominator',
  '# 5 Forma: rectangulos en una cuadricula de 3 filas y 4 columnas',
  'p5 = sum(1 for x1, x2 in product(range(5), repeat=2) if x1 < x2',
  '         for y1, y2 in product(range(4), repeat=2) if y1 < y2)',
  '# 6 Combinada: pares (x, y) de enteros positivos con 3x + 5y = 100',
  'p6 = sum(1 for x in range(1, 34) for y in range(1, 21) if 3 * x + 5 * y == 100)',
  '',
  "print('P1', p1)",
  "print('P2', p2)",
  "print('P3', p3)",
  "print('P4', f, '->', p4)",
  "print('P5', p5, '= C(4,2) x C(5,2) =', comb(4, 2) * comb(5, 2))",
  "print('P6', p6)"
].join('\n');

const OUT = [
  'P1 45',
  'P2 80',
  'P3 401',
  'P4 5/12 -> 17',
  'P5 60 = C(4,2) x C(5,2) = 60',
  'P6 6'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'Preparación para la ONEM' },
  slug: 'olimpiada-de-matematica-onem-preparacion',
  code: 'omo',
  accent: '#750B00',
  accentRationale: 'Olimpiada Nacional Escolar de Matemática: a deep medal-ribbon red #750B00, the colour of the podium ribbon at a national final, set apart from the clay and green Spanish doors; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Preparación para la Olimpiada Nacional Escolar de Matemática (ONEM)',
  title: 'Preparación para la ONEM: olimpiada de matemática en inglés',
  description: 'Preparación para la ONEM, la Olimpiada Nacional Escolar de Matemática: niveles, etapas y pruebas, con clases en vivo y en inglés para 1° a 5° de secundaria.',
  ogDescription: 'Cómo funciona la ONEM por niveles y etapas, qué mide cada prueba y seis problemas originales con sus respuestas comprobadas en Python, en clases en vivo y en inglés.',
  twitterDescription: 'ONEM explicada para familias: niveles, etapas, puntajes y una práctica propia, con clases de matemática en vivo y en inglés.',
  pageName: 'Preparación para la Olimpiada Nacional Escolar de Matemática (ONEM)',
  webPageDescription: 'Guía para familias y escolares de secundaria en Perú sobre la Olimpiada Nacional Escolar de Matemática (ONEM): niveles y categorías, las cuatro etapas, cómo se arma y se califica cada prueba según las bases de 2026, cómo se entra a través del colegio, qué competencias del CNEB evalúa, seis problemas originales con sus respuestas comprobadas en Python y un plan anual propio, con clases en vivo y en inglés.',
  courseDescription: 'Clases en vivo y en línea de matemática de competencia para escolares de 1° a 5° de secundaria en Perú, dictadas solo en inglés: resolución de problemas por competencias, conteo, divisibilidad, sucesiones, probabilidad y geometría, en clase grupal o individual, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Preparación para la ONEM',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es', label: 'Qué es' },
    { href: '#etapas', label: 'Etapas' },
    { href: '#temas', label: 'Temas' },
    { href: '#practica', label: 'Práctica' },
    { href: '#plan', label: 'Plan anual' }
  ],
  eyebrow: 'Perú &middot; Olimpiada de matemática &middot; 1° a 5° de secundaria',
  h1: 'Preparación para la ONEM, en vivo y en inglés',
  lede: 'La Olimpiada Nacional Escolar de Matemática es la competencia de matemática más grande del Perú: en 2026 convocó a más de 1.7 millones de escolares de secundaria. Aquí le explicamos cómo está organizada según sus bases, qué mide cada prueba, cómo se entra y cómo prepararse con problemas propios, en clases que dictamos en inglés.',
  secondaryCta: { href: '#practica', label: 'Ver los seis problemas' },
  wa: 'Hola Modern Age Coders, mi hijo o hija está en secundaria en Perú y quiere prepararse para la ONEM. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; problemas propios, nunca copiados de la ONEM',
  spec: [
    ['Para quién', 'Escolares de 1° a 5° de secundaria'],
    ['Niveles ONEM', 'Nivel 1, Nivel 2 y Nivel 3'],
    ['Qué se trabaja', 'Cantidad, regularidad, datos y forma'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés, con el vocabulario en español al lado'],
    ['Inscripción a la ONEM', 'Solo a través del colegio']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'La ONEM es la olimpiada nacional de matemática para 1° a 5° de secundaria que organiza el MINEDU con Aceros Arequipa, en tres niveles y cuatro etapas, y la inscripción es siempre a través del colegio. Modern Age Coders prepara a los escolares con clases en vivo, en línea y en inglés: problemas originales escritos por nosotros, por competencia del CNEB, en grupo o de forma individual y a cualquier hora. No estamos vinculados a la ONEM ni al MINEDU, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos para la olimpiada',
    h2: 'Tres cursos según el nivel de la ONEM',
    lede: 'Uno para quien está en el Nivel 1 y descubre los problemas de olimpiada, uno para quien ya clasifica y quiere llegar más lejos, y uno que usa la programación para comprobar ideas.',
    items: [
      { course: 'middle-school-math-competitions-course', code: 'OMO / 01', title: 'Matemática de competencia para 1° y 2°', alt: 'Imagen del curso de matemática de competencia para escolares', note: 'Para el Nivel 1. Conteo, divisibilidad, fracciones y geometría plana en problemas que piden pensar, no aplicar una fórmula de memoria.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'OMO / 02', title: 'Olimpiada de matemática avanzada', alt: 'Imagen del curso de olimpiada de matemática', note: 'Para los Niveles 2 y 3. Problemas abiertos, demostraciones escritas y la manera de justificar una respuesta, que es lo que pide la etapa nacional.' },
      { course: 'maths-through-coding', code: 'OMO / 03', title: 'Matemática con programación', alt: 'Imagen del curso de matemática a través de la programación', note: 'De 10 a 15 años. Python para probar conjeturas, contar casos y revisar respuestas, como en la práctica de esta página.' }
    ]
  },

  sections: [
    {
      id: 'que-es',
      eyebrow: 'Qué es la ONEM',
      h2: '¿Qué es la ONEM y quién puede participar?',
      lede: 'La Olimpiada Nacional Escolar de Matemática (ONEM) es un concurso educativo del Ministerio de Educación para estudiantes de secundaria de colegios públicos y privados. Se institucionalizó con la Resolución Ministerial N.° 180-2004-ED y se organiza con el apoyo de la empresa Aceros Arequipa; la edición 2026 fue la vigésima segunda.',
      body: [
        { kind: 'table', numCols: [], caption: 'Niveles y categorías de la ONEM 2026, según sus bases', head: ['Nivel', 'Grados de secundaria', 'Edad normativa habitual'], rows: [
          ['Nivel 1', '1° y 2° de secundaria', '12 y 13 años'],
          ['Nivel 2', '3° y 4° de secundaria', '14 y 15 años'],
          ['Nivel 3', '5° de secundaria', '16 años'],
          ['Categoría Alfa', 'Estudiantes de colegios públicos', 'Todos los niveles'],
          ['Categoría Beta', 'Estudiantes de colegios privados', 'Todos los niveles']
        ] },
        { kind: 'source', html: 'Fuente: bases de la XXII Olimpiada Nacional Escolar de Matemática 2026 (Anexo C) y cartilla de la etapa institución educativa, remitidas por la UGEL 06 con el Oficio Múltiple N.° 00164-2026 del 15 de junio de 2026. La edad de la tercera columna sale de la tabla de edades normativas del MINEDU, medida al 31 de marzo.' },
        { kind: 'p', mt: true, html: 'La escala es enorme. Según el diario oficial El Peruano, la ONEM 2026 "convocó a más de 1,7 millones de estudiantes de secundaria de todo el país" desde su primera etapa. Solo en La Libertad, la Gerencia Regional de Educación informó 177,797 escolares de 936 colegios en la etapa escolar de 2026. Eso significa que casi cualquier estudiante de secundaria del Perú rinde al menos la primera prueba, aunque no lo haya elegido.' },
        { kind: 'p', html: 'Un detalle de las bases que muchas familias no conocen: en las etapas UGEL y DRE los estudiantes compiten dentro de su categoría, Alfa o Beta, pero en la etapa nacional se forma "un grupo único de participación" por nivel, y públicos y privados compiten entre sí. Al final se premia a 72 estudiantes: 12 medallas de oro, 24 de plata y 36 de bronce, según la nota de El Peruano del 11 de octubre de 2026.' }
      ]
    },
    {
      id: 'etapas',
      eyebrow: 'Etapas y pruebas',
      h2: '¿Cuáles son las etapas de la ONEM y cómo es cada prueba?',
      lede: 'Son cuatro etapas: institución educativa, UGEL, DRE o GRE y nacional. Cada una tiene su propia prueba, y las bases de 2026 describen con precisión cuántas preguntas trae, de qué tipo son, cuánto duran y cómo se califican.',
      body: [
        { kind: 'table', numCols: [], caption: 'Estructura de las pruebas de la ONEM por etapa, según las bases 2026', head: ['Etapa', 'Preguntas por nivel', 'Tipo de respuesta', 'Duración', 'Calificación'], rows: [
          ['Institución educativa (IE)', '10', 'Respuesta construida cerrada', '2 horas', '10 puntos cada correcta, máximo 100'],
          ['UGEL', '10', 'Respuesta construida cerrada', '2 horas', '10 puntos cada correcta, máximo 100'],
          ['DRE o GRE', '10', '8 cerradas y 2 de respuesta abierta', '2 horas', 'Máximo 100'],
          ['Nacional', '4', 'Problemas abiertos de desarrollo y justificación', '4 horas', 'Hasta 25 puntos por problema, máximo 100']
        ] },
        { kind: 'source', html: 'Fuente: bases de la ONEM 2026, numerales 8 y 9 del Anexo C (pruebas y calificación). En las etapas IE, UGEL y DRE las respuestas incorrectas o en blanco valen cero; las bases no prevén puntos en contra. "Respuesta construida cerrada" quiere decir que el estudiante escribe un resultado, normalmente un número, sin alternativas para elegir.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que cambia de una etapa a otra',
          left: [
            'Las bases dicen que las pruebas de las etapas IE y UGEL usan situaciones intra y extramatemáticas "en función al enfoque centrado en la resolución de problemas" del CNEB. Es decir, se parecen a un buen problema de clase, pero más exigente.',
            'Desde la etapa DRE, en cambio, "las evaluaciones se ajustan progresivamente a los parámetros de evaluación de los concursos internacionales". En la nacional ya no basta el número: hay que escribir el razonamiento completo, que un jurado revisa en dos fases.'
          ],
          rightH3: 'El tiempo, en números (cálculo nuestro)',
          right: [
            'En las pruebas de 10 preguntas y 2 horas, el promedio es de 12 minutos por pregunta. Un estudiante que se traba 30 minutos en una sola pierde, en la práctica, el tiempo de dos o tres preguntas más fáciles.',
            'En la etapa nacional, 4 problemas en 4 horas dan una hora por problema. Ahí el reto no es la velocidad sino la escritura: una solución correcta pero mal justificada no se lleva los 25 puntos.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Fechas de la ONEM 2026 que constan en fuentes oficiales', head: ['Momento', 'Fecha', 'Fuente'], rows: [
          ['Etapa institución educativa, a nivel nacional', 'Miércoles 8 de julio de 2026, en turno mañana o tarde', 'Oficio de la UGEL 06, 15 de junio de 2026'],
          ['Etapa nacional, en el Centro Vacacional Huampaní', 'Domingo 11 de octubre de 2026, con 237 finalistas', 'El Peruano, 11 de octubre de 2026'],
          ['Ceremonia de premiación', 'Lunes 12 de octubre de 2026', 'El Peruano, 11 de octubre de 2026']
        ] },
        { kind: 'source', html: 'La GRE La Libertad había anunciado en julio de 2026 la etapa nacional para el 14 al 18 de septiembre; tomamos la nota posterior de El Peruano como el registro final. Las bases también indican que las pruebas IE, UGEL y DRE se toman en simultáneo en todo el país y "no podrán ser reprogramadas".' }
      ]
    },
    {
      id: 'inscripcion',
      eyebrow: 'Cómo se entra',
      h2: '¿Cómo se inscribe un estudiante en la ONEM?',
      lede: 'A través de su colegio, y de ninguna otra manera. En la etapa escolar todos los estudiantes de secundaria rinden la prueba en su propio colegio; no hay inscripción individual, y una academia o un profesor particular no pueden inscribir a nadie.',
      body: [
        { kind: 'ol', items: [
          '<strong>Etapa institución educativa.</strong> La cartilla 2026 dice que la prueba se toma "a todos los estudiantes de educación secundaria de cada IE" y que en esta etapa "No hay inscripción en el SICE". El colegio recibe la prueba y la clave de la UGEL.',
          '<strong>Quiénes pasan.</strong> En colegios mixtos clasifican dos varones y dos mujeres con mayor puntaje por nivel; en colegios de un solo sexo, los cuatro mayores puntajes por nivel. Así cada colegio forma tres equipos con un total de doce estudiantes.',
          '<strong>Registro para la UGEL.</strong> El director inscribe a esos doce en el SICE, el sistema del MINEDU para concursos, con su usuario del SIAGIE, y emite una resolución que los acredita.',
          '<strong>Etapa UGEL.</strong> Pasan a la DRE los cuatro primeros puestos de cada nivel y categoría: veinticuatro estudiantes por UGEL. Las bases añaden que quien obtiene cero puntos no clasifica aunque haya cupo.',
          '<strong>Etapa DRE y nacional.</strong> Cada región envía a la nacional un número de estudiantes que depende de su población escolar, y cada finalista viaja a Lima acompañado de un docente asesor de su colegio.'
        ] },
        { kind: 'p', mt: true, html: 'Por eso nuestro papel es claro y limitado. Preparamos al estudiante para que razone con más método y llegue a la prueba de su colegio con método; la inscripción, el docente asesor y cada clasificación dependen del colegio y de las instancias del MINEDU. No estamos vinculados a la ONEM, al MINEDU, a ninguna UGEL o DRE ni a Aceros Arequipa, y no prometemos clasificaciones ni medallas.' },
        { kind: 'p', html: 'Si su hijo quiere participar más allá de la etapa escolar, lo útil es hablar con el docente de Matemática del colegio a inicios del año escolar. Las bases piden a los colegios difundir la olimpiada "desde el inicio del año escolar" y, después de la prueba de julio, organizar una fase de preparación liderada por el docente asesor. Nuestras clases pueden sumarse a esa preparación, nunca reemplazarla.' }
      ]
    },
    {
      id: 'temas',
      eyebrow: 'Qué temas entran',
      h2: '¿Qué temas entran en la ONEM?',
      lede: 'Las pruebas de las etapas IE y UGEL siguen las cuatro competencias de Matemática del Currículo Nacional: dos preguntas por competencia y dos que combinan varias. No hay un temario cerrado por grado, pero sí una estructura fija.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Distribución de las 10 preguntas de las etapas IE y UGEL, y lo que trabajamos en cada competencia', head: ['Competencia del CNEB', 'Preguntas', 'Lo que solemos practicar (nuestra selección)'], rows: [
          ['Resuelve problemas de cantidad', '2', 'Divisibilidad, cifras, múltiplos, fracciones, porcentajes'],
          ['Resuelve problemas de regularidad, equivalencia y cambio', '2', 'Sucesiones, ecuaciones, patrones, funciones sencillas'],
          ['Resuelve problemas de gestión de datos e incertidumbre', '2', 'Conteo de casos, probabilidad, promedios, tablas'],
          ['Resuelve problemas de forma, movimiento y localización', '2', 'Áreas, ángulos, cuadrículas, simetrías, coordenadas'],
          ['Problemas que combinan varias competencias', '2', 'Ecuaciones con enteros, conteo en figuras, razonamiento lógico']
        ] },
        { kind: 'source', html: 'Las dos primeras columnas vienen de las bases de la ONEM 2026 (numeral 8 del Anexo C), que nombran las cuatro competencias del área de Matemática del CNEB. La tercera columna es nuestra: es la lista de temas con la que armamos práctica, no un temario oficial.' },
        { kind: 'p', mt: true, html: 'En el colegio, la jornada regular de secundaria asigna cuatro horas pedagógicas semanales a Matemática y la jornada escolar completa, seis, según el CNEB. Ese tiempo alcanza para el programa, pero rara vez para el tipo de problema de olimpiada, que pide combinar ideas y probar caminos. La diferencia entre un estudiante que resuelve tres preguntas de diez y uno que resuelve siete casi nunca es de contenidos: es de hábitos. Saber cuándo contar caso por caso, cuándo buscar un patrón, cuándo dibujar.' },
        { kind: 'p', html: 'Tampoco hace falta adelantar temas de grados superiores. El Nivel 1 se juega con aritmética de primaria y de 1° de secundaria bien entendida. Lo que sí conviene es ver muchos problemas distintos, resolverlos por escrito y revisar después, con calma, cada error. Ese es el trabajo de nuestras clases.' }
      ]
    },
    {
      id: 'practica',
      tint: 'tint',
      eyebrow: 'Práctica propia',
      h2: '¿Cómo se ve una práctica para la ONEM? Seis problemas nuestros, con respuesta',
      lede: 'Los seis problemas de abajo son originales, escritos por nosotros al estilo de respuesta construida cerrada: el resultado es un número entero. No son problemas de la ONEM ni adaptaciones de ellos. Después de resolverlos a mano, el estudiante comprueba cada respuesta con un programa que revisa todos los casos.',
      body: [
        { kind: 'ol', items: [
          '<strong>Cantidad.</strong> ¿Cuántos números de tres cifras tienen cifras que suman 9? <em>Respuesta: 45.</em>',
          '<strong>Cantidad.</strong> Entre 1 y 200, ¿cuántos números son múltiplos de 3 o de 5, pero no de 15? <em>Respuesta: 80.</em>',
          '<strong>Regularidad.</strong> La sucesión 2, 5, 10, 17, 26, … continúa con la misma regla. ¿Cuál es el término que ocupa el lugar 20? <em>Respuesta: 401.</em>',
          '<strong>Datos e incertidumbre.</strong> Se lanzan dos dados comunes. La probabilidad de que la suma sea un número primo es a/b, en fracción irreducible. ¿Cuánto vale a + b? <em>Respuesta: 17.</em>',
          '<strong>Forma.</strong> En una cuadrícula de 3 filas y 4 columnas de cuadraditos iguales, ¿cuántos rectángulos de cualquier tamaño se pueden contar? <em>Respuesta: 60.</em>',
          '<strong>Combinada.</strong> ¿Cuántos pares (x, y) de enteros positivos cumplen 3x + 5y = 100? <em>Respuesta: 6.</em>'
        ] },
        { kind: 'code', label: 'Un programa que revisa las seis respuestas contando todos los casos', lang: 'Python', code: PY, note: 'Cada línea recorre todos los casos posibles y cuenta los que cumplen la condición. Es una manera de comprobar, no de resolver: en la prueba no hay computadora.' },
        { kind: 'code', label: 'Salida del programa', lang: 'Salida', code: OUT, note: 'Copiada tal cual después de ejecutar el archivo con Python 3 el 9 de noviembre de 2026. Las seis respuestas coinciden con las que se obtienen a mano.' },
        { kind: 'two', mt: true,
          leftH3: 'Cómo se resuelven a mano (resumen nuestro)',
          left: [
            'Problema 1: una cifra de las centenas entre 1 y 9 y dos cifras más que completan la suma; contando por la cifra de las centenas salen 9 + 8 + 7 + … + 1 = 45. Problema 2: hay 66 múltiplos de 3 y 40 de 5; los 13 múltiplos de 15 se contaron dos veces, así que "de 3 o de 5" son 93, y quitando los 13 que son de 15 quedan 80.',
            'Problema 3: las diferencias son 3, 5, 7, 9, y la regla es n² + 1; el término 20 vale 401. Problema 4: de los 36 resultados, 15 suman 2, 3, 5, 7 u 11, y 15/36 = 5/12. Problema 5: un rectángulo se define eligiendo 2 de las 5 líneas verticales y 2 de las 4 horizontales: 10 × 6 = 60.'
          ],
          rightH3: 'El problema 6, paso a paso',
          right: [
            'Si 3x + 5y = 100, entonces 100 − 5y tiene que ser múltiplo de 3 y positivo. Probando el resto al dividir entre 3, y debe dejar resto 2: y = 2, 5, 8, 11, 14, 17. Con y = 20, x sería cero, que no es positivo.',
            'Son seis pares. El programa confirma que no se escapó ninguno, y esa es la lección: el razonamiento encuentra la respuesta, la comprobación sistemática le quita la duda.'
          ] },
        { kind: 'p', mt: true, html: 'En clase, el mentor no da la respuesta antes de tiempo. Primero pregunta en inglés "How would you count this without listing everything?", deja que el estudiante pruebe un camino, y solo al final se ejecuta el programa. Si el número del programa no coincide con el del cuaderno, el error está en una de las dos partes, y encontrarlo enseña más que acertar a la primera.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Sirve prepararse en inglés si la ONEM se rinde en español?',
      lede: 'Sí, si se hace con cuidado. La matemática de un problema no cambia con el idioma, y las olimpiadas internacionales que inspiran las etapas finales se publican sobre todo en inglés. Lo que sí hay que cuidar es el vocabulario: el estudiante debe reconocer cada término en los dos idiomas.',
      body: [
        { kind: 'table', numCols: [], caption: 'Términos de olimpiada en los dos idiomas (nuestra lista de clase)', head: ['En la prueba de la ONEM', 'En nuestra clase', 'Ejemplo de uso'], rows: [
          ['Múltiplo, divisor', 'Multiple, divisor', '15 is a multiple of 3 and of 5'],
          ['Número primo', 'Prime number', '2, 3, 5, 7 and 11 are the primes below 12'],
          ['Sucesión, término', 'Sequence, term', 'the 20th term of the sequence'],
          ['Probabilidad, casos favorables', 'Probability, favourable outcomes', '15 favourable outcomes out of 36'],
          ['Fracción irreducible', 'Fraction in lowest terms', '15/36 in lowest terms is 5/12'],
          ['Cuadrícula, rectángulo', 'Grid, rectangle', 'how many rectangles in a 3 by 4 grid'],
          ['Enteros positivos', 'Positive integers', 'x and y are positive integers'],
          ['Justifique su respuesta', 'Justify your answer', 'explain why no other pair works']
        ] },
        { kind: 'p', mt: true, html: 'Trabajamos con la lista abierta en pantalla. Cuando un problema se discute en inglés, el estudiante anota a un lado el término en español que verá en su prueba. Al cabo de unas semanas lee un enunciado en cualquiera de los dos idiomas sin detenerse, y eso tiene un efecto extra que muchas familias valoran: un escolar que justifica una respuesta en voz alta en inglés después la escribe con más orden en español.' },
        { kind: 'p', html: 'Si su hijo todavía no se siente cómodo en inglés, el mentor habla despacio y repite con otras palabras, y en los problemas de olimpiada el lenguaje necesario es corto y se repite mucho. Si además le interesa la programación, <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">Clases de programación para niños en inglés</a> describe cómo trabajamos con los más pequeños, y la guía <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> resume, en inglés, cómo ayudamos con la ONEM y con las olimpiadas de computación.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Un plan para 2027',
      h2: '¿Cuándo empezar a prepararse para la ONEM 2027?',
      lede: 'Las bases de la ONEM 2027 todavía no se publican (al 9 de noviembre de 2026). Si la edición 2027 mantiene el patrón de 2026, con la etapa escolar a inicios de julio, el verano y el primer bloque del año escolar son el momento de construir la base.',
      body: [
        { kind: 'table', numCols: [], caption: 'Un plan anual de preparación para la ONEM (propuesta nuestra, sujeta a las fechas oficiales de 2027)', head: ['Período', 'Objetivo', 'Trabajo sugerido'], rows: [
          ['Enero a marzo', 'Base sin presión', 'Cantidad y regularidad: divisibilidad, cifras, sucesiones. Un problema escrito al día'],
          ['Marzo a mayo', 'Las cuatro competencias', 'Datos e incertidumbre y forma; mezclar las cuatro en cada sesión'],
          ['Mayo a junio', 'Simulacros', 'Pruebas propias de 10 preguntas en 2 horas, con revisión de cada error'],
          ['Después de la etapa escolar', 'Respuesta abierta', 'Escribir soluciones completas, como pide la etapa DRE'],
          ['Si se clasifica a la nacional', 'Justificar', 'Cuatro problemas en cuatro horas, con argumentos revisados por el mentor']
        ] },
        { kind: 'source', html: 'El plan es nuestro. Las referencias de calendario vienen de la ONEM 2026 (etapa escolar el 8 de julio y nacional el 11 de octubre de 2026) y de la RM 501-2025-MINEDU, que fijó el año escolar 2026 del 16 de marzo al 18 de diciembre. Revise las fechas de 2027 cuando el MINEDU y su colegio las publiquen.' },
        { kind: 'p', mt: true, html: 'Para quien quiere aprovechar enero y febrero, las clases normales se pueden empezar en verano: la página <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">Vacaciones útiles 2027 de programación online</a> explica cómo, y la parte de razonamiento matemático encaja igual de bien en ese inicio. Las clases son a cualquier hora; la India va 10 horas y 30 minutos por delante de Perú todo el año, así que una clase a las 10:00 a. m. en Lima se dicta a las 8:30 p. m. en la India.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si un escolar está listo para la siguiente etapa?',
    lede: 'Cinco escalones propios que usamos para ubicar a cada estudiante. No reemplazan los resultados oficiales: describen hábitos que se ven en clase.',
    table: { caption: 'Cinco escalones de preparación para la ONEM (nuestros)', head: ['Escalón', 'Equivale a', 'El estudiante puede'], rows: [
      ['1. Entender el enunciado', 'Inicio del Nivel 1', 'reformular un problema con sus palabras y decir qué se pide'],
      ['2. Contar con orden', 'Etapa escolar', 'organizar casos en una tabla y no olvidar ninguno'],
      ['3. Elegir estrategia', 'Etapa UGEL', 'decidir entre contar, buscar patrón, dibujar o plantear ecuación'],
      ['4. Escribir la solución', 'Etapa DRE', 'redactar una respuesta abierta que otro pueda seguir'],
      ['5. Justificar sin huecos', 'Etapa nacional', 'demostrar que no hay más casos y defenderlo en voz alta']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Un resultado bajo en la etapa escolar no dice mucho; la prueba se toma a todos los estudiantes y muchos la rinden sin preparación. Lo que importa es si el puntaje sube de un simulacro al siguiente.',
      'Pregunte a su hijo cómo resolvió un problema, no solo cuánto le salió. Si puede explicar el camino, está subiendo de escalón.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Antes de calcular, escriba qué se pide y qué datos tiene. La mitad de los errores de olimpiada son de lectura.',
      'Cuando termine, verifique con un caso pequeño o con otro método. Así trabaja también el programa de esta página.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más de matemática y razonamiento',
    lede: 'En vivo y en inglés, en grupo o uno a uno, para distintos momentos de la secundaria.',
    bands: [
      { num: 'I', h3: 'Base sólida', sub: 'Antes y durante el Nivel 1', courses: [
        { code: 'OMO / BASE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Matemática de 1° a 3° de secundaria', blurb: 'Pre-álgebra y geometría con la profundidad que pide una olimpiada.' },
        { code: 'OMO / BASE / 02', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido numérico para no depender del papel en las cuentas sencillas.' },
        { code: 'OMO / BASE / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolución de problemas', blurb: 'Estrategias generales de pensamiento antes de la competencia.' }
      ] },
      { num: 'II', h3: 'Competencia', sub: 'Niveles 2 y 3', courses: [
        { code: 'OMO / COMP / 01', slug: 'amc-8-math-competition-prep-course', title: 'Preparación tipo AMC 8', blurb: 'Ritmo y precisión con problemas de opción múltiple bien elegidos.' },
        { code: 'OMO / COMP / 02', slug: 'amc-10-math-competition-prep-course', title: 'Preparación tipo AMC 10', blurb: 'Álgebra, conteo y geometría para 3° y 4° de secundaria.' },
        { code: 'OMO / COMP / 03', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'La competencia de datos e incertidumbre llevada a fondo.' }
      ] },
      { num: 'III', h3: 'Más allá del 5°', sub: 'Para quien sigue', courses: [
        { code: 'OMO / MAS / 01', slug: 'complete-high-school-mathematics-mastery', title: 'Matemática preuniversitaria', blurb: 'De álgebra a cálculo, en inglés, para la carrera que venga.' },
        { code: 'OMO / MAS / 02', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'El puente natural hacia las olimpiadas de computación.' },
        { code: 'OMO / MAS / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Matemáticas AA y AI', blurb: 'Para quien estudia el Diploma del Bachillerato Internacional.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases de preparación?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'En verano', l: 'Enero a marzo, para construir la base sin el ritmo del colegio.' },
      { time: 'En el año escolar', l: 'Después del colegio, una o dos sesiones a la semana.' },
      { time: 'Antes de una etapa', l: 'Clases individuales de simulacro y revisión.' }
    ],
    cells: [
      { h3: 'Problemas propios', p: 'Todo lo que practicamos lo escribimos nosotros; nunca copiamos pruebas de la ONEM.' },
      { h3: 'Una competencia por vez', p: 'Cada sesión se centra en una competencia del CNEB y cierra mezclándolas.' },
      { h3: 'Escritura revisada', p: 'El mentor corrige soluciones escritas, no solo números finales.' },
      { h3: 'Vocabulario doble', p: 'Cada término en inglés con su equivalente de la prueba en español.' },
      { h3: 'Simulacros cronometrados', p: 'Diez preguntas en dos horas, con revisión al día siguiente.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte escolares del mismo nivel, o el estudiante solo.' }
    ]
  },

  projectsH2: 'Lo que hacen nuestros estudiantes',
  projectsLede: 'Muchos de quienes practican matemática con nosotros también programan, y algunos convierten un problema en un proyecto. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Opiniones de familias y estudiantes en Google, sin cambios y en inglés.',

  fees: {
    h2: 'Cuánto cuesta prepararse con nosotros',
    lede: 'El precio mensual figura en dólares estadounidenses y se paga con tarjeta; su banco lo pasa a su moneda con el tipo de cambio del día del cargo.',
    free: ['Una sesión de prueba con problemas de nivel', 'Recomendación de curso según el Nivel ONEM', 'Sin tarjeta ni compromiso'],
    group: ['Quince a veinte escolares del mismo nivel', 'Un mentor fijo durante el curso', 'Dos sesiones en vivo por semana', 'Mes a mes, sin permanencia'],
    one: ['Solo el estudiante y el mentor', 'Simulacros y revisión a su medida', 'Día y hora que usted elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Preparación para la ONEM: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las clases se dictan en vivo, en línea y solo en inglés, y para muchos escolares eso suma: practican matemática de olimpiada y hablan inglés en la misma sesión. Cada término se trabaja con su equivalente en español, para que el estudiante lo reconozca en su prueba. El EF EPI 2025 sitúa el inglés de Lima en nivel alto.' },
      { q: '¿Qué es la ONEM?', a: 'Es la Olimpiada Nacional Escolar de Matemática, un concurso del Ministerio de Educación del Perú para estudiantes de 1° a 5° de secundaria de colegios públicos y privados, organizado con Aceros Arequipa. En 2026 convocó a más de 1.7 millones de escolares, según El Peruano.' },
      { q: '¿Cuáles son los niveles de la ONEM?', a: 'Nivel 1 para 1° y 2° de secundaria, Nivel 2 para 3° y 4°, y Nivel 3 para 5°. Además hay dos categorías: Alfa para colegios públicos y Beta para privados, que se unen en un solo grupo por nivel en la etapa nacional.' },
      { q: '¿Cómo se inscribe un alumno en la ONEM?', a: 'Solo a través de su colegio. La etapa escolar la rinden todos los estudiantes de secundaria en su propio colegio, y el director inscribe en el SICE a quienes clasifican a la UGEL. Nosotros no podemos inscribir a nadie.' },
      { q: '¿Cómo es la prueba de la etapa escolar?', a: 'Según las bases de 2026, tiene 10 preguntas de respuesta construida cerrada por nivel, dos por cada competencia de Matemática del CNEB y dos combinadas, dura dos horas y cada respuesta correcta vale 10 puntos.' },
      { q: '¿Cuándo es la ONEM 2027?', a: 'Al 9 de noviembre de 2026 no se han publicado las bases de 2027. En 2026 la etapa escolar fue el miércoles 8 de julio y la nacional el domingo 11 de octubre. Revise las fechas oficiales con su colegio cuando salgan.' },
      { q: '¿Usan problemas de ONEM pasadas?', a: 'No los reproducimos. Todos los problemas de nuestras clases y de esta página son originales, escritos por nosotros. Las pruebas pasadas las publica el propio organizador, y su hijo puede resolverlas por su cuenta y traer sus dudas a clase.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por la diferencia horaria, las 4:00 p. m. en Perú son las 2:30 a. m. del día siguiente en la India, y aun así hay mentores disponibles.' },
      { q: '¿Garantizan una medalla o una clasificación?', a: 'No. La clasificación depende de la prueba, del colegio y de los jurados de cada etapa. Lo que trabajamos es el método: leer bien, contar con orden, elegir estrategia y justificar por escrito.' },
      { q: '¿Están vinculados al MINEDU o a la ONEM?', a: 'No. Modern Age Coders es una academia en línea independiente. No tenemos relación con el MINEDU, las UGEL, las DRE, Aceros Arequipa ni ningún colegio, y nuestras clases no dan puntos ni certificados válidos para la olimpiada. Solo entregamos nuestro propio certificado de finalización de curso.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Páginas relacionadas',
    lede: 'Para seguir con la matemática y la programación en inglés desde Perú.',
    items: [
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles virtuales en inglés', p: 'Un verano de práctica en inglés, con programación.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La guía nacional en inglés, con ONEM, OPI e IB.' },
      { href: '/courses/middle-school-math-competitions-course', label: 'Math competitions course', p: 'El curso de competencia para los primeros años de secundaria.' },
      { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad mathematics', p: 'Problemas abiertos y demostraciones para niveles avanzados.' },
      { href: '/courses/maths-through-coding', label: 'Maths through coding', p: 'Python para comprobar conjeturas y contar casos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así son nuestras sesiones en vivo, explicado en inglés.' }
    ]
  },

  start: {
    h2: 'Reserve una sesión de prueba de matemática',
    lede: 'En la sesión de prueba el mentor propone tres problemas originales del nivel de su hijo, uno fácil, uno medio y uno exigente, y observa cómo los encara. Con eso le recomendamos curso, nivel y formato.',
    readFirst: 'Antes de reservar puede revisar <a class="ag-inline-link" href="/courses/middle-school-math-competitions-course">el curso de competencia</a> y <a class="ag-inline-link" href="/courses/olympiad-competition-mathematics-mastery">el curso de olimpiada</a>, ambos descritos en inglés.',
    note: 'Sesiones en directo por internet, dictadas en inglés por mentores en la India. Por WhatsApp respondemos en el día y puede escribirnos en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de olimpiada', links: [
        { href: '/courses/middle-school-math-competitions-course', label: 'Competencia, Nivel 1' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olimpiada, Niveles 2 y 3' },
        { href: '/courses/maths-through-coding', label: 'Matemática con Python' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía de Perú' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Verano en inglés' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Contar con orden, justificar sin huecos'
  },

  personalityCss: `
.ag-root.ag-omo .ag-hero h1 { letter-spacing: -0.015em; max-width: 20ch; }
.ag-root.ag-omo .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-omo .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-omo .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-omo .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: bases of the XXII ONEM 2026 (Anexo C) and the IE-stage cartilla sent by UGEL 06 (Oficio Múltiple N.° 00164-2026, 15 June 2026); El Peruano report of 11 October 2026; GRE La Libertad note (July 2026); CNEB (four maths competencies, secundaria hours); Edades normativas; RM 501-2025-MINEDU. All read 8 November 2026. Problems, the topic column, the vocabulary list, the year plan and the levels are our own.',
    localProject: 'Six original ONEM-style problems (two on cantidad, one each on regularidad, datos e incertidumbre and forma, one combined), answered by hand and then confirmed by a Python program that enumerates every case: 45, 80, 401, 5/12 giving 17, 60 rectangles, 6 pairs. Lesson family: count by reasoning, then confirm by enumerating every case in Python.',
    requiredMentions: ['P5 60 = C(4,2) x C(5,2) = 60', 'Respuesta: 401.', 'Resolución Ministerial N.° 180-2004-ED', '177,797 escolares de 936 colegios', 'Miércoles 8 de julio de 2026', 'Domingo 11 de octubre de 2026, con 237 finalistas', 'Hasta 25 puntos por problema, máximo 100', '12 minutos por pregunta', 'How would you count this without listing everything?', 'Contar con orden, justificar sin huecos'],
    sources: [
      { claim: 'ONEM 2026 bases and IE cartilla: levels, categories, four stages, quotas, paper structure, duration, scoring, IE stage on 8 July 2026, no SICE registration at the IE stage, RM 180-2004-ED.', url: 'https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00164-2026-mineduvmgi-drelm-ugel06dir-agebre-1781620977.pdf' },
      { claim: 'ONEM 2026: more than 1.7 million students, national stage 11 October 2026 at Huampaní with 237 finalists, 72 medals, Aceros Arequipa partnership.', url: 'https://elperuano.pe/noticia/306597-72-escolares-ganadores-de-la-olimpiada-nacional-de-matematica-seran-premiados-este-lunes-en-huampani' },
      { claim: 'La Libertad: 177,797 students from 936 schools in the 2026 school stage; earlier national-stage plan 14 to 18 September.', url: 'https://www.gob.pe/institucion/regionlalibertad-gre/noticias/1416180-mas-de-177-mil-escolares-de-la-libertad-participan-en-la-olimpiada-nacional-escolar-de-matematicas-2026-onem' },
      { claim: 'Four CNEB maths competencies; secundaria Matemática 4 hours (JER) and 6 (JEC).', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative ages per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: '2026 school year 16 March to 18 December 2026 (RM 501-2025-MINEDU).', url: 'https://www.gob.pe/institucion/minedu/normas-legales/7380466-501-2025-minedu' }
    ],
    rejectedClaims: [
      'Reproducing ONEM problems, past papers or official solutions: refused; all six problems are ours and labelled so.',
      'Registering students for ONEM or any link to MINEDU, UGEL, DRE/GRE or Aceros Arequipa: refused; entry is through the school only.',
      'Medal, classification or score promises: refused.',
      'The national prize amount in soles: not printed (typed prices are refused on Peru pages).',
      'ONEM 2027 dates: not published as of 9 November 2026; the plan is labelled ours and conditional.',
      'Spanish-language teaching: refused; classes are live, online and in English only.'
    ]
  }
};

// SHIP: market (es subject door) | profesor particular de matemáticas online: reforzamiento de secundaria según el CNEB | successive percentage changes multiply, they do not add (x1.20 then x0.80 = x0.96)
'use strict';
// Profesor particular de matemáticas online (ag- Spanish-language door, Peru cluster row PE113, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only (priceSubject 'maths'); no per-hour figure, no
// soles, no competitor prices (KEYWORDS.md: "clases particulares precio por hora perú" is answered without a number).
// Searches (KEYWORDS.md section 3 and 6): "profesor particular de matematicas online", "clases particulares de
// matemáticas (precio, a domicilio, para secundaria)", "¿Clases a domicilio u online?", "¿Cuánto cobra un profesor
// particular de matemáticas por hora en Perú?".
// Spine: what an online private maths teacher is (one to one or a group, live, in English); online or a domicilio; what
// secundaria asks in maths (CNEB Tablas N.° 8 and 9, standards at levels 6 and 7 of competencies 23 and 24); what ENLA 2025
// found for 2° de secundaria and which classroom factors it linked to results; how we price (monthly, template) and what
// drives a tutoring fee; how to choose a tutor; an original Python lesson on successive percentages (a CNEB level 6 item).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/profesor-particular-de-matematicas-online-peru/,
// all fetched 2026-11-08, quotes grepped in the raw text):
//  CNEB (cneb.txt): Tabla N.° 8 (JER) "Matemática 4 4 4 4 4"; Tabla N.° 9 (JEC) "Matemática 6 6 6 6 6"; totals 35 and 45;
//    "horas pedagógicas (45 minutos)"; competency 23, level 6 standard "números naturales, enteros y racionales, y descuentos
//    porcentuales sucesivos"; level 7 "notación científica, intervalos, y tasas de interés simple y compuesto"; competency 24,
//    level 6 "progresiones aritméticas, ecuaciones e inecuaciones con una incógnita, funciones lineales y afín"; level 7
//    "progresiones geométricas, sistema de ecuaciones lineales, ecuaciones y funciones cuadráticas y exponenciales"; level 6
//    also "encuentra errores o vacíos en las argumentaciones propias y las de otros y las corrige".
//  MINEDU Edades normativas PDF: "VI 1er grado 2do grado VII 3er grado 4to grado 5to grado"; ages 12 to 16.
//  MINEDU press note 9 November 2025 (n-enla2025-aplicacion.txt): ENLA 2025 "entre el 11 y el 13 de noviembre" to "más de 200
//    mil estudiantes de 8700 instituciones educativas"; "2.° grado de secundaria en Lectura, Matemática y Ciencia y
//    Tecnología; y 5.° grado de secundaria en Lectura, Matemática, Ciencia y Tecnología, y Desarrollo Personal".
//  MINEDU press note 13 May 2026 (n-enla2025.txt): "En 2.º grado de secundaria, se registran avances en Matemática frente al
//    2023, siendo este el primer año con cambios positivos tras su severa afectación por el cierre de las escuelas."; factors:
//    "acompañamiento pedagógico, la promoción de la participación en el aula y la retroalimentación del docente" related to
//    higher performance (paraphrased on the page, not quoted, to keep one visible "mejor").
//  INEI Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): internet use "Lima Metropolitana, con un 92,4%; seguido del resto
//    urbano con 86,1%; y del área rural, con un 63,7%"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  EF EPI 2025 (ef_peru.txt): Lima 555 (high from 550), Peru 519.
//  Time: tzdata America/Lima -5:00 (no DST since 1994), Asia/Kolkata 5:30; INACAL feed UTC-5 on 2026-11-08.
// Our own calculations: 4 x 45 = 180 min and 6 x 45 = 270 min a week; the JEC adds 90 minutes of maths a week over the JER.
// Our own program sucesivos.py, run with python3 -I, exact output:
//    sube 20, baja 20     ->    96.0   suma ingenua: 100 / baja 20, sube 20 -> 96.0 suma ingenua: 100 / dos rebajas de 10 ->
//    81.0 suma ingenua: 80 / una rebaja de 20 -> 80.0 suma ingenua: 80 / sube 10 tres veces -> 133.1 suma ingenua: 130.
// Lesson family: successive percentage changes multiply (factors 1 + c/100), they do not add; order does not matter.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def aplicar(valor, cambios):',
  '    for c in cambios:',
  '        valor = valor * (1 + c / 100)',
  '    return round(valor, 2)',
  '',
  'casos = [',
  "    ('sube 20, baja 20', [20, -20]),",
  "    ('baja 20, sube 20', [-20, 20]),",
  "    ('dos rebajas de 10', [-10, -10]),",
  "    ('una rebaja de 20', [-20]),",
  "    ('sube 10 tres veces', [10, 10, 10]),",
  ']',
  '',
  'for nombre, cambios in casos:',
  '    final = aplicar(100, cambios)',
  '    ingenuo = 100 + sum(cambios)',
  "    print(f'{nombre:20} -> {final:7}   suma ingenua: {ingenuo}')"
].join('\n');

const OUT = [
  'sube 20, baja 20     ->    96.0   suma ingenua: 100',
  'baja 20, sube 20     ->    96.0   suma ingenua: 100',
  'dos rebajas de 10    ->    81.0   suma ingenua: 80',
  'una rebaja de 20     ->    80.0   suma ingenua: 80',
  'sube 10 tres veces   ->   133.1   suma ingenua: 130'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Profesor particular de matemáticas online' },
  slug: 'profesor-particular-de-matematicas-online-peru',
  code: 'ppm',
  accent: '#034A2E',
  accentRationale: 'Profesor particular de matemáticas online: a dark ledger green #034A2E, the colour of a cuaderno de matemática cover, deeper than the other two maths doors; 8.43:1 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  priceSubject: 'maths',
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Profesor particular de matemáticas online',
  title: 'Profesor particular de matemáticas online en Perú, en inglés',
  description: 'Profesor particular de matemáticas online para escolares de Perú: clases en vivo y en inglés, uno a uno o en grupo, para reforzar primaria y secundaria a toda hora.',
  ogDescription: 'Clases particulares de matemáticas en línea desde Perú: qué pide la secundaria según el CNEB, online o a domicilio, cómo cobramos y una lección nuestra sobre porcentajes.',
  twitterDescription: 'Un profesor particular de matemáticas en línea, en vivo y en inglés, para estudiantes en Perú, uno a uno o en grupo, a la hora que usted decida.',
  pageName: 'Profesor particular de matemáticas online',
  webPageDescription: 'Guía para familias en Perú que buscan un profesor particular de matemáticas online: diferencias con las clases a domicilio, lo que pide la matemática de secundaria según los estándares del CNEB, lo que informó la ENLA 2025 sobre 2° de secundaria, cómo se fija el costo de unas clases particulares y una lección original en Python sobre porcentajes sucesivos.',
  courseDescription: 'Clases particulares de matemáticas en vivo y en línea, dictadas solo en inglés, para escolares de primaria y secundaria en todo el Perú y para quienes se preparan para la universidad: individuales o en un grupo de quince a veinte estudiantes, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Profesor particular de matemáticas online',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#domicilio', label: 'Online o a domicilio' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#costo', label: 'Costo' },
    { href: '#porcentajes', label: 'Ejemplo' },
    { href: '#elegir', label: 'Cómo elegir' }
  ],
  eyebrow: 'Perú &middot; Clases particulares de matemáticas &middot; En línea',
  h1: 'Profesor particular de matemáticas online, en inglés',
  lede: 'Cuando las notas de matemática bajan o un tema se atasca, muchas familias peruanas buscan un profesor particular. Esta página explica cómo funciona hacerlo en línea con nosotros, qué pide la secundaria en cada ciclo, de qué depende el costo de unas clases particulares y cómo reconocer a un buen profesor antes de pagar el primer mes.',
  secondaryCta: { href: '#costo', label: '¿Cuánto cuestan?' },
  wa: 'Hola Modern Age Coders, buscamos un profesor particular de matemáticas online para nuestro hijo o hija en Perú. ¿Podemos agendar una clase gratis?',
  heroNote: 'En línea desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; 4.9 en 547 reseñas de Google',
  spec: [
    ['Para quién', 'Primaria, secundaria y antes de la universidad'],
    ['Formato', 'Uno a uno, o un grupo de quince a veinte'],
    ['Idioma', 'Solo inglés, con explicaciones paso a paso'],
    ['Temas', 'Los del colegio: números, álgebra, funciones, geometría y datos'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Modern Age Coders ofrece profesor particular de matemáticas online a escolares de todo el Perú: clases en vivo por videollamada y en inglés, con un profesor desde la India que explica con calma, escribe cada paso en una pizarra compartida y se adapta al ritmo y al acento del estudiante. Sirve para reforzar lo que pide el colegio, de primaria a 5° de secundaria, y para prepararse antes de la universidad. Puede ser uno a uno o en grupo, el día y la hora que usted elija, y la primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para reforzar matemática con un profesor',
    lede: 'Las familias que buscan clases particulares suelen llegar en uno de tres momentos: la primaria se complicó, el álgebra de los primeros años de secundaria no cuaja, o el final de la secundaria se viene encima.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'PPM / 01', title: 'Reforzamiento de primaria', alt: 'Imagen del curso de matemática para primaria', note: 'Para quien arrastra dudas con operaciones, fracciones o problemas. Se revisa lo que falta, sin repetir lo que ya domina.' },
      { course: 'algebra-foundations-masterclass', code: 'PPM / 02', title: 'Álgebra desde la base', alt: 'Imagen del curso de fundamentos de álgebra', note: 'Para 1° a 3° de secundaria. Ecuaciones, inecuaciones y funciones lineales, el corazón del ciclo VI según el CNEB.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'PPM / 03', title: 'Secundaria superior completa', alt: 'Imagen del curso de matemática de secundaria superior', note: 'Para 3° a 5° de secundaria. Sistemas, funciones cuadráticas y exponenciales, trigonometría y estadística, con vista a la universidad.' }
    ]
  },

  sections: [
    {
      id: 'domicilio',
      eyebrow: 'Online o a domicilio',
      h2: '¿Clases particulares de matemáticas online o a domicilio?',
      lede: 'Las dos funcionan si el profesor es bueno. Lo que cambia es la logística, el horario posible y, en nuestro caso, el idioma: las nuestras son en línea, en vivo y en inglés.',
      body: [
        { kind: 'table', numCols: [], caption: 'Clases particulares en línea y a domicilio, comparadas (nuestra comparación)', head: ['', 'En línea, como las nuestras', 'A domicilio'], rows: [
          ['Traslado', 'Ninguno; el profesor llega por videollamada', 'El profesor viaja a su casa'],
          ['Horario', 'Cualquier hora que ambos acuerden, también temprano o de noche', 'Depende de la ruta y la agenda del profesor'],
          ['Pizarra', 'Compartida en pantalla; queda guardada para repasar', 'Papel o pizarra física'],
          ['Idioma', 'Solo inglés', 'Normalmente castellano'],
          ['Seguimiento', 'Nota escrita a la familia después de las clases', 'Conversación en la puerta'],
          ['Qué necesita en casa', 'Computadora con cámara, micrófono y buena conexión', 'Una mesa y tranquilidad']
        ] },
        { kind: 'source', html: 'Comparación nuestra; no describe a ningún profesor ni academia en particular.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dice el INEI sobre la conexión',
          left: [
            'Según el boletín de tecnologías de la información del INEI para el segundo trimestre de 2026, el uso de internet llegó al 92,4% de la población de 6 años a más en Lima Metropolitana (que incluye el Callao), al 86,1% en el resto urbano y al 63,7% en el área rural.',
            'El mismo boletín indica que el 36,4% de los hogares del país dispone de al menos una computadora. Para una clase particular online hace falta una, aunque sea compartida: con un celular se puede mirar, pero no escribir una ecuación con comodidad.'
          ],
          rightH3: 'Por qué en inglés',
          right: [
            'Porque es como enseñamos todas nuestras clases. Para los estudiantes de colegios bilingües o del Bachillerato Internacional, es además el idioma de sus exámenes; para el resto, una hora de matemática que también es práctica de idioma.',
            'El EF EPI 2025 ubica a Lima en 555 puntos, dentro del nivel alto que EF fija desde 550. Aun así, en la clase gratis vemos cuánto apoyo de vocabulario necesita su hijo y lo damos desde el primer día.'
          ] }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Lo que pide la secundaria',
      h2: '¿Qué matemática tiene que dominar un estudiante de secundaria?',
      lede: 'El CNEB describe lo que se espera al final de cada ciclo. En secundaria hay dos: el ciclo VI (1° y 2°) y el ciclo VII (3°, 4° y 5°). Estos son los estándares de dos competencias donde más piden ayuda las familias.',
      body: [
        { kind: 'table', numCols: [], caption: 'Estándares de Matemática al final de los ciclos VI y VII, en palabras del CNEB', head: ['Competencia', 'Al final del ciclo VI (2° de secundaria)', 'Al final del ciclo VII (5° de secundaria)'], rows: [
          ['Resuelve problemas de cantidad', '"números naturales, enteros y racionales, y descuentos porcentuales sucesivos"', '"notación científica, intervalos, y tasas de interés simple y compuesto"'],
          ['Resuelve problemas de regularidad, equivalencia y cambio', '"progresiones aritméticas, ecuaciones e inecuaciones con una incógnita, funciones lineales y afín"', '"progresiones geométricas, sistema de ecuaciones lineales, ecuaciones y funciones cuadráticas y exponenciales"']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Currículo Nacional de la Educación Básica, estándares de aprendizaje de las competencias 23 y 24, niveles 6 y 7, que son los esperados al final de los ciclos VI y VII (leído el 8 de noviembre de 2026). La relación entre ciclo y grado sale de la tabla de edades normativas del MINEDU.' },
        { kind: 'p', mt: true, html: 'Leída de izquierda a derecha, la tabla resume el salto de la secundaria: se pasa de lo lineal a lo cuadrático y exponencial, de una incógnita a sistemas, de porcentajes sueltos a interés compuesto. Casi todas las consultas de clases particulares que recibimos de 3° y 4° de secundaria están en ese salto.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Horas pedagógicas semanales de Matemática en secundaria, según el tipo de jornada', head: ['Tipo de jornada', 'Matemática por semana', 'Total de la semana'], rows: [
          ['Jornada Escolar Regular (Tabla N.° 8)', '4', '35'],
          ['Jornada Escolar Completa (Tabla N.° 9)', '6', '45']
        ] },
        { kind: 'source', html: 'Fuente: CNEB, Tablas N.° 8 y N.° 9, iguales para los cinco grados. El CNEB mide el tiempo en horas pedagógicas de 45 minutos.' },
        { kind: 'p', mt: true, html: 'En minutos, cuatro horas pedagógicas son 180 a la semana y seis son 270: un colegio con Jornada Escolar Completa da 90 minutos más de matemática semanal que uno con jornada regular (cálculo nuestro). Por eso, antes de recomendar cuántas clases particulares tomar, preguntamos qué jornada tiene el colegio y cuánta tarea deja.' },
        { kind: 'p', html: 'El mismo estándar del ciclo VI pide algo que en un profesor particular importa mucho: que el estudiante "encuentra errores o vacíos en las argumentaciones propias y las de otros y las corrige". Un buen reforzamiento no consiste en resolver la tarea por el estudiante, sino en enseñarle a revisar su propio trabajo hasta encontrar dónde se equivocó.' }
      ]
    },
    {
      id: 'enla',
      eyebrow: 'Evaluación nacional',
      h2: '¿Qué dice la ENLA 2025 sobre la matemática en secundaria?',
      lede: 'La Evaluación Nacional de Logros de Aprendizaje (ENLA) 2025 se aplicó del 11 al 13 de noviembre de 2025 a más de 200 mil estudiantes de 8700 colegios. En secundaria evaluó a 2° grado y a 5° grado, en ambos casos con Matemática.',
      body: [
        { kind: 'p', html: 'En su nota del 13 de mayo de 2026, el MINEDU informó que "en 2.º grado de secundaria, se registran avances en Matemática frente al 2023, siendo este el primer año con cambios positivos tras su severa afectación por el cierre de las escuelas". A nivel nacional, los resultados fueron similares a los de 2023 y 2024 en Lectura y Matemática.' },
        { kind: 'p', html: 'La misma nota describe factores asociados: según el MINEDU, la satisfacción de los estudiantes con el acompañamiento pedagógico, la promoción de la participación en el aula y la retroalimentación del docente se relacionan con un desempeño más alto. Son, casualmente, tres cosas que una clase particular bien dada puede ofrecer: alguien que acompaña, que hace hablar al estudiante y que le devuelve una observación concreta sobre cada ejercicio.' },
        { kind: 'p', html: 'La ENLA no nos sirve para clasificar a ningún estudiante; tampoco tenemos relación alguna con el MINEDU o su oficina de medición, y no prometemos que una clase particular cambie la nota de ningún examen. Lo que sí hacemos es tomarnos en serio esas tres cosas en cada sesión.' }
      ]
    },
    {
      id: 'costo',
      eyebrow: 'Precio',
      h2: '¿Cuánto cobra un profesor particular de matemáticas por hora en Perú?',
      lede: 'Depende de quién enseña, cuánto prepara y qué incluye cada clase. Nosotros no cobramos por hora suelta: cobramos una mensualidad, que aparece más abajo en la sección de precios, en dólares estadounidenses.',
      body: [
        { kind: 'p', html: 'No publicamos lo que cobran otros profesores o academias y no convertimos nuestra tarifa a soles: la página muestra un solo precio, el nuestro, en la moneda en que se cobra. Lo que sí podemos explicar es qué hace que unas clases particulares cuesten más o menos, para que usted compare con criterio y no solo por el número.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Lo que cambia el costo de unas clases particulares de matemáticas (nuestra lista)', head: ['Factor', 'Qué preguntar', 'Cómo lo resolvemos'], rows: [
          ['Uno a uno o en grupo', '¿El profesor atiende solo a mi hijo?', 'Usted elige: individual o un grupo de quince a veinte'],
          ['Preparación', '¿Prepara cada clase o improvisa con la tarea?', 'El profesor planifica según el diagnóstico y el tema del colegio'],
          ['Continuidad', '¿Será siempre la misma persona?', 'El mismo profesor durante todo el curso'],
          ['Seguimiento', '¿Informa a la familia?', 'Una nota breve después de las clases'],
          ['Traslado', '¿Cobra movilidad?', 'No existe: la clase es en línea'],
          ['Compromiso', '¿Hay matrícula o permanencia?', 'Pago mensual, sin permanencia']
        ] },
        { kind: 'p', mt: true, html: 'La primera clase es gratis y no le pedimos tarjeta. Si después decide seguir, el pago es mensual y con tarjeta; su banco convierte el monto a soles.' }
      ]
    },
    {
      id: 'porcentajes',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se trabaja un tema difícil en una clase particular?',
      lede: 'Empezando por el error. Este ejemplo, escrito por nosotros, toma un punto del estándar del ciclo VI, los "descuentos porcentuales sucesivos", y lo convierte en un experimento con un programa corto en Python.',
      body: [
        { kind: 'p', html: 'La pregunta que abre la clase es sencilla: un valor de 100 sube 20% y luego baja 20%. ¿Vuelve a 100? La mayoría de estudiantes de 2° de secundaria dice que sí, porque suma 20 y resta 20. El profesor no corrige: propone comprobarlo con varios casos a la vez.' },
        { kind: 'code', label: 'Porcentajes sucesivos en Python', lang: 'Python', code: PY, note: 'Cada cambio de c% multiplica el valor por (1 + c/100): subir 20% es multiplicar por 1.20 y bajar 20% es multiplicar por 0.80. La columna "suma ingenua" hace lo que hace el estudiante que suma los porcentajes.' },
        { kind: 'code', label: 'La salida', lang: 'Salida', code: OUT, note: 'Copiada tal cual después de ejecutar el programa en Python 3. Los decimales se escriben con punto, como en inglés.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Comparar las dos columnas.</strong> Subir 20 y bajar 20 deja 96, no 100. El estudiante tiene que explicar en inglés por qué: <em>the second 20% is taken from 120, not from 100</em>.',
          '<strong>Cambiar el orden.</strong> Bajar primero y subir después también da 96. La multiplicación es conmutativa: 1.20 × 0.80 y 0.80 × 1.20 dan 0.96. El orden no importa; la suma ingenua tampoco acierta.',
          '<strong>Dos rebajas no son una.</strong> Dos rebajas de 10% dejan 81, no 80, porque 0.90 × 0.90 = 0.81. Es el caso que el CNEB nombra para el ciclo VI y el que más aparece en problemas de tiendas y ofertas.',
          '<strong>Crecer varias veces.</strong> Subir 10% tres veces da 133.1, no 130: 1.10 × 1.10 × 1.10 = 1.331. Es la puerta de entrada al interés compuesto que el estándar pide al final del ciclo VII.',
          '<strong>Generalizar.</strong> El estudiante escribe la regla en una línea: después de cambios c1, c2, ..., el valor final es el inicial por el producto de los factores (1 + c/100). Y la comprueba con un caso nuevo que él mismo inventa.'
        ] },
        { kind: 'p', mt: true, html: 'Esta forma de trabajar, primero el error, después la prueba y al final la regla, es la que usamos en todos los temas. Así el estudiante no memoriza un truco para el examen del viernes: entiende por qué la suma falla y puede reconocer el mismo error en un problema que nunca vio.' },
        { kind: 'p', html: 'Si su hijo todavía no programa, la misma lección se hace con una tabla en el cuaderno. Y si le interesa la programación, la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> muestra cómo enseñamos Python a los más pequeños.' }
      ]
    },
    {
      id: 'elegir',
      eyebrow: 'Antes de contratar',
      h2: '¿Cómo elegir un profesor particular de matemáticas online?',
      lede: 'Con una clase de prueba y cinco preguntas. Da igual si el profesor es nuestro o de otro lugar: estas señales separan una clase particular útil de una hora de tarea resuelta por otro.',
      body: [
        { kind: 'ol', items: [
          '<strong>¿Pregunta antes de explicar?</strong> Un buen profesor empieza averiguando qué sabe el estudiante. Si en los primeros minutos solo habla él, mala señal.',
          '<strong>¿Quién sostiene el lápiz?</strong> En la pizarra compartida debe escribir el estudiante la mayor parte del tiempo. El profesor guía con preguntas.',
          '<strong>¿Deja equivocarse?</strong> Un error descubierto por el propio estudiante vale más que diez corregidos por el profesor. Esa es, en palabras del CNEB, la capacidad de encontrar errores y corregirlos.',
          '<strong>¿Explica el porqué?</strong> Pídale a su hijo, después de la clase de prueba, que le cuente por qué se hace un paso, no solo cuál es. Si sabe el porqué, la clase funcionó.',
          '<strong>¿Informa a la familia?</strong> Usted debería saber, cada cierto tiempo, qué se trabajó, qué cuesta todavía y qué conviene practicar.'
        ] },
        { kind: 'p', mt: true, html: 'Un aviso sobre la inteligencia artificial: hay aplicaciones que resuelven cualquier ejercicio con una foto. Pueden servir para revisar, pero no reemplazan el razonamiento propio. En nuestras clases el estudiante resuelve primero; si después quiere comparar con una herramienta, lo hace con el profesor al lado, explicando las diferencias.' },
        { kind: 'p', html: 'Para estudiantes de colegios bilingües de Lima que ya estudian matemática en inglés, la guía de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">clases en inglés para familias de Lima</a> (en inglés) explica cómo encajan nuestras clases con ese tipo de colegio, y la página <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> reúne todo lo que enseñamos en el país.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿En qué horario se puede tomar la clase particular?',
      lede: 'A la que encaje con el colegio y con la rutina de la casa. Los profesores viven en la India, que siempre va diez horas y media por delante de Perú.',
      body: [
        { kind: 'table', numCols: [], caption: 'Seis horas de Perú pasadas a la hora de la India (ejemplos de conversión, sin horario predeterminado)', head: ['Perú', 'India', 'Uso frecuente'], rows: [
          ['6:30 a. m.', '5:00 p. m.', 'Antes de salir al colegio'],
          ['8:00 a. m.', '6:30 p. m.', 'Turno tarde, mañana libre'],
          ['12:30 p. m.', '11:00 p. m.', 'Mediodía en vacaciones'],
          ['3:00 p. m.', '1:30 a. m. (día siguiente)', 'Turno mañana, después del almuerzo'],
          ['7:30 p. m.', '6:00 a. m. (día siguiente)', 'Repaso antes de un examen'],
          ['9:00 p. m.', '7:30 a. m. (día siguiente)', 'Estudiantes mayores, de noche']
        ] },
        { kind: 'source', html: 'Perú se rige por UTC-5 durante todo el año (zona America/Lima de tzdata; no hay cambio estacional desde 1994, y el reloj oficial del INACAL lo confirmó el 8 de noviembre de 2026); la India, por UTC+5:30. El uso frecuente es una sugerencia nuestra.' },
        { kind: 'p', mt: true, html: 'Como ninguno de los dos países cambia la hora durante el año, la conversión es la misma en marzo, cuando empiezan las clases, que en diciembre, cuando terminan. Al reservar, usted ve los horarios disponibles en hora peruana.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo medir si las clases particulares están funcionando?',
    lede: 'No por una nota aislada, sino por cinco señales que usamos para hablar con la familia.',
    table: { caption: 'Cinco señales de avance en las clases particulares (nuestras)', head: ['Señal', 'Cuándo suele aparecer', 'Qué se ve'], rows: [
      ['1. Llega con preguntas', 'Primeras semanas', 'el estudiante trae dudas concretas del colegio en vez de esperar que el profesor elija el tema'],
      ['2. Escribe el planteamiento', 'Primer mes', 'antes de calcular, escribe qué representa cada letra y qué pide el problema'],
      ['3. Encuentra su error', 'Segundo mes', 'revisa un ejercicio mal resuelto y señala la línea donde falló sin ayuda'],
      ['4. Explica el porqué', 'Segundo o tercer mes', 'justifica en inglés cada paso, como en la lección de porcentajes'],
      ['5. Trabaja solo', 'Con el tiempo', 'resuelve la tarea del colegio sin el profesor y usa la clase para temas nuevos']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'La nota del colegio tarda en moverse, porque mide temas que se enseñaron antes. Fíjese primero en las señales 2 y 3.',
      'Si después de dos meses no ve ninguna de estas señales, díganoslo: cambiamos el plan, el formato o el profesor.'
    ] },
    right: { h3: 'Para estudiantes', ps: [
      'Traiga siempre el ejercicio que no le salió, no el que ya sabe. Es el que más enseña.',
      'Cuando el profesor pregunte "why?", no busque la respuesta correcta: diga lo que pensó. Desde ahí se corrige.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para clases particulares de matemáticas',
    lede: 'Todos se pueden tomar uno a uno o en grupo, en vivo y en inglés, con un profesor fijo.',
    bands: [
      { num: 'I', h3: 'Bases sólidas', sub: 'Primaria', courses: [
        { code: 'PPM / BASE / 01', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Para quien cuenta con los dedos en 4° grado y quiere soltarse.' },
        { code: 'PPM / BASE / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Matemática védica', blurb: 'Métodos de cálculo rápido que se entienden y se comprueban.' },
        { code: 'PPM / BASE / 03', slug: 'maths-through-coding', title: 'Matemática con Python', blurb: 'Para quien aprende haciendo: fracciones y gráficos programados.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 1° a 5° de secundaria', courses: [
        { code: 'PPM / SEC / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Preálgebra y geometría', blurb: 'Razones, porcentajes, ángulos y áreas para 1° y 2°.' },
        { code: 'PPM / SEC / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'La competencia de datos e incertidumbre, de los gráficos a la probabilidad.' },
        { code: 'PPM / SEC / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Matemática de olimpiada', blurb: 'Para quien va bien y quiere problemas más difíciles.' }
      ] },
      { num: 'III', h3: 'Después del colegio', sub: 'Desde 16 años', courses: [
        { code: 'PPM / POST / 01', slug: 'college-mathematics-complete-masterclass', title: 'Matemática universitaria', blurb: 'Cálculo y álgebra lineal para los primeros ciclos.' },
        { code: 'PPM / POST / 02', slug: 'complete-business-finance-mathematics-mastery', title: 'Matemática financiera', blurb: 'Interés compuesto, inversión y riesgo, con ejemplos aplicados.' },
        { code: 'PPM / POST / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Matemática para datos', blurb: 'Estadística y álgebra lineal para analizar datos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una clase particular de matemáticas en línea?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes del colegio, con la cabeza fresca.' },
      { time: 'Después de la tarea', l: 'Para resolver lo que no salió en casa.' },
      { time: 'Antes de un examen', l: 'Sesiones extra de repaso, acordadas con el profesor.' }
    ],
    cells: [
      { h3: 'Diagnóstico inicial', p: 'La primera clase muestra qué sabe y qué falta, tema por tema.' },
      { h3: 'Plan por competencias', p: 'Cantidad, álgebra, datos o geometría: se ataca lo que más cuesta.' },
      { h3: 'El estudiante escribe', p: 'La pizarra compartida es suya; el profesor pregunta y orienta.' },
      { h3: 'Mismo profesor', p: 'Una sola persona sigue el avance de principio a fin.' },
      { h3: 'Pizarra guardada', p: 'Cada sesión queda escrita para repasar antes del examen.' },
      { h3: 'Uno a uno o grupo', p: 'Solo con el profesor, o con quince a veinte compañeros de nivel parecido.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Muchos estudiantes que vienen por matemática terminan también programando. Estos son algunos proyectos, y hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, página en inglés.',
  reviewsLede: 'Reseñas reales de Google, escritas en inglés por familias y estudiantes y reproducidas sin cambios.',

  fees: {
    h2: 'Precio de las clases particulares de matemáticas',
    lede: 'Cobramos por mes, no por hora, y el monto se ve aquí en dólares de Estados Unidos. Se paga con tarjeta; la conversión a soles corre por cuenta del banco emisor, con su tipo de cambio del día, por eso el cargo puede moverse unos céntimos.',
    free: ['Una clase de diagnóstico gratis', 'Un plan por competencias', 'Sin tarjeta y sin compromiso'],
    group: ['Un grupo de quince a veinte estudiantes', 'El mismo profesor cada semana', 'Dos clases en vivo por semana', 'Mensual y sin permanencia'],
    one: ['Clases particulares uno a uno', 'El temario exacto del colegio de su hijo', 'El horario que usted decida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Profesor particular de matemáticas online: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las damos en vivo, por internet y únicamente en inglés, y lo planteamos como una ventaja: su hijo refuerza matemática y practica inglés en la misma sesión, con un profesor que va despacio y se adapta a su ritmo. Lima tiene un nivel alto de inglés según el EF EPI 2025, y explicar un ejercicio en voz alta es justo la práctica oral que más falta.' },
      { q: '¿Cuánto cobra un profesor particular de matemáticas por hora en Perú?', a: 'Varía mucho según el profesor, la preparación y lo que incluye. Nosotros no cobramos por hora: la mensualidad aparece en la sección de precios de esta página, en dólares, y la primera clase es gratis. No publicamos precios de otros profesores ni conversiones a soles.' },
      { q: '¿Conviene más una clase particular online o a domicilio?', a: 'Las dos funcionan con un buen profesor. En línea no hay traslados, el horario es más flexible y la pizarra queda guardada; a domicilio no hace falta computadora. Las nuestras son solo en línea.' },
      { q: '¿Las clases particulares son uno a uno?', a: 'Si usted lo elige, sí: su hijo y el profesor, nadie más. También hay grupos de quince a veinte estudiantes de nivel parecido, que cuestan menos.' },
      { q: '¿Siguen los temas del colegio?', a: 'Sí. Trabajamos las competencias de Matemática del CNEB y, si su hijo trae su cuaderno o su tarea, el tema que estén viendo esa semana. No tenemos vínculo con ningún colegio y no ponemos notas.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 8:00 a. m. en Perú son las 6:30 p. m. en la India.' },
      { q: '¿Sirven para preparar el examen de admisión?', a: 'Practicamos razonamiento matemático en inglés, que ayuda a cualquier examen. Pero los exámenes de admisión de las universidades peruanas son en castellano y tienen su propio temario: no prometemos ningún ingreso.' },
      { q: '¿Mi hijo puede usar inteligencia artificial para la tarea?', a: 'Para revisar, con criterio, sí. Para resolver en su lugar, no. En clase resuelve primero el estudiante; si quiere comparar con una herramienta, lo hace explicando las diferencias con el profesor.' },
      { q: '¿Cómo se paga?', a: 'Mes a mes, con tarjeta y en dólares de Estados Unidos; la conversión a soles la hace su banco. No cobramos matrícula ni exigimos permanencia.' },
      { q: '¿Dan algún certificado?', a: 'Solo nuestro certificado de finalización de curso, de Modern Age Coders. No tiene valor oficial en el sistema educativo peruano ni reemplaza ninguna nota del colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras páginas útiles; varias están en inglés, como las clases.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todo lo que ofrecemos para estudiantes en Perú.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium classes in Lima', p: 'Para familias de colegios bilingües, Cambridge e IB.' },
      { href: '/math-catch-up-program', label: 'Math catch-up program', p: 'Nuestro programa para ponerse al día en matemática.' },
      { href: '/statistics-tutoring-online', label: 'Statistics tutoring online', p: 'Clases particulares de estadística, explicadas en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo se organiza una clase en vivo con nosotros.' },
      { href: '/courses', label: 'All courses', p: 'Cursos de matemáticas y programación, por edad.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de diagnóstico gratis',
    lede: 'En la clase de prueba el profesor le propone a su hijo tres o cuatro ejercicios del nivel de su grado, uno por competencia, y mira cómo los piensa, no solo si acierta. Con eso le sugerimos formato, curso y frecuencia, sin compromiso.',
    readFirst: 'Si quiere conocernos antes, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cuenta cómo enseñamos y <a class="ag-inline-link" href="/courses">All courses</a> lista los cursos; están en inglés.',
    note: 'Clases en vivo, en línea y en inglés, con profesores que viven en la India. Por WhatsApp le respondemos aunque nos escriba en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Reforzamiento', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primaria' },
        { href: '/courses/algebra-foundations-masterclass', label: 'Álgebra desde la base' },
        { href: '/courses/complete-high-school-mathematics-mastery', label: 'Secundaria superior' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más ayuda', links: [
        { href: '/math-catch-up-program', label: 'Ponerse al día' },
        { href: '/statistics-tutoring-online', label: 'Estadística' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Sube 20, baja 20: 96, no 100'
  },

  personalityCss: `
.ag-root.ag-ppm .ag-hero h1 { letter-spacing: -0.014em; max-width: 20ch; }
.ag-root.ag-ppm .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-ppm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ppm .ag-table th { text-transform: none; letter-spacing: 0.01em; }
.ag-root.ag-ppm .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Currículo Nacional de la Educación Básica (Tablas N.° 8 and 9, horas pedagógicas of 45 minutes, standards of competencies 23 and 24 at levels 6 and 7), Edades normativas (cycles VI and VII), ENLA 2025 press notes of 9 November 2025 and 13 May 2026; INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; tzdata and INACAL for time. All read 8 November 2026. The online versus a domicilio table, the cost-factor table, the Python lesson, the tutor checklist and the progress signals are our own.',
    localProject: 'An original Python lesson for a 2° de secundaria student on successive percentage changes, the "descuentos porcentuales sucesivos" of the CNEB cycle VI standard: aplicar(valor, cambios) multiplies by (1 + c/100) for each change; run with python3 -I on a value of 100 it prints 96.0 for up 20 then down 20 (and the reverse), 81.0 for two 10% cuts and 133.1 for three 10% rises, against the naive sums 100, 80 and 130. Lesson family: successive percentage changes multiply, they do not add.',
    requiredMentions: ['sube 20, baja 20     -&gt;    96.0   suma ingenua: 100', 'dos rebajas de 10    -&gt;    81.0   suma ingenua: 80', 'descuentos porcentuales sucesivos', 'tasas de interés simple y compuesto', 'progresiones geométricas, sistema de ecuaciones lineales, ecuaciones y funciones cuadráticas y exponenciales', 'siendo este el primer año con cambios positivos tras su severa afectación por el cierre de las escuelas', 'el uso de internet llegó al 92,4%', 'un colegio con Jornada Escolar Completa da 90 minutos más de matemática semanal', 'Sube 20, baja 20: 96, no 100'],
    sources: [
      { claim: 'Secundaria maths hours (Tablas N.° 8 and 9); 45-minute teaching hours; standards of competencies 23 and 24 at levels 6 and 7.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Cycles VI and VII by grade.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'ENLA 2025 applied 11 to 13 November 2025 to over 200,000 students in 8,700 schools; 2° and 5° de secundaria assessed in maths.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'ENLA 2025: 2° de secundaria maths gains over 2023; associated factors (pedagogical support, participation, teacher feedback).', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'Internet use 92.4% Lima Metropolitana, 86.1% other urban, 63.7% rural; 36.4% of households with a computer (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, high band from 550.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'A price per hour, a soles figure or any competitor price: refused; the page explains cost factors and the monthly fee renders from the template in USD.',
      'Any promise of a better grade, an ENLA result or university admission: refused; admission exams are in Spanish and the page says so.',
      'Any MINEDU, UMC or school endorsement, or an official certificate: none; only our own certificate of completion.',
      'Describing named tutors or academias: refused; the online versus a domicilio comparison is generic and labelled ours.'
    ]
  }
};

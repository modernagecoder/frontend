// SHIP: market | Miraflores all year, every age: more over-60s than under-18s, one plan per life stage | f-string format specs: width, alignment, thousands, percent
'use strict';
// Clases de programación en Miraflores (ag- Spanish district door, Peru cluster row PE136, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round, all ages; differs from vacaciones-utiles-de-programacion-miraflores-lima, which matched summer
// workshops to a child's age): Miraflores is a district where people of 60 and over outnumber everyone under 18 put
// together (INEI 2025, Cuadro 3, our calculation), so the page plans one route per life stage: niño, adolescente,
// universitario, adulto, adulto mayor. Municipal context only from the council's own notes on gob.pe (Centro de Innovación
// webinars, Diverticole sports workshops during the school year, the children's advisory council). Lesson: turning the
// district's own census row into a readable table with f-string format specifiers.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-miraflores/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO MIRAFLORES 126049
//    58214 67835 121203 55860 65343 4846 2354 2492"; "LIMA METROPOLITANA 10141775". (inei/sheet4_CUADRO_N_3.tsv, población
//    censada por grupo de edad): "DISTRITO MIRAFLORES 121203 4906 6204 6575 15698 31906 26014 29900"; "LIMA METROPOLITANA
//    9600043 555239 818096 867253 1800348 2322499 1744864 1491744".
//  - Municipalidad de Miraflores on gob.pe (institucion/munimiraflores-lima):
//    n-587694.txt, 8 Feb 2022: "sigue realizando webinars (seminarios virtuales) en vivo este verano 2022, sin costo alguno
//      para vecinos y no vecinos"; "desde el inició de la pandemia por el COVID-19 el Centro de Innovación de Miraflores ha
//      realizado 250 seminarios virtuales gratuitos con más de 160 expositores".
//    n-613646.txt, 25 Apr 2022: "talleres deportivos del programa Diverticole 2022, a desarrollarse durante los meses de
//      mayo y junio"; "Estos talleres están orientados a menores entre los 5 y 16 años de edad"; "Ajedrez".
//    n-678969.txt, 21 Sep 2022: "se formó El Consejo Consultivo de Niños y Adolescentes, que involucra a estudiantes entre
//      los nueve y 17 años"; "torneo de videojuegos".
//    gob.pe searches (gobpe/q-*.html): "computacion" total 0 for this institution; no programming course listed.
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): Lima Metropolitana "92,4%" use internet; "el 53,3% en Lima
//    Metropolitana" of households have a computer; "84,7% de los hogares" have internet; by age "60 y más 40,8 47,3 50,2
//    56,7" and "41 a 59 años 76,5 79,9 81,9 86,0" (national); "1/ Lima Metropolitana incluye la Provincia Constitucional
//    del Callao."
//  - EF EPI 2025 (ef_peru.txt): Lima 555, the High band starts at 550.
//  - Time (timezone.tsv): Peru UTC-5 all year (America/Lima), India UTC+5:30.
//  - Neighbouring districts, plain text: San Isidro, Surquillo, Santiago de Surco, Barranco; the Pacific coast (Costa Verde).
// Our own calculations (python3 -I): 29900 / 121203 = 24.67% (60 y más); (4906 + 6204 + 6575) = 17685 under 18, 17685 /
//   121203 = 14.59%; Lima Metropolitana 60 y más 1491744 / 9600043 = 15.54%; 18 a 29: 15698 / 121203 = 12.95%, Lima 18.75%.
// Our own example (mira_v1.py, mira_v2.py, mira_reto.py), exact output:
//   v1 first line "0 a 5 4906 0.040477545935331635"; v2 "Group       People   Share" / "0 a 5        4,906    4.0%" ...
//   "60 y mas    29,900   24.7%" / "Total      121,203"; reto (width 6) "Total     121,203" pushes past the column.
// Lesson family: f-string format specifiers (width, < and > alignment, the thousands separator and the percent type); the
// value never changes, only its text; a width is a minimum, not a maximum.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'total = 121203',
  'grupos = [',
  "    ('0 a 5', 4906),",
  "    ('6 a 11', 6204),",
  "    ('12 a 17', 6575),",
  "    ('18 a 29', 15698),",
  "    ('30 a 44', 31906),",
  "    ('45 a 59', 26014),",
  "    ('60 y mas', 29900),",
  ']',
  '',
  'for nombre, personas in grupos:',
  '    print(nombre, personas, personas / total)'
].join('\n');

const OUT1 = [
  '0 a 5 4906 0.040477545935331635',
  '6 a 11 6204 0.051186851810598746',
  '12 a 17 6575 0.05424783214936924',
  '18 a 29 15698 0.12951824624803016',
  '30 a 44 31906 0.26324430913426233',
  '45 a 59 26014 0.21463165103174014',
  '60 y mas 29900 0.24669356369066772'
].join('\n');

const V2 = [
  '# same total and grupos as before',
  '',
  'print(f"{\'Group\':<10}{\'People\':>8}{\'Share\':>8}")',
  'for nombre, personas in grupos:',
  "    print(f'{nombre:<10}{personas:>8,}{personas / total:>8.1%}')",
  'print(f"{\'Total\':<10}{total:>8,}")'
].join('\n');

const OUT2 = [
  'Group       People   Share',
  '0 a 5        4,906    4.0%',
  '6 a 11       6,204    5.1%',
  '12 a 17      6,575    5.4%',
  '18 a 29     15,698   13.0%',
  '30 a 44     31,906   26.3%',
  '45 a 59     26,014   21.5%',
  '60 y mas    29,900   24.7%',
  'Total      121,203'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en Miraflores' },
  slug: 'clases-de-programacion-miraflores',
  code: 'prm',
  accent: '#71330C',
  accentRationale: 'Clases de programación en Miraflores: a burnt clay brown #71330C, the colour of the cliff faces under the Malecón at dusk, warmer and darker than the moss green of the Miraflores summer page; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en Miraflores',
  title: 'Clases de programación en Miraflores, en vivo y en inglés',
  description: 'Clases de programación en Miraflores para niños, adolescentes, universitarios y adultos: en vivo, en línea y en inglés, todo el año, en grupo o individuales.',
  ogDescription: 'Miraflores tiene más vecinos de 60 años o más que menores de 18, según el censo de 2025. Una ruta de programación por etapa de la vida, en vivo y en inglés.',
  twitterDescription: 'Programación en vivo y en inglés para todas las edades en Miraflores, todo el año y a la hora que usted elija.',
  pageName: 'Clases de programación en Miraflores',
  webPageDescription: 'Guía para vecinos de Miraflores que buscan clases de programación durante todo el año, para cualquier edad, dictadas en vivo, en línea y en inglés: la estructura por edades del distrito según los Censos Nacionales 2025 del INEI, lo que la municipalidad ha publicado sobre innovación y talleres, por qué estudiar desde casa en lugar de cruzar Lima, una ruta por etapa de la vida y una clase de ejemplo en Python, escrita por nosotros, que convierte la fila del censo de Miraflores en una tabla legible.',
  courseDescription: 'Clases en vivo y en línea de programación, inteligencia artificial y matemáticas para vecinos de Miraflores de 6 a 67 años o más, dictadas solo en inglés: Scratch, Python, Java, desarrollo web, datos y agentes de IA, en una clase grupal de quince a veinte personas o en clases individuales, cualquier día del año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en Miraflores',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#etapas', label: 'Por etapa' },
    { href: '#censo', label: 'El distrito' },
    { href: '#desde-casa', label: 'Desde casa' },
    { href: '#tabla', label: 'Ejemplo' },
    { href: '#reloj', label: 'Hora' }
  ],
  eyebrow: 'Miraflores &middot; Programación todo el año &middot; De 6 años en adelante',
  h1: 'Clases de programación en Miraflores para todas las edades',
  lede: 'En Miraflores no solo buscan clases de programación los padres de un niño de primaria. También las busca la universitaria que quiere sumar Python a su carrera, el profesional que necesita automatizar reportes y el jubilado que por fin tiene tiempo para entender cómo funciona una app. Esta página reúne a todos: qué dice el censo de 2025 sobre quién vive en el distrito, qué ruta conviene en cada etapa de la vida, por qué una clase en vivo desde casa ahorra los traslados por Lima y cómo es, por dentro, una lección real.',
  secondaryCta: { href: '#etapas', label: 'Ver la ruta para cada edad' },
  wa: 'Hola Modern Age Coders, vivo en Miraflores y me interesan clases de programación en inglés. ¿Puedo reservar una clase gratis?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; cada clase, en inglés claro',
  spec: [
    ['Distrito', 'Miraflores, Lima Metropolitana'],
    ['Para quién', 'Niños, adolescentes, universitarios, adultos y adultos mayores'],
    ['Modalidad', 'En vivo por videollamada, todo el año'],
    ['Idioma', 'Inglés, con un mentor que adapta su ritmo'],
    ['Formato', 'Grupo de quince a veinte o individual'],
    ['Primer paso', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, en Miraflores puede tomar clases de programación con Modern Age Coders a cualquier edad y en cualquier mes del año. Las clases son en vivo, en línea y en inglés: niños desde los 6 años con Scratch, adolescentes con Python, Java o desarrollo web, universitarios con estructuras de datos y adultos con automatización o agentes de IA. Al otro lado de la videollamada hay un mentor que trabaja desde la India, pronuncia con claridad y se acomoda a su paso. Usted elige clase grupal o individual y el horario, sin salir del distrito.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Tres cursos, tres etapas de la vida',
    lede: 'Uno para la niña de primaria, uno para el adolescente que ya escribe código y uno para el adulto que aprende desde cero, con o sin experiencia previa.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRM / 01', title: 'Scratch completo', alt: 'Imagen del curso completo de Scratch', note: 'De 6 a 12 años. Historias, juegos y animaciones con bloques, para entender secuencias, bucles y eventos antes de escribir una línea.' },
      { course: 'python-complete-masterclass-teens', code: 'PRM / 02', title: 'Python para adolescentes', alt: 'Imagen del curso de Python para adolescentes', note: 'De 13 a 18 años. Del primer programa a proyectos con datos, juegos y una pequeña app, siempre escribiendo y corrigiendo el código propio.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PRM / 03', title: 'Python de cero a avanzado', alt: 'Imagen del curso de Python de cero a avanzado', note: 'Para universitarios y adultos. Variables, funciones, archivos y automatización de tareas reales, a un ritmo que respeta la jornada de trabajo.' }
    ]
  },

  sections: [
    {
      id: 'etapas',
      eyebrow: 'Una ruta por edad',
      h2: '¿Qué clase de programación conviene en cada etapa de la vida?',
      lede: 'Depende menos de la edad exacta que de lo que la persona quiere construir. Esta tabla, que es nuestra, resume cómo orientamos a cada vecino de Miraflores en la clase gratis.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta sugerida por etapa de la vida (propuesta nuestra, no un plan cerrado)', head: ['Etapa', 'Punto de partida', 'Lo que suele construir en unos meses'], rows: [
          ['Primeros grados de primaria (6 a 8)', 'Scratch con bloques grandes y personajes', 'Un cuento animado que responde a las teclas'],
          ['Fin de primaria (9 a 12)', 'Scratch avanzado y luego Python', 'Un juego con puntaje, vidas y niveles'],
          ['Adolescentes de 13 a 17 años', 'Python, JavaScript o Java', 'Una web publicada, una app o un análisis de datos'],
          ['Universitarios', 'Python o Java con estructuras de datos', 'Un repositorio con ejercicios resueltos y explicados'],
          ['Adultos que trabajan', 'Python para automatizar, o IA aplicada', 'Un script que arma el reporte semanal solo'],
          ['Adultos mayores', 'Fundamentos con calma, Python sencillo', 'Un programa propio para ordenar recetas, fotos o cuentas']
        ] },
        { kind: 'source', html: 'Tabla elaborada por Modern Age Coders. Las edades son orientativas: hay niños de 11 años listos para Python y adultos que prefieren empezar con bloques. El mentor decide el punto de partida en la primera clase, viendo cómo resuelve la persona un problema pequeño.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Para los menores', p: 'Su hijo programa con su propia computadora mientras el mentor mira la pantalla compartida. Corrige, pregunta y explica en inglés lo que hizo. Las clases siguen todo el año escolar, en un horario que no choca con el colegio.' },
          { h3: 'Para quien estudia o trabaja', p: 'La universitaria y el profesional avanzan con proyectos que pueden mostrar: un repositorio, una pequeña web, un análisis. La clase individual permite poner la sesión antes del trabajo o al final del día.' },
          { h3: 'Para quien vuelve a aprender', p: 'Muchos adultos mayores nos dicen que no quieren "aprender computación", sino entender. Por eso explicamos el porqué de cada línea y repetimos sin apuro, hasta que la persona puede hacerlo sola.' }
        ] },
        { kind: 'p', mt: true, html: 'Si en su casa hay más de una persona interesada, cada una lleva su propio curso con su propio mentor; no mezclamos a un niño de 9 años con un adulto en la misma clase. Lo que sí pasa a menudo es que la abuela y el nieto terminan comparando sus programas en la sobremesa, y eso vale tanto como la clase. Para los más pequeños hay una guía aparte, <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">la guía de primaria con Scratch y Python</a>, y para quienes pasan los 60 años, <a class="ag-inline-link" href="/cursos-de-tecnologia-para-adultos-mayores-peru">cursos de tecnología para adultos mayores</a>.' }
      ]
    },
    {
      id: 'censo',
      eyebrow: 'El distrito en cifras',
      h2: '¿Cuántas personas viven en Miraflores y de qué edades?',
      lede: 'Según los Censos Nacionales 2025 del INEI, Miraflores tiene 126,049 habitantes. Su perfil de edades es muy distinto al promedio de Lima, y eso explica por qué esta página no habla solo de niños.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Población censada de Miraflores por grupo de edad, Censos Nacionales 2025, comparada con Lima Metropolitana', head: ['Grupo de edad', 'Personas en Miraflores', 'Parte de Miraflores', 'Parte en Lima Metropolitana'], rows: [
          ['De 0 a 5 años', '4,906', '4.0 %', '5.8 %'],
          ['De 6 a 11 años', '6,204', '5.1 %', '8.5 %'],
          ['De 12 a 17 años', '6,575', '5.4 %', '9.0 %'],
          ['De 18 a 29 años', '15,698', '13.0 %', '18.8 %'],
          ['De 30 a 44 años', '31,906', '26.3 %', '24.2 %'],
          ['De 45 a 59 años', '26,014', '21.5 %', '18.2 %'],
          ['De 60 años a más', '29,900', '24.7 %', '15.5 %'],
          ['Total censado', '121,203', '100 %', '100 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, tabulados de Lima Metropolitana, Cuadro N.° 3 (población censada por grupo de edad) y Cuadro N.° 1 (población total). La población total de Miraflores, 126,049, suma la censada (121,203) y la omitida (4,846) que el INEI publica en el Cuadro N.° 1; los grupos de edad solo existen para la población censada. Los porcentajes son cálculo nuestro sobre cada total censado (Lima Metropolitana: 9,600,043).' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que muestra la tabla',
          left: [
            'En Miraflores viven 29,900 personas de 60 años o más, contra 17,685 menores de 18 sumando los tres primeros grupos (cálculo nuestro). Es decir, casi uno de cada cuatro vecinos censados está en la edad en que mucha gente se jubila.',
            'Los jóvenes de 18 a 29 años son el 13.0 % del distrito, frente al 18.8 % de Lima. En cambio, los grupos de 30 a 59 años pesan más que en el promedio limeño: es el distrito de los adultos que trabajan.'
          ],
          rightH3: 'Lo que significa para aprender',
          right: [
            'Una oferta pensada solo para escolares deja fuera a la mayoría del distrito. Por eso enseñamos de los 6 años en adelante, sin tope, con cursos distintos para cada etapa.',
            'Miraflores limita con San Isidro, Surquillo, Santiago de Surco y Barranco, y mira al Pacífico desde la Costa Verde. Las familias de esos distritos vecinos tienen exactamente la misma opción: la clase llega a la casa, no al revés.'
          ] }
      ]
    },
    {
      id: 'municipalidad',
      eyebrow: 'Lo que hace la municipalidad',
      h2: '¿La Municipalidad de Miraflores ofrece cursos de programación?',
      lede: 'En sus notas publicadas en gob.pe no encontramos un curso de programación: la búsqueda de "computación" en su página institucional no devolvió resultados el 10 de noviembre de 2026. Lo que sí aparece es una oferta de innovación, deporte y participación escolar que encaja bien con una clase en línea.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tres notas de la Municipalidad de Miraflores sobre aprendizaje fuera del verano (gob.pe)', head: ['Fecha de la nota', 'Lo que publicó la municipalidad', 'Por qué importa aquí'], rows: [
          ['8 de febrero de 2022', 'Su Centro de Innovación había realizado 250 seminarios virtuales gratuitos con más de 160 expositores desde el inicio de la pandemia', 'Los miraflorinos ya aprenden en vivo por internet'],
          ['25 de abril de 2022', 'Talleres deportivos Diverticole en mayo y junio, para menores de 5 a 16 años, incluido ajedrez', 'Una oferta que corre durante el año escolar, por la tarde'],
          ['21 de setiembre de 2022', 'Se formó el Consejo Consultivo de Niños y Adolescentes, con estudiantes de 9 a 17 años', 'Los escolares del distrito proponen y organizan, incluso un torneo de videojuegos']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Miraflores, notas de prensa en gob.pe/institucion/munimiraflores-lima, leídas el 10 de noviembre de 2026. No reproducimos teléfonos, direcciones ni nombres de autoridades. Modern Age Coders no tiene ningún vínculo con la municipalidad.' },
        { kind: 'p', mt: true, html: 'Los webinars del Centro de Innovación, transmitidos en vivo y gratis, demuestran algo que a veces se discute: que una sesión por pantalla puede ser una clase de verdad, siempre que haya alguien explicando en tiempo real. La diferencia con un seminario es la escala. En un webinar, cientos de personas escuchan; en nuestra clase, la persona escribe código y el mentor revisa lo que hizo, línea por línea.' },
        { kind: 'p', html: 'El ajedrez de Diverticole y el torneo de videojuegos del consejo escolar apuntan a lo mismo: los chicos de Miraflores disfrutan de las reglas, las estrategias y la competencia. La programación es el siguiente paso natural, porque convierte al jugador en quien diseña las reglas. Si busca algo solo para enero y febrero, la guía de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-miraflores-lima">vacaciones útiles de programación en Miraflores</a> repasa la oferta de verano; aquí hablamos del resto del año.' }
      ]
    },
    {
      id: 'desde-casa',
      eyebrow: 'Sin traslados',
      h2: '¿Por qué tomar la clase en línea si uno vive en Miraflores?',
      lede: 'Porque el tiempo que no se pasa en el auto o en el bus se pasa programando. Una academia presencial casi siempre queda en otro distrito, y la hora de clase se convierte en una tarde entera.',
      body: [
        { kind: 'two',
          leftH3: 'El costo invisible del traslado',
          left: [
            'Llevar a un niño a una clase en San Isidro, Surco o el Cercado significa salir antes, esperar y volver, y cualquier limeño sabe que el tráfico de la tarde no perdona. No inventamos cifras de minutos: cada familia conoce su propia ruta. Basta con sumar ida, espera y regreso para ver cuánto pesa.',
            'Para un adulto que trabaja, el problema es otro: llegar a tiempo después de la oficina. La clase en línea empieza cuando usted abre la laptop, en la sala de su casa o donde esté.'
          ],
          rightH3: 'Lo que dice el INEI sobre Lima conectada',
          right: [
            'En su informe trimestral sobre TIC en los hogares (segundo trimestre de 2026), el INEI señala que el 92,4 % de la población de 6 años a más de Lima Metropolitana usó internet, y el 84,7 % de sus hogares tenía el servicio. El INEI incluye al Callao dentro de Lima Metropolitana en esas cifras.',
            'Ese informe añade que el 53,3 % de los hogares de Lima Metropolitana dispone de al menos una computadora. Con una laptop compartida basta, siempre que en la hora de clase sea de quien programa.'
          ] },
        { kind: 'p', mt: true, html: 'Un dato del mismo boletín explica por qué insistimos con los mayores: a nivel nacional, el uso de internet entre las personas de 60 años a más pasó de 40,8 % en el segundo trimestre de 2023 a 56,7 % en el de 2026, el mayor salto de todos los grupos de edad, solo por detrás del grupo infantil. Cada vez más vecinos mayores están en línea; aprender a programar es dar el paso de usar la tecnología a entenderla.' }
      ]
    },
    {
      id: 'tabla',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo se ve una lección real de Python con datos de Miraflores?',
      lede: 'Este ejercicio es nuestro y lo usamos con adolescentes y con adultos. Toma la fila de Miraflores del Cuadro N.° 3 del censo y la convierte en una tabla que se puede leer de un vistazo. Programación, aritmética e inglés técnico en una sola tarea.',
      body: [
        { kind: 'code', label: 'Versión 1: imprimir los números tal cual', lang: 'Python', code: V1, note: 'El programa es correcto: cada número es exacto. El problema es que nadie puede leerlo.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Salida exacta al ejecutar el programa con python3. Las columnas bailan y la proporción tiene dieciséis decimales.' },
        { kind: 'code', label: 'Versión 2: el mismo dato con formato', lang: 'Python', code: V2, note: 'Dentro de las llaves, después de los dos puntos, va el formato: <code>&lt;10</code> alinea a la izquierda en diez espacios, <code>&gt;8,</code> alinea a la derecha con separador de miles y <code>.1%</code> multiplica por cien y deja un decimal.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta. Son los mismos siete números del censo; solo cambió cómo se escriben.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer la especificación en voz alta.</strong> El mentor pide decir en inglés qué hace <code>{personas:&gt;8,}</code>: "align right, width eight, with a thousands separator". Así se aprende el vocabulario técnico con un uso concreto.',
          '<strong>Comprobar contra la fuente.</strong> La fila 60 y más dice 24.7 %. ¿Cuadra con la tabla del INEI de arriba? Sí: 29,900 entre 121,203 da 0.2467, que redondeado a un decimal es 24.7 %.',
          '<strong>Romper algo a propósito.</strong> El reto es cambiar el ancho 8 por 6. Las filas siguen alineadas, pero la última imprime <code>Total     121,203</code> y se sale de la columna, porque 121,203 ocupa siete caracteres. El ancho es un mínimo, no un máximo.',
          '<strong>Separar dato y presentación.</strong> La variable <code>total</code> sigue valiendo 121203; el formato no la tocó. Esta idea, que el número y su texto son cosas distintas, evita errores en cualquier reporte.',
          '<strong>Llevarlo al trabajo.</strong> Los adultos repiten el ejercicio con una lista propia: gastos del mes, ventas por semana, horas de estudio. Los adolescentes, con los puntajes de su equipo.'
        ] },
        { kind: 'p', mt: true, html: 'Lo valioso no es memorizar los códigos de formato, que siempre se pueden consultar. Es el hábito de mirar la salida y preguntarse si otra persona la entendería, y después comprobar cada número contra su fuente. Eso enseñamos en cada nivel, y es justamente lo que se pierde cuando uno copia una respuesta hecha sin leerla.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'El idioma',
      h2: '¿Por qué las clases son en inglés y no en castellano?',
      lede: 'Porque el código, la documentación y casi todas las herramientas de programación están en inglés, y porque nuestros mentores enseñan en inglés. No hay versión en castellano, y para muchos vecinos esa es justamente la ventaja.',
      body: [
        { kind: 'p', html: 'La medición anual de inglés de la empresa EF, el EF EPI 2025, asigna a Lima 555 puntos, dentro de la franja que EF llama alta, que empieza en 550. Es un dato de la ciudad, basado en adultos que rindieron la prueba de EF, no del distrito; aun así, sugiere que muchos limeños entienden el inglés escrito más de lo que suponen. En la clase, ese inglés pasivo se vuelve activo: hay que preguntar, explicar un error y describir lo que uno quiere que haga el programa.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Niños', p: 'Aprenden las palabras del código como aprenden las de un juego: por uso. <em>Repeat</em>, <em>if</em>, <em>score</em> y <em>bug</em> dejan de ser palabras sueltas en dos semanas.' },
          { h3: 'Adultos', p: 'Leer un mensaje de error en inglés y entenderlo es media batalla ganada. El mentor enseña a leerlo con calma, palabra por palabra, en lugar de copiarlo en un buscador.' },
          { h3: 'Mayores', p: 'El mentor habla más despacio, repite con otras palabras y escribe en el chat lo que dice. Nadie tiene que hablar un inglés perfecto; basta con atreverse a preguntar.' }
        ] }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puedo tomar clase desde Miraflores?',
      lede: 'A la hora que usted elija. Los mentores trabajan desde la India, que va 10 horas y 30 minutos por delante de Perú durante todo el año, y la tabla solo muestra cómo se traduce una hora a la otra.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias entre los dos relojes (solo ejemplos de conversión)', head: ['En Perú', 'En la India', 'Quién suele preferirla'], rows: [
          ['6:30 a. m.', '5:00 p. m. del mismo día', 'Adultos que estudian antes del trabajo'],
          ['9:00 a. m.', '7:30 p. m. del mismo día', 'Adultos mayores y estudiantes del turno tarde'],
          ['11:30 a. m.', '10:00 p. m. del mismo día', 'Universitarios con clases por la tarde'],
          ['4:00 p. m.', '2:30 a. m. del día siguiente', 'Escolares que ya almorzaron e hicieron la tarea'],
          ['8:00 p. m.', '6:30 a. m. del día siguiente', 'Profesionales al final de la jornada']
        ] },
        { kind: 'source', html: 'En Perú rige UTC-5 durante los doce meses, sin cambio de hora (zona America/Lima de la base tzdata; hora oficial del INACAL). En la India rige UTC+5:30, tampoco con cambios. Por eso la diferencia es la misma en enero que en julio. La tercera columna es nuestra observación, no una regla.' },
        { kind: 'p', mt: true, html: 'Al reservar la clase gratis, el sistema le muestra las horas en el reloj de Perú; usted no tiene que hacer ninguna cuenta. Si su semana cambia, la clase individual se puede mover, y en la grupal se busca otro grupo en una franja que le acomode.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se sabe que alguien está aprendiendo de verdad?',
    lede: 'Cinco señales propias que usamos con alumnos de cualquier edad. No dependen de los años, sino de lo que la persona puede hacer sola.',
    table: { caption: 'Cinco señales de avance en programación (nuestras)', head: ['Señal', 'Momento habitual', 'Lo que la persona puede hacer'], rows: [
      ['1. Lee antes de ejecutar', 'Primer mes', 'predecir qué imprimirá un programa corto y explicar por qué'],
      ['2. Arregla sus errores', 'Segundo mes', 'leer el mensaje de error en inglés y encontrar la línea culpable'],
      ['3. Ordena datos', 'Tercer mes', 'guardar información en listas o tablas y presentarla con formato, como en el ejemplo'],
      ['4. Divide un problema', 'Cuarto a sexto mes', 'partir una tarea grande en funciones pequeñas que se pueden probar'],
      ['5. Crea algo suyo', 'A partir del sexto mes', 'planificar, construir y presentar en inglés un proyecto propio']
    ] },
    left: { h3: 'Para familias con niños', ps: [
      'Cuando termine una sesión, pregunte a su hijo qué falló en el camino y cómo lo resolvió. Si sabe contar el error, está en la señal 2 o más arriba.',
      'Los saltos no son parejos: es normal pasar semanas en una señal y luego avanzar dos de golpe.'
    ] },
    right: { h3: 'Para adultos', ps: [
      'Antes de pedir ayuda, escriba en una línea qué esperaba que pasara y qué pasó. Esa costumbre acelera todo.',
      'No compare su avance con el de un adolescente. Usted tiene algo que ellos no: problemas reales del trabajo o de la casa para resolver.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más, ordenados por etapa',
    lede: 'Cada uno se dicta en inglés y en tiempo real, con un mentor fijo de principio a fin, en grupo o a solas.',
    bands: [
      { num: 'I', h3: 'Niños', sub: 'De 6 a 12 años', courses: [
        { code: 'PRM / NIÑOS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Lógica con bloques de colores, de juegos sencillos a apps, de 6 a 12 años.' },
        { code: 'PRM / NIÑOS / 02', slug: 'python-ai-kids-masterclass', title: 'Python con inteligencia artificial', blurb: 'El primer lenguaje escrito, con dibujos y pequeños proyectos de IA, de 9 a 12.' },
        { code: 'PRM / NIÑOS / 03', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Números y patrones resueltos programando.' }
      ] },
      { num: 'II', h3: 'Adolescentes', sub: 'De 13 a 18 años', courses: [
        { code: 'PRM / TEENS / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Programación orientada a objetos con proyectos completos, desde los 13 años.' },
        { code: 'PRM / TEENS / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Desarrollo web completo', blurb: 'Una web con su propio servidor y base de datos, para secundaria.' },
        { code: 'PRM / TEENS / 03', slug: 'data-science-course-for-teens-python-data', title: 'Ciencia de datos', blurb: 'Python con tablas y gráficos de datos reales, para 13 a 18 años.' }
      ] },
      { num: 'III', h3: 'Universitarios y adultos', sub: 'De 18 años en adelante', courses: [
        { code: 'PRM / ADULTOS / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Lo que piden las entrevistas técnicas, explicado paso a paso.' },
        { code: 'PRM / ADULTOS / 02', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python e IA', blurb: 'Scripts que ahorran horas de trabajo repetitivo.' },
        { code: 'PRM / ADULTOS / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Agentes de IA para programar', blurb: 'Trabajar con agentes de código sin dejar de revisar cada cambio, solo adultos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué pasa en cada sesión en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Para quien quiere aprender antes de que empiece su día.' },
      { time: 'Media tarde', l: 'Para escolares que ya almorzaron y terminaron sus tareas.' },
      { time: 'De noche', l: 'Para adultos que recién se desocupan del trabajo.' }
    ],
    cells: [
      { h3: 'Mentor asignado', p: 'Una sola persona acompaña el curso entero y conoce su forma de aprender.' },
      { h3: 'Pantalla compartida', p: 'El mentor ve su código en tiempo real y señala dónde mirar.' },
      { h3: 'Usted escribe', p: 'Nadie programa por usted: el teclado siempre es suyo.' },
      { h3: 'Proyectos que se ven', p: 'Cada tramo termina con algo que se puede mostrar en casa o en el trabajo.' },
      { h3: 'Resumen tras la clase', p: 'Una nota corta con lo practicado y lo que sigue.' },
      { h3: 'Grupo o a solas', p: 'Quince a veinte alumnos de edad parecida, o una clase solo para usted.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Lo que publican algunos alumnos después de un tiempo con nosotros. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, una página en inglés.',
  reviewsLede: 'Opiniones de Google escritas por familias y estudiantes, copiadas tal como las publicaron, en inglés.',

  fees: {
    h2: 'Precios para vecinos de Miraflores',
    lede: 'Las tarifas se muestran en dólares de Estados Unidos y se cobran con tarjeta de crédito o débito. Es su banco el que las convierte a su moneda, por lo que el monto final puede moverse un poco con el tipo de cambio de ese día.',
    free: ['Una clase de prueba con un mentor', 'Una recomendación de curso según su nivel', 'Sin tarjeta y sin obligación de seguir'],
    group: ['Quince a veinte alumnos de edad parecida', 'El mismo mentor durante todo el curso', 'Dos sesiones en vivo por semana', 'Pago mes a mes, sin permanencia'],
    one: ['Solo usted y su mentor', 'Temas y ritmo a su medida', 'El día y la hora que usted escoja']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación en Miraflores: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se dictan solo en inglés, siempre en vivo y por internet, sea cual sea la edad del alumno. Para muchos vecinos es una ventaja: programan y practican inglés a la vez. El mentor habla con claridad, repite cuando hace falta y se adapta al ritmo de cada alumno. El EF EPI 2025 ubica a Lima en la franja alta de dominio del inglés, con 555 puntos.' },
      { q: '¿Hay clases de programación para adultos en Miraflores?', a: 'Sí. Enseñamos a universitarios, a adultos que trabajan y a adultos mayores, desde cero o con experiencia. Los cursos de Python, automatización, desarrollo web y estructuras de datos son los más pedidos. Las clases son en vivo por videollamada, así que se toman desde casa.' },
      { q: '¿Desde qué edad puede empezar un niño?', a: 'Desde los 6 años, con Scratch y bloques. Entre los 9 y los 12 la mayoría pasa a Python escrito. No hay edad máxima: nuestros cursos van de los 6 a los 67 años y más.' },
      { q: '¿Cuántos niños y adolescentes viven en Miraflores?', a: 'Según el Cuadro N.° 3 de los Censos Nacionales 2025 del INEI, en Miraflores se censaron 6,204 niños de 6 a 11 años y 6,575 adolescentes de 12 a 17. Las personas de 60 años a más eran 29,900, más que todos los menores de 18 juntos.' },
      { q: '¿La Municipalidad de Miraflores dicta cursos de programación?', a: 'En sus notas de prensa publicadas en gob.pe no encontramos ninguno; sí talleres deportivos, webinars de su Centro de Innovación y espacios de participación escolar. No tenemos ningún vínculo con la municipalidad.' },
      { q: '¿En qué horario puedo tomar las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre los dos países hay diez horas y media de diferencia, fija los doce meses: las 8:00 p. m. en Miraflores son las 6:30 a. m. del día siguiente en la India.' },
      { q: '¿Qué equipo necesito?', a: 'Una laptop o computadora de escritorio con cámara, micrófono y conexión estable, y de preferencia audífonos. Un celular no sirve para programar con comodidad. Los programas que usamos son gratuitos y el mentor ayuda a instalarlos en la primera clase.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares de Estados Unidos; la conversión a su moneda la hace su banco. Para reservar la clase de prueba, que no cuesta nada, no le pedimos ningún dato de pago.' },
      { q: '¿Recibo un certificado?', a: 'Al terminar un curso se entrega un certificado de finalización emitido por Modern Age Coders. No es un título del Ministerio de Educación ni de ninguna universidad, y no reemplaza ningún curso del colegio.' },
      { q: '¿Puedo tomar clases junto con mi hijo?', a: 'Cada uno lleva su propio curso, con un mentor y un nivel adecuados a su edad. Muchas familias eligen horarios seguidos para usar la misma computadora y luego comparan lo que hicieron.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Siga leyendo',
    lede: 'Guías relacionadas, en castellano y en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-miraflores-lima', label: 'Vacaciones útiles en Miraflores', p: 'La oferta de verano del distrito, ordenada por edad.' },
      { href: '/cursos-de-programacion-para-adultos-peru', label: 'Programación para adultos', p: 'Cómo empezar a programar después de los 25 años, en vivo.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para familias de colegios bilingües, en inglés.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La página central del Perú, con todas las guías.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'El método de nuestros mentores, explicado paso a paso.' },
      { href: '/courses', label: 'All courses', p: 'Todos los programas, para niños, jóvenes y adultos.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis desde Miraflores',
    lede: 'En la clase de prueba, el mentor conversa con usted o con su hijo en un inglés sencillo, propone un problema corto y mira cómo lo encara. Con eso le sugerimos el curso y el formato adecuados, sin compromiso de seguir.',
    readFirst: 'Antes de decidir puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre nuestra forma de enseñar, y <a class="ag-inline-link" href="/courses">All courses</a>, con cada programa (las dos en inglés).',
    note: 'Recuerde: enseñamos en tiempo real, por internet, desde la India y únicamente en inglés. Si prefiere escribirnos antes, por WhatsApp respondemos rápido y nos puede escribir en castellano sin problema.',
    formNote: 'Gratis y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos por etapa', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python para adultos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés' },
        { href: '/cursos-de-tecnologia-para-adultos-mayores-peru', label: 'Tecnología para mayores' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'El número no cambia, solo su formato'
  },

  personalityCss: `
.ag-root.ag-prm .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-prm .ag-capsule { border-left-width: 6px; }
.ag-root.ag-prm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-prm .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad de Miraflores press notes on gob.pe of 8 Feb 2022, 25 Apr 2022 and 21 Sep 2022; INEI Boletín TIC II trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 10 November 2026. The route table, the progress signals and the Python example are our own.',
    localProject: 'Formatting the Miraflores row of the INEI 2025 census (Cuadro N.° 3) in Python: version 1 prints raw numbers and sixteen-decimal shares, version 2 uses f-string format specifiers (<10, >8, the thousands separator and .1%) to print an aligned table ending "60 y mas    29,900   24.7%" and "Total      121,203"; the challenge sets the width to 6 and the total row breaks the column. Lesson family: f-string format specifiers; the value never changes, only its text.',
    requiredMentions: ['60 y mas    29,900   24.7%', 'Total      121,203', 'Total     121,203', '250 seminarios virtuales gratuitos', 'Consejo Consultivo de Niños y Adolescentes', '17,685 menores de 18', 'El ancho es un mínimo, no un máximo', 'El número no cambia, solo su formato', 'pasó de 40,8 % en el segundo trimestre de 2023 a 56,7 %'],
    sources: [
      { claim: 'Miraflores population 126,049 (total), 121,203 censada, 4,846 omitida; Lima Metropolitana 10,141,775.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Miraflores and Lima Metropolitana population censada by age group (Cuadro N.° 3).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Centro de Innovación de Miraflores: live webinars, 250 free virtual seminars with more than 160 speakers.', url: 'https://www.gob.pe/institucion/munimiraflores-lima/noticias/587694-el-centro-de-innovacion-de-miraflores-continuara-webinars-este-verano-2022' },
      { claim: 'Diverticole 2022 sports workshops in May and June for ages 5 to 16, including chess.', url: 'https://www.gob.pe/institucion/munimiraflores-lima/noticias/613646-se-abren-inscripciones-para-los-talleres-deportivos-diverticole-2022' },
      { claim: 'Consejo Consultivo de Niños y Adolescentes, students aged 9 to 17; school councils planned a video game tournament.', url: 'https://www.gob.pe/institucion/munimiraflores-lima/noticias/678969-municipios-escolares-presentan-plan-de-trabajo-en-colegios-de-miraflores' },
      { claim: 'Lima Metropolitana internet use 92.4%, households with internet 84.7%, with a computer 53.3%; internet use at 60+ from 40.8% (2023) to 56.7% (2026), II trimestre.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, High band from 550.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any link with the Municipalidad de Miraflores, MINEDU or a university: none; the page says so, and names no officials.',
      'Traffic or commute minutes across Lima: no primary source used, so no figure is printed.',
      'The council\'s 2022 summer workshops and the 2026 ECO KIDS programme: left to the vacaciones útiles page, linked once.',
      'Income strata of the district (INEI planos 2020): left out; not needed to answer the search.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

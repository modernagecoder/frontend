// SHIP: market (es city door) | Cusco kids 6 to 12: census, English in a visitor city, Machu Picchu child visits | percentages: integer division (//) gives 0; true division, then round, and what rounding hides
'use strict';
// Clases de programación para niños en Cusco (ag- Spanish city door, Peru cluster row PE131, P6, hubGroup cities;
// alloc: code pnc, accent #7A474E). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english"; owner 2026-11-08: timing flexible, any time. Formal "usted". Fees only through the template (USD anchors).
// Angle: the Cusco parent of a child of 6 to 12 (KEYWORDS.md section 4: Cusco ranks fourth, 40 place suggestions; the
// city long tail is thin, so the page targets the generic phrase plus the city). Spine: how many primaria-age children the
// province has (INEI 2025 Cuadro 3); why English matters in a city that receives so many foreign visitors (EF EPI 2025
// Cusco 520, second after Lima; Ministerio de Cultura visitor counts); what school gives (CNEB competency 28; regional
// calendar powers in RM 501-2025-MINEDU); home vs academy; one original project on child visitors to Machu Picchu, Moray,
// Raqchi and Tipón; robotics; clock. Different spine, dataset and lesson from online-coding-and-ai-classes-cusco-region-peru
// (GERAGRI crop data, average of ratios) and from the English Cusco city page being written (water-coverage data).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-cusco/
// and the research folders named; quotes string-matched in the raw text):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Cusco workbook (tabulados/08, data/ind_08.xlsx): Cuadro 1
//    "CUSCO 1379251 ..." and "PROVINCIA CUSCO 495112 ..."; district CUSCO 102,111 (places.tsv); Cuadro 3 (censada by age)
//    "PROVINCIA CUSCO 456208 31094 42745 44633 ..." (Total, De 0 a 5, De 6 a 11, De 12 a 17).
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (image): "Cusco Cusco 348 935 428 450 79 515 22.8 2.1".
//  - EF EPI 2025 Peru page (ef_peru.raw): "Lima 555 Cusco 520 Trujillo 519 Arequipa 512"; Peru 519; bands high 550,
//    moderate 500.
//  - INEI, TIC II trimestre 2026: resto urbano internet "66,2%", computer "41,3%".
//  - CNEB (FACTS 32, 33): competency 28 "Se desenvuelve en entornos virtuales generados por las TIC", transversal.
//  - RM 501-2025-MINEDU (FACTS 25): DRE/UGEL "tienen la potestad de definir una distribución de semanas lectivas y de
//    gestión distinta a la sugerida"; 2026 teaching 16 March to 18 December (checked by eye on the signed page 7).
//  - MINEDU DITE robotics paper (FACTS 52): robotics as a means, not the goal (paraphrased).
//  - Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; India UTC+5:30, 10 h 30 min ahead.
//  - Data: Ministerio de Cultura (MINCUL), "Visitantes a sitios arqueologicos", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/visitantes-sitios-arqueologicos, licence "Open Data Commons Attribution
//    License" (page and package_show odc-by), modified 2026-09-15, system SISMUS. File "base de datos sitios_7.csv" saved
//    as data/sitios.csv, 2,290,256 bytes, sha256 a2c53be414c9b492..., Latin-1, semicolon, FECHA_CORTE 20261028.
//    Dictionary: NOM_MUSEO "NOMBRE DE SITIO ARQUEOLÓGICO"; NOM_TIPO Nacionales / Extranjeros; NIN_* "NIÑO ..."; TOTAL
//    "TOTAL DE VISITANTES". 2025 rows for the four sites have all 12 months.
// Our own calculations (python3 -I): 42,745 / 456,208 = 9.4% of those counted in the province are 6 to 11.
// Our own example (data/v1.py, data/v2.py, python3 -I on the downloaded file), exact output:
//  v1: every line "... 0 % children" (Machu Picchu Extranjeros 0 % children ... Tipon Nacionales 0 % children)
//  v2: Machu Picchu | Extranjeros | 60102 of 1140714 | 5.3 % children / Machu Picchu | Nacionales | 63010 of 338792 |
//      18.6 % children / Moray | Extranjeros | 9117 of 510713 | 1.8 % / Moray | Nacionales | 7729 of 263203 | 2.9 % /
//      Raqchi | Extranjeros | 19 of 85556 | 0.0 % / Raqchi | Nacionales | 1523 of 28573 | 5.3 % / Tipon | Extranjeros |
//      0 of 23048 | 0.0 % / Tipon | Nacionales | 2729 of 61478 | 4.4 %
// Lesson family: percentages; integer division (//) before multiplying gives 0, true division then round(), and what a
// rounded 0.0 can hide (19 children).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const HEAD = [
  'import csv',
  '',
  "COLUMNAS_NINOS = ('NIN_PAGANTES', 'NIN_NOPAGANTES', 'NIN_BOLESPPAGANTES', 'NIN_BOLESPNOPAGANTES')",
  "CORTO = {'Parque Arqueológico Machu Picchu': 'Machu Picchu',",
  "         'Monumento Arqueológico de Moray': 'Moray',",
  "         'Monumento Arqueológico de Raqchi': 'Raqchi',",
  "         'Parque Arqueológico Tipon': 'Tipon'}",
  '',
  'suma = {}',
  "archivo = open('sitios.csv', encoding='latin-1')",
  "for registro in csv.DictReader(archivo, delimiter=';'):",
  "    nombre = CORTO.get(registro['NOM_MUSEO'])",
  "    if nombre is None or registro['ANIO'] != '2025':",
  '        continue',
  "    clave = (nombre, registro['NOM_TIPO'])",
  '    chicos, todos = suma.get(clave, (0, 0))',
  '    chicos = chicos + sum(int(registro[col]) for col in COLUMNAS_NINOS)',
  "    todos = todos + int(registro['TOTAL'])",
  '    suma[clave] = (chicos, todos)',
  'archivo.close()',
  '',
  'for (nombre, origen), (chicos, todos) in sorted(suma.items()):'
];

const V1 = HEAD.concat([
  "    print(nombre, origen, chicos // todos * 100, '% children')"
]).join('\n');

const OUT1 = [
  'Machu Picchu Extranjeros 0 % children',
  'Machu Picchu Nacionales 0 % children',
  'Moray Extranjeros 0 % children',
  'Moray Nacionales 0 % children',
  'Raqchi Extranjeros 0 % children',
  'Raqchi Nacionales 0 % children',
  'Tipon Extranjeros 0 % children',
  'Tipon Nacionales 0 % children'
].join('\n');

const V2 = HEAD.concat([
  "    print(nombre, '|', origen, '|', chicos, 'of', todos, '|', round(chicos * 100 / todos, 1), '% children')"
]).join('\n');

const OUT2 = [
  'Machu Picchu | Extranjeros | 60102 of 1140714 | 5.3 % children',
  'Machu Picchu | Nacionales | 63010 of 338792 | 18.6 % children',
  'Moray | Extranjeros | 9117 of 510713 | 1.8 % children',
  'Moray | Nacionales | 7729 of 263203 | 2.9 % children',
  'Raqchi | Extranjeros | 19 of 85556 | 0.0 % children',
  'Raqchi | Nacionales | 1523 of 28573 | 5.3 % children',
  'Tipon | Extranjeros | 0 of 23048 | 0.0 % children',
  'Tipon | Nacionales | 2729 of 61478 | 4.4 % children'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Cusco: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-cusco',
  code: 'pnc',
  accent: '#7A474E',
  accentRationale: 'Clases de programación para niños en Cusco: the allocated muted plum #7A474E (alloc.tsv), the dusty red of Andean textiles and tiled roofs against the warm paper; above 4.5 contrast on #FBF8F2 and both tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Cusco',
  title: 'Clases de programación para niños en Cusco, en vivo e inglés',
  description: 'Clases de programación para niños cusqueños de 6 a 12 años, en vivo y en inglés por internet: Scratch, Python e IA, en grupo o individuales, a la hora que elija.',
  ogDescription: 'Programación en vivo y en inglés para niños de primaria en Cusco: el censo 2025, por qué el inglés pesa tanto en la ciudad y un proyecto con las visitas de niños a Machu Picchu.',
  twitterDescription: 'Programación para niños de Cusco, en vivo y en inglés, desde casa y en el horario que la familia prefiera.',
  pageName: 'Clases de programación para niños en Cusco',
  webPageDescription: 'Guía para familias de Cusco sobre clases de programación para niños de 6 a 12 años dictadas en vivo, en línea y en inglés: población infantil de la provincia según los Censos Nacionales 2025 del INEI, el inglés de Cusco en el EF EPI 2025, lo que da el colegio según el CNEB y un proyecto propio en Python con las visitas de niños a Machu Picchu, Moray, Raqchi y Tipón registradas por el Ministerio de Cultura (licencia ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Cusco, dictadas solo en inglés: Scratch, Python con datos reales y comprensión de la inteligencia artificial, en una clase grupal o en clases individuales, en el horario que elija la familia.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Cusco',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#cusco', label: 'Cusco en cifras' },
    { href: '#ingles', label: 'Por qué en inglés' },
    { href: '#machupicchu', label: 'Proyecto Machu Picchu' },
    { href: '#colegio', label: 'El colegio' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'Cusco &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Cusco',
  lede: 'En Cusco el inglés no es una materia lejana: se oye en la Plaza de Armas, en San Blas, en el aeropuerto y en cada tren que sale hacia Machu Picchu. Esta guía es para madres y padres cusqueños que buscan programación para un hijo de primaria y ven en una clase en inglés una ventaja más. Contamos, con cifras del INEI, cuántos niños viven en la provincia, qué enseña el colegio, cómo funciona una clase en vivo desde casa y un ejercicio de Python con las visitas de niños a los sitios arqueológicos de la región.',
  secondaryCta: { href: '#machupicchu', label: 'Ver el proyecto' },
  wa: 'Hola Modern Age Coders, somos una familia de Cusco y buscamos clases de programación en inglés para nuestro hijo o hija. ¿Podemos hacer la clase de prueba?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos en el mundo &middot; un mentor que acompaña a su hijo todo el curso',
  spec: [
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Lugar', 'Desde casa, en cualquier distrito de Cusco'],
    ['Qué aprende', 'Scratch, Python, datos e inteligencia artificial'],
    ['Formato', 'Grupo de quince a veinte niños, o clases individuales'],
    ['Idioma', 'En inglés de principio a fin, al ritmo del niño'],
    ['Primera clase', 'Gratuita, sin tarjeta']
  ],
  capsuleQ: 'En resumen',
  capsule: 'Modern Age Coders da clases de programación a niños cusqueños de 6 a 12 años en vivo a través de internet y dictadas solo en inglés, de modo que su hijo programa y, a la vez, se familiariza con un idioma que en el Cusco se oye todos los días. Empiezan con Scratch y, hacia los nueve o diez años, pasan a Python, a trabajar con datos reales y a entender cómo funciona la inteligencia artificial. Un mentor desde la India guía cada clase por videollamada, con calma. Elija grupo o clases individuales y la hora que le convenga; la primera es gratis.',

  picks: {
    eyebrow: 'Para empezar en Cusco',
    h2: 'Tres puertas de entrada para un niño cusqueño',
    lede: 'Una corta para probar, una larga para el niño que ya teclea con soltura y una para entender esa inteligencia artificial de la que todos hablan.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PNC / 01', title: 'Scratch de cero a juegos', alt: 'Imagen del curso de Scratch para niños', note: 'Tres o cuatro meses, para cualquier grado de primaria. Más de treinta proyectos, de una animación sencilla a un juego con niveles y puntaje.' },
      { course: 'python-ai-kids-masterclass', code: 'PNC / 02', title: 'Python e IA', alt: 'Imagen del curso de Python e IA para niños', note: 'A partir de los nueve, entre ocho y diez meses, sin experiencia previa. Escriben Python desde el inicio, crean juegos y analizan archivos como el de los sitios arqueológicos que verá abajo.' },
      { course: 'ai-literacy-for-kids-course', code: 'PNC / 03', title: 'Entender la IA', alt: 'Imagen del curso de alfabetización en inteligencia artificial para niños', note: 'De ocho a catorce años, cuatro meses, y se puede entrar cualquier mes. Cómo aprende una máquina, por qué se equivoca y cómo usarla con criterio.' }
    ]
  },

  sections: [
    {
      id: 'cusco',
      eyebrow: 'Cusco en cifras',
      h2: '¿Cuántos niños de primaria viven en la provincia del Cusco?',
      lede: 'Unos cuarenta y tres mil. Los Censos Nacionales 2025 contaron en la provincia del Cusco 42,745 niñas y niños con edades de seis a once, según el INEI.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Cusco en las cifras del INEI: departamento, provincia, distrito y ciudad', head: ['Ámbito', 'Personas', 'Censo'], rows: [
          ['Departamento del Cusco, población total', '1,379,251', 'Censos Nacionales 2025'],
          ['Provincia del Cusco, población total', '495,112', 'Censos Nacionales 2025'],
          ['Provincia del Cusco, población censada', '456,208', 'Censos Nacionales 2025'],
          ['Provincia del Cusco, censados que tenían de 6 a 11 años', '42,745', 'Censos Nacionales 2025'],
          ['Distrito del Cusco', '102,111', 'Censos Nacionales 2025'],
          ['Ciudad del Cusco', '428,450', 'Censos Nacionales 2017']
        ] },
        { kind: 'source', html: 'Cómo se armó: las cinco primeras filas salen del libro de Excel que el INEI publicó para el departamento con los Censos Nacionales 2025 (la población total, censada más omitida, del cuadro 1; los grupos de edad, solo de censados, del cuadro 3; fecha censal, mediados de septiembre de 2025). La última sale de la tabla de capitales del censo 2017. Cada fila mide algo distinto y no se suman.' },
        { kind: 'two', mt: true,
          leftH3: 'Cómo leer estas cifras',
          left: [
            'Ese grupo pesa 9.4 % dentro de la población censada de la provincia (lo calculamos dividiendo 42,745 entre 456,208).',
            'La ciudad, que el INEI cuenta como un conjunto de distritos, pasó de 348,935 habitantes en 2007 a 428,450 en 2017, un crecimiento de 22.8 % según el mismo cuadro. El instituto no había publicado la cifra de 2025 para la ciudad cuando revisamos, en noviembre de 2026.'
          ],
          rightH3: 'Lo que cambia para su hijo',
          right: [
            'La ciudad se reparte entre el Cusco, Wanchaq, Santiago, San Sebastián, San Jerónimo y otros distritos de la provincia, y las ofertas presenciales de tecnología para niños se concentran en pocas zonas.',
            'Con una clase en vivo no importa si su casa está en Santiago o en San Jerónimo: el mentor, el curso y la hora son los mismos.'
          ] }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Por qué en inglés',
      h2: '¿Por qué aprender programación en inglés si vivimos en Cusco?',
      lede: 'Porque en Cusco el inglés tiene un uso diario muy concreto. El EF EPI 2025 da a Cusco 520 puntos, el puntaje más alto entre las ciudades peruanas después de Lima, y los datos del Ministerio de Cultura muestran por qué: la ciudad recibe a muchísimos visitantes de fuera.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Visitantes de cuatro sitios arqueológicos de la región Cusco en 2025, según su procedencia (sumas nuestras del archivo del Ministerio de Cultura)', head: ['Sitio', 'Nacionales', 'Extranjeros'], rows: [
          ['Parque Arqueológico Machu Picchu', '338,792', '1,140,714'],
          ['Monumento Arqueológico de Moray', '263,203', '510,713'],
          ['Monumento Arqueológico de Raqchi', '28,573', '85,556'],
          ['Parque Arqueológico de Tipón', '61,478', '23,048']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Cultura, conjunto de datos "Visitantes a sitios arqueológicos" (sistema SISMUS), publicado en el portal estatal de datos abiertos bajo Open Data Commons Attribution License; archivo con corte al 28 de octubre de 2026. Sumamos nosotros la columna TOTAL de los doce meses de 2025 para cada sitio y tipo de procedencia. El Parque Arqueológico Machu Picchu tiene además filas aparte para las rutas del Camino Inka, que no incluimos.' },
        { kind: 'p', mt: true, html: 'En Machu Picchu, por cada visitante peruano de 2025 hubo más de tres extranjeros (cálculo nuestro: 1,140,714 frente a 338,792). En una ciudad que recibe a tantos visitantes de fuera, el inglés está en la calle, en los letreros y en las conversaciones. Para un niño, practicarlo mientras programa no es un adorno: es acostumbrar el oído desde pequeño.' },
        { kind: 'two', mt: true,
          leftH3: 'El inglés de la clase',
          left: [
            'El mentor habla pausado, con frases cortas, y muestra en la pantalla lo que va diciendo. Las palabras del código, como <em>repeat</em>, <em>if</em> y <em>print</em>, son las primeras que el niño hace suyas.',
            'Cuando su hijo responde en castellano, el mentor capta la idea y le propone la frase en inglés. Nadie lo deja en evidencia frente a los demás.'
          ],
          rightH3: 'Lo que mide el EF EPI',
          right: [
            'EF Education First calcula su índice con personas adultas que toman su examen; los niños no entran en la muestra. En 2025 dio 520 puntos a Cusco, 519 a Trujillo, 512 a Arequipa y 555 a Lima, y EF considera alto un puntaje de 550 o más y moderado uno entre 500 y 549.',
            'Lo tomamos como una pista del inglés que rodea al niño, no como una medida de su hijo.'
          ] }
      ]
    },
    {
      id: 'machupicchu',
      tint: 'tint',
      eyebrow: 'Un proyecto cusqueño',
      h2: '¿Qué porcentaje de los visitantes de Machu Picchu son niños? Un proyecto de Python',
      lede: 'Ejercicio propio, para chicos de quinto y sexto de primaria. Vuelve al archivo del Ministerio de Cultura, que reparte a cada visitante en una categoría de boleto (adulto, estudiante, niño, militar o adulto mayor) y, dentro de ella, si pagó o no. Juntamos las cuatro columnas de niño y las ponemos frente al total de cada sitio.',
      body: [
        { kind: 'p', html: 'La pregunta parece sencilla: de cada cien personas que entraron en 2025 a Machu Picchu, Moray, Raqchi y Tipón, ¿cuántas eran niños? Y separadas en peruanas y extranjeras, ¿quiénes llevan más niños? El primer programa lo escribe el propio alumno, con lo que sabe de matemática: dividir y multiplicar por cien.' },
        { kind: 'code', label: 'Versión 1: el porcentaje con división entera', lang: 'Python', code: V1, note: 'Antes de ejecutarlo, el mentor pregunta en inglés: "Which site do you think has the most children?" Casi todos responden Machu Picchu.' },
        { kind: 'code', label: 'Salida de la versión 1', lang: 'Salida', code: OUT1, note: 'Copiamos esta salida tal cual tras correr el programa con python3 -I sobre nuestro archivo. Ocho ceros: ni un solo niño en ningún sitio. Imposible.' },
        { kind: 'p', mt: true, html: 'El problema está en <code>chicos // todos * 100</code>. En Python, <code>//</code> es la división entera: se queda con la parte entera y descarta lo demás. Como siempre hay menos niños que visitantes, la división entera da 0, y 0 por 100 sigue siendo 0. El orden de las operaciones importa: hay que multiplicar por 100 y dividir con <code>/</code>, que sí conserva los decimales.' },
        { kind: 'code', label: 'Versión 2: dividir de verdad y redondear al final', lang: 'Python', code: V2, note: 'Ahora el programa muestra también los números de base, para que el niño pueda comprobar el porcentaje a mano con uno de ellos.' },
        { kind: 'code', label: 'Salida de la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3 -I. Entre los visitantes peruanos de Machu Picchu, 18.6 % fueron niños; entre los extranjeros, 5.3 %.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Sospechar del cero.</strong> Ocho resultados iguales a 0 no pueden ser ciertos. Antes de cambiar nada, el niño explica en voz alta qué hace cada operación.',
          '<strong>Distinguir dos divisiones.</strong> <code>//</code> sirve para repartir caramelos enteros; <code>/</code> sirve para porcentajes. Elegir la correcta es parte del problema.',
          '<strong>Redondear al final.</strong> <code>round(..., 1)</code> deja un decimal, pero solo después de calcular. Si se redondea antes, se pierde exactitud.',
          '<strong>Ver lo que el redondeo esconde.</strong> En Raqchi el programa dice 0.0 % de niños extranjeros, pero el archivo cuenta 19. Con un solo decimal, 19 de 85,556 desaparecen. En Tipón, en cambio, el 0 es real: no figura ningún niño extranjero.',
          '<strong>Decirlo en una frase.</strong> "Peruvian families bring more children to Machu Picchu than foreign visitors do." El niño la escribe y la defiende con sus números.'
        ] },
        { kind: 'p', mt: true, html: 'Este es el tipo de razonamiento que buscamos en cada clase: no aceptar un número porque lo dio la computadora, sino entender de dónde sale. Un niño que descubre por sí mismo por qué su programa decía "cero niños en Machu Picchu" no olvida la diferencia entre <code>//</code> y <code>/</code>, y aprende algo más útil todavía: que una respuesta rara es una pista, no un fracaso. Ninguna herramienta que entrega respuestas listas enseña eso.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'El colegio',
      h2: '¿Los colegios del Cusco enseñan programación en primaria?',
      lede: 'No como curso con horas propias. El Currículo Nacional trata lo digital como una competencia transversal, y en la práctica depende de cada colegio y de cada docente.',
      body: [
        { kind: 'p', html: 'En el CNEB del Ministerio de Educación, la competencia 28, sobre moverse con soltura en lo digital, figura entre las competencias transversales: no tiene un área ni horas en la semana, sino que se trabaja dentro de otras materias cuando el docente lo planifica. Un colegio del centro puede tener laboratorio de cómputo y uno de la periferia, ninguno.' },
        { kind: 'p', html: 'El calendario también puede variar. La RM 501-2025-MINEDU fijó para 2026 un año escolar del lunes 16 de marzo al viernes 18 de diciembre, pero reconoce que las DRE y las UGEL "tienen la potestad de definir una distribución de semanas lectivas y de gestión distinta a la sugerida". En una región tan diversa como el Cusco, conviene mirar el calendario del propio colegio. Las clases en vivo se acomodan a cualquiera de ellos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Pregunte en el colegio.</strong> Si hay curso o taller de cómputo, desde qué grado y con cuántas horas. Así sabrá qué complementar.',
          '<strong>Mire el horario familiar.</strong> Elija dos momentos de la semana en que su hijo no esté cansado ni apurado por tareas.',
          '<strong>Pruebe una clase.</strong> La clase gratis le dirá más que cualquier folleto: verá a su hijo programar y escuchar inglés por primera vez.'
        ] }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde casa',
      h2: '¿Clases de programación en una academia del Cusco o en vivo desde casa?',
      lede: 'Con chicos de primaria, lo de casa suele ser más fácil de sostener: no hay que subir ni bajar por la ciudad, y el horario lo decide la familia.',
      body: [
        { kind: 'two',
          leftH3: 'Ir a un local',
          left: [
            'Supone llevar al niño y recogerlo un par de veces cada semana, en el horario que decida la academia. No damos tiempos de traslado porque cambian mucho de un barrio a otro y de una hora a otra.',
            'Si en casa los dos adultos trabajan, cumplir ese traslado cada semana suele ser lo primero que falla.'
          ],
          rightH3: 'Conectarse desde casa',
          right: [
            'Hace falta un equipo con cámara y micrófono y un internet que no se corte. En la medición del INEI de abril a junio de 2026, 66,2 de cada 100 hogares urbanos de provincias tenían internet y 41,3 de cada 100, computadora.',
            'Si la conexión de su casa es débil en ciertas horas, elija la clase en la franja más tranquila del día. En una clase individual, eso es fácil de ajustar.'
          ] },
        { kind: 'p', mt: true, html: 'Para familias de otras provincias, como Urubamba, Calca, Canchis o La Convención, nuestra guía de la <a class="ag-inline-link" href="/online-coding-and-ai-classes-cusco-region-peru">región Cusco</a> (en inglés) explica cómo funcionan las clases en todo el departamento. Si quiere empezar por la inteligencia artificial, la guía de <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">inteligencia artificial para niños</a> cuenta qué se aprende a cada edad.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Robótica para niños en Cusco o programación?',
      lede: 'Primero programación. La robótica necesita piezas, pero lo que la hace inteligente es el programa, y ese se aprende igual de bien sin ningún kit.',
      body: [
        { kind: 'p', html: 'El Ministerio de Educación presenta la robótica educativa como un camino para aprender, no como una meta. Coincidimos: lo valioso es la lógica de dar órdenes, repetirlas y decidir según lo que pase. Nosotros enseñamos esa lógica con Scratch y Python, sin vender ni enviar kits.' },
        { kind: 'p', html: 'Si su hijo ya hace robótica en el colegio, nuestras clases le ayudan a programar su robot con más soltura. Y si nunca tuvo uno, empieza sin desventaja: basta una computadora.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Hora',
      h2: '¿A qué hora se conecta un niño del Cusco con un mentor en la India?',
      lede: 'A la hora que usted elija. La India lleva 10 horas y 30 minutos de ventaja sobre el Perú en cualquier mes; la tabla convierte algunas horas cusqueñas, solo como ejemplo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Seis horas cusqueñas traducidas a la hora del mentor; sirven de ejemplo, la clase va cuando usted diga', head: ['Hora del Cusco', 'Hora del mentor', 'Fecha del mentor'], rows: [
          ['6:45 a. m.', '5:15 p. m.', 'la de hoy'],
          ['8:15 a. m.', '6:45 p. m.', 'la de hoy'],
          ['10:45 a. m.', '9:15 p. m.', 'la de hoy'],
          ['12:45 p. m.', '11:15 p. m.', 'la de hoy'],
          ['3:15 p. m.', '1:45 a. m.', 'la de mañana'],
          ['4:45 p. m.', '3:15 a. m.', 'la de mañana']
        ] },
        { kind: 'source', html: 'El Perú está en UTC-5 los doce meses y no ha cambiado la hora desde 1994 (base de datos tzdata, zona America/Lima; hora oficial del INACAL). La India está en UTC+5:30 y tampoco cambia. Por eso la diferencia es igual en el verano y en el invierno cusqueño.' },
        { kind: 'p', mt: true, html: 'Al reservar, usted ve los horarios disponibles en la hora del Perú. Muchas familias cusqueñas prefieren la tarde, cuando el niño ya almorzó; otras, la mañana temprano. En vacaciones de verano cualquier momento funciona.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo avanza un niño cusqueño que aprende a programar?',
    lede: 'Cinco niveles nuestros, cada uno con algo concreto que su hijo puede mostrarle.',
    table: { caption: 'Los cinco niveles que usamos con los chicos (propios)', head: ['Nivel', 'Edad frecuente', 'Qué puede mostrarle su hijo'], rows: [
      ['1. Moverse', '6 a 7 años', 'un personaje que recorre un camino siguiendo bloques en orden'],
      ['2. Repetir', '7 a 9 años', 'una animación que usa bucles en lugar de copiar bloques'],
      ['3. Elegir caminos', '8 a 10 años', 'un juego que cambia según el puntaje o el tiempo'],
      ['4. Contar', '9 a 11 años', 'un programa en Python que suma datos de un archivo real'],
      ['5. Comprobar', '10 a 12 años', 'un porcentaje calculado bien y revisado a mano con un caso']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'El nivel 5 es el que más cuesta y el que más sirve: revisar un resultado antes de creerlo.',
      'Pida a su hijo que le explique un error de la semana y cómo lo resolvió. Si lo puede contar, lo aprendió.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Si el programa dice cero, pregúntese si tiene sentido.',
      'Compruebe un caso a mano antes de confiar en todos los demás.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos pensados para la primaria cusqueña',
    lede: 'La misma fórmula en cada uno: clase en vivo, en inglés, con un mentor que no cambia, en grupo o a solas.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'De 6 a 12 años', courses: [
        { code: 'PNC / I / 01', slug: 'kids-coding-blocks-masterclass', title: 'Curso completo de bloques', blurb: 'Diez a doce meses de Scratch, juegos y apps para chicos de primaria.' },
        { code: 'PNC / I / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar antes de programar', blurb: 'Acertijos y series para los más pequeños de la casa.' },
        { code: 'PNC / I / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria', blurb: 'De 1° a 5° grado, para reforzar la base que pide la programación.' }
      ] },
      { num: 'II', h3: 'Juegos', sub: 'De 7 a 14 años', courses: [
        { code: 'PNC / II / 01', slug: 'minecraft-coding-for-kids-course', title: 'Código en Minecraft', blurb: 'Cuatro meses para automatizar dentro del juego.' },
        { code: 'PNC / II / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Mundos en Roblox', blurb: 'Seis meses de Luau para crear niveles y reglas.' },
        { code: 'PNC / II / 03', slug: 'game-development-masterclass-for-kids', title: 'Desarrollo de videojuegos', blurb: 'Tres herramientas de juego en un solo recorrido.' }
      ] },
      { num: 'III', h3: 'Web, IA y oficina', sub: 'De 7 a 12 años', courses: [
        { code: 'PNC / III / 01', slug: 'kids-ai-web-development-course', title: 'Mi primera página web', blurb: 'HTML y CSS hasta publicar algo propio.' },
        { code: 'PNC / III / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Juegos con ayuda de IA', blurb: 'Usar la IA para crear, revisando cada sugerencia.' },
        { code: 'PNC / III / 03', slug: 'microsoft-office-kids-mastery', title: 'Word, PowerPoint y Excel', blurb: 'Las herramientas de la tarea escolar, bien aprendidas.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué pasa en una semana de clases en vivo desde el Cusco?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Tarde, tras el almuerzo', l: 'La opción más común en época de colegio.' },
      { time: 'Mañana temprano', l: 'Para chicos con turno escolar de tarde.' },
      { time: 'A medida', l: 'En clases individuales, el horario se acuerda con usted.' }
    ],
    cells: [
      { h3: 'Mentor de todo el curso', p: 'Una sola persona que conoce el ritmo y las dudas de su hijo.' },
      { h3: 'Código compartido', p: 'Cada línea que su hijo teclea aparece en la pantalla del mentor.' },
      { h3: 'Datos de verdad', p: 'Archivos reales, como los del Ministerio de Cultura, no ejemplos inventados.' },
      { h3: 'Inglés paciente', p: 'Frases cortas y tiempo para que el niño responda.' },
      { h3: 'Resumen para casa', p: 'Unas líneas tras la clase sobre lo practicado.' },
      { h3: 'Dos maneras', p: 'Un grupo de quince a veinte compañeros, o el mentor solo para él.' }
    ]
  },

  projectsH2: 'Lo que crean nuestros estudiantes',
  projectsLede: 'Trabajos de alumnos mayores que empezaron como su hijo; hay muchos más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, una galería escrita en inglés.',
  reviewsLede: 'Comentarios de Google de familias y estudiantes, copiados sin cambios, en inglés.',

  fees: {
    h2: 'Mensualidades para familias cusqueñas',
    lede: 'Mostramos la mensualidad en dólares estadounidenses y se cobra con tarjeta. Su banco hace la conversión a su moneda, de manera que el importe final puede cambiar ligeramente con el tipo de cambio del día.',
    free: ['Clase de prueba gratuita', 'Orientación sobre el curso adecuado', 'Sin tarjeta y sin compromiso'],
    group: ['Quince a veinte niños de edades parecidas', 'Un solo mentor durante el curso', 'Dos clases en vivo por semana', 'Mensual, sin permanencia'],
    one: ['Solo su hijo con el mentor', 'El ritmo y los temas que necesite', 'El horario que usted indique']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Lo que preguntan las familias del Cusco',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las damos en vivo, por internet y solo en inglés, y en una ciudad como el Cusco eso suele verse como ventaja: su hijo aprende a programar mientras se suelta a hablar inglés, con un mentor que va despacio. Según el EF EPI 2025, Lima es la única ciudad peruana con nivel alto y el Cusco le sigue con 520 puntos.' },
      { q: '¿Mi hijo puede aprender a programar en el Cusco sin salir de casa?', a: 'Sí. Las nuestras son en vivo por videollamada, con un mentor real que sigue el trabajo del niño en su pantalla. Se conectan desde cualquier distrito del Cusco.' },
      { q: '¿Qué tantos escolares de primaria tiene la provincia del Cusco?', a: 'El INEI contó, en los Censos Nacionales 2025, 42,745 personas de seis a once años en la provincia, sobre 456,208 censados: un 9.4 %, por nuestro cálculo.' },
      { q: '¿Desde qué edad puede empezar mi hijo?', a: 'Con seis años ya puede crear en Scratch. A los ocho puede empezar a entender la inteligencia artificial, y casi todos escriben Python al llegar a quinto grado.' },
      { q: '¿Para qué sirve el ejercicio de Machu Picchu?', a: 'Para calcular porcentajes en Python sin caer en la división entera. El archivo es del Ministerio de Cultura, y la primera versión del programa marca 0 % de niños en todos los sitios; al corregirlo descubre que el 18.6 % de los visitantes peruanos de Machu Picchu en 2025 fueron niños, frente al 5.3 % de los extranjeros.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Las 8:15 a. m. del Cusco son las 6:45 p. m. en la India.' },
      { q: '¿Qué necesita mi hijo para conectarse?', a: 'Una laptop o computadora de escritorio con cámara y micrófono, audífonos y una conexión estable. Un celular no alcanza para escribir código con comodidad.' },
      { q: '¿Enseñan robótica?', a: 'Enseñamos programación, que es lo que hace funcionar a un robot. No usamos ni vendemos kits.' },
      { q: '¿Cómo se paga?', a: 'La mensualidad se carga a una tarjeta, en dólares estadounidenses, y el banco hace la conversión. Para la sesión de prueba no se piden datos de pago.' },
      { q: '¿Las clases tienen valor oficial?', a: 'No. No tenemos relación con el MINEDU, la DRE Cusco, la UGEL ni con ningún colegio, y no ponemos notas. Lo único que damos al acabar un curso es el certificado de finalización de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Siga leyendo',
    h2: 'Más páginas para familias cusqueñas',
    lede: 'Algunas en castellano y varias en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La página general para todo el Perú.' },
      { href: '/online-coding-and-ai-classes-cusco-region-peru', label: 'Cusco region', p: 'Para las trece provincias del departamento.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué ofrece la primaria peruana y cómo es aprender a programar en inglés.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad que exige cada herramienta de IA.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una clase en vivo con nosotros.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, por edad y tema.' }
    ]
  },

  start: {
    h2: 'Reserve la clase de prueba desde el Cusco',
    lede: 'En esa primera sesión el mentor se presenta en un inglés sencillo, le pide a su hijo un pequeño reto en Scratch o en Python y observa cómo razona. Luego le recomendamos curso y formato, sin compromiso.',
    readFirst: 'Antes, si quiere, lea <a class="ag-inline-link" href="/how-we-teach">How we teach</a> sobre nuestro método o recorra <a class="ag-inline-link" href="/courses">All courses</a>, el catálogo (las dos en inglés).',
    note: 'Nuestras clases son en vivo y en inglés, con mentores radicados en la India. Escríbanos por WhatsApp en castellano si lo prefiere.',
    formNote: 'Gratis, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch de cero a juegos' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'Entender la IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Cusco y el Perú', links: [
        { href: '/online-coding-and-ai-classes-cusco-region-peru', label: 'Región Cusco' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Primero multiplicar, después dividir'
  },

  personalityCss: `
.ag-root.ag-pnc .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-pnc .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-pnc .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pnc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnc .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI: Censos Nacionales 2025 indicadores demográficos for Cusco (cuadros 1 and 3), Perfil Sociodemográfico 2017 Cuadro N° 1.9, TIC II trimestre 2026; MINEDU: CNEB competency 28, RM 501-2025-MINEDU (regional calendar powers; dates checked by eye), DITE robotics paper; EF EPI 2025 Peru page; tzdata and INACAL for time; Ministerio de Cultura archaeological-site visitors dataset (SISMUS, ODC-By). Visitor sums, levels and the Machu Picchu lesson are our own.',
    localProject: 'What share of Machu Picchu visitors are children? An original Python lesson for children of 10 to 12 on the Ministerio de Cultura archaeological-site visitors file (ODC-By), 2025, four Cusco sites by Nacionales and Extranjeros: version 1 uses chicos // todos * 100 and prints 0 % children on all eight lines; version 2 uses round(chicos * 100 / todos, 1) and prints Machu Picchu Nacionales 63010 of 338792 18.6 % and Extranjeros 60102 of 1140714 5.3 %, and Raqchi Extranjeros 19 of 85556 0.0 %, which hides 19 children. Lesson family: percentages, integer versus true division, and what rounding hides.',
    requiredMentions: ['Machu Picchu Nacionales 0 % children', 'Machu Picchu | Nacionales | 63010 of 338792 | 18.6 % children', 'Raqchi | Extranjeros | 19 of 85556 | 0.0 % children', 'censados que tenían de 6 a 11 años', 'Parque Arqueológico Machu Picchu', 'Visitantes a sitios arqueológicos', 'tienen la potestad de definir una distribución de semanas lectivas y de gestión distinta a la sugerida', 'Primero multiplicar, después dividir', 'por cada visitante peruano de 2025 hubo más de tres extranjeros', 'Con un solo decimal, 19 de 85,556 desaparecen'],
    sources: [
      { claim: 'Cusco 1,379,251 and province of Cusco 495,112 (Cuadro 1); province censada 456,208 with 42,745 aged 6 to 11 (Cuadro 3); district 102,111.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/08/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Cusco city 348,935 in 2007 and 428,450 in 2017, growth 22.8% (Cuadro N° 1.9).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'EF EPI 2025: Cusco 520, Trujillo 519, Arequipa 512, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Monthly visitors to archaeological sites by type and origin, including Machu Picchu, Moray, Raqchi and Tipón; ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/visitantes-sitios-arqueologicos' },
      { claim: 'DRE and UGEL may set a different distribution of weeks; 2026 school year 16 March to 18 December.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Competency 28 is transversal in the CNEB.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'II trimestre 2026: resto urbano homes with internet 66.2% and a computer 41.3%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Robotics as a means, not the goal (MINEDU DITE).', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and an FAQ.',
      'Quechua-language teaching or any claim about Quechua speakers: none; the capsule only notes the languages heard in the city.',
      'Claims about how many Cusco families work in tourism or which languages are most heard in the city: no source; not made.',
      'Commute times in Cusco: no published figure; compared in words only.',
      'A 2025 population for Cusco city: not published by INEI; the 2017 figure keeps its year.',
      'Any link with MINEDU, DRE Cusco, UGEL, the Ministerio de Cultura or a school: none; the page says so.',
      'Robot kits or hardware: none. Soles, competitor prices or typed fees: refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: market (es city door) | Arequipa kids 6 to 12: robótica question, census, a SENAMHI sensor log | running minimum: start from the first reading, never from 0; skip blanks
'use strict';
// Clases de programación para niños en Arequipa (ag- Spanish city door, Peru cluster row PE129, P6, hubGroup cities;
// alloc: code prar, accent #6B2E04). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english"; owner 2026-11-08: timing flexible, any time. Formal "usted". Fees only through the template (USD anchors).
// Angle: the Arequipa parent of a child of 6 to 12. Arequipa is the robotics city in the keyword data ("robótica para
// niños arequipa", KEYWORDS.md sections 1 and 4; Arequipa ranks second with 85 place suggestions). Spine: robotics is
// sensors plus a program, so the page answers "robótica o programación" through a real sensor: an hourly SENAMHI weather
// station in the province of Arequipa; how many primaria-age children the province has (INEI 2025 Cuadro 3); what the
// ENLA says about Arequipa; whether a child here can follow a class in English (EF EPI 2025 Arequipa 512); home vs academy.
// Different spine, dataset and lesson from coding-classes-in-arequipa-peru (tourist inventory, numbers stored as text) and
// online-coding-and-ai-classes-arequipa-region-peru (ProInnovate projects, substring vs whole word).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-arequipa/
// and the research folders named; quotes string-matched in the raw text):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, Arequipa workbook (tabulados/04, data/ind_04.xlsx): Cuadro 1
//    "AREQUIPA 1814554 ..." and "PROVINCIA AREQUIPA 1382600 ..."; district AREQUIPA 56,157 (places.tsv); Cuadro 3
//    (censada by age group) "PROVINCIA AREQUIPA 1321693 80000 112339 120047 ..." (Total, De 0 a 5, De 6 a 11, De 12 a 17).
//    Census reference day 15 September 2025.
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (image): "Arequipa Arequipa 806 782 1 008 290 201 508 25.0 2.3".
//  - INEI, TIC en los hogares, II trimestre 2026: "en el resto urbano, el 66,2%" (internet); computer "el 41,3% en el resto
//    urbano"; national "el 36,4%" and "64,5%"; children 6 to 11 use internet "(68,2%)".
//  - MINEDU, ENLA 2025 note (FACTS 62): "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país."
//  - MINEDU DITE robotics paper (FACTS 53, 54): "desde el año 1996 con el proyecto Infoescuela"; LEGO WeDo kits 2009 and 2010.
//  - CNEB (FACTS 32, 33): competency 28 "Se desenvuelve en entornos virtuales generados por las TIC", transversal.
//  - EF EPI 2025 Peru page (ef_peru.raw): "Lima 555 Cusco 520 Trujillo 519 Arequipa 512"; bands high 550, moderate 500.
//  - Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; India UTC+5:30, 10 h 30 min ahead.
//  - Data: SENAMHI, "Variables Meteorologicas de las Estaciones automáticas de intercambio internacional - [Servicio
//    Nacional de Meteorología e Hidrología del Perú - SENAMHI]", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/variables-meteorologicas-de-las-estaciones-autom%C3%A1ticas-de-intercambio-internacional-servicio,
//    licence "Open Data Commons Attribution License" (page and package_show odc-by), modified 08/09/2025. Raw copy
//    senamhi-intercambio.csv (50,474,012 bytes, sha256 3d3e8a0a75e070d0..., fetched 2026-11-08 for facts-geo, copied to
//    data/). Dictionary (Diccionario_Datos xlsx): TEMP "Temperatura promedio horaria (unidad: °C)", FECHA "aaaammdd",
//    HORA "hhmmss" (no time zone stated, so the page never reads the hour). Station SAN_JOSE_DE_UZUNA rows: department
//    AREQUIPA, province AREQUIPA, district POLOBAYA, ALTITUD 3269.0, from 20150101 to 20240630, 849 blank TEMP in all years.
// Our own calculations (python3 -I): 112,339 / 1,321,693 = 8.5% of the people counted in the province are 6 to 11.
// Our own example, run with python3 -I on the downloaded file (data/v1.py, data/v2.py), exact output:
//  v1: 2023 month 01 coldest: 0 / 2023 month 04 coldest: 0 / 2023 month 07 coldest: -1.7 / 2023 month 10 coldest: -0.3
//  v2: Empty readings skipped: 65 / 2023 month 01 | coldest: 1.3 | warmest: 20.1 | swing: 18.8 / 2023 month 04 | coldest:
//      0.1 | warmest: 20.0 | swing: 19.9 / 2023 month 07 | coldest: -1.7 | warmest: 21.7 | swing: 23.4 / 2023 month 10 |
//      coldest: -0.3 | warmest: 22.5 | swing: 22.8
// Lesson family: the starting value of a running minimum (start from the first reading, not from 0), plus skipping blanks.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'import csv',
  '',
  'frio = {}',
  "with open('senamhi-intercambio.csv', encoding='utf-8') as f:",
  '    for fila in csv.DictReader(f):',
  "        if fila['ESTACION'] != 'SAN_JOSE_DE_UZUNA' or not fila['FECHA'].startswith('2023'):",
  '            continue',
  "        if fila['TEMP'] == '':",
  '            continue',
  "        mes = fila['FECHA'][4:6]",
  "        t = float(fila['TEMP'])",
  '        if mes not in frio:',
  '            frio[mes] = 0',
  '        if t < frio[mes]:',
  '            frio[mes] = t',
  '',
  "for mes in ['01', '04', '07', '10']:",
  "    print('2023 month', mes, 'coldest:', frio[mes])"
].join('\n');

const OUT1 = [
  '2023 month 01 coldest: 0',
  '2023 month 04 coldest: 0',
  '2023 month 07 coldest: -1.7',
  '2023 month 10 coldest: -0.3'
].join('\n');

const V2 = [
  'import csv',
  '',
  'frio = {}',
  'calor = {}',
  'vacias = 0',
  "with open('senamhi-intercambio.csv', encoding='utf-8') as f:",
  '    for fila in csv.DictReader(f):',
  "        if fila['ESTACION'] != 'SAN_JOSE_DE_UZUNA' or not fila['FECHA'].startswith('2023'):",
  '            continue',
  "        if fila['TEMP'] == '':",
  '            vacias += 1',
  '            continue',
  "        mes = fila['FECHA'][4:6]",
  "        t = float(fila['TEMP'])",
  '        if mes not in frio:',
  '            frio[mes] = t',
  '            calor[mes] = t',
  '        frio[mes] = min(frio[mes], t)',
  '        calor[mes] = max(calor[mes], t)',
  '',
  "print('Empty readings skipped:', vacias)",
  "for mes in ['01', '04', '07', '10']:",
  "    print('2023 month', mes, '| coldest:', frio[mes], '| warmest:', calor[mes],",
  "          '| swing:', round(calor[mes] - frio[mes], 1))"
].join('\n');

const OUT2 = [
  'Empty readings skipped: 65',
  '2023 month 01 | coldest: 1.3 | warmest: 20.1 | swing: 18.8',
  '2023 month 04 | coldest: 0.1 | warmest: 20.0 | swing: 19.9',
  '2023 month 07 | coldest: -1.7 | warmest: 21.7 | swing: 23.4',
  '2023 month 10 | coldest: -0.3 | warmest: 22.5 | swing: 22.8'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Arequipa: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-arequipa',
  code: 'prar',
  accent: '#6B2E04',
  accentRationale: 'Clases de programación para niños en Arequipa: the allocated burnt sienna #6B2E04 (alloc.tsv), the dark earth of the Arequipa countryside set against the white sillar of the paper; well above 4.5 contrast on #FBF8F2 and both tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Arequipa',
  title: 'Clases de programación para niños en Arequipa, en inglés',
  description: 'Programación para niños de 6 a 12 años en Arequipa, en vivo, en línea y en inglés: robótica o código, Scratch y Python, en grupo o individual, a cualquier hora.',
  ogDescription: 'Clases de programación en vivo y en inglés para niños arequipeños de primaria: robótica o programación, cuántos niños hay según el censo 2025 y un proyecto con un sensor del SENAMHI.',
  twitterDescription: 'Programación para niños de Arequipa, en vivo y en inglés: la parte de la robótica que hace pensar al robot, desde casa y a cualquier hora.',
  pageName: 'Clases de programación para niños en Arequipa',
  webPageDescription: 'Guía para familias de Arequipa sobre clases de programación para niños de 6 a 12 años dictadas en vivo, en línea y en inglés: robótica o programación, población infantil de la provincia según los Censos Nacionales 2025 del INEI, la ENLA 2025, el inglés de Arequipa en el EF EPI 2025 y un proyecto propio en Python con los registros horarios de una estación del SENAMHI en la provincia (licencia ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Arequipa, dictadas solo en inglés: bloques y Scratch, Python con datos de sensores, matemáticas con código y proyectos de IA, en una clase grupal o en clases individuales, a la hora que elija la familia.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Arequipa',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#robotica', label: 'Robótica' },
    { href: '#provincia', label: 'La provincia' },
    { href: '#sensor', label: 'Proyecto SENAMHI' },
    { href: '#ingles', label: 'En inglés' },
    { href: '#reloj', label: 'Horarios' }
  ],
  eyebrow: 'Arequipa &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Arequipa',
  lede: 'Cuando una familia arequipeña busca tecnología para sus hijos, casi siempre escribe primero "robótica". Es una buena pista: un robot es un sensor que mide, un programa que decide y un motor que obedece. Esta página explica por qué empezamos por el programa, cuántos escolares de primaria tiene la provincia según el INEI, qué supone tener un mentor que solo usa el inglés y qué se aprende leyendo, con Python, las temperaturas que una estación del SENAMHI registra cada hora en la provincia de Arequipa.',
  secondaryCta: { href: '#sensor', label: 'Ver el proyecto del sensor' },
  wa: 'Hola Modern Age Coders, somos de Arequipa y queremos clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar la clase de prueba?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 alumnos en distintos países &middot; un solo mentor que conoce a su hijo',
  spec: [
    ['Edades', 'De 6 a 12 años, toda la primaria'],
    ['Para quién', 'Familias de cualquier distrito de Arequipa'],
    ['Qué se aprende', 'La lógica que mueve a un robot, sin piezas'],
    ['Formato', 'Grupo de quince a veinte niños, o clases individuales'],
    ['Idioma', 'Solo inglés, dicho con calma y a su ritmo'],
    ['Clase de prueba', 'Gratis y sin datos de pago']
  ],
  capsuleQ: 'La respuesta, primero',
  capsule: 'Para niños arequipeños de 6 a 12 años, Modern Age Coders ofrece programación en vivo por internet, enseñada siempre en inglés: el cerebro de cualquier robot, que es su programa, sin comprar ningún kit. Hasta los ocho años se trabaja con bloques y Scratch; después llegan Python, los datos de sensores y la IA. Un mentor que vive en la India conduce cada clase por videollamada, con paciencia y frases simples. Usted escoge si su hijo va en grupo o solo con el mentor, y el día y la hora que le acomoden a su casa. Probar no cuesta nada.',

  picks: {
    eyebrow: 'Para empezar en Arequipa',
    h2: 'Los tres cursos con los que arrancan los chicos arequipeños',
    lede: 'El primero para quien llega con ganas de robótica, el segundo para quien ya escribe en el teclado y el tercero para el niño al que le van bien los números.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PRAR / 01', title: 'Programación para niños con bloques', alt: 'Imagen del curso de programación para niños con bloques', note: 'Entre diez y doce meses, con grupos según la edad, de seis a doce años. Los mismos bucles y condiciones que mueven un robot educativo, aplicados a juegos, historias y apps en Scratch.' },
      { course: 'python-ai-kids-masterclass', code: 'PRAR / 02', title: 'Python e inteligencia artificial', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'Para quienes ya cumplieron nueve, de ocho a diez meses y desde cero. Python de verdad: dibujos, juegos y la lectura de datos, como las temperaturas del proyecto de esta página.' },
      { course: 'maths-through-coding', code: 'PRAR / 03', title: 'Matemáticas con código', alt: 'Imagen del curso de matemáticas con programación', note: 'Desde los diez años, nueve meses. Fracciones, gráficos y patrones que el niño programa en Python, para entender la matemática del colegio desde otro lado.' }
    ]
  },

  sections: [
    {
      id: 'robotica',
      eyebrow: 'Robótica o programación',
      h2: '¿Robótica para niños en Arequipa o clases de programación?',
      lede: 'Si hay que elegir una sola cosa para empezar, programación. Todo robot tiene tres partes: lo que mide (sensores), lo que decide (el programa) y lo que se mueve (motores). La que más enseña a pensar es la del medio, y es la única que no necesita comprar nada.',
      body: [
        { kind: 'three', cells: [
          { h3: 'El sensor mide', p: 'Una luz, una distancia, una temperatura. El sensor no sabe qué hacer con ese número: solo lo entrega, una y otra vez.' },
          { h3: 'El programa decide', p: 'Compara el número con una regla: si está oscuro, encender; si hay un obstáculo, girar. Aquí está la lógica que aprende su hijo con nosotros.' },
          { h3: 'El motor obedece', p: 'Hace lo que el programa le ordena. Sin un buen programa, hasta el motor más potente del kit da vueltas sin sentido.' }
        ] },
        { kind: 'p', mt: true, html: 'En el Perú la robótica escolar tiene historia. El documento de robótica educativa del Ministerio de Educación cuenta que el ministerio la incorpora "desde el año 1996 con el proyecto Infoescuela" y que en 2009 y 2010 repartió kits LEGO WeDo a casi todos los colegios públicos de primaria. Muchos niños arequipeños han tenido, entonces, un robot cerca; menos han tenido el tiempo de aprender a programarlo a fondo, porque en un taller las piezas se llevan buena parte de la hora.' },
        { kind: 'p', html: 'Nuestras clases trabajan la parte del programa con Scratch y con Python, y usan datos reales de sensores, como los de la estación del SENAMHI que verá más abajo. No vendemos kits ni enviamos hardware. Y si a su hijo ya lo llevan a robótica, sea en el colegio o en alguna academia de la ciudad, lo que practique con nosotros lo usará allí tal cual, porque un robot escolar se programa con bloques o con código que siguen las mismas reglas.' }
      ]
    },
    {
      id: 'provincia',
      eyebrow: 'La provincia',
      h2: '¿Cuántos chicos en edad de primaria tiene la provincia de Arequipa?',
      lede: 'Más de cien mil. El censo de 2025 registró en la provincia de Arequipa 112,339 personas de seis a once años, según el INEI.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Arequipa en los censos del INEI, cada cifra con su unidad y su año', head: ['Qué se mide', 'Personas', 'Censo'], rows: [
          ['Departamento de Arequipa, población total', '1,814,554', 'Censos Nacionales 2025'],
          ['Provincia de Arequipa, población total', '1,382,600', 'Censos Nacionales 2025'],
          ['Provincia de Arequipa, población censada', '1,321,693', 'Censos Nacionales 2025'],
          ['Provincia de Arequipa, censados de 6 a 11 años', '112,339', 'Censos Nacionales 2025'],
          ['Distrito de Arequipa (el Cercado)', '56,157', 'Censos Nacionales 2025'],
          ['Ciudad de Arequipa', '1,008,290', 'Censos Nacionales 2017']
        ] },
        { kind: 'source', html: 'De dónde salen: el libro de indicadores demográficos que el INEI publicó para Arequipa con los Censos Nacionales 2025 (cuadro 1, población total que junta censada y omitida; cuadro 3, censada según grupo de edad; día del censo, 15 de septiembre de 2025) y, para la ciudad capital, el Cuadro N° 1.9 del Perfil Sociodemográfico 2017. Son unidades distintas que se superponen; no se suman entre sí.' },
        { kind: 'two', mt: true,
          leftH3: 'Cómo leer la tabla',
          left: [
            'La ciudad de Arequipa no es un solo distrito: el Cercado tiene 56,157 habitantes en 2025, mientras que Cerro Colorado, Cayma, Paucarpata, José Luis Bustamante y Rivero, Yanahuara y los demás distritos de la provincia reúnen a la mayor parte de los arequipeños.',
            'En la provincia, los censados de 6 a 11 años son el 8.5 % del total censado (cálculo nuestro: 112,339 entre 1,321,693). En el Cuadro N° 1.9 del INEI, la ciudad pasó de 806,782 habitantes en 2007 a 1,008,290 en 2017, un aumento de 25.0 %.'
          ],
          rightH3: 'Qué significa para una familia',
          right: [
            'Una ciudad que creció tanto en diez años tiene barrios nuevos lejos del centro, donde suelen estar las academias. Para un niño de Cerro Colorado o de Socabaya, un taller en el Cercado significa un viaje de ida y otro de vuelta, casi siempre con un adulto.',
            'Con la clase en vivo, el niño de Characato y el de Yanahuara tienen el mismo mentor y la misma hora de calidad, sin que el distrito cuente.'
          ] },
        { kind: 'p', mt: true, html: 'En la medición de abril a junio de 2026 del INEI, el 66,2 % de los hogares del "resto urbano", que es como el instituto llama a las ciudades fuera de Lima, tenía internet, y el 41,3 % contaba con al menos una computadora. Con una computadora que tenga cámara y una conexión que no se corte, su hijo ya puede empezar.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'El colegio',
      h2: '¿Qué aprenden de programación los niños arequipeños en el colegio?',
      lede: 'Por lo general, poco y de forma suelta. El Currículo Nacional no tiene un área de programación en primaria: la competencia digital es transversal y cada colegio decide cuánto la trabaja.',
      body: [
        { kind: 'p', html: 'En el CNEB, lo digital es la competencia 28, la de desenvolverse en los entornos virtuales, y el MINEDU la clasifica como transversal. En la práctica no tiene horas propias en la semana: se cuela en Comunicación, en Matemática o en Ciencia y tecnología cuando el docente lo programa. Un colegio puede tener un taller de computación o de robótica y otro, a dos cuadras, no tener ninguno.' },
        { kind: 'p', html: 'En lo que sí mide el Estado, Arequipa sale bien parada. En su nota sobre los resultados de la ENLA 2025, el MINEDU escribió que "Moquegua, Tacna y Arequipa continúan liderando los logros de aprendizaje en todo el país". Es una buena base: un niño que lee con soltura y resuelve problemas de matemática tiene media programación ganada. Esa cifra es de la región, no de su hijo: dónde empieza él lo decide el mentor al verlo trabajar en la clase de prueba.' },
        { kind: 'ol', mt: true, items: [
          '<strong>En 1° y 2° de primaria.</strong> Bloques grandes, secuencias y personajes que se mueven. Lo importante es que el niño ordene pasos, no que escriba.',
          '<strong>En 3° y 4°.</strong> Bucles, condiciones y juegos completos en Scratch. Aquí se nota quién viene de un taller de robótica: ya entiende el "si pasa esto, haz aquello".',
          '<strong>En 5° y 6°.</strong> Python escrito, listas y datos reales. Es la edad del proyecto del SENAMHI de esta página.'
        ] }
      ]
    },
    {
      id: 'sensor',
      tint: 'tint',
      eyebrow: 'Proyecto con datos reales',
      h2: '¿Hiela en la provincia de Arequipa? Un proyecto de Python con una estación del SENAMHI',
      lede: 'Una estación meteorológica es un robot a medias: tiene sensores y guarda lo que mide, pero no decide nada. El programa lo ponemos nosotros. Este ejercicio es nuestro, para niños de 10 a 12 años, y usa los registros horarios de la estación San José de Uzuña, en el distrito de Polobaya, provincia de Arequipa, a 3,269 metros de altitud según el propio archivo.',
      body: [
        { kind: 'p', html: 'Los datos vienen del conjunto "Variables Meteorológicas de las Estaciones automáticas de intercambio internacional" del Servicio Nacional de Meteorología e Hidrología del Perú (SENAMHI), que cualquiera puede descargar del portal nacional datosabiertos.gob.pe porque tiene licencia abierta ODC-By (Open Data Commons Attribution). Cada fila es una hora: la columna TEMP guarda la "Temperatura promedio horaria", en grados Celsius, y algunas filas vienen vacías porque el sensor no registró nada. La pregunta para el niño es sencilla: ¿cuál fue la hora más fría de cada mes de 2023?' },
        { kind: 'code', label: 'Primer intento: buscar el mínimo de cada mes', lang: 'Python', code: V1, note: 'Antes de correrlo, el mentor pregunta: "Was there frost in January?" La mayoría de chicos dice que no sabe, y está bien: para eso es el programa.' },
        { kind: 'code', label: 'Salida del primer intento', lang: 'Salida', code: OUT1, note: 'Salida exacta al ejecutarlo nosotros con python3 -I sobre el archivo descargado. Julio y octubre se ven razonables. Enero y abril, no tanto.' },
        { kind: 'p', mt: true, html: '¿Hizo exactamente 0 grados en enero y también en abril? Sospechoso. El error está en la línea <code>frio[mes] = 0</code>: el programa empieza suponiendo que lo más frío del mes fue 0 grados, y solo cambia de opinión si encuentra algo más bajo. En julio y octubre hubo horas bajo cero, así que la respuesta salió bien por suerte. En enero ninguna hora bajó de 0, así que el 0 inicial nunca se reemplazó: el programa "inventó" una helada que no pasó.' },
        { kind: 'code', label: 'Segundo intento: empezar con la primera lectura', lang: 'Python', code: V2, note: 'Ahora cada mes arranca con su primera lectura real, y <code>min()</code> y <code>max()</code> hacen el resto. También contamos las filas vacías en vez de saltarlas en silencio.' },
        { kind: 'code', label: 'Salida del segundo intento', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3 -I. La hora más fría de enero de 2023 marcó 1.3 grados, no 0, y la de abril 0.1.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'San José de Uzuña (Polobaya, Arequipa), 2023: hora más fría, hora más cálida y diferencia por mes, en °C (cálculo nuestro con el segundo intento)', head: ['Mes de 2023', 'Más fría', 'Más cálida', 'Diferencia'], rows: [
          ['Enero', '1.3', '20.1', '18.8'],
          ['Abril', '0.1', '20.0', '19.9'],
          ['Julio', '-1.7', '21.7', '23.4'],
          ['Octubre', '-0.3', '22.5', '22.8']
        ] },
        { kind: 'source', html: 'Fuente de los datos: SENAMHI, "Variables Meteorologicas de las Estaciones automáticas de intercambio internacional" en datosabiertos.gob.pe, bajo Open Data Commons Attribution License, junto con su diccionario de datos. El archivo no indica la zona horaria de la columna HORA, por eso solo usamos meses. Valores calculados por nosotros, con promedios horarios, no con lecturas instantáneas.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir.</strong> El niño dice en inglés qué mes cree que fue el más frío y por qué. Muchos aciertan con julio, el invierno de la sierra.',
          '<strong>Desconfiar del cero.</strong> Un valor redondo que se repite en dos meses distintos es una alarma. Buscar de dónde sale es más útil que borrar el programa y empezar de nuevo.',
          '<strong>Arreglar el punto de partida.</strong> El mínimo de una lista empieza con un elemento de la lista, nunca con un número inventado. Es una regla que le servirá toda la vida.',
          '<strong>Contar lo que falta.</strong> 65 horas de 2023 vinieron sin temperatura. No pasa nada, pero hay que saberlo antes de sacar conclusiones.',
          '<strong>Pensar como robot.</strong> El reto final es escribir la regla de un robot invernadero: si la temperatura baja de 2 grados, cerrar la ventana. Con los datos reales, ¿cuántas horas de julio habría estado cerrada?'
        ] },
        { kind: 'p', mt: true, html: 'El proyecto muestra por qué preferimos empezar por el programa: el sensor midió bien todo el año, y aun así la primera respuesta fue falsa. La equivocación no estaba en el aparato sino en una suposición del código. Enseñar a encontrar esa suposición es lo que hacemos en cada clase, y es lo que ninguna herramienta que da respuestas hechas le enseña a un niño.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Un niño de Arequipa puede seguir clases de programación en inglés?',
      lede: 'Sí, aunque las primeras semanas piden paciencia. El EF EPI 2025 le da a Arequipa 512 puntos, dentro de la banda moderada, y a Lima 555, en la alta. La diferencia se nota más en los adultos que en un niño de primaria, que aprende rápido de oído.',
      body: [
        { kind: 'two',
          leftH3: 'Qué hace el mentor',
          left: [
            'Habla despacio, usa frases de cinco o seis palabras y marca con el cursor aquello de lo que habla: <em>this block</em>, <em>this line</em>, <em>run it again</em>. El código mismo ayuda, porque Python ya está escrito con palabras en inglés.',
            'Cuando un niño responde en castellano, el mentor entiende la idea y le ofrece la frase en inglés para que la diga él mismo. A nadie se le corrige delante del grupo.'
          ],
          rightH3: 'Qué notará usted en casa',
          right: [
            'Al principio su hijo entenderá más de lo que dice. Hacia el segundo mes muchos niños empiezan a explicar su propio programa en inglés, con errores y sin miedo, que es lo que importa.',
            'Es un aprendizaje doble: programación y práctica oral del idioma en la misma hora, sin agregar otra actividad a una semana ya llena.'
          ] },
        { kind: 'source', mt: true, html: 'Cifras del EF EPI 2025, ficha de Perú publicada por EF Education First y consultada en noviembre de 2026: ciudades "Lima 555 Cusco 520 Trujillo 519 Arequipa 512"; Perú 519, banda moderada. EF ubica la banda alta desde 550 y la moderada desde 500. El índice mide a adultos que rinden su prueba, no a niños.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Desde casa',
      h2: '¿Academia de robótica en la ciudad o clases en vivo desde casa?',
      lede: 'Depende de lo que busque. Si quiere que su hijo arme piezas, la academia presencial tiene sentido. Si quiere que aprenda a pensar como programador, la clase en vivo desde casa da más tiempo de código y le ahorra a usted los traslados.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dos formas de aprender tecnología en Arequipa (nuestra comparación, sin cifras de ninguna academia)', head: ['', 'Taller presencial de robótica', 'Clase de programación en vivo'], rows: [
          ['Dónde', 'En el local, casi siempre lejos de los distritos nuevos', 'En casa, en cualquier distrito'],
          ['Qué ocupa la hora', 'Armar, probar piezas y programar', 'Pensar, programar y corregir'],
          ['Qué hay que comprar', 'Muchas veces, un kit', 'Nada; basta una computadora'],
          ['Idioma', 'Castellano, por lo general', 'Inglés, con un mentor paciente'],
          ['Horario', 'El del taller', 'El que usted elija']
        ] },
        { kind: 'p', mt: true, html: 'No las vemos como rivales. Hay familias que mantienen el taller de robótica de los sábados y suman dos clases de programación por semana; el niño llega al taller sabiendo qué quiere que haga su robot. Para comparar con calma otras opciones, la guía de <a class="ag-inline-link" href="/mejores-clases-de-programacion-para-ninos-peru">cómo elegir clases de programación para niños en Perú</a> propone criterios que sirven para cualquier academia, también la nuestra.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿A qué hora pueden ser las clases desde Arequipa?',
      lede: 'A la que más le acomode a su familia. Los mentores están en la India, cuyo reloj adelanta al de Arequipa 10 horas y 30 minutos en cualquier época, y esta tabla solo convierte algunas horas de ejemplo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Una hora de Arequipa vista desde la India (ejemplos para convertir, no un horario)', head: ['Arequipa', 'India', 'Fecha en la India'], rows: [
          ['6:30 a. m.', '5:00 p. m.', 'Igual que en Arequipa'],
          ['8:00 a. m.', '6:30 p. m.', 'Igual que en Arequipa'],
          ['10:30 a. m.', '9:00 p. m.', 'Igual que en Arequipa'],
          ['12:30 p. m.', '11:00 p. m.', 'Igual que en Arequipa'],
          ['3:30 p. m.', '2:00 a. m.', 'Ya es el día siguiente'],
          ['5:30 p. m.', '4:00 a. m.', 'Ya es el día siguiente']
        ] },
        { kind: 'source', html: 'Todo el Perú usa UTC-5, sin horario de verano desde 1994 (zona America/Lima de la base tzdata; hora oficial del INACAL). La India, con UTC+5:30, tampoco cambia. Así que esta conversión vale igual en enero que en agosto.' },
        { kind: 'p', mt: true, html: 'Muchas familias arequipeñas eligen media tarde, con el almuerzo y las tareas ya resueltos; otras prefieren la mañana temprano, antes del colegio de turno tarde. En las vacaciones de enero a marzo, cualquier franja funciona. Al agendar, usted ve las horas en el reloj de Arequipa.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber si su hijo avanza de verdad?',
    lede: 'Cinco etapas nuestras, con ejemplos de robótica y de datos, para que la familia sepa dónde está el niño y qué le toca después.',
    table: { caption: 'Cinco etapas de un niño que programa (nuestras)', head: ['Etapa', 'Edad en que suele llegar', 'Lo que ya logra'], rows: [
      ['1. Ordenar', '6 a 7 años', 'ordenar los pasos para que un robot de pantalla llegue a su meta'],
      ['2. Repetir', '7 a 8 años', 'usar un bucle para que el robot avance sin repetir el mismo bloque'],
      ['3. Decidir', '8 a 10 años', 'escribir reglas con "si" y "si no", como un robot que esquiva paredes'],
      ['4. Leer datos', '10 a 11 años', 'abrir un archivo real en Python y sacar el mínimo y el máximo'],
      ['5. Sospechar', '11 a 12 años', 'notar que una respuesta es rara, como un 0 que se repite, y encontrar la causa']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'La etapa 5 es la que más vale y la que menos se ve. Un niño que dice "esto no puede ser" ante un resultado está aprendiendo a pensar, no a copiar.',
      'Pregúntele qué hizo en la clase y qué falló. Si le cuenta un error y cómo lo arregló, va muy bien.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Si un número sale muy redondo, revíselo dos veces.',
      'Empiece la búsqueda del menor con algo que esté en la lista, nunca con un cero inventado.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos para la primaria arequipeña',
    lede: 'Todos se dictan en vivo y en inglés; el mentor no cambia de inicio a fin, y usted decide si en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Antes del código escrito', sub: 'De 6 a 12 años', courses: [
        { code: 'PRAR / I / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonar antes de programar', blurb: 'Rompecabezas y series lógicas, pensados para chicos de primero a cuarto grado.' },
        { code: 'PRAR / I / 02', slug: 'scratch-programming-complete-course', title: 'Scratch en tres meses', blurb: 'Una treintena de proyectos, de la primera animación a un juego completo.' },
        { code: 'PRAR / I / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Partir problemas en pasos, la base de cualquier robot, desde los siete.' }
      ] },
      { num: 'II', h3: 'Mundos y juegos', sub: 'De 7 a 17 años', courses: [
        { code: 'PRAR / II / 01', slug: 'minecraft-coding-for-kids-course', title: 'Programar en Minecraft', blurb: 'Bloques que se convierten en código, en cuatro meses.' },
        { code: 'PRAR / II / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Luau para crear niveles y reglas propias, a partir de los ocho.' },
        { code: 'PRAR / II / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Videojuegos con Godot', blurb: 'GDScript, 2D y 3D para chicos de diez años en adelante.' }
      ] },
      { num: 'III', h3: 'IA y proyectos', sub: 'De 8 a 14 años', courses: [
        { code: 'PRAR / III / 01', slug: 'ai-literacy-for-kids-course', title: 'Cómo piensa una IA', blurb: 'Lo que hay detrás de una máquina que aprende, sin magia.' },
        { code: 'PRAR / III / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Crear con ayuda de la IA', blurb: 'Doce semanas para usar la IA revisando cada paso que propone.' },
        { code: 'PRAR / III / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Rumbo a un hackatón', blurb: 'Idear, construir y presentar un proyecto propio en equipo.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo funcionan las clases en vivo para un niño de Arequipa?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después del colegio', l: 'Cuando el niño ya almorzó y terminó lo urgente de las tareas.' },
      { time: 'Antes del turno tarde', l: 'Una clase temprana, con la cabeza fresca.' },
      { time: 'Horario propio', l: 'En clases individuales, la hora la fija usted.' }
    ],
    cells: [
      { h3: 'Un mentor estable', p: 'La misma persona de principio a fin, que conoce cómo razona su hijo.' },
      { h3: 'Código en pantalla', p: 'El mentor ve en vivo lo que el niño escribe y le ayuda a encontrar el error.' },
      { h3: 'Datos reales', p: 'Sensores, mapas y listas de verdad, no ejercicios de relleno.' },
      { h3: 'Inglés con calma', p: 'Frases cortas, repetición y tiempo para responder.' },
      { h3: 'Informe breve', p: 'Unas líneas para la familia sobre lo que se practicó.' },
      { h3: 'Dos formatos', p: 'Compartiendo clase con quince a veinte chicos de su edad, o solo con el mentor.' }
    ]
  },

  projectsH2: 'Lo que llegan a construir nuestros alumnos',
  projectsLede: 'Los niños que siguen programando terminan publicando herramientas reales. Abajo hay algunas; la galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de Google de familias y alumnos, sin editar y en el inglés en que fueron escritas.',

  fees: {
    h2: 'Precios para familias de Arequipa',
    lede: 'Verá la mensualidad expresada en dólares estadounidenses, y el cobro se hace con tarjeta. La conversión a su moneda la hace su banco, así que el monto final puede variar ligeramente según el cambio de ese día.',
    free: ['Una clase de prueba sin costo', 'Un mentor que observa por dónde conviene empezar', 'Sin tarjeta ni compromiso'],
    group: ['Un grupo de quince a veinte chicos de edad cercana', 'El mismo mentor durante todo el curso', 'Dos sesiones en vivo cada semana', 'Pago mensual, sin contrato de permanencia'],
    one: ['Su hijo y el mentor, sin nadie más', 'Temas y ritmo según lo que necesite', 'Día y hora que usted fije']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Dudas frecuentes de familias arequipeñas',
    items: [
      { q: '¿Las clases son en español?', a: 'No, y para muchas familias de Arequipa eso es un punto a favor: su hijo programa y practica el inglés hablado en la misma clase, en vivo, con un mentor que le habla despacio y le deja tiempo para responder. Lima, según el EF EPI 2025, ya está en la banda alta de inglés con 555 puntos; Arequipa, con 512, tiene margen para crecer, y una clase hablada es buena manera de hacerlo.' },
      { q: '¿Robótica o programación para un niño de Arequipa?', a: 'Para empezar, programación: es lo que decide qué hace el robot y no obliga a comprar nada. Nosotros no usamos kits. Si su hijo ya va a un taller de robótica, nuestras clases le ayudan a programar su robot con más soltura.' },
      { q: '¿Desde qué edad pueden empezar?', a: 'Desde los 6 años con bloques y Scratch. Entre los 9 y 10 años la mayoría pasa a Python escrito, que es cuando pueden hacer proyectos como el de la estación del SENAMHI.' },
      { q: '¿Cuántos niños de 6 a 11 años hay en la provincia de Arequipa?', a: 'Según los Censos Nacionales 2025 del INEI, 112,339 personas censadas en la provincia de Arequipa tenían entre 6 y 11 años, sobre 1,321,693 censados. Es el 8.5 %, según nuestro cálculo.' },
      { q: '¿Qué hace un niño en el proyecto del SENAMHI?', a: 'Lee en Python las temperaturas horarias de la estación San José de Uzuña (Polobaya) en 2023 y busca la hora más fría de cada mes. La primera versión dice 0 grados en enero porque empieza su búsqueda en 0; al corregirlo aparece el valor real, 1.3 grados.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 8:00 a. m. de Arequipa son las 6:30 p. m. en la India, donde vive el mentor.' },
      { q: '¿Qué equipo necesita mi hijo?', a: 'Cualquier laptop o PC que tenga cámara y micrófono, más un internet que no se caiga. Si además tiene audífonos, entenderá con más claridad al mentor. Con el celular solo no se puede escribir código cómodamente.' },
      { q: '¿Las clases sirven como nota del colegio?', a: 'No. Somos independientes del MINEDU, de la UGEL y de los colegios de Arequipa, y no ponemos calificaciones. Al final de cada curso entregamos únicamente nuestro certificado de finalización.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares estadounidenses; su banco hace el cambio a su moneda. La clase de prueba es gratuita y no pide ningún dato de la tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Siga leyendo',
    h2: 'Más páginas para familias de Arequipa',
    lede: 'Algunas en castellano y otras en inglés, para profundizar.',
    items: [
      { href: '/coding-classes-in-arequipa-peru', label: 'Coding classes in Arequipa', p: 'La página de Arequipa en inglés, para todas las edades: ONEM, OPI y un proyecto con el inventario turístico regional.' },
      { href: '/online-coding-and-ai-classes-arequipa-region-peru', label: 'Arequipa region', p: 'Para familias de Camaná, Caylloma, Islay y el resto de provincias de la región.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'La guía general: colegio, edades y cómo suena una clase en inglés para un niño.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra forma de enseñar, paso a paso, en una clase en vivo.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima que pide cada herramienta de IA, explicada para padres.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo, por edades.' }
    ]
  },

  start: {
    h2: 'Reserve la clase de prueba desde Arequipa',
    lede: 'En la sesión de prueba, el mentor recibe a su hijo con frases simples en inglés, le plantea un reto pequeño, quizá un robot de pantalla que debe llegar a una meta, y observa cómo piensa. Con eso le recomendamos curso y formato, sin ningún compromiso.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cuenta cómo trabajamos y <a class="ag-inline-link" href="/courses">All courses</a> reúne cada programa (las dos páginas están en inglés).',
    note: 'Cada clase es en vivo, por internet y en inglés, con un mentor que vive en la India. Por WhatsApp nos puede escribir en castellano sin problema.',
    formNote: 'Gratuita, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/maths-through-coding', label: 'Matemáticas con código' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Arequipa y Perú', links: [
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa, en inglés' },
        { href: '/online-coding-and-ai-classes-arequipa-region-peru', label: 'Región Arequipa' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'El mínimo empieza con un dato real, no con un cero'
  },

  personalityCss: `
.ag-root.ag-prar .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-prar .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-prar .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-prar .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prar .ag-table caption { text-align: left; }
`,

  dossier: {
    curriculumAuthority: 'INEI: Censos Nacionales 2025 indicadores demográficos for Arequipa (cuadros 1 and 3), Perfil Sociodemográfico 2017 Cuadro N° 1.9, TIC II trimestre 2026; MINEDU: ENLA 2025 note, CNEB competency 28, DITE robotics paper; EF EPI 2025 Peru page; tzdata and INACAL for time; SENAMHI international-exchange weather stations dataset (ODC-By) with its data dictionary. Comparisons, stages and the sensor lesson are our own.',
    localProject: 'Did it freeze in the province of Arequipa? An original Python lesson for children of 10 to 12 on the SENAMHI hourly file (ODC-By), station San José de Uzuña, Polobaya, 3,269 m: version 1 starts each month at 0 and prints 2023 month 01 coldest: 0 and 2023 month 04 coldest: 0; version 2 starts from the first reading, counts 65 empty readings and prints January 1.3 to 20.1 (swing 18.8), April 0.1 to 20.0, July -1.7 to 21.7, October -0.3 to 22.5. Lesson family: the starting value of a running minimum, plus counting blanks.',
    requiredMentions: ['2023 month 01 coldest: 0', 'Empty readings skipped: 65', '2023 month 01 | coldest: 1.3 | warmest: 20.1 | swing: 18.8', 'San José de Uzuña', 'censados de 6 a 11 años', 'si la temperatura baja de 2 grados, cerrar la ventana', 'el cerebro de cualquier robot, que es su programa', 'el programa "inventó" una helada que no pasó', 'El mínimo empieza con un dato real, no con un cero', 'Lima 555 Cusco 520 Trujillo 519 Arequipa 512'],
    sources: [
      { claim: 'Arequipa 2025: department 1,814,554 and province 1,382,600 total (Cuadro 1); province censada 1,321,693 with 112,339 aged 6 to 11 (Cuadro 3); district 56,157.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/04/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Arequipa city 806,782 in 2007 and 1,008,290 in 2017, growth 25.0% (Cuadro N° 1.9).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: 'II trimestre 2026: internet in 66.2% and a computer in 41.3% of resto urbano homes.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'ENLA 2025: Moquegua, Tacna and Arequipa continue to lead learning results.', url: 'https://www.gob.pe/institucion/minedu/noticias/1390772-enla-2025-se-mantienen-avances-en-lectura-y-matematica-con-mejoras-en-las-zonas-rurales' },
      { claim: 'Robotics in MINEDU since 1996 (Infoescuela); LEGO WeDo kits 2009 and 2010.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Competency 28 is transversal in the CNEB.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 city scores, Arequipa 512, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'SENAMHI hourly weather stations, ODC-By; station San José de Uzuña in Polobaya, Arequipa.', url: 'https://www.datosabiertos.gob.pe/dataset/variables-meteorologicas-de-las-estaciones-autom%C3%A1ticas-de-intercambio-internacional-servicio' },
      { claim: 'Peru UTC-5 with no DST since 1994.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only, said in the capsule and an FAQ.',
      'A local hour of day for the SENAMHI readings: the dictionary does not state the time zone of HORA, so the lesson works by month only.',
      'Frost, climate-risk or disaster claims for Arequipa: not made; the lesson reads ordinary monthly minimums and maximums.',
      'Robot kits, hardware or a robotics academy partnership: none; we teach programming only.',
      'Using ENLA 2025 to place a child: refused; the mentor places each child in the free class.',
      'A 2025 population for Arequipa city: not published by INEI; the 2017 figure keeps its year and is never added to 2025 rows.',
      'Soles, competitor prices or typed fees: refused; fees render from the template in USD.'
    ]
  }
};

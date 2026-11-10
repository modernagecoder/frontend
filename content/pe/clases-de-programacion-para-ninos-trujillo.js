// SHIP: market (es city door) | Trujillo kids 6 to 12: census, the 2026 school calendar, Chan Chan museum visits | compare like with like: zip() pairs months and stops at the shorter list
'use strict';
// Clases de programación para niños en Trujillo (ag- Spanish city door, Peru cluster row PE130, P6, hubGroup cities;
// alloc: code pnt, accent #812A3B). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english"; owner 2026-11-08: timing flexible, any time. Formal "usted". Fees only through the template (USD anchors).
// Angle: the Trujillo parent of a child of 6 to 12 (KEYWORDS.md section 4: Trujillo ranks third, 70 place suggestions,
// 19 coding). Spine: how many primaria-age children the province has (INEI 2025 Cuadro 3); how a class fits the 2026
// school year (RM 501-2025-MINEDU calendar, checked by eye); academy across town or class at home; English in Trujillo
// (EF EPI 2025, 519); one original project on Ministerio de Cultura visitor counts for the Museo de Sitio de Chan Chan;
// robotics; clock. Different spine, dataset and lesson from online-coding-and-ai-classes-la-libertad-region-peru (artisan
// register, count vs rate) and from the English Trujillo city page being written (Hidrandina electricity data).
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-trujillo/
// and the research folders named; quotes string-matched in the raw text):
//  - INEI, Censos Nacionales 2025, Indicadores demográficos, La Libertad workbook (tabulados/13, data/ind_13.xlsx):
//    Cuadro 1 "LA LIBERTAD 2056445 ..." and "PROVINCIA TRUJILLO 1090001 ..."; district TRUJILLO 307,542 (places.tsv);
//    Cuadro 3 (censada by age) "PROVINCIA TRUJILLO 1055176 74130 101561 107380 ..." (Total, De 0 a 5, De 6 a 11, De 12 a 17).
//  - INEI Lib1539, Perfil Sociodemográfico 2017, Cuadro N° 1.9 (image): "La Libertad Trujillo 766 082 919 899 153 817 20.1 1.8".
//  - RM 501-2025-MINEDU, Tabla 1 "Distribución y fechas para la calendarización 2026" (signed page 7, checked by eye in the
//    image src-pages/clases-de-programacion-para-ninos-online-peru/rm501-page11-checked-by-eye.png): "Del 16 marzo al 15 de
//    mayo", "Del 18 al 22 de mayo", "Del 25 mayo al 24 de julio", "Del 27 julio a 7 de agosto", "Del 10 agosto al 9 de
//    octubre", "Del 12 al 16 de octubre", "Del 19 octubre a 18 de diciembre"; "treinta y seis (36) semanas lectivas";
//    FACTS 25: DRE/UGEL "tienen la potestad de definir una distribución de semanas lectivas y de gestión distinta a la sugerida".
//  - INEI, TIC II trimestre 2026: resto urbano internet 66,2%, computer 41,3%.
//  - GRE La Libertad (FACTS 109): 177,797 secundaria students from 936 schools in the ONEM 2026 school stage.
//  - EF EPI 2025 Peru page (ef_peru.raw): "Lima 555 Cusco 520 Trujillo 519 Arequipa 512"; MARKET.md: region La Libertad 513.
//  - MINEDU DITE robotics paper (FACTS 52): robotics as a means, not the goal (paraphrased on the page).
//  - Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; India UTC+5:30, 10 h 30 min ahead.
//  - Data: Ministerio de Cultura (MINCUL), "Visitas a museos", Plataforma Nacional de Datos Abiertos,
//    https://www.datosabiertos.gob.pe/dataset/visitas-museos, licence "Open Data Commons Attribution License" (page and
//    package_show odc-by), modified 2026-09-15, source system SISMUS (data dictionary). File "base de datos museos_7.csv"
//    saved as data/museos.csv, 2,909,588 bytes, sha256 d4b38777fc02c75a..., Latin-1, semicolon, FECHA_CORTE 20261028.
//    Dictionary: NIN_* columns "NIÑO PAGANTE", "NIÑO NO PAGANTE", "NIÑO BOLETO ESPECIAL PAGANTE/NO PAGANTE". Museum
//    'Museo de Sitio de Chan Chan' (NOM_DPTO La Libertad): 2025 has months 1 to 12, 2026 has months 1 to 9.
//    Children per month (four NIN columns summed by us): 2025 943 1091 311 567 748 1513 3252 2731 2879 1467 1272 542;
//    2026 1129 1412 317 477 443 677 3452 1757 1615.
// Our own calculations (python3 -I): 101,561 / 1,055,176 = 9.6% of those counted in the province are 6 to 11.
// Our own example (data/v1.py, data/v2.py, python3 -I on the downloaded file), exact output:
//  v1: Children in 2025: 17316 / Children in 2026: 11279 / Change: -35 %
//  v2: Months in 2025: 12 | months in 2026: 9 / Months we can compare: 9 / Same months, 2025: 14035 | 2026: 11279 /
//      Change: -20 % / Month 1 had more children in 2026: 943 -> 1129 / Month 2 ...: 1091 -> 1412 / Month 3 ...: 311 -> 317 /
//      Month 7 had more children in 2026: 3252 -> 3452
// Lesson family: compare like with like; zip() pairs two lists item by item and silently stops at the shorter one.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const FUNC = [
  'import csv',
  '',
  "NINOS = ['NIN_BOLESPPAGANTES', 'NIN_PAGANTES', 'NIN_BOLESPNOPAGANTES', 'NIN_NOPAGANTES']",
  '',
  'def ninos_por_mes(anio):',
  '    meses = {}',
  "    with open('museos.csv', encoding='latin-1') as f:",
  "        for fila in csv.DictReader(f, delimiter=';'):",
  "            if fila['NOM_MUSEO'] == 'Museo de Sitio de Chan Chan' and fila['ANIO'] == anio:",
  "                mes = int(fila['COD_MES'])",
  '                n = sum(int(fila[c]) for c in NINOS)',
  '                meses[mes] = meses.get(mes, 0) + n',
  '    return [meses[m] for m in sorted(meses)]',
  '',
  "a2025 = ninos_por_mes('2025')",
  "a2026 = ninos_por_mes('2026')"
];

const V1 = FUNC.concat([
  "print('Children in 2025:', sum(a2025))",
  "print('Children in 2026:', sum(a2026))",
  'cambio = (sum(a2026) - sum(a2025)) * 100 / sum(a2025)',
  "print('Change:', round(cambio), '%')"
]).join('\n');

const OUT1 = [
  'Children in 2025: 17316',
  'Children in 2026: 11279',
  'Change: -35 %'
].join('\n');

const V2 = FUNC.concat([
  "print('Months in 2025:', len(a2025), '| months in 2026:', len(a2026))",
  '',
  'pares = list(zip(a2025, a2026))',
  "print('Months we can compare:', len(pares))",
  'antes = sum(x for x, y in pares)',
  'ahora = sum(y for x, y in pares)',
  "print('Same months, 2025:', antes, '| 2026:', ahora)",
  "print('Change:', round((ahora - antes) * 100 / antes), '%')",
  'for mes, (x, y) in enumerate(pares, start=1):',
  '    if y > x:',
  "        print('Month', mes, 'had more children in 2026:', x, '->', y)"
]).join('\n');

const OUT2 = [
  'Months in 2025: 12 | months in 2026: 9',
  'Months we can compare: 9',
  'Same months, 2025: 14035 | 2026: 11279',
  'Change: -20 %',
  'Month 1 had more children in 2026: 943 -> 1129',
  'Month 2 had more children in 2026: 1091 -> 1412',
  'Month 3 had more children in 2026: 311 -> 317',
  'Month 7 had more children in 2026: 3252 -> 3452'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Trujillo: programación para niños' },
  slug: 'clases-de-programacion-para-ninos-trujillo',
  code: 'pnt',
  accent: '#812A3B',
  accentRationale: 'Clases de programación para niños en Trujillo: the allocated garnet #812A3B (alloc.tsv), a deep adobe red that nods to the walls of Chan Chan on the cream paper; above 4.5 contrast on #FBF8F2 and both tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Trujillo',
  title: 'Clases de programación para niños en Trujillo, en inglés',
  description: 'Clases de programación para niños de 6 a 12 años en Trujillo, en vivo y en inglés por internet: Scratch, juegos y Python, en grupo o individuales, a toda hora.',
  ogDescription: 'Programación en vivo y en inglés para niños trujillanos de primaria: el censo 2025, cómo encaja con el año escolar, academia o casa, y un proyecto con las visitas de niños al museo de Chan Chan.',
  twitterDescription: 'Clases de programación para niños de Trujillo, en vivo y en inglés, sin salir de casa y en el horario que la familia decida.',
  pageName: 'Clases de programación para niños en Trujillo',
  webPageDescription: 'Guía para familias de Trujillo sobre clases de programación para niños de 6 a 12 años dictadas en vivo, en línea y en inglés: población infantil de la provincia según los Censos Nacionales 2025 del INEI, el calendario escolar 2026 de la RM 501-2025-MINEDU, el inglés de Trujillo en el EF EPI 2025 y un proyecto propio en Python con las visitas de niños al Museo de Sitio de Chan Chan registradas por el Ministerio de Cultura (licencia ODC-By).',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Trujillo y La Libertad, dictadas solo en inglés: bloques, videojuegos, Python con datos reales e IA, en una clase grupal o en clases individuales, en el horario que la familia elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Trujillo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#trujillo', label: 'Trujillo en cifras' },
    { href: '#calendario', label: 'Año escolar' },
    { href: '#chanchan', label: 'Proyecto Chan Chan' },
    { href: '#ingles', label: 'Inglés' },
    { href: '#horas', label: 'Horas' }
  ],
  eyebrow: 'Trujillo &middot; Programación para niños &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en Trujillo',
  lede: 'Las familias trujillanas que escriben buscando programación para sus hijos suelen tener dos preguntas: dónde encaja una clase más en un año escolar ya cargado, y si vale la pena cuando la clase es en inglés. Aquí las respondemos con el calendario oficial de 2026, con las cifras del censo del INEI para la provincia y con un ejercicio real de Python que usa las visitas de niños al museo de sitio de Chan Chan.',
  secondaryCta: { href: '#chanchan', label: 'Ver el proyecto de Chan Chan' },
  wa: 'Hola Modern Age Coders, escribimos desde Trujillo. Buscamos clases de programación en inglés para nuestro hijo o hija. ¿Cómo agendamos la clase gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 alumnos en varios países &middot; cada niño con su mentor de siempre',
  spec: [
    ['Edades', 'De 6 a 12 años, primaria completa'],
    ['Zona', 'Trujillo, sus distritos y toda La Libertad'],
    ['Contenidos', 'Bloques, videojuegos, Python e IA'],
    ['Formato', 'Grupo de quince a veinte niños, o clases individuales'],
    ['Idioma', 'Inglés en todas las clases, claro y pausado'],
    ['Prueba', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Modern Age Coders enseña programación a niños trujillanos de 6 a 12 años con clases en vivo por internet y siempre en inglés, así que su hijo aprende desde casa, sea en el Centro, en Víctor Larco, en La Esperanza o en cualquier otro distrito. Los de seis a ocho crean con bloques y Scratch; los mayores pasan a videojuegos, Python con datos reales y primeros proyectos de IA. Un mentor radicado en la India dirige cada sesión por videollamada y adapta su inglés al niño. Hay clases grupales e individuales, en el horario que usted elija, y la primera es gratis.',

  picks: {
    eyebrow: 'Para empezar en Trujillo',
    h2: 'Tres cursos que eligen las familias trujillanas para empezar',
    lede: 'Uno para los más pequeños, uno para el niño que vive pegado a los videojuegos y uno para el que ya quiere escribir código de verdad.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNT / 01', title: 'Programar con bloques, de cero', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para chicos de seis a doce, en grupos por edad, de diez a doce meses. Historias, juegos y apps en Scratch, con un primer contacto con la IA hacia el final.' },
      { course: 'game-development-masterclass-for-kids', code: 'PNT / 02', title: 'Crear videojuegos', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'Desde los ocho años, de seis a ocho meses. Scratch, Roblox y Minecraft, uno tras otro, para que el niño pase de jugar a entender cómo está hecho un juego.' },
      { course: 'python-ai-kids-masterclass', code: 'PNT / 03', title: 'Python e IA desde cero', alt: 'Imagen del curso de Python e IA para niños', note: 'Para quien ya cumplió nueve, de ocho a diez meses. Python escrito, juegos y proyectos con datos reales, como el del museo de Chan Chan que verá en esta página.' }
    ]
  },

  sections: [
    {
      id: 'trujillo',
      eyebrow: 'Trujillo en cifras',
      h2: '¿Qué tantos escolares de primaria viven en la provincia de Trujillo?',
      lede: 'Más de cien mil. Los Censos Nacionales 2025 del INEI registran en la provincia de Trujillo 101,561 personas censadas de seis a once años, la edad de la primaria.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Trujillo y La Libertad según el INEI: qué unidad mide cada fila y de qué censo sale', head: ['Unidad', 'Personas', 'Fuente y año'], rows: [
          ['Departamento de La Libertad, población total', '2,056,445', 'Censos Nacionales 2025'],
          ['Provincia de Trujillo, población total', '1,090,001', 'Censos Nacionales 2025'],
          ['Provincia de Trujillo, población censada', '1,055,176', 'Censos Nacionales 2025'],
          ['Provincia de Trujillo, censados de seis a once años', '101,561', 'Censos Nacionales 2025'],
          ['Distrito de Trujillo', '307,542', 'Censos Nacionales 2025'],
          ['Ciudad de Trujillo', '919,899', 'Censos Nacionales 2017']
        ] },
        { kind: 'source', html: 'Origen de los datos: INEI, cuadros 1 (población total, censada y omitida juntas) y 3 (población censada por grupo de edad) del tabulado de indicadores demográficos de La Libertad, Censos Nacionales 2025, con día de referencia 15 de septiembre de 2025; y, para la ciudad, la tabla de capitales (Cuadro N° 1.9) del perfil sociodemográfico que el INEI hizo con el censo de 2017. Las filas se superponen y no se pueden sumar.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que se lee en la tabla',
          left: [
            'Los censados de seis a once años son el 9.6 % de todos los censados de la provincia (cálculo nuestro con las cifras del cuadro 3: 101,561 entre 1,055,176).',
            'La ciudad, que el INEI mide como un conglomerado de varios distritos, tenía 766,082 habitantes en 2007 y 919,899 en 2017: creció 20.1 % en esa década, según el mismo Cuadro N° 1.9. El INEI aún no ha publicado la cifra de la ciudad para 2025.'
          ],
          rightH3: 'Por qué le importa a su familia',
          right: [
            'Una ciudad que se extiende de Huanchaco a Moche, con El Porvenir, Florencia de Mora y Alto Trujillo hacia las afueras, deja a muchos niños lejos de los locales céntricos de academias y talleres.',
            'La clase en vivo hace que esa distancia no cuente: su hijo se conecta desde la mesa de la casa y el mentor es el mismo para el niño de Laredo que para el de Víctor Larco.'
          ] }
      ]
    },
    {
      id: 'calendario',
      eyebrow: 'Año escolar',
      h2: '¿Cabe la programación en el año escolar de un niño trujillano?',
      lede: 'Mejor de lo que parece: dos clases a la semana, en los días y horas que usted escoja, y descansos aprovechables cuando el colegio para. El calendario del Ministerio de Educación para 2026 ayuda a planificar.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tramos del año escolar 2026 fijados por el MINEDU, con lunes de inicio y viernes de cierre', head: ['Tramo de 2026', 'Empieza', 'Termina', 'Semanas', '¿Hay colegio?'], rows: [
          ['Lectivo 1', 'lun. 16 mar.', 'vie. 15 may.', '9', 'Sí'],
          ['Gestión 2', 'lun. 18 may.', 'vie. 22 may.', '1', 'No para los alumnos'],
          ['Lectivo 2', 'lun. 25 may.', 'vie. 24 jul.', '9', 'Sí'],
          ['Gestión 3', 'lun. 27 jul.', 'vie. 7 ago.', '2', 'No para los alumnos'],
          ['Lectivo 3', 'lun. 10 ago.', 'vie. 9 oct.', '9', 'Sí'],
          ['Gestión 4', 'lun. 12 oct.', 'vie. 16 oct.', '1', 'No para los alumnos'],
          ['Lectivo 4', 'lun. 19 oct.', 'vie. 18 dic.', '9', 'Sí']
        ] },
        { kind: 'source', html: 'Tomado de la tabla de fechas de la RM 501-2025-MINEDU, que leímos en la página firmada del PDF del ministerio: el año escolar 2026 reúne "treinta y seis (36) semanas lectivas" en cuatro tramos de nueve, separados por semanas de gestión. Los días de la semana y la última columna son nuestros. La norma deja que cada DRE o UGEL ajuste la distribución, así que el colegio de su hijo puede moverse unos días.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Empiece cuando quiera.</strong> No hace falta esperar marzo: los grupos abren a lo largo del año y las clases individuales arrancan la semana que usted elija.',
          '<strong>Fije dos días que no choquen con el colegio.</strong> Para muchos niños de primaria funcionan bien dos tardes por semana, con un día de por medio para practicar.',
          '<strong>Use las semanas sin colegio.</strong> En las semanas de gestión, como la que empezó el lunes 18 de mayo de 2026, su hijo puede avanzar un proyecto propio sin la presión de las tareas.',
          '<strong>Aproveche el verano.</strong> Entre enero y marzo, antes del nuevo año escolar, muchas familias pasan la clase a la mañana.'
        ] },
        { kind: 'p', mt: true, html: 'Más adelante, cuando su hijo llegue a la secundaria, la programación se junta con otras metas. En La Libertad la olimpiada escolar de matemática convoca a muchísimos alumnos: según la Gerencia Regional de Educación, 177,797 escolares de secundaria de 936 colegios públicos participaron en la ONEM 2026, cuya primera etapa se rinde en el propio colegio. La lógica que se entrena programando en primaria es la misma que pide un buen problema de olimpiada.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Academia o casa',
      h2: '¿Academia en el centro de Trujillo o clases de programación desde casa?',
      lede: 'Para un niño de primaria, la clase en vivo desde casa suele ganar en lo práctico: sin traslado, con el horario que la familia decide y con un mentor que ve la pantalla de su hijo en todo momento.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que cuesta ir a una academia',
          left: [
            'Más que el precio, el tiempo: llevar al niño, esperarlo o volver por él, dos veces por semana. No damos cifras de minutos, porque dependen de cada distrito, pero cada familia trujillana sabe cuánto le toma cruzar la ciudad a la salida del colegio.',
            'Además, el horario lo pone la academia. Si coincide con el turno escolar o con otra actividad, la familia tiene que elegir.'
          ],
          rightH3: 'Lo que hace falta en casa',
          right: [
            'Una computadora con cámara y micrófono y un internet estable. El INEI midió entre abril y junio de 2026 que dos de cada tres hogares urbanos de provincias (66,2 %) tenían internet y que un 41,3 % contaba con alguna computadora.',
            'Un lugar tranquilo, idealmente siempre el mismo, y unos audífonos. Con eso, la clase funciona igual en el Centro que en Huanchaco.'
          ] },
        { kind: 'p', mt: true, html: 'Si está comparando opciones y quiere entender qué hace subir o bajar el costo de una clase para niños, la guía <a class="ag-inline-link" href="/cuanto-cuestan-clases-de-programacion-para-ninos-peru">cuánto cuestan las clases de programación para niños en Perú</a> lo explica sin dar precios de otras academias. Y para familias de Pacasmayo, Chepén, Otuzco o Ascope, la página de la <a class="ag-inline-link" href="/online-coding-and-ai-classes-la-libertad-region-peru">región La Libertad</a> (en inglés) cubre todo el departamento.' }
      ]
    },
    {
      id: 'chanchan',
      tint: 'tint',
      eyebrow: 'Proyecto trujillano',
      h2: '¿Llegaron menos niños a Chan Chan en 2026? Un proyecto de Python para comparar bien',
      lede: 'Este ejercicio es nuestro, para chicos de 10 a 12 años. Usa el conjunto "Visitas a museos" del Ministerio de Cultura, publicado en el portal datosabiertos.gob.pe con licencia Open Data Commons Attribution (ODC-By), que cuenta cada mes a los visitantes de los museos que administra el ministerio, entre ellos el Museo de Sitio de Chan Chan.',
      body: [
        { kind: 'p', html: 'El archivo separa a los visitantes por tipo: adultos, estudiantes, niños, militares y adultos mayores, pagantes y no pagantes, nacionales y extranjeros. Para la pregunta del niño sumamos las cuatro columnas de niños. Hay un detalle que no se ve a primera vista: el archivo se cortó el 28 de octubre de 2026, y para 2026 solo trae los meses de enero a septiembre.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Niños que visitaron el Museo de Sitio de Chan Chan, por mes (suma nuestra de las cuatro columnas de niños del archivo)', head: ['Mes', '2025', '2026'], rows: [
          ['Enero', '943', '1,129'],
          ['Febrero', '1,091', '1,412'],
          ['Marzo', '311', '317'],
          ['Abril', '567', '477'],
          ['Mayo', '748', '443'],
          ['Junio', '1,513', '677'],
          ['Julio', '3,252', '3,452'],
          ['Agosto', '2,731', '1,757'],
          ['Septiembre', '2,879', '1,615'],
          ['Octubre', '1,467', 'sin dato'],
          ['Noviembre', '1,272', 'sin dato'],
          ['Diciembre', '542', 'sin dato']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Cultura (MINCUL), "Visitas a museos", sistema SISMUS, en la Plataforma Nacional de Datos Abiertos; licencia Open Data Commons Attribution License; ficha modificada el 15 de septiembre de 2026 y fecha de corte del archivo 28 de octubre de 2026; descargado por nosotros el 10 de noviembre de 2026. Las columnas NIN_* corresponden a "NIÑO" según el diccionario de datos.' },
        { kind: 'code', label: 'Versión 1: sumar los dos años y comparar', lang: 'Python', code: V1, note: 'El mentor pregunta antes de correrlo: "Did more children visit in 2026 or in 2025?" Con la tabla a la vista, muchos chicos ya sospechan algo.' },
        { kind: 'code', label: 'Resultado de la versión 1', lang: 'Salida', code: OUT1, note: 'Copiada tal cual tras correrlo con python3 -I sobre el archivo descargado. No hay error de Python, pero se comparan doce meses contra nueve.' },
        { kind: 'p', mt: true, html: 'Una caída de 35 % suena dramática, pero es injusta: 2025 tiene octubre, noviembre y diciembre y 2026 todavía no. Es como comparar el puntaje de un partido terminado con el de uno que va por el segundo tiempo. La segunda versión empareja los meses con <code>zip()</code>, que toma el primero de cada lista, luego el segundo, y así hasta que una de las dos se acaba.' },
        { kind: 'code', label: 'Versión 2: comparar solo los meses que tienen los dos años', lang: 'Python', code: V2, note: 'Primero imprimimos cuántos meses tiene cada año. Así el niño ve el problema antes de calcular nada.' },
        { kind: 'code', label: 'Resultado de la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3 -I. Comparando de enero a septiembre, la baja es de 20 %, no de 35 %, y en cuatro meses 2026 incluso superó a 2025.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar antes de sumar.</strong> <code>len()</code> dice cuántos meses hay en cada lista. Doce contra nueve es la primera alarma.',
          '<strong>Saber qué hace zip().</strong> Empareja elemento por elemento y se detiene, sin avisar, en cuanto la lista más corta termina. Aquí eso nos conviene; en otro problema podría esconder datos.',
          '<strong>Mirar el detalle.</strong> Julio fue el mes con más niños en los dos años: 3,252 en 2025 y 3,452 en 2026. En 2026, el colegio paró para los alumnos justo al terminar ese mes.',
          '<strong>Contarlo en inglés.</strong> El niño explica su conclusión en una frase: "From January to September, about one fifth fewer children came in 2026, but July was busier."'
        ] },
        { kind: 'p', mt: true, html: 'El ejercicio no trata de museos, trata de una costumbre: antes de decir "subió" o "bajó", asegurarse de que se compara lo mismo con lo mismo. Es una idea que su hijo usará con notas del colegio, con resultados deportivos y, más adelante, con cualquier dato que le muestre una pantalla. Y no la aprende copiando una respuesta: la aprende cuando su propio programa le da un número que luego descubre que era engañoso.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés',
      h2: '¿Mi hijo de Trujillo podrá entender una clase de programación en inglés?',
      lede: 'Con un mentor que sabe enseñar a niños que están aprendiendo el idioma, sí. Trujillo obtuvo 519 puntos en el EF EPI 2025, igual que el promedio del Perú y dentro de la banda moderada.',
      body: [
        { kind: 'p', html: 'El índice EF EPI 2025, que EF Education First publica con los resultados de adultos que rinden su prueba, da a Trujillo 519 puntos, a Cusco 520, a Arequipa 512 y a Lima 555, la única ciudad peruana en la banda alta (desde 550). No es una nota de los niños, pero describe el ambiente: en Trujillo el inglés está presente, aunque no todos lo hablan con soltura.' },
        { kind: 'p', html: 'En la clase, eso se resuelve con método. El mentor usa frases cortas, repite con otras palabras, muestra en pantalla lo que dice y espera. Los niños empiezan entendiendo palabras sueltas del código, como <em>repeat</em>, <em>if</em> o <em>score</em>, y en pocas semanas ya responden con frases. Si su hijo dice algo en castellano, el mentor lo recoge y le enseña cómo decirlo en inglés.' },
        { kind: 'p', html: 'Para las familias, el resultado es doble: su hijo programa y, al mismo tiempo, se acostumbra a escuchar y hablar inglés con un propósito. Si desea más detalle sobre el día a día de un alumno de primaria con un mentor angloparlante, la <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">guía de programación en inglés para primaria</a> recorre grado por grado lo que vive un niño en esas clases.' }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica',
      h2: '¿Robótica para niños en Trujillo o programación primero?',
      lede: 'Programación primero. La robótica es programación aplicada a un aparato: sin saber dar instrucciones, el robot solo repite lo que trae de fábrica.',
      body: [
        { kind: 'p', html: 'El Ministerio de Educación, en su documento sobre robótica educativa, la describe como un medio para aprender ciencia, tecnología y matemática, no como un fin. Esa es también nuestra forma de verla: lo valioso de un taller de robótica es la lógica de ordenar, repetir y decidir, y esa lógica se puede aprender a fondo sin piezas.' },
        { kind: 'p', html: 'Nosotros enseñamos solo programación, en Scratch y en Python, y no vendemos kits. Si más adelante su hijo quiere armar robots, llegará sabiendo lo más difícil: cómo pensar el programa que los mueve.' }
      ]
    },
    {
      id: 'horas',
      eyebrow: 'Horario',
      h2: '¿En qué horario podría conectarse un niño desde Trujillo?',
      lede: 'A la hora que usted escoja. El mentor trabaja desde la India, con 10 horas y 30 minutos más que Trujillo todo el año; la tabla muestra algunas conversiones de ejemplo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cinco horas trujillanas pasadas al reloj de la India (conversiones de ejemplo; el horario real lo pone usted)', head: ['Reloj de Trujillo', 'Reloj del mentor', 'Fecha allá'], rows: [
          ['7:15 a. m.', '5:45 p. m.', 'la misma fecha'],
          ['8:45 a. m.', '7:15 p. m.', 'la misma fecha'],
          ['11:15 a. m.', '9:45 p. m.', 'la misma fecha'],
          ['2:45 p. m.', '1:15 a. m.', 'la fecha siguiente'],
          ['5:45 p. m.', '4:15 a. m.', 'la fecha siguiente']
        ] },
        { kind: 'source', html: 'Perú: UTC-5 durante todo el año, sin cambio de hora desde 1994 (tzdata, zona America/Lima, y hora oficial del INACAL). India: UTC+5:30, sin cambio de hora. La diferencia de 10 horas y 30 minutos se mantiene en cualquier mes.' },
        { kind: 'p', mt: true, html: 'Al agendar la clase gratis, usted elige el horario en la hora de Trujillo. Los niños con colegio en la mañana suelen preferir la tarde; los del turno tarde, la mañana temprano. En vacaciones, cualquier momento sirve.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Qué va logrando un niño trujillano que programa?',
    lede: 'Cinco pasos propios para ubicar a cada niño y explicarle a la familia en qué va.',
    table: { caption: 'Cinco pasos de programación para niños (nuestros)', head: ['Paso', 'Edad aproximada', 'Lo que su hijo hace'], rows: [
      ['1. Secuencias', '6 a 7 años', 'mueve un personaje por un camino con bloques en el orden correcto'],
      ['2. Bucles', '7 a 9 años', 'repite acciones sin copiar bloques y explica qué se repite'],
      ['3. Reglas', '8 a 10 años', 'hace que su juego cambie según los puntos o el tiempo'],
      ['4. Datos', '9 a 11 años', 'guarda números en listas de Python y los suma o compara'],
      ['5. Comparar bien', '10 a 12 años', 'revisa que dos listas tengan el mismo largo antes de sacar una conclusión']
    ] },
    left: { h3: 'Para la familia', ps: [
      'El paso 5 no tiene que ver con la edad, sino con la costumbre de revisar. Muchos adultos todavía no lo dan.',
      'Pídale a su hijo que le cuente un error que tuvo en la semana. Si sabe explicarlo, aprendió algo importante.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Antes de comparar, cuente cuántos datos tiene cada lado.',
      'Si un resultado le sorprende, revise primero si la pregunta era justa.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para niños de Trujillo',
    lede: 'Cada curso es en vivo y en inglés, con un mentor que acompaña al niño de inicio a fin, en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Bases', sub: 'De 5 a 12 años', courses: [
        { code: 'PNT / BASE / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Lógica para pequeños', blurb: 'Patrones y acertijos antes de la computadora, para los primeros grados.' },
        { code: 'PNT / BASE / 02', slug: 'scratch-programming-complete-course', title: 'Scratch intensivo', blurb: 'Más de treinta proyectos en tres o cuatro meses.' },
        { code: 'PNT / BASE / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental con sentido', blurb: 'Sentido numérico, no trucos, como base para programar.' }
      ] },
      { num: 'II', h3: 'Juegos y apps', sub: 'De 7 a 14 años', courses: [
        { code: 'PNT / JUEGO / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft y código', blurb: 'Del bloque al código dentro del juego favorito de muchos.' },
        { code: 'PNT / JUEGO / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox paso a paso', blurb: 'Un juego propio en Roblox Studio, escrito en Luau.' },
        { code: 'PNT / JUEGO / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps hechas por niños', blurb: 'Aplicaciones móviles armadas con bloques, que se prueban en el celular.' }
      ] },
      { num: 'III', h3: 'Código escrito', sub: 'De 9 a 15 años', courses: [
        { code: 'PNT / CODIGO / 01', slug: 'kids-ai-web-development-course', title: 'Webs para chicos', blurb: 'HTML y CSS hasta publicar una página propia.' },
        { code: 'PNT / CODIGO / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ con retos', blurb: 'Un lenguaje serio, aprendido con juegos y acertijos.' },
        { code: 'PNT / CODIGO / 03', slug: 'maths-through-coding', title: 'Matemática programada', blurb: 'Python para entender fracciones, gráficos y patrones.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es la semana de un niño de Trujillo con clases en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Dos tardes por semana', l: 'Con un día libre en medio para practicar lo nuevo.' },
      { time: 'Mañana temprano', l: 'Para quien estudia en el turno de la tarde.' },
      { time: 'Individual', l: 'El horario lo fija la familia y se puede mover si hace falta.' }
    ],
    cells: [
      { h3: 'Un mentor fijo', p: 'No cambia durante el curso, así que aprende cómo razona su hijo.' },
      { h3: 'Pantalla compartida', p: 'El mentor sigue el código del niño y lo guía sin escribir por él.' },
      { h3: 'Proyectos con datos', p: 'Listas, museos, juegos: cada semana sale algo que enseñar a la familia.' },
      { h3: 'Inglés claro', p: 'Frases cortas, repetición y paciencia para las respuestas.' },
      { h3: 'Aviso a la familia', p: 'Unas líneas después de clase sobre lo trabajado.' },
      { h3: 'En grupo o a solas', p: 'Junto a quince o veinte compañeros de la misma edad, o en sesiones individuales.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos que siguieron programando',
  projectsLede: 'Así se ve el trabajo de estudiantes mayores que empezaron como su hijo. En <a class="ag-inline-link" href="/student-labs">Student labs</a> hay muchos más (página en inglés).',
  reviewsLede: 'Reseñas de Google de familias y estudiantes, tal como las escribieron, en inglés.',

  fees: {
    h2: 'Precios para familias de Trujillo',
    lede: 'Las tarifas mensuales figuran en dólares estadounidenses y se pagan con tarjeta. Su banco convierte el cargo a su moneda, de modo que el importe final puede variar un poco según la cotización del día del cobro.',
    free: ['Primera clase gratis', 'Un mentor que evalúa por dónde empezar', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte niños de edades cercanas', 'El mismo mentor durante el curso', 'Dos clases en vivo a la semana', 'Pago mensual, sin permanencia mínima'],
    one: ['Su hijo solo con el mentor', 'Ritmo y contenidos a su medida', 'El horario que usted decida']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Preguntas de familias de Trujillo',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Son en vivo, por internet y únicamente en inglés, y ahí está buena parte de su valor: su hijo aprende a programar y gana práctica oral de inglés en la misma hora, con un mentor que habla claro y lo espera. Como referencia, el EF EPI 2025 da 555 puntos a Lima, lo que la deja en la banda alta, y 519 a Trujillo.' },
      { q: '¿Hay clases de programación para niños en Trujillo sin ir a un local?', a: 'Sí. Nuestras clases son por videollamada, en vivo, con un mentor real. Su hijo se conecta desde casa, en cualquier distrito de Trujillo o de La Libertad.' },
      { q: '¿Cuántos niños de primaria hay en Trujillo?', a: 'Los Censos Nacionales 2025 del INEI registran en la provincia de Trujillo 101,561 personas censadas de 6 a 11 años, sobre 1,055,176 censados en total. Es el 9.6 %, según nuestro cálculo.' },
      { q: '¿Cuándo conviene empezar en el año escolar?', a: 'En cualquier momento. Las semanas sin clases del calendario 2026, como las dos semanas que empezaron el lunes 27 de julio según la RM 501-2025-MINEDU, son buenas para arrancar o terminar un proyecto, y el verano de enero a marzo también.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Una clase a las 8:45 a. m. de Trujillo cae a las 7:15 p. m. del mentor.' },
      { q: '¿Qué aprende un niño con el proyecto de Chan Chan?', a: 'A comparar bien. Con los datos del Ministerio de Cultura, su primer programa dice que en 2026 llegaron 35 % menos niños al museo de sitio; al emparejar solo los meses que tienen los dos años, la baja es de 20 %, y julio de 2026 superó a julio de 2025.' },
      { q: '¿Desde qué edad se puede empezar?', a: 'A los seis ya puede empezar, armando bloques. A los 8 muchos niños ya hacen videojuegos completos y desde los 9 o 10 pasan a Python escrito.' },
      { q: '¿Enseñan robótica con kits?', a: 'No. Enseñamos programación, la parte que decide qué hace un robot, y no vendemos ni enviamos kits.' },
      { q: '¿Cómo es el pago?', a: 'Se paga con tarjeta y en dólares estadounidenses, y es el banco el que convierte el monto. La primera clase es gratis y no pide datos de pago.' },
      { q: '¿Tienen relación con algún colegio o con la UGEL?', a: 'No. No estamos vinculados al MINEDU, a la Gerencia Regional de Educación ni a ningún colegio, y no damos notas. Al terminar un curso entregamos solo nuestro certificado de finalización.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras páginas para familias trujillanas',
    lede: 'Lecturas que completan esta guía; varias están escritas en inglés y son útiles igual.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página para todo el Perú, con cursos por edad.' },
      { href: '/online-coding-and-ai-classes-la-libertad-region-peru', label: 'La Libertad region', p: 'Para las provincias de la región, de la costa a la sierra.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una clase en vivo contada desde dentro.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Proyectos de IA que un niño puede hacer sin abrir cuentas.' },
      { href: '/student-labs', label: 'Student labs', p: 'Trabajos publicados por nuestros estudiantes.' },
      { href: '/courses', label: 'All courses', p: 'Cada curso que ofrecemos, por edades.' }
    ]
  },

  start: {
    h2: 'Agende la clase gratis desde Trujillo',
    lede: 'En la primera clase el mentor se presenta en inglés sencillo, le propone a su hijo un reto corto con bloques o con Python y mira cómo lo encara. Después le contamos qué curso y qué formato le recomendamos, sin compromiso.',
    readFirst: 'Si prefiere informarse primero, en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> contamos nuestro método y en <a class="ag-inline-link" href="/courses">All courses</a> está la lista de programas, ambas en inglés.',
    note: 'Enseñamos siempre en vivo y en inglés, desde la India. Para coordinar por WhatsApp, puede usar el castellano.',
    formNote: 'Sin pago, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programar con bloques' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Crear videojuegos' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Trujillo y el Perú', links: [
        { href: '/online-coding-and-ai-classes-la-libertad-region-peru', label: 'Región La Libertad' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Nueve meses contra nueve meses'
  },

  personalityCss: `
.ag-root.ag-pnt .ag-hero h1 { letter-spacing: -0.012em; max-width: 21ch; }
.ag-root.ag-pnt .ag-capsule { border-left-width: 5px; }
.ag-root.ag-pnt .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pnt .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnt .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI: Censos Nacionales 2025 indicadores demográficos for La Libertad (cuadros 1 and 3), Perfil Sociodemográfico 2017 Cuadro N° 1.9, TIC II trimestre 2026; MINEDU: RM 501-2025-MINEDU Tabla 1 (checked by eye), DITE robotics paper; GRE La Libertad ONEM 2026 note; EF EPI 2025 Peru page; tzdata and INACAL for time; Ministerio de Cultura museum visits dataset (SISMUS, ODC-By). The third calendar column, the steps and the Chan Chan lesson are our own.',
    localProject: 'Did fewer children visit Chan Chan in 2026? An original Python lesson for children of 10 to 12 on the Ministerio de Cultura museum-visits file (ODC-By): version 1 compares whole years and prints Children in 2025: 17316, Children in 2026: 11279, Change: -35 %, but 2026 only has nine months; version 2 prints the months per year (12 and 9), pairs them with zip() and prints Same months, 2025: 14035 | 2026: 11279, Change: -20 %, and four months where 2026 was higher, July 3252 -> 3452. Lesson family: compare like with like; zip() stops at the shorter list.',
    requiredMentions: ['Children in 2025: 17316', 'Months in 2025: 12 | months in 2026: 9', 'Same months, 2025: 14035 | 2026: 11279', 'Month 7 had more children in 2026: 3252 -&gt; 3452', 'Museo de Sitio de Chan Chan', 'censados de seis a once años', '177,797 escolares de secundaria de 936 colegios públicos', 'las dos semanas que empezaron el lunes 27 de julio', 'Nueve meses contra nueve meses', 'Es como comparar el puntaje de un partido terminado'],
    sources: [
      { claim: 'La Libertad 2,056,445 and province of Trujillo 1,090,001 (Cuadro 1); province censada 1,055,176 with 101,561 aged 6 to 11 (Cuadro 3); district 307,542.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/13/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Trujillo city 766,082 in 2007 and 919,899 in 2017, growth 20.1% (Cuadro N° 1.9).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1539/libro.pdf' },
      { claim: '2026 school calendar blocks (Tabla 1), 36 teaching weeks, DRE/UGEL may vary them.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'ONEM 2026 in La Libertad: 177,797 secundaria students from 936 public schools.', url: 'https://www.gob.pe/institucion/regionlalibertad-gre/noticias/1416180-mas-de-177-mil-escolares-de-la-libertad-participan-en-la-olimpiada-nacional-escolar-de-matematicas-2026-onem' },
      { claim: 'II trimestre 2026: resto urbano homes with internet 66.2% and a computer 41.3%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Trujillo 519, Cusco 520, Arequipa 512, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Monthly visitors to Ministerio de Cultura museums by visitor type, including Museo de Sitio de Chan Chan; ODC-By.', url: 'https://www.datosabiertos.gob.pe/dataset/visitas-museos' },
      { claim: 'Robotics as a means, not the goal (MINEDU DITE).', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and an FAQ.',
      'A reason for the 2026 drop in children at the museum: not claimed; the lesson only shows how to compare the same months.',
      'Commute times inside Trujillo: no published figure; the trip is compared in words only.',
      'A 2025 population for Trujillo city: not published by INEI; the 2017 figure keeps its year and is never summed with 2025 rows.',
      'Any link with MINEDU, the GRE La Libertad, the ONEM, the Ministerio de Cultura or a school: none; the page says so.',
      'Robot kits or hardware: none; programming only.',
      'Soles, competitor prices or typed fees: refused; fees render from the template in USD.'
    ]
  }
};

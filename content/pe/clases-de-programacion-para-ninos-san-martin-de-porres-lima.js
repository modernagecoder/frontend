// SHIP: district | San Martín de Porres, Peru's second district: year-round code at home, a reading habit | greedy choice (biggest box first) fails; check every combination
'use strict';
// Clases de programación para niños en San Martín de Porres (ag- Spanish district door, Peru cluster row PE198, P6,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in San Martín de Porres (SMP) who types "clases de programación para niños San Martín de Porres" at any
// time of the school year. Spine: SMP is the second most populous district in Peru (INEI Censos 2025); how many children
// and adolescents the census counted, by single year of age, against the grade they would be in; the municipality's own
// yearly book fair (gob.pe) and why reading carefully is the first coding skill; why a live class at home beats a trip
// across Lima Norte (no traffic figures); Lima household connectivity (INEI ENAHO II trimestre 2026); one original Python
// lesson; a note for adolescentes; Peru to India clock in prose. No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// san-martin-de-porres-lima/, fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from the saved raw files;
// quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-
//    metropolitana.xlsx), CUADRO N°1: "DISTRITO SAN MARTÍN DE PORRES | 764012 | 375379 | 388633 | 723830 | 354891 | 368939 |
//    40182"; "LIMA METROPOLITANA | 10141775 | ... | 9600043 | ... | 541732"; CUADRO N°3 (población censada por grupo de edad):
//    "DISTRITO SAN MARTÍN DE PORRES | 723830 | 38744 | 59741 | 63462 | 140393 | 173193 | 131053 | 117244", "LIMA
//    METROPOLITANA | 9600043 | 555239 | 818096 | 867253 | ..."; headers "De 6 a 11 años", "De 12 a 17 años"; CUADRO N°2
//    (edades simples) SMP rows "6 años | 8395", "7 años | 9223", "8 años | 9970", "9 años | 10564", "10 años | 10767",
//    "11 años | 10822", "12 años | 10773"; note "Los datos censales se han actualizado al 15 de julio del año 2026".
//  INEI national workbook (inei-censos2025-ind_00-peru.xlsx) CUADRO N° 1: 1,893 "DISTRITO" rows; sorted by us, SMP (764012)
//    is second after San Juan de Lurigancho (1176422).
//  MINEDU, Edades normativas (via the pilot clases-de-programacion-para-ninos-en-ingles, FACTS 13, 14): "Se considera la
//    edad normativa al 31 de marzo de cada año"; 6 años = 1er grado de primaria ... 12 años = 1er grado de secundaria.
//  Municipalidad Distrital de San Martín de Porres on gob.pe (its own pages; officials' names left out on purpose):
//    noticias/1173580 (23 May 2025): "inauguró la III Feria del Libro y Lectura “Juntos Leemos Mejor”, la cual se realiza
//    hasta el 25 de mayo, en la Plaza de Armas del distrito"; "toda la población de Lima Norte"; "la zona editorial, zona de
//    lectura, zona de talleres artísticos, zona de presentaciones múltiples y la zona de conversatorios"; "la altura de la
//    cuadra 35 de la avenida Perú"; "Serán cuatro colegios ganadores." campañas/142445 (IV Feria, "13/05/2026", "Plaza de
//    Armas - Cdra. 35 de la Av. Perú", "10:00 a. m. a 7:00 p. m.", "la oportunidad de ganar libros para tu biblioteca
//    escolar"). The fair's name contains the word "Mejor": quoted once only, as the event's proper name.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7%
//    de los hogares disponía del servicio"; "Este porcentaje alcanzó el 53,3% en Lima Metropolitana" (computer); "el mayor
//    nivel de uso de Internet se registró en Lima Metropolitana, con un 92,4%"; "en Lima Metropolitana, el 91,6% de los
//    usuarios se conectó mediante celular"; "Lima Metropolitana incluye la Provincia Constitucional del Callao".
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, band "high" from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 764012 / 10141775 = 7.5 % of Lima Metropolitana; 59741 / 818096 = 7.3 % of Lima's
//    censused children aged 6 to 11; 59741 / 723830 = 8.3 % and 63462 / 723830 = 8.8 % of SMP's censused population;
//    40182 / 764012 = 5.3 % omitted. Single ages 6 to 11 add up to 59741, the Cuadro 3 figure (check, not printed as a sum).
// Our own example (smp_cajas.py in the src-pages folder), run with python3 -I, exact output:
//    Biggest box first: [(4, 1), (3, 0), (1, 2)] / Boxes used: 3 / Fewest boxes: 2 -> fours: 0 threes: 2 ones: 0
// Neighbouring districts named in plain text only (Los Olivos, Independencia, Rímac, Cercado de Lima, Callao).
// Lesson family: a greedy choice (take the biggest box first with // and %) that is not always the fewest; checking every
// combination with two nested loops proves it.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'sizes = [4, 3, 1]',
  'books = 6',
  '',
  'left = books',
  'plan = []',
  'for size in sizes:',
  '    boxes = left // size',
  '    left = left % size',
  '    plan.append((size, boxes))',
  "print('Biggest box first:', plan)",
  "print('Boxes used:', sum(n for s, n in plan))",
  '',
  'fewest = None',
  'for a in range(books // 4 + 1):',
  '    for b in range(books // 3 + 1):',
  '        c = books - 4 * a - 3 * b',
  '        if c >= 0:',
  '            total = a + b + c',
  '            if fewest is None or total < fewest[0]:',
  '                fewest = (total, a, b, c)',
  "print('Fewest boxes:', fewest[0], '-> fours:', fewest[1], 'threes:', fewest[2], 'ones:', fewest[3])"
].join('\n');

const OUT = [
  'Biggest box first: [(4, 1), (3, 0), (1, 2)]',
  'Boxes used: 3',
  'Fewest boxes: 2 -> fours: 0 threes: 2 ones: 0'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en San Martín de Porres' },
  slug: 'clases-de-programacion-para-ninos-san-martin-de-porres-lima',
  code: 'pns',
  accent: '#004A28',
  accentRationale: 'San Martín de Porres: a deep bottle green #004A28, the green of a library shelf and of the Plaza de Armas trees, darker than the other Lima district greens; allocated in alloc.tsv (contrast 8.48 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en San Martín de Porres',
  title: 'Clases de programación para niños en San Martín de Porres',
  description: 'Clases de programación para niños de 6 a 12 años en San Martín de Porres, Lima: en vivo, en línea y en inglés, en grupo o individuales, desde su casa.',
  ogDescription: 'Programación para niños de San Martín de Porres sin salir de casa: el censo 2025 por edades, la feria del libro del distrito y un reto de Python con cajas de libros.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de San Martín de Porres, a la hora que usted elija.',
  pageName: 'Clases de programación para niños en San Martín de Porres',
  webPageDescription: 'Guía para familias de San Martín de Porres que buscan clases de programación para niños durante todo el año: población del distrito por edades simples según los Censos Nacionales 2025 del INEI, la feria del libro que organiza la municipalidad, el acceso a internet en Lima Metropolitana según el INEI y un ejercicio de Python escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de San Martín de Porres, con cursos aparte para adolescentes de secundaria, dictadas solo en inglés: Scratch, Python, Roblox y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, San Martín de Porres',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distrito', label: 'El distrito' },
    { href: '#edades', label: 'Edades' },
    { href: '#lectura', label: 'Leer y programar' },
    { href: '#reto', label: 'Reto en Python' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'Lima Norte &middot; San Martín de Porres &middot; De 6 a 12 años',
  h1: 'Clases de programación para niños en San Martín de Porres',
  lede: 'San Martín de Porres tiene más vecinos que casi cualquier otro distrito del país, y miles de ellos están en primaria. Si usted busca para su hijo o hija una clase de programación que no le obligue a cruzar Lima Norte después del colegio, aquí encontrará qué dice el censo sobre los niños del distrito, por dónde conviene empezar según la edad y cómo es una clase real con un mentor que enseña en inglés.',
  secondaryCta: { href: '#reto', label: 'Ver el reto de las cajas de libros' },
  wa: 'Hola Modern Age Coders, vivimos en San Martín de Porres y buscamos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un mentor que habla con su hijo en inglés, clase tras clase',
  spec: [
    ['Edades', 'De 6 a 12 años; secundaria con cursos propios'],
    ['Lugar', 'Su casa en San Martín de Porres, por videollamada'],
    ['Idioma', 'Inglés claro, al ritmo del niño'],
    ['Formato', 'Grupo de quince a veinte, o clases individuales'],
    ['Inicio', 'Cualquier semana del año escolar o de las vacaciones'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'Respuesta directa',
  capsule: 'Sí. Modern Age Coders enseña programación a niños de 6 a 12 años de San Martín de Porres en clases en vivo, en línea y en inglés, sin que su hijo tenga que salir de casa. Un mentor desde la India comparte pantalla con él, le habla despacio y ajusta el ritmo y el acento a lo que el niño necesita. Los menores arrancan con Scratch; desde 4° de primaria saltan a Python, a Roblox Studio o a pequeños proyectos con inteligencia artificial. Usted escoge una clase grupal o individual, el día y la hora, y la primera sesión es gratuita.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: '¿Qué curso le conviene a un niño de San Martín de Porres que empieza de cero?',
    lede: 'Tres puertas de entrada según la edad y lo que a su hijo ya le gusta hacer frente a una pantalla.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PNS / 01', title: 'Scratch de principio a fin', alt: 'Imagen del curso de Scratch para niños', note: 'Para los más pequeños y para quien nunca programó. Personajes, escenarios y bloques de colores que se encajan hasta formar un juego que el niño entiende pieza por pieza.' },
      { course: 'python-ai-kids-masterclass', code: 'PNS / 02', title: 'Python e IA desde 4° grado', alt: 'Imagen del curso de Python e IA para niños', note: 'Desde los 9 años. Código escrito letra por letra, figuras trazadas en pantalla, quizzes propios y retos como el de las cajas de libros que verá más abajo.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PNS / 03', title: 'Resolver problemas paso a paso', alt: 'Imagen del curso de resolución de problemas para niños', note: 'Para el niño que disfruta los acertijos. Aprende a partir un problema grande en pasos, a probar ideas y a revisar si su respuesta de verdad funciona.' }
    ]
  },

  sections: [
    {
      id: 'distrito',
      eyebrow: 'El distrito en el censo',
      h2: '¿Cuántos niños viven en San Martín de Porres?',
      lede: 'Muchos. Los Censos Nacionales 2025 del INEI le cuentan a San Martín de Porres 764,012 habitantes, y entre las personas censadas hay 59,741 niños de 6 a 11 años y 63,462 adolescentes de 12 a 17.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'San Martín de Porres y Lima Metropolitana en los Censos Nacionales 2025', head: ['Dato del censo', 'San Martín de Porres', 'Lima Metropolitana'], rows: [
          ['Población total (censada más omitida)', '764,012', '10,141,775'],
          ['Población censada', '723,830', '9,600,043'],
          ['Población omitida', '40,182', '541,732'],
          ['Censados de 0 a 5 años', '38,744', '555,239'],
          ['Censados de 6 a 11 años', '59,741', '818,096'],
          ['Censados de 12 a 17 años', '63,462', '867,253']
        ] },
        { kind: 'source', html: 'Fuente: hoja Excel del INEI con los indicadores demográficos de los Censos Nacionales 2025 para Lima Metropolitana (cuadro 1 para totales, cuadro 3 para grupos de edad), en su versión ajustada a límites vigentes en julio de 2026; la bajamos el 10 de noviembre de 2026. Los grupos de edad cubren solo a la gente censada.' },
        { kind: 'two', mt: true,
          leftH3: 'Segundo en todo el país',
          left: [
            'El cuadro nacional del mismo censo tiene 1,893 filas de distritos. Ordenadas por población, San Martín de Porres aparece en el segundo lugar, detrás de San Juan de Lurigancho (orden hecho por nosotros sobre las cifras del INEI).',
            'Según nuestro cálculo, en San Martín de Porres vive el 7,5 % de toda la gente de Lima Metropolitana, y allí está el 7,3 % de los niños censados de 6 a 11 años de la capital.'
          ],
          rightH3: 'Lo que estas cifras no dicen',
          right: [
            'Si se mira solo dentro del distrito, el tramo de 6 a 11 pesa un 8,3 % de los censados y el de 12 a 17, un 8,8 % (cálculo nuestro). Es un retrato de edades, nada más.',
            'El censo no nos dice cómo vive cada familia ni qué necesita cada niño, y no lo usamos para suponerlo. Para eso está la primera clase: el mentor conoce a su hijo y recién ahí recomienda un camino.'
          ] },
        { kind: 'p', mt: true, html: 'El INEI aclara que una parte de la gente no pudo ser censada y la estima aparte: en San Martín de Porres fueron 40,182 personas, un 5,3 % del total según nuestra cuenta. Por eso la tabla separa ambas cifras y no las mezcla con las edades.' }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Edad por edad',
      h2: '¿A qué edad puede empezar a programar un niño del distrito?',
      lede: 'A los 6 años, cuando un niño entra a 1° de primaria según la norma del MINEDU, ya puede empezar. El censo permite ver cuántos niños de San Martín de Porres hay en cada edad, y a cada edad le corresponde una forma distinta de empezar.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Niños censados por edad simple en San Martín de Porres y por dónde empezar', head: ['Edad', 'Censados en el distrito', 'Grado habitual', 'Primer paso que proponemos'], rows: [
          ['6 años', '8,395', '1° de primaria', 'Ordenar bloques para mover un personaje'],
          ['7 años', '9,223', '2° de primaria', 'Bucles en Scratch: repetir un baile o un dibujo'],
          ['8 años', '9,970', '3° de primaria', 'Un juego completo en Scratch con puntaje'],
          ['9 años', '10,564', '4° de primaria', 'Primeras líneas de Python escritas a mano'],
          ['10 años', '10,767', '5° de primaria', 'Python con listas y decisiones con if'],
          ['11 años', '10,822', '6° de primaria', 'Retos como el de las cajas de libros'],
          ['12 años', '10,773', '1° de secundaria', 'Proyectos propios en Python o en la web']
        ] },
        { kind: 'source', html: 'Fuentes: INEI, Censos Nacionales 2025, cuadro 2 (población censada por edades simples) del libro de Lima Metropolitana; MINEDU, guía "Edades normativas" (gob.pe, 2022), que fija la edad de cada grado "al 31 de marzo de cada año". El censo cuenta la edad del día de la entrevista, así que el grado es aproximado. La última columna es nuestra.' },
        { kind: 'p', mt: true, html: 'La tabla muestra algo que a muchos padres les sorprende: en San Martín de Porres hay más niños de 11 años que de 6 en el censo, y cada edad entre 9 y 12 supera los diez mil. Son las edades en que un niño suele pasar de arrastrar bloques a escribir código, el salto que más acompañamiento necesita. Si su hijo está en ese tramo, la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explica grado por grado qué conviene aprender y qué enseña el colegio.' },
        { kind: 'two', mt: true,
          leftH3: 'De 6 a 8 años',
          left: [
            'Las clases casi no usan texto. El niño mueve personajes, cambia colores y escucha palabras cortas en inglés que el mentor repite con gestos: <em>move</em>, <em>turn</em>, <em>wait</em>.',
            'En esta etapa ayuda tener a un adulto en la misma habitación durante las primeras sesiones, sin tocar el teclado: su sola presencia le da confianza al pequeño.'
          ],
          rightH3: 'De 9 a 12 años',
          right: [
            'A esta edad la mayoría teclea sin buscar cada letra y aguanta concentrada una hora entera. Es el momento de Python, de Roblox Studio y de los primeros proyectos con inteligencia artificial, siempre con el mentor revisando que el niño entienda lo que escribe.',
            'Lo que más avanza aquí no es la velocidad sino el hábito de anticipar el resultado: decir en voz alta lo que el programa hará y luego comprobarlo.'
          ] }
      ]
    },
    {
      id: 'lectura',
      eyebrow: 'Leer con cuidado',
      h2: '¿Qué tiene que ver la feria del libro del distrito con aprender a programar?',
      lede: 'Más de lo que parece. La Municipalidad de San Martín de Porres organiza cada año una feria del libro, y la habilidad que esa feria quiere cultivar, leer con atención, es la misma que usa un niño cuando lee su propio código línea por línea.',
      body: [
        { kind: 'p', html: 'Según una nota de prensa que la municipalidad colgó en gob.pe, el distrito que en mayo de 2025 inauguró la III Feria del Libro y Lectura "Juntos Leemos Mejor" en la Plaza de Armas del distrito, a la altura de la cuadra 35 de la avenida Perú, abierta hasta el 25 de mayo y pensada para "toda la población de Lima Norte". La nota describe una zona editorial, una de lectura, una de talleres artísticos, otra de presentaciones múltiples y una de conversatorios, y un concurso con cuatro colegios ganadores que recibirían una biblioteca.' },
        { kind: 'p', html: 'Para 2026 la municipalidad publicó en gob.pe la campaña de la IV edición, con fecha 13 de mayo de 2026, horario de 10:00 a. m. a 7:00 p. m. y la invitación a colegios, estudiantes y familias, que podían ganar libros para la biblioteca de su colegio. Es una cita que se repite cada mayo, en pleno año escolar.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Leer antes de escribir', p: 'Un niño que programa pasa más tiempo leyendo que tecleando: lee la instrucción del reto, lee su código y lee el mensaje de error. Quien disfruta un cuento ya tiene medio camino hecho.' },
          { h3: 'Leer en otro idioma', p: 'En la clase, las palabras del código están en inglés: <code>print</code>, <code>for</code>, <code>if</code>. El mentor las lee en voz alta con su hijo hasta que dejan de ser extrañas.' },
          { h3: 'Sin relación con la municipalidad', p: 'Modern Age Coders no tiene vínculo alguno con la Municipalidad de San Martín de Porres ni con su feria. La citamos porque es parte de la vida escolar del distrito y vale la pena conocerla.' }
        ] },
        { kind: 'p', mt: true, html: 'Una idea práctica para mayo: lleve a su hijo a la feria y pídale que elija un libro sobre un tema que le guste. Después, en la clase, el mentor puede convertir ese tema en un proyecto: un quiz sobre dinosaurios, una historia animada sobre el mar o un juego sobre fútbol. Leer y programar se alimentan uno al otro.' }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Desde casa',
      h2: '¿Por qué una clase en línea y no una academia en otro distrito?',
      lede: 'Porque en una ciudad del tamaño de Lima el trayecto suele pesar tanto como la clase. Con una clase en línea, su hijo empieza a programar en el minuto exacto en que enciende la computadora, sin ida ni vuelta.',
      body: [
        { kind: 'p', html: 'San Martín de Porres limita con Los Olivos, Independencia, el Rímac, el Cercado de Lima y la Provincia Constitucional del Callao. Una academia en cualquiera de esos lugares, o más lejos, supone acompañar a un niño de primaria por la calle dos veces por semana, a la salida del colegio o del trabajo. Aquí no encontrará minutos de viaje inventados: usted sabe cuánto tarda en llegar a la avenida Perú o a la Panamericana a esa hora. Lo que sí sabemos es que una clase en casa no depende de eso.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Qué tan conectada está la capital: cuatro cifras del INEI para abril a junio de 2026', head: ['Indicador del INEI', 'Lima Metropolitana', 'Lo que significa para la clase'], rows: [
          ['Casas que pagan un servicio de internet', '84,7 %', 'La mayoría ya tiene la conexión que la clase necesita'],
          ['Casas donde hay por lo menos una computadora', '53,3 %', 'Una sola máquina compartida basta'],
          ['Personas de 6 años o más que usaron internet', '92,4 %', 'Casi todos ya se conectan de algún modo'],
          ['Usuarios de internet que se conectan por celular', '91,6 %', 'El celular sirve para avisos, no para programar']
        ] },
        { kind: 'source', html: 'Fuente: boletín trimestral del INEI sobre el uso de tecnologías en los hogares, basado en la ENAHO de abril a junio de 2026 (cifras preliminares), que revisamos el 10 de noviembre de 2026. Para el INEI, Lima Metropolitana incluye la Provincia Constitucional del Callao. No hay cifras por distrito; la tercera columna es nuestra lectura.' },
        { kind: 'two', mt: true,
          leftH3: 'Qué se necesita en casa',
          left: [
            'Una laptop o un equipo de escritorio que tenga cámara, micrófono y teclado de verdad, unos audífonos y una conexión que no se corte. Scratch y Python son gratuitos y el mentor los deja instalados en la primera clase.',
            'Si en casa hay una sola computadora, como en muchos hogares, la clase se agenda a una hora en que nadie más la use.'
          ],
          rightH3: 'Por qué no el celular',
          right: [
            'El dato del INEI dice que en Lima casi todos se conectan a internet por celular. Para chatear está bien; para escribir código, no: la pantalla es chica y el teclado táctil cansa a cualquier niño en diez minutos.',
            'El celular de usted sí sirve para otra cosa: recibir por WhatsApp el resumen de lo que su hijo practicó.'
          ] },
        { kind: 'p', mt: true, html: 'Si su familia vive cerca del límite con Los Olivos, quizás le sirva también nuestra guía de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">vacaciones útiles de programación en Los Olivos</a>, pensada para los meses de verano; las clases son las mismas y se pueden continuar durante todo el año.' }
      ]
    },
    {
      id: 'reto',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de Python para un niño de 11 años?',
      lede: 'Así. El reto es nuestro y nace de la feria del libro: un colegio gana seis libros y quiere guardarlos en cajas donde caben cuatro, tres o un libro. ¿Cuántas cajas hacen falta como mínimo? El programa prueba primero la idea que se le ocurre a casi todo el mundo y después revisa todas las posibilidades.',
      body: [
        { kind: 'code', label: 'Seis libros y tres tamaños de caja', lang: 'Python', code: PY, note: 'La pregunta del mentor, en inglés, llega antes de correr nada: "If we always use the biggest box first, how many boxes will we need?" Su hijo apuesta un número y solo entonces lo comprueba.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Estas tres líneas salieron de nuestra propia computadora al correr el archivo con Python 3, y las pegamos tal cual. La primera idea usa tres cajas; la revisión completa encuentra una forma con solo dos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>La idea rápida.</strong> Llenar primero la caja grande parece lo lógico: una caja de cuatro y quedan dos libros, que van en dos cajas de uno. Con <code>//</code> el programa calcula cuántas cajas caben y con <code>%</code> cuántos libros sobran. Total: tres cajas.',
          '<strong>La sorpresa.</strong> Dos cajas de tres guardan los seis libros. La idea rápida no se equivocó en la cuenta; se equivocó en la estrategia. En informática a eso se le llama un método voraz: toma lo más grande en cada paso sin mirar el conjunto.',
          '<strong>Probar todo.</strong> Los dos bucles anidados ensayan cada cantidad posible de cajas de cuatro y de tres, y completan con cajas de uno. Guardan la combinación con menos cajas. Son pocas pruebas, así que la computadora las hace en un instante.',
          '<strong>Explicarlo en inglés.</strong> El mentor pide una frase completa: "Biggest first is fast, but it is not always the fewest." Su hijo la dice con sus palabras, aunque al principio le salga a medias.',
          '<strong>Cambiar los números.</strong> El reto para la casa: ¿qué pasa con siete libros? ¿Y con ocho? Su hijo predice primero en un papel, después cambia <code>books = 6</code> y compara.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que su hijo se lleva de este ejercicio no es una fórmula de cajas. Es una costumbre: desconfiar un poco de la primera respuesta que parece obvia, comprobarla y poder explicar por qué otra es más corta. Ahí está la distancia entre copiar una respuesta de internet, o de una herramienta de IA, y saber si esa respuesta está bien.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Puede aprender programación en inglés un niño que no habla inglés?',
      lede: 'Sí. No pedimos un nivel de inglés para empezar. El mentor habla en frases cortas, escribe en la pantalla cada palabra clave y repite de otra forma lo que el niño no entendió.',
      body: [
        { kind: 'p', html: 'Hay un periodo de ajuste de unas dos o tres semanas, mientras los oídos de ambos lados se acomodan a una pronunciación nueva. Después pasa algo que muchas familias de Lima Norte nos cuentan: el chico empieza a usar en casa las palabras de la clase, <em>loop</em>, <em>bug</em>, <em>try again</em>, sin que nadie se lo pida. El inglés deja de ser una materia y se vuelve una herramienta para hacer algo que le gusta.' },
        { kind: 'p', html: 'En el EF EPI 2025, la medición anual de inglés que publica EF Education First, Lima obtuvo 555 puntos, cinco por encima del umbral de 550 donde EF empieza a hablar de nivel alto. Los evaluados son adultos voluntarios, no escolares, pero el dato muestra que en la capital el inglés ya está en el trabajo y en los estudios de mucha gente. Que su hijo lo practique hablando cada semana, mientras programa, suma en las dos direcciones.' }
      ]
    },
    {
      id: 'adolescentes',
      eyebrow: 'Secundaria',
      h2: '¿Y si mi hijo ya está en secundaria?',
      lede: 'Entonces tiene cursos propios. Los 63,462 adolescentes de 12 a 17 años que el censo encontró en San Martín de Porres no tienen por qué empezar con los bloques de los más pequeños.',
      body: [
        { kind: 'p', html: 'Para un chico de 1° a 5° de secundaria proponemos Python completo, desarrollo web con JavaScript, Java o inteligencia artificial con datos reales, según lo que le interese y lo que ya sepa. El trato también cambia: el mentor le habla como a alguien capaz de llevar su propio proyecto, y el informe a la familia se centra en lo que construyó. Nuestra página sobre <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes en Perú</a> cuenta los caminos con más detalle.' },
        { kind: 'p', html: 'Una advertencia que hacemos a todas las familias: algunas herramientas de inteligencia artificial tienen edades mínimas en sus condiciones de uso, y varias piden permiso de los padres para menores de 18. En nuestras clases con menores usamos solo las que corresponden a su edad, y siempre como ayuda para pensar, no para que hagan la tarea por ellos.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horario',
      h2: '¿A qué hora puede conectarse un niño desde San Martín de Porres?',
      lede: 'A la que usted elija. Los mentores viven en la India, cuyo reloj marca diez horas y media más que el de Lima durante los doce meses, así que conviene saber cómo se traduce una hora en el otro país.',
      body: [
        { kind: 'p', html: 'Perú usa UTC-5 durante todo el año y no cambia la hora en verano desde 1994; la India usa UTC+5:30, también sin cambios. Por eso la diferencia es fija. Dos ejemplos: si su hijo abre la clase un sábado a media mañana, a las 9:00 en Lima, para el mentor son las 7:30 p. m. del mismo sábado; si se conecta a las 4:00 p. m. de un martes, después del colegio, en la India ya son las 2:30 a. m. del miércoles.' },
        { kind: 'p', html: 'Esas horas no son un calendario de clases: son solo conversiones para que entienda el cálculo. Al reservar la clase gratis, el formulario le enseña las opciones con la hora limeña y el mentor las recibe ya convertidas a la suya. Si su hijo estudia por la tarde, las mañanas suelen quedar libres; si va al colegio temprano, la tarde o la noche.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota que su hijo está aprendiendo?',
    lede: 'Cinco señales propias que el mentor observa y que usted también puede ver en casa.',
    table: { caption: 'Cinco señales de avance para niños de primaria (nuestras)', head: ['Señal', 'En la clase', 'En casa'], rows: [
      ['1. Ordena', 'Pone los pasos en el orden correcto sin ayuda', 'Le explica en qué orden hizo su juego'],
      ['2. Repite con sentido', 'Usa un bucle en lugar de copiar el mismo bloque', 'Le muestra dónde ahorró trabajo'],
      ['3. Predice', 'Dice qué va a imprimir el programa antes de correrlo', 'Acierta o explica por qué falló'],
      ['4. Desconfía de lo obvio', 'Comprueba una respuesta rápida, como en el reto de las cajas', 'Le cuenta qué revisó'],
      ['5. Crea', 'Termina un proyecto propio y lo presenta en inglés', 'Se lo presenta a usted']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No mida el avance por las horas frente a la pantalla. Mídalo por lo que su hijo puede contarle de lo que hizo.',
      'Si un mes parece estancado, es normal: el paso de bloques a texto se toma su tiempo y luego avanza de golpe.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Antes de correr el programa, diga en voz alta lo que espera ver.',
      'Si algo sale distinto, no borre todo: cambie una sola cosa y pruebe otra vez.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: '¿Qué otros cursos pueden tomar los niños y adolescentes del distrito?',
    lede: 'Todos van en vivo, hablados en inglés, con un mentor que no cambia a mitad de camino, para un grupo o para un solo alumno.',
    bands: [
      { num: 'I', h3: 'Para empezar', sub: 'De 6 a 9 años', courses: [
        { code: 'PNS / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Juegos, animaciones y apps sencillas armadas con bloques.' },
        { code: 'PNS / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar con orden', blurb: 'Patrones y acertijos que preparan la cabeza para programar.' },
        { code: 'PNS / BASE / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido del número para los más chicos, sin trucos de memoria.' }
      ] },
      { num: 'II', h3: 'Crear juegos y webs', sub: 'De 8 a 12 años', courses: [
        { code: 'PNS / CREA / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Mundos propios en Roblox', blurb: 'Luau para mover plataformas, contar vidas y abrir puertas.' },
        { code: 'PNS / CREA / 02', slug: 'kids-ai-web-development-course', title: 'Mi primera web', blurb: 'HTML y CSS para publicar una página hecha por el niño.' },
        { code: 'PNS / CREA / 03', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos de tres mundos', blurb: 'Scratch, Roblox y Minecraft en un recorrido de creación.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PNS / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python completo', blurb: 'De las variables a proyectos con archivos y datos.' },
        { code: 'PNS / SEC / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript', blurb: 'Páginas interactivas y juegos que corren en el navegador.' },
        { code: 'PNS / SEC / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java', blurb: 'Clases y objetos con proyectos de buen tamaño.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases durante el año escolar?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del colegio', l: 'Si su hijo entra al aula después del mediodía, la mañana es suya.' },
      { time: 'Después de las tareas', l: 'Cuando el niño ya almorzó, descansó y terminó lo del colegio.' },
      { time: 'Fin de semana', l: 'Si la semana está llena, un sábado o domingo a la hora que usted fije.' }
    ],
    cells: [
      { h3: 'Un solo mentor', p: 'La misma persona de principio a fin, que conoce el ritmo de su hijo.' },
      { h3: 'Ojos en el mismo código', p: 'Con la pantalla del niño a la vista, el mentor señala el error sin teclear por él.' },
      { h3: 'Un reto por semana', p: 'Un ejercicio corto entre clases, hecho para pensarlo, no para copiarlo.' },
      { h3: 'Resumen a la familia', p: 'Unas líneas sobre lo practicado y lo que sigue.' },
      { h3: 'Sin matrícula anual', p: 'Se paga por mes y se puede pausar cuando usted lo decida.' },
      { h3: 'Grupo o individual', p: 'Un aula virtual con otros quince a veinte niños de su edad, o una hora solo para él.' }
    ]
  },

  projectsH2: 'Hasta dónde llegan nuestros alumnos con constancia',
  projectsLede: 'Así se ve lo que un niño puede llegar a construir con constancia. Hay más ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Lo que familias y estudiantes de distintos países escribieron en Google, sin traducir, en inglés.',

  fees: {
    h2: '¿Qué precio tienen las clases en San Martín de Porres?',
    lede: 'Las mensualidades se muestran abajo en dólares estadounidenses y se cobran a una tarjeta. La conversión a su moneda la hace su banco al tipo de cambio del día, de modo que el monto en su estado de cuenta puede moverse un poco.',
    free: ['Una clase completa sin costo', 'El mentor sugiere el punto de partida', 'No se pide tarjeta'],
    group: ['Quince a veinte niños de edad parecida', 'El mismo mentor durante el curso', 'Dos clases en vivo por semana', 'Pago mes a mes, sin permanencia'],
    one: ['Solo su hijo y el mentor', 'Temas y ritmo a su medida', 'El horario que la familia escoja']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en San Martín de Porres: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. El idioma de todas las sesiones es el inglés, y ese es el valor que buscan muchas familias de San Martín de Porres: el niño aprende a programar y al mismo tiempo se suelta a hablar otro idioma, con un mentor que va despacio y se adapta a su acento. El EF EPI 2025 da a Lima 555 puntos, nivel alto, así que ese inglés tiene uso real en la ciudad.' },
      { q: '¿Tienen un local en San Martín de Porres?', a: 'No tenemos aulas físicas en el distrito ni en otra ciudad peruana. La clase ocurre en la pantalla de su casa y el mentor se une desde la India, de modo que nadie se desplaza.' },
      { q: '¿Desde qué edad puede empezar mi hijo?', a: 'Con 6 años cumplidos, que es cuando el MINEDU ubica a un niño en 1° de primaria. Empieza con bloques y personajes; alrededor de 4° grado ya suele animarse a teclear Python.' },
      { q: '¿Cuántos niños hay en San Martín de Porres según el censo?', a: 'Los Censos Nacionales 2025 del INEI encontraron 59,741 niños de 6 a 11 años y 63,462 adolescentes de 12 a 17 entre la población censada del distrito, que en total suma 764,012 habitantes contando a la población omitida.' },
      { q: '¿Mi hijo necesita saber inglés?', a: 'No. Con saludos y palabras sencillas basta para empezar. El mentor escribe las palabras clave en la pantalla y las repite; en dos o tres semanas la mayoría de niños ya entiende el ritmo de la clase.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India va 10 horas y 30 minutos adelante de Perú todo el año: las 9:00 a. m. de Lima son las 7:30 p. m. allá.' },
      { q: '¿Qué equipo necesita en casa?', a: 'Un equipo con pantalla grande, teclado físico y cámara con micrófono, además de audífonos y una señal de internet que no se caiga. En el celular escribir código resulta incómodo; con una sola máquina compartida por la familia alcanza.' },
      { q: '¿Están vinculados con la Municipalidad de San Martín de Porres?', a: 'No. Somos una academia independiente sin relación con la municipalidad, con su feria del libro ni con ningún colegio del distrito. Lo que contamos de la feria sale de las propias publicaciones municipales en gob.pe y lo mencionamos para orientar a los vecinos.' },
      { q: '¿De qué forma se paga?', a: 'Con tarjeta, una vez al mes, en dólares estadounidenses que su banco convierte. La sesión de prueba no tiene costo ni le pide datos de pago.' },
      { q: '¿Las clases cuentan para el colegio?', a: 'No. Son un complemento fuera del aula: no dan notas ni reemplazan cursos escolares, y Modern Age Coders no tiene relación con el MINEDU ni con colegio alguno. Lo que sí entregamos al cerrar cada curso es una constancia de finalización propia.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir leyendo',
    h2: 'Otras páginas para familias de Lima Norte',
    lede: 'Páginas que amplían lo que leyó aquí; varias están en inglés, como indica su nombre.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La puerta general a nuestras clases en el país, por edades y materias.' },
      { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Online coding and AI classes in Callao', p: 'Para las familias del otro lado del límite, en el Callao.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de cada herramienta de IA, según sus propias condiciones.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo transcurre una clase en vivo, de principio a fin.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo entero, de primaria a la universidad.' }
    ]
  },

  start: {
    h2: '¿Cómo se reserva la primera clase?',
    lede: 'Elija el día y la hora en el reloj de Perú. Durante esa sesión el mentor conversa un rato con su hijo con palabras fáciles, le propone un desafío corto y al final le dice a usted qué curso y qué modalidad le sugerimos.',
    readFirst: 'Para informarse con calma, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe una clase por dentro y <a class="ag-inline-link" href="/courses">All courses</a> reúne el catálogo (las dos páginas están en inglés).',
    note: 'Las clases son en vivo, en línea y en inglés, con mentores en la India. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Resolver problemas' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas de IA' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'La primera idea no siempre es la más corta'
  },

  personalityCss: `
.ag-root.ag-pns .ag-hero h1 { max-width: 20ch; letter-spacing: -0.01em; }
.ag-root.ag-pns .ag-capsule { border-left-width: 6px; }
.ag-root.ag-pns .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-pns .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-pns .ag-steps li { margin-bottom: 0.4rem; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de San Martín de Porres pages on gob.pe (III Feria del Libro note of 23 May 2025, IV Feria campaign of 13 May 2026), EF EPI 2025, tzdata. Read 10 November 2026. Example code, starting steps and progress signals are our own.',
    localProject: 'Six books won at the district book fair go into boxes of 4, 3 or 1: the greedy rule (biggest box first, with // and %) prints Boxes used: 3, and two nested loops that try every combination print Fewest boxes: 2 (two boxes of three). Run with python3 -I. Lesson family: a greedy choice that is not always the fewest, checked by trying every combination.',
    requiredMentions: ['Boxes used: 3', 'Fewest boxes: 2', 'Biggest first is fast, but it is not always the fewest', 'cuadra 35 de la avenida Perú', '59,741 niños de 6 a 11 años', '63,462 adolescentes de 12 a 17', 'Censados en el distrito', 'La primera idea no siempre es la más corta', 'segundo lugar, detrás de San Juan de Lurigancho'],
    sources: [
      { claim: 'SMP population 764,012 (censada 723,830, omitida 40,182); ages 6 to 11 and 12 to 17; single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'III Feria del Libro y Lectura, Plaza de Armas, cuadra 35 de la avenida Perú, until 25 May 2025, four winning schools.', url: 'https://www.gob.pe/institucion/munisanmartindeporres/noticias/1173580-municipalidad-de-smp-inauguro-la-iii-feria-del-libro-y-lectura-juntos-leemos-mejor' },
      { claim: 'IV Feria del Libro y Lectura, 13 May 2026, 10:00 a. m. to 7:00 p. m.', url: 'https://www.gob.pe/institucion/munisanmartindeporres/campa%C3%B1as/142445-iv-feria-del-libro-y-lectura-juntos-leemos-mejor' },
      { claim: 'Lima Metropolitana households with internet 84.7%, with a computer 53.3%; internet use 92.4%; 91.6% of users by phone (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Any link with the Municipalidad de San Martín de Porres, its book fair or any school: none; the page says so.',
      'Traffic or travel-time figures for Lima Norte: refused; we have no primary source.',
      'Income, class or living-standard statements about the district: refused; only census ages and counts.',
      'Adding 6 to 11 and 12 to 17 into one published-looking total: refused (published parts are printed separately).',
      'Officials\' names from the municipal notes: left out on purpose.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

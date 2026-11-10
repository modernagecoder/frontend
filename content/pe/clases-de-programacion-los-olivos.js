// SHIP: market | Los Olivos, the youngest of these districts: secundaria to university and first jobs, in English | a queue: list.pop() serves the last in, deque.popleft() the first
'use strict';
// Clases de programación en Los Olivos (ag- Spanish district door, Peru cluster row PE142, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round; differs from vacaciones-utiles-de-programacion-los-olivos-lima, which was robótica or programación and
// MINEDU's Fábrica de Programadores for a summer): Los Olivos has the youngest age profile of the eight Lima districts in
// this batch (INEI 2025), close to the Lima average, with many teenagers and people of 18 to 29. The page follows that
// path: secundaria during the school year, the step to university (admission exams are in Spanish; we teach maths
// reasoning and code in English and promise nothing), and first jobs. Municipal context is thin on gob.pe and is said so.
// Lesson: a fair queue for questions in class (first in, first out) with collections.deque.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-los-olivos/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08;
// admission pages copied from facts-school/src):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO LOS OLIVOS 362039
//    176325 185714 343232 166824 176408 18807 9501 9306"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO LOS OLIVOS 343232 17500
//    27111 29304 63553 85881 61873 58010"; "LIMA METROPOLITANA 9600043 555239 818096 867253 1800348 2322499 1744864 1491744".
//  - Municipalidad de Los Olivos on gob.pe (institucion/munilosolivos). Searches on 2026-11-10 for tecnologia, computacion,
//    programacion, robotica, ingles, talleres and innovacion returned no technology or course notes (gobpe/q-*.html: total 0,
//    or unrelated). The news list (noticias-list.html) gave one education note, n-1134476.txt, 31 Jan 2025: "Obra se llevará
//    a cabo gracias a presupuesto participativo"; "un pabellón de 3 pisos"; "en el tercer piso, dos aulas: una de innovación
//    pedagógica y una biblioteca -sala de estudios"; "equipamiento de computadora y proyector multimedia para el aula de
//    innovación". The school, the cost in soles and the officials named in the note are not repeated.
//  - Admission (copied from facts-school/src, fetched 2026-11-08): UNI admission 2026-2 (admision/uni-adm2026-2/text.txt):
//    "tres pruebas tomadas en tres días (lunes, miércoles y viernes)"; "1. Primera prueba: - APTITUD ACADÉMICA - HUMANIDADES
//    2. Segunda prueba: - MATEMÁTICA 3. Tercera prueba: - Física - Química". PUCP guide quoting the Ley Universitaria
//    (admision/pucp-guia/text.txt): "concurso público, previa definición de plazas y máximo una vez por ciclo."
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7% de los hogares disponía
//    del servicio"; "el mayor crecimiento se registró en Lima Metropolitana, con un aumento de 4,3 puntos porcentuales".
//  - EF EPI 2025 (ef_peru.txt): Peru 519, rank 52 of 123, "Moderate"; Lima 555 (High from 550).
//  - Time (timezone.tsv): Peru UTC-5 all year, India UTC+5:30.
//  - Neighbouring districts, plain text: San Martín de Porres, Independencia, Comas, Puente Piedra.
// Our own calculations (python3 -I): shares of censados: 0 a 5 5.10%, 6 a 11 7.90%, 12 a 17 8.54%, 18 a 29 18.52%, 60 y más
//   16.90% (Lima 5.78, 8.52, 9.03, 18.75, 15.54); 27111 + 29304 = 56415 aged 6 to 17; 362039 / 10141775 = 3.57% of Lima
//   Metropolitana; under 30: 17500 + 27111 + 29304 + 63553 = 137468, 40.05% (Lima 42.08%); San Isidro under 30: 2507 + 3596 +
//   4048 + 9660 = 19811 / 69137 = 28.65%; Surco 6 to 17: 24155 + 28204 = 52359.
// Our own example (olivos_v1.py, olivos_v2.py), exact output: v1 "Mentor answers Kevin: error on line 4" first, Diego last;
//   v2 "Mentor answers Diego: my loop never ends" / "Mentor answers Maria: what does len mean" / "Mentor answers Kevin: error
//   on line 4". The names are invented.
// Lesson family: queues; list.append with list.pop() is a stack (last in, first out); collections.deque with popleft() is a
// fair queue (first in, first out); pop(0) on a list works but shifts every element.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'preguntas = []',
  "preguntas.append('Diego: my loop never ends')",
  "preguntas.append('Maria: what does len mean')",
  "preguntas.append('Kevin: error on line 4')",
  '',
  'while preguntas:',
  "    print('Mentor answers', preguntas.pop())"
].join('\n');

const OUT1 = [
  'Mentor answers Kevin: error on line 4',
  'Mentor answers Maria: what does len mean',
  'Mentor answers Diego: my loop never ends'
].join('\n');

const V2 = [
  'from collections import deque',
  '',
  'preguntas = deque()',
  "preguntas.append('Diego: my loop never ends')",
  "preguntas.append('Maria: what does len mean')",
  "preguntas.append('Kevin: error on line 4')",
  '',
  'while preguntas:',
  "    print('Mentor answers', preguntas.popleft())"
].join('\n');

const OUT2 = [
  'Mentor answers Diego: my loop never ends',
  'Mentor answers Maria: what does len mean',
  'Mentor answers Kevin: error on line 4'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en Los Olivos' },
  slug: 'clases-de-programacion-los-olivos',
  code: 'prol',
  accent: '#6E1727',
  accentRationale: 'Clases de programación en Los Olivos: a deep garnet #6E1727, darker and cooler than the other Lima district doors, chosen for Lima Norte and kept apart from the Los Olivos summer page; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en Los Olivos',
  title: 'Clases de programación en Los Olivos, en vivo y en inglés',
  description: 'Clases de programación en Los Olivos para secundaria, universitarios y jóvenes que trabajan, y para niños y adultos: en vivo, en línea y en inglés, todo el año.',
  ogDescription: 'Los Olivos es un distrito joven de Lima Norte. Programación en vivo y en inglés para escolares, preuniversitarios, universitarios y primeros empleos, sin salir de casa.',
  twitterDescription: 'Programación en vivo y en inglés para Los Olivos y Lima Norte: de la secundaria al primer empleo, todo el año.',
  pageName: 'Clases de programación en Los Olivos',
  webPageDescription: 'Guía para familias y jóvenes de Los Olivos que buscan clases de programación durante el año, dictadas en vivo, en línea y en inglés: el perfil de edades del distrito según los Censos Nacionales 2025 del INEI, una ruta de la secundaria a la universidad y al primer empleo, cómo encaja la programación con un examen de admisión que se rinde en castellano, lo poco que publica la municipalidad sobre tecnología y una clase de ejemplo en Python, escrita por nosotros, sobre colas justas.',
  courseDescription: 'Clases en vivo y en línea de programación, matemática e inteligencia artificial para vecinos de Los Olivos, sobre todo adolescentes y jóvenes, pero también niños y adultos, dictadas únicamente en inglés: Python, Java, desarrollo web, programación competitiva y certificación PCEP, en grupos de quince a veinte o individuales, todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en Los Olivos',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#joven', label: 'Distrito joven' },
    { href: '#secundaria', label: 'Secundaria' },
    { href: '#admision', label: 'Admisión' },
    { href: '#cola', label: 'Ejemplo' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'Los Olivos &middot; Lima Norte &middot; De la secundaria al primer empleo',
  h1: 'Clases de programación en Los Olivos, de la secundaria a la universidad',
  lede: 'Los Olivos es un distrito joven. Según el censo de 2025, cuatro de cada diez vecinos censados tienen menos de 30 años, y hay más escolares que en la mayoría de distritos del centro y del sur de Lima. Esta página sigue ese camino: qué aprender en secundaria durante el año escolar, cómo convive la programación con la preparación para la universidad, qué sirve para un primer empleo y por qué estudiar desde casa ahorra los viajes por Lima Norte. Al final, una lección real sobre algo que todo salón conoce: los turnos para preguntar.',
  secondaryCta: { href: '#secundaria', label: 'Ver la ruta para secundaria' },
  wa: 'Hola Modern Age Coders, somos de Los Olivos y nos interesan sus clases de programación en inglés. ¿Podemos reservar una clase de prueba?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; clases solo en inglés, a su ritmo',
  spec: [
    ['Distrito', 'Los Olivos, Lima Norte'],
    ['Sobre todo', 'Secundaria, preuniversitarios y universitarios'],
    ['También', 'Niños desde 6 años y adultos'],
    ['Modalidad', 'En vivo por videollamada'],
    ['Formato', 'Grupo de quince a veinte o individual'],
    ['Para probar', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí: Modern Age Coders enseña programación a jóvenes y familias de Los Olivos todo el año, con clases en vivo, en línea y en inglés. Los escolares de secundaria avanzan con Python, Java o desarrollo web; quienes se preparan para la universidad suman razonamiento matemático en inglés; los universitarios y quienes buscan su primer empleo trabajan proyectos y certificaciones. Hay cursos desde los 6 años y para adultos. La clase la da un mentor radicado en la India, con un inglés claro, en grupo o a solas, a la hora que usted fije.',

  picks: {
    eyebrow: 'Tres cursos clave',
    h2: 'Para el escolar, el preuniversitario y el universitario',
    lede: 'Uno para aprender a programar bien desde cero en secundaria, uno con una certificación internacional de Python como meta y uno para quien ya está en la universidad y quiere un lenguaje que piden las empresas.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PROL / 01', title: 'Python completo para secundaria', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 13 a 18 años. Variables, funciones, listas, archivos y proyectos propios, a lo largo del año escolar y en inglés.' },
      { course: 'pcep-pcap-python-certification-course', code: 'PROL / 02', title: 'Certificación PCEP y PCAP', alt: 'Imagen del curso de certificación PCEP y PCAP de Python', note: 'Desde 4° y 5° de secundaria. Preparación para los exámenes del Python Institute, que se rinden aparte y en inglés.' },
      { course: 'java-programming-masterclass-for-teens', code: 'PROL / 03', title: 'Java para adolescentes y primeros ciclos', alt: 'Imagen del curso de Java para adolescentes', note: 'Desde los 13 años. Programación orientada a objetos con proyectos completos, base de muchas carreras de ingeniería y de sistemas.' }
    ]
  },

  sections: [
    {
      id: 'joven',
      eyebrow: 'Un distrito joven',
      h2: '¿Cuántos jóvenes y escolares hay en Los Olivos?',
      lede: 'Muchos. El INEI contó 362,039 olivenses en sus Censos Nacionales 2025, y su reparto por edades se parece al de Lima Metropolitana en conjunto, mucho más que el de distritos como Miraflores o San Isidro.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Los Olivos y Lima Metropolitana: población censada por edad en 2025', head: ['Edad', 'Olivenses censados', 'Los Olivos', 'Lima Metropolitana'], rows: [
          ['0 a 5', '17,500', '5.1 %', '5.8 %'],
          ['6 a 11', '27,111', '7.9 %', '8.5 %'],
          ['12 a 17', '29,304', '8.5 %', '9.0 %'],
          ['18 a 29', '63,553', '18.5 %', '18.8 %'],
          ['30 a 44', '85,881', '25.0 %', '24.2 %'],
          ['45 a 59', '61,873', '18.0 %', '18.2 %'],
          ['60 a más', '58,010', '16.9 %', '15.5 %'],
          ['Total censado', '343,232', '100 %', '100 %']
        ] },
        { kind: 'source', html: 'Elaboración propia con los tabulados de Lima Metropolitana de los Censos Nacionales 2025 (INEI): edades tomadas del Cuadro N.° 3, que solo cubre a los censados (343,232 olivenses; 9,600,043 limeños); población total del Cuadro N.° 1, con 362,039 habitantes, 18,807 de ellos omitidos y sin edad registrada. Porcentajes calculados por nosotros con un decimal.' },
        { kind: 'three', mt: true, cells: [
          { h3: '56,415 escolares', p: 'Es la suma, hecha por nosotros, de los tramos escolares del censo. Son más que en Santiago de Surco (52,359), un distrito con más habitantes en total.' },
          { h3: '63,553 jóvenes de 18 a 29', p: 'La edad de la universidad, el instituto y el primer trabajo: el 18.5 % de los censados, casi igual que el promedio limeño.' },
          { h3: 'Cuatro de cada diez, menores de 30', p: 'Sumando los cuatro primeros grupos salen 137,468 personas, el 40.1 % de los censados. En San Isidro, con la misma cuenta, la proporción es de 28.7 % (cálculos nuestros).' }
        ] },
        { kind: 'p', mt: true, html: 'Los Olivos limita con San Martín de Porres, Independencia, Comas y Puente Piedra, y es uno de los distritos que más se mencionan cuando se habla de Lima Norte. Representa cerca del 3.6 % de la población de Lima Metropolitana (cálculo nuestro sobre el Cuadro N.° 1). Para las familias de esos distritos vecinos, todo lo que sigue vale igual: la clase llega por internet.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Secundaria',
      h2: '¿Qué programación conviene aprender en secundaria, durante el año escolar?',
      lede: 'Un lenguaje de verdad, a un ritmo que conviva con el colegio. Dos clases por semana bastan para avanzar sin descuidar las tareas, y el progreso se ve más en un año escolar completo que en un verano.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta de programación por grado de secundaria (propuesta nuestra)', head: ['Grado', 'Qué aprende', 'Qué tiene al terminar el año'], rows: [
          ['1° de secundaria', 'Python: variables, condiciones, bucles', 'Juegos de texto y pequeños programas útiles'],
          ['2° de secundaria', 'Python: listas, funciones, archivos', 'Un proyecto con datos de su interés'],
          ['3° de secundaria', 'Desarrollo web o Java', 'Una página publicada o una app de escritorio'],
          ['4° de secundaria', 'Estructuras de datos, algoritmos, PCEP', 'Problemas resueltos y, si quiere, el examen PCEP'],
          ['5° de secundaria', 'Proyecto propio y razonamiento en inglés', 'Un portafolio para la universidad o el instituto']
        ] },
        { kind: 'source', html: 'Ruta elaborada por Modern Age Coders. No sigue ningún plan oficial, y el colegio no la reconoce como nota. El examen PCEP lo administra el Python Institute, aparte de nuestras clases.' },
        { kind: 'p', mt: true, html: 'En el colegio, la tecnología aparece como una competencia transversal y no como un curso propio de programación, así que lo que su hijo aprenda con nosotros es un complemento, no un repaso. Para quien está en el último año, tenemos una guía específica, <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5° de secundaria</a>. Para enero y febrero hay otra lectura: <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">el verano olivense, entre robótica y código</a>.' }
      ]
    },
    {
      id: 'admision',
      eyebrow: 'Hacia la universidad',
      h2: '¿La programación ayuda para el examen de admisión?',
      lede: 'No de forma directa, y no prometemos ingresos. Los exámenes de admisión de las universidades del Perú están en castellano y cada una fija su temario. Lo que sí hace la programación es entrenar el razonamiento que esos exámenes piden.',
      body: [
        { kind: 'p', html: 'La Ley Universitaria, citada por la PUCP en su guía del postulante, establece que la admisión se hace por concurso público, "previa definición de plazas y máximo una vez por ciclo", con un examen de conocimientos como proceso principal. Cada universidad organiza el suyo. La Universidad Nacional de Ingeniería, por ejemplo, describe su examen ordinario como "tres pruebas tomadas en tres días (lunes, miércoles y viernes)".' },
        { kind: 'table', mt: true, numCols: [], caption: 'Las tres pruebas del examen ordinario de admisión de la UNI (proceso 2026-2), y qué parte entrenamos nosotros', head: ['Prueba de la UNI', 'Contenido que publica la UNI', 'Lo que trabajamos en clase (en inglés)'], rows: [
          ['Primera prueba', 'Aptitud académica y humanidades', 'Razonamiento lógico con problemas originales nuestros'],
          ['Segunda prueba', 'Matemática', 'Álgebra, funciones y problemas resueltos también con código'],
          ['Tercera prueba', 'Física y química', 'No la preparamos']
        ] },
        { kind: 'source', html: 'Fuente de las dos primeras columnas: Universidad Nacional de Ingeniería, página de admisión 2026-2 (admision.uni.edu.pe), y PUCP, guía del postulante (admision.pucp.edu.pe), leídas el 8 de noviembre de 2026. La tercera columna es nuestra. No tenemos vínculo con la UNI, la PUCP ni ninguna academia preuniversitaria, y no damos clases en castellano.' },
        { kind: 'p', mt: true, html: 'Muchos chicos de Lima Norte combinan el colegio con una academia preuniversitaria. Si es el caso de su hijo, nuestras clases van aparte: una o dos horas por semana en las que programa, razona en inglés y construye algo propio, sin competir con la academia. Para entender cómo funcionan los exámenes de las principales universidades, tenemos un explicador en inglés, <a class="ag-inline-link" href="/peru-university-admission-exams-explained">Peru university admission exams explained</a>.' }
      ]
    },
    {
      id: 'empleo',
      eyebrow: 'Universitarios y primer empleo',
      h2: '¿Qué aprender si ya estoy en la universidad o buscando trabajo?',
      lede: 'Lo que le permita mostrar, no solo contar. Un repositorio con proyectos propios, explicados en inglés, dice más en una entrevista que un certificado suelto.',
      body: [
        { kind: 'two',
          leftH3: 'Si estudia sistemas, informática o ingeniería',
          left: [
            'Estructuras de datos y algoritmos, Java o C++, y práctica de entrevistas técnicas. Ver en inglés los mismos temas del ciclo ayuda a leer documentación y para empresas que trabajan con equipos de otros países.',
            'Su mentor revisa cada entrega igual que un colega veterano en una empresa: nombres claros, pruebas, casos borde.'
          ],
          rightH3: 'Si estudia otra cosa o ya trabaja',
          right: [
            'Python para datos y automatización, o desarrollo web. Son las habilidades que más se piden fuera del área de sistemas: ordenar información, automatizar reportes, armar una página.',
            'No damos asesoría laboral ni prometemos empleos. Lo que entregamos es práctica guiada y proyectos que usted puede enseñar.'
          ] },
        { kind: 'p', mt: true, html: 'Para quien está en la universidad, la guía de <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">cursos de programación para universitarios</a> ordena las opciones por carrera.' }
      ]
    },
    {
      id: 'municipio',
      eyebrow: 'Lo que hay en el distrito',
      h2: '¿La Municipalidad de Los Olivos tiene talleres de tecnología?',
      lede: 'En su página de gob.pe no encontramos ninguno. Las búsquedas que hicimos el 10 de noviembre de 2026 por tecnología, computación, programación, robótica, inglés y talleres no devolvieron notas sobre cursos.',
      body: [
        { kind: 'p', html: 'La única nota educativa reciente que encontramos, del 31 de enero de 2025, describe la entrega del expediente técnico para un pabellón de tres pisos en un colegio público del distrito, financiado por presupuesto participativo. En el tercer piso, según la municipalidad, habrá "dos aulas: una de innovación pedagógica y una biblioteca -sala de estudios", con equipamiento de computadora y proyector multimedia para el aula de innovación. Es una buena noticia para ese colegio; no es todavía una oferta abierta de programación.' },
        { kind: 'p', html: 'Por eso, para la mayoría de familias de Los Olivos, aprender a programar significa hoy buscar fuera del distrito o en línea. No tenemos ninguna relación con la municipalidad ni con ningún colegio; lo que ofrecemos es una alternativa que no exige moverse.' }
      ]
    },
    {
      id: 'cola',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se programa una cola justa para atender preguntas?',
      lede: 'Con una estructura que respete el orden de llegada. El ejercicio es nuestro y lo usamos con escolares de 2° a 5° de secundaria: tres alumnos levantan la mano en clase, uno tras otro, y el programa decide a quién atiende primero el mentor. Los nombres son inventados.',
      body: [
        { kind: 'code', label: 'Primer intento: una lista y pop()', lang: 'Python', code: V1, note: 'Cada pregunta se agrega al final con <code>append()</code>. Luego, mientras queden preguntas, se saca una con <code>pop()</code>.' },
        { kind: 'code', label: 'Salida del primer intento', lang: 'Salida', code: OUT1, note: 'Salida exacta con python3. Kevin, que preguntó al último, es atendido primero, y Diego, que llevaba más tiempo esperando, queda al final.' },
        { kind: 'code', label: 'Segundo intento: una cola con deque', lang: 'Python', code: V2, note: '<code>deque</code> es una cola de doble extremo de la biblioteca estándar. <code>popleft()</code> saca el elemento que entró primero.' },
        { kind: 'code', label: 'Salida del segundo intento', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3. Ahora el orden de atención es el orden de llegada.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ponerle nombre al error.</strong> <code>pop()</code> sin argumento saca el último elemento: la lista se comporta como una pila de platos, donde el último que se pone es el primero que se saca. En inglés: "last in, first out".',
          '<strong>Comparar con la vida real.</strong> En una cola de banco o de bodega, nadie aceptaría que atiendan primero al último que llegó. Una cola justa es "first in, first out". El alumno dice las dos frases en voz alta y explica cuál corresponde a cada programa.',
          '<strong>Probar la alternativa obvia.</strong> <code>preguntas.pop(0)</code> sobre una lista también funciona. El mentor pregunta por qué existe <code>deque</code> entonces: con una lista, sacar el primero obliga a mover todos los demás un lugar; con <code>deque</code>, no.',
          '<strong>Agregar una pregunta en medio.</strong> Reto: Kevin pregunta mientras el mentor atiende a Diego. ¿Dónde debe quedar? Al final de la cola, y con <code>deque</code> eso sale solo.',
          '<strong>Llevarlo a otro caso.</strong> Turnos de una impresora, pedidos de una tienda, mensajes de un chat: siempre que el orden importa, la estructura importa.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que vale de esta lección no es memorizar <code>deque</code>. Es darse cuenta de que dos programas que imprimen las mismas tres líneas pueden ser uno justo y otro injusto, y que la diferencia está en la estructura de datos elegida. Esa capacidad de leer qué hace realmente el código, y no solo si "funciona", es lo que buscamos en cada clase y lo que no aparece cuando uno se limita a copiar una respuesta.' }
      ]
    },
    {
      id: 'en-linea',
      eyebrow: 'Sin viajar por Lima',
      h2: '¿Por qué estudiar programación en línea desde Los Olivos?',
      lede: 'Porque muchas academias de programación quedan lejos de Lima Norte, y el viaje de ida y vuelta puede costar más tiempo que la clase. En línea, la clase empieza en el escritorio de la casa.',
      body: [
        { kind: 'two',
          leftH3: 'Los viajes',
          left: [
            'Para un escolar, ir a una clase al centro de Lima o a otro cono después del colegio significa llegar cansado y volver de noche. No damos minutos de viaje porque cada ruta es distinta; cada familia de Los Olivos sabe cuánto le toma la suya.',
            'Para un universitario que ya viaja todos los días a su facultad, sumar otro trayecto a la semana es justo lo que hace abandonar un curso.'
          ],
          rightH3: 'La conexión en casa',
          right: [
            'El boletín TIC del INEI de abril a junio de 2026 cuenta un 84,7 % de hogares limeños con internet, y señala a Lima Metropolitana como el área donde más subió el acceso frente a 2025: 4,3 puntos porcentuales.',
            'Lo que hace falta además es una computadora con teclado, cámara y micrófono. El celular sirve para conversar con el mentor, no para programar.'
          ] }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horario',
      h2: '¿A qué hora puedo tomar clases desde Los Olivos?',
      lede: 'A la hora que usted elija. Los mentores trabajan desde la India, que nos saca 10 horas y 30 minutos de ventaja los doce meses, así que solo hay que traducir el reloj.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cinco horas de Los Olivos en el reloj de la India (ejemplos para convertir, no un horario de clases)', head: ['En Los Olivos', 'En la India', 'Útil para'], rows: [
          ['6:00 a. m.', '4:30 p. m. (mismo día)', 'Universitarios antes de salir a la facultad'],
          ['9:30 a. m.', '8:00 p. m. (mismo día)', 'Escolares del turno tarde'],
          ['1:30 p. m.', '12:00 a. m. (medianoche)', 'Clases cortas al volver del colegio'],
          ['5:00 p. m.', '3:30 a. m. (día siguiente)', 'Escolares del turno mañana, ya almorzados'],
          ['9:00 p. m.', '7:30 a. m. (día siguiente)', 'Jóvenes que trabajan de día']
        ] },
        { kind: 'source', html: 'Para convertir usamos la base tzdata, que fija a Lima cinco horas detrás de UTC y a Kolkata cinco horas y media delante, sin cambios de estación; el reloj oficial del INACAL marca lo mismo. La tercera columna es sugerencia nuestra.' },
        { kind: 'p', mt: true, html: 'Un recordatorio sobre el idioma: todo se enseña en inglés. Según la medición EF EPI 2025, Perú ocupa el puesto 52 de 123 países con 519 puntos, en el nivel moderado, mientras que Lima llega a 555 y entra en el nivel alto. Para un escolar de Los Olivos que estudia inglés en el colegio, hablarlo dos veces por semana con un mentor sobre su propio código es práctica real, no un ejercicio de libro.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se ve el avance a lo largo del año?',
    lede: 'Cinco metas propias que usamos con escolares y universitarios. Cada una se demuestra con algo que el alumno hace solo.',
    table: { caption: 'Cinco metas de programación a lo largo de un año (nuestras)', head: ['Meta', 'Momento habitual', 'Lo que el alumno demuestra'], rows: [
      ['1. Predice', 'Primer bimestre', 'dice qué imprimirá un programa antes de ejecutarlo'],
      ['2. Corrige', 'Segundo bimestre', 'lee un error en inglés y lo arregla sin ayuda'],
      ['3. Elige estructuras', 'Tercer bimestre', 'sabe cuándo usar una lista, una cola o un diccionario, como en el ejemplo'],
      ['4. Resuelve con tiempo', 'Cuarto bimestre', 'resuelve problemas de algoritmos con un límite de tiempo'],
      ['5. Muestra', 'Fin de año', 'presenta en inglés un proyecto propio y su código']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pida a su hijo que le muestre su proyecto cada fin de bimestre, como si fuera una libreta de notas.',
      'Si también va a una academia preuniversitaria, cuide que tenga al menos un día libre en la semana.'
    ] },
    right: { h3: 'Para el alumno', ps: [
      'Guarde cada programa terminado en una carpeta con fecha. En 5° de secundaria, esa carpeta es su portafolio.',
      'Cuando algo funcione, pregúntese si funciona por la razón correcta.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Nueve cursos más para Los Olivos',
    lede: 'Dictados en vivo y en inglés, con un mentor fijo, en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PROL / SECUNDARIA / 01', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas con tiempo límite, al estilo de las olimpiadas.' },
        { code: 'PROL / SECUNDARIA / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Web completa para adolescentes', blurb: 'Página, servidor y base de datos.' },
        { code: 'PROL / SECUNDARIA / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Matemática de secundaria en inglés', blurb: 'Álgebra y funciones con explicaciones pausadas.' }
      ] },
      { num: 'II', h3: 'Universitarios y jóvenes', sub: 'Desde los 18 años', courses: [
        { code: 'PROL / JOVENES / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Lo que más se pregunta en entrevistas técnicas.' },
        { code: 'PROL / JOVENES / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git y GitHub', blurb: 'Su código ordenado y visible para otros.' },
        { code: 'PROL / JOVENES / 03', slug: 'mern-stack-development-masterclass-college', title: 'Desarrollo MERN', blurb: 'Aplicaciones web completas con JavaScript.' }
      ] },
      { num: 'III', h3: 'Niños', sub: 'De 6 a 12 años', courses: [
        { code: 'PROL / NIÑOS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para empezar', blurb: 'La lógica antes de teclear.' },
        { code: 'PROL / NIÑOS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con código', blurb: 'Programar dentro del juego favorito.' },
        { code: 'PROL / NIÑOS / 03', slug: 'python-ai-kids-masterclass', title: 'Python desde los 9 años', blurb: 'El primer lenguaje escrito, con IA sencilla.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo es una semana de clases con nosotros?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para escolares del turno tarde y universitarios.' },
      { time: 'Tarde', l: 'Para escolares del turno mañana.' },
      { time: 'Noche', l: 'Para jóvenes que trabajan.' }
    ],
    cells: [
      { h3: 'Un mentor durante todo el curso', p: 'Conoce su avance y sus dudas.' },
      { h3: 'Pantalla compartida', p: 'Ve su código en tiempo real y lo comenta con usted.' },
      { h3: 'Usted programa', p: 'El teclado es suyo; el mentor guía con preguntas.' },
      { h3: 'Proyectos por bimestre', p: 'Algo terminado que entra en su portafolio.' },
      { h3: 'Resumen a la familia', p: 'Tras las clases, qué se hizo y qué sigue.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte alumnos de edad cercana, o uno a uno.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros alumnos',
  projectsLede: 'Una muestra de lo que construyen; más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas de Google de alumnos y familias, sin editar y en inglés.',

  fees: {
    h2: 'Precios para familias de Los Olivos',
    lede: 'Mostramos el precio en dólares de Estados Unidos y lo cobramos con tarjeta. Su banco hace la conversión a su moneda, así que el cargo final puede variar ligeramente con el tipo de cambio de ese día.',
    free: ['Una clase de prueba gratuita', 'Recomendación del curso adecuado', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte alumnos de edad cercana', 'El mismo mentor en todo el curso', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['El alumno y su mentor', 'Plan según su meta', 'El horario que usted decida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación en Los Olivos: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todas las clases se dan en inglés, en vivo y por internet. Para los jóvenes de Los Olivos es una ventaja doble: aprenden a programar y practican hablar inglés en la misma hora. El mentor habla claro y repite. Lima tiene un nivel alto de inglés según el EF EPI 2025, con 555 puntos.' },
      { q: '¿Cuántos escolares viven en Los Olivos?', a: 'Según el Cuadro N.° 3 de los Censos Nacionales 2025 del INEI, en Los Olivos se censaron 27,111 niños de 6 a 11 años y 29,304 adolescentes de 12 a 17. El distrito tiene 362,039 habitantes en total.' },
      { q: '¿La programación sirve para el examen de admisión?', a: 'Ese examen se rinde en castellano y no lo preparamos; tampoco ofrecemos garantías de ingreso. Sí entrenamos razonamiento lógico y matemático en inglés, útil para cualquier prueba que exija pensar con orden.' },
      { q: '¿Qué es la certificación PCEP?', a: 'Es un examen de nivel inicial de Python que administra el Python Institute. Nuestro curso prepara para rendirlo; el examen se paga y se rinde aparte, en inglés.' },
      { q: '¿La Municipalidad de Los Olivos tiene talleres de programación?', a: 'En su página de gob.pe no encontramos ninguno. No tenemos relación con la municipalidad.' },
      { q: '¿Desde qué edad se puede empezar?', a: 'Desde los 6 años. Esta página se centra en secundaria y universidad, pero hay cursos para niños de primaria y para adultos de cualquier edad.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre Lima y la India hay 10 horas y 30 minutos de diferencia, sin cambios estacionales.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta y en dólares de Estados Unidos; su banco convierte el monto. La clase de prueba es gratis y no pide tarjeta.' },
      { q: '¿Las clases cuentan para el colegio?', a: 'No. Acompañan al colegio, pero no ponen notas ni reemplazan ningún curso. Al terminar, entregamos un certificado de finalización de Modern Age Coders, que no es un documento oficial del Ministerio de Educación.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Guías relacionadas',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-los-olivos-lima', label: 'Vacaciones útiles en Los Olivos', p: 'El verano, la robótica y la programación.' },
      { href: '/programacion-para-5to-de-secundaria', label: 'Programación para 5° de secundaria', p: 'Qué aprender en el último año del colegio.' },
      { href: '/peru-university-admission-exams-explained', label: 'Peru university admission exams explained', p: 'Los exámenes de admisión, explicados en inglés.' },
      { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Programación para universitarios', p: 'Cursos según la carrera.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El índice de guías para el Perú.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba desde Los Olivos',
    lede: 'En la clase de prueba el mentor saluda al alumno, le habla en un inglés simple, le plantea un reto pequeño y mira cómo lo resuelve. Luego le proponemos curso y formato; la decisión es suya.',
    readFirst: 'Si quiere leer antes, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> (cómo enseñamos) y <a class="ag-inline-link" href="/courses">All courses</a> (todos los cursos).',
    note: 'Damos clases en vivo y por internet, con mentores en la India y solo en inglés. Por WhatsApp respondemos también en castellano.',
    formNote: 'Gratis, sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para secundaria' },
        { href: '/courses/pcep-pcap-python-certification-course', label: 'Certificación PCEP' },
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java para adolescentes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/programacion-para-5to-de-secundaria', label: '5° de secundaria' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Universitarios' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'El primero que llega, el primero que pregunta'
  },

  personalityCss: `
.ag-root.ag-prol .ag-hero h1 { max-width: 23ch; letter-spacing: -0.01em; }
.ag-root.ag-prol .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-prol .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prol .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-prol .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad de Los Olivos note on gob.pe of 31 Jan 2025 and gob.pe searches of 10 Nov 2026; UNI admission 2026-2 page and PUCP guía del postulante (read 8 Nov 2026); INEI Boletín TIC II trimestre 2026; EF EPI 2025; tzdata and INACAL. The grade route, the UNI third column, the progress goals and the Python example are our own.',
    localProject: 'A fair queue for questions in class: three invented pupils ask in turn; list.pop() answers the last one first ("Mentor answers Kevin: error on line 4" first), collections.deque with popleft() answers in arrival order ("Mentor answers Diego: my loop never ends" first). Lesson family: stack versus queue, last in first out versus first in first out, and why deque beats list.pop(0).',
    requiredMentions: ['Mentor answers Diego: my loop never ends', 'Mentor answers Kevin: error on line 4', 'el verano olivense, entre robótica y código', 'Son más que en Santiago de Surco (52,359)', 'una de innovación pedagógica y una biblioteca -sala de estudios', '56,415 escolares', '137,468 personas', 'El primero que llega, el primero que pregunta', 'Salida del segundo intento'],
    sources: [
      { claim: 'Los Olivos population 362,039 (total), 343,232 censada, 18,807 omitida, and censada by age group; Lima Metropolitana censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'A three-storey pavilion with an innovation classroom and a library-study room for a public school, through participatory budgeting (Jan 2025).', url: 'https://www.gob.pe/institucion/munilosolivos/noticias/1134476-municipalidad-de-los-olivos-apoya-construyendo-pabellon-de-tres-pisos-con-aulas-del-i-e-20-de-abril' },
      { claim: 'UNI ordinary admission: three papers on three days; papers 1 aptitud académica and humanidades, 2 matemática, 3 física and química (2026-2).', url: 'https://admision.uni.edu.pe/admision2026-2/index.html' },
      { claim: 'Ley Universitaria as quoted by PUCP: public competition, places defined beforehand, at most once per term.', url: 'https://admision.pucp.edu.pe/guia-del-postulante' },
      { claim: 'Lima Metropolitana households with internet 84.7%, up 4.3 points on a year, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'CNEB: the TIC competency is transversal; no computing or programming area in the secondary timetable (facts-school FACTS 33, 39).', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Peru 519, rank 52 of 123, Moderate; Lima 555, High.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Admission results or exam preparation in Spanish: refused; the page says the exams are in Spanish, we do not prepare them and promise no entry.',
      'Job promises or career advice: refused.',
      'Any link with the Municipalidad de Los Olivos, a school, the UNI, the PUCP or an academia: none; the school in the note is not named and no officials are named.',
      'MINEDU\'s Fábrica de Programadores and robotics: left to the vacaciones útiles page, linked once.',
      'Commute minutes from Lima Norte: no primary source, so no figure.',
      'Soles prices (including the pavilion cost in the note), competitor prices or any typed fee: refused.'
    ]
  }
};

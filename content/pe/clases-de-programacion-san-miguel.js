// SHIP: market | San Miguel, Peru's first innovation district (GIID): from an idea to working code, teens and adults | graph search: depth-first finds a route, breadth-first finds the shortest
'use strict';
// Clases de programación en San Miguel (ag- Spanish district door, Peru cluster row PE143, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round; differs from vacaciones-utiles-de-programacion-san-miguel-lima, which was summer maths reinforcement
// with Python for ages 10 to 15): the San Miguel council's own 2026 notes describe a district that calls itself an
// innovation district: the first in Peru to join the GIID global network (June 2026), a school entrepreneurship programme
// for top public-school pupils of 4° and 5° de secundaria that included AI (August 2026), an extended-reality model of
// the Huaca Huantinamarca (September 2026) and an entrepreneurs' route (August 2026). The page answers what a teenager or
// adult in that district needs to turn an idea into working software, and teaches a route-finding search on a small map.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-san-miguel/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SAN MIGUEL 189301
//    89783 99518 179648 85024 94624 9653 4759 4894"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO SAN MIGUEL 179648 7130 11215
//    12886 32899 43351 34823 37344".
//  - Municipalidad Distrital de San Miguel on gob.pe (institucion/munisanmiguel; www.munisanmiguel.gob.pe did not connect on
//    2026-11-09, per the summer page):
//    n-1403684.txt, 8 Jun 2026: "el distrito ha logrado integrarse a la Red Global de Distritos de Innovación del Global
//      Institute on Innovation Districts (GIID), convirtiéndose en el primer distrito de innovación del Perú en formar parte";
//      "una red global conformada por más de 50 distritos de innovación de América, Europa, Medio Oriente y Asia-Pacífico";
//      "a través de la Subgerencia de Innovación, y la Pontificia Universidad Católica del Perú (PUCP)".
//    n-1431910.txt, 17 Aug 2026: "20 estudiantes destacados de 4.° y 5.° de secundaria recibieron una beca integral y
//      culminaron cuatro meses de formación"; "dirigida a los primeros puestos de instituciones educativas públicas del
//      distrito"; "formación especializada en emprendimiento, innovación, liderazgo, modelos de negocio, marketing, finanzas,
//      inteligencia artificial y comunicación"; "realizaron el pitch de sus emprendimientos".
//    n-1439177.txt, 3 Sep 2026: "presenta “Huantinamarca XR”, una experiencia de Realidad Extendida"; "La experiencia puede
//      explorarse desde celulares, tablets, navegadores web y dispositivos de Realidad Virtual"; "entre los años 1450 y 1470
//      d.C."; "LabXR".
//    n-1430446.txt, 13 Aug 2026: "Ruta FET (Fast Entrepreneur Trip)"; "se activaron aproximadamente 200 emprendedores y se
//      seleccionaron 100 emprendimientos beneficiarios". The soles figure in the note is not repeated.
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el 64,5% de los hogares del país contaba con servicio de
//    Internet. Por área de residencia, en Lima Metropolitana, el 84,7% de los hogares disponía del servicio; en el resto
//    urbano, el 66,2%; mientras que, en el área rural solo el 27,1% tenía acceso."
//  - EF EPI 2025 (ef_peru.txt): "EF EPI score : 519"; "Global average score : 488"; "Listening score: 499"; "Writing score:
//    514"; Lima 555.
//  - Time (timezone.tsv): Peru UTC-5 all year, India UTC+5:30.
//  - Neighbouring districts, plain text: Magdalena del Mar, Pueblo Libre, Cercado de Lima; in Callao, Bellavista and La Perla;
//    the Pacific.
// Our own calculations (python3 -I): 32899 / 179648 = 18.31% (18 to 29); 12886 / 179648 = 7.17% (12 to 17); 43351 /
//   179648 = 24.13% (30 to 44, the largest); 11215 + 12886 = 24101 aged 6 to 17; 12886 + 32899 = 45785 aged 12 to 29.
// Our own example (miguel_v1.py, miguel_v2.py), invented map, exact output: v1 (depth-first) "Route: casa > parque >
//   biblioteca > plaza > huaca" / "Steps: 4"; v2 (breadth-first with deque) "Route: casa > mercado > plaza > huaca" /
//   "Steps: 3".
// Lesson family: graphs as a dictionary of neighbour lists; depth-first search returns the first route it finds, breadth-
// first search (a queue and a visited set) returns a route with the fewest steps.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const MAPA = [
  'mapa = {',
  "    'casa': ['parque', 'mercado'],",
  "    'parque': ['casa', 'biblioteca'],",
  "    'biblioteca': ['parque', 'plaza'],",
  "    'plaza': ['biblioteca', 'huaca', 'mercado'],",
  "    'mercado': ['casa', 'plaza'],",
  "    'huaca': ['plaza'],",
  '}'
];

const V1 = MAPA.concat([
  '',
  'def buscar(inicio, meta, camino=None):',
  '    camino = (camino or []) + [inicio]',
  '    if inicio == meta:',
  '        return camino',
  '    for vecino in mapa[inicio]:',
  '        if vecino not in camino:',
  '            encontrado = buscar(vecino, meta, camino)',
  '            if encontrado:',
  '                return encontrado',
  '    return None',
  '',
  "ruta = buscar('casa', 'huaca')",
  "print('Route:', ' > '.join(ruta))",
  "print('Steps:', len(ruta) - 1)"
]).join('\n');

const OUT1 = ['Route: casa > parque > biblioteca > plaza > huaca', 'Steps: 4'].join('\n');

const V2 = [
  'from collections import deque',
  '# mapa as before',
  '',
  'def mas_corta(inicio, meta):',
  '    cola = deque([[inicio]])',
  '    vistos = {inicio}',
  '    while cola:',
  '        camino = cola.popleft()',
  '        if camino[-1] == meta:',
  '            return camino',
  '        for vecino in mapa[camino[-1]]:',
  '            if vecino not in vistos:',
  '                vistos.add(vecino)',
  '                cola.append(camino + [vecino])',
  '    return None',
  '',
  "ruta = mas_corta('casa', 'huaca')",
  "print('Route:', ' > '.join(ruta))",
  "print('Steps:', len(ruta) - 1)"
].join('\n');

const OUT2 = ['Route: casa > mercado > plaza > huaca', 'Steps: 3'].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en San Miguel' },
  slug: 'clases-de-programacion-san-miguel',
  code: 'psm',
  accent: '#9A282B',
  accentRationale: 'Clases de programación en San Miguel: a terracotta red #9A282B, the colour of the adobe of the Huaca Huantinamarca, warmer than the Surco brick and distinct from the San Miguel summer page; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en San Miguel',
  title: 'Clases de programación en San Miguel, en vivo y en inglés',
  description: 'Clases de programación en San Miguel para adolescentes, universitarios, emprendedores y niños: en vivo, en línea y en inglés, todo el año, de la idea al prototipo.',
  ogDescription: 'San Miguel se presenta como el primer distrito de innovación del Perú. Para pasar de una idea a un programa que funciona hace falta saber programar. Clases en vivo y en inglés.',
  twitterDescription: 'Programación e IA en vivo y en inglés para San Miguel: escolares, universitarios y emprendedores, todo el año.',
  pageName: 'Clases de programación en San Miguel',
  webPageDescription: 'Guía para vecinos de San Miguel que quieren aprender a programar durante el año, sobre todo adolescentes de secundaria, universitarios y emprendedores, y también niños, con clases en vivo, en línea y en inglés: lo que la municipalidad publica sobre su distrito de innovación, su escuela de emprendimiento escolar y su huaca en realidad extendida, la población por edades según los Censos Nacionales 2025 del INEI, el camino de una idea a un prototipo y una clase de ejemplo en Python, escrita por nosotros, sobre cómo encontrar la ruta más corta en un mapa.',
  courseDescription: 'Clases en vivo y en línea de programación, desarrollo de apps e inteligencia artificial para vecinos de San Miguel, desde niños hasta emprendedores, dictadas exclusivamente en inglés: Python, desarrollo web, apps, estructuras de datos, hackatones y agentes de IA, en grupos de quince a veinte o en sesiones individuales, todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en San Miguel',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#innovacion', label: 'Innovación' },
    { href: '#prototipo', label: 'De la idea al código' },
    { href: '#sanmiguelinos', label: 'Censo 2025' },
    { href: '#ruta', label: 'Ejemplo' },
    { href: '#horas', label: 'Hora' }
  ],
  eyebrow: 'San Miguel &middot; Distrito de innovación &middot; Programación todo el año',
  h1: 'Clases de programación en San Miguel: de la idea al prototipo',
  lede: 'San Miguel se presenta como un distrito de innovación: en 2026 su municipalidad anunció que es el primero del Perú en una red global de distritos de innovación, formó a escolares de colegios públicos en emprendimiento e inteligencia artificial y llevó una huaca del distrito a la realidad extendida. Todas esas ideas necesitan, tarde o temprano, a alguien que sepa programar. Esta página explica cómo aprender a hacerlo, en vivo y en inglés, si usted o su hijo viven en San Miguel.',
  secondaryCta: { href: '#prototipo', label: 'De una idea a un prototipo' },
  wa: 'Hola Modern Age Coders, vivo en San Miguel y me interesa aprender programación en inglés. ¿Puedo agendar una clase de prueba?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; las clases, siempre en inglés',
  spec: [
    ['Distrito', 'San Miguel, Lima Metropolitana'],
    ['Sobre todo', 'Secundaria, universitarios y emprendedores'],
    ['También', 'Niños desde los 6 años'],
    ['Modalidad', 'En vivo por internet, todo el año'],
    ['Formato', 'Grupo de quince a veinte o uno a uno'],
    ['Primer paso', 'Clase de prueba gratuita, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, puede aprender a programar viviendo en San Miguel: Modern Age Coders enseña en vivo, en línea y en inglés, de enero a diciembre. Un adolescente construye apps, webs y proyectos con IA permitida para su edad; los universitarios refuerzan estructuras de datos y desarrollo; los emprendedores aprenden lo necesario para armar un primer prototipo; los niños empiezan con bloques desde los 6 años. Un mentor desde la India enseña con un inglés pausado. Elija grupo o clases individuales, y la hora.',

  picks: {
    eyebrow: 'Tres cursos para crear',
    h2: 'Para el escolar con ideas, el universitario y el emprendedor',
    lede: 'Uno que lleva a un adolescente de la idea a un proyecto presentado, uno para construir apps completas y uno de inteligencia artificial generativa para mayores de 18.',
    items: [
      { course: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', code: 'PSM / 01', title: 'Hackatones para adolescentes', alt: 'Imagen del curso de preparación para hackatones para adolescentes', note: 'Para secundaria. Idear, programar y presentar un proyecto en poco tiempo, con trabajo en equipo y una demostración final en inglés.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'PSM / 02', title: 'Desarrollo de apps', alt: 'Imagen del curso de desarrollo de apps para adolescentes', note: 'Para adolescentes. Una app de verdad, de la pantalla de inicio a los datos guardados, pensada para que otra persona la use.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'PSM / 03', title: 'IA generativa', alt: 'Imagen del curso de IA generativa', note: 'Para universitarios y adultos. Modelos de lenguaje, instrucciones, recuperación de información y evaluación honesta de resultados.' }
    ]
  },

  sections: [
    {
      id: 'innovacion',
      eyebrow: 'Un distrito de innovación',
      h2: '¿Qué significa que San Miguel sea un distrito de innovación?',
      lede: 'Según la municipalidad, que en junio de 2026 San Miguel se integró, junto con la PUCP, a la Red Global de Distritos de Innovación del Global Institute on Innovation Districts (GIID), como el primer distrito del Perú en hacerlo. Esa red reúne a más de 50 distritos de varias regiones del mundo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuatro notas de 2026 de la Municipalidad de San Miguel sobre innovación (gob.pe)', head: ['Fecha', 'Qué anunció la municipalidad', 'A quién se dirige'], rows: [
          ['8 de junio de 2026', 'Incorporación a la red GIID como primer distrito de innovación del Perú, con la PUCP', 'Todo el distrito'],
          ['13 de agosto de 2026', 'Ruta FET para emprendedores: unos 200 activados y 100 emprendimientos seleccionados, con becas', 'Emprendedores'],
          ['17 de agosto de 2026', 'Escuela de Emprendimiento para Estudiantes: 20 escolares destacados de 4° y 5° de secundaria de colegios públicos, cuatro meses de formación que incluyó inteligencia artificial, cerrada con un pitch', 'Escolares de secundaria'],
          ['3 de setiembre de 2026', 'Huantinamarca XR: la huaca del distrito en realidad extendida, explorable desde celulares, tablets, navegadores web y visores de realidad virtual', 'Vecinos, estudiantes y familias']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de San Miguel, notas en gob.pe/institucion/munisanmiguel, leídas el 10 de noviembre de 2026. No repetimos montos en soles ni nombres de autoridades. Modern Age Coders no tiene ninguna relación con la municipalidad, la PUCP, el GIID ni los programas citados.' },
        { kind: 'p', mt: true, html: 'Lo interesante de estas notas es su público: escolares, emprendedores y vecinos, no solo especialistas. La escuela de emprendimiento, por ejemplo, terminó con estudiantes de secundaria presentando el pitch de sus proyectos. Un pitch convence más cuando viene con un prototipo que funciona, aunque sea pequeño, y para eso hace falta programar.' }
      ]
    },
    {
      id: 'prototipo',
      eyebrow: 'De la idea al código',
      h2: '¿Cómo se pasa de una idea a un prototipo que funciona?',
      lede: 'Por etapas cortas, cada una con algo que se puede mostrar. No hace falta saberlo todo para empezar; hace falta saber lo suficiente para construir la siguiente pieza.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cinco etapas de una idea a un prototipo (método nuestro)', head: ['Etapa', 'Qué se hace', 'Qué se aprende de programación'], rows: [
          ['1. Escribir la idea en tres frases', 'Quién la usa, qué problema resuelve, qué hace primero', 'Descomponer un problema en pasos'],
          ['2. Dibujar las pantallas', 'Bocetos en papel de lo que verá el usuario', 'Entradas, salidas y estados'],
          ['3. Una versión que hace una sola cosa', 'Un programa pequeño, sin adornos', 'Variables, condiciones, funciones'],
          ['4. Guardar datos', 'Que la app recuerde lo que pasó', 'Listas, diccionarios, archivos o una base de datos'],
          ['5. Probar con otra persona', 'Alguien de afuera la usa y opina', 'Pruebas, errores reales y mejoras']
        ] },
        { kind: 'source', html: 'Método de Modern Age Coders para proyectos de alumnos. No ofrecemos asesoría de negocios, financiamiento ni incubación; enseñamos a programar el prototipo.' },
        { kind: 'two', mt: true,
          leftH3: 'Para un adolescente',
          left: [
            'La etapa 3 suele llegar en pocas semanas. Un escolar de 3° o 4° de secundaria con una idea clara puede tener una versión mínima de su app o su web antes de terminar un bimestre.',
            'La inteligencia artificial entra con reglas: herramientas permitidas para su edad, y cada línea sugerida se lee y se explica antes de usarse.'
          ],
          rightH3: 'Para un adulto o emprendedor',
          right: [
            'Muchos adultos llegan con la idea ya hecha y necesitan entender qué pedirle a un desarrollador, o construir ellos mismos la primera versión. Ambas cosas se aprenden.',
            'El curso se arma alrededor de su proyecto: cada clase avanza una pieza, y el mentor revisa su código como lo haría un socio técnico.'
          ] }
      ]
    },
    {
      id: 'sanmiguelinos',
      eyebrow: 'San Miguel en el censo',
      h2: '¿Cuántos jóvenes viven en San Miguel?',
      lede: 'San Miguel tiene 189,301 habitantes según los Censos Nacionales 2025 del INEI. Su grupo de 18 a 29 años pesa casi lo mismo que en el conjunto de Lima: es un distrito con muchos universitarios y primeros empleos.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Edades de los sanmiguelinos censados en 2025, según el INEI', head: ['Grupo de edad', 'Sanmiguelinos censados', 'Parte del total censado'], rows: [
          ['0 a 5', '7,130', '4.0 %'],
          ['6 a 11', '11,215', '6.2 %'],
          ['12 a 17', '12,886', '7.2 %'],
          ['18 a 29', '32,899', '18.3 %'],
          ['30 a 44', '43,351', '24.1 %'],
          ['45 a 59', '34,823', '19.4 %'],
          ['60 y más', '37,344', '20.8 %'],
          ['Total censado', '179,648', '100 %']
        ] },
        { kind: 'source', html: 'Las edades salen del Cuadro N.° 3 del censo 2025 del INEI para Lima Metropolitana, que solo cubre a la población censada; el total de 189,301 habitantes sale del Cuadro N.° 1 y suma 9,653 personas omitidas. Porcentajes: cálculo propio.' },
        { kind: 'three', mt: true, cells: [
          { h3: '45,785 de 12 a 29 años', p: 'Sumando adolescentes y jóvenes (cálculo nuestro). Es la edad en que una idea puede convertirse en un proyecto, una carrera o un emprendimiento.' },
          { h3: '24,101 escolares', p: 'De 6 a 17 años, sumando dos grupos. A los primeros puestos de los colegios públicos del distrito apuntó la escuela de emprendimiento municipal de 2026.' },
          { h3: '43,351 de 30 a 44', p: 'El grupo más grande. Adultos que trabajan, emprenden o quieren cambiar de rumbo, y que rara vez tienen tiempo para trasladarse a clases.' }
        ] },
        { kind: 'p', mt: true, html: 'San Miguel limita con Magdalena del Mar, Pueblo Libre y el Cercado de Lima, y del lado del Callao con Bellavista y La Perla, además del mar. La clase en línea llega igual a cualquiera de esos distritos.' }
      ]
    },
    {
      id: 'por-edad',
      eyebrow: 'Por edad',
      h2: '¿Qué curso conviene según la edad?',
      lede: 'Es la orientación que damos a quien nos escribe desde San Miguel; en la clase de prueba el mentor la confirma o la cambia.',
      body: [
        { kind: 'table', numCols: [], caption: 'Orientación por edad (nuestra)', head: ['Edad', 'Por dónde empezar', 'Un proyecto posible'], rows: [
          ['6 a 9 años', 'Bloques y razonamiento', 'Un cuento animado con decisiones del lector'],
          ['9 a 12 años', 'Python o Scratch avanzado', 'Un juego de laberinto con salida y trampas'],
          ['13 a 15 años', 'Python y desarrollo web', 'Una web que muestra un lugar del distrito'],
          ['16 a 17 años', 'Apps, datos o preparación para hackatones', 'Un prototipo con pitch en inglés'],
          ['Universitarios', 'Estructuras de datos, desarrollo full stack', 'Una aplicación con pruebas y despliegue'],
          ['Adultos y emprendedores', 'Python, web o IA generativa', 'La primera versión de su propia herramienta']
        ] },
        { kind: 'source', html: 'Tabla elaborada por Modern Age Coders. Para menores de 18 años solo usamos herramientas de IA permitidas para su edad.' },
        { kind: 'p', mt: true, html: 'Si su hijo tiene entre 10 y 15 años y lo que necesita es reforzar matemática en el verano, hay una guía sobre <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-miguel-lima">el verano sanmiguelino de matemática y Python</a>. Para un adolescente que ya quiere crear, la guía de <a class="ag-inline-link" href="/crear-apps-curso-para-adolescentes-peru">crear apps, curso para adolescentes</a> entra en detalle; y para quien se interesa por la inteligencia artificial, la de <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">IA para adolescentes</a>.' }
      ]
    },
    {
      id: 'ruta',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo encuentra un programa la ruta más corta en un mapa?',
      lede: 'Recorriendo el mapa por capas, como las ondas en el agua. El ejercicio es nuestro y el mapa es inventado: seis lugares (una casa, un parque, una biblioteca, una plaza, un mercado y una huaca) unidos por caminos. Lo usamos con escolares desde 3° de secundaria y con universitarios.',
      body: [
        { kind: 'code', label: 'Primer intento: buscar en profundidad', lang: 'Python', code: V1, note: 'El mapa es un diccionario: cada lugar tiene la lista de lugares vecinos. La función prueba el primer vecino, y desde ahí el siguiente, hasta llegar o volver atrás.' },
        { kind: 'code', label: 'Resultado del primer intento', lang: 'Salida', code: OUT1, note: 'Salida exacta con python3. Llega a la huaca, pero en 4 pasos. ¿Hay una ruta más corta?' },
        { kind: 'code', label: 'Segundo intento: buscar en anchura', lang: 'Python', code: V2, note: 'Ahora se usa una cola: primero se miran todos los lugares a un paso, luego todos los que están a dos, y así. El conjunto <code>vistos</code> evita pasar dos veces por el mismo sitio.' },
        { kind: 'code', label: 'Resultado del segundo intento', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3. La ruta por el mercado tiene 3 pasos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Dibujar el mapa primero.</strong> El alumno dibuja los seis lugares y sus caminos en papel. Viendo el dibujo, la ruta casa, mercado, plaza, huaca salta a la vista; el reto es que el programa también la encuentre.',
          '<strong>Entender por qué falla el primero.</strong> La búsqueda en profundidad sigue el primer vecino de la lista, el parque, y no mira alternativas mientras pueda avanzar. Encuentra una ruta, no la más corta. Si se cambia el orden de los vecinos de la casa, el resultado cambia: mala señal para un algoritmo.',
          '<strong>Decirlo en inglés.</strong> "Depth-first goes deep along one path; breadth-first looks at everything one step away, then two steps away." Dos frases que resumen dos algoritmos clásicos.',
          '<strong>Probar un caso sin salida.</strong> Reto: agregar un lugar sin caminos y pedir la ruta hasta él. Las dos funciones deben devolver <code>None</code>; el alumno lo comprueba en lugar de suponerlo.',
          '<strong>Conectarlo con el mundo.</strong> Las apps de mapas, las redes de amigos y los recorridos de un museo virtual usan ideas de este tipo. La búsqueda en anchura es la base de muchas de ellas.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que deja esta lección es una pregunta que sirve siempre: ¿mi programa encontró la respuesta o solo una respuesta? Una herramienta de IA puede escribir cualquiera de las dos funciones; saber cuál de las dos garantiza lo que uno necesita es trabajo de quien programa.' }
      ]
    },
    {
      id: 'desde-casa',
      eyebrow: 'En línea',
      h2: '¿Para qué tomar la clase en línea si vivo en San Miguel?',
      lede: 'Para no sumar otro trayecto a la semana. San Miguel queda entre el centro de Lima y el Callao, y casi cualquier academia exige cruzar avenidas cargadas a la hora de salida.',
      body: [
        { kind: 'two',
          leftH3: 'El tiempo',
          left: [
            'Un escolar que sale del colegio, almuerza y luego viaja a una clase llega cansado. Un universitario que ya va y viene de su facultad no quiere un viaje más. No damos minutos de traslado porque dependen de cada ruta; cada familia sabe los suyos.',
            'En casa, la clase empieza al conectarse, y el proyecto queda en la misma computadora para seguir después.'
          ],
          rightH3: 'La conexión',
          right: [
            'Las cifras del INEI para abril a junio de 2026 marcan la brecha: internet en casa para el 84,7 % de los hogares de Lima Metropolitana, el 66,2 % en las demás ciudades y apenas el 27,1 % en el campo.',
            'Vivir en Lima es una ventaja que muchos peruanos no tienen. Lo que falta es usarla para crear: un prototipo, una app, una idea que funcione.'
          ] }
      ]
    },
    {
      id: 'horas',
      eyebrow: 'Horario',
      h2: '¿Qué hora es en la India cuando en San Miguel es de tarde?',
      lede: 'Ya es madrugada del día siguiente. El reloj indio adelanta al peruano 10 horas y 30 minutos, invierno o verano; conviene mirar la tabla antes de elegir, aunque cualquier hora es posible.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias entre San Miguel y la India (ejemplos de conversión, no horas fijas)', head: ['San Miguel', 'India', 'Para quién'], rows: [
          ['8:00 a. m.', '6:30 p. m. del mismo día', 'Universitarios del turno tarde'],
          ['11:00 a. m.', '9:30 p. m. del mismo día', 'Emprendedores con la mañana libre'],
          ['4:00 p. m.', '2:30 a. m. del día siguiente', 'Escolares después del almuerzo'],
          ['7:30 p. m.', '6:00 a. m. del día siguiente', 'Adultos que trabajan de día']
        ] },
        { kind: 'source', html: 'Fuente del desfase: tzdata, que no registra cambios de hora en Lima desde 1994 ni en Kolkata; la hora legal peruana, a cargo del INACAL, coincide. Tercera columna: sugerencia nuestra.' },
        { kind: 'p', mt: true, html: 'Todo se enseña en inglés, y el punto de partida no es malo: el EF EPI 2025 da al Perú 519 puntos, por encima del promedio mundial de 488, con 499 en comprensión auditiva y 514 en escritura; Lima llega a 555. Para un adolescente que prepara un pitch, presentar su prototipo en inglés ante su mentor es un ensayo que vale doble.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota que el proyecto avanza?',
    lede: 'Con cinco hitos propios que sirven igual para un escolar con una idea que para un emprendedor.',
    table: { caption: 'Cinco hitos de un alumno que construye su propio proyecto (nuestros)', head: ['Hito', 'Momento habitual', 'Lo que ya hace'], rows: [
      ['1. Describe su idea en pasos', 'Primeras semanas', 'convierte una idea en una lista de tareas programables'],
      ['2. Hace funcionar una pieza', 'Primer y segundo mes', 'tiene una versión mínima que hace una sola cosa bien'],
      ['3. Elige el algoritmo', 'Tercer mes', 'sabe cuándo basta una solución y cuándo necesita la más corta, como en el ejemplo'],
      ['4. Prueba con usuarios', 'Cuarto a sexto mes', 'deja que otra persona use su prototipo y corrige lo que falla'],
      ['5. Presenta', 'Desde el sexto mes', 'muestra y explica en inglés su proyecto funcionando']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pregunte por el hito, no por las horas. Un hijo en el hito 2 con algo que funciona lleva más camino recorrido que uno con muchas ideas y nada probado.',
      'Ofrézcase como el primer usuario de su prototipo. Su opinión vale.'
    ] },
    right: { h3: 'Para quien aprende', ps: [
      'Antes de agregar algo nuevo, asegúrese de que lo anterior funciona.',
      'Cuando el programa encuentre una respuesta, pregúntese si es la que necesitaba.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Nueve cursos más para San Miguel',
    lede: 'Funcionan igual que los de arriba: tiempo real, inglés, un mentor fijo y la opción de grupo o de clase a solas.',
    bands: [
      { num: 'I', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PSM / SECUNDARIA / 01', slug: 'python-complete-masterclass-teens', title: 'Python desde lo básico', blurb: 'La base para cualquier proyecto propio.' },
        { code: 'PSM / SECUNDARIA / 02', slug: 'backend-coding-masterclass-for-teens', title: 'Backend para adolescentes', blurb: 'Servidores, datos y lógica detrás de una app.' },
        { code: 'PSM / SECUNDARIA / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Aprendizaje automático visual', blurb: 'Modelos con bloques visuales, sin código al inicio.' }
      ] },
      { num: 'II', h3: 'Universitarios y adultos', sub: 'Desde los 18 años', courses: [
        { code: 'PSM / ADULTOS / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web full stack', blurb: 'Del diseño al servidor y la base de datos.' },
        { code: 'PSM / ADULTOS / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Grafos, colas, búsquedas y más.' },
        { code: 'PSM / ADULTOS / 03', slug: 'hackathon-prep-for-adults-professionals-coding-ai-innovation-course', title: 'Hackatones para profesionales', blurb: 'Construir y presentar un prototipo en equipo.' }
      ] },
      { num: 'III', h3: 'Niños', sub: 'De 6 a 12 años', courses: [
        { code: 'PSM / NIÑOS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programar con bloques', blurb: 'La lógica antes del teclado.' },
        { code: 'PSM / NIÑOS / 02', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Ideas en un hackatón infantil', blurb: 'Pensar, construir y presentar, de 8 a 12 años.' },
        { code: 'PSM / NIÑOS / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una primera app armada con bloques.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo avanza un curso con un mentor en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para universitarios y emprendedores.' },
      { time: 'Tarde', l: 'Para escolares, después del colegio.' },
      { time: 'Noche', l: 'Para adultos que trabajan.' }
    ],
    cells: [
      { h3: 'Un mentor constante', p: 'El mismo de principio a fin, que conoce su proyecto.' },
      { h3: 'Código a la vista', p: 'Comparte su pantalla y el mentor revisa con usted.' },
      { h3: 'Su proyecto al centro', p: 'Las clases avanzan su idea, pieza por pieza.' },
      { h3: 'Entregas visibles', p: 'Cada etapa termina con algo que funciona.' },
      { h3: 'Resumen escrito', p: 'Tras las sesiones, lo hecho y lo próximo.' },
      { h3: 'Grupo o uno a uno', p: 'Quince a veinte alumnos afines, o solo usted.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros alumnos',
  projectsLede: 'Lo que han construido algunos estudiantes. La galería completa, en inglés, está en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Reseñas de Google de alumnos y familias, tal cual las escribieron, en inglés.',

  fees: {
    h2: 'Precios para vecinos de San Miguel',
    lede: 'El precio aparece en dólares de Estados Unidos y se paga con tarjeta. Su banco convierte el importe, de modo que la cifra final depende de la cotización que aplique.',
    free: ['Una clase de prueba gratis', 'Orientación sobre su proyecto o curso', 'Sin tarjeta ni compromiso'],
    group: ['Quince a veinte alumnos de edad parecida', 'Un mismo mentor durante el curso', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Usted y su mentor, solos', 'Clases alrededor de su proyecto', 'Horario a su elección']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación en San Miguel: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se dictan en inglés, en vivo y por internet, para todas las edades. Para muchos alumnos de San Miguel es parte del atractivo: programan y practican inglés a la vez, algo útil para presentar un proyecto. El mentor habla despacio y repite. En el EF EPI 2025, Lima tiene un nivel alto de inglés, con 555 puntos.' },
      { q: '¿Qué es el distrito de innovación de San Miguel?', a: 'Según la municipalidad, en junio de 2026 San Miguel se integró con la PUCP a la red global de distritos de innovación del GIID, como el primero del Perú. Modern Age Coders es ajena a la municipalidad, a la PUCP y al GIID.' },
      { q: '¿Cuántos jóvenes viven en San Miguel?', a: 'El censo del INEI de 2025 (Cuadro N.° 3) registra en San Miguel 12,886 adolescentes de 12 a 17 años y 32,899 jóvenes de 18 a 29. El distrito tiene 189,301 habitantes.' },
      { q: '¿Puedo aprender a programar para construir mi propio emprendimiento?', a: 'Sí, aprendiendo lo necesario para una primera versión: una web, una app sencilla o una herramienta con datos. No damos asesoría de negocios ni financiamiento; enseñamos a programar el prototipo.' },
      { q: '¿Mi hijo puede usar inteligencia artificial en las clases?', a: 'Sí, con herramientas permitidas para su edad y con una regla: cada línea que sugiera la IA se lee y se explica antes de usarse. Las herramientas que exigen 18 años no se usan con menores.' },
      { q: '¿Desde qué edad se puede empezar?', a: 'Desde los 6 años con bloques. Esta página se centra en secundaria, universidad y emprendedores, pero hay cursos para todas las edades.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre Perú y la India hay diez horas y media de diferencia, fija durante el año.' },
      { q: '¿Cuál es el medio de pago?', a: 'Una tarjeta, con cargo en la moneda de Estados Unidos; el cambio lo aplica su banco. Probar la primera clase no cuesta nada y no exige ningún dato de pago.' },
      { q: '¿Las clases dan algún título?', a: 'No. Al cerrar cada curso emitimos una constancia propia de que el alumno lo terminó; no la respalda el Ministerio de Educación ni universidad alguna.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Para seguir leyendo',
    lede: 'Más páginas del Perú, unas en castellano y otras en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-san-miguel-lima', label: 'Vacaciones útiles en San Miguel', p: 'Matemática y Python para el verano.' },
      { href: '/crear-apps-curso-para-adolescentes-peru', label: 'Crear apps para adolescentes', p: 'De la idea a una app publicada.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes', p: 'Entender y usar la IA con criterio.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas las guías del Perú.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así enseñamos, en inglés.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo.' }
    ]
  },

  start: {
    h2: 'Agende una clase de prueba desde San Miguel',
    lede: 'Traiga su idea, o solo su curiosidad. Durante la prueba, el mentor charla en un inglés llano, le plantea un desafío corto y observa su forma de abordarlo. Después le sugerimos un curso; usted decide.',
    readFirst: 'Lecturas previas en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Recuerde que enseñamos en tiempo real desde la India, por videollamada y solo en inglés. Si escribe por WhatsApp, le contestamos en castellano.',
    formNote: 'Gratis y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Para crear', links: [
        { href: '/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course', label: 'Hackatones para adolescentes' },
        { href: '/courses/complete-app-development-masterclass-for-teens', label: 'Apps para adolescentes' },
        { href: '/courses/complete-generative-ai-masterclass-college', label: 'IA generativa' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/crear-apps-curso-para-adolescentes-peru', label: 'Crear apps' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Una respuesta no es siempre la respuesta'
  },

  personalityCss: `
.ag-root.ag-psm .ag-hero h1 { max-width: 23ch; letter-spacing: -0.012em; }
.ag-root.ag-psm .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-psm .ag-table caption { text-align: left; }
.ag-root.ag-psm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-psm .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad Distrital de San Miguel notes on gob.pe of 8 Jun, 13 Aug, 17 Aug and 3 Sep 2026; INEI Boletín TIC II trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 10 November 2026. The idea-to-prototype method, the age table, the milestones and the Python example (with its invented map) are our own.',
    localProject: 'Finding a route on an invented map of six places (casa, parque, biblioteca, plaza, mercado, huaca) stored as a dictionary of neighbours: depth-first search returns "Route: casa > parque > biblioteca > plaza > huaca" in 4 steps, breadth-first search with a deque and a visited set returns "Route: casa > mercado > plaza > huaca" in 3. Lesson family: graph search, depth-first versus breadth-first, a route versus the shortest route.',
    requiredMentions: ['Route: casa &gt; mercado &gt; plaza &gt; huaca', 'Route: casa &gt; parque &gt; biblioteca &gt; plaza &gt; huaca', 'Steps: 3', 'Red Global de Distritos de Innovación', 'Huantinamarca XR', 'Escuela de Emprendimiento para Estudiantes', '45,785 de 12 a 29 años', 'Una respuesta no es siempre la respuesta', 'por encima del promedio mundial de 488'],
    sources: [
      { claim: 'San Miguel population 189,301 (total), 179,648 censada, 9,653 omitida, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'San Miguel joins the GIID global network of innovation districts with PUCP, first in Peru; network of more than 50 districts (June 2026).', url: 'https://www.gob.pe/institucion/munisanmiguel/noticias/1403684-san-miguel-se-posiciona-en-el-mundo-como-el-primer-distrito-de-innovacion-del-peru-reconocido-por-la-red-global-del-giid' },
      { claim: 'Escuela de Emprendimiento para Estudiantes: 20 top pupils of 4° and 5° de secundaria from public schools, four months, training including AI, closing pitch (Aug 2026).', url: 'https://www.gob.pe/institucion/munisanmiguel/noticias/1431910-san-miguel-impulsa-el-emprendimiento-escolar-para-generar-nuevas-oportunidades-para-jovenes-de-colegios-publicos' },
      { claim: 'Huantinamarca XR with LabXR PUCP, explorable from phones, tablets, browsers and VR (Sep 2026).', url: 'https://www.gob.pe/institucion/munisanmiguel/noticias/1439177-san-miguel-lleva-su-patrimonio-al-futuro-municipalidad-y-pucp-presentan-huantinamarca-xr' },
      { claim: 'Ruta FET: about 200 entrepreneurs activated and 100 ventures selected (Aug 2026).', url: 'https://www.gob.pe/institucion/munisanmiguel/noticias/1430446-san-miguel-impulsa-nuevas-oportunidades-para-emprendedores-a-traves-de-la-ruta-fet' },
      { claim: 'Household internet II trimestre 2026: Lima Metropolitana 84.7%, rest of urban Peru 66.2%, rural 27.1%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, global average 488, listening 499, writing 514; Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any link with the Municipalidad de San Miguel, the PUCP, the GIID, ProInnóvate or the programmes in the notes: none; no officials named.',
      'The Ruta FET funding amount in soles: not repeated (no soles figures on Peru pages).',
      'Business advice, incubation or funding: refused; we teach programming only.',
      '18+ AI tools for under-18s: refused; teen courses use age-appropriate tools.',
      'Summer maths reinforcement, ENLA results and neighbour population table: left to the vacaciones útiles page, linked once.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

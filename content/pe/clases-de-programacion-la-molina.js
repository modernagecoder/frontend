// SHIP: market | La Molina learns from 14 to 60 in three shifts; programming for students, mid-career adults and retirees | short-circuit and/or: guard order, then the missing third case
'use strict';
// Clases de programación en La Molina (ag- Spanish district door, Peru cluster row PE139, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round; differs from vacaciones-utiles-de-programacion-la-molina-lima, which compared computación with
// programación for a summer and leaned to secundaria): La Molina is a district where adults keep studying. The council's
// own notes describe a municipal CETPRO with students from 14 to 60 in three shifts from 8 a.m. to 8 p.m., workshops for
// "niños, adolescentes, jóvenes y adultos" in autumn and winter, and a library recognised by CEPLAN. The census shows more
// people of 45 to 59 and 60 and over than the Lima average. So the page leads with adult learners (university, mid-career,
// retirement), then children and teens, and teaches a guard condition that every adult who tracks a team needs.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-la-molina/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO LA MOLINA 151360 71577
//    79783 143899 67902 75997 7461 3675 3786"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO LA MOLINA 143899 5042 8435 10681 24793
//    29245 30484 35219"; "LIMA METROPOLITANA 9600043 555239 818096 867253 1800348 2322499 1744864 1491744".
//  - Municipalidad de La Molina on gob.pe (institucion/munilamolina):
//    n-1277486.txt, 30 Oct 2025: "CETPRO La Molina celebró esta fecha"; "Sus 385 estudiantes que participan este 2025";
//      "las cifras se duplicaron respecto a años anteriores"; "Centro de Educación Técnico-Productiva Municipal"; "Los
//      principales cursos que se transmiten son Estética Personal, Computación y Textilería"; "existiendo alumnos entre los
//      14 y 60 años, quienes estudian en tres turnos que abarcan de 8 a. m. a 8 p. m." Officials' names not repeated.
//    n-1162314.txt, 6 May 2025: "los Molitalleres especialmente preparados por nuestra municipalidad y puestos a disposición
//      de niños, adolescentes, jóvenes y adultos"; "MoliTalleres Otoño-Invierno"; "En talleres educativos se ofrecen;
//      manualidades kids, quechua para niños, diseño creativo y computación básica." Addresses and phones not repeated.
//    n-1060014.txt, 18 Nov 2024: "La Biblioteca Municipal «Plaza Bicentenario» de La Molina ha sido seleccionada como una de
//      las 20 mejores iniciativas innovadoras"; "Centro Nacional de Planeamiento Estratégico (CEPLAN)"; "visitas guiadas a
//      estudiantes de nivel inicial y primaria".
//    The April 2026 MolTalleres de computación note is the summer page's material and is not repeated here.
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "41 a 59 años 76,5 79,9 81,9 86,0" (used); "60 y más 40,8 47,3 50,2
//    56,7"; "el 87,4% destina su uso exclusivamente a actividades del hogar, como estudios, trabajos académicos"; "el 11,3%
//    de los hogares combina su uso entre actividades domésticas y laborales".
//  - EF EPI 2025 (ef_peru.txt): Lima 555; Peru speaking 480.
//  - Time (timezone.tsv): Peru UTC-5 all year, India UTC+5:30.
//  - Neighbouring districts, plain text: Ate, Santiago de Surco, Cieneguilla, Pachacámac.
// Our own calculations (python3 -I): 45 a 59: 30484 / 143899 = 21.18% vs Lima 1744864 / 9600043 = 18.18%; 60 y más:
//   35219 / 143899 = 24.47% vs 15.54%; 18 a 29: 24793 / 143899 = 17.23% vs 18.75%; 18 and over: 24793 + 29245 + 30484 +
//   35219 = 119741, 119741 / 143899 = 83.21%; 6 a 17: 8435 + 10681 = 19116.
// Our own example (molina_v1.py, molina_v2.py, molina_v3.py), exact output: v1 "Ana on track" then "ZeroDivisionError:
//   division by zero"; v2 "Ana on track" / "Luis needs a call" / "Rosa needs a call"; v3 "Ana on track" / "Luis not started
//   yet" / "Rosa needs a call".
// Lesson family: short-circuit evaluation of and; the guard must come first; a guard that avoids the crash can still put a
// case in the wrong bucket, so name the third case explicitly.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const DATA = "alumnos = [('Ana', 8, 7), ('Luis', 0, 0), ('Rosa', 6, 3)]";

const V1 = [
  DATA,
  '',
  'for nombre, programadas, asistidas in alumnos:',
  '    if asistidas / programadas >= 0.75 and programadas > 0:',
  "        print(nombre, 'on track')",
  '    else:',
  "        print(nombre, 'needs a call')"
].join('\n');

const OUT1 = [
  'Ana on track',
  'Traceback (most recent call last):',
  '  ...',
  'ZeroDivisionError: division by zero'
].join('\n');

const V2 = [
  DATA,
  '',
  'for nombre, programadas, asistidas in alumnos:',
  '    if programadas > 0 and asistidas / programadas >= 0.75:',
  "        print(nombre, 'on track')",
  '    else:',
  "        print(nombre, 'needs a call')"
].join('\n');

const OUT2 = ['Ana on track', 'Luis needs a call', 'Rosa needs a call'].join('\n');

const V3 = [
  DATA,
  '',
  'for nombre, programadas, asistidas in alumnos:',
  '    if programadas == 0:',
  "        print(nombre, 'not started yet')",
  '    elif asistidas / programadas >= 0.75:',
  "        print(nombre, 'on track')",
  '    else:',
  "        print(nombre, 'needs a call')"
].join('\n');

const OUT3 = ['Ana on track', 'Luis not started yet', 'Rosa needs a call'].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en La Molina' },
  slug: 'clases-de-programacion-la-molina',
  code: 'prmo',
  accent: '#784C34',
  accentRationale: 'Clases de programación en La Molina: a walnut brown #784C34, the colour of the dry hills that close the valley to the east, softer and browner than the La Molina summer page; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en La Molina',
  title: 'Clases de programación en La Molina, en vivo y en inglés',
  description: 'Clases de programación en La Molina para universitarios, adultos, jubilados, niños y adolescentes: en vivo, en línea y en inglés, todo el año y en grupo o a solas.',
  ogDescription: 'En La Molina se estudia de los 14 a los 60 años, en tres turnos. Programación en vivo y en inglés para universitarios, profesionales y jubilados, y también para sus hijos.',
  twitterDescription: 'Programación en vivo y en inglés para adultos y familias de La Molina, todo el año y a la hora que usted escoja.',
  pageName: 'Clases de programación en La Molina',
  webPageDescription: 'Guía para vecinos de La Molina que quieren aprender a programar durante el año, sobre todo adultos (universitarios, profesionales a mitad de carrera, jubilados) y también niños y adolescentes, con clases en vivo, en línea y en inglés: lo que la municipalidad publica sobre su CETPRO, sus talleres y su biblioteca, la edad de los molinenses según los Censos Nacionales 2025 del INEI y una clase de ejemplo en Python, escrita por nosotros, sobre condiciones que evitan una división entre cero.',
  courseDescription: 'Clases en vivo y en línea de programación, automatización e inteligencia artificial para vecinos de La Molina, desde los 6 años hasta la jubilación, dictadas únicamente en inglés: Python, C++, desarrollo de juegos, análisis de datos y agentes de IA, en grupos de quince a veinte o en sesiones individuales, todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en La Molina',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#adultos', label: 'Adultos' },
    { href: '#molinenses', label: 'Censo 2025' },
    { href: '#hijos', label: 'Niños y adolescentes' },
    { href: '#condicion', label: 'Ejemplo' },
    { href: '#turnos', label: 'Hora' }
  ],
  eyebrow: 'La Molina &middot; Programación para adultos y familias &middot; Todo el año',
  h1: 'Clases de programación en La Molina, también para adultos',
  lede: 'En La Molina se estudia a cualquier edad. El centro técnico de la municipalidad tiene alumnos de 14 a 60 años repartidos en tres turnos, y más de ocho de cada diez molinenses censados son mayores de edad. Por eso esta página empieza por los adultos: la universitaria que necesita Python para su tesis, el profesional que quiere automatizar su trabajo, el jubilado que decide entender la tecnología. Después hablamos de los hijos, y al final mostramos una lección real que cualquier adulto que coordina un equipo agradecerá.',
  secondaryCta: { href: '#adultos', label: 'Ver la ruta para adultos' },
  wa: 'Hola Modern Age Coders, vivo en La Molina y quiero aprender programación en inglés. ¿Puedo tomar una clase de prueba?',
  heroNote: 'En vivo desde 2020 &middot; más de 10,000 estudiantes en todo el mundo &middot; clases solo en inglés',
  spec: [
    ['Distrito', 'La Molina, Lima Metropolitana'],
    ['Adultos', 'Universitarios, profesionales y jubilados'],
    ['Menores', 'Desde los 6 años, primaria y secundaria'],
    ['Cómo', 'En vivo por videollamada, desde casa'],
    ['Formato', 'Grupo de quince a veinte, o sesiones a solas'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, puede aprender a programar en La Molina siendo adulto, y también su hijo: Modern Age Coders da clases en vivo, en línea y en inglés todo el año. Los adultos empiezan con Python para automatizar, análisis de datos o agentes de IA; los universitarios, con estructuras de datos o C++; los niños, con juegos; los adolescentes, con Python o C++. Un mentor desde la India enseña en un inglés claro y a su ritmo. Usted escoge grupo o sesiones individuales, y la hora.',

  picks: {
    eyebrow: 'Tres comienzos',
    h2: 'Un curso para el adulto, otro para el adolescente y otro para el niño',
    lede: 'Elegidos para quien quiere resultados en el trabajo, para el chico de secundaria que ya piensa en una carrera técnica y para el niño que llega por los videojuegos.',
    items: [
      { course: 'python-ai-automation-masterclass-college', code: 'PRMO / 01', title: 'Automatización con Python e IA', alt: 'Imagen del curso de automatización con Python e IA', note: 'Para universitarios y adultos. Archivos, hojas de cálculo, correos y reportes que se hacen solos, con IA usada con revisión humana.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'PRMO / 02', title: 'C++ para adolescentes', alt: 'Imagen del curso de C++ para adolescentes', note: 'Para secundaria. Un lenguaje exigente que enseña cómo funciona la memoria y es el de las olimpiadas de informática.' },
      { course: 'game-development-masterclass-for-kids', code: 'PRMO / 03', title: 'Videojuegos para niños', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'De 8 a 12 años. Scratch, Roblox y Minecraft para entender qué hay detrás de un juego, y luego crear uno propio.' }
    ]
  },

  sections: [
    {
      id: 'adultos',
      eyebrow: 'Adultos que estudian',
      h2: '¿Se puede aprender a programar de adulto en La Molina?',
      lede: 'Se puede y es frecuente. La propia municipalidad lo muestra con su centro técnico: según su nota del 30 de octubre de 2025, el CETPRO La Molina tiene alumnos de 14 a 60 años que estudian en tres turnos, de 8 a. m. a 8 p. m., y su número se duplicó respecto a años anteriores.',
      body: [
        { kind: 'p', html: 'El CETPRO es un Centro de Educación Técnico-Productiva municipal y, según la misma nota, sus cursos principales son Estética Personal, Computación y Textilería, con 385 estudiantes en 2025. Es un dato valioso: en La Molina hay adultos que reservan horas de su día para aprender un oficio, y lo hacen en la mañana, en la tarde o en la noche. Nuestras clases siguen la misma lógica de horarios abiertos, con una diferencia: se toman desde casa y en inglés.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Tres perfiles de adulto que más vemos, y por dónde empiezan (propuesta nuestra)', head: ['Perfil', 'Lo que suele pedir', 'Primer curso', 'Primer resultado visible'], rows: [
          ['Universitario o recién egresado', 'Python o C++ para la carrera, entrevistas técnicas', 'Estructuras de datos y algoritmos', 'Problemas resueltos y explicados en un repositorio'],
          ['Profesional a mitad de carrera', 'Dejar de hacer a mano lo repetitivo', 'Automatización con Python e IA', 'Un reporte semanal que se arma solo'],
          ['Jubilado o por jubilarse', 'Entender cómo funcionan las apps y la IA', 'Python desde cero, sin apuro', 'Un programa propio para su colección o sus cuentas']
        ] },
        { kind: 'source', html: 'Tabla de Modern Age Coders a partir de lo que piden los adultos en la clase de prueba. El CETPRO La Molina es de la Municipalidad Distrital de La Molina; no tenemos relación con él ni con la municipalidad, y nuestras clases no otorgan títulos técnicos.' },
        { kind: 'two', mt: true,
          leftH3: 'Si trabaja todo el día',
          left: [
            'La clase individual se acomoda antes o después de su jornada, y si una semana se complica, se mueve. Muchos alumnos adultos eligen dos sesiones cortas en lugar de una larga.',
            'El primer proyecto siempre sale de su trabajo: el archivo que copia cada lunes, la tabla que cruza a mano, el correo que manda igual cada viernes.'
          ],
          rightH3: 'Si se jubiló o está por hacerlo',
          right: [
            'No hay prisa ni examen. El mentor explica para qué sirve cada instrucción y repite con otras palabras cuando hace falta. El objetivo no es un empleo, es entender.',
            'Los datos del INEI acompañan: en el tramo de 41 a 59 años, la proporción de peruanos que usa internet subió de 76,5 % en el segundo trimestre de 2023 a 86,0 % en el mismo trimestre de 2026. Quien hoy tiene 55 años ya está conectado; entender lo que usa es el paso siguiente.'
          ] },
        { kind: 'p', mt: true, html: 'Para conocer el enfoque general, tenemos una guía de <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">cursos de programación para adultos</a>, y para quien quiere ir directo a la inteligencia artificial aplicada, un <a class="ag-inline-link" href="/curso-de-agentes-de-ia-peru">curso de agentes de IA</a> con control humano en cada paso.' }
      ]
    },
    {
      id: 'molinenses',
      eyebrow: 'La Molina en el censo',
      h2: '¿Qué edad tienen los vecinos de La Molina?',
      lede: 'El INEI contó 151,360 habitantes en La Molina en sus Censos Nacionales 2025. Comparada con el conjunto de Lima Metropolitana, tiene más personas de 45 años en adelante y menos niños.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'La Molina frente a Lima Metropolitana: población censada por edad, 2025', head: ['Edad', 'Molinenses censados', '% en La Molina', '% en Lima Metropolitana'], rows: [
          ['0 a 5', '5,042', '3.5', '5.8'],
          ['6 a 11', '8,435', '5.9', '8.5'],
          ['12 a 17', '10,681', '7.4', '9.0'],
          ['18 a 29', '24,793', '17.2', '18.8'],
          ['30 a 44', '29,245', '20.3', '24.2'],
          ['45 a 59', '30,484', '21.2', '18.2'],
          ['60 a más', '35,219', '24.5', '15.5'],
          ['Total censado', '143,899', '100', '100']
        ] },
        { kind: 'source', html: 'Datos del INEI, Censos Nacionales 2025, tabulados de Lima Metropolitana: Cuadro N.° 3 para las edades (solo población censada; Lima Metropolitana suma 9,600,043 censados) y Cuadro N.° 1 para los 151,360 habitantes de La Molina (143,899 censados y 7,461 omitidos). Los porcentajes, con un decimal, son cálculo nuestro.' },
        { kind: 'p', mt: true, html: 'Sumando los cuatro grupos de 18 años en adelante salen 119,741 adultos, el 83.2 % de los censados del distrito (cálculo nuestro). El grupo más numeroso es el de 60 a más, con 35,219 personas, y el de 45 a 59 años pesa tres puntos más que en el promedio de Lima. Es un distrito de familias establecidas, de profesionales con experiencia y de jubilados activos, y eso se refleja en quién nos escribe desde La Molina.' },
        { kind: 'p', html: 'La Molina limita con Ate, Santiago de Surco, Cieneguilla y Pachacámac. Las clases en línea llegan igual a cualquiera de esos distritos; lo único que cambia es la vista por la ventana.' }
      ]
    },
    {
      id: 'municipio',
      eyebrow: 'Fuera del verano',
      h2: '¿Qué ofrece la municipalidad durante el año?',
      lede: 'Más de lo que se piensa, y no solo en enero. Sus notas en gob.pe describen talleres de otoño e invierno para todas las edades y una biblioteca reconocida a nivel nacional.',
      body: [
        { kind: 'table', numCols: [], caption: 'Oferta de la Municipalidad de La Molina fuera de las vacaciones, según sus notas en gob.pe', head: ['Nota', 'Qué anunció', 'Para quién'], rows: [
          ['6 de mayo de 2025', 'MoliTalleres Otoño-Invierno: manualidades, quechua para niños, diseño creativo y computación básica, además de talleres culturales y productivos', 'Niños, adolescentes, jóvenes y adultos'],
          ['30 de octubre de 2025', 'Aniversario del CETPRO La Molina: 385 estudiantes en 2025, cursos de Estética Personal, Computación y Textilería', 'De 14 a 60 años, en tres turnos'],
          ['18 de noviembre de 2024', 'La Biblioteca Municipal Plaza Bicentenario, entre las 20 iniciativas innovadoras seleccionadas por el CEPLAN; visitas guiadas para inicial y primaria', 'Escolares y vecinos']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de La Molina, gob.pe/institucion/munilamolina, notas consultadas el 10 de noviembre de 2026. Omitimos direcciones, teléfonos ni nombres de autoridades. Los talleres de computación de abril de 2026 se comentan en la página de vacaciones del distrito.' },
        { kind: 'p', mt: true, html: 'Lo que estas notas no incluyen es programación. Un taller de computación básica enseña a usar un programa; una clase de programación enseña a escribir uno. Son pasos distintos y se complementan: quien ya domina el teclado y las carpetas llega a nuestra primera clase con ventaja. Lo que pasa de enero a marzo está en otra página, sobre <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-la-molina-lima">las vacaciones útiles molinenses</a>.' }
      ]
    },
    {
      id: 'hijos',
      eyebrow: 'Niños y adolescentes',
      h2: '¿Y para mis hijos, desde qué edad y con qué lenguaje?',
      lede: 'Desde los 6 años. En La Molina se censaron 19,116 menores de 6 a 17 años (cálculo nuestro sobre el Cuadro N.° 3), y la mayoría llega a nosotros por los videojuegos o por la curiosidad de cómo funciona una app.',
      body: [
        { kind: 'three', cells: [
          { h3: 'De 6 a 8 años', p: 'Bloques y personajes. La biblioteca municipal hace visitas guiadas para inicial y primaria; en clase seguimos esa costumbre de leer con atención, ahora instrucciones que mueven un personaje.' },
          { h3: 'De 9 a 12 años', p: 'Juegos propios en Scratch o Roblox, y los primeros programas escritos en Python. Es la edad en que un niño quiere entender por qué su juego favorito funciona como funciona.' },
          { h3: 'De 13 a 17 años', p: 'Python, C++ o desarrollo web. Quien piensa en una carrera de ingeniería suele elegir C++, que exige precisión y es el único permitido en la fase presencial de la Olimpiada Peruana de Informática, según el reglamento de la OPI 2025 (organizada por la UTEC, con la que no tenemos vínculo).' }
        ] },
        { kind: 'p', mt: true, html: 'Muchos padres molinenses que toman clase con nosotros terminan inscribiendo a sus hijos, o al revés. Cada uno va en su propio curso y con su propio mentor, pero compartir el aprendizaje en casa ayuda: el hijo le explica un bucle al padre, el padre le cuenta al hijo para qué usa Python en el trabajo.' }
      ]
    },
    {
      id: 'condicion',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Por qué importa el orden de las condiciones en un programa?',
      lede: 'Porque Python evalúa <code>and</code> de izquierda a derecha y se detiene en cuanto encuentra algo falso. El ejercicio lo escribimos nosotros para adultos que coordinan equipos y con universitarios: un control de asistencia a una capacitación, donde un participante todavía no tiene sesiones programadas.',
      body: [
        { kind: 'code', label: 'Versión 1: la división va primero', lang: 'Python', code: V1, note: 'Ana tiene 8 sesiones programadas y asistió a 7; Luis acaba de inscribirse y no tiene ninguna; Rosa asistió a 3 de 6. La meta es 75 % de asistencia.' },
        { kind: 'code', label: 'Qué ocurre con la versión 1', lang: 'Salida', code: OUT1, note: 'Primera y última línea exactas al ejecutar con python3; resumimos la traza intermedia. Ana se procesa, pero con Luis el programa divide 0 entre 0 y se detiene. Rosa nunca llega a evaluarse.' },
        { kind: 'code', label: 'Versión 2: la guarda va primero', lang: 'Python', code: V2, note: 'Mismo contenido, otro orden. Si <code>programadas &gt; 0</code> es falso, Python ya sabe que el <code>and</code> completo es falso y no calcula la división.' },
        { kind: 'code', label: 'Qué ocurre con la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta. Ya no hay error, pero Luis aparece como alguien que "necesita una llamada", igual que Rosa, cuando en realidad todavía no empezó.' },
        { kind: 'code', label: 'Versión 3: el tercer caso con nombre propio', lang: 'Python', code: V3, note: 'Primero se pregunta por el caso especial; solo después se divide.' },
        { kind: 'code', label: 'Qué ocurre con la versión 3', lang: 'Salida', code: OUT3, note: 'Salida exacta. Tres personas, tres situaciones distintas, tres mensajes correctos.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer el error en inglés.</strong> "ZeroDivisionError: division by zero" se entiende casi sin traducir. El mentor pide al alumno que diga en una frase qué línea lo causó y con qué datos.',
          '<strong>Entender el cortocircuito.</strong> En <code>A and B</code>, si A es falso, B no se calcula. Por eso la condición que protege (la guarda) va a la izquierda, y la que podría fallar, a la derecha. Con <code>or</code> pasa lo mismo al revés: si A es verdadero, B se salta.',
          '<strong>Desconfiar de un arreglo que solo quita el error.</strong> La versión 2 ya no se cae, pero informa mal sobre Luis. Que un programa no falle no significa que diga la verdad.',
          '<strong>Nombrar todos los casos.</strong> Antes de escribir, el alumno lista en papel las situaciones posibles: asistió bien, asistió poco, no empezó. Tres casos, tres ramas.',
          '<strong>Llevarlo a su realidad.</strong> Ventas sobre metas, notas sobre evaluaciones, gastos sobre presupuesto: cualquier porcentaje tiene un denominador que algún día será cero.'
        ] },
        { kind: 'p', mt: true, html: 'Este es el tipo de razonamiento que distingue a quien programa de quien copia código. Una herramienta de IA puede sugerir la versión 2 en un segundo, porque elimina el error; hace falta una persona que piense en Luis para llegar a la versión 3.' }
      ]
    },
    {
      id: 'en-linea',
      eyebrow: 'Desde casa',
      h2: '¿Por qué una clase en línea si vivo en La Molina?',
      lede: 'Porque La Molina está al este de la ciudad y casi cualquier academia queda lejos. Una clase de una hora no debería costarle una tarde entera.',
      body: [
        { kind: 'two',
          leftH3: 'El traslado',
          left: [
            'Salir de La Molina hacia el centro de Lima o hacia San Isidro a la hora punta es una experiencia que todo molinense conoce. No damos cifras de minutos, porque dependen de cada ruta y cada día; basta con que usted piense en la suya.',
            'En línea, el trayecto desaparece: basta con encender la laptop en el escritorio o en la mesa del comedor.'
          ],
          rightH3: 'La computadora de la casa',
          right: [
            'El INEI informa que, en el segundo trimestre de 2026, el 87,4 % de los hogares con computadora la usa solo para actividades del hogar, como estudios o fines personales, y el 11,3 % la comparte entre la casa y el trabajo.',
            'Si en su casa la misma laptop sirve para el trabajo y para los estudios de los hijos, conviene fijar quién la usa en cada franja. Con clases individuales, cada uno elige la suya.'
          ] }
      ]
    },
    {
      id: 'turnos',
      eyebrow: 'Horario',
      h2: '¿En qué turno puedo tomar clase desde La Molina?',
      lede: 'En el que usted quiera, igual que en los tres turnos del centro técnico del distrito. La única cuenta es la diferencia con la India: diez horas y media más, sin cambios en el año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Un ejemplo por turno: La Molina y la India (conversiones, no horarios establecidos)', head: ['Turno en La Molina', 'Hora de Perú', 'Hora en la India'], rows: [
          ['Mañana', '8:30 a. m.', '7:00 p. m. (mismo día)'],
          ['Mediodía', '12:00 m.', '10:30 p. m. (mismo día)'],
          ['Tarde', '4:30 p. m.', '3:00 a. m. (ya es el día siguiente)'],
          ['Noche', '7:00 p. m.', '5:30 a. m. (ya es el día siguiente)']
        ] },
        { kind: 'source', html: 'Diferencia horaria según la base tzdata (America/Lima, UTC-5 sin horario de verano; Asia/Kolkata, UTC+5:30) y la hora oficial peruana del INACAL. El INEI resume la misma equivalencia en su Compendio Estadístico 2026: las 12:00 m. de Lima son las 10:30 p. m. en Delhi.' },
        { kind: 'p', mt: true, html: 'Las clases son en inglés. El EF EPI 2025 coloca a Lima en el nivel alto, con 555 puntos, aunque a nivel nacional la expresión oral es la habilidad más baja, con 480. En clase el alumno habla todo el tiempo: pregunta, explica, describe su error. Para un adulto que lee inglés en el trabajo pero rara vez lo habla, es una práctica muy útil.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo sabré que estoy progresando?',
    lede: 'Con cinco hitos propios. Sirven igual para un adulto de 50 años que para un adolescente de 15.',
    table: { caption: 'Cinco hitos de progreso en programación (nuestros)', head: ['Hito', 'Plazo habitual', 'Lo que ya puede hacer'], rows: [
      ['1. Lee código ajeno', 'Primeras semanas', 'seguir un programa corto y anticipar su salida'],
      ['2. Escribe condiciones', 'Primer y segundo mes', 'decidir con if, elif y else, y ordenar las guardas como en el ejemplo'],
      ['3. Automatiza una tarea', 'Tercer mes', 'reemplazar un trabajo repetitivo por un script propio'],
      ['4. Maneja casos raros', 'Cuarto a sexto mes', 'anticipar ceros, vacíos y datos que faltan antes de que fallen'],
      ['5. Entrega un proyecto', 'Desde el sexto mes', 'presentar en inglés una herramienta que otra persona usa']
    ] },
    left: { h3: 'Si el alumno es usted', ps: [
      'Anote cada tarea que el programa ya hace por usted y cuánto tiempo le ahorra. Es la medida más honesta.',
      'Antes de pedir ayuda, liste los casos posibles en papel. La mitad de las veces la respuesta aparece ahí.'
    ] },
    right: { h3: 'Si el alumno es su hijo', ps: [
      'Pídale que le enseñe algo que aprendió. Si puede explicárselo a usted, lo entendió.',
      'Celebre los errores bien leídos tanto como los programas que funcionan.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Nueve cursos más para La Molina',
    lede: 'En vivo, en inglés y con un mentor estable, en grupo o individual.',
    bands: [
      { num: 'I', h3: 'Adultos y universitarios', sub: 'Desde los 18 años', courses: [
        { code: 'PRMO / ADULTOS / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos', blurb: 'La base de cualquier entrevista técnica.' },
        { code: 'PRMO / ADULTOS / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Datos e IA sin ser programador', blurb: 'Para profesionales que analizan, no desarrollan.' },
        { code: 'PRMO / ADULTOS / 03', slug: 'build-ai-agents-with-google-gemini-enterprise-course', title: 'Agentes con Gemini', blurb: 'Agentes para empresas, solo en clase individual.' }
      ] },
      { num: 'II', h3: 'Adolescentes', sub: 'De 13 a 18 años', courses: [
        { code: 'PRMO / TEENS / 01', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas con tiempo y límites, para secundaria.' },
        { code: 'PRMO / TEENS / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Videojuegos para adolescentes', blurb: 'Juegos completos con física, niveles y menús.' },
        { code: 'PRMO / TEENS / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Ciberseguridad defensiva', blurb: 'Cómo se protegen los sistemas, con ética.' }
      ] },
      { num: 'III', h3: 'Niños', sub: 'De 6 a 12 años', courses: [
        { code: 'PRMO / NIÑOS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Historias y juegos con bloques.' },
        { code: 'PRMO / NIÑOS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Programar dentro del juego que ya conocen.' },
        { code: 'PRMO / NIÑOS / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Un primer lenguaje escrito con retos cortos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo se desarrolla el curso semana a semana?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Turno mañana', l: 'Para jubilados y universitarios con tardes ocupadas.' },
      { time: 'Turno tarde', l: 'Para escolares, después del colegio.' },
      { time: 'Turno noche', l: 'Para quienes trabajan de día.' }
    ],
    cells: [
      { h3: 'Mentor estable', p: 'Una misma persona durante todo el curso.' },
      { h3: 'Su pantalla, compartida', p: 'El mentor ve cada línea que usted escribe.' },
      { h3: 'Problemas reales', p: 'Los ejercicios salen de su trabajo o de sus intereses.' },
      { h3: 'Entregas cortas', p: 'Cada pocas semanas, algo terminado que funciona.' },
      { h3: 'Resumen escrito', p: 'Después de las sesiones, lo trabajado y lo pendiente.' },
      { h3: 'Grupo o individual', p: 'Grupos de quince a veinte, o usted con su mentor.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros alumnos',
  projectsLede: 'Una muestra de trabajos de estudiantes; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, página en inglés.',
  reviewsLede: 'Opiniones en Google de alumnos y familias, sin cambios y en su inglés original.',

  fees: {
    h2: 'Precios para vecinos de La Molina',
    lede: 'Publicamos las tarifas en dólares de Estados Unidos y las cobramos con tarjeta. Su banco hace el cambio a su moneda, por lo que lo que ve en su estado de cuenta puede diferir un poco según el tipo de cambio del día del cargo.',
    free: ['Una sesión de prueba gratuita', 'Orientación sobre el curso adecuado', 'Sin tarjeta ni permanencia'],
    group: ['De quince a veinte alumnos afines', 'El mismo mentor todo el curso', 'Dos sesiones semanales en vivo', 'Mensualidad sin contrato largo'],
    one: ['Solo usted y el mentor', 'Contenido según su meta', 'Horario que usted define']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación en La Molina: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Enseñamos siempre en inglés, en vivo y por internet, a adultos y a menores por igual. Para muchos adultos de La Molina eso suma: leen inglés en el trabajo y en clase lo hablan. El mentor va despacio y repite. El EF EPI 2025 sitúa a Lima en el nivel alto de inglés, con 555 puntos.' },
      { q: '¿Es tarde para aprender a programar a los 40, 50 o 60 años?', a: 'No. Tenemos alumnos de todas esas edades. El ritmo cambia, el método no: escribir, equivocarse, leer el error y corregir. El primer programa útil suele llegar en pocas semanas.' },
      { q: '¿Cuántos adultos viven en La Molina?', a: 'En el Cuadro N.° 3 del censo que el INEI levantó en 2025, 119,741 de los 143,899 molinenses censados tienen 18 años o más, el 83.2 % según nuestro cálculo. El grupo más grande es el de 60 años a más, con 35,219 personas.' },
      { q: '¿La municipalidad enseña programación?', a: 'En sus notas de gob.pe que revisamos aparecen computación básica, un CETPRO con cursos técnicos y una biblioteca reconocida por el CEPLAN, pero no programación. No tenemos vínculo con la municipalidad.' },
      { q: '¿Qué lenguaje conviene para un universitario?', a: 'Depende de la carrera. Python sirve casi para todo y es el más amable para empezar; C++ y Java son los que piden muchas carreras de ingeniería y las entrevistas técnicas. El mentor lo decide con usted en la clase de prueba.' },
      { q: '¿Y para un niño?', a: 'Desde los 6 años, con bloques o videojuegos. Entre los 9 y los 12 la mayoría pasa a Python. Cada niño va en su propio grupo de edad, nunca mezclado con adultos.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India lleva diez horas y media de adelanto respecto de Perú todo el año.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares de Estados Unidos; el banco hace la conversión. La sesión de prueba es gratuita y no pide tarjeta.' },
      { q: '¿Obtengo un título?', a: 'Obtiene un certificado de finalización de Modern Age Coders. No es un título técnico ni universitario, y no reemplaza la formación de un CETPRO, un instituto o una universidad.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras guías útiles',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-la-molina-lima', label: 'Vacaciones útiles en La Molina', p: 'La oferta de verano del distrito, con su censo.' },
      { href: '/cursos-de-programacion-para-adultos-peru', label: 'Programación para adultos', p: 'Para empezar a cualquier edad.' },
      { href: '/curso-de-agentes-de-ia-peru', label: 'Curso de agentes de IA', p: 'Agentes que ayudan, con control humano.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas nuestras guías para el Perú.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así enseñamos, en inglés.' },
      { href: '/courses', label: 'All courses', p: 'El listado completo de programas.' }
    ]
  },

  start: {
    h2: 'Reserve su clase de prueba en La Molina',
    lede: 'En la clase gratis, el mentor conversa con usted en inglés sencillo, le plantea un problema pequeño y observa cómo lo resuelve. A partir de eso le sugerimos un curso y un formato. Decide usted, sin compromiso.',
    readFirst: 'Para leer antes, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> (nuestro método) y <a class="ag-inline-link" href="/courses">All courses</a> (todos los cursos).',
    note: 'Enseñamos en vivo y por internet, con mentores en la India, y únicamente en inglés. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/python-ai-automation-masterclass-college', label: 'Automatización con Python' },
        { href: '/courses/cpp-programming-masterclass-for-teens', label: 'C++ para adolescentes' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Videojuegos para niños' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'Adultos' },
        { href: '/curso-de-agentes-de-ia-peru', label: 'Agentes de IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Primero la guarda, después la división'
  },

  personalityCss: `
.ag-root.ag-prmo .ag-hero h1 { max-width: 22ch; letter-spacing: -0.008em; }
.ag-root.ag-prmo .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-prmo .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prmo .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-prmo .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad de La Molina notes on gob.pe of 30 Oct 2025, 6 May 2025 and 18 Nov 2024; INEI Boletín TIC II trimestre 2026; INEI Compendio 2026 (time); EF EPI 2025; tzdata and INACAL. Read 10 November 2026. The adult profiles table, the progress milestones and the Python example are our own.',
    localProject: 'An attendance check for a training group in Python: dividing before guarding crashes on a member with no sessions ("ZeroDivisionError: division by zero"), putting the guard first stops the crash but files Luis under "needs a call", and naming the third case prints "Luis not started yet". Lesson family: short-circuit evaluation of and/or, guard order, and an explicit branch for the special case.',
    requiredMentions: ['Luis not started yet', 'Luis needs a call', 'ZeroDivisionError: division by zero', 'tres turnos, de 8 a. m. a 8 p. m.', '385 estudiantes en 2025', 'MoliTalleres Otoño-Invierno', '119,741 adultos', 'Primero la guarda, después la división', 'Que un programa no falle no significa que diga la verdad'],
    sources: [
      { claim: 'La Molina population 151,360 (total), 143,899 censada, 7,461 omitida, censada by age group; Lima Metropolitana censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'CETPRO La Molina: 385 students in 2025, doubled; courses Estética Personal, Computación, Textilería; students 14 to 60 in three shifts from 8 a.m. to 8 p.m.', url: 'https://www.gob.pe/institucion/munilamolina/noticias/1277486-cetpro-la-molina-esta-de-aniversario-y-celebro-23-anos-capacitando-a-molinenses' },
      { claim: 'MoliTalleres Otoño-Invierno 2025 for children, teens, young people and adults, including computación básica.', url: 'https://www.gob.pe/institucion/munilamolina/noticias/1162314-los-molitalleres-otono-invierno-empiezan-hoy-en-diferentes-locales' },
      { claim: 'Biblioteca Municipal Plaza Bicentenario among CEPLAN\'s 20 selected innovative initiatives; guided visits for inicial and primaria.', url: 'https://www.gob.pe/institucion/munilamolina/noticias/1060014-biblioteca-municipal-de-la-molina-presente-entre-las-20-mejores-iniciativas-del-pais' },
      { claim: 'Internet use at 41 to 59 from 76.5% to 86.0% (II trimestre 2023 to 2026); 87.4% of computer households use it only for home activities, 11.3% combine home and work.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555; Peru speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'OPI 2025 regulation: the in-person Fase 2 allows only C++ (facts-school FACTS 116).', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any link with the Municipalidad de La Molina, its CETPRO, CEPLAN or a university: none; the page says so and names no officials.',
      'A technical or university qualification: refused; our own certificate of completion only.',
      'The April 2026 MolTalleres de computación and the computación versus programación comparison: left to the vacaciones útiles page, linked once.',
      'Commute minutes from La Molina: no primary source, so no figure.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

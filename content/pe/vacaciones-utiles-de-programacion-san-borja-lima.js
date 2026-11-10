// SHIP: market (es district, vacaciones útiles) | primaria: sport mornings, Python and AI or own course 4 to 5 a week | one bad lap: average against median
'use strict';
// Vacaciones útiles de programación en San Borja, Lima (ag- Spanish door, Peru cluster row PE219, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted". Fees render in USD from the template only; no soles, no typed figure, no camp length or start date.
// Angle: the San Borja parent of a primaria child (8 to 12) who already has a summer of municipal sport and art workshops
// and types "vacaciones útiles San Borja" or "vacaciones útiles 2027". Spine: what the municipality itself published about
// its summer 2025 workshops (sport and culture, no programming listed); how to fit a live coding class around a morning of
// sport; what primaria gives (three hours of PE a week, no computing area); an original lesson on one slow swimming lap, average against median;
// a project per age (ours); what happens in March and in the 2026-style mid-year breaks; why from home; Peru to India clock.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-san-borja-lima/;
// gob.pe notes fetched 2026-11-09, the rest fetched 2026-11-08 by the research run; every quote string-matched in the raw):
//  Municipalidad de San Borja, gob.pe/munisanborja (the municipality's own institutional page; www.munisanborja.gob.pe did
//    not connect, curl 000), note "Verano deportivo y cultural en San Borja", 6 March 2025 (sb-verano-2025.html): "Durante
//    enero y febrero, el Centro Cultural y nuestros cuatro polideportivos recibieron a un total de 11,430 participantes";
//    "En el Centro Cultural, se matricularon 3,000 usuarios"; "Entre los talleres más solicitados estuvieron baile, clown,
//    marinera, Ceramikids y coro"; "Limatambo, Rosa Toro, San Juan Masías y Monterrico Norte, se inscribieron 8,430 usuarios";
//    "skateboarding, boxeo, esgrima, handball, natación, gimnasia y taekwondo"; "en 2022, San Borja fue designado como el
//    primer “Distrito Olímpico” del país por el Comité Olímpico Peruano (COP)"; "Los talleres deportivos y culturales
//    continúan durante todo el año en San Borja". The municipality's own total (11,430) is printed; we add nothing up.
//  Same institution, "San Borja clausura con éxito el programa EcoKids", 24 February 2026 (sb-ecokids-2026.html): "talleres
//    prácticos donde aprendieron técnicas de reciclaje, el manejo adecuado de residuos".
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Cuadro N° 1 (places.tsv): SAN BORJA 126125 (ubigeo 150130).
//  CNEB, Tabla N.° 6 primaria (cneb/text.txt): "Educación física 3 3 3 3 3 3", "Matemática 5 5 4 4 4 4", "Total de horas
//    30 30 30 30 30 30"; "horas pedagógicas (45 minutos)"; no computing or programming area.
//  RM 501-2025-MINEDU, Tabla 1 (rm501-2025-pdf/page11-checked-by-eye.png, read by eye 2026-11-09): "Del 16 marzo al 15 de
//    mayo", "Del 18 al 22 de mayo", "Del 27 julio a 7 de agosto", "Del 12 al 16 de octubre", "Del 19 octubre a 18 de diciembre".
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7% de
//    los hogares disponía del servicio"; "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)".
//  EF EPI 2025 Peru page (ef_peru.txt): Lima 555, high band from 550; speaking 480.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Summer offer (owner 2026-11-10, brief section "Summer offer"): Summer Python and AI (python-ai-kids-masterclass, ages 9 to
//   12) or any catalogue course (Scratch, Roblox, game dev, web for kids, block apps, vibe coding, C++ for kids, maths and
//   more) at 4 to 5 live classes a week, group or one to one, flexible hours; summer pace and fee agreed with the mentor
//   first; first class free; no price typed. Lengths from content/courses/data/*.json meta.duration: Scratch 3-4 months
//   (12-16 weeks), Roblox kids 6 months (24 weeks), Python and AI kids 8-10 months (32-40 weeks).
// Our own calculations: 3 x 45 = 135 minutes of Educación física a week in primaria (CNEB, our arithmetic).
//   Start-week table (ours, illustrative; assumes a mid-March return like 16 March 2026, the 2027 date is not published):
//   10 weeks x 4 = 40, x 5 = 50; 8 x 4 = 32, x 5 = 40; 6 x 4 = 24, x 5 = 30; 3 x 4 = 12, x 5 = 15.
//   Scratch 12-16 weeks x 2 = 24-32 classes; Roblox 24 x 2 = 48; Python and AI kids 32-40 x 2 = 64-80.
// Our own example (borja_media.py, borja_media2.py in the src-pages folder), run with python3 -I, exact output:
//    v1: Laps in order: [41.6, 41.8, 41.9, 42.1, 42.3, 43.0, 58.4] / Average: 44.4 / Median: 42.1
//    v2 (slow lap removed, six laps): Laps in order: [41.6, 41.8, 41.9, 42.1, 42.3, 43.0] / Average: 42.1 / Median: 42.0
// Lesson family: summarising a list: the mean is pulled by one outlier, the median (middle of the sorted list) is not; with an
// even count the median is the mean of the two middle values. (Changed on 9 Nov 2026 from a ranking-with-ties lesson because a
// sibling module teaches competition ranking.)

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  'laps = [42.1, 41.6, 43.0, 41.9, 58.4, 42.3, 41.8]',
  '',
  'average = sum(laps) / len(laps)',
  'ordered = sorted(laps)',
  'median = ordered[len(laps) // 2]',
  '',
  "print('Laps in order:', ordered)",
  "print('Average:', round(average, 1))",
  "print('Median:', median)"
].join('\n');

const OUT1 = [
  'Laps in order: [41.6, 41.8, 41.9, 42.1, 42.3, 43.0, 58.4]',
  'Average: 44.4',
  'Median: 42.1'
].join('\n');

const V2 = [
  'laps = [42.1, 41.6, 43.0, 41.9, 42.3, 41.8]',
  '',
  'ordered = sorted(laps)',
  'half = len(laps) // 2',
  'if len(laps) % 2 == 1:',
  '    median = ordered[half]',
  'else:',
  '    median = (ordered[half - 1] + ordered[half]) / 2',
  '',
  "print('Laps in order:', ordered)",
  "print('Average:', round(sum(laps) / len(laps), 1))",
  "print('Median:', round(median, 2))"
].join('\n');

const OUT2 = [
  'Laps in order: [41.6, 41.8, 41.9, 42.1, 42.3, 43.0]',
  'Average: 42.1',
  'Median: 42.0'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en San Borja' },
  slug: 'vacaciones-utiles-de-programacion-san-borja-lima',
  code: 'vut',
  accent: '#04693D',
  accentRationale: 'Vacaciones útiles de programación en San Borja: a sports-field green #04693D, the colour of a well-kept pitch at a district polideportivo in January, chosen so the page reads outdoors and active; contrast 5.51 at its lowest across the three paper tints (alloc.tsv), above 4.5, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en San Borja',
  title: 'Vacaciones útiles de programación en San Borja, Lima',
  description: 'Vacaciones útiles de programación para niños de San Borja: Python e IA o el curso que elijan, de 4 a 5 clases en vivo por semana en inglés, junto al deporte.',
  ogDescription: 'Deporte por la mañana y código por la tarde: Python e IA o un curso a elección, de 4 a 5 clases en vivo por semana, para niños de primaria de San Borja.',
  twitterDescription: 'Un verano de Python e IA, o de Scratch y Roblox, con 4 a 5 clases en vivo por semana y en inglés, sin quitarle la piscina a nadie.',
  pageName: 'Vacaciones útiles de programación en San Borja',
  webPageDescription: 'Guía para familias de San Borja, Lima, con hijos en primaria que quieren sumar programación a un verano de talleres deportivos y culturales: nuestro verano de Python e IA o de un curso a elección con 4 a 5 clases por semana, lo que la Municipalidad de San Borja publicó sobre sus talleres del verano 2025, la población del distrito según el INEI (Censos 2025), las horas de primaria del CNEB, las pausas del año escolar según la RM 501-2025-MINEDU y una clase de ejemplo en Python, escrita por nosotros, que resume tiempos de natación con promedio y mediana.',
  courseDescription: 'Clases en vivo de programación para niños de 8 a 12 años en San Borja y todo Lima, dictadas solo en inglés y por videollamada: Python e IA o un curso a elección como Scratch, Roblox o videojuegos, con 4 a 5 clases por semana en verano, en grupo o individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles en San Borja',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#verano', label: 'Plan de verano' },
    { href: '#talleres', label: 'Talleres' },
    { href: '#combinar', label: 'Combinar' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#edades', label: 'Por edad' }
  ],
  eyebrow: 'San Borja, Lima &middot; Vacaciones útiles &middot; De 8 a 12 años',
  h1: 'Vacaciones útiles de programación en San Borja',
  lede: 'En San Borja el verano de los niños ya suele estar lleno de piscina, fútbol, baile y talleres. Esta página no le pide quitar nada de eso: le muestra cómo sumar, en las tardes, de 4 a 5 clases de programación por semana desde casa, en vivo y en inglés, por el camino de Python e IA o por el curso que su hijo elija, sin un traslado más.',
  secondaryCta: { href: '#verano', label: 'Los dos caminos del verano' },
  wa: 'Hola Modern Age Coders, somos de San Borja y queremos que nuestro hijo o hija programe este verano, además de sus talleres. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; mentores que hablan inglés con calma',
  spec: [
    ['Edades', 'De 8 a 12 años, de 3° a 6° de primaria'],
    ['Qué aprenden', 'Python e IA, o un curso que elijan'],
    ['Ritmo de verano', 'De 4 a 5 clases en vivo por semana'],
    ['Dónde', 'En casa, por videollamada'],
    ['Idioma', 'Inglés, con un mentor paciente'],
    ['Para probar', 'Una clase gratis']
  ],
  capsuleQ: 'Respuesta rápida',
  capsule: 'Sí se puede: unas vacaciones útiles de programación en San Borja caben al lado de los talleres deportivos, porque la clase es en vivo, por videollamada y desde casa. Modern Age Coders ofrece a niños de 8 a 12 años dos caminos, siempre en inglés: Python e IA de verano, o el curso que el niño elija, como Scratch, Roblox, videojuegos o su primera web, con 4 a 5 clases a la semana de alrededor de una hora. El mentor habla con calma; usted escoge grupo o individual y el horario. La primera clase es sin costo.',

  picks: {
    eyebrow: 'Para este verano',
    h2: 'Tres cursos para un verano de primaria en San Borja',
    lede: 'El curso central del camino de Python e IA y dos del camino a elección: uno que se termina en vacaciones y otro para el niño que no suelta Roblox.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'VUT / 01', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años, el camino principal. Su hijo deja los bloques y teclea sus programas: dibujos, adivinanzas, listas como las del ejemplo de natación y, más adelante, IA a su medida. Con el ritmo de verano, enero y febrero bastan para pasar la mitad del curso.' },
      { course: 'scratch-programming-complete-course', code: 'VUT / 02', title: 'Scratch desde cero', alt: 'Imagen del curso de Scratch para niños', note: 'Desde los 6 años. Al ritmo normal dura de tres a cuatro meses; con el ritmo de verano cabe entero en las vacaciones, con animaciones y juegos completos hechos con bloques.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'VUT / 03', title: 'Juegos en Roblox con Luau', alt: 'Imagen del curso de programación de juegos en Roblox con Luau', note: 'De 8 a 14 años. Obstáculos, marcadores y tiendas que el niño programa él mismo. Es un curso de seis meses que un verano de cinco clases por semana deja terminado o casi.' }
    ]
  },

  sections: [
    {
      id: 'verano',
      eyebrow: 'Nuestro verano',
      h2: '¿Cómo es un verano de programación para niños de primaria en San Borja?',
      lede: 'Una tarde de código casi cada día de semana: de 4 a 5 clases en vivo, de alrededor de una hora, dedicadas a Python con IA o a otro curso que el niño prefiera. Las mañanas siguen siendo del polideportivo.',
      body: [
        { kind: 'two',
          leftH3: 'Python e IA, el camino del verano',
          left: [
            'Es lo que recomendamos primero a un niño de 9 a 12 años. Python le enseña a escribir instrucciones de verdad, letra por letra, y con eso llega después a proyectos de inteligencia artificial pensados para niños: un programa que adivina, uno que clasifica, uno que aprende de sus propios datos de natación.',
            'Ninguna herramienta de IA con edad mínima superior a la de su hijo entra a la clase. El niño razona primero y la máquina, si aparece, solo comprueba.'
          ],
          rightH3: 'O el curso que su hijo elija',
          right: [
            'Si su hijo ya sabe lo que quiere, puede tomar cualquier curso de nuestro catálogo con las mismas 4 a 5 clases semanales: Scratch, Roblox, videojuegos con Godot o Minecraft, su primera web, apps con bloques, vibe coding para niños, C++ desde los 9, cálculo mental y muchos más.',
            'Para los de 8 años, que todavía se manejan con más soltura en bloques, este suele ser el camino de entrada; al verano siguiente pueden pasar a Python.'
          ] },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Clases de verano según la semana en que empieza su hijo (cálculo nuestro, ilustrativo)', head: ['Si empieza', 'A 4 clases por semana', 'A 5 clases por semana'], rows: [
          ['La primera semana de enero (unas 10 semanas)', '40', '50'],
          ['A mediados de enero (unas 8 semanas)', '32', '40'],
          ['A comienzos de febrero (unas 6 semanas)', '24', '30'],
          ['A fines de febrero (unas 3 semanas)', '12', '15']
        ] },
        { kind: 'source', html: 'Cuentas nuestras, suponiendo un regreso a clases a mediados de marzo como el del 16 de marzo de 2026; la fecha de 2027 aún no se publica. Durante el año escolar se toman dos clases por semana. Con 40 a 50 clases, Scratch (de tres a cuatro meses a ritmo normal, unas 24 a 32 clases) se completa; Roblox con Luau (seis meses, unas 48) queda terminado o casi; Python e IA para niños (de ocho a diez meses, unas 64 a 80) avanza más de la mitad y sigue en marzo. No prometemos cerrar un curso largo en vacaciones.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué camino suele encajar con cada edad de primaria (orientación nuestra)', head: ['Edad', 'Camino', 'Cursos de ejemplo', 'Cómo convive con el deporte'], rows: [
          ['8 años', 'Curso a elección', 'Scratch, apps con bloques, Minecraft con código', 'Clase después del almuerzo, con un día libre si son cuatro'],
          ['9 a 10 años', 'Python e IA, o curso a elección', 'Python e IA para niños, Roblox con Luau', 'Clase a media tarde, al volver de la piscina'],
          ['11 a 12 años', 'Python e IA', 'Python e IA para niños, luego su primera web o C++', 'Cinco tardes si el niño quiere avanzar rápido']
        ] },
        { kind: 'source', html: 'Las edades vienen de cada curso; el resto es orientación de nuestros mentores, que la ajustan después de la clase gratis.' },
        { kind: 'p', mt: true, html: 'Si serán cuatro tardes o cinco, en grupo o a solas, y cuánto se paga por ese mes de verano, lo define usted con el mentor antes de comenzar. La primera clase es gratis.' }
      ]
    },
    {
      id: 'talleres',
      eyebrow: 'El verano en San Borja',
      h2: '¿Hay vacaciones útiles de programación en San Borja?',
      lede: 'La municipalidad tiene una oferta grande de talleres de verano, sobre todo deportivos y culturales. En la nota que publicó sobre el verano 2025 no menciona talleres de programación; ese es el espacio que cubren nuestras clases en línea.',
      body: [
        { kind: 'p', html: 'San Borja tiene 126,125 habitantes, según el INEI (Censos Nacionales 2025), y limita con San Isidro, La Victoria, San Luis, Ate, Santiago de Surco y Surquillo. Es un distrito acostumbrado a llenar el verano de actividad: la propia Municipalidad de San Borja informó en marzo de 2025 cuántos niños y adolescentes pasaron por sus talleres en enero y febrero de ese año.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Talleres de verano 2025 de la Municipalidad de San Borja, enero y febrero, según la propia municipalidad', head: ['Lugar', 'Inscritos', 'Talleres que la nota menciona'], rows: [
          ['Centro Cultural', '3,000', 'Baile, clown, marinera, Ceramikids y coro, entre los más solicitados'],
          ['Polideportivos Limatambo, Rosa Toro, San Juan Masías y Monterrico Norte', '8,430', 'Skateboarding, boxeo, esgrima, handball, natación, gimnasia y taekwondo, entre otros'],
          ['Total que publica la municipalidad', '11,430', 'Participantes entre niños y adolescentes']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de San Borja, nota de prensa "Verano deportivo y cultural en San Borja", 6 de marzo de 2025, en su página institucional de gob.pe (gob.pe/munisanborja), consultada el 9 de noviembre de 2026. Las cifras y el total son los que publica la municipalidad; no sumamos nada por nuestra cuenta. La misma nota recuerda que en 2022 el Comité Olímpico Peruano designó a San Borja como el primer "Distrito Olímpico" del país.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que ya ofrece el distrito',
          left: [
            'Deporte, arte y música en espacios públicos, y programas como EcoKids, que la municipalidad cerró el 24 de febrero de 2026 tras talleres prácticos de reciclaje y manejo de residuos para niños. La nota de 2025 añade que los talleres deportivos y culturales siguen durante todo el año.',
            'Todo eso pasa fuera de casa, con horarios del local, y llena muy bien las mañanas del verano.'
          ],
          rightH3: 'Lo que suman nuestras clases',
          right: [
            'Programación con un mentor real, en vivo y en inglés, sin salir de casa. Una hora de clase que se acomoda a la hora que la familia elija, antes o después de la piscina.',
            'No somos parte de la oferta municipal ni tenemos convenio con la Municipalidad de San Borja; somos una academia en línea que enseña desde la India.'
          ] }
      ]
    },
    {
      id: 'combinar',
      eyebrow: 'Deporte y código',
      h2: '¿Cómo combinar natación o fútbol con clases de programación?',
      lede: 'Con la clase de programación en la parte del día que el deporte deja libre. Un niño que llega cansado de la piscina no programa bien a los cinco minutos; uno que almorzó y descansó, sí.',
      body: [
        { kind: 'ol', items: [
          '<strong>Primero lo que no se mueve.</strong> Anote las horas de los talleres municipales o del club, que son las que no se mueven. Lo que quede libre es el espacio para la clase en línea.',
          '<strong>Una pausa entre las dos cosas.</strong> Deje al menos una hora entre el regreso del taller y la clase. Agua, comida y ropa seca primero; la computadora después.',
          '<strong>Cuatro o cinco tardes, a la misma hora.</strong> A los niños de primaria les ayuda que la clase caiga siempre a la misma hora, como el entrenamiento; con cuatro clases, el día libre puede ser el de la competencia o el paseo.',
          '<strong>Un proyecto con tema deportivo.</strong> Si su hijo nada, que programe un marcador de tiempos; si juega fútbol, una tabla de posiciones. El interés que ya trae hace el resto.',
          '<strong>Una muestra al final del mes.</strong> Pida a su hijo que le enseñe lo que construyó y le explique cómo funciona. Es la forma más sencilla de saber si está aprendiendo.'
        ] },
        { kind: 'p', mt: true, html: 'Le proponemos este orden porque lo hemos visto funcionar, no porque sea una regla. Hay niños que prefieren programar por la mañana y nadar por la tarde; con clases individuales eso se organiza sin problema, y en grupo se busca el horario más cercano.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo que tienen en común', p: 'El deporte y la programación se aprenden igual: practicando, equivocándose y corrigiendo. Un niño que entiende que un estilo de nado se pule por partes entiende rápido que un programa también.' },
          { h3: 'Lo que no se cruza', p: 'La clase en línea no necesita uniforme, transporte ni que un adulto lleve al niño. Solo una computadora encendida y audífonos.' },
          { h3: 'Lo que se gana en inglés', p: 'Cada clase es una hora de escuchar y hablar inglés con un propósito. El EF EPI 2025 marca el habla como la habilidad más baja del país, con 480 puntos; justo la que se practica aquí.' }
        ] }
      ]
    },
    {
      id: 'primaria',
      eyebrow: 'El colegio',
      h2: '¿Cuántas horas de deporte y de computación tiene un niño en primaria?',
      lede: 'De deporte, tres horas pedagógicas a la semana en cada grado. De computación o programación, ninguna como área propia: el plan de estudios de primaria del CNEB no la incluye.',
      body: [
        { kind: 'two',
          leftH3: 'La educación física sí tiene su hora',
          left: [
            'La Tabla N.° 6 del Currículo Nacional da a Educación física 3 horas pedagógicas semanales de 1° a 6° de primaria. Con horas de 45 minutos son 135 minutos a la semana, según nuestra cuenta.',
            'Matemática recibe 5 horas en 1° y 2° y 4 horas de 3° a 6°, dentro de un total de 30 horas semanales.'
          ],
          rightH3: 'La programación depende de cada colegio',
          right: [
            'La tabla no reserva horas para computación. Lo digital aparece repartido dentro de otras áreas, y cada colegio decide si dedica a un taller las horas que el CNEB deja a su criterio.',
            'Por eso dos niños de San Borja del mismo grado pueden llegar al verano con experiencias muy distintas. En la clase gratis el mentor ve dónde está su hijo y empieza desde ahí.'
          ] },
        { kind: 'p', mt: true, html: 'Nuestras clases van aparte del colegio y no dan notas. Ni el MINEDU ni colegio alguno tienen relación con nosotros. Si su hijo completa un curso, le entregamos un certificado de culminación que emitimos nosotros, y que no es un documento del sistema educativo. Para ver con más detalle qué enseña la primaria y a qué edad conviene empezar, puede leer nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo aprende un niño a resumir sus tiempos de natación con Python?',
      lede: 'Con sus propios números. En este ejercicio nuestro, un niño de 10 u 11 años anota siete vueltas de práctica en la piscina; en la quinta se le soltaron los lentes y tardó mucho más. La pregunta es sencilla: ¿cuál es su tiempo de verdad?',
      body: [
        { kind: 'code', label: 'Versión 1: promedio y mediana de siete vueltas', lang: 'Python', code: V1, note: 'La mediana es el valor del medio cuando la lista está ordenada. El mentor pregunta en inglés antes de ejecutar: "Which number describes your normal lap better?"' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Resultado tal cual lo mostró Python 3 en nuestra computadora. El promedio da 44.4 segundos, más lento que seis de las siete vueltas; la mediana da 42.1, que se parece a lo que el niño nada de verdad.' },
        { kind: 'p', mt: true, html: 'Aquí está la lección. El programa no tiene ningún error y el promedio está bien calculado, pero una sola vuelta mala, la de 58.4 segundos, lo arrastra hacia arriba. La mediana no se mueve: solo le importa qué valor queda en el centro. El niño tiene que descubrirlo mirando los números con ojos de entrenador, no de calculadora. Luego prueba qué pasa si saca la vuelta de los lentes, y se encuentra con un problema nuevo: ahora hay seis vueltas y no existe un único valor del medio.' },
        { kind: 'code', mt: true, label: 'Versión 2: sin la vuelta mala, con seis vueltas', lang: 'Python', code: V2, note: 'Con un número par de datos, la mediana es el promedio de los dos valores del centro. La condición <code>len(laps) % 2 == 1</code> pregunta si la cantidad es impar.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta de la versión 2, ejecutada por nosotros con Python 3. Sin la vuelta de los lentes, promedio (42.1) y mediana (42.0) casi coinciden: cuando no hay un dato raro, los dos cuentan la misma historia.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer la lista.</strong> El niño dice en inglés cuál fue su vuelta más rápida y cuál la más lenta antes de ejecutar nada: "My best lap was 41.6 seconds".',
          '<strong>Sospechar del promedio.</strong> Al ver "Average: 44.4", el mentor pregunta: "Did you swim 44 seconds in any lap?" El niño revisa y responde que no, en una frase.',
          '<strong>Entender la mediana.</strong> Con la lista ordenada en pantalla, cuenta tres a cada lado del 42.1 y explica por qué ese es el del medio.',
          '<strong>Resolver el caso par.</strong> Con seis vueltas no hay un solo centro; el niño propone qué hacer antes de ver la versión 2, y luego la compara con su idea.',
          '<strong>Llevarlo a su deporte.</strong> Con goles por partido, puntos de gimnasia o tiempos de skate, el niño arma su propia lista, mete un dato raro a propósito y mira cuál de los dos números se mueve.'
        ] }
      ]
    },
    {
      id: 'edades',
      eyebrow: 'Por edad',
      h2: '¿Qué puede construir un niño en un verano, según su edad?',
      lede: 'Un proyecto terminado, a la medida de su edad. Esta tabla es nuestra propuesta; el mentor la ajusta en la clase gratis según lo que vea.',
      body: [
        { kind: 'table', numCols: [], caption: 'Un proyecto de verano por edad (nuestra propuesta)', head: ['Edad', 'Herramienta', 'Proyecto de verano', 'Lo que aprende sin darse cuenta'], rows: [
          ['8 años', 'Scratch', 'Un personaje que esquiva pelotas y suma puntos', 'Eventos, coordenadas, variables'],
          ['9 años', 'Scratch o Minecraft', 'Una carrera con cronómetro y récord guardado', 'Condiciones y comparación de números'],
          ['10 años', 'Python', 'Un registro de vueltas de natación como el del ejemplo', 'Listas, promedio, mediana'],
          ['11 años', 'Python o Roblox', 'Un diario de entrenamiento que avisa cuando una marca supera la anterior', 'Comparaciones, variables que guardan el récord'],
          ['12 años', 'Python', 'Un programa que pregunta resultados y dibuja una tabla', 'Entrada de datos, validación y orden']
        ] },
        { kind: 'source', html: 'Proyectos y edades: propuesta nuestra, no un programa con fecha de cierre. Cada niño avanza a su ritmo y continúa después del verano si lo desea.' },
        { kind: 'p', mt: true, html: 'Notará que casi todos los proyectos tienen que ver con el deporte. No es casualidad: en un distrito donde los niños pasan el verano en polideportivos, un marcador de tiempos o una tabla de posiciones les resulta propia, y eso hace que quieran terminarla. Si su hijo prefiere los dinosaurios, la música o el espacio, el mentor cambia el tema y conserva la lección.' }
      ]
    },
    {
      id: 'marzo',
      eyebrow: 'Después del verano',
      h2: '¿Qué pasa con las clases cuando vuelve el colegio?',
      lede: 'Siguen, si usted quiere, con dos cambios: el ritmo baja de 4 o 5 clases semanales a dos, y la hora suele moverse para no chocar con el colegio. El mentor y el proyecto son los mismos.',
      body: [
        { kind: 'p', html: 'El año escolar 2027 todavía no tenía calendario oficial cuando revisamos el portal del Estado, el 9 de noviembre de 2026. Para que se haga una idea de las pausas que trae un año escolar, esta es la distribución del año 2026 que fijó el MINEDU, con sus semanas sin clases a mitad de año.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Bloques lectivos y semanas sin clases del año escolar 2026 (MINEDU)', head: ['Tramo', 'Fechas de 2026', 'Qué significa para la clase en línea'], rows: [
          ['Inicio de clases', 'Desde el 16 de marzo', 'La clase de verano pasa a la tarde'],
          ['Pausa de mayo', 'Del 18 al 22 de mayo', 'Una semana libre: buena para terminar un proyecto'],
          ['Pausa de medio año', 'Del 27 de julio al 7 de agosto', 'Dos semanas: se puede sumar una clase extra'],
          ['Pausa de octubre', 'Del 12 al 16 de octubre', 'Otra semana para avanzar sin tareas'],
          ['Fin de clases', '18 de diciembre', 'Empieza otro verano']
        ] },
        { kind: 'source', html: 'Fuente de las fechas: Ministerio de Educación, RM 501-2025-MINEDU, Tabla 1, comprobada en la imagen del PDF firmado y consultada el 9 de noviembre de 2026. Las semanas sin clases son las que la norma llama semanas de gestión. La tercera columna es nuestra. Las DRE y UGEL pueden fijar otra distribución, y cada colegio organiza su año.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Sin traslados',
      h2: '¿Por qué tomar las clases de programación en línea viviendo en San Borja?',
      lede: 'Porque el verano ya tiene suficientes idas y vueltas. Cada taller presencial suma un viaje, y en enero y febrero las avenidas que van hacia la playa o hacia otros distritos se llenan; no necesitamos cifras para que usted lo sepa.',
      body: [
        { kind: 'two',
          leftH3: 'La conexión no suele ser el problema',
          left: [
            'Según el INEI, en el segundo trimestre de 2026 el 84,7 % de los hogares de Lima Metropolitana tenía internet, frente al 64,5 % del promedio nacional. Para el INEI, Lima Metropolitana incluye el Callao.',
            'En ese mismo periodo, el grupo infantil, entre 6 y 11 años, registró el uso de internet más bajo, con 68,2 %. Muchos niños llegan a la clase sabiendo usar un celular pero no un teclado, y por eso empezamos despacio.'
          ],
          rightH3: 'Lo que necesita en casa',
          right: [
            'Una laptop o computadora con teclado, cámara, micrófono y audífonos. Con una tablet se puede empezar con bloques; con un celular, no.',
            'Un adulto cerca en las primeras clases ayuda a los más pequeños a sentirse acompañados. Desde la tercera o cuarta semana, la mayoría ya se conecta solo.'
          ] },
        { kind: 'p', mt: true, html: 'Si su hijo es mayor, ya está en secundaria y piensa en olimpiadas de informática, la ruta es otra; la explicamos en nuestra <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">guía general para el Perú</a>, que también resume el sistema escolar en una tabla.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Dos relojes',
      h2: '¿Cómo se acomoda el reloj peruano al de los mentores en la India?',
      lede: 'Sin complicaciones, porque la diferencia nunca cambia. La India está 10 horas y 30 minutos por delante de Perú en cualquier mes del año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tres horas de una mañana de verano en Perú y su equivalente en la India (conversiones de ejemplo, no un horario)', head: ['Mañana en Perú', 'Noche en la India'], rows: [
          ['8:00 a. m.', '6:30 p. m.'],
          ['9:30 a. m.', '8:00 p. m.'],
          ['11:00 a. m.', '9:30 p. m.']
        ] },
        { kind: 'source', html: 'Perú se rige por UTC-5 en los doce meses; el último cambio de hora estacional fue en 1994 (tzdata, America/Lima; hora oficial del INACAL). La India se rige por UTC+5:30, también sin cambios.' },
        { kind: 'p', mt: true, html: 'Las mañanas de Perú caen en la tarde y la noche de la India, por eso son cómodas para ambos lados en enero y febrero. Si su hijo tiene natación temprano, la clase puede ir más tarde: usted la elige en su propio reloj al reservar y el mentor la ve convertida en el suyo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo sabrá que su hijo avanza?',
    lede: 'Cuatro marcas propias, pensadas como las de un entrenamiento.',
    table: { caption: 'Cuatro marcas de avance en programación para primaria (nuestras)', head: ['Marca', 'Su hijo ya puede', 'Señal en casa'], rows: [
      ['Calentamiento', 'mover un personaje con bloques y explicar qué hace cada uno', 'le cuenta su juego con entusiasmo'],
      ['Técnica', 'usar repeticiones y condiciones sin copiar un modelo', 'arregla solo un error pequeño'],
      ['Competencia', 'escribir en Python un programa que ordena o cuenta datos', 'predice lo que va a imprimir'],
      ['Récord propio', 'terminar un proyecto con su idea y presentarlo en inglés', 'se lo muestra a la familia sin que se lo pidan']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'No mida el avance por la velocidad. Mídalo por cuánto entiende: un niño que explica por qué la mediana no se movió con la vuelta de los lentes entendió más que uno que copió el código.',
      'Después de las clases recibirá una nota corta del mentor. Puede responder por WhatsApp en castellano.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Antes de ejecutar, adivine lo que va a salir.',
      'Si algo sale raro, mírelo como un juez: ¿es justo, es correcto, tiene sentido?'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos pensados para primaria',
    lede: 'Cualquiera vale para el camino a elección: en inglés y por videollamada, para un grupo o para un solo niño, a 4 o 5 clases por semana durante las vacaciones.',
    bands: [
      { num: 'I', h3: 'Para empezar', sub: 'Sin experiencia previa', courses: [
        { code: 'VUT / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'De Scratch a juegos y apps sencillas, con grupos por edad.' },
        { code: 'VUT / BASE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Resolver problemas paso a paso, de 7 a 12 años.' },
        { code: 'VUT / BASE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Automatizar construcciones dentro de un mundo conocido.' }
      ] },
      { num: 'II', h3: 'Para el que ama los juegos', sub: 'De 8 a 12 años', courses: [
        { code: 'VUT / JUEGO / 01', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos para niños', blurb: 'Scratch, Roblox y Minecraft en un solo recorrido, de 8 a 12 años.' },
        { code: 'VUT / JUEGO / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Juegos con Godot', blurb: 'Del bloque al código escrito, en 2D y 3D, desde los 10 años.' },
        { code: 'VUT / JUEGO / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ desde los 9', blurb: 'Un lenguaje exigente, presentado con retos cortos y pequeños juegos.' }
      ] },
      { num: 'III', h3: 'Para pensar con datos', sub: 'De 8 a 12 años', courses: [
        { code: 'VUT / DATOS / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la inteligencia artificial', blurb: 'Qué hay detrás de una respuesta de IA y por qué a veces falla.' },
        { code: 'VUT / DATOS / 02', slug: 'kids-ai-web-development-course', title: 'Su primera web', blurb: 'HTML y CSS hasta publicar una página propia.' },
        { code: 'VUT / DATOS / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido numérico, no trucos, hasta los 10 años.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Así funciona',
    h2: '¿Qué pasa en una clase en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después de la piscina', l: 'Con el niño ya comido y descansado.' },
      { time: 'Antes del taller', l: 'Una hora temprano, si el deporte es por la tarde.' },
      { time: 'Individual', l: 'El horario lo fija usted y se cambia si hace falta.' }
    ],
    cells: [
      { h3: 'Siempre el mismo mentor', p: 'Su hijo no empieza de cero con alguien nuevo cada semana.' },
      { h3: 'Inglés sin prisa', p: 'Lo que el mentor explica también aparece escrito, y lo repite de otra forma si hace falta.' },
      { h3: 'Manos en el teclado', p: 'El niño programa; el mentor pregunta y guía.' },
      { h3: 'Ritmo de verano', p: 'Cuatro o cinco tardes por semana, con algo terminado que enseñar.' },
      { h3: 'Noticias para la familia', p: 'Una nota breve tras las clases con lo hecho y lo que sigue.' },
      { h3: 'Grupo o solo', p: 'Grupos de quince a veinte, de edades parecidas, o clases individuales.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Con los años, quien arranca con bloques llega a proyectos como estos. Puede ver más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, una página en inglés.',
  reviewsLede: 'Comentarios que familias y estudiantes publicaron en Google; los dejamos como los escribieron, en inglés.',

  fees: {
    h2: 'Precios para familias de San Borja',
    lede: 'Las cifras de estas tarjetas son las mensualidades del año escolar, de ocho clases, expresadas en dólares de Estados Unidos y pagadas con tarjeta; su banco las convierte a soles. El verano tiene otro ritmo, de 4 a 5 clases por semana, y su mensualidad se conversa con el mentor antes de empezar. La primera clase va por nuestra cuenta.',
    free: ['Una clase de prueba con un mentor', 'El mentor le dice por dónde empezar', 'No se pide tarjeta'],
    group: ['De quince a veinte niños de edad cercana', 'Un mentor fijo durante el curso', 'Dos clases semanales en el año; 4 o 5 en el verano, a convenir', 'Se paga mes por mes y se deja cuando quiera'],
    one: ['Su hijo solo con el mentor', 'El ritmo y el tema que él necesita', 'El horario que usted fije']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en San Borja: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, todas se dictan en inglés, y para la mayoría de familias eso suma: su hijo programa y escucha y habla inglés durante una hora entera. El mentor va despacio y acepta que el niño responda a veces en castellano. Lima figura con 555 puntos, en el nivel alto, en el EF EPI 2025.' },
      { q: '¿La Municipalidad de San Borja dicta talleres de programación en el verano?', a: 'En su nota sobre el verano 2025, la municipalidad enumera talleres de deporte, arte y música, sin mencionar programación. No tenemos ninguna relación con la municipalidad; nuestras clases son en línea y aparte de su oferta.' },
      { q: '¿Se puede hacer programación y natación en el mismo verano?', a: 'Sí. La clase es en casa y a la hora que usted elija, así que se ubica en el espacio que dejan la piscina o el fútbol. Recomendamos al menos una hora de descanso entre el taller y la clase.' },
      { q: '¿Cuántas clases por semana tiene el verano?', a: 'Entre 4 y 5, en vivo, de una hora más o menos. En una semana de cuatro clases queda un día libre, útil para una competencia de natación o un paseo; en el año escolar se baja a dos por semana.' },
      { q: '¿Cuánto dura el verano y alcanza para terminar un curso?', a: 'Dura desde la semana en que su hijo empiece, entre enero y marzo, hasta que vuelva el colegio. Por nuestra cuenta, diez semanas a 4 o 5 clases son de 40 a 50 clases: Scratch se termina, Roblox con Luau queda listo o casi, y Python e IA para niños pasa de la mitad y continúa en marzo. Un curso largo no se cierra en vacaciones.' },
      { q: '¿Qué edad debe tener mi hijo?', a: 'Esta página está pensada para niños de 8 a 12 años. Desde los 6 se puede empezar con bloques, y los mayores de 12 tienen cursos para adolescentes.' },
      { q: '¿Qué aprende mi hijo en la clase de ejemplo?', a: 'A resumir una lista de tiempos con Python y a elegir el número que la describe con honestidad. Con una vuelta mala, el promedio sube a 44.4 segundos y la mediana se queda en 42.1; sin ella, los dos casi coinciden.' },
      { q: '¿A qué hora puede ser la clase?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, las 9:30 de la mañana en Lima equivalen a las 8:00 de la noche en la India.' },
            { q: '¿Cuánto cuesta el verano?', a: 'La tarifa que se ve en la página es la del ritmo normal, ocho clases al mes. La del verano, con 4 o 5 clases semanales en grupo o individuales, se acuerda con el mentor antes de empezar. Se paga mes a mes con tarjeta, en dólares estadounidenses, y el banco hace la conversión; la clase de prueba no cuesta nada.' },
      { q: '¿Las clases cuentan para el colegio?', a: 'No. No damos notas ni reemplazamos cursos escolares, y no tenemos relación con el MINEDU ni con colegio alguno. Lo que sí entregamos, al cerrar cada curso, es un certificado de culminación de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Otras lecturas para el verano',
    lede: 'Páginas que suelen consultar las familias con niños de primaria.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué enseña la primaria y a qué edad empezar.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Programación e IA en Perú', p: 'La guía para todo el país.' },
      { href: '/ai-projects-for-kids', label: 'AI projects for kids', p: 'Ideas de IA para las vacaciones que no exigen registrarse en ninguna plataforma.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima que pide cada herramienta de IA, revisada.' },
      { href: '/student-labs', label: 'Student labs', p: 'Lo que publican nuestros estudiantes.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una clase nuestra explicada paso a paso.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase antes de que empiece el verano',
    lede: 'En la clase de prueba el mentor saluda a su hijo en un inglés muy simple, le pide mover un personaje o escribir una línea de Python, y observa cómo piensa. Al final le sugerimos el camino (Python e IA o un curso a elección), cuatro o cinco tardes por semana, el formato y un primer proyecto; con eso se acuerda la mensualidad del verano, sin compromiso.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> (en inglés).',
    note: 'Las clases son siempre en inglés, por videollamada y con mentores en la India. Si nos escribe por WhatsApp, puede hacerlo en castellano.',
    formNote: 'Sin costo, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch desde cero' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox con Luau' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Guía para Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Una vuelta mala no cuenta toda la historia'
  },

  personalityCss: `
.ag-root.ag-vut .ag-hero h1 { max-width: 20ch; }
.ag-root.ag-vut .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-vut .ag-table td.ag-num { font-variant-numeric: tabular-nums; font-weight: 600; }
.ag-root.ag-vut .ag-steps li strong { letter-spacing: 0.01em; }
.ag-root.ag-vut .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Distrital de San Borja (gob.pe/munisanborja): notes of 6 March 2025 (summer 2025 workshops) and 24 February 2026 (EcoKids); INEI Censos Nacionales 2025 and Boletín TIC II trimestre 2026; MINEDU CNEB Tabla N.° 6 and RM 501-2025-MINEDU Tabla 1 (read by eye); EF EPI 2025; tzdata and INACAL. Read 8 and 9 November 2026. The two summer tracks, the start-week and track tables, the sport-and-code routine, the projects by age, the progress marks and the example are ours.',
    localProject: 'One slow lap in a made-up San Borja swimming practice, in Python: seven laps with a 58.4 s outlier print Average: 44.4 and Median: 42.1; removing it leaves six laps, the even-count median is the mean of the two middle values, and the program prints Average: 42.1 and Median: 42.0. Lesson family: the mean is pulled by one outlier, the median is not; the even-count median.',
    requiredMentions: ['Average: 44.4', 'Median: 42.1', 'Median: 42.0', 'San Borja tiene 126,125 habitantes', 'Ceramikids', 'Monterrico Norte', 'son 135 minutos a la semana', 'Una vuelta mala no cuenta toda la historia', 'frente al 64,5 % del promedio nacional', 'Distrito Olímpico', 'Total que publica la municipalidad', 'Clases de verano según la semana en que empieza su hijo'],
    sources: [
      { claim: 'Summer 2025 workshops: 11,430 participants in January and February; 3,000 at the Centro Cultural; 8,430 at four polideportivos; workshops named; Distrito Olímpico 2022.', url: 'https://www.gob.pe/institucion/munisanborja/noticias/1125306-verano-deportivo-y-cultural-en-san-borja' },
      { claim: 'EcoKids closed 24 February 2026, recycling and waste workshops for children.', url: 'https://www.gob.pe/institucion/munisanborja/noticias/1358785-san-borja-clausura-con-exito-el-programa-ecokids' },
      { claim: 'San Borja 126,125 inhabitants (Censos Nacionales 2025, población total).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Primaria weekly hours: Educación física 3, Matemática 5 and 4, total 30; 45-minute teaching hours; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 school calendar blocks and management weeks.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'Households with internet: 84.7% Lima Metropolitana, 64.5% national; children 6 to 11 used internet 68.2%, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555 (high), speaking 480.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Adding the Centro Cultural and polideportivo figures ourselves: refused; the page prints the municipality\'s own total of 11,430.',
      'OMAPED summer workshops (disability office): left out; identity-related programme, not needed.',
      'Any affiliation with the Municipalidad de San Borja: refused; the page says we have none.',
      'A summer price, a fixed 2027 end date or a long course finished in the summer: refused; the 4 to 5 a week pace and its fee are agreed with the mentor, and the start-week table is labelled illustrative.',
      'Traffic figures: refused; none sourced.',
      'Spanish-language teaching, MINEDU or school endorsement, official certificate: refused.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

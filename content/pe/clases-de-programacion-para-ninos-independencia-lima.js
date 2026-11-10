// SHIP: district (kids, year-round) | Independencia (Lima Norte): the family computer put to work, all year, from home | range() with a step: skip-counting by 3, a countdown, the stop that is never reached
'use strict';
// Clases de programación para niños en Independencia, Lima (ag- Spanish district door, Peru cluster row PE211, P6,
// hubGroup lima). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Independencia (Lima Norte) whose child uses the family computer for homework and games, and who
// wants it to become a tool for making things, all through the school year. Spine: which Independencia (four districts
// share the name in the 2025 census); how many children and adolescents, age by age; the municipality's own computer-
// maintenance programme and what INEI says about computers at home in Lima; English with a mentor in India; one original
// Python lesson on range() with a step; adolescentes and MINEDU's Fábrica de Programadores pilot in Lima Norte; clocks.
// No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// independencia-lima/, gob.pe notes fetched 10 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx, 856800 bytes,
//    updated "al 15 de julio del año 2026"). CUADRO Nº 1: "DISTRITO INDEPENDENCIA | 225078 | 111160 | 113918 | 214620 | ...
//    | 10458". CUADRO Nº 3: "DISTRITO INDEPENDENCIA | 214620 | 12228 | 18582 | 20034 | 40693 | 49116 | 40117 | 33850".
//    CUADRO Nº 2 single ages: 6 años 2640, 7 años 3022, 8 años 3110, 9 años 3182, 10 años 3293, 11 años 3335, 12 años 3397,
//    13 años 3232, 14 años 3259, 15 años 3345, 16 años 3362, 17 años 3439; rural 0.
//  INEI national workbook (inei-censos2025-ind_00-peru.xlsx), CUADRO Nº 1: "DISTRITO INDEPENDENCIA" rows of 88999 (provincia
//    Huaraz), 1090 (Vilcas Huamán), 16811 (Pisco) and 225078 (Lima).
//  Municipalidad Distrital de Independencia - Lima on gob.pe (institucion/muniindependencia-lima):
//    n-1119563 (3 Mar 2025): "Programa de Mantenimiento de Computadoras en tu Barrio, un servicio gratuito"; "se han
//    realizado más de 300 mantenimientos, beneficiando a más de 1200 personas"; "actividades educativas, laborales y
//    comerciales". The mayor's quote and his "first in the country" claim are left out.
//    n-1434803 (21 Aug 2026): "Al cumplirse 20 años de la inauguración del Coliseo de la Amistad Perú-Japón"; "ubicado en la
//    urbanización Tahuantinsuyo"; "talleres gratuitos". Former mayor's name left out.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 36,4% de los hogares del país
//    disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana"; "el 74,3% cuenta con
//    una sola unidad"; "Solo el 47,7% de la población descargó, instaló y configuró nuevo software".
//  MINEDU press note (FACTS 45, 46): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con formación
//    en programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global".
//  CNEB (FACTS 39): secundaria "Inglés 3 3 3 3 3", no computing area. EF EPI 2025 (MARKET 1.3): Lima 555, high from 550.
//  Time (timezone.tsv): America/Lima UTC-5, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): 18582 / 214620 = 8.7 %; 20034 / 214620 = 9.3 %; 225078 / 10141775 = 2.2 %;
//    10458 / 225078 = 4.6 % omitted; 2640+3022+3110+3182+3293+3335+3397 = 21979 children aged 6 to 12.
// Our own example (saltos.py in the src-pages folder), run with python3 -I, exact output:
//    Count by 3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30] / Stop at 30: [3, 6, 9, 12, 15, 18, 21, 24, 27] /
//    Countdown: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] / Wrong way: []
// Neighbouring districts named in plain text only (Comas, Los Olivos, San Martín de Porres, Rímac).
// Lesson family: range(start, stop, step); skip-counting, a negative step, the stop value left out, an empty range.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "print('Count by 3:', list(range(3, 31, 3)))",
  "print('Stop at 30:', list(range(3, 30, 3)))",
  "print('Countdown:', list(range(10, 0, -1)))",
  "print('Wrong way:', list(range(10, 0)))"
].join('\n');

const OUT = [
  'Count by 3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]',
  'Stop at 30: [3, 6, 9, 12, 15, 18, 21, 24, 27]',
  'Countdown: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]',
  'Wrong way: []'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Independencia' },
  slug: 'clases-de-programacion-para-ninos-independencia-lima',
  code: 'prin',
  accent: '#566609',
  accentRationale: 'Independencia: a moss green #566609 with a yellow lean, the tone of the cerros of Lima Norte after the winter garúa, distinct from the darker greens of the neighbouring district doors; allocated in alloc.tsv (contrast 5.16 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Independencia',
  title: 'Clases de programación para niños en Independencia, Lima',
  description: 'Clases de programación para niños de 6 a 12 años en Independencia, Lima Norte: en vivo y en inglés, desde la computadora de casa, todo el año y a cualquier hora.',
  ogDescription: 'Programación para niños de Independencia sin salir de casa: el censo 2025 edad por edad, qué hace falta en la computadora familiar y un reto en Python para contar de tres en tres.',
  twitterDescription: 'Programación para niños de Independencia, Lima Norte: clases en vivo y en inglés desde casa, cuando usted elija.',
  pageName: 'Clases de programación para niños en Independencia, Lima',
  webPageDescription: 'Guía para familias de Independencia, en Lima Norte, que buscan clases de programación para niños de 6 a 12 años todo el año: niños y adolescentes por edad según los Censos Nacionales 2025 del INEI, el programa municipal de mantenimiento de computadoras, las computadoras en los hogares de Lima según el INEI, el piloto Fábrica de Programadores del MINEDU y un ejercicio de Python con range escrito por nosotros.',
  courseDescription: 'Clases en vivo de programación para niños de 6 a 12 años de Independencia, Lima, dictadas solo en inglés por videollamada: Scratch, Python, juegos y proyectos de IA, en grupo o individuales, cualquier semana del año y a la hora que la familia elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Independencia',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#cual', label: '¿Qué Independencia?' },
    { href: '#edad-por-edad', label: 'Edad por edad' },
    { href: '#computadora', label: 'La computadora' },
    { href: '#de-tres-en-tres', label: 'Reto en Python' },
    { href: '#secundaria', label: 'Secundaria' }
  ],
  eyebrow: 'Lima Norte &middot; Independencia &middot; Primaria',
  h1: 'Clases de programación para niños en Independencia',
  lede: 'En muchas casas de Independencia la computadora sirve para las tareas, los trabajos del colegio y algún juego. Con una clase de programación, esa misma máquina se vuelve un taller donde su hijo crea cosas propias. Aquí verá cuántos niños tiene el distrito según el censo de 2025, qué necesita la computadora, cómo es aprender en inglés y un primer reto en Python.',
  secondaryCta: { href: '#de-tres-en-tres', label: 'Probar el reto de contar de tres en tres' },
  wa: 'Hola Modern Age Coders, somos de Independencia (Lima) y queremos clases de programación para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en distintos países &middot; un mentor por curso, que enseña en inglés',
  spec: [
    ['Edad', 'De 6 a 12 años; secundaria en grupos propios'],
    ['Desde dónde', 'Su casa en Independencia, con la computadora familiar'],
    ['Época', 'Todo el año escolar y también las vacaciones'],
    ['Idioma de clase', 'Inglés, hablado con calma'],
    ['Formato', 'Grupo de quince a veinte o clases individuales'],
    ['Clase de prueba', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'Respuesta directa',
  capsule: 'Sí. Su hijo de 6 a 12 años puede aprender a programar desde la computadora de su casa en Independencia con Modern Age Coders: clases en vivo y en inglés, dictadas por un mentor que enseña desde la India, habla con calma y sigue el ritmo del niño. Se empieza con Scratch y bloques y luego se pasa a Python, juegos en Roblox y proyectos de IA. Las clases siguen todo el año, en grupo o individuales, el día y a la hora que usted decida, y la primera no se cobra.',

  picks: {
    eyebrow: 'Primeros cursos',
    h2: '¿Qué curso de programación puede tomar un niño de Independencia?',
    lede: 'Tres opciones según la edad: Scratch para quien recién empieza, Python para quien ya lee y teclea sin problema, y Minecraft para quien aprende jugando en un mundo que ya conoce.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRIN / 01', title: 'Scratch, paso a paso', alt: 'Imagen del curso completo de Scratch', note: 'De 6 a 10 años. Historias, laberintos y juegos de puntaje con bloques. Ideal si es la primera vez que su hijo usa la computadora para crear y no solo para mirar.' },
      { course: 'python-ai-kids-masterclass', code: 'PRIN / 02', title: 'Python con inteligencia artificial', alt: 'Imagen del curso de Python e IA para niños', note: 'De 9 a 12 años. El niño escribe código real: cuenta, repite, decide y arma pequeños proyectos de IA. El reto de esta página, con <code>range</code>, es de las primeras semanas.' },
      { course: 'minecraft-coding-for-kids-course', code: 'PRIN / 03', title: 'Programar en Minecraft', alt: 'Imagen del curso de programación en Minecraft para niños', note: 'De 7 a 12 años. Construcciones automáticas y comandos dentro del juego, para niños que aprenden más rápido cuando el resultado aparece frente a sus ojos.' }
    ]
  },

  sections: [
    {
      id: 'cual',
      eyebrow: 'Un nombre, cuatro distritos',
      h2: '¿De qué Independencia habla esta página?',
      lede: 'Del distrito de Independencia en Lima Metropolitana, en Lima Norte, vecino de Comas, Los Olivos, San Martín de Porres y el Rímac. En el censo de 2025 hay otros tres distritos con el mismo nombre en el país, y conviene no confundirlos al buscar clases.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Distritos llamados Independencia en el censo de 2025', head: ['Provincia y departamento', 'Población total'], rows: [
          ['Lima, Lima Metropolitana', '225,078'],
          ['Huaraz, Áncash', '88,999'],
          ['Pisco, Ica', '16,811'],
          ['Vilcas Huamán, Ayacucho', '1,090']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, cuadro 1 del archivo nacional de indicadores demográficos (población total, censada más omitida), con límites vigentes al 15 de julio de 2026. Nuestras clases son en línea y llegan a los cuatro, pero esta guía usa solo los datos del distrito limeño.' },
        { kind: 'two', mt: true,
          leftH3: 'Independencia en cifras',
          left: [
            'El INEI le calcula 225,078 habitantes: 214,620 censados y 10,458 que el censo no alcanzó a registrar, un 4,6 % del total según nuestro cálculo. Es el 2,2 % de la población de Lima Metropolitana.',
            'El cuadro 2 ubica a toda su población censada en área urbana; no hay filas rurales para el distrito.'
          ],
          rightH3: 'Niños y adolescentes',
          right: [
            'Entre los censados hay 18,582 niños de 6 a 11 años (8,7 %) y 20,034 adolescentes de 12 a 17 (9,3 %), porcentajes nuestros sobre el cuadro 3. En Independencia hay más chicos en edad de secundaria que de primaria.',
            'Son cifras de cuántas personas hay y de qué edad. No dicen nada sobre cómo vive cada familia, y no las usamos para imaginarlo.'
          ] }
      ]
    },
    {
      id: 'edad-por-edad',
      eyebrow: 'Censo 2025, edades simples',
      h2: '¿Cuántos niños de cada edad viven en Independencia?',
      lede: 'Entre 2,640 y 3,439 por cada año de edad, de los 6 a los 17. La tabla pone lado a lado la edad de primaria y la de secundaria para que vea dónde está su hijo.',
      body: [
        { kind: 'table', numCols: [1, 3], caption: 'Censados en Independencia por edad simple, de 6 a 17 años', head: ['Edad de primaria', 'Censados', 'Edad de secundaria', 'Censados'], rows: [
          ['6 años', '2,640', '12 años', '3,397'],
          ['7 años', '3,022', '13 años', '3,232'],
          ['8 años', '3,110', '14 años', '3,259'],
          ['9 años', '3,182', '15 años', '3,345'],
          ['10 años', '3,293', '16 años', '3,362'],
          ['11 años', '3,335', '17 años', '3,439']
        ] },
        { kind: 'source', html: 'Fuente: cuadro 2 (población censada por edades simples) de los Censos Nacionales 2025 del INEI para Lima Metropolitana, versión actualizada al 15 de julio de 2026. Cuenta solo a las personas censadas. Los 12 años aparecen en la columna de secundaria porque es la edad normativa de 1° de secundaria según el MINEDU, medida al 31 de marzo.' },
        { kind: 'p', mt: true, html: 'Sumando de los 6 a los 12 años salen 21,979 niños, la edad que cubren nuestras clases para niños (suma nuestra). La cifra sube año a año: hay más chicos de 11 que de 6, y más de 17 que de 12. Para una familia, el dato práctico es otro: su hijo tiene miles de compañeros de su misma edad en el distrito, y muy pocos aprenden a programar.' },
        { kind: 'p', html: 'Si su hijo tiene 6 años, empezará con bloques grandes y personajes; si tiene 10 u 11, puede ir directo a Python después de unas pocas clases de bloques. Nuestra guía de <a class="ag-inline-link" href="/programacion-para-ninos-de-6-anos">programación para niños de 6 años</a> explica el inicio con los más pequeños.' }
      ]
    },
    {
      id: 'computadora',
      eyebrow: 'La computadora de la casa',
      h2: '¿Sirve la computadora familiar para aprender a programar?',
      lede: 'Casi siempre sí. Scratch funciona en el navegador y Python es liviano; no hace falta una máquina nueva ni potente. Lo que sí importa es que funcione bien, tenga teclado, cámara y micrófono, y que esté libre a la hora de la clase.',
      body: [
        { kind: 'p', html: 'La Municipalidad de Independencia le ha dado importancia al tema. En una nota del 3 de marzo de 2025 en gob.pe presentó el "Programa de Mantenimiento de Computadoras en tu Barrio, un servicio gratuito" para vecinos cuyos equipos andaban lentos o con fallas, y contó que se habían hecho "más de 300 mantenimientos, beneficiando a más de 1200 personas". La nota menciona que muchas familias dependen de la computadora para "actividades educativas, laborales y comerciales". No tenemos relación con ese programa; lo citamos porque describe una realidad del distrito.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Computadoras en los hogares, segundo trimestre de 2026 (INEI)', head: ['Medición', 'Valor'], rows: [
          ['Hogares del país con al menos una computadora', '36,4 %'],
          ['Hogares de Lima Metropolitana con al menos una computadora', '53,3 %'],
          ['Hogares con computadora que tienen una sola (país)', '74,3 %'],
          ['Personas que descargaron, instalaron y configuraron software', '47,7 %']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín de tecnologías de información y comunicación en los hogares, II trimestre de 2026 (ENAHO, cifras preliminares). La última fila corresponde al apartado de competencias informáticas del boletín. El INEI no publica estas cifras por distrito; Lima Metropolitana incluye al Callao.' },
        { kind: 'two', mt: true,
          leftH3: 'Una computadora para toda la familia',
          left: [
            'Tres de cada cuatro hogares con computadora tienen una sola, según el INEI. Es lo normal, y alcanza: basta con acordar en casa que, durante la hora de clase, la computadora es del niño.',
            'Si dos hermanos toman clases, pueden elegir horarios distintos. Como la hora la pone usted, no hay que forzar a nadie.'
          ],
          rightH3: 'Instalar sin miedo',
          right: [
            'Menos de la mitad de las personas, según el mismo boletín, ha descargado e instalado software por su cuenta. En la primera clase el mentor guía a su hijo para dejar listo lo necesario, paso a paso y en inglés sencillo.',
            'Usamos herramientas gratuitas. No vendemos kits, licencias ni equipos, y no hay que comprar nada para empezar.'
          ] }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Inglés con un mentor de la India',
      h2: '¿Cómo es el inglés de un mentor que enseña desde la India?',
      lede: 'Claro, pausado y pensado para niños que están aprendiendo el idioma. Nuestros mentores enseñan en inglés todos los días a alumnos de distintos países y están acostumbrados a ajustar la velocidad y el acento a quien tienen enfrente.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Semana 1 y 2', p: 'El niño escucha mucho y responde poco. El mentor usa la pantalla para todo y repite las mismas frases: "Click the green flag", "What happens now?". Es normal que su hijo conteste con gestos.' },
          { h3: 'Semana 3 a 6', p: 'Su hijo ya reconoce las instrucciones de siempre y empieza a contestar con palabras sueltas en inglés: "loop", "again", "it works". El mentor completa la frase y él la repite.' },
          { h3: 'Después', p: 'Explica su programa con frases cortas y pregunta cuando algo falla. No habla un inglés perfecto, pero lo usa para algo concreto, y eso le quita el miedo.' }
        ] },
        { kind: 'p', mt: true, html: 'Las etapas de la tabla son una descripción nuestra de lo que vemos con frecuencia, no una promesa: cada niño tiene su ritmo. Lo que sí aseguramos es que en ningún momento la clase pasa al castellano. Si a usted le interesa sobre todo combinar idioma y tecnología, tenemos una guía específica de <a class="ag-inline-link" href="/clases-de-ingles-y-programacion-ninos">inglés y programación para niños</a>.' },
        { kind: 'p', html: 'Para darle contexto: el EF EPI 2025, el índice de inglés de EF Education First basado en adultos que rinden su prueba, ubicó a Lima en 555 puntos, dentro del nivel alto que la medición marca desde 550. Un niño de Lima que oye y habla inglés cada semana crece en una ciudad donde ese idioma ya circula.' }
      ]
    },
    {
      id: 'de-tres-en-tres',
      tint: 'tint',
      eyebrow: 'Reto en Python',
      h2: '¿Cómo se cuenta de tres en tres en Python?',
      lede: 'Con <code>range</code>, que recibe dónde empezar, dónde parar y de cuánto en cuánto saltar. Es un ejercicio nuestro para niños de 9 a 11 años que ya conocen la tabla del 3, y tiene dos sorpresas que vale la pena descubrir solos.',
      body: [
        { kind: 'code', label: 'Contar con saltos', lang: 'Python', code: PY, note: '<code>range(3, 31, 3)</code> se lee en inglés: "start at three, stop before thirty-one, step three".' },
        { kind: 'code', label: 'Salida', lang: 'Salida', code: OUT, note: 'Copiamos el resultado tal cual salió al correr saltos.py con Python 3 en nuestra propia máquina.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Recitar la tabla.</strong> El niño dice en inglés "three, six, nine..." hasta treinta. Luego mira la primera línea: la computadora hizo lo mismo.',
          '<strong>La primera sorpresa.</strong> En la segunda línea el tope es 30 y el 30 no aparece. El mentor pregunta: "Why is thirty missing?". La respuesta es una regla de Python: <code>range</code> se detiene antes del número de parada, nunca lo incluye.',
          '<strong>Contar hacia atrás.</strong> Con un salto de <code>-1</code> el programa cuenta de 10 a 1, como en el despegue de un cohete. Otra vez el 0 de parada queda fuera.',
          '<strong>La segunda sorpresa.</strong> <code>range(10, 0)</code> da una lista vacía. Sin decir el salto, Python avanza de uno en uno hacia arriba, y desde 10 nunca llega a 0. No hay error: simplemente no hay nada que contar.',
          '<strong>Su propia tabla.</strong> El reto final es escribir la tabla del 7 hasta 70 sin que falte el 70. Si su hijo pone 70 como parada, verá qué pasa y lo corregirá.'
        ] },
        { kind: 'p', mt: true, html: 'Las dos sorpresas enseñan lo mismo: la computadora hace exactamente lo que se le pide, no lo que uno quiso decir. Aprender a leer una instrucción con cuidado, predecir su resultado y comprobarlo es la manera de pensar que buscamos en cada clase, muy distinta a copiar una respuesta que otro escribió.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Si su hijo ya está en secundaria',
      h2: '¿Hay clases de programación para adolescentes de Lima Norte?',
      lede: 'Sí, en grupos propios a partir de los 13 años. En Independencia los adolescentes de 12 a 17 son incluso más que los niños de 6 a 11, y muchos llegan a secundaria sin haber escrito una línea de código.',
      body: [
        { kind: 'p', html: 'El colegio no suele cubrirlo. En el plan de estudios del CNEB para secundaria no existe un área de computación o programación; Inglés tiene tres horas pedagógicas por grado en la jornada regular, y la tecnología aparece como competencia transversal. El MINEDU sí probó un camino: en julio de 2025 anunció la estrategia Fábrica de Programadores, que en su primera etapa iba a beneficiar "a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con formación en programación Python y certificación internacional", con la posibilidad de rendir el examen PCEP.' },
        { kind: 'p', html: 'No tenemos ninguna relación con ese programa del MINEDU, y no sabemos qué colegios de Independencia participaron. Lo mencionamos porque muestra hacia dónde mira el propio sistema: Python y certificaciones reconocidas internacionalmente. Nuestros cursos para adolescentes van en esa dirección, siempre en inglés, y uno de ellos prepara las certificaciones PCEP y PCAP del Python Institute.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Cursos que solemos recomendar en secundaria (nuestra selección)', head: ['Grado', 'Curso', 'Por qué'], rows: [
          ['1° y 2° de secundaria', 'Python para adolescentes', 'Ordena lo aprendido en primaria y lo lleva a proyectos completos'],
          ['3° y 4° de secundaria', 'Java o desarrollo web', 'Programación más estricta, o una web publicada con su nombre'],
          ['4° y 5° de secundaria', 'Preparación PCEP y PCAP', 'Una certificación internacional de Python, rendida ante el Python Institute']
        ] },
        { kind: 'p', mt: true, html: 'La certificación la otorga el Python Institute, no nosotros ni el MINEDU, y aprobarla depende del examen. Más información en nuestra guía de <a class="ag-inline-link" href="/clases-de-programacion-para-adolescentes-peru">clases de programación para adolescentes</a> y en la de <a class="ag-inline-link" href="/programacion-para-5to-de-secundaria">programación para 5to de secundaria</a>.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Hora de clase',
      h2: '¿Cómo encaja la hora de la India con la de Independencia?',
      lede: 'Con una suma fija: 10 horas y 30 minutos. La India va siempre por delante, en enero igual que en agosto, porque ninguno de los dos países usa horario de verano. Estos son solo ejemplos de conversión.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias de hora entre Lima y la India (ejemplos, no un horario)', head: ['Lima', 'India', 'Observación'], rows: [
          ['7:00 a. m.', '5:30 p. m.', 'Tarde en la India'],
          ['9:30 a. m.', '8:00 p. m.', 'Noche en la India'],
          ['12:00 m.', '10:30 p. m.', 'Noche en la India'],
          ['2:00 p. m.', '12:30 a. m.', 'Ya es el día siguiente allá'],
          ['4:00 p. m.', '2:30 a. m.', 'Día siguiente'],
          ['7:30 p. m.', '6:00 a. m.', 'Mañana del día siguiente']
        ] },
        { kind: 'source', html: 'Base de datos de husos horarios tzdata: America/Lima en UTC-5 sin cambios estacionales desde 1994, y Asia/Kolkata en UTC+5:30. La hora oficial del Perú la mantiene el INACAL. El Compendio Estadístico Perú 2026 del INEI pone el ejemplo de las 12:00 m. de Lima, que son las 10:30 p. m. en Delhi.' },
        { kind: 'p', mt: true, html: 'La reserva se hace en la hora de Lima y el sistema avisa al mentor en la suya, así que nadie tiene que convertir nada. Si en su casa el colegio es por la tarde, la mañana es buena opción; si es por la mañana, la tarde después del almuerzo. Y si un mes cambia el horario escolar, la clase se puede mover.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avances',
    h2: '¿Cómo va cambiando un niño que aprende a programar?',
    lede: 'Cinco momentos propios que usamos para contarle a usted el progreso, sin exámenes ni puntajes.',
    table: { caption: 'Cinco momentos del aprendizaje (nuestros)', head: ['Momento', 'Edad frecuente', 'Qué cambia'], rows: [
      ['1. Usa la computadora para crear', '6 a 7 años', 'deja de solo mirar y arma una animación propia'],
      ['2. Piensa en repeticiones', '7 a 9 años', 'nota cuando algo se repite y usa un bucle'],
      ['3. Lee instrucciones con cuidado', '9 a 10 años', 'entiende por qué <code>range(3, 30, 3)</code> no llega al 30'],
      ['4. Encuentra sus errores', '10 a 11 años', 'lee el mensaje de error en inglés y sabe por dónde buscar'],
      ['5. Termina proyectos', '11 a 12 años', 'planifica, construye y presenta un juego o una web']
    ] },
    left: { h3: 'Para padres', ps: [
      'Una buena pregunta para la cena: "¿Qué te salió distinto de lo que esperabas hoy?". La respuesta dice mucho de lo que aprendió.',
      'No hace falta que usted sepa programar. Basta con pedirle que le muestre y le explique.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Escriba en su cuaderno lo que cree que va a salir, y después compárelo.',
      'Una lista vacía también es una respuesta: pregúntese por qué salió vacía.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más opciones',
    h2: 'Otros nueve cursos para niños',
    lede: 'Mismas reglas para todos: clases en vivo, solo en inglés, el mismo mentor de inicio a fin y la elección entre grupo o individual.',
    bands: [
      { num: 'I', h3: 'Bases sólidas', sub: 'De 6 a 9 años', courses: [
        { code: 'PRIN / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para pequeños', blurb: 'Animaciones y juegos con piezas de colores, en grupos por edad.' },
        { code: 'PRIN / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pequeños pensadores', blurb: 'Lógica, orden y patrones antes de la pantalla.' },
        { code: 'PRIN / BASE / 03', slug: 'early-math-foundations', title: 'Matemática inicial', blurb: 'Números, formas y conteo con ejemplos de todos los días.' }
      ] },
      { num: 'II', h3: 'Hacer cosas propias', sub: 'De 8 a 12 años', courses: [
        { code: 'PRIN / HACER / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Obbys, tiendas y puntajes escritos en Luau.' },
        { code: 'PRIN / HACER / 02', slug: 'kids-ai-web-development-course', title: 'Páginas web', blurb: 'Una web propia con HTML y CSS, publicada en internet.' },
        { code: 'PRIN / HACER / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Una aplicación sencilla para teléfono, diseñada por el niño.' }
      ] },
      { num: 'III', h3: 'Mirar más lejos', sub: 'De 9 a 12 años', courses: [
        { code: 'PRIN / LEJOS / 01', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA', blurb: 'Cómo aprende una máquina y por qué hay que revisarla.' },
        { code: 'PRIN / LEJOS / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ para chicos', blurb: 'Un segundo lenguaje, con retos y juegos cortos.' },
        { code: 'PRIN / LEJOS / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Rumbo a un hackatón', blurb: 'Idear, construir y presentar un proyecto en equipo.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Así trabajamos',
    h2: '¿Cómo funcionan las clases durante el año escolar?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Si el colegio de su hijo es en el turno tarde.' },
      { time: 'Tarde', l: 'Si el colegio termina al mediodía.' },
      { time: 'Horario propio', l: 'En clases individuales, el que usted fije.' }
    ],
    cells: [
      { h3: 'Mentor estable', p: 'El mismo de principio a fin del curso.' },
      { h3: 'Inglés claro', p: 'Pausas, repeticiones y la pantalla como apoyo.' },
      { h3: 'Manos en el teclado', p: 'El niño escribe; el mentor guía con preguntas.' },
      { h3: 'Proyecto al cierre', p: 'Cada tramo deja algo terminado para mostrar.' },
      { h3: 'Comunicación con usted', p: 'Notas breves sobre avances y próximos pasos.' },
      { h3: 'A elegir', p: 'Grupo de quince a veinte o clase solo para su hijo.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos',
  projectsLede: 'Con constancia, lo que empieza con un personaje de Scratch termina en aplicaciones reales. Algunos trabajos de alumnos mayores aparecen abajo; más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Comentarios publicados en Google por familias y alumnos, en su inglés original.',

  fees: {
    h2: 'Precios para familias de Independencia',
    lede: 'Mostramos la mensualidad en dólares estadounidenses y el pago es con tarjeta. La conversión a su moneda la hace su banco, por lo que el cargo final puede moverse un poco según el tipo de cambio de ese día.',
    free: ['Clase de prueba con un mentor', 'Diagnóstico corto del punto de partida', 'Sin tarjeta'],
    group: ['Quince a veinte niños de edad similar', 'Mentor fijo durante el curso', 'Dos clases en vivo cada semana', 'Pago mensual, sin ataduras'],
    one: ['Solo su hijo con el mentor', 'Plan y ritmo a su medida', 'Horario que usted escoge']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en Independencia: preguntas',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Enseñamos solo en inglés, siempre en vivo. Las familias que nos eligen lo ven como dos aprendizajes en uno: programación y práctica real del idioma. El mentor habla con calma y adapta su acento al niño, y en el EF EPI 2025 Lima alcanzó el nivel alto, de modo que su hijo practica un idioma que la ciudad ya usa.' },
      { q: '¿Sirve una computadora antigua?', a: 'En la mayoría de casos, sí, si enciende sin problemas, tiene navegador actualizado, teclado, cámara y micrófono. Scratch corre en el navegador y Python es liviano. El mentor ayuda a instalar lo necesario en la primera clase.' },
      { q: '¿Hay otros distritos llamados Independencia?', a: 'Sí. Según el censo de 2025 del INEI hay distritos con ese nombre en Huaraz (Áncash), Pisco (Ica) y Vilcas Huamán (Ayacucho). Esta página trata del distrito de Lima, con 225,078 habitantes.' },
      { q: '¿Cuántos niños hay en Independencia?', a: 'Entre los censados de 2025 hay 18,582 niños de 6 a 11 años y 20,034 adolescentes de 12 a 17, según el cuadro 3 del INEI. De 6 a 12 años, sumando edades simples, son 21,979 (suma nuestra).' },
      { q: '¿Desde qué edad pueden empezar?', a: 'Desde los 6 años, con bloques. Hacia los 9 o 10 años la mayoría ya escribe Python.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 12:00 m. en Lima son las 10:30 p. m. en la India.' },
      { q: '¿Qué ofrecen para adolescentes?', a: 'Grupos desde los 13 años con Python, Java, desarrollo web e IA, y un curso que prepara las certificaciones PCEP y PCAP del Python Institute. La certificación la entrega el Python Institute tras su examen, no nosotros.' },
      { q: '¿Forman parte de la Fábrica de Programadores del MINEDU?', a: 'No. Es un programa del MINEDU con el que no tenemos relación. Tampoco estamos vinculados a la Municipalidad de Independencia, a la UGEL ni a ningún colegio.' },
      { q: '¿Las clases dan nota o algún documento del Estado?', a: 'No dan notas escolares ni certificados del sistema educativo peruano. Al completar un curso, su hijo recibe un certificado de finalización de Modern Age Coders.' },
      { q: '¿En qué moneda pago?', a: 'En dólares estadounidenses, con tarjeta; el banco hace la conversión. La clase de prueba es gratuita y sin tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Siga leyendo',
    h2: 'Guías relacionadas',
    lede: 'Otras páginas para familias de Lima con hijos en edad escolar.',
    items: [
      { href: '/programacion-para-ninos-de-6-anos', label: 'Programación para niños de 6 años', p: 'Cómo se empieza con los más pequeños.' },
      { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación para niños', p: 'Por qué combinar las dos cosas en una sola clase.' },
      { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Programación para adolescentes', p: 'Cursos y grupos para secundaria.' },
      { href: '/programacion-para-5to-de-secundaria', label: 'Programación para 5to de secundaria', p: 'Qué conviene aprender en el último año del colegio.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra manera de enseñar (en inglés).' },
      { href: '/courses', label: 'All courses', p: 'Lista completa de cursos (en inglés).' }
    ]
  },

  start: {
    h2: 'Reserve la clase gratis de su hijo',
    lede: 'Su hijo se conecta desde la computadora de la casa, conversa con el mentor en un inglés sencillo y resuelve un reto corto, con bloques o con Python según su edad. Después le proponemos un curso y un formato; usted decide con calma.',
    readFirst: 'Si quiere conocernos antes, revise <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y el catálogo <a class="ag-inline-link" href="/courses">All courses</a> (ambos en inglés).',
    note: 'Clases en vivo por videollamada con mentores en la India, siempre en inglés. Por WhatsApp atendemos consultas en castellano.',
    formNote: 'Sin costo, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Minecraft' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Leer más', links: [
        { href: '/programacion-para-ninos-de-6-anos', label: 'Niños de 6 años' },
        { href: '/clases-de-programacion-para-adolescentes-peru', label: 'Adolescentes' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Contar de tres en tres, sin que falte el 30'
  },

  personalityCss: `
.ag-root.ag-prin .ag-hero h1 { max-width: 19ch; letter-spacing: -0.006em; }
.ag-root.ag-prin .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-prin .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-prin .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prin .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1 for the homonyms; updated to 15 July 2026); INEI Estadísticas de las TIC en los Hogares, II trimestre 2026; Municipalidad Distrital de Independencia notes on gob.pe (3 March 2025, 21 August 2026); MINEDU note on Fábrica de Programadores (July 2025); CNEB secundaria hours; EF EPI 2025; tzdata, INACAL and INEI Compendio 2026 for time. Read 8 to 10 November 2026. The stages, course table and Python exercise are our own.',
    localProject: 'Skip-counting with range() for a 9 to 11 year old in Independencia: range(3, 31, 3) prints the 3 times table to 30, range(3, 30, 3) leaves the 30 out because the stop is never included, range(10, 0, -1) counts down for a rocket launch, and range(10, 0) is empty because the default step is +1; the child then writes the 7 times table to 70 without losing the 70. Lesson family: range(start, stop, step).',
    requiredMentions: ['Stop at 30: [3, 6, 9, 12, 15, 18, 21, 24, 27]', 'Wrong way: []', 'Programa de Mantenimiento de Computadoras en tu Barrio, un servicio gratuito', 'más de 300 mantenimientos, beneficiando a más de 1200 personas', 'Vilcas Huamán, Ayacucho', '21,979 niños', 'Contar de tres en tres, sin que falte el 30', 'Personas que descargaron, instalaron y configuraron software'],
    sources: [
      { claim: 'Independencia 225,078 total, 214,620 censused, 10,458 omitted; age groups; single ages 6 to 17; all urban.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Districts named Independencia in Huaraz (88,999), Pisco (16,811) and Vilcas Huamán (1,090).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Free computer-maintenance programme: over 300 services and over 1,200 people (3 March 2025).', url: 'https://www.gob.pe/institucion/muniindependencia-lima/noticias/1119563-municipalidad-de-independencia-brinda-servicio-gratuito-de-mantenimiento-de-computadoras' },
      { claim: 'Coliseo de la Amistad Perú-Japón, 20 years, urbanización Tahuantinsuyo, free workshops (21 August 2026).', url: 'https://www.gob.pe/institucion/muniindependencia-lima/noticias/1434803-coliseo-de-la-amistad-peru-japon-celebro-20-anos-con-sus-beneficiarios' },
      { claim: 'Households with a computer 36.4% (Peru) and 53.3% (Lima Metropolitana); 74.3% have one; 47.7% installed software.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° de secundaria in Lima Norte, Python, PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Secundaria weekly hours, no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'That schools in Independencia took part in Fábrica de Programadores: unknown, not claimed; the page says we do not know which schools did.',
      'The mayor\'s claim that the maintenance programme was a national first: not repeated; officials\' names left out.',
      'District-level computer or internet figures: INEI does not publish them; national and Lima Metropolitana figures are labelled.',
      'Any reading of income or living conditions from the census rows: refused.',
      'PCEP pass promises or any MINEDU, municipal, UGEL or school link: refused; the Python Institute awards the certificate.',
      'Spanish-language teaching or typed fees in soles: refused.'
    ]
  }
};

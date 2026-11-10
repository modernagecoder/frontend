// SHIP: district | Puente Piedra, a young district of Lima Norte: live code at home, a museum next door | counting orders: a factorial by loop, checked by listing every permutation
'use strict';
// Clases de programación para niños en Puente Piedra (ag- Spanish district door, Peru cluster row PE206, P6, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages").
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Puente Piedra searching "clases de programación para niños Puente Piedra" during the school year.
// Spine: the district's young age profile in the 2025 census (one quotable table set against Lima); the municipal museum
// and what the municipality says about it (gob.pe, September 2022); a counting lesson in Python built on four cultures
// named by the museum (how many ways to order a showcase); starting age; why a class at home instead of a trip down the
// Panamericana Norte (no traffic figures); INEI connectivity; English; adolescentes; Peru to India clock.
// No income or class assumptions about the district.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-
// puente-piedra-lima/, fetched 10 November 2026 with curl -sL -A "Mozilla/5.0" or copied from saved raw files; quotes
// grepped in the raw text):
//  INEI, Censos Nacionales 2025, Lima Metropolitana workbook (inei-censos2025-ind_27-lima-metropolitana.xlsx), CUADRO N°1:
//    "DISTRITO PUENTE PIEDRA | 398960 | 197771 | 201189 | 378129 | 187063 | 191066 | 20831"; CUADRO N°3: "DISTRITO PUENTE
//    PIEDRA | 378129 | 28425 | 39067 | 39508 | 76408 | 93289 | 61777 | 39655", "LIMA METROPOLITANA | 9600043 | 555239 |
//    818096 | 867253"; CUADRO N°2 single ages: 6 años 5773, 7 años 6353, 8 años 6458, 9 años 6643, 10 años 6899, 11 años
//    6941, 12 años 6758.
//  INEI national workbook (ind_00) CUADRO N° 1: our sort of 1,893 districts puts Puente Piedra (398960) eleventh in Peru
//    (tenth inside the province of Lima).
//  Municipalidad Distrital de Puente Piedra on gob.pe, noticias/651401 (15 September 2022): "la resolución directoral
//    0053-2022- DGM/MC donde señalan la incorporación del Museo Municipal de Puente Piedra al Sistema Nacional de Museos del
//    Estado"; "una colección de 50 piezas arqueológicas en su mayoría réplicas que pertenecen a la cultura Chancay, Lima,
//    Huaura e Inca"; "un espacio aproximado de 220 m2 ubicado en el Palacio de la Cultura"; "de lunes a viernes de 9am a 1 pm
//    y de 2 pm a 5 pm"; "ya superó las 10 mil visitas"; "los voluntarios culturales, que a la fecha suman 200"; "las visitas
//    a la Huaca Tambo Inga". The note's claim that it is the first municipal museum so incorporated is attributed to the
//    municipality, not repeated as our fact.
//  INEI, TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "en Lima Metropolitana, el 84,7% de los hogares
//    disponía del servicio"; "alcanzó el 53,3% en Lima Metropolitana"; "en Lima Metropolitana, con un 92,4%"; "el de 12 a
//    18 años con un 92,5%" and "niños de 6 a 11 años (68,2%)" (national).
//  MINEDU Edades normativas (as in the pilot): edad normativa al 31 de marzo.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, high band from 550.
//  Time (timezone.tsv): America/Lima UTC-5 all year, no DST since 1994; Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own calculations (python3 -I): Puente Piedra shares of its censused population: 0 to 5 7.5 %, 6 to 11 10.3 %, 12 to
//    17 10.4 %; Lima Metropolitana 5.8 %, 8.5 %, 9.0 %; 398960 / 10141775 = 3.9 %; 39067 / 818096 = 4.8 %; 20831 / 398960 =
//    5.2 % omitted.
// Our own example (pp_perm.py in the src-pages folder), run with python3 -I, exact output:
//    Ways by multiplying: 24 / Ways by listing: 24 / First order: ('Chancay', 'Lima', 'Huaura', 'Inca') /
//    Last order: ('Inca', 'Huaura', 'Lima', 'Chancay') / With 5 pieces: 120
// Neighbouring districts named in plain text only (Ancón, Carabayllo, Comas, Los Olivos, Ventanilla in Callao).
// Lesson family: counting arrangements; a factorial built with a loop, confirmed by itertools.permutations listing them all.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'from itertools import permutations',
  '',
  "pieces = ['Chancay', 'Lima', 'Huaura', 'Inca']",
  '',
  'ways = 1',
  'for n in range(1, len(pieces) + 1):',
  '    ways = ways * n',
  "print('Ways by multiplying:', ways)",
  '',
  'orders = list(permutations(pieces))',
  "print('Ways by listing:', len(orders))",
  "print('First order:', orders[0])",
  "print('Last order:', orders[-1])",
  "print('With 5 pieces:', ways * 5)"
].join('\n');

const OUT = [
  'Ways by multiplying: 24',
  'Ways by listing: 24',
  "First order: ('Chancay', 'Lima', 'Huaura', 'Inca')",
  "Last order: ('Inca', 'Huaura', 'Lima', 'Chancay')",
  'With 5 pieces: 120'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Puente Piedra' },
  slug: 'clases-de-programacion-para-ninos-puente-piedra-lima',
  code: 'pnpp',
  accent: '#084B0F',
  accentRationale: 'Puente Piedra: a deep pine green #084B0F, dark like the shade of the old trees along the Chillón, the darkest of the Lima Norte doors; allocated in alloc.tsv (contrast 8.42 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Puente Piedra',
  title: 'Clases de programación para niños en Puente Piedra',
  description: 'Clases de programación para niños de 6 a 12 años en Puente Piedra, Lima Norte: en vivo, en línea y en inglés, desde casa, en aula o a solas, a la hora que elija.',
  ogDescription: 'Programación para niños de Puente Piedra sin viajar: un distrito joven según el censo 2025, su museo municipal y un reto de Python que cuenta de cuántas formas ordenar cuatro piezas.',
  twitterDescription: 'Clases de programación en vivo y en inglés para niños de Puente Piedra, desde casa y en el horario de su familia.',
  pageName: 'Clases de programación para niños en Puente Piedra',
  webPageDescription: 'Guía para familias de Puente Piedra que buscan clases de programación para niños durante el año escolar: la estructura de edades del distrito frente a Lima Metropolitana según los Censos Nacionales 2025 del INEI, el museo municipal que describe la municipalidad, el acceso a internet según el INEI y un ejercicio de Python para contar ordenamientos, escrito por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años de Puente Piedra, con cursos propios para adolescentes, dictadas solo en inglés: Scratch, Python, Roblox, web y proyectos de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños, Puente Piedra',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#censo', label: 'Censo' },
    { href: '#museo', label: 'El museo' },
    { href: '#vitrina', label: 'Reto de la vitrina' },
    { href: '#grado', label: 'Grado' },
    { href: '#diferencia', label: 'Hora' }
  ],
  eyebrow: 'Lima Norte &middot; Puente Piedra &middot; Primaria y secundaria',
  h1: 'Clases de programación para niños en Puente Piedra',
  lede: 'Puente Piedra es uno de los distritos más jóvenes de Lima: en proporción, tiene más chicos en edad escolar que la capital en su conjunto. Si usted busca que su hijo programe guiado por una persona real, en directo, y sin tener que bajar por la Panamericana Norte cada semana, esta guía es para usted. Encontrará las cifras del censo, lo que ofrece el distrito, cómo elegir según la edad y una clase de muestra dictada en inglés.',
  secondaryCta: { href: '#vitrina', label: 'Ver el reto de la vitrina' },
  wa: 'Hola Modern Age Coders, somos una familia de Puente Piedra y queremos que nuestro hijo o hija aprenda a programar. ¿Podemos tener la clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; un solo mentor por curso, que trabaja con su hijo en inglés',
  spec: [
    ['Para', 'Niños de 6 a 12 años y chicos de secundaria'],
    ['Desde', 'Su casa en Puente Piedra, por videollamada'],
    ['Herramientas', 'Scratch, Python, Roblox, HTML e IA'],
    ['Grupo', 'Quince a veinte niños, o solo su hijo'],
    ['Idioma', 'Inglés pausado y paciente'],
    ['Primera clase', 'Gratis y sin pedir tarjeta']
  ],
  capsuleQ: 'En una línea',
  capsule: 'Sí. Sin salir de su casa en Puente Piedra, su hijo puede tomar con Modern Age Coders clases en vivo, en línea y en inglés: un programa para primaria, de los 6 a los 12 años, y una ruta distinta para secundaria. Desde la India, un mentor se conecta por videollamada, mira lo que el niño escribe, le explica sin prisa y ajusta el paso a su acento. La progresión típica va de Scratch a Python, Roblox, páginas web e IA. Usted resuelve el formato, compartido o privado, y el calendario; probar la primera sesión es gratis.',

  picks: {
    eyebrow: 'Primer curso',
    h2: '¿Qué curso le toca primero a un niño de Puente Piedra?',
    lede: 'Depende de la edad y de lo que más le gusta: armar, jugar o contar y ordenar cosas.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNPP / 01', title: 'Bloques para empezar', alt: 'Imagen del curso de programación con bloques para niños', note: 'Pensado para 1° a 3° grado. Piezas de colores que se encajan para hacer que algo se mueva, suene o reaccione, sin exigir lectura fluida.' },
      { course: 'python-ai-kids-masterclass', code: 'PNPP / 02', title: 'Python que cuenta y ordena', alt: 'Imagen del curso de Python e IA para niños', note: 'Para 4° a 6° grado. Instrucciones tecleadas que cuentan, ordenan y comparan, como en el reto de la vitrina, junto con juegos y proyectos con IA.' },
      { course: 'game-development-masterclass-for-kids', code: 'PNPP / 03', title: 'Hacer videojuegos', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'De 8 a 12 años. Para quien ya juega y quiere estar del lado de quien diseña: Scratch, Roblox y Minecraft en un mismo recorrido.' }
    ]
  },

  sections: [
    {
      id: 'censo',
      eyebrow: 'Un distrito joven',
      h2: '¿Cuántos niños hay en Puente Piedra según el censo 2025?',
      lede: 'Entre los 378,129 censados de Puente Piedra hay 39,067 niños de 6 a 11 años y 39,508 adolescentes de 12 a 17. En proporción, son más que en Lima Metropolitana en su conjunto.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Edades escolares en Puente Piedra y en Lima Metropolitana: personas censadas y su porcentaje (2025)', head: ['Tramo', 'Puente Piedra', '% del distrito', 'Lima Metropolitana', '% de Lima'], rows: [
          ['0 a 5 años', '28,425', '7,5', '555,239', '5,8'],
          ['6 a 11 años', '39,067', '10,3', '818,096', '8,5'],
          ['12 a 17 años', '39,508', '10,4', '867,253', '9,0'],
          ['Total censado', '378,129', '100', '9,600,043', '100']
        ] },
        { kind: 'source', html: 'Fuente: INEI, tabla de grupos de edad por distrito publicada con los resultados definitivos del censo de 2025 para la capital (límites al día en julio de 2026). Los porcentajes los sacamos nosotros dividiendo cada tramo entre el total censado.' },
        { kind: 'two', mt: true,
          leftH3: 'Undécimo del país',
          left: [
            'Con los 20,831 omitidos que estima el INEI, Puente Piedra suma 398,960 habitantes. En la lista nacional de 1,893 distritos ordenada por nosotros queda undécimo, y décimo dentro de la provincia de Lima.',
            'Tiene el 3,9 % de la población de la capital, pero el 4,8 % de sus niños censados de 6 a 11 años (cálculo nuestro).'
          ],
          rightH3: 'Lo que no deducimos',
          right: [
            'Un porcentaje alto de niños dice que el distrito es joven. No dice cuánto gana una familia ni cómo vive, y no lo usamos para eso.',
            'Sí dice algo práctico: muchas casas con chicos de distintas edades al mismo tiempo, y por lo tanto una computadora que se reparte.'
          ] }
      ]
    },
    {
      id: 'museo',
      eyebrow: 'Lo que hay en el distrito',
      h2: '¿Qué tiene el Museo Municipal de Puente Piedra para los escolares?',
      lede: 'Una colección de 50 piezas arqueológicas, en su mayoría réplicas, de las culturas Chancay, Lima, Huaura e Inca. Así lo describe la Municipalidad de Puente Piedra en una nota publicada en gob.pe el 15 de septiembre de 2022.',
      body: [
        { kind: 'p', html: 'Según esa nota, el museo ocupa unos 220 metros cuadrados en el Palacio de la Cultura, atiende de lunes a viernes de 9:00 a. m. a 1:00 p. m. y de 2:00 a 5:00 p. m., y para entonces había superado las 10 mil visitas, muchas de familias del distrito y de alumnos de colegios de Lima. Los recorridos los guían voluntarios culturales, unos 200 a esa fecha, que también acompañan visitas a la Huaca Tambo Inga.' },
        { kind: 'p', html: 'La municipalidad informó además que el Ministerio de Cultura, mediante la Resolución Directoral 0053-2022-DGM/MC, incorporó el museo al Sistema Nacional de Museos del Estado, y presentó ese hecho como la primera vez que un museo dirigido por un municipio entraba al sistema. Es la descripción que hace la propia municipalidad.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Una salida de fin de semana', p: 'El museo abre en días de semana, en horario escolar. Para muchas familias es una visita con el colegio, y para otras una buena excusa para un día libre.' },
          { h3: 'De la vitrina al código', p: 'Cuatro culturas en una vitrina plantean una pregunta de matemática: ¿de cuántas formas se pueden ordenar? El reto de esta página la resuelve con Python.' },
          { h3: 'Sin vínculo', p: 'Modern Age Coders no tiene relación con la Municipalidad de Puente Piedra, su museo ni el Ministerio de Cultura. Usamos la nota municipal solo como contexto.' }
        ] }
      ]
    },
    {
      id: 'vitrina',
      tint: 'tint',
      eyebrow: 'Una clase de muestra',
      h2: '¿De cuántas formas se pueden ordenar cuatro piezas en una vitrina?',
      lede: 'De 24 formas, y un niño de 11 años puede comprobarlo de dos maneras. El ejercicio es nuestro: primero multiplica 1 × 2 × 3 × 4 con un bucle, y después le pide a Python que escriba todos los ordenamientos y los cuente.',
      body: [
        { kind: 'code', label: 'Cuatro culturas, muchos órdenes', lang: 'Python', code: PY, note: 'Antes de ejecutar, el mentor pregunta en inglés: "How many different ways can we line up four pieces?" Casi siempre la primera respuesta es 4 o 16.' },
        { kind: 'code', label: 'Lo que imprime el programa', lang: 'Salida', code: OUT, note: 'Salida literal de Python 3, tal como apareció en nuestra pantalla. Los dos métodos coinciden: 24.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Pensar el primer lugar.</strong> Para el primer lugar de la vitrina hay 4 piezas posibles; para el segundo quedan 3; luego 2; luego 1. Por eso se multiplica 4 × 3 × 2 × 1, que es 24. Los matemáticos lo llaman factorial y lo escriben 4!',
          '<strong>El bucle que multiplica.</strong> <code>ways</code> empieza en 1 y en cada vuelta se multiplica por el siguiente número. Si empezara en 0, el resultado sería 0 para siempre: un error que vale la pena provocar a propósito.',
          '<strong>Comprobar listando.</strong> <code>permutations</code> genera todos los ordenamientos posibles, uno por uno. Contarlos da 24 otra vez. Dos caminos distintos, un mismo número: así se gana confianza en una respuesta.',
          '<strong>Una pieza más.</strong> Con 5 piezas no son 25 ni 48, sino 120, porque cada orden de cuatro admite cinco lugares para la nueva. Por eso el programa multiplica 24 por 5. Con 10 piezas el número supera los tres millones: listar deja de ser práctico y la fórmula gana.',
          '<strong>La frase de la clase.</strong> En inglés, dicha en voz alta: "Four choices, then three, then two, then one: twenty-four." La dice en voz alta mientras señala la vitrina dibujada en pantalla.'
        ] },
        { kind: 'p', mt: true, html: 'Lo valioso de este reto no es el factorial. Es la costumbre de calcular primero con la cabeza y confirmar después con la computadora, y de notar cuándo listar todo se vuelve imposible. Un niño que piensa así no se queda con la primera cifra que le da una herramienta de IA: sabe estimar si tiene sentido.' }
      ]
    },
    {
      id: 'grado',
      eyebrow: 'Edad y grado',
      h2: '¿Qué puede aprender un niño de Puente Piedra según su grado?',
      lede: 'En cada grado de primaria cabe algo distinto. A los 6 años, mover un personaje; a los 9, escribir las primeras líneas; a los 12, idear y terminar un proyecto propio.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Puente Piedra: niños censados por edad y una meta posible para cada una', head: ['Edad', 'Niños censados en Puente Piedra', 'Grado aproximado', 'Meta posible en programación (nuestra)'], rows: [
          ['6', '5,773', '1° de primaria', 'Que un personaje recorra un camino'],
          ['7', '6,353', '2° de primaria', 'Una animación que se repite sola'],
          ['8', '6,458', '3° de primaria', 'Un juego con reglas y marcador'],
          ['9', '6,643', '4° de primaria', 'Un programa escrito que conversa'],
          ['10', '6,899', '5° de primaria', 'Listas que se recorren y se ordenan'],
          ['11', '6,941', '6° de primaria', 'Contar ordenamientos, como la vitrina'],
          ['12', '6,758', '1° de secundaria', 'Un proyecto propio de principio a fin']
        ] },
        { kind: 'source', html: 'Fuentes: conteo del INEI por cada año de edad en los distritos limeños, censo 2025; y la correspondencia edad y grado que el MINEDU fija al 31 de marzo. El grado puede correrse uno, porque el censo registró la edad en el momento de la entrevista. Las metas de la derecha las proponemos nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Clases particulares',
          left: [
            'Algunas familias prefieren que su hijo tenga la clase a solas con el mentor, al menos al principio. Nuestra página sobre <a class="ag-inline-link" href="/clases-particulares-de-programacion-online-peru">clases particulares de programación online</a> explica cómo funciona esa modalidad.',
            'La clase individual sirve sobre todo para niños que necesitan otro ritmo, más rápido o más pausado.'
          ],
          rightH3: 'Primaria completa',
          right: [
            'Si su hijo tiene entre 6 y 12 años y quiere ver el panorama general, la guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> cuenta qué conviene en cada grado.',
            'En cualquier caso, la clase gratis sirve para decidir el punto de partida con su hijo delante.'
          ] }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Sin carretera',
      h2: '¿Qué ventaja tiene programar desde casa viviendo en Puente Piedra?',
      lede: 'Porque el tiempo de su hijo rinde más frente al teclado que en un bus. Con la clase en línea, la Panamericana Norte deja de ser parte de la semana.',
      body: [
        { kind: 'p', html: 'Puente Piedra limita con Ancón, Carabayllo, Comas, Los Olivos y, por el oeste, con Ventanilla, en el Callao. Una academia presencial casi siempre implica ir hacia distritos más céntricos; cuánto demora ese viaje lo sabe usted, y no lo vamos a estimar sin datos. Lo que la clase en casa cambia es simple: nadie tiene que acompañar al niño a ningún lado.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Quiénes navegan y desde dónde: mediciones del INEI para el segundo trimestre de 2026', head: ['Lo medido', 'Cifra', 'Ámbito'], rows: [
          ['Población desde los 6 años que navegó en internet', '92,4 %', 'Lima Metropolitana'],
          ['Viviendas con servicio de internet', '84,7 %', 'Lima Metropolitana'],
          ['Viviendas con una computadora o más', '53,3 %', 'Lima Metropolitana'],
          ['Chicos de 12 a 18 años conectados en el trimestre', '92,5 %', 'Perú'],
          ['Niños de 6 a 11 años conectados en el trimestre', '68,2 %', 'Perú']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín de TIC en hogares (ENAHO, abril a junio de 2026, preliminar). Ojo: para el INEI la capital abarca el Callao, y el boletín no se abre por distritos.' },
        { kind: 'two', mt: true,
          leftH3: 'Primaria, menos conectada',
          left: [
            'El salto entre primaria y secundaria es grande: a nivel nacional, unos siete de cada diez niños se conectaron, contra más de nueve de cada diez adolescentes. Muchos chicos de primaria usan la computadora por primera vez para crear algo en nuestras clases.',
            'Por eso las primeras sesiones incluyen lo básico: el teclado, el mouse, cómo guardar un trabajo.'
          ],
          rightH3: 'Qué preparar en casa',
          right: [
            'Cualquier laptop o PC que tenga cámara y micrófono, audífonos y una señal que no se corte. Scratch y Python no cuestan nada, y se configuran junto con el mentor el primer día.',
            'Si hay una sola computadora para toda la familia, se agenda la clase en el momento en que esté libre.'
          ] },
        { kind: 'p', mt: true, html: 'Las familias que viven hacia Los Olivos pueden leer también <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">el plan de verano que escribimos para ese distrito</a>, con estas mismas clases.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'El inglés',
      h2: '¿Cómo hace un niño que no habla inglés para seguir la clase?',
      lede: 'Escucha, mira y prueba. El mentor dice poco y muestra mucho: cada palabra clave aparece escrita en pantalla y se repite hasta que el niño la usa por su cuenta.',
      body: [
        { kind: 'p', html: 'Al comienzo, su hijo captará bastante más de lo que se atreve a responder. Es normal, y el mentor no lo apura. Ayuda que en programación las palabras tienen consecuencias visibles: <code>list</code> crea una lista, <code>print</code> muestra un resultado, <code>range</code> cuenta. Al ver lo que hace cada palabra, el vocabulario se fija sin memorizar.' },
        { kind: 'p', html: 'Como referencia: en la edición 2025 de su índice de inglés, EF Education First le dio a Lima 555 puntos, que en su escala ya cuentan como dominio alto, mientras el Perú entero se queda en moderado. El ranking sale de adultos voluntarios, no de niños; lo traemos porque retrata una ciudad donde el inglés hablado ya circula, y donde empezar a usarlo en primaria rinde.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Adolescentes',
      h2: '¿Hay cursos para chicos de secundaria de Puente Piedra?',
      lede: 'Sí, con su propio ritmo. A los 39,508 chicos de 12 a 17 años que el censo halló en Puente Piedra les proponemos arrancar con código escrito, sin pasar por bloques.',
      body: [
        { kind: 'p', html: 'En secundaria se puede elegir Python a fondo, desarrollo web, Java, ciencia de datos o inteligencia artificial. A esa edad el motor suele ser una idea propia, sea un juego, una web para la promoción o algo que les ayude a estudiar. El mentor discute con ellos cada decisión y los deja equivocarse para aprender.' },
        { kind: 'p', html: 'Con la IA tenemos cuidado: muchos servicios ponen límites de edad o exigen el visto bueno de los padres. Con alumnos menores de edad usamos solo las permitidas para su edad, como apoyo para razonar y revisar, nunca como atajo para entregar algo que no entienden.' }
      ]
    },
    {
      id: 'diferencia',
      eyebrow: 'Horario',
      h2: '¿Cuántas horas de diferencia hay entre Puente Piedra y el mentor?',
      lede: 'Diez horas y media, todo el año. La India va adelante y la cifra no cambia con las estaciones, porque ninguno de los dos países usa horario de verano.',
      body: [
        { kind: 'p', html: 'Perú está en UTC-5 desde 1994 sin cambios estacionales; la India, en UTC+5:30. Para ver cómo funciona: si la clase empieza a las 12:30 del mediodía en Puente Piedra, el mentor la dicta a las 11:00 de su noche; si empieza a las 6:00 de la tarde, a él le toca a las 4:30 de la madrugada del día siguiente. Solo ilustran la cuenta.' },
        { kind: 'p', html: 'La reserva se hace con horas peruanas, así que no hay que convertir nada. Lo habitual es elegir en función del turno escolar y de la jornada laboral de los padres.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se mide el progreso de su hijo?',
    lede: 'Cuatro hitos nuestros que el mentor comparte con la familia cuando aparecen.',
    table: { caption: 'Cuatro hitos de aprendizaje en programación (nuestros)', head: ['Hito', 'Lo que el niño ya hace', 'Cómo lo comprueba usted'], rows: [
      ['1. Estima', 'Calcula con la cabeza antes de usar la computadora', 'Le dice un número antes de ejecutar'],
      ['2. Comprueba', 'Confirma un resultado por un segundo camino, como en la vitrina', 'Le muestra que dos métodos coinciden'],
      ['3. Corrige', 'Encuentra y arregla sus propios errores', 'Le cuenta qué falló y cómo lo resolvió'],
      ['4. Crea y presenta', 'Termina un proyecto y lo explica en inglés', 'Le hace la presentación en casa']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pídale a su hijo que le explique su último reto. Explicar es la prueba de que entendió.',
      'No se alarme por semanas lentas; en programación el avance llega por saltos.'
    ] },
    right: { h3: 'Para el alumno', ps: [
      'Antes de correr el programa, apueste un número y escríbalo.',
      'Cuando un resultado le sorprenda, compruébelo de otra manera.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: '¿Qué otros cursos pueden tomar los chicos de Puente Piedra?',
    lede: 'Nueve opciones más, todas con mentor en vivo y en inglés, en aula pequeña o en clase privada.',
    bands: [
      { num: 'I', h3: 'Para empezar', sub: 'De 6 a 9 años', courses: [
        { code: 'PNPP / BASE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch', blurb: 'Animar, contar historias y armar juegos con bloques.' },
        { code: 'PNPP / BASE / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco y cálculo', blurb: 'Contar con cuentas antes de hacerlo de memoria.' },
        { code: 'PNPP / BASE / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar paso a paso', blurb: 'Lógica y patrones para los más pequeños.' }
      ] },
      { num: 'II', h3: 'Crear', sub: 'De 8 a 12 años', courses: [
        { code: 'PNPP / CREA / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox programado', blurb: 'Niveles y reglas propias escritas en Luau.' },
        { code: 'PNPP / CREA / 02', slug: 'kids-ai-web-development-course', title: 'Mi sitio web', blurb: 'Una página diseñada y publicada por el niño.' },
        { code: 'PNPP / CREA / 03', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA', blurb: 'Cómo decide una máquina y en qué se equivoca.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PNPP / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python en profundidad', blurb: 'Funciones, archivos y proyectos grandes.' },
        { code: 'PNPP / SEC / 02', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Algoritmos y problemas contra el reloj.' },
        { code: 'PNPP / SEC / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Videojuegos con Unity', blurb: 'C# y juegos terminados y publicados.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'La semana',
    h2: '¿Cómo se acomodan las clases a la rutina de Puente Piedra?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Ideal para quien entra al aula después del almuerzo.' },
      { time: 'Mediodía', l: 'Justo después del almuerzo, antes de la tarea.' },
      { time: 'Tarde noche', l: 'Cuando los adultos ya llegaron a casa.' }
    ],
    cells: [
      { h3: 'Mismo mentor', p: 'Quien empieza el curso con su hijo lo termina con él.' },
      { h3: 'El alumno escribe', p: 'El mentor pregunta y sugiere; el código es del niño.' },
      { h3: 'Ejercicio corto', p: 'Una práctica entre clases que pide pensar.' },
      { h3: 'Noticias a casa', p: 'Lo trabajado y lo que sigue, por mensaje.' },
      { h3: 'Cada mes', p: 'Sin matrícula anual; puede pausar cuando quiera.' },
      { h3: 'Grupo o privado', p: 'Entre quince y veinte compañeros de su edad, o la atención solo para él.' }
    ]
  },

  projectsH2: 'Proyectos de alumnos que siguieron adelante',
  projectsLede: 'Una muestra de lo que se llega a hacer con meses de práctica. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, página en inglés.',
  reviewsLede: 'Reseñas de familias y estudiantes en Google, tal como las escribieron, en inglés.',

  fees: {
    h2: '¿Cuánto cuestan las clases desde Puente Piedra?',
    lede: 'Debajo, cada plan con su cuota mensual en dólares de Estados Unidos. El pago es por tarjeta y la conversión la hace su banco en la fecha del cargo, de ahí que el importe final pueda moverse un poco.',
    free: ['Una clase completa gratis', 'Orientación sobre el curso inicial', 'No se pide tarjeta'],
    group: ['Quince a veinte niños de edad parecida', 'Un mentor de comienzo a fin', 'Dos clases en vivo por semana', 'Mensualidad sin permanencia'],
    one: ['Solo su hijo y el mentor', 'El ritmo que necesita', 'Horario elegido por la familia']
  },

  faq: {
    eyebrow: 'Preguntas',
    h2: 'Programación para niños en Puente Piedra: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: el inglés es la única lengua de las sesiones, que además son en vivo y por internet. Para muchas familias de Puente Piedra ahí está la ventaja, porque en una hora su hijo avanza en programación y en conversación a la vez, guiado por un mentor paciente. El EF EPI 2025 ya califica el inglés de Lima como alto (555 puntos).' },
      { q: '¿Tienen sede en Puente Piedra?', a: 'No contamos con locales en el Perú. La conexión es desde su casa y el profesor participa desde la India.' },
      { q: '¿Cuántos niños tiene Puente Piedra?', a: 'De sus 398,960 habitantes (censo 2025), 39,067 de los censados están en el tramo de 6 a 11 años y 39,508 en el de 12 a 17.' },
      { q: '¿Mi hijo de 7 años ya puede programar?', a: 'Sí. A los 7 años, en 2° de primaria, se programa con bloques, personajes y sonidos, casi sin leer. El código escrito llega más adelante, hacia los 9 o 10.' },
      { q: '¿Qué pasa si mi hijo no entiende inglés?', a: 'Se le acompaña sin apuro: oraciones breves, la palabra clave escrita en pantalla y todas las repeticiones que pida. Al cabo de un mes casi todos se sueltan.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, a las 12:30 p. m. de Puente Piedra el reloj del mentor marca las 11:00 p. m.' },
      { q: '¿Prefieren clase individual o grupal?', a: 'Depende del niño. La grupal tiene compañeros de su edad; la individual permite un ritmo a medida. En la clase gratis el mentor le recomienda una u otra.' },
      { q: '¿Están vinculados al museo o a la municipalidad?', a: 'No. El museo, la municipalidad, el Ministerio de Cultura y los colegios del distrito son ajenos a nuestras clases; hablamos del museo porque su descripción es pública en gob.pe.' },
      { q: '¿Cómo se paga?', a: 'Se cobra cada mes a una tarjeta, en dólares de Estados Unidos; el banco emisor convierte. La clase inicial no tiene costo y no se registra ningún medio de pago.' },
      { q: '¿Hay certificado al final?', a: 'Cada curso terminado trae una constancia privada de la academia, que no reemplaza documentos del MINEDU ni cuenta para la libreta de notas.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras páginas útiles para su familia',
    lede: 'Aviso: donde el título está en inglés, el texto también.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La puerta de entrada a lo que enseñamos en el Perú.' },
      { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Online coding and AI classes in Callao', p: 'Para familias de Ventanilla y el resto del Callao.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Qué asistente de IA corresponde a qué edad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una clase en vivo, explicada paso a paso.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo de cursos.' }
    ]
  },

  start: {
    h2: 'Pida la clase gratis desde Puente Piedra',
    lede: 'Indique día y hora peruanos. Su hijo conversará un rato con el mentor, resolverá un pequeño problema y, al cierre, usted recibirá una recomendación concreta de curso y formato.',
    readFirst: 'Para conocer el método antes, está <a class="ag-inline-link" href="/how-we-teach">How we teach</a>; el listado entero, en <a class="ag-inline-link" href="/courses">All courses</a>. Las dos páginas son en inglés.',
    note: 'Sesiones en directo y en inglés, con profesores radicados en la India. En WhatsApp le contestamos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Primeros cursos', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Videojuegos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/ai-tools-age-guide', label: 'IA por edades' },
        { href: '/student-labs', label: 'Proyectos' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Perú' }
      ] }
    ],
    bottomRight: 'Cuatro, tres, dos, uno: veinticuatro'
  },

  personalityCss: `
.ag-root.ag-pnpp .ag-hero h1 { max-width: 20ch; letter-spacing: -0.012em; }
.ag-root.ag-pnpp .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-pnpp .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-pnpp .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnpp .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana workbook cuadros 1, 2 and 3; national workbook cuadro 1), INEI TIC II trimestre 2026, MINEDU Edades normativas, Municipalidad Distrital de Puente Piedra note of 15 September 2022 on gob.pe (municipal museum), EF EPI 2025, tzdata. Read 10 November 2026. Example code, goals by age and milestones are our own.',
    localProject: 'Counting the orders of four museum pieces (Chancay, Lima, Huaura, Inca) in Python for an 11-year-old: a loop builds 4! and prints Ways by multiplying: 24, itertools.permutations lists them all and prints Ways by listing: 24, and a fifth piece gives With 5 pieces: 120. Run with python3 -I. Lesson family: counting arrangements; a factorial by loop checked by listing every permutation.',
    requiredMentions: ['Ways by multiplying: 24', 'Ways by listing: 24', 'With 5 pieces: 120', 'Four choices, then three, then two, then one: twenty-four', 'Resolución Directoral 0053-2022-DGM/MC', '39,067 niños de 6 a 11 años', 'Niños censados en Puente Piedra', 'Cuatro, tres, dos, uno: veinticuatro', 'Undécimo del país'],
    sources: [
      { claim: 'Puente Piedra population 398,960 (censada 378,129, omitida 20,831); age groups vs Lima; single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'National district ranking (1,893 districts).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/00/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Museo Municipal de Puente Piedra: RD 0053-2022-DGM/MC, 50 pieces mostly replicas (Chancay, Lima, Huaura, Inca), about 220 m2, weekday hours, more than 10 thousand visits, 200 volunteers (15 September 2022).', url: 'https://www.gob.pe/institucion/munipuentepiedra/noticias/651401-museo-municipal-puente-piedra-nuestra-historia-es-el-primero-en-ser-incorporado-al-sistema-nacional-de-museos' },
      { claim: 'Internet use 92.4%, internet 84.7%, computer 53.3% in Lima; 92.5% at 12 to 18 and 68.2% at 6 to 11 in Peru (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Normative age per grade at 31 March.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'EF EPI 2025: Lima 555, high band; Peru moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only.',
      'Stating as our own fact that it was the first municipal museum in the national system: refused; attributed to the municipality.',
      'Any link with the Municipalidad de Puente Piedra, its museum, the Ministerio de Cultura or any school: none; the page says so.',
      'Travel times on the Panamericana Norte: refused; no primary source.',
      'Income or class statements about the district: refused; only census ages and counts.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

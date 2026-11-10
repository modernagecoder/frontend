// SHIP: district kids door (ES) | Bellavista, Callao: abuelos y nietos, colegios del distrito, casas conectadas | a, b = b, a + b: two separate lines turn Fibonacci into doubling
'use strict';
// Clases de programación para niños en Bellavista, Callao (ag- Spanish-language district door, Peru cluster row PE233,
// hubGroup lima; alloc: prbe, #136656). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the parent in Bellavista (Callao, not the Bellavistas of Jaén, Sullana or San Martín) who types "clases de
// programación para niños bellavista callao". Spine: a central Callao district where people aged 60+ outnumber children
// and teenagers (census), so many homes have grandparents and grandchildren; most homes already have a laptop and a
// fixed line (household census); the schools of the district through the municipality's own notes; an original Fibonacci
// lesson about simultaneous assignment.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-bellavista-callao/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Callao (tabulados/07/poblacion):
//    Cuadro N° 1 "DISTRITO BELLAVISTA 80953" total, censada 77664, omitida 3289. Rank 3 of 7 Callao districts (ours).
//    Cuadro N° 3 "DISTRITO BELLAVISTA 77664 3357 5400 6250 13286 16227 15567 17577"; all URBANA.
//    Cuadro N° 2 single ages: 6 años 701, 7 años 824, 8 años 946, 9 años 953, 10 años 1005, 11 años 971, 12 años 1004.
//    Neighbours: CALLAO 487920, LA PERLA 68082, CARMEN DE LA LEGUA REYNOSO 45667 (tabulados/07); SAN MIGUEL 189301
//    (tabulados/27).
//    places.tsv homonyms: dist BELLAVISTA also in Jaén (Cajamarca), Sullana (Piura), Bellavista (San Martín).
//  INEI, Censos Nacionales 2025, Equipamiento_del_hogar.xlsx (tabulados/07/hogar), DISTRITO BELLAVISTA, Hogares 22849:
//    Computadora 8337, Laptop 12665, Tableta 6299; celular 22723, internet fijo 17044, internet móvil 19584.
//  Municipalidad Distrital de Bellavista - Callao (munibellavista), gob.pe notes:
//    21 July 2025 (n-1212054): "El evento reunió a más de 30 instituciones educativas del distrito, tanto públicas como
//      privadas"; "en el Jr. Bolognesi y alrededores de la emblemática plaza Isabel La Católica".
//    18 September 2026 (n-1446418): "tercera edición del Campeonato Interescolar de Fútbol y Vóley “Copa Bellavista 2026”";
//      "La ceremonia reunió a estudiantes de 12 colegios participantes".
//    23 June 2022 (n-626520): "Municipalidad de Bellavista participa en la Expouniversidad 2022".
//    Officials' and politicians' names left out.
//  EF EPI 2025 Peru page: region callao 518 "moderate"; Lima city 555 high.
//  National: MINEDU Edades normativas; CNEB; tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 5400 / 77664 = 7.0 %, 6250 / 77664 = 8.0 %;
//    5400 + 6250 = 11650 against 17577 aged 60+; laptop 12665 / 22849 = 55.4 %, computadora 36.5 %, tableta 27.6 %,
//    internet fijo 74.6 %, móvil 85.7 %.
// Our own example, run with python3 -I (bellavista.py in the src-pages folder), exact output:
//    Two lines: [0, 1, 2, 4, 8, 16, 32, 64] / One line:  [0, 1, 1, 2, 3, 5, 8, 13]
// Lesson family: simultaneous assignment (a, b = b, a + b); updating a before computing b turns Fibonacci into doubling.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'a, b = 0, 1',
  'two_lines = []',
  'for step in range(8):',
  '    two_lines.append(a)',
  '    a = b',
  '    b = a + b',
  "print('Two lines:', two_lines)",
  '',
  'a, b = 0, 1',
  'one_line = []',
  'for step in range(8):',
  '    one_line.append(a)',
  '    a, b = b, a + b',
  "print('One line: ', one_line)"
].join('\n');

const OUT = [
  'Two lines: [0, 1, 2, 4, 8, 16, 32, 64]',
  'One line:  [0, 1, 1, 2, 3, 5, 8, 13]'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Bellavista (Callao)' },
  slug: 'clases-de-programacion-para-ninos-bellavista-callao',
  code: 'prbe',
  accent: '#136656',
  accentRationale: 'Clases de programación para niños en Bellavista, Callao: a harbour teal #136656, bluer than the greens of the Lima district pages and the grass green of Ventanilla; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Bellavista',
  title: 'Clases de programación para niños en Bellavista, Callao',
  description: 'Programación para niños de Bellavista, Callao: sesiones en vivo y en inglés desde la laptop de casa, para chicos de 6 a 12 años, en grupo o a solas, todo el año.',
  ogDescription: 'En Bellavista viven más abuelos que chicos, y casi todas las casas ya tienen laptop. Cómo aprende a programar un niño del distrito y una sucesión de Fibonacci en Python.',
  twitterDescription: 'Clases de programación para niños de Bellavista (Callao), en vivo y en inglés, desde casa.',
  pageName: 'Clases de programación para niños en Bellavista',
  webPageDescription: 'Guía para familias de Bellavista, en la Provincia Constitucional del Callao, que buscan clases de programación para niños de 6 a 12 años: los niños por edad y el peso de los adultos mayores según los Censos Nacionales 2025, el equipo de los hogares, los colegios del distrito según su municipalidad y una lección de Python escrita por nosotros.',
  courseDescription: 'Clases de programación en directo por videollamada para niños de 6 a 12 años de Bellavista (Callao), dictadas solo en inglés: lógica, Python, matemática con código y juegos, en clase grupal o individual, durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Bellavista',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distrito', label: 'Bellavista' },
    { href: '#generaciones', label: 'Generaciones' },
    { href: '#colegios', label: 'Colegios' },
    { href: '#fibonacci', label: 'Ejemplo' },
    { href: '#reloj-indio', label: 'Horario' }
  ],
  eyebrow: 'Callao &middot; Bellavista &middot; Programación para niños',
  h1: 'Clases de programación para niños en Bellavista, en inglés',
  lede: 'Bellavista es un distrito chico y céntrico del Callao, con calles de casas antiguas, muchos colegios y muchas familias de tres generaciones. Esta página es para los padres, y también para los abuelos que cuidan a los nietos por la tarde, que buscan clases de programación para un niño de primaria: cómo son nuestras sesiones en directo y en inglés, qué dice el censo del distrito y un ejercicio de Python para probar en casa.',
  secondaryCta: { href: '#fibonacci', label: 'Ver un ejercicio' },
  wa: 'Hola Modern Age Coders, vivimos en Bellavista (Callao) y buscamos clases de programación en inglés para nuestro hijo, hija o nieto. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; de la plaza Isabel La Católica a la India, por videollamada',
  spec: [
    ['Distrito', 'Bellavista, Callao'],
    ['Para', 'Niños de 6 a 12; también adolescentes'],
    ['Cómo', 'Videollamada en directo, en inglés'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Calendario', 'Todo el año, con horario libre'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'Para empezar',
  capsule: 'Sí: un niño de Bellavista, en el Callao, puede aprender a programar en casa con Modern Age Coders. Damos clases en vivo y en inglés por videollamada a chicos de 6 a 12 años, todo el año. Un mentor desde la India le enseña lógica, Scratch, Python y matemática con código, a su paso y sin apuro. La familia decide si prefiere un grupo o sesiones individuales, y en qué horario. Basta una laptop o PC con cámara; la primera sesión es gratis.',

  picks: {
    eyebrow: 'Para empezar',
    h2: 'Tres cursos para los chicos de Bellavista',
    lede: 'Uno para entrenar la lógica antes del código, uno para el primer lenguaje y uno para los que disfrutan los números.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'PRBE / 01', title: 'Lógica para pequeños', alt: 'Imagen del curso de razonamiento para niños pequeños', note: 'De 6 a 9 años. Series, patrones y acertijos sin pantalla de código: lo que un niño necesita entender antes de dar sus primeras órdenes a una computadora.' },
      { course: 'python-ai-kids-masterclass', code: 'PRBE / 02', title: 'Python desde cero', alt: 'Imagen del curso de Python e IA para niños', note: 'Para chicos de 9 a 12 años que ya leen bien. Variables, bucles y listas, como la sucesión de esta página, con algunos proyectos sencillos de IA.' },
      { course: 'maths-through-coding', code: 'PRBE / 03', title: 'Números y código', alt: 'Imagen del curso de matemática a través de la programación', note: 'De 10 a 15 años. Secuencias, múltiplos y patrones del colegio, explorados con programas cortos que el chico escribe y comprueba él mismo.' }
    ]
  },

  sections: [
    {
      id: 'distrito',
      eyebrow: 'Bellavista, Callao',
      h2: '¿Hay clases de programación para chicos en Bellavista?',
      lede: 'Sí, y se toman en casa. Cada sesión sucede en tiempo real a través de la cámara; al otro lado está un mentor radicado en la India que conversa en inglés con su hijo de principio a fin. No existe local al que acudir.',
      body: [
        { kind: 'p', html: 'Ojo con el nombre: en el Perú hay varios distritos llamados Bellavista, en Jaén, en Sullana y en San Martín. Esta página es para el Bellavista de la Provincia Constitucional del Callao, que limita con el distrito de Callao, con La Perla, con Carmen de la Legua Reynoso y con San Miguel, ya en Lima. El INEI registró allí 80,953 habitantes en sus Censos Nacionales 2025, el tercer distrito del Callao por población, detrás del Callao cercado y de Ventanilla (ordenamos nosotros el Cuadro N.° 1).' },
        { kind: 'p', html: 'Bellavista está bien conectada con el resto de la ciudad, pero una academia sigue significando salir, esperar y volver dos o tres tardes por semana. En muchas familias del distrito esa tarea les toca a los abuelos. Una sesión en casa les evita el trayecto, y el niño programa en la mesa de siempre mientras alguien de la familia está cerca.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Un mentor que conoce a su hijo', p: 'La misma persona todo el curso, que recuerda en qué se quedó la semana anterior y qué le cuesta más.' },
          { h3: 'El código es en inglés', p: 'Python usa palabras como <code>for</code>, <code>range</code> o <code>append</code>. En la sesión, además, se conversa en inglés: el niño practica sin darse cuenta.' },
          { h3: 'Sin salir del Callao', p: 'Su hijo no tiene que cruzar a Lima para encontrar programación en inglés. Llega por la misma conexión que ya usa la casa.' }
        ] },
        { kind: 'p', mt: true, html: 'Si le interesa un panorama de toda la provincia, nuestra página en inglés <a class="ag-inline-link" href="/online-coding-and-ai-classes-callao-region-peru">online coding and AI classes in the Callao region</a> resume los siete distritos. Y para las familias que se mueven entre Bellavista y el distrito limeño vecino, hay una guía de verano en <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-miguel-lima">vacaciones útiles de programación en San Miguel</a>.' }
      ]
    },
    {
      id: 'generaciones',
      eyebrow: 'Abuelos y nietos',
      h2: '¿Cuántos niños viven en Bellavista, y cuántos abuelos?',
      lede: 'Hay cerca de mil chicos por cada edad entre los 8 y los 12 años, y muchos más adultos mayores. El censo de 2025 cuenta 5,400 niños de 6 a 11 años y 6,250 adolescentes de 12 a 17 en Bellavista, frente a 17,577 personas de 60 años o más.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Chicos censados en Bellavista (Callao), uno por cada edad cumplida, Censos Nacionales 2025', head: ['Edad', 'Censados en Bellavista', 'Grado por edad normativa', 'Idea para empezar (nuestra)'], rows: [
          ['6 años', '701', '1° de primaria', 'Juegos de orden y patrones'],
          ['7 años', '824', '2° de primaria', 'Primeros bloques en Scratch'],
          ['8 años', '946', '3° de primaria', 'Repeticiones y secuencias de números'],
          ['9 años', '953', '4° de primaria', 'Variables en Python'],
          ['10 años', '1,005', '5° de primaria', 'Sucesiones con un bucle, como Fibonacci'],
          ['11 años', '971', '6° de primaria', 'Un proyecto con números propios'],
          ['12 años', '1,004', '1° de secundaria', 'Python para adolescentes, o C++']
        ] },
        { kind: 'source', html: 'Conteo del INEI por edad simple (Cuadro N.° 2) para el distrito de Bellavista, tomado del archivo chalaco de indicadores demográficos de los Censos Nacionales 2025, con fecha de referencia 15 de septiembre de 2025. Para el grado aplicamos la regla de edad normativa del MINEDU, medida al 31 de marzo. Las ideas de la última columna son de Modern Age Coders.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dicen las cifras',
          left: [
            'Sumados, los chicos de 6 a 17 años de Bellavista son 11,650; los de 60 años o más, 17,577 (Cuadro N.° 3; la suma es nuestra). En porcentaje, los de 6 a 11 son el 7.0 % de los censados y los de 12 a 17 el 8.0 %.',
            'En toda la provincia, el mismo censo registra 96,501 niños de 6 a 11 años y 105,284 adolescentes de 12 a 17. Cada distrito se publica por separado; nosotros no los sumamos.'
          ],
          rightH3: 'Lo que significa en casa',
          right: [
            'Muchos niños de Bellavista pasan la tarde con sus abuelos. Una sesión en línea encaja bien en ese esquema: el abuelo no tiene que llevarlo a ningún lado, y puede sentarse cerca y ver lo que su nieto construye.',
            'Y al revés: un niño que programa suele querer enseñar lo que hizo. No es raro que termine explicándole a su abuela qué es un bucle. Para nosotros, esa es una prueba muy clara de que entendió.'
          ] }
      ]
    },
    {
      id: 'equipo',
      eyebrow: 'La casa',
      h2: '¿Tiene su casa lo que hace falta para una sesión virtual?',
      lede: 'Probablemente sí. Según el censo de 2025, el 55.4 % de los hogares de Bellavista tiene laptop y el 74.6 % internet fijo, cifras por encima de las del Callao en conjunto. Aun así, en la sesión gratis lo comprobamos con su equipo.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Equipos y servicios en los hogares de Bellavista y de toda la provincia del Callao, Censos Nacionales 2025 (porcentajes calculados por nosotros)', head: ['Hogares que tienen', 'Bellavista (de 22,849)', 'Provincia del Callao'], rows: [
          ['Internet móvil', '19,584 (85.7 %)', '74.0 %'],
          ['Internet fijo', '17,044 (74.6 %)', '54.8 %'],
          ['Laptop', '12,665 (55.4 %)', '33.2 %'],
          ['Computadora de escritorio', '8,337 (36.5 %)', '23.2 %'],
          ['Tableta', '6,299 (27.6 %)', '14.3 %']
        ] },
        { kind: 'source', html: 'Archivo "Equipamiento del hogar" de los Censos Nacionales 2025 del INEI para el Callao: primer cuadro para aparatos y segundo para servicios, renglón de hogares bellavistinos y total provincial, en viviendas particulares con ocupantes presentes. Como una vivienda puede figurar en varias filas, nada de esto se suma. Porcentajes nuestros.' },
        { kind: 'two', mt: true,
          leftH3: 'El equipo justo',
          left: [
            'Una laptop o una PC con cámara, micrófono y teclado. Si en casa la usa el abuelo para sus trámites y el niño para programar, alcanza con acordar la hora.',
            'El celular no sirve para escribir código con comodidad, y la tableta solo da para las primeras semanas de bloques con los más pequeños.'
          ],
          rightH3: 'Un rincón tranquilo',
          right: [
            'Más que la velocidad de internet, ayuda tener un lugar fijo, lejos de la televisión. Los audífonos con micrófono hacen que el inglés del mentor se entienda sin esfuerzo.',
            'Cinco minutos antes de la sesión, abra el enlace y pruebe el audio. Así el niño empieza a la hora y no pierde el comienzo.'
          ] },
        { kind: 'p', mt: true, html: 'Estas cifras están aquí solo para responder si una casa de Bellavista suele estar lista para una clase en línea. No las usamos para describir a las familias del distrito; cada casa es distinta.' }
      ]
    },
    {
      id: 'colegios',
      eyebrow: 'Los colegios del distrito',
      h2: '¿Cuántos colegios hay en Bellavista y qué enseñan de computación?',
      lede: 'Muchos para un distrito tan pequeño. La municipalidad informó que más de treinta instituciones educativas del distrito desfilaron en Fiestas Patrias de 2025. Pero ninguna tiene un curso obligatorio de programación: el plan de estudios nacional no lo incluye.',
      body: [
        { kind: 'p', html: 'En julio de 2025, la Municipalidad de Bellavista contó que su desfile escolar por Fiestas Patrias, en el Jr. Bolognesi y alrededor de la plaza Isabel La Católica, "reunió a más de 30 instituciones educativas del distrito, tanto públicas como privadas". En septiembre de 2026 inauguró la "tercera edición del Campeonato Interescolar de Fútbol y Vóley “Copa Bellavista 2026”", en una ceremonia que "reunió a estudiantes de 12 colegios participantes". Y en 2022 participó en una Expo Universidad para orientar a los escolares sobre qué estudiar.' },
        { kind: 'p', html: 'Son señales de un distrito con vida escolar intensa. Lo que no aparece en esas notas, ni en el currículo nacional, es la programación. El CNEB no le reserva horas a la computación ni en primaria ni en secundaria; la competencia digital se trabaja de forma transversal, y cada colegio decide cuánto la usa. Por eso dos chicos de Bellavista del mismo grado pueden llegar a la primera sesión con experiencias muy distintas.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Acompañamos al colegio', p: 'Nuestras sesiones son en otro horario y no reemplazan ningún curso. Tampoco ponemos notas escolares.' },
          { h3: 'No estamos vinculados', p: 'No tenemos relación con la Municipalidad de Bellavista, con la DRE Callao, con el MINEDU ni con ningún colegio del distrito.' },
          { h3: 'Lo que sí entregamos', p: 'Al terminar un curso, nuestro propio certificado de finalización, y un proyecto que su hijo puede mostrar.' }
        ] }
      ]
    },
    {
      id: 'fibonacci',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se programa la sucesión de Fibonacci con un niño de 11 años?',
      lede: 'Con un bucle, dos variables y una trampa que casi todos pisan. El ejercicio es nuestro: en la sucesión de Fibonacci cada número es la suma de los dos anteriores, y hay dos maneras de escribirla que parecen iguales pero no lo son.',
      body: [
        { kind: 'code', label: 'Fibonacci, en dos líneas y en una', lang: 'Python', code: PY, note: 'En la primera versión, <code>a = b</code> cambia <code>a</code> antes de calcular <code>b</code>. En la segunda, <code>a, b = b, a + b</code> calcula los dos valores nuevos con los valores viejos y recién después los guarda.' },
        { kind: 'code', label: 'Resultado al ejecutar', lang: 'Salida', code: OUT, note: 'Corrimos el archivo con Python 3 y pegamos aquí sus dos líneas tal como salieron. La primera lista se duplica (2, 4, 8, 16); la segunda es la sucesión de Fibonacci de verdad (1, 2, 3, 5, 8, 13).' },
        { kind: 'ol', mt: true, items: [
          '<strong>Hacerlo a mano.</strong> El mentor escribe 0 y 1 y pregunta: "What comes next?" El niño suma: 1, luego 2, luego 3, luego 5. Sin computadora, la regla queda clara.',
          '<strong>Predecir la versión de dos líneas.</strong> Casi todos esperan la misma sucesión. Al ejecutar aparece 0, 1, 2, 4, 8: los números se duplican. Algo salió mal.',
          '<strong>Seguir el rastro.</strong> El mentor arma una tabla con <code>a</code> y <code>b</code> paso por paso. En la segunda vuelta, <code>a</code> ya vale 1 cuando se calcula <code>b = a + b</code>, así que <code>b</code> da 2 en vez de 1. La pregunta clave: "Which value did we use, the old one or the new one?"',
          '<strong>Arreglarlo en una línea.</strong> Con <code>a, b = b, a + b</code>, Python calcula primero los dos valores nuevos y después los asigna a la vez. La lista correcta aparece: 0, 1, 1, 2, 3, 5, 8, 13.',
          '<strong>Seguir solo.</strong> El reto es imprimir los primeros 15 números y encontrar el primero que pasa de 100, explicando en inglés cómo lo supo.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que buscamos con este ejercicio no es que el niño recuerde a Fibonacci. Es que aprenda a seguir paso a paso lo que hace un programa, con papel y lápiz si hace falta, cuando el resultado no es el esperado. Esa costumbre de rastrear valores es la que más falta a quien solo copia código hecho por otro o por una IA. Si a su hijo le gustan los números, <a class="ag-inline-link" href="/clases-de-matematicas-en-ingles-para-ninos">clases de matemáticas en inglés para niños</a> muestra cómo enseñamos matemática también en inglés.' }
      ]
    },
    {
      id: 'reloj-indio',
      eyebrow: 'Idioma y horario',
      h2: '¿Qué tanto inglés necesita su hijo, y a qué hora se conecta?',
      lede: 'Poco inglés para empezar, y la hora que usted fije. El mentor se adapta al nivel del niño, y como vive en la India, trabaja con un reloj adelantado diez horas y treinta minutos respecto al nuestro. Algunas conversiones:',
      body: [
        { kind: 'table', numCols: [], caption: 'Cómo se lee la misma hora en Bellavista y en la India (solo conversiones, no un calendario de sesiones)', head: ['En Bellavista (Perú)', 'En la India', 'Fecha en la India'], rows: [
          ['8:00 a. m.', '6:30 p. m.', 'Mismo día'],
          ['10:30 a. m.', '9:00 p. m.', 'Mismo día'],
          ['1:30 p. m.', '12:00 a. m. (medianoche)', 'Día siguiente'],
          ['4:00 p. m.', '2:30 a. m.', 'Día siguiente'],
          ['6:00 p. m.', '4:30 a. m.', 'Día siguiente']
        ] },
        { kind: 'source', html: 'Hora oficial peruana, difundida por el INACAL: UTC-5 en todo el año, sin horario de verano (la base tzdata lo registra en la zona America/Lima). La India: UTC+5:30, también fija. Por eso esta tabla vale para cualquier mes.' },
        { kind: 'two', mt: true,
          leftH3: 'El inglés de la sesión',
          left: [
            'El mentor habla con frases cortas, muestra en la pantalla lo que dice y le da tiempo al niño para pensar la respuesta. Si su hijo contesta en castellano, el mentor reformula la idea en inglés y lo invita a repetirla.',
            'Para EF Education First (índice EPI 2025), la región chalaca suma 518 puntos, nivel moderado, y Lima ciudad 555, nivel alto. Son mediciones de adultos, pero dejan ver el margen que queda, y conversar cada semana ayuda a cerrarlo.'
          ],
          rightH3: 'Cuándo se conectan',
          right: [
            'Muchos niños de Bellavista estudian en el turno mañana y se conectan a media tarde, ya almorzados. Los del turno tarde suelen preferir la mañana.',
            'Al reservar la sesión gratis, las horas aparecen directamente en hora de Perú.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se ve el progreso de un niño que programa?',
    lede: 'Con cinco escalones de nuestra autoría explicamos a padres y abuelos cómo va el chico. Nada de esto equivale a una nota escolar.',
    table: { caption: 'Escalones de avance en programación para primaria (definidos por Modern Age Coders)', head: ['Escalón', 'Edad usual', 'Qué logra el niño'], rows: [
      ['1. Ordena', '6 a 7 años', 'completa una secuencia de pasos y la cuenta en voz alta'],
      ['2. Encuentra el patrón', '7 a 9 años', 'descubre la regla de una serie y la convierte en una repetición'],
      ['3. Guarda valores', '9 a 10 años', 'usa variables en Python y sabe qué valor tiene cada una'],
      ['4. Rastrea', '10 a 11 años', 'arma una tabla paso a paso para encontrar un error, como en Fibonacci'],
      ['5. Inventa', '11 a 12 años', 'crea su propio programa con números y lo explica en inglés']
    ] },
    left: { h3: 'Para padres y abuelos', ps: [
      'Pídale que le explique su programa con un papel al lado. Si puede escribir los valores paso a paso, entendió.',
      'No espere que todo salga a la primera. Los programas que fallan enseñan más que los que funcionan de entrada.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Cuando un número no sea el que esperaba, escriba en una tabla qué vale cada variable en cada vuelta.',
      'Antes de cambiar el código, diga en inglés qué cree que está mal.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para niños y adolescentes de Bellavista',
    lede: 'Mismo formato en todos: sesiones en directo, en inglés, con un mentor que acompaña el curso completo, en grupo o de a uno.',
    bands: [
      { num: 'I', h3: 'Primeros pasos', sub: 'Primaria baja', courses: [
        { code: 'PRBE / INICIO / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programar con bloques', blurb: 'Personajes y animaciones encajando piezas, sin teclear.' },
        { code: 'PRBE / INICIO / 02', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Del primer movimiento a un juego con varios niveles.' },
        { code: 'PRBE / INICIO / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco y cálculo mental', blurb: 'Contar y calcular de memoria con el ábaco como apoyo.' }
      ] },
      { num: 'II', h3: 'Crear juegos', sub: 'Primaria alta', courses: [
        { code: 'PRBE / JUEGO / 01', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos para chicos', blurb: 'Reglas, niveles y puntajes, diseñados y programados.' },
        { code: 'PRBE / JUEGO / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Mundos propios en Roblox Studio, entendiendo el código.' },
        { code: 'PRBE / JUEGO / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para chicos', blurb: 'Un lenguaje más estricto, con retos cortos y claros.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'Adolescentes', courses: [
        { code: 'PRBE / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'Del primer script a proyectos con datos.' },
        { code: 'PRBE / SEC / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java paso a paso', blurb: 'Clases y objetos para quien quiere ir en serio.' },
        { code: 'PRBE / SEC / 03', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas de olimpiada resueltos con algoritmos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organiza una semana de sesiones?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Para chicos que van al colegio en la tarde.' },
      { time: 'Después del almuerzo', l: 'Cuando el niño vuelve del colegio y descansó un rato.' },
      { time: 'Individual', l: 'Sesiones a solas con el mentor, cuando la familia proponga.' }
    ],
    cells: [
      { h3: 'Un mentor estable', p: 'Del primer día al último, la misma persona.' },
      { h3: 'Inglés con calma', p: 'Frases sencillas, ejemplos visuales, tiempo para responder.' },
      { h3: 'Programa el niño', p: 'El teclado es de su hijo; el mentor solo pregunta y orienta.' },
      { h3: 'Un resultado por etapa', p: 'Cada bloque del curso deja un programa terminado para mostrar.' },
      { h3: 'Mensajes a casa', p: 'Un aviso breve sobre lo practicado y lo siguiente.' },
      { h3: 'Grupo o solo', p: 'Quince a veinte chicos de edad parecida, o él con el mentor.' }
    ]
  },

  projectsH2: 'Trabajos de nuestros estudiantes',
  projectsLede: 'Escribir Fibonacci es un primer paso; perseverando, varios alumnos llegan a publicar juegos y apps propios. Debajo hay algunos ejemplos, y más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas de Google escritas por familias y alumnos de varios países, mostradas en su inglés original.',

  fees: {
    h2: 'Precios para familias de Bellavista',
    lede: 'La cuota de cada mes se expresa en moneda estadounidense y se carga a una tarjeta. El banco que la emitió hace la conversión con el cambio vigente ese día, así que el importe final en soles puede moverse ligeramente.',
    free: ['Una sesión de prueba gratis, en directo', 'Revisión del equipo de casa', 'Sin tarjeta y sin compromiso'],
    group: ['Quince a veinte chicos de edades parecidas', 'Mismo mentor de inicio a fin', 'Dos sesiones en directo por semana', 'Mes a mes, sin permanencia'],
    one: ['Su hijo y el mentor, sin nadie más', 'Avance a la medida del niño', 'Días y horas a elección de la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Bellavista: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las sesiones se dictan solo en inglés, siempre en directo, y lo vemos como algo a favor: el niño programa y practica el idioma dentro de la misma hora. El mentor pronuncia con claridad, cambia la frase cuando no se entiende y se apoya en lo que muestra la pantalla. El EF EPI 2025 da a la región Callao 518 puntos (nivel moderado); hablar inglés cada semana con un propósito ayuda a subir ese nivel.' },
      { q: '¿Es Bellavista del Callao o de otra región?', a: 'Esta página habla del distrito de Bellavista en la Provincia Constitucional del Callao, vecino del distrito de Callao, La Perla, Carmen de la Legua Reynoso y San Miguel. Hay otros Bellavista en Jaén, Sullana y San Martín; las clases son iguales en todos, pero las cifras de esta página son solo del Callao.' },
      { q: '¿Cuántos niños viven en Bellavista?', a: 'El INEI contó en 2025 a 5,400 chicos de 6 a 11 años y 6,250 de 12 a 17 en Bellavista, cuya población total es de 80,953. Los mayores de 60 suman 17,577.' },
      { q: '¿Puede acompañarlo el abuelo durante la sesión?', a: 'Sí, y lo recomendamos con los más pequeños. Basta con que esté cerca para dar tranquilidad; el código lo escribe el niño. Muchos abuelos terminan aprendiendo junto a sus nietos.' },
      { q: '¿Qué computadora necesita?', a: 'Laptop o PC con cámara, micrófono y teclado. El censo de 2025 encontró laptop en el 55.4 % de las casas bellavistinas y línea fija en el 74.6 %. Con un teléfono no se escribe código cómodamente.' },
      { q: '¿Mi nieto de 6 años puede empezar?', a: 'Sí: aceptamos chicos desde 1° grado. A esa edad se trabaja lógica con dibujos y bloques; Python llega cuando ya lee y teclea con soltura, por lo general hacia 4° o 5°.' },
      { q: '¿Qué horarios tienen?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Con la diferencia de diez horas y media, si su hijo se conecta a las 10:30 a. m. en Bellavista, el mentor lo recibe a las 9:00 p. m. hora de la India.' },
      { q: '¿Cómo se paga la mensualidad?', a: 'Con tarjeta, una vez al mes, en dólares de Estados Unidos; su banco convierte el monto. Para la sesión de prueba no se pide pago alguno.' },
      { q: '¿Su certificado vale para el colegio?', a: 'No. Funcionamos sin convenio alguno con la Municipalidad de Bellavista, la DRE Callao, el MINEDU o los colegios, y no calificamos para la libreta. Lo que entregamos al final de un curso es un certificado de finalización de Modern Age Coders, sin valor oficial.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más para leer',
    h2: 'Otras páginas para familias de Bellavista',
    lede: 'Lecturas complementarias, en ambos idiomas.',
    items: [
      { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region (en inglés)', p: 'Los siete distritos del Callao y lo que ofrecemos allí.' },
      { href: '/vacaciones-utiles-de-programacion-san-miguel-lima', label: 'Vacaciones útiles en San Miguel', p: 'Un verano con código en el distrito vecino.' },
      { href: '/clases-de-matematicas-en-ingles-para-ninos', label: 'Matemáticas en inglés para niños', p: 'Cómo enseñamos matemática a los chicos de primaria.' },
      { href: '/curso-de-python-para-ninos-peru', label: 'Python para niños', p: 'El primer lenguaje escrito, explicado para padres.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Lo que ofrecemos en todo el país, en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo planificamos cada sesión (texto en inglés).' }
    ]
  },

  start: {
    h2: 'Pida su sesión de prueba desde Bellavista',
    lede: 'En la sesión de prueba miramos primero que la cámara y el audio funcionen. Luego el mentor le propone a su hijo un juego de números, como seguir una serie, y escucha cómo la explica. Con eso le recomendamos por dónde empezar, sin compromiso.',
    readFirst: 'Material previo, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestra forma de enseñar, y los cursos están en <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Las sesiones ocurren en directo y en inglés, con mentores que trabajan desde la India. Por WhatsApp contestamos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Lógica para pequeños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python desde cero' },
        { href: '/courses/maths-through-coding', label: 'Números y código' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region' },
        { href: '/clases-de-matematicas-en-ingles-para-ninos', label: 'Matemáticas en inglés' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Primero calcular, después guardar'
  },

  personalityCss: `
.ag-root.ag-prbe .ag-hero h1 { letter-spacing: -0.011em; max-width: 22ch; }
.ag-root.ag-prbe .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-prbe .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-prbe .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-prbe .ag-steps li { line-height: 1.63; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de la Provincia Constitucional del Callao (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for Bellavista; Municipalidad Distrital de Bellavista - Callao notes on gob.pe of 23 June 2022, 21 July 2025 and 18 September 2026; MINEDU Edades normativas and CNEB; EF EPI 2025; tzdata and INACAL. The Fibonacci example, the starting ideas and the steps are our own.',
    localProject: 'A Fibonacci lesson for a child of 10 to 12 in Bellavista: the two-line update (a = b, then b = a + b) prints Two lines: [0, 1, 2, 4, 8, 16, 32, 64], doubling; the simultaneous assignment a, b = b, a + b prints One line:  [0, 1, 1, 2, 3, 5, 8, 13]. Run with python3 -I. Lesson family: simultaneous assignment.',
    requiredMentions: ['Which value did we use, the old one or the new one?', 'Two lines: [0, 1, 2, 4, 8, 16, 32, 64]', 'reunió a más de 30 instituciones educativas del distrito, tanto públicas como privadas', 'reunió a estudiantes de 12 colegios participantes', 'Censados en Bellavista', '12,665 (55.4 %)', 'Primero calcular, después guardar', '¿Puede acompañarlo el abuelo durante la sesión?', 'el tercer distrito del Callao por población'],
    sources: [
      { claim: 'Bellavista (Callao) 80,953 inhabitants, censada 77,664, 5,400 aged 6 to 11, 6,250 aged 12 to 17, 17,577 aged 60+, single ages 6 to 12; Callao province 96,501 and 105,284; neighbours Callao, La Perla, Carmen de la Legua Reynoso.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Bellavista households 22,849: mobile internet 19,584, fixed internet 17,044, laptop 12,665, computer 8,337, tablet 6,299; Callao province shares.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'School parade with more than 30 public and private schools of the district (21 July 2025).', url: 'https://www.gob.pe/institucion/munibellavista/noticias/1212054' },
      { claim: 'Third Copa Bellavista inter-school championship, 12 schools (18 September 2026).', url: 'https://www.gob.pe/institucion/munibellavista/noticias/1446418' },
      { claim: 'Municipality takes part in Expo Universidad 2022 (23 June 2022).', url: 'https://www.gob.pe/institucion/munibellavista/noticias/626520' },
      { claim: 'CNEB: no computing area; competency 28 transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025: Callao region 518 moderate; Lima city 555 high.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Mayors, councillors and the congressman named in the municipal notes: left out on purpose.',
      'Any school named as a source of students: refused; no school is named.',
      'Income, class or strata readings of the household equipment table, or of the age structure: refused.',
      'Bellavista as part of Lima, or confusion with the other Bellavista districts: refused; the page says which one it covers.',
      'Travel times to Lima: no figure used.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};

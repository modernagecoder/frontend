// SHIP: market | San Isidro: library, language and lab already there; code in English fills the gap, any age | zip() pairs silently to the shorter list; strict=True and a total check
'use strict';
// Clases de programación en San Isidro (ag- Spanish district door, Peru cluster row PE137, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round, all ages; differs from vacaciones-utiles-de-programacion-san-isidro-lima, which planned a secundaria
// summer around OPI and admission dates): the San Isidro council's own notes show a year-round ladder of learning that
// stops short of programming: a children's library for ages up to 10, English and Italian workshops for neighbours, a
// smartphone course for older adults, an innovation lab with a university. The page maps each rung to the next step in
// code, for children, teens, students, adults and older adults, and teaches pairing two lists safely in Python.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-san-isidro/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SAN ISIDRO 73402 33337
//    40065 69137 31339 37798 4265 1998 2267"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO SAN ISIDRO 69137 2507 3596 4048 9660
//    14891 14895 19540".
//  - Municipalidad de San Isidro on gob.pe (institucion/munisanisidro-lima). The council site www.msi.gob.pe did not connect
//    (curl 000, 2026-11-10); gob.pe is used instead.
//    n-1211165.txt, 17 Jul 2025: "la Biblioteca Infantil de San Isidro llevó a cabo el taller “Creciendo entre cuentos”";
//      "programación permanente de la Biblioteca Infantil"; "actividades gratuitas orientadas a incentivar la lectura y el
//      aprendizaje en niños desde los primeros meses hasta los 10 años de edad"; "Talleres de experimentos".
//    n-900321.txt, 27 Jan 2024: "Nuestros vecinos inscritos en los talleres de italiano e inglés, dictados en los Centros de
//      Encuentro Vecinal".
//    n-1469371.txt, 31 Aug 2017: "pusimos en marcha el primer laboratorio municipal de innovación, tecnología y
//      emprendimiento del país"; "junto a la Pontificia Universidad Católica del Perú presentamos el “Lab San Isidro”";
//      "eventos gratuitos, como encuentros, charlas y talleres de innovación, tecnología y emprendimiento".
//    n-1462736.txt, 18 Jun 2019: "Alrededor de 300 adultos mayores de la comunidad de San Isidro recibirán conocimientos
//      básicos sobre el uso del smartphone"; topics "Instalación de aplicaciones. Configuración y uso WhatsApp. Navegación en
//      Internet." The company that taught it and its spokesperson are not named on the page.
//    gob.pe search "programacion" for this institution (gobpe/q-programacion.html): 36 results, none a programming course.
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el 90,2% de la población usuaria de Internet de 6 y más años
//    usó Internet a través de un teléfono celular"; "laptop (18,9%), computadora (14,0%)"; "el 74,3% cuenta con una sola
//    unidad; mientras que, el 25,7% dispone de dos o más computadoras en el hogar"; "el 98,0% de las personas con educación
//    superior universitaria" used internet.
//  - EF EPI 2025 (ef_peru.txt): Peru speaking 480, reading 540; Lima 555.
//  - Time (timezone.tsv): Peru UTC-5 all year, India UTC+5:30.
//  - Neighbouring districts, plain text: Miraflores, Surquillo, San Borja, La Victoria, Lince, Jesús María, Magdalena del Mar.
// Our own calculations (python3 -I): 19540 / 69137 = 28.26% (60 y más); 14891 and 14895 (30 a 44, 45 a 59) differ by 4;
//   per 100 censados: 3.6, 5.2, 5.9, 14.0, 21.5, 21.5, 28.3; 2507 + 3596 + 4048 = 10151 under 18.
// Our own example (isi_v1.py, isi_v2.py, isi_v3.py), exact output: v1 pairs '12 a 17' with 3596 and stops after six pairs,
//   "Pairs: 6" / "Sum of pairs: 49597"; v2 prints the six wrong pairs then "ValueError: zip() argument 2 is longer than
//   argument 1"; v3 "6 a 11 3596" ... "60 y mas 19540" / "Sum of pairs: 69137 published total: 69137".
// Lesson family: zip() stops at the shorter list without warning; strict=True (Python 3.10+) raises, but only when the
// shorter list runs out; check the total against the published one.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  "grupos = ['0 a 5', '12 a 17', '18 a 29', '30 a 44', '45 a 59', '60 y mas']",
  'personas = [2507, 3596, 4048, 9660, 14891, 14895, 19540]',
  '',
  'for nombre, cantidad in zip(grupos, personas):',
  '    print(nombre, cantidad)',
  '',
  "print('Pairs:', len(list(zip(grupos, personas))))",
  "print('Sum of pairs:', sum(c for g, c in zip(grupos, personas)))"
].join('\n');

const OUT1 = [
  '0 a 5 2507',
  '12 a 17 3596',
  '18 a 29 4048',
  '30 a 44 9660',
  '45 a 59 14891',
  '60 y mas 14895',
  'Pairs: 6',
  'Sum of pairs: 49597'
].join('\n');

const V2 = [
  '# the same two lists, now with strict=True',
  'for nombre, cantidad in zip(grupos, personas, strict=True):',
  '    print(nombre, cantidad)'
].join('\n');

const OUT2 = [
  '0 a 5 2507',
  '12 a 17 3596',
  '... (the same six wrong lines) ...',
  '60 y mas 14895',
  'ValueError: zip() argument 2 is longer than argument 1'
].join('\n');

const V3 = [
  "grupos = ['0 a 5', '6 a 11', '12 a 17', '18 a 29', '30 a 44', '45 a 59', '60 y mas']",
  'personas = [2507, 3596, 4048, 9660, 14891, 14895, 19540]',
  '',
  'for nombre, cantidad in zip(grupos, personas, strict=True):',
  '    print(nombre, cantidad)',
  "print('Sum of pairs:', sum(personas), 'published total: 69137')"
].join('\n');

const OUT3 = [
  '0 a 5 2507',
  '6 a 11 3596',
  '12 a 17 4048',
  '18 a 29 9660',
  '30 a 44 14891',
  '45 a 59 14895',
  '60 y mas 19540',
  'Sum of pairs: 69137 published total: 69137'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en San Isidro' },
  slug: 'clases-de-programacion-san-isidro',
  code: 'pris',
  accent: '#7D2E3D',
  accentRationale: 'Clases de programación en San Isidro: a deep wine red #7D2E3D, the colour of the old olive presses and bark of the Bosque El Olivar beside the children\'s library, distinct from the other Lima district doors; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en San Isidro',
  title: 'Clases de programación en San Isidro, en vivo y en inglés',
  description: 'Clases de programación en San Isidro, en vivo, en línea y en inglés: para niños, adolescentes, universitarios, adultos y mayores, todo el año, en grupo o a solas.',
  ogDescription: 'San Isidro ya ofrece biblioteca infantil, talleres de idiomas y un laboratorio de innovación. Le falta un peldaño: programar. Clases en vivo y en inglés para cada edad.',
  twitterDescription: 'Programación en vivo y en inglés para vecinos de San Isidro de cualquier edad, todo el año y desde casa.',
  pageName: 'Clases de programación en San Isidro',
  webPageDescription: 'Guía para vecinos de San Isidro que buscan clases de programación durante el año, para niños, adolescentes, universitarios, adultos y adultos mayores, dictadas en vivo, en línea y en inglés: lo que la municipalidad ofrece en su biblioteca infantil, sus talleres de idiomas y su laboratorio de innovación según sus notas en gob.pe, la población del distrito en los Censos Nacionales 2025 del INEI, por qué estudiar desde casa y una clase de ejemplo en Python, escrita por nosotros, sobre cómo emparejar dos listas sin perder datos.',
  courseDescription: 'Clases en vivo y en línea de programación e inteligencia artificial para vecinos de San Isidro de todas las edades, dictadas únicamente en inglés: Scratch, páginas web, Python, JavaScript, Java y agentes de IA, en grupos de quince a veinte personas o en clases individuales, cualquier mes del año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en San Isidro',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#peldanos', label: 'Por edad' },
    { href: '#vecinos', label: 'Censo 2025' },
    { href: '#de-la-lectura', label: 'Niños' },
    { href: '#pares', label: 'Ejemplo' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'San Isidro &middot; Programación durante todo el año &middot; Cualquier edad',
  h1: 'Clases de programación en San Isidro, de los 6 años en adelante',
  lede: 'San Isidro tiene una biblioteca para niños pequeños, talleres de inglés para vecinos, un curso de celular para mayores y hasta un laboratorio de innovación con una universidad. Lo que no aparece en las notas de su municipalidad es un lugar para aprender a programar. Esta página propone ese peldaño para cada edad, con clases en vivo y en inglés que se toman desde casa, y muestra con datos del censo y con una lección real cómo trabajamos.',
  secondaryCta: { href: '#peldanos', label: 'Ver el peldaño de cada edad' },
  wa: 'Hola Modern Age Coders, vivimos en San Isidro y nos interesan sus clases de programación en inglés. ¿Podemos agendar una clase de prueba?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 alumnos en distintos países &middot; siempre en inglés',
  spec: [
    ['Distrito', 'San Isidro, Lima Metropolitana'],
    ['Edades', 'De 6 años en adelante, sin límite'],
    ['Cómo', 'Videollamada en vivo, desde su casa u oficina'],
    ['Idioma', 'Inglés pausado y claro'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Para probar', 'Una clase sin costo y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí: Modern Age Coders enseña programación a vecinos de San Isidro de cualquier edad, todo el año, con clases en vivo, en línea y en inglés. Los niños empiezan con Scratch o páginas web, los adolescentes con Python o JavaScript, los universitarios con Java y estructuras de datos, y los adultos con automatización o agentes de IA. El mentor enseña desde la India por videollamada, con un inglés pausado que se ajusta al alumno. Puede elegir un grupo o clases individuales, a la hora que prefiera.',

  picks: {
    eyebrow: 'Tres puertas de entrada',
    h2: 'Un curso para cada momento de aprendizaje',
    lede: 'Elegidos para el niño que ya lee con soltura, para el adolescente que quiere ver su trabajo en el navegador y para el adulto o universitario que busca un lenguaje sólido.',
    items: [
      { course: 'kids-ai-web-development-course', code: 'PRIS / 01', title: 'Mi primera página web', alt: 'Imagen del curso de desarrollo web para niños', note: 'De 9 a 12 años. HTML y CSS para publicar una página propia, con ayuda de la IA usada con criterio y revisada línea por línea.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'PRIS / 02', title: 'JavaScript para adolescentes', alt: 'Imagen del curso de JavaScript para adolescentes', note: 'Desde los 13 años. Botones que responden, juegos en el navegador y formularios que validan datos, todo escrito por el propio alumno.' },
      { course: 'complete-java-programming-masterclass-college', code: 'PRIS / 03', title: 'Java completo', alt: 'Imagen del curso completo de Java', note: 'Para universitarios y adultos. Tipos, clases, colecciones y pruebas, el lenguaje que piden muchas carreras de ingeniería y muchas empresas.' }
    ]
  },

  sections: [
    {
      id: 'peldanos',
      eyebrow: 'Del distrito a la clase',
      h2: '¿Dónde se aprende programación en San Isidro según la edad?',
      lede: 'La municipalidad cubre muy bien la lectura, los idiomas y la alfabetización digital; la programación queda fuera de lo que ha publicado. La tabla pone lado a lado lo que dicen sus notas y el paso siguiente que proponemos nosotros.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que la Municipalidad de San Isidro ha anunciado por edad, y el siguiente paso en programación', head: ['Edad', 'Lo que publicó la municipalidad (gob.pe)', 'El peldaño siguiente (propuesta nuestra)'], rows: [
          ['Hasta 10 años', 'Biblioteca Infantil con actividades gratuitas desde los primeros meses hasta los 10 años, incluidos talleres de experimentos (julio de 2025)', 'Scratch desde los 6 años: contar una historia con bloques que se mueven'],
          ['De 11 a 17 años', 'Ninguna actividad de programación en las notas revisadas', 'Python, JavaScript o Java, con proyectos que se publican'],
          ['Jóvenes y adultos', 'Lab San Isidro, con la PUCP: charlas y talleres gratuitos de innovación, tecnología y emprendimiento (agosto de 2017)', 'Python para automatizar, desarrollo web o agentes de IA'],
          ['Vecinos de cualquier edad', 'Talleres de inglés e italiano en los Centros de Encuentro Vecinal (enero de 2024)', 'Programar en inglés: práctica de idioma con un fin concreto'],
          ['Adultos mayores', 'Unos 300 vecinos mayores convocados a un taller básico de smartphone: aplicaciones, WhatsApp e internet (junio de 2019)', 'Entender cómo está hecha una app, con calma y sin tecnicismos']
        ] },
        { kind: 'source', html: 'Fuente de la segunda columna: Municipalidad Distrital de San Isidro, notas en gob.pe/institucion/munisanisidro-lima del 17 de julio de 2025, 27 de enero de 2024, 31 de agosto de 2017 y 18 de junio de 2019, leídas el 10 de noviembre de 2026; la búsqueda de "programacion" en la misma página no devolvió ningún curso de programación entre sus 36 resultados. La tercera columna es nuestra. No tenemos ningún vínculo con la municipalidad ni con la PUCP.' },
        { kind: 'p', mt: true, html: 'El hueco más claro está entre los 11 y los 17 años. Un chico de secundaria que ya pasó la edad de la biblioteca infantil y todavía no está para un laboratorio de emprendimiento encuentra poco en el distrito para aprender a programar. Ahí es donde más alumnos tenemos, y donde una clase semanal en vivo cambia más cosas: el adolescente deja de usar aplicaciones y empieza a construirlas. Si está pensando en el verano, la guía de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-isidro-lima">vacaciones útiles de programación en San Isidro</a> trata ese tramo por separado.' }
      ]
    },
    {
      id: 'vecinos',
      eyebrow: 'Quién vive en el distrito',
      h2: '¿Cuántos habitantes tiene San Isidro según el censo de 2025?',
      lede: 'El INEI registra 73,402 habitantes en San Isidro en los Censos Nacionales 2025. Es uno de los distritos con más peso de personas mayores en Lima Metropolitana, y eso cambia a quién le hablamos.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'San Isidro por grupo de edad: población censada en 2025 y cuántos de cada 100 vecinos censados hay en cada grupo', head: ['Grupo de edad', 'Personas censadas', 'De cada 100 vecinos'], rows: [
          ['De 0 a 5 años', '2,507', '3.6'],
          ['De 6 a 11 años', '3,596', '5.2'],
          ['De 12 a 17 años', '4,048', '5.9'],
          ['De 18 a 29 años', '9,660', '14.0'],
          ['De 30 a 44 años', '14,891', '21.5'],
          ['De 45 a 59 años', '14,895', '21.5'],
          ['De 60 años a más', '19,540', '28.3'],
          ['Total censado', '69,137', '100']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Censos Nacionales 2025, tabulados de Lima Metropolitana, Cuadro N.° 3 (grupos de edad, solo población censada) y Cuadro N.° 1 (73,402 habitantes en total: 69,137 censados más 4,265 omitidos). La tercera columna es cálculo nuestro, redondeado a un decimal.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Más de un cuarto, mayores', p: '28 de cada 100 vecinos censados tienen 60 años o más (cálculo nuestro). Por eso esta página no es solo para padres: es también para quien se jubiló y quiere entender la tecnología que usa a diario.' },
          { h3: 'Dos grupos casi idénticos', p: 'Las personas de 30 a 44 años (14,891) y las de 45 a 59 (14,895) se diferencian en solo cuatro. Son los profesionales del distrito, muchos con hijos en el colegio y con poco tiempo para trasladarse.' },
          { h3: 'Pocos escolares, muy buscados', p: 'Los menores de 18 suman 10,151 sumando los tres primeros grupos. Son pocos frente al total, pero son quienes más tiempo pueden dar a aprender a programar.' }
        ] },
        { kind: 'p', mt: true, html: 'San Isidro limita con Miraflores, Surquillo, San Borja, La Victoria, Lince, Jesús María y Magdalena del Mar. Mucha gente trabaja en San Isidro y vive en esos distritos, o al revés; una clase en línea no distingue entre vivir y trabajar en el distrito, porque se toma donde uno esté conectado.' }
      ]
    },
    {
      id: 'de-la-lectura',
      eyebrow: 'Niños',
      h2: '¿Mi hijo puede pasar de la biblioteca infantil a programar?',
      lede: 'Sí, y es una transición natural. Un niño que escucha cuentos y hace experimentos ya practica lo que pide la programación: seguir una secuencia, prever qué pasa después y probar una idea para ver si funciona.',
      body: [
        { kind: 'two',
          leftH3: 'De 6 a 10 años: contar con bloques',
          left: [
            'La Biblioteca Infantil de San Isidro atiende hasta los 10 años con cuentacuentos, lectura en voz alta y talleres de experimentos, según su nota de julio de 2025 sobre el taller "Creciendo entre cuentos". Nuestros alumnos más pequeños hacen algo muy parecido en Scratch: arman una historia con personajes, diálogos y escenas, y cada bloque es una instrucción que el personaje obedece.',
            'El inglés entra por la misma puerta que entraron los primeros cuentos: escuchando. <em>When green flag clicked</em>, <em>say hello</em>, <em>wait one second</em>. El mentor lee en voz alta y el niño repite mientras arrastra.'
          ],
          rightH3: 'De 9 a 12 años: escribir',
          right: [
            'Hacia el final de la primaria la mayoría de niños quiere escribir de verdad. Les proponemos una página web propia, con HTML y CSS, o los primeros programas en Python. Lo que escriben se ve en el navegador al instante, y eso engancha.',
            'Aquí la IA aparece con reglas claras: puede sugerir, pero el niño tiene que leer y explicar cada línea antes de usarla. Si no puede explicarla, no la pega.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Cuente historias en casa.</strong> Pídale a su hijo que le cuente qué hace su personaje y por qué. Narrar el programa es la mitad de entenderlo.',
          '<strong>Deje que se equivoque.</strong> En la clase, el error no se borra: se lee. El mentor pregunta qué esperaba y qué pasó.',
          '<strong>Acompañe las primeras sesiones.</strong> Con 6 o 7 años, tener a un adulto cerca da seguridad. No para programar por él, sino para estar.',
          '<strong>Guarde los proyectos.</strong> Un archivo de proyectos terminados, aunque sean sencillos, deja ver el avance con más claridad que cualquier nota.'
        ] }
      ]
    },
    {
      id: 'adultos',
      eyebrow: 'Universitarios y adultos',
      h2: '¿Hay cursos de programación para adultos que trabajan en San Isidro?',
      lede: 'Sí. Gran parte de nuestros alumnos adultos aprende antes o después de la oficina, y un curso en línea encaja en jornadas en las que no cabe ningún traslado.',
      body: [
        { kind: 'p', html: 'El Lab San Isidro, presentado en 2017 junto con la PUCP como el primer laboratorio municipal de innovación, tecnología y emprendimiento del país, según la propia municipalidad, se pensó para charlas, asesorías y talleres de emprendimiento. Es un buen lugar para una idea de negocio. Para escribir el software que esa idea necesita hace falta otra cosa: práctica guiada, semana a semana, con alguien que revise su código.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Qué suelen querer construir nuestros alumnos adultos, y por dónde empiezan (propuesta nuestra)', head: ['Objetivo', 'Lenguaje o tema', 'Primer proyecto'], rows: [
          ['Dejar de copiar y pegar en hojas de cálculo', 'Python con archivos y tablas', 'Un script que une diez reportes en uno'],
          ['Cambiar de rubro hacia tecnología', 'Java o JavaScript, más estructuras de datos', 'Una aplicación pequeña con pruebas'],
          ['Entender la IA que ya usa en el trabajo', 'Fundamentos de IA y agentes', 'Un asistente que resume documentos, revisado a mano'],
          ['Validar una idea de negocio', 'Desarrollo web', 'Una página que recibe pedidos o reservas'],
          ['Aprender por gusto después de jubilarse', 'Python sencillo', 'Un programa para su colección, sus recetas o su presupuesto']
        ] },
        { kind: 'source', html: 'Tabla nuestra, a partir de lo que piden los alumnos adultos en la clase de prueba. No ofrecemos asesoría legal, tributaria ni de negocios.' },
        { kind: 'p', mt: true, html: 'Para los universitarios, la ventaja es otra: muchas carreras exigen Java o Python, pero los cursos de la universidad van rápido y en castellano. Repasar los mismos temas en inglés, con un mentor que espera a que usted entienda, prepara además para leer documentación técnica y para entrevistas en empresas internacionales. Tenemos una guía específica de <a class="ag-inline-link" href="/cursos-de-programacion-para-universitarios-peru">cursos de programación para universitarios</a>.' }
      ]
    },
    {
      id: 'pares',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Qué pasa si en Python dos listas no tienen el mismo largo?',
      lede: 'Es el tipo de error que no avisa. Este ejercicio es nuestro: usamos los grupos de edad de San Isidro del Cuadro N.° 3 y, a propósito, olvidamos una etiqueta. Lo trabajamos con adolescentes desde 3° de secundaria y con adultos que manejan datos.',
      body: [
        { kind: 'code', label: 'Versión 1: falta la etiqueta "6 a 11"', lang: 'Python', code: V1, note: 'Hay siete números y solo seis etiquetas. <code>zip()</code> va formando parejas y se detiene cuando se acaba la lista más corta, sin decir nada.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Salida exacta con python3. Los 3,596 niños de 6 a 11 años aparecen como si fueran adolescentes de 12 a 17, y los 19,540 mayores de 60 desaparecen.' },
        { kind: 'code', label: 'Versión 2: pedir que el largo coincida', lang: 'Python', code: V2, note: 'Desde Python 3.10, <code>strict=True</code> hace que <code>zip()</code> lance un error si las listas no tienen el mismo largo.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Resumimos con puntos suspensivos las líneas repetidas y la traza; la última línea es exacta. Ojo: el error llega al final, cuando la lista corta se termina, después de imprimir seis parejas equivocadas.' },
        { kind: 'code', label: 'Versión 3: la lista completa y una comprobación', lang: 'Python', code: V3, note: 'Con la etiqueta que faltaba, las siete parejas son correctas y la suma coincide con el total que publica el INEI.' },
        { kind: 'code', label: 'Lo que imprime la versión 3', lang: 'Salida', code: OUT3, note: 'Salida exacta con python3.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar antes de emparejar.</strong> El mentor pregunta: ¿cuántas etiquetas hay y cuántos números? Contar con <code>len()</code> antes de unir dos listas evita la mayoría de estos errores.',
          '<strong>Leer el error en inglés.</strong> "zip() argument 2 is longer than argument 1": el segundo argumento, <code>personas</code>, es más largo que el primero. El alumno lo traduce en voz alta y señala cuál es cuál.',
          '<strong>No confiar solo en el error.</strong> <code>strict=True</code> detecta el problema, pero tarde: las seis líneas malas ya salieron. Si esas líneas se guardaran en un archivo, el archivo quedaría mal a medias.',
          '<strong>Comparar con el total publicado.</strong> La suma de la versión 1 da 49,597; el censo dice 69,137. Una sola comparación con la fuente habría bastado para sospechar.',
          '<strong>Llevarlo a su trabajo.</strong> Nombres y correos, productos y precios, alumnos y notas: cualquier par de columnas que se copian por separado puede descuadrarse igual.'
        ] },
        { kind: 'p', mt: true, html: 'La lección de fondo no es de sintaxis. Es que un programa que no se queja no es lo mismo que un programa correcto, y que la última palabra la tiene la fuente original. Una herramienta de IA puede escribir el bucle en un segundo; comprobar que el resultado cuadra con el censo sigue siendo trabajo de quien firma el reporte.' }
      ]
    },
    {
      id: 'desde-casa',
      eyebrow: 'En línea',
      h2: '¿Vale la pena una clase de programación en línea viviendo en San Isidro?',
      lede: 'Para la mayoría de vecinos, sí. El distrito concentra oficinas, y en las horas en que uno podría ir a una academia es justo cuando más cuesta moverse por Lima.',
      body: [
        { kind: 'two',
          leftH3: 'Sin cruzar la ciudad',
          left: [
            'Una academia presencial obliga a salir con tiempo, estacionar o esperar transporte y regresar. No ponemos cifras de minutos porque cada ruta es distinta, pero cualquier familia limeña sabe cuánto se alarga una tarde por una hora de clase.',
            'En línea, la clase empieza al conectarse. Para un adulto que sale tarde de la oficina, esa diferencia decide si estudia o no.'
          ],
          rightH3: 'La computadora, no el celular',
          right: [
            'El INEI informa que en el segundo trimestre de 2026 el 90,2 % de los usuarios de internet de 6 años a más en el país se conectó por celular, mientras que solo el 18,9 % lo hizo por laptop y el 14,0 % por computadora de escritorio.',
            'Para programar, el celular no basta. Según el mismo informe, el 74,3 % de los hogares con computadora tiene una sola; si es su caso, conviene acordar en casa a quién le toca en la hora de clase.'
          ] },
        { kind: 'p', mt: true, html: 'Ese informe del INEI también muestra que el 98,0 % de las personas con educación superior universitaria usó internet en el segundo trimestre de 2026. Es decir, el universitario o profesional de San Isidro ya vive conectado; lo que cambia con una clase en vivo es que esa conexión sirve para crear algo, no solo para consumirlo.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horario',
      h2: '¿Qué hora es en la India cuando tengo clase en San Isidro?',
      lede: 'Siempre diez horas y media más. Ningún país cambia la hora en el año, así que la cuenta es fija; usted elige su franja y nosotros buscamos al mentor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cinco ejemplos de conversión entre San Isidro y la India (no son horarios fijos)', head: ['En San Isidro', 'En la India', 'Comentario'], rows: [
          ['7:00 a. m.', '5:30 p. m. de ese día', 'Antes de entrar a trabajar'],
          ['10:30 a. m.', '9:00 p. m. de ese día', 'Media mañana, para jubilados y universitarios'],
          ['1:00 p. m.', '11:30 p. m. de ese día', 'La hora del almuerzo, para clases cortas'],
          ['5:30 p. m.', '4:00 a. m. del día que sigue', 'Escolares, al volver del colegio'],
          ['9:00 p. m.', '7:30 a. m. del día que sigue', 'Cuando la casa ya está en calma']
        ] },
        { kind: 'source', html: 'Base de datos tzdata: zona America/Lima, UTC-5 sin horario de verano; zona Asia/Kolkata, UTC+5:30. El INACAL, que custodia la hora oficial del Perú, da la misma hora. Los comentarios de la tercera columna son nuestros.' },
        { kind: 'p', mt: true, html: 'Sobre el idioma: todas las clases son en inglés. El EF EPI 2025 da a Perú 540 puntos en comprensión lectora y 480 en expresión oral, mientras Lima llega a 555 en el índice general. Leer suele ir por delante de hablar; en una clase de programación hay que hacer las dos cosas, y por eso el inglés mejora sin que sea una clase de idiomas.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo medimos el avance de cada alumno?',
    lede: 'Con cinco peldaños propios, iguales para un niño y para un adulto. Cambia el lenguaje, no la idea.',
    table: { caption: 'Cinco peldaños de aprendizaje en programación (nuestros)', head: ['Peldaño', 'Tiempo habitual', 'Lo que el alumno ya hace'], rows: [
      ['1. Sigue una secuencia', 'Primeras semanas', 'leer un programa corto en orden y decir qué hará'],
      ['2. Toma decisiones', 'Primer y segundo mes', 'usar condiciones y repeticiones para que el programa reaccione'],
      ['3. Guarda y empareja datos', 'Tercer mes', 'trabajar con listas y comprobar que coinciden, como en la lección de ejemplo'],
      ['4. Prueba lo que escribe', 'Cuarto a sexto mes', 'escribir casos de prueba y encontrar el que falla'],
      ['5. Construye y explica', 'Desde el sexto mes', 'terminar un proyecto propio y presentarlo en inglés']
    ] },
    left: { h3: 'Si es madre o padre', ps: [
      'Pregunte por el peldaño, no por la nota. Un niño en el peldaño 3 que explica su error va mejor que uno en el 4 que copia.',
      'Los mentores envían un resumen después de las clases; léalo con su hijo y pregúntele qué parte fue la más difícil.'
    ] },
    right: { h3: 'Si el alumno es usted', ps: [
      'Escriba cada semana una línea sobre lo que aprendió. A los tres meses, esa lista le sorprenderá.',
      'Cuando algo no funcione, cuente cuántos datos esperaba y cuántos tiene. Muchos errores se ven ahí.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Otros nueve cursos para vecinos de San Isidro',
    lede: 'Se dictan en vivo, en inglés, con el mismo mentor durante todo el programa; usted escoge si en grupo o individual.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 12 años', courses: [
        { code: 'PRIS / PRIMARIA / 01', slug: 'scratch-programming-complete-course', title: 'Scratch de principio a fin', blurb: 'Historias y juegos con bloques, de 6 a 12 años.' },
        { code: 'PRIS / PRIMARIA / 02', slug: 'ai-literacy-for-kids-course', title: 'Qué es la IA, para niños', blurb: 'Cómo aprende una máquina y por qué a veces se equivoca.' },
        { code: 'PRIS / PRIMARIA / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Resolver problemas paso a paso, con y sin computadora.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PRIS / SECUNDARIA / 01', slug: 'python-complete-masterclass-teens', title: 'Python desde cero', blurb: 'Programas, datos y pequeños juegos para adolescentes.' },
        { code: 'PRIS / SECUNDARIA / 02', slug: 'react-for-teens-complete-masterclass', title: 'React para adolescentes', blurb: 'Interfaces web modernas, componente por componente.' },
        { code: 'PRIS / SECUNDARIA / 03', slug: 'ai-ml-masterclass-teens', title: 'IA y aprendizaje automático', blurb: 'Modelos sencillos entrenados y evaluados por el propio alumno.' }
      ] },
      { num: 'III', h3: 'Universidad y vida adulta', sub: 'De 18 años en adelante', courses: [
        { code: 'PRIS / ADULTOS / 01', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos', blurb: 'Limpiar, cruzar y resumir tablas reales con Python.' },
        { code: 'PRIS / ADULTOS / 02', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web full stack', blurb: 'Del diseño de la página a su servidor y base de datos.' },
        { code: 'PRIS / ADULTOS / 03', slug: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals', title: 'Agentes con Copilot Studio', blurb: 'Asistentes para la oficina, con control humano en cada paso.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo se organiza una semana de clases?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes de la oficina', l: 'Una sesión temprana, con la cabeza fresca.' },
      { time: 'Al salir del colegio', l: 'Para escolares, después de comer y descansar.' },
      { time: 'Fin de semana', l: 'Si su semana está llena, también se puede.' }
    ],
    cells: [
      { h3: 'El mismo mentor', p: 'Lo acompaña de inicio a fin y recuerda en qué quedó.' },
      { h3: 'Código en pantalla', p: 'Usted comparte su pantalla; el mentor ve lo mismo que usted.' },
      { h3: 'Teclado propio', p: 'El alumno escribe; el mentor pregunta y orienta.' },
      { h3: 'Proyecto por tramo', p: 'Cada etapa cierra con algo terminado y funcionando.' },
      { h3: 'Nota de seguimiento', p: 'Un mensaje breve tras las sesiones con lo avanzado.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte alumnos afines, o una clase solo suya.' }
    ]
  },

  projectsH2: 'Algunos proyectos de nuestros alumnos',
  projectsLede: 'Trabajos de estudiantes que empezaron como usted. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas publicadas en Google por alumnos y familias, sin editar y en el inglés original.',

  fees: {
    h2: 'Precios para San Isidro',
    lede: 'Mostramos las mensualidades en dólares estadounidenses y las cobramos con tarjeta. La conversión a su moneda la realiza su banco al tipo de cambio del día, así que el cargo final puede variar unos céntimos.',
    free: ['Una sesión de prueba con un mentor real', 'Le decimos por dónde conviene empezar', 'No pedimos tarjeta ni compromiso'],
    group: ['Quince a veinte alumnos de edad similar', 'Un mentor fijo durante el curso', 'Dos clases en vivo por semana', 'Mensual, se puede dejar cuando quiera'],
    one: ['Usted y su mentor, sin nadie más', 'Contenidos y ritmo según su objetivo', 'El horario que usted elija cada semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación en San Isidro: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, y lo decimos desde el inicio: cada clase se dicta en inglés, en vivo y por internet. Para muchos alumnos eso es lo atractivo, porque practican el idioma mientras programan. El mentor usa frases cortas, repite y escribe en el chat lo importante. Según el EF EPI 2025, Lima tiene un nivel alto de inglés, con 555 puntos.' },
      { q: '¿La Municipalidad de San Isidro tiene cursos de programación?', a: 'En las notas que publica en gob.pe no encontramos ninguno. Sí hay biblioteca infantil hasta los 10 años, talleres de inglés e italiano, un taller de smartphone para mayores y el Lab San Isidro de innovación. No tenemos relación con la municipalidad.' },
      { q: '¿Cuántas personas viven en San Isidro?', a: 'Los Censos Nacionales 2025 del INEI registran 73,402 habitantes. De los 69,137 censados, 19,540 tienen 60 años o más, alrededor de 28 de cada 100 según nuestro cálculo.' },
      { q: '¿Desde qué edad se puede empezar?', a: 'Desde los 6 años con Scratch. No hay edad máxima: enseñamos a escolares, universitarios, profesionales y jubilados, cada uno en su propio curso.' },
      { q: '¿Sirve para un adulto que nunca programó?', a: 'Sí. Empezamos desde lo básico y a su ritmo. Muchos adultos llegan para automatizar tareas del trabajo con Python o para entender la IA que ya usan; el primer proyecto suele estar listo en pocas semanas.' },
      { q: '¿Qué horarios hay?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. En la India son diez horas y media más que en Perú, sin cambios durante el año.' },
      { q: '¿Qué necesito para conectarme?', a: 'Una laptop o computadora con cámara, micrófono e internet estable. Los programas son gratuitos. Con un celular se puede seguir la clase, pero no programar con comodidad.' },
      { q: '¿Cómo se pagan las clases?', a: 'Con tarjeta y en dólares estadounidenses; su banco aplica el tipo de cambio. La sesión de prueba no tiene costo y no pide datos de pago.' },
      { q: '¿Las clases dan un título oficial?', a: 'No. Al terminar un curso entregamos un certificado de finalización de Modern Age Coders, que no es un título del Ministerio de Educación ni de una universidad. Las clases acompañan al colegio o al trabajo; no los reemplazan.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Páginas que también le pueden servir',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-san-isidro-lima', label: 'Vacaciones útiles en San Isidro', p: 'Un verano de programación para secundaria.' },
      { href: '/clases-de-programacion-en-ingles-peru', label: 'Programación en inglés', p: 'Qué significa aprender a programar en otro idioma.' },
      { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Programación para universitarios', p: 'Java, Python y estructuras de datos para la carrera.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas las guías del Perú en un solo lugar.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo enseñan nuestros mentores, en inglés.' },
      { href: '/courses', label: 'All courses', p: 'La lista entera de programas disponibles.' }
    ]
  },

  start: {
    h2: 'Agende una clase de prueba desde San Isidro',
    lede: 'El mentor le hará algunas preguntas en inglés sencillo, le pedirá resolver un problema pequeño y, según lo que vea, le recomendaremos un curso y un formato. Si no le convence, no pasa nada.',
    readFirst: 'Si prefiere informarse antes, <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestro método y <a class="ag-inline-link" href="/courses">All courses</a> lista los programas; ambas páginas están en inglés.',
    note: 'Damos clases en tiempo real, por internet, con mentores que viven en la India, y siempre en inglés. Por WhatsApp contestamos rápido, también en castellano.',
    formNote: 'Sin costo, sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/kids-ai-web-development-course', label: 'Web para niños' },
        { href: '/courses/javascript-course-for-teens-beginners-interactive-web', label: 'JavaScript para adolescentes' },
        { href: '/courses/complete-java-programming-masterclass-college', label: 'Java para adultos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-en-ingles-peru', label: 'Programar en inglés' },
        { href: '/cursos-de-programacion-para-universitarios-peru', label: 'Universitarios' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Contar antes de emparejar'
  },

  personalityCss: `
.ag-root.ag-pris .ag-hero h1 { max-width: 21ch; }
.ag-root.ag-pris .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-pris .ag-table caption { text-align: left; }
.ag-root.ag-pris .ag-section-head h2 { max-width: 30ch; letter-spacing: -0.005em; }
.ag-root.ag-pris .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad de San Isidro notes on gob.pe of 17 Jul 2025, 27 Jan 2024, 31 Aug 2017 and 18 Jun 2019; INEI Boletín TIC II trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 10 November 2026. The step table, the adult goals table, the progress rungs and the Python example are our own.',
    localProject: 'Pairing the San Isidro age labels with the INEI 2025 counts (Cuadro N.° 3) in Python when one label is missing: zip() stops at six pairs and prints "Sum of pairs: 49597", strict=True raises "ValueError: zip() argument 2 is longer than argument 1" only after six wrong lines, and the fixed lists print "Sum of pairs: 69137 published total: 69137". Lesson family: zip() and lists of unequal length, strict=True, and a check against the published total.',
    requiredMentions: ['Sum of pairs: 49597', 'Sum of pairs: 69137 published total: 69137', 'ValueError: zip() argument 2 is longer than argument 1', 'Creciendo entre cuentos', 'Centros de Encuentro Vecinal', 'Lab San Isidro', 'Contar antes de emparejar', 'se diferencian en solo cuatro', 'Los menores de 18 suman 10,151'],
    sources: [
      { claim: 'San Isidro population 73,402 (total), 69,137 censada, 4,265 omitida, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Biblioteca Infantil de San Isidro: free permanent programme for children up to 10, including experiment workshops.', url: 'https://www.gob.pe/institucion/munisanisidro-lima/noticias/1211165-espacios-que-inspiran-biblioteca-infantil-de-san-isidro-promueve-la-lectura-en-los-mas-pequenos' },
      { claim: 'English and Italian workshops in the Centros de Encuentro Vecinal.', url: 'https://www.gob.pe/institucion/munisanisidro-lima/noticias/900321-vecinos-de-san-isidro-participan-en-talleres-de-ingles-e-italiano' },
      { claim: 'Lab San Isidro with PUCP, first municipal innovation, technology and entrepreneurship lab in the country (2017).', url: 'https://www.gob.pe/institucion/munisanisidro-lima/noticias/1469371-inauguramos-primer-laboratorio-municipal-de-innovacion-tecnologia-y-emprendimiento' },
      { claim: 'About 300 older adults invited to a basic smartphone workshop (2019).', url: 'https://www.gob.pe/institucion/munisanisidro-lima/noticias/1462736-mas-de-300-adultos-mayores-de-san-isidro-accederan-a-nuevas-tecnologias-digitales' },
      { claim: 'Internet by device (mobile 90.2%, laptop 18.9%, desktop 14.0%), 74.3% of computer households with one computer, 98.0% internet use with university education, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru reading 540, speaking 480; Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any link with the Municipalidad de San Isidro, the PUCP, MINEDU or a school: none; the page says so and names no officials.',
      'The company that taught the 2019 smartphone workshop and its spokesperson: not named, not needed.',
      'Summer dates, OPI and admission calendars: left to the vacaciones útiles page, linked once.',
      'Commute minutes across Lima: no primary source, so no figure.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

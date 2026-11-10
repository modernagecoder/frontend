// SHIP: market | Barranco learns tech at 40 to 70: from ofimática to code and AI, with daughters and sons too | bit masks: one number per week, & | and <<, and binary read right to left
'use strict';
// Clases de programación en Barranco (ag- Spanish district door, Peru cluster row PE141, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round; differs from vacaciones-utiles-de-programacion-barranco-lima, which sold creative coding for children
// in the summer): the Barranco council's own notes show adults learning technology late in life: cohorts of 40 to 70
// graduating from a computing and office-software course at the Casa de la Mujer, an older adults' digital skills
// programme, a free laptop clinic, and a 2026 event on AI for local tourism. The page takes the next step after ofimática:
// programming and applied AI for adults, with a family angle (mothers and daughters, fathers and sons learning in parallel),
// and a lesson that finds the days two people are both free with one integer per person.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-barranco/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO BARRANCO 42986 20490
//    22496 41076 19537 21539 1910 953 957"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO BARRANCO 41076 1560 2243 2559 6611 10819
//    8043 9241".
//  - Municipalidad Distrital de Barranco on gob.pe (institucion/munibarranco; www.munibarranco.gob.pe redirects there):
//    n-1138400.txt, 6 Dec 2024: "43 alumnos se graduaron del curso de computación y ofimática que se llevan a cabo en la Casa
//      de la Mujer. Barranquinos de 40 a 70 años participaron de esta ceremonia"; "a muchos de ellos les ayudará a emprender
//      un negocio".
//    n-811598.txt, 1 Aug 2023: "se graduaron la primera promoción “Los Tranviarios” quienes participaron del programa
//      “Desarrollando Habilidades Tecnológicas”"; "Este primer grupo de adultos mayores llevaron clases presenciales de
//      computo, office y ofimática"; "Fueron 13 damas y 2 caballeros". Officials' names not repeated.
//    n-850583.txt, 16 Oct 2023: "la Feria Tecnológica donde los vecinos tienen la oportunidad de llevar sus laptos, PC para
//      que le realicen un mantenimiento, instalación de antivirus y diagnostico todo de manera gratuita".
//    n-1450650.txt, 24 Sep 2026: "Barranco Conecta: Agenda Digital e Inteligencia Artificial para Rediseñar el Turismo";
//      "metodologías sobre el uso de herramientas digitales avanzadas y análisis de datos".
//    n-1271017.txt, 2 Oct 2025: "celebrando los 103 años de nuestra querida Biblioteca Municipal Manuel Beingolea".
//    gob.pe search "programacion" for this institution (gobpe/q-programacion.html): one result, unrelated (street cleaning).
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt), national II trimestre 2026: "41 a 59 años ... 86,0";
//    "60 y más ... 56,7"; "25 a 40 años ... 95,2".
//  - EF EPI 2025 (ef_peru.txt): Peru speaking 480; Lima 555.
//  - Time (timezone.tsv): Peru UTC-5 all year, India UTC+5:30.
//  - Neighbouring districts, plain text: Miraflores, Santiago de Surco, Chorrillos; the Pacific.
// Our own calculations (python3 -I): 10819 / 41076 = 26.34% (30 to 44, the largest group); 8043 + 9241 = 17284 aged 45 and
//   over, 42.08%; 6611 / 41076 = 16.09%; 2243 + 2559 = 4802 aged 6 to 17; 42986 / 10141775 = 0.42% of Lima Metropolitana.
// Our own example (barranco_v1.py, barranco_v2.py), exact output: v1 "Daughter: 0010101" / "Mum:      1000110" / "Both:
//   0000100" / "Free together: Wed"; v2 "Free together: Wed" / "Either one: 1010111" / "Daughter adds Sun: 1010101" / "Free
//   together now: Wed" / "Free together now: Sun".
// Lesson family: bit masks; a set of days stored in one integer, & for both, | for either, 1 << i to test or add a day; a
// binary string is read right to left (the rightmost digit is Monday here).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const HEAD = [
  "dias = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']",
  '',
  'hija = 0b0010101',
  'mama = 0b1000110',
  '',
  'ambos = hija & mama'
];

const V1 = HEAD.concat([
  "print('Daughter:', format(hija, '07b'))",
  "print('Mum:     ', format(mama, '07b'))",
  "print('Both:    ', format(ambos, '07b'))",
  'for i, dia in enumerate(dias):',
  '    if ambos & (1 << i):',
  "        print('Free together:', dia)"
]).join('\n');

const OUT1 = ['Daughter: 0010101', 'Mum:      1000110', 'Both:     0000100', 'Free together: Wed'].join('\n');

const V2 = [
  '# dias, hija, mama and ambos as before',
  'for i, dia in enumerate(dias):',
  '    if ambos & (1 << i):',
  "        print('Free together:', dia)",
  "print('Either one:', format(hija | mama, '07b'))",
  'hija = hija | (1 << 6)',
  "print('Daughter adds Sun:', format(hija, '07b'))",
  'for i, dia in enumerate(dias):',
  '    if hija & mama & (1 << i):',
  "        print('Free together now:', dia)"
].join('\n');

const OUT2 = ['Free together: Wed', 'Either one: 1010111', 'Daughter adds Sun: 1010101', 'Free together now: Wed', 'Free together now: Sun'].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en Barranco' },
  slug: 'clases-de-programacion-barranco',
  code: 'prb',
  accent: '#AD3A52',
  accentRationale: 'Clases de programación en Barranco: a bougainvillea rose #AD3A52, the colour of the flowers that hang over the Bajada de Baños and the old casonas, brighter than the other Lima district doors; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en Barranco',
  title: 'Clases de programación en Barranco, en vivo y en inglés',
  description: 'Clases de programación en Barranco para adultos de 30, 40 o 70 años y para sus hijos: en vivo, en línea y en inglés, todo el año, del paso de la ofimática al código.',
  ogDescription: 'En Barranco se gradúan en computación personas de 40 a 70 años. El paso siguiente es programar y usar la IA con criterio. Clases en vivo y en inglés para adultos y familias.',
  twitterDescription: 'Programación e IA en vivo y en inglés para adultos y familias de Barranco, todo el año y desde casa.',
  pageName: 'Clases de programación en Barranco',
  webPageDescription: 'Guía para vecinos de Barranco, sobre todo adultos que ya pasaron por un curso de computación u ofimática, y para sus hijos, que quieren aprender a programar durante el año con clases en vivo, en línea y en inglés: lo que la municipalidad publica sobre sus cursos de tecnología para adultos y su jornada de IA, la población del distrito según los Censos Nacionales 2025 del INEI, una ruta de la ofimática al código y una clase de ejemplo en Python, escrita por nosotros, que encuentra los días libres de madre e hija con un solo número por persona.',
  courseDescription: 'Clases en vivo y en línea de programación, desarrollo web e inteligencia artificial para vecinos de Barranco, adultos de cualquier edad, jóvenes y escolares, dictadas solo en inglés: HTML, CSS, JavaScript, Python, Godot e IA aplicada, en grupos de quince a veinte o en sesiones individuales, todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en Barranco',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#despues', label: 'Después de la ofimática' },
    { href: '#barranquinos', label: 'Censo 2025' },
    { href: '#ia', label: 'IA' },
    { href: '#dias', label: 'Ejemplo' },
    { href: '#relojes', label: 'Hora' }
  ],
  eyebrow: 'Barranco &middot; Programación para adultos y familias &middot; Todo el año',
  h1: 'Clases de programación en Barranco: el paso después de la ofimática',
  lede: 'En Barranco hay vecinos de 40 a 70 años que se gradúan en computación y ofimática, y adultos mayores que reciben su diploma con toga y birrete. Es un distrito donde nadie se siente demasiado grande para aprender tecnología. Esta página es para ellos y para quien venga detrás: qué sigue después de dominar Word y Excel, cómo empezar a programar o a usar la inteligencia artificial con criterio, y cómo hacerlo en paralelo con una hija o un hijo, con clases en vivo y en inglés desde casa.',
  secondaryCta: { href: '#despues', label: 'Qué sigue después de la ofimática' },
  wa: 'Hola Modern Age Coders, vivo en Barranco y quisiera aprender programación en inglés. ¿Puedo probar una clase?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; enseñanza solo en inglés',
  spec: [
    ['Distrito', 'Barranco, Lima Metropolitana'],
    ['Para quién', 'Adultos de cualquier edad, jóvenes y escolares'],
    ['Punto de partida', 'Desde cero, o después de un curso de ofimática'],
    ['Modalidad', 'En vivo por internet, todo el año'],
    ['Formato', 'Grupo de quince a veinte o sesión individual'],
    ['Primera clase', 'Gratuita, sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, en Barranco puede aprender a programar a cualquier edad con Modern Age Coders, en cualquier mes, con clases en vivo, en línea y en inglés. Quien ya maneja la computadora pasa a desarrollo web, Python o inteligencia artificial aplicada; los jóvenes y escolares tienen sus propios cursos, desde los 6 años. Un mentor que trabaja desde la India enseña por videollamada, con un inglés claro y paciente. Puede elegir grupo o clases individuales, a la hora que le quede cómoda.',

  picks: {
    eyebrow: 'Para empezar',
    h2: 'Tres cursos para dar el paso',
    lede: 'Uno pensado para mujeres y chicas que empiezan desde cero, uno para quien quiere entender la inteligencia artificial por dentro y uno para el hijo o la hija que quiere crear videojuegos.',
    items: [
      { course: 'princess-coders-complete-coding-masterclass', code: 'PRB / 01', title: 'Programación para mujeres y chicas', alt: 'Imagen del curso de programación para mujeres y chicas', note: 'Para escolares, universitarias y mujeres que cambian de rumbo. HTML, CSS, JavaScript y React, desde cero y en un ambiente de apoyo.' },
      { course: 'artificial-intelligence-complete-masterclass-college', code: 'PRB / 02', title: 'Inteligencia artificial completa', alt: 'Imagen del curso completo de inteligencia artificial', note: 'Para adultos. Búsqueda, lógica, aprendizaje automático y agentes: cómo funciona la IA que usa en el trabajo, y cuándo no confiar en ella.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'PRB / 03', title: 'Videojuegos con Godot', alt: 'Imagen del curso de videojuegos con Godot', note: 'Para niños y adolescentes. Juegos en 2D y 3D con GDScript, un motor libre y gratuito que se usa también fuera de las aulas.' }
    ]
  },

  sections: [
    {
      id: 'despues',
      eyebrow: 'Después de la ofimática',
      h2: '¿Qué aprender después de un curso de computación y ofimática?',
      lede: 'Programación, si quiere crear sus propias herramientas; o inteligencia artificial aplicada, si quiere entender las que ya usa. La ofimática enseña a usar programas; la programación enseña a hacerlos.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lo que la Municipalidad de Barranco ha publicado sobre formación en tecnología para adultos (gob.pe)', head: ['Fecha de la nota', 'Qué publicó', 'Quiénes participaron'], rows: [
          ['1 de agosto de 2023', 'Graduación de la primera promoción del programa "Desarrollando Habilidades Tecnológicas", con clases presenciales de cómputo, office y ofimática en la Casa de la Mujer', 'Adultos mayores: 13 damas y 2 caballeros'],
          ['16 de octubre de 2023', 'Feria Tecnológica gratuita: mantenimiento de laptops y PC, instalación de antivirus y diagnóstico', 'Vecinos del distrito'],
          ['6 de diciembre de 2024', 'Graduación de 43 alumnos del curso de computación y ofimática de la Casa de la Mujer; a muchos les ayudará a emprender un negocio', 'Barranquinos de 40 a 70 años'],
          ['24 de setiembre de 2026', '"Barranco Conecta": agenda digital e inteligencia artificial para el turismo, con herramientas digitales y análisis de datos', 'Especialistas y autoridades del sector']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Barranco, notas en gob.pe/institucion/munibarranco, leídas el 10 de noviembre de 2026. No repetimos nombres de autoridades. La búsqueda de "programacion" en la misma página devolvió un solo resultado, sin relación con cursos. No guardamos ninguna relación con la municipalidad.' },
        { kind: 'p', mt: true, html: 'La tabla dice algo importante: en Barranco la edad no ha sido un freno para aprender tecnología. Personas de 40 a 70 años terminaron un curso de computación, y un grupo de adultos mayores recibió su diploma con toga y birrete. Quien ya pasó por eso domina el teclado, las carpetas, el correo, la hoja de cálculo. Esa es justamente la base que pedimos para empezar a programar.' },
        { kind: 'two', mt: true,
          leftH3: 'Si quiere crear',
          left: [
            'Desarrollo web con HTML, CSS y JavaScript: la página de su negocio, de su taller o de su colección, hecha por usted y publicada en internet.',
            'Python para automatizar: la lista de clientes, los pedidos de la semana, la contabilidad del emprendimiento que menciona la nota de 2024.'
          ],
          rightH3: 'Si quiere entender',
          right: [
            'Inteligencia artificial por dentro: qué es un modelo, por qué a veces inventa, cómo se le dan instrucciones y cómo se revisa lo que devuelve.',
            'Análisis de datos: leer una tabla grande y sacar conclusiones honestas, que es lo que la jornada de 2026 propone para el turismo.'
          ] }
      ]
    },
    {
      id: 'barranquinos',
      eyebrow: 'El distrito',
      h2: '¿Cuántas personas viven en Barranco y de qué edad son?',
      lede: 'Barranco tiene 42,986 habitantes según los Censos Nacionales 2025 del INEI, algo menos de medio punto porcentual de Lima Metropolitana. Es pequeño, y su grupo más numeroso es el de 30 a 44 años.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Barranco: personas censadas por grupo de edad en 2025', head: ['Grupo', 'Barranquinos censados', 'Peso en el distrito'], rows: [
          ['0 a 5 años', '1,560', '3.8 %'],
          ['6 a 11 años', '2,243', '5.5 %'],
          ['12 a 17 años', '2,559', '6.2 %'],
          ['18 a 29 años', '6,611', '16.1 %'],
          ['30 a 44 años', '10,819', '26.3 %'],
          ['45 a 59 años', '8,043', '19.6 %'],
          ['60 y más años', '9,241', '22.5 %'],
          ['Censados en total', '41,076', '100 %']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, Lima Metropolitana: Cuadro N.° 3 (edades de la población censada) y Cuadro N.° 1 (42,986 habitantes, de los cuales 1,910 fueron omitidos y no tienen desagregación por edad). El peso de cada grupo es cálculo nuestro.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Uno de cada cuatro, entre 30 y 44', p: 'Con 10,819 personas, es el tramo que más pesa en Barranco y pesa más que en muchos distritos vecinos. Son adultos en plena vida laboral, muchos con emprendimientos propios.' },
          { h3: '17,284 de 45 años a más', p: 'Sumando los dos últimos grupos (cálculo nuestro), el 42.1 % de los censados. Es el público de los cursos de ofimática que la municipalidad gradúa.' },
          { h3: '4,802 escolares', p: 'Entre 6 y 17 años, sumando dos grupos. Pocos en número, pero suelen ser los primeros en preguntar en casa cómo se hace un videojuego.' }
        ] },
        { kind: 'p', mt: true, html: 'Barranco limita con Miraflores, Santiago de Surco y Chorrillos, y se asoma al mar. Su Biblioteca Municipal Manuel Beingolea cumplió 103 años en octubre de 2025, según la propia municipalidad: un distrito antiguo, con tradición de lectura y de arte, que también aprende cosas nuevas.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'Inteligencia artificial',
      h2: '¿Puedo aprender inteligencia artificial sin ser programador?',
      lede: 'Puede empezar sin serlo, pero conviene aprender un poco de programación en el camino. Entender una línea de Python ayuda a entender qué hace una herramienta de IA y, sobre todo, cuándo se equivoca.',
      body: [
        { kind: 'p', html: 'La municipalidad reunió en setiembre de 2026 a especialistas en la jornada "Barranco Conecta: Agenda Digital e Inteligencia Artificial para Rediseñar el Turismo", con metodologías de herramientas digitales y análisis de datos. Para un hostal, una galería o un restaurante del distrito, la IA ya está en la agenda. Nosotros no damos asesoría de turismo ni de negocios; enseñamos lo que hay debajo: datos, instrucciones y verificación.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Tres usos de la IA que piden los adultos, y lo que enseñamos para cada uno (propuesta nuestra)', head: ['Uso', 'Lo que aprende', 'La regla de oro'], rows: [
          ['Redactar y resumir textos', 'Cómo se le dan instrucciones claras y cómo se revisa el resultado', 'Nada se publica sin leerlo entero'],
          ['Analizar una tabla de datos', 'Python para cargar, limpiar y resumir datos', 'Toda cifra se comprueba contra su fuente'],
          ['Automatizar tareas', 'Agentes sencillos con pasos controlados', 'Una persona aprueba cada acción importante']
        ] },
        { kind: 'source', html: 'Tabla elaborada por Modern Age Coders. Nuestros cursos de IA para adultos son para mayores de 18 años; para escolares usamos herramientas permitidas para su edad.' },
        { kind: 'p', mt: true, html: 'Si prefiere leer en castellano cómo es nuestro programa de IA para adultos, la guía del <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a> lo detalla paso a paso. Y si ya pasó los sesenta y busca un ritmo más tranquilo, la guía de <a class="ag-inline-link" href="/cursos-de-tecnologia-para-adultos-mayores-peru">cursos de tecnología para adultos mayores</a> responde las dudas más comunes.' }
      ]
    },
    {
      id: 'familias',
      eyebrow: 'En familia',
      h2: '¿Pueden aprender a programar madre e hija, o padre e hijo, al mismo tiempo?',
      lede: 'Sí, cada uno en su propio curso. No los ponemos en la misma clase, porque un adulto y una niña de 10 años necesitan ritmos y ejemplos distintos, pero aprender en paralelo funciona muy bien en casa.',
      body: [
        { kind: 'ol', items: [
          '<strong>Cada uno con su mentor y su nivel.</strong> La hija empieza con bloques o con Godot; la madre, con HTML o Python. Los conceptos son los mismos: secuencia, condición, repetición.',
          '<strong>Horarios que no se pisan.</strong> Si hay una sola computadora, se eligen franjas seguidas. El ejemplo de abajo muestra cómo encontrar los días libres de las dos con un programa.',
          '<strong>Una pregunta cruzada por semana.</strong> La madre le explica a la hija qué es una función; la hija le muestra a la madre cómo se mueve su personaje. Enseñarle algo a otro es una prueba muy fiel de que uno lo entendió.',
          '<strong>Un proyecto compartido al final.</strong> Por ejemplo, la página web del emprendimiento familiar, con un juego pequeño escondido que hizo la hija.'
        ] },
        { kind: 'p', mt: true, html: 'Para el verano hay otra guía, la de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-barranco-lima">vacaciones útiles de programación en Barranco</a>, centrada en la programación creativa para niños. Esta página cubre el resto del año, cuando los adultos también quieren su espacio para aprender.' }
      ]
    },
    {
      id: 'dias',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo encuentra un programa los días en que dos personas están libres?',
      lede: 'Guardando cada semana como un solo número en binario. El ejercicio es nuestro y lo usamos con adultos y con adolescentes: una madre y una hija anotan sus días libres, y Python calcula en qué días coinciden. Programación, lógica y un poco de aritmética binaria.',
      body: [
        { kind: 'code', label: 'Versión 1: los días de cada una en un número', lang: 'Python', code: V1, note: 'Cada dígito binario es un día. Un 1 significa libre. El operador <code>&amp;</code> deja en 1 solo los días que están en 1 en los dos números.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Salida exacta con python3. Coinciden un solo día: el miércoles.' },
        { kind: 'code', label: 'Versión 2: quién está libre, y un día más', lang: 'Python', code: V2, note: '<code>|</code> une los días de las dos; <code>1 &lt;&lt; 6</code> es el número que solo tiene encendido el séptimo día, el domingo.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3. Cuando la hija libera el domingo, aparece un segundo día en común.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer el binario al revés.</strong> La trampa de la lección: <code>0010101</code> no significa "lunes no, martes no, miércoles sí". El dígito de la derecha es el lunes, porque <code>1 &lt;&lt; 0</code> es 1. Leído de derecha a izquierda: lunes, miércoles y viernes. Casi todos los alumnos lo leen al revés la primera vez.',
          '<strong>Comprobar a mano.</strong> La madre tiene <code>1000110</code>: martes, miércoles y domingo. La hija, lunes, miércoles y viernes. El único día en las dos listas es el miércoles, igual que dice el programa.',
          '<strong>Decirlo en inglés.</strong> "AND keeps the days that are free for both; OR keeps the days that are free for either." Dos frases que explican dos operadores.',
          '<strong>Agregar un día.</strong> <code>hija | (1 &lt;&lt; 6)</code> enciende el domingo sin tocar los demás días. El alumno explica por qué usar <code>+</code> en lugar de <code>|</code> podría fallar si el día ya estaba encendido.',
          '<strong>Usarlo de verdad.</strong> Tres personas, siete días, un solo <code>&amp;</code> más. Los permisos de un archivo y muchas configuraciones guardan opciones exactamente así.'
        ] },
        { kind: 'p', mt: true, html: 'Esta lección encanta a los adultos porque toca algo que usaban sin saberlo: el 0 y el 1 que hay detrás de todo. Y enseña la costumbre más útil al programar, la de comprobar a mano un caso pequeño antes de confiar en el resultado. Una herramienta de IA puede escribir el código; leer bien el binario sigue siendo trabajo de usted.' }
      ]
    },
    {
      id: 'por-internet',
      eyebrow: 'Desde casa',
      h2: '¿Funciona aprender a programar por internet si uno no es joven?',
      lede: 'Funciona si la clase es en vivo y el mentor tiene paciencia. Con una grabación, el adulto se traba y abandona; con una persona que ve su pantalla, el error se resuelve en el momento.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que muestran los datos',
          left: [
            'El boletín de TIC del INEI para abril a junio de 2026 muestra que el 86,0 % de los peruanos de 41 a 59 años navegó por internet, igual que el 56,7 % de quienes pasan los 60. Entre los de 25 a 40, la cifra llega a 95,2 %.',
            'Es decir, la mayoría de adultos ya está en línea. Lo que falta no es la conexión, sino alguien que acompañe el paso de usar la tecnología a construirla.'
          ],
          rightH3: 'Sin moverse del distrito',
          right: [
            'Barranco es pequeño, pero las academias de programación suelen quedar fuera de él. Ir y volver en hora punta, para una clase de una hora, desanima a cualquiera. No damos minutos porque dependen de cada ruta.',
            'En casa, en cambio, uno tiene su silla, su computadora y su café. La clase empieza cuando usted se conecta.'
          ] },
        { kind: 'p', mt: true, html: 'Lo que pedimos a un adulto que empieza es poco: una computadora con teclado (no el celular), audífonos y la disposición de equivocarse en voz alta. El resto lo pone el mentor, que repite sin apuro y explica cada término la primera vez que aparece.' }
      ]
    },
    {
      id: 'relojes',
      eyebrow: 'Horario',
      h2: '¿A qué hora puedo programar con un mentor en la India?',
      lede: 'A la que usted prefiera. Solo hay que saber que la India va diez horas y media adelante de Perú, y que esa diferencia no cambia en ninguna época del año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuatro horas de Barranco vistas desde la India (conversiones de muestra, no horarios fijos)', head: ['Barranco', 'India', 'Nota'], rows: [
          ['7:00 a. m.', '5:30 p. m., misma jornada', 'Para quien abre su negocio a media mañana'],
          ['11:00 a. m.', '9:30 p. m., misma jornada', 'Para jubilados y emprendedores'],
          ['3:00 p. m.', '1:30 a. m., jornada siguiente', 'Para escolares del turno mañana'],
          ['8:30 p. m.', '7:00 a. m., jornada siguiente', 'Para quien trabaja todo el día']
        ] },
        { kind: 'source', html: 'Cálculo hecho con las zonas America/Lima (cinco horas menos que UTC, todo el año) y Asia/Kolkata (cinco horas y media más que UTC) de la base tzdata; la hora oficial que custodia el INACAL coincide. Las notas de la tercera columna son nuestras.' },
        { kind: 'p', mt: true, html: 'Las clases son siempre en inglés. En el EF EPI 2025, hablar es lo que peor puntúa en el país (480 puntos), aunque la capital alcanza 555 puntos en la medición global. Para muchos adultos, hablar inglés una o dos veces por semana sobre algo concreto, como un programa que no funciona, es la práctica que nunca tuvieron.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Qué habré logrado después de unos meses?',
    lede: 'Cinco escalones propios para adultos que empiezan, desde quien ya domina la ofimática hasta quien publica su primer proyecto.',
    table: { caption: 'Cinco escalones para adultos que aprenden a programar (nuestros)', head: ['Escalón', 'Cuándo suele llegar', 'Lo que ya hace'], rows: [
      ['1. Lee código', 'Primeras semanas', 'sigue un programa corto y dice qué va a mostrar'],
      ['2. Escribe sus primeras reglas', 'Primer y segundo mes', 'usa condiciones y repeticiones con sus propios datos'],
      ['3. Comprueba a mano', 'Tercer mes', 'verifica un caso pequeño antes de confiar, como en el ejemplo binario'],
      ['4. Usa la IA con control', 'Cuarto a sexto mes', 'pide ayuda a una herramienta y revisa cada línea que devuelve'],
      ['5. Publica', 'Desde el sexto mes', 'pone en línea una página o herramienta propia y la explica en inglés']
    ] },
    left: { h3: 'Si es usted quien aprende', ps: [
      'Guarde cada ejercicio terminado en una carpeta con fecha. En pocos meses tendrá un portafolio.',
      'No se compare con un adolescente; compárese con usted mismo hace un mes.'
    ] },
    right: { h3: 'Si aprende junto con su hijo o hija', ps: [
      'Pídale que le explique su escalón y explíquele el suyo.',
      'Celebren juntos el primer programa que funcione, aunque sea pequeño.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Otros nueve cursos para Barranco',
    lede: 'Mismo formato que el resto: tiempo real, inglés, un mentor que no cambia, y usted elige grupo o sesiones a solas.',
    bands: [
      { num: 'I', h3: 'Adultos', sub: 'De 18 años en adelante', courses: [
        { code: 'PRB / ADULTOS / 01', slug: 'html-css-course-for-beginners-build-real-websites', title: 'Páginas web desde cero', blurb: 'HTML y CSS para publicar su propio sitio.' },
        { code: 'PRB / ADULTOS / 02', slug: 'ai-tools-mastery-complete-college', title: 'Herramientas de IA', blurb: 'Usar la IA en el trabajo, con revisión humana.' },
        { code: 'PRB / ADULTOS / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Datos para no programadores', blurb: 'Análisis y gráficos sin miedo a las tablas.' }
      ] },
      { num: 'II', h3: 'Jóvenes', sub: 'De 13 a 18 años', courses: [
        { code: 'PRB / JOVENES / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript interactivo', blurb: 'Botones, juegos y formularios en el navegador.' },
        { code: 'PRB / JOVENES / 02', slug: 'teens-ai-tools-mastery-course', title: 'IA para adolescentes', blurb: 'Herramientas permitidas desde los 13, con criterio.' },
        { code: 'PRB / JOVENES / 03', slug: 'creative-media-design-masterclass-teens', title: 'Diseño y medios', blurb: 'Gráfica y video para proyectos propios.' }
      ] },
      { num: 'III', h3: 'Niños', sub: 'De 6 a 12 años', courses: [
        { code: 'PRB / NIÑOS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques para empezar', blurb: 'La lógica de programar, sin teclear todavía.' },
        { code: 'PRB / NIÑOS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Construir y automatizar dentro del juego.' },
        { code: 'PRB / NIÑOS / 03', slug: 'ai-literacy-for-kids-course', title: 'La IA explicada a niños', blurb: 'Qué es y por qué a veces se equivoca.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo es una sesión para un adulto que empieza?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Primera hora', l: 'Para quien quiere aprender antes de abrir su negocio.' },
      { time: 'Media mañana', l: 'Para jubilados con la mañana libre.' },
      { time: 'Noche', l: 'Para quien termina de trabajar tarde.' }
    ],
    cells: [
      { h3: 'Un mentor paciente', p: 'El mismo durante todo el curso, que no se salta pasos.' },
      { h3: 'Su pantalla compartida', p: 'El mentor ve lo que usted ve y señala dónde mirar.' },
      { h3: 'Términos explicados', p: 'Cada palabra técnica se aclara la primera vez.' },
      { h3: 'Proyectos suyos', p: 'Los ejercicios salen de su vida o su negocio.' },
      { h3: 'Resumen tras la clase', p: 'Una nota corta con lo hecho y lo que sigue.' },
      { h3: 'Grupo o a solas', p: 'Quince a veinte adultos afines, o solo usted.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros alumnos',
  projectsLede: 'Algunos trabajos publicados por estudiantes; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas de Google de alumnos y familias, copiadas tal cual, en inglés.',

  fees: {
    h2: 'Precios para vecinos de Barranco',
    lede: 'Mostramos el precio en dólares de Estados Unidos y lo cobramos con tarjeta. El cambio a su moneda lo hace su banco, así que la cifra de su estado de cuenta puede moverse un poco según el día.',
    free: ['Una clase de prueba sin costo', 'Consejo sincero sobre por dónde empezar', 'Sin tarjeta ni compromiso'],
    group: ['De quince a veinte alumnos de edad parecida', 'El mismo mentor durante el curso', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Usted y su mentor, nadie más', 'Ritmo y temas a su medida', 'El día y la hora que elija']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación en Barranco: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Adultos y menores reciben la clase en inglés, siempre en tiempo real y a través de internet. Muchos alumnos adultos lo ven como un regalo, porque practican hablar inglés con un fin concreto. El mentor habla con calma, repite y escribe en el chat. El EF EPI 2025 da a Lima un nivel alto de inglés, 555 puntos.' },
      { q: '¿Soy demasiado mayor para aprender a programar?', a: 'No. En Barranco, según la propia municipalidad, se graduaron en computación personas de 40 a 70 años. Nosotros enseñamos programación a adultos de todas las edades, a un ritmo tranquilo y explicando cada término.' },
      { q: '¿Necesito saber computación antes?', a: 'Ayuda manejar el teclado, las carpetas y el correo, que es lo que enseña un curso de ofimática. Si no, el mentor empieza por ahí en las primeras clases.' },
      { q: '¿Cuántas personas viven en Barranco?', a: 'Los Censos Nacionales 2025 del INEI registran 42,986 habitantes. De los 41,076 censados, 10,819 tienen entre 30 y 44 años, el tramo más numeroso.' },
      { q: '¿La Municipalidad de Barranco enseña programación?', a: 'Revisando lo que publica en gob.pe hallamos cursos de computación y ofimática para adultos, una feria tecnológica y una jornada sobre IA para el turismo, pero no un curso de programación. No tenemos ningún vínculo con la municipalidad.' },
      { q: '¿Puedo aprender inteligencia artificial sin programar?', a: 'Puede empezar, pero recomendamos aprender algo de Python en el camino: ayuda a entender qué hace la herramienta y a detectar cuándo se equivoca. Nuestros cursos de IA para adultos son para mayores de 18 años.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. En la India el reloj marca diez horas y media más que en Barranco, y esa distancia no varía.' },
      { q: '¿Cuál es la forma de pago?', a: 'Se cobra con tarjeta y en moneda estadounidense; la conversión corre por cuenta de su banco. Para la clase de prueba no hace falta ningún medio de pago.' },
      { q: '¿Dan algún certificado?', a: 'Cada curso completado se acredita con una constancia de finalización emitida por nosotros. Ojo: no equivale a un título técnico ni universitario.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Para seguir leyendo',
    lede: 'Guías relacionadas, en castellano y en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-barranco-lima', label: 'Vacaciones útiles en Barranco', p: 'Programación creativa para niños en verano.' },
      { href: '/cursos-de-tecnologia-para-adultos-mayores-peru', label: 'Tecnología para adultos mayores', p: 'Aprender a cualquier edad, sin apuro.' },
      { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de IA en inglés', p: 'El temario de IA para adultos.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas las guías del Perú.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método, en inglés.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo.' }
    ]
  },

  start: {
    h2: 'Reserve su clase de prueba desde Barranco',
    lede: 'En la clase de prueba, el mentor conversa con usted en un inglés sencillo, le propone un ejercicio corto y observa cómo lo aborda. Con eso le sugerimos un curso; usted decide sin presión.',
    readFirst: 'Dos páginas en inglés por si quiere adelantarse: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Un recordatorio: nuestros mentores viven en la India y enseñan solo en inglés, siempre en tiempo real. Si nos escribe por WhatsApp, puede hacerlo en castellano.',
    formNote: 'Sin costo ni tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/princess-coders-complete-coding-masterclass', label: 'Programación para mujeres' },
        { href: '/courses/artificial-intelligence-complete-masterclass-college', label: 'Inteligencia artificial' },
        { href: '/courses/godot-game-development-course-for-kids-and-teens', label: 'Videojuegos con Godot' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/cursos-de-tecnologia-para-adultos-mayores-peru', label: 'Adultos mayores' },
        { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'IA en inglés' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'El binario se lee de derecha a izquierda'
  },

  personalityCss: `
.ag-root.ag-prb .ag-hero h1 { max-width: 24ch; letter-spacing: -0.006em; }
.ag-root.ag-prb .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-prb .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-prb .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-prb .ag-steps li { line-height: 1.66; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad Distrital de Barranco notes on gob.pe of 1 Aug 2023, 16 Oct 2023, 6 Dec 2024, 2 Oct 2025 and 24 Sep 2026; INEI Boletín TIC II trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 10 November 2026. The AI uses table, the family steps, the progress steps and the Python example are our own.',
    localProject: 'A mother and a daughter store their free days as one 7-bit integer each; & finds the shared day ("Free together: Wed"), | shows either, and setting bit 6 adds Sunday ("Free together now: Sun"). The trap is reading 0010101 left to right: the rightmost digit is Monday. Lesson family: bit masks with &, | and <<, and binary read right to left.',
    requiredMentions: ['Free together: Wed', 'Free together now: Sun', 'Daughter adds Sun: 1010101', 'Barranquinos de 40 a 70 años', 'Desarrollando Habilidades Tecnológicas', 'Barranco Conecta', 'Biblioteca Municipal Manuel Beingolea', 'El binario se lee de derecha a izquierda', '17,284 de 45 años a más'],
    sources: [
      { claim: 'Barranco population 42,986 (total), 41,076 censada, 1,910 omitida, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: '43 graduates aged 40 to 70 from the computing and office-software course at the Casa de la Mujer (Dec 2024).', url: 'https://www.gob.pe/institucion/munibarranco/noticias/1138400-graduacion-del-curso-de-computacion-y-ofimatica-en-la-casa-de-la-mujer' },
      { claim: 'First cohort of older adults in "Desarrollando Habilidades Tecnológicas": 13 women and 2 men (Aug 2023).', url: 'https://www.gob.pe/institucion/munibarranco/noticias/811598-graduados-tecnologicos' },
      { claim: 'Free Feria Tecnológica: laptop and PC maintenance, antivirus, diagnosis (Oct 2023).', url: 'https://www.gob.pe/institucion/munibarranco/noticias/850583-feria-tecnologica-gratuita' },
      { claim: 'Barranco Conecta: digital agenda and AI for tourism (Sep 2026).', url: 'https://www.gob.pe/institucion/munibarranco/noticias/1450650-barranco-conecta-impulsa-la-innovacion-y-la-inteligencia-artificial-para-el-turismo-local' },
      { claim: 'Biblioteca Municipal Manuel Beingolea, 103 years (Oct 2025).', url: 'https://www.gob.pe/institucion/munibarranco/noticias/1271017-103-aniversario-de-la-biblioteca-municipal' },
      { claim: 'Internet use by age, II trimestre 2026: 25 to 40 95.2%, 41 to 59 86.0%, 60+ 56.7%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru speaking 480; Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any link with the Municipalidad de Barranco or the Casa de la Mujer: none; the page says so and names no officials.',
      'A summed cohort size for the 2023 graduation: not printed; the note gives 13 women and 2 men, and the page repeats that.',
      'Tourism or business advice: refused; we teach the software and data skills only.',
      'AI tools for under-18s that require 18+: refused; teen AI courses use age-appropriate tools.',
      'The 2023 summer vacaciones útiles workshops: left to the vacaciones útiles page, linked once.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

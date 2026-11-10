// SHIP: market | San Borja, a district of book fairs and parents' talks: reading, then writing code, for every age | generators run out: a second pass over a used generator prints nothing
'use strict';
// Clases de programación en San Borja (ag- Spanish district door, Peru cluster row PE140, P6, hubGroup cities).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "City and district pages"). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only.
// Spine (year-round, all ages; differs from vacaciones-utiles-de-programacion-san-borja-lima, which fitted code around a
// primaria summer of sport): San Borja's council publishes a yearly book fair for all ages and free talks for parents.
// The page follows that thread: reading and programming share one habit (following and writing precise sequences), so it
// gives a reader's route into code for children, teens and adults, a short guide for parents who want to help without
// knowing how to program, and a lesson built on a reading list where a Python generator is read twice.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-san-borja/,
// gob.pe notes and searches fetched 2026-11-10; INEI, EF and timezone files copied from the research run of 2026-11-08):
//  - INEI Censos Nacionales 2025, Lima Metropolitana tabulado (inei/sheet2_CUADRO_N_1.tsv): "DISTRITO SAN BORJA 126125 58131
//    67994 121870 56045 65825 4255 2086 2169"; (inei/sheet4_CUADRO_N_3.tsv): "DISTRITO SAN BORJA 121870 4321 6446 7651 18318
//    25652 25992 33490".
//  - Municipalidad de San Borja on gob.pe (institucion/munisanborja; www.munisanborja.gob.pe did not connect on 2026-11-09,
//    per the summer page):
//    n-1166726.txt, 13 May 2025: "La Municipalidad de San Borja organiza la VIII Feria del Libro de San Borja , que se llevará
//      a cabo del 22 de mayo al 8 de junio"; "El ingreso será libre y se ofrecerá una programación diversa dirigida a públicos
//      de todas las edades"; "Gracias al trabajo conjunto con la Cámara Peruana del Libro , más de 70 actividades culturales
//      se desarrollarán a lo largo de los 18 días"; "sesiones de cuentacuentos". Authors and officials not named here.
//    n-825981.txt, 27 Aug 2023: "El Comité de Apoyo Social realizó la "Escuela para Padres""; "El objetivo principal es
//      contribuir en la mejora de las relaciones familiares"; "Es importante resaltar que esta conferencia fue gratuita."
//      Speakers not named.
//    n-1285603.txt, 7 Nov 2025: "Premio a las Buenas Prácticas en Gestión Pública 2025"; "fueron 12 los programas
//      certificados como Buenas Prácticas en Gestión Pública 2025"; "Escuela de Positivismo (Educación)".
//    gob.pe search "computacion" for this institution (gobpe/q-computacion.html): total 0.
//  - INEI, Boletín TIC II trimestre 2026 (inei_tic_iit2026.txt): "el 84,2% de la población de 6 y más años de edad en el país
//    hizo uso de Internet"; "Respecto al mismo trimestre de 2019, el crecimiento fue mayor, con un aumento de 25,0 puntos
//    porcentuales".
//  - EF EPI 2025 (ef_peru.txt): Peru reading 540; Lima 555.
//  - Time (timezone.tsv): Peru UTC-5 all year, India UTC+5:30.
//  - Neighbouring districts, plain text: San Isidro, Surquillo, Santiago de Surco, Ate, San Luis, La Victoria.
// Our own calculations (python3 -I): 33490 / 121870 = 27.48% (60 y más); 6446 + 7651 = 14097 aged 6 to 17, 11.57%;
//   18318 / 121870 = 15.03%; 25652 + 25992 = 51644 aged 30 to 59, 42.38%.
// Our own example (borja_v1.py, borja_v2.py), exact output: v1 "How many: 3" / "Done" (the loop prints nothing);
//   v2 "How many: 3" / "Read: Paco Yunque" / "Read: El caballero Carmelo" / "Read: Cuentos andinos" / "Done". The minimum
//   reading ages in the list are our own suggestion, not a publisher's or a school's.
// Lesson family: generators and iterators are consumed once; len(list(gen)) empties it; materialise with list() or
// recreate the generator.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const LIBROS = "libros = [('Paco Yunque', 9), ('El caballero Carmelo', 10), ('Cuentos andinos', 12), ('Los rios profundos', 15)]";
const FN = [
  'def para_la_edad(lista, edad):',
  '    for titulo, desde in lista:',
  '        if edad >= desde:',
  '            yield titulo'
];

const V1 = [LIBROS, ''].concat(FN, [
  '',
  'sugerencias = para_la_edad(libros, 12)',
  "print('How many:', len(list(sugerencias)))",
  'for titulo in sugerencias:',
  "    print('Read:', titulo)",
  "print('Done')"
]).join('\n');

const OUT1 = ['How many: 3', 'Done'].join('\n');

const V2 = [
  '# libros and para_la_edad as before',
  'sugerencias = list(para_la_edad(libros, 12))',
  "print('How many:', len(sugerencias))",
  'for titulo in sugerencias:',
  "    print('Read:', titulo)",
  "print('Done')"
].join('\n');

const OUT2 = ['How many: 3', 'Read: Paco Yunque', 'Read: El caballero Carmelo', 'Read: Cuentos andinos', 'Done'].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'cities', label: 'Programación en San Borja' },
  slug: 'clases-de-programacion-san-borja',
  code: 'psb',
  accent: '#8B3E09',
  accentRationale: 'Clases de programación en San Borja: a leather-binding tan #8B3E09, the colour of old book spines at the district\'s book fair, more orange than the San Borja summer page; contrast checked by the build on the paper #FBF8F2 and its tints (alloc.tsv)',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación en San Borja',
  title: 'Clases de programación en San Borja, en vivo y en inglés',
  description: 'Clases de programación en San Borja para niños, adolescentes, universitarios y adultos, en vivo, en línea y en inglés, todo el año: de leer bien a escribir código.',
  ogDescription: 'San Borja organiza ferias del libro y charlas para padres. Programar es leer y escribir instrucciones exactas. Clases en vivo y en inglés para cada edad.',
  twitterDescription: 'Programación en vivo y en inglés para familias de San Borja: niños, adolescentes y adultos, todo el año.',
  pageName: 'Clases de programación en San Borja',
  webPageDescription: 'Guía para familias y vecinos de San Borja que buscan clases de programación durante el año, para niños, adolescentes, universitarios y adultos, dictadas en vivo, en línea y en inglés: qué publica la municipalidad sobre su feria del libro y su escuela para padres, cuántas personas de cada edad viven en el distrito según los Censos Nacionales 2025 del INEI, cómo ayudar a un hijo que programa sin saber programar, y una clase de ejemplo en Python, escrita por nosotros, con una lista de lecturas que se vacía al leerla dos veces.',
  courseDescription: 'Clases en vivo y en línea de programación, bases de datos e inteligencia artificial para vecinos de San Borja de 6 años en adelante, dictadas exclusivamente en inglés: razonamiento para los más pequeños, Python, SQL, desarrollo web y análisis de datos, en grupos de quince a veinte o en sesiones individuales, todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación en San Borja',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#leer', label: 'Leer y programar' },
    { href: '#sanborjinos', label: 'Censo 2025' },
    { href: '#padres', label: 'Para padres' },
    { href: '#lista', label: 'Ejemplo' },
    { href: '#reloj', label: 'Hora' }
  ],
  eyebrow: 'San Borja &middot; Programación para lectores de todas las edades &middot; Todo el año',
  h1: 'Clases de programación en San Borja, para quien ya sabe leer bien',
  lede: 'San Borja es el distrito de la feria del libro de mayo y de las charlas gratuitas para padres. Quien lee con atención ya trae buena parte del oficio de programar: respetar un orden exacto, notar cuando algo no cuadra, volver atrás. Esta página propone el paso siguiente, escribir instrucciones, para niños, adolescentes y adultos, con clases que se toman desde casa, en tiempo real y en inglés. También incluye una guía corta para madres y padres que quieren acompañar sin saber programar, y una lección real con una lista de libros.',
  secondaryCta: { href: '#leer', label: 'De la lectura al código' },
  wa: 'Hola Modern Age Coders, vivimos en San Borja y nos gustaría probar sus clases de programación en inglés. ¿Cómo reservamos?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en distintos países &middot; siempre en inglés',
  spec: [
    ['Distrito', 'San Borja, Lima Metropolitana'],
    ['Edades', 'Desde los 6 años, sin tope'],
    ['Modalidad', 'En vivo por videollamada, desde casa'],
    ['Idioma', 'Inglés claro, al ritmo del alumno'],
    ['Formato', 'Grupo de quince a veinte o individual'],
    ['Para empezar', 'Clase de prueba gratuita']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, hay clases de programación para vecinos de San Borja de todas las edades: Modern Age Coders las dicta en vivo, en línea y en inglés, durante todo el año. Los niños de 6 a 9 años empiezan con razonamiento y bloques, desde los 9 escriben Python, los adolescentes aprenden bases de datos o desarrollo web y los adultos, Python, SQL o análisis de datos. Quien enseña es un mentor que vive en la India, pronuncia con calma y adapta su ritmo. Usted escoge grupo o clase individual, y la hora.',

  picks: {
    eyebrow: 'Para empezar',
    h2: 'Tres cursos para tres tipos de lector',
    lede: 'Uno para el niño que todavía está aprendiendo a leer con fluidez, uno para el adolescente que ordena información y uno para el adulto que quiere poner orden en sus propios datos.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'PSB / 01', title: 'Razonamiento para pequeños', alt: 'Imagen del curso de razonamiento para niños de 6 a 9 años', note: 'De 6 a 9 años. Secuencias, patrones y acertijos, la base para programar después; muchos se resuelven con lápiz, papel y conversación.' },
      { course: 'mysql-mastery-for-teens', code: 'PSB / 02', title: 'Bases de datos con SQL', alt: 'Imagen del curso de MySQL para adolescentes', note: 'Para secundaria. Cómo guarda y busca información una app real: tablas, consultas y relaciones, con proyectos como un catálogo de libros.' },
      { course: 'mysql-database-complete-masterclass-college', code: 'PSB / 03', title: 'MySQL completo', alt: 'Imagen del curso completo de MySQL', note: 'Para universitarios y adultos. Diseño de bases de datos, consultas y administración, útil en casi cualquier trabajo con información.' }
    ]
  },

  sections: [
    {
      id: 'leer',
      eyebrow: 'De la lectura al código',
      h2: '¿Qué tiene que ver leer bien con aprender a programar?',
      lede: 'Mucho. Un programa es un texto que una máquina sigue al pie de la letra, sin adivinar lo que uno quiso decir. Quien lee con atención detecta antes un paso que falta o una palabra fuera de lugar.',
      body: [
        { kind: 'p', html: 'La Municipalidad de San Borja organizó la VIII Feria del Libro del distrito del 22 de mayo al 8 de junio de 2025, con ingreso libre, "una programación diversa dirigida a públicos de todas las edades" y más de 70 actividades culturales en 18 días junto con la Cámara Peruana del Libro, según su nota del 13 de mayo de 2025. Hubo presentaciones, teatro y cuentacuentos. Es una buena pista de lo que valoran las familias del distrito: la lectura como algo que se comparte entre generaciones.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Lo que entrena la lectura y cómo reaparece al programar (comparación nuestra)', head: ['Hábito de lector', 'Su equivalente al programar', 'Dónde se nota en clase'], rows: [
          ['Seguir el orden de una historia', 'Seguir el orden de las instrucciones', 'El alumno predice qué hará el programa antes de ejecutarlo'],
          ['Notar una palabra mal escrita', 'Notar un nombre de variable distinto', 'Encuentra el error sin que el mentor se lo señale'],
          ['Releer un párrafo difícil', 'Releer el código línea por línea', 'Depura con calma en lugar de borrar todo'],
          ['Resumir con palabras propias', 'Explicar qué hace una función', 'Lo cuenta en inglés en dos o tres frases'],
          ['Ordenar una biblioteca', 'Ordenar datos en tablas', 'Diseña una pequeña base de datos de libros']
        ] },
        { kind: 'source', html: 'Primera frase del apartado: Municipalidad Distrital de San Borja, nota "Todo lo que debes saber sobre la VIII Feria del Libro de San Borja", gob.pe, 13 de mayo de 2025, consultada el 10 de noviembre de 2026. La tabla es nuestra. Modern Age Coders no tiene vínculo con la municipalidad ni con la Cámara Peruana del Libro.' },
        { kind: 'p', mt: true, html: 'La diferencia entre leer y programar es la dirección: al leer, uno sigue las instrucciones de otro; al programar, las escribe para que otro (una máquina) las siga. Por eso un buen lector suele avanzar rápido en sus primeras semanas, y por eso también nuestras clases piden explicar en voz alta lo que uno escribió. En el ejemplo de más abajo usamos justamente una lista de lecturas.' }
      ]
    },
    {
      id: 'sanborjinos',
      eyebrow: 'El distrito',
      h2: '¿Cuántos niños, jóvenes y adultos viven en San Borja?',
      lede: 'El INEI registra 126,125 habitantes en San Borja en sus Censos Nacionales 2025. Más de un cuarto de los censados tiene 60 años o más, y los menores de 18 son pocos en comparación.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'San Borja según los Censos Nacionales 2025: población censada por grupo de edad', head: ['Tramo de edad', 'Sanborjinos censados', 'Proporción del distrito'], rows: [
          ['0 a 5 años', '4,321', '3.5 %'],
          ['6 a 11 años', '6,446', '5.3 %'],
          ['12 a 17 años', '7,651', '6.3 %'],
          ['18 a 29 años', '18,318', '15.0 %'],
          ['30 a 44 años', '25,652', '21.0 %'],
          ['45 a 59 años', '25,992', '21.3 %'],
          ['60 años a más', '33,490', '27.5 %'],
          ['Todos los censados', '121,870', '100 %']
        ] },
        { kind: 'source', html: 'Cifras del INEI, Censos Nacionales 2025, tabulados de Lima Metropolitana: el Cuadro N.° 3 da las edades de la población censada; el Cuadro N.° 1 da el total de 126,125, que incluye 4,255 personas omitidas. Las proporciones las calculamos nosotros con un decimal.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Escolares: 14,097', p: 'Sumando los tramos de 6 a 11 y de 12 a 17 años (cálculo nuestro). Son el 11.6 % de los censados. Para ellos proponemos un curso que acompañe todo el año escolar, sin cortes entre bimestres.' },
          { h3: 'Adultos activos: 51,644', p: 'Las personas de 30 a 59 años, el 42.4 % del distrito. Muchos son madres y padres de esos escolares, y cada vez más se inscriben ellos mismos.' },
          { h3: 'Mayores: 33,490', p: 'El grupo más grande de San Borja. Para ellos el curso va más despacio y parte de lo que ya usan: el celular, el correo, las apps del banco.' }
        ] },
        { kind: 'p', mt: true, html: 'San Borja limita con San Isidro, Surquillo, Santiago de Surco, Ate, San Luis y La Victoria. Las familias de esos distritos que nos escriben reciben exactamente la misma clase, porque llega por internet.' }
      ]
    },
    {
      id: 'padres',
      eyebrow: 'Para madres y padres',
      h2: '¿Cómo ayudar a un hijo que programa si uno no sabe programar?',
      lede: 'Igual que se ayuda a un hijo que lee: preguntando por la historia, no corrigiendo la ortografía. No necesita saber Python para acompañar; necesita curiosidad y un poco de rutina.',
      body: [
        { kind: 'p', html: 'La municipalidad ha organizado charlas gratuitas sobre crianza: en agosto de 2023, su Comité de Apoyo Social realizó una "Escuela para Padres" con el objetivo de "contribuir en la mejora de las relaciones familiares". Y en 2025, según su nota del 7 de noviembre, doce de sus programas fueron certificados como Buenas Prácticas en Gestión Pública, entre ellos uno educativo llamado Escuela de Positivismo. En San Borja hay costumbre de pensar en cómo acompañar a los hijos; estas son nuestras sugerencias para el caso de la programación.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Pregunte qué construyó, no qué aprendió.</strong> Pedirle que cuente qué hace su programa abre más conversación que preguntarle qué vio en clase. Si además se lo muestra en pantalla, aún más.',
          '<strong>Pida que le explique un error.</strong> Los errores son la parte más valiosa de una clase. Si su hijo puede contar qué falló y cómo lo arregló, está aprendiendo de verdad.',
          '<strong>No arregle el código por él.</strong> Aunque usted sepa, aguante la tentación. El mentor tampoco lo hace: guía con preguntas.',
          '<strong>Cuide el lugar y la hora.</strong> Misma mesa, computadora cargada, audífonos y cinco minutos antes. La rutina importa más que la duración.',
          '<strong>Lea el resumen del mentor.</strong> Después de las clases enviamos una nota breve; léala con su hijo y elijan juntos algo para practicar.',
          '<strong>Hable de la IA con reglas claras.</strong> En casa, como en clase: puede pedir ideas, pero tiene que entender y poder explicar cada línea que usa.'
        ] },
        { kind: 'p', mt: true, html: 'Si quiere profundizar en por qué insistimos en pensar antes que copiar, tenemos una guía sobre <a class="ag-inline-link" href="/aprender-a-pensar-no-copiar-programacion">aprender a pensar y no a copiar</a>. Y si su hijo además necesita soltura con el idioma, otra sobre <a class="ag-inline-link" href="/clases-de-ingles-y-programacion-ninos">inglés y programación para niños</a>.' }
      ]
    },
    {
      id: 'rutas',
      eyebrow: 'Por edad',
      h2: '¿Qué curso conviene en cada edad?',
      lede: 'La edad orienta y la clase de prueba confirma. Esta es la ruta que solemos proponer a las familias y vecinos de San Borja.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta por edad para San Borja (propuesta nuestra)', head: ['Edad', 'Empieza con', 'Sigue con', 'Un proyecto típico'], rows: [
          ['6 a 9 años', 'Razonamiento y bloques', 'Scratch con historias', 'Un cuento animado con tres escenas'],
          ['9 a 12 años', 'Python con dibujos', 'Listas y pequeños juegos', 'Un juego de preguntas sobre su libro favorito'],
          ['13 a 17 años', 'Python o desarrollo web', 'SQL y bases de datos', 'Un catálogo de libros con buscador'],
          ['Universitarios', 'Python o Java', 'Estructuras de datos y SQL', 'Una API pequeña con pruebas'],
          ['Adultos', 'Python desde cero', 'Datos y automatización', 'Un registro de gastos que se resume solo'],
          ['Mayores de 60', 'Python sin apuro', 'Proyectos personales', 'Un organizador de recetas o de fotos']
        ] },
        { kind: 'source', html: 'Ruta elaborada por Modern Age Coders. Las edades son referenciales; el mentor ajusta según lo que ve en la primera clase.' },
        { kind: 'p', mt: true, html: 'Si lo que busca es algo para el verano, la página de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-borja-lima">vacaciones útiles de programación en San Borja</a> trata ese periodo, con talleres deportivos y proyectos por edad. Aquí hablamos de marzo a diciembre, cuando la clase de programación tiene que convivir con el colegio, la universidad o el trabajo.' }
      ]
    },
    {
      id: 'lista',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Por qué un programa puede "olvidar" una lista que acaba de leer?',
      lede: 'Porque algunos objetos de Python se leen una sola vez. El ejercicio es nuestro: una lista de lecturas peruanas, cada una con la edad desde la que la sugerimos (sugerencia nuestra, no de una editorial ni de un colegio), y una función que elige las adecuadas para un lector de 12 años. Lo usamos con adolescentes y adultos.',
      body: [
        { kind: 'code', label: 'Primer intento: contar y después mostrar', lang: 'Python', code: V1, note: 'La palabra <code>yield</code> convierte la función en un generador: no arma toda la lista de una vez, sino que entrega un título cada vez que se le pide.' },
        { kind: 'code', label: 'Lo que imprime el primer intento', lang: 'Salida', code: OUT1, note: 'Salida exacta con python3. Dice que hay 3 lecturas, y después el bucle no muestra ninguna. No hay error: simplemente no imprime nada.' },
        { kind: 'code', label: 'Segundo intento: guardar en una lista', lang: 'Python', code: V2, note: '<code>list()</code> recorre el generador una vez y guarda los títulos. Una lista sí se puede recorrer cuantas veces se quiera.' },
        { kind: 'code', label: 'Lo que imprime el segundo intento', lang: 'Salida', code: OUT2, note: 'Salida exacta con python3. Ahora el conteo y el recorrido coinciden.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Leer como un lector.</strong> El mentor pide seguir el primer programa línea por línea, en voz alta, en inglés: "count the suggestions, then print each one". Casi todos esperan ver tres títulos.',
          '<strong>Encontrar dónde se gastó.</strong> <code>len(list(sugerencias))</code> ya recorrió el generador entero para contar. Cuando llega el <code>for</code>, no queda nada por entregar. Es como un libro que, una vez leído, aparece con las páginas en blanco.',
          '<strong>Notar que no hubo error.</strong> Python no se queja. Este es el tipo de falla más peligrosa: el programa termina con "Done" y uno cree que todo salió bien.',
          '<strong>Elegir la solución.</strong> Guardar con <code>list()</code> si hay que leer varias veces, o volver a llamar a <code>para_la_edad()</code> si se quiere un generador nuevo. Ambas son correctas; el alumno explica cuándo conviene cada una.',
          '<strong>Cambiar la edad.</strong> Con 15 años aparece también Los ríos profundos; con 8, la lista sale vacía. ¿Es un error o es correcto? El alumno decide y lo justifica.'
        ] },
        { kind: 'p', mt: true, html: 'Lo valioso no es la palabra <code>yield</code>. Es comprobar que lo que el programa dice (hay tres) coincide con lo que hace (muestra cero), y no darse por satisfecho con un "Done" al final. Esa costumbre de cruzar dos datos que deberían coincidir sirve en cualquier trabajo, y no la da ninguna respuesta copiada.' }
      ]
    },
    {
      id: 'en-casa',
      eyebrow: 'Sin traslados',
      h2: '¿Una clase en línea es una opción seria desde San Borja?',
      lede: 'Lo es, si cumple dos condiciones: que sea en vivo, con alguien que corrige en el momento, y que el alumno programe en su propia computadora. Las dos se cumplen en cada clase nuestra.',
      body: [
        { kind: 'two',
          leftH3: 'El tiempo que no se pierde',
          left: [
            'San Borja está en el centro de Lima, pero eso no hace corto ningún traslado en la tarde. Llevar a un hijo a una academia y esperarlo convierte una hora de clase en dos o tres. No damos cifras porque cada familia conoce su propia ruta.',
            'En línea, ese tiempo vuelve a la casa: para la tarea, para la lectura, para la cena.'
          ],
          rightH3: 'Un país que ya está conectado',
          right: [
            'Según el INEI, en el segundo trimestre de 2026 el 84,2 % de la población peruana de 6 años a más usó internet, 25 puntos porcentuales más que en el mismo trimestre de 2019.',
            'La conexión dejó de ser la barrera. Lo que marca la diferencia ahora es para qué se usa: mirar lo que otros hicieron, o hacer algo propio.'
          ] }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horario',
      h2: '¿Cómo encaja la hora de San Borja con la de la India?',
      lede: 'Con una cuenta fija: la India va diez horas y media por delante, todo el año. Usted elige su hora en el reloj de Perú y el sistema hace el resto.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplos de conversión entre San Borja y la India (no son horas fijas de clase)', head: ['Si en San Borja son', 'En la India son', 'Pensado para'], rows: [
          ['7:30 a. m.', 'las 6:00 p. m. de esa misma fecha', 'Adultos antes de su jornada'],
          ['10:00 a. m.', 'las 8:30 p. m. de esa misma fecha', 'Mayores y universitarios'],
          ['2:30 p. m.', 'la 1:00 a. m. de la fecha siguiente', 'Escolares del turno mañana'],
          ['6:00 p. m.', 'las 4:30 a. m. de la fecha siguiente', 'Familias después del trabajo']
        ] },
        { kind: 'source', html: 'Base de datos de zonas horarias tzdata: America/Lima en UTC-5 sin horario de verano y Asia/Kolkata en UTC+5:30; coincide con la hora oficial del INACAL. La última columna es nuestra.' },
        { kind: 'p', mt: true, html: 'Un apunte sobre el idioma, porque nunca cambia: enseñamos únicamente en inglés. En el EF EPI 2025 la lectura es la habilidad peruana con el puntaje más alto (540), y Lima suma 555 en el índice general, ya en el nivel alto. Para un buen lector, el inglés técnico de la programación se aprende rápido; lo que más se practica en clase es hablarlo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se nota que alguien aprende a programar?',
    lede: 'Con cinco capítulos propios, del lector atento al autor de su propio programa.',
    table: { caption: 'Cinco capítulos de aprendizaje (nuestros)', head: ['Capítulo', 'Momento habitual', 'Lo que el alumno logra'], rows: [
      ['1. Lector atento', 'Primeras semanas', 'seguir un programa ajeno y anticipar qué imprimirá'],
      ['2. Corrector', 'Primer y segundo mes', 'encontrar y explicar un error en su propio código'],
      ['3. Ordenador de datos', 'Tercer mes', 'guardar información en listas, tablas o una base de datos'],
      ['4. Verificador', 'Cuarto a sexto mes', 'comprobar que lo que el programa dice coincide con lo que hace'],
      ['5. Autor', 'Desde el sexto mes', 'escribir y presentar en inglés un proyecto propio']
    ] },
    left: { h3: 'Para las familias', ps: [
      'No mida por horas frente a la pantalla, sino por capítulos. Un niño en el capítulo 2 que explica sus errores va muy bien.',
      'De vez en cuando, pregúntele en qué capítulo va. A los chicos les gusta poder responder.'
    ] },
    right: { h3: 'Para los adultos', ps: [
      'Si algo sale "bien" demasiado rápido, revíselo dos veces. Como en el ejemplo, el silencio de Python no es garantía.',
      'Escriba al lado de cada programa una frase sobre qué hace. Es su propio índice.'
    ] }
  },

  catalogue: {
    eyebrow: 'Catálogo',
    h2: 'Nueve cursos más para San Borja',
    lede: 'Clases en vivo, en inglés y con el mismo mentor todo el curso; en grupo o a solas.',
    bands: [
      { num: 'I', h3: 'Niños', sub: 'De 6 a 12 años', courses: [
        { code: 'PSB / NIÑOS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch para contar historias', blurb: 'Personajes, escenas y diálogos con bloques.' },
        { code: 'PSB / NIÑOS / 02', slug: 'python-ai-kids-masterclass', title: 'Primeros pasos en Python', blurb: 'Programas escritos desde los 9 años.' },
        { code: 'PSB / NIÑOS / 03', slug: 'microsoft-office-kids-mastery', title: 'Herramientas de oficina para niños', blurb: 'Documentos, presentaciones y hojas de cálculo.' }
      ] },
      { num: 'II', h3: 'Adolescentes', sub: 'De 13 a 18 años', courses: [
        { code: 'PSB / TEENS / 01', slug: 'python-complete-masterclass-teens', title: 'Python para secundaria', blurb: 'De cero a proyectos con datos.' },
        { code: 'PSB / TEENS / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git y GitHub', blurb: 'Guardar versiones y trabajar en equipo como en la industria.' },
        { code: 'PSB / TEENS / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding con criterio', blurb: 'Crear con ayuda de la IA, revisando cada cambio, de 13 a 17.' }
      ] },
      { num: 'III', h3: 'Adultos', sub: 'De 18 años en adelante', courses: [
        { code: 'PSB / ADULTOS / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python de cero a avanzado', blurb: 'Para empezar o para ordenar lo aprendido.' },
        { code: 'PSB / ADULTOS / 02', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos', blurb: 'Tablas reales, resúmenes y gráficos.' },
        { code: 'PSB / ADULTOS / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML y CSS desde cero', blurb: 'Su propia página web, publicada.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo es estudiar con un mentor en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del trabajo', l: 'Una sesión temprana para adultos.' },
      { time: 'Después del colegio', l: 'Cuando el escolar ya comió y descansó.' },
      { time: 'Al caer la tarde', l: 'Para padres que quieren aprender también.' }
    ],
    cells: [
      { h3: 'Un mentor de cabecera', p: 'El mismo de principio a fin del curso.' },
      { h3: 'Código compartido', p: 'El mentor ve en vivo lo que el alumno escribe.' },
      { h3: 'Explicar en voz alta', p: 'Cada solución se cuenta en inglés, aunque sea breve.' },
      { h3: 'Algo terminado', p: 'Cada etapa cierra con un programa que funciona.' },
      { h3: 'Nota para la familia', p: 'Un resumen tras las clases, con lo hecho y lo que sigue.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte alumnos afines, o uno solo.' }
    ]
  },

  projectsH2: 'Algunos trabajos de nuestros alumnos',
  projectsLede: 'Proyectos de estudiantes que empezaron desde cero. Puede ver más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas de Google escritas por familias y alumnos, tal cual, en inglés.',

  fees: {
    h2: 'Precios para San Borja',
    lede: 'La tarifa se muestra en dólares estadounidenses y se paga con tarjeta. Quien convierte el monto a su moneda es su banco, de modo que el cargo final depende del tipo de cambio de ese día.',
    free: ['Una clase de prueba sin pagar nada', 'Recomendación de curso y formato', 'Ni tarjeta ni compromiso'],
    group: ['Quince a veinte alumnos de edad cercana', 'Un mentor fijo todo el curso', 'Dos clases en vivo cada semana', 'Pago mensual, sin ataduras'],
    one: ['El alumno y su mentor, a solas', 'Plan hecho a su medida', 'Horario elegido por usted']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases de programación en San Borja: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las damos en inglés, en vivo y por internet, a niños y a adultos. Muchas familias lo eligen por eso: se aprende a programar y se habla inglés en la misma hora. El mentor va despacio y repite cuando hace falta. Según el EF EPI 2025, Lima está en el nivel alto de inglés, con 555 puntos.' },
      { q: '¿Cuántas personas viven en San Borja?', a: 'Los Censos Nacionales 2025 del INEI registran 126,125 habitantes. Entre los 121,870 censados, 33,490 tienen 60 años o más y 14,097 tienen entre 6 y 17 años, según nuestra suma de los grupos del Cuadro N.° 3.' },
      { q: '¿Hay cursos de programación en la Municipalidad de San Borja?', a: 'En las notas que publica en gob.pe no encontramos ninguno; la búsqueda de "computación" en su página no dio resultados. Sí organiza una feria del libro anual y charlas para padres. No tenemos relación con la municipalidad.' },
      { q: '¿Mi hijo necesita leer bien para empezar?', a: 'No del todo. De 6 a 9 años empezamos con razonamiento y bloques, con muy poco texto. Desde los 9, leer con soltura ayuda mucho, porque el código es un texto que hay que seguir con precisión.' },
      { q: '¿Puedo ayudar a mi hijo si no sé programar?', a: 'Sí: pregúntele qué construyó, pídale que le explique un error y lea con él el resumen que enviamos tras las clases. No arregle el código por él; acompañe.' },
      { q: '¿Hay clases para adultos y para mayores de 60?', a: 'Sí. Python, SQL, análisis de datos y desarrollo web para adultos, y cursos con un ritmo más tranquilo para mayores. Cada persona va en un curso acorde a su edad.' },
      { q: '¿A qué hora puedo tener clase?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India está diez horas y media por delante de Perú, sin variaciones en el año.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares de Estados Unidos. Su banco aplica la conversión. La clase de prueba es gratuita y no pide tarjeta.' },
      { q: '¿Qué certificado reciben los alumnos?', a: 'Un certificado de finalización de Modern Age Coders al acabar cada curso. No es un documento del Ministerio de Educación y no cuenta como nota del colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras guías para seguir',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/vacaciones-utiles-de-programacion-san-borja-lima', label: 'Vacaciones útiles en San Borja', p: 'Deporte en la mañana, código en la tarde.' },
      { href: '/aprender-a-pensar-no-copiar-programacion', label: 'Aprender a pensar, no a copiar', p: 'Por qué entender pesa más que pegar.' },
      { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación para niños', p: 'Dos aprendizajes en una sola clase.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El índice completo de guías del Perú.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestro método, contado en inglés.' },
      { href: '/courses', label: 'All courses', p: 'Todos los programas, por edad.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase desde San Borja',
    lede: 'En la clase de prueba el mentor conversa con el alumno en inglés sencillo, le propone un desafío pequeño y mira cómo lo encara. Luego le recomendamos curso y formato; usted decide.',
    readFirst: 'Si desea leer antes, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Nuestras clases son en vivo y por internet, con mentores en la India y solo en inglés. Por WhatsApp atendemos también en castellano.',
    formNote: 'Sin costo y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Razonamiento, 6 a 9 años' },
        { href: '/courses/mysql-mastery-for-teens', label: 'SQL para adolescentes' },
        { href: '/courses/mysql-database-complete-masterclass-college', label: 'MySQL para adultos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/aprender-a-pensar-no-copiar-programacion', label: 'Pensar, no copiar' },
        { href: '/clases-de-ingles-y-programacion-ninos', label: 'Inglés y programación' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Un generador se lee una sola vez'
  },

  personalityCss: `
.ag-root.ag-psb .ag-hero h1 { max-width: 22ch; letter-spacing: -0.01em; }
.ag-root.ag-psb .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-psb .ag-table caption { font-style: italic; }
.ag-root.ag-psb .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-psb .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025 (Lima Metropolitana tabulados, Cuadros N.° 1 and N.° 3); Municipalidad de San Borja notes on gob.pe of 13 May 2025, 27 Aug 2023 and 7 Nov 2025; INEI Boletín TIC II trimestre 2026; EF EPI 2025; tzdata and INACAL. Read 10 November 2026. The reading-to-code table, the age route, the parents\' list, the progress chapters and the Python example (with its suggested reading ages) are our own.',
    localProject: 'A reading list of Peruvian books with our own suggested starting ages, filtered for a 12-year-old by a Python generator: counting with len(list(...)) consumes it, so the loop prints nothing ("How many: 3" then "Done"); storing the result with list() prints the three titles. Lesson family: generators and iterators are consumed once; check that what a program says matches what it does.',
    requiredMentions: ['How many: 3', 'Read: El caballero Carmelo', 'VIII Feria del Libro', 'Escuela para Padres', 'Escuela de Positivismo', 'Escolares: 14,097', '25 puntos porcentuales más que en el mismo trimestre de 2019', 'Un generador se lee una sola vez', 'con las páginas en blanco'],
    sources: [
      { claim: 'San Borja population 126,125 (total), 121,870 censada, 4,255 omitida, and censada by age group.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'VIII Feria del Libro de San Borja, 22 May to 8 June 2025, free entry, all ages, more than 70 activities over 18 days with the Cámara Peruana del Libro.', url: 'https://www.gob.pe/institucion/munisanborja/noticias/1166726-todo-lo-que-debes-saber-sobre-la-viii-feria-del-libro-de-san-borja' },
      { claim: 'Escuela para Padres, free talk by the Comité de Apoyo Social (August 2023).', url: 'https://www.gob.pe/institucion/munisanborja/noticias/825981-conferencia-escuela-para-padres' },
      { claim: 'Twelve programmes certified as Buenas Prácticas en Gestión Pública 2025, including Escuela de Positivismo (Educación).', url: 'https://www.gob.pe/institucion/munisanborja/noticias/1285603-san-borja-destaco-en-premio-a-las-buenas-practicas-en-gestion-publica-2025' },
      { claim: 'Internet use 84.2% of people aged 6 and over, up 25.0 points on II trimestre 2019.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru reading 540; Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'Any link with the Municipalidad de San Borja, the Cámara Peruana del Libro or the Biblioteca Nacional: none; the page names no officials, speakers or authors from the notes.',
      'The summer 2025 sports workshops and ECO KIDS 2026: left to the vacaciones útiles page, linked once.',
      'Reading ages as an official or publisher recommendation: refused; the page labels them as our own suggestion.',
      'Commute minutes: no primary source, so no figure.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: market (es subject door) | programación en Minecraft para niños: MakeCode, sus unidades y la matemática del colegio | nested loops over x, y, z: counting the blocks of a hollow cube, checked against n³ − (n − 2)³
'use strict';
// Programación en Minecraft para niños (ag- Spanish-language door, Peru cluster row PE120, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Search (KEYWORDS.md section 2): "programación minecraft para niños", "minecraft programación por bloques", "curso programación
// minecraft niños", "minecraft education programación", "minecraft education crear cuenta / precio" (no prices on this page).
// Spine: the game, Minecraft Education and MakeCode are three different things; the MakeCode CS Intro units as a syllabus map;
// which grade suits blocks and which suits Python; one original lesson that is also school maths (volume of a hollow cube);
// Minecraft and the CNEB maths area; what a Peruvian home needs; times.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programacion-minecraft-para-ninos-peru/, read
// 2026-11-09):
//  MakeCode for Minecraft, About (minecraft.makecode.com/about): "MakeCode for Minecraft is a code editor to build fun mods and
//    programs for Minecraft."; its menu lists the CS Intro units "Events", "Coordinates", "Variables", "Iteration",
//    "Conditionals", "Functions", "Arrays", "Artificial Intelligence"; reference sections "Blocks", "Python", "JavaScript";
//    "Agent"; lessons "Area", "Ratio", "Cubic units".
//  Minecraft Education, What is (education.minecraft.net/en-us/discover/what-is-minecraft): "Available for Windows, Mac,
//    Chromebook, iPad, Android, and iOS"; "Browse over 600 standards-aligned lessons"; "Minecraft Education is licensed via yearly
//    subscriptions."; "Minecraft Education is available to homeschool organizations."; "Try a demo of Minecraft Education, do an
//    Hour of Code".
//  Minecraft Education, Get started: "Millions of educators and students use Minecraft Education in 115 countries".
//  Minecraft Education, Licensing: "Anyone with a Microsoft 365 account can purchase and use Minecraft Education."; "Enhanced
//    multi-player lets up to 30 students collaborate". (Its prices are not printed: brief rule 5.)
//  Minecraft EULA (minecraft.net/en-us/terms/r1): virtual currency "may be purchased from us using actual monetary instruments if
//    you have reached the age of "majority" where you live".
//  MINEDU Edades normativas (FACTS 14, 15); CNEB (FACTS 55, 57): four maths competencies, "Matemática 5 5 4 4 4 4"; ENLA 2025
//    (FACTS 59): 4.° primaria tested in Lectura y Matemática.
//  INEI TIC II Trimestre 2026 (MARKET 1.4): 36.4% of homes with a computer; 68.2% of children 6 to 11 used the internet.
//  EF EPI 2025 (MARKET 1.3): Lima 555 high. Time: tzdata (facts-geo/timezone.tsv).
// Our own example, run with python3 -I (cubo.py in the src-pages folder):
//    3 solid 27 hollow 26 formula 26
//    5 solid 125 hollow 98 formula 98
//    10 solid 1000 hollow 488 formula 488
// Lesson family: three nested loops over x, y and z, a boundary test with "in (0, size - 1)", and a count checked against a
// formula (n³ minus the inner (n − 2)³).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def count_blocks(size, hollow):',
  '    blocks = 0',
  '    for x in range(size):',
  '        for y in range(size):',
  '            for z in range(size):',
  '                on_face = x in (0, size - 1) or y in (0, size - 1) or z in (0, size - 1)',
  '                if on_face or not hollow:',
  '                    blocks = blocks + 1',
  '    return blocks',
  '',
  'for size in [3, 5, 10]:',
  '    solid = count_blocks(size, False)',
  '    shell = count_blocks(size, True)',
  "    print(size, 'solid', solid, 'hollow', shell, 'formula', size ** 3 - (size - 2) ** 3)"
].join('\n');

const OUT = [
  '3 solid 27 hollow 26 formula 26',
  '5 solid 125 hollow 98 formula 98',
  '10 solid 1000 hollow 488 formula 488'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Programación en Minecraft para niños' },
  slug: 'programacion-minecraft-para-ninos-peru',
  code: 'pmn',
  accent: '#004A32',
  accentRationale: 'Programación en Minecraft para niños: a dark grass-block green #004A32, darker and cooler than the Roblox page green so the two game doors never look alike; contrast 8.41 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programación en Minecraft para niños',
  title: 'Programación en Minecraft para niños en Perú, en inglés',
  description: 'Programación en Minecraft para niños de 7 a 12 años en Perú: bloques de MakeCode, después Python, y matemática del colegio. Clases en vivo y en inglés.',
  ogDescription: 'Minecraft, Minecraft Education y MakeCode no son lo mismo. Qué unidades enseña MakeCode, qué edad conviene y un cubo hueco que se cuenta con tres bucles.',
  twitterDescription: 'Programación en Minecraft para niños peruanos de 7 a 12 años, en vivo y en inglés, en grupo o uno a uno, a la hora que su familia elija.',
  pageName: 'Programación en Minecraft para niños en Perú',
  webPageDescription: 'Guía para madres y padres en Perú sobre la programación en Minecraft para niños: en qué se diferencian el juego, Minecraft Education y MakeCode, qué unidades de programación propone MakeCode, cuándo pasar de bloques a Python, cómo se conecta con la matemática del CNEB, qué se necesita en casa y una lección propia que cuenta los bloques de un cubo hueco.',
  courseDescription: 'Curso en vivo y en línea de programación en Minecraft para niños de 7 a 12 años en todo el Perú, dictado solo en inglés por mentores desde la India: comandos, el agente robot, bucles, condiciones y funciones con bloques de MakeCode y luego código escrito, en grupo o en clases individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Minecraft para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#tres-cosas', label: 'Juego o MakeCode' },
    { href: '#unidades', label: 'Temas' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#matematica', label: 'Matemática' },
    { href: '#casa', label: 'En casa' }
  ],
  eyebrow: 'Perú &middot; Minecraft y MakeCode &middot; Niños de 7 a 12 años',
  h1: 'Programación en Minecraft para niños, en vivo y en inglés',
  lede: 'Hay niños que pasan la tarde entera levantando castillos bloque por bloque. Programar en Minecraft es enseñarle a la computadora a levantarlos por ellos: diez filas, veinte pisos, una torre hueca por dentro, todo con unas pocas instrucciones. Y para escribir esas instrucciones hay que pensar en filas, columnas y alturas, que es matemática disfrazada de juego.',
  secondaryCta: { href: '#unidades', label: 'Ver qué temas aprende' },
  wa: 'Hola Modern Age Coders, a nuestro hijo o hija le encanta Minecraft y queremos que aprenda a programar con él, en inglés. ¿Podemos reservar una clase de prueba gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; bloques primero, código escrito después',
  spec: [
    ['Edades', 'De 7 a 12 años, de 2° de primaria a 1° de secundaria'],
    ['Herramienta', 'MakeCode para Minecraft: bloques, luego Python'],
    ['Lo que construye', 'Torres, granjas automáticas y minijuegos'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Idioma', 'Inglés pausado, con mentor en vivo desde la India'],
    ['Prueba', 'Una clase gratis, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Modern Age Coders enseña programación en Minecraft a niños peruanos de 7 a 12 años, en vivo y en inglés: el niño se conecta por videollamada con un mentor radicado en la India. Empieza con los bloques de MakeCode, el editor de Microsoft para programar Minecraft, y da órdenes a un agente robot que construye por él; hacia los 10 u 11 años pasa a escribir Python. Lo que aprende son bucles, condiciones y coordenadas. Hay grupos y clases individuales, el día y la hora que la familia decida.',

  picks: {
    eyebrow: 'Cursos con Minecraft',
    h2: 'Tres cursos para programar con Minecraft',
    lede: 'El primero es el curso de Minecraft; el segundo sirve si su hijo quiere probar varios juegos, y el tercero es el paso a código escrito.',
    items: [
      { course: 'minecraft-coding-for-kids-course', code: 'PMN / 01', title: 'Minecraft con MakeCode', alt: 'Imagen del curso de programación en Minecraft para niños', note: 'De 7 a 12 años. De los primeros comandos al agente robot, las granjas automáticas y los minijuegos, siempre con bloques que el propio niño arma.' },
      { course: 'game-development-masterclass-for-kids', code: 'PMN / 02', title: 'Tres mundos de juego', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'De 8 a 12 años. Scratch, Roblox y Minecraft en un solo recorrido, para el niño que todavía no elige su favorito.' },
      { course: 'python-ai-kids-masterclass', code: 'PMN / 03', title: 'Python después de los bloques', alt: 'Imagen del curso de Python con inteligencia artificial para niños', note: 'De 9 a 12 años. Cuando los bloques ya le quedan chicos: el mismo pensamiento de Minecraft, ahora escrito a mano en Python.' }
    ]
  },

  sections: [
    {
      id: 'tres-cosas',
      eyebrow: 'Juego, edición educativa y editor',
      h2: '¿Qué es la programación en Minecraft para niños?',
      lede: 'Es usar un editor de código para darle órdenes al mundo de Minecraft en lugar de colocar cada bloque con el mouse. Para entenderlo conviene separar tres nombres que las familias suelen mezclar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Minecraft, el juego', p: 'El mundo de bloques que casi todos los niños conocen. Se puede jugar años sin programar nada. Sus condiciones de uso las publica Mojang, la empresa que lo creó.' },
          { h3: 'Minecraft Education', p: 'Una edición pensada para escuelas, con lecciones, ajustes para el docente y herramientas de código. Según su web está disponible para Windows, Mac, Chromebook, iPad, Android e iOS.' },
          { h3: 'MakeCode', p: 'El editor donde se programa. Su propia página lo presenta como "a code editor to build fun mods and programs for Minecraft". Ofrece bloques, Python y JavaScript.' }
        ] },
        { kind: 'p', mt: true, html: 'En nuestras clases el centro es MakeCode. El niño arrastra bloques que dicen, en inglés, cosas como "on chat command", "repeat" o "agent move forward", y ve el resultado al instante dentro del juego. El agente es un pequeño robot que vive en el mundo de Minecraft y obedece el programa: avanza, gira, coloca bloques, cava. No hay robot físico ni ningún kit; todo ocurre en la pantalla.' },
        { kind: 'p', html: 'Minecraft Education afirma que millones de docentes y estudiantes lo usan en 115 países y que tiene más de 600 lecciones alineadas a estándares. Lo mencionamos para que sepa de qué se trata si el colegio de su hijo ya lo usa; nosotros no tenemos ningún vínculo con Microsoft ni con Mojang, y le explicamos antes de la primera clase qué versión instalar.' },
        { kind: 'p', html: 'Si todavía duda entre Minecraft y otros caminos para la primaria, la guía de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> compara opciones grado por grado.' }
      ]
    },
    {
      id: 'unidades',
      eyebrow: 'Temario de referencia',
      h2: '¿Qué aprende un niño al programar Minecraft, tema por tema?',
      lede: 'MakeCode publica una ruta introductoria de ciencias de la computación con ocho unidades. Es un buen mapa de lo que un niño aprende con Minecraft, aunque cada curso lo recorra a su manera.',
      body: [
        { kind: 'table', numCols: [], caption: 'Las ocho unidades del curso introductorio de MakeCode para Minecraft y lo que significan para un niño', head: ['Unidad (nombre en MakeCode)', 'Qué es, en palabras de casa (nuestro)', 'Un ejemplo en Minecraft (nuestro)'], rows: [
          ['Events', 'Algo ocurre y el programa responde', 'Escribir una palabra en el chat hace llover gallinas'],
          ['Coordinates', 'Cada bloque tiene una dirección de tres números', 'Construir una pared exactamente a diez pasos'],
          ['Variables', 'Una caja con nombre que guarda un número', 'Contar cuántos diamantes recogió el jugador'],
          ['Iteration', 'Repetir sin escribir lo mismo mil veces', 'Una escalera de cincuenta peldaños con un solo bucle'],
          ['Conditionals', 'Decidir según lo que pasa', 'Si el agente encuentra lava, que pare'],
          ['Functions', 'Un paquete de pasos con nombre propio', 'Una función "casa" que se llama en tres lugares'],
          ['Arrays', 'Una lista de cosas en orden', 'La lista de bloques de un arcoíris'],
          ['Artificial Intelligence', 'Que el programa decida con reglas o datos', 'Un agente que busca la salida de un laberinto']
        ] },
        { kind: 'source', html: 'Fuente de la primera columna: el menú de la ruta "CS Intro" en minecraft.makecode.com, leído el 9 de noviembre de 2026; los nombres están en inglés porque así los publica MakeCode. La segunda y la tercera columna son nuestras.' },
        { kind: 'p', mt: true, html: 'Fíjese en que la palabra "Minecraft" no aparece en ninguna unidad. Eventos, variables, bucles, condiciones, funciones y listas son la base de cualquier lenguaje. Minecraft es el escenario donde el niño las ve funcionar, igual que un laboratorio de ciencias es el escenario donde ve funcionar la química. Por eso, cuando más adelante llega a Python, reconoce casi todo.' },
        { kind: 'p', html: 'La misma web de MakeCode trae lecciones con nombres muy de colegio, como "Area", "Ratio" o "Cubic units". Esa última nos inspiró el ejercicio de esta página, aunque el problema, los números y el código son nuestros.' }
      ]
    },
    {
      id: 'edad',
      eyebrow: 'Edades',
      h2: '¿A qué edad conviene programar en Minecraft, y cuándo pasar a Python?',
      lede: 'Con bloques se puede empezar a los 7 años, que en el Perú suele ser 2° de primaria. El paso a código escrito llega cuando el niño lee y teclea con comodidad, por lo general entre 4° y 6° de primaria.',
      body: [
        { kind: 'two',
          leftH3: 'Con bloques, de 7 a 9 años',
          left: [
            'En 2° y 3° de primaria el niño todavía está afianzando la lectura. Los bloques le ahorran escribir y le dejan concentrarse en el orden de las instrucciones: primero avanza, luego gira, luego coloca.',
            'A esta edad la meta no es la cantidad de código, sino que diga en voz alta qué va a hacer el agente antes de ejecutarlo. Esa costumbre de predecir es la que después distingue a un buen programador.'
          ],
          rightH3: 'Con Python, de 10 a 12 años',
          right: [
            'Hacia 5° de primaria muchos niños ya piden "escribir de verdad". MakeCode permite ver el mismo programa en bloques y en Python, así que el paso es suave: lo que antes arrastraba, ahora lo lee y lo teclea.',
            'En 6° de primaria y 1° de secundaria aparecen los bucles anidados y las funciones con parámetros, como en el ejemplo de esta página. Es el momento de mirar más allá de Minecraft.'
          ] },
        { kind: 'p', mt: true, html: 'Las edades normativas que usamos vienen del MINEDU: 2° de primaria a los 7 años, 5° a los 10, 6° a los 11 y 1° de secundaria a los 12, con la edad cumplida al 31 de marzo. Un niño que cumple años después de esa fecha puede estar un grado "adelantado" respecto a su edad, y lo tomamos en cuenta al formar los grupos.' },
        { kind: 'p', html: 'Para los menores de 7 años preferimos algo sin pantalla de juego: razonamiento con figuras, secuencias y patrones. Y para el niño que quiere entender cómo una máquina decide sola, el <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">curso de inteligencia artificial para niños</a> retoma la unidad de IA de Minecraft con ejemplos propios.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de programación con Minecraft?',
      lede: 'Le contamos una clase real con niños de 10 a 12 años. El reto: el agente debe construir una torre cúbica, maciza o hueca, y antes de gastar materiales hay que saber cuántos bloques necesita.',
      body: [
        { kind: 'p', html: 'En el juego, una torre de 10 por 10 por 10 maciza consume muchos bloques y tarda en construirse. Si solo se ven las paredes, ¿vale la pena rellenarla? Para responder, el grupo escribe este programa en Python, que recorre cada posición posible con tres bucles, uno por eje, y cuenta las que quedan en una cara del cubo.' },
        { kind: 'code', label: 'Contar los bloques de un cubo macizo y de uno hueco', lang: 'Python', code: PY, note: '<code>x</code>, <code>y</code> y <code>z</code> son las tres coordenadas, como en Minecraft. Una posición está en una cara si alguna coordenada vale 0 o el último valor, <code>size - 1</code>. Si el cubo es hueco, solo se cuentan esas posiciones.' },
        { kind: 'code', label: 'Resultado al ejecutarlo', lang: 'Salida', code: OUT, note: 'Copiado tal cual de Python 3 en nuestro equipo. La última columna aplica una fórmula: el cubo entero menos el cubo interior, que tiene dos bloques menos por lado.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Adivinar primero.</strong> El mentor pregunta en inglés: "how many blocks for a hollow cube of side 3?". Muchos dicen 9 o 18. El programa dice 26: es el cubo de 27 sin el único bloque del centro.',
          '<strong>Recorrer las tres direcciones.</strong> Tres bucles, uno dentro de otro, visitan cada lugar del cubo. Para el lado 10 son mil visitas. El niño entiende por qué el agente tarda cuando construye macizo.',
          '<strong>La regla de la cara.</strong> <code>x in (0, size - 1)</code> pregunta si la posición está en el borde. Un error frecuente es escribir <code>size</code> en vez de <code>size - 1</code>, porque <code>range(size)</code> termina un número antes.',
          '<strong>Comprobar con una fórmula.</strong> Si el interior es un cubo de lado 8, sobran 512 bloques: 1000 menos 512 da 488. El programa y la cuenta coinciden, y eso da confianza en los dos.',
          '<strong>Llevarlo al juego.</strong> Con la cifra en la mano, el niño programa al agente para levantar la torre hueca. Ahorra más de la mitad de los bloques: 488 en lugar de 1000.'
        ] },
        { kind: 'p', mt: true, html: 'En una sola clase el niño practicó bucles anidados, una condición con <code>or</code>, una función con parámetros y una idea de geometría que en el colegio verá como volumen. Lo más valioso, sin embargo, es el hábito: estimar, calcular y comprobar antes de construir.' }
      ]
    },
    {
      id: 'matematica',
      eyebrow: 'Matemática del colegio',
      h2: '¿Programar en Minecraft ayuda en matemática?',
      lede: 'Puede ayudar, porque obliga a usar números con un propósito. No reemplaza la clase de matemática del colegio ni promete una nota, pero le da al niño razones para contar, medir y comparar.',
      body: [
        { kind: 'p', html: 'El CNEB organiza el área de Matemática en cuatro competencias: problemas de cantidad; de regularidad, equivalencia y cambio; de gestión de datos e incertidumbre; y de forma, movimiento y localización. En primaria el plan de estudios le dedica cinco horas semanales en 1° y 2° grado y cuatro horas de 3° a 6°. Minecraft toca sobre todo la última competencia: posiciones, giros y volúmenes, todo en tres dimensiones.' },
        { kind: 'three', cells: [
          { h3: 'Cantidad', p: 'Cuántos bloques, cuántas repeticiones, cuánto sobra. El ejemplo del cubo hueco es pura cantidad.' },
          { h3: 'Regularidad y cambio', p: 'Una escalera que sube uno por cada paso es una relación que el niño descubre al programarla.' },
          { h3: 'Forma y localización', p: 'Coordenadas x, y, z: la dirección exacta de cada bloque del mundo.' }
        ] },
        { kind: 'p', mt: true, html: 'En noviembre de 2025 el MINEDU aplicó la evaluación nacional ENLA a estudiantes de 4° grado de primaria en Lectura y Matemática. Lo mencionamos como referencia del momento escolar: esa edad, 9 años, es la misma en la que muchos niños se enganchan con Minecraft. No preparamos para la ENLA ni para ninguna prueba del Estado, y la nota de matemática la pone el colegio.' },
        { kind: 'p', html: 'Si lo que su hijo necesita es matemática propiamente dicha, sin juego de por medio, tenemos clases de matemática en inglés para primaria. Y si busca algo para enero, el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación</a> propone semanas de verano con proyectos como este.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'En casa',
      h2: '¿Qué necesita mi hijo en casa para programar Minecraft en línea?',
      lede: 'Una computadora, una conexión estable, la versión de Minecraft que le indiquemos y un adulto que gestione las cuentas. Con un celular se juega Minecraft, pero programar con comodidad pide teclado y pantalla grande.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dicen Minecraft y el INEI',
          left: [
            'La web de licencias de Minecraft Education indica que cualquiera con una cuenta de Microsoft 365 puede comprarla y usarla, y que se licencia por suscripción anual. También aclara que está disponible para organizaciones de educación en casa. Antes de la primera clase le decimos qué necesita exactamente.',
            'El contrato de licencia de Minecraft dice que la moneda virtual del juego solo puede comprarse con dinero real si la persona alcanzó la mayoría de edad donde vive. En clase no se compra nada.',
            'Según el INEI, en el segundo trimestre de 2026 el 36,4% de los hogares del país tenía al menos una computadora, y el 68,2% de los niños de 6 a 11 años usó internet.'
          ],
          rightH3: 'Lo que recomendamos nosotros',
          right: [
            'Que la cuenta del niño la abra y la conozca un adulto, con la contraseña guardada en casa.',
            'La computadora en un espacio común durante las primeras semanas, sobre todo con niños de 2° y 3° de primaria.',
            'Audífonos con micrófono, porque el mentor necesita escuchar cómo el niño explica su programa en inglés.'
          ] },
        { kind: 'p', mt: true, html: 'Sobre el idioma: los bloques de MakeCode y los mensajes de Minecraft se leen en inglés en nuestras clases, y el mentor nunca cambia al español. No somos una academia de idiomas, pero las familias notan que, después de unas semanas, el niño usa con naturalidad palabras como "forward", "repeat" o "place". Con 555 puntos, Lima figura en la banda alta del EF EPI 2025, así que muchos niños limeños llegan con más base de la que suponen sus padres.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿En qué horario son las clases de Minecraft con mentores de la India?',
      lede: 'En el que usted reserve. Entre Lima y la India hay diez horas y media de diferencia todo el año, y ninguno de los dos países adelanta el reloj.',
      body: [
        { kind: 'p', html: 'Una conversión para orientarse, hecha con UTC-5 para el Perú y UTC+5:30 para la India: a las 9:00 a. m. de un domingo en Lima, en la India son las 7:30 p. m. del domingo. Las 11:00 a. m. limeñas equivalen a las 9:30 p. m. indias. Y las 4:00 p. m. de Lima caen en plena madrugada india, a las 2:30 a. m. Nada de esto es un turno de clase: la reserva la hace usted y el mentor se acomoda.' },
        { kind: 'p', html: 'Con niños de 7 u 8 años sugerimos sesiones de unos 45 minutos; desde los 10 años, una hora entera rinde más, porque cargar el mundo de Minecraft y probar el programa consume algunos minutos de cada clase.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se ve el progreso de un niño que programa en Minecraft?',
    lede: 'Usamos estas cinco etapas para contarle a la familia dónde está su hijo. Son nuestras; ni MakeCode ni el MINEDU las definen.',
    table: { caption: 'Cinco etapas de programación en Minecraft (nuestras)', head: ['Etapa', 'Grado en que suele llegar', 'Qué consigue el niño'], rows: [
      ['1. Ordena', '2° de primaria', 'Pone tres o cuatro bloques en el orden correcto para mover al agente'],
      ['2. Repite', '3° de primaria', 'Cambia veinte bloques iguales por un solo bucle'],
      ['3. Decide', '4° de primaria', 'Hace que el agente reaccione si encuentra agua o lava'],
      ['4. Calcula', '5° de primaria', 'Usa coordenadas y cuentas para planear una construcción'],
      ['5. Escribe', '6° de primaria', 'Pasa el mismo programa de bloques a Python y lo mejora']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Cuando vea una construcción de su hijo, pregúntele cuántos bloques usó y cómo lo sabe. Si responde con un bucle, va bien.',
      'Las primeras semanas el niño contesta al mentor con palabras sueltas en inglés. Es normal y pasa rápido.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Antes de pulsar "run", diga en voz alta qué va a hacer el agente. Después compruebe si acertó.',
      'Si el agente se pierde, no es culpa del agente: el programa le dijo eso.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve opciones más para niños que aprenden jugando',
    lede: 'Cada uno se da en directo y en inglés, en grupo o con un mentor exclusivo, y ninguno exige comprar nada dentro de un juego.',
    bands: [
      { num: 'I', h3: 'Para empezar con calma', sub: 'De 6 a 12 años', courses: [
        { code: 'PMN / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programación con bloques', blurb: 'Primeros programas sin teclear, agrupados por edad.' },
        { code: 'PMN / BASE / 02', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Animaciones y juegos propios en el editor más usado del mundo.' },
        { code: 'PMN / BASE / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar antes de programar', blurb: 'Patrones y reglas escondidas para los más pequeños.' }
      ] },
      { num: 'II', h3: 'Otros mundos para construir', sub: 'De 8 a 14 años', courses: [
        { code: 'PMN / MUNDO / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio', blurb: 'Juegos propios con el lenguaje Luau.' },
        { code: 'PMN / MUNDO / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot', blurb: 'Un motor de juegos libre, en 2D y 3D.' },
        { code: 'PMN / MUNDO / 03', slug: 'kids-ai-web-development-course', title: 'Páginas web', blurb: 'La primera web propia, publicada con su nombre.' }
      ] },
      { num: 'III', h3: 'Números y lógica', sub: 'De 7 a 15 años', courses: [
        { code: 'PMN / NUM / 01', slug: 'maths-through-coding', title: 'Matemática programando', blurb: 'Fracciones, patrones y gráficos convertidos en código.' },
        { code: 'PMN / NUM / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Partir un reto grande en pasos que se pueden probar.' },
        { code: 'PMN / NUM / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Sentido del número, sin trucos de memoria.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo transcurre una clase de Minecraft por videollamada?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana de domingo', l: 'Muy elegida por familias con niños de 7 y 8 años.' },
      { time: 'Salida del colegio', l: 'Una hora corta antes de las tareas.' },
      { time: 'Según la semana', l: 'En clases individuales, se mueve con aviso.' }
    ],
    cells: [
      { h3: 'Mundo compartido', p: 'El niño muestra su pantalla de Minecraft y el mentor sigue cada bloque.' },
      { h3: 'Predecir y probar', p: 'Antes de ejecutar, el niño dice qué espera que pase.' },
      { h3: 'Sin compras', p: 'Nada de monedas virtuales ni objetos pagados durante el curso.' },
      { h3: 'Un solo mentor', p: 'La misma persona sigue los proyectos de su hijo semana tras semana.' },
      { h3: 'Reto para la semana', p: 'Una construcción corta para probar en casa, sin presión.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte niños de edad cercana, o solo su hijo.' }
    ]
  },

  projectsH2: 'Lo que han creado nuestros estudiantes',
  projectsLede: 'Una muestra de proyectos de alumnos de distintas edades. Hay muchos más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, una página en inglés.',
  reviewsLede: 'Comentarios de familias y estudiantes en Google, publicados en inglés y copiados sin cambios.',

  fees: {
    h2: 'Precio de las clases de programación en Minecraft',
    lede: 'El monto mensual figura en dólares estadounidenses y se carga a una tarjeta; la conversión a su moneda la hace el banco al momento del cobro. No hay matrícula.',
    free: ['Clase de prueba sin costo', 'El mentor recomienda bloques o Python según el niño', 'No pedimos tarjeta para probar'],
    group: ['Quince a veinte niños de edades cercanas', 'Dos sesiones en vivo cada semana', 'El mismo mentor todo el curso', 'Mensualidad sin permanencia'],
    one: ['Su hijo con un mentor exclusivo', 'Proyectos elegidos por él', 'Hora flexible según la agenda familiar']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación en Minecraft para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No: cada clase se dicta en inglés, en directo y por internet, con un mentor desde la India que habla despacio y repite cuando hace falta. Para muchas familias peruanas es justamente el atractivo: el niño programa Minecraft y al mismo tiempo usa el inglés que estudia en el colegio, con alguien que conversa con él. El EF EPI 2025 coloca el inglés de Lima en la banda "High".' },
      { q: '¿Qué se usa para programar Minecraft?', a: 'MakeCode, un editor de Microsoft que su propia web describe como un editor de código para crear mods y programas para Minecraft. Permite programar con bloques, con Python o con JavaScript.' },
      { q: '¿Desde qué edad se puede programar en Minecraft?', a: 'Nuestro curso es para niños de 7 a 12 años. A los 7, en 2° de primaria, se trabaja con bloques; hacia los 10 u 11 años el niño puede pasar a escribir Python en el mismo editor.' },
      { q: '¿Es lo mismo Minecraft que Minecraft Education?', a: 'No. Minecraft es el juego; Minecraft Education es una edición para escuelas con lecciones y herramientas para docentes. Según su web, se licencia por suscripción anual y la puede adquirir cualquiera con una cuenta de Microsoft 365. Antes de empezar le indicamos qué versión usar.' },
      { q: '¿Hay que comprar algo dentro del juego?', a: 'No. El curso no requiere monedas ni objetos pagados. El contrato de Minecraft dice además que la moneda virtual solo puede comprarse con dinero real al alcanzar la mayoría de edad donde uno vive.' },
      { q: '¿Programar en Minecraft ayuda con la matemática?', a: 'Puede ayudar, porque el niño cuenta, mide y usa coordenadas con un propósito. En el ejemplo de esta página calcula cuántos bloques tiene un cubo hueco. No reemplaza la clase del colegio ni promete notas.' },
      { q: '¿Qué computadora necesita?', a: 'Una laptop o computadora de escritorio con teclado, conexión estable y la versión de Minecraft que le indiquemos. Minecraft Education funciona también en iPad y Chromebook según su web, pero para programar recomendamos teclado.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, las 9:00 a. m. de Lima son las 7:30 p. m. en la India.' },
      { q: '¿Después de Minecraft qué sigue?', a: 'Lo más común es Python, porque el niño ya conoce bucles, condiciones y funciones. Otros prefieren Roblox o Godot para seguir creando juegos.' },
      { q: '¿Tiene validez en el colegio?', a: 'No. Somos una academia en línea independiente, sin relación con el MINEDU, Microsoft ni Mojang. Su hijo recibe al final un certificado de finalización nuestro, que no equivale a una nota escolar.' },
      { q: '¿Cómo se paga?', a: 'Se cobra mensualmente en dólares estadounidenses, con tarjeta; el banco que emitió la tarjeta convierte el monto. La clase de prueba no pide ningún dato de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Lecturas relacionadas con Minecraft y programación',
    lede: 'Algunas están en inglés, el mismo idioma de las clases.',
    items: [
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes for kids', p: 'Nuestro curso de Minecraft contado para familias de todo el mundo.' },
      { href: '/learn-to-code-minecraft-mods', label: 'Learn to code Minecraft mods', p: 'Qué es un mod y cómo se empieza a programar uno.' },
      { href: '/how-to-make-a-video-game-for-kids', label: 'How to make a video game for kids', p: 'Los pasos para que un niño cree su primer videojuego.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'La guía para toda la primaria peruana.' },
      { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'Curso de inteligencia artificial para niños', p: 'Para el niño que quiere entender cómo decide una máquina.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra manera de dar cada sesión en directo.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba de Minecraft',
    lede: 'En la sesión gratuita el mentor le pide a su hijo que le cuente qué ha construido en Minecraft, le propone mover al agente con tres bloques y observa cómo razona. Con eso le recomienda empezar con bloques o con Python.',
    readFirst: 'Si quiere leer antes, <a class="ag-inline-link" href="/minecraft-coding-classes-for-kids">Minecraft coding classes for kids</a> describe el curso semana a semana y <a class="ag-inline-link" href="/how-we-teach">How we teach</a> nuestra forma de enseñar. Las dos páginas están en inglés.',
    note: 'Tenga presente que el curso se da completo en inglés, en tiempo real y por videollamada, con un mentor que vive en la India. Antes de reservar, por WhatsApp le aclaramos dudas en castellano.',
    formNote: 'Gratis y sin compromiso; no pedimos tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Minecraft', links: [
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Curso de Minecraft' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python para niños' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding classes' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'IA para niños' }
      ] }
    ],
    bottomRight: 'Antes de construir, cuente los bloques'
  },

  personalityCss: `
.ag-root.ag-pmn .ag-hero h1 { letter-spacing: -0.008em; max-width: 21ch; }
.ag-root.ag-pmn .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-pmn .ag-table th { text-transform: none; letter-spacing: 0; }
.ag-root.ag-pmn .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pmn .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'MakeCode for Minecraft About page and CS Intro menu; Minecraft Education pages What is, Get started and Licensing; Minecraft EULA; all read 2026-11-09. MINEDU Edades normativas; CNEB maths competencies and primaria weekly hours; ENLA 2025 grades (MINEDU press note); INEI TIC II Trimestre 2026; EF EPI 2025; tzdata. The plain-words and Minecraft-example columns, the stages, the cube exercise and its numbers are our own.',
    localProject: 'A Python lesson for children of 10 to 12 who program Minecraft: three nested loops over x, y and z count the blocks of a cube, solid or hollow, testing whether any coordinate is 0 or size - 1. Run with python3 -I: side 3 gives 27 and 26, side 5 gives 125 and 98, side 10 gives 1000 and 488, matching n³ − (n − 2)³. Lesson family: nested loops and a boundary test checked against a formula.',
    requiredMentions: ['Contar los bloques de un cubo macizo y de uno hueco', '10 solid 1000 hollow 488 formula 488', 'how many blocks for a hollow cube of side 3?', 'Las ocho unidades del curso introductorio de MakeCode para Minecraft y lo que significan para un niño', 'a code editor to build fun mods and programs for Minecraft', 'Ahorra más de la mitad de los bloques: 488 en lugar de 1000.', 'Cinco etapas de programación en Minecraft (nuestras)', 'Antes de construir, cuente los bloques'],
    sources: [
      { claim: 'MakeCode for Minecraft is a code editor to build mods and programs; CS Intro units Events, Coordinates, Variables, Iteration, Conditionals, Functions, Arrays, Artificial Intelligence; Blocks, Python, JavaScript.', url: 'https://minecraft.makecode.com/about' },
      { claim: 'Minecraft Education on Windows, Mac, Chromebook, iPad, Android and iOS; 600+ lessons; yearly subscriptions; homeschool organizations.', url: 'https://education.minecraft.net/en-us/discover/what-is-minecraft' },
      { claim: 'Minecraft Education used in 115 countries.', url: 'https://education.minecraft.net/en-us/get-started' },
      { claim: 'Anyone with a Microsoft 365 account can purchase and use Minecraft Education.', url: 'https://education.minecraft.net/en-us/licensing' },
      { claim: 'Virtual currency purchasable with real money only at the age of majority.', url: 'https://www.minecraft.net/en-us/terms/r1' },
      { claim: 'CNEB maths competencies and primaria weekly hours.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2025 tested 4.° primaria in Lectura and Matemática.', url: 'https://www.gob.pe/institucion/minedu/noticias/1284732-minedu-evaluara-aprendizajes-de-200-mil-estudiantes-de-primaria-y-secundaria-de-todo-el-pais' },
      { claim: 'INEI: 36.4% of homes with a computer; 68.2% of children 6 to 11 used the internet (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' }
    ],
    rejectedClaims: [
      'Minecraft Education prices: not printed (brief rule 5: no typed fees, no third-party prices).',
      'A Minecraft account minimum age: not printed; the EULA read states only the age of majority for virtual currency, which is what the page says.',
      'Better maths grades or ENLA results: refused; the page says it does not replace school maths and does not prepare for state tests.',
      'A Microsoft, Mojang, MINEDU or school partnership: none; the page says so.',
      'MakeCode API code run by us: not shown; no MakeCode runtime was available, so the worked example is plain Python labelled ours.'
    ]
  }
};

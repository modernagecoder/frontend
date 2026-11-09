// SHIP: district (vacaciones útiles) | Surquillo added robótica to its summer: the code that drives any robot, at home | while loops with two exit conditions: a virtual robot that runs out of battery
'use strict';
// Vacaciones útiles de programación en Surquillo (ag- Spanish district door, Peru cluster row PE221, P2, hubGroup lima).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md
// (rule "Vacaciones útiles pages": ordinary live classes as a summer start, our own suggested plan, no invented camp
// length, start date or price). Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08:
// timing flexible, any time. Formal "usted"; fees only through the template; no soles, no typed figure.
// Angle: children of 8 to 14 in Surquillo whose parents type "vacaciones útiles Surquillo" and see robotics everywhere.
// Spine: what the Municipalidad de Surquillo itself published about three summers (2024, 2025, 2026), including robotics
// workshops added in January 2026; the district in the 2025 census; robotics needs programming first (MINEDU robotics
// paper, Hackathon 2025), and we teach programming only, on screen, with no kit; a three-stage plan of our own; one
// original Python lesson (a virtual robot whose battery runs out); flexible hours. No income or class assumptions.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/vacaciones-utiles-de-programacion-surquillo-lima/,
// fetched 8 and 9 November 2026 with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw files):
//  Municipalidad Distrital de Surquillo on gob.pe (its own institutional news pages):
//    891261 (8 January 2024) "Niños, jóvenes y padres de familia felices con las vacaciones útiles “Surquillo 2024”":
//      "Más de 30 talleres y disciplinas, entre educativas, culturales y deportivas, se dictan de manera descentralizada";
//      "desarrollar durante 2 meses sus talentos artísticos y practicar deportes"; "Hasta el momento, más de 2 mil
//      surquillanos fueron inscritos en diferentes talleres y disciplinas". Quotes from named parents are not reused.
//    1073831 (13 December 2024): "este 02 de enero, la Municipalidad de Surquillo iniciará sus talleres de verano 2025, en
//      donde los niños a partir de tres años de edad y jóvenes podrán elegir entre más de 40 actividades".
//    1329571 (5 January 2026): "Menores desde los 4 hasta los 17 años y adultos participan de las distintas disciplinas";
//      "Los talleres y deportes se dictan de manera descentralizada de lunes a sábado"; venues "Estadio Municipal Carlos A.
//      Moscoso, complejo deportivo Paul Harris-Morococha, la Casa de la Juventud, y los parques Héroes de la Paz y
//      Misericordia (Los Sauces)"; "este fin de semana iniciarán los talleres de fútbol flag, robótica y dibujo".
//    The mayor's name in the 2024 notes is left out on purpose (no political names).
//  INEI Censos Nacionales 2025, Indicadores demográficos, Lima Metropolitana (tabulados/27, ind_27.xlsx) CUADRO N°1:
//    "DISTRITO SURQUILLO | 119236 | ... | 111082 | ... | 8154"; CUADRO N°3: "DISTRITO SURQUILLO | 111082 | 4757 | 6790 | 7333 |
//    18769 | 30110 | 21158 | 22165". Surquillo is 26th of the 43 districts by total population (our sort of Cuadro N°1).
//  MINEDU (DITE) robotics paper (minedu-robotica-pdf, FACTS 53): "El ministerio de educación incorpora el uso de la robótica
//    educativa desde el año 1996 con el proyecto Infoescuela".
//  MINEDU press note, 4 August 2025 (n-hackathon2025, FACTS 48): "la cuarta edición de la Hackathon 2025 del Ministerio de
//    Educación (Minedu), que premió a los equipos de estudiantes, docentes y especialistas, quienes sorprendieron con
//    proyectos de IA y robótica".
//  RM 501-2025-MINEDU Tabla 1 (page 7, checked by eye): last teaching block to "18 de diciembre"; gob.pe search on
//    9 November 2026 shows no 2027 norm. INEI TIC II trimestre 2026: Lima Metropolitana households with internet 84,7%.
//  EF EPI 2025: Lima 555, high. Time: America/Lima UTC-5 all year; India UTC+5:30 (10 h 30 min ahead).
// Our own calculations (python3 -I): 6790 / 111082 = 6.1 % and 7333 / 111082 = 6.6 % of the censused population;
//    1176422 / 119236 is not used (no cross-district ranking language beyond our sort).
// Our own example (robot.py and robot12.py in the src-pages folder), run with python3 -I, exact output:
//    step 1 position 1 battery 8 / step 2 position 2 battery 6 / step 3 position 3 battery 4 / step 4 position 4 battery 2 /
//    step 5 position 5 battery 0 / Stopped: battery empty at position 5; with battery = 12 the last lines are
//    step 6 position 6 battery 0 / Arrived at the goal!
// Neighbouring districts in plain text only: Miraflores, San Isidro, San Borja, Santiago de Surco.
// Lesson family: a while loop with two exit conditions joined by and, then checking which condition stopped it.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'battery = 10',
  'position = 0',
  'goal = 6',
  'steps = 0',
  '',
  'while battery > 0 and position < goal:',
  '    position = position + 1',
  '    battery = battery - 2',
  '    steps = steps + 1',
  "    print('step', steps, 'position', position, 'battery', battery)",
  '',
  'if position == goal:',
  "    print('Arrived at the goal!')",
  'else:',
  "    print('Stopped: battery empty at position', position)"
].join('\n');

const OUT = [
  'step 1 position 1 battery 8',
  'step 2 position 2 battery 6',
  'step 3 position 3 battery 4',
  'step 4 position 4 battery 2',
  'step 5 position 5 battery 0',
  'Stopped: battery empty at position 5'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Vacaciones útiles en Surquillo' },
  slug: 'vacaciones-utiles-de-programacion-surquillo-lima',
  code: 'vasu',
  accent: '#255500',
  accentRationale: 'Surquillo: a market-stall leaf green #255500, the colour of the herb and vegetable stands of the district\'s food markets, allocated in alloc.tsv (contrast 7.17 on the paper #FBF8F2) and checked above 4.5 on every paper tint by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Vacaciones útiles de programación en Surquillo',
  title: 'Vacaciones útiles en Surquillo: robótica o programación',
  description: 'Vacaciones útiles en Surquillo para niños de 8 a 14 años: la programación que mueve a cualquier robot, en clases en vivo, en línea y en inglés, desde casa.',
  ogDescription: 'Surquillo sumó robótica a sus talleres de verano 2026. Aquí explicamos qué parte de un robot es programación, cómo aprenderla en casa y un reto de Python con un robot en pantalla.',
  twitterDescription: 'Robótica o programación en las vacaciones útiles de Surquillo: clases en vivo y en inglés, desde casa, a cualquier hora.',
  pageName: 'Vacaciones útiles de programación en Surquillo',
  webPageDescription: 'Guía para familias de Surquillo con niños de 8 a 14 años que dudan entre robótica y programación para el verano: lo que la Municipalidad de Surquillo publicó sobre sus talleres de 2024, 2025 y 2026, la población del distrito según los Censos Nacionales 2025 del INEI, lo que dice el MINEDU sobre robótica educativa, un plan propio en tres etapas y un ejercicio de Python con un robot virtual.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 8 a 14 años en Surquillo, dictadas solo en inglés, que pueden empezar en vacaciones: lógica con bloques, Python y C++, con robots y personajes en pantalla, sin kits, en grupo o individuales y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Vacaciones útiles, Surquillo',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#tres-veranos', label: 'Tres veranos' },
    { href: '#robotica', label: 'Robótica' },
    { href: '#etapas', label: 'Plan en tres etapas' },
    { href: '#robot-virtual', label: 'Robot en Python' },
    { href: '#vecinos', label: 'Desde casa' }
  ],
  eyebrow: 'Lima &middot; Surquillo &middot; Robótica y programación en verano',
  h1: 'Vacaciones útiles en Surquillo: la programación detrás de la robótica',
  lede: 'Cuando una familia de Surquillo busca vacaciones útiles, la palabra que más aparece es robótica, y el propio municipio la incluyó en sus talleres de verano 2026. Esta página explica qué parte de la robótica es en realidad programación, por qué conviene aprenderla primero y cómo hacerlo en casa, con un mentor y en inglés, durante enero, febrero y marzo.',
  secondaryCta: { href: '#robot-virtual', label: 'Probar el robot en Python' },
  wa: 'Hola Modern Age Coders, vivimos en Surquillo y a nuestro hijo le interesa la robótica. ¿Podemos reservar una clase gratis de programación para el verano?',
  heroNote: 'Desde 2020 enseñando en vivo &middot; más de 10,000 alumnos en el mundo &middot; programación sin kits, con un mentor que habla en inglés',
  spec: [
    ['Edades', 'De 8 a 14 años, de 3° de primaria a 2° de secundaria'],
    ['Qué se programa', 'Robots y personajes en pantalla; no usamos ni vendemos kits'],
    ['Herramientas', 'Bloques, Python y C++, según la edad'],
    ['Modalidad', 'En grupo de quince a veinte o en clases individuales'],
    ['Inicio', 'Cualquier semana de las vacaciones o del año escolar'],
    ['Prueba', 'La primera clase no se cobra ni pide tarjeta']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Si a su hijo le atrae la robótica, lo que más le servirá este verano es aprender a programar, porque es la parte que decide qué hace cualquier robot. Modern Age Coders da clases en vivo, en línea y en inglés para niños de 8 a 14 años de Surquillo: lógica con bloques, Python y C++, con robots y personajes que se mueven en la pantalla, sin comprar ningún kit. Su hijo puede empezar cualquier semana de vacaciones, con otros chicos o a solas con su mentor, en el horario que más le acomode a la casa. La primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos para este verano',
    h2: '¿Con qué curso empieza un niño al que le gusta la robótica?',
    lede: 'Tres caminos según la edad y la experiencia: bloques para empezar, lógica pura para pensar como un ingeniero y C++ para los que ya escriben código.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'VASU / 01', title: 'Bloques para dar órdenes', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para los que nunca programaron. Secuencias, repeticiones y condiciones con bloques de colores: la misma lógica con que se programan los robots educativos.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'VASU / 02', title: 'Pensar paso a paso', alt: 'Imagen del curso de pensamiento computacional para niños', note: 'Dividir un problema grande en partes, encontrar patrones y escribir instrucciones sin ambigüedad. Es lo que necesita un robot y lo que necesita un buen estudiante.' },
      { course: 'cpp-programming-for-kids-course', code: 'VASU / 03', title: 'C++ para chicos de 9 a 12', alt: 'Imagen del curso de C++ para niños', note: 'Código escrito de verdad con juegos y acertijos. C++ es un lenguaje muy usado en máquinas y en competencias de programación.' }
    ]
  },

  sections: [
    {
      id: 'tres-veranos',
      eyebrow: 'Lo que publica el municipio',
      h2: '¿Qué vacaciones útiles organiza la Municipalidad de Surquillo?',
      lede: 'Según sus propias notas en gob.pe, la Municipalidad de Surquillo organiza talleres de verano cada año, con decenas de disciplinas en sedes repartidas por el distrito. En enero de 2026 anunció, además, talleres de robótica.',
      body: [
        { kind: 'table', numCols: [], caption: 'Tres veranos de talleres municipales en Surquillo, según la propia municipalidad', head: ['Verano', 'Lo que publicó la municipalidad', 'Fecha de la nota'], rows: [
          ['2024', 'Vacaciones útiles "Surquillo 2024": más de 30 talleres educativos, culturales y deportivos, durante 2 meses; más de 2 mil inscritos', '8 de enero de 2024'],
          ['2025', 'Talleres de verano desde el 2 de enero de 2025, más de 40 actividades, para niños desde los tres años y jóvenes', '13 de diciembre de 2024'],
          ['2026', 'Talleres para menores de 4 a 17 años y adultos, de lunes a sábado en sedes descentralizadas; ese fin de semana empezaban fútbol flag, robótica y dibujo', '5 de enero de 2026']
        ] },
        { kind: 'source', html: 'Fuente: Municipalidad Distrital de Surquillo, notas informativas en gob.pe del 8 de enero de 2024, del 13 de diciembre de 2024 y del 5 de enero de 2026, guardadas en copia el 9 de noviembre de 2026. Las sedes que nombra la nota de 2026 son el Estadio Municipal Carlos A. Moscoso, el complejo deportivo Paul Harris-Morococha, la Casa de la Juventud y los parques Héroes de la Paz y Misericordia (Los Sauces). Las notas no publican tarifas detalladas y aquí no ponemos ninguna.' },
        { kind: 'p', mt: true, html: 'Para el verano de 2027 todavía no encontramos un anuncio en esas notas hasta el 9 de noviembre de 2026. Por el patrón de los tres años anteriores, la municipalidad suele anunciar sus talleres entre mediados de diciembre y la primera semana de enero; es una observación nuestra, no un calendario oficial.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo que da el municipio', p: 'Deporte, arte y, desde 2026, robótica, con profesores en persona y compañeros del barrio. Para un niño, eso tiene un valor propio.' },
          { h3: 'Lo que damos nosotros', p: 'Programación en vivo, en línea y en inglés, a la hora que la familia elija. Es una hora más del día, no un reemplazo del taller.' },
          { h3: 'Sin vínculo', p: 'Somos ajenos a la Municipalidad de Surquillo. Citamos sus notas para que usted compare con toda la información a la mano.' }
        ] }
      ]
    },
    {
      id: 'robotica',
      eyebrow: 'Robótica o programación',
      h2: '¿Robótica o programación en vacaciones: cuál elegir para un niño de Surquillo?',
      lede: 'Las dos se complementan, pero una va primero. Un robot sin programa no hace nada; un niño que sabe programar puede darle instrucciones a cualquier robot, a un personaje de videojuego o a una página web.',
      body: [
        { kind: 'p', html: 'En el Perú la robótica educativa no es nueva. Un documento técnico del MINEDU sobre robótica escolar recuerda que el ministerio "incorpora el uso de la robótica educativa desde el año 1996 con el proyecto Infoescuela". Y en la Hackathon 2025, según una nota del MINEDU del 4 de agosto de 2025, se premiaron equipos de estudiantes y docentes que presentaron "proyectos de IA y robótica". En ambos casos, lo que hace que el robot o el proyecto funcione es un programa.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que pasa dentro de un robot',
          left: [
            'Un robot repite un ciclo: lee sus sensores, decide qué hacer y actúa. Leer, decidir y actuar son, en código, variables, condiciones y bucles. Exactamente lo que se aprende en un curso de programación para niños.',
            'Las piezas, los motores y las ruedas cambian de un kit a otro. La lógica no cambia: un niño que domina los bucles y las condiciones entiende un robot nuevo en pocos minutos.'
          ],
          rightH3: 'Lo que hacemos nosotros',
          right: [
            'Nuestro trabajo es el código. Ningún kit forma parte de las clases: no lo vendemos, no lo despachamos y no hace falta conseguirlo. Los robots de nuestras clases viven en la pantalla: un personaje en Scratch, un carrito simulado en Python.',
            'Al niño que ya asiste a robótica en el parque o en el colegio, lo que practique aquí le servirá tal cual. Si no lo está, aprenderá la parte que después le permitirá elegir cualquier taller con ventaja.'
          ] },
        { kind: 'p', mt: true, html: 'Si quiere profundizar en por qué conviene empezar por el código a esta edad, nuestra <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">guía de programación en inglés para primaria</a> compara ambas opciones con más detalle.' }
      ]
    },
    {
      id: 'distrito',
      eyebrow: 'Surquillo en el censo',
      h2: '¿Cuántos niños viven en Surquillo?',
      lede: 'Los Censos Nacionales 2025 del INEI registraron en Surquillo 6,790 niños de 6 a 11 años y 7,333 adolescentes de 12 a 17 años, sobre 111,082 personas censadas. Con la población omitida, el distrito suma 119,236 habitantes.',
      body: [
        { kind: 'two',
          leftH3: 'Las cifras',
          left: [
            'Las edades de primaria representan el 6,1 % de la población censada de Surquillo y las de secundaria, el 6,6 % (cálculos nuestros). El censo dejó sin empadronar a 8,154 personas, que no aparecen en los grupos por edad.',
            'Por población total, Surquillo ocupa el puesto 26 entre los 43 distritos de Lima Metropolitana, según nuestro orden de las cifras del INEI.'
          ],
          rightH3: 'Para qué las usamos',
          right: [
            'Solo para darle contexto: en un distrito compacto, los talleres presenciales se llenan con vecinos y las sedes quedan cerca. Un conteo de personas no describe la vida de ninguna familia, y no lo leemos de esa manera.',
            'Lo que la modalidad virtual agrega no es cercanía, que Surquillo ya tiene, sino horario: su hijo programa a la hora que no choca con el taller del parque.'
          ] },
        { kind: 'source', mt: true, html: 'Datos: archivo del INEI con resultados del censo 2025 para la provincia de Lima, primera y tercera hojas de cuadros, versión con límites al 15 de julio de 2026. Porcentajes y puesto: cálculo propio.' }
      ]
    },
    {
      id: 'etapas',
      eyebrow: 'Plan propio de verano',
      h2: '¿Qué aprende un niño en un verano de programación orientado a robots?',
      lede: 'Proponemos tres etapas, cada una con un robot en pantalla más listo que el anterior. Es una sugerencia nuestra, sin fecha de inicio común ni duración cerrada: su hijo avanza a su paso y usted decide cuándo empezar y cuándo parar.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Etapa 1: órdenes en secuencia', p: 'El robot avanza, gira y se detiene cuando su hijo pone los bloques en el orden correcto. Se aprende que una máquina hace exactamente lo que se le dice, ni más ni menos.' },
          { h3: 'Etapa 2: repetir y decidir', p: 'El robot repite mientras tenga batería y decide qué hacer al llegar a la meta. Bucles y condiciones, como en el ejercicio de Python de esta página.' },
          { h3: 'Etapa 3: sensores simulados', p: 'El robot recibe lecturas inventadas de distancia o de luz guardadas en una lista y reacciona a cada una. Al final, su hijo diseña su propio recorrido y lo presenta en inglés.' }
        ] },
        { kind: 'source', html: 'Plan nuestro. Para los más chicos las etapas 1 y 2 se hacen con bloques; a partir de 4° de primaria, más o menos, en Python o C++. Con dos clases por semana en grupo, muchas familias cubren las tres etapas en el verano, aunque nada obliga a hacerlo así; si son clases individuales, el niño marca la velocidad.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Clase gratis.</strong> El mentor le pide a su hijo que guíe a un personaje hasta una meta dándole órdenes en voz alta. Así ve si conviene empezar con bloques o con código.',
          '<strong>Formato y horario.</strong> Usted elige grupo o clases individuales y unas horas que dejen libre el taller del municipio.',
          '<strong>Una etapa a la vez.</strong> Cada etapa cierra con un robot que funciona y una explicación del niño de por qué funciona.',
          '<strong>Errores bienvenidos.</strong> Cuando el robot choca o se queda sin batería, el mentor no da la respuesta: pregunta qué condición falló.',
          '<strong>Seguir o pausar.</strong> En marzo, su hijo puede continuar con el colegio en marcha o detenerse. Se paga mes a mes.'
        ] }
      ]
    },
    {
      id: 'robot-virtual',
      tint: 'tint',
      eyebrow: 'Ejercicio de la etapa 2',
      h2: '¿Cómo se programa un robot que se queda sin batería?',
      lede: 'Un ejercicio nuestro en Python para niños de 10 a 14 años. El robot tiene que avanzar seis casilleros y cada paso le gasta dos puntos de batería. ¿Llega o no llega?',
      body: [
        { kind: 'code', label: 'Un robot virtual en Python', lang: 'Python', code: PY, note: 'El mentor pregunta en inglés antes de correrlo: "The robot needs six steps and has ten points of battery. Will it arrive?"' },
        { kind: 'code', label: 'Lo que muestra la pantalla', lang: 'Salida', code: OUT, note: 'Resultado exacto que obtuvimos al ejecutar el archivo con Python 3. Si se cambia la primera línea a <code>battery = 12</code>, las dos últimas líneas pasan a ser <code>step 6 position 6 battery 0</code> y <code>Arrived at the goal!</code>' },
        { kind: 'ol', mt: true, items: [
          '<strong>Dos condiciones a la vez.</strong> <code>while battery > 0 and position < goal</code> significa que el robot sigue solo si le queda batería y además no ha llegado. Basta que una sea falsa para que se detenga.',
          '<strong>Predecir la cuenta.</strong> Diez puntos de batería y dos por paso alcanzan para cinco pasos. El niño hace la cuenta antes de ejecutar y comprueba que la pantalla le da la razón.',
          '<strong>¿Por qué se detuvo?</strong> Después del bucle, el <code>if</code> averigua cuál de las dos condiciones lo paró. Un robot de verdad necesita saber si llegó o si se quedó sin energía.',
          '<strong>Cambiar un número.</strong> Con <code>battery = 12</code> el robot llega justo, con cero de batería. El reto es encontrar el número mínimo de batería para una meta de 9 casilleros.',
          '<strong>Inventar su versión.</strong> Su hijo agrega una regla propia, por ejemplo una casilla de carga que suma batería, y cuenta en inglés de qué manera cambia el recorrido.'
        ] },
        { kind: 'p', mt: true, html: 'Ningún kit enseña esto por sí solo. Lo que el niño se lleva es la costumbre de preguntarse por qué se detuvo algo, en lugar de aceptar lo que muestra la pantalla. Esa costumbre le sirve igual con un robot del taller, con un juego o con una tarea de matemáticas, y no se consigue copiando una respuesta de internet.' }
      ]
    },
    {
      id: 'vecinos',
      eyebrow: 'Desde casa',
      h2: '¿Vale la pena tomar las vacaciones útiles en línea viviendo en Surquillo?',
      lede: 'Sí, sobre todo si su hijo ya tiene un taller presencial cerca. La clase en línea no compite por la misma hora ni exige otro traslado: se toma en casa, cuando el resto del día ya está ocupado.',
      body: [
        { kind: 'p', html: 'Surquillo limita con Miraflores, San Isidro, San Borja y Santiago de Surco. Las academias de programación presenciales de esos distritos quedan relativamente cerca, pero igual implican llevar y recoger al niño, esperar y volver; no le vamos a dar minutos de tráfico que no podamos comprobar. En línea, el niño termina su clase y está en casa.' },
        { kind: 'two', mt: true,
          leftH3: 'Conexión en Lima',
          left: [
            'Según el INEI, en el segundo trimestre de 2026 el 84,7 % de los hogares de Lima Metropolitana tenía servicio de internet. Para una clase en vivo basta una conexión estable; no hace falta un plan especial.',
            'Si su conexión se corta, el mentor espera unos minutos y retoma donde se quedó. Nadie pierde la clase por un corte breve.'
          ],
          rightH3: 'El idioma de la clase',
          right: [
            'Las clases son en inglés. El mentor usa frases cortas, deja por escrito cada término nuevo y adapta su acento al del niño. En el índice EF EPI 2025, Lima obtiene 555 puntos, dentro de la franja alta.',
            'Para un niño de Surquillo, eso significa practicar inglés hablado con un propósito concreto dos veces por semana, sin sumar una academia de idiomas al verano.'
          ] },
        { kind: 'p', mt: true, html: 'Para quien lee con más comodidad en inglés, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> explica estas mismas clases para colegios bilingües, y <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> resume nuestra oferta para el Perú entero.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si su hijo ya piensa como programador de robots?',
    lede: 'Tres niveles nuestros; con ellos el mentor le resume a usted, al cerrar el verano, hasta dónde llegó su hijo.',
    table: { caption: 'Tres niveles de programación de robots (nuestros)', head: ['Nivel', 'El niño puede', 'Cómo lo comprueba usted'], rows: [
      ['1. Da órdenes', 'Escribir una secuencia que lleva al robot a una meta fija', 'Le pide que le dicte los pasos en voz alta'],
      ['2. Pone reglas', 'Usar un bucle con condición y saber por qué terminó', 'Le pregunta qué pasa si se acaba la batería'],
      ['3. Reacciona', 'Hacer que el robot responda a datos que cambian', 'Le pide que invente un obstáculo nuevo']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Siéntese con su hijo frente al robot sin batería y escuche su explicación. Si le dice por qué se detuvo en la posición 5, va muy bien.',
      'No espere un robot físico al final del verano. Espere un niño que sabe dar instrucciones precisas, que es lo difícil.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Antes de ejecutar, cuente con los dedos qué va a pasar en cada paso.',
      'Si el robot no llega, no cambie todo: cambie un solo número y vuelva a probar.'
    ] }
  },

  catalogue: {
    eyebrow: 'Otros cursos',
    h2: '¿Qué más puede aprender después del verano?',
    lede: 'Nueve cursos en vivo y en inglés para seguir desde marzo, ordenados por edad.',
    bands: [
      { num: 'I', h3: 'Para empezar', sub: 'De 6 a 9 años', courses: [
        { code: 'VASU / INICIO / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonar antes de programar', blurb: 'Acertijos y patrones para los más chicos, antes del primer bloque.' },
        { code: 'VASU / INICIO / 02', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'De mover un gato en la pantalla a terminar juegos enteros.' },
        { code: 'VASU / INICIO / 03', slug: 'minecraft-coding-for-kids-course', title: 'Programar en Minecraft', blurb: 'Automatizar construcciones dentro de un mundo conocido.' }
      ] },
      { num: 'II', h3: 'Código escrito', sub: 'De 9 a 12 años', courses: [
        { code: 'VASU / CODIGO / 01', slug: 'python-ai-kids-masterclass', title: 'Python con proyectos de IA', blurb: 'Dibujos, juegos y programas que reconocen patrones.' },
        { code: 'VASU / CODIGO / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Luau', blurb: 'Mecanismos, trampas y puntajes programados dentro de un juego.' },
        { code: 'VASU / CODIGO / 03', slug: 'game-development-masterclass-for-kids', title: 'Desarrollo de videojuegos', blurb: 'Tres plataformas que los niños ya conocen, usadas para crear y no solo para jugar.' }
      ] },
      { num: 'III', h3: 'Hacia secundaria', sub: 'De 12 a 14 años', courses: [
        { code: 'VASU / SEC / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la inteligencia artificial', blurb: 'Qué datos necesita una IA y por qué sus respuestas hay que revisarlas.' },
        { code: 'VASU / SEC / 02', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'Desde los 13 años, de las bases a proyectos completos.' },
        { code: 'VASU / SEC / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Preparación para hackatones', blurb: 'Desde los 13 años, idear y presentar un proyecto en equipo.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué pasa en una clase en línea con el mentor?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del taller', l: 'Una clase temprano y el resto de la mañana libre para el parque.' },
      { time: 'Después del taller', l: 'Cuando su hijo vuelve del fútbol, la robótica o el dibujo.' },
      { time: 'Fin de la tarde', l: 'Si los padres prefieren estar en casa durante la clase.' }
    ],
    cells: [
      { h3: 'Mismo mentor', p: 'Acompaña a su hijo durante todo el curso y conoce su forma de pensar.' },
      { h3: 'Robots en pantalla', p: 'Personajes y carritos simulados; ningún equipo extra.' },
      { h3: 'El niño teclea', p: 'El mentor guía con preguntas y nunca escribe el código por él.' },
      { h3: 'Cierre por etapa', p: 'Cada etapa termina con algo que funciona y se puede mostrar.' },
      { h3: 'Aviso a la familia', p: 'Al cerrar cada etapa, usted recibe un resumen corto de lo logrado.' },
      { h3: 'Dos formatos', p: 'Un grupo de quince a veinte chicos de edades cercanas, o el mentor dedicado solo a su hijo.' }
    ]
  },

  projectsH2: 'Lo que llegan a construir nuestros estudiantes',
  projectsLede: 'Trabajos de alumnos con más tiempo programando; la galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas que familias y alumnos de otros países dejaron en Google, tal como fueron escritas, en inglés.',

  fees: {
    h2: '¿Cuánto cuestan las clases en vacaciones?',
    lede: 'No hay precio de verano: es la misma mensualidad de todo el año, sin matrícula. Aparece en dólares estadounidenses y se cobra a su tarjeta; su banco la convierte a soles según el tipo de cambio que aplique ese día.',
    free: ['Clase completa con un mentor', 'Diagnóstico de por dónde empezar', 'No se pide tarjeta'],
    group: ['Quince a veinte niños de edad cercana', 'Un mentor fijo todo el curso', 'Dos clases en vivo por semana', 'Mensualidad sin permanencia'],
    one: ['Clase solo para su hijo', 'Etapas y ritmo a su medida', 'Día y hora a elección de la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Vacaciones útiles de programación en Surquillo: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No; el idioma de todas las sesiones, siempre en vivo y por internet, es el inglés, y eso juega a favor del niño: programa y practica el idioma al mismo tiempo, con palabras como move, repeat o if que ya están en el código. El mentor habla pausado y se adapta a su acento. Lima tiene 555 puntos en el EF EPI 2025, nivel alto, así que el inglés le servirá mucho.' },
      { q: '¿Hay que comprar un kit de robótica?', a: 'No. Aquí se aprende a programar; no hay piezas, motores ni cajas que comprar o recibir. Los robots de nuestras clases son simulados en la pantalla. Lo que su hijo aprenda le servirá luego con cualquier robot real que use en el colegio o en un taller.' },
      { q: '¿Robótica o programación: qué conviene más para un niño de 9 años?', a: 'Primero programación: sin un programa que lo dirija, ningún robot se mueve. A los 9 años un niño puede pasar de bloques a sus primeras líneas de código y entender bucles y condiciones, que son la base de toda la robótica.' },
      { q: '¿Están relacionados con los talleres de la Municipalidad de Surquillo?', a: 'No. Somos una academia independiente sin ningún vínculo con la municipalidad. Mencionamos sus talleres de 2024, 2025 y 2026 tal como ella los publicó en gob.pe, para que las familias puedan combinarlos con nuestras clases.' },
      { q: '¿Cuándo pueden empezar las clases de verano?', a: 'Cuando usted lo decida: cada niño empieza por su cuenta, sin fecha común. La RM 501-2025-MINEDU cierra el último bloque de clases de 2026 el viernes 18 de diciembre; desde ahí puede arrancar cualquier semana del verano de 2027.' },
      { q: '¿Cuánto dura el verano de programación?', a: 'No hay una duración fija. Son nuestras clases mensuales normales; proponemos un plan propio en tres etapas y usted decide cuándo empieza, cuánto dura y si su hijo sigue en marzo con el colegio.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India lleva diez horas y media de ventaja todo el año: una clase a las 3:00 p. m. en Surquillo es a la 1:30 a. m. del día siguiente para el mentor.' },
      { q: '¿Qué necesita mi hijo en casa?', a: 'Laptop o PC con cámara y micrófono, audífonos para escuchar bien al mentor e internet estable. El software es gratuito y lo instalamos en la primera clase. No hace falta comprar ningún equipo.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, mes a mes, en dólares estadounidenses que su banco convierte. La clase de prueba es gratis.' },
      { q: '¿Recibe un certificado?', a: 'Sí, una constancia de finalización de Modern Age Coders cuando completa el curso. No es oficial del MINEDU ni cuenta para las notas del colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Otras páginas para familias de Surquillo',
    lede: 'Guías relacionadas; si el título está en inglés, el texto también.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'Qué conviene aprender en cada grado de primaria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra oferta completa para familias del Perú.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding in Lima', p: 'Programación en inglés para colegios bilingües de Lima.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'Una introducción a la IA pensada para la edad de primaria.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Antes de abrirle una cuenta de IA a su hijo, revise aquí la edad mínima.' },
      { href: '/courses', label: 'All courses', p: 'Todo nuestro catálogo, para cualquier edad.' }
    ]
  },

  start: {
    h2: 'Reserve una clase gratis para el verano',
    lede: 'Marque la fecha y la hora en el reloj de Perú. En la clase, el mentor le propone a su hijo guiar un robot en pantalla hasta una meta y, según cómo lo resuelve, le recomienda a usted el curso y el formato para las vacaciones.',
    readFirst: 'Puede conocer antes nuestro método en <a class="ag-inline-link" href="/how-we-teach">How we teach</a> o ver la lista de <a class="ag-inline-link" href="/courses">All courses</a> (las dos en inglés).',
    note: 'Las clases se dictan en vivo y en inglés por mentores en la India. Nuestro WhatsApp, en cambio, le responde en castellano.',
    formNote: 'Gratis y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos recomendados', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Pensamiento computacional' },
        { href: '/courses/cpp-programming-for-kids-course', label: 'C++ para niños' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Guías', links: [
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en el Perú' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Primero el programa, después el robot'
  },

  personalityCss: `
.ag-root.ag-vasu .ag-hero h1 { max-width: 22ch; letter-spacing: -0.01em; }
.ag-root.ag-vasu .ag-capsule { border-left-width: 5px; }
.ag-root.ag-vasu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-vasu .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-vasu .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'Municipalidad Distrital de Surquillo on gob.pe (notes of 8 January 2024, 13 December 2024 and 5 January 2026 on its summer workshops, including robotics in 2026); INEI Censos Nacionales 2025 (Lima Metropolitana workbook, Cuadros 1 and 3); MINEDU DITE robotics paper (Infoescuela, 1996); MINEDU note of 4 August 2025 (Hackathon 2025, AI and robotics); RM 501-2025-MINEDU Tabla 1; INEI TIC II trimestre 2026; EF EPI 2025; tzdata. The three-stage plan, the three levels and the robot exercise are ours.',
    localProject: 'A virtual robot for a child of 10 to 14 in Surquillo: a Python while loop with two exit conditions (battery > 0 and position < goal) moves the robot one square per step at two battery points a step; with battery 10 it stops at position 5 ("Stopped: battery empty at position 5"), with battery 12 it arrives with 0 left ("Arrived at the goal!"), and an if after the loop says which condition stopped it. Run with python3 -I. No hardware. Lesson family: while loops with two exit conditions.',
    requiredMentions: ['Stopped: battery empty at position 5', 'Arrived at the goal!', 'proyecto Infoescuela', 'fútbol flag, robótica y dibujo', 'Paul Harris-Morococha', '6,790 niños de 6 a 11 años', '119,236 habitantes', 'Tres veranos de talleres municipales en Surquillo', 'Primero el programa, después el robot', 'el puesto 26 entre los 43 distritos'],
    sources: [
      { claim: 'Surquillo 2026 summer workshops for ages 4 to 17 and adults, Monday to Saturday, named venues, robotics starting that weekend (5 January 2026).', url: 'https://www.gob.pe/institucion/munisurquillo/noticias/1329571-surquillo-ninos-jovenes-y-adultos-activados-con-talleres-de-verano-2026' },
      { claim: 'Surquillo 2025 summer workshops from 2 January 2025, more than 40 activities, from age three (13 December 2024).', url: 'https://www.gob.pe/institucion/munisurquillo/noticias/1073831-municipalidad-de-surquillo-organiza-mas-de-40-talleres-de-verano-para-ninos-y-jovenes' },
      { claim: 'Vacaciones útiles "Surquillo 2024": more than 30 workshops, two months, more than 2,000 enrolled (8 January 2024).', url: 'https://www.gob.pe/institucion/munisurquillo/noticias/891261-ninos-jovenes-y-padres-de-familia-felices-con-las-vacaciones-utiles-surquillo-2024' },
      { claim: 'Surquillo 119,236 total, 111,082 censused, 8,154 omitted; 6,790 aged 6 to 11 and 7,333 aged 12 to 17 (Censos Nacionales 2025).', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/27/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'MINEDU has used educational robotics since 1996 (Infoescuela).', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Hackathon 2025 rewarded student and teacher projects in AI and robotics (4 August 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'Lima Metropolitana households with internet 84.7% (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '2026 school year last teaching block to 18 December 2026.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only (capsule and FAQ).',
      'Robot kits or hardware: refused; the page says three times that we teach programming only, with robots simulated on screen.',
      'A summer camp length, start date or price: refused; the three-stage plan is labelled ours; fees come from the template.',
      'Municipal fees or a 2027 municipal calendar: none published; the page prints none and labels the December to January announcement pattern as our observation.',
      'Any link with the Municipalidad de Surquillo: refused; the page says we have none and leaves out the mayor\'s name and the quoted parents.',
      'Income or class statements about Surquillo (INEI strata flag it in the research): refused; only population and age counts are used.',
      'Commute times to neighbouring districts: refused; no verified figure.'
    ]
  }
};

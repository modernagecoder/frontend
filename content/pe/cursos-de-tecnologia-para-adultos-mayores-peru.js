// SHIP: market | Adultos mayores en Perú: tecnología más allá de lo básico, uno a uno y a su ritmo, desde casa | Unicode normalisation: search a contact list ignoring accents and capitals (and the ñ trade-off)
'use strict';
// Cursos de tecnología para adultos mayores en Perú (ag- Spanish-language door, Peru cluster row PE158, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. No health data (brief rule 10).
// Angle: "computación para adultos mayores en lima", "cursos para adultos mayores en lima", "cursos de computación para adultos
// mayores gratis", "clases de programación para adultos mayores", "dónde estudiar computación para adultos mayores"
// (autocomplete_pe.tsv). Honest spine: we are not a basic-computing workshop; municipal CIAMs (Ley 30490) exist for that and
// are often free. We are for the person of 60 or more who already uses a phone or computer and wants more: programming, AI
// tools used with judgement, spreadsheets, a website, maths for pleasure, live and one to one, in English, from home.
// Facts: who counts as adulto mayor (Ley 30490), how many (INEI 2024 projection), internet use by age (INEI 2026), phones,
// work after 60 (INEI EPEN 2024), households (INEI 2024), English after 41 (EF EPI 2025). One original Python lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/cursos-de-tecnologia-para-adultos-mayores-peru/;
// fetched and read 2026-11-09; quotes grepped in the raw text):
//  Ley N.° 30490, Ley de la Persona Adulta Mayor, El Peruano, jueves 21 de julio de 2016 (ley30490.pdf/.txt, from
//   https://cdn.www.gob.pe/uploads/document/file/3766931/Ley%20N%C2%B0%2030490.pdf): "Entiéndese por persona adulta mayor a
//   aquella que tiene 60 o más años de edad."; Art. 5 g) "Acceder a programas de educación y capacitación."; Art. 10 "Los
//   centros integrales de atención al adulto mayor (CIAM) son espacios creados por los gobiernos locales"; Art. 11 c)
//   "Coordinar el desarrollo de actividades educacionales con las instancias pertinentes, con especial énfasis en la labor de
//   alfabetización."
//  INEI press note, 25 de agosto de 2024 (n1010099.txt): "de acuerdo con las proyecciones de población al año 2024, los adultos
//   mayores en nuestro país totalizan 4 millones 747 mil 803, los cuales representan el 13,9% de la población total del
//   país."; "Al conmemorarse el Día del Adulto Mayor este 26 de agosto"; "el 24,1% son unipersonales (compuestos solo por el
//   adulto mayor)".
//  INEI press note, 26 de marzo de 2025 (inei-1133454.txt): "en el cuarto trimestre del año 2024, el 42,0 % de los hogares del
//   país contaron con la presencia, entre sus miembros, de por lo menos una persona de 60 y más años de edad"; "en Lima
//   Metropolitana, el 46,2 % de los hogares tiene a una persona adulta mayor".
//  INEI press note, 30 de setiembre de 2024 (inei-1031021.txt): "en el trimestre abril-mayo-junio 2024, el 50,6% de los
//   adultos mayores participan activamente en el mercado de trabajo"; "la población de 60 a 69 años de edad (68,3%)".
//  INEI boletín TIC II Trimestre 2026 (inei_tic_iit2026.txt), Cuadro 2.1, internet use by age group, 2023 2024 2025 2026:
//   Total "77,6 80,0 81,0 84,2"; 6 a 11 "60,1 61,7 61,5 68,2"; 12 a 18 "89,7 91,4 90,7 92,5"; 19 a 24 "95,6 96,4 96,4 97,3";
//   "25 a 40 años 90,9 92,7 93,9 95,2"; "41 a 59 años 76,5 79,9 81,9 86,0"; "60 y más 40,8 47,3 50,2 56,7"; text "en la
//   población de 60 y más años (56,7%)"; celular use "60 y más 81,5 84,4 85,1 85,2" and "en los adultos mayores de 60 y más años
//   con 85,2%".
//  EF EPI 2025 Peru page (ef_peru.raw): "ageGroup5Score":509, "ageGroup5ProficiencyBand":"moderate" (41+).
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculation (python3 -I): 56,7 - 40,8 = 15,9 points (60+, 2023 to 2026).
// Our own example, run with python3 -I (agenda.py and agenda_v2.py in the src-pages folder), exact output:
//   agenda.py: Search finished   (the search for 'jose' finds nothing)
//   agenda_v2.py: jose -> José Quispe / MARIA -> María Elena Rojas / pena -> Rosa Peña
// Lesson family: Unicode normalisation (NFD, drop combining marks) plus lower() to compare text the way people type it, and
// the trade-off it brings: the tilde of the ñ disappears too, so "pena" finds "Peña".

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "contactos = ['José Quispe', 'María Elena Rojas', 'Raúl Mamani', 'Rosa Peña', 'Jorge Huamán']",
  '',
  "buscado = 'jose'",
  'for nombre in contactos:',
  '    if buscado in nombre:',
  "        print('Found:', nombre)",
  "print('Search finished')"
].join('\n');

const OUT = 'Search finished';

const PY2 = [
  'import unicodedata',
  '',
  'def sencillo(texto):',
  "    separado = unicodedata.normalize('NFD', texto)",
  "    sin_tildes = ''.join(c for c in separado if unicodedata.category(c) != 'Mn')",
  '    return sin_tildes.lower()',
  '',
  "contactos = ['José Quispe', 'María Elena Rojas', 'Raúl Mamani', 'Rosa Peña', 'Jorge Huamán']",
  '',
  "for buscado in ['jose', 'MARIA', 'pena']:",
  '    for nombre in contactos:',
  '        if sencillo(buscado) in sencillo(nombre):',
  "            print(buscado, '->', nombre)"
].join('\n');

const OUT2 = [
  'jose -> José Quispe',
  'MARIA -> María Elena Rojas',
  'pena -> Rosa Peña'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Tecnología para adultos mayores' },
  slug: 'cursos-de-tecnologia-para-adultos-mayores-peru',
  code: 'cta',
  accent: '#335A00',
  accentRationale: 'Cursos de tecnología para adultos mayores: a calm olive-leaf green #335A00, chosen for steady contrast at the larger text sizes older readers prefer, and kept apart from the moss #255500 of the adults page; allocated in alloc.tsv and checked by the build for at least 4.5:1 on every paper tint',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cursos de tecnología para adultos mayores en Perú',
  title: 'Cursos de tecnología para adultos mayores en Perú, en vivo',
  description: 'Cursos de tecnología para adultos mayores de 60 años en Perú: programación, IA y hojas de cálculo, en vivo, en inglés y uno a uno desde casa, al ritmo de cada uno.',
  ogDescription: 'Tecnología para adultos mayores en Perú, más allá de lo básico: programación, IA y hojas de cálculo en clases en vivo y en inglés, con datos del INEI y la Ley 30490.',
  twitterDescription: 'Para personas de 60 años o más en Perú que ya usan el celular y quieren más: programación, IA y datos, en vivo, en inglés y a su ritmo.',
  pageName: 'Cursos de tecnología para adultos mayores en Perú',
  webPageDescription: 'Guía para personas de 60 años o más en Perú, y para sus familias, sobre cursos de tecnología dictados en vivo y en inglés: quién es adulto mayor según la Ley 30490, cuántos adultos mayores usan internet según el INEI de 2026, en qué se diferencia un taller de computación básica de nuestros cursos, qué se puede aprender después de los 60 y una primera clase de Python escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de tecnología para adultos mayores de 60 años en todo el Perú, dictadas solo en inglés: programación en Python desde cero, herramientas de inteligencia artificial, hojas de cálculo y datos, y una primera página web, preferentemente en clases individuales y en el horario que la persona elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Tecnología para adultos mayores',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#para-quien', label: 'Para quién' },
    { href: '#internet', label: 'Datos INEI' },
    { href: '#basico', label: 'Lo básico' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#clases', label: 'Las clases' }
  ],
  eyebrow: 'Perú &middot; Adultos mayores &middot; Desde los 60 años',
  h1: 'Cursos de tecnología para adultos mayores, en vivo y desde casa',
  lede: 'Si tiene 60 años o más, ya usa el celular para WhatsApp y videollamadas, y siente curiosidad por lo que hay detrás de la pantalla, esta página es para usted. También para el hijo, la hija o el nieto que busca un curso para su mamá, su papá o su abuelo. Explicamos con honestidad qué enseñamos, qué no y cómo son las clases.',
  secondaryCta: { href: '#para-quien', label: '¿Es para mí este curso?' },
  wa: 'Hola Modern Age Coders, tengo más de 60 años, vivo en Perú y me interesa aprender tecnología con ustedes. ¿Puedo agendar una clase gratis?',
  heroNote: 'Estudiantes de 6 a 67 años &middot; clases en vivo desde 2020 &middot; uno a uno, con paciencia y sin apuro',
  spec: [
    ['Para quién', 'Personas de 60 años o más que ya usan celular o computadora'],
    ['Qué se aprende', 'Programación, IA, hojas de cálculo y una web propia'],
    ['Formato', 'Clases individuales, recomendadas; también en grupo'],
    ['Ritmo', 'El suyo, sin exámenes ni apuro'],
    ['Dónde', 'Desde su casa, por videollamada'],
    ['Idioma', 'Las clases son en inglés']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Modern Age Coders enseña tecnología a adultos mayores de 60 años en todo el Perú, en vivo, en línea y en inglés: programación en Python desde cero, herramientas de inteligencia artificial usadas con criterio, hojas de cálculo y una primera página web. No es un taller de computación básica: es para quien ya maneja el celular o la computadora y quiere ir más allá. Recomendamos clases individuales, a la hora que usted elija, con un mentor desde la India que explica con calma y respeta su ritmo.',

  picks: {
    eyebrow: 'Para empezar',
    h2: 'Tres cursos que eligen nuestros estudiantes mayores',
    lede: 'Uno para entender cómo piensa una computadora, uno para usar la inteligencia artificial sin miedo y sin ingenuidad, y uno para tener una página propia en internet.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CTA / 01', title: 'Python desde cero', alt: 'Imagen del curso de Python desde cero', note: 'El curso más completo para aprender a programar. En clases individuales avanza a su ritmo: hay quien recorre un tema por semana y quien se queda un mes en él, y las dos cosas están bien.' },
      { course: 'ai-tools-mastery-complete-college', code: 'CTA / 02', title: 'Herramientas de IA', alt: 'Imagen del curso de herramientas de inteligencia artificial', note: 'ChatGPT, Claude y otras herramientas: qué pueden hacer, cómo preguntarles y, sobre todo, cuándo no creerles. Útil también para reconocer textos, voces e imágenes falsas.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'CTA / 03', title: 'Su primera página web', alt: 'Imagen del curso de HTML y CSS para principiantes', note: 'HTML y CSS para publicar una página propia: las recetas de la familia, las fotos de un viaje o la historia de su barrio, escrita y diseñada por usted.' }
    ]
  },

  sections: [
    {
      id: 'para-quien',
      eyebrow: 'Para quién es',
      h2: '¿Son estos cursos para un adulto mayor que recién empieza con la tecnología?',
      lede: 'Depende de dónde empiece. Si todavía le cuesta encender la computadora o usar el mouse, le conviene primero un taller de computación básica, presencial y en castellano. Si ya usa el celular con soltura y quiere aprender algo nuevo de verdad, nuestros cursos son para usted.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Sí es para usted si...', p: 'usa WhatsApp, hace videollamadas, busca cosas en internet y le da curiosidad saber cómo funcionan. Puede escribir en un teclado, aunque sea despacio, y entiende algo de inglés o quiere practicarlo.' },
          { h3: 'Todavía no, si...', p: 'necesita ayuda para prender la computadora, abrir un programa o conectarse a internet. En ese caso empiece con lo básico y vuelva cuando lo domine; aquí lo esperamos.' },
          { h3: 'Si duda', p: 'Reserve la clase gratis. En media hora el mentor verá con usted qué tan cómodo se siente con la computadora y le dirá con franqueza si conviene empezar ya o más adelante.' }
        ] },
        { kind: 'p', mt: true, html: 'En el Perú, la Ley N.° 30490, Ley de la Persona Adulta Mayor, publicada en El Peruano el 21 de julio de 2016, define con claridad quiénes somos los destinatarios de esta página: "Entiéndese por persona adulta mayor a aquella que tiene 60 o más años de edad". La misma ley reconoce, entre los derechos de la persona adulta mayor, el de "Acceder a programas de educación y capacitación". Nosotros no somos un programa del Estado ni estamos vinculados a ninguno; somos una academia privada que enseña en línea, y tomamos ese derecho como un buen punto de partida.' },
        { kind: 'p', html: 'Nuestros estudiantes llegan de 6 a 67 años. Entre los mayores hay profesionales jubilados que quieren entender la inteligencia artificial de la que hablan sus nietos, ingenieros que programaron hace décadas y quieren ponerse al día, docentes que buscan una herramienta nueva y personas que siempre quisieron aprender a programar y nunca tuvieron tiempo. Lo que comparten es la curiosidad, no un nivel de partida.' }
      ]
    },
    {
      id: 'internet',
      eyebrow: 'Lo que dicen los datos',
      h2: '¿Cuántos adultos mayores usan internet en el Perú?',
      lede: 'Más de la mitad, y la cifra crece más rápido que en casi cualquier otro grupo de edad. Según el INEI, en el segundo trimestre de 2026 usó internet el 56,7 % de la población de 60 y más años, frente al 40,8 % en 2023.',
      body: [
        { kind: 'table', numCols: [1, 2, 3, 4], caption: 'Perú: población de 6 y más años que usa internet, por grupo de edad, II trimestre (porcentaje)', head: ['Grupo de edad', '2023', '2024', '2025', '2026'], rows: [
          ['De 6 a 11 años', '60,1', '61,7', '61,5', '68,2'],
          ['De 12 a 18 años', '89,7', '91,4', '90,7', '92,5'],
          ['De 19 a 24 años', '95,6', '96,4', '96,4', '97,3'],
          ['De 25 a 40 años', '90,9', '92,7', '93,9', '95,2'],
          ['De 41 a 59 años', '76,5', '79,9', '81,9', '86,0'],
          ['De 60 y más años', '40,8', '47,3', '50,2', '56,7'],
          ['Total', '77,6', '80,0', '81,0', '84,2']
        ] },
        { kind: 'source', html: 'Fuente: Instituto Nacional de Estadística e Informática (INEI), boletín "Estadísticas de las Tecnologías de Información y Comunicación en los Hogares", II Trimestre 2026, Cuadro N.° 2.1, con datos de la Encuesta Nacional de Hogares; cifras de 2026 preliminares. Leído el 9 de noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'De 2023 a 2026 el uso de internet entre las personas de 60 años o más subió 15,9 puntos (cálculo nuestro: 56,7 menos 40,8), el mayor avance de la tabla. Aun así, sigue siendo el grupo con menor uso, por debajo incluso de los niños de 6 a 11 años. El celular es la puerta de entrada: el mismo boletín indica que el 85,2 % de los adultos mayores de 60 y más años usó un teléfono celular en el segundo trimestre de 2026.' },
        { kind: 'p', html: 'Son muchas personas. Según las proyecciones de población del INEI para 2024, los adultos mayores del país sumaban 4 millones 747 mil 803, el 13,9 % de la población total; el instituto difundió el dato con motivo del Día del Adulto Mayor, el 26 de agosto. Y la mitad sigue activa: la encuesta de empleo del INEI encontró que, entre abril y junio de 2024, el 50,6 % de los adultos mayores participaba en el mercado de trabajo, porcentaje que llegaba al 68,3 % entre quienes tienen de 60 a 69 años.' }
      ]
    },
    {
      id: 'basico',
      eyebrow: 'Computación básica',
      h2: '¿Dónde aprender computación básica para adultos mayores en Lima?',
      lede: 'Para lo básico, en el CIAM de su municipalidad o en talleres presenciales cerca de casa. La Ley 30490 encarga a los gobiernos locales los centros integrales de atención al adulto mayor, y cada uno decide sus actividades. Nosotros empezamos donde esos talleres terminan.',
      body: [
        { kind: 'p', html: 'La ley define los CIAM como "espacios creados por los gobiernos locales" para la participación e integración social, económica y cultural de la persona adulta mayor, y entre sus funciones está coordinar actividades educativas "con especial énfasis en la labor de alfabetización". Cada municipalidad decide qué talleres ofrece y en qué horario; conviene preguntar directamente en la suya. No tenemos relación con ningún CIAM ni con ninguna municipalidad.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Taller de computación básica y nuestros cursos, comparados (nuestra comparación)', head: ['', 'Taller de computación básica', 'Nuestros cursos'], rows: [
          ['Punto de partida', 'Encender el equipo, mouse, teclado, carpetas', 'Ya usa celular o computadora con soltura'],
          ['Qué se aprende', 'Correo, Word, navegar con seguridad', 'Programar, IA, hojas de cálculo a fondo, una web'],
          ['Dónde', 'Presencial, en un local', 'En su casa, por videollamada'],
          ['Idioma', 'Castellano', 'Inglés, con paciencia'],
          ['Formato', 'Grupo', 'Individual de preferencia, o grupo'],
          ['Costo', 'Lo fija cada municipalidad o local; consulte allí', 'Mensualidad, con una clase de prueba gratis']
        ] },
        { kind: 'p', mt: true, html: 'Si es usted quien busca para un familiar, una buena regla es esta: cuando la persona pueda unirse sola a una videollamada y compartir su pantalla, está lista para nuestras clases. Antes de eso, un taller presencial le dará la confianza que necesita, y la compañía de otras personas de su edad, que también cuenta.' }
      ]
    },
    {
      id: 'que-aprender',
      eyebrow: 'Qué aprender',
      h2: '¿Qué puede aprender de tecnología una persona de más de 60 años?',
      lede: 'Lo mismo que cualquier otra persona, con un orden pensado para disfrutarlo. Estas son las cuatro rutas que más eligen nuestros estudiantes mayores.',
      body: [
        { kind: 'ol', items: [
          '<strong>Programar por el gusto de entender.</strong> Python desde cero: pequeños programas que ordenan una lista de contactos, calculan, juegan con palabras. Es un ejercicio mental exigente y entretenido, parecido a un buen crucigrama que además hace algo útil.',
          '<strong>La inteligencia artificial, sin miedo y sin ingenuidad.</strong> Cómo funciona un asistente como ChatGPT o Claude, cómo preguntarle bien y cómo comprobar lo que dice. Incluye aprender a sospechar de mensajes, audios o fotos que parecen reales y no lo son.',
          '<strong>Hojas de cálculo de verdad.</strong> Llevar las cuentas del hogar o de un pequeño negocio, hacer gráficos y entender las fórmulas, con apoyo de IA cuando conviene.',
          '<strong>Una página web propia.</strong> HTML y CSS para publicar algo suyo: recetas, memorias, un catálogo de su taller o la historia de la familia para los nietos.'
        ] },
        { kind: 'p', mt: true, html: 'Muchas personas mayores nos dicen que quieren entender el mundo en el que crecen sus nietos. Un abuelo que sabe qué es un programa y cómo se equivoca una IA puede conversar con sus nietos sobre lo que hacen, y no solo mirarlos. Si sus nietos también están aprendiendo, puede ver nuestras páginas de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">programación para niños en inglés</a> y de <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a>.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una primera clase de programación a los 65 años?',
      lede: 'Así se ve un ejercicio real de las primeras semanas, escrito por nosotros: buscar a una persona en una lista de contactos. Es un problema que todos conocemos del celular, y tiene una trampa muy peruana: las tildes.',
      body: [
        { kind: 'code', label: 'Versión 1: buscar un nombre', lang: 'Python', code: PY, note: 'La lista <code>contactos</code> guarda cinco nombres. El programa recorre la lista y muestra los que contienen el texto buscado.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Esta es toda la salida, tal como apareció al correr el programa con Python 3: ningún resultado. Buscamos "jose" y en la lista dice "José", con tilde y mayúscula.' },
        { kind: 'p', mt: true, html: 'El mentor pregunta: "Why didn\'t it find José?" La respuesta llega despacio y es valiosa: para la computadora, la <code>é</code> con tilde y la <code>e</code> sin tilde son letras distintas, y la <code>J</code> mayúscula no es la <code>j</code> minúscula. Las personas escribimos rápido, sin tildes y en minúsculas; el programa tiene que aprender a comparar como comparamos nosotros.' },
        { kind: 'code', label: 'Versión 2: comparar sin tildes ni mayúsculas', lang: 'Python', code: PY2, note: 'La función <code>sencillo</code> separa cada letra de su tilde (eso hace <code>normalize(\'NFD\')</code>), descarta las tildes y pasa todo a minúsculas. Se aplica tanto al nombre como a lo que se busca.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta de la segunda versión, también ejecutada por nosotros con Python 3.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Lo que se arregló.</strong> Ahora "jose" encuentra a José Quispe y "MARIA", escrito todo en mayúsculas, encuentra a María Elena Rojas.',
          '<strong>Lo que hay que pensar.</strong> "pena" encontró a Rosa Peña. La función quitó también la virgulilla de la <code>ñ</code>, porque para Unicode es una marca sobre la <code>n</code>, como una tilde. En castellano, sin embargo, la ñ es una letra propia, y "pena" y "Peña" son palabras distintas.',
          '<strong>Decidir.</strong> ¿Es un error o una ventaja? En un buscador de contactos probablemente conviene, porque mucha gente escribe sin ñ en el celular. En un diccionario sería un error. El estudiante lo explica en inglés con sus palabras.',
          '<strong>Llevarlo a su vida.</strong> El reto es armar su propia lista de contactos o de recetas y buscar en ella como lo haría en el celular.'
        ] },
        { kind: 'p', mt: true, html: 'Nada de esto requiere apuro. En una clase individual, este ejercicio puede ocupar una sesión entera o dos, con pausas para preguntar, repetir y volver atrás. Lo importante es que al final usted entienda por qué su celular a veces no encuentra a una persona, y que sepa explicarlo.' }
      ]
    },
    {
      id: 'clases',
      eyebrow: 'Cómo son las clases',
      h2: '¿Cómo son las clases online para adultos mayores, y por qué en inglés?',
      lede: 'Son clases en vivo por videollamada, de preferencia individuales: usted, su mentor y su pantalla compartida. Se dictan en inglés, con frases claras y tiempo para responder.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que cuidamos',
          left: [
            'Paciencia y repetición. El mentor explica lo mismo de otra forma tantas veces como haga falta y nunca pasa al tema siguiente sin comprobar que usted entendió.',
            'Letra grande y pantalla clara. Le ayudamos a ampliar el texto en su computadora y a ordenar las ventanas para que nada le canse la vista.',
            'Nada de cuentas innecesarias. Solo pedimos crear las cuentas que el curso realmente requiere, y le explicamos para qué sirve cada una antes de hacerlo.'
          ],
          rightH3: 'El inglés, sin miedo',
          right: [
            'Las clases son en inglés porque así enseñamos en todos los países, y porque el código ya está escrito en palabras inglesas. No hace falta hablarlo con fluidez: basta entender lo básico y tener ganas de practicar.',
            'El índice EF EPI 2025 da a los peruanos de 41 años en adelante un nivel moderado de inglés, con 509 puntos. Para muchas personas mayores la clase se vuelve, además, una práctica de idioma que no esperaban tener.'
          ] },
        { kind: 'p', mt: true, html: 'El horario lo pone usted. Los mentores viven en la India, que va diez horas y media adelante del Perú durante todo el año: una clase a las 10:00 a. m. en Lima es a las 8:30 p. m. allá, y una a las 6:00 p. m. en Lima, a las 4:30 a. m. del día siguiente. Usted reserva siempre en hora peruana; esos ejemplos son solo conversiones.' },
        { kind: 'p', html: 'Para la familia: el INEI informó que en el cuarto trimestre de 2024 el 42,0 % de los hogares del país tenía entre sus miembros al menos a una persona de 60 años o más, y en Lima Metropolitana el 46,2 %. En agosto de 2024 añadió que el 24,1 % de los hogares encabezados por un adulto mayor eran unipersonales. Una clase en vivo, a una hora fija de la semana, es también una cita con alguien que espera la conexión.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'A su ritmo',
    h2: '¿Cómo se nota el avance de un adulto mayor en las clases?',
    lede: 'Sin exámenes ni notas. Estas son las señales, nuestras, que el mentor comparte con usted y, si lo desea, con su familia.',
    table: { caption: 'Señales de avance para estudiantes mayores (nuestras)', head: ['Señal', 'Momento habitual', 'Lo que usted ya puede hacer'], rows: [
      ['1. Entrar solo', 'Primeras semanas', 'abrir la videollamada, compartir la pantalla y abrir el editor sin ayuda'],
      ['2. Leer un programa', 'Primer mes', 'decir qué hace un programa corto antes de ejecutarlo'],
      ['3. Cambiar algo', 'Segundo mes', 'modificar un programa, como la lista de contactos, y predecir el resultado'],
      ['4. Encontrar el error', 'Tercer mes', 'descubrir por qué algo no funciona, como la búsqueda sin tildes'],
      ['5. Crear algo suyo', 'Cuando usted quiera', 'terminar un proyecto propio y mostrárselo a su familia']
    ] },
    left: { h3: 'Para usted', ps: [
      'No compare su ritmo con el de nadie. Cada semana en que entiende algo nuevo es una buena semana.',
      'Anote en un cuaderno las palabras nuevas, en inglés y en castellano, junto a un ejemplo.'
    ] },
    right: { h3: 'Para la familia', ps: [
      'Acompañe la primera clase si su familiar lo pide, sobre todo para lo técnico. Luego deje que la clase sea suya.',
      'Pregúntele qué aprendió, no cuánto avanzó. Escuchar la explicación vale más que cualquier informe.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más que eligen las personas mayores',
    lede: 'Todos en vivo y en inglés, individuales o en grupo, al ritmo de cada estudiante.',
    bands: [
      { num: 'I', h3: 'Datos y diseño', sub: 'Para el día a día', courses: [
        { code: 'CTA / DIA / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Hojas de cálculo y datos', blurb: 'Excel, Sheets y Power BI con ayuda de IA, sin saber programar.' },
        { code: 'CTA / DIA / 02', slug: 'canva-ai-design-masterclass', title: 'Diseño con Canva e IA', blurb: 'Invitaciones, afiches y álbumes con un diseño cuidado.' },
        { code: 'CTA / DIA / 03', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos', blurb: 'De la pregunta al gráfico, con Excel, SQL y Python.' }
      ] },
      { num: 'II', h3: 'Programar más', sub: 'Para seguir después de Python', courses: [
        { code: 'CTA / CODIGO / 01', slug: 'python-ai-automation-masterclass-college', title: 'Automatizar con Python', blurb: 'Programas que hacen por usted las tareas repetitivas.' },
        { code: 'CTA / CODIGO / 02', slug: 'pcep-pcap-python-certification-course', title: 'Certificación de Python', blurb: 'Para quien quiere ponerse una meta y rendir el PCEP.' },
        { code: 'CTA / CODIGO / 03', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa por dentro', blurb: 'Cómo funcionan los modelos de lenguaje, explicado paso a paso.' }
      ] },
      { num: 'III', h3: 'Matemática por gusto', sub: 'Para ejercitar la mente', courses: [
        { code: 'CTA / MATE / 01', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'Entender encuestas, riesgos y noticias con números.' },
        { code: 'CTA / MATE / 02', slug: 'college-mathematics-complete-masterclass', title: 'Matemática superior', blurb: 'Cálculo y álgebra lineal para quien quiere retomarlos.' },
        { code: 'CTA / MATE / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Matemática de los datos', blurb: 'La estadística y el álgebra que hay detrás de la IA.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cuándo y cómo son las clases?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Media mañana', l: 'Una hora tranquila, después del desayuno.' },
      { time: 'Primera tarde', l: 'Después del almuerzo y antes de que oscurezca.' },
      { time: 'Cuando usted diga', l: 'En individuales, la hora se cambia con aviso.' }
    ],
    cells: [
      { h3: 'Uno a uno', p: 'Recomendamos clases individuales para empezar.' },
      { h3: 'Sin apuro', p: 'Se avanza cuando usted entendió, no antes.' },
      { h3: 'Mentor fijo', p: 'La misma persona todo el curso, que conoce su ritmo.' },
      { h3: 'Pantalla cómoda', p: 'Letra grande y ventanas ordenadas desde la primera clase.' },
      { h3: 'En inglés claro', p: 'Frases cortas, ejemplos en pantalla y tiempo para responder.' },
      { h3: 'Desde casa', p: 'Sin traslados, con su propia computadora.' }
    ]
  },

  projectsH2: 'Lo que crean nuestros estudiantes',
  projectsLede: 'Una muestra de proyectos de estudiantes de distintas edades; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas que familias y estudiantes dejaron en Google, sin cambios y en inglés.',

  fees: {
    h2: 'Precios para adultos mayores en Perú',
    lede: 'El precio mensual aparece en dólares estadounidenses y se paga con tarjeta. El banco convierte el monto a su moneda, por lo que el cargo en su estado de cuenta puede diferir ligeramente según el tipo de cambio.',
    free: ['Una clase de prueba gratis', 'Le ayudamos a dejar lista la computadora', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte estudiantes adultos', 'Un mentor durante todo el curso', 'Dos clases en vivo por semana', 'Mes a mes, sin permanencia'],
    one: ['Usted y su mentor, nadie más', 'El ritmo y los temas que usted elija', 'Recomendado para empezar']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Cursos de tecnología para adultos mayores: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todas nuestras clases son en inglés, en vivo y en línea. Para muchas personas mayores eso es parte del atractivo: aprenden tecnología y practican un idioma en la misma hora. El mentor habla despacio, repite con otras palabras y espera su respuesta. Según el EF EPI 2025, Lima tiene un nivel alto de inglés, y la práctica hablada es lo que más ayuda a ganar soltura.' },
      { q: '¿Enseñan computación básica, como usar el mouse o el correo?', a: 'No. Nuestros cursos empiezan donde termina la computación básica. Para lo básico le recomendamos un taller presencial; pregunte en el CIAM de su municipalidad qué ofrece. Vuelva cuando pueda conectarse solo a una videollamada.' },
      { q: '¿Desde qué edad se considera adulto mayor en el Perú?', a: 'Desde los 60 años, según el artículo 2 de la Ley N.° 30490, Ley de la Persona Adulta Mayor. Nuestros estudiantes tienen de 6 a 67 años, y no ponemos un límite superior.' },
      { q: '¿Es posible aprender a programar después de los 60?', a: 'Sí. Se necesita curiosidad, paciencia y práctica constante, no juventud. En clases individuales el ritmo lo pone usted, y nadie le apura.' },
      { q: '¿Qué necesito en casa?', a: 'Una computadora o laptop con teclado, cámara y micrófono, y una conexión estable. Con un celular o una tablet no se puede programar con comodidad. Si lo desea, un familiar puede acompañarle en la primera clase.' },
      { q: '¿Conviene más una clase individual o en grupo?', a: 'Para empezar recomendamos clases individuales: el mentor se adapta por completo a su ritmo y a sus preguntas. Más adelante, si le gusta compartir con otros, puede pasar a un grupo.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre la India y el Perú hay diez horas y media de diferencia todo el año; usted elige siempre en hora de Lima.' },
      { q: '¿Las clases son gratuitas para adultos mayores?', a: 'La primera clase es gratis. Después se paga una mensualidad, que aparece en dólares estadounidenses en esta página. No somos un programa del Estado ni de una municipalidad.' },
      { q: '¿Dan certificado?', a: 'Al completar un curso entregamos un certificado de finalización de Modern Age Coders. Es nuestro, no tiene validez oficial y no lo otorga ninguna institución pública.' },
      { q: '¿Están vinculados al MIMP, a un CIAM o a una municipalidad?', a: 'No. Somos una academia privada en línea, sin relación con el Ministerio de la Mujer y Poblaciones Vulnerables, con los CIAM ni con ninguna municipalidad.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Otras páginas',
    h2: 'Para seguir leyendo',
    lede: 'Lecturas relacionadas, la mayoría en inglés.',
    items: [
      { href: '/ai-classes-for-adults', label: 'AI classes for adults', p: 'La inteligencia artificial explicada para adultos, desde cero.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Programación para adultos de todas las edades.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todos nuestros cursos en el Perú, por edad.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así es una clase en vivo con nosotros.' },
      { href: '/student-labs', label: 'Student labs', p: 'Trabajos de nuestros estudiantes.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo entero.' }
    ]
  },

  start: {
    h2: 'Agende una clase gratis, sin apuro',
    lede: 'Elija la hora en el reloj de Lima. En la clase de prueba, de 30 a 45 minutos, el mentor le ayuda a revisar la cámara y el sonido, conversa con usted sobre lo que le gustaría aprender y le muestra un ejercicio sencillo. Al terminar le dirá con franqueza si conviene empezar ya y con qué curso.',
    readFirst: 'Si prefiere leer antes, en inglés: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> cuenta cómo enseñamos y <a class="ag-inline-link" href="/courses">All courses</a> reúne todos los cursos.',
    note: 'Las clases se dictan en vivo y en línea, siempre en inglés, con mentores en la India. Por WhatsApp puede escribirnos en castellano, usted o un familiar.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para empezar', links: [
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python desde cero' },
        { href: '/courses/ai-tools-mastery-complete-college', label: 'Herramientas de IA' },
        { href: '/courses/html-css-course-for-beginners-build-real-websites', label: 'Su primera página web' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más información', links: [
        { href: '/ai-classes-for-adults', label: 'IA para adultos' },
        { href: '/coding-classes-for-adults', label: 'Programación para adultos' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'José con tilde también cuenta'
  },

  personalityCss: `
.ag-root.ag-cta .ag-hero h1 { max-width: 22ch; letter-spacing: 0; }
.ag-root.ag-cta .ag-capsule { border-left-width: 6px; line-height: 1.7; }
.ag-root.ag-cta .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cta .ag-table caption { text-align: left; }
.ag-root.ag-cta .ag-steps li { line-height: 1.75; }
`,

  dossier: {
    curriculumAuthority: 'Ley N.° 30490, Ley de la Persona Adulta Mayor (El Peruano, 21 July 2016: article 2 definition, article 5 g, articles 10 and 11 on CIAM); INEI press notes of 25 August 2024 (population projection, Día del Adulto Mayor, one-person households), 30 September 2024 (labour participation) and 26 March 2025 (households with an older adult); INEI boletín TIC II Trimestre 2026 (Cuadro 2.1 internet by age group, mobile phone use 60+); EF EPI 2025 (41+). Read 9 November 2026. The contact-search lesson, the comparison table and the progress signals are our own. No health data used.',
    localProject: 'A contact search in Python for a learner of 60 or more in Peru: version 1 looks for jose in a list with José Quispe and prints only Search finished; version 2 strips accents with unicodedata.normalize(\'NFD\') and lower() and prints jose -> José Quispe, MARIA -> María Elena Rojas and pena -> Rosa Peña, which opens the ñ discussion. Lesson family: Unicode normalisation and case folding to compare text as people type it, and its trade-off.',
    requiredMentions: ['Search finished', 'Rosa Peña', 'Entiéndese por persona adulta mayor a aquella que tiene 60 o más años de edad', 'Acceder a programas de educación y capacitación', '4 millones 747 mil 803', 'el 56,7 % de la población de 60 y más años', 'subió 15,9 puntos', 'el 50,6 % de los adultos mayores', 'José con tilde también cuenta', 'espacios creados por los gobiernos locales'],
    sources: [
      { claim: 'Adulto mayor = 60 or more; right to education and training; CIAM created by local governments, with literacy among their educational tasks.', url: 'https://cdn.www.gob.pe/uploads/document/file/3766931/Ley%20N%C2%B0%2030490.pdf' },
      { claim: '4,747,803 older adults (2024 projection), 13.9% of the population; Día del Adulto Mayor 26 August; 24.1% one-person households among those headed by an older adult.', url: 'https://www.gob.pe/institucion/inei/noticias/1010099-este-26-de-agosto-mas-de-4-millones-747-mil-adultos-mayores-conmemoran-su-dia' },
      { claim: '50.6% of older adults in the labour market (April to June 2024); 68.3% at 60 to 69.', url: 'https://www.gob.pe/institucion/inei/noticias/1031021-aumenta-a-47-0-la-poblacion-adulta-mayor-que-hace-uso-de-internet' },
      { claim: '42.0% of households have a member aged 60+ (Q4 2024); Lima Metropolitana 46.2%.', url: 'https://www.gob.pe/institucion/inei/noticias/1133454-el-42-0-de-los-hogares-del-pais-tiene-entre-sus-miembros-a-un-adulto-mayor' },
      { claim: 'Internet use by age group 2023 to 2026 (60+: 40.8% to 56.7%); mobile phone use 60+ 85.2%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025 Peru: 41+ score 509 (moderate); Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; capsule and FAQ say every class is live, online and in English only.',
      'Teaching basic computing (mouse, email): not offered; the page sends beginners to municipal CIAM or in-person workshops.',
      'Any link with the MIMP, a CIAM or a municipality, or free classes for seniors: none; the page says so and that only the trial class is free.',
      'Health statistics of older adults (insurance, chronic illness) in the INEI notes: deliberately left out (brief rule 10).',
      'The 47.0% internet figure of the September 2024 note: not used, because the 2026 bulletin series gives 47.3% for 2024; one series only.',
      'Soles prices or any typed fee: refused.'
    ]
  }
};

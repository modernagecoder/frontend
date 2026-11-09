// SHIP: market | Aprender a programar desde cero pensando: predecir, rastrear, depurar, sin copiar | the starting-value bug: a maximum that begins at 0 fails on all-negative data; trace table and fix
'use strict';
// Aprender a pensar, no a copiar (ag- Spanish-language door, Peru cluster row PE149, P4 think, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the parent, teen or adult who types "aprender a programar desde cero" (KEYWORDS.md rows.tsv PE149), and the owner's
// core promise: we teach how to think and solve problems, not to copy answers or AI output. Shown, not claimed.
// Spine: what copying looks like (tutorial, chatbot, solucionario); what the CNEB asks for (competency 28 and its four
// capacities, transversal; "mejoras sucesivas y retroalimentación"); one worked debugging example (predict, run, trace,
// hypothesis, fix, edge case); AI used well inside each tool's age rule; OPI 2025 bans generative AI (UTEC); what school gives.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/aprender-a-pensar-no-copiar-programacion/;
// FACTS = facts-school/FACTS.md, MARKET = facts-market/MARKET.md):
//  CNEB (FACTS 32 to 36): "28 Se desenvuelve en entornos virtuales generados por las TIC • Personaliza entornos virtuales •
//    Gestiona información del entorno virtual • Interactúa en entornos virtuales • Crea objetos virtuales en diversos formatos";
//    "Competencias transversales a las áreas"; "construir materiales digitales con diversos propósitos, siguiendo un proceso de
//    mejoras sucesivas y retroalimentación".
//  CNEB Matemática (FACTS 55): "Resuelve problemas de regularidad, equivalencia y cambio ... Resuelve problemas de gestión de datos
//    e incertidumbre"; JER secundaria weekly hours (FACTS 39): "Matemática 4 4 4 4 4"; hora pedagógica 45 minutos (FACTS 44).
//  MINEDU normative ages (FACTS 14): 1° primaria 6, 1° secundaria 12, 5° secundaria 16 (at 31 March).
//  MINEDU, Fábrica de Programadores (FACTS 45, 46): 1000 escolares de 4.º y 5.º de secundaria de Lima Norte, Python, PCEP.
//  INEI ENAHO TIC bulletin, II Trimestre 2026 (MARKET 1.4): "el de 12 a 18 años con un 92,5%"; "niños de 6 a 11 años (68,2%)";
//    "el 36,4% de los hogares del país disponía de al menos una computadora".
//  UTEC OPI (FACTS 111, 116, 118): free for all secundaria students; Fase 2 "Se podrá usar solo C++"; "Queda prohibido el uso de IA
//    generativa para la resolución de problemas" (Reglamento OPI 2025).
//  Vendor terms via content/ai-tool-age-audit.json (audited 2026-07-15): ChatGPT 13 + parent permission under 18; Claude 18;
//    GitHub Copilot 13; Gemini 13 or local age, not with Family Link.
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, band High.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (apnc.py in the scratchpad; the temperatures are invented by us):
//    tibias: 18 / heladas, paso a paso: / t = -4 | mayor = 0 / t = -2 | mayor = 0 / t = -7 | mayor = 0 / resultado: 0 /
//    corregida: -2 | max(): -2 / lista vacia: None
// Lesson family: the starting-value bug. A running maximum initialised to 0 works on positive data and silently returns a value
// that is not in the list when every value is negative; found by predicting, tracing and testing an edge case, fixed by starting
// from the first element and handling the empty list.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Temperaturas de madrugada inventadas por nosotros (grados Celsius)',
  'tibias = [12, 18, 15]',
  'heladas = [-4, -2, -7]',
  '',
  'def mas_alta(lista, mostrar=False):',
  '    mayor = 0',
  '    for t in lista:',
  '        if t > mayor:',
  '            mayor = t',
  '        if mostrar:',
  "            print('  t =', t, '| mayor =', mayor)",
  '    return mayor',
  '',
  "print('tibias:', mas_alta(tibias))",
  "print('heladas, paso a paso:')",
  "print('resultado:', mas_alta(heladas, mostrar=True))",
  '',
  'def mas_alta_bien(lista):',
  '    if not lista:',
  '        return None',
  '    mayor = lista[0]',
  '    for t in lista[1:]:',
  '        if t > mayor:',
  '            mayor = t',
  '    return mayor',
  '',
  "print('corregida:', mas_alta_bien(heladas), '| max():', max(heladas))",
  "print('lista vacia:', mas_alta_bien([]))"
].join('\n');

const OUT = [
  'tibias: 18',
  'heladas, paso a paso:',
  '  t = -4 | mayor = 0',
  '  t = -2 | mayor = 0',
  '  t = -7 | mayor = 0',
  'resultado: 0',
  'corregida: -2 | max(): -2',
  'lista vacia: None'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Aprender a pensar, no a copiar' },
  slug: 'aprender-a-pensar-no-copiar-programacion',
  code: 'apnc',
  accent: '#572D44',
  accentRationale: 'Aprender a pensar, no a copiar: a dark plum #572D44, the colour of a pencil note in a margin rather than a highlighter, quiet and serious for a page about method; contrast 9.14 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Aprender a programar desde cero, pensando',
  title: 'Aprender a programar desde cero: pensar, no copiar',
  description: 'Aprender a programar desde cero sin copiar código ni respuestas de la IA: un error depurado paso a paso, el CNEB y la OPI. Clases en vivo y en inglés.',
  ogDescription: 'Cómo se aprende a programar pensando: predecir, rastrear y depurar un programa real, qué pide el CNEB, por qué la OPI de UTEC prohíbe la IA generativa y cómo usar la IA sin copiar.',
  twitterDescription: 'Programar desde cero sin copiar: un error real encontrado paso a paso. Clases en vivo, en inglés, en grupo o individuales, a cualquier hora.',
  pageName: 'Aprender a programar desde cero pensando, no copiando',
  webPageDescription: 'Guía para familias, adolescentes y adultos en Perú que quieren aprender a programar desde cero sin depender de copiar: qué es copiar y qué es pensar en programación, qué pide el Currículo Nacional (CNEB) en su competencia digital, un error de programa encontrado y corregido paso a paso, cómo usar la IA dentro de las reglas de edad de cada empresa y por qué la Olimpiada Peruana de Informática prohíbe la IA generativa.',
  courseDescription: 'Clases en vivo y en línea para aprender a programar desde cero, dictadas solo en inglés por mentores desde la India, para estudiantes de 6 años en adelante y adultos en todo el Perú: Scratch o Python según la edad, con un método de predecir, ejecutar, rastrear y explicar, en grupo o individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Pensar, no copiar',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#copiar', label: 'Copiar o pensar' },
    { href: '#cneb', label: 'Qué pide el CNEB' },
    { href: '#depurar', label: 'Un error real' },
    { href: '#ia', label: 'IA sin copiar' },
    { href: '#colegio', label: 'Colegio' }
  ],
  eyebrow: 'Perú &middot; Programación desde cero &middot; Método',
  h1: 'Aprender a programar desde cero, pensando y sin copiar',
  lede: 'Copiar un programa que funciona se siente como avanzar, hasta el día en que algo falla y no hay a quién copiarle la corrección. Programar de verdad es otra habilidad: anticipar qué hará el código, seguirlo línea por línea y encontrar el error con calma. Eso es lo que enseñamos desde la primera clase, con cualquier edad.',
  secondaryCta: { href: '#depurar', label: 'Ver un error depurado' },
  wa: 'Hola Modern Age Coders, queremos aprender a programar desde cero, entendiendo y sin copiar. ¿Podemos agendar una clase de prueba gratis en inglés?',
  heroNote: 'Enseñando en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; cada línea explicada por quien la escribe',
  spec: [
    ['Para quién', 'Desde los 6 años hasta adultos, sin experiencia previa'],
    ['Lenguaje', 'Scratch para los menores, Python desde los 9 o 10'],
    ['Método', 'Predecir, ejecutar, rastrear y explicar'],
    ['IA', 'Después de pensar, y solo la que permite la edad'],
    ['Idioma', 'Inglés claro, con mentor en directo desde la India'],
    ['Formato', 'Grupo de quince a veinte, o individual']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Para quien quiere aprender a programar desde cero en Perú, sea un niño de 6 años, un escolar de secundaria o un adulto, Modern Age Coders dicta clases en vivo, por internet y en inglés, con mentores desde la India. El método no premia copiar: el estudiante predice qué hará el código, lo ejecuta, lo rastrea línea por línea y explica cada cambio. La IA entra después, solo si la edad lo permite. Hay clases grupales e individuales, cualquier día y a la hora que la familia escoja.',

  picks: {
    eyebrow: 'Cursos para empezar',
    h2: 'Tres cursos para empezar de cero',
    lede: 'Uno por etapa de vida. En los tres, el estudiante escribe su propio código desde la primera semana y lo defiende en voz alta.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'APNC / 01', title: 'Scratch, de 6 a 10 años', alt: 'Imagen del curso de Scratch para niños', note: 'Bloques de colores para quienes aún no escriben rápido. El niño anticipa qué hará su personaje antes de pulsar la bandera verde, y si se equivoca, busca por qué.' },
      { course: 'python-complete-masterclass-teens', code: 'APNC / 02', title: 'Python para adolescentes', alt: 'Imagen del curso completo de Python para adolescentes', note: 'Para escolares de secundaria que nunca programaron. Cada programa se rastrea en una tabla antes de darlo por bueno, como en el ejemplo de esta página.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'APNC / 03', title: 'Python para adultos', alt: 'Imagen del curso de Python de cero a avanzado para adultos', note: 'Para universitarios y profesionales que nunca programaron. Avanza al ritmo de quien trabaja y no salta la parte incómoda: leer errores y corregirlos.' }
    ]
  },

  sections: [
    {
      id: 'copiar',
      eyebrow: 'Copiar o pensar',
      h2: '¿Qué significa aprender a programar sin copiar?',
      lede: 'Significa que el estudiante puede explicar por qué su programa funciona y qué haría si dejara de funcionar. Copiar no siempre es malo; lo malo es copiar sin entender, porque deja al estudiante sin herramientas el primer día que algo sale distinto.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Copiar del video', p: 'El tutorial muestra veinte líneas y el estudiante las tipea igual. El programa corre, pero si se cambia un dato o un nombre, ya no sabe dónde tocar. Ha aprendido a transcribir, no a programar.' },
          { h3: 'Copiar del chatbot', p: 'Se pega el enunciado en una IA y se pega la respuesta en el editor. A veces la respuesta es correcta y a veces no, y quien copia no tiene forma de distinguir una de otra. El problema no es la herramienta: es haber saltado el razonamiento.' },
          { h3: 'Copiar del solucionario', p: 'Ver la solución antes de intentar el ejercicio da una sensación de comprensión que se evapora en el examen. En programación pasa igual: leer código ajeno no entrena la cabeza que lo escribe.' }
        ] },
        { kind: 'p', mt: true, html: 'Pensar, en cambio, se reconoce en conductas concretas. El estudiante dice en voz alta qué espera que salga antes de ejecutar. Cuando el resultado no coincide, no borra todo: busca la primera línea donde su expectativa y el programa se separan. Prueba un caso extremo a propósito, como una lista vacía o un número negativo. Y al final puede contar, con sus palabras, qué cambió y por qué.' },
        { kind: 'p', html: 'Ese hábito vale lo mismo a los 7 años con bloques de Scratch que a los 40 con Python. Por eso es la base de todas nuestras clases, sea el curso que sea. Para los más chicos lo contamos con detalle en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>; para quienes ya usan inteligencia artificial, en el <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">curso de IA para adolescentes</a>.' }
      ]
    },
    {
      id: 'cneb',
      eyebrow: 'Currículo Nacional',
      h2: '¿Qué pide el Currículo Nacional peruano sobre tecnología y resolución de problemas?',
      lede: 'El CNEB no tiene un área de programación, pero sí una competencia digital que recorre todas las áreas y que, leída con atención, describe justamente un proceso de mejorar algo a partir de la retroalimentación.',
      body: [
        { kind: 'table', numCols: [], caption: 'La competencia 28 del CNEB y sus cuatro capacidades, frente a lo que practica quien programa pensando', head: ['Capacidad del CNEB (texto oficial)', 'Lo que hace un estudiante que programa sin copiar (nuestra lectura)'], rows: [
          ['Personaliza entornos virtuales', 'Configura su editor, organiza sus archivos y sabe dónde se guarda cada versión de su programa'],
          ['Gestiona información del entorno virtual', 'Lee la documentación y los mensajes de error, en inglés, en lugar de pedir la respuesta'],
          ['Interactúa en entornos virtuales', 'Explica su código a un compañero o al mentor y escucha cómo otro lo resolvió'],
          ['Crea objetos virtuales en diversos formatos', 'Construye un programa propio, lo prueba con casos difíciles y lo mejora versión tras versión']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, CNEB, texto de la competencia digital número 28 y de sus capacidades; el documento la ubica entre las "Competencias transversales a las áreas". La segunda columna es nuestra. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'La frase que más nos interesa está en la definición de la cuarta capacidad: crear objetos virtuales consiste en "construir materiales digitales con diversos propósitos, siguiendo un proceso de mejoras sucesivas y retroalimentación". Es una buena descripción de la depuración. Nadie escribe un programa correcto de una sola vez; lo escribe, lo prueba, ve qué falla y lo corrige. Quien copia se salta ese ciclo, y con él se salta lo que el currículo quiere que aprenda.' },
        { kind: 'p', html: 'El área de Matemática apunta en la misma dirección. Sus cuatro competencias empiezan con el mismo verbo: el estudiante "resuelve problemas" de cantidad, de regularidad, equivalencia y cambio, de forma, movimiento y localización, y de gestión de datos e incertidumbre. Programar es un terreno excelente para practicar ese verbo, porque el computador no acepta respuestas aproximadas: o el razonamiento es correcto o el programa lo delata.' }
      ]
    },
    {
      id: 'depurar',
      tint: 'tint',
      eyebrow: 'Clase de muestra',
      h2: '¿Cómo se encuentra un error en un programa? Un caso resuelto paso a paso',
      lede: 'Un ejercicio que usamos en las primeras semanas de Python. La función debe devolver la temperatura más alta de una lista. Con datos de verano funciona; con datos de una madrugada helada, no. Los números son inventados por nosotros.',
      body: [
        { kind: 'code', label: 'Una función que parece correcta', lang: 'Python', code: PY, note: 'La primera versión guarda en mayor el valor más alto visto hasta el momento, empezando en cero. La segunda empieza con el primer dato de la lista y contempla la lista vacía.' },
        { kind: 'code', label: 'Lo que imprime Python', lang: 'Salida', code: OUT, note: 'Esto es exactamente lo que devolvió Python 3 al correr el programa en nuestro equipo, sin retoques. El 0 que aparece como resultado no está en la lista de temperaturas heladas.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir antes de ejecutar.</strong> Pedimos al estudiante que escriba en un papel qué espera para cada lista. Para las tibias, 18. Para las heladas, casi todos dicen -2, que es la menos fría.',
          '<strong>Ejecutar y comparar.</strong> Python imprime 18 para la primera lista, como se esperaba, y 0 para la segunda. Ahí hay una diferencia entre lo esperado y lo obtenido: eso es un error, aunque el programa no haya mostrado ningún mensaje rojo.',
          '<strong>Rastrear con una tabla.</strong> Con el modo paso a paso vemos cada vuelta del bucle: con t igual a -4, mayor sigue en 0; con -2, sigue en 0; con -7, sigue en 0. Ninguna temperatura supera al cero, así que la variable nunca cambia.',
          '<strong>Formular la causa.</strong> El valor inicial cero no es un dato de la lista: es una suposición escondida de que las temperaturas son positivas. Con datos de verano la suposición no se nota; con datos de invierno, sí.',
          '<strong>Corregir y volver a probar.</strong> La versión corregida arranca con el primer elemento y recorre el resto. Devuelve -2, igual que la función max() de Python, que usamos como segunda opinión.',
          '<strong>Buscar el siguiente borde.</strong> ¿Y si la lista llega vacía? Con lista[0] el programa se rompería, así que la versión corregida devuelve None. Pensar en el caso extremo antes de que aparezca es la parte del oficio que ningún copiado enseña.'
        ] },
        { kind: 'p', mt: true, html: 'El ejemplo es pequeño a propósito. El mismo error, un valor inicial que esconde una suposición, aparece en programas de bancos, de inventarios y de notas escolares. Un estudiante que lo ha encontrado una vez con sus propias manos lo reconoce después en cualquier lenguaje. Esa es la diferencia que buscamos entre copiar y aprender.' }
      ]
    },
    {
      id: 'metodo',
      eyebrow: 'Método',
      h2: '¿Cómo se aprende a pensar como programador desde la primera clase?',
      lede: 'Con cinco hábitos que el mentor pide una y otra vez hasta que el estudiante los hace solo. No dependen de la edad: cambian las palabras, no la idea.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que hace el estudiante',
          left: [
            'Antes de ejecutar, dice qué espera ver. Si no puede predecirlo, todavía no entiende su programa, y eso ya es información útil.',
            'Cuando algo falla, lee el mensaje de error completo, que viene en inglés, y señala la línea que lo produjo antes de cambiar nada.',
            'Prueba a propósito un caso raro: el cero, un número negativo, una lista vacía, un texto con tilde. Los errores viven en los bordes.'
          ],
          rightH3: 'Lo que hace el mentor',
          right: [
            'No da la corrección. Pregunta qué valor tiene una variable en tal línea y deja que el estudiante lo descubra rastreando.',
            'Pide explicar en voz alta, en inglés sencillo, qué hace cada parte. Explicar obliga a ordenar el pensamiento, y de paso practica el idioma.',
            'Celebra el error encontrado tanto como el programa terminado, porque encontrarlo es la habilidad que se está entrenando.'
          ] },
        { kind: 'p', mt: true, html: 'Con los niños de primaria esto se hace con bloques: antes de pulsar la bandera, el niño señala con el dedo adónde llegará su personaje. Con adolescentes y adultos se hace con tablas de rastreo como la del ejemplo. En ambos casos el estudiante termina la clase con un programa que entiende de punta a punta, aunque sea más corto que uno copiado.' },
        { kind: 'p', html: 'Para quien quiere ver el mismo método aplicado a un verano completo, la página de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación online</a> propone un plan por semanas, y en inglés hay una guía más larga, <a class="ag-inline-link" href="/how-to-think-like-a-programmer">how to think like a programmer</a>.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'IA bien usada',
      h2: '¿Se puede usar la inteligencia artificial para aprender a programar sin copiar?',
      lede: 'Sí, si llega después del intento propio y si la edad del estudiante lo permite. La IA es útil para revisar un razonamiento o explicar un concepto de otra forma; es dañina cuando reemplaza el razonamiento.',
      body: [
        { kind: 'table', numCols: [], caption: 'Edad mínima que fija cada empresa y cómo encaja en un aprendizaje sin copiar', head: ['Herramienta', 'Edad según sus términos', 'Cuándo la usamos en clase'], rows: [
          ['ChatGPT', 'Desde 13; menores de 18 con permiso de padre o tutor', 'Con permiso de la familia, para que explique un error ya localizado por el estudiante'],
          ['Google Gemini', 'Desde 13 (o más, si el país lo exige); las cuentas Family Link quedan fuera', 'Con cuenta propia permitida, para comparar dos explicaciones'],
          ['GitHub Copilot', 'Desde 13', 'Solo cuando el estudiante ya escribe funciones solo, y nunca en ejercicios de evaluación'],
          ['Claude', 'Solo mayores de 18', 'Únicamente con adultos']
        ] },
        { kind: 'source', html: 'Fuente: condiciones de uso publicadas por cada empresa; las citamos palabra por palabra en la <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>, auditada el 15 de julio de 2026. La última columna describe nuestra práctica, no una norma. Como las empresas actualizan sus condiciones, conviene leerlas otra vez antes de abrir una cuenta.' },
        { kind: 'p', mt: true, html: 'Nuestra regla en clase tiene tres partes. Primero, el estudiante intenta solo y deja escrito qué probó. Segundo, si usa una IA, le pregunta por qué falla su código, no le pide que lo escriba. Tercero, cualquier línea que venga de una herramienta tiene que poder explicarla como si fuera suya; si no puede, se borra. Con niños menores de 13 no usamos chatbots: aprenden con bloques y con su propia cabeza.' },
        { kind: 'p', html: 'Las competencias serias piensan igual. El Reglamento OPI 2025 de UTEC, que organiza la Olimpiada Peruana de Informática, establece que "Queda prohibido el uso de IA generativa para la resolución de problemas". En su fase final presencial, además, se programa solo en C++. Un estudiante que solo sabe pedir código a un chatbot no tiene nada que hacer ahí; uno que aprendió a rastrear y a depurar, sí. Modern Age Coders no tiene relación con UTEC ni con la OPI.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Colegio',
      h2: '¿Se aprende a programar en el colegio en Perú?',
      lede: 'En general, no como curso propio. La secundaria no tiene un área de computación en su plan de estudios, y la competencia digital se trabaja dentro de las demás áreas. Por eso muchos estudiantes llegan a la programación por su cuenta, a menudo copiando.',
      body: [
        { kind: 'p', html: 'Hay excepciones que vale la pena conocer. En julio de 2025, el MINEDU lanzó la estrategia Fábrica de Programadores, que en su primera etapa beneficiaría a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte con formación en Python; quienes completen las dos etapas pueden rendir el examen de certificación PCEP. Es un piloto que el ministerio quiere replicar a nivel nacional. Nosotros no participamos en él.' },
        { kind: 'p', html: 'La conexión no es el obstáculo principal en las ciudades. Según el boletín TIC del INEI para el segundo trimestre de 2026, el 92,5% de los peruanos de 12 a 18 años usó internet, y el 68,2% de los niños de 6 a 11. El obstáculo es otro: en esa misma encuesta, solo el 36,4% de los hogares del país tenía al menos una computadora. Para programar de verdad hace falta una laptop o una PC, aunque sea compartida; con un celular se puede mirar, no escribir programas.' },
        { kind: 'p', html: 'Tampoco pretendemos reemplazar al colegio. Enseñamos en paralelo, sin notas oficiales, y lo que el estudiante gana es una forma de trabajar: anticipar, comprobar y corregir. Esa forma de trabajar se nota luego en Matemática, en Ciencia y Tecnología y en cualquier tarea que tenga más de un paso.' },
        { kind: 'p', html: 'Sobre el idioma: las clases son en inglés, y lo decimos sin rodeos. En Lima el reto es menor de lo que parece; el índice EF EPI 2025 le asigna a la ciudad 555 puntos, en la banda "High". Y para programar, el inglés es inevitable de todos modos: está en cada palabra clave de Python y en cada mensaje de error.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora son las clases si el mentor está en la India?',
      lede: 'A la que usted elija. Entre Lima y la India la diferencia es fija, diez horas y treinta minutos a favor de la India, en enero igual que en julio.',
      body: [
        { kind: 'p', html: 'Algunas conversiones calculadas por nosotros con las zonas horarias oficiales (Perú UTC-5, India UTC+5:30): cuando en Lima son las 5:00 p. m., en la India ya corre la madrugada siguiente, 3:30 a. m.; un sábado a las 8:00 a. m. limeñas equivale a las 6:30 p. m. de ese sábado indio; y una clase a las 9:00 p. m. de Lima, pensada para quien sale tarde de la oficina, empieza a las 7:30 a. m. del otro lado. Son solo ejemplos de conversión: el horario lo fija la familia o el estudiante.' },
        { kind: 'p', html: 'Para adultos que trabajan, las clases individuales pueden moverse de semana en semana. Para escolares, conviene evitar la semana de exámenes del colegio y retomar después; el mentor ajusta el plan sin que se pierda el hilo.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Autonomía',
    h2: '¿Cómo se nota que un estudiante ya piensa y no copia?',
    lede: 'Cinco escalones de autonomía que usamos para conversar con la familia. Son nuestros, no una escala oficial, y valen para cualquier edad.',
    table: { caption: 'Cinco escalones de autonomía al programar (escala nuestra)', head: ['Escalón', 'Lo que se observa', 'Pregunta que ya responde solo'], rows: [
      ['1. Predice', 'Dice qué saldrá antes de ejecutar', '¿Qué imprimirá esto?'],
      ['2. Localiza', 'Señala la línea donde falla', '¿Dónde se separa lo que espero de lo que pasa?'],
      ['3. Rastrea', 'Arma una tabla con los valores de cada variable', '¿Cuánto vale mayor en la tercera vuelta?'],
      ['4. Prueba bordes', 'Busca casos raros antes de que aparezcan', '¿Y si la lista llega vacía?'],
      ['5. Enseña', 'Explica su solución a otra persona, en inglés', '¿Por qué esta versión es correcta y la otra no?']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Pida que le explique un programa que hizo. Si lo cuenta con sus palabras y responde "qué pasaría si", va bien.',
      'Desconfíe del avance muy rápido sin errores: aprender a programar siempre deja errores en el camino.'
    ] },
    right: { h3: 'Para el estudiante', ps: [
      'Antes de pedir ayuda, escriba qué esperaba y qué obtuvo. La mitad de las veces la respuesta aparece ahí.',
      'Un programa que funciona y que usted no entiende todavía no es suyo.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más, por edad',
    lede: 'Cada uno se dicta en directo, en inglés, con la opción grupal o individual, y en cada uno se repite el hábito de predecir y comprobar.',
    bands: [
      { num: 'I', h3: 'Niños de 6 a 12', sub: 'Bloques primero, código después', courses: [
        { code: 'APNC / NIÑOS / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolución de problemas', blurb: 'Pensamiento computacional con acertijos y patrones, antes y junto a la programación.' },
        { code: 'APNC / NIÑOS / 02', slug: 'python-ai-kids-masterclass', title: 'Python para niños', blurb: 'Primeros programas escritos letra por letra, con juegos y dibujos que el niño entiende.' },
        { code: 'APNC / NIÑOS / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Juegos en Roblox', blurb: 'Programar el juego que ya conocen, explicando cada regla que agregan.' }
      ] },
      { num: 'II', h3: 'Adolescentes', sub: 'De 1° a 5° de secundaria', courses: [
        { code: 'APNC / ADOL / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Lógica y algoritmos', blurb: 'Problemas que obligan a planear antes de escribir una sola línea.' },
        { code: 'APNC / ADOL / 02', slug: 'pcep-pcap-python-certification-course', title: 'Certificación PCEP', blurb: 'El examen de Python que también eligió el piloto Fábrica de Programadores.' },
        { code: 'APNC / ADOL / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Un lenguaje estricto que no perdona tipos mal puestos y enseña orden.' }
      ] },
      { num: 'III', h3: 'Universitarios y adultos', sub: 'Desde los 18', courses: [
        { code: 'APNC / ADULT / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos', blurb: 'Para entrevistas técnicas y para entender por qué un programa es lento.' },
        { code: 'APNC / ADULT / 02', slug: 'c-programming-course-for-college-beginners', title: 'C desde cero', blurb: 'Memoria y punteros: el lenguaje que obliga a rastrear todo a mano.' },
        { code: 'APNC / ADULT / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python', blurb: 'Scripts para el trabajo diario, con pruebas antes de confiar en ellos.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Clases',
    h2: '¿Cómo son las clases en vivo para aprender desde cero?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Tarde, después del colegio', l: 'La opción habitual de los escolares durante el año.' },
      { time: 'Noche limeña', l: 'Para universitarios y adultos que salen del trabajo.' },
      { time: 'Sábado por la mañana', l: 'Para quien prefiere la semana libre de clases extra.' }
    ],
    cells: [
      { h3: 'Predicción escrita', p: 'Cada ejercicio empieza anotando qué se espera obtener.' },
      { h3: 'Rastreo visible', p: 'El mentor comparte pantalla y rastrea junto al estudiante.' },
      { h3: 'Error bienvenido', p: 'Un fallo encontrado se trabaja con calma, sin borrar todo.' },
      { h3: 'IA al final', p: 'Solo tras el intento propio y dentro de la regla de edad.' },
      { h3: 'Explicar en inglés', p: 'El estudiante cuenta su solución con palabras sencillas.' },
      { h3: 'Mismo mentor', p: 'Una persona que conoce cómo razona cada estudiante.' }
    ]
  },

  projectsH2: 'Proyectos hechos por estudiantes',
  projectsLede: 'Programas que sus autores pueden explicar línea por línea; la galería completa, en inglés, está en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Opiniones reales publicadas en Google, en el idioma en que se escribieron.',

  fees: {
    h2: '¿Qué se paga por aprender a programar con nosotros?',
    lede: 'Mostramos la cuota mensual en moneda de Estados Unidos; el cargo se hace a una tarjeta y es la entidad emisora la que lo convierte. Ni matrícula ni libros adicionales.',
    free: ['Primera clase sin costo', 'El mentor propone el punto de partida', 'No se piden datos de tarjeta'],
    group: ['De quince a veinte estudiantes de edad parecida', 'Dos clases en vivo a la semana', 'Un mentor que sigue todo el curso', 'Se paga mes a mes'],
    one: ['Clases solo para el estudiante', 'Ritmo y proyectos a su medida', 'Horario que se mueve con el trabajo o el colegio']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Aprender a programar sin copiar: preguntas frecuentes',
    items: [
      { q: '¿Se puede aprender a programar desde cero sin saber nada?', a: 'Sí. Nuestros cursos de inicio no piden experiencia. Lo único necesario es una computadora o laptop con internet; con un celular no se puede escribir programas cómodamente.' },
      { q: '¿Las clases son en español?', a: 'No. Todas las clases son en vivo, por internet y en inglés, con mentores que enseñan desde la India y hablan despacio y claro. Lo vemos como una ventaja: el estudiante aprende a programar y practica inglés en la misma hora, y además lee los mensajes de error en el idioma en que los escribe Python. Lima tiene un nivel de inglés "High" según el EF EPI 2025. Las consultas por WhatsApp sí se pueden hacer en castellano.' },
      { q: '¿Desde qué edad?', a: 'Desde los 6 años, que es la edad normativa de 1° de primaria según el MINEDU, con Scratch. Python suele empezar hacia los 9 o 10 años. No hay edad máxima: también enseñamos a adultos y a personas mayores.' },
      { q: '¿Qué tiene de malo copiar código?', a: 'Copiar para estudiar un ejemplo no tiene nada de malo. El problema es copiar sin entender: el programa funciona hasta que algo cambia, y entonces el estudiante no sabe cómo arreglarlo. En clase pedimos que cualquier línea copiada pueda explicarse; si no se puede, se reescribe.' },
      { q: '¿Usarán ChatGPT los escolares durante la clase?', a: 'Con menores de 13 años, no. Entre 13 y 17, solo si la familia da su permiso, como exige OpenAI a los menores de 18, y siempre después de intentar el ejercicio solo. Claude no se usa con menores porque su empresa pide 18 años.' },
      { q: '¿Cuánto tiempo toma aprender a programar?', a: 'Lo básico de un lenguaje se domina en unos meses de práctica constante, pero pensar como programador es un hábito que crece con los años. Preferimos no prometer plazos: el mentor le muestra el avance real en cada etapa.' },
      { q: '¿Sirve para la Olimpiada Peruana de Informática?', a: 'La OPI de UTEC es gratuita para escolares de secundaria y prohíbe la IA generativa al resolver problemas, así que premia justo lo que entrenamos: razonar y depurar solo. La final presencial es solo en C++. Somos independientes de UTEC y no prometemos clasificaciones.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, una clase a las 5:00 p. m. limeñas cae a las 3:30 a. m. del día siguiente para el mentor.' },
      { q: '¿Las clases cuentan para el colegio?', a: 'No. No somos parte del MINEDU ni de ningún colegio, y no ponemos notas oficiales. Al terminar un curso se entrega un certificado de finalización propio de Modern Age Coders.' },
      { q: '¿Cómo se paga?', a: 'Cada mes se carga a una tarjeta el monto en dólares de Estados Unidos, y el banco emisor aplica el tipo de cambio. Para la prueba gratuita no pedimos ningún dato de pago.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lectura',
    h2: 'Para seguir leyendo',
    lede: 'Páginas nuestras que amplían el método, en castellano o en inglés.',
    items: [
      { href: '/how-to-think-like-a-programmer', label: 'How to think like a programmer', p: 'El método completo en inglés, con más ejercicios de rastreo.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo está organizada una clase nuestra de principio a fin.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad que pide cada servicio de IA, citada de sus términos.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'El punto de partida para los más chicos en Perú.' },
      { href: '/curso-de-ia-para-adolescentes-peru', label: 'Curso de IA para adolescentes', p: 'Construir modelos pequeños en lugar de solo usarlos.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestra página central para Perú, con cursos por edad.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba sin costo',
    lede: 'Durante la sesión gratuita, nadie le toma un examen al estudiante: le da un problema corto y observa cómo lo encara. Con eso propone si empezar con bloques, con Python o con un curso para adultos.',
    readFirst: 'Si quiere ver antes el método en acción, revise el <a class="ag-inline-link" href="#depurar">caso resuelto paso a paso</a> de esta página o la guía en inglés <a class="ag-inline-link" href="/how-to-think-like-a-programmer">how to think like a programmer</a>.',
    note: 'Las clases son siempre en directo, por internet y en inglés, con mentores desde la India. Para coordinar puede escribirnos en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Empezar de cero', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python para adultos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños, en inglés' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' }
      ] }
    ],
    bottomRight: 'Un programa que funciona y no se entiende todavía no es suyo'
  },

  personalityCss: `
.ag-root.ag-apnc .ag-hero h1 { max-width: 17ch; letter-spacing: -0.01em; }
.ag-root.ag-apnc .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-apnc .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-apnc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-apnc .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU CNEB (competency 28 and its four capacities, transversal; definition of "Crea objetos virtuales"; the four Matemática competencies); MINEDU normative ages; MINEDU press note on Fábrica de Programadores (July 2025); INEI ENAHO TIC bulletin, II Trimestre 2026; UTEC OPI page and Reglamento OPI 2025; vendor terms in content/ai-tool-age-audit.json (15 July 2026); EF EPI 2025 Peru page; tzdata. The second column of the CNEB table, the class policy column, the autonomy scale, the temperatures and the debugging example are our own.',
    localProject: 'A debugging lesson in Python: a running maximum initialised to 0 returns 18 on invented warm readings [12, 18, 15] but 0 on invented frosty readings [-4, -2, -7], a value not in the list. The learner predicts, runs, traces each loop turn (mayor stays 0), names the hidden assumption, fixes it by starting from lista[0], checks against max() (-2) and handles the empty list (None). Run with python3 -I; output pasted unedited.',
    requiredMentions: ['t = -2 | mayor = 0', 'corregida: -2 | max(): -2', 'Una función que parece correcta', 'La competencia 28 del CNEB y sus cuatro capacidades, frente a lo que practica quien programa pensando', 'Ninguna temperatura supera al cero, así que la variable nunca cambia', 'Configura su editor, organiza sus archivos', 'Copiar del solucionario', 'Cinco escalones de autonomía al programar (escala nuestra)', 'Un programa que funciona y no se entiende todavía no es suyo'],
    sources: [
      { claim: 'CNEB competency 28 and its four capacities; transversal; "mejoras sucesivas y retroalimentación"; Matemática competencies "Resuelve problemas".', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Normative age 6 for 1° primaria (31 March).', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Fábrica de Programadores: 1000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP; pilot to be replicated.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'Internet use 92.5% (12 to 18) and 68.2% (6 to 11); 36.4% of households with a computer (II Trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'OPI free for secundaria; Reglamento OPI 2025 bans generative AI; Fase 2 C++ only.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'ChatGPT 13 with parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Claude 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'EF EPI 2025: Lima 555, High.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'A promise of how many months it takes to learn to program: refused; the FAQ says we do not promise timelines.',
      'Any link with UTEC, OPI, MINEDU or Fábrica de Programadores, or a medal promise: none; the page says so.',
      'Chatbots for under-13s, or Claude for under-18s: refused; the age table and FAQ say so.',
      'Real student data in the example: none; the temperatures are invented and labelled ours.'
    ]
  }
};

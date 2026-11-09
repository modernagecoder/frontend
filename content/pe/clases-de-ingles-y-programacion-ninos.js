// SHIP: market (es explainer) | inglés y programación para niños: practicar inglés hablado programando, sin ser academia | Python's 35 keywords from keyword.kwlist, sorted into groups with a set membership test
'use strict';
// Clases de inglés y programación para niños (ag- Spanish-language explainer, Peru cluster row PE153, P4, hubGroup guides).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Search (KEYWORDS.md sections 2 and 3): "clases de inglés y programación" is thin (1 suggestion, a PDF); the combined concept is not
// a searched phrase, so this is an honest explainer: we teach programming (and maths) in English, the English practice is a side
// effect, and we never claim to teach English as a subject.
// Spine: what this kind of class is and is not; what Peruvian school gives in English (CNEB competencies 13 to 15, weekly hours by
// grade); what EF EPI 2025 says about English in Peru (speaking is the weakest skill, and a live class makes the child speak); how
// a mentor handles language in class; one original lesson (Python's keywords are mostly everyday English words); who this suits
// and who should wait; times.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-ingles-y-programacion-ninos/):
//  CNEB (cneb/text.txt; FACTS 39, 41, 57): "Competencia 13: Se comunica oralmente en inglés como lengua extranjera."; "Competencia 14:
//    Lee diversos tipos de textos escritos en inglés como lengua extranjera."; "Competencia 15: Escribe diversos tipos de textos en
//    inglés como lengua extranjera."; perfil de egreso "El estudiante se comunica en su lengua materna, en castellano como segunda
//    lengua (*) y en inglés como lengua extranjera de manera asertiva y responsable"; primaria "Inglés 2 2 3 3 3 3"; secundaria JER
//    "Inglés 3 3 3 3 3"; JEC "Inglés 5 5 5 5 5"; "horas pedagógicas (45 minutos)".
//  EF EPI 2025 Peru page (ef_peru.txt; MARKET 1.3): "Global ranking: #52"; "EF EPI score : 519"; "Global average score : 488";
//    "Reading score: 540 Listening score: 499 Writing score: 514 Speaking score: 480"; "Cities Lima 555 Cusco 520 Trujillo 519
//    Arequipa 512 Huancayo 499 Piura 484 Chiclayo 474 Ica 467"; age groups start at "18-20 yrs"; bands from the page data: high from
//    550, moderate from 500, low from 450; Peru "moderate"; 8th of 20 in Latin America.
//  MINEDU press note on COAR (FACTS 93): "515 estudiantes de quinto de secundaria de los COAR obtuvieron certificaciones
//    internacionales del idioma inglés Cambridge" (2025).
//  Python documentation, Lexical analysis (lexical.html, read 2026-11-09): "The following names are used as reserved words, or
//    keywords of the language, and cannot be used as ordinary identifiers. They must be spelled exactly as written here".
//  MINEDU Edades normativas (FACTS 14, 15). Time: tzdata (facts-geo/timezone.tsv).
// Our own example, run with python3 -I on Python 3.14.8 (palabras.py in the src-pages folder; the grouping is ours):
//    35 keywords
//    everyday English word 26 ['and', 'as', 'assert', 'await', 'break', 'class', 'continue', 'else', 'except', 'finally', 'for',
//      'from', 'global', 'if', 'import', 'in', 'is', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
//    value 3 ['False', 'None', 'True']
//    short or technical 6 ['async', 'def', 'del', 'elif', 'lambda', 'nonlocal']
// Lesson family: the standard library's keyword.kwlist, a set used for membership tests, and a dictionary of lists filled in a loop.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'import keyword',
  '',
  "everyday = {'and', 'as', 'assert', 'await', 'break', 'class', 'continue', 'else', 'except',",
  "            'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'not', 'or',",
  "            'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'}",
  "values = {'True', 'False', 'None'}",
  '',
  "groups = {'everyday English word': [], 'value': [], 'short or technical': []}",
  'for word in keyword.kwlist:',
  '    if word in everyday:',
  "        groups['everyday English word'].append(word)",
  '    elif word in values:',
  "        groups['value'].append(word)",
  '    else:',
  "        groups['short or technical'].append(word)",
  '',
  "print(len(keyword.kwlist), 'keywords')",
  'for name, words in groups.items():',
  '    print(name, len(words), words)'
].join('\n');

const OUT = [
  '35 keywords',
  "everyday English word 26 ['and', 'as', 'assert', 'await', 'break', 'class', 'continue', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']",
  "value 3 ['False', 'None', 'True']",
  "short or technical 6 ['async', 'def', 'del', 'elif', 'lambda', 'nonlocal']"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Inglés y programación para niños' },
  slug: 'clases-de-ingles-y-programacion-ninos',
  code: 'ipn',
  accent: '#67570B',
  accentRationale: 'Clases de inglés y programación para niños: an olive ink #67570B, the colour of a well-used dictionary binding, calm for a page about two languages at once and distinct from the copper of the robotics guide; contrast 5.79 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Inglés y programación para niños',
  title: 'Clases de inglés y programación para niños: cómo funcionan',
  description: 'Inglés y programación para niños en Perú: enseñamos a programar en vivo y en inglés, y el inglés se practica hablando. Qué da el colegio y qué esperar.',
  ogDescription: 'No somos una academia de inglés: enseñamos programación en inglés. Qué pide el CNEB, qué mide el EF EPI 2025 en el Perú y por qué Python ya habla inglés.',
  twitterDescription: 'Programación en vivo y en inglés para niños peruanos: el inglés se practica conversando con el mentor, en grupo o uno a uno, a la hora que elija su familia.',
  pageName: 'Inglés y programación para niños en Perú',
  webPageDescription: 'Explicación para familias en Perú sobre las clases que combinan inglés y programación: qué es aprender a programar en inglés y qué no es, qué competencias y horas de inglés da el colegio según el CNEB, qué dice el EF EPI 2025 sobre el inglés en el Perú, cómo maneja el idioma un mentor en clase, una lección propia con las palabras reservadas de Python y para qué niños conviene.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 a 12 años en todo el Perú, dictadas solo en inglés por mentores desde la India que hablan claro y se adaptan al ritmo y al acento del niño. No son clases de idioma: el niño aprende a programar y practica inglés oral al explicar su código. En grupo o individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Inglés y programación',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#que-es', label: 'Qué es' },
    { href: '#colegio', label: 'Inglés en el colegio' },
    { href: '#nivel', label: 'Nivel en el Perú' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#para-quien', label: 'Para quién' }
  ],
  eyebrow: 'Perú &middot; Guía para padres &middot; Dos idiomas en una clase',
  h1: 'Clases de inglés y programación para niños: qué son y qué no',
  lede: 'Muchas familias peruanas buscan una actividad que sume dos cosas: que el niño aprenda tecnología y que no pierda el inglés. Existe una forma honesta de juntarlas, y no consiste en dar dos materias en una hora. Consiste en aprender a programar con alguien que solo habla inglés, de modo que cada explicación, cada pregunta y cada error se resuelvan en ese idioma.',
  secondaryCta: { href: '#que-es', label: 'Entender cómo funciona' },
  wa: 'Hola Modern Age Coders, buscamos clases donde nuestro hijo o hija aprenda programación y practique inglés al mismo tiempo. ¿Podemos reservar una clase de prueba gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; programación enseñada en inglés',
  spec: [
    ['Qué se enseña', 'Programación, de bloques a Python'],
    ['Qué no se enseña', 'Inglés como materia, gramática o exámenes de idioma'],
    ['Cómo se practica inglés', 'Conversando con el mentor sobre el propio código'],
    ['Edades', 'De 6 a 12 años, de 1° a 6° de primaria'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Mentores', 'Desde la India, con inglés claro y pausado']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Modern Age Coders no da clases de inglés: enseña programación a niños peruanos de 6 a 12 años en clases en vivo, por videollamada y en inglés, con mentores desde la India que hablan claro y se adaptan al ritmo y al acento de cada niño. El inglés se practica de verdad, porque el niño escucha, pregunta y explica su propio programa en ese idioma, pero la materia es la programación. Hay grupos y clases uno a uno, el día y la hora que la familia elija.',

  picks: {
    eyebrow: 'Cursos en inglés',
    h2: 'Tres cursos de programación donde el inglés se practica solo',
    lede: 'Elegidos por cuánto hace hablar al niño: los tres piden explicar en voz alta lo que construye.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'IPN / 01', title: 'Bloques con palabras en inglés', alt: 'Imagen del curso de programación con bloques para niños', note: 'De 6 a 12 años. Cada bloque es una frase corta en inglés, como "repeat 10" o "when clicked". El niño las usa decenas de veces por clase hasta que le salen solas.' },
      { course: 'python-ai-kids-masterclass', code: 'IPN / 02', title: 'Python, un lenguaje escrito en inglés', alt: 'Imagen del curso de Python con inteligencia artificial para niños', note: 'De 9 a 12 años. Las palabras reservadas de Python son, en su mayoría, palabras comunes del inglés: if, while, return, import. Leer código es leer inglés.' },
      { course: 'ai-literacy-for-kids-course', code: 'IPN / 03', title: 'Hablar sobre la IA', alt: 'Imagen del curso de alfabetización en inteligencia artificial para niños', note: 'De 8 a 14 años. Un curso que se conversa mucho: por qué una máquina acierta, por qué falla y cómo explicarlo con palabras propias, en inglés.' }
    ]
  },

  sections: [
    {
      id: 'que-es',
      eyebrow: 'Qué es y qué no es',
      h2: '¿Existen clases que combinen inglés y programación para niños?',
      lede: 'Sí, en el sentido de clases de programación dictadas en inglés. No en el sentido de un curso de idioma con algo de tecnología. Conviene saber cuál de las dos cosas se está comprando.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que sí ofrecemos',
          left: [
            'Un curso de programación completo, con su temario, sus proyectos y su avance, en el que todo lo que se dice está en inglés: la explicación del mentor, las preguntas del niño, los nombres de los bloques, los mensajes de error.',
            'Un mentor que sabe que el inglés del niño todavía está creciendo. Habla con frases cortas, repite, muestra en la pantalla y pide al niño que diga con sus palabras lo que entendió.',
            'Práctica oral real y frecuente, que es lo que más falta en el Perú según los datos de abajo.'
          ],
          rightH3: 'Lo que no ofrecemos',
          right: [
            'Clases de gramática, de vocabulario por temas o de preparación para exámenes de idioma. No somos una academia de inglés y no evaluamos el idioma.',
            'Un nivel de inglés garantizado al final. La mejora llega con el uso, y cada niño avanza distinto.',
            'Clases en español. Si el niño no entiende algo, el mentor lo dice de otra forma en inglés, con más ejemplos y más despacio.'
          ] },
        { kind: 'p', mt: true, html: 'En nuestras búsquedas de palabras clave para el Perú, la frase "clases de inglés y programación" casi no aparece; lo que sí aparece son búsquedas como "clases de programación en inglés" o "clases de programación para niños en inglés". Creemos que es porque las familias intuyen lo que explicamos aquí: no se trata de dos cursos, sino de uno en otro idioma. Nuestra guía principal sobre ese tema está en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'El inglés del colegio',
      h2: '¿Cuánto inglés da el colegio peruano y qué competencias pide?',
      lede: 'El Currículo Nacional trata el inglés como lengua extranjera con tres competencias propias y le da horas semanales en todos los grados, desde 1° de primaria hasta 5° de secundaria.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Horas semanales de Inglés en el plan de estudios del CNEB y lo que la clase de programación añade', head: ['Nivel y grados', 'Horas de Inglés por semana', 'Edad normativa', 'Qué añade programar en inglés (nuestro)'], rows: [
          ['Primaria, 1° y 2°', '2', '6 y 7 años', 'Escuchar instrucciones cortas y responder con gestos o una palabra'],
          ['Primaria, 3° a 6°', '3', '8 a 11 años', 'Leer bloques y explicar un programa con frases simples'],
          ['Secundaria, jornada regular', '3', '12 a 16 años', 'Leer mensajes de error y documentación técnica'],
          ['Secundaria, jornada escolar completa', '5', '12 a 16 años', 'Discutir un diseño y defender una decisión']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Currículo Nacional de la Educación Básica, planes de estudio de primaria ("Inglés 2 2 3 3 3 3"), secundaria con jornada escolar regular ("Inglés 3 3 3 3 3") y con jornada escolar completa ("Inglés 5 5 5 5 5"); cada hora pedagógica dura 45 minutos. Edades: tabla de edades normativas del MINEDU. La última columna es nuestra. Consultado en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Las tres competencias de inglés del CNEB son la 13, "Se comunica oralmente en inglés como lengua extranjera"; la 14, "Lee diversos tipos de textos escritos en inglés como lengua extranjera"; y la 15, "Escribe diversos tipos de textos en inglés como lengua extranjera". El perfil de egreso pide que el estudiante se comunique en inglés "de manera asertiva y responsable". Una clase de programación en inglés trabaja sobre todo la competencia oral, que es la que menos tiempo de práctica individual recibe en un aula de treinta alumnos.' },
        { kind: 'p', html: 'Para tenerlo claro: no damos notas de inglés ni de nada, no tenemos relación con el MINEDU y no reemplazamos el curso de Inglés del colegio. Lo complementamos con algo que el aula rara vez puede ofrecer: una hora en la que el niño necesita el idioma para conseguir algo que le importa.' }
      ]
    },
    {
      id: 'nivel',
      eyebrow: 'El inglés en el Perú',
      h2: '¿Qué nivel de inglés tiene el Perú y qué habilidad es la más débil?',
      lede: 'Según el EF English Proficiency Index 2025, el Perú está en el puesto 52 de 123 países, con 519 puntos y nivel "Moderate". La habilidad más baja es hablar: 480 puntos, frente a 540 en lectura.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Inglés en el Perú según el EF EPI 2025: puntaje por habilidad y por ciudad', head: ['Indicador', 'Puntaje', 'Banda de EF'], rows: [
          ['Perú, total', '519', 'Moderate'],
          ['Lectura (Reading)', '540', 'Moderate'],
          ['Escritura (Writing)', '514', 'Moderate'],
          ['Comprensión oral (Listening)', '499', 'Low'],
          ['Expresión oral (Speaking)', '480', 'Low'],
          ['Lima', '555', 'High'],
          ['Cusco', '520', 'Moderate'],
          ['Arequipa', '512', 'Moderate'],
          ['Huancayo', '499', 'Low']
        ] },
        { kind: 'source', html: 'Fuente: EF EPI 2025, página de Perú en ef.com, leída en noviembre de 2026. Las bandas de cada fila las asignamos nosotros con los cortes que publica EF en esa página (alta desde 550, moderada desde 500, baja desde 450). El promedio mundial es 488. Los grupos de edad del índice empiezan en 18 años: mide a adultos, no a niños.' },
        { kind: 'p', mt: true, html: 'La lectura de esta tabla para una familia es clara: en el Perú se lee inglés con más soltura de la que se habla. Es lo esperable cuando el idioma se aprende sobre todo con libros y ejercicios escritos. Lo que falta son horas de conversación con alguien que no cambia al español. Una clase de programación en vivo da exactamente eso: el niño tiene que escuchar a su mentor y contestarle, y lo hace por una razón concreta, porque quiere que su programa funcione.' },
        { kind: 'p', html: 'Las diferencias entre ciudades también importan. Lima figura en la banda alta, con 555 puntos, mientras que Huancayo queda en la baja, con 499. Por eso nunca damos por hecho el nivel de un niño por su ciudad: en la clase de prueba el mentor escucha primero y ajusta su forma de hablar después. Para familias de colegios bilingües limeños escribimos además una guía en inglés, <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>.' },
        { kind: 'p', html: 'Un dato del sistema público muestra hasta dónde puede llegar un estudiante peruano: según el MINEDU, en 2025 un total de 515 estudiantes de 5° de secundaria de los COAR obtuvieron certificaciones internacionales de inglés Cambridge. Lo citamos como contexto; no preparamos para esos exámenes ni tenemos relación con los COAR.' }
      ]
    },
    {
      id: 'en-clase',
      eyebrow: 'El idioma en clase',
      h2: '¿Cómo aprende inglés un niño en una clase de programación?',
      lede: 'Sin darse cuenta, y por necesidad. El mentor no enseña vocabulario: lo usa, siempre ligado a algo que el niño ve en la pantalla, y le pide que lo use de vuelta.',
      body: [
        { kind: 'table', numCols: [], caption: 'Las cuatro habilidades del idioma en una clase de programación (nuestra descripción)', head: ['Habilidad', 'Competencia del CNEB', 'Dónde aparece en la clase'], rows: [
          ['Escuchar', '13, comunicación oral', 'Las instrucciones y preguntas del mentor, siempre con la pantalla compartida'],
          ['Hablar', '13, comunicación oral', 'Explicar qué hace su programa y por qué falló'],
          ['Leer', '14, lectura', 'Nombres de bloques, palabras de Python y mensajes de error'],
          ['Escribir', '15, escritura', 'Nombres de variables, comentarios y el título de su proyecto']
        ] },
        { kind: 'source', html: 'La segunda columna remite a las competencias 13, 14 y 15 del CNEB; la relación con la clase es nuestra.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Primera semana.</strong> El niño responde con una palabra o un gesto: "yes", "here", "the cat". El mentor no corrige el idioma; confirma lo que entendió y sigue.',
          '<strong>Tercera o cuarta semana.</strong> Aparecen frases de tres o cuatro palabras: "it moves too fast", "I want a score". El niño ya usa los verbos de los bloques.',
          '<strong>Segundo mes.</strong> El mentor empieza a pedir el porqué: "why did it stop?". El niño arma respuestas con "because", aunque con errores.',
          '<strong>Tercer mes en adelante.</strong> El niño presenta su proyecto al final de la clase, un minuto, en inglés. Es la parte que más orgullo da a las familias.'
        ] },
        { kind: 'p', mt: true, html: 'Estas etapas son una descripción nuestra de lo que solemos ver, no una promesa: hay niños que hablan desde el primer día y otros que tardan más. Lo que no cambia es la regla del mentor: corregir el programa, nunca avergonzar por el idioma. Si busca una propuesta pensada para no perder el inglés durante enero y febrero, vea las <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a>.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Es verdad que programar en Python es leer inglés?',
      lede: 'En buena parte, sí. Lo comprobamos en clase con un programa corto: le pedimos a Python su propia lista de palabras reservadas y las clasificamos.',
      body: [
        { kind: 'p', html: 'La documentación oficial de Python explica que ciertas palabras son reservadas: "keywords of the language", que no se pueden usar como nombres propios y que "must be spelled exactly as written here". Python guarda esa lista en un módulo llamado <code>keyword</code>. El ejercicio, pensado por nosotros para niños de 10 a 12 años, consiste en separarlas en tres grupos: palabras comunes del inglés, valores especiales y abreviaturas técnicas.' },
        { kind: 'code', label: 'Las palabras reservadas de Python, en tres grupos', lang: 'Python', code: PY, note: '<code>everyday</code> y <code>values</code> son conjuntos: sirven para preguntar rápido si una palabra está dentro. <code>groups</code> es un diccionario donde cada grupo guarda una lista. La decisión de qué palabra es "común" es nuestra y se puede discutir.' },
        { kind: 'code', label: 'Salida en pantalla', lang: 'Salida', code: OUT, note: 'Salida literal de Python 3.14 en nuestro equipo. La cantidad de palabras reservadas puede cambiar entre versiones de Python, y por eso se le pregunta a Python en vez de escribirla a mano.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar.</strong> Python tiene 35 palabras reservadas en esta versión. El mentor pregunta: "how many do you already know?". Casi todos reconocen if, for, and, or, not, True y False.',
          '<strong>Clasificar.</strong> 26 de las 35 son palabras corrientes del inglés. El niño lee cada una en voz alta y dice qué significa fuera de la programación: "while" es "mientras", "return" es "devolver".',
          '<strong>Descubrir las raras.</strong> Seis son abreviaturas o términos técnicos: def viene de "define", elif de "else if", del de "delete". Cuando el niño lo descubre, ya no las memoriza: las entiende.',
          '<strong>Discutir el criterio.</strong> ¿Es "lambda" una palabra común? No en inglés de todos los días. ¿Y "yield"? Sí, aunque poco frecuente. El niño defiende su clasificación en inglés, que es justo la práctica que buscamos.',
          '<strong>Cambiar el programa.</strong> El reto: mover una palabra de grupo y comprobar que los números cambian. El código queda a su servicio, no al revés.'
        ] },
        { kind: 'p', mt: true, html: 'Esta clase muestra en pequeño toda la idea de la página. El niño programa de verdad, con conjuntos, diccionarios y bucles, y al mismo tiempo pasa una hora leyendo, pronunciando y discutiendo palabras en inglés. Ninguna de las dos cosas es un pretexto para la otra.' }
      ]
    },
    {
      id: 'para-quien',
      eyebrow: 'Para quién',
      h2: '¿Para qué niños conviene aprender a programar en inglés, y quién debería esperar?',
      lede: 'Conviene a casi todos los niños que ya estudian inglés en el colegio y disfrutan crear cosas. Hay dos casos en los que recomendamos ir más despacio, y lo decimos en la clase de prueba.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Le conviene', p: 'Al niño de colegio bilingüe que quiere usar su inglés en algo distinto del aula, y al de colegio regular que entiende más de lo que habla y necesita práctica oral con un propósito.' },
          { h3: 'Mejor uno a uno', p: 'Al niño muy tímido o con poco inglés: en una clase individual el mentor ajusta el ritmo sin que nadie más mire, y el niño gana confianza antes de pasar a un grupo.' },
          { h3: 'Mejor esperar', p: 'Al niño de 6 años que todavía no lee bien en castellano. Primero el razonamiento y la lectura; el inglés y la programación llegarán con más facilidad un poco después.' }
        ] },
        { kind: 'p', mt: true, html: 'Hay también una ventaja menos visible. Casi toda la documentación técnica, los foros de ayuda y los tutoriales de programación más completos están en inglés. Un niño que se acostumbra desde temprano a buscar y leer en ese idioma tendrá a la mano muchos más recursos cuando sea adolescente. Si su hijo ya está en secundaria, el <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a> sigue la misma lógica con temas de su edad.' },
        { kind: 'p', html: 'Al terminar un curso, el niño recibe un certificado de finalización emitido por Modern Age Coders sobre el curso de programación. No es un certificado de idioma ni tiene valor oficial en el colegio.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora son las clases en inglés con mentores en la India?',
      lede: 'A la que le acomode a su familia. La diferencia con la India es fija: diez horas y treinta minutos más allá, todo el año.',
      body: [
        { kind: 'p', html: 'Para convertir, Lima usa UTC-5 y la India UTC+5:30. Así, las 8:30 a. m. de un viernes limeño son las 7:00 p. m. del viernes en la India; las 11:30 a. m. de un domingo, las 10:00 p. m. de ese domingo; y las 2:00 p. m. de Lima, las 12:30 a. m. de la madrugada siguiente allá. Solo son conversiones: la familia reserva la hora y el mentor se organiza.' },
        { kind: 'p', html: 'Para el idioma, la constancia importa más que la duración. Dos clases por semana con el mismo mentor rinden más que una sesión larga, porque el niño se acostumbra a su voz, a su ritmo y a su acento, y pierde el miedo a responder.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se nota que el inglés de su hijo crece mientras programa?',
    lede: 'Cinco señales que comentamos con las familias. Son observaciones nuestras, no una medición del idioma ni un nivel oficial.',
    table: { caption: 'Cinco señales de inglés en uso durante la clase de programación (nuestras)', head: ['Señal', 'Momento habitual', 'Lo que se escucha'], rows: [
      ['1. Entiende', 'Primeras clases', 'Sigue instrucciones del mentor sin pedir traducción'],
      ['2. Nombra', 'Primer mes', 'Usa los nombres de bloques y palabras de código en voz alta'],
      ['3. Pide', 'Segundo mes', 'Hace preguntas propias: "can I add a timer?"'],
      ['4. Explica', 'Tercer mes', 'Dice por qué su programa falló, con "because"'],
      ['5. Presenta', 'Del cuarto mes en adelante', 'Muestra su proyecto un minuto, en inglés, sin guion']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Escuche el último minuto de una clase, cuando su hijo presenta. Ahí se oye el avance real.',
      'No le pida que traduzca lo que dijo. Pregúntele qué construyó: si se lo cuenta con palabras en inglés mezcladas, va muy bien.'
    ] },
    right: { h3: 'Para los niños', ps: [
      'Si no entiende, diga "again, please". Es la frase más útil de toda la clase.',
      'Equivocarse en inglés está permitido. Equivocarse en el código, también.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más dictados en inglés para niños',
    lede: 'Programación y matemática en directo, en grupo o individual, siempre en inglés y siempre con un mentor que se adapta al nivel del niño.',
    bands: [
      { num: 'I', h3: 'Para los más pequeños', sub: 'De 6 a 12 años', courses: [
        { code: 'IPN / PEQ / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonar con figuras', blurb: 'De 6 a 9 años: reglas y patrones, con muy poco texto.' },
        { code: 'IPN / PEQ / 02', slug: 'scratch-programming-complete-course', title: 'Scratch en inglés', blurb: 'Bloques con frases cortas que el niño repite y usa.' },
        { code: 'IPN / PEQ / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Números dichos en voz alta, en inglés, sin trucos.' }
      ] },
      { num: 'II', h3: 'Crear y contar', sub: 'De 7 a 14 años', courses: [
        { code: 'IPN / CREAR / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft', blurb: 'Órdenes en inglés para un agente que construye.' },
        { code: 'IPN / CREAR / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox', blurb: 'Luau, un lenguaje escrito con palabras inglesas.' },
        { code: 'IPN / CREAR / 03', slug: 'kids-ai-web-development-course', title: 'Páginas web', blurb: 'Una web propia con textos que el niño redacta.' }
      ] },
      { num: 'III', h3: 'Pensar en voz alta', sub: 'De 7 a 15 años', courses: [
        { code: 'IPN / VOZ / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas', blurb: 'Explicar cada paso de una solución antes de programarla.' },
        { code: 'IPN / VOZ / 02', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'De 10 a 15 años: problemas en inglés resueltos en Python.' },
        { code: 'IPN / VOZ / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Presentar un proyecto', blurb: 'De 8 a 12 años: inventar, construir y exponer en inglés.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es una clase de programación en inglés por videollamada?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Al volver del colegio', l: 'Con la cabeza todavía en modo clase.' },
      { time: 'Domingo por la mañana', l: 'Sin apuros ni tareas pendientes.' },
      { time: 'Horario móvil', l: 'En clases uno a uno, se reprograma con aviso.' }
    ],
    cells: [
      { h3: 'Solo inglés', p: 'El mentor no cambia al español: reformula, muestra y repite.' },
      { h3: 'Pantalla compartida', p: 'Cada palabra va unida a algo que el niño ve suceder.' },
      { h3: 'Sin corregir por corregir', p: 'Se corrige el programa; el idioma se acompaña.' },
      { h3: 'Un minuto para presentar', p: 'El niño cierra la clase contando lo que hizo.' },
      { h3: 'El mismo mentor', p: 'Para que el niño se acostumbre a una voz y un acento.' },
      { h3: 'Grupo o uno a uno', p: 'Quince a veinte niños, o solo su hijo.' }
    ]
  },

  projectsH2: 'Proyectos que nuestros alumnos presentan en inglés',
  projectsLede: 'Trabajos de estudiantes de varias edades y países. Puede ver más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Lo que familias y estudiantes escribieron en Google, en inglés, sin tocar una coma.',

  fees: {
    h2: 'Cuánto cuestan las clases de programación en inglés',
    lede: 'La tarifa mensual está en dólares estadounidenses y se cobra a una tarjeta; el banco de la tarjeta convierte el monto. No cobramos matrícula ni libros de idioma, porque no los hay.',
    free: ['Clase de prueba sin pago', 'El mentor escucha el inglés del niño y propone el formato', 'No pedimos tarjeta'],
    group: ['Quince a veinte niños de edad cercana', 'Dos sesiones en directo cada semana', 'Mentor fijo', 'Mensualidad sin plazo mínimo'],
    one: ['Su hijo con un mentor para él solo', 'Ritmo de idioma a su medida', 'Horario que se adapta a la casa']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Inglés y programación para niños: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, ni siquiera en parte. Se dictan en vivo, por internet y en inglés, con mentores desde la India que hablan claro y se adaptan al ritmo del niño. Ese es justamente el beneficio: el niño aprende programación y practica inglés al mismo tiempo, sobre todo el inglés hablado, que el EF EPI 2025 señala como la habilidad más débil en el Perú. En Lima, ese índice ubica el inglés en la banda "High".' },
      { q: '¿Ustedes enseñan inglés?', a: 'No como materia. Somos una academia de programación y matemática. No damos clases de gramática ni preparamos exámenes de idioma. El inglés se practica porque toda la clase ocurre en ese idioma.' },
      { q: '¿Mi hijo necesita hablar bien inglés?', a: 'No. Basta con que entienda frases sencillas. El mentor habla despacio, repite y muestra todo en la pantalla. Si el inglés es muy básico, recomendamos empezar con clases uno a uno.' },
      { q: '¿Mejorará su inglés?', a: 'Suele mejorar, sobre todo al hablar, porque el niño tiene que explicar su programa. Pero no prometemos un nivel ni lo medimos: cada niño avanza a su manera.' },
      { q: '¿Por qué programar en inglés y no en español?', a: 'Porque los lenguajes de programación ya están en inglés: en Python, 26 de sus 35 palabras reservadas son palabras comunes del inglés. Además, casi toda la documentación y la ayuda técnica están en ese idioma.' },
      { q: '¿Desde qué edad?', a: 'Desde los 6 años con bloques, siempre que el niño ya lea un poco en castellano. Entre los 9 y los 10 años se pasa a Python.' },
      { q: '¿Cuántas horas de inglés da el colegio?', a: 'Según el plan de estudios del CNEB, dos horas semanales en 1° y 2° de primaria, tres de 3° a 6°, tres en secundaria con jornada regular y cinco con jornada escolar completa.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, las 8:30 a. m. de Lima son las 7:00 p. m. en la India.' },
      { q: '¿Dan algún certificado de inglés?', a: 'No. Al terminar, el niño recibe un certificado de finalización del curso de programación, emitido por nosotros. No es un certificado de idioma ni tiene validez escolar.' },
      { q: '¿Cómo se paga?', a: 'Mensualmente, con tarjeta y en dólares estadounidenses; su banco hace la conversión. La clase de prueba es gratuita y no requiere tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más lecturas',
    h2: 'Si le interesa el lado del idioma',
    lede: 'Varias de estas páginas están en inglés: leerlas también es práctica.',
    items: [
      { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Vacaciones útiles virtuales en inglés', p: 'Un verano para no perder el inglés, programando.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'La guía completa para la primaria peruana.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para familias de colegios bilingües, en inglés.' },
      { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de inteligencia artificial en inglés', p: 'Para adolescentes que quieren ir más allá.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes for kids', p: 'El primer curso de muchos niños, con bloques que se leen en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Nuestra forma de dar cada clase en directo.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba en inglés',
    lede: 'En la sesión gratuita el mentor saluda a su hijo despacio, le pregunta qué le gusta y le propone mover un personaje con dos o tres instrucciones. Mientras tanto escucha cuánto inglés entiende y le recomienda grupo o clase individual.',
    readFirst: 'Si quiere ver primero cómo enseñamos, lea <a class="ag-inline-link" href="/how-we-teach">How we teach</a>; si su familia piensa sobre todo en el verano, las <a class="ag-inline-link" href="/vacaciones-utiles-virtuales-en-ingles">vacaciones útiles virtuales en inglés</a>.',
    note: 'No somos una academia de idiomas: enseñamos programación, en tiempo real, en inglés y desde la India. Antes de reservar, por WhatsApp le respondemos en castellano lo que necesite.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'En inglés', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques para niños' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python con IA' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'Qué es la IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación en inglés' },
        { href: '/vacaciones-utiles-virtuales-en-ingles', label: 'Verano en inglés' },
        { href: '/english-medium-coding-classes-lima', label: 'Colegios bilingües de Lima' }
      ] }
    ],
    bottomRight: 'Again, please: la frase más útil de la clase'
  },

  personalityCss: `
.ag-root.ag-ipn .ag-hero h1 { letter-spacing: -0.007em; max-width: 21ch; }
.ag-root.ag-ipn .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-ipn .ag-table td:last-child { font-style: italic; }
.ag-root.ag-ipn .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-ipn .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'CNEB competencies 13, 14 and 15 (English as a foreign language), perfil de egreso, weekly Inglés hours for primaria, secundaria JER and JEC, 45-minute teaching hour; MINEDU Edades normativas; EF EPI 2025 Peru page (national, skill and city scores, bands); MINEDU press note on COAR results (515 Cambridge English certificates, 2025); Python documentation, Lexical analysis (keywords); tzdata. The added-value column, the skill mapping, the stages, the signals, the keyword grouping and the Python example are our own.',
    localProject: 'A Python lesson for children of 10 to 12 learning to code in English: keyword.kwlist is read from Python itself (35 keywords on Python 3.14.8) and sorted with set membership into everyday English words (26), values (3) and short or technical words (6: async, def, del, elif, lambda, nonlocal). Run with python3 -I. Lesson family: a standard-library list, sets for membership and a dictionary of lists.',
    requiredMentions: ['Las palabras reservadas de Python, en tres grupos', "short or technical 6 ['async', 'def', 'del', 'elif', 'lambda', 'nonlocal']", 'how many do you already know?', 'Horas semanales de Inglés en el plan de estudios del CNEB y lo que la clase de programación añade', 'Inglés en el Perú según el EF EPI 2025: puntaje por habilidad y por ciudad', 'Las cuatro habilidades del idioma en una clase de programación (nuestra descripción)', 'Cinco señales de inglés en uso durante la clase de programación (nuestras)', 'Again, please: la frase más útil de la clase'],
    sources: [
      { claim: 'CNEB English competencies 13, 14 and 15; perfil de egreso; Inglés weekly hours (primaria 2 2 3 3 3 3; JER 3; JEC 5); 45-minute teaching hour.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 Peru: rank 52, score 519 moderate; Reading 540, Listening 499, Writing 514, Speaking 480; Lima 555, Cusco 520, Arequipa 512, Huancayo 499.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: '515 COAR 5° secundaria students earned Cambridge English certificates (2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'Python reserved words must be spelled exactly as written.', url: 'https://docs.python.org/3/reference/lexical_analysis.html' },
      { claim: 'Normative ages by grade.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' }
    ],
    rejectedClaims: [
      'Teaching English as a subject, English grammar or exam preparation: refused; the page says we are not a language academy.',
      'A guaranteed English level or an English certificate: refused; the page says we neither promise nor measure it.',
      'Reading EF EPI as a measure of Peruvian children: refused; the page says its age groups start at 18.',
      'Any MINEDU, COAR or Cambridge connection: none; the page says so.',
      'A fixed keyword count for every Python version: avoided; the program asks Python and the note says the count can change.'
    ]
  }
};

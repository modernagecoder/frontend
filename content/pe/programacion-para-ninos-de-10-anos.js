// SHIP: market | 10 años, 5° de primaria: el salto de bloques a Python, e IA sin cuentas de adulto | strings as sequences: compare with the reverse [::-1], clean the text first (palindromes)
'use strict';
// Programación para niños de 10 años (ag- Spanish-language door, Peru cluster row PE124, P4, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Search: "programacion para niños de 10 años" (KEYWORDS.md section 1, the strongest age phrase), "inteligencia artificial
// para niños de 10 años", "de quinto grado". Angle: the parent of a child in 5° de primaria (edad normativa 10 at 31 March)
// who asks whether it is time to leave blocks for real code. Spine: what a 10-year-old can build in Python and why 10 is the
// usual switch; what 5° gives (CNEB Tabla N.° 6, 5.° column; ciclo V; competency 28 level 5; the four maths competencies);
// a four-week bridge from Scratch to Python (ours); one Python lesson on palindromes; AI at 10 without adult accounts
// (OpenAI and Google terms via our audit); the step to secundaria (INEI: 68.2% of 6 to 11 vs 92.5% of 12 to 18 online;
// ENLA 2024 sample of 6°).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programacion-para-ninos-de-10-anos/,
// fetched 2026-11-08, quotes grepped in the raw text):
//  MINEDU Edades normativas (FACTS 13 to 15): "Se considera la edad normativa al 31 de marzo de cada año."; "V 5to grado
//    6to grado".
//  CNEB Tabla N.° 6, 5.° column: Matemática 4, Comunicación 4, Inglés 3, Personal social 4, Arte y cultura 3, Ciencia y
//    tecnología 4, Educación física 3, Educación religiosa 1, Tutoría 2, Horas de libre disponibilidad 2, Total 30; "horas
//    pedagógicas (45 minutos)"; competency 28 level 5 (PDF page 155 checked by eye): "personaliza de manera coherente y
//    organizada su espacio virtual representando su identidad, conocimiento y formas de interacción con otros. Elabora material
//    digital (presentaciones, videos, documentos, diseños, entre otros) comparando y seleccionando distintas actividades según
//    sus necesidades, actitudes y valores."; "Nivel 5 Nivel esperado al final del ciclo V"; maths (FACTS 55, 56): "Resuelve
//    problemas de regularidad, equivalencia y cambio", "Resuelve problemas de movimiento, forma y localización", "Resuelve
//    problemas de gestión de datos e incertidumbre", "Competencia 23: Resuelve problemas de cantidad."
//  ENLA 2024 note (FACTS 63): "así como una prueba muestral a 105 534 escolares de 6.º grado de primaria."
//  MINEDU 14 Oct 2026 (FACTS 18): "2.7 millones a escolares de primaria".
//  MINEDU 87,000 teachers (FACTS 50): "más de 87 000 docentes en el territorio nacional se han inscrito en el curso
//    "Inteligencia artificial (IA) en la práctica docente"".
//  INEI Boletín TIC II trimestre 2026: "el de 12 a 18 años con un 92,5%"; "el uso de Internet fue menor entre los niños de 6 a
//    11 años (68,2%)"; "el 87,4% destina su uso exclusivamente a actividades del hogar, como estudios, trabajos académicos".
//  AI tool ages, from content/ai-tool-age-audit.json (vendor pages quoted verbatim, audited 2026-07-15): OpenAI "You must be at
//    least 13 years old or the minimum age required in your country to consent to use the Services."; Google Gemini "You must
//    be 13 (or the applicable age in your country) or over to use Gemini with a personal or school Google Account".
//  Time: tzdata America/Lima UTC-5 no DST; Asia/Kolkata UTC+5:30.
// Our own calculations (python3 -I): 3 x 45 = 135 (Inglés), 4 x 45 = 180 (Matemática, Ciencia y tecnología), 30 x 45 = 1,350
//    minutes a week; 92.5 - 68.2 = 24.3 points.
// Our own example (pal1.py, pal2.py, pal3.py in the scratchpad, run with python3 -I), exact output:
//    v1: oso -> True / reconocer -> True / Ana -> False / Anita lava la tina -> False
//    v2: Ana -> True | ana / Anita lava la tina -> True | anitalavalatina / Never odd or even -> True | neveroddoreven /
//        ¿Acaso hubo búhos acá? -> False | acasohubobúhosacá
//    v3: ¿Acaso hubo búhos acá? -> True
// Lesson family: a string is a sequence; compare it with its reverse (slicing [::-1]); normalise the text (lower case, letters
// only, accents removed with a dictionary) before comparing.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY1 = [
  'def es_palindromo(texto):',
  '    return texto == texto[::-1]',
  '',
  "for frase in ['oso', 'reconocer', 'Ana', 'Anita lava la tina']:",
  "    print(frase, '->', es_palindromo(frase))"
].join('\n');

const OUT1 = [
  'oso -> True',
  'reconocer -> True',
  'Ana -> False',
  'Anita lava la tina -> False'
].join('\n');

const PY2 = [
  'def limpiar(texto):',
  "    letras = ''",
  '    for c in texto.lower():',
  '        if c.isalpha():',
  '            letras = letras + c',
  '    return letras',
  '',
  'def es_palindromo(texto):',
  '    t = limpiar(texto)',
  '    return t == t[::-1]',
  '',
  "for frase in ['Ana', 'Anita lava la tina', 'Never odd or even', '¿Acaso hubo búhos acá?']:",
  "    print(frase, '->', es_palindromo(frase), '|', limpiar(frase))"
].join('\n');

const OUT2 = [
  'Ana -> True | ana',
  'Anita lava la tina -> True | anitalavalatina',
  'Never odd or even -> True | neveroddoreven',
  '¿Acaso hubo búhos acá? -> False | acasohubobúhosacá'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para niños de 10 años' },
  slug: 'programacion-para-ninos-de-10-anos',
  code: 'paa',
  accent: '#443F00',
  accentRationale: 'Programación para niños de 10 años: a dark olive #443F00, the ripest of the olive family the age pages share, for the year a child moves from blocks to written code; contrast 8.71 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programación para niños de 10 años',
  title: 'Programación para niños de 10 años: Python en vivo y en inglés',
  description: 'Programación para niños de 10 años en Perú: el paso de Scratch a Python en 5° de primaria, IA sin cuentas de adulto y clases en vivo y en inglés, a toda hora.',
  ogDescription: 'Por qué los 10 años suelen ser la edad de pasar de bloques a Python, qué da 5° de primaria y una lección de palíndromos en Python escrita por nosotros.',
  twitterDescription: 'Programación para niños de 10 años en Perú: Python, juegos e IA en clases en vivo y en inglés.',
  pageName: 'Programación para niños de 10 años',
  webPageDescription: 'Guía para madres y padres en Perú con un hijo o hija de 10 años, en 5° de primaria: por qué suele ser la edad de pasar de los bloques a Python, qué incluye ese grado según el CNEB, un puente de cuatro semanas de Scratch a Python, una lección de palíndromos escrita y ejecutada por nosotros, cómo enseñamos inteligencia artificial a esta edad sin cuentas de adulto y qué cambia al llegar a secundaria.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 10 años en Perú, dictadas solo en inglés: Python desde cero, juegos en Roblox con Luau y proyectos de inteligencia artificial adecuados a la edad, en clase grupal o individual, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños de 10 años',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#diez', label: 'A los 10' },
    { href: '#quinto', label: '5° de primaria' },
    { href: '#puente', label: 'De Scratch a Python' },
    { href: '#palindromos', label: 'Ejemplo' },
    { href: '#ia', label: 'IA' }
  ],
  eyebrow: 'Perú &middot; Programación por edades &middot; 10 años',
  h1: 'Programación para niños de 10 años: el paso a Python, en inglés',
  lede: 'Diez años es la edad que más buscan los padres peruanos cuando piensan en programación, y no es casualidad: es el momento en que la mayoría de los niños puede dejar los bloques y escribir código de verdad. Aquí contamos cómo se da ese paso, qué le da el colegio en 5° de primaria y qué puede crear su hijo en una clase en vivo, en inglés.',
  secondaryCta: { href: '#palindromos', label: 'Ver la lección de palíndromos' },
  wa: 'Hola Modern Age Coders, tenemos un hijo o hija de 10 años en 5° de primaria en Perú y queremos que aprenda Python en inglés. ¿Podemos agendar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; a los 10, primeras líneas de Python con un mentor que habla en inglés claro',
  spec: [
    ['Edad', '10 años, 5° de primaria'],
    ['Lenguajes', 'Python, y Luau en Roblox'],
    ['Requisito', 'Leer con soltura y usar un teclado'],
    ['Formato', 'Grupo de quince a veinte, o uno a uno'],
    ['Horario', 'Se acuerda con la familia, a cualquier hora'],
    ['Primera clase', 'Sin costo y sin tarjeta']
  ],
  capsuleQ: 'La respuesta en un párrafo',
  capsule: 'A los 10 años, en 5° de primaria, la mayoría de los niños ya puede dejar los bloques y escribir Python: lee con soltura, usa el teclado y entiende que un programa es texto con reglas exactas. Con Modern Age Coders su hijo aprende Python, juegos en Roblox y proyectos de inteligencia artificial adecuados a su edad, en clases en vivo, en línea y en inglés guiadas por un mentor desde la India que habla con claridad y al ritmo del niño. La familia elige entre clase grupal o clases individuales y fija el día y la hora que prefiera; la primera clase es gratis.',

  picks: {
    eyebrow: 'Cursos para los 10 años',
    h2: 'Tres cursos para el año del salto a Python',
    lede: 'El primero es el camino directo a Python; el segundo lleva el código a los videojuegos; el tercero usa la programación para entender a fondo la matemática del colegio.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PAA / 01', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'Pensado para chicos de 9 a 12. Figuras trazadas con la tortuga, cuestionarios que llevan la cuenta y proyectos sencillos de IA, todo tecleado por el propio niño.' },
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'PAA / 02', title: 'Juegos en Roblox con Luau', alt: 'Imagen del curso de juegos en Roblox con Luau', note: 'De 8 a 14 años. A los 10 el niño ya escribe sus propios scripts en Luau: monedas que suman, puertas que se abren, tiendas dentro del juego.' },
      { course: 'maths-through-coding', code: 'PAA / 03', title: 'Matemática programando', alt: 'Imagen del curso de matemática con Python', note: 'De 10 a 15 años. Fracciones, patrones y datos explorados con Python, para que la matemática se vea y se pruebe en lugar de solo memorizarse.' }
    ]
  },

  sections: [
    {
      id: 'diez',
      eyebrow: 'A los 10 años',
      h2: '¿Qué puede aprender un niño de 10 años en programación?',
      lede: 'Un lenguaje escrito de verdad. A esta edad el niño ya no necesita que el programa sea de colores para entenderlo: puede leer una línea de Python, adivinar qué hace y cambiarla para que haga otra cosa.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Escribir, no arrastrar', p: 'En Python cada instrucción se escribe letra por letra, con reglas estrictas: un paréntesis de menos y el programa no corre. A los 10 años esa exigencia ya no frustra; muchos niños la viven como un desafío.' },
          { h3: 'Funciones propias', p: 'Un niño de 10 años puede inventar una función, darle un nombre y usarla muchas veces. Es la idea que permite dividir un problema grande en piezas, y en el ejemplo de esta página la usamos para detectar palíndromos.' },
          { h3: 'Juegos y datos', p: 'Con Python arma juegos de preguntas, adivinanzas con números, dibujos con la tortuga y pequeñas tablas de datos. Con Roblox escribe scripts que mueven cosas dentro de un mundo 3D.' }
        ] },
        { kind: 'p', mt: true, html: '¿Por qué justo a los 10? No hay una edad mágica, y hay niños de 9 listos y niños de 11 que todavía disfrutan más con bloques. Pero alrededor de 5° de primaria coinciden tres cosas: la lectura se vuelve fluida, el niño usa el teclado sin buscar cada letra, y en matemática ya trabaja con operaciones y patrones que le permiten entender variables y bucles. Si su hijo cumple esas tres condiciones, puede empezar Python desde cero aunque nunca haya tocado Scratch.' },
        { kind: 'p', html: 'Lo que pedimos a esta edad es otra cosa: que el niño programe él mismo. Hoy hay herramientas que escriben código solas, y un niño de 10 años puede pedirle a alguien (o a algo) que le resuelva el ejercicio. En nuestras clases el mentor no copia soluciones ni deja que se copien: pregunta, espera y le pide al niño que prediga qué hará su programa antes de ejecutarlo. Ese hábito de pensar primero es lo que queremos que se lleve.' }
      ]
    },
    {
      id: 'quinto',
      eyebrow: 'El colegio en 5°',
      h2: '¿Qué aprende un niño en 5° de primaria y qué le falta?',
      lede: 'En 5° de primaria el niño está en el ciclo V del CNEB, con 30 horas pedagógicas por semana repartidas en diez rubros. La matemática, la lectura y el inglés tienen su espacio; la programación no aparece como área.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'La semana completa de 5° de primaria según el CNEB, en horas pedagógicas y en minutos', head: ['Área o rubro', 'Horas', 'Minutos (cuenta nuestra)'], rows: [
          ['Matemática', '4', '180'],
          ['Comunicación', '4', '180'],
          ['Inglés', '3', '135'],
          ['Personal social', '4', '180'],
          ['Arte y cultura', '3', '135'],
          ['Ciencia y tecnología', '4', '180'],
          ['Educación física', '3', '135'],
          ['Educación religiosa', '1', '45'],
          ['Tutoría y orientación educativa', '2', '90'],
          ['Horas de libre disponibilidad', '2', '90'],
          ['Total', '30', '1,350']
        ] },
        { kind: 'source', html: 'Fuente: Tabla N.° 6 del Currículo Nacional de la Educación Básica (MINEDU), columna de 5.°, que mide en "horas pedagógicas (45 minutos)". El grado y la edad salen del documento de edades normativas del MINEDU: 5° de primaria corresponde a 10 años cumplidos al 31 de marzo, y 5° y 6° forman el ciclo V. Consultado el 8 de noviembre de 2026. Los minutos los calculamos nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Tecnología: el nivel del ciclo V',
          left: [
            'La competencia 28 del CNEB, sobre los entornos virtuales, espera que al final del ciclo V el estudiante "personaliza de manera coherente y organizada su espacio virtual" y "elabora material digital (presentaciones, videos, documentos, diseños, entre otros) comparando y seleccionando distintas actividades según sus necesidades".',
            'Es decir: presentaciones, videos y documentos. Crear un programa propio va un paso más allá de lo que pide el colegio, y es justo el paso que da un niño de 10 años en una clase de Python.'
          ],
          rightH3: 'Matemática: cuatro competencias',
          right: [
            'El área de Matemática del CNEB se organiza en cuatro competencias. La número 23 es "Resuelve problemas de cantidad"; las otras tratan de regularidad, equivalencia y cambio; de movimiento, forma y localización; y de gestión de datos e incertidumbre.',
            'Las cuatro tienen un espejo en la programación: contar y operar, encontrar patrones, mover objetos en una pantalla con coordenadas y ordenar datos en listas. Por eso nuestro curso de matemática con Python encaja tan bien a esta edad.'
          ] },
        { kind: 'p', mt: true, html: 'Según el MINEDU, en su nota del 14 de octubre de 2026, los materiales del año escolar 2027 alcanzarán a 2.7 millones de escolares de primaria. Su hijo es uno de ellos, y nada de lo que hagamos reemplaza lo que hace su colegio. Trabajamos aparte, en otro horario, sin relación con el MINEDU ni con ninguna institución educativa, y sin notas: cuando un curso termina, el niño recibe una constancia de finalización emitida por Modern Age Coders.' }
      ]
    },
    {
      id: 'puente',
      eyebrow: 'De Scratch a Python',
      h2: '¿Cómo pasa un niño de Scratch a Python a los 10 años?',
      lede: 'Con un puente corto, no con un salto al vacío. Este es el plan de cuatro semanas que usamos con niños de 10 años que vienen de bloques; quien empieza de cero hace lo mismo con un poco más de calma.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuatro semanas de Scratch a Python (plan nuestro, ajustable a cada niño)', head: ['Semana', 'Lo que ya sabía en Scratch', 'Cómo se escribe en Python'], rows: [
          ['1', 'El bloque "decir" y las variables', '<code>print()</code> y una variable con nombre, como <code>puntos = 0</code>'],
          ['2', 'El bloque "repetir 10"', '<code>for i in range(10):</code> y la sangría que marca qué se repite'],
          ['3', 'El bloque "si... entonces... si no"', '<code>if</code>, <code>else</code> y las comparaciones <code>==</code>, <code>&lt;</code>, <code>&gt;</code>'],
          ['4', 'Los "bloques propios"', '<code>def</code> para crear una función y <code>return</code> para devolver un resultado']
        ] },
        { kind: 'source', html: 'Plan de Modern Age Coders. El mentor alarga cualquier semana si hace falta; lo importante es que el niño reconozca cada idea que ya conocía en su nueva forma escrita.' },
        { kind: 'p', mt: true, html: 'Lo que más cuesta en ese puente no son las ideas, que el niño ya domina, sino la precisión. En Scratch un bloque no puede quedar mal encajado; en Python una comilla olvidada o una sangría torcida rompen el programa. Las primeras semanas el mentor dedica tiempo a leer los mensajes de error con el niño, en inglés, hasta que deja de verlos como un regaño y empieza a verlos como pistas: "<em>SyntaxError</em>" quiere decir que algo está mal escrito, y la flecha señala dónde.' },
        { kind: 'p', html: 'Si su hijo todavía no hizo nada de bloques, no hace falta que retroceda. A los 10 años puede empezar directamente en Python, y el mentor usa dibujos y comparaciones con juegos que conoce para explicar cada idea. Lo que sí recomendamos es que haya hecho algo de mecanografía básica: escribir sin mirar cada tecla hace que la clase rinda el doble.' }
      ]
    },
    {
      id: 'palindromos',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo es una clase de Python para un niño de 10 años?',
      lede: 'Esta lección la escribimos y la corrimos nosotros, tal como se da en clase. El tema son los palíndromos, palabras y frases que se leen igual al derecho y al revés. Los niños los adoran, y esconden una lección de programación sobre texto y limpieza de datos.',
      body: [
        { kind: 'code', label: 'Versión 1: comparar la palabra con su reverso', lang: 'Python', code: PY1, note: 'En Python, <code>texto[::-1]</code> da el texto al revés. Si son iguales, es palíndromo. Antes de ejecutar, el mentor pregunta en inglés: "Which ones will be True?"' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT1, note: 'Salida copiada tal cual de la consola de Python 3. Casi todos los niños predicen que "Ana" será <code>True</code>, y se sorprenden.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Investigar la sorpresa.</strong> ¿Por qué "Ana" da <code>False</code>? El niño escribe <code>print(\'Ana\'[::-1])</code> y ve <code>anA</code>: la mayúscula quedó al final, y para Python "A" y "a" son letras distintas.',
          '<strong>Investigar la segunda.</strong> "Anita lava la tina" falla por las mayúsculas y además por los espacios: al revés, los espacios caen en otros lugares. El niño los cuenta con el dedo en la pantalla.',
          '<strong>Proponer un arreglo.</strong> El mentor pregunta: "What should we remove before comparing?" El niño propone pasar todo a minúsculas y quitar lo que no sea letra. Así nace la función <code>limpiar</code>.'
        ] },
        { kind: 'code', label: 'Versión 2: limpiar antes de comparar', lang: 'Python', code: PY2, note: 'Ahora el programa también imprime la versión limpia de cada frase, para ver exactamente qué se está comparando.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta de la consola. Tres frases pasan, una en inglés incluida. Pero "¿Acaso hubo búhos acá?" sigue fallando, y la columna de la derecha muestra por qué: <code>búhos</code> y <code>acá</code> conservan sus tildes.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El último detalle.</strong> Al revés, "acá" empieza con "á" con tilde, y el comienzo de la frase tenía "a" sin tilde. Para Python son letras diferentes.',
          '<strong>Un diccionario de tildes.</strong> El niño crea <code>SIN_TILDE = {\'á\': \'a\', \'é\': \'e\', \'í\': \'i\', \'ó\': \'o\', \'ú\': \'u\'}</code> y, dentro de <code>limpiar</code>, cambia cada letra por <code>SIN_TILDE.get(c, c)</code>. Al ejecutar otra vez, la consola responde <code>¿Acaso hubo búhos acá? -&gt; True</code>.',
          '<strong>Su propio palíndromo.</strong> El reto final es encontrar o inventar uno, en castellano o en inglés, y probarlo. Muchos niños vuelven a la clase siguiente con una lista entera.'
        ] },
        { kind: 'p', mt: true, html: 'La lección parece un juego de palabras, pero enseña algo que usan los programadores todos los días: los datos reales vienen sucios, con mayúsculas, espacios, signos y tildes, y antes de compararlos hay que limpiarlos. También enseña a no rendirse con el primer arreglo: la versión 2 resolvió tres casos y dejó uno, y fue ese caso el que llevó a la mejora final. Y para un niño peruano tiene un bonus: el castellano tiene tildes y signos de interrogación al inicio, algo que el inglés no tiene, y descubrirlo en el código es una pequeña lección de los dos idiomas.' }
      ]
    },
    {
      id: 'ia',
      eyebrow: 'Inteligencia artificial',
      h2: '¿Inteligencia artificial para niños de 10 años: qué se puede enseñar?',
      lede: 'Mucho, pero no pidiéndole que abra una cuenta en un chatbot. Los asistentes más conocidos piden 13 años como mínimo, y nosotros respetamos esas reglas.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dicen las condiciones de uso',
          left: [
            'Las condiciones de OpenAI para ChatGPT dicen: "You must be at least 13 years old or the minimum age required in your country to consent to use the Services", y piden permiso de los padres hasta los 18. Google pide 13 años para usar Gemini con una cuenta personal o escolar.',
            'Las citamos de nuestra guía de edades de herramientas de IA, que copia el texto de cada empresa tal como lo publica (revisión de julio de 2026). Un niño de 10 años no cumple esa edad, así que en clase no le pedimos que use estas herramientas con su propia cuenta.'
          ],
          rightH3: 'Lo que sí hacemos a los 10',
          right: [
            'Explicamos cómo "aprende" una máquina con ejemplos que el niño programa él mismo: un clasificador sencillo que adivina una fruta por su dulzor, un juego que aprende de los errores del jugador, una lista de reglas que decide si un mensaje es amable o no.',
            'Así el niño entiende que la IA no piensa, sino que encuentra patrones en datos, y que se equivoca cuando los datos son pocos o están mal. Para el verano tenemos una guía de <a class="ag-inline-link" href="/vacaciones-utiles-2027-inteligencia-artificial">vacaciones útiles 2027 de inteligencia artificial</a> que ordena este camino por edades.'
          ] },
        { kind: 'p', mt: true, html: 'Los profesores peruanos también están aprendiendo sobre IA: el MINEDU informó que más de 87,000 docentes se inscribieron en su curso gratuito "Inteligencia artificial (IA) en la práctica docente" en 2025. Es probable que su hijo empiece a escuchar sobre IA en el colegio. Lo que le damos nosotros es la otra mitad: entender por dentro cómo funciona y aprender a no tomar como verdad todo lo que una máquina responde. Es la diferencia entre usar una herramienta y depender de ella.' }
      ]
    },
    {
      id: 'clase',
      eyebrow: 'La clase',
      h2: '¿Cuánto tiempo y cómo practica un niño de 10 años?',
      lede: 'A los 10 años un niño ya sostiene un problema durante un buen rato, siempre que sienta que avanza. Por eso cada clase tiene un objetivo claro y un pequeño logro visible al final.',
      body: [
        { kind: 'ol', items: [
          '<strong>Predecir.</strong> El mentor muestra un programa corto y pregunta qué va a imprimir. El niño responde antes de ejecutar, por escrito o en voz alta.',
          '<strong>Comprobar.</strong> Se ejecuta. Si la predicción falló, eso es lo más valioso de la clase: hay algo que el niño todavía no ve, y se busca juntos.',
          '<strong>Construir.</strong> Con la idea del día, el niño amplía su proyecto: una pregunta más en su juego, un color más en su dibujo, un caso más en su función.',
          '<strong>Romper a propósito.</strong> El mentor le pide cambiar algo para que el programa falle y leer el error en inglés. Es un modo excelente de perderle el miedo a los mensajes rojos.',
          '<strong>Contar.</strong> Al final, el niño explica en inglés qué hizo y qué aprendió. Frases cortas bastan; el mentor ayuda con las palabras que faltan.'
        ] },
        { kind: 'source', html: 'Estructura de clase propia; el mentor la ajusta a cada grupo y a cada niño.' },
        { kind: 'p', mt: true, html: 'Entre clase y clase no damos tareas largas. Sugerimos diez o quince minutos, dos o tres veces por semana, para jugar con lo que hizo en clase: cambiar números, agregar palabras, probar ideas propias. Un niño de 10 años aprende más con esos ratos cortos y frecuentes que con una tarde entera antes de la clase. El INEI encontró en el segundo trimestre de 2026 que el 87,4 % de los hogares con computadora la usa exclusivamente para actividades del hogar, como estudios y trabajos académicos: si su hogar es uno de ellos, ese rato de práctica tiene dónde hacerse.' }
      ]
    },
    {
      id: 'secundaria',
      eyebrow: 'Rumbo a secundaria',
      h2: '¿Qué cambia entre los 10 y los 12 años?',
      lede: 'Dos años después su hijo estará en 1° de secundaria, con otro horario, más cursos y mucho más tiempo en internet. Programar a los 10 le da una base para ese cambio.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Uso de internet en Perú por grupo de edad, segundo trimestre de 2026 (INEI)', head: ['Grupo de edad', 'Usó internet', 'Lo que significa para su hijo (nuestra lectura)'], rows: [
          ['6 a 11 años', '68,2 %', 'Todavía uno de cada tres niños no se conecta'],
          ['12 a 18 años', '92,5 %', 'Llegando a secundaria, se conectan más de nueve de cada diez'],
          ['Diferencia', '24,3 puntos (cuenta nuestra)', 'El salto llega justo al pasar de primaria a secundaria']
        ] },
        { kind: 'source', html: 'Fuente: INEI, boletín "Estadísticas de las tecnologías de información y comunicación en los hogares", segundo trimestre de 2026, Encuesta Nacional de Hogares. Consulta del 8/11/2026; la resta y la columna de la derecha son nuestras.' },
        { kind: 'p', mt: true, html: 'Ese salto de 24,3 puntos tiene una cara buena y una que preocupa a muchos padres. La buena: en secundaria su hijo tendrá más oportunidades de crear con tecnología. La que preocupa: pasará más tiempo frente a pantallas que no eligió. Un niño que a los 10 años ya entiende que detrás de cada app hay un programa escrito por alguien mira las pantallas de otra manera, con más curiosidad y más criterio.' },
        { kind: 'p', html: 'El MINEDU también evaluó a los niños de 6° de primaria: la ENLA 2024 incluyó una prueba muestral a 105,534 escolares de ese grado, además del censo de 4°. No preparamos para esas pruebas, pero sí trabajamos el razonamiento que la matemática de fin de primaria exige. Si su hijo es de los que disfrutan los retos de números, cuando llegue a secundaria le esperan la ONEM y otras competencias; nuestra página para <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-isidro-lima">secundaria en San Isidro</a> cuenta qué fechas tienen y cómo encajar la programación con ellas.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puede tener clase un niño de 10 años en Perú?',
      lede: 'A la que acomode a su familia. A los 10 años los niños suelen tener más actividades, así que la flexibilidad pesa más que nunca.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias entre la hora de Perú y la de la India (ejemplos de conversión, no horarios fijos)', head: ['Reloj en Perú', 'Reloj en la India', 'Fecha en la India'], rows: [
          ['7:30 a. m.', '6:00 p. m.', 'Misma fecha'],
          ['11:00 a. m.', '9:30 p. m.', 'Misma fecha'],
          ['3:30 p. m.', '2:00 a. m.', 'Ya es el día siguiente'],
          ['8:30 p. m.', '7:00 a. m.', 'Ya es el día siguiente']
        ] },
        { kind: 'source', html: 'Perú usa UTC-5 en todas las estaciones, sin adelantar el reloj, según la base de husos horarios tzdata y la hora legal que difunde el INACAL. La India usa UTC+5:30. La diferencia es fija: diez horas y media. Conversiones nuestras, revisadas en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Al reservar, usted ve los horarios disponibles ya en hora peruana, así que no hace falta convertir nada. Si su hijo va al colegio en el turno mañana, la tarde después de las tareas suele funcionar; si va en el turno tarde, las mañanas quedan libres. En enero, febrero y marzo, con el colegio cerrado, muchas familias aprovechan para empezar; la página de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación</a> propone un plan de verano en semanas.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se ve el avance de un niño de 10 años en Python?',
    lede: 'Durante el primer año de Python miramos cinco señales, propias, y con ellas informamos a la familia.',
    table: { caption: 'Cinco señales de avance en Python a los 10 años (nuestras)', head: ['Señal', 'Qué hace su hijo', 'Ejemplo'], rows: [
      ['1. Lee antes de correr', 'predice la salida de un programa de cinco líneas', 'acierta qué imprime un bucle de tres vueltas'],
      ['2. Lee los errores', 'encuentra la línea que falla a partir del mensaje', 'arregla una comilla que falta sin ayuda'],
      ['3. Crea funciones', 'escribe una función con un nombre claro y la usa varias veces', '<code>es_palindromo</code>'],
      ['4. Limpia datos', 'prepara el texto o los números antes de usarlos', 'quita espacios y tildes antes de comparar'],
      ['5. Termina un proyecto', 'planifica, construye y presenta un programa propio', 'un juego de preguntas que lleva la cuenta de los aciertos']
    ] },
    left: { h3: 'Para la familia', ps: [
      'El indicador que más cuenta no es cuántas líneas escribe su hijo, sino si puede explicarle por qué su programa hace lo que hace. Pídale que se lo cuente; si mezcla castellano e inglés, todavía más.',
      'Los atascos son normales. Lo importante es que sepa qué hacer cuando aparecen: leer el error, revisar línea por línea, preguntar.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Antes de apretar Run, diga qué espera ver. Después, compare.',
      'Un mensaje de error en rojo no es un castigo: es una pista con el número de línea.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Otros nueve cursos que encajan a los 10',
    lede: 'Todos se enseñan en vivo y en inglés. Están ordenados según lo que más le guste a su hijo: crear, entender la IA o pensar con números.',
    bands: [
      { num: 'I', h3: 'Crear con código', sub: 'De 9 a 14 años', courses: [
        { code: 'PAA / CREAR / 01', slug: 'kids-ai-web-development-course', title: 'Una página web propia', blurb: 'HTML y CSS para publicar su primera web, de 9 a 12 años.' },
        { code: 'PAA / CREAR / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Videojuegos con Godot', blurb: 'Juegos en 2D y 3D con GDScript, para chicos de 10 a 17 años.' },
        { code: 'PAA / CREAR / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Un segundo lenguaje escrito, con acertijos y juegos de consola.' }
      ] },
      { num: 'II', h3: 'Entender la IA', sub: 'Sin cuentas de adulto', courses: [
        { code: 'PAA / IA / 01', slug: 'ai-literacy-for-kids-course', title: 'Cómo funciona la IA', blurb: 'Datos, patrones y errores de las máquinas, explicados para niños.' },
        { code: 'PAA / IA / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Crear con ayuda de la IA', blurb: 'Juegos hechos con apoyo de IA, revisando y entendiendo cada paso.' },
        { code: 'PAA / IA / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Preparación para un hackatón', blurb: 'Idear, construir y presentar un proyecto en equipo, de 8 a 12 años.' }
      ] },
      { num: 'III', h3: 'Pensar con números', sub: 'De 9 a 13 años', courses: [
        { code: 'PAA / NUM / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas paso a paso', blurb: 'Descomponer, buscar patrones y diseñar algoritmos.' },
        { code: 'PAA / NUM / 02', slug: 'middle-school-math-competitions-course', title: 'Competencias de matemática', blurb: 'Problemas de olimpiada originales, para quien disfruta los retos.' },
        { code: 'PAA / NUM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria', blurb: 'Refuerzo en vivo de 1° a 5°, ubicado según el nivel real del niño.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases de un niño de 10 años?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para niños del turno tarde o en vacaciones.' },
      { time: 'Tarde o noche temprana', l: 'Después del colegio, las tareas y el deporte.' },
      { time: 'Clase individual', l: 'El horario lo propone usted, semana a semana.' }
    ],
    cells: [
      { h3: 'Predecir primero', p: 'Cada programa se adivina antes de ejecutarse.' },
      { h3: 'Errores como pistas', p: 'Se leen en inglés y se usan para avanzar.' },
      { h3: 'Sin copiar', p: 'El niño escribe cada línea; el mentor pregunta, no dicta.' },
      { h3: 'Proyectos propios', p: 'Juegos, dibujos y herramientas que el niño elige.' },
      { h3: 'Mismo mentor', p: 'Conoce el ritmo de su hijo de una clase a otra.' },
      { h3: 'Reporte breve', p: 'La familia sabe qué se trabajó y qué sigue.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes que empezaron así',
  projectsLede: 'Muchos de nuestros estudiantes mayores escribieron su primera línea de Python a los 10. Estos son algunos de sus proyectos; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Reseñas de Google escritas por familias y estudiantes; las dejamos en el inglés en que fueron escritas.',

  fees: {
    h2: 'Precio de las clases para un niño de 10 años en Perú',
    lede: 'Mostramos la tarifa mensual en dólares estadounidenses, que se paga con tarjeta. Su banco convierte el cargo a su moneda con el cambio del momento, por eso el monto en su estado de cuenta puede variar ligeramente. La clase de prueba es gratuita.',
    free: ['Una clase de prueba gratuita', 'El mentor decide si empezar con bloques o con Python', 'Sin datos de tarjeta'],
    group: ['De quince a veinte niños de edad cercana', 'El mismo mentor de principio a fin', 'Dos clases en vivo por semana', 'Mensualidad sin contrato largo'],
    one: ['Solo su hijo y el mentor', 'Un plan hecho a su medida', 'Día y hora a elección de la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños de 10 años: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Son clases en vivo y en línea dictadas en inglés, con un mentor desde la India. Lo vemos como una ventaja: Python está escrito con palabras inglesas, así que su hijo aprende el idioma del código y practica inglés hablado en la misma hora. El EF EPI 2025 sitúa a Lima en el nivel alto de inglés, y la expresión oral es lo que más gana con una clase conversada.' },
      { q: '¿Qué aprende un chico de 10 años en sus clases de programación?', a: 'Python desde cero: variables, condiciones, bucles, listas y funciones propias, aplicados a juegos, dibujos y pequeños proyectos. También puede escribir scripts en Luau para Roblox y entender por dentro cómo funciona la inteligencia artificial.' },
      { q: '¿Conviene empezar con Scratch o directamente con Python a los 10 años?', a: 'Si su hijo lee con fluidez y usa el teclado, puede empezar directamente con Python. Si viene de Scratch, usamos un puente de cuatro semanas que traduce cada bloque conocido a su forma escrita.' },
      { q: '¿En qué grado está un niño de 10 años en Perú?', a: 'En 5° de primaria, según la edad normativa que el MINEDU fija al 31 de marzo. Con 6° forma el ciclo V del CNEB.' },
      { q: '¿Puede un niño de 10 años usar ChatGPT en las clases?', a: 'No con su propia cuenta. OpenAI exige un mínimo de 13 años, y entre los 13 y los 17 la autorización de un padre o tutor, y Google pide 13 años para Gemini. A los 10 enseñamos cómo funciona la IA con programas que el niño escribe él mismo.' },
      { q: '¿Se enseña programación en 5° de primaria?', a: 'No como área. La semana de 5° tiene 30 horas pedagógicas repartidas entre Matemática, Comunicación, Inglés, Ciencia y tecnología y otras áreas, sin un curso de computación. El CNEB espera que el niño elabore material digital como presentaciones y videos, no que programe.' },
      { q: '¿Cuánto debe practicar en casa?', a: 'Poco y seguido: diez o quince minutos, dos o tres veces por semana, jugando con lo que hizo en clase. No damos tareas largas.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Un ejemplo: 11:00 a. m. en Lima equivale a 9:30 p. m. en la India, con la misma diferencia en enero que en julio.' },
      { q: '¿Qué computadora necesita?', a: 'Basta un equipo de escritorio o portátil que tenga teclado, cámara y micrófono, más un internet que no se corte. Python se instala gratis en la primera clase, o se usa en el navegador.' },
      { q: '¿Recibe algún certificado?', a: 'Al cerrar cada curso le damos una constancia nuestra, firmada por Modern Age Coders. No es un documento oficial del sistema educativo peruano: no tenemos relación con el MINEDU ni con ningún colegio.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras guías útiles para familias con niños de fin de primaria. Las de Perú están en castellano.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú', p: 'Todo nuestro trabajo con familias peruanas en un solo lugar.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Primaria en inglés', p: 'De 6 a 12 años, con una lección de Python sobre colores en inglés.' },
      { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano de IA', p: 'Inteligencia artificial por edades para enero a marzo de 2027.' },
      { href: '/coding-for-10-year-olds', label: 'Coding for 10 year olds', p: 'Nuestra guía general en inglés para esta misma edad.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Más de cien herramientas de IA y la edad mínima que exige cada fabricante.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Por qué en nuestras clases el niño escribe cada línea.' }
    ]
  },

  start: {
    h2: 'Agende una clase gratis para su hijo de 10 años',
    lede: 'En la clase de prueba el mentor charla con su hijo en un inglés claro, le muestra un programa corto en Python y le pide adivinar qué hace. Con lo que observa le recomendamos si empezar con bloques o directamente con código, y en qué formato.',
    readFirst: 'Para saber más antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explica nuestro método y <a class="ag-inline-link" href="/courses">All courses</a> muestra todos los cursos (páginas en inglés).',
    note: 'Las clases se dan en vivo y por internet, con mentores que están en la India, exclusivamente en inglés. Puede escribirnos por WhatsApp en castellano para cualquier consulta.',
    formNote: 'Gratis, sin tarjeta y sin compromiso alguno.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para los 10 años', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox con Luau' },
        { href: '/courses/maths-through-coding', label: 'Matemática con Python' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Primaria en inglés' },
        { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano de IA' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' }
      ] }
    ],
    bottomRight: 'Limpiar antes de comparar'
  },

  personalityCss: `
.ag-root.ag-paa .ag-hero h1 { letter-spacing: -0.014em; max-width: 23ch; }
.ag-root.ag-paa .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-paa .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-paa .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-paa .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Edades normativas (31 March; 5° de primaria = 10 años, ciclo V), CNEB Tabla N.° 6 (5.° column), competency 28 level 5 (PDF page 155 checked by eye), the four maths competencies and competency 23, ENLA 2024 note (6° sample), press notes of 14 October 2026 and on the 87,000 teachers in the AI course; INEI Boletín TIC II trimestre 2026; OpenAI and Google terms via content/ai-tool-age-audit.json (audited 2026-07-15); tzdata for time. All read 8 November 2026. The bridge plan, class structure, signals and example are our own.',
    localProject: 'Palindromes in Python for a 10-year-old in 5° de primaria: version 1 compares a text with texto[::-1] and prints Ana -> False and Anita lava la tina -> False; version 2 adds limpiar (lower case, letters only) and prints anitalavalatina and neveroddoreven as True but ¿Acaso hubo búhos acá? -> False because of the accents; version 3 maps á to a with a dictionary and prints True. All run with python3 -I. Lesson family: strings as sequences, the reverse slice, and cleaning text before comparing.',
    requiredMentions: ['Anita lava la tina -&gt; False', 'acasohubobúhosacá', '¿Acaso hubo búhos acá? -&gt; True', 'SIN_TILDE.get(c, c)', 'elabora material digital (presentaciones, videos, documentos, diseños, entre otros)', '24,3 puntos', 'una prueba muestral a 105,534 escolares', 'más de 87,000 docentes', 'Limpiar antes de comparar'],
    sources: [
      { claim: 'Normative age at 31 March; 5to and 6to grado form ciclo V.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Tabla N.° 6 (5.° column), competency 28 level 5, maths competencies including competency 23.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'ENLA 2024: sample of 105,534 pupils in 6° de primaria.', url: 'https://www.gob.pe/institucion/minedu/noticias/1142140-enla-2024-532-000-escolares-de-4-de-primaria-muestran-recuperacion-sin-precedentes-en-lectura-y-matematica' },
      { claim: '2.7 million primaria students for the 2027 materials.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'More than 87,000 teachers enrolled in the MINEDU AI course (2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'Internet use 68.2% (6 to 11) and 92.5% (12 to 18); 87.4% of households with a computer use it only for household activities such as study, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'ChatGPT minimum age 13 with parental permission under 18.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Gemini minimum age 13 with a personal or school account.', url: 'https://support.google.com/gemini/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Recommending ChatGPT, Gemini or Claude accounts for a 10-year-old: refused; the page quotes the vendor age floors and teaches AI with the child\'s own programs.',
      'A fixed "right age" for Python: refused; the page gives three readiness signs and says some children are ready at 9 and others later.',
      'ENLA preparation: refused; the page says we do not prepare for national tests.',
      'Spanish-language teaching: refused; capsule and FAQ say every class is live, online and in English.',
      'MINEDU or school endorsement, official certificate or school grades: none; only our own certificate of completion.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: market | Universitarios en Perú: Python, Java y algoritmos en inglés junto a la carrera, con PCEP | recursion counted call by call, then memoisation with a dictionary
'use strict';
// Cursos de programación para universitarios en Perú (ag- Spanish-language door, Peru cluster row PE089, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only. No job, salary or grade promise.
// Angle: the Peruvian university student who typed "curso de python uni", "curso de java en la uni", "curso de ia en la uni",
// "curso de python universidad", "programación para universitarios", "clases de matemáticas para universitarios" or "curso
// de python con certificado" (KEYWORDS.md and autocomplete_pe.tsv). "uni" is the Universidad Nacional de Ingeniería, whose
// CTIC sells Python courses: the page says plainly we are not the UNI or any university. Spine: what a university course
// gives and what a student adds on the side (algorithms, a second language, projects, English); Python or Java first; the
// non-computing majors; the PCEP certificate (OpenEDG's own page); English as a career skill (EF EPI 2025 by age group);
// one original lesson on recursion and memoisation; fitting classes around the ciclo.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/cursos-de-programacion-para-universitarios-peru/;
// read 2026-11-09, quotes grepped in the raw text):
//  SUNEDU press note, 15 de setiembre de 2021 (sunedu_1_1m.txt; MARKET 1.5): "actualmente el país cuenta con 94 universidades
//   licenciadas (46 públicas y 48 privadas) que albergan a 1 millón 100 mil de estudiantes universitarios, distribuidos en 5500
//   programas entre pregrado, posgrado y segundas especialidades".
//  US Commercial Service, Peru CCG "Education", published 2022-03-29 (tradegov_education.txt): "In Peru, there are over eight
//   million school children and 1.2 million university students."
//  PUCP guía del postulante quoting Ley 30220 (FACTS 66): "La admisión a la universidad se realiza mediante concurso público,
//   previa definición de plazas y máximo una vez por ciclo. El concurso consta de un examen de conocimientos como proceso
//   obligatorio principal".
//  UNI admisión 2026-2 (FACTS 67, 68): "consiste en tres pruebas tomadas en tres días (lunes, miércoles y viernes)"; "Segunda
//   prueba: - MATEMÁTICA".
//  Python Institute, pythoninstitute.org/pcep (pcep.html, pcep.txt): "Exam code PCEP-30-03"; "Prerequisites None Number of
//   questions 35 Exam duration 50 minutes Passing score 70%"; "Credential validity 5 years"; "Exam delivery TestNow™ (OpenEDG
//   Testing Service)"; pathway "PCEP™ ... PCAP™ ... PCPP1™ ... PCPP2™".
//  MINEDU Fábrica de Programadores note, 24 July 2025 (FACTS 46): "podrán rendir el examen PCEP, con validez global."
//  EF EPI 2025 Peru page (ef_peru.raw/.txt): "ageGroup1Score":469 low (18-20), "ageGroup2Score":540 moderate (21-25),
//   "ageGroup3Score":559 high (26-30), "ageGroup4Score":537 moderate (31-40), "ageGroup5Score":509 moderate (41+); job
//   functions "IT : 522", "Student : 482"; "Cities Lima 555".
//  INEI boletín TIC II Trimestre 2026 (inei_tic_iit2026.txt): "el 97,3% de la población de 19 a 24 años utilizó Internet";
//   "el 98,0% de las personas con educación superior universitaria"; Cuadro 4.1 "Redactar un programa informático mediante el
//   uso de lenguaje de programación especializado" 7,8 11,7 11,0 12,1 (2023 to 2026); "Solo el 15,5% de los hombres redactó un
//   programa informático utilizando un lenguaje de programación, frente al 8,3% de las mujeres."
//  US Commercial Service, Peru CCG "Digital Economy", published 2026-06-22 (tradegov_digital.txt): "with 193 Peru-based
//   fintechs operating as of 2024"; "Addressing Lima's dominance in the digital financial and talent sectors".
//  Embassy of India, Lima (emb_india_peru.txt): "Tata Consultancy Services have a sizeable operation in Lima and is increasing
//   its presence in Peru providing over 1300 jobs locally."
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculation (python3 -I): 2692537 / 59 = 45636.2 (calls without and with memo for n = 30).
// Our own example, run with python3 -I (fib.py and fib_memo.py in the src-pages folder), exact output:
//   fib.py: n = 10 | fib = 55 | calls = 177 / n = 20 | fib = 6765 | calls = 21891 / n = 30 | fib = 832040 | calls = 2692537
//   fib_memo.py: n = 10 | fib = 55 | calls = 19 / n = 20 | fib = 6765 | calls = 39 / n = 30 | fib = 832040 | calls = 59
// Lesson family: recursion measured by counting calls with a global counter; then memoisation with a dictionary turns
// exponential growth into linear growth (the base of dynamic programming).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'llamadas = 0',
  '',
  'def fib(n):',
  '    global llamadas',
  '    llamadas += 1',
  '    if n < 2:',
  '        return n',
  '    return fib(n - 1) + fib(n - 2)',
  '',
  'for n in (10, 20, 30):',
  '    llamadas = 0',
  "    print('n =', n, '| fib =', fib(n), '| calls =', llamadas)"
].join('\n');

const OUT = [
  'n = 10 | fib = 55 | calls = 177',
  'n = 20 | fib = 6765 | calls = 21891',
  'n = 30 | fib = 832040 | calls = 2692537'
].join('\n');

const PY2 = [
  'llamadas = 0',
  'memo = {}',
  '',
  'def fib(n):',
  '    global llamadas',
  '    llamadas += 1',
  '    if n < 2:',
  '        return n',
  '    if n not in memo:',
  '        memo[n] = fib(n - 1) + fib(n - 2)',
  '    return memo[n]',
  '',
  'for n in (10, 20, 30):',
  '    llamadas = 0',
  '    memo.clear()',
  "    print('n =', n, '| fib =', fib(n), '| calls =', llamadas)"
].join('\n');

const OUT2 = [
  'n = 10 | fib = 55 | calls = 19',
  'n = 20 | fib = 6765 | calls = 39',
  'n = 30 | fib = 832040 | calls = 59'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para universitarios' },
  slug: 'cursos-de-programacion-para-universitarios-peru',
  code: 'cpu',
  accent: '#4F4908',
  accentRationale: 'Cursos de programación para universitarios: a dark brass-olive #4F4908, the tone of an old library binding, deeper and browner than the teen page\'s #6B5E00 so the two neighbouring age doors stay distinct; allocated in alloc.tsv and checked by the build for at least 4.5:1 on every paper tint',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cursos de programación para universitarios en Perú',
  title: 'Cursos de programación para universitarios en Perú, en vivo',
  description: 'Python, Java, algoritmos e IA para universitarios en Perú: clases en vivo y en inglés, desde cero o con base, junto a su carrera. Prepara el PCEP de Python.',
  ogDescription: 'Cursos de programación para estudiantes universitarios en Perú: qué sumar a la carrera, Python o Java primero, la certificación PCEP y una clase de recursión en Python.',
  twitterDescription: 'Programación para universitarios en Perú: Python, Java, estructuras de datos e IA, en vivo y en inglés, a la hora que le deje libre el ciclo.',
  pageName: 'Cursos de programación para universitarios en Perú',
  webPageDescription: 'Guía para estudiantes universitarios en Perú que buscan cursos de programación dictados en vivo y en inglés: qué añadir a lo que enseña la carrera, si empezar por Python o por Java, cursos para carreras que no son de sistemas, qué es la certificación PCEP según el Python Institute, por qué el inglés pesa según el EF EPI 2025 y una clase de recursión y memoización escrita por nosotros.',
  courseDescription: 'Clases en vivo y en línea de programación para estudiantes universitarios en todo el Perú, dictadas solo en inglés: Python desde cero hasta nivel avanzado, Java, estructuras de datos y algoritmos, desarrollo web, IA y preparación del examen PCEP, en clase grupal o individual y en el horario que el estudiante elija.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para universitarios',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#carrera', label: 'La carrera' },
    { href: '#python-java', label: 'Python o Java' },
    { href: '#certificado', label: 'Certificado' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#ingles', label: 'Inglés' }
  ],
  eyebrow: 'Perú &middot; Universitarios &middot; Python, Java, algoritmos e IA',
  h1: 'Cursos de programación para universitarios, en vivo y en inglés',
  lede: 'Si está en la universidad y busca un curso de Python, de Java o de inteligencia artificial que vaya más allá de lo que ve en clase, aquí encontrará qué conviene sumar a su carrera, por qué lenguaje empezar, qué vale de verdad una certificación y cómo es una clase con nosotros, explicado con datos de SUNEDU, del INEI y del Python Institute.',
  secondaryCta: { href: '#python-java', label: '¿Python o Java primero?' },
  wa: 'Hola Modern Age Coders, soy estudiante universitario en Perú y me interesa un curso de programación en inglés. ¿Puedo reservar la clase gratis?',
  heroNote: 'Desde 2020 en vivo &middot; 4.9 de 5 con unas 547 reseñas de Google &middot; usted escribe el código y lo defiende',
  spec: [
    ['Para quién', 'Estudiantes universitarios e institutos, de cualquier carrera'],
    ['Lenguajes', 'Python, Java, C, C++, JavaScript y SQL'],
    ['Nivel', 'Desde cero, o desde su último curso aprobado'],
    ['Certificación', 'Preparación del PCEP y el PCAP del Python Institute'],
    ['Formato', 'Grupo de quince a veinte, o clases individuales'],
    ['Idioma y horario', 'En inglés, a la hora que usted elija']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Modern Age Coders dicta cursos de programación para universitarios en todo el Perú, en vivo, en línea y en inglés: Python desde cero, Java, estructuras de datos y algoritmos, desarrollo web e inteligencia artificial, con preparación opcional para el examen PCEP del Python Institute. Un mentor desde la India le enseña por videollamada mientras usted escribe y explica su propio código. Elija un grupo de quince a veinte estudiantes o clases individuales, a la hora que le deje libre el ciclo. No somos la UNI ni ninguna universidad.',

  picks: {
    eyebrow: 'Cursos principales',
    h2: 'Tres cursos que más piden los universitarios',
    lede: 'Python para quien empieza o quiere dominarlo, Java para quien lo lleva en la carrera y algoritmos para quien ya piensa en prácticas y entrevistas técnicas.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'CPU / 01', title: 'Python de cero a avanzado', alt: 'Imagen del curso de Python de cero a avanzado', note: 'Desde la primera variable hasta programación orientada a objetos, archivos, pruebas y librerías de datos. Sirve igual para un estudiante de sistemas que para uno de economía o ingeniería civil.' },
      { course: 'complete-java-programming-masterclass-college', code: 'CPU / 02', title: 'Java para universitarios', alt: 'Imagen del curso de Java para universitarios', note: 'Java desde las bases hasta Spring Boot: tipos, clases, colecciones, excepciones y una API real. Útil si su malla lo exige en los primeros ciclos.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'CPU / 03', title: 'Estructuras de datos y algoritmos', alt: 'Imagen del curso de estructuras de datos y algoritmos', note: 'Listas, pilas, colas, árboles, grafos, recursión y programación dinámica, con el análisis de cada solución que se pide en una entrevista técnica.' }
    ]
  },

  sections: [
    {
      id: 'carrera',
      eyebrow: 'Junto a la carrera',
      h2: '¿Qué curso de programación conviene llevar mientras estudia en la universidad?',
      lede: 'Uno que complete lo que la carrera no alcanza a cubrir: práctica guiada, algoritmos explicados con calma, un segundo lenguaje, proyectos propios y el inglés técnico. No uno que repita su curso de Introducción a la Programación.',
      body: [
        { kind: 'p', html: 'La universidad peruana es grande y diversa. Hacia setiembre de 2021, según la SUNEDU, había 94 universidades licenciadas, 46 públicas y 48 privadas; entre todas sumaban, según la misma nota del día 15 de ese mes, 1 millón 100 mil estudiantes repartidos en 5500 programas de pregrado, posgrado y segundas especialidades. Un informe del Servicio Comercial de Estados Unidos publicado en 2022 habla de 1,2 millones de estudiantes universitarios. Son cifras de hace algunos años, pero muestran el tamaño del grupo: más de un millón de personas cuya carrera, cada vez más, pide saber programar.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Universidades licenciadas en Perú según la SUNEDU (nota de prensa del 15 de setiembre de 2021)', head: ['Dato', 'Cifra publicada'], rows: [
          ['Universidades licenciadas', '94'],
          ['Universidades públicas', '46'],
          ['Universidades privadas', '48'],
          ['Estudiantes universitarios', '1 millón 100 mil'],
          ['Programas (pregrado, posgrado y segundas especialidades)', '5500']
        ] },
        { kind: 'source', html: 'Fuente: Superintendencia Nacional de Educación Superior Universitaria (SUNEDU), nota de prensa "Gracias al licenciamiento 1 millón 100 mil estudiantes acceden a educación universitaria de calidad", gob.pe, 15 de setiembre de 2021, leída el 9 de noviembre de 2026. No encontramos en una fuente oficial un total nacional más reciente.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Lo que da la carrera', p: 'Fundamentos, un lenguaje principal, cursos de matemática y, con suerte, un proyecto grupal por ciclo. Todo con un profesor para treinta o cuarenta estudiantes y poco tiempo para revisar su código línea por línea.' },
          { h3: 'Lo que suele faltar', p: 'Alguien que mire su código y le pregunte por qué lo escribió así. Práctica deliberada de algoritmos. Un portafolio con proyectos propios. Y soltura para explicar todo eso en inglés.' },
          { h3: 'Lo que hacemos nosotros', p: 'Clases en vivo en las que usted programa y el mentor revisa, pregunta y propone el siguiente reto. En grupo o a solas, con un plan que se ajusta a lo que ya lleva en la malla.' }
        ] },
        { kind: 'p', mt: true, html: 'Una aclaración para quien llegó aquí buscando "curso de Python UNI" o "curso de Java en la UNI": no somos la Universidad Nacional de Ingeniería, ni su centro de cómputo, ni ninguna otra universidad, y no tenemos convenio con ellas. Somos una academia privada que enseña en línea y en inglés. Nuestros cursos no otorgan créditos ni notas universitarias; acompañan a su carrera, no la reemplazan.' }
      ]
    },
    {
      id: 'python-java',
      eyebrow: 'Primer lenguaje',
      h2: '¿Python o Java primero para un universitario?',
      lede: 'Python primero, salvo que su carrera ya le exija Java este ciclo. Python le deja concentrarse en el problema; Java le obliga a ordenar el programa en clases y tipos. Las dos cosas hacen falta, en ese orden.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python y Java para un universitario (nuestra comparación)', head: ['', 'Python', 'Java'], rows: [
          ['Primer programa', 'Una línea con <code>print</code>', 'Una clase, un método <code>main</code> y tipos declarados'],
          ['Para qué se usa más', 'Datos, automatización, IA, ciencia e ingeniería', 'Sistemas de empresa, banca, Android, backend con Spring'],
          ['Qué enseña bien', 'A pensar el algoritmo sin ruido', 'A diseñar con objetos, interfaces y tipos'],
          ['Certificación conocida', 'PCEP y PCAP del Python Institute', 'Certificaciones de Oracle'],
          ['Si tiene un ciclo libre', 'Empiece aquí', 'Siga aquí, con una base ya firme']
        ] },
        { kind: 'p', mt: true, html: 'En la práctica, la mayoría de nuestros estudiantes universitarios llega con un poco de ambos y huecos en los dos. Por eso la primera clase no es teórica: el mentor le pide resolver un problema corto en el lenguaje que usted prefiera, mira cómo lo encara y decide desde dónde empezar. Hay quien necesita reforzar bucles y funciones; hay quien ya programa con soltura pero nunca analizó cuántas operaciones hace su solución.' },
        { kind: 'two', mt: true,
          leftH3: 'Si estudia sistemas, software o computación',
          left: [
            'Lo que más rinde es estructuras de datos y algoritmos, un segundo lenguaje y Git. Son la base de cualquier entrevista técnica y de los cursos más duros de los ciclos intermedios.',
            'Si le atrae la competencia, la programación competitiva en C++ entrena la velocidad y el rigor que piden los concursos universitarios.'
          ],
          rightH3: 'Si estudia otra carrera',
          right: [
            'Ingeniería civil, industrial, economía, administración, biología: Python para analizar datos y automatizar el trabajo repetitivo es la habilidad con más retorno. No necesita saber nada de programación para empezar.',
            'Para quien vive en hojas de cálculo, empezar con los datos que ya conoce es el puente más corto hacia el código.'
          ] }
      ]
    },
    {
      id: 'datos-inei',
      eyebrow: 'Lo que dicen los datos',
      h2: '¿Cuántos peruanos saben programar?',
      lede: 'Pocos. En la encuesta del INEI de 2026, solo el 12,1 % de la población de 15 y más años dijo haber escrito un programa informático con un lenguaje de programación. Saber hacerlo todavía distingue a un estudiante.',
      body: [
        { kind: 'p', html: 'El dato viene del Cuadro 4.1 del boletín de tecnologías de la información del INEI para el segundo trimestre de 2026, que mide actividades informáticas hechas con una computadora, laptop o tablet. La proporción que redactó un programa con un lenguaje de programación pasó del 7,8 % en 2023 al 12,1 % en 2026. En el mismo boletín, el 15,5 % de los hombres declaró haberlo hecho, frente al 8,3 % de las mujeres.' },
        { kind: 'p', html: 'El acceso no es el obstáculo para un universitario. Entre abril y junio de 2026, según el INEI, se conectó a internet el 97,3 % de quienes tienen de 19 a 24 años, y el 98,0 % de quienes alcanzaron educación superior universitaria. Lo que separa a unos de otros es la práctica sostenida: muchos estudiantes llevan un curso de programación obligatorio y no vuelven a escribir código hasta que una práctica preprofesional se lo pide.' },
        { kind: 'p', html: 'El mercado también se mueve. Un informe del Servicio Comercial de Estados Unidos sobre la economía digital peruana, publicado el 22 de junio de 2026, cuenta 193 fintechs con base en el Perú en 2024 y señala el peso de Lima en el talento digital del país. La Embajada de la India en Lima, por su parte, informa que Tata Consultancy Services ofrece más de 1300 empleos en el Perú. Ninguno de esos datos es una promesa de trabajo; describen un entorno en el que programar bien y en inglés es útil.' }
      ]
    },
    {
      id: 'certificado',
      eyebrow: 'Con certificado',
      h2: '¿Vale la pena un curso de Python con certificado?',
      lede: 'Vale si el certificado lo emite un tercero que examina, y si usted aprendió de verdad lo que el examen dice medir. El PCEP del Python Institute es un buen primer escalón; nuestro certificado de finalización es otra cosa y conviene no confundirlos.',
      body: [
        { kind: 'table', numCols: [], caption: 'El examen PCEP-30-03 en resumen, según el Python Institute', head: ['Aspecto', 'Lo que publica el Python Institute'], rows: [
          ['Nombre', 'PCEP, Certified Entry-Level Python Programmer'],
          ['Código del examen', 'PCEP-30-03'],
          ['Requisitos previos', 'Ninguno'],
          ['Número de preguntas', '35'],
          ['Duración', '50 minutos'],
          ['Puntaje para aprobar', '70 %'],
          ['Vigencia de la credencial', '5 años'],
          ['Cómo se rinde', 'TestNow, el servicio de exámenes de OpenEDG'],
          ['Siguiente nivel', 'PCAP, y luego PCPP1 y PCPP2']
        ] },
        { kind: 'source', html: 'Fuente: Python Institute, página oficial de la certificación PCEP (pythoninstitute.org/pcep), sección "PCEP-30-03 at a glance", leída el 9 de noviembre de 2026. El precio del voucher depende del producto y la moneda; no lo reproducimos aquí. No somos un centro examinador del Python Institute.' },
        { kind: 'p', mt: true, html: 'El MINEDU usó este mismo examen como meta en su piloto Fábrica de Programadores con escolares de secundaria, y su nota de julio de 2025 dice que los participantes "podrán rendir el examen PCEP, con validez global". Nuestro curso de certificación PCEP y PCAP sigue el temario oficial y termina con simulacros; el examen se compra y se rinde directamente con el Python Institute.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que es nuestro certificado',
          left: [
            'Un certificado de finalización de Modern Age Coders que dice qué curso completó. Demuestra constancia y sirve para su portafolio, pero no es un título, no lo otorga una universidad y no tiene validez oficial ante la SUNEDU ni ante nadie.'
          ],
          rightH3: 'Lo que pesa más que cualquier papel',
          right: [
            'Un repositorio con tres o cuatro proyectos que usted pueda explicar sin mirar el código. En una entrevista técnica le preguntarán por qué decidió algo, no qué curso llevó.'
          ] }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de ejemplo',
      h2: '¿Cómo es una clase de algoritmos para un universitario?',
      lede: 'Un fragmento real de nuestro curso de estructuras de datos, escrito por nosotros: la sucesión de Fibonacci con recursión. Lo interesante no es el resultado, sino cuántas veces se llama la función para conseguirlo.',
      body: [
        { kind: 'code', label: 'Versión 1: recursión directa, contando llamadas', lang: 'Python', code: PY, note: 'La variable global <code>llamadas</code> sube en uno cada vez que se entra a <code>fib</code>. Antes de cada <code>n</code> se reinicia a cero.' },
        { kind: 'code', label: 'Lo que imprime la versión 1', lang: 'Salida', code: OUT, note: 'Copiada de nuestra terminal tras ejecutar el archivo con Python 3. Para <code>n = 30</code> la función se llama más de dos millones y medio de veces.' },
        { kind: 'p', mt: true, html: 'El mentor pregunta antes de mostrar la salida: "How many calls for n = 30?" Casi nadie acierta el orden de magnitud. La razón es que <code>fib(30)</code> llama a <code>fib(29)</code> y a <code>fib(28)</code>, pero <code>fib(29)</code> vuelve a calcular <code>fib(28)</code> desde cero, y así hacia abajo: el mismo subproblema se resuelve miles de veces. El número de llamadas crece casi como la propia sucesión, de forma exponencial.' },
        { kind: 'code', label: 'Versión 2: memoización con un diccionario', lang: 'Python', code: PY2, note: 'Antes de calcular <code>fib(n)</code> se revisa si ya está en <code>memo</code>. Si está, se devuelve sin volver a bajar por el árbol.' },
        { kind: 'code', label: 'Lo que imprime la versión 2', lang: 'Salida', code: OUT2, note: 'Salida exacta de la versión con memoria, también ejecutada por nosotros con Python 3.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Comparar.</strong> Para <code>n = 30</code> se pasa de 2692537 llamadas a 59. Dividiendo una cifra entre la otra, la versión 2 hace unas 45 636 veces menos llamadas (cálculo nuestro).',
          '<strong>Explicar el patrón.</strong> Con memoria, las llamadas crecen de dos en dos: 19, 39, 59. Cada valor de <code>n</code> se calcula una sola vez, así que el trabajo crece en línea recta con <code>n</code>.',
          '<strong>Nombrar la idea.</strong> Guardar respuestas de subproblemas para no repetirlas es la base de la programación dinámica, uno de los temas que más aparece en entrevistas y en cursos de algoritmos.',
          '<strong>Discutir el costo.</strong> La memoria no es gratis: <code>memo</code> ocupa espacio. El estudiante explica en inglés cuándo vale la pena cambiar memoria por tiempo y cuándo no.',
          '<strong>Ir más allá.</strong> Reto para la casa: escribir una versión con un bucle que no use recursión ni diccionario y que guarde solo los dos últimos valores.'
        ] },
        { kind: 'p', mt: true, html: 'Una herramienta de IA le puede escribir la versión 2 en segundos. Lo que no puede hacer por usted es entender por qué la versión 1 explota, y eso es justo lo que le preguntarán en un examen o en una entrevista. Por eso en nuestras clases el estudiante mide, predice y explica antes de optimizar.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Por qué estudiar programación en inglés si estoy en una universidad peruana?',
      lede: 'Porque la documentación, los mensajes de error, las entrevistas de muchas empresas y casi toda la conversación técnica están en inglés, y porque el puntaje de inglés de los jóvenes peruanos sube mucho entre los 20 y los 30 años, cuando ya se usa en el trabajo.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Perú en el EF EPI 2025: puntaje de inglés por grupo de edad y por función laboral', head: ['Grupo', 'Puntaje', 'Nivel según EF'], rows: [
          ['18 a 20 años', '469', 'Bajo'],
          ['21 a 25 años', '540', 'Moderado'],
          ['26 a 30 años', '559', 'Alto'],
          ['31 a 40 años', '537', 'Moderado'],
          ['41 años o más', '509', 'Moderado'],
          ['Función: estudiantes', '482', 'Bajo'],
          ['Función: tecnologías de la información', '522', 'Moderado']
        ] },
        { kind: 'source', html: 'Fuente: EF Education First, EF EPI 2025, página de Perú (ef.com/wwen/epi/regions/latin-america/peru), datos por edad y por función laboral, leída el 9 de noviembre de 2026. Los niveles siguen los umbrales que publica la misma página: alto desde 550, moderado desde 500, bajo desde 450. El EF EPI mide a quienes rinden el examen de EF, no a toda la población.' },
        { kind: 'p', mt: true, html: 'La tabla muestra una brecha de 90 puntos entre el grupo de 18 a 20 años y el de 26 a 30 años (cálculo nuestro: 559 menos 469). Quien está en los primeros ciclos de la universidad puede adelantar esa curva practicando el inglés en el contexto en que lo va a usar. En nuestras clases usted explica su código, pregunta y discute soluciones en inglés con un mentor que habla con claridad y le da tiempo para responder.' },
        { kind: 'p', html: 'Quien viene de un colegio bilingüe limeño encontrará un tono conocido en <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, escrita en inglés. Si estudia en Arequipa, puede ver la propuesta para esa ciudad en <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a>.' }
      ]
    },
    {
      id: 'ciclo',
      eyebrow: 'Horario',
      h2: '¿Cómo encajar un curso de programación con los parciales y los finales?',
      lede: 'Con un horario que se mueve con el ciclo. En clases individuales usted cambia la hora en semana de exámenes; en grupo elige el horario que encaje con su matrícula y lo mantiene.',
      body: [
        { kind: 'ol', items: [
          '<strong>Al matricularse.</strong> Revise su horario del ciclo y elija para nuestras clases una franja que no choque con laboratorios ni prácticas.',
          '<strong>En semanas normales.</strong> Dos clases en vivo y unas horas de práctica propia. Si un curso de la universidad usa Python o Java, el mentor puede usar sus ejercicios como material, sin hacerle la tarea.',
          '<strong>En parciales y finales.</strong> En clases individuales se reduce la carga o se pausa; en grupo, el mentor le deja material para ponerse al día.',
          '<strong>En vacaciones.</strong> Enero y febrero, o el receso de medio año, son buenos momentos para un proyecto largo o para preparar el PCEP.',
          '<strong>Con la hora de la India.</strong> Los mentores viven en la India, diez horas y media por delante del Perú todo el año: una clase a las 8:00 p. m. en Lima es a las 6:30 a. m. del día siguiente para ellos. Usted siempre reserva en hora peruana.'
        ] },
        { kind: 'p', mt: true, html: 'Para ver todo lo que ofrecemos en el país, por edades y por tema, la página <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> (en inglés) reúne cada curso y cada página de esta serie.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Ruta de avance',
    h2: '¿Cómo avanza un universitario en un año con nosotros?',
    lede: 'Cinco tramos propios que usamos para planificar. Quien llega con base salta el primero; quien empieza de cero lo recorre con calma.',
    table: { caption: 'Ruta de programación para universitarios (nuestra)', head: ['Tramo', 'Duración aproximada', 'Lo que usted puede hacer al final'], rows: [
      ['1. Fundamentos sólidos', '1 a 2 meses', 'resolver problemas cortos en Python sin mirar apuntes'],
      ['2. Estructuras de datos', '2 a 3 meses', 'elegir entre lista, diccionario, pila o cola y justificar la elección'],
      ['3. Algoritmos', '2 a 3 meses', 'medir el costo de una solución y mejorarla, como en el ejemplo de Fibonacci'],
      ['4. Segundo lenguaje', '2 meses', 'llevar las mismas ideas a Java o C++'],
      ['5. Proyecto de portafolio', 'Continuo', 'publicar un proyecto propio y explicarlo en inglés en diez minutos']
    ] },
    left: { h3: 'Si empieza de cero', ps: [
      'Dé al primer tramo el tiempo que necesite. Saltarse los fundamentos para llegar rápido a la IA es la forma más segura de atascarse después.',
      'Escriba cada ejercicio usted mismo, aunque sea lento. La velocidad llega con la repetición.'
    ] },
    right: { h3: 'Si ya programa', ps: [
      'Mida antes de optimizar: cuente operaciones, como en la clase de ejemplo, en lugar de adivinar.',
      'Elija un proyecto que resuelva un problema real de su carrera. Es más fácil de defender en una entrevista que un clon de una app famosa.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos universitarios',
    h2: 'Nueve cursos más para estudiantes de educación superior',
    lede: 'Todos se dictan en vivo y en inglés, con un mentor fijo, en grupo o de forma individual.',
    bands: [
      { num: 'I', h3: 'Bases y certificación', sub: 'Para afirmar lo esencial', courses: [
        { code: 'CPU / BASE / 01', slug: 'pcep-pcap-python-certification-course', title: 'Certificación PCEP y PCAP', blurb: 'El temario oficial del Python Institute, con simulacros de examen.' },
        { code: 'CPU / BASE / 02', slug: 'c-programming-course-for-college-beginners', title: 'C para principiantes', blurb: 'Punteros, memoria y estructuras, sin miedo y con dibujos.' },
        { code: 'CPU / BASE / 03', slug: 'competitive-programming-masterclass-college', title: 'Programación competitiva', blurb: 'De los primeros problemas a concursos tipo ICPC.' }
      ] },
      { num: 'II', h3: 'Proyectos y herramientas', sub: 'Para el portafolio', courses: [
        { code: 'CPU / PRO / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web full stack', blurb: 'React, Node.js y despliegue de una aplicación completa.' },
        { code: 'CPU / PRO / 02', slug: 'git-github-version-control-course-for-college-students', title: 'Git y GitHub', blurb: 'Control de versiones como se usa en un equipo real.' },
        { code: 'CPU / PRO / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Bases de datos con MySQL', blurb: 'SQL, diseño de tablas y consultas que no se caen con datos reales.' }
      ] },
      { num: 'III', h3: 'IA y matemática', sub: 'Para ir más hondo', courses: [
        { code: 'CPU / IA / 01', slug: 'ai-ml-masterclass-complete-college', title: 'IA y machine learning', blurb: 'De Python a modelos de aprendizaje profundo, entendiendo cada paso.' },
        { code: 'CPU / IA / 02', slug: 'complete-generative-ai-masterclass-college', title: 'IA generativa', blurb: 'Modelos de lenguaje, RAG y agentes, construidos y evaluados.' },
        { code: 'CPU / IA / 03', slug: 'college-mathematics-complete-masterclass', title: 'Matemática universitaria', blurb: 'Cálculo y álgebra lineal explicados para quien los necesita en su carrera.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las clases en vivo para universitarios?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes de la primera clase del día en la universidad.' },
      { time: 'De noche', l: 'Después de clases o de la práctica preprofesional.' },
      { time: 'A medida', l: 'En individuales, la hora cambia según su semana.' }
    ],
    cells: [
      { h3: 'Código suyo', p: 'Usted escribe; el mentor pregunta, revisa y propone.' },
      { h3: 'Mentor fijo', p: 'La misma persona todo el curso, que conoce su nivel.' },
      { h3: 'Ritmo de ciclo', p: 'El plan se ajusta a parciales, finales y vacaciones.' },
      { h3: 'Portafolio', p: 'Cada tramo deja un proyecto que puede mostrar.' },
      { h3: 'Inglés técnico', p: 'Explicar, preguntar y discutir código en inglés.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte estudiantes, o uno a uno.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros estudiantes',
  projectsLede: 'Una muestra de proyectos de estudiantes; la galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas de Google escritas por estudiantes y familias, reproducidas sin cambios y en inglés.',

  fees: {
    h2: 'Precios para universitarios en Perú',
    lede: 'Publicamos la mensualidad en dólares estadounidenses y la cobramos con tarjeta. La conversión a su moneda la hace su banco, así que el importe que verá en el estado de cuenta depende del tipo de cambio que aplique ese día.',
    free: ['Una clase gratis con un mentor', 'Un problema corto para medir su nivel', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte estudiantes de nivel parecido', 'Un mentor para todo el curso', 'Dos clases en vivo por semana', 'Mes a mes, sin permanencia'],
    one: ['Usted y el mentor', 'El temario que su carrera y sus metas piden', 'Horario que se mueve con el ciclo']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Cursos de programación para universitarios: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Se dictan solo en inglés, en vivo y en línea. Para un universitario eso es una ventaja: aprende Python, Java o algoritmos y a la vez practica el inglés técnico que pedirán las prácticas y muchas entrevistas. El mentor habla con claridad y le da tiempo para responder. Según el EF EPI 2025, Lima tiene un nivel alto de inglés, y donde más se avanza con una clase hablada es en la expresión oral.' },
      { q: '¿Son ustedes el centro de cómputo de la UNI o de otra universidad?', a: 'No. Somos una academia privada en línea, sin convenio con la UNI ni con ninguna universidad. Nuestros cursos no otorgan créditos ni notas; complementan su carrera.' },
      { q: '¿Python o Java primero?', a: 'Python primero, salvo que este ciclo su carrera le exija Java. Python deja concentrarse en el algoritmo; Java enseña a ordenar el programa en clases y tipos. Tarde o temprano conviene saber los dos.' },
      { q: '¿Puedo empezar desde cero si no estudio sistemas?', a: 'Sí. Muchos estudiantes de ingeniería civil, industrial, economía o administración empiezan con nosotros sin haber programado. Para ellos Python aplicado a datos es el camino más útil.' },
      { q: '¿El curso da certificado?', a: 'Al terminar recibe nuestro certificado de finalización, que no es un título ni tiene validez oficial. Si quiere un certificado de un tercero, preparamos el examen PCEP del Python Institute: 35 preguntas, 50 minutos y 70 % para aprobar, según su página oficial. El examen se rinde con ellos.' },
      { q: '¿Me ayudan con los trabajos de la universidad?', a: 'Le ayudamos a entender los temas y a practicar con ejercicios parecidos, pero no hacemos trabajos calificados por usted. La idea es que pueda resolverlos solo.' },
      { q: '¿Las clases sirven para entrevistas técnicas?', a: 'Sí, el curso de estructuras de datos y algoritmos está pensado para eso: resolver problemas, medir el costo de la solución y explicarla en inglés. No prometemos empleo ni sueldos.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La India va diez horas y media por delante del Perú, sin cambios en el año; al reservar usted ve solo la hora peruana.' },
      { q: '¿Qué necesito para las clases?', a: 'Una laptop o computadora con micrófono, una conexión estable y unas horas libres a la semana para practicar. Todo el software que usamos es gratuito.' },
      { q: '¿Cuánto tiempo toma aprender a programar bien?', a: 'Con dos clases por semana y práctica propia, la mayoría domina los fundamentos de Python en uno o dos meses y llega a resolver problemas de algoritmos con soltura en el primer año. Depende mucho de la constancia.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Otras páginas',
    h2: 'Para seguir explorando',
    lede: 'Páginas relacionadas, casi todas en inglés.',
    items: [
      { href: '/ai-ml-course-for-college-students', label: 'AI and ML course for college students', p: 'Inteligencia artificial y aprendizaje automático para estudiantes de educación superior.' },
      { href: '/c-plus-plus-classes-for-college-students', label: 'C++ classes for college students', p: 'C++ en vivo para quien lo necesita en su carrera o en concursos.' },
      { href: '/coding-classes-for-adults', label: 'Coding classes for adults', p: 'Si ya terminó la universidad o trabaja, este es el punto de partida.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo son nuestras clases en vivo, en detalle.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos publicados por estudiantes.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo, por nivel y por tema.' }
    ]
  },

  start: {
    h2: 'Reserve su clase gratis',
    lede: 'La clase de prueba dura de 30 a 45 minutos. El mentor le pide resolver un problema corto en Python o en Java, conversa con usted sobre su carrera y sus metas, y al final le recomienda un curso, un formato y un punto de partida. Sin compromiso.',
    readFirst: 'Si quiere conocernos antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explica nuestras clases y <a class="ag-inline-link" href="/courses">All courses</a> muestra los temarios, ambas en inglés.',
    note: 'Las clases son siempre en vivo, por internet y en inglés, con mentores que enseñan desde la India. Por WhatsApp puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos universitarios', links: [
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python de cero a avanzado' },
        { href: '/courses/complete-java-programming-masterclass-college', label: 'Java para universitarios' },
        { href: '/courses/data-structures-algorithms-masterclass-college', label: 'Estructuras de datos y algoritmos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más recursos', links: [
        { href: '/courses/pcep-pcap-python-certification-course', label: 'Certificación PCEP y PCAP' },
        { href: '/ai-ml-course-for-college-students', label: 'IA para universitarios' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Medir antes de optimizar'
  },

  personalityCss: `
.ag-root.ag-cpu .ag-hero h1 { max-width: 22ch; letter-spacing: -0.01em; }
.ag-root.ag-cpu .ag-capsule { border-left-width: 3px; }
.ag-root.ag-cpu .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-cpu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-cpu .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'SUNEDU press note of 15 September 2021; US Commercial Service Peru CCG Education (2022) and Digital Economy (22 June 2026); Ley 30220 admission rule as quoted by PUCP; UNI admission 2026-2 page; Python Institute PCEP page (PCEP-30-03); MINEDU Fábrica de Programadores note (24 July 2025); EF EPI 2025 Peru page (age groups, job functions); INEI boletín TIC II Trimestre 2026 (Cuadro 4.1, internet use by age and education); Embassy of India in Lima. Read 9 November 2026. The Fibonacci lesson, the Python and Java comparison and the route are our own.',
    localProject: 'Recursion measured for a Peruvian university student: fib(n) with a global call counter prints calls = 177, 21891 and 2692537 for n = 10, 20 and 30; with a memo dictionary the calls fall to 19, 39 and 59, about 45 636 times fewer for n = 30 (our division). Lesson family: recursion counted call by call, then memoisation with a dictionary (dynamic programming).',
    requiredMentions: ['calls = 2692537', 'calls = 59', 'unas 45 636 veces menos llamadas', 'PCEP-30-03', '94 universidades licenciadas, 46 públicas y 48 privadas', 'solo el 12,1 % de la población de 15 y más años', 'una brecha de 90 puntos', 'Medir antes de optimizar', 'No somos la UNI ni ninguna universidad', '193 fintechs'],
    sources: [
      { claim: '94 licensed universities (46 public, 48 private), 1.1 million students, 5,500 programmes (15 September 2021).', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: '1.2 million university students (2022).', url: 'https://www.trade.gov/country-commercial-guides/peru-education' },
      { claim: 'PCEP-30-03: no prerequisites, 35 questions, 50 minutes, 70%, valid 5 years, TestNow delivery, PCAP and PCPP next.', url: 'https://pythoninstitute.org/pcep' },
      { claim: 'Fábrica de Programadores participants may sit the PCEP.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'EF EPI 2025 Peru by age group and job function.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Wrote a program 7.8% (2023) to 12.1% (2026); men 15.5%, women 8.3%; internet 19 to 24 97.3%; university-educated 98.0%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '193 Peru-based fintechs in 2024; Lima dominance in digital talent.', url: 'https://www.trade.gov/country-commercial-guides/peru-digital-economy' },
      { claim: 'TCS provides over 1,300 jobs in Peru.', url: 'https://eoilima.gov.in/page/india-peru/' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; capsule and FAQ say every class is live, online and in English only.',
      'Any link with the UNI, its CTIC or any university, or university credits: none; the page says so in the capsule and in an FAQ.',
      'Job, internship or salary promises: refused; employment figures are described as context only.',
      'A current national university total: not found on an official page; the 2021 SUNEDU and 2022 trade.gov figures are printed with their years and never added.',
      'The PCEP voucher price: not printed; the page says it depends on product and currency.',
      'Being a Python Institute test centre: not claimed.',
      'Doing graded university work for students: refused.',
      'Soles prices or any typed fee: refused.'
    ]
  }
};

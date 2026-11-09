// SHIP: market (es exam door, IB) | tutor de IB Computer Science en inglés para el Bachillerato Internacional en Perú | a trace table for bubble sort: passes, comparisons, swaps and the early exit
'use strict';
// Tutor de Ciencias de la Computación del Bachillerato Internacional (ag- Spanish-language door, Peru cluster row PE115, P4,
// hubGroup exams). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. Fees render in USD from the template only
// (coding price row); no soles, no typed figure.
// Searches (KEYWORDS.md): "bachillerato internacional perú" (3), "bachillerato internacional en ingles"; (en) "ib computer
// science tutor". Never claim IB endorsement; never name a school as a source of students.
// Spine: what an IB Computer Science tutor does in English; what the Peruvian secundaria gives in computing (CNEB Tabla N.° 8:
// no computing area; competency 28 is transversal; Educación para el trabajo); where computing does appear in Peru (MINEDU
// Fábrica de Programadores with Python and PCEP; UTEC's OPI with C++ and Python; IOI record); the IB Diploma in Peru in one
// line and one university route; how our course is built (IB pages not verified: ibo.org blocked); an original trace-table
// lesson on bubble sort; Peru to India clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/bachillerato-internacional-ciencias-de-la-computacion-tutor/,
// all fetched 2026-11-08, quotes grepped in the raw text):
//  CNEB (cneb.txt): Tabla N.° 8 "Matemática 4 4 4 4 4 Comunicación 4 4 4 4 4 Inglés 3 3 3 3 3 ... Ciencia y tecnología 4 4 4 4 4
//    Educación para el trabajo 2 2 2 2 2 ... Total de horas 35 35 35 35 35"; Tabla N.° 9 "Educación para el trabajo 3 3 3 3 3";
//    "28 Se desenvuelve en entornos virtuales generados por las TIC • Personaliza entornos virtuales • Gestiona información del
//    entorno virtual • Interactúa en entornos virtuales • Crea objetos virtuales en diversos formatos"; "Competencias
//    transversales a las áreas"; "Diseña y construye soluciones tecnológicas para resolver problemas".
//  MINEDU press note 24 July 2025 (n-fabrica-prog.txt): "beneficiará a 1000 escolares de 4.º y 5.º de secundaria de Lima Norte
//    con formación en programación Python y certificación internacional"; "podrán rendir el examen PCEP, con validez global";
//    "Esta experiencia piloto busca validar el modelo pedagógico y replicarlo en el ámbito nacional".
//  UTEC OPI home (opi-home.txt): "organizadas por la Universidad de Ingeniería y Tecnología (UTEC), abiertas gratuitamente a
//    todos los estudiantes de secundaria del país"; OPI 2026 "Inscripciones : hasta el 18 de marzo del 2026 . Competencia :
//    11 de Abril (Fase 2 - Final)"; OPEIA "Competencia : 19 de marzo del 2026".
//  OPI 2025 rules (opi-reglamento-2025.txt, LaTeX accents): Fase 1 "Se podr´a usar C++ o Python"; Fase 2 "Se podr´a usar solo
//    C++."; "Queda prohibido el uso de IA generativa para la resoluci´on de problemas."; "Los 4 primeros puestos de la FASE 2".
//  IOI statistics, Peru (ioi-stats-per.txt): "First participation: 2022 Years participated: 5 Contestants participated: 13";
//    "Gold medals: 0 Silver medals: 0 Bronze medals: 1 Honourable mentions: 1".
//  MINEDU press note 17 April 2026 (n-coar-ib-1100.txt): "2502 estudiantes obtuvieron el Diploma del Bachillerato
//    Internacional"; COAR "47 %".
//  Universidad de Lima Guía 2027-1(A) (ulima-guia-20271a.txt): IB Diploma holders admitted if they apply "en un plazo no mayor
//    de tres años".
//  EF EPI 2025 (ef_peru.txt): Peru 519, Lima 555 (high from 550), job function IT 522.
//  Time: tzdata America/Lima -5:00 (no DST since 1994), Asia/Kolkata 5:30; INACAL feed UTC-5 on 2026-11-08.
// Not verified: ibo.org returned 403; the IB Computer Science guide is not quoted; the page describes only our own course.
// Our own program burbuja.py, run with python3 -I, exact output:
//    input [31, 7, 19, 4, 25] / pass 1: [7, 19, 4, 25, 31] / pass 2: [7, 4, 19, 25, 31] / pass 3: [4, 7, 19, 25, 31] /
//    pass 4: [4, 7, 19, 25, 31] / comparisons = 10, swaps = 6 / input [4, 7, 19, 25, 31] / pass 1: [4, 7, 19, 25, 31] /
//    comparisons = 4, swaps = 0. Our check: 5 x 4 / 2 = 10 comparisons in the worst case; 6 inversions in the first list.
// Lesson family: a trace table for bubble sort: passes, comparisons and swaps counted, and the early exit on a sorted list.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def burbuja(datos):',
  '    lista = datos.copy()',
  '    comparaciones = 0',
  '    intercambios = 0',
  '    for pasada in range(1, len(lista)):',
  '        hubo_cambio = False',
  '        for i in range(len(lista) - pasada):',
  '            comparaciones += 1',
  '            if lista[i] > lista[i + 1]:',
  '                lista[i], lista[i + 1] = lista[i + 1], lista[i]',
  '                intercambios += 1',
  '                hubo_cambio = True',
  "        print(f'pass {pasada}: {lista}')",
  '        if not hubo_cambio:',
  '            break',
  '    return comparaciones, intercambios',
  '',
  'for datos in ([31, 7, 19, 4, 25], [4, 7, 19, 25, 31]):',
  "    print('input', datos)",
  '    c, s = burbuja(datos)',
  "    print(f'comparisons = {c}, swaps = {s}')"
].join('\n');

const OUT = [
  'input [31, 7, 19, 4, 25]',
  'pass 1: [7, 19, 4, 25, 31]',
  'pass 2: [7, 4, 19, 25, 31]',
  'pass 3: [4, 7, 19, 25, 31]',
  'pass 4: [4, 7, 19, 25, 31]',
  'comparisons = 10, swaps = 6',
  'input [4, 7, 19, 25, 31]',
  'pass 1: [4, 7, 19, 25, 31]',
  'comparisons = 4, swaps = 0'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'exams', label: 'IB Ciencias de la Computación' },
  slug: 'bachillerato-internacional-ciencias-de-la-computacion-tutor',
  code: 'bic',
  accent: '#583400',
  accentRationale: 'Tutor de IB Ciencias de la Computación: a dark walnut brown #583400, the wood of an old circuit-board desk, set apart from the brick red of the IB maths door; 8.94:1 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Tutor de IB Ciencias de la Computación',
  title: 'Tutor de IB Computer Science en inglés para Perú, en vivo',
  description: 'Tutor de Ciencias de la Computación del Bachillerato Internacional para estudiantes en Perú: clases en vivo, en línea y en inglés, en Python o Java, a toda hora.',
  ogDescription: 'IB Computer Science desde Perú: qué computación da el colegio según el CNEB, dónde se programa en el país (Fábrica de Programadores, OPI) y una tabla de traza nuestra.',
  twitterDescription: 'Clases de IB Computer Science en inglés, en vivo y por internet, para estudiantes del Bachillerato Internacional en Perú.',
  pageName: 'Tutor de IB Ciencias de la Computación en inglés',
  webPageDescription: 'Guía para estudiantes del Bachillerato Internacional en Perú que buscan un tutor de Ciencias de la Computación en inglés: lo que el CNEB incluye y no incluye sobre computación en secundaria, las oportunidades de programación que publican el MINEDU y la UTEC, el lugar del Diploma en Perú y una lección original con tabla de traza sobre el ordenamiento burbuja.',
  courseDescription: 'Clases en vivo y en línea de IB Computer Science, dictadas solo en inglés, para estudiantes del Programa del Diploma en Perú: teoría, pensamiento algorítmico y programación en Python o Java, y acompañamiento de la evaluación interna, individuales o en grupo, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IB Ciencias de la Computación',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#colegio', label: 'El colegio' },
    { href: '#peru', label: 'Programar en Perú' },
    { href: '#curso', label: 'El curso' },
    { href: '#traza', label: 'Ejemplo' },
    { href: '#hora', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Bachillerato Internacional &middot; Computación',
  h1: 'Tutor de IB Ciencias de la Computación, en inglés',
  lede: 'Ciencias de la Computación es una de las asignaturas más exigentes del Programa del Diploma, y en Perú pocos estudiantes llegan a ella con experiencia previa, porque la secundaria no tiene un curso de computación. Esta página explica qué trae el estudiante desde el colegio, dónde más se programa en el país y cómo trabajamos la asignatura en inglés, con un ejemplo completo.',
  secondaryCta: { href: '#traza', label: 'Ver la tabla de traza' },
  wa: 'Hola Modern Age Coders, buscamos un tutor de IB Computer Science en inglés para un estudiante del Diploma en Perú. ¿Podemos agendar una clase gratis?',
  heroNote: 'Programación en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; IB Computer Science explicado en inglés',
  spec: [
    ['Asignatura', 'IB Computer Science, Nivel Medio y Nivel Superior'],
    ['Lenguajes', 'Python, y Java si el colegio lo eligió'],
    ['Idioma', 'Solo inglés'],
    ['Formato', 'Uno a uno, o un grupo de quince a veinte'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Primera clase', 'Gratis y sin tarjeta']
  ],
  capsuleQ: 'En una frase',
  capsule: 'Sí: Modern Age Coders ofrece tutoría de Ciencias de la Computación del Bachillerato Internacional (IB Computer Science) a estudiantes que viven en Perú, en vivo, en línea y en inglés, en los dos niveles de la asignatura. Desde la India, un tutor enseña la teoría, el pensamiento algorítmico y la programación en Python o en Java, y orienta la evaluación interna, adaptándose al ritmo del estudiante. Hay clases individuales o en grupo, a cualquier hora, y la primera es gratis. Las notas las ponen el colegio y el IB, no nosotros.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para quien estudia o va a estudiar IB Computer Science',
    lede: 'El curso de la asignatura, uno para llegar con base antes del Diploma y uno para quien quiere además una certificación de Python reconocida fuera del colegio.',
    items: [
      { course: 'ib-diploma-computer-science-course', code: 'BIC / 01', title: 'IB Computer Science', alt: 'Imagen del curso de IB Computer Science', note: 'Los dos niveles de la asignatura. Teoría al paso del colegio, algoritmos, código en Python o Java y guía para la evaluación interna.' },
      { course: 'igcse-computer-science-0478-course', code: 'BIC / 02', title: 'Computación antes del Diploma', alt: 'Imagen del curso de IGCSE Computer Science', note: 'Un año antes del Diploma: representación de datos, algoritmos, pseudocódigo y programación, todo lo que el Diploma da por conocido.' },
      { course: 'pcep-pcap-python-certification-course', code: 'BIC / 03', title: 'Python con certificación PCEP', alt: 'Imagen del curso de certificación PCEP y PCAP', note: 'El mismo examen PCEP que menciona el MINEDU para su Fábrica de Programadores; útil para afianzar Python fuera del Diploma.' }
    ]
  },

  sections: [
    {
      id: 'colegio',
      eyebrow: 'Lo que da el colegio',
      h2: '¿Se enseña computación en la secundaria peruana?',
      lede: 'No como área propia. El plan de estudios de secundaria del CNEB reparte 35 horas pedagógicas semanales en la Jornada Escolar Regular, y ninguna área se llama computación ni programación.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Áreas y horas semanales de secundaria con Jornada Escolar Regular, iguales de 1° a 5° (CNEB, Tabla N.° 8)', head: ['Área curricular', 'Horas por semana'], rows: [
          ['Matemática', '4'],
          ['Comunicación', '4'],
          ['Inglés', '3'],
          ['Arte y cultura', '3'],
          ['Ciencias sociales', '3'],
          ['Desarrollo personal, ciudadanía y cívica', '3'],
          ['Educación física', '3'],
          ['Educación religiosa', '2'],
          ['Ciencia y tecnología', '4'],
          ['Educación para el trabajo', '2'],
          ['Tutoría y orientación educativa', '2'],
          ['Horas de libre disponibilidad', '2'],
          ['Total', '35']
        ] },
        { kind: 'source', html: 'Fuente: MINEDU, Currículo Nacional de la Educación Básica, Tabla N.° 8, en minedu.gob.pe/curriculo (revisado el 8 de noviembre de 2026). En los colegios con Jornada Escolar Completa (Tabla N.° 9) el total sube a 45 horas y Educación para el trabajo a 3, sin agregar tampoco un área de computación.' },
        { kind: 'two', mt: true,
          leftH3: 'Dónde aparece lo digital',
          left: [
            'El CNEB tiene la competencia 28, "Se desenvuelve en entornos virtuales generados por las TIC", con cuatro capacidades: personalizar entornos virtuales, gestionar información, interactuar y crear objetos virtuales. La ubica entre las competencias transversales a las áreas, así que no tiene horas propias.',
            'Ciencia y tecnología incluye además la competencia "Diseña y construye soluciones tecnológicas para resolver problemas". Algunos colegios la trabajan con robótica o con talleres en sus horas de libre disponibilidad; depende de cada institución.'
          ],
          rightH3: 'Qué significa para el Diploma',
          right: [
            'Un estudiante que entra al Programa del Diploma en un colegio peruano rara vez ha programado antes de forma sistemática. IB Computer Science, en cambio, supone que el estudiante aprende rápido a escribir algoritmos y código.',
            'Por eso muchas de nuestras tutorías empiezan con un tramo de base: variables, condiciones, bucles, listas, funciones. Con eso, la teoría de la asignatura deja de ser un idioma extraño.'
          ] }
      ]
    },
    {
      id: 'peru',
      eyebrow: 'Programar en Perú',
      h2: '¿Dónde más pueden programar los escolares peruanos?',
      lede: 'Hay iniciativas públicas y universitarias, todas recientes. Las que pudimos verificar en sus fuentes son estas tres.',
      body: [
        { kind: 'table', numCols: [], caption: 'Programación para escolares en Perú: tres iniciativas verificadas en sus propias fuentes', head: ['Iniciativa', 'Quién la organiza', 'Lo que publica'], rows: [
          ['Fábrica de Programadores', 'MINEDU, con Cisco Networking Academy y universidades', 'En su primera etapa, 1000 escolares de 4° y 5° de secundaria de Lima Norte con formación en Python; quienes concluyan "podrán rendir el examen PCEP, con validez global" (24 de julio de 2025)'],
          ['Olimpiadas Peruanas de Computación (OPI)', 'Universidad de Ingeniería y Tecnología (UTEC)', 'Abiertas gratuitamente a todos los estudiantes de secundaria; OPI 2026 con inscripción hasta el 18 de marzo de 2026 y final el 11 de abril de 2026'],
          ['Olimpiada Peruana de Inteligencia Artificial (OPEIA)', 'UTEC', 'Competencia del 19 de marzo de 2026, en una única fecha']
        ] },
        { kind: 'source', html: 'Fuentes: MINEDU, nota de prensa del 24 de julio de 2025 sobre Fábrica de Programadores; opi.utec.edu.pe, página de las Olimpiadas Peruanas de Computación. Consultadas por nosotros el 8 de noviembre de 2026. No tenemos vínculo con el MINEDU ni con la UTEC.' },
        { kind: 'p', mt: true, html: 'El reglamento de la OPI 2025 trae tres detalles útiles para un estudiante del Diploma. En la primera fase, virtual, se puede usar C++ o Python; en la final presencial se podrá usar solo C++. Los cuatro primeros de la final son seleccionados para la Olimpiada Internacional de Informática (IOI). Y queda prohibido el uso de inteligencia artificial generativa para resolver problemas, una regla que también aplicamos en nuestra práctica: el estudiante piensa el algoritmo por su cuenta.' },
        { kind: 'p', html: 'Según las estadísticas oficiales de la IOI, Perú participó por primera vez en 2022, lleva cinco años y trece concursantes, con una medalla de bronce y una mención honrosa. Es una historia corta, lo que dice mucho del espacio que todavía tienen los escolares peruanos interesados en algoritmos.' },
        { kind: 'p', html: 'El MINEDU describe Fábrica de Programadores como "experiencia piloto" que busca replicarse en el ámbito nacional. Mientras eso ocurre, la mayoría de estudiantes llega a la computación por su cuenta. Si su hijo es más pequeño y quiere empezar, la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> explica por dónde comenzar.' }
      ]
    },
    {
      id: 'diploma',
      eyebrow: 'El Diploma en Perú',
      h2: '¿Qué es el Bachillerato Internacional y quién lo cursa en Perú?',
      lede: 'Es un programa de dos años, al final de la secundaria, con exámenes externos del IB. En 2025, según el MINEDU, 2502 estudiantes obtuvieron el Diploma en todo el país, y casi la mitad de ellos, el 47 %, venía de los COAR, los colegios públicos de alto rendimiento.',
      body: [
        { kind: 'p', html: 'Ignoramos cuántos colegios peruanos incluyen Computer Science en su oferta del Diploma. Esa información vive en el sitio del IB, al que no logramos entrar, y el MINEDU no la publica. Quien coordina el Diploma en su colegio sabrá decirle si se ofrece, en qué nivel y con qué lenguaje.' },
        { kind: 'p', html: 'Para la universidad, algunas instituciones peruanas tienen una vía propia para quienes obtienen el Diploma. Un caso: la guía del postulante 2027-1(A) de la Universidad de Lima fija un límite de tres años, contados desde el fin de los estudios, para usar esa modalidad. La admisión la decide siempre la universidad; nuestras clases no tienen relación con ningún proceso de admisión.' },
        { kind: 'p', html: 'Si el estudiante también cursa matemática del Diploma, que suele ser el caso de quienes eligen Computer Science, la página de <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">Coding and AI classes in Peru</a> resume todo lo que enseñamos en el país, incluida la matemática del IB.' }
      ]
    },
    {
      id: 'curso',
      eyebrow: 'Nuestro curso',
      h2: '¿Cómo es una tutoría de IB Computer Science en inglés?',
      lede: 'Sigue el programa del colegio, enseña la teoría en el mismo orden y dedica mucho tiempo a lo que más cuesta: escribir y leer algoritmos a mano, sin ejecutar nada, y explicarlos en inglés.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cómo organizamos la tutoría (descripción de nuestro curso)', head: ['Bloque', 'Qué trabajamos', 'Cómo se practica'], rows: [
          ['Base de programación', 'Variables, tipos, condiciones, bucles, listas, funciones', 'Programas cortos en Python o Java, escritos por el estudiante'],
          ['Teoría', 'Sistemas, redes, datos, bases de datos y los demás temas del programa del colegio', 'Preguntas cortas redactadas en inglés'],
          ['Pensamiento algorítmico', 'Búsqueda, ordenamiento, recursión, eficiencia', 'Tablas de traza a mano, como la de esta página'],
          ['Evaluación interna', 'Elección del problema, planificación, pruebas, documentación', 'Preguntas y observaciones, con las normas del colegio; el código y el informe los hace el estudiante'],
          ['Exámenes', 'Preguntas de práctica escritas por nosotros', 'Simulacros cronometrados y revisión de errores']
        ] },
        { kind: 'source', html: 'Descripción nuestra. Nuestro curso está preparado para la guía de la asignatura que, según la información que manejamos, se evalúa por primera vez en 2027, con la prueba de programación disponible en Python o en Java según lo que elija el colegio. Como el sitio del IB nos negó el acceso, no lo hemos contrastado con la guía oficial; pídala en su colegio.' },
        { kind: 'p', mt: true, html: 'Todo ocurre en inglés: la explicación, el código, los comentarios dentro del código y la redacción de las respuestas. Para un estudiante que rendirá la asignatura en inglés, eso evita traducir dos veces. Con 519 puntos para Perú y 555 para Lima en el EF EPI 2025, el idioma rara vez frena a un estudiante del Diploma; lo que pulimos es la precisión técnica al escribir.' },
        { kind: 'p', html: 'Un punto en el que somos estrictos: la evaluación interna es trabajo del estudiante. Hacemos preguntas, señalamos dónde una prueba es débil o una explicación está incompleta, pero no escribimos código ni texto que el estudiante vaya a entregar. Es la regla del colegio y es también la única forma de que aprenda.' }
      ]
    },
    {
      id: 'traza',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se lee un algoritmo con una tabla de traza?',
      lede: 'Siguiendo, paso a paso y en papel, el valor de cada variable. Esta lección es nuestra: un ordenamiento burbuja que cuenta comparaciones e intercambios y se detiene antes si la lista ya está ordenada.',
      body: [
        { kind: 'code', label: 'Ordenamiento burbuja con contadores', lang: 'Python', code: PY, note: 'Antes de ejecutarlo, el estudiante completa a mano una tabla con las columnas pasada, i, lista, comparaciones, intercambios y hubo_cambio. Recién después compara su tabla con la salida.' },
        { kind: 'code', label: 'Salida', lang: 'Salida', code: OUT, note: 'Copiada exactamente después de ejecutar el programa en Python 3.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Primera pasada.</strong> El 31 avanza comparación tras comparación hasta el final: <code>[7, 19, 4, 25, 31]</code>. Después de cada pasada el mayor que queda llega a su lugar, por eso el bucle interno recorre una posición menos cada vez (<code>len(lista) - pasada</code>).',
          '<strong>Contar.</strong> Con cinco elementos se hacen 4 + 3 + 2 + 1 = 10 comparaciones en el peor caso, es decir n(n − 1)/2. Los 6 intercambios coinciden con los 6 pares desordenados de la lista original: (31, 7), (31, 19), (31, 4), (31, 25), (7, 4) y (19, 4).',
          '<strong>La salida temprana.</strong> Con la lista ya ordenada, la primera pasada no hace ningún cambio, <code>hubo_cambio</code> queda en <code>False</code> y el algoritmo termina: 4 comparaciones y 0 intercambios. Es el caso más favorable.',
          '<strong>Una pregunta de examen, nuestra.</strong> <em>State the number of comparisons made when the list is already sorted, and explain why.</em> La respuesta completa nombra la variable <code>hubo_cambio</code> y la condición que corta el bucle.',
          '<strong>Un cambio para pensar.</strong> ¿Qué pasa si se borra la línea <code>break</code>? El resultado final es el mismo, pero la lista ordenada costaría 10 comparaciones. El estudiante lo predice en su tabla y luego lo comprueba.'
        ] },
        { kind: 'p', mt: true, html: 'Lo valioso de la tabla de traza no es el ordenamiento burbuja, que casi nadie usa en la práctica. Es el hábito de seguir un algoritmo con precisión sin depender de la computadora, que es justo lo que piden las preguntas escritas de cualquier examen de computación. Por eso, como en la OPI, no dejamos que una herramienta de IA haga la traza: el estudiante la hace con su lápiz.' }
      ]
    },
    {
      id: 'eficiencia',
      eyebrow: 'Eficiencia',
      h2: '¿Por qué importa contar operaciones en IB Computer Science?',
      lede: 'Porque dos programas que dan el mismo resultado pueden tardar tiempos muy distintos cuando los datos crecen, y explicar esa diferencia con números es una de las habilidades que más se piden al estudiante.',
      body: [
        { kind: 'table', numCols: [0, 1, 2], caption: 'Comparaciones del ordenamiento burbuja en el peor caso frente a un solo recorrido de la lista (cálculo nuestro)', head: ['Elementos (n)', 'Burbuja, peor caso: n(n − 1)/2', 'Un recorrido para comprobar si ya está ordenada: n − 1'], rows: [
          ['5', '10', '4'],
          ['10', '45', '9'],
          ['100', '4950', '99'],
          ['1000', '499500', '999']
        ] },
        { kind: 'source', html: 'Cálculo nuestro con Python 3. La primera fila coincide con la salida de la lección de arriba: 10 comparaciones para la lista desordenada y 4 para la ordenada.' },
        { kind: 'p', mt: true, html: 'Al multiplicar por diez el tamaño de la lista, las comparaciones del peor caso se multiplican por algo cercano a cien, mientras que el recorrido simple solo se multiplica por diez. Esa es la diferencia entre un crecimiento cuadrático y uno lineal, y el estudiante debe poder explicarla en inglés con una frase precisa: <em>doubling the input roughly quadruples the number of comparisons</em>.' },
        { kind: 'p', html: 'En clase llegamos a esta tabla desde la traza, nunca al revés. Primero el estudiante cuenta a mano las comparaciones con cinco números; después predice cuántas habrá con diez; recién al final generaliza la fórmula. Así la notación de eficiencia deja de ser una etiqueta memorizada y se convierte en algo que el estudiante puede reconstruir en el examen si la olvida.' },
        { kind: 'p', html: 'El mismo razonamiento sirve fuera del Diploma. En la OPI, por ejemplo, los problemas suelen tener límites de tiempo, y un algoritmo cuadrático que funciona con cien datos puede no terminar con cien mil. Saber estimar el número de operaciones antes de escribir el código es lo que permite elegir el enfoque correcto desde el principio.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horarios',
      h2: '¿En qué horario se dan las tutorías si el estudiante está en Perú?',
      lede: 'En el que el estudiante escoja. Los tutores viven en la India, que lleva diez horas y media de ventaja sobre Perú cualquier día del año.',
      body: [
        { kind: 'table', numCols: [], caption: 'Equivalencias de hora entre Perú y la India (ejemplos de conversión, sin calendario fijado)', head: ['Perú', 'India', 'Comentario'], rows: [
          ['6:00 a. m.', '4:30 p. m.', 'Repaso antes del colegio'],
          ['9:30 a. m.', '8:00 p. m.', 'Vacaciones o días libres'],
          ['4:30 p. m.', '3:00 a. m. (día siguiente)', 'Después de clases'],
          ['6:30 p. m.', '5:00 a. m. (día siguiente)', 'Bloque de práctica de programación'],
          ['9:30 p. m.', '8:00 a. m. (día siguiente)', 'Antes de una entrega']
        ] },
        { kind: 'source', html: 'Perú está en UTC-5 durante todo el año y no cambia de hora desde 1994 (tzdata, America/Lima; reloj oficial del INACAL consultado el 8 de noviembre de 2026). La India está en UTC+5:30 (Asia/Kolkata). Los comentarios son nuestros.' },
        { kind: 'p', mt: true, html: 'La diferencia no se mueve en ningún mes, así que la tutoría puede quedar a la misma hora durante los dos años del Diploma. En semanas de entrega de la evaluación interna o de simulacros se pueden sumar sesiones.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se nota el avance en IB Computer Science?',
    lede: 'Cinco etapas propias, que usamos para hablar con el estudiante y con la familia.',
    table: { caption: 'Cinco etapas de avance en IB Computer Science (nuestras)', head: ['Etapa', 'Cuándo aparece', 'Señal concreta'], rows: [
      ['1. Escribe código', 'Primeras semanas', 'escribir programas cortos con condiciones, bucles y listas sin copiar'],
      ['2. Traza a mano', 'Primer trimestre', 'completar una tabla de traza como la del ordenamiento burbuja sin ejecutar nada'],
      ['3. Mide la eficiencia', 'Primer año', 'contar operaciones y comparar dos algoritmos para el mismo problema'],
      ['4. Explica en inglés', 'Primer y segundo año', 'redactar una respuesta teórica completa con el vocabulario de la asignatura'],
      ['5. Construye y prueba', 'Segundo año', 'planificar, programar y probar un proyecto propio, documentando cada decisión']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'El paso de la etapa 1 a la 2 sorprende a muchos: un estudiante que programa bien puede trabarse al trazar a mano. Es normal y se entrena.',
      'Pregunte a su hijo qué algoritmo vio esta semana y pídale que se lo explique con un ejemplo de cinco números.'
    ] },
    right: { h3: 'Para estudiantes', ps: [
      'Antes de ejecutar un programa, escriba qué espera que imprima. Si no coincide, ahí está la lección.',
      'Cuente siempre: comparaciones, intercambios, pasadas. Contar es la puerta de entrada a la eficiencia.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más de computación en inglés',
    lede: 'Todos en vivo, con un tutor fijo, en grupo o uno a uno.',
    bands: [
      { num: 'I', h3: 'Antes del Diploma', sub: 'De 13 a 15 años', courses: [
        { code: 'BIC / BASE / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'De cero a proyectos propios, el lenguaje más usado en la asignatura.' },
        { code: 'BIC / BASE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Para colegios que eligen Java: clases, objetos y estructuras.' },
        { code: 'BIC / BASE / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolución de problemas', blurb: 'Lógica, estructuras de datos y algoritmos para secundaria.' }
      ] },
      { num: 'II', h3: 'Junto al Diploma', sub: 'De 15 a 18 años', courses: [
        { code: 'BIC / DP / 01', slug: 'competitive-programming-for-teens-course', title: 'Programación competitiva', blurb: 'Problemas de olimpiada, útil para quien mira la OPI.' },
        { code: 'BIC / DP / 02', slug: 'mysql-mastery-for-teens', title: 'Bases de datos con SQL', blurb: 'Consultas y diseño de tablas, del primer SELECT a apps reales.' },
        { code: 'BIC / DP / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA y AI', blurb: 'La matemática del Diploma, también en inglés.' }
      ] },
      { num: 'III', h3: 'Después del Diploma', sub: 'Desde 17 años', courses: [
        { code: 'BIC / UNI / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'El curso que más pesa en los primeros años de una carrera de computación.' },
        { code: 'BIC / UNI / 02', slug: 'complete-java-programming-masterclass-college', title: 'Java para la universidad', blurb: 'De Java básico a aplicaciones con Spring Boot.' },
        { code: 'BIC / UNI / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python avanzado', blurb: 'Para universitarios que quieren dominar el lenguaje a fondo.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo son las tutorías en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Semana a semana', l: 'Tutoría regular que sigue el ritmo del colegio.' },
      { time: 'Antes de entregas', l: 'Sesiones extra cerca de la evaluación interna.' },
      { time: 'Uno a uno', l: 'Un horario que se acuerda con el estudiante.' }
    ],
    cells: [
      { h3: 'Código del estudiante', p: 'El tutor no programa por él; pregunta hasta que el estudiante encuentra el camino.' },
      { h3: 'Trazas a mano', p: 'Cada algoritmo se sigue en papel antes de ejecutarse.' },
      { h3: 'Python o Java', p: 'El lenguaje que eligió el colegio, sin mezclar.' },
      { h3: 'Inglés técnico', p: 'Vocabulario de la asignatura anotado y practicado en cada sesión.' },
      { h3: 'Sin IA para resolver', p: 'Como en la OPI, el razonamiento es del estudiante.' },
      { h3: 'Tutor fijo', p: 'La misma persona durante el Diploma, si así lo desea.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Algunos trabajos de estudiantes que programan con nosotros; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, página en inglés.',
  reviewsLede: 'Reseñas publicadas en Google por estudiantes y familias, en inglés y sin cambios.',

  fees: {
    h2: 'Precio de la tutoría de IB Computer Science',
    lede: 'La cuota es mensual y se ve en dólares estadounidenses. Se cobra a una tarjeta, y el banco del titular la convierte a soles con su propio tipo de cambio, por lo que el cargo exacto cambia apenas entre un mes y el siguiente.',
    free: ['Una clase de prueba sin costo', 'Revisión del nivel de programación y del programa del colegio', 'Sin tarjeta ni compromiso'],
    group: ['Grupo de quince a veinte estudiantes', 'Tutor fijo durante el curso', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Tutoría uno a uno', 'El lenguaje y el nivel del colegio', 'Sesiones extra antes de entregas si las pide']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Tutor de IB Ciencias de la Computación: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Son en vivo, por internet y solo en inglés, y para quien rinde IB Computer Science en inglés eso es una ventaja: teoría, código y redacción en el idioma de la asignatura, con un tutor que se adapta al ritmo del estudiante. El EF EPI 2025 sitúa a Lima en la franja alta de inglés, y hablar de algoritmos en voz alta es una práctica oral muy concreta.' },
      { q: '¿Enseñan en Python o en Java?', a: 'En el lenguaje que eligió el colegio. Nuestro curso usa Python por defecto y también trabaja con Java.' },
      { q: '¿Se enseña computación en los colegios del Perú?', a: 'No como área propia. El plan de estudios del CNEB para secundaria no tiene un área de computación; la competencia digital, "Se desenvuelve en entornos virtuales generados por las TIC", es transversal a las áreas.' },
      { q: '¿Ayudan con la evaluación interna?', a: 'Orientamos la elección del problema, la planificación, las pruebas y la documentación, siempre con las normas que fije el colegio. Nada de lo que se entrega lo escribimos nosotros.' },
      { q: '¿Necesita saber programar antes de empezar?', a: 'No, pero ayuda. Si el estudiante no ha programado, empezamos con un tramo de base en Python o Java antes de la teoría de la asignatura.' },
      { q: '¿Sirve para la Olimpiada Peruana de Informática?', a: 'La práctica de algoritmos ayuda. La OPI la organiza la UTEC y es gratuita para estudiantes de secundaria; su final presencial solo permite C++, según el reglamento de 2025. No estamos vinculados a la UTEC.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Un ejemplo: las 9:30 a. m. en Perú son las 8:00 p. m. en la India.' },
      { q: '¿Están vinculados al IB?', a: 'No. Somos independientes de la Organización del Bachillerato Internacional, de los colegios y del MINEDU; la calificación corresponde al colegio y al IB.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, una vez al mes, en dólares de Estados Unidos; el banco hace la conversión a soles. La primera clase es gratis.' },
      { q: '¿Dan algún certificado?', a: 'Solo nuestro certificado de finalización, emitido por Modern Age Coders. No es un certificado del IB ni tiene valor oficial en Perú.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas sobre el IB y la programación, en su mayoría en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Nuestras clases en Perú, de primaria a la universidad.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium classes in Lima', p: 'Para familias de colegios bilingües e IB de Lima.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science tuition', p: 'Nuestra página general de la asignatura.' },
      { href: '/ib-extended-essay-maths-computer-science-mentoring', label: 'IB Extended Essay mentoring', p: 'Monografía del Diploma en computación o matemática.' },
      { href: '/ib-maths-tuition-online', label: 'IB Maths tuition online', p: 'La matemática del Diploma, en inglés.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo se organiza una clase en vivo.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de prueba de IB Computer Science',
    lede: 'En la clase de prueba el tutor le propone al estudiante un algoritmo corto para trazar a mano y un pequeño programa para escribir, revisa con él el programa de su colegio y sugiere un plan de tutorías. Sin compromiso.',
    readFirst: 'Puede leer antes <a class="ag-inline-link" href="/ib-computer-science-online-tuition">IB Computer Science tuition</a>, sobre el curso, o <a class="ag-inline-link" href="/how-we-teach">How we teach</a>; ambas en inglés.',
    note: 'Tutorías en vivo, en línea y en inglés, con tutores en la India. Puede escribirnos por WhatsApp en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Computación del IB', links: [
        { href: '/courses/ib-diploma-computer-science-course', label: 'IB Computer Science' },
        { href: '/courses/igcse-computer-science-0478-course', label: 'Base antes del Diploma' },
        { href: '/courses/pcep-pcap-python-certification-course', label: 'Python con PCEP' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Más sobre el IB', links: [
        { href: '/ib-computer-science-online-tuition', label: 'IB Computer Science tuition' },
        { href: '/ib-maths-tuition-online', label: 'IB Matemáticas' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'comparisons = 10, swaps = 6: trazado a mano primero'
  },

  personalityCss: `
.ag-root.ag-bic .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-bic .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-bic .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-bic .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-bic .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Currículo Nacional de la Educación Básica (Tablas N.° 8 and 9, competency 28 and its four capacities, transversal competencies, the Ciencia y tecnología competency on technological solutions), press notes of 24 July 2025 (Fábrica de Programadores) and 17 April 2026 (IB Diploma 2025); UTEC OPI home page and OPI 2025 rules; IOI statistics for Peru; Universidad de Lima Guía 2027-1(A); EF EPI 2025 Peru page; tzdata and INACAL for time. All read 8 November 2026. ibo.org blocked, so no IB guide is quoted. The course table, the trace-table lesson and the ladder are our own.',
    localProject: 'An original trace-table lesson for an IB Computer Science student in Peru: a Python bubble sort with counters and an early exit; run with python3 -I on [31, 7, 19, 4, 25] it prints four passes and comparisons = 10, swaps = 6 (the six inversions), and on the sorted list [4, 7, 19, 25, 31] it stops after one pass with comparisons = 4, swaps = 0. Lesson family: a trace table for bubble sort, passes, comparisons and swaps counted, the early exit.',
    requiredMentions: ['comparisons = 10, swaps = 6', 'comparisons = 4, swaps = 0', 'pass 2: [7, 4, 19, 25, 31]', 'podrán rendir el examen PCEP, con validez global', 'se podrá usar solo C++', 'Perú participó por primera vez en 2022, lleva cinco años y trece concursantes', 'Educación para el trabajo', 'gratuitamente a todos los estudiantes de secundaria', 'comparisons = 10, swaps = 6: trazado a mano primero'],
    sources: [
      { claim: 'Secundaria areas and hours (Tablas N.° 8 and 9) with no computing area; competency 28 and its capacities; transversal competencies.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'Fábrica de Programadores: 1,000 students of 4° and 5° secundaria in Lima Norte, Python, PCEP exam, pilot to be replicated (24 July 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'OPI organised by UTEC, free for secundaria; OPI 2026 dates; OPEIA 19 March 2026.', url: 'https://opi.utec.edu.pe/' },
      { claim: 'OPI 2025 rules: C++ or Python in phase 1, only C++ in the final, top four to the IOI, generative AI banned.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'IOI record for Peru: first participation 2022, 5 years, 13 contestants, 1 bronze, 1 honourable mention.', url: 'https://stats.ioinformatics.org/countries/PER' },
      { claim: '2,502 IB Diplomas in Peru in 2025, 47% at COAR.', url: 'https://www.gob.pe/institucion/minedu/noticias/1380061-mas-de-1100-estudiantes-de-los-coar-obtienen-diploma-del-bachillerato-internacional-y-alcanzan-estandares-de-nivel-mundial' },
      { claim: 'Universidad de Lima admits IB Diploma holders within three years.', url: 'https://www.ulima.edu.pe/sites/default/files/2026-11/admision_20271a_guia_del_postulante_v10.pdf' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST since 1994; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, said in the capsule and in an FAQ.',
      'IB endorsement or any link with the IB, MINEDU, UTEC, a school or a university: none, said on the page.',
      'Official IB Computer Science syllabus, papers and weightings: not verified (ibo.org 403); the page describes only our own course and points to the school coordinator.',
      'A count of Peruvian schools offering IB Computer Science: not verified; none printed.',
      'Writing a student\'s internal assessment code or report: refused.',
      'Admission or grade promises: refused.'
    ]
  }
};

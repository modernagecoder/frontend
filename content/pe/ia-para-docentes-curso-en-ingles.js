// SHIP: market (es subject door) | IA para docentes en Perú: entender la IA por dentro, más allá del curso del MINEDU | a bigram next-word model: counts, a greedy loop, and a word it never saw
'use strict';
// IA para docentes, curso en inglés (ag- Spanish-language door, Peru cluster row PE156, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the Peruvian teacher who types "ia para docentes peru" (KEYWORDS.md section 2, profession-specific AI) and wants to
// understand AI for themselves, beyond tool tips. The page does not tell teachers how to use tools with minors; it points to
// vendor age rules only. We are not connected to MINEDU, PerúEduca or SIFODS.
// Spine: what the state already offers teachers (MINEDU press note of 9 May 2025: course, units, workshops, targets); what the
// AI regulation says about teacher training (DS 115-2025-PCM art. 13.2); where AI sits in the CNEB (transversal TIC
// competency); where the state is taking AI next (205 rural schools, 4 December 2025; Hackathon 2025); what a technical course
// adds; English for teachers (EF EPI 2025 "Teacher : 532"); when to study around the 2026 school calendar; one Python lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/ia-para-docentes-curso-en-ingles/):
//  MINEDU press note, 9 May 2025 (ia87000.txt; FACTS 50): "más de 87 000 docentes en el territorio nacional se han inscrito en
//    el curso “Inteligencia artificial (IA) en la práctica docente”"; "a través de la plataforma del Sifods"; "es absolutamente
//    gratuito y aquellos que lo aprueban reciben una constancia que les sirve para el escalafón de la Carrera Pública
//    Magisterial"; "El Minedu realizó cinco convocatorias"; "una sexta ... abierta hasta el próximo 1 de junio"; "el curso sobre
//    IA en dos unidades"; second unit "Enseñar y aprender con IA"; "desde el 2024 ... Talleres de integración responsable de la
//    inteligencia artificial en el proceso educativo"; "en las 26 regiones"; "hay 37 314 docentes inscritos en el primer grupo";
//    "La meta que se ha trazado el Minedu es atender a 3550 profesores de innovación pedagógica"; in-person workshops in "Lima
//    Metropolitana, la Provincia Constitucional del Callao e Ica, con la meta de atender a 1600 docentes".
//  MINEDU press note, 4 December 2025 (iarural.txt; FACTS 51): AI for planning "en 205 instituciones educativas del ámbito
//    rural" that "atienden a cerca de 27 000 estudiantes"; "En el país hay 627 508 estudiantes de secundaria matriculados en
//    instituciones educativas del ámbito rural".
//  MINEDU press note, 4 August 2025 (hackathon2025.txt): "la cuarta edición de la Hackathon 2025"; category "Docentes de
//    Educación Básica"; "la presencia de estudiantes mujeres creció en 28 %" between 2023 and 2025.
//  DS 115-2025-PCM (El Peruano, 9 September 2025; ds115.txt): art. 13.2 "se promueve la formación del personal docente en IA y
//    tecnologías digitales para su aprovechamiento pedagógico en las instituciones educativas públicas y privadas".
//  CNEB (FACTS 33, 34; raw facts-school/src/cneb/): TIC competency transversal, "Competencias transversales a las áreas: Se
//    desenvuelve en"; "Consiste en que el estudiante interprete, modifique y optimice entornos virtuales".
//  RM 501-2025-MINEDU (FACTS 21, 23, checked against the PDF table): 36 teaching weeks; teaching from 16 March to 18 December 2026.
//  EF EPI 2025 Peru page (ef_peru.txt): "Teacher : 532", "Speaking score: 480", Lima 555.
//  Vendor terms (content/ai-tool-age-audit.json): ChatGPT 13+ with parental permission under 18; Claude 18+.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (siguiente.py; the four sentences are written by us):
//    despues de "la": {'clase': 1, 'pregunta': 1, 'discusion': 2, 'respuesta': 1} / despues de "abre": {'la': 1, 'otra': 1} /
//    la discusion . la discusion . la discusion . la discusion . la / una pregunta . la discusion . la / False
// Lesson family: a bigram next-word model (counting which word follows which, greedy choice, a repetition loop, and the
// vocabulary limit), the smallest honest picture of how a language model writes.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'from collections import Counter, defaultdict',
  '',
  "texto = ('la clase empieza con una pregunta . '",
  "         'la pregunta abre la discusion . '",
  "         'la discusion termina con una respuesta . '",
  "         'la respuesta abre otra pregunta .')",
  '',
  'palabras = texto.split()',
  'siguientes = defaultdict(Counter)',
  'for actual, despues in zip(palabras, palabras[1:]):',
  '    siguientes[actual][despues] += 1',
  '',
  "print('despues de \"la\":', dict(siguientes['la']))",
  "print('despues de \"abre\":', dict(siguientes['abre']))",
  '',
  'def escribir(inicio, largo):',
  '    frase = [inicio]',
  '    for _ in range(largo):',
  '        opciones = siguientes[frase[-1]]',
  '        if not opciones:',
  '            break',
  '        frase.append(opciones.most_common(1)[0][0])',
  "    return ' '.join(frase)",
  '',
  "print(escribir('la', 12))",
  "print(escribir('una', 6))",
  "print('profesor' in siguientes)"
].join('\n');

const OUT = [
  'despues de "la": {\'clase\': 1, \'pregunta\': 1, \'discusion\': 2, \'respuesta\': 1}',
  'despues de "abre": {\'la\': 1, \'otra\': 1}',
  'la discusion . la discusion . la discusion . la discusion . la',
  'una pregunta . la discusion . la',
  'False'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'IA para docentes' },
  slug: 'ia-para-docentes-curso-en-ingles',
  code: 'idi',
  accent: '#004A32',
  accentRationale: 'IA para docentes: a blackboard green #004A32, the classroom colour, darker than the pine and sea greens of the other AI pages; contrast well above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'IA para docentes, curso en inglés',
  title: 'IA para docentes en Perú: curso en vivo y en inglés',
  description: 'IA para docentes en Perú: un curso en vivo y en inglés para entender cómo funciona la inteligencia artificial por dentro, más allá de las herramientas. A su hora.',
  ogDescription: 'Qué ofrece ya el MINEDU a los docentes en IA, qué pide el reglamento de 2025, qué añade un curso técnico y un modelo de lenguaje diminuto escrito en Python.',
  twitterDescription: 'Inteligencia artificial para profesores peruanos, en vivo y en inglés, con mentor, en grupo o individual y en el horario que deje libre el colegio.',
  pageName: 'IA para docentes: curso en inglés para profesores del Perú',
  webPageDescription: 'Guía para docentes peruanos que buscan formarse en inteligencia artificial: la capacitación del MINEDU en 2025 en cifras, lo que el reglamento de IA de 2025 dice sobre la formación docente, el lugar de la IA en el CNEB, lo que agrega un curso técnico, el inglés de los docentes según el EF EPI 2025 y un modelo de siguiente palabra escrito en Python.',
  courseDescription: 'Curso en vivo y en línea de inteligencia artificial para docentes de inicial, primaria, secundaria y educación superior en todo el Perú, dictado solo en inglés por mentores desde la India: cómo aprende un modelo, cómo genera texto un modelo de lenguaje, cómo verificar sus respuestas y Python desde cero, en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'IA para docentes',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#minedu', label: 'Lo que ya existe' },
    { href: '#por-dentro', label: 'IA por dentro' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#aula', label: 'Aula y edades' },
    { href: '#cuando', label: 'Cuándo estudiar' }
  ],
  eyebrow: 'Perú &middot; Inteligencia artificial &middot; Para docentes',
  h1: 'IA para docentes en Perú: un curso en vivo y en inglés',
  lede: 'Muchos profesores ya saben pedirle a un chatbot una sesión de aprendizaje o una rúbrica. Pocos saben por qué el chatbot a veces inventa, repite o se equivoca con seguridad. Este curso es para el docente que quiere entender esa parte, con las manos en el código, y poder explicarla a colegas, padres y estudiantes con propiedad.',
  secondaryCta: { href: '#por-dentro', label: 'Ver qué se aprende' },
  wa: 'Hola Modern Age Coders, soy docente en Perú y me interesa el curso de inteligencia artificial en inglés. ¿Puedo tomar una clase de prueba gratuita?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; 4.9 de puntuación en Google',
  spec: [
    ['Para quién', 'Docentes de inicial, primaria, secundaria y superior'],
    ['Base', 'Ninguna; Python se aprende desde cero'],
    ['Contenido', 'Cómo aprende y cómo escribe una IA, y cómo verificarla'],
    ['Modalidad', 'Grupo de quince a veinte personas, o individual'],
    ['Idioma', 'Inglés, con mentor en vivo desde la India'],
    ['Inicio', 'Clase de prueba sin costo']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Modern Age Coders ofrece a docentes de todo el Perú un curso de inteligencia artificial en vivo, en línea y en inglés, para aprender cómo funciona la IA por dentro y no solo cómo usarla. Se parte de Python desde cero y se llega a construir modelos pequeños que aprenden de datos y que generan texto, para entender sus aciertos y sus errores. Un mentor desde la India dicta cada clase, en grupo o de forma individual, en el horario que le deje libre el colegio. Es formación para usted como profesional; no reemplaza la capacitación del MINEDU ni tiene relación con ella.',

  picks: {
    eyebrow: 'Cursos para docentes',
    h2: 'Tres cursos de IA que suelen elegir los profesores',
    lede: 'Uno para usar herramientas con criterio, uno para aprender a programar y uno para entender la IA generativa desde adentro. Los tres son para mayores de 18.',
    items: [
      { course: 'ai-tools-mastery-complete-college', code: 'IDI / 01', title: 'Herramientas de IA con criterio', alt: 'Imagen del curso de dominio de herramientas de inteligencia artificial para adultos', note: 'Para el docente que ya usa chatbots y quiere hacerlo con método: instrucciones claras, verificación de cada respuesta y límites de privacidad.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'IDI / 02', title: 'Python desde cero', alt: 'Imagen del curso de Python desde cero hasta nivel avanzado para adultos', note: 'El lenguaje en que se escribe casi toda la IA. Ideal si enseña matemática, ciencia o computación y quiere programar ejemplos propios.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'IDI / 03', title: 'IA generativa por dentro', alt: 'Imagen del curso de inteligencia artificial generativa para adultos', note: 'Tokens, probabilidades y modelos de lenguaje: por qué un chatbot redacta con fluidez y por qué eso no garantiza que tenga razón.' }
    ]
  },

  sections: [
    {
      id: 'minedu',
      eyebrow: 'Lo que ya existe',
      h2: '¿Qué capacitación en IA ofrece el MINEDU a los docentes?',
      lede: 'Una oferta amplia y gratuita. Antes de buscar un curso privado conviene conocerla, porque muchos docentes ya la tomaron y otros pueden tomarla sin costo.',
      body: [
        { kind: 'table', numCols: [1], caption: 'La formación docente en inteligencia artificial del MINEDU, según su nota de prensa de mayo de 2025', head: ['Dato publicado', 'Cifra', 'Detalle'], rows: [
          ['Docentes inscritos en el curso virtual "Inteligencia artificial (IA) en la práctica docente"', 'Más de 87 000', 'Dictado en la plataforma del SIFODS, gratuito'],
          ['Convocatorias realizadas hasta mayo de 2025', '5', 'Una sexta abierta hasta el 1 de junio de 2025'],
          ['Unidades del curso', '2', 'La segunda se llama "Enseñar y aprender con IA"'],
          ['Docentes inscritos en el primer grupo de talleres de integración responsable de la IA', '37 314', 'Talleres iniciados en 2024 por la DITE'],
          ['Regiones alcanzadas por esos talleres', '26', 'Dirigidos también a especialistas y profesores de innovación pedagógica'],
          ['Meta de profesores de innovación pedagógica', '3550', 'Talleres virtuales con las direcciones regionales'],
          ['Meta de docentes en talleres presenciales', '1600', 'En Lima Metropolitana, Callao e Ica']
        ] },
        { kind: 'source', html: 'Fuente: Ministerio de Educación, nota de prensa "Minedu capacita a más de 87 000 docentes en inteligencia artificial en el ámbito nacional", gob.pe, 9 de mayo de 2025. Las cifras son las de esa fecha; el propio MINEDU anunció que seguirían creciendo.' },
        { kind: 'p', mt: true, html: 'Según la misma nota, quienes aprueban el curso del SIFODS reciben una constancia que sirve para el escalafón de la Carrera Pública Magisterial. Ese beneficio es del MINEDU y solo del MINEDU. Nuestro curso no da puntos para el escalafón, no forma parte de PerúEduca ni del SIFODS y no tiene ningún vínculo con el Ministerio. Si a usted le interesa el escalafón, empiece por la oferta oficial.' },
        { kind: 'p', html: 'La pregunta útil, entonces, no es "estatal o privado", sino qué le falta después. La primera unidad del curso estatal define la IA y sus conceptos; la segunda da recomendaciones para el aula. Lo que un curso de ese formato no suele hacer es abrir la máquina: programar un modelo, ver cómo aprende, medir cuánto se equivoca. Eso es lo que hacemos nosotros, y por eso los dos caminos se complementan.' }
      ]
    },
    {
      id: 'norma',
      eyebrow: 'Marco',
      h2: '¿Qué dice el reglamento peruano de IA sobre la formación docente?',
      lede: 'Le dedica una oración clara. El Decreto Supremo N.° 115-2025-PCM, que reglamenta la Ley 31814 y se publicó en El Peruano el 9 de setiembre de 2025, promueve en su artículo 13.2 la formación del personal docente en IA.',
      body: [
        { kind: 'two',
          leftH3: 'El texto',
          left: [
            'El artículo 13.2 dice que la Secretaría de Gobierno y Transformación Digital articula con el MINEDU la promoción del uso "responsable, ético, transparente e inclusivo" de la IA en el marco del Currículo Nacional de la Educación Básica.',
            'Y añade: "se promueve la formación del personal docente en IA y tecnologías digitales para su aprovechamiento pedagógico en las instituciones educativas públicas y privadas". La frase incluye expresamente a los colegios privados.'
          ],
          rightH3: 'Lo que significa para usted',
          right: [
            'El Estado considera la formación docente en IA una prioridad, tanto en la escuela pública como en la privada. No obliga a nadie a tomar un curso en particular ni reconoce cursos privados por ese artículo.',
            'Lo citamos como contexto, no como asesoría legal. Nuestro curso no está acreditado bajo ese reglamento ni bajo ninguna otra norma peruana.'
          ] },
        { kind: 'p', mt: true, html: 'En el currículo, la IA no aparece como un área aparte. El Currículo Nacional de la Educación Básica trata lo digital como una competencia transversal, "Se desenvuelve en los entornos virtuales generados por las TIC", que todas las áreas comparten. El CNEB la describe como la capacidad del estudiante de interpretar, modificar y optimizar entornos virtuales. En la práctica, eso significa que el docente de Comunicación, el de Matemática y el de Ciencia y Tecnología comparten la tarea, y que a cualquiera de ellos le sirve entender cómo funciona lo que usa.' }
      ]
    },
    {
      id: 'por-dentro',
      eyebrow: 'IA por dentro',
      h2: '¿Qué aprende un docente en un curso técnico de inteligencia artificial?',
      lede: 'Cuatro ideas que cambian la forma de mirar cualquier herramienta. Ninguna exige ser ingeniero; todas exigen escribir y ejecutar código pequeño, acompañado por el mentor.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Un modelo es una tabla de números', p: 'Se ajusta a partir de ejemplos. Si los ejemplos están sesgados, el modelo también. Lo verá con datos que usted mismo arma, como una lista de notas inventadas o de oraciones escritas por usted.' },
          { h3: 'Un chatbot predice palabras', p: 'Elige la siguiente palabra según lo que vio antes. Por eso escribe con fluidez y por eso puede repetir, inventar una cita o afirmar algo falso con aplomo. El ejemplo de abajo lo muestra en veinte líneas.' },
          { h3: 'Verificar es un método', p: 'Pedir la fuente, contrastar con un documento oficial, reformular la pregunta y comparar respuestas. Lo practicamos con materiales reales del docente, sin datos personales de estudiantes.' }
        ] },
        { kind: 'p', mt: true, html: 'La cuarta idea es la que más nos importa: enseñar a pensar, no a copiar. Un docente que entiende por qué una herramienta falla puede diseñar actividades donde el estudiante tenga que razonar, comparar y justificar, en lugar de pegar una respuesta. Ese criterio no depende de qué herramienta esté de moda el próximo año.' },
        { kind: 'p', html: 'No le daremos recetas de cien instrucciones para generar sesiones de aprendizaje. Hay muchas gratuitas en internet y caducan rápido. Le daremos la comprensión que le permite escribir las suyas y saber cuándo el resultado no sirve. Si después quiere profundizar en el aprendizaje automático, el siguiente paso es nuestro <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-en-ingles-peru">curso de inteligencia artificial en inglés</a>, pensado para adultos.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de muestra',
      h2: '¿Cómo escribe un chatbot? Un modelo de lenguaje en miniatura, en Python',
      lede: 'Esta es una clase nuestra del primer mes. Con cuatro oraciones escritas por nosotros, el programa cuenta qué palabra suele seguir a cada palabra y luego escribe solo, eligiendo siempre la más frecuente. Los modelos reales son enormemente más grandes, pero la idea de fondo es parecida.',
      body: [
        { kind: 'code', label: 'Un modelo que escribe eligiendo la palabra siguiente', lang: 'Python', code: PY, note: 'El diccionario <code>siguientes</code> guarda, para cada palabra, cuántas veces apareció cada palabra a continuación. <code>most_common(1)</code> elige la más frecuente. Las tildes se omiten en el texto para simplificar el ejercicio.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Salida exacta de Python 3, tal como apareció en nuestra pantalla. El modelo queda atrapado en un bucle y no reconoce una palabra que nunca vio.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Contar.</strong> Después de "la" aparecieron cuatro palabras distintas, y "discusion" dos veces: una en "abre la discusion" y otra al comienzo de la tercera oración. Eso es todo lo que el modelo sabe: frecuencias.',
          '<strong>Elegir lo más probable.</strong> Al escribir desde "la", el modelo elige "discusion" porque es la más frecuente. Después de "discusion" hay un empate entre el punto y "termina", y Python se queda con el primero que vio, el punto.',
          '<strong>El bucle.</strong> Tras el punto siempre viene "la", y tras "la" otra vez "discusion". El resultado, <code>la discusion . la discusion . la discusion</code>, es gramaticalmente correcto y no dice nada. Los chatbots reales usan azar y contexto largo para evitar esto, pero el riesgo de fondo, sonar bien sin decir algo cierto, sigue ahí.',
          '<strong>Lo que no vio.</strong> La última línea imprime <code>False</code>: la palabra "profesor" no está en el texto, así que el modelo jamás podrá escribirla. Un modelo de lenguaje solo combina lo que aprendió de sus datos.',
          '<strong>El reto para el docente.</strong> Agregue una quinta oración que rompa el bucle y vuelva a ejecutar. Luego explique, en inglés y en dos frases, por qué cambió la salida. Es exactamente la explicación que podría dar a un colega.'
        ] },
        { kind: 'p', mt: true, html: 'Con este ejercicio, la frase "la IA alucina" deja de ser misteriosa. El modelo no busca la verdad, busca la continuación más probable según sus datos. Un docente que lo entiende revisa con otros ojos cada respuesta que una herramienta le propone para su clase.' }
      ]
    },
    {
      id: 'aula',
      eyebrow: 'Aula y edades',
      h2: '¿Puedo usar lo que aprenda con mis estudiantes?',
      lede: 'Lo que aprende es suyo y lo aplica con su criterio profesional y las normas de su colegio. Sobre herramientas concretas con menores de edad, la regla que seguimos es simple: la edad mínima la fija cada empresa en sus términos.',
      body: [
        { kind: 'p', html: 'Este curso no le enseña a abrir cuentas de IA para sus estudiantes ni a usarlas con ellos. Sí le explicamos qué dicen los términos de las herramientas más conocidas. ChatGPT pide al menos 13 años y, a quien tiene menos de 18, el permiso de sus padres o tutores. Claude exige 18 años en sus términos para consumidores. Las citas textuales de más de cien herramientas están en nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>, que actualizamos con la fuente de cada empresa.' },
        { kind: 'p', html: 'La comprensión, en cambio, no tiene edad mínima. Lo que vio en el ejemplo de arriba se puede explicar a un estudiante de secundaria con papel y lápiz, contando palabras de una oración en la pizarra, sin abrir ninguna cuenta. Muchas de las ideas del curso se llevan al aula así, como actividades desconectadas o con programas que el propio docente ejecuta.' },
        { kind: 'p', html: 'Si después quiere recomendar algo a las familias, tenemos páginas pensadas para cada edad: <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">inteligencia artificial para niños de primaria</a>, que no usa chatbots, y <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">IA para adolescentes de secundaria</a>, que se limita a herramientas permitidas para su edad. No le pedimos que nos recomiende; solo le contamos que existen.' }
      ]
    },
    {
      id: 'rumbo',
      eyebrow: 'Hacia dónde va',
      h2: '¿Hacia dónde va la inteligencia artificial en la escuela peruana?',
      lede: 'Hacia más uso, también fuera de Lima. Dos anuncios del MINEDU de 2025 muestran la dirección; los citamos como contexto y no tenemos relación con ninguno.',
      body: [
        { kind: 'two',
          leftH3: 'Secundaria rural, desde 2026',
          left: [
            'El 4 de diciembre de 2025, el MINEDU anunció que usaría la IA para la planificación de los aprendizajes en 205 instituciones educativas rurales con los modelos de Secundaria en Alternancia, Secundaria con Residencia Estudiantil y Secundaria Tutorial, que atienden a cerca de 27 000 estudiantes.',
            'La misma nota cuenta 627 508 estudiantes de secundaria matriculados en el ámbito rural. Para los docentes de esas zonas, entender cómo funciona una herramienta de planificación pesa tanto como saber usarla.'
          ],
          rightH3: 'Hackathon 2025',
          right: [
            'En agosto de 2025, el MINEDU premió la cuarta edición de su Hackathon, con una categoría para docentes de Educación Básica y proyectos de IA y robótica.',
            'Según la nota del 4 de agosto de 2025, la participación de estudiantes mujeres creció 28% entre 2023 y 2025. Docentes que entienden la IA por dentro son también quienes acompañan esos proyectos.'
          ] },
        { kind: 'p', mt: true, html: 'Nada de esto lo decide un curso privado, y no pretendemos lo contrario. Lo que sí puede hacer un curso como el nuestro es que, cuando la herramienta llegue a su colegio, usted ya sepa qué preguntas hacerle.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Por qué un curso de IA para docentes en inglés?',
      lede: 'Porque la documentación de la IA, los cursos abiertos de las universidades y casi toda la investigación se publican primero en inglés, y porque practicarlo en voz alta es justo lo que más le falta al país.',
      body: [
        { kind: 'p', html: 'Todas nuestras clases son en vivo, por internet y únicamente en inglés. En el EF EPI 2025, quienes declaran ser docentes en el Perú obtienen 532 puntos, por encima del promedio nacional de 519, y Lima llega a 555, el nivel alto. En cambio, la habilidad más débil del país es la expresión oral, con 480. Un docente que ya lee en inglés suele estar listo para seguir una clase; lo que gana aquí es soltura al hablar de un tema técnico.' },
        { kind: 'p', html: 'Los mentores enseñan desde la India y están habituados a profesionales cuyo primer idioma es otro. Si en la clase de prueba usted siente que necesita ir más despacio, el formato individual le permite fijar el ritmo y repetir lo que haga falta. Si enseña inglés, además, el curso le deja vocabulario técnico real para sus propias clases.' }
      ]
    },
    {
      id: 'cuando',
      eyebrow: 'Cuándo estudiar',
      h2: '¿Cuándo puede estudiar un docente sin descuidar el año escolar?',
      lede: 'En el horario que el colegio le deje libre. El año escolar 2026 tiene 36 semanas lectivas, de acuerdo con la norma técnica aprobada por la RM 501-2025-MINEDU, y las clases con estudiantes corren del 16 de marzo al 18 de diciembre de 2026.',
      body: [
        { kind: 'table', numCols: [], caption: 'Horas posibles para un docente en el Perú y su equivalente en la India (ejemplos de conversión, no un horario)', head: ['Hora de Perú', 'Hora de la India', 'Momento del docente'], rows: [
          ['5:30 a. m.', '4:00 p. m.', 'Antes del turno mañana'],
          ['3:00 p. m.', '1:30 a. m. del día siguiente', 'Después del turno mañana; solo en individual'],
          ['7:00 p. m.', '5:30 a. m. del día siguiente', 'Después del turno tarde'],
          ['8:30 p. m.', '7:00 a. m. del día siguiente', 'Con la casa ya en calma']
        ] },
        { kind: 'source', html: 'Cálculo nuestro con tzdata: Perú UTC-5 y la India UTC+5:30 todo el año, sin horario de verano. Fechas del año escolar: RM 501-2025-MINEDU, cuadro de calendarización 2026.' },
        { kind: 'p', mt: true, html: 'Muchos profesores prefieren empezar en enero o febrero, cuando no hay clases con estudiantes, y luego mantener una sola clase por semana durante el año. Otros toman las semanas de descanso entre bloques. Con clases individuales puede pausar en semanas de evaluación y retomar después, sin perder su lugar.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo avanza un docente en el curso de IA?',
    lede: 'Cinco etapas que usamos para describir el progreso de un profesor. Son una escala nuestra, pensada para conversar con el mentor, no un certificado ni un puntaje.',
    table: { caption: 'De usuario a explicador: cinco etapas de un docente que aprende IA (escala nuestra)', head: ['Etapa', 'Tiempo habitual', 'Qué puede hacer el docente'], rows: [
      ['1. Programa', 'Primer mes', 'Escribe y ejecuta programas cortos en Python que leen y cuentan texto'],
      ['2. Cuenta', 'Segundo mes', 'Construye un modelo de palabra siguiente como el del ejemplo y explica su bucle'],
      ['3. Entrena', 'Tercer mes', 'Ajusta un modelo simple con datos inventados y mide cuánto se equivoca'],
      ['4. Verifica', 'Cuarto mes', 'Diseña un procedimiento para contrastar respuestas de una herramienta generativa'],
      ['5. Explica', 'Al cierre', 'Presenta en inglés, ante el mentor, cómo funciona una IA y dónde falla']
    ] },
    left: { h3: 'Si enseña en primaria o inicial', ps: [
      'Quédese con las etapas 1 y 2 si su meta es explicar la IA con actividades sin pantalla.',
      'Traiga al curso las preguntas que le hacen sus estudiantes; suelen ser las más difíciles.'
    ] },
    right: { h3: 'Si enseña en secundaria o superior', ps: [
      'Llegue a la etapa 4: es la que convierte el uso de herramientas en un método que puede enseñar.',
      'Use sus propios materiales de clase como datos de práctica, siempre sin datos personales.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para seguir aprendiendo',
    lede: 'Para docentes que quieren ir más lejos con los datos, con la IA o con la matemática que la sostiene. Todos en vivo y en inglés.',
    bands: [
      { num: 'I', h3: 'Datos para el docente', sub: 'Sin programar o con poco código', courses: [
        { code: 'IDI / DATOS / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Datos e IA sin programar', blurb: 'Hojas de cálculo y tableros para leer resultados de evaluaciones con más rigor.' },
        { code: 'IDI / DATOS / 02', slug: 'statistics-probability-maths-course', title: 'Estadística y probabilidad', blurb: 'La matemática detrás de cualquier promedio, encuesta o modelo.' },
        { code: 'IDI / DATOS / 03', slug: 'data-analysis-mastery-course-college', title: 'Análisis de datos completo', blurb: 'Excel, SQL y Python aplicados a tablas reales.' }
      ] },
      { num: 'II', h3: 'IA a fondo', sub: 'Desde los 18 años', courses: [
        { code: 'IDI / FONDO / 01', slug: 'ai-ml-masterclass-complete-college', title: 'IA y aprendizaje automático', blurb: 'Modelos que aprenden, redes neuronales y proyectos con datos abiertos.' },
        { code: 'IDI / FONDO / 02', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Inteligencia artificial clásica', blurb: 'Búsqueda, lógica y agentes: la IA que existía antes de los chatbots.' },
        { code: 'IDI / FONDO / 03', slug: 'python-ai-automation-masterclass-college', title: 'Automatizar tareas con Python', blurb: 'Ordenar listas, generar reportes y ahorrar horas de trabajo administrativo.' }
      ] },
      { num: 'III', h3: 'Para quien enseña matemática', sub: 'Profundidad matemática', courses: [
        { code: 'IDI / MATE / 01', slug: 'data-analytics-mathematics-masterclass', title: 'Matemática de la ciencia de datos', blurb: 'Álgebra lineal y probabilidad con el nivel que pide el aprendizaje automático.' },
        { code: 'IDI / MATE / 02', slug: 'college-mathematics-complete-masterclass', title: 'Matemática universitaria', blurb: 'Cálculo y álgebra lineal para refrescar la base de la carrera.' },
        { code: 'IDI / MATE / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Matemática de secundaria a fondo', blurb: 'Del álgebra al cálculo, con problemas que hacen pensar.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Formato',
    h2: '¿Cómo son las clases de IA para docentes?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del turno', l: 'Muy temprano, con la mente fresca.' },
      { time: 'Fin de la jornada', l: 'Después de corregir y planificar.' },
      { time: 'Semanas de evaluación', l: 'En individual, se pausa y se retoma.' }
    ],
    cells: [
      { h3: 'Código en pantalla compartida', p: 'Usted escribe y el mentor le guía, línea por línea.' },
      { h3: 'Primero la predicción', p: 'Antes de ejecutar, usted dice qué cree que pasará y por qué.' },
      { h3: 'Material propio', p: 'Practicamos con textos y tablas que usted elige, sin datos personales.' },
      { h3: 'Herramientas con límites', p: 'La IA generativa se usa para contrastar, nunca para firmar trabajo ajeno.' },
      { h3: 'Un mismo mentor', p: 'Conoce su asignatura, su nivel y lo que busca.' },
      { h3: 'Grupo o a solas', p: 'Grupos de quince a veinte docentes y adultos, o clases individuales.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Una muestra del trabajo que hacen estudiantes de distintas edades en nuestras clases, útil para imaginar actividades. Hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Comentarios de familias y estudiantes tal como los dejaron en Google.',

  fees: {
    h2: 'Precio del curso de IA para docentes',
    lede: 'La mensualidad figura abajo en dólares estadounidenses. Se paga con tarjeta y su banco aplica el tipo de cambio al procesar el cargo, por lo que el monto en su estado de cuenta puede variar ligeramente. No hay matrícula ni pagos por materiales.',
    free: ['Clase de prueba gratuita', 'Conversación sobre su asignatura y su meta', 'Sin tarjeta para reservar'],
    group: ['Grupo de quince a veinte personas', 'Dos clases en vivo por semana', 'Mentor fijo', 'Pago mensual, se puede pausar'],
    one: ['Solo usted y su mentor', 'Ejemplos de su propia asignatura', 'Horario que se adapta a su colegio']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'IA para docentes: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, se dictan en inglés, en vivo y por internet. Para un docente es una ventaja: la documentación y la investigación sobre IA están en inglés, y el curso trabaja la expresión oral, que en el EF EPI 2025 es la habilidad más baja del Perú, con 480 puntos. Los docentes peruanos obtienen 532 en ese índice, de modo que muchos ya tienen la base para seguir una clase. El mentor habla pausado.' },
      { q: '¿Este curso cuenta para el escalafón magisterial?', a: 'No. Según el MINEDU, la constancia que sirve para el escalafón de la Carrera Pública Magisterial la da su propio curso de IA en el SIFODS. El nuestro no tiene relación con el Ministerio ni otorga puntos.' },
      { q: '¿Ya tomé el curso del MINEDU, me sirve este?', a: 'Probablemente sí, porque cubre otra parte. El curso estatal trabaja conceptos y recomendaciones para el aula. El nuestro le enseña a programar modelos pequeños para entender por qué la IA acierta y por qué falla.' },
      { q: '¿Necesito saber programar?', a: 'No. Empezamos con Python desde cero, con programas cortos que leen y cuentan texto. Muchos docentes de letras terminan programando sin dificultad.' },
      { q: '¿Me enseñarán a usar la IA con mis estudiantes?', a: 'Le enseñamos cómo funciona la IA y cómo verificarla. El uso con estudiantes lo decide usted con su colegio, respetando la edad mínima que fija cada empresa: ChatGPT pide 13 años y permiso de los padres hasta los 18, y Claude exige 18.' },
      { q: '¿Recibo certificado?', a: 'Sí, un certificado de finalización de Modern Age Coders. No es oficial ni lo reconocen el MINEDU ni SUNEDU, y no sirve para el escalafón.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, a las 7:00 p. m. en Lima, en la India son las 5:30 a. m. del día siguiente.' },
      { q: '¿Puedo pausar en semanas de evaluación?', a: 'Sí. En el formato individual se reprograma sin problema, y en grupo puede pausar la mensualidad y volver al mes siguiente.' },
      { q: '¿Sirve para docentes de inicial y primaria?', a: 'Sí. Muchas ideas del curso se llevan al aula sin pantallas. El mentor adapta los ejemplos a su nivel educativo.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, una vez al mes, en dólares estadounidenses; el tipo de cambio lo aplica su banco. No hay matrícula.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras páginas que pueden servirle',
    lede: 'Guías nuestras sobre IA y sobre cómo enseñamos, varias en inglés.',
    items: [
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima de cada herramienta, con la cita de su empresa.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Por qué enseñamos a razonar antes que a usar herramientas.' },
      { href: '/ai-agents-explained', label: 'AI agents explained', p: 'La diferencia entre un chatbot y un agente que actúa.' },
      { href: '/curso-de-inteligencia-artificial-en-ingles-peru', label: 'Curso de inteligencia artificial en inglés', p: 'El paso siguiente si quiere entrar al aprendizaje automático.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Toda nuestra oferta para el país en una sola página.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así trabaja un mentor durante una clase en directo.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase de IA pensada para docentes',
    lede: 'En la clase de prueba conversamos sobre lo que enseña y lo que quiere entender, y usted ejecuta su primer programa corto. Al terminar le proponemos un curso y un ritmo. No necesita experiencia.',
    readFirst: 'Si prefiere leer algo antes, revise <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a> o <a class="ag-inline-link" href="/we-teach-you-how-to-think">We teach you how to think</a>, ambas en inglés.',
    note: 'Cada clase se dicta en vivo, por internet y en inglés, desde la India. Para coordinar puede escribirnos en castellano por WhatsApp.',
    formNote: 'Reserva gratuita, sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para docentes', links: [
        { href: '/courses/ai-tools-mastery-complete-college', label: 'Herramientas de IA' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python desde cero' },
        { href: '/courses/complete-generative-ai-masterclass-college', label: 'IA generativa' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'IA para niños' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' }
      ] }
    ],
    bottomRight: 'Un chatbot elige la palabra más probable, no la más cierta'
  },

  personalityCss: `
.ag-root.ag-idi .ag-hero h1 { letter-spacing: -0.008em; max-width: 20ch; }
.ag-root.ag-idi .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-idi .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.005em; }
.ag-root.ag-idi .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-idi .ag-steps li { line-height: 1.64; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU press notes of 9 May 2025 (teacher AI course and workshops), 4 August 2025 (Hackathon 2025) and 4 December 2025 (AI in 205 rural secondary schools); DS 115-2025-PCM art. 13.2 (El Peruano, 9 September 2025); CNEB transversal TIC competency; RM 501-2025-MINEDU (2026 calendar); EF EPI 2025 Peru page (Teacher 532); vendor terms in content/ai-tool-age-audit.json; tzdata. The stage scale, the four sentences and the Python example are our own.',
    localProject: 'A bigram next-word model in Python on four sentences written by us: after "la" the counts are clase 1, pregunta 1, discusion 2, respuesta 1; writing greedily from "la" loops ("la discusion . la discusion ..."), and "profesor" is not in the vocabulary (False). Lesson family: next-word prediction, greedy choice, repetition and the vocabulary limit, the smallest honest picture of how a language model writes.',
    requiredMentions: ['la discusion . la discusion . la discusion . la discusion . la', 'Un modelo que escribe eligiendo la palabra siguiente', 'La formación docente en inteligencia artificial del MINEDU, según su nota de prensa de mayo de 2025', 'Meta de profesores de innovación pedagógica', 'formación del personal docente en IA y tecnologías digitales para su aprovechamiento pedagógico', '627 508 estudiantes de secundaria matriculados en el ámbito rural', 'De usuario a explicador: cinco etapas de un docente que aprende IA', 'quienes declaran ser docentes en el Perú obtienen 532 puntos', 'Un chatbot elige la palabra más probable, no la más cierta'],
    sources: [
      { claim: 'More than 87,000 teachers enrolled in the SIFODS course on AI; free; constancia counts for the Carrera Pública Magisterial; five calls and a sixth to 1 June; two units; 37,314 in the first workshop group; 26 regions; targets 3,550 and 1,600 (9 May 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'AI for planning in 205 rural schools serving about 27,000 students; 627,508 rural secondary students (4 December 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1304191-minedu-implementara-uso-de-inteligencia-artificial-para-fortalecer-aprendizajes-de-27-000-estudiantes-del-ambito-rural' },
      { claim: 'Hackathon 2025, fourth edition, teachers category; female student participation up 28% from 2023 to 2025 (4 August 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'DS 115-2025-PCM art. 13.2 promotes teacher training in AI for public and private schools.', url: 'https://cdn.www.gob.pe/uploads/document/file/8619777/7133522-decreto-supremo-n-115-2025-pcm.PDF?v=1757422328' },
      { claim: 'EF EPI 2025 Peru: Teacher 532, national 519, speaking 480, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Claude 18+; ChatGPT 13+ with parental permission under 18.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'That our course counts for the Carrera Pública Magisterial escalafón, or any MINEDU, PerúEduca or SIFODS link: refused; the page says the opposite plainly.',
      'Instructions for using AI tools with minors in class: refused; the page points to vendor age rules and offers unplugged explanations only.',
      'Naming the minister quoted in the MINEDU notes: refused (no political names).',
      'Naming hackathon winners or their schools: refused; the page cites the edition, the teachers category and the participation figure only.',
      'Presenting the bigram toy as how a real chatbot works in full: refused; the page says real models are vastly larger and use randomness and long context.'
    ]
  }
};

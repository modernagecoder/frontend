// SHIP: market | Curso de IA en Perú, en inglés: qué debe enseñar, por qué en inglés, qué dice la ley | gradient descent by hand: a line learns from its error, and a step that is too big
'use strict';
// Curso de inteligencia artificial en inglés (ag- Spanish-language door, Peru cluster row PE097, P4 subject, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the adult, university student or parent in Peru who types "curso de inteligencia artificial peru", "curso de ia en lima
// peru" or asks "¿dónde estudiar inteligencia artificial en Perú?" (KEYWORDS.md sections 2 and 6).
// Spine: what a serious AI course must teach (data, a model, its error, and judgement), why learning it in English pays off in
// Peru (EF EPI 2025 by city, skill, age and job function), who is online (INEI ENAHO II Trimestre 2026), what the 2025 AI
// regulation defines and asks for in AI education (DS 115-2025-PCM arts. 6 and 7), a route by age, the certificate question,
// one original Python lesson (gradient descent fitting a line, then a learning step that is too big and blows up).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-inteligencia-artificial-en-ingles-peru/;
// MARKET = facts-market/MARKET.md):
//  EF EPI 2025, Peru page (MARKET 1.3, ef_peru.txt): rank "#52" of 123, score "519", band Moderate; "Cities Lima 555 Cusco 520
//    Trujillo 519 Arequipa 512 Huancayo 499"; "Reading score: " 540, "Listening score:" 499, "Writing score:" 514, "Speaking score:"
//    480; job function "IT : 522"; ages 18 to 20 score 469, 26 to 30 score 559 (page data). Bands: high from 550, moderate from 500.
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 97,3% de la población de 19 a 24
//    años utilizó Internet, seguido por el grupo de 25 a 40 años con un 95,2%"; "el 84,2% de la población de 6 y más años de edad
//    en el país hizo uso de Internet"; "el 36,4% de los hogares del país disponía de al menos una computadora".
//  DS 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, 9 September 2025; ds115.txt): art. 6 j "Sistema basado en IA: Sistema
//    basado en máquina que, para objetivos de forma explícita o implícita, infiere, a partir de la entrada que recibe, cómo generar
//    salidas tales como predicciones, contenido, recomendaciones o toma de decisiones"; art. 7 f "Sensibilización y educación en IA
//    ... con énfasis en ciencia, tecnología, ingeniería, matemáticas, estadística, programación, ciencia de datos, ética, derechos
//    humanos"; art. 1 of the decree: "seis (06) títulos, treinta y seis (36) artículos y seis (06) disposiciones complementarias
//    finales".
//  MINEDU press note 9 May 2025 (FACTS 50): "más de 87 000 docentes ... se han inscrito en el curso "Inteligencia artificial (IA) en
//    la práctica docente"".
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own example, run with python3 -I (recta.py and recta_reto.py in the src-pages folder; the data are invented by us):
//    round 1 error 57.0 w 2.5 b 0.7 / round 10 error 0.023 w 2.097 b 0.651 / round 100 error 0.0011 w 2.021 b 0.925 /
//    round 400 error 0.0 w 2.0 b 1.0 / 6 hours -> 13.0 exercises
//    reto (paso = 0.2): round 1 error 57.0 w 10.0 b 2.8 / round 10 error 1125599153452.7227 ... then OverflowError.
// Lesson family: gradient descent on a straight line: a model with two numbers, an error to minimise, small corrections, a
// learning rate, and divergence when the step is too large.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'horas = [1, 2, 3, 4, 5]',
  'ejercicios = [3, 5, 7, 9, 11]',
  '',
  'w, b = 0.0, 0.0',
  'paso = 0.05',
  'for vuelta in range(1, 401):',
  '    grad_w, grad_b, error = 0.0, 0.0, 0.0',
  '    for x, y in zip(horas, ejercicios):',
  '        diferencia = (w * x + b) - y',
  '        error += diferencia ** 2',
  '        grad_w += 2 * diferencia * x',
  '        grad_b += 2 * diferencia',
  '    n = len(horas)',
  '    w -= paso * grad_w / n',
  '    b -= paso * grad_b / n',
  '    if vuelta in (1, 10, 100, 400):',
  "        print('round', vuelta, 'error', round(error / n, 4), 'w', round(w, 3), 'b', round(b, 3))",
  '',
  "print('6 hours ->', round(w * 6 + b, 2), 'exercises')"
].join('\n');

const OUT = [
  'round 1 error 57.0 w 2.5 b 0.7',
  'round 10 error 0.023 w 2.097 b 0.651',
  'round 100 error 0.0011 w 2.021 b 0.925',
  'round 400 error 0.0 w 2.0 b 1.0',
  '6 hours -> 13.0 exercises'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Curso de inteligencia artificial en inglés' },
  slug: 'curso-de-inteligencia-artificial-en-ingles-peru',
  code: 'iai',
  accent: '#006154',
  accentRationale: 'Curso de inteligencia artificial en inglés: a dark pine green #006154, sober and technical for an adult course page, a step greener than the teal of the children\'s AI page; contrast 6.01 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de inteligencia artificial en inglés',
  title: 'Curso de inteligencia artificial en Perú, en vivo y en inglés',
  description: 'Curso de inteligencia artificial en Perú, en vivo y en inglés: modelos, datos y Python desde cero, para adultos, universitarios y escolares. En grupo o a solas.',
  ogDescription: 'Qué debe enseñar un curso de IA serio, por qué aprenderlo en inglés conviene en el Perú, qué dice el reglamento de IA de 2025 y un modelo que aprende de su error, en Python.',
  twitterDescription: 'Inteligencia artificial en vivo y en inglés para adultos, universitarios y escolares en Perú, con mentor, en grupo o individual, a cualquier hora.',
  pageName: 'Curso de inteligencia artificial en inglés para el Perú',
  webPageDescription: 'Guía para quien busca un curso de inteligencia artificial en Perú: qué contenidos separan un curso serio de uno superficial, cómo está el inglés del país según el EF EPI 2025, quién estudia en línea según el INEI, qué define y qué promueve el reglamento peruano de IA de 2025, una ruta por edades, qué certificado se recibe y un ejemplo en Python de cómo aprende un modelo.',
  courseDescription: 'Curso en vivo y en línea de inteligencia artificial para adultos, universitarios y escolares desde los 13 años en todo el Perú, dictado solo en inglés por mentores desde la India: Python, datos, modelos que aprenden de su error, aprendizaje automático y uso responsable de la IA generativa, en grupo o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Curso de IA en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#contenido', label: 'Contenido' },
    { href: '#ingles', label: 'Por qué en inglés' },
    { href: '#ruta', label: 'Ruta por edad' },
    { href: '#ejemplo', label: 'Ejemplo' },
    { href: '#ley', label: 'Ley de IA' }
  ],
  eyebrow: 'Perú &middot; Inteligencia artificial &middot; Desde los 13 años y adultos',
  h1: 'Curso de inteligencia artificial en Perú, en vivo y en inglés',
  lede: 'Hay dos maneras de estudiar inteligencia artificial. Una enseña a escribir instrucciones a un chatbot y se agota en un par de semanas. La otra enseña qué ocurre dentro de un modelo: cómo aprende de los datos, cómo mide su error y por qué falla. Este curso es de la segunda clase, y se dicta íntegramente en inglés, el idioma en que se escribe la IA.',
  secondaryCta: { href: '#ruta', label: 'Ver la ruta según su edad' },
  wa: 'Hola Modern Age Coders, quisiera información sobre el curso de inteligencia artificial en inglés desde Perú. ¿Puedo reservar una clase de prueba gratuita?',
  heroNote: 'Clases en directo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; 4.9 de valoración en Google',
  spec: [
    ['Para quién', 'Adultos, universitarios y escolares desde los 13 años'],
    ['Base', 'Python desde cero; matemática de secundaria'],
    ['Contenido', 'Datos, modelos, error, aprendizaje automático, IA generativa'],
    ['Modalidad', 'Grupo de quince a veinte personas, o individual'],
    ['Idioma', 'Inglés, con mentor en directo desde la India'],
    ['Inicio', 'Clase de prueba sin costo']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Modern Age Coders ofrece desde el Perú un curso de inteligencia artificial en vivo, en línea y en inglés para adultos, universitarios y escolares desde los 13 años. Se empieza por Python desde cero y se avanza hacia datos, modelos que aprenden corrigiendo su error, aprendizaje automático y el uso crítico de la IA generativa. Un mentor desde la India dicta cada clase en directo, para un grupo o para usted solo, el día y la hora que elija, y al terminar recibe nuestro certificado de finalización.',

  picks: {
    eyebrow: 'Cursos de IA',
    h2: 'Tres cursos de inteligencia artificial para empezar',
    lede: 'Uno para adolescentes de secundaria, uno de aprendizaje automático para mayores de 18 y uno de IA generativa construida desde adentro.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'IAI / 01', title: 'IA y machine learning para adolescentes', alt: 'Imagen del curso de inteligencia artificial y aprendizaje automático para adolescentes', note: 'De 13 a 18 años; basta con la matemática del colegio. Python, datos y modelos que el estudiante entrena y evalúa por su cuenta, sin herramientas que su edad no permita.' },
      { course: 'ai-ml-masterclass-complete-college', code: 'IAI / 02', title: 'Aprendizaje automático completo', alt: 'Imagen del curso completo de inteligencia artificial y machine learning para adultos', note: 'Desde los 18 años, sin experiencia previa. Repasa la matemática necesaria y llega a regresión, clasificación, redes neuronales y proyectos con datos abiertos.' },
      { course: 'complete-generative-ai-masterclass-college', code: 'IAI / 03', title: 'IA generativa por dentro', alt: 'Imagen del curso de inteligencia artificial generativa para adultos', note: 'Para mayores de 18. Cómo funcionan los modelos de lenguaje, qué es un token, cómo se conectan a datos propios y cuándo no conviene confiar en ellos.' }
    ]
  },

  sections: [
    {
      id: 'contenido',
      eyebrow: 'Qué se aprende',
      h2: '¿Qué debe enseñar un buen curso de inteligencia artificial?',
      lede: 'Cuatro cosas, en este orden: programar lo suficiente para hablarle a una máquina, entender los datos, construir un modelo que aprende y juzgar sus resultados. Un curso que salta directamente al chatbot omite las tres primeras.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Programar en Python', p: 'Casi toda la IA actual se escribe en Python. Desde la primera semana el estudiante escribe código real: listas, funciones, bucles y lectura de datos. No hace falta experiencia previa.' },
          { h3: 'Datos y modelos', p: 'Un modelo es una fórmula con números ajustables. Entrenar es ajustarlos para que el error baje. Con eso claro, la regresión, la clasificación y las redes neuronales dejan de ser palabras de moda.' },
          { h3: 'Criterio', p: 'Saber cuándo un modelo sirve y cuándo no, cómo detectar un sesgo en los datos y por qué una respuesta fluida de una IA generativa puede estar equivocada. Aquí está la diferencia entre usar la IA y depender de ella.' }
        ] },
        { kind: 'p', mt: true, html: 'Nuestra regla de oro es enseñar a pensar, no a copiar. Un estudiante que entiende por qué su modelo falla puede usar cualquier herramienta nueva sin miedo, porque sabe qué preguntas hacerle. Uno que solo copió instrucciones queda atado a la herramienta del momento. Por eso cada módulo termina con un ejercicio en que el estudiante explica, en inglés y con sus palabras, qué hizo el modelo y por qué.' },
        { kind: 'p', html: 'Si busca algo para un hijo de primaria, el enfoque cambia: con niños empezamos por juegos y programas pequeños, como contamos en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>. Para escolares que prefieren empezar en el verano está el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-inteligencia-artificial">vacaciones útiles 2027 de inteligencia artificial</a>.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Por qué en inglés',
      h2: '¿Conviene estudiar inteligencia artificial en inglés si vivo en Perú?',
      lede: 'Sí, si su inglés le permite seguir una conversación sencilla. La documentación de las bibliotecas de IA, los mensajes de error de Python y casi toda la investigación nueva están en inglés. Estudiar la materia en ese idioma ahorra la traducción mental de cada término.',
      body: [
        { kind: 'table', numCols: [1], caption: 'El inglés en el Perú según el EF EPI 2025, por ciudad, habilidad, edad y área de trabajo', head: ['Grupo', 'Puntaje EF EPI 2025', 'Nivel según EF'], rows: [
          ['Perú, promedio nacional (puesto 52 de 123)', '519', 'Moderado'],
          ['Lima', '555', 'Alto'],
          ['Cusco', '520', 'Moderado'],
          ['Trujillo', '519', 'Moderado'],
          ['Arequipa', '512', 'Moderado'],
          ['Habilidad: lectura', '540', 'Moderado'],
          ['Habilidad: expresión oral', '480', 'Bajo'],
          ['Personas de 26 a 30 años', '559', 'Alto'],
          ['Personas de 18 a 20 años', '469', 'Bajo'],
          ['Área laboral: tecnologías de la información', '522', 'Moderado']
        ] },
        { kind: 'source', html: 'Fuente: EF English Proficiency Index 2025, página de Perú en ef.com, consultada en noviembre de 2026. Bandas de EF: alto desde 550 puntos, moderado desde 500, bajo desde 450. La columna de nivel aplica esas bandas a cada puntaje.' },
        { kind: 'p', mt: true, html: 'La tabla dice dos cosas útiles. Lima está en el nivel alto, de modo que un profesional limeño suele tener el inglés que exige una clase técnica. Y la habilidad más débil del país es hablar, con 480 puntos, mientras que la lectura llega a 540. Una clase en vivo, donde hay que explicar en voz alta qué hace el código, trabaja justamente la parte que más falta.' },
        { kind: 'p', html: 'Nuestros mentores enseñan desde la India, hablan un inglés claro y pausado y están acostumbrados a estudiantes cuyo primer idioma no es el inglés. Si en la clase de prueba usted nota que le cuesta seguir, el mentor se lo dirá con franqueza y le propondrá empezar con clases individuales, donde el ritmo lo marca usted.' }
      ]
    },
    {
      id: 'en-linea',
      eyebrow: 'En línea',
      h2: '¿Se puede estudiar inteligencia artificial en línea desde cualquier ciudad del Perú?',
      lede: 'Sí, y cada vez más peruanos lo hacen. Lo indispensable es una computadora y una conexión estable; el lugar da igual, sea Lima, Piura o Huancayo.',
      body: [
        { kind: 'two',
          leftH3: 'Quién está en internet, según el INEI',
          left: [
            'En el segundo trimestre de 2026, el 84,2% de la población peruana de 6 años a más usó internet, según la Encuesta Nacional de Hogares del INEI. Los grupos que más lo usan son justamente los que más buscan cursos de IA: el 97,3% de quienes tienen entre 19 y 24 años y el 95,2% de quienes tienen entre 25 y 40.',
            'El mismo boletín trae una cifra que conviene tener presente: solo el 36,4% de los hogares del país contaba con al menos una computadora. Para programar no basta un celular.'
          ],
          rightH3: 'Qué equipo hace falta',
          right: [
            'Una laptop corriente o una computadora de escritorio alcanza para el curso de aprendizaje automático. Cuando un modelo pide más potencia, trabajamos en cuadernos en la nube que el mentor le ayuda a preparar.',
            'Audífonos con micrófono y un lugar tranquilo. Las clases son conversaciones: el mentor comparte su pantalla, usted comparte la suya y ambos revisan el código juntos.'
          ] },
        { kind: 'p', mt: true, html: 'Si vive fuera de Lima y prefiere leer sobre clases para su ciudad, tenemos una página para <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a>. Para todas las edades y temas que enseñamos en el país, la página de referencia es <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'ruta',
      eyebrow: 'Ruta',
      h2: '¿Qué curso de inteligencia artificial corresponde a cada edad?',
      lede: 'Depende menos de la edad que de dos preguntas: si la persona ya programa y si puede usar herramientas generativas según sus términos. Esta es la ruta que solemos recomendar.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta de cursos de IA por edad y punto de partida (recomendación nuestra)', head: ['Quién', 'Punto de partida', 'Curso que sugerimos', 'Herramientas generativas'], rows: [
          ['Adolescente de 1° a 3° de secundaria', 'Nunca programó', 'Python para adolescentes, luego IA y machine learning', 'Solo las de 13 años o más, con permiso de la familia'],
          ['Adolescente de 4° o 5° de secundaria', 'Ya sabe algo de Python', 'IA y machine learning para adolescentes', 'Igual que arriba; ninguna de 18 años'],
          ['Universitario o egresado', 'Sin experiencia', 'Aprendizaje automático completo', 'Las que elija, como adulto'],
          ['Profesional que no programa', 'Usa hojas de cálculo', 'Datos e IA para no programadores', 'Las que permita su empresa'],
          ['Profesional que programa', 'Python o Java básico', 'IA generativa por dentro', 'Las que permita su empresa']
        ] },
        { kind: 'source', html: 'Recomendación de Modern Age Coders. Las edades mínimas de cada herramienta están en nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>, con la cita textual de cada empresa (por ejemplo, Claude exige 18 años y ChatGPT pide permiso de los padres a los menores de 18).' },
        { kind: 'p', mt: true, html: 'A los adultos que llegan pensando que les falta matemática les decimos lo mismo: la que hace falta para empezar es la de secundaria, rectas, promedios y potencias. Lo demás se aprende en el curso cuando aparece, con ejemplos como el de más abajo, donde una recta aprende sola.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de muestra',
      h2: '¿Cómo aprende un modelo de inteligencia artificial? Un ejemplo en Python',
      lede: 'Es la primera clase del módulo de aprendizaje automático. Los datos son inventados por nosotros: cinco estudiantes, cuántas horas practicaron y cuántos ejercicios resolvieron. El modelo debe descubrir la relación sin que nadie se la diga.',
      body: [
        { kind: 'code', label: 'Una recta que aprende de su error', lang: 'Python', code: PY, note: 'El modelo es <code>w * x + b</code>: dos números que empiezan en cero. En cada vuelta mide cuánto se equivoca con los cinco datos y corrige un poco <code>w</code> y <code>b</code> en la dirección que reduce el error.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Copiado tal cual de Python 3 en nuestro equipo. El error empieza en 57 y llega a cero; la recta aprendida es 2 por las horas más 1.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El error inicial.</strong> Con <code>w</code> y <code>b</code> en cero, el modelo predice cero ejercicios para todos. El error cuadrático medio es 57: la media de 9, 25, 49, 81 y 121.',
          '<strong>La corrección.</strong> El gradiente indica hacia dónde mover cada número para que el error baje. Tras la primera vuelta, <code>w</code> ya vale 2.5 y <code>b</code> 0.7.',
          '<strong>Paciencia.</strong> En la vuelta 10 el error es 0.023, pero <code>b</code> aún está lejos de 1. Las últimas mejoras son lentas: en la vuelta 100 todavía falta un poco, y en la 400 el modelo encuentra <code>w 2.0 b 1.0</code>.',
          '<strong>Predecir.</strong> Con la recta aprendida, seis horas de práctica dan 13 ejercicios. Es una predicción dentro de un patrón inventado; con datos reales nunca sería tan limpia.',
          '<strong>El reto: un paso demasiado grande.</strong> Cambie <code>paso = 0.05</code> por <code>paso = 0.2</code>. En la vuelta 10 el error ya es <code>1125599153452.7227</code>, y antes de la vuelta 400 Python se detiene con <code>OverflowError</code>. El modelo se pasa de largo en cada corrección y se aleja cada vez más.'
        ] },
        { kind: 'p', mt: true, html: 'Estas veinte líneas contienen la idea central del aprendizaje automático moderno. Una red neuronal grande tiene millones de números en lugar de dos, pero aprende exactamente así: mide su error y corrige un poco. Quien entiende este ejemplo entiende por qué un modelo necesita buenos datos, por qué el entrenamiento tarda y por qué un ajuste mal elegido lo arruina todo.' }
      ]
    },
    {
      id: 'ley',
      eyebrow: 'Ley de IA',
      h2: '¿Qué dice la ley peruana sobre la inteligencia artificial?',
      lede: 'El Perú tiene la Ley 31814, que promueve el uso de la IA para el desarrollo económico y social, y desde setiembre de 2025 su reglamento. Dos artículos interesan a quien quiere estudiar IA.',
      body: [
        { kind: 'two',
          leftH3: 'Qué es un sistema de IA para el Estado',
          left: [
            'El reglamento, aprobado por el Decreto Supremo N.° 115-2025-PCM y publicado en El Peruano el 9 de setiembre de 2025, tiene seis títulos, 36 artículos y seis disposiciones complementarias finales. Su artículo 6 define un sistema basado en IA como un sistema que "infiere, a partir de la entrada que recibe, cómo generar salidas tales como predicciones, contenido, recomendaciones o toma de decisiones".',
            'Es casi la descripción del ejemplo de arriba: el modelo recibe horas, infiere una regla y genera una predicción. Entender esa definición desde el código, y no solo desde el texto legal, es lo que da un curso técnico.'
          ],
          rightH3: 'Qué educación en IA promueve',
          right: [
            'Entre sus principios rectores, el artículo 7, literal f, promueve el desarrollo de habilidades en IA "en todas las etapas del desarrollo de una persona", con énfasis en matemáticas, estadística, programación, ciencia de datos y ética, entre otras áreas.',
            'Nuestro curso trabaja varias de ellas, pero no forma parte de ningún programa del Estado ni tiene su aval. Citamos el reglamento como contexto, no como asesoría legal.'
          ] },
        { kind: 'p', mt: true, html: 'Los docentes peruanos también se están formando. El MINEDU informó el 9 de mayo de 2025 que más de 87,000 docentes de todo el país se habían inscrito en su curso virtual "Inteligencia artificial (IA) en la práctica docente". Si usted es docente y quiere ir más allá del uso de herramientas, la ruta de aprendizaje automático completo le da la base técnica para explicar la IA en clase con propiedad.' }
      ]
    },
    {
      id: 'certificado',
      eyebrow: 'Certificado',
      h2: '¿El curso de inteligencia artificial tiene certificado?',
      lede: 'Sí, un certificado de finalización emitido por Modern Age Coders. No es un título ni tiene carácter oficial en el Perú, y lo decimos antes de que usted se inscriba.',
      body: [
        { kind: 'p', html: '"Con certificado" es de las frases que más se repiten en las búsquedas de cursos en el Perú. Nuestro certificado acredita que usted completó el curso y sus proyectos. No lo emite una universidad, no lo reconoce SUNEDU ni el MINEDU, y no reemplaza un grado académico. Lo que sí tiene valor ante un empleador es el portafolio: los modelos y programas que usted construyó, publicados en GitHub y explicados en inglés.' },
        { kind: 'p', html: 'Tampoco prometemos empleo ni sueldos. Prometemos clases en vivo con un mentor que corrige su código, le hace preguntas difíciles y no le deja avanzar sin entender. Si al final del curso usted puede explicar en una entrevista, en inglés, cómo entrenó y evaluó un modelo, el curso cumplió su objetivo.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿En qué horario se dictan las clases de IA desde la India?',
      lede: 'En el que usted reserve. Entre Lima y la India hay diez horas y media de diferencia durante todo el año, porque ninguno de los dos países usa horario de verano.',
      body: [
        { kind: 'p', html: 'Tres conversiones que calculamos con las zonas horarias oficiales (Perú UTC-5, India UTC+5:30): si usted estudia a las 6:30 a. m. en Lima, antes del trabajo, en la India son las 5:00 p. m.; a la 1:00 p. m. limeña, en el almuerzo, allá son las 11:30 p. m.; y a las 8:30 p. m. en Lima, después de la oficina, en la India son las 7:00 a. m. del día siguiente. Son ejemplos de conversión, no horarios fijos.' },
        { kind: 'p', html: 'Muchos profesionales peruanos eligen la primera hora de la mañana o la noche. Los universitarios suelen preferir la tarde entre clases. Con el formato individual, la hora puede cambiar de semana en semana según su agenda.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo saber cuánto ha avanzado en inteligencia artificial?',
    lede: 'Cinco niveles que usamos para describir el progreso de un estudiante de IA. Son nuestros y sirven para conversar con el mentor, no para certificar.',
    table: { caption: 'Cinco niveles de dominio en inteligencia artificial (escala nuestra)', head: ['Nivel', 'Tiempo habitual', 'Qué puede hacer el estudiante'], rows: [
      ['1. Lee', 'Primer mes', 'Lee un programa de Python con datos y explica qué hace'],
      ['2. Ajusta', 'Segundo mes', 'Entrena una recta como la del ejemplo y explica el error'],
      ['3. Clasifica', 'Tercer y cuarto mes', 'Construye un clasificador y mide sus aciertos con datos de prueba'],
      ['4. Compara', 'Quinto y sexto mes', 'Compara dos modelos y defiende cuál elegir y por qué'],
      ['5. Juzga', 'Al final', 'Detecta sesgos, explica límites y presenta un proyecto en inglés']
    ] },
    left: { h3: 'Para adultos que vuelven a estudiar', ps: [
      'No compare su ritmo con el de nadie. El nivel 2 bien entendido vale más que el nivel 4 memorizado.',
      'Reserve una hora a la semana, aparte de las clases, para repetir el ejercicio de la semana sin mirar la solución.'
    ] },
    right: { h3: 'Para universitarios', ps: [
      'Publique cada proyecto en GitHub con una explicación en inglés. Es su carta de presentación.',
      'Cuando una herramienta generativa le dé código, explíquelo línea por línea antes de usarlo.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más alrededor de la IA',
    lede: 'Para reforzar la base, aplicar la IA en el trabajo o empezar más joven, todos en directo y en inglés.',
    bands: [
      { num: 'I', h3: 'La base', sub: 'Programación y matemática', courses: [
        { code: 'IAI / BASE / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python de cero a avanzado', blurb: 'Para mayores de 18: el lenguaje de la IA, desde la primera variable hasta proyectos completos.' },
        { code: 'IAI / BASE / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Matemática para análisis de datos', blurb: 'Estadística, probabilidad y álgebra lineal con la profundidad que pide el aprendizaje automático.' },
        { code: 'IAI / BASE / 03', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Datos e IA sin programar', blurb: 'Para profesionales que trabajan con hojas de cálculo y quieren entender la IA aplicada.' }
      ] },
      { num: 'II', h3: 'Aplicar la IA', sub: 'Desde los 18 años', courses: [
        { code: 'IAI / APLICAR / 01', slug: 'ai-tools-mastery-complete-college', title: 'Herramientas de IA con criterio', blurb: 'Instrucciones, verificación y flujos de trabajo con herramientas generativas, sin perder el juicio propio.' },
        { code: 'IAI / APLICAR / 02', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python e IA', blurb: 'Scripts que leen, ordenan y resumen información para ahorrar horas de trabajo repetitivo.' },
        { code: 'IAI / APLICAR / 03', slug: 'data-science-complete-masterclass-college', title: 'Ciencia de datos completa', blurb: 'Limpiar, explorar y modelar datos reales, de la tabla al informe.' }
      ] },
      { num: 'III', h3: 'Empezar antes', sub: 'De 8 a 18 años', courses: [
        { code: 'IAI / JOVEN / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la IA de niño', blurb: 'De 8 a 14 años: cómo aprende una máquina, sin cuentas de chatbots.' },
        { code: 'IAI / JOVEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'De 13 a 18 años: la puerta de entrada a todos los cursos de IA.' },
        { code: 'IAI / JOVEN / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Machine learning visual', blurb: 'De 13 a 18 años: modelos armados con bloques en Orange antes de escribir código.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo funcionan las clases de IA en directo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Muy temprano', l: 'Antes de la jornada laboral en Lima.' },
      { time: 'Noche', l: 'Después de la oficina o de la universidad.' },
      { time: 'Agenda móvil', l: 'En individual, la hora cambia cuando cambia su semana.' }
    ],
    cells: [
      { h3: 'Código en vivo', p: 'El mentor y usted escriben y prueban el mismo programa en la clase.' },
      { h3: 'Preguntas, no recetas', p: 'Antes de dar una respuesta, el mentor le pide predecir el resultado.' },
      { h3: 'Proyecto por módulo', p: 'Cada tramo termina en un modelo propio que queda en su portafolio.' },
      { h3: 'IA generativa con límites', p: 'Se usa para revisar, nunca para entregar trabajo que usted no entiende.' },
      { h3: 'Mismo mentor', p: 'Una persona que conoce su nivel y sus objetivos de principio a fin.' },
      { h3: 'Grupo o individual', p: 'Grupos de quince a veinte personas, o clases uno a uno.' }
    ]
  },

  projectsH2: 'Proyectos de estudiantes',
  projectsLede: 'Trabajos reales de estudiantes de distintas edades, varios con aprendizaje automático. Más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas publicadas en Google por estudiantes y familias, sin traducir.',

  fees: {
    h2: 'Precio del curso de inteligencia artificial',
    lede: 'Las tarifas se muestran en dólares estadounidenses y se pagan con tarjeta cada mes. La conversión la hace su banco al momento del cargo, de modo que el monto final en su estado de cuenta puede variar un poco. No cobramos matrícula.',
    free: ['Clase de prueba gratuita', 'Evaluación de su punto de partida', 'Sin tarjeta para reservar'],
    group: ['Grupo de quince a veinte estudiantes', 'Dos clases en directo por semana', 'Mentor fijo durante el curso', 'Pago mensual, sin contrato de permanencia'],
    one: ['Usted y su mentor', 'Temario adaptado a su trabajo o carrera', 'Horario que se mueve con su agenda']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Curso de inteligencia artificial en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, el curso entero se dicta en inglés, en directo y por internet. Para quien estudia IA eso es una ventaja: la documentación, los mensajes de error y los artículos técnicos están en inglés, y practicar la expresión oral, la habilidad más baja del Perú en el EF EPI 2025 con 480 puntos, abre puertas en el trabajo. Lima, con 555 puntos, está en el nivel alto. El mentor habla claro y adapta el ritmo.' },
      { q: '¿Dónde estudiar inteligencia artificial en Perú?', a: 'Hay universidades e institutos con cursos presenciales en castellano. Nosotros ofrecemos otra opción: clases en vivo por internet, en inglés y con un mentor, que se toman desde cualquier ciudad del país a la hora que usted elija.' },
      { q: '¿Necesito saber programar?', a: 'No. Los cursos para adultos y adolescentes empiezan con Python desde cero. Si ya programa, el mentor lo ubica en un módulo más avanzado después de la clase de prueba.' },
      { q: '¿Necesito saber mucha matemática?', a: 'La de secundaria basta para empezar: rectas, promedios y potencias. El curso completo de aprendizaje automático repasa y amplía la matemática a medida que se necesita.' },
      { q: '¿Desde qué edad se puede tomar?', a: 'Desde los 13 años, con el curso para adolescentes, que solo usa herramientas permitidas para su edad. Los cursos de aprendizaje automático completo e IA generativa son para mayores de 18.' },
      { q: '¿Tiene certificado?', a: 'Sí, nuestro certificado de finalización. No tiene carácter oficial, no es un grado académico y no lo emiten SUNEDU ni el MINEDU. Lo que más pesa ante un empleador es el portafolio de proyectos que usted construye en el curso.' },
      { q: '¿Es un curso gratis?', a: 'La primera clase es gratuita y sin compromiso. Después, el curso tiene una mensualidad que se muestra en esta página en dólares estadounidenses.' },
      { q: '¿En qué horario son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, las 8:30 p. m. en Lima son las 7:00 a. m. del día siguiente en la India.' },
      { q: '¿Me consiguen trabajo?', a: 'No prometemos empleo ni sueldos. Le enseñamos a construir, evaluar y explicar modelos de IA, y le ayudamos a armar un portafolio que pueda mostrar.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, cada mes, en dólares estadounidenses; su banco convierte el monto. No hay matrícula ni pagos ocultos.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Lecturas relacionadas',
    lede: 'Páginas nuestras sobre IA, varias en inglés.',
    items: [
      { href: '/ai-and-machine-learning-for-working-professionals', label: 'AI and machine learning for working professionals', p: 'Cómo encaja el aprendizaje automático en una carrera ya en marcha.' },
      { href: '/ai-agents-explained', label: 'AI agents explained', p: 'Qué es un agente de IA y en qué se diferencia de un chatbot.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'Edades mínimas de más de cien herramientas, citadas de cada empresa.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'Para hijos e hijas de primaria que empiezan a programar.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para familias de colegios bilingües de Lima.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es por dentro una clase en vivo.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase de inteligencia artificial sin costo',
    lede: 'En la clase de prueba el mentor le pregunta qué quiere lograr con la IA, revisa con usted un programa corto y le propone el curso y el ritmo que le convienen. Dura menos de una hora.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/ai-agents-explained">AI agents explained</a> o <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, dos páginas en inglés que le darán una idea del nivel de las clases.',
    note: 'Todas nuestras clases son en vivo, por internet y en inglés, con mentores en la India. Puede escribirnos por WhatsApp en castellano.',
    formNote: 'Sin pago, sin tarjeta, sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de IA', links: [
        { href: '/courses/ai-ml-masterclass-teens', label: 'IA para adolescentes' },
        { href: '/courses/ai-ml-masterclass-complete-college', label: 'Aprendizaje automático' },
        { href: '/courses/complete-generative-ai-masterclass-college', label: 'IA generativa' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/vacaciones-utiles-2027-inteligencia-artificial', label: 'Verano de IA 2027' },
        { href: '/coding-classes-in-arequipa-peru', label: 'Arequipa' },
        { href: '/ai-tools-age-guide', label: 'Edades de las herramientas' }
      ] }
    ],
    bottomRight: 'Un modelo aprende como cualquiera: midiendo su error y corrigiendo un poco'
  },

  personalityCss: `
.ag-root.ag-iai .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-iai .ag-capsule { border-left-width: 3px; border-radius: 4px; }
.ag-root.ag-iai .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-iai .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-iai .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'EF EPI 2025 Peru page (national, city, skill, age and job-function scores); INEI ENAHO TIC bulletin, II Trimestre 2026; DS 115-2025-PCM (El Peruano, 9 September 2025), arts. 6 j and 7 f and the decree\'s article 1; MINEDU press note of 9 May 2025; vendor terms in content/ai-tool-age-audit.json; tzdata. The route table, the mastery levels, the data and the Python example are our own.',
    localProject: 'Gradient descent written by hand in Python: five invented points (hours of practice, exercises solved) on the line 2x + 1; w and b start at zero and a step of 0.05 brings the mean squared error from 57.0 to 0.0 in 400 rounds (w 2.0, b 1.0, 6 hours -> 13.0 exercises). With a step of 0.2 the error is 1125599153452.7227 at round 10 and Python stops with OverflowError. Lesson family: a two-number model, an error to minimise, small corrections and a learning rate that can ruin training.',
    requiredMentions: ['round 10 error 0.023 w 2.097 b 0.651', '1125599153452.7227', 'Una recta que aprende de su error', 'El inglés en el Perú según el EF EPI 2025, por ciudad, habilidad, edad y área de trabajo', 'Área laboral: tecnologías de la información', 'el 97,3% de quienes tienen entre 19 y 24 años', 'seis títulos, 36 artículos y seis disposiciones complementarias finales', 'en todas las etapas del desarrollo de una persona', 'Ruta de cursos de IA por edad y punto de partida', 'Un modelo aprende como cualquiera: midiendo su error y corrigiendo un poco'],
    sources: [
      { claim: 'EF EPI 2025 Peru: 519 (rank 52 of 123); Lima 555, Cusco 520, Trujillo 519, Arequipa 512; reading 540, speaking 480; IT 522; ages 18 to 20 469, 26 to 30 559.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Internet use II Trimestre 2026: 84.2% of people 6+, 97.3% aged 19 to 24, 95.2% aged 25 to 40; 36.4% of homes with a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'DS 115-2025-PCM (9 September 2025): six titles, 36 articles, six final provisions; art. 6 j defines an AI-based system; art. 7 f promotes AI education with emphasis on maths, statistics, programming, data science and ethics.', url: 'https://cdn.www.gob.pe/uploads/document/file/8619777/7133522-decreto-supremo-n-115-2025-pcm.PDF?v=1757422328' },
      { claim: 'More than 87,000 teachers enrolled in the MINEDU AI course (9 May 2025).', url: 'https://www.gob.pe/institucion/minedu/noticias/1164507-minedu-capacita-a-mas-de-87-000-docentes-en-inteligencia-artificial-en-el-ambito-nacional' },
      { claim: 'Claude 18+; ChatGPT parental permission under 18.', url: 'https://www.anthropic.com/legal/consumer-terms' }
    ],
    rejectedClaims: [
      'An official or SUNEDU-recognised certificate, or a job or salary promise: refused; the page says our certificate of completion is not official and promises no job.',
      'Naming or ranking other Peruvian AI courses or their prices: refused; the page only says universities and institutes teach in Spanish in person, without names or figures.',
      'Legal advice on Ley 31814 or DS 115-2025-PCM, or any state endorsement: refused; quoted as context only.',
      'Real student data in the example: none; the five points are invented and labelled ours.',
      'Sending under-18s to 18+ tools: refused; the route table limits teens to 13+ tools with family permission.'
    ]
  }
};

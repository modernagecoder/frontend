// SHIP: market (es subject door) | clases particulares de programación online: cómo es una clase uno a uno y cómo elegir tutor | a mutable default argument: one list shared by every call, fixed with None
'use strict';
// Clases particulares de programación online (ag- Spanish-language door, Peru cluster row PE159, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only.
// Angle: the parent, university student or adult in Peru who types "clases particulares de programación" (KEYWORDS.md section 4,
// "clases particulares / profesor particular" are the native words; "a domicilio" is the main contrast). One to one: how a
// private class runs, private versus group, how to choose a tutor, what the home needs, how it fits the school year, hours.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-particulares-de-programacion-online-peru/):
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026 (inei_tic_iit2026.txt): "el 36,4% de los hogares del país
//    disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y
//    8,9% en el área rural"; "el 74,3% cuenta con una sola unidad; mientras que, el 25,7% dispone de dos o más computadoras en el
//    hogar"; "el 64,5% de los hogares del país contaba con servicio de Internet. Por área de residencia, en Lima Metropolitana, el
//    84,7% ... en el área rural solo el 27,1%"; "el de 12 a 18 años con un 92,5%"; "los niños de 6 a 11 años (68,2%)".
//  CNEB (FACTS 33; facts-school/src/cneb/): "Competencias transversales a las áreas: Se desenvuelve en"; competency name "Se
//    desenvuelve en los entornos virtuales generados por las TIC".
//  MINEDU press note, 16 March 2026 (FACTS 17; facts-school/src/n-inicio2026/): "53 631 colegios de Educación Básica Regular ...
//    para recibir a 6 225 000 estudiantes, en la apertura del año escolar 2026".
//  RM 501-2025-MINEDU (FACTS 21, 26; facts-school/src/rm501-2025-pdf/): "treinta y seis (36) semanas lectivas y ocho (08) semanas
//    de gestión"; "bimestres, trimestres u otra forma de organización, según lo establezca la DRE, UGEL o IE".
//  EF EPI 2025 Peru page (ef_peru.txt): "Speaking score: 480", "Listening score: 499", Lima 555.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30 (facts-geo/timezone.tsv).
// Our own example, run with python3 -I (tareas.py):
//    lunes: ['repasar bucles', 'leer un error'] / martes: ['repasar bucles', 'leer un error'] / misma lista: True /
//    lunes: ['repasar bucles'] / martes: ['leer un error'] / misma lista: False
// Lesson family: a mutable default argument (the default list is created once and shared by every call), diagnosed with
// "is", fixed with a None sentinel; the kind of bug a one-to-one session finds by reading the learner's own code.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def agregar_tarea(tarea, lista=[]):',
  '    lista.append(tarea)',
  '    return lista',
  '',
  "lunes = agregar_tarea('repasar bucles')",
  "martes = agregar_tarea('leer un error')",
  "print('lunes:', lunes)",
  "print('martes:', martes)",
  "print('misma lista:', lunes is martes)",
  '',
  'def agregar_tarea_bien(tarea, lista=None):',
  '    if lista is None:',
  '        lista = []',
  '    lista.append(tarea)',
  '    return lista',
  '',
  "lunes = agregar_tarea_bien('repasar bucles')",
  "martes = agregar_tarea_bien('leer un error')",
  "print('lunes:', lunes)",
  "print('martes:', martes)",
  "print('misma lista:', lunes is martes)"
].join('\n');

const OUT = [
  "lunes: ['repasar bucles', 'leer un error']",
  "martes: ['repasar bucles', 'leer un error']",
  'misma lista: True',
  "lunes: ['repasar bucles']",
  "martes: ['leer un error']",
  'misma lista: False'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Clases particulares de programación' },
  slug: 'clases-particulares-de-programacion-online-peru',
  code: 'pap',
  accent: '#005C40',
  accentRationale: 'Clases particulares de programación: a deep bottle green #005C40, quiet and personal for a one-to-one page, between the blackboard green of the teachers page and the ledger green of the business page; contrast well above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases particulares de programación online',
  title: 'Clases particulares de programación online en Perú, en inglés',
  description: 'Clases particulares de programación online en Perú, en vivo y en inglés: un mentor solo para usted o su hijo, a la hora que elija, desde los 6 años hasta adultos.',
  ogDescription: 'Cómo es una clase particular de programación por dentro, cuándo conviene frente a un grupo, cómo elegir tutor, qué hace falta en casa y un error de Python que solo aparece al leer su propio código.',
  twitterDescription: 'Clases particulares de programación en vivo y en inglés para niños, adolescentes, universitarios y adultos en Perú, uno a uno y a cualquier hora.',
  pageName: 'Clases particulares de programación online para el Perú',
  webPageDescription: 'Guía para familias, universitarios y adultos en el Perú que buscan clases particulares de programación: cómo se desarrolla una clase uno a uno, cuándo conviene frente a una clase grupal, cómo elegir un profesor particular, qué equipo y conexión hacen falta según el INEI, cómo encaja con el año escolar y un ejemplo de depuración en Python.',
  courseDescription: 'Clases particulares de programación en vivo y en línea para niños desde los 6 años, adolescentes, universitarios y adultos en todo el Perú, dictadas solo en inglés por mentores desde la India: Scratch, Python, Java, desarrollo web e inteligencia artificial, con un plan individual, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Clases particulares de programación',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#por-dentro', label: 'Una clase por dentro' },
    { href: '#grupo', label: 'Particular o grupo' },
    { href: '#elegir', label: 'Elegir tutor' },
    { href: '#casa', label: 'Qué hace falta' },
    { href: '#ejemplo', label: 'Ejemplo' }
  ],
  eyebrow: 'Perú &middot; Programación uno a uno &middot; Desde los 6 años hasta adultos',
  h1: 'Clases particulares de programación online, en vivo y en inglés',
  lede: 'En una clase particular el mentor no enseña "programación" en general: enseña a una persona concreta, con sus dudas, su ritmo y su propio código en la pantalla. Esa es la diferencia que se paga. Aquí le explicamos cómo es una sesión uno a uno, cuándo conviene más que un grupo y cómo reconocer a un buen profesor particular.',
  secondaryCta: { href: '#por-dentro', label: 'Ver cómo es una clase' },
  wa: 'Hola Modern Age Coders, escribo desde Perú. Busco clases particulares de programación online. ¿Puedo reservar una clase de prueba gratuita?',
  heroNote: 'Clases en directo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; 4.9 según reseñas de Google',
  spec: [
    ['Para quién', 'Niños desde los 6 años, adolescentes, universitarios y adultos'],
    ['Formato', 'Uno a uno, con un mentor asignado'],
    ['Temas', 'Scratch, Python, Java, web, apps e IA'],
    ['Horario', 'El que usted reserve, cualquier día'],
    ['Idioma', 'Inglés, con mentor en vivo desde la India'],
    ['Inicio', 'Clase de prueba sin costo']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'Modern Age Coders dicta clases particulares de programación en vivo, en línea y en inglés en todo el Perú: un mentor desde la India trabaja solo con usted o con su hijo, desde los 6 años hasta la edad adulta. Cada plan es individual, sea Scratch para un niño de primaria, Python o Java para un escolar o un universitario, o desarrollo web e inteligencia artificial para un adulto. Usted elige el día y la hora y puede cambiarlos de una semana a otra. La primera clase es gratuita; si prefiere compañeros, también hay clases grupales.',

  picks: {
    eyebrow: 'Por dónde empezar',
    h2: 'Tres cursos que muchos toman en clases particulares',
    lede: 'Uno para niños de primaria, uno para adolescentes y uno para adultos. Los tres se dictan uno a uno con un plan hecho a la medida.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PAP / 01', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'Para niños de primaria que ya leen con soltura. En clase particular el mentor espera a que el niño escriba cada línea, sin dictársela.' },
      { course: 'python-complete-masterclass-teens', code: 'PAP / 02', title: 'Python completo para adolescentes', alt: 'Imagen del curso completo de Python para adolescentes', note: 'De 13 a 18 años. Muchos adolescentes llegan con un proyecto propio en mente; en uno a uno, el temario se ordena alrededor de ese proyecto.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'PAP / 03', title: 'Python de cero a avanzado para adultos', alt: 'Imagen del curso de Python desde cero hasta nivel avanzado para adultos', note: 'Desde los 18 años. Para universitarios con un curso de programación pendiente y adultos que trabajan y necesitan ritmo propio.' }
    ]
  },

  sections: [
    {
      id: 'por-dentro',
      eyebrow: 'Una clase por dentro',
      h2: '¿Cómo es una clase particular de programación online?',
      lede: 'Dura alrededor de una hora y casi todo ocurre en la pantalla del estudiante. El mentor mira lo que la persona escribe, pregunta antes de corregir y adapta el siguiente paso a lo que acaba de ver.',
      body: [
        { kind: 'ol', items: [
          '<strong>Repaso de lo pendiente.</strong> Se abre el ejercicio de la sesión anterior. Si quedó algo sin resolver, se empieza por ahí, no por el tema nuevo.',
          '<strong>Una predicción.</strong> El mentor muestra un programa corto y pregunta qué imprimirá. Responder en voz alta, en inglés, obliga a pensar antes de ejecutar.',
          '<strong>El estudiante escribe.</strong> Comparte su pantalla y programa él. El mentor no toma el teclado; guía con preguntas como "¿qué valor tiene esta variable ahora?".',
          '<strong>El error como material.</strong> Cuando algo falla, se lee el mensaje de error completo antes de buscar la solución. En una clase particular hay tiempo para eso.',
          '<strong>Un reto a la medida.</strong> Si el tema salió fácil, sube la dificultad en el momento. Si costó, se repite con otro ejemplo. En un grupo eso no siempre es posible.',
          '<strong>Tarea corta y concreta.</strong> Un ejercicio de diez a veinte minutos para la semana, que el mentor revisa al comenzar la clase siguiente.'
        ] },
        { kind: 'p', mt: true, html: 'Detrás de esa secuencia hay una idea que guía todas nuestras clases: enseñamos a pensar, no a copiar respuestas ni a pegar lo que produce una IA. Una clase particular es el formato ideal para eso, porque el mentor ve en tiempo real si el estudiante entiende o solo imita.' },
        { kind: 'p', html: 'Todas nuestras clases particulares son en vivo, por internet y en inglés. No dictamos en castellano. Para un niño o un adolescente en el Perú eso significa practicar programación e inglés a la vez, con un mentor que habla despacio, repite cuando hace falta y ajusta su vocabulario a la edad.' }
      ]
    },
    {
      id: 'grupo',
      eyebrow: 'Particular o grupo',
      h2: '¿Clases particulares o en grupo: qué conviene?',
      lede: 'Depende del estudiante, no del tema. Un grupo bien llevado funciona para muchos; una clase particular rinde más en ciertas situaciones concretas que conviene reconocer.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuándo conviene una clase particular y cuándo un grupo (criterio nuestro)', head: ['Situación', 'Particular', 'Grupo de quince a veinte'], rows: [
          ['Primera vez que programa y le da vergüenza preguntar', 'Recomendado', 'Posible, pero suele callar'],
          ['Avanza mucho más rápido o más lento que su edad', 'Recomendado', 'Se aburre o se queda atrás'],
          ['Tiene un curso universitario de programación que aprobar', 'Recomendado', 'Útil como complemento'],
          ['Horario muy cambiante por trabajo, turnos o viajes', 'Recomendado', 'Difícil de sostener'],
          ['Disfruta mostrar su trabajo y aprender de otros', 'Funciona', 'Recomendado'],
          ['Busca constancia más que atención individual', 'Funciona', 'Recomendado']
        ] },
        { kind: 'source', html: 'Criterio de Modern Age Coders a partir de nuestras clases desde 2020; no es un estudio. Las mensualidades de ambos formatos aparecen más abajo en esta página.' },
        { kind: 'p', mt: true, html: 'También se pueden combinar. Hay familias que empiezan con clases particulares para ganar confianza y, después de unos meses, pasan a un grupo. Otras hacen lo contrario: empiezan en grupo y toman algunas sesiones particulares antes de un proyecto exigente. Si su hijo está en primaria y todavía no decide, la página de <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a> le ayuda a elegir el lenguaje según la edad.' }
      ]
    },
    {
      id: 'elegir',
      eyebrow: 'Elegir tutor',
      h2: '¿Cómo elegir un profesor particular de programación?',
      lede: 'Pídale lo mismo que le pediría a un buen profesor particular de cualquier materia, y algo más: que le muestre cómo piensa frente a un error.',
      body: [
        { kind: 'ol', items: [
          '<strong>Que pregunte antes de enseñar.</strong> En la primera clase, un buen tutor quiere saber qué ha hecho el estudiante, qué le gusta y qué le cuesta. Si empieza con un temario fijo sin preguntar, no es una clase particular de verdad.',
          '<strong>Que deje escribir al estudiante.</strong> Si el tutor programa y el estudiante mira, la clase parece fluida pero el aprendizaje es mínimo.',
          '<strong>Que trate el error con calma.</strong> Pídale en la clase de prueba que resuelva un fallo en voz alta. Debe leer el mensaje, formular una hipótesis y comprobarla.',
          '<strong>Que tenga un plan y lo diga.</strong> Al final de la primera clase, usted debería saber qué se trabajará el mes siguiente y cómo se medirá el avance.',
          '<strong>Que sea honesto con la IA.</strong> Un buen tutor no prohíbe la inteligencia artificial ni la usa para hacer la tarea; enseña cuándo ayuda y cuándo engaña, y respeta las edades mínimas de cada herramienta.',
          '<strong>Que pueda cambiar de horario.</strong> Si la familia o el trabajo cambian cada semana, el tutor debe poder moverse con ustedes.'
        ] },
        { kind: 'p', mt: true, html: 'Sobre la última condición, nuestros mentores trabajan desde la India, donde son diez horas y media más que en Lima, así que pueden cubrir desde muy temprano hasta muy tarde en hora de Perú. Sobre la quinta, publicamos las edades mínimas de más de cien herramientas en nuestra <a class="ag-inline-link" href="/ai-tools-age-guide">AI tool age guide</a>, con la cita de cada empresa: por ejemplo, Claude pide 18 años y ChatGPT exige el permiso de los padres a los menores de 18.' },
        { kind: 'p', html: 'Desconfíe de quien prometa que su hijo "programará apps en un mes" o que un adulto conseguirá empleo al terminar. Nosotros no prometemos notas, ingresos ni puestos de trabajo. Prometemos un mentor que conoce al estudiante y no lo deja avanzar sin entender.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'Qué hace falta',
      h2: '¿Qué se necesita en casa para una clase particular online?',
      lede: 'Una computadora, una conexión estable y un lugar tranquilo. Parece obvio, pero en el Perú no todos los hogares tienen las tres cosas, y conviene revisarlas antes de reservar.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Computadora e internet en los hogares peruanos según el INEI, segundo trimestre de 2026', head: ['Indicador', 'Porcentaje', 'Lo que significa para una clase online'], rows: [
          ['Hogares con al menos una computadora, todo el país', '36,4%', 'Programar desde un celular no basta; conviene confirmarlo antes'],
          ['Hogares con computadora en Lima Metropolitana', '53,3%', 'En la capital, uno de cada dos hogares tiene computadora'],
          ['Hogares con computadora en el área rural', '8,9%', 'Fuera de las ciudades, la computadora es la primera barrera'],
          ['Hogares con computadora que tienen una sola unidad', '74,3%', 'La clase compite con el trabajo o los estudios de otros'],
          ['Hogares con servicio de internet, todo el país', '64,5%', 'Una conexión estable es la segunda condición'],
          ['Hogares con internet en Lima Metropolitana', '84,7%', 'En Lima, la conexión casi nunca es el problema'],
          ['Personas de 12 a 18 años que usaron internet', '92,5%', 'Los adolescentes ya están en línea; falta convertirlo en estudio']
        ] },
        { kind: 'source', html: 'Fuente: INEI, Estadísticas de las Tecnologías de Información y Comunicación en los Hogares, II Trimestre 2026, a partir de la Encuesta Nacional de Hogares. La tercera columna es nuestra lectura. La fila del 74,3% corresponde al reparto de computadoras por hogar que publica el boletín.' },
        { kind: 'p', mt: true, html: 'La cifra que más pesa en una clase particular es la de los hogares con una sola computadora. Si su hijo la comparte con hermanos o con el trabajo de los padres, una clase grupal con hora fija puede chocar con todo lo demás. En una clase particular la hora se elige alrededor de la computadora, no al revés.' },
        { kind: 'p', html: 'Además de la computadora: audífonos con micrófono, porque la clase es una conversación, y una conexión que soporte compartir pantalla. Los niños de 6 a 11 años son el grupo de edad que menos usa internet, con 68,2% según el mismo boletín del INEI, así que en las primeras clases de un niño pequeño conviene que un adulto esté cerca para ayudar con el audio y la pantalla.' }
      ]
    },
    {
      id: 'domicilio',
      eyebrow: 'A domicilio u online',
      h2: '¿Clases particulares a domicilio u online?',
      lede: 'Para programación, online suele rendir más. El mentor ve exactamente lo que el estudiante escribe, ambos pueden señalar la misma línea y no se pierde tiempo en traslados.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que gana online',
          left: [
            'Pantalla compartida: el código del estudiante se ve en grande y el mentor puede pedirle que señale la línea exacta donde cree que está el error.',
            'Sin traslados ni tráfico. En Lima eso puede significar recuperar una hora de la tarde, y en una ciudad de provincia, acceder a un mentor que no existe cerca.'
          ],
          rightH3: 'Lo que hay que cuidar',
          right: [
            'Las distracciones de la propia computadora. Recomendamos cerrar otras pestañas y dejar el celular en otra habitación durante la clase.',
            'La postura y el descanso de la vista. Una hora seguida está bien para adolescentes y adultos; con niños pequeños el mentor hace pausas cortas.'
          ] },
        { kind: 'p', mt: true, html: 'Si vive en Arequipa o en otra ciudad del sur, puede leer sobre clases para su zona en <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">coding classes in Arequipa</a>. Para una vista de todas las edades y temas que enseñamos en el país, la referencia es <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a>.' }
      ]
    },
    {
      id: 'ejemplo',
      tint: 'tint',
      eyebrow: 'Una clase de muestra',
      h2: '¿Qué se descubre en una clase particular que no se ve en un grupo? Un ejemplo en Python',
      lede: 'Un estudiante de secundaria trae una función que guarda tareas en una lista. Funciona la primera vez y falla la segunda, sin mensaje de error. Este es un caso nuestro, típico de una sesión uno a uno, donde el mentor lee el código del propio estudiante línea por línea.',
      body: [
        { kind: 'code', label: 'Una lista por defecto que todas las llamadas comparten', lang: 'Python', code: PY, note: 'La primera versión pone <code>lista=[]</code> como valor por defecto. La segunda usa <code>None</code> y crea una lista nueva en cada llamada. El operador <code>is</code> dice si dos nombres apuntan al mismo objeto.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Salida exacta de Python 3, ejecutado por nosotros. Con la primera versión, el lunes y el martes terminan con las mismas dos tareas.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El síntoma.</strong> El estudiante esperaba una tarea el lunes y otra el martes. Pero <code>lunes</code> muestra dos tareas, aunque solo se agregó una ese día.',
          '<strong>La pregunta del mentor.</strong> En lugar de dar la respuesta, pregunta: "¿cuántas listas crees que hay en memoria?". El estudiante dice dos. La línea <code>lunes is martes</code> imprime <code>True</code>: hay una sola.',
          '<strong>La causa.</strong> Python evalúa el valor por defecto <code>[]</code> una sola vez, cuando define la función, no cada vez que se la llama. Todas las llamadas que no pasan una lista reciben esa misma lista.',
          '<strong>La corrección.</strong> Se usa <code>None</code> como valor por defecto y se crea la lista dentro de la función. Ahora <code>misma lista</code> imprime <code>False</code> y cada día guarda solo su tarea.',
          '<strong>El reto.</strong> El mentor pide al estudiante escribir una función que cuente visitas con un diccionario por defecto y predecir, antes de ejecutar, si tendrá el mismo problema.'
        ] },
        { kind: 'p', mt: true, html: 'En un grupo de veinte personas este error puede pasar inadvertido: el programa no se rompe y la salida parece casi correcta. En una clase particular el mentor está mirando el código de esa persona y lo detecta en minutos. Y lo más valioso no es la corrección, sino el método: sospechar, medir con <code>is</code> y confirmar antes de cambiar nada.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Junto al colegio',
      h2: '¿Las clases particulares de programación sirven de reforzamiento escolar?',
      lede: 'Sirven de complemento, más que de reforzamiento, porque en la secundaria peruana la programación no es un área propia. Lo digital está en el currículo, pero repartido entre todas las áreas.',
      body: [
        { kind: 'p', html: 'El Currículo Nacional de la Educación Básica trata la competencia "Se desenvuelve en los entornos virtuales generados por las TIC" como transversal a las áreas, no como una asignatura con horas propias. Cada colegio decide cuánto programa en la práctica. Por eso muchas familias buscan clases particulares: no para recuperar una nota de programación, sino para aprender algo que el horario escolar no garantiza.' },
        { kind: 'p', html: 'El año escolar 2026 abrió el 16 de marzo de 2026 en 53 631 colegios de Educación Básica Regular, con 6 225 000 estudiantes, según el MINEDU. La norma técnica de ese año, aprobada por la RM 501-2025-MINEDU, fija 36 semanas lectivas y permite organizarlas en bimestres, trimestres u otra forma, según lo establezca la DRE, la UGEL o el colegio. Un plan particular se ajusta a ese ritmo: menos horas en semanas de evaluaciones, más en las de descanso.' },
        { kind: 'p', html: 'Nosotros no damos notas escolares ni reemplazamos al colegio, y no tenemos relación con el MINEDU. Si su hijo está en secundaria y le interesa la inteligencia artificial, la página de <a class="ag-inline-link" href="/curso-de-ia-para-adolescentes-peru">IA para adolescentes</a> muestra la ruta, con herramientas permitidas para su edad. Para el verano, cuando no hay colegio, está el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación online</a>.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Mi hijo puede seguir una clase particular de programación en inglés?',
      lede: 'Casi siempre, y la clase particular es el formato más amable para intentarlo, porque el mentor ajusta la velocidad y el vocabulario a una sola persona.',
      body: [
        { kind: 'p', html: 'Según el EF EPI 2025, Lima obtiene 555 puntos, el nivel alto, mientras que el país en conjunto saca 499 en comprensión auditiva y 480 en expresión oral. Escuchar y hablar son, justamente, lo que una clase en vivo entrena. En uno a uno, el estudiante no tiene vergüenza de pedir que le repitan una frase, y el mentor puede escribir en el chat la palabra que no se entendió.' },
        { kind: 'p', html: 'Con los niños más pequeños el mentor usa frases cortas y mucho apoyo visual. Con adolescentes y adultos, el inglés técnico aparece desde el primer día: los nombres de las funciones, los mensajes de error y la documentación de Python ya están en inglés. Si en la clase de prueba vemos que el inglés es una barrera real, se lo diremos con franqueza.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo se mide el avance en clases particulares de programación?',
    lede: 'Con lo que el estudiante puede hacer solo, no con las horas de clase. Esta es la escala que usamos con las familias; es nuestra y sirve para conversar, no para calificar.',
    table: { caption: 'Cinco señales de avance en clases particulares de programación (escala nuestra)', head: ['Señal', 'Cuándo suele aparecer', 'Qué se observa'], rows: [
      ['1. Lee', 'Primeras semanas', 'Explica con sus palabras qué hace un programa corto'],
      ['2. Predice', 'Primer o segundo mes', 'Anticipa la salida antes de ejecutar y acierta cada vez más'],
      ['3. Depura', 'Segundo o tercer mes', 'Ante un error, lee el mensaje y prueba una hipótesis antes de pedir ayuda'],
      ['4. Construye', 'Tercer a quinto mes', 'Termina un proyecto propio con varias funciones'],
      ['5. Enseña', 'Cuando está listo', 'Explica en inglés su proyecto a otra persona y responde preguntas']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'Pida a su hijo, una vez al mes, que le muestre lo que hizo. Si lo explica, avanza.',
      'Pregunte al mentor por la señal 3: es la que predice la independencia.'
    ] },
    right: { h3: 'Para universitarios y adultos', ps: [
      'Lleve a la clase los ejercicios de su curso o de su trabajo; el plan se arma sobre ellos.',
      'Antes de cada sesión, anote la duda concreta que quiere resolver.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más disponibles en clase particular',
    lede: 'Por edad, todos en vivo, en inglés y con un plan individual.',
    bands: [
      { num: 'I', h3: 'Primaria', sub: 'De 6 a 12 años', courses: [
        { code: 'PAP / NINOS / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Razonamiento para los más pequeños', blurb: 'De 6 a 9 años: lógica, secuencias y patrones antes de programar.' },
        { code: 'PAP / NINOS / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Programar en Roblox', blurb: 'Juegos propios en Roblox Studio escritos en Luau, código de verdad y no solo bloques.' },
        { code: 'PAP / NINOS / 03', slug: 'kids-ai-web-development-course', title: 'Páginas web para niños', blurb: 'HTML y CSS con proyectos que se pueden mostrar a la familia.' }
      ] },
      { num: 'II', h3: 'Secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'PAP / ADOL / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'Clases y objetos desde la base, con proyectos por etapas.' },
        { code: 'PAP / ADOL / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Desarrollo web completo', blurb: 'De la página a la base de datos, con una app propia publicada.' },
        { code: 'PAP / ADOL / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolución de problemas', blurb: 'Algoritmos para escolares que disfrutan los retos de lógica.' }
      ] },
      { num: 'III', h3: 'Universidad y trabajo', sub: 'Desde los 18 años', courses: [
        { code: 'PAP / ADULTOS / 01', slug: 'complete-java-programming-masterclass-college', title: 'Java completo', blurb: 'El lenguaje de muchos cursos universitarios, hasta Spring Boot.' },
        { code: 'PAP / ADULTOS / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Para cursos de algoritmia y entrevistas técnicas.' },
        { code: 'PAP / ADULTOS / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Full stack para adultos', blurb: 'React, Node.js y bases de datos para un proyecto profesional.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Agenda',
    h2: '¿Cómo se agendan las clases particulares?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Después del colegio', l: 'La tarde de los escolares, sin traslado.' },
      { time: 'Muy temprano', l: 'Para adultos que estudian antes del trabajo.' },
      { time: 'Semana a semana', l: 'La hora puede cambiar de una sesión a otra.' }
    ],
    cells: [
      { h3: 'Plan individual', p: 'El temario se arma después de la clase de prueba, para una sola persona.' },
      { h3: 'Pantalla del estudiante', p: 'El estudiante programa; el mentor observa y pregunta.' },
      { h3: 'Tarea breve', p: 'Diez a veinte minutos de práctica entre sesiones.' },
      { h3: 'IA con límites', p: 'Se usa para entender, nunca para entregar trabajo ajeno.' },
      { h3: 'Mentor asignado', p: 'Conoce los avances y las dificultades de su estudiante.' },
      { h3: 'Reprogramar', p: 'Las sesiones se mueven con aviso, sin perder la clase.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros estudiantes',
  projectsLede: 'Proyectos de estudiantes de varias edades, muchos hechos en clases particulares. La galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Experiencias que familias y estudiantes compartieron en Google, en sus propias palabras.',

  fees: {
    h2: 'Precio de las clases particulares de programación',
    lede: 'La tarifa de las clases individuales y la de los grupos se ven abajo, en dólares estadounidenses. El pago es mensual con tarjeta, y el monto en su moneda lo calcula su banco al registrar el cargo. No hay matrícula.',
    free: ['Clase de prueba gratuita', 'Diagnóstico del punto de partida', 'Sin tarjeta para reservar'],
    group: ['Grupo de quince a veinte estudiantes', 'Dos clases en vivo por semana', 'Mentor fijo', 'Pago mensual'],
    one: ['Clases uno a uno', 'Plan hecho para una sola persona', 'Día y hora a su elección, cada semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Clases particulares de programación: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las clases particulares se dictan en inglés, en vivo y en línea. Es una ventaja doble: el estudiante aprende a programar y practica escuchar y hablar inglés, las dos habilidades más bajas del Perú en el EF EPI 2025 (499 y 480 puntos). En uno a uno el mentor adapta la velocidad y repite sin problema.' },
      { q: '¿Desde qué edad hay clases particulares?', a: 'Desde los 6 años, con actividades de lógica y bloques. Hasta los 12 hablamos de niños; luego hay planes para adolescentes de secundaria, universitarios y adultos de cualquier edad.' },
      { q: '¿Cuánto dura cada clase?', a: 'Alrededor de una hora. Con niños pequeños el mentor hace pausas cortas dentro de la sesión.' },
      { q: '¿Cuántas clases por semana se recomiendan?', a: 'Dos suelen dar continuidad sin cansar. Si la agenda solo permite una, se compensa con una tarea un poco más larga.' },
      { q: '¿Puedo cambiar el horario?', a: 'Sí. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Como referencia, cuando en Lima son las 7:30 a. m., en la India son las 6:00 p. m.' },
      { q: '¿Es el mismo profesor siempre?', a: 'Sí, se le asigna un mentor que sigue al estudiante. Si por algún motivo la relación no funciona, puede pedir un cambio.' },
      { q: '¿Hacen clases a domicilio?', a: 'No, solo online. Para programación es una ventaja: el mentor ve la pantalla del estudiante y no se pierde tiempo en traslados.' },
      { q: '¿Qué necesito en casa?', a: 'Una computadora, no un celular, una conexión estable y audífonos con micrófono. Según el INEI, en el segundo trimestre de 2026 el 36,4% de los hogares del país tenía computadora; conviene confirmarlo antes de reservar.' },
      { q: '¿Ayudan con las tareas del colegio o de la universidad?', a: 'Ayudamos a entenderlas, no a resolverlas por el estudiante. El mentor explica el tema y propone ejercicios parecidos, pero el trabajo que se entrega lo hace el estudiante.' },
      { q: '¿Dan certificado?', a: 'Al terminar un curso, el estudiante recibe nuestro certificado de finalización. No es oficial ni lo reconoce el MINEDU.' },
      { q: '¿Cómo se paga?', a: 'Cada mes, con tarjeta, en dólares estadounidenses; su banco hace la conversión. No hay matrícula.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Más sobre nuestras clases',
    lede: 'Páginas nuestras sobre el formato uno a uno y el método, varias en inglés.',
    items: [
      { href: '/one-on-one-ai-classes', label: 'One-on-one AI classes', p: 'El formato individual aplicado a la inteligencia artificial.' },
      { href: '/how-to-think-like-a-programmer', label: 'How to think like a programmer', p: 'El método que hay detrás de cada clase particular.' },
      { href: '/private-math-tutor-vs-online-tutoring', label: 'Private tutor vs online tutoring', p: 'Profesor particular presencial u online, comparado con calma.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'Qué lenguaje conviene a cada edad de primaria.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes in Lima', p: 'Para estudiantes de colegios donde ya se enseña en inglés.' },
      { href: '/student-labs', label: 'Student labs', p: 'Proyectos reales de nuestros estudiantes.' }
    ]
  },

  start: {
    h2: 'Reserve una clase particular de prueba',
    lede: 'En la clase de prueba el mentor conoce al estudiante, le propone un ejercicio a su medida y observa cómo razona. Al final le sugiere un plan, una frecuencia y un curso. No hace falta experiencia previa.',
    readFirst: 'Si quiere conocer nuestro método antes, lea <a class="ag-inline-link" href="/how-to-think-like-a-programmer">How to think like a programmer</a> o <a class="ag-inline-link" href="/one-on-one-ai-classes">One-on-one AI classes</a>, ambas en inglés.',
    note: 'Cada clase particular es en vivo, por internet y en inglés, con un mentor que enseña desde la India. Para coordinar horarios le respondemos por WhatsApp en castellano.',
    formNote: 'Gratis y sin tarjeta.'
  },

  footer: {
    cols: [
      { h4: 'Uno a uno', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA para niños' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python para adolescentes' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python para adultos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/curso-de-ia-para-adolescentes-peru', label: 'IA para adolescentes' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' }
      ] }
    ],
    bottomRight: 'En una clase particular, el código que se corrige es el suyo'
  },

  personalityCss: `
.ag-root.ag-pap .ag-hero h1 { letter-spacing: -0.006em; max-width: 22ch; }
.ag-root.ag-pap .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-pap .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pap .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pap .ag-steps li { line-height: 1.66; }
`,

  dossier: {
    curriculumAuthority: 'INEI ENAHO TIC bulletin, II Trimestre 2026 (computers by area, computers per home, internet in homes, internet use by age); CNEB transversal TIC competency; MINEDU press note of 16 March 2026 (53,631 schools, 6,225,000 students); RM 501-2025-MINEDU (36 teaching weeks; bimestres or trimestres); EF EPI 2025 Peru page (listening 499, speaking 480, Lima 555); vendor terms in content/ai-tool-age-audit.json; tzdata. The private-versus-group table, the progress scale and the Python example are our own.',
    localProject: 'A mutable default argument in Python: agregar_tarea(tarea, lista=[]) returns the same list on Monday and Tuesday (lunes is martes -> True, both hold two tasks); the fix with lista=None gives one task each and False. Lesson family: default values evaluated once at definition time, shared state across calls, diagnosis with "is", and a None sentinel.',
    requiredMentions: ["lunes: ['repasar bucles', 'leer un error']", 'Una lista por defecto que todas las llamadas comparten', 'Cuándo conviene una clase particular y cuándo un grupo', 'Computadora e internet en los hogares peruanos según el INEI, segundo trimestre de 2026', 'Hogares con computadora que tienen una sola unidad', 'Personas de 12 a 18 años que usaron internet', 'bimestres, trimestres u otra forma', 'Cinco señales de avance en clases particulares de programación', 'En una clase particular, el código que se corrige es el suyo'],
    sources: [
      { claim: 'II Trimestre 2026: 36.4% of homes with a computer (Lima Metropolitana 53.3%, rest urban 41.3%, rural 8.9%); 74.3% with one computer, 25.7% two or more; 64.5% of homes with internet (Lima 84.7%, rural 27.1%); internet use 92.5% at ages 12 to 18, 68.2% at 6 to 11.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: '2026 school year opened with 53,631 EBR schools and 6,225,000 students.', url: 'https://www.gob.pe/institucion/minedu/noticias/1366423-ministro-de-educacion-inaugura-ano-escolar-2026-en-colegios-publicos' },
      { claim: 'RM 501-2025-MINEDU: 36 teaching weeks and 8 management weeks; bimestres, trimestres or other organisation.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'CNEB: the TIC competency is transversal to all areas.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'EF EPI 2025 Peru: listening 499, speaking 480, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Home-visit (a domicilio) tutoring: refused; we teach online only and the page says so.',
      'Grade, admission, job or income promises: refused; the page says we promise none.',
      'Doing homework for the learner: refused; the FAQ says we explain, the learner submits their own work.',
      'Any MINEDU link or school credit: refused; the page says we give no school grades and have no relation with MINEDU.',
      'Recommending 18+ tools to minors: refused; the page cites the vendor age rules and the age guide.'
    ]
  }
};

// SHIP: market (es subject door) | desarrollo de aplicaciones móviles en inglés para un país que vive en el celular | retry with exponential backoff and a cap (for/else) for apps on weak signal
'use strict';
// Curso de desarrollo de aplicaciones en inglés (ag- Spanish-language door, Peru cluster row PE103, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Searches (KEYWORDS.md): "curso de desarrollo de aplicaciones moviles", "curso de desarrollo de aplicaciones multiplataforma",
// "curso de desarrollo de aplicaciones con ia", "desarrollo de aplicaciones moviles curso", "crear aplicaciones para android".
// Angle: a university student, a recent graduate or a working adult in Peru (18+) who wants to build mobile apps
// professionally. Spine: the phone is in almost every home but the computer and the fixed connection are not (INEI 2026 by
// area), so apps must work on weak signal; native or cross-platform; one original lesson on retrying with backoff; the
// market signals we could verify (trade.gov fintechs and mobile commerce, Findex accounts and cards, TCS jobs in Lima);
// why in English (EF EPI by age; SUNEDU size of the university system); a six-month route of our own.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-desarrollo-de-aplicaciones-en-ingles/,
// research fetched 2026-11-08, regrepped 2026-11-09):
//  INEI, Boletín TIC II Trimestre 2026 (inei_tic_iit2026.txt): households with mobile "alcanzando una cobertura del 95,9%";
//    "en Lima Metropolitana con 98,1%, seguido de resto urbano con 97,1% y del área rural con 89,2%"; internet households
//    "el 64,5% ... en Lima Metropolitana, el 84,7% ... en el resto urbano, el 66,2% ... en el área rural solo el 27,1%";
//    computers "el 36,4% ... el 53,3% en Lima Metropolitana, el 41,3% en el resto urbano y 8,9% en el área rural";
//    "la gran mayoría de los hogares del país (90,3%) contaba únicamente con teléfono celular"; users by phone "en Lima
//    Metropolitana, el 91,6% de los usuarios se conectó mediante celular; en el resto urbano, el 89,5%; y en el área rural,
//    el 89,0%"; "el 97,3% de la población de 19 a 24 años utilizó Internet".
//  US Commercial Service, Peru Country Commercial Guide, Digital Economy (2026-06-22, tradegov_digital.txt): "with 193
//    Peru-based fintechs operating as of 2024"; "The market is characterized by a significant mobile commerce component";
//    "Peru's software and IT services sector has potential for growth".
//  World Bank Global Findex, Peru 2024 (wb_PER_account.t.d.json, wb_PER_fin2.t.d.json, wb_PER_fin10.json): Account 59.3,
//    owns a debit card 36.7, owns a credit card 12.6 (% age 15+).
//  Embassy of India, Lima (emb_india_peru.txt): "Tata Consultancy Services have a sizeable operation in Lima and is increasing
//    its presence in Peru providing over 1300 jobs locally."
//  SUNEDU press note 15 Sept 2021 (sunedu_1_1m.txt): "94 universidades licenciadas (46 públicas y 48 privadas) que albergan a 1
//    millón 100 mil de estudiantes universitarios".
//  EF EPI 2025 Peru page (ef_peru.raw): ageGroup1Score 469 (18 to 20, low), ageGroup3Score 559 (26 to 30, high); Lima 555.
// Our own example (reintentos.py in the src-pages folder), run with python3 -I, exact output:
//    attempt 1: no signal, wait 1 s / attempt 2: no signal, wait 2 s / attempt 3: sent after waiting 3 s /
//    attempt 1 ... attempt 5: no signal, wait 16 s / gave up after 31 s: save the order offline
// Our calculation: 1 + 2 + 4 + 8 + 16 = 31 seconds of waiting before giving up.
// Lesson family: retry with exponential backoff and a cap; a for loop with break on success and an else clause that runs
//    only when no break happened (save offline).

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'def send_order(replies, max_tries=5):',
  '    wait = 1',
  '    waited = 0',
  '    for attempt, ok in enumerate(replies[:max_tries], start=1):',
  '        if ok:',
  "            print(f'attempt {attempt}: sent after waiting {waited} s')",
  '            break',
  "        print(f'attempt {attempt}: no signal, wait {wait} s')",
  '        waited += wait',
  '        wait *= 2',
  '    else:',
  "        print(f'gave up after {waited} s: save the order offline')",
  '',
  'send_order([False, False, True])',
  'send_order([False] * 8)'
].join('\n');

const OUT = [
  'attempt 1: no signal, wait 1 s',
  'attempt 2: no signal, wait 2 s',
  'attempt 3: sent after waiting 3 s',
  'attempt 1: no signal, wait 1 s',
  'attempt 2: no signal, wait 2 s',
  'attempt 3: no signal, wait 4 s',
  'attempt 4: no signal, wait 8 s',
  'attempt 5: no signal, wait 16 s',
  'gave up after 31 s: save the order offline'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Desarrollo de aplicaciones' },
  slug: 'curso-de-desarrollo-de-aplicaciones-en-ingles',
  code: 'dai',
  accent: '#00633F',
  accentRationale: 'Curso de desarrollo de aplicaciones en inglés: a mid forest green #00633F, between the bright teen apps door and the dark software door, for an adult app-building page; contrast 5.97 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de desarrollo de aplicaciones en inglés',
  title: 'Curso de desarrollo de aplicaciones móviles en inglés',
  description: 'Curso de desarrollo de aplicaciones móviles en vivo y en inglés para universitarios y adultos en Perú: Flutter, React Native, Kotlin y Swift, a cualquier hora.',
  ogDescription: 'Apps para un país que entra a internet por el celular: nativo o multiplataforma, qué dicen el INEI y el Banco Mundial, una lección sobre señal débil y una ruta de seis meses.',
  twitterDescription: 'Desarrollo de aplicaciones móviles en clases en vivo y en inglés desde Perú, para universitarios y profesionales.',
  pageName: 'Curso de desarrollo de aplicaciones en inglés',
  webPageDescription: 'Guía para universitarios y adultos en Perú que quieren aprender desarrollo de aplicaciones móviles en clases en vivo y en inglés: el acceso a celular, computadora e internet por área según el INEI 2026, nativo o multiplataforma, las señales del mercado que pudimos verificar, por qué estudiarlo en inglés, una lección de ejemplo sobre reintentos con señal débil y una ruta de seis meses propuesta por nosotros.',
  courseDescription: 'Curso en vivo y en línea de desarrollo de aplicaciones móviles para personas de 18 años a más en todo el Perú, dictado solo en inglés: Flutter y Dart, React Native, Kotlin para Android y Swift para iPhone, con datos, pagos de prueba, trabajo sin conexión y publicación, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Desarrollo de aplicaciones en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#pais-movil', label: 'Un país móvil' },
    { href: '#tecnologias', label: 'Tecnologías' },
    { href: '#senal', label: 'Lección' },
    { href: '#mercado', label: 'Mercado' },
    { href: '#ruta', label: 'Ruta' }
  ],
  eyebrow: 'Perú &middot; Desarrollo de aplicaciones &middot; Desde los 18 años',
  h1: 'Curso de desarrollo de aplicaciones móviles, en inglés',
  lede: 'En Perú, la aplicación es muchas veces la única forma en que un cliente conoce a una empresa: el banco, la tienda, el delivery, la municipalidad. Este curso forma a quien quiere construir esas aplicaciones con oficio, en clases en vivo con un mentor y en el idioma en que se escribe la documentación de todas las herramientas.',
  secondaryCta: { href: '#senal', label: 'Ver la lección de ejemplo' },
  wa: 'Hola Modern Age Coders, quiero llevar el curso de desarrollo de aplicaciones móviles en inglés desde Perú. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; Flutter, React Native, Kotlin y Swift, en inglés',
  spec: [
    ['Para quién', 'Universitarios, egresados y profesionales de 18 años a más'],
    ['Tecnologías', 'Flutter y Dart, React Native, Kotlin, Swift'],
    ['Formato', 'Clase grupal de quince a veinte personas, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Mentores', 'Desde la India, por videollamada'],
    ['Sesión inicial', 'Sin costo, sin tarjeta']
  ],
  capsuleQ: 'En pocas palabras',
  capsule: 'Modern Age Coders ofrece un curso de desarrollo de aplicaciones móviles para universitarios y adultos de cualquier región del Perú: sesiones en vivo por internet, dictadas en inglés por mentores que viven en la India. Se aprende a construir apps para Android y iPhone con Flutter o React Native, y nativas con Kotlin o Swift, incluidos datos, trabajo sin conexión y publicación en las tiendas. Se cursa en grupo o con un mentor a solas, en el horario que usted fije, y la primera sesión es gratuita.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres caminos para desarrollar aplicaciones',
    lede: 'Uno para cubrir Android y iPhone con un mismo código, uno centrado en Flutter y uno para quien apunta a Android nativo.',
    items: [
      { course: 'complete-app-development-masterclass-college', code: 'DAI / 01', title: 'Desarrollo de aplicaciones completo', alt: 'Imagen del curso de desarrollo de aplicaciones para universitarios', note: 'Desde los 18 años. Flutter, iOS y Android en una ruta: interfaz, datos, autenticación y publicación.' },
      { course: 'complete-flutter-app-development-masterclass-college', code: 'DAI / 02', title: 'Flutter de Dart a producción', alt: 'Imagen del curso de Flutter', note: 'Un solo código para dos tiendas. Widgets, estado, consumo de APIs y pruebas automáticas.' },
      { course: 'complete-kotlin-programming-masterclass-professional', code: 'DAI / 03', title: 'Kotlin para profesionales', alt: 'Imagen del curso de Kotlin', note: 'El lenguaje oficial de Android, con corrutinas y buenas prácticas para equipos.' }
    ]
  },

  sections: [
    {
      id: 'pais-movil',
      eyebrow: 'Un país que vive en el celular',
      h2: '¿Por qué desarrollar aplicaciones móviles en Perú?',
      lede: 'Porque el teléfono llega a casi todos los hogares y la computadora a poco más de un tercio. Quien desarrolla apps trabaja sobre el único dispositivo que comparten la capital, las ciudades del interior y el campo.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Hogares con telefonía móvil, internet y computadora en Perú por área de residencia, II trimestre de 2026 (porcentaje)', head: ['Área', 'Telefonía móvil', 'Internet', 'Computadora'], rows: [
          ['Total del país', '95,9', '64,5', '36,4'],
          ['Lima Metropolitana (con Callao)', '98,1', '84,7', '53,3'],
          ['Resto urbano', '97,1', '66,2', '41,3'],
          ['Área rural', '89,2', '27,1', '8,9']
        ] },
        { kind: 'source', html: 'Tomado del Cuadro N° 1.5 y del Gráfico N° 1.6 del boletín técnico de TIC del INEI publicado en setiembre de 2026 (ENAHO, segundo trimestre; cifras preliminares). Lima Metropolitana incluye la Provincia Constitucional del Callao; el resto urbano no incluye Lima Metropolitana.' },
        { kind: 'p', mt: true, html: 'Leída por filas, la tabla del INEI cuenta la historia del desarrollador móvil peruano. En el área rural, 89,2 % de los hogares tiene celular pero apenas 8,9 % tiene computadora y 27,1 % tiene internet en casa. Para esas familias, una app no compite con una página web abierta en una laptop: es la única puerta. Y la conexión que usa esa app es la del plan de datos, que se corta al entrar a un mercado techado o al subir a la combi.' },
        { kind: 'p', html: 'El mismo boletín añade dos datos útiles para diseñar. Primero, el 90,3 % de los hogares del país solo tiene teléfono celular, sin línea fija. Segundo, entre quienes usan internet, se conectan por el celular el 91,6 % en Lima Metropolitana, el 89,5 % en el resto urbano y el 89,0 % en el área rural. Es decir, las diferencias entre regiones están en el acceso, no en el dispositivo: casi todo el que entra, entra por el teléfono.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Pantalla chica primero', p: 'Botones al alcance del pulgar, textos que se leen sin hacer zoom y formularios cortos. Se diseña para un celular de gama media, no para el último modelo.' },
          { h3: 'Datos que cuestan', p: 'Imágenes livianas, descargas solo cuando hace falta y nada de videos que se reproducen solos. Muchos usuarios pagan cada megabyte.' },
          { h3: 'Señal que va y viene', p: 'Una app seria guarda lo que el usuario hizo y lo envía cuando vuelve la conexión. Es justo el tema de la lección de ejemplo.' }
        ] }
      ]
    },
    {
      id: 'tecnologias',
      eyebrow: 'Tecnologías',
      h2: '¿Nativo o multiplataforma: qué conviene aprender?',
      lede: 'Depende de dónde quiera trabajar. Las tecnologías multiplataforma permiten llegar a Android y a iPhone con un solo código; las nativas dan más control y siguen siendo lo que piden muchos equipos grandes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Cuatro tecnologías para desarrollar aplicaciones móviles (comparación nuestra)', head: ['Tecnología', 'Lenguaje', 'Llega a', 'Cuándo la recomendamos'], rows: [
          ['Flutter', 'Dart', 'Android, iPhone y web', 'Para emprender o trabajar en equipos pequeños que necesitan las dos tiendas'],
          ['React Native', 'JavaScript o TypeScript', 'Android y iPhone', 'Para quien ya conoce desarrollo web y React'],
          ['Kotlin', 'Kotlin', 'Android', 'Para apuntar a equipos que mantienen apps Android grandes'],
          ['Swift', 'Swift', 'iPhone y iPad', 'Para trabajar en el ecosistema de Apple']
        ] },
        { kind: 'p', mt: true, html: 'Nuestra sugerencia para quien empieza desde cero en Perú es Flutter o React Native, porque con un solo proyecto se cubren las dos tiendas y se aprende lo que tienen en común todas las apps: pantallas, estado, llamadas a un servidor y almacenamiento local. Quien ya trabaja en una empresa con app Android propia suele sacar más provecho de Kotlin. Swift tiene sentido cuando el objetivo es claramente el mundo de Apple. En la clase gratis el mentor le pregunta qué quiere construir y le recomienda el camino; no hay una respuesta única.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que comparten todas',
          left: [
            'Un ciclo de vida: la app se abre, pasa a segundo plano, se cierra. Un desarrollador que no lo entiende pierde datos del usuario sin saber por qué.',
            'Permisos: cámara, ubicación, notificaciones. En clase se discute cuáles pedir y cuándo, porque una app que pide todo al abrirse genera desconfianza.'
          ],
          rightH3: 'Lo que cambia entre ellas',
          right: [
            'El lenguaje y la forma de dibujar la interfaz. Flutter dibuja sus propios componentes; React Native usa los del sistema; Kotlin y Swift trabajan directamente con cada plataforma.',
            'Las herramientas de trabajo: Android Studio, Xcode o el editor que el equipo prefiera. Para Swift y la publicación en la App Store se necesita, además, una Mac.'
          ] }
      ]
    },
    {
      id: 'senal',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Qué hace una app cuando se cae la señal?',
      lede: 'Reintenta, pero con cabeza. Esta lección, escrita por nosotros, simula una app de pedidos que intenta enviar una orden con señal débil. La escribimos en Python para que la idea se lea sin ruido; en Flutter o Kotlin la estructura es la misma.',
      body: [
        { kind: 'code', label: 'Reintentos con espera creciente', lang: 'Python', code: PY, note: '<code>replies</code> simula la red: <code>False</code> es un intento sin señal y <code>True</code> uno que llega. Antes de ejecutar, el mentor pide adivinar cuántos segundos espera la app en el segundo caso.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Copiamos esta salida tal cual después de ejecutar el archivo con Python 3. La espera total del segundo caso es 1 + 2 + 4 + 8 + 16 = 31 segundos (cuenta nuestra).' },
        { kind: 'ol', mt: true, items: [
          '<strong>Por qué no reintentar al instante.</strong> Si la app repite el envío cien veces por segundo, gasta batería y datos del usuario y, cuando muchos teléfonos hacen lo mismo a la vez, satura el servidor justo cuando más falla.',
          '<strong>Por qué duplicar la espera.</strong> <code>wait *= 2</code> hace que la app espere 1, 2, 4, 8 y 16 segundos. Al principio insiste rápido, por si fue un corte breve; después se calma.',
          '<strong>Por qué poner un tope.</strong> <code>replies[:max_tries]</code> limita los intentos a cinco. Sin tope, una app en un lugar sin cobertura se quedaría intentando para siempre.',
          '<strong>El detalle de Python.</strong> El <code>else</code> de un bucle <code>for</code> solo se ejecuta si el bucle terminó sin <code>break</code>. Por eso el mensaje de rendirse aparece en el segundo caso y no en el primero.',
          '<strong>Qué hacer al rendirse.</strong> Guardar el pedido en el teléfono y avisar al usuario con honestidad: "Your order is saved and will be sent when you are back online." Nunca perder lo que la persona escribió.'
        ] },
        { kind: 'p', mt: true, html: 'En la versión real de la app el estudiante añade un detalle que la simulación omite: un pequeño componente aleatorio en la espera, para que miles de teléfonos que perdieron la señal al mismo tiempo no vuelvan a intentar todos en el mismo segundo. Lo importante, sin embargo, ya está aquí. Una app pensada para Perú no puede suponer que la red siempre responde; tiene que decidir qué hacer cuando no lo hace.' },
        { kind: 'p', html: 'Como reto, el mentor propone cambiar <code>max_tries</code> a 3 y predecir la última línea antes de ejecutar. La respuesta correcta es que la app se rinde tras esperar 1 + 2 + 4 = 7 segundos (cuenta nuestra). Quien la acierta sin correr el código ya entendió el bucle.' }
      ]
    },
    {
      id: 'mercado',
      eyebrow: 'Mercado',
      h2: '¿Hay trabajo en desarrollo de aplicaciones en Perú?',
      lede: 'Hay señales claras de demanda, aunque no prometemos empleo ni sueldos. Estas son las que pudimos verificar en fuentes primarias.',
      body: [
        { kind: 'two',
          leftH3: 'Señales que pudimos leer',
          left: [
            'La guía comercial de Perú del Servicio Comercial de Estados Unidos, actualizada el 22 de junio de 2026, cuenta "193 Peru-based fintechs operating as of 2024" y describe el comercio electrónico peruano con "a significant mobile commerce component". Las fintech y las tiendas en línea viven, sobre todo, en aplicaciones.',
            'Según el resumen bilateral que publica la embajada india, Tata Consultancy Services opera en Lima y genera más de 1,300 puestos locales. Es una de las señales de que las empresas de tecnología con clientes en el extranjero contratan en Perú.'
          ],
          rightH3: 'Señales sobre los usuarios',
          right: [
            'Según la base Global Findex del Banco Mundial, en 2024 el 59,3 % de los peruanos de 15 años a más tenía una cuenta financiera, el 36,7 % una tarjeta de débito y el 12,6 % una tarjeta de crédito. Cada uno de esos usuarios es alguien que espera resolver trámites desde una app.',
            'Y en el grupo de 19 a 24 años, el uso de internet llegó al 97,3 % en el segundo trimestre de 2026, según el INEI: la generación que hoy estudia es la que más espera apps bien hechas.'
          ] },
        { kind: 'p', mt: true, html: 'Lo que no encontramos fue una cifra oficial y reciente de cuántos desarrolladores móviles trabaja hoy en Perú ni de cuánto ganan, así que no la damos. Tampoco ofrecemos bolsa de trabajo ni garantizamos un puesto. Lo que sí hace el curso es dejarle un portafolio con apps propias, código ordenado en GitHub y la costumbre de explicar decisiones técnicas en inglés, que es lo que se evalúa en una entrevista técnica.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'En inglés',
      h2: '¿Por qué estudiar desarrollo de aplicaciones en inglés?',
      lede: 'Porque el día a día de un desarrollador móvil ocurre en inglés: la documentación de Android y de Apple, los foros, las reseñas de las tiendas y, en muchos equipos, las reuniones.',
      body: [
        { kind: 'p', html: 'El EF EPI 2025 muestra en Perú una brecha por edad que importa a quien está en la universidad. Las personas de 18 a 20 años que rindieron el examen de EF obtuvieron 469 puntos, en la banda baja; las de 26 a 30 años, 559 puntos, en la banda alta. Lima en conjunto llega a 555. Quien practica inglés técnico durante la carrera llega a sus primeras entrevistas con varios años de ventaja.' },
        { kind: 'p', html: 'El sistema universitario peruano es enorme: en una nota de septiembre de 2021, la SUNEDU habló de 1 millón 100 mil estudiantes repartidos en 94 universidades con licencia (46 de gestión pública y 48 privadas). Es la cifra nacional más reciente que encontramos en una página oficial, y por eso la citamos con su fecha. Nuestro curso no compite con la carrera ni la reemplaza: se lleva en paralelo, en el horario que deja libre el ciclo, y no otorga créditos ni grados.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Leer la documentación', p: 'En clase se resuelve cada duda abriendo la documentación oficial en inglés, no un tutorial traducido. Es la habilidad que más tiempo ahorra después.' },
          { h3: 'Escribir commits y reportes', p: 'Mensajes de commit, descripciones de cambios y reportes de errores en inglés claro, como los de cualquier equipo distribuido.' },
          { h3: 'Explicar decisiones', p: 'Por qué Flutter y no Kotlin, por qué guardar en el teléfono y no en el servidor. Defenderlo en voz alta frente al mentor es ensayo de entrevista.' }
        ] },
        { kind: 'p', mt: true, html: 'Para quien se formó en un colegio bilingüe limeño, la página <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a> (en inglés) describe cómo trabajamos con estudiantes que ya están cómodos en ese idioma. Si vive en el sur, la página de <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">clases de programación en Arequipa</a> (en inglés) cuenta cómo se adapta el curso a esa ciudad.' }
      ]
    },
    {
      id: 'con-ia',
      eyebrow: 'Con inteligencia artificial',
      h2: '¿Se puede hacer un curso de desarrollo de aplicaciones con IA?',
      lede: 'Sí, y en este curso la IA está presente desde el principio, pero como herramienta de un desarrollador que entiende su código, no como sustituto.',
      body: [
        { kind: 'p', html: 'Como el curso es para personas de 18 años a más, se pueden usar asistentes de código que exigen esa edad, como Claude, además de GitHub Copilot y ChatGPT. Lo que cambia respecto de un uso casual es el orden: primero se decide la arquitectura de la app y se escriben las pruebas, después se pide ayuda para escribir una pantalla o una función, y al final el estudiante revisa cada cambio antes de aceptarlo.' },
        { kind: 'ol', items: [
          '<strong>Para aprender una API nueva:</strong> pedir un ejemplo mínimo y comentado, y luego reescribirlo sin mirar.',
          '<strong>Para depurar:</strong> pegar el mensaje de error completo y el fragmento de código, y pedir hipótesis, no soluciones.',
          '<strong>Para pruebas:</strong> pedir casos de prueba para una función y añadir, de su cosecha, el caso raro que la IA no pensó, como la señal que se cae.',
          '<strong>Para revisar:</strong> pedir una revisión de un cambio propio, buscando errores de manejo de estado o de permisos.'
        ] },
        { kind: 'p', mt: true, html: 'Lo que la IA no hace en este curso es entregar una app terminada que el estudiante no sabría mantener. Una aplicación publicada recibe actualizaciones del sistema operativo cada año; quien no entiende su código no podrá adaptarla. Para ver el panorama completo de nuestros cursos en el país, la página de <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">clases de programación e IA en Perú</a> los ordena por edad.' }
      ]
    },
    {
      id: 'ruta',
      eyebrow: 'Ruta',
      h2: '¿Cuánto tiempo toma aprender a desarrollar aplicaciones?',
      lede: 'Para tener una primera app publicable partiendo de cero, calculamos alrededor de medio año, a razón de dos sesiones semanales y práctica por su cuenta. Es una estimación nuestra, no una promesa: cada persona avanza a su ritmo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta de seis meses en desarrollo de aplicaciones (plan nuestro, se ajusta a cada estudiante)', head: ['Mes', 'Tema', 'Entregable'], rows: [
          ['1', 'Fundamentos de Dart o JavaScript, estructuras de datos básicas', 'Ejercicios y una calculadora de propinas'],
          ['2', 'Interfaz: componentes, diseño adaptable, navegación', 'Una app de tres pantallas sin servidor'],
          ['3', 'Estado y almacenamiento local, trabajo sin conexión', 'Una lista que sobrevive a cerrar la app'],
          ['4', 'APIs, autenticación y manejo de errores de red', 'La app conectada a un servidor de prueba'],
          ['5', 'Pruebas automáticas, rendimiento y accesibilidad', 'Un conjunto de pruebas que corre solo'],
          ['6', 'Publicación, analítica básica y mantenimiento', 'La app lista para la tienda y su repositorio en GitHub']
        ] },
        { kind: 'p', mt: true, html: 'Quien ya programa en otro lenguaje suele comprimir los dos primeros meses en unas semanas. Quien trabaja a tiempo completo puede preferir clases individuales y estirar la ruta. En cualquier caso, el criterio para avanzar no es el calendario sino el entregable: si la app del mes tres pierde datos al cerrarse, no se pasa al mes cuatro.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se mide el avance en el curso?',
    lede: 'Con cinco hitos propios, cada uno verificable en un teléfono real.',
    table: { caption: 'Cinco hitos en desarrollo de aplicaciones (nuestros)', head: ['Hito', 'Qué se comprueba', 'Cómo lo comprueba el mentor'], rows: [
      ['1. Corre', 'la app abre en un Android y en un iPhone o emulador', 'la instala en un dispositivo distinto al del estudiante'],
      ['2. Navega', 'las pantallas se conectan y el botón atrás funciona', 'recorre la app sin instrucciones'],
      ['3. Recuerda', 'los datos sobreviven a cerrar y abrir la app', 'cierra la app a la fuerza y la vuelve a abrir'],
      ['4. Aguanta', 'la app responde bien sin señal y al volver la conexión', 'activa el modo avión a mitad de un envío'],
      ['5. Se publica', 'la app está lista para una tienda, con pruebas y documentación', 'lee el repositorio y corre las pruebas']
    ] },
    left: { h3: 'Para universitarios', ps: [
      'El hito 4 es el que separa un proyecto de clase de una app que alguien usaría en la calle. Vale la pena dedicarle tiempo.',
      'Su repositorio en GitHub es su carta de presentación: mensajes de commit claros en inglés, un README que explique cómo correr la app.'
    ] },
    right: { h3: 'Para profesionales', ps: [
      'Si ya trabaja con apps, puede empezar en el hito 3 o 4 después de la clase gratis.',
      'Las clases individuales permiten trabajar sobre un problema real de su equipo, sin compartir código confidencial.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para desarrolladores de apps',
    lede: 'Se dictan en vivo y en inglés, para personas de 18 años a más, en grupo o con un mentor a solas.',
    bands: [
      { num: 'I', h3: 'Lenguajes', sub: 'Para cada plataforma', courses: [
        { code: 'DAI / LENG / 01', slug: 'complete-swift-programming-masterclass-college', title: 'Swift', blurb: 'El lenguaje de iPhone y iPad, de la sintaxis a SwiftUI.' },
        { code: 'DAI / LENG / 02', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript', blurb: 'JavaScript con tipos, la base de muchos proyectos con React Native.' },
        { code: 'DAI / LENG / 03', slug: 'complete-java-programming-masterclass-college', title: 'Java', blurb: 'Orientación a objetos y el ecosistema que sostiene a Android.' }
      ] },
      { num: 'II', h3: 'Servidor y datos', sub: 'Lo que la app consulta', courses: [
        { code: 'DAI / BACK / 01', slug: 'mern-stack-development-masterclass-college', title: 'MERN stack', blurb: 'MongoDB, Express, React y Node.js para construir la API de su app.' },
        { code: 'DAI / BACK / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Diseño de bases de datos y consultas SQL eficientes.' },
        { code: 'DAI / BACK / 03', slug: 'python-web-development-django-flask-course', title: 'Django y Flask', blurb: 'Servidores en Python para apps que necesitan un back end propio.' }
      ] },
      { num: 'III', h3: 'Oficio', sub: 'Para trabajar en equipo', courses: [
        { code: 'DAI / OFI / 01', slug: 'git-github-version-control-course-for-college-students', title: 'Git y GitHub', blurb: 'Ramas, revisiones y un historial que se entiende.' },
        { code: 'DAI / OFI / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Lo que más se pregunta en una entrevista técnica en inglés.' },
        { code: 'DAI / OFI / 03', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'El paso previo natural a React Native, aplicado en la web.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se trabaja en las sesiones en vivo?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Temprano', l: 'Antes de ir a la universidad o a la oficina.' },
      { time: 'De noche', l: 'Al volver del trabajo, con el día ya resuelto.' },
      { time: 'Individual', l: 'Horario fijado con su mentor, semana a semana.' }
    ],
    cells: [
      { h3: 'Dispositivo real', p: 'Cada avance se prueba en un teléfono, no solo en el emulador.' },
      { h3: 'Código en GitHub', p: 'Todo el curso queda en un repositorio propio desde la primera semana.' },
      { h3: 'Revisión del mentor', p: 'El mentor lee los cambios y pregunta por cada decisión.' },
      { h3: 'IA con método', p: 'Asistentes de código para adultos, siempre con pruebas y revisión.' },
      { h3: 'Una app por etapa', p: 'Cada tramo cierra con algo instalable.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte personas con un nivel parecido, o usted y el mentor.' }
    ]
  },

  projectsH2: 'Lo que han construido nuestros estudiantes',
  projectsLede: 'Trabajos hechos por estudiantes de otros países que siguieron el mismo método; encontrará más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas públicas de Google, dejadas por estudiantes y familias en su inglés original.',

  fees: {
    h2: 'Precio del curso de desarrollo de aplicaciones',
    lede: 'Cobramos una cuota mensual expresada en dólares estadounidenses, por tarjeta de débito o crédito. Es el banco emisor el que la pasa a la moneda de su cuenta, con su propio tipo de cambio, así que el monto final puede variar ligeramente de un mes a otro.',
    free: ['Una sesión gratis con un mentor', 'Una recomendación de tecnología según su objetivo', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte personas de nivel parecido', 'Mentor asignado de inicio a fin', 'Dos sesiones semanales en vivo', 'Pago mensual, sin contrato de permanencia'],
    one: ['Usted y un mentor, nadie más', 'Su propia app o el problema de su equipo', 'El horario que usted fije']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Desarrollo de aplicaciones en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Cada sesión se dicta en inglés, en vivo y por videollamada. Para quien quiere trabajar en tecnología eso suma: aprende a desarrollar apps y, al mismo tiempo, a hablar de código en el idioma de la documentación y de muchos equipos. Lima figura en el nivel alto del EF EPI 2025, y una clase conversada es práctica oral diaria.' },
      { q: '¿Con cuál conviene empezar, Flutter o React Native?', a: 'Los dos permiten publicar en Android y en iPhone con un solo código. Flutter conviene si parte de cero; React Native, si ya conoce JavaScript o React. En la clase gratis el mentor le recomienda uno según lo que quiera construir.' },
      { q: '¿Necesito una Mac para desarrollar apps?', a: 'Para Android y para aprender Flutter o React Native, no. Para programar en Swift y publicar en la App Store, sí se necesita una Mac.' },
      { q: '¿Cuánto tiempo toma el curso?', a: 'Nuestra ruta de ejemplo es de unos seis meses con dos clases por semana para llegar a una primera app publicable desde cero. Es una estimación: quien ya programa avanza más rápido.' },
      { q: '¿Puedo usar inteligencia artificial en el curso?', a: 'Sí. Como es para personas de 18 años a más, se usan asistentes como Claude, GitHub Copilot o ChatGPT, siempre con pruebas escritas por el estudiante y revisión de cada cambio.' },
      { q: '¿Por qué la app debe funcionar sin señal?', a: 'Porque muchos usuarios peruanos se conectan solo con datos móviles. El INEI registró en 2026 que el 27,1 % de los hogares rurales tiene internet en casa, aunque el 89,2 % tiene celular. Una app que pierde lo escrito cuando se corta la señal pierde usuarios.' },
      { q: '¿Garantizan trabajo al terminar?', a: 'No. No ofrecemos bolsa de trabajo ni prometemos sueldos. El curso deja un portafolio de apps propias en GitHub y práctica en explicar decisiones técnicas en inglés.' },
      { q: '¿Cuál es el horario de las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Si reserva a las 7:00 p. m. de Perú, para el mentor serán las 5:30 a. m. del día siguiente, porque la India va 10 horas y 30 minutos por delante en cualquier mes.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares estadounidenses, y su banco hace la conversión. La sesión de prueba no tiene costo ni pide tarjeta.' },
      { q: '¿El curso cuenta como créditos universitarios?', a: 'No. No estamos vinculados a la SUNEDU ni a ninguna universidad peruana, y no otorgamos créditos ni grados. Lo único que entregamos al final es una constancia de finalización con el nombre de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Lecturas cercanas a este curso; la mayoría está en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'La oferta completa para Perú, ordenada por edades.' },
      { href: '/ai-agents-course', label: 'AI agents course', p: 'Agentes de IA, el siguiente paso para muchas apps.' },
      { href: '/data-science-course', label: 'Data science course', p: 'Para apps que necesitan entender sus propios datos.' },
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'Un mapa de qué aprender y en qué orden.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo es una sesión con mentor, paso a paso.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo.' }
    ]
  },

  start: {
    h2: 'Agende su sesión gratuita de desarrollo de apps',
    lede: 'En la sesión gratis el mentor conversa con usted sobre la app que quiere construir, revisa lo que ya sabe y arma con usted una primera pantalla en vivo. Al final le recomienda tecnología, curso y formato, sin compromiso.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> explica nuestro método y <a class="ag-inline-link" href="/coding-roadmap">Coding roadmap</a> muestra en qué orden aprender (ambas en inglés).',
    note: 'Mentores en la India, sesiones por videollamada, siempre en vivo y en inglés. Para escribirnos, WhatsApp es la vía más rápida y acepta mensajes en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Apps', links: [
        { href: '/courses/complete-app-development-masterclass-college', label: 'Desarrollo de aplicaciones' },
        { href: '/courses/complete-flutter-app-development-masterclass-college', label: 'Flutter' },
        { href: '/courses/complete-kotlin-programming-masterclass-professional', label: 'Kotlin' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para seguir', links: [
        { href: '/coding-roadmap', label: 'Ruta de aprendizaje' },
        { href: '/ai-agents-course', label: 'Agentes de IA' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Nunca perder lo que el usuario escribió'
  },

  personalityCss: `
.ag-root.ag-dai .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-dai .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-dai .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-dai .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-dai .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI ENAHO TIC bulletin II trimestre 2026 (Cuadro 1.5, Gráfico 1.6, phone-only households, users by phone by area, use by age); US Commercial Service Peru CCG Digital Economy (22 June 2026); World Bank Global Findex 2024 (Peru); Embassy of India Lima bilateral brief; SUNEDU press note 15 September 2021; EF EPI 2025 Peru page. Read 8 November 2026, regrepped 9 November 2026. Technology comparison, route, milestones and example are our own.',
    localProject: 'An order that must survive weak signal, in Python as a sketch of Flutter or Kotlin logic: send_order retries with waits that double (1, 2, 4, 8, 16 s) and a cap of five tries; with replies [False, False, True] it prints "attempt 3: sent after waiting 3 s", with eight failures the for/else prints "gave up after 31 s: save the order offline". Our calculation: 1 + 2 + 4 + 8 + 16 = 31. Lesson family: retry with exponential backoff and a cap, for/else.',
    requiredMentions: ['gave up after 31 s: save the order offline', 'attempt 3: sent after waiting 3 s', 'apenas 8,9 % tiene computadora y 27,1 % tiene internet en casa', 'el 90,3 % de los hogares del país solo tiene teléfono celular', '193 Peru-based fintechs operating as of 2024', 'el 59,3 % de los peruanos de 15 años a más tenía una cuenta financiera', 'obtuvieron 469 puntos, en la banda baja', 'Nunca perder lo que el usuario escribió', 'se rinde tras esperar 1 + 2 + 4 = 7 segundos'],
    sources: [
      { claim: 'INEI 2026: households with mobile, internet and computers by area; 90.3% phone-only households; users by phone by area; 97.3% of 19 to 24 online.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'trade.gov Peru Digital Economy: 193 fintechs as of 2024; significant mobile commerce component.', url: 'https://www.trade.gov/country-commercial-guides/peru-digital-economy' },
      { claim: 'Global Findex 2024 Peru: account 59.3, debit card 36.7, credit card 12.6 (% age 15+).', url: 'https://api.worldbank.org/v2/country/PER/indicator/account.t.d?source=28&format=json' },
      { claim: 'TCS provides over 1,300 jobs in Peru (Embassy of India, Lima).', url: 'https://eoilima.gov.in/page/india-peru/' },
      { claim: '94 licensed universities, 1.1 million university students (SUNEDU, 15 September 2021).', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: 'EF EPI 2025 Peru: ages 18 to 20 score 469 (low), 26 to 30 score 559 (high), Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only, said in the capsule and in an FAQ.',
      'Number of mobile developers in Peru or their salaries: no official recent figure found, so none printed.',
      'Job placement or salary promises: refused.',
      'The trade.gov 60 percent online-shopping figure: not used, it conflicts with Findex and measures something different.',
      'Any SUNEDU, university or MINEDU link, credit or official certificate: none held.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

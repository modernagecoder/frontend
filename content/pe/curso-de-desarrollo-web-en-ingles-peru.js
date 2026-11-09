// SHIP: market (es subject door) | desarrollo web full stack en inglés para un Perú que acaba de conectarse | escaping user text before it goes into HTML (html.escape)
'use strict';
// Curso de desarrollo web en inglés, Perú (ag- Spanish-language door, Peru cluster row PE105, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no USD market figure.
// Searches (KEYWORDS.md): "curso de desarrollo web", "curso de desarrollo web full stack", "desarrollo web full stack que es",
// "curso de desarrollo web html css y javascript", "curso de desarrollo web con ia", "desarrollo web con python".
// Angle: an adult, university student or older teen in Peru who wants to build websites and web apps. Spine: how fast Peru
// got online (INEI households with internet 2019 to 2026 by area); what Peruvians do online (INEI activities) and how they
// buy (trade.gov e-commerce share of GDP and of retail; Findex 2024); front end, back end and full stack explained; one
// original lesson on escaping user text; a full stack route of our own; AI in web work; English.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-desarrollo-web-en-ingles-peru/,
// research fetched 2026-11-08, regrepped 2026-11-09):
//  INEI, Boletín TIC II Trimestre 2026 (inei_tic_iit2026.txt), Gráfico N° 1.6 internet series 2019 to 2026: national "39,5 41,6
//    52,2 58,1 58,7 57,9 60,7 64,5"; Lima "63,9 59,9 68,0 77,6 81,5 79,2 80,4 84,7"; resto urbano "39,9 43,2 56,0 61,9 59,6 59,8
//    62,7 66,2"; rural "5,0 8,5 19,6 19,8 22,3 20,5 23,7 27,1"; text "en el área rural solo el 27,1% tenía acceso";
//    "En comparación con el mismo trimestre de 2025, el acceso a Internet a nivel nacional se incrementó en 3,8 puntos
//    porcentuales"; activities "El 93,1% usó Internet con fines recreativos"; "el 90,9% lo utilizó para comunicarse";
//    "el 78,1% lo empleó para la obtención de información"; "el 84,2% de la población de 6 y más años"; via phone 90,2%.
//  US Commercial Service, Peru CCG Digital Economy (2026-06-22, tradegov_digital.txt): "eCommerce now represents 5.5 percent
//    of the national GDP, up from 2.4 percent in 2019"; "online purchases still representing only 8 percent of total retail
//    sales"; "a significant mobile commerce component".
//  World Bank Global Findex 2024, Peru (wb_PER_fin26b.json): "Used a mobile phone or the internet to buy something online
//    (% age 15+)" 15.9.
//  MINEDU press note Sept 2026 (FACTS 29): "pondrá en marcha un plan para conectar 55 000 escuelas públicas a internet
//    satelital".
//  EF EPI 2025 Peru page: Lima 555 (high).
// Our own example (comentarios.py in the src-pages folder), run with python3 -I, exact output:
//    <ul><li>Great ceviche!</li><li>Tom & Jerry fan</li><li><b>BUY NOW</b></li><li><script>steal()</script></li></ul>
//    <ul><li>Great ceviche!</li><li>Tom &amp; Jerry fan</li><li>&lt;b&gt;BUY NOW&lt;/b&gt;</li><li>&lt;script&gt;steal()&lt;/script&gt;</li></ul>
// Our calculation: national internet households 64.5 - 39.5 = 25.0 points from 2019 to 2026; rural 27.1 - 5.0 = 22.1.
// Lesson family: building HTML from data with string formatting, and escaping user-supplied text (& < >) with html.escape
//    so it is shown, not executed.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  'from html import escape',
  '',
  "comments = ['Great ceviche!', 'Tom & Jerry fan', '<b>BUY NOW</b>',",
  "            '<script>steal()</script>']",
  '',
  'def list_v1(items):',
  "    return '<ul>' + ''.join(f'<li>{c}</li>' for c in items) + '</ul>'",
  '',
  'def list_v2(items):',
  "    return '<ul>' + ''.join(f'<li>{escape(c)}</li>' for c in items) + '</ul>'",
  '',
  'print(list_v1(comments))',
  'print(list_v2(comments))'
].join('\n');

const OUT = [
  '<ul><li>Great ceviche!</li><li>Tom & Jerry fan</li><li><b>BUY NOW</b></li><li><script>steal()</script></li></ul>',
  '<ul><li>Great ceviche!</li><li>Tom &amp; Jerry fan</li><li>&lt;b&gt;BUY NOW&lt;/b&gt;</li><li>&lt;script&gt;steal()&lt;/script&gt;</li></ul>'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Desarrollo web' },
  slug: 'curso-de-desarrollo-web-en-ingles-peru',
  code: 'dwi',
  accent: '#196653',
  accentRationale: 'Curso de desarrollo web en inglés: a jade green #196653 with a little blue in it, the tone of a link that has been visited, distinct from the app and software doors; contrast 5.56 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de desarrollo web en inglés',
  title: 'Curso de desarrollo web full stack en inglés, en Perú',
  description: 'Curso de desarrollo web full stack en vivo y en inglés para Perú: HTML, CSS, JavaScript, React, Node.js y bases de datos, para adultos y universitarios.',
  ogDescription: 'Cómo se conectó el Perú según el INEI, qué es full stack, una ruta de HTML a Node.js y una lección sobre el error de seguridad más común de la web, en clases en vivo.',
  twitterDescription: 'Desarrollo web full stack en clases en vivo y en inglés desde Perú, en grupo o individuales, a cualquier hora.',
  pageName: 'Curso de desarrollo web en inglés',
  webPageDescription: 'Guía para adultos, universitarios y estudiantes de los últimos años de secundaria en Perú que buscan un curso de desarrollo web full stack con clases en vivo y en inglés: el crecimiento del acceso a internet por área según el INEI, el comercio electrónico según el Servicio Comercial de Estados Unidos y el Banco Mundial, qué significa front end, back end y full stack, una ruta de estudio y una lección de ejemplo escrita por nosotros.',
  courseDescription: 'Curso en vivo y en línea de desarrollo web full stack para personas de 18 años a más en todo el Perú, con versión para adolescentes, dictado solo en inglés: HTML, CSS y JavaScript, React en el front end, Node.js o Python en el back end, bases de datos, seguridad y despliegue, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Desarrollo web en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#conexion', label: 'La conexión' },
    { href: '#full-stack', label: 'Full stack' },
    { href: '#escapar', label: 'Lección' },
    { href: '#ruta-web', label: 'Ruta' },
    { href: '#web-ia', label: 'Web e IA' }
  ],
  eyebrow: 'Perú &middot; Desarrollo web &middot; Full stack',
  h1: 'Curso de desarrollo web full stack, en vivo y en inglés',
  lede: 'En siete años, el porcentaje de hogares peruanos con internet pasó de cuatro de cada diez a más de seis de cada diez. Cada uno de esos hogares es un visitante posible para una tienda, un colegio, un consultorio o una municipalidad que todavía no tiene una web decente. Este curso enseña a construirla de punta a punta, con un mentor en vivo y en inglés.',
  secondaryCta: { href: '#escapar', label: 'Ver la lección de ejemplo' },
  wa: 'Hola Modern Age Coders, me interesa el curso de desarrollo web full stack en inglés desde Perú. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; HTML a Node.js, con revisión de código en inglés',
  spec: [
    ['Para quién', 'Adultos y universitarios; versión aparte para adolescentes de 13 a 17'],
    ['Tecnologías', 'HTML, CSS, JavaScript, React, Node.js o Python, SQL'],
    ['Formato', 'Clase grupal de quince a veinte personas, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Mentores', 'Desarrolladores en la India, por videollamada'],
    ['Sesión de prueba', 'Gratuita, sin datos de pago']
  ],
  capsuleQ: 'Lo esencial',
  capsule: 'Para aprender desarrollo web full stack desde Perú, Modern Age Coders ofrece un curso para adultos y universitarios de todo el Perú, con una versión para adolescentes; las clases son en vivo y por internet, siempre en inglés, a cargo de mentores que viven en la India. Se empieza por HTML, CSS y JavaScript, se sigue con React para la parte visible y con Node.js o Python y una base de datos para el servidor, y se termina con un sitio publicado. Puede estudiar en grupo o con su propio mentor, en el horario que elija, y la clase inicial es gratuita.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos de desarrollo web',
    lede: 'Uno para recorrer todo el camino, uno para quien parte de cero absoluto y uno para dominar la parte visible que más se pide.',
    items: [
      { course: 'full-stack-web-development-masterclass-college', code: 'DWI / 01', title: 'Desarrollador full stack', alt: 'Imagen del curso de desarrollo web full stack', note: 'Desde los 18 años. React, Node.js, bases de datos y nociones de DevOps, con un proyecto publicado al final.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'DWI / 02', title: 'HTML y CSS desde cero', alt: 'Imagen del curso de HTML y CSS para principiantes', note: 'La base de toda página: estructura, estilo y diseño que se adapta del celular a la pantalla grande.' },
      { course: 'react-js-complete-masterclass-college', code: 'DWI / 03', title: 'React a fondo', alt: 'Imagen del curso de React', note: 'Componentes, estado y rutas: la biblioteca con la que se construyen muchas interfaces modernas.' }
    ]
  },

  sections: [
    {
      id: 'conexion',
      eyebrow: 'La conexión',
      h2: '¿Vale la pena aprender desarrollo web en Perú?',
      lede: 'Los datos del INEI dicen que el público de la web peruana creció mucho y muy rápido, sobre todo fuera de Lima. Quien construye sitios trabaja para un país que en buena parte acaba de llegar a internet.',
      body: [
        { kind: 'table', numCols: [1, 2, 3], caption: 'Hogares con acceso a internet en Perú por área de residencia, II trimestre (porcentaje)', head: ['Área', '2019', '2026', 'Diferencia en puntos (cálculo nuestro)'], rows: [
          ['Total del país', '39,5', '64,5', '25,0'],
          ['Lima Metropolitana (con Callao)', '63,9', '84,7', '20,8'],
          ['Resto urbano', '39,9', '66,2', '26,3'],
          ['Área rural', '5,0', '27,1', '22,1']
        ] },
        { kind: 'source', html: 'Datos del INEI (ENAHO), boletín técnico de TIC del segundo trimestre de 2026, Gráfico N° 1.6 (serie 2019 a 2026; 2026 preliminar). La última columna es una resta nuestra entre las dos primeras.' },
        { kind: 'p', mt: true, html: 'Entre el segundo trimestre de 2019 y el de 2026, los hogares peruanos con internet pasaron de 39,5 % a 64,5 %, una subida de 25 puntos según la serie del INEI. En el área rural el salto fue de 5,0 % a 27,1 %: más de cinco veces. Solo en el último año, el acceso nacional creció 3,8 puntos. Son millones de personas que hoy buscan, compran y hacen trámites en sitios web que alguien tiene que diseñar, programar y mantener.' },
        { kind: 'p', html: 'Qué hacen esas personas en internet también está medido. El INEI registra que en el segundo trimestre de 2026 el 93,1 % de los usuarios de 6 años a más usó internet para entretenimiento, el 90,9 % para comunicarse y el 78,1 % para buscar información. Y el 90,2 % se conectó desde un celular. La consecuencia práctica para un desarrollador web peruano es clara: el sitio se diseña primero para la pantalla del teléfono y se prueba con conexión de datos, no con la fibra de la oficina.' },
        { kind: 'two', mt: true,
          leftH3: 'El comercio que se mudó a la web',
          left: [
            'En su capítulo de economía digital (versión del 22 de junio de 2026), la guía que el gobierno estadounidense publica para sus exportadores estima que el comercio electrónico representa el 5,5 % del PBI peruano, frente al 2,4 % de 2019, y que aun así las compras en línea son solo el 8 % de las ventas minoristas.',
            'Es decir, ya pesa en la economía y todavía tiene mucho por crecer. Cada bodega, restaurante o profesional independiente que se suma necesita una web, una tienda o al menos un catálogo que cargue rápido en un celular.'
          ],
          rightH3: 'Lo que falta del lado del usuario',
          right: [
            'La encuesta Global Findex 2024, del Banco Mundial, encontró que solo el 15,9 % de los peruanos de 15 años a más había usado el celular o internet para comprar algo en línea.',
            'Esa distancia entre lo que ya se puede comprar y lo que la gente compra se explica en parte por confianza. Un sitio claro, rápido y seguro es parte de la solución, y la seguridad es el tema de la lección de ejemplo.'
          ] },
        { kind: 'p', mt: true, html: 'El Estado también empuja la conexión: según una nota del MINEDU de septiembre de 2026, el plan es conectar 55,000 escuelas públicas a internet satelital. No tenemos relación con ese plan, pero es otra señal de que la próxima generación de usuarios de la web peruana viene de lugares que hasta hace poco no estaban en línea.' }
      ]
    },
    {
      id: 'full-stack',
      eyebrow: 'Full stack',
      h2: '¿Qué es el desarrollo web full stack?',
      lede: 'Es saber construir las dos mitades de una aplicación web: lo que el usuario ve en su navegador y lo que ocurre en el servidor. Un desarrollador full stack no domina todo a la perfección; entiende cómo encajan las piezas y puede llevar un proyecto de principio a fin.',
      body: [
        { kind: 'table', numCols: [], caption: 'Las capas de una aplicación web (explicación nuestra)', head: ['Capa', 'Qué hace', 'Qué se aprende en el curso'], rows: [
          ['Front end', 'lo que se ve y se toca en el navegador', 'HTML, CSS, JavaScript y React'],
          ['Back end', 'recibe pedidos, aplica reglas y responde', 'Node.js con Express, o Python con Django o Flask'],
          ['Base de datos', 'guarda la información de forma ordenada', 'SQL con MySQL, y una base de documentos como MongoDB'],
          ['Despliegue', 'pone la aplicación en internet', 'un servidor en la nube, dominio y HTTPS']
        ] },
        { kind: 'p', mt: true, html: 'Una de las búsquedas que se repiten en Perú es "curso de desarrollo web html css y javascript", y tiene sentido empezar por ahí: son los tres lenguajes que entiende cualquier navegador del mundo. HTML dice qué hay en la página, CSS dice cómo se ve y JavaScript dice qué hace cuando el usuario interactúa. Lo que muchas personas descubren después es que una web útil, como una tienda o un sistema de reservas, necesita además un servidor y una base de datos. Ahí empieza lo que se llama back end, y quien maneja las dos mitades es full stack.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Una petición', p: 'El usuario toca "Buy" en su celular. El navegador envía una petición al servidor con lo que eligió.' },
          { h3: 'Una regla', p: 'El servidor revisa que el producto exista, que haya stock y que los datos estén completos. Si algo falla, responde con un mensaje claro.' },
          { h3: 'Una respuesta', p: 'Si todo está bien, guarda el pedido en la base de datos y el navegador muestra la confirmación. Todo en menos de un segundo.' }
        ] }
      ]
    },
    {
      id: 'escapar',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Por qué una web no debe mostrar el texto del usuario tal cual?',
      lede: 'Porque el navegador no distingue entre el texto que escribió un visitante y el código de la página, a menos que el desarrollador se lo indique. Esta lección, escrita por nosotros, lo muestra con los comentarios de un restaurante.',
      body: [
        { kind: 'code', label: 'Dos formas de armar la lista de comentarios', lang: 'Python', code: PY, note: 'Generamos el HTML desde Python para que se vea solo la idea; en Node.js o en React el problema y la solución son los mismos. Antes de ejecutar, el mentor pregunta: "Which comment will look different on the page?"' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Salida tal cual de nuestra ejecución con Python 3. La primera línea es la versión 1; la segunda, la versión 2.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El comentario inofensivo.</strong> "Great ceviche!" sale igual en las dos versiones. Si el curso probara solo con comentarios así, nadie notaría el problema.',
          '<strong>El ampersand.</strong> En la versión 1, "Tom & Jerry fan" va tal cual. Muchos navegadores lo toleran, pero el HTML correcto es <code>&amp;amp;</code>, que es lo que produce la versión 2.',
          '<strong>La negrita que nadie pidió.</strong> Un visitante escribió <code>&lt;b&gt;BUY NOW&lt;/b&gt;</code>. En la versión 1, el navegador lo interpreta y el comentario aparece en negrita, gritando una oferta en la web del restaurante.',
          '<strong>El script.</strong> El cuarto comentario contiene <code>&lt;script&gt;</code>. En la versión 1, el navegador de cada visitante lo ejecutaría como código de la página. Este error tiene nombre en inglés, <em>cross-site scripting</em> o XSS, y es de los más conocidos de la web.',
          '<strong>La corrección.</strong> <code>escape</code> cambia <code>&amp;</code>, <code>&lt;</code> y <code>&gt;</code> por sus equivalentes seguros. El navegador entonces los muestra como letras y no los ejecuta.'
        ] },
        { kind: 'p', mt: true, html: 'Los frameworks modernos como React escapan el texto por defecto, y por eso muchos estudiantes nunca ven este error, hasta el día en que usan una función que desactiva esa protección o escriben HTML a mano en el servidor. Preferimos que lo vean una vez, con un ejemplo inofensivo y controlado, y que entiendan por qué la regla existe. La frase que el estudiante explica al final, en inglés, es corta: "Never trust text that comes from a user."' },
        { kind: 'p', html: 'Como reto, el mentor pide añadir un quinto comentario con comillas, por ejemplo <code>She said "wow"</code>, y predecir cómo lo transforma <code>escape</code>. La respuesta se comprueba ejecutando: por defecto, la función también convierte las comillas, lo que importa cuando el texto va dentro de un atributo HTML.' }
      ]
    },
    {
      id: 'ruta-web',
      eyebrow: 'Ruta',
      h2: '¿Cuánto se tarda en ser desarrollador web full stack?',
      lede: 'Para alguien que empieza de cero y estudia con dos sesiones semanales más práctica propia, nuestra ruta de referencia dura unos ocho meses hasta un primer proyecto completo publicado. Es una estimación nuestra, no un plazo garantizado.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ruta de ocho meses en desarrollo web full stack (propuesta nuestra, adaptable a cada persona)', head: ['Meses', 'Tema', 'Proyecto'], rows: [
          ['1', 'HTML y CSS, diseño adaptable al celular', 'La web de una pequeña empresa, de una sola página'],
          ['2 y 3', 'JavaScript: lógica, eventos, peticiones a una API', 'Un buscador de recetas que consulta datos externos'],
          ['4 y 5', 'React: componentes, estado, rutas', 'Una tienda con carrito, todavía sin servidor'],
          ['6', 'Node.js o Python en el servidor, API propia', 'El servidor de la tienda, con validación'],
          ['7', 'Bases de datos SQL, autenticación, seguridad', 'Usuarios, pedidos y contraseñas protegidas'],
          ['8', 'Pruebas, despliegue y rendimiento', 'La tienda publicada en internet con HTTPS']
        ] },
        { kind: 'p', mt: true, html: 'Quien ya tiene una base de programación en la universidad suele recorrer los tres primeros meses en algunas semanas. Con un empleo de jornada completa, muchas personas eligen sesiones individuales y estiran los plazos. Lo que no cambia es el criterio: cada etapa termina con un proyecto que funciona, revisado por el mentor, y su código queda en un repositorio propio en GitHub.' },
        { kind: 'p', html: 'Para adolescentes de 13 a 17 años existe una versión del curso con el mismo recorrido y otros proyectos. Las familias de Lima con hijos en colegios bilingües pueden leer <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, escrita en inglés para ellas.' }
      ]
    },
    {
      id: 'web-ia',
      eyebrow: 'Web e IA',
      h2: '¿Se puede aprender desarrollo web con IA?',
      lede: 'Sí, y la IA cambia bastante el trabajo diario de un desarrollador web. Lo que no cambia es la responsabilidad: si la página tiene un agujero de seguridad, el que responde es quien la publicó.',
      body: [
        { kind: 'two',
          leftH3: 'Dónde ayuda',
          left: [
            'Generar la estructura inicial de una página, proponer estilos, explicar un error de la consola del navegador o traducir una función de JavaScript a Python.',
            'En el curso para adultos se usan asistentes de código profesionales, incluidos los que piden 18 años. Con adolescentes, solo entran herramientas cuyos términos aceptan a menores de esa edad.'
          ],
          rightH3: 'Dónde hay que mirar dos veces',
          right: [
            'En todo lo que toca datos de usuarios: formularios, contraseñas, consultas a la base de datos. El ejemplo de esta página es exactamente el tipo de detalle que una propuesta automática puede omitir.',
            'En la accesibilidad: textos alternativos, contraste, navegación con teclado. Una web que solo funciona con mouse deja fuera a muchas personas.'
          ] },
        { kind: 'p', mt: true, html: 'La regla del curso es que el estudiante escribe primero una versión propia de cada tema, sin asistente, y solo después lo usa para acelerar. Así sabe reconocer cuándo la propuesta de la IA es correcta y cuándo solo lo parece. La misma idea guía <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">nuestra oferta para todo el Perú</a>, de primaria a profesionales.' }
      ]
    },
    {
      id: 'ingles-web',
      eyebrow: 'En inglés',
      h2: '¿Por qué estudiar desarrollo web en inglés?',
      lede: 'Porque la web se documenta en inglés: las referencias de HTML, CSS y JavaScript, las guías de React y Node.js, los mensajes de error del navegador y casi todas las preguntas y respuestas técnicas.',
      body: [
        { kind: 'p', html: 'El EF EPI 2025 sitúa a Lima en 555 puntos, dentro de la banda alta de inglés. Para un desarrollador web peruano con ese nivel, el idioma deja de ser una barrera y se convierte en acceso: a documentación actualizada el mismo día en que sale una versión nueva, a comunidades internacionales y a clientes de otros países. Las clases en inglés entrenan además la parte que más cuesta, que es hablar: explicar una decisión de diseño, preguntar por un error o presentar un proyecto.' },
        { kind: 'p', html: 'Si usted vive en otra ciudad del país, como Arequipa, no hay diferencia: las clases son en línea y el mentor se adapta a su horario. Hay una página en inglés sobre cómo enseñamos a <a class="ag-inline-link" href="/coding-classes-in-arequipa-peru">estudiantes de Arequipa</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se mide el avance de un desarrollador web?',
    lede: 'Con cinco niveles propios, cada uno con una página o aplicación que lo demuestra.',
    table: { caption: 'Cinco niveles de desarrollo web (nuestros)', head: ['Nivel', 'Lo que la persona construye', 'Prueba que pide el mentor'], rows: [
      ['1. Maqueta', 'páginas con HTML y CSS que se ven bien en un celular', 'abrirla en un teléfono de gama media'],
      ['2. Interacción', 'páginas que responden con JavaScript', 'usarla solo con teclado'],
      ['3. Interfaz', 'una aplicación en React con varias pantallas', 'recargar en cualquier pantalla sin perder el estado'],
      ['4. Servidor', 'una API propia con base de datos', 'enviarle datos inválidos a propósito'],
      ['5. Producción', 'la aplicación publicada con HTTPS y pruebas', 'leer el repositorio y desplegar una versión nueva']
    ] },
    left: { h3: 'Para quien empieza', ps: [
      'Los niveles 1 y 2 dan resultados visibles rápido y motivan. El 3 pide más paciencia: pensar en componentes y estado es una forma nueva de ver una página.',
      'Pruebe cada cosa que construya en su propio celular, no solo en la laptop.'
    ] },
    right: { h3: 'Para quien ya hace webs', ps: [
      'Si ya publica sitios con plantillas, probablemente empiece en el nivel 2 o 3 después de la clase gratis.',
      'El nivel 4 suele ser el más nuevo: diseñar una API y defenderla de datos mal intencionados.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para la web',
    lede: 'Se enseñan en inglés y en vivo; los tres primeros de la segunda banda son también para adolescentes.',
    bands: [
      { num: 'I', h3: 'Lo que ve el usuario', sub: 'Front end', courses: [
        { code: 'DWI / FRONT / 01', slug: 'complete-typescript-programming-masterclass-college', title: 'TypeScript', blurb: 'JavaScript con tipos, para proyectos que crecen sin desordenarse.' },
        { code: 'DWI / FRONT / 02', slug: 'frontend-development-masterclass-for-teens', title: 'Front end para adolescentes', blurb: 'Interfaces claras con HTML, CSS y JavaScript, de 13 a 17 años.' },
        { code: 'DWI / FRONT / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript para adolescentes', blurb: 'Páginas interactivas y juegos de navegador como primeros proyectos.' }
      ] },
      { num: 'II', h3: 'Lo que pasa detrás', sub: 'Back end y datos', courses: [
        { code: 'DWI / BACK / 01', slug: 'mern-stack-development-masterclass-college', title: 'MERN stack', blurb: 'MongoDB, Express, React y Node.js en un mismo proyecto.' },
        { code: 'DWI / BACK / 02', slug: 'python-web-development-django-flask-course', title: 'Django y Flask', blurb: 'Desarrollo web del lado del servidor con Python.' },
        { code: 'DWI / BACK / 03', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Tablas, relaciones y consultas para la base de datos de su sitio.' }
      ] },
      { num: 'III', h3: 'Oficio', sub: 'Para trabajar en serio', courses: [
        { code: 'DWI / OFI / 01', slug: 'git-github-version-control-course-for-college-students', title: 'Git y GitHub', blurb: 'Historial de cambios, ramas y revisión de código en equipo.' },
        { code: 'DWI / OFI / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack para adolescentes', blurb: 'React y Node.js con proyectos pensados para 13 a 17 años.' },
        { code: 'DWI / OFI / 03', slug: 'ethical-hacking-masterclass-complete', title: 'Hacking ético', blurb: 'Encontrar y cerrar agujeros como el de la lección, en sistemas propios.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué pasa en una sesión del curso de desarrollo web?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Por la mañana', l: 'Para quien estudia o trabaja por la tarde.' },
      { time: 'Por la noche', l: 'Al terminar la jornada, con calma.' },
      { time: 'Individual', l: 'Fechas y horas acordadas con su mentor.' }
    ],
    cells: [
      { h3: 'Navegador compartido', p: 'El mentor ve su página y su código a la vez, y los prueba con usted.' },
      { h3: 'Celular primero', p: 'Cada diseño se revisa en la pantalla de un teléfono.' },
      { h3: 'Seguridad desde el inicio', p: 'Validar y escapar los datos del usuario no es un tema final.' },
      { h3: 'Repositorio propio', p: 'Todo su trabajo queda en GitHub, con historial.' },
      { h3: 'Un sitio por etapa', p: 'Cada tramo termina con algo que se abre en un navegador.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte personas de nivel parecido, o solo usted y su mentor.' }
    ]
  },

  projectsH2: 'Sitios y aplicaciones de nuestros estudiantes',
  projectsLede: 'Webs construidas por alumnos de varios países con esta ruta; la galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Comentarios de Google escritos por estudiantes y familias, tal como aparecen, en inglés.',

  fees: {
    h2: '¿Cuánto cuesta el curso de desarrollo web?',
    lede: 'Publicamos la mensualidad en dólares estadounidenses y la cobramos con tarjeta. Su banco hace el cambio a la moneda en que está su cuenta; por eso el cargo que verá puede diferir en centavos de un mes a otro.',
    free: ['Una sesión gratis con un mentor', 'Una primera página construida en vivo', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte personas de nivel parecido', 'Un mismo mentor de principio a fin', 'Dos sesiones en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Usted y su mentor', 'Su propio sitio o proyecto', 'El horario que acuerden']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Desarrollo web en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Este curso se da íntegramente en inglés, siempre en vivo por internet. Lo planteamos como ventaja: la documentación de la web está en inglés, y practicar el idioma hablando de su propio código, con un mentor que va a su ritmo, acelera las dos cosas. En el EF EPI 2025, Lima figura en la banda alta de inglés.' },
      { q: '¿Qué es el desarrollo web full stack?', a: 'Es saber construir tanto la parte que ve el usuario en el navegador (front end) como el servidor y la base de datos (back end). Un desarrollador full stack puede llevar una aplicación web de principio a fin.' },
      { q: '¿Tengo que saber programar antes?', a: 'No. El curso empieza con HTML y CSS, que se aprenden rápido y dan resultados visibles en la primera semana, y luego pasa a JavaScript.' },
      { q: '¿Cuánto tiempo toma?', a: 'Nuestra ruta de referencia es de unos ocho meses desde cero hasta una aplicación publicada, con dos clases por semana. Quien ya programa suele avanzar más rápido.' },
      { q: '¿Aprenderé HTML, CSS y JavaScript?', a: 'Sí, son los tres primeros temas. Después se suman React, Node.js o Python y una base de datos SQL.' },
      { q: '¿Se usa inteligencia artificial?', a: 'Sí, como apoyo y después de que el estudiante sabe hacerlo solo. Los adultos usan asistentes profesionales; los adolescentes, solo los permitidos para su edad. Todo lo que toca datos de usuarios se revisa a mano.' },
      { q: '¿A qué hora puedo tomar las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre ambos países hay una diferencia fija de 10 horas y media; una sesión a las 6:30 a. m. de Lima es a las 5:00 p. m. para el mentor.' },
      { q: '¿En qué moneda se cobra?', a: 'En dólares estadounidenses y por tarjeta; la conversión corre por cuenta de su banco. Para la sesión inicial no se piden datos de pago.' },
      { q: '¿Me ayudan a conseguir clientes o trabajo?', a: 'No tenemos bolsa de empleo y no prometemos ingresos. El curso le deja un portafolio de sitios publicados y código en GitHub, que es lo que puede mostrar a un cliente o a una empresa.' },
      { q: '¿El curso tiene validez oficial?', a: 'No. No tenemos vínculo con el MINEDU, la SUNEDU, universidades ni institutos, y no damos títulos ni créditos. Al terminar entregamos una constancia de finalización propia.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Otras páginas para quien construye para la web; casi todas en inglés.',
    items: [
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'En qué orden aprender, de la primera página al servidor.' },
      { href: '/real-coding-classes', label: 'Real coding classes', p: 'Por qué no enseñamos con plantillas que lo hacen todo.' },
      { href: '/ai-agents-course', label: 'AI agents course', p: 'Agentes de IA que también se conectan a la web.' },
      { href: '/data-science-course', label: 'Data science course', p: 'Para llevar los datos de un sitio a un análisis.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Una sesión con mentor, contada por dentro.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo entero.' }
    ]
  },

  start: {
    h2: 'Pruebe una sesión gratis de desarrollo web',
    lede: 'En la sesión de prueba construye con el mentor una primera página que se ve bien en su celular, y conversan sobre el sitio o la aplicación que le gustaría hacer. Con eso le sugerimos por dónde empezar, qué curso tomar y en qué formato. No hay compromiso.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> presenta nuestras sesiones y <a class="ag-inline-link" href="/coding-roadmap">Coding roadmap</a> propone un orden de estudio (ambas en inglés).',
    note: 'Las sesiones son en vivo, por videollamada, con mentores que viven en la India y enseñan en inglés. Si quiere consultarnos antes, WhatsApp acepta mensajes en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Desarrollo web', links: [
        { href: '/courses/full-stack-web-development-masterclass-college', label: 'Full stack' },
        { href: '/courses/html-css-course-for-beginners-build-real-websites', label: 'HTML y CSS' },
        { href: '/courses/react-js-complete-masterclass-college', label: 'React' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para seguir', links: [
        { href: '/coding-roadmap', label: 'Ruta de estudio' },
        { href: '/real-coding-classes', label: 'Código de verdad' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Never trust text that comes from a user'
  },

  personalityCss: `
.ag-root.ag-dwi .ag-hero h1 { letter-spacing: -0.012em; max-width: 22ch; }
.ag-root.ag-dwi .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-dwi .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-dwi .ag-code-note code { font-weight: 600; }
.ag-root.ag-dwi .ag-table td:first-child { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'INEI ENAHO TIC bulletin II trimestre 2026 (Gráfico 1.6 internet series 2019 to 2026, Cuadro 2.2 activities, devices); US Commercial Service Peru CCG Digital Economy (22 June 2026); World Bank Global Findex 2024 Peru (fin26b); MINEDU press note on satellite internet for 55,000 schools (September 2026); EF EPI 2025 Peru page. Read 8 November 2026, regrepped 9 November 2026. The point differences, the layers table, the eight-month route, the levels and the example are our own.',
    localProject: 'Restaurant comments in a web page, generated from Python: list_v1 pastes user text straight into <li> tags, so "<b>BUY NOW</b>" renders bold and "<script>steal()</script>" would run in every visitor\'s browser; list_v2 passes each comment through html.escape, printing Tom &amp; Jerry fan and &lt;script&gt;steal()&lt;/script&gt;. Lesson family: building HTML from data, and escaping user text so it is shown, not executed (XSS).',
    requiredMentions: ['pasaron de 39,5 % a 64,5 %, una subida de 25 puntos', 'En el área rural el salto fue de 5,0 % a 27,1 %', 'el comercio electrónico representa el 5,5 % del PBI peruano, frente al 2,4 % de 2019', 'solo el 15,9 % de los peruanos de 15 años a más había usado el celular o internet para comprar algo en línea', 'conectar 55,000 escuelas públicas a internet satelital', 'cross-site scripting', 'Tom &amp;amp; Jerry fan', 'Never trust text that comes from a user', 'el 93,1 % de los usuarios de 6 años a más usó internet para entretenimiento'],
    sources: [
      { claim: 'INEI 2026: internet households 2019 to 2026 by area; +3.8 points in a year; activities 93.1, 90.9, 78.1; 90.2% by phone.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'trade.gov: e-commerce 5.5% of GDP, up from 2.4% in 2019; 8% of retail; mobile commerce.', url: 'https://www.trade.gov/country-commercial-guides/peru-digital-economy' },
      { claim: 'Global Findex 2024 Peru: 15.9% used a phone or the internet to buy online.', url: 'https://api.worldbank.org/v2/country/PER/indicator/fin26b?source=28&format=json' },
      { claim: 'MINEDU plan to connect 55,000 public schools to satellite internet.', url: 'https://www.gob.pe/institucion/minedu/noticias/1438938-minedu-conectara-a-internet-satelital-a-55-000-escuelas-publicas' },
      { claim: 'EF EPI 2025: Lima 555, high band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only, said in the capsule and in an FAQ.',
      'trade.gov e-commerce GMV figures in dollars: not printed, to keep money figures off the page.',
      'Freelance income, job or salary promises: refused.',
      'Any MINEDU, SUNEDU, university or institute link, credits or official certificate: none held.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: market (es subject door) | desarrollo de software desde cero, en inglés: oficio, industria y seguridad | a class that guards its own invariant: raise ValueError, try/except at the caller
'use strict';
// Curso de desarrollo de software en inglés, Perú (ag- Spanish-language door, Peru cluster row PE104, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure, no USD market figures.
// Searches (KEYWORDS.md): "desarrollo de software curso", "curso de desarrollo de software online", "curso desarrollo de
// software desde cero", "desarrollo de software con ia curso", "desarrollo seguro de software curso".
// Angle: an adult or university student in Peru (18+) who wants the trade of software development, not just a language.
// Spine: programming versus software development; what the industry deck of PROMPERÚ says (shares and growth only, no money
// figures; projections labelled as such); learning from zero online (INEI skills; Fábrica de Programadores and PCEP); one
// original lesson on a class that protects its own rules; English for IT work (EF EPI 2025 by job function); secure
// software; competitive programming context (OPI languages, IOI record).
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-desarrollo-de-software-en-ingles-peru/,
// research fetched 2026-11-08, regrepped 2026-11-09):
//  PROMPERÚ, "Coyuntura sectorial para software" (undated deck, data to 2025; promperu_a.txt), table "Ingresos por segmento
//    del mercado de TI", Var.% 25/24 and Part % 25: "Servicios 2539 2720 2945 3202 3513 5666 9,7 60,1", "Software 869 943 1037
//    1155 1302 2483 12,7 22,3", "Hardware 747 803 868 942 1030 1647 9,4 17,6" (source line "Fuente: Global Data"); text
//    "Software es el segmento más dinámico en el corto plazo (+12,7 % en 2025 vs. 2024)"; projections "Para 2030, cerca del
//    80 % de las organizaciones utilizará desarrollo asistido por IA"; "La seguridad deja de ser un módulo adicional y pasa a
//    integrarse desde el diseño del software."; "Se estima que el 60% de las organizaciones adoptará marcos Zero Trust para el
//    2027". Only percentages are printed on the page.
//  US Commercial Service, Peru CCG Digital Economy (2026-06-22, tradegov_digital.txt): "Peru's software and IT services sector
//    has potential for growth, with productivity gains expected from increased adoption of artificial intelligence, cloud
//    computing, data centers, and other digital technologies."; "Addressing Lima's dominance in the digital financial and
//    talent sectors"; "National Digital Talent Platform".
//  INEI, Boletín TIC II Trimestre 2026, Cuadro 4.1 (15+): 47,7% installed and configured software; 12,1% wrote a program.
//  MINEDU Fábrica de Programadores (FACTS 45, 46): 1000 escolares, Python, "podrán rendir el examen PCEP, con validez global".
//  EF EPI 2025 Peru page (ef_peru.raw) jobFunctionScore: strategy-project-management 589 high, customer-service 585 high,
//    marketing 565 high, operations 554 high, sales 547, human-resources 542, admin-clerical 540, legal 532, teacher 532, it
//    522 moderate, unspecified/unemployed 506, accounting-finance 484 low, student 482 low.
//  UTEC Reglamento OPI 2025 (FACTS 116): Fase 1 "Se podr´a usar C++ o Python"; Fase 2 "Se podr´a usar solo C++.".
//  IOI statistics Peru (FACTS 119, 120): "First participation: 2022", "Contestants participated: 13", "Bronze medals: 1".
// Our own example (grupo_v1.py and grupo.py in the src-pages folder), run with python3 -I, exact output:
//    v1: ['Ana', 'Luis', 'Ana', 'Rosa', 'Jorge'] 5 of 3
//    v2: enrolled Ana / enrolled Luis / refused: Ana is already in Python B / enrolled Rosa / refused: Python B is full (3) /
//        ['Ana', 'Luis', 'Rosa']
// Lesson family: object-oriented design; a class guards its own invariant (no duplicates, never over capacity) by raising
//    ValueError, and the caller decides what to do with try/except.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const V1 = [
  "python_b = {'name': 'Python B', 'capacity': 3, 'students': []}",
  "for s in ['Ana', 'Luis', 'Ana', 'Rosa', 'Jorge']:",
  "    python_b['students'].append(s)",
  "print(python_b['students'], len(python_b['students']), 'of', python_b['capacity'])"
].join('\n');

const V1_OUT = "['Ana', 'Luis', 'Ana', 'Rosa', 'Jorge'] 5 of 3";

const V2 = [
  'class Group:',
  '    def __init__(self, name, capacity):',
  '        self.name = name',
  '        self.capacity = capacity',
  '        self.students = []',
  '',
  '    def enrol(self, student):',
  '        if student in self.students:',
  "            raise ValueError(f'{student} is already in {self.name}')",
  '        if len(self.students) >= self.capacity:',
  "            raise ValueError(f'{self.name} is full ({self.capacity})')",
  '        self.students.append(student)',
  '',
  '',
  "python = Group('Python B', capacity=3)",
  "for s in ['Ana', 'Luis', 'Ana', 'Rosa', 'Jorge']:",
  '    try:',
  '        python.enrol(s)',
  "        print('enrolled', s)",
  '    except ValueError as e:',
  "        print('refused:', e)",
  'print(python.students)'
].join('\n');

const V2_OUT = [
  'enrolled Ana',
  'enrolled Luis',
  'refused: Ana is already in Python B',
  'enrolled Rosa',
  'refused: Python B is full (3)',
  "['Ana', 'Luis', 'Rosa']"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Desarrollo de software' },
  slug: 'curso-de-desarrollo-de-software-en-ingles-peru',
  code: 'dso',
  accent: '#005356',
  accentRationale: 'Curso de desarrollo de software en inglés: a petrol teal #005356, the blue-green of an engineering blueprint, set apart from the pure greens of the app and web doors; contrast 7.19 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de desarrollo de software en inglés',
  title: 'Curso de desarrollo de software desde cero, en inglés',
  description: 'Curso de desarrollo de software online, en vivo y en inglés, para adultos y universitarios en Perú: Python, Java, pruebas, Git y diseño, desde cero y a su ritmo.',
  ogDescription: 'Programar no es lo mismo que desarrollar software: qué se aprende, cómo crece la industria según PROMPERÚ, el inglés de los equipos de TI y una lección de diseño con clases.',
  twitterDescription: 'Desarrollo de software desde cero en clases en vivo y en inglés desde Perú, en grupo o individuales.',
  pageName: 'Curso de desarrollo de software en inglés',
  webPageDescription: 'Guía para adultos y universitarios en Perú que buscan un curso de desarrollo de software online y desde cero, con clases en vivo y en inglés: la diferencia entre programar y desarrollar software, los datos del sector según PROMPERÚ y el Servicio Comercial de Estados Unidos, el inglés de los profesionales de TI según el EF EPI 2025, el desarrollo seguro y una lección de ejemplo en Python escrita por nosotros.',
  courseDescription: 'Curso en vivo y en línea de desarrollo de software para personas de 18 años a más en todo el Perú, dictado solo en inglés: un primer lenguaje (Python o Java), diseño con funciones y clases, pruebas automáticas, control de versiones con Git, bases de datos, seguridad básica y trabajo con asistentes de IA, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Desarrollo de software en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#oficio', label: 'El oficio' },
    { href: '#industria', label: 'Industria' },
    { href: '#diseno', label: 'Lección' },
    { href: '#ingles-ti', label: 'Inglés de TI' },
    { href: '#seguro', label: 'Seguridad' }
  ],
  eyebrow: 'Perú &middot; Desarrollo de software &middot; Desde los 18 años',
  h1: 'Curso de desarrollo de software desde cero, en inglés',
  lede: 'Aprender un lenguaje lleva unas semanas. Aprender a construir software que otra persona pueda leer, probar, cambiar y confiar lleva más, y se aprende con más facilidad al lado de alguien que lo hace todos los días. Ese es el curso: el oficio completo, enseñado en vivo y en el idioma de los equipos de tecnología.',
  secondaryCta: { href: '#diseno', label: 'Ver la lección de ejemplo' },
  wa: 'Hola Modern Age Coders, quiero aprender desarrollo de software desde cero, en clases en inglés desde Perú. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; diseño, pruebas y Git, explicados en inglés',
  spec: [
    ['Para quién', 'Adultos y universitarios desde los 18 años, sin experiencia previa'],
    ['Lenguajes', 'Python o Java como primer lenguaje, luego SQL y JavaScript'],
    ['Formato', 'Clase grupal de quince a veinte personas, o clases individuales'],
    ['Horario', 'Cualquier día y a cualquier hora, con flexibilidad'],
    ['Mentores', 'Ingenieros en la India, por videollamada'],
    ['Clase de prueba', 'No se paga ni pide tarjeta']
  ],
  capsuleQ: 'Resumen',
  capsule: 'Sí existe un curso de desarrollo de software desde cero pensado para Perú: Modern Age Coders lo imparte a adultos y universitarios, en vivo, por internet y en inglés, con mentores que trabajan desde la India. Además de un primer lenguaje, Python o Java, se aprende lo que convierte el código en software: diseño con funciones y clases, pruebas automáticas, Git, bases de datos y seguridad básica. Hay modalidad grupal e individual, con el horario que usted defina, y la primera sesión no se cobra.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para entrar al desarrollo de software',
    lede: 'Dos primeros lenguajes posibles y el curso que convierte a quien programa en alguien que resuelve problemas con criterio.',
    items: [
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'DSO / 01', title: 'Python desde cero', alt: 'Imagen del curso de Python desde cero para adultos', note: 'El primer lenguaje que recomendamos a casi todos: legible, útil en web, datos y automatización.' },
      { course: 'complete-java-programming-masterclass-college', code: 'DSO / 02', title: 'Java hasta Spring Boot', alt: 'Imagen del curso de Java para universitarios', note: 'Para quien apunta a sistemas empresariales, bancos o aseguradoras, donde Java sigue siendo central.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'DSO / 03', title: 'Estructuras de datos y algoritmos', alt: 'Imagen del curso de estructuras de datos y algoritmos', note: 'Listas, árboles, grafos y complejidad: lo que se pregunta en una entrevista técnica.' }
    ]
  },

  sections: [
    {
      id: 'oficio',
      eyebrow: 'El oficio',
      h2: '¿Qué se aprende en un curso de desarrollo de software?',
      lede: 'Mucho más que un lenguaje. Un desarrollador de software entiende el problema, diseña una solución, la escribe, la prueba, la guarda con historia y la mantiene cuando cambian las reglas. El curso recorre ese ciclo entero.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Antes del código', p: 'Leer un pedido, hacer preguntas, escribir qué debe pasar en cada caso. La mitad de los errores de un sistema nacen en un requisito mal entendido, no en una línea mal escrita.' },
          { h3: 'Durante el código', p: 'Funciones cortas, nombres claros, clases que protegen sus propias reglas, pruebas automáticas que corren con un comando. Es el centro de la lección de ejemplo.' },
          { h3: 'Después del código', p: 'Git para guardar cada cambio con un mensaje que explica por qué, revisión entre pares, documentación mínima y la costumbre de dejar el proyecto un poco más ordenado de como se encontró.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Programar y desarrollar software: diferencias que el curso trabaja (comparación nuestra)', head: ['Aspecto', 'Programar un ejercicio', 'Desarrollar software'], rows: [
          ['Quién lo usa', 'quien lo escribió', 'personas que nunca verán el código'],
          ['Cuánto dura', 'hasta entregar la tarea', 'años, con cambios constantes'],
          ['Cómo se sabe que funciona', 'se ejecuta una vez y se mira', 'pruebas automáticas que corren siempre'],
          ['Dónde vive', 'una carpeta en la laptop', 'un repositorio con historial y revisiones'],
          ['Qué pasa con un dato raro', 'a veces nada, a veces se cae', 'el sistema lo rechaza con un mensaje claro']
        ] },
        { kind: 'p', mt: true, html: 'Quien busca "curso de desarrollo de software online" en Perú encuentra sobre todo dos tipos de oferta: cursos grabados de un lenguaje y carreras técnicas de varios años. Nuestro curso se ubica en medio: es en vivo, con un mentor que revisa su código, y se concentra en las prácticas de trabajo que una carrera enseña a lo largo de años y un curso grabado suele omitir. No reemplaza una carrera universitaria ni otorga títulos; sirve para empezar con buenos hábitos o para ordenar lo que ya se aprendió por cuenta propia.' }
      ]
    },
    {
      id: 'industria',
      eyebrow: 'La industria',
      h2: '¿Cómo está la industria del software?',
      lede: 'Crece más rápido que el resto del mercado de tecnología, según el estudio sectorial de PROMPERÚ sobre software. Mostramos sus porcentajes; los montos están en el documento original.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Mercado global de tecnologías de la información por segmento, 2025', head: ['Segmento', 'Participación en 2025', 'Variación 2025 frente a 2024'], rows: [
          ['Servicios', '60,1 %', '9,7 %'],
          ['Software', '22,3 %', '12,7 %'],
          ['Hardware', '17,6 %', '9,4 %'],
          ['Total del mercado', '100,0 %', '10,3 %']
        ] },
        { kind: 'source', html: 'Fuente: PROMPERÚ, "Coyuntura sectorial para software" (documento sin fecha con datos hasta 2025), tabla "Ingresos por segmento del mercado de TI", que cita a Global Data. Se trata del mercado mundial, no del peruano. Reproducimos solo la participación y la variación; el documento publica también los ingresos.' },
        { kind: 'p', mt: true, html: 'El estudio de PROMPERÚ resume la tabla en una frase: el software es "el segmento más dinámico en el corto plazo", con un crecimiento de 12,7 % en 2025 frente a 2024. El mismo documento recoge proyecciones de la consultora que cita, y conviene leerlas como lo que son, estimaciones: que "para 2030, cerca del 80 % de las organizaciones utilizará desarrollo asistido por IA" y que el 60 % de las organizaciones adoptará marcos de seguridad Zero Trust para 2027.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que dice el Servicio Comercial de Estados Unidos',
          left: [
            'Su guía comercial de Perú, en la sección de economía digital actualizada el 22 de junio de 2026, escribe que el sector de software y servicios de TI del país "has potential for growth", con ganancias de productividad esperadas por la adopción de inteligencia artificial, computación en la nube y centros de datos.',
            'La misma guía habla de "Lima\'s dominance in the digital financial and talent sectors" y menciona una Plataforma Nacional de Talento Digital entre las iniciativas del Estado. El talento tecnológico peruano está concentrado en la capital, y las clases en línea son una manera de llegar a él desde cualquier región.'
          ],
          rightH3: 'Lo que no afirmamos',
          right: [
            'No encontramos una cifra oficial reciente de cuántos desarrolladores de software trabajan en Perú ni de sus sueldos, así que no la damos. Tampoco prometemos empleo al terminar el curso.',
            'Lo que sí podemos decir con datos es que el oficio crece en el mundo, que una parte del trabajo se contrata a distancia y en inglés, y que en el país la habilidad de programar todavía es escasa, como muestra la sección siguiente.'
          ] }
      ]
    },
    {
      id: 'desde-cero',
      eyebrow: 'Desde cero',
      h2: '¿Se puede aprender desarrollo de software desde cero y online?',
      lede: 'Sí, si el curso es en vivo y exige escribir código desde la primera semana. La mayoría de quienes empiezan con nosotros nunca programó.',
      body: [
        { kind: 'p', html: 'Partir de cero es lo normal en Perú. Para el segundo trimestre de 2026, la ENAHO del INEI estima que el 47,7 % de las personas de 15 años a más descargó, instaló y configuró software en una computadora o similar, y que solo el 12,1 % escribió alguna vez un programa con un lenguaje de programación en ese periodo. Es decir, casi nueve de cada diez adultos que se acercan al tema llegan sin haber programado, y el curso está diseñado para ellos.' },
        { kind: 'ol', items: [
          '<strong>Semanas 1 a 4: un lenguaje.</strong> Variables, condiciones, bucles, funciones y listas en Python o Java, con ejercicios cortos y una corrección en vivo de cada uno.',
          '<strong>Semanas 5 a 8: diseño.</strong> Clases y objetos, módulos, manejo de errores. Aquí entra la lección de ejemplo de esta página.',
          '<strong>Semanas 9 a 12: herramientas del oficio.</strong> Git y GitHub, pruebas automáticas, un editor configurado como en un equipo real.',
          '<strong>Semanas 13 a 16: datos y web.</strong> SQL, una base de datos pequeña y una API sencilla que la consulta.',
          '<strong>Semanas 17 a 24: un proyecto.</strong> Un sistema pequeño pero completo, diseñado por el estudiante, revisado por el mentor y documentado en inglés.'
        ] },
        { kind: 'p', mt: true, html: 'La ruta de arriba es nuestra y se ajusta a cada persona: quien dispone de más horas avanza antes, quien trabaja a tiempo completo puede ir más despacio con clases individuales. Para quien prefiere una meta externa, Python tiene un examen reconocido en todo el mundo, el PCEP, que el MINEDU eligió en 2025 para su piloto Fábrica de Programadores con mil estudiantes de los dos últimos grados de secundaria en Lima Norte. Nuestro curso de certificación PCEP y PCAP prepara para ese examen; no estamos vinculados al MINEDU ni al programa.' }
      ]
    },
    {
      id: 'diseno',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Qué significa diseñar software y no solo programar?',
      lede: 'Significa decidir quién es responsable de cada regla. Esta lección, escrita por nosotros, usa un caso que conocemos bien: un grupo de clase con cupo limitado y sin alumnos repetidos.',
      body: [
        { kind: 'code', label: 'Versión 1: un diccionario sin reglas', lang: 'Python', code: V1, note: 'Pregunta del mentor antes de ejecutar: "How many students can this group hold, and how many will it end up with?"' },
        { kind: 'code', label: 'Salida de la versión 1', lang: 'Salida', code: V1_OUT, note: 'Copiado tal cual de nuestra ejecución con Python 3: cinco inscritos en un grupo de tres, y Ana dos veces.' },
        { kind: 'p', mt: true, html: 'La versión 1 no tiene errores de sintaxis y corre sin quejarse. El problema es de diseño: el cupo existe como dato, pero nadie lo hace cumplir. Cualquier parte del programa puede añadir un nombre a la lista, y basta con que una sola se olvide de revisar el cupo para que el grupo quede con cinco personas. En un sistema real, ese olvido se paga con dos alumnos que se presentan a una clase que no tiene sitio para ellos.' },
        { kind: 'code', label: 'Versión 2: la clase protege sus propias reglas', lang: 'Python', code: V2, note: 'La única forma de inscribir es el método <code>enrol</code>, y el método se niega con <code>raise ValueError</code> cuando una regla no se cumple.' },
        { kind: 'code', label: 'Salida de la versión 2', lang: 'Salida', code: V2_OUT, note: 'Resultado exacto de correr el archivo nosotros mismos. La lista final tiene tres personas y ninguna repetida.' },
        { kind: 'ol', mt: true, items: [
          '<strong>La regla vive en un solo lugar.</strong> El cupo y la prohibición de repetidos están dentro de <code>Group</code>. Si mañana cambia el cupo, se cambia ahí y en ningún otro sitio. En inglés esto se llama mantener un <em>invariant</em>.',
          '<strong>La clase no decide qué hacer con el rechazo.</strong> Solo avisa con una excepción. Quien llama, con <code>try</code> y <code>except</code>, decide si muestra un mensaje, ofrece otro grupo o anota a la persona en una lista de espera.',
          '<strong>El mensaje dice qué pasó.</strong> "Ana is already in Python B" es más útil que "Error". Un buen mensaje ahorra horas a quien mantiene el sistema dentro de un año.',
          '<strong>El reto.</strong> Añadir un método <code>drop(student)</code> que saque a alguien del grupo y que lance un error si esa persona no estaba inscrita. Luego predecir qué imprime el programa si Rosa se retira antes de que llegue Jorge.'
        ] },
        { kind: 'p', mt: true, html: 'Elegimos un grupo de clase a propósito: nuestras clases grupales son de quince a veinte personas, y el sistema que las organiza tiene exactamente estas reglas. Es un recordatorio de que el software que usamos todos los días está lleno de pequeños invariantes que alguien tuvo que proteger. Aprender a verlos, nombrarlos y defenderlos en el código es la diferencia entre escribir programas y desarrollar software.' }
      ]
    },
    {
      id: 'ingles-ti',
      eyebrow: 'El inglés de TI',
      h2: '¿Por qué estudiar desarrollo de software en inglés?',
      lede: 'Porque los profesionales de TI en Perú tienen un inglés más bajo que el de otras áreas de oficina, según el EF EPI 2025, y su trabajo diario ocurre en ese idioma.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Puntaje de inglés por función laboral en Perú, EF EPI 2025', head: ['Función laboral', 'Puntaje', 'Banda de EF'], rows: [
          ['Estrategia y gestión de proyectos', '589', 'Alta'],
          ['Atención al cliente', '585', 'Alta'],
          ['Marketing', '565', 'Alta'],
          ['Operaciones', '554', 'Alta'],
          ['Ventas', '547', 'Moderada'],
          ['Tecnologías de la información (TI)', '522', 'Moderada'],
          ['Contabilidad y finanzas', '484', 'Baja'],
          ['Estudiantes', '482', 'Baja']
        ] },
        { kind: 'source', html: 'Fuente: índice EF EPI 2025, ficha de Perú publicada por EF Education First; puntajes por función laboral consultados el 8 de noviembre de 2026. Elegimos ocho de las trece funciones listadas. La muestra son personas que hicieron la prueba de EF, no un censo.' },
        { kind: 'p', mt: true, html: 'En la medición del EF EPI 2025 para Perú, los profesionales de TI quedan en 522 puntos, dentro de la banda moderada y por debajo de estrategia (589), atención al cliente (585) y marketing (565). Para un desarrollador eso es una desventaja concreta: la documentación, los errores, los repositorios, las preguntas en foros y las entrevistas con empresas de fuera están en inglés. Un curso dictado en ese idioma ataca la brecha mientras enseña el oficio.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Nombrar bien', p: 'Variables y funciones con nombres en inglés que se entienden solos: <code>enrol</code>, <code>capacity</code>, <code>is_full</code>.' },
          { h3: 'Escribir para otros', p: 'Mensajes de commit, descripciones de cambios y un README que cualquier colega pueda seguir.' },
          { h3: 'Hablar en reuniones', p: 'Explicar en voz alta un diseño y responder preguntas sobre él, en cada clase, frente al mentor.' }
        ] },
        { kind: 'p', mt: true, html: 'Quien ya domina el idioma por haber estudiado en un colegio bilingüe limeño puede revisar <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>, una página escrita en inglés para ese perfil.' }
      ]
    },
    {
      id: 'seguro',
      eyebrow: 'Software seguro',
      h2: '¿Qué es el desarrollo seguro de software?',
      lede: 'Es escribir el código pensando desde el inicio en lo que puede salir mal a propósito, no solo por accidente. El estudio de PROMPERÚ lo resume en una frase: la seguridad deja de ser un módulo adicional y pasa a integrarse desde el diseño del software.',
      body: [
        { kind: 'two',
          leftH3: 'Hábitos que enseñamos desde el principio',
          left: [
            'No confiar en lo que llega de afuera: todo dato que escribe un usuario o que envía otro sistema se valida antes de usarse, como hace el método <code>enrol</code> con los nombres repetidos.',
            'No guardar contraseñas ni claves dentro del código, y no subirlas nunca a un repositorio público. Se usan variables de entorno y archivos que Git ignora.'
          ],
          rightH3: 'Hábitos que llegan después',
          right: [
            'Consultas a bases de datos con parámetros, nunca armando el texto de la consulta a mano, para evitar inyecciones de SQL.',
            'Dar a cada parte del sistema el mínimo de permisos que necesita, y registrar lo que pasa para poder investigar un incidente.'
          ] },
        { kind: 'p', mt: true, html: 'Quien quiere profundizar en seguridad tiene en el catálogo un curso de hacking ético, siempre con fines defensivos y sobre sistemas propios o autorizados. Para el resto, la seguridad no es un curso aparte: es una pregunta que el mentor hace en cada revisión de código. ¿Qué pasa si alguien escribe esto a propósito?' }
      ]
    },
    {
      id: 'competir',
      eyebrow: 'Programación competitiva',
      h2: '¿Sirve la programación competitiva para desarrollar software?',
      lede: 'Sirve para pensar algoritmos con rapidez y precisión, una parte valiosa del oficio, aunque no la única. En Perú tiene una tradición joven.',
      body: [
        { kind: 'p', html: 'La Olimpiada Peruana de Informática, que organiza la UTEC para estudiantes de secundaria, admite C++ o Python en su primera fase y solo C++ en la final presencial, según su reglamento de 2025. Según las estadísticas oficiales de la Olimpiada Internacional de Informática (IOI), Perú participa desde 2022, ha llevado 13 concursantes y suma una medalla de bronce. Para adultos y universitarios, el equivalente son los concursos en línea y las entrevistas técnicas, que usan el mismo tipo de problemas.' },
        { kind: 'p', html: 'Si en su familia hay un estudiante de secundaria con interés en la OPI, la página de <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-san-isidro-lima">vacaciones útiles de programación en San Isidro</a> propone un verano de preparación antes de las fechas de inscripción, y la de <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">clases de programación e IA en Perú</a> reúne todos los cursos por edad. Ni la UTEC ni la olimpiada tienen relación con nosotros.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progreso',
    h2: '¿Cómo se sabe si ya desarrolla software?',
    lede: 'Usamos cinco niveles propios, cada uno con una evidencia que el mentor puede revisar.',
    table: { caption: 'Cinco niveles de desarrollo de software (nuestros)', head: ['Nivel', 'Lo que la persona hace', 'Evidencia'], rows: [
      ['1. Escribe', 'resuelve ejercicios cortos en un lenguaje', 'ejercicios que corren sin ayuda'],
      ['2. Organiza', 'divide un programa en funciones y módulos', 'un proyecto pequeño con archivos separados'],
      ['3. Diseña', 'usa clases que protegen sus reglas', 'una clase como Group, con su método que rechaza datos inválidos'],
      ['4. Verifica', 'escribe pruebas automáticas y usa Git', 'un repositorio con pruebas que pasan y commits claros'],
      ['5. Entrega', 'construye un sistema que otra persona puede usar y mantener', 'un proyecto final documentado en inglés']
    ] },
    left: { h3: 'Para quien empieza', ps: [
      'El salto del nivel 2 al 3 cuesta: pensar en objetos y responsabilidades es una forma nueva de ver los programas. Es normal que tome varias semanas.',
      'Una buena señal es que empiece a preguntarse "¿a quién le toca revisar esto?" antes de escribir.'
    ] },
    right: { h3: 'Para quien ya programa', ps: [
      'Muchas personas autodidactas llegan con nivel 2 y saltan al 4 sin pasar por el 3. El curso les pide volver al diseño.',
      'Las pruebas automáticas suelen ser la parte más nueva y la que más cambia la manera de trabajar.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para desarrolladores',
    lede: 'Para mayores de edad, con mentor en vivo y en inglés; cada uno admite modalidad grupal o individual.',
    bands: [
      { num: 'I', h3: 'Fundamentos', sub: 'Lenguajes y certificación', courses: [
        { code: 'DSO / FUND / 01', slug: 'c-programming-course-for-college-beginners', title: 'C para principiantes', blurb: 'Memoria, punteros y cómo funciona una computadora por dentro.' },
        { code: 'DSO / FUND / 02', slug: 'cpp-programming-complete-masterclass-college', title: 'C++', blurb: 'El lenguaje de la programación competitiva y de los sistemas exigentes.' },
        { code: 'DSO / FUND / 03', slug: 'pcep-pcap-python-certification-course', title: 'Certificación PCEP y PCAP', blurb: 'Preparación para los exámenes de Python reconocidos en todo el mundo.' }
      ] },
      { num: 'II', h3: 'Trabajo en equipo', sub: 'Herramientas del oficio', courses: [
        { code: 'DSO / EQ / 01', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Git avanzado para profesionales', blurb: 'Ramas, rebase, revisiones y flujos de trabajo de equipos grandes.' },
        { code: 'DSO / EQ / 02', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'Bases de datos relacionales, diseño y consultas.' },
        { code: 'DSO / EQ / 03', slug: 'competitive-programming-masterclass-college', title: 'Programación competitiva', blurb: 'Algoritmos bajo presión de tiempo, para concursos y entrevistas.' }
      ] },
      { num: 'III', h3: 'Software moderno', sub: 'IA, automatización y seguridad', courses: [
        { code: 'DSO / MOD / 01', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'Agentes de código', blurb: 'Codex y Claude Code con revisión humana de cada cambio, solo adultos.' },
        { code: 'DSO / MOD / 02', slug: 'python-ai-automation-masterclass-college', title: 'Automatización con Python', blurb: 'Scripts, extracción de datos e IA aplicada a tareas repetitivas.' },
        { code: 'DSO / MOD / 03', slug: 'ethical-hacking-masterclass-complete', title: 'Hacking ético', blurb: 'Seguridad defensiva sobre sistemas propios o autorizados.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo es el trabajo en cada sesión?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes de la jornada', l: 'Una sesión temprano, antes del trabajo o de la universidad.' },
      { time: 'Al final del día', l: 'Para quien solo tiene libre la noche.' },
      { time: 'Individual', l: 'Fechas y horas pactadas con su mentor cada semana.' }
    ],
    cells: [
      { h3: 'Revisión de código', p: 'El mentor lee lo que usted escribió y pregunta por cada decisión.' },
      { h3: 'Repositorio propio', p: 'Desde la primera semana todo queda en GitHub, con historial.' },
      { h3: 'Pruebas desde temprano', p: 'Antes de terminar el primer mes ya se escriben pruebas automáticas.' },
      { h3: 'IA con revisión', p: 'Asistentes de código permitidos para adultos, siempre con lectura humana.' },
      { h3: 'Proyecto final', p: 'Un sistema propio, documentado y explicado en inglés.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte personas de nivel parecido, o usted con su mentor.' }
    ]
  },

  projectsH2: 'Software hecho por nuestros estudiantes',
  projectsLede: 'Algunos sistemas y aplicaciones que construyeron estudiantes de otros países con el mismo método; hay más en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Lo que escribieron en Google estudiantes y familias, sin traducir, en su inglés original.',

  fees: {
    h2: 'Precio del curso de desarrollo de software',
    lede: 'La cuota mensual aparece en dólares de Estados Unidos y se cobra con tarjeta. El cargo lo transforma su banco a la divisa de su cuenta, así que el importe exacto depende de la cotización del momento.',
    free: ['Una sesión gratis con un mentor', 'Una evaluación de su punto de partida', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte personas de nivel parecido', 'Mentor estable durante el curso', 'Dos sesiones en vivo a la semana', 'Se paga mes a mes y se puede dejar'],
    one: ['Usted y su mentor, sin nadie más', 'Su ritmo, su lenguaje y su proyecto', 'Horario pactado semana a semana']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Desarrollo de software en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todo el curso se imparte en inglés, en sesiones en vivo por videollamada. Es una ventaja deliberada: el desarrollo de software se hace en inglés, y el EF EPI 2025 da a los profesionales de TI en Perú 522 puntos, en la banda moderada. Practicar ese inglés en cada clase, con un mentor que habla claro y espera la respuesta, es parte del valor.' },
      { q: '¿Puedo empezar sin saber nada de programación?', a: 'Sí. El curso arranca desde cero con Python o Java. Según el INEI, solo el 12,1 % de los peruanos de 15 años a más escribió un programa en el segundo trimestre de 2026, así que empezar sin experiencia es lo habitual.' },
      { q: '¿Python o Java como primer lenguaje?', a: 'Python para casi todos, por su lectura sencilla y sus usos en web, datos y automatización. Java si su meta son sistemas empresariales o Android nativo. En la clase gratis el mentor le ayuda a decidir.' },
      { q: '¿Cuánto dura el curso?', a: 'Nuestra ruta de ejemplo para llegar a un proyecto propio desde cero es de unas veinticuatro semanas a dos sesiones semanales; la duración real depende de usted.' },
      { q: '¿Se usa inteligencia artificial en el curso?', a: 'Sí, como herramienta. Los adultos usan asistentes de código, incluidos los que piden 18 años, siempre con pruebas propias y revisión de cada cambio. Primero se aprende a escribir y diseñar sin ayuda.' },
      { q: '¿Me preparan para una certificación?', a: 'Podemos preparar para los exámenes PCEP y PCAP de Python en un curso específico. El examen lo toma la entidad que lo administra, no nosotros.' },
      { q: '¿En qué horario son las sesiones?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La diferencia con la India es de 10 horas y 30 minutos durante todo el año: las 9:00 p. m. en Perú son las 7:30 a. m. del día siguiente para su mentor.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta y en dólares estadounidenses; la conversión la hace su banco. La sesión de prueba es gratuita y no pide tarjeta.' },
      { q: '¿Garantizan empleo al terminar?', a: 'No. No prometemos trabajo ni sueldos. El curso deja un repositorio con proyectos propios, pruebas y documentación en inglés, que es lo que usted puede mostrar.' },
      { q: '¿El curso tiene validez universitaria?', a: 'No. No estamos vinculados a la SUNEDU, al MINEDU ni a ninguna universidad, y no otorgamos créditos ni títulos. Al completar el curso se entrega una constancia de finalización propia de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Lecturas relacionadas con el oficio; casi todas están en inglés.',
    items: [
      { href: '/coding-roadmap', label: 'Coding roadmap', p: 'El orden en que conviene aprender cada tema.' },
      { href: '/real-coding-classes', label: 'Real coding classes', p: 'Por qué insistimos en escribir código de verdad.' },
      { href: '/ai-agents-course', label: 'AI agents course', p: 'Cómo se construye y se revisa un agente de IA.' },
      { href: '/data-science-course', label: 'Data science course', p: 'Para quien quiere llevar el software al análisis de datos.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Qué pasa en una sesión con mentor.' },
      { href: '/courses', label: 'All courses', p: 'Todos los cursos, de la niñez a la vida profesional.' }
    ]
  },

  start: {
    h2: 'Reserve una sesión gratis de desarrollo de software',
    lede: 'La sesión de prueba empieza por su objetivo: el mentor lo escucha, le propone un ejercicio corto y lo resuelven juntos en pantalla compartida. Con eso le recomienda lenguaje, curso y formato, sin compromiso.',
    readFirst: 'Si quiere leer antes: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describe nuestras sesiones y <a class="ag-inline-link" href="/coding-roadmap">Coding roadmap</a> propone un orden de estudio (ambas en inglés).',
    note: 'Sesiones por videollamada con mentores en la India, siempre en vivo y en inglés. Por WhatsApp respondemos rápido, y puede escribirnos en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Desarrollo de software', links: [
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python desde cero' },
        { href: '/courses/complete-java-programming-masterclass-college', label: 'Java' },
        { href: '/courses/data-structures-algorithms-masterclass-college', label: 'Estructuras de datos' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para seguir', links: [
        { href: '/coding-roadmap', label: 'Ruta de estudio' },
        { href: '/real-coding-classes', label: 'Código de verdad' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Cada regla vive en un solo lugar'
  },

  personalityCss: `
.ag-root.ag-dso .ag-hero h1 { letter-spacing: -0.012em; max-width: 23ch; }
.ag-root.ag-dso .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-dso .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-dso .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-dso .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'PROMPERÚ Coyuntura sectorial para software (shares, growth and projections; money figures not printed); US Commercial Service Peru CCG Digital Economy (22 June 2026); INEI TIC bulletin II trimestre 2026 Cuadro 4.1; MINEDU Fábrica de Programadores press note; EF EPI 2025 Peru page (job functions); UTEC Reglamento OPI 2025; IOI statistics for Peru. Read 8 November 2026, regrepped 9 November 2026. The programming-versus-software table, the 24-week route, the levels and the example are our own.',
    localProject: 'A class group that protects its own rules, in Python: version 1 stores the group as a dictionary and appends five names to a capacity of three, printing [\'Ana\', \'Luis\', \'Ana\', \'Rosa\', \'Jorge\'] 5 of 3; version 2 moves the rules into class Group, whose enrol method raises ValueError for a repeat or a full group, and the caller catches it, printing "refused: Ana is already in Python B" and "refused: Python B is full (3)" and ending with three distinct students. Lesson family: a class guards its own invariant; raise and try/except.',
    requiredMentions: ['refused: Python B is full (3)', 'refused: Ana is already in Python B', '5 of 3', 'el segmento más dinámico en el corto plazo', 'cerca del 80 % de las organizaciones utilizará desarrollo asistido por IA', 'los profesionales de TI quedan en 522 puntos', 'ha llevado 13 concursantes y suma una medalla de bronce', 'Cada regla vive en un solo lugar', 'el 47,7 % de las personas de 15 años a más descargó, instaló y configuró software'],
    sources: [
      { claim: 'IT market shares 2025 (services 60.1, software 22.3, hardware 17.6) and growth 2025 vs 2024; AI-assisted development and Zero Trust projections.', url: 'https://repositorio.promperu.gob.pe/server/api/core/bitstreams/632b2c71-b8c1-4b39-8134-5f057956962c/content' },
      { claim: 'Peru software and IT services sector has potential for growth; Lima dominance in digital talent.', url: 'https://www.trade.gov/country-commercial-guides/peru-digital-economy' },
      { claim: 'INEI 2026: 47.7% installed software, 12.1% wrote a program (15+).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Fábrica de Programadores: Python and PCEP for 1,000 students in Lima Norte.', url: 'https://www.gob.pe/institucion/minedu/noticias/1214050-minedu-impulsa-iniciativa-fabrica-de-programadores-para-formar-a-escolares-con-certificacion-internacional-en-programacion' },
      { claim: 'EF EPI 2025 Peru: scores by job function, IT 522 moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'OPI 2025: C++ or Python in Fase 1, only C++ in Fase 2.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'IOI: Peru first participated in 2022, 13 contestants, 1 bronze.', url: 'https://stats.ioinformatics.org/countries/PER' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; classes are live, online and in English only, said in the capsule and in an FAQ.',
      'USD market sizes from the PROMPERÚ deck: not printed, to keep money figures off the page; shares and growth only.',
      'PROMPERÚ projections presented as facts: refused; labelled as estimates the deck cites.',
      'Number or salaries of software developers in Peru: no recent official figure found, none printed; no job promise.',
      'Any SUNEDU, MINEDU, UTEC or university link, credits or official certificate: none held.',
      'Soles prices, competitor prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

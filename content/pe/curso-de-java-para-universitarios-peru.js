// SHIP: market | Java para universitarios en Perú: la malla, algoritmos, entrevistas y Spring Boot | reference identity vs value equality: == against equals(), HashSet, records
'use strict';
// Curso de Java para universitarios (ag- Spanish-language door, Peru cluster row PE095, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the university student in Peru who typed "curso de java en la uni" (rows.tsv PE095; KEYWORDS.md: "curso de java en
// la uni", "con spring boot", Cibertec and Tecsup as competitor context only, never priced). Spine: where Java-style
// programming sits in a computing degree, read from UTEC's published Ciencia de la Computación curriculum (Programación I
// in ciclo 1 through Programación Competitiva in ciclo 7) and the ciclo 2 object-oriented course of two engineering
// careers; what employers test (data structures, objects, equality); which Java a student should use (Oracle roadmap:
// Java 17 Premier Support until September 2026; Spring Boot 4.1.2 needs Java 17+); English at university age (EF EPI 2025);
// one original lesson compiled with javac 21 on == versus equals() and records in a HashSet; clock table.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-java-para-universitarios-peru/
// and src-pages/_w2c/, fetched 2026-11-09 with curl; facts-market raw copies fetched 2026-11-08):
//  UTEC, Ciencia de la Computación (utec.edu.pe/carreras/ciencia-de-la-computacion, _w2c/utec-cs.html): "Duración de la
//    carrera 10 semestres (200 créditos)"; "Ciclo 1 Total: 20 créditos ... Programación I 4 créditos"; "Programación II 2
//    créditos Prerrequisito: Programación I"; ciclo 3 "Bases de Datos I 4 créditos Prerrequisito: Programación II -
//    Matemáticas Discretas I"; ciclo 4 "Programación Funcional 4 créditos", "Algoritmos y Estructuras de Datos 4 créditos
//    Prerrequisito: Programación II"; ciclo 5 "Análisis y Diseño de Algoritmos 4 créditos"; ciclo 6 "Ingeniería de
//    Software 4 créditos Prerrequisito: Cloud Computing - Programación Funcional"; ciclo 7 "Programación Competitiva 3
//    créditos Prerrequisito: Análisis y Diseño de Algoritmos".
//  UTEC, Ingeniería Industrial and Ingeniería Civil (_w2c/utec-ingenieria-*.html): ciclo 2 "Programación Orientada a
//    Objetos 4 créditos Prerrequisito: Programación I".
//  Oracle, Java SE Support Roadmap (_w2c/oracle-roadmap.html): "17 (LTS) September 2021 September 2026**** September
//    2029****"; "21 (LTS) September 2023 September 2028****"; "25 (LTS) September 2025 September 2030****"; "Java SE 8, 11,
//    17, 21, and 25 are LTS releases".
//  Spring Boot System Requirements (_w2c/spring-sysreq.html): "Spring Boot 4.1.2 requires at least Java 17 and is
//    compatible with versions up to and including Java 27."
//  JEP 395 not fetched; records described only from our own compiled output (javac 21 accepts record).
//  SUNEDU press note 15 September 2021 (facts-market/src/sunedu_1_1m.txt): "94 universidades licenciadas (46 públicas y 48
//    privadas) que albergan a 1 millón 100 mil de estudiantes universitarios, distribuidos en 5500 programas".
//  EF EPI 2025 Peru page (facts-market/src/ef_peru.raw/.txt): "ageGroup1Score":469 (18-20), "ageGroup2Score":540 (21-25),
//    "ageGroup3Score":559 (26-30); "IT : 522"; "Student : 482".
//  Embassy of India, Lima, India-Peru brief (facts-market/src/emb_india_peru.txt): "Tata Consultancy Services have a
//    sizeable operation in Lima and is increasing its presence in Peru providing over 1300 jobs locally."
//  INEI Boletín TIC II trimestre 2026: "el 97,3% de la población de 19 a 24 años utilizó Internet".
//  Course facts (content/courses/data): complete-java-programming-masterclass-college "10-12 months (44-52 weeks)",
//    "Complete beginner (18+); college students, graduates and working professionals", "core Java, collections and
//    concurrency, then Spring Boot APIs with security and tests"; data-structures-algorithms-masterclass-college "10-12
//    months (44-52 weeks)"; mysql-database-complete-masterclass-college "7-8 months (28-32 weeks)".
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own example, compiled and run with OpenJDK javac/java 21.0.12.1 (Igualdad.java and Registro.java in the src-pages
//    folder), exact output: "a == b      : true" / "a == c      : false" / "a == d      : false" / "a.equals(c) : true" /
//    "a.equals(d) : true" / "Set size    : 1"; Registro: "class  set size: 2" / "record set size: 1".
// Lesson family: reference identity versus value equality; == compares references, equals() compares contents, a HashSet
//    relies on equals() and hashCode(), and a record gets both for free.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const JAVA = [
  'import java.util.HashSet;',
  'import java.util.Set;',
  '',
  'public class Igualdad {',
  '    public static void main(String[] args) {',
  '        String a = "spring";',
  '        String b = "spr" + "ing";',
  '        String parte = "spr";',
  '        String c = parte + "ing";',
  '        String d = new String("spring");',
  '',
  '        System.out.println("a == b      : " + (a == b));',
  '        System.out.println("a == c      : " + (a == c));',
  '        System.out.println("a == d      : " + (a == d));',
  '        System.out.println("a.equals(c) : " + a.equals(c));',
  '        System.out.println("a.equals(d) : " + a.equals(d));',
  '',
  '        Set<String> cursos = new HashSet<>();',
  '        cursos.add(a);',
  '        cursos.add(c);',
  '        cursos.add(d);',
  '        System.out.println("Set size    : " + cursos.size());',
  '    }',
  '}'
].join('\n');

const OUT = [
  'a == b      : true',
  'a == c      : false',
  'a == d      : false',
  'a.equals(c) : true',
  'a.equals(d) : true',
  'Set size    : 1'
].join('\n');

const JAVA2 = [
  'import java.util.HashSet;',
  'import java.util.Set;',
  '',
  'public class Registro {',
  '    static class AlumnoClase {',
  '        String codigo;',
  '        AlumnoClase(String codigo) { this.codigo = codigo; }',
  '    }',
  '',
  '    record AlumnoRecord(String codigo) { }',
  '',
  '    public static void main(String[] args) {',
  '        Set<AlumnoClase> v1 = new HashSet<>();',
  '        v1.add(new AlumnoClase("20271234"));',
  '        v1.add(new AlumnoClase("20271234"));',
  '        System.out.println("class  set size: " + v1.size());',
  '',
  '        Set<AlumnoRecord> v2 = new HashSet<>();',
  '        v2.add(new AlumnoRecord("20271234"));',
  '        v2.add(new AlumnoRecord("20271234"));',
  '        System.out.println("record set size: " + v2.size());',
  '    }',
  '}'
].join('\n');

const OUT2 = [
  'class  set size: 2',
  'record set size: 1'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Java para universitarios' },
  slug: 'curso-de-java-para-universitarios-peru',
  code: 'jau',
  accent: '#006949',
  accentRationale: 'Curso de Java para universitarios: a campus-lawn green #006949, the colour of the gardens most Lima university campuses are built around, set between the drafting green of the engineering Python door and the coffee green of the Java door; contrast 5.47 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de Java para universitarios',
  title: 'Curso de Java para universitarios en Perú, en inglés',
  description: 'Curso de Java para universitarios en Perú, en vivo, en línea y en inglés: objetos, estructuras de datos, entrevistas y Spring Boot, en grupo o individual.',
  ogDescription: 'Java para universitarios en Perú, en inglés: qué pide la malla ciclo a ciclo, qué preguntan las entrevistas, qué Java usar y una lección sobre == y equals().',
  twitterDescription: 'Java en vivo y en inglés para universitarios en Perú: de Programación I a algoritmos, entrevistas y Spring Boot.',
  pageName: 'Curso de Java para universitarios',
  webPageDescription: 'Guía para universitarios en Perú que buscan un curso de Java en vivo y en inglés: dónde aparece la programación en una malla de computación publicada por la propia universidad, qué temas de Java se evalúan en las entrevistas técnicas, qué versión usar según la hoja de ruta de Oracle y los requisitos de Spring Boot, y una lección propia sobre igualdad de objetos, compilada y ejecutada.',
  courseDescription: 'Clases en vivo y en línea de Java para universitarios y egresados en todo el Perú, dictadas solo en inglés: Java a fondo, programación orientada a objetos, colecciones, estructuras de datos y algoritmos, y aplicaciones con Spring Boot, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Java para universitarios',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#ciclos', label: 'Ciclo a ciclo' },
    { href: '#uni', label: 'Java en la uni' },
    { href: '#entrevistas', label: 'Entrevistas' },
    { href: '#igualdad', label: 'Lección' },
    { href: '#hora', label: 'Horario' }
  ],
  eyebrow: 'Perú &middot; Java para universitarios &middot; Desde los 18 años',
  h1: 'Curso de Java para universitarios, en vivo y en inglés',
  lede: 'Para muchos estudiantes de computación, sistemas o software en Perú, Java es el lenguaje con el que se aprende de verdad la programación orientada a objetos, y el que vuelve una y otra vez en los cursos de algoritmos, en los proyectos de ingeniería de software y en las entrevistas de prácticas. Esta página explica cómo acompañamos ese recorrido con clases en inglés, sin reemplazar a su universidad.',
  secondaryCta: { href: '#igualdad', label: 'Ver una lección de Java' },
  wa: 'Hola Modern Age Coders, soy universitario en Perú y quiero un curso de Java en inglés. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; Java para la carrera y para las entrevistas, en inglés',
  spec: [
    ['Para quién', 'Universitarios, egresados y quien cambia de carrera'],
    ['Temas', 'Objetos, colecciones, algoritmos, Spring Boot'],
    ['Idioma', 'Inglés, al ritmo del estudiante'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Horario', 'Cualquier día, a cualquier hora, ajustable por ciclo'],
    ['Universidades', 'Ningún convenio: acompañamos, no reemplazamos']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Modern Age Coders ofrece a universitarios de todo el Perú un curso de Java en vivo, en línea y en inglés: programación orientada a objetos, colecciones, estructuras de datos y algoritmos, preparación para entrevistas técnicas y aplicaciones con Spring Boot. Las clases las dicta por videollamada un mentor en la India, que revisa su código en pantalla y se adapta a lo que pide su ciclo. No tenemos convenio con ninguna universidad. Puede tomar clase grupal o individual, en el día y la hora que le acomoden, y probar primero con una clase gratis.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para un universitario que estudia Java',
    lede: 'El lenguaje a fondo, los algoritmos que se evalúan en la carrera y en las entrevistas, y la base de datos que toda aplicación real necesita.',
    items: [
      { course: 'complete-java-programming-masterclass-college', code: 'JAU / 01', title: 'Java de cero a Spring Boot', alt: 'Imagen del curso de Java para universitarios', note: 'Para mayores de 18, de diez a doce meses. Java a fondo, colecciones, concurrencia y, al final, APIs con Spring Boot, seguridad y pruebas.' },
      { course: 'data-structures-algorithms-masterclass-college', code: 'JAU / 02', title: 'Estructuras de datos y algoritmos', alt: 'Imagen del curso de estructuras de datos y algoritmos', note: 'De diez a doce meses, desde cero. Listas, árboles, grafos, ordenamiento y complejidad, practicados como en una entrevista técnica.' },
      { course: 'mysql-database-complete-masterclass-college', code: 'JAU / 03', title: 'Bases de datos con MySQL', alt: 'Imagen del curso de MySQL para universitarios', note: 'De siete a ocho meses. Consultas SQL, diseño de tablas y administración, para conectar sus programas en Java con datos reales.' }
    ]
  },

  sections: [
    {
      id: 'ciclos',
      eyebrow: 'Ciclo a ciclo',
      h2: '¿En qué ciclos de la carrera se usa Java o programación orientada a objetos?',
      lede: 'Desde el primero y hasta casi el final. Una malla de computación publicada por una universidad peruana muestra cómo la programación crece por capas: primero el lenguaje, luego las estructuras de datos, después los algoritmos y, al final, el software en equipo.',
      body: [
        { kind: 'table', numCols: [2], caption: 'Cursos de programación en la malla de Ciencia de la Computación de la UTEC', head: ['Ciclo', 'Curso', 'Créditos', 'Prerrequisito publicado'], rows: [
          ['1', 'Programación I', '4', 'Ninguno'],
          ['2', 'Programación II', '2', 'Programación I'],
          ['3', 'Bases de Datos I', '4', 'Programación II y Matemáticas Discretas I'],
          ['4', 'Algoritmos y Estructuras de Datos', '4', 'Programación II'],
          ['4', 'Programación Funcional', '4', 'No figura'],
          ['5', 'Análisis y Diseño de Algoritmos', '4', 'Fundamentos Matemáticos de Computación y Algoritmos y Estructuras de Datos'],
          ['6', 'Ingeniería de Software', '4', 'Cloud Computing y Programación Funcional'],
          ['7', 'Programación Competitiva', '3', 'Análisis y Diseño de Algoritmos']
        ] },
        { kind: 'source', html: 'Fuente: Universidad de Ingeniería y Tecnología (UTEC), página de la carrera de Ciencia de la Computación en utec.edu.pe, leída el 9 de noviembre de 2026; la carrera dura 10 semestres (200 créditos). La malla no indica en qué lenguaje se dicta cada curso. Elegimos esta malla porque está publicada completa en texto; no estamos vinculados a la UTEC.' },
        { kind: 'p', mt: true, html: 'La tabla muestra una cadena: sin Programación II no se entra a Algoritmos y Estructuras de Datos, y sin ese curso no se llega a Análisis y Diseño de Algoritmos ni a Programación Competitiva. Quien aprueba Programación I con lo justo arrastra ese vacío durante tres o cuatro ciclos. Por eso muchos universitarios buscan un curso de Java aparte: no para adelantar créditos, sino para que la base deje de tambalear.' },
        { kind: 'p', html: 'En las ingenierías pasa algo parecido. En las mallas de Ingeniería Industrial e Ingeniería Civil de la misma universidad, el ciclo 2 trae "Programación Orientada a Objetos", de 4 créditos, con Programación I como prerrequisito. Clases, herencia, interfaces y encapsulamiento llegan en el segundo semestre de la carrera, cuando el estudiante todavía se está acostumbrando a programar. Es justo el tema en el que Java es más exigente y más claro a la vez.' }
      ]
    },
    {
      id: 'uni',
      eyebrow: 'Java en la uni',
      h2: '¿Qué significa buscar un "curso de Java en la uni"?',
      lede: 'Depende de quién lo escriba. Para unos, "la uni" es la universidad en general; para otros, la Universidad Nacional de Ingeniería. En los dos casos, nosotros no somos un curso de la universidad: somos clases en vivo, en inglés, que acompañan lo que usted ve allí.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que no hacemos',
          left: [
            'No dictamos cursos de ninguna universidad, no tenemos convenio con la UNI, la UTEC ni otra casa de estudios, y nuestras clases no dan créditos, notas ni convalidaciones.',
            'Tampoco resolvemos tareas, laboratorios ni exámenes de su universidad. Si un problema de su curso le preocupa, practicamos uno parecido escrito por nosotros, para que el suyo lo resuelva usted.'
          ],
          rightH3: 'Lo que sí hacemos',
          right: [
            'Le enseñamos Java desde sus fundamentos hasta Spring Boot, con un mentor fijo que conoce sus puntos débiles. Quien aprueba nuestro examen final se lleva un certificado de finalización emitido por nosotros, sin valor oficial.',
            'Ajustamos el orden de los temas a su ciclo: si en su universidad toca objetos, reforzamos objetos; si vienen los parciales de algoritmos, practicamos algoritmos.'
          ] },
        { kind: 'p', mt: true, html: 'La escala del sistema ayuda a entender por qué hay tanta demanda de refuerzo. En septiembre de 2021, una nota de la SUNEDU contaba en el Perú 94 universidades con licencia (46 de ellas públicas), con 1 millón 100 mil estudiantes en 5500 programas. Es el dato oficial más reciente que encontramos y lo damos con su fecha. Como las clases son por internet, da igual en cuál de esas universidades estudie o en qué región viva.' },
        { kind: 'p', html: 'Si todavía está en secundaria y piensa estudiar computación, el camino empieza antes: vea la <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">guía de nuestras clases para Perú</a>, con opciones por edad.' }
      ]
    },
    {
      id: 'entrevistas',
      eyebrow: 'Prácticas y entrevistas',
      h2: '¿Qué temas de Java preguntan en una entrevista de prácticas?',
      lede: 'Casi siempre los mismos: programación orientada a objetos, colecciones, igualdad de objetos, excepciones y algún problema de estructuras de datos resuelto en vivo. Rara vez preguntan por un marco de trabajo antes de comprobar que el candidato domina el lenguaje.',
      body: [
        { kind: 'table', numCols: [], caption: 'Temas de Java frecuentes en entrevistas técnicas de prácticas (nuestra lista)', head: ['Tema', 'Pregunta típica', 'Dónde lo trabajamos'], rows: [
          ['Objetos', '¿Cuál es la diferencia entre una clase abstracta y una interfaz?', 'Java de cero a Spring Boot, tramo de objetos'],
          ['Igualdad', '¿Por qué no se comparan cadenas con ==?', 'La lección de esta página'],
          ['Colecciones', '¿Cuándo usar ArrayList, LinkedList o HashMap?', 'Java, tramo de colecciones'],
          ['Complejidad', '¿Cuánto tarda buscar en una lista frente a un HashSet?', 'Estructuras de datos y algoritmos'],
          ['Excepciones', '¿Qué diferencia hay entre una excepción verificada y una no verificada?', 'Java, tramo de errores'],
          ['Spring Boot', '¿Qué hace la inyección de dependencias?', 'Tramo final del curso para mayores de 18']
        ] },
        { kind: 'source', html: 'Lista nuestra, basada en lo que nuestros mentores preparan con estudiantes universitarios. No es la lista de ninguna empresa en particular.' },
        { kind: 'p', mt: true, html: 'Las entrevistas para empresas internacionales suelen hacerse en inglés, aunque el puesto esté en Lima. La Embajada de la India en Lima informa, en su resumen de relaciones India Perú, que Tata Consultancy Services tiene una operación considerable en la capital, con más de 1300 empleos locales. Es un ejemplo de cómo el inglés técnico entra en el día a día de muchos programadores del país. No prometemos empleos ni sueldos: lo que preparamos es que usted pueda explicar su código en inglés con seguridad.' },
        { kind: 'p', html: 'En el EF EPI 2025, los peruanos de 21 a 25 años obtienen 540 puntos, nivel moderado, y quienes declaran ser estudiantes 482, por debajo del promedio nacional de 519. Practicar Java en inglés cada semana durante la carrera ataca esa brecha justo antes de las entrevistas. Para ver cómo trabajamos con estudiantes que ya estudian en inglés en Lima, revise la página de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">clases de programación en inglés en Lima</a>.' }
      ]
    },
    {
      id: 'version',
      eyebrow: 'Qué Java usar',
      h2: '¿Java 17, 21 o 25: cuál debe usar un universitario?',
      lede: 'Java 21 o Java 25. Si su curso usa Java 17 no hay problema para aprender, pero conviene saber que su soporte Premier de Oracle termina en septiembre de 2026, según la hoja de ruta de la propia Oracle.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice Oracle',
          left: [
            'En su hoja de ruta de soporte, Oracle marca como LTS a Java 8, 11, 17, 21 y 25. Para Java 17 indica soporte Premier hasta septiembre de 2026; para Java 21, hasta septiembre de 2028; para Java 25, hasta septiembre de 2030.',
            'Las versiones intermedias, como Java 26, reciben soporte solo hasta la siguiente. Por eso las empresas y los cursos suelen trabajar sobre una LTS.'
          ],
          rightH3: 'Lo que pide Spring Boot',
          right: [
            'Según la documentación de requisitos de Spring Boot, su versión 4.1.2 exige Java 17 como mínimo y funciona hasta Java 27. Con Java 21 o 25 usted cumple con margen.',
            'Compilamos la lección de abajo con OpenJDK 21; su comportamiento es idéntico en Java 25.'
          ] },
        { kind: 'p', mt: true, html: 'Lo importante no es la versión exacta sino no aprender con materiales de hace diez años. Los <code>record</code> que usamos en la lección, por ejemplo, no existen en Java 8, y muchas guías antiguas que circulan en internet enseñan a escribir a mano métodos que hoy el lenguaje genera solo. En clase le mostramos la forma moderna y la clásica, porque en las prácticas encontrará las dos.' }
      ]
    },
    {
      id: 'igualdad',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Por qué en Java no se comparan textos con ==?',
      lede: 'Porque el operador == compara si dos variables apuntan al mismo objeto, no si su contenido es igual. Esta lección es nuestra y la usamos con universitarios antes de entrar a colecciones; la compilamos y ejecutamos con OpenJDK 21 antes de publicarla.',
      body: [
        { kind: 'code', label: 'Igualdad.java', lang: 'Java', code: JAVA, note: 'El mentor pide predecir las seis líneas antes de ejecutar: "true or false, and why?"' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Copiado de la terminal tras <code>javac Igualdad.java</code> y <code>java Igualdad</code> con OpenJDK 21.0.12.1.' },
        { kind: 'p', mt: true, html: 'Las cuatro variables contienen la palabra "spring", pero <code>==</code> responde distinto en cada caso. <code>a == b</code> da <code>true</code> porque <code>"spr" + "ing"</code> son dos literales y el compilador los une al compilar, así que <code>b</code> termina apuntando al mismo objeto que <code>a</code>. En <code>c</code> la unión ocurre al ejecutar, con una variable de por medio, y nace un objeto nuevo: <code>false</code>. Con <code>new String</code> el objeto es nuevo a propósito: <code>false</code>. En cambio <code>equals</code> compara el contenido y responde <code>true</code> las dos veces, y el <code>HashSet</code>, que usa <code>equals</code> y <code>hashCode</code>, guarda una sola "spring": <code>Set size    : 1</code>.' },
        { kind: 'code', label: 'Registro.java', lang: 'Java', code: JAVA2, note: 'La segunda parte: el mismo código de alumno (inventado), guardado dos veces en un conjunto.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT2, note: 'Salida exacta con OpenJDK 21.0.12.1.' },
        { kind: 'ol', mt: true, items: [
          '<strong>La clase común falla.</strong> <code>AlumnoClase</code> no define <code>equals</code> ni <code>hashCode</code>, así que hereda los de <code>Object</code>, que comparan identidad. Dos alumnos con el mismo código son, para el conjunto, dos objetos distintos: tamaño 2.',
          '<strong>El record acierta.</strong> <code>AlumnoRecord</code> es un <code>record</code>: Java genera <code>equals</code> y <code>hashCode</code> a partir de sus campos. Mismo código, mismo alumno: tamaño 1.',
          '<strong>El error real.</strong> En una aplicación de matrícula, la versión con la clase común dejaría inscrito dos veces al mismo estudiante sin dar ningún error. Es el tipo de fallo que no detecta el compilador y sí detecta una entrevista.',
          '<strong>Explicar en inglés.</strong> El estudiante cierra la lección con una frase: "== compares references, equals compares values, and a HashSet needs both equals and hashCode". Si la puede decir y defender, la entendió.',
          '<strong>Reto para la casa.</strong> Añada a <code>AlumnoClase</code> un <code>equals</code> sin <code>hashCode</code>. ¿Qué tamaño imprime el conjunto ahora? Prediga, ejecute y explique.'
        ] },
        { kind: 'p', mt: true, html: 'Un asistente de IA le diría "use equals" y tendría razón. Lo que no le daría es el criterio para reconocer el mismo error dentro de un conjunto, un mapa o una base de datos, cuando no hay ningún <code>==</code> a la vista. Por eso en clase el mentor no corrige su código: le pregunta qué espera que ocurra, y deja que el resultado le muestre lo demás.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Horario',
      h2: '¿Cómo encaja el curso con los horarios de la universidad?',
      lede: 'Usted fija el día y la hora y puede cambiarlos de un ciclo a otro. Abajo, unas cuantas horas peruanas pasadas al reloj indio, que es el de su mentor; sirven de referencia, no son un calendario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'Hora de Perú y hora de la India: algunos ejemplos', head: ['Perú', 'India', 'Fecha en la India'], rows: [
          ['5:00 a. m.', '3:30 p. m.', 'Misma fecha'],
          ['7:15 a. m.', '5:45 p. m.', 'Misma fecha'],
          ['11:00 a. m.', '9:30 p. m.', 'Misma fecha'],
          ['3:30 p. m.', '2:00 a. m.', 'Fecha siguiente'],
          ['6:00 p. m.', '4:30 a. m.', 'Fecha siguiente'],
          ['10:30 p. m.', '9:00 a. m.', 'Fecha siguiente']
        ] },
        { kind: 'source', html: 'Conversión hecha por nosotros con tzdata. America/Lima: UTC-5 en cualquier mes, sin adelantar relojes, en línea con la hora oficial que difunde el INACAL. Asia/Kolkata: UTC+5:30. La India está siempre 10 horas y 30 minutos adelante.' },
        { kind: 'p', mt: true, html: 'Los universitarios tienden a elegir muy temprano o de noche, y a pausar o mover clases en semana de parciales; el mentor lo planifica con usted. La conexión rara vez es el obstáculo: casi todo joven de 19 a 24 años está en línea (97,3% entre abril y junio de 2026, de acuerdo con el INEI). Si quiere aprovechar las vacaciones entre ciclos, el plan de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027</a> muestra cómo ordenar un verano de práctica.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo saber si su Java está al nivel de la carrera?',
    lede: 'Cinco niveles propios, alineados con lo que la malla va pidiendo. No son créditos ni notas, y no sustituyen la evaluación de su universidad.',
    table: { caption: 'Cinco niveles de Java para universitarios (nuestros)', head: ['Nivel', 'Equivale más o menos a', 'Usted puede'], rows: [
      ['1. Programa sin ayuda', 'Programación I', 'resolver ejercicios con métodos, arreglos y bucles, y leer los errores de javac'],
      ['2. Diseña con objetos', 'Programación II u Orientada a Objetos', 'repartir un problema en clases con interfaces y herencia, y justificar el diseño'],
      ['3. Elige la estructura', 'Algoritmos y Estructuras de Datos', 'elegir entre lista, conjunto y mapa, y explicar el costo de cada operación'],
      ['4. Analiza y compite', 'Análisis de Algoritmos y Programación Competitiva', 'resolver problemas con límite de tiempo y demostrar por qué su solución es correcta'],
      ['5. Construye en equipo', 'Ingeniería de Software', 'entregar una API con Spring Boot, pruebas y control de versiones']
    ] },
    left: { h3: 'Durante el semestre', ps: [
      'Repase lo de la semana con un problema propio, distinto al de la clase de su universidad. Si puede resolver uno nuevo, entendió.',
      'Lleve sus programas a un repositorio desde el primer ciclo. Al buscar prácticas, eso cuenta más que cualquier lista de cursos.'
    ] },
    right: { h3: 'Antes de una entrevista', ps: [
      'Practique explicar en inglés, en voz alta, la diferencia entre == y equals, entre ArrayList y LinkedList, y entre una interfaz y una clase abstracta.',
      'Resuelva problemas con un cronómetro y en una hoja en blanco, sin autocompletar. Así suelen ser las pruebas técnicas.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más alrededor de Java',
    lede: 'Para ampliar la carrera hacia otras áreas o reforzar la base. Todos en vivo y en inglés, con el mismo mentor durante el curso.',
    bands: [
      { num: 'I', h3: 'Lenguajes vecinos', sub: 'Desde los 18 años', courses: [
        { code: 'JAU / VECINOS / 01', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin y Android', blurb: 'El idioma actual de Android, compatible con todo el código Java que usted ya escribió.' },
        { code: 'JAU / VECINOS / 02', slug: 'cpp-programming-complete-masterclass-college', title: 'C++ moderno', blurb: 'Memoria, punteros y rendimiento, útil también para programación competitiva.' },
        { code: 'JAU / VECINOS / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python de cero a avanzado', blurb: 'El segundo lenguaje de casi todo universitario de computación.' }
      ] },
      { num: 'II', h3: 'Proyectos de fin de carrera', sub: 'Aplicaciones completas', courses: [
        { code: 'JAU / PROYECTO / 01', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web completo', blurb: 'Interfaz, servidor y despliegue, para mostrar un proyecto entero.' },
        { code: 'JAU / PROYECTO / 02', slug: 'ai-ml-masterclass-complete-college', title: 'IA y machine learning', blurb: 'Modelos, aprendizaje profundo e IA generativa, desde la matemática.' },
        { code: 'JAU / PROYECTO / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Programar con asistentes de IA', blurb: 'Tres meses de trabajo con IA revisando y entendiendo cada cambio.' }
      ] },
      { num: 'III', h3: 'Si está terminando secundaria', sub: 'De 13 a 18 años', courses: [
        { code: 'JAU / ESCOLAR / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java para adolescentes', blurb: 'La misma base de Java, con juegos y proyectos para escolares.' },
        { code: 'JAU / ESCOLAR / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algoritmos para escolares', blurb: 'Lógica y estructuras de datos antes de llegar a la universidad.' },
        { code: 'JAU / ESCOLAR / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ para escolares', blurb: 'STL, algoritmos y juegos, con miras a las olimpiadas de informática.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organiza el curso para un universitario?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Antes del campus', l: 'Una sesión muy temprano, con la cabeza fresca.' },
      { time: 'Después del laboratorio', l: 'Por la noche, cuando termina la jornada.' },
      { time: 'Individual', l: 'Movible en semanas de parciales y finales.' }
    ],
    cells: [
      { h3: 'Su editor, en pantalla', p: 'Usted escribe y compila; el mentor sigue cada cambio en vivo.' },
      { h3: 'Inglés de trabajo', p: 'El vocabulario de una revisión de código y de una entrevista.' },
      { h3: 'Problemas inéditos', p: 'Ejercicios nuestros, nunca las evaluaciones de su universidad.' },
      { h3: 'Ritmo de ciclo', p: 'El orden de los temas se adapta a lo que toca en su malla.' },
      { h3: 'Un mentor para todo el curso', p: 'Quien conoce sus errores frecuentes y su forma de razonar.' },
      { h3: 'Grupo o individual', p: 'Quince a veinte universitarios de nivel parecido, o solo usted.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Una muestra de lo que construyen nuestros estudiantes mayores, en distintos lenguajes; la galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Reseñas en Google de estudiantes y familias, tal cual se publicaron, en inglés.',

  fees: {
    h2: 'Precio del curso de Java para universitarios',
    lede: 'La cuota se publica en dólares estadounidenses y se cobra con tarjeta. La conversión la hace el banco emisor según el tipo de cambio de ese día, por lo que el monto cargado puede variar ligeramente.',
    free: ['Una clase de prueba, gratis', 'Un diagnóstico de su Java actual', 'Sin tarjeta y sin compromiso'],
    group: ['Quince a veinte universitarios de nivel parecido', 'Mentor fijo', 'Dos clases en vivo por semana', 'Pago mensual, sin permanencia'],
    one: ['Solo usted y su mentor', 'Temas al compás de su ciclo', 'Horario a su medida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Curso de Java para universitarios: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las clases son en vivo, en línea y en inglés, y para un universitario eso suma: aprende Java en el idioma de su documentación, de sus errores y de muchas entrevistas técnicas. El mentor habla claro y adapta el ritmo. Lima aparece en el nivel alto de inglés en el EF EPI 2025, y hablarlo con soltura se gana practicando en cada sesión.' },
      { q: '¿Su curso es el curso de Java de la UNI?', a: 'No. Modern Age Coders es una escuela en línea independiente, sin relación con la Universidad Nacional de Ingeniería ni con otras casas de estudio. Recibimos a universitarios de todo el país, sea cual sea su universidad.' },
      { q: '¿Sirve si ya llevé Programación I?', a: 'Sí. En la clase gratis el mentor revisa qué domina y lo ubica en el punto que corresponda: objetos, colecciones o algoritmos. No tiene que repetir lo que ya sabe.' },
      { q: '¿Me ayudan con mis tareas o exámenes de la universidad?', a: 'No resolvemos tareas, laboratorios ni exámenes. Trabajamos esos mismos contenidos con ejercicios nuevos de nuestra autoría; así, cuando llegue su evaluación, la resuelve por su cuenta.' },
      { q: '¿Incluye Spring Boot?', a: 'Sí, en la parte final del curso Java de cero a Spring Boot: APIs, seguridad y pruebas. Su documentación pide como mínimo Java 17 para la versión 4.1.2.' },
      { q: '¿Qué versión de Java usan?', a: 'Una LTS reciente, Java 21 o 25. Según la hoja de ruta de Oracle, el soporte Premier de Java 17 llega hasta septiembre de 2026 y el de Java 21 hasta septiembre de 2028.' },
      { q: '¿Me preparan para entrevistas de prácticas?', a: 'Sí, en el contenido: objetos, igualdad, colecciones, complejidad y problemas en vivo, explicados en inglés. No prometemos prácticas, empleos ni sueldos.' },
      { q: '¿Cuánto dura el curso?', a: 'Según su ficha, Java de cero a Spring Boot ocupa entre 44 y 52 semanas, a razón de dos sesiones en directo semanales. Si ya tiene base, empieza más adelante y termina antes.' },
      { q: '¿Recibo un certificado?', a: 'Sí, si aprueba el examen final le entregamos un certificado de finalización. Es un documento nuestro, sin valor oficial ante la universidad o la SUNEDU, y no es una certificación de Oracle.' },
      { q: '¿Puedo mover el horario en semana de exámenes?', a: 'Sí. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Si su sesión queda a las 7:15 a. m. de Lima, su mentor la toma a las 5:45 p. m., hora india.' },
      { q: '¿En qué moneda pago?', a: 'El precio figura en dólares estadounidenses y se carga a su tarjeta, que lo convierte a su moneda. Para la sesión de prueba no hace falta pagar nada.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Lecturas para universitarios que estudian Java',
    lede: 'Material de lectura en nuestro sitio; todo en inglés, excepto la guía de Perú.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todas nuestras clases para estudiantes en Perú, por edad y tema.' },
      { href: '/java-dsa-course', label: 'Java DSA course', p: 'Estructuras de datos y algoritmos resueltos en Java.' },
      { href: '/java-oops-concepts-course', label: 'Java OOP concepts', p: 'Los conceptos de objetos que más se preguntan, con ejemplos.' },
      { href: '/data-structures-and-algorithms-course', label: 'Data structures and algorithms', p: 'El curso de algoritmos pensado para la carrera y las entrevistas.' },
      { href: '/java-classes-for-adults', label: 'Java classes for adults', p: 'Java para quien estudia o trabaja y cambia de rumbo.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Cómo transcurre una sesión con un mentor.' }
    ]
  },

  start: {
    h2: 'Reserve una clase de Java gratis',
    lede: 'Durante la sesión gratuita su mentor quiere saber en qué ciclo va y qué se le complica; le plantea un problema corto de objetos o de colecciones y escucha cómo lo razona en inglés. Luego le propone por dónde empezar y en qué formato, y usted decide.',
    readFirst: 'Para leer antes: <a class="ag-inline-link" href="/java-oops-concepts-course">Java OOP concepts</a> y <a class="ag-inline-link" href="/java-dsa-course">Java DSA course</a>, ambas en inglés.',
    note: 'Sesiones en directo por videollamada, dictadas desde la India y siempre en inglés; para consultas por WhatsApp, el castellano está bien.',
    formNote: 'Gratis, sin tarjeta y sin obligación.'
  },

  footer: {
    cols: [
      { h4: 'Java y la carrera', links: [
        { href: '/courses/complete-java-programming-masterclass-college', label: 'Java de cero a Spring Boot' },
        { href: '/courses/data-structures-algorithms-masterclass-college', label: 'Estructuras de datos y algoritmos' },
        { href: '/courses/mysql-database-complete-masterclass-college', label: 'Bases de datos con MySQL' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para leer', links: [
        { href: '/java-dsa-course', label: 'Algoritmos en Java' },
        { href: '/java-oops-concepts-course', label: 'Objetos en Java' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: '== compara referencias; equals compara valores'
  },

  personalityCss: `
.ag-root.ag-jau .ag-hero h1 { letter-spacing: -0.01em; max-width: 22ch; }
.ag-root.ag-jau .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-jau .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-jau .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-jau .ag-steps li { line-height: 1.62; }
`,

  dossier: {
    curriculumAuthority: 'UTEC Ciencia de la Computación curriculum (Programación I in ciclo 1 to Programación Competitiva in ciclo 7) and the ciclo 2 Programación Orientada a Objetos of Industrial and Civil, read 9 Nov 2026; Oracle Java SE Support Roadmap; Spring Boot system requirements (4.1.2); SUNEDU press note (15 Sep 2021); EF EPI 2025 Peru page; Embassy of India Lima India-Peru brief; INEI Boletín TIC II trimestre 2026; tzdata and INACAL for time. Course durations from our own course data. The interview list, the five levels and the lesson are our own.',
    localProject: 'Equality in Java for a Peruvian university student, compiled and run with OpenJDK javac/java 21: four Strings that all read "spring" give a == b true (compile-time constant), a == c false (runtime concatenation), a == d false (new String), equals true twice and a HashSet of size 1; then a plain class without equals and hashCode leaves the same invented student code twice in a HashSet (class  set size: 2) while a record keeps one (record set size: 1). Output pasted exactly. Lesson family: reference identity versus value equality; == against equals(), HashSet, records.',
    requiredMentions: ['a == c      : false', 'a.equals(d) : true', 'record set size: 1', '== compara referencias; equals compara valores', 'Cursos de programación en la malla de Ciencia de la Computación de la UTEC', 'Temas de Java frecuentes en entrevistas técnicas de prácticas', 'con 1 millón 100 mil estudiantes en 5500 programas', 'más de 1300 empleos locales', 'su soporte Premier de Oracle termina en septiembre de 2026', 'true or false, and why?'],
    sources: [
      { claim: 'UTEC Ciencia de la Computación: 10 semesters, 200 credits; Programación I (ciclo 1, 4), Programación II (2), Bases de Datos I (3), Algoritmos y Estructuras de Datos (4), Programación Funcional (4), Análisis y Diseño de Algoritmos (5), Ingeniería de Software (6), Programación Competitiva (7), with prerequisites.', url: 'https://utec.edu.pe/carreras/ciencia-de-la-computacion' },
      { claim: 'UTEC Ingeniería Industrial: Programación Orientada a Objetos in ciclo 2, 4 credits.', url: 'https://utec.edu.pe/carreras/ingenieria-industrial' },
      { claim: 'Java LTS releases and Premier Support dates (17 to September 2026, 21 to September 2028, 25 to September 2030).', url: 'https://www.oracle.com/java/technologies/java-se-support-roadmap.html' },
      { claim: 'Spring Boot 4.1.2 requires Java 17, compatible up to Java 27.', url: 'https://docs.spring.io/spring-boot/system-requirements.html' },
      { claim: '94 licensed universities, 1.1 million students, 5500 programmes (SUNEDU, 15 Sep 2021).', url: 'https://www.gob.pe/institucion/sunedu/noticias/522805-sunedu-gracias-al-licenciamiento-1-millon-100-mil-estudiantes-acceden-a-educacion-universitaria-de-calidad' },
      { claim: 'EF EPI 2025: 21 to 25 at 540, Student 482, Peru 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'TCS operation in Lima with over 1300 local jobs.', url: 'https://eoilima.gov.in/page/india-peru/' },
      { claim: 'Internet use 19 to 24: 97.3% (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, in the capsule and in an FAQ.',
      'Any agreement with UNI, UTEC or another university, credits, grades, convalidation or an official certificate: none; the page says so.',
      'Internship, job or salary promises (TCS is cited as context only): refused.',
      'Solving university homework, labs or exams: refused; we teach with our own problems.',
      'Claiming which language UTEC uses in each course: refused; the curriculum does not say.',
      'Typed fees, soles figures or competitor prices (Cibertec, Tecsup): refused; fees render from the template in USD.'
    ]
  }
};

// SHIP: market | Curso de Java desde cero en inglés para Perú: versiones LTS, Spring Boot, Python o Java | integer division truncates in Java, cast to double, and javac rejects a type mismatch
'use strict';
// Curso de Java en inglés (ag- Spanish-language door, Peru cluster row PE094, P4, hubGroup subjects).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the adolescent from 13 or the adult in Peru who typed "curso de java desde cero", "curso de java completo" or
// "curso de java con spring boot" (KEYWORDS.md section 1, Java row: adult and career skew; section 6: "¿Python o Java
// primero?", "¿Cuánto dura aprender Java desde cero?"). Spine: what "desde cero" means in Java and why it is stricter than
// Python; which Java version to learn (Oracle LTS roadmap, OpenJDK GA dates, JEP 330 and JEP 512 make the first program
// shorter); where Spring Boot fits (its own system requirements); Python or Java first, for a Peruvian teen (OPI rules)
// or adult; how long it takes (our course data); one original Java lesson compiled and run with javac 21; clock table.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/curso-de-java-en-ingles-peru/ and
// src-pages/_w2c/, fetched 2026-11-09 with curl; facts-school and facts-market raw copies fetched 2026-11-08):
//  Oracle, Java SE Support Roadmap (_w2c/oracle-roadmap.html): "Java SE 8, 11, 17, 21, and 25 are LTS releases. Oracle
//    intends to make future LTS releases every two years meaning the next planned LTS release is Java 29 in September
//    2027."; table "8 (LTS)** March 2014 March 2022", "11 (LTS) September 2018 September 2023", "17 (LTS) September 2021
//    September 2026****", "21 (LTS) September 2023 September 2028****", "25 (LTS) September 2025 September 2030****",
//    "29 (LTS)*** September 2027 September 2032****" (Release, GA Date, Premier Support Until).
//  OpenJDK project pages (_w2c/jdk11.html, jdk17.html, jdk21.html, jdk25.html): "JDK 11 reached General Availability on 25
//    September 2018"; "JDK 17 reached General Availability on 14 September 2021"; "JDK 21 reached General Availability on
//    19 September 2023"; "JDK 25 reached General Availability on 16 September 2025".
//  JEP 330 (_w2c/jep330.html): "Status Closed / Delivered Release 11"; "java HelloWorld.java".
//  JEP 512 (_w2c/jep512.html): "Compact Source Files and Instance Main Methods", "Status Closed / Delivered Release 25";
//    "void main() { IO.println("Hello, World!"); }"; "the infamous boilerplate of public static void main(String[] args)".
//  Spring Boot System Requirements (_w2c/spring-sysreq.html): "Spring Boot 4.1.2 requires at least Java 17 and is
//    compatible with versions up to and including Java 27."
//  OPI Reglamento 2025 (FACTS 116): Fase 1 C++ or Python; Fase 2 "Se podr´a usar solo C++."
//  EF EPI 2025 Peru page (facts-market/src/ef_peru.txt): "IT : 522"; Lima 555; Peru 519.
//  INEI Boletín TIC II trimestre 2026: "el 36,4% de los hogares del país disponía de al menos una computadora".
//  Course facts (content/courses/data): java-programming-masterclass-for-teens "10-12 months (40-48 weeks)", "Absolute
//    beginner, ages 13 to 18", "core Java, JavaFX apps, games, Minecraft mods, data structures and a Spring Boot intro";
//    complete-java-programming-masterclass-college "10-12 months (44-52 weeks)", "Complete beginner (18+)", "core Java,
//    collections and concurrency, then Spring Boot APIs with security and tests"; "Certificate from Modern Age Coders,
//    awarded on passing the final exam".
//  Time: tzdata America/Lima UTC-5 (no DST), Asia/Kolkata UTC+5:30; India 10 h 30 min ahead.
// Our own example, compiled and run with OpenJDK javac/java 21.0.12.1 (Promedio.java, TipoIncorrecto.java in the src-pages
//    folder), exact output: "Sum: 58" / "int average: 14" / "double average: 14.5" / "7 / 2 = 3, 7 / 2.0 = 3.5".
//    TipoIncorrecto.java: "TipoIncorrecto.java:3: error: incompatible types: String cannot be converted to int" / "1 error".
// Lesson family: static types in Java; int / int truncates, a cast to double keeps the decimals, and javac refuses a type
//    mismatch before the program ever runs.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const JAVA = [
  'public class Promedio {',
  '    public static void main(String[] args) {',
  '        int[] notas = {14, 17, 15, 12};',
  '        int suma = 0;',
  '        for (int nota : notas) {',
  '            suma = suma + nota;',
  '        }',
  '        int promedioEntero = suma / notas.length;',
  '        double promedioReal = (double) suma / notas.length;',
  '        System.out.println("Sum: " + suma);',
  '        System.out.println("int average: " + promedioEntero);',
  '        System.out.println("double average: " + promedioReal);',
  '        System.out.println("7 / 2 = " + (7 / 2) + ", 7 / 2.0 = " + (7 / 2.0));',
  '    }',
  '}'
].join('\n');

const OUT = [
  'Sum: 58',
  'int average: 14',
  'double average: 14.5',
  '7 / 2 = 3, 7 / 2.0 = 3.5'
].join('\n');

const JAVA2 = [
  'public class TipoIncorrecto {',
  '    public static void main(String[] args) {',
  '        int nota = "15";',
  '        System.out.println(nota);',
  '    }',
  '}'
].join('\n');

const OUT2 = [
  'TipoIncorrecto.java:3: error: incompatible types: String cannot be converted to int',
  '        int nota = "15";',
  '                   ^',
  '1 error'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Curso de Java en inglés' },
  slug: 'curso-de-java-en-ingles-peru',
  code: 'jai',
  accent: '#0D4833',
  accentRationale: 'Curso de Java en inglés: a dark coffee-plantation green #0D4833, a nod to the coffee cup Java is named for and to the coffee farms of the Peruvian selva central, the darkest accent of the Peru subject doors; contrast 8.56 on the paper #FBF8F2 (alloc.tsv) and well above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Curso de Java en inglés',
  title: 'Curso de Java en inglés desde cero, en vivo, para Perú',
  description: 'Curso de Java desde cero en vivo, en línea y en inglés para adolescentes y adultos en Perú: Java moderno, objetos y Spring Boot, en grupo o individual.',
  ogDescription: 'Java desde cero y en inglés para Perú: qué versión aprender, cuándo llega Spring Boot, Python o Java primero y una lección propia compilada con javac.',
  twitterDescription: 'Java en vivo y en inglés desde Perú: de la primera clase a Spring Boot, en grupo o individual y a la hora que usted elija.',
  pageName: 'Curso de Java en inglés',
  webPageDescription: 'Guía para quien busca un curso de Java desde cero en Perú, dictado en vivo y en inglés: qué versión de Java aprender según la hoja de ruta de Oracle, qué cambió para los principiantes con Java 25, qué requisitos tiene Spring Boot, si conviene empezar por Python o por Java, cuánto dura el camino y una lección propia sobre tipos y división entera, compilada y ejecutada.',
  courseDescription: 'Clases en vivo y en línea de Java para adolescentes desde los 13 años y adultos en todo el Perú, dictadas solo en inglés: Java desde cero, programación orientada a objetos, colecciones y, en el curso para mayores de 18, Spring Boot, en clase grupal o individual y a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Curso de Java en inglés',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#cero', label: 'Desde cero' },
    { href: '#version', label: 'Versión' },
    { href: '#spring', label: 'Spring Boot' },
    { href: '#python-o-java', label: 'Python o Java' },
    { href: '#tipos', label: 'Lección' }
  ],
  eyebrow: 'Perú &middot; Curso de Java &middot; Desde los 13 años',
  h1: 'Curso de Java en inglés desde cero, en vivo',
  lede: 'Java pide más disciplina que otros lenguajes al principio: hay que declarar tipos, compilar y respetar una estructura. A cambio, enseña a pensar con orden y es el lenguaje de muchísimos sistemas empresariales y de Android. Aquí explicamos cómo es aprenderlo desde cero en inglés, desde Perú, y qué esperar de cada etapa.',
  secondaryCta: { href: '#tipos', label: 'Ver una lección de Java' },
  wa: 'Hola Modern Age Coders, quiero llevar un curso de Java desde cero en inglés desde Perú. ¿Puedo reservar una clase gratis?',
  heroNote: 'Clases en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; Java explicado en inglés, línea por línea',
  spec: [
    ['Para quién', 'Adolescentes desde 13 años y adultos'],
    ['Nivel de entrada', 'Ninguno: se empieza de cero'],
    ['Idioma', 'Inglés claro, al ritmo del estudiante'],
    ['Formato', 'Grupo de quince a veinte, o individual'],
    ['Horario', 'Cualquier día y a cualquier hora'],
    ['Al final', 'Proyectos propios y, para mayores de 18, Spring Boot']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, hay un curso de Java desde cero en vivo, en línea y en inglés para el Perú: el de Modern Age Coders, abierto a adolescentes desde los 13 años y a adultos que nunca programaron. Desde la India, su mentor le enseña por videollamada tipos, clases y objetos, colecciones y, en el curso para mayores de 18, aplicaciones con Spring Boot, revisando su código en pantalla. Usted elige clase grupal o individual, el día y la hora que quiera; la sesión de prueba no se cobra y sirve para ubicar su punto de partida.',

  picks: {
    eyebrow: 'Cursos recomendados',
    h2: 'Tres cursos para aprender Java en inglés',
    lede: 'Dos rutas de Java según la edad, y una tercera para quien quiere llevar Java al celular con su pariente moderno, Kotlin.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'JAI / 01', title: 'Java para adolescentes', alt: 'Imagen del curso de Java para adolescentes', note: 'Entre 13 y 18 años, sin experiencia. Java base, aplicaciones con ventanas, juegos, estructuras de datos y una introducción a Spring Boot, en diez a doce meses.' },
      { course: 'complete-java-programming-masterclass-college', code: 'JAI / 02', title: 'Java de cero a Spring Boot', alt: 'Imagen del curso de Java para universitarios y profesionales', note: 'Desde los 18 años. Java a fondo, colecciones y concurrencia, y luego APIs con Spring Boot, seguridad y pruebas, en diez a doce meses.' },
      { course: 'complete-kotlin-programming-masterclass-professional', code: 'JAI / 03', title: 'Kotlin y Android', alt: 'Imagen del curso de Kotlin y Android', note: 'Desde los 18 años. Kotlin corre en la misma máquina virtual que Java; ideal para quien quiere publicar apps de Android.' }
    ]
  },

  sections: [
    {
      id: 'cero',
      eyebrow: 'Desde cero',
      h2: '¿Se puede aprender Java desde cero sin saber programar?',
      lede: 'Sí. Java no exige experiencia previa, solo paciencia con sus reglas. La diferencia con un lenguaje como Python es que Java revisa su programa antes de ejecutarlo y no deja pasar errores de tipo, lo que al principio frustra y después ahorra horas.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Tipos declarados', p: 'En Java cada variable dice qué guarda: <code>int</code> para enteros, <code>double</code> para decimales, <code>String</code> para texto. El compilador vigila que no se mezclen. Es una disciplina que luego se agradece en cualquier lenguaje.' },
          { h3: 'Compilar y ejecutar', p: 'Primero <code>javac</code> traduce el programa y avisa de los errores; recién después <code>java</code> lo ejecuta. Leer esos avisos, que siempre están en inglés, es la primera habilidad que enseñamos.' },
          { h3: 'Objetos desde temprano', p: 'Java está construido alrededor de clases y objetos. Aprenderlo bien es aprender a dividir un problema en piezas que tienen datos y comportamiento, algo que pide cualquier equipo de software.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Mes 1: el primer programa y los tipos.</strong> Variables, operadores, entrada y salida por consola, y los primeros mensajes de error del compilador, leídos en voz alta y en inglés.',
          '<strong>Meses 2 y 3: decisiones y repeticiones.</strong> <code>if</code>, <code>switch</code>, <code>for</code> y <code>while</code>, arreglos y métodos propios. Programas pequeños pero completos, como un registro de notas.',
          '<strong>Meses 4 a 6: clases y objetos.</strong> Encapsulamiento, herencia, interfaces y excepciones. Es el corazón de Java y el tema que más se pregunta en entrevistas.',
          '<strong>Meses 7 a 9: colecciones y datos.</strong> <code>ArrayList</code>, <code>HashMap</code>, ordenamiento y búsqueda, lectura de archivos, primeras pruebas automáticas.',
          '<strong>Desde el mes 9: aplicaciones.</strong> Para adolescentes, juegos y aplicaciones con ventanas; para mayores de 18, APIs con Spring Boot y bases de datos.'
        ] },
        { kind: 'p', mt: true, html: 'Este recorrido es nuestro y orientativo; el mentor lo ajusta. Según la ficha de cada curso, Java para adolescentes dura de 10 a 12 meses (40 a 48 semanas) y Java de cero a Spring Boot, de 10 a 12 meses (44 a 52 semanas), con dos sesiones semanales en directo y ejercicios para la casa. Quien practica de forma constante escribe programas útiles hacia el tercer mes; quien deja pasar semanas sin abrir el editor tarda bastante más, sea cual sea el lenguaje.' }
      ]
    },
    {
      id: 'version',
      eyebrow: 'Qué Java aprender',
      h2: '¿Qué versión de Java conviene aprender en 2026?',
      lede: 'Una versión LTS reciente: Java 21 o Java 25. Las versiones LTS (de soporte a largo plazo) son las que usan las empresas, y Oracle publica una nueva cada dos años.',
      body: [
        { kind: 'table', numCols: [], caption: 'Versiones LTS de Java según la hoja de ruta de soporte de Oracle', head: ['Versión', 'Publicación', 'Soporte Premier de Oracle hasta'], rows: [
          ['Java 8', 'Marzo de 2014', 'Marzo de 2022'],
          ['Java 11', 'Septiembre de 2018', 'Septiembre de 2023'],
          ['Java 17', 'Septiembre de 2021', 'Septiembre de 2026'],
          ['Java 21', 'Septiembre de 2023', 'Septiembre de 2028'],
          ['Java 25', 'Septiembre de 2025', 'Septiembre de 2030'],
          ['Java 29 (planificada)', 'Septiembre de 2027', 'Septiembre de 2032']
        ] },
        { kind: 'source', html: 'Fuente: Oracle, "Oracle Java SE Support Roadmap", leída el 9 de noviembre de 2026. La misma página dice: "Java SE 8, 11, 17, 21, and 25 are LTS releases" y anuncia la siguiente LTS, Java 29, para septiembre de 2027. Las fechas futuras son planes de Oracle y pueden cambiar. Las páginas del proyecto OpenJDK fechan la disponibilidad general de JDK 21 el 19 de septiembre de 2023 y la de JDK 25 el 16 de septiembre de 2025.' },
        { kind: 'p', mt: true, html: 'Para alguien que empieza hoy, Java 25 trae una novedad pensada justo para principiantes. La propuesta JEP 512, entregada en esa versión, permite escribir el primer programa sin la famosa línea <code>public static void main(String[] args)</code>: basta con <code>void main() { IO.println("Hello, World!"); }</code>. Y desde Java 11, gracias a la JEP 330, un programa de un solo archivo se puede ejecutar directamente con <code>java HelloWorld.java</code>, sin compilar aparte. Ninguna de las dos cosas reemplaza aprender la estructura completa, pero hacen que la primera semana sea menos abrumadora.' },
        { kind: 'p', html: 'En clase empezamos con la estructura clásica de una clase con <code>main</code>, porque es la que encontrará en casi todo el código real, en los libros y en las entrevistas, y mostramos las formas nuevas como lo que son: atajos. La lección de esta página se compiló con OpenJDK 21, una LTS que sigue con soporte Premier de Oracle hasta septiembre de 2028.' }
      ]
    },
    {
      id: 'spring',
      eyebrow: 'Java con Spring Boot',
      h2: '¿Cuándo se aprende Spring Boot en un curso de Java?',
      lede: 'Después de dominar Java básico y la programación orientada a objetos, no antes. Spring Boot es un marco de trabajo para construir aplicaciones y servicios web, y da por hecho que usted ya entiende clases, interfaces, colecciones y excepciones.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que pide Spring Boot',
          left: [
            'Según su página de requisitos del sistema, "Spring Boot 4.1.2 requires at least Java 17 and is compatible with versions up to and including Java 27". Es decir, quien aprende con Java 21 o 25 está dentro de lo que la versión actual de Spring Boot exige.',
            'Además del lenguaje, hay que conocer una herramienta de construcción como Maven o Gradle, algo de HTTP y lo básico de bases de datos con SQL. Por eso Spring Boot llega en la parte final de nuestro curso para mayores de 18.'
          ],
          rightH3: 'Por qué no empezar directamente por ahí',
          right: [
            'Muchos anuncian "Java con Spring Boot" desde la primera clase. El resultado suele ser una persona que copia anotaciones como <code>@RestController</code> sin saber qué hace el código que hay detrás, y que se bloquea en el primer error que no está en el tutorial.',
            'Nuestra forma de enseñar va al revés: primero el lenguaje, después el marco. Cuando llega Spring Boot, usted entiende por qué existe cada pieza, y eso se nota en una entrevista técnica.'
          ] },
        { kind: 'p', mt: true, html: 'En el curso para adolescentes también hay una introducción a Spring Boot al final, como primer contacto con el desarrollo de servidores. En el curso para mayores de 18 el tramo es completo: APIs, seguridad, pruebas y conexión con bases de datos. En ninguno de los dos casos prometemos un empleo ni un sueldo; lo que prometemos es que usted entienda el código que escribe.' }
      ]
    },
    {
      id: 'python-o-java',
      eyebrow: 'Python o Java',
      h2: '¿Python o Java primero?',
      lede: 'Depende de la meta. Python es más rápido para empezar a hacer cosas; Java enseña más estructura desde el principio. Para muchos peruanos la respuesta la da lo que vendrá después: la universidad, una olimpiada o un tipo de trabajo.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python o Java como primer lenguaje (nuestra comparación)', head: ['Si su meta es...', 'Empiece por', 'Por qué'], rows: [
          ['Probar si la programación le gusta', 'Python', 'Menos reglas al inicio; resultados visibles en la primera clase'],
          ['Datos, ciencia o inteligencia artificial', 'Python', 'Es el lenguaje dominante en esas áreas'],
          ['Desarrollo de software en empresas', 'Java', 'Mucho software empresarial está escrito en Java'],
          ['Apps de Android', 'Java, luego Kotlin', 'Kotlin comparte la máquina virtual y el modo de pensar de Java'],
          ['La Olimpiada Peruana de Informática', 'Python, luego C++', 'Su reglamento admite Python en la Fase 1 y solo C++ en la final'],
          ['Una carrera de computación', 'Cualquiera de los dos', 'Lo que importa es aprender bien el primero']
        ] },
        { kind: 'source', html: 'Tabla nuestra. Las reglas de la Olimpiada Peruana de Informática (OPI) vienen del Reglamento OPI 2025 publicado por la UTEC: en la Fase 2 "se podrá usar solo C++". Java no figura entre los lenguajes admitidos. Modern Age Coders no tiene relación con la olimpiada ni con la universidad que la organiza.' },
        { kind: 'p', mt: true, html: 'Si usted es adolescente y le interesan las olimpiadas, Java no es la ruta; si le interesa construir aplicaciones grandes, sí lo es. Si es adulto y quiere trabajar en desarrollo de software, Java tiene la ventaja de obligarle a entender tipos y objetos, dos ideas que luego reaparecen en cualquier lenguaje. Y si aún no lo sabe, una clase gratis de Python y otra de Java le dirán más que cualquier comparación. Si se inclina por Python, vea nuestra página del curso de Python en inglés dentro de la <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">guía de clases para Perú</a>.' }
      ]
    },
    {
      id: 'tipos',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo es una clase de Java en inglés por dentro?',
      lede: 'Este ejercicio es nuestro, de las primeras semanas: sacar el promedio de cuatro notas. Parece trivial, y por eso mismo sorprende. Lo compilamos y ejecutamos con OpenJDK 21 antes de publicarlo.',
      body: [
        { kind: 'code', label: 'Promedio.java', lang: 'Java', code: JAVA, note: 'Antes de ejecutar, el mentor pregunta en inglés: "What will the int average be? And the double one?"' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Salida copiada tal cual tras <code>javac Promedio.java</code> y <code>java Promedio</code> con OpenJDK 21.0.12.1.' },
        { kind: 'p', mt: true, html: 'Las cuatro notas suman 58, y 58 entre 4 es 14,5. Pero la segunda línea dice 14. En Java, cuando se dividen dos enteros, el resultado es otro entero y los decimales se pierden sin ningún aviso: <code>7 / 2</code> da 3, no 3,5. Al convertir la suma a <code>double</code> antes de dividir, con <code>(double) suma</code>, la división ya es decimal y sale 14.5. Un registro de notas que redondea mal en silencio es un error real, de los que llegan a producción.' },
        { kind: 'code', label: 'TipoIncorrecto.java', lang: 'Java', code: JAVA2, note: 'Ahora el error contrario: guardar un texto en una variable entera.' },
        { kind: 'code', label: 'Lo que responde el compilador', lang: 'Salida', code: OUT2, note: 'Respuesta exacta de <code>javac TipoIncorrecto.java</code> con OpenJDK 21. El programa ni siquiera llega a ejecutarse.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Predecir en voz alta.</strong> El estudiante dice qué espera ver en cada línea antes de ejecutar. Casi todos dicen 14.5 en la segunda; el error de predicción es la puerta de la lección.',
          '<strong>Leer el mensaje del compilador.</strong> "incompatible types: String cannot be converted to int" se lee en clase palabra por palabra. La flecha <code>^</code> señala exactamente dónde está el problema: la línea 3.',
          '<strong>Comparar los dos errores.</strong> El primero no da ningún aviso y produce un resultado incorrecto; el segundo lo detiene todo antes de empezar. Java atrapa el segundo tipo de error por usted; el primero solo lo atrapa quien entiende los tipos.',
          '<strong>Arreglar sin borrar.</strong> Para el segundo programa hay dos soluciones: quitar las comillas, o convertir el texto con <code>Integer.parseInt("15")</code>. El estudiante explica en inglés cuándo usaría cada una.',
          '<strong>Reto para la casa.</strong> ¿Qué imprime <code>(double) (suma / notas.length)</code>, con los paréntesis en otro lugar? Escriba su predicción y compruébela.'
        ] },
        { kind: 'p', mt: true, html: 'Una herramienta de IA le corregiría el programa en un segundo. Lo que no hace es enseñarle a sospechar de un 14 cuando esperaba 14,5. Ese reflejo, mirar un resultado y preguntarse si tiene sentido, es lo que enseñamos en cada clase, en Java y en cualquier lenguaje.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Java en inglés',
      h2: '¿Por qué aprender Java en inglés si vivo en Perú?',
      lede: 'Porque todo lo que rodea a Java está en inglés: las palabras clave, los mensajes del compilador, la documentación de Oracle y de Spring, y las preguntas que se responden en internet. El que entiende esos textos sin traducir avanza más rápido.',
      body: [
        { kind: 'p', html: 'En el EF EPI 2025, quienes declaran trabajar en el área de TI en Perú obtienen 522 puntos, apenas por encima del promedio nacional de 519 y lejos de los 555 de Lima, que EF ubica en el nivel alto. Es decir, muchos profesionales de sistemas del país leen inglés técnico con esfuerzo. Aprender Java directamente en inglés convierte cada clase en práctica de ese idioma, sin sumar otra actividad a la semana.' },
        { kind: 'p', html: 'No hace falta llegar con un inglés avanzado. El mentor escribe en pantalla las palabras nuevas, habla con frases cortas y le pide que explique su código en voz alta, aunque sea con frases sencillas. Al cabo de unas semanas, términos como <em>constructor</em>, <em>override</em> o <em>null pointer</em> dejan de sonar extraños. Si su familia es de habla inglesa o su hijo estudia en un colegio bilingüe limeño, también puede leer nuestra página de <a class="ag-inline-link" href="/english-medium-coding-classes-lima">programación en inglés en Lima</a>.' },
        { kind: 'p', html: 'Un requisito práctico: Java se programa en una computadora, no en un celular. El boletín de tecnologías de la información del INEI del segundo trimestre de 2026 indica que el 36,4% de los hogares del país tiene al menos una computadora. Si en su casa hay una, aunque sea compartida, basta para todo el curso; el JDK y el editor se instalan gratis en la primera clase.' }
      ]
    },
    {
      id: 'reloj',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puedo tomar el curso de Java desde Perú?',
      lede: 'A la que usted elija, cualquier día. Estas filas convierten algunas horas de Perú al reloj de la India, donde vive su mentor; son ejemplos de conversión y no un horario de clases.',
      body: [
        { kind: 'table', numCols: [], caption: 'Ejemplos de conversión entre la hora de Perú y la de la India', head: ['Si en Perú son las', 'En la India son las', 'Allá el día es'], rows: [
          ['5:30 a. m.', '4:00 p. m.', 'El mismo'],
          ['8:00 a. m.', '6:30 p. m.', 'El mismo'],
          ['10:30 a. m.', '9:00 p. m.', 'El mismo'],
          ['1:30 p. m.', '12:00 de la medianoche', 'El siguiente'],
          ['7:30 p. m.', '6:00 a. m.', 'El siguiente'],
          ['9:30 p. m.', '8:00 a. m.', 'El siguiente']
        ] },
        { kind: 'source', html: 'Conversión nuestra con tzdata: America/Lima corresponde a UTC-5 todo el año, sin horario de verano, como la hora oficial del INACAL; Asia/Kolkata corresponde a UTC+5:30. La India va 10 horas y 30 minutos por delante, sin variación en el año.' },
        { kind: 'p', mt: true, html: 'Quienes trabajan suelen elegir la madrugada o la noche; los adolescentes, la tarde después del colegio. Cuando reserve la clase gratis, las horas disponibles aparecen ya en hora peruana. Para arrancar en verano, entre enero y marzo, revise nuestro <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">plan de vacaciones útiles 2027</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo sé que avanzo en Java?',
    lede: 'Cinco etapas propias que el mentor usa para ubicarlo y contarle su progreso. No son niveles oficiales ni de ninguna certificación.',
    table: { caption: 'Cinco etapas de Java (nuestras)', head: ['Etapa', 'Momento habitual', 'Usted puede'], rows: [
      ['1. Compilar sin miedo', 'Primer mes', 'escribir un programa, leer el error de javac y corregirlo solo'],
      ['2. Controlar el flujo', 'Meses 2 y 3', 'resolver problemas con condicionales, bucles, arreglos y métodos propios'],
      ['3. Pensar en objetos', 'Meses 4 a 6', 'diseñar dos o tres clases que colaboran y explicar por qué las separó así'],
      ['4. Manejar colecciones', 'Meses 7 a 9', 'elegir entre ArrayList y HashMap y justificar la elección'],
      ['5. Construir una aplicación', 'Desde el mes 9', 'terminar un proyecto propio, con pruebas, y presentarlo en inglés']
    ] },
    left: { h3: 'Mientras aprende', ps: [
      'Escriba cada programa usted mismo, aunque tenga el ejemplo delante. Copiar y pegar se olvida al día siguiente.',
      'Cuando javac le marque un error, léalo completo antes de tocar el código. La mitad de las veces el mensaje ya dice la solución.'
    ] },
    right: { h3: 'Cuando se sienta trabado', ps: [
      'Vuelva a un programa más pequeño que sí funcione y añada una sola cosa a la vez.',
      'Explique en voz alta, en inglés, qué debería hacer cada línea. El error suele aparecer en la frase que no puede terminar.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para antes o después de Java',
    lede: 'Para complementar Java según su edad y su meta. Todos en vivo, en inglés y con el mismo mentor durante el curso.',
    bands: [
      { num: 'I', h3: 'Para adolescentes', sub: 'Secundaria', courses: [
        { code: 'JAI / TEENS / 01', slug: 'python-complete-masterclass-teens', title: 'Python para adolescentes', blurb: 'El otro gran lenguaje de inicio, útil también para la OPI.' },
        { code: 'JAI / TEENS / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ para adolescentes', blurb: 'El lenguaje de la final de la olimpiada de informática, con STL y algoritmos.' },
        { code: 'JAI / TEENS / 03', slug: 'backend-coding-masterclass-for-teens', title: 'Backend para adolescentes', blurb: 'Servidores, APIs y bases de datos: la otra mitad de una aplicación.' }
      ] },
      { num: 'II', h3: 'Java profesional', sub: 'Desde los 18 años', courses: [
        { code: 'JAI / PRO / 01', slug: 'data-structures-algorithms-masterclass-college', title: 'Estructuras de datos y algoritmos', blurb: 'Listas, árboles, grafos y complejidad, practicados con código propio.' },
        { code: 'JAI / PRO / 02', slug: 'mysql-database-complete-masterclass-college', title: 'Bases de datos con MySQL', blurb: 'SQL y diseño de tablas, lo que toda API de Spring Boot necesita detrás.' },
        { code: 'JAI / PRO / 03', slug: 'full-stack-web-development-masterclass-college', title: 'Desarrollo web completo', blurb: 'Interfaz y servidor juntos, para entender la aplicación entera.' }
      ] },
      { num: 'III', h3: 'Otros caminos', sub: 'Según su meta', courses: [
        { code: 'JAI / OTROS / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'Computer Science A en Java', blurb: 'Para escolares que siguen un programa de colegio estadounidense.' },
        { code: 'JAI / OTROS / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Resolución de problemas', blurb: 'Lógica y algoritmos para adolescentes de 13 a 18 años.' },
        { code: 'JAI / OTROS / 03', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Programar con IA, con criterio', blurb: 'Asistentes de IA usados con revisión humana de cada cambio, para mayores de 18.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se dictan las clases de Java?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Madrugada', l: 'Una clase antes de ir al trabajo o a la universidad.' },
      { time: 'Tarde', l: 'Para escolares, después del colegio y el almuerzo.' },
      { time: 'Individual', l: 'Día y hora acordados con su mentor.' }
    ],
    cells: [
      { h3: 'Código en vivo', p: 'Usted programa en su editor; el mentor sigue cada línea en pantalla.' },
      { h3: 'Errores leídos juntos', p: 'Cada mensaje de javac se lee y se explica en inglés.' },
      { h3: 'Problemas originales', p: 'Ejercicios escritos por nosotros, pensados para que usted razone.' },
      { h3: 'Un proyecto por etapa', p: 'Cada tramo termina con algo que funciona y que puede mostrar.' },
      { h3: 'Mentor constante', p: 'La misma persona del inicio al final del curso.' },
      { h3: 'Grupo o individual', p: 'Un grupo de quince a veinte con su nivel, o usted a solas con el mentor.' }
    ]
  },

  projectsH2: 'Proyectos de nuestros estudiantes',
  projectsLede: 'Trabajos de estudiantes mayores, en Java y otros lenguajes, que empezaron sin experiencia. Más ejemplos en <a class="ag-inline-link" href="/student-labs">Student labs</a> (en inglés).',
  reviewsLede: 'Lo que estudiantes y familias escribieron en Google, en inglés y sin retoques.',

  fees: {
    h2: '¿Cuánto cuesta el curso de Java desde Perú?',
    lede: 'Mostramos la mensualidad en dólares estadounidenses y se paga con tarjeta. El banco que emite su tarjeta convierte el cargo a su moneda con el tipo de cambio del día, así que el monto en su estado de cuenta puede variar levemente.',
    free: ['Una clase de prueba gratuita', 'Una revisión de su punto de partida', 'Sin tarjeta y sin compromiso'],
    group: ['De quince a veinte estudiantes de nivel parecido', 'El mismo mentor todo el curso', 'Dos clases en vivo cada semana', 'Pago mensual y sin permanencia'],
    one: ['Usted y el mentor, nadie más', 'Su ritmo y sus temas', 'El horario que usted fije']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Curso de Java en inglés: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No, el curso es en vivo, por internet y únicamente en inglés, y para un estudiante de Java esa es una ventaja: los mensajes del compilador, la documentación y el código ya están en inglés, y en clase se practica a la vez el lenguaje y el idioma. El mentor habla pausado y repite cuando hace falta. El EF EPI 2025 coloca el inglés de Lima en el nivel alto.' },
      { q: '¿Puedo aprender Java desde cero?', a: 'Sí. Nuestros cursos de Java para adolescentes y para mayores de 18 empiezan desde la primera variable y no piden experiencia previa. Lo que sí piden es practicar entre clases.' },
      { q: '¿Cuánto dura aprender Java desde cero?', a: 'Lo básico, unos tres meses de práctica constante. Según la ficha de cada curso, Java para adolescentes dura de 10 a 12 meses y Java de cero a Spring Boot también de 10 a 12, con dos clases en vivo por semana.' },
      { q: '¿Qué versión de Java se enseña?', a: 'Una versión LTS reciente. Oracle lista Java 8, 11, 17, 21 y 25 como versiones LTS, y la próxima planificada es Java 29, en septiembre de 2027. Nuestros ejemplos se compilan con Java 21 y mostramos también las novedades de Java 25.' },
      { q: '¿El curso incluye Spring Boot?', a: 'Sí, en el curso para mayores de 18, en la parte final: APIs, seguridad y pruebas. El curso para adolescentes incluye una introducción. Spring Boot 4.1.2 requiere al menos Java 17, según su página de requisitos.' },
      { q: '¿Python o Java primero?', a: 'Python si quiere resultados rápidos, datos o IA; Java si apunta al desarrollo de software empresarial o a Android. Si piensa en la Olimpiada Peruana de Informática, su reglamento admite Python en la primera fase y solo C++ en la final, no Java.' },
      { q: '¿El curso de Java tiene certificado?', a: 'Sí, nuestro certificado de finalización, que se entrega al aprobar el examen final del curso. Es un documento nuestro, sin valor oficial ante el Estado peruano ni ante universidades, y tampoco es una certificación de Oracle.' },
      { q: '¿Necesito una computadora potente?', a: 'No. Basta una laptop o PC con teclado, cámara y micrófono, donde se pueda instalar el JDK y un editor, ambos gratuitos. Con un celular no se puede programar en Java con comodidad.' },
      { q: '¿En qué horario son las clases de Java?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Por ejemplo, a las 8:00 a. m. de Perú en la India son las 6:30 p. m.; la diferencia no cambia en todo el año.' },
      { q: '¿Cómo se paga?', a: 'Con tarjeta, en dólares de Estados Unidos; su banco aplica el tipo de cambio. La clase de prueba no tiene costo y no pide datos de tarjeta.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo sobre Java',
    lede: 'Páginas de nuestro sitio, en inglés salvo la primera, para profundizar.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Todos nuestros cursos para estudiantes en Perú, por edad y tema.' },
      { href: '/java-for-beginners', label: 'Java for beginners', p: 'Los primeros pasos en Java, explicados sin dar nada por sabido.' },
      { href: '/java-cannot-find-symbol-error', label: 'Java cannot find symbol', p: 'El error de compilación más frecuente de las primeras semanas.' },
      { href: '/java-oops-concepts-course', label: 'Java OOP concepts', p: 'Clases, herencia, interfaces y polimorfismo con ejemplos.' },
      { href: '/java-projects-for-students', label: 'Java projects for students', p: 'Ideas de proyectos para practicar después de lo básico.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así se desarrolla una clase en vivo con un mentor.' }
    ]
  },

  start: {
    h2: 'Reserve su primera clase de Java',
    lede: 'En la clase gratis el mentor le pide escribir y compilar un programa muy corto, mira cómo lee el primer error y conversa con usted sobre su meta. Con eso le sugiere el curso de Java y el formato adecuados, y usted decide con calma.',
    readFirst: 'Lectura previa recomendada: <a class="ag-inline-link" href="/java-for-beginners">Java for beginners</a> y <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, ambas en inglés.',
    note: 'El curso se dicta en directo por internet, desde la India, siempre en inglés. En WhatsApp le contestamos aunque nos escriba en castellano.',
    formNote: 'Gratis, sin tarjeta y sin ninguna obligación.'
  },

  footer: {
    cols: [
      { h4: 'Cursos de Java', links: [
        { href: '/courses/java-programming-masterclass-for-teens', label: 'Java para adolescentes' },
        { href: '/courses/complete-java-programming-masterclass-college', label: 'Java de cero a Spring Boot' },
        { href: '/courses/complete-kotlin-programming-masterclass-professional', label: 'Kotlin y Android' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para leer', links: [
        { href: '/java-for-beginners', label: 'Java para principiantes' },
        { href: '/java-oops-concepts-course', label: 'Programación orientada a objetos' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: '58 entre 4 no es 14: es 14,5'
  },

  personalityCss: `
.ag-root.ag-jai .ag-hero h1 { letter-spacing: -0.012em; max-width: 20ch; }
.ag-root.ag-jai .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-jai .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-jai .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-jai .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Oracle Java SE Support Roadmap; OpenJDK project pages for JDK 11, 17, 21 and 25; JEP 330 and JEP 512; Spring Boot system requirements (4.1.2); UTEC Reglamento OPI 2025; EF EPI 2025 Peru page; INEI Boletín TIC II trimestre 2026; tzdata and INACAL for time; all read 8 or 9 Nov 2026. Course durations from our own course data. The month plan, the comparison table, the five stages and the lesson are our own.',
    localProject: 'Averaging four invented school marks in Java, compiled and run with OpenJDK javac/java 21: suma = 58, int average prints 14 because int / int truncates, (double) suma / notas.length prints 14.5, and 7 / 2 = 3 against 7 / 2.0 = 3.5; a second file assigns "15" to an int and javac refuses it before running ("incompatible types: String cannot be converted to int"). Output pasted exactly. Lesson family: static types in Java; integer division truncates, a cast keeps decimals, javac rejects a type mismatch.',
    requiredMentions: ['int average: 14', 'double average: 14.5', '7 / 2 = 3, 7 / 2.0 = 3.5', 'incompatible types: String cannot be converted to int', '58 entre 4 no es 14: es 14,5', 'Versiones LTS de Java según la hoja de ruta de soporte de Oracle', 'Java 29 (planificada)', 'Spring Boot 4.1.2 requires at least Java 17', 'Python o Java como primer lenguaje (nuestra comparación)', 'What will the int average be? And the double one?'],
    sources: [
      { claim: 'Java SE 8, 11, 17, 21 and 25 are LTS; next planned LTS Java 29 in September 2027; GA and Premier Support dates per release.', url: 'https://www.oracle.com/java/technologies/java-se-support-roadmap.html' },
      { claim: 'JDK 21 GA on 19 September 2023.', url: 'https://openjdk.org/projects/jdk/21/' },
      { claim: 'JDK 25 GA on 16 September 2025.', url: 'https://openjdk.org/projects/jdk/25/' },
      { claim: 'JEP 330, delivered in JDK 11: run a single-file program with java HelloWorld.java.', url: 'https://openjdk.org/jeps/330' },
      { claim: 'JEP 512, delivered in JDK 25: compact source files, void main() and IO.println.', url: 'https://openjdk.org/jeps/512' },
      { claim: 'Spring Boot 4.1.2 requires at least Java 17, compatible up to Java 27.', url: 'https://docs.spring.io/spring-boot/system-requirements.html' },
      { claim: 'OPI: Fase 2 only C++.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: 'EF EPI 2025: IT 522, Peru 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: '36.4% of households have a computer (II trimestre 2026).', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Spanish-language teaching: refused; every class is live, online and in English only, in the capsule and in an FAQ.',
      'Oracle certification, an official certificate or any accreditation: none; our certificate of completion only, and the page says it is not an Oracle certification.',
      'Job or salary promises for Java or Spring Boot: refused; the page says so.',
      'Java as an OPI language: refused; the 2025 rules allow C++ or Python in Fase 1 and only C++ in Fase 2.',
      'Typed fees, soles figures or competitor prices (Cibertec, Tecsup in KEYWORDS.md): refused; fees render from the template in USD.',
      'Future Oracle dates as certainties: labelled as Oracle plans that may change.'
    ]
  }
};

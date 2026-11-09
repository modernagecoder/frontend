// SHIP: market | 6 años, 1° de primaria: programar sin leer, y qué hacer de 4 a 6 años | spotting a repeating unit in a sequence and saying it as a loop (repetir N veces)
'use strict';
// Programación para niños de 6 años (ag- Spanish-language door, Peru cluster row PE122, P4, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Search: "programación para niños de 4 a 6 años" (KEYWORDS.md section 1, 3 suggestions), "de 6 años". Angle: the parent
// of a child about to enter or already in 1° de primaria (edad normativa 6 at 31 March), and the parent of a 4 or 5 year
// old in inicial who typed the "4 a 6 años" range. Spine: what programming means before reading; what inicial and 1° de
// primaria give (Ley 28044, CNEB Tabla N.° 5 and Tabla N.° 6, competency 28 levels 2 and 3); what we offer at 4 and 5
// (honestly: live coding from 6; unplugged games and Early Math Foundations before); attention and session design; one
// unplugged activity that becomes a loop; whether the home set-up works (INEI 2026); English by ear.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/programacion-para-ninos-de-6-anos/,
// fetched 2026-11-08, quotes grepped in the raw text):
//  Ley 28044 (FACTS 4, 5, 8): "atiende a niños de 0 a 2 años en forma no escolarizada y de 3 a 5 años en forma escolarizada.";
//    "La Educación Primaria constituye el segundo nivel de la Educación Básica Regular y dura seis años."; "La obligatoriedad de
//    la Educación Inicial se establecerá progresivamente. Mientras tanto, el nivel inicial no será requisito para el ingreso al
//    nivel de Educación Primaria".
//  D.S. 011-2012-ED (FACTS 10, OCR): "Atiende a niños y niñas a partir de los 6 años de edad."
//  MINEDU Edades normativas (FACTS 13 to 15): "Se considera la edad normativa al 31 de marzo de cada año."; "Inicial 3 años
//    Inicial 4 años Inicial 5 años III 1er grado 2do grado".
//  CNEB (cneb/text.txt): Tabla N.° 5 "Total de horas establecidas 30 30 35 45"; inicial: "no se incluye una organización
//    curricular con una carga horaria definida"; Tabla N.° 6 1° column (Matemática 5, Comunicación 5, Inglés 2, Ciencia y
//    tecnología 3, Horas de libre disponibilidad 3, Total 30); "horas pedagógicas (45 minutos)"; competency 28 levels, PDF
//    page 155 checked by eye (image cneb-competencia-28-niveles-p155.png): level 2 "busca y manipula objetos del entorno
//    virtual para realizar actividades preferidas que le permita registrar, comunicar ideas y emociones."; level 3 "analiza y
//    ejecuta procedimientos para elaborar o modificar objetos virtuales que representan y comunican vivencias en espacios
//    virtuales adecuados a su edad, realizando intentos sucesivos hasta concretar su propósito."; previous page: "Nivel 3 Nivel
//    esperado al final del ciclo III", "Nivel 2 Nivel esperado al final del ciclo II".
//  MINEDU 14 Oct 2026 (FACTS 18): "1.3 millones de estudiantes de inicial; 2.7 millones a escolares de primaria".
//  INEI Boletín TIC II trimestre 2026: "el uso de Internet fue menor entre los niños de 6 a 11 años (68,2%)"; cuadro row
//    "60,1 61,7 61,5 68,2 6,7" (II trim 2023 to 2026, change); "el 90,2% de la población usuaria de Internet de 6 y más años
//    usó Internet a través de un teléfono celular"; "tablet (2,9%)".
//  EF EPI 2025 Peru page (MARKET 1.3): Lima 555, band High from 550.
//  Time: tzdata America/Lima UTC-5 no DST; Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv).
// Our own calculations (python3 -I): 3 x 45 = 135 minutes of libre disponibilidad and 2 x 45 = 90 of Inglés a week in 1°;
//    5 x 45 = 225 of Matemática; 68.2 - 61.5 = 6.7 points.
// Our own example (baile.py in the scratchpad, run with python3 -I), exact output:
//    Vuelta 1 -> jump, clap, clap / Vuelta 2 -> jump, clap, clap / Vuelta 3 -> jump, clap, clap / Movimientos: 9
//    veces = 2: two lines and Movimientos: 6; with 'spin' added: three lines and Movimientos: 12.
// Lesson family: spotting the repeating unit in a long sequence and saying it as "repeat N times" (a loop), unplugged first.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "baile = ['jump', 'clap', 'clap']",
  'veces = 3',
  'movimientos = 0',
  'for vuelta in range(1, veces + 1):',
  "    print('Vuelta', vuelta, '->', ', '.join(baile))",
  '    movimientos = movimientos + len(baile)',
  "print('Movimientos:', movimientos)"
].join('\n');

const OUT = [
  'Vuelta 1 -> jump, clap, clap',
  'Vuelta 2 -> jump, clap, clap',
  'Vuelta 3 -> jump, clap, clap',
  'Movimientos: 9'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Programación para niños de 6 años' },
  slug: 'programacion-para-ninos-de-6-anos',
  code: 'pna',
  accent: '#3B5700',
  accentRationale: 'Programación para niños de 6 años: a deep sprout green #3B5700, the colour of a first seedling, for the youngest age page of the Peru cluster; contrast 6.69 on the paper #FBF8F2 (alloc.tsv) and above 4.5 on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Programación para niños de 6 años',
  title: 'Programación para niños de 6 años, en vivo y en inglés',
  description: 'Programación para niños de 6 años en Perú, en vivo y en inglés: juegos sin pantalla, bloques y Scratch para 1° de primaria, y qué hacer de 4 a 6 años.',
  ogDescription: 'Qué puede programar un niño de 6 años, qué da el colegio en inicial y 1° de primaria, cuánto rato se concentra y un juego para hacer en casa.',
  twitterDescription: 'Clases de programación para niños de 6 años en Perú, en vivo y en inglés, con bloques, juegos y mucha paciencia.',
  pageName: 'Programación para niños de 6 años',
  webPageDescription: 'Guía para madres y padres en Perú sobre la programación para niños de 6 años y la búsqueda de 4 a 6 años: qué dicen la Ley General de Educación, las edades normativas del MINEDU y el CNEB sobre inicial y 1° de primaria, qué puede construir un niño de esa edad, cómo diseñamos una clase en vivo en inglés para él y un juego de baile que se convierte en un bucle.',
  courseDescription: 'Clases en vivo y en línea de programación para niños de 6 años en Perú, dictadas solo en inglés: secuencias y repeticiones sin pantalla, bloques y Scratch, en una clase grupal o en clases individuales, a cualquier hora.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños de 6 años',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#seis', label: 'A los 6' },
    { href: '#cuatro', label: 'De 4 a 6' },
    { href: '#colegio', label: 'El colegio' },
    { href: '#juego', label: 'Un juego' },
    { href: '#clase', label: 'La clase' }
  ],
  eyebrow: 'Perú &middot; Programación por edades &middot; 6 años',
  h1: 'Programación para niños de 6 años, en vivo y en inglés',
  lede: 'A los 6 años su hijo o hija entra a 1° de primaria, empieza a leer y quiere entender cómo funcionan las cosas. Aquí explicamos qué significa programar a esa edad, qué le da el colegio, qué conviene hacer si todavía tiene 4 o 5 años y cómo es una clase en vivo, en inglés, pensada para alguien que aún no escribe con soltura.',
  secondaryCta: { href: '#juego', label: 'Ver un juego para hacer en casa' },
  wa: 'Hola Modern Age Coders, tenemos un hijo o hija de 6 años en Perú y nos interesa la programación en inglés. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; para los de 6 años, bloques, juego y frases cortas en inglés',
  spec: [
    ['Edad', '6 años, 1° de primaria (o a punto de entrar)'],
    ['Herramientas', 'Juegos sin pantalla, bloques y Scratch'],
    ['Lectura', 'No hace falta leer con fluidez'],
    ['Formato', 'Clase grupal de quince a veinte niños o clases individuales'],
    ['Horario', 'El día y la hora que usted elija'],
    ['Primera clase', 'Gratis, con un mentor y sin tarjeta']
  ],
  capsuleQ: 'La respuesta corta',
  capsule: 'Sí, un niño de 6 años puede aprender a programar si la clase no depende de leer: ordena pasos, repite patrones y corrige errores con bloques de colores, juegos sin pantalla y Scratch. Modern Age Coders la enseña a familias de cualquier ciudad peruana con clases en vivo, en línea y en inglés: un mentor desde la India conduce cada sesión, habla despacio y repite con paciencia. Puede ser en grupo o con clases individuales, el día y la hora que la familia decida. Para los de 4 y 5 años recomendamos juegos de lógica en casa y clases de matemática temprana antes del código.',

  picks: {
    eyebrow: 'Cursos para empezar a los 6',
    h2: 'Tres cursos que funcionan a esta edad',
    lede: 'El primero es el curso de programación propiamente dicho; el segundo trabaja la lógica sin código; el tercero es para la familia que busca algo desde los 4 años.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PNA / 01', title: 'Programación con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'Para niños de 6 a 12, agrupados según la edad. A los 6 se trabaja con bloques grandes, personajes y sonidos: el niño arma una historia animada antes de saber qué es un bucle.' },
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'PNA / 02', title: 'Razonamiento para pequeños pensadores', alt: 'Imagen del curso de razonamiento para niños de 6 a 9 años', note: 'De 6 a 9 años. Acertijos, secuencias y patrones que preparan la cabeza para programar, con objetos de la casa y muy poca pantalla.' },
      { course: 'early-math-foundations', code: 'PNA / 03', title: 'Matemática temprana', alt: 'Imagen del curso de matemática temprana para niños de 4 a 7 años', note: 'De 4 a 7 años. Contar, comparar y ordenar con material concreto. Es lo que proponemos a quien busca algo para un niño de 4 o 5 años.' }
    ]
  },

  sections: [
    {
      id: 'seis',
      eyebrow: 'A los 6 años',
      h2: '¿Se puede aprender programación a los 6 años?',
      lede: 'Sí, siempre que programar no signifique escribir código. A los 6 años programar es dar instrucciones en orden, descubrir que algo se repite y arreglar lo que salió mal. Todo eso se puede hacer con el cuerpo, con tarjetas y con bloques de colores.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ordenar', p: 'Un programa es una lista de pasos en un orden preciso. Si el niño pone "saltar" antes de "caminar", el personaje hace otra cosa. Darse cuenta de eso es la primera idea de la programación, y un niño de 6 años la entiende jugando.' },
          { h3: 'Repetir', p: 'Cuando el mismo grupo de pasos aparece una y otra vez, se puede decir una sola vez y agregar "repetir tres veces". Es la idea del bucle. En el juego de baile de más abajo su hijo la descubre sin escribir una letra.' },
          { h3: 'Arreglar', p: 'Casi nada sale bien al primer intento. Lo que se aprende a esta edad es a no rendirse: mirar qué pasó, encontrar el paso equivocado y cambiarlo. Los programadores le llaman depurar; los niños le dicen "arreglarlo".' }
        ] },
        { kind: 'p', mt: true, html: 'Lo que no se puede pedir a un niño de 6 años es que escriba líneas de Python o que memorice palabras técnicas. En 1° de primaria la lectura y la escritura en castellano recién se están afianzando, y la motricidad fina para usar el teclado está en camino. Por eso nuestras clases para esta edad usan bloques grandes, imágenes y movimiento, y dejan el código escrito para los 9 o 10 años.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Grados de inicial y de los dos primeros años de primaria, con su edad normativa al 31 de marzo y su ciclo del CNEB', head: ['Grado', 'Edad normativa', 'Ciclo', 'Qué proponemos (nuestro)'], rows: [
          ['Inicial 3 años', '3 años', 'II', 'Juego libre; nada de pantallas por nuestra parte'],
          ['Inicial 4 años', '4 años', 'II', 'Juegos de orden y patrones en casa, con la familia'],
          ['Inicial 5 años', '5 años', 'II', 'Matemática temprana en vivo y juegos sin pantalla'],
          ['1° de primaria', '6 años', 'III', 'Programación con bloques y Scratch, en vivo'],
          ['2° de primaria', '7 años', 'III', 'Scratch con repeticiones y eventos; primeros mundos de Minecraft']
        ] },
        { kind: 'source', html: 'Fuentes: documento del MINEDU sobre edades normativas, que las fija "al 31 de marzo" y ordena los grados desde "Inicial 3 años" hasta "2do grado" del ciclo III; la Ley General de Educación (Ley 28044), con la inicial escolarizada "de 3 a 5 años" y una primaria que "dura seis años"; el Reglamento de esa ley (D.S. 011-2012-ED, art. 61), que recibe en primaria a niños "a partir de los 6 años". Consulta: 8 de noviembre de 2026. La columna final es propuesta nuestra.' },
        { kind: 'p', mt: true, html: 'Un detalle que confunde a muchas familias: la edad que cuenta es la que el niño tiene el 31 de marzo. Un niño que cumple 6 años en mayo entra a 1° de primaria con 5 años en la mano y cumplirá los 6 durante el año escolar. Para nosotros eso no cambia nada importante: en la clase gratis el mentor mira cómo juega, cómo sigue una consigna y cuánto rato se queda con una tarea, y con eso decide por dónde empezar.' }
      ]
    },
    {
      id: 'cuatro',
      eyebrow: 'De 4 a 6 años',
      h2: '¿Hay programación para niños de 4 a 6 años?',
      lede: 'Es una de las búsquedas más frecuentes en Perú, y merece una respuesta honesta: nuestras clases de programación en vivo empiezan a los 6 años. Para los de 4 y 5 años proponemos otra cosa, que prepara el terreno con más solidez.',
      body: [
        { kind: 'two',
          leftH3: 'Por qué no empezamos antes',
          left: [
            'A los 4 y 5 años un niño está en inicial. La Ley General de Educación ubica ese nivel entre los 3 y los 5 años, y el CNEB dice que en inicial "no se incluye una organización curricular con una carga horaria definida": las áreas se trabajan juntas, a través del juego, al ritmo de cada niño.',
            'Una videollamada guiada en inglés por un adulto desconocido exige quedarse frente a una pantalla, seguir instrucciones habladas en otro idioma y manejar un ratón. Para la mayoría de los niños de 4 años es demasiado, y no queremos vender algo que no funciona.'
          ],
          rightH3: 'Qué sí funciona a los 4 y 5',
          right: [
            'Los conceptos de la programación (orden, repetición, condición) se aprenden muy bien sin computadora: armando una torre según una tarjeta, siguiendo un camino de flechas en el piso o adivinando qué color sigue en un collar.',
            'Si busca una clase en vivo para un niño de 5 años, nuestro curso de matemática temprana (de 4 a 7 años) trabaja contar, comparar, ordenar y reconocer patrones con objetos concretos. Es la base sobre la que después se construye el código.'
          ] },
        { kind: 'ol', mt: true, items: [
          '<strong>El camino de flechas.</strong> Con cinta de papel en el piso arme una cuadrícula de tres por tres. Su hijo pone tarjetas con flechas para llevar un peluche de una esquina a la otra. Luego usted sigue las tarjetas al pie de la letra, aunque lleven el peluche contra la pared.',
          '<strong>El collar que se repite.</strong> Con fideos pintados o chapas, arme el comienzo de un collar: rojo, azul, azul, rojo, azul, azul. Pregunte qué viene después y cuántas veces aparece el grupo "rojo, azul, azul".',
          '<strong>La receta exacta.</strong> Pídale que le dé instrucciones para preparar un pan con mantequilla. Haga solo lo que dice: si no menciona abrir el táper, no lo abra. Se ríen mucho, y aprende que una máquina no adivina.',
          '<strong>Si llueve, paraguas.</strong> Inventen reglas de "si pasa esto, entonces hago aquello": si suena la palmada, se sienta; si suenan dos, se para. Es la condición de la programación, con el cuerpo.',
          '<strong>El error a propósito.</strong> Usted sigue una secuencia y se equivoca en un paso. Su hijo tiene que encontrar cuál. Encontrar el error en lo que hizo otro es más fácil que en lo propio, y es el primer paso para revisar su propio trabajo.'
        ] },
        { kind: 'source', html: 'Estos cinco juegos son nuestros y no necesitan ninguna pantalla. Los proponemos a familias con niños de 4 y 5 años mientras esperan la edad de empezar con bloques. Las referencias a inicial vienen de la Ley N.° 28044 y del CNEB del MINEDU, leídos el 8 de noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'La ley también recuerda que la educación inicial se vuelve obligatoria "progresivamente" y que, mientras tanto, "el nivel inicial no será requisito para el ingreso al nivel de Educación Primaria". Hay niños que llegan a 1° sin haber pasado por inicial, y en una clase de programación eso no se nota: a los 6 años todos empiezan desde el mismo punto, que es jugar a dar órdenes. Si su hijo cumple 6 años pronto, puede reservar la clase gratis y el mentor le dirá con franqueza si conviene empezar ya o esperar unos meses.' }
      ]
    },
    {
      id: 'colegio',
      eyebrow: 'Lo que da el colegio',
      h2: '¿Qué aprende de tecnología un niño en 1° de primaria?',
      lede: 'El plan nacional asigna a 1° de primaria treinta horas pedagógicas por semana, y ninguna lleva el nombre de computación. La tecnología aparece como competencia transversal, y el nivel que el CNEB espera al final del ciclo III no habla de programar sino de usar y modificar objetos digitales.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Cinco áreas de la semana de 1° de primaria (CNEB, Tabla N.° 6) pasadas a minutos', head: ['Área curricular', 'Horas pedagógicas', 'Minutos a la semana (cálculo nuestro)'], rows: [
          ['Matemática', '5', '225'],
          ['Comunicación', '5', '225'],
          ['Inglés', '2', '90'],
          ['Ciencia y tecnología', '3', '135'],
          ['Horas de libre disponibilidad', '3', '135'],
          ['Total de horas', '30', '1,350']
        ] },
        { kind: 'source', html: 'Fuente: columna de 1.° de la Tabla N.° 6 del CNEB (MINEDU), que cuenta en "horas pedagógicas (45 minutos)"; la Tabla N.° 5 da a primaria un total de 30. Aquí van cinco áreas de nueve; Personal social, Arte y cultura, Educación física, Educación religiosa y Tutoría completan la semana. Consulta: 8 de noviembre de 2026. La conversión a minutos la hicimos nosotros.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que el CNEB espera en el ciclo III',
          left: [
            'La competencia 28 del CNEB, la que trata de los entornos virtuales y las TIC, se describe por niveles, uno por ciclo. El nivel esperado al final del ciclo III (1° y 2° de primaria) dice que el estudiante "analiza y ejecuta procedimientos para elaborar o modificar objetos virtuales que representan y comunican vivencias en espacios virtuales adecuados a su edad, realizando intentos sucesivos hasta concretar su propósito".',
            'El nivel anterior, el del ciclo II (inicial), describe a un niño que "busca y manipula objetos del entorno virtual para realizar actividades preferidas". Del uno al otro se pasa de tocar a construir, y de hacerlo una vez a intentarlo varias veces.'
          ],
          rightH3: 'Cómo encaja una clase de programación',
          right: [
            '"Realizando intentos sucesivos hasta concretar su propósito" es, casi palabra por palabra, lo que hace un niño en Scratch: prueba, mira, cambia un bloque y vuelve a probar. Nuestra clase no sigue el CNEB ni lo reemplaza, pero trabaja justo esa habilidad con un objetivo concreto cada semana.',
            'En 1° quedan tres horas de libre disponibilidad, y hay colegios que las dedican a computación o a robótica. Si el colegio de su hijo lo tiene, lo que aprenda con nosotros le servirá allí; si no lo tiene, nuestra clase cubre ese espacio fuera del horario escolar.'
          ] },
        { kind: 'p', mt: true, html: 'El MINEDU anunció el 14 de octubre de 2026 que los materiales del año escolar 2027 llegarán a 1.3 millones de estudiantes de inicial y 2.7 millones de primaria. Entre esos materiales no hay un curso de programación para 1° de primaria, porque el plan de estudios no lo incluye. No formamos parte de ese sistema ni tenemos relación con el MINEDU: nuestras clases corren por cuerda separada, no ponen notas y, cuando un curso termina, el único documento que damos es una constancia propia de que se completó.' }
      ]
    },
    {
      id: 'clase',
      eyebrow: 'Atención y ritmo',
      h2: '¿Cuánto tiempo se concentra un niño de 6 años en una clase virtual?',
      lede: 'Menos que un adulto, y eso está bien. Lo que funciona a esta edad no es una clase más corta, sino una clase partida en tramos breves que cambian de actividad antes de que llegue el aburrimiento.',
      body: [
        { kind: 'p', html: 'No vamos a darle una cifra científica de minutos de atención, porque cada niño es distinto y depende del día, del sueño y de lo que pasó en el colegio. Lo que sí podemos contarle es cómo armamos nosotros una clase para niños de 6 años, a partir de lo que vemos en nuestras clases desde 2020.' },
        { kind: 'ol', items: [
          '<strong>Saludo con movimiento.</strong> El mentor saluda en inglés y propone algo con el cuerpo: tocar algo rojo, mostrar tres dedos, saltar dos veces. Sirve para que el niño escuche inglés sin presión y se active.',
          '<strong>Un problema contado como historia.</strong> "The cat wants to reach the fish." El mentor muestra la escena en pantalla y pregunta qué tiene que hacer el gato. El niño contesta con gestos, en castellano o en inglés.',
          '<strong>Manos a los bloques.</strong> El niño arrastra tres o cuatro bloques y prueba. Si el gato no llega, el mentor no lo arregla: pregunta "Where did the cat stop?" y espera.',
          '<strong>Una pausa de pie.</strong> A mitad de clase, un minuto lejos de la pantalla. Los niños de esta edad lo necesitan, y la clase lo prevé en lugar de pelear contra eso.',
          '<strong>Un cambio pequeño.</strong> Con lo que ya funciona, un reto: que el gato salte, que cambie de color, que diga "hello". Agregar algo a lo propio motiva más que empezar de cero.',
          '<strong>Mostrar y contar.</strong> Al final el niño muestra lo que hizo a la cámara y lo cuenta con una palabra nueva en inglés. Muchas familias se suman a ese último momento.'
        ] },
        { kind: 'source', html: 'La estructura de clase es nuestra y se adapta a cada niño; el mentor acorta o alarga cada tramo según lo que ve.' },
        { kind: 'two', mt: true,
          leftH3: 'Clase grupal a los 6 años',
          left: [
            'En la clase grupal su hijo trabaja con niños de edad parecida, de quince a veinte. Los más pequeños aprenden mucho mirando lo que hacen los demás y se animan a mostrar lo suyo.',
            'Funciona bien con niños que ya se quedan sentados un rato y que disfrutan de participar. El mentor reparte turnos para que todos hablen, aunque sea una palabra.'
          ],
          rightH3: 'Clases individuales a los 6 años',
          right: [
            'Para un niño muy tímido, muy inquieto o que todavía no sigue bien una consigna larga, las clases individuales dan más margen: el mentor espera, repite, cambia de juego y vuelve al tema cuando el niño está listo.',
            'También son la salida para familias con horarios complicados, porque cada sesión se acuerda cuando a ellas les acomoda, sin depender de un grupo.'
          ] },
        { kind: 'p', mt: true, html: 'Una regla que pedimos a las familias de los más pequeños: una persona adulta cerca, sobre todo en las primeras clases. No para resolver el ejercicio, sino para ayudar con el ratón si se traba, acercar un vaso de agua y darle al niño la seguridad de que no está solo frente a un desconocido que habla otro idioma.' }
      ]
    },
    {
      id: 'juego',
      tint: 'tint',
      eyebrow: 'Un juego de ejemplo',
      h2: '¿Cómo se enseña un bucle a un niño de 6 años?',
      lede: 'Con un baile. Este juego es nuestro y lo usamos en las primeras clases: empieza de pie, sin pantalla, y termina en un bloque de "repetir" en Scratch. Al final mostramos el mismo baile escrito en Python, para que usted vea hacia dónde va el camino.',
      body: [
        { kind: 'ol', items: [
          '<strong>Bailar la secuencia larga.</strong> El mentor hace nueve movimientos seguidos y dice cada uno en inglés: jump, clap, clap, jump, clap, clap, jump, clap, clap. El niño lo copia. Es largo y cuesta recordarlo todo.',
          '<strong>Buscar lo que se repite.</strong> "Is there a part that comes back?" El niño descubre que "jump, clap, clap" aparece tres veces. Ese grupo de tres es el corazón del baile.',
          '<strong>Decirlo corto.</strong> En vez de nueve tarjetas, se usan cuatro: tres con los movimientos y una que dice "repeat 3". El niño baila siguiendo solo esas cuatro tarjetas y comprueba que sale el mismo baile.',
          '<strong>Un error a propósito.</strong> El mentor cambia la tarjeta a "repeat 2". El niño baila y cuenta: ahora son seis movimientos, no nueve. ¿Qué tarjeta hay que cambiar para volver a nueve?',
          '<strong>Pasarlo a Scratch.</strong> Con el bloque "repetir" de Scratch, el gato hace el mismo baile: saltar, aplaudir con un sonido, aplaudir otra vez, tres veces. El niño ya sabe qué esperar antes de apretar la bandera verde.',
          '<strong>Inventar uno propio.</strong> El niño agrega un giro (spin) al grupo y predice cuántos movimientos habrá ahora. Lo prueba bailando y en la pantalla.'
        ] },
        { kind: 'code', label: 'El mismo baile escrito en Python, para los adultos', lang: 'Python', code: PY, note: 'Un niño de 6 años no escribe esto; se lo mostramos a usted para que vea que el bloque "repetir" de Scratch es la misma idea que el <code>for</code> de Python que su hijo usará a los 9 o 10 años.' },
        { kind: 'code', label: 'Lo que imprime', lang: 'Salida', code: OUT, note: 'Esto mostró la consola al correrlo nosotros con Python 3, sin retoques. Con <code>veces = 2</code> se imprimen dos vueltas y <code>Movimientos: 6</code>; si se agrega <code>\'spin\'</code> al baile, salen tres vueltas de cuatro movimientos y <code>Movimientos: 12</code>.' },
        { kind: 'p', mt: true, html: 'Lo que su hijo se lleva de este juego no es la palabra "bucle", que probablemente no usará en años, sino una costumbre: ante algo largo y repetitivo, buscar la parte que se repite y decirla una sola vez. Es la misma costumbre que, más adelante, le servirá para resumir un texto, para ver un patrón en una tabla de multiplicar o para escribir un programa corto en lugar de uno interminable. Y de paso aprendió jump, clap, spin y repeat sin sentarse a estudiar inglés.' }
      ]
    },
    {
      id: 'casa',
      eyebrow: 'En casa',
      h2: '¿Qué necesita en casa un niño de 6 años para una clase en línea?',
      lede: 'Una computadora o laptop con cámara y micrófono, una conexión estable y alguien cerca. El celular, que es como se conecta la mayoría de los peruanos, se queda corto para esta clase.',
      body: [
        { kind: 'two',
          leftH3: 'Lo que dice el INEI sobre los niños y el internet',
          left: [
            'En el segundo trimestre de 2026 usaron internet 68,2 de cada 100 peruanos de entre 6 y 11 años, según el boletín TIC del INEI. Un año antes la cifra era 61,5 %, así que subió 6,7 puntos, el aumento que el propio boletín destaca primero entre todos los grupos de edad.',
            'Ese boletín añade que el 90,2 % de los usuarios de internet de 6 años a más se conecta con un celular, y solo el 2,9 % con una tablet. Para muchos niños, la clase será su primer uso de una computadora con ratón y teclado.'
          ],
          rightH3: 'Nuestra lista para los de 6 años',
          right: [
            'Una computadora o laptop, aunque sea compartida con los hermanos. Un ratón con cable o inalámbrico, porque el panel táctil de la laptop cuesta mucho a manos pequeñas.',
            'Audífonos cómodos, para oír bien al mentor, y la cámara a la altura de la cara del niño. Una tablet sirve para las primeras semanas de bloques; un celular no, porque la pantalla es muy chica para arrastrar piezas.'
          ] },
        { kind: 'p', mt: true, html: 'Si en su casa la computadora se usa también para el trabajo de los padres, conviene elegir un horario en el que esté libre. Como las clases se pactan a cualquier hora, muchas familias eligen la mañana de los sábados, o la tarde de un día de semana cuando el niño ya almorzó y descansó. La primera clase sirve también para probar el equipo: si algo no funciona, el mentor ayuda a resolverlo antes de empezar en serio.' }
      ]
    },
    {
      id: 'ingles',
      eyebrow: 'Clases en inglés',
      h2: '¿Un niño de 6 años entiende una clase en inglés?',
      lede: 'Entiende mucho más de lo que dice. A esta edad el inglés entra por el oído y por la imitación, y una clase en la que se juega con las manos le da mil pistas para entender sin traducir.',
      body: [
        { kind: 'p', html: 'En 1° de primaria el CNEB reserva 2 horas de Inglés por semana, que con horas de 45 minutos suman 90 minutos (cuenta nuestra). Nuestra clase no es una clase de inglés, pero cada semana su hijo oye y usa palabras como <em>jump</em>, <em>move</em>, <em>repeat</em>, <em>stop</em>, <em>green flag</em> o <em>try again</em>, siempre ligadas a algo que ve en la pantalla. Ese lazo entre lo que se oye y lo que pasa en la pantalla es la que hace que se queden.' },
        { kind: 'p', html: 'El mentor está entrenado para hablar despacio con los más pequeños, usar frases de tres o cuatro palabras, mostrar con el cursor lo que dice y aceptar respuestas en castellano. Si su hijo dice "el gato se cayó", el mentor responde "Yes! The cat fell. Let\'s fix it", y sigue. Nadie lo corrige delante de los demás. Suelen bastar dos o tres semanas para que el oído del niño se haga a la voz del mentor, y viceversa.' },
        { kind: 'p', html: 'Las familias de Lima suelen preguntarnos si vale la pena. El índice EF EPI 2025 ubica a Lima en el nivel alto de dominio del inglés, con 555 puntos, por encima del promedio del país; pero ese índice mide a adultos, y lo que más cuesta en Perú es hablar. Empezar a los 6 años, oyendo y repitiendo con un propósito, es la manera más natural de que hablar en inglés no le dé vergüenza a los 12. Si quiere ver cómo seguimos con los mayores, la <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">guía para niños de primaria que aprenden a programar en inglés</a> describe el camino completo hasta los 12.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horarios',
      h2: '¿A qué hora puede tomar la clase un niño de 6 años en Perú?',
      lede: 'A la que usted elija. Para los más pequeños solemos sugerir horas en las que el niño no está cansado: la mañana del fin de semana o la tarde temprana, después del almuerzo y un rato de descanso.',
      body: [
        { kind: 'table', numCols: [], caption: 'Algunas horas de Perú y su equivalente en la India (solo conversiones, no un horario de clases)', head: ['En Perú', 'En la India', '¿Mismo día?'], rows: [
          ['9:00 a. m.', '7:30 p. m.', 'Sí'],
          ['11:00 a. m.', '9:30 p. m.', 'Sí'],
          ['1:30 p. m.', '12:00 a. m. (medianoche)', 'Pasa al día siguiente'],
          ['4:00 p. m.', '2:30 a. m.', 'Día siguiente'],
          ['6:00 p. m.', '4:30 a. m.', 'Día siguiente']
        ] },
        { kind: 'source', html: 'El reloj peruano marca UTC-5 los doce meses y no cambia en verano (zona America/Lima en tzdata; hora oficial según el INACAL). El indio marca UTC+5:30, de modo que la ventaja de la India es siempre de diez horas y media. Conversión nuestra, revisada en noviembre de 2026.' },
        { kind: 'p', mt: true, html: 'Usted no tiene que hacer estas cuentas: el formulario de la clase gratis le muestra los horarios ya convertidos a la hora de Perú. Si en el verano su hijo está libre por las mañanas, puede ver nuestra guía de <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación en línea</a>, pensada para empezar en enero; y si busca algo para hermanos de distintas edades, la página de <a class="ag-inline-link" href="/talleres-de-verano-programacion-ninos-online">talleres de verano de programación para niños</a> los ordena por grado.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Primeros pasos',
    h2: '¿Cómo avanza un niño de 6 años en programación?',
    lede: 'Cuatro escalones propios, pensados para el primer año de un niño que empieza en 1° de primaria. No hay apuro: cada uno toma semanas.',
    table: { caption: 'Cuatro escalones para el primer año (nuestros)', head: ['Escalón', 'Qué hace su hijo', 'Señal de que está listo para el siguiente'], rows: [
      ['1. Dar órdenes', 'mueve a un personaje con tres o cuatro bloques en fila', 'predice dónde se va a detener antes de probar'],
      ['2. Repetir', 'usa el bloque de repetir en lugar de copiar los mismos bloques', 'dice cuántas veces se repite algo sin contarlo en voz alta'],
      ['3. Esperar una señal', 'hace que algo pase al tocar una tecla o al hacer clic', 'combina dos señales distintas en el mismo proyecto'],
      ['4. Contar una historia', 'arma una escena con dos personajes que hablan por turnos', 'explica su historia en voz alta, con palabras en inglés']
    ] },
    left: { h3: 'Para madres y padres', ps: [
      'A los 6 años el avance no se ve en la cantidad de bloques, sino en la seguridad con la que el niño prueba cosas. Un niño que antes esperaba que le dijeran qué hacer y ahora propone "¿y si el gato vuela?" está avanzando.',
      'No compare con hermanos mayores ni con primos. Cada escalón puede tomar un mes o tres, y está bien.'
    ] },
    right: { h3: 'Para el niño', ps: [
      'Cuando algo no salga, mire dónde se detuvo el personaje. Ese es el lugar donde hay que cambiar algo.',
      'Antes de apretar la bandera verde, diga en voz alta qué cree que va a pasar.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más para los primeros años de primaria',
    lede: 'Cada uno se dicta en vivo y en inglés. Algunos sirven ya a los 6 años; otros quedan para cuando su hijo tenga 7 u 8, y se los dejamos a la vista para que sepa lo que viene.',
    bands: [
      { num: 'I', h3: 'Pensar con números', sub: 'Desde los 5 o 6 años', courses: [
        { code: 'PNA / NUM / 01', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental para niños', blurb: 'Sentido del número sin trucos, de 5 a 10 años.' },
        { code: 'PNA / NUM / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Ábaco y cálculo mental', blurb: 'De las primeras cuentas al cálculo sin ábaco, de 5 a 10 años.' },
        { code: 'PNA / NUM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Matemática de primaria', blurb: 'Clases en vivo por grado, de 1° a 5°, con una prueba corta para ubicar al niño.' }
      ] },
      { num: 'II', h3: 'Lógica y bloques', sub: 'De 6 a 9 años', courses: [
        { code: 'PNA / LOG / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Resolver problemas como un programador', blurb: 'Descomponer, ordenar y encontrar patrones, con y sin computadora.' },
        { code: 'PNA / LOG / 02', slug: 'scratch-programming-complete-course', title: 'Scratch de cero a juegos', blurb: 'Tres meses para pasar de mover un gato a terminar un juego propio.' },
        { code: 'PNA / LOG / 03', slug: 'minecraft-coding-for-kids-course', title: 'Programar en Minecraft', blurb: 'Desde los 7 años, construyendo con bloques de código dentro de un mundo conocido.' }
      ] },
      { num: 'III', h3: 'Lo que viene después', sub: 'De 7 u 8 años en adelante', courses: [
        { code: 'PNA / LUEGO / 01', slug: 'game-development-masterclass-for-kids', title: 'Videojuegos para niños', blurb: 'Scratch, Roblox y Minecraft en un recorrido, de 8 a 12 años.' },
        { code: 'PNA / LUEGO / 02', slug: 'ai-literacy-for-kids-course', title: 'Entender la inteligencia artificial', blurb: 'Para mayores de 8: cómo aprende una máquina y por qué a veces falla.' },
        { code: 'PNA / LUEGO / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Su primera app para el teléfono, construida con piezas de colores (8 a 12).' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Cómo se organizan las clases para los más pequeños?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Fin de semana temprano', l: 'Cuando el niño está descansado y hay un adulto en casa.' },
      { time: 'Tarde de semana', l: 'Después del almuerzo y de un rato de juego.' },
      { time: 'La hora que usted diga', l: 'Con clases individuales, sin depender de nadie más.' }
    ],
    cells: [
      { h3: 'Tramos cortos', p: 'Cada clase cambia de actividad varias veces, con una pausa de pie.' },
      { h3: 'Poco texto', p: 'Bloques, imágenes y sonidos en lugar de instrucciones escritas.' },
      { h3: 'Inglés con gestos', p: 'Frases de tres o cuatro palabras, mostradas en pantalla.' },
      { h3: 'El niño arrastra', p: 'El mentor pregunta y espera; no mueve los bloques por él.' },
      { h3: 'Algo que mostrar', p: 'Cada clase termina con una escena o un juego que se enseña en casa.' },
      { h3: 'Nota para la familia', p: 'Qué se practicó y qué palabras en inglés aparecieron.' }
    ]
  },

  projectsH2: 'Hacia dónde lleva este comienzo',
  projectsLede: 'Los niños que hoy arrastran bloques a los 6 años terminan, unos años después, haciendo proyectos como estos de estudiantes mayores. La galería completa está en <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Lo que escriben en Google las familias de nuestros estudiantes, sin traducir, en inglés.',

  fees: {
    h2: 'Cuánto cuesta y cómo se paga desde Perú',
    lede: 'Mostramos la mensualidad en dólares estadounidenses y se cobra con tarjeta; el banco de su tarjeta la convierte a su moneda a la tasa vigente al momento del cargo. La clase gratis no pide ningún dato de pago.',
    free: ['Una primera clase con un mentor, sin costo', 'Prueba del equipo de casa y del audio', 'Una recomendación clara: empezar ya o esperar'],
    group: ['De quince a veinte niños de edad parecida', 'El mismo mentor durante todo el curso', 'Dos clases en vivo por semana', 'Se paga mes a mes'],
    one: ['Solo su hijo con el mentor', 'Pausas y ritmo a la medida del niño', 'El día y la hora que usted defina']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños de 6 años: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Incluso a los 6 años cada clase es en vivo, en línea y en inglés. Muchas familias nos eligen justamente por eso: su hijo juega a programar y, al mismo tiempo, se acostumbra a oír y decir palabras en inglés. El mentor habla despacio y acepta respuestas en castellano. El EF EPI 2025 pone a Lima en el nivel alto de inglés, y empezar a esta edad hace que hablarlo resulte natural.' },
      { q: '¿Un niño de 6 años puede aprender a programar?', a: 'Sí, si la clase no depende de leer y escribir. A los 6 años se programa ordenando pasos, repitiendo patrones y arreglando errores con bloques, tarjetas y movimiento. El código escrito llega a los 9 o 10 años.' },
      { q: '¿Dan clases a niños de 4 y 5 años?', a: 'Nuestras clases de programación en vivo empiezan a los 6 años. Para los de 4 y 5 años proponemos juegos de lógica sin pantalla en casa y, si busca una clase en vivo, nuestro curso de matemática temprana, que es para niños de 4 a 7 años.' },
      { q: '¿Qué edad tiene un niño en 1° de primaria en Perú?', a: 'Según el MINEDU, la edad normativa de 1° de primaria es 6 años, contados al 31 de marzo del año escolar. Por eso un niño que cumple 6 en mayo empieza 1° con 5 años.' },
      { q: '¿Se enseña programación en 1° de primaria?', a: 'No como curso propio. En la Tabla N.° 6 del CNEB, las treinta horas semanales de 1° de primaria se reparten entre áreas y ninguna es computación. La tecnología aparece como competencia transversal y algunos colegios usan sus tres horas de libre disponibilidad para un taller.' },
      { q: '¿Cuánto tiempo puede concentrarse un niño de 6 años en una clase en línea?', a: 'Depende de cada niño y de cada día. Por eso partimos la clase en tramos cortos que cambian de actividad, con una pausa de pie a mitad de camino, y el mentor ajusta cada tramo según lo que ve.' },
      { q: '¿Qué lenguaje de programación es bueno para un niño de 6 años?', a: 'Ninguno escrito todavía. A esta edad funcionan los bloques: Scratch y herramientas parecidas, donde el niño arrastra piezas de colores. Python llega más tarde, cuando el niño ya teclea sin buscar cada letra.' },
      { q: '¿Tengo que estar al lado de mi hijo durante la clase?', a: 'Cerca, sobre todo en las primeras clases. No para resolver el ejercicio, sino para ayudar con el ratón y darle seguridad. Con las semanas, la mayoría de los niños se queda solo y le muestra lo que hizo al final.' },
      { q: '¿A qué hora son las clases?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Entre los dos países hay siempre diez horas y media: cuando en Perú son las 9:00 a. m., en la India ya son las 7:30 p. m.' },
      { q: '¿Cuentan para la libreta del colegio?', a: 'No. No tenemos relación con el MINEDU ni con colegio alguno, y lo que su hijo haga con nosotros no se traduce en notas. Lo único que entregamos al cerrar un curso es una constancia propia de Modern Age Coders.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más páginas',
    h2: 'Para seguir leyendo',
    lede: 'Páginas que suelen consultar las familias con hijos pequeños; las de Perú están en castellano y el resto en inglés.',
    items: [
      { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú', p: 'Todo lo que enseñamos a familias peruanas, de primaria a la universidad.' },
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños en inglés', p: 'El recorrido completo de 6 a 12 años, con un ejemplo en Python.' },
      { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027', p: 'Un plan de verano en línea para empezar en enero.' },
      { href: '/ai-tools-age-guide', label: 'AI tool age guide', p: 'La edad mínima que cada empresa de IA pide en sus condiciones.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'El método detrás de cada sesión, explicado paso a paso.' },
      { href: '/courses', label: 'All courses', p: 'El catálogo completo, para cuando su hijo crezca.' }
    ]
  },

  start: {
    h2: 'Pida la clase gratis para su hijo de 6 años',
    lede: 'En ese primer encuentro el mentor juega en un inglés muy simple, invita al niño a mover un personaje con bloques y observa cómo sigue las consignas. Después le decimos con franqueza qué curso conviene y si es momento de empezar o de esperar un poco.',
    readFirst: 'Antes de reservar puede leer <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, sobre cómo damos clases en vivo, o revisar <a class="ag-inline-link" href="/courses">All courses</a> (ambas en inglés).',
    note: 'Enseñamos únicamente en inglés, siempre en vivo y por internet, desde la India. Para coordinar, WhatsApp funciona también en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para los 6 años', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Programación con bloques' },
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Razonamiento' },
        { href: '/courses/early-math-foundations', label: 'Matemática temprana' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Niños de 6 a 12 años' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/how-we-teach', label: 'Cómo enseñamos' }
      ] }
    ],
    bottomRight: 'Buscar lo que se repite, decirlo una vez'
  },

  personalityCss: `
.ag-root.ag-pna .ag-hero h1 { letter-spacing: -0.01em; max-width: 20ch; }
.ag-root.ag-pna .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-pna .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-pna .ag-steps li { line-height: 1.65; }
.ag-root.ag-pna .ag-table caption { text-align: left; }
`,

  dossier: {
    curriculumAuthority: 'MINEDU: Ley 28044 (inicial 3 a 5 años, primaria seis años, inicial no requisito), D.S. 011-2012-ED Art. 61, Edades normativas (31 March), CNEB Tabla N.° 5, Tabla N.° 6 (1.° column), inicial without a defined hourly load, competency 28 levels 2 and 3 (PDF page 155 checked by eye), press note 14 October 2026; INEI Boletín TIC II trimestre 2026; EF EPI 2025 Peru page; tzdata for time. All read 8 November 2026. The games, class structure, ladder and example are our own.',
    localProject: 'An unplugged-to-Scratch lesson for a 6-year-old in 1° de primaria: a nine-move dance (jump, clap, clap three times) is shrunk to three cards plus "repeat 3"; changing the card to repeat 2 gives six moves; the same dance in Python, run with python3 -I, prints three Vuelta lines and Movimientos: 9, Movimientos: 6 with veces = 2 and Movimientos: 12 with spin added. Lesson family: spotting the repeating unit in a sequence and saying it as a loop.',
    requiredMentions: ['Movimientos: 9', 'Movimientos: 12', 'jump, clap, clap', 'repeat 3', 'realizando intentos sucesivos hasta concretar su propósito', 'no se incluye una organización curricular con una carga horaria definida', 'el nivel inicial no será requisito para el ingreso al nivel de Educación Primaria', 'subió 6,7 puntos', 'Buscar lo que se repite, decirlo una vez', 'El collar que se repite'],
    sources: [
      { claim: 'Inicial 3 to 5 years in school settings; primaria lasts six years; inicial not a prerequisite for primaria.', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Primaria from age 6 (Reglamento, Art. 61).', url: 'https://cdn.www.gob.pe/uploads/document/file/104990/_0011-2012-ED_-_14-03-2013_02_34_14_-d.s_011-2012-ed.pdf' },
      { claim: 'Normative age per grade at 31 March; Inicial 3 to 5 años, 1er and 2do grado in ciclo III.', url: 'https://cdn.www.gob.pe/uploads/document/file/2818106/Edades_normativas.pdf?v=1644437764' },
      { claim: 'Tabla N.° 5 and N.° 6 hours, inicial without a defined hourly load, competency 28 levels 2 and 3.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2027 materials for 1.3 million inicial and 2.7 million primaria students.', url: 'https://www.gob.pe/institucion/minedu/noticias/1456889-minedu-inicia-distribucion-de-materiales-educativos-para-el-ano-escolar-2027' },
      { claim: 'Internet use of children 6 to 11 (68.2% in 2026, 61.5% in 2025), 90.2% via mobile, tablet 2.9%.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Lima 555, High band.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Live coding classes for 4 and 5 year olds: not offered; the page says classes start at 6 and suggests unplugged games and Early Math Foundations (4 to 7).',
      'A scientific attention-span figure in minutes: refused; the page describes our own class structure instead.',
      'Spanish-language teaching: refused; the capsule and an FAQ say every class is live, online and in English.',
      'MINEDU or school endorsement, or an official certificate: none; the page says we are not connected and give only our own certificate of completion.',
      'Competency 28 level mapping printed only after checking PDF page 155 and the level-to-cycle table on the page before by eye.',
      'Soles prices or any typed fee: refused; fees render from the template in USD.'
    ]
  }
};

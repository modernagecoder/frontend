// SHIP: district kids door (ES) | Mi Perú, Callao: distrito joven dentro de Ventanilla, datos móviles | a masked word built letter by letter, and a set so a repeated guess costs nothing
'use strict';
// Clases de programación para niños en Mi Perú, Callao (ag- Spanish-language district door, Peru cluster row PE235,
// hubGroup lima; alloc: pnm, #00580D). Written 2026-11-10.
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Formal "usted" throughout. Fees render in USD from the template only; no soles, no typed figure.
// Angle: the Mi Perú parent (Callao) who types "clases de programación para niños mi perú callao"; the name also makes
// searches noisy, so the page says plainly which place it means. Spine: a young district inside Ventanilla with one child
// in ten aged 6 to 11 (census); how homes connect (household census: mobile data ahead, few laptops), honestly; what the
// municipality has done for young people (its own notes); an original hangman-style lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/clases-de-programacion-para-ninos-mi-peru-callao/
// and pe/src/inei/tab, pe/src/inei/tab-hogar; fetched 2026-11-08 to 2026-11-10; quotes grepped in the raw text):
//  INEI, Censos Nacionales 2025, Indicadores demográficos, Callao (tabulados/07/poblacion):
//    Cuadro N° 1 "DISTRITO MI PERÚ 52102" total, censada 51278, omitida 824. Rank 5 of 7 Callao districts (ours).
//    Cuadro N° 3 "DISTRITO MI PERÚ 51278 3827 5547 5738 10206 12100 8161 5699"; "URBANA 51278".
//    Cuadro N° 2 single ages: 6 años 862, 7 años 814, 8 años 949, 9 años 993, 10 años 937, 11 años 992, 12 años 1003.
//    Neighbour: VENTANILLA 355722 (surrounds the district).
//  INEI, Censos Nacionales 2025, Equipamiento_del_hogar.xlsx (tabulados/07/hogar), DISTRITO MI PERÚ, Hogares 14692:
//    Computadora 2256, Laptop 3570, Tableta 1107; celular 14594, internet fijo 7434, internet móvil 9707.
//  Municipalidad Distrital de Mi Perú (munimiperu), gob.pe notes:
//    7 August 2022 (n-638751): "Aprueban Ordenanza Que Crea El Concejo Distrital De La Juventud De Mi Perú"; "Ordenanza N°
//      088/ MDMP"; members include "instituciones educativas secundarias".
//    23 July 2023 (n-808731): "Luego de más de 4 años, las calles de nuestro distrito, volvieron a retumbar"; "Las
//      Instituciones Educativas de nuestro distrito, de los niveles de inicial, primaria y secundaria, se dieron cita en la
//      Av. Ayacucho".
//    14 February 2022 (n-583778): "elaboración de la cartografía a escala 1:1000 del distrito a través de Naves Remotamente
//      Piloteadas (Drones)". Officials' names left out.
//    The district's creation law (Ley 30197, PDF on leyes.congreso.gob.pe) is a scanned image with no text layer, so no
//      creation date is printed.
//  EF EPI 2025 Peru page: region callao 518 "moderate".
//  National: MINEDU Edades normativas; CNEB; tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own calculations (python3 -I, scratchpad pe/d4/facts.py): 5547 / 51278 = 10.8 %, 5738 / 51278 = 11.2 %;
//    omitida 824 / 52102 = 1.6 %; internet móvil 9707 / 14692 = 66.1 %, fijo 50.6 %, laptop 24.3 %, computadora 15.4 %,
//    tableta 7.5 %, celular 99.3 %.
// Our own example, run with python3 -I (miperu.py in the src-pages folder), exact output:
//    t -> _ _ t _ _ _ | misses: 0 / a -> _ _ t _ _ _ | misses: 1 / o -> _ _ t _ o _ | misses: 1 /
//    t -> already tried, no penalty / p -> p _ t _ o _ | misses: 1 / e -> p _ t _ o _ | misses: 2 /
//    y -> p y t _ o _ | misses: 2 / h -> p y t h o _ | misses: 2 / n -> p y t h o n | misses: 2
// Lesson family: building a masked word letter by letter with a list and join; a set of tried letters so a repeated guess
//    is not counted twice; continue.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  "secret = 'python'",
  "guesses = ['t', 'a', 'o', 't', 'p', 'e', 'y', 'h', 'n']",
  'tried = set()',
  'misses = 0',
  '',
  'for letter in guesses:',
  '    if letter in tried:',
  "        print(letter, '-> already tried, no penalty')",
  '        continue',
  '    tried.add(letter)',
  '    if letter not in secret:',
  '        misses = misses + 1',
  '    shown = []',
  '    for c in secret:',
  '        if c in tried:',
  '            shown.append(c)',
  '        else:',
  "            shown.append('_')",
  "    print(letter, '->', ' '.join(shown), '| misses:', misses)"
].join('\n');

const OUT = [
  't -> _ _ t _ _ _ | misses: 0',
  'a -> _ _ t _ _ _ | misses: 1',
  'o -> _ _ t _ o _ | misses: 1',
  't -> already tried, no penalty',
  'p -> p _ t _ o _ | misses: 1',
  'e -> p _ t _ o _ | misses: 2',
  'y -> p y t _ o _ | misses: 2',
  'h -> p y t h o _ | misses: 2',
  'n -> p y t h o n | misses: 2'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'lima', label: 'Programación para niños en Mi Perú (Callao)' },
  slug: 'clases-de-programacion-para-ninos-mi-peru-callao',
  code: 'pnm',
  accent: '#00580D',
  accentRationale: 'Clases de programación para niños en Mi Perú, Callao: a flag-field green #00580D, purer and darker than the grass green of Ventanilla around it; contrast above 4.5 on the paper #FBF8F2 (alloc.tsv) and on the paper tints, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Clases de programación para niños en Mi Perú',
  title: 'Clases de programación para niños en Mi Perú, Callao',
  description: 'Programación para niños del distrito de Mi Perú, en el Callao: sesiones en vivo dictadas en inglés, desde casa y sin viajar, para chicos de 6 a 12 años, todo el año.',
  ogDescription: 'Mi Perú es un distrito joven dentro de Ventanilla: uno de cada diez vecinos censados tiene de 6 a 11 años. Qué necesita su hijo para programar y un ahorcado en Python.',
  twitterDescription: 'Clases de programación para niños de Mi Perú (Callao), en vivo y en inglés, desde casa.',
  pageName: 'Clases de programación para niños en Mi Perú',
  webPageDescription: 'Guía para familias del distrito de Mi Perú, en la Provincia Constitucional del Callao, que buscan clases de programación para niños de 6 a 12 años: cuántos chicos de cada edad contó el censo de 2025, cómo se conectan los hogares, qué ha hecho la municipalidad por los jóvenes y una lección de Python escrita por nosotros.',
  courseDescription: 'Sesiones de programación en directo por videollamada para niños de 6 a 12 años del distrito de Mi Perú (Callao), dictadas solo en inglés: bloques, juegos, Python e inteligencia artificial explicada, en clase grupal o individual, durante todo el año.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Programación para niños en Mi Perú',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#distrito-joven', label: 'El distrito' },
    { href: '#por-edad', label: 'Por edad' },
    { href: '#senal', label: 'Señal' },
    { href: '#ahorcado', label: 'Ejemplo' },
    { href: '#hora', label: 'Hora' }
  ],
  eyebrow: 'Callao &middot; Distrito de Mi Perú &middot; Niños',
  h1: 'Clases de programación para niños en Mi Perú, en inglés',
  lede: 'Mi Perú es uno de los siete distritos del Callao, rodeado por Ventanilla, con calles nuevas, colinas y muchas familias jóvenes. Si vive aquí y quiere que su hijo aprenda a programar sin salir del distrito, esta página le explica cómo son nuestras sesiones en vivo dictadas en inglés, qué contó el censo de 2025 sobre los chicos y los hogares de Mi Perú, y le muestra un juego de adivinar palabras escrito en Python.',
  secondaryCta: { href: '#senal', label: '¿Y si en casa usamos datos?' },
  wa: 'Hola Modern Age Coders, vivimos en el distrito de Mi Perú (Callao) y queremos clases de programación en inglés para nuestro hijo o hija. ¿Podemos reservar una clase gratis?',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en el mundo &middot; del distrito más joven del Callao a la India, por videollamada',
  spec: [
    ['Lugar', 'Distrito de Mi Perú, Callao'],
    ['Edades', 'De 6 a 12; adolescentes aparte'],
    ['Idioma', 'Inglés claro, sin apuro'],
    ['Formato', 'Grupo de quince a veinte, o a solas'],
    ['Requisito', 'Laptop o PC; el celular no basta'],
    ['Primera clase', 'Gratis, sin tarjeta']
  ],
  capsuleQ: 'Lo principal',
  capsule: 'Sí: un chico de 6 a 12 años del distrito de Mi Perú, en el Callao, puede aprender a programar en casa con Modern Age Coders. Las sesiones son en vivo, por cámara, y se dictan en inglés, en cualquier época del año. Su mentor, radicado en la India, le enseña bloques, juegos, Python y qué hay detrás de la IA, a su ritmo. Necesita una laptop o PC y una señal estable. Usted escoge grupo o sesiones a solas, y la hora; la primera sesión es gratis.',

  picks: {
    eyebrow: 'Cursos para empezar',
    h2: 'Tres cursos para los chicos de Mi Perú',
    lede: 'Uno para los que empiezan con juegos, uno para escribir el primer código y uno para entender la inteligencia artificial sin miedo.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'PNM / 01', title: 'Hacer sus propios juegos', alt: 'Imagen del curso de desarrollo de videojuegos para niños', note: 'Para chicos de 8 a 12 años. En vez de solo jugar, diseñan reglas, vidas y puntajes, como en el juego de adivinar palabras de esta página.' },
      { course: 'python-ai-kids-masterclass', code: 'PNM / 02', title: 'Python para chicos', alt: 'Imagen del curso de Python e IA para niños', note: 'Desde 4° o 5° grado. Cadenas de texto, listas, conjuntos y bucles, aprendidos armando juegos cortos y algún proyecto sencillo de IA.' },
      { course: 'ai-literacy-for-kids-course', code: 'PNM / 03', title: 'Entender la IA', alt: 'Imagen del curso de alfabetización en inteligencia artificial para niños', note: 'Desde los 8 años. Cómo "piensa" un asistente de IA, por qué a veces se equivoca y cómo usarlo con cuidado y con permiso de un adulto.' }
    ]
  },

  sections: [
    {
      id: 'distrito-joven',
      eyebrow: 'Un distrito joven',
      h2: '¿Pueden los niños de Mi Perú aprender programación sin salir del distrito?',
      lede: 'Sí. Nuestras sesiones llegan a la casa por internet y en directo: el chico programa en su computadora y un mentor desde la India lo acompaña, hablando en inglés toda la hora. Ningún traslado.',
      body: [
        { kind: 'p', html: 'Para evitar confusiones: hablamos del distrito de Mi Perú, en la Provincia Constitucional del Callao, que está completamente rodeado por el distrito de Ventanilla. En los Censos Nacionales 2025 del INEI tiene 52,102 habitantes y es el quinto de los siete distritos del Callao por población (orden nuestro con el Cuadro N.° 1). Toda su población censada es urbana.' },
        { kind: 'p', html: 'Un dato curioso del mismo cuadro: en Mi Perú, la población omitida, es decir, la que el INEI estima que no llegó a censarse, es apenas 824 personas, el 1.6 % del total (cálculo nuestro). Las cifras por edad de esta página, por eso, se acercan mucho a la realidad del distrito.' },
        { kind: 'p', html: 'Para un chico de Mi Perú, casi cualquier academia queda fuera del distrito. No damos minutos de viaje porque no los medimos, pero sí sabemos que repetir ese trayecto dos o tres tardes por semana cansa a cualquier familia. Con la sesión en casa, el tiempo del viaje se convierte en tiempo de práctica.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Desde su cuarto', p: 'El niño entra al enlace y empieza. Si hubo un imprevisto en la tarde, igual llega a tiempo.' },
          { h3: 'Atención real', p: 'Un mentor que ve su pantalla, le pregunta y espera su respuesta. Nada de videos grabados.' },
          { h3: 'Inglés de verdad', p: 'Las órdenes del código y la conversación van en inglés. El idioma se usa para crear algo, no para llenar un examen.' }
        ] },
        { kind: 'p', mt: true, html: 'Para conocer lo que hacemos en todo el Callao, la página en inglés <a class="ag-inline-link" href="/online-coding-and-ai-classes-callao-region-peru">online coding and AI classes in the Callao region</a> resume la provincia. Y si quiere entender primero cómo funciona aprender por videollamada, vea <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online</a>.' }
      ]
    },
    {
      id: 'por-edad',
      eyebrow: 'Mi Perú en el censo',
      h2: '¿Qué edades tienen los chicos del distrito?',
      lede: 'Hay de 814 a 1,003 por cada edad entre 6 y 12. En total, el INEI registró 5,547 vecinos de 6 a 11 años y 5,738 de 12 a 17: el 10.8 % y el 11.2 % de quienes fueron censados (porcentajes nuestros).',
      body: [
        { kind: 'table', numCols: [1], caption: 'Chicos del distrito de Mi Perú contados uno por edad cumplida (INEI, 2025)', head: ['Edad', 'Censados en Mi Perú', 'Grado (edad normativa)', 'Proyecto para empezar (nuestro)'], rows: [
          ['6 años', '862', '1° de primaria', 'Un personaje que camina y salta'],
          ['7 años', '814', '2° de primaria', 'Un juego de atrapar en Scratch'],
          ['8 años', '949', '3° de primaria', 'Un juego con vidas y puntaje'],
          ['9 años', '993', '4° de primaria', 'Primeras palabras en Python'],
          ['10 años', '937', '5° de primaria', 'Adivinar palabras, como el ejemplo'],
          ['11 años', '992', '6° de primaria', 'Un juego completo con niveles'],
          ['12 años', '1,003', '1° de secundaria', 'Python o juegos para adolescentes']
        ] },
        { kind: 'source', html: 'Fuente: INEI, cuadro de edades simples (N.° 2) para el Callao, censo con referencia al 15 de septiembre de 2025. Grado: según cómo el MINEDU asigna la edad normativa, tomando la edad cumplida al 31 de marzo. Proyectos: idea de Modern Age Coders.' },
        { kind: 'two', mt: true,
          leftH3: 'Muchos chicos, pocos abuelos',
          left: [
            'Los vecinos censados con 60 años o más son 5,699, menos que los chicos de 6 a 11 y menos que los de 12 a 17 (Cuadro N.° 3). Es lo contrario de lo que pasa en los distritos más antiguos del Callao.',
            'Uno de cada diez vecinos censados está en edad de primaria. Para un distrito así, que haya formas de aprender sin salir de casa importa.'
          ],
          rightH3: 'Lo que hace la municipalidad',
          right: [
            'En agosto de 2022, la municipalidad aprobó la "Ordenanza N° 088/ MDMP" que creó el Concejo Distrital de la Juventud, con representantes de organizaciones juveniles e "instituciones educativas secundarias".',
            'En julio de 2023 informó que, "Luego de más de 4 años", los colegios del distrito, "de los niveles de inicial, primaria y secundaria", volvieron a desfilar en la Av. Ayacucho.'
          ] },
        { kind: 'p', mt: true, html: 'La municipalidad también cuenta que en febrero de 2022 empezó a elaborar "la cartografía a escala 1:1000 del distrito a través de Naves Remotamente Piloteadas (Drones)". Mapas hechos con drones y procesados por computadora: un buen ejemplo para explicarle a un chico para qué sirve programar. Citamos estas notas solo para describir el distrito; no tenemos ninguna relación con la Municipalidad de Mi Perú.' }
      ]
    },
    {
      id: 'senal',
      eyebrow: 'Equipo y señal',
      h2: '¿Qué necesita un niño de Mi Perú para una sesión virtual?',
      lede: 'Teclado, cámara y sesenta minutos de señal firme. En los hogares de Mi Perú, de acuerdo con el INEI, la conexión por datos (66.1 %) va por delante de la línea fija (50.6 %), y hay laptop en una de cada cuatro casas. Por eso conviene revisar las dos cosas antes de empezar.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Equipos y servicios de los hogares de Mi Perú y de todo el Callao, Censos Nacionales 2025 (porcentajes nuestros)', head: ['Con este equipo o servicio', 'Mi Perú (14,692 hogares)', 'Provincia del Callao'], rows: [
          ['Teléfono celular', '14,594 (99.3 %)', '99.3 %'],
          ['Internet móvil', '9,707 (66.1 %)', '74.0 %'],
          ['Internet fijo', '7,434 (50.6 %)', '54.8 %'],
          ['Laptop', '3,570 (24.3 %)', '33.2 %'],
          ['Computadora de escritorio', '2,256 (15.4 %)', '23.2 %'],
          ['Tableta', '1,107 (7.5 %)', '14.3 %']
        ] },
        { kind: 'source', html: 'INEI, Censos Nacionales 2025, archivo de equipamiento del hogar para el Callao; equipos en el primer cuadro y servicios en el segundo, fila de hogares del distrito de Mi Perú y de la provincia. Un hogar puede tener varias de estas cosas a la vez, así que las filas no se suman.' },
        { kind: 'two', mt: true,
          leftH3: 'Lo que no se puede reemplazar',
          left: [
            'Un teclado. Desde los 9 o 10 años su hijo va a escribir código, y eso no se hace con comodidad en un teléfono. Una laptop o PC compartida en casa sirve, si se reserva para la hora de la sesión.',
            'Sin computadora en casa, la sesión no va a funcionar bien, y se lo diremos claramente durante la prueba gratuita. Preferimos perder una inscripción a vender una clase que falla.'
          ],
          rightH3: 'Si se conectan con datos',
          right: [
            'Con datos se puede, siempre que la cobertura no flaquee. Ensaye con una llamada de video prolongada desde el rincón de estudio, en el horario elegido.',
            'Aunque el video tiemble, mientras la voz llegue clara la sesión sigue. Con audífonos y micrófono, el inglés del mentor se distingue sin esfuerzo.'
          ] },
        { kind: 'p', mt: true, html: 'Mostramos estos números solo para responder una pregunta práctica: si en una casa típica del distrito se puede tomar una clase en línea. No dicen nada de las familias de Mi Perú, y cada caso se revisa en la sesión gratis.' }
      ]
    },
    {
      id: 'ahorcado',
      tint: 'tint',
      eyebrow: 'Una lección de ejemplo',
      h2: '¿Cómo se programa un juego de adivinar palabras?',
      lede: 'Letra por letra. Lo inventamos para alumnos de 5° y 6° grado: una palabra secreta en inglés, una lista de intentos y un programa que muestra las letras descubiertas, cuenta los errores y no castiga una letra repetida.',
      body: [
        { kind: 'code', label: 'Adivinar la palabra secreta', lang: 'Python', code: PY, note: '<code>tried</code> es un conjunto (<code>set</code>): guarda cada letra una sola vez y responde rápido si una letra ya está. <code>continue</code> salta al siguiente intento sin contar nada.' },
        { kind: 'code', label: 'Lo que sale en pantalla', lang: 'Salida', code: OUT, note: 'Esta es la salida literal de nuestra corrida con Python 3. La segunda <code>t</code> no suma un error: el programa la reconoce y la deja pasar.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Jugar primero en papel.</strong> El mentor dibuja seis rayas y los chicos dicen letras en inglés: "tee", "ay", "oh". Así se aprende también a deletrear en inglés.',
          '<strong>Leer el bucle interno.</strong> Para cada letra de <code>secret</code>, si ya fue adivinada se muestra; si no, una raya. "What does the word look like after the letter o?"',
          '<strong>El intento repetido.</strong> Sin el conjunto, la segunda <code>t</code> se contaría de nuevo. Con <code>if letter in tried</code> el programa avisa "already tried, no penalty" y sigue.',
          '<strong>Contar errores.</strong> Solo <code>a</code> y <code>e</code> no están en "python", así que al final hay 2 errores. El niño lo comprueba contando con los dedos.',
          '<strong>Su versión.</strong> El reto: elegir otra palabra secreta en inglés, ponerle un límite de seis errores y que el programa diga "You win!" o "Game over" según corresponda.'
        ] },
        { kind: 'p', mt: true, html: 'Con un juego sencillo, el niño practica cadenas de texto, listas, conjuntos, condiciones y bucles, y además deletrea en inglés. Pero lo más valioso es la pregunta que el mentor repite: "¿qué pasa si el jugador hace algo raro?" Pensar en el caso inesperado, como la letra repetida, es lo que distingue a quien programa de quien copia una solución. Si a su hijo le interesa la IA, <a class="ag-inline-link" href="/curso-de-inteligencia-artificial-para-ninos-peru">el curso de inteligencia artificial para niños</a> explica cómo la enseñamos.' }
      ]
    },
    {
      id: 'hora',
      eyebrow: 'Inglés y hora',
      h2: '¿Necesita saber inglés mi hijo, y a qué hora se conecta?',
      lede: 'Puede empezar sin saber inglés, y usted elige la hora. En la India, donde está el mentor, el reloj marca diez horas y media más que en Mi Perú, en cualquier estación. Unos ejemplos:',
      body: [
        { kind: 'table', numCols: [], caption: 'Hora de Mi Perú y hora de la India (equivalencias de muestra; no es un calendario de sesiones)', head: ['Mi Perú', 'India', 'Calendario indio'], rows: [
          ['6:30 a. m.', '5:00 p. m.', 'Misma fecha'],
          ['10:30 a. m.', '9:00 p. m.', 'Misma fecha'],
          ['1:00 p. m.', '11:30 p. m.', 'Misma fecha'],
          ['3:30 p. m.', '2:00 a. m.', 'Fecha siguiente'],
          ['6:30 p. m.', '5:00 a. m.', 'Fecha siguiente']
        ] },
        { kind: 'source', html: 'Referencias: la hora legal peruana del INACAL (UTC-5, invariable) y la base de husos tzdata, zona America/Lima; para la India, UTC+5:30 fijo. Ni allá ni acá se adelantan relojes.' },
        { kind: 'two', mt: true,
          leftH3: 'El idioma, poco a poco',
          left: [
            'El mentor usa frases cortas, señala en la pantalla y espera. Cuando su hijo contesta en castellano, el mentor le regala la versión inglesa para repetir. Las primeras semanas son de acostumbrar el oído.',
            'En el EF EPI 2025, la región Callao tiene 518 puntos, en el nivel moderado. Ese índice mide adultos, no niños; pero muestra que practicar inglés hablado con un propósito, como terminar un juego, vale la pena.'
          ],
          rightH3: 'Las horas preferidas',
          right: [
            'Muchos chicos se conectan a media tarde, ya en casa y con las tareas avanzadas; los que estudian en el turno tarde prefieren la mañana.',
            'Al reservar, los horarios disponibles se muestran directamente en hora de Perú.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Avance',
    h2: '¿Cómo va a notar que su hijo aprende?',
    lede: 'Cinco marcas inventadas por nosotros sirven de termómetro para la familia; ninguna se parece a una calificación escolar.',
    table: { caption: 'Marcas de avance en programación para primaria (propias de Modern Age Coders)', head: ['Marca', 'Edad frecuente', 'Lo que su hijo hace'], rows: [
      ['1. Mueve', '6 a 7 años', 'hace caminar y saltar a un personaje con bloques'],
      ['2. Lleva la cuenta', '7 a 9 años', 'usa una variable para las vidas o el puntaje de su juego'],
      ['3. Recorre un texto', '9 a 10 años', 'pasa letra por letra por una palabra con un bucle'],
      ['4. Prevé lo raro', '10 a 11 años', 'hace que su juego no castigue una letra repetida'],
      ['5. Termina un juego', '11 a 12 años', 'completa un juego con reglas, final y explicación en inglés']
    ] },
    left: { h3: 'Para la familia', ps: [
      'Juegue con su hijo al juego que programó. Si usted encuentra un error, él aprende a corregirlo.',
      'Un juego terminado vale más que varios empezados. Ayúdelo a cerrar lo que comienza.'
    ] },
    right: { h3: 'Para el chico', ps: [
      'Antes de entregar un juego, intente romperlo: repita letras, escriba mayúsculas, haga lo inesperado.',
      'Diga en inglés qué hace cada parte de su programa.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'El resto del camino: nueve cursos',
    lede: 'Con el mismo formato: en directo, en inglés y con un mentor fijo por curso, en grupo o a solas.',
    bands: [
      { num: 'I', h3: 'Los más pequeños', sub: 'Primaria baja', courses: [
        { code: 'PNM / BASE / 01', slug: 'kids-coding-blocks-masterclass', title: 'Bloques de colores', blurb: 'Dar órdenes sin teclear, encajando piezas.' },
        { code: 'PNM / BASE / 02', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Pensar con lógica', blurb: 'Series, patrones y acertijos para empezar.' },
        { code: 'PNM / BASE / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft con código', blurb: 'Construcciones que se arman solas.' }
      ] },
      { num: 'II', h3: 'Crear más', sub: 'Primaria alta', courses: [
        { code: 'PNM / CREA / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Juegos con niveles, sonidos y puntaje.' },
        { code: 'PNM / CREA / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Studio', blurb: 'Programar un mundo propio con Luau.' },
        { code: 'PNM / CREA / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps con bloques', blurb: 'Pantallas y botones propios, armados con bloques.' }
      ] },
      { num: 'III', h3: 'Secundaria', sub: 'Adolescentes', courses: [
        { code: 'PNM / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python completo', blurb: 'De variables a proyectos con datos.' },
        { code: 'PNM / SEC / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Juegos para adolescentes', blurb: 'Física, niveles y personajes más elaborados.' },
        { code: 'PNM / SEC / 03', slug: 'teens-ai-tools-mastery-course', title: 'Herramientas de IA', blurb: 'Usar la IA con criterio, para adolescentes.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Cómo funciona',
    h2: '¿Qué ocurre durante una semana de curso?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Mañana', l: 'Para chicos que estudian por la tarde.' },
      { time: 'Tarde', l: 'Al volver del colegio, después de comer.' },
      { time: 'Individual', l: 'El horario que la familia acuerde con nosotros.' }
    ],
    cells: [
      { h3: 'Mentor fijo', p: 'Una sola persona acompaña el curso entero.' },
      { h3: 'Inglés pausado', p: 'Frases claras y tiempo para contestar.' },
      { h3: 'Teclea su hijo', p: 'Él escribe el código; el mentor orienta.' },
      { h3: 'Juego terminado', p: 'Cada etapa deja algo jugable en casa.' },
      { h3: 'Avisos a casa', p: 'Un breve resumen al terminar cada etapa.' },
      { h3: 'Grupo o a solas', p: 'Quince a veinte compañeros, o el mentor solo para él.' }
    ]
  },

  projectsH2: 'Lo que crean nuestros estudiantes',
  projectsLede: 'De adivinar palabras a publicar juegos enteros hay un trecho que algunos alumnos ya recorrieron. Vea varios de sus trabajos; el archivo completo está en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Así califican en Google padres y alumnos de otros países (textos sin traducir).',

  fees: {
    h2: 'Precios para familias de Mi Perú',
    lede: 'Cobramos una cuota por mes, fijada en moneda de EE. UU., mediante tarjeta. Su entidad bancaria la pasa a soles al momento del débito; pequeñas diferencias se deben al cambio del día.',
    free: ['Sesión de prueba gratis, en directo', 'Revisión de señal y equipo', 'Sin tarjeta, sin compromiso'],
    group: ['Quince a veinte chicos de edad cercana', 'Un mentor fijo durante el curso', 'Dos sesiones en directo por semana', 'Pago mes a mes, sin permanencia'],
    one: ['Solo su hijo con el mentor', 'Ritmo y temas a medida', 'Horario a elección de la familia']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Programación para niños en Mi Perú: preguntas frecuentes',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Todas las sesiones son en inglés y en directo, y eso le suma a su hijo: mientras programa, escucha, deletrea y habla en otro idioma. El mentor habla despacio, cambia la frase si no se entiende y la apoya en la pantalla. La región Callao tiene 518 puntos en el EF EPI 2025, nivel moderado, y conversar en inglés cada semana ayuda a subir ese nivel.' },
      { q: '¿Esta página es sobre el distrito de Mi Perú?', a: 'Sí. Hablamos del distrito de Mi Perú en la Provincia Constitucional del Callao, rodeado por Ventanilla. Las clases son las mismas en todo el país, pero las cifras de esta página son de ese distrito.' },
      { q: '¿Cuántos niños hay en Mi Perú?', a: 'Para el INEI (censo 2025), el distrito suma 52,102 habitantes; de ellos, 5,547 censados tienen de 6 a 11 años y 5,738 de 12 a 17.' },
      { q: '¿Sirven los datos móviles?', a: 'Sirven, con cobertura firme. Dos de cada tres casas del distrito (66.1 %) navegan con datos y la mitad (50.6 %) tiene línea fija, según el INEI. Haga un ensayo de videollamada antes.' },
      { q: '¿Se puede programar desde el celular?', a: 'Poco y mal: escribir código pide teclado. Solicitamos laptop o computadora de escritorio con cámara; en el censo, un 24.3 % de los hogares del distrito tenía laptop.' },
      { q: '¿Desde qué edad?', a: 'Desde 1° de primaria, a los 6 años. Primero bloques y juegos; hacia 4° o 5° grado, Python escrito.' },
      { q: '¿Qué horario tienen?', a: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Si su hijo entra a las 10:30 a. m. en Mi Perú, en la India el mentor lo saluda a las 9:00 p. m.' },
      { q: '¿Debo dejar una tarjeta para probar?', a: 'No. La prueba es libre de pago. Si después se inscribe, se cobra mensualmente a una tarjeta, en moneda de EE. UU., y el banco convierte.' },
      { q: '¿Son parte de algún programa público?', a: 'No. Somos una escuela privada, ajena a la Municipalidad de Mi Perú, a la DRE Callao, al MINEDU y a los colegios; no ponemos notas. Lo único que emitimos es una constancia propia al completar un curso.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Más para leer',
    h2: 'Otras páginas para familias de Mi Perú',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region (en inglés)', p: 'La provincia del Callao y nuestra oferta allí.' },
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación online para niños', p: 'Cómo se aprende a programar por videollamada.' },
      { href: '/curso-de-inteligencia-artificial-para-ninos-peru', label: 'IA para niños', p: 'Inteligencia artificial explicada para chicos de primaria.' },
      { href: '/programacion-para-ninos-de-12-anos', label: 'Programación a los 12 años', p: 'El paso de primaria a secundaria.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Resumen en inglés de nuestra oferta peruana.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Así trabaja un mentor nuestro (texto en inglés).' }
    ]
  },

  start: {
    h2: 'Agende la prueba gratuita desde Mi Perú',
    lede: 'Empezamos revisando la señal, la cámara y el audio. Luego el mentor juega con su hijo a adivinar una palabra en inglés y le pide cambiar una regla del juego, para ver cómo razona. Con eso le recomendamos curso y formato, sin compromiso.',
    readFirst: 'Lectura previa opcional (en inglés): <a class="ag-inline-link" href="/how-we-teach">How we teach</a> y el catálogo <a class="ag-inline-link" href="/courses">All courses</a>.',
    note: 'Las sesiones las da un mentor en la India, en vivo y en inglés; el chat de WhatsApp, en cambio, funciona en castellano.',
    formNote: 'Gratis, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Para empezar', links: [
        { href: '/courses/game-development-masterclass-for-kids', label: 'Hacer sus propios juegos' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python para chicos' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'Entender la IA' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Para familias', links: [
        { href: '/online-coding-and-ai-classes-callao-region-peru', label: 'Callao region' },
        { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación online' },
        { href: '/coding-and-ai-classes-in-peru', label: 'Nuestras clases en Perú' },
        { href: '/student-labs', label: 'Proyectos' }
      ] }
    ],
    bottomRight: 'Una letra repetida no cuenta dos veces'
  },

  personalityCss: `
.ag-root.ag-pnm .ag-hero h1 { letter-spacing: -0.01em; max-width: 21ch; }
.ag-root.ag-pnm .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-pnm .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pnm .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-pnm .ag-steps li { line-height: 1.59; }
`,

  dossier: {
    curriculumAuthority: 'INEI Censos Nacionales 2025: Indicadores demográficos de la Provincia Constitucional del Callao (Cuadros N.° 1, 2 and 3) and Equipamiento del hogar (Cuadros N.° 1 and 2), district rows for Mi Perú; Municipalidad Distrital de Mi Perú notes on gob.pe of 14 February 2022, 7 August 2022 and 23 July 2023; MINEDU Edades normativas; EF EPI 2025; tzdata and INACAL. The guessing-game example, the projects and the marks are our own.',
    localProject: 'A word-guessing game for a child of 10 to 12 in Mi Perú: the secret word python, a list of guesses with a repeated t, a set of tried letters, a masked word rebuilt each turn with join; the output ends n -> p y t h o n | misses: 2, and the second t prints t -> already tried, no penalty. Run with python3 -I. Lesson family: masked word built letter by letter; a set so a repeated guess is not counted twice.',
    requiredMentions: ['already tried, no penalty', 'What does the word look like after the letter o?', 'Ordenanza N° 088/ MDMP', 'la cartografía a escala 1:1000 del distrito a través de Naves Remotamente Piloteadas (Drones)', 'Censados en Mi Perú', '9,707 (66.1 %)', 'es apenas 824 personas, el 1.6 % del total', 'Una letra repetida no cuenta dos veces', 'el quinto de los siete distritos del Callao por población'],
    sources: [
      { claim: 'Mi Perú 52,102 inhabitants, censada 51,278 (all urban), omitida 824, 5,547 aged 6 to 11, 5,738 aged 12 to 17, 5,699 aged 60+, single ages 6 to 12.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/poblacion/Indicadores_demograficos.xlsx' },
      { claim: 'Mi Perú households 14,692: mobile internet 9,707, fixed internet 7,434, laptop 3,570, computer 2,256, tablet 1,107, phone 14,594; Callao province shares.', url: 'https://proyectos.inei.gob.pe/dir-segmentacion-ci/postcensal/prod/adjuntos/censos-2025/descarga_datos/tabulados/07/hogar/Equipamiento_del_hogar.xlsx' },
      { claim: 'Ordinance 088/MDMP creating the district youth council, with secondary schools among its members (7 August 2022).', url: 'https://www.gob.pe/institucion/munimiperu/noticias/638751' },
      { claim: 'School parade back after more than 4 years, inicial, primaria and secundaria, Av. Ayacucho (23 July 2023).', url: 'https://www.gob.pe/institucion/munimiperu/noticias/808731' },
      { claim: 'District cartography at 1:1000 made with drones (14 February 2022).', url: 'https://www.gob.pe/institucion/munimiperu/noticias/583778' },
      { claim: 'EF EPI 2025: Callao region 518 moderate.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru UTC-5 with no DST; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'The creation date of the district: not printed; the law PDF found is a scan without a text layer, so nothing could be quoted.',
      'The municipality\'s claim of being the first district to map with drones: not repeated.',
      'Officials named in the municipal notes: left out on purpose.',
      'Income, class or strata readings of the household figures: refused.',
      'Travel times out of the district: no figure used.',
      'Spanish-language teaching: refused; the capsule and an FAQ say the classes are in English only.'
    ]
  }
};

// SHIP: market | Cuánto cuestan las clases de programación para niños en Perú: qué mueve el precio | cost per live hour: one-off costs spread over months, and a guard for zero live hours
'use strict';
// ¿Cuánto cuestan las clases de programación para niños en Perú? (ag- Spanish-language door, Peru cluster row PE147, P4 cost,
// hubGroup guides). Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (sections 3 and 6: cost pages explain what
// drives cost and show our fee through the template only; no competitor prices, no soles); writer brief
// docs/superpowers/plans/2026-11-09-pe-writer-brief.md. Owner 2026-11-09: "make sure all our classes are live online in
// english". Owner 2026-11-08: timing flexible, any time. Formal "usted" throughout. "Mejor" appears only inside the two
// uses of the timing line (how.lede and one FAQ).
// Searches (KEYWORDS.md sections 1, 3 and 6): "clases de programacion para niños precio", "clases de programacion para niños
// peru", "clases virtuales de programación para niños"; question "¿Cuánto cuestan las clases de programación para niños en
// Perú?" (Appendix B prompt 29).
// Spine: no single price exists, so the page explains the five things that move it (live or recorded, group or one to one,
// live hours, materials and kits, the family's own equipment), how to compare offers per live hour (with the 45-minute
// school hour as a trap), the costs that do not appear in a quote (computer and internet at home: INEI TIC II trimestre 2026;
// kits: MINEDU's own robotics framing), what is free (school, OPI), and where our own fee is (the template fees cards: USD,
// monthly, eight live classes). One original calculator with invented amounts in "unidades" that are no provider's prices.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/cuanto-cuestan-clases-de-programacion-para-ninos-peru/,
// fetched 2026-11-08 with curl by the research pass, every quote grepped in the raw text):
//  INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026, N° 03 Setiembre 2026 (inei_tic_iit2026.txt): "el 64,5% de
//    los hogares del país contaba con servicio de Internet. Por área de residencia, en Lima Metropolitana, el 84,7% de los
//    hogares disponía del servicio; en el resto urbano, el 66,2%; mientras que, en el área rural solo el 27,1% tenía acceso.";
//    "el 36,4% de los hogares del país disponía de al menos una computadora. Este porcentaje alcanzó el 53,3% en Lima
//    Metropolitana, el 41,3% en el resto urbano y 8,9% en el área rural."; "el 74,3% cuenta con una sola unidad; mientras que, el
//    25,7% dispone de dos o más computadoras en el hogar."; "el 50,9% de los hogares con cuatro o más miembros contaba con al
//    menos una computadora, frente al 23,4% de los hogares conformados por tres personas."; "el 87,4% destina su uso
//    exclusivamente a actividades del hogar"; "Lima Metropolitana incluye la Provincia Constitucional del Callao."
//  CNEB, MINEDU (cneb.txt): "horas pedagógicas (45 minutos)" (FACTS 44).
//  MINEDU, Robótica educativa (minedu-robotica.txt, whitespace-normalised): "la robótica en educación no es el objetivo, es el
//    medio."; "en los años 2009 y 2010, el MINEDU dota de Kits LEGO Wedo a casi el 100% de Instituciones Educativas de Gestión
//    Pública de Educación Primaria a nivel nacional" (FACTS 52 to 54).
//  OPI home, UTEC (opi-home.txt): "abiertas gratuitamente a todos los estudiantes de secundaria del país".
//  Template: fees cards in USD (data-price anchors, coding.international.group and .personal), "al mes, ocho clases en vivo";
//    pricing.config.jsonc display.classesPerMonth 8 and hoursPerClass 1 (international plans). No figure typed on the page.
//  Brand facts: 10,000+ students worldwide, 4.9 from 547 Google reviews, since 2020; group 15 to 20, one to one.
//  Time: tzdata America/Lima -5:00, Asia/Kolkata +5:30.
// Our own program costo_hora.py (src-pages folder), all amounts invented "unidades", run with python3 -I, exact output:
//    Videos grabados      total   150  sin horas en vivo: no se puede comparar por hora
//    Taller con kit       total   630   24 h en vivo   26.25 por hora
//    Grupo en vivo        total   420   48 h en vivo    8.75 por hora
//    Individual en vivo   total   960   48 h en vivo   20.00 por hora
// Lesson family: cost per live hour over a fixed period: one-off costs (a kit) spread over the months, a zero-hours guard
// with continue, and f-string alignment for a comparison table.

const { ES: PE_ES } = require('../../scripts/nl/lib/market-pe');

const PY = [
  '# Montos INVENTADOS en "unidades": no son precios de ningun proveedor ni los nuestros',
  'MESES = 6',
  'planes = {',
  "    'Videos grabados':        {'mensual': 25,  'horas_en_vivo_mes': 0,  'unico': 0},",
  "    'Taller con kit':         {'mensual': 80,  'horas_en_vivo_mes': 4,  'unico': 150},",
  "    'Grupo en vivo':          {'mensual': 70,  'horas_en_vivo_mes': 8,  'unico': 0},",
  "    'Individual en vivo':     {'mensual': 160, 'horas_en_vivo_mes': 8,  'unico': 0},",
  '}',
  '',
  'for nombre, p in planes.items():',
  "    total = p['mensual'] * MESES + p['unico']",
  "    horas = p['horas_en_vivo_mes'] * MESES",
  '    if horas == 0:',
  "        print(f'{nombre:<20} total {total:>5}  sin horas en vivo: no se puede comparar por hora')",
  '        continue',
  "    print(f'{nombre:<20} total {total:>5}  {horas:>3} h en vivo  {total / horas:6.2f} por hora')"
].join('\n');

const OUT = [
  'Videos grabados      total   150  sin horas en vivo: no se puede comparar por hora',
  'Taller con kit       total   630   24 h en vivo   26.25 por hora',
  'Grupo en vivo        total   420   48 h en vivo    8.75 por hora',
  'Individual en vivo   total   960   48 h en vivo   20.00 por hora'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Cuánto cuestan las clases de programación para niños' },
  slug: 'cuanto-cuestan-clases-de-programacion-para-ninos-peru',
  code: 'ccpn',
  accent: '#952755',
  accentRationale: '¿Cuánto cuestan las clases de programación para niños?: a plum rose #952755 (alloc.tsv), a calm money-page colour that avoids the alarm of red; contrast 7.34 on the paper #FBF8F2 and 6.31 on the darkest paper tint, checked by the build',
  pageType: 'market',
  market: PE_ES,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Cuánto cuestan las clases de programación para niños',
  title: '¿Cuánto cuestan las clases de programación para niños en Perú?',
  description: 'Precio de las clases de programación para niños en Perú: qué lo mueve, cómo comparar por hora en vivo, qué costos no aparecen y cuánto cobramos nosotros.',
  ogDescription: 'Qué hace subir o bajar el precio de una clase de programación para niños en Perú, cómo calcular el costo por hora en vivo y qué gastos de equipo conviene prever, con datos del INEI 2026.',
  twitterDescription: 'Cómo comparar precios de clases de programación para niños en Perú, con una calculadora en Python. Nuestras clases: en vivo, en inglés, grupo o individual.',
  pageName: 'Cuánto cuestan las clases de programación para niños en Perú',
  webPageDescription: 'Guía de costos para padres en Perú: los cinco factores que mueven el precio de una clase de programación para niños, cómo compararlas por hora en vivo, la trampa de la hora pedagógica de 45 minutos, cuántos hogares tienen computadora e internet según el INEI, qué es gratis y dónde ver nuestra tarifa mensual.',
  courseDescription: 'Clases de programación en vivo y en línea para niños de 6 a 12 años en todo el Perú, dictadas solo en inglés por mentores desde la India, con pago mensual en dólares estadounidenses: bloques, juegos y Python, en grupo de quince a veinte niños o en clases individuales, a cualquier hora, sin matrícula ni kits.',
  crumbs: [{ name: 'Cursos', href: '/courses' }, { name: 'Perú', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Costo de las clases para niños',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Perú' },
    { href: '#factores', label: 'Qué lo mueve' },
    { href: '#por-hora', label: 'Por hora' },
    { href: '#calculadora', label: 'Calculadora' },
    { href: '#ocultos', label: 'Costos ocultos' },
    { href: '#nuestro', label: 'Nuestro precio' }
  ],
  eyebrow: 'Perú &middot; Precios &middot; Niños de 6 a 12 años',
  h1: '¿Cuánto cuestan las clases de programación para niños en Perú?',
  lede: 'Dos ofertas con la misma mensualidad pueden costar el doble una que otra si se mira lo que de verdad se recibe: horas con un profesor, en vivo, atento a su hijo. Esta página le muestra cómo hacer esa cuenta, qué gastos no figuran en el folleto y dónde está nuestra tarifa.',
  secondaryCta: { href: '#por-hora', label: 'Cómo comparar por hora' },
  wa: 'Hola Modern Age Coders, quisiera saber cuánto cuestan sus clases de programación para niños desde Perú y reservar una clase de prueba gratuita.',
  heroNote: 'Enseñamos en vivo desde 2020 &middot; más de 10,000 estudiantes en distintos países &middot; 4.9 de 5 en 547 reseñas de Google',
  spec: [
    ['Moneda', 'Dólares estadounidenses, con tarjeta'],
    ['Periodo', 'Pago mes a mes'],
    ['Incluye', 'Ocho clases en vivo al mes'],
    ['Formatos', 'Grupo de quince a veinte, o individual'],
    ['Extras', 'Sin matrícula, sin kits'],
    ['Primera clase', 'Gratuita']
  ],
  capsuleQ: 'Respuesta breve',
  capsule: 'El precio de las clases de programación para niños en Perú cambia según cinco cosas: si son en vivo o grabadas, si son en grupo o individuales, cuántas horas en vivo incluyen, si exigen kits o materiales y qué equipo necesita su hijo en casa. Para comparar, divida el costo total entre las horas en vivo reales. Modern Age Coders enseña en vivo, en línea y en inglés, con pago mensual en dólares por ocho clases al mes, en grupo o individual, sin matrícula ni kits; la tarifa exacta aparece más abajo.',

  picks: {
    eyebrow: 'Cursos para niños',
    h2: 'Tres cursos y lo que incluye cada mensualidad',
    lede: 'Los tres se pagan igual, mes a mes, y no piden comprar materiales.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CCPN / 01', title: 'Programación con bloques', alt: 'Imagen del curso de programación con bloques para niños', note: 'Desde los 6 años. Solo hace falta una computadora y el navegador; los bloques se arman en pantalla y no hay nada que comprar aparte.' },
      { course: 'python-ai-kids-masterclass', code: 'CCPN / 02', title: 'Python e IA para niños', alt: 'Imagen del curso de Python e inteligencia artificial para niños', note: 'De 9 a 12 años. Python se instala gratis y funciona en una laptop sencilla; las ideas de IA se enseñan programando, sin suscripciones a chatbots.' },
      { course: 'minecraft-coding-for-kids-course', code: 'CCPN / 03', title: 'Programar en Minecraft', alt: 'Imagen del curso de programación en Minecraft para niños', note: 'Para niños que ya juegan Minecraft. Antes de inscribirse, pregunte qué versión del juego hace falta, porque esa licencia sí es un costo de la familia.' }
    ]
  },

  sections: [
    {
      id: 'factores',
      eyebrow: 'Qué lo mueve',
      h2: '¿De qué depende el precio de las clases de programación para niños?',
      lede: 'De cinco factores. Los tres primeros están en la oferta; los dos últimos están en su casa y casi nunca aparecen en el anuncio.',
      body: [
        { kind: 'ol', items: [
          '<strong>En vivo o grabado.</strong> Un curso de videos se graba una vez y se vende muchas; por eso suele costar menos al mes. Una clase en vivo paga el tiempo de una persona que mira a su hijo mientras programa. Son productos distintos aunque tengan el mismo temario.',
          '<strong>Grupo o individual.</strong> En grupo, el tiempo del profesor se reparte entre varios niños y el costo por familia baja. En clase individual, todo el tiempo es para su hijo, y el precio lo refleja.',
          '<strong>Horas en vivo al mes.</strong> Es el número que más varía y el que menos se lee. Una mensualidad con cuatro sesiones no es comparable con una de ocho. Pregunte siempre cuántas clases en vivo hay al mes y cuánto dura cada una.',
          '<strong>Materiales y kits.</strong> Algunos talleres, sobre todo los de robótica, piden comprar un kit al inicio. Ese gasto se paga una vez, pero hay que sumarlo al comparar.',
          '<strong>El equipo de su casa.</strong> Para programar en línea hace falta una computadora y una conexión estable. Si en casa no las hay, ese es el primer costo, y suele ser el más alto.'
        ] },
        { kind: 'p', mt: true, html: 'Ninguno de estos factores dice si una clase es buena o mala; solo explican por qué los precios son tan distintos. Si además quiere saber qué revisar en la calidad de la clase, tenemos una guía de ocho pruebas en <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-en-ingles">clases de programación para niños en inglés</a>, donde también explicamos cómo trabajamos con cada edad.' }
      ]
    },
    {
      id: 'por-hora',
      eyebrow: 'Por hora',
      h2: '¿Cómo comparar precios de clases de programación por hora?',
      lede: 'Sumando todo lo que se paga en un mismo periodo y dividiéndolo entre las horas en vivo que su hijo recibe en ese periodo. Cuatro pasos.',
      body: [
        { kind: 'ol', items: [
          '<strong>Elija un periodo igual para todas las ofertas.</strong> Seis meses funciona bien: es lo que suele durar un primer nivel. Si una oferta se paga por ciclo y otra por mes, llévelas a los mismos seis meses.',
          '<strong>Sume todo lo que pagaría en ese periodo.</strong> Mensualidades, matrícula, kit, licencias de programas y cualquier cobro de inscripción.',
          '<strong>Cuente solo las horas en vivo.</strong> Los videos, los ejercicios en una plataforma y las tareas no cuentan: no hay nadie mirando. Si la oferta dice "clases" sin decir minutos, pregúntelo.',
          '<strong>Divida.</strong> Total del periodo entre horas en vivo del periodo. Ese es el costo real por hora con un profesor, y es el número que conviene comparar.'
        ] },
        { kind: 'p', mt: true, html: 'Cuidado con una trampa muy peruana: la hora pedagógica. El Currículo Nacional del MINEDU mide el tiempo escolar en "horas pedagógicas (45 minutos)". Muchas academias usan esa misma medida. Ocho horas pedagógicas son seis horas de reloj, no ocho. Si una oferta cuenta en horas pedagógicas y otra en horas de reloj, convierta todo a minutos antes de dividir.' },
        { kind: 'p', html: 'Si un curso no tiene horas en vivo, la división no tiene sentido: no se puede comparar por hora algo que no tiene profesor. No significa que sea malo; significa que es otro producto, más parecido a un libro que a una clase.' }
      ]
    },
    {
      id: 'calculadora',
      tint: 'tint',
      eyebrow: 'Calculadora',
      h2: '¿Cómo calcular el costo real por hora de clase? Un ejemplo en Python',
      lede: 'Una calculadora de quince líneas que hace los cuatro pasos. Los planes y los montos son inventados por nosotros, en "unidades" sin moneda: no son precios de ninguna academia ni los nuestros.',
      body: [
        { kind: 'code', label: 'Costo por hora en vivo, con kit incluido', lang: 'Python', code: PY, note: 'Cada plan es un diccionario con la mensualidad, las horas en vivo por mes y un pago único, como un kit. El programa calcula el total de seis meses y lo divide entre las horas en vivo de esos seis meses.' },
        { kind: 'code', label: 'Resultado', lang: 'Salida', code: OUT, note: 'Salida exacta de Python 3 en nuestro equipo. Las cifras son unidades inventadas, no precios.' },
        { kind: 'ol', mt: true, items: [
          '<strong>El más barato al mes no tiene horas.</strong> Los videos grabados suman 150 unidades en seis meses, el total más bajo, pero no hay ninguna hora en vivo. El programa lo detecta con <code>if horas == 0</code> y salta a la siguiente oferta con <code>continue</code>, en vez de dividir entre cero.',
          '<strong>El kit pesa.</strong> El taller con kit cobra 80 al mes, poco más que el grupo, pero el kit de 150 unidades y la mitad de horas lo dejan en 26.25 por hora en vivo, el más caro de todos.',
          '<strong>Grupo e individual, lado a lado.</strong> Con las mismas 48 horas, el grupo sale a 8.75 por hora y el individual a 20.00. La diferencia es el precio de tener al profesor solo para su hijo.',
          '<strong>La alineación.</strong> <code>{nombre:&lt;20}</code> rellena el nombre hasta veinte caracteres y <code>{total / horas:6.2f}</code> imprime con dos decimales. Así la tabla se lee en columnas, como en una hoja de cálculo.',
          '<strong>Pruébelo con sus números.</strong> Reemplace los montos y las horas por los de las ofertas que está mirando. Si una se cuenta en horas pedagógicas, multiplique esas horas por 45 y divida entre 60 antes de ponerlas.'
        ] },
        { kind: 'p', mt: true, html: 'A un niño de 11 o 12 años este ejercicio le enseña algo que no está en el temario de ningún curso de programación: un número aislado engaña, y la pregunta correcta es siempre "¿por unidad de qué?". Si prefiere una calculadora ya hecha para nuestros planes, en inglés, está en <a class="ag-inline-link" href="/coding-fee-calculator">coding fee calculator</a>.' }
      ]
    },
    {
      id: 'ocultos',
      eyebrow: 'Costos ocultos',
      h2: '¿Qué costos no aparecen en el precio de las clases?',
      lede: 'Sobre todo dos: la computadora y la conexión a internet. Los datos del INEI muestran que en muchas casas peruanas ninguna de las dos está garantizada.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Hogares peruanos con computadora y con internet por área de residencia, II trimestre de 2026', head: ['Área', 'Con al menos una computadora', 'Con servicio de internet'], rows: [
          ['Todo el país', '36,4%', '64,5%'],
          ['Lima Metropolitana (incluye Callao)', '53,3%', '84,7%'],
          ['Resto urbano', '41,3%', '66,2%'],
          ['Área rural', '8,9%', '27,1%']
        ] },
        { kind: 'source', html: 'Datos del boletín técnico N.° 03 del INEI (setiembre de 2026) sobre tecnologías de información en los hogares, segundo trimestre de 2026, elaborado con la Encuesta Nacional de Hogares. El INEI las marca como preliminares.' },
        { kind: 'p', mt: true, html: 'La tabla dice que, fuera de Lima, más de la mitad de los hogares urbanos no tiene computadora, y que en el campo casi ninguno la tiene. El mismo boletín agrega dos datos útiles para presupuestar. Entre los hogares que sí tienen computadora, el 74,3% tiene solo una, así que su hijo probablemente la compartirá con hermanos o con el trabajo de los padres. Y la tenencia depende mucho del tamaño de la familia: el 50,9% de los hogares de cuatro o más personas tiene computadora, frente al 23,4% de los hogares de tres.' },
        { kind: 'two',
          leftH3: 'Qué equipo hace falta de verdad',
          left: [
            'Una laptop o una computadora de escritorio sencilla. Un programa escrito por un niño pesa poco y corre en equipos modestos. Un celular sirve para mirar, no para programar.',
            'Audífonos con micrófono, que son baratos y cambian mucho la experiencia de una clase en inglés.'
          ],
          rightH3: 'Kits y robótica',
          right: [
            'El propio MINEDU, en su página de robótica educativa, dice que "la robótica en educación no es el objetivo, es el medio", y recuerda que entre 2009 y 2010 dotó de kits LEGO WeDo a casi todos los colegios públicos de primaria. Un kit puede ser útil, pero no es indispensable para aprender a programar.',
            'Nosotros enseñamos programación, no armado de robots. No pedimos comprar ningún kit, y los robots que programan nuestros alumnos son virtuales, en pantalla.'
          ] }
      ]
    },
    {
      id: 'gratis',
      eyebrow: 'Gratis',
      h2: '¿Hay clases de programación para niños gratis en Perú?',
      lede: 'Hay recursos gratuitos, algunos muy buenos, y conviene usarlos. Lo que rara vez es gratis es el tiempo de un profesor en vivo dedicado a su hijo.',
      body: [
        { kind: 'p', html: 'En el colegio, la competencia digital del Currículo Nacional se trabaja de forma transversal, dentro de otras áreas, sin horas propias de programación; lo que su hijo reciba depende de cada colegio. Para escolares de secundaria, las Olimpiadas Peruanas de Computación de la UTEC son, según su propia página, "abiertas gratuitamente a todos los estudiantes de secundaria del país". Y hay plataformas en línea con ejercicios y videos sin costo.' },
        { kind: 'p', html: 'Nuestra parte gratuita es la primera clase: completa, en vivo, con un mentor y sin pedir tarjeta. Sirve para que usted vea cómo trabaja su hijo y para que el mentor le diga en qué nivel empezaría. Si después decide seguir con recursos gratuitos, la clase igual le habrá servido para saber por dónde empezar.' }
      ]
    },
    {
      id: 'nuestro',
      eyebrow: 'Nuestro precio',
      h2: '¿Cuánto cuestan las clases de Modern Age Coders y qué incluye el pago?',
      lede: 'La tarifa exacta está en las tarjetas de precios de esta página, en dólares estadounidenses. Aquí le explicamos qué cubre ese monto, para que pueda aplicar la cuenta por hora.',
      body: [
        { kind: 'p', html: 'Cobramos un monto mensual, con tarjeta, en dólares estadounidenses; su banco lo convierte a soles el día del cargo, según su propio tipo de cambio. Cada mes incluye ocho clases en vivo, tanto en grupo como en clase individual, como indican las tarjetas. Para obtener nuestro costo por clase, divida el monto de la tarjeta entre ocho.' },
        { kind: 'p', html: 'No cobramos matrícula, no vendemos kits y no hay licencias que comprar para los cursos de bloques ni de Python. Lo que sí necesita su hijo es una computadora con internet, como cualquier clase en línea. Puede dejar de pagar al final de cualquier mes, sin penalidad.' },
        { kind: 'p', html: 'Las clases se dictan en inglés, en vivo, con mentores desde la India. Para muchas familias eso agrega valor: su hijo practica el idioma en cada clase, sin pagar un curso de inglés aparte. Para otras puede ser una dificultad; la clase de prueba sirve para saberlo antes de pagar. Si busca un plan para el verano, vea <a class="ag-inline-link" href="/vacaciones-utiles-2027-programacion-online">vacaciones útiles 2027 de programación online</a>.' }
      ]
    },
    {
      id: 'horario',
      eyebrow: 'Horario',
      h2: '¿A qué hora serían las clases si el mentor enseña desde la India?',
      lede: 'A la que usted reserve. Con Perú en UTC-5 y la India en UTC+5:30 durante los doce meses, la diferencia es fija: diez horas y media.',
      body: [
        { kind: 'p', html: 'Algunas equivalencias, calculadas por nosotros: un martes a las 4:00 p. m. limeñas, en la India ya es miércoles, 2:30 a. m.; un sábado a las 10:00 a. m. en Lima, allá son las 8:30 p. m. del mismo sábado; y a las 7:30 p. m. de Lima le corresponden las 6:00 a. m. de la jornada siguiente en la India. Las incluimos solo para ilustrar la diferencia; el horario de su hijo lo elige usted.' },
        { kind: 'p', html: 'El horario no cambia el precio. Una clase de sábado por la mañana cuesta lo mismo que una de miércoles por la tarde.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lo que recibe',
    h2: '¿Qué debería recibir su hijo por cada mes pagado?',
    lede: 'Una lista de lo que puede exigirnos cada mes, y que puede usar para evaluar cualquier otra oferta. Es nuestra, no una norma.',
    table: { caption: 'Lo que cubre un mes de clases con nosotros (lista nuestra)', head: ['Qué', 'Cuánto', 'Cómo lo comprueba usted'], rows: [
      ['Clases en vivo', 'Ocho al mes', 'Cuente las sesiones en el calendario'],
      ['Mentor', 'El mismo todo el curso', 'Pregunte su nombre a su hijo'],
      ['Proyecto', 'Uno por módulo', 'Pida que se lo muestre en casa'],
      ['Informe', 'Avance y dificultades', 'Llega por mensaje, en lenguaje sencillo'],
      ['Cambio de formato', 'De grupo a individual o al revés', 'Se pide por WhatsApp cuando quiera']
    ] },
    left: { h3: 'Antes de pagar el primer mes', ps: [
      'Haga la clase de prueba con su hijo a su lado los primeros minutos.',
      'Pida por escrito cuántas clases en vivo hay al mes y cuánto dura cada una.'
    ] },
    right: { h3: 'Después del primer mes', ps: [
      'Pregúntele a su hijo qué construyó y pídale que se lo explique.',
      'Si no ve avance, hable con el mentor antes de decidir; a veces basta con cambiar de grupo.'
    ] }
  },

  catalogue: {
    eyebrow: 'Más cursos',
    h2: 'Nueve cursos más, todos con la misma forma de pago',
    lede: 'Mensualidad en dólares, ocho clases en vivo al mes, sin kits. Ordenados por edad.',
    bands: [
      { num: 'I', h3: 'Más pequeños', sub: 'De 6 a 9 años', courses: [
        { code: 'CCPN / PEQUE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch completo', blurb: 'Gratis de instalar: Scratch corre en el navegador.' },
        { code: 'CCPN / PEQUE / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Pensamiento computacional', blurb: 'Retos de lógica que no necesitan ningún programa especial.' },
        { code: 'CCPN / PEQUE / 03', slug: 'mental-maths-mastery-kids', title: 'Cálculo mental', blurb: 'Para combinar con la programación, solo con papel y pantalla.' }
      ] },
      { num: 'II', h3: 'Crear', sub: 'De 8 a 12 años', courses: [
        { code: 'CCPN / CREAR / 01', slug: 'game-development-masterclass-for-kids', title: 'Juegos propios', blurb: 'Herramientas gratuitas para crear y compartir juegos.' },
        { code: 'CCPN / CREAR / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox con Lua', blurb: 'Roblox Studio es gratuito; se programa con una cuenta supervisada.' },
        { code: 'CCPN / CREAR / 03', slug: 'kids-ai-web-development-course', title: 'Páginas web', blurb: 'Solo hace falta un navegador y un editor gratuito.' }
      ] },
      { num: 'III', h3: 'Avanzar', sub: 'De 9 a 12 años', courses: [
        { code: 'CCPN / AVANZAR / 01', slug: 'ai-literacy-for-kids-course', title: 'Entender la IA', blurb: 'Sin suscripciones a herramientas de adultos.' },
        { code: 'CCPN / AVANZAR / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ para niños', blurb: 'Compiladores gratuitos que funcionan en una laptop sencilla.' },
        { code: 'CCPN / AVANZAR / 03', slug: 'maths-through-coding', title: 'Matemática con código', blurb: 'Dos materias del colegio trabajadas en una sola clase.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Funcionamiento',
    h2: '¿Cómo funcionan las clases que se pagan cada mes?',
    lede: 'Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.',
    slots: [
      { time: 'Tarde de semana', l: 'Al volver del colegio.' },
      { time: 'Sábado', l: 'Por la mañana, sin apuro.' },
      { time: 'Verano', l: 'Con más tiempo libre de enero a marzo.' }
    ],
    cells: [
      { h3: 'Ocho sesiones al mes', p: 'El número que usted puede contar y comparar.' },
      { h3: 'Sin matrícula', p: 'Se empieza pagando solo el primer mes.' },
      { h3: 'Sin kits', p: 'Todo el trabajo ocurre en la pantalla.' },
      { h3: 'Mentor fijo', p: 'Una sola persona sigue a su hijo.' },
      { h3: 'Salida libre', p: 'Puede dejar de pagar al terminar cualquier mes.' },
      { h3: 'Grupo o individual', p: 'De quince a veinte niños, o su hijo solo.' }
    ]
  },

  projectsH2: 'Lo que construyen nuestros estudiantes',
  projectsLede: 'Proyectos reales de niños y adolescentes: lo que de verdad compra una mensualidad. Más en <a class="ag-inline-link" href="/student-labs">Student labs</a>, en inglés.',
  reviewsLede: 'Reseñas de familias y estudiantes publicadas en Google, en su idioma original.',

  fees: {
    h2: 'Nuestra tarifa mensual para niños',
    lede: 'Las cifras están en dólares estadounidenses porque en esa moneda se cobra la tarjeta cada mes. El banco de su familia hace la conversión a soles al cobrar. Tampoco hay matrícula ni kits que comprar.',
    free: ['Primera clase completa, gratis', 'Ubicación de nivel', 'Sin datos de tarjeta'],
    group: ['Quince a veinte niños del mismo nivel', 'Ocho clases en vivo al mes', 'Mentor fijo', 'Puede dejarlo cualquier mes'],
    one: ['Solo su hijo con el mentor', 'Ocho clases en vivo al mes', 'Temas y ritmo a su medida']
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2: 'Dudas frecuentes sobre costos y pagos',
    items: [
      { q: '¿Las clases son en español?', a: 'No. Las dictan en inglés y en directo mentores que enseñan desde la India, con frases cortas y ritmo pausado. En la cuenta de costos eso suma: su hijo programa y practica inglés en la misma hora, sobre todo la expresión oral, que el EF EPI 2025 marca como la habilidad más baja del Perú. Lima figura en el nivel alto de ese índice. Con usted coordinamos en castellano.' },
      { q: '¿Cuánto cuestan las clases de programación para niños en Perú?', a: 'Depende de si son en vivo, en grupo o individuales, de cuántas horas en vivo incluyen y de si piden kits. Para comparar, divida el total de un periodo entre las horas en vivo. Nuestra tarifa mensual aparece en las tarjetas de esta página, en dólares.' },
      { q: '¿Por qué cobran en dólares?', a: 'Porque somos una academia en línea con alumnos en muchos países y cobramos con tarjeta en dólares estadounidenses. Su banco convierte el monto a soles.' },
      { q: '¿Cuántas clases incluye cada mes?', a: 'Ocho clases en vivo, tanto en grupo como en clase individual, según las tarjetas de precios.' },
      { q: '¿Hay matrícula o costo de inscripción?', a: 'No. Se paga solo la mensualidad, y la primera clase es gratuita.' },
      { q: '¿Hay que comprar algún kit?', a: 'Ninguno. Todo se programa en la pantalla, sin piezas ni hardware. Lo único necesario es una computadora con internet.' },
      { q: '¿Sale más barato en grupo?', a: 'Sí, la clase en grupo cuesta menos al mes que la individual, porque el tiempo del mentor se reparte. Las dos tarifas están en esta página.' },
      { q: '¿Puedo dejarlo cuando quiera?', a: 'Sí. El pago es mensual y puede dejar de pagar al terminar cualquier mes.' },
      { q: '¿El horario elegido cambia la tarifa?', a: 'No. Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. La tarifa es la misma a cualquier hora.' },
      { q: '¿Sirve un celular para las clases?', a: 'Para mirar sí, para programar no. Hace falta una laptop o una computadora de escritorio, aunque sea sencilla.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Para seguir',
    h2: 'Otras páginas útiles',
    lede: 'En castellano y en inglés.',
    items: [
      { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Clases de programación para niños en inglés', p: 'Cómo enseñamos a cada edad, de los 6 a los 12 años.' },
      { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027 de programación online', p: 'Empezar en el verano peruano, de enero a marzo.' },
      { href: '/talleres-de-verano-programacion-ninos-online', label: 'Talleres de verano de programación para niños', p: 'Ideas de proyectos para las vacaciones.' },
      { href: '/coding-fee-calculator', label: 'Coding fee calculator', p: 'Una calculadora de nuestras tarifas, en inglés.' },
      { href: '/pricing', label: 'Pricing', p: 'Todos nuestros planes en una página, en inglés.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'El índice de nuestras páginas para el Perú.' }
    ]
  },

  start: {
    h2: 'Pruebe una clase antes de pagar nada',
    lede: 'Reserve la clase de prueba gratuita. Su hijo programa con un mentor durante la sesión y, al final, usted recibe una recomendación de curso y de formato, con la tarifa que le correspondería.',
    readFirst: 'Si quiere comparar todos nuestros planes antes, vea <a class="ag-inline-link" href="/pricing">Pricing</a>, en inglés.',
    note: 'Las clases son en directo, por internet y solo en inglés, con mentores que enseñan desde la India. Coordinamos con su familia en castellano.',
    formNote: 'Sin costo, sin tarjeta y sin compromiso.'
  },

  footer: {
    cols: [
      { h4: 'Cursos para niños', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Bloques' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python e IA' },
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Minecraft' },
        { href: '/courses', label: 'Todos los cursos' }
      ] },
      { h4: 'Perú', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Clases en Perú' },
        { href: '/clases-de-programacion-para-ninos-en-ingles', label: 'Programación para niños' },
        { href: '/vacaciones-utiles-2027-programacion-online', label: 'Vacaciones útiles 2027' },
        { href: '/pricing', label: 'Precios' }
      ] }
    ],
    bottomRight: 'Un precio sin horas en vivo al lado no dice nada'
  },

  personalityCss: `
.ag-root.ag-ccpn .ag-hero h1 { max-width: 22ch; letter-spacing: -0.01em; }
.ag-root.ag-ccpn .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccpn .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ccpn .ag-steps li { line-height: 1.6; }
.ag-root.ag-ccpn .ag-section-head h2 { max-width: 32ch; }
`,

  dossier: {
    curriculumAuthority: 'INEI TIC bulletin II Trimestre 2026 (homes with a computer and with internet by area, computers per home, household size); MINEDU CNEB (hora pedagógica of 45 minutes, transversal digital competency); MINEDU robotics page (robotics as a means; LEGO WeDo kits 2009 to 2010); UTEC OPI home (free for secondary students); the template fees cards (USD, eight live classes a month); tzdata. The five factors, the four steps, the monthly list and the Python calculator are our own.',
    localProject: 'A cost-per-live-hour calculator in Python with invented amounts in "unidades" (no provider\'s prices): four plans over six months; recorded videos total 150 with zero live hours and are skipped with continue; a kit workshop totals 630 for 24 live hours (26.25 per hour); a group plan 420 for 48 hours (8.75); a one-to-one plan 960 for 48 hours (20.00). Lesson family: one-off costs spread over a period, a zero-hours guard and f-string alignment.',
    requiredMentions: ['Taller con kit       total   630   24 h en vivo   26.25 por hora', 'Costo por hora en vivo, con kit incluido', 'Hogares peruanos con computadora y con internet por área de residencia, II trimestre de 2026', 'el 74,3% tiene solo una', 'el 50,9% de los hogares de cuatro o más personas tiene computadora, frente al 23,4% de los hogares de tres', 'la robótica en educación no es el objetivo, es el medio', 'Ocho horas pedagógicas son seis horas de reloj, no ocho', 'Lo que cubre un mes de clases con nosotros (lista nuestra)', 'Un precio sin horas en vivo al lado no dice nada'],
    sources: [
      { claim: 'INEI II Trimestre 2026: homes with a computer 36.4% (Lima Metropolitana 53.3%, rest urban 41.3%, rural 8.9%); with internet 64.5% (84.7%, 66.2%, 27.1%); 74.3% of homes with a computer have one; 50.9% of homes of four or more versus 23.4% of homes of three have a computer.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'CNEB: hora pedagógica of 45 minutes; digital competency transversal.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: 'MINEDU robotics: "la robótica en educación no es el objetivo, es el medio"; LEGO WeDo kits to almost all public primary schools in 2009 and 2010.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Peruvian Computing Olympiads are free for all secondary students.', url: 'https://opi.utec.edu.pe/' }
    ],
    rejectedClaims: [
      'Any competitor price, an average market price for Peru or a soles conversion: refused; no primary source exists and the owner\'s rule is one currency.',
      'Typing our own fee: refused; it renders from the template cards in USD.',
      'Calling any offer cheapest or best: refused; the page gives the method only.',
      'A robot kit: refused; we teach coding only.',
      'Invented "per hour" figures presented as real prices: refused; the calculator uses labelled invented units.'
    ]
  }
};

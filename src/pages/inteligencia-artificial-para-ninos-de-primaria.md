---
title: "Inteligencia artificial para niños de primaria, explicada"
description: "Inteligencia artificial para niños de primaria en Perú: qué es, cómo adivina, por qué se equivoca y qué herramientas permite cada edad, con clases en vivo en inglés."
canonical: https://learn.modernagecoders.com/inteligencia-artificial-para-ninos-de-primaria
source: src/pages/inteligencia-artificial-para-ninos-de-primaria.html
---
> Para un niño de primaria, la inteligencia artificial es un programa que aprende patrones de muchos ejemplos y con ellos adivina: qué video le gustará, qué hay en una foto o qué palabra sigue en una frase. Como adivina, puede equivocarse sonando muy segura. En Modern Age Coders los niños de 6 a 12 años la entienden construyéndola, en clases en vivo, en línea y en inglés, sin chatbots ni cuentas de adulto, en grupo o individuales y a cualquier hora.

[Inicio](/) / [Cursos](/courses) / [Perú](/coding-and-ai-classes-in-peru) / IA para niños de primaria

Perú · Inteligencia artificial · 1° a 6° de primaria

# Inteligencia artificial para niños de primaria, sin misterio

Un niño de primaria ya convive con la inteligencia artificial: en los videos que le recomiendan, en el asistente de voz del celular, en los filtros de fotos. Esta guía es para que usted pueda explicársela con palabras simples, entienda por qué a veces se equivoca con tanta seguridad y sepa qué herramientas puede usar su hijo a su edad.

En resumen: Idioma de las clases: Clases en vivo y en línea, solo en inglés, al ritmo del estudiante; los mentores hablan claro y adaptan su velocidad y su acento a cada estudiante; Para quién: Niños de 6 a 12 años, de 1° a 6° de primaria; Qué aprenden: Datos, patrones, predicciones y errores; Herramientas: Scratch, Python y sitios sin cuenta; Chatbots: No los usamos con niños de primaria; Formato: Grupo de quince a veinte, o uno a uno; Idioma: Inglés sencillo, al ritmo del niño. 4.9 de 5 en 547 reseñas de Google.

## Tres cursos para entender la IA según el grado

Para los más pequeños, primero bloques; para quien ya lee con soltura, entender cómo aprende una máquina; para quien escribe en el teclado, construir pequeñas IA en Python.

- [Bloques, juegos y primeros proyectos de IA](/courses/kids-coding-blocks-masterclass): De 1° a 3° de primaria. Antes de hablar de inteligencia artificial, el niño aprende a dar instrucciones en orden, que es lo que una máquina necesita.
- [Entender la inteligencia artificial](/courses/ai-literacy-for-kids-course): Desde los 8 años. Datos, entrenamiento, sesgo y error: lo que hay detrás de una IA, explicado con actividades y sin abrir cuentas.
- [Python e IA para niños](/courses/python-ai-kids-masterclass): Para 4°, 5° y 6° de primaria. Escribir en Python una máquina que adivina, verla fallar y entender por qué, como en el ejemplo de esta página.

## ¿Cómo se le explica la inteligencia artificial a un niño de primaria?

Con una idea que un niño de 7 años entiende: la IA es un programa que mira muchísimos ejemplos, encuentra lo que se repite y lo usa para adivinar. No piensa como una persona, no sabe si lo que dice es verdad y no tiene intenciones; adivina muy bien, y a veces adivina mal.

### Mira ejemplos

Igual que un niño aprende qué es un perro viendo muchos perros, una IA "ve" miles o millones de fotos, frases o canciones. Sin ejemplos, no aprende nada.

### Encuentra patrones

De esos ejemplos saca reglas que nadie le escribió: qué colores suelen tener las frutas, qué palabra suele ir después de otra, qué videos ven juntos los niños de su edad.

### Adivina

Ante algo nuevo, responde con lo más probable según lo que vio. Si los ejemplos eran pocos o raros, la adivinanza sale mal, aunque suene muy convencida.

**Dónde se cruza un niño de primaria con la IA, y cómo explicarlo (nuestra guía)**

| Lo que el niño ve | Qué adivina la IA | Una frase para explicarlo |
|---|---|---|
| El siguiente video que aparece solo | Qué video lo mantendrá mirando | Adivina qué gustará según lo que ya se vio |
| El asistente de voz del celular | Qué palabras dijo la persona | Convierte la voz en letras, y a veces oye mal |
| Un filtro que reconoce la cara | Dónde están los ojos y la boca | Vio muchas caras y busca dónde está la de la foto |
| El corrector del teclado | Qué palabra quería escribir | Adivina la palabra más común que se parece |
| Un juego que se adapta | Qué tan difícil ponerlo | Observa cómo se juega y cambia el nivel |

La tabla no menciona ningún chatbot a propósito. Las IA que conversan, como ChatGPT o Gemini, piden en sus propios términos una edad mínima de 13 años, y no las usamos con niños de primaria. Pero un niño no necesita usar un chatbot para entender cómo funciona uno, igual que no necesita manejar un auto para entender por qué tiene frenos. Más abajo mostramos, con un programa de veinte líneas, cómo una IA de texto arma frases.

Una advertencia para usted, no para su hijo: evite explicar la IA como "un cerebro" o "un robot que piensa". Es una imagen que asusta a algunos niños y que confunde a otros, que luego creen que la máquina sabe cosas. "Adivina con lo que vio" es menos espectacular y mucho más útil.

## ¿Cómo arma frases una inteligencia artificial de texto?

Adivinando la siguiente palabra. Las IA de texto grandes hacen cuentas mucho más complejas, pero la idea de base se puede construir en clase con un niño de 10 u 11 años: contar qué palabra suele ir después de cada palabra y elegir la más frecuente. Este programa es nuestro y lo usamos con 5° y 6° de primaria.

**Una máquina que adivina la siguiente palabra** (Python)
```python
from collections import Counter

text = ("the cat eats fish . the dog eats meat . the cat sleeps on the bed . "
        "the dog sleeps on the floor . the cat eats fish again .")
words = text.split()

next_words = {}
for a, b in zip(words, words[1:]):
    next_words.setdefault(a, Counter())[b] += 1

print('after "the":', dict(next_words['the']))
print('after "eats":', dict(next_words['eats']))

def guess(start, steps):
    sentence = ['the', start]
    word = start
    for step in range(steps):
        word = next_words[word].most_common(1)[0][0]
        sentence.append(word)
    return ' '.join(sentence)

print(guess('cat', 2))
print(guess('dog', 2))
print('"the dog eats fish" in text:', 'the dog eats fish' in text)
```
El texto de entrenamiento son cinco frases cortas en inglés. El programa cuenta, para cada palabra, qué palabras la siguieron y cuántas veces, y luego escribe eligiendo siempre la más común.

**Lo que imprime** (Salida)
```salida
after "the": {'cat': 3, 'dog': 2, 'bed': 1, 'floor': 1}
after "eats": {'fish': 2, 'meat': 1}
the cat eats fish
the dog eats fish
"the dog eats fish" in text: False
```
Copiado exactamente como salió al ejecutar el programa con Python 3 nosotros mismos, sin cambios.

1. **Leer las cuentas.** Después de the vino cat tres veces y dog dos veces. Después de eats vino fish dos veces y meat una. Eso es todo lo que la máquina "sabe".
2. **Predecir antes de ejecutar.** El mentor pregunta: "What will the machine say about the dog?" Casi todos los niños responden "the dog eats meat", porque eso dice el texto.
3. **La sorpresa.** La máquina escribe the dog eats fish. Después de eats, la palabra más común es fish, y la máquina no recuerda de quién se hablaba. La última línea lo confirma: esa frase no está en el texto.
4. **Ponerle nombre.** La frase es fluida, suena bien y es falsa. Ese es el error típico de las IA de texto: dicen lo que suena probable, no lo que es cierto. En clase lo llamamos "a confident guess".
5. **Cambiar los datos.** El reto es agregar frases al texto para que la máquina diga la verdad sobre el perro. Los niños descubren que más datos ayudan, pero que la máquina sigue sin "saber" nada.

Este ejercicio es lo más valioso que puede llevarse un niño de una clase de IA: la máquina que habla bonito no siempre dice la verdad. Cuando, ya adolescente y con la edad que exige cada herramienta, use un asistente de texto, sabrá revisar lo que le responde en lugar de copiarlo. Enseñamos a pensar, no a copiar respuestas, tampoco las de una IA.

## ¿Qué herramientas de inteligencia artificial puede usar un niño de primaria?

Muy pocas por su cuenta, según los términos de las propias empresas. La mayoría de asistentes conversacionales fija una edad mínima de 13 años, y uno, Claude, de 18. Para primaria existen herramientas pensadas para aprender cómo funciona la IA sin crear cuentas.

**Edad mínima que fija cada empresa en sus propios términos**

| Herramienta | Lo que dicen sus términos | ¿Para un niño de primaria? |
|---|---|---|
| ChatGPT | Al menos 13 años; menores de 18 con permiso de madre, padre o tutor | No |
| Google Gemini | 13 años o la edad del país; no funciona con cuentas infantiles de Family Link | No |
| Microsoft Copilot | Al menos 13 años, más en algunos países | No |
| Claude | Al menos 18 años | No |
| Canva AI | 13 años, salvo dentro de Canva Education con supervisión docente | Solo en el colegio, con su docente |
| Teachable Machine | La herramienta no pide edad; guardar el trabajo requiere una cuenta de Google de 13 años o más | Sí, sin guardar y con un adulto cerca |
| Machine Learning for Kids | Los estudiantes no crean cuentas; las da el docente | Sí, a través de un docente |

Fuente: términos y páginas de ayuda de cada empresa, citados textualmente en nuestra auditoría de edades de herramientas de IA del 15 de julio de 2026 (ver [AI tool age guide](/ai-tools-age-guide), en inglés). Las edades pueden cambiar; revise siempre los términos vigentes.

Nuestra regla para primaria es sencilla: ningún niño menor de 13 años crea una cuenta en una herramienta de IA en nuestras clases, y no abrimos chatbots en pantalla para que "jueguen" con ellos. Lo que sí hacemos es construir pequeñas IA en Scratch y en Python, como la máquina de palabras de arriba, y usar herramientas de entrenamiento en el navegador que no piden registro. Así el niño ve el mecanismo por dentro, que es justo lo que un chatbot esconde.

Si en casa ya hay un chatbot que usan los adultos, conviene que el niño no lo use solo. Si lo ve usar, aproveche para mostrar una respuesta equivocada y preguntarle cómo se dio cuenta de que estaba mal. La guía en inglés [AI tool age guide](/ai-tools-age-guide) reúne más de cien herramientas con la cita de cada empresa.

## ¿Se enseña inteligencia artificial en la primaria peruana?

No como curso. En la tabla semanal de primaria del CNEB, las 30 horas pedagógicas se reparten en áreas como Matemática, Comunicación, Inglés y Ciencia y tecnología, y ninguna se dedica a computación ni a inteligencia artificial. Lo digital está en la competencia 28, que es transversal.

### Lo que dice el currículo

La competencia 28 del CNEB, "Se desenvuelve en entornos virtuales generados por las TIC", se trabaja dentro de otras áreas según lo planifique cada docente; no tiene horas propias en la tabla de primaria.

Algunos colegios usan sus horas de libre disponibilidad, tres en 1° y 2° y dos de 3° a 6°, para talleres de computación o robótica. Por eso la experiencia cambia tanto de un colegio a otro.

### Lo que está haciendo el MINEDU con la IA

El MINEDU informó que más de 87,000 docentes se inscribieron en su curso gratuito "Inteligencia artificial (IA) en la práctica docente". Es formación para profesores, no para niños.

También anunció que usará la inteligencia artificial para planificar los aprendizajes en 205 colegios rurales, con unos 27,000 estudiantes. Y su Hackathon 2025 premió proyectos de estudiantes y docentes con inteligencia artificial y robótica.

**Uso de internet de los niños en Perú frente a otras edades, segundo trimestre de 2026**

| Grupo de edad | Usó internet |
|---|---|
| Niños de 6 a 11 años | 68,2 % |
| Adolescentes de 12 a 18 años | 92,5 % |
| Población de 6 años y más | 84,2 % |

Fuente: INEI, informe técnico de Tecnologías de la Información y Comunicación en los Hogares, II trimestre de 2026 (Encuesta Nacional de Hogares). Las notas del MINEDU sobre el curso docente de IA, el plan rural y el Hackathon 2025 están en gob.pe y fueron leídas el 8 de noviembre de 2026.

La cifra del INEI tiene una lectura práctica: según el informe del II trimestre de 2026, cerca de un tercio de los niños de 6 a 11 años no usó internet. Para muchos, el primer contacto consciente con la IA llegará en secundaria, ya con un chatbot en la mano. Un niño que antes entendió en primaria cómo adivina una máquina llega a ese momento con criterio. Nuestras sesiones ocurren fuera del horario escolar, se suman al colegio y no generan calificaciones ni constancias oficiales.

## ¿Qué actividades de inteligencia artificial puede hacer un niño de primaria sin crear cuentas?

Muchas, y la mayoría sin pantalla. La IA se entiende con más claridad jugando a ser la máquina. Estas actividades son nuestras, ordenadas por grado y edad normativa del MINEDU.

**Actividades de IA por grado de primaria, sin cuentas (propuesta nuestra)**

| Grado y edad | Actividad | Lo que aprende |
|---|---|---|
| 1° de primaria, 6 años | Ordenar tarjetas de frutas por color y luego por tamaño | Clasificar es elegir una regla |
| 2° de primaria, 7 años | Adivinar el animal con preguntas de sí o no | Una máquina decide con preguntas en orden |
| 3° de primaria, 8 años | Contar qué palabras van después de "el" en un cuento | Los patrones se cuentan, no se inventan |
| 4° de primaria, 9 años | Entrenar a un "robot" humano con pocos ejemplos y ver cómo se confunde | Pocos datos producen errores |
| 5° de primaria, 10 años | La máquina de palabras de esta página, en papel | Fluido no quiere decir verdadero |
| 6° de primaria, 11 años | La misma máquina en Python, con un texto propio | Cambiar los datos cambia la respuesta |

Edades según la tabla de edades normativas del MINEDU, medidas al 31 de marzo de cada año. Las actividades y su orden son nuestros.

1. **Elija una actividad de su grado.** No hace falta seguir el orden; un niño de 5° disfruta igual la de las preguntas de sí o no.
2. **Jueguen a ser la máquina.** Uno da los ejemplos, el otro solo puede responder con lo que vio. Cambien de papel.
3. **Busquen el error.** Toda actividad termina cuando la "máquina" se equivoca. Pregunte: ¿por qué se equivocó?
4. **Arreglen los datos.** Agreguen ejemplos y vuelvan a probar. ¿Desapareció el error o apareció otro?
5. **Cuéntenlo en una frase.** El niño explica lo que descubrió. Si lo dice con sus palabras, lo entendió.

Ninguna de estas actividades necesita un celular, una cuenta ni una suscripción. Si su hijo quiere ir más allá, en nuestras clases las mismas ideas pasan a Scratch y a Python, siempre en inglés y con un mentor que lo acompaña. La página [Curso de inteligencia artificial para niños en Perú](/curso-de-inteligencia-artificial-para-ninos-peru) describe ese curso en detalle, y [Vacaciones útiles 2027 de inteligencia artificial](/vacaciones-utiles-2027-inteligencia-artificial) propone un plan para el verano.

## ¿Qué preguntas hacerle a un niño para saber si entiende la IA?

Preguntas abiertas, sin respuesta única, que lo obliguen a explicar. No se trata de examinarlo, sino de ver si distingue entre lo que una máquina adivina y lo que sabe.

**Cinco preguntas para conversar en casa (nuestra guía)**

| Pregunta | Una buena respuesta se parece a | Si responde otra cosa |
|---|---|---|
| ¿Cómo sabe el celular qué video mostrar después? | "Mira los videos de antes y adivina" | Pregunte qué pasaría si viera un video distinto |
| ¿La IA puede equivocarse? | "Sí, si vio pocos ejemplos o ejemplos raros" | Muéstrele una foto mal reconocida o una frase mal corregida |
| ¿Una IA sabe si lo que dice es verdad? | "No, dice lo que suena más probable" | Repitan juntos la máquina de palabras de esta página |
| ¿Quién le enseñó a la IA? | "Las personas que eligieron los ejemplos" | Conversen sobre quién elige los datos |
| ¿Cuándo no conviene creerle a una IA? | "Cuando no se puede comprobar con otra fuente" | Busquen juntos un dato en un libro o una página confiable |

Si su hijo responde "la IA sabe todo", no lo corrija con un sermón. Hágale la pregunta del perro y el pescado: "¿qué come el perro?" según la máquina de esta página, y por qué dice eso. Descubrirlo por su cuenta le enseña más que cualquier advertencia.

Y una sugerencia sobre el idioma: hablar de la IA en inglés en nuestras clases tiene una ventaja inesperada. Palabras como data, pattern, guess y mistake son cortas y se repiten mucho, y son las mismas que su hijo encontrará en cualquier curso de tecnología más adelante. El mentor habla despacio y comprueba que el niño entendió antes de avanzar.

## ¿A qué hora pueden ser las clases de IA para un niño en Perú?

Cuando a su familia le convenga. Los mentores están en la India, que va 10 horas y 30 minutos por delante de Perú todo el año; estas son algunas equivalencias, no turnos fijos.

**Equivalencias entre la hora de Perú y la de la India (ejemplos)**

| Perú | India | Fecha en la India |
|---|---|---|
| 7:30 a. m. | 6:00 p. m. | La misma |
| 10:30 a. m. | 9:00 p. m. | La misma |
| 2:30 p. m. | 1:00 a. m. | La siguiente |
| 6:30 p. m. | 5:00 a. m. | La siguiente |

Perú: UTC-5 sin horario de verano (zona America/Lima de tzdata; hora oficial del INACAL). India: UTC+5:30, también fija. La diferencia no cambia en ningún mes.

Para un niño de primaria recomendamos sesiones cuando ya comió y descansó, nunca justo antes de dormir. Si su hijo va al colegio en el turno mañana, la tarde funciona bien; si va en el turno tarde, la mañana. Al reservar, el formulario le muestra las horas en el reloj de Perú.

## ¿Cómo avanza un niño en la comprensión de la IA?

Cinco etapas propias, de lo concreto a lo abstracto, que usamos para contarle a la familia dónde está su hijo.

**Cinco etapas de comprensión de la IA en primaria (nuestras)**

| Etapa | Edad habitual | El niño puede |
|---|---|---|
| 1. Ordenar | 6 a 7 años | poner pasos en secuencia hasta que un muñeco de la pantalla alcance la salida |
| 2. Clasificar | 7 a 8 años | agrupar cosas con una regla y explicar cuál usó |
| 3. Contar patrones | 8 a 9 años | contar qué se repite en unos datos y predecir con eso |
| 4. Encontrar errores | 9 a 10 años | mostrar por qué una máquina se equivocó con pocos ejemplos |
| 5. Construir y dudar | 10 a 12 años | programar una pequeña IA y decir cuándo no hay que creerle |

### Para madres y padres

El salto importante es de la etapa 3 a la 4: dejar de ver la máquina como mágica y empezar a buscarle los errores. Celebre cuando su hijo encuentre uno.
No se preocupe si su hijo de 7 años no "entiende la IA". A esa edad, ordenar y clasificar ya es preparar el terreno.

### Para los niños

Cuando una máquina le responda algo, compruébelo con un adulto o en un libro antes de creerlo.
Si su programa adivina mal, no está roto: le faltan ejemplos. Agregue más y vuelva a probar.

## Otros nueve cursos pensados para la primaria

Cada uno se dicta en directo y en inglés, sin pedir cuentas de adulto, en grupo o uno a uno.

### Pensar antes de programar

De 6 a 9 años

- [Razonamiento para pequeños](/courses/reasoning-and-readiness-course-for-young-thinkers): Patrones y orden, la base de cualquier máquina que aprende.
- [Scratch completo](/courses/scratch-programming-complete-course): Juegos con bloques que después pueden "aprender".
- [Pensamiento computacional](/courses/problem-solving-and-computational-thinking-for-kids): Descomponer un problema en pasos que una computadora siga.

### Crear con criterio

De 8 a 12 años

- [Vibe coding infantil](/courses/vibe-coding-for-kids-beginners-ai-scratch-game-dev): Juegos hechos con apoyo de IA, donde el niño revisa y entiende cada cambio.
- [Videojuegos para niños](/courses/game-development-masterclass-for-kids): Scratch, Roblox y Minecraft en un recorrido.
- [Su primera web](/courses/kids-ai-web-development-course): HTML y CSS hasta tener un sitio propio publicado.

### Ir más lejos

De 8 a 12 años

- [Juegos en Roblox](/courses/roblox-game-coding-for-kids-lua-course): Luau en Roblox Studio para los que llegan por los juegos.
- [Matemática con código](/courses/maths-through-coding): Contar y predecir con Python, desde los 10 años.
- [Rumbo a un hackatón](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): Doce semanas para pensar, construir y mostrar una idea.

## ¿Cómo son las clases de IA en vivo para primaria?

Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia.

- **Turno mañana** Para niños que van al colegio por la tarde.
- **Turno tarde** Para quien sale del colegio al mediodía.
- **A su medida** Clases individuales el día que usted elija.

- **Sin chatbots** Los niños de primaria no usan asistentes conversacionales en clase.
- **Sin cuentas** Nada que obligue a registrar a un menor de 13 años.
- **La IA por dentro** Construyen pequeñas máquinas que adivinan y fallan.
- **Inglés despacio** Palabras cortas, repetidas, con apoyo en la pantalla.
- **Nota a la familia** Un resumen breve de lo trabajado en cada etapa.
- **Dos formatos** Un grupo de quince a veinte de la misma etapa, o sesiones a solas con el mentor.

## Precio de las clases de IA para primaria

La mensualidad figura en dólares estadounidenses y se paga con tarjeta. El monto en su moneda lo define su banco con el cambio del día en que se procesa el pago.

- Primera clase gratis: Gratis. Una clase gratis con un mentor. Una actividad de IA adaptada a su grado. Sin tarjeta ni compromiso.
- Clase grupal: USD 100 al mes. Quince a veinte niños de edad parecida. El mismo mentor durante el curso. Dos clases en vivo por semana. Pago mensual, sin permanencia.
- Clases individuales: USD 150 al mes. Solo su hijo y el mentor. Ritmo y temas a su medida. Día y hora a su elección.

## Inteligencia artificial para niños de primaria: preguntas frecuentes

### ¿Las clases son en español?

No: se dictan en directo, por internet y únicamente en inglés, y eso forma parte de lo que las familias buscan: su hijo entiende la IA y practica inglés a la vez. El mentor habla despacio, usa palabras cortas y repite. El EF EPI 2025 sitúa a Lima en el nivel alto de inglés.

### ¿Qué es la inteligencia artificial explicada para niños?

Es un programa que mira muchos ejemplos, encuentra lo que se repite y lo usa para adivinar: qué video gustará, qué hay en una foto o qué palabra sigue. Como adivina, puede equivocarse aunque suene muy segura.

### ¿Puede mi hijo de primaria usar ChatGPT?

Según los términos de OpenAI, ChatGPT exige al menos 13 años y permiso de madre, padre o tutor hasta los 18. Un niño de primaria no cumple esa edad, y en nuestras clases no lo usamos. Gemini y Copilot también piden 13 años, y Claude 18.

### ¿Desde qué edad se puede aprender sobre IA?

Desde 1° de primaria, a los 6 años, con actividades sin pantalla como ordenar y clasificar. Desde los 9 o 10 años se puede programar una pequeña IA en Python.

### ¿Se enseña inteligencia artificial en la primaria en Perú?

No como curso. El plan de primaria del CNEB no tiene un área de computación ni de IA; lo digital es una competencia transversal. El MINEDU sí forma a docentes: más de 87,000 se inscribieron en su curso de IA para la práctica docente.

### ¿Por qué la IA inventa cosas?

Porque elige lo que suena más probable según sus ejemplos, no lo que es cierto. En el programa de esta página, la máquina escribe "the dog eats fish" aunque esa frase no aparece en su texto.

### ¿Qué actividades de IA puede hacer en casa sin crear cuentas?

Clasificar objetos con una regla, adivinar un animal con preguntas de sí o no, contar qué palabras siguen a otras en un cuento y jugar a ser una máquina que aprende con pocos ejemplos. La tabla de esta página las ordena por grado.

### ¿Cuándo puede tomar clases mi hijo?

Cualquier día y a cualquier hora, con total flexibilidad: elija una clase grupal o, para un plan muy personalizado, clases individuales a la hora que mejor le convenga a su familia. Las 7:30 a. m. en Perú son las 6:00 p. m. en la India.

### ¿Las clases tienen validez para el colegio?

No. Somos independientes del MINEDU, de las UGEL y de los colegios, así que nada de lo que hacemos se convierte en nota escolar. Quien termina un curso recibe una constancia emitida por Modern Age Coders, nada más.

### ¿En qué moneda se paga?

La mensualidad se cobra en dólares de Estados Unidos con tarjeta, y el cambio a su moneda lo hace su banco. Para la clase de prueba no pedimos datos de pago.

## Para seguir leyendo

- [Curso de IA para niños en Perú](/curso-de-inteligencia-artificial-para-ninos-peru): El curso, sus niveles y una clase de ejemplo.
- [Vacaciones útiles 2027 de IA](/vacaciones-utiles-2027-inteligencia-artificial): Un verano para entender la IA por edades.
- [Programación para niños en inglés](/clases-de-programacion-para-ninos-en-ingles): La guía para familias con hijos de 6 a 12 años.
- [AI tool age guide](/ai-tools-age-guide): La edad que exige cada herramienta de IA, con la cita de la empresa.
- [AI projects for kids](/ai-projects-for-kids): Proyectos de IA para niños que no piden crear cuentas.
- [Coding and AI classes in Peru](/coding-and-ai-classes-in-peru): La guía nacional, en inglés.

## Contacto

Reserve la primera clase gratis en [https://learn.modernagecoders.com/inteligencia-artificial-para-ninos-de-primaria](https://learn.modernagecoders.com/inteligencia-artificial-para-ninos-de-primaria#start), por WhatsApp o llamando al +91 91233 66161 (un número de la India, el contacto real de Modern Age Coders) o por correo a connect@modernagecoders.com.

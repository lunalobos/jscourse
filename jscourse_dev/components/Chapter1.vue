<template>
    <div class="mt-2 flex flex-col rounded-lg border-2 p-4 shadow-lg w-4/6">
        <Angles :right-angle-name="rightName" :left-angle-name="leftName" />

        <ChapterTitle :name="chapterName" />

        <SectionTitle :chapter="chapterName" section="Breve reseña histórica de JavaScript" />
        <p class="mt-2 mb-2">
            Inicialmente, JavaScript fue pensado como un lenguaje de scripting ligero, complementario a Java, que se
            ejecutaba en el lado del cliente (navegador web). Su sintaxis fue influenciada por lenguajes como C, Java, y
            Self, buscando ser accesible y fácil de aprender para los desarrolladores.
        </p>
        <p class="mt-2 mb-2">
            En sus primeros años, JavaScript fue subestimado y muchas veces criticado por sus limitaciones y problemas
            de compatibilidad entre diferentes navegadores. Sin embargo, su capacidad para manipular el Documento de
            Modelo de Objetos (DOM) y su versatilidad para crear efectos interactivos lo hicieron indispensable para el
            desarrollo web.
        </p>
        <p class="mt-2 mb-2">
            A medida que la web evolucionaba, también lo hizo JavaScript. La estandarización del lenguaje por la
            Asociación Europea de Fabricantes de Computadoras (ECMA) en 1997, bajo el nombre de ECMAScript, fue un paso
            crucial. La especificación ECMAScript proporcionó una base estándar para que los desarrolladores y los
            navegadores pudieran implementar y mejorar JavaScript de manera coherente.
        </p>
        <p class="mt-2 mb-2">
            El lanzamiento de ECMAScript 5 (ES5) en 2009 fue un hito importante, introduciendo características como el
            modo estricto,
            los métodos `Array.prototype.forEach`, `Object.defineProperty`, y más. Este estándar hizo que el lenguaje
            fuera más robusto y adecuado para aplicaciones más grandes y complejas.
        </p>
        <p class="mt-2 mb-2">
            El verdadero renacimiento de JavaScript llegó con ECMAScript 6 (ES6), también conocido como ECMAScript 2015.
            ES6 trajo consigo una gran cantidad de nuevas características y mejoras, como las clases, módulos, promesas,
            la sintaxis de flecha (`=>`), y `let` y `const` para el ámbito de bloque. Estas adiciones transformaron a
            JavaScript en un lenguaje moderno.
        </p>
        <p class="mt-2 mb-2">
            Con la llegada de Node.js en 2009, JavaScript trascendió el navegador y se convirtió en un lenguaje de
            propósito general. Node.js permitió a los desarrolladores utilizar JavaScript para escribir código del lado
            del servidor, manejando aplicaciones web completas con un único lenguaje de programación.
        </p>
        <p class="mt-2 mb-2">
            Hoy en día, las bibliotecas y frameworks como React, Angular, Vue.js, y muchos otros han ampliado aún más
            las posibilidades de JavaScript, facilitando el desarrollo de aplicaciones complejas y de alto rendimiento.
        </p>

        <SectionTitle :chapter="chapterName" section="Coexistencia entre HTML, CSS y JS" />
        <p class="mt-2 mb-2">
            El desarrollo web moderno del lado del cliente se basa en la integración y coexistencia de tres tecnologías
            fundamentales: HTML, CSS y JavaScript. Cada una de estas tecnologías tiene un propósito específico y se
            complementan entre sí para crear experiencias web dinámicas y atractivas.
        </p>

        <SubsectionTitle :chapter="chapterName" section="Coexistencia entre HTML, CSS y JS" subsection="HTML" />
        <p class="mt-2 mb-2">
            HTML
            <NQuote name="html" link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                summary="MDN - HTML: HyperText Markup Language" :chapter="chapterName" />
            es el lenguaje estándar para la creación de documentos que se van a visualizar en un navegador web. Su
            propósito principal es estructurar el contenido, definiendo elementos como títulos, párrafos, listas,
            enlaces, imágenes y otros componentes multimedia. HTML utiliza una serie de etiquetas (\textit{tags}) para
            delimitar y organizar estos elementos en una página web.
        </p>

        <SubsectionTitle :chapter="chapterName" section="Coexistencia entre HTML, CSS y JS" subsection="CSS" />
        <p class="mt-2 mb-2">
            CSS
            <NQuote name="css" link="https://developer.mozilla.org/en-US/docs/Glossary/CSS"
                summary="MDN - CSS: Cascading Style Sheets" :chapter="chapterName" />
            es un lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. Mientras
            que HTML se encarga de la estructura del contenido, CSS se utiliza para estilizarlo, permitiendo especificar
            colores, fuentes, márgenes, bordes, espaciado, y disposición de los elementos. CSS facilita la separación
            del contenido y la presentación, lo que permite una mayor flexibilidad y control en el diseño visual de las
            páginas web.
        </p>

        <SubsectionTitle :chapter="chapterName" section="Coexistencia entre HTML, CSS y JS" subsection="JavaScript" />
        <p class="mt-2 mb-2">
            JavaScript
            <NQuote name="javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                summary="MDN - JavaScript" :chapter="chapterName" />
            es un lenguaje de programación que se ejecuta en el navegador del usuario y el objeto de este curso. Su
            propósito es hacer que las páginas web sean interactivas y dinámicas. Con JavaScript, es posible responder a
            eventos del usuario (como clics y movimientos del ratón), manipular el DOM (Document Object Model) de la
            página para modificar su contenido y estructura, y comunicarse con servidores para cargar datos adicionales
            sin necesidad de recargar la página completa.
        </p>

        <SubsectionTitle :chapter="chapterName" section="Coexistencia entre HTML, CSS y JS"
            subsection="Coexistencia y Colaboración" />
        <p class="mt-2 mb-2">
            La combinación de HTML, CSS y JavaScript permite crear aplicaciones web complejas y ricas en
            funcionalidades:
        </p>
        <ul class="space-y-1  list-disc list-inside">
            <li>
                HTML proporciona la estructura básica del contenido.
            </li>
            <li>
                CSS define el estilo y la presentación visual de ese contenido.
            </li>
            <li>
                JavaScript anade interactividad y comportamiento dinámico.
            </li>
        </ul>

        <p class="mt-2 mb-2">
            En resumen, mientras que HTML y CSS se enfocan en la estructura y apariencia, JavaScript se encarga de la
            lógica y la interacción, logrando así una sinergia que permite el desarrollo de sitios web modernos y
            responsivos.
        </p>

        <SectionTitle :chapter="chapterName" section="Características del lenguaje" />

        <p class="mt-2 mb-2">
            Algunas características clave de JavaScript son:
        </p>
        <ul class="space-y-1  list-disc list-inside">
            <li>
                <span class="font-bold">Dinámicamente tipado:</span> Los tipos de las variables se determinan en
                tiempo de ejecución y pueden cambiar durante la ejecución del programa.
            </li>
            <li>
                <span class="font-bold">Multiparadigma:</span> Soporta programación funcional y
                orientada a objetos.
            </li>
            <li>
                <span class="font-bold">Ejecución en el cliente:</span> Se ejecuta principalmente en el navegador
                del cliente, permitiendo manipulación del DOM y interactividad sin necesidad de recargar la página.
            </li>
            <li>
                <span class="font-bold">Asincronía:</span> Permite operaciones asíncronas, esenciales para la
                interacción con servidores y APIs.
            </li>
            <li>
                <span class="font-bold">Versatilidad:</span> Además del desarrollo web, se utiliza en desarrollo de
                servidores (Node.js), aplicaciones móviles (React Native), y aplicaciones de escritorio (Electron).
            </li>
            <li>
                <span class="font-bold">Amplio ecosistema:</span> Cuenta con una gran cantidad de bibliotecas y
                frameworks que extienden sus capacidades.
            </li>
        </ul>

        <SectionTitle :chapter="chapterName" :section="helloSectionName" />

        <p class="mt-2 mb-2">
            Hay muchas maneras de crear un "Hola Mundo" en JavaScript. Comencemos por la más simple: utilizar la
            variable console junto con el método log.
        </p>

        <pre><code class="language-javascript">
    console.log('Hola mundo');
        </code></pre>

        <p class="mt-2 mb-2">
            Una sentencia es una instrucción, el componente más básico de un programa. En JavaScript, las sentencias
            suelen ejecutarse una tras otra, en el orden en que están escritas, gracias al intérprete del lenguaje.
        </p>
        <p class="mt-2 mb-2">
            Aunque generalmente las sentencias se escriben en una sola línea, esto no es obligatorio. Cada una debería
            terminar con un punto y coma, aunque el intérprete puede completarlo automáticamente. Sin embargo, es una
            buena práctica añadir siempre el punto y coma para mayor claridad y consistencia.
        </p>
        <p class="mt-2 mb-2">
            Por ejemplo, este simple "Hola Mundo" es una sentencia, pero ¿en qué entorno se ejecuta JavaScript? Al igual
            que otros lenguajes interpretados, JavaScript necesita un entorno de ejecución, y el más común es el
            navegador web. Para entender mejor este contexto, veamos cómo funciona JavaScript en el navegador y cómo
            podemos crear un "Hola Mundo" más completo.
        </p>

        <pre><code class="language-html">
            {{ htmlCode }}
        </code></pre>
        <p class="mt-2 mb-2">
            En este ejemplo:
        </p>
        <ul class="ml-4 list-disc">
            <li>Incluimos un elemento script dentro del body.</li>
            <li>Usamos window.onload para asegurarnos de que el script se ejecute cuando la página haya terminado de
                cargarse.Esto simplemente le dice al navegador que luego de la página se cargue debe ejecutarse la
                función que le estamos asignado.</li>
            <li>La función alert() muestra un cuadro de diálogo con el mensaje "Hola Mundo".</li>
        </ul>
        <p class="mt-2 mb-2">Hemos usado funciones y variables globales como console, window y alert, mas adelante
            desarrollaremos esto. Además ahora puede verse con mas "claridad" este entorno de ejecución, javascript está
            en interacción constante con el navegador y la página web. Los bloques scripts, que pueden estar dentro del
            body
            o del head, son bloques de javascript que se ejecutan tras dispararse algun evento, en este caso tras la
            carga
            de la página.
        </p>

        <SectionTitle :chapter="chapterName" :section="variablesName" />

        <p class="mt-2 mb-2">JavaScript tiene tres formas de declarar variables: <span class="font-bold">var</span>
            <NQuote name="var" link="https://tc39.es/ecma262/#sec-variable-statement"
                summary="ECMA262 2025 - 14.3.2 - Variable Statement" :chapter="chapterName" />
            ,<span class="font-bold">let</span>, y <span class="font-bold">const</span>
            <NQuote name="letAndConst" link="https://tc39.es/ecma262/#sec-let-and-const-declarations"
                summary="ECMA262 2025 - 14.3.1 - Let and Const Declarations" :chapter="chapterName" />
            . Sin embargo, en la programación moderna de JavaScript, se desaconseja el uso de <span
                class="font-bold">var</span>
            <NQuote name="dontUseVar"
                link="https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-999428999994"
                summary="Why don’t we use var anymore? by Samuel Coelho" :chapter="chapterName" />
            . Para declarar una variable debemos usar una de estas palabras reservadas (let, const o var) y
            un nombre para la variable, es decir un identificador
            <NQuote name="identifier" link="https://developer.mozilla.org/en-US/docs/Glossary/Identifier"
                summary="MDN - Identifier " :chapter="chapterName" />
            . No todas los identificadores son válidos.
        </p>
        <p>
            En JavaScript, los identificadores distinguen entre mayúsculas y minúsculas y pueden contener
            letras Unicode, $, _, y dígitos (0-9), pero no pueden comenzar con un dígito.
        </p>
        <pre>
            <code class="language-javascript">
// si uso let no puedo volver a declarar una variable con el mismo nombre aqui declaro
// la variable x (un dientificador válido) y le asigno el valor 5 usando el simbolo de
// igual (=), en javascript el signo igual es el operador de asignación no simboliza 
// una igualdad sino una asignación
let x = 5;

// const ademas hace que no pueda reasignar la variable
// PI ahora vale 3.14159 y no puedo reasignarla.
// Toda variable asignada con const debe ser asignada cuando se declara
const PI = 3.14159;

// var (funcion-scoped, puede ser redeclarada) - NO RECOMENDADO}
// usar var puede llevar a código ilegible y confuso
var y = 'hello';

// ahora puedo reasignar x ya que fue declarada con let
x = 10;

// si uso let puedo declarar la variable en una sentencia y luego asignar la variable en 
// otra sentencia
let z;

z = 25;
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Es importante no asignar valores a variables no declaradas ya que esto puede volver el código confuso.
            JavaScript crea aquellas variables que no declaramos pero que de todas formas asignamos. Si bien
            JavaScript nos ofrece esta característica es mas claro no usarla y declarar todas las variables.
        </p>

        <SectionTitle :chapter="chapterName" :section="typesName" />

        <p class="mt-2 mb-2">
            Javascript es un lenguaje que posee tipos de datos primitivos (los mas básicos) y objetos
            <NQuote name="types" link="https://tc39.es/ecma262/#sec-ecmascript-language-types"
                summary="ECMA262 2025 - 6.1 - ECMAScript Language Types" :chapter="chapterName" />
            . Los tipos
            primitivos
            son cadenas de caracteres (string), números (number), booleanos (boolean), y valores nulos (undefined y
            null).
            Los objetos son un tipo de dato muy importante que veremos mas adelante.
        </p>
        <p class="mt-2 mb-2">
            Cuando declaramos una variable con let esta puede cambiar de tipo cuando la reasignamos, esto es una
            caracterísitca
            de javascript. Es por esto que se dice que es un lenguaje débilmente tipado, las variables no tienen
            necesariamente
            un tipo de dato fijo. Esto es un contraste con lenguajes como Java, o C#, en los que las variables deben ser
            siempre
            del tipo declarado en un principio.
        </p>
        <pre>
            <code class="language-javascript">
let num = 42;        // number
let str = 'Hola';    // string asignado con un literal entre '
let str2 = "Hola";   // string asignado con un literal entre "
let bool = true;     // boolean
let undef = undefined;// undefined
let nul = null;      // null
            </code>
        </pre>
        <p class="mt-2 mb-2">
            En el ejemplo puede observarse que los literales de string pueden crearse con comillas simples o dobles.
            En general usaremos comillas simples.
        </p>
        <p class="mt-2 mb-2">
            Ademas de las comillas simples los strings pueden crearse con comillas invertidas (`). Este tipo de
            cadenas se conocen como template literals
            <NQuote name="templateLiteral"
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
                summary="MDN - Template literals: " :chapter="chapterName" />
            <NQuote name="templateLiteralECMA" link="https://tc39.es/ecma262/#sec-template-literal-lexical-components"
                summary="ECMA262 2025 - 12.9.6 Template Literal Lexical Components" :chapter="chapterName" />
            . Nos proveen una forma mas cómoda de insertar valores en un string que fue
            introducida en ECMAScript 6. Veamos un ejemplo:
        </p>
        <pre>
            <code class="language-javascript">
const nombre = 'Juan';
// interpolación
const mensajeDespues = `Hola, mi nombre es ${nombre}.`
console.log(mensajeDespues); // la consola mostrará Hola, mi nombre es Juan.
            </code>
        </pre>

        <SubsectionTitle :chapter="chapterName" :section="typesName" :subsection="nanName" />

        <p class="mt-2 mb-2">
            NaN
            <NQuote name="nan"
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"
                summary="MDN - NaN: Not a Number" :chapter="chapterName" />
            (Not a Number) es un valor que representa un error de tipo numérico y es de tipo number.
            Por mas contradictorio que paresca, el valor que se usa para indicar que algo no es un número
            es de tipo number.
        </p>
        <p class="mt-2 mb-2">
            Por ejemplo, el resultado de la división entre 0 es NaN.
        </p>
        <pre>
            <code class="language-javascript">
let num = 42;
let div = num / 0;
console.log(div); // la consola mostrará NaN                
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Para comprobar que una variable es NaN se debe usar la función global isNaN(), solo de esta
            manera es posible comprobarlo. NaN es un valor que no admite comparaciones, incluso si se
            compara consigo mismo el resultado es falso. Justamente a continuación veremos como comparar valores
            en general.
        </p>

        <SectionTitle :chapter="chapterName" :section="operatorsName" />

        <p class="mt-2 mb-2">
            Los operadores
            <NQuote name="operators" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators"
                summary="MDN - Operators: " :chapter="chapterName" />
            nos permiten realizar operaciones matemáticas, comparar valores y realizar asignaciones
            a variables.
        </p>

        <SubsectionTitle :chapter="chapterName" :section="operatorsName" :subsection="comparatorsName" />

        <p class="mt-2 mb-2">
            Estos operadores comparan valores y devuelven un booleano, con lo cual posibilitan que el lenguaje pueda
            establecer flujos de control básicos.
        </p>

        <pre>
            <code class="language-javascript">
let a = 5;
let b = '5';

console.log(a == b);   // Igualdad (con coercion): true
console.log(a === b);  // Igualdad estricta: false
console.log(a != b);   // Desigualdad (con coercion): false
console.log(a !== b);  // Desigualdad estricta: true
console.log(a > 3);    // Mayor que: true
console.log(a < 3);    // Menor que: false
console.log(a >= 5);   // Mayor o igual que: true
console.log(a <= 4);   // Menor o igual que: false
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Como se ve en el ejemplo el operador == hace coerción, es decir que convierte uno de los valores al tipo del
            otro, la convención para esta conversión esta establecida por ECMAScript
            <NQuote name="islooselyequal" link="https://tc39.es/ecma262/#sec-islooselyequal"
                summary="ECMA262 2025 - 7.2.13 - IsLooselyEqual" :chapter="chapterName" />
            . En este caso se convierte b a number y luego se realiza la comparación.
        </p>

        <SubsectionTitle :chapter="chapterName" :section="operatorsName" subsection="Operadores Aritméticos" />
        <p class="mt-2 mb-2">
            Estos operadores realizan operaciones matemáticas. Veamos un ejemplo para ilustrar su uso.
        </p>
        <pre>
            <code class="language-javascript">
let a = 10;
let b = 3;

console.log(a + b);  // Suma: 13
console.log(a - b);  // Resta: 7
console.log(a * b);  // Multiplicacion: 30
console.log(a / b);  // Division: 3.3333...
console.log(a % b);  // Modulo (resto): 1
console.log(a ** b); // Exponenciacion: 1000
            </code>
        </pre>

        <SubsectionTitle :chapter="chapterName" :section="operatorsName" subsection="Operadores de Asignación" />
        <p class="mt-2 mb-2">
            Estos operadores asignan valores a variables. Veamos un ejemplo para ilustrar su uso.
        </p>

        <pre>
            <code class="language-javascript">
let x = 5;
console.log(x);  // 5

x += 3;  // Equivalente a: x = x + 3
console.log(x);  // 8

x -= 2;  // Equivalente a: x = x - 2
console.log(x);  // 6

x *= 4;  // Equivalente a: x = x * 4
console.log(x);  // 24

x /= 3;  // Equivalente a: x = x / 3
console.log(x);  // 8

x %= 3;  // Equivalente a: x = x % 3
console.log(x);  // 2
            </code>
        </pre>

        <SubsectionTitle :chapter="chapterName" :section="operatorsName" subsection="Operadores Lógicos" />
        <p class="mt-2 mb-2">
            Estos operadores trabajan operan sobre valores booleanos. Veamos
            un ejemplo.
        </p>
        <pre>
            <code class="language-javascript">
let x = true;
let y = false;

console.log(x && y);  // AND logico: false
console.log(x || y);  // OR logico: true
console.log(!x);      // NOT logico: false

// Uso con no-booleanos
console.log(5 && 2);  // 2 (retorna el ultimo valor verdadero)
console.log(0 || 3);  // 3 (retorna el primer valor verdadero)
console.log(!'');     // true ('' es falsy)
            </code>
        </pre>
        <p class="mt-2 mb-2">
            La naturaleza de los operadores de comparación y los operadores lógicos en javascript no siempre
            es tan evidente. A proposito de esto existe un repositorio en GitHub que aborda esta temática.
        </p>
        <p class="mt-2 mb-2 flex flex-row">
            <GitHub />
            <a href="https://github.com/denysdovhan/wtfjs"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                A list of funny and tricky JavaScript examples</a>
        </p>

        <SubsectionTitle :chapter="chapterName" :section="operatorsName" subsection="Operadores Unarios" />
        Estos operadores trabajan con un solo operando. Veamos algunos en el siguiente ejemplo:
        <pre>
            <code class="language-javascript">
let a = 5;

console.log(a++);  // Incremento posterior: 5 (a ahora es 6)
console.log(++a);  // Incremento anterior: 7

console.log(a--);  // Decremento posterior: 7 (a ahora es 6)
console.log(--a);  // Decremento anterior: 5

console.log(+a);   // Conversion a numero: 5
console.log(-a);   // Negacion unaria: -5
            </code>
        </pre>

        <SectionTitle :chapter="chapterName" section="Estructuras de control" />
        <p class="mt-2 mb-2">
            Las estructuras de control en JavaScript permiten alterar el flujo de ejecución del código
            basándose en ciertas condiciones o repetir bloques de código un número determinado de veces.
        </p>

        <SubsectionTitle :chapter="chapterName" section="Estructuras de control" subsection="Sentencia if-else" />
        <p class="mt-2 mb-2">
            La estructura if-else
            <NQuote name="if-else" link="https://tc39.es/ecma262/#sec-if-statement"
                summary="ECMA262 2025 - 14.6 - The if Statement" :chapter="chapterName" />
            permite ejecutar un bloque de código si una condición es verdadera,
            y otro bloque si es falsa.
        </p>
        <pre>
            <code class="language-javascript">
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            También se puede usar else if para comprobar múltiples condiciones encadenando un
            nuevo if-else tras el primer if-else:
        </p>

        <pre>
            <code class="language-javascript">
let nota = 75;

if (nota >= 90) {
    console.log("Sobresaliente");
} else if (nota >= 70) {
    console.log("Notable");
} else if (nota >= 50) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            De todas maneras, no se recomienda usar if-else para condiciones multiples muy grandes, ya
            que vuelve muy lentos los programas.
        </p>

        <SubsectionTitle :chapter="chapterName" section="Estructuras de control" subsection="Sentencia switch" />

        <p class="mt-2 mb-2">
            La estructura switch
            <NQuote name="switch" link="https://tc39.es/ecma262/#sec-switch-statement"
                summary="ECMA262 2025 - 14.12 - The switch Statement" :chapter="chapterName" />
            se utiliza cuando se quiere comparar una variable con múltiples valores posibles. Es
            una alternativa más legible a múltiples if-else cuando se compara una sola variable.
        </p>
        <pre>
            <code class="language-javascript">
let dia = "Lunes";

switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Viernes":
        console.log("Fin de semana laboral");
        break;
    case "Sabado":
    case "Domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Mitad de semana");
}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            El funcionamiento del switch es tal que se evalua desde el principio si la variable dia
            es igual a uno de los casos, comenzando por Lunes, siguiendo por Viernes, y así siguiendo. La 
            evaluación es en el mismo orden que los casos enumerados en nuestro código. Una vez que se 
            detecta que la variable dia es igual a uno de los casos se ejecuta todo el código hasta 
            encontrar un break o un return. Si no se encuentra un caso igual a la variable se ejecuta 
            el código del caso default. 
        </p>

        <SubsectionTitle :chapter="chapterName" section="Estructuras de control" subsection="Bucle for" />

        <p class="mt-2 mb-2">
            Los bucles permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición.
            El bucle for
            <NQuote name="for" link="https://tc39.es/ecma262/#sec-for-statement"
                summary="ECMA262 2025 - 14.7.4 - The for Statement" :chapter="chapterName" />
            se utiliza cuando se conoce de antemano el número de iteraciones que se quieren
            realizar. Consta de tres partes: inicialización, condición y expresión final.
        </p>
        <pre>
            <code class="language-javascript">
for (let i = 0; i < 5; i++) {
    console.log(i);
}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Dentro del paréntesis del for se declara la variable 
            <code>i</code> 
            con un <code>let</code> para poder reasignarla.
            La condición va a continuación, que es que 
            <code>i</code> sea menor que 5 (en este caso).
            La expresión final indica como cambia la variable 
            <code>i</code>, en este caso se usa el operador unario ++
            para indicar que <code>i</code> se incrementa en uno.
            El código encerrado dentro las llaves del  
            <code>for</code> se ejecutará para cada valor de 
            <code>i</code>, comenzado por 0
            y acabando en el valor 4.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Estructuras de control" subsection="Bucle while" />
        <p class="mt-2 mb-2">
            El bucle while
            <NQuote name="while" link="https://tc39.es/ecma262/#sec-while-statement"
                summary="ECMA262 2025 - 14.7.3 - The while Statement" :chapter="chapterName" />
            se ejecuta mientras una condición sea verdadera. Es útil cuando no se sabe de antemano
            cuántas iteraciones se necesitarán.
        </p>
        <pre>
            <code class="language-javascript">
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            El código encerrado dentro las llaves del while se ejecuta mientras la condición
            encerrada entre paréntesis(<code> i < 5</code>) sea verdadera
        </p>
        <SubsectionTitle :chapter="chapterName" section="Estructuras de control" subsection="Bucle do-while" />
        <p class="mt-2 mb-2">
            Similar al bucle while
            <NQuote name="doWhile" link="https://tc39.es/ecma262/#sec-do-while-statement"
                summary="ECMA262 2025 - 14.7.2 - The do-while Statement" :chapter="chapterName" />
            , pero garantiza que el bloque de código se ejecute al menos una vez, ya que
            la condición se evalúa al final de cada iteración.
        </p>
        <pre>
            <code class="language-javascript">
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
            </code>
        </pre>

        <SubsectionTitle :chapter="chapterName" section="Estructuras de control"
            subsection="Sentencias break y continue" />
        <p class="mt-2 mb-2">
            La sentencia <code>break</code>
            <NQuote name="break" link="https://tc39.es/ecma262/#sec-break-statement"
                summary="ECMA262 2025 - 14.9 - The break Statement" :chapter="chapterName" />
            se utiliza para salir inmediatamente de un bucle, mientras que <code>continue</code>
            <NQuote name="continue" link="https://tc39.es/ecma262/#sec-continue-statement"
                summary="ECMA262 2025 - 14.8 - The continue Statement" :chapter="chapterName" />
            salta a la siguiente iteración del bucle.
        </p>
        <pre>
            <code class="language-javascript">
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Salta esta iteracion
    if (i === 4) break;    // Sale del bucle
    console.log(i);
}
// Salida: 0, 1, 3
            </code>
        </pre>

        <SectionTitle :chapter="chapterName" section="Funciones" />
        <p class="mt-2 mb-2">
            Las funciones
            <NQuote name="functions" link="https://developer.mozilla.org/en-US/docs/Glossary/Function"
                summary="MDN - Function" :chapter="chapterName" />
            son bloques de código reutilizables que realizan una tarea específica. Son fundamentales en
            JavaScript y permiten estructurar el código de manera modular y eficiente.
        </p>

        <SubsectionTitle :chapter="chapterName" section="Funciones" subsection="Declaración de Funciones" />
        <p class="mt-2 mb-2">
            Hay varias formas de declarar funciones en JavaScript
            <NQuote name="functionsECMA" link="https://tc39.es/ecma262/#sec-function-definitions"
                summary="ECMA262 2025 - 15.2 - Function Definitions" :chapter="chapterName" />
            . Una forma es la declaración convencional:
        </p>
        <pre>
            <code class="language-javascript">
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}
// luego podemos llamar a la función que declaramos en otra parte de nuestro código
saludar("Maria"); // Salida: Hola, Maria!
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Nótese la sintaxis, se coloca la palabra reservada <code>function</code> luego
            el nombre o identificador de la función, en nuestro caso <code>saludar</code>.
            Luego se abren paréntesis y se enumeran los argumentos, en nuestro caso solo tenemos
            un argumento: <code>nombre</code>. Si tuvieramos mas parámetros deberíamos enumerarlos
            y separarlos con comas, por ejemplo <code>nombre, apellido, dni</code>.
        </p>
        <p class="mt-2 mb-2">
            Para invocar el código dentro de nuestra función debemos usar el identificador y proveerle
            un argumento (en nuestro caso la función sólo posee un argumento) que hará las veces
            de <code>nombre</code> y deberá encerrarse entre paréntesis inmediatamente a continuación
            del identificador o nombre de la función, sin espacios en el medio.
        </p>
        <p>
            La ventaja del uso de funciones es que el código puede adaptarse al valor de los argumentos
            que proveamos al llamarlas, es decir es código que adapta a nuestras necesidades y que no
            necesitamos reescribir.
        </p>
        <p class="mt-2 mb-2">
            También se puede declarar una función asignandola a una variable mediante una expresión
            de función:
        </p>
        <pre>
            <code class="language-javascript">
const saludar = function(nombre) {
    console.log("Hola, " + nombre + "!");
};
// luego podemos llamar a la función como antes
saludar("Juan"); // Salida: Hola, Juan!
            </code>
        </pre>
        Y por último, en lugar de una expresión podemos usar una función flecha, que es una sintaxis mas
        consisa:
<pre>
    <code class="language-javascript">
const saludar = (nombre) => {
    console.log("Hola, " + nombre + "!");
};
// de igual manera podemos llamar a la función
saludar("Ana"); // Salida: Hola, Ana!
    </code>
</pre>
        <p>
            Para funciones de una sola línea, se puede simplificar aún más:
        </p>
        <pre>
            <code class="language-javascript">
const cuadrado = x => x * x;

console.log(cuadrado(4)); // Salida: 16
            </code>
        </pre>
        <p class="mt-2 mb-2">
            <span class="text-red-800 font-bold">Advertencia:</span> Las funciones declaradas con la notación de flecha no son equivalentes a las funciones declaradas
            con la notación convencional (los dos primeros casos). Las razones de esto se veran mas adelante, ya que
            provienen de como ven su contexto estas funciones, y todavía no hemos hablado de ese contexto.
        </p>
        
        <Bibliography :chapter="chapterName" />

    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAngleStore } from '~~/scripts/stores/angleStore';
import ChapterTitle from './ChapterTitle.vue';
import SectionTitle from './SectionTitle.vue';
import SubsectionTitle from './SubsectionTitle.vue';
import { useBibliographyStore } from '~/scripts/stores/bibliographyStore';
import NQuote from './NQuote.vue';

onMounted(() => {
    useAngleStore().addAngleOn('chapter2', () => { });
    useAngleStore().addAngleOff('chapter0');
    useBibliographyStore().registerChapter('Variables, estructuras de control y funciones');
})

const bibliography = [
    'islooselyequal'
];

const rightName = 'chapter2';
const leftName = 'chapter0';

const chapterName = 'Variables, estructuras de control y funciones';
const helloSectionName = 'Hola mundo'; //sección de hola mundo
const variablesName = 'Variables e identificadores'; //sección de variables
const typesName = 'Tipos de variables'; //sección de tipos
const nanName = 'El valor NaN'; //subsección de NaN
const operatorsName = 'Operadores'; //sección de operadores
const comparatorsName = 'Operadores de comparación' //subsección de operadores de comparación

const htmlCode = `
\<html lang="es"\>
    \<head\>
        \<meta charset="UTF-8"\>
        \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>
        \<title\>Hola Mundo en JavaScript\<\/title\>
    \<\/head\>
    \<body\>
        \<script\>
            // Este script se ejecutara cuando la pagina se cargue
            window.onload = function() {
                alert("Hola Mundo!");
            };
        \<\/script\>
    \<\/body\>
\<\/html\>
`

function n(name) {
    return bibliography.indexOf(name) + 1;
}

</script>
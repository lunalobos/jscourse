<template>
    <div class="mt-2 flex flex-col rounded-lg border-2 p-4 shadow-lg w-4/6">
        <Angles :right-angle-name="rightName" :left-angle-name="leftName"/>
        <ChapterTitle :name="chapterName" />

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
            en interacción constante con el navegador y la página web. Los bloques scripts, que pueden estar dentro del body
            o del head, son bloques de javascript que se ejecutan tras dispararse algun evento, en este caso tras la carga
            de la página.
        </p>

        <SectionTitle :chapter="chapterName" :section="variablesName" />

        <p class="mt-2 mb-2">JavaScript tiene tres formas de declarar variables: <span class="font-bold">var</span>, 
            <span  class="font-bold">let</span>, y <span class="font-bold">const</span>. 
            Sin embargo, en la programación moderna de JavaScript, se desaconseja el uso de <span class="font-bold">var</span>.
            Para declarar una variable debemos usar una de estas palabras reservadas (let, const o var) y
            un nombre para la variable, es decir un identificador. No todas los identificadores son válidos.
        </p>
        <p>
            En JavaScript, los identificadores distinguen entre mayúsculas y minúsculas y pueden contener 
            letras Unicode, $, _, y dígitos (0-9), pero no puede comenzar con un dígito.
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
            Javascript es un lenguaje que posee tipos de datos primitivos (los mas básicos) y objetos. Los tipos primitivos
            son cadenas de caracteres (string), números (number), booleanos (boolean), y valores nulos (undefined y null).
            Los objetos son un tipo de dato muy importante que veremos mas adelante.
        </p>
        <p class="mt-2 mb-2">
            Cuando declaramos una variable con let esta puede cambiar de tipo cuando la reasignamos, esto es una caracterísitca
            de javascript. Es por esto que se dice que es un lenguaje débilmente tipado, las variables no tienen necesariamente
            un tipo de dato fijo. Esto es un contraste con lenguajes como Java, o C#, en los que las variables deben ser siempre
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
            cadenas permite la interpolación, una forma mas cómoda de insertar valores en un string que fue 
            introducida en ECMAScript 6. Veamos un ejemplo:
        </p>
        <pre>
            <code class="language-javascript">
const nombre = 'Juan';
// interpolation
const mensajeDespues = `Hola, mi nombre es ${nombre}.`
console.log(mensajeDespues);
            </code>
        </pre>
        <p class="mt-2 mb-2">Lo cual arrojará por consola "Hola mi nombre es Juan."</p>
        <SubsectionTitle :chapter="chapterName" :section="typesName" :subsection="nanName" />
        <p class="mt-2 mb-2">
            NaN (Not a Number) es un valor que representa un error de tipo numérico y es de tipo number.
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
            compara consigo mismo el resultado es falso.
        </p>

        <SectionTitle :chapter="chapterName" :section="operatorsName" />

        <p class="mt-2 mb-2">
            Los operadores nos permiten realizar operaciones matemáticas, comparar valores y realizar asignaciones 
            a variables.  
        </p>
        
        <SubsectionTitle :chapter="chapterName" :section="operatorsName" :subsection="nanName" />

        <p class="mt-2 mb-2">
            Estos operadores comparan valores y devuelven un booleano. Posibilitan que el lenguaje pueda
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
            Como se ve en el ejemplo el perador == hace coerción, esto significa que el valor de b se convierte
            en un valor de tipo number.
        </p>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAngleStore } from '~~/scripts/stores/angleStore';
import ChapterTitle from './ChapterTitle.vue';
import SectionTitle from './SectionTitle.vue';
import SubsectionTitle from './SubsectionTitle.vue';

onMounted(() => {
    useAngleStore().addAngleOn('chapter2', () => {});
    useAngleStore().addAngleOff('chapter0');
})

const rightName = 'chapter2';
const leftName = 'chapter0';

const chapterName = 'Variables, estructuras de control y funciones';
const helloSectionName = 'Hola mundo'; //sección de hola mundo
const variablesName = 'Variables e identificadores'; //sección de variables
const typesName = 'Tipos de variables'; //sección de tipos
const nanName = 'El valor NaN'; //subsección de NaN
const operatorsName = 'Operadores'; //sección de operadores
const compartionName = 'Operadores de comparación' //subsección de operadores de comparación

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



</script>
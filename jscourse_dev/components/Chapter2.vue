<template>
     
    <div class="mt-2 flex flex-col rounded-lg border-2 p-4 shadow-lg w-4/6">
        <Angles :right-angle-name="rightName" :left-angle-name="leftName" />
        <ChapterTitle :name="chapterName" />
        <SectionTitle :chapter="chapterName" section="Objetos en JavaScript y Paradigmas de Programación" />
        <SubsectionTitle :chapter="chapterName" section="Objetos en JavaScript y Paradigmas de Programación"
            subsection="Objetos en JavaScript" />
        <p class="mt-2 mb-2">
            Los objetos en JavaScript son estructuras de datos que permiten almacenar colecciones de pares 
            clave-valor. Son fundamentales en el lenguaje y se utilizan para representar entidades del 
            mundo real o conceptos abstractos.
        </p>
        <p class="mt-2 mb-2">
            Las <span class="font-bold">propiedades</span> son las características o atributos del objeto.
            Se representan como pares clave-valor, donde la clave es el nombre de la propiedad y el valor 
            puede ser cualquier tipo de dato válido en JavaScript.
        </p>
        <p class="mt-2 mb-2">
            Por otro lado los <span class="font-bold">métodos</span> son funciones asociadas a un objeto. 
            Representan las acciones que el objeto puede realizar.
        </p>
        <p class="mt-2 mb-2">
            Veamos como se crea un objeto:
        </p>
        <pre>
            <code class="language-javascript">
let persona = {
    nombre: "Ana",     // propiedad
    edad: 30,          // propiedad
    saludar: function() {  // metodo
        console.log("Hola, soy " + this.nombre);
    }
};,
// tambien podemos crear un objeto usando el operador new y la clase Object.
let coche = new Object();
coche.marca = "Toyota";  // añadimos propiedades
coche.modelo = "Corolla";
coche.anio = 2022;
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Como se puede observar, dentro del objeto se pueden declarar variables (las propiedades)
            y funciones (los métodos). Es como se fuesen miniprogramas.
            Observese también la sintaxis, es diferente a declarar variables y funciones fuera de este
            contexto.
        </p>
        <p class="mt-2 mb-2">
            Tambien podemos entonces declarar una variable de tipo objeto y acceder a sus métodos 
            y propiedades.
        </p>

        <pre>
            <code class="language-javascript">
console.log(persona.nombre);  // Acceso a propiedad: Ana
console.log(coche["modelo"]); // Acceso alternativo: Corolla
persona.saludar();            // Llamada a metodo: Hola, soy Ana
            </code>
        </pre>
        <p class="mt-2 mb-2">
            También podemos añadir nuevos métodos y propiedades a un objeto existente, modificando su estrucutura.
            Esto es una característica propia de javascript que no está presente muchos otros lenguajes.
            Tambien podemos modificar propiedades existentes, por eso las propiedades de un objeto pueden
            entenderse como variables.
        </p>
        <pre>
            <code class="language-javascript">
                persona.edad = 31;             // Modificacion de propiedad existente
                persona.profesion = "Ingeniera"; // Adicion de nueva propiedad
            </code>
        </pre>
        <SectionTitle :chapter="chapterName" section="Funciones como Objetos de Primera Clase" />
        <p class="mt-2 mb-2">
            En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden
            asignarse a variables, ser argumentos de otras funciones y devolverse como valores de
            otras funciones. Veamos un ejemplo.
        </p>
        <pre>
            <code class="language-javascript">
// Funcion como argumento
function ejecutar(fn, valor) {
    return fn(valor);
}

let duplicar = x => x * 2;
console.log(ejecutar(duplicar, 5)); // Salida: 10

// Funcion que devuelve otra funcion
function crearMultiplicador(factor) {
    return function(x) {
        return x * factor;
    };
}

let duplicar = crearMultiplicador(2);
console.log(duplicar(4)); // Salida: 8
            </code>
        </pre>
        <p class="mt-2 mb-2">
            Nóses que una función puede efectivamente ser un argumento de otra función y que luego puede
            llamarse a esta función dentro de la función que la recibe como argumento. Esto puede ser un
            poco complejo de asimilar, pero resulta últi cuando queremos tener comportamientos mas dinámicos
            o limpios en nuestro programas. El precio a pagar será que encontrar errores en ese código
            puede ser una tarea mas compleja.
        </p>
        <SectionTitle :chapter="chapterName" section="La POO es un paradigma de programación que organiza el diseño de software en torno a los objetos, en lugar de funciones y lógica. JavaScript, aunque es un lenguaje multiparadigma, soporta la POO. Aunque debe advertirse que los objetos en este lenguaje pueden ser considerados como mapas para quienes vengan de otros lenguajes de programación." />
        <p class="mt-2 mb-2">
            La progrmación orientada a objetos (POO) es un paradigma de programación que organiza el 
            diseño de software en torno a los 
            objetos, en lugar de funciones y lógica. JavaScript, aunque es un lenguaje multiparadigma, 
            soporta la POO. Aunque debe advertirse que los objetos en este lenguaje pueden ser 
            considerados como mapas para quienes vengan de otros lenguajes de programación.
        </p>
        <SectionTitle :chapter="chapterName" section="Clases en JS  (ES6+)" />
        <p class="mt-2 mb-2">
            Una clase es un plano para crear objetos. Define las propiedades y métodos que tendrán 
            los objetos creados a partir de ella.
        </p>
        <pre>
            <code class="languaje-javascript">
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre; // Inicializacion de propiedades
        this.edad = edad;
    }
    
    saludar() { // Metodo de la clase
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} anios.`);
    }
}

let ana = new Persona("Ana", 30); // Creacion de un objeto
ana.saludar(); // Hola, soy Ana y tengo 30 anios.
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Clases en JS  (ES6+)" subsection="Herencia" />
        <p class="mt-2 mb-2">
            La herencia es un mecanismo que permite que una clase (clase hija) herede propiedades y 
            métodos de otra clase (clase padre). Esto promueve la reutilización de código y la creación 
            de jerarquías de objetos.
        </p>
        <pre>
            <code class="languaje-javascript">
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad); // Llama al constructor de la clase padre
        this.puesto = puesto; // Propiedad especifica de Empleado
    }
    
    trabajar() { // Metodo especifico de Empleado
        console.log(`${this.nombre} esta trabajando como ${this.puesto}.`);
    }
}

let juan = new Empleado("Juan", 25, "desarrollador");
juan.saludar();  // Metodo heredado: Hola, soy Juan y tengo 25 anios.
juan.trabajar(); // Metodo propio: Juan esta trabajando como desarrollador.
            </code>
        </pre>
        <p class="mt-2 mb-2">
            En este ejemplo, <code>Empleado</code> hereda de <code>Persona</code>, 
            lo que significa que un <code>Empleado</code> tiene todas las propiedades y métodos de 
            <code>Persona</code>}, más sus propias propiedades y métodos adicionales.

            La POO en JavaScript permite organizar el código de manera más estructurada y reutilizable, 
            facilitando la creación de aplicaciones complejas y mantenibles.

        </p>
        <SubsectionTitle :chapter="chapterName" section="Clases en JS  (ES6+)" subsection="Otro paradigma: la Programación Funcional" />
        <p class="mt-2 mb-2">
            Además de la POO, JavaScript también soporta el paradigma de programación funcional. 
            Este enfoque se centra en el uso de funciones para resolver problemas, tratando la 
            computación como la evaluación de funciones matemáticas y evitando el cambio de estado y 
            datos mutables. JavaScript, siendo un lenguaje multiparadigma, permite a los desarrolladores 
            utilizar técnicas de programación funcional.
        </p>
        <SectionTitle :chapter="chapterName" section="El DOM y Manipulación de Eventos" />
        <SubsectionTitle :chapter="chapterName" section="El DOM y Manipulación de Eventos" subsection="¿Qué es el DOM?" />
        <p class="mt-2 mb-2">
            El DOM (Document Object Model) es una representación estructurada del documento HTML como un 
            árbol de objetos. Permite a JavaScript acceder y manipular el contenido, estructura y estilo 
            de una página web.
        </p>
        <pre>
            <code class="languaje-html">
                 {{ simpleHTML }}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            JavaScript puede modificar todos los elementos y atributos HTML, así como los estilos CSS 
            en una página.
        </p>
        <pre>
            <code class="languaje-javascript">
// Por ID
let elemento = document.getElementById('miId');

// Por clase
let elementos = document.getElementsByClassName('miClase');

// Por etiqueta
let parrafos = document.getElementsByTagName('p');

// Usando selectores CSS
let primerElemento = document.querySelector('.miClase');
let todosElementos = document.querySelectorAll('.miClase');

// Cambiar contenido
elemento.textContent = 'Nuevo texto';
elemento.innerHTML = '<strong>Texto en negrita</strong>';

// Cambiar atributos
elemento.setAttribute('class', 'nuevaClase');

// Cambiar estilos
elemento.style.color = 'red';
elemento.style.fontSize = '20px';

// Agregar/Eliminar clases
elemento.classList.add('nuevaClase');
elemento.classList.remove('viejaClase');
            </code>
        </pre>
        <p class="langaje-javascrip">
            Incluso es posible crear nuevos elementos y agregarlos al DOM.
        </p>
        <pre>
            <code class="langueje-javascript">
// Crear nuevo elemento
let nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Nuevo elemento';

// Agregar al DOM
document.body.appendChild(nuevoElemento);

// Eliminar elemento
let elementoAEliminar = document.getElementById('eliminar');
elementoAEliminar.parentNode.removeChild(elementoAEliminar);
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="El DOM y Manipulación de Eventos" subsection="El elemento button" />
        <p class="mt-2 mb-2">
            El tag <code>button</code> en HTML crea un botón interactivo en la página web.
        </p>
        <pre>
            <code class="languaje-html">
                {{ simpleHTMLButton }}
            </code>
        </pre>
        <p class="mt-2 mb-2">
            En javascript podemos interactuar con el boton y cambiar sus propiedades.
        </p>
        <pre>
            <code class="languaje-html">
let boton = document.getElementById('miBoton');

// Cambiar texto del boton
boton.textContent = 'Nuevo texto';

// Deshabilitar/habilitar el boton
boton.disabled = true;
boton.disabled = false;

// Cambiar estilos
boton.style.backgroundColor = 'blue';
boton.style.color = 'white';
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="El DOM y Manipulación de Eventos" subsection="Escuchadores de eventos" />
        <p class="mt-2 mb-2">
            Los escuchadores de eventos permiten que nuestra página reaccione a acciones del usuario o 
            del navegador. Son configurables usando JavaScript.
        </p>
        <p class="mt-2 mb-0">
            Vamos a agregar un escuchador de eventos a un elemento button.
        </p>
        <pre>
            <code class="languaje-javascript">
let boton = document.getElementById('miBoton');

boton.addEventListener('click', function() {
    console.log('Boton clickeado');
});
            </code>
        </pre>
        <ul>
            <li><code>click</code>: Cuando se hace clic en un elemento.</li>
            <li><code>mouseover</code> / <code>mouseout</code>: Cuando el cursor entra o sale de un elemento.</li>
            <li><code>keydown</code> / <code>keyup</code>: Cuando se presiona o suelta una tecla.</li>
            <li><code>submit</code>: Cuando se envía un formulario.</li>
            <li><code>load</code>: Cuando la página ha terminado de cargar.</li>
        </ul>
        <SubsectionTitle :chapter="chapterName" section="El DOM y Manipulación de Eventos" 
            subsection="Ejemplo práctico"/>
        <pre>
            <code class="languaje-html">
                {{ moreHTML }}
            </code>
        </pre>
        <pre>
            <code class="languaje-javascript">
let boton = document.getElementById('cambiarColor');
let cuadrado = document.getElementById('cuadrado');

boton.addEventListener('click', function() {
    let nuevoColor = cuadrado.style.backgroundColor === 'red' ? 'blue' : 'red';
    cuadrado.style.backgroundColor = nuevoColor;
});
            </code>
        </pre>
        <p>
            Los eventos en el DOM se propagan desde el elemento más interno hacia afuera. Muchas veces,
            vamos a querer que estos no se propaguen. Podemos hacerlo de la siguiente manera.
        </p>
        <pre>
            <code class="languaje-javascript">
document.body.addEventListener('click', function() {
    console.log('Clic en el body');
}, false);

boton.addEventListener('click', function(event) {
    console.log('Clic en el boton');
    event.stopPropagation(); // Detiene la propagacion
}, false);
            </code>
        </pre>
        <p>
            Tambien puede ocurrir que cierto tipo de eventos tengan un comportamiento por defecto no 
            deseado. Para evitar esto podemos solucionarlo de la siguiente manera.
        </p>
        <pre>
            <code class="languaje-javascript">
let enlace = document.getElementById('miEnlace');

enlace.addEventListener('click', function(event) {
    event.preventDefault(); // Previene la navegacion
    console.log('Clic en el enlace');
});
            </code>
        </pre>
        <p class="mt-2 mb-2">
            La manipulación del DOM y el manejo de eventos son fundamentales para crear páginas web 
            interactivas. Permiten a los desarrolladores responder a las acciones del usuario y modificar 
            dinámicamente el contenido y la apariencia de la página.
        </p>
        <SectionTitle :chapter="chapterName" section="Ejemplo Integrador: Contador Interactivo" />
        <p class="mt-2 mb-2">
            Para poner en práctica lo que hemos aprendido hasta ahora, vamos a crear un ejemplo 
            integrador que combine HTML y JavaScript. Crearemos una página web simple con un contador 
            que el usuario puede incrementar, decrementar y resetear usando botones.
        </p>
        <SubsectionTitle :chapter="chapterName" section="Ejemplo Integrador: Contador Interactivo"
            subsection="Estructura HTML" />
        <pre>
            <code class="languaje-html">
                {{ htmlStructure }}
            </code>
        </pre>
        <SubsectionTitle :chapter="chapterName" section="Ejemplo Integrador: Contador Interactivo"
            subsection="Script (contador.js)" />
        <p class="mt-2 mb-2">
            Ahora, creemos el archivo JavaScript que manejará la lógica del contador:
        </p>
        <pre>
            <code class="languaje-javascript">
// Variables
let contador = 0;
const valorContador = document.getElementById('contador');
const btnDecrementar = document.getElementById('decrementar');
const btnIncrementar = document.getElementById('incrementar');
const btnResetear = document.getElementById('resetear');

// Funciones
function actualizarContador() {
    valorContador.textContent = contador;
    
    // Cambia el color basado en el valor
    if (contador > 0) {
        valorContador.style.color = 'green';
    } else if (contador < 0) {
        valorContador.style.color = 'red';
    } else {
        valorContador.style.color = 'black';
    }
}

function incrementar() {
    contador++;
    actualizarContador();
}

function decrementar() {
    contador--;
    actualizarContador();
}

function resetear() {
    contador = 0;
    actualizarContador();
}

// Event Listeners
btnIncrementar.addEventListener('click', incrementar);
btnDecrementar.addEventListener('click', decrementar);
btnResetear.addEventListener('click', resetear);

// Inicializar el contador
actualizarContador();
            </code>
        </pre>
        <ul>
            <li>Usamos <code>document.getElementById()</code> para obtener referencias a los elementos HTML.</li>
            <li>Definimos funciones para incrementar, decrementar y resetear el contador.</li>
            <li>La función <code>actualizarContador()</code> actualiza el valor mostrado y cambia el color basado en el valor actual.</li>
            <li>Utilizamos <code>addEventListener()</code> para asociar las funciones a los eventos de clic de los botones.</li>
            <li>El color del contador cambia a verde si es positivo, rojo si es negativo, y negro si es cero.</li>
        </ul>
        <p class="mt-2 mb-2">
            Este ejemplo integra varios conceptos que hemos aprendido:
        </p>
        <ul>
            <li>Variables y constantes (<code>let</code>, <code>const</code>)</li>
            <li>Funciones</li>
            <li>Estructuras condicionales (<code>if-else</code>)</li>
            <li>Operadores de incremento y decremento</li>
            <li>Manipulación del DOM</li>
            <li>Event Listeners</li>
        </ul>
        <p class="mt-2 mb-2">
            Pra probar este ejemplo:
        </p>
        <ul>
            <li>Crear un archivo HTML con el contenido proporcionado y guardarlo como <code>index.html</code>.</li>
            <li>Crear un archivo JavaScript con el código proporcionado y guardarlo como <code>contador.js</code> en la misma carpeta.</li>
            <li>Abrir el archivo HTML en un navegador web.</li>
        </ul>
        <p class="mt-2 mb-2">
            Se verá un contador con botones para incrementar, decrementar y resetear. El valor cambiará de 
            color según sea positivo, negativo o cero. Este ejemplo práctico demuestra cómo los conceptos 
            básicos de JavaScript se pueden aplicar para crear una interfaz de usuario interactiva simple.
        </p>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const chapterName = 'Objetos y manipualción del DOM';
const rightName = 'chapter3';
const leftName = 'chapter1';


const simpleHTML = `
\<html\>
\<head\>
\<title\>Mi Pagina\</title\>
\</head\>
\<body\>
\<h1\>Bienvenido\</h1\>
\<p\>Este es un parrafo.\</p\>
\</body\>
\</html\>
`
const simpleHTMLButton = `
\<button id="miBoton"\>Haz clic aqui\</button\>
`
const moreHTML = `
\<button id="cambiarColor"\>Cambiar Color\</button\>
\<div id="cuadrado" style="width:100px;height:100px;background-color:red;"\>\</div\>
`
const htmlStructure = `
\<!DOCTYPE html\>
\<html lang="es"\>
\<head\>
    \<meta charset="UTF-8"\>
    \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>
    \<title\>Contador Interactivo\</title\>
    \<style\>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        button {
            font-size: 18px;
            margin: 0 10px;
            padding: 5px 10px;
        }
        #contador {
            font-size: 24px;
            margin: 20px 0;
        }
    \</style\>
\</head\>
\<body\>
    \<h1\>Contador Interactivo\</h1\>
    \<div id="contador"\>0\</div\>
    \<button id="decrementar"\>-\</button\>
    \<button id="incrementar"\>+\</button\>
    \<button id="resetear"\>Resetear\</button\>

    \<script src="contador.js"\>\</script\>
\</body\>
\</html\>
`
</script>
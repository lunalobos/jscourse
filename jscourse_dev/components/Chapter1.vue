<template>
    <div class="mt-2 flex flex-col rounded-lg border-2 p-4 shadow-lg w-3/6">
        <h3 class="mt-2 text-2xl font-bold text-cyan-700">{{ `${chapterNumber}` }} - Variables, estructuras de control y
            funciones</h3>
        <h4 class="mt-2 mb-2 text-xl font-bold text-black-700">{{ `${chapterNumber}.${helloSectionNumber}` }} - Hola mundo</h4>

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

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSectionStore } from '~~/scripts/stores/sectionStore';
import { useChapterStore } from '~~/scripts/stores/chapterStore';

const chapterName = 'Capitulo 1';
const helloSectionName = 'Hola mundo';

const chapterNumber = computed(() => useChapterStore().getChapterIndex(chapterName));
const helloSectionNumber = computed(() => useSectionStore().getSectionIndex(helloSectionName, chapterName));

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
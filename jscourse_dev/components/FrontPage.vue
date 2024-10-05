<template>
    <div class="mt-2 flex flex-col rounded-lg border-2 p-4 shadow-lg w-4/6 bg-red-900 items-center h-5/6">
        <h1 class="text-5xl text-white mt-4 mb-4">Introducción a JavaScript</h1>
        <h2 class="mt-2 mb-2 text-xl text-red-100">
            <span class="text-red-50">Ya Basta!</span> en la Secretaría de Asuntos Académicos
        </h2>
        <button id="start" class=" text-3xl mt-4 mb-4 bg-red-800 hover:bg-red-700 text-white p-4 rounded-xl "
            @click="start()">Comenzar!</button>
        <div class="flex flex-col items-center mt-4">
            <img src="/YaBasta.jpg" class="w-1/2" />
            <p class="mt-2 mb-2 text-justify text-red-50">
                Seguinos en nuestras redes
            </p>
            <div class="flex flex-row items-center mt-4">

                <div class=" bg-red-800 rounded-xl hover:bg-red-700 p-4 mr-2 ml-2">
                    <a href="https://www.instagram.com/yabasta.ungs/">
                        <InstagramIcon />
                    </a>
                </div>
                <div class=" bg-red-800 rounded-xl hover:bg-red-700 p-4 ml-2 mr-2">
                    <a href="https://www.facebook.com/lasrojasungs">
                        <FacebookIcon />
                    </a>
                </div>
                <div class=" bg-red-800 rounded-xl hover:bg-red-700 p-4 ml-2 mr-2">
                    <a href="https://x.com/yabastaungs">
                        <XIcon />
                    </a>
                </div>
            </div>
        </div>



    </div>
</template>

<script setup>
import { useVisibleStore } from '~/scripts/stores/visibleStore';

const visibleStore = useVisibleStore();
function start() {
    visibleStore.setVisibleComponentName('chapter1');
}
</script>
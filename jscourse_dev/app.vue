<template>
  <NuxtPage />
</template>

<script setup>
useHead({
  title: 'Curso de JavaScript',
  meta: [
    { name: 'curso de javascript', content: 'curso de introducción a javascript por el ¡Ya Basta!' }
  ],
  htmlAttrs: {
    lang: 'es'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})

useSeoMeta({
  title: 'Curso de JavaScript',
  ogTitle: 'Curso de JavaScript',
  description: 'Curso de introducción a javascript por el ¡Ya Basta!',
  ogDescription: 'Curso de introducción a javascript por el ¡Ya Basta!. Variables, funciones, objetos, arreglos, etc. Estructuras de control. Funciones y objetos globales. Asincronía.',
  ogImage: 'https://es.wikipedia.org/wiki/JavaScript#/media/Archivo:Unofficial_JavaScript_logo_2.svg',
  twitterCard: 'Curso de introducción a javascript por el ¡Ya Basta!',
  twitterTitle: 'Curso de JavaScript',
  twitterDescription: 'Curso de introducción a javascript por el ¡Ya Basta!. Variables, funciones, objetos, arreglos, etc. Estructuras de control. Funciones y objetos globales. Asincronía.',
  twitterImage: 'https://es.wikipedia.org/wiki/JavaScript#/media/Archivo:Unofficial_JavaScript_logo_2.svg',
  ogUrl: '[og:url]'
})
</script>

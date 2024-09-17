<template>
    <div class="flex flex-col justify-center items-center">
        <AppTitle />
        <Chapter1 />
    </div>
</template>


<script setup>
import { useSectionStore } from '~~/scripts/stores/sectionStore';
import { useChapterStore } from '~~/scripts/stores/chapterStore';
import { onMounted } from 'vue';

onMounted(() => {
    useChapterStore().addChapter('Capitulo 1');
    useSectionStore().addSection('Hola mundo', 'Capitulo 1');
})

</script>
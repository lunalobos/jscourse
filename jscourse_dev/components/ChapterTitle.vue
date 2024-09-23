<template>
    <h3 class="mt-2 text-2xl font-bold text-cyan-700">
        {{ `${chapterNumber} - ${props.name}` }}</h3>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useChapterStore } from '~~/scripts/stores/chapterStore';
import { log } from '~/scripts/logging';

const props = defineProps({
    name: {
        type: String,
        required: true
    }
});

onMounted(() => {
    log(`Cargando título de capitulo ${props.name}`, 'ChapterTitle', 'debug');
    if(!useChapterStore().isChapterPresent(props.name)){
        log(`Anadiendo capitulo ${props.name} al store`, 'ChapterTitle', 'debug');
        useChapterStore().addChapter(props.name);
    } else {
        log(`El capitulo ${props.name} ya existe en el store`, 'ChapterTitle', 'debug');
    }
});

const chapterStore = useChapterStore();
const chapterNumber = computed(() => chapterStore.getChapterIndex(props.name));

</script>
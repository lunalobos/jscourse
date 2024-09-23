<template>
    <h4 class="mt-4 mb-2 text-xl font-bold text-black-700">
        {{ `${chapterNumber}.${sectionNumber} - ${props.section}` }}</h4>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useChapterStore } from '~~/scripts/stores/chapterStore';
import { useSectionStore } from '~~/scripts/stores/sectionStore';
import { log } from '~~/scripts/logging';
const props = defineProps({
    chapter: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    }
});

onMounted(() => {
    log(`Cargando título de seccion ${props.section} de capitulo ${props.chapter}`, 'SectionTitle', 'debug');
    if(!useSectionStore().isSectionPresent(props.section, props.chapter)){
        log(`Anadiendo seccion ${props.section} de capitulo ${props.chapter} al store`, 'SectionTitle', 'debug');
        useSectionStore().addSection(props.section, props.chapter);
    } else {
        log(`La seccion ${props.section} de capitulo ${props.chapter} ya existe en el store`, 'SectionTitle', 'debug');
    }
});

const chapterStore = useChapterStore();
const sectionStore = useSectionStore();
const chapterNumber = computed(() => chapterStore.getChapterIndex(props.chapter));
const sectionNumber = computed(() => sectionStore.getSectionIndex(props.section, props.chapter));

</script>
<template>
    <div class="flex flex-col justify-center items-center">
        <AppTitle />
        <component :is="comp" />
        <Chapter1 />
    </div>
</template>


<script setup>
import { useSectionStore } from '~~/scripts/stores/sectionStore';
import { useChapterStore } from '~~/scripts/stores/chapterStore';
import { useVisibleStore } from '~~/scripts/stores/visibleStore';
import { computed, onMounted } from 'vue';
import Chapter1 from '~~/components/Chapter1.vue';

onMounted(() => {
    useVisibleStore().setVisibleComponentName('chapter1');
    useChapterStore().addChapter('Capitulo 1');
    useSectionStore().addSection('Hola mundo', 'Capitulo 1');
})

const comp = computed(() => getComponent(useVisibleStore().getVisibleComponentName()));

function getComponent(componentName){

    switch (componentName) {
        case 'chapter1':
            return Chapter1;
        default:
            return Chapter1;
    }
}

</script>
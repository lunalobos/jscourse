<template>
    <div class="flex flex-col justify-center items-center">
        <AppTitle />
        <component :is="comp" />
    </div>
</template>


<script setup>
import { useSectionStore } from '~~/scripts/stores/sectionStore';
import { useChapterStore } from '~~/scripts/stores/chapterStore';
import { useSubsectionStore } from '~~/scripts/stores/subsectionStore';
import { useVisibleStore } from '~~/scripts/stores/visibleStore';
import { computed, onMounted } from 'vue';
import Chapter1 from '~~/components/Chapter1.vue';

onMounted(() => {
    useChapterStore().clear();
    useSectionStore().clear();
    useSubsectionStore().clear();
    useVisibleStore().setVisibleComponentName('chapter1');
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
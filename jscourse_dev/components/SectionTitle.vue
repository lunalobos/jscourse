<template>
    <h4 class="mt-2 mb-2 text-xl font-bold text-black-700">
        {{ `${chapterNumber}.${sectionNumber} - ${props.section}` }}</h4>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useChapterStore } from '~~/scripts/stores/chapterStore';
import { useSectionStore } from '~~/scripts/stores/sectionStore';

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
    if(!useSectionStore().isSectionPresent(props.section, props.chapter)){
        useSectionStore().addSection(props.section, props.chapter);
    }
});

const chapterStore = useChapterStore();
const sectionStore = useSectionStore();
const chapterNumber = computed(() => chapterStore.getChapterIndex(props.chapter));
const sectionNumber = computed(() => sectionStore.getSectionIndex(props.section, props.chapter));

</script>
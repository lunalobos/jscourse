<template>
    <h5 class="mt-2 mb-2 text-xl font-bold text-black-700">
        {{ `${chapterNumber}.${sectionNumber}.${subsectionNumber} - ${props.subsection}` }}
    </h5>
        
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useChapterStore } from '~~/scripts/stores/chapterStore';
import { useSectionStore } from '~~/scripts/stores/sectionStore';
import { useSubsectionStore } from '~/scripts/stores/subsectionStore';

const props = defineProps({
    chapter: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    subsection: {
        type: String,
        required: true
    }
});

onMounted(() => {
    if(!useSubsectionStore().isSubsectionPresent(props.subsection, props.section, props.chapter)){
        useSubsectionStore().addSubsection(props.subsection, props.section, props.chapter);
    }
});

const chapterStore = useChapterStore();
const sectionStore = useSectionStore();
const subsectionStore = useSubsectionStore();

const chapterNumber = computed(() => chapterStore.getChapterIndex(props.chapter));
const sectionNumber = computed(() => sectionStore.getSectionIndex(props.section, props.chapter));
const subsectionNumber = computed(() => subsectionStore.getSubsectionIndex(props.subsection, props.section, props.chapter));

</script>
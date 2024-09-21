<template>
    <h3 class="mt-2 text-2xl font-bold text-cyan-700">
        {{ `${chapterNumber} - ${props.name}` }}</h3>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useChapterStore } from '~~/scripts/stores/chapterStore';

const props = defineProps({
    name: {
        type: String,
        required: true
    }
});

onMounted(() => {
    if(!useChapterStore().isChapterPresent()){
        useChapterStore().addChapter(props.name);
    }
});

const chapterStore = useChapterStore();
const chapterNumber = computed(() => chapterStore.getChapterNumber(props.name));

</script>
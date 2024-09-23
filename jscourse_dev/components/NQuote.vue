<template>
    <a :href="hrefLink" :name="nQuoteName" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        [{{ number }}]
    </a>
</template>

<script setup>
import { useBibliographyStore } from '~~/scripts/stores/bibliographyStore';
import { computed,watch } from 'vue';
import { log } from '~~/scripts/logging';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    }
})

const bibliographyStore = useBibliographyStore();
const number = computed(() => bibliographyStore.getNameIndex(props.name, props.chapter));
const hrefLink = `#${props.name}`;
const chapterStored = computed(() => bibliographyStore.chapters[props.chapter]);
const nQuoteName = `_${props.name}`;


watch(chapterStored, (newValue) => {
    log(`Anadiendo bibliografia ${props.name} al store`, 'NQuote', 'debug');
    if (newValue) {
        bibliographyStore.addBibliography({ name: props.name, link: props.link, summary: props.summary },
            props.chapter)
    }
});

</script>
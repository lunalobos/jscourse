<template>
    <h3 class="mt-4 mb-2 text-lg font-serif">
        Bibligrafía
    </h3>
    <div v-for="b in bibliography">
        <p>
            <a :name="b.name" :href="`#_${b.name}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline font-serif">[{{ b.index }}]</a>
            {{ " " }}
            <a :href="b.link" class="font-medium text-blue-600 dark:text-blue-500 hover:underline font-serif">{{ b.summary }}</a>
        </p>
    </div>

</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useBibliographyStore } from '~~/scripts/stores/bibliographyStore';
const props = defineProps({
    chapter: {
        type: String,
        required: true
    }
})

const bibliographyStore = useBibliographyStore();
const bibliography = computed(() => bibliographyStore.getBiliography(props.chapter));

</script>
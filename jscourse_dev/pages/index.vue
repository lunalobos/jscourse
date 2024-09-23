<template>
    <div class="flex flex-col justify-center items-center">
        <AppTitle />
        <component :is="comp" />
    </div>
</template>


<script setup>
import { useVisibleStore } from '~~/scripts/stores/visibleStore';
import { computed, onMounted } from 'vue';
import { log } from '~/scripts/logging';
import Chapter1 from '~~/components/Chapter1.vue';

onMounted(() => {
    log('Cargango página principal', 'index', 'info');
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
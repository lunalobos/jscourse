<template>
    <div class="flex flex-col justify-center items-center">
        <div v-if="showTitle">
            <AppTitle />
        </div>
        
        <component :is="comp" />
    </div>
</template>


<script setup>
import { useVisibleStore } from '~~/scripts/stores/visibleStore';
import { computed, onMounted } from 'vue';
import { log } from '~/scripts/logging';
import Chapter1 from '~/components/Chapter1.vue';
import Chapter2 from '~/components/Chapter2.vue';
import Chapter3 from '~/components/Chapter3.vue';
import Chapter4 from '~/components/Chapter4.vue';
import FrontPage from '~/components/FrontPage.vue';

onMounted(() => {
    log('Cargango página principal', 'index', 'info');
    useVisibleStore().setVisibleComponentName('frontpage');
})

const comp = computed(() => getComponent(useVisibleStore().getVisibleComponentName()));

const showTitle = computed(() => {
    return useVisibleStore().getVisibleComponentName() !== 'frontpage';
});

function getComponent(componentName){

    switch (componentName) {
        case 'frontpage':
            return FrontPage;
        case 'chapter1':
            return Chapter1;
        case 'chapter2':
            return Chapter2;
        case 'chapter3':
            return Chapter3;
        case 'chapter4':
            return Chapter4;
        default:
            return FrontPage;
    }
}

</script>
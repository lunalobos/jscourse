<template>
    <div class="relative flex flex-row">
        <div v-show="isLeft">
            <AngleLeft  @click="leftFunction"/>   
        </div>
        <div v-show="isRight" class="absolute right-0">
            <AngleRight @click="rightFunction"/>
        </div>
    </div>

</template>

<script setup>
import { useVisibleStore } from '~/scripts/stores/visibleStore';
import { computed } from 'vue';

const props =defineProps({
    rightAngleName: String,
    leftAngleName: String
})


const visibleStore = useVisibleStore();

const isRight = computed(() => {
    return props.rightAngleName !== undefined;
});
const isLeft = computed(() => {
    return props.leftAngleName !== undefined;
});
const rightFunction = computed(() => {
    if(props.rightAngleName === undefined){
        return function() {};
    } else {
        return function() {
            visibleStore.setVisibleComponentName(props.rightAngleName);
        }
    }
});
const leftFunction = computed(() => {
    if(props.leftAngleName === undefined){
        return function() {};
    } else {
        return function() {
            visibleStore.setVisibleComponentName(props.leftAngleName);
        }
    }
});


</script>
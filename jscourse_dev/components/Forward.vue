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
import { useAngleStore } from '~~/scripts/stores/angleStore';
import { computed } from 'vue';

const props =defineProps({
    rightAngleName: String,
    leftAngleName: String
})

const angleStore = useAngleStore();

const isRight = computed(() => useAngleStore().isVisible(props.rightAngleName));
const isLeft = computed(() => useAngleStore().isVisible(props.leftAngleName));
const rightFunction = computed(() => useAngleStore().getFunction(props.rightAngleName));
const leftFunction = computed(() => useAngleStore().getFunction(props.leftAngleName));


</script>
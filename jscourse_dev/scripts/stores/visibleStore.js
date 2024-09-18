import { defineStore } from "pinia";
import { ref } from "vue";

export const useVisibleStore = defineStore("visible", () => {
    const comp = ref();
    function getVisibleComponentName(){
        return comp.value;
    }
    function setVisibleComponentName(name){
        comp.value = name;
    }
    return {
        getVisibleComponentName,
        setVisibleComponentName,
        comp
    }
});

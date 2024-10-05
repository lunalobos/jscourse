import { defineStore } from "pinia";
import { ref } from "vue";
import { log } from "../logging";
export const useVisibleStore = defineStore("visible", () => {
    const comp = ref();
    function getVisibleComponentName(){
        return comp.value;
    }
    function setVisibleComponentName(name){
        log(`Cambiando componente visible a ${name}`, 'visibleStore', 'debug');
        comp.value = name;
    }
    return {
        getVisibleComponentName,
        setVisibleComponentName,
        comp
    }
});

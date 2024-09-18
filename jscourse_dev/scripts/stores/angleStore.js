import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAngleStore = defineStore('angle', () => {
    
    const functions = ref({});
    const visible = ref({});

    function addFunction(name, func){
        functions.value[name] = func;
    }

    function getFunction(name){
        return functions.value[name];
    }

    function addAngleOff(angleName){
        off(angleName);
    }

    function addAngleOn(angleNam, func){
        on(angleNam);
        functions.value[angleNam] = func;
    }

    function on(name){
        visible.value[name] = true;
    }

    function off(name){
        visible.value[name] = false;
    }

    function isVisible(name){
        return visible.value[name];
    }

    function clear(){
        functions.value = {};
        visible.value = {};
    }

    return {
        addFunction,
        getFunction,
        addAngleOff,
        addAngleOn,
        on,
        off,
        isVisible,
        clear
    }

});
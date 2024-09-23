import { defineStore } from "pinia";
import { ref } from "vue";
import { log } from "../logging";
export const useSectionStore = defineStore('section', () => {
    const sections = ref({});

    function addSection(sectionName, chapterName){
        log(`Anadiendo sección ${sectionName} a la sección ${chapterName}`, 'sectionStore', 'debug', sectionName, chapterName);
        if(sections.value[chapterName] === undefined)
            sections.value[chapterName] = [];
        sections.value[chapterName].push(sectionName);
    }

    function isSectionPresent(sectionName, chapterName){
        if(sections.value[chapterName] === undefined)
            return false;
        else
            return sections.value[chapterName].includes(sectionName);
    }

    function getSectionIndex(sectionName, chapterName){
        if(isSectionPresent(sectionName, chapterName))
            return sections.value[chapterName].indexOf(sectionName) + 1;
        else
            return -1;
    }

    function clear(){
        sections.value = {};
        log('Store de secciones limpiado', 'sectionStore', 'debug');
    }

    return { sections, addSection, isSectionPresent, getSectionIndex, clear };
});

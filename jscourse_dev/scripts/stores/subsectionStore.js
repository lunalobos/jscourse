import { defineStore } from "pinia";
import { ref } from "vue";

export const useSubsectionStore = defineStore('subsection', () => {
    const subsections = ref({});

    function addSubsection(subsectionName, sectionName, chapterName){
        if(subsections.value[chapterName] === undefined){
            subsections.value[chapterName] = [];
        }
        if(subsections.value[chapterName][sectionName] === undefined){
            subsections.value[chapterName][sectionName] = [];
        }
        subsections.value[chapterName][sectionName].push(subsectionName);
    }

    function isSubsectionPresent(subsectionName, sectionName, chapterName){
        if(subsections.value[chapterName] === undefined)
            return false;
        if(subsections.value[chapterName][sectionName] === undefined)
            return false;
        return subsections.value[chapterName][sectionName].includes(subsectionName);
    }

    function getSubsectionIndex(subsectionName, sectionName, chapterName){
        if(isSubsectionPresent(subsectionName, sectionName, chapterName))
            return subsections.value[chapterName][sectionName].indexOf(subsectionName) + 1;
        else
            return -1;
    }

    return { subsections, addSubsection, isSubsectionPresent, getSubsectionIndex };

});
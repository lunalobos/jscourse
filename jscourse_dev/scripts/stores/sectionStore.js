import { defineStore } from "pinia";
import { ref } from "vue";

export const useSectionStore = defineStore('section', () => {
    const sections = ref({});

    function addSection(sectionName, chapterName){
        if(sections.value[chapterName] === undefined)
            sections.value[chapterName] = [];
        sections.value[chapterName].push(sectionName);
    }

    function isSectionPresent(sectionName, chapterName){
        if(sections.value[chapterName] === undefined)
            return false;
        return sections.value[chapterName].includes(sectionName);
    }

    function getSectionIndex(sectionName, chapterName){
        if(isSectionPresent(sectionName, chapterName))
            return sections.value[chapterName].indexOf(sectionName) + 1;
        else
            return -1;
    }

    return { sections, addSection, isSectionPresent, getSectionIndex };
});

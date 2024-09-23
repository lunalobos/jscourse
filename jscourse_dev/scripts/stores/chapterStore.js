import { defineStore } from "pinia";
import { ref } from "vue";
import { log } from "../logging";

export const useChapterStore = defineStore('chapter', () => {
    const chapters = ref([]);

    function addChapter(chapterName){
        log(`Anadiendo capítulo ${chapterName}`, 'chapterStore', 'debug', chapterName);
        chapters.value.push(chapterName);
    }

    function isChapterPresent(chapterName){
        return chapters.value.includes(chapterName);
    }

    function getChapterIndex(chapterName){
        if(isChapterPresent(chapterName))
            return chapters.value.indexOf(chapterName) + 1;
        else
            return -1;
    }

    function clear(){
        chapters.value = [];
        log('Store de capitulos limpiado', 'chapterStore', 'debug');
    }

    return { chapters, addChapter, isChapterPresent, getChapterIndex, clear };

});
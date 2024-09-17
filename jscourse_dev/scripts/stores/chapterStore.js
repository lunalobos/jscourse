import { defineStore } from "pinia";
import { ref } from "vue";

export const useChapterStore = defineStore('chapter', () => {
    const chapters = ref([]);

    function addChapter(chapterName){
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

    return { chapters, addChapter, isChapterPresent, getChapterIndex };

});
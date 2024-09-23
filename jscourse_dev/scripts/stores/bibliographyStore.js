import { defineStore } from "pinia";
import { ref } from "vue";
import { log } from "../logging";
export const useBibliographyStore = defineStore("bibliography", () => {

    const chapters = ref({});

    function registerChapter(chapterName) {
        log(`Registrando capítulo ${chapterName}`, 'bibliographyStore', 'debug');
        chapters.value[chapterName] = {
            names: [],
            links: [],
            summaries: []
        };
        log(JSON.stringify(chapters.value), 'bibliographyStore', 'debug');
    }

    function addBibliography(bibliography, chapterName) {
        log(`Anadiendo bibliografia ${bibliography.name} al capítulo ${chapterName}`, 'bibliographyStore', 'debug');
        let {name, link, summary} = bibliography;
        if(chapters.value[chapterName] && chapters.value[chapterName].names && 
            chapters.value[chapterName].links && chapters.value[chapterName].summaries){
            chapters.value[chapterName].names.push(name);
            chapters.value[chapterName].links.push(link);
            chapters.value[chapterName].summaries.push(summary);
        }
    }

    function getNameIndex(name, chapterName) {
        log(`Obteniendo indice de nombre ${name} en capítulo ${chapterName}`, 'bibliographyStore', 'debug');
        const chapter = chapters.value[chapterName];
        if (chapter && chapter.names) {
            return chapter.names.indexOf(name) + 1 || -1;
        }
        return -1;  // Retorna -1 si el capítulo o los nombres no existen
    }

    function getBiliography(chapterName) {
        log(`Obteniendo bibliografia del capítulo ${chapterName}`, 'bibliographyStore', 'debug');
        const chapter = chapters.value[chapterName];
        if (chapter && chapter.names) {
            const n = chapters.value[chapterName].names.length;
            let i = 0;
            const output = [];
            while(i < n){
                output.push({
                    name: chapters.value[chapterName].names[i],
                    link: chapters.value[chapterName].links[i],
                    summary: chapters.value[chapterName].summaries[i],
                    index: i + 1
                });
                i++;
            }
            return output;
        }
        return [{
            name: "",
            link: "",
            summary: "",
            index: 1
        }]
    }

    function clear(){
        chapters.value = {};
    }

    return { chapters, registerChapter, addBibliography, getNameIndex, getBiliography, clear };
})
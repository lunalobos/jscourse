import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('prism', Prism);
});

// Importeren van Vue en de verscheidenen templates.
import Vue from 'vue';
import mainheader from './mainheader.vue';
import maincontent from './maincontent.vue';
import mainfooter from './mainfooter.vue';
import App from './App.vue';


// De templates worden als component ingeladen en aangemaakt.
Vue.component('mainheader', mainheader);
Vue.component('maincontent', maincontent);
Vue.component('mainfooter', mainfooter);

new Vue({
    el:'#app',
    render: h => h(App)
});
window._ = require('lodash');

window.Vue = require('vue');
Vue.component('container', require('./components/Container'));

window.EventBus = new Vue();

const app = new Vue({
    el: '#app',
});

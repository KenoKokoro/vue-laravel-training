import Vue from 'vue';

require('./bootstrap');
require('./components');

import store from './store';

window.EventBus = new Vue();

const app = new Vue({
    el: '#app',
    store,
});

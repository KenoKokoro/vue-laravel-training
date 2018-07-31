window._ = require('lodash');
window.axios = require('axios');

window.Vue = require('vue');
Vue.component('container', require('./components/Container'));
Vue.component('registration-form', require('./components/Forms/Registration'));
Vue.component('text-form', require('./components/Helpers/TextForm'));
Vue.component('user-list', require('./components/User/List'));
Vue.component('news-list', require('./components/News/NewsList'));

window.EventBus = new Vue();

axios.defaults.headers['x-api-key'] = '60b5a0bcd4a246f78a5b56b39863ac12';

const app = new Vue({
    el: '#app',
});

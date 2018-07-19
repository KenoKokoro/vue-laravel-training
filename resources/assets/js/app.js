window._ = require('lodash');

window.Vue = require('vue');
Vue.component('container', require('./components/Container'));
Vue.component('registration-form', require('./components/Forms/Registration'));
Vue.component('text-form', require('./components/Helpers/TextForm'));
Vue.component('user-list', require('./components/User/List'));

window.EventBus = new Vue();

const app = new Vue({
    el: '#app',
});

import Vue from 'vue';
import Vuex from 'vuex';

import userList from './modules/user-list';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        userList
    }
});

export default store;

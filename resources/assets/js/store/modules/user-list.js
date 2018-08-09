import {userList as types} from "../types";
import axios from 'axios';
import Vue from 'vue';

const state = {
    users: []
};

const actions = {
    [types.setUser]({commit}) {
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            commit(types.setUser, response.data.results);
        });
    },

    [types.remove]({commit, state}, email) {
        const index = _.findIndex(state.users, user => {
            return user.email === email;
        });

        if (index !== -1) {
            commit(types.remove, index);
        }
    }
};

const getters = {};

const mutations = {
    [types.setUser](state, users) {
        state.users = users;
    },

    [types.remove](state, index) {
        Vue.delete(state.users, index);
    }
};

const modules = {
    // other modules
};

export default {
    state, actions, getters, mutations, modules, namespaced: true
}

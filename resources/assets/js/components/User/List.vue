<template>
    <div>
        <input type="text" class="field" @input="filterResults"/>

        <p v-text="`Total: ${results.length}`"></p>
        <user :user="user" v-for="user in users" :key="`read-${user.email}`" v-if="hasResults"
              @delete-user="deleteUser"></user>
        <loading-circle v-if="! hasResults && ! hasDeletedResults"></loading-circle>

        <h3>Deleted</h3>
        <user :user="user" v-for="user in deleted" :key="`delete-${user.email}`" v-if="hasDeletedResults"
              @undo-user="undoUser" :undo="true"></user>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';
    import User from './Single';
    import LoadingCircle from './../Helpers/LoadingCircle';
    import {userList as userListTypes} from "../../store/types";

    export default {
        components: {User, LoadingCircle},

        data() {
            return {
                users: [],
                deleted: [],
                filter: {
                    name: ''
                }
            }
        },

        computed: {
            ...mapState({
                results(state) {
                    return state.userList.users;
                }
            }),

            hasResults() {
                return this.results.length > 0;
            },

            hasDeletedResults() {
                return this.deleted.length > 0;
            }
        },

        watch: {
            results(value) {
                this.users = value;
            }
        },

        methods: {
            ...mapActions({
                setUsers: `userList/${userListTypes.setUser}`
            }),

            deleteUser(email) {
                const index = _.findIndex(this.users, user => {
                    return user.email === email;
                });

                this.deleted.push({deleteIndex: index, ...this.results[index]});
                this.users.splice(index, 1);
            },

            undoUser(email) {
                const index = _.findIndex(this.deleted, user => {
                    return user.email === email;
                });

                this.users.push(this.deleted[index]);
                this.deleted.splice(index, 1);
            },

            filterResults: _.debounce(function (event) {
                const value = event.target.value;

                if (value === '') {
                    this.users = this.results;
                }

                let name;

                this.users = this.results.filter(user => {
                    name = `${user.name.title}. ${user.name.first} ${user.name.last}`;

                    return name.includes(value);
                });
            }, 500)
        },

        mounted() {
            this.setUsers();
        },
    }
</script>

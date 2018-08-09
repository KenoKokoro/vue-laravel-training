<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="user.picture.medium" :alt="fullName()"/>
                    </figure>
                </div>

                <div class="media-content">
                    <p class="title is-4" v-text="fullName()"></p>
                    <p class="subtitle is-6" v-text="user.email"></p>
                </div>
            </div>
            <div>

                <button class="is-danger button" @click="deleteFromResults(user.email)">HARD DELETE</button>
                <button class="is-warning button" @click="deleteUser" v-if="undo === false">Delete</button>
                <button class="is-warning button" @click="undoUser" v-if="undo === true">Undo</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {userList as userListTypes} from "../../store/types";

    export default {
        props: {
            user: {
                type: Object,
                required: true
            },
            undo: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            ...mapActions({deleteFromResults: `userList/${userListTypes.remove}`}),

            fullName() {
                return `${this.user.name.title}. ${this.user.name.first} ${this.user.name.last}`;
            },

            deleteUser() {
                this.$emit('delete-user', this.user.email);
            },

            undoUser() {
                this.$emit('undo-user', this.user.email);
            }
        }
    }
</script>

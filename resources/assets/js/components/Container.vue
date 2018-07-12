<template>
    <div class="container">
        <button class="button" @click="resize">Change username</button>
        <input type="text" class="input" @input="changeUsernameInput">
        <user :my-prop="username"></user>
    </div>
</template>

<script>
    import User from './User';

    export default {
        components: {User},

        data() {
            return {
                username: 'John Doe'
            }
        },

        methods: {
            resize() {
                window.EventBus.$emit('resize');
            },
            changeUsername(arg, event) {
                this.username = 'Someone else Doe';
            },

            changeUsernameInput: _.throttle(function ($event) {
                this.username = $event.target.value;
            }, 500)
        },

        mounted() {
            setTimeout(() => {
                this.username = 'Jane Doe';
            }, 2000);
        }
    }
</script>

<template>
    <div @keyup.enter="enter">
        <registration-success :show="done"></registration-success>

        <text-form label="Name">
            <input slot="input" class="input" type="text" v-model="form.name" placeholder="Text input" :disabled="done">
        </text-form>

        <text-form label="Email">
            <input slot="input" class="input" type="email" v-model="form.email" placeholder="Text input"
                   :disabled="done"/>
        </text-form>

        <text-form label="Password">
            <input slot="input" class="input" type="password" v-model="form.password" placeholder="Text input"
                   :disabled="done"/>
        </text-form>

        <text-form label="Password Confirmation">
            <input slot="input" class="input" type="password" v-model="form.password_confirmation"
                   placeholder="Text input" :disabled="done"/>
        </text-form>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" :disabled="(! filled || done)" @click="submit">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import RegistrationSuccess from './RegistrationSuccess';

    export default {
        components: {RegistrationSuccess},

        props: {
            endpoint: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                done: false
            }
        },

        computed: {
            filled() {
                return this.form.name !== '' && this.form.email !== ''
                    && this.form.password !== '' && this.form.password_confirmation !== '';
            }
        },

        methods: {
            submit(event) {
                axios.post(this.endpoint, this.form).then(response => {
                    this.finishRegistration();
                }).catch(error => {
                    console.log(error.response)
                });
            },

            finishRegistration() {
                this.done = true;
            },

            enter(event) {
                if (this.filled) {
                    this.submit();
                }
            }
        }
    }
</script>

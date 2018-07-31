<template>
    <div class="select">
        <select v-model="chosen" :disabled="loading === true">
            <option value="" v-text="defaultText()"></option>
            <option v-for="source in sources" v-text="source.name" :value="source.id"></option>
        </select>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                sources: [],
                chosen: '',
                loading: true
            }
        },

        watch: {
            chosen(chosenValue) {
                this.$emit('source-chosen', chosenValue);
            }
        },

        mounted() {
            axios.get('https://newsapi.org/v2/sources').then(response => {
                this.sources = response.data.sources;
                this.loading = false;
            });
        },

        methods: {
            defaultText() {
                if (this.loading === true) {
                    return 'Loading ...';
                }

                return 'Please select';
            }
        }
    }
</script>

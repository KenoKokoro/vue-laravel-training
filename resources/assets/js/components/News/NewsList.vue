<template>
    <div>
        <div class="container box column is-6">
            <source-picker @source-chosen="changeSource"></source-picker>
        </div>

        <div class="container box column is-6">
            <top-headlines :source="source"></top-headlines>
        </div>
    </div>
</template>

<script>
    import SourcePicker from './SourcePicker';
    import TopHeadlines from './TopHeadlines';

    export default {
        components: {SourcePicker, TopHeadlines},

        data() {
            return {
                source: ''
            }
        },

        methods: {
            changeSource(source) {
                this.source = source;
            }
        }
    }
</script>

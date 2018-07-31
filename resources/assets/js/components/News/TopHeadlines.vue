<template>
    <div>
        <h1 v-if="source !== ''">News</h1>

        <div class="columns is-multiline" v-if="loading === false">
            <div class="column is-12" v-for="article in news">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">
                                    <a :href="article.url" v-text="article.title"></a>
                                </p>
                                <p class="subtitle is-6" v-text="article.author"></p>
                            </div>
                        </div>

                        <div class="content">
                            {{ article.description }}
                            <p><a :href="article.url" class="button is-primary">Read more...</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: {
            source: {
                required: true,
                type: String
            }
        },

        data() {
            return {
                defaultUrl: 'https://newsapi.org/v2/top-headlines?sources=',
                news: [],
                loading: false
            }
        },

        watch: {
            source(sourceValue) {
                this.loading = true;
                if (sourceValue === '') {
                    return;
                }

                this.fetchNews(sourceValue);
            }
        },

        methods: {
            fetchNews(source) {
                axios.get(`${this.defaultUrl}${source}`).then(response => {
                    this.loading = false;
                    this.news = response.data.articles;
                });
            }
        },
    }
</script>

<template>
    <div class="container">
        <p :class="['subtitle', {'is-3': largeText}]" v-text="myProp"></p>
        <p class="subtitle" v-text="myData"></p>
    </div>
</template>

<script>
    export default {
        props: {
            myProp: {
                required: false,
                type: String,
                default: 'Default value'
            }
        },


        data() {
            return {
                myData: 'Test value',
                largeText: false,
            }
        },

        mounted() {
            window.EventBus.$on('resize', () => {
                this.largeText = true;
            });

            setTimeout(() => {
                this.myData = 'New Data value';
            }, 2000);
        }
    }
</script>

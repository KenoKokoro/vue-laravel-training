<template>
    <article class="message is-success" v-if="show === true">
        <div class="message-header">
            <p>Success</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            Your registration request was submitted with success
        </div>
    </article>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    }
</script>

<template>
    <div class="field">
        <label class="label" v-if="label !== ''">{{ label }}
            <span class="required" v-if="required === true">*</span></label>
        <div class="control">
            <slot name="input"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: false,
                default: ''
            },

            required: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

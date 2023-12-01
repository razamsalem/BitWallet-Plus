<template>
    <article class="contact-preview">
        <h1>{{ contact.name }}</h1>
        <h1>{{ contact.address }}</h1>
    </article>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style lang="scss"></style>
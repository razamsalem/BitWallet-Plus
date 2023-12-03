<template>
    <article @click="onDetails" class="contact-preview">
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
    methods: {
		onDetails() {
			this.$router.push(`/contact/${this.contact._id}`)
		},
    }
}
</script>

<style lang="scss">
.contact-preview {
    cursor: pointer;
}
</style>
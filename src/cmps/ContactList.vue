<template>
    <section class="contact-list">
        <ul class="contact-list">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <RouterLink :to="`/contact/${contact._id}`">
                    <button> Details </button>
                </RouterLink>
                <RouterLink to="/contact/edit">
                    <button> Edit </button>
                </RouterLink>
                <button @click="onRemoveContact(contact)">x</button>
            </li>
        </ul>
    </section>
</template>

<script>
import ContactPreview from '../cmps/ContactPreview.vue'
export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onRemoveContact(contact) {
            this.$emit('remove', contact)
        }
    },
    components: {
        ContactPreview,
        ContactPreview
    }
}
</script>

<style lang="scss"></style>
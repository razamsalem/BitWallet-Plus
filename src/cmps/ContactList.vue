<template>
    <section class="contact-list">
        <ul class="contact-list contacts-layout clean-list">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" @remove="onRemoveContact" />
                <RouterLink :to="`/contact/edit/${contact._id}`">
                    <button> Edit </button>
                </RouterLink>
                <!-- <button @click="onRemoveContact(contact._id)">x</button> -->
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
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
            console.log('sec')
        }
    },
    components: {
        ContactPreview,
        ContactPreview
    }
}
</script>

<style lang="scss"></style>
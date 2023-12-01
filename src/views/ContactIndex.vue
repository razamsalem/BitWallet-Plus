<template>
    <section class="contact-index">
        <contactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
        <img v-else src="../assets/spinning-circles.svg" alt="">
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import contactList from "../cmps/ContactList.vue"
export default {
    data() {
        return {
            contacts: null,
        }
    },
    methods: {
        async removeContact(contact) {
            await contactService.deleteContact(contact._id)
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        contactList,
    }
}
</script>

<style lang="scss"></style>
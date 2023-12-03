<template>
    <section class="contact-index">
        <ContactFilter @set-filter="onFilter" />
        <contactList v-if="contacts" :contacts="filteredContacts" @remove="removeContact" />

        <img v-else src="../assets/spinning-circles.svg" alt="">
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import ContactFilter from '@/cmps/ContactFilter.vue'
import contactList from "../cmps/ContactList.vue"
export default {
    data() {
        return {
            contacts: [],
            filterBy: {
                txt: '',
            },
        }
    },
    methods: {
        async removeContact(contact) {
            await contactService.deleteContact(contact._id)
        },
        onFilter(newFilter) {
            this.filterBy = newFilter
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        }
    },
    components: {
        contactList,
        ContactFilter
    }
}
</script>

<style lang="scss"></style>
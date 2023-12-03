<template>
    <section v-if="contacts" class="contact-index">
        <ContactFilter @set-filter="onFilter" />
        <contactList :contacts="filteredContacts" @remove="removeContact" />
    </section>
    <div v-else class="loader">
        <img src="../assets/three-dots.svg" alt="">
    </div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import ContactFilter from '@/cmps/ContactFilter.vue'
import contactList from "../cmps/ContactList.vue"
export default {
    data() {
        return {
            contacts: null,
            filterBy: {
                txt: '',
            },
        }
    },
    methods: {
        async removeContact(contact) {
            await contactService.removeContact(contact._id)
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
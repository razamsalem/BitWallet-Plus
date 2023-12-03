<template>
    <section v-if="contacts" class="contact-index">
        <RouterLink to="contact/edit">
            <button>Add a Contact</button>
        </RouterLink>
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
import { RouterLink } from 'vue-router'
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
        async removeContact(contactId) {
            try {
                await contactService.removeContact(contactId)
                const idx = this.contacts.findIndex(contact => contact._id === contactId)
                this.contacts.splice(idx, 1)
            } catch (err) {
                console.log('Cant delete contact', err)
            }
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
        ContactFilter,
        RouterLink
    }
}
</script>

<style lang="scss"></style>
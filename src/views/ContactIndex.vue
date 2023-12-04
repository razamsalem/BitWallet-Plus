<template>
    <section class="contact-index">
        <app-header :title="title"></app-header>
        <RouterLink to="contact/edit" class="add-btn" title="Add Contact">
            <button><i class="fa-solid fa-plus fa-2xl"></i></button>
        </RouterLink>
        <ContactFilter @set-filter="onFilter" />
        <contactList v-if="contacts" :contacts="filteredContacts" @remove="removeContact" />
        <div v-else class="loader">
            <img src="../assets/three-dots.svg" alt="">
        </div>
    </section>
</template>

<script>
import { RouterLink } from 'vue-router'
import { eventBus } from '../services/eventBus.service'
import ContactFilter from '@/cmps/ContactFilter.vue'
import contactList from "../cmps/ContactList.vue"
import AppHeader from '../cmps/AppHeader.vue'

export default {
    data() {
        return {
            filterBy: {
                txt: '',
            },
            title: 'Contacts'
        }
    },
    methods: {
        async removeContact(contactId) {
            try {
                await this.$store.dispatch({ type: 'removeContact', contactId })
                eventBus.emit('user-msg', `contact removed successfully`)
            } catch (err) {
                console.log('Cannot delete contact', err)
            }
        },
        onFilter(newFilter) {
            this.filterBy = newFilter
        }
    },
    computed: {
        contacts() {
            return this.$store.getters.contacts
        },
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        }
    },
    async created() {
        try {
            this.$store.dispatch({ type: 'loadContacts' })
        } catch (err) {
            console.log('cannot load contacts ->', err)
        }
    },
    components: {
        RouterLink,
        contactList,
        ContactFilter,
        AppHeader,
    }
}
</script>

<style lang="scss">
.contact-index {
    background-color: #00415a;
    min-height: 100vh;
    padding: 1rem;

    .contact {
        padding: 45px;
    }

    .add-btn {
        button {
            position: fixed;
            bottom: 35px;
            right: 35px;

            width: 4em;
            height: 4em;
            border: 1px solid #001f2b;
            border-radius: 50%;
            transition: .4s;
            z-index: 999;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

            &:hover {
                width: 5em;
                height: 5em;
            }
        }
    }
}
</style>
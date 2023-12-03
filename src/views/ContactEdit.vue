<template>
    <section v-if="contact" class="contact-edit">
        <h2>{{ displayTitle }}</h2>

        <form @submit.prevent="onSaveContact">
            <input v-model="contact.name" type="text">
            <input v-model.number="contact.age" type="number">
            <pre>{{ contact }}</pre>
            <button>Save</button>
            <button type="button" @click="back">Back</button>
        </form>
    </section>
    <img v-else src="../assets/three-dots.svg" alt="">
</template>

<script>
import { contactService } from '../services/contact.service';
export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async onSaveContact() {
            await contactService.save(this.contact)
            this.back()
        },
        back() {
			this.$router.push('/contact')
		},
    },
    computed: {
        displayTitle() {
            return this.contact._id ? `Edit ${this.contact.name}` :  'Add new contact'
        }
    },
    async created() {
        const contactId = this.$route.params.id
        if (contactId) {
            this.contact = await contactService.getById(contactId)
        }
        else {
            this.contact = contactService.getEmptyContact()
        }
    }
}

</script>

<style lang="scss"></style>
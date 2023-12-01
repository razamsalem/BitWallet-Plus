<template>
    <section v-if="contact" class="contact-details">
        <h1>Contact Details</h1>
        <pre>{{ contact }}</pre>
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </section>
    <img v-else src="../assets/spinning-circles.svg" alt="">
</template>

<script>
import { contactService } from "../services/contact.service.js"
export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.getContactById(contactId)
    }
}
</script>

<style lang="scss"></style>
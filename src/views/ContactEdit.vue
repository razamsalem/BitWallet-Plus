<template>
    <section v-if="contact" class="contact-edit">
        <app-header :title="displayTitle" />

        <div class="relative-container">
            <div class="edit-area">
                <h2>{{ displayTitle }}</h2>
                <form @submit.prevent="onSaveContact">
                    <label for="name">Full name</label>
                    <input required v-model="contact.name" type="text">

                    <label for="phoneNumber">Phone number</label>
                    <input required v-model="contact.phone" type="text">

                    <label for="email">Email</label>
                    <input required v-model="contact.email" type="email">

                    <label for="age">Age</label>
                    <input required v-model.number="contact.age" min="1" max="99" type="number" name="age" id="age">

                    <label for="address">Address</label>
                    <input required v-model="contact.address" type="text">

                    <button>Save</button>
                </form>
            </div>
            <button type="button" @click="back" class="back-btn"><i class="fa-solid fa-share fa-flip-horizontal"></i></button>
        </div>
    </section>
    <div v-else class="loader">
        <img src="../assets/three-dots.svg" alt="">
    </div>
</template>

<script>
import { contactService } from '../services/contact.service';
import AppHeader from '../cmps/AppHeader.vue'
import { eventBus } from '../services/eventBus.service';
export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async onSaveContact() {
            await contactService.save(this.contact)
            eventBus.emit('user-msg', `contact saved successfully`)
            this.back()
        },
        back() {
            this.$router.push('/contact')
        },
    },
    computed: {
        displayTitle() {
            return this.contact._id ? `Edit ${this.contact.name}` : 'Add new contact'
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
    },
    components: {
        AppHeader,
    }
}
</script>

<style lang="scss">
.contact-edit {
    background-color: #00415a;
    min-height: 100vh;
    padding: 1rem;

    .relative-container {
        position: relative;

        .back-btn {
            position: absolute;
            top: 0;
            font-size: 3.125rem;
            background: none;
            border: none;
            color: #00719c;
            transition: color 0.2s;

            &:hover {
                color: #001f2b;
            }
        }
    }

    .edit-area {
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 8px;
        padding: 2em;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        margin: auto;
        margin-top: 4em; 
        width: 50vw;
        max-width: 600px;
        height: auto; 

        label {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
        }

        input {
            width: 100%;
            padding: 0.5em;
            margin-bottom: 1em;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .errors {
            color: red;
            margin-top: -0.5em;
            margin-bottom: 1em;
        }

        button {
            background-color: #00719c;
            color: #fff;
            padding: 0.5em 1em;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: #001f2b;
            }

            &[disabled] {
                background-color: #ccc;
                cursor: not-allowed;
            }
        }
    }
}

</style>
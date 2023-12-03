<template>
    <article @click="onDetails" class="contact-preview">
        <div class="info flex">
            <img ref="contactImage" class="user-img" :src="`https://robohash.org/${contact._id}?set=set5`" alt="Contact profile picture"
                @load="onImageLoad" />
            <img v-if="loading" class="user-img" src="../assets/rings.svg" alt="Loading" />
            <div class="data">
                <p>{{ contact.name }}</p>
            </div>
            <div class="hidden-btns">
                <button @click="onRemoveContact(contact._id)" class="remove-btn">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <RouterLink :to="`/contact/edit/${contact._id}`" class="edit-btn">
                    <button @click="onEditContact">
                        <i class="fa-solid fa-user-pen"></i>
                    </button>
                </RouterLink>
            </div>
        </div>
    </article>
</template>
  
<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            loading: true,
        };
    },
    methods: {
        onDetails() {
            this.$router.push(`/contact/${this.contact._id}`);
        },
        onRemoveContact(contactId) {
            event.stopPropagation();
            this.$emit('remove', contactId);
        },
        onEditContact() {
            event.stopPropagation();
        },
        onImageLoad() {
            this.loading = false;
        },
        watchImage() {
            this.$refs.contactImage.addEventListener('load', this.onImageLoad);
        },
    },
    mounted() {
        this.watchImage();
    },
    beforeDestroy() {
        this.$refs.contactImage.removeEventListener('load', this.onImageLoad);
    },
};
</script>
  

<style lang="scss">
.contact-preview {
    position: relative;
    cursor: pointer;

    .info {
        background-color: #fff;
        border: 2px solid #00719c;
        border-radius: 0.5rem;
        align-items: center;
        padding: 0.25rem 0.75rem;
        margin-block: 0.313rem;
        height: 4.375rem;

        img {
            width: 3.125rem;
            margin-inline-end: 0.75rem;
        }
    }

    .hidden-btns {
        position: absolute;
        right: -10px;
        display: flex;
        gap: 10px;
        color: #001f2b;
        opacity: 0;
        transition-duration: 0.3s;
        transition-property: right, opacity;

        .remove-btn {
            width: 2em;
            height: 2em;
            background-color: inherit;
            border-radius: 100%;
            border: 1px solid #001f2b;
            transition: 0.15s;
            cursor: pointer;

            &:hover {
                background-color: orangered;
                border: none;
                color: white;
            }
        }

        .edit-btn {
            button {
                width: 2em;
                height: 2em;
                background-color: inherit;
                border-radius: 100%;
                border: 1px solid #001f2b;
                transition: 0.15s;
                cursor: pointer;

                &:hover {
                    background-color: #001f2b;
                    color: white;
                }
            }
        }

    }

    &:hover {
        .hidden-btns {
            opacity: 1;
            right: 10px;
        }

    }
}
</style>
<template>
    <section class="nav-bar flex">
        <h1 @click="goHome" class="logo">Bitcoin<i class="fa-solid fa-plus"></i></h1>
        
        <nav class="flex">
            <RouterLink to="/">
                <i class="fa-regular fa-address-card"></i> My Card
            </RouterLink>

            <RouterLink to="/contact">
                <i class="fa-regular fa-address-book"></i> Contacts
            </RouterLink>

            <RouterLink to="/transaction">
                <i class="fa-solid fa-handshake"></i> Transfers
            </RouterLink>

            <RouterLink to="/stats">
                <i class="fa-solid fa-chart-simple"></i> Stats
            </RouterLink>
        </nav>
        <Transition>
            <UserMsg/>
        </Transition>
    </section>
</template>

<script>
import UserMsg from '../cmps/UserMsg.vue'

export default {
    methods: {
        goHome() {
            this.$router.push(`/`)
        },
    },
    components: {
    UserMsg,
    UserMsg
}
}
</script>

<style lang="scss">
.nav-bar {
    position: relative;
    flex-direction: column;
    padding: 1em;
    background-color: #001f2b;
    color: #00719c;

    .logo {
        display: flex;
        align-items: center;

        margin-block-end: 1em;
        font-size: 28px;
        font-weight: 600;
        cursor: pointer;

        
    .fa-plus {
        font-size: 16px;
        color: #fff;
        margin-inline-start: 4px;
    }
    }

    nav {
        flex-direction: column;
        gap: 1em;

        a {

            padding: .5em;

            i {
                margin-inline-end: 2px;
            }

            &:not(:last-child) {
                margin-inline-end: 10px;
            }

            &.router-link-exact-active {
                background-color: #00415a;
                color: #fff;
                padding: .5em;
                border: 1px solid #fff;
                border-radius: 12px;
                font-weight: 500;
            }

            &:hover {
                color: #fff;
            }
        }

        .logout-btn {
            position: fixed;
            bottom: 2em;
            left: 1em;
            width: 2em;
            height: 2em;
            background: none;
            border: 1px solid #fff;
            border-radius: 50%;
            color: #fff;
            transition: 0.15s;

            &:hover {
                width: 3em;
                height: 3em;
                background-color: orangered;
                border: none;
                color: white;
            }
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(100px);
}
</style>
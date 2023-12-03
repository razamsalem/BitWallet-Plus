<template>
    <section class="app-header flex">
        <div class="title">
            <h1>{{ title }}</h1>
        </div>

        <div class="user-info flex">
            <RouterLink to="/">{{ user.name }}</RouterLink>
            <RouterLink to="/"> <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png">
            </RouterLink>

        </div>
    </section>
</template>

<script>
import { userService } from '../services/user.service'
export default {
    data() {
        return {
            user: {},
        }
    },
    props: {
        title: '',
    },
    created() {
        this.user = userService.getUser()
    }
}
</script>

<style lang="scss">
.app-header {
    justify-content: space-between;
    color: #00719c;
    text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    padding-block-end: 1rem;
    border-bottom: 1px solid #00719c;
    margin-block-end: 1rem;

    .title {
        h1 {
            font-size: 28px;
            font-weight: 500;
            cursor: default;

            &:hover {
                text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3);
            }
        }
    }

    .user-info {
        gap: 1rem;
        align-items: center;

        a {
            cursor: pointer;
            font-size: 19px;
            transition: box-shadow 0.6;

            &:hover {
                text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3);
            }

            img {
                cursor: pointer;
                width: 45px;
            }
        }

    }
}
</style>
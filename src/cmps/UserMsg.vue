<template>
    <div v-if="msg.txt" class="user-msg">
        <p>{{ msg.txt }}</p>
    </div>
</template>

<script>
import { eventBus } from '../services/eventBus.service'

export default {
    data() {
        return {
            msg: {
                txt: '',
            }
        }
    },
    methods: {
        onUserMsg(payload) {
            this.msg.txt = payload
            setTimeout(() => this.msg.txt = '', 1000)
        }
    },
    created() {
        eventBus.on('user-msg', this.onUserMsg)
    },
}
</script>

<style lang="scss">
.user-msg {
    position: fixed;
    bottom: 50px;
    left: 55%;
    transform: translateX(-50%);
    z-index: 1000;
    background-color: lightgreen;
    width: max-content;
    padding: 4px 10px;
    border-radius: 8px;
    transition: .5s;
}
</style>
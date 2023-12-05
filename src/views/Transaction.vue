<template>
    <div class="transfers-container">
    <app-header :title="title"></app-header>
    <div v-if="allTransactions.length > 0" class="tranfer-list contacts-layout">
        <section v-for="(transfer, index) in allTransactions.slice().reverse()" :key="index" class="transfer-preview">
            {{ console.log(transfer)}}
            <div class="info flex">
                <img class="item" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="User picture">
                <i class=" item fa-solid fa-arrow-right-long arrow transfer-icon fa-xl"></i>
                <img class="item" :src="`https://robohash.org/${transfer.contactId}?set=set5`" alt="Contact profile picture">

                <i class="fa-solid fa-hand-holding-hand fa-xl hands item"></i>
                <h4 class="item"><i class="fa-solid fa-dollar-sign transfer-icon lgreen"></i><span class="dgreen">{{transfer.amount}}.00</span></h4>
                <h4 class="calendar item"> <i class="fa-solid fa-calendar-days "></i>{{ formatDate(transfer.date) }} </h4>                                
            </div>
        </section>
    </div>
</div>
</template>

<script>
import { userService } from '../services/user.service'
import AppHeader from '../cmps/AppHeader.vue'

export default {
    data() {
        return {
            allTransactions: [],
            title: 'Transfers'
        }
    },
    methods: {
        formatDate(dateString) {
      const options = { 
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
      };
      return new Date(dateString).toLocaleDateString('en-US', options);
    }
  },
    created() {
        this.allTransactions = userService.getTransactions()
    },
    components: {
    AppHeader,
  }
}
</script>

<style lang="scss">
.transfers-container {
    background-color: #00415a;
    min-height: 100vh;
    padding: 1rem;

    .transfer-preview {
        position: relative;

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

            .calendar {
                color: #00719c;
                i {
                    margin-inline-end: .5em;
                }
            }

            .arrow,
            .hands {
                color: #00415a;
            }

            .item {
                margin-inline: .3em;
            }
        }
    }
}
</style>
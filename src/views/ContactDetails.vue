<template>
    <section class="contact-details">
        <app-header :title="title"></app-header>
        <div v-if="contact" class="relative-container">
            <div class="card">
                <div class="home-layout">
                    <div class="user flex left">
                        <img :src="`https://robohash.org/${contact._id}?set=set5`" alt="Contact profile picture">
                        <h1 class="name">{{ contact.name }}</h1>
                        <h1 class="age">{{ contact.age }} years old</h1>
                    </div>

                    <div class="info flex right">
                        <h1 class="user-detail flex"><i class="fa-solid fa-house-chimney icon"></i> {{ contact.address }}
                        </h1>
                        <h1 class="user-detail flex"><i class="fa-solid fa-phone icon"></i> {{ contact.phone }}</h1>
                        <h1 class="user-detail flex"><i class="fa-solid fa-at icon"></i> {{ contact.email }}</h1>

                        <!-- <div class="last-transfers">
                        <h3>Recent transactions with {{ contact.name }}</h3>
                        <p class="user-detail flex" *ngFor="let move of contactMoves.slice().reverse()">
                            <i class="fa-solid fa-coins icon"></i>
                            <span> Transfer <span class="gold"> ${{move.amount }} </span>
                                to <span class="colored">{{ move.to }}</span>
                                <br>
                                at <span class="colored"> {{ move.at|date:'short' }} </span>
                            </span>
                        </p>
                        <p class="no-transfers-message" *ngIf="contactMoves.length === 0">No transfers with {{
                            contact.name }}.</p>
                    </div> -->
                    </div>
                    <div class="actions">
                        <RouterLink :to="`/contact/edit/${contact._id}`">
                            <button  class="edit-btn" title="Edit this contact">  <i class="fa-solid fa-user-pen"></i></button>
                        </RouterLink>

                        <!-- <div class="transfer-section">
                        <button *ngIf="!transferAmount" (click)="transferAmount = 1" class="transfer-money-btn"
                            title="Transfer money">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                        </button>
                        <div class="input-container">
                            <input *ngIf="transferAmount" type="number" class="transfer-input"
                                [(ngModel)]="transferAmount" placeholder="Enter amount">
                            <i *ngIf="transferAmount" class="fa-solid fa-dollar-sign"></i>
                        </div>
                        <button *ngIf="transferAmount" (click)="moveCoins()" class="transfer-btn">
                            <i title="Send money" class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div> -->
                    </div>
                </div>
            </div>
            <RouterLink to="/contact">
                <button class="back-btn"><i class="fa-solid fa-share fa-flip-horizontal"></i></button>
            </RouterLink>
        </div>
        <div v-else class="loader">
            <img src="../assets/three-dots.svg" alt="">
        </div>
    </section>
</template>

<script>
import { contactService } from "../services/contact.service.js"
import AppHeader from '../cmps/AppHeader.vue'
export default {
    data() {
        return {
            contact: null,
            title: '',
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.getById(contactId)
        this.title = this.contact.name
    },
    components: {
        AppHeader,
    }
}
</script>

<style lang="scss">
.contact-details {
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
            transition: color .2s;

            &:hover {
                color: #001f2b;
            }
        }
    }

    .card {
        position: relative;
        padding: 2rem;
        margin: 5rem auto;
        width: 50vw;
        height: 50vh;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

        &::before {
            content: '';
            position: absolute;
            top: 5%;
            bottom: 5%;
            left: 50%;
            width: 2px;
            background-color: #00415a;
            transform: translateX(-50%);
        }

        .user {
            flex-direction: column;
            align-items: center;
            color: #00415a;

            .name {
                font-size: 26px;
                letter-spacing: 1px;
            }

            img {
                width: 300px;
            }
        }

        .info {
            margin-block-start: 1rem;
            margin-inline-start: 8rem;
            flex-direction: column;

            .user-detail {
                align-items: center;
                font-size: 1rem;
                color: #00415a;

                .icon {
                    margin-inline-end: 7px;
                    font-size: .9rem;
                }
            }

            .last-transfers {
                border: 1px solid #00415a;
                border-radius: 12px;
                padding: 12px 24px;
                margin-block-start: 1rem;

                h3 {
                    color: #00415a;
                    margin-block-end: .5em;
                }

                p {

                    &:not(:last-child) {
                        margin-block-end: 1em;
                    }
                }
            }
        }

        .actions {

            .edit-btn {
                position: absolute;
                bottom: 15px;
                right: 15px;
                font-size: 25px;
                background: none;
                border: none;
                color: #00719c;
                transition: color .2s;

                &:hover {
                    color: #00415a;
                }
            }

            .transfer-section {
                position: absolute;
                top: 15px;
                right: 15px;

                .transfer-money-btn,
                .transfer-btn {
                    font-size: 25px;
                    background: none;
                    border: none;
                    color: #00719c;
                    transition: color .2s;

                    &:hover {
                        color: #00415a;
                    }
                }

                .transfer-input {
                    font-size: 25px;
                    width: 60px;
                    padding: 5px;
                    font-size: 14px;
                    -moz-appearance: textfield;
                    border: 1px solid #00719c;
                    border-radius: 8px;

                    &:focus {
                        outline-color: #00415a;
                    }

                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                }

                .input-container {
                    position: relative;
                    display: inline-block;

                    .fa-dollar-sign {
                        color: #00719c;
                        position: absolute;
                        right: 5px;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }

    }

}
</style>
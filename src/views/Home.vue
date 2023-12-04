<template>
  <section class="home-container">
    <app-header :title="title" />
    <div class="card">
      <div class="home-layout">
        <div class="user flex left">
          <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" alt="User picture">
          <h1 class="name">{{ user.name }}</h1>
          <h1 class="age">{{ user.age }} years old</h1>
        </div>

        <div class="info flex right">
          <h1 class="user-detail flex"><i class="fa-solid fa-house-chimney icon"></i> {{ user.address }}</h1>
          <h1 class="user-detail flex"><i class="fa-solid fa-phone icon"></i> {{ user.phone }}</h1>
          <h1 class="user-detail flex"><i class="fa-solid fa-at icon"></i> {{ user.email }}</h1>
          <h1 class="user-detail flex"><i class="fa-solid fa-wallet icon"></i> ${{ formattedUserBalance }}</h1>
          <h1 class="user-detail flex"><i class="fa-brands fa-bitcoin icon"></i> {{ bitcoinRate }}</h1>

          <!-- <div class="last-transfers">
                    <h3>Your recent transactions</h3>
                    <p class="user-detail flex" *ngFor="let move of lastMoves.slice().reverse()">
                        <i class="fa-solid fa-coins icon"></i>
                        <span> Transfer <span class="gold"> ${{move.amount }} </span>
                            to <span class="colored">{{ move.to }}</span>
                            <br>
                            at <span class="colored"> {{ move.at|date:'short' }} </span>
                        </span>
                    </p>
                </div> -->

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import AppHeader from '../cmps/AppHeader.vue'

export default {
  data() {
    return {
      user: {},
      bitcoinRate: 0,
      formattedUserBalance: '',
      title: 'My Card'
    }
  },
  methods: {
    formatUserBalance() {
      if (this.user) {
        this.formattedUserBalance = this.user.balance.toFixed(2)
      }
    },
  },
  created() {
    this.user = userService.getUser()
    this.formatUserBalance()

    const moneyToConvert = this.user.balance

    const userBitcoinBalance = async () => {
      try {
        return await bitcoinService.getRate(moneyToConvert)
      } catch (error) {
        console.error('Error fetching bitcoin rate:', error)
        return 0
      }
    }

    userBitcoinBalance().then((result) => {
      this.bitcoinRate = result
    })
  },
  components: {
    AppHeader,
  }
}


</script>

<style lang="scss">
.home-container {
  background-color: #00415a;
  min-height: 100vh;
  padding: 1rem;

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

      h1 {
        margin-block: .2em;
        color: #00415a;
      }

      .user-detail {
        align-items: center;
        font-size: 1rem;

        .icon {
          font-size: .9rem;
          margin-inline-end: 5px;
        }

        &:last-of-type {
          margin-block-end: 1em;
        }
      }
    }
  }

  @media (max-width: 1250px) {
    .card {
      width: 100%;
      margin: 2rem auto;
      grid-template-columns: 1fr;
    }
  }
}
</style>

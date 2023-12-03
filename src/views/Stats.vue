<template>
    <section class="stats-container">
        <div class="above-charts flex">
            <div class="bar-chart">
                <BarChart />
            </div>
            <div class="radar-chart">
                <RadarChart />
            </div>

            <div class="calculator">
        <h3><i class="fa-solid fa-calculator"></i> Bitcoin Calculator</h3>
        <span>Current BTC value = 37,757.60 <small>USD</small></span>
        <span class="green"> +18.80 (0.05%) <i class="fa-solid fa-arrow-trend-up"></i> today</span>
        <div class="convert-inputs">
          <div class="convert flex">
            <label for="usdInput">Enter USD</label>
            <input v-model="usdAmount" type="number" id="usdInput" @input="convertToBitcoin">
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <div class="convert flex">
            <label for="btcInput">BTC Value</label>
            <input v-model="bitcoinValue" type="number" id="btcInput" readonly>
            <i class="fa-solid fa-bitcoin-sign"></i>
          </div>
        </div>
        <div class="imgs flex">
          <img src="https://res.cloudinary.com/de2rdmsca/image/upload/v1700906599/png-transparent-united-states-dollar-dollar-sign-computer-icons-money-dollar-coin-coin-text-trademark-investment-removebg-preview_xus0d4.png" alt="Dollar coins image">
          <img src="https://cdn3.iconfinder.com/data/icons/basicolor-money-finance/24/226_bitcoin_btc_currency-512.png" alt="Bitcoin image">
        </div>
      </div>
        </div>

        <div class="below-charts">
            <LineChart />
        </div>
    </section>
</template>

<script>
import RadarChart from '../cmps/RadarChart.vue';
import BarChart from '../cmps/BarChart.vue';
import LineChart from '../cmps/LineChart.vue';

export default {
    data() {
    return {
      usdAmount: '',
      bitcoinValue: 0.00000000,
      currentBtcValue: 37757.60,
    }
  },
  methods: {
    convertToBitcoin() {
      this.bitcoinValue = (this.usdAmount / this.currentBtcValue).toFixed(8);
    },
  },
    components: {
        RadarChart,
        BarChart,
        LineChart
    }
}
</script>

<style lang="scss">
.stats-container {
    background-color: #00415a;
    min-height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    .above-charts {
        display: flex;
        justify-content: space-between;

        .bar-chart,
        .radar-chart,
        .calculator {
            flex: 1;
            background-color: #fff;
            border: 3px solid lightblue;
            border-radius: 8px;
            padding: 1.5em;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
            display: flex;
            flex-direction: column;

            h3 {
                color: #00719c;
                margin-bottom: 0.5em;
            }

            .convert-inputs {
                border: 2px solid #ccc;
                border-radius: 12px;
                padding: 1rem;
                margin-block-start: 1rem;
            }

            .convert {
                position: relative;
                align-items: baseline;
                margin-block: 1.5em;


                label {
                    display: block;
                    text-align: left;
                    width: 40%;
                }

                input {
                    padding: 0.5em;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    width: 60%;
                    box-sizing: border-box;
                    display: inline-block;
                    -moz-appearance: textfield;
                    appearance: textfield;

                    +i {
                        color: #d8d7d7;
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        padding: 0.5em;
                    }

                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                }
            }

            .imgs {
                justify-content: space-evenly;
                margin-block-start: auto;

                img {
                    width: 100px;
                }
            }

            .green {
                margin-block-end: 1rem;
            }

            p {
                margin-top: 1em;
            }

            &:not(:last-child) {
                margin-inline-end: 1em;
            }
        }
    }

    .below-charts {
        margin-top: 1em;
        flex: 1;
        width: 100%;
        background-color: #fff;
        border: 3px solid lightblue;
        border-radius: 8px;
        padding: 1em;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }
}
</style>
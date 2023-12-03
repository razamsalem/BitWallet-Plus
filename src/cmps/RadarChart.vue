<template>
    <Radar :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'
import * as chartConfig from '../services/radarConfig.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Radar
  },
  data() {
    return chartConfig
  }
}
</script>

<template>
    <div class="radar">
        <RadarChart />
    </div>
    <div class="bar">
        <BarChart />
    </div>
    <div class="line">
        <LineChart />
    </div>
</template>

<script>
import RadarChart from '../cmps/RadarChart.vue';
import BarChart from '../cmps/BarChart.vue';
import LineChart from '../cmps/LineChart.vue';

export default {
    components: {
        RadarChart,
        BarChart,
        LineChart
    }
}
</script>

<style lang="scss"></style>
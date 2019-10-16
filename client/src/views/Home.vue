<template>
  <div class="home">
    <Test />
    <div class="charts">
      <PieChart
        v-bind:id="3"
        v-bind:title="'Workouts'"
        v-bind:series="[
      {
      value: 20,
      name: 'Arms'
      },
      {
      value: 10,
      name: 'Legs'
      },
      {
      value: 70,
      name: 'Back'
      },
      {
      value: 10,
      name: 'Chest/Shoulders'
      }
      ]"
        v-bind:height="250"
        v-bind:width="500"
      />
      <LineChart
        v-bind:id="1"
        v-bind:title="'Bench Press'"
        v-bind:labels="['Mon', 'Tue', 'Wed', 'Thu', 'Fri']"
        v-bind:series="[[50, 55, 48, 65, 64]]"
        v-bind:height="250"
        v-bind:width="500"
      />
      <LineChart
        v-bind:id="2"
        v-bind:title="'Squats'"
        v-bind:labels="['Mon', 'Tue', 'Wed', 'Thu', 'Fri']"
        v-bind:series="[[40, 50, 65, 60, 67]]"
        v-bind:height="250"
        v-bind:width="500"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "@/components/StatsComponents/LineChart.vue";
import PieChart from "@/components/StatsComponents/PieChart.vue";
import Test from "@/components/Test.vue";
export default Vue.extend({
  components: {
    LineChart,
    PieChart,
    Test
  }
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}
.charts {
  width: 500px;
  height: auto;
}
</style>
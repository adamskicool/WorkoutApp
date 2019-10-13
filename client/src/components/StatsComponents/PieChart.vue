<template>
  <div class="pie-chart center-vert card">
    <h6 id="title">{{this.title}}</h6>
    <div class="ct-chart" v-bind:id="'chart' + this.id"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["id", "title", "series", "height", "width"],
  mounted() {
    var data = {
      series: this.series
    };
    var options = {
      width: this.width,
      height: this.height
    };
    //imported via CDN in index.html
    new Chartist.Pie("#chart" + this.id, data, options);
  }
});
</script>

<style scoped>
.pie-chart {
  flex-direction: column;
  width: auto;
}
#title {
  font-size: 12px;
}
</style>
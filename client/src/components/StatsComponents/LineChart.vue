<template>
  <div class="line-chart center-vert card">
    <h6 id="title">{{this.title}}</h6>
    <div class="ct-chart" v-bind:id="'chart' + this.id"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["id", "title", "labels", "series", "height", "width"],
  mounted() {
    var data = {
      labels: this.labels,
      series: this.series
    };
    var options = {
      width: this.width,
      height: this.height
    };
    //imported via CDN in index.html
    new Chartist.Line("#chart" + this.id, data, options);
  }
});
</script>

<style scoped>
.line-chart {
  flex-direction: column;
  width: auto;
  padding: 10px;
}
#title {
  font-size: 12px;
}
</style>
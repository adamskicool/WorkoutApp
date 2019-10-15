<template>
  <div class="header center">
    <div v-on:click="redirect('/presetMaker')" class="option center">
      <button>Preset Maker</button>
    </div>
    <div v-on:click="redirect('/workout')" class="option center">
      <button>Workout</button>
    </div>
    <div v-on:click="redirect('/home')" class="option center">
      <button>Home</button>
    </div>
    <div v-on:click="redirect('/stats')" class="option center">
      <button>Stats</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    redirect(path) {
      this.$router.push(path);
    }
  }
});
</script>

<style scoped>
.header {
  height: 100%;
  width: 100%;
  background-color: rgb(40, 77, 148);
}
.option {
  height: 100%;
  width: 150px;
  transition: background-color 0.3s ease-in-out;
}
.option:hover {
  background-color: rgb(34, 67, 129);
  cursor: pointer;
}
.option > button:hover {
  cursor: pointer;
}
.option > button {
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 14px;
}
</style>
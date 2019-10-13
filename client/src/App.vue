<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <router-view id="router-view" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
export default Vue.extend({
  components: {
    Header
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
html,
body {
  font-family: "Roboto", sans-serif;
  padding: 0px;
  margin: 0px;
}
#app {
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
}
#header {
  height: 70px;
  width: 100%;
}
#router-view {
  height: calc(100vh - 70px);
  overflow-y: scroll;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-vert {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  margin: 10px;
  background-color: white;
  border-radius: 5px;
}
</style>

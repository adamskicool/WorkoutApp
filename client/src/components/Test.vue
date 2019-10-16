<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { GET_WORKOUT_BY_ID } from "../../graphql/queries/workoutQueries";

export default Vue.extend({
  created() {
    let workout = this.$apollo.query({
      query: GET_WORKOUT_BY_ID,
      variables: {
        workoutID: 1
      }
    });
    workout.then(res => {
      console.log(res);
    });
  }
});
</script>

<style scoped>
</style>
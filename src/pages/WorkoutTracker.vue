<template>
  <q-page class="q-pa-md">
    <q-list separator
     bordered >

     <workout v-for="(workout, key) in workouts"
      :key="key"
      :workout="workout"
      :id="key">
     </workout>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn :ripple="{ center: true }"
      color="secondary"
      no-caps icon="add"
      @click="showAddWorkout = true"/>
    </div>

    <q-dialog v-model="showAddWorkout">
      <add-workout @close="showAddWorkout = false"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showAddWorkout: false
    }
  },
  computed: {
    ...mapGetters('workouts', ['workouts'])
  },
  components: {
    workout: require('components/workouts/workouts.vue').default,
    'add-workout': require('components/modals/AddWorkout.vue').default
  }
}
</script>

<style>
body {
  background: linear-gradient(51deg, #a097ff, #ffacc0);
    background-size: 400% 400%;
    z-index:-1;
    -webkit-animation: AnimationName 10s ease infinite;
    -moz-animation: AnimationName 10s ease infinite;
    animation: AnimationName 10s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>

<template>
    <q-item
      @click="updateWorkouts({ id: id, updates: { completed: !workout.completed}})"
      clickable
      v-ripple
      :class="!workout.completed ? 'bg-white-1' : 'bg-green-1'">
        <q-item-section side top>
          <q-checkbox v-model="workout.completed"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{workout.type}} - {{workout.weight}} lbs x {{workout.reps}}</q-item-label>
        </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>

           <q-item-section side top>
            <div class="q-pa-md q-gutter-sm">
                <q-btn
                    @click.stop="promptDelete(id)"
                    :ripple="{ center: true }"
                    color="secondary"
                    no-caps
                    side
                    icon="delete" />
            </div>
          </q-item-section>
      </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['workout', 'id'],
  methods: {
    ...mapActions('workouts', ['updateWorkouts', 'deleteWorkout']),
    promptDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to delete this?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteWorkout(id)
      })
    }
  }
}
</script>

<style>

</style>

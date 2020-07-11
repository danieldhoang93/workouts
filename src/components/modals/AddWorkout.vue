<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">Add Workout</div>
            <q-space />
            <q-btn push color="white" text-color="primary" round icon="close" dense v-close-popup/>
        </q-card-section>

        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-sm">
            <q-input outlined v-model="workoutToSubmit.type"
                label="Type of Workout"
                dense
                :rules="[val => !!val || 'Field is required']"
                ref="name">
                <template v-slot:prepend>
                    <q-icon name="place" />
                </template>
            </q-input>

            <q-input outlined v-model="workoutToSubmit.weight"
                label="Weight"
                dense
                :rules="[val => !!val || 'Field is required']">
                <template v-slot:prepend>
                    <q-icon name="place" />
                </template>
            </q-input>

            <q-input outlined v-model="workoutToSubmit.weight"
                label="Reps"
                dense
                :rules="[val => !!val || 'Field is required']">
                <template v-slot:prepend>
                    <q-icon name="place" />
                </template>
            </q-input>

            <div class="q-pt-sm">
                <q-input outlined
                label="Date"
                v-model="workoutToSubmit.date"
                :rules="[val => !!val || 'Field is required']">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="workoutToSubmit.date" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                    </q-icon>
                </template>
                </q-input>
            </div>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Save" color="primary" type="submit" />
        </q-card-actions>

        </form>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      workoutToSubmit: {
        type: '',
        weight: '',
        date: '',
        reps: ''
      }
    }
  },
  methods: {
    ...mapActions('workouts', ['addWorkout']),
    submitForm () {
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitWorkout()
      }
    },
    submitWorkout () {
      console.log('save')
      this.addWorkout(this.workoutToSubmit)
      this.$emit('close')
    }
  }
}
</script>

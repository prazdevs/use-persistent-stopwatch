<script>
import { defineComponent } from '@vue/composition-api'
import usePersistentStopwatch from 'use-persistent-stopwatch'

export default defineComponent({
  setup() {
    const { elapsed, running, resume, pause, reset } = usePersistentStopwatch('cute-watch-2')

    return { elapsed, running, resume, pause, reset }
  }
})
</script>

<template>
  <div>
    <span :style="{ color: running ? 'green' : 'red' }">{{ elapsed }}</span>
    <button @click="resume">resume</button>
    <button @click="pause">pause</button>
    <button @click="reset">reset</button>
  </div>
</template>
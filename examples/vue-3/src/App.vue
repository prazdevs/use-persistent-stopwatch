<script setup lang="ts">
import usePersistentStopwatch from 'use-persistent-stopwatch'

const { elapsed, running, resume, pause, reset } = usePersistentStopwatch('cute-watch-3')
</script>

<template>
  <span :style="{ color: running ? 'green' : 'red' }">
    {{ elapsed }}
  </span>
  <button @click="resume">resume</button>
  <button @click="pause">pause</button>
  <button @click="reset">reset</button>
</template>
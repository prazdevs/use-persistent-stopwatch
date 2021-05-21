<script setup lang="ts">
import useStopwatch from '../dist/index'

const { elapsed, pause, resume, reset,running } = useStopwatch('library')
</script>
  
<template>
  <div>elapsed time: {{ elapsed }}</div>
  <div>running: {{ running }}</div>
  <button @click="resume">resume</button>
  <button @click="pause">pause</button>
  <button @click="reset">reset</button>
</template>

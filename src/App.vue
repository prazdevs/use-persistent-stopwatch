<script setup lang="ts">
import useStopwatch from '../dist/index'

const { elapsed, pause, resume, reset, running } = useStopwatch('library')
</script>
  
<template>
  <div>
    <span :style="{ color: running ? 'green' : 'red' }">elapsed time: {{ elapsed }}</span>
    <button @click="resume">resume</button>
    <button @click="pause">pause</button>
    <button @click="reset">reset</button>
  </div>
</template>

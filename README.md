<p align="center">
  <img alt="" src="https://i.imgur.com/avyRHFw.png">
</p>
<p align="center">
  <i>Artwork by <a href="https://www.artstation.com/david_ko">David Ko</a></i>
</p>

<h1 align="center">use-persistent-stopwatch</h1>
<p align="center">A Vue composable bringing storage persisted stopwatches to your apps compatible with Vue 2 & 3.</p>


<p align="center">
  <img src="https://img.shields.io/github/package-json/v/prazdevs/use-persistent-stopwatch" />
  <img src="https://img.shields.io/codeclimate/maintainability/prazdevs/use-persistent-stopwatch?logo=code-climate" />
  <img src="https://codecov.io/gh/prazdevs/use-persistent-stopwatch/branch/main/graph/badge.svg?token=CXP3WKDZ73"/>
  <img src="https://img.shields.io/bundlephobia/minzip/use-persistent-stopwatch" />
  <img src="https://img.shields.io/github/license/prazdevs/use-persistent-stopwatch" />
</p>

## ✨ Features

- Multiple instances referenced by a key.
- Persistence through sessions and tabs using storage.
- Pausable/resumable.
- Fully typed with TypeScript.
- Compatible with Vue 2 and 3 (thanks to [vue-demi](https://github.com/vueuse/vue-demi)).

## 🧱 Prerequisites

- Vue 2: you need the [Composition API plugin](https://github.com/vuejs/composition-api) installed.
- Vue 3: you don't need anything else than Vue.

## ⚙️ Installing

For Yarn users:
```sh
yarn add use-persistent-stopwatch
```
For Npm users:
```sh
npm install use-persistent-stopwatch
```

## 🚀 Usage

### Basic usage

Simply import the composable and call it in your `setup()` function:

```vue
<script lang="ts">
import usePersistentStopwatch from 'use-persistent-stopwatch'

export default defineComponent({
  setup() {
    const { elapsed, pause, resume, reset } = usePersistentStopwatch('cute-watch')

    return { elapsed, pause, resume, reset }
  }
})
</script>

<template>
  <div>
    <span :style="{ color: running ? 'green' : 'red' }">elapsed time: {{ elapsed }}</span>
    <button @click="resume">resume</button>
    <button @click="pause">pause</button>
    <button @click="reset">reset</button>
  </div>
</template>
```

### Multiple stopwatches

You can create multiple independent stopwatches by using different keys:

```vue
<script lang="ts">
import usePersistentStopwatch from 'use-persistent-stopwatch'

export default defineComponent({
  setup() {
    const { elapsed: elapsedOne, pause: pauseOne, resume: resumeOne } = usePersistentStopwatch('watch-one')
    const { elapsed: elapsedTwo, pause: pauseTwo, resume: resumeTwo } = usePersistentStopwatch('watch-two')

    return { elapsedOne, elapsedTwo, pauseOne, pauseTwo, resumeOne, resumeTwo }
  }
})
</script>
```

## 🤝 Contributing

Any contribution to the project is welome.  
Run into a problem? Open an [issue](https://github.com/prazdevs/use-persistent-stopwatch/issues/new/choose).  
Want to add some feature? PRs are welcome!

## 👤 About the author

Feel free to contact me:

- <a href="https://twitter.com/prazdevs"><img src="https://img.shields.io/twitter/follow/prazdevs?style=social" /><a/>
- <img src="https://img.shields.io/badge/Discord-PraZ%234184-darkgrey?labelColor=7289DA&logo=discord&logoColor=white" />

## 📝 Licence

Copyright © 2021 [Sacha Bouillez](https://github.com/prazdevs).<br />
This project is under [MIT](https://github.com/prazdevs/use-persistent-stopwatch/blob/main/LICENCE) license.

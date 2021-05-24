import { useTimestamp, useStorage } from '@vueuse/core'
import { computed, ComputedRef } from 'vue-demi'

export interface StopwatchOptions {
  /**
   * Start stopwatch as composable is called.
   * @default false
   */
  immediate?: boolean

  /**
   * Stopwatch update interval if given
   * @default 'requestAnimationFrame'
   */
  interval?: 'requestAnimationFrame' | number
}

export interface StopwatchReturn {
  /**
   * Pauses the stopwatch.
   */
  pause: () => void
  /**
   * Resumes the stopwatch.
   */
  resume: () => void
  /**
   * Resets the stopwatch to 0.
   */
  reset: () => void
  /**
   * Whether the stopwatch is running or not.
   */
  running: ComputedRef<boolean>
  /**
   * Time elapsed in milliseconds.
   */
  elapsed: ComputedRef<number>
}

/**
 * Stopwatch persisted in storage.
 * @param key Key to reference the stopwatch in storage.
 * @param options
 */
export default function useStopwatch(key: string, options: StopwatchOptions = {}): StopwatchReturn {
  const { immediate = false, interval = 'requestAnimationFrame' } = options

  const { timestamp: now } = useTimestamp({ interval })

  const startTimestamp = useStorage(`stopwatch-timestamp-${key}`, now.value)
  const pauseTimestamp = useStorage(`stopwatch-pause-${key}`, immediate ? 0 : now.value)
  const offset = useStorage(`stopwatch-offset${key}`, 0)
  

  const running = computed(() => !pauseTimestamp.value)
  const currentPause = computed(() => !running.value ? now.value - pauseTimestamp.value : 0)
  const elapsed = computed(() => now.value - startTimestamp.value - offset.value - currentPause.value)

  /**
   * Pauses the stopwatch.
   */
  function pause() {
    if (pauseTimestamp.value) return
    pauseTimestamp.value = now.value
  }

  /**
   * Resumes the stopwatch.
   */
  function resume() {
    offset.value += currentPause.value
    pauseTimestamp.value = 0
  }

  /**
   * Resets the stopwatch to 0.
   */
  function reset() {
    startTimestamp.value = now.value
    offset.value = 0
    if (pauseTimestamp.value) pauseTimestamp.value = now.value
  }

  return {
    pause,
    resume,
    reset,
    elapsed,
    running
  }
}

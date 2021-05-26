import usePersistentStopwatch from '../src/index'
import { useSetup } from './test-utils'

describe('usePersistentStopwatch', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  
  it('should not start by default', () => {
    //* Arrange
    let instance = useSetup(() => {
      const { elapsed, running } = usePersistentStopwatch('test')
      return { elapsed, running }
    })

    //* Assert
    expect(instance.running).toBeFalsy()
    expect(instance.elapsed).toBe(0)
  })

  it('should resume', () => {
    //* Arrange
    let instance = useSetup(() => {
      const { elapsed, running, resume } = usePersistentStopwatch('test')
      return { elapsed, running, resume }
    })

    //* Act
    instance.resume()

    //* Assert
    expect(instance.running).toBeTruthy()
  })

  it('should pause', () => {
    //* Arrange
    let instance = useSetup(() => {
      const { elapsed, running, pause } = usePersistentStopwatch('test', { immediate: true })
      return { elapsed, running, pause }
    })

    //* Act
    instance.pause()

    //* Assert
    expect(instance.running).toBeFalsy()
  })
})
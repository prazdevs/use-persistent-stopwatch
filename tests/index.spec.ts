import usePersistentStopwatch from '../src/index'
import { useSetup } from './utils'

describe('usePersistentStopwatch', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  
  it('should not start by default', () => {
    //* Arrange
    const instance = useSetup(() => {
      const { elapsed, running } = usePersistentStopwatch('test')
      return { elapsed, running }
    })

    //* Assert
    expect(instance.running).toBeFalsy()
    expect(instance.elapsed).toBe(0)
  })

  it('should resume', () => {
    //* Arrange
    const instance = useSetup(() => {
      const { running, resume } = usePersistentStopwatch('test')
      return { running, resume }
    })

    //* Act
    instance.resume()

    //* Assert
    expect(instance.running).toBeTruthy()
  })

  it('should pause', () => {
    //* Arrange
    const instance = useSetup(() => {
      const { running, pause } = usePersistentStopwatch('test', { immediate: true })
      return { running, pause }
    })

    //* Act
    instance.pause()

    //* Assert
    expect(instance.running).toBeFalsy()
  })
})
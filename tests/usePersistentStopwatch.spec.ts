import usePersistentStopwatch from '../src/index'
import { useSetup } from './test-utils'

describe('usePersistentStopwatch', () => {
  it('should not start immediately by default', () => {
    const instance = useSetup(() => {
      const { elapsed } = usePersistentStopwatch('test')

      return { elapsed }
    })

    expect(instance.elapsed).toBe(0)
  })
})
import { debounce } from '.'

describe('debounce', () => {
  let func: jest.Mock
  let debouncedFunc: Function

  beforeEach(() => {
    func = jest.fn()
    debouncedFunc = debounce(func, 1000)
  })

  it('should execute just once', () => {
    jest.useFakeTimers()
    for (let i = 0; i < 5; i++) {
      debouncedFunc()
    }

    jest.runAllTimers()

    expect(func).toBeCalledTimes(1)
  })
})

import { act, renderHook } from '@testing-library/react'

import useResizeScreen from '.'

window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  }).dispatchEvent(new this.Event('resize'))
}

describe('resize hook', () => {
  function getHook() {
    return renderHook(useResizeScreen)
  }

  it('has default value', () => {
    const { result } = getHook()

    expect(result.current.size.height).toBe(window.innerHeight)
    expect(result.current.size.width).toBe(window.innerWidth)
    expect(result.current.isMobile).toBe(window.innerHeight > window.innerWidth)
  })

  it('should get resize value small desktop', async () => {
    jest.useFakeTimers()
    const { result, rerender } = getHook()

    act(() => {
      window.resizeTo(500, 500)
      jest.advanceTimersByTime(500)
    })

    rerender()

    expect(result.current.size.height).toBe(500)
    expect(result.current.size.width).toBe(500)
    expect(result.current.isMobile).toBe(false)
  })

  it('should get resize value as a mobile view', async () => {
    jest.useFakeTimers()
    const { result, rerender } = getHook()

    act(() => {
      window.resizeTo(414, 896)
      jest.advanceTimersByTime(500)
    })

    rerender()

    expect(result.current.size.height).toBe(896)
    expect(result.current.size.width).toBe(414)
    expect(result.current.isMobile).toBe(true)
  })
})

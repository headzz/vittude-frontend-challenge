export const debounce = (callback: Function, wait: number = 500) => {
  let timer: number | null = null
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = window.setTimeout(() => {
      callback(args)
    }, wait)
  }
}

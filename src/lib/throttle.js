const throttle = (fn, wait, immediate) => {
  let timer = null
  return function () {
    let args = arguments
    let context = this

    if (timer) {
      return
    }

    if (immediate) {
      timer = setTimeout(() => {
        timer = null
      }, wait)
      fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }
}

export default throttle

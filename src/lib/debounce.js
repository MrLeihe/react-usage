function debounce(fn, wait, immediate) {
  var timer = null

  var debounced = function () {
    var args = arguments
    var context = this

    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      if (!timer) fn.apply(context, args)
      timer = setTimeout(function () {
        timer = null
      }, wait)
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }

  debounced.cancel = function () {
    clearTimeout(timer)
    timer = null
  }

  return debounced
}

export default debounce

export const debounce = (func, dalay = 100, immediate = true) => {
  let timer, callNow = immediate;
  return (...args) => {
    if (timer) clearTimeout(timer);
    if (callNow) {
        func(...args);
        callNow = false;
    }
    timer = setTimeout(() => {
        func(...args);
    }, dalay)
  }
}
 
export const throttle = (func, dalay, immediate = true) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, dalay);
    if (callNow) func.apply(context, args)
  }
}
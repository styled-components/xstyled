/* eslint-disable no-continue, no-loop-func, no-cond-assign */
export function flattenStrings(array) {
  return array.reduce((flattenedArray, value) => {
    const lastIndex = flattenedArray.length - 1
    const last = flattenedArray[lastIndex]
    if (typeof last === 'string' && typeof value === 'string') {
      flattenedArray[lastIndex] = last + value
    } else {
      flattenedArray.push(value)
    }
    return flattenedArray
  }, [])
}

export function cascade(value, arg) {
  if (typeof value === 'function') {
    return cascade(value(arg), arg)
  }
  return value
}

function flattenDown(array, result) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i]

    if (Array.isArray(value)) {
      flattenDown(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

export function flatten(array) {
  return flattenDown(array, [])
}

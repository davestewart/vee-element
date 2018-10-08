import get from 'object-get'

function noop () { }

function isEmpty (value) {
  return value === void 0 ||
    value === null ||
    value === ''
}

export {
  get,
  noop,
  isEmpty
}

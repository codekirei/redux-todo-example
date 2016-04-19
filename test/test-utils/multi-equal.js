import { equal } from 'assert'

const multiEqual = cases =>
  cases.forEach(([message, actual, expected]) => equal(actual, expected, message))

export default multiEqual

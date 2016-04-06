const join = (ar, sep) =>
  ar.slice(1).reduce((prev, cur) => prev.concat([sep, cur]), [ar[0]])

export default join

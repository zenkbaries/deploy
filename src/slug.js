module.exports = function slug(str) {
  return (
    str
      .toLowerCase()
      // strip all leading invalid chars
      .replace(/^\W+/, '')
      // replace any sequence of invalid chars with a hyphen
      .replace(/[^-\w]+/g, '-')
  )
}

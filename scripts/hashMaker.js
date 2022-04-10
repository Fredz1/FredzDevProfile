const crypto = require('crypto')
const { nanoid } = require('nanoid')

const maker = () => {
  const hash = crypto.createHash('sha256').update(nanoid()).digest('base64')
  return hash
}

maker()

module.exports = maker
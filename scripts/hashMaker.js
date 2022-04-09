const crypto = require('crypto')
const { nanoid } = require('nanoid')

let nonceHash = ''

const maker = () => {
  const hash = crypto.createHash('sha256').update(nanoid()).digest('base64')
  nonceHash =  hash
}

maker()

module.exports = nonceHash
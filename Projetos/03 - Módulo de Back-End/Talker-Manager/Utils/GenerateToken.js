const crypto = require('crypto');
// Peguei o codigo do crypto do course.

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;

const crypto = require('crypto');

// Generate a 64-byte random key
const secret = crypto.randomBytes(64).toString('hex');

console.log('Your JWT Secret Key:', secret);

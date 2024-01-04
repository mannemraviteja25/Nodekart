const crypto = require('crypto');

const  generateRandomId = ()=> {
    // Generate a random buffer and convert it to a hex string
    const randomBuffer = crypto.randomBytes(3); // 3 bytes to get a 6-character hex string
    const randomHex = randomBuffer.toString('hex');

    // Ensure it is exactly 6 characters and convert to uppercase
    const randomId = randomHex.slice(0, 6).toUpperCase();

    return randomId;
}

module.exports = generateRandomId();



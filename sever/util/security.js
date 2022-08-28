const crypto = require('crypto');

const iv = '0000000000000000';

module.exports.encryptWithAES256 = (secretKey, plainText) => {
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encryptedValue = cipher.update(plainText, 'utf8', 'base64');
    encryptedValue += cipher.final('base64');
    return encryptedValue;
};

module.exports.decryptWithAES256 = (secretKey, encryptedText) => {
    const cipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
    let decryptedValue = cipher.update(encryptedText, 'base64', 'utf8');
    decryptedValue += cipher.final('utf8');
    return decryptedValue;
};
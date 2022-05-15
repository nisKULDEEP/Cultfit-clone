const bcrypt = require("bcrypt");

function encryptPassword(plainPassword) {
    const encrptPassword = bcrypt.hashSync(plainPassword, 10);
    return encrptPassword;
}

function decryptPassword(plainPassword, encryptPassword) {
    const encrptPassword = bcrypt.compareSync(plainPassword, encryptPassword);
    return encrptPassword;
}

module.exports = {
    encryptPassword,
    decryptPassword
}
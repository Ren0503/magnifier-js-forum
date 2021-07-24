const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    // Sign the JWT 
    return jwt.sign(
        {
            id: user._id,
            username: user.username,
        },
        process.env.JWT_SECRET,
        {
            algorithm: 'HS256',
            expiresIn: process.env.JWT_EXPIRE
        }
    );
};

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        // Generate a salt at level 12 strength
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

const verifyPassword = (passwordAttempt, hashedPassword) => {
    return bcrypt.compare(passwordAttempt, hashedPassword);
};

module.exports = {
    createToken,
    hashPassword,
    verifyPassword
};
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authentication invalid.' });
    }

    try {
        const decodedToken = jwt.verify(token.slice(7), process.env.JWT_SECRET, {
            algorithms: 'HS256',
            expiresIn: process.env.JWT_EXPIRE
        });

        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
};

const commentAuth = (req, res, next) => {
    if (req.comment.author._id.equals(req.user.id) || req.user.isAdmin) 
        return next();
    res.status(401).end();
};

const answerAuth = (req, res, next) => {
    if (req.answer.author._id.equals(req.user.id) || req.user.isAdmin) 
        return next();
    res.status(401).end();
};

const questionAuth = (req, res, next) => {
    if (req.question.author._id.equals(req.user.id) || req.user.isAdmin) 
        return next();
    res.status(401).end();
};

module.exports = {
    protect,
    commentAuth,
    answerAuth,
    questionAuth
};
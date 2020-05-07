const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const generateToken = (id, email) => {
    return jwt.sign({
        id,
        email
    }, process.env.jwtKey || require('../conf/config').config.jwt, {expiresIn: 120 * 120});
};

module.exports.login = async (req, res) => {
    if (req.body.email) {
        const candidate = await User.findOne(
            {
                where: {email: req.body.email}
            });
        if (candidate) {
            if (req.body.password === candidate.password) {
                const token = generateToken(candidate.id, candidate.email);
                res.status(200).json({
                    token: 'Bearer ' + token,
                    fullName: candidate.fullName,
                    isAdmin: candidate.status
                })
            } else {
                res.status(401).json({
                    message: 'password doesnt match'
                })
            }
        } else {
            res.status(404).json({
                message: 'user with this email doesnt exist'
            })
        }
    } else {
        res.sendStatus(500);
    }


};

module.exports.signup = async (req, res) => {
    const user = await User.findOne({
        where: {email: req.body.email}
    });
    if (user) {
        res.status(409).json({
            message: 'user with this email exists'
        })
    } else {
        User.create({
            email: req.body.email,
            password: req.body.password,
            fullName: req.body.fullName,
            status: req.body.status,
            gitlab: req.body.gitlab
        })
            .then(user => {
                const token = generateToken(user.id, req.body.email);
                console.log(user.id);
                res.status(200).json({
                    token: `Bearer ${token}`,
                    user: user
                })
            })
            .catch(e => {
                console.error(e);
                res.status(500).json({
                    message: 'user with this email exists'
                });
            })
    }
};

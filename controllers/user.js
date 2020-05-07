const User = require('../models/User');
const UserCourse = require('../models/UserCourse');
const Course = require('../models/Course');

const bcrypt = require('bcryptjs');

module.exports.getUsersList = (req, res) => {
    User.findAll({}).then(users => {
        res.status(200).json(users);
    })
};

module.exports.getUser = (req, res) => {
    User.findOne({
        where: {id: req.params.id}
    }).then(user => res.status(200).json(user))
};

module.exports.updateUser = async (req, res) => {
    let updatedFields = {};

    if (req.body.password && req.body.passwordRepeat) {
        if (req.body.password === req.body.passwordRepeat) {
            updatedFields.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(12))
        }
        console.log(req.body.password);
    }
    if (req.body.email) {
        if (req.user.email !== req.body.email) {
            if (await User.findOne({email: req.body.email})) {
                res.status(409).json({
                    message: 'this email is already registered'
                })
            } else {
                updatedFields.email = req.body.email;
            }
        }
    }
    if (req.body.fullName) {
        updatedFields.fullName = req.body.fullName;
    }

    if (req.body.gitlab) {
        updatedFields.gitlab = req.body.gitlab;
    }

    if (req.body.status) {
        updatedFields.status = req.body.status;
    }


    req.user.update(updatedFields).then(updatedUser => {
        res.status(200)
            .json(updatedUser)
    })
        .catch(e => {
            console.error(e.message);
            res.status(500).json(e.message)
        });

};

module.exports.deleteUser = async (req, res) => {
    User.destroy({where: {id: req.params.id}})
        .then(deleted => deleted ? res.status(200).json({
            message: "Пользователь удален"
        }) : res.status(500).json({message: "Ошибка при удалении пользователя"}))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Ошибка при удалении пользователя'
            })
        })
};

module.exports.getUserCourses = async (req, res) => {
    UserCourse.findAll({
        where: {userId: req.user.id}
    }).then(userCourses => {
        userCourses.map(course =>  Course.findOne({
            where: {id: course.courseId},
        }).then(course => res.status(200).json({course})));
    })
};


module.exports.addUserCourse = async (req, res) => {
    UserCourse.create({
        userId: req.body.userId,
        courseId: req.body.courseId
    }).then(news => res.status(201).json({
        message: "Новость добавлена"
    })).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при добавлении новости"
        })
    });
};
const Message = require('../models/Message');

module.exports.getMessageList = (req, res) => {
    Message.findAll({}).then(messages => {
        res.status(200).json({messages});
    }).catch((err) => {
        console.log('Ошибка при получении списка уроков');
        res.status(500).json({
            message: "Ошибка при получении списка уроков."
        })
    })
};

module.exports.getMessageListByLesson = (req, res) => {
    Message.findAll({
        where: {
            lessonId: req.params.id
    }}).then(messages => {
            res.status(200).json({messages})
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при получении списка сообщений."
        })
    })
};

module.exports.addMessage = async (req, res) => {
    Message.create({
        lessonId: req.body.lessonId,
        userFullName: req.user.fullName,
        text: req.body.message,
    }).then(news => res.status(201).json({
        message: "Сообщение добавлено",
        data: message
    })).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при добавлении сообщения"
        })
    });
};


module.exports.deleteMessage = async (req, res) => {
    Message.destroy({where: {id: req.params.id}})
        .then(deleted => deleted ? res.status(200).json({
            message: "Сообщение удалено"
        }) : res.status(500).json({message: "Ошибка при удалении сообщения"}))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Ошибка при удалении сообщения'
            })
        })
};
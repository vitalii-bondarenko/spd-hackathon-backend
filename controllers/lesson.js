const Lesson = require('../models/Lesson');

module.exports.getLessonList = (req, res) => {
    Lesson.findAll({}).then(lessons => {
        res.status(200).json({lessons});
    }).catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при получении списка уроков."
        })
    })
};

module.exports.getLessonListByCourse = async (req, res) => {
    Lesson.findAll({where:{subjectId: req.params.id}})
        .then(lessons => {
        res.status(200).json(lessons);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: "Ошибка при получении списка уроков"
            })
        })
};

module.exports.getLesson = async (req, res) => {
    Lesson.findOne({
        where: {id: req.params.id}
    }).then(lesson => res.status(200).json(lesson
    )).catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при получении урока"
        })
    });
};
module.exports.addLesson = async (req, res) => {
    Lesson.create({
        subject: req.body.subject,
        subjectId: req.body.subjectId,
        lessonNumber: req.body.lessonNumber,
        title: req.body.title,
        description: req.body.description,
        lectorName: req.body.lectorName,
        lectorPosition: req.body.lectorPosition,
        deadline: req.body.deadline,
        presentation_ulr: req.body.presentation_ulr,
        videoUrl: req.body.videoUrl,
        homework: req.body.homework,
        additional: req.body.additional,
    }).then(async (lesson) => {
        // const transporter = await node.createTransport({ //await
        //     host: "smtp.gmail.com",
        //     port: 587,
        //     auth: {
        //         user: "vladikyss7777777@gmail.com",
        //         pass: "123qwer123QWER"
        //     }
        // });
        res.status(201).json({message: "Урок добавлен!", lesson: lesson})
        // UserCourse.findAll({
        //     where: {
        //         subject: lesson.subjectId
        //     }
        // }).then(users =>{
        //     const userList = users.map(user => user.userId);
        //     userList.forEach(user => {
        //         User.findOne({
        //             where: {id: user.id}
        //         }).then(user => {
        //             const mailOptions = {
        //                 from: 'SPD-U',
        //                 to: `${user.email}`,
        //                 subject: 'Домашнее задание обновлено',
        //                 text: `Добавлено новое домашнее задание по предмету ${req.body.subject}.
        //         Дедлайн домашнего задания: ${req.body.deadline}.
        //         Для детальной информации перейдите на сайт. Удачной работы!`
        //             };
        //             transporter.sendMail(mailOptions, (error) => {
        //                 if (error) {
        //                     console.log(error)
        //                 } else {
        //                     console.log('Email sent.\nPlease check your email')
        //                 }
        //             });
        //         });
        //     });
        // });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Ошибка при добавлении урока"
        })
    });
};

module.exports.deleteLesson = async (req, res) => {
    Lesson.destroy({where: {id: req.params.id}})
        .then(deleted => deleted ? res.status(200).json({
            message: "Урок удален"
        }) : res.status(500).json({message: "Ошибка при удалении урока"}))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                messagep: 'Ошибка при удалении урока'
            })
        })
};

module.exports.updateLesson = async (req, res) => {
    let updatedFields = {};

    if (req.body.subject) {
        updatedFields.subject = req.body.subject;
    }
    if (req.body.lessonNumber) {
        updatedFields.lessonNumber = req.body.lessonNumber;
    }
    if (req.body.title) {
        updatedFields.title = req.body.title;
    }
    if (req.body.description) {
        updatedFields.description = req.body.description;
    }
    if (req.body.lectorName) {
        updatedFields.lectorName = req.body.lectorName;
    }
    if (req.body.lectorPosition) {
        updatedFields.lectorPosition = req.body.lectorPosition;
    }
    if (req.body.deadline) {
        updatedFields.deadline = req.body.deadline;
    }
    if (req.body.presentation_ulr) {
        updatedFields.presentation_ulr = req.body.presentation_ulr;
    }
    if (req.body.videoUrl) {
        updatedFields.videoUrl = req.body.videoUrl;
    }
    if (req.body.homework) {
        updatedFields.homework = req.body.homework;
    }
    if (req.body.additional) {
        updatedFields.additional = req.body.additional;
    }


    let lesson = await Lesson.findOne({
        where: {id: req.params.id}
    });

    lesson.update(updatedFields).then(updatedLesson => {
        res.status(200)
            .json(updatedLesson)
    })
        .catch(e => {
            console.error(e.message);
            res.status(500).json(e.message)
        });
};



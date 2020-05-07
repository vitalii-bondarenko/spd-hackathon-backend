const Course = require('../models/Course');
const UserCourse = require('../models/UserCourse');

module.exports.getCourseList = (req, res) => {
    Course.findAll({
    }).then(courses => {
        res.status(200).json(courses);
    })
};


module.exports.getUserCourseList = async (req, res) => {
    let associationTable =  await UserCourse.findAll({
        where: {userId: req.user.id}
    });

    let courses = await associationTable.map(course =>  Course.findOne({
        where: {courseId:course.courseId},
    }));

    if(courses)
    {
        res.status(200).json({
            courses
        })
    }
    else
    {
        res.status(500).json({
           message: "Ошибка получения курса"
        });
    }
};


module.exports.addCourse = async (req, res) => {
    Course.create({
        name: req.body.name
    }).then(course => res.status(201).json({
        message: "Course Added",
        course: course
    })).catch(err => {
        console.log(err);
        res.status(500).json({
            message: "Error adding course"
        })
    });
};

module.exports.getCourse = async (req, res) => {
    Course.findOne({
        where: {id: req.params.id},
    }).then((course) => res.status(200).json({
        name: course.name
    })).catch((err) => {
        console.log(err);
        res.status(500).json({
            message: "Error adding course"
        })
    });
};


module.exports.deleteCourse = async (req, res) => {
    Course.destroy({where: {id: req.params.id}})
        .then(deleted => deleted ? res.status(200).json({
            message: "Course deleted"
        }) : res.status(500).json({message: "Error while course delete"}))
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error while course delete'
            })
        })
};

module.exports.updateCourse = async (req, res) => {
    let updatedFields = {};

    if (req.body.name) {
        updatedFields.name = req.body.name;
    }

    if (req.body.mentorId) {
        updatedFields.mentorId = req.body.mentorId;
    }

    let course = await Course.findOne({
        where: {id: req.params.id}
    });

    course.update(updatedFields).then(updatedCourse => {
        res.status(200)
            .json(updatedCourse)
    })
        .catch(e => {
            console.error(e.message);
            res.status(500).json(e.message)
        });
};




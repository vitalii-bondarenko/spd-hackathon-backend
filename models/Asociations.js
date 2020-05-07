// const User = require('./User');
// const Course = require('./Course');
//
// User.belongsToMany(Course, {
//     through: 'UserCourse',
//     foreignKey: 'userId',
//     as: 'courses'
// });
//
// module.exports.getCourseUser = (req, res) => {
//
//     User.findByPk(1,{
//         include: [ {model: Course, as: 'courses'} ]
//     }).then(course => res.status(200).json(course))
// };
require("./db/connection");
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');

const authController = require('./controllers/auth');
const userController = require('./controllers/user');
const courseController = require('./controllers/course');
const lessonController = require('./controllers/lesson');
const newsController = require('./controllers/news');
const asociathions = require('./models/Asociations');
const messageController = require('./controllers/message');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./middleware/passport')(passport);

//routes
app.post('/api/auth/login', authController.login);
app.post('/api/auth/signup', authController.signup);

app.get('/api/users/all', passport.authenticate('jwt', {session: false}), userController.getUsersList);
app.get('/api/users/:id/detail', passport.authenticate('jwt', {session: false}), userController.getUser);
app.post('/api/users/update', passport.authenticate('jwt', {session: false}), userController.updateUser);
app.get('/api/users/delete/:id', passport.authenticate('jwt', {session: false}), userController.deleteUser);

app.get('/api/courses/all', passport.authenticate('jwt', {session: false}), courseController.getCourseList);
app.post('/api/courses/add', passport.authenticate('jwt', {session: false}), courseController.addCourse);
app.get('/api/courses/:id', passport.authenticate('jwt', {session: false}), courseController.getCourse);
app.get('/api/courses/delete/:id', passport.authenticate('jwt', {session: false}), courseController.deleteCourse);
app.post('/api/courses/updateCourse/:id', passport.authenticate('jwt', {session: false}), courseController.updateCourse);
app.get('/api/courses/',  passport.authenticate('jwt', {session: false}), courseController.getUserCourseList);
app.post('/api/courses/user/set',passport.authenticate('jwt', {session: false}), userController.addUserCourse);


app.get('/api/lessons/all', passport.authenticate('jwt', {session: false}), lessonController.getLessonList);
app.post('/api/lessons/add', passport.authenticate('jwt', {session: false}), lessonController.addLesson);
app.get('/api/lessons/:id', passport.authenticate('jwt', {session: false}), lessonController.getLesson);
app.get('/api/lessons/delete/:id', passport.authenticate('jwt', {session: false}), lessonController.deleteLesson);
app.post('/api/lessons/updateCourse/:id', passport.authenticate('jwt', {session: false}), lessonController.updateLesson);
app.get('/api/lessons/course/:id', passport.authenticate('jwt', {session: false}), lessonController.getLessonListByCourse);


app.get('/api/lessons/getMessages/:id', passport.authenticate('jwt', {session: false}), messageController.getMessageListByLesson);
app.post('/api/lessons/messages/add', passport.authenticate('jwt', {session: false}), messageController.addMessage);
app.get('/api/messages/all', passport.authenticate('jwt', {session: false}), messageController.getMessageList);
app.get('/api/messages/delete/:id', passport.authenticate('jwt', {session: false}), messageController.deleteMessage);

app.get('/api/news/all', passport.authenticate('jwt', {session: false}), newsController.getNewsList);
app.post('/api/news/add', passport.authenticate('jwt', {session: false}), newsController.addNews);
app.get('/api/news/:id', passport.authenticate('jwt', {session: false}), newsController.getNews);
app.get('/api/news/delete/:id', passport.authenticate('jwt', {session: false}), newsController.deleteNews);
app.post('/api/news/updateCourse/:id', passport.authenticate('jwt', {session: false}), newsController.updateNews);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        //sequelize.sync({force: true});
        sequelize.sync()
    })
    .catch(error => console.error(error));

app.listen(port, () => {
    console.log(`Server has been started on PORT ${port}`);
});

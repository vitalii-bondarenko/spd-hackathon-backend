const User = require('../models/User')
​
User.create({
    email: "vladikyssjil@gmail.com",
    password: "123456",
    gitlab: "https://gitlab.com/vlad.kiselev",
    status: false,
    fullName: "Vlad Kiselev"
})
​
User.create({
    email: "leonid.baida@gmail.com",
    password: "123456",
    gitlab: "https://gitlab.com/leonid.baida",
    status: true,
    fullName: "Leonid Baida"
})


const Course = require('../models/Course')
​
//JS
Course.create({
    name: 'Java Script'
})
​
//QA
Course.create({
    name: 'QA'
})
​
//REACT
Course.create({
    name: 'React'
})
​
//ANGULAR
Course.create({
    name: 'Angular'
})
​
//HTML
Course.create({
    name: 'HTML'
});
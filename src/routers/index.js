const express = require('express');
const routers = express.Router();
const classesController = require('../controllers/classesController');
const StudentsController = require('../controllers/studentsController');


routers.get('/test', function (req, res) {
    res.json({message: 'Hello World !!!'});
});

// Tag
routers.post('/student', StudentsController.createStudent)
routers.post('/class', classesController.createClass)
routers.get('/class', classesController.getClasses)

exports = module.exports = routers;

const StudentsService = require('../services/studentsService')

const StudentsController = {
    async createStudent(req, res, next) {
        try {
            return res.json({
                data: await StudentsService.createStudent(req.body)
            });
        } catch (err) {
            return res.status(400).send(new Error(err.message || err));
        }
    },
};

module.exports = StudentsController;

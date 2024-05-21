const StudentsRepository = require("../repositories/StudentsRepository")
const _ = require('lodash');

const StudentsService = {
    async createStudent(data) {
        return await StudentsRepository.create(data)
    },
};

module.exports = StudentsService;
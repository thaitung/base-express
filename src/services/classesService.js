const ClassesRepository = require("../repositories/ClassesRepository")
const _ = require('lodash');

const ClassesService = {
    async createClass(data) {
        return await ClassesRepository.create(data)
    },
    async getClasses(data) {
        return await ClassesRepository.getClassesAll(data)
    },
};

module.exports = ClassesService;
const classesService = require('../services/classesService')
const { isValidClass } = require('../utils/Validate');

const ClassesController = {
    async createClass(req, res, next) {
        try {
            const {value: data, error: error} = isValidClass(req.body);
            if (error) {
                return res.status(500).send(new Error(error.message || error));;
            }
            return res.json({
                data: await classesService.createClass(data)
            });
        } catch (err) {
            return res.status(400).send(new Error(err.message || err));
        }
    },
    async getClasses(req, res, next) {
        try {
            return res.json({
                data: await classesService.getClasses(req.query)
            });
        } catch (err) {
            res.status(400).send(new Error(err.message || err));
        }
    },
};

module.exports = ClassesController;

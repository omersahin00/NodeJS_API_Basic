const Joi = require("joi");

const schema = new Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().required()
});

module.exports = schema;
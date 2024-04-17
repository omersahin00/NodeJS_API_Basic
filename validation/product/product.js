const Joi = require("joi");

validate = (product) => {
    const schema = new Joi.object({
        name: Joi.string().min(3).max(30).required(),
        price: Joi.number().required()
    });

    return schema.validate(product);
}

module.exports = validate;
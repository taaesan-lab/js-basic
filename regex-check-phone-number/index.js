
const Joi = require('joi');

const schema = Joi.object().keys({
    mobile: Joi.string()
        .required()
        .regex(/^0([0-9]+)$/)
        .length(10),
})

const checkMobile = (param) => {
    const { error, value } = schema.validate(param);

    console.log(error);
}

checkMobile({'mobile':'093476719'})






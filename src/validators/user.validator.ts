import * as Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/w{6,}/).required().messages({
        'string.pattern.base':'name must contained at least 6 letters'
    }),
    password: Joi.string().min(6).max(16).required().messages({
        'string.min':'password must contained min 6 letters',
        'string.max':'password must contained max 16 letters'
    }),
    age: Joi.number().min(1).max(145).required().messages({
        'number.min':'age must be 1 or more',
        'number.max':'age cannot be greater than 145'
    })
})

export {
    userValidator
}
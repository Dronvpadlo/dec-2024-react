import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().empty(' ').min(1).max(20).required().messages({
            'string.empty':'Cars Brand cannot be empty',
            'string.min': 'Cars Brand must contained at least 1 letter',
            'string.max': 'Cars Brand cannot be greater than 20 letters'
        }
    ),
    price: Joi.number().min(0).max(1000000).required().messages({
            'number.min': 'Cars price must be at least 0',
            'number.max': 'Cars price cannot be greater than 1000000'
        }
    ),
    year: Joi.number().min(1990).max(2024).required().messages({
            'number.min': 'Cars year must be older least 1990',
            'number.max': 'Cars year cannot be younger than 2024'
    })
})
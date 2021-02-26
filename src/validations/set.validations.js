import Joi from 'joi';

export const addSet = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        workout: Joi.string().required(),
        date: Joi.string().isoDate().required(),
        set: Joi.object().keys({
            reps: Joi.number().required(),
            weight: Joi.number().required(),
            exercise: Joi.string().required(),
            id: Joi.string(),
            unit: Joi.string().equal('kg', 'lb'),
        }),
    }),
};

export const getSets = {
    query: Joi.object().keys({
        user: Joi.string().required(),
        workout: Joi.string().required(),
        date: Joi.string().isoDate().required(),
        group: Joi.string(),
    }),
};

import Joi from 'joi';

export const getAllStatus = {
    query: {
        collection: Joi.string().required(),
    },
};

export const updateStatus = {
    body: Joi.object().keys({
        week: Joi.number().required(),
        status: Joi.string().required(),
        collection: Joi.string().required(),
    }),
};

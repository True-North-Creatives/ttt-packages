import Joi from 'joi';

export const getStatus = {
    query: {
        collection: Joi.string().required(),
    },
};

export const updateStatus = {
    body: Joi.object().keys({
        id: Joi.string().required(),
        status: Joi.string().required(),
        collection: Joi.string().required(),
    }),
};

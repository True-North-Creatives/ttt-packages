import Joi from 'joi';

/* eslint-disable import/prefer-default-export */
export const createPayment = {
    body: Joi.object().keys({
        userId: Joi.string().required(),
        transactionId: Joi.string().required(),
        transactionMethod: Joi.string().required(),
        paidDate: Joi.date().required(),
    }),
};

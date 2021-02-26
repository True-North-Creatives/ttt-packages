import Joi from 'joi';

export const createDayPlan = {
    body: Joi.object().keys({
        collection: Joi.string().required(),
        from: Joi.string().required(),
        to: Joi.string().required(),
        week: Joi.number().required(),
        status: Joi.string().required(),
        plans: Joi.array().items({
            name: Joi.string().required(),
            repeat: Joi.array().items({
                name: Joi.string().required(),
                checked: Joi.bool().required(),
                disabled: Joi.bool().required(),
            }),
            meals: Joi.array().items({
                name: Joi.string().required(),
                items: Joi.array().items({
                    id: Joi.string().required(),
                    qty: Joi.number().required(),
                }),
            }),
        }),
    }),
};
export const getDayPlan = {
    query: {
        collection: Joi.string().required(),
        week: Joi.number().max(52).min(1),
    },
};

export const getDayPlanById = {
    param: {
        id: Joi.string().required(),
        collection: Joi.string().required(),
    },
};

export const deleteDayPlanById = {
    param: {
        id: Joi.string().required(),
        collection: Joi.string().required(),
    },
};

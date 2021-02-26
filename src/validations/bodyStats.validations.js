import Joi from 'joi';

export const getBodyStats = {
    query: Joi.object().keys({
        user: Joi.string().required(),
        date: Joi.string().isoDate(),
        part: Joi.string(),
        group: Joi.string().equal('month', 'year'),
        startDate: Joi.string().isoDate(),
        endDate: Joi.string().isoDate(),
        sort: Joi.string().equal('date', 'month', 'year'),
    }),
};

export const addStats = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        date: Joi.string().isoDate().required(),
        stats: Joi.array().items(
            Joi.object({
                id: Joi.string().required(),
                name: Joi.string().required(),
                value: Joi.number().required(),
                unit: Joi.string().equal('kg', 'lb', 'cm', '%'),
                conversion: Joi.string(),
            }),
        ),
    }),
};

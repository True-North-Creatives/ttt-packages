import Joi from 'joi';

export const getFoodMenu = {
    /**
     * No validation for this type of request
     */
};

export const addFoodItem = {
    body: Joi.object().keys({
        ingredient: Joi.string().required(),
        type: Joi.string().required(),
        food: Joi.string().required(),
        fat: Joi.number().required(),
        carb: Joi.number().required(),
        protein: Joi.number().required(),
        calories: Joi.number().required(),
        units: Joi.string().required(),
        conversion: Joi.number().required(),
    }),
};

export const updateFoodItem = {
    body: Joi.object().keys({
        id: Joi.string().required(),
        ingredient: Joi.string().required(),
        type: Joi.string().required(),
        food: Joi.string().required(),
        fat: Joi.number().required(),
        carb: Joi.number().required(),
        protein: Joi.number().required(),
        calories: Joi.number().required(),
        units: Joi.string().required(),
        conversion: Joi.number().required(),
    }),
};
export const substituteArray = {
    body: Joi.object().keys({
        food: Joi.string().required(),
    }),
};

export const getSwapItemList = {
    body: Joi.object().keys({
        food: Joi.string().required(),
        quantity: Joi.number().required(),
    }),
};
export const getSwapItemFullInfo = {
    body: Joi.object().keys({
        food: Joi.string().required(),
        quantity: Joi.number().required(),
    }),
};

export const deleteFoodItem = {
    param: {
        id: Joi.string().required(),
    },
};

import Joi from "joi";

export const addWOD = {
  body: Joi.object().keys({
    wod_id: Joi.string().required(),
    displayName: Joi.string().required(),
    collection: Joi.string().required(),
    status: Joi.string().required(),
    date: Joi.string().required(),
    workouts: Joi.array().items({
      workout_id: Joi.string().required(),
      exercise: Joi.array().items({
        exercise_id: Joi.string().required(),
        title: Joi.string().required(),
        difficulty: Joi.string().required(),
        reps: Joi.string(),
        sets: Joi.array().items({
          rest: Joi.number(),
          type: Joi.number().required(),
          limits: Joi.object().keys({
            min: Joi.number(),
            max: Joi.number(),
            time: Joi.number(),
            units: Joi.string(),
          }),
        }),
        superSet: Joi.string(),
      }),
      sub: Joi.array().items({
        _id: Joi.string(),
        id: Joi.string().required(),
        settings: Joi.object().keys({
          rest: Joi.number(),
          sets: Joi.array().items({
            _id: Joi.string(),
            choice: Joi.number().required(),
            max: Joi.number(),
            min: Joi.number(),
            due: Joi.number(),
          }),
        }),
        url: Joi.string().required(),
        title: Joi.string().required(),
        main_muscle_grp: Joi.string().required(),
        type: Joi.string().required(),
        equipment: Joi.string().required(),
        difficulty: Joi.string().required(),
        steps: Joi.string().required(),
        mechanics: Joi.string().required(),
        other_muscle_grp: Joi.string().required(),
        detailed_muscle_group: Joi.string().required(),
      }),
    }),
  }),
};

export const getWOD = {
  query: {
    date: Joi.string().required(),
    collection: Joi.string().required(),
  },
};

export const getWODById = {
  param: {
    id: Joi.string().required(),
    collection: Joi.string().required(),
  },
};

export const getSchedule = {
  query: {
    date: Joi.date().iso().required(),
    days: Joi.number().default(3).required(),
    collection: Joi.string().required(),
  },
};

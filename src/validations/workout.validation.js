import Joi from "joi";

export const addWOD = {
  body: Joi.object().keys({
    _id: Joi.string(),
    wod_id: Joi.string().required(),
    displayName: Joi.string().required(),
    collection: Joi.string().required(),
    status: Joi.string().required(),
    date: Joi.string().required(),
    workouts: Joi.array().items({
      _id: Joi.string(),
      workout_id: Joi.string().required(),
      exercises: Joi.array().items({
        _id: Joi.string(),
        exercise_id: Joi.string().required(),
        title: Joi.string().required(),
        url: Joi.string(),
        detailed_muscle_group: Joi.string(),
        mechanics: Joi.string(),
        other_muscle_grp: Joi.string(),
        steps: Joi.string(),
        type: Joi.string(),
        main_muscle_grp: Joi.string(),
        equipment: Joi.string(),
        difficulty: Joi.string(),
        sets: Joi.array().items({
          _id: Joi.string(),
          rest: Joi.number(),
          type: Joi.string().required(),
          limits: Joi.object().keys({
            _id: Joi.string(),
            min: Joi.string(),
            max: Joi.string(),
            time: Joi.string(),
            units: Joi.string(),
          }),
        }),
        reps: Joi.any(), // it can be a number or an string
        superSet: Joi.string(),
      }),
      superSet: Joi.string()
    }),
    superSets: Joi.object()
  }),
};

// export const getWOD = {
//   query: {
//     date: Joi.string().required(),
//     collection: Joi.string().required(),
//   },
// };

export const getWOD = {
  query: {
    date: Joi.string().required(),
    collection: Joi.string().required(),
  },
};

export const deleteWOD = {
  param: {
    id: Joi.string().required(),
    collection: Joi.string().required(),
  },
};

// export const getSchedule = {
//   query: {
//     date: Joi.date().iso().required(),
//     days: Joi.number().default(3).required(),
//     collection: Joi.string().required(),
//   },
// };

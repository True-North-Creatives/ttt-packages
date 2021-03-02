const mongoose = require("mongoose");
const Workout = require("./workout.model");
const { WOD_PLANS } = require("../../utils/constants");

const wodSchema = (collection) =>
  mongoose.Schema(
    {
      wod_id: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      displayName: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      workouts: [Workout],
      superSets: {
        type: {},
      },
    },
    {
      timestamps: true,
      collection,
    }
  );

const ret = {};
Object.keys(WOD_PLANS).forEach((wod) => {
  ret[WOD_PLANS[wod].collection] = mongoose.model(
    WOD_PLANS[wod].collection,
    wodSchema(WOD_PLANS[wod].collection)
  );
});

module.exports = {
  ...ret,
};

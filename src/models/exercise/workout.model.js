const { Schema } = require('mongoose');
const ConfiguredExercise = require('./configuredExercise.model');

const sets = new Schema({
    workout_id: {
        type: String,
        required: true
    },
    exercises: [ConfiguredExercise]
});

module.exports = sets;

const { Schema } = require('mongoose');

const sets = new Schema({
    min: { type: String },
      max: { type: String },
      time: { type: String },
      units: { type: String },
});

module.exports = sets;

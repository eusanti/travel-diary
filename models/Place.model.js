const { Schema, model } = require("mongoose");

const placeSchema = new Schema({

    name: String,
    description: String,
    imagePlaceUrl: String,

  },
  {
//valida los cambios realizados
    timestamps: true,
  }
);

const Place = model("Place", placeSchema);

module.exports = Place;
const { Schema, model } = require("mongoose");

const travelSchema = new Schema({

    place_id:{ type: Schema.Types.ObjectId, ref: 'Place'},
    title: String,
    pointsInt: [String], // sitios de interés que quieres visitar
    coments: String, 
    tips: String,
    date: Date

  },
  {
//valida los cambios realizados
    timestamps: true,
  }
);

const Travel = model("Travel", travelSchema);

module.exports = Travel;
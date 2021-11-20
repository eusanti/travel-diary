const pointSchema = new Schema({

    pointsInt: [{ type: Schema.Types.ObjectId, ref: 'Travel'}], 
    coments: String, 
    tips: String,
    date: Date,
    imageUrl: String

  },
  {

    timestamps: true,
  }
);

const Point = model("Point", pointSchema);

module.exports = Point;












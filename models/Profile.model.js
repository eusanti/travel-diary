const { Schema, model } = require("mongoose");

const profileSchema = new Schema({

    username: String,
    user_id:{ type: Schema.Types.ObjectId, ref: 'User'},
    imageUrl: String,
    description: String,
    travelVisited:[{type: Schema.Types.ObjectId, ref: 'Travel'}] 

  },
  {
//valida los cambios realizados
    timestamps: true,
  }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;
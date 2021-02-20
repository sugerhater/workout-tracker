const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema ({
//   id:{
//     type:Number,
//     unite:true
//   },
//   exercises:[
//     {
//       type:Schema.Types.ObjectId,
//       ref:"Exercise"
//     }
//   ]
// });

const WorkoutSchema = new Schema ({
  id:{
    type:Number,
    unite:true
  },

  exercises:[{
    type:Object
  }]
});

const Workout = mongoose.model("Workout",WorkoutSchema);

module.exports = Workout;
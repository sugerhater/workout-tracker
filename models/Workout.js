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
    unite:true,
    trim:true
  },

  exercises:[{
    type:Object//or nothing here
  }]
});

const Workout = mongoose.model("Workout",WorkoutSchema);

module.exports = Workout;
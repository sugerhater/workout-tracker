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

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },

  // totalDuration:{
  //   default:addDuration()
  // },

  exercises: [{
    type: Object//or nothing here
  }]
});

WorkoutSchema.methods.totalDuration = function(){
  console.log("totalDuration method is called");
  // this.total;
  this.total = this.exercises.forEach(exercise => { 
    this.total += exercise.duration
  });
  console.log(this.total);
  return this.total;
}


const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
  //   {
  //   type: {
  //     type: String,
  //     trim: true,
  //     required: "Please enter the type of exercise!"
  //   },
  //   name: {
  //     type: String,
  //     trim: true,
  //     required: "Please enter the name of the exercise!"
  //   },
  //   duration: {
  //     type: Number,
  //     trim: true,
  //     required: "Please enter the duration of your exercise!"
  //   }
  // }
]

},
  {
    toJSON: {
      virtuals: true
    }
  }


);

WorkoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  this.exercises.forEach(exercise => {
    total += exercise.duration;
  });
  return total;

})
const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;
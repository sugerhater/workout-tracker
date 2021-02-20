const db = require("../models");

module.exports = function(app) {
  //api/workouts post routes
  //API.createWorkout
  app.post('api/workouts',(req,res)=>{

  });

  //api/workouts +id routes 
  //API.addExercise
  app.put('api/workouts/:id',(req,res)=>{

  });

  //API.getLastWorkout
  app.get('api/workouts',(req,res)=>{

  });

  //API.getWorkoutsInRange
  app.get('api/workouts/range',(req,res)=>{

  })


}
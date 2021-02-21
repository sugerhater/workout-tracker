const db = require("../models");
const mongojs = require("mongojs");

module.exports = function(app) {
  //api/workouts post routes
  //API.createWorkout
  app.post('/api/workouts',(req,res)=>{

    console.log("/api/workouts post routes is called");
    db.Workout.create(req.body,(error,data)=>{
      if (error) {console.log(error);}
      else {console.log(data);
            res.json(data)
      }
    })
  });

  //api/workouts +id routes 
  //API.addExercise
  app.put('/api/workouts/:id',(req,res)=>{

    console.log("adding exercise");
    const id = req.params.id;
    db.Workout.updateOne({
      _id:mongojs.ObjectId(req.params.id)
    },{
      //use push AND set?
      $push:{exercises:req.body}
    },(err,data)=>{
      if (err) {
        res.send(error);
      } else {
        res.send(data);
      }
    })
  });

  //API.getLastWorkout
  app.get('/api/workouts', async (req,res)=>{
      console.log("/api/workouts get routes is called")
      const result = await db.Workout.find({});
      res.json(result);
  });

  //API.getWorkoutsInRange
  app.get('/api/workouts/range',async  (req,res)=>{
    const result = await db.Workout.find({});
    res.json(result);
  })

}
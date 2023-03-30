const express = require('express')

const router = express.Router()

// This gets all workouts
router.get('/',(req,res)=>{
    res.json({message: 'Root page. Get ll workouts'})
})

// To get a single workout
router.get('/:id',(req,res)=>{
    res.json({message: 'This is a singe Page'},{mssg: 'Another Message'})
});

// Post a new Workout
router.post('/:id',(req,res)=>{
    res.json({mssg: 'POST a workout'})
})
// Delete a new Workout
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'DELETE a workout'})
})
// Update a new Workout
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router
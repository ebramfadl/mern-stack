const asyncHandler = require('express-async-handler')
const Goal = require('../model/goal')
const User = require('../model/user')
const mongoose = require('mongoose')
const {route} = require("express/lib/router");

const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({user: req.user.id});
    return res.status(200).json(goals);
})

const createGoal = asyncHandler(async (req,res) => {
    if (!req.body.text){
        res.status(400);
        throw new Error('Please add a text field');
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.body.userId,
    })
    return res.status(200).json(goal)
})

const updateGoal = asyncHandler(async (req,res) => {
    if(!mongoose.Types.objectId.isValid(id)){
        throw new Error('Invalid id')
        res.status(404);
    }
    const id =  new mongoose.Types.ObjectId(req.params.id);
    const goal = await Goal.findById(id);
    validateGoalAndUser(goal,req.user.id,res);
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body)
    return res.status(200).json(goal);
})

const deleteGoal = asyncHandler( async (req,res) => {
    const id =  new mongoose.Types.ObjectId(req.params.id);
    const goal = await Goal.findById(id);
    validateGoalAndUser(goal,req.user.id,res);
    await goal.deleteOne();
    return res.status(200).json(goal);
})


const validateGoalAndUser = (goal,id,res) => {

    if (!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    if (!id){
        res.status(401);
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== id){
        res.status(401);
        throw new Error('User not authorized');
    }
}

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
}
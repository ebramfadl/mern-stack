const express = require('express');
const router = express.Router();
const {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController');

router.route('/:id').delete(deleteGoal).put(updateGoal).get(getGoals).post(createGoal);

module.exports = router
const express = require('express');
const router = express.Router();
const {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
} = require('../controllers/goalController');

const {protect} = require('../middleware/authHandler')

// router.route('/:id').delete(deleteGoal).put(updateGoal).get(getGoals).post(createGoal);
router.route('/').get(protect,getGoals).post(protect,createGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router
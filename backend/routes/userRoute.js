const express = require('express')
const router = express.Router()
const {
    register,
    login,
    getMe,
} = require('../controllers/userController')

const {protect} = require('../middleware/authHandler')

router.post('/', register)
router.post('/login',login)
router.get('/me',protect,getMe)

module.exports = router
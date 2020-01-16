const express = require('express')
const SessionController = require('./controllers/SessionController')
const PayController = require('./controllers/PayController')
const ConsoleController = require('./controllers/ConsoleController')

const router = express.Router()

router.post('/api/sessions',SessionController.store)
router.put('/api/pay',PayController.update)
router.get('/api/user/:id',ConsoleController.show)
router.get('/api/users/',ConsoleController.index)


module.exports = router
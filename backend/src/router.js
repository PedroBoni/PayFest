const express = require('express')
const SessionController = require('./controllers/SessionController')
const PayController = require('./controllers/PayController')
const ConsoleController = require('./controllers/ConsoleController')

const router = express.Router()

router.post('/api/sessions',SessionController.store)
router.put('/api/:id',PayController.update)
router.get('/api/:id',ConsoleController.show)


module.exports = router
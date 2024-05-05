const { Router } = require('express');
const AccountsController = require('./app/controllers/AccountsController');

const router = Router();

router.post('/accounts', AccountsController.store);

module.exports = router;

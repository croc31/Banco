const { Router } = require('express');
const AccountsController = require('./app/controllers/AccountsController');

const router = Router();

router.get('/accounts/:id', AccountsController.show);
router.post('/accounts', AccountsController.store);
router.post('/debit', AccountsController.debit);

module.exports = router;

const { Router } = require('express');
const AccountsController = require('./app/controllers/AccountsController');

const router = Router();

router.get('/accounts/:id', AccountsController.show);
router.post('/accounts', AccountsController.store);
router.post('/debit', AccountsController.debit);
router.post('/credit', AccountsController.credit);
router.post('/transaction', AccountsController.transaction);

module.exports = router;

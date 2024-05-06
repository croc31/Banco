const AccountsRepository = require('../repositories/AccountsRepository');

class AccountsController {
  async store(request, response) {
    const { id } = request.body;

    if (!id) {
      return response.status(400).json({ error: 'ID (account number) is required' });
    }

    const account = await AccountsRepository.create({ id });

    response.json(account);
  }
}

module.exports = new AccountsController();

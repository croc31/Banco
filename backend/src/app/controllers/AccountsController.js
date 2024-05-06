const AccountsRepository = require('../repositories/AccountsRepository');

class AccountsController {
  async show(request, response) {
    const { id } = request.params;

    const account = await AccountsRepository.findById(id);

    console.log({ account });

    if (!account) {
      return response.status(404).json({ error: 'Account not found' });
    }

    response.json(account);
  }

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

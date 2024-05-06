const db = require('../../database');

class AccountsRepository {
  async findById(id) {
    const [row] = await db.query('SELECT * FROM accounts WHERE id = $1', [id]);

    return row;
  }

  async create({ id }) {
    const [row] = await db.query(`
      INSERT INTO accounts(id)
      VALUES($1)
      RETURNING *
    `, [id]);

    return row;
  }
}

module.exports = new AccountsRepository();

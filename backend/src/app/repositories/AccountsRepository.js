const db = require('../../database');

class AccountsRepository {
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

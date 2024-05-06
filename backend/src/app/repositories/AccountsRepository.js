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

  async debit(id, value) {
    const [oldValue] = await db.query('select value FROM accounts WHERE id = $1', [id]);
    const [row] = await db.query('UPDATE accounts SET value = $2 WHERE id = $1', [id][value+oldValue[0]]);

    console.log({ row });

    return row;
  }
}

module.exports = new AccountsRepository();

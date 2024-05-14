const db = require('../../database');

class AccountsRepository {
  async findById(id) {
    const [row] = await db.query('SELECT * FROM accounts WHERE id = $1', [id]);

    return row;
  }

  async create({ id, isPoupanca }) {
    const [row] = await db.query(`
      INSERT INTO accounts(id)
      VALUES($1,0,$2)
      RETURNING *
    `, [id,isPoupanca]);

    return row;
  }
  async debit(id, value) {
    const [oldValue] = await db.query('select balance FROM accounts WHERE id = $1', [id]);
    const [row] = await db.query('UPDATE accounts SET balance = $2 WHERE id = $1', [id][value-oldValue[0]]);

    console.log(row);
  }
  
  async credit(id, value) {
    const [oldValue] = await db.query('SELECT balance FROM accounts WHERE id = $1', [id]);
    const [row] = await db.query('UPDATE accounts SET balance = $2 WHERE id = $1', [id, value + oldValue]);
    
    console.log({ row });

    return row;
  }

  async transaction(idDebit, idCredit, value) {
    debit(idDebit, value);
    row = credit(idCredit, value);
    console.log({ row });

    return row;
  }
}

module.exports = new AccountsRepository();

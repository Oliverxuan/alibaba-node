const connection = require('../app/database')

class CoinService {
  //添加coin
  async changeCoin(id, num) {
    const statement = `REPLACE INTO coin (user_id,nums) VALUES(?,?);`
    const result = await connection.execute(statement, [id, num])
    return result[0]
  }
<<<<<<< HEAD
  async reduceCoin(id, num) {
    const statement = `UPDATE coin SET nums=nums-${num} WHERE user_id=?;`
    const result = await connection.execute(statement, [id])
    return result[0]
  }
=======
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
  async getCoin(id) {
    const statement = `SELECT * FROM coin where user_id=?`
    const result = await connection.execute(statement, [id])
    return result[0]
  }

  async setCoin(id) {
    const num = 0
    const statement = `INSERT INTO coin (user_id,nums) VALUES (?,?)`
    const result = await connection.execute(statement, [id, num])
    return result[0]
  }
}

module.exports = new CoinService()

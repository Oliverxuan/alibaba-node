const connection = require('../app/database')

class FileService {
  async createAvatar(filename, mimetype, size, userId) {
    // const statement = `INSERT INTO avatar (filename,mimetype,size,user_id) VALUES(?,?,?,?);`
    const statement = `REPLACE INTO avatar (filename,mimetype,size,user_id) VALUES(?,?,?,?);`

    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      userId,
    ])
    return result
  }

  async getAvatarByUserId(id) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`
    const [result] = await connection.execute(statement, [id])
    return result[0]
  }
}

module.exports = new FileService()

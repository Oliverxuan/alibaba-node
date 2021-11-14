const connection = require('../app/database')

class UserService {
  //创建新用户
  async create(user) {
    //获取传递的参数
    const { name, password } = user
    //sql语句
    const statement = 'INSERT INTO users (name,password) VALUES (?,?);'
    //执行数据库操作
    const reslut = await connection.execute(statement, [name, password])
    //返回数据
    return reslut[0]
  }

  //通过name查找用户
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`

    const result = await connection.execute(statement, [name])

    return result[0]
  }

  //通过id查找用户
  async getNameById(userId) {
    const statement = `SELECT u.type,u.isflag,u.fix,u.createAt FROM users u WHERE id=?;`
    const result = await connection.execute(statement, [userId])
    return result[0][0]
  }

  async updateAvatarUrlById(avatarUrl, id) {
    const statement = `UPDATE users SET avatar = ? WHERE id = ?;`
    const [result] = await connection.execute(statement, [avatarUrl, id])
    return result
  }
}

module.exports = new UserService()

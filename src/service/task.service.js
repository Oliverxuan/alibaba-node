const connection = require('../app/database')

class TaskService {
  //创建新用户
  async addTask(id, thingObj) {
    //获取传递的参数
    const { thingid, value, grade, beginTime, endTime } = thingObj
    console.log(id, thingid, value, grade, beginTime, endTime)
    //sql语句
    const statement = `INSERT INTO task (user_id,thingid,value,grade,beginTime,endTime) VALUES (?,?,?,?,?,?);`
    //执行数据库操作
    const reslut = await connection.execute(statement, [
      id,
      thingid,
      value,
      grade,
      beginTime,
      endTime,
    ])
    //返回数据
    return reslut
  }

  async getTask(id) {
    const statement = `SELECT * FROM task where user_id=?`
    const result = await connection.execute(statement, [id])
    return result[0]
  }

  async deleteTask(id, deId) {
    const statement = `DELETE from task where user_id=? and thingid=?;`
    const result = await connection.execute(statement, [id, deId])
    return result
  }
}

module.exports = new TaskService()

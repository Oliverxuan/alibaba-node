const connection = require('../app/database')

class PetService {
  //添加coin
  async getInfoById(id) {
    const statement = `SELECT U.honey,U.insect,B.src,UB.growth,UB.b_id,UB.hunger,UB.isuse,UB.isHave from users as U
LEFT JOIN u_beetles as UB on U.id=UB.u_id
LEFT JOIN beetles as B ON B.id=UB.b_id
WHERE U.id = ?`
    const result = connection.execute(statement, [id])
    return result
  }
}

module.exports = new PetService()

const connection = require('../app/database')
const { getStore } = require('../controller/pet.controller')

class PetService {
  //添加coin
  async getInfoById(id) {
    const statement = `SELECT U.honey,U.insect,B.src,UB.growth,UB.b_id,UB.hunger,UB.isuse,UB.isHave from users as U
LEFT JOIN u_beetles as UB on U.id=UB.u_id
LEFT JOIN beetles as B ON B.id=UB.b_id
WHERE U.id = ?;`
    const result = connection.execute(statement, [id])
    return result
  }

  async getPetInfo(useAnimals,id){
    const statement = `SELECT  * FROM u_beetles  WHERE b_id = ? and u_id= ?;`
    const petInfo = connection.execute(statement, [useAnimals,id])
    return petInfo
  }
  
  async changeStatus(s,b_id, id) {
    const statement = `UPDATE u_beetles SET isuse=${s} WHERE b_id=? AND u_id=?;`
    const result = connection.execute(statement, [b_id,id])
    return result
  }

  async getPetInfoByUid(u_id){
    const statement = `SELECT B.cost,B.types,UB.isHave,UB.isuse,UB.b_id FROM beetles as B
LEFT JOIN u_beetles AS UB on B.id=UB.b_id
WHERE UB.u_id =?;`
    const petInfo = connection.execute(statement, [u_id])
    return petInfo
  }


  async hunger100(useAnimals,id) {
    const statement = `UPDATE u_beetles set hunger = 100 WHERE b_id = ? and u_id=?;`
    const result = connection.execute(statement, [useAnimals,id])
    return result
  }
  async hunger80(useAnimals,id) {
    const statement = `UPDATE u_beetles set hunger = hunger+20 WHERE b_id = ? and u_id=?;`
    const result = connection.execute(statement, [useAnimals,id])
    return result
  }
  async getUserPetInfoById(id) {
    const statement = `SELECT honey,insect FROM users WHERE id = ?;`
    const result = connection.execute(statement, [id])
    return result
  }
  async feeded(type, id) {
    const statement = `UPDATE users SET ${type}=${type}-1 WHERE id = ?;`
    const result = connection.execute(statement, [id])
    return result
  }

  async addGrowth(b_id,id) {
    const statement = `UPDATE u_beetles SET growth=growth+1  WHERE b_id = ? and u_id= ?;`
    const result = connection.execute(statement, [b_id,id])
    return result
  }

  async getStore(id){
    const statement = `SELECT B.src,B.\`name\`,B.cost,B.introduction,UB.b_id,UB.isHave,UB.isuse
                      FROM beetles as B
                      LEFT JOIN u_beetles AS UB on B.id=UB.b_id
                      WHERE UB.u_id =?;`
    const result = connection.execute(statement, [id])
    return result
  }

  async buyFood(id, type, num) {
        const statement = `UPDATE users SET ${type}=${type}+? WHERE id = ?;`
    const result = connection.execute(statement, [num,id])
    return result
  }

  async init(id) {
    const statement = `INSERT INTO 
 
u_beetles(u_id,b_id,growth,hunger,isuse,isHave) 
 
VALUES
 
(?,1,1,20,1,1),
(?,2,1,20,0,0),
(?,3,1,20,0,0),
(?,4,null,null,1,1),
(?,5,null,null,0,0),
(?,6,null,null,0,0);`
     const result = connection.execute(statement, [id,id,id,id,id,id])
    return result
  }

  async buyStatic(b_id,id) {
    const statement = `UPDATE u_beetles SET isHave=1 WHERE b_id=? AND u_id=?;`
    const result = connection.execute(statement, [b_id,id])
    return result
  }

 
}

module.exports = new PetService()

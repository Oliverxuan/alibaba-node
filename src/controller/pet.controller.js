const coinService = require('../service/coin.service')
<<<<<<< HEAD
const petService = require('../service/pet.service')

class PetController {
  async init(ctx, next) {
    const { id, name } = ctx.user[0]
    const result = await petService.init(id)
    if (result.length) {
      console.log("初始化成功！");
    }
    await next()
  }


  async getPet(ctx, next) {
    const { id, name } = ctx.user
    const coin = await coinService.getCoin(id)
    const result = await petService.getInfoById(id)
=======
const petSercice = require('../service/pet.sercice')

class PetController {
  async getPet(ctx, next) {
    const { id, name } = ctx.user
    const coin = await coinService.getCoin(id)
    const result = await petSercice.getInfoById(id)
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
    const arry = result[0]

    const obj = arry.filter((item, index, arr) => {
      return item.isuse === 1
    })
    const obj2 = obj.filter((item, index, arr) => {
      return item.hunger === null
    })
<<<<<<< HEAD

=======
    console.log(obj)
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
    let final = {
      code: 200,
      coin: coin[0].nums,
      useAnimals: obj[0].b_id,
      useBackground: obj2[0].src,
      animalsSrc: obj[0].src,
      growth: obj[0].growth,
      hunger: obj[0].hunger,
      honey: obj[0].honey,
      insect: obj[0].insect,
    }
    ctx.body = final
  }
<<<<<<< HEAD

  async feed(ctx, next) {
    const {id} = ctx.user
    const { u_id, b_id, growth, hunger } = ctx.petInfo
    const { type } = ctx.request.body.params
    const { honey, insect } = ctx.UserPetInfo

    console.log("123123123"+hunger);
    //食物不足
    if (type==="honey" && honey<=0) {
      ctx.body = {
        code :301,
        mes:"喂食失败，所需honey不足～"
      }
      return
    }
    if (type==="insect" && insect<=0) {
      ctx.body = {
        code :302,
        mes:"喂食失败，所需insect不足～"
      }
      return
    }
    //减少食物
    const feeded = await petService.feeded(type, id)

    //增加成长值 growth
    if (growth >= 100) {
      ctx.body = {
        code : 200,
        mes:"已经是最终形态～"
      }
      return
    }
    const growthed = await petService.addGrowth(b_id,id)
    //增加 hunger
    if (hunger >= 80) {

      const hunger100 = await petService.hunger100(b_id,id)
      console.log(hunger100+"hunger100");
      ctx.body = {
        code :201,
        mes:"喂食成功!"
      }
      return;
    }
    if (hunger <= 80) {
      const hunger80 = await petService.hunger80(b_id,id)
      console.log(hunger80);
          ctx.body = {
        code :200,
        mes:"喂食成功！"
      }
    }
  }
  async getStore(ctx, next) {
    const { id } = ctx.user
    const StoreSrc = await petService.getStore(id) 
    ctx.body = {
      code: 200,
      store:StoreSrc[0]
    }
  }

  async buyFood(ctx, next) {
    const { id, coins } = ctx.user
    const { type, num } = ctx.request.body
    const result = await petService.buyFood(id, type, num)
    ctx.num = 1*num
    if (result.length) {
      await next()
      return
    }
    ctx.body = {
      code: 300,
      mes:"购买失败！！"
    }
  }

  async changeStatic(ctx, next){
    const {id} = ctx.user
    const { b_id } = ctx.request.body
    const target = ctx.petInfo.filter((item, index, arr) => {
      return b_id == item.b_id
    })
    const {types}= target[0]
    const isArr = ctx.petInfo.filter((item, index, arr) => {
      return item.isuse == 1 && item.types ===types
    })
    console.log(isArr[0]);
    console.log(target);
    const  b_ids  = isArr[0].b_id
    ctx.b_ids = b_ids
    const s1 = 1
    const re = await petService.changeStatus( s1,b_id, id)

    await next()
  }
  async change2(ctx, next) {
    const s0 = 0
    const rs = await petService.changeStatus(s0,ctx.b_ids, ctx.user.id)
    ctx.body = {
      code: 200,
      mes:"更改成功！"
    }
  }

  async buyStatic(ctx, next) {
    const {id} = ctx.user
    const { b_id } = ctx.request.body
    const coins = ctx.user.coins
    const arr = ctx.petInfo.filter((item, index, arr) => {
      return b_id==item.b_id
    })
    const { cost, isHave } = arr[0]
     ctx.num = cost
    if (isHave == 0 ) {
      //cost 修改
      const result = await petService.buyStatic(b_id,id)
      if (result.length) {
        await next()
        return
      }
    }
    ctx.body = {
      code:300,
      mes:"修改失败，或已拥有"
    }
  }
  // async initUB1(ctx, next) {
    
  //   await petService.initUB1()
  //   console.log("init my");
  //   ctx.body = {
  //     code:200
  //   }
  // }
  // async initUB2(ctx,next){
  //   const { id } = ctx.id
  //   await petService.initUB2(id)
  //   console.log(id+"init 2");
  //   await next()

  // }
  // async initUB3(ctx,next){
  //   const { id } = ctx.id
  //   await petService.initUB3(id)
  //   console.log(id+"init 3");
  //   await next()
  // }
  // async initUB4(ctx,next){
  //   const { id } = ctx.id
  //   await petService.initUB4(id)
  //   console.log(id + "init 4");
  //   await next()


  // }
  // async initUB5(ctx,next){
  //   const { id } = ctx.id
  //   await petService.initUB5(id)
  //   console.log(id + "init 5");
  //   await next()

  // }
  // async initUB6(ctx,next){
  //   const { id } = ctx.id
  //   await petService.initUB6(id)
  //   console.log(id + "init 6");
  //   ctx.body = {
  //     code: 200,
  //     mes:"创建成功！ "
  //   }
  // }
=======
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
}

module.exports = new PetController()

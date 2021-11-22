const coinService = require('../service/coin.service')
const petService = require('../service/pet.service')

//b_id
const getPetInfo = async (ctx, next) => {
  const {id} = ctx.user
  const { useAnimals } = ctx.request.body.params
  const petInfo = await petService.getPetInfo(useAnimals,id)
  ctx.petInfo = petInfo[0][0]
  await next()
}


//u_id
const getPetInfoByUid = async (ctx, next) => {
  const{id} = ctx.user
  const petInfo = await petService.getPetInfoByUid(id)
  ctx.petInfo = petInfo[0]
  await next()
}
const getUserPetInfo = async (ctx, next) => {
  const { id } = ctx.user
  const UserPetInfo = await petService.getUserPetInfoById(id)
  ctx.UserPetInfo = UserPetInfo[0][0]
  await next()
}
const change = async (ctx, next) => {
  const { id } = ctx.user
  const s0 = 0
  const rs = await petService.changeStatus(s0, ctx.b_ids, id)
  ctx.body = {
    code:200
  }
}
const reduceCoin = async (ctx, next) => {
  const { id } = ctx.user
  const result = await coinService.reduceCoin(id,ctx.num)
  ctx.body = {
    code: 200,
    mes:'购买成功！'
  }
}

module.exports = {
  getPetInfo,
  getUserPetInfo,
  getPetInfoByUid,
  change,
  reduceCoin
}

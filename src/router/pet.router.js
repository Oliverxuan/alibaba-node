const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
<<<<<<< HEAD
const { getPet,feed ,getStore,buyFood, buyStatic,changeStatic,change2} = require('../controller/pet.controller')
const { getPetInfo, getUserPetInfo,reduceCoin } = require('../middleware/pet.middleware')
const { getCoins } = require('../middleware/coin.middleware')
const { getPetInfoByUid,change } = require('../middleware/pet.middleware')

=======
const { getPet } = require('../controller/pet.controller')
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a

//入口
const petRouter = new Router({ prefix: '/pet' })

//用户获取宠物信息
petRouter.get('/get', verifyAuth, getPet)

<<<<<<< HEAD
petRouter.post('/feed',verifyAuth,getPetInfo,getUserPetInfo,feed)

petRouter.post('/store',verifyAuth,getStore)

petRouter.post('/store/buy/food', verifyAuth, getCoins,buyFood,reduceCoin)

petRouter.post('/store/buy/static', verifyAuth, getCoins, getPetInfoByUid, buyStatic,reduceCoin)

petRouter.post('/store/change/static',verifyAuth,getPetInfoByUid,changeStatic,change2)
=======
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
module.exports = petRouter

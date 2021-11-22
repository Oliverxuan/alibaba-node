// 路由相关的js 注册接口适用

const Router = require('koa-router')

const { create, avatarInfo,text} = require('../controller/user.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

const { verifyUser, handlePassword,getId} = require('../middleware/user.middleware')
const { init } = require('../controller/pet.controller')
const {initCoin} = require('../controller/coin.controller')





//入口
const userRouter = new Router({ prefix: '/users' })

//用户注册接口
userRouter.post('/register', verifyUser, handlePassword, create,getId,init,initCoin)
userRouter.get('/:userId/avatar', avatarInfo)
userRouter.get('/text',text)

module.exports = userRouter

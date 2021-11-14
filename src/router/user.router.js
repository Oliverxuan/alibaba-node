// 路由相关的js 注册接口适用

const Router = require('koa-router')

const { create, avatarInfo } = require('../controller/user.controller')

const { verifyUser, handlePassword } = require('../middleware/user.middleware')

//入口
const userRouter = new Router({ prefix: '/users' })

//用户注册接口
userRouter.post('/register', verifyUser, handlePassword, create)
userRouter.get('/:userId/avatar', avatarInfo)

module.exports = userRouter

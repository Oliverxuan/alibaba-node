const Router = require('koa-router')

const { verifyAuth } = require('../middleware/auth.middleware')
const { changeCoin, getCoin } = require('../controller/coin.controller')

const coinRouter = new Router({ prefix: '/coin' })

//用户修改coin
coinRouter.post('/change', verifyAuth, changeCoin)

//用户查询coin
coinRouter.get('/get', verifyAuth, getCoin)

<<<<<<< HEAD

=======
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
module.exports = coinRouter

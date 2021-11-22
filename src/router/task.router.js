const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const {
  addTask,
  getTask,
  deleteTask,
} = require('../controller/task.controller')

//入口
const taskRouter = new Router({ prefix: '/task' })

//用户添加任务
taskRouter.post('/add', verifyAuth, addTask)
//用户获取任务
taskRouter.get('/get', verifyAuth, getTask)
//用户删除任务
taskRouter.post('/delete', verifyAuth, deleteTask)

module.exports = taskRouter

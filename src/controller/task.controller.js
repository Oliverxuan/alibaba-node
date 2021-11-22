const taskService = require('../service/task.service')

class TaskController {
  async addTask(ctx, next) {
    const { id, name } = ctx.user
<<<<<<< HEAD
    console.log("my id:"+id);
    console.log(id);
    console.log(ctx.request.body);
    const { thingObj } = ctx.request.body
    console.log(thingObj)
=======
    const { thingObj } = ctx.request.body
    console.log(thingObj + id)
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
    const result = await taskService.addTask(id, thingObj)
    console.log(result)
    if (result) {
      ctx.body = {
        status: 300,
        mes: '创建成功！',
        isFlag: true,
      }
      return
    }
    ctx.body = {
      status: 410,
      mes: '创建失败！',
      isFlag: false,
    }
  }

  async getTask(ctx, next) {
    const { id, name } = ctx.user
    const result = await taskService.getTask(id)
    console.log(result)
    ctx.body = result
  }

  async deleteTask(ctx, next) {
    const { id, name } = ctx.user
    const { deId } = ctx.request.body
    const result = await taskService.deleteTask(id, deId)
    console.log(result)
    ctx.body = result
  }
}

module.exports = new TaskController()

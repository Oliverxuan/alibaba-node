const service = require('../service/user.service')

const addTask = async (ctx, next) => {
  const { id, name } = ctx.user
  const { thingId, value, grade, beginTime, endTime } = ctx.body.thingObj

  await next()
}

module.exports = {
  addTask,
  getTask,
}

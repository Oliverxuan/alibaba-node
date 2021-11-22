const userService = require('../service/user.service')
const fileService = require('../service/file.service')
const { AVATAR_PATH } = require('../constants/file-path')
const fs = require('fs')

class UserController {
  //用户注册
  async create(ctx, next) {
    //获取参数
    const user = ctx.request.body

    //创建用户信息
    const result = await userService.create(user)

    //返回数据
    console.log(user.name + '创建用户成功')
    await next()
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx.params
    const avatarInfo = await fileService.getAvatarByUserId(userId)
    if (!avatarInfo) {
      ctx.body = 'isAvatar'
      return
    }
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }

  async text(ctx, next) {
    const result = await userService.getText()
    console.log
    ctx.body = result[0]
  }
}

module.exports = new UserController()

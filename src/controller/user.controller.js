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
    ctx.body = '用户创建成功'
  }

  async avatarInfo(ctx, next) {
    const { userId } = ctx.params
    const avatarInfo = await fileService.getAvatarByUserId(userId)
    ctx.response.set('content-type', avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}

module.exports = new UserController()

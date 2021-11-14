const { AVATAR_PATH } = require('../constants/file-path')
const fileService = require('../service/file.service')
const userService = require('../service/user.service')

class FileController {
  async saveAvatarInfo(ctx, next) {
    //获取信息
    console.log(ctx.req.file)
    const { filename, mimetype, size } = ctx.req.file
    const { id, name } = ctx.user
    //保存信息
    const result = await fileService.createAvatar(filename, mimetype, size, id)
    const avatarUrl = `${AVATAR_PATH}/${filename}`
    await userService.updateAvatarUrlById(avatarUrl, id)
    console.log(`${name}修改头像`)
    ctx.body = '上传成功！'
  }
}

module.exports = new FileController()

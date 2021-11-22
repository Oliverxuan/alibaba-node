const coinService = require('../service/coin.service')

class CoinController {
<<<<<<< HEAD
  async initCoin(ctx, next) {
    const { id, name } = ctx.user[0]
    const numes = 10
    const result = await coinService.changeCoin(id, numes)
    if (result.length) {
      console.log("coin 初始化完成！");
    }
   ctx.body = {
      id: id,
      name: name,
      mes:"注册成功！"
    }
}


=======
>>>>>>> 7f963c516f4d2c8f4db60e9bbb4231b49baa399a
  async changeCoin(ctx, next) {
    const { id, name } = ctx.user
    const { num } = ctx.request.body
    const result = await coinService.changeCoin(id, num)
    console.log(name + '用户修改金币:' + num + '成功！')
    if (result) {
      ctx.body = {
        code: 200,
        mes: '修改成功！',
        isFlag: true,
      }
      return
    }

    ctx.body = {
      code: 430,
      mes: '修改失败！！',
      isFlag: false,
    }
  }
  async getCoin(ctx, next) {
    const { id, name } = ctx.user
    console.log(id + '获取金币')
    let result = await coinService.getCoin(id)
    console.log(result)
    if (!result.length) {
      await coinService.setCoin(id)
      result = await coinService.getCoin(id)
    }
    ctx.body = result
  }
}

module.exports = new CoinController()

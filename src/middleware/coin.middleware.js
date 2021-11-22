const coinService = require("../service/coin.service")


const getCoins = async (ctx, next)=> {
    const { id, name } = ctx.user
    console.log(id + '获取金币')
    let result = await coinService.getCoin(id)
  if (!result.length) {
      await coinService.setCoin(id)
      result = await coinService.getCoin(id)
    }
    ctx.user.coins = result[0].nums
    await next()
}

module.exports = {
getCoins
}



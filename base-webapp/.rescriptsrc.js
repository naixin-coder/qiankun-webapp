/*
 * @Author: 刘林
 * @Date: 2021-04-01 15:36:44
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-01 15:37:43
 */
module.exports = {
  devServer: _ => {
    const config = _;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;

    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
}
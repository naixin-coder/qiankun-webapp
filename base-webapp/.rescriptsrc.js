/*
 * @Author: 刘林
 * @Date: 2021-04-01 15:36:44
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-02 15:45:07
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  webpack: (config) => {
    config.plugins = [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ];
    console.log(config)
    return config;
  },
  // devServer: _ => {
  //   const config = _;
  //   config.headers = {
  //     'Access-Control-Allow-Origin': '*',
  //   };
  //   config.historyApiFallback = true;

  //   // config.hot = false;
  //   config.hot = true;
  //   // config.watchContentBase = false;
  //   // config.liveReload = false;
  //   config.liveReload = true;

  //   return config;
  // },
}
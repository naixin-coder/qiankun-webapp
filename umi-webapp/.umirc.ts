/*
 * @Author: 刘林
 * @Date: 2021-04-06 14:22:37
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-12 10:09:20
 */
const { name } = require('./package.json');
import { defineConfig } from 'umi';

export default defineConfig({

  nodeModulesTransform: {
    type: 'none',
  },
  // devServer: {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   historyApiFallback: true,
  //   hot: false,
  //   watchContentBase: false,
  //   liveReload: false,
  // },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  // chainWebpack: (config) => {
  //   config.output.library(`${name}-[name]`);
  //   config.output.libraryTarget('umd');
  //   config.output.jsonpFunction(`webpackJsonp_${name}`);
  //   config.output.globalObject('window');
  //   return config;
  // },
  qiankun: {
    slave: {},
  },
});

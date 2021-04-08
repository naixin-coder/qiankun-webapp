/*
 * @Author: 刘林
 * @Date: 2021-04-06 14:57:35
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-06 14:57:58
 */
export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app1 unmount', props);
  },
};

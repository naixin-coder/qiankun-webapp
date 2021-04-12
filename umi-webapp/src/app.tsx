/*
 * @Author: 刘林
 * @Date: 2021-04-12 10:10:23
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-12 10:56:30
 */
import ReactDOM from 'react-dom';
import IndexPage from './pages/index';
export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props: any) {
    const { container } = props;
    console.log(container, container.querySelector('#root'))
    ReactDOM.render(<IndexPage />, container.querySelector('#root'));
  },
  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app1 unmount', props);
  },
};
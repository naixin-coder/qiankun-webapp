/*
 * @Author: 刘林
 * @Date: 2021-04-01 11:15:21
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-01 16:28:16
 */
import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render(props) {
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('state', state)
  });
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}


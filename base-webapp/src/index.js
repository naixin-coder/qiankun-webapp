/*
 * @Author: 刘林
 * @Date: 2021-04-01 10:44:48
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-01 16:51:18
 */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import { initGlobalState, registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Render() {
  return (
    <div id="subapp-viewport" />
  );
}

function render() {
  const container = document.getElementById('root');
  ReactDOM.render(<Render />, container);
}

registerMicroApps([
  {
    name: 'react-webapp',
    entry: '//localhost:3001',
    container: '#subapp-viewport',
    loader: () => render(),
    activeRule: '/app-react',
    props: { user: 1 }
  }
])

// 设置全局

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun'
})

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

setDefaultMountApp('/app-react');

start();
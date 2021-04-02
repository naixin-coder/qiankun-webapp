/*
 * @Author: 刘林
 * @Date: 2021-04-02 15:34:32
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-02 16:42:01
 */
// import styles from "./index.css";
// import { history } from 'react-router-dom';
import Home from './home';

export default (props) => {
  console.log(props);
  const { history } = props;
  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundImage: 'linear-gradient(to right,#7F00FF, #E100FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '510px', height: '510px', display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around', transform: 'rotate(45deg)' }}>
        <div style={{ width: '250px', height: '250px', background: '#fff', fontSize: '40px', lineHeight: '250px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }} onClick={() => { history.push('/app-react') }}>特效</div>
        </div>
        <div style={{ width: '250px', height: '250px', background: '#fff', fontSize: '40px', lineHeight: '250px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }}>项目</div>
        </div>
        <div style={{ width: '250px', height: '250px', background: '#fff', fontSize: '40px', lineHeight: '250px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }}>博客</div>
        </div>
        <div style={{ width: '250px', height: '250px', background: '#fff', fontSize: '40px', lineHeight: '250px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }}>个人空间</div>
        </div>
      </div>
    </div>
  )
}
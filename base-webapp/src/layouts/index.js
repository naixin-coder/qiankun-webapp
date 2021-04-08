/*
 * @Author: 刘林
 * @Date: 2021-04-02 15:34:32
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-06 14:41:50
 */
import styles from "./index.css";
// import { history } from 'react-router-dom';
import Home from './home';


export default (props) => {
  console.log(props);
  const { history } = props;
  return (
    <div className={styles.layouts} style={{ width: '100vw', minHeight: '100vh', backgroundImage: 'linear-gradient(to right,#7F00FF, #E100FF)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '510px', height: '510px', display: 'flex', flexFlow: 'wrap', justifyContent: 'space-around', transform: 'rotate(45deg)' }}>
        <div style={{ width: '200px', height: '200px', background: '#fff', fontSize: '40px', lineHeight: '200px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }} onClick={() => { history.push('/app-react') }}>React</div>
        </div>
        <div style={{ width: '200px', height: '200px', background: '#fff', fontSize: '40px', lineHeight: '200px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }}>Vue</div>
        </div>
        <div style={{ width: '200px', height: '200px', background: '#fff', fontSize: '40px', lineHeight: '200px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }} onClick={() => { history.push('/app-umi') }}>UMI</div>
        </div>
        <div style={{ width: '200px', height: '200px', background: '#fff', fontSize: '40px', lineHeight: '200px', textAlign: 'center' }}>
          <div style={{ transform: 'rotate(-45deg)' }}>个人空间</div>
        </div>
      </div>
    </div>
  )
}
/*
 * @Author: 刘林
 * @Date: 2021-04-01 11:15:21
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-01 11:38:30
 */
import { Suspense } from 'react';
import DemoPage from './demo';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={DemoPage} />
          <Route path="/about" component={() => <div>About</div>} />
        </Switch>
      </Suspense>
    </Router >
  );
}

export default App;

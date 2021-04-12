/*
 * @Author: 刘林
 * @Date: 2021-04-02 16:23:27
 * @LastEditors: 刘林
 * @LastEditTime: 2021-04-12 10:11:09
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './layouts';
import Home from './layouts/home';

export default () => {
  alert(2);
  return (
    <Router>
      <Switch>
        <Route path="/app-react" component={Home}></Route>
        <Route path="/app-umi" component={Home}></Route>
        <Route path="/" component={Layout}></Route>
      </Switch>
    </Router>
  );
}

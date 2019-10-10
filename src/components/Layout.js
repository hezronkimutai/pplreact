import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
function Layout() {
  return (
    <div className="container">
        <Router>
            <Route exact path="/signin" component = {Signin}/>
            <Route exact path="/signup" component = {Signup}/>
        </Router>
    </div>
  );
}

export default Layout;

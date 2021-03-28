import React from 'react';
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
// import Dashboard from './Pages/Dashboard'

export default function Router() {
    return (
      <BRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BRouter>
    );
  }
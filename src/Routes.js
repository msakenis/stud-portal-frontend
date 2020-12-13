import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading } from './components';

const Homelazy = lazy(() => import('./pages/Home/Home'));
const Loginlazy = lazy(() => import('./pages/Login/Login'));
function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Homelazy} />
          <Route exact path="/login" component={Loginlazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;

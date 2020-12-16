import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading, PrivateRoute } from './components';

const Homelazy = lazy(() => import('./pages/Home/Home'));
const Loginlazy = lazy(() => import('./pages/Login/Login'));
const ViewStudentslazy = lazy(() =>
  import('./pages/ViewStudents/ViewStudents')
);
const AddStudentslazy = lazy(() => import('./pages/AddStudent/AddStudent'));
const EditStudentslazy = lazy(() => import('./pages/EditStudent/EditStudent'));
function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" component={Loginlazy} />
          <PrivateRoute exact path="/" component={Homelazy} />
          <PrivateRoute exact path="/students" component={ViewStudentslazy} />
          <PrivateRoute exact path="/add-student" component={AddStudentslazy} />
          <PrivateRoute
            exact
            path="/edit-student/:id"
            component={EditStudentslazy}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;

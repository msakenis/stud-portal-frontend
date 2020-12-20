import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading, PrivateRoute } from './components';

const Homelazy = lazy(() => import('./pages/Home/Home'));
const Loginlazy = lazy(() => import('./pages/Login/Login'));
const ViewStudentslazy = lazy(() =>
  import('./pages/ViewStudents/ViewStudents')
);
const ViewCourseslazy = lazy(() => import('./pages/ViewCourses/ViewCourses'));
const AddStudentslazy = lazy(() => import('./pages/AddStudent/AddStudent'));
const AddCourselazy = lazy(() => import('./pages/AddCourse/AddCourse'));
const EditStudentslazy = lazy(() => import('./pages/EditStudent/EditStudent'));
const EditCourselazy = lazy(() => import('./pages/EditCourse/EditCourse'));
function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/login" component={Loginlazy} />
          <PrivateRoute exact path="/" component={Homelazy} />
          <PrivateRoute exact path="/students" component={ViewStudentslazy} />
          <PrivateRoute exact path="/courses" component={ViewCourseslazy} />
          <PrivateRoute exact path="/add-student" component={AddStudentslazy} />
          <PrivateRoute exact path="/add-course" component={AddCourselazy} />
          <PrivateRoute
            exact
            path="/edit-student/:id"
            component={EditStudentslazy}
          />
          <PrivateRoute
            exact
            path="/edit-course/:id"
            component={EditCourselazy}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;

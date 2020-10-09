import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./views/Home'));
const EventRoutes = lazy(() => import('./views/routes'));

function App() {
  return (
    <Suspense fallback="loading...">
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/event' component={EventRoutes} />
      </Router>
    </Suspense>
  );
}

export default App;

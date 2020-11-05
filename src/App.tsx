import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Loader from './components/Loader';

const Home = lazy(() => import('./views/Home'));
const EventRoutes = lazy(() => import('./views/routes'));
const PublicEvents = lazy(() => import('./views/PublicEvents'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/event' component={EventRoutes} />
        <Route exact path='/public-events' component={PublicEvents} />
      </Router>
    </Suspense>
  );
}

export default App;

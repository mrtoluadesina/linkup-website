import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./views/Home'));
const Event = lazy(() => import('./views/Event'));
const BigDay = lazy(() => import('./views/BigDay'));

function App() {
  return (
    <Suspense fallback="loading...">
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/event' component={Event} />
        <Route path='/big-day' component={BigDay} />
      </Router>
    </Suspense>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./views/Home'));
const Event = lazy(() => import('./views/Event'));
const BigDay = lazy(() => import('./views/BigDay'));
const Gifts = lazy(() => import('./views/Gifts'));

function App() {
  return (
    <Suspense fallback="loading...">
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/event' component={Event} />
        <Route path='/big-day' component={BigDay} />
        <Route path='/gifts' component={Gifts} />
      </Router>
    </Suspense>
  );
}

export default App;

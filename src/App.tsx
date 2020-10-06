import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./views/Home'))

function App() {
  return (
    <Suspense fallback="loading...">
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </Suspense>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Event = lazy(() => import('./Event'));
const BigDay = lazy(() => import('./BigDay'));
const Gifts = lazy(() => import('./Gifts'));

function App() {
    return (
        <Suspense fallback="loading...">
            <Router>
                <Route exact path='/event' component={Event} />
                <Route exact path='/event/big-day' component={BigDay} />
                <Route exact path='/event/gifts' component={Gifts} />
            </Router>
        </Suspense>
    );
}

export default App;

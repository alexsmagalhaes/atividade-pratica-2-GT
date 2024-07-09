import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/user/:id" component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/**
 * CSS and JS for bootstrap
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap';
/**
 * Components
 */
import HomeComponent from './components/homeComponent';
import HeaderComponent from './components/headerComponent';
import NewUserComponent from './components/newUserComponent';
import NewExerciseComponent from './components/newExerciseComponent';
/**
 * Definiftions
 */
function App() {
  return (
    <Router>
      <HeaderComponent />
      <br />
      <div className="container">
        <Route path="/" exact component={HomeComponent} />
        <Route path="/users" component={NewUserComponent} />
        <Route path="/exercises" component={NewExerciseComponent} />
      </div>
    </Router>
  );
}

export default App;

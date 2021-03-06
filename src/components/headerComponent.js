
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">ExerciseTracker</Link>
          <button className="navbar-toggler" data-toggle="collapse" type="button" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/users" className="nav-link">Users List</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/exercises" className="nav-link">Exercises List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

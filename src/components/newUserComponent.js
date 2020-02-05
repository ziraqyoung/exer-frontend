import React, { Component } from 'react';
import axios from 'axios';

export default class NewUserComponenent extends Component {
  state = {
    username: ''
  }
  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username
    }
    axios.post('http://localhost:5000/api/exercise/new_user', user)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
    this.setState({
      username: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Input your Username"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
        </div>
        <div className="form-group">
          <input
            className="btn btn-outline-success"
            type="submit"
            value="Add User"
          />
        </div>
      </form>
    )
  }
}
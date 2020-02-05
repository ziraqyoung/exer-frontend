import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';

export default class NewExerciseComponent extends Component {
  state = {
    description: '',
    duration: 0,
    users: [],
    username: '',
    date: Date.now()
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/exercise/user_log')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data,
            username: response.data[0].username
          })
        }
      })
      .catch(err => console.log(err))
  }
  // event handlers
  onUserChange = e => {
    this.setState({
      username: e.target.value
    })
  }
  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    })
  }
  onChangeDate = date => {
    this.setState({
      date: date
    })
  }
  render() {
    return (
      <form>
        <div className="form-group">
          <label>User</label>
          <select
            ref="userInput"
            onChange={this.onUserChange}
            value={this.state.username}
            required
            className="form-control"
          >
            {
              this.state.users.map(user => {
                return (
                  <option
                    key={user.username}
                    value={user.username}
                  >
                    {user.username}
                  </option>
                )
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            onChange={this.onDescriptionChange}
            value={this.state.description}
            className="form-control"
            rows="8"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Duration</label>

        </div>
        <div className="form-group">
          <label>Date</label>
          <DatePicker
            selected={this.state.date}
            onChange={this.onChangeDate}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-secondary" value="Add Exercise" />
        </div>

      </form>
    );
  }
}
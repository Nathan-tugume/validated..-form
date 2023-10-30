// App.js
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { email, value } = event.target;
    this.setState({ [email]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // Perform login/authentication logic here
    console.log('email:', email);
    console.log('Password:', password);
  }

  render() {
    const {email, password } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default App;


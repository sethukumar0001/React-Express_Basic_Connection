import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import '../App.css';
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.displayLogin = this.displayLogin.bind(this);
	}

	displayLogin(e) {
		e.preventDefault();
		alert("hello")
		console.log(this.state.email);
		console.log(this.state.password);
		fetch('/login', {
	  method: "POST",
	  
	  body: JSON.stringify({
		email:'this.state.email',
		password:'this.state.password',
		
	  })
	})
	.then((response) => response.json())
      .then((responseJson) => {
        return responseJson.success;
      })
      .catch((error) => {
        console.error(error);
      });
  }
	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })}
							name="password"
						/>
					</div>
					<input type="submit" value="Login" />
				</form>

				<center><Link to="/register">Create an account</Link></center>
				<center><Link to="/select">getting data</Link></center>
			</div>
		);
	}
}

export default Login;

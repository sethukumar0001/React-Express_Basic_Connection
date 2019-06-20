import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import '../App.css';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstname:'',
			lastname:'',
			email: '',
			password: '',
	
		};
		this.displayLogin = this.displayLogin.bind(this);
	}

	displayLogin =async (e)=> {
		e.preventDefault();
        // const data = this.state
        // axios.post('http://localhost:5000/add',data)
        //     .then((result) => {
        //         console.log(result)
		//     })
		const data = this.state
		const response = await fetch('http://localhost:5000/backend/add', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({	data }),
		});
		const body = await response.text();	
		this.setState({ response: body });
		console.log(data);
	}
	


	
	render() {
		console.log(this.state.response);
		return (
			
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<div className="name">
						<input
							type="text"
							placeholder="First_Name"
							name="firstname"
							value={this.state.firstname}
							onChange={e => this.setState({ firstname: e.target.value })}
						/>
					</div>
					<div className="name">
						<input
							type="text"
							placeholder="Last_Name"
							name="lastname"
							value={this.state.lastname}
							onChange={e => this.setState({ lastname: e.target.value })}
						/>
					</div>

					<div className="email">
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
						/>
					</div>

					<div className="pasword">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })}
						/>
					</div>

					<input type="submit" value="Register" />
				</form>

				<center><Link to="/">Login Here</Link></center>
			</div>
		);
	}

}
export default Register;
import React from 'react';
export default class select extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			data:[]
		};
    };
  componentDidMount() {
    fetch('http://localhost:5000/backend/userlist')
      .then(res => res.json())
      .then(members => this.setState({ data: members.data }));
  }

render() {
  return (
  <div className="container"> 
      <div >
          <table >
              <thead>
                  <tr>
                      <th>firstName</th>
                      <th>Email</th>
                  
                  </tr>
              </thead>
              <tbody>
              {this.state.data.map(member =>
                  <tr key={member.id}>
                  <td>{member.first_name}</td>
                  <td>{member.email}</td>
                  </tr>
              )}
              </tbody>
          </table>
      </div>
  </div>
  );
}
}
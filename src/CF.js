import React from 'react';
class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div style={{ border: '2px solid blue' }}>
				<h1>User Form </h1>
				<form onSubmit={this.handleSubmit}>
					<input name="name" value={this.state.name} onChange={this.handleChange} />
					<input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default User;

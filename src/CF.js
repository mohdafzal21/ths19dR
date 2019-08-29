import React from 'react';
class User extends React.Component {
	state = {
		name: '',
		handle: '',
		avatarURL: ''
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.AddList(this.state);
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		console.log('inseide CF', this.props);
		return (
			<div style={{ border: '2px solid blue' }}>
				<h1>User Form </h1>
				<form onSubmit={this.handleFormSubmit}>
					<input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
					<input
						placeholder="handle"
						name="handle"
						type="text"
						value={this.state.handle}
						onChange={this.handleChange}
					/>
					<input
						placeholder="avatarurl"
						name="avatarURL"
						type="text"
						value={this.state.avatarURL}
						onChange={this.handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default User;

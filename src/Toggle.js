import React from 'react';

class Toggle extends React.Component {
	state = {
		isToggle: false
	};
	toggle = () => {
		this.setState({
			isToggle: !this.state.isToggle
		});
	};
	render() {
		return (
			<div>
				<button onClick={this.toggle}>Toggle</button>

				{this.state.isToggle && <h1>Show this on Click condition</h1>}
			</div>
		);
	}
}

export default Toggle;

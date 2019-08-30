import React from 'react';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date()
		};
		console.log('Inside Constructor function');
	}

	componentDidMount() {
		console.log('Inside Component Did MOunt');
		this.timerId = setInterval(() => {
			this.setState({
				time: new Date()
			});
		}, 1000);
	}

	componentWillUnmount() {
		this.timerId.clearInterval();
	}

	render() {
		console.log('Inside render');
		return (
			<div>
				<h1 className="display-1">Time{this.state.time.getSeconds()} </h1>
			</div>
		);
	}
}

export default Timer;

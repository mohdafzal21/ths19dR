import React, { Component } from 'react';
import axios from 'axios';
class Zen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			isloading: true
		};
	}
	async componentDidMount() {
		const response = await axios.get('https://api.github.com/zen');
		console.log('coming from didmount', response);
		this.setState({
			data: response.data,
			isloading: false
		});
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('coming from didupdata props', prevProps);
		console.log('coming from didupdata prevState', prevState);

		//async store data in localstorage
	}

	render() {
		const { isloading, data } = this.state;
		return (
			<div>
				<h1>Quotes </h1>
				{isloading ? (
					'loading'
				) : (
					<div>
						<h1>{data}</h1>
					</div>
				)}
				{isloading ? (
					'loading'
				) : (
					<div>
						<h1>{data}</h1>
					</div>
				)}
			</div>
		);
	}
}

export default Zen;

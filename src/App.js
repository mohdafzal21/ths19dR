import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
// import CC from './CC'
import List from './List';
import User from './CF';
import NameForm from './Uf';
import Toggle from './Toggle';
import Timer from './Timer';
import Zen from './Zen';
import P0 from './P0';
class App extends React.Component {
	state = {
		count: 0,
		contacts: [
			{
				id: '1',
				name: 'afzal',
				handle: '@afzal',
				avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
			},
			{
				id: '2',
				name: 'tom',
				handle: '@tom',
				avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
			},
			{
				id: '3',
				name: 'Richard',
				handle: '@richard',
				avatarURL: 'https://res.cloudinary.com/dspz2t0am/image/upload/v1545377545/undraw_experts3_3njd.svg'
			}
		]
	};

	AddList = (listItem) => {
		console.log('inside line no35 App component APP', listItem);

		this.setState({
			contacts: [ ...this.state.contacts, listItem ]
		});
	};

	increment = () => {
		console.log('hello', this);
		this.setState({
			count: this.state.count + 1
		});
	};
	decrement = () => {
		this.setState({
			count: this.state.count - 1
		});
	};
	removeContacts = (contact) => {
		console.log('inside app.js', contact);
		const updateState = this.state.contacts.filter((c) => c.id !== contact.id);
		console.log('only updated state', updateState);
		this.setState({
			contacts: updateState
		});
	};
	render() {
		const { count, contacts } = this.state;
		return (
			<div>
				<P0 />
				{/* <Zen name={'afzal'} /> */}
			</div>
		);
	}
}
export default App;

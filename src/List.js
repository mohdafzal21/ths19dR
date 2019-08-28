import React from 'react';
class List extends React.Component {
	state = {
		query: ''
	};
	updateQuery = (event) => {
		this.setState({
			query: event.target.value.trim()
		});
	};
	resetQuery = () => {
		this.setState({
			query: ''
		});
	};
	render() {
		const { contacts, removeContacts } = this.props;
		const { query } = this.state;
		const showContacts =
			query == '' ? contacts : contacts.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));
		return (
			<div style={{ border: '2px solid black' }}>
				<h1>{query}</h1>
				<input placeholder="search" value={query} onChange={this.updateQuery} />
				{query && (
					<div>
						<h1>
							Now Showing Contacts <span onClick={this.resetQuery}>X</span>{' '}
						</h1>
						{showContacts.length} of {contacts.length}
					</div>
				)}

				<h1>List </h1>
				{showContacts.map((contact) => (
					<div style={{ border: ' 2px dashed red' }} key={contact.id}>
						<h2>
							{contact.name} : {contact.handle}
						</h2>
						<img alt={contact.name} src={contact.avatarURL} style={{ width: '300px', height: '200px' }} />
						<button onClick={() => removeContacts(contact)}>Remove Item</button>
					</div>
				))}
			</div>
		);
	}
}

// const List = (props)=>{
//      console.log('list',props)
//     return(
//         <div style={{border: "2px solid black"}}>
//          <h1>List </h1>
//          {props.contacts.map((contact)=>(
//                   <div style={{border:" 2px dashed red"}} key={contact.id}>
//                  <h2>{contact.name} : {contact.handle}</h2>
//          <img alt={contact.name} src={contact.avatarURL} style={{width:"300px", height:"200px"}}/>
//          <button onClick={()=>props.removeContacts(contact)}>Remove Item</button>
//                       </div>
//          ))}

//         </div>
//     )
// }

export default List;

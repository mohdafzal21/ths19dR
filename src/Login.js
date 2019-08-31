import React from 'react';
import {Redirect} from 'react-router-dom'
class Login extends React.Component {
	state = {
		name: '',
        password:"",
        isRedirect : false
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
        console.log(this.state);
    
        this.props.isLoginHandler()
        
       
    };
    
    // isRedirectAuth=()=>{
    //     this.setState({
    //         isRedirect: true
    //     })
    // }

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
        console.log('inseide Login', this.props);
        const {from} = this.props.location.state || {from : {pathname: '/'}}
        console.log('from /******', from)
        console.log(this.state.isRedirect)
        if(this.state.isRedirect === true){
            return ( <Redirect to={from}/> )
        }

		return (
			<div style={{ border: '2px solid blue' }}>
				<h1>User Form </h1>
				<form onSubmit={this.handleFormSubmit}>
					<input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
					<input
						placeholder="password"
						name="password"
						type="password"
						value={this.state.pasword}
						onChange={this.handleChange}
					/>
					
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Login;

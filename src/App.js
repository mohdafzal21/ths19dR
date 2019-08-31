import React, { Component } from 'react';
import './App.css'
import {Route, Switch, Link,NavLink } from 'react-router-dom'
import List from './List'
import contacts from './Contactsdata'
import SideBar from './Sidebar'
const Home = ()=>(
	<h1>Home Page</h1>
)

const About = ()=>(
	<h1>About Page</h1>
)
const Product = ()=>(
	<h1>Product Page</h1>
)
const Topic =(props)=>{
	console.log('****************Topic fn',props)
	return(
		<div>
			<h1>Hello {props.match.params.topicId} </h1>
		</div>
	)
}
const Topics =(props)=>{
	console.log('Topics fn',props)
	const {match} = props
	return(
		<div>
			<Link  to={`${match.url}/redirect`}> redirect</Link>
			<br/>
			<Link  to={`${match.url}/params`}> params</Link>
			<br/>
			<Link  to={`${match.url}/props`}> props</Link>
            
			<Route path={`${match.url}/:topicId`} component={Topic}/>
			{/* <Route path='/topics/redirect' component={Topic}/>
			<Route path='/topics/params' component={Topic}/>
			<Route path='/topics/props' component={Topic}/> */}
		</div>
	)
}
const MoreDetails =(props)=>{
	console.log(props)
	return(
		<div>
			<h1>params Id </h1>
		</div>
	)
}
const List1 =  (props)=>{
	console.log('**List****',props)
	const {match} = props
	return(
		<div>
			<Link to={`${match.url}/1`}>
		
				List component 1
				
			
			</Link>
			<br/>
			<Link to={`${match.url}/2`}>
		    List component 2
			</Link>
			<br/>
			<Link to={`${match.url}/3`}>
		List component 3
			</Link>
			<Switch>
			<Route exact path={`${match.url}/:id`} component={MoreDetails}/>
			<Route path={`${match.url}`} render={()=>  <h1>Please select a list</h1> } />
			</Switch>
		</div>
	)
}




class App extends Component {
	render() { 
		return ( 
			<div>
				

				<Link   to='/'  >Home</Link>
				<Link  to='/about'  >About</Link>
				<Link  to='/product'  >Product</Link>
				<Link  to='/topics'  >Topics</Link>
				<Link  to='/dashboard'  >Dashboard</Link>
				<Link  to='/list'  >List</Link>
				<Link  to='/sidebar'  >sidebar</Link>
				<Switch>
				
				<Route exact path='/' component={Home}/>
				<Route path='/about' component={About}/>
				<Route path='/product' component={Product}/>
                 <Route path='/topics' component={Topics}/>
				 <Route path='/dashboard' component={Topics}/>
				 <Route  path='/list' component ={List1}/>
                <Route path='/sidebar' component={SideBar} />
			     <Route render={()=> <h1>404 Not Found </h1>}/>
				</Switch>
			</div>
		  );
	}
}
 
export default App;
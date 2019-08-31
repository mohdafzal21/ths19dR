import React, { Component } from 'react';
import { Route, Link, Switch, NavLink,Redirect} from 'react-router-dom'
import Login from './Login'
import List from './List'
import Sidebar from './Sidebar'
import Timer from './Timer'
const Home = ()=> <h1>Home page</h1>

//HOC - Takes a component as an argument and return a component based on the condition 
const PrivateRoute = ({component:Component, isAuth, ...props})=>{
  return <Route 
		  {...props}
		  render = {(props)=> isAuth === true ? 
		  <Component {...props}/>
		  : 
		  <Redirect  to={{ pathname: '/login', state: { from: props.location } }}/>
		  }
  />
}
{/* <Redirect  to={{ pathname: '/login', state: { from: props.location } }}/> */}
class App extends Component {
	state = { 
		isAuth : false
	  }
	  isLoginHandler =()=>{
		  this.setState({
			  isAuth: true
		  })
	  }
	  isLogout =()=>{
		this.setState({
			isAuth: false
		})
	}
	  
	render() { 
		return ( 
			<div>
				<Link to='/'>home </Link>
				<Link to='/login'>Login</Link>
				<Link to='/list'>List</Link>
				<Link to='/timer'>timer</Link>
				<button onClick={()=>this.isLogout()}>Logout</button>
				<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/login' component={(props)=><Login {...props} isLoginHandler={this.isLoginHandler} isAuth={this.state.isAuth}/>}/>
            <PrivateRoute path='/list' isAuth={this.state.isAuth} component={Sidebar}/>
			<PrivateRoute path='/timer' isAuth={this.state.isAuth} component={Timer}/>
		{/* {this.state.isAuth ?	<Route path='/list' component={(props)=><List {...props}/>}/>	 : 	<Route path='/login' component={Login}/>} */}
				</Switch>

			</div>
		 );
	}
}
 
export default App;



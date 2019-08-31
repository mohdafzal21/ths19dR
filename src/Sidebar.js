import React, { Component } from 'react';
import {Link, Route , BrowserRouter as Router } from 'react-router-dom'
const data = [
    {
        path: '/',
        main: ()=><h1>Home</h1>,
        sideBar: ()=><h1>Home</h1>,
        exact : true
    },
    {
        path: '/about',
        main: ()=><h1>About</h1>,
        sideBar: ()=><h1>About</h1>,
    },
    {
        path: '/products',
        main: ()=>(<h1>products</h1>),
        sideBar: ()=>(<h1>products</h1>),
    }
]
const home = ()=>(
    <h1>Home</h1>
)

const SideBar = (props)=> {
    const {match} = props
    return(
        <Router basename="sidebar">

        <div style={{display:"flex"}}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
              <ul style={{ listStyleType: "none", padding: 0 }}>
               <Link to={`${match.url}`}>Home</Link> <br/>
               <Link to={`${match.url}/about`}>About</Link> <br/>
                <Link to={`${match.url}/products`}>products</Link> <br/>
                <h1>After router</h1>
                <Link to='/'>Home</Link> <br/>
               <Link to='/about'>About</Link> <br/>
                <Link to='/products'>products</Link> <br/>
                </ul>
            {data.map((route)=>{
                console.log('inside a routes ',route)
                return (
                <div>
                    <Route 
                     path={route.path}
                     exact={route.exact}
                     component={route.sideBar}

                    />
                </div>
            )})}
            </div>
            <div>
            {data.map((routes)=>(
                <div>
                    <Route 
                     path={routes.path}
                     component={routes.main}
                     exact={routes.exact}
                    />
                </div>
            ))}
            </div>
        </div>
        </Router>
    )
}

export default SideBar
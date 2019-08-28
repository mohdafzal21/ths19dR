import React from 'react';
class CC extends React.Component{
    constructor(props){
    super(props)
     this.state ={ count : 0}
            console.log("constructor" , this)
            this.increment = this.increment.bind(this)
    }
     increment(){
        console.log("inside method increment" , this)
        this.setState({
            count : this.state.count + 1
       })
    }
    render(){
        return(
            <div>
            <h1>Version before private Class Fields</h1>
            <h1>Count : {this.state.count} </h1>
            <button onClick={this.increment}>Inc</button>
            <button onClick={this.decrement}>Dec</button>
        </div>
        )
    }
}

export default CC